from pathlib import Path
import json, hashlib, difflib, re, yaml

BASE=Path.cwd()
OUT=BASE/'research/fluid-dynamics-all-47-2026-10-23-owner-step4-surface-transport/supplement-filter-pressure'
RUN='fluid-dynamics-all-47-2026-10-23'
FILTER='lem-fd-periodic-filter-normalization-and-commutation'
POST='post-fd-eddy-viscosity-closure'
sha=lambda b:hashlib.sha256(b).hexdigest()
def dump(name,o): (OUT/name).write_text(json.dumps(o,indent=2,ensure_ascii=False)+'\n')
def section(s,h): return s.split('## '+h+'\n',1)[1].split('\n## ',1)[0]
before={i:(BASE/'items'/f'{i}.md').read_text() for i in [FILTER,POST]}
after=dict(before)
new_f2=r'[F2] [[cor-change-of-variables-for-compactly-supported-functions]]: let $n\ge1$, let $V\subseteq\mathbb R^n$ be open, and let $g:V\to\mathbb R^n$ be injective and $C^1$ with invertible derivative throughout $V$. If $f:\mathbb R^n\to\mathbb R$ is compactly supported Riemann integrable and $\operatorname{supp}f\subseteq g(V)$, then the function equal to $f(g(s))|\det Dg(s)|$ on $V$ and zero outside $V$ is compactly supported Riemann integrable, and its integral over $\mathbb R^n$ equals $\int_{\mathbb R^n}f$.'
new_21=r'2.1 Choose the centered closed period cell $Q=[-L/2,L/2]^d$. For $r\in Q$ and $n\in\mathbb Z^d\setminus\{0\}$, one coordinate of $r+Ln$ has absolute value at least $L/2>\ell$, so its kernel summand is zero. Thus on $Q$ the periodized kernel is $f(r)=\ell^{-d}K(r/\ell)$, whose support $\ell\operatorname{supp}K$ is compactly contained in $B_\ell(0)\subset\operatorname{int}Q$. Its period-cell integral is therefore its integral over $\mathbb R^d$. Step 1.2 gives compact-support Riemann integrability. Apply [F2] on the open domain $V=\mathbb R^d$ with $g(s)=\ell s$. This map is a global $C^1$ diffeomorphism with image $\mathbb R^d$, $|\det Dg|=\ell^d$, and hence $\operatorname{supp}f\subseteq g(V)$; zero extension outside $V$ is vacuous. The transformed integrand is $K(s)$, giving $\int_{\mathbb T_L^d}G_\ell=\int_{\mathbb R^d}K=1$. [F2, F5, step 1.1, step 1.2]'
new_31=r'3.1 With the additional smooth periodic factor $q(x-r,t)$, the centered-cell argument in step 2.1 identifies the convolution with $\int_{\mathbb R^d}f_{x,t}(y)\,dy$, where $f_{x,t}(y)=\ell^{-d}K(y/\ell)q(x-y,t)$, componentwise. Each such integrand has support contained in the same compact set $\ell\operatorname{supp}K$ and is Riemann integrable by step 1.2. Apply [F2] with the same global dilation $g(s)=\ell s$ on $V=\mathbb R^d$; its image contains this support, its derivative is invertible, and zero extension outside $V$ is vacuous. The transformed integrand is $K(s)q(x-\ell s,t)$, proving the stated Euclidean representation. [F1, F2, F5, step 1.1, step 1.2, step 2.1]'
for prefix,new in [('[F2]',new_f2),('2.1 ',new_21),('3.1 ',new_31)]:
 old=next(l for l in after[FILTER].splitlines() if l.startswith(prefix))
 after[FILTER]=after[FILTER].replace(old,new)

