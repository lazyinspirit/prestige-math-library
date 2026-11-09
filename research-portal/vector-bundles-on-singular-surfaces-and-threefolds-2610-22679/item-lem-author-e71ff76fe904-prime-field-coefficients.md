---
title: Prime-field restriction and the intrinsic étale coefficient complex
status: draft
research_item: lem-author-e71ff76fe904-prime-field-coefficients
dependency_level: 12
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-etale-tate-coefficients](item-def-etale-tate-coefficients)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)


## Statement
Assume the Axiom of Choice and compatible fixed universe size bounds for the small sites and derived categories used below. Let $k$ have prime subfield $F$, let $X/k$ be qcqs, $j\geq0$, and let $n\geq1$ be invertible in $k$. Then $X$ is a qcqs $F$-scheme, $n$ is invertible in $F$, and the completed motivic complex at $X$ is the actual source value $M_j(X)=\mathbb Z(j)_{\mathrm{mot},F}(X)$. Put $B_j(X)=R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j})$, using the intrinsic small étale site of $X$ and the specified tensor powers over $\mathbb Z/n$. Forgetting the k-structure changes neither this site nor its coefficient sheaf or derived evaluation. Thus the source complex $B_j(X)$ is exactly the completed local étale target, with its pullbacks.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[A1] The Axiom of Choice and the fixed size bounds are retained for the K-injective derived-evaluation interface invoked in step 2.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [def-motivic-cohomology](item-def-motivic-cohomology) fixes prime-field restriction of the motivic functor, and [def-etale-tate-coefficients](item-def-etale-tate-coefficients) fixes the intrinsic small étale site and tensor powers.

[F2] Under [A1], [def-derived-sections-on-sites](item-def-derived-sections-on-sites) computes derived evaluation by a K-injective resolution on that chosen small site.

## Proof
1.1 Quasi-compactness and quasi-separatedness belong to the underlying scheme, so forgetting to $F$ gives a source object. If $\operatorname{char}k=p>0$, invertibility of $n$ means $p\nmid n$, hence invertibility in $F=\mathbb F_p$; if the characteristic is zero, every positive integer is invertible in $F=\mathbb Q$. The motivic identification is the defining precomposition of [F1]. [F1]

2.1 An object of the small étale site is an étale morphism $U\to X$, and its covers and morphisms are defined over $X$. This category, its topology and the equation $u^n=1$ on its objects do not mention the presentation of $X$ over $k$ or $F$. The tensor powers, including the zeroth power $\mathbb Z/n$, are therefore the same sheaves. Retain the same size-bounded small site in both presentations. Under [A1], apply the K-injective derived-evaluation interface of [F2] to this same site and sheaf; the resulting derived-category value is independent of the resolution. Pullback along a $k$-morphism uses the same underlying morphism and coefficient maps after forgetting. This proves the claim about actual functors, not only abstract group isomorphisms. [A1, F1, F2, step 1.1] ∎
