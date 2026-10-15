---
dependency_level: 0
id: lem-nondegenerate-gaussian-small-ball-controls-log-radius
kind: lemma
title: A nonzero Gaussian direction forces logarithmic small-ball cost
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-standard-normal-and-normal-laws
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
axiom_use: AC is inherited from the standard-normal probability law.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, equation (1.2)
      url: https://arxiv.org/pdf/0806.3024
    - title: Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Definition 11.7 and Theorem 12.1
      url: https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf
---

## Statement

Let $W$ be a centered Gaussian random element in a real normed space $B$. Let $\ell\in B^*$ satisfy $\operatorname{Var}(\ell(W))=\tau^2>0$, and let $\mathbb H$ be a Hilbert subspace of $B$ with nonnegative squared norm. For $w_0\in B$, define
$$\phi_{w_0}(\epsilon)=\inf_{\substack{h\in\mathbb H\\\|h-w_0\|_B<\epsilon}}\left\{\|h\|_{\mathbb H}^2\right\}-\log\Pr(\|W\|_B<\epsilon),$$
with $\inf\varnothing=+\infty$. Then for every $\epsilon>0$,
$$\phi_{w_0}(\epsilon)\ge \log(1/\epsilon)-C_\ell,\qquad C_\ell=\log\!\left(\frac{2\|\ell\|_{B^*}}{\sqrt{2\pi}\tau}\right).$$

## Facts & Assumptions

**Given:** A centered Gaussian random element, a continuous linear functional with positive variance, and the displayed nonnegative RKHS approximation penalty.

[F1] [[def-standard-normal-and-normal-laws]]: a centered scalar Gaussian with variance $\tau^2>0$ has density bounded above by $(\sqrt{2\pi}\tau)^{-1}$.

[F2] [[thm-logarithm-derivative-and-integral]]: $\log y=\int_1^y dt/t$ for $y>0$.

## Proof




1.1 On the event $\{\|W\|_B<\epsilon\}$, continuity and linearity give $|\ell(W)|\le\|\ell\|_{B^*}\|W\|_B<\|\ell\|_{B^*}\epsilon$. The interval $(-\|\ell\|\epsilon,\|\ell\|\epsilon)$ has length $2\|\ell\|\epsilon$, so its scalar Gaussian probability is at most its length times the density bound in [F1]. Therefore $\Pr(\|W\|_B<\epsilon)\le\frac{2\|\ell\|_{B^*}}{\sqrt{2\pi}\tau}\epsilon.$ [F1, given, algebra]

2.1 The approximation penalty in the displayed definition is nonnegative. Taking negative logarithms of the bound in step 1.1 and adding this penalty yields $\phi_{w_0}(\epsilon)\ge\log(1/\epsilon)-\log(2\|\ell\|_{B^*}/(\sqrt{2\pi}\tau))$, which is the asserted constant. [F2, step 1.1, given, algebra] ∎

## Source notes

The source defines the Gaussian concentration function as an RKHS approximation cost plus centered small-ball exponent. The one-dimensional projection bound is proved here and does not use a source inequality.
