---
id: def-integral-framed-link-surgery-diagram
kind: definition
title: "Integral framed-link surgery diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-oriented-slope-and-knot-dehn-filling
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Lecture 2 §2.2, framed links and integral surgery, printed pp. 32–34"
    - title: "Robion Kirby, A Calculus for Framed Links in S3"
      url: "https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf"
      locator: "§1, definition of a framed link and its surgery trace, printed pp. 35–36"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume the Axiom of Choice. It supplies countable choice for the chosen tubular data: for any sequence of nonempty sets, apply full choice to its range and compose with the index map. Let $L=\bigcup_{i\in I}K_i$ be a finite oriented link in the standard oriented $3$-sphere, where $I$ is a finite index set. For each component $K_i$, choose a closed tubular neighbourhood $N(K_i)$, with the neighbourhoods pairwise disjoint, and include its exterior $E_{K_i}=S^3\setminus\operatorname{int}N(K_i)$, the positive meridian $\mu_i$, and the preferred longitude $\lambda_i$; the longitude is the degree-one parallel class in $H_1(\partial E_{K_i};\mathbb Z)$ that maps to zero in $H_1(E_{K_i};\mathbb Z)$. For each $i\in I$, choose an integer $n_i$. The resulting **integral framed-link surgery diagram** is this link and integer family, with the surgery result defined by removing the interiors of all $N(K_i)$ and gluing an oriented solid torus to each boundary torus so that its meridian maps to $n_i[\mu_i]+[\lambda_i]$. If $I=\varnothing$, the surgery result is $S^3$. A diagram is considered up to orientation-preserving ambient isotopy carrying each component framing; a planar projection is only a way of drawing the link.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Finite smooth oriented link and ambient isotopy]]

[[def-knot-exterior|Chosen component exterior]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and preferred longitude]]

[[thm-knot-exterior-homology-and-longitude|Existence and uniqueness of each preferred longitude]]

[[def-oriented-slope-and-knot-dehn-filling|Integer filling slope convention]]

[Saveliev, Lecture 2 §2.2, framed links and integral surgery](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[Kirby, A Calculus for Framed Links in S3, §1](https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf)
