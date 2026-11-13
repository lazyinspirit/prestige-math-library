---
id: lem-induced-ramsey-colour-monotonicity
kind: lemma
title: Fewer colours for the base graph
status: published
origin: pipeline
domain: mathematics
deps:
  - prop-base-graph-for-induced-separation
  - def-article-graph-conventions
  - def-induced-vertex-ramsey-class
  - def-unrestricted-finite-colouring-map
  - lem-finite-colouring-transport-and-restriction
  - math:lem-nat-order-is-membership
dependency_roles:
  prop-base-graph-for-induced-separation: mathematical-premise
  def-article-graph-conventions: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  lem-finite-colouring-transport-and-restriction: mathematical-premise
  math:lem-nat-order-is-membership: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning First, final sentence
      statement: The chosen base graph A in the induced k-colour vertex-Ramsey class
        of F also belongs to the induced i-colour vertex-Ramsey class of F for
        each i from 2 through k.
      hypotheses: The article uses its previously chosen base graph and the parameters
        of the induction.
      reading_limits: The frozen article text at the cited passage was read. This
        citation attributes the article claim; the proof below uses the declared
        mathematical suppliers.
dependency_level: 13
---

## Statement

Let $A$ and $F$ be nonempty finite simple graphs, and let $1\leq i\leq k$ be integers. If $A\in\mathcal R^k_{\mathrm{ind}}(F)$, then $A\in\mathcal R^i_{\mathrm{ind}}(F)$. In particular, the base graph $A$ supplied by [[prop-base-graph-for-induced-separation]] belongs to $\mathcal R^i_{\mathrm{ind}}(F)$ for every $i\in\{2,\ldots,k\}$.

Here $\mathcal R^j_{\mathrm{ind}}(F)$ consists of the nonempty finite simple graphs whose every vertex colouring by a function into $[j]=\{1,\ldots,j\}$ has a monochromatic induced copy of $F$: its image vertices all have the same colour and their adjacency and nonadjacency agree with those of $F$. A colouring need not use every available colour. [[def-article-graph-conventions]] [[def-induced-vertex-ramsey-class]] [[def-unrestricted-finite-colouring-map]]

## Facts & Assumptions

[F1] For positive integers $j$, membership in $\mathcal R^j_{\mathrm{ind}}(F)$ means that every function $V(A)\to[j]$ has a monochromatic induced copy of $F$. [[def-induced-vertex-ramsey-class]]

[F2] A finite colouring is a function into its palette, with no requirement to use every colour. Injective relabelling of its used palette preserves and reflects monochromatic vertex subsets. [[def-unrestricted-finite-colouring-map]] [[lem-finite-colouring-transport-and-restriction]]

[F3] For natural numbers $i\leq k$, $i\subseteq k$; with $[j]=\sigma(j)\setminus\{0\}$, this gives $[i]\subseteq[k]$. [[math:lem-nat-order-is-membership]] [[def-unrestricted-finite-colouring-map]]

[F4] Under its stated hypotheses, the base-graph proposition supplies a nonempty finite simple graph $A$ belonging to $\mathcal R^k_{\mathrm{ind}}(F)$. [[prop-base-graph-for-induced-separation]]

## Proof

**Given:** Nonempty finite simple graphs $A,F$, positive integers $i\leq k$, and $A\in\mathcal R^k_{\mathrm{ind}}(F)$.

**Goal:** Show $A\in\mathcal R^i_{\mathrm{ind}}(F)$ and deduce the stated base-graph instance.

1.1 Let $c:V(A)\to[i]$ be any $i$-colouring. By F3, inclusion maps $[i]$ injectively into $[k]$. Restricting this inclusion to the used palette of $c$ gives an injective relabelling, so the resulting map $d:V(A)\to[k]$ has exactly the same monochromatic vertex subsets as $c$, by F2. [given, F2, F3]

2.1 By F1 and the given membership, $d$ has a monochromatic induced copy of $F$ in $A$. Its vertex set is also monochromatic for $c$ by step 1.1; changing colour labels does not change the graph or the induced copy. Since $c$ was arbitrary, F1 gives $A\in\mathcal R^i_{\mathrm{ind}}(F)$. [given, F1, step 1.1]

3.1 Under the hypotheses of the base-graph proposition, F4 supplies its required $k$-colour membership. Applying step 2.1 to each integer $i$ with $2\leq i\leq k$ gives the article's stated instance; if there is no such $i$, that instance is vacuous. [F4, step 2.1] ∎
