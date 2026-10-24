---
id: lem-universal-real-thom-spaces-are-r-minus-one-connected
kind: lemma
title: "Universal real Thom spaces are (r−1)-connected"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - lem-high-relative-cells-do-not-change-lower-homotopy
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.L cell-attachment argument, printed pp. 351–353: cells above a given dimension do not affect lower homotopy."
verification:
  precheck: pass
---

## Statement

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. For each r≥2, T_r=Th(γ_r over BO(r)) is a nonempty (r−1)-connected based CW complex.

## Facts & Assumptions

**Given:** AC; the based CW Thom space $T_r=\mathrm{Th}(\gamma_r)$ of the universal real rank-$r$ bundle from [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]], with its Schubert-cell CW structure and basepoint vertex.

[F1] The prespectrum definition constructs $T_r$ as a based CW complex with the weak cell topology and basepoint vertex ([[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]]).

[F2] The Schubert cells of $BO(r)$ attach with finite boundary support and give the CW structure; over a $d$-cell the Thom construction contributes a cell of dimension $d+r$ ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[def-thom-prespectrum-of-the-universal-real-and-oriented-bundles]]).

[F3] For a CW pair whose relative cells all have dimension at least $n+1$, the inclusion of the subcomplex induces isomorphisms on $\pi_i$ for $i\le n-1$ and a surjection on $\pi_n$ ([[lem-high-relative-cells-do-not-change-lower-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 The prespectrum construction constructs T_r as a based CW complex. Over a d-dimensional Schubert cell of BO(r), its Thom attachment contributes cells of dimension d+r, with d≥0; hence every cell outside the basepoint has dimension at least r. Apply the published high-relative-cells lemma to the CW pair (T_r,*): it is (r−1)-connected. In particular T_r is path-connected and simply connected for r≥2. The basepoint is a vertex. [given, F1, F2]

2.1 This is the separate connectivity argument required by the finite-range comparison; it does not follow from a cohomological Thom isomorphism alone. [step 1.1, F3] ∎
