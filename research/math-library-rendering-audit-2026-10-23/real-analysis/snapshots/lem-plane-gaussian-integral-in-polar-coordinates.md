---
id: lem-plane-gaussian-integral-in-polar-coordinates
kind: lemma
title: "The plane Gaussian integral equals $\\pi$ by polar coordinates"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nonnegative-improper-multiple-integral-by-exhaustion, lem-riemann-integral-unchanged-by-content-zero-modification, thm-change-of-variables-for-compact-jordan-sets, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-jacobian-determinant-of-a-c-one-map, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-zero-sets-and-fundamental-period, lem-integer-part, thm-jordan-boundary-criterion, thm-graphs-of-continuous-functions-have-content-zero, thm-heine-borel-rn, thm-jordan-content-and-indicator-integrability, thm-multidimensional-integral-properties, cor-riemann-integral-of-a-product-function, def-multidimensional-rectangle-and-volume, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-derivative-of-exponential, thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, thm-exponential-definition-equivalence, thm-chain-rule, lem-derivative-of-a-power, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: true
short: "Plane Gaussian integral is $\\pi$"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

The nonnegative improper plane Gaussian integral satisfies

$$\int_{\mathbb R^2}e^{-(x^2+y^2)}\,d(x,y)=\pi.$$

## Facts & Assumptions

**Given:** The polar map $P(r,\theta)=(r\cos\theta,r\sin\theta)$ and reals $0<\varepsilon<R$.

[L1] Let $g$ be injective and $C^1$ with invertible derivative on an open neighbourhood of a compact Jordan set $K$. For every bounded function $f$ on $g(K)$, the function $f$ is integrable on $g(K)$ if and only if $x\mapsto f(g(x))|\det Dg(x)|$ is integrable on $K$, and then their integrals are equal ([[thm-change-of-variables-for-compact-jordan-sets]]).

[L3] Bounded functions differing only on a content-zero subset of a Jordan set are integrable simultaneously and have equal integrals ([[lem-riemann-integral-unchanged-by-content-zero-modification]]).

[L4] The graph of a continuous real function on a compact nondegenerate rectangle has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

[L5] A metric-bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[L6] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[L7] For a Jordan set $E$, integrating $1_E$ over a bounding rectangle gives $\operatorname{cont}(E)$ ([[thm-jordan-content-and-indicator-integrability]]).

[L8] Proper multidimensional integrals are linear, monotone, and satisfy the absolute-value estimate ([[thm-multidimensional-integral-properties]]).

[L9] A rectangle has volume equal to the product of its side lengths ([[def-multidimensional-rectangle-and-volume]]).

[L10] The derivative of the exponential is the exponential ([[thm-derivative-of-exponential]]).

