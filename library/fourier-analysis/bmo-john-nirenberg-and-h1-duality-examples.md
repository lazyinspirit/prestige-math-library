---
page: bmo-john-nirenberg-and-h1-duality-examples
title: "BMO, John-Nirenberg, and H1 Duality — Examples"
status: draft
requires: [bmo-john-nirenberg-and-h1-duality]
items: []
examples:
  - ex-bmo-seminorm-is-unchanged-by-adding-a-constant
  - ex-logarithm-is-in-bmo-but-not-linfinity
  - cex-bmo-functions-need-not-be-globally-integrable
  - ex-john-nirenberg-tail-integration
  - ex-lacunary-exponential-sums-belong-to-bmo
---

These examples accompany the BMO and $H^1$-duality page. The tail-integration
example inherits Countable Choice from the John-Nirenberg theorem; the other
examples are choice-free.

The first example checks that the seminorm is unchanged by adding a constant,
so it descends to the quotient and is a norm there. The logarithm
$b(x)=\log|x|$ is then shown to lie in BMO with a seminorm depending only on
$n$: dilation reduces the mean oscillation to unit cubes, where the
logarithmic singularity is integrable and away from the origin the mean value
bound on $\log$ applies. Since $\log|x|\to-\infty$ at the origin, this single
function proves that the continuous inclusion $L^\infty/\mathbb C\subseteq
\mathrm{BMO}/\mathbb C$ is strict and that BMO functions need not be globally
integrable. A global pairing $\int fb$ requires a separate check that $fb$
is absolutely integrable; it can exist even without cancellation of $f$. The
arithmetic of the John-Nirenberg tail is also carried out explicitly: inserting
the exponential bound into the layer-cake formula recovers the $L^q$
oscillation bound with an explicit constant, which is the mechanism behind the
equivalence of the $L^q$ seminorms on the companion page. 

The lacunary exponential-sum example uses a low/high frequency split: the low part is made nearly constant on each interval, while rapid decay of the adapted bump transform controls the high part in local L2. It records Tao’s Exercise Q4 with the implied frequency-comparability constants explicit.
