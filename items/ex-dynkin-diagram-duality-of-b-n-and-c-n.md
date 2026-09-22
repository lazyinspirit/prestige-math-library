---
id: ex-dynkin-diagram-duality-of-b-n-and-c-n
kind: example
title: Dynkin duality of B_n and C_n
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, ex-classical-root-systems-in-euclidean-coordinates, def-cartan-matrix-of-a-based-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Example 21.18; Lecture 23, Example 23.5"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

For $n\ge2$, the $B_n$ and $C_n$ diagrams have the same underlying chain and opposite
arrows on the unique double edge; transposing the Cartan matrix exchanges
them.

## Facts & Assumptions

**Given:** An integer $n\ge2$; the simple roots of $B_n$: $\alpha_1=\varepsilon_1-\varepsilon_2,\dots,\alpha_{n-1}=\varepsilon_{n-1}-\varepsilon_n,\alpha_n=\varepsilon_n$; and of $C_n$: $\beta_1=\varepsilon_1-\varepsilon_2,\dots,\beta_{n-1}=\varepsilon_{n-1}-\varepsilon_n,\beta_n=2\varepsilon_n$.

[L1] The Cartan matrix entry is $a_{ij}=2(\alpha_j,\alpha_i)/(\alpha_i,\alpha_i)$, and the diagram has $a_{ij}a_{ji}$ edges with the arrow toward the shorter root ([[def-cartan-matrix-of-a-based-root-system]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L2] Coroot duality transposes the Cartan matrix, and the dual system of $B_n$ is $C_n$ ([[prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types]]).

## Verification

**Proof technique:** direct.

1.1 For $B_n$: $|\alpha_i|^{2}=2$ for $i<n$ and $|\alpha_n|^{2}=1$; $(\alpha_{n-1},\alpha_n)=-1$, so $a_{n-1,n}=2(-1)/2=-1$ and $a_{n,n-1}=2(-1)/1=-2$; all other off-diagonal entries of adjacent pairs are $-1$ and the rest vanish. Thus the diagram is a chain with a double edge at the end, the arrow being governed by $|a_{n,n-1}|=2>|a_{n-1,n}|=1$ and pointing toward the shorter root $\alpha_n$. [L1, algebra]

1.2 For $C_n$: $|\beta_i|^{2}=2$ for $i<n$ and $|\beta_n|^{2}=4$; $(\beta_{n-1},\beta_n)=-2$, so $a_{n-1,n}=2(-2)/2=-2$ and $a_{n,n-1}=2(-2)/4=-1$; the diagram is again a chain with a double edge exactly at the end, and the arrow now points toward the shorter root $\beta_{n-1}$. [L1, algebra]

2.1 The matrices of steps 1.1 and 1.2 are transposes of one another, which is exactly coroot duality by [L2]; so transposing the Cartan matrix exchanges $B_n$ and $C_n$, reversing the arrow while keeping the chain and the double-edge position. [L2, step 1.1, step 1.2, algebra] ∎
