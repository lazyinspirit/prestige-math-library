# Step 3b — scaffold audit and authoring: `finite-coxeter-diagrams-and-complete-classification`

Run `frontier-42-coxeter-32`, batch 13, design label CG-10 (orders 1742/1743),
role `alpha-high`, dispatch label
`step3b-pair-finite-coxeter-diagrams-and-complete-classification-56dd71ba982e5c70`.
A page `finite-coxeter-diagrams-and-complete-classification`, B page
`finite-coxeter-diagrams-and-complete-classification-examples`, category
`coxeter-groups`. Only this pair is owned; sibling rows in the shared batch
files are preserved.

## Continuation record (this attempt started 2026-10-07 ~21:08 local / 10:08 UTC)

This pair was dispatched three times. Attempt 1 (`…4418ff98d2039acc`, from
08:04 UTC) authored the carriers for items 1–3 and wrote draft carriers for
seven more, but stopped before its report was completed; attempt 2
(`…50615c9d681bb553`, from 09:21 UTC) left no batch-13 artifact. This attempt
(`…56dd71ba982e5c70`) re-read every carrier on disk, audited it against the
batch-13 manifest statements/strategies and the two fetch-verified sources,
repaired the defects recorded below, authored the one missing carrier and both
pages, wrote the batch-13 proof contracts and recorded the ten item decisions.
No owner-held decision, plan, scope or sibling file was edited.

## Owned IDs and obligations (in dispatched dependency order)

1. `def-cg-coxeter-diagram-components-and-finite-type` (A, level 1)
2. `lem-cg-positive-definite-diagram-exclusions` (A, level 2)
3. `ex-cg-cycle-and-overlong-arm-nonpositive-witnesses` (B, level 3)
6. `lem-cg-diagram-products-and-invariant-form-comparison` (A, level 6)
13. `thm-cg-finite-type-positive-definite-criterion` (A, level 13)
14. `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (A, level 14)
15. `ex-cg-bn-and-cn-are-the-same-coxeter-diagram` (B)
15. `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences` (B)
15. `ex-cg-h3-and-h4-gram-determinants-and-principal-minors` (B)
15. `ex-cg-path-determinant-recursion-and-arm-inequality` (B)

Open obligations at entry: the ten carriers (only 9 existed), both pages (still
scaffolds with empty lists), the batch proof-contract file and the item
decisions. The page prerequisite `tits-cones-chambers-and-parabolic-stabilizers`
and the in-run supplier carriers of batches 2, 4, 7 and 9 existed on disk at
entry and were re-read; their exact consuming steps are recorded per item below.

## Checkpoint log

### 1. `def-cg-coxeter-diagram-components-and-finite-type` (A, level 1) — accepted

- Carrier: the scaffold statement with the dictionary conventions made explicit
  (edge iff $m(s,t)\ge3$, label $3$ omitted, $m=2$ no edge, labels in
  $\{3,4,\dots\}\cup\{\infty\}$, reconstruction rule, components,
  irreducible/finite type with the recorded abstention). `verification.precheck: n/a`.
- Dependencies examined: the 6 declared published items resolve; the page
  prerequisite is consumed by the criterion, not by this definition.
- Checks: rendercheck OK; proof-layout batched 0 defects; content-policy 0
  errors; batch-13 proof contract 0 errors (definition: 0 citations, 8
  boundary rows). Decision `accept` recorded (`sha256 9e8b5b1c…`).

### 2. `lem-cg-positive-definite-diagram-exclusions` (A, level 2) — accepted

- 15 numbered steps in 6 layers: witness principle, no cycles, neighbour
  inequality with valency/label consequences, at most one branch vertex and one
  large label, path recursion and chain inequality, three-arm inequality,
  complete list.
- Repair (this attempt): the value $\cos(\pi/5)=(1+\sqrt5)/4$ was cited from the
  B-page example `ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees`
  (a `b-leaf-content` hard error). It is now derived in step 1.1 from the
  Chebyshev identity $T_5$ of A-page suppliers
  (`thm-chebyshev-multiple-angle-identities`,
  `def-chebyshev-polynomials-first-and-second-kind`), and the B-page item was
  dropped from `deps` (manifest row reconciled). The fact now states the
  Chebyshev recurrence and step 1.1 iterates it to the explicit polynomial
  $T_5=16t^5-20t^3+5t$ before using it.
- Recorded clarification (claim unchanged): the "cosine matrix" is
  $C=(B(e_s,e_t))$ (diagonal $1$, off-diagonal $-c(s,t)$), the convention that
  makes $d_1=1$ and the displayed recursion correct.
- Non-blocking observation for Step 4/5: the declared dep
  `thm-sylvesters-criterion-for-positive-definiteness` is not load-bearing for
  this lemma as authored (the witness principle is immediate from positive
  definiteness and the recursion needs only expansion).
- Checks: precheck PASS, proof-layout 15 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors, boundary-audit 0
  contradicted/template rows, citation-fidelity all quotes found. Decision
  `accept` (`sha256 07ef25a1…`).

### 3. `ex-cg-cycle-and-overlong-arm-nonpositive-witnesses` (B, level 3) — accepted

- 6 numbered steps: cycle witness $B(u,u)=0$, the corrected weighted vector of
  the $(1,2,5)$ star, the two-large-label paths.
- Scaffold correction (claim unchanged; keep for Step 4): the scaffold display
  $\tfrac13(e_{b_1}+2e_{b_2})$ with $b_1$ adjacent to the centre does **not**
  give $B(u,u)=0$; the correct weighting increases toward the centre,
  $\tfrac13(2e_{b_1}+e_{b_2})$ (as the length-5 arm also does). The promised
  claim $B(u,u)=0$ is preserved.
- Repair (this attempt): the B-page trig example was removed from `deps` (it was
  declared but unlinked); the values used are $\cos(\pi/3)$ (derived in 1.1 from
  A-page items) and $\cos(\pi/4)$ (`lem-viete-finite-cosine-product-and-nested-radicals`).
- Checks: precheck PASS, proof-layout 6 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 e5d28a2b…`).

