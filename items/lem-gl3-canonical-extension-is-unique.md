---
dependency_level: 1
id: lem-gl3-canonical-extension-is-unique
kind: lemma
title: "Uniqueness of a Distribution Extension Vanishing to Infinite Order"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]
proof_strategy: direct
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, Lemma 2.8"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

If two distributions on a neighborhood of $0$ agree on the punctured neighborhood and both vanish to the same fixed order $r\geq1$ at $0$ in the sense of the preceding definition, then they are equal.

## Statement references

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, Lemma 2.8](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** Two distributions $T_1,T_2$ that agree away from $0$ and vanish to a fixed order $r\geq1$ at $0$.

[F1] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]]: vanishing to order $r$ means that locally $T=x^r\sum_j x^{m_j}D^{m_j}f_j$ with each $f_j\in L^\infty$ and each $m_j\geq0$.

## Proof

**Proof technique:** direct.

1.1 Put $U=T_1-T_2$. Since the restrictions agree on the punctured neighborhood, $\operatorname{supp}U\subseteq\{0\}$. By [F1], on a smaller interval $U=x^r\sum_{j=1}^N x^{m_j}D^{m_j}f_j$ for finitely many bounded functions $f_j$. [given, F1, algebra]

2.1 Fix a smooth compactly supported test density $\psi$ in this interval, and choose $\phi\in C_c^\infty(\mathbb R)$ equal to $1$ near $0$. For $t>0$ small let $\phi_t(x)=\phi(x/t)$. Because $U$ is supported at $0$, $\langle U,\psi\rangle=\langle U,\phi_t\psi\rangle$. [given, step 1.1]

3.1 Pair the representation in step 1.1 with $\phi_t\psi$ and move each distributional derivative onto $x^{r+m_j}\phi_t\psi$. On the support of $\phi_t$, $|x|=O(t)$; a term with $p$ derivatives on $x^{r+m_j}$ and $q$ derivatives on $\phi_t$ has size $O(t^{r+m_j-p-q})=O(t^{r+u})$, where $p+q+u=m_j$ and $u$ derivatives fall on the fixed test function. Thus every differentiated factor is uniformly $O(t^r)$, while the support has length $O(t)$ and the $f_j$ are bounded. Hence $|\langle U,\phi_t\psi\rangle|=O(t^{r+1})\to0$. [step 1.1, step 2.1, algebra]

4.1 Therefore $\langle U,\psi\rangle=0$ for every test density $\psi$; so $U=0$ and $T_1=T_2$. [step 2.1, step 3.1] ∎

