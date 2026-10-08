---
id: thm-outer-littlewood-richardson-rule
kind: theorem
title: "The outer Littlewood–Richardson rule"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - thm-littlewood-richardson-schur-product-expansion
  - lem-frobenius-characteristic-preserves-outer-products
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - lem-frobenius-characteristic-is-an-isometry
  - def-littlewood-richardson-tableau-and-coefficient
  - thm-complex-representations-are-determined-by-their-characters
  - thm-complex-specht-modules-are-irreducible
  - cor-distinct-specht-modules-are-inequivalent
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-outer-induction-product-for-symmetric-group-characters
  - def-tensor-product-of-complex-representations
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - def-induced-character-of-a-complex-representation
  - def-induced-r-linear-g-module-by-h-covariant-functions
  - def-finite-symmetric-group-and-permutation-notation
  - def-group-homomorphism
  - def-frobenius-characteristic-map
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, (7.2)–(7.5), printed pp. 113–114: the characteristic map and its multiplicativity and value on Specht characters"
    - title: "M. A. A. van Leeuwen, The Littlewood-Richardson rule, and related combinatorics"
      url: "https://arxiv.org/pdf/math/9908099"
      locator: "§§3.1–3.2, printed pp. 15–17: the signature operations and their preservation of semistandard tableaux used in the local supplier's determinant-cancellation proof"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§16 Theorem 16.4, printed pp. 60–64: the Littlewood–Richardson rule in outer-product form"
---

## Statement

Let $\mu\vdash m$, $\nu\vdash n$, and let $S^\mu$, $S^\nu$ be the complex Specht modules ([[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[thm-complex-specht-modules-are-irreducible]]); let $S^\mu\boxtimes S^\nu$ be their external tensor product, a complex $S_m\times S_n$-module ([[def-tensor-product-of-complex-representations]]). Then, as complex $S_{m+n}$-modules,

$$\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}\bigl(S^\mu\boxtimes S^\nu\bigr)\cong\bigoplus_{\lambda\vdash m+n}\bigl(S^\lambda\bigr)^{\oplus c^\lambda_{\mu\nu}},$$

where $c^\lambda_{\mu\nu}$ is the Littlewood–Richardson coefficient, the number of Littlewood–Richardson tableaux of shape $\lambda/\mu$ and content $\nu$ ([[def-littlewood-richardson-tableau-and-coefficient]]); equivalently, the character $\chi^\mu\circ\chi^\nu$ of the induced module satisfies

$$\operatorname{ch}(\chi^\mu\circ\chi^\nu)=s_\mu s_\nu=\sum_{\lambda\vdash m+n}c^\lambda_{\mu\nu}s_\lambda.$$

The multiplicity of $S^\lambda$ in the induced module is exactly $c^\lambda_{\mu\nu}$. This is the outer induction product, not the same-rank tensor (Kronecker) product. No choice principle is used.

## Facts & Assumptions

**Given:** Partitions $\mu\vdash m$, $\nu\vdash n$, and their complex Specht modules.

[F1] The global convention realizes $S_t$ on $\{0,\ldots,t-1\}$, with composition acting right to left ([[def-finite-symmetric-group-and-permutation-notation]]).

[F2] Conjugation by a bijection of the underlying sets preserves products and gives a group homomorphism ([[def-group-homomorphism]]).

[F3] The outer product is induction of the external product character from the ordered two-block subgroup; it is bilinear, and its external product character has value $\chi(\sigma)\psi(\tau)$ ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F4] The induced module consists of covariant functions with $F(gh)=h^{-1}\cdot F(g)$ and the left translation action ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F5] The character of an induced module is the induced character ([[def-induced-character-of-a-complex-representation]]).

[F6] The Frobenius characteristic is the degreewise linear map $\operatorname{ch}(f)=\sum_{\rho\vdash t}f(\rho)p_\rho/z_\rho$; its values depend only on cycle types ([[def-frobenius-characteristic-map]]).

[F7] The Frobenius characteristic preserves outer products: $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$ ([[lem-frobenius-characteristic-preserves-outer-products]]).

[F8] For every integer $n\ge0$ and partition $\lambda\vdash n$, $\operatorname{ch}(\chi^\lambda)=s_\lambda$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F9] Schur products expand as $s_\mu s_\nu=\sum_{\lambda\vdash m+n}c^\lambda_{\mu\nu}s_\lambda$ ([[thm-littlewood-richardson-schur-product-expansion]]).

[F10] The characteristic map is injective on class functions of $S_t$ ([[lem-frobenius-characteristic-is-an-isometry]]).

