# Focused efficient-grid supplier completion

Scope: QC13 efficient scaled grid prerequisite, Step 1 of
quantum-computing-algorithms-60-2026-10-15. New carriers only;
existing norm algorithm, approximation procedure, manifests, contracts,
readiness and consumers remain under the QC13 owner's integration.

Source: Ross–Selinger arXiv:1403.2975v3, full local text at
research/quantum-computing-planning/sources/qc_r3/ross-selinger-1403.2975.txt.
Relevant proofs read directly: Sections 4–5 and Appendix A; synthesis and
conditional complexity hypotheses checked against Sections 7–8.
The source's informal upright-set counting is replaced by explicit counts.

New items:

- lem-qc-cyclotomic-one-dimensional-grid-enumeration
- lem-qc-paired-ellipse-grid-uprighting
- alg-qc-rz-efficient-scaled-grid-iterator
- thm-qc-rz-efficient-scaled-grid-enumeration

Proof content:

- Quadratic unit rescaling gives finite random-access one-dimensional
  proposal lists of O(1+length-product) size. Elementary rounding gives
  a lower bound proportional to the product above a fixed threshold.
- Paired ellipses use the source's explicit R/K/A/B skew contractions,
  including all coordinate cases and strict rational constant bounds.
  Skew-preserving diagonal balancing bounds matrix entries and floor
  operands by a polynomial in the initial eigenvalue bound.
- The cap is between concentric outer/inner ellipses with scale ratio 8.
  Uprighted ellipses contain axis boxes of fixed fractional widths.
  If both coordinate products are large, inner boxes prove proposal
  density. Otherwise there are only constantly many coordinate lines;
  exact remaining-coordinate slices give the output-sensitive bound.
- Very small or singleton slices are padded to product at most one and
  filtered by their original constraints, bounding floor costs without
  introducing a stronger comparison oracle.
- Three nonzero residue classes modulo sqrt(2) give precisely the new
  denominator layer. No exponentially large old-denominator filtering
  or tie-order sorting is required.
- The proposal domain size is M=O(N+1), N the exact layer output count.
  Each loop draws one bounded block of random bits, skips a rejected
  random index, and always advances the exhaustive background scan.
  Every bit sequence therefore finishes each finite layer.
- Coupon estimates give expected O(j log(j+1)) proposal work for j new
  outputs, with every fixed moment bounded by a polynomial in j.
  Floor comparisons and random-bit generation are charged polynomially
  in k+log(1/epsilon); startup is O(log(1/epsilon)^2).

Stopping-time integration must use these prefix moments with the prime
hazard tail, not substitute an expected stopping index into a nonlinear
cost bound. A dyadic Cauchy–Schwarz sum gives polynomial expectation even
when iterator delay and stopping index are dependent, provided the
quantitative prime model holds conditionally on iterator ordering/history.
The QC13 owner retains this consumer-level integration.

Self-review and the QC13 owner's focused review identified the same
unbounded rejection-sampling liveness corner; it is repaired as above.
No tests, gates, hashes, verification stamps, readiness or commits run.
