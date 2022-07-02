// This plugin add and identifier to each layers and sublayers that
// have still their default name
function traverse(node) {
  if ("children" in node) {
    if (node.type != "INSTANCE") {
      for (const child of node.children) {
        traverse(child)
        if(child.name.match(/^Star|^Rectangle|^Connector|^Ellipse|^Frame|^Line|^Page|^Polygon|^Text|^Vector|^Arrow|^Slice|^Group \d+$/)) {
          child.name = '❗️ ' + child.name
        }
      }
    }
  }
}
traverse(figma.root) // start the traversal at the root
figma.closePlugin()