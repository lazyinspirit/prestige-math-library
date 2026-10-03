---
id: ex-hilbert-polynomial-of-finite-points-on-p1
kind: example
title: "The Hilbert polynomial of finite points on the projective line"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-polynomial-finite-scheme-length
  - def-hilbert-functor-of-flat-projective-subschemes
  - lem-universal-family-and-hilbert-polynomial-strata
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

For any field $k$, a finite closed subscheme $Z\subseteq\mathbb P^1_k$ of length $d$ has the constant Hilbert polynomial $P(r)=d$ for the usual polarization, including nonreduced points and points with nontrivial residue field. A family of such points belongs to the constant-polynomial stratum only when it is flat and finitely presented as specified in [[def-hilbert-functor-of-flat-projective-subschemes]].

## Verification

**Given:** AC and DC, a field $k$, and a finite closed subscheme $Z$ of length $d$.

[F1] Finite schemes have the constant length polynomial ([[lem-hilbert-polynomial-finite-scheme-length]]). The fixed-polynomial subfunctor and its universal stratum are [[def-hilbert-functor-of-flat-projective-subschemes]], [[lem-universal-family-and-hilbert-polynomial-strata]].

1.1 By the finite-scheme supplier in [F1], every invertible twist restricted to $Z$ has $d$-dimensional sections and zero higher cohomology. Thus its Euler characteristic is the constant $d$ for every integer twist. This includes nilpotent structure and residue-field degrees, since length is the full dimension of the finite coordinate algebra over $k$. [F1, algebra]

2.1 The Hilbert polynomial is consequently $P(r)=d$. For a flat finitely presented family of total fibre length $d$, the classifying map lands in the corresponding open and closed stratum by [F1]. The finite-scheme supplier also gives $d=0$ for the empty subscheme. [F1, step 1.1, algebra] ∎
