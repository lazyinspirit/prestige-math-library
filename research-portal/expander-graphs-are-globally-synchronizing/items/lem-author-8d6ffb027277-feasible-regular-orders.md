---
id: lem-author-8d6ffb027277-feasible-regular-orders
kind: lemma
title: Feasible orders for labelled simple regular graphs
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-regular-pairing-conditioning
  - def-expander-prereq-asymptotic-quantifiers
  - math:ex-integers-mod-n-additive-group
dependency_roles:
  def-expander-prereq-regular-pairing-conditioning: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:ex-integers-mod-n-additive-group: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

For integers $n\ge1$ and $d\ge0$, a labelled simple $d$-regular graph on $[n]=\{1,\ldots,n\}$ exists exactly when $d<n$ and $nd$ is even. For fixed $d$, these orders form an unbounded set; for odd $d$ they are precisely the even $n>d$.

## Facts & Assumptions

[F1] [[def-expander-prereq-regular-pairing-conditioning]] defines labelled simple regular graphs and their uniform law whenever the graph set is nonempty.

[F2] [[def-expander-prereq-asymptotic-quantifiers]] defines feasible-order limits and records the necessary degree and parity restrictions.

[F3] [[math:ex-integers-mod-n-additive-group]] supplies, for $n\ge1$, the additive group of congruence classes modulo $n$, with well-defined addition $[a]+[b]=[a+b]$ and unique representatives $0,\ldots,n-1$.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 Each vertex has at most $n-1$ neighbors, so $d<n$. Counting incidences of edges with vertices gives $nd=2|E|$, hence $nd$ is even. [F1, F2]

2.1 Conversely work in the additive group $\mathbb{Z}/n$ supplied by F3, writing $j$ for a residue class and translating its unique representative $r\in\{0,\ldots,n-1\}$ to label $r+1$. If $d=2k$ is even, join $j$ to $j\pm1,\ldots,j\pm k$. Since $2k<n$, these are $2k$ distinct nonzero residues relative to $j$, and adjacency is symmetric; this is a simple $d$-regular graph. It includes the empty-edge graph when $k=0$. If $d=2k+1$ is odd, parity forces $n$ even. Use the same $2k$ neighbors and add $j+n/2$; because $2k+1<n$, this residue is distinct from all previous neighbors and from $j$. The added edges are symmetric. Every vertex has exactly $d$ neighbors. Relabeling gives the claimed graph on $[n]$. Arbitrarily large even $n>d$ satisfy these conditions for every fixed $d$. [F1, F3, step 1.1, construct] ∎
