# phase-2-next-17 — Step 3b group G final disjoint continuation

Dispatch: `step3b-g-8ca505235d819733`

Owned page: `geodesics-the-exponential-map-completeness-and-hopf-rinow`
(batch 7 A page)

Status: supplemental authoring complete. This report is not a Step-3 gate pass
or an independent audit. Canonical integration remains with the active batch
owner.

## Entry evidence and scope

At this continuation's entry, both owned item files and this report were absent.
The dispatch permits writes only to those two item files and this report; no
shared manifest, contract, coverage, scope, decision, page, plan, group report,
dependency ledger or published item has been changed. Group C's exponential-map
false statement is outside this scope.

I read the current `CLAUDE.md`, `README.md`, `SCHEMA.md`, the complete relevant
DG-20 design passage, current batch-7 manifest row, coverage, proof-contract
scope, cross-batch input and notes, both Step-1 decisions, the Step-3a scope
record, the owner authoring direction, and the complete current statements and
proofs of every direct supplier used in checkpoint 1. I also read the complete
current `thm-hopf-rinow` item and its Step-3b repair receipt.

The current Andrews PDF was fetched from the coverage URL. Its SHA-256 is
`1f798b46b51c80b31c10d9d947bdfacd151ae983a2b8f06b418b24615e7c0cdd`,
matching the coverage record. All eight PDF pages were extracted and read.
The relevant primary-source passage is Andrews, Theorem 11.5.1 and proof,
printed pp. 106--108. It proves the complete-manifold implication and existence
of minimizing radial geodesics; it does not contain the punctured-plane witness,
the distance-infimum calculation or the Euclidean noncompactness witness. Those
must therefore be proved locally rather than attributed to Andrews.

## Checkpoint 1 — minimizing joins without completeness

- Item:
  `fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`.
  The item file was confirmed absent immediately before creation.
- Claim and conventions: the full universal claim remains visibly false. The
  witness is the connected boundaryless Riemannian manifold
  `R^2 \ {(0,0)}` with its restricted Euclidean metric and points `(-1,0)` and
  `(1,0)`. Every competitor crosses the vertical axis away from the origin;
  splitting there and applying the constant-unit-field line-integral bound gives
  length `2 sqrt(1+y_0^2)>2`. Explicit two-segment detours through
  `(0,epsilon)` have length `2 sqrt(1+epsilon^2)` and approach 2. Thus the
  Riemannian distance is exactly 2 and is not attained by any curve, hence not
  by a geodesic.
- Exact direct dependencies:
  `def-countable-choice`,
  `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`,
  `def-riemannian-metric-and-riemannian-manifold`,
  `lem-plane-exterior-of-a-closed-disc-is-path-connected`,
  `def-riemannian-speed-and-length`,
  `def-riemannian-distance-on-a-connected-manifold`,
  `thm-gradient-theorem-for-line-integrals`,
  `thm-scalar-and-vector-line-integral-estimates`,
  `prop-length-is-additive-under-concatenation-and-invariant-under-reversal`,
  `thm-intermediate-value`, and `thm-hopf-rinow`. All are earlier suppliers and
  each is used. The current manifest's two-dependency scaffold must be replaced
  by this list during canonical integration.
- Choice: `AC_omega` is declared through `def-countable-choice`. In the current
  repository proof graph it is used by the compact-interval arc-length and
  line-integral supplier chain, which reaches the countable-choice proof of
  `thm-heine-cantor-r`, and by `thm-hopf-rinow`. The points, crossing parameter,
  detours, finite subdivision and inequalities require no family of choices;
  no full AC is used.
- Boundary audit: the empty manifold has no point pair; a connected nonempty
  zero-manifold is a singleton; the two-dimensional witness avoids the trivial
  disconnected punctured line; the endpoints and crossing parameter are
  included; `p != q`, every parameter interval and detour piece is
  nondegenerate, and `epsilon>0`. No iff claim is made.
