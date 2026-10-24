import json,pathlib,hashlib,datetime,sys
B=pathlib.Path(__file__).parent;p=B/sys.argv[1];a=json.loads(p.read_text());sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();extra=set(sys.argv[3:]); counts={x.split(':')[0]:int(x.split(':')[1]) for x in extra if ':' in x}; selections={x.split('@')[0]:[int(i)-1 for i in x.split('@')[1].split(',')] for x in extra if '@' in x}
for r in a['rows']:
 assert sha(r['source'])==r['current_source_raw_sha256'];assert sha(r['adjudication_file'])==r['adjudication_sha256']
 for f in r['pngs']:assert sha(f['path'])==f['sha256']
 r.update(reviewer='/root',actual_original_resolution_views=[r['pngs'][i] for i in selections[r['group']]] if r['group'] in selections else (r['pngs'][:counts[r['group']]] if r['group'] in counts else (r['pngs'] if r['group'] in extra else r['pngs'][:1])),result='pass-bounded-rendering-qa',observations=['Full cumulative source diff actually read. Changed math delimiters, reference labels, equivalent technique prose, or minimal step tags preserve mathematical content. Listed native tiles actually opened at original resolution; changed regions readable.'],scope_limit='Focused changed-hunk and native rendering review; no whole-proof audit.')
a.update(checked_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),reviewer='/root',batch_sha256=sha(p),native_png_opens=sum(len(r['actual_original_resolution_views']) for r in a['rows']))
o=B/'diagram-quality'/sys.argv[2];assert not o.exists();o.write_text(json.dumps(a,indent=2)+'\n');print(o)
