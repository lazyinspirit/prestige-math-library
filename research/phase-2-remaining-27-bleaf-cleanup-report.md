# Step 4 cleanup — `b-leaf` findings: verification report

Run `phase-2-remaining-27`, dispatch `alpha-high` / `step4-bleaf-cleanup`
(covers `real-forms-and-real-semisimple-lie-algebras`). Date 2026-09-17.

This report covers the 51 `[b-leaf]` findings listed in
`research/phase-2-remaining-27-bleaf-cleanup.task.md`. The repairs themselves
were applied on disk by the parallel dispatch `alpha-high` / `step4-bleaf-plan`
(run 20:32–20:45; its own record is
`research/phase-2-remaining-27-bleaf-plan-report.md`), which closed all 51 by
two routes: 35 findings by a single-home MOVE of the supplier from its examples
page to its companion A page, 16 findings by synchronising the stale batch
manifest row to the already-authored consumer `deps`. By the time this dispatch
started auditing (20:40), the gate was already green.

I therefore did **not** duplicate the repair by re-editing the consumers'
`deps`/proofs through the replace-or-inline route: after the moves, every kept
edge satisfies the stricter form of the rule in this dispatch's §4 — no in-run
item depends on an item *listed on an examples page*, not even one that also has
an A home. Re-running the replace/inline route would have re-edited proofs
byte-identical to the ones the move route left untouched, and any item edit made
after the Step-5 pre-audit snapshots (`research/phase-2-remaining-27-step5-hash-{n}-pre.json`,
taken 20:46) invalidates those hashes. This report is the independent audit of
the result: what I checked, what I found, and the residual obligations.

## 1. Result

