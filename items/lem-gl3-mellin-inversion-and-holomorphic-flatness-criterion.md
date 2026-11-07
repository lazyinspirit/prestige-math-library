---
dependency_level: 3
id: lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion
kind: lemma
title: "Distributional signed Mellin inversion and holomorphic flatness criterion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-gl3-mellin-endpoint-pairing-and-cutoff-independence, def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension, thm-fourier-inversion-on-schwartz-space, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, cor-cauchy-theorem-convex-domain, thm-identity-theorem-holomorphic-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice, lem-gl3-canonical-extension-is-unique]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, Theorem 4.8, Lemmas 4.13–4.41 and their complete proofs"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. Let $\mathcal O_{\mathrm{pg}}(A,B)$ be the holomorphic functions on $A<\operatorname{Re}s<B$ having polynomial growth in $|\operatorname{Im}s|$ uniformly on each closed real substrip. Allow finite or infinite strip endpoints. Suppose $A\le0$, $B\ge1$, and $H\in\mathcal O_{\mathrm{pg}}(A,B)$. For $\delta\in\{0,1\}$ there is a tempered distribution $\Phi_\delta H$ of parity $\delta$ defined by
$$\langle\Phi_\delta H,f\rangle=\frac1{4\pi i}\int_{\operatorname{Re}s=c}M_\delta f(s)H(1-s)\,ds,\qquad 0<c<1-A,$$
For Schwartz $f$, its signed Mellin transform is holomorphic for $\operatorname{Re}s>0$ and decays faster than every inverse power on each closed positive real strip, with bounds by continuous Schwartz seminorms. Here $f\in\mathcal S(\mathbb R)$ and $M_\delta f(s)=\int_{\mathbb R}(\operatorname{sgn}x)^\delta|x|^{s-1}f(x)\,dx$ for $\operatorname{Re}s>0$. The vertical integral is absolutely convergent, continuous in $f$, and independent of $c$. The map $\Phi_\delta$ is injective.

If $H$ extends with the same locally uniform polynomial growth to a strip with left endpoint less than $-k$, then $\Phi_\delta H$ vanishes to order $k$ at zero, for every integer $k\ge0$. If it extends to a strip with right endpoint greater than $k$, then $\Phi_\delta H$ has an extension across infinity vanishing there to order $k$, for every integer $k\ge1$.

If $T$ is tempered, vanishes to order $k_0\ge0$ at zero and has an extension of order $k_\infty\ge1$ at infinity, then
$$\langle T,f\rangle=\frac1{4\pi i}\int_{\operatorname{Re}s=c}M_\delta f(s)M_\delta T(1-s)\,ds\quad(0<c<k_0+1)$$
for every Schwartz $f$ of parity $\delta$. In particular, signed Mellin transform is a bijection between parity-$\delta$ tempered distributions flat to infinite order at both zero and infinity and entire functions of locally uniform polynomial growth on vertical lines; its inverse is $\Phi_\delta$.

## Statement references

[Miller and Schmid, Theorem4.8 and Lemmas4.13–4.41](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** The stated objects and [[def-countable-choice|Countable Choice]]. Parity means $T(-x)=(-1)^\delta T(x)$; replacing $f$ by $(f(x)+(-1)^\delta f(-x))/2$ projects to the matching test space.

[F1] [[lem-gl3-mellin-endpoint-pairing-and-cutoff-independence]] defines finite-order endpoint Mellin transforms, proves holomorphy and polynomial vertical bounds, and gives cutoff convergence uniform after division by a fixed polynomial in $|s|$.

[F2] [[thm-fourier-inversion-on-schwartz-space]] gives Fourier inversion with negative-sign transform. [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] gives its injective dual transform.

[F3] [[cor-cauchy-theorem-convex-domain]] permits contour shifts in rectangles inside a holomorphic strip. [[thm-identity-theorem-holomorphic-functions]] gives equality from agreement on a vertical line.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-dominated-convergence]] apply to absolutely integrable scalar parameter integrals. [[lem-test-function-cutoffs-and-euclidean-localization]] supplies the fixed endpoint cutoffs.

[F5] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] defines flatness by finite sums $x^{k+j}D^jh_j$ with bounded coefficients, and at infinity by the reciprocal coordinate. [[lem-gl3-canonical-extension-is-unique]] identifies extensions of the same positive order.

## Proof

**Given:** The stated data.

1.1 For a parity-$\delta$ Schwartz test $f$ and $c>0$, put $g_c(v)=e^{cv}f(e^v)$. It is Schwartz: near $v=-\infty$ the exponential absorbs every polynomial in $v$, and near $+\infty$ any fixed Schwartz decay power of $f$ absorbs $e^{cv}$ and all derivatives under the chain rule. These bounds are uniform for $c$ in a compact positive interval and bounded by a finite Schwartz seminorm of $f$. The identity [F2, F3, given, algebra]
$$M_\delta f(c+it)=2\int_{\mathbb R}g_c(v)e^{itv}\,dv$$
also permits complex difference quotients under the integral, by an integrable bound with one logarithmic factor on compact real strips. Thus the Mellin transform is holomorphic for positive real part. The displayed identity gives rapid decay in $t$, uniformly in that interval, by repeated integration by parts; its constants are continuous Schwartz seminorms. For arbitrary $f$, use its parity projection. Pairing this rapid decay with the polynomial bound for $H$ proves absolute convergence and continuity of the defining integral. Rectangular shifts in $s$ are valid by [F3]; the horizontal sides tend to zero since the same rapid bound is uniform between the two positive real lines. This proves independence of $c$ and the existence of the stated tempered distribution. [F2, F3, given, algebra]

