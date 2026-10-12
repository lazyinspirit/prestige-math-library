import pathlib,json,re,hashlib,datetime,copy
b=pathlib.Path('research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011');o=b/'restored-partitions-11-15';ids=set()
for n in range(11,16):ids.update(json.loads((b/f'boundary-template-inventory/partition-{n}.json').read_text())['item_ids'])
anchors={
 'thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis':{'endpoints':'Steps 1.1 and 2.1'},
 'prop-global-bases-specialize-to-integral-weight-bases':{'degenerate':'Steps 1.1 and 2.3'},
 'thm-lusztig-canonical-and-kashiwara-global-bases-agree-in-symmetric-type':{'empty':'Step 4.1','degenerate':'Step 5.1','endpoints':'Step 1.1'},
 'ex-a-nil-hecke-divided-power-projective':{'degenerate':'Step 1.1','endpoints':'Step 2.1'},
 'lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties':{'empty':'Step 1.1','zero':'Step 1.1','one':'Step 1.1','degenerate':'Steps 1.1 and 6.1','endpoints':'Steps 1.1, 6.1 and 10.1'},
 'def-arakawa-suzuki-casimir-operators-on-tensor-functors':{'degenerate':'Step 3.1'},
 'def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra':{'zero':'Definition (the constant coefficient and finite ranges) and step 2.2','one':'Definition (the adjacent-root index ranges) and step 1.1','degenerate':'Steps 1.1 and 2.2','endpoints':'Step 2.2'},
 'thm-skryabins-equivalence-for-the-type-a-whittaker-pair':{'zero':'Statement (the module categories) and step 1.1 with F1','degenerate':'Step 1.1 with F1'},
 'thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e':{'empty':'Statement (the ordered-monomial basis) and step 2.1','zero':'Step 2.1','one':'Steps 1.2 and 2.1','degenerate':'Step 2.1','endpoints':'Steps 2.1 and 4.1'},
 'def-the-higher-level-schur-weyl-projective-generator-and-schur-functor':{'zero':'Definition (the tensor object and residue-induction formula) and step 1.1','one':'Step 3.1','degenerate':'Step 3.1'},
 'def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality':{'zero':'Step 3.1'},
 'thm-higher-level-schur-weyl-double-centralizer':{'empty':'Step 4.1'},
 'lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension':{'empty':'Step 3.1','degenerate':'Step 3.1'},
 'def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras':{'empty':'Definition (the standard cyclotomic quotient supplier)','one':'Definition (the monic first-strand relation)','iff-forward':'Definition (the specialization dictionary and its dot-sliding, quadratic and braid computations)','iff-reverse':'Definition (the converse specialization dictionary)'},
 'lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric':{'empty':'Step 3.1','one':'Step 3.1','degenerate':'Step 3.1'},
 'lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms':{'endpoints':'Step 3.1'},
 'thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations':{'one':'Statement (arbitrary positive level) and step 2.2'},
 'thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism':{'empty':'Step 1.1 with F3','zero':'Step 1.1 with F3','one':'Step 1.1 with F3'},
 'ex-degenerate-level-one-hecke-klr-map-for-s3':{'zero':'Steps 1.1 and 2.1','degenerate':'Steps 1.1 and 1.2'},
}
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
errors=[]
for l in (b/'restored-root-integration/proof-contract-errors.txt').read_text().splitlines():
 m=re.match(r'ERROR ([^ ]+) \[([^]]+)\]: ([^ ]+)',l)
 if m and m[2] in ids:errors.append((m[2],m[3],m[1]))
packet={'version':1,'run':'frontier-44-special-representation-examples-28','owner':'/root/restore_boundary_11_15','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'gate1-boundary-evidence-type-and-actual-anchor-correction','source_operations':[],'json_operations':[],'holds':[],'mathematical_round_added':False,'source_guards_unchanged':True,'actual_afterbinding_performed':False}
prooftexts={id:pathlib.Path('items/'+id+'.md').read_text() for id in anchors}
contracts={str(p):json.loads(p.read_text()) for p in pathlib.Path('research').glob('frontier-44-special-representation-examples-28-batch-*.proof-contracts.json')}
for id,case,code in errors:
 anchor=anchors[id][case];t=prooftexts[id]
 for step in re.findall(r'\d+\.\d+',anchor):assert re.search(r'^'+re.escape(step)+r' ',t,re.M),(id,step)
 matches=[(p,i,r) for p,d in contracts.items() for i,r in enumerate(d.get('contracts',{}).get(id,{}).get('boundaries',[])) if r['case']==case]
 assert len(matches)==1,(id,case,len(matches));p,i,before=matches[0];assert before['status']=='checked';after=copy.deepcopy(before);text=before.get('evidence') or before.get('reason');assert text
 after['evidence']=anchor+': '+text;after.pop('reason',None)
 if 'template_review' in after:
  after['template_review']['row_sha256']=hashlib.sha256(json.dumps({'case':case,'status':'checked','text':after['evidence']},separators=(',',':'),ensure_ascii=False).encode()).hexdigest()
 packet['json_operations'].append({'path':p,'pointer':f'/contracts/{id}/boundaries/{i}','before':before,'after':after,'before_file_raw_sha256':sha(p),'proposal_origin':str(o/'gate1-evidence-correction-packet.json'),'id':id,'case':case,'actual_source_anchor':anchor,'source_path':'items/'+id+'.md','source_raw_sha256':sha('items/'+id+'.md'),'native_failure':code,'scope':'Evidence field typing and true anchor only; status and reviewed mathematics preserved'})
packet['counts']={'items':len({x[0] for x in errors}),'rows':len(errors),'operations':len(packet['json_operations'])};(o/'gate1-evidence-correction-packet.json').write_text(json.dumps(packet,indent=2,ensure_ascii=False)+'\n');print(packet['counts'])
