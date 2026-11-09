---
id: lem-author-3cde9692a7e9-second-subgroup
kind: lemma
title: Apply the actual perfect Cartan identity to the second image
status: draft
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-actual-cartan
  - lem-second-piece-rank-determinant
  - def-motivic-filtration
  - lem-author-9b6cb358ddc9-local-chains
  - lem-author-ec13f1db88a5-global-picard-projection
  - prop-first-chern-determinant
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-9b6cb358ddc9-actual-cartan: mathematical-premise
  lem-second-piece-rank-determinant: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-author-9b6cb358ddc9-local-chains: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 25
---

## Statement
Assume the Axiom of Choice and fix the site and universe bounds of the supplied perfect K-theory, motivic filtration and Chern-operation constructions. Let $k$ be algebraically closed and let $X$ be a normal quasi-compact quasi-separated (qcqs) $k$-scheme. The actual second motivic Chern operation restricts to a group homomorphism
$$c_2:H=F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z).$$
In particular $c_2(0)=0$ and $c_2(-x)=-c_2(x)$ for $x\in H$. Whenever $[V]-[W]\in H$ for vector bundles $V,W$ on $X$, one has $c_2([V]-[W])=c_2(V)-c_2(W)$, with their original bundle Chern coefficients.

Here $K_0(X)$ is the zeroth homotopy group of nonconnective K-theory of perfect complexes, and $H$ is the image of the second filtration stage in that group. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves; a vector bundle is a finite locally free sheaf. Normality means that every local ring is an integrally closed domain. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that intersections of affine opens are quasi-compact. No finite-type, noetherian, dimension or global bundle-representation hypothesis is required.

## Facts & Assumptions
[A1] The Axiom of Choice, as formulated in [[math:def-axiom-of-choice]], and the fixed site and universe bounds are inherited by the supplied perfect-category realizations, motivic constructions and local integral-chain comparisons. They are used when invoking those suppliers in steps 1.1–3.1; choosing a lift of one image element is not itself an arbitrary-index choice argument.

[F1] [[lem-author-9b6cb358ddc9-actual-cartan]] supplies coefficientwise Cartan for the actual perfect operations on every qcqs field-scheme through degree three, with zero normalization and formal inversion. Write $C_1$ for its first operation until it is matched with the perfect first-layer class; its second operation is the specified $c_2$.

[F2] [[lem-second-piece-rank-determinant]] supplies rank zero and $c_1^{\mathrm{perf}}(x)=0$ for every $x\in H$ in precisely this normal qcqs scope. [[def-motivic-filtration]] defines $H$ as an additive image subgroup.

[F3] [[lem-author-ec13f1db88a5-global-picard-projection]] identifies the actual first-layer map on the rank-zero K-space $S$ with the perfect determinant/Picard map, including its global descent data. [[prop-first-chern-determinant]] identifies its oriented class with $c_1^{\mathrm{perf}}$ and matches the original bundle first classes. [[thm-author-d026a7b99ace-universal-chern-space]] constructs the actual $C_i$ from those original stable universal bundle classes: their restriction to the stable free-class map is the original classifying map, including the determinant-torsor normalization in weight one. Thus on actual bundles their coefficients are the original ones.

[F4] [[lem-author-9b6cb358ddc9-local-chains]] supplies, on the small Zariski site of every qcqs field-scheme, detection of derived sheaf-map classes into the actual Eilenberg targets by precomposition with the rank-zero free-class map $j_0:BGL\to S$. This is a local integral-chain comparison, with no dimension or global bundle-generation hypothesis.


**Given:** $k,X,H$, Choice and the fixed site and universe bounds as stated.

**Goal:** Establish additivity for arbitrary second-image perfect classes and retain the conditional bundle-difference formula.

## Proof
1.1 Restrict $C_1$ to $S$ and compare it with the actual first-layer determinant/Picard map, with target identified with the weight-one Eilenberg target by its specified positive orientation. After precomposition with $j_0$, both maps are the oriented determinant-torsor map of the stable universal bundle by [F3], including its automorphism and gluing maps. The derived-map detection in [F4] identifies these maps on $S$. Evaluation on $X$ therefore identifies $C_1(x)$ with $c_1^{\mathrm{perf}}(x)$ for every rank-zero perfect class $x$; this is an equality of actual map classes, rather than a deduction from local Picard-group agreement. [A1, F1, F3, F4]

2.1 Every $x\in H$ has rank zero and $c_1^{\mathrm{perf}}(x)=0$ by [F2]. Step 1.1 consequently gives $C_1(x)=0$ for every such $x$. This uses the full-qcqs supplier and no global bundle representative. [A1, F2, step 1.1]

3.1 For $x,y\in H$, [F1] gives $c_2(x+y)=c_2(x)+C_1(x)C_1(y)+c_2(y)$. The cross term vanishes by step 2.1. Pointedness gives $c_2(0)=0$; since $H$ is a subgroup, applying additivity to $x+(-x)$ yields $c_2(-x)=-c_2(x)$. Thus the restriction is a group homomorphism. [A1, F1, F2, step 2.1]

4.1 Suppose $[V]-[W]\in H$. Additivity of $c_1^{\mathrm{perf}}$ and its bundle agreement in [F3], together with [F2], give $c_1(V)=c_1(W)$. On bundle classes the coefficients in [F1] are the original ones by [F3]. Degree-two inversion gives $c_2(-[W])=c_1(W)^2-c_2(W)$, and Cartan therefore gives $c_2([V]-[W])=c_2(V)-c_1(V)c_1(W)+c_1(W)^2-c_2(W)$. The equal first classes cancel the quadratic terms, proving the stated formula. Only this conditional assertion uses the supplied bundle-difference representation. [A1, F1, F2, F3, step 3.1] ∎

This restores the normal qcqs scope of the supplied article's p. 3 conventions and p. 11 Lemma 5.3. The actual full-scope Cartan, first-layer and local-chain suppliers are used with their stated hypotheses; their deep constructions are not reconstructed or independently judged here. The earlier total-Cartan supplier's noetherian finite-dimensional consequence is not extended by assertion. The original article's blanket bundle-representation premise remains a source proof defect, distinct from this perfect-class proof and its conditional bundle formula.

## Scope and reading limits
This restores the normal qcqs scope of the supplied article's p. 3 conventions and p. 11 Lemma 5.3. The actual full-scope Cartan, first-layer and local-chain suppliers are used with their stated hypotheses; their deep constructions are not reconstructed or independently judged here. The earlier total-Cartan supplier's noetherian finite-dimensional consequence is not extended by assertion. The original article's blanket bundle-representation premise remains a source proof defect, distinct from this perfect-class proof and its conditional bundle formula.
