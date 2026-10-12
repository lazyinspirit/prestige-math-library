---
id: lem-cm-strict-minimum-has-positive-semidefinite-hessian
kind: lemma
title: "A C² local minimum has vanishing gradient and positive semidefinite Hessian"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [cor-second-order-taylor-expansion-with-the-hessian, cor-hessian-is-symmetric, def-hessian-and-euclidean-critical-point, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, thm-fermat-for-euclidean-local-extrema, def-ck-euclidean-maps-and-diffeomorphisms, def-function-limit]
dependency_roles:
  cor-second-order-taylor-expansion-with-the-hessian: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-fermat-for-euclidean-local-extrema: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-function-limit: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.7 (fixed points correspond to extremal points of the potential U), printed page 204"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (equilibria and the second-order Taylor expansion of the potential), printed pages 37-40"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $U:\Omega\to\mathbb R$ be of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $q_0\in\Omega$ be a local minimum of $U$: there is $\rho>0$ with $\overline B(q_0,\rho)\subseteq\Omega$ and $U(q)\ge U(q_0)$ for every $q\in\overline B(q_0,\rho)$. Then

$$\nabla U(q_0)=0,\qquad h^{\mathsf T}D^2U(q_0)h\ge0\quad\text{for every }h\in\mathbb R^n,$$

where $D^2U(q_0)$ is the Hessian matrix, which is symmetric ([[cor-hessian-is-symmetric]], [[def-hessian-and-euclidean-critical-point]]).

## Facts & Assumptions

**Given:** The $C^2$ function $U$ and the local minimum $q_0$.

[F1] Fermat's theorem in Euclidean space: if a differentiable function has a local extremum at an interior point, its gradient vanishes there ([[thm-fermat-for-euclidean-local-extrema]], [[def-jacobian-matrix-and-gradient]], [[def-total-derivative-in-euclidean-space]]).

[F2] Second-order Taylor expansion: for $C^2$ $f$ near $a$, $f(a+h)=f(a)+\nabla f(a)\cdot h+\tfrac12\langle H_f(a)h,h\rangle+o(\|h\|^2)$, and the Hessian is symmetric ([[cor-second-order-taylor-expansion-with-the-hessian]], [[cor-hessian-is-symmetric]], [[def-euclidean-inner-product]]).

[F3] The Peano remainder is a limit statement: writing $f(q_0+th)=f(q_0)+t\nabla f(q_0)\cdot h+\tfrac12t^2h^{\mathsf T}H_f(q_0)h+r(th)$ for small $t$, one has $r(th)/\|th\|_2^2\to0$ as $t\downarrow0$; by the definition of the function limit ([[def-function-limit]]), for every $\varepsilon>0$ there is $\delta>0$ with $|r(th)|\le\varepsilon t^2\|h\|_2^2$ for $0<t<\delta$ ([[cor-second-order-taylor-expansion-with-the-hessian]], [[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** direct; apply Fermat's theorem and expand along a line.

1.1 The restriction $\varphi_h(t):=U(q_0+th)$ is defined and differentiable for $|t|$ small, with $\varphi_h'(0)=\nabla U(q_0)\cdot h$ by the chain rule; it has a local minimum at $t=0$ because $U$ does. By the one-variable Fermat theorem (or [F1] applied in one dimension) $\varphi_h'(0)\ge0$ and $\varphi_{-h}'(0)\ge0$; since $\varphi_{-h}'(0)=-\nabla U(q_0)\cdot h$, both inequalities give $\nabla U(q_0)\cdot h=0$. As this holds for every $h$, $\nabla U(q_0)=0$. [given, F1, F2, algebra]

2.1 Fix $h\in\mathbb R^n$, assume $h\ne0$ (the case $h=0$ is trivial), and apply [F2] at $a=q_0$ to the vector $th$ with $t>0$ small: $$U(q_0+th)=U(q_0)+t\nabla U(q_0)\cdot h+\tfrac12t^2\,h^{\mathsf T}D^2U(q_0)h+o(t^2) .$$ By step 1.1 the linear term vanishes, and the left side is $\ge U(q_0)$; hence, using the notation of [F3], $\tfrac12t^2h^{\mathsf T}D^2U(q_0)h+r(th)\ge0$ for all sufficiently small $t>0$. Suppose for contradiction that $h^{\mathsf T}D^2U(q_0)h=-c<0$. Choose $\varepsilon:=c/(4\|h\|_2^2)$ in [F3]; then for $0<t<\delta$, $r(th)\le\varepsilon t^2\|h\|_2^2=ct^2/4$, so the left side is at most $-\tfrac12ct^2+\tfrac14ct^2=-\tfrac14ct^2<0$, a contradiction. Hence $h^{\mathsf T}D^2U(q_0)h\ge0$. [step 1.1, F2, F3, algebra] ∎

## Remarks

- The converse is false without a strictness hypothesis: a $C^2$ function with $\nabla U(q_0)=0$ and positive semidefinite Hessian need not have a local minimum at $q_0$. The lemma records only the necessary conditions, which is what the mechanical energy-stability theorem and the linearisation proposition use.

- Nothing is asserted about strict positivity of the Hessian: a strict minimum may have a degenerate Hessian (for example $U(q)=|q|^4$ at $q_0=0$), and the energy-stability theorem is stated for strict minima without any Hessian hypothesis.
