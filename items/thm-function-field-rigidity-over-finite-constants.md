---
id: thm-function-field-rigidity-over-finite-constants
kind: theorem
title: "Rigidity of height-zero loci over finite constants"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - thm-rigidity-of-height-zero-loci-for-polarized-systems-over-function-curves
  - thm-function-field-northcott-for-finite-constant-field
  - thm-vector-and-scalar-height-zero-equivalence-over-function-curve
  - thm-function-field-admissible-canonical-metric-existence
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§5.1, Lemma 5.1 and its proof"
---

## Statement

Let $K=\mathbb F_q(B)$ be a global function field with finite full constant field, and let $X/K$ be projective. Let $f,g:X\to X$ be polarized endomorphisms. For each system let $\bar L_f$ and $\bar M_g$ be its admissible canonical metrics, and define $Z_f=\{P\in X(\overline K):h_{\bar L_f}(P)=0\}$ and $Z_g=\{P\in X(\overline K):h_{\bar M_g}(P)=0\}$ using normalized point-intersection heights. Let $Z$ be the Zariski closure of $Z_f\cap Z_g$. Then
$$
Z_f\cap Z(\overline K)=Z_g\cap Z(\overline K).
$$

## Statement references

[[thm-rigidity-of-height-zero-loci-for-polarized-systems-over-function-curves]]

[[thm-function-field-northcott-for-finite-constant-field]]

[[def-adelic-metrized-line-bundle-over-function-curve]]

[[thm-function-field-admissible-canonical-metric-existence]]

## Facts & Assumptions

**Given:** A global function field $K$ with finite full constant field; a projective variety $X/K$; two polarized endomorphisms; their admissible metrics; and the associated point-intersection heights.

[F1] The finite-constant Northcott theorem gives the vector-height/preperiodic-point equivalence for every algebraic point. ([[thm-function-field-northcott-for-finite-constant-field]])

[F2] Carney's global-function-field rigidity consequence identifies the height-zero loci on the closure of their intersection. ([[thm-rigidity-of-height-zero-loci-for-polarized-systems-over-function-curves]])

[F3] The vector-valued and scalar canonical heights have the same zero set over a one-variable function field. ([[thm-vector-and-scalar-height-zero-equivalence-over-function-curve]])

## Remaining local proof obligations

Carney's §5.1 uses the rigidity theorem and finite-constant Northcott property to derive the global-function-field preperiodic consequences. The locally written rigidity theorem is stated in the algebraically closed constant-field setting of Theorem 4.6; the full extension/base-change argument needed for this finite-constant closure statement has not been reconstructed locally. The source claim is retained as an escalated intermediate result rather than silently inferred from the algebraically closed case.
