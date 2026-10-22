---
id: def-lens-space-surgery-orientation-convention
kind: definition
title: "Lens spaces in the $p/q$ filling orientation convention"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-oriented-slope-and-knot-dehn-filling, def-countable-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 1 §1.5 and Lecture 2 §2.3"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    - title: "Peter S. Ozsváth, András I. Stipsicz, and Zoltán Szabó, Heegaard Floer homology, version 2025-12-15, Exercise 1.2.14(b)"
      url: "https://web.math.princeton.edu/~petero/konyv9.pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$. An oriented lens space is an oriented closed $3$-manifold obtained by gluing two solid tori by an orientation-reversing boundary homeomorphism. For coprime integers $p>0$ and $q$, let $L(p,q)$ denote the oriented union of the exterior of the unknot in the oriented $3$-sphere and a solid torus whose meridian is identified with the slope $p[\mu_U]+q[\lambda_U]$ on the unknot exterior. Thus this library uses the convention $L(p,q)=E_U(p/q)$; no symbol $L(0,q)$ is assigned.

## Definition references

[[def-countable-choice|Countable-choice hypothesis for the chosen peripheral data]]

[[def-oriented-slope-and-knot-dehn-filling|The filling operation and slope convention used here]]

[Saveliev, Lecture 1 §1.5, genus-one gluings and lens spaces](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[Ozsváth–Stipsicz–Szabó, Exercise 1.2.14(b), with its opposite $-L(p,q)$ surgery-orientation convention](https://web.math.princeton.edu/~petero/konyv9.pdf)
