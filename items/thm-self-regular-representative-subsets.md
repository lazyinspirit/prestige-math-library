---
id: thm-self-regular-representative-subsets
kind: theorem
title: "Strong regularity with linearly large representative subsets and no irregular representative pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-strong-regularity-lemma-by-energy-stabilisation, lem-energy-controls-density-approximation, thm-large-self-regular-subset, lem-slicing-lemma-for-regular-pairs, thm-first-moment-method]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.8.9"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.3"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

Let $\epsilon_0>0$, let $\epsilon_1\ge\epsilon_2\ge\cdots>0$, and let $k_0\ge1$. There are $K$ and $\delta>0$ such that every finite graph $G$ of order at least $k_0$ has an equitable partition
$$V(G)=V_1\sqcup\cdots\sqcup V_k,\qquad k_0\le k\le K,$$
and nonempty subsets $W_i\subseteq V_i$ with $|W_i|\ge\delta|V(G)|$ such that

1. every pair $(W_i,W_j)$, including $i=j$, is $\epsilon_k$-regular; and
2. for all but at most $\epsilon_0k^2$ ordered pairs $(i,j)$,
$$|d(W_i,W_j)-d(V_i,V_j)|\le\epsilon_0.$$

## Facts & Assumptions

**Given:** $\epsilon_0$, a nonincreasing positive sequence, an integer $k_0\ge1$, and a finite graph $G$ of order $n\ge k_0$.

[L1] For any prescribed minimum coarse part count $m_0$, strong regularity produces equitable partitions $\mathcal P,\mathcal Q$ of any graph of order at least $m_0$ with $\mathcal Q$ refining $\mathcal P$, $\mathcal P$ being $\epsilon_0$-regular with $m_0\le|\mathcal P|$, $\mathcal Q$ being $\epsilon_{|\mathcal P|}$-regular, $q(\mathcal Q)\le q(\mathcal P)+\epsilon_0$, and $|\mathcal Q|$ bounded ([[thm-strong-regularity-lemma-by-energy-stabilisation]]).

[L2] A small energy increment makes almost all fine-pair densities close to their coarse densities ([[lem-energy-controls-density-approximation]]).

[L3] Every finite graph with at least one vertex contains a nonempty linearly large self-regular subset at any prescribed parameter ([[thm-large-self-regular-subset]]).

[L4] Large restrictions of regular pairs stay regular and have nearby density ([[lem-slicing-lemma-for-regular-pairs]]).

[L5] If a nonnegative integer-valued random variable has expectation below $1$, some outcome makes it zero ([[thm-first-moment-method]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] with minimum coarse part count $m_0=k_0$, coarse parameter much smaller than $\epsilon_0^3$, and fine parameter, at a coarse part count $k$, much smaller than $\epsilon_k$ after slicing. This is legitimate because $n\ge k_0$. Obtain equitable $\mathcal P=\{V_1,\ldots,V_k\}$ with $k_0\le k\le K$ and a fine equitable refinement $\mathcal Q$. [given, L1, choose, construct]

2.1 By [L2], the total ordered vertex-pair weight of fine pairs whose density differs from their coarse pair by more than $\epsilon_0/2$ is at most a chosen constant below $\epsilon_0^2$. The fine partition has bounded order. [step 1.1, L2, algebra]

3.1 Independently for each $i$, choose a fine atom $U_i\subseteq V_i$ with probability proportional to its size. Choose the parameters so that the expected number $I$ of nonregular selected ordered pairs is below $1/4$, while the expected number $D$ of pairs with $|d(U_i,U_j)-d(V_i,V_j)|>\epsilon_0/2$ is below $\epsilon_0k^2/4$. [step 1.1, step 2.1, algebra]

4.1 Inside every selected atom $U_i$, apply [L3] at a much smaller parameter and obtain $W_i\subseteq U_i$ of size at least a fixed fraction of $|U_i|$. Because both partition orders are bounded and equitable, there is a uniform $\delta>0$ with $|W_i|\ge\delta n$. [step 3.1, L3, choose]

4.2 Let $X=I+\mathbf 1_{\{D>\epsilon_0k^2\}}$. Since $\mathbf 1_{\{D>\epsilon_0k^2\}}\le D/(\epsilon_0k^2)$, step 3.1 gives $\mathbb E X<1/2$. By [L5] there is a selection with $X=0$: it has no irregular selected pair and at most $\epsilon_0k^2$ density failures. [step 3.1, L5, algebra, choose]

5.1 On every fine-regular selected cross-pair, [L4] makes $(W_i,W_j)$ $\epsilon_k$-regular and changes its density by at most $\epsilon_0/2$. Each diagonal pair is $\epsilon_k$-regular by the self-regular choice in step 4.1. [step 3.1, step 4.1, L4, algebra]

6.1 For that selection, step 5.1 gives regularity for every representative pair, while step 4.2 gives the density-approximation exception bound. Step 4.1 gives the common linear lower bound and makes each $W_i$ nonempty, and step 1.1 gives $k_0\le k\le K$, completing the construction. [step 4.1, step 5.1, step 4.2, discharge-construct] ∎
