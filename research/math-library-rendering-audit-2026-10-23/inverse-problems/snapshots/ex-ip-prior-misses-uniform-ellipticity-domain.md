---
id: ex-ip-prior-misses-uniform-ellipticity-domain
kind: example
title: "A Gaussian coefficient law with mass outside the uniform-ellipticity domain"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-prior-on-a-forward-domain
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-probability-measure
  - prop-measure-monotonicity
justified_by: []
forward_refs: []
aliases: []
generation:
  role: example
proof_strategy: direct
axiom_use: "AC is required by the library's standard-normal law definition; the positive-mass and full-measure failure calculation itself is choice-free."
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§1.3, positivity constraint and restricted forward-map domain; §3.4, elliptic inverse problem with a prior."
    - title: "E. Giné and R. Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models (Cambridge University Press, 2016)"
      url: "https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf"
      locator: "§1.1.2, indirect observations on restricted parameter spaces."
---

## Example

Assume AC. Let parameter and data spaces be $X=Y=\mathbb R$ with their Borel sigma-algebras, let the admissible truth set be $U=\mathbb R$, and let $F:U\to Y$ be the identity map. Regard $\theta\in\mathbb R$ as the constant coefficient field $a_\theta(x)=\theta$ on $[0,1]$. Let $D=[1,2]\subseteq U$ be the uniformly elliptic class with lower bound $1$ and upper bound $2$, meaning $1\le a_\theta(x)\le2$ for every $x\in[0,1]$; the restricted map $G=F|_D$ is measurable. Give $X$ the standard normal law $\mu=N(0,1)$. Since $\mu((-\infty,1))>0$, $\mu(D)<1$; consequently $\mu$ is a Gaussian probability on the parameter space but is not a prior on this forward-map domain.

## Example references

[[def-ip-prior-on-a-forward-domain|a prior must assign probability one to its declared forward-map domain]]

[[def-ip-forward-map-and-solution-classes|the admissible truth set, parameter and data spaces, and forward-map domain]]

[[def-standard-normal-and-normal-laws|the standard normal law has positive density on the real line]]

[[def-axiom-of-choice|the Axiom of Choice required by the library's standard-normal interface]]

[[def-measurable-function-between-measurable-spaces|measurability is defined by measurable inverse images]]

[[def-borel-sigma-algebra|the Borel sigma-algebra contains open and closed sets]]

[[def-probability-measure|a probability measure has total mass one]]

[[prop-measure-monotonicity|measures are monotone]]

[Dashti and Stuart, §1.3 and §3.4, full text](https://arxiv.org/pdf/1302.6989)

[Giné and Nickl, §1.1.2, full book](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** AC, the standard normal probability $\mu=N(0,1)$ on $X=\mathbb R$, the closed domain $D=[1,2]$, and the identity map $G:D\to\mathbb R$.

[A1] AC is required by the library's standard normal law definition; the measure comparison below does not use choice. [[def-axiom-of-choice]]

[F1] The standard normal law has Borel density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$, positive for every $t\in\mathbb R$. [[def-standard-normal-and-normal-laws]]

[F2] A prior on the forward domain $D$ requires a Borel probability on $X$ with $\mu(D)=1$. [[def-ip-prior-on-a-forward-domain]]

[F3] A measurable map is one whose measurable-set preimages are measurable; for the identity map on $D$, $G^{-1}(E)=E\cap D$. [[def-measurable-function-between-measurable-spaces]]

[F4] The Borel sigma-algebra contains open sets and their complements, so the closed interval $D$ and the half-line $(-\infty,1)$ are Borel. [[def-borel-sigma-algebra]]

[F5] Measures are monotone under measurable set inclusion. [[prop-measure-monotonicity]]

[F6] A probability measure has total mass one and is countably additive. [[def-probability-measure]]

## Verification

**Given:** The parameter space, ellipticity domain, standard normal law, and identity forward map in the Example.

1.1 The interval $D=[1,2]$ is closed and hence Borel by [F4]. For every Borel $E\subseteq\mathbb R$, $G^{-1}(E)=E\cap D$ is in the trace Borel sigma-algebra on $D$ by [F3], so $G$ is an admissible measurable forward map. [F3, F4, given]

1.2 The density in [F1] is continuous and strictly positive on $[0,\tfrac12]$, so it has a positive minimum there and $\mu((-\infty,1))\ge\int_0^{1/2}\phi(t)\,dt>0$. [A1, F1, given, algebra]

2.1 Since $D\subseteq(-\infty,1)^c$, [F5] gives $\mu(D)\le\mu((-\infty,1)^c)=1-\mu((-\infty,1))<1$ by [F6] and step 1.2. This violates the full-measure condition in [F2], so $\mu$ is not a prior on the declared domain. [F2, F5, F6, step 1.2, algebra] ∎
