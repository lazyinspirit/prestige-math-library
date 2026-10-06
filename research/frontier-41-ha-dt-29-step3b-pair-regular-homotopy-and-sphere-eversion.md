# Step 3b pair report — `regular-homotopy-and-sphere-eversion`

- Run: `frontier-41-ha-dt-29`, batch 18 (the batch holds only this pair).
- A page `regular-homotopy-and-sphere-eversion` (order 567, DT-26);
  B page `regular-homotopy-and-sphere-eversion-examples` (order 568).
- Role: `alpha-high`; label of record
  `step3b-pair-regular-homotopy-and-sphere-eversion-10f48430b4309d62`.
  The first attempt (`...-6b19f5b6b2817eff`) wrote all 20 item files and a
  report checkpointed through item 6, then exited nonzero. This pass re-read
  all 20 item files, repaired three of them further, authored the two missing
  library pages, regenerated the affected contract entries, refreshed the
  cross-batch rows, and recorded all 20 item decisions. No text written by the
  first attempt was discarded without re-verification.

## Owned inventory, authoring order (dependency level, then page order, then id)

All 20 items are **original scaffold IDs** (present in `plan-spec.json` and the
batch-18 manifest); none is an auditor addition. Levels below are the current
manifest `dependency_level`s, which agree with the dispatch order.

| level | item | home |
| --- | --- | --- |
| 0 | `def-gauss-frame-map-of-an-immersion-into-euclidean-space` | A |
| 0 | `def-rotation-number-of-an-immersed-oriented-circle-in-the-plane` | A |
| 0 | `lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension` | A |
| 0 | `lem-the-second-homotopy-group-of-so-three-vanishes` | A |
| 2 | `prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle` | A |
| 2 | `ex-a-boy-surface-immersion-of-real-projective-two-space` | B |
| 3 | `lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number` | A |
| 3 | `lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration` | A |
| 4 | `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three` | A |
| 5 | `ex-formal-frame-homotopy-behind-sphere-eversion` | B |
| 6 | `lem-regular-homotopy-preserves-the-formal-gauss-class` | A |
| 13 | `thm-smale-classification-of-sphere-immersions-in-euclidean-space` | A |
| 13 | `thm-whitney-graustein-classification-of-plane-circle-immersions` | A |
| 14 | `rem-sphere-immersion-groups-are-at-computations-not-dt-constructions` | A |
| 14 | `thm-sphere-eversion` | A |
| 14 | `ex-plane-circle-immersions-of-rotation-number-k` | B |
| 15 | `rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` | A |
| 15 | `cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions` | B |
| 16 | `rem-regular-homotopy-allows-self-intersections-but-never-rank-drop` | A |
| 17 | `cex-a-homotopy-through-maps-with-a-rank-drop-is-not-a-regular-homotopy` | B |

## Open obligations carried at entry, and their resolution

1. **P1 (Step 3a review, confirmed; repaired here).** Three A-item deps were
   homed only on B pages. All three were re-routed to published A-page
   suppliers, and the manifest rows were updated by Step 1:
   - `lem-stiefel-manifolds-…`: `ex-spheres-as-so-n-plus-one-mod-so-n`
     **removed**; the induction now uses the definitional
     $V_1(\mathbb R^n)=S^{n-1}$ plus an explicit two-chart Householder
     trivialisation of $V_m(\mathbb R^n)\to S^{n-1}$.
   - `lem-formal-immersions-of-the-circle-…`:
     `ex-the-tangent-bundle-of-the-circle-is-trivial` replaced by
     `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame`
     plus the explicit angular frame $\partial_\theta$.
   - `thm-smale-classification-…`:
     `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial`
     replaced by the global-frame corollary,
     `prop-tangent-space-of-a-regular-level-set-is-the-kernel` and the in-run
     `lem-formal-immersion-gives-the-tangent-normal-bundle-identity`.
2. **P2 (Step 3a review, confirmed; repaired here).**
   `rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` no longer
   derives continuity of the bounded complementary component from
   `thm-jordan-brouwer-separation`. The proof's sign invariant is the flux of
   $\tfrac13x$ through the parametrised slices, which is continuous and nonzero
   ($\pm\operatorname{vol}(B_t)$) along any family of embeddings; Alexander's
   theorem is named as the classical input the argument does not need, and the
   inherited AC is declared. No local lemma was needed.