old_pressure=r'The pressure per unit mass in the filtered equation is the scalar field $\pi=p_{\rm dyn}/\rho_0\in C^1(\mathbb T_L^3\times I;\mathbb R)$ in m$^2$ s$^{-2}$, and $\nabla\pi$ denotes its spatial gradient.'
new_pressure=r'The pressure per unit mass in the filtered equation is the filtered scalar field $\pi_\ell=\overline{p_{\rm dyn}}_\ell/\rho_0\in C^1(\mathbb T_L^3\times I;\mathbb R)$ in m$^2$ s$^{-2}$, where $\overline{p_{\rm dyn}}_\ell(x,t)=\int_{\mathbb T_L^3}G_\ell(r)p_{\rm dyn}(x-r,t)\,dr$, and $\nabla\pi_\ell$ denotes its spatial gradient. The isotropic modeled term $2kI_3/3$ remains in $\tau_\ell^{\rm model}$ below; it is not absorbed into $\pi_\ell$.'
assert old_pressure in after[POST]
after[POST]=after[POST].replace(old_pressure,new_pressure)
old_eq=r'\nabla\pi=\nu\Delta\overline u_\ell'
new_eq=r'\nabla\pi_\ell=\nu\Delta\overline u_\ell'
assert after[POST].count(old_eq)==1
after[POST]=after[POST].replace(old_eq,new_eq)

edits=[]
for i in [FILTER,POST]:
 assert before[i]!=after[i]
 assert before[i].split('---',2)[1]==after[i].split('---',2)[1]
 if i==FILTER:assert section(before[i],'Statement')==section(after[i],'Statement')
 (OUT/f'{i}.before.md').write_text(before[i])
 (OUT/f'{i}.proposed.md').write_text(after[i])
 diff=''.join(difflib.unified_diff(before[i].splitlines(True),after[i].splitlines(True),fromfile=f'items/{i}.md',tofile=f'items/{i}.md'))
 (OUT/f'{i}.diff').write_text(diff)
 edits.append({'id':i,'before_raw_sha256':sha(before[i].encode()),'proposed_raw_sha256':sha(after[i].encode()),'diff':str((OUT/f'{i}.diff').relative_to(BASE)),'interface_changed':i==POST,'frontmatter_unchanged':True})

loader=getattr(yaml,'CSafeLoader',yaml.SafeLoader)
items={};aliases={}
for p in (BASE/'items').glob('*.md'):
 try:
  o=yaml.load(p.read_text().split('---',2)[1],Loader=loader)
  items[o['id']]=(o,p)
  for a in o.get('aliases',[]) or []:aliases[a]=o['id']
 except Exception:pass
graph={i:{aliases.get(d,d) for d in (o.get('deps',[]) or [])} for i,(o,p) in items.items()}
def closure(t):
 seen=set();front={t};layers=[]
 while front:
  nxt={i for i,deps in graph.items() if i!=t and i not in seen and deps&front}
  if nxt:layers.append(sorted(nxt))
  seen|=nxt;front=nxt
 return layers
post_layers=closure(POST);filter_layers=closure(FILTER)
assert post_layers==[['ex-fd-eddy-shear-production','pthm-fd-eddy-closure-resolved-dissipation']],post_layers
consumer_notes={
'ex-fd-eddy-shear-production':'Full Example, Facts and Verification1.1–2.1 use only the modeled stress and transfer formulas, prescribed nonnegative fields, fixed filter and zero trace of the displayed shear gradient. Pressure and the resolved momentum equation are not used. The pi_ell correction preserves the public model tensor, units, contraction convention, scope and exact-versus-modeled distinction. No source repair is needed.',
'pthm-fd-eddy-closure-resolved-dissipation':'Full Statement, A1/F1–F4 and Proof1.1–3.1 were checked. The consumer intentionally defines its own pi=p_dyn/rho0 as the unfiltered specific pressure in its explicitly assumed fine-scale Newtonian equation. That definition must remain unfiltered. Its pointwise contraction proof uses no pressure. The final conditional energy-slot argument uses the exact covariance theorem, whose own Statement and Proof1.2/3.1 correctly filter the fine-scale pressure. With the postulate corrected to pi_ell, replacement of only the stress slot is now consistent. No consumer source edit or new regularity/empirical premise is required.'}
post_reviews=[]
for i in sum(post_layers,[]):
 p=items[i][1]
 post_reviews.append({'id':i,'path':str(p.relative_to(BASE)),'raw_sha256':sha(p.read_bytes()),'decision':'unaffected after the precise public Postulate correction','reviewer':'/root/fluid_step4_surface_transport','reason':consumer_notes[i]})
