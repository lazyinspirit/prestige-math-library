import itertools, json, re
from pathlib import Path
perms=list(itertools.permutations(range(1,4)))
def wordperm(word):
    p=(1,2,3)
    for i in reversed(word):
        p=tuple(i+1 if x==i else i if x==i+1 else x for x in p)
    return p
def inv(p): return sum(p[i]>p[j] for i in range(3) for j in range(i+1,3))
def label(p): return ''.join(map(str,p))
words={p:next(w for w in itertools.product((1,2),repeat=inv(p)) if wordperm(w)==p) for p in perms}
order=set()
for p,w in words.items():
    for mask in itertools.product((0,1),repeat=len(w)):
        sub=tuple(i for i,m in zip(w,mask) if m)
        q=wordperm(sub)
        if len(sub)==inv(q): order.add((q,p))
covers=sorted((label(a),label(b)) for a,b in order if inv(b)-inv(a)==1)
expected=[('123','132'),('123','213'),('132','231'),('132','312'),('213','231'),('213','312'),('231','321'),('312','321')]
assert covers==expected
item=Path('items/ex-kazhdan-lusztig-bases-for-s-two-and-s-three.md').read_text()
nodes=dict(re.findall(r'\\node \((\w+)\).*?\{\$(\d{3})\$\}',item))
edges=re.findall(r'\\draw\[->\] \((\w+)\) -- \((\w+)\)',item)
assert sorted((nodes[a],nodes[b]) for a,b in edges)==expected
# For the p_{y,w}=v^(length gap) established in step 1.3,
# extracting [v] is one precisely when that gap is one.
mu_one=sorted((label(a),label(b)) for a,b in order if a!=b and inv(b)-inv(a)==1)
assert mu_one==expected
print(json.dumps({'ranks':{str(k):[label(p) for p in perms if inv(p)==k] for k in range(4)},'reduced_words':{label(p):list(w) for p,w in words.items()},'covers':covers,'edge_count':len(edges),'mu_one_support_from_step_1_3':mu_one,'checks':'PASS: independent reduced-subword enumeration, inversion ranks, exact TikZ edges, coefficient extraction'},indent=2))
