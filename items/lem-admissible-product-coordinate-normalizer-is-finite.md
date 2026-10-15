---
dependency_level: 1
id: lem-admissible-product-coordinate-normalizer-is-finite
kind: lemma
title: "An admissible product has a finite coordinate normalizer"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-variational-family-and-elbo
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-integration-against-a-density
  - thm-jensens-integral-inequality
  - thm-exponential-two-point-convexity
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-natural-logarithm-laws
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "Coordinate-update context; the finite-normalizer conclusion is proved locally from the cited library interfaces, not imported from this review."
---

## Statement

Use the admissible mean-field product $q=\prod_{k=1}^m q_k$ on the finite product of sigma-finite reference spaces in [[def-variational-family-and-elbo]]. Fix a coordinate $j$ and put $v=q_{-j}$, with the singleton unit-measure convention when $m=1$. Suppose
$$h_j(x)=\int v(y)\log\gamma(x,y)\,d\mu_{-j}(y)$$
has a measurable extended-real version defined without an $\infty-\infty$ ambiguity, finite for $q_j\mu_j$-almost every $x$. Products with a zero density are zero. Then $H:=\int v\log v\,d\mu_{-j}$ is a finite real number and
$$0<c_j:=\int e^{h_j(x)}\,d\mu_j(x)\le e^H Z<\infty.$$
This establishes normalization only; the resulting product must still satisfy the separate support and absolute-log-integrability conditions before it is an admissible coordinate replacement. No convergence or global-optimum conclusion is asserted.

## Facts & Assumptions

**Given:** The admissible product, finite positive evidence, coordinate and measurable expected-log version in the Statement.

[F1] [[def-variational-family-and-elbo]]: the product factors are probability densities and admissibility includes $\int q|\log q|d\mu<\infty$ and $0<Z=\int\gamma d\mu<\infty$.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable product integrals equal their iterated integrals.

[F3] [[thm-integration-against-a-density]]: integrating a nonnegative function against a density measure equals integrating its product with that density.

[F4] [[thm-jensens-integral-inequality]]: for an integrable real function on a probability space and a convex function whose composition is integrable, its value at the mean is at most the mean of its values.

[F5] [[thm-exponential-two-point-convexity]]: the exponential function is convex on the real line.

[F6] [[thm-monotone-convergence-for-the-integral]]: integrals of increasing nonnegative functions converge to the integral of their limit.

[F7] [[thm-dominated-convergence]]: a pointwise convergent sequence dominated in absolute value by an integrable function has convergent integrals.

[F8] [[thm-natural-logarithm-laws]]: logarithms of positive finite products add, and the logarithm and exponential are inverse functions.

[F9] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function has integral zero exactly when it is zero almost everywhere.

## Proof

**Given:** The admissible product and expected-log hypotheses in the Statement.

1.1 Put $\alpha=q_j\mu_j$ and $\nu=v\mu_{-j}$. They are probabilities and the law with density $q$ is their product by [F1]–[F3]. A density is positive and finite almost surely under its own probability, since its zero set has mass zero and its infinite set has reference measure zero. Thus $A(x)=\log q_j(x)$ and $B(y)=\log v(y)$ are finite almost surely, and [F8] gives $\log q=A+B$ almost surely. Choose a finite integer $K$ for which $p:=\nu(|B|\le K)>0$; such a $K$ exists because those events increase to a full-measure set. On that event $|A|\le|A+B|+K$, so product integration [F2]–[F3] yields $p\int|A|d\alpha\le\int|A+B|d(\alpha\otimes\nu)+Kp<\infty$. Interchanging $A$ and $B$ and choosing an analogous positive-probability bounded event proves $\int|B|d\nu<\infty$. Hence $H=\int B d\nu$ is finite, including $H=0$ for the unit complementary factor. [F1, F2, F3, F8, choose, construct, algebra]

2.1 By [F2] and $Z<\infty$, the marginal $G(x):=\int\gamma(x,y)d\mu_{-j}(y)$ is finite for $\mu_j$-almost every $x$. Fix such an $x$. Under $\nu$, define $g(y)=\gamma(x,y)/v(y)$ on $\{0<v<\infty\}$; arbitrary values on its $\nu$-null complement do not matter. Then $\int g d\nu=\int_{\{0<v<\infty\}}\gamma(x,y)d\mu_{-j}(y)\le G(x)$ by [F3]. In particular $g$ is finite almost surely. Write $L=\log g$, allowing $L=-\infty$ at $g=0$. Its positive part is integrable since $\log^+g\le g$, and the defined expected-log convention and integrability of $B$ give $\int Ld\nu=h_j(x)-H$ in the extended sense; in particular $h_j(x)$ cannot equal $+\infty$. [F2, F3, F8, step 1.1, given, construct, algebra]

3.1 Let $L_n=\max(L,-n)$. Its negative part is bounded and its positive part is integrable by step 2.1, so $L_n$ is integrable. Also $e^{L_n}=\max(g,e^{-n})\le g+1$ is integrable. Apply [F4] with the convex exponential [F5] to obtain $\exp(\int L_n d\nu)\le\int e^{L_n}d\nu$. The negative parts increase to $L^-$, so [F6] gives $\int L_n d\nu\downarrow\int Ld\nu$, possibly $-\infty$. By [F7], the right side tends to $\int g d\nu$, with domination $g+1$; continuity of the exponential and $e^{-\infty}=0$ therefore give $\exp(h_j(x)-H)\le\int g d\nu\le G(x)$. [F4, F5, F6, F7, step 2.1, construct, algebra]

4.1 The inequality in step 3.1 holds for $\mu_j$-almost every $x$. Multiply it by $e^H$ and integrate using [F2] to obtain $c_j\le e^H\int Gd\mu_j=e^HZ<\infty$. Since $h_j$ is finite $\alpha$-almost surely, $e^{h_j}>0$ on an $\alpha$-full measurable set. If $c_j=0$, [F9] would make this set $\mu_j$-null, hence $\alpha$-null by [F3], contradicting $\alpha(\Omega_j)=1$. Thus $c_j>0$. This does not prove admissibility of the normalized replacement, which remains a separate requirement. [F1, F2, F3, F9, step 3.1, given, algebra] ∎

## Source notes

The proof is a local consequence of the displayed admissibility assumptions and proved library Jensen and product-integration interfaces. No new full-text reading or general coordinate-convergence theorem is claimed. It explains why the earlier example's promise of a divergent normalizer despite admissibility was impossible.
