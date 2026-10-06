# Step 3b authoring — `characteristic-numbers-and-cobordism-obstructions`

- Run `frontier-41-ha-dt-29`; role `alpha-high`; label
  `step3b-pair-characteristic-numbers-and-cobordism-obstructions-8ac712ecdee01bdf`.
- A page `characteristic-numbers-and-cobordism-obstructions` (order 553, batch 11,
  differential-topology); B page `characteristic-numbers-and-cobordism-obstructions-examples`
  (order 554, companion). Own only this pair; sibling rows in shared batch files preserved.
- Output of this report: authoring record, per-item checkpoints, supplier reconciliation,
  checks actually run, published concerns and open obligations.
- History: the first-wave dispatch `…-8f463ede695c9e79` authored all 21 item files and both
  pages before it failed (last engine author-check at 2026-10-06T01:42 local was red on
  `rendercheck` and `proof-contract`; its report checkpoint covered only items 1–7 and is
  superseded by this record). The current dispatch re-audited every authored item against its
  suppliers, repaired the choice/contract and dependency defects below, re-ran all four
  author checks (green), and recorded the 21 Step-3b item decisions.

## Owned IDs and final status (21/21 closed)

Authoring order = dispatch dependency order (level, then page order, then item ID).
Decision receipts: `research/frontier-41-ha-dt-29-step3b-review-<id>.json`.

| level | id | page | decision |
|---|---|---|---|
| 0 | lem-fundamental-class-of-a-product-of-closed-manifolds | A | repaired (deps) |
| 0 | lem-kronecker-pairing-is-multiplicative-under-cross-products | A | repaired (AC) |
| 0 | lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes | A | accept |
| 0 | rem-characteristic-class-constructions-and-normalizations-are-at-owned | A | accept |
| 0 | rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion | A | accept |
| 0 | thm-characteristic-numbers-are-cobordism-invariants | A | repaired (AC) |
| 0 | ex-stiefel-whitney-number-of-real-projective-space | B | repaired (AC) |
| 1 | cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds | A | repaired (AC) |
| 1 | lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas | A | repaired (AC) |
| 1 | ex-orientation-reversal-negates-pontryagin-numbers | B | repaired (AC) |
| 1 | ex-pontryagin-numbers-of-complex-projective-two-space | B | repaired (AC) |
| 2 | lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum | A | accept |
| 2 | lem-projective-space-products-have-triangular-characteristic-number-matrix | A | accept |
| 3 | lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse | A | accept |
| 3 | lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism | A | repaired (AC) |
| 3 | ex-characteristic-numbers-of-a-product | B | repaired (AC) |
| 4 | thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism | A | repaired (dep removal) |
| 5 | lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem | A | accept |
| 8 | prop-products-of-complex-projective-spaces-span-rational-oriented-bordism | A | accept |
| 9 | thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers | A | accept |
| 15 | thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism | A | accept |

No item or page was added, removed or renamed; the 17 A + 4 B inventory and the made claims of
design rows 1–15 and B1–B4 (`research/plan-differential-topology-track.md` L1048–1085) are
unchanged. No item is left escalated.

## Repairs performed in this dispatch (exact)

