---
id: ex-quasisymmetric-power-map-on-the-circle
kind: example
title: Power maps, endpoint distortion, and a non-Möbius quasisymmetric circle map
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 13
deps:
  - cor-mean-value-theorem
  - cor-second-derivative-characterises-convexity
  - def-axiom-of-choice
  - def-circle-as-real-line-mod-integers
  - def-convex-concave-and-midpoint-convex-functions
  - def-countable-choice
  - def-mobius-transformation
  - def-quasisymmetric-circle-homeomorphism
  - def-real-power
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-ahlfors-extension-of-line-quasisymmetric-maps
  - thm-beurling-ahlfors-extension
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-exponential-limits-and-range
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-natural-logarithm-laws
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-monotonicity-from-the-derivative
  - thm-sine-and-cosine-derivatives
axiom_use: >-
  Assume AC only for the Beurling–Ahlfors extension suppliers in part (c).
  Their measure and ACL interfaces also use Countable Choice, which follows
  from AC by [[thm-choice-implies-dependent-implies-countable-choice]]. The
  power-map and circle-distortion calculations in parts (a) and (b) and the
  explicit quasisymmetric estimate in part (c) are choice free.
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.1.1, printed p. 207, Exercise 15.1(i)–(ii): the exercise states that positive power maps on [0,1] are quasisymmetric and that matching a power map to the identity across the endpoint can destroy quasisymmetry, but supplies no proof. The present item gives the adjacent-interval ratios and the circle endpoint calculation in full."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. For $p>0$, define $h_p:[0,\infty)\to[0,\infty)$ by $h_p(x)=x^p$. For half-line quasisymmetry, use the adjacent-equal-interval inequality from [[def-quasisymmetric-circle-homeomorphism]], restricted to intervals contained in $[0,\infty)$.

(a) The map $h_p$ is an increasing homeomorphism of $[0,\infty)$ and is quasisymmetric with the sharp constant
$$L(p)=\max\{2^p-1,\,1/(2^p-1)\}.$$
At the endpoint, for $I=[0,t]$ and $J=[t,2t]$ with $t>0$,
$$\frac{|h_p(I)|}{|h_p(J)|}=\frac1{2^p-1}.$$
For $I_k=[kt,(k+1)t]$ and $J_k=[(k+1)t,(k+2)t]$,
$$\frac{|h_p(J_k)|}{|h_p(I_k)|}=\frac{(k+2)^p-(k+1)^p}{(k+1)^p-k^p}\longrightarrow1\qquad(k\to\infty).$$
For $p\ne1$, the sharp distortion larger than $1$ is attained at $k=0$ in the corresponding order; both ordered ratios tend to $1$ as $k\to\infty$. The map $h_p$ is affine exactly when $p=1$.

(b) The endpoint power completion $H_p:\mathbb S^1\to\mathbb S^1$ defined by the lift
$$\psi_p(\theta)=2\pi\left(\frac{\theta}{2\pi}\right)^p,\qquad 0\le\theta\le2\pi,$$
is a homeomorphism fixing $1$. If $p\ne1$, it is not quasisymmetric: adjacent arcs of equal length on opposite sides of $1$ have image-length ratio tending to $0$ or $+\infty$ as their length tends to zero.

(c) For $0<\delta<1$, the circle map
$$h_\delta(e^{i\theta})=e^{i(\theta+\delta\sin\theta)}$$
is an orientation-preserving quasisymmetric homeomorphism with constant at most $(1+\delta)/(1-\delta)$, and it is not the restriction of any Möbius transformation. It extends to a quasiconformal homeomorphism of the disc. Explicitly, if $f_\delta(t)=t+\delta\sin t$ and $G_\delta$ is its reflected Ahlfors–Beurling line extension, then the circle extension is
$$\widetilde h_\delta(e^{iz})=e^{iG_\delta(z)}.$$

## Facts & Assumptions

**Given:** AC, a real exponent $p>0$, and $0<\delta<1$ for part (c).

[F1] For $x>0$, $x^p=\exp(p\log x)$, $(x^p)'=px^{p-1}$, and positive-base real powers satisfy $(x^p)^q=x^{pq}$ ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]]). The logarithm is strictly increasing and onto $\mathbb R$, and $\exp(u)\to0$ as $u\to-\infty$ ([[thm-natural-logarithm-laws]], [[thm-exponential-limits-and-range]]).

