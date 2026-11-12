---
id: lem-author-8a080e7d9445-degree-seven-les
kind: lemma
title: The support long exact sequence kills degree seven
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-8a080e7d9445-support-fiber
  - lem-author-8a080e7d9445-chow-restriction
  - prop-smooth-motivic-comparison
  - lem-fiber-sequence-homotopy-exactness
  - lem-author-8a080e7d9445-geometry
  - def-cohomology-with-support
  - def-motivic-cohomology
  - def-article-conventions
  - math:def-smooth-locus-morphism
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-8a080e7d9445-support-fiber: mathematical-premise
  lem-author-8a080e7d9445-chow-restriction: mathematical-premise
  prop-smooth-motivic-comparison: mathematical-premise
  lem-fiber-sequence-homotopy-exactness: mathematical-premise
  lem-author-8a080e7d9445-geometry: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-smooth-locus-morphism: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied comparisons. Let $k$ be an algebraically closed field, let $X$ be an affine finite-type $k$-scheme of dimension three, put $U=X_{\mathrm{smooth}/k}$, and let $T\subset X$ be a closed subset contained in $U$. Use the reduced structure on $T$ when a scheme structure is needed. Put $V=U\setminus T$ and $W=X\setminus T$. For the actual motivic support fiber on $U$ in weight three, its degree-seven group is zero. Via excision the same holds for support $T$ on $X$.

## Facts & Assumptions
**Given:** $k,X,U,T,V,W$ and the choice and size assumptions of the statement.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] The actual support-fiber equivalence and excision are supplied by [[lem-author-8a080e7d9445-support-fiber]]. Surjectivity of the actual motivic restriction in degree six is supplied by [[lem-author-8a080e7d9445-chow-restriction]]. The natural long exact sequence of the homotopy groups of a spectral fiber sequence is supplied by [[lem-fiber-sequence-homotopy-exactness]]; exactness means image equals kernel.

[F2] [[prop-smooth-motivic-comparison]] gives $H^{7,3}_{\mathrm{mot}}(U,\mathbb Z)=0$ for the smooth finite-type $U$: the higher Chow index is $2\cdot3-7=-1$, and negative cycle homology is zero.

[F3] The assumed Axiom of Choice, [[math:def-axiom-of-choice]], discharges the foundational hypotheses of the support and Chow suppliers in [F1], the smooth comparison in [F2], the geometry in [F4] and the support definition in [F6], invoked in step 1.1. The following exact-sequence deduction makes no additional choice.

[F4] [[lem-author-8a080e7d9445-geometry]] establishes that $X,U,V,W$ are qcqs, that $U,V$ are smooth separated finite type over $k$, and that $U,V,W$ have their open subscheme structures. It also supplies the reduced induced structure on $T$ when needed and verifies local finite presentation of $X\to\operatorname{Spec}k$.

[F5] [[def-article-conventions]] supplies the algebraically closed field, affine finite-type scheme and chain-dimension conventions. The notation $X_{\mathrm{smooth}/k}$ denotes the smooth locus of $X\to\operatorname{Spec}k$ in [[math:def-smooth-locus-morphism]]; its local finite-presentation hypothesis and open scheme structure are supplied by [F4].

[F6] [[def-motivic-cohomology]] defines $H^{a,3}_{\mathrm{mot}}(Y,\mathbb Z)=H^a(\mathbb Z(3)_{\mathrm{mot}}(Y))$ and its restriction maps. Write $M_3(Y)$ for the unshifted Eilenberg–Mac Lane realization of this complex. [[def-cohomology-with-support]] identifies $\pi_{-a}M_3(Y)$ with this global group on qcqs schemes and defines $H^{a,3}_{\mathrm{mot},T}(U,\mathbb Z)=\pi_{-a}\operatorname{fib}(M_3(U)\to M_3(V))$. Its support-to-global map is the first fiber arrow. The fixed universe and site-size bounds are those of these supplied interfaces; only qcqs opens occur here.

## Proof
1.1 By [F4] and [F5], the actual schemes $U,V$ are smooth finite type over $k$ and all the schemes used are qcqs. With the inherited assumptions in [F3], form $S=\operatorname{fib}(M_3(U)\to M_3(V))$ as in [F6]. Apply spectral exactness [F1] to $S\to M_3(U)\to M_3(V)$, using $i=-6$ and $\pi_{-a}=H^{a,3}$ from [F6]. This gives $H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)\to H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)\to H^{7,3}_{\mathrm{mot},T}(U,\mathbb Z)\to H^{7,3}_{\mathrm{mot}}(U,\mathbb Z)$ for the actual restriction and support maps. The first arrow is surjective by the Chow-restriction supplier in [F1], and the last group is zero by [F2]. [given, F1, F2, F3, F4, F5, F6]

2.1 Surjectivity of the first arrow and exactness at $H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)$ make the connecting homomorphism zero. The map from $H^{7,3}_{\mathrm{mot},T}(U,\mathbb Z)$ to the zero last group has the whole supported group as its kernel; exactness identifies that kernel with the zero image of the connecting homomorphism. Thus the supported group on $U$ is zero. The actual excision equivalence in [F1] identifies it with $H^{7,3}_{\mathrm{mot},T}(X,\mathbb Z)$, proving the claim on $X$ as well. [F1, F6, step 1.1] ∎
