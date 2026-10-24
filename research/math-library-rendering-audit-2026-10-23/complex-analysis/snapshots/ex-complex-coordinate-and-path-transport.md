---
id: ex-complex-coordinate-and-path-transport
kind: example
title: A finite coordinate path and a bounded nonrectifiable path
status: published
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 4
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-complex-coordinate-map-preserves-real-scalar-multiplication
  - def-complex-path-polygonal-length-and-rectifiability
  - thm-complex-coordinate-isometry-and-topology-transport
  - thm-complex-coordinate-map-preserves-real-total-differentiability
  - thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed
  - thm-complex-path-length-invariant-under-monotone-reparametrization
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-metric-topology
  - def-metric-ball
  - def-complex-metric-convergence-and-continuity
  - def-metric-continuity
  - def-interval
  - lem-real-line-is-a-metric-space
  - def-complex-numbers-and-arithmetic
  - def-abs-value
  - lem-of-abs-value
  - thm-of-square-roots
  - def-natural-numbers
  - lem-of-naturals-positive
  - lem-of-inverse-positive
  - thm-of-archimedean
  - def-finite-sum
  - lem-finite-sum-laws
  - def-nat-order
  - lem-nat-order-add-compatible
  - lem-nat-add-identity
  - thm-nat-linear-order
  - def-nat-addition
  - thm-recursion
  - thm-induction-principle
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references: []
---

## Example

Let $\Phi(a+bi)=(a,b)$, take $z=1+2i$, $w=3-i$, $r=-2$, and $t=1/3$. On
$[0,3]$, define the continuous path

$$\gamma(s)=\begin{cases} s, & 0\le s\le1, \\ 1+i(s-1), & 1\le s\le2, \\ 1+i, & 2\le s\le3. \end{cases}$$

It travels one unit horizontally, one unit vertically, then pauses. Compare its
length with its coordinate path under both a decreasing reversal and a
nondecreasing reparametrization with a pause. Also compare the coordinates of
$rz$ and $(1-t)z+tw$, the distance between $z,w$, the image of the ball
$B_{\mathbb C}(1+i,2)$, and the real total derivative of conjugation
$f(\zeta)=\overline\zeta$.

For the bounded-trace caveat, define a second real-valued complex path
$\eta:[0,1]\to\mathbb C$. For
$n\ge1$ let $a_n=1/(2n)$, $b_n=1/(2n-1)$, $m_n=(a_n+b_n)/2$, and
$I_n=[a_n,b_n]$. Put $\eta(0)=0$, and for $t\in I_n$ set

$$\eta(t)=\begin{cases}\dfrac{t-a_n}{m_n-a_n}\dfrac1n,&a_n\le t\le m_n,\\\dfrac{b_n-t}{b_n-m_n}\dfrac1n,&m_n\le t\le b_n.\end{cases}$$

For $t>0$ outside all $I_n$, put $\eta(t)=0$. Each real value is read as its
canonical image in $\mathbb C$.

## Facts & Assumptions

**Given:** The displayed complex numbers, real parameters, functions, and intervals, including the path $\eta$ defined in the example.

[F1] [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]: $\Phi(rz)=r\Phi(z)$ and $\Phi$ preserves real affine combinations.

[F2] [[thm-complex-coordinate-isometry-and-topology-transport]]: $\Phi$ preserves all distances and maps metric balls to the corresponding Euclidean balls.

[F3] [[thm-complex-coordinate-map-preserves-real-total-differentiability]]: A real-linear first-order approximation in complex coordinates transports to the Euclidean total derivative by conjugating with $\Phi$.

[F4] [[def-complex-path-polygonal-length-and-rectifiability]]: A path is continuous from the usual real metric to $d_{\mathbb C}$; singleton paths have length zero.

[F5] [[thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed]]: Complex path length equals coordinate length, rectifiability is equivalent to coordinate bounded variation, and piecewise-$C^1$ length is the sum of Euclidean speed integrals.

[F6] [[thm-complex-path-length-invariant-under-monotone-reparametrization]]: Continuous surjective monotone reparametrizations preserve complex length, including pauses, reversal, and singleton intervals.

[F7] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: If $\zeta=x+iy$, then $\overline\zeta=x-iy$ and $|\zeta|=\sqrt{x^2+y^2}$.

[F8] [[def-metric-topology]] and [[def-metric-ball]]: The whole metric space is open, and $B(x,\rho)=\{y:d(x,y)<\rho\}$ for $\rho>0$.

[F9] [[def-metric-continuity]], [[def-complex-metric-convergence-and-continuity]], [[lem-real-line-is-a-metric-space]], and [[def-interval]]: Continuity is the metric $\varepsilon$-$\delta$ condition on the indicated interval subspaces; the real and complex distances are absolute difference and modulus difference.

[F10] [[def-complex-numbers-and-arithmetic]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-abs-value]], [[lem-of-abs-value]], and [[thm-of-square-roots]]: Real values embed as $r+0i$; the complex modulus of a real difference is the square root of its square, which equals the real absolute value.

