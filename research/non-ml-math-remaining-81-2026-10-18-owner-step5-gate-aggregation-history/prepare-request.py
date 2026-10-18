import json,pathlib,hashlib,shutil,argparse
parser=argparse.ArgumentParser(description='Archive actual boundary and prepare an unactivated historical aggregation payload.')
parser.add_argument('--output',required=True);args=parser.parse_args()
r='non-ml-math-remaining-81-2026-10-18';root=pathlib.Path.cwd();base=pathlib.Path('research')/(r+'-owner-step5-gate-aggregation-history');p=pathlib.Path(args.output);p.mkdir(parents=True,exist_ok=False);bindings={}
def bind(f):
 f=str(f);bindings[f]=hashlib.sha256(pathlib.Path(f).read_bytes()).hexdigest()
def archive(path,name):
 dest=p/name;shutil.copyfile(path,dest);bind(dest);return str(dest)
cpath='research/'+r+'-owner-step5-full-battery-root-integration/before/capture.json';apath='research/'+r+'-owner-step5-full-battery-root-integration/actual-application/application.json';capture=json.load(open(cpath));app=json.load(open(apath));
for path in [cpath,apath,capture['native_gate_events']]:bind(path)
for f in capture['files']:bind(f['archive'])
for f in app['current_vectors']:bind(f['after_archive'])
for ref in app['approved_proposals']:bind(ref['path'])
ops=json.load(open(app['approved_proposals'][1]['path']));
for o in ops:
 if o.get('proposal'):bind(o['proposal'])
tool='research/'+r+'-dispatch/tool-step5-v2-certify-impact-repeat-r5-all.result.json';bind(tool)
state=archive('.autopilot/'+r+'/state.json','actual-state.json');request=archive('.autopilot/'+r+'/owner-gate-request.json','actual-request.json')
prep='research/'+r+'-owner-step5-full-battery-r1-preparation-r1/actual-metadata-and-inputs.json';frontier='research/'+r+'-step5-v2/frontier.json';bind(prep);bind(frontier)
row={'version':1,'kind':'owner-gate-aggregation-history','root':str(root),'run':r,'round':1,'owner_identity':'/root','historical_only':True,'current_review_granted':False,'missing_preimage_claimed':False,'reason':'Actual native Step 5.8 regenerated its derived cache after the immutable certification; authentic root metadata repairs and one separately reviewed scientific source repair now require genuine current native gate reviews.','recorded_at':__import__('datetime').datetime.now(__import__('datetime').timezone.utc).isoformat(timespec='milliseconds').replace('+00:00','Z'),'before_capture':cpath,'application':apath,'creation_state':state,'creation_request':request,'certificate_tool':tool,'battery_preparation':prep,'frontier':frontier,'original_sha256':'3bb079fa113d26fd6fa48aa5e002b95f4d4d06630b79cbc1a2274a2f5553cdd7','current_review_targets':sorted(['lem-pa36-p1-line-bundle-cohomology','lem-pa36-relative-p1-singular-kernel','lem-pa36-singular-parabolic-kernel','thm-pa36-singular-parabolic-kernel-filtration']),'bindings':bindings}
# JavaScript adds its canonical object digest. This is an honest pure-preview input, not an activated marker.
(p/'payload.json').write_text(json.dumps(row,indent=2)+'\n');print(json.dumps({'payload':str(p/'payload.json'),'bindings':len(bindings),'marker_written':False,'review_granted':False}))
