# Frontier 33 — Independent reader report, batch 9

## Scope opened

- Manifest, coverage context, and contracts:
  `research/frontier-33-batch-9.pages.json`,
  `research/frontier-33-batch-9.coverage.json`, and
  `research/frontier-33-batch-9.proof-contracts.json`.
- Draft A page:
  `library/algebraic-geometry/dimension-constructible-images-and-dimensions-of-fibres.md`.
  I read all 46 listed items: the dimension conventions; affine, local, product,
  codimension, constructible-image, fibre-dimension, projective-intersection,
  and finite-map results; and the concluding hypotheses remark.
- Draft B page:
  `library/algebraic-geometry/dimension-constructible-images-and-dimensions-of-fibres-examples.md`.
  I read all ten listed examples and counterexamples: coordinate cross,
  hyperbola, degenerate hyperbola family, jumping-fibre map, nonclosed image,
  finite-fibres/non-finite map, plane curves, empty-fibre convention, singular
  ambient intersection, and rank loci.
- Direct external suppliers needed by those proofs (30 current items) were
  opened, including the topology and classical-variety definitions; affine
  Nullstellensatz, product, rational-function, height, localisation, and
  Noether-normalisation results; the projective cone/chart/diagonal results;
  and Nakayama and lying-over.  The A-page prerequisite closure was also read.
- Primary source passages were opened independently: Milne, *Algebraic
  Geometry*, Corollary 6.47 and Theorem 9.9--9.11; Arapura, *Notes on Basic
  Algebraic Geometry*, Theorem 4.2.1--Corollary 4.2.3 and Example 4.2.4;
  Vakil, *The Rising Sea*, Theorem 12.4.1--Corollary 12.4.2; and Vakil Class
  38 for the projective-morphism/closed-projection route.  Their stated
  domains, fibre qualifications, and generic-open conclusions agree with the
  current items.

## Review and edit

No defect was confirmed, so no content, page prose, contract, or verification
record was edited.

The audit checked the empty-space and zero-dimensional conventions; finite
closed covers and open covers; reduction to affine charts; the direction of
the field inclusions under a dominant morphism; the normalization-and-finite
fibre argument; the lower and generic fibre bounds; the special-fibre and
rank-locus computations; and the projective cone, linear-avoidance, and
closed-projection arguments.  In particular, the generic-fibre statement
retains both irreducibility hypotheses and gives a nonempty image open, while
the upper-semicontinuity statement remains restricted to projective morphisms.
The examples preserve the empty-fibre value $-\infty$, reduced-fibre convention,
and the counterexamples' exact negated claims.

## Page verdicts and blocker

- A `dimension-constructible-images-and-dimensions-of-fibres`: **pass**.
- B `dimension-constructible-images-and-dimensions-of-fibres-examples`:
  **pass**.
- Blocker: none in the assigned current material.

## Validation

- PASS — focused precheck: 47 proof-bearing assigned items, 0 failures.
- PASS — strict proof-contract check: 47/47, 0 errors and 0 warnings.
- PASS — content policy: 56 scoped items, 0 errors and 0 warnings.
- PASS — rendercheck for both assigned pages.
- PASS — manifest dependency check: 56 items, 0 normalizations and 0 errors.