| check (run by me on the post-repair tree) | result |
|---|---|
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 — **0** `b-leaf` (was 51), and 0 of every other hard class |
| `node tools/depcheck.mjs` | exit 0 — "OK — no cycles, all references resolve, no draft items on published pages" (276 warnings, all pre-existing classes: 156 multi-home, 117 cited-not-in-deps, 2 orphan, 1 b-leaf-legacy allowlist entry) |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --verify` | 54 page(s) across 15 manifest(s) — plan and manifests agree |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --all` | all 15 batches `already correct` |
| `node tools/manifest-integrity.mjs --run phase-2-remaining-27` | 54 page(s) owed, 54 in the manifests — no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed and deduplicated |
| `node tools/manifest-deps.mjs` on batches 9, 11, 12, 13 | 417 items, 0 errors |
| `node tools/rendercheck.mjs` on the 12 A/B page files of the six affected pairs | OK — 12 files, KaTeX/YAML clean |
| `node tools/tsx-run.mjs tools/precheck.mts` on all 29 consumer items + 18 supplier items (47 files) | 47 PASS, 0 failing, 0 REPAIR |
| homes audit of the 51 pairs (walking `library/**` with the gate's own `tools/frontmatter-list.mjs` parser) | 51/51 resolved: 35 suppliers single-homed on an A page, 16 suppliers no longer referenced at all |
| consumer `deps` == batch-manifest row == plan row, all 29 consumers | 29/29 agree |
| global strict-rule sweep: every dep of every one of the **1029** items on the run's 54 pages, resolved through `library/**` homes, excluding same-page edges | **0** cross-page deps on an item listed on an examples page |

No item file, manifest row, coverage row, contract row, scope decision or page
file was edited by this dispatch. No new supplier or lemma was created. No
decision record was written, and no `--owner` or judge/audit stamp was touched.

## 2. Disposition of the 51 findings (verified, not taken on trust)

Method: for each finding I read the consumer item file, checked its frontmatter
`deps` and every `[[…]]` citation of the old supplier, then resolved the
supplier's current homes by walking `library/**` with the same frontmatter
parser the gate uses. "MOVE" means the consumer's dep and citations are
unchanged and the supplier is now **single-homed on an A page** (the old
examples-page listing was removed); "dropped" means the consumer neither lists
nor cites the supplier any more.

| consumer (29 distinct items) | findings | per-supplier disposition |
|---|---|---|
| `prop-classical-types-correspond-to-sl-so-and-sp` | 1 | `ex-classical-simple-lie-algebras-and-their-killing-forms` (MOVE → `semisimple-lie-algebras-cohomology-and-levi-theory`) |
| `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras` | 1 | same supplier (MOVE, same A home) |
| `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic` | 1 | `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups` (MOVE → semisimple A page) |
| `prop-restricted-root-systems-may-be-nonreduced` | 3 | `ex-classical-root-systems-in-euclidean-coordinates`, `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` (MOVE → root-systems A page); `ex-classical-simple-lie-algebras-and-their-killing-forms` (MOVE → semisimple A page) |
| `ex-compact-and-split-real-forms-of-sl-two-c` | 3 | `ex-killing-form-of-sl-two` (MOVE → semisimple A page); `ex-unitary-and-special-unitary-lie-groups`, `ex-general-and-special-linear-lie-groups` (MOVE → `lie-groups-invariant-fields-and-the-exponential-map`) |
| `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | 3 | `ex-general-and-special-linear-lie-groups`, `ex-orthogonal-and-special-orthogonal-lie-groups` (MOVE → lie-groups A page); `ex-classical-simple-lie-algebras-and-their-killing-forms` (MOVE → semisimple A page) |
| `ex-polar-cartan-decomposition-of-sl-n-r` | 3 | `ex-general-…`, `ex-orthogonal-…`, `ex-matrix-exponential-as-the-lie-group-exponential` (MOVE → lie-groups A page) |
| `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` | 2 | `ex-general-…`, `ex-orthogonal-…` (MOVE → lie-groups A page) |
| `ex-iwasawa-decomposition-of-sl-two-r` | 3 | `ex-general-…`, `ex-orthogonal-…`, `ex-matrix-exponential-…` (MOVE → lie-groups A page) |
| `ex-restricted-roots-of-sl-n-r` | 2 | `ex-general-…` (MOVE → lie-groups A page); `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` (MOVE → `cartan-subalgebras-and-root-space-decompositions`) |
| `ex-a-nonreduced-bc-root-system-from-a-real-form` | 2 | `ex-classical-simple-lie-algebras-and-their-killing-forms` (MOVE); `ex-unitary-and-special-unitary-lie-groups` (MOVE) |
| `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | 4 | `ex-general-…`, `ex-unitary-…` (MOVE); `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` (MOVE); `ex-classical-simple-lie-algebras-and-their-killing-forms` (MOVE) |
| `cex-two-nonconjugate-real-cartan-subalgebras` | 1 | `ex-general-and-special-linear-lie-groups` (MOVE) |
| `cex-same-complexification-with-different-killing-form-signatures` | 1 | `ex-killing-form-of-sl-two` (MOVE) |
| `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | 4 | `ex-classical-simple-…`, `ex-orthogonal-…`, `ex-general-…`, `ex-matrix-exponential-…` (MOVE) |
| `cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group` | 1 | `ex-su-two-to-so-three-as-a-covering-homomorphism` (MOVE → `lie-subgroups-actions-and-homogeneous-spaces`) |
| `ex-complex-k-ahss-for-complex-projective-space` | 2 | `ex-integral-cohomology-ring-of-complex-projective-space`, `ex-complex-k-ring-of-complex-projective-space` (dropped) |
| `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions` | 2 | `ex-tautological-real-and-complex-lines-over-projective-space`, `ex-integral-cohomology-of-real-projective-space-from-uct` (dropped) |
| `ex-complex-k-ahss-for-real-projective-space` | 1 | `ex-integral-cohomology-of-real-projective-space-from-uct` (dropped) |
| `lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three` | 1 | `ex-steenrod-squares-on-real-projective-space` (dropped; the item cites four A-homed replacements) |
| `fs-every-symplectic-action-is-hamiltonian` | 1 | `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` (dropped; argument inlined in the authored text) |
| `fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g` | 1 | `ex-orthogonal-and-special-orthogonal-lie-groups` (dropped; cites `ex-su-two-and-so-three-…`) |
| `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map` | 1 | `ex-the-standard-symplectic-vector-space` (dropped; cites `thm-the-canonical-cotangent-two-form-is-symplectic`) |
| `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle` | 1 | `ex-orthogonal-…` (dropped; cites `ex-su-two-and-so-three-…`, `def-cross-product-in-r3`) |
| `ex-two-sphere-as-a-coadjoint-orbit-of-so-three` | 1 | `ex-orthogonal-…` (dropped; cites `ex-su-two-and-so-three-…`) |
| `ex-diagonal-action-and-addition-of-angular-momenta` | 1 | `ex-orthogonal-…` (dropped; cites `ex-su-two-and-so-three-…`) |
| `cex-zero-angular-momentum-level-with-nonfree-points-is-singular` | 1 | `ex-orthogonal-…` (dropped; cites `ex-su-two-and-so-three-…`) |
| `ex-grassmannians-from-unitary-symplectic-reduction` | 2 | `ex-unitary-and-special-unitary-lie-groups`, `ex-the-standard-symplectic-vector-space` (dropped) |
| `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian` | 1 | `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` (dropped; cites `def-two-dimensional-torus`, `cor-a-nonzero-period-obstructs-exactness-and-bounding`) |

Facts I confirmed about the repairs, rather than assuming them:

* The 11 moved suppliers are **single-homed** on their A page (the examples-page
  listing was removed, not merely shadowed). A single-home move is robust to the
  gate's `readdir`-order-dependent `homePageOf`, unlike the earlier multi-home
  attempt of commit `096923b25`.
* Every moved supplier's new A page is inside the `requires` closure of each
  consumer's page — `validate-plan` exits 0, so no `undeclared-prereq` or
  `forward-ref` was introduced.
* **No consumer item file was edited during the cleanup.** Of the 29 consumers,
  17 are tracked and byte-identical to HEAD; the other 12 are this run's
  untracked drafts. No item mtime is later than 20:28, and the only items
  written after 20:00 are the two Euler-supplier items of the separate
  `step4-euler-supplier` dispatch. Nothing was re-authored and no claim was
  deleted to make the gate pass.
* For 13 of the 16 dropped-dep findings the authored text already cites A-homed
  replacements (the Bockstein lemma cites four of them; the moment-maps items
  cite `prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map`,
  `def-cross-product-in-r3`, `def-two-dimensional-torus`,
  `thm-the-canonical-cotangent-two-form-is-symplectic`,
  `cor-a-nonzero-period-obstructs-exactness-and-bounding`, and the
  now-A-homed `ex-su-two-and-so-three-…`). The remaining three are the AHSS
  items in finding 4.2 below.

## 3. The moves, and what they did not change

Eleven published example items changed *home page* (single-home move); no
statement, proof, `deps` list, `status` or audit stamp changed on any of them.

| supplier | removed from (B page) | now homed on (A page) |
|---|---|---|
| `ex-general-and-special-linear-lie-groups` | `lie-groups-…-examples` | `lie-groups-invariant-fields-and-the-exponential-map` |
| `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-…-examples` | same (also removed from the secondary listing on `real-forms-and-real-semisimple-lie-algebras`) |
| `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-…-examples` | same |
| `ex-matrix-exponential-as-the-lie-group-exponential` | `lie-groups-…-examples` | same |
| `ex-su-two-to-so-three-as-a-covering-homomorphism` | `lie-subgroups-…-examples` | `lie-subgroups-actions-and-homogeneous-spaces` |
| `ex-killing-form-of-sl-two` | `semisimple-…-examples` | `semisimple-lie-algebras-cohomology-and-levi-theory` |
| `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-…-examples` | same |
| `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups` | `semisimple-…-examples` | same |
| `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | `cartan-subalgebras-…-examples` | `cartan-subalgebras-and-root-space-decompositions` |
| `ex-classical-root-systems-in-euclidean-coordinates` | `root-systems-…-examples` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` | `root-systems-…-examples` | same |

This is a reading-order/home change inside published content: licensed by the
`step4-bleaf-plan` dispatch, and matched by the earlier practice of commit
`096923b25`. It is confined to the `examples:`/`items:` home lists of eight
`library/differential-geometry/*.md` page files (see the plan report's file
list); reverting it is a local, clean operation if the owner prefers the
replace/inline route.

## 4. Independent findings from this audit

The gate is green and I found no mathematical error in any consumer. The
following are residual, transcript-fixable issues I confirmed while verifying —
reported, not repaired, because (i) a sibling dispatch owns the repairs that
were applied, and (ii) item edits after the Step-5 pre-audit hash snapshot must
go through the engine's repair path so the affected certifications are
refreshed.

### 4.1 `ex-grassmannians-from-unitary-symplectic-reduction` — fact row with no supplier (confirmed)

`items/ex-grassmannians-from-unitary-symplectic-reduction.md` line 51 reads
`[F1] $U(k)$ is a compact Lie group with Lie algebra $\mathfrak u(k)=\{X:X^*+X=0\}$. .`
The row carries **no wikilink** (note the residual ` . ` left by a mechanical
deletion), and the item's only related dep,
`cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`,
states that unitary *operators* form a group with `|det T| = 1` — it does not
state compactness or the Lie-algebra description. Steps 2.1 and 4.1 use both
clauses. The `step4-bleaf-plan` report classifies this finding (#51) as
"REPLACE (realised in authored text)"; that is accurate for the second dropped
supplier (`ex-the-standard-symplectic-vector-space`, replaced by
`thm-the-canonical-cotangent-two-form-is-symplectic`) but not for this one: the
fact was left uncited rather than replaced.

Confidence: confirmed (structural). Repair strategy, all pieces verified to be
A-homed and inside the consumer page's `requires` closure: cite
`ex-unitary-and-special-unitary-lie-groups` (now on the lie-groups A page) for
"Lie group with Lie algebra `u(k) = {X : X*+X = 0}`", keep the existing
corollary for the operator-group statement, and justify compactness in the
step-4.1 sentence by "closed and bounded in `M_k(C) ≅ R^{2k²}`, hence compact"
with `thm-heine-borel-rn` (homed on `compactness-in-metric-spaces`, in the
closure). No claim needs weakening.

### 4.2 AHSS examples — unlinked background computations (confirmed citation gap)

Three consumer items invoke true, standard computations by prose description
instead of by an item citation:

* `ex-complex-k-ahss-for-complex-projective-space` — [A2]
  (`H*(CP^n;Z) ≅ Z[u]/(u^{n+1})`, "the standard integral cohomology ring
  computation") and [A3] (`K^0(CP^n) ≅ Z[α]/(α^{n+1})`, "the published
  projective-bundle K-ring computation"); both rows are unlinked, and steps 1.1
  and 3.1 use them.
* `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions`
  — [A1] (tautological real/complex lines, "as computed in the
  topological-vector-bundles page") and [A3] (integral cohomology of `RP^r`,
  "the standard universal-coefficient computation"); [A5] is an explicit
  recorded source input (Atiyah, with URL in `sources.references`) and is
  honestly labelled as not reproved here.
* `ex-complex-k-ahss-for-real-projective-space` — [A1] half-cited: the AHSS
  clause links `cor-complex-k-theory-ahss`, the integral-cohomology clause is
  unlinked.

Legal A-homed suppliers exist for most of these (all verified in the closure):
`lem-real-projective-space-cellular-homology-and-pinch-map` +
`thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` for
`H*(RP^r;Z)`; `def-stiefel-space-grassmannian-and-tautological-bundle` for the
tautological lines; and `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`
+`cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`
+`thm-cellular-homology-computes-singular-homology`+UCT for the additive part of
`H*(CP^n;Z)`.

No legal A-homed supplier exists for `K^0(CP^n) ≅ Z[x]/(x^{n+1})` earlier than
the AHSS examples page: the library's only proof of that presentation is the
published example `ex-complex-k-ring-of-complex-projective-space`, which is
homed on the B page
`complex-topological-k-theory-and-bott-periodicity-examples` (order 366.032)
and is therefore unusable as a cross-page dependency, and the chern–Pontryagin lemmas
(`lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`,
`thm-integral-complex-projective-bundle-theorem`) sit on order 366.039, later
than the consumer (366.034). `thm-fundamental-product-theorem-for-complex-k-theory`
(A page, 366.031) is in the closure but does not state this presentation. So
this one clause needs either a recorded source input (Hatcher, VBKT, already in
`sources.references`) or an owner-held forward escalation — not a silent
prose reference.

Confidence: confirmed as a citation/traceability gap; the facts themselves are
standard and true, so this is not a mathematical error, and it is a draft item
for Step-5a review.

### 4.3 Examples-page prose describes items the pages no longer carry

Confirmed, and already queued by the `step4-bleaf-plan` report §Prose
amendments. I reproduce it here only to mark it as independently verified:
`lie-groups-…-examples` ("classical matrix … groups"; "the ordinary
power-series exponential is identified with the Lie-group exponential"),
`semisimple-…-examples` ("the Killing forms of `sl_2` and the split classical
families"), `cartan-subalgebras-…-examples` ("the diagonal Cartan subalgebra and
the roots `ε_i−ε_j` of `sl_n(C)`"), and `root-systems-…-examples` ("the
classical systems in coordinates"; "the Weyl groups of types A,B,D") all now
describe items that live on the companion A page. The moves did not touch these
sentences; the A pages' own summaries were not required to change.

### 4.4 Plan row stale for one published B-page item (minor, non-blocking)

`research/plan-spec.json` carries `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus`
on `hamiltonian-mechanics-and-completely-integrable-systems-examples` with one
dep (`thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology`),
while the item's frontmatter lists two (adding
`prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed`). Both are
A-homed, so nothing in the b-leaf class is affected, but plan and item disagree
for a published item that is not carried by this run's batch manifests, so no
manifest sync exists to correct it. Worth a one-row plan fix in Step 4.

### 4.5 Batch-9 manifest file mode

`research/phase-2-remaining-27-batch-9.pages.json` is mode `0600`; every other
batch manifest is `0644`. Harmless for same-user agents (all writers run as
`lazyinspirit`), but it is an inconsistency introduced by whichever write
created it and worth normalising.

## 5. Published concerns and the canonical ledger

* No published item was found potentially defective by this audit. The 11 moved
  suppliers are sound published items whose text is unchanged; only their page
  inventory changed. Per the ledger rule (an entry is owed only when the item's
  mathematical finding, supplier mapping or repair strategy changes), **no
  entry was added** to `research/published-consumer-supplier-ledger.md`; the
  serial reconciler owns that file.
* The three drafting gaps in 4.1–4.2 are in **draft** consumers of this run
  (not published), and the four prose sentences in 4.3 are in published
  examples-page bodies — an inventory/prose coherence matter for Step 4
  reconciliation, not a proof defect.

## 6. Open obligations (handoff)

1. Apply or explicitly accept finding 4.1 (uncited `U(k)` compact-Lie-group
   fact) through the engine's repair path, refreshing the Step-5 hash
   certification for that item and re-splicing batch 13.
2. Apply or accept finding 4.2: link the existing A-homed suppliers for the
   RP-cohomology / tautological-line / additive-CP-cohomology clauses; for
   `K^0(CP^n)` record the source input or escalate. Route through Step 4/Step 5a
   review so the item hashes and judgments are refreshed.
3. Reconcile the four examples-page prose sentences (4.3) in Step 4.
4. Fix the stale plan row in 4.4 and the file mode in 4.5 when the plan is next
   touched; neither blocks the gate.
5. No decision records were written by this dispatch; `step3-decisions.mjs` and
   the run record remain the orchestrator's.

## 7. What this dispatch did not do

* It did not edit any item, manifest, coverage, contract, scope decision, page
  or ledger file. The one derived run artifact it rewrote is
  `research/phase-2-remaining-27-cross-batch-dependencies.json`, via the
  idempotent `frontier-dependency-ledger.mjs refresh` that the plan dispatch had
  already run; that file is a generated table, not a decision record.
* It did not run the replace/inline route on the 35 kept edges: after the moves,
  those deps are single-homed on A pages, which satisfies both the gate and this
  dispatch's stricter "not listed on any examples page" rule.
* It did not clear, override or pre-empt any owner-held escalation, and it did
  not stamp or certify anything.
