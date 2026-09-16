---
id: cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable
kind: counterexample
title: "Almost-sure finiteness does not imply integrability"
status: draft
origin: pipeline
deps: [cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, ex-density-and-infinite-mean-of-a-one-sided-hitting-time, def-brownian-motion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement refuted

The statement "if a real-valued random time is finite almost surely, then it is
integrable" is false: the first hitting time of a positive level by standard
Brownian motion is finite almost surely and has infinite mean.

## Counterexample

**Given:** AC, a standard Brownian motion $B$ [[def-brownian-motion]], a real
$a>0$, and $\tau_a=\inf\{t\ge0:B_t=a\}$.

**Proof technique:** direct.

1.1 By [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]], the random time $\tau_a$ is finite almost surely: this is the hypothesis of the refuted statement. [given]

1.2 By [[ex-density-and-infinite-mean-of-a-one-sided-hitting-time]], the expectation of $\tau_a$ is $+\infty$, computed from the density $a(2\pi t^3)^{-1/2}e^{-a^2/(2t)}$: this is the failure of the conclusion. [given]

2.1 The two properties are the exact contrast: finiteness almost surely constrains each outcome separately, while integrability controls the sizes of those values across the probability space, and the first-moment integrand $t\,a(2\pi t^3)^{-1/2}e^{-a^2/(2t)}$ has a nonintegrable $t^{-1/2}$ tail. [step 1.1, step 1.2]

3.1 No integrability of $\tau_a$ is claimed anywhere on this pair, and no other random time is substituted for the witness. AC is used only through the Brownian construction and the two cited suppliers. [step 2.1] ∎