[F11] [[def-natural-numbers]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], and [[thm-of-archimedean]]: Natural indices have positive real images, reciprocals of positive reals reverse order, and $N$ can be chosen so $1/N$ is arbitrarily small.

[F12] [[def-finite-sum]] and [[lem-finite-sum-laws]]: Prefix sums satisfy $\sum_{j<0}c_j=0$ and $\sum_{j<d+1}c_j=\sum_{j<d}c_j+c_d$; they are additive, obey constant-sum scaling, and are monotone under termwise inequalities.

[F13] [[def-nat-addition]], [[def-nat-order]], [[lem-nat-order-add-compatible]], [[lem-nat-add-identity]], [[thm-nat-linear-order]], [[thm-recursion]], and [[thm-induction-principle]]: Natural addition and order are compatible, $0+q=q$, the natural order is transitive and total, recursion supplies the sequence below, and induction verifies properties of all its terms.


## Verification

1.1 The coordinates are $\Phi(z)=(1,2)$ and $\Phi(w)=(3,-1)$. Since $rz=-2-4i$, $\Phi(rz)=(-2,-4)=-2(1,2)=r\Phi(z)$ by [F1]. Also $(1-t)z+tw=\frac23(1+2i)+\frac13(3-i)=\frac53+i$, whose coordinates are $(\frac53,1)=\frac23(1,2)+\frac13(3,-1)$ by [F1] and [F2]. [given, F1, F2, algebra]

1.2 We have $w-z=2-3i$, so $|w-z|=\sqrt{2^2+(-3)^2}=\sqrt{13}$. The Euclidean distance between $(1,2)$ and $(3,-1)$ is the same $\sqrt{13}$, and [F2] gives $\Phi[B_{\mathbb C}(1+i,2)]=B_2((1,1),2)$. [given, F2, F7, F8, algebra]

1.3 The domain $U=\mathbb C$ is open by [F8]. For $\zeta=x+iy$, conjugation has coordinates $f_{\mathbb R}(x,y)=(x,-y)$, the matrix map $\operatorname{diag}(1,-1)$. If $h_j=u_j+iv_j$ and $r\in\mathbb R$, then $\overline{h_1+h_2}=(u_1+u_2)-i(v_1+v_2)=\overline{h_1}+\overline{h_2}$ and $\overline{rh_1}=ru_1-irv_1=r\overline{h_1}$, so $L(h)=\overline h$ is real-linear. For any $h=u+iv$, [F1] and [F7] give $f(\zeta+h)-f(\zeta)=\overline h$, so its remainder is zero. The quotient $|r(h)|/|h|$ is therefore zero for every $h\ne0$, and [F3] gives $Df_{\mathbb R}(\Phi(\zeta))=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. [given, F1, F3, F7, F8, algebra]

1.4 The formulas agree at $s=1$ and $s=2$. On the first and second pieces the distance between values at $s$ and $s_0$ equals $|s-s_0|$, because their differences are respectively real and purely imaginary and the modulus formulas in [F7] and [F10] give this equality; on the constant third piece it is zero. Thus each restriction is continuous. At either breakpoint $s_0\in\{1,2\}$, take $\delta=\min(\varepsilon,1/2)$. Then every $s\in[0,3]$ with $|s-s_0|<\delta$ lies in the adjacent pieces, where $d_{\mathbb C}(\gamma(s),\gamma(s_0))=|s-s_0|$ on a moving piece and is zero on the constant piece; hence the distance is less than $\varepsilon$. At 0 and 3 continuity follows from the corresponding endpoint of the continuous first and last restrictions. Thus $\gamma$ is continuous by [F9]. Its coordinate functions are $x(s)=s$ on $[0,1]$ and $1$ on $[1,3]$, and $y(s)=0$ on $[0,1]$, $s-1$ on $[1,2]$, and $1$ on $[2,3]$. [given, F4, F7, F9, F10, construct]

1.5 Let $\sigma:[5,5]\to\mathbb C$ send $5$ to $2-i$. By [F4], $L_{\mathbb C}(\sigma)=0$ and $\sigma$ is rectifiable. The constant surjection $\theta:[7,7]\to[5,5]$ also satisfies [F6], and both sides of its length equality are zero. [given, F4, F6]

1.6 For every $n\ge1$, $0<a_n<m_n<b_n\le1$, and $b_{n+1}=1/(2n+1)<1/(2n)=a_n$ by [F11]. Thus the intervals $I_n$ are disjoint, the two formulas for $\eta$ agree at $m_n$, and their endpoint values are zero. Each interpolation factor lies in $[0,1]$, so $0\le\eta(t)\le1/n\le1$ on $I_n$; outside them $\eta=0$. Hence $\eta$ is well-defined and its trace is contained in $[0,1]$. [given, F11, algebra, construct]

