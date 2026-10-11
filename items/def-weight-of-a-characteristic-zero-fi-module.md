---
id: def-weight-of-a-characteristic-zero-fi-module
kind: definition
title: "Weight of an FI-module over a field of characteristic zero"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-fi-category-and-fi-module,
       def-first-row-padding-of-a-partition,
       thm-complex-specht-modules-are-irreducible,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       def-quotient-module,
       def-submodule]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Definition 2.2.5 (the padded irreducible $V(\\lambda)_n$ and the uniqueness of the labelling), printed pp. 13–14; Definition 3.2.1 (weight, the $V=0$ convention, the value $\\infty$, and subquotient monotonicity), printed p. 18"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "§1, printed p. 2: the same characteristic-zero convention in the companion paper"
---

## Definition

Let $k$ be a field of characteristic $0$ and let $V$ be an FI-module over $k$
([[def-fi-category-and-fi-module]]). For a partition $\lambda$ and
$n\ge|\lambda|+\lambda_1$ put $\lambda[n]:=(n-|\lambda|,\lambda_1,\lambda_2,\dots)$,
the first-row padding ([[def-first-row-padding-of-a-partition]]), with
$|\varnothing|=\varnothing_1=0$ and $\varnothing[0]=\varnothing$, and let

$$V(\lambda)_n:=k\otimes_{\mathbb Q}S^{\lambda[n]}_{\mathbb Q}$$

be the scalar extension of the rational Specht model of $\lambda[n]$
([[thm-complex-specht-modules-are-irreducible]],
[[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).
By the classification lemma, $V(\lambda)_n$ is the irreducible $kS_n$-module
with label $\lambda[n]$, and every irreducible $kS_n$-module is isomorphic to
exactly one $V(\lambda)_n$: indeed, every partition $\mu=(\mu_1,\mu_2,\dots)$
of $n$ is uniquely $\lambda[n]$ for the partition
$\lambda=(\mu_2,\mu_3,\dots)$ obtained by deleting the first row, and
$n\ge|\lambda|+\lambda_1$ holds precisely because $\mu_1\ge\mu_2$;
consequently the labels $\lambda[n]$ run over the partitions of $n$ without
repetition. At $n=0$ the only label and its tail are both $\varnothing$,
and $V(\varnothing)_0=k$ with the trivial $S_0$-action.

Say that $V(\lambda)_n$ **occurs as a constituent** of $V_n$ when there are
$kS_n$-submodules $U\subseteq W\subseteq V_n$ with
$W/U\cong V(\lambda)_n$ ([[def-submodule]], [[def-quotient-module]]); this is a
condition on subquotients and requires no decomposition or finite-dimensionality
of $V_n$. The **weight** of $V$ is

$$\operatorname{weight}(V):=\sup\bigl\{|\lambda|:V(\lambda)_n\text{ occurs as a constituent of }V_n\text{ for some }n\ge|\lambda|+\lambda_1\bigr\},$$

the supremum over all pairs $(\lambda,n)$ as displayed. The set of integers
displayed is a set of nonnegative integers, so the supremum is well defined in
$\mathbb N\cup\{\infty\}$; it is $0$ for $V=0$, and $\operatorname{weight}(V)=\infty$
exactly when the displayed set is unbounded. No finiteness of
$\operatorname{weight}(V)$ is asserted.

If $W$ is a **subquotient** of $V$, meaning that $W\cong U'/U$ for sub-FI-modules
$U\subseteq U'\subseteq V$ computed pointwise, then
$\operatorname{weight}(W)\le\operatorname{weight}(V)$: a constituent of $W_n$ is
a subquotient of the subquotient $U'_n/U_n$ of $V_n$, hence a subquotient of
$V_n$, so it contributes the same label $|\lambda|$ to the supremum for $V$. No
choice principle is used: the labels $\lambda[n]$, constituents and the
supremum are set-theoretic data, and no bases or decompositions are chosen.
