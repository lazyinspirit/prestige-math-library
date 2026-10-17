---
id: lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence
kind: lemma
title: "Cell averages give a strong recovery sequence for compact convex controls"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-ctrl1-linear-lqr-control-problem, def-ctrl1-control-mesh-and-piecewise-constant-parameterization, thm-box-step-functions-are-dense-in-l-p-of-rn, def-countable-choice, thm-extreme-value-metric, thm-cauchy-schwarz-and-the-euclidean-norm, cor-cauchy-schwarz-inequality-for-l-two, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-minkowski-inequality-for-integrals]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.3"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 234–243: piecewise-constant input parameterization and direct shooting/collocation meshes."
    - title: "J. Monnier, Optimal Control of ODEs: The Linear-Quadratic (LQ) Case, course notes, Chapter 2 §2.4"
      url: "https://pedagotech.inp-toulouse.fr/130908/res/2-optimal-control-ode.pdf"
      locator: "Printed pp. 21–22: the L2 control space and compact convex pointwise control set."
---

## Statement

Assume the Axiom of Countable Choice.

Assume the constraint set in [[def-ctrl1-linear-lqr-control-problem]] is only the pointwise box $\mathcal F=\mathcal U_c$. For the uniform mesh $0=t_0<\cdots<t_N=T$, $h=T/N$, define $P_Nu$ on $[t_j,t_{j+1})$ by $h^{-1}\int_{t_j}^{t_{j+1}}u(s)ds$. Then $P_Nu\in\mathcal U_c$ for every $u\in\mathcal U_c$, $P_Nu$ is piecewise constant, and $\|P_Nu-u\|_{L^2}\to0$ as $N\to\infty$. This recovery statement need not hold for additional state or terminal constraints unless they are separately shown to be preserved or approximated.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, a nonempty compact convex $U_c\subset\mathbb R^m$, its admissible control set, and the uniform meshes in [[def-ctrl1-control-mesh-and-piecewise-constant-parameterization]].

[F1] Finite linear combinations of interval indicators are dense in scalar $L^2(\mathbb R)$ under Countable Choice; applying this componentwise gives density of finite vector-valued interval step functions, and extending by zero applies it on $(0,T)$ ([[thm-box-step-functions-are-dense-in-l-p-of-rn]], [[def-countable-choice]]).

[F2] The componentwise Lebesgue vector integral is linear. For $h\in L^2(I;\mathbb R^m)$ on a cell $I$ of length $h_I$, put $I_h=\int_Ih$. If $I_h\ne0$, then $q=I_h/\|I_h\|_2$ satisfies $\|I_h\|_2=\int_Iq^Th\le\int_I\|h\|_2\le\sqrt{h_I}\|h\|_{L^2(I)}$, using pointwise Euclidean Cauchy--Schwarz, monotonicity, scalar Cauchy--Schwarz, and componentwise linearity; the zero case is immediate ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F3] A continuous distance function attains its minimum on the nonempty compact set $U_c$ ([[thm-extreme-value-metric]]).

[F4] For $v,w\in L^2(0,T;\mathbb R^m)$, the pointwise Euclidean triangle inequality gives $\|v+w\|_2\le\|v\|_2+\|w\|_2$. Squaring, integrating by monotonicity, and applying scalar Minkowski to the scalar functions $\|v(\cdot)\|_2$ and $\|w(\cdot)\|_2$ yields $\|v+w\|_{L^2}\le\|\,\|v(\cdot)\|_2+\|w(\cdot)\|_2\,\|_{L^2}\le\|v\|_{L^2}+\|w\|_{L^2}$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-minkowski-inequality-for-integrals]]).

## Proof

1.1 On each interval $I_j=[t_j,t_{j+1}]$, let $m_j=h^{-1}\int_{I_j}u(s)ds$. If $m_j\notin U_c$, compactness and [F3] give a nearest point $y\in U_c$. For every $c\in U_c$, the segment $y+\theta(c-y)$ belongs to $U_c$ for $0\le\theta\le1$; minimality of $y$ gives $\|m_j-y-\theta(c-y)\|_2^2\ge\|m_j-y\|_2^2$. Divide by $\theta>0$ and let $\theta\downarrow0$ to get $(m_j-y)^T(c-y)\le0$. With $q_0=m_j-y\ne0$, this implies $q_0^Tm_j>\sup_{c\in U_c}q_0^Tc$. But $q_0^Tu(s)\le\sup_{c\in U_c}q_0^Tc$ almost everywhere, so integration contradicts the strict inequality. Thus every cell average lies in $U_c$ and $P_Nu$ is pointwise admissible. [F2, F3, given, algebra]

1.2 For any $w\in L^2$, [F2] on a cell $I_j$ gives $h\|h^{-1}\int_{I_j}w\|_2^2\le\int_{I_j}\|w(s)\|_2^2ds$; summing proves $\|P_Nw\|_2\le\|w\|_2$. For an interval indicator, $P_N$ agrees with it on cells not meeting an endpoint, and at most two endpoint cells contribute to the squared error, at most $2h$. By linearity of $P_N$ and the triangle inequality [F4], $P_Ns\to s$ for every finite linear combination $s$ of interval indicators. [F2, F3, F4, algebra]

2.1 Fix $u\in L^2$ and $\varepsilon>0$. By [F1] choose such an interval step function $s$ with $\|u-s\|_2<\varepsilon$. The contraction bound in step 1.2 and the triangle inequality [F4] give $\|P_Nu-u\|_2\le2\varepsilon+\|P_Ns-s\|_2$. Taking $N\to\infty$ yields $\limsup_N\|P_Nu-u\|_2\le2\varepsilon$. Since $\varepsilon$ is arbitrary, $P_Nu\to u$ strongly in $L^2$. [F1, F4, step 1.2, algebra] ∎