### 4. `lem-cg-diagram-products-and-invariant-form-comparison` (A, level 6) — accepted

- 8 numbered steps: commuting factors and trivial intersections, orthogonal
  decomposition, proportionality of an invariant form on one generator and its
  propagation along a connected component, length additivity, positive definite
  invariant forms give positive definite $B$, and the finite-group averaging
  argument.
- Suppliers read in the current carriers: batch 2
  (`def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`), batch 4
  (`def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`), batch 7
  (`thm-cg-root-length-criterion-and-faithfulness`).
- Checks: precheck PASS, proof-layout 8 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 9e8b5b1c…`).

### 5. `thm-cg-finite-type-positive-definite-criterion` (A, level 13) — accepted

- 8 numbered steps: the dual form $B^*$ and its invariance; isolation of the
  identity through the open chamber interior and the collision theorem;
  discreteness of $\rho^*(W)$ and $\rho(W)$; closedness and boundedness of
  $O(B^*)$; choice-free compactness; the finite-subcover count giving
  $|W|=|\rho^*(W)|\le N$. No Choice is used.
- Repairs (this attempt): (i) removed the unused reflection fact `F3` and
  renumbered `F4…F13` to `F3…F12` (the proof uses the form invariance of the
  canonical homomorphism, not the rank-two reflection formula); (ii) removed a
  duplicated `[[lem-metrics-on-rn]]` link inside one fact (citation-duplicate);
  (iii) replaced the applied $\iota(\cdot)$ notation by an explicit inverse-set
  description $U^{-1}:=\{h^{-1}:h\in U\}$ (content-policy `notation-iota-applied`).
- Page-prerequisite use: clause (3) consumes
  `thm-cg-dual-chamber-intersections-and-point-stabilizers` (3),(4) at step 1.2,
  which is the concrete use of the page `requires`
  `tits-cones-chambers-and-parabolic-stabilizers`.
- Checks: precheck PASS, proof-layout 8 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 9e8b5b1c…`).

### 6. `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (A, level 14) — accepted

- 9 numbered steps: determinant recurrences and first values with local
  derivations of $\cos(\pi/3)$ and $\cos(\pi/5)$; the recorded induction
  hypothesis; both directions of the irreducible classification; coincidences
  and the duplicate-free list; the determinant table; the reducible
  direct-product case; the base and the inductive step proving positivity of
  every listed diagram; assembly.
