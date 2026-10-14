---
id: ex-full-conformal-candidate-ranking
kind: example
title: "Full conformal ranks a candidate in an augmented sample"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - alg-full-conformal-prediction-set
  - def-exchangeable-random-elements
  - thm-conformal-rank-superuniformity-under-exchangeability
  - thm-full-conformal-marginal-coverage
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Example

Take feature space $\mathcal X=\{x_0\}$ and response space
$\mathcal Y=\{1,2,3\}$, each with its power-set sigma-algebra, so the product
example space is identified with $\mathcal Y$ by $(x_0,y)\mapsto y$. Let
$Z_1,Z_2,Z_3$ be a uniformly random ordering of the pairs
$(x_0,1),(x_0,2),(x_0,3)$, and use the response-coordinate score assignment
$A_i(z_1,z_2,z_3)=y_i$ when $z_i=(x_0,y_i)$. The true
candidate's nonrandomized upper-rank p-value is $1$, $2/3$, or $1/3$, each with
probability $1/3$. At $\alpha=0.4$, the full conformal set covers with
probability $2/3$.

## Facts & Assumptions

**Given:** The six permutations of $((x_0,1),(x_0,2),(x_0,3))$ have equal probability, and the score assignment returns each example's response coordinate.

[F1] Exchangeability is invariance of the joint law under permutations. [[def-exchangeable-random-elements]]

[F2] The full score assignment is measurable and permutation-equivariant, and the prediction set includes the candidate when its upper-rank p-value exceeds $\alpha$. [[alg-full-conformal-prediction-set]]

[F3] The upper-rank p-value is superuniform for exchangeable scores. [[thm-conformal-rank-superuniformity-under-exchangeability]]

## Verification

1.1 The six equally likely orderings are carried into one another by coordinate permutations, so the data tuple is exchangeable. Each response-coordinate map is measurable on the finite discrete product, and $A(\tau_\pi z)=\tau_\pi A(z)$ for every permutation. [given, F1]

1.2 If the last coordinate is $1$, $2$, or $3$, respectively, the count of scores at least the candidate is $3$, $2$, or $1$. Hence $p_3$ equals $1$, $2/3$, or $1/3$, each with probability $1/3$. [given, F2]

2.1 Since $1>2/5$ and $2/3>2/5$ but $1/3\not>2/5$, the candidate is included in four of the six equally likely permutations, giving coverage $4/6=2/3\ge3/5$. This is consistent with [F3]. [F2, F3, step 1.2] ∎
