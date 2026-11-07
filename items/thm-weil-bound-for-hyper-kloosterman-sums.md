---
id: thm-weil-bound-for-hyper-kloosterman-sums
kind: theorem
title: "Weil Bound for Hyper-Kloosterman Sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - thm-kloosterman-sheaf-purity-and-conductor
  - thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.3"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "PDF pp. 9–10; rank and weight-zero trace estimate"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$, choose a nontrivial additive character $\psi:\mathbb F_p\to\mathbb C^\times$, let $n\ge2$, and let $x\in\mathbb F_p^\times$. For
$$\operatorname{Kl}_n(x;p)=(-1)^{n-1}p^{-(n-1)/2}\sum_{\substack{y_1,\ldots,y_n\in\mathbb F_p^\times\\ y_1\cdots y_n=x}}\psi(y_1+\cdots+y_n),$$
one has $|\operatorname{Kl}_n(x;p)|\le n$.

## Statement references

[[thm-kloosterman-sheaf-purity-and-conductor|Purity and conductor of the hyper-Kloosterman sheaf]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.3](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The primes $p$ and $\ell\ne p$, the embedding $\iota$, the character $\psi$, the integer $n\ge2$, and $x\in\mathbb F_p^\times$.

[F1] [[thm-kloosterman-sheaf-purity-and-conductor]]: the rank-$n$ Kloosterman sheaf is pointwise pure of weight zero on $\mathbb G_m$ and has trace $\operatorname{Kl}_n(x;p)$ on $\mathbb F_p^\times$.

## Proof

1.1 By [F1], $\operatorname{Kl}_n(x;p)$ is the trace of geometric Frobenius on an $n$-dimensional stalk whose Frobenius eigenvalues $\lambda_1,\ldots,\lambda_n$ all have complex absolute value $1$. [F1, given]

2.1 The trace is $\lambda_1+\cdots+\lambda_n$, so the triangle inequality gives $|\operatorname{Kl}_n(x;p)|=|\lambda_1+\cdots+\lambda_n|\le\sum_{j=1}^n|\lambda_j|=n$. This proves the claim conditional on the Kloosterman-sheaf construction, purity and trace identity; that supplier is proof:not-supplied. The plan also lists quasi-orthogonality as a dependency, although this pointwise estimate does not use it, so the item remains escalated for owner reconciliation. [F1, step 1.1, algebra] ∎