3. **Batch-17 suppliers.** All eleven cited in-run suppliers are now authored
   on disk. Each was read at its current revision and reconciled with the
   consuming step; the 30 cross-batch rows of batch 18 were set to `verified`.
   Residual obligation: the batch-17 pair is still being authored by its own
   live dispatch, so any later edit of a draft changes the consumer's hash and
   automatically re-opens the consumer's decision. Exact mapping in
   "Cross-batch reconciliation" below.
4. **P3/P4 (design/plan bookkeeping).** Unchanged and reported, not repaired:
   ten published citations sit outside the declared transitive `requires`
   closure (all published and earlier, no ordering hazard), and the design's
   `spectra-and-stable-homotopy-groups` token is not needed by this pair (no
   stable stems are used; the drift review had already adjudicated this).

## Checkpoint log (final state)

Checks listed per item are those run for this dispatch on the final file.
`precheck` is the explicit-path run over all 20 owned items
(`16 checked, 0 failing`; the two definitions and the two proof-free remarks
are n/a); `rendercheck` was run on all changed files and the two new pages;
`proof-layout` was run on all 20 owned items in one command
(`20 items, 78 steps, 0 defects`).

| item | decision | checks | notes |
| --- | --- | --- | --- |
| `def-gauss-frame-map-…` | accept | precheck n/a; rendercheck ok | Definition; twisted Stiefel-bundle section convention; no in-run supplier |
| `def-rotation-number-…` | accept | precheck n/a; rendercheck ok | Definition; degree of the unit tangent = velocity winding number = rotation index |
| `lem-stiefel-manifolds-…` | repaired | precheck PASS; proof-layout ok | B-leaf dep removed; two-chart Householder trivialisation; AC use vacuous for the two-letter cover |
| `lem-the-second-homotopy-group-of-so-three-vanishes` | repaired | precheck PASS | Scaffold's $V_2(\mathbb R^3)\to O(3)$ identification false; repaired to $SO(3)$ plus the two-coset decomposition of $O(3)$ |
| `prop-euclidean-formal-immersions-…` | accept | precheck PASS | Sections model; $C^\infty(M,\mathbb R^n)$ contractible factor; sphere pullback and $S^1\!\times\!S^1$ instance |
| `ex-a-boy-surface-…` | repaired | precheck PASS; rendercheck ok | Steps 2.1/2.2 corrected (see repairs); closing at the real puncture proved exactly |
| `lem-formal-immersions-of-the-circle-…` | accept | precheck PASS | Trivial $E=S^1\!\times\!S^1$; winding invariant of the derivative = rotation number |
| `lem-the-basepoint-evaluation-…` | accept | precheck PASS | Evaluation Hurewicz fibration; difference class; LES consequences; all suppliers published or own |
| `lem-standard-and-reflected-…` | accept | precheck PASS | $\Gamma$ path connected from $\pi_2(V_2(\mathbb R^3))=0$; reflection identity $r\circ\iota=A\circ(\iota\circ a)$ |
| `ex-formal-frame-homotopy-…` | repaired | precheck PASS; rendercheck ok | Statement and 1.1 rewritten to make the difference-class construction precise |
| `lem-regular-homotopy-preserves-…` | accept | precheck PASS | Necessity half; countable choice flagged only for the converse (smoothing) direction |
| `thm-smale-classification-…` | repaired | precheck PASS | P1 re-route applied; three clauses proved with the evaluation lemma and Stiefel connectivities |
| `thm-whitney-graustein-…` | accept | precheck PASS | Necessity + sufficiency via Smale–Hirsch $\pi_0$; bijection with $\mathbb Z$; orientation sign |
| `rem-sphere-immersion-groups-…` | accept | precheck n/a | AT seam remark; records the Stiefel $\pi_m$ inputs as algebraic-topology values |
| `thm-sphere-eversion` | accept | precheck PASS | Existence + path connectivity + non-isotopy via the continuous flux invariant; AC declared |
| `ex-plane-circle-immersions-of-rotation-number-k` | accept | precheck PASS; rendercheck ok | $k$-fold circles; lemniscate with rotation number 0 by signed crossing count |
| `rem-sphere-eversion-cannot-be-an-isotopy-…` | repaired | precheck PASS; rendercheck ok | P2 repair: flux-based sign argument, no false continuity citation |
| `cex-the-figure-eight-and-round-circle-…` | accept | precheck PASS; rendercheck ok | Lemniscate $0$ vs circle $1$; velocity norm $16s^2-15s+4>0$ |
| `rem-regular-homotopy-allows-self-intersections-…` | accept | precheck n/a | Self-intersections allowed, rank drop forbidden; openness cited |
| `cex-a-homotopy-through-maps-with-a-rank-drop-…` | accept | precheck PASS; rendercheck ok | Shrinking family immersive for $t<1$, constant at $t=1$ |

