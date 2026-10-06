---
id: lem-the-reduced-burau-module-is-free-of-rank-n-minus-one
kind: lemma
title: "The reduced Burau module is free of rank n minus one"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-reduced-burau-homology-module
  - lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine
  - lem-units-and-powers-of-the-laurent-polynomial-ring
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen J. Bigelow, The Burau representation is not faithful for n = 5, Geometry & Topology 3 (1999) 397-404, Definition 1.1, Theorems 1.2 and 1.4 (printed pp. 397-399)"
      url: "https://arxiv.org/pdf/math/9904100"
      locator: "Definition 1.1 and the introduction, printed pp. 397-398"
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Section 2, printed pp. 1-5"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$ be the reduced Burau module over
$\Lambda_1=\mathbb Z[t^{\pm1}]$ of [[def-reduced-burau-homology-module]], with
the $\Lambda_1$-action induced by the deck generator $t$. Then
$M_{\mathrm{red}}$ is a free $\Lambda_1$-module of rank $n-1$. The freeness is
realised on the lifted spine $\Sigma$ of
[[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]]:
transporting the isomorphism $H_1(\tilde X)\cong H_1(\Sigma)$ along the
cellular computation there, $M_{\mathrm{red}}$ has the $\Lambda_1$-basis given
by the absolute cycle classes $\epsilon_i-\epsilon_n$, $1\le i\le n-1$, where
$\epsilon_i=e_i^{(0)}$ is the level-$0$ lifted spine edge in the notation of
that lemma (the generators of the cellular chain module $C_1(\Sigma)$ declared
at level $0$). In particular the free rank equals $n-1$, and the deck generator
acts by $t\cdot(\epsilon_i-\epsilon_n)=\epsilon_i^{(1)}-\epsilon_n^{(1)}$, the
level-$1$ classes. No choice principle is used.

## Facts & Assumptions

**Given:** $n\ge1$, the Burau cover $p:\tilde X\to X$ with deck generator $t$, the lifted spine $\Sigma$ of [[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]] with its level-$k$ edge classes $e_i^{(k)}$, and the reduced Burau module $M_{\mathrm{red}}=H_1(\tilde X;\mathbb Z)$ with its $\Lambda_1$-action $t\mapsto(T_t)_*$.

[F1] The lifted spine has the cellular chain complex
$C_1(\Sigma)=\bigoplus_{i=1}^n\Lambda_1e_i$,
$C_0(\Sigma)=\Lambda_1v$, $\partial_1e_i=(t-1)v$, where
$e_i=e_i^{(0)}$ and $v=v_0$; consequently
$$H_1(\Sigma)=\ker\partial_1=\bigoplus_{i=1}^{n-1}\Lambda_1(e_i-e_n)$$
is a free $\Lambda_1$-module of rank $n-1$, and the deck action on the
cellular chains satisfies $t\cdot e_i^{(k)}=e_i^{(k+1)}$
([[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]]).

[F2] There is an isomorphism of $\Lambda_1$-modules $\Phi:H_1(\Sigma)\to H_1(\tilde X)=M_{\mathrm{red}}$, induced by the deck-equivariant homotopy equivalence $(\tilde X,p^{-1}d)\to(\Sigma,\Sigma^0)$, where the module structures are those induced by the deck actions ([[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]], [[def-reduced-burau-homology-module]]).

[F3] $\Lambda_1$ is an integral domain and $t-1\ne0$ ([[lem-units-and-powers-of-the-laurent-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 *The homology of the spine.* By [F1] the cellular chain module is free on $e_1,\dots,e_n$ over $\Lambda_1$ with $\partial_1e_i=(t-1)v$, and $H_1(\Sigma)$ is the kernel of $\partial_1$; as computed in [F1] this kernel is exactly the direct sum of the rank-one free submodules $\Lambda_1(e_i-e_n)$, $1\le i\le n-1$, so $H_1(\Sigma)$ is free of rank $n-1$ with basis the classes of $e_i-e_n$. [F1, F3]

2.1 *Transport to $M_{\mathrm{red}}$.* The $\Lambda_1$-module isomorphism $\Phi$ of [F2] carries the basis classes of $e_i-e_n$ in $H_1(\Sigma)$ to linearly independent $\Lambda_1$-generators of $M_{\mathrm{red}}$: the inverse image of any $\Lambda_1$-linear relation among the images would be a relation among the $e_i-e_n$ in the free module $H_1(\Sigma)$. Hence $M_{\mathrm{red}}$ is free of rank $n-1$ with the transported basis, as asserted. [F2, step 1.1]

3.1 *The deck action on the basis.* Since $t\cdot e_i=e_i^{(1)}$ in the cellular chain module by [F1], the cycle $t\cdot(e_i-e_n)$ is $e_i^{(1)}-e_n^{(1)}$; as these are the level-$1$ classes, the deck generator acts on the spine basis by $t\cdot(\epsilon_i-\epsilon_n)=\epsilon_i^{(1)}-\epsilon_n^{(1)}$, and by $\Lambda_1$-linearity of $\Phi$ the same formula holds for the transported basis of $M_{\mathrm{red}}$. [F1, F2, step 2.1]

4.1 *Conclusion.* The module $M_{\mathrm{red}}$ is free of rank $n-1$ with basis the classes $\epsilon_i-\epsilon_n$ ($1\le i\le n-1$), and the deck generator acts by the level-one classes; no choice principle was used, the whole argument being the transport of the cellular computation of [F1] along the deck-equivariant isomorphism of [F2]. [step 1.1, step 2.1, step 3.1] ∎
