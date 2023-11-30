ROUTING:
It is used for navigation.
It enables navigation by interpreting the URL acts as an instruction to change the view.
Every component is associated with one unique URL.
Following are the steps involve:
1. Declare an array of objets to map path(url with a component) in app.route.ts file
2. Mention the provider of this routes inside app.config.ts file.
3.Write following tag in app component html file.
   <router-outlet>
4.Instead of href attribute use routerLink attribute and specify URL as mentioned in the first step.
5.Import RouterModule in the component needed

