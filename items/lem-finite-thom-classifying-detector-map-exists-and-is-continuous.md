---
id: lem-finite-thom-classifying-detector-map-exists-and-is-continuous
kind: lemma
title: "The finite Thom classifying detector map exists and is continuous"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-finite-thom-classifying-detector-map
  - thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - thm-product-universal-property
  - def-axiom-of-choice
  - def-mod-two-square-algebra-admissible-sequences-and-excess
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§13, printed pp. 24–25: classifying maps to Eilenberg–Mac Lane spaces; the finite generator product and its continuity are verified locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and the construction of [[def-finite-thom-classifying-detector-map]], using the single global basis B=⋃_{d≥0}B_d and section fixed there. For every r≥2, the initial segment B(r)=⋃_{0≤d<r}B_d is finite; for each b∈B_d with d_b=d, the coordinate class m̄_{b,r}∈H̃^{r+d_b}(T_r;F₂) has a based representative f_{r,b}:T_r→K(F₂,r+d_b) representing that class; and the coordinate family uniquely defines a continuous based map f_r:T_r→P_r.

## Facts & Assumptions

**Given:** AC and the construction of [[def-finite-thom-classifying-detector-map]], using the single global basis $B=\bigsqcup_{d\ge0}B_d$ and the degree-preserving section $s$ fixed there; a rank $r\ge2$.

[F1] The definition fixes the global basis and section and the initial segments $B(r)$, and the freeness theorem makes the lifts a free $\mathcal A$-basis ([[def-finite-thom-classifying-detector-map]], [[thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra]]).

[F2] The degreewise constancy lemma identifies each fixed $m_b$ with an actual reduced cohomology class of $T_r$ once $r>d_b$, and the degree pieces of $M$ are finite-dimensional ([[lem-stable-thom-cohomology-is-degreewise-eventually-constant]], [[def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum]]).

[F3] Eilenberg–Mac Lane representability turns a reduced cohomology class on a based CW complex into a based homotopy class with an actual representative, and the finite product universal property assembles the coordinate maps into a unique continuous based map ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[thm-product-universal-property]]); AC underlies the global choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 This initial segment is finite: each Q^d is a quotient of the finite-dimensional M^d, and there are only r degrees in the union. For b∈B_d, the stable coordinate isomorphism M^d→H̃^{r+d}(T_r;F₂) supplies the rank-r class m_{r,b} from the same fixed stable element m_b. Let f_{r,b}:T_r→K(F₂,r+d) classify m_{r,b}, using the published Eilenberg–Mac Lane representability theorem. Set $P_r=\prod_{b\in B(r)}K(\mathbb F_2,r+d_b)$ and $f_r=(f_{r,b})_{b\in B(r)}$. [given, F1, F2, F3]

2.1 The product is finite, so its coordinate maps define a continuous based map. This is the promised construction from homogeneous free-module generators; the generic representability construction alone would not show the comparison. [step 1.1, F3] ∎
