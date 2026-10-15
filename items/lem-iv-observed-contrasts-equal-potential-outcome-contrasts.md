---
id: lem-iv-observed-contrasts-equal-potential-outcome-contrasts
kind: lemma
title: "IV observed contrasts as potential-outcome contrasts"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-instrumental-variable-potential-outcomes
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-linearity-of-the-lebesgue-integral-on-l-one
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, Technical Point 16.7, printed pp. 224–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), Randomized Encouragement assumptions and LATE proof"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2, journal pp. 122–123"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: pass
---

## Statement

In an IV setup satisfying consistency, exclusion, and joint instrument
independence, let $\tau=Y(1)-Y(0)$. Then
$$E[A\mid Z=1]-E[A\mid Z=0]=E[A(1)-A(0)]$$
and $E[Y\mid Z=1]-E[Y\mid Z=0]=E[(A(1)-A(0))\tau]$.
No monotonicity or relevance condition is needed for these equalities; positivity
of both instrument atoms and integrability are part of the setup.

## Facts & Assumptions

**Given:** The IV setup of [[def-instrumental-variable-potential-outcomes]],
consistency $A=A(Z)$ and $Y=Y(A,Z)$, exclusion $Y(a,z)=Y(a)$, and joint
independence $Z\perp(A(0),A(1),Y(0),Y(1))$. Show the two displayed contrasts.

[A1] The setup supplies binary $Z,A(z)$ and integrable $Y(a,z)$, with positive
$P(Z=z)$ for $z=0,1$. ([[def-instrumental-variable-potential-outcomes]])

[A2] The setup assumes consistency, exclusion and joint instrument
independence. ([[def-instrumental-variable-potential-outcomes]])

[F1] Measurable functions of independent random elements remain independent.
([[lem-measurable-functions-preserve-independence]])

[F2] For independent integrable real random variables, the expectation of
their product factors as the product of their expectations.
([[thm-factorization-of-expectations-for-independent-variables]])

[F3] Finite sums, scalar multiples and products of measurable real functions
are measurable whenever pointwise defined.
([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[F4] The Lebesgue integral is linear on integrable functions.
([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

1.1 Put $W=(A(0),A(1),Y(0),Y(1))$ and $I_z=\mathbf1_{\{Z=z\}}$. The functions $A(z)$ and $Y(0)+A(z)(Y(1)-Y(0))$ are measurable functions of $W$ by [F3], and are integrable because $A(z)$ is binary and $Y(0),Y(1)$ are integrable. Independence in [A2] and [F1] make each such function independent of $Z$. [given, A1, A2, F1, F3]

2.1 By [F2], for each of these integrable functions $H(W)$ we have $E[I_zH(W)]=E[I_z]E[H(W)]=P(Z=z)E[H(W)]$. Dividing by the positive $P(Z=z)$ and using the event-conditioned mean in [A1] gives $E[H(W)\mid Z=z]=E[H(W)]$. [A1, F2, step 1.1]

3.1 On $\{Z=z\}$, consistency and exclusion in [A2] give $A=A(z)$ and $Y=Y(A(z))=Y(0)+A(z)(Y(1)-Y(0))$. Thus step 2.1 yields $E[A\mid Z=z]=E[A(z)]$ and $E[Y\mid Z=z]=E[Y(0)+A(z)\tau]$. [A1, A2, step 2.1]

4.1 Subtracting the $z=0$ identities from the $z=1$ identities in step 3.1, and using [F4], gives $E[A(1)-A(0)]$ and $E[(A(1)-A(0))\tau]$, respectively. [F4, step 3.1, algebra] ∎

