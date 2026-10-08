---
id: ex-piecewise-affine-approximations
kind: example
title: "Piecewise-affine approximation of a measurable coefficient"
status: draft
origin: pipeline
deps:
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-ball-average-operator-on-r-n
  - def-complex-domain
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-lebesgue-point-and-lebesgue-set
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-locally-integrable-function-on-r-n
  - def-measurable-beltrami-coefficient
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-almost-every-point-is-a-lebesgue-point
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
dependency_level: 1
proof_strategy: direct
axiom_use: >-
  Assume Countable Choice, inherited through the measurable-function, Lebesgue
  measure, and Lebesgue-point interfaces. The cell averages are defined by
  explicit integrals and make no selection; no full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.5, printed pp. 197–198: Exercise 14.3 asks for approximation of a measurable coefficient by real-analytic coefficients after continuous approximation; context only, with no proof supplied there."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes, 164 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §§1–2, printed pp. 85–88: affine maps between labelled triangles and the statement of Theorem 2.1; the theorem's printed proof is blank, so the source is context only."
aliases: []
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain, let $\mu$ be a Beltrami coefficient on $\Omega$, and suppose $0\le k<1$ and $\|\mu\|_\infty\le k$. For $n\ge1$, let $\mathcal Q_n$ be the half-open dyadic squares in $\mathbb C\cong\mathbb R^2$ of side $h_n=2^{-n}$. Choose a measurable representative $\mu_0$ of $\mu$ and define its zero extension $\widetilde\mu$ to $\mathbb C$ by $\widetilde\mu=\mu_0$ on $\Omega$ and $\widetilde\mu=0$ off $\Omega$. For $Q\in\mathcal Q_n$ put
$$c_Q:=\frac{1}{\lambda_2(Q)}\int_Q\widetilde\mu\,d\lambda_2,$$
and set $\mu_n(x):=c_Q$ for $x\in\Omega\cap Q$. Then:

(a) Each $\mu_n$ is measurable and constant, hence affine, on every dyadic cell $\Omega\cap Q$, and $\|\mu_n\|_\infty\le k$.

(b) $\mu_n(x)\to\mu_0(x)$ at every $x\in\Omega$ that is a Lebesgue point of $\widetilde\mu$. Consequently $\mu_n\to\mu$ almost everywhere on $\Omega$.

(c) For any sequence of countable, locally finite triangulations of $\mathbb C$ whose mesh tends to zero, there are piecewise-constant coefficients $\nu_j$ with $\|\nu_j\|_\infty\le k$ and $\nu_j\to\mu$ almost everywhere on $\Omega$. Assign to each triangle $T$ the average of $\widetilde\mu$ over the ball centered at its barycenter with radius $\operatorname{diam}T$, and use that value on its cell. Averaging over the triangles themselves also gives convergence when the triangulations are uniformly shape-regular.

## Facts & Assumptions

**Given:** Countable Choice; a complex domain $\Omega$; a Beltrami coefficient $\mu$ on $\Omega$; and $0\le k<1$ with $\|\mu\|_\infty\le k$.

[F1] A Beltrami coefficient is a Lebesgue-measurable almost-everywhere class of complex functions with its essential-supremum norm; planar domains carry two-dimensional Lebesgue measure ([[def-measurable-beltrami-coefficient]]).

[F2] Lebesgue measurability is understood through the real-coordinate measurable-space structure, and a complex domain is open in the Euclidean plane ([[def-borel-and-lebesgue-measurable-function-on-rn]], [[def-complex-domain]]).

[F3] Complex $L^\infty$ functions are a.e. classes with essential-supremum norm, and complex integration is defined by its real and imaginary parts ([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] Every Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F5] For complex $f\in L^\infty$ and $g\in L^1$, $\int|fg|\le\|f\|_\infty\|g\|_1$ and $|\int fg|\le\|f\|_\infty\|g\|_1$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F6] A half-open square of side $h$ is measurable with measure $h^2$; a square of side $s$ has measure $s^2$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F7] A.e.-equal integrable functions have equal integrals on every measurable set ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F8] The ball average is $A_rf(x)=\lambda_2(B(x,r))^{-1}\int_{B(x,r)}f$, and a Lebesgue point is where the averages of $|f(y)-f(x)|$ tend to zero ([[def-ball-average-operator-on-r-n]], [[def-lebesgue-point-and-lebesgue-set]]).

[F9] Almost every point of a locally integrable function is a Lebesgue point ([[thm-almost-every-point-is-a-lebesgue-point]]).

[F10] A measurable complex function is locally integrable when its absolute value has finite integral on every ball ([[def-locally-integrable-function-on-r-n]]).

[F11] Countable Choice states that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

**Choice use.** Countable Choice is assumed by the coefficient, measurable-function, Lebesgue-measure, and Lebesgue-point interfaces [F1], [F2], [F9], [F11]. Choosing one representative of the single given a.e. class is ordinary existential instantiation, and the averages are independent of that representative by [F7]. No full Axiom of Choice is used.