[L11] If $f:D\to[0,\infty)$ is locally Riemann integrable and $(K_j)$ is a compact Jordan exhaustion of $D$, then $\int_D f=\sup_j\int_{K_j}f$ ([[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[L12] The derivatives of sine and cosine are cosine and negative sine ([[thm-sine-and-cosine-derivatives]]).

[L13] For every real $\theta$, $\sin^2\theta+\cos^2\theta=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L14] If $G'=h$ and $h$ is integrable on $[a,b]$, then $\int_a^bh=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L15] One has $\exp(x)\to0$ as $x\to-\infty$ ([[thm-exponential-limits-and-range]]).

[L16] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[L17] The Jacobian determinant is the determinant of the derivative matrix, and change of variables uses its absolute value ([[def-jacobian-determinant-of-a-c-one-map]]).

[L18] A continuous product function on a product rectangle has integral equal to the product of the factor integrals ([[cor-riemann-integral-of-a-product-function]]).

[L19] The one-variable chain rule gives $(g\circ h)'=(g'\circ h)h'$ ([[thm-chain-rule]]).

[L20] The derivative of $r\mapsto r^2$ is $r\mapsto2r$ ([[lem-derivative-of-a-power]]).

[L21] The exponential maps $\mathbb R$ into $(0,\infty)$ and is normalized by $\exp(0)=1$ ([[thm-exponential-definition-equivalence]]).

[L22] Every continuous real function on a compact Jordan set is Riemann integrable there ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[L23] The pair $(\cos\theta,\sin\theta)$ is injectively parametrized by $0\le\theta<2\pi$, both coordinates have period $2\pi$, and every real number has an integer part ([[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 On each compact rectangle $[\varepsilon,R]\times[0,\pi]$ and $[\varepsilon,R]\times[-\pi,0]$, the polar map has Jacobian determinant $r(\cos^2\theta+\sin^2\theta)=r>0$ by [L12], [L13], and [L17]. Enlarge the radial interval inside $(0,\infty)$ and each angular interval by less than $\pi/2$. If two points in one enlarged rectangle have the same polar image, [L13] gives equal positive radii; reducing both angles modulo $2\pi$ by [L23] and using its injective half-open parametrization shows that their difference is an integer multiple of $2\pi$. The enlarged angular interval has length below $2\pi$, so the angles are equal. Thus the map is injective on an open neighbourhood of each compact rectangle, and their images are the closed upper and lower half-annuli. Each half-annulus is closed and bounded, hence compact by [L6]; its boundary is contained in two continuous semicircle graphs and two radial segments, so [L4] and [L5] make it Jordan measurable. [L4, L5, L6, L12, L13, L17, L23, algebra]

2.1 The Gaussian is continuous on each compact half-annulus and the pulled-back function $e^{-r^2}r$ is continuous on each parameter rectangle, so [L22] supplies both integrability conditions in [L1]. Apply [L1] to each half-annulus. By [L18], the parameter-rectangle integral is $\pi\int_\varepsilon^R e^{-r^2}r\,dr$. Facts [L10], [L19], and [L20] give $(-\tfrac12e^{-r^2})'=re^{-r^2}$, so [L14] evaluates each half as $\frac\pi2(e^{-\varepsilon^2}-e^{-R^2})$; the lower half has the same angular length. [step 1.1, L1, L10, L14, L18, L19, L20, L22]

3.1 The half-annuli overlap only in the two radial boundary segments, which have content zero by [L4]. On a common bounding rectangle, $1_{A_+}+1_{A_-}$ differs from $1_{A_+\cup A_-}$ only on that overlap, so [L3], [L7], and [L8] combine the two values from step 2.1 into the full-annulus integral $\pi(e^{-\varepsilon^2}-e^{-R^2})$. [step 1.1, step 2.1, L3, L4, L7, L8]

4.1 Every circle is the union of its upper and lower continuous semicircle graphs, hence has content zero by [L4]; [L5] makes every closed disc Jordan measurable, and [L6] makes it compact. [step 3.1, L4, L5, L6]

5.1 The omitted inner disc lies in $[-\varepsilon,\varepsilon]^2$, whose content is $4\varepsilon^2$ by [L7] and [L9]. Since $-(x^2+y^2)\le0$, strict increase in [L16] and the normalization/positivity in [L21] give $0<e^{-(x^2+y^2)}\le1$. Thus [L8] bounds its Gaussian integral by $4\varepsilon^2$. The annulus and inner disc overlap only on a content-zero circle, so [L3] recombines them. Letting $\varepsilon\downarrow0$ in step 3.1 gives the radius-$R$ disc integral $\pi(1-e^{-R^2})$. [step 3.1, step 4.1, L3, L7, L8, L9, L16, L21]

6.1 The closed discs of radii $j+1$ form a compact Jordan exhaustion of $\mathbb R^2$. The Gaussian is nonnegative by [L21], and it is locally Riemann integrable because [L10] and elementary algebra make it continuous and [L22] makes its restriction to every compact Jordan set integrable. Thus [L11], step 5.1, and [L15] show that the disc integrals tend to $\pi$, which is the improper plane integral. [step 4.1, step 5.1, L10, L11, L15, L21, L22] ∎
