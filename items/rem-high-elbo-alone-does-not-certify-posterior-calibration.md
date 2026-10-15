---
id: rem-high-elbo-alone-does-not-certify-posterior-calibration
kind: remark
title: "A high ELBO alone does not certify posterior calibration"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-variational-family-and-elbo
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-elbo-kl-decomposition
  - thm-natural-logarithm-laws
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "The scale calculation is choice-free; the cited reverse-KL identity uses AC as recorded in its theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.2 and §§5.1–5.4, PDF pp. 3–4 and 10–13"
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§7.1.4, printed pp. 228–229, PDF pp. 45–46"
---

## Remark

The numerical value of an ELBO depends on the scale of the unnormalized target. It alone is not a bound on posterior discrepancy, calibration, or downstream error. Here a calibration guarantee means a separately proved property of repeated-sampling coverage or posterior-probability calibration; it is not defined by the ELBO. Under AC, the library KL identity controls the gap $\log Z-\operatorname{ELBO}(q)$ through the reverse divergence, when that gap is known.

## Facts & Assumptions

**Given:** A measurable $\gamma\ge0$ with $Z\in(0,\infty)$ and an admissible $q$ for which $Q=q\mu$ differs from $\Pi=(\gamma/Z)\mu$. The rescaling argument is choice-free; assume AC only for the library KL interpretation in the final step.

[F1] [[def-variational-family-and-elbo]]: admissibility requires support on $\{\pi>0\}$ and finite $\int q(|\log\gamma|+|\log q|)d\mu$.

[F2] [[def-variational-family-and-elbo]]: $\operatorname{ELBO}(q)=\int q(\log\gamma-\log q)d\mu$ for an admissible $q$.

[F3] [[thm-elbo-kl-decomposition]]: under its hypotheses and AC, $\log Z=\operatorname{ELBO}(q)+D(Q\|\Pi)$.

[F4] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: multiplying a nonnegative measurable function by a positive finite scalar multiplies its integral by the same scalar.

[F5] [[thm-natural-logarithm-laws]]: $\log:(0,\infty)\to\mathbb R$ is onto and satisfies $\log(ab)=\log a+\log b$ for positive $a,b$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the library KL interpretation only.

## Verification

**Given:** The hypotheses in the Statement.

1.1 Fix any $c\in\mathbb R$. By the onto clause of [F5], choose $a>0$ with $\log a=c$. Define $\gamma_c=a\gamma$. Homogeneity [F4] gives $Z_c=\int\gamma_c d\mu=aZ$, so $\pi_c=\gamma_c/Z_c=\pi$ and both $Q$ and $\Pi$ remain unchanged. Since $\pi_c=\pi$, the support condition in [F1] is unchanged. On the q-support, $|\log\gamma_c|\le|\log\gamma|+|c|$, so the logarithmic integrability condition remains finite. [F1, F4, F5, choose, construct, algebra]

2.1 On the q-support the logarithm product law [F5] gives $\log\gamma_c=\log\gamma+c$. Using [F2], $\operatorname{ELBO}_c(q)=\int q(\log\gamma+c-\log q)d\mu=\operatorname{ELBO}(q)+c$. Since $c$ is arbitrary, the absolute ELBO can be made arbitrarily large while $Q$, $\Pi$, and any fixed discrepancy between them stay unchanged. [F2, F5, step 1.1, algebra]

3.1 Under [A1], the decomposition [F3] gives $\log Z-\operatorname{ELBO}(q)=D(Q\|\Pi)$. Without control of $\log Z$, a separate calibration theorem, or another posterior-discrepancy bound, the absolute ELBO alone supplies no calibration guarantee. [A1, F3, step 2.1] ∎

