---
id: thm-gts-characteristic-zero-formal-moduli-problems-and-dg-lie-algebras
kind: theorem
title: Characteristic-zero formal moduli problems and dg Lie algebras
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
deps:
- def-gts-formal-moduli-problem-on-small-derived-bases
- def-gts-cohomological-differential-graded-lie-algebra
- lem-gts-characteristic-zero-ce-deformation-context
- lem-gts-enriched-recognition-of-characteristic-zero-formal-moduli
- def-axiom-of-choice
dependency_roles:
  def-gts-formal-moduli-problem-on-small-derived-bases: mathematical-premise
  def-gts-cohomological-differential-graded-lie-algebra: mathematical-premise
  lem-gts-characteristic-zero-ce-deformation-context: mathematical-premise
  lem-gts-enriched-recognition-of-characteristic-zero-formal-moduli: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: 'Jacob Lurie, Derived Algebraic Geometry X: Formal Moduli Problems'
    url: https://www.math.ias.edu/~lurie/papers/DAG-X.pdf
    locator: Theorem 2.0.2 and complete proof, §§2.1–2.3, PDF pp. 31–48; abstract
      recognition Theorem 1.3.12 and complete proof, §§1.3–1.5, PDF pp. 18–29
  - title: J. P. Pridham, Unifying derived deformation theories
    url: https://arxiv.org/pdf/0705.0344
    locator: §§3.1–3.3 and 4.3–4.7, including Proposition 4.59; complete relevant
      proofs inspected, with pro-Artinian and simplicial-model conventions distinguished
  - title: 'Joost Nuiten, Lecture 8: Koszul duality for formal moduli problems'
    url: https://people.maths.ox.ac.uk/brantner/24L8.pdf
    locator: Definitions 8.2–8.3 and Theorem 8.4; independent statement/tangent-shift
      cross-check, proof referred to Lurie
verification:
  precheck: pending
---

## Statement

Let $k$ be a field of characteristic zero and let
$\mathrm{CAlg}^{\mathrm{sm}}_k$ be the specified infinity-category of small
augmented connective $E_\infty$ $k$-algebras. The infinity-category of
space-valued functors on this category satisfying the basepoint and pullback
axioms of [[def-gts-formal-moduli-problem-on-small-derived-bases]] is
equivalent to the infinity-category of cohomological dg Lie algebras over
$k$, localized at quasi-isomorphisms. The correspondence fixes the tangent
shift by
$$\mathfrak g_F\simeq T_F[-1],\qquad K[r]^j=K^{j+r}.$$
This asserts neither a classification of arbitrary set-valued functors on
ordinary Artinian rings nor a positive-characteristic equivalence.

## Statement references

[[def-gts-formal-moduli-problem-on-small-derived-bases]]

[[def-gts-cohomological-differential-graded-lie-algebra]]

[[lem-gts-characteristic-zero-ce-deformation-context]]

[[lem-gts-enriched-recognition-of-characteristic-zero-formal-moduli]]

## Facts & Assumptions

**Given:** The characteristic-zero field, the specified small connective derived bases with their actual mapping spaces, and the full unbounded cohomological DG Lie category. The small-base model retains the AC convention of its declared simplicial-resolution suppliers.

[F1] [[def-gts-formal-moduli-problem-on-small-derived-bases]]: the functor is space-valued, has contractible value at k, and preserves the specified pullbacks. Small bases have finite bounded homotopy and local Artinian π0 with specified RESIDUE field k.

[F2] [[def-gts-cohomological-differential-graded-lie-algebra]]: brackets, differentials and quasi-isomorphisms use the unshifted cohomological convention in every integer degree.

[F3] [[lem-gts-characteristic-zero-ce-deformation-context]]: the characteristic-zero model comparison retains mapping spaces and all small pullbacks. The ambient CE adjunction uses unbounded augmented CDGAs. D(k)=0, the small-base counit is an equivalence, every surjective-π0 map factors into finitely many actual elementary maps, and D sends the required pullbacks to Lie pushouts. The enriched free positive tests and the operadic rectification are constructed there.