- Source locator and qualification: Andrews, Theorem 11.5.1 and proof, printed
  pp. 106--108, is used only for the complete-manifold comparison. The local
  item proves the counterexample, lower bound, approximating curves and
  nonattainment; the source is not claimed to contain them.
- Checks: explicit-path precheck passed (1 checked, 0 failing) after adopting
  the checker's canonical phase ordering. Explicit-path rendercheck passed
  (1 file, including real KaTeX and YAML parsing). No item decision or shared
  proof contract was written, as this continuation forbids both.
- Open gaps: none in this item's mathematics. Canonical integration still must
  update its manifest dependencies, add the item-specific proof contract and
  coverage destination, and splice the item onto the A page. Next action is the
  geodesic-completeness/compactness item after a fresh absence check.

## Checkpoint 2 — geodesic completeness does not force compactness

- Item: `fs-geodesic-completeness-means-the-manifold-is-compact`. The item file
  was confirmed absent immediately before creation.
- Claim and conventions: the full implication “every geodesically complete
  Riemannian manifold is compact” remains visibly false, so any claimed
  equivalence also fails. The witness is the Euclidean line. A constant-unit-
  field line-integral bound gives `d_g(x,y)>=|x-y|`, and the straight segment
  has length `|x-y|`, so `d_g=|x-y|`. The published Euclidean completeness
  theorem and current Hopf--Rinow theorem then give geodesic completeness.
  For every centre `a` and radius `r>0`, the point `a+r+1` lies outside that
  ball, so the line is unbounded and Heine--Borel makes it noncompact.
- Exact direct dependencies: `def-countable-choice`,
  `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`,
  `def-riemannian-metric-and-riemannian-manifold`,
  `ex-convex-subsets-of-rn-are-path-connected`,
  `def-riemannian-speed-and-length`,
  `def-riemannian-distance-on-a-connected-manifold`,
  `thm-gradient-theorem-for-line-integrals`,
  `thm-scalar-and-vector-line-integral-estimates`,
  `thm-euclidean-space-complete`, `thm-hopf-rinow`, and
  `thm-heine-borel-rn`. Their complete current statements and proofs were read;
  all are earlier suppliers and every one is used. The current two-dependency
  scaffold must be replaced by this exact list during canonical integration.
- Choice: `AC_omega` is declared through `def-countable-choice` and is used by
  the current compact-interval line-integral/arc-length chain and by
  `thm-hopf-rinow`. The fixed line, straight segment, distance calculation,
  unboundedness witness and choice-free Heine--Borel theorem use no selection;
  no full AC is used.
- Boundary audit: the empty manifold is compact; a connected nonempty
  zero-manifold is a compact singleton; the witness is genuinely
  one-dimensional, nonempty and boundaryless. The calculation handles `x=y`,
  uses only positive ball radii, and Hopf--Rinow covers zero-velocity and
  nonconstant maximal geodesics with domain all of `R`. There is no finite
  endpoint or degenerate-interval omission. The refutation supplies the failed
  forward implication; it does not assert or consume the converse.
- Exact failure point: Hopf--Rinow makes every closed **bounded** subset compact;
  the whole Euclidean line is closed but unbounded. Dropping “bounded” is the
  invalid inference.
- Source locator and qualification: Andrews, Theorem 11.5.1 and proof, printed
  pp. 106--108, supplies the completeness equivalence and properness direction.
  It does not assert global compactness and does not present the Euclidean-line
  counterexample; the local item proves all witness calculations.
- Checks: explicit-path precheck passed (1 checked, 0 failing). Explicit-path
  rendercheck passed (1 file, including real KaTeX and YAML parsing). No item
  decision or shared proof contract was written.
- Open gaps: none in this item's mathematics. Canonical integration must update
  the manifest dependency list, add its item-specific proof contract and
  coverage destination, and splice it onto the A page. Next action is combined
  checking and the exact contract/integration handoff.

## Exact proof-contract handoff

The two completed items were checked together with an isolated contract sent
to the strict checker through `/dev/stdin`; no contract file was written. The
result was `0 error(s), 0 warning(s), 2/2 item(s) checked`. Each citation quote
in that contract was the complete, verbatim current named source section, not a
summary. Canonical integration should preserve the following mappings.

