---
id: "def-measure-kernel-and-probability-kernel"
kind: "definition"
title: "Measure kernel and probability kernel"
deps: ["def-measure", "def-measurable-function-between-measurable-spaces"]
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

A **measure kernel** from $(S,\Sigma)$ to $(T,\Tau)$ is a map $K:S\times\Tau\to[0,\infty]$ such that, for every $s\in S$, $A\mapsto K(s,A)$ is a measure on $(T,\Tau)$, and for every $A\in\Tau$, $s\mapsto K(s,A)$ is $\Sigma$-measurable. Measures and measurability have the meanings in [[def-measure]] and [[def-measurable-function-between-measurable-spaces]]; the evaluation functions use the Borel sigma-algebra on $[0,\infty]$.

A **probability kernel** satisfies $K(s,T)=1$ for every s. A **finite kernel** satisfies $K(s,T)<\infty$ for every s; there need not be a common bound on these masses. A **uniformly sigma-finite kernel**, in the convention of this page, comes with a specified sequence $T_n\in\Tau$ increasing to T such that $K(s,T_n)<\infty$ for every s and n. This is a common measurable exhaustion, not a bound uniform in s. A finite kernel has the constant exhaustion $T_n=T$. An arbitrary measure kernel is not assumed to have such an exhaustion.

All these requirements are pointwise in s, not merely almost everywhere for an unspecified measure on S. If T is empty, its only measure is zero, so a probability kernel into T can exist only when S is empty. If S is empty, the kernel requirements are vacuous. The zero kernel is finite. This definition selects no versions and uses no choice axiom.
