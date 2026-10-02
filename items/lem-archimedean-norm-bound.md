---
id: lem-archimedean-norm-bound
kind: lemma
title: "Archimedean product region, volume and norm bound"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-minkowski-embedding-of-a-number-field
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-linear-change-of-variables-for-lebesgue-measure
  - cor-volume-of-the-unit-n-ball
  - thm-am-gm
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
  - def-polar-surface-measure-on-the-unit-sphere
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Lemmas 4.22-4.25, pp.78-79."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§27 Lemma 27.8 and the region of Proposition 27.9, pp.142-144."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let integers
$r_1,r_2\ge0$ with $n=r_1+2r_2\ge1$ and a real $t>0$ be given, and in
$\mathbb R^{r_1}\times\mathbb C^{r_2}\cong\mathbb R^n$ put

$$X_t=\Bigl\{(x,z):\sum_{i=1}^{r_1}|x_i|+2\sum_{j=1}^{r_2}|z_j|\le t\Bigr\}.$$

Then:

1. $X_t$ is compact, convex and centrally symmetric with nonempty interior;
2. $\operatorname{vol}(X_t)=2^{\,r_1}\bigl(\frac\pi2\bigr)^{r_2}\dfrac{t^n}{n!}$;
3. every point of $X_t$ satisfies
   $\displaystyle\prod_{i=1}^{r_1}|x_i|\prod_{j=1}^{r_2}|z_j|^2\le\Bigl(\frac tn\Bigr)^n$.

## Facts & Assumptions

**Given:** The Axiom of Choice, integers $r_1,r_2\ge0$ with
$n=r_1+2r_2\ge1$ and a real $t>0$, with $X_t$ as in the statement and the
identification of [[def-minkowski-embedding-of-a-number-field]].

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), which discharges
the Countable Choice hypotheses of the volume facts [F6], [F1] and [F3],
invoked in steps 1.4, 2.1 and 3.1 respectively; no further choice is used.

[F1] Polar coordinates: for Borel $f\ge0$ on $\mathbb R^m$,
$\int_{\mathbb R^m}f\,d\lambda_m=\int_0^\infty\int_{S^{m-1}}f(r\omega)r^{m-1}d\sigma(\omega)\,dr$,
where $\sigma$ is the polar surface set function on $S^{m-1}$
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] Tonelli's theorem for sigma-finite product spaces
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Under $\mathbb R^{p+q}=\mathbb R^p\times\mathbb R^q$, the product
measure agrees with Lebesgue measure on Borel sets
([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F4] AM-GM: for $a_1,\dots,a_n\ge0$ with $n\ge1$, $\prod_k a_k\le\bigl(\frac1n\sum_k a_k\bigr)^n$
([[thm-am-gm]]).

[F5] The unit disc has area $\lambda_2(B^2)=\pi$: the unit-ball volume formula
$V_m(1)=\pi^{m/2}/\Gamma(m/2+1)$ at $m=2$ gives $\pi/\Gamma(2)=\pi$
([[cor-volume-of-the-unit-n-ball]]).

[F6] Invertible linear maps scale Lebesgue measure by the absolute value of
their determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F7] The polar surface set function of
[[def-polar-surface-measure-on-the-unit-sphere]] is defined by
$\sigma(E)=n\,\lambda_n(\{r\omega : \omega \in E,\ 0<r\le 1\})$; for
$E=S^{m-1}$ the set on the right is the unit ball $B^m$ up to the null set
$\{0\}$, so $\sigma(S^{m-1})=m\lambda_m(B^m)$
([[def-polar-surface-measure-on-the-unit-sphere]]).

## Proof

