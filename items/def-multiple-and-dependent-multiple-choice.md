---
id: def-multiple-and-dependent-multiple-choice
kind: definition
title: "Multiple choice and dependent multiple choice"
status: draft
origin: pipeline
deps: ["def-dependent-choice", "def-choice-for-pairs-and-countable-finite-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §9.1, p.133"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "alg-d, On dependent choice, DMC definition and Proposition 6, PDF p.4"
      url: https://alg-d.com/math/ac/dc.pdf
---

## Definition

Work in ZF. **Multiple choice** (MC) asserts that every set-indexed family $(X_i)_{i\in I}$ of nonempty sets admits a function $i\mapsto F_i$ with $\varnothing\ne F_i\subseteq X_i$ finite. **Countable multiple choice** (CMC) restricts this to $I=\omega$.

**Dependent multiple choice** (DMC) asserts: if $X\ne\varnothing$ and $R\subseteq X^2$ satisfies $\forall x\in X\,\exists y\in X\ (xRy)$, there is a sequence $(F_n)_{n<\omega}$ of nonempty finite subsets of $X$ such that

$$\forall n<\omega\ \forall x\in F_n\ \exists y\in F_{n+1}\ (xRy).$$

No initial $F_0$ is prescribed. The condition requires a successor for **every** point at each level. It does not require every point of the next level to have a predecessor.
