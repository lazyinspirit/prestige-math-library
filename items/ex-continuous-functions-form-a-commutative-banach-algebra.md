---
id: ex-continuous-functions-form-a-commutative-banach-algebra
kind: example
title: Continuous functions form a commutative Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, def-spectrum-and-resolvent-set-in-a-banach-algebra, thm-uniform-cauchy-criterion-complex-functions, thm-compactness-under-continuous-maps]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1 examples, printed pp. 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Let $K$ be a nonempty compact Hausdorff space and let
$C(K,\mathbb C) := \{f : K \to \mathbb C : f \text{ continuous}\}$ carry the
supremum norm $\|f\|_\infty := \sup_{x \in K}|f(x)|$. Then $C(K,\mathbb C)$ is
a unital commutative complex Banach algebra
([[def-unital-banach-algebra]]), and for every $f$ its spectrum is the image of
$f$:

$$\sigma(f) = f[K] = \{\,f(x) : x \in K\,\}$$

([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff space $K$, the algebra $C(K,\mathbb C)$ with pointwise operations and the supremum norm, and a function $f \in C(K,\mathbb C)$.

[L1] The image of a compact set under a continuous map is compact, and a continuous real-valued function on a nonempty compact space attains a maximum and a minimum ([[thm-compactness-under-continuous-maps]]).

[L2] A uniformly Cauchy sequence of complex-valued functions on a set converges
uniformly to a function on that set
([[thm-uniform-cauchy-criterion-complex-functions]]).  If the domain is a
topological space and all the functions are continuous, the limit is continuous:
given $x$ and $\varepsilon>0$, choose one function uniformly within
$\varepsilon/3$ of the limit and then use its continuity at $x$.

[L3] A unital complex Banach algebra is an associative complex algebra with submultiplicative complete norm and unit of norm one; $z \in \rho(a)$ exactly when $z1 - a$ is invertible, and $\sigma(a)$ is its complement ([[def-unital-banach-algebra]], [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The supremum norm is finite on every $f$: $|f|$ is continuous and real-valued on the nonempty compact $K$, so it attains a maximum by [L1]; the pointwise operations make $C(K,\mathbb C)$ a commutative associative complex algebra with unit the constant function $1$, and $\|fg\|_\infty \le \|f\|_\infty\|g\|_\infty$ holds because $|f(x)g(x)| \le \|f\|_\infty\|g\|_\infty$ for every $x$ while $|1(x)| = 1$ gives $\|1\|_\infty = 1$. [L1, L3, algebra]

2.1 Completeness: a $\|\cdot\|_\infty$-Cauchy sequence $(f_n)$ is uniformly Cauchy, so by [L2] it converges uniformly to a continuous $f$; uniform convergence is convergence in the supremum norm, so $C(K,\mathbb C)$ is complete. [step 1.1, L2]

2.2 Spectral inclusion: if $\lambda \notin f[K]$ then $m := \inf_{x \in K}|\lambda - f(x)| > 0$: the function $x \mapsto |\lambda - f(x)|$ is continuous on the nonempty compact $K$ and attains its minimum $m$ by [L1], and $m = 0$ would mean $\lambda = f(x)$ for some $x$. Hence $1/(\lambda - f)$ is a bounded continuous function with $\|1/(\lambda-f)\|_\infty \le 1/m$, and it is a two-sided inverse of $\lambda 1 - f$; so $\lambda \in \rho(f)$. [step 1.1, L1, L3]

3.1 Spectral equality: conversely, if $\lambda = f(x_0)$ for some $x_0 \in K$ and $g$ were an inverse of $\lambda1 - f$, then evaluating the identity $g\cdot(\lambda1-f) = 1$ at $x_0$ would give $g(x_0)\cdot 0 = 1$, impossible; hence $\lambda \in \sigma(f)$. Combined with [step 2.2], $\sigma(f) = f[K]$. [step 1.1, step 2.2, L3] ∎
