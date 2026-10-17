from pathlib import Path
import json, re, difflib, yaml, datetime
root=Path.cwd()
out=root/'research/numerical-optimization-dynamics-2026-10-16-owner-step4-parabolic96-common-null-cycle1'
run='numerical-optimization-dynamics-2026-10-16'
ids=['thm-parabolic-adjoint-gradient-sensitivity','thm-parabolic-fe-gradient-error-with-time-dependent-ritz']
paths=[f'items/{i}.md' for i in ids]
context=f'research/{run}-batch-96-step5-context.json'
contract=f'research/{run}-batch-96.proof-contracts.json'
page='library/numerical-optimization-inverse-problems-and-uncertainty-quantification/discrete-continuous-and-pde-adjoint-sensitivities.md'
guards=paths+['items/def-parameterized-parabolic-variational-problem.md','items/def-parabolic-evolution-triple-and-energy-space.md','items/lem-parabolic-energy-pairing-and-trace.md','items/thm-parabolic-control-adjoint-gradient-extension.md',context,contract,page]
for path in guards:
 dst=out/'guards'/path;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes((root/path).read_bytes())
a=(root/paths[0]).read_text()
a=a.replace('Assume, for every $v\\in V$ and almost every $t$,','For each fixed $\\theta$ and direction $\\eta$, assume there is a null set $N_{\\theta,\\eta}\\subset(0,T)$ such that the linearized equation below holds for every $t\\notin N_{\\theta,\\eta}$ and simultaneously every $v\\in V$, using representatives of its data:')
a=a.replace('Suppose the adjoint $p\\in W(0,T;V)$ satisfies','Suppose the adjoint $p\\in W(0,T;V)$ satisfies the following equation simultaneously for every $v\\in V$ outside one null set $M_\\theta\\subset(0,T)$, and has the stated terminal trace:')
needle='This is conditional on the displayed differentiable state and adjoint;'
insert=r'''The exceptional sets are independent of the test $v$; they need not be common to all parameters or directions. The forcing/form-derivative difference in the integrand is interpreted together. The hypotheses imply it is measurable and integrable: almost everywhere it equals $\langle w_\eta',p\rangle+\langle p',w_\eta\rangle+D_uL[w_\eta]$. No global boundedness or coercivity of $a_\theta$, or separability of $V$, is required for this conditional identity.

'''
a=a.replace(needle,insert+needle)
a=a.replace('and a solution of the stated terminal adjoint equation.','and a solution of the stated terminal adjoint equation, with both displayed variational equations holding simultaneously for all tests outside their specified null sets.')
needle='## Proof\n'
a=a.replace(needle,r'''[A2] For each fixed parameter and direction, the linearized and adjoint equations hold outside null sets independent of $v$. Their union, together with the null sets on which the $W$ representatives are undefined, still has measure zero. This is an explicit hypothesis, not a consequence of the fixed-test state convention in [F1].

'''+needle)
old=re.search(r'^1\.2 .*$',a,re.M).group()
new=r'''1.2 Fix $\theta,\eta$ and discard the union of the null sets in [A2]. At every remaining time, $w_\eta(t),p(t)\in V$ and both equations hold for all tests, so the choices $v=w_\eta(t)$ in the adjoint equation and $v=p(t)$ in the linearized equation are legitimate. Adding them and cancelling the two occurrences of $a_\theta(t;w_\eta(t),p(t))$ gives $$\langle f_\theta'[\eta],p\rangle-a_\theta'[\eta](u_\theta,p)=\langle w_\eta',p\rangle+\langle p',w_\eta\rangle+D_uL[w_\eta].$$ Each term on the right belongs to $L^1(0,T)$ by the $L^2(V^*)$ and $L^2(V)$ hypotheses and Cauchy--Schwarz. Thus the difference on the left has a measurable integrable representative without assuming either summand separately integrable. Apply [F2] to $w_\eta,p$; Countable Choice enters through this pairing supplier. [A1, A2, F2, given, algebra]'''
a=a.replace(old,new)
b=(root/paths[1]).read_text()
b=b.replace('Let $u,p$ and $u_h,p_h$ denote','In particular, its continuous linearized and adjoint equations hold simultaneously for all tests outside the null sets specified there. Let $u,p$ and $u_h,p_h$ denote',1)
b=b.replace('The semidiscrete representation is assumed explicitly in the Statement.','Its simultaneous-test hypotheses are inherited in the Statement. The semidiscrete representation is assumed explicitly in the Statement.',1)
proposed={paths[0]:a,paths[1]:b}
patch=''
for path,text in proposed.items():
 dst=out/'proposed'/path;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_text(text)
 patch+=''.join(difflib.unified_diff((root/path).read_text().splitlines(True),text.splitlines(True),fromfile='a/'+path,tofile='b/'+path))
