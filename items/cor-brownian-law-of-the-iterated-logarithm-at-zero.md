---
id: cor-brownian-law-of-the-iterated-logarithm-at-zero
kind: corollary
title: "Brownian law of the iterated logarithm at zero"
status: draft
origin: pipeline
deps: [thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity, thm-brownian-time-inversion, def-axiom-of-choice, def-brownian-motion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 8.5.1 with Brownian time inversion"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Then almost
surely
$$\limsup_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=1,\qquad \liminf_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=-1,$$
the normalizer being taken for $0<t<e^{-1}$ so that $\log\log(1/t)>0$.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Almost surely $\limsup_{s\to\infty}Y_s/\sqrt{2s\log\log s}=1$ and the corresponding limit inferior is $-1$ for every standard Brownian motion $Y$. [[thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity]]

[F2] Time inversion: the process $Y_0=0$, $Y_s:=sB_{1/s}$ for $s>0$, is again a standard Brownian motion, with continuity at $s=0$ part of the conclusion. [[thm-brownian-time-inversion]]

[F3] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Let $Y$ be the time-inverted process of [F2]; by [F1] applied to $Y$ there is a probability-one event on which $\limsup_{s\to\infty}Y_s/\sqrt{2s\log\log s}=1$ and $\liminf_{s\to\infty}Y_s/\sqrt{2s\log\log s}=-1$. [given, F1, F2]

2.1 On that event, substituting $s=1/t$ with $t\downarrow0$ and using $Y_{1/t}=B_t/t$ gives $\frac{Y_{1/t}}{\sqrt{2t^{-1}\log\log(1/t)}}=\frac{B_t/t}{\sqrt{2t^{-1}\log\log(1/t)}}=\frac{B_t}{\sqrt{2t\log\log(1/t)}}$, so $\limsup_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=1$ and $\liminf_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=-1$ almost surely. [step 1.1, F2]

3.1 The cases are covered: the substitution $t\mapsto1/t$ is a bijection of $(0,\infty)$ onto itself, so $t\downarrow0$ corresponds to $s\uparrow\infty$; the normalizer is positive exactly for $0<t<e^{-1}$; the endpoint $t=0$ is not evaluated, continuity at zero being part of [F2]; and AC enters only through [F3]. [step 2.1, F2, F3, given] ∎

## Source notes

Time inversion converts the law of the iterated logarithm at infinity, Theorem 8.5.1 of Durrett, into the corresponding statement at zero, with the normalizing factor transforming exactly as displayed.
