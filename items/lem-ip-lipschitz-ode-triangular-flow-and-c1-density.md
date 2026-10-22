---
id: lem-ip-lipschitz-ode-triangular-flow-and-c1-density
kind: lemma
title: Global Lipschitz ODE flows and the C1 density formula
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-ip-gronwall-with-integrable-coefficient
  - def-countable-choice
  - def-dependent-choice
  - def-continuous-map-top
  - def-l-one-of-a-measure
  - lem-vector-valued-continuous-curve-space-is-complete
  - thm-banach-fixed-point
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-heine-cantor-metric
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-c1-dependence-of-solutions-on-initial-data
  - thm-chain-rule-for-total-derivatives
  - thm-determinant-differential-and-jacobis-formula
  - def-determinant-of-a-square-matrix
  - def-trace-of-a-square-matrix
  - thm-trace-of-ab-equals-trace-of-ba
  - thm-derivative-of-exponential
  - thm-chain-rule
  - lem-derivative-algebra-and-chain-rules
  - lem-mean-value-theorem-on-closed-interval
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-ftc-first-part
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  Countable Choice and Dependent Choice are used through the integrable-
  coefficient Grönwall lemma for the flow bounds. Countable Choice is also
  required by the C1 change-of-variables theorem in the optional density
  clause. No full Axiom of Choice is used here.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §§2.3–2.6"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "§2.3 Corollary 2.6 for an integrable time-dependent global Lipschitz coefficient; §2.4 Lemma 2.7 for generalized Grönwall and C1 dependence; §2.6 Theorem 2.17 for global continuation under linear growth (with its following locally integrable-bound remark). The local proof supplies the construction and estimates used here."
    - title: "Carnegie Mellon University, ODE existence and uniqueness notes, 2026"
      url: "https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html"
      locator: "ODE existence, Grönwall continuous-dependence, flow and Liouville formula sections; used as a second lecture-note treatment, with the integrable-coefficient extension proved locally here."
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "C1 change-of-variables formula for nonnegative Lebesgue-measurable functions."
---

## Statement