filter_notes={
'thm-fd-filtered-covariance-energy':'F2 and Proof1.1–3.1 use unit mass, Euclidean representation and derivative commutation. The centered-cell proof establishes the same full Statement, so exact covariance, filtered pressure and energy calculations retain their supplier.',
'thm-fd-holder-energy-transfer-bound':'F2 and Proof1.1–1.3/3.1 use the same Euclidean representation, unit mass, compact kernel moments and fixed-time spatial commutation; its constant-time-extension explanation remains valid. No Statement change or extra time regularity is introduced.',
'ex-fd-filtering-constant-field':'The example uses the filter definition and Holder theorem indirectly; unit-mass filtering still preserves constants and zero covariance. No affected pressure assumption.',
'pthm-fd-eddy-closure-resolved-dissipation':'F3 and Proof1.2 use only spatial derivative commutation to preserve zero divergence. The full lemma Statement is unchanged.',
'ex-fd-eddy-shear-production':'F2 and Verification1.1 use only spatial commutation and normalization, unchanged by the proof repair.'}
filter_reviews=[{'id':i,'raw_sha256':sha(items[i][1].read_bytes()),'decision':'unaffected by Facts/proof-only repair','reason':filter_notes[i]} for i in sum(filter_layers,[])]

contracts=[]
for b,i in [('37',FILTER),('38',POST)]:
 p=BASE/f'research/{RUN}-batch-{b}.proof-contracts.json';c=json.loads(p.read_text())['contracts'][i]
 dump(f'{i}.contract-observed.json',c)
 if i==FILTER:
  rows=[]
  for step,new in [('2.1',new_21),('3.1',new_31)]:
   old=next(d for d in c['derivations'] if d['step']==step)
   row=dict(old);row['claim']=new.split(' ',1)[1].rsplit(' [',1)[0]
   rows.append({'old':old,'proposed':row})
  contracts.append({'id':i,'path':str(p.relative_to(BASE)),'derivation_replacements':rows,'citation_action':'Retain the exact corollary quote including support-in-image; the repaired Fact now matches it. Existing step IDs and input tags remain unchanged.','risk_review_action':'Native reviewer should record its actual centered-cell/global-dilation support checks; do not reuse old review as acceptance of new proof.'})
 else:
  contracts.append({'id':i,'path':str(p.relative_to(BASE)),'physics_review_action':'Native reviewer must freshly review formulation and the pressure/source distinction; scope and non-derivation remain the same. UW page11 Eqs15/17 carries filtered P; page12 Eq20 uses a modified filtered pressure after moving the isotropic stress term. Our full stress retains that isotropic term and uses pi_ell=filtered(p_dyn)/rho0 without absorbing2k/3.','all_public_interface_consumers_checked':post_reviews,'historical_review_action':'Existing reports/stamps are history, not new acceptance.'})

relevant={FILTER,POST,'def-fd-positive-convolution-fluid-filter','def-fd-incompressible-newtonian-model'}|set(sum(post_layers,[]))|set(sum(filter_layers,[]))|set(items[FILTER][0]['deps'])
inputs={f'items/{i}.md':sha(items[i][1].read_bytes()) for i in sorted(relevant)}
for b in ['37','38']:
 for tail in ['pages.json','proof-contracts.json','coverage.json']:
  p=Path(f'research/{RUN}-batch-{b}.{tail}');inputs[str(p)]=sha((BASE/p).read_bytes())
