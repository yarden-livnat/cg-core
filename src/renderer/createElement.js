/**
 * Created by yarden on 6/1/16.
 */
export default function(name) {
  return this.ownerDocument.createElementNS(this.namespaceURI, name);
}