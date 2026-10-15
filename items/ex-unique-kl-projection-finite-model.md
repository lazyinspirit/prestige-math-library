---
id: ex-unique-kl-projection-finite-model
kind: example
title: "A finite misspecified model with a unique KL projection"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-likelihood-tilted-measure-is-sigma-finite
  - thm-kolmogorov-iid-l1-strong-law
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §4.1"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Example

On $\mathsf X=\{0,1\}$ with counting measure, let the true density be
$p_0(0)=3/5$, $p_0(1)=2/5$, and let the model densities be
$p_a(0)=p_a(1)=1/2$ and $p_b(0)=1/5$, $p_b(1)=4/5$. Give $a$ and $b$
prior probability $1/2$ each and use the metric $\rho(u,v)=0$ for $u=v$
and $1$ otherwise.
Take $X_1,X_2,\ldots$ IID with law $P_0$.

## Facts & Assumptions

**Given:** The finite model, prior, and IID sampling law in the Example.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: the KL
projection set consists of the minimizers of the directional contrast
$K(\theta)=\mathrm{KL}(P_0\Vert P_\theta)$.

[A1] Assume AC through the imported KL convention
[[def-axiom-of-choice]]. No additional choice is used in this finite model.

[F2] [[def-likelihood-tilted-measure-at-kl-projection]]: for a selected
minimizer $a$, the likelihood-tilt mass at $b$ is
$\mathbb E_{P_0}[p_b(X)/p_a(X)]$ and need not equal one.

[F4] [[lem-likelihood-tilted-measure-is-sigma-finite]]: the likelihood tilt
is a measure; its total mass is the integral of its density.

[F3] [[thm-kolmogorov-iid-l1-strong-law]]: integrable IID real variables
have sample means converging almost surely to their expectation.

## Verification



1.1 The relative KL contrast is $K(b)-K(a) =\mathbb E_{P_0}\log\frac{p_a(X)}{p_b(X)} =\frac25\log\frac58+\frac35\log\frac52 =\frac15\log\frac{3125}{512}>0.$ Thus $a$ is the unique KL minimizer. [A1, F1, algebra]

1.2 The posterior odds are $\frac{\Pi(b\mid X_{1:n})}{\Pi(a\mid X_{1:n})} =\prod_{i=1}^n\frac{p_b(X_i)}{p_a(X_i)}.$ The log factors are bounded and IID, with expectation $-(K(b)-K(a))<0$. By [F3], their sample mean converges almost surely to that negative number, so the odds tend to zero and $\Pi(b\mid X_{1:n})\to0$. [F1, F3, algebra]

2.1 The tilted measure has total mass $Q_b(\mathsf X)=\mathbb E_{P_0}\frac{p_b(X)}{p_a(X)} =\frac25\cdot\frac85+\frac35\cdot\frac25 =\frac{22}{25}<1.$ This example has a unique KL projection and a finite likelihood tilt that is not a probability law. [F2, F4, algebra] ∎