- Repairs (this attempt): (i) the $B_3$ display read
  $2D_2(B_2)-2D_1(A_1)=4-2$; corrected to
  $2D_2(A_2)-2D_1(A_1)=6-4=2$ (the leading $2\times2$ block of $B_3$ is
  $A_2$); (ii) the $H_4$ display read $8-3(3+\sqrt5)$; corrected to
  $8-\frac{9+3\sqrt5}2=\frac{7-3\sqrt5}2$; (iii) the non-isomorphism
  invariants now include the multiset of arm lengths, without which $E_6$
  $(1,2,2)$ and $D_6$ $(1,1,3)$ are not separated; (iv) the duplicate-free list
  excluded $m=6$ from $I_2(m)$ while naming it $G_2$, a name not in list (1);
  corrected to $m\notin\{3,4\}$ with $I_2(5),I_2(6)$ also written $H_2,G_2$;
  (v) the B-page trig example was replaced by the local Chebyshev derivation and
  dropped from `deps`; the fact states the recurrence and step 1.1 iterates it
  to $T_5=16t^5-20t^3+5t$.
- Checks: precheck PASS (induction strategy), proof-layout 9 steps 0 defects,
  rendercheck OK, content-policy 0 errors, proof-contract --strict 0 errors.
  Decision `accept` (`sha256 19ce5c56…`).

### 7. `ex-cg-bn-and-cn-are-the-same-coxeter-diagram` (B, level 15) — accepted

- 4 numbered steps: same labelled path, leading minors and
  $\det(2C)(B_n)=2$, positive definiteness and finite type, small ranks and the
  parabolic $A_{n-1}$.
- Repair (this attempt): step order/numbering was non-canonical
  (`2.2` before `2.1`); the small-ranks step is now `1.2` and precedes `2.1`,
  and the conclusion cites `[step 2.1, step 1.2]`. The cited $\cos(\pi/3)$ was
  dropped (unused) and only $\cos(\pi/4)=\sqrt2/2$ from the A-page lemma is
  kept; the B-page trig example was removed from `deps`.
- Checks: precheck PASS, proof-layout 4 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 d5153c79…`).

### 8. `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences` (B, level 15) — accepted

- 3 numbered steps: matrix and determinants of $I_2(m)$; finite case with
  positivity, exact order $2r$ and $|W|=2r$; infinite case with kernel vector;
  low-rank coincidences and $A_1\times A_1$.
- Repair (this attempt): depcheck found a `cited-not-in-deps` link to
  `lem-cg-reflection-representation-descends-and-root-norms`; the item and the
  batch-13 manifest row now declare it.
- Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 b1a97486…`).

### 9. `ex-cg-h3-and-h4-gram-determinants-and-principal-minors` (B, level 15) — accepted

- 5 numbered steps: $H_3$ minors $2,3,3-\sqrt5$ plus the label-5 $2\times2$
  minor $(5-\sqrt5)/2$; $H_4$ minors $2,3,4,\frac{7-3\sqrt5}2$; exclusion of the
  overlong paths $3,5,3$ and $3,3,5,3$ and of the star $3,3,5$ by negative
  determinants or an explicit negative witness.
- Repair (this attempt): $\cos(\pi/5)=(1+\sqrt5)/4$ is now derived in step 1.1
  from the Chebyshev identity (the fact states the recurrence and the step
  iterates it to $T_5=16t^5-20t^3+5t$), and the B-page trig example is removed
  from `deps`.
