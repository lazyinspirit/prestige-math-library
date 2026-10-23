from pathlib import Path
import hashlib, json, difflib, re

BASE = Path.cwd()
OUT = BASE / 'research/fluid-dynamics-all-47-2026-10-23-owner-step4-surface-transport'
RUN = 'fluid-dynamics-all-47-2026-10-23'
def sha(b): return hashlib.sha256(b).hexdigest()
def section(s, heading):
    return s.split('## '+heading+'\n',1)[1].split('\n## ',1)[0]
def dump(name, obj):
    (OUT/name).write_text(json.dumps(obj, indent=2, ensure_ascii=False)+'\n')

surface='lem-fd-c1-boundary-surface-integrals'
transport='lem-fd-transport-and-density'
before={i:(BASE/'items'/f'{i}.md').read_text() for i in [surface,transport]}
after=dict(before)
old_f3=next(l for l in before[surface].splitlines() if l.startswith('[F3]'))
new_f3=r'[F3] Let $n\ge1$, let $V\subseteq\mathbb R^n$ be open, and let $T:V\to\mathbb R^n$ be injective and $C^1$ with $DT$ invertible throughout $V$. If $p:\mathbb R^n\to\mathbb R$ is compactly supported Riemann integrable and $\operatorname{supp}p\subseteq T(V)$, then the zero extension of $p(T(y))|\det DT(y)|$ from $V$ is compactly supported Riemann integrable and has the same integral over $\mathbb R^n$ as $p$. ([[cor-change-of-variables-for-compactly-supported-functions]])'
old_step=next(l for l in before[surface].splitlines() if l.startswith('2.2 '))
new_step=r'2.2 For graph charts $X:U_X\to S\cap O_X$ and $Y:U_Y\to S\cap O_Y$, put $E=S\cap O_X\cap O_Y$, $V=X^{-1}(E)$ and $W=Y^{-1}(E)$. These parameter domains are open, and $T=Y^{-1}\circ X:V\to W$ is a $C^1$ diffeomorphism with $X=Y\circ T$. F4 gives $DX=(DY\circ T)DT$ and hence $J_X=(J_Y\circ T)|\det DT|$, with $J_X=\sqrt{\det(DX^TDX)}$; rank two makes both Gram densities positive. Let $w:S\to\mathbb R$ be continuous with compact support $C\subset E$. The function $p(z)=w(Y(z))J_Y(z)$ on $W$, extended by zero to $\mathbb R^2$, is continuous with support contained in the compact set $Y^{-1}(C)\subset W=T(V)$, so it is Riemann integrable by F5. Apply F3 with $n=2$ and this $T,p$. Its pulled-back integrand on $V$ is $w(X(y))J_X(y)$, so the two zero-extended coordinate integrals agree. [step 1.1, F3, F4, F5]'
after[surface]=before[surface].replace(old_f3,new_f3).replace(old_step,new_step)
old_f4=next(l for l in before[transport].splitlines() if l.startswith('[F4]'))
new_f4=r'[F4] [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]: for each fixed $n\ge1$, the determinant is the polynomial $\sum_{\tau\in S_n}\operatorname{sgn}(\tau)\prod_{i<n}b_{\tau(i),i}$, with all $n$ rows and columns indexed by $0,\ldots,n-1$. To use spatial indices $1,2,3$, set $b_{ri}=m_{r+1,i+1}$ for $r,i<3$ and associate to each permutation $\sigma$ of $\{1,2,3\}$ the permutation $\tau(i)=\sigma(i+1)-1$ of $\{0,1,2\}$. This bijection preserves inversions and therefore signs, and reindexes the three factors. Thus $\det M=\sum_{\sigma\in\operatorname{Sym}(\{1,2,3\})}\operatorname{sgn}(\sigma)\prod_{j=1}^3m_{\sigma(j),j}$. The supplier product $i<n$ includes exactly $n$ factors.'
after[transport]=before[transport].replace(old_f4,new_f4)

