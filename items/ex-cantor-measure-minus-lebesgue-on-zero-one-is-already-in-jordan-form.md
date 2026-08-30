---
id: ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form
kind: example
title: "Cantor measure minus Lebesgue measure on [0,1] is already in Jordan form"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-cantor-measure-is-a-singular-atomless-probability-measure, thm-jordan-decomposition-for-signed-measures]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 6.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 12.7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $\mu_c$ be the Cantor measure and let
$\lambda_0(E):=\lambda(E\cap[0,1])$. Then
$$\nu:=\mu_c-\lambda_0$$
is a signed measure whose Jordan decomposition is already
$$\nu^+=\mu_c,\qquad \nu^-=\lambda_0.$$

## Facts & Assumptions

**Given:** The Cantor measure $\mu_c$ and the restricted Lebesgue measure
$\lambda_0$ on $[0,1]$.

[L1] The Cantor measure is a singular probability measure concentrated on the
Cantor set $C$, and $\lambda(C)=0$. ([[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

[L2] Jordan decomposition is the unique decomposition of a signed measure into
mutually singular positive parts. ([[thm-jordan-decomposition-for-signed-measures]])

## Verification

**Proof technique:** direct.

1.1 By [L1], $\mu_c$ vanishes on measurable subsets of $\mathbb R\setminus C$, [L1, L2]
while $\lambda_0$ vanishes on measurable subsets of $C$ because $\lambda(C)=0$.
Thus $\mu_c\perp\lambda_0$. Both are positive measures, so
$\nu=\mu_c-\lambda_0$ is a signed measure already written as a difference of
mutually singular positive measures.

2.1 The uniqueness clause in [L2] now forces [L2, step 1.1] ∎
$$\nu^+=\mu_c,\qquad \nu^-=\lambda_0.$$
Hence $\mu_c-\lambda_0$ is already in Jordan form.
