---
id: def-fenchel-conjugate-on-finite-dimensional-euclidean-space
kind: definition
title: "Fenchel conjugate of an extended-real function"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §3.3.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Definition

Let $f:\mathbb R^n\to(-\infty,+\infty]$. Its **Fenchel conjugate** is the
extended-real function on the same Euclidean space
$$f^*(s):=\sup_{x\in\mathbb R^n}\{\langle s,x\rangle-f(x)\}.$$
When $f(x)=+\infty$, the corresponding term is $-\infty$ and does not increase
the supremum. Its effective domain is
$\operatorname{dom}f^*=\{s:f^*(s)<+\infty\}$.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, $f:\mathbb R^n\to(-\infty,+\infty]$, and the Euclidean pairing.

[A1] Function values lie in $(-\infty,+\infty]$ and the pairing is Euclidean.


[F1] [[def-proper-closed-convex-function-on-rn]]: the domain of a proper function is nonempty, and its values lie in $(-\infty,+\infty]$.

[F2] [[def-euclidean-inner-product]]: $\langle s,x\rangle$ is a finite real number for $s,x\in\mathbb R^n$.

## Proof


1.1 For every $x$ with finite $f(x)$, the expression $\langle s,x\rangle-f(x)$ is real; for $f(x)=+\infty$ it contributes $-\infty$ under the stated convention. Thus the supremum is unambiguously defined in $[-\infty,+\infty]$. [A1, given, F1, F2, given]

2.1 If $f$ is proper, choose one $x_0\in\operatorname{dom}f$. The finite term $\langle s,x_0\rangle-f(x_0)$ shows $f^*(s)>-\infty$ for every $s$; it may still be $+\infty$. This definition alone does not assert finiteness everywhere. [A1, F1, step 1.1, choose] ∎
