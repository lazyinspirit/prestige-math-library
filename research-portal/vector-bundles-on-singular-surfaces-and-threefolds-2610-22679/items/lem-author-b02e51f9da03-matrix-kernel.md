---
id: lem-author-b02e51f9da03-matrix-kernel
kind: lemma
title: Stable triviality as the kernel of a right-invertible matrix
status: published
domain: mathematics
deps:
  - def-stably-free-bundles
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
dependency_roles:
  def-stably-free-bundles: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Assume AC. Let $X=\operatorname{Spec}A$, and let $E$ be a bundle of constant rank $r$. Then $E$ is stably trivial if and only if, for some $N\geq0$, it is the bundle associated to $\ker q$ for an $A$-linear map $q:A^{r+N}\to A^N$ admitting a right inverse $j:A^N\to A^{r+N}$, $qj=\operatorname{id}$. Such a map is a **right-invertible matrix** after the standard free bases are fixed. Its kernel $P$ is finite projective of rank $r$, with actual splitting $P\oplus A^N\xrightarrow{\sim}A^{r+N}$ given by $(v,w)\mapsto v+j(w)$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement, AC and the article's fixed universe bounds where its K-theory is used.

**Goal:** Establish the stated conclusion.

[F1] Stable triviality means an actual isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$ for some N. [[def-stably-free-bundles]]

[F2] The affine equivalence preserves rank, direct sums and actual bundle/module isomorphisms. [[lem-affine-bundle-module-interface]]

## Proof

1.1 If $E$ is stably trivial, use [F2] to obtain an isomorphism $\alpha:P\oplus A^N\to A^{r+N}$, where $P=\Gamma(X,E)$. Transport projection onto $A^N$ and its standard section through $\alpha$; they give $q=\operatorname{pr}_2\alpha^{-1}$ and $j(w)=\alpha(0,w)$. Then $qj=\operatorname{id}$ and $\alpha(P\oplus0)=\ker q$. [F1, F2, construct]

2.1 Conversely, if $qj=\operatorname{id}$, the displayed splitting has inverse $z\mapsto(z-jq(z),q(z))$. The first coordinate is in $\ker q$. Hence this kernel is a direct summand of a finite free module, thus finite projective. Localize the decomposition at each prime; its local free rank is $(r+N)-N=r$. By [F2] its associated bundle, stabilized by the indicated trivial bundle, is trivial. [F1, F2, step 1.1, algebra] ∎
