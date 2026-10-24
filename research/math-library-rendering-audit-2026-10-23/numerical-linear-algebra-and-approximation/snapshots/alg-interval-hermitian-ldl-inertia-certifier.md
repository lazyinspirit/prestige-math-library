---
id: alg-interval-hermitian-ldl-inertia-certifier
kind: algorithm
title: Outward interval block LDL inertia certifier with pivot-inconclusive status
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [alg-symmetric-indefinite-block-ldl-star, lem-hermitian-block-ldl-inertia-additivity, lem-hermitian-two-by-two-inertia-sign-test, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: [thm-interval-hermitian-ldl-inertia-certifier-soundness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input $n\ge1$, a nonempty family of Hermitian matrices in $\mathbb C^{n\times n}$ enclosed by complex rectangles with real diagonal intervals and conjugate-paired off-diagonal rectangles, a simultaneous permutation of all $n$ positions, a partition of the permuted positions into consecutive pivot blocks of sizes one or two, the corresponding structural ordering, and a threshold $\theta\in(0,1]$. The exact midpoint matrix is Hermitian. First run the exact-arithmetic branch of [[alg-symmetric-indefinite-block-ldl-star]] on that midpoint with this same ordering, block partition and threshold. If it reports pivot-failure, return `pivot-inconclusive`; this is only failure of this candidate plan.

For a successful candidate plan, independently initialize the interval active matrix from the family enclosure and process the same blocks. At a one-by-one pivot require its real interval to exclude zero and determine its sign. At a two-by-two pivot, outward-enclose its real determinant $ad-|b|^2$ and trace $a+d$. Use [[lem-hermitian-two-by-two-inertia-sign-test]]: accept a negative determinant as inertia $(1,1,0)$; accept a positive determinant together with positive trace as $(2,0,0)$, and with negative trace as $(0,2,0)$. If these signs cannot be established, return `pivot-inconclusive` with the block index.

For each accepted block form its interval inverse from the scalar reciprocal or the adjugate divided by the determinant interval. Update the trailing Hermitian Schur complement by outward evaluation of $C-BD^{-1}B^*$. If a required denominator includes zero, an operation is undefined, an enclosure is non-finite, or Hermitian symmetry cannot be maintained, return `pivot-inconclusive`. At completion sum the certified pivot inertia triples and return `certified-inertia` with the count and factor/update record.

Every accepted pivot is nonsingular for every matrix represented by the current interval active matrix. A midpoint pivot failure, an interval pivot failure, or an unresolved sign never asserts that a family member is singular. The procedure makes no universal pivot-success or growth claim.