edits=[]
for i in [surface,transport]:
    assert before[i]!=after[i]
    assert section(before[i],'Statement')==section(after[i],'Statement')
    assert before[i].split('---',2)[1]==after[i].split('---',2)[1]
    (OUT/f'{i}.before.md').write_text(before[i])
    (OUT/f'{i}.proposed.md').write_text(after[i])
    diff=''.join(difflib.unified_diff(before[i].splitlines(True),after[i].splitlines(True),fromfile=f'items/{i}.md',tofile=f'items/{i}.md'))
    (OUT/f'{i}.diff').write_text(diff)
    edits.append({'id':i,'source_path':f'items/{i}.md','before_raw_sha256':sha(before[i].encode()),'proposed_raw_sha256':sha(after[i].encode()),'diff':str((OUT/f'{i}.diff').relative_to(BASE)),'public_statement_unchanged':True,'frontmatter_unchanged':True,'application_authority':'none; native Step5 must independently verify and adopt'})

# Parse only the narrow ordinary list fields needed to select actual direct uses.
def deps(s):
    front=s.split('---',2)[1]
    m=re.search(r'^deps:\s*\n((?:[ \t]+-.*\n)+)',front,re.M)
    return re.findall(r'^\s+-\s+([\w-]+)\s*$',m.group(1),re.M) if m else []
consumers={i:[] for i in [surface,transport]}
for p in sorted((BASE/'items').glob('*.md')):
    s=p.read_text()
    for i in [surface,transport]:
        if i in deps(s): consumers[i].append(p.stem)

consumer_notes={
'post-fd-continuum-balances':'F4 and the full Postulate use finite continuous-field surface integrals, compactly supported subordinate weights, outward normals and conditional AComega agreement. F2 uses only transport/change of variables and continuity equivalence. Neither local F3 nor determinant indexing is a consumer interface.',
'pthm-fd-local-momentum-balance-from-continuum':'F5 and proof1.1 apply transport componentwise to rho u on K=closure(V), with local restriction/time translation; proof2.1 uses the integral convention through the continuum postulate. No use of the supplier F4 indexing.',
'pthm-fd-material-mass-continuity':'F2 and proof2.1 differentiate the compact-closure mass integral for C1 rho under the C2 positive-Jacobian motion; proof3.1 localizes within the balanced region. Unchanged transport Statement supplies exactly this.',
'pthm-fd-continuous-source-local-balances':'F3 and proof1.1,3.2,3.3,4.1 apply transport to smooth momentum, angular and energy densities, componentwise as appropriate; open-region closure conversion is supplied separately. No determinant-polynomial restatement is consumed.',
'lem-fd-moving-control-volume-transport':'F2 and proof1.1 apply transport to K=closure(C0), with time translation; proof2.1 then invokes its separate divergence theorem for gw. Unchanged motion and compact-Jordan conditions remain.',
'pthm-fd-smooth-material-kinematics':'F1 and proof1.1–4.1 use moving mass integrals, localization and density-Jacobian product invariance. The final division uses positive density. The exact transport Statement is unchanged.',
'lem-fd-local-balance-equivalence':'L1 and proof1.1 explicitly establish compact-Jordan closure and local field/domain restrictions before transport; later steps2.1,2.2,2.4,3.1 apply the same identity to momentum/angular/energy densities. Supplier F4 notation is not consumed.',
'ex-fdmath-dilation-jacobian':'F1/F2 and verification3.1 check the dilation motion and auxiliary bounded ball before using density-product equivalence. Verification1.1 computes det(alpha I3)=alpha^3 directly; zero-based versus one-based relabeling preserves it.',
'ex-fd-material-dilation':'F3 and verification1.2–1.4 use compact-closure transport for momentum, total energy and entropy with separate Jordan conversion; verification1.1 directly computes the three-dimensional dilation determinant. No changed hypothesis is introduced.'}
consumer_review=[]
for target,ids in consumers.items():
    for i in ids:
        p=BASE/'items'/f'{i}.md'
        assert i in consumer_notes, i
        consumer_review.append({'supplier':target,'consumer':i,'consumer_raw_sha256':sha(p.read_bytes()),'review_scope':'focused actual supplier use only; not a whole-item audit','outcome':'unaffected by proposed Facts/proof clarification','reason':consumer_notes[i]})

direct=[]
for i in [surface,transport]:
    for d in deps(before[i]):
        if d not in direct: direct.append(d)
