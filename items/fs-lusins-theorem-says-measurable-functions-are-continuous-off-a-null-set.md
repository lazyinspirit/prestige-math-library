---
id: fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set
kind: false-statement
title: "FALSE: assuming countable choice, Lusin's theorem says measurable functions are continuous off a null set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-lusins-theorem, lem-q-and-irrationals-dense-r]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 5.16"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice.

Lusin's theorem says measurable functions are continuous off a null set.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Dirichlet function $D:=\mathbf 1_{\mathbb Q \cap [0,1]} : [0,1] \to \mathbb R$.

[L1] Assuming countable choice, Lusin's theorem provides large closed sets on which a measurable real-valued function is continuous. ([[thm-lusins-theorem]])

[L2] Both the rationals and the irrationals are dense in $\mathbb R$. ([[lem-q-and-irrationals-dense-r]])

## Refutation

**Proof technique:** direct.

1.1 The function $D$ is measurable and, by [L1], for every $\varepsilon>0$ there is a closed set $F \subseteq [0,1]$ with $\lambda([0,1]\setminus F)<\varepsilon$ such that $D|_F$ is continuous. [L1]

1.2 Fix $x \in [0,1]$. By [L2], every neighbourhood of $x$ contains both a rational point $q$ and an irrational point $u$. Then $D(q)=1$ and $D(u)=0$, so $D$ is not continuous at $x$. Thus $D$ is nowhere continuous on $[0,1]$. [L2]

2.1 Step 1.1 is exactly Lusin's conclusion, while step 1.2 shows that no null set deletion can make $D$ continuous at the remaining points as a function on $[0,1]$. So the stated reading of Lusin's theorem is false. [step 1.1, step 1.2] ∎
