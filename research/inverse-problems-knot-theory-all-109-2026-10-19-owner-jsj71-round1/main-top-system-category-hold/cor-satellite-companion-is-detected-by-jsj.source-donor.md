---
id: cor-satellite-companion-is-detected-by-jsj
kind: corollary
title: "The JSJ system detects a companion torus when it is not amalgamated"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - lem-satellite-torus-is-essential
  - thm-jsj-decomposition-of-knot-exteriors
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§4, Definitions 4.1 and 4.3, Propositions 4.6 and 4.14, Theorem 4.18, PDF pp.14–21"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Theorem 1.9 and its uniqueness proof, printed pp.14, 21–23"
---

## Statement

Assume full AC. Let $M=E_{P(K)}$ be a satellite knot exterior with companion torus $T_c$. Suppose the pattern hypotheses of the essential-companion-torus lemma hold, both components of $M$ cut along $T_c$ are atoroidal or Seifert-fibered, and $M$ itself is neither atoroidal nor Seifert-fibered. Then the inclusion-minimal JSJ system of $M$ consists of a torus ambient isotopic to $T_c$. Cutting along that torus identifies the companion exterior $E_K$ as the component on the outside of the embedded companion solid torus. No conclusion is made for an essential companion torus that is absorbed into a Seifert-fibered union.

## Statement references

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Theorem 1.9](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** Full AC, a satellite knot exterior $M$, its companion torus $T_c$, the stated pattern hypotheses, and the two pieces obtained by cutting along $T_c$.

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] The pattern and companion torus are defined in [[def-satellite-pattern-companion-and-winding-number]].

[F2] Under the nontrivial companion and nonproduct pattern hypotheses, $T_c$ is essential ([[lem-satellite-torus-is-essential]], Statement).

[F3] A finite family of incompressible tori is a JSJ system when cutting along it gives only atoroidal or Seifert-fibered pieces; inclusion-minimality excludes every proper subfamily ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F4] For a compact knot exterior, an inclusion-minimal JSJ system is unique up to ambient isotopy ([[thm-jsj-decomposition-of-knot-exteriors]], Statement).

## Proof

1.1 By [F2], $T_c$ is incompressible. The hypothesis on the two cut components and [F3] show that the singleton family $\{T_c\}$ is a JSJ system. The empty family is not a JSJ system because its sole cut component is $M$, which by hypothesis is neither atoroidal nor Seifert-fibered. Thus $\{T_c\}$ is inclusion-minimal. [A1, F1, F2, F3, given, construct]

2.1 For the retained smooth-system subcase, let a GIVEN smoothly embedded inclusion-minimal JSJ system be specified. The companion torus $T_c$ is smooth, and step 1.1 made its singleton a minimal system. Apply the proved smooth-system uniqueness subcase of [F4] to these two systems. It follows that the specified SMOOTH minimal system consists of one torus smoothly ambient isotopic to $T_c$. Its final diffeomorphism carries the outside component $E_K$ to the corresponding outside component, while the boundary of $M$ remains on the pattern side. The original unqualified all-system uniqueness conclusion is not proved for arbitrary TOP minimal systems; it retains the main theorem's category hold. The Statement is unchanged and no full original proof credit is claimed. [F1, F4, step 1.1, construct]
