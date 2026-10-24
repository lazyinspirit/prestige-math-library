---
id: ex-strict-metastable-eilenberg-maclane-range
kind: example
title: "A strict metastable Eilenberg–Mac Lane range"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces
  - lem-metastable-cohomology-of-eilenberg-maclane-spaces
  - thm-admissible-composites-present-the-mod-two-square-algebra
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "§1.3, polynomial cohomology of K(F₂,q) and the comparison theorem, printed pp. 52–58."
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§8, printed p. 15: universal Steenrod operations on Eilenberg–Mac Lane spaces."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC. For K=K(F₂,3), H³(K;F₂)=F₂{ι₃}, H⁴(K;F₂)=F₂{Sq¹ι₃}, and H⁵(K;F₂)=F₂{Sq²ι₃}. The strict operation range has i<3; at degree 6 the polynomial presentation also has ι₃², so the endpoint is excluded.

## Facts & Assumptions

**Given:** AC; the model $K=K(\mathbb F_2,3)$; the strict metastable range $i<3$; and the low-degree admissible basis $\mathcal A^0=\{1\}$, $\mathcal A^1=\{Sq^1\}$, $\mathcal A^2=\{Sq^2\}$.

[F1] The strict metastable theorem identifies $\widetilde H^{3+i}(K;\mathbb F_2)$ with $\mathcal A^i$ for $0\le i<3$ by evaluation on $\iota_3$ ([[lem-metastable-cohomology-of-eilenberg-maclane-spaces]]).

[F2] The admissible composites form a basis of $\mathcal A^i$ in each degree ([[thm-admissible-composites-present-the-mod-two-square-algebra]]), and the full polynomial presentation of $H^*(K;\mathbb F_2)$ gives the degree-six generators ([[prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces]]).

## Verification

1.1 The metastable theorem identifies each listed group with A^i by evaluation on ι₃. The low-degree admissible basis gives A⁰={1}, A¹={Sq¹}, A²={Sq²}; the normalized universal class and naturality identify the three images. [given, F1, F2]

2.1 The strict inequality excludes i=3, so the example does not extend the commissioned comparison range. [step 1.1, F1, F2] ∎
