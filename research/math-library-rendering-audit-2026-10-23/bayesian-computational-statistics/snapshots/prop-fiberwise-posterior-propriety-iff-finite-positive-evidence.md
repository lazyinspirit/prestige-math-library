---
id: prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
kind: proposition
title: Fiberwise posterior propriety is equivalent to finite positive evidence
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - def-probability-measure
justified_by: []
proof_strategy: direct
axiom_use: "None. The fixed-fiber normalization argument is choice-free."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §§1.3, 2.8"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 2"
      url: "https://www.bayesrulesbook.com/chapter-2.html"
---

## Statement

Let $(\Theta,\mathcal T,\Pi)$ be a measure space, let $L_y:\Theta\to[0,+\infty]$
be measurable for a fixed datum $y$, and put
$Z:=\int_\Theta L_y\,d\Pi$. For a finite positive constant $c$, the set
function
$$A\longmapsto c\int_A L_y\,d\Pi$$
is a probability measure if and only if $0<Z<+\infty$ and $c=Z^{-1}$. In
particular, if $Z=0$ or $Z=+\infty$, no finite positive scaling makes the
fiberwise update a probability measure.

## Facts & Assumptions

**Given:** A measure space $(\Theta,\mathcal T,\Pi)$; a nonnegative measurable
likelihood section $L_y$; its evidence $Z$; and a scalar $c\in(0,+\infty)$.

[F2] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: for a
measure $\Pi$ and nonnegative measurable $L_y$, the set function
$A\mapsto\int_A L_y\,d\Pi$ is a measure.

[F3] [[def-probability-measure]]: a probability measure is a measure whose total
mass is one.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Define $\nu_y(A):=\int_A L_y\,d\Pi$. By [F2], $\nu_y$ is a measure and $\nu_y(\Theta)=Z$ by the Statement's definition of $Z$ and the definition of the integral over a measurable set. Since $c$ is finite and positive, $c\nu_y$ is also a measure and has total mass $cZ$, with the extended-real convention $c\cdot(+\infty)=+\infty$. [given, F2, algebra]

2.1 If $0<Z<+\infty$, then $c\nu_y$ is a probability exactly when $cZ=1$ by [F3], which is equivalent to $c=Z^{-1}$. If $Z=0$, its total mass is zero; if $Z=+\infty$, its total mass is infinite. Thus neither endpoint admits such a $c$, proving both directions without forming a quotient there. [step 1.1, F3, algebra] ∎

