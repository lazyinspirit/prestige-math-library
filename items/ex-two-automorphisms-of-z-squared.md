---
id: ex-two-automorphisms-of-z-squared
kind: example
title: ' A shear and a quarter-turn exhibit noncommuting automorphisms of $\mathbb Z^2$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-automorphisms-of-a-finite-rank-free-abelian-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The integer arrays

$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

define automorphisms of $\mathbb Z^2$ that do not commute.

## Facts & Assumptions

**Given:** The two displayed integer arrays.

[L1] Automorphisms of $\mathbb Z^2$ correspond to invertible two-by-two integer arrays, and composition corresponds to array multiplication ([[thm-automorphisms-of-a-finite-rank-free-abelian-group]]).

## Verification

**Proof technique:** direct.

1.1 Integer inverses are $A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ and $B^{-1}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Thus both arrays define automorphisms by [L1]. [L1, algebra]

2.1 Direct multiplication gives $AB=\begin{pmatrix}1&-1\\1&0\end{pmatrix}$ and $BA=\begin{pmatrix}0&-1\\1&1\end{pmatrix}$. They differ, so the corresponding automorphisms do not commute. [step 1.1, L1, algebra] ∎
