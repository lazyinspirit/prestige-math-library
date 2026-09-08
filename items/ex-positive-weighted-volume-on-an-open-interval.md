---
id: ex-positive-weighted-volume-on-an-open-interval
title: "Weighted interval volume"
kind: example
status: published
origin: pipeline
deps: ["thm-density-measure-integration-agrees-with-smooth-density-integration", "thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "thm-logarithm-derivative-and-integral", "thm-monotone-convergence-for-the-integral", "lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals", "thm-density-measure-is-independent-of-the-chart-gluing", "cor-integral-over-a-null-set-vanishes", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "thm-natural-logarithm-laws"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Example

On $M=(0,1)$ take $r=x^{-1}|dx|$. For $0<a<b<1$,
$$\mu_r((a,b))=\log(b/a).$$
This density has finite mass on compact subsets of $M$ but infinite total mass.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Weighted interval; logarithmic finite pieces and explicit divergent exhaustion.

[F1] [[thm-density-measure-is-independent-of-the-chart-gluing]]: Measure in the identity chart is the coefficient integral.

[F2] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: A positive finite smooth density has compact-finite measure.

[F3] [[thm-logarithm-derivative-and-integral]]: $\log x=\int_1^x dt/t$ for $x>0$.

[F4] [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]: Bounded Borel Riemann integrands on boxes have equal Lebesgue integrals.

[F5] [[thm-monotone-convergence-for-the-integral]]: Increasing nonnegative integrands satisfy monotone convergence.

[F6] [[cor-integral-over-a-null-set-vanishes]]: A nonnegative measurable integrand integrates to zero over a measurable null set.

[F7] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]: A singleton is Lebesgue-null in dimension one.

[F8] [[thm-natural-logarithm-laws]]: For positive $a,b$, $\log(b/a)=\log b-\log a$; log is increasing and onto the reals.

## Verification

1.1 The function $x\mapsto1/x$ is positive, finite and smooth on $(0,1)$. On $[a,b]\subset(0,1)$ it is continuous and bounded; the logarithmic integral identity gives its Riemann integral $\log b-\log a=\log(b/a)$. The Borel Darboux bridge equates the Lebesgue integral to this value. Removing the two null endpoints does not change it, so the chart formula gives $\mu_r((a,b))=\log(b/a)$. For example $(a,b)=(1/4,3/4)$ gives $\log3$. [F1, F3, F4, F6, F7, F8]

2.1 Every compact subset of $(0,1)$ has finite measure by the positive smooth density theorem. More explicitly, it lies in $[a,b]\subset(0,1)$ and is bounded in measure by $\log(b/a)$. The increasing sets $K_N=[1/N,1-1/N]$, $N\ge3$, exhaust $(0,1)$ and have mass $\log(N-1)$. Monotone convergence applied to their indicators gives $\mu_r((0,1))=\lim_N\log(N-1)=\infty$. This divergence also follows without any limit identity for log: each interval $[2^j,2^{j+1}]$ contributes at least $1/2$ to $\int_1^{2^m}dt/t$, so these logarithms are unbounded. [F2, F3, F5, step 1.1, F8]

3.1 Empty intervals and singletons have zero mass by the null-set formula. There is no endpoint value of the density at zero or one because neither belongs to the manifold; its blowup at the omitted zero endpoint is consistent with local finiteness. [F1, F6, F7, step 2.1] ∎
