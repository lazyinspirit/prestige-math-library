import json,pathlib,re,hashlib,difflib
R='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path('research/'+R+'-owner-step5-clifford-kept-concerns');ids=['thm-real-complex-clifford-algebra-classification','thm-complex-spin-modules-and-compact-reducibility']
def guard(p):
 p=pathlib.Path(p);b=p.read_bytes();return {'path':str(p),'raw_sha256_input_guard':hashlib.sha256(b).hexdigest(),'size_bytes':len(b)}
ops=[]
for id in ids:
 p=pathlib.Path('items/'+id+'.md');b=p.read_bytes();(out/(id+'.before.md')).write_bytes(b)
 if id==ids[0]:
  a=b'with $s=q-p$';z=b'with $q-p=8t+s$ and $0\\le s<8$';assert b.count(a)==1;pos=b.index(a);n=b[:pos]+z+b[pos+len(a):];op=[{'start_byte':pos,'end_byte_exclusive':pos+len(a),'exact_old_utf8':a.decode(),'exact_new_utf8':z.decode()}]
 else:n=b;op=[]
 (out/(id+'.proposed.md')).write_bytes(n)
 (out/(id+'.diff')).write_text(''.join(difflib.unified_diff(b.decode().splitlines(True),n.decode().splitlines(True),fromfile=str(p),tofile='isolated/'+id+'.proposed.md')))
 ops.append({'id':id,'source':guard(p),'before_file':str(out/(id+'.before.md')),'proposed_file':str(out/(id+'.proposed.md')),'byte_operations':op,'Statement_Definition_deps_metadata_unchanged':True,'guard':'Install only if current canonical raw bytes equal before_file. No final audit/annotation seal is supplied.'})
json.dump({'run':R,'cycle':1,'kind':'isolated focused draft proof proposals/no-op current disposition','operations':ops,'metadata_operations':[],'no_gates_or_native_evidence_changed':True},open(out/'operations.json','w'),indent=2)
# Exact historical native finding carriers, kept verbatim as evidence.
ctx=pathlib.Path('research/'+R+'-batch-35-step5-context.json');original=json.load(open(ctx));native=pathlib.Path('research/'+R+'-step5-v2/step5-v2-initial-r1-u35.json');u=json.load(open(native));routes=[x for x in u['ledger_updates'] if x['id'] in ids]
assert len(routes)==2 and all(x['action']=='route-outside-lane-finding' for x in routes)
evidence={'run':R,'original_step4_digest':guard(ctx),'original_step4_concern_0':original['concerns'][0],'original_step4_alert_0':original['alerts'][0],'original_step4_attempt_digest':guard('research/'+R+'-dispatch/alpha-batch-read-35.attempt-1.last-message.json'),'original_step4_attempt_result':guard('research/'+R+'-dispatch/alpha-batch-read-35.attempt-1.result.json'),'native_u35_result':guard('research/'+R+'-dispatch/alpha-adjudicate-step5-v2-initial-r1-u35.attempt-1.result.json'),'native_u35_packet':guard(native),'exact_original_native_routes':routes,'routing_status':'These are original route-outside-lane-finding ledger actions, not v1 record-open defects or a current native admission/judgment. Original Step4 concern/alert are preserved for root admission. This packet neither changes original u35 decisions nor fabricates a native reopened/fixed record. Cross-batch spin source proof-read binding is root-owned.'}
json.dump(evidence,open(out/'native-original-findings.json','w'),indent=2,ensure_ascii=False)
suppliers=['lem-real-clifford-signature-recurrences-and-periodicity','lem-clifford-even-subalgebra-signature-identification','lem-normalized-pin-spin-product-and-norm-laws','lem-real-orthogonal-space-preliminaries','lem-clifford-polarized-relations','def-clifford-algebra-of-a-quadratic-space','lem-real-division-algebra-tensor-identities','thm-clifford-pbw-basis-and-associated-graded','thm-finite-dimensional-compact-group-representations-are-completely-reducible','def-even-dimensional-spinor-bundle-chirality-and-spin-connection']
read={'run':R,'reviewer':'math81_boundary_homological','complete_sources_read':[guard('items/'+x+'.md') for x in ids],'complete_actual_relevant_supplier_and_signed_convention_sources_read':[guard('items/'+x+'.md') for x in suppliers],'reading_scope':'Full current source including Claim/Definition, Facts and entire Proof read for both subjects and each listed relevant supplier/convention source. No external full-text source reading is claimed. Foundational dependencies not listed were not independently reaudited.','classification_finding':{'confirmed':True,'analysis':'Step1.2 has m=min(p,q) and pure residual dimension 8t+s with 0<=s<8. In the q>p branch this pure dimension is q-p, hence q-p=8t+s, not s=q-p. For (p,q)=(0,9), the negative table row is s=1 multiplied by M_16(R), giving M_16(C); the Statement residue r=7 and size 2^((9-1)/2)=16 agree. The listed exponents for s=0,...,7 match all eight negative pure rows after multiplication by M_(2^m*16^t)(R). The smallest repair is the single literal phrase in Proof2.1. No missing prerequisite or Statement correction is necessary.'},'spin_finding':{'current_defect_present':False,'disposition':'already normalized in actual current carrier; no source operation proposed','analysis':'The current Statement concerns a positive-definite real n-space, not arbitrary mixed signature. Its current Proof1.1 normalizes u_j=e_j/sqrt(|Q(e_j)|), hence Q(u_j)=1. Current2.1 defines omega=i^m*u_1*...*u_(2m), whose square is (-1)^m times (-1)^(m(2m-1))=1. It is nonscalar by PBW, central in the even part, and an odd unit vector interchanges its eigenspaces. Thus the projectors are genuine nonzero central orthogonal idempotents. The simple matrix factors and dimension count in1.2/2.1 yield the two inequivalent half-spin modules. Odd-dimensional and n=0,1 clauses remain exactly as proved in2.2. Compact complete reducibility remains a separate full-AC result in3.1. The historical unnormalized-e_j alert is not silently rewritten or called false for the former carrier.','signed_volume_consumer':'The geometric spinor Definition independently translates c_0=i*c_+ to negative squares and explicitly records its chirality differs by (-1)^m from positive-square chirality. This may exchange the +/- labels when m is odd but leaves dimensions and the unordered half-spin decomposition intact; no mixed-signature normalization repair is needed for the current Euclidean source.'},'canonical_native_writes':False,'checks_run':[]}
json.dump(read,open(out/'full-read-and-mathematical-dispositions.json','w'),indent=2,ensure_ascii=False)
# Metadata consumer inventory and actual cited-use paragraph dispositions, without pretending a whole consumer audit.
D={};paragraphs={}
for p in pathlib.Path('items').glob('*.md'):
 text=p.read_text();fm=text.split('---',2)[1];m=re.search(r'^deps:([^\n]*(?:\n[ \t]+[^\n]*)*)',fm,re.M);deps=re.findall(r'\b(?:def|alg|thm|lem|prop|cor|ex|cex|fs|rem|op)-[a-z0-9-]+',m.group(1)) if m else [];D[p.stem]={'source':str(p),'deps':deps};paragraphs[p.stem]=[x for x in text.split('---',2)[-1].split('\n\n') if any(id in x for id in ids)]
