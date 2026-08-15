---
id: lem-energy-increment-for-an-irregular-partition
kind: lemma
title: "Every nonregular $k$-part partition has a refinement with energy gain greater than $\\epsilon^5$ and at most $k2^{k+1}$ parts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-energy-boost-for-an-irregular-pair, lem-energy-is-monotone-under-refinement, def-regular-and-equitable-vertex-partition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.1.14"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $0<\epsilon<1$. If a partition $\mathcal P$ of a nonempty graph is not $\epsilon$-regular and has $k$ nonempty parts, then it has a refinement $\mathcal Q$ with at most $k2^{k+1}$ parts and
$$q(\mathcal Q)>q(\mathcal P)+\epsilon^5.$$

## Facts & Assumptions

**Given:** A non-$\epsilon$-regular $k$-part partition $\mathcal P$.

[L1] Nonregularity means that the ordered irregular pairs $(X,Y)\in\mathcal P^2$ have total weight $\sum |X||Y|>\epsilon n^2$ ([[def-regular-and-equitable-vertex-partition]]).

[L2] Splitting an irregular pair by witness sets raises its contribution to energy by more than $\epsilon^4|X||Y|/n^2$ ([[lem-energy-boost-for-an-irregular-pair]]).

[L3] Further refinement cannot reduce energy ([[lem-energy-is-monotone-under-refinement]]).

## Proof

**Proof technique:** direct.

1.1 For each ordered irregular pair $(X,Y)$ choose witness sets $A_{XY}\subseteq X$ and $B_{XY}\subseteq Y$. [given, L1, choose]

2.1 For each $X\in\mathcal P$, refine $X$ by all witness subsets that occur in $X$, whether as a first or a second coordinate. There are at most $2k$ such subsets, and the common refinement they generate has at most $2^{2k}$ cells. By choosing one witness orientation for each unordered pair and retaining the two diagonal witnesses separately, the same construction uses at most $k+1$ subsets per part and hence at most $2^{k+1}$ cells. Thus the resulting partition $\mathcal Q$ has at most $k2^{k+1}$ parts. [step 1.1, algebra]

3.1 For every selected irregular ordered pair, the restriction of $\mathcal Q$ to its two old parts refines the witness split. By [L2] and [L3], its contribution gains more than $\epsilon^4|X||Y|/n^2$; all other old-pair contributions are nondecreasing. [step 2.1, L2, L3]

4.1 Although only one orientation of each off-diagonal irregular pair supplied witness sets in step 2.1, that single split refines both old parts, so step 3.1 applies to *both* ordered pairs $(X,Y)$ and $(Y,X)$, which carry equal weight $|X||Y|/n^2$ and equal regularity status. Summing the gains over all ordered irregular pairs therefore recovers the full normalized irregular weight, and by [L1] the total gain is greater than $\epsilon^4\epsilon=\epsilon^5$. [step 3.1, L1, algebra] ∎
