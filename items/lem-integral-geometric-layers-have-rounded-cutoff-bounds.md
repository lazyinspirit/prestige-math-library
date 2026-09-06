---
id: lem-integral-geometric-layers-have-rounded-cutoff-bounds
kind: lemma
title: "Integral geometric layers exist, cover the partition, and retain the required cutoff bounds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integral-geometric-layers-of-a-decreasing-block-partition, thm-real-power-laws, lem-rational-power-monotone, thm-real-power-agrees-with-rational-exponent, thm-of-archimedean, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, proof of Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

For the integral geometric layers of a decreasing partition with $t\ge\ell\ge4$,
the integer $q$ exists, the layers are nonempty and partition
$(A_1,\ldots,A_t)$, and for every $1\le r\le q$,
$$\ell^{r/4}\le m_r\le\ell^{r/2}.$$

## Facts & Assumptions

**Given:** $t\ge\ell\ge4$ and the integral cutoffs $m_r$ and layers $C_r$.

[F1] Each $m_r$ is the largest integer at most both $t$ and $\ell^{r/2}$, and $q$ is the least index with $m_q=t$ ([[def-integral-geometric-layers-of-a-decreasing-block-partition]]).

[F2] Positive real powers satisfy $(a^r)^s=a^{rs}$ ([[thm-real-power-laws]]).

[F3] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Choose an integer $N>t$; then $\ell^{N/2}\ge2^{N/2}>t$, so $m_N=t$ by [F1]. Thus the set of indices attaining $t$ is nonempty, and [F3] supplies the least one $q$. [F1, F3, algebra]

1.2 The upper bound $m_r\le\ell^{r/2}$ is part of [F1]. First let $r<q$ and write $x:=\ell^{r/2}\ge2$. Then $m_r<t$, so maximality in [F1] gives $x<m_r+1$. If $m_r<\sqrt x$, then $m_r^2<x<m_r+1$; but $m_r\ge2$ and $m_r^2\ge m_r+1$, a contradiction. Thus $m_r\ge\sqrt x=\ell^{r/4}$ by [F2]. For the terminal cutoff, $m_1\le\sqrt\ell<\ell\le t$, so $q\ge2$. Put $y:=\ell^{(q-1)/2}$. Since $m_{q-1}<t$ and $m_{q-1}$ is the largest integer at most $y$, integrality gives $t\ge m_{q-1}+1>y\ge\ell^{q/4}$. Hence $m_q=t\ge\ell^{q/4}$ as well. [F1, F2, assume-contra, discharge-contradiction, algebra]

2.1 Fix $2\le r\le q$. Minimality of $q$ gives $m_{r-1}<t$. Put $x=\ell^{(r-1)/2}\ge1$. Since $m_{r-1}\le x$ and $\ell^{r/2}=\sqrt\ell\,x\ge2x\ge x+1$, the integer $m_{r-1}+1$ is at most both $t$ and $\ell^{r/2}$. It is therefore admissible in the maximum defining $m_r$, so $m_r\ge m_{r-1}+1$. Also $m_1\ge1$; hence every layer is nonempty and the successive index intervals cover exactly $[t]$. [F1, step 1.1, algebra]

3.1 Steps 1.1--2.1 prove existence, coverage, nonemptiness, and both cutoff bounds. [step 1.1, step 2.1, step 1.2] ∎
