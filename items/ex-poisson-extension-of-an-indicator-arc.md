---
id: ex-poisson-extension-of-an-indicator-arc
kind: example
title: "Poisson extension of an indicator arc"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [cor-c-one-change-of-variables-for-l-one-functions, cor-additivity-of-the-nonnegative-lebesgue-integral, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-circle-maximal-function-and-nontangential-region, def-harmonic-hardy-class-disc, def-mean-value-property-for-plane-functions, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-poisson-kernel-properties-on-the-disc, lem-sine-positive-and-cosine-decreasing-on-zero-two, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-double-angle-and-power-reduction-identities, thm-mean-value-property-for-plane-harmonic-functions, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-poisson-extension-lp-contraction-and-norm-limit]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Poisson Integrals of Measures, printed pp. 111-120 (PDF pp. 116-125): Poisson integrals of L^p data, their L^p norms, and pointwise boundary behaviour at continuity points."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "Chapter 3 section 2, printed pp. 36-37: the Poisson kernel as an approximate identity and the boundary behaviour of harmonic extensions."
---

## Example

Let $0<h<\tfrac12$ and $\zeta_0\in\mathbb T$, let $I:=I_h(\zeta_0)$ be the
centred open arc of radius $h$, let $f:=\mathbf 1_I$ be its indicator and let
$u:=P[f]$ be the Poisson integral of $f$. Then:

1. $u$ is harmonic on $\mathbb D$ and $0<u(z)<1$ for every $z\in\mathbb D$;
2. $\|u_r\|_{L^1(\mathbb T,m)}=m(I)=2h$ for every $0\le r<1$, and
   $\|u_r\|_{L^p(\mathbb T,m)}\le m(I)^{1/p}$ for every $1\le p<\infty$;
3. $u(z)\to1$ as $z\to\zeta$ for every interior point $\zeta$ of $I$, and
   $u(z)\to0$ as $z\to\zeta$ for every interior point $\zeta$ of
   $\mathbb T\setminus I$; in particular the nontangential boundary value of
   $u$ is $1$ at interior points of $I$ and $0$ at interior points of the
   complement;
4. at each of the two endpoints $\zeta_\pm$ of $I$ the radial limit is
   $\frac12$: $u(r\zeta_\pm)\to\frac12$ as $r\uparrow1$;
5. the indicator $f$ itself has no two-sided pointwise boundary limit at
   either endpoint.

## Facts & Assumptions

**Given:** Countable choice; a radius $0<h<\frac12$, a centre $\zeta_0\in\mathbb T$ written $\zeta_0=\varphi([t_0])$, the arc $I=I_h(\zeta_0)$, the indicator $f=\mathbf 1_I$ and $u=P[f]$.

[L1] The torus $\mathbb T=\mathbb R/\mathbb Z$ is identified with the Euclidean circle by the bijection $\varphi([t])=e^{2\pi it}$, and $m$ is the normalized Haar probability measure with $\int_{\mathbb T}F\,dm=\int_0^1F(\varphi([t]))\,dt$ and translation invariance. The circular distance is $d(\zeta,\eta)=\min\{|s-t-k|:k\in\mathbb Z\}$ for $\zeta=[t]$, $\eta=[s]$; for $0<h<\frac12$ the centred arc $I_h(\zeta)=\{\eta:d(\zeta,\eta)<h\}$ is open with $m(I_h(\zeta))=2h$; and a complex-valued $v$ on $\mathbb D$ has nontangential limit $L$ at $\zeta$ whenever $v(z)\to L$ as $z\to\zeta$ without restriction ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-circle-maximal-function-and-nontangential-region]]).

[L2] For $f\in L^p(\mathbb T,m)$, $P[f](z)=\int_{\mathbb T}P(z,\eta)f(\eta)\,dm(\eta)$ with $P(z,\eta)=(1-|z|^2)/|\varphi(\eta)-z|^2>0$; the radial functions satisfy $(P_r*f)(\zeta)=\int_{\mathbb T}P_r(\zeta-\eta)f(\eta)\,dm(\eta)=P[f](r\zeta)$ with $P_r(u)=(1-r^2)/(1-2r\cos(2\pi u)+r^2)$, and $P_r$ is even because cosine is even ([[def-poisson-integral-of-finite-boundary-measure]], [[def-poisson-kernel-on-the-disc]]).

