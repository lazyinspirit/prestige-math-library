---
id: thm-lagrange-point-evaluation-threshold-on-reference-simplex
kind: theorem
title: Sobolev threshold for Lagrange point evaluations on a reference simplex
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [thm-reference-simplex-sobolev-extension, thm-higher-order-sobolev-embedding, def-reference-finite-element-and-unisolvent-dofs, def-sobolev-space-wkp-and-its-norm, thm-holder-inequality-for-integrals, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.4, printed pp. 123–125: nodal interpolation and boundedness hypotheses."
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: "Chapter 3 §3.5, printed pp. 83–84: higher-order Sobolev embedding."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $d\ge2$, let $N\in\mathbb N_0$, choose
$x_1,\ldots,x_N\in\overline{\widehat S_d}$, and let
$\ell\ge1$ be an integer. If $1\le p<\infty$ and $\ell>d/p$, then each
point evaluation has a unique continuous-representative value and
$$|u(x_j)|\le C\|u\|_{W^{\ell,p}(\widehat S_d)}.$$
If $p=\infty$, the same conclusion holds for every $\ell\ge1$.
Consequently any finite set of Lagrange nodal evaluations is bounded on
the stated Sobolev space and defines a well-defined degree-of-freedom
functional there. No boundedness at $\ell=d/p$ is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice, $d\ge2$, integer $\ell\ge1$, the reference simplex, and the exponent in the appropriate branch.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The reference simplex is a bounded extension domain for every integer Sobolev order and exponent. ([[thm-reference-simplex-sobolev-extension]])

[F2] On a bounded extension domain, if $kp>d$, higher-order Sobolev embedding gives a continuous representative and a norm bound; its proof assumes the Axiom of Choice. ([[thm-higher-order-sobolev-embedding]])

[F3] The Sobolev norm is the finite sum of its derivative $L^p$ norms, with the maximum convention at $p=\infty$. ([[def-sobolev-space-wkp-and-its-norm]])

[F4] Holder's inequality on the finite-measure simplex sends each bounded $L^\infty$ derivative into every finite $L^q$ space with the expected measure factor. ([[thm-holder-inequality-for-integrals]])

[F5] The reference finite-element convention treats each nodal value as a linear functional on the function space when that value is well-defined. ([[def-reference-finite-element-and-unisolvent-dofs]])

## Proof

1.1 Suppose $p<\infty$ and $\ell>d/p$. Then $\ell p>d$, so apply [F2] with $k=\ell$, $n=d$, and extension domain [F1]. It gives a continuous representative on the closed simplex and a bound for its supremum by $C\|u\|_{W^{\ell,p}}$. Two continuous representatives of the same almost-everywhere class agree everywhere: if their difference were nonzero at a point of the closed simplex, continuity on the closure and the fact that the simplex is the closure of its interior would give a nonempty interior ball on which the difference stays nonzero, contradicting almost-everywhere equality. Thus every $u(x_j)$ is uniquely defined and obeys the displayed bound. [A1, F1, F2, given]

2.1 If $p=\infty$, choose any finite $q>d$. Since the simplex has finite volume, [F4] gives $\|D^\alpha u\|_{L^q}\le|\widehat S_d|^{1/q}\|D^\alpha u\|_{L^\infty}$ for $|\alpha|\le1$, so $W^{\ell,\infty}\subset W^{1,q}$ continuously. The same simplex extension result [F1] and embedding [F2], now with $k=1$ and $q>d$, give a unique continuous representative and the required bound by $\|u\|_{W^{\ell,\infty}}$. In either branch, [F5] identifies each evaluation with a bounded linear degree of freedom; for $N\ge1$, the nodes have a common bound by taking the maximum of their constants, while for $N=0$ the assertion is vacuous and any finite constant, such as $C=1$, suffices. [A1, F1, F2, F3, F4, F5, algebra] ∎