1.7 Fix $t_0>0$ and choose $N$ with $1/N<t_0/2$ by [F11]. For $n\ge N$, $b_n=1/(2n-1)\le1/n\le1/N<t_0/2$, so those intervals lie below $t_0/2$; only finitely many intervals meet $(t_0/2,3t_0/2)$. There $\eta$ is zero or one of finitely many affine pieces; the formulas agree at each midpoint and vanish at the interval endpoints, so their one-sided limits agree at every join. Thus $\eta$ is continuous at $t_0$. At $0$, given $\varepsilon>0$ choose $N$ with $2/N<\varepsilon$. If $0<t<1/N$ lies in $I_n$, then $1/(2n)=a_n\le t<1/N$, so $n>N/2$ and $|\eta(t)|\le1/n<2/N<\varepsilon$; outside the intervals $\eta(t)=0$. These real-distance bounds are also the $d_{\mathbb C}$ bounds under the canonical embedding by [F10]. Hence $\eta$ is continuous as a complex path at $0$ and at every positive $t_0$. [given, F9, F10, F11, choose, algebra]

1.8 For $N\ge1$, the increasing list $P_N=(0,a_N,m_N,b_N,a_{N-1},m_{N-1},b_{N-1},\ldots,a_1,m_1,b_1)$ is a partition of $[0,1]$, since $b_n<a_{n-1}$ for $n\ge2$. On each $I_n$, the path values at $a_n,m_n,b_n$ are $0,1/n,0$, so its two chord lengths sum to $2/n$ by [F10]; across each gap the chord length is zero. Define $H_N:=\sum_{j<N}1/(j+1)$, also for $N=0$. By the prefix recursion, $H_0=0$ and $H_{N+1}=H_N+1/(N+1)$. Adding the spike contributions gives $\ell_{P_N}(\eta)=2H_N$: this holds at $N=1$, and inserting the next spike adds $2/(N+1)$, proving it by induction. [given, F10, F11, F12, F13, construct, algebra]

1.9 By recursion [F13], define natural numbers $q_0=1$ and $q_{k+1}=q_k+q_k$. For every natural $q_k$, the definition of natural order with witness $q_k$, together with $0+q_k=q_k$ [F13], gives $0\le q_k$; compatibility of order with addition then gives $q_k=0+q_k\le q_k+q_k=q_{k+1}$. The base is $q_0=1$. If $1\le q_k$, transitivity with $q_k\le q_{k+1}$ gives $1\le q_{k+1}$, so induction [F13] yields $q_k\ge1$ for every $k$. [F13, algebra, construct]

2.1 Both coordinates are nondecreasing, with endpoint increments $x(3)-x(0)=1$ and $y(3)-y(0)=1$. For any partition, each absolute coordinate increment equals the nonnegative increment, and the finite sum telescopes to the endpoint increment; the endpoint partition attains $1$. Thus each coordinate has variation exactly $1$. On the three pieces the coordinate velocities are $(1,0)$, $(0,1)$, and $(0,0)$, so the speed integrals are $1$, $1$, and $0$. Therefore the coordinate path has length $2$, and [F5] gives $L_{\mathbb C}(\gamma)=2$ and rectifiability. [given, F5, step 1.4, algebra]

2.2 For each $k$, put $q=q_k$ and $B_k:=\sum_{j<q}1/(q+j+1)$. For $j<q$, the positive denominator satisfies $q+j+1\le q+q=q_{k+1}$ in the canonical real images by [F11, F13]. Thus each summand is at least $1/(q+q)$. Monotonicity and constant-sum scaling in [F12] give $B_k\ge q/(q+q)=1/2$, since $q\ge1$ by step 1.9. [F11, F12, F13, step 1.9, algebra]

3.1 Step 2.1 gives $L_{\mathbb C}(\gamma)=2$. The map $\varphi(s)=3-s$ on $[0,3]$ is a continuous decreasing surjection, so [F6] gives $L_{\mathbb C}(\gamma\circ\varphi)=2$. Define $\psi:[0,4]\to[0,3]$ by $\psi(s)=s$ on $[0,1]$, $\psi(s)=1$ on $[1,2]$, and $\psi(s)=s-1$ on $[2,4]$. Its pieces agree at their endpoints; it is continuous and nondecreasing, and its range is $[0,1]\cup\{1\}\cup[1,3]=[0,3]$. Thus it is a surjection with a pause, and [F6] gives $L_{\mathbb C}(\gamma\circ\psi)=2$. [given, F6, step 2.1, construct]

3.2 Fix a natural $q\ge1$. The prefix recursions in [F12] and step 1.8 give $H_{q+d}=H_q+\sum_{j<d}1/(q+j+1)$ by induction on $d$: at $d=0$ both sides equal $H_q$, and the successor adds $1/(q+d+1)$ to both sides. Taking $q=d=q_K$ gives $H_{q_{K+1}}=H_{q_K}+B_K$ with no natural subtraction or lower-index sum. Since $H_{q_0}=H_1=1$, step 2.2 and induction give $H_{q_K}\ge1+K/2$ for all $K$. The Archimedean property [F11] makes these lower bounds unbounded, so the harmonic partial sums are unbounded. [F11, F12, F13, step 1.8, step 1.9, step 2.2, algebra]

4.1 The partition sums $\ell_{P_N}(\eta)=2H_N$ are unbounded by steps 1.8 and 3.2. Hence the partition sums of $\eta$ have no real upper bound, so $\eta$ is not rectifiable by [F4], although its trace is bounded by step 1.6. [F4, step 1.6, step 1.8, step 3.2] ∎
