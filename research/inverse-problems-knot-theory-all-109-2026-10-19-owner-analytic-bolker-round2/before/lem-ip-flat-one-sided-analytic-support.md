---
id: lem-ip-flat-one-sided-analytic-support
kind: lemma
title: "Both analytic normal directions at a flat support boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-analytic-wavefront-fbi-transform
  - lem-ip-local-analytic-elliptic-packet-calculus
  - thm-boundary-maximum-modulus-principle
  - lem-compactly-supported-distributions-extend-to-smooth-functions
  - def-support-of-a-distribution
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§8, Theorems 8.2–8.3 and Lemma 8.4, printed pp. 52–55."
---

## Statement

Let $u$ be a distribution near $0\in\mathbb R^n$, vanishing where $x_n<0$. If either $(0,dx_n)$ or $(0,-dx_n)$ is absent from its Gaussian analytic wavefront set, then $u=0$ on a neighborhood of $0$. Equivalently, if $0\in\operatorname{supp}u$, both normal orientations belong to that wavefront set. The assertion also holds with the two half-spaces interchanged.

## Statement references

[[def-ip-analytic-wavefront-fbi-transform|Gaussian criterion]]

[[lem-ip-local-analytic-elliptic-packet-calculus|Equivalent positive analytic packets]]

[[def-support-of-a-distribution|Distribution support]]

## Facts & Assumptions

**Given:** The distribution and one of the two absent oriented normals in the statement.

[F1] [[lem-ip-local-analytic-elliptic-packet-calculus]] permits a bounded open neighborhood of nonzero frequency parameters and gives fixed-order exponential localization errors.

[F2] [[thm-boundary-maximum-modulus-principle]] bounds a holomorphic function by its boundary modulus on a bounded domain.

[F3] [[lem-compactly-supported-distributions-extend-to-smooth-functions]] permits pairing a localized distribution with Gaussian functions and differentiating such pairings by fixed-support seminorm estimates.

[F4] [[def-support-of-a-distribution]] characterizes vanishing on open sets by support.

## Proof

**Given:** The data in the statement.

1.1 Multiply $u$ by a compact smooth cutoff equal to one near $0$ and supported where the one-sided hypothesis holds. It remains supported in $y_n\ge0$, and the wavefront hypothesis is unchanged by exponential Gaussian tail estimates. Denote this compact distribution again by $u$ and put $ U(z,\lambda)=\langle u(y),e^{-\lambda(z-y)^2/2}\rangle,\qquad z\in\mathbb C^n. $ This is entire by [F3]. A finite distributional derivative order gives the following bound on every fixed bounded complex set: $ |U(z,\lambda)|\le C\lambda^M e^{\lambda\Phi(z)},\qquad \Phi(z)=\frac{|\operatorname{Im}z|^2-(\operatorname{Re}z_n)_-^2}{2}, $ where $s_-:=\max(-s,0)$. To justify the sharp half-space bound for a distribution, insert a smooth factor $\vartheta(\lambda y_n)$ that is one for $\lambda y_n>-1/2$ and zero for $\lambda y_n<-1$. It equals one on a neighborhood of the support, so does not change the pairing. Its derivatives of each fixed order cost only a power of $\lambda$. On its support, $y_n\ge-1/\lambda$, and $\operatorname{Re}(z-y)^2=|\operatorname{Re}z-y|^2-|\operatorname{Im}z|^2$ gives the bound with $(s+1/\lambda)_-^2$ in place of $s_-^2$. Their difference is $O(1/\lambda)$ uniformly for bounded $s$, so it changes the exponential by a bounded factor. Gaussian derivatives contribute another fixed power of $\lambda$. This proves the displayed bound using the ordinary fixed-support distributional seminorm, without assuming an estimate on the exact support set. [F3, F4, given, algebra]

1.2 We record the elementary quantitative continuation used in the left half-plane. If a holomorphic $g$ is bounded by $1$ on a disk of radius $R$ and by $e^{-d\lambda}$ on the concentric disk of radius $r<R$, then on the disk of radius $r<\rho<R$, $ |g|\le \exp\!\left(-d\lambda\frac{\log(R/\rho)}{\log(R/r)}\right). $ For the annulus compare $\log|g|$ with the harmonic function that is $-d\lambda$ on the inner circle and $0$ on the outer circle. This comparison follows from [F2]: near any hypothetical positive interior maximum of their difference, subtract a local harmonic conjugate and apply the maximum modulus principle; a small strict harmonic perturbation excludes a non-strict maximum, then let that perturbation decrease to zero. Zeros of $g$ cannot be positive maxima. Chaining finitely many overlapping disks contained in the connected left half-plane propagates a strictly positive exponent from the initial disk to any chosen compact subset there. To make the finite chain explicit, cover a polygonal path from the initial disk to the compact set by equal small disks whose doubled disks lie in the half-plane, take successive center distances less than one quarter of the radius, and iterate the displayed estimate. The exponent is multiplied by finitely many positive radius ratios. [F2, algebra, construct]

