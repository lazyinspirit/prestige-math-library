# Step 3b — pair audit and authoring: `the-hopf-degree-theorem` / `the-hopf-degree-theorem-examples`

- **Run:** frontier-41-ha-dt-29 (role `alpha-high`, dispatch `step3b-pair-the-hopf-degree-theorem-7fd85d6abca8c558`)
- **Pair:** A `the-hopf-degree-theorem` (order 551) / B `the-hopf-degree-theorem-examples` (order 552); batch 10 contains exactly this pair.
- **Owned IDs (25):** the 20 A-page items and 5 B-page items listed in the dispatch task, authored one at a time in ascending `dependency_level`, ties by page order and item ID.
- **Status at entry:** scaffold read; no owned item file exists yet.

## Entry obligations (open at start)

1. Author all 25 owned items and both page files; register them in the batch manifest, coverage, contracts.
2. Audit the scaffold for authoring readiness and repair local gaps only (hypotheses, sources, direct suppliers, proof route).
3. Flag every not-yet-authored in-run supplier with the exact supplier ID, consumer ID and consuming proof step; author the consumers anyway and leave those item decisions `escalate` until the supplier files exist and their actual use is verified.
4. Recheck the Step 3a findings F1 (RP^n top-cell quotient/pinch for general n) and F2 (smooth pinch model of a disk with one regular preimage) against the current inputs and discharge them.
5. Run explicit-path `precheck`, `rendercheck`, `content-policy`, strict `proof-contract`, `item-dependency-levels` and `validate-plan`; final `proof-layout` on all changed item paths in one command.
6. Checkpoint each item's claim, dependencies, sources, decisions, checks, open gaps in this file.

## Direct in-run prerequisite pair (inspect, may be unfinished)

`pontryagin-thom-and-framed-cobordism` (batch 9, order 549/550). At entry the pair's item files do not exist; all ten DT-17 supplier items consumed by this pair are unauthored (see the flag table below). The pair's own manifest (batch-9 `pages.json`) is present and was read; its scaffold statements are the provisional supplier statements.

### Flagged unfinished in-run suppliers (supplier → consumer → consuming proof step)

Filled in as each consumer is authored; kept current at each checkpoint.

| Supplier (batch 9 item, no file at entry) | Consumer (this pair) | Consuming step |
| --- | --- | --- |
| `def-framing-of-a-normal-bundle` | `def-framing-sign-of-a-zero-dimensional-regular-preimage` | 1.1–1.3 |
| `def-framed-regular-preimage-of-a-map-to-a-sphere` | `def-framing-sign-of-a-zero-dimensional-regular-preimage` | 1.1–1.3 |
| `lem-positively-oriented-bases-are-path-connected` | `def-frame-bundle-of-a-smooth-manifold` | 1.4 |
| `lem-positively-oriented-bases-are-path-connected` | `lem-components-of-the-frame-bundle-of-a-connected-manifold` | 1.3 |
| `def-framed-cobordism-of-embedded-submanifolds` | `lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism` | 1.1–2.1 |
| `def-framed-cobordism-of-embedded-submanifolds` + `def-framing-of-a-normal-bundle` | `lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant` | 1.1–2.1 |
| `def-framed-cobordism-of-embedded-submanifolds` + `lem-framed-cobordism-is-an-equivalence-relation` | `lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs` | 1.1–3.1 |
| `def-framed-regular-preimage-of-a-map-to-a-sphere` | `lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree` | 1.1–2.1 |
| `def-framed-cobordism-of-embedded-submanifolds` + `def-framing-of-a-normal-bundle` | `lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism` | 1.1–3.1 |
| `def-framed-cobordism-of-embedded-submanifolds` + `lem-framed-cobordism-is-an-equivalence-relation` | `thm-unoriented-zero-dimensional-bordism-is-mod-two` | 1.1–3.1 |
| `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map` + `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps` + `def-pontryagin-thom-map-of-a-framed-submanifold` + `def-framed-regular-preimage-of-a-map-to-a-sphere` + `def-framed-cobordism-of-embedded-submanifolds` | `lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps` | 1.1–2.1 |
| `def-framed-regular-preimage-of-a-map-to-a-sphere` + `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages` + `lem-regular-value-choice-does-not-change-the-framed-cobordism-class` | `lem-mod-two-degree-is-well-defined-and-homotopy-invariant` | 1.1–3.2 |
| `def-framed-cobordism-of-embedded-submanifolds` + `lem-framed-cobordism-is-an-equivalence-relation` | `thm-oriented-zero-dimensional-framed-bordism-is-the-integers` | 2.1–3.1 |