1. **Inherited-AC contract repair (10 items).** Ten items consumed suppliers whose own
   statements already assume AC (`def-stiefel-whitney-number-of-a-closed-manifold`,
   `def-pontryagin-number-of-a-closed-oriented-manifold`, `prop-boundaries-have-zero-stiefel-whitney-numbers`,
   `prop-oriented-boundaries-have-zero-pontryagin-numbers`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`,
   `cor-field-kunneth-isomorphism-for-homology-of-products`, and the in-run
   `lem-tangent-bundle-…`/`lem-projective-space-products-have-triangular-…`) without
   stating the inherited premise, which is the defect class the run's
   `frontier-41-ha-dt-29-ac-omega-contract-audit.md`/`…-batch-11-ac-and-at-support-audit.md`
   already repaired for 23 sibling statements. Following that owner-directed convention, the
   statements of `lem-kronecker-pairing-…`, `thm-characteristic-numbers-are-cobordism-invariants`,
   `cor-all-relevant-characteristic-numbers-vanish-…`, `lem-characteristic-numbers-of-products-…`,
   `ex-orientation-reversal-…`, `ex-pontryagin-numbers-of-complex-projective-two-space`,
   `ex-characteristic-numbers-of-a-product`, `lem-projective-space-products-are-linearly-independent-…`
   and `ex-stiefel-whitney-number-of-real-projective-space` now begin with an exact
   “Assume AC ([[def-axiom-of-choice]])” sentence naming the inheritance, and the first eight
   gained `def-axiom-of-choice` in `deps` (the ninth already had it). Proofs and claims are
   otherwise byte-unchanged; `lem-fundamental-class-…` was deliberately NOT given AC because it
   is choice-free.
2. **Unused-dependency cleanup (2 items).** `lem-fundamental-class-of-a-product-of-closed-manifolds`
   dropped `cor-field-kunneth-isomorphism-for-homology-of-products` and
   `def-kronecker-evaluation-pairing`, neither cited in any fact or numbered step, so the item
   stays choice-free. `thm-universal-pontryagin-thom-correspondence-…` dropped
   `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`, which no numbered step invokes and
   which was only a context pointer in [F2] (see §Suppliers).
3. **Manifest, strategy and contract alignment.** `research/frontier-41-ha-dt-29-batch-11.pages.json`
   statement copies, `deps` arrays and the choice sentences of the affected `strategy` fields were
   updated to the current item contracts; the single obsolete citation row
   (F2 → `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`) was removed from
   `research/frontier-41-ha-dt-29-batch-11.proof-contracts.json`.
4. **Step-3a scope decision refreshed** (review, `sufficient`; sha256 `7cdd130a135ecd…`), recording
   that the only scope-relevant changes are the inherited-AC premise sentences and the two
   unused-dependency removals.

## Per-item checkpoints (claim, route, dependencies, evidence)

- **lem-fundamental-class-of-a-product-of-closed-manifolds** — claim: `[M×N]=[M]×[N]` for
  closed oriented `M,N` under the product orientation, mod-two form for canonical orientations,
  componentwise compatibility. Route: pointwise characterization of the fundamental class,
  chain-level relative cross-product descent with explicit representative changes, chart
  reduction, and the model shuffle computation with `det=sgn(θ)`; F₂, disconnected, empty and
  zero-dimensional cases handled in step 3.1. Current deps: 11 published items, all
  choice-free where they matter (the F₂ supplier `prop-every-manifold-is-f-two-orientable-…`
  states its mod-two half is choice-free; `thm-top-homology-characterizes-…` states it needs no
  AC). Sources: Milnor–Stasheff printed pp. 96–99/Appendix A; Hatcher VBKT pp. 208–215.
- **lem-kronecker-pairing-is-multiplicative-under-cross-products** — claim:
  `⟨α×β,c×d⟩=⟨α,c⟩⟨β,d⟩` for the additive cross products. Route: representative computation
  through the shuffle inverse `T` and the homotopy `K` with `dK+Kd=TS−1`, `δJ=0` on cocycles,
  then evaluation on the single bidegree; convention comparison with the cup-based external
  product (now explicitly AC-inherited).
- **lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes** — claim: Euler
  sequence with middle term `(γ*)^⊕(n+1)`, metric splitting, `c=(1+x)^{n+1}`,
  `p=(1+x^2)^{n+1}`, `p_k[CP^{2k}]=C(2k+1,k)`, and `⟨x^n,[CP^n]⟩=1` (sign pinned locally by the
  Thom/excision/relative argument). AC stated and used exactly through the projective-bundle,
  Thom and splitting suppliers. Sources: Milnor–Stasheff §16.6 pp. 192–198; Freed Lecture 7
  pp. 55–62; Hatcher VBKT pp. 74–77, 88.
- **rem-characteristic-class-constructions-and-normalizations-are-at-owned** — seam remark;
  names the exact owned AT construction ids; no proof obligation; not a proof input.
- **rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion** —
  `proved_here:false` recorded remark with Wall's statement bound to the Milnor–Stasheff URL;
  non-load-bearing; `extcheck` clean.
- **thm-characteristic-numbers-are-cobordism-invariants** — claim: cobordant closed manifolds
  have equal SW numbers; oriented-cobordant closed oriented 4k-manifolds have equal Pontryagin
  numbers (and SW numbers). Route: boundary-vanishing propositions on `∂W`, componentwise
  additivity, the sign `−p_J[M₀]+p_J[M₁]=0`, degree-zero/empty cases.
- **ex-stiefel-whitney-number-of-real-projective-space** — claim:
  `w(TRP^n)=(1+x)^{n+1}`, `w^I[RP^n]=∏C(n+1,i_j) mod 2`, `w_n= n+1 mod 2`,
  `RP^{2k}` not null-cobordant, all numbers zero for `n=2^s−1`. Convention: `x` is the
  degree-one generator with `⟨x^n,[RP^n]⟩=1` (field duality). Open supplier note: the splitting
  `TRP^n⊕ε≅(n+1)γ` is justified inline as [F3] by the double-cover descent; there is no
  dedicated published item for it, flagged for Step 5 (not load-bearing removal possible
  without a new item).
- **cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds** — claim:
  null-cobordant ⟹ all relevant numbers vanish; contrapositive obstruction reading. Route:
  invariance theorem applied to `(M,∅)` plus the empty-sum convention.
- **lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas** —
  claim: `w(T(M×N))=w(TM)×w(TN)`; `p` integral identity over ℤ[1/2] with the two-torsion
  odd-Chern cross-term defect, integral for complex factors; partition expansions of both
  families of numbers. Sources: Milnor–Stasheff §16.5 pp. 189–192.
- **ex-orientation-reversal-negates-pontryagin-numbers** — claim: `p_J[−M]=−p_J[M]`, SW numbers
  unchanged; `p_1[−CP²]=−3`; the two orientations distinguished.
- **ex-pontryagin-numbers-of-complex-projective-two-space** — claim: `p(TCP²)=1+3x²`,
  `p_1[CP²]=3`, hence not an oriented boundary; supplies the degree-four normalization
  without assuming `Ω_4^{SO}` classification.
- **lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum** —
  claim: collapse of a normally embedded closed manifold gives `α(M,e)∈π_{n+r}(MO_r)`,
  stabilization-compatible, independent of tubular data/classifying map/embedding, additive and
  multiplicative; AC through the classifying map. Suppliers: published DT-16 collapse items and
  the batch-30 prespectrum definition.
- **lem-projective-space-products-have-triangular-characteristic-number-matrix** — claim: the
  ordinary Pontryagin-number matrix of the projective-space products is invertible over ℚ; the
  Newton power-sum comparison `B` is triangular with diagonal `(∏ m_d(J)!)∏(2j_a+1)`; degree-eight
  `A=(10 9;25 18)`, `B=(5 0;25 18)`. The statement is deliberately “invertible”, not “triangular”
  (the ordinary matrix need not be triangular).
- **lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse** —
  claim: the collapse maps are well-defined surjective homomorphisms; bordism invariance via the
  neat embedding of `W` with collar-constant straightening and the product-tubular collapse,
  plus the transverse-preimage surjectivity argument.
- **lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism** —
  claim: the `[P_J]` are independent in `Ω_{4k}^{SO}⊗ℚ`, `dim ≥ p(k)`. Route: additivity of the
  functionals, `Ac=0` with `A` invertible; explicitly no upper bound.
- **ex-characteristic-numbers-of-a-product** — claim: degree-eight matrix
  `(25 10;18 9)`, determinant 45; recomputed from `(1+x²)^5` and the product expansion.
- **thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism** — claim:
  `Ω_n^{O}≅π_n(MO)`, `Ω_n^{SO}≅π_n(MSO)` with the inverse described by transverse preimages;
  compatibility with ∪, × and null-cobordism; AC stated. Route: surjectivity from the realization
  lemma; injectivity by perturbing a common-level based homotopy transverse to the zero section
  and taking the neat preimage bordism; oriented case in `MSO`. Repair: the DT-17 dependency was
  removed as unused (see §Suppliers).
- **lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem** — claim:
  `⟨u_r⌣w̄^I(γ_r),α(M)⟩=w^I[M]`; `⟨u_r^+⌣p̄_J(γ_r^+),α(M)⟩=p_J[M]` via rational multiplicativity
  and injectivity of ℤ→ℚ; the separation statement is explicitly NOT proved here.
- **prop-products-of-complex-projective-spaces-span-rational-oriented-bordism** — claim: the
  `[P_J]` form a ℚ-basis of `Ω_{4k}^{SO}⊗ℚ` (polynomial algebra on `[CP^{2j}]`). Route:
  `(r−1)`-connectivity of `T_r`, rational Hurewicz at `c=r`, `i=n+r` with `r≥n+2`, transition
  isomorphisms in stable degrees, duality dimension count, `dim=p(k)` for `4|n` else 0.
- **thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers** — claim: equality in
  `Ω_n^{SO}⊗ℚ` iff all Pontryagin numbers agree; vanishing numbers ⟹ some positive multiple is a
  boundary; rational only.
- **thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism** — claim: cobordism iff all
  SW numbers agree (injectivity of `Ω_n^O→∏ℱ₂`); AC stated. Route: detector coordinates are
  polynomials in normal classes, inverse substitution rewrites them in tangent numbers, vanish +
  injectivity of the batch-30 stable detector gives `α(M)=0`.

## Suppliers and cross-batch reconciliation

`research/frontier-41-ha-dt-29-batch-11.cross-batch-dependencies.json` was updated (15 rows;
validated for ownership, vocabulary and duplicates):

- **Batch-30 (`thom-spectra-and-unoriented-bordism-detection`), 11 item rows + 1 page row:
  `verified`.** Each current supplier item was re-read against the exact use:
  `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` (receipt `repaired`),
  `lem-rationalization-is-exact-and-commutes-with-singular-homology` (`accept`),
  `thm-rational-hurewicz-for-highly-connected-cw-complexes` (`accept`),
  `lem-oriented-grassmannian-has-two-lifted-schubert-cells` (`accept`),
  `lem-stable-thom-cohomology-is-degreewise-eventually-constant` (`accept`),
  `def-finite-thom-classifying-detector-map` (`accept`),
  `thm-stable-unoriented-thom-homotopy-is-injectively-detected` (`repaired`). The page is ordered
  548.5 before 553 and all 59 of its items carry Step-3b receipts. This is a consumer-side
  interface check, not an independent mathematical audit.
- **Batch-2 (`intersection-pairings-…`) page row: `verified`.** All batch-2 items are authored and
  decided; re-checked that no DT-19 item consumes a batch-2 item, so the declared page
  prerequisite is a reader-level ordering requirement only.
- **Batch-9 (`pontryagin-thom-and-framed-cobordism`): item row `removed`, page row `open`.**
  Flagged supplier: `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`; former consumer
  `thm-universal-pontryagin-thom-correspondence-…`. After re-reading the consumer, no numbered
  step (1.1–4.1) uses that definition; the single appearance was the [F2] pointer, now deleted
  together with the dep, on the same day the consumer's decision was recorded. The step this
  pair actually needs (a bordism gives a homotopy of collapse maps) is proved locally in
  `lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse` step 2.1.
  The batch-9 pair remains unfinished (22/25 item files, 0 Step-3b decisions, no author-check
  artifact), and the DT-19 page keeps `pontryagin-thom-and-framed-cobordism` verbatim in its
  plan `requires`; that page edge stays `open` until batch 9 closes. Because no DT-19 item
  consumes a batch-9 item, no consumer decision is escalated.

## Checks actually run (this dispatch)

| check | command | result |
|---|---|---|
| author-check (4 gates) | `node tools/tsx-run.mjs tools/author-check.mts frontier-41-ha-dt-29 11` | ok: `precheck` PASS (19 checked / 0 failing; 2 remarks are `n/a`), `rendercheck` OK on 23 files, `content-policy-items` 21 items 0/0, `proof-contract --strict` 0 errors (1 pre-existing shotgun-bracket warning) |
| explicit item paths | `precheck.mts` on the 21 item paths | 19 checked, 0 failing — all clean |
| explicit rendering | `rendercheck.mjs` on 21 items + 2 pages | OK — no wikilink-in-math, no delimiter defects, all KaTeX/YAML parse |
| proof layout | `node tools/proof-layout.mjs` on the 11 changed item paths | 11 items, 45 steps, 0 defects |
| content policy | `content-policy.mjs research/frontier-41-ha-dt-29-batch-11.pages.json` | 21 scoped items, 0 errors, 0 warnings |
| manifest deps | `manifest-deps.mjs research/frontier-41-ha-dt-29-batch-11.pages.json` | 21 items, 0 errors |
| plan | `validate-plan.mjs research/plan-spec.json` | page order acyclic; no item cycle/forward/B-page dependency/unresolved id |
| dependency levels | `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | **no batch-11 finding**; the 11 remaining run-wide findings are in other, unfinished pairs (unrelated) |
| item decisions | `step3-decisions.mjs check --run … --phase final` | the 21 batch-11 items are all closed (run-wide `closed:false` only because other pairs are unfinished) |
| scope decision | `step3-decisions.mjs record-scope` (review, `sufficient`) | current; sha256 `7cdd130a135ecd…` |
| cross-batch input | row validation (ownership, vocabulary, duplicates) | 15/15 rows valid |
| coverage | `coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-11.coverage.json --require-destination` | 2 pages, 50 harvested rows, 0 errors, 1 expected `coverage-low-yield` warning |

(Note: `content-policy.mjs --manifest-only` on an authored batch now reports
`batch-item-already-exists` for every item; the same is true for finished sibling batches such as
20, so this is the expected scaffold-stage check becoming inapplicable, not a defect. The Step-3b
gates use item mode, which passes.)

## Step 3a item notes, pre-splice findings and downstream effects

- **Leftover strategy directive (removed).** The Step 3a review flagged a stray
  “Keep the current statement of …” authoring directive at the head of the manifest strategy of
  `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`. It was removed 2026-10-06 so
  the strategy now begins with the mathematical route; the item content is unchanged and its
  decision was re-recorded against the new manifest row (sha256 `94a9ce8265b402…`).
- **Elliptical B1 parenthetical (already resolved).** `ex-stiefel-whitney-number-of-real-projective-space`
  now carries a complete strategy and verification; no ellipsis remains (grep over the manifest and
  item finds none).
- **Stale coverage prose (refreshed).** Twelve `owner-decision` coverage rows still said the
  detection/spanning inputs were “not published / escalated / cannot close”. Each received a dated
  Step-3b amendment naming the current supplier: the owner-approved batch-30 items
  (`thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free`,
  `lem-metastable-cohomology-of-eilenberg-maclane-spaces`,
  `thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra`,
  `thm-bo-bso-cohomology-away-from-two`,
  `thm-rational-hurewicz-for-highly-connected-cw-complexes`) and the now-authored DT-19 items
  (`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
  `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`,
  `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`). The Milnor–Stasheff Theorem 18.8
  rank/finiteness row keeps its deferral because that claim remains deliberately unclaimed.
  `coverage-checklist … --require-destination` still reports 0 errors (the single
  `coverage-low-yield` warning is the expected, pre-recorded one).
- **Plan-conformance (no edit made).** The DT-19 plan `requires` array omits
  `hurewicz-whitehead-freudenthal-and-cw-approximation` and `the-serre-spectral-sequence-and-applications`;
  both are published pages, and the rational-Hurewicz input this pair uses is supplied in-run by batch
  30, so this is a plan-conformance note for Step 4/owner, not an unmet prerequisite.
- **Downstream consumers unblocked.** As of the final `step3-decisions check`, the batch-12
  (signature-theorem) items `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` and
  `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` hold `escalate` receipts
  recorded while the batch-11 suppliers named above were still undecided; those batch-11 items are now
  decided, so the escalations are reconcilable — but they are owner-held (review receipts cannot
  overwrite an escalation) and were not resolvable by this dispatch. Batch-12 item
  `lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two` needs a current audit.
  Remedy: batch-12 writer re-audits after my pair's decisions, owner clears the two escalations.

## Published concerns and open obligations

1. **Batch-9 page prerequisite.** `pontryagin-thom-and-framed-cobordism` is an unfinished in-run
   page (22/25 item files, 0 decisions). It remains a declared DT-19 page prerequisite; its
   cross-batch row is `open`. Remedy: batch-9 author completes the pair; the Step-8 serial lead
   reconciles the row. No DT-19 mathematical claim depends on it.
2. **Unpublished tangent-splitting fact on the B page.** `ex-stiefel-whitney-number-of-real-projective-space`
   [F3] states and justifies `TRP^n⊕ε≅(n+1)γ` inline (double-cover descent). There is no
   dedicated published item for it; if Step 5 requires an exact supplier instead of a locally
   justified fact, the fix is to promote it to a local lemma on the assigned A page — not done
   here because it is not in the approved A-page inventory.
3. **Run-wide ledger refresh blocker (cross-group, not mine to edit).**
   `tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` currently fails with
   `frontier-41-ha-dt-29-batch-19.cross-batch-dependencies.json: invalid review or consumer
   ownership`. Cause read from the file: 7 rows use status `available` and 1 row uses
   `reconciled`, while the tool accepts only `open`, `verified`, `removed`
   (`tools/frontier-dependency-ledger.mjs` line ~72). Remedy: the batch-19 writer retags those 8
   rows. This blocks the whole-run `frontier-dependency-ledger … --require-reviewed` stage gate,
   not the batch-11 content gates.
4. **Owner-held Step-1 readiness records (pre-existing).** `…-batch-11-ac-and-at-support-audit.md`
   records three stale owner-held Step-1 records (`prop-products-of-complex-projective-spaces-span-…`,
   `thm-rational-oriented-bordism-is-detected-…`, `thm-thom-stiefel-whitney-number-detection-…`).
   They are owner-held; this dispatch did not rewrite them (its Step-3b decisions above are the
   author-stage receipts).
5. **Plan observation for Step 4 (no edit made).** The DT-19 `requires` array keeps
   `intersection-pairings-self-intersection-and-euler-classes` and
   `pontryagin-thom-and-framed-cobordism` although no authored DT-19 item now consumes an item of
   either page; the batch-11 cross-batch rows record this (`verified` with no item-level use, and
   `removed` + `open`, respectively). If the plan is to drop them, that is an owner/Step-4
   amendment; nothing is hidden here.
6. **Published-unaudited evidence class.** The batch-11 Step-1 notes §6 record 35 published
   in-closure items without an `audited`/`verified` marker (load-bearing DT-15/DT-16 items). That
   is a publication-evidence gap, unchanged and not a mathematical defect; owner remedy only.
7. No shared-ledger entry, judge/audit stamp, sibling file or published item was edited by this
   dispatch.

## Next action

Step 3 item decisions for this pair are complete; the pair is covered. Remaining run-level
actions: batch 9 closes (page edge), batch 19 retags its cross-batch statuses (ledger gate), and
the three owner-held Step-1 records are refreshed by the owner. Step 5 should independently audit
the AC-inheritance sentences added here and the B-page tangent-splitting fact (item 3 above).
