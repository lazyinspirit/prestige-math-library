---
id: thm-characteristic-and-minimal-polynomials-survive-complexification
kind: theorem
title: "Complexification preserves the characteristic and minimal polynomials of a finite-dimensional real operator"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-linear-map, thm-a-real-basis-complexifies-to-a-complex-basis, def-characteristic-polynomial-of-an-operator, thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant, lem-minimal-polynomial-is-invariant-under-field-extension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional real vector space and let $T_{\mathbb C}$ be its complexification. Then

$$\chi_{T_{\mathbb C}}=\chi_T,\qquad \mu_{T_{\mathbb C}}=\mu_T,$$

where the minimal polynomial of $T$ is regarded as an element of $\mathbb R[x]\subseteq\mathbb C[x]$.

## Facts & Assumptions

**Given:** An endomorphism $T$ of a finite-dimensional real vector space $V$.

[L1] A real ordered basis becomes an ordered complex basis after complexification ([[thm-a-real-basis-complexifies-to-a-complex-basis]]).

[L2] The complexification of a map is $T_{\mathbb C}(z\otimes v)=z\otimes T(v)$ ([[def-complexification-of-a-real-linear-map]]).

[L3] The characteristic polynomial of an operator is the characteristic polynomial of its matrix in any ordered basis, independent of the choice ([[def-characteristic-polynomial-of-an-operator]]).

[L4] An operator and its matrix in an ordered basis have the same minimal polynomial ([[thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant]]).

[L5] For a field extension $K/F$, a matrix $A\in M_n(F)$ has the same minimal polynomial over $F$ and over $K$ ([[lem-minimal-polynomial-is-invariant-under-field-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose an ordered real basis $\mathcal B=(v_1,\ldots,v_n)$ of $V$; by [L1], $(\iota v_1,\ldots,\iota v_n)$ is an ordered complex basis of $V_{\mathbb C}$, and by [L2] the matrix of $T_{\mathbb C}$ in it equals the matrix $A=[T]_{\mathcal B}$, because $T_{\mathbb C}(\iota v_j)=\iota Tv_j$. [L1, L2]

2.1 By [L3], $\chi_T$ is the characteristic polynomial of $A$ over $\mathbb R$ and $\chi_{T_{\mathbb C}}$ is the characteristic polynomial of the same matrix $A$ over $\mathbb C$; the two polynomials have the same coefficients, so $\chi_{T_{\mathbb C}}=\chi_T$. [step 1.1, L3]

2.2 By [L4], $\mu_T$ is the minimal polynomial of $A$ over $\mathbb R$ and $\mu_{T_{\mathbb C}}$ is the minimal polynomial of $A$ over $\mathbb C$. [step 1.1, L4]

3.1 By [L5] with $K=\mathbb C$ and $F=\mathbb R$, the minimal polynomial of $A$ is the same element of $\mathbb R[x]\subseteq\mathbb C[x]$ in both readings, so step 2.2 gives $\mu_{T_{\mathbb C}}=\mu_T$. [step 2.2, L5]

4.1 Steps 2.1 and 3.1 prove both claimed equalities. [step 2.1, step 3.1] ∎
