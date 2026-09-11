---
id: "def-conditional-probability-given-a-sigma-algebra"
kind: "definition"
title: "Conditional probability given a sigma algebra"
deps: ["def-conditional-expectation-as-an-ae-class", "thm-conditional-expectation-exists-by-radon-nikodym", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: "draft"
origin: "pipeline"
---

## Definition

Assume AC for conditional-expectation existence. On a probability space $(\Omega,\mathcal F,P)$, for a sub-sigma-algebra $\mathcal G\subseteq\mathcal F$ and $A\in\mathcal F$, define
$$P(A\mid\mathcal G)=E[1_A\mid\mathcal G]$$
as the almost-everywhere class in [[def-conditional-expectation-as-an-ae-class]]. The indicator is integrable since $E|1_A|=P(A)\le1$, so [[thm-conditional-expectation-exists-by-radon-nikodym]] applies. A version is a real integrable $\mathcal G$-measurable function whose integral over each $H\in\mathcal G$ is $P(A\cap H)$.

The [[def-axiom-of-choice]] hypothesis is inherited from the RN existence proof's maximizing-sequence and Hahn-decomposition selections. It does not select a canonical representative. In particular, choosing a version separately for each event A has not constructed a probability measure on the event space at any fixed sample point. The constant zero and one functions satisfy the testing identities for the empty and whole events respectively. No completion of $\mathcal G$ is part of this definition.