cons=[]
for id in ids:
 direct=sorted(x for x,v in D.items() if id in v['deps']);seen=set(direct);level=direct
 while level:
  nxt=[x for x,v in D.items() if x not in seen and any(y in v['deps'] for y in level)];seen.update(nxt);level=nxt
 arr=[]
 for x in direct:
  arr.append({'id':x,'source':guard(D[x]['source']),'actual_use_paragraphs_read':[p for p in paragraphs[x] if id in p],'disposition':'No consumer edit: supplied full classification table and half-spin/module interfaces are unchanged. The residue correction only aligns Proof2.1 with its already stated 8t+s convention; the current Euclidean normalized chirality is already sound. This is a focused cited-interface check, not a whole consumer proof audit.'})
 cons.append({'supplier':id,'direct_consumer_dispositions':arr,'transitive_consumer_ids':sorted(seen),'scope':'Dependency metadata closure only for indirect consumers. No Statement/Definition change, hence no changed logical interface propagates.'})
json.dump({'run':R,'same_owner':'math81_boundary_homological','consumer_inventory':cons},open(out/'consumer-dispositions.json','w'),indent=2,ensure_ascii=False)
# Existing run-local contracts may mirror statements or proof text: inventory exact citations and literal occurrences only.
contracts=[];paths=list(pathlib.Path('research').glob(R+'-batch-*.proof-contracts.json'))+[pathlib.Path('research/'+R+'-proof-contracts.json')]
for p in paths:
 text=p.read_text()
 if not any(id in text for id in ids):continue
 d=json.loads(text);hits=[]
 for cid,c in d['contracts'].items():
  for j,cite in enumerate(c.get('citations',[])):
   if cite.get('source') in ids:hits.append({'consumer':cid,'json_pointer':'/contracts/'+cid+'/citations/'+str(j),'exact_current_citation':cite})
 contracts.append({'file':guard(p),'citation_mirrors':hits,'literal_old_phrase_occurrences':text.count('with $s=q-p$'),'operations':[]})
def find_claims(node,path=''):
 found=[]
 if isinstance(node,dict):
  for k,v in node.items():found+=find_claims(v,path+'/'+k.replace('~','~0').replace('/','~1'))
 elif isinstance(node,list):
  for i,v in enumerate(node):found+=find_claims(v,path+'/'+str(i))
 elif isinstance(node,str) and 'with $s=q-p$' in node:
  found.append({'json_pointer':path,'exact_original_value':node,'proposed_value':node.replace('with $s=q-p$','with $q-p=8t+s$ and $0\\le s<8$'),'reason':'Exact mirror of the corrected Proof2.1 claim, without Statement or derivation dependency changes.'})
 return found
for c in contracts:c['operations']=find_claims(json.load(open(c['file']['path'])))
json.dump({'contracts':contracts,'reason':'Two current run-local contracts mirror the changed literal in the classification Proof2.1 derivation claim. Their exact JSON-pointer operations are supplied. Statement citations remain unchanged. Root owns native read/content bindings and mechanical refresh.'},open(out/'contract-mirrors.json','w'),indent=2,ensure_ascii=False)
print(json.dumps({'packet':str(out),'classification_literal_operations':1,'spin_operations':0,'direct_consumers':{x['supplier']:len(x['direct_consumer_dispositions']) for x in cons},'contract_operations':sum(len(c['operations']) for c in contracts)}))
