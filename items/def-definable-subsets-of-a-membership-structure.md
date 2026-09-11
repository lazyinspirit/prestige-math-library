---
id: "def-definable-subsets-of-a-membership-structure"
kind: "definition"
title: "Definable subsets of a membership structure"
deps: ["lem-finite-tuple-satisfaction-is-absolute"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke §5.1 pp13–14; Marks §20 p86
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Work in ZF. If $A\ne\varnothing$, define

$$\operatorname{Def}(A)=\{\{x\in A:(A,\in)\models\phi(x,a_1,\ldots,a_n)\}:n<\omega,\ a\in A^n,\ \operatorname{FV}(\phi)\subseteq\{v_0,\ldots,v_n\}\}.$$

Here $x$ is assigned to $v_0$ and $a_i$ to $v_i$; unused variables are allowed. Use the finite-tuple satisfaction convention of [[lem-finite-tuple-satisfaction-is-absolute]]. Formula codes and finite tuples form a set. Separation produces the uniquely specified subset for each pair of code and tuple, and Replacement collects their values; hence $\operatorname{Def}(A)$ is a set contained in $\mathcal P(A)$, uniformly definable from $A$.

Set $\operatorname{Def}(\varnothing)=\{\varnothing\}$ separately. This avoids treating the empty carrier as a first-order structure. Empty parameter tuples give parameter-free definitions. Parameters need not be distinct. Only satisfaction for a set structure is used; no truth predicate for the universe is asserted.
