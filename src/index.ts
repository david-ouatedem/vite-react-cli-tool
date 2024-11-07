#!/usr/bin/env node
import { Command } from 'commander';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();

program
    .command('create <project-name>')
    .description('Create a new React project with Vite')
    .action(async (projectName: string) => {
        const chalk = (await import('chalk')).default;

        console.log(chalk.green(`Creating project: ${projectName}`));

        try {
            execSync(`npm create vite@latest ${projectName} -- --template react`, { stdio: 'inherit' });

            const folders = ['assets', 'components', 'hooks', 'pages', 'services', 'store', 'styles', 'utils'];
            folders.forEach(folder => {
                const folderPath = path.join(projectName, 'src', folder);
                fs.mkdirSync(folderPath, { recursive: true });
            });

            console.log(chalk.green('Project structure created successfully!'));
        } catch (error) {
            console.error(chalk.red('Failed to create the project:', error));
        }
    });

program.parse(process.argv);