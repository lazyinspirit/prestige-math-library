---
id: thm-hc0-vanishing-for-lisse-sheaves-on-nonproper-smooth-curves
kind: theorem
title: "H_c^0 vanishes for lisse sheaves on nonproper smooth curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - lem-ordinary-lisse-nonproper-curve-adic-compact-support-h0-in-zf
proof_strategy: direct
axiom_use: "No ambient choice axiom is assumed; the cited specialized compact-support construction retains the original ordinary sheaf and normal compactification scope."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §§14 and 18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let $k$ be an algebraically closed field of characteristic $p$, let $U$ be a nonempty, smooth, geometrically connected, separated, finite-type, nonproper curve over $k$, let $\ell\ne p$ be a prime, and let $\mathcal F$ be a locally constant sheaf of finite-dimensional $\mathbb Q_\ell$-vector spaces on the small étale site of $U$. Here locally constant means étale locally isomorphic to a constant sheaf; in a local trivialization, a section has locally constant coordinates and transition maps are linear isomorphisms, so its zero-germ and nonzero-germ loci are complementary clopen subsets of $U$. Finite-dimensional refers to the geometric stalks. Then $H_c^0(U,\mathcal F)=0$.

## Statement references

[Milne, *Lectures on Étale Cohomology*, Chapter I, §§14 and 18](https://jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** The curve U and ordinary sheaf F in the Statement, including its stated local-constancy convention.

[F1] The specified sheaf admits an actual normalized rational-adic compact-support model on a proper normal compactification. Its degree-zero cohomology and the ordinary compact-support section group are canonically zero, independently of the model choices. [[lem-ordinary-lisse-nonproper-curve-adic-compact-support-h0-in-zf]]

## Proof

1.1 The data in the Statement meet the hypotheses of [F1]. Its normalized rational-adic compact-support model computes H_c^0(U,F). [F1, given]

2.1 The degree-zero group of that model is zero by [F1]. Therefore H_c^0(U,F)=0. [F1, step 1.1] ∎

## Remarks

The construction is specific to the ordinary locally constant sheaf in this Statement. It does not claim a general ordinary/adic equivalence or full relative compactification independence.
