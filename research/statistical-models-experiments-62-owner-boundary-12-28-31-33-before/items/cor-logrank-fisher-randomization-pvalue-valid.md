---
id: cor-logrank-fisher-randomization-pvalue-valid
kind: corollary
title: "The logrank ordering gives a valid Fisher randomization p-value"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-logrank-risk-set-score-and-test
  - def-finite-randomized-treatment-assignment-model
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - def-statistic-and-estimator
  - thm-fisher-sharp-null-randomization-pvalues-are-valid
  - def-p-value
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28: Fisher's Exact p-values, §28.5, PDF pp. 4-6"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Statement

Fix a finite randomized treatment-assignment model with allowed assignments
$\mathcal Z$ and known law $p$, with unit set $\mathcal I$ as in
[[def-finite-randomized-treatment-assignment-model]]. Fix a map
$\gamma:\mathcal Z\to\{0,1\}^{\mathcal I}$ assigning each allowed assignment
a binary logrank group map. For each subject $i$, let
$(U_i(z),\delta_i(z))\in[0,\tau]\times\{0,1\}$ be the full right-censored
record under assignment $z$. Assume the **record sharp null**: for every $i$,
the pair $(U_i(z),\delta_i(z))$ is constant over all $z\in\mathcal Z$. Fix
before observing assignment or records a bounded logrank weight rule and the
two-sided ordering $T(z)=|U_w(\gamma(z);U,\delta)|$.

The inclusive assignment-tail p-value
$$p_{\rm rand}(z):=\sum_{z'\in\mathcal Z}p(z') 1\{|U_w(\gamma(z');U,\delta)|\ge |U_w(\gamma(z);U,\delta)|\}$$
is superuniform under the assignment law, so it is a valid finite-sample
p-value for the record sharp null. If an auxiliary $V$ is independent of
the assignment and uniform on $[0,1]$, replacing the inclusive tail by the
strict-tail mass plus $V$ times the tied-score mass gives an exactly uniform
p-value. The result uses the actual assignment probabilities and asserts no
validity under a weak average-effect null or under an equal-hazard null alone.

## Facts & Assumptions

**Given:** A finite assignment law, a fixed binary group map for every allowed assignment, a fixed horizon, a predeclared weighted logrank ordering, a record sharp null, and optionally an independent uniform tie randomizer.

[F1] [[def-finite-randomized-treatment-assignment-model]]: the experimental units and potential-outcome schedule are fixed, the assignment $Z$ has the declared finite law $p$, and each unit's response under an assignment is defined for every allowed assignment.

[F2] [[def-fisher-sharp-null-and-predeclared-test-orderings]]: a Fisher sharp null fixes each unit's response under every allowed assignment, and the ordering score is fixed before assignment and response inspection.

[F3] [[def-logrank-risk-set-score-and-test]]: for a fixed right-censored record and binary group map $\gamma(z)$, the weighted score is the finite sum $\sum_jw_j(O_j-E_j)$; the two-sided ordering uses its absolute value and includes event-time ties by the stated risk-set rule.

[F4] [[def-statistic-and-estimator]]: a statistic is a measurable map from the experiment's data space to its target measurable space.

[F5] [[thm-fisher-sharp-null-randomization-pvalues-are-valid]]: for any predeclared real-valued ordering score in a finite assignment model, the inclusive weighted assignment tail is superuniform under the Fisher sharp null, and an independent uniform tie randomizer gives an exactly uniform value.

[F6] [[def-p-value]]: a p-value is valid for a null when its probability of being at most $u$ is at most $u$ for every $u\in[0,1]$ and every law in that null.

[A1] When the randomized-tie version is used, $V$ is independent of the assignment and has the uniform law on $[0,1]$.

## Proof

1.1 Encode each record by the real number $R_i(z)=U_i(z)+(\tau+1)\delta_i(z)$. The event-record range $[0,\tau]$ and censor-record range $[\tau+1,2\tau+1]$ are disjoint, so this map is injective and Borel, with a Borel inverse on its image. Under the record sharp null, every encoded response $R_i(z)$ is constant over all assignments. Hence the scalar schedule $(R_i(z))_{i\in\mathcal I}$ satisfies the Fisher sharp null of [F2] within the finite assignment model [F1]. [F1, F2, given, construct]

2.1 On encoded response vectors whose coordinates lie in the image of the record encoding, decode the records and evaluate the fixed weighted logrank score using the candidate binary group map $\gamma(z)$; define the score to be zero outside that image. This is a predeclared real-valued score on the finite assignment model. Its data space has the full power-set sigma-algebra, so every such map is measurable in the sense of [F4]. The absolute-score ordering includes ties and is fixed before assignment or records are inspected by [F2, F3]. [F2, F3, F4, step 1.1, construct]

3.1 Apply [F5] to this predeclared score and the actual finite assignment weights. Its inclusive tail is exactly the displayed $p_{\rm rand}$, so for every $u\in[0,1]$ its null probability of being at most $u$ is at most $u$. Under [A1], the strict-tail mass plus $V$ times the tied-score mass is exactly the randomized-tie p-value in [F5] and is uniform. By [F6], these bounds are precisely finite-sample p-value validity for the record sharp null. The proof uses no survival-law, censoring-independence, or Gaussian assumption; it makes no claim for a weaker null that does not fix every record. [A1, F5, F6, step 1.1, step 2.1] ∎