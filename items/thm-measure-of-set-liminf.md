---
id: thm-measure-of-set-liminf
kind: theorem
title: "The measure of a set liminf is at most the liminf of the measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-from-below-for-measures, prop-measure-monotonicity, def-set-limsup-and-liminf, def-limsup-and-liminf-of-nonnegative-extended-sequences, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 8"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

For every sequence $(E_k)$ of measurable sets,

$$\mu\left(\liminf_{k\to\infty}E_k\right)\le\liminf_{k\to\infty}\mu(E_k),$$

where the numerical liminf is taken in $[0,+\infty]$ as in [[def-limsup-and-liminf-of-nonnegative-extended-sequences]].

## Facts & Assumptions

**Given:** A measure $\mu$ and a sequence $(E_k)$ of measurable sets.

[L1] For increasing measurable sets, the measure of the union is the supremum of their measures ([[thm-continuity-from-below-for-measures]]).

[L2] Measures are monotone under inclusion ([[prop-measure-monotonicity]]).

[L3] The set liminf is $\bigcup_N\bigcap_{k\ge N}E_k$ ([[def-set-limsup-and-liminf]]).

[L4] For a nonnegative extended sequence $(a_k)$, $\liminf_ka_k=\sup_N\inf_{k\ge N}a_k$ ([[def-limsup-and-liminf-of-nonnegative-extended-sequences]]), and all these bounds exist ([[lem-extended-reals-complete]]).

## Proof

**Proof technique:** direct.

1.1 Put $F_N:=\bigcap_{k\ge N}E_k$. Then $F_N\subseteq F_{N+1}$ and $\bigcup_NF_N=\liminf_kE_k$. [given, L3]

1.2 For every $N$ and every $k\ge N$, $F_N\subseteq E_k$, so $\mu(F_N)\le\mu(E_k)$ and hence $\mu(F_N)\le\inf_{k\ge N}\mu(E_k)$. [given, L2, L4]

2.1 Continuity from below and step 1.2 give $\mu(\liminf_kE_k)=\sup_N\mu(F_N)\le\sup_N\inf_{k\ge N}\mu(E_k)=\liminf_k\mu(E_k)$. [step 1.1, step 1.2, L1, L4] ∎

