---
id: lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
aliases: [nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]
kind: lemma
domain: mathematics
title: "Sphere integrals in angle coordinates"
status: published
origin: pipeline
dependency_level: 0
deps: [def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, thm-euclidean-inverse-function-theorem, thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-monotone-convergence-for-the-integral, thm-jordan-fubini-by-sections, def-c-one-map-and-local-inverse, def-jacobian-determinant-of-a-c-one-map, def-total-derivative-in-euclidean-space, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-second-part, def-borel-sigma-algebra, thm-continuous-preimages-of-borel-sets-are-borel, def-measure, def-countable-choice]
dependency_roles:
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  def-c-one-map-and-local-inverse: mathematical-premise
  def-jacobian-determinant-of-a-c-one-map: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-total-differentiability-gives-a-local-linear-bound-and-continuity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  def-measure: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Appendix A.2 (polar coordinates and surface measure on the unit sphere) and Chapter 5, printed pp. 77-105"
      url: "https://www.axler.net/HFT.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §14.30 'Spherical and Spheroidal Harmonics' (spherical coordinates and the surface element sin theta d theta d phi)"
      url: "https://dlmf.nist.gov/14.30"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$S^2:=\{x\in\mathbb R^3:|x|=1\}$ and let $\sigma$ be the polar surface measure on $S^2$ of
[[def-polar-surface-measure-on-the-unit-sphere]], a finite Borel measure ([[def-measure]],
[[def-borel-sigma-algebra]]). Let

$$\Phi:(0,\pi)\times(0,2\pi)\to S^2,\qquad \Phi(\theta,\varphi):=(\sin\theta\cos\varphi,\ \sin\theta\sin\varphi,\ \cos\theta),$$

and let $H:=\{(x,y,0)\in\mathbb R^3:x\ge0\}$ denote the closed half-plane, a Lebesgue-null Borel set
([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]). Then:

(a) for every Borel function $F:S^2\to[0,+\infty]$,
$$\int_{S^2}F\,d\sigma=\int_{(0,\pi)\times(0,2\pi)}F\bigl(\Phi(\theta,\varphi)\bigr)\,\sin\theta\ d(\theta,\varphi),$$
the right-hand integral being the Lebesgue integral over the open rectangle;

(b) $\sigma(S^2)=4\pi$;

(c) the identity of (a) holds with $F\in L^1(S^2,\sigma;\mathbb C)$ in the sense that $F\circ\Phi$ is Lebesgue
integrable on the rectangle against $\sin\theta\,d(\theta,\varphi)$ and the two integrals agree (real and
imaginary parts, positive and negative parts).

## Facts & Assumptions

**Given:** Countable Choice; the sphere $S^2$; the polar surface measure $\sigma$; the parametrisation $\Phi$; the half-plane $H$; the map $T(r,\theta,\varphi):=r\Phi(\theta,\varphi)$ on $(0,\infty)\times(0,\pi)\times(0,2\pi)$.

[F1] The polar formula: for every Borel $f:\mathbb R^3\to[0,\infty]$, $\int_{\mathbb R^3}f\,d\lambda_3=\int_0^\infty r^2\int_{S^2}f(r\omega)\,d\sigma(\omega)\,dr$, and $\sigma$ is the unique Borel measure on $S^2$ with this property ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]).

[F2] Change of variables for $C^1$ diffeomorphisms of open sets: if $U,V\subseteq\mathbb R^m$ are open and $T:U\to V$ is a $C^1$ bijection with $C^1$ inverse, then for every nonnegative Borel $h$, $\int_Vh(y)\,dy=\int_Uh(T(x))|\det DT(x)|\,dx$ ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F3] Inverse function theorem: if $T$ is $C^1$ near $a$ and $DT(a)$ is invertible, then $T$ restricts to a $C^1$ bijection of a neighbourhood of $a$ onto an open set, with $C^1$ inverse; and $C^1$ means total differentiability with continuous derivative ([[thm-euclidean-inverse-function-theorem]], [[def-c-one-map-and-local-inverse]], [[def-total-derivative-in-euclidean-space]]).

