---
id: cor-lefschetz-number-is-homotopy-invariant
kind: corollary
title: The Lefschetz number is a homotopy invariant
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-algebraic-lefschetz-number
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-global-geometric-lefschetz-number
  - thm-lefschetz-hopf-index-formula
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall
        1974; complete 236-page PDF)
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: Ch. 3 §4, printed p. 120 (L(f) is a homotopy invariant)
    - title: Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro
        Brasileiro de Topologia, Rio Claro 2006 (complete notes)
      url: https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf
      locator: Lecture II §7, printed p. 16 (L(f) is invariant under homotopy since
        the induced homology maps agree)
dependency_level: 11
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed smooth manifold and let $f,g:M\to M$ be homotopic continuous maps. Then $L(f)=L(g)$ ([[def-algebraic-lefschetz-number]]). If $\dim M\ge1$ and $f$ and $g$ are smooth with isolated fixed points, then their geometric index sums satisfy $I(f)=I(g)$ ([[def-global-geometric-lefschetz-number]]).

## Facts & Assumptions

**Given:** $M,f,g$ and AC as in the statement.

[F1] The Lefschetz number is the alternating rational homology trace, and homotopic maps induce the same homology maps ([[def-algebraic-lefschetz-number]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F2] For smooth maps with isolated fixed points, [[thm-lefschetz-hopf-index-formula]] identifies the geometric index sum of [[def-global-geometric-lefschetz-number]] with the algebraic Lefschetz number.

## Proof

1.1 A homotopy from $f$ to $g$ gives $f_*=g_*$ on every rational homology group by [F1]. The finite alternating sums of their traces therefore agree: $L(f)=L(g)$. [given, F1]

2.1 If $\dim M\ge1$ and both maps are smooth with isolated fixed points, [F2] applies to each map without any orientability or lifting restriction. Hence $I(f)=L(f)=L(g)=I(g)$. AC is inherited from the Lefschetz-number and index-formula suppliers. [F2, step 1.1] ∎
