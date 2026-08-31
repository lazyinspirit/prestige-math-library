---
id: cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing
kind: counterexample
title: "An ordered eigenvector branch need not extend differentiably through an eigenvalue crossing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement refuted

An eigenvector branch chosen by ordering eigenvalues can always be continued
differentiably through a crossing.

The family

$$A(t)=\begin{pmatrix}t&0\\0&-t\end{pmatrix}$$

shows otherwise: the eigendirection belonging to the larger eigenvalue is
$\operatorname{span}\{e_1\}$ for $t>0$ and $\operatorname{span}\{e_2\}$ for
$t<0$.

## Facts & Assumptions

**Given:** The symmetric family
$A(t)=\begin{pmatrix}t&0\\0&-t\end{pmatrix}$.

[L1] Simple eigenpair branches exist locally only while the eigenvalue stays
simple ([[thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]]).

## Counterexample
**Proof technique:** direct.

1.1 For $t>0$, the larger eigenvalue is $t$ with eigendirection $\operatorname{span}\{e_1\}$. For $t<0$, the larger eigenvalue is $-t$ with eigendirection $\operatorname{span}\{e_2\}$. At $t=0$, the eigenvalue $0$ has multiplicity $2$. [algebra]

2.1 Any branch chosen by ordering the eigenvalues by size must jump from $\operatorname{span}\{e_2\}$ on the left to $\operatorname{span}\{e_1\}$ on the right, so it is not even continuous, let alone differentiable, through the crossing. This agrees with [L1], which applies only on the simple-spectrum locus. [L1, step 1.1] ∎