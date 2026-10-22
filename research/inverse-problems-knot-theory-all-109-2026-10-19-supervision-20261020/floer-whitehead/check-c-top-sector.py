"""Exact finite C-region operation. No satellite admission or disk count is inferred."""
from pathlib import Path
from fractions import Fraction as F
from collections import defaultdict
import json, runpy
ROOT=Path(__file__).resolve().parents[3]
OLD=ROOT/'research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-whitehead-computation'
a=runpy.run_path(str(OLD/'eftekhary-unified-ribbon-development.py'))
C=a['C']; signs={v:-s for v,s in (a['signs']|{'Q':-1,'n':1}).items()}
genus,faces=a['ribbon'](C,signs)
assert (genus,len(faces))==(5,10)
face_of={dart:i for i,face in enumerate(faces) for dart in face}
inc=defaultdict(list)
for curve,vs in C.items():
 for v in vs: inc[v].append(curve)
verts=[v for v in inc if v!='Q'];rows=[]
for v in verts:
 aa,bb=inc[v];row=[0]*10
 for j,d in enumerate([(v,aa,1),(v,bb,signs[v]),(v,aa,-1),(v,bb,-signs[v])]):row[face_of[d]]+=(-1)**j
 rows.append(row)
W=face_of['h','N',-1];Z=face_of['g','N',1]
assert (W,Z)==(7,2)
M=rows+[[int(j==W) for j in range(10)]]
def solve(mat,rhs,n):
 aug=[[F(t) for t in r]+[F(b)] for r,b in zip(mat,rhs)];piv=[];i=0
 for j in range(n):
  k=next((k for k in range(i,len(aug)) if aug[k][j]),None)
  if k is None:continue
  aug[i],aug[k]=aug[k],aug[i];t=aug[i][j];aug[i]=[z/t for z in aug[i]]
  for k in range(len(aug)):
   if k!=i:
    t=aug[k][j];aug[k]=[z-t*w for z,w in zip(aug[k],aug[i])]
  piv.append(j);i+=1
 if any(not any(r[:n]) and r[-1] for r in aug):return None,piv,[]
 x=[F(0)]*n
 for i,j in enumerate(piv):x[j]=aug[i][-1]
 kernel=[]
 for j in set(range(n))-set(piv):
  v=[F(0)]*n;v[j]=1
  for i,k in enumerate(piv):v[k]=-aug[i][j]
  kernel.append(v)
 return x,piv,kernel
_,piv,kernel=solve(M,[0]*len(M),10)
P=[-1,0,0,-1,0,-1,1,0,1,0]
assert len(piv)==9 and len(kernel)==1 and kernel[0]==list(map(F,P))
# A direct dual identity certifies -D[Z] as a linear function of corner changes.
dual,_,_=solve(list(map(list,zip(*M))),[-int(j==Z) for j in range(10)],len(M))
assert dual is not None
assert all(sum(dual[i]*M[i][j] for i in range(len(M)))==-int(j==Z) for j in range(10))
states=[]
def rec(i,used,selected):
 if i==5:states.append(set(selected));return
 for v in C[['L','A1','A2','A3','A4'][i]]:
  if v=='Q':continue
  b=next(k for k in ['N','B1','B2','B3','B4'] if v in C[k])
  if b not in used:rec(i+1,used|{b},selected+[v])
rec(0,set(),[])
anchor=set('ncgqe');tables=[]
for state in states:
 rhs=[int(v in state)-int(v in anchor) for v in verts]+[0]
 D,_,_=solve(M,rhs,10)
 assert D is not None and all(z.denominator==1 for z in D)
 value=-D[Z]
 assert value==sum(x*y for x,y in zip(dual,rhs))
 tables.append({'matching':sorted(state),'A_relative_to_anchor':int(value),'particular_domain':list(map(int,D))})
assert len(tables)==16
meridian=[]
for st in [set('ndhpf'),set('ncgrf'),set('ncgqe')]:
 rhs=[int(v in st)-int(v in anchor) for v in verts]+[0]
 D,_,_=solve(M,rhs,10)
 assert D is not None
 meridian.append({'matching':sorted(st),'A_relative_to_anchor':int(-D[Z])})
assert [r['A_relative_to_anchor'] for r in meridian]==[-1,-1,0]
assert [x['matching'] for x in tables if x['A_relative_to_anchor']==1]==[["a'",'c','g','m','q']]
assert max(x['A_relative_to_anchor'] for x in tables)==1
assert P[W]==P[Z]==0 and min(P)<0<max(P)
# Explicit integral dual coefficients, with no floating-point rank inference.
assert all(x.denominator==1 for x in dual)
out={'scope':'Exact corner equations and formal domain isolation only; no companion admission, analytic count, or absolute parity',
 'face_convention':'clockwise/right faces; corner equation = target-source',
 'W':W,'Z':Z,'vertices':verts,'corner_matrix':rows,'normalization_rank':len(piv),
 'primitive_kernel':P,'dual_A_coefficients':list(map(int,dual)),
 'anchor':sorted(anchor),'meridian_matchings':meridian,'longitude_matchings':tables,
 'fixed_top_positive_C_domain':'D=kP and D>=0 imply k=0'}
Path(__file__).with_name('c-top-sector.json').write_text(json.dumps(out,indent=2)+'\n')
print('PASS: exact rank9, primitive mixed-sign kernel, integral Alexander dual identity, all16 states, unique top a-prime,c,g,m,q; no positive fixed-top C domain')
