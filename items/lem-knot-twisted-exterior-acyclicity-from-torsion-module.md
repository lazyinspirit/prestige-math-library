---
id: lem-knot-twisted-exterior-acyclicity-from-torsion-module
kind: lemma
title: "Torsion first homology makes the localized exterior spine complex acyclic"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - def-knot-wada-quotient-for-deficiency-one-presentation
  - lem-twisted-acyclicity-from-torsion-module
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony Conway, Burau Maps and Twisted Alexander Polynomials, Lemma 2.6"
      url: "https://arxiv.org/pdf/1510.06678"
      locator: "Complete version-2 PDF, §2(d), Lemma 2.6, printed pp. 8–9; localized acyclicity from torsion first homology."
    - title: "Paul Kirk and Charles Livingston, Twisted Alexander Invariants, Reidemeister Torsion, and Casson–Gordon Invariants, §3"
      url: "https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf"
      locator: "Complete §3; Euler-characteristic and twisted homology-torsion argument."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice convention of the twisted-chain definition. Let $L$ be a nonempty oriented link and let $X$ be a certified finite based two-dimensional spine of its compact exterior with one $0$-cell, $n\ge2$ $1$-cells and $n-1$ $2$-cells. Let $\psi:\pi_1(X)\twoheadrightarrow H\cong\mathbb Z^m$ be an epimorphism with $m\ge1$, let $\rho:\pi_1(X)\to\mathrm{GL}_d(\mathbb F)$ be a representation over a field, and form the twisted chain complex over $\Lambda=\mathbb F[H]$ and its localization over $Q=\operatorname{Frac}(\Lambda)$. If its degree-one homology over $\Lambda$ is a torsion module, then its fraction-field complex is acyclic.

## Statement references

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted exterior chain complex]]

[[lem-twisted-acyclicity-from-torsion-module|General localized acyclicity lemma]]

[Conway, Lemma 2.6](https://arxiv.org/pdf/1510.06678)

[Kirk and Livingston, §3](https://chuck-livingston.github.io/math/Livingston_papers/1999_Twisted%20Alexander%20invariants%2C%20Reidemeister%20torsion%2C%20and%20Casson-Gordon%20invariants.pdf)

## Facts & Assumptions

**Given:** AC; a based two-dimensional simple spine of a nonempty link exterior with one $0$-cell, $n$ $1$-cells and $n-1$ $2$-cells; a positive-rank free abelian deck quotient; a field-valued representation; and the torsion hypothesis on degree-one homology.

[A1] AC is inherited from the full abelianization convention. [[def-axiom-of-choice]]

[F1] The based twisted complex is built from the exterior spine and its prescribed coefficient action; a certified spine has the same based simple-homotopy type as the selected exterior cell structure. [[def-knot-twisted-chain-complex-and-reidemeister-torsion]]; [[def-knot-wada-quotient-for-deficiency-one-presentation]]

[F2] For a finite based two-dimensional complex with one $0$-cell, $n$ $1$-cells and $n-1$ $2$-cells, positive-rank free-abelian deck map and torsion $H_1$ over the Laurent coefficient ring, localization yields an acyclic complex. [[lem-twisted-acyclicity-from-torsion-module]]

## Proof



1.1 The stated cell counts give $\chi(X)=1-n+(n-1)=0$, and the two-dimensional spine has no cellular chain groups above degree $2$. The declared deck group has positive rank, the coefficient field and representation are as in [F1], and the degree-one torsion hypothesis is exactly the remaining module assumption of [F2]. [A1, F1, F2, given, algebra]

2.1 Apply [F2] to this $X$, $\rho$, and $\psi$. It gives $H_i(C_*^{\rho,\psi}(X;Q^d))=0$ in every degree; hence the fraction-field complex is acyclic. [F1, F2, step 1.1] ∎

