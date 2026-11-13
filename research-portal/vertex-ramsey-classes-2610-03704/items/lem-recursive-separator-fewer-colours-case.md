---
id: lem-recursive-separator-fewer-colours-case
kind: lemma
title: An attachment using fewer colours supplies H2
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-recursive-induced-separator-graphs
  - def-induced-vertex-ramsey-class
  - lem-finite-colouring-transport-and-restriction
  - def-article-graph-conventions
  - def-unrestricted-finite-colouring-map
  - math:def-induced-embedding-and-induced-copy
  - math:def-injection-surjection-bijection
dependency_roles:
  def-recursive-induced-separator-graphs: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  lem-finite-colouring-transport-and-restriction: mathematical-premise
  def-article-graph-conventions: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, final paragraph
      statement: If an attached copy of A_{r-1} uses at most r-1 colours, the
        induction hypothesis gives a monochromatic induced copy of H_2 in it.
      hypotheses: The recursive construction and the induction hypothesis for A_{r-1}
        are in force, with 2 <= r <= k.
      reading_limits: The frozen article text at the cited passage was inspected. This
        reference attributes the article case; it is not a proof premise.
dependency_level: 14
---

## Statement

Use the hypotheses and notation of the recursive separator construction, with $2\leq r\leq k$. Thus $H_2$ and $A_{r-1}$ are finite simple graphs and each attachment $H_{\varphi,u,r-1}$ is a copy of $A_{r-1}$ whose internal edges are retained in $A_r$. Assume $A_{r-1}\in\mathcal R^{r-1}_{\mathrm{ind}}(H_2)$: every function from $V(A_{r-1})$ to $\{1,\ldots,r-1\}$ has a monochromatic induced copy of $H_2$. In any function $c:V(A_r)\to\{1,\ldots,r\}$, if an attachment $H_{\varphi,u,r-1}$ uses at most $r-1$ colours, then that attachment contains a monochromatic induced copy of $H_2$. Here an induced copy is the image of an injective vertex map preserving adjacency and nonadjacency; monochromatic means its image vertices have one common colour.

## Statement references

[[def-recursive-induced-separator-graphs]]

[[def-induced-vertex-ramsey-class]]

[[def-article-graph-conventions]]

[[def-unrestricted-finite-colouring-map]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-injection-surjection-bijection]]

## Facts & Assumptions

[F1] The recursive construction makes each attachment a copy of $A_{r-1}$, retains its internal edges, and adds edges only between parts and the core. Thus its inclusion in $A_r$ is an induced embedding. [[def-recursive-induced-separator-graphs]] [[math:def-induced-embedding-and-induced-copy]]

[F2] Membership in $\mathcal R^{r-1}_{\mathrm{ind}}(H_2)$ means that every colouring of $V(A_{r-1})$ by the available palette $\{1,\ldots,r-1\}$ has a monochromatic induced embedding of $H_2$. Colours need not all be used. [[def-induced-vertex-ramsey-class]] [[def-unrestricted-finite-colouring-map]]

[F3] A colouring with at most $r-1$ used colours can be injectively relabelled into $\{1,\ldots,r-1\}$ without changing its monochromatic subsets. Composing induced embeddings gives an induced embedding, and restriction preserves the colours of its vertices. [[lem-finite-colouring-transport-and-restriction]] [[math:def-injection-surjection-bijection]]

## Proof

**Given:** The recursive construction, the Ramsey-class assumption, the colouring $c$, and an attachment $B=H_{\varphi,u,r-1}$ using at most $r-1$ colours.

**Goal:** Find a monochromatic induced copy of $H_2$ inside $B$.

1.1 Let $f:A_{r-1}\to B$ be the graph isomorphism supplied by the copy construction. Pull the colouring back along $f$, obtaining $d=c\circ f$ on $V(A_{r-1})$. Its used palette has at most $r-1$ elements. Since $r-1$ is positive, injectively relabel that palette into $\{1,\ldots,r-1\}$ to obtain a colouring $d'$ with exactly the same monochromatic vertex subsets as $d$. [F1, F3, given, construct]

2.1 By the Ramsey-class assumption applied to $d'$, there is an induced embedding $h:H_2\to A_{r-1}$ whose image is monochromatic for $d'$, hence also for $d$. The isomorphism $f$ is an induced embedding, so $f\circ h$ is an induced embedding into $B$; its image is monochromatic for $c$ by the definition of $d$. Therefore $B$ contains the required copy. Its inclusion into $A_r$ also preserves the induced copy. [F1, F2, F3, step 1.1, given] ∎
