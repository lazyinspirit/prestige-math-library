---
id: thm-kim-shahidi-symmetric-cube-lift-for-cuspidal-gl2
kind: theorem
title: Kim–Shahidi Symmetric-Cube Lift for Cuspidal GL(2)
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
proof_strategy: global-functoriality-and-converse-theorem
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "H. H. Kim and F. Shahidi, Functorial Products for GL₂ × GL₃ and the Symmetric Cube for GL₂"
      url: "https://www.math.purdue.edu/~fshahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2057pp%5D---Functorial%20products%20for%20GL_2%20x%20GL_3%20and%20the%20symmetric%20cube%20for%20GL_2.pdf"
      locator: "§6, Theorem 6.1 and its proof, printed pp. 869–873."
    - title: "H. H. Kim and F. Shahidi, Symmetric Cube L-functions for GL₂ Are Entire"
      url: "https://arxiv.org/pdf/math/9909198"
      locator: "The automorphic symmetric-cube construction and its analytic applications."
---

## Statement

Let $F$ be a number field and let $\pi$ be a cuspidal automorphic
representation of $\mathrm{GL}_2(\mathbb A_F)$ with central character
$\omega_\pi$, the character by which the center acts. Then the symmetric-cube lift
$\operatorname{Sym}^3(\pi)$ is an automorphic representation of
$\mathrm{GL}_4(\mathbb A_F)$ whose unramified local Satake parameters at all
but finitely many finite places are the symmetric cubes of those of $\pi$. It
is cuspidal unless either
$\pi\simeq\pi\otimes\eta$ for a nontrivial Hecke character $\eta$, or
$\operatorname{Ad}(\pi)\simeq\operatorname{Ad}(\pi)\otimes\eta$ for a
nontrivial Hecke character $\eta$, where
$\operatorname{Ad}(\pi)=\operatorname{Sym}^2(\pi)\otimes\omega_\pi^{-1}$. A
Hecke character is a continuous character of
$F^\times\backslash\mathbb A_F^\times$.

## Statement references

[H. H. Kim and F. Shahidi, *Functorial Products for GL₂ × GL₃ and the Symmetric Cube for GL₂*](https://www.math.purdue.edu/~fshahidi/articles/Kim%20%26%20Shahidi%20%5B2002%2C%2057pp%5D---Functorial%20products%20for%20GL_2%20x%20GL_3%20and%20the%20symmetric%20cube%20for%20GL_2.pdf)

[H. H. Kim and F. Shahidi, *Symmetric Cube L-functions for GL₂ Are Entire*](https://arxiv.org/pdf/math/9909198)

## Proof status

The full source proof proceeds through the GL(2) by GL(3) functorial product,
analytic properties from the Langlands–Shahidi method, and a converse theorem.
Those constructions and their cited inputs are not reconstructed locally.
The theorem is retained and escalated; the primary paper has been read through
the complete relevant §6 argument, but source reading is not proof acceptance.
