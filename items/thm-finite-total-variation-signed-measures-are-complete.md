---
id: thm-finite-total-variation-signed-measures-are-complete
kind: theorem
title: "Finite-total-variation signed measures are complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-space-of-finite-total-variation-signed-measures, thm-finite-total-variation-signed-measures-form-a-real-normed-space, thm-continuity-from-above-for-measures, thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Theorem 9.14"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Fix a measurable space $(X,\mathcal A)$. The normed space
$\mathcal M(X,\mathcal A)$ of finite-total-variation signed measures is
complete.

## Facts & Assumptions

**Given:** A Cauchy sequence $(\nu_n)$ in $\mathcal M(X,\mathcal A)$.

[L1] The norm on $\mathcal M(X,\mathcal A)$ is $\|\nu\|=|\nu|(X)$. ([[def-the-space-of-finite-total-variation-signed-measures]], [[thm-finite-total-variation-signed-measures-form-a-real-normed-space]])

[L2] If $|\rho|(X)$ is finite, then $|\rho(E)|\le |\rho|(E)\le |\rho|(X)$ for every measurable $E$. ([[thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]])

[L3] Positive measures are continuous from above on decreasing measurable sets once one term has finite measure. ([[thm-continuity-from-above-for-measures]])

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], for every measurable $E$ the scalar sequence $(\nu_n(E))$ is Cauchy in $\mathbb R$, because $$|\nu_n(E)-\nu_m(E)|\le |\nu_n-\nu_m|(X)=\|\nu_n-\nu_m\|.$$ Define $\nu(E):=\lim_n \nu_n(E)$. [L1, L2]

2.1 Let $(E_k)$ be pairwise disjoint and put $E=\bigcup_k E_k$. Fix $\varepsilon>0$. Choose $m$ so that $\|\nu_n-\nu_m\|<\varepsilon$ for all $n\ge m$. Because $|\nu_m|$ is a finite positive measure, [L3] gives $|\nu_m|(\bigcup_{k\ge N}E_k)\to0$, so choose $N$ with that tail below $\varepsilon$. Then for $n\ge m$, $$\left|\nu_n(E)-\sum_{k=0}^{N-1}\nu_n(E_k)\right|=\left|\nu_n\left(\bigcup_{k\ge N}E_k\right)\right|\le \|\nu_n-\nu_m\|+|\nu_m|\left(\bigcup_{k\ge N}E_k\right)<2\varepsilon.$$ Passing $n\to\infty$ gives $$\left|\nu(E)-\sum_{k=0}^{N-1}\nu(E_k)\right|\le2\varepsilon,$$ so $\nu(E)=\sum_k \nu(E_k)$. Thus $\nu$ is a signed measure. [L1, L2, L3, step 1.1]

3.1 For any countable measurable partition $(A_j)$ of a measurable set $F$, Fatou's lemma for nonnegative series gives $$\sum_j |\nu(A_j)|\le \liminf_{n\to\infty}\sum_j |\nu_n(A_j)|\le \sup_n |\nu_n|(F),$$ so $|\nu|(F)<+\infty$ and therefore $\nu\in\mathcal M(X,\mathcal A)$. Likewise, for fixed $n$ and any partition $(A_j)$ of $X$, $$\sum_j |\nu_n(A_j)-\nu(A_j)|\le \liminf_{m\to\infty}\sum_j |\nu_n(A_j)-\nu_m(A_j)|\le \liminf_{m\to\infty}\|\nu_n-\nu_m\|.$$ Taking the supremum over partitions gives $$\|\nu_n-\nu\|\le \liminf_{m\to\infty}\|\nu_n-\nu_m\|,$$ and the right side tends to $0$ because $(\nu_n)$ is Cauchy. [L1, step 1.1, step 2.1]

4.1 Step 3.1 shows that $\nu_n\to\nu$ in norm, so every Cauchy sequence in $\mathcal M(X,\mathcal A)$ converges there. [step 3.1] ∎
