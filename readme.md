1. Micorfrontend with module fedration 
	-> Module fedration introdused into webpack2 or we can say feature of webpack5.
	
2. What is Mono repo and mutiple repo?

3. Mono repo:-
	All projects into one repo. (Means we have only one repo for clm, eFiduciary, docusign).

4. Muti repo:-
	While we have seprate repo for each project and we host them into on that is called as multi repo.
	
Advantage and disadvantage:-
1. As we use same repo so its easy to reuse code in mono repo.  But in muti repo its not easy to resuse code.
2. Build and deployment speed.
	->	In case of mono repo as we have all code in same repo so build time and deployment also take much time.
	-> In mutlti repo we have mutiple repo and we can build and deploy each repo sepratly. so build size also small and deployment time also less.

3. Muti repo required more collabrotion as teams might work on different different repo. but its requied less cordination in case of the mono repo as all team work on same repo.
4. In muti repo we need to maintain version for mutiple applications (muiple repo). so if we deploy any one application version update for that application but in case of mono repo we not need to maintain only one version.

5. In case of mono repo complexity is high as code increate day by day and its tuff for dev to maintain big code base. but in multi repo its east to manage with less complexity. and each team mantain there own repo.
6. 
 
 
 
 1. Create workspace
	ng new mono-repo-workspace --create-application=false
	
2.  Create host project	
	ng g application host-app --routing --style=scss
	
3.  ng g application mfe-app --routing --style=scss

4. run both application sepratly
	npm start host-app -o
	npm start mfe-app -o 
	

To use moule fedration we need to tell angular cli webpack that we want to use module fedration. 
	Webpack is part of Angular CLI means inside angular cli package. and moule fedration is part of webpack.
	But we need to tell angular cli that we want to use angular cli that we want to use module fedration package.
	-> Webpack is feature of angular cli and  module fedration is package inside angular cli.
	

To tell CLI we use custom builder. and we use "@angular-architects/module-federation" custom builder.
	
	
	
	npm run ng add @angular-architects/module-federation --project host-app --port 4200 --type host 
		it will create webpack config inside host-app.
	
	npm run ng add @angular-architects/module-federation --project mfe-app --port 4300 --type remote 
	
	http://localhost:4200/
	http://localhost:4300/
	
	
Video 5:-




npm start mfe-app -o
