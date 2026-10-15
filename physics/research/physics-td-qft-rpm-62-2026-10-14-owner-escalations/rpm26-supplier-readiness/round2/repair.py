from pathlib import Path
import json,re,hashlib,datetime,subprocess,os
run='physics-td-qft-rpm-62-2026-10-14';p=Path('research')/(run+'-owner-escalations')/'rpm26-supplier-readiness';r=p/'round2';(r/'before/items').mkdir(parents=True,exist_ok=True)
state=json.loads((Path('.physics-autopilot')/run/'state.json').read_text());dispatch={str(n):state['dispatches']['1-scaffold:batch-'+str(n)] for n in [25,26]}
assert all(x['endedAt'] and x['lastExitOk'] is True for x in dispatch.values())
workers=[]
for line in subprocess.check_output(['ps','-axo','pid=,ppid=,command='],text=True).splitlines():
 parts=line.strip().split(None,2)
 if len(parts)<3 or int(parts[0]) in [os.getpid(),os.getppid()]:continue
 cmd=parts[2]
 if cmd.startswith('rg '):continue
 if ('codex' in cmd or 'beta' in cmd) and any(run+'-beta-'+str(n)+'.task.md' in cmd for n in [25,26]):workers.append({'pid':int(parts[0]),'command':cmd})
assert not workers
log=(Path('.physics-autopilot')/run/'autopilot.log').read_text().splitlines();completed=[x for x in log if any('[dispatch-ok] beta/batch-'+str(n)+' exit=0' in x for n in [25,26])];assert len(completed)>=2
(r/'writer-handoff.json').write_text(json.dumps({'run':run,'cycle':2,'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native_dispatches':dispatch,'native_completion_lines':completed,'matching_active_source_workers':workers,'source_writer_absent':True,'basis':'Native assigned authors completed successfully; task-scoped codex/beta source-writer processes absent. Read-only rg searches are not source writers. Root explicitly authorized same-owner handoff.'},indent=2)+'\n')
old=json.loads((p/'observed-index.json').read_text());ids=list(old['direct_and_indirect_dependency_consumers']);before={}
for id in ids:
 raw=Path('items/'+id+'.md').read_bytes();(r/'before/items'/f'{id}.md').write_bytes(raw);before[id]=hashlib.sha256(raw).hexdigest()
for n in [25,26]:
 for ext in ['pages.json','proof-contracts.json','notes.md','cross-batch-dependencies.json']:
  src=Path(f'research/{run}-batch-{n}.{ext}')
  if src.exists(): dst=r/'before/research'/src.name;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(src.read_bytes())
(r/'before-index.json').write_text(json.dumps(before,indent=2)+'\n')
changed=[]
def get(id):return Path('items/'+id+'.md').read_text()
def save(id,s):
 f=Path('items/'+id+'.md')
 if f.read_text()!=s:f.write_text(s);changed.append(id)
def adddep(s,id,role):
 m=re.search(r'^deps: \[(.*?)\]$',s,re.M);assert m
 deps=[x.strip() for x in m.group(1).split(',')];
 if id not in [x.strip('"') for x in deps]:s=s[:m.start(1)]+m.group(1)+', '+id+s[m.end(1):]
 if not re.search(r'^  '+re.escape(id)+':',s,re.M):s=s.replace('dependency_roles:\n','dependency_roles:\n  '+id+': '+role+'\n',1)
 return s
