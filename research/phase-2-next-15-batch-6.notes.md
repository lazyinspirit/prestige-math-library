# phase-2-next-15 batch 6 — Step 1 scaffold notes

## Scope and controlling evidence

Owned files are limited to the Batch 6 manifest, coverage, notes, readiness
records, and consumer-batch dependency input. No published item, shared plan,
engine state, or verdict was edited.

The following were read before construction: `CLAUDE.md`, `README.md`,
`SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the assigned task,
the current plan entries, planning notes, Alpha drift report, the complete
DG-17 and DG-20 designs, the frontier-dependency instructions, and the
relevant published prerequisite statements and proofs.

The current plan supplies the authoritative page IDs, orders, categories,
companions, and `requires` lists. Its item arrays are empty for both owned
pairs, so the complete track designs control the mathematical inventory subject
to the prerequisite repairs below. Alpha's current drift report says
`no-drift` for both pairs at page level.

## Design/plan conflicts and locator resolution

- The dispatch locator `research/plan-differential-geometry-track.md L4545`
  lands inside the DG-17 B-page subsection, not at the start of the design.
  The complete DG-17 section at lines 4362–4595 controls. The current
  `plan-spec.json` metadata and prerequisite list agree with that section.
- For DG-20, line 5224 is the actual section start and controls. Line 5376 is
  an internal location in the completeness/Hopf–Rinow part of the same design,
  not a second design and not an override.
- DG-20 labels its list “dependency order,” but its strongly convex
  neighborhood theorem includes **minimizing** geodesics while appearing before
  Gauss lemma and radial minimality. That is a real forward proof dependency.
  The manifest places
  `thm-existence-of-geodesically-convex-neighborhoods` after
  `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood` and
  `cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing`.
  No claim was weakened.
- The base Riemannian definition permits boundary where stated, but two-sided
  geodesic flow and Hopf–Rinow are false with that reading (a compact interval
  is the elementary counterexample). The design did not print this convention.
  A leading local remark now restricts the flow/exponential/completeness
  development to boundaryless manifolds. Metric completeness of closed
  embedded submanifolds remains stated independently and may allow boundary.

## Inventory and prerequisite order

The scaffold has 120 items:

- DG-17 A/B: 45 / 12.
- DG-20 A/B: 51 / 12.

Every local dependency points backward in manifest order. The design inventories
are preserved, with only the following necessary local suppliers/conventions
added before their consumers:

- `cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology`
  isolates the natural linear comparison from the later ring obligation.
- `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` records the
  direct natural cochain homotopy required by the design before the landmark
  graded-algebra theorem.
- `thm-regular-value-formula-for-compact-support-degree` isolates the proper
  noncompact signed-fibre formula before the unavailable AT-8 comparison. This
  keeps the useful compact-support branch and its examples intact.
- `rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow` fixes the
  boundary convention before the geodesic definition.
- `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`
  supplies the finite-dimensional local inverse branch without importing the
  overdeclared choice dependency described below.
- `lem-local-isometries-send-geodesics-to-geodesics` supplies the actual
  Levi-Civita/naturality argument before the target-image corollary.

The explicit proper-homotopy counterexample is
(H(x,t)=(2t-1)^2x): both endpoints are the proper identity map while
(H^{-1}(\{0\})) contains (mathbb R\times\{1/2\}). The degree-zero
two-preimage example is (F(e^{i\theta})=e^{i\sin\theta}), whose two
preimages of (1) have derivatives of opposite signs.

## Choice audit

- Items using the de Rham Mayer–Vietoris globalization explicitly assume
  (mathrm{AC}_\omega), depend on `def-countable-choice`, and identify the
  countable cover/product use. The linear continuous-singular comparison and
  landmark ring theorem inherit that assumption.
- Simplex integration, compact-support top cohomology, proper-map degree, and
  the regular-value formula are choice-free. Robbin–Salamon's printed
  globalization selects chart data for every point and explicitly invokes
  choice; the manifest instead chooses a finite chart cover of one compact
  support, finitely many connecting paths, and finite overlapping-ball chains.
- DG-20 remains ZF. Its Hopf–Rinow closure step minimizes a continuous function
  on the compact finite-dimensional unit sphere and argues that the attained
  minimum is zero; it does not choose a countable sequence of directions.
- No owned proof reaches `deferred-set-theory-beyond-choice`.

## Open dependency findings and readiness escalations

Seven items are escalated; 113 are ready.

### AT-7, same-frontier Batch 5

Batch 5 now contains the planned AT-7 item inventory, but those items are not
published and Step 1 scaffolding is not mathematical approval. The following
remain open in the consumer-batch ledger:

- `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` needs
  `def-singular-cup-product-on-cochains` and
  `thm-cup-product-leibniz-identity`, with the exact Alexander–Whitney signs.
- `thm-de-rham-theorem` needs that lemma,
  `def-singular-cohomology-ring`, and
  `thm-singular-cohomology-is-graded-commutative`.
- `rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product` and
  `fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings` inherit
  the same unresolved convention.

Warner proves the algebra comparison completely through sheaf resolutions, but
that is not the controlling direct smooth-simplex cochain-homotopy route. The
direct lemma is therefore not marked ready merely from the alternate theorem.

### AT-8, absent from this run

The declared page prerequisite
`orientations-poincare-lefschetz-and-alexander-duality` has an empty current
plan inventory, its required item files are absent, and it is not one of this
run's selected pairs. These are defective actual prerequisites, not merely
unrelated consumer debt:

- `thm-regular-value-formula-for-degree` needs
  `def-fundamental-class-of-a-compact-oriented-manifold` and
  `def-degree-of-a-map-between-oriented-closed-manifolds`.
- `prop-degree-is-multiplicative-under-composition` needs
  `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`.

Required placement is the existing AT-8 A page before order 475, with its
planned A/B inventories and those three suppliers authored and published.
The dependency chain is compact-support degree -> continuous-singular de Rham
comparison -> Kronecker evaluation on the AT-8 fundamental class -> AT-8
homological degree/functoriality. The proper noncompact formula and
multiplicativity calculation were not weakened or discarded.

### New B-page prerequisite pair

`cex-a-complete-manifold-with-zero-global-injectivity-radius` uses the
explicit cusp (S^1\times\mathbb R), its geodesic energy/angular momentum,
and the shrinking noncontractible circle. Detecting noncontractibility uses the
published `thm-fundamental-group-of-the-circle`. The current B page requires
only its A companion, so owner action is required to add the backward pair
`geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` ->
`the-fundamental-group-of-the-circle`, or approve an equivalent local
replacement. The A/B inventories remain 51/12; the affected placement is B
item 11 only. Martelli, Chapter 3 §2.2, Example 2.5 and Proposition 2.6,
supplies the narrowing cusp and zero-injectivity-radius source.

## Published prerequisite defect

Published `thm-euclidean-inverse-function-theorem` declares
`thm-complete-subspace-iff-closed` as a dependency. That latter published
theorem declares `def-countable-choice`, even though the inverse-function
proof uses only its choice-free “closed subspace of a complete metric space is
complete” direction. Consuming the published theorem as an undifferentiated
graph node would therefore overstate DG-20's axiom strength.

The owned repair is the local
`lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, proved
from Newton contraction, Banach iteration, Euclidean completeness, the direct
closed-ball limit argument, and derivative bootstrapping. Canonical repair
should split/narrow the published inverse theorem's completeness dependency to
a choice-free closed-subspace/closed-ball supplier. This published metadata
defect does not block the new local supplier.

