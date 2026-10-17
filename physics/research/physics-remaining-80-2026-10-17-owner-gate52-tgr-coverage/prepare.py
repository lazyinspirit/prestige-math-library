from pathlib import Path
import json,shutil
p=Path(__file__).parent
for b in (55,63):
 f=Path(f'physics/research/physics-remaining-80-2026-10-17-batch-{b}.coverage.json')
 shutil.copyfile(f,p/f'batch-{b}.before.json')
 d=json.loads(f.read_text())
 for page in d['pages']:
  for source in page['sources']:
   source['kind']={'full lecture notes':'lecture-notes','full article':'paper','full-lecture-notes':'lecture-notes','research-article':'paper'}.get(source.get('kind'),source.get('kind'))
 if b==63:
  item='ex-tgr-electric-circulation-obstruction'
  d['pages'][1]['sources']=[{
   'title':'Nigel Hitchin, Differentiable Manifolds (2014)',
   'url':'https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf',
   'kind':'lecture-notes',
   'locator':'§6.6, printed/PDF p.54, paragraph beginning “We are in no position yet” through the calculation H¹(R/Z)≅R; the preceding Poincaré exercise is outside this harvested range.',
   'contents':[
    {'name':'§6.6: the globally defined nonexact one-form dx on R/Z','disposition':'inline','item':item,'support':'Hitchin checks chart compatibility of dx and proves it cannot be a global function differential. The local example rescales the period from 1 to L, pulls this form to the spacetime product, and computes its contraction with the electric field.'},
    {'name':'§6.6: periodic antiderivative exists exactly when the integral over one period vanishes','disposition':'inline','item':item,'support':'Hitchin solves f′=g on the cover and checks that periodicity requires ∫₀¹g=0. This is the exact topological obstruction used in Verification 1.2 and 2.1; the charged stationarity equation itself comes from the local theorem, not these notes.'},
    {'name':'§6.6: every circle one-form is c dx+df and H¹(R/Z)≅R','disposition':'out-of-scope','reason':'Classification of every circle cohomology class is stronger than this example needs: its chosen constant-period form and endpoint calculation already give the obstruction. No full cohomology classification is asserted locally.'}
   ],
   'source_review':{'reviewer':'physics_gate_coverage_tgr','read_extent':'Newly retrieved complete 94-page PDF; read the circle calculation on PDF p.54, with §6.6 definitions/context pp.50–53. Coverage harvest is restricted to the circle calculation identified above.','limitations':'Mathematical exactness and circle-period treatment only. It supplies neither charged Liouville stationarity nor physical existence of equilibrium.'}
  },{
   'title':'David Tong, General Relativity lecture notes, §2.4.3',
   'url':'https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html',
   'kind':'lecture-notes',
   'locator':'§2.4.3 “A Sniff of de Rham Cohomology”, subheading “An Example”, from “Consider the one-dimensional manifold M=R” through “closed but not exact”, stopping before “Another Example”.',
   'contents':[
    {'name':'§2.4.3 An Example: one-forms f(x)dx on R have an antiderivative','disposition':'inline','item':item,'support':'The cover-space antiderivative distinguishes a local scalar from a scalar descending to the periodic spatial quotient; local existence alone does not discharge the global condition in the example.'},
    {'name':'§2.4.3 An Example: the circle angular one-form is closed but not globally exact','disposition':'inline','item':item,'support':'Tong explains that dθ denotes a global form with no single-valued global angle primitive. The local example gives the explicit form with period L and proves its scalar obstruction by integrating the required differential around the circle.'}
   ],
   'source_review':{'reviewer':'physics_gate_coverage_tgr','read_extent':'Newly retrieved complete chapter-2 HTML and read §2.4.3, including the entire named R/S1 example. Harvest is restricted to that named example.','limitations':'Independent circle-topology treatment, not a source for the local charged model. The broader informal Poincaré and Betti-number statements elsewhere in the section are not consumed.'}
  }]
  d['note']+=' Owner coverage repair adds separately retrieved and read Hitchin/Tong circle-topology treatments for the B example; original authoring assertions above are historical and are not renewed scientific approval.'
 (p/f'batch-{b}.proposed.coverage.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
