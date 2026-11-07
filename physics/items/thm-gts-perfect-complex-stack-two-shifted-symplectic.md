---
id: thm-gts-perfect-complex-stack-two-shifted-symplectic
kind: theorem
title: Conditional two-shifted form on the perfect-complex stack
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-calabi-yau-orientations-derived-perfect-moduli
dependency_level: 4
deps:
  - def-gts-derived-stack-of-perfect-complexes
  - def-gts-derived-artin-stack-and-cotangent-complex
  - def-gts-closed-n-shifted-symplectic-form
  - lem-gts-universal-cyclic-character-on-perfect-complex-core
dependency_roles:
  def-gts-derived-stack-of-perfect-complexes: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
  lem-gts-universal-cyclic-character-on-perfect-complex-core: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
      url: https://arxiv.org/pdf/1111.3209
      locator: §2.3 and Theorem 2.12 proof, PDF pp. 41–43.
    - title: Bertrand Toën and Gabriele Vezzosi, Caractères de Chern, traces équivariantes et géométrie algébrique dérivée
      url: https://arxiv.org/pdf/0903.3292
      locator: §§2.3, 3.2–3.3 and 4.2, arXiv:0903.3292v2, PDF pp. 39–43 and 64–66.
verification:
  precheck: pass
aliases: []
---

## Statement

Fix a characteristic-zero field $k$. Let $\mathrm{Perf}_k$ be the locally geometric derived moduli stack whose value on a connective derived $k$-algebra $A$ is the maximal groupoid of dualizable $A$-modules and their equivalences. Assume a universal perfect complex $\mathcal E$ on $\mathrm{Perf}_k$ and the source tangent identification $T_{(\mathrm{Perf}_k,E)}\simeq R\operatorname{Hom}_A(E,E)[1]$ on every derived Artin locally finite-presentation open substack. Assume also a functorial negative-cyclic Chern-character datum whose weight-two component is a closed two-form $\operatorname{Ch}_2(\mathcal E)$ and whose underlying pairing at $E$ is one half of the graded trace pairing $(a,b)\mapsto\operatorname{str}(a\circ b)$ on $R\operatorname{Hom}_A(E,E)[1]$. Then $\operatorname{Ch}_2(\mathcal E)$ is a canonical two-shifted symplectic structure on $\mathrm{Perf}_k$, in the sense of compatible structures on its derived Artin locally finite-presentation open substacks.

## Statement references

[PTVV, §2.3 and Theorem 2.12](https://arxiv.org/pdf/1111.3209).

[Toën–Vezzosi, §§2.3, 3.2–3.3 and 4.2](https://arxiv.org/pdf/0903.3292).

## Facts & Assumptions

**Given:** The characteristic-zero field k; the perfect-complex moduli functor and its universal object; its locally geometric open Artin substacks; the stated tangent identification; and the functorial closed negative-cyclic Chern-character datum. The universal negative-cyclic character and its tangent/pairing identifications are supplied by [F4], including every derived base and the full perfect-module core; the original conditional Statement is retained.

[F1] [[def-gts-derived-stack-of-perfect-complexes]]: $\mathrm{Perf}_k(A)$ is the groupoid of perfect $A$-modules and equivalences; its universal object is a perfect complex on the product with the moduli stack.

[F2] [[def-gts-derived-artin-stack-and-cotangent-complex]]: on each derived Artin locally finite-presentation open, the cotangent complex is perfect and the tangent complex is its dual.

[F3] [[def-gts-closed-n-shifted-symplectic-form]]: a closed degree-n two-form is a point of the weighted negative-cyclic de Rham mapping space; it is shifted symplectic exactly when its adjoint T -> L[n] is a quasi-isomorphism.

[F4] [[lem-gts-universal-cyclic-character-on-perfect-complex-core]]: the universal negative-cyclic character is constructed as a natural map of spaces from the full perfect-module core, using cyclic linearization and equivariant Yoneda-bar Morita transport. Its mixed-HKR weight-two image is a closed form, its tangent is End(E)[1] on every indicated Artin open, and its underlying pairing is one half of the graded trace of composition after every derived base change.

## Proof


1.1 By [F4], $\operatorname{Ch}_2(\mathcal E)$ is the image of a universal class in the weight-two Hodge-completed negative-cyclic complex. By the definition of closed forms in [F3], its restriction to every derived Artin open $U$ is a closed two-form of degree $2$ on $U$. Naturality of the universal class makes these restrictions compatible on overlaps. [given, F1, F3, F4, construct]

1.2 Let $A$ be a connective derived $k$-algebra and let $E$ be a dualizable $A$-module representing an $A$-point. Put $B=R\operatorname{Hom}_A(E,E)$. The tangent identification constructed in [F4] gives $T_E\simeq B[1]$. [given, F1, F2]

1.3 Dualizability gives $E^\vee=R\operatorname{Hom}_A(E,A)$, $E\simeq E^{\vee\vee}$, and $B\simeq E^\vee\otimes_A E$. The tensor-dual identity and symmetry identify $B^\vee$ with $E^\vee\otimes_A E$. On rank-one endomorphisms, the graded trace of composition contracts the two $E$ and $E^\vee$ factors by evaluation, with the Koszul sign fixed by the graded symmetry; hence it is the canonical evaluation pairing under these identifications. Its adjoint is the evaluation/coevaluation composite, which is an equivalence by the triangle identities for the dual pair $(E,E^\vee)$. Therefore $B\to B^\vee$ is a quasi-isomorphism. [given, F4, algebra]

2.1 The underlying form in [F4] is one half of this pairing. Since $\operatorname{char}(k)=0$, $2$ is invertible in $A$, so multiplication by $1/2$ is an equivalence. Shifting both tangent factors by $[1]$ identifies the adjoint of this degree-two pairing with $T_E\to L_E[2]$; it is a quasi-isomorphism by step 1.3. [given, F4, step 1.3, algebra]

3.1 Quasi-isomorphisms of quasi-coherent complexes are local on a derived Artin atlas. Thus the underlying form is nondegenerate on every open $U$. Together with the compatible closed form of 1.1, the definition [F3] makes $\operatorname{Ch}_2(\mathcal E)$ a two-shifted symplectic structure on $\mathrm{Perf}_k$. [F2, F3, step 1.1, step 2.1] ∎

## Remarks

The universal closed lift is now constructed by the full cyclic-core and Yoneda-bar lemma, rather than used as an unproved external trace operation. Its coherence includes equivalences, retracts, higher homotopies and derived algebra maps. The original conditional Statement is preserved; the previously missing universal datum is supplied locally.
