---
id: lem-compact-subsets-of-a-bernstein-set-are-countable
kind: lemma
title: "Every compact subset of a Bernstein set is countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bernstein-set-on-r, thm-heine-borel-characterisation-r,
       lem-q-and-irrationals-dense-r,
       thm-rationals-countable, thm-product-of-countable,
       thm-countable-union-of-countable, def-perfect-set-r, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
    - title: "Bernstein set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernstein_set"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $B \subseteq \mathbb{R}$ be a
Bernstein set. Then every compact subset of $B$ is countable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a Bernstein set $B \subseteq \mathbb{R}$, and a compact subset $K \subseteq B$.

[F1] A Bernstein set meets every nonempty perfect subset of $\mathbb{R}$, and so does its complement ([[def-bernstein-set-on-r]]).

[L1] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

[L3] Every nonempty open subset of $\mathbb{R}$ is uncountable ([[lem-q-and-irrationals-dense-r]]).

[L4] A perfect subset of $\mathbb{R}$ is closed and has no isolated points ([[def-perfect-set-r]]).

[L5] Rational open intervals form a countable family, and assuming countable choice, a countable union of countable sets is countable ([[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

## Proof

**Proof technique:** direct.

1.1 Suppose, for contradiction, that $K$ is uncountable. Since $K$ is compact, [L1] makes it closed. Let $C$ be the set of condensation points of $K$, that is, the points $x \in K$ for which every neighbourhood of $x$ meets $K$ in uncountably many points. For each $x\in K\setminus C$, take the first rational open interval in a fixed enumeration that contains $x$ and meets $K$ countably. Thus $K\setminus C$ is covered by a countable family of countable intersections with $K$, and [L5] makes it countable. Hence $C$ is uncountable and nonempty. [L1, L3, L5, assume-contra]

2.1 The set $C$ is perfect. It is closed, because if $x \notin C$ then some neighbourhood of $x$ meets $K$ only countably, and that same neighbourhood avoids $C$; and it has no isolated points, because every neighbourhood of a point of $C$ meets $K$ uncountably, while $K \setminus C$ is countable by step 1.1, so the same neighbourhood meets $C$ in a point different from the centre. Thus [L4] applies to $C$. [step 1.1, L4, algebra]

3.1 Now $C \subseteq K \subseteq B$, so the nonempty perfect set $C$ misses the complement of $B$, contradicting [F1]. Therefore the assumption in step 1.1 was false, and $K$ is countable. [step 2.1, F1, discharge-contradiction] ∎
