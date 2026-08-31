---
id: thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable
kind: theorem
title: "If $\\mu$ is sigma-finite and $\\mathcal{A}$ is countably generated, then $L^p(\\mu)$ is separable for $1 \\le p < \\infty$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, lem-countable-generators-yield-countable-set-algebras, lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra, def-finite-sigma-finite-and-semifinite-measures, def-separable-space, def-l-p-space-as-a-quotient-by-null-functions]
landmark: true
proof_strategy: "Assuming Countable Choice, approximate finite-support simple functions by simple functions on a countable generating algebra and then quantize the coefficients to rationals. This proves the exact hypothesis ledger recorded earlier in the published remark on $L^p$ separability, without overclaiming for arbitrary measures."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $(X,\mathcal A,\mu)$ be a sigma-finite measure space with countably
generated sigma-algebra, and let $1 \le p < \infty$. Then $L^p(\mu)$ is
separable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a sigma-finite countably generated measure space, and an exponent $1 \le p < \infty$.

[L1] Simple functions with finite-measure support are dense in $L^p(\mu)$ ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]).

[L2] Finite-measure sets are approximable by a countable generating algebra ([[lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra]], [[lem-countable-generators-yield-countable-set-algebras]]).

[L3] The quotient $L^p(\mu)$ is the space in question, and separability means the existence of a countable dense subset ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-separable-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal A_0$ be the countable algebra from [L2], and let $\mathcal S$ [L2, L3, given, algebra] be the set of all finite linear combinations $$ \sum_{j=1}^m q_j\,\mathbf{1}_{A_j} $$ with $q_j \in \mathbb Q(i)$ and $A_j \in \mathcal A_0$ satisfying $\mu(A_j)<\infty$ for every $j$. Because both the coefficient set and the finite-measure members of $\mathcal A_0$ are countable, $\mathcal S$ is countable. [L2, L3, given, algebra]

1.2 To prove density, start with $f \in L^p(\mu)$ and $\varepsilon > 0$. By [L1, L2, given, choose, algebra] [L1], choose a finite-support simple function $$ s = \sum_{j=1}^m c_j\,\mathbf{1}_{E_j} $$ with $\|f-s\|_p < \varepsilon/2$. For each $j$, [L2] gives $A_j \in \mathcal A_0$ with $\mu(A_j)<\infty$ and $\mu(E_j \triangle A_j)$ arbitrarily small, and each coefficient $c_j$ can be approximated by $q_j \in \mathbb Q(i)$. The resulting $t := \sum_j q_j \mathbf{1}_{A_j}$ lies in $\mathcal S$ and satisfies $\|s-t\|_p < \varepsilon/2$. [L1, L2, given, choose, algebra]

2.1 Then [L3, step 1.1, step 1.2] $$ \|f-t\|_p \le \|f-s\|_p + \|s-t\|_p < \varepsilon. $$ So $\mathcal S$ is countable and dense in $L^p(\mu)$; by [L3], the space is separable. [L3, step 1.1, step 1.2] ∎
