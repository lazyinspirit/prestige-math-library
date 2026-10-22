---
id: lem-adjoint-twisted-slope-is-rational-on-a-character-component
kind: lemma
title: "Rationality of the adjoint-twisted slope"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-character-variety-logarithmic-slope-invariant
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - def-knot-a-polynomial
  - lem-knot-a-polynomial-boundary-elimination
  - lem-sl-two-character-trace-coordinate-model
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - thm-irreducible-sl2-characters-determine-conjugacy-and-rational-descent
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Proposition 3.8 and §§3.3–3.5"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Stephan Tillmann, Varieties associated to 3-manifolds, §§4.5–4.8"
      url: "https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf"
---

## Statement

Assume full AC. Let $X$ be an irreducible component of the $SL_2(\mathbb C)$ character variety of a knot exterior that contains irreducible characters and has a nonempty dense Zariski-open locus of scheme-smooth, non-boundary-parabolic admissible characters. On this locus the Bénard–Florens–Rodau slope is invariant under conjugation and extends to a rational map $X\dashrightarrow\mathbb P^1(\mathbb C)$; when $X$ is one-dimensional this is a rational function on its function field.

## Statement references

[Bénard, Florens, and Rodau, Proposition 3.8 and §§3.3–3.5](https://arxiv.org/html/2103.14151)

[Tillmann, §§4.5–4.8](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, an irreducible character component $X$, and the specified dense smooth non-boundary-parabolic admissible locus.

[F1] The slope is the projective coordinate of the one-dimensional kernel in the ordered peripheral twisted-homology basis ([[def-character-variety-logarithmic-slope-invariant]]).

[F2] The twisted cellular and Fox matrices have entries regular in representation coordinates ([[def-adjoint-twisted-homology-and-culler-shalen-data]]; [[lem-twisted-fox-jacobian-is-cellular-boundary]]).

[A1] A complete proof must show the constant-rank homology spaces form algebraic bundles on a dense open set, the kernel line is an algebraic section there, and the resulting rational function descends through the conjugation quotient. The required irreducible-character orbit and quotient-descent arguments have no complete local supplier; the proposed missing supplier is [[thm-irreducible-sl2-characters-determine-conjugacy-and-rational-descent]].

## Proof obligation

On a patch where the relevant Fox and boundary matrices have fixed rank, nonzero minors give rational coordinates for their kernels and images. The remaining proof must show these local kernel coordinates agree under changes of minors and conjugation, then descend to the character component rather than only to a representation variety. The cited paper's proposition has this route, but the local rank-bundle and descent arguments are not supplied here. This lemma is escalated.
