---
id: ex-valid-finite-evidence-and-normalized-update
kind: example
title: A finite model with positive finite evidence
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §1.3"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, §§2.1.3–2.1.4, 2.3.4–2.3.6"
      url: "https://www.bayesrulesbook.com/chapter-2.html"
---

## Example

Take $\Theta=\{a,b\}$ with prior masses $\Pi(\{a\})=1/3$ and
$\Pi(\{b\})=2/3$. Let the observation space be $\{0,1\}$ with counting
measure. At parameter $a$, assign probabilities $1/2,1/2$ to $0,1$; at
parameter $b$, assign probabilities $3/4,1/4$ to $0,1$. For the observed value
$y=1$, the evidence is positive and finite, and the posterior gives equal mass
to $a$ and $b$.

## Facts & Assumptions

[F1] [[def-posterior-evidence-normalizer-and-fiberwise-update]]: for a fixed
observation, $Z_\Pi(y)=\int L_y\,d\Pi$ and the fiberwise update divides the
unnormalized measure by $Z_\Pi(y)$ only when that value is finite and positive.

[F2] [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]: a
finite positive evidence normalizer gives a probability update after division by
that normalizer.

**Given:** The finite parameter space, prior, observation probabilities, and
observed value $y=1$ in the Example.

## Verification

1.1 The prior has total mass $1/3+2/3=1$, and both conditional probability vectors sum to one. The likelihood at $y=1$ is $L_1(a)=1/2$ and $L_1(b)=1/4$, so the evidence is $Z_\Pi(1)=(1/3)(1/2)+(2/3)(1/4)=1/3\in(0,+\infty)$. [given, F1, algebra]

2.1 The unnormalized masses are $(1/3)(1/2)=1/6$ at $a$ and $(2/3)(1/4)=1/6$ at $b$. Dividing each by $Z_\Pi(1)=1/3$ gives posterior mass $1/2$ at each point, a probability update by [F2]. [step 1.1, F1, F2, algebra] ∎

