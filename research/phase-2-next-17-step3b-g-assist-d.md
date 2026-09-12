# phase-2-next-17 — Step 3b group G supplemental authoring for D

Dispatch: `step3b-g-71c33fdf1f7e5064`  
Owned page: `geodesics-the-exponential-map-completeness-and-hopf-rinow` (batch 7 A page)  
Status: supplemental authorship complete; canonical integration remains with
group D. This report is not a Step-3 gate pass or an independent audit.

## Entry evidence and scope

The three owned item files and this report were absent at entry. I read
`CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the complete DG-20 design,
the current plan entry, batch-7 manifest/coverage/contracts/dependency input and
notes, group-D Step-3a review and scope records, all three Step-1 decisions, the
current supplier statements and proofs used below, and the explicit owner
authoring direction. The owner direction contains no separate DG-20 repair
obligation. The supplemental dispatch controls: only the three named item files
and this report may be written. Shared manifest, coverage, contracts, decisions,
scope records, pages, plan and dependency ledgers therefore remain untouched.

The current Datar PDF was fetched from its recorded URL and matched the batch
coverage hash `fab4114ca5142b8e...` (1,206,685 bytes, 290 pages). Complete
relevant passages read were Remark 15.1.2 and Examples 15.1.3--15.1.5, printed
pp. 113--114; Corollary 16.4.5 and its following counterexample, printed p. 126;
Example 17.1.3, Definition 17.2.1 and Proposition 17.2.2 with proof, printed
pp. 128, 130--131; and Corollary 18.1.3 with proof, printed pp. 135--136.

## Checkpoint 1 — affine reparametrization

- Item: `fs-every-affinely-reparametrized-geodesic-remains-unit-speed`.
- The file was confirmed absent immediately before creation. The promised
  universal claim remains visibly false. The witness is the unit-speed line
  `gamma(s)=s` on the Euclidean line and the affine diffeomorphism `ell(t)=2t`.
  The coordinate equation proves the original line is geodesic; affine
  reparametrization preserves the geodesic equation but gives speed exactly 2.
  The failure is exactly the omitted condition `|a|=1`; slope zero is separated
  because it is not a reparametrization diffeomorphism.
- Exact direct dependencies: `prop-coordinate-geodesic-equation` and
  `prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`. Their complete
  current statements and proofs were read. Both are earlier on the A page, and
  both are used. No AC principle is used or declared.
- Source locator: Datar, Remark 15.1.2 and Example 15.1.3, printed pp. 113--114.
  The local item supplies the actual slope-2 calculation rather than treating
  the source's general observation as the refutation.
- Checks: explicit-path precheck passed (1 checked, 0 failing); rendercheck
  passed (1 file, including real KaTeX and YAML parsing). An initial precheck
  found mechanically wrapped step tags; the item was changed to canonical
  one-row numbered steps and the rerun passed.
- Decision: no `record-item` receipt was written because this supplemental
  dispatch expressly forbids edits to decisions and does not authorize a
  Step-3 certification claim. The existing proof-contract scope lists the ID
  but has no contract entry; canonical integration must add the item-specific
  contract after adopting this authored item.
- Open gaps: none in this item's mathematics. Next action is the normal-coordinate
  false statement, after a fresh absence check.

## Checkpoint 2 — normal coordinates

- Item: `fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart`.
- The file was confirmed absent immediately before creation. The false claim is
  unchanged. On the round two-sphere, tangent projection is proved to be the
  Levi--Civita connection, the geodesic with initial vector `v` at the north
  pole is calculated, and hence
  `exp_N(v)=cos(|v|)N+(sin(|v|)/|v|)v`. In orthonormal normal coordinates, at
  `x=r e_1` the second coordinate vector has squared length
  `(sin(r)/r)^2<1`; thus the metric is not Euclidean away from the centre.
  The exact failure point is contrasted with the centre identities
  `g_ij(N)=delta_ij` and `partial_k g_ij(N)=0`.
- Exact direct dependencies in the authored file:
  `def-countable-choice`,
  `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
  `thm-existence-of-normal-neighborhoods`,
  `def-normal-neighborhood-and-normal-coordinate-chart`,
  `prop-properties-of-normal-coordinates-at-the-center`,
  `thm-fundamental-theorem-of-riemannian-geometry`,
  `ex-the-n-sphere-with-its-standard-smooth-atlas`, and
  `def-riemannian-metric-and-riemannian-manifold`. Their relevant complete
  statements and proofs were read. The first four are necessary explicit
  repairs beyond the current manifest row: countable choice is the stated
  assumption of the current normal-coordinate interface; geodesic uniqueness
  identifies the explicit curve; normal-neighbourhood existence supplies a
  small exponential diffeomorphism; and the definition identifies its inverse
  as the claimed coordinate chart.