def geometry(s):return s.replace('def-rpm-h-background-and-model-quantities','def-gr-smooth-lorentzian-objects')
id='thm-rpm-h-homogeneous-massive-shell';s=geometry(get(id));s=s.replace('  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite','  def-rpm-spacetime-observer-and-worldline: mathematical-premise');s=s.replace('[F1] [[def-gr-smooth-lorentzian-objects]]: $g$ is a prescribed smooth Lorentzian metric with a fixed future cone.','[F1] [[def-gr-smooth-lorentzian-objects]] supplies a smooth time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$ and its future cone. The constants $m,c>0$ are parameters of the explicitly specified mathematical function $L$.');s=re.sub(r'^physical_scope:.*$','physical_scope: null',s,flags=re.M);save(id,s)
id='thm-rpm-h-first-order-action-and-geodesics';s=geometry(get(id));s=s.replace(', post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action','');s=re.sub(r'^  post-rpm-h-(free-test-particle-action|massless-shell-action): physical-assumption\n','',s,flags=re.M)
s=s.replace('Restrict to the future shell branch:', 'Select stationary triples on the future shell branch after taking the independent variations:')
s=s.replace('stationary paths of the square-root action in [[post-rpm-h-free-test-particle-action]]; the mechanical covector is', 'stationary paths of the mathematical square-root functional $S[x]=-mc\\int_a^b\\sqrt{-g(x\\prime,x\\prime)}\\,d\\lambda$ on future-timelike curves with fixed endpoints; the fibre-derivative covector is')
s=s.replace('the two adopted physical formulations','the displayed first-order functional and the selected future massive or nonzero future-null branch')
s=s.replace('[F1] [[post-rpm-h-free-test-particle-action]]: the massive square-root action is an adopted model on future timelike curves.', '[F1] On future-timelike smooth curves with fixed endpoint events, define the mathematical functional $S[x]=-mc\\int_a^b\\sqrt{-g(x\\prime,x\\prime)}\\,d\\lambda$ for fixed $m,c>0$. Its Lorentzian geometry is supplied by [[def-gr-smooth-lorentzian-objects]]. No physical motion principle is assumed.')
s=s.replace('[F2] [[post-rpm-h-massless-shell-action]]: the null action is a separate adopted model with $p\\ne0$, $p^\\sharp$ future null, and $e>0$.','[F2] For $m=0$, select the stationary triples with $p\\ne0$, $p^\\sharp$ future null, and smooth multiplier $e>0$. This is a mathematical branch condition on the displayed first-order functional, with independent variations taken before imposing $C_0=0$.')
s=re.sub(r'^physical_scope:.*$','physical_scope: null',s,flags=re.M);save(id,s)
id='thm-rpm-h-temporal-shell-reduction';s=geometry(get(id));s=s.replace('[F2] [[def-gr-smooth-lorentzian-objects]]: the background is fixed, smooth Lorentzian data with signature $(-+++)$.','[F2] [[def-gr-smooth-lorentzian-objects]] supplies the fixed smooth time-oriented Lorentzian four-manifold and metric with signature $(-,+,+,+)$.')
s=s.replace('and its variational equations on the interior of $J$ are exactly\n','and its variational equations on the interior of $J$ are exactly $\\dot q^i=H_{p_i}$, $\\dot p_i=-H_{q^i}$. The construction is local to this chart and intervals transverse to its time slices; no global curved-space gauge or quotient is asserted.\n')
s=s.replace('has $p(n)=-(p_0-\\beta^ip_i)/N$, so the future branch is the negative root','has $p(n)=(p_0-\\beta^ip_i)/N<0$ for a nonzero future-causal shell covector, so the future branch is the negative root')
s=re.sub(r'^physical_scope:.*$','physical_scope: null',s,flags=re.M);save(id,s)
for id in ['pthm-rpm-h-action-mechanical-momentum','pthm-rpm-h-massive-and-null-time-motion','pthm-rpm-h-coordinate-versus-observer-energy']:
 s=get(id).replace('kind: theorem\n','kind: physics-theorem\n',1).replace('domain: mathematics\n','domain: physics\n',1).replace('  def-rpm-h-background-and-model-quantities: mathematical-premise','  def-rpm-h-background-and-model-quantities: formulation-prerequisite')
 s=s.replace('  pthm-sr-momentum-and-four-force: flat-specialization-check','  pthm-sr-momentum-and-four-force: physical-result')
 if 'empirical_premises:' not in s:s=s.replace('library: physics\n','library: physics\nempirical_premises: []\n',1)
 if id.endswith('action-mechanical-momentum'):
  s=adddep(s,'post-sr-massive-particle-dynamics','physical-assumption');s=adddep(s,'pthm-sr-momentum-and-four-force','physical-result')
  s=s.replace('[F3] [[thm-sr-proper-time-and-observer-decomposition]]: in the flat model the adopted mechanical four-momentum convention is mass times four-velocity.','[F3] [[post-sr-massive-particle-dynamics]] adopts the flat massive-particle mechanical momentum $P=mU$, with its component identities supplied by [[pthm-sr-momentum-and-four-force]]. The geometric four-velocity and proper-time relation are supplied by [[thm-sr-proper-time-and-observer-decomposition]].')
  # Exact direct proper-time supplier, rather than attributing its worldline formula to a quantity definition.
  s=adddep(s,'def-gr-timelike-worldline-and-proper-time','mathematical-premise')
  s=s.replace('[F1] [[def-rpm-h-background-and-model-quantities]]: proper time is $d\\tau=\\sqrt{-g(V,V)}d\\lambda/c$, and massive $U=dx/d\\tau$.','[F1] [[def-gr-timelike-worldline-and-proper-time]] supplies $d\\tau=\\sqrt{-g(V,V)}d\\lambda/c$ on a future-timelike curve, and $U=dx/d\\tau$. The parameter and SI quantity conventions are those of [[def-rpm-h-background-and-model-quantities]].')
 if id.endswith('massive-and-null-time-motion'):s=s.replace('for the separate massless model $m=0$, with $\\mathbf p\\ne0$ and its magnitude is exactly $c$.','for the separate massless model $m=0$ with $\\mathbf p\\ne0$, its magnitude is exactly $c$.')
 save(id,s)
