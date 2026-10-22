---
id: lem-torus-curves-same-primitive-class-isotopic-kt18-local
kind: lemma
title: "Essential torus curves with the same primitive class are isotopic"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-cellular-homology-computes-singular-homology
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the square cellulation, finite transverse intersection reduction, and annulus construction require only finite choices."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "§2.2, Example 2.36, the square cell structure and H₁ of a torus"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Chapter 1, torus-decomposition conventions"
---

## Statement

Let $T$ be a torus. Every essential smoothly embedded simple closed curve $c\subset T$ represents a primitive element of $H_1(T;\mathbb Z)$. If $c,d\subset T$ are essential smoothly embedded simple closed curves with $[c]=\pm[d]$, then they are ambient isotopic in $T$. If they are also disjoint and distinct, they cobound an embedded annulus in $T$.

## Statement references

[Allen Hatcher, *Algebraic Topology*, §2.2, Example 2.36](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** The smooth torus $T$ and the essential smooth embedded circles of the Statement.

[F1] In the standard torus, every essential smooth circle has primitive nonzero integral class; equal primitive unoriented classes are carried to one another by a jointly smooth ambient isotopy. Disjoint essential circles have smooth complementary annulus parameters. The complete finite construction assumes no choice principle. [[lem-choice-free-smooth-torus-curves-and-annulus-strips]]

## Proof

1.1 Choose a smooth parametrization $h:T\to\mathbb R^2/\mathbb Z^2$, as supplied by saying that $T$ is a smooth torus. It preserves essentiality, and its induced integral homology isomorphism preserves primitivity and equality up to sign. Apply [F1] to $h(c)$ to obtain primitivity of $[c]$. This is one supplied finite-dimensional parametrization, not a set-indexed choice. [F1, given, construct, algebra]

2.1 If $[c]=\pm[d]$, apply [F1] to their images and conjugate its ambient isotopy by $h$. This gives the required ambient isotopy in $T$. If the original curves are disjoint and distinct, the two complementary annulus parameters in [F1] pull back by $h$; either supplies an embedded annulus with exactly those original curves as boundary. No annulus is inferred for intersecting original curves, and no choice axiom is introduced. [F1, step 1.1, construct] ∎

## Sources

[Allen Hatcher, *Algebraic Topology*, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)
