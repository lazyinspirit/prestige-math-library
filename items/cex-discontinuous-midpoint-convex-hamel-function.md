---
id: cex-discontinuous-midpoint-convex-hamel-function
kind: counterexample
title: "Assuming Choice, a Hamel coefficient map is midpoint convex but discontinuous and therefore not convex"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, lem-hamel-basis-exists, def-additive-function, thm-cauchy-functional-equation-regularity, def-convex-concave-and-midpoint-convex-functions, thm-convex-functions-are-locally-lipschitz-and-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Green and W. Gustin, On the gap between convexity and midpoint convexity"
      url: "https://doi.org/10.4153/CJM-1950-046-x"
pipeline_run: null
---

## Statement refuted

Every midpoint-convex function $\mathbb R\to\mathbb R$ is continuous, and hence convex.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Assuming Choice, a Hamel basis has a coefficient map $\Lambda:\mathbb R\to\mathbb Q$ that is additive, has $\Lambda(b)=1$ for its selected basis vector, and has a nonzero kernel ([[lem-hamel-basis-exists]]).

[L2] An additive function satisfying any listed regularity condition, including continuity at one point, equals $x\mapsto f(1)x$ ([[thm-cauchy-functional-equation-regularity]]).

[L3] A convex real function is continuous at every interior point of its interval domain ([[thm-convex-functions-are-locally-lipschitz-and-continuous]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Choose a Hamel coefficient map $\Lambda$ from [L1]. Additivity gives $\Lambda((x+y)/2)=(\Lambda(x)+\Lambda(y))/2$, so $\Lambda$ is midpoint convex with equality. [L1, L2]

2.1 Suppose for contradiction that $\Lambda$ is continuous. Then [L2] gives $\Lambda(x)=cx$; a nonzero $w$ in its kernel forces $c=0$, whereas $\Lambda(b)=1$, a contradiction. [step 1.1, L2, assume-contra]

3.1 Thus $\Lambda$ is discontinuous. By [L3], this midpoint-convex function cannot be convex. [step 1.1, step 2.1, L3, discharge-contradiction] ∎
