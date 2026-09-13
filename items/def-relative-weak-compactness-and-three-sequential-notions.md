---
id: def-relative-weak-compactness-and-three-sequential-notions
kind: definition
title: Relative weak compactness and three sequential notions
status: draft
origin: pipeline
deps: ["def-weak-topology-on-a-normed-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Haase, The Functional Analysis of Quantum Information Theory"
      url: "https://fa.ewi.tudelft.nl/~haase/files/EFHN-July2012.pdf"
      locator: "Appendix E.5, definitions on printed pp. 353–354 and Theorem E.17, pp. 355–356"
---

## Definition

Let $X$ be a real or complex Banach space, give it its weak topology
$\sigma(X,X^*)$ from [[def-weak-topology-on-a-normed-space]], and let
$A\subseteq X$.

- $A$ is **relatively weakly compact** if its weak closure
  $\overline A^{\,w}$ is weakly compact.  It is **weakly compact** if $A$ itself,
  with the relative weak topology, is compact.
- $A$ is **relatively weakly sequentially compact** if every sequence
  $(a_n)_{n\in\mathbb N}$ in $A$ has strictly increasing indices
  $n_0<n_1<\cdots$ and a point $x\in X$ such that $a_{n_k}\to x$ weakly.  It is
  **weakly sequentially compact** if the limit can always be taken in $A$.
- $A$ is **relatively weakly countably compact** if every sequence $(a_n)$ in
  $A$ has a weak cluster point $x\in X$, meaning that for every weak
  neighborhood $U$ of $x$ and every $N\in\mathbb N$ there is an $n\geq N$ with
  $a_n\in U$.  It is **weakly countably compact** if the cluster point can
  always be taken in $A$.

The cluster-point condition is indexed: a value occurring infinitely often is
a cluster point even when the range of the sequence is finite.  Thus constant
and eventually constant sequences have the expected cluster point.  The empty
set satisfies all three relative conditions: its weak closure is empty and
compact, and there is no sequence with values in it.  In fact the corresponding
absolute conditions are vacuous or compact for the same reason.

## Remarks

These are definitions, not implications between the notions.  In a general
topological space the three properties need not coincide.  Their equivalence
for weak subsets of Banach spaces is the content of Eberlein–Šmulian later on
this page.  “Relative” permits a sequential limit or cluster point in the
ambient $X\setminus A$; “absolute” does not.
