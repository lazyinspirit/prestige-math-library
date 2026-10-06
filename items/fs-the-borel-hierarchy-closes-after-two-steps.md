---
id: fs-the-borel-hierarchy-closes-after-two-steps
kind: false-statement
title: "FALSE: every Borel subset of the real line is a countable union of countable intersections of open and closed sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-borel-sets-and-strict-hierarchy, lem-sequence-spaces-continuously-inject-into-the-real-line, lem-cantor-and-baire-sequence-coding, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, lem-real-line-is-a-metric-space, def-countable-borel-hierarchy, def-axiom-of-choice]
aliases: []
landmark: false
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "D. Marker, Descriptive Set Theory, Section 2, Corollary 2.38"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
    - title: "M. Christ, Math 202B Lecture 1, Comment on the Borel hierarchy"
      url: "https://math.berkeley.edu/~mchrist/Math202B/Lectures/L1.pdf"
pipeline_run: null
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/fs-the-borel-hierarchy-closes-after-two-steps.json
---

## Statement

Every Borel subset of $\mathbb R$ belongs to the class obtained by taking
countable intersections of open and closed sets and then countable unions of
those intersections.

## Facts & Assumptions

**Given:** The real line with its usual topology and the Borel classes of [[def-countable-borel-hierarchy]]. Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the local separation theorem below.

[L1] In ZFC, every metrizable space containing a Cantor copy has a set in $\Pi^0_3\setminus\Sigma^0_3$ ([[thm-universal-borel-sets-and-strict-hierarchy]]).

[L2] The real line is metrizable ([[lem-real-line-is-a-metric-space]]).

[L3] Cantor space $\mathcal C=2^{\mathbb N}$ is compact, and $j(b)=\sum_{k\ge0}2b(k)3^{-k-1}$ continuously injects it into $\mathbb R$ ([[lem-cantor-and-baire-sequence-coding]], [[lem-sequence-spaces-continuously-inject-into-the-real-line]]).

[L4] Continuous images of compact spaces are compact, a continuous bijection from a compact space to a Hausdorff space is a homeomorphism, and compact subsets of Hausdorff spaces are closed ([[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Refutation

**Proof technique:** contradiction.

1.1 Every closed subset $F$ of $\mathbb R$ is a countable intersection of open sets: if $F\ne\varnothing$, use $O_j=\bigcup_{a\in F}(a-1/(j+1),a+1/(j+1))$. Points of $F$ belong to every $O_j$; a point outside $F$ has an interval disjoint from $F$, and hence misses $O_j$ for sufficiently large $j$. For $F=\varnothing$ use the constant empty sequence. Consequently any countable intersection of open and closed sets is a countable intersection of open sets: replace each closed factor by this explicit sequence, leave an open factor as its constant sequence, and enumerate pairs of indices by finite diagonals. Such a set is $\Pi^0_2$, since its complement is a countable union of closed sets. Therefore every set in the claimed class is $\Sigma^0_3$. [given, construct]

1.2 The map $j$ in L3 constructs a Cantor copy in the real line. Put $K=j[\mathcal C]$ with its subspace topology. The real line is Hausdorff: two distinct reals $s,t$ have disjoint open intervals of radius $|s-t|/3$ around them. The subspace $K$ is therefore also Hausdorff, by intersecting these separating intervals with $K$. As a map onto $K$, $j$ is a continuous bijection: for open $O$ in $\mathbb R$, the preimage of $K\cap O$ is $j^{-1}[O]$. L3 gives compactness of its domain, so L4 gives a homeomorphism $\mathcal C\to K$. L4 also makes $K$ compact and closed in $\mathbb R$. Thus this explicit ternary-series map supplies the required homeomorphic Cantor subset without choice. [L2, L3, L4, construct]

2.1 By L2 and step 1.2 the hypotheses of L1 hold for $\mathbb R$, so choose $D\in\Pi^0_3(\mathbb R)\setminus\Sigma^0_3(\mathbb R)$. This is a Borel set: the first three ranks are obtained from opens by complements and countable unions, operations preserving the Borel sigma-algebra. Suppose the statement were true. It would place $D$ in the displayed class and thus, by step 1.1, in $\Sigma^0_3$, contradicting its choice. Hence the statement is false. The only choice input is L1; the conversion in step 1.1 makes no simultaneous choices of representations. [L1, L2, step 1.1, step 1.2, assume-contra, discharge-contradiction] ∎
