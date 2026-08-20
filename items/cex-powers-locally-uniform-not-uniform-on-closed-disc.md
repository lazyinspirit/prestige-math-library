---
id: cex-powers-locally-uniform-not-uniform-on-closed-disc
kind: counterexample
title: "$z^n$ tends locally uniformly to zero on the unit disc but not uniformly on the closed disc"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The compact-set estimate must include the empty compact set and must prove the maximum modulus is strictly below one."
  counterexample_search: "Checked empty and singleton compact subsets, the index n=0, and the boundary point z=1; the witness has the claimed local convergence and fails even pointwise at the boundary."
deps: [rem-locally-uniform-convergence-dictionary, lem-geometric-sequence-null, thm-extreme-value-metric, def-uniform-convergence-of-complex-valued-functions, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §5.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, §2.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** Local uniform convergence on the open unit disc forces uniform convergence on the closed unit disc.

For $f_n(z)=z^n$, the sequence $(f_n)$ converges locally uniformly to $0$ on $\mathbb D=\{z:|z|<1\}$, but it does not converge to $0$ uniformly, or even pointwise, on $\overline{\mathbb D}$.

## Facts & Assumptions

**Given:** The functions $f_n(z)=z^n$ and the local-uniform convention of [[rem-locally-uniform-convergence-dictionary]].

[L1] A continuous real-valued function on a nonempty compact metric space is bounded and attains a maximum ([[thm-extreme-value-metric]]).

[L2] If a real $q$ satisfies $|q|<1$, then $q^n\to0$ ([[lem-geometric-sequence-null]]).

[L3] Uniform convergence to zero requires that for every $\varepsilon>0$, all sufficiently late functions have modulus below $\varepsilon$ at every point of the domain ([[def-uniform-convergence-of-complex-valued-functions]]).

[L4] Complex modulus satisfies $||z|-|w||\le|z-w|$, so $z\mapsto|z|$ is continuous ([[lem-complex-conjugation-and-modulus-laws]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $K\subseteq\mathbb D$ be compact. If $K=\varnothing$, uniform convergence on $K$ is vacuous. Otherwise [L4] and [L1] give $q=\max_{z\in K}|z|$, and $q<1$ because the maximum is attained at a point of $K\subseteq\mathbb D$; then $|f_n(z)|=|z|^n\le q^n\to0$ by [L2], uniformly for $z\in K$. [L1, L2, L4]

1.2 At the boundary point $z=1$, one has $f_n(1)=1$ for every natural $n$, including $n=0$, so the sequence does not converge pointwise to zero there and fails the uniform condition [L3] on $\overline{\mathbb D}$. [L3, algebra]

2.1 Step 1.1 proves local uniform convergence on the open disc, while step 1.2 proves failure on its closure, so the claimed implication is false. [step 1.1, step 1.2] ∎
