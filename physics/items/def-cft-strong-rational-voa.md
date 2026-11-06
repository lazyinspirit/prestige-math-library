---
id: def-cft-strong-rational-voa
kind: definition
title: Strongly rational VOA convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-contragredient-module
  - thm-cft-contragredient-module-well-defined
  - def-conformal-vertex-algebra
  - def-rational-vertex-algebra
  - def-c2-cofinite-vertex-algebra
dependency_roles:
  def-cft-contragredient-module: mathematical-premise
  thm-cft-contragredient-module-well-defined: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yi-Zhi Huang, Rigidity and modularity of vertex tensor categories"
      url: "https://arxiv.org/pdf/math/0502533v2"
      locator: "§1 and Theorem 1.1: simple CFT-type, self-contragredient, rational and C2-cofinite hypotheses."
    - title: "Shun Xu, G-crossed braided tensor categories of twisted modules"
      url: "https://arxiv.org/pdf/2610.29130v1"
      locator: "§1, the stated strongly-rational convention; used to check the conjunction only."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For this pair, a VOA $V$ is **strongly rational** when all five conditions hold. “Simple” means that $V$ has no nonzero proper subspace stable under every mode $a_{(m)}$, for all $a\in V$ and $m\in\mathbb Z$:

1. $V$ is simple.
2. $V$ is of CFT type: $V_n=0$ for $n<0$ and $V_0=\mathbb C\mathbf1$, with the remaining grading conventions of [[def-conformal-vertex-algebra]].
3. $V$ is self-contragredient: its restricted graded dual $V'$, with the opposite-field action of [[def-cft-contragredient-module]], is isomorphic to $V$ as a $V$-module.
4. $V$ is rational in the admissible-module convention of [[def-rational-vertex-algebra]].
5. $V$ is $C_2$-cofinite in the sense of [[def-c2-cofinite-vertex-algebra]].

This convention states these five hypotheses separately. It does not include a conclusion about a module category.

## Facts & Assumptions

**Given:** $V$ is a conformal vertex algebra over $\mathbb C$.

[F1] [[def-conformal-vertex-algebra]]: CFT type includes the nonnegative integral conformal grading, finite-dimensional graded pieces and $V_0=\mathbb C\mathbf1$.

[F2] [[def-rational-vertex-algebra]]: rationality means complete reducibility of admissible modules.

[F3] [[def-c2-cofinite-vertex-algebra]]: $C_2$-cofiniteness means $V/C_2(V)$ is finite dimensional.

[F4] [[def-cft-contragredient-module]]: the contragredient construction uses the restricted graded dual and the opposite-field formula; the definition alone does not prove the module identities.

[F5] [[thm-cft-contragredient-module-well-defined]] proves that for every grading-restricted generalized module over a conformal vertex algebra of CFT type, the opposite-field restricted dual is a grading-restricted generalized module and componentwise evaluation gives a module isomorphism to its double contragredient. Its current proof uses the proved opposite-field Jacobi, derivative and Möbius identities.

## Proof

1.1 The definition is the conjunction of simplicity, CFT type, self-contragredience, admissible rationality and $C_2$-cofiniteness, with the relevant conventions fixed by [F1]–[F4]. [given, F1, F2, F3, F4, algebra]

2.1 The CFT-type grading in [F1] makes $V$ itself a grading-restricted module: its weights are nonnegative integers and every graded piece is finite dimensional. Therefore [F5] applies to $M=V$ and makes the restricted dual in [F4] an actual $V$-module. The module isomorphism required in condition 3 is consequently well-defined. Its existence is a separate condition on $V$; neither [F5] nor this definition asserts that every such $V$ is self-contragredient or implies any of the other four conditions. [given, F1, F4, F5, step 1.1, algebra] ∎

## Proof status

This is the selected five-condition convention, matching Huang’s Theorem 1.1. The current contragredient supplier proves the module structure needed to formulate self-contragredience; that earlier missing-identity hold no longer applies. This scoped supplier-use correction does not establish generic HLZ convergence or coherence, or any rigidity, ribbon or modularity conclusion.
