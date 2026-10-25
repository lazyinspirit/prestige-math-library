---
id: cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem
kind: counterexample
title: "A four-dimensional boundary case is outside the smooth h-cobordism theorem"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 20
deps: [thm-smooth-simply-connected-h-cobordism-theorem, rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four, rem-the-smooth-whitney-trick-fails-in-dimension-four, def-h-cobordism, def-simply-connected]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.5 Miscellaneous, printed p. 21"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114"
    - title: "Daniel Kasprowski, Mark Powell and Arunima Ray, Counterexamples in 4-manifold topology, EMS Surveys in Mathematical Sciences 9 (2022) 193--249"
      url: "https://eprints.gla.ac.uk/288630/1/288630.pdf"
      locator: "Example 1.13 and §5.8 (smoothly s-cobordant, homeomorphic, non-diffeomorphic simply connected 4-manifolds, first pair due to Donaldson)"
verification:
  precheck: pass
---

## Statement refuted

**False claim:** every compact smooth h-cobordism over a closed simply connected
manifold of dimension four is diffeomorphic to the product. More precisely: the
dimension hypothesis $n\ge5$ of the smooth h-cobordism theorem
([[thm-smooth-simply-connected-h-cobordism-theorem]]) can be weakened to $n=4$,
so that every h-cobordism of boundary dimension four over a closed simply
connected 4-manifold is trivial.

## Facts & Assumptions

**Given:** The dimension count for a clean embedded Whitney disk in a middle level of dimension $m$: the sheets must satisfy $a,b\le m-3$, or one of them has dimension at least $3$ in the borderline version; and the literature record for boundary dimension four.

[F1] In boundary dimension four the relevant middle level is four-dimensional and the general-position count fails: for complementary sheets with $a=b=2$ one has $2+a-m=0$, and the smooth Whitney trick has no general embedded-disk replacement; the failure is the content of the dimension-four Whitney-trick remark together with its companion counterexample ([[rem-the-smooth-whitney-trick-fails-in-dimension-four]]).

[F2] The conclusion fails in the smooth category: there are smooth orientable simply connected 4-manifolds that are all smoothly s-cobordant and homeomorphic but pairwise not diffeomorphic (Kasprowski--Powell--Ray, EMS Surv. Math. Sci. 9 (2022), Example 1.13, first pair due to Donaldson), so no h-cobordism between two of them is a product; equivalently the smooth h-cobordism theorem is false for boundary dimension four in general, while the topological statement holds for good fundamental groups, in particular for the trivial group, by Freedman ([[rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four]]).

[F3] An h-cobordism is a compact smooth cobordism whose two face inclusions are homotopy equivalences, and its triviality is the existence of a diffeomorphism to the product relative to the incoming boundary ([[def-h-cobordism]], [[def-simply-connected]]).

[F4] The smooth simply connected h-cobordism theorem assumes boundary dimension $n\ge5$, equivalently total dimension $n+1\ge6$ ([[thm-smooth-simply-connected-h-cobordism-theorem]]).

## Counterexample

1.1 The proof route fails in boundary dimension four: by [F1], a clean embedded Whitney disk in a four-dimensional middle level cannot generally be produced, since the general-position dimension count for complementary sheets of dimensions $2$ and $2$ gives no room for an embedded disk; the Whitney-trick step of the theorem is therefore unavailable exactly when $n=4$. [F1, given]

2.1 The conclusion also fails, so the failure is not merely a gap in the proof: by [F2] there are smooth orientable simply connected 4-manifolds that are smoothly s-cobordant and homeomorphic but not diffeomorphic, and an s-cobordism is in particular an h-cobordism between them; were such an h-cobordism diffeomorphic to the product relative to its incoming boundary, [F3] would make its two faces diffeomorphic, contradicting the choice of the pair. [F2, F3, given, step 1.1]

3.1 Therefore the hypothesis $n\ge5$ of the smooth h-cobordism theorem cannot be weakened to $n=4$: the dimension count at the Whitney step stops working and the conclusion itself is false in general for simply connected closed 4-manifolds, while the parallel topological statement for good fundamental groups is a genuinely different theorem. No smooth four-dimensional Poincaré or disk conclusion follows from the theorem of this page, whose statement is restricted to boundary dimension at least five by [F4]. [F2, F4, step 2.1] ∎