2.1 Write $z=(z',s+it)$. The identity $ e^{-\lambda|p|^2/2}U(x-ip,\lambda) =\langle u,e^{i\lambda(x-y)\cdot p-\lambda|x-y|^2/2}\rangle $ and [F1] imply that absence of either normal gives $ |U(z,\lambda)|\le C e^{\lambda(|\operatorname{Im}z|^2/2-c)} $ in a fixed complex neighborhood of $(0,\mp i)$ for some $c>0$. The use of [F1] here is only to let $p$ range over an open ball about $\pm e_n$, rather than the unit sphere. Fix a small neighborhood of $z'=0$ and treat $z'$ as a parameter. For each such $z'$ the holomorphic function of one variable $ G(z_n,\lambda)=e^{-\lambda|\operatorname{Im}z'|^2/2}e^{\lambda z_n^2/2}U(z',z_n,\lambda) $ satisfies $|G|\le C\lambda^M e^{\lambda s_+^2/2}$ on bounded rectangles. On one small disk lying in $s<0$ near $\mp i$ it satisfies $|G|\le C e^{-c_1\lambda}$: in this regularity estimate the additional exponent is $s^2/2$, which is less than $c/2$ after shrinking that disk. Constants are uniform in $z'$. [F1, step 1.1, algebra]

3.1 Divide $G$ by its uniform polynomial bound $C\lambda^M$. In the left half-plane this quotient has modulus at most $1$. Step 1.2 gives $r,b,d>0$ such that on the segment $s=-r$, $|t|\le b$, it is at most $e^{-d\lambda}$, after decreasing $d$ and taking $\lambda$ large. The same construction works whether the initial disk is near $i$ or $-i$; both lie in the same connected left half-plane neighborhood joined by a bounded path to this segment. All paths, rectangles and constants can be fixed uniformly for the chosen $z'$ parameters. [step 2.1, step 1.2, construct]

4.1 Extend to the rectangle $-r\le s\le a$, $|t|\le b$, where $a>0$ will be small. For $k=\pi/(2b)$ define $ w(s,t)=\frac{\sinh(k(a-s))}{\sinh(k(a+r))}\cos(kt). $ This is harmonic, nonnegative in the rectangle, zero on the top, bottom and right sides, and between zero and one on its left side. For $H=G/(C\lambda^M)$, the global bound in step 2.1 and the left-side improvement give, by [F2] with a harmonic conjugate of $w$, $ \log|H(s+it)|\le\lambda\bigl(a^2/2-dw(s,t)\bigr). $ On the left the proposed upper bound is at least $-d\lambda$, and on the other three sides it is $\lambda a^2/2$, so all boundary inequalities hold. At $(s,t)=(0,0)$, $ w(0,0)=\frac{\sinh(ka)}{\sinh(k(a+r))}\ge c_2a $ for sufficiently small $a$, with fixed $c_2>0$. Choose $a$ so $a^2/2<dc_2a/2$. Continuity then gives a fixed disk about $z_n=0$ on which $|H|\le e^{-d_2\lambda}$ for some $d_2>0$. This is the needed strict improvement across the boundary. [F2, step 2.1, step 3.1, algebra, choose]

5.1 For real $z=x$ in a sufficiently small neighborhood of $0$, the exponential factors defining $G$ give $|U(x,\lambda)|\le C\lambda^M e^{-d_2\lambda}$. On this real neighborhood the normalized Gaussian convolutions $(\lambda/(2\pi))^{n/2}U(x,\lambda)$ converge distributionally to $u$. For completeness, after pairing with a compact test $\vartheta$, Fubini for a compact distribution and a rapidly decreasing Gaussian writes the pairing as $\langle u,\rho_\lambda*\vartheta\rangle$, where $\rho_\lambda$ has mass one. Every fixed derivative of $\rho_\lambda*\vartheta-\vartheta$ tends uniformly to zero on the support compact: split the integral into $|y|<\delta$, where uniform continuity controls the translated derivative, and $|y|\ge\delta$, where the Gaussian tail tends to zero; the same argument bounds the derivatives outside the test support. Thus [F3] proves the asserted distributional convergence. The exponential bound makes its limit zero for tests in the smaller neighborhood, so $u=0$ there. Reflecting $x_n$ interchanges the half-spaces and interchanges the two normal orientations. Both claims follow without a reality assumption on $u$. [F3, F4, step 4.1, algebra] ∎
