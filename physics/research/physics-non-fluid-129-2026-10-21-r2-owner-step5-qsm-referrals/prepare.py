from pathlib import Path
import json, hashlib, difflib, re, shutil, datetime
import yaml
ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
RUN='physics-non-fluid-129-2026-10-21-r2'
OWNER='/root/step5_qsm_referrals'
def sha(b): return hashlib.sha256(b).hexdigest()
def write_json(p,o): p.write_text(json.dumps(o,indent=2,ensure_ascii=False)+'\n')
def fm(text):
    m=re.match(r'^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)',text)
    if not m: raise ValueError('no complete frontmatter')
    return yaml.safe_load(m.group(1))
read_ids=['alg-qsmx-schmidt-mps-truncation','thm-qsmx-schmidt-mps-error','def-qsmx-mps-and-transfer','thm-qc-schmidt-decomposition','thm-singular-value-decomposition','def-qsmx-information-conventions','cor-mean-value-theorem','thm-logarithm-derivative-and-integral','thm-natural-logarithm-laws','def-qsmx-spin-weight-and-hall-realization','def-axiom-of-choice','def-euler-twisted-hall-algebra','def-untwisted-hall-algebra','def-extended-hall-algebra-and-composition-subalgebra','thm-ringel-map-embedding-and-finite-dynkin-criterion','lem-hall-sequence-count-equals-aut-weighted-subobject-count','thm-qsmx-exchange-lie-weight-blocks','thm-qsmx-klr-character-specialization','cex-qsmx-categorification-not-spectrum']
page_ids=['qsmx-matrix-product-states','qsmx-matrix-product-states-examples','qsmx-hall-categorification-spin','qsmx-hall-categorification-spin-examples']
paths=[Path('items')/(i+'.md') for i in read_ids]
paths += [Path('library/quantum-statistical-mechanics')/(i+'.md') for i in page_ids]
paths += [Path('research')/(RUN+'-step5-v2')/('step5-v2-initial-r1-u'+u+'.json') for u in ['103','108']]
paths += [Path('research')/(RUN+'-owner-step5-initial-referral-watchlist.json')]
archive={}
for rel in paths:
    b=(ROOT/rel).read_bytes(); dest=OUT/'preimages'/rel
    dest.parent.mkdir(parents=True,exist_ok=True)
    if dest.exists(): assert dest.read_bytes()==b, 'archived input changed: '+str(rel)
    else: dest.write_bytes(b)
    archive[str(rel)]={'path':str(dest.relative_to(ROOT)),'raw_sha256':sha(b),'bytes':len(b)}
write_json(OUT/'preimages.json',{'version':1,'run':RUN,'scientific_owner':OWNER,'captured_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':archive})
# Scan current identity/aliases/declared relationships and exact identifier mentions.
items={}; aliases={}; errors=[]
for p in sorted((ROOT/'items').glob('*.md')):
    try:
        t=p.read_text(); m=fm(t); ident=m['id']; items[ident]={'path':str(p.relative_to(ROOT)),'meta':m,'text':t}
        for a in m.get('aliases') or []: aliases[a]=ident
    except Exception as e: errors.append({'path':str(p.relative_to(ROOT)),'error':str(e)})
def resolve(i): return aliases.get(i,i)
def downstream(seed):
    found={seed}; edges=[]
    while True:
        added=False
        for i,d in items.items():
            for dep in d['meta'].get('deps') or []:
                supplier=resolve(dep)
                if supplier in found and i not in found:
                    found.add(i); added=True
        if not added: break
    for i in found-{seed}:
        for dep in items[i]['meta'].get('deps') or []:
            if resolve(dep) in found: edges.append({'consumer':i,'supplier':resolve(dep),'declared':dep})
    names=found|{a for a,t in aliases.items() if t in found}
    mentions=[]
    for p in sorted((ROOT/'library').rglob('*.md')):
        t=p.read_text()
        matched=sorted(n for n in names if re.search(r'(?<![a-z0-9-])'+re.escape(n)+r'(?![a-z0-9-])',t))
        if matched: mentions.append({'path':str(p.relative_to(ROOT)),'matched':matched,'raw_sha256':sha(t.encode())})
    item_mentions=[]
    for i,d in items.items():
        matched=sorted(n for n in names if re.search(r'(?<![a-z0-9-])'+re.escape(n)+r'(?![a-z0-9-])',d['text']))
        if matched and i not in found: item_mentions.append({'id':i,'matched':matched,'path':d['path']})
    return {'seed':seed,'direct_consumers':sorted(i for i,d in items.items() if seed in {resolve(x) for x in d['meta'].get('deps') or []}),'all_item_consumers':sorted(found-{seed}),'edges':sorted(edges,key=lambda x:(x['consumer'],x['supplier'])),'other_item_mentions':item_mentions,'page_mentions':mentions,'seed_aliases':[a for a,t in aliases.items() if t==seed]}
