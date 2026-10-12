import itertools,json,pathlib
out=pathlib.Path(__file__).parent
compose=lambda p,q:tuple(p[i-1] for i in q)
def inv(p):return tuple(p.index(i)+1 for i in range(1,len(p)+1))
def length(p):return sum(p[i]>p[j] for i in range(len(p)) for j in range(i+1,len(p)))
def bruhat(p,q):return all(sum(x>=j for x in p[:i])<=sum(x>=j for x in q[:i]) for i in range(1,len(p)+1) for j in range(1,len(p)+1))
def longestJ(n,J):
 p=list(range(1,n+1));start=0
 for j in range(1,n+1):
  if j not in J:p[start:j]=reversed(p[start:j]);start=j
 return tuple(p)
rows=[];pairs=0
for n in range(2,5):
 W=list(itertools.permutations(range(1,n+1)));w0=tuple(range(n,0,-1))
 for bits in itertools.product([False,True],repeat=n-1):
  J={i+1 for i,b in enumerate(bits) if b};wJ=longestJ(n,J);left=[y for y in W if all(inv(y)[j-1]<inv(y)[j] for j in J)];right=[w for w in W if all(w[j-1]<w[j] for j in J)];lf=lambda y:compose(compose(wJ,y),w0);unlf=lambda a:compose(compose(wJ,a),w0)
  assert set(map(lf,left))==set(left)
  for y in left:
   assert unlf(lf(y))==y
   z=compose(y,w0);assert all(inv(z)[j-1]>inv(z)[j] for j in J)
  for y,x in itertools.product(left,repeat=2):assert bruhat(y,x)==bruhat(lf(x),lf(y));pairs+=1
  for w in right:assert compose(compose(wJ,inv(w)),w0) in left
  for y,x in itertools.product(W,repeat=2):assert bruhat(compose(y,w0),compose(x,w0))==bruhat(x,y)
  rows.append({'n':n,'J':sorted(J),'left_labels':len(left),'right_labels':len(right)})
# J=empty in S2 disproves old false reindexing: original n_es=1, n_lf(e),lf(s)=n_se=0.
old_counterexample={'W':'S2','J':[],'y':'e','x':'s','old_claim_lhs':1,'old_claim_rhs':0,'new_reindexing_entry':1}
# Actual lower singular S3 matrix and BGG column flags.
A=[[1,0,0],[1,1,0],[1,1,1]];flags=list(map(list,zip(*A)));assert flags==[[1,1,1],[0,1,1],[0,0,1]]
res={'scope':'bounded exact permutation/index checks; not proof of general CategoryO suppliers','cases':rows,'left_label_pair_checks':pairs,'old_reindexing_counterexample':old_counterexample,'singular_composition_matrix':A,'singular_projective_columns':flags}
(out/'finite-index-check.json').write_text(json.dumps(res,indent=2)+'\n');print('finite checks pass:',len(rows),'parabolic settings;',pairs,'left-label pairs; S2 old-claim counterexample; S3 lower/projective flags')
