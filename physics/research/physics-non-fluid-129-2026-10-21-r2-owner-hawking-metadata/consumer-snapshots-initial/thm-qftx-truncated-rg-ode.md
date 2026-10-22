---
id: thm-qftx-truncated-rg-ode
kind: theorem
title: One-coupling truncated RG flow and scheme invariance
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 11
deps:
  - def-qftx-scaling-cocycle
  - def-first-order-ode-initial-value-problem-and-solution
  - def-locally-lipschitz-in-the-state-variable
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
forward_refs: []
dependency_roles:
  def-qftx-scaling-cocycle: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Romeo Brunetti, Michael Dütsch, and Klaus Fredenhagen, Perturbative Algebraic Quantum Field Theory and the Renormalization Groups
      url: https://arxiv.org/html/0901.2038
      locator: Sections 5.1–5.2 and 7.2, mass-dependent cocycle, beta function, and the distinction between formal scale structure and a model-specific coefficient calculation.
    - title: Renormalization Scheme Dependence, University of Texas at Austin QFT II lecture notes
      url: https://web2.ph.utexas.edu/~vadim/Classes/2022f/ms.pdf
      locator: Printed pages 1–2, equations (2)–(9), beta-series transformation under a finite coupling redefinition; the local proof uses only the leading coefficient.
verification:
  precheck: pass
---

## Statement

Let $t=\log\rho\in\mathbb R$ be the dimensionless logarithmic scale parameter associated with $\rho>0$ in [[def-qftx-scaling-cocycle]]. Prescribe a real constant $b$ and initial value $g_0\in\mathbb R$, and consider the truncated scalar initial-value problem
$$\frac{dg}{dt}=bg^2,\qquad g(0)=g_0.$$
If $c:=bg_0=0$, its unique maximal real solution is $g(t)=g_0$ on $\mathbb R$. If $c\ne0$, its unique maximal solution through $t=0$ is
$$g(t)=\frac{g_0}{1-bg_0t}$$
on $(-\infty,c^{-1})$ when $c>0$ and on $(c^{-1},\infty)$ when $c<0$.

For the formal beta series $\beta(g)=bg^2+O(g^3)$, let $\widetilde g=\Phi(g)=g+ag^2+O(g^3)$ be an invertible formal change of coupling, with $a\in\mathbb R$. Here $O(g^k)$ denotes a formal power series whose terms have degree at least $k$, and $\Phi'$ is the termwise formal derivative. The transformed vector field is
$$\widetilde\beta(\widetilde g)=\bigl(\Phi'(g)\beta(g)\bigr)\big|_{g=\Phi^{-1}(\widetilde g)}.$$
Its quadratic coefficient is $b$. The real ODE is exact only for the displayed truncation; neither it nor the formal scheme-change statement determines $b$ from a QFT graph or bounds omitted higher-order terms. Its pole is a property of this truncated equation, not a theorem about an ultraviolet completion.

## Statement references

[[def-qftx-scaling-cocycle]]

[[def-first-order-ode-initial-value-problem-and-solution]]

## Facts & Assumptions

**Given:** $b,g_0\in\mathbb R$, $c=bg_0$, the scale convention in [[def-qftx-scaling-cocycle]], and the formal change $\Phi(g)=g+ag^2+O(g^3)$.

[A1] The vector field is the prescribed truncation $F(t,g)=bg^2$ on $D=\mathbb R^2$; no higher-order beta coefficients or measured coupling are specified.

[A2] The formal beta transformation is defined by push-forward under the invertible formal series $\Phi$; formal power series are manipulated coefficientwise and are not assumed to converge.

[F1] [[def-qftx-scaling-cocycle]]: $\rho>0$ is dimensionless and $t=\log\rho$; the renormalization cocycle is a separate formal map unless a coupling projection and coefficient calculation are supplied.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution on an interval is a differentiable real function satisfying the stated equation and initial condition.

[F3] [[def-locally-lipschitz-in-the-state-variable]]: a vector field is locally Lipschitz in the state variable when one finite Lipschitz constant works on each compact time-state cylinder.

[F4] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field locally Lipschitz in the state variable has a unique local solution, and two solutions with the same initial data agree on every common interval containing the initial time.

## Proof

**Proof technique:** direct verification of the rational solution, ODE uniqueness, and formal re-expansion.

**Given:** [A1]–[A2] and [F1]–[F4].

1.1 By [F1], $t=\log\rho$ is the dimensionless scale coordinate. If $c=0$, the constant function $g(t)=g_0$ has derivative zero and $bg_0^2=0$, so it solves the IVP on all of $\mathbb R$. If $c\ne0$, set $\gamma(t)=g_0/(1-ct)$ on the interval specified in the Statement. For every interior $t$,
$$\frac{\gamma(t+h)-\gamma(t)}{h}=\frac{g_0c}{(1-ct)(1-c(t+h))}\longrightarrow\frac{g_0c}{(1-ct)^2}=b\gamma(t)^2,$$
and $\gamma(0)=g_0$, so it solves the IVP. [A1, F1, F2, algebra]

2.1 The vector field $F(t,x)=bx^2$ is continuous. On any compact time-state cylinder with $|x|,|y|\le R$,
$$|F(t,x)-F(t,y)|=|b||x-y||x+y|\le2|b|R|x-y|,$$
so it is locally Lipschitz in the state variable by [F3]. Uniqueness from [F4] shows that every solution through $(0,g_0)$ agrees with step 1.1 on its common interval. When $c\ne0$, $|\gamma(t)|\to\infty$ as $t\to c^{-1}$ from within that interval, so no differentiable real solution can extend across $c^{-1}$; when $c=0$, the constant solution already exists on all of $\mathbb R$. These facts establish the stated maximal intervals. [A1, F3, F4, step 1.1]

3.1 Termwise differentiation gives $\Phi'(g)=1+2ag+O(g^2)$. Since $\Phi$ is invertible with linear term $g$, coefficient comparison gives $\Phi^{-1}(\widetilde g)=\widetilde g+O(\widetilde g^2)$, hence $g^2=\widetilde g^2+O(\widetilde g^3)$. Therefore $\Phi'(g)\beta(g)=bg^2+O(g^3)$ and re-expression in $\widetilde g$ yields $\widetilde\beta(\widetilde g)=b\widetilde g^2+O(\widetilde g^3)$. The coefficient $b$ is unchanged; no coefficient at higher order is determined here. [A2, algebra] ∎

## Remarks

The adjacent [[thm-qftx-heavy-derivative-bound]] is a separate spectral remainder estimate under its low-energy band hypothesis. It supplies no estimate for omitted terms in this beta truncation. This theorem derives no numerical QED beta coefficient and identifies no scheme parameter with a measured observable.