## Proof

**Proof technique:** direct.

1.1 Choose a measurable representative $\mu_0$ of the given a.e. class and extend it by zero off $\Omega$, obtaining $\widetilde\mu$. Since $\Omega$ is open and hence Borel, [F2] makes the extension measurable. It satisfies $\|\widetilde\mu\|_\infty=\|\mu\|_\infty\le k$. For every ball $B$, [F4] gives $\mathbf1_B\in L^1$ with norm $\lambda_2(B)<\infty$, and [F5] gives $\int_B|\widetilde\mu|\le k\lambda_2(B)$. Thus $\widetilde\mu\in L^1_{\mathrm{loc}}(\mathbb R^2)$ by [F10]. [F1, F2, F3, F4, F5, F10, given]

2.1 Write $h_n=2^{-n}$. Each $Q\in\mathcal Q_n$ has $\lambda_2(Q)=h_n^2>0$ by [F6], so its average $c_Q$ is defined. A.e. changes of $\mu_0$ do not change any $c_Q$ by [F7]. The half-open squares form a countable measurable partition of $\mathbb R^2$, so on $\Omega$ the function $\mu_n$ is measurable and constant on each $\Omega\cap Q$. Moreover [F5] gives $$|c_Q|=\frac{1}{h_n^2}\left|\int_Q\widetilde\mu\right|\le\frac{\|\widetilde\mu\|_\infty\|\mathbf1_Q\|_1}{h_n^2}\le k,$$ hence $\|\mu_n\|_\infty\le k$. [F2, F3, F5, F6, F7, step 1.1]

3.1 Let $x\in\Omega$ be a Lebesgue point of $\widetilde\mu$, and let $Q_n(x)$ be its unique half-open dyadic square. Every point of $Q_n(x)$ is within distance $\sqrt2h_n$ of $x$, so $Q_n(x)\subset B(x,\sqrt2h_n)$. The containing square of side $2\sqrt2h_n$ has area $8h_n^2$ by [F6], whence $\lambda_2(B(x,\sqrt2h_n))/h_n^2\le8$. Therefore, writing $g_x(y)=|\widetilde\mu(y)-\widetilde\mu(x)|$, $$|\mu_n(x)-\widetilde\mu(x)|\le\frac1{h_n^2}\int_{Q_n(x)}g_x\le8A_{\sqrt2h_n}g_x(x)\longrightarrow0$$ by [F8]. The Lebesgue points of $\widetilde\mu$ have full measure by [F9], proving (b) on $\Omega$. [F6, F8, F9, F11, step 1.1, step 2.1]

4.1 For a countable locally finite triangulation $\mathcal T_j$ with mesh $\delta_j\to0$, fix an enumeration of its triangles and assign shared faces to the first incident cell, giving a Borel partition. For a triangle $T$, write $d_T=\operatorname{diam}T>0$, let $c_T$ be its barycenter, and assign the constant $$a_T:=\frac1{\lambda_2(B(c_T,d_T))}\int_{B(c_T,d_T)}\widetilde\mu$$ to its cell in $\Omega$. The resulting function is measurable by [F2]. If $x$ belongs to that cell, then $|x-c_T|\le d_T$, so $B(c_T,d_T)\subset B(x,2d_T)$. The inner ball contains a square of side $\sqrt2d_T$ and the outer ball lies in a square of side $4d_T$; [F4] and [F6] therefore give $$\frac{\lambda_2(B(x,2d_T))}{\lambda_2(B(c_T,d_T))}\le\frac{16d_T^2}{2d_T^2}=8.$$ Thus at every Lebesgue point $x$ the same estimate as in step 3.1 gives $|a_T-\widetilde\mu(x)|\le8A_{2d_T}g_x(x)$, which tends to zero uniformly as $d_T\le\delta_j\to0$. The averages remain bounded by $k$ by [F5]. If averages over $T$ itself are used and $\lambda_2(T)\ge c(\operatorname{diam}T)^2$ uniformly, then $T\subset B(x,2d_T)$ and the outer-to-cell measure ratio is at most $16/c$, giving the analogous estimate; this is the uniform shape-regularity condition stated in (c). [F2, F3, F4, F5, F6, F8, step 1.1, step 3.1, given]

5.1 Steps 2.1 and 3.1 prove (a) and (b), and step 4.1 proves the shape-independent triangulation version of (c). [step 2.1, step 3.1, step 4.1] ∎

## Source notes

Lyubich §14.5 Exercise 14.3 asks for approximation of measurable coefficients by real-analytic ones, first via continuous coefficients, but does not supply the proof. Bishop Ch. 3 §1 computes the affine map between two labelled triangles; §2 states a continuous-coefficient mapping theorem, but its printed proof is blank. The proof here is supplied directly by zero extension, boundedness, and the Lebesgue-point theorem. The triangle version uses ball averages so its comparison is uniform without a shape assumption; cell averages themselves require shape regularity.
