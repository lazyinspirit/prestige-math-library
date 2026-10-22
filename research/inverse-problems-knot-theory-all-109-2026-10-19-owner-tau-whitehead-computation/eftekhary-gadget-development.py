"""Literal finite incidence check, NOT a geometric/analytic admission theorem.

Candidate incidence transcription from actual published Figures8 and10, with the names of their curves. The full embedded-surface certificate is still pending.
The point named 'n' is distinct from the curve named n.
No longitude Floer invariance, Chern centering or disk counts are imported.
"""
from itertools import product
from pathlib import Path
import json
B=Path(__file__).parent
alpha={'alpha1':['d','e','m','r'],'alpha2':['g','l','p'],
       'alpha3':['f','q'],'alpha4':['c','h','k']}
beta={'n':['g','h'],'beta1':['m','n','k','l'],'beta2':['p','q','r'],
      'beta3':['a',"a'",'e','f'],'beta4':['b',"b'",'c','d']}
beta_of={p:c for c,points in beta.items() for p in points}
def matchings(special):
 curves={'special':special,**alpha}
 return [tuple(points) for points in product(*curves.values())
         if len({beta_of[p] for p in points})==5]
meridian=matchings(['n']);longitude=matchings(['a',"a'",'b',"b'"])
assert {frozenset(s) for s in meridian}=={
 frozenset(['n','d','h','p','f']),frozenset(['n','c','g','r','f']),
 frozenset(['n','g','c','q','e'])}
pairs=[];seen=set()
for s in longitude:
 if {'g','k'}<=set(s):
  t=tuple('l' if p=='g' else 'h' if p=='k' else p for p in s)
  assert t in longitude
  pairs.append([s,t]);seen.update([s,t])
remaining=[s for s in longitude if s not in seen]
assert len(longitude)==16 and len(pairs)==6 and len(remaining)==4
assert {frozenset(s) for s in remaining}=={
 frozenset(['a','q','g','m','c']),frozenset(["a'",'q','g','m','c']),
 frozenset(['b','h','m','p','f']),frozenset(["b'",'h','m','p','f'])}
D={'status':'DEVELOPMENT: finite incidence only; no geometric admission/count/absolute normalization supplied',
   'alpha':alpha,'beta':beta,'meridian_matchings':meridian,
   'longitude_matchings':longitude,'rectangle_pairs':pairs,'remaining':remaining}
(B/'eftekhary-gadget-development.json').write_text(json.dumps(D,indent=2)+'\n')
print('meridian',len(meridian),'longitude',len(longitude),'rectangle pairs',len(pairs),'remaining',remaining)