## Repairs made in this pass (exact)

1. **`ex-a-boy-surface-immersion-of-real-projective-two-space`.**
   (a) The three intermediate conjugation identities of step 2.1 were wrong as
   written (sign and power of $\bar w$). Corrected to
   $t(1-t^4)=\overline{w(1-w^4)}/\bar w^6$,
   $t(1+t^4)=-\overline{w(1+w^4)}/\bar w^6$,
   $1+t^6=\overline{1+w^6}/\bar w^6$; the displayed quotient identities and
   $g_i(t)=g_i(w)$, hence $P(t)=P(w)$, now follow. (Checked numerically on
   samples; the symmetric point $P(-1/\bar w)=P(w)$ holds to machine
   precision.)
   (b) Step 2.2 was replaced by a correct local argument: at the real puncture
   $w_1$ (with $w_1^3=u_+=\tfrac12(3-\sqrt5)$) the residues
   $\rho_1,\rho_2,\rho_3$ are real and nonzero, the principal part of $g$ is
   $N(u)/\lvert u\rvert^2$ with $N(x+iy)=(ay,bx,cy)$,
   $a=\tfrac32\rho_1$, $b=-\tfrac32\rho_2$, $c=-\rho_3$, and the identity
   $b^2=a^2+c^2$ follows from $u_+^2-3u_++1=0$ (equivalently
   $(1+u_+^2)^2=9u_+^2$). Then
   $P=\bigl(N(u)+h\lvert u\rvert^2\bigr)\big/\bigl(b^2+2\langle N,h\rangle+\lvert h\rvert^2\lvert u\rvert^2\bigr)$
   is real-analytic near $0$ with $P(w_1)=0$ and injective differential
   $v\mapsto N(v)/b^2$. The same expansion is recorded at the other two
   punctures, with the closing of the planar ends under inversion cited to
   Karcher and Kusner.
   Verification status recorded honestly: exact at $w_1$ (the algebra above);
   the same expansion at the two non-real punctures was checked numerically
   (differentiability and injectivity of the directional derivative at $w_2$
   to six digits) and is the closing stated by the cited sources;
   a fully written algebraic proof of the quadratic identity at $w_2,w_3$ is
   left to the independent Steps 5–8 audit if the reviewers want it spelled
   out.
2. **`rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings`.** Remark
   prose corrected (P2 above); no mathematical claim was weakened.
3. **`ex-formal-frame-homotopy-behind-sphere-eversion`.** The statement and
   step 1.1 previously asserted that the two hemispherical framings "agree near
   the poles", which is not justified. They now describe the difference-class
   construction precisely (compare over the two contractible hemispheres, glue
   along the equatorial collar, the transition data enter as a loop of frames)
   and keep the same conclusion: the resulting map
   $F:S^2\to V_2(\mathbb R^3)\cong\mathrm{SO}(3)$ has the difference class,
   $S^2$ is simply connected so $F$ lifts through the quaternion double cover,
   and $\pi_2(S^3)=0$ kills the class.
4. Repairs carried from the first attempt and re-verified: the
   `lem-the-second-homotopy-group-of-so-three-vanishes` statement repair (the
   false $O(3)$ identification), the `lem-stiefel-manifolds-…` dependency
   removal and ZF choice note, and the P1 dependency re-routes.

## Cross-batch reconciliation (batch-17 DT-25 suppliers)

All eleven suppliers were read at their current revision and found to contain
the required claim with the required hypotheses; the consuming steps named
below use exactly that claim. The batch-18 input
`research/frontier-41-ha-dt-29-batch-18.cross-batch-dependencies.json` now
carries 30 `verified` rows (1 page + 29 item edges).