- Choice: `AC_omega` is declared and depends directly on
  `def-countable-choice`. Its only use is invocation of the current library
  interfaces for maximal geodesics and normal charts. The tangent-projection,
  geodesic, differential and metric-coefficient calculations are explicit and
  choice-free. No full AC is used.
- Source locator: Datar, Example 17.1.3, Definition 17.2.1 and Proposition
  17.2.2 with proof, printed pp. 128, 130--131. Datar states the spherical
  exponential formula; the item supplies the omitted tangent-projection and
  differential calculation rather than treating that statement as a proof.
- Checks: explicit-path precheck passed (1 checked, 0 failing); rendercheck
  passed (1 file, including real KaTeX and YAML parsing).
- Decision and integration: no item decision was written. Canonical batch-7
  integration must replace the manifest dependency row by the exact list above,
  add an item-specific proof contract, and extend the existing Datar coverage
  contents with this false-statement destination. Those shared writes are
  reserved to group D by the dispatch.
- Open gaps: none in the authored refutation. Next action is the global
  minimizing false statement, after a fresh absence check.

## Checkpoint 3 — global length minimization

- Item: `fs-every-geodesic-segment-is-globally-length-minimizing`.
- The file was confirmed absent immediately before creation. The promised
  universal claim remains visibly false. On the flat quotient circle
  `S^1=R/Z`, the segment `gamma(t)=p(3t/4)` is proved geodesic from its lifted
  coordinate equation and has length `3/4`; the curve `c(t)=p(-t/4)` has the
  same endpoints and length `1/4`. The general calculation for a lift
  `1/2<a<1` gives competing length `1-a<a`, with equality exactly at the
  half-circumference threshold. The quotient-chart topology, metric gluing,
  Christoffel calculation and both lengths are included rather than assumed.
- Exact direct dependencies in the authored file:
  `def-countable-choice`,
  `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`,
  `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood`,
  `prop-coordinate-geodesic-equation`,
  `prop-christoffel-formula-for-the-levi-civita-connection`,
  `def-circle-as-real-line-mod-integers`,
  `def-riemannian-metric-and-riemannian-manifold`, and
  `def-riemannian-speed-and-length`. Their relevant complete statements and
  proofs were read. The first two, Christoffel formula, and Riemannian-metric
  definition are necessary explicit repairs beyond the current manifest row.
  The first two are used only to explain exactly why the current local radial
  theorem cannot be applied to the long arc: uniqueness gives
  `exp_[0](v)=p(v)`, and no symmetric injectivity ball can contain `3/4` because
  it then also contains `-1/4`, with equal exponential images.
- Choice: `AC_omega` is declared through `def-countable-choice` and is used only
  for the library's geodesic-uniqueness/local-radial-minimality comparison in
  step 4.1. The counterexample and length comparison in steps 1.1--3.1 are
  explicit and choice-free.
- Source locator: Datar, Corollary 16.4.5 and the immediately following
  long-great-circle-arc counterexample, printed p. 126; Corollary 18.1.3 and
  proof, printed pp. 135--136. The local item uses the simpler flat quotient
  circle and derives its complete witness; the local theorem is cited only at
  its precise normal-neighbourhood scope.
- Checks: explicit-path precheck passed (1 checked, 0 failing); rendercheck
  passed (1 file, including real KaTeX and YAML parsing).
