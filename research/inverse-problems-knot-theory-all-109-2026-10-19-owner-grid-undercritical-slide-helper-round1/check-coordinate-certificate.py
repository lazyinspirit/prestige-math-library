from fractions import Fraction as F
import itertools,json,pathlib
run='inverse-problems-knot-theory-all-109-2026-10-19';base=pathlib.Path('research')/(run+'-owner-grid-undercritical-slide-helper-round1');base.mkdir(exist_ok=True);cases=[]
for a,b,sx,sy in itertools.product('OX','OX',[1,-1],[1,-1]):
 bar=lambda t:'X' if t=='O' else 'O';cols={'L':F(0),'B':F(1),'M':F(2),'R':F(3)};rows={'H':F(2),'K':F(3),'D':F(-2),'T':F(5),'lL':F(-1),'lR':F(0)};marks={('L','H'):a,('M','H'):bar(a),('M','K'):a,('R','K'):bar(a),('L','lL'):bar(a),('R','lR'):a,('B','D'):b,('B','T'):bar(b)};checks=[]
 def verify(active):
  for c in cols:assert sorted(t for (cc,r),t in marks.items() if cc==c)==['O','X']
  for r in active:assert sorted(t for (c,rr),t in marks.items() if rr==r)==['O','X']
 def commute(x,y,axis):
  levels=cols if axis=='column' else rows;sign=sx if axis=='column' else sy;order=sorted(levels,key=lambda k:sign*levels[k]);assert abs(order.index(x)-order.index(y))==1
  if axis=='column':p=sorted(rows[r] for (c,r) in marks if c==x);q=sorted(rows[r] for (c,r) in marks if c==y)
  else:p=sorted(cols[c] for (c,r) in marks if r==x);q=sorted(cols[c] for (c,r) in marks if r==y)
  assert len(p)==len(q)==2;valid=p[1]<q[0] or q[1]<p[0] or p[0]<q[0]<q[1]<p[1] or q[0]<p[0]<p[1]<q[1];assert valid
  levels[x],levels[y]=levels[y],levels[x];checks.append({'operation':'C','axis':axis,'labels':[x,y],'intervals':[[str(v) for v in p],[str(v) for v in q]],'strict_admissibility':True})
 verify(['H','K']);commute('B','M','column');cols['V']=F(1,2);rows['J']=F(5,2);del marks['L','H'];marks['L','J']=a;marks['V','H']=a;marks['V','J']=bar(a);verify(['H','J','K']);checks.append({'operation':'S','chosen_type':a,'unreflected_empty_corner':'SW','reflections':[sx,sy],'block_verified':True});commute('J','K','row');assert ('V','K') not in marks and marks['M','K']==marks['V','H']==a and marks['M','H']==bar(a)
 for key in [('M','K'),('V','H'),('M','H')]:del marks[key]
 assert marks['R','K']==bar(a);del marks['R','K'];marks['R','H']=bar(a);marks['V','H']=a;del cols['M'];del rows['K'];cols['M']=cols.pop('V');rows['K']=rows.pop('J');marks={('M' if c=='V' else c,'K' if r=='J' else r):t for (c,r),t in marks.items()};verify(['H','K']);assert sorted(cols,key=cols.get)==['L','M','B','R'];assert marks['M','H']==a and marks['R','H']==bar(a) and marks['L','K']==a and marks['M','K']==bar(a);checks.append({'operation':'S^-1','chosen_type':a,'unreflected_empty_corner':'NW','reflections':[sx,sy],'block_and_exterior_partner_transport_verified':True});assert marks['L','lL']==bar(a) and marks['R','lR']==a and marks['B','D']==b and marks['B','T']==bar(b)
 cases.append({'a':a,'B_lower_type':b,'x_reflection':sx<0,'y_reflection':sy<0,'moves':checks,'all_partial_grid_marker_counts_valid':True,'exterior_partners_verified':True})
(base/'finite-coordinate-checks.json').write_text(json.dumps({'version':1,'scope':'Exact rational conditional certificate, all strand orientations and coordinate-axis reflections; no arbitrary rectification theorem.','case_count':len(cases),'moves_per_case':4,'status':'pass','cases':cases},indent=2)+'\n');print(str(base));print('PASS16 cases,4 moves each; all marks/strict intervals/exterior partners checked.')
