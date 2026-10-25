---
id: lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension
kind: lemma
title: "Finite elementary abelian $p$-groups have bases, basis extension, and a well-defined dimension"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fp-basis-of-an-elementary-abelian-p-group, thm-product-rule, thm-canonical-prime-factorisation, thm-well-ordering-principle]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Generating Sets, consequences of Theorem 6.12"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 3.7"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Every finite elementary abelian $p$-group has a basis; every independent subset extends to a basis, every spanning subset contains a basis, and all bases have the same finite size.

## Facts & Assumptions

**Given:** A finite elementary abelian $p$-group $E$, an independent subset $I\subseteq E$, and a spanning subset $S\subseteq E$.

[F1] A basis of an elementary abelian $p$-group is an independent spanning subset for its canonical $\mathbb F_p$-linear structure ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

[L1] The cardinality of a finite Cartesian product is the product of the cardinalities of its factors ([[thm-product-rule]]).

[L2] If a positive integer is written as a finite product of powers of distinct primes, every exponent equals the corresponding canonical valuation ([[thm-canonical-prime-factorisation]]).

[L3] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 The set of cardinalities of spanning subsets of $E$ is nonempty because $E$ spans itself, so [L3] gives its least member; choose a spanning subset $B$ of that size. It is inclusion-minimal, and if a nontrivial linear relation existed in $B$, one member with nonzero coefficient could be solved for using its inverse scalar, contradicting minimality. Thus $B$ is a basis by [F1]. [given, F1, L3, algebra]

2.1 Starting from $I$, adjoin an element outside its span while one exists; adjoining such an element preserves independence, and finiteness makes the process terminate at a spanning independent set. This extends $I$ to a basis. Applying the deletion argument of step 1.1 inside $S$ extracts a basis from every spanning set. [step 1.1, F1, given, algebra]

3.1 If $B$ is a basis, uniqueness of coordinates gives a bijection $\mathbb F_p^B\to E$, so [L1] gives $|E|=p^{|B|}$. For two bases $B,C$, the equality $p^{|B|}=p^{|C|}$ and uniqueness of the exponent of the prime $p$ in [L2] give $|B|=|C|$. [step 2.1, F1, L1, L2, algebra] ∎
