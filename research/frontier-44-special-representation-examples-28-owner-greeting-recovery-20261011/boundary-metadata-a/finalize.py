import json,pathlib,hashlib,glob,re,copy
r='frontier-44-special-representation-examples-28';o=pathlib.Path('research/'+r+'-owner-greeting-recovery-20261011/boundary-metadata-a');id='lem-generic-klr-induction-and-restriction-mixed-relations';sha=lambda b:hashlib.sha256(b).hexdigest()
j=json.load(open(o/'empty-word-proof-proposal.json'));ip=pathlib.Path('items/'+id+'.md');before=ip.read_text();pre=before.split('## Proof')[0]
old='Equivalently, there\nis an exact sequence of $(R(n),R(n))$-bimodules\n$0\\to R(n)\\otimes_{R_1(n-1)}R_1(n)\\to R(n+1)\\to R(n)\\otimes_kk[t]\\to0$ in the\nnotation of the source, with the bimodule structures induced by the embeddings\n$\\xi_n$.'
new='For $n\\ge1$, the underlying uncolored bimodules have the exact sequence\n$0\\to R(n)\\otimes_{R_1(n-1)}R_1(n)\\to R(n+1)\\to R(n)\\otimes_kk^I[t]\\to0$,\nwhere $k^I=\\bigoplus_{j\\in I}k\\epsilon_j$ retains the transferred strand color,\nand the right $R(n)$ action is through the shift embedding $\\xi_n$.\nThe quotient grading is the degree of the full transfer word on each labeled\ncorner; its fixed-color $i$ corner is the shifted polynomial term of (c).'
assert old in pre
pre=pre.replace(old,new)
text=pre+(o/'full-proof.md').read_text();fp=o/(id+'.md');fp.write_text(text)
stmt=text.split('## Statement\n',1)[1].split('## Facts & Assumptions',1)[0].strip();oldstmt=before.split('## Statement\n',1)[1].split('## Facts & Assumptions',1)[0].strip()
p='research/'+r+'-batch-11.proof-contracts.json';c=json.load(open(p))['contracts'][id];nc=copy.deepcopy(c);steps=[]
for m in re.finditer(r'^(\d+\.\d+) (.+?) \[([^\n]+)\](?: ∎)?$',text,re.M):steps.append({'id':'step-'+m[1].replace('.','-'),'step':m[1],'claim':m[2],'inputs':[v.strip() for v in m[3].split(',')]})
nc['derivations']=steps
for cit in nc['citations']:cit['uses']=[s['step'] for s in steps if cit['fact'] in s['inputs']]
idx=next(i for i,x in enumerate(nc['boundaries']) if x['case']=='empty');nc['boundaries'][idx]={'case':'empty','status':'checked','evidence':'Step 1.2 computes beta=0 directly: R(0)=k, one-letter corners k[t_i] of dot degree 2d_i, unequal-color zero restrictions, equal-color coefficient 1, and the opposite-end sequence with identity quotient and shift zero. Steps 2.1 and 3.1 restrict uncolored n-1 notation to n>=1; step 4.1 retains all colored functor claims at every weight.'}
j.update({'item_raw_sha256':sha(ip.read_bytes()),'proposal_raw_sha256':sha(fp.read_bytes()),'contract_raw_sha256':sha(pathlib.Path(p).read_bytes()),'contract_field_operations':[{'json_pointer':'/contracts/'+id+'/'+k,'expected_value':c[k],'replacement_value':nc[k]} for k in ['derivations','citations','boundaries'] if c[k]!=nc[k]],'claim_change':{'before':oldstmt,'after':stmt,'preserved':'Every functorial output (a),(b),(c) remains on every beta. The separate uncolored overlap formula is now n>=1 and retains the necessary transferred color algebra; graded fixed-color polynomial quotient retains exactly the original shift.'}})
j.pop('positive_rank_hold',None);j['resolved_defects']=['Undefined negative-height uncolored n=0 tensor expression','False unequal-color all-cosets-a>1 vanishing','Wrong total weight in the E_iF_j kernel','Uncolored quotient discarded transferred color algebra','Opposite-end exactness after tensor lacked explicit right splitting']
j['assessment_scope']='Source-aware independent verification of this focused mixed-relations repair and four actual consumer interface uses; not a whole independent audit or new mathematical acceptance.'
j['source_reading']={'url':'https://arxiv.org/pdf/1102.4677v4','pdf_path':'research/'+r+'-owner-cyclotomic-native11-consumer-escalations/trace-construction/kang-kashiwara.pdf','pdf_raw_sha256':sha(pathlib.Path('research/'+r+'-owner-cyclotomic-native11-consumer-escalations/trace-construction/kang-kashiwara.pdf').read_bytes()),'read':'Full Section3, printed pp7-15; cached authentic text declares arXiv1102.4677v4, 5Feb2012. PDF page15 independently extracted with PyMuPDF.','source_caveat':'Corollary3.8 printed scalar k[t] but its immediately preceding derivation explicitly has k^I[t]. Our uncolored formula retains those PBW color labels; fixed-color theorem3.9 has exactly k[t_i].'}
m='research/'+r+'-batch-11.pages.json';data=json.load(open(m));mops=[]
def walk(x,ptr):
 if isinstance(x,dict):
  if x.get('id')==id:
   for k,v in [('statement',stmt),('strategy','Use both same-end PBW double cosets: x tensor y maps to x kappa_n y, with kappa=-tau_native and the correct weight gamma=beta-alpha_i+alpha_j. Opposite-end overlap multiplication has all cosets a>=2 as image and the full first-to-last transfer coset as quotient, retaining k^I labels. The coefficient quotient is right split before tensoring. Fixed-color quotient has shift -(alpha_i|beta) and dot degree 2d_i. Verify beta=0 directly from R(0)=k and one-letter polynomial corners; only the uncolored n-1 notation requires n>=1.')]:
    if x[k]!=v:mops.append({'path':m,'raw_sha256':sha(pathlib.Path(m).read_bytes()),'json_pointer':ptr+'/'+k,'expected_value':x[k],'replacement_value':v})
   return
  for k,v in x.items():walk(v,ptr+'/'+str(k))
 elif isinstance(x,list):
  for i,v in enumerate(x):walk(v,ptr+'/'+str(i))
