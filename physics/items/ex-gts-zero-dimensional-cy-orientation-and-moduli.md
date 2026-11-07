---
id: ex-gts-zero-dimensional-cy-orientation-and-moduli
kind: example
title: The point as a zero-dimensional oriented Calabi–Yau
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-calabi-yau-orientations-derived-perfect-moduli-frontiers
dependency_level: 6
deps:
  - def-gts-geometric-orientation-and-dg-category-calabiyau-structure
  - def-gts-derived-stack-of-perfect-complexes
  - thm-gts-perfect-complex-stack-two-shifted-symplectic
  - thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety
  - lem-gts-universal-cyclic-character-on-perfect-complex-core
dependency_roles:
  def-gts-geometric-orientation-and-dg-category-calabiyau-structure: mathematical-premise
  def-gts-derived-stack-of-perfect-complexes: mathematical-premise
  thm-gts-perfect-complex-stack-two-shifted-symplectic: mathematical-premise
  thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety: mathematical-premise
  lem-gts-universal-cyclic-character-on-perfect-complex-core: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Pantev, Toën, Vaquié, Vezzosi, Shifted Symplectic Structures
      url: https://arxiv.org/pdf/1111.3209
      locator: §2.3 and Theorem 2.12, PDF pp. 41–43; point case and trace pairing.
    - title: Damien Calaque and Stefano Ronchi, Shifted Symplectic Geometry by Examples
      url: https://arxiv.org/pdf/2510.04625
      locator: §5.2, Definition 5.6 and Theorem 5.8, PDF pp. 39–41; orientation and transgression conventions.
verification:
  precheck: pass
aliases: []
---

## Statement

Let $k$ be a characteristic-zero field, $X=\operatorname{Spec}(k)$, $d=0$, and $\omega_X=\mathcal O_X=k$. Choose the identity volume isomorphism and trace. Then the induced degree-zero map $[X]:k\to k[0]$ is an $\mathcal O$-orientation: after every connective derived $k$-algebra $A$, every perfect $A$-module $E$ satisfies the cap-duality condition. At the rank-one perfect object $E=A$ in $\operatorname{Perf}(X)$, the tangent complex is $A[1]$ and the trace-composition pairing is nondegenerate. Under the universal negative-cyclic Chern-character hypothesis of the A-page conditional theorem, this is the restriction of a closed two-shifted symplectic form on $\operatorname{Perf}(X)$.

## Statement references

[PTVV, §2.3 and Theorem 2.12](https://arxiv.org/pdf/1111.3209).

[Calaque–Ronchi, Definition 5.6 and Theorem 5.8](https://arxiv.org/pdf/2510.04625).

## Facts & Assumptions

**Given:** A characteristic-zero field $k$; $X=\operatorname{Spec}(k)$; the identity volume isomorphism $k\to\omega_X=k$; every connective derived $k$-algebra $A$; a perfect $A$-module $E$; and the locally constructed universal negative-cyclic Chern-character datum used in the final conclusion.

[F1] [[def-gts-geometric-orientation-and-dg-category-calabiyau-structure]]: an $\mathcal O$-orientation is a map $C(X,\mathcal O_X)\to k[-d]$ whose cap maps are quasi-isomorphisms for every derived base and perfect complex.

[F2] [[def-gts-derived-stack-of-perfect-complexes]]: $\operatorname{Perf}(X)(A)$ is the groupoid of perfect complexes on $X_A$ and equivalences.

[F3] [[thm-gts-perfect-complex-stack-two-shifted-symplectic]]: under its stated negative-cyclic Chern-character hypothesis, the universal trace class is closed and its pointwise form is one half of the trace pairing.

[F4] [[thm-gts-shifted-symplectic-form-on-perfect-complex-moduli-of-a-cy-variety]]: under its exact orientation and source finiteness conditions, the shift on perfect-complex moduli is 2-d.

[F5] [[lem-gts-universal-cyclic-character-on-perfect-complex-core]]: the universal negative-cyclic character and its all-derived-base trace pairing are constructed with the higher descent data required by [F3].

## Proof


1.1 The cotangent module $\Omega^1_{k/k}$ is zero, so its determinant in dimension $d=0$ is the empty exterior power $\mathcal O_X=k$. The chosen volume isomorphism and normalized trace are both the identity; thus $[X]=\operatorname{id}_k:k\to k[0]$. The structure sheaf is compact in $\operatorname{QCoh}(X)=\operatorname{Mod}_k$, and derived global sections on $X$ are the identity functor. [given, F1, algebra]

1.2 For any connective derived $k$-algebra $A$, $X_A=\operatorname{Spec}(A)$, so $R\Gamma(X_A,E)=E$ and $R\Gamma(X_A,E^\vee)=E^\vee$. The cap map is the canonical biduality morphism $E\to R\operatorname{Hom}_A(E^\vee,A)$, which is a quasi-isomorphism because $E$ is perfect and therefore dualizable. This verifies every clause of the degree-zero orientation after every derived base change. [given, F1, F2, algebra]

1.3 At $E=A$, the tangent identification in [F3] gives $R\operatorname{Hom}_A(A,A)[1]=A[1]$. Composition followed by trace sends $(a,b)$ to $ab$, and the form in [F3] is one half of this pairing. Its adjoint is multiplication by $1/2$ under $A^\vee=A$, which is an equivalence because $k$ has characteristic zero. Hence the underlying degree-two pairing is nondegenerate. [given, F3, algebra]

2.1 The closed lift and its extension over $\mathrm{Perf}(X)$ are supplied by [F5]. Thus the main perfect-moduli theorem applies with $d=0$ and assigns degree $2-d=2$ to this point case; step 1.3 verifies the nondegeneracy at the rank-one point directly. [F5, F4, step 1.3, algebra] ∎

## Remarks

The orientation is verified directly after every derived base. The universal cyclic-character lemma now supplies the closed lift and its higher descent; the original conditional wording of the Statement is retained. The locally geometric/Artin conditions of the source theorem remain explicit.
