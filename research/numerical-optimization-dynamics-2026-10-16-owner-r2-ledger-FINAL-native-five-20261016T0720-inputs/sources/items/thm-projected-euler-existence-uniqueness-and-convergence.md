---
id: thm-projected-euler-existence-uniqueness-and-convergence
kind: theorem
title: Existence and uniqueness for projected dynamics and convergence of projection Euler under countable and dependent choice
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-projected-contact-dynamics-and-euler-step
  - lem-projection-onto-closed-convex-set-is-nonexpansive
  - lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence
  - lem-projected-contact-solutions-are-unique
  - thm-heine-borel-rn
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-bv-functions-are-differentiable-almost-everywhere
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - def-locally-integrable-function-on-r-n
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - lem-rat-embeds-dense
  - thm-rationals-countable
  - thm-n-cross-n-countable
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-union-of-null-is-null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
axiom_use: Countable Choice is used for almost-everywhere differentiability, Lebesgue differentiation, and countable unions of null exceptional sets. Dependent Choice is inherited through the absolutely-continuous FTC supplier used for the integrated variational identities and uniqueness estimate. The finite-dimensional compactness construction and normal-cone monotonicity estimates introduce no further choices.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; maximal-monotone differential inclusions and projected dynamics. Its forcing sign is opposite to the convention used here.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161, and Lecture 23, slides 301–303; normal cones of indicators and projection variational inequalities.
---

## Statement

Let $d\ge1$, let $C\subseteq\mathbb R^d$ be nonempty, compact, and convex, let $T>0$, and let $x_0\in C$. Suppose $f:[0,T]\times C\to\mathbb R^d$ is Lipschitz in the explicit sense
$$\|f(t,x)-f(s,y)\|_2\le L\bigl(|t-s|+\|x-y\|_2\bigr)$$
for some $L\ge0$ and all $s,t,x,y$. Assume the Axioms of Countable Choice and Dependent Choice. Then the projected inclusion
$$x(0)=x_0,\qquad f(t,x(t))-\dot x(t)\in N_C(x(t))\quad\text{for almost every }t\in[0,T]$$
has a unique absolutely continuous solution $x:[0,T]\to C$. For each integer $N\ge1$, define $h=T/N$, $t_k=kh$, and the exact projection Euler nodes by
$$x_{k+1}=P_C\bigl(x_k+h f(t_k,x_k)\bigr),\qquad k=0,\ldots,N-1.$$
Their affine interpolants converge uniformly to $x$ as $N\to\infty$. Countable Choice is used for the almost-everywhere statements and null-set unions; Dependent Choice enters through the absolutely-continuous FTC supplier used in the integrated proof. The monotonicity estimate for uniqueness makes no additional choices.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the set, forcing, and initial state in the Statement.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. It is used by the differentiability, Lebesgue-differentiation, and null-union suppliers below.

[A2] [[def-dependent-choice]]: every serial relation on a nonempty set admits an infinite dependent sequence. It is inherited through [F7]'s absolutely-continuous FTC.

[F1] [[def-projected-contact-dynamics-and-euler-step]]: $P_C$ is the unique nearest-point projection, $N_C$ has the outward convention, and the exact projection Euler recurrence and affine interpolation are as in the Statement.

[F2] [[lem-projection-onto-closed-convex-set-is-nonexpansive]]: $P_C$ is nonexpansive.

[F3] [[lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence]]: a sequence of uniformly Lipschitz curves into compact closed $C$ has a uniformly convergent subsequence with limit in $C$.

[F4] [[lem-projected-contact-solutions-are-unique]]: under Countable Choice and Dependent Choice, for a forcing Lipschitz in $x$, any two absolutely continuous solutions with the same initial state agree.

[F5] [[thm-heine-borel-rn]]: compact subsets of $\mathbb R^d$ are bounded.

[F6] [[thm-c1-lipschitz-ac-bv-hierarchy]] and [[thm-bv-functions-are-differentiable-almost-everywhere]]: a Lipschitz curve is absolutely continuous and differentiable almost everywhere, componentwise.

