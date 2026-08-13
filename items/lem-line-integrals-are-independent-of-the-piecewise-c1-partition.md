---
id: lem-line-integrals-are-independent-of-the-piecewise-c1-partition
kind: lemma
title: "The piecewise-C1 line-integral sums do not depend on the admissible partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-additivity-over-subintervals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.2"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

For a piecewise-$C^1$ path $\gamma$, the scalar and vector line-integral sums in [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]] have the same value for every admissible partition. Thus both line integrals are well-defined.

## Facts & Assumptions
**Given:** A piecewise-$C^1$ path $\gamma:[a,b]\to\mathbb R^n$, continuous fields $f$ and $F$ on its trace, and two admissible partitions.

[L1] On a nondegenerate admissible piece, the scalar summand is the integral of $f(\gamma(t))\lVert\gamma'(t)\rVert_2$ and the vector summand is the integral of $\langle F(\gamma(t)),\gamma'(t)\rangle$; on a singleton parameter interval both line integrals are defined as zero ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] An integrable function is integrable on the two sides of any inserted interior point, and its integral over the original interval is the sum of those two integrals ([[thm-additivity-over-subintervals]]).



## Proof

**Proof technique:** direct.

1.1 Inserting one point into an admissible partition only splits one smooth piece. By [L2], the original scalar summand equals the two new scalar summands, and the same holds for the vector summand. Hence either total sum is unchanged. [given, L1, L2]

2.1 The union of the two finite partitions is a finite common refinement. Repeatedly applying step 1.1 shows that each original sum equals the sum over this refinement. [given, step 1.1]

3.1 Therefore the two original scalar sums agree, and the two original vector sums agree. [step 2.1]

4.1 A partition with no interior breakpoints already equals its own refinement. For a constant path on a nondegenerate interval every derivative extension is zero, while on a singleton interval both integrals are zero by [L1]. Thus the conclusion includes both boundary cases. [L1, algebra] ∎
