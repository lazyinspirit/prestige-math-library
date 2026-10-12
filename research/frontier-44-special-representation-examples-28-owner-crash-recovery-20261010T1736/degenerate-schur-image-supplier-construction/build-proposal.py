from pathlib import Path
import json,hashlib,re,difflib,datetime,subprocess
root=Path.cwd();out=Path(__file__).parent;id='thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects';p=root/'items'/f'{id}.md';before=p.read_text();hist=json.loads((out/'history-classification.json').read_text());assert hashlib.sha256(p.read_bytes()).hexdigest()==hist['guards'][0]['raw_sha256']
s=before
old=r'''$T=P_c\otimes V^{\otimes d}$, and let $N(A),K(A)$ denote the standard and
costandard objects of the relevant parabolic summand, $L(A)$ the simples and
$P(A)$ the projective covers, indexed by admissible labels $A$; let
$\mathrm{Std}$ be the standard labels. Then:'''
new=r'''$T=P_c\otimes V^{\otimes d}$. Use the current category-O namespace:
$N(A):=M(A)$ is the generalized standard, $K(A):=\nabla(A)$ the costandard,
$L(A)$ the category-O simple and $P(A)$ its projective cover, as in
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]].
The source17 symbol $K(A)$ denotes our $L(A)$, not our costandard $K(A)$.
Write $\mathsf L(A):=\mathrm{Wh}(L(A))$ for the finite-W image of the
category-O simple; for $A\in\mathrm{Std}$ this is the source finite-W simple
appearing in the Whittaker/Morita contract of
[[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]].
In particular the $W_d$-Hom below takes a finite-W module as its second
argument. Let $\mathrm{Std}$ be the standard labels. Then:'''
assert s.count(old)==1;s=s.replace(old,new)
# Same objects as the old approved sourceK/O-simple: no mathematical weakening.
s=s.replace('\\pi(K(A))','\\pi(L(A))').replace('\\operatorname{Hom}_{\\mathfrak g}(T,K(A))','\\operatorname{Hom}_{\\mathfrak g}(T,L(A))').replace('\\operatorname{Hom}_{W_d}(V_c^{\\otimes d},L(A))','\\operatorname{Hom}_{W_d}(V_c^{\\otimes d},\\mathsf L(A))').replace('[N(A):K(B)]','[N(A):L(B)]').replace('multiplicities of $K(B)$','multiplicities of the simple $L(B)$')
oldf=next(x for x in before.splitlines() if x.startswith('[F1]'))
newf=r'''[F1] In the actual category-O namespace the generalized standards are $M(A)=N(A)$, the simples are $L(A)$, projective covers are $P(A)$ and costandards are $\nabla(A)=K(A)$. These have the BGG reciprocity and standard/costandard/tilting flags of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]] and [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]. Composition multiplicities below are always taken against the simple $L(B)$; they are not standard-flag multiplicities against a costandard.'''
s=s.replace(oldf,newf)
(out/f'{id}.proposed.md').write_text(s)
(out/'faithful-typed-restoration.diff').write_text(''.join(difflib.unified_diff(before.splitlines(True),s.splitlines(True),fromfile=str(p.relative_to(root)),tofile=str((out/f'{id}.proposed.md').relative_to(root)))))
def h(s):return hashlib.sha256(s.encode()).hexdigest()
def sec(s,n):return s.split('## '+n+'\n',1)[1].split('\n## ',1)[0]
# Preservation proof: undo only the typed namespace substitutions/prefix and compare Statement bytes.
stmt=sec(s,'Statement');undo=stmt.replace(new,old).replace('\\pi(L(A))','\\pi(K(A))').replace('\\mathsf L(A)','L(A)').replace('[N(A):L(B)]','[N(A):K(B)]');assert undo==sec(before,'Statement')
def guard(q):return {'path':str(q.relative_to(root)),'raw_sha256':hashlib.sha256(q.read_bytes()).hexdigest()}
used=[]
for dep in sorted(set(re.findall(r'\[\[([^\]|]+)',s))):
 q=root/'items'/f'{dep}.md';t=q.read_text();used.append({'id':dep,**guard(q),'literal_contracts':{n:sec(t,n) for n in ['Definition','Statement'] if '## '+n+'\n' in t}})
