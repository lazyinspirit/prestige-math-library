---
id: "lem-normal-isotypical-component-is-inertia-stable"
kind: "lemma"
title: "The stabilizer of a nonzero isotypical component"
status: "draft"
origin: "pipeline"
deps: ["lem-normal-isotypical-components-are-permuted-by-translation"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.2 p.54 before Proposition 4.2.2"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
proof_strategy: direct
---

## Statement

Let $G$ be finite, $N\trianglelefteq G$, $V$ an irreducible complex $G$-module, and $\theta$ an occurring constituent of $V|_N$. The setwise stabilizer of the nonzero component $V_\theta$ is exactly $I_G(\theta)$. Consequently $V_\theta$ is an $I_G(\theta)$-module.

## Facts & Assumptions

**Given:** The groups, modules, characters, and hypotheses in the statement. All representations here are finite-dimensional complex left representations.

[F1] Translation sends $V_\theta$ to $V_{{}^g\theta}$, and distinct isotypical components are direct summands. ([[lem-normal-isotypical-components-are-permuted-by-translation]]).

## Proof

**Proof technique:** direct.

1.1 If $g\in I_G(\theta)$, then ${}^g\theta=\theta$, so translation gives $gV_\theta=V_\theta$. Thus the inertia group preserves the component. [F1, given]

2.1 If $gV_\theta=V_\theta$, translation gives $V_{{}^g\theta}=V_\theta\ne0$. Distinct components have zero intersection, so the two types coincide and $g\in I_G(\theta)$. Restricting the action therefore gives the claimed module. The nonzero hypothesis is essential: the zero subspace has all of $G$ as stabilizer. [F1, step 1.1, given] ∎
