import pathlib,json,re,hashlib,yaml,datetime
base=pathlib.Path(__file__).resolve().parent
root=pathlib.Path.cwd()
a=json.loads((base/'assignment.json').read_text())
def sha(b):return hashlib.sha256(b).hexdigest()
link=re.compile(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]')
def label(m):
 target=m[1].strip(); alias=(m[2] or '').strip()
 if alias:return alias
 path=root/'items'/f'{target}.md'
 assert path.exists(),target
 meta=yaml.safe_load(path.read_text().split('---',2)[1]);return meta['title']
rows=[];dispositions=[]
for s in a['suppliers']:
 raw=(root/s['source']).read_bytes(); assert sha(raw)==s['raw_sha256'],s['id']
 pre=base/'before'/'items'/f"{s['id']}.md";pre.parent.mkdir(parents=True,exist_ok=True);pre.write_bytes(raw)
 t=raw.decode();m=re.search(r'^## (Definition|Statement)\n(.*?)(?=^## |\Z)',t,re.M|re.S);assert m,s['id']
 heading=m[1];body=m[2];links=link.findall(body);assert links,s['id']
 assert not re.search(r'(?<!!)\[[^\]]*\]\([^)]*\)|https?://',body),s['id']
 rendered=link.sub(label,body)
 unique=list(dict.fromkeys(x[0] for x in re.finditer(link,body)))
 newsection=f'## {heading}\n'+rendered.rstrip()+f'\n\n## {heading} references\n\n'+'\n\n'.join(unique)+'\n\n'
 candidate=t[:m.start()]+newsection+t[m.end():]
 out=base/'candidate'/'items'/f"{s['id']}.md";out.parent.mkdir(parents=True,exist_ok=True);out.write_text(candidate)
 rows.append({'id':s['id'],'source':s['source'],'before_file':str(pre.relative_to(root)),'candidate_file':str(out.relative_to(root)),'before_raw_sha256':sha(raw),'after_raw_sha256':sha(candidate.encode()),'heading':heading,'links_relocated':len(links),'unique_references':len(unique)})
 for alert in s['alerts']:
  dispositions.append({'id':s['id'],'source_batch':alert['source_batch'],'source_group':alert['source_group'],'alert_index':alert['alert_index'],'digest_path':alert['digest_path'],'digest_sha256':alert['digest_sha256'],'finding':alert['alert']['finding'],'disposition':'confirmed-presentation-repaired-in-candidate','consumer_impact':'none: rendered Statement/Definition prose identical; metadata, proofs and other sections unchanged'})
(base/'inventory.json').write_text(json.dumps({'run':a['run'],'owner':a['owner'],'frozen_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'items':rows},indent=2)+'\n')
(base/'alert-dispositions.json').write_text(json.dumps(dispositions,indent=2)+'\n')
print(f'Prepared {len(rows)} candidates for {len(dispositions)} alert records; relocated {sum(r["links_relocated"] for r in rows)} link occurrences.')