[F7] [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]] and [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: under Countable Choice and Dependent Choice, for an absolutely continuous vector curve, $\Phi_z(x)=\langle x,z\rangle-\tfrac12\|x\|_2^2$ is absolutely continuous, has derivative $\langle\dot x,z-x\rangle$ almost everywhere, and its derivative integrates to its endpoint difference.

[F8] [[def-locally-integrable-function-on-r-n]] and [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]: for a locally Lebesgue-integrable function on $\mathbb R$, at almost every $t$ the averages $(2r)^{-1}\int_{t-r}^{t+r}g(s)\,ds$ tend to $g(t)$ as $r\downarrow0$; the theorem assumes Countable Choice.

[F9] [[thm-rationals-countable]] and [[thm-n-cross-n-countable]]: finite-dimensional $\mathbb Q^d$ is countable. [[lem-rat-embeds-dense]]: rational points are dense in $\mathbb R$, hence coordinatewise rational vectors approximate every point of $\mathbb R^d$.

[F10] [[thm-countable-union-of-null-is-null]]: under Countable Choice, a countable union of Lebesgue-null subsets of $\mathbb R$ is null.

## Proof

1.1 Since $C$ is compact, [F5] gives a finite diameter bound $D$ for $C$. Put $M=\|f(0,x_0)\|_2+L(T+D)$; the Lipschitz hypothesis gives $\|f(t,x)\|_2\le M$ on $[0,T]\times C$. For each exact Euler step, $P_C(x_k)=x_k$, so [F2] gives $\|x_{k+1}-x_k\|_2\le h\|f(t_k,x_k)\|_2\le hM$. Convexity keeps the affine interpolant in $C$, and its slope on each step has norm at most $M$. [F1, F2, F5, given, algebra]

1.2 On each open mesh cell $[t_k,t_{k+1})$, write $X_h$ for the affine interpolant, $\bar X_h=x_{k+1}$, $F_h=f(t_k,x_k)$, and $n_h=F_h-\dot X_h=(x_k+hF_h-x_{k+1})/h$. By the projection variational inequality in [F1], $n_h\in N_C(\bar X_h)$. Consequently, for every fixed $z\in C$, $$\langle\dot X_h-F_h,z-\bar X_h\rangle\ge0.$$ [F1, given, algebra]

2.1 Apply [F3] to the sequence of interpolants for $N=1,2,\ldots$. Along a subsequence $N_j\to\infty$, they converge uniformly to a map $x:[0,T]\to C$ with $x(0)=x_0$ and Lipschitz constant $M$. By [F6], $x$ is absolutely continuous and differentiable almost everywhere; at each differentiability point, the Lipschitz inequality implies $\|\dot x(t)\|_2\le M$. [A1, F3, F6, step 1.1, given]

3.1 Fix $0\le a<b\le T$ and a fixed $z\in C$. We have $\|\bar X_h-X_h\|_2\le Mh$ and $\|\dot X_h-F_h\|_2\le2M$, so replacing $\bar X_h$ by $X_h$ in the integral of step 1.2 changes it by at most $2M^2h(b-a)$. The term with $\dot X_h$ is the endpoint difference of $\Phi_z(X_h)$, where $\Phi_z(w)=\langle w,z\rangle-\tfrac12\|w\|_2^2$. Uniform convergence gives its limit as the endpoint difference of $\Phi_z(x)$; [F7] identifies that difference with $\int_a^b\langle\dot x,z-x\rangle$. Also $$\|F_h(t)-f(t,x(t))\|_2\le L\bigl(h+Mh+\|X_h-x\|_\infty\bigr)$$ on each mesh cell, so $F_h\to f(t,x(t))$ uniformly along the selected subsequence. Passing to the limit in the integrated inequality yields $$\int_a^b g_z(t)\,dt\ge0,\qquad g_z(t):=\langle\dot x(t)-f(t,x(t)),z-x(t)\rangle.$$ [A1, A2, F1, F6, F7, step 2.1, step 1.2, given, algebra]

4.1 The function $g_z$ is Lebesgue-integrable: [F7] gives a measurable $L^1$ version of $\dot x$; define it to be $0$ where the derivative is undefined. Boundedness of $f,x,z$ makes the other factors integrable. Extend this representative of $g_z$ by zero outside $[0,T]$ to obtain a locally integrable function on $\mathbb R$. Since every interval integral in step 3.1 is nonnegative, $G_z(t)=\int_0^t g_z(s)\,ds$ is nondecreasing. At almost every interior $t$, [F8] gives $$\lim_{r\downarrow0}\frac1{2r}\int_{t-r}^{t+r}g_z(s)\,ds=g_z(t).$$ For every sufficiently small $r>0$, the average on the left is $(G_z(t+r)-G_z(t-r))/(2r)\ge0$ because $G_z$ is nondecreasing. Taking the limit yields $g_z(t)\ge0$ almost everywhere for each fixed $z\in C$. [A1, F7, F8, step 3.1, given, algebra]

5.1 Let $D_0=\{P_C(q):q\in\mathbb Q^d\}$. It is countable by [F9]. It is dense in $C$: for any $z\in C$ and $\eta>0$, choose $q\in\mathbb Q^d$ with $\|q-z\|_2<\eta/2$; since $P_C(q)$ is nearest, $\|P_C(q)-q\|_2\le\|z-q\|_2$, hence $\|P_C(q)-z\|_2<\eta$. For each $z\in D_0$, step 4.1 gives a null exceptional set where $g_z<0$. Countable Choice [A1] and [F10] make their union, together with the null set where $\dot x$ does not exist, null. Outside it, $g_z(t)\ge0$ for every $z\in D_0$; continuity in $z$ and density extend the inequality to every $z\in C$. Thus $f(t,x(t))-\dot x(t)\in N_C(x(t))$ almost everywhere by [F1]. This proves existence of a solution along the selected subsequence. [A1, F1, F9, F10, step 4.1, given, choose]

6.1 The uniqueness lemma [F4], under the same choice assumptions through its FTC supplier, shows that every uniformly convergent subsequence limit of the Euler interpolants is this same solution $x$. If the full sequence did not converge uniformly to $x$, some subsequence would stay at uniform distance at least $\delta>0$; [F3] would give a further uniformly convergent subsequence, whose limit is a solution by steps 1.2–5.1 and hence equals $x$, a contradiction. Therefore the entire sequence converges uniformly to $x$. [A1, A2, F3, F4, step 2.1, step 1.2, step 5.1, given, assume-hyp, contradiction] ∎
