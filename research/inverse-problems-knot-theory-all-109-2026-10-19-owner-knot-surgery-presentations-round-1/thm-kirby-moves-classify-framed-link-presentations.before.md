---
id: thm-kirby-moves-classify-framed-link-presentations
kind: theorem
title: "Kirby moves classify integral framed-link presentations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-integral-framed-link-surgery-diagram
  - def-kirby-moves-on-integral-framed-links
  - lem-kirby-moves-preserve-surgery-manifold
  - def-axiom-of-choice
  - def-countable-choice
  - def-surgery-trace-cobordism
  - thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold
  - lem-handle-slides-preserve-the-relative-diffeomorphism-type
  - lem-relative-one-parameter-morse-path-with-finite-events
  - lem-finite-relative-mixed-handle-movies-give-marked-kirby-moves
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Robion Kirby, A Calculus for Framed Links in S3"
      url: "https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf"
      locator: "Theorem 1 and complete proof, §§2–3, printed pp. 36–45"
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Theorem 3.1 and K1/K2 definitions, Lecture 3 §3.2, printed pp. 45–46"
---

## Statement

Assume the Axiom of Choice. Let $D_0$ and $D_1$ be finite integral framed-link surgery diagrams in the standard oriented $3$-sphere, with surgery results $M_0$ and $M_1$. Then $M_0$ and $M_1$ are orientation-preservingly diffeomorphic if and only if $D_0$ and $D_1$ are related by a finite sequence of ambient isotopies, framed handle slides, and additions or deletions of split $\pm1$-framed unknots.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral framed-link diagrams and surgery results]]

[[def-kirby-moves-on-integral-framed-links|Ambient isotopy, framed handle slides, and stabilization]]

[Kirby, A Calculus for Framed Links in S3, Theorem 1 and proof](https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf)

[Saveliev, Lecture 3 §3.2, Theorem 3.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)
