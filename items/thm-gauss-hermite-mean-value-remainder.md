---
id: thm-gauss-hermite-mean-value-remainder
kind: theorem
title: Gaussian quadrature has the Hermite mean-value remainder
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-gauss-moment-data
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - thm-hermite-interpolant-double-node-remainder
  - def-gauss-polynomial-moment-inner-product
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
  - thm-extreme-value-r
  - cor-continuous-image-of-an-interval-is-an-interval
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integral-of-a-nonnegative-simple-function
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-algebra-of-continuous-functions
  - def-factorial-and-falling-factorial
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - def-borel-sigma-algebra
  - def-continuity-real
  - thm-reals-ordered-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Statement

Let $(a,b,m,2m,\mu)$ be moment data as in
[[def-gauss-moment-data]], let $Q_m$ be its Gaussian rule, and let
$f\in C^{2m}([a,b],\mathbb R)$. Then there is $\xi\in(a,b)$ such that
$$ \int_{[a,b]}f(x)\,d\mu(x)-Q_m(f) =\frac{f^{(2m)}(\xi)}{(2m)!_{\mathbb R}} \int_{[a,b]}p_m(x)^2\,d\mu(x), $$
where $p_m(X)=\prod_{i=1}^{m}(X-x_i)$ is the monic node polynomial and
$(2m)!_{\mathbb R}:=\prod_{j=1}^{2m}j$.

## Facts & Assumptions

**Given:** Moment data of order $2m$, its Gaussian rule, and a real function $f\in C^{2m}([a,b])$.

[F1] [[def-gauss-moment-data]]: $\mu$ is finite and positive, its support contains at least $m+1$ points, and moments through degree $2m$ are finite.

[F2] [[def-gauss-quadrature-rule]] and [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: $Q_m$ is the finite Gaussian rule, is exact through degree $2m-1$, and its nodes are the roots of $p_m$.

[F3] [[thm-hermite-interpolant-double-node-remainder]]: for the nodes $x_i$, the explicit polynomial $H$ has degree at most $2m-1$, matches $f,f'$ at the nodes, and for every non-node $x$ the pointwise remainder is $f(x)-H(x)=p_m(x)^2f^{(2m)}(\xi_x)/(2m)!_{\mathbb R}$ for some $\xi_x\in(a,b)$.

[F4] [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]: since $r=2m$, $\int p_m^2\,d\mu$ is finite and strictly positive.

[F5] [[thm-extreme-value-r]] and [[cor-continuous-image-of-an-interval-is-an-interval]]: a continuous real function on $[a,b]$ has a minimum and maximum and takes every value between them.

[F6] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], and [[def-integral-of-a-nonnegative-simple-function]]: nonnegative integrals are monotone and homogeneous, and $\int\mathbf1_U\,d\mu=\mu(U)$.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: integrable functions may be added and integrated linearly.

[F8] [[def-factorial-and-falling-factorial]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], and [[thm-reals-ordered-field]]: $(2m)!_{\mathbb R}=\prod_{j=1}^{2m}j>0$.

[F9] [[def-continuity-real]] and [[def-borel-sigma-algebra]]: a continuous function on $[a,b]$ is Borel measurable, since preimages of relative open sets are relative open and those sets generate $\mathcal B([a,b])$.

[F10] [[thm-algebra-of-continuous-functions]]: absolute values, polynomial functions, sums and products of the continuous functions used below are continuous.

## Proof

1.1 The function $f$ and the polynomial $H$ from [F3] are continuous, hence Borel measurable by [F9]–[F10]. They are bounded on the compact interval by [F5]. Since $\mu([a,b])<\infty$ by [F1], monotonicity and homogeneity in [F6] give $\int|f|\,d\mu<\infty$ and $\int|H|\,d\mu<\infty$. Also $p_m^2$ is integrable by [F4]. Thus all integrals below are finite. [F1, F3, F4, F5, F6, F9, F10, algebra]

1.2 Let $A=\min_{[a,b]}f^{(2m)}$ and $B=\max_{[a,b]}f^{(2m)}$, which exist by [F5]. The pointwise remainder [F3], and the zero error at nodes, imply for every $x\in[a,b]$ that $\frac{A}{(2m)!_{\mathbb R}}p_m(x)^2 \le f(x)-H(x)\le \frac{B}{(2m)!_{\mathbb R}}p_m(x)^2.$ The multiplier $p_m(x)^2$ is nonnegative. [F3, F5, F8, algebra]

2.1 By [F3], $H(x_i)=f(x_i)$ and $\deg H\le2m-1$. Exactness [F2] gives $\int H\,d\mu=Q_m(H)=Q_m(f)$, so the quadrature error is $\int(f-H)\,d\mu$. [F2, F3, step 1.1, algebra]

2.2 Integrating the nonnegative differences in step 1.2 and using [F6]–[F7] gives $\frac{A}{(2m)!_{\mathbb R}}\int p_m^2\,d\mu \le \int(f-H)\,d\mu\le \frac{B}{(2m)!_{\mathbb R}}\int p_m^2\,d\mu.$ By [F4], $h_m:=\int p_m^2\,d\mu>0$. Define $\gamma:=(2m)!_{\mathbb R}\int(f-H)\,d\mu/h_m$; the displayed bounds give $A\le\gamma\le B$. [F4, F6, F7, F8, step 1.2, algebra]

3.1 If $A=B$, $f^{(2m)}$ is constant and any point of $(a,b)$ has value $\gamma$. If $A<\gamma<B$, choose points attaining $A$ and $B$ by [F5]. They are distinct; the intermediate value property on the segment between them gives a point strictly between the extrema where $f^{(2m)}=\gamma$, and that point lies in $(a,b)$. [F5, step 2.2, cases, choose]

3.2 Suppose $\gamma=A<B$ and $f^{(2m)}$ has no interior point with value $A$. Then $f^{(2m)}(t)>A$ for every $t\in(a,b)$. For every non-node $x$, [F3] uses some $\xi_x\in(a,b)$, and so $d(x):=f(x)-H(x)-A p_m(x)^2/(2m)!_{\mathbb R}>0$ because $p_m(x)\ne0$. At nodes, $d=0$. There is a support point $y$ not among the $m$ nodes by [F1]; continuity makes $d\ge c>0$ on a relative open neighborhood $U$ of $y$, and $\mu(U)>0$. Thus [F6] gives $\int d\,d\mu>0$. But $\gamma=A$ and step 2.2 imply $\int d\,d\mu=0$, a contradiction. Hence some interior point has derivative value $\gamma$. [F1, F3, F6, F8, step 2.2, cases, algebra]

3.3 The case $\gamma=B>A$ is analogous: if $f^{(2m)}(t)<B$ throughout $(a,b)$, the nonnegative continuous function $e(x):=B p_m(x)^2/(2m)!_{\mathbb R}-(f(x)-H(x))$ is strictly positive at every non-node, hence on a positive-measure neighborhood of a support point outside the nodes. This contradicts $\gamma=B$ in step 2.2. Therefore there is an interior point with derivative value $\gamma$. [F1, F3, F6, F8, step 2.2, cases, algebra]

4.1 In every case there is $\xi\in(a,b)$ with $f^{(2m)}(\xi)=\gamma$. Substitute the definition of $\gamma$, use step 2.1, and rearrange to obtain the stated remainder formula. [step 2.1, step 2.2, step 3.1, step 3.2, step 3.3, algebra] ∎