context=['def-determinant-of-a-square-matrix','def-matrices-over-a-commutative-ring','def-inversions-inversion-number-and-sign','def-symmetric-group','def-natural-numbers']
inputs={}
for i in [surface,transport]+direct+context+sorted(set(sum(consumers.values(),[]))):
    p=Path('items')/f'{i}.md'; inputs[str(p)]=sha((BASE/p).read_bytes())
for b in ['2','3']:
    for suffix in ['pages.json','proof-contracts.json']:
        p=Path(f'research/{RUN}-batch-{b}.{suffix}'); inputs[str(p)]=sha((BASE/p).read_bytes())
for p in [Path('research/math-imports.json'),Path(f'research/{RUN}-step3-owner-creation-{surface}.json'),Path(f'research/{RUN}-step3-owner-recertification-{surface}-93a7463bad5b91c7.json')]:
    inputs[str(p)]=sha((BASE/p).read_bytes())

contracts=[]
for b,i in [('2',transport),('3',surface)]:
    p=BASE/f'research/{RUN}-batch-{b}.proof-contracts.json'
    c=json.loads(p.read_text())['contracts'][i]
    (OUT/f'{i}.contract-observed.json').write_text(json.dumps(c,indent=2,ensure_ascii=False)+'\n')
    if i==surface:
        old=next(d for d in c['derivations'] if d['step']=='2.2')
        new=dict(old);new['claim']=new_step.split(' ',1)[1].rsplit(' [',1)[0];new['inputs']=['step 1.1','F3','F4','F5']
        contracts.append({'id':i,'path':str(p.relative_to(BASE)),'operation':'replace only derivation with step=2.2; preserve original historical records and root-owned recertification','old':old,'proposed':new,'citation_F3':'Existing quote already includes the exact support-in-image hypothesis; retain it.','risk_review':'Native reviewer should record its actual support/domain check; no borrowed or refreshed historical stamp is proposed.'})
    else:
        contracts.append({'id':i,'path':str(p.relative_to(BASE)),'operation':'No derivation/citation change is mathematically required; exact original F4 polynomial quote already supports reindexing. Native reviewer may explain preserved inversion counts in actual current risk review.'})
dump('proposal.json',{'version':1,'run':RUN,'author':'/root/fluid_step4_surface_transport','status':'draft scientific support only','review_cycle':1,'edits':edits,'findings':[{'id':surface,'decision':'confirmed nonfatal inaccurate Fact restatement','reason':'The corollary explicitly assumes supp(p) subset T(V). Actual compact overlap weights supply it, so the claim remains fully valid after explicit F3/2.2 clarification.'},{'id':transport,'decision':'false positive; optional Fact clarification','reason':'Finite ordinal n is {0,...,n-1}; i<n contains n indices. Both determinant original and polynomial supplier use this convention consistently. Order-preserving relabeling preserves all factors and inversion signs; no erroneous imported definition was accepted.'}],'interface_changes':[],'consumer_propagation':'No Statement/Definition/public physical interface changes. No indirect-consumer rewrite or automatic proof-only propagation is required. All actual direct uses of these two local suppliers were inspected as focused checks.','consumer_review':consumer_review,'direct_suppliers_fully_read':direct,'additional_index_convention_context_fully_read':context,'source_reading_limits':'Full actual current item bodies and all direct supplier carriers were read locally. Original/imported mathematics was read-only. No external PDF or web source was retrieved by this reviewer; historical author/root source-reading claims are identified as history, not adopted as this reviewer\'s reading. Original creation and old recertification remain immutable. No claim of a complete transitive prerequisite audit, native review, certification, gate or acceptance.','contract_proposals':contracts,'inputs':inputs})
for i in [surface,transport]:
    assert (BASE/'items'/f'{i}.md').read_text()==before[i]
dump('artifact-hashes.json',{str(p.relative_to(BASE)):sha(p.read_bytes()) for p in sorted(OUT.iterdir()) if p.is_file() and p.name!='artifact-hashes.json'})
print(json.dumps({'artifacts':len(list(OUT.iterdir())),'direct_consumers':{i:len(v) for i,v in consumers.items()},'live_sources_unchanged':True,'proposal_sha256':sha((OUT/'proposal.json').read_bytes())},indent=2))