## Source audit

Seven complete sources were inspected and fetch-stamped:

- Park, complete eight-page de Rham proof.
- Robbin–Salamon, the complete compact-support and degree passages.
- Robbin, complete 37-page de Rham notes.
- Warner, complete comparison and multiplicative-structure passages.
- Datar, the complete geodesic/Gauss/Hopf–Rinow chapters.
- Andrews, complete eight-page geodesics/completeness chapter.
- Martelli, the complete cusp and injectivity-radius passages.

The first Warner URL
`https://mathweb.ucsd.edu/~lni/math251B/warner1983.pdf` failed TLS
certificate verification. Recovery retry 1 found the complete 283-page book at
the retained alternate URL, and the relevant text was inspected. No source was
dropped and no five-retry exhaustion or `source_resolution` waiver applies.
Datar's Hopf–Rinow proof contains an evident internal cross-reference typo in
one implication; the scaffold follows the immediately preceding established
implication and does not copy the typo.

## Checks

Final results for the current files:

- Coverage: exit 0; 2 A pages, 37 harvested results, 0 errors, 0 warnings.
- Full-text source check: exit 0; 7/7 fetch-verified and 7/7 resolved.
- Whole-run manifest dependencies: exit 0; 455 items, 0 normalized, 0 errors.
- Whole-run manifest-only content policy: exit 1; 455 items, 8 errors. Three are
  the owned AT-8 missing suppliers listed above. The other five belong to the
  concurrent Weyl–Kac batch and were not edited here. AT-7 resolves
  syntactically through Batch 5's manifest but remains unpublished and open in
  the ledger.
- Plan validation: exit 0; the plan reports 3,809 pre-existing warnings and
  confirms acyclic page order, no item-level cycles/forward references,
  B-page dependencies, or unresolved IDs among pages with item lists.
- External-reference check: exit 0; 55 pre-existing
  `unproved-on-published` warnings, followed by the checker’s OK result.
- Readiness audit for this batch: 120 records, 113 ready, 7 escalated, 0 stale
  or missing.
- Frontier dependency ledger refresh completed and deduplicated successfully.

These records are construction evidence only. Owner/operator reconciliation
and Step 3 mathematical review remain required.