[F4] The slit $K:=\{(x,0,z):x\ge0\}$ is closed and contained in the coordinate hyperplane $\{y=0\}$, which is Lebesgue null; complements of null sets have full measure, and $\lambda_3(K)=0$ ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]], [[def-measure]]).

[F5] Tonelli's theorem for nonnegative Borel functions and Fubini's theorem for integrable functions identify multiple Lebesgue integrals with iterated integrals over $\sigma$-finite products; on a rectangle with product measure, integrals of continuous functions may be computed by iterated integrals, and Jordan–Fubini computes Riemann integrals over rectangles as iterated integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-jordan-fubini-by-sections]]).

[F6] Sine and cosine are differentiable with $\sin'=\cos$, $\cos'=-\sin$, satisfy the addition formulas and Pythagoras' identity $\sin^2+\cos^2=1$, $\sin>0$ on $(0,\pi)$, and $\cos$ is strictly decreasing on $[0,\pi]$ with $\cos 0=1$, $\cos\pi=-1$; the derivative of sine integrates by the fundamental theorem ([[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-ftc-second-part]]).

[F7] Continuous maps pull Borel sets back to Borel sets, and indicators of Borel sets are measurable; the monotone convergence theorem computes integrals of sums of nonnegative measurable functions ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-monotone-convergence-for-the-integral]], [[def-borel-sigma-algebra]]).



## Proof

1.1 [The angular measure $\tau$] For Borel $E\subseteq S^2$ put $\tau(E):=\int_{(0,\pi)\times(0,2\pi)}\mathbf 1_E(\Phi(\theta,\varphi))\sin\theta\,d(\theta,\varphi)$, the integral existing in $[0,\infty]$ because the integrand is nonnegative and measurable: $\Phi$ is continuous, hence Borel measurable, and $\mathbf 1_E\circ\Phi$ is measurable by [F7]. The set function $\tau$ is countably additive by the monotone convergence theorem applied to the partial sums of $\sum_k\mathbf 1_{E_k}$ for pairwise disjoint Borel $E_k$, and $\tau(S^2)=\int_0^\pi\int_0^{2\pi}\sin\theta\,d\varphi\,d\theta=2\pi\cdot 2=4\pi$ by [F5] and [F6]; hence $\tau$ is a finite Borel measure. [F5, F6, F7, algebra]

1.2 [$T$ is a bijection onto the slit space] $\Omega:=\mathbb R^3\setminus K=\{y\ne0\}\cup\{y=0,\ x<0\}$ is open. The image of $T$ is contained in $\Omega$: for $\varphi\in(0,\pi)$ the second coordinate $r\sin\theta\sin\varphi$ is positive, for $\varphi\in(\pi,2\pi)$ it is negative, and for $\varphi=\pi$ one has $y=0$ with first coordinate $r\sin\theta\cos\pi=-r\sin\theta<0$. Conversely, let $x\in\Omega$ and put $r:=|x|>0$ and $u:=x/r\in S^2$. Since $u\notin K$, the case $u=(0,0,\pm1)$ is excluded (it has $y=0$, $x$-coordinate $0\ge0$), so $|u_3|<1$; by [F6] there is a unique $\theta\in(0,\pi)$ with $\cos\theta=u_3$, and then $\sin\theta>0$ and $v:=(u_1,u_2)/\sin\theta$ satisfies $v_1^2+v_2^2=1$ by Pythagoras [F6]. By the parametrisation of the unit circle [F6] there is a unique $\varphi\in[0,2\pi)$ with $v=(\cos\varphi,\sin\varphi)$; $\varphi=0$ would give $u=(\sin\theta,0,u_3)$ with $y=0$ and $x$-coordinate $\sin\theta>0$, i.e. $u\in K$, which is excluded, so $\varphi\in(0,2\pi)$. Then $x=T(r,\theta,\varphi)$ with $(r,\theta,\varphi)$ uniquely determined, so $T$ is a bijection of $(0,\infty)\times(0,\pi)\times(0,2\pi)$ onto $\Omega$. [F6, algebra]

