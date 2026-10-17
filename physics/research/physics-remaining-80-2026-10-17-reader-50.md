# Step 3a reader report — batch 50

Run: `physics-remaining-80-2026-10-17`  
Scope: batch `50` only.

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mi01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mi01-examples.md`

Assigned items, reviewed supplier-first:

1. `items/lem-tgr-coordinate-boxes-are-compact-jordan.md`
2. `items/lem-tgr-c1-current-density-divergence.md`
3. `items/def-tgr-spacelike-current-slab.md`
4. `items/lem-tgr-normal-flux-coordinate-density.md`
5. `items/thm-tgr-finite-current-production-balance.md`
6. `items/cex-tgr-open-region-entropy-export.md`

The batch proof contracts were reviewed at
`research/physics-remaining-80-2026-10-17-batch-50.proof-contracts.json`.

Exact statements/definitions of the 18 declared direct suppliers were opened:

- `def-countable-choice`, `def-gr-smooth-lorentzian-objects`,
  `def-oriented-smooth-manifold-and-oriented-chart`,
  `def-gr-metric-volume-form-and-current-flux`,
  `lem-gr-metric-divergence-and-density-formula`, and
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`;
- `def-multidimensional-rectangle-and-volume`,
  `def-jordan-inner-and-outer-content`, `thm-heine-borel-rn`,
  `thm-jordan-boundary-criterion`, `def-null-and-content-zero-in-rn`,
  `thm-continuous-functions-on-compact-jordan-sets-are-integrable`,
  `thm-lebesgue-criterion-in-rn`, `def-riemann-integral-over-a-jordan-set`,
  `def-multidimensional-darboux-integral`,
  `def-multidimensional-darboux-sums`, `thm-ftc-second-part`, and
  `thm-jordan-fubini-by-sections`.

## Review and edits

- `lem-tgr-coordinate-boxes-are-compact-jordan`: sound. The finite thin-slab
  covers have total content below arbitrary $\varepsilon$; the endpoint
  variants and their zero-extension integrability follow from the cited
  Jordan-boundary and Riemann criteria.
- `lem-tgr-c1-current-density-divergence`: the local extension is sound. The
  published density supplier supplies only the smooth-metric density and
  Christoffel-trace identities; the product rule then applies to the stated
  $C^1$ current. Its two published GR suppliers have separate missing audit
  markers recorded below.
- `def-tgr-spacelike-current-slab`: sound. The hypotheses give a positive
  spatial block and $g^{00}<0$; the lapse formula gives the unit normal, and
  the coordinate three-form signs give upper-minus-lower side flux. The
  definition explicitly limits “charge” to a mathematical integral.
- `lem-tgr-normal-flux-coordinate-density`: sound. The block determinant and
  inverse calculation gives $w=\alpha\sqrt{\det h}$, while
  $-g(J,n)=\alpha J^0$.
- `thm-tgr-finite-current-production-balance`: repaired step 1.3. The spatial
  sections of $K$ are open intervals, but the FTC supplier applies to their
  closed closures. The proof now explains that the zero extension changes a
  bounded continuous density only at the two content-zero endpoints, so the
  Jordan integral agrees with the closed-interval integral. The updated proof
  contract records this use. The balance identity and conditional inequalities
  then follow from the $C^1$ density identity, FTC, and oriented face formula.
- `cex-tgr-open-region-entropy-export`: repaired by adding step 1.2, which
  compares the zero-extension integrals on the open slice and mixed-endpoint
  face rectangles with their closed rectangular hulls using content-zero
  boundaries. Steps 2.2 and 3.1 now cite that comparison. The explicit field
  remains a mathematical example, with zero divergence and positive net
  outward flux equal to the lost slice charge. Its proof contract was updated.

No assigned page prose was changed. Neither repaired item had a stale
`verification.judge` record.

Validation after the final item edits:

- Reflow and precheck completed for both repaired items; precheck passed on
  both.
- `node tools/physics-support/proof-layout.mjs items/thm-tgr-finite-current-production-balance.md items/cex-tgr-open-region-entropy-export.md`
  reported `2 items, 13 steps, 0 defects`.

## Uneditable findings

- `lem-gr-metric-divergence-and-density-formula` is a published lemma with a
  Statement and Proof, but its frontmatter verification block at lines 33–34
  records only `precheck: pass`. The physics schema requires
  `verification.audited` or `verification.verified` for a published
  proved-here item. Assigned consumer:
  `lem-tgr-c1-current-density-divergence`.
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` is a published
  theorem with a Statement and Proof, but its frontmatter verification block
  at lines 46–47 records only `precheck: pass`. The same publication
  requirement applies. Assigned consumer:
  `lem-tgr-c1-current-density-divergence`.

These published suppliers are outside the assigned write scope. The findings
are metadata defects and do not assert that either mathematical statement is
false.

## Page verdicts

- `tgr-mi01`: **pass**. The summary accurately describes the spacelike slab,
  normal-charge conversion, finite balance, net-flux condition, and the
  absence of a unit-normal requirement on side faces.
- `tgr-mi01-examples`: **pass**. Its summary matches the explicit flat example;
  the integrated flux includes the slab duration, and the page disclaims an
  Einstein–fluid solution or physical entropy postulate.

## Blocker

No blocker remains for this batch review. Owner disposition is needed for the
two published-supplier audit-marker findings before their publication evidence
can satisfy the schema.