### Minimizing-join false statement

- `[A1]`: `def-countable-choice`, `Definition`; used by steps 4.1 and 5.1.
- `[F1]`: the `Statement` of
  `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`,
  the `Definition` of `def-riemannian-metric-and-riemannian-manifold`, and the
  `Statement` of `lem-plane-exterior-of-a-closed-disc-is-path-connected`; each
  used by step 1.1.
- `[F2]`: the `Definition` sections of `def-riemannian-speed-and-length` and
  `def-riemannian-distance-on-a-connected-manifold`; each used by steps 1.3,
  2.1 and 3.1.
- `[F3]`: the `Statement` sections of
  `thm-gradient-theorem-for-line-integrals`,
  `thm-scalar-and-vector-line-integral-estimates`, and
  `prop-length-is-additive-under-concatenation-and-invariant-under-reversal`;
  each used by steps 2.1 and 5.1.
- `[F4]`: `thm-intermediate-value`, `Statement`; used by step 1.2.
- `[F5]`: `thm-hopf-rinow`, `Statement`; used by steps 4.1 and 5.1.
- Derivation inputs are: 1.1 `[F1, given, algebra]`; 1.2 `[F4, given]`; 1.3
  `[F2, construct, algebra]`; 2.1 `[F2, F3, step1.2, algebra]`; 3.1
  `[F2, step2.1, step1.3]`; 4.1 `[A1, F5, step1.1, step3.1]`; and 5.1
  `[A1, F3, F5, step1.2, step1.3, step2.1, step3.1, step4.1]`. The contract
  claim for each row is the complete corresponding numbered proof step, with
  no generic or routine step substitution.
- Boundary rows: `empty`, `zero`, `one`, `degenerate`, `endpoints` and
  `nonempty-choice` are `checked`, evidenced by step 5.1 and the subordinate
  steps it names. `both-iff-directions` is `not_applicable`: the promised claim
  is a universal existence assertion, not an equivalence.

### Completeness/compactness false statement

- `[A1]`: `def-countable-choice`, `Definition`; used by steps 2.1 and 5.1.
- `[F1]`: the `Statement` of
  `prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure`,
  the `Definition` of `def-riemannian-metric-and-riemannian-manifold`, and the
  `Example` section of `ex-convex-subsets-of-rn-are-path-connected`; each used
  by step 1.1.
- `[F2]`: the `Definition` sections of `def-riemannian-speed-and-length` and
  `def-riemannian-distance-on-a-connected-manifold`, and the `Statement`
  sections of `thm-gradient-theorem-for-line-integrals` and
  `thm-scalar-and-vector-line-integral-estimates`; each used by steps 1.2 and
  5.1.
- `[F3]`: `thm-euclidean-space-complete`, `Statement`; used by step 2.1.
- `[F4]`: `thm-hopf-rinow`, `Statement`; used by steps 2.1, 4.1 and 5.1.
- `[F5]`: `thm-heine-borel-rn`, `Statement`; used by steps 3.1 and 5.1.
- Derivation inputs are: 1.1 `[F1, given, algebra]`; 1.2
  `[F2, given, algebra]`; 2.1 `[A1, F3, F4, step1.1, step1.2]`; 3.1
  `[F5, step1.2, step2.1, algebra]`; 4.1 `[F4, step3.1]`; and 5.1
  `[A1, F2, F4, F5, step1.2, step2.1, step3.1]`. Again, each contract claim
  is the complete current numbered proof step.
- Boundary rows: `empty`, `zero`, `one`, `degenerate`, `endpoints`,
  `nonempty-choice` and `iff-forward` are `checked` by step 5.1 and its named
  subordinate steps. `iff-reverse` is `not_applicable`: the target is only the
  forward implication, and no converse is asserted or used.

## Combined checks and pre-splice state

- Explicit-path precheck: both items passed, 2/2 checked and 0 failing.
- Explicit-path rendercheck: both files passed real KaTeX rendering and the
  renderer's YAML parser, 2/2 files.
