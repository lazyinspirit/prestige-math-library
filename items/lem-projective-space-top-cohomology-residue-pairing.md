---
id: lem-projective-space-top-cohomology-residue-pairing
kind: lemma
title: Residue pairing between H^0 and top cohomology of projective space
status: published
origin: pipeline
landmark: false
deps:
  - thm-cohomology-projective-space-twisting-sheaves
  - def-cup-product-sheaf-cohomology
  - thm-cup-product-graded-associative-natural
  - thm-cech-to-sheaf-cohomology-comparison
  - lem-projective-space-cech-monomial-complex
  - def-associated-sheaf-graded-module-proj
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-leray-acyclic-cover-theorem
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Sections 30-31 (cohomology of projective space, tags 0FD4-0FD7); Section 28.7 (cup product)"
    - title: "R. Hartshorne, Algebraic Geometry"
      url: https://doi.org/10.1007/978-1-4757-3849-0
      locator: "Chapter III, Section 5, the proof of Theorem 5.1 (the pairing is the case q=n)"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and $n\ge1$, and use the
notation and the cohomology computation of
[[thm-cohomology-projective-space-twisting-sheaves]] for
$\mathbb P^n_k$ with its twisting sheaves $\mathcal O(d)$. Then for every
$d\ge0$ the cup product of [[def-cup-product-sheaf-cohomology]] for the
multiplication pairing
$\mathcal O(d)\otimes_{\mathbb Z}\mathcal O(-n-1-d)\to\mathcal O(-n-1)$
composed with the coefficient isomorphism
$$H^n(\mathbb P^n_k,\mathcal O(-n-1))\xrightarrow{\ \sim\ }k,\qquad x_0^{-1}\cdots x_n^{-1}\longmapsto1,$$
is a perfect $k$-bilinear pairing
$$H^0(\mathbb P^n_k,\mathcal O(d))\times H^n(\mathbb P^n_k,\mathcal O(-n-1-d))\longrightarrow k,$$
and it is compatible with multiplication by homogeneous polynomials: if $g$ is
a homogeneous polynomial of degree $\delta\ge0$ and the two cup products are taken
with the multiplication pairings $\mathcal O(d)\otimes\mathcal O(\delta)\to
\mathcal O(d+\delta)$ and $\mathcal O(-n-1-d-\delta)\otimes\mathcal O(\delta)
\to\mathcal O(-n-1-d)$, then for all $f\in H^0(\mathcal O(d))$ and
$\eta\in H^n(\mathcal O(-n-1-d-\delta))$ one has
$$\langle g\cdot f,\eta\rangle=\langle f,g\cdot\eta\rangle .$$
For $n=0$ the corresponding pairing $k\times k\to k$ is ordinary
multiplication under the identifications $\mathcal O(d)\cong\mathcal O$ of
$\mathbb P^0_k=\operatorname{Spec}k$.

## Facts & Assumptions

**Given:** the field $k$, the integer $n\ge1$, the projective space $\mathbb P^n_k$ with twisting sheaves $\mathcal O(d)$, the cup product of [F1], and the coefficient isomorphism of the statement.

[F1] For abelian sheaves $\mathcal F,\mathcal G,\mathcal H$ and a tensor pairing $\mu:\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal H$, the derived-morphism construction gives a cup product $H^p(X,\mathcal F)\times H^q(X,\mathcal G)\to H^{p+q}(X,\mathcal H)$. It is bilinear and natural in the sheaves and pairing, and the class $1_X\in H^0(X,\mathbb Z_X)$ acts by the unit isomorphism. ([[def-cup-product-sheaf-cohomology]], [[thm-cup-product-graded-associative-natural]])

[F2] The Axiom of Choice is [[def-axiom-of-choice]].

[F3] For $n\ge1$, $H^0(\mathcal O(m))$ has the homogeneous monomial basis for $m\ge0$ and is zero for $m<0$; $H^n(\mathcal O(m))$ has the all-negative Laurent monomial basis of total degree $m$. For $n=0$ every twist has $H^0=k$ and higher cohomology zero. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F4] The Čech-to-sheaf-cohomology comparison is natural in the coefficient sheaf: it commutes with the cohomology maps induced by a morphism of sheaves, including multiplication by a global section. ([[thm-cech-to-sheaf-cohomology-comparison]])

[F5] On $\operatorname{Proj}S$, associated graded-module sheaves are obtained from homogeneous localizations on the standard affine charts, functorially in graded-module maps. The standard-cover Čech complex for $\mathcal O(m)$ has its canonical Laurent-monomial decomposition. Quasi-coherent sheaves on affine schemes are acyclic, and an acyclic ordered cover gives an isomorphism via the canonical Čech comparison. ([[def-associated-sheaf-graded-module-proj]], [[lem-projective-space-cech-monomial-complex]], [[thm-qc-sheaf-affine-higher-cohomology-vanishes]], [[thm-leray-acyclic-cover-theorem]])

## Proof

