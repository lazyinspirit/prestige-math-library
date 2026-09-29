---
id: thm-serre-duality-projective-space-twisting-sheaves
kind: theorem
title: Serre duality for twisting sheaves on projective space
status: draft
origin: pipeline
landmark: true
deps:
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - lem-projective-space-top-cohomology-residue-pairing
  - thm-cohomology-projective-space-twisting-sheaves
  - def-cup-product-sheaf-cohomology
  - thm-cup-product-graded-associative-natural
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "R. Hartshorne, Algebraic Geometry"
      url: https://doi.org/10.1007/978-1-4757-3849-0
      locator: "Chapter III, Section 5 (cohomology of projective space), Section 7 (Serre duality), Theorem 7.1 and Example 7.1.1"
    - title: "The Stacks Project, Cohomology of Schemes"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 30 (tags 0FD4-0FD7) and the duality section (tags 0FV2, 0G4M)"
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, $n\ge0$ and let
$\omega_{\mathbb P^n}=\mathcal O(-n-1)$ be the dualizing line bundle of
$\mathbb P^n_k$ with the Laurent-coefficient residue trace
$$t_{\mathbb P^n}:H^n(\mathbb P^n_k,\mathcal O(-n-1))\longrightarrow k$$
of [[def-smooth-projective-dualizing-line-bundle-and-trace]]. Then for every
integer $d$ and every $q\in\{0,\dots,n\}$ the evaluation pairing
$$H^q(\mathbb P^n_k,\mathcal O(d))\times H^{n-q}(\mathbb P^n_k,\mathcal O(-d-n-1))\longrightarrow k,\qquad (\alpha,\beta)\longmapsto t_{\mathbb P^n}(\alpha\cup\beta),$$
formed with the cup product for the multiplication pairing
$\mathcal O(d)\otimes_{\mathbb Z}\mathcal O(-d-n-1)\to\mathcal O(-n-1)$, is a
perfect pairing of $k$-vector spaces.

## Facts & Assumptions

**Given:** the field $k$, the integer $n\ge0$, the projective space $\mathbb P^n_k$ with twisting sheaves $\mathcal O(d)$, the dualizing bundle $\omega_{\mathbb P^n}=\mathcal O(-n-1)$, its residue trace $t_{\mathbb P^n}$, and the in-run cohomology computation [[thm-cohomology-projective-space-twisting-sheaves]].

[F1] The dualizing line bundle of $\mathbb P^n_k$ is $\omega_{\mathbb P^n}=\mathcal O(-n-1)$, and the residue trace $t_{\mathbb P^n}$ is the $k$-linear map $H^n(\mathbb P^n_k,\mathcal O(-n-1))\to k$ which on the monomial basis sends the class with Laurent tail $(x_0\cdots x_n)^{-1}$ to $1$. ([[def-smooth-projective-dualizing-line-bundle-and-trace]])

[F2] For abelian sheaves with a tensor pairing $\mu:\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal H$ on a space $X$ there is a cup product $H^p(X,\mathcal F)\times H^q(X,\mathcal G)\to H^{p+q}(X,\mathcal H)$, bilinear and natural in the pairing and sheaf maps. The constant class $1\in H^0(X,\mathbb Z_X)$ acts by both the left and right tensor-unit isomorphisms. ([[def-cup-product-sheaf-cohomology]], [[thm-cup-product-graded-associative-natural]])

[F3] For $n\ge1$ and $d\ge0$ the pairing $H^0(\mathbb P^n_k,\mathcal O(d))\times H^n(\mathbb P^n_k,\mathcal O(-n-1-d))\to k$ given by the cup product for $\mathcal O(d)\otimes\mathcal O(-n-1-d)\to\mathcal O(-n-1)$ followed by $t_{\mathbb P^n}$, equivalently by the coefficient of $(x_0\cdots x_n)^{-1}$ in the product of monomials, is a perfect $k$-bilinear pairing, compatible with multiplication by homogeneous polynomials; for $n=0$ it is ordinary multiplication $k\times k\to k$. ([[lem-projective-space-top-cohomology-residue-pairing]])

