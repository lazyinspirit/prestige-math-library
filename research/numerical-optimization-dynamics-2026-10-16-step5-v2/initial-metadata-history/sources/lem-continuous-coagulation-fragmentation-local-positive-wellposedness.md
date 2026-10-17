---
id: lem-continuous-coagulation-fragmentation-local-positive-wellposedness
kind: lemma
title: Bounded kernels give a local positive measure-valued solution
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz
  - lem-weighted-total-variation-space-is-complete
  - lem-continuous-coagulation-operator-weighted-total-variation-bound
  - lem-continuous-fragmentation-operator-weighted-total-variation-bound
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; Picard iterates start from the specified constant path and converge by a geometric estimate.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§3.1–3.2
      url: https://arxiv.org/pdf/1801.08312
    - title: Jacek Banasiak, Analytic fragmentation semigroups and classical solutions to coagulation-fragmentation equations, §§1–2
      url: https://repository.up.ac.za/bitstream/handle/2263/65144/Banasiak_Analytic_2019.pdf?isAllowed=n&sequence=1
---

## Statement

For the bounded Lipschitz kernels and daughter measures of [[def-continuous-size-coagulation-fragmentation-weak-model]], every positive initial measure $\mu_0\in\mathcal M_w(E)$ has a unique positive solution $\mu\in C([0,T_0];\mathcal M_w(E))$ to the weak model for some $T_0>0$.

## Facts & Assumptions

**Given:** The bounded-kernel weak equation, a positive initial measure, and the weighted total-variation space.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: $K,\beta,B_x$ define the weak vector field $\mathcal C(\mu,\mu)+\mathcal F\mu$ and preserve positivity of the gain measures.

[F2] [[lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz]]: that vector field is Lipschitz on every bounded ball of $\mathcal M_w(E)$.

[F3] [[lem-weighted-total-variation-space-is-complete]]: $\mathcal M_w(E)$ is complete in $\|\cdot\|_w$.

[F4] [[lem-continuous-coagulation-operator-weighted-total-variation-bound]]: the coagulation bilinear operator is bounded on weighted total variation.

[F5] [[lem-continuous-fragmentation-operator-weighted-total-variation-bound]]: the fragmentation operator is bounded on weighted total variation.

## Proof

1.1 For a positive path $\nu$ in a ball of radius $R$, define $a_\nu(t,x)=\int_EK(x,y)\nu_t(dy)+\beta(x)$ and the positive gain $G_C(\nu_t)=\frac12\iint K(x,y)\delta_{x+y}\nu_t(dx)\nu_t(dy)$, $G_F(\nu_t)=\int_E\beta(x)B_x\,\nu_t(dx)$, and $G=G_C+G_F$. Then $0\le a_\nu\le K_*R+\beta_*$. Since $w(x+y)\le2w(x)w(y)$, $\|G_C(\mu)\|_w\le K_*\|\mu\|_w^2$; bilinearity gives its local Lipschitz bound. Also $\|G_F(\mu)\|_w\le\beta_*(D+1)\|\mu\|_w$ by the daughter estimate in [F5]. Thus $G$ is bounded and Lipschitz on the ball, and $a_\nu-a_\eta$ is bounded by $K_*\|\nu-\eta\|_w$. [given, F1, F2, F4, F5, algebra]

2.1 On $C([0,T];\mathcal M_w(E))$ define $\Phi(\nu)_t=e^{-\int_0^t a_\nu(s,\cdot)\,ds}\mu_0+\int_0^t e^{-\int_s^t a_\nu(r,\cdot)\,dr}G(\nu_s)\,ds$. The loss rate is continuous in time in $L^\infty(E)$, since $\|a_\nu(t,\cdot)-a_\nu(s,\cdot)\|_\infty\le K_*\|\nu_t-\nu_s\|_w$; the gain path is continuous in $\mathcal M_w(E)$ by the bounded-operator estimates in [F4]–[F5]. For bounded $b$, multiplication $M_b\sigma=b\sigma$ satisfies $\|M_b\|\le\|b\|_\infty$, so the survival multipliers are continuous in operator norm and $\Phi\nu$ is a continuous path. For positive $\nu$ it is positive. On the closed positive path ball of radius $R>2\|\mu_0\|_w$, the gain bound gives $\|\Phi\nu\|_{C\mathcal M_w}\le\|\mu_0\|_w+TC_R\le R$ for sufficiently small $T$. The bounds $|a_\nu-a_\eta|\le K_*\|\nu-\eta\|_w$ and $|e^{-u}-e^{-v}|\le|u-v|$ give $\|\Phi\nu-\Phi\eta\|_{C\mathcal M_w}\le(TL_R+TK_*\|\mu_0\|_w+T^2K_*C_R)\|\nu-\eta\|_{C\mathcal M_w}$. Choose $T$ so this coefficient is below $1$. [F2, F3, F4, F5, step 1.1, choose]

3.1 The closed positive path ball is complete: a Cauchy sequence converges uniformly by [F3], its uniform limit is continuous, and the positive cone is closed because $\nu^-(E)\le\|\nu-\nu_j\|_{TV}$ when $\nu_j\ge0$. It is nonempty because it contains the constant path $\nu^0_t=\mu_0$. If $q<1$ is the contraction coefficient in step 2.1, iteration $\nu^{j+1}=\Phi(\nu^j)$ from $\nu^0$ satisfies $\|\nu^{j+1}-\nu^j\|\le q^j\|\nu^1-\nu^0\|$. For $m>n$, $\|\nu^m-\nu^n\|\le\|\nu^1-\nu^0\|\sum_{j=n}^{m-1}q^j\le q^n\|\nu^1-\nu^0\|/(1-q)\to0$, so completeness gives a limit. The contraction bound makes $\Phi$ continuous, hence the limit is fixed; if two fixed points existed, their distance would be at most $q$ times itself, hence zero. For a fixed point, $S(t,s):=M_{e^{-\int_s^t a_\nu(r,\cdot)dr}}$ has operator-norm derivative $\partial_tS(t,s)=-M_{a_\nu(t,\cdot)}S(t,s)$, since the scalar exponential difference quotients converge uniformly in $x$. Splitting the difference quotient of the source integral at $s=t$ gives its endpoint term $G(\nu_t)$ and its integral term $-M_{a_\nu(t,\cdot)}\int_0^tS(t,s)G(\nu_s)ds$; thus the fixed point solves $\dot\nu=G(\nu)-a_\nu\nu$. Conversely, for any positive solution $\zeta$, the inverse multiplier $A(t)=M_{e^{\int_0^t a_\zeta(s,\cdot)ds}}$ is operator-norm differentiable with $A'=M_{a_\zeta}A$. The product difference quotient gives $(A\zeta)'=A G(\zeta)$; integrating this continuous derivative by telescoping partitions and multiplying by $A(t)^{-1}$ recovers the same mild formula. Continuity at $0$ puts any competing solution in this ball on a sufficiently short interval, where fixed-point uniqueness makes it equal to the constructed solution. [F3, step 2.1, algebra]

4.1 The derivative established in step 3.1 is $\dot\mu_t=G(\mu_t)-a_\mu(t,\cdot)\mu_t$. Symmetry of $K$ combines the two coagulation loss marginals into $-\int K(x,y)\delta_x\,\mu_t(dx)\mu_t(dy)$; the fragmentation loss is $-\int\beta(x)\delta_x\,\mu_t(dx)$. Hence this is precisely the weak equation in [F1], proving the claim. [given, F1, step 3.1, algebra] ∎

