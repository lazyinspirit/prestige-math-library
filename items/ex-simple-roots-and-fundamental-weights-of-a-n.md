---
id: ex-simple-roots-and-fundamental-weights-of-a-n
kind: example
title: Simple roots and fundamental weights of A_n
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fundamental-weights, ex-classical-root-systems-in-euclidean-coordinates, thm-existence-of-each-classified-root-system, def-coroot-and-dual-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 21, Example 21.18 and Section 21.6"
landmark: false
proof_strategy: direct
---

## Example

For $A_n$ realized in the sum-zero subspace
$E=\{x\in\mathbb R^{n+1}:\sum_ix_i=0\}$ the simple roots are
$\alpha_i=e_i-e_{i+1}$, $1\le i\le n$, and the fundamental weights are
$$\omega_k=e_1+\cdots+e_k-\frac{k}{n+1}\sum_{i=1}^{n+1}e_i,\qquad 1\le k\le n .$$

## Facts & Assumptions

**Given:** The model $A_n=\{\varepsilon_i-\varepsilon_j:i\ne j\}$ in the sum-zero subspace of $\mathbb R^{n+1}$, with simple roots $\alpha_i=e_i-e_{i+1}$ and the vectors $\omega_k$ displayed.

[L1] In this model $A_n$ is a reduced crystallographic root system with simple roots $\alpha_i=e_i-e_{i+1}$ ([[ex-classical-root-systems-in-euclidean-coordinates]], [[thm-existence-of-each-classified-root-system]]).

[L2] The coroot of $\alpha$ is $\alpha^{\vee}=2\alpha/(\alpha,\alpha)$ and the fundamental weights are the vectors dual to the simple coroots, $(\omega_k,\alpha_i^{\vee})=\delta_{ki}$ ([[def-fundamental-weights]], [[def-coroot-and-dual-root-system]]).

## Verification

**Proof technique:** direct.

1.1 $(\alpha_i,\alpha_i)=2$ and $\alpha_i^{\vee}=\alpha_i$, since $\alpha_i$ has two nonzero coordinates equal to $\pm1$. [L1, L2, algebra]

2.1 For every $i,k$ one has $(\omega_k,\alpha_i)=(\omega_k,e_i)-(\omega_k,e_{i+1})$; the vector $\omega_k$ has coordinates $1-k/(n+1)$ in positions $1,\dots,k$ and $-k/(n+1)$ in positions $k+1,\dots,n+1$, so the difference equals $1$ when $i=k$ and $0$ otherwise. Hence $(\omega_k,\alpha_i^{\vee})=\delta_{ki}$ and the displayed vectors are the fundamental weights of $A_n$; they form a basis of the weight lattice by [L2]. [L2, step 1.1, algebra] ∎
