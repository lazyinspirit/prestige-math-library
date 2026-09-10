---
id: lem-analytic-countable-operations-and-borel-inclusion
kind: lemma
title: "Analytic countable operations and inclusion of Borel sets"
status: published
origin: pipeline
deps: ["def-analytic-and-coanalytic-by-closed-projection", "lem-cantor-and-baire-sequence-coding", "lem-polish-closed-products-and-baire-parametrization", "lem-metric-borel-hierarchy-monotonicity-and-operations", "def-continuous-map-top", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 4.5(i) pp34–35 and discussion after Definition 4.4 p34; local closed-witness proof replaces dependence on Borel parametrization"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC analytic subsets of a Polish space are closed under countable unions and countable intersections, and under continuous inverse images between Polish spaces. Every Borel set is analytic and coanalytic.

## Facts & Assumptions

[F1] [[def-analytic-and-coanalytic-by-closed-projection]] defines analytic sets as closed projections with a Baire witness and coanalytic sets by complement.

[F2] [[lem-cantor-and-baire-sequence-coding]] codes sequences of Baire witnesses by one Baire real.

[F3] [[lem-polish-closed-products-and-baire-parametrization]] supplies Polish products.

[F4] [[lem-metric-borel-hierarchy-monotonicity-and-operations]] includes the rank-one to rank-two inclusion: every metric open is a countable union of closed sets.

[F5] [[def-continuous-map-top]] supplies the open-preimage condition.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** A Polish $X$ and analytic $A_n\subseteq X$.

1.1 By F1 and A1 choose closed $F_n\subseteq X\times\mathcal N$ projecting to $A_n$. For $z\in\mathcal N$ write $z^-=(z(1),z(2),\ldots)$ and put $F=\{(x,z):(x,z^-)\in F_{z(0)}\}$. This is closed: at a point outside it, fixing $z(0)=n$ and a product neighbourhood outside closed $F_n$ gives a neighbourhood outside $F$. Its projection is $\bigcup_n A_n$: a witness $z$ gives the summand $n=z(0)$; a witness $y$ in a summand gives $z=n^\frown y$. Hence the union is analytic. [F1, A1]

1.2 If $g:Y\to X$ is continuous between Polish spaces and $A$ has closed witness $F$, the map $(y,z)\mapsto(g(y),z)$ is continuous: product basic opens pull back to products of open preimages and cylinder opens. Its preimage of $F$ is closed and projects exactly to $g^{-1}[A]$. All product spaces here are Polish by F3, so F1 applies. [F1, F3, F5]

2.1 Decode $z$ as $(z_n)_n$ by F2 and put $H=\{(x,z):\forall n\ (x,z_n)\in F_n\}$. Each coordinate map is continuous, so its closed preimage is closed by F5 and complementation; their intersection is closed. A projected point is in every $A_n$. Conversely if $x\in\bigcap_n A_n$, A1 selects witnesses $y_n$ from the nonempty closed sections $(F_n)_x$, and F2 codes them as $z$ with $(x,z)\in H$. Thus this projection is exactly the intersection, analytic by F1. [F1, F2, F5, A1, step 1.1]

3.1 A closed $C\subseteq X$ has the closed witness $C\times\mathcal N$; this projects to $C$ since the all-zero Baire real exists. By F4 and step 1.1 every open is analytic. Let $\mathcal H$ consist of sets both they and their complements analytic. It contains opens and is complement closed. If $A_n\in\mathcal H$, step 1.1 makes their union analytic and step 2.1 makes its complement, the intersection of their analytic complements, analytic. Thus $\mathcal H$ is a sigma-algebra containing opens and contains every Borel set by the leastness definition. Empty intersections give $X$, and empty unions give $\varnothing$, both already supplied by the closed-witness construction. QED. [F1, F4, step 1.1, step 2.1]
