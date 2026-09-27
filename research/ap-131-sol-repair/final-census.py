from pathlib import Path
import json,re,yaml,collections,hashlib
b=Path(__file__).parent;homes=collections.defaultdict(list);errors=[];hashes={}
for p in Path('library').rglob('*.md'):
 t=p.read_text();m=re.match(r'^---\n(.*?)\n---',t,re.S)
 if not m:continue
 try:d=yaml.safe_load(m[1])
 except Exception as e:errors.append([str(p),str(e)]);continue
 if not isinstance(d,dict):errors.append([str(p),'non-mapping']);continue
 for id in d.get('items',[])+d.get('examples',[]):homes[id].append(str(p))
 hashes[str(p)]=hashlib.sha256(p.read_bytes()).hexdigest()
items={}
for p in Path('items').glob('*.md'):
 m=re.match(r'^---\n(.*?)\n---',p.read_text(),re.S);d=yaml.safe_load(m[1]);items[p.stem]=d;hashes[str(p)]=hashlib.sha256(p.read_bytes()).hexdigest()
excluded={id for id,hs in homes.items() if any('/not-proved-here/' in h for h in hs)}
ordinary=set(items)-excluded;reg=json.loads((b/'new-item-registry.json').read_text());bad=[id for id in sorted(ordinary) if items[id].get('status')!='published'];unhomed=sorted(set(items)-set(homes));newbad=[r['id'] for r in reg if r['home'] not in homes[r['id']] or items[r['id']].get('status')!='published']
out={'total_items':len(items),'published_items':sum(d.get('status')=='published' for d in items.values()),'ordinary_items':len(ordinary),'ordinary_unpublished':bad,'excluded_items':len(excluded),'excluded_statuses':dict(collections.Counter(items[id].get('status') for id in excluded)),'unhomed':unhomed,'page_frontmatter_errors':errors,'new_prerequisite_items':len(reg),'new_prerequisite_publication_or_home_errors':newbad,'method':'Strict standalone frontmatter delimiters; all library item/example inventories; Recorded, Not Proved Here exemption by category path.'}
(b/'publication-final.json').write_text(json.dumps(out,indent=2)+'\n');(b/'final-carrier-hashes.json').write_text(json.dumps(hashes,indent=2)+'\n');(b/'final-item-homes.json').write_text(json.dumps(dict(homes),indent=2)+'\n');assert not bad and not errors and not unhomed and not newbad;print(json.dumps(out))