(out/'source.patch').write_text(patch)
# Future contract changes are instructions only, with exact old values; no canonical metadata is edited.
c=json.loads((root/contract).read_text())
ops=[]
oldentry=c['contracts'][ids[0]]['derivations'][1]
newentry=dict(oldentry)
newentry['claim']=new[len('1.2 '):].rsplit(' [A1, A2, F2, given, algebra]',1)[0]
newentry['inputs']=['A1','A2','F2','given','algebra']
ops.append({'file':contract,'pointer':'/contracts/'+ids[0]+'/derivations/1','before':oldentry,'after':newentry})
# Upgrade consumer's original short quote to exact complete repaired statement; original file remains guarded.
for i,cit in enumerate(c['contracts'][ids[1]]['citations']):
 if cit.get('source')==ids[0]:
  ops.append({'file':contract,'pointer':'/contracts/'+ids[1]+'/citations/'+str(i)+'/quote','before':cit['quote'],'after':a.split('## Statement\n\n',1)[1].split('\n## Facts & Assumptions',1)[0].strip()})
(out/'future-mirror-operations.json').write_text(json.dumps({'status':'DRAFT ONLY: native Step 5 must apply after source integration and current-input checks','operations':ops,'preserve':'All original risk_review attribution and native digest concern remain historical evidence. Append a separately attributed correction/review rather than rewriting them. Refresh current risk notes and boundary worksheets natively, with the common-null requirement; no historical verdict is upgraded.'},indent=2)+'\n')
# Read actual deps and aliases throughout items; discovery only, not validation.
records={}
for p in (root/'items').glob('*.md'):
 try:
  txt=p.read_text(); fm=yaml.safe_load(txt.split('---',2)[1])
  if isinstance(fm,dict) and fm.get('id'): records[fm['id']]={'file':str(p.relative_to(root)),'deps':fm.get('deps',[]) or [],'justified_by':fm.get('justified_by',[]) or [],'aliases':fm.get('aliases',[]) or []}
 except Exception: pass
aliases={alias:id for id,r in records.items() for alias in r['aliases']}
closure=set(ids[:1]); edges=[]
changed=True
while changed:
 changed=False
 for id,r in records.items():
  for dep in r['deps']+r['justified_by']:
   dep=aliases.get(dep,dep)
   if dep in closure:
    if [dep,id] not in edges: edges.append([dep,id])
    if id not in closure:closure.add(id);changed=True
(out/'consumer-discovery.json').write_text(json.dumps({'method':'Read actual item frontmatter deps and justified_by, resolve aliases, take reverse transitive closure; complementary rg on items/library checked prose links. Discovery is not a check/gate.','root':ids[0],'closure':sorted(closure),'edges':edges,'dispositions':{ids[0]:'Reviewed supplier Definition/evolution triple/energy pairing first; draft strengthens only theorem test quantifiers and proves integrability. The supplier Definition is unchanged.',ids[1]:'Same reviewer checked all four steps. Explicitly inherit simultaneous-test hypothesis in Statement/F1; estimate, reverse-time signs, parameter derivative bounds, trace errors and full Ritz residual remain valid. No further item consumers discovered.','thm-parabolic-control-adjoint-gradient-extension':'Context-only independent interface; no deps/prose edge to changed theorem. Uses its own bounded measurable coercive forms and separable V with operator equations, so unchanged.',page:'Page description says conditional differentiable state/adjoint formula and retains Ritz derivative; accurate after repair, no page edit needed.'}},indent=2)+'\n')
obs={}
for suffix in ['judge.jsonl','judge-attempts.jsonl']:
 p=root/f'research/{run}-{suffix}'
 rows=[]
 if p.exists():
  for line in p.read_text().splitlines():
   if any(id in line for id in ids): rows.append(line)
 obs[str(p.relative_to(root))]={'exists':p.exists(),'matching_raw_rows':rows}
(out/'original-luna-observation.json').write_text(json.dumps({'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':obs,'interpretation':'No rows for either scoped item were present in these native ledgers at this observation. This is absence of a current original verdict, not acceptance. The 4-judge sweep was active in observed status.md. Native ledgers may advance; root must refresh before integration. Nothing was rewritten.'},indent=2)+'\n')
(out/'source-guard-instructions.json').write_text(json.dumps({'guards':guards,'proposed_source_paths':paths,'rule':'Guard by exact raw byte equality with guards/PATH before applying source.patch. Owner computes hashes and recertifies; no hashes or validation claims are supplied here. Never copy guards over canonical files.','prohibited_operations_performed':False,'status':'Research-only draft; frozen native Step 4 remains unchanged. No source/metadata/runtime/ledger/tools edit, tests/gates/checks/native dispatch/commit.'},indent=2)+'\n')