[F2] The chain and product rules give $(x^p)''=p(p-1)x^{p-2}$ on $(0,\infty)$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]). Thus $x^p$ is convex for $p>1$ and concave for $0<p<1$ ([[cor-second-derivative-characterises-convexity]], [[def-convex-concave-and-midpoint-convex-functions]]). Once continuity at $0$ is established, these convexity or concavity inequalities extend to intervals with endpoint $0$ by taking limits.

[F3] The mean value theorem holds for continuous functions on a closed interval that are differentiable in its interior ([[cor-mean-value-theorem]]).

[F4] Line and circle quasisymmetry are measured by adjacent intervals or arcs of equal length; both possible orders are bounded by the same constant ([[def-quasisymmetric-circle-homeomorphism]]). The circle is $\mathbb R/\mathbb Z$ with parametrization $[s]\mapsto e^{2\pi i s}$ ([[def-circle-as-real-line-mod-integers]]).

[F5] A Möbius transformation is a biholomorphic sphere map, and every automorphism of $\mathbb D$ is a rotated Blaschke factor $e^{i\vartheta}(a-z)/(1-\overline a z)$ ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-disc-automorphisms-are-rotated-blaschke-factors]]).

[F6] AC implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F7] The circle Beurling–Ahlfors theorem extends any quasisymmetric circle homeomorphism to a quasiconformal sphere map preserving $\mathbb D$ and $\mathbb S^1$; in its proof this extension is the exponential descent of the reflected Ahlfors–Beurling extension of a periodic lift ([[thm-beurling-ahlfors-extension]]). That proof and the extension's analytic interfaces remain provisional; the use in Proof 6.1 is open pending supplier reconciliation.

[F8] For an increasing line-quasisymmetric homeomorphism, the Ahlfors–Beurling integral formula gives a homeomorphic quasiconformal extension to the upper half-plane; reflection extends it to the plane, and adding a common real translation to input and boundary values adds that translation to the extension ([[lem-ahlfors-extension-of-line-quasisymmetric-maps]]). Its AC/CC and gluing interfaces remain provisional; the use in Proof 6.1 is open pending supplier reconciliation.

[F9] A differentiable function with positive derivative on an interval is strictly increasing ([[thm-monotonicity-from-the-derivative]]).

[F10] $(\sin\theta)'=\cos\theta$ ([[thm-sine-and-cosine-derivatives]]).

## Proof

**Proof technique:** calculate the adjacent-interval ratios using homogeneity and convexity, test the circle endpoint directly, and use a smooth angular perturbation for the non-Möbius circle example.

1.1 For $x>0$, [F1] and [F9] show that $h_p$ is strictly increasing and continuous on $(0,\infty)$. As $x\downarrow0$, $\log x\to-\infty$ because $\log$ is increasing and onto, so $x^p=\exp(p\log x)\to0$ by [F1]; hence $h_p$ is continuous at $0$. The inverse is $h_{1/p}$ by [F1], and the same endpoint argument makes it continuous at $0$. Thus $h_p$ is an increasing homeomorphism of the closed half-line. [F1, F9, algebra]

1.2 By [F3], $g_p(s)=(s+1)^p-s^p=p\xi_s^{p-1}$ for some $\xi_s\in(s,s+1)$, and $g_p(s+1)=p\eta_s^{p-1}$ for some $\eta_s\in(s+1,s+2)$. Thus $g_p(s+1)/g_p(s)=(\eta_s/\xi_s)^{p-1}\to1$ as $s\to\infty$, since $\eta_s/\xi_s\to1$. This gives the displayed limit for $J_k/I_k$. If $p=1$, $h_p(x)=x$ is affine. If $p\ne1$, its second derivative $p(p-1)x^{p-2}$ is nonzero for all $x>0$, so $h_p$ cannot be affine. [F1, F3, F2, algebra]

1.3 Put $\phi_\delta(\theta)=\theta+\delta\sin\theta$. By [F10], its derivative lies in $[1-\delta,1+\delta]$, so it is strictly increasing and satisfies $\phi_\delta(\theta+2\pi)=\phi_\delta(\theta)+2\pi$; hence it induces an orientation-preserving circle homeomorphism. For every arc represented by $[a,b]$, the mean value theorem [F3] gives $(1-\delta)(b-a)\le\phi_\delta(b)-\phi_\delta(a)\le(1+\delta)(b-a)$. Adjacent equal arcs therefore have image-length ratios in either order at most $(1+\delta)/(1-\delta)$, so $h_\delta$ is quasisymmetric by [F4]. [F3, F4, F10, algebra]