[F11] Finite-dimensional complex representations of a finite group with equal characters are isomorphic ([[thm-complex-representations-are-determined-by-their-characters]]).

[F12] Each complex Specht module $S^\lambda$ is irreducible ([[thm-complex-specht-modules-are-irreducible]]).

[F13] Distinct partitions label inequivalent Specht modules ([[cor-distinct-specht-modules-are-inequivalent]]).

[F14] The Specht module is the span of the polytabloids in the corresponding tabloid module ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F15] The external tensor product of complex representations is a finite-dimensional complex representation ([[def-tensor-product-of-complex-representations]]).

[F16] Characters add on finite direct sums ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F17] The coefficient $c^\lambda_{\mu\nu}$ is a nonnegative integer counting the stated finite set of tableaux ([[def-littlewood-richardson-tableau-and-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 For each $t$, the label shift $\beta_t(i)=i+1$ (empty if $t=0$) gives the group isomorphism $c_t(\sigma)=\beta_t\sigma\beta_t^{-1}$ from zero-based to one-based permutations. It preserves products, cycle types and the ordered block embeddings. For a one-based subgroup $H^1$ and module $W$, put $H^0=c_{m+n}^{-1}(H^1)$ and $h\cdot_0w=c_{m+n}(h)\cdot_1w$. Pullback of induced functions is $F^0(g)=F^1(c_{m+n}(g))$, with inverse composition by $c_{m+n}^{-1}$; it satisfies $F^0(gh)=h^{-1}\cdot_0F^0(g)$ and intertwines left translation because $c_{m+n}$ preserves products. Relabeling tableaux by the same shift identifies tabloids, conjugates their column stabilizers and preserves signs, hence identifies the Specht actions in [F14]. Cycle-type preservation leaves [F6] unchanged. Thus the character and induction formulas use compatible group conventions. [F1, F2, F3, F4, F6, F14, construct]

1.2 By [F7] and [F8], $\operatorname{ch}(\chi^\mu\circ\chi^\nu)=\operatorname{ch}(\chi^\mu)\operatorname{ch}(\chi^\nu)=s_\mu s_\nu$. Applying the Schur expansion [F9] and the linearity of $\operatorname{ch}$ in [F6] gives $\operatorname{ch}(\chi^\mu\circ\chi^\nu)=\sum_{\lambda\vdash m+n}c^\lambda_{\mu\nu}\operatorname{ch}(\chi^\lambda)=\operatorname{ch}\bigl(\sum_{\lambda\vdash m+n}c^\lambda_{\mu\nu}\chi^\lambda\bigr)$. The sum is finite by [F9]. [F6, F7, F8, F9, algebra]

2.1 The two class functions inside $\operatorname{ch}$ in step 1.2 have the same characteristic. Injectivity [F10] therefore gives $\chi^\mu\circ\chi^\nu=\sum_{\lambda\vdash m+n}c^\lambda_{\mu\nu}\chi^\lambda$ as class functions on $S_{m+n}$. [F10, step 1.2]

3.1 Let $V=\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}(S^\mu\boxtimes S^\nu)$ and $W=\bigoplus_{\lambda\vdash m+n}(S^\lambda)^{\oplus c^\lambda_{\mu\nu}}$. These are finite-dimensional complex representations: each Specht module is spanned by finitely many polytabloids by [F14], their external tensor product is finite-dimensional by [F15], the sum has finite support by [F9], and the covariant induction space [F4] is a subspace of the finite-dimensional function space from the finite group $S_{m+n}$ to $S^\mu\otimes S^\nu$. The character of $V$ is $\chi^\mu\circ\chi^\nu$ by [F3, F5]; the character of $W$ is $\sum_\lambda c^\lambda_{\mu\nu}\chi^\lambda$ by additivity [F16]. Step 2.1 makes these characters equal, so [F11] gives $V\cong W$. [F3, F4, F5, F9, F11, F14, F15, F16, F17, step 2.1, given]

4.1 By [F12, F13], the summands $S^\lambda$ in $W$ are pairwise inequivalent irreducible modules, and the direct sum in step 3.1 contains exactly $c^\lambda_{\mu\nu}$ copies of each one. Thus this is the multiplicity of $S^\lambda$ in the induced module as well. The conclusion uses the outer induction product defined in [F3], not a tensor product of two modules for the same symmetric group; every relabeling and sum is explicit and finite, so no form of the axiom of choice is used. [F3, F12, F13, F17, step 3.1] ∎
