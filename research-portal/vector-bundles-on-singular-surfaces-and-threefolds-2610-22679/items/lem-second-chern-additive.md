---
id: lem-second-chern-additive
kind: lemma
title: Second Chern additivity on the second piece
status: published
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-actual-cartan
  - lem-author-ec13f1db88a5-global-picard-projection
  - prop-first-chern-determinant
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-9b6cb358ddc9-actual-cartan: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel and Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Section 5, Lemma 5.3, page 11
dependency_level: 24
---

## Statement
Assume AC and the fixed site/universe bounds. Let $k$ be algebraically closed and $X$ a normal qcqs $k$-scheme. For perfect-complex $K_0$ the actual global operation restricts to a homomorphism
$$c_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z).$$
For every bundle difference $[V]-[W]$ in this piece, $c_2([V]-[W])=c_2(V)-c_2(W)$. There is no finite-type, noetherian, finite-dimensional or global bundle-representation hypothesis. In fact the same conclusion holds on every qcqs scheme over any field with these operations and conventions.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated size bounds. Choice and the fixed size bounds are inherited from the actual first-layer comparison in [F2] at step 1.1 and the perfect Cartan and inversion operations in [F1] at steps 2.1–3.1.

**Given:** The stated scheme, conventions, and the second image subgroup $H$.

**Goal:** Prove the claim for actual perfect classes, including those without global bundle-difference representatives.

[F1] [[lem-author-9b6cb358ddc9-actual-cartan]] supplies actual perfect Cartan through degree three on all qcqs field-schemes, with zero normalization and formal inversion.

[F2] [[def-motivic-filtration]] defines the nested image subgroups. [[lem-filtered-stage-exact-sequence]] makes the composite from the second stage to the first layer zero. [[lem-author-ec13f1db88a5-global-picard-projection]] and [[prop-first-chern-determinant]] identify this layer on the rank-zero fiber with the actual first Chern class, naturally and in full qcqs scope.

## Proof
1.1 For $x\in H$ choose a second-stage representative and map it to the first stage. Its first-layer value is zero by the consecutive fiber sequence in [F2], and its augmentation is $x$. The actual first-layer identification in [F2] gives $c_1(x)=0$. The same holds for every element of $H$, an additive subgroup by definition. [A1, F2, given]

2.1 For $x,y\in H$, the degree-two identity in [F1] gives $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)=c_2(x)+c_2(y)$. Pointedness gives $c_2(0)=0$; taking $y=-x$ gives inverse preservation. Thus this restriction is a homomorphism. [A1, F1, step 1.1]

3.1 If $[V]-[W]\in H$, additivity of the first class in [F2] gives $c_1(V)=c_1(W)$. Cartan and inversion in [F1] give $c_2([V]-[W])=c_2(V)-c_1(V)c_1(W)+c_1(W)^2-c_2(W)$, which is the stated formula. This proves the special bundle formula without assuming all perfect classes have that form. [A1, F1, F2, step 1.1, step 2.1] ∎