| supplier | consumers (consuming step) |
| --- | --- |
| `def-formal-immersion-between-smooth-manifolds` | `prop-euclidean-…` (1.1, 3.1); `lem-formal-immersions-of-the-circle-…` (2.1, 5.1); `lem-standard-and-reflected-…` (1.1); `ex-formal-frame-homotopy-…` (F7, 1.1); `thm-smale-classification-…` (1.1) |
| `def-space-of-immersions-and-space-of-formal-immersions` | `prop-euclidean-…` (3.1); `lem-formal-immersions-of-the-circle-…` (5.1); `lem-regular-homotopy-preserves-…` (F1, 2.1); `thm-smale-classification-…` (3.1); `thm-whitney-graustein-…` (2.1) |
| `def-weak-compact-open-smooth-topology-on-mapping-spaces` | `prop-euclidean-…` (2.1); `lem-regular-homotopy-preserves-…` (1.1) |
| `def-regular-homotopy-of-immersions` | `lem-regular-homotopy-…` (F1, 1.1); `thm-whitney-graustein-…` (1.1); `thm-sphere-eversion` (F4, 1.1); `rem-regular-homotopy-…`; `rem-sphere-eversion-cannot-…` (F2); `cex-a-homotopy-through-maps-with-a-rank-drop-…` (F1, 2.1) |
| `def-derivative-map-from-immersions-to-formal-immersions` | `lem-regular-homotopy-…` (F3, 2.1) |
| `lem-the-derivative-map-is-continuous` | `lem-regular-homotopy-…` (F3, 2.1) |
| `lem-smooth-families-and-path-components-in-the-weak-topology` | `lem-regular-homotopy-…` (F4); `thm-whitney-graustein-…` (F4, via the corollary) |
| `thm-smale-hirsch-immersion-theorem` | `thm-whitney-graustein-…` (F4, 2.1); `thm-smale-classification-…` (F5, 2.1); `thm-sphere-eversion` (F2, 1.1) |
| `cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes` | `thm-whitney-graustein-…` (F4); `thm-smale-classification-…` (F5); `thm-sphere-eversion` (F2) |
| `lem-formal-immersion-gives-the-tangent-normal-bundle-identity` | `thm-smale-classification-…` (F6, 1.1) |
| `def-normal-bundle-of-a-formal-immersion` | `ex-a-boy-surface-…` (F4; the quotient line bundle of an immersion into $\mathbb R^3$) |

Mismatch checks performed: the definitions fix the weak compact-open $C^\infty$
topology (not the strong Whitney topology) and the fibrewise-injectivity
convention; `thm-smale-hirsch-immersion-theorem` is stated for $m<n$, and every
use here has positive codimension; the $\pi_0$ corollary requires compact $M$,
which $S^1$ and $S^2$ satisfy. No use relies on the equidimensional closed
case, on the virtual-normal existence criterion, or on the derivative-map
homotopy equivalence as an actual homotopy equivalence.

## Checks run (this dispatch, final state)

| command | result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts` on the 20 owned item paths | 16 checked, 0 failing (2 definitions + 2 proof-free remarks n/a) |
| `node tools/rendercheck.mjs` on the changed items and the two new pages | OK — YAML, math and diagrams parse |
| `node tools/proof-layout.mjs` on all 20 owned item paths (one command) | 20 items, 78 steps, 0 defects |
| `node tools/regen-contract-entries.mjs research/frontier-41-ha-dt-29-batch-18.proof-contracts.json <16 proof-bearing ids>` | regenerated 16, skipped 4 (n/a items) |
| `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-18.proof-contracts.json --strict` | 0 errors, 1 advisory warning (shotgun-bracket on the Boy-surface item's step 4.1) |
| `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-18.pages.json` | 20 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-18.pages.json` | 20 items, 0 errors |
| `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-18.coverage.json --require-destination` | 1 page, 29 results, 0 errors, 0 warnings |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (acyclic; no forward references, B-page dependencies or unresolved ids) |
| `node tools/depcheck.mjs` (whole library) | exit 1 run-wide (983 errors in other pairs); no error names any of the 20 owned items or the two owned pages |
| `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1 run-wide (4 errors in other pairs); no error names a batch-18 item; the manifest levels above are the computed levels |
| `node tools/step3-decisions.mjs record-item …` for all 20 items | 14 `accept`, 6 `repaired`, confidence 1, examined dependency IDs recorded |
| `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | all 20 owned items closed immediately after the decisions were recorded; several of them go stale again within minutes because live sibling writers (batch 17 directly, and batch 1/14 items deep in the Smale–Hirsch closure) keep rewriting files inside the transitive closures. The receipts are hash-bound to the bytes inspected; the Step-3 pre-gate recertification pass re-records them once the writers drain. |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | batch-18 rows updated to `verified`; the merged refresh currently fails on the batch-19 input file (`invalid review or consumer ownership`), which that pair's live writer owns |

