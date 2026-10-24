---
id: thm-measure-of-set-limsup
kind: theorem
title: "The limsup of the measures is at most the measure of the set limsup under a finite-union bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-from-above-for-measures, prop-measure-monotonicity, def-set-limsup-and-liminf, def-limsup-and-liminf-of-nonnegative-extended-sequences, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 8"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Let $(E_k)$ be measurable and suppose $\mu(\bigcup_kE_k)<+\infty$. Then

$$\limsup_{k\to\infty}\mu(E_k)\le\mu\left(\limsup_{k\to\infty}E_k\right),$$

where the numerical limsup is taken in $[0,+\infty]$.

## Facts & Assumptions

**Given:** A measure $\mu$, measurable sets $(E_k)$, and $\mu(\bigcup_kE_k)<+\infty$.

[L1] For decreasing measurable sets, if one has finite measure, the measure of their intersection is the infimum of their measures ([[thm-continuity-from-above-for-measures]]).

[L2] Measures are monotone under inclusion ([[prop-measure-monotonicity]]).

[L3] The set limsup is $\bigcap_N\bigcup_{k\ge N}E_k$ ([[def-set-limsup-and-liminf]]).

[L4] For a nonnegative extended sequence $(a_k)$, $\limsup_ka_k=\inf_N\sup_{k\ge N}a_k$ ([[def-limsup-and-liminf-of-nonnegative-extended-sequences]]), and all these bounds exist ([[lem-extended-reals-complete]]).

## Proof

**Proof technique:** direct.

1.1 Put $G_N:=\bigcup_{k\ge N}E_k$. Then $G_{N+1}\subseteq G_N$, $\bigcap_NG_N=\limsup_kE_k$, and $G_0=\bigcup_kE_k$ has finite measure. [given, L3]

1.2 For every $N$ and $k\ge N$, $E_k\subseteq G_N$, so $\mu(E_k)\le\mu(G_N)$ and hence $\sup_{k\ge N}\mu(E_k)\le\mu(G_N)$. [given, L2, L4]

2.1 Continuity from above and step 1.2 give $\limsup_k\mu(E_k)=\inf_N\sup_{k\ge N}\mu(E_k)\le\inf_N\mu(G_N)=\mu(\limsup_kE_k)$. [step 1.1, step 1.2, L1, L4] ∎

