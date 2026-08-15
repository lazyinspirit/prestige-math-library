---
id: thm-strong-regularity-lemma-by-energy-stabilisation
kind: theorem
title: "Equitable strong regularity lemma: a very regular refinement that changes energy only slightly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regularity-refining-a-given-partition, thm-szemeredi-regularity-lemma-with-tower-bound, lem-energy-is-monotone-under-refinement, def-regular-and-equitable-vertex-partition, def-epsilon-regular-pair]
aliases: []
landmark: true
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
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.8.3 and Remark 2.8.6"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.3"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

Let $\epsilon_0\ge\epsilon_1\ge\epsilon_2\ge\cdots>0$ and let $m_0\ge1$. There is $M=M((\epsilon_i),m_0)$ such that every finite graph $G$ with $|V(G)|\ge m_0$ has equitable partitions $\mathcal P,\mathcal Q$ satisfying

1. $\mathcal Q$ refines $\mathcal P$;
2. $\mathcal P$ is $\epsilon_0$-regular;
3. $\mathcal Q$ is $\epsilon_{|\mathcal P|}$-regular;
4. $q(\mathcal Q)\le q(\mathcal P)+\epsilon_0$; and
5. $m_0\le|\mathcal P|$ and $|\mathcal Q|\le M$.

## Facts & Assumptions

**Given:** A nonincreasing positive sequence $(\epsilon_i)_{i\ge0}$, an integer $m_0\ge1$, and a finite graph $G$ of order $n\ge m_0$.

[L1] For every $0<\epsilon<1$ and $k_0\ge1$ there is $K(\epsilon,k_0)$ such that every partition into at most $k_0$ nonempty parts has an $\epsilon$-regular refinement into at most $K$ parts, which may be chosen equitable when the given partition is equitable ([[cor-regularity-refining-a-given-partition]]).

[L2] For every $0<\epsilon<1$ and $m_0\ge1$ there is $M_0(\epsilon,m_0)$ such that every graph of order at least $M_0$ has an equitable $\epsilon$-regular partition into $k$ parts with $m_0\le k\le M_0$ ([[thm-szemeredi-regularity-lemma-with-tower-bound]]).

[L3] Energy is nondecreasing under refinement and lies in $[0,1]$ ([[lem-energy-is-monotone-under-refinement]]).

[L4] An equitable partition has part sizes differing by at most one, and a partition is $\epsilon$-regular when its irregular ordered pairs carry total weight at most $\epsilon n^2$ ([[def-regular-and-equitable-vertex-partition]]).

[L5] $(X,Y)$ is $\epsilon$-regular when every $A\subseteq X$ and $B\subseteq Y$ with $|A|\ge\epsilon|X|$ and $|B|\ge\epsilon|Y|$ satisfies $|d(A,B)-d(X,Y)|\le\epsilon$ ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** direct.

1.1 If $\epsilon\le\epsilon'$ then every $\epsilon$-regular pair is $\epsilon'$-regular, because the subsets tested at parameter $\epsilon'$ are among those tested at $\epsilon$; by [L4] the same monotonicity passes to partitions. So replacing each $\epsilon_i$ by $\min(\epsilon_i,1/2)$ keeps the sequence positive and nonincreasing and only strengthens every conclusion, and we may assume $\epsilon_i<1$ for all $i$. Let $M_0=M_0(\epsilon_0,m_0)$ be the constant of [L2]. [given, L2, L4, L5, choose]

2.1 *Small graphs.* Suppose $m_0\le n<M_0$ and let $\mathcal P=\mathcal Q$ be the partition of $V(G)$ into singletons. It refines itself, is equitable, and has $n\ge m_0$ parts. The only subset of a singleton of size at least $\epsilon$ times its size is the singleton itself, so by [L5] every pair of singletons is $\epsilon$-regular for every $\epsilon>0$, giving conclusions 2 and 3; and $q(\mathcal Q)=q(\mathcal P)$ gives conclusion 4. [step 1.1, L4, L5]

2.2 *Large graphs.* Suppose $n\ge M_0$. Use [L2] to choose an equitable $\epsilon_0$-regular partition $\mathcal P_0$ with $m_0\le|\mathcal P_0|\le M_0$. Having constructed $\mathcal P_i$, apply [L1] to $\mathcal P_i$ with parameter $\epsilon_{|\mathcal P_i|}$ to choose an equitable refinement $\mathcal P_{i+1}$ that is $\epsilon_{|\mathcal P_i|}$-regular. [step 1.1, L1, L2, induction, choose]

3.1 Each part count is bounded by a function of the preceding one and the fixed sequence, so for every fixed number of stages all $|\mathcal P_i|$ are bounded independently of $G$. A refinement has at least as many parts as the partition it refines, so $|\mathcal P_i|\ge|\mathcal P_0|\ge m_0$ for every $i$. [step 2.2, L1, induction]

3.2 Set $R=\lceil1/\epsilon_0\rceil+1$. If $q(\mathcal P_{i+1})>q(\mathcal P_i)+\epsilon_0$ for every $i<R$, telescoping would give $q(\mathcal P_R)>1$, contrary to [L3]. Hence some $i<R$ satisfies $q(\mathcal P_{i+1})\le q(\mathcal P_i)+\epsilon_0$; put $\mathcal P=\mathcal P_i$ and $\mathcal Q=\mathcal P_{i+1}$. [step 2.2, L3, algebra, choose]

4.1 Step 2.2 supplies refinement, equitability, and $\epsilon_{|\mathcal P|}$-regularity of $\mathcal Q$. Also $\mathcal P$ is $\epsilon_0$-regular: this holds for $\mathcal P_0$ by construction, and every later $\mathcal P_i$ is $\epsilon_{|\mathcal P_{i-1}|}$-regular with $\epsilon_{|\mathcal P_{i-1}|}\le\epsilon_0$, which gives $\epsilon_0$-regularity by step 1.1. Step 3.1 gives $|\mathcal P|\ge m_0$ and step 3.2 the energy bound. [step 1.1, step 2.2, step 3.1, step 3.2, algebra]

5.1 Let $M$ be the largest of $M_0$ and the recursively obtained part-count bounds through stage $R$. Step 2.1 settles $n<M_0$ and steps 3.1 and 4.1 settle $n\ge M_0$, so in both cases $|\mathcal Q|\le M$ and all five conclusions hold. [step 2.1, step 3.1, step 4.1] ∎