1.1 The function $N(x,z)=\sum_i|x_i|+2\sum_j|z_j|$ is continuous, convex and even, so $X_t=N^{-1}([0,t])$ is closed, convex and centrally symmetric; it is bounded because every coordinate of a point of $X_t$ has absolute value at most $t$, hence compact, and the origin is interior because a small ball around the origin satisfies $\sum_i|x_i|+2\sum_j|z_j|<t$. [given]
1.2 (Weighted simplex integral.) For integers $p\ge0$ and nonnegative integer weights $c_1,\dots,c_p$, define $J_p(t)=\int_{y_1,\dots,y_p\ge0,\ \sum_k y_k\le t}\prod_k y_k^{c_k}\,dy$; then $J_p(t)=t^{\,p+C}\prod_k c_k!/(p+C)!$ with $C=\sum_k c_k$. [algebra]
1.3 For each complex coordinate the polar surface value is $\sigma(S^1)=2\lambda_2(B^2)=2\pi$, by [F7] with $m=2$ and [F5]. [F5, F7, given]
1.4 (Sign splitting.) The region $\{(x,z):\sum_i|x_i|+2\sum_j|z_j|\le t\}$ is the union over the $2^{r_1}$ sign choices of the pieces with prescribed signs of $x_1,\dots,x_{r_1}$, and coordinate reflections carry each piece to the piece with all signs positive while preserving Lebesgue measure by [F6], whose Countable Choice hypothesis is supplied by [A1]; intersections lie in coordinate hyperplanes, which have measure zero. [F6, A1, given]
1.5 For $(x,z)\in X_t$ apply [F4] with $n$ arguments equal to $|x_1|,\dots,|x_{r_1}|$ and to the two copies each of $|z_1|,\dots,|z_{r_2}|$: their sum is at most $t$, so their product satisfies $\prod_i|x_i|\prod_j|z_j|^2\le(t/n)^n$. [F4, given, algebra]
2.1 (Radial reduction.) Using step 1.3 and the polar formula [F1] with $m=2$, the substitution $u=2\rho$ gives $\int_{\mathbb C}F(2|z|)\,dz=2\pi\int_0^\infty F(2\rho)\rho\,d\rho=(\pi/2)\int_0^\infty F(u)u\,du$ for Borel $F\ge0$, the Countable Choice hypothesis of [F1] being supplied by [A1]. [A1, F1, step 1.3, given]
2.2 (Induction for step 1.2.) The identity of step 1.2 is proved by induction on $p$: for $p=0$ both sides are $1$; for $p\ge1$ Tonelli slices the last variable, $J_p(t)=\int_0^t y^{c_p}J_{p-1}(t-y)\,dy$, and the induction hypothesis reduces the claim to the one-variable identity $\int_0^t y^a(t-y)^b\,dy=a!\,b!\,t^{a+b+1}/(a+b+1)!$, which follows by induction on $b$ from $\int_0^t y^a\,dy=t^{a+1}/(a+1)$ and $y^a(t-y)^{b+1}=t\,y^a(t-y)^b-y^{a+1}(t-y)^b$, both elementary antiderivative computations for polynomials on a compact interval. [F2, step 1.2, algebra]
3.1 Applying step 2.1 in each complex coordinate and [F2] together with [F3] to the resulting iterated integrals, then applying step 1.4 to the real coordinates, gives $\operatorname{vol}(X_t)=2^{\,r_1}(\pi/2)^{r_2}D(t)$ with $D(t)=J_{r_1+r_2}(t)$ for the weight vector with $c_k=0$ on the first $r_1$ indices and $c_k=1$ on the remaining $r_2$ indices, the Countable Choice hypothesis of [F3] being supplied by [A1]. [F2, F3, A1, step 2.1, step 1.4]
4.1 For the weight vector of step 3.1 one has $p+C=(r_1+r_2)+r_2=n$, so $D(t)=t^n/n!$ and $\operatorname{vol}(X_t)=2^{\,r_1}(\pi/2)^{r_2}t^n/n!$. [step 1.2, step 3.1, step 2.2, algebra]
5.1 Step 1.1 proves the compactness, convexity and symmetry clause, step 4.1 the volume formula and step 1.5 the norm bound, so the three assertions of the statement hold. [step 1.1, step 4.1, step 1.5] ∎