[L3] For $0\le r<1$ the Poisson kernel satisfies $P_r(u)>0$, $\frac{1}{2\pi}\int_0^{2\pi}P_r(\theta)\,d\theta=1$, and for every $\delta\in(0,\pi]$ one has $\sup_{\delta\le|\theta|\le\pi}P_r(\theta)\to0$ as $r\uparrow1$; in torus coordinates these say $\int_{\mathbb T}P_r\,dm=1$ and $\sup\{P_r(u):u\in\mathbb T,\ d(u,0)\ge\delta\}\to0$ for every $\delta>0$ ([[lem-poisson-kernel-properties-on-the-disc]]).

[L4] If $1\le p\le\infty$ and $f\in L^p(\mathbb T,m)$, then $P[f]$ is complex harmonic, lies in $h^p(\mathbb D)$ and satisfies $\|u_r\|_{L^p(\mathbb T,m)}=\|P_r*f\|_p\le\|f\|_p$ for every $0\le r<1$; a complex-valued function is harmonic exactly when its real and imaginary parts are real harmonic ([[thm-poisson-extension-lp-contraction-and-norm-limit]], [[def-harmonic-hardy-class-disc]]).

[L5] A real harmonic function satisfies the circle mean-value property $u(a)=\frac{1}{2\pi}\int_0^{2\pi}u(a+te^{i\theta})\,d\theta$ on every closed disc contained in its domain ([[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]]).

