---
id: def-instrumental-variable-potential-outcomes
kind: definition
title: "Binary instrumental-variable potential-outcome setup"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 16, §§16.1–16.6 and Technical Points 16.1–16.7, printed pp. 209–225"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Unmeasured Confounding (Instrumental Variables), randomized encouragement and monotonicity/LATE sections"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    - title: "Judea Pearl, Causal Inference in Statistics: An Overview, §3.5.2, journal pp. 122–123"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space for a target population of
units. A real random variable is a measurable map to $\mathbb R$ with its Borel
sigma-algebra ([[def-random-element-and-real-random-variable]]); expectations
are integrals with respect to $P$
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]). A unit's
potential outcomes depend only on that unit's treatment receipt and instrument
assignment; this is the no-interference and single-treatment-version scope used
here.

An **IV potential-outcome setup** consists of binary random variables
$Z,A:\Omega\to\{0,1\}$, an outcome $Y:\Omega\to\mathbb R$, binary potential
treatments $A(z):\Omega\to\{0,1\}$ for $z\in\{0,1\}$, and real potential
outcomes $Y(a,z):\Omega\to\mathbb R$ for $a,z\in\{0,1\}$. Each potential
outcome is integrable. The instrument has positive assignment probability at
both levels, $0<P(Z=1)<1$.

**Consistency** means $A=A(Z)$ and $Y=Y(A,Z)$ almost surely. The **exclusion
restriction** means $Y(a,1)=Y(a,0)$ almost surely for each $a$; under this
condition write the common value as $Y(a)$. **Joint instrument independence**
means that $Z$ is independent of the random element
$(A(0),A(1),Y(0),Y(1))$, using the independence definition in
[[def-independent-random-elements]]. **Relevance** means
$$\Delta_A:=E[A\mid Z=1]-E[A\mid Z=0]\ne0.$$
**Monotonicity** means $A(1)\ge A(0)$ almost surely. These are distinct model
conditions: a setup need not satisfy all of them.

For an integrable real random variable $X$ and a measurable event $B$ with
$P(B)>0$, define its **event-conditioned mean** by
$$E[X\mid B]:=\frac{E[\mathbf1_BX]}{P(B)}.$$
In particular $E[X\mid Z=z]$ means $E[X\mid\{Z=z\}]$. This is the
finite-atom conditional mean used throughout this pair. The indicator is
$\mathbf1_B(\omega)=1$ on $B$ and $0$ off $B$.

