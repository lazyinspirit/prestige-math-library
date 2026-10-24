import pathlib,json,subprocess,os,datetime,re,hashlib
r=pathlib.Path('research/math-library-rendering-repairs-2026-10-23')
def guard(raw):
 m=re.match(r'^---\n([\s\S]*?)\n---\n([\s\S]*)$',raw)
 normalized=raw if not m else re.sub(r'^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)','',m[1],flags=re.M)+'\n---\n'+m[2]
 return hashlib.sha256(normalized.encode()).hexdigest()
captured={}
visuals=json.loads((r/'visual-confirmations.json').read_text())
for p in (r/'previews').glob('*/manifest.json'):
 m=json.loads(p.read_text())
 for item in m['items']:
  raw=(p.parent/item['snapshot']).read_text()
  captured.setdefault(item['id'],set()).add(guard(raw))
ids=[]
for p in sorted((r/'receipts').glob('*.json')):
 rec=json.loads(p.read_text());id=rec['id'];current=guard((pathlib.Path('items')/f'{id}.md').read_text())
 visual=visuals.get(id,{})
 visual_current=visual.get('content_sha256')==current and visual.get('viewed_tiles') and all((pathlib.Path('research')/f).exists()for f in visual['viewed_tiles'])
 if rec['content_sha256']==current and not visual_current and current not in captured.get(id,set()):ids.append(id)
 if len(ids)==10:break
if not ids:print('No current recorded repairs awaiting preview');raise SystemExit(0)
tag='after-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%f');out=r/'previews'/tag;env=dict(os.environ,TSX_TSCONFIG_PATH='/home/lazyinspirit/Projects/prestige-intelligence/web/tsconfig.json');print('Preview batch',str(out),','.join(ids),flush=True);subprocess.run(['node','tools/tsx-run.mjs',str(r/'repair-preview.mts'),'--ids',','.join(ids),'--out',str(out)],env=env,check=True)