- Decision and integration: no item decision was written. Canonical batch-7
  integration must replace the manifest dependency row by the exact list above,
  add the item-specific proof contract, and extend the Datar coverage contents
  with this false-statement destination. Those shared writes remain group D's.
- Open gaps: none in the authored refutation. Next action is the combined
  explicit-path verification and canonical-integration handoff below.

## Proof-contract splice record

The shared batch-7 contract already places all three IDs in `scope` but has no
entry for any of them. It was not edited. To make the forbidden shared write
mechanically reproducible, I assembled an isolated three-item contract from the
following exact data and passed it to `proof-contract.mjs --strict` through
standard input. Every `quote` was the complete, unabridged current section named
below; thus the excerpt locator is exact rather than a paraphrase. Every
derivation `claim` was the complete current numbered-step claim with only its
trailing input tag removed.

### Affine item contract

- Citations: `F1 -> prop-coordinate-geodesic-equation` (`Statement`, use 1.1);
  `F2 -> prop-affine-reparametrization-of-a-geodesic-is-a-geodesic`
  (`Statement`, use 2.1).
- Derivation inputs: 1.1 uses `F1`, `given`, `algebra`; 2.1 uses `F2`, step 1.1;
  3.1 uses step 2.1. There are no routine steps.
- Boundaries: `empty` is inapplicable because the witness is the nonempty real
  line; `zero` checks and excludes slope zero as a reparametrization
  diffeomorphism; `one` checks unit speed and slopes of absolute value one;
  `degenerate` checks the nonzero slope and nondegenerate domain; `endpoints` is
  inapplicable because the domain is all of `R`; `nonempty-choice` records the
  explicit choice-free witness. Both iff cases are inapplicable because this is
  a direct counterexample, not an equivalence.

### Normal-coordinate item contract

- Citations: `A1 -> def-countable-choice` (`Definition`, use 4.1); `F1 ->`
  `ex-the-n-sphere-with-its-standard-smooth-atlas` (`Example`),
  `def-riemannian-metric-and-riemannian-manifold` (`Definition`), and
  `thm-fundamental-theorem-of-riemannian-geometry` (`Statement`), each at use
  1.1; `F2 ->`
  `thm-existence-uniqueness-and-smooth-dependence-of-geodesics` (`Statement`),
  `thm-existence-of-normal-neighborhoods` (`Statement`),
  `def-normal-neighborhood-and-normal-coordinate-chart` (`Definition`), and
  `prop-properties-of-normal-coordinates-at-the-center` (`Statement`), each at
  uses 2.1, 3.1 and 4.1.
- Derivation inputs: 1.1 uses `F1`, `given`, `algebra`; 2.1 uses `F2`, step 1.1,
  `algebra`; 3.1 uses `F2`, step 2.1, `algebra`; 4.1 uses `A1`, `F2`, steps 1.1
  and 3.1. There are no routine steps.
- Boundaries: `empty` and `zero` are checked in step 4.1; `one` is inapplicable
  to this particular transverse two-direction calculation; `degenerate`
  separates `r=0` from the selected `r>0`; `endpoints` records the strict
  interior choice `0<r<min{rho,pi}`; `nonempty-choice` records the exact
  `AC_omega` interface use and explicit calculation. Both iff cases are
  inapplicable because this is a direct counterexample.

### Global-minimization item contract

- Citations: `A1 -> def-countable-choice` (`Definition`, use 4.1); `F1 ->`
  `thm-existence-uniqueness-and-smooth-dependence-of-geodesics` and
  `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood` (both
  `Statement`, use 4.1); `F2 ->`
  `prop-christoffel-formula-for-the-levi-civita-connection` and
  `prop-coordinate-geodesic-equation` (both `Statement`, uses 1.1 and 2.1);
  `F3 -> def-circle-as-real-line-mod-integers` (`Definition`, uses 1.1, 3.1 and
  4.1); `F4 -> def-riemannian-metric-and-riemannian-manifold` and
  `def-riemannian-speed-and-length` (both `Definition`, uses 1.1, 2.1 and 3.1).