2.1 Let $I=[x,x+t]$ and $J=[x+t,x+2t]$ with $x\ge0,t>0$, and put $s=x/t$. Their image-length ratio in this order is $R_p(s)=((s+1)^p-s^p)/((s+2)^p-(s+1)^p)$. Set $u=1/(s+1)\in(0,1]$; homogeneity gives $R_p(s)=[1-(1-u)^p]/[(1+u)^p-1]$. If $p>1$, convexity makes equal-step increments nondecreasing, hence $R_p(s)\le1$; the chord bounds $v^p\le v$ on $[0,1]$ and $(1+u)^p\le1+(2^p-1)u$ on $[1,2]$ give $1/R_p(s)\le2^p-1$. If $0<p<1$, concavity makes the increments nonincreasing, hence $R_p(s)\ge1$; the chord bounds $v^p\ge v$ on $[0,1]$ and $(1+u)^p\ge1+(2^p-1)u$ on $[1,2]$ give $R_p(s)\le1/(2^p-1)$. For $p=1$, $R_p(s)=1$. At $s=0$ the endpoint ratio is $1/(2^p-1)$ and its reverse is $2^p-1$, so these bounds give the sharp two-order constant stated in part (a). [F2, F4, step 1.1, algebra]

2.2 The lift $\psi_p$ is a continuous increasing homeomorphism of $[0,2\pi]$ fixing the endpoints, so identifying $0$ with $2\pi$ gives the stated circle homeomorphism fixing $1$. For $0<t<2\pi$, the arcs with parameters $[0,t]$ and $[2\pi-t,2\pi]$ are adjacent and have equal length. Their image lengths are $2\pi(t/(2\pi))^p$ and $2\pi[1-(1-t/(2\pi))^p]$. By differentiability of $v^p$ at $v=1$, the second length divided by $t$ tends to $p$, while the first divided by $t$ is $(2\pi)^{1-p}t^{p-1}$. Their ratio tends to $0$ for $p>1$ and to $+\infty$ for $0<p<1$, violating the two-order adjacent-arc bound in [F4]. [F1, F3, F4, step 1.1, algebra]

2.3 Suppose a Möbius map $M$ restricts to $h_\delta$. By [F5], it is a holomorphic sphere homeomorphism; because it preserves $\mathbb S^1$, it maps $\mathbb D$ to one of the two complementary components, and the orientation-preserving boundary map forces $M(\mathbb D)=\mathbb D$. The disk-automorphism form in [F5] is $M(z)=e^{i\vartheta}(a-z)/(1-\overline a z)$. Since $h_\delta$ fixes $1$ and $-1$, the equations $M(1)=1$ and $M(-1)=-1$, namely $e^{i\vartheta}(a-1)=1-\overline a$ and $e^{i\vartheta}(a+1)=-(1+\overline a)$, give $e^{i\vartheta}=-1$ and $a\in(-1,1)$. Hence $M(z)=(z-a)/(1-az)$. Its angular derivative at $\theta$ is $(1-a^2)/(1-2a\cos\theta+a^2)$; at $0$ and $\pi$ these derivatives multiply to $1$. The corresponding derivatives of $h_\delta$ are $1+\delta$ and $1-\delta$, whose product is $1-\delta^2\ne1$. This contradiction proves that $h_\delta$ is not Möbius. [F5, step 1.3, algebra]

3.1 The lift $f_\delta(t)=t+\delta\sin t$ is increasing, has $f_\delta(t+2\pi)=f_\delta(t)+2\pi$, and is line-quasisymmetric with the constant from step 1.3. For $z=x+iy$ with $y>0$, its Ahlfors–Beurling extension is $G_\delta(z)=\frac1{2y}\int_{x-y}^{x+y}f_\delta(t)\,dt+\frac{i}{y}\left(\int_x^{x+y}f_\delta(t)\,dt-\int_{x-y}^{x}f_\delta(t)\,dt\right)$; below the line set $G_\delta(z)=\overline{G_\delta(\overline z)}$, and on the line set $G_\delta(t)=f_\delta(t)$. Its translation covariance gives $G_\delta(z+2\pi)=G_\delta(z)+2\pi$, so $\widetilde h_\delta(e^{iz})=e^{iG_\delta(z)}$ is well defined on $\mathbb C^*$ and has boundary values $h_\delta$. The descent and its quasiconformal extension across $0$ and $\infty$ are exactly the construction in the circle clause [F7], which supplies a quasiconformal sphere homeomorphism preserving $\mathbb D$ and $\mathbb S^1$; restricting it gives the claimed quasiconformal disc extension. Its AC and Countable Choice assumptions follow by [F6]. [F6, F7, F8, step 1.3, construct] ∎
