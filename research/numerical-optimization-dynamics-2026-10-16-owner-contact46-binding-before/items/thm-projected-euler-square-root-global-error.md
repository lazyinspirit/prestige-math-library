---
id: thm-projected-euler-square-root-global-error
kind: theorem
title: A square-root global error bound for projected Euler with certified projection tolerances
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - thm-projected-euler-existence-uniqueness-and-convergence
  - def-projected-contact-dynamics-and-euler-step
  - alg-certified-projected-euler-method
  - lem-normal-cone-maximal-monotone-and-projection-resolvent
  - lem-projection-onto-closed-convex-set-is-nonexpansive
  - lem-projected-euler-projection-residual-certificate
  - thm-gronwall-integral-inequality
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-bv-functions-are-differentiable-almost-everywhere
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-exponential-dominates-one-plus-x
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
axiom_use: Countable Choice and Dependent Choice are inherited through the solution-existence theorem and its absolutely-continuous FTC supplier; the estimates conditional on that solution use no additional choice.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; maximal-monotone projected dynamics. The error estimate below is proved locally for the stated explicit scheme.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slides 301–303; projection steps and variational inequalities, not this dynamical error bound.
---

## Statement

Assume the hypotheses of [[thm-projected-euler-existence-uniqueness-and-convergence]], including Countable Choice and Dependent Choice, and let $x$ be its unique solution. Let $D$ be any finite bound for the diameter of $C$, set
$$M=\|f(0,x_0)\|_2+L(T+D),\qquad C_0=8M^2+L^2(1+M)^2T,\qquad C=\sqrt{C_0T e^{(2L+1)T}}.$$
For $h=T/N$, let $X_h$ be the affine interpolant of the exact projection Euler recurrence. If a complete run of [[alg-certified-projected-euler-method]] returns nodes $\widetilde x_k$ with certified residuals
$$\sup_{z\in C}\langle \widetilde x_k+h f(t_k,\widetilde x_k)-\widetilde x_{k+1},z-\widetilde x_{k+1}\rangle\le\varepsilon_k^2,$$
and $\widetilde X_h$ is their affine interpolant, then
$$\sup_{0\le t\le T}\|\widetilde X_h(t)-x(t)\|_2\le C\sqrt h+e^{LT}\sum_{k=0}^{N-1}\varepsilon_k.$$
In particular, the exact-projection branch has uniform error $O(\sqrt h)$. Certified projection errors with $\sum_k\varepsilon_k=O(\sqrt h)$ retain that rate; no rate follows from an uncertified solver tolerance alone.

## Facts & Assumptions

**Given:** The data, Countable Choice and Dependent Choice assumptions of [[thm-projected-euler-existence-uniqueness-and-convergence]], and a completed inexact projected-Euler run with the residual certificates in the Statement.

[A1] [[def-countable-choice]] is assumed as in [F1] to obtain the exact solution $x$; the estimates use no additional countable choices.

[A2] [[def-dependent-choice]] is assumed as in [F1] to obtain the exact solution $x$; the estimates use no additional dependent choices.

[F1] [[thm-projected-euler-existence-uniqueness-and-convergence]]: there is a unique absolutely continuous $x$ satisfying $f(t,x)-\dot x\in N_C(x)$ almost everywhere.

[F2] [[lem-normal-cone-maximal-monotone-and-projection-resolvent]]: $N_C$ is monotone.

[F3] [[lem-projection-onto-closed-convex-set-is-nonexpansive]]: $P_C$ is nonexpansive.

[F4] [[lem-projected-euler-projection-residual-certificate]]: a feasible candidate with variational residual at most $\varepsilon^2$ is within distance $\varepsilon$ of its exact projection.

[F5] [[alg-certified-projected-euler-method]]: a completed run returns feasible nodes with the residual certificates specified in the algorithm Definition.

[F6] [[thm-c1-lipschitz-ac-bv-hierarchy]] and [[thm-bv-functions-are-differentiable-almost-everywhere]]: Lipschitz curves are absolutely continuous and differentiable almost everywhere.

