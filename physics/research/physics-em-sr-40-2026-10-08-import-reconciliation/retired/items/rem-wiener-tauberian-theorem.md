---
id: rem-wiener-tauberian-theorem
kind: remark
title: Wiener Tauberian orientation
deps: []
proved_here: false
external_dependency:
  source_url: https://gdallaramath.wordpress.com/wp-content/uploads/2026/03/wiener-theorem.pdf
  exact_statement: For f∈L1(Rn) whose Fourier transform has no zeros, f*g=0 with g∈L∞ forces g=0 (Corollary 3.4, singleton family); via L1–L∞ duality this is density of the translate span.
  local_proof_attempt: The source proves a local frequency inversion lemma by a Neumann series and then uses tempered-distribution support; these inputs are not proved at this location.
  necessity: The design explicitly requests a Wiener Tauberian orientation. It supplies no logical dependency to any item in this batch.
verification:
  precheck: n/a
  sources_checked:
    date: 2026-09-12
    scope: "Theorem 3.1 and Corollary 3.4 on printed pp. 4–7; L1–L∞ duality orientation on p. 1"
    by: codex-owner-operator
status: published
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Gian Maria Dall’Ara, Wiener’s Tauberian Theorem and the Pompeiu Problem on L∞(Rd) (2026)
      url: https://gdallaramath.wordpress.com/wp-content/uploads/2026/03/wiener-theorem.pdf
      locator: §3, Theorem 3.1, Lemmas 3.2–3.3 and Corollary 3.4, pp.4–7; recorded orientation only
---

## Recorded orientation

Wiener's $L^1$ Tauberian theorem states that the linear span of all translates of $f\in L^1(\mathbb R^n)$ is dense in $L^1$ exactly when $\widehat f$ has no zeros. This result is recorded, not proved here, and supplies no proof dependency.

Dall'Ara, §3, pp.4–7, proves the convolution-annihilator form: if an $L^1$ family has no common Fourier zero and $g\in L^\infty$ is annihilated by convolution with every member, then $g=0$ almost everywhere (Corollary 3.4). For a singleton family, the usual $L^1$–$L^\infty$ duality and separation of a proper closed subspace translate this into the dense-translate formulation. That equivalence and its functional-analytic assumptions are part of the recorded orientation, not a local proof.

The source's complete route uses its spreading-out lemma, an explicitly convergent Neumann series to solve a convolution equation locally in frequency, and tempered-distribution support. Those later interfaces are not available as proved prerequisites at this location. The no-zero condition here is everywhere nonvanishing; it must not be confused with an $L^2$ density criterion involving almost-everywhere nonvanishing.
