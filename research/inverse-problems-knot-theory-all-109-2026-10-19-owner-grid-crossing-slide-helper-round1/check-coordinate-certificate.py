from fractions import Fraction as F
import json,itertools,pathlib
run='inverse-problems-knot-theory-all-109-2026-10-19';base=pathlib.Path('research')/(run+'-owner-grid-crossing-slide-helper-round1');cases=[]
for a,b,sx,sy in itertools.product('OX','OX',[1,-1],[1,-1]):
 other=lambda t:'X' if t=='O' else 'O';cols={'P':F(0),'L':F(1),'Q':F(2),'R':F(3)};rows={'H':F(2),'K':F(3),'T':F(5),'lL':F(-3),'lQ':F(-2),'lR':F(-1)};marks={('P','H'):b,('Q','H'):other(b),('L','K'):a,('R','K'):other(a),('P','T'):other(b),('L','lL'):other(a),('Q','lQ'):b,('R','lR'):a};checks=[]
 def order(d,sign):return sorted(d,key=lambda k:sign*d[k])
 def pair(col=None,row=None):return sorted(rows[r] if col else cols[c] for (c,r) in marks if (c==col if col else r==row))
 def commute(k1,k2,axis):
  levels=cols if axis=='column' else rows;sign=sx if axis=='column' else sy;o=order(levels,sign);assert abs(o.index(k1)-o.index(k2))==1
  v1=pair(col=k1) if axis=='column' else pair(row=k1);v2=pair(col=k2) if axis=='column' else pair(row=k2);assert len(v1)==len(v2)==2
  valid=v1[1]<v2[0] or v2[1]<v1[0] or v1[0]<v2[0]<v2[1]<v1[1] or v2[0]<v1[0]<v1[1]<v2[1];assert valid
  checks.append({'operation':'C','axis':axis,'labels':[k1,k2],'intervals':[[str(x) for x in v1],[str(x) for x in v2]],'strict_admissibility':True});levels[k1],levels[k2]=levels[k2],levels[k1]
 def validmarkers(active_rows):
  for c in cols:assert sorted(t for (cc,r),t in marks.items() if cc==c)==['O','X']
  for r in active_rows:assert sorted(t for (c,rr),t in marks.items() if rr==r)==['O','X']
 validmarkers(['H','K']);cols['U']=F(5,2);rows['J']=F(3,2);del marks['Q','H'];marks['U','H']=other(b);marks['U','J']=b;marks['Q','J']=other(b);validmarkers(['H','J','K']);checks.append({'operation':'S','chosen_type':other(b),'original_empty_corner':'NW','reflections':[sx,sy],'three_mark_pattern_verified':True})
 commute('U','R','column');commute('H','K','row')
 for col in ['L','Q','R']:commute('P',col,'column')
 commute('H','K','row');validmarkers(['H','J','K']);assert ('P','J') not in marks;assert marks['P','H']==marks['U','J']==b and marks['U','H']==other(b)
 for k in [('P','H'),('U','H'),('U','J')]:del marks[k]
 del rows['H'];del cols['U'];marks['P','J']=b;validmarkers(['J','K']);checks.append({'operation':'S^-1','contracted_type':b,'original_empty_corner':'SW','reflections':[sx,sy],'three_mark_pattern_verified':True});assert sorted(cols,key=cols.get)==['L','Q','R','P'];assert marks['L','K']==a and marks['R','K']==other(a) and marks['P','J']==b and marks['Q','J']==other(b)
 cases.append({'a':a,'b':b,'x_reflection':sx==-1,'y_reflection':sy==-1,'elementary_moves':checks,'all_local_rows_and_columns_valid':True})
r={'version':1,'scope':'Exact rational-coordinate certificate and all local O/X orientation/reflection assignments; no global bridge rectification claim.','cases':cases,'case_count':len(cases),'elementary_moves_per_case':len(cases[0]['elementary_moves']),'status':'pass'};(base/'finite-coordinate-checks.json').write_text(json.dumps(r,indent=2)+'\n');print('Finite certificate:',len(cases),'orientation/reflection cases;',len(cases[0]['elementary_moves']),'elementary moves each; all interval/marking checks pass.')