[F4] [[lem-gts-enriched-recognition-of-characteristic-zero-formal-moduli]]: from the actual derived action on positive free tests it constructs g_F, its entire coherent Lie action and its natural Yoneda comparison F(A)→Map_Lie(D(A),g_F). That comparison is an equivalence on the tests and, by actual elementary excision, on every small base; the reverse reconstruction recovers every unbounded DG Lie algebra and all its mapping spaces. Its underlying complex is T_F[−1].

[A1] [[def-axiom-of-choice]] supplies the simultaneous free-resolution, basis and splitting choices in the two local constructions.

## Proof

**Given:** [F1]–[F4] and [A1].

1.1 Apply the explicit model comparison [F3] to the small test category. It identifies the specified simplicial/E-infinity mapping spaces with those of the full small nonpositive-CDGA subcategory and preserves the square-zero tests and the surjective-π0 pullback class. The ambient CE category remains UNBOUNDED: for example a degree-zero Lie algebra has a degree-one CE generator. Only the test bases are restricted to be connective; no Lie degree is removed. [F1, F2, F3, A1, construct]

2.1 Define Ψ(g)(A)=Map_Lie(D(A),g). Since D(k)=0 by [F3], its value at k is contractible. A required pullback of small bases is sent by D to the actual Lie pushout, so mapping it into g gives exactly the required homotopy pullback of spaces. Thus Ψ(g) is a formal moduli problem on the FULL stated test category. The D construction and these equivalences are natural infinity-functors, so Ψ also acts on all DG Lie maps and higher homotopies. [F1, F2, F3, step 1.1, construct]

3.1 Let F be an arbitrary formal moduli problem. The enriched positive-free test reconstruction [F4], using the actual CE test comparisons [F3], produces g_F with underlying complex T_F[−1]. Its comparison on every small A is constructed from an element x∈F(A) as follows: Yoneda gives the natural transformation h_A=Map_CAlg(A,−)→F; restrict it to the full enriched test theory. The CE adjunction identifies h_A on that theory with Map_Lie(−,D(A)). Apply the reconstruction FUNCTOR to this transformation to get the Lie map D(A)→g_F. This constructs F(A)→Ψ(g_F)(A) as a map of spaces, natural simultaneously in A, x, all derived attaching maps and their higher homotopies. In particular it is not inferred from a tangent-space dimension comparison. [F1, F3, F4, step 2.1, construct]

4.1 The comparison of step 3.1 is an equivalence on positive-free tests by [F4]. Factor the map of each actual small algebra to k into the finite elementary extensions of [F3]. At an additional extension, F has the defining homotopy-pullback comparison by [F1], while Ψ has it by step 2.1. The already natural comparison identifies the three known corners, including the actual attaching map and its nullhomotopy, so it identifies the fourth. Finite induction proves F≃Ψ(g_F) on every small base. The same construction on natural transformations retains every mapping-space simplex by [F4]. [F1, F3, F4, step 2.1, step 3.1, construct]

5.1 Starting with any DG Lie algebra g, its action on the enriched free tests is evaluation of the original Lie words, disks and all composition simplices. The reverse reconstruction in [F4] and its operadic unit comparison identify g_(Ψg) with g, including every cohomological degree and all derived maps. Hence F↦g_F and Ψ are inverse infinity-functors by step 4.1. The underlying-complex identification in [F4] is exactly g_F≃T_F[−1] with K[r]^j=K^(j+r). Transport along step 1.1 gives the asserted equivalence on the ORIGINAL specified infinity-category of small bases. This proves the full Statement with the specified tangent shift. [F1, F2, F3, F4, step 1.1, step 4.1, algebra] ∎

## Remarks

The proof constructs the complete enriched derived comparison, including automorphisms and higher homotopies. Its CE algebra may be unbounded even though every test base is connective. The theorem retains its stated characteristic-zero and space-valued scope.
