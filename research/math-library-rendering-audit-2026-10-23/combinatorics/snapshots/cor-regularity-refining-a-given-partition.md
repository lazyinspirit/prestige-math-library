---
id: cor-regularity-refining-a-given-partition
kind: corollary
title: "A prescribed finite vertex partition has a bounded $\\epsilon$-regular refinement, equitable when the initial partition is equitable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-energy-increment-for-an-irregular-partition, lem-energy-is-monotone-under-refinement, def-regular-and-equitable-vertex-partition, def-energy-of-a-vertex-partition, def-epsilon-regular-pair]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.1.19 and Theorem 2.1.20"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

For every $0<\epsilon<1$ and $k_0\ge1$ there is $K=K(\epsilon,k_0)$ such that every partition $\mathcal P_0$ of a finite graph into at most $k_0$ nonempty parts has an $\epsilon$-regular refinement $\mathcal P$ into at most $K$ parts. If $\mathcal P_0$ is equitable, $\mathcal P$ may also be chosen equitable.

## Facts & Assumptions

**Given:** $\epsilon,k_0$, a finite graph, and a partition $\mathcal P_0$ as in the Statement.

[L1] Every nonregular $k$-part partition has a refinement with at most $k2^{k+1}$ parts and energy gain greater than $\epsilon^5$ ([[lem-energy-increment-for-an-irregular-partition]]).

[L2] Energy is nondecreasing under refinement and at most $1$ ([[lem-energy-is-monotone-under-refinement]]).

[L3] An equitable partition has part sizes differing by at most one; a partition is $\epsilon$-regular when its irregular ordered pairs carry total weight at most $\epsilon n^2$; and the empty family, the unique partition of the null graph, is equitable and $\epsilon$-regular by convention ([[def-regular-and-equitable-vertex-partition]]).

[L4] $q(\mathcal P)=n^{-2}\sum_{A,B\in\mathcal P}|A||B|d(A,B)^2$, a sum over ordered pairs of parts with nonnegative weights $|A||B|/n^2$ and densities in $[0,1]$ ([[def-energy-of-a-vertex-partition]]).

[L5] $(X,Y)$ is $\epsilon$-regular when every $A\subseteq X$ and $B\subseteq Y$ with $|A|\ge\epsilon|X|$ and $|B|\ge\epsilon|Y|$ satisfies $|d(A,B)-d(X,Y)|\le\epsilon$ ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** direct.

1.1 *Arbitrary refinement.* Starting from $\mathcal P_0$, apply [L1] whenever the current partition is not $\epsilon$-regular; each application raises the energy by more than $\epsilon^5$ and replaces the part-count bound $k$ by $k2^{k+1}$. By [L2] the energy lies in $[0,1]$, so at most $\lceil\epsilon^{-5}\rceil$ applications occur, and iterating that map $\lceil\epsilon^{-5}\rceil$ times from $k_0$ bounds the number of parts of the resulting $\epsilon$-regular refinement of $\mathcal P_0$. [given, L1, L2, induction, algebra]

1.2 *Constants for the equitable case.* Put $K_0=k_0$, $K_{r+1}=K_r\lceil\epsilon^{-5}2^{K_r+5}\rceil$, $R=\lceil2\epsilon^{-5}\rceil$, and $T=K_R$. Each factor is at least $1$, so $K_0\le K_1\le\cdots\le K_R=T$. [given, algebra, choose]

2.1 *Small graphs.* Assume $\mathcal P_0$ is equitable and $n<T$. The partition of $V(G)$ into singletons refines $\mathcal P_0$, is equitable, and has $n<T$ parts. It is $\epsilon$-regular: the only subset of a singleton with at least $\epsilon$ times its size is the singleton itself, so every pair of singletons has density difference $0$ in [L5]; for $n=0$ the convention in [L3] gives the same conclusion. [step 1.2, L3, L5]