walk(data,'');j['manifest_operations']=mops;j['consumer_contract_operations']=[]
for cp in glob.glob('research/'+r+'-batch-*.proof-contracts.json'):
 cj=json.load(open(cp))
 for cid,c in cj['contracts'].items():
  if 'items/'+cid+'.md' not in j['actual_direct_consumers']:continue
  for i,cit in enumerate(c.get('citations',[])):
   if cit.get('source')==id and cit.get('source_section')=='Statement':j['consumer_contract_operations'].append({'path':cp,'raw_sha256':sha(pathlib.Path(cp).read_bytes()),'json_pointer':'/contracts/'+cid+'/citations/'+str(i)+'/quote','expected_value':cit['quote'],'replacement_value':stmt,'reason':'Exact current supplier Statement mirror; all consumed colored functor claims are preserved.'})
for row in j['consumer_checks']:
 row['raw_sha256']=sha(pathlib.Path(row['path']).read_bytes());row['verdict']='Focused interface check passes for preserved colored functor clauses; no whole-consumer audit asserted.'
 row['source_repair_match']='Same-end map uses kappa=-tau_native, shift -b_ij; opposite-end multiplication/transfer coefficient has fixed-color shift -(alpha_i|beta), right splitting before tensoring, vacuum identity. Matches the actual used basic functors and source-normalized maps.'
j['consumer_duty']='All four actual consumers read in full; direct used colored clauses and source-normalized map conventions checked. Uncolored labels/range correction changes none of those outputs. One unused incorrect generic-biadjunction attribution is surgically removed in a separate consumer proposal.'
# A consumer F1 claimed generic biadjunction, absent from the supplier and unused by its proof.
cid='thm-cyclotomic-klr-induction-is-projective-on-the-right';cip=pathlib.Path('items/'+cid+'.md');cb=cip.read_text();ca=cb.replace('and their biadjunction and exactness are','and their definitions and exactness are');assert ca!=cb;cf=o/(cid+'.md');cf.write_text(ca)
j['consumer_item_proposals']=[{'id':cid,'path':str(cip),'raw_sha256':sha(cip.read_bytes()),'proposal_path':str(cf),'proposal_raw_sha256':sha(cf.read_bytes()),'correction':'Facts F1 removes unused attribution of generic biadjunction, which this supplier does not assert; retains actual generic definitions and exactness. Statement, all numbered proof steps and deps unchanged.'}]
j['local_checks']={};json.dump(j,open(o/'mixed-relations-repair-proposal.json','w'),indent=2)
# Refresh metadata guards to current mechanical-only root integration.
p=o/'operations.json';ops=json.load(open(p))
for op in ops['operations']:
 op['contract_raw_sha256']=sha(pathlib.Path(op['contract_path']).read_bytes());op['item_raw_sha256']=sha(pathlib.Path(op['item_path']).read_bytes());cc=json.load(open(op['contract_path']))['contracts'][op['id']];idx=int(op['json_pointer'].rsplit('/',1)[1]);assert cc['boundaries'][idx]==op['expected_value']
ops['holds'][0]['reason']='Integration hold until complete mixed-relations-repair-proposal.json is reviewed and integrated; it resolves both vacuum and confirmed positive-rank PBW proof defects with focused consumer checks.'
json.dump(ops,open(p,'w'),indent=2)
