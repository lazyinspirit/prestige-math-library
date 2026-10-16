---
id: thm-qc-projective-conditional-state
kind: theorem
title: "Conditional state for a projective measurement"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-projective-measurement, thm-qc-projective-measurement-outcome-law, def-qc-density-operator, def-trace-of-an-endomorphism, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, def-non-negative-and-positive-operator, def-kernel-and-image-of-a-linear-map]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $\rho$ be a density operator and $(P_a)_{a\in\Omega}$ a finite projective measurement on a nonzero finite-dimensional complex inner-product space $H$. Put $p_a=\operatorname{tr}(\rho P_a)$. If $p_a>0$, then

$$\rho_a:=\frac{P_a\rho P_a}{p_a}$$

is a density operator whose image $\operatorname{im}(\rho_a):=\{\rho_a x:x\in H\}$ is contained in $\operatorname{im}(P_a)$ ([[def-kernel-and-image-of-a-linear-map]]). This statement assigns a conditional state only on positive-probability branches.

## Facts & Assumptions

**Given:** The density operator $\rho$, the projective measurement $(P_a)_{a\in\Omega}$, and an outcome $a$ with $p_a>0$.

[F1] [[def-qc-projective-measurement]]: $P_a^*=P_a=P_a^2$ and distinct outcome projections are orthogonal.

[F2] [[thm-qc-projective-measurement-outcome-law]]: $p_a=\operatorname{tr}(\rho P_a)$ is the probability of outcome $a$.

[F5] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F3] [[thm-trace-of-ab-equals-trace-of-ba]]: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for compatible rectangular matrices.

[F4] [[prop-trace-is-linear]]: trace preserves scalar multiples.

[F6] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F7] [[def-kernel-and-image-of-a-linear-map]]: the image of a linear map $T$ is $\operatorname{im}T=\{T(x):x\text{ is in the domain}\}$.

## Proof

1.1 Set $\tau_a=P_a\rho P_a$. Self-adjointness of $P_a$ and $\rho$ gives $\langle\tau_ax,y\rangle=\langle\rho P_ax,P_ay\rangle=\langle x,\tau_ay\rangle$ for all $x,y$, so $\tau_a$ is self-adjoint. For every $x\in H$, $\langle\tau_ax,x\rangle=\langle\rho P_ax,P_ax\rangle\ge0$ by [F5] and [F6], so $\tau_a$ is nonnegative. Since $p_a>0$ is real, scaling the same pairing identity by $1/p_a$ makes $\rho_a=\tau_a/p_a$ self-adjoint; its quadratic form is nonnegative as well, so $\rho_a$ is nonnegative. [given, F1, F5, F6]

1.2 By [F3] and $P_a^2=P_a$, $\operatorname{tr}(\tau_a)=\operatorname{tr}(P_a\rho P_a)=\operatorname{tr}(\rho P_a^2)=p_a$ by [F2]. Hence [F4] gives $\operatorname{tr}(\rho_a)=p_a/p_a=1$, so $\rho_a$ is a density operator by [F5]. [given, F1, F2, F3, F4, F5]

2.1 For every $x\in H$, $\rho_a x=P_a(\rho P_ax)/p_a$ is of the form $P_a y$ with $y=\rho P_ax/p_a$. By [F7], every such vector lies in $\operatorname{im}(P_a)$, so $\operatorname{im}(\rho_a)\subseteq\operatorname{im}(P_a)$. [given, F1, F7, step 1.1, step 1.2] ∎