[L6] For real $x$ one has $|e^{2\pi ix}-1|^2=2-2\cos(2\pi x)=4\sin^2(\pi x)$, and $\sin y\ge y/3$ for $0<y\le2$; moreover $|e^{2\pi ix}|=1$ and cosine is even ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-double-angle-and-power-reduction-identities]], [[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[L7] For nonnegative measurable $g$ one has $\int_{\mathbb T}g\,dm\ge0$, the integral is additive on nonnegative measurable summands, and $\int_{\mathbb T}g\,dm=0$ holds exactly when $g=0$ $m$-almost everywhere ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Verification

**Proof technique:** direct.

1.1 The data. By [L1] the arc $I=I_h(\zeta_0)$ is open with $m(I)=2h\in(0,1)$, because $0<h<\frac12$. Thus $I$ is a nonempty proper open arc, and its complement is a closed arc of measure $1-2h>0$ with nonempty interior. Hence $f=\mathbf 1_I$ is a Borel function with $0\le f\le1$, $f=1$ exactly on $I$ and $f=0$ exactly on $\mathbb T\setminus I$, and $\|f\|_{L^p}^p=\int_{\mathbb T}f\,dm=m(I)$ for $1\le p<\infty$ while $\|f\|_\infty=1$ and $\|f\|_1=m(I)$. The two endpoints of $I$ are $\zeta_\pm:=\varphi([t_0\pm h])$; they are the points with $d(\zeta_0,\zeta_\pm)=h$ and do not belong to $I$. [given, L1, algebra]

1.2 The chord bound. For $|x|\le\frac12$ one has $|e^{2\pi ix}-1|=2|\sin(\pi x)|\ge2|x|$: indeed $|e^{2\pi ix}-1|^2=4\sin^2(\pi x)$ by [L6], and $\pi|x|\le\frac{\pi}{2}<2$ with $\sin y\ge y/3$ for $0<y\le2$ gives $|\sin(\pi x)|=\sin(\pi|x|)\ge\pi|x|/3\ge|x|$ since $\pi>3$. Consequently, for all $\zeta,\eta\in\mathbb T$ with $d(\zeta,\eta)\le\frac12$, writing $\zeta=\varphi([t])$, $\eta=\varphi([s])$ and choosing $k$ with $|s-t-k|=d(\zeta,\eta)$ gives $|\varphi(\eta)-\varphi(\zeta)|=|e^{2\pi i(s-t-k)}-1|\ge2\,d(\zeta,\eta)$. [given, L1, L6, algebra]

2.1 Local concentration of the kernel. Let $\zeta\in\mathbb T$ and $0<\delta\le\frac12$, and let $z\in\mathbb D$ with $|z-\varphi(\zeta)|\le\delta$. For every $\eta\in\mathbb T$ with $d(\eta,\zeta)\ge\delta$ step 1.2 gives $|\varphi(\eta)-\varphi(\zeta)|\ge2\delta$, hence $|\varphi(\eta)-z|\ge|\varphi(\eta)-\varphi(\zeta)|-|\varphi(\zeta)-z|\ge2\delta-\delta=\delta$, and therefore $P(z,\eta)\le(1-|z|^2)/\delta^2$ by [L2]. Thus $\sup\{P(z,\eta):\eta\in\mathbb T,\ d(\eta,\zeta)\ge\delta\}\le(1-|z|^2)/\delta^2\to0$ as $z\to\varphi(\zeta)$ inside $\mathbb D$. [step 1.2, L2, algebra]

2.2 The extension and the strict bounds. The Poisson integral $u=P[f]$ is defined, and [L2] gives $u(z)=\int_{\mathbb T}P(z,\eta)f(\eta)\,dm(\eta)=\int_IP(z,\eta)\,dm(\eta)$ for every $z\in\mathbb D$. Since $P(z,\cdot)>0$ on $\mathbb T$ and $m(I)>0$, the integral over $I$ is strictly positive: if it vanished, then $P(z,\cdot)\mathbf 1_I=0$ $m$-almost everywhere by [L7], contradicting positivity on the non-null set $I$. Likewise $P(z,\cdot)>0$ on the non-null set $\mathbb T\setminus I$, so $\int_{\mathbb T\setminus I}P(z,\cdot)\,dm>0$; additivity of the nonnegative integral over the disjoint union $\mathbb T=I\sqcup(\mathbb T\setminus I)$ and the unit mass $\int_{\mathbb T}P(z,\eta)\,dm(\eta)=1$ of [L3] therefore give $u(z)=\int_{\mathbb T}P\,dm-\int_{\mathbb T\setminus I}P\,dm<1$. Hence $0<u(z)<1$ for every $z\in\mathbb D$, and $u$ is complex harmonic by [L4]; being real-valued, it is a real harmonic function. [step 1.1, L2, L3, L4, L7]

2.3 The radial limit at an endpoint is one half. Let $\zeta_+=\varphi([t_0+h])$; for $0\le r<1$ the radial Poisson representation of [L2] and the integral formula of [L1] give $u(r\zeta_+)=\int_0^1P_r(t_0+h-\tau)\mathbf 1_{\{d([\tau],[t_0])<h\}}\,d\tau$, and translation invariance of $m$ moves the centre to $[0]$, giving $\int_0^1P_r(h-s)\mathbf1_{\{d([s],[0])<h\}}\,ds$. Here the set in $[0,1)$ is $[0,h)\cup(1-h,1)$. Split the integral over those two intervals and on the second put $v=s-1$; periodicity gives $P_r(h-s)=P_r(h-v)$, so that piece equals $\int_{-h}^0P_r(h-v)\,dv$. The linear substitutions are licensed by [[cor-c-one-change-of-variables-for-l-one-functions]]; all integrands are bounded on these finite intervals, and interval endpoints have Lebesgue measure zero. Combining the pieces and then setting $w=h-s$ yields $u(r\zeta_+)=\int_{-h}^{h}P_r(h-s)\,ds=\int_0^{2h}P_r(w)\,dw$. By evenness of $P_r$, $\int_0^{2h}P_r=\frac12\int_{-2h}^{2h}P_r$. If $2h\le\frac12$, then $[-2h,2h]$ lies in a fundamental interval $[-\frac12,\frac12]$, and its complement there stays at torus distance at least $2h>0$ from $0$; [L3] therefore gives $\int_{-2h}^{2h}P_r\to1$ (with the complement empty when $2h=\frac12$). If $\frac12<2h<1$, split $[-2h,2h]$ into $[-\frac12,\frac12]$ and the two extra intervals $[-2h,-\frac12]$ and $[\frac12,2h]$. The fundamental interval has integral $1$, while on the extra intervals the torus distance to $0$ is at least $1-2h>0$, so their integrals tend to $0$ by [L3]. Thus in either case $\int_{-2h}^{2h}P_r\to1$ and $u(r\zeta_+)\to\frac12$. The same computation at $\zeta_-$, using evenness, gives $u(r\zeta_-)\to\frac12$. [step 1.1, L1, L2, L3, algebra]

2.4 No two-sided limit of the indicator at an endpoint. Fix $m$ so large that $\frac1m<\min\{h,\frac12-h\}$. Then $\eta_m:=\varphi([t_0+h-\frac1m])$ satisfies $d(\zeta_0,\eta_m)=h-\frac1m<h$ and so lies in $I$, whereas $\eta'_m:=\varphi([t_0+h+\frac1m])$ satisfies $d(\zeta_0,\eta'_m)=h+\frac1m>h$ and so lies in $\mathbb T\setminus I$; both sequences converge to $\zeta_+$ as $m\to\infty$ by continuity of $\varphi$. Hence $f(\eta_m)=1$ and $f(\eta'_m)=0$ eventually, and $f$ has no limit at $\zeta_+$; the same argument with $t_0-h$ applies to the other endpoint $\zeta_-$. [step 1.1, L1, algebra]

3.1 The $L^p$ bound. Since $u_r=P_r*f$ by [L2], the contraction inequality of [L4] and step 1.1 give $\|u_r\|_{L^p(\mathbb T,m)}\le\|f\|_{L^p}=m(I)^{1/p}$ for every $1\le p<\infty$ and every $0\le r<1$. [step 1.1, step 2.2, L4]

3.2 The $L^1$ identity. For $0<r<1$ one has $\int_{\mathbb T}u_r\,dm=\frac{1}{2\pi}\int_0^{2\pi}u(re^{i\theta})\,d\theta=u(0)$: the first equality is the torus normalization of [L1], and the second is the circle mean-value property [L5] applied to the real harmonic $u$ on the disc $\overline{D(0,r)}\subseteq\mathbb D$. For $r=0$ the identity $u_0\equiv u(0)$ gives the same value. Moreover $u(0)=\int_IP(0,\eta)\,dm(\eta)=\int_I1\,dm=m(I)$ because $P(0,\eta)=1$ by [L2]. Since $u_r\ge0$ by step 2.2, $\|u_r\|_{L^1(\mathbb T,m)}=\int_{\mathbb T}u_r\,dm=m(I)=2h$ for every $0\le r<1$. [step 1.1, step 2.2, L1, L2, L5]

3.3 The boundary limits at interior points. Let $\zeta$ be an interior point of $I$: then $d(\zeta_0,\zeta)<h$, and choosing $0<\delta<\frac12$ with $d(\zeta_0,\zeta)+\delta<h$ gives $d(\zeta_0,\eta)<h$ for every $\eta$ with $d(\eta,\zeta)<\delta$ by the triangle inequality for the circular distance; that is, $I_\delta(\zeta)\subseteq I$ and $f=1$ there. For $z\in\mathbb D$ with $|z-\varphi(\zeta)|\le\delta$ one then has $|u(z)-1|=\bigl|\int_{\mathbb T}(f(\eta)-1)P(z,\eta)\,dm(\eta)\bigr|\le\int_{\mathbb T\setminus I_\delta(\zeta)}P(z,\eta)\,dm(\eta)\le\sup\{P(z,\eta):d(\eta,\zeta)\ge\delta\}$, which tends to $0$ as $z\to\varphi(\zeta)$ by step 2.1. Hence $u(z)\to1$ as $z\to\zeta$ without restriction, and in particular nontangentially. If instead $\zeta$ is an interior point of $\mathbb T\setminus I$, choose $\delta$ with $I_\delta(\zeta)\cap I=\varnothing$; then $f=0$ on $I_\delta(\zeta)$ and the same estimate without the term $1$ gives $|u(z)|\le\sup\{P(z,\eta):d(\eta,\zeta)\ge\delta\}\to0$, so $u(z)\to0$. [step 2.1, step 2.2, L1, L7, algebra]

4.1 Assembly. Step 2.2 gives the harmonic extension with $0<u<1$; steps 3.2 and 3.1 give the norm identities $\|u_r\|_1=m(I)$ and $\|u_r\|_p\le m(I)^{1/p}$; step 3.3 gives the unrestricted, hence nontangential, boundary values $1$ on interior points of $I$ and $0$ on interior points of the complement; step 2.3 gives the radial limit $\frac12$ at each endpoint, while step 2.4 shows that the chosen indicator representative $f=\mathbf 1_I$ has no two-sided pointwise limit at either endpoint. ∎ [step 2.2, step 3.1, step 3.2, step 2.3, step 2.4, step 3.3]