[F7] [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]] and [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: products of AC components are AC with the product derivative a.e., and the derivative integrates to the endpoint difference.

[F8] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle a,b\rangle|\le\|a\|_2\|b\|_2$.

[F9] [[lem-exponential-dominates-one-plus-x]]: $1+s\le e^s$ for every real $s$.

[F10] [[thm-gronwall-integral-inequality]]: if $u\ge0$ is continuous and $u(t)\le A+\int_0^t b u$ for constants $A,b\ge0$, then $u(t)\le A e^{bt}$.

[F11] [[def-projected-contact-dynamics-and-euler-step]]: the outward cone is $N_C(x)=\{n:\langle n,z-x\rangle\le0\text{ for every }z\in C\}$, and an exact projection step satisfies $x_{k+1}=P_C(x_k+h f(t_k,x_k))$.

## Proof

1.1 Let $X_h$ be the exact affine Euler interpolant, $\bar X_h(t)=x_{k+1}$ on $[t_k,t_{k+1})$, $F_h(t)=f(t_k,x_k)$, and $n_h=F_h-\dot X_h$. The projection variational inequality in [F11] gives $n_h(t)\in N_C(\bar X_h(t))$. Nonexpansiveness [F3] gives $\|\dot X_h\|_2\le M$ and $\|\bar X_h-X_h\|_2\le hM$, so $\|n_h\|_2\le2M$. For the exact solution put $n(t)=f(t,x(t))-\dot x(t)\in N_C(x(t))$. At almost every differentiability point, $x(t+s)\in C$ on both sides of $t$; the normal inequality with $z=x(t+s)$, divided by positive and negative $s$ and passed to the limit, gives $\langle n(t),\dot x(t)\rangle=0$. Hence $\|\dot x(t)\|_2^2=\langle f(t,x(t)),\dot x(t)\rangle$, so Cauchy–Schwarz [F8] gives $\|\dot x(t)\|_2\le M$ and $\|n(t)\|_2\le2M$. [A1, A2, F1, F3, F6, F8, F11, given, choose, algebra]

1.2 By [F4] and [F5], each inexact node is within $\varepsilon_k$ of the exact projection of its own unprojected input. Comparing it with the exact node and using [F3] and the state-Lipschitz bound gives $$\|\widetilde x_{k+1}-x_{k+1}\|_2\le(1+hL)\|\widetilde x_k-x_k\|_2+\varepsilon_k.$$ Iteration from the common initial point yields $\max_k\|\widetilde x_k-x_k\|_2\le(1+hL)^N\sum_k\varepsilon_k$. By [F9], $(1+hL)^N\le e^{NhL}=e^{LT}$. [F3, F4, F5, F9, given, algebra, induction]

2.1 Put $e_h=X_h-x$ and $E_h=\|e_h\|_2^2$. By [F6]–[F7], $E_h$ is absolutely continuous and $E_h'=2\langle\dot X_h-\dot x,e_h\rangle$ almost everywhere. Monotonicity [F2] at $\bar X_h$ and $x$ gives $\langle n_h-n,\bar X_h-x\rangle\ge0$. Since $\|\bar X_h-X_h\|_2\le hM$ and $\|n_h-n\|_2\le4M$, differentiation yields $$\tfrac12E_h'\le L E_h+Lh(1+M)\sqrt{E_h}+4M^2h.$$ Indeed, $\|F_h-f(t,x)\|_2\le L(h+\|x_k-x(t)\|_2)\le L(\|e_h\|_2+h(1+M))$ using the within-step displacement bound; [F8] bounds its inner product with $e_h$. [F1, F2, F6, F7, F8, step 1.1, given, algebra]

3.1 Since $(\sqrt{E_h}-Lh(1+M))^2\ge0$, we have $Lh(1+M)\sqrt{E_h}\le\tfrac12E_h+\tfrac12L^2(1+M)^2h^2$. Thus $$E_h'\le(2L+1)E_h+8M^2h+L^2(1+M)^2h^2\le(2L+1)E_h+C_0h,$$ since $h\le T$. Integrating the inequality and using $E_h(0)=0$ gives $E_h(t)\le C_0hT+(2L+1)\int_0^tE_h(s)\,ds$. By [F10], $\sup_t E_h(t)\le C_0hT e^{(2L+1)T}$, hence $\sup_t\|X_h(t)-x(t)\|_2\le C\sqrt h$. [F7, F10, step 2.1, given, algebra]

4.1 On each mesh cell, $\widetilde X_h-X_h$ is the affine interpolation of its endpoint errors, so its norm is at most the larger endpoint norm. The triangle inequality with step 3.1 gives $$\sup_t\|\widetilde X_h(t)-x(t)\|_2\le C\sqrt h+e^{LT}\sum_k\varepsilon_k,$$ which is the claimed estimate. If $\varepsilon_k=0$ all $k$, or if their sum is $O(\sqrt h)$ along a refining mesh, the stated $O(\sqrt h)$ rate follows. [step 3.1, step 1.2, given, algebra] ∎
