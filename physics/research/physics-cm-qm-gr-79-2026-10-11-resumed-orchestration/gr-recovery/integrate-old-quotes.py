from pathlib import Path
import json,hashlib,datetime
out=Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr-recovery');base=Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/metadata/gr-settled11-sidecar-proposals/version2-current-deltas/final-after-source-cleanup');idx=json.load(open(base/'index.json'));last=json.load(open(out/'sidecar-integration.json'));h=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
for r in last['files']:assert h(r['path'])==r['after_raw_sha256'],('outside sidecar drift',r['path'])
docs={};rows=[]
for r in idx['current_manifest_owned_old_quote_consumer_proposals']:
 p=json.load(open(r['proposal']));c=p['contract'];path=c['path'];d=docs.setdefault(path,json.load(open(path)));entry=d['contracts'][p['id']]
 for o in c['citation_patches']:
  sel=o['selector'];i=sel['old_index'];row=entry['citations'][i];assert row==o['before'];assert row['fact']==sel['fact'] and row['source']==sel['source']
  for k,v in o['field_patches'].items():assert row.get(k)==v['before'];row[k]=v['after']
  rows.append({'id':p['id'],'fact':sel['fact'],'source':sel['source']})
 delta=c.get('current_derivation_field_delta')
 assert delta is None,'Unexpected consumer derivation alteration must be examined explicitly'
for p,d in docs.items():Path(p).write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
(out/'old-quote-integration.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'exact_quote_patches':rows,'affected_files':[{'path':p,'after_raw_sha256':h(p)} for p in docs],'scope':'Exact8 stale quotations synchronized after actual focused consumer checks; no source reading/audit/gate/native acceptance'},indent=2)+'\n');print('Actually synchronized',len(rows),'guarded stale quote entries')
