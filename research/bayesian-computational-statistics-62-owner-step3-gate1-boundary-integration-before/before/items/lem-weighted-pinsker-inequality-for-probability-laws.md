---
id: lem-weighted-pinsker-inequality-for-probability-laws
kind: lemma
title: A weighted total-variation bound from relative entropy
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - cor-cauchy-schwarz-inequality-for-l-two
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - cor-mean-value-theorem
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-natural-logarithm
  - def-probability-measure
  - def-radon-nikodym-derivative
  - def-v-weighted-total-variation-distance
  - thm-algebra-of-derivatives
  - thm-integral-logarithm-derivative-and-normalisation
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
axiom_use: "AC is inherited only through the Radon–Nikodym derivative used by the directional relative entropy; the scalar inequality and weighted Cauchy–Schwarz step are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Lemma 24 and proof §4.6"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "Lemma 24, PDF p. 21, and its proof in §4.6; this local proof replaces a monotonicity sentence in the source with a direct second-derivative argument."
---

## Statement

Assume AC. Let $\mu,\nu$ be Borel probability measures on $\mathbb R^d$,
and let $W:\mathbb R^d\to[1,\infty)$ be Borel measurable with
$\int W^2\,d\mu+\int W^2\,d\nu<\infty$. Then
$$\|\mu-\nu\|_W\le\sqrt{2\left(\int W^2\,d\mu+\int W^2\,d\nu\right)D(\mu\|\nu)},$$
where $\mu,\nu$ are probability measures in the sense of [[def-probability-measure]],
$\|\cdot\|_W$ is defined in
[[def-v-weighted-total-variation-distance]] and $D(\mu\|\nu)$ is the
directional relative entropy of [[def-kullback-leibler-divergence]]. If
$D(\mu\|\nu)=+\infty$, the inequality is understood in the extended-real
sense and is immediate.

## Facts & Assumptions

**Given:** AC; probability measures $\mu,\nu$; a Borel weight $W\ge1$ with finite second moments under both measures.

[A1] AC supplies the Radon–Nikodym representative used in the definition of directional relative entropy. [[def-axiom-of-choice]] [[def-radon-nikodym-derivative]]

[F1] If $D(\mu\|\nu)<\infty$, then $\mu\ll\nu$, the density $r=d\mu/d\nu$ is nonnegative, and $D(\mu\|\nu)=\int(r\log r)\,d\nu$ with $0\log0=0$. [[def-kullback-leibler-divergence]] [[thm-integration-against-a-radon-nikodym-derivative]]

[F2] The directional relative entropy has finite negative part and $\int r\,d\nu=1$. [[def-kullback-leibler-divergence]] [[thm-integration-against-a-radon-nikodym-derivative]]

[F3] Cauchy–Schwarz gives $\int|fg|\,d\nu\le(\int|f|^2d\nu)^{1/2}(\int|g|^2d\nu)^{1/2}$ for square-integrable $f,g$. [[cor-cauchy-schwarz-inequality-for-l-two]]

[F4] For $z>0$, $\log z=\int_1^zv^{-1}dv$; hence $-\log u=\int_u^1v^{-1}dv$ for $0<u\le1$. The integral logarithm is the natural logarithm of [[def-natural-logarithm]]. [[thm-integral-logarithm-derivative-and-normalisation]] [[cor-integral-logarithm-agrees-with-natural-logarithm]] [[def-natural-logarithm]]

[F5] Differentiation obeys the product and chain rules on $(0,\infty)$. The mean value theorem applies to the resulting continuously differentiable scalar functions. [[thm-algebra-of-derivatives]] [[thm-integral-logarithm-derivative-and-normalisation]] [[cor-mean-value-theorem]]

[F6] Integrals of integrable real functions are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Define $\phi(0)=1$ and $\phi(t)=t\log t-t+1$ for $t>0$. For $0<t\le1$, the function $h(t)=t-1-\log t$ satisfies $h(1)=0$ and $h'(t)=1-1/t\le0$. The mean value theorem on $[t,1]$ gives $h(t)\ge0$, so $\log t\le t-1$. Now $k(t)=\phi(t)-(1-t)^2/2$ satisfies $k(1)=0$ and $k'(t)=\log t+1-t\le0$ by [F4]–[F5]; another application of the mean value theorem gives $k(t)\ge0$. At $t=0$ the inequality holds because $1\ge1/2$. [F4, F5, algebra]

2.1 For $t\ge1$, put $g(t)=2(1+t)\phi(t)-(t-1)^2$. By [F5], $g(1)=g'(1)=0$ and $g''(t)=4\log t+2/t\ge0$ using [F4] and $\log t\ge0$ for $t\ge1$. The mean value theorem applied first to $g'$ and then to $g$ shows $g'(t)\ge0$ and $g(t)\ge0$ for $t\ge1$. Combining with step 1.1 gives $$|1-t|^2\le2(1+t)\phi(t)\qquad(t\ge0).$$ [F4, F5, step 1.1, algebra]

3.1 It remains to consider finite $D(\mu\|\nu)$. Let $r=d\mu/d\nu$ as in [F1]. For every Borel $f$ with $|f|\le W$, the Radon–Nikodym identity gives $$\left|\int f\,d\mu-\int f\,d\nu\right|\le\int W|r-1|\,d\nu.$$ Applying step 2.1 pointwise and [F3] with factors $W\sqrt{1+r}$ and $\sqrt{2\phi(r)}$ bounds this by $$\sqrt{\int W^2(1+r)\,d\nu}\sqrt{2\int\phi(r)\,d\nu} =\sqrt{\left(\int W^2d\nu+\int W^2d\mu\right)2D(\mu\|\nu)}.$$ The moment hypotheses make the first factor finite, and [F1], [F2], and [F6] identify the second integral with the directional relative entropy, using $\int r\,d\nu=\int1\,d\nu=1$. Taking the supremum over $f$ proves the claim. [A1, F1, F2, F3, F6, step 2.1, given] ∎