1.3 [$T$ is $C^1$ with positive Jacobian] The components of $T$ are products and composites of the differentiable functions $\sin,\cos$ and the coordinate functions by [F6], so $T$ is $C^1$ with total derivative the matrix of partial derivatives ([[def-total-derivative-in-euclidean-space]], [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]), namely the columns $\partial_rT=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$, $\partial_\theta T=(r\cos\theta\cos\varphi,r\cos\theta\sin\varphi,-r\sin\theta)$ and $\partial_\varphi T=(-r\sin\theta\sin\varphi,r\sin\theta\cos\varphi,0)$; expanding the determinant along the third column and using $\cos^2\varphi+\sin^2\varphi=1$ and $\sin^2\theta+\cos^2\theta=1$ [F6] gives $\det DT=r^2\sin\theta(\cos^2\theta+\sin^2\theta)=r^2\sin\theta>0$ ([[def-jacobian-determinant-of-a-c-one-map]]). [F6, algebra]

2.1 [$T$ is a $C^1$ diffeomorphism onto $\Omega$] At each point of the domain $DT$ is invertible by step 1.3, so by the inverse function theorem [F3] $T$ restricts to a $C^1$ bijection of a neighbourhood of that point onto an open subset of $\Omega$ with $C^1$ inverse. Since $T$ is injective with image $\Omega$ by step 1.2, these local inverses agree on overlaps with the unique set-theoretic inverse $T^{-1}:\Omega\to(0,\infty)\times(0,\pi)\times(0,2\pi)$, which is therefore $C^1$: near any point of $\Omega$ it coincides with a local $C^1$ inverse. Hence $T$ is a $C^1$ diffeomorphism of open sets, and [F2] applies to it. [step 1.2, step 1.3, F2, F3]

3.1 [The polar formula for $\tau$] Let $f:\mathbb R^3\to[0,\infty]$ be Borel. By [F4],  $\lambda_3(K)=0$ and $\int_{\mathbb R^3}f=\int_\Omega f$. Applying the change of variables formula [F2] to the diffeomorphism $T$ of step 2.1 and the nonnegative Borel function $f|_\Omega$ gives $\int_\Omega f=\int_{(0,\infty)\times(0,\pi)\times(0,2\pi)}f(T(r,\theta,\varphi))\,r^2\sin\theta\,d(r,\theta,\varphi)$. By Tonelli's theorem [F5] the triple integral factors as $\int_0^\infty r^2\bigl(\int_{(0,\pi)\times(0,2\pi)}f(r\Phi(\theta,\varphi))\sin\theta\,d(\theta,\varphi)\bigr)dr=\int_0^\infty r^2\int_{S^2}f(r\omega)\,d\tau(\omega)\,dr$: for each fixed $r$ the function $\omega\mapsto f(r\omega)$ is nonnegative and Borel, and its $\tau$-integral equals the rectangle integral of $f(r\Phi(\cdot))\sin(\cdot)$ by the defining formula for $\tau$, extended from indicators to nonnegative Borel integrands by the monotone convergence theorem [F7]. Hence $\tau$ satisfies the polar formula of [F1]. [step 2.1, step 1.1, F2, F4, F5, F7, algebra]

4.1 [Identification and consequences] By the uniqueness clause of [F1] the measure satisfying the polar formula is $\sigma$; hence $\tau=\sigma$, which is exactly the identity of (a) for indicators and, by the monotone convergence theorem, for all nonnegative Borel $F$ [F7]; clause (b) is the computation $\tau(S^2)=4\pi$ of step 1.1. For (c), if $F\in L^1(S^2,\sigma;\mathbb C)$ then applying (a) to $|F|$ shows $F\circ\Phi$ is integrable against $\sin\theta\,d(\theta,\varphi)$, because the integral of $|F|$ over $S^2$ is finite; splitting $F$ into real and imaginary parts and each into positive and negative parts, and applying (a) to the four nonnegative functions (or Fubini, [F5]) gives the identity for $F$. [step 1.1, step 3.1, F1, F5, F7, algebra] ∎