[F4] The Axiom of Choice is [[def-axiom-of-choice]].

[F5] For $n\ge1$ and any integer $m$, $H^q(\mathbb P^n_k,\mathcal O(m))=0$ for $0<q<n$; $H^0(\mathcal O(m))=0$ when $m<0$; and $H^n(\mathcal O(m))=0$ when $m>-n-1$. For $n=0$, $\mathbb P^0_k=\operatorname{Spec}k$, every twist is trivial and only $H^0\cong k$ is nonzero. ([[thm-cohomology-projective-space-twisting-sheaves]])

## Proof

1.1 The pairing is well defined. Sheaf multiplication $\mathcal O(d)\otimes_{\mathbb Z}\mathcal O(-d-n-1)\to\mathcal O(-n-1)$ gives by [F2] a bilinear cup product into $H^n(\mathcal O(-n-1))$; composing with the $k$-linear residue trace [F1] gives the displayed pairing. It is $k$-bilinear: multiplication by $\lambda\in k$ on either twist sheaf commutes with the tensor pairing, so naturality of the cup product [F2] carries the scalar action on either argument to multiplication by $\lambda$ on the target. [F1, F2]

1.2 Vanishing in the middle degrees. By [F5], for $n\ge1$ both $H^q(\mathcal O(d))$ and $H^{n-q}(\mathcal O(-d-n-1))$ vanish whenever $0<q<n$, because both cohomological degrees lie strictly between $0$ and $n$. Their zero-space pairing is perfect. The remaining degrees are $q=0$ and $q=n$. [F5]

1.3 The case $q=0$. If $d\ge0$, this is precisely the perfect residue pairing of [F3]. If $d<0$, then $H^0(\mathcal O(d))=0$ by [F5], while $-d-n-1>-n-1$, so $H^n(\mathcal O(-d-n-1))=0$ by [F5]; the pairing of two zero spaces is perfect. [F3, F5]

1.4 The case $q=n$. If $d\le-n-1$, put $d'=-d-n-1\ge0$. For $s\in H^0(\mathcal O(d'))$ and $\eta\in H^n(\mathcal O(-n-1-d'))$, [F3] identifies $t_{\mathbb P^n}(s\cup\eta)$ with the perfect residue pairing. The exchanged cup product $\eta\cup s$ has the same image: the section $s$ defines a sheaf map $\sigma_s:\mathbb Z_{\mathbb P^n}\to\mathcal O(d')$ and multiplication $\mu_s:\mathcal O(-n-1-d')\to\mathcal O(-n-1)$; naturality in [F2] applied to $\operatorname{id}\otimes\sigma_s$ and the right-unit class gives $\eta\cup s=H^n(\mu_s)(\eta)$, while the left-unit argument of [F3] gives $s\cup\eta=H^n(\mu_s)(\eta)$ because sheaf multiplication is commutative. Thus the exchanged pairing is perfect. If $d>-n-1$, then $H^n(\mathcal O(d))=0$ and $-d-n-1<0$ gives $H^0(\mathcal O(-d-n-1))=0$ by [F5], so the pairing is perfect vacuously. [F2, F3, F5]

1.5 The case $n=0$. By [F5], $\mathbb P^0_k=\operatorname{Spec}k$ and every twist has $H^0\cong k$ with no higher cohomology. The trace [F1] and degree-zero cup product [F2] make the pairing ordinary multiplication $k\times k\to k$, perfect with dual basis $1$, as also recorded in [F3]. [F1, F2, F3, F5]

2.1 Conclusion. Steps 1.1–1.5 cover bilinearity, the middle degrees, both extremes for $n\ge1$, and $n=0$. AC [F4] is inherited through the cup product [F2] and the projective-space cohomology and residue suppliers [F3, F5]; no additional selection is made. [F1, F2, F3, F4, F5, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
