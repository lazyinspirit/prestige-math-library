---
id: lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces
kind: lemma
title: "Adjunction formula for effective divisors on a smooth projective surface"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-arithmetic-genus-proper-curve
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-canonical-divisor-of-a-smooth-projective-surface
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - lem-effective-cartier-divisor-exact-sequence
  - lem-euler-characteristic-additive-short-exact
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "A. Kumar and K. Venkatram, MIT 18.727 Topics in Algebraic Geometry: Algebraic Surfaces, Spring 2008, Lecture 2"
      url: "https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the intersection, Euler-characteristic and Serre-duality suppliers ([[def-axiom-of-choice]]). Let $k$ be a field, let $X$ be an integral smooth projective surface over $k$ ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[def-canonical-divisor-of-a-smooth-projective-surface]]), let $K_X$ be a canonical divisor and let $C\subseteq X$ be a nonzero effective Cartier divisor ([[def-effective-cartier-divisor]]), viewed as a proper curve of dimension one. Then
$$C\cdot(K_X+C)=-2\,\chi(C,\mathcal O_C),$$
where $\chi$ is the Euler characteristic ([[def-euler-characteristic-coherent-sheaf]]). If $C$ is integral, so that its arithmetic genus is $p_a(C)=1-\chi(C,\mathcal O_C)$ ([[def-arithmetic-genus-proper-curve]]), this reads
$$C\cdot(K_X+C)=2p_a(C)-2.$$
No smoothness, reducedness or irreducibility of $C$ is assumed, and $\deg_C(\mathcal O_X(K_X+C)|_C)=C\cdot(K_X+C)$ for the degree of [[def-degree-invertible-sheaf-proper-dimension-one]].

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, a canonical divisor $K_X$ with $\mathcal O_X(K_X)\cong\omega_X$, and a nonzero effective Cartier divisor $C\subseteq X$.

[F1] $X$ is proper over $k$ and Noetherian; the intersection product on invertible sheaves and Cartier divisors is defined by the alternating sum of [[def-divisor-intersection-number-on-smooth-projective-surface]], is symmetric and $\mathbb Z$-bilinear, and depends only on the linear equivalence classes of its entries ([[thm-surface-intersection-product-bilinear-and-symmetric]]). For an effective Cartier divisor $C$ and any Cartier divisor $D$ one has $C\cdot D=\deg_C(\mathcal O_X(D)|_C)$ with $\deg_C(\mathcal N)=\chi(C,\mathcal N)-\chi(C,\mathcal O_C)$ ([[thm-intersection-with-curve-as-degree-of-restriction]], [[def-degree-invertible-sheaf-proper-dimension-one]]).

[F2] Serre duality: for every invertible $\mathcal O_X$-module $E$ and every $q$ the cup-product pairing $H^q(X,E)\times H^{2-q}(X,E^\vee\otimes\omega_X)\to k$ is perfect and all groups are finite-dimensional ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]). Consequently $\chi(X,E)=\chi(X,E^\vee\otimes\omega_X)$ and $\chi(X,\omega_X)=\chi(X,\mathcal O_X)$; moreover $\mathcal O_X(K_X)\cong\omega_X$, so $\mathcal O_X(K_X+D)\cong\omega_X\otimes\mathcal O_X(D)$ and $(\omega_X\otimes\mathcal O_X(D))^\vee\cong\mathcal O_X(-K_X-D)$ for every Cartier divisor $D$ ([[def-canonical-divisor-of-a-smooth-projective-surface]], [[lem-invertible-sheaf-dual-tensor-inverse]], [[def-sheaf-tensor-product]], [[def-invertible-sheaf]]).

[F3] Structure sequence and additivity: for the nonzero effective Cartier divisor $C$ there is a short exact sequence of coherent $\mathcal O_X$-modules $0\to\mathcal O_X(-C)\to\mathcal O_X\to i_*\mathcal O_C\to0$ ([[lem-effective-cartier-divisor-exact-sequence]]); the Euler characteristic is additive on short exact sequences of coherent modules on the proper scheme $X$ ([[lem-euler-characteristic-additive-short-exact]]); and $\chi(X,i_*\mathcal O_C)=\chi(C,\mathcal O_C)$ ([[def-euler-characteristic-coherent-sheaf]], the projection-formula identification of [[thm-intersection-with-curve-as-degree-of-restriction]] in the effective case). Hence $\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))=\chi(C,\mathcal O_C)$.

