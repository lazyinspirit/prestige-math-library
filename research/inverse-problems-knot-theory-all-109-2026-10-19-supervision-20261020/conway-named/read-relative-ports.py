"""Read all twelve fixed collars and six actual proper-arc words at the new prefix.
No tangle-isotopy assertion is inferred from the matching endpoint pairings.
"""
import pathlib
ROOT=pathlib.Path(__file__).resolve().parent
exec(open(ROOT/'inputs/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
p=json.load(open(ROOT/'head-three-returns-prefix.json'));portdata=json.load(open(ROOT/'inputs/prime-MN-exact-port-reduction.json'))
M=init(json.load(open(ROOT/'inputs/M-pd.json'))['PD'],['G']);N=init(json.load(open(ROOT/'inputs/N-pd.json'))['PD'],['G'])
L=loadgraph(p['final'])
for c,lab in zip(L.crossings,p['labels']):c.label=lab
fixed={int(c)for c in portdata['common_crossing_map_M_to_N']};cs={c.label:c for c in L.crossings}
# Solve the actual even crossing rotations of the fixed connected exterior.
rot={}
for root_rotation in [0,2]:
 trial={min(fixed):root_rotation};todo=[min(fixed)];ok=True
 for c in todo:
  for k,(d,j)in enumerate(M.crossings[c].adjacent):
   if d.label not in fixed:continue
   e,l=cs[c].adjacent[(k+trial[c])%4]
   if e.label!=d.label:ok=False;break
   rd=(l-j)%4
   if rd not in [0,2]or(d.label in trial and trial[d.label]!=rd):ok=False;break
   if d.label not in trial:trial[d.label]=rd;todo.append(d.label)
  if not ok:break
 if ok and set(trial)==fixed:rot=trial;break
assert set(rot)==fixed
checked=0
for c in fixed:
 for k,(d,j)in enumerate(M.crossings[c].adjacent):
  if d.label in fixed:
   assert cs[c].adjacent[(k+rot[c])%4]==(cs[d.label],(j+rot[d.label])%4);checked+=1
assert checked==92

def read_arcs(link,outer):
 C={c.label:c for c in link.crossings};fixed={c for c,k in outer};port={}
 for i,(c,k)in enumerate(outer):
  d,j=C[c].adjacent[k];assert d.label not in fixed
  port[(d.label,j)]=i
 assert len(port)==12
 arcs=[]
 for i in range(6):
  c,k=next(p for p,j in port.items()if j==i);word=[];seen=set()
  while True:
   assert(c,k)not in seen;seen.add((c,k));word.append([c,k,'under'if k%2==0 else'over'])
   exit=(c,(k+2)%4)
   if exit in port:break
   d,j=C[c].adjacent[(k+2)%4];assert d.label not in fixed;c,k=d.label,j
  assert port[exit]==11-i
  arcs.append({'start':i,'end':port[exit],'crossing_visits':word})
 return arcs
outer=[(c,(k+rot[c])%4)for r in portdata['fixed_boundary_port_matches']for c,k in[r['M_fixed_outside_port']]]
nouter=[tuple(r['N_fixed_outside_port'])for r in portdata['fixed_boundary_port_matches']]
out={'scope':'Actual finite prefix readout only. Literal target has not been reached.','prefix_moves':len(p['movie']),'prefix_crossings':len(L.crossings),'target_crossings':len(N.crossings),'fixed_exterior_crossings':26,'fixed_exterior_internal_halfedges':checked,'fixed_crossing_rotations':rot,'prefix_arcs':read_arcs(L,outer),'target_arcs':read_arcs(N,nouter),'literal_target_ribbon_graph_equal':canon(L)==canon(N)}
assert not out['literal_target_ribbon_graph_equal']
json.dump(out,open(ROOT/'literal-twelve-port-readout.json','w'),indent=2)
print('PASS',len(outer),'fixed port collars;',checked,'exterior halfedges; six endpoint pairings each prefix/target; prefix',len(L.crossings),'target',len(N.crossings),'distinct')