## Additions and pages

- Authored the two library pages (both new files):
  `library/differential-topology/regular-homotopy-and-sphere-eversion.md`
  (15 A items, summary of the section-space translation, the two
  classifications and the eversion) and
  `library/differential-topology/regular-homotopy-and-sphere-eversion-examples.md`
  (the five B items, summary of the four tests plus Boy's surface).
- No new items were minted: every item consumed by this pair is either
  published or an existing in-run batch-17 draft. No scope change was made and
  no owner decision was overridden.

## Cross-batch and published concerns

1. **Forward dependency into this pair (not ours to repair).**
   `lem-embedded-bands-joining-two-framed-spheres-exist`, homed on batch-3
   `handle-cancellation-slides-and-elementary-moves` (order 533), declares a
   dep on this pair's
   `lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension`
   (order 567). `tools/content-policy.mjs` reports this as
   `batch-forward-dependency`. The consumer's page precedes this pair, so the
   consumer's owner must replace that dep with a published supplier of the
   Stiefel connectivity or prove the needed fact locally; this pair's item
   cannot move earlier (batch 17 precedes it). Confidence: confirmed by the
   tool, exact ids above.
2. **Batch-17 drafts are in flight.** The in-run suppliers used here are the
   current drafts of a live sibling dispatch. Their statements matched the uses
   when inspected, but the engine binds each consumer decision to the draft
   bytes, so any later edit automatically re-opens the affected consumer for
   owner re-decision. The exact supplier/consumer/step mapping is tabulated
   above for that reconciliation.
3. **Boy-surface source access.** The AMS PDF of Kusner (1987) is served behind
   a Cloudflare challenge in this environment; the item cites the same URL as
   the scaffold's fetch-stamped source and adds Karcher's Virtual Math Museum
   write-up (fetched and read this pass) and MathWorld for the displayed
   rational form. The closing of planar ends under inversion is stated in
   Karcher's write-up. No source was fabricated.
4. **P3/P4** (published citations outside the `requires` closure; the
   `spectra-and-stable-homotopy-groups` token) are bookkeeping findings for the
   plan, unchanged from the Step 3a review.

## Residual uncertainty and next action

- The Boy-surface example's closing at the two non-real punctures is proved in
  detail at the real puncture and stated in the same form at the other two; the
  sources state the closing itself. A reviewer who wants the $w_2,w_3$ algebra
  written out should request it in Step 5; the claim and its consumption point
  are recorded here.
- If the batch-17 retry replaces any supplier file, re-run the
  `record-item` step for its consumers after inspecting the final text.
- Because item receipts hash the full transitive dependency closure, any other
  live writer landing a file inside that closure (this pair's closures reach
  batch 17 and, through the Smale–Hirsch machinery, batch 1/14 items) re-opens
  the affected receipt. Re-record the affected items after the writers drain,
  before the Step-3 gate; no mathematical content changes as a result.
- The merged frontier ledger refresh is blocked by another pair's input file;
  retry `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
  once the batch-19 writer finishes.

## Handoff

Completed: all 20 owned item files and both owned library pages; 20 item
decisions recorded (14 accept, 6 repaired; all confidence 1 with examined
dependency IDs); the batch-18 proof contracts regenerated and strict-clean; the
cross-batch rows verified against the current batch-17 drafts. Checks actually
run are listed above. No new item suppliers were added; no sibling or published
item was edited; the only shared files touched are the batch-18 manifest,
contracts and cross-batch input, which belong to this pair's batch.
