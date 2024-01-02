# Hands_On_React

core concept

...

# parcel ? read documentation

- Dev Build
- local server
- HMR = Hot Module Replacement
  |-> parcel uses a File Watching Algorithm - writeen in C++
  |-> Caching - faster builds
  |-> Image Optimization HOw ?
  |-> minification
  |-> Bundling
  |-> compress
  |-> consistent hashing ?
  |-> code splitting ?
  |-> Differential bundling - support older browser
  |-> Diagnostic
  |-> Error Handling
  |-> HTTPS
  |-> Tree shaking -> study (Remove unused file)
  |-> Different Dev and prod bundles

# NK Food

/\*\*

- Header
- -Logo
- -Nav Items
- Body
- -Search
- -RestaurantContainer
- -RestaurCard
- -image
- -cussines name of res stare rating etc , delivery time
- Footer
  _-CopyRoight
  _-links
  _- Address
  _-Contact
  \*/

Two Types of Export/Import

-Default Export/Import

export default component
import Component from path

-Named Export/Import

export {Component} from "path"