### Reconciliation of the flagged suppliers (updated 2026-10-06)

All ten DT-17 item files were authored by the owning pair while this pair was being written, and
each was read against the consuming steps recorded above: `def-framing-of-a-normal-bundle`,
`def-framed-cobordism-of-embedded-submanifolds`, `def-framed-regular-preimage-of-a-map-to-a-sphere`,
`def-pontryagin-thom-map-of-a-framed-submanifold`,
`lem-framed-cobordism-is-an-equivalence-relation`,
`lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps`,
`lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map`,
`lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`,
`lem-regular-value-choice-does-not-change-the-framed-cobordism-class`,
`lem-positively-oriented-bases-are-path-connected`. Each statement supplies exactly the claim its
consuming step uses. The DT-17 definition of framed cobordism demands *product* end collars
`W ∩ (X×[0,ε)) = N₀×[0,ε)`, `W ∩ (X×(1−ε,1]) = N₁×(1−ε,1]` with the framing the pullback of the
endpoint framings; the three cobordism constructions of this pair were repaired to that
convention and re-verified: `lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant`
(path reparametrized constant near the ends, graph arc with vertical product ends),
`lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs` (explicit staple with vertical
legs and quarter-turn framing; the model pair has an empty top end), and
`lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism` (common width `ε = min(ε_N, ε_L)`).
The batch-10 cross-batch rows for these edges were updated to `verified` for the item edges, with
the interface check and its date recorded in the evidence field; the *page* edge to
`pontryagin-thom-and-framed-cobordism` stays `open` because that pair's page files and its own
Step-3 receipts do not exist yet. Proof completeness of the suppliers is their pair's own
Step-3/Step-5 obligation; what is certified here is the exact use.

## Step 3a findings F1/F2 — disposition

The Step 3a review recorded two unmet prerequisites: **F1** the general top-cell quotient
$\mathbb{RP}^n/\mathbb{RP}^{n-1}\cong S^n$ with a one-point regular fibre, and **F2** a smooth
collapse (pinch) model $D^m\to S^m$ with the collapsed centre a regular value of one preimage.
Its recommended actions were (i) author a small enrichment item, or (ii) prove both facts inline
and name them in the strategies.

**Decision: remedy (ii), inline proofs, no new item on the pages.** Reasons, recorded honestly:
an added item changes the pair's `scopeHash`; `tools/step3-decisions.mjs` then refuses every
item receipt for the pair (`Step 3a must clear for the item pair before item auditing`) until the
auditor scope certification is regenerated at the 3b gate, and only the owner can re-record a
scope decision. Remedy (ii) is explicitly permitted by the 3a review, keeps the audited scope
unchanged, and the two facts are elementary and are proved completely and explicitly in
`lem-every-integer-degree-is-realized-by-a-map-to-the-sphere` (F2, with the flat pinch formula
and its derivative computation) and in
`ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even` (F1). The
strategies of all four consuming items (`lem-every-integer-degree-is-realized-by-a-map-to-the-sphere`,
`ex-collapse-of-k-oriented-disks-realizes-degree-k`,
`thm-hopf-mod-two-degree-classification-for-nonorientable-domains`,
`ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even`) were updated in
the batch manifest to name the inline proofs. Exact locators: Freed, Lecture 2, printed pp. 22–24
(collapse construction (2.34) before Theorem 2.35; Theorem 2.37); Milnor, Ch. 7–8, printed
pp. 42–51; GP Ch. 3 §6, printed pp. 141–147.

## Checkpoints

All 25 items were authored, checked and recorded `accept` (confidence 1) with explicit dependency
lists; the `sha` is the receipt hash prefix from `tools/step3-decisions.mjs`. Levels are the
recorded/computed `dependency_level` values; the `item-dependency-levels` check reports no error
for any of them.

