---
id: lem-dimer-central-force-hessian-vector-error
kind: lemma
title: "Paired force evaluations give a second-order Hessian-vector estimate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - cor-hessian-is-symmetric
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, A dimer method for finding saddle points on high dimensional potential surfaces using only first derivatives"
      url: "https://hj.hi.is/papers/paperDimer.pdf"
      locator: "§II A, equations (2)–(3): paired force evaluations estimate curvature along the dimer; the vector error bound is proved here"
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, Simplified and improved string method for computing the minimum energy paths in barrier-crossing events"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/SimplifiedString.pdf"
      locator: "§V B, equations (28)–(31): paired-force finite-difference approximation of a Hessian direction at a saddle"
---

## Statement

Let $V\in C^4(U,\mathbb R)$ on an open set $U\subseteq\mathbb R^d$, let $x\in U$, and let $v\in\mathbb R^d$ satisfy $\|v\|_2=1$ and $x\pm\epsilon v\in U$ for $\epsilon>0$. Assume the segments $x+[-\epsilon,\epsilon]v$ lie in $U$. Define

$$D_\epsilon(x,v):=\frac{\nabla V(x+\epsilon v)-\nabla V(x-\epsilon v)}{2\epsilon}.$$

If approximate gradient evaluations $\widehat g_\pm$ satisfy $\|\widehat g_\pm-\nabla V(x\pm\epsilon v)\|_2\le\eta$, and $M_4$ bounds the third derivatives of each gradient coordinate in the Taylor remainders on these segments, then

$$\left\|\frac{\widehat g_+-\widehat g_-}{2\epsilon}-\nabla^2V(x)v\right\|_2\le\frac{\sqrt d\,M_4}{6}\epsilon^2+\frac{\eta}{\epsilon}.$$

Thus the deterministic truncation error is $O(\epsilon^2)$ and the force-evaluation error contributes $O(\eta/\epsilon)$. This is an error bound for the Hessian action on the supplied direction; it is not an operator-norm bound for a full Hessian approximation.

## Facts & Assumptions

**Given:** The smooth potential, admissible line segment, unit direction, finite-difference step, and force discrepancy bound in the Statement.

[F1] [[def-ck-and-multi-index-notation-in-several-variables]], [[def-hessian-and-euclidean-critical-point]], and [[def-jacobian-matrix-and-gradient]]: $V\in C^4$ gives continuous coordinate partials of each gradient coordinate through order three. Applying [[thm-continuous-partial-derivatives-imply-total-differentiability]] to those iterated partials through order two gives their total derivatives, whose Jacobian entries are continuous. [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies the matrix of $D(\nabla V)$ with the Jacobian, and [[cor-hessian-is-symmetric]] makes its Jacobian entries agree with the Hessian convention $H_{ij}=\partial_i\partial_jV$.

[F2] By [F1], [[def-ck-and-multi-index-notation-in-several-variables]], and repeated application of [[thm-chain-rule-for-total-derivatives]], each restriction $t\mapsto \partial_jV(x+tv)$ is $C^3$ on its open interval domain. The one-dimensional case of [[thm-multivariable-taylor-formula-with-lagrange-remainder]] then gives its coordinatewise degree-two Taylor expansion with Lagrange remainder.

[A1] For each coordinate $j$, the third derivative of $t\mapsto\partial_jV(x+tv)$ is bounded in absolute value by $M_4$ for $t\in[-\epsilon,\epsilon]$; this is the remainder bound required for [F2].



**Given:** The hypotheses of the Statement.

## Proof

1.1 Let $I$ be the open interval component of $\{t\in\mathbb R:x+tv\in U\}$ containing $[-\epsilon,\epsilon]$; it exists because that line segment lies in the open set $U$. Each $g_j(t):=\partial_jV(x+tv)$ is $C^3$ on the open, convex interval $I$. Apply [F2] to $g_j$ at $0$ with displacements $\pm\epsilon$. The linear terms are $\pm\epsilon(Hv)_j$ by [F1], the quadratic terms agree, and the coordinate remainders satisfy $|(r_\pm)_j|\le M_4\epsilon^3/6$ by [A1]. Thus $\|r_\pm\|_2\le\sqrt d\,M_4\epsilon^3/6$. Subtracting and dividing by $2\epsilon$ cancels the constant and quadratic terms and gives $\|D_\epsilon(x,v)-\nabla^2V(x)v\|_2\le\sqrt d\,M_4\epsilon^2/6$. [A1, F1, F2, given, algebra]

2.1 Write $e_\pm=\widehat g_\pm-g(x\pm\epsilon v)$. Then $\|e_+-e_-\|_2\le\|e_+\|_2+\|e_-\|_2\le2\eta$, so their contribution after division by $2\epsilon$ is at most $\eta/\epsilon$. Adding this to step 1.1 proves the inequality. A bound on this single direction alone supplies no bound on an operator acting on all directions. [given, step 1.1, algebra] ∎

