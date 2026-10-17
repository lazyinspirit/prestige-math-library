from pathlib import Path
import json,re,difflib,datetime,yaml
root=Path.cwd();run='numerical-optimization-dynamics-2026-10-16';out=root/f'research/{run}-owner-step5-grid-pairing-domain-cycle1';id='def-uniform-grid-and-difference-operators';path=f'items/{id}.md';before=(root/path).read_text()
old=before.split('At the right endpoint define',1)[1].split('For edge arrays',1)[1].split('\n\nAll statements below',1)[0]
old='For edge arrays'+old
new=r'''For interior arrays $u,v:\{1,\ldots,N-1\}\to\mathbb C$, define the interior inner product and its norm by
$$ \langle u,v\rangle_h=h\sum_{j=1}^{N-1}u_j\overline{v_j},\qquad \|v\|_h^2=\langle v,v\rangle_h. $$
When an argument is a full nodal array on $j=0,\ldots,N$, this notation means its restriction to the interior nodes. On the full nodal space this is a semidefinite pairing and $\|\cdot\|_h$ is only a seminorm. On the subspace with zero endpoint values it is an inner product and norm, via identification with the interior array; an interior array is identified with its zero-endpoint extension when $-\Delta_h$ is viewed as an operator on this subspace.

For arbitrary edge arrays $p,q:\{0,\ldots,N-1\}\to\mathbb C$, define the distinct edge inner product and norm by
$$ \langle p,q\rangle_{e,h}=h\sum_{j=0}^{N-1}p_j\overline{q_j},\qquad \|p\|_{e,h}^2=\langle p,p\rangle_{e,h}. $$
Thus $D_+$ maps full nodal arrays to edge arrays and $\Delta_h$ maps full nodal arrays to interior arrays; in particular $\|D_+v\|_{e,h}^2=h\sum_{j=0}^{N-1}|(v_{j+1}-v_j)/h|^2$. Dirichlet grid functions may have any prescribed endpoint values; the zero-endpoint subspace uses the interior norm and edge inner product above for the wave energy. These finite-interval pairings are linear in their first entry and also apply to real-valued arrays.'''
after=before.replace(old,new,1)
(out/'guards'/path).parent.mkdir(parents=True,exist_ok=True);(out/'guards'/path).write_bytes((root/path).read_bytes())
(out/'proposed'/path).parent.mkdir(parents=True,exist_ok=True);(out/'proposed'/path).write_text(after)
(out/'source.patch').write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+path,tofile='b/'+path)))
ops=[];guardpaths=[path]
defbody=after.split('## Definition\n\n',1)[1].strip()
for carrier in (root/'research').glob(run+'-batch-*.proof-contracts.json'):
 try: data=json.loads(carrier.read_text())
 except:continue
 for owner,c in data.get('contracts',{}).items():
  for i,cit in enumerate(c.get('citations',[])):
   if cit.get('source')==id:
    ops.append({'file':str(carrier.relative_to(root)),'pointer':f'/contracts/{owner}/citations/{i}/quote','before':cit.get('quote'),'after':defbody,'consumer':owner,'action':'Future literal quote mirror only; preserve fact/source/uses and original review attribution.'})
 if any(x['file']==str(carrier.relative_to(root)) for x in ops):
  dest=out/'guards'/carrier.relative_to(root);dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(carrier.read_bytes());guardpaths.append(str(carrier.relative_to(root)))
(out/'future-quote-mirrors.json').write_text(json.dumps({'status':'Research instructions only. Apply natively only after source adoption and current byte guards; no metadata changed.','operations':ops},indent=2)+'\n')
# Dependency discovery only. This is not a corpus audit, validator, or proof check.
records={}
for p in (root/'items').glob('*.md'):
 txt=p.read_text();head=txt.split('---',2)
 if len(head)<3:continue
 try:fm=yaml.safe_load(head[1])
 except:continue
 if isinstance(fm,dict) and fm.get('id'):records[fm['id']]={'path':str(p.relative_to(root)),'deps':fm.get('deps',[]) or [],'justified_by':fm.get('justified_by',[]) or [],'aliases':fm.get('aliases',[]) or []}
alias={a:i for i,r in records.items() for a in r['aliases']};closure={id};edges=[]
while True:
 added=False
 for i,r in records.items():
  for dep in r['deps']+r['justified_by']:
   dep=alias.get(dep,dep)
   if dep in closure:
    if [dep,i] not in edges:edges.append([dep,i])
    if i not in closure:closure.add(i);added=True
 if not added:break
for i in sorted(closure):
 p=records[i]['path'];dst=out/'guards'/p;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes((root/p).read_bytes());guardpaths.append(p)
direct=sorted(i for d,i in edges if d==id)
(out/'actual-consumer-closure.json').write_text(json.dumps({'root':id,'discovery_only':True,'scope':'Actual deps/justified_by with aliases; no unrelated proof review. Propagate only the finite-interval interior/edge domain change.','direct':direct,'indirect':sorted(closure-{id}-set(direct)),'edges':edges},indent=2)+'\n')
obs={}
for suffix in ['judge.jsonl','judge-attempts.jsonl']:
 p=root/f'research/{run}-{suffix}'
 obs[str(p.relative_to(root))]=[line for line in p.read_text().splitlines() if any(i in line for i in [id,'lem-dirichlet-grid-summation-by-parts','lem-dirichlet-grid-poincare-inequality','thm-dirichlet-leapfrog-discrete-energy'])] if p.exists() else None
(out/'original-verdict-observation.json').write_text(json.dumps({'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'raw_rows':obs,'note':'Historical original verdict/attempt rows only; never modified. Luna keep:true predates the distinct Sol rejudge keep:false; this proposal is no native acceptance and has no verdict for proposed bytes. Native 5.5 must genuinely adjudicate/adopt later.'},indent=2)+'\n')
(out/'exact-guard-instructions.json').write_text(json.dumps({'source_path':path,'guards':sorted(set(guardpaths)),'rule':'Before later integration compare exact canonical bytes against guards/PATH. Stop/rebase draft if changed. Never restore guards over canonical files. Root computes hashes; no hashes computed here.','prior_packet':'research/'+run+'-owner-step4-b55-edge-pairing-proposal','distinct_concern':'Earlier packet repaired a double-difference edge pairing. Current componentwise edge formula is already correct; this proposal only separates interior/nodal/edge domains and distinguishes full-nodal seminorm from zero-endpoint norm. Do not reapply the old packet.','canonical_or_runtime_mutations':False,'checks_tests_gates_hashes_native_actions_commits':False},indent=2)+'\n')
