---
id: lem-global-euler-characteristic-for-prime-to-p-split-module
kind: lemma
title: Global Euler characteristic for modules split by a prime-to-p extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 33
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-global-constant-prime-to-p-equivariant-euler-class
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are inherited from the equivariant global constant-module class and continuous-cohomology resolution data.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 5.1 and Lemma 5.4, printed pp.67–70; the explicit invariant and permutation-module computation is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC, and the finite-module Poitou–Tate theorem in its stated scope. Let $L/F$ be a finite Galois extension of number fields with group $H$ of order prime to $p$. Assume $L$ is totally imaginary and contains $\mu_p$. Let $S_F$ be a finite set of places of $F$ containing all archimedean places, all places above $p$, and every place ramified in $L/F$. Let $N$ be a finite-dimensional $\mathbb F_p[H]$-module, regarded as a $G_{F,S_F}$-module through the quotient $H$. Then its global cohomology groups in degrees zero through two are finite and
$$\sum_{i=0}^{2}(-1)^i\dim_{\mathbb F_p}H^i(G_{F,S_F},N)=\sum_{v\mid\infty}\dim_{\mathbb F_p}H^0(F_v,N)-[F:\mathbb Q]\dim_{\mathbb F_p}N.$$
This result is restricted to a splitting Galois group of order prime to $p$.

## Facts & Assumptions

**Given:** The Galois extension, prime, place set, finite module, explicit choices and assumed Poitou–Tate theorem in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Under the stated hypotheses the equivariant global Euler class of the constant module over $L$ is the sum of the negative regular and archimedean permutation classes displayed there. [[lem-global-constant-prime-to-p-equivariant-euler-class]]

[F2] A profinite group extension has the natural continuous Hochschild–Serre cohomology spectral sequence. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

[F3] A finite group algebra over a field of characteristic not dividing its order is semisimple. [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

## Proof

**Proof technique:** collapse Hochschild–Serre and evaluate the regular and archimedean permutation classes on the module of invariants.

1.1 The extension $L/F$ lies in $F_{S_F}$ by the ramification hypothesis. Put $G=G_{F,S_F}$ and $U=G_{L,S_L}$, where $S_L$ is the set of places over $S_F$; then $1\to U\to G\to H\to1$ is exact. The subgroup $U$ acts trivially on $N$, so its actual continuous cochain complex with coefficients in $N$ is the tensor product of the $\mathbb F_p$ cochain complex with $N$. Hence $H^i(U,N)\cong H^i(U,\mathbb F_p)\otimes N$ equivariantly for $H$. These groups are finite for $i\le2$ by [F1]. [F1, given, construct, algebra]

2.1 By [F3], the $H$-invariant functor on $\mathbb F_p[H]$-modules is exact. The Hochschild–Serre spectral sequence [F2] therefore has no positive-degree $H$-cohomology and collapses to $H^i(G,N)\cong(H^i(U,\mathbb F_p)\otimes N)^H$ for $i\le2$. In particular these global groups are finite. [F2, F3, step 1.1, algebra]

3.1 Taking the dimensions of $H$-invariants after tensoring by $N$ defines an additive homomorphism from the Grothendieck group because both functors are exact. Apply it to [F1]. The invariants of $N\otimes\mathbb F_p[H]$ have dimension $\dim N$: an invariant is uniquely determined by the coefficient at the identity. The archimedean places of $L$ form one $H$-orbit over each archimedean place $v$ of $F$; if $w$ lies over $v$, the invariants of $N\otimes\mathbb F_p[H/H_w]$ are identified by evaluation at $w$ with $N^{H_w}$. Because $L$ is totally imaginary, $H_w$ is trivial for complex $v$ and is the order-two complex-conjugation group for real $v$. Thus $N^{H_w}=H^0(F_v,N)$. Substituting these dimensions proves the displayed formula, including $N=0$ and the trivial group. [F1, step 2.1, given, choose, construct, algebra] ∎
