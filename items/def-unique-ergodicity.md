---
id: def-unique-ergodicity
kind: definition
title: Unique ergodicity
status: draft
origin: pipeline
deps: [def-continuous-real-functions-on-a-compact-metric-space, def-measure-preserving-transformation-and-system]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§8.1 and §8.5, printed pp. 73 and 78–79"
---

## Definition

Let $K$ be a nonempty compact metric space and let $T:K\to K$ be continuous.
The topological dynamical system $(K,T)$ is **uniquely ergodic** if there exists
exactly one Borel probability measure $\mu$ such that

$$\mu(T^{-1}E)=\mu(E)$$

for every Borel set $E\subseteq K$.  Thus existence is part of the property.
This is distinct from measure-theoretic ergodicity relative to a probability
measure already chosen: unique ergodicity quantifies over all invariant Borel
probabilities.
