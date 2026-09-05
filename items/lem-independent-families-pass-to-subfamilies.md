---
id: lem-independent-families-pass-to-subfamilies
kind: lemma
title: "Independent families pass to subfamilies"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-independent-families-of-event-classes]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(\mathcal C_i)_{i\in I}$ be an independent family of event classes on a
probability space, and let $J\subseteq I$. Then the subfamily
$(\mathcal C_j)_{j\in J}$ is independent.

## Facts & Assumptions

**Given:** An independent family $(\mathcal C_i)_{i\in I}$ and a subset
$J\subseteq I$.

[L1] Independence means that every finite choice of distinct indices and one
event from each chosen class satisfies the product formula
([[def-independent-families-of-event-classes]]).

## Proof

**Proof technique:** direct.

1.1 Fix a natural number $n\ge1$, distinct indices $j_0,\dots,j_{n-1}\in J$, and events $A_k\in\mathcal C_{j_k}$. Since $J\subseteq I$, this is also a valid finite choice inside the original family. [given, L1]

2.1 Applying [L1] to that same finite choice gives $$\mathbb P\left(\bigcap_{k<n}A_k\right)=\prod_{k<n}\mathbb P(A_k).$$ Hence the restricted family is independent. [step 1.1, L1] ∎