- Focused citation check: both files scanned, no defects reported.
- Strict proof contract: the isolated two-item contract passed with 0 errors,
  0 warnings and 2/2 items checked. The canonical batch contract currently
  reports two `scope-missing-contract` errors and checks 0/2 of these additions,
  which is the expected unresolved pre-splice state, not a pass.
- Batch-7 content policy on the current manifest passed with 127 scoped items,
  0 errors and 0 warnings, including the two new on-disk item files. It does
  not amend their stale scaffold dependency rows; this dispatch forbids that
  shared-manifest write.
- `validate-plan` on `research/plan-spec.json` failed in the current pre-splice
  snapshot: 1,254 duplicate-ID errors and 3,840 warnings overall. For the owned
  pair specifically, the planned A/B rows still have empty `items` arrays while
  the current batch manifest has 51 A-page items and 12 B-page items; the
  arrays therefore do not match. These are reported for serial Step-4
  reconciliation and were not hidden or patched locally.
- A `git diff --no-index --check` whitespace check reported no defect on any
  of the three authorized new paths.

No new cross-batch dependency input is required: every direct dependency is a
published supplier except same-page earlier `thm-hopf-rinow`. No local supplier
was added. The existing frontier-dependency ledger was therefore left alone.

## Reconciliation obligations and published concern

1. **Confirmed design/current-item mismatch, not an owner ruling.** The DG-20
   design and old batch notes classify these false statements as ZF, while the
   current authored `thm-hopf-rinow` explicitly assumes `AC_omega`. Any consumer
   using that current theorem must depend on `def-countable-choice` and state
   the assumption. Serial reconciliation should either update the design and
   canonical rows or first replace the Hopf--Rinow proof by a verified
   choice-free interface; this author has not invented such a ruling.
2. **Potential published assumption-propagation concern (high confidence).**
   `thm-c1-paths-have-length-equal-to-the-integral-of-speed` directly invokes
   `thm-heine-cantor-r`, whose proof explicitly spends `AC_omega`, but the C1
   path theorem neither declares that assumption nor depends on
   `def-countable-choice`. The omission propagates through published
   `cor-piecewise-c1-paths-have-additive-speed-integral-length` and
   `thm-scalar-and-vector-line-integral-estimates`, and the published
   `def-riemannian-speed-and-length` similarly asserts compact-interval
   integrability without naming its assumption-bearing route. This is a
   confirmed proof-dependency/assumption-accounting defect in the current proof
   chain, not evidence that the mathematical statements require choice.
   Proposed repair: give the compact-interval analysis a verified choice-free
   proof and refresh these dependencies, or propagate `AC_omega` and
   `def-countable-choice` through every affected statement and consumer. Exact
   home pages are `continuity-ivt-evt-and-uniform-continuity` for
   `thm-heine-cantor-r`, `arc-length-and-rectifiable-curves` for the C1 and
   piecewise-C1 length items, `line-integrals-and-the-gradient-theorem` for the
   line-integral estimate, and
   `riemannian-metrics-length-distance-and-volume` for the Riemannian length
   definition. No published file has been edited here.

## Canonical integration handoff

Completed IDs:

1. `fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic`
2. `fs-geodesic-completeness-means-the-manifold-is-compact`

For each ID, the active batch owner must preserve the authored statement and
proof, replace its existing manifest scaffold dependency list with the exact
list in its checkpoint above, splice the complete proof-contract data from this
report, add the missing source-to-item destinations to coverage, and place it
after all direct same-page suppliers on the A page. The owner must also
reconcile the current A/B plan arrays without dropping any promised result. No
`record-item` receipt, scope decision, page edit or other shared write was made
because this disjoint continuation explicitly prohibits them.

Open obligations are limited to that canonical integration, the design/current
`AC_omega` mismatch, and the published assumption-propagation defect described
above. There is no unresolved mathematical or source-qualification gap in the
two completed items. This dispatch claims neither a Step-3 gate pass nor an
independent review or audit.
