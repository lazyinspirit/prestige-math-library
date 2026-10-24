---
id: cex-an-index-one-moduli-space-can-be-infinite-without-compactness
kind: counterexample
title: "An index-one moduli locus can be infinite without compactness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-downward-gradient-like-vector-field, rem-noncompact-flow-completeness-is-an-extra-hypothesis]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kai Cieliebak and Urs Frauenfelder, Morse homology on noncompact manifolds, Introduction example"
      url: "https://arxiv.org/pdf/0911.1805"
---

## Statement refuted

Without a compactness hypothesis, discrete index-one Morse trajectory data are finite.

## Witness

Let $M=\coprod_{n\ge1}\mathbb R_n$ and on $\mathbb R_n$ put

$$f_n(x)=\frac n2(3x-x^3),\qquad p_n=1,\qquad q_n=-1.$$ 

Choose the locally normalized bounded downward-gradient-like field described by $X_n=2u\partial_u$ near $p_n$, $X_n=-2v\partial_v$ near $q_n$, and $X_n=-f_n'/(1+(f_n')^2)\,\partial_x$ away from those charts, patched by disjoint nonnegative bump functions.  It is complete.  Each component has one unparametrized trajectory from the index-one maximum $p_n$ to the index-zero minimum $q_n$; hence the global index-one locus is an infinite discrete union.

## Facts & Assumptions

**Given:** The above disjoint-union field, with the local Morse coordinates and bump-function patching specified in the example.

[F1] A downward gradient-like field has the stated exact local normal forms and strictly decreases $f$ off critical points ([[def-downward-gradient-like-vector-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Near $p_n$ and $q_n$ the displayed local fields are the required Morse normal forms; off them every patched summand has $df_n(X_n)<0$.  The coefficients are bounded on fixed supports and the outside coefficient has absolute value at most $1/2$, so every $X_n$ is complete. [F1, given]

2.1 On each line the interval $(-1,1)$ is one flow orbit from $p_n$ to $q_n$.  Thus $\mathcal M(p_n,q_n)$ is a singleton and hence is discrete, without any appeal to Morse--Smale transversality. [step 1.1]

3.1 Therefore $\mathcal M_1(X):=\coprod_{n\ge1}\mathcal M(p_n,q_n)$ is an infinite discrete set.  It refutes finiteness of the global index-one locus without a compactness condition, not finiteness for one fixed endpoint pair. [step 2.1] ∎
