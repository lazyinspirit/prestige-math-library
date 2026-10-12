exec(open('research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011/prepare-gate-metadata/prepare.py').read().split('notation=load')[0])
a=load(OUT/'interim.json');carriers=a['carriers'];levels=load(OUT/'computed-levels.json');assert not levels['errors'] and levels['inventory']==875
item_edits=[];manifest_level_edits=0
for p in sorted(pathlib.Path('research').glob(R+'-batch-*.pages.json')):
 obj=carrier(p)['proposed']
 for pi,page in enumerate(obj):
  for ii,item in enumerate(page['items']):
   val=levels['levels'][item['id']]
   if item.get('dependency_level')!=val:
    edit(p,f'/{pi}/items/{ii}/dependency_level',val,'Single computed numeric in-run dependency level after completed local proof deps reductions','/root/prepare_gate_metadata');manifest_level_edits+=1
   ip=pathlib.Path('items/'+item['id']+'.md');raw=ip.read_text();meta=fm(raw)
   if (meta.get('dependency_level') is not None or meta.get('pipeline_run')==R) and meta.get('dependency_level')!=val:
    m=re.search(r'^dependency_level:.*$',raw,re.M)
    if m:bef=m[0];aft='dependency_level: '+str(val)
    else:bef='pipeline_run: '+R;aft=bef+'\ndependency_level: '+str(val);assert bef in raw
    item_edits.append({'id':item['id'],'path':str(ip),'before_raw_sha256':sha(ip.read_bytes()),'before':bef,'after':aft,'before_value':meta.get('dependency_level'),'after_value':val,'edit_class':'numeric metadata only','statement_definition_changed':False})
# Eliminate untouched carriers, write review snapshots with explicit no whole-file replacement authority.
reports=[]
for p,c in carriers.items():
 if not c['edits']:continue
 assert sha(pathlib.Path(p).read_bytes())==c['before_raw_sha256'],p
 name=pathlib.Path(p).name;dest=OUT/'proposals'/name;dest.parent.mkdir(exist_ok=True)
 raw=json.dumps(c['proposed'],indent=2,ensure_ascii=False)+'\n';dest.write_text(raw)
 reports.append({'path':p,'before_raw_sha256':c['before_raw_sha256'],'proposal_path':str(dest),'proposal_raw_sha256':sha(raw),'integration_mode':'Apply listed exact field edits only after current raw guard; snapshot is for review and must not overwrite concurrent root integration','edits':c['edits']})
for i in a['inputs']:assert sha(pathlib.Path(i['path']).read_bytes())==i['raw_sha256'],i['path']
inv=load(OUT/'inventory.json');manifest_guards=[{'path':str(p),'raw_sha256':sha(p.read_bytes())} for p in sorted(pathlib.Path('research').glob(R+'-batch-*.pages.json'))]
report={'version':1,'run':R,'preparer':'/root/prepare_gate_metadata','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'readiness':'READY FOR ROOT GUARDED INTEGRATION; metadata and shape/hash preparation only; no mathematical audit, certification, engine transition or gate attempt','original_author_attribution':{'notation11':'/root/exception_finite_w_right_invariance_constructor','sign_forward3_and_finite_fibre':'/root/exception_sign_tilting_constructor','local_conical1':'/root/exception_crystal_standard_kernel_constructor'},'original_packets_immutable':True,'canonical_writes':False,'native_writes':False,'gates_attempted':False,'scope':{'inventory':875,'inventory_file':str(OUT/'inventory.json'),'inventory_raw_sha256':sha((OUT/'inventory.json').read_bytes()),'homes_and_item_identities_unchanged':True},'dependency_level_computation':{'path':str(OUT/'computed-levels.json'),'raw_sha256':sha((OUT/'computed-levels.json').read_bytes()),'computations':1,'errors':[],'manifest_updates':manifest_level_edits,'item_updates':len(item_edits)},'quotation_edits':108,'inputs':a['inputs'],'manifest_graph_guards':manifest_guards,'carriers':reports,'item_numeric_metadata_edits':item_edits,'integration_requirements':['Integrate original authored item packets under their original guard checks, preserving all rich current Statements except original reviewer equivalent typed notation','Apply listed metadata fields against exact latest canonical hashes, never replay old whole-file metadata packets','For conical and finite-fibre prove-carrier contracts, quotations and derivations describe supplied complete replacements, so contract and dependency reduction must accompany those exact original proof replacements','Dependency levels are in-run metadata computed from all 875 proposed manifest items; no mathematical audit performed','Keep original reviewer/risk fields and all boundary statuses; only conical geometric phase references are shifted from old1.1/1.2/2.1 to5.1/6.1/7.1','No native decisions, review receipts, certificates or gates are refreshed by this preparation']}
(OUT/'guarded-successor-plan.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'carriers':len(reports),'field_edits':sum(len(x['edits']) for x in reports),'quote_edits':108,'manifest_level_edits':manifest_level_edits,'item_level_edits':len(item_edits),'plan_sha256':sha((OUT/'guarded-successor-plan.json').read_bytes())}))
