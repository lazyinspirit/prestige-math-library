from pathlib import Path
import hashlib,json,difflib,yaml,shutil,fitz
out=Path('research/fluid-dynamics-all-47-2026-10-23-owner-step4-constitutive/geophysical-supplement')
ids=['def-fd-rotating-stratified-shallow-equations','thm-fd-stratified-linear-energy','thm-fd-shallow-water-smooth-energy','post-fd-geophysical-model-branches','pthm-fd-geophysical-conditional-energy','ex-fd-coriolis-no-work','ex-fd-geophysical-rest-state']
changes={}
def replace(id,old,new):
 p=Path('items',id+'.md');s=changes.get(id,p.read_text());assert s.count(old)==1,(id,old[:70]);changes[id]=s.replace(old,new)
replace('def-fd-rotating-stratified-shallow-equations','The energy integrals below omit a constant reference density; multiplying them by a specified density in kilograms per cubic metre gives joules.','If a spatially integrated energy for either system is defined per unit constant reference density, multiplying that normalized energy by the specified density in kilograms per cubic metre gives joules.')
replace('thm-fd-stratified-linear-energy','The condition $N>0$ is essential for this positive energy.','Here $N>0$ fixes the positive buoyancy-frequency convention; the weight $1/N^2$ is positive for every nonzero real $N$, while the displayed functional is undefined at $N=0$.')
replace('post-fd-geophysical-model-branches','The background pressure profile is an adopted reference input; the displayed perturbation equations impose no separate equation on $p_0$.','The resting background pressure is constrained by hydrostatic balance as specified for the Boussinesq branch below; it is not an arbitrary pressure offset. This background constraint is an adopted physical-model assumption, not a consequence of the perturbation equations.')
old='In addition, this branch adopts a linearization about a resting, uniformly stratified state: $N>0$ is a prescribed constant buoyancy-frequency parameter, and advection of the perturbations is omitted.'
new=r'''In addition, this branch adopts a linearization about a resting, uniformly stratified state. Write $z=x_3$ for upward height and prescribe an affine background buoyancy-acceleration profile $B_0:\mathbb R\to\mathbb R$, measured in $\mathrm{m\,s^{-2}}$, with $B_0'(z)=N^2$ for the prescribed constant $N>0$ in $\mathrm{s^{-1}}$. The modeled total buoyancy anomaly relative to the constant-density gravitational reference is $B_0(z)+b(t,x)$; $b$ is its perturbation. Require the time-independent resting pressure $p_0$ to satisfy $\rho_0^{-1}\nabla_x p_0(x)=(B_0(x_3)-g)e_3$ on $U_{\rm bg}$. Thus $-\rho_0^{-1}\nabla_xp_0-ge_3+B_0e_3=0$ in the zero-velocity reference state, and subtracting it leaves $-\nabla\pi+be_3$ in the perturbation momentum equation. Equivalently, a constant-density hydrostatic reference has gradient $-\rho_0g e_3$, and the stratified resting pressure adds a gradient $\rho_0B_0e_3$. No buoyancy equation of state or density-anomaly measurements are inferred from these adopted profiles. The positive derivative $B_0'=N^2$ supplies the constant stratification coefficient, and advection of the perturbations is omitted.'''
replace('post-fd-geophysical-model-branches',old,new)
# Preserve precise public scope in the already existing scope text.
replace('post-fd-geophysical-model-branches','flows: a linear, constant-stratification Boussinesq branch and a separate','flows: a linear, constant-stratification Boussinesq branch about a\n  hydrostatically balanced resting background and a separate')
for id in ids:
 p=Path('items',id+'.md');shutil.copyfile(p,out/'before'/p.name)
for id,s in changes.items():
 p=Path('items',id+'.md');(out/'proposals'/p.name).write_text(s)
 (out/'proposals'/(id+'.patch')).write_text(''.join(difflib.unified_diff(p.read_text().splitlines(True),s.splitlines(True),fromfile=str(p),tofile=str(p))))
inputs={str(Path('items',id+'.md')):hashlib.sha256(Path('items',id+'.md').read_bytes()).hexdigest() for id in ids}
for p in ['research/fluid-dynamics-all-47-2026-10-23-batch-39.notes.md','research/fluid-dynamics-all-47-2026-10-23-batch-40.notes.md']:
 inputs[p]=hashlib.sha256(Path(p).read_bytes()).hexdigest()
(out/'current-raw-guards.json').write_text(json.dumps({'version':1,'run':'fluid-dynamics-all-47-2026-10-23','reviewer':'/root/fluid_step4_constitutive','authority':'read-only proposals; native Step5 owns verification/adoption','inputs':inputs,'proposals':{id:{'path':str(out/'proposals'/(id+'.md')),'sha256':hashlib.sha256(s.encode()).hexdigest()} for id,s in changes.items()}},indent=2)+'\n')
rows=[]
for l in Path('research/fluid-dynamics-all-47-2026-10-23-judge.jsonl').read_text().splitlines():
 d=json.loads(l)
 if d.get('id') in ids[:4]:rows.append(d)
(out/'actual-judge-observations.json').write_text(json.dumps(rows,indent=2)+'\n')
p=out/'sources/vallis.pdf';d=fitz.open(p)
(out/'sources/vallis-inspected-pages.txt').write_text('\n\n'.join((f'PDF page {n} (printed {n-4})\n' if n>1 else 'PDF title page 1\n')+d[n-1].get_text() for n in [1,16,17,18,19,20,21]))
(out/'sources/reading.json').write_text(json.dumps({'source_url':'https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf','retrieval':'Actual curl -L --fail --max-time 60 successful with normal TLS validation, complete PDF','bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'pages':len(d),'actual_reading':'Title page; complete extracted text PDF pages16-21, printed12-17. In particular §1.6.2 equations1.59-1.73, and complete §1.6.3 Boussinesq energy derivation1.74-1.78. §1.7 opening at printed17 also inspected. No whole-book reading claimed.','prior_records_inspected':['research/fluid-dynamics-all-47-2026-10-23-batch-39.notes.md','research/fluid-dynamics-all-47-2026-10-23-batch-40.notes.md'],'notation_translation':'Vallis p0 is the hydrostatic pressure for constant rho0 (1.62); its mean buoyancy tilde b has derivative N² (1.72-1.73). Local carrier p0 is called pressure of the full resting state and pi is pressure relative to it. Draft combines constant-density hydrostatic pressure with the stratification pressure into this full resting p0: grad p0/rho0=(B0-g)e3, B0 prime=N². The combination and cancellation are shown locally; no claim Vallis uses local p0 notation for this combined profile.','limits':'No new Berloff/Holm/Rizzoli full-text retrieval or empirical assessment. Exact positive quadratic constant-N linear energy remains the locally proved theorem; Vallis1.78 is a different, nonlinear buoyancy-potential energy.'},indent=2)+'\n')
(out/'sources/.gitignore').write_text('vallis.pdf\n')
print(json.dumps({'proposed':list(changes),'guarded_inputs':len(inputs),'judge_records':len(rows),'vallis_pages':len(d)},indent=2))
