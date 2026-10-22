---
id: thm-qftx-truncated-rg-ode
kind: theorem
title: One-coupling truncated RG flow and leading beta-coefficient invariance
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-locally-lipschitz-in-the-state-variable
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
forward_refs: []
dependency_roles:
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $\rho>0$ be a dimensionless scale and put $t=\log\rho\in\mathbb R$. Take $I\subseteq\mathbb R$ to be an interval containing $0$. Let $g:I\to\mathbb R$ be a differentiable real coupling and let $b,g_0\in\mathbb R$ be dimensionless constants; require $g$ to satisfy the truncated scalar initial-value problem
$$\frac{dg}{dt}=bg^2,\qquad g(0)=g_0.$$
A solution through $(0,g_0)$ is **maximal** if there is no strictly larger interval $J\supsetneq I$ and solution $G:J\to\mathbb R$ of the same initial-value problem with $G|_I=g$. If $c:=bg_0=0$, the unique maximal real solution is $g(t)=g_0$ on $\mathbb R$. If $c\ne0$, the unique maximal solution through $t=0$ is
$$g(t)=\frac{g_0}{1-bg_0t}$$
on $(-\infty,c^{-1})$ when $c>0$ and on $(c^{-1},\infty)$ when $c<0$.

For the formal beta-series calculation, let $u$ be an indeterminate and work in $\mathbb R[ [u] ]$. Write $\beta(u)=bu^2+O(u^3)$ and let $\Phi(u)=u+au^2+O(u^3)$ be an invertible formal change of dimensionless coupling, with dimensionless $a\in\mathbb R$. The notation $O(u^k)$ means an element of $u^k\mathbb R[ [u] ]$, so its terms have degree at least $k$; the real trajectory $g(t)$ is distinct from the formal indeterminate $u$. Put $\widetilde u=\Phi(u)$, let $\Phi'$ be the termwise formal derivative, and define the transformed formal vector field in $\mathbb R[ [\widetilde u] ]$ by
$$\widetilde\beta(\widetilde u)=\bigl(\Phi'(u)\beta(u)\bigr)\big|_{u=\Phi^{-1}(\widetilde u)}.$$
The quadratic coefficient of $\widetilde\beta$ is $b$. The real ODE is exact only for the displayed truncation; neither it nor the formal scheme-change statement determines $b$ from a QFT graph or bounds omitted higher-order terms. Its pole is a property of this truncated equation, not a theorem about an ultraviolet completion.

## Statement references

[[def-first-order-ode-initial-value-problem-and-solution]]

## Facts & Assumptions

**Given:** $b,g_0\in\mathbb R$, $c=bg_0$, dimensionless $\rho>0$ with $t=\log\rho$, and the formal change $\Phi(u)=u+au^2+O(u^3)$ in $\mathbb R[ [u] ]$.

[A1] The vector field is the prescribed truncation $F(t,g)=bg^2$ on $D=\mathbb R^2$; no higher-order beta coefficients or measured coupling are specified.

[A2] The formal beta transformation is defined in $\mathbb R[ [u] ]$ by push-forward under the invertible formal series $\Phi$; its termwise derivatives and substitutions are coefficientwise, and no formal series is assumed to converge.

[F1] The Statement takes $\rho>0$ dimensionless and $t=\log\rho$, and separates the real trajectory $g(t)$ from the formal indeterminate $u\in\mathbb R[ [u] ]$. The scalar coefficient $b$ is prescribed independently; no renormalization cocycle or QFT coefficient calculation is assumed.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution on an interval is a differentiable real function satisfying the stated equation and initial condition.

[F3] [[def-locally-lipschitz-in-the-state-variable]]: a vector field is locally Lipschitz in the state variable when one finite Lipschitz constant works on each compact time-state cylinder.

[F4] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field locally Lipschitz in the state variable has a unique local solution, and two solutions with the same initial data agree on every common interval containing the initial time.

## Proof

**Proof technique:** direct verification of the rational solution, ODE uniqueness, and formal re-expansion.

**Given:** [A1]–[A2] and [F1]–[F4].

1.1 Under [A1], [F1] fixes $t=\log\rho$ as the dimensionless scale coordinate and the vector field is the prescribed $F(t,g)=bg^2$. If $c=0$, the constant function $g(t)=g_0$ has derivative zero and $bg_0^2=0$, so it solves the IVP on all of $\mathbb R$. If $c\ne0$, set $\gamma(t)=g_0/(1-ct)$ on the interval specified in the Statement. For every interior $t$,
$$\frac{\gamma(t+h)-\gamma(t)}{h}=\frac{g_0c}{(1-ct)(1-c(t+h))}\longrightarrow\frac{g_0c}{(1-ct)^2}=b\gamma(t)^2,$$
and $\gamma(0)=g_0$, so it solves the IVP. [A1, F1, F2, algebra]

2.1 The vector field $F(t,x)=bx^2$ is continuous on the open domain $D=\mathbb R^2$. On any compact time-state cylinder with $|x|,|y|\le R$,
$$|F(t,x)-F(t,y)|=|b||x-y||x+y|\le2|b|R|x-y|,$$
so it is locally Lipschitz in the state variable by [F3]. Uniqueness from [F4] shows that every solution through $(0,g_0)$ agrees with step 1.1 on its common interval. If $c\ne0$, any strictly larger interval containing the stated interval must contain $c^{-1}$. A solution $G$ on such an interval would be continuous at $c^{-1}$, while uniqueness forces $G=\gamma$ on the original interval and $|\gamma(t)|\to\infty$ as $t$ approaches $c^{-1}$ from within it, a contradiction. When $c=0$, the constant solution already exists on all of $\mathbb R$. These facts establish the stated maximal intervals. [A1, F2, F3, F4, step 1.1]

3.1 Termwise differentiation in $\mathbb R[ [u] ]$ gives $\Phi'(u)=1+2au+O(u^2)$. Since $\Phi$ has linear term $u$, recursive coefficient matching gives $\Phi^{-1}(\widetilde u)=\widetilde u+O(\widetilde u^2)$, hence $u^2=\widetilde u^2+O(\widetilde u^3)$. Therefore $\Phi'(u)\beta(u)=bu^2+O(u^3)$ and re-expression in $\widetilde u$ yields $\widetilde\beta(\widetilde u)=b\widetilde u^2+O(\widetilde u^3)$. The coefficient $b$ is unchanged; no coefficient at higher order is determined here. [A2, algebra] ∎

## Remarks

The adjacent [[thm-qftx-heavy-derivative-bound]] is a separate spectral remainder estimate under its low-energy band hypothesis. It supplies no estimate for omitted terms in this beta truncation. This theorem derives no numerical QED beta coefficient and identifies no scheme parameter with a measured observable. The context of [[def-qftx-scaling-cocycle]] motivates the logarithmic scale convention; the present theorem uses that convention directly and assumes no existence of a renormalization map or time-ordered system.
