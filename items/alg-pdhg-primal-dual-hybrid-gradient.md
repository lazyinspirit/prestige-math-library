---
id: alg-pdhg-primal-dual-hybrid-gradient
kind: algorithm
title: "Chambolle–Pock primal-dual hybrid gradient"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-proper-closed-convex-function-on-rn
  - def-fenchel-conjugate-on-finite-dimensional-euclidean-space
  - lem-fenchel-conjugate-is-proper-closed-convex
  - def-saddle-point-for-convex-concave-lagrangian
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-induced-matrix-p-norm
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §§2–3.1"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
    - title: "Laurent Vandenberghe, UCLA EE236C Lecture Notes: Douglas–Rachford Splitting, §§4–5"
      url: "https://www.seas.ucla.edu/~vandenbe/236C/lectures/dr.pdf"
---

## Definition

Let $X=\mathbb R^n$, $Y=\mathbb R^m$, let $f:X\to(-\infty,+\infty]$ and
$g:Y\to(-\infty,+\infty]$ be proper closed convex, and let $K:X\to Y$ be
linear. Its unique adjoint $K^*:Y\to X$ exists by
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]], including zero-dimensional
spaces. Identify $K$ with its matrix in the standard Euclidean bases when using
the induced matrix norm below. The primal problem is $\min_x f(x)+g(Kx)$, with saddle function
$$\Phi(x,y)=f(x)+\langle Kx,y\rangle-g^*(y),$$
where $g^*$ is defined by [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]].
The saddle function $\Phi$ is evaluated on
$\operatorname{dom}f\times\operatorname{dom}g^*$, where both function values
are finite; no undefined extended-real subtraction is used outside this domain.
Assume $\tau,\sigma>0$ and
$\tau\sigma\|K\|_2^2<1$, where $\|K\|_2$ is the induced Euclidean operator
norm of [[def-induced-matrix-p-norm]]. Starting from $x^0,y^0$ and
$\bar x^0=x^0$, the exact recurrence is
$$y^{k+1}=\operatorname{prox}_{\sigma g^*}(y^k+\sigma K\bar x^k),\qquad x^{k+1}=\operatorname{prox}_{\tau f}(x^k-\tau K^*y^{k+1}),\qquad \bar x^{k+1}=2x^{k+1}-x^k.$$
In positive-dimensional spaces the proximal maps are everywhere single-valued
by [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]; in a
zero-dimensional space its sole input and output are the zero vector, so that
proximal call is single-valued directly. The proper closed convexity of $g^*$
follows from [[lem-fenchel-conjugate-is-proper-closed-convex]]. These are
mathematical existence statements, not finite evaluators.

The finite procedure also takes positive integer caps $C_y,C_x$ and supplied
deterministic solver programs $S_y,S_x$ and Boolean certificate-checker
programs $V_y,V_x$, with their complete instructions and data representations.
Each program uses discrete steps that terminate. On input $(h,t,v)$, a
solver may halt with **failed** or a candidate-certificate pair $(w,e)$.
The supplied checker is admissible only if
$V(h,t,v,w,e)=\mathrm{true}$ implies that $h(w)$ is finite and $w$ minimizes
$h(z)+\|z-v\|_2^2/(2t)$ over all $z$ in its Euclidean space.
This is a soundness condition on supplied programs; it does not promise
that an arbitrary proximal map has an exact finite evaluator or that a
certificate is always found. Proper closed convexity and the strict
step-size condition remain admissibility assumptions on the mathematical data.

Initialize $\bar x^0=x^0$. At each sweep retain the old state
$(x^k,y^k,\bar x^k)$. Return **invalid-input** for mismatched dimensions,
nonpositive $\tau$ or $\sigma$, or caps that are not positive integers.
First call $S_y$ on $(g^*,\sigma,y^k+\sigma K\bar x^k)$, then, if it
returns $(w,e)$, call $V_y$ on those inputs and that pair. Allow at most
$C_y$ program steps in total for the solver and checker. After each step
inspect for termination: an explicit failure, malformed output, or false
checker result returns **prox-call-failed** with **call = dual**; a true
result stores $w$ as tentative $y^{k+1}$. Accept a true result on the last
allowed step. If the budget is used without such a result or failure,
return **prox-cap-exhausted** with **call = dual**. After dual success,
apply the identical rule with $S_x,V_x,C_x$ to
$(f,\tau,x^k-\tau K^*y^{k+1})$, recording **call = primal** on failure
or exhaustion. Every failure returns the unchanged old state. Only after
both calls succeed, commit $x^{k+1},y^{k+1}$ and
$\bar x^{k+1}=2x^{k+1}-x^k$, and return **success** with this state.
A requested finite run repeats this sweep for an input nonnegative integer
number of sweeps and stops at its first nonsuccess status. No convergence
claim is made for a failed run.

## Facts & Assumptions

**Given:** Proper closed convex $f,g$, finite Euclidean spaces, linear $K$, positive $\tau,\sigma$ satisfying the strict step condition, initial $x^0,y^0$, positive integer caps and the supplied solver and sound certificate-checker programs in the Definition.

[A1] The functions are proper closed convex; $\tau,\sigma>0$; $\tau\sigma\|K\|_2^2<1$; caps are positive integers; and the supplied programs satisfy the Definition's step and certificate-soundness requirements.


[F1] [[def-proper-closed-convex-function-on-rn]]: $f,g$ are proper closed convex functions.

[F2] [[def-fenchel-conjugate-on-finite-dimensional-euclidean-space]]: $g^*(y)=\sup_v(\langle y,v\rangle-g(v))$.

[F3] [[lem-fenchel-conjugate-is-proper-closed-convex]]: $g^*$ is proper closed convex.

[F4] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: for each positive-dimensional space, every input and positive parameter give a unique proximal output satisfying its subgradient optimality condition.

[F5] [[def-induced-matrix-p-norm]]: $\|K\|_2=\sup_{\|x\|_2\le1}\|Kx\|_2$.

[F6] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]] gives the unique finite-dimensional adjoint; [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Kx,y\rangle=\langle x,K^*y\rangle$.

[F7] [[def-euclidean-inner-product]]: $\mathbb R^0$ consists of the single zero vector.

## Verification


1.1 By [F1] and [F3], both proximal inputs in the recurrence are proper closed convex functions; [F2] supplies the defining conjugate expression for the dual term. If a proximal space has positive dimension, [F4] gives an everywhere unique output. If it is zero-dimensional, [F7] makes it the singleton $\{0\}$ and properness gives the unique zero output directly. Since $\tau,\sigma>0$, every exact update exists uniquely, including when $K=0$; the strict step inequality then reads $0<1$. [A1, F1, F2, F3, F4, F7, given]

2.1 The three assignments specify the exact state and extrapolated value; $K^*$ in the primal update is the adjoint of [F6], and the step-size condition uses the induced norm [F5]. The finite wrapper separately specifies supplied solver/checker programs, their ordered calls, shared per-call budgets and distinct failure versus exhaustion branches. Its certificates concern exactly the unique proximal outputs of [F4]; their existence alone supplies no evaluator. No pointwise convergence is asserted. [A1, F5, F6, given, F4] ∎