- Checks: precheck PASS, proof-layout 5 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 414b113d…`).

### 10. `ex-cg-path-determinant-recursion-and-arm-inequality` (B, level 15) — accepted

- New carrier authored in this attempt (created from the scaffold contract; no
  other carrier existed). 7 numbered steps in canonical dependency order:
  recursion by expansion; the all-3 solution; the two-subpath determinant
  $\det C=\frac{(i+1)(j+1)-4ijc^2}{2^n}$ giving the chain constraint; the arm
  identities $B(w,u)=\frac{p+1}2u_p$; completion of squares giving the
  equivalence between positive definiteness and
  $\frac1{p+1}+\frac1{q+1}+\frac1{r+1}>1$; the integer and boundary cases
  $(1,1,r),(1,2,2),(1,2,3),(1,2,4)$ and $(2,2,2),(1,3,3),(1,2,5)$.
- Dependencies examined: the 19 declared deps resolve; three published A-page
  suppliers were added for the expansion and the quadratic argument
  (`thm-laplace-cofactor-expansion`,
  `thm-determinant-is-the-unique-normalized-alternating-multilinear-function`,
  `def-definiteness-inertia-and-signature-data-over-the-reals`) and the manifest
  row was reconciled.
- Checks: precheck PASS, proof-layout 7 steps 0 defects, rendercheck OK,
  content-policy 0 errors, proof-contract --strict 0 errors. Decision `accept`
  (`sha256 f029c83a…`).

### Pages and registration

- A page `library/coxeter-groups/finite-coxeter-diagrams-and-complete-classification.md`:
  authored summary with `items` listing the five A items in dependency order;
  the prerequisite `tits-cones-chambers-and-parabolic-stabilizers` and the
  reading-order links to `coxeter-presentations-exchange-and-reduced-word-theorems`
  and the affine-classification page are recorded in the prose.
- B page `library/coxeter-groups/finite-coxeter-diagrams-and-complete-classification-examples.md`:
  authored summary with `examples` listing the five B items in dependency
  order; leaf statement preserved (no external consumer).
- `research/frontier-42-coxeter-32-batch-13.proof-contracts.json` written:
  version 1, scope = the ten ids, 202 citation contracts (every fact link with
  an exact quote and its actual step uses), one derivation entry per numbered
  step with stated inputs, and 8 boundary rows per item.

## Dependency-input and manifest changes (recorded for Step 4)

1. `ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees`
   (B-page example) was removed from the `deps` of six items
   (`lem-cg-positive-definite-diagram-exclusions`,
   `thm-cg-finite-coxeter-classification-including-h-and-dihedral`,
   `ex-cg-h3-and-h4-gram-determinants-and-principal-minors`,
   `ex-cg-bn-and-cn-are-the-same-coxeter-diagram`,
   `ex-cg-cycle-and-overlong-arm-nonpositive-witnesses`,
   `ex-cg-path-determinant-recursion-and-arm-inequality`) because it lives only
   on a B page (`b-leaf-content`); the values are now derived locally or come
   from A-page suppliers (`thm-chebyshev-multiple-angle-identities`,
   `def-chebyshev-polynomials-first-and-second-kind`,
   `lem-viete-finite-cosine-product-and-nested-radicals`).
2. `lem-cg-positive-definite-diagram-exclusions` and
   `thm-cg-finite-coxeter-classification-including-h-and-dihedral` gained the
   two Chebyshev items; `ex-cg-path-determinant-recursion-and-arm-inequality`
   gained the three published items listed above; `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences`
   gained `lem-cg-reflection-representation-descends-and-root-norms`. All are
   published items (or an in-run item of level $\le5$), so no dependency level
   changed: the labels remain $1,2,3,6,13,14,15,15,15,15$.
3. The batch-13 manifest rows were reconciled to the item files for all ten
   items; `manifest-deps` reports 10 items, 0 errors, and
   `item-dependency-levels check` names no batch-13 item.

## Supplier reconciliation

- In-run suppliers of batches 2, 4, 7 and 9 exist as carriers with their
  precheck markers (`pass`, or `n/a` for the definitions) and were read at
  their used clauses: batch 2 presentation/universal property, parabolic
  intrinsic presentation and length additivity; batch 4 form, reflection
  formula, canonical homomorphism, descent and dual chambers; batch 7
  faithfulness and disjoint open chambers; batch 9 collision theorem and point
  stabilizers. The specific consuming steps are recorded in the checkpoints
  above (criterion 1.2; comparison lemma 1.1–4.1; dihedral example 2.1).
- The page prerequisite `tits-cones-chambers-and-parabolic-stabilizers` is
  consumed exactly through
  `thm-cg-dual-chamber-intersections-and-point-stabilizers` (3),(4) in
  `thm-cg-finite-type-positive-definite-criterion` step 1.2.
- The in-run supplier *proofs* are Step 5–8 subjects; this attempt verified
  carriers, statements and the uses, not the independent mathematical audit of
  the suppliers. Because sibling authors were still writing when the decisions
  were recorded (e.g. `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  and `thm-cg-dual-chamber-intersections-and-point-stabilizers` changed within
  the hour), the ten accept receipts may require the engine's pre-gate
  recertification pass if any dependency input changes again.

## Published concerns and cross-batch findings (exact IDs; not mine to edit)

- `items/thm-cg-finite-chamber-tiling-and-coset-face-identification.md`
  (consumer, batch 16) cites `def-cg-coxeter-diagram-components-and-finite-type`
  in Statement/Facts but does not declare it in `deps` (`cited-not-in-deps`).
  Remedy: add the id to that item's `deps` and to its manifest row.
- `items/ex-cg-infinite-dihedral-growth.md` depends on the B-page item
  `ex-formal-geometric-series` and
  `items/lem-cg-exceptional-parabolic-orbit-length-certificates.md` depends on
  `ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees`
  (`b-leaf-content`). Remedy: replace with A-page suppliers or a local argument,
  as done here for this pair.
- `item-dependency-levels check --run frontier-42-coxeter-32` reports three
  label mismatches outside this pair:
  `ex-cg-interval-realized-tree-versus-vertex-graph-metric` (declared 5,
  computed 3) and `ex-cg-hexagonal-a2-cell-and-graph-distance` (declared 5,
  computed 3) in batch 6, and
  `ex-cg-reducible-semidefinite-forms-are-factorwise` (declared 15, computed
  16) in batch 27. Remedy: re-record those labels from the current manifests.
- `validate-plan` currently fails on sibling pages with `[undeclared-prereq]`
  (`coxeter-descents-poincare-polynomials-and-growth{, -examples}`, and others
  reachable through `fundamental-trigonometric-identities-examples` and
  `formal-power-series-examples`). No failing line names this pair.
- Several sibling in-run items carry unresolved wikilinks (for example
  `lem-cg-classical-type-poincare-products` links
  `[[thm-cg-finite-coexeter-classification-including-h-and-dihedral]]` and even
  `[[F1]]`; the CAT(0)/short-loop batches link planned items not yet written).
  These are in-flight sibling defects, reported here with exact ids; none is in
  this pair.
- No defect was found in the published (library) items consumed by this pair;
  nothing published was edited.

## Checks actually run (this attempt)

| Check | Command | Actual result |
|---|---|---|
| precheck (explicit paths, 10 items) | `node tools/tsx-run.mjs tools/precheck.mts <10 paths>` | `9 checked, 0 failing — all clean` (definition n/a) |
| rendering (10 items + 2 pages) | `node tools/rendercheck.mjs <12 paths>` | `OK — 12 file(s)` |
| proof layout, one batched command | `node tools/proof-layout.mjs <10 paths>` | `10 items, 65 steps, 0 defects` |
| content policy (item mode) | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-13.pages.json` | `10 scoped item(s), 0 error(s), 0 warning(s)` |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-13.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 10/10 item(s) checked` |
| boundary audit | `node tools/boundary-audit.mjs <contracts> --fail-on-contradicted --fail-on-template` | no template or contradicted rows, exit 0 |
| citation fidelity | `node tools/citation-fidelity.mjs <contracts> --fail-on-missing-quote` | `202 citation(s) over 10 authored item(s)`; every quote found, exit 0 |
| risk report | `node tools/risk-report.mjs <contracts>` | 0 errors, 10 items routed to review (informational) |
| manifest dependencies | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-13.pages.json` | `10 item(s), 0 normalized, 0 error(s)` |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no line names a batch-13 item (three sibling mismatches reported above) |
| depcheck | `node tools/depcheck.mjs` | no error names a batch-13 item (sibling findings above); FAIL is repo-wide |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| validate-plan (page level) | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan --quiet` | fails only on sibling `[undeclared-prereq]` pages; my pair appears with `0 items` (plan-spec leaves the track item lists empty) |
| pair artifacts | engine `pairAuthorArtifacts` probe | all 15 required paths present (report, batch manifest, contracts, both pages, all ten items) |
| item decisions | `node tools/step3-decisions.mjs record-item …` | 10 receipts `accept`, confidence 1; `itemDecision` re-check reports all ten `CLOSED` |

## Handoff summary

- Completed IDs: all ten assigned items (five A, five B), both pages, the
  batch-13 proof contracts and this report.
- Added suppliers: none new; the only added dependencies are published items
  (Chebyshev, Laplace expansion, determinant multilinearity, definiteness) and
  one in-run item (`lem-cg-reflection-representation-descends-and-root-norms`).
- Published concerns: the sibling `cited-not-in-deps` and `b-leaf-content`
  findings listed above; no published item was edited.
- Open obligations: (i) the in-run supplier proofs remain subject to Steps 5–8;
  (ii) the ten accept receipts must be refreshed by the engine's Step-3
  recertification pass if any dependency input changes before the 3b gate;
  (iii) the run-level `validate-plan`, `proof-contract` merge and
  `item-dependency-levels` gates also require the sibling batches to land their
  own artifacts — the failures listed above are theirs, not this pair's.
