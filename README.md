# Yarn2 Session - Sample Code

## Introduction to Modern Yarn (Yarn 2, Yarn 2+, Yarn Modern)

### Features:
1. Workspaces
2. Constraints
3. Plug’n’Play
4. Offline Cache
5. Plugins
6. Zero-Install

### Workspaces

1. Yarn workspaces makes it easy to work with mono-repos.
2. Reduces hot reload time when we use shared packages and we can use pre-built packages.
3. We can also use different versions of shared packages amongst our workspaces.
4. We can apply constraints on dependencies of all workspaces, which help keep stability checks on versions of dependencies we are using.
5. It can also help stop usage of blacklisted dependencies, or allow only whitelisted dependencies.

### Constraints

1. Create constraints.pro file to add constraints to your workspace(s).
2. Not written in JS. Written in Prolog - fact-based rule engine.
3. It starts with a list of facts that are always true, and a list of predicates that basically read as "predicate f(X) is true if u(X) and v(X) are both true". By computing for which values of X are u(X) and v(X) true, Prolog is able to automatically compute the list of values for which f(X) would be true.
4. Example: fact could be that root 

### Plug’n’Play

1. Without PnP - Node_Modules
<img width="263" alt="Screenshot 2022-03-25 at 3 19 43 PM" src="https://user-images.githubusercontent.com/6937549/160113854-4de23d7f-fb25-413a-81d5-c07c902214d6.png">


2. With PnP - Yarn Cache
<img width="262" alt="Screenshot 2022-03-25 at 3 20 03 PM" src="https://user-images.githubusercontent.com/6937549/160113897-732bbce3-a7a0-49b1-b469-b67de3844f2b.png">
<img width="266" alt="Screenshot 2022-03-25 at 3 20 31 PM" src="https://user-images.githubusercontent.com/6937549/160113933-059e28b6-92f4-4ff7-a390-17e0369455bf.png">


### Offline Cache

1. Single zip files are cached; optimized
2. Helps in achieving Zero-Install
3. Supports global as well as project-level cache

### Plugins

1. Pre-build and custom-built plugins can be used to do different things
2. Even yarn install is a plugin
3. It will work in a way webpack plugins work
4. Example: automatically pull in @types packages a dependencies in TS projects
5. Workspace-tools plugin can be used to programmatically run some commands on all workspaces
6. Version plugin can be used to manage release versions of different packages

### Zero-Install

1. Helps improve project stability
2. Increases the chances of consecutive installs giving same result
3. Makes every piece of code static by checking it in in optimized way.
4. Murphy’s law - Something that can happen, will happen. So, anything that can fail, will eventually fail.