- **def-mod-two-degree-of-a-map-to-a-sphere** (level 0, accept `fb64e89462bd`). Claim: `deg₂` of a
  smooth map of a closed smooth `m`-manifold to `Sᵐ` is the parity of a regular fibre, empty fibre
  `0`. The finiteness of regular fibres is proved inline (open-cover argument replacing an earlier
  discrete-subset dependency); `AC_ω` enters only through Sard and the `justified_by` lemma
  `lem-mod-two-degree-is-well-defined-and-homotopy-invariant`. No open gaps.
- **lem-every-integer-degree-is-realized-by-a-map-to-the-sphere** (level 0, accept `18a80528819b`).
  Claim: every `k ∈ ℤ` is `deg` of a smooth map `M→Sᵐ`. Constructive: explicit smooth pinch model
  `F` (`F⁻¹(y₋)={0}`, `dF₀` invertible, `F=N` off the unit ball, flat at the boundary), glued
  through `|k|` disjoint charts; `k=0` is the empty family. Discharges Step-3a F2 inline. No open
  gaps.
- **def-frame-bundle-of-a-smooth-manifold** (level 1, accept `bffe6a6e6503`). Claim: `B(M)=Fr(TM)`
  with smooth structure, `GL_m(ℝ)` action, tautological torsor fibres, the two-component statement
  for a fibre, and the framing/sign dictionary for 0-dimensional submanifolds. No open gaps.
- **ex-collapse-of-k-oriented-disks-realizes-degree-k** (level 1, accept `9139724946c1`). Claim:
  collapsing `|k|` oriented disks in a closed connected oriented `M` realises degree `k`; step 2.1
  computes `deg = sgn(dF₀)·Σ εᵢ = k` and covers `k=0`. No open gaps.
- **def-framing-sign-of-a-zero-dimensional-regular-preimage** (level 2, accept `c2481f077b30`).
  Claim: framing sign `ε(x)` and signed count `Φ(N,φ)` for closed framed 0-manifolds; the sign of
  the DT-17 induced framing `f_*b` equals `sgn(df_x)`. DT-17 interface reconciled (supplier files
  read 2026-10-06). No open gaps.
- **lem-components-of-the-frame-bundle-of-a-connected-manifold** (level 2, accept `dc4d2911773e`).
  Claim: `B(M)` has two components for connected orientable `M` and is connected for nonorientable
  `M`, with smooth paths inside components. Uses DT-17 `lem-positively-oriented-bases-are-path-connected`
  for the `GL_m⁺(ℝ)`-torsor fibres (read; statement matches). No open gaps.
- **lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism** (level 2, accept `e753bd1049f2`).
  Claim: framed cobordism is compatible with disjoint union; product ends combine at common width
  `ε=min(ε_N,ε_L)`; hence a commutative monoid and additivity of signed count and parity. Repaired
  to the product-collar convention and re-verified. No open gaps.
- **lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant** (level 2, accept
  `3f73e23b388b`). Claim: a smooth path in `B(M)` yields a framed cobordism between its endpoints.
  Constructive: graph arc `{(x(λ(t)),t)}` with `λ` constant near the ends, so the ends are exact
  product collars with framing the path of frames. Repair verified against the DT-17 definition. No
  open gaps.
- **lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs** (level 3, accept
  `1fbba864c9c3`). Claim: two points in a chart ball with opposite chart framings are framed
  null-cobordant by a cobordism supported in the ball. Constructive explicit staple with vertical
  legs and quarter-turn framing; step 2.1 records the empty top end. No open gaps.
- **lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree** (level 3, accept
  `4c1dd8afbcc6`). Claim: the signed count of the DT-17 framed regular preimage equals the
  compact-support degree, with `ε(x)=sgn(df_x)`. Supplier definition read; no open gaps.
- **lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism** (level 4, accept
  `1baf204d4a7c`). Claim: signed count is a framed-cobordism invariant (`−Σ₀+Σ₁=0` from the oriented
  boundary count of a compact oriented 1-manifold); two same-sign points are not framed
  null-cobordant, an opposite-sign pair in a chart ball is. No open gaps.
- **thm-unoriented-zero-dimensional-bordism-is-mod-two** (level 4, accept `3871c171c747`). Claim:
  in closed connected nonorientable `M`, parity is a bijection from framed cobordism classes to
  ℤ/2, additive, with null-cobordism iff even; no orientation used. Uses frame-bundle connectivity,
  the cancellation staple and DT-17 transitivity (read). No open gaps.
- **lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps** (level 5, accept
  `af038181f117`). Claim: framed cobordant regular preimages give smoothly homotopic maps.
  Concatenation of the three DT-17 homotopies with interval reparametrization; suppliers
  `lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map`,
  `lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps` and
  `def-pontryagin-thom-map-of-a-framed-submanifold` read; statements match steps 1.1–2.1. No open gaps.
- **lem-mod-two-degree-is-well-defined-and-homotopy-invariant** (level 5, accept `fb64e89462bd`).
  Claim: `deg₂` is independent of regular value and positive basis, homotopy invariant, and congruent
  to the integer degree mod 2 on oriented `M`. Uses DT-17
  `lem-regular-value-choice-does-not-change-the-framed-cobordism-class` and
  `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages` (read). No open
  gaps.
- **thm-oriented-zero-dimensional-framed-bordism-is-the-integers** (level 5, accept `20b961be8ae6`).
  Claim: in closed connected oriented `M` the signed count is a bijection onto ℤ, additive, with
  null-cobordism iff `Φ=0`. Uses DT-17 equivalence relation (read) and the cancellation staple. No
  open gaps.
- **thm-hopf-degree-classification-for-oriented-domains** (level 6, accept `1b3aad4c8fe5`). Claim:
  for closed connected oriented `Mᵐ`, smooth maps are homotopic iff equal degree, every integer is
  realised, and degree classifies `[M,Sᵐ]`. Converse via the framed-cobordism classification and
  DT-17 inverse Pontryagin–Thom lemma (read). No open gaps.
- **thm-hopf-mod-two-degree-classification-for-nonorientable-domains** (level 6, accept
  `b88859d36792`). Claim: for closed connected nonorientable `Mᵐ`, `deg₂` is a complete invariant
  with both values realised (constant map and pinch). No orientation used. No open gaps.
- **cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree** (level 7, accept
  `a7fab586db10`). Claim: the `M=Sᵐ` specialization; `Sᵐ` verified closed, connected, oriented. No
  open gaps.
- **rem-closedness-is-needed-for-hopf-degree-classification** (level 7, accept `ff2206e94bae`).
  Remark, no proof section (`provenance.proof: not-applicable`): closedness is load-bearing; relative,
  noncompact and compact-support variants need their own hypotheses. No open gaps.
- **rem-connectedness-is-needed-for-a-single-degree-invariant** (level 7, accept `e37ff4da62fc`).
  Remark, no proof section: connectedness is load-bearing in both classifications; points to the
  companion counterexample. No open gaps.
- **ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even** (level 7, accept
  `6f74d0036070`). Claim: for even `n≥2`, `RPⁿ` is closed connected nonorientable and the collapse
  map has `deg₂=1`, so `[RPⁿ,Sⁿ] ≅ ℤ/2`. Discharges Step-3a F1 inline: general top-cell quotient
  `RPⁿ/RPⁿ⁻¹ ≅ Sⁿ` and the smooth model descent to the quotient, with one-point regular fibre. No
  open gaps.
- **cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one**
  (level 8, accept `02042d9a5bf8`). Claim: self-map of `Sᵐ` is a homotopy equivalence iff
  `|deg|=1`; multiplicativity, sphere classification, reflection. Final-step references corrected
  (steps 1.2/1.3). No open gaps.
- **cex-equal-total-degree-does-not-classify-maps-from-a-disconnected-domain-componentwise** (level
  8, accept `81da57241d3b`). Counterexample: `id ⊔ c` and `c ⊔ id` on `Sᵐ ⊔ Sᵐ` have total degree 1
  yet are not homotopic. Repaired 2026-10-06: [F2] now also cites published
  `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition`, so the restriction of a
  *continuous* homotopy between sphere self-maps is covered by continuous-homotopy invariance;
  dependency synced in the manifest and the contract citation row added. No open gaps.
