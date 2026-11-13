---
id: def-expander-sync-even-walks
title: Even closed walks and traversal multiplicities
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - prop-expander-prereq-random-matrix-walk-expansion
  - math:def-graph-walk-trail-path-and-cycle
  - math:def-finite-simple-graph
dependency_roles:
  prop-expander-prereq-random-matrix-walk-expansion: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 34, Proof of Proposition 6.3, first paragraph
      statement: The article defines the set of even cycles as cyclic vertex sequences
        with unequal consecutive vertices and every edge traversed an even
        number of times, and writes $n_k(u)$ for the number of distinct edges
        visited exactly $k$ times.
      hypotheses: The vertex set is that of the random graph in Proposition 6.3; the
        sequences have length $2\ell$ and indices are cyclic.
      reading_limits: The first paragraph of the proof on PDF p. 34 and its matrix
        context on p. 33 were inspected in the supplied article text. This
        reference attributes the notation and definition, not an independent
        proof.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 2
---

## Definition

Let $V$ be a nonempty finite set and let $\ell\geq1$ be an integer. For $u=(u_1,\ldots,u_{2\ell})\in V^{2\ell}$ set $u_{2\ell+1}=u_1$. When $u_i\ne u_{i+1}$ for every $i$, its $i$th traversed edge is the unordered pair $e_i=\{u_i,u_{i+1}\}$. These are edges of the complete loopless graph on $V$, whose edges are all two-element subsets of $V$; they need not be edges of a particular realization of a random graph.

For each such unordered pair $e$, define its traversal multiplicity by $m_e(u)=|\{i\in\{1,\ldots,2\ell\}:e_i=e\}|$. Let $\mathcal C_{2\ell}$ be the set of those tuples $u$ for which $u_i\ne u_{i+1}$ for every cyclic index and $m_e(u)$ is even for every edge $e$ traversed by $u$. For each integer $k\geq1$ and $u\in\mathcal C_{2\ell}$, let $n_k(u)=|\{e:m_e(u)=k\}|$. Thus $n_k(u)$ counts distinct unordered edges traversed exactly $k$ times.

The article calls members of $\mathcal C_{2\ell}$ “even cycles.” They are closed walks of length $2\ell$ and may repeat vertices and edges. The tuple retains its first position and direction: rotations and reversals are not identified unless they are equal as tuples.

## Justification

The finite vertex set $V$ together with the set of all its two-element subsets forms a finite simple graph by [[math:def-finite-simple-graph]].

The appended endpoint $u_{2\ell+1}=u_1$ makes $(u_1,\ldots,u_{2\ell},u_1)$ a closed walk of length $2\ell$ in the complete loopless graph whenever consecutive entries differ, in the sense of [[math:def-graph-walk-trail-path-and-cycle]]. The walk expansion in [[prop-expander-prereq-random-matrix-walk-expansion]] likewise treats a closed walk as an ordered vertex sequence and groups traversals by unordered endpoint pairs. Each $m_e(u)$ is the cardinality of a subset of the finite index set $\{1,\ldots,2\ell\}$, so it is a well-defined nonnegative integer independent of the order in which the endpoints of $e$ are written. Only finitely many edges are traversed, so each $n_k(u)$ is well defined. The definition imposes even multiplicity on traversed edges and no distinctness condition on vertices or successive edges beyond the exclusion of loops; it therefore does not require a cycle in the distinct-vertex sense of the cited graph definition.

## Source notes

The terminology $\mathcal C_{2\ell}$ and $n_k(u)$ and the phrase “even cycles” are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 34, first paragraph of the proof of Proposition 6.3. The complete graph describes possible off-diagonal matrix indices in that argument.
