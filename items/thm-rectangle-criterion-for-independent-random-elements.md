---
id: thm-rectangle-criterion-for-independent-random-elements
kind: theorem
title: "Independent random elements are characterized by finite rectangle probabilities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-independent-random-elements, def-pi-system, thm-pi-system-criterion-for-independent-sigma-algebras]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.8"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Lemma 3.1"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(X_i)_{i\in I}$ be random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. Then the following are
equivalent:

1. the family $(X_i)_{i\in I}$ is independent;
2. for every natural number $n\ge1$, every choice of distinct indices
   $i_0,\dots,i_{n-1}\in I$, and every choice of measurable sets
   $B_k\in\Sigma_{i_k}$,
   $$\mathbb P\bigl(X_{i_0}\in B_0,\dots,X_{i_{n-1}}\in B_{n-1}\bigr)=\prod_{k<n}\mathbb P(X_{i_k}\in B_k).$$

## Facts & Assumptions

**Given:** Random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$.

[L1] A family of random elements is independent exactly when the sigma-algebras
$\sigma(X_i)$ are independent. ([[def-independent-random-elements]])

[L2] Independent pi-systems containing the whole space generate independent
sigma-algebras.
([[thm-pi-system-criterion-for-independent-sigma-algebras]])

## Proof

**Proof technique:** direct.

1.1 If $(X_i)_{i\in I}$ is independent, then by [L1] the sigma-algebras $\sigma(X_i)$ are independent. Since $X_i^{-1}(B)\in\sigma(X_i)$ for every $B\in\Sigma_i$, the displayed rectangle identity follows immediately. [L1]

1.2 Conversely, for each $i$ let $\Pi_i:=\{X_i^{-1}(B):B\in\Sigma_i\}\subseteq\mathcal F$. Preimages preserve finite intersections, so each $\Pi_i$ is a pi-system containing $\Omega$. The hypothesis in clause 2 says exactly that the family $(\Pi_i)_{i\in I}$ is independent. Since $\sigma(\Pi_i)=\sigma(X_i)$ by definition, [L2] implies that the sigma-algebras $\sigma(X_i)$ are independent. [given, L2]

2.1 Step 1.2 proves clause 2 implies clause 1, and step 1.1 proves the reverse implication. Therefore the two conditions are equivalent. [step 1.1, step 1.2] ∎
