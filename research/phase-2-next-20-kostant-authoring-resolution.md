# Batch 10 Kostant authoring resolution

On 2026-09-11, the current batch-10 manifest had one missing corpus artifact:
`thm-kostant-harmonic-decomposition-of-the-symmetric-algebra`. Its three
direct suppliers had since been authored. The earlier Step-3 escalation still
described missing harmonic positivity and Chevalley restriction.

The missing theorem now has a complete proof. The finite-Weyl free basis lifts
through the nonnegative Cartan/root weight filtration by explicit decreasing
weight induction and leading-term independence. This yields an ordinary-graded
free module decomposition before using the harmonic complement. The quotient
by positive invariants identifies each harmonic degree, and ordinary-degree
induction plus equal finite dimensions proves multiplication bijective.
Adjoint stability proves equivariance. Zero algebra, degree zero and finite
choice requirements are explicit.

The official MIT 18.757 notes, Theorem 13.1's first proof paragraph (printed
page 71), were consulted for the filtration route:
https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
The proof does not use the later enveloping-algebra freeness theorem or the
subsequent general filtered-lifting lemma.

Five current owner decisions record local proof review: finite semisimple
PBW/highest-weight construction, character triangularity, harmonic complement,
local Chevalley restriction and the new Kostant theorem. Complete target proofs
and the relevant current supplier proofs/interfaces were read. In particular,
the harmonic proof constructs sign conjugation through the Cartan-disjoint
universal quotient and proves positivity using root strings; it does not infer
a complement from complex bilinear nondegeneracy. The Chevalley proof uses
finite trace moments and a polynomial map with invertible linear term, without
assuming global Cartan conjugacy. These are local reviews, not independent
judge stamps or a certification of the whole transitive dependency closure.

Validation: all five selected items pass phase-format precheck, renderer checks
and strict proof contracts. The new theorem's complete contract was generated
from its facts and numbered steps; five stale boundary locators in the existing
Chevalley contract were corrected. The live Step-3 decision API reports all
54 batch-10 item decisions closed, and every required batch-10 item/page file
exists. Other batches and later mechanical gates remain outside this receipt.
No controller control was issued.
