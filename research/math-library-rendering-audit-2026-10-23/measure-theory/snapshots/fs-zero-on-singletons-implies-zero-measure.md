---
id: fs-zero-on-singletons-implies-zero-measure
kind: false-statement
title: "FALSE: a measure on an infinite set that vanishes on every singleton is the zero measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-measure, def-sigma-algebra, def-countable, def-countable-choice, thm-countable-union-of-countable, thm-r-uncountable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

**False claim.** If $X$ is infinite and a measure $\mu$ on $X$ satisfies $\mu(\{x\})=0$ for every $x\in X$, then $\mu$ is the zero measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the uncountable set $X=\mathbb R$.

[L1] A sigma-algebra is closed under complements and countable unions ([[def-sigma-algebra]]), and a measure is countably additive on disjoint measurable sequences ([[def-measure]]).

[L2] Countable means finite or in bijection with $\mathbb N$ ([[def-countable]]), and under countable choice a countable union of at most countable sets is at most countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

[L3] The real line is uncountable ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal A$ consist of the countable and cocountable subsets of $X$. Complements exchange the two classes, and [L2] shows that a countable union of countable members is countable; if one member is cocountable, the union is cocountable. Hence $\mathcal A$ is a sigma-algebra. [given, L1, L2, L3]

2.1 Define $\mu(A)=0$ for countable $A$ and $\mu(A)=1$ for cocountable $A$. In a disjoint measurable sequence at most one member is cocountable; if none is, the union is countable by [L2], and if one is, the union is cocountable. Thus the value on the union equals the sum of the values, so $\mu$ is a probability measure. [step 1.1, L1, L2]

3.1 Every singleton is countable and has measure $0$, while $X$ is cocountable and has measure $1$. [step 2.1, L2, L3]

4.1 The measure in step 2.1 vanishes on every singleton but is not the zero measure by step 3.1, so it refutes the claim. [step 2.1, step 3.1] ∎