pdf=OUT/'sources/hd-les.pdf';assert sha(pdf.read_bytes()).startswith('36c1aaccf552bab9')
inputs[str(pdf.relative_to(BASE))]=sha(pdf.read_bytes())
inputs[str((OUT/'sources/hd-les-pages-5-15.txt').relative_to(BASE))]=sha((OUT/'sources/hd-les-pages-5-15.txt').read_bytes())
report={
'version':1,'run':RUN,'reviewer':'/root/fluid_step4_surface_transport','review_cycle':1,'status':'draft outside support for native Step5; no source or decision authority','edits':edits,
'filter_finding':{'decision':'confirmed nonfatal incomplete dependency restatement','supplier':'cor-change-of-variables-for-compactly-supported-functions','proof_check':'The actual dilation g(s)=ell s is global on open R^d with image R^d and invertible derivative. All kernel and periodic-field products are compactly supported Riemann integrands by existing proof1.2. F2 can therefore be applied with every exact supplier hypothesis. The centered-cell replacement for2.1/3.1 eliminates translated-cell boundary bookkeeping: because ell<L/2, all nonzero lattice translates vanish on [-L/2,L/2]^d and the surviving support lies strictly inside the cell. No extra prerequisite or narrowed field/parameter scope is needed.','public_statement_unchanged':True,'public_definition_justifier':'def-fd-positive-convolution-fluid-filter lists this lemma in justified_by; its Definition and required normalization remain unchanged.','consumer_use_reviews':filter_reviews},
'pressure_finding':{'decision':'confirmed public Postulate pressure typing/notation defect','problem':'p_dyn is defined as the base dynamic pressure in the fine-scale Cauchy stress. Its unfiltered ratio cannot generally serve as the filtered momentum pressure. Imposing filter-invariant pressure would silently narrow the adopted smooth periodic scope and is not proposed.','repair':'Define pi_ell=overline(p_dyn)_ell/rho0 by its explicit volume-measure convolution and use grad(pi_ell) in the resolved equation. Keep the entire modeled stress, including2kI3/3, on the right; no pressure absorption or extra2k/3 term.','regularity_check':'The prescribed p_dyn is C1 on torus×I. On every compact time interval the kernel and p_dyn and each first derivative are continuous on the compact integration cell/product. The already read compact-rectangle differentiation and Fubini interfaces pass each first derivative through the integral, so the defined pi_ell is C1. This uses the exact explicit convolution and needs no false assertion that p_dyn has the spatial C-infinity regularity of velocity.','scope_preserved':'Constant density, smooth periodic3D branch, mu>=0, k>=0, nu_t>=0, model inputs, units, Countable Choice, no empirical validation/universal applicability/no-exact-covariance-equality/no-exact-backscatter-sign clauses are preserved.','complete_consumer_layers':post_layers,'same_reviewer_all_public_consumers':post_reviews,'indirect_consumers':[]},
'source_reading':{'url':'https://courses.washington.edu/mengr544/handouts/hd-les.pdf','downloaded_bytes':pdf.stat().st_size,'sha256':sha(pdf.read_bytes()),'pinned_coverage_sha256_16':'36c1aaccf552bab9','pin_match':True,'actual_pages_independently_read':[6,7,11,12,14,15],'page_convention':'Actual PDF file and printed page numbers agree for the relevant pages. Earlier coverage locators10–12 include the observed pressure formulas on11–12.','locators':['Section2 p6 Eq1 normalization/convolution; p7 Eq5 spatial homogeneity needed for commutation.','Section3 p11 Eqs15–17: the fine-scale pressure P is filtered to overline(P), with full exact residual stress tauR.','Section3 p12 Eqs18–20: separate trace2ksgs/3, deviatoric stress and modified filtered pressure. We do not copy its dimensionally suppressed modified-pressure formula into the Pa/specific-pressure convention.','Section4 p14 Eq30 and p15 first paragraph: deviatoric eddy stress and nonnegative modeled stress transfer; no exact-stress sign theorem.'],'limits':'Full PDF was retrieved and hash-matched, but independent reading was limited to the pages listed. Extraction5–15 is retained as evidence; no claim to have read every extracted page, the entire29-page PDF, Gibbs or MIT sources. Local target bodies and all listed direct supplier carriers/full LES consumer bodies were independently read. No original/imported mathematics edits.'},
'contract_proposals':contracts,'inputs':inputs,'native_adoption_required':True,'gates_stamps_state_writes_performed':False,'frozen_initial_artifacts_modified':False}
dump('scientific-resolution.json',report)
for i in [FILTER,POST]: assert (BASE/'items'/f'{i}.md').read_text()==before[i]
print(json.dumps({'report_path':str((OUT/'scientific-resolution.json').relative_to(BASE)),'report_sha256':sha((OUT/'scientific-resolution.json').read_bytes()),'postulate_consumers':sum(post_layers,[]),'filter_consumer_layers':filter_layers,'live_sources_unchanged':True},indent=2))