[F4] The divisor $-K_X-C$ is a Cartier divisor and $\mathcal O_X(-K_X-C)\cong(\omega_X\otimes\mathcal O_X(C))^\vee$, while $\mathcal O_X(-C)\cong\mathcal O_X(C)^\vee$; the canonical divisor is a Cartier divisor and linear equivalence may be replaced by the associated invertible sheaves in all intersection computations ([[def-canonical-divisor-of-a-smooth-projective-surface]], [[def-cartier-divisor]], [[def-invertible-sheaf-of-cartier-divisor]]).

[F5] The Axiom of Choice is inherited from the Serre-duality and Euler-characteristic suppliers of [F2] and [F3]; the divisor $C$ and the canonical divisor are given data.



## Proof
**Proof technique:** direct: compute $C\cdot(-K_X-C)$ from the defining alternating sum, replace two of its terms by Serre duality, and read the remaining difference off the structure sequence.

1.1 The defining alternating sum. By [F1] and [F4], $$C\cdot(-K_X-C)=\mathcal O_X(C)\cdot\mathcal O_X(-K_X-C)=\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))-\chi(X,\mathcal O_X(K_X+C))+\chi(X,\mathcal O_X(K_X)),$$ since the duals of $\mathcal O_X(C)$ and $\mathcal O_X(-K_X-C)$ are $\mathcal O_X(-C)$ and $\mathcal O_X(K_X+C)$, and their tensor product is $\mathcal O_X(K_X)$. [F1, F4]

1.2 Serre duality in the two middle terms. By [F2] with $E=\mathcal O_X(-C)$, whose dual twisted by $\omega_X$ is $\omega_X\otimes\mathcal O_X(C)$, we have $\chi(X,\omega_X\otimes\mathcal O_X(C))=\chi(X,\mathcal O_X(-C))$, that is $\chi(X,\mathcal O_X(K_X+C))=\chi(X,\mathcal O_X(-C))$; and $\chi(X,\mathcal O_X(K_X))=\chi(X,\omega_X)=\chi(X,\mathcal O_X)$. [F2, F4]

1.3 The structure-sequence difference. By [F3], $\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))=\chi(C,\mathcal O_C)$. [F3]

2.1 Conclusion of the computation. Substituting steps 1.2 and 1.3 into step 1.1 gives $$C\cdot(-K_X-C)=\bigl(\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))\bigr)+\bigl(\chi(X,\mathcal O_X(K_X))-\chi(X,\mathcal O_X(K_X+C))\bigr)=\chi(C,\mathcal O_C)+\bigl(\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))\bigr)=2\chi(C,\mathcal O_C),$$ where the second bracket was rewritten using $\chi(X,\mathcal O_X(K_X))=\chi(X,\mathcal O_X)$ and $\chi(X,\mathcal O_X(K_X+C))=\chi(X,\mathcal O_X(-C))$ from steps 1.2 and 1.3. Since the intersection product is $\mathbb Z$-bilinear, $C\cdot(-K_X-C)=-C\cdot(K_X+C)$; hence $C\cdot(K_X+C)=-2\chi(C,\mathcal O_C)$. [F1, step 1.1, step 1.2, step 1.3]

3.1 The genus form and the degree identity. If $C$ is integral, its arithmetic genus is $p_a(C)=1-\chi(C,\mathcal O_C)$ by definition ([[def-arithmetic-genus-proper-curve]]), so the formula becomes $C\cdot(K_X+C)=2p_a(C)-2$. Since $C$ is effective, the restriction-degree theorem gives $\deg_C(\mathcal O_X(K_X+C)|_C)=C\cdot(K_X+C)$ ([[thm-intersection-with-curve-as-degree-of-restriction]]). The Axiom of Choice is inherited from [F5]; no further selection is made. [F5, step 2.1] ∎ 