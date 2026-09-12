# phase-2-next-17 batch 7 — Step 1 scaffold notes

## Scope and controlling evidence

Owned writes are limited to this batch's manifest, coverage, notes, readiness
records, and consumer-batch dependency input. The frontier dependency ledger
was refreshed from that input as required. No published item, plan, engine
state, or verdict was edited.

Before construction I read `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `briefs/beta-scaffold.md`, the assigned task, the current
`plan-spec.json` entries, planning notes, Alpha drift report, prerequisite
audit, the complete DG-17 and DG-20 designs, the frontier ledger instructions,
and the relevant prerequisite statements and proofs. The imported Batch 6
inventory from `phase-2-next-15` was treated as evidence, not as a fresh-run
readiness decision; its proof graph was re-audited and repaired before new
records were written.

The current plan controls page IDs, orders, categories, companions, and
`requires`. Its item arrays are empty for both pairs, so the complete track
designs control the mathematical inventory, subject to the dependency and
well-definedness repairs recorded below. Alpha's current drift report records
no page-level drift for either pair.

## Design/plan conflicts and locator resolution

- The dispatch locator `research/plan-differential-geometry-track.md L4545`
  lands inside DG-17 rather than at its heading. The complete DG-17 section
  beginning at line 4362 controls. Its page metadata and prerequisite list
  agree with the current plan.
- For DG-20, line 5224 is the section heading and controls. Line 5376 is the
  B-page heading inside the same design, not a second design or override. The
  current plan additionally makes the B page require published
  `the-fundamental-group-of-the-circle`; that current-plan dependency controls
  and repairs the cusp example's formerly missing topological input.
- DG-20 calls its inventory “dependency order,” but places the strongly convex
  neighborhood theorem, whose claim includes minimizing geodesics, before
  Gauss lemma and radial minimality. The manifest places
  `thm-existence-of-geodesically-convex-neighborhoods` after radial minimality
  and the short uniquely-minimizing corollary. The claim is not weakened.
- The base definition permits Riemannian manifolds with boundary where stated,
  but two-sided geodesic flow and Hopf–Rinow are false under that unrestricted
  reading. The design omitted the convention. The leading
  `rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow` restricts that
  development to boundaryless manifolds; the independent induced-metric
  completeness statement may still allow boundary.

## Inventory and proof-graph repairs

The preserved inventory has 120 items: DG-17 A/B has 45/12 and DG-20 A/B has
51/12. All local dependencies point backward.

Four nontrivial definition descents are now explicit through `justified_by`:

- simplex integration -> affine-coordinate independence;
- the de Rham integration assignment -> cochain-map compatibility;
- compact-support degree -> independence of normalized top form;
- geodesic spray -> coordinate-independent smooth vector field.

Other necessary dependency repairs include the coordinate exterior-derivative,
FTC, and Fubini inputs for simplex Stokes; the radial homotopy formula for
relative half-space coordinate domains; explicit `def-countable-choice` edges
on every AC-using de Rham comparison consumer; bump/positivity inputs for
normalized compactly supported top forms; a finite subordinate-bump
construction for top compact-support cohomology; the proper-map closed-image
inputs; and the interval homotopy formula for proper-homotopy invariance.

The signed regular-value theorem now builds each of its finitely many local
inverse branches directly from Newton contraction, a complete closed Euclidean
ball, and Banach iteration. It therefore remains choice-free and does not
consume the overdeclared published inverse-function dependency. The unsigned
regular-fibre false statement depends only on this ready compact-support
formula, not on the escalated closed-manifold comparison.

For DG-20, the critical-point converse uses coordinate variations with a
one-variable bump, not an unavailable tubular/exponential construction. The
Hopf–Rinow proper-to-complete implication and compact corollary explicitly use
compact-metric completeness. Product completeness and product geodesics now
declare the product metric and split-Christoffel inputs. The round-sphere
examples prove the tangent-projection connection directly by Levi-Civita
uniqueness, and the normal-coordinate false statement uses an explicit sphere
exponential differential rather than forward curvature theory. The circle,
punctured-plane, open-ball, Euclidean-space, cylinder, antipodal-sphere, and
cusp examples now state the actual local metric/geodesic/topological inputs.

## Choice audit

- The countable Mayer–Vietoris de Rham globalization, smooth-to-continuous
  comparison, landmark ring theorem, and topological homotopy comparison state
  `AC_omega` and directly depend on `def-countable-choice`.
- Simplex integration, compact-support top cohomology, proper-map degree, the
  compact-support regular-value formula, and all DG-20 items remain ZF. The
  top-cohomology proof uses one finite cover of one compact support, finitely
  many bumps, paths, and overlap chains.
- Hopf–Rinow uses only finite-dimensional compactness and finite selections;
  it does not choose a countable sequence of directions.
- No owned item reaches `deferred-set-theory-beyond-choice` through a proof or
  prerequisite path.

## Open dependencies and six escalations

There are 114 ready items and six escalated items.

### AT-7 ring branch

Batch 5 now contains the AT-7 manifest inventory and fresh readiness records,
but the relevant suppliers have no authored item files and are not published.
Step-1 readiness is construction evidence, not a met published prerequisite:

- `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` requires the
  exact Alexander–Whitney convention in
  `def-singular-cup-product-on-cochains` and the signed
  `thm-cup-product-leibniz-identity`.
- `thm-de-rham-theorem` additionally requires
  `def-singular-cohomology-ring` and
  `thm-singular-cohomology-is-graded-commutative`.
- `rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product` and
  `fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings` inherit the
  unresolved convention/proof chain.

Robbin states the product result but does not supply the controlling direct
smooth-simplex cochain homotopy. Warner's complete sheaf-resolution algebra
comparison proves an alternative theorem, not the design-selected direct
route. A targeted search of Bott–Tu/Gugenheim multiplicativity treatments
confirmed that the missing comparison is substantial homotopy data, so no
complete formula was invented and the four items remain escalated.

### AT-8 closed-degree branch

AT-8 was populated concurrently in Batch 5 during the final checks, and its
three suppliers now have manifest entries and fresh readiness records. Their
authored item files are still absent and none is published:

- `def-fundamental-class-of-a-compact-oriented-manifold`;
- `def-degree-of-a-map-between-oriented-closed-manifolds`;
- `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`.

Required placement is the AT-8 A inventory, after its own prerequisites and
before order 475. The needed dependency chain is compact-support degree ->
continuous-singular de Rham comparison -> Kronecker evaluation on the AT-8
fundamental class -> homological degree and functoriality. Consequently
`thm-regular-value-formula-for-degree` and
`prop-degree-is-multiplicative-under-composition` are escalated. Their useful
proper noncompact branches were preserved.

The immutable escalation records were written before those concurrent Batch 5
manifest/readiness records landed, so their “missing manifest/readiness” wording
is superseded by this note. Per the instruction never to overwrite an
escalation, I did not rewrite them. The decisions remain mathematically current:
the suppliers are still unauthored/unpublished, and the Kronecker descent pair
used by the closed-degree comparison is still draft.

## Published prerequisite defects for the canonical ledger

- Published page `singular-cohomology-and-coefficient-theorems` lists
  `def-kronecker-evaluation-pairing`, but that item is `status: draft` from
  `phase-2-next-20`; its required
  `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`
  is also draft. Evidence: both front matters state `status: draft`, and the
  definition's `justified_by` names the latter. This is an actual prerequisite
  defect for `thm-regular-value-formula-for-degree`. Repair: complete and
  certify the pair, then publish them before the closed-degree comparison; do
  not infer publication from page membership.
- Published `thm-euclidean-inverse-function-theorem` declares
  `thm-complete-subspace-iff-closed`, whose aggregate graph declares
  `def-countable-choice`, although the inverse proof uses only its choice-free
  closed-subspace/closed-ball-completeness direction. Repair: split or narrow
  the direction-specific supplier. The owned local Newton lemma avoids this
  edge, so the defect does not block DG-20.
- Published `thm-smooth-partitions-of-unity-exist-on-manifolds`, proof step
  2.1, says “for each k” choose a bump `g_k` from
  `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, but its statement
  and dependency graph declare no countable choice. Repair: either state and
  depend on the needed choice principle or replace the countable selection by
  a canonical/all-eligible construction. The owned compact-support proof uses
  only finitely many bumps and therefore does not consume this defective step.

