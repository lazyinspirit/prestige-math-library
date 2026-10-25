# Private finite degree/type consistency check of the actual proposed identity.
from pathlib import Path
import json
out=Path(__file__).resolve().parent
text=(out/'semantic-only-candidate.md').read_text()
assert r'\delta(K^n\varphi)+K^{n+1}(\delta\varphi)' in text
assert r'g^*\varphi-f^*\varphi=\delta(K^n\varphi)' in text
assert r'For \(n=0\), the first summand is zero' in text
assert r'K^{n+1}\varphi' not in text

def C(space,n):return (space,n)
def compose(maps):
 for a,b in zip(maps,maps[1:]):assert a['to']==b['from'],(a,b)
 return {'from':maps[0]['from'],'to':maps[-1]['to']}
rows=[]
for n in range(4):
 phi={'name':'phi','from':C('Y',n),'to':'k'}
 first_path=[{'name':'boundary_X','from':C('X',n),'to':C('X',n-1)},{'name':'P_(n-1)','from':C('X',n-1),'to':C('Y',n)},phi]
 second_path=[{'name':'P_n','from':C('X',n),'to':C('Y',n+1)},{'name':'boundary_Y','from':C('Y',n+1),'to':C('Y',n)},phi]
 a=compose(first_path);b=compose(second_path);assert a==b=={'from':C('X',n),'to':'k'}
 old_first_typed=C('Y',n)==C('Y',n+1);old_second_typed=C('Y',n+1)==C('Y',n);assert not old_first_typed and not old_second_typed
 rows.append({'n':n,'delta_X_Kn_phi_path':first_path,'K_nplus1_delta_Y_phi_path':second_path,'same_degree_n_output':True,'first_term_zero_from_Cminus1':n==0,'old_K_indices_type_correct':False})
(out/'typing-check.json').write_text(json.dumps({'kind':'PRIVATE grading consistency and source-token checks; mathematical derivation separately written','degrees_checked':[0,1,2,3],'rows':rows,'check_scope':'Type/composition check only, not generic numerical proof certification','production_written':False},indent=2)+'\n')
print('Typed paths valid in degrees0–3; both old K applications ill-typed; exact proposed tokens and zero-degree prose verified.')