1.1 Fix $S=k[x_0,\ldots,x_n]$ and $U_i=D_+(x_i)$. For a nonempty subset $I$, the intersection $U_I=D_+(\prod_{i\in I}x_i)$ is affine and its twist sections are $(S[(\prod_{i\in I}x_i)^{-1}])_m$ by [F5]. These are the Laurent monomials whose negative exponents occur only in $I$. The twists are quasi-coherent on these affines, so [F5] makes this an acyclic cover and identifies its Čech cohomology with sheaf cohomology. In top degree the quotient by Čech boundaries kills exactly the monomials having some nonnegative exponent: such a monomial already occurs on the intersection omitting that index. The remaining all-negative classes are the canonical basis from [F5], giving the basis in [F3]. For a homogeneous polynomial $s$ of degree $d$, the graded map $S(m)\to S(m+d)$ is multiplication by $s$; localizing shows that its map on every Čech term is ordinary Laurent multiplication. [F3, F5]


1.2 Basis monomials. By [F3], for $n\ge1$ and $d\ge0$ the space $H^0(\mathbb P^n_k,\mathcal O(d))$ has as a $k$-basis the monomials $x^{\underline a}=x_0^{a_0}\cdots x_n^{a_n}$ with $a_i\ge0$ and $\sum_i a_i=d$, while $H^n(\mathbb P^n_k,\mathcal O(-n-1-d))$ has as a $k$-basis the Laurent monomials $x^{\underline e}=x_0^{e_0}\cdots x_n^{e_n}$ with every $e_i<0$ and $\sum_i e_i=-n-1-d$. [F3]

1.3 The coefficient isomorphism. At total degree $-n-1$ the conditions $e_i<0$ force $e_i=-1$ for every $i$, so [F3] identifies $H^n(\mathbb P^n_k,\mathcal O(-n-1))$ with $k$ by sending $x_0^{-1}\cdots x_n^{-1}$ to $1$. [F3]

1.4 The case $n=0$. By [F3], $\mathbb P^0_k=\operatorname{Spec}k$, $\mathcal O(d)\cong\mathcal O$ for every $d$, $H^0(\mathcal O(d))\cong k$, and all higher cohomology vanishes. The cup product in degree zero is the ordinary section product by [F1], so the pairing is multiplication $k\times k\to k$, perfect with dual basis $1$, and its compatibility identity is associativity of multiplication. [F1, F3]

2.1 Cup product with a section. Let $s\in H^0(\mathcal O(d))$ and let $m\in\mathbb Z$. The section $s$ determines a sheaf morphism $\sigma_s:\mathbb Z_{\mathbb P^n}\to\mathcal O(d)$ and hence a multiplication morphism $\mu_s:\mathcal O(m)\to\mathcal O(m+d)$, obtained by composing $\sigma_s\otimes\operatorname{id}$ with the tensor multiplication pairing. Apply naturality in [F1] to this square of tensor pairings and the unit class $1\in H^0(\mathbb Z_{\mathbb P^n})$: for every $\eta\in H^n(\mathcal O(m))$, the cup product $s\cup\eta$ equals $H^n(\mu_s)(\eta)$. Under the natural Čech comparison [F4], the latter map is computed on the standard cover by multiplying each Laurent Čech representative by $s$ on its intersection. In particular, for $m=-n-1-d$ and monomials $s=x^{\underline a}$, $\eta=x^{\underline e}$, the value of the pairing is the coefficient of $(x_0\cdots x_n)^{-1}$ in the Laurent product $x^{\underline a}x^{\underline e}$. [F1, F3, F4, step 1.1, step 1.3]

3.1 Monomial duality. Mapping $\underline a=(a_0,\dots,a_n)$ to $\underline e=(-1-a_0,\dots,-1-a_n)$ is a bijection from the nonnegative exponent vectors of total degree $d$ to the all-negative exponent vectors of degree $-n-1-d$, with inverse $e_i\mapsto-1-e_i$. For a matched pair the Laurent product is $(x_0\cdots x_n)^{-1}$, so the pairing value is $1$ by step 2.1. For any other basis vector $x^{\underline e'}$, the product $x^{\underline a+\underline e'}$ has exponent vector different from $(-1,\dots,-1)$, so its coefficient at that monomial is $0$. Thus the pairing matrix in the two finite monomial bases is the identity and the pairing is perfect. [step 1.2, step 1.3, step 2.1]

3.2 Compatibility with multiplication. Let $g$ be homogeneous of degree $\delta\ge0$, let $f=x^{\underline a}$, and let $\eta=x^{\underline e}$ be a basis element of $H^n(\mathcal O(-n-1-d-\delta))$. By step 2.1 applied first to $gf$ and then to $g$ and $f$ successively, both $\langle g\cdot f,\eta\rangle$ and $\langle f,g\cdot\eta\rangle$ are the coefficient of $(x_0\cdots x_n)^{-1}$ in $g x^{\underline a}x^{\underline e}$; associativity and commutativity of polynomial multiplication identify the two products. Bilinearity [F1] extends the identity to arbitrary $f$, $g$ and $\eta$. [F1, step 1.3, step 2.1]


4.1 Conclusion. Steps 1.2–3.2 prove the perfect pairing and multiplication compatibility for $n\ge1$, and step 1.4 covers $n=0$. The Axiom of Choice [F2] is inherited through the cup product [F1], the projective cohomology computation [F3], and the Čech comparison [F4]; no further choice is made. [F1, F2, F3, F4, step 1.2, step 1.3, step 2.1, step 3.1, step 3.2, step 1.4] ∎
