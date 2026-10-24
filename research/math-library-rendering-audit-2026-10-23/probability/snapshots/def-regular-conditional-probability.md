---
id: "def-regular-conditional-probability"
kind: "definition"
title: "Regular conditional probability"
deps: ["def-regular-conditional-distribution", "def-standard-borel-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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
status: published
origin: "pipeline"
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space whose sample measurable space $(\Omega,\mathcal F)$ is standard Borel in [[def-standard-borel-space]], and let $\mathcal G\subseteq\mathcal F$ be a sub-sigma-algebra. A **regular conditional probability given $\mathcal G$** is a regular conditional distribution, in [[def-regular-conditional-distribution]], of the identity random element $\operatorname{id}_\Omega:(\Omega,\mathcal F)\to(\Omega,\mathcal F)$.

The identity is measurable because its inverse image of A is A. Written explicitly, this is a probability kernel $K:(\Omega,\mathcal G)\to(\Omega,\mathcal F)$ with
$$\int_HK(\omega,A)\,P(d\omega)=P(H\cap A)\qquad(H\in\mathcal G,\ A\in\mathcal F).$$

Its target sigma-algebra is the full sample sigma-algebra $\mathcal F$, while its source sigma-algebra is $\mathcal G$. Empty and whole target events give zero and one evaluations, respectively. The term here is used under the displayed standard-Borel hypothesis. This definition makes no existence claim on an arbitrary sample measurable space and uses no choice axiom merely to specify the property.
