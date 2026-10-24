---
id: lem-log-gaussian-density-supnorm-controls-local-likelihood-distances
kind: lemma
title: "Supremum distance controls local log-Gaussian density distances"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-hellinger-distance-between-density-laws
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - cor-taylor-remainder-bound
  - cor-mean-value-theorem
proof_strategy: direct
axiom_use: "AC is needed only for the directional KL convention imported from def-kullback-leibler-divergence."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, Lemma 3.1"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Lemma 12.2"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

Let $(\mathsf X,\mathcal A,\nu)$ be a measure space, and let $w,w_0:\mathsf X\to\mathbb R$ be measurable with finite positive normalizers $Z_w=\int e^w\,d\nu$ and $Z_0=\int e^{w_0}\,d\nu$. Set $p_w=e^w/Z_w$, $p_0=e^{w_0}/Z_0$, and $r=\|w-w_0\|_\infty\le1$. With root-L2 Hellinger distance as in [[def-hellinger-distance-between-density-laws]], and the directional convention of [[def-kullback-leibler-divergence]],
$$h(P_w,P_0)\le e^r r,\qquad \mathrm{KL}(P_0\Vert P_w)\le \tfrac12 e^{2r}r^2,\qquad \int\left(\log\frac{p_w}{p_0}\right)^2p_0\,d\nu\le4r^2.$$

## Facts & Assumptions

**Given:** The stated measurable functions, finite positive normalizers and supremum-distance bound.

[A1] Assume AC for the imported directional KL convention [[def-axiom-of-choice]].

[F1] [[def-hellinger-distance-between-density-laws]]: $h^2(P_w,P_0)=\int(\sqrt{p_w}-\sqrt{p_0})^2\,d\nu$.

[F2] [[cor-taylor-remainder-bound]]: if a scalar function has derivatives through order two on the closed interval between the two inputs, with the usual endpoint continuity, its first-order Taylor remainder is bounded by half a bound on the absolute second derivative times the squared increment.

[F3] [[cor-mean-value-theorem]]: for a scalar function continuous on the closed interval between distinct inputs and differentiable on its interior, the increment equals its derivative at an intermediate point times the input increment. By [[thm-derivative-of-exponential]], the exponential is $C^\infty$ with derivative equal to itself, so it satisfies these hypotheses on every compact interval.

[F4] [[thm-logarithm-derivative-and-integral]]: $\log x=\int_1^x dt/t$ for $x>0$; hence $\log(1+x)\le x$ for $x\ge0$.

## Proof

1.1 Put $g=w-w_0$, $c=\log\int e^g p_0\,d\nu$. Since $e^{-r}\le e^g\le e^r$, we have $|c|\le r$ and $\log(p_w/p_0)=g-c$, so $|\log(p_w/p_0)|\le2r$. Squaring and integrating against the probability density $p_0$ proves the log-square bound. [given, algebra]

1.2 The directional divergence is $\mathrm{KL}(P_0\Vert P_w)=c-\int g p_0\,d\nu=\log\int e^{g-\int g p_0d\nu}p_0\,d\nu$. Let $U=g-\int g p_0d\nu$. Then $E_0U=0$, $|U|\le2r$, and $E_0U^2\le E_0g^2\le r^2$. Taylor's remainder [F2], applied to $e^u$ at zero, gives $e^U\le1+U+\tfrac12e^{2r}U^2$; hence $E_0e^U\le1+\tfrac12e^{2r}r^2$. The integral formula in [F4] gives $\log(1+x)\le x$ for $x\ge0$, so the KL bound follows. [A1, F2, F3, F4, given, algebra]

2.1 Write $R=p_w/p_0=e^{g-c}$. Then $|\sqrt R-1|=|e^{(g-c)/2}-1|\le e^r|g-c|/2\le e^r r$, by [F3]. Therefore $h^2(P_w,P_0)=E_0(\sqrt R-1)^2\le e^{2r}r^2$, which yields the Hellinger bound. [F1, F3, step 1.1, given, algebra] ∎
## Source notes

The cited treatments compare Hellinger, directional KL and log-likelihood variance to the supremum norm. The displayed constants here are derived directly under the finite-normalizer hypotheses.
