---
id: lem-gaussian-even-moment-bound-for-brownian-increments
kind: lemma
title: "Gaussian even moments for Brownian increments"
status: published
origin: pipeline
deps: [def-standard-normal-and-normal-laws, thm-change-of-variables-for-expectation, thm-integration-against-a-density, thm-monotone-convergence-for-the-integral, thm-integration-by-parts, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-exponential-definition-equivalence, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. If $0\le s,t$ and a real random variable
$X_t-X_s$ has law $N(0,|t-s|)$, then, for every integer $m\ge1$,
$$E|X_t-X_s|^{2m}=c_m|t-s|^m,$$
where
$$c_m=E|Z|^{2m}=(2m-1)!!=1\cdot3\cdots(2m-1)<\infty$$
for $Z\sim N(0,1)$. In particular, when $m\ge2$, this is the moment hypothesis
of the one-parameter Kolmogorov criterion with
$\alpha=2m$, $\beta=m-1$, and $C_T=c_m$.

## Facts & Assumptions

**Given:** Times $s,t\ge0$, the stated increment law, and an integer $m\ge1$.

[F1] Under AC, $N(0,1)$ is the probability measure with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$, and $N(0,h)$ is its image under $x\mapsto\sqrt h\,x$, including $h=0$. [[def-standard-normal-and-normal-laws]] [[def-axiom-of-choice]]

[F2] A nonnegative expectation is the integral of the corresponding function against the random variable's law. [[thm-change-of-variables-for-expectation]]

[F3] Integration against the measure with density $\phi$ equals integration of the product with $\phi$ against Lebesgue measure. [[thm-integration-against-a-density]]

[F4] Increasing nonnegative measurable functions may be passed to the limit under the integral. [[thm-monotone-convergence-for-the-integral]]

[F5] Compact-interval integration by parts includes its two endpoint terms. Under countable choice, a bounded Riemann-integrable function on a compact interval is Lebesgue integrable there with the same integral. [[thm-integration-by-parts]] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F6] The power, product, and chain rules, together with $(e^x)'=e^x$, give $\phi'(x)=-x\phi(x)$. [[lem-derivative-of-a-power]] [[thm-algebra-of-derivatives]] [[thm-chain-rule]] [[thm-derivative-of-exponential]]

[F7] The exponential is its nonnegative power series, so for $R>0$ and every integer $k\ge0$, $e^{R^2/2}\ge(R^2/2)^k/k!$. [[thm-exponential-definition-equivalence]]

## Proof

**Proof technique:** direct.

1.1 Let $Z$ be the coordinate map on the canonical $N(0,1)$ probability space. By [F1]--[F3], for each integer $r\ge0$, $$E|Z|^{2r}=\int_{\mathbb R}x^{2r}\phi(x)\,dx,$$ with either side initially allowed to be infinite. [F1, F2, F3]

1.2 For an integer $R\ge1$ and $r\ge1$, [F5] on $[-R,R]$, applied to $u(x)=x^{2r-1}$ and $v(x)=\phi(x)$, is legitimate by [F6] and gives $$\int_{-R}^{R}x^{2r}\phi(x)\,dx=-2R^{2r-1}\phi(R)+(2r-1)\int_{-R}^{R}x^{2r-2}\phi(x)\,dx.$$ The sign and factor two come from the odd power at the two endpoints and the evenness of $\phi$. [F5, F6, algebra]

2.1 Taking $k=r+1$ in [F7] shows $$0\le R^{2r-1}\phi(R)\le\frac{2^{r+1}(r+1)!}{\sqrt{2\pi}\,R^3}\longrightarrow0.$$ The compact bridge in [F5] identifies every Riemann integral in step 1.2 with the corresponding Lebesgue integral. The truncated nonnegative integrands then increase to their whole-line counterparts, so [F4], step 1.1, and $\int\phi=1$ from [F1] yield recursively $$c_0=1,\qquad c_r=(2r-1)c_{r-1}.$$ Thus $c_m=(2m-1)!!$ and every $c_m$ is finite. [step 1.1, step 1.2, F1, F4, F5, F7, algebra]

3.1 Put $h=|t-s|$. By [F1], the law $N(0,h)$ is that of $\sqrt h Z$; applying [F2] to the nonnegative function $x\mapsto|x|^{2m}$ and using step 2.1 gives $$E|X_t-X_s|^{2m}=E|\sqrt h Z|^{2m}=h^mc_m.$$ This includes $h=0$, when both sides vanish and the law is the Dirac mass at zero. [given, step 2.1, F1, F2, algebra]

4.1 If $m\ge2$, set $\alpha=2m$ and $\beta=m-1>0$. Then $m=1+\beta$, so step 3.1 reads $$E|X_t-X_s|^\alpha=c_m|t-s|^{1+\beta}.$$ The constant $C_T=c_m$ is finite and independent of $T$. AC is used through [F1], which supplies the normal-law probability measure, and through the countable-choice hypothesis of the compact bridge used in step 2.1; all truncations and the recurrence are canonical. [step 2.1, step 3.1, F1, algebra] ∎

## Source notes

Durrett, Section 7.1, printed p. 358, uses the finite even moments of a normal increment in the Brownian continuity argument. Steps 1.1--2.1 supply the full compact-truncation integration-by-parts calculation, including the boundary term and its limit.
