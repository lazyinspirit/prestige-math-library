---
id: pthm-td-universal-mixing-entropy
kind: physics-theorem
title: Conditional weak entropy principle across mixing channels
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Conditional entropy monotonicity across the declared cross-type mixing and reaction network; no-gap, uniqueness, strict increase, and empirical universality are not asserted.
deps: [def-axiom-of-choice, def-td-cross-type-reaction-network, pthm-td-entropy-under-product-comparison, thm-tdmath-splitting-cost-quotient, thm-tdmath-unattained-cost-entropy-inference]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-cross-type-reaction-network: formulation-prerequisite
  pthm-td-entropy-under-product-comparison: physical-result
  thm-tdmath-splitting-cost-quotient: mathematical-premise
  thm-tdmath-unattained-cost-entropy-inference: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 6.1 and §VI.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
verification:
  precheck: n/a
dependency_level: 19
---

## Statement

Let $\mathcal G\ne\varnothing$ be a finite-factor-closed network of [[def-td-cross-type-reaction-network]]. Assume the contact hypotheses of [[pthm-td-entropy-under-product-comparison]] provide a finite real baseline entropy $\sigma_\Gamma$ on each type. Also assume that network satisfies A1–A6, its exact decorated-chain cost $F$ has the no-sinks property defined there, and the Axiom of Choice. Then there is a real offset $B(\Gamma)$ for each type, additive under finite composition and extensive under every positive scaling, such that the corrected entropy

$$S_\Gamma(x):=\sigma_\Gamma(x)+B(\Gamma)$$

is nondecreasing across every admitted channel transition: if $(\Gamma,x)\mathcal R(\Gamma',y)$, then $S_\Gamma(x)\le S_{\Gamma'}(y)$. The conclusion is weak monotonicity only. It does not assert a no-gap identity, uniqueness of $B$, strict increase, or a global entropy principle for networks that fail the stated hypotheses.

## Facts & Assumptions

**Given:** A finite baseline entropy per type, finite-factor closure, A1–A6 on the cross-type relation, the decorated-chain definition, no-sinks, and Choice.

[A1] [[def-axiom-of-choice]]: the infinite-dimensional dominated-extension supplier adopts Choice.

[F1] [[pthm-td-entropy-under-product-comparison]]: under the contact branch, $\sigma_\Gamma$ is finite, additive and extensive on each fixed-composition finite product and represents its equal-composition comparison.

[F2] [[def-td-cross-type-reaction-network]]: the admitted transitions have the declared edge costs, the finite decorated-chain cost $F$, cross-type A1–A6, and the no-sinks condition.

[F3] [[thm-tdmath-unattained-cost-entropy-inference]]: for the baseline entropies and exact finite-chain cost, each admitted transition satisfies $\sigma_{\Gamma'}(y)-\sigma_\Gamma(x)\ge F(\Gamma,\Gamma')$; the proof covers unattained infima.

[F4] [[thm-tdmath-splitting-cost-quotient]]: under Choice, A1–A6, the same cost $F$, and no-sinks, there is an additive extensive type offset $B$ with $B(\Gamma)-B(\Gamma')\le F(\Gamma,\Gamma')$, and the theorem states the resulting weak monotonicity whenever [F3] holds.

## Proof
**Given:** [A1] and [F1]–[F4].

1.1 Fix an admitted transition $(\Gamma,x)\mathcal R(\Gamma',y)$. [F1] supplies finite baseline state values on both endpoint types, and [F2] identifies the decorated-chain cost convention used for this pair. Use the composition-preserving type-weighted representation from [F1]'s construction: interpret each encoded coefficient by its amount divided by the positive type weight, keeping the raw scaled and joined tags distinct. The network compares equal formal masses, and this interpretation preserves its admitted endpoint relation and each finite baseline entropy sum; hence each physical finite-chain witness and its coefficient-map image have the same real edge costs. Reversible regrouping of factors uses the adopted reversible-splitting axiom in [F2], so it changes neither the represented endpoints nor their baseline values. The cost $F$ used by [F3] is therefore this exact witness infimum, not one inferred from coordinate equality. Applying [F3] to this exact transition gives $$ \sigma_{\Gamma'}(y)-\sigma_\Gamma(x)\ge F(\Gamma,\Gamma'). $$ If the edge exists, the one-edge chain makes $F(\Gamma,\Gamma')<+\infty$, so this inequality has an ordinary real right side under the stated no-sinks hypothesis. [F1, F2, F3, given]

2.1 The network’s no-sinks condition and [A1] match the hypotheses of [F4]; its cost is the same $F$ as in step 1.1 by [F2] and [F3]. Thus [F4] supplies one offset function $B$, common to all types, with additivity, positive-scale extensivity and $B(\Gamma)-B(\Gamma')\le F(\Gamma,\Gamma')$ for every pair. [A1, F2, F3, F4, step 1.1]

3.1 Subtract the bound in step 2.1 from that in step 1.1: $$ [\sigma_{\Gamma'}(y)+B(\Gamma')]-[\sigma_\Gamma(x)+B(\Gamma)]\ge0. $$ By the definition of $S$ in the Statement, this is $S_{\Gamma'}(y)\ge S_\Gamma(x)$. The same $B$ works for every admitted transition, proving the conditional weak entropy principle. [step 1.1, step 2.1, algebra] ∎
## Remarks

The cross-type cost, quotient and no-sinks sandwich carriers belong to the mathematical supplier page and are currently draft and unplaced. This item records their exact conditional use; it does not certify those proofs or the physical network assumptions. The stronger no-gap branch in the research notes is an additional hypothesis and is not part of this theorem.
