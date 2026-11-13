---
title: Collar and tail assembly of the exterior graph domain
status: published
research_item: lem-se-author-88d8498c76d6-exterior-graph-domain
dependency_level: 2
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-se-author-88d8498c76d6-weak-dirichlet-form](item-lem-se-author-88d8498c76d6-weak-dirichlet-form)
- [lem-se-author-88d8498c76d6-bounded-collar-h2](item-lem-se-author-88d8498c76d6-bounded-collar-h2)
- [lem-se-author-88d8498c76d6-tail-distribution-extension](item-lem-se-author-88d8498c76d6-tail-distribution-extension)
- [lem-se-author-88d8498c76d6-whole-space-h2](item-lem-se-author-88d8498c76d6-whole-space-h2)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)


## Statement

Assume AC and let $\Omega=\mathbb R^n\setminus\Theta$ be a smooth compact-obstacle exterior, $n\ge2$. Then
$$\{u\in H^1_0(\Omega):\Delta u\in L^2(\Omega)\}=H^2(\Omega)\cap H^1_0(\Omega).$$
For the shifted form operator $A=I-\Delta_D$ on this domain,
$$C^{-1}\|u\|_{H^2(\Omega)}\le\|Au\|_{L^2(\Omega)}\le C\|u\|_{H^2(\Omega)}.$$
The constants may depend on the fixed exterior geometry, but no non-trapping hypothesis is needed.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [lem-se-author-88d8498c76d6-weak-dirichlet-form](item-lem-se-author-88d8498c76d6-weak-dirichlet-form) identifies $D(A)$ with the weak Dirichlet domain and gives $\|u\|_{H^1}\le\|Au\|_2$.

[F3] [lem-se-author-88d8498c76d6-bounded-collar-h2](item-lem-se-author-88d8498c76d6-bounded-collar-h2) gives $\eta u\in H^2(G)$ with a bound by $\|\Delta u\|_2+\|u\|_{H^1}$.

[F4] [lem-se-author-88d8498c76d6-tail-distribution-extension](item-lem-se-author-88d8498c76d6-tail-distribution-extension) extends $(1-\eta)u$ with its distributional Laplacian, and [lem-se-author-88d8498c76d6-whole-space-h2](item-lem-se-author-88d8498c76d6-whole-space-h2) then gives its global $H^2$ regularity.

[F5] Write $H^k(U)=W^{k,2}(U;\mathbb C)$, $k=1,2$, using the weak derivatives and sum-of-squares norms of [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm). The space $H^1_0(U)=W^{1,2}_0(U;\mathbb C)$ is the $H^1$ norm closure of $C_c^\infty(U;\mathbb C)$ by [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). Their Countable Choice hypothesis is supplied by the AC assumption in [F1].

[F6] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) supplies a smooth compactly supported cutoff equal to one near a compact subset of an open Euclidean set, and a locally finite smooth partition subordinate to any open cover. On a compact test support only finitely many members of that partition contribute.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 Choose $L>0$ with $\Theta\Subset B_L$ and, by [F6] with compact set $\Theta\subset B_L$, choose $\eta\in C_c^\infty(B_L)$ equal to $1$ near $\Theta$. Put $G=B_L\setminus\Theta$, exactly as in [F3]. Let $u$ belong to the weak domain and put $g=\Delta u$. The collar lemma gives $w=\eta u\in H^2(G)$ and $\|w\|_{H^2(G)}\le C(\|g\|_2+\|u\|_{H^1})$. Define $\widetilde w=w$ on $G$ and zero on $\Omega\setminus G$. The two open sets $G$ and $\Omega\setminus\operatorname{supp}\eta$ cover $\Omega$. On the second set $\widetilde w$ is identically zero, and on the overlap $w$ and all its weak derivatives through order two vanish. For each compactly supported test on $\Omega$, a subordinate smooth partition from [F6] has only finitely many terms meeting its support. Applying the weak derivative identities on each open piece and summing proves the global weak identities; thus $\widetilde w\in H^2(\Omega)$, with each derivative given by zero extension of the corresponding derivative on $G$ and with unchanged component norms. This extends only across the artificial sphere, not across the obstacle. [F3, F5, F6, given, construct]

2.1 The tail lemma and whole-space Fourier lemma give a function $v\in H^2(\mathbb R^n)$ with $v|_\Omega=(1-\eta)u$ and $\|v\|_{H^2}\le C(\|g\|_2+\|u\|_{H^1})$. Adding the extended collar part to $v|_\Omega$ gives $u\in H^2(\Omega)$ and $\|u\|_{H^2}\le C(\|g\|_2+\|u\|_{H^1})$. Conversely $u\in H^2\cap H^1_0$ has $\Delta u\in L^2$ by its weak derivatives, so the two domains coincide. [F3, F4, F5, step 1.1]

3.1 For $u\in D(A)$, the weak form bound gives $\|u\|_2\le\|u\|_{H^1}\le\|Au\|_2$, while $g=u-Au$ gives $\|g\|_2\le2\|Au\|_2$. Substitution in the preceding estimate proves $\|u\|_{H^2}\le C\|Au\|_2$. In the other direction $\|Au\|_2=\|u-\Delta u\|_2\le C_n\|u\|_{H^2}$. These are the stated graph-norm comparisons. [F2, F5, step 2.1, algebra] ∎
