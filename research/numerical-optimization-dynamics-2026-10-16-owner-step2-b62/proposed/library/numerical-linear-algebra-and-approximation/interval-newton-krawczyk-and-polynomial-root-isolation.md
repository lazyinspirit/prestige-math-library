---
page: interval-newton-krawczyk-and-polynomial-root-isolation
title: Interval newton krawczyk and polynomial root isolation
status: draft
items:
  - lem-polynomial-squarefree-decomposition-and-multiplicity
  - thm-sturm-sign-variation-counts-distinct-roots
  - lem-squarefree-integer-polynomial-root-separation-bound
  - alg-rational-polynomial-root-isolation
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
  - def-real-boxes-and-interval-jacobian-enclosures
  - lem-brouwer-fixed-point-for-closed-box
  - lem-real-interval-arithmetic-preserves-enclosure
  - alg-scalar-interval-newton-certification
  - alg-krawczyk-root-certification
  - alg-smooth-function-root-isolation
  - lem-interval-jacobian-mean-value-enclosure
  - thm-scalar-interval-newton-exclusion-and-inclusion
  - thm-smooth-function-root-isolation-soundness
  - thm-krawczyk-inclusion-exclusion-and-uniqueness
examples: []
---

This page gives two certified root-isolation routes. Exact rational polynomials use gcd squarefree decomposition, Sturm variation at exact rational endpoints, and dyadic bisection; the coefficient-height root bound and separation estimate prove that the exact process terminates. The gcd route preserves multiplicities, so even-multiplicity roots need no sign change.

For $C^1$ functions on an open interval, scalar interval Newton uses valid function and derivative enclosures. A disjoint Newton intersection or a range enclosure excluding zero proves absence; strict inclusion in the interval interior proves existence and, when the derivative enclosure excludes zero, uniqueness. A failed test leaves the box unresolved.

For $C^1$ maps on an open convex domain, the Krawczyk operator combines a point preconditioner, an interval Jacobian, and outward interval operations. Strict inclusion in the box interior proves existence by Brouwer. Uniqueness requires a separately certified contraction bound; strict inclusion alone is not a uniqueness claim. The smooth-function isolator reports certified boxes plus unresolved boxes after finite budgets and makes no all-roots claim unless the unresolved list is empty.

The nonlinear-equation, outward-interval, and verified-linear-systems interfaces are retained. The polynomial proofs also reuse the published fundamental theorem of algebra and exact polynomial gcd results. The local closed-box fixed-point reduction uses the published closed-ball Brouwer theorem; the interval Jacobian, Sturm count, multiplicity and root-separation arguments are proved locally with their explicitly listed prerequisites.

