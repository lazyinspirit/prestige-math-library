---
id: rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four
kind: remark
title: The h-cobordism theorem does not cover boundary dimension four
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 19
deps:
- def-h-cobordism
- thm-smooth-simply-connected-h-cobordism-theorem
- rem-the-smooth-whitney-trick-fails-in-dimension-four
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1 §1.5 Miscellaneous, printed p. 21 (the s-cobordism theorem is false for n = dim M_0 = 4 in general by Donaldson's work; true for good fundamental groups in the topological category by Freedman)
  - title: Daniel Kasprowski, Mark Powell and Arunima Ray, Counterexamples in 4-manifold topology, EMS Surveys in Mathematical Sciences 9 (2022) 193--249
    url: https://eprints.gla.ac.uk/288630/1/288630.pdf
    locator: Example 1.13 and §5.8 (infinitely many smooth orientable simply connected 4-manifolds that are all smoothly s-cobordant and homeomorphic but not diffeomorphic; the first pair is due to Donaldson)
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Remark

The dimension hypothesis $n\ge5$ (equivalently $\dim W\ge6$) in the smooth
h-cobordism theorem ([[thm-smooth-simply-connected-h-cobordism-theorem]]) cannot
be relaxed to $n=4$. Two distinct obstructions are recorded here.

(i) The proof route stops working: the general-position argument that produces a
clean embedded Whitney disk in a middle level of dimension $n$ requires both
sheet dimensions at most $n-3$, or one of them at least $3$ in the borderline
version, and in boundary dimension four the relevant ambient middle level is
four-dimensional, where the smooth Whitney trick genuinely fails
([[rem-the-smooth-whitney-trick-fails-in-dimension-four]]).

(ii) The conclusion itself fails in the smooth category in general: the
s-cobordism theorem, and with it the triviality statement of the h-cobordism
theorem, is known to be false for $n=\dim M_0=4$ in general by Donaldson's work
(Lück §1.5, printed p. 21, citing Donaldson, *Irrationality and the
h-cobordism conjecture*, J. Differential Geom. **26** (1987) 141--168), while in
the topological category the corresponding statement for $n=4$ holds for good
fundamental groups, in particular for the trivial group, by Freedman. For
simply connected 4-manifolds the failure is documented explicitly: there are
smooth orientable simply connected 4-manifolds that are all smoothly
s-cobordant and homeomorphic but pairwise not diffeomorphic, so no h-cobordism
between two of them is a product (Kasprowski--Powell--Ray, EMS Surv. Math. Sci.
**9** (2022) 193--249, Example 1.13 and §5.8, where the first pair is due to
Donaldson). Milnor's Concluding Remarks distinguish total dimension four (boundary
dimension three), where the four-disk conjecture is discussed, from total
dimension five (the boundary-dimension-four case here). The historical
four-disk discussion is not a statement about this boundary-dimension-four
range.

No smooth four-dimensional Poincaré or disk conclusion may be read off the
theorem of this page: the smooth statement is genuinely restricted to boundary
dimension at least five ([[def-h-cobordism]]).
