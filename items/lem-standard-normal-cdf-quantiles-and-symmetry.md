---
id: lem-standard-normal-cdf-quantiles-and-symmetry
kind: lemma
title: "The standard normal CDF has unique symmetric quantiles"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-probability-measure
  - lem-probability-measure-basic-identities
  - def-cumulative-distribution-function-of-a-random-variable
  - lem-normal-density-has-total-mass-one
  - thm-derivative-of-exponential
  - cor-integral-over-a-null-set-vanishes
  - thm-continuity-from-above-for-measures
  - thm-continuity-from-below-for-measures
  - thm-intermediate-value
  - thm-substitution-for-improper-integrals
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-axiom-of-choice
  - def-countable-choice
  - lem-axiom-of-choice-implies-countable-choice
proof_strategy: direct
axiom_use: "AC supplies the normal probability law and countable choice; countable choice is used only to apply the zero-width-box measure result for singleton sets."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A Century of Excellence in Measurements, Standards, and Technology: A Chronicle of Selected NBS/NIST Publications 1901–2000, NIST SP 958, pp. 177–179 (printed pp. 164–166)"
      url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication958.pdf"
    - title: "H. Cantwell (ed.), Eurachem Guide: The Fitness for Purpose of Analytical Methods, 3rd ed. (2025), Annex B"
      url: "https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf"
---

## Statement

Assume the Axiom of Choice. Let $Z$ have the standard normal law and let
$\Phi(x)=P(Z\le x)$ be its cumulative distribution function. Then $\Phi$ is
continuous and strictly increasing, with limits $0$ and $1$ at $-\infty$ and
$+\infty$, and $P(Z=x)=0$ for every $x\in\mathbb R$. For each $q\in(0,1)$
there is a unique real $z_q$ with
$\Phi(z_q)=q$, and
$$z_{1-q}=-z_q.$$

## Facts & Assumptions

**Given:** AC; the standard normal law $N(0,1)$; its CDF $\Phi$; and a
probability $q\in(0,1)$ when a quantile is considered.

[A1] The Axiom of Choice is assumed in the construction of the standard normal probability law. [[def-axiom-of-choice]] [[def-standard-normal-and-normal-laws]]

[A2] AC implies countable choice, which is the hypothesis needed for the zero-width-box measure result used to show singleton sets have zero normal probability. [[lem-axiom-of-choice-implies-countable-choice]] [[def-countable-choice]]

[F1] The standard normal law is a probability measure with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$; a probability measure is finitely additive on disjoint events. [[def-standard-normal-and-normal-laws]] [[def-probability-measure]]

[F2] The density $\phi$ is positive and Borel measurable, with integral one. [[lem-normal-density-has-total-mass-one]]

[F3] The CDF of a real random variable is $\Phi(x)=P(Z\le x)$. [[def-cumulative-distribution-function-of-a-random-variable]]

[F4] For increasing measurable sets, measure of the union is the limit of their measures. [[thm-continuity-from-below-for-measures]]

[F5] For decreasing measurable sets whose first member has finite measure, measure of the intersection is the limit of their measures. [[thm-continuity-from-above-for-measures]]

[F6] A continuous function on a closed interval takes every value between its endpoint values. [[thm-intermediate-value]]

[F7] A monotone differentiable substitution with the stated local integrability hypotheses preserves a convergent improper integral, with orientation handled by the sign. [[thm-substitution-for-improper-integrals]]

[F8] A zero-width one-dimensional box has Lebesgue measure zero, under countable choice. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F9] The integral of a nonnegative measurable function over a measurable null set is zero. [[cor-integral-over-a-null-set-vanishes]]

[F10] The real exponential is smooth, so the displayed density $\phi$ is continuous. [[thm-derivative-of-exponential]]

[F11] If $A\subseteq B$, then $P(B\setminus A)=P(B)-P(A)$; in particular $P(A^c)=1-P(A)$ for a probability measure. [[lem-probability-measure-basic-identities]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $a<b$, the density formula in [F1] and set-difference identity [F11] give $\Phi(b)-\Phi(a)=\int_{(a,b]}\phi(x)\,dx$. The density is continuous by [F10] and positive by [F2]; continuity at $(a+b)/2$ gives a subinterval of positive length on which $\phi$ has a positive lower bound, so this integral is positive. Also $0<\phi(x)\le1/\sqrt{2\pi}$, hence $0<\Phi(b)-\Phi(a)\le(b-a)/\sqrt{2\pi}$. Therefore $\Phi$ is strictly increasing and continuous. [A1, F1, F2, F3, F10, F11, algebra]

1.2 The density in [F1] is even. For any $x\in\mathbb R$, substitution $u=-t$ in [F7] gives $\Phi(-x)=\int_x^\infty\phi(u)\,du$. By [A2] and [F8], the singleton $\{x\}$ is Lebesgue null; [F9] then gives $P(Z=x)=\int_{\{x\}}\phi\,d\lambda=0$. Since [F2] gives total mass one, [F11] identifies the last tail integral as $1-\Phi(x)$. Hence $\Phi(-x)=1-\Phi(x)$. [A1, A2, F1, F2, F3, F7, F8, F9, F11, algebra]

2.1 The sets $(-\infty,n]$ increase to $\mathbb R$ and the sets $(-\infty,-n]$ decrease to the empty set. The normal law has total mass one by [F2], so [F4] and [F5] give $\Phi(n)\to1$ and $\Phi(-n)\to0$. Given $q\in(0,1)$, choose $n$ with $\Phi(-n)<q<\Phi(n)$. Applying [F6] on $[-n,n]$ gives $z_q$ with $\Phi(z_q)=q$; strict increase from step 1.1 makes this $z_q$ unique. [F2, F3, F4, F5, F6, step 1.1, choose]

3.1 Set $x=z_q$ in step 1.2. Then $\Phi(-z_q)=1-q$. By the uniqueness in step 2.1, $-z_q=z_{1-q}$. In particular, $q=1/2$ gives $z_{1/2}=-z_{1/2}$, hence $z_{1/2}=0$. [step 2.1, step 1.2, algebra] ∎

## Source notes

The quantile existence, uniqueness, and symmetry are proved locally from the
published standard normal density and measure definitions; the source
references document the normal-law convention and its use in detection-limit
calibration.
