---
id: thm-szemeredi-regularity-lemma-with-tower-bound
kind: theorem
title: "Szemerédi regularity lemma with an equitable partition and an explicit tower-type upper bound for graphs of order at least $m_0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-energy-increment-for-an-irregular-partition, lem-energy-is-monotone-under-refinement, def-regular-and-equitable-vertex-partition, def-energy-of-a-vertex-partition]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.1.20"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

Let $0<\epsilon<1$ and let $m_0\ge1$. Define
$$m_{r+1}=m_r\left\lceil\epsilon^{-5}2^{m_r+5}\right\rceil,\qquad R=\lceil2\epsilon^{-5}\rceil,\qquad M=m_R.$$
Every graph $G$ of order $n\ge M$ has an equitable $\epsilon$-regular vertex partition into $k$ parts with
$$m_0\le k\le M.$$
In particular, the displayed recurrence is a tower-type upper bound depending only on $\epsilon$ and $m_0$.

## Facts & Assumptions

**Given:** Parameters $\epsilon,m_0$ and a graph $G$ as in the Statement.

[L1] A non-$\epsilon$-regular $k$-part partition has a refinement of at most $k2^{k+1}$ parts whose energy gains more than $\epsilon^5$ ([[lem-energy-increment-for-an-irregular-partition]]).

[L2] Partition energy lies in $[0,1]$ and is nondecreasing under refinement ([[lem-energy-is-monotone-under-refinement]]).

[L3] An equitable partition has part sizes differing by at most one, and regularity is measured by the total weight of its irregular ordered pairs ([[def-regular-and-equitable-vertex-partition]]).

[L4] $q(\mathcal P)=n^{-2}\sum_{A,B\in\mathcal P}|A||B|d(A,B)^2$, a sum over ordered pairs of parts with nonnegative weights $|A||B|/n^2$ and densities in $[0,1]$ ([[def-energy-of-a-vertex-partition]]).

## Proof

**Proof technique:** direct.

1.1 Each factor $\lceil\epsilon^{-5}2^{m_r+5}\rceil$ is at least $1$, so $m_0\le m_1\le\cdots\le m_R=M\le n$. Choose an equitable partition $\mathcal P_0$ of $V(G)$ into exactly $m_0$ nonempty parts, whose sizes are then $\lfloor n/m_0\rfloor$ or $\lceil n/m_0\rceil$; this is possible because $n\ge M\ge m_0$. [given, L3, algebra, choose]

1.2 *Equitisation.* Let $\mathcal P$ be equitable with $k$ parts, let $\mathcal R$ refine $\mathcal P$ with at most $K=k2^{k+1}$ parts, put $p=\lceil\epsilon^{-5}2^{k+5}\rceil$, and suppose $kp\le n$. Order $V(G)$ so that each part of $\mathcal P$ is an interval and each cell of $\mathcal R$ is an interval inside its part, and cut each part $X$ into $p$ consecutive pieces of sizes $\lfloor|X|/p\rfloor$ or $\lceil|X|/p\rceil$. Writing $a=\lfloor n/k\rfloor$ and $t=\lfloor a/p\rfloor\ge1$, every piece has size $t$ or $t+1$, because $|X|\in\{a,a+1\}$ forces $\lfloor|X|/p\rfloor\ge t$ and $\lceil|X|/p\rceil\le t+1$. So the resulting $\mathcal P'$ is an equitable refinement of $\mathcal P$ with exactly $kp$ parts. [given, L3, algebra, construct]

2.1 Call a piece *dirty* when it is not contained in a single cell of $\mathcal R$, and let $D$ be the union of the dirty pieces. A piece is dirty exactly when it contains a boundary between two consecutive $\mathcal R$-cells of the same part, and each of the at most $K-k$ such boundaries lies in one piece, so there are at most $K$ dirty pieces. Each has size at most $\lceil|X|/p\rceil\le2|X|/p\le4n/(kp)$, using $p\le|X|$ and $|X|\le\lceil n/k\rceil\le2n/k$. Hence $|D|\le4Kn/(kp)=2^{k+3}n/p\le\epsilon^5n/4$. [step 1.2, algebra]

3.1 *Energy loss.* Let $\mathcal S$ be the common refinement of $\mathcal P'$ and $\mathcal R$. It refines $\mathcal R$, so $q(\mathcal S)\ge q(\mathcal R)$ by [L2]. Every piece outside $D$ lies in one $\mathcal R$-cell and is therefore itself a cell of $\mathcal S$, so in the sums of [L4] the two energies agree term by term on ordered pairs of such pieces. Every other ordered pair has an entry inside $D$, and those pairs carry total weight at most $2|D|n/n^2=2|D|/n$; since each squared density lies in $[0,1]$, their contribution to each of $q(\mathcal S)$ and $q(\mathcal P')$ lies in $[0,2|D|/n]$. Hence $q(\mathcal P')\ge q(\mathcal S)-2|D|/n\ge q(\mathcal R)-\epsilon^5/2$. [step 2.1, L2, L4, algebra]

4.1 *One round.* Suppose $\mathcal P_r$ is equitable, refines $\mathcal P_0$, has $k_r$ parts with $m_0\le k_r\le m_r$, and is not $\epsilon$-regular. Apply [L1] to obtain a refinement $\mathcal R_r$ with at most $k_r2^{k_r+1}$ parts and $q(\mathcal R_r)>q(\mathcal P_r)+\epsilon^5$, and let $\mathcal P_{r+1}$ be the partition step 1.2 builds from $\mathcal P_r$ and $\mathcal R_r$ with $p_r=\lceil\epsilon^{-5}2^{k_r+5}\rceil$. Its hypothesis $k_rp_r\le n$ holds because $k_r\le m_r$ makes $k_rp_r\le m_{r+1}\le M\le n$. So $\mathcal P_{r+1}$ is equitable, refines $\mathcal P_r$ and hence $\mathcal P_0$, has $k_{r+1}=k_rp_r$ parts with $m_0\le k_r\le k_{r+1}\le m_{r+1}$, and step 3.1 gives $q(\mathcal P_{r+1})>q(\mathcal P_r)+\epsilon^5/2$. [step 1.1, step 1.2, step 3.1, L1, induction]

5.1 If none of $\mathcal P_0,\ldots,\mathcal P_{R-1}$ were $\epsilon$-regular, iterating step 4.1 would produce $\mathcal P_R$ with $q(\mathcal P_R)>q(\mathcal P_0)+R\epsilon^5/2\ge2\epsilon^{-5}\cdot\epsilon^5/2=1$, contradicting the bound $q\le1$ of [L2]. [step 4.1, L2, induction, algebra]

6.1 Hence some $\mathcal P_r$ with $r<R$ is $\epsilon$-regular, and step 4.1 makes it equitable with $k_r$ parts satisfying $m_0\le k_r\le m_r\le M$. That is the asserted partition. [step 4.1, step 5.1, L3] ∎