id='ex-rpm-h-shifted-chart-negative-energy';s=get(id).replace('domain: mathematics\n','domain: physics\n',1).replace('  def-rpm-h-background-and-model-quantities: mathematical-premise','  def-rpm-h-background-and-model-quantities: formulation-prerequisite');s=s.replace('physical_scope: "Exact flat-metric coordinate example; no measurement or curved-background claim."','physical_scope: "Conditional flat-metric coordinate example using the adopted normal-observer energy convention and the stated future massive shell; no measurement, empirical inference or curved-background claim."');s=s.replace('library: physics\n','library: physics\nempirical_premises: []\n',1);save(id,s)
# Remove time-sensitive native-ready status and obsolete cross-domain warnings only from the actually repaired supplier facts.
for id in ids:
 s=get(id)
 for prefix in ['[L1]','[L2]','[L3]']:
  lines=s.splitlines()
  for line in lines:
   if not line.startswith(prefix):continue
   if '[[thm-rpm-h-first-order-action-and-geodesics]]' in line:
    tail=' This is a mathematical variational supplier for explicit functionals and selected future branches; adoption of particle dynamics is a separate physical premise.'
    cut=re.split(r' Its (?:H25 |Step 1 |statement and dependencies)',line,maxsplit=1)[0]
    cut=cut.replace('It identifies these equations conditionally with the adopted massive and separate massless actions.','It relates the massive square-root functional to the shell equations; the null branch remains separately specified.')
    s=s.replace(line,cut+tail)
   elif '[[thm-rpm-h-temporal-shell-reduction]]' in line or '[[thm-rpm-h-inertial-time-reduced-hamiltonian]]' in line:
    cut=re.split(r' Its (?:H25 |Step 1 |dependencies match)',line,maxsplit=1)[0]
    s=s.replace(line,cut+' The supplier is a mathematical deduction within its stated chart, positive-root and nonzero-null hypotheses; it introduces no physical action adoption.')
 save(id,s)
(r/'changed-source-paths.json').write_text(json.dumps({'run':run,'cycle':2,'paths':['items/'+id+'.md' for id in changed]},indent=2)+'\n');print(json.dumps(changed))