2.2 *Equitisation.* Let $\mathcal P$ be equitable with $k$ parts, let $\mathcal R$ refine $\mathcal P$ with at most $K=k2^{k+1}$ parts, put $p=\lceil\epsilon^{-5}2^{k+5}\rceil$, and suppose $kp\le n$. Order $V(G)$ so that each part of $\mathcal P$ is an interval and each cell of $\mathcal R$ is an interval inside its part, and cut each part $X$ into $p$ consecutive pieces of sizes $\lfloor|X|/p\rfloor$ or $\lceil|X|/p\rceil$. Writing $a=\lfloor n/k\rfloor$ and $t=\lfloor a/p\rfloor\ge1$, the sizes $|X|\in\{a,a+1\}$ force $\lfloor|X|/p\rfloor\ge t$ and $\lceil|X|/p\rceil\le t+1$, so every piece has size $t$ or $t+1$ and the result $\mathcal P'$ is an equitable refinement of $\mathcal P$ with exactly $kp$ parts. [step 1.2, L3, algebra, construct]

3.1 *Energy loss.* Call a piece dirty when it is not contained in a single cell of $\mathcal R$, and let $D$ be the union of the dirty pieces. Each of the at most $K-k$ boundaries between consecutive $\mathcal R$-cells of one part lies in exactly one piece, so at most $K$ pieces are dirty, each of size at most $\lceil|X|/p\rceil\le2|X|/p\le4n/(kp)$; hence $|D|\le4Kn/(kp)=2^{k+3}n/p\le\epsilon^5n/4$. Let $\mathcal S$ be the common refinement of $\mathcal P'$ and $\mathcal R$. It refines $\mathcal R$, so $q(\mathcal S)\ge q(\mathcal R)$ by [L2], while every clean piece is already a cell of $\mathcal S$, so by [L4] the two energies agree except on ordered pairs with an entry inside $D$, which carry total weight at most $2|D|/n$ and squared densities in $[0,1]$. Therefore $q(\mathcal P')\ge q(\mathcal S)-2|D|/n\ge q(\mathcal R)-\epsilon^5/2$. [step 2.2, L2, L4, algebra]

4.1 *Iteration.* Assume $\mathcal P_0$ is equitable with $k_0'\le K_0$ parts and $n\ge T$. Given an equitable $\mathcal P_r$ that refines $\mathcal P_0$, has $k_r\le K_r$ parts, and is not $\epsilon$-regular, apply [L1] to get a refinement $\mathcal R_r$ with at most $k_r2^{k_r+1}$ parts and energy gain more than $\epsilon^5$, then apply steps 2.2 and 3.1 with $p_r=\lceil\epsilon^{-5}2^{k_r+5}\rceil$; the hypothesis $k_rp_r\le n$ holds because $k_r\le K_r$ makes $k_rp_r\le K_{r+1}\le T\le n$. The result $\mathcal P_{r+1}$ is equitable, refines $\mathcal P_r$ and hence $\mathcal P_0$, has $k_{r+1}=k_rp_r\le K_{r+1}$ parts, and satisfies $q(\mathcal P_{r+1})>q(\mathcal P_r)+\epsilon^5/2$. [step 1.2, step 2.2, step 3.1, L1, induction]

5.1 Since energy lies in $[0,1]$ by [L2], it cannot gain $\epsilon^5/2$ at $R=\lceil2\epsilon^{-5}\rceil$ successive rounds, so some $\mathcal P_r$ with $r<R$ is $\epsilon$-regular; it is equitable, refines $\mathcal P_0$, and has at most $K_r\le T$ parts. [step 4.1, L2, algebra]

6.1 Let $K$ be the larger of $T$ and the bound supplied by step 1.1; both depend only on $\epsilon$ and $k_0$. Step 1.1 proves the first assertion, and steps 2.1 and 5.1 prove the equitable assertion for $n<T$ and for $n\ge T$ respectively. [step 1.1, step 2.1, step 5.1, choose] ∎