These defects are recorded here for owner reconciliation; no published item or
canonical published-consumer ledger was edited.

## Source audit

The imported coverage contains seven authoritative sources and 37 harvested
results, each with an explicit disposition. The retained evidence records full
inspection of Park's complete eight-page proof; the complete relevant
Robbin–Salamon compact-support/degree arguments; Robbin's complete 37-page
notes; Warner's comparison and multiplicative passages; Datar's full
geodesic/Gauss/Hopf–Rinow chapters; Andrews's complete eight-page chapter; and
Martelli's cusp/injectivity passages.

The original Warner URL failed TLS verification. Recovery attempt 1 found the
complete 283-page book at the retained alternate URL, after which the relevant
text was inspected. No source was dropped and no five-retry exhaustion or
`source_resolution` waiver applies. Datar's Hopf–Rinow proof has an evident
internal implication cross-reference typo; the manifest follows the established
preceding implication rather than copying it.

## Checks

Final results on the current files:

- Coverage checklist: exit 0; 2 A pages, 37 harvested results, 0 errors,
  0 warnings.
- Full-text source check: exit 0; 7/7 fetch-verified and 7/7 resolved.
- Whole-run manifest dependencies: exit 0; 521 items, 0 normalized, 0 errors.
- Whole-run manifest-only content policy: exit 0; 521 items, 0 errors,
  0 warnings. AT-7 and AT-8 resolve syntactically through Batch 5 manifests,
  but their relevant suppliers remain unauthored and unpublished.
- Plan validation: exit 0; 3,839 pre-existing warnings, then confirmation of
  acyclic page order and no item cycles, forward references, B-page dependency
  errors, or unresolved IDs among materialized pages.
- External-reference check: exit 0; 55 pre-existing
  `unproved-on-published` warnings, followed by the checker's OK result.
- Readiness for this batch: 120 records, 114 ready, 6 escalated, 0 stale or
  missing.
- Frontier dependency ledger refresh: exit 0 and deduplicated.

These are construction records, not independent mathematical approval. Full
owner/operator reconciliation and Step 3 review remain required.
