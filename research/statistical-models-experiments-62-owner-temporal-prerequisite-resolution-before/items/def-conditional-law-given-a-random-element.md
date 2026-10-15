---
id: "def-conditional-law-given-a-random-element"
kind: "definition"
title: "Conditional law given a random element"
deps: ["def-regular-conditional-distribution", "def-measure-kernel-and-probability-kernel", "def-law-or-distribution-of-a-random-element", "lem-conditional-expectation-is-unique-almost-surely", "thm-finite-and-countable-subadditivity-of-measures"]
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

Let $X:(\Omega,\mathcal F,P)\to(E,\mathcal S)$ and $Y:(\Omega,\mathcal F,P)\to(T,\mathcal T)$ be measurable random elements. A **conditional law of X given Y** is a probability kernel $K:(T,\mathcal T)\to(E,\mathcal S)$ such that $\omega\mapsto K(Y(\omega),\cdot)$ is a regular conditional distribution of X given $\sigma(Y)$ in [[def-regular-conditional-distribution]]. Thus for every $A\in\mathcal S$ and $H\in\sigma(Y)$,
$$\int_H K(Y(\omega),A)\,dP=P(H\cap\{X\in A\}).$$

Composition with Y makes each evaluation $\sigma(Y)$-measurable, and every section remains a probability by [[def-measure-kernel-and-probability-kernel]]. The notation $P(X\in A\mid Y=y)=K(y,A)$ refers to a chosen kernel; it is not a ratio involving the possibly zero probability $P(Y=y)$.

Write $P_Y(B)=P(Y^{-1}(B))$ for the law in [[def-law-or-distribution-of-a-random-element]]. If a specified countable family $\mathcal C\subseteq\mathcal S$ determines probability measures, two conditional laws K,L agree as measures outside a single $\mathcal T$-measurable $P_Y$-null set. Indeed for each $A\in\mathcal C$ the measurable discrepancy $D_A=\{y:K(y,A)\ne L(y,A)\}$ has null inverse image under Y by [[lem-conditional-expectation-is-unique-almost-surely]]. Hence $P_Y(D_A)=0$ by the law definition; the countable union $D$ is null by [[thm-finite-and-countable-subadditivity-of-measures]], and off D the determining property gives equality of measures. This uses a supplied determining family and makes no AC assertion about obtaining one.

Values on a measurable $P_Y$-null subset may be replaced by a specified fixed probability on E without changing these identities. The inverse image of that subset is measurable null, and all event evaluations are bounded, so the modified event integrals agree. Empty-event evaluations remain zero and whole-target evaluations remain one. Existence on standard-Borel spaces is proved separately; the definition alone does not assert a conditional kernel exists.