scan={'version':1,'scientific_owner':OWNER,'scope':'Current physics/items and physics/library identity/alias/declared deps and exact identifier mentions; this is an inventory scan, not a whole-corpus scientific review. Page requires follow-up was separately searched for both home-page IDs.','item_count':len(items),'parse_errors':errors,'graphs':[downstream(s) for s in ['alg-qsmx-schmidt-mps-truncation','thm-qsmx-schmidt-mps-error','def-qsmx-spin-weight-and-hall-realization']]}
write_json(OUT/'consumer-scan.json',scan)
# Freeze import-entry guards only for actually read items; do not modify originals.
imports=json.loads((ROOT/'research/math-imports.json').read_text()); entries={e['path']:e for e in imports['files']}
pins=[]
for rel in paths:
    if str(rel) in entries:
        entry=entries[str(rel)]; b=(ROOT/rel).read_bytes(); orig=Path(imports['source_root'])/rel
        pins.append({'path':str(rel),'pin':entry['sha256'],'snapshot_raw_sha256':sha(b),'matches_pin':sha(b)==entry['sha256'],'original_path':str(orig),'original_raw_sha256':sha(orig.read_bytes()) if orig.exists() else None,'snapshot_matches_original':orig.exists() and orig.read_bytes()==b})
write_json(OUT/'import-pin-checks.json',{'scope':'Only imported carriers actually read for these focused uses; original sources are read-only. No original proof-tree reconstruction.','math_imports_raw_sha256':sha((ROOT/'research/math-imports.json').read_bytes()),'items':pins})
# Construct two strictly unapplied candidates from archived genuine bytes.
for sub in ['candidates','diffs']: (OUT/sub).mkdir(exist_ok=True)
ident='thm-qsmx-schmidt-mps-error'; before=(OUT/'preimages/items'/f'{ident}.md').read_text(); after=before
old=next(x for x in before.split('\n\n') if x.startswith('1.1 '))
new=r'''1.1 Since $\|\psi\|=1$ and every cap $D_k\ge1$, each current remainder has a positive singular value and the algorithm retains at least one; hence all subsequent remainders are nonzero and all retained bond dimensions are positive. The loop makes one SVD for each $k=1,\ldots,N-1$, exactly $N-1$ in total. Put $\mathcal H_{\le k}:=H_1\otimes\cdots\otimes H_k$ and $\mathcal R_k:=H_{k+1}\otimes\cdots\otimes H_N$, with $\mathcal H_{\le0}=\mathbb C$. Let $U_k:S_k\to S_{k-1}\otimes H_k$ have the retained left singular columns, so $U_k^*U_k=I_{S_k}$ and $\psi^{(k)}=(U_k^*\otimes I_{\mathcal R_k})\psi^{(k-1)}$. Define $W_0=I_{\mathbb C}$ and $W_k=(W_{k-1}\otimes I_{H_k})U_k:S_k\to\mathcal H_{\le k}$. Each $W_k$ is an isometry by induction. Under the canonical $\mathbb C\otimes\mathcal H\cong\mathcal H$ identification, set $x_0=\psi$, $P_0=I$, and, for $k\ge1$, $x_k=(W_k\otimes I_{\mathcal R_k})\psi^{(k)}$ and $P_k=(W_kW_k^*)\otimes I_{\mathcal R_k}$ on the full chain. The range of $W_k$ lies in $\operatorname{ran}W_{k-1}\otimes H_k$, so $\operatorname{ran}P_k\subseteq\operatorname{ran}P_{k-1}$ and $P_kP_{k-1}=P_{k-1}P_k=P_k$. The remainder recurrence gives $x_k=P_kx_{k-1}=P_k\psi$ inductively. Expanding $W_{N-1}$ in the stored site tensors shows that $x_{N-1}$ is exactly their contraction with the final remainder, hence is the returned unnormalized $\phi$ in algorithm instruction 3. For $N=1$, $x_0=\phi=\psi$. [given, F1, F2, F3, construct, algebra]'''
assert after.count(old)==1; after=after.replace(old,new)
old=next(x for x in before.split('\n\n') if x.startswith('2.1 '))
new=r'''2.1 Put $\varepsilon_k:=x_{k-1}-x_k=(P_{k-1}-P_k)\psi$ in the full chain. This vector lies in $\operatorname{ran}P_{k-1}$ and is orthogonal to $\operatorname{ran}P_k$. For $j>k$, nesting gives $\varepsilon_j\in\operatorname{ran}P_{j-1}\subseteq\operatorname{ran}P_k$, so $\langle\varepsilon_k,\varepsilon_j\rangle=0$. Thus the embedded discarded components from different cuts are pairwise orthogonal. [step 1.1, algebra]'''
assert after.count(old)==1; after=after.replace(old,new)
old=next(x for x in before.split('\n\n') if x.startswith('3.1 '))
new=r'''3.1 At cut $k$, $\varepsilon_k=(W_{k-1}\otimes I_{H_k\otimes \mathcal R_k})(\psi^{(k-1)}-(U_k\otimes I_{\mathcal R_k})\psi^{(k)})$. The map outside the parentheses is an isometry by step 1.1, and the vector in parentheses is the discarded Schmidt part of the current compressed remainder. Hence [F3] and [F1] give $\|\varepsilon_k\|^2=\delta_k$. Since $x_0=\psi$ and $x_{N-1}=\phi$, telescoping gives $\psi-\phi=\sum_{k=1}^{N-1}\varepsilon_k$; orthogonality from step 2.1 yields $\|\psi-\phi\|^2=\sum_k\|\varepsilon_k\|^2=\sum_k\delta_k$. For $N=1$ both sides are zero, so the equality also covers the empty sweep. [given, F1, F3, step 1.1, step 2.1, algebra]'''
assert after.count(old)==1; after=after.replace(old,new)
(OUT/'candidates'/f'{ident}.md').write_text(after)
(OUT/'diffs'/f'{ident}.patch').write_text(''.join(difflib.unified_diff(before.splitlines(keepends=True),after.splitlines(keepends=True),fromfile='a/items/'+ident+'.md',tofile='b/items/'+ident+'.md')))
ident='def-qsmx-spin-weight-and-hall-realization'; before=(OUT/'preimages/items'/f'{ident}.md').read_text()
old=r'''where $g^L_{M,N}$ counts subspaces $N'\subseteq L$ with $N'\cong N$ and
$L/N'\cong M$, or equivalently short exact sequences
$0\to N\to L\to M\to0$. Thus the twist is part of the multiplication.'''
new=r'''where $g^L_{M,N}$ counts subspaces $N'\subseteq L$ with $N'\cong N$ and
$L/N'\cong M$, or equivalently short exact sequences
$0\to N\xrightarrow{i}L\xrightarrow{p}M\to0$ modulo changes of the
endpoint labels: $(i,p)\sim(i\circ a,b\circ p)$ for
$a\in\operatorname{Aut}(N)$ and $b\in\operatorname{Aut}(M)$, with $L$
fixed pointwise. Each orbit is determined by $\operatorname{im}i=N'$;
without this quotient, each such subspace contributes
$|\operatorname{Aut}(N)|\,|\operatorname{Aut}(M)|$ labelled sequences.
Thus the twist is part of the multiplication.'''
assert before.count(old)==1; after=before.replace(old,new)
(OUT/'candidates'/f'{ident}.md').write_text(after)
(OUT/'diffs'/f'{ident}.patch').write_text(''.join(difflib.unified_diff(before.splitlines(keepends=True),after.splitlines(keepends=True),fromfile='a/items/'+ident+'.md',tofile='b/items/'+ident+'.md')))
print(json.dumps({'archive_files':len(archive),'items_scanned':len(items),'parse_errors':len(errors),'graphs':[{k:g[k] for k in ['seed','direct_consumers','all_item_consumers','other_item_mentions']} for g in scan['graphs']],'pins_checked':len(pins),'pins_match':all(x['matches_pin'] for x in pins)}))
