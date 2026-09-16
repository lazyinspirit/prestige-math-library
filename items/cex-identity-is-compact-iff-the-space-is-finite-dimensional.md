---
id: cex-identity-is-compact-iff-the-space-is-finite-dimensional
kind: counterexample
title: Identity is compact iff the space is finite dimensional
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, thm-closed-unit-ball-compact-iff-finite-dimensional, def-linear-basis, def-linear-independence, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-square-summable-family-on-an-arbitrary-index-set, def-metric-ball, def-metric-compactness, thm-metric-closure-characterisation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.184, the identity is compact only in finite dimension"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1, examples and counterexamples for compactness"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement refuted

The false general statement is: the identity operator of every normed space is
compact. In fact, for a normed space $X$ over $\mathbb R$ or $\mathbb C$ the
identity $I_X$ is compact ([[def-compact-linear-operator]]) if and only if $X$
admits an ordered basis of finite length ([[def-linear-basis]]), and the
identity of the infinite-dimensional space
$\ell^2(\mathbb N,\mathbb K)$ is not compact
([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Facts & Assumptions

[A1] $I_X$ is compact exactly when $\overline{I_X(\overline B_X)}$ is compact, where $\overline B_X=\{x\in X:\|x\|\le1\}$ ([[def-compact-linear-operator]], [[def-metric-ball]]); the closed unit ball is closed, so $\overline{\overline B_X}=\overline B_X$ ([[thm-metric-closure-characterisation]], [[def-metric-compactness]]).

[A2] $\overline B_X$ is compact if and only if $X$ admits an ordered basis of finite length ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

[A3] In a vector space with a spanning subset of size $n$, every linearly independent subset is finite of size at most $n$ ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-linear-independence]]).

[A4] In $\ell^2(\mathbb N,\mathbb K)$ the standard vectors $e_k$ satisfy $\langle e_i,e_j\rangle=\delta_{ij}$ and $\|e_k\|_2=1$, and the pairing is $\langle a,b\rangle=\sum_n a_n\overline{b_n}$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Counterexample

**Proof technique:** direct.

**Given:** A normed space $X$ over $\mathbb R$ or $\mathbb C$, and the sequence space $\ell^2(\mathbb N,\mathbb K)$ with its standard vectors $e_k$.

1.1 $I_X$ is compact if and only if $\overline B_X$ is compact, because $I_X(\overline B_X)=\overline B_X$ is already closed. [A1]

1.2 In $\ell^2(\mathbb N,\mathbb K)$ the vectors $e_0,\dots,e_n$ are linearly independent for every $n$: if $\sum_{k\le n}c_ke_k=0$, then pairing with $e_j$ gives $c_j=\langle\sum_kc_ke_k,e_j\rangle=0$ for every $j\le n$. [A4]

2.1 Hence $I_X$ is compact if and only if $X$ admits an ordered basis of finite length, by [step 1.1] and [A2]. [step 1.1, A2]

2.2 The space $\ell^2(\mathbb N,\mathbb K)$ admits no ordered basis of finite length: if it admitted a spanning list of length $n$, then by [A3] every linearly independent subset would have at most $n$ elements, contradicting the independent list $e_0,\dots,e_n$ of [step 1.2] of length $n+1$. [step 1.2, A3]

3.1 Therefore the identity of $\ell^2(\mathbb N,\mathbb K)$ is not compact, by [step 2.1] and [step 2.2]; this is the promised witness, and [step 2.1] is the asserted equivalence. [step 2.1, step 2.2] ∎
