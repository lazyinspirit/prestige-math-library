from pathlib import Path
import re,json,shutil,hashlib
b=Path('research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch66-cohomology-repair');hunks=[]
files=['thm-qftx-gaga-local-coherent-acyclicity','ex-qftx-gaga-point-quotient-coherent-acyclicity','ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity','lem-qftx-gaga-pseudoconvex-intersection-acyclicity','lem-qftx-gaga-coherent-section-topology-well-defined','thm-qftx-gaga-analytic-compact-projective-coherent-finiteness']
for id in files:
 p=Path('items')/(id+'.md');s=p.read_text();before=s
 def change(label,transform):
  global s
  pat=re.compile(r'^\['+re.escape(label)+r'\] .*?(?=\n\n|\Z)',re.M|re.S);m=pat.search(s);assert m,(id,label);old=m.group();new=transform(old);assert new!=old,(id,label);s=s[:m.start()]+new+s[m.end():];hunks.append({'path':str(p),'fact':label,'before':old,'after':new})
 if id=='thm-qftx-gaga-local-coherent-acyclicity':
  change('F2',lambda _:r'[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: under full AC, the holomorphic structure sheaf on a finite-dimensional complex manifold is coherent; coherent analytic modules are closed under kernels, cokernels and finite extensions. For every coherent module, point and finite integer $\ell\ge0$, there is a chart neighborhood with a partial finite-rank free resolution exact at the module and at every free term except possibly the leftmost. No global free resolution is asserted.')
 elif id in ['ex-qftx-gaga-point-quotient-coherent-acyclicity','ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity']:
  change('F2',lambda _:r'[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: under full AC, $\mathcal O_D$ is coherent, finite-rank free analytic modules are coherent, and cokernels of morphisms of coherent analytic modules are coherent.')
 elif id=='lem-qftx-gaga-pseudoconvex-intersection-acyclicity':
  change('A1',lambda x:x.replace('Planned local Oka interface:','Oka coherence and local partial resolutions:').split(' The manifested batch 63 carrier')[0])
  change('F4',lambda x:x.replace('If $W\\subseteq\\mathbb R^m$ is open','If $m\\ge1$ and $W\\subseteq\\mathbb R^m$ is nonempty and open').split(' The current batch 65 item')[0])
 elif id=='lem-qftx-gaga-coherent-section-topology-well-defined':
  change('A2',lambda x:x.replace('Planned Oka interface:','Oka coherence and local partial resolutions:').split(' Its current ready record')[0])
  change('A3',lambda x:x.replace('Full exact planned local supplier claim:','Local coherent polydisc acyclicity:').split(' The exact planned item ID')[0]+' Only its positive-degree polydisc vanishing clause is used below.')
 else:
  change('A1',lambda x:x.replace('Planned Oka interface:','Oka coherence and local partial resolutions:').split(' Its manifested batch 63 carrier')[0])
  change('A2',lambda x:x.replace('Full exact planned local supplier claim:','Local coherent polydisc acyclicity:').split(' The exact planned ID')[0]+' Only its positive-degree polydisc vanishing clause is used below.')
 q=b/'workflow-facts-preimages'/p;q.parent.mkdir(parents=True,exist_ok=True);assert not q.exists();q.write_text(before)
 public=lambda t:re.search(r'^## (?:Statement|Definition|Example)\n.*?(?=^## |\Z)',t,re.M|re.S).group()
 assert public(before)==public(s),'public body changed during Facts cleanup'
 p.write_text(s)
(b/'workflow-fact-hunks.json').write_text(json.dumps({'version':1,'root_directed_cleanup':True,'native_history_unchanged':True,'mathematical_ranges_and_AC_preserved':True,'public_bodies_unchanged_in_this_cleanup':True,'hunks':hunks},indent=2)+'\n')
print('Removed obsolete workflow prose in',len(hunks),'Facts across',len(files),'sources')
