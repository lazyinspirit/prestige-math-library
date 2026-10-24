from pathlib import Path
import hashlib,json,re,difflib,datetime
r='advanced-qft-supersymmetry-build-2026-10-23';p=Path('research')/(r+'-owner-resolution/private-preparation/policy-five-v1');o=p/'semantic-index-repair-v1';item='lem-qftx-singular-cohomology-homotopy-invariance';src=Path('items')/(item+'.md');old=src.read_bytes();text=old.decode();replacements=[('\\delta(K^{n+1}\\varphi)+K^n(\\delta\\varphi)','\\delta(K^n\\varphi)+K^{n+1}(\\delta\\varphi)'),('For \\(n=0\\), the second summand is zero','For \\(n=0\\), the first summand is zero'),('g^*\\varphi-f^*\\varphi=\\delta(K^{n+1}\\varphi)','g^*\\varphi-f^*\\varphi=\\delta(K^n\\varphi)')];hunks=[]
for a,b in replacements:
 assert text.count(a)==1,(a,text.count(a));text=text.replace(a,b);hunks.append({'before':a,'after':b})
sha=lambda x:hashlib.sha256(x).hexdigest();split=lambda t:re.split(r'^---\r?\n[\s\S]*?\r?\n---',t,maxsplit=1)[1];body=split(text);oldbody=split(old.decode());assert re.findall(r'^\d+\.\d+ ',oldbody,re.M)==re.findall(r'^\d+\.\d+ ',body,re.M);assert re.findall(r'\[F1[^\]\n]*\]',oldbody)==re.findall(r'\[F1[^\]\n]*\]',body)
for section in ['Statement','Facts & Assumptions']:
 pattern=rf'^## {re.escape(section)}\n([\s\S]*?)(?=^## |\Z)';assert re.search(pattern,oldbody,re.M)[0]==re.search(pattern,body,re.M)[0]
combined=(p/'candidate'/('items__'+item+'.md')).read_text()
for a,b in replacements:assert combined.count(a)==1;combined=combined.replace(a,b)
(o/'original-before.md').write_bytes(old);(o/'semantic-only-candidate.md').write_text(text);(o/'semantic-with-policy-citation-candidate.md').write_text(combined);(o/'semantic-corrected-body.md').write_text(body);(o/'semantic-proof.diff').write_text(''.join(difflib.unified_diff(old.decode().splitlines(True),text.splitlines(True),fromfile=str(src),tofile='PRIVATE semantic-only-candidate.md')))
inputs={str(src):sha(old)}
for id in ['def-singular-cochain-complex-with-coefficients','def-singular-cohomology-with-coefficients','thm-singular-chain-homotopy-formula']:
 f=Path('items')/(id+'.md');inputs[str(f)]=sha(f.read_bytes())
report={'kind':'PRIVATE explicitly semantic proof indexing correction; NOT format-only/source authority or native acceptance','id':item,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'production_source_sha256':sha(old),'semantic_only_candidate_sha256':sha(text.encode()),'semantic_corrected_body_sha256':sha(body.encode()),'semantic_with_policy_citation_candidate_sha256':sha(combined.encode()),'hunks':hunks,'public_statement_facts_hypotheses_and_metadata_unchanged':True,'proof_labels_support_and_anchor_sequence_unchanged':True,'exact_supplier_inputs':inputs,'production_applied':False,'review_path':str(o/'mathematical-review.md')};(o/'proposal.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n');print(json.dumps({k:report[k]for k in ['production_source_sha256','semantic_only_candidate_sha256','semantic_corrected_body_sha256','semantic_with_policy_citation_candidate_sha256']},indent=2))