2.1 Fourier inversion of $g_c$ gives, for $x\ne0$, [F1, F2, F4, F5, step 1.1, algebra]
$$f(x)=\frac{(\operatorname{sgn}x)^\delta}{4\pi i}\int_{\operatorname{Re}s=c}M_\delta f(s)|x|^{-s}\,ds$$
for parity-$\delta$ $f$. The rapid bound of step 1.1 allows every $x$ derivative under the integral uniformly on compact subsets away from zero. If $T$ has compact support away from zero, its finite distribution order consequently permits pairing this identity termwise, proving the asserted inversion pairing first for such $T$. For general $T$ in the statement, use $T\psi_t$ with the endpoint cutoffs in [F1]. Their Mellin transforms converge on $-k_0<\operatorname{Re}z<k_\infty$ uniformly after division by one polynomial in $|z|$. The rapid test bound therefore permits the limit under the vertical integral when $0<c<k_0+1$. On the left, $T\psi_t\to T$ against Schwartz tests: near zero the local form of order $k_0$ gives an $O(t^{k_0+1})$ error by the product rule, and at infinity $(1-\chi(tx))f$ tends to zero in every Schwartz seminorm. This proves the full inversion pairing and $\Phi_\delta(M_\delta T)=T$ for matching parity. [F1, F2, F4, F5, step 1.1, algebra]

2.2 Suppose $\Phi_\delta H=0$. Fix $0<c<1$ and test with $f(x)=(\operatorname{sgn}x)^\delta|x|^{-c}\varphi(\log|x|)$ for arbitrary $\varphi\in C_c^\infty(\mathbb R)$. This is a smooth compactly supported test away from zero, and $M_\delta f(c+it)=2\int\varphi(v)e^{itv}\,dv$. After the real rescaling $t=-2\pi y$, this says that the distributional Fourier transform of the polynomial-growth function $y\mapsto H(1-c+2\pi iy)$ annihilates all compactly supported smooth tests, and is zero. The injectivity in [F2] shows that this function is the zero distribution; being continuous it is zero pointwise. The identity theorem [F3] then gives $H=0$ on its connected strip. This proves injectivity. [F2, F3, step 1.1, algebra]

2.3 We prove the flatness assertions by a regularization that avoids any unproved jet realization. First suppose $H$ is holomorphic to the left of $-k$. Choose $a_1<-k$ in that strip, $a_0\in(0,1)$, and a real $p<a_1$. Let $N$ exceed by at least two a polynomial growth degree for $H$ on $a_1\le\operatorname{Re}z\le a_0$, and set $J(z)=H(z)/(z-p)^N$. It is holomorphic between those lines and $O((1+|\operatorname{Im}z|)^{-2})$ uniformly there. Define [F3, F4, step 1.1, algebra]
$$F(x)=\frac{(\operatorname{sgn}x)^\delta}{4\pi i}\int_{\operatorname{Re}z=a_0}J(z)|x|^{-z}\,dz\quad(x\ne0).$$
It is continuous off zero and $O(|x|^{-a_0})$, hence locally integrable at zero and of polynomial growth at infinity. Fubini in [F4], using $\int |f(x)||x|^{-a_0}dx<\infty$ and $J$ integrable on the vertical line, shows that $\Phi_\delta J$ is exactly this regular distribution. Shift the contour to $a_1$ by [F3], using the uniform inverse-square bound. This gives $F(x)=O(|x|^{-a_1})$ near zero. In particular $F=x^kh$ with $h$ bounded near zero. [F3, F4, step 1.1, algebra]

3.1 The defining functional and integration by parts in $g_c$ give [F3, F4, F5, step 2.3, algebra]
$$\Phi_\delta(zH(z))=-xD(\Phi_\delta H).$$
Indeed $M_\delta(f+xf')(s)=(1-s)M_\delta f(s)$, while $\langle-xDT,f\rangle=\langle T,f+xf'\rangle$. Hence $\Phi_\delta H=(-xD-p)^NF$. Substituting $F=x^kh$ commutes $x^k$ through this Euler polynomial and expands it into a finite sum $x^{k+j}D^jh$ with constant coefficients; $h$ is bounded. This proves order $k$ at zero in the actual distribution, including its value at the origin. If instead $H$ extends to the right of an integer $k\ge1$, choose $a_1>k$, $a_0\in(0,1)$ and $p>a_1$, and repeat step 2.3 shifting to the right. Now $F(x)=O(|x|^{-a_1})$ at infinity. In the coordinate $u=1/x$, $F(1/u)=u^kh(u)$ with bounded $h$ near zero, and $xD_x=-uD_u$. The same Euler-polynomial argument extends $\Phi_\delta H$ across infinity with order $k$. These arguments are local in the relevant strips, so a possible pole of $J$ at $p$ outside the contour window is irrelevant. [F3, F4, F5, step 2.3, algebra]

4.1 For entire $H$ of locally uniform polynomial vertical growth, steps 2.3–3.1 apply for every $k$ at both ends. At infinity fix the order-one extension; positive-order uniqueness in [F5] makes every higher-order extension agree with it on overlap. Thus $\Phi_\delta H$ is infinitely flat at both ends. Its Mellin transform is entire by [F1]. Step 2.1 gives $\Phi_\delta(M_\delta\Phi_\delta H)=\Phi_\delta H$; injectivity from step 2.2 yields $M_\delta\Phi_\delta H=H$, first on the common central strip and then everywhere by [F3]. Conversely, for every parity-$\delta$ $T$ flat at both ends, [F1] gives an entire polynomial-growth Mellin transform and step 2.1 gives $\Phi_\delta M_\delta T=T$. This proves the bijection and all assertions. [F1, F3, step 2.1, step 2.2, step 2.3, step 3.1] ∎
