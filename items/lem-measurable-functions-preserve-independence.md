---
id: lem-measurable-functions-preserve-independence
kind: lemma
title: "Measurable coordinatewise functions preserve independence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-independent-random-elements, thm-rectangle-criterion-for-independent-random-elements, thm-composition-with-borel-functions-preserves-measurability]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.10"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 3.1"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(X_i)_{i\in I}$ be an independent family of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let
$g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family
$(g_i\circ X_i)_{i\in I}$ is independent.

## Facts & Assumptions

**Given:** Independent random elements $X_i$ and measurable maps $g_i$ as in
the Statement.

[L1] Measurable outer maps preserve measurability under composition.
([[thm-composition-with-borel-functions-preserves-measurability]])

[L2] Independence of random elements is equivalent to the rectangle criterion.
([[thm-rectangle-criterion-for-independent-random-elements]])

## Proof

**Proof technique:** direct.

1.1 By [L1], each composite $g_i\circ X_i$ is again a random element. [given, L1]

1.2 Fix a finite list of distinct indices $i_0,\dots,i_{n-1}$ and measurable sets $C_k\in\mathcal T_{i_k}$. Then $g_{i_k}^{-1}(C_k)\in\Sigma_{i_k}$ for every $k$, so [L2] applied to the independent family $(X_i)$ gives $$\mathbb P(g_{i_0}(X_{i_0})\in C_0,\dots,g_{i_{n-1}}(X_{i_{n-1}})\in C_{n-1})=\prod_{k<n}\mathbb P(g_{i_k}(X_{i_k})\in C_k).$$ [given, L2]

2.1 Step 1.2 is exactly the rectangle criterion for the family $(g_i\circ X_i)_{i\in I}$, so [L2] shows that this family is independent. [step 1.1, step 1.2, L2] ∎
