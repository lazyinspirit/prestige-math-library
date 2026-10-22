---
id: thm-lickorish-wallace-framed-link-presentation
kind: theorem
title: "Lickorish–Wallace framed-link presentation theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-integral-framed-link-surgery-diagram
  - def-heegaard-splitting-of-closed-oriented-three-manifold
  - thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting
  - def-dehn-twist-on-oriented-surface
  - lem-dehn-twist-of-heegaard-gluing-is-integral-surgery
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Theorem 2.1 and proof, Lecture 2 §2.2, printed pp. 33–34"
    - title: "Qiang E, Fengchun Lei, and Fengling Li, A Proof of Lickorish and Wallace’s Theorem"
      url: "https://arxiv.org/pdf/1306.1376"
      locator: "Theorem 1.1 and proof, pp. 1–4"
---

## Statement

Assume the Axiom of Choice. For every nonempty closed connected oriented smooth $3$-manifold $M$, there is a finite oriented link $L=\bigcup_{i\in I}K_i\subset S^3$ and an integer $n_i$ for each component such that the oriented manifold obtained by simultaneous surgery with meridian slopes $n_i[\mu_i]+[\lambda_i]$ is orientation-preservingly diffeomorphic to $M$. The empty link is allowed and presents $S^3$.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral framed-link surgery convention]]

[[thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting|Heegaard splitting prerequisite]]

[[lem-dehn-twist-of-heegaard-gluing-is-integral-surgery|Surgery realization of a Dehn twist]]

[Saveliev, Lecture 2 §2.2, Theorem 2.1 and proof](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[E, Lei, and Li, A Proof of Lickorish and Wallace’s Theorem](https://arxiv.org/pdf/1306.1376)
