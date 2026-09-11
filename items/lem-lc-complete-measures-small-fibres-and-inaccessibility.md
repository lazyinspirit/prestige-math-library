---
id: "lem-lc-complete-measures-small-fibres-and-inaccessibility"
kind: "lemma"
title: "Measurable cardinals are inaccessible"
deps: ["def-lc-complete-ultrafilters-and-measurable-cardinals", "thm-ultrafilter-characterisation", "def-lc-inaccessible-and-mahlo-cardinals", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Section 12 measurable-cardinal discussion; Section 23 Lemma 23.8
        p.94
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, let U be a nonprincipal kappa-complete ultrafilter on an uncountable cardinal kappa. No set of size less than kappa belongs to U, every map from kappa into an ordinal below kappa is constant on a member of U, and kappa is inaccessible.

## Facts & Assumptions

**Given:** ZFC. Intersected singleton and fibre complements, ruled out singular cofinal partitions, and used the coordinate-decision argument to exclude an injection into a small power set; AC is used for cardinal comparison.

[F1] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: U is proper, nonprincipal and closed under intersections of fewer than kappa members.

[F2] [[thm-ultrafilter-characterisation]]: U decides each subset and its complement exclusively.

[F3] [[def-lc-inaccessible-and-mahlo-cardinals]]: Inaccessibility means uncountable regular strong limit.

[F4] [[def-axiom-of-choice]]: AC makes cardinalities and their comparisons available.

## Proof

1.1 No singleton belongs to U: if {xi} did, upward closure and properness would make U exactly the principal ultrafilter at xi. Thus every singleton complement belongs to U. If $|A|<\kappa$, intersect the complements indexed by an enumeration of A; completeness puts $\kappa\setminus A$ in U, so A is not in U. [F1, F2, F4]

2.1 For $f:\kappa\to\eta$ with $\eta<\kappa$, if no fibre belonged to U, intersecting all eta fibre complements would put empty in U. Hence some fibre belongs to U. If kappa were singular, a cofinal sequence of length eta<kappa would partition kappa into eta bounded pieces (assign alpha the least index whose bound exceeds it). Each piece has size below kappa and is forbidden by step 1.1, contradicting the fibre conclusion. Thus kappa is regular. [F1, F2, step 1.1]

3.1 If for some cardinal mu<kappa there were an injection $e:\kappa\to\mathcal P(\mu)$, for each xi<mu let $A_\xi=\{\alpha:\xi\in e(\alpha)\}$. Take the uniquely U-large side of each A_xi and intersect them; completeness makes the intersection U-large. All its elements have identical e-images, so injectivity makes it have at most one element, contradicting step 1.1. AC compares the cardinality of P(mu) with kappa; absence of such an injection gives $2^\mu<\kappa$. Together with regularity and uncountability this is F3. Coordinate decisions were unique and did not themselves spend AC. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