- **ex-power-maps-on-the-circle-have-their-exponent-as-degree** (level 8, accept `c41f0508c236`).
  Claim: `deg(z^k)=k`, exponent determines the homotopy class; matches the covering-space
  translation number. No open gaps.
- **ex-reflection-of-a-sphere-has-degree-minus-one** (level 9, accept `956532e941b1`). Claim: the
  coordinate reflection is an orientation-reversing diffeomorphism of degree `−1`, representing the
  `−1` class. No open gaps.

## Checks actually run (final battery, 2026-10-06)

- `node tools/tsx-run.mjs tools/precheck.mts <all 25 owned item paths>` — 20 proof-bearing items
  PASS; the five definitions/remarks have no proof section; 0 failing.
- `node tools/rendercheck.mjs <25 items> library/differential-topology/the-hopf-degree-theorem.md
  library/differential-topology/the-hopf-degree-theorem-examples.md` — OK, 27 files.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-10.proof-contracts.json --strict`
  — 0 errors, 25/25 items, 181 citations (one added for the counterexample repair).
- `node tools/boundary-audit.mjs research/frontier-41-ha-dt-29-batch-10.proof-contracts.json
  --fail-on-contradicted --fail-on-template` — exit 0; 200 boundary rows (eight per item), no
  template clusters, no contradicted dispositions. All 200 rows were re-anchored to the current
  proof step numbers; 24 stale step references were repaired.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-10.pages.json` — 25 items, 0
  normalized, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` — no error names any of
  the 25 owned items; all recorded levels equal the computed ones (0,0,1,1,2,2,2,2,3,3,4,4,5,5,5,
  6,6,7,7,7,7,8,8,8,9).
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-10.pages.json` — 25 scoped
  items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0 (acyclic, no forward references
  among pages with item lists).
- `node tools/proof-layout.mjs <all 25 owned item paths>` — one batched run after the final edits:
  25 items, 69 steps, 0 defects.
- `node tools/step3-decisions.mjs record-item … --decision accept --confidence 1` for each of the 25
  items, with explicit examined dependency lists (receipt hashes above); the final-phase check
  returns no work row for this pair (accepted 275/899 overall, the rest belonging to other pairs
  still in flight).

## Open obligations and cross-pair concerns (for the serial reconciler)

1. **DT-17 page files and receipts pending.** All ten DT-17 item files exist and were read, but
   `library/differential-topology/pontryagin-thom-and-framed-cobordism.md` and its companion do not
   exist yet and no DT-17 item receipt is recorded. If any DT-17 statement changes, the 25 receipt
   hashes above invalidate mechanically and this pair re-enters authoring. The batch-10 page edge
   stays `open`; all 29 declared item edges have review rows and are `verified` for the interface
   check only (the five rows for the `def-framing-of-a-normal-bundle` and
   `def-framed-regular-preimage-of-a-map-to-a-sphere` edges were added once the stale unified
   ledger showed them declared without reviews).
2. **Cross-batch ledger refresh blocked by batch 19 (cross-group, exact remedy).**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` fails with
   `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer
   ownership`. Eight rows in that input use non-schema statuses (`available`, `reconciled`) where
   the tool admits only `open`, `verified`, `removed`: consumers
   `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`,
   `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`
   (two rows), `def-primary-double-point-obstruction-to-removing-self-intersections`,
   `rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings`,
   `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`
   (three rows). The owning author must rewrite those statuses; only then does the unified ledger
   refresh for this run. My batch-10 input is updated and valid.
3. **Sibling dependency-level errors.** `item-dependency-levels check` reports 51 errors, none for
   this pair (e.g. Morse-trajectory, fixed-point-index and Eilenberg–Watts items). Suspicion only
   from this pair's perspective; those are their authors' records to refresh.
4. **Step-3a overlaps (a)–(d)** recorded in `…-step3a-pair-…` §5 remain owner reconciliation only;
   nothing in this pair's authoring depended on them. The GP source-register entry omission (§7) is
   unchanged and still stale-only. The GP Extension Theorem remains an owner-held deferral and the
   closedness remark explicitly disclaims it, so it is not consumed here.