- Derivation inputs: 1.1 uses `F2`, `F3`, `F4`, `given`, `algebra`; 2.1 uses
  `F2`, `F4`, step 1.1; 3.1 uses `F3`, `F4`, step 2.1, `algebra`; 4.1 uses
  `A1`, `F1`, `F3`, steps 1.1 and 3.1. There are no routine steps.
- Boundaries: `empty` and `zero` are checked in step 4.1; `one` is checked by
  the full one-dimensional witness; `degenerate` records its nonconstant curve
  and nondegenerate interval; `endpoints` checks both curves on the closed
  interval `[0,1]`; `nonempty-choice` separates the explicit choice-free
  counterexample from the `AC_omega` local-theorem comparison. Both iff cases
  are inapplicable because this is a direct counterexample.

The isolated strict result was 3/3 checked, zero errors and zero warnings. The
canonical selected check still correctly fails 0/3 with exactly three
`scope-missing-contract` errors until group D splices these entries.

## Final checks and pre-splice state

- Combined explicit-path precheck: 3/3 pass. Combined rendercheck: all three
  files pass real KaTeX and YAML parsing. `git diff --check` on the four owned
  files passes. Focused `citecheck` scans all three with no warning.
- Batch-7 content policy was run on the required manifest. It sees 127 scoped
  items and exits 1 with 14 `scope-item-missing` errors, zero warnings. None of
  the errors names an item owned here. The exact outstanding IDs are
  `thm-hopf-rinow`,
  `cor-complete-connected-riemannian-manifolds-are-proper-length-spaces`,
  `cor-compact-riemannian-manifolds-are-geodesically-complete`,
  `cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image`,
  `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete`,
  `prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time`,
  `fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold`,
  `fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`,
  `fs-geodesic-completeness-means-the-manifold-is-compact`,
  `ex-geodesics-of-a-riemannian-product`, `ex-hyperbolic-space-is-complete`,
  `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics`,
  `cex-a-complete-manifold-with-zero-global-injectivity-radius`, and
  `ex-hopf-rinow-on-a-flat-cylinder`. They remain active group-D work, not a
  green batch gate and not a defect in these three files.
- `validate-plan.mjs research/plan-spec.json` was run and exits 1 at this shared
  snapshot with 1,254 duplicate-ID diagnostics and 3,840 redundant-prerequisite
  warnings. The plan entries for the owned A and companion B pages still have
  zero items, versus 51 and 12 in the current batch manifest; their `requires`
  arrays agree exactly. The owned A page has 14 redundancy warnings: ODE is
  already reached through vector fields, the metric page and the connection
  page (3); vector fields through the metric and connection pages (2); the
  metric page through the connection page (1); compactness through vector
  fields, metric and connection (3); and completeness through ODE, vector
  fields, metric, connection and compactness (5). No item-level plan result is
  available before the inventory splice, and no shared plan edit was made.

## Canonical integration handoff

- Completed authored IDs: all three IDs named in this dispatch. No A/B page was
  written because the supplemental dispatch reserves it to active group D.
- Preserve the affine item's existing manifest dependency list. Replace the
  normal-coordinate and global-minimization manifest lists with the exact lists
  in checkpoints 2 and 3. Then splice all three items into the A page in current
  manifest order, add their proof-contract entries from the record above, and
  add all three as destinations in the existing Datar coverage record.
- After those shared writes, rerun canonical content policy, strict contracts,
  dependency checks, explicit-path precheck/rendering and plan validation.
  Record item decisions only then: the affine scaffold is unchanged; the other
  two have real dependency repairs. This report supplies no owner ruling,
  receipt, judge stamp or audit stamp.
- All direct dependencies are earlier batch-7 A items or already-published
  suppliers. No local supplier was added, and no new cross-batch or same-group
  frontier edge arises; the batch-7 cross-batch dependency input therefore
  needs no content change from this supplemental work.
- No mathematical uncertainty or unresolved prerequisite remains in the three
  refutations. No potentially defective published item was identified while
  reading their suppliers, so there is no new suspicion or confirmed defect to
  add to the owner ledger. The open obligations are only the expressly reserved
  canonical integration, the 14 unowned missing batch items, and the disclosed
  pre-splice/global plan diagnostics.
