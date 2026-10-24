---
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-continuous-ode-adjoint-gradient-formula.json
id: thm-continuous-ode-adjoint-gradient-formula
kind: theorem
title: The continuous ODE adjoint gives the parameter gradient with endpoint terms
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [lem-parameter-ode-flow-tangent-on-common-tube, lem-ode-adjoint-pairing-integration-by-parts, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-chain-rule-for-total-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, Chapter 3"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Statement

Assume $T>0$. Let $u_\theta$ solve the parameter-dependent ODE of Parameter-dependent ODE flows have the variational tangent on a common tube on $[0,T]$. Let
$$J(\theta)=\phi(u_\theta(T),\theta)+\int_0^T\ell(t,u_\theta(t),\theta)\,dt,$$
where $\phi$ and $\ell$ are $C^1$ on a neighborhood of the trajectory tube and their first derivatives are bounded and uniformly continuous there. Let $S=D_\theta u_\theta$ be the tangent from that lemma. Let $p$ solve the terminal adjoint problem
$$-p'(t)=D_u f(t,u_\theta(t),\theta)^Tp(t)+D_u\ell(t,u_\theta(t),\theta)^T,\qquad p(T)=D_u\phi(u_\theta(T),\theta)^T.$$
Then
$$\nabla_\theta J=D_\theta\phi(u_\theta(T),\theta)^T+D_\theta u_0(\theta)^Tp(0)+\int_0^T\bigl(D_\theta\ell(t,u_\theta,\theta)^T+D_\theta f(t,u_\theta,\theta)^Tp(t)\bigr)\,dt.$$
This formula separates initial, terminal, running-cost and vector-field parameter terms. It applies only while the common-tube and differentiability hypotheses hold.

## Statement references

[[lem-parameter-ode-flow-tangent-on-common-tube]]

## Facts & Assumptions

**Given:** $T>0$, the common-tube ODE, $C^1$ initial map, objective, and bounded uniformly continuous first derivatives in the Statement.

[F1] [[lem-parameter-ode-flow-tangent-on-common-tube]]: the parameter flow is $C^1$ and $S'=D_uf\,S+D_\theta f$, $S(0)=D_\theta u_0$.

[F2] [[lem-ode-adjoint-pairing-integration-by-parts]]: if $S'=AS+B$ and $p'=-A^Tp-g$, then $p(T)^TS(T)-p(0)^TS(0)=\int_0^T(-g^TS+p^TB)\,dt$.

[F3] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: a continuous coefficient linear matrix IVP has a unique solution on the full compact interval.

[F4] The total-derivative chain rule differentiates a composition of $C^1$ Euclidean maps ([[thm-chain-rule-for-total-derivatives]]).

[A1] All objective derivatives and ODE derivative coefficients are continuous and bounded on the common compact tube, and their first derivatives have the uniform continuity needed to differentiate the integral objective.

## Proof

1.1 Fix $\theta$ and write $A(t)=D_uf(t,u_\theta(t),\theta)$ and $g(t)=D_u\ell(t,u_\theta(t),\theta)^T$. The coefficient matrix $\mathcal C(t)=\begin{pmatrix}-A(t)^T&-g(t)\\0&0\end{pmatrix}$ is continuous. Apply [F3] with initial time $T$ to the homogeneous matrix equation $Z'=\mathcal C(t)Z$, choosing an initial matrix whose first column is $(D_u\phi(u_\theta(T),\theta)^T,1)^T$ and whose other columns are zero. Its first column is $(p(t),1)^T$ and solves the terminal adjoint equation. Any other solution embeds as a column of such a matrix solution, so uniqueness in [F3] gives uniqueness of $p$. [F3, given, construct]

1.2 By [F1] and the chain rule [F4], the terminal derivative is $D_\theta\phi^T+S(T)^TD_u\phi^T$. For the running term, a parameter increment $h$ gives $\Delta u(t)=S(t)h+o(\|h\|)$ uniformly in $t$ by [F1]. Uniform continuity of the objective derivatives on the common compact tube gives a uniform first-order remainder $o(\|h\|)$ along the segment from $(u_\theta(t),\theta)$ to $(u_{\theta+h}(t),\theta+h)$; the common integrable majorant permits integration of this remainder. Applying [F4] pointwise and integrating therefore gives the running derivative $\int_0^T(D_\theta\ell^T+S^TD_u\ell^T)\,dt$. Consequently $\nabla_\theta J=D_\theta\phi^T+S(T)^TD_u\phi^T+\int_0^T(D_\theta\ell^T+S^TD_u\ell^T)\,dt$. [F1, F4, A1, given]

1.3 In [F2], set $A=D_uf$, $B=D_\theta f$, and $g=D_u\ell^T$. The adjoint equation in the Statement and tangent equation in [F1] satisfy its hypotheses. Transposing that row pairing identity and using $p(T)=D_u\phi^T$ gives $$S(T)^TD_u\phi^T-D_\theta u_0^Tp(0)=\int_0^T(-S^TD_u\ell^T+D_\theta f^Tp)\,dt.$$ [F1, F2, given]

2.1 Substitute step 1.3 into step 1.2; the terms involving $S^TD_u\ell^T$ cancel, leaving the asserted continuous adjoint gradient formula. [step 1.2, step 1.3, algebra] ∎

