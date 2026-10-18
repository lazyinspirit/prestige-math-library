---
id: ex-countable-input-channel-finite-capacity-supremum-not-attained
kind: example
title: A finite information-capacity supremum need not be attained
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-countable-dmc-zero-cost-information-capacity, def-natural-logarithm, lem-finite-simplex-entropy-continuity-and-concavity]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the approximating sequence is explicitly indexed by positive integers.
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 5 §5.4, Example 5.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
---

## Example

Use the countable-input, binary-output, zero-cost DMC defined in [[def-countable-dmc-zero-cost-information-capacity]]. For $k\ge1$, put $\epsilon_k=1/(k+2)$ and specify the channel rows by
$$W(1\mid 2k)=\epsilon_k,\qquad W(1\mid 2k-1)=1-\epsilon_k.$$
The zero-cost information capacity is $C_I(0)=\ln2$, but no input law attains it.

## Facts & Assumptions

**Given:** The countable DMC definition, the explicit rows, and an arbitrary probability sequence $(p_x)_{x\ge1}$.

[F1] [[def-countable-dmc-zero-cost-information-capacity]]: $I(p;W)=H(Y)-\sum_xp_xH(W(\cdot\mid x))$ and every input law is feasible at zero cost.

[F2] [[lem-finite-simplex-entropy-continuity-and-concavity]]: binary entropy is continuous, concave on $[0,1]$, and symmetric about $1/2$.

[F3] [[def-natural-logarithm]]: logarithms use nats and $0\ln0=0$.

## Verification

1.1 Write $q_x=W(1\mid x)\in(0,1)$ and $r=\sum_xp_xq_x$. There is some $x_0$ with $p_{x_0}>0$, so $r\ge p_{x_0}q_{x_0}>0$ and $1-r\ge p_{x_0}(1-q_{x_0})>0$. The output entropy is $h_2(r)\le h_2(1/2)=\ln2$: concavity and symmetry in [F2] give $h_2(1/2)\ge\frac12h_2(r)+\frac12h_2(1-r)=h_2(r)$. Every row has entropy $h_2(q_x)>0$, and at least one term has positive weight, so $\sum_xp_xh_2(q_x)>0$. By [F1], $I(p;W)=h_2(r)-\sum_xp_xh_2(q_x)<\ln2$ for every input law. [F1, F2, F3, given, algebra]

1.2 For each $k$, choose the law assigning probability $1/2$ to $2k$ and $1/2$ to $2k-1$. Its output is uniform because the two row probabilities sum to one, while its conditional entropy is $h_2(\epsilon_k)$ by symmetry. Hence its mutual information is $\ln2-h_2(\epsilon_k)$. Since $\epsilon_k\downarrow0$ and binary entropy is continuous with $h_2(0)=0$ by [F2]–[F3], these values tend to $\ln2$. [F1, F2, F3, given, algebra]

2.1 Step 1.1 bounds every input law strictly below $\ln2$, while step 1.2 gives a sequence of feasible values tending to $\ln2$. Therefore the supremum is finite and equals $\ln2$, but no input law attains it. [step 1.1, step 1.2, algebra] ∎
