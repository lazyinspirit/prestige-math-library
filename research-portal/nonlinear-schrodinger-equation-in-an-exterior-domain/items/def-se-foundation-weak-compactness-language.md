---
id: def-se-foundation-weak-compactness-language
kind: definition
domain: mathematics
title: Weak convergence notation in normed state spaces
status: published
deps:
  - math:def-norm-and-normed-space
  - math:def-complex-norm-and-complex-normed-space
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:def-dual-space-of-a-normed-space
  - math:def-weak-topology-on-a-normed-space
  - math:def-weak-convergence-of-nets-and-sequences
dependency_roles:
  math:def-norm-and-normed-space: mathematical-premise
  math:def-complex-norm-and-complex-normed-space: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:def-dual-space-of-a-normed-space: mathematical-premise
  math:def-weak-topology-on-a-normed-space: mathematical-premise
  math:def-weak-convergence-of-nets-and-sequences: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $X$ be a normed space over $\mathbb K=\mathbb R$ or $\mathbb C$. Its bounded scalar-linear dual $X^*$ consists of the bounded $\mathbb K$-linear maps from $X$ to $\mathbb K$. For a sequence $(x_j)$ in $X$ and $x\in X$, write $x_j\rightharpoonup x$ in $X$, and say that $x_j$ converges weakly to $x$, if $\ell(x_j)\to\ell(x)$ in $\mathbb K$ for every $\ell\in X^*$. A weakly null sequence is one that converges weakly to $0$.

For a complex normed space, its realification $X_{\mathbb R}$ is the same additive group and norm with scalar multiplication restricted to real scalars. Weak convergence in $X_{\mathbb R}$ uses all bounded real-linear maps $X_{\mathbb R}\to\mathbb R$ in the preceding definition.

## Justification

The real and complex normed-space conventions are those of [[math:def-norm-and-normed-space]] and [[math:def-complex-norm-and-complex-normed-space]], respectively.

The dual and weak topology are those of [[math:def-dual-space-of-a-normed-space]] and [[math:def-weak-topology-on-a-normed-space]]. By [[math:def-weak-convergence-of-nets-and-sequences]], the displayed scalar-evaluation condition is exactly convergence of the sequence in the weak topology $\sigma(X,X^*)$: each evaluation is continuous, and finitely many eventual scalar conditions suffice for a basic weak neighborhood. By [[math:lem-complex-norm-realification-is-a-real-norm]], the retained norm is a real norm on $X_{\mathbb R}$. The same argument applies to the real normed space $X_{\mathbb R}$. These conventions define convergence only; they assert no compactness or subsequence extraction.
