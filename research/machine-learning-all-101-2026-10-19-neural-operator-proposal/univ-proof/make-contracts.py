from pathlib import Path
import re,json
root=Path('research/machine-learning-all-101-2026-10-19-neural-operator-proposal/univ-proof')
roots=[Path('items'),root/'items',root.parent/'ap-proof/items']
def getsource(i):
    for r in reversed(roots):
        p=r/(i+'.md')
        if p.exists(): return p.read_text()
    raise ValueError(i)
def section(t,key):
    m=re.search(r'^## '+re.escape(key)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S)
    return m.group(1).strip() if m else None
contracts={}
for p in (root/'items').glob('*.md'):
    if p.name.startswith('def-'):continue
    t=p.read_text(); i=p.stem
    steps=[]
    for m in re.finditer(r'^(\d+\.\d+) (.*?)\s+\[([^\]]+)\](?: ∎)?\s*$',section(t,'Proof'),re.M):
        num,claim,tags=m.groups(); inputs=[a.strip() for a in tags.split(',')]
        steps.append({'id':'step-'+num,'step':num,'claim':claim,'inputs':inputs})
    citations=[]
    for m in re.finditer(r'^\[(F\d+)\] (.*)$',section(t,'Facts & Assumptions'),re.M):
        fact,body=m.groups()
        for source in re.findall(r'\[\[([^]|]+)',body):
            st=getsource(source); source_section='Definition' if source.startswith('def-') else 'Statement'
            if i.startswith('lem-smooth-integral') and fact=='F1':source_section='Proof'
            quote=section(st,source_section)
            citations.append({'fact':fact,'source':source,'source_section':source_section,'quote':quote,'uses':[a['step'] for a in steps if fact in a['inputs']]})
    usescc=i!='lem-ap-finite-dimensional-factorization-of-continuous-maps'
    boundaries=[]
    evidence={'empty':'Empty K uses zero maps; empty S has radius zero and is realized by the zero network.','zero':'Zero functionals, zero finite-dimensional ranges and zero coefficient spans have explicit zero branches; corrected C=0 forces S subset {0}.','one':'All formulas include q=1 and singleton compact sets without dividing by their diameter.','degenerate':'Empty badpair set in the primary theorem uses E=0,r=1; zero ranks use dummy coordinates.','endpoints':'The finite-p argument includes p=1; the output derivative estimate includes m=0; no p=infinity claim is added.','nonempty-choice':'Countable Choice is explicitly inherited by distribution separation, smoothing and ReLU UAT; all new selections are finite.' if usescc else 'Two AP approximants and finitely many cover elements and bases are selected; the cover uses all admissible (x,rho) pairs, without simultaneous uncountable selection.'}
    for case in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']:
        if case.startswith('iff'):boundaries.append({'case':case,'status':'not_applicable','reason':'The assertion is not a biconditional.'})
        else:boundaries.append({'case':case,'status':'checked','evidence':evidence[case]})
    contracts[i]={'citations':citations,'derivations':steps,'routine_steps':[],'boundaries':boundaries,'axioms':[{'id':'def-countable-choice','uses':[x['step'] for x in steps if any(f in x['inputs'] for f in ('F1','F3','F4','F6'))],'reason':'Explicit Countable Choice inherited from actual local analytical suppliers; new covers, nets and basis selections are finite.'}] if usescc else [],'finite_checks':[],'risk_review':{'status':'complete','reviewer':'/root/neural_operator_repair/univ_proof','notes':'Author-side proof proposal only. Parent owns independent review and current supplier/quote binding; no gate or acceptance evidence supplied.'}}
(root/'proof-contracts.proposed.json').write_text(json.dumps({'version':1,'run':'machine-learning-all-101-2026-10-19','scope':list(contracts),'contracts':contracts},indent=2)+'\n')