r={'version':1,'run':hist['run'],'id':id,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Previously approved typed namespace restoration only; no new source17 theory repair','history_classification_guard':guard(out/'history-classification.json'),'before':guard(p),'proposal':guard(out/f'{id}.proposed.md'),'statement_before_sha256':h(sec(before,'Statement')),'statement_proposed_sha256':h(stmt),'statement_preservation':'Exact after undoing typed aliases/prefix: every original five mathematical clause and every admitted-origin, off-standard-projective and ungraded boundary retained','typed_dictionary':{'source17_N':'library M(A)=local N(A), generalized standard','source17_K':'library L(A), O-simple','source17_W_L':'local mathsf L(A)=Wh(library L(A)), finite-W module','current_costandard_K':'library nabla(A), never a simple composition factor'},'literal_replacements':[{'before':old,'after':new},{'before':oldf,'after':newf},{'before':'[N(A):K(B)]','after':'[N(A):L(B)]'},{'before':r'\pi(K(A))','after':r'\pi(L(A))'},{'before':r'\operatorname{Hom}_{W_d}(V_c^{\otimes d},L(A))','after':r'\operatorname{Hom}_{W_d}(V_c^{\otimes d},\mathsf L(A))'}],'used_current_supplier_guards_and_exact_contracts':used,'own_typing_restoration_eligible':True,'own_whole_proof_accepted':False,'held_prerequisites':['The exhausted source17 reflected-left Whittaker model/invariance/generation route remains held','Existing source17 finite-highest/head-survival and outside-stable corner theory not reconstructed or silently accepted','Saved Schur packet Proof3.1 alternative head argument not adopted: it lies outside this namespace-only restoration'],'independent_acceptance_owner':'/root/repair_klr_global_basis','all_actual_consumer_reviews':'Same supplier reviewer owns every affected consumer; constructor does not certify them','additional_incoming_AC_obligation':'K0/G0/Ariki previously staged packet unchanged. K0 needs explicit inheritedAC Statement/Given prefix and defAC dependency in a distinct guarded successor when root integrates; current Schur Statement already assumes AC and deps contains defAC.','old_caps_unchanged':True,'counter_allocation':None,'canonical_or_manifest_writes':False}
steps=[]
for m in re.finditer(r'(?m)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\n\n## |\Z)',sec(s,'Proof'),re.S):
 text=m[2].strip();tag=re.search(r'\[([^\[\]]+)\](?: ∎)?$',text);assert tag;steps.append({'step':m[1],'claim':text[:tag.start()].strip(),'inputs':[x.strip() for x in tag[1].split(',')]})
r['proposed_exact_proof_derivations']=steps
(out/'guarded-typed-restoration.json').write_text(json.dumps(r,indent=2)+'\n')
cmd=['node','tools/proof-layout.mjs',str((out/f'{id}.proposed.md').relative_to(root))];c=subprocess.run(cmd,text=True,capture_output=True);assert c.returncode==0,(c.stdout,c.stderr)
(out/'focused-layout.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'command':cmd,'exit_code':c.returncode,'stdout':c.stdout,'stderr':c.stderr,'proposal':guard(out/f'{id}.proposed.md'),'not_independent_mathematical_acceptance':True},indent=2)+'\n')
drift=[]
for g in [r['before']]+used:
 q=root/g['path'];actual=hashlib.sha256(q.read_bytes()).hexdigest()
 if actual!=g['raw_sha256']:drift.append({'path':g['path'],'expected':g['raw_sha256'],'actual':actual})
(out/'final-guard-recheck.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'drift':drift,'stable':not drift,'whole_branch_held':True},indent=2)+'\n')
print(c.stdout);print('Supplier drift:',len(drift));print('Statement preservation through typed aliases:',undo==sec(before,'Statement'))