Assume Countable Choice and Dependent Choice. Let $T>0$, let $d,m\ge1$, and let $b:[0,T]\times\mathbb R^d\times\mathbb R^m\to\mathbb R^d$ be jointly continuous on the product Euclidean domain. Suppose that for every compact $K\subseteq\mathbb R^m$ there are nonnegative Lebesgue-measurable $a_K,L_K\in L^1([0,T])$ such that for almost every $t$, simultaneously for all $y\in K$ and $x,x'\in\mathbb R^d$,
$$|b(t,0,y)|\le a_K(t),\qquad |b(t,x,y)-b(t,x',y)|\le L_K(t)|x-x'|.$$
Here $L^1([0,T])$ means the functions have finite Lebesgue integral of their absolute values. Then for every $x_0\in\mathbb R^d$ and $y\in\mathbb R^m$ there is a unique continuously differentiable solution $x_y(\cdot;x_0)$ of
$$\dot x(t)=b(t,x(t),y),\qquad x(0)=x_0,$$
on all of $[0,T]$. Its terminal map $T_y(x_0):=x_y(T;x_0)$ is a bijection with jointly continuous forward and inverse maps in $(x_0,y)$, and for all $x_0,x_1$ and $y\in K$,
$$|T_y(x_0)-T_y(x_1)|\le e^{\int_0^T L_K(t)dt}|x_0-x_1|,\qquad |T_y^{-1}(x_0)-T_y^{-1}(x_1)|\le e^{\int_0^T L_K(t)dt}|x_0-x_1|.$$

In the separate C$^1$ clause, suppose additionally that the state derivative $D_xb$ exists and is jointly continuous. Then for fixed $y$, $T_y$ is a bijection and both $T_y$ and its inverse are continuously differentiable. For a measurable map $S$ and a measure $\mu$, define its image measure by $S_{\#}\mu(E):=\mu(S^{-1}(E))$. The derivative $A_y(t,x_0):=D_{x_0}x_y(t;x_0)$ solves
$$\dot A_y(t,x_0)=D_xb(t,x_y(t;x_0),y)A_y(t,x_0),\qquad A_y(0,x_0)=I_d,$$
with Liouville formula
$$\det A_y(t,x_0)=\exp\!\left(\int_0^t\operatorname{tr}D_xb(s,x_y(s;x_0),y)\,ds\right).$$
Consequently, if a probability measure $\eta$ on $\mathbb R^d$ has Lebesgue density $q$, meaning $\eta(E)=\int_Eq(x)\,dx$ for Borel $E$, the image measure $T_y{}_{\#}\eta$ has density
$$z\longmapsto q(T_y^{-1}(z))\,|\det D T_y^{-1}(z)|.$$
The global Lipschitz clause alone gives a bi-Lipschitz flow and does not assert a Jacobian density formula.

## Statement references

[Teschl, §§2.3–2.6, full ODE text](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

[CMU ODE notes, existence, flow, and Liouville formula](https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html)

[Folland, Theorem 2.47, change of variables](https://djvu.online/file/NPF4BEtSuqdFA)

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, and the jointly continuous drift and integrable uniform-in-space bounds in the Statement; the additional spatial differentiability assumptions only in its C$^1$ clause.

[A1] Countable Choice and Dependent Choice are available. They are used through the integrable-coefficient Grönwall estimate and the C$^1$ change-of-variables theorem. [[def-countable-choice]], [[def-dependent-choice]], [[lem-ip-gronwall-with-integrable-coefficient]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F1] The space $C(J,\mathbb R^d)$ with the supremum norm is complete on every compact interval $J$. [[lem-vector-valued-continuous-curve-space-is-complete]]

[F2] Every contraction of a nonempty complete metric space has a unique fixed point, obtained by iterating from any initial point. [[thm-banach-fixed-point]]

[F3] The norm of a vector-valued integral is bounded by the integral of the norm. [[thm-norm-inequality-for-the-vector-valued-integral]]

[F4] The indefinite integral of an integrable scalar function is continuous and absolutely continuous; integrals of nonnegative functions are nonnegative and monotone. [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F5] The primitive of a continuous Euclidean-valued curve is continuously differentiable, coordinatewise by the scalar fundamental theorem, with one-sided derivatives at the endpoints. [[thm-ftc-first-part]] The Banach-valued version is also available: [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]

[F6] A continuous real function on a compact metric space is uniformly continuous. [[thm-heine-cantor-metric]]

[F7] The difference-quotient proof of $C^1$ dependence applies on a common compact time interval when a compact state tube around the reference trajectory lies in the field domain and solutions through nearby initial states exist there; continuity of $D_xb$ on that tube gives the variational equation and continuous dependence of its matrix solution. Here, after fixing $y$, the field domain is $[0,T]\times\mathbb R^d$, which contains such a tube, and steps 2.1 and 4.1 give common existence and continuous dependence. This is the local use of [[thm-c1-dependence-of-solutions-on-initial-data]].

[F8] The chain rule for total derivatives gives the derivative of a composition of $C^1$ Euclidean maps. [[thm-chain-rule-for-total-derivatives]]

[F9] The determinant differential and Jacobi formula give $D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$ for invertible $A$; trace is cyclic. [[thm-determinant-differential-and-jacobis-formula]], [[def-determinant-of-a-square-matrix]], [[def-trace-of-a-square-matrix]], [[thm-trace-of-ab-equals-trace-of-ba]]

[F10] A C$^1$ diffeomorphism of open Euclidean sets satisfies the change-of-variables formula for every nonnegative Lebesgue-measurable integrand under Countable Choice. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F11] The scalar chain and product rules, exponential derivative, and mean-value theorem justify the integrating-factor identity and show that a differentiable function with zero derivative on an interval is constant. [[thm-chain-rule]], [[lem-derivative-algebra-and-chain-rules]], [[thm-derivative-of-exponential]], [[lem-mean-value-theorem-on-closed-interval]]

[F12] $L^1([0,T])$ consists of measurable functions whose absolute values have finite Lebesgue integral. [[def-l-one-of-a-measure]]

[F13] Joint continuity is continuity for the product Euclidean topology and is preserved by composition with a continuous curve. [[def-continuous-map-top]]

[F14] A continuous scalar function on a compact interval is bounded and Riemann integrable; under Countable Choice its Riemann and Lebesgue integrals agree. Apply this to each coordinate and to the norm of every continuous vector integrand below. Thus the componentwise vector integral and the norm integral in [F3] may be compared using Lebesgue almost-everywhere inequalities and the integrable bounds $a_K,L_K$; these bounds need not be Riemann integrable. [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

## Proof

**Given:** The drift, bounds, axioms and notation in the Statement.

1.1 Fix a compact parameter set $K$. Let $C(t)=\int_0^tL_K(s)ds$. By [F4] and [F12], $C$ is continuous and nondecreasing on $[0,T]$, and [F6] makes it uniformly continuous. Choose a finite partition $0=t_0<\cdots<t_N=T$ with mesh small enough that $C(t_{i+1})-C(t_i)=\int_{t_i}^{t_{i+1}}L_K(s)ds\le1/2$ on each cell. On a cell $J=[t_i,t_{i+1}]$, with initial value $z_i$, consider the closed supremum-norm ball of radius $R=2(1+|z_i|+\int_Ja_K)$ about the constant curve $z_i$. For $z$ in that ball define $\mathcal Tz(t)=z_i+\int_{t_i}^t b(s,z(s),y)\,ds.$ The integrand is continuous by [F13], so $\mathcal Tz$ is continuous. [F4, F5, F6, F12, F13, given, construct]

2.1 Use [F14] throughout to identify the continuous integrands' Riemann and Lebesgue integrals. Put $q_J=\int_JL_K\le1/2$. The triangle inequality and spatial Lipschitz bound with $x'=0$ give $|b(s,z(s),y)|\le a_K(s)+L_K(s)|z(s)|$ almost everywhere. Hence $\|\mathcal Tz-z_i\|_\infty\le\int_Ja_K+q_J(|z_i|+R)\le R,$ so the ball maps into itself. For two curves, [F3] and the Lipschitz bound give $\|\mathcal Tz-\mathcal Tw\|_\infty\le q_J\|z-w\|_\infty$. The ball is nonempty and complete by [F1], so [F2] gives a unique fixed point, which solves the integral equation and hence the ODE on $J$ by [F5]. Applying this construction successively on the finite partition, with each cell's endpoint as the next initial value, gives a solution on all of $[0,T]$. [A1, F1, F2, F3, F5, F14, step 1.1, given, algebra]

3.1 For solutions $x(t),x'(t)$ with the same $y$ and initial values $x_0,x'_0$, subtract their integral equations and use [F3] to obtain $|x(t)-x'(t)|\le|x_0-x'_0|+\int_0^t L_K(s)|x(s)-x'(s)|\,ds.$ The forward clause of the integrable-coefficient Grönwall lemma gives the factor $\exp(\int_0^tL_K)$, proving uniqueness and the forward Lipschitz bound. Applying the same existence and uniqueness construction to the reversed drift $\bar b(s,z,y)=-b(T-s,z,y)$ gives a backward solution from any terminal value; uniqueness shows that its time-zero map is the inverse of $T_y$ and the same estimate gives the inverse Lipschitz bound. [A1, F3, F14, step 2.1, given, algebra]

4.1 From the integral equation and [F3], $|x_y(t;x_0)|\le |x_0|+\int_0^T a_K+\int_0^tL_K(s)|x_y(s;x_0)|ds$. The integrable Grönwall estimate therefore gives $|x_y(t;x_0)|\le(|x_0|+\int_0^Ta_K)\exp(\int_0^TL_K)$, uniformly in $t$ and for $x_0,y$ in compact sets. Thus all such trajectories lie in a common compact state ball. The drift is uniformly continuous on the product of this ball, $[0,T]$, and $K$ by [F6]. Choose a compact $K$ containing a convergent sequence $y_n$ and its limit. For $(x_n,y_n)\to(x,y)$, subtract the integral equations along $x_{y_n}(\cdot;x_n)$ and $x_y(\cdot;x)$; the result is bounded by $|x_n-x|+T\omega(|y_n-y|)+\int_0^tL_K(s)|x_{y_n}(s;x_n)-x_y(s;x)|ds$, where $\omega(r)\to0$ is a modulus from [F6]. Grönwall proves uniform convergence of the paths. Repeating for the reversed drift proves continuity of the inverse map in initial value and parameter. [A1, F3, F4, F6, F14, step 3.1, given, algebra]

5.1 In the C$^1$ clause, fix $y$ and an initial state $x_0$. Steps 2.1 and 4.1 give common existence and continuous dependence for nearby initial states on $[0,T]$. Their trajectories and the line segments joining corresponding states lie in a common compact state ball, so $[0,T]$ times that ball is a compact state tube in the field domain. On this tube $D_xb$ is bounded and uniformly continuous. The difference-quotient argument in [F7] therefore applies on $[0,T]$: the map $x_0\mapsto x_y(t;x_0)$ is $C^1$ for every $t$, and its derivative is the solution of the variational equation. Apply the same argument to the reversed drift $\bar b(s,x,y)=-b(T-s,x,y)$; its time-$T$ map is $T_y^{-1}$ by uniqueness in step 3.1. The two maps are consequently $C^1$ inverses, so $T_y$ is a $C^1$ diffeomorphism. [F7, F8, step 2.1, step 3.1, step 4.1, given]

6.1 Write $B(t)=D_xb(t,x_y(t;x_0),y)$ and $A(t)=A_y(t,x_0)$. Step 5.1 applied on each restricted interval $[0,t]$ shows that the time-$t$ flow is a $C^1$ diffeomorphism, so $A(t)$ is invertible for every $t$ (and $A(0)=I_d$). The path $B$ is continuous. By [F5], $G(t):=\int_0^t\operatorname{tr}B(s)\,ds$ is differentiable on $(0,T)$ with $G'(t)=\operatorname{tr}B(t)$ and has the corresponding one-sided endpoint derivatives. For $0<t<T$, the total-derivative chain rule [F8] and the invertible-matrix formula in [F9], applied to the variational equation $A'=BA$, give $$\frac{d}{dt}\det A(t)=D\det(A(t))[A'(t)]=\det A(t)\operatorname{tr}(A(t)^{-1}B(t)A(t))=\det A(t)\operatorname{tr}B(t),$$ using cyclicity of trace; continuity extends this identity to the endpoints. By the scalar product and chain rules in [F11], $e^{-G(t)}\det A(t)$ has derivative zero on $(0,T)$, so the mean-value theorem makes it constant on $[0,T]$. Its value at $t=0$ is $1$; hence $\det A(t)=\exp(G(t))$, the asserted Liouville formula. [F5, F7, F8, F9, F11, step 5.1, given, algebra]

7.1 If $\eta(dx)=q(x)dx$, then for every Borel $E\subseteq\mathbb R^d$, $T_y{}_{\#}\eta(E)=\int_{T_y^{-1}(E)}q(x)dx.$ Apply [F10] to the diffeomorphism $T_y^{-1}$ and the nonnegative measurable integrand $x\mapsto\mathbf1_{T_y^{-1}(E)}(x)q(x)$. This rewrites the last integral as $\int_Eq(T_y^{-1}(z))|\det DT_y^{-1}(z)|dz$, which proves the stated density formula. The first part of the Statement used no C$^1$ assumption; therefore global Lipschitzness alone yields only the bi-Lipschitz flow conclusion. [A1, F10, step 5.1, given, algebra] ∎

