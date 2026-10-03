# Step 3b — pair author/auditor report: `the-bgg-resolution`

- Run: `frontier-38-owner-30`, stage `3b-author`, dispatch label
  `step3b-pair-the-bgg-resolution-481003b6665f66a2`.
- A page: `the-bgg-resolution` (batch 8, order 510.011, lie-theory, 30 items).
- B page: `the-bgg-resolution-examples` (batch 8, order 510.012, 5 items).
- Date opened: 2026-10-03.  Status: **complete** (all 35 items and both pages authored and gate-clean; see the handoff sections at the end).

## Owned IDs (35)

A (`the-bgg-resolution`): `lem-positive-root-pairings-of-a-dominant-integral-weight`,
`lem-bruhat-covers-are-reflection-covers`, `def-bgg-bruhat-verma-sum-in-degree-k`,
`lem-dominant-integral-dot-translates-embed-in-the-verma-module`,
`lem-bruhat-covers-give-unique-verma-embeddings`, `lem-bruhat-rank-two-intervals-are-diamonds`,
`def-verma-type-of-a-module-with-a-standard-filtration`,
`lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights`,
`lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types`,
`lem-central-character-cuts-of-a-typed-module-are-typed`,
`lem-weight-subsets-with-equal-root-sums-are-unique`,
`def-standard-induced-resolution-of-the-trivial-module`,
`thm-standard-induced-resolution-is-exact`, `lem-compatible-signs-exist-on-the-bruhat-graph`,
`def-bgg-differential-from-signed-verma-maps`, `prop-the-bgg-differential-squares-to-zero`,
`lem-the-bgg-augmentation-has-image-the-simple-module`,
`lem-weak-bgg-base-case-for-the-trivial-module`, `thm-weak-bgg-resolution`,
`lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules`,
`lem-jordan-holder-factors-of-verma-modules-lie-above-the-head`,
`lem-kernel-generators-for-the-weak-bgg-complex`,
`lem-nonzero-highest-weight-images-survive-modulo-n-minus`,
`lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential`,
`lem-verma-filtered-objects-are-acyclic-for-n-minus-coinvariants`,
`lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution`,
`lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term`,
`thm-bgg-resolution-of-a-finite-dimensional-simple-module`,
`cor-bgg-euler-character-identity`, `cor-bgg-resolution-has-length-the-number-of-positive-roots`.

B (`the-bgg-resolution-examples`): `ex-the-sl2-bgg-resolution`,
`ex-the-a2-bgg-resolution-with-six-verma-summands`, `ex-sign-cancellation-in-an-a2-bruhat-diamond`,
`cex-unsigned-bruhat-edge-sums-need-not-square-to-zero`,
`cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight`.

Also to write: `library/lie-theory/the-bgg-resolution.md`,
`library/lie-theory/the-bgg-resolution-examples.md`,
`research/frontier-38-owner-30-batch-8.proof-contracts.json`.

## Open obligations carried into authoring (from Step 1/3a and batch notes)

1. **Diamond upper bound (was the main risk).** The scaffold's recorded proof route
   (delete one of two omitted letters of a reduced word and use parity) is *defective*:
   the word produced by one deletion need not be reduced, so it does not represent the
   claimed intermediate element (concrete counterexample: `v = s_1s_2s_1s_3s_2s_1`,
   `u = s_1s_3s_2s_1` after deleting positions 0,1; deleting only position 1 gives the
   word `s_1s_1s_3s_2s_1`, whose product has length 3 < 4). Decision: the item keeps the
   same mathematical claim and is proved by a complete induction using the proved
   lifting property of `def-bruhat-order-on-a-finite-weyl-group` (steps 2.1/3.1) plus the
   descent-compatibility corollary derived from it. The manifest statement is unchanged;
   only the false proof-route sketch is not reproduced.
2. **Compatible signs.** `lem-compatible-signs-exist-on-the-bruhat-graph` states existence
   of a `±1` signing with product `-1` on every square. The published statements
   (Zhou Part I p. 10; Hemelsoet–Voorhaar Prop. 2.3 and Sec. 4.2; Rocha-Caridi Lemma 10.4)
   are the load-bearing input; the local consequence (opposite path products) is proved
   from the diamond lemma. Status: cited published existence statement; a fully
   reproduced construction remains an open obligation recorded for Steps 5–7.
3. **Standard complex exactness.** The manifest route (PBW filtration + Koszul contraction)
   is to be proved locally; Van Ekeren's split-case argument identifies the complex with the
   Chevalley–Eilenberg complex of `n^-` with coefficients in the free module `U(n^-)`.
4. **Weak-to-strong route.** Must be the relative standard complex + central-character
   projection route (drift review L157–162), not exactness of the signed direct-sum complex.
5. **Published supplier risk (owner-visible, does not block).** Four published suppliers on
   the ap-319 deferred list: `thm-verma-embedding-for-an-arbitrary-positive-root`,
   `thm-bgg-verma-homomorphism-criterion`, `thm-strong-linkage-principle-for-verma-modules`,
   `thm-central-character-summands-split-into-linkage-blocks`. They still carry
   `status: published`; no local repair is authorized here.

## Checkpoint log

- 2026-10-03: read `CLAUDE.md`, `SCHEMA.md`, batch manifest/coverage/notes, 3a review,
  owner direction, drift review, design RL-6, `def-bruhat-order-on-a-finite-weyl-group`,
  `lem-finite-weyl-strong-exchange-and-deletion`, and the fetched source texts (Zhou Part I,
  van Ekeren Sec. 29, Hemelsoet–Voorhaar, Etingof 18.755, BGG 1975 scan via OCR).
- 2026-10-03 later: fixed the two inherited typos (bad Columbia URL in
  `lem-bruhat-covers-give-unique-verma-embeddings`; malformed trailing bracket text in
  `lem-weak-bgg-base-case-for-the-trivial-module`). Ran the normative precheck over all
  19 previously written items: repaired the tag/layer-format failures mechanically
  (adopting the checker's canonical renumbering in `thm-weak-bgg-resolution`,
  `lem-positive-root-pairings-of-a-dominant-integral-weight`,
  `lem-bruhat-covers-are-reflection-covers`,
  `lem-jordan-holder-factors-of-verma-modules-lie-above-the-head`,
  `lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules`,
  `lem-dominant-integral-dot-translates-embed-in-the-verma-module`,
  `lem-weak-bgg-base-case-for-the-trivial-module`,
  `lem-bruhat-rank-two-intervals-are-diamonds`,
  `lem-nonzero-highest-weight-images-survive-modulo-n-minus`), added the missing
  induction-strategy tags to the two induction items, restored the terminal QED on
  `lem-compatible-signs-exist-on-the-bruhat-graph`, and fixed the invalid `step given`
  tag in `lem-central-character-cuts-of-a-typed-module-are-typed`. All 21 items pass
  `tools/precheck.mts` (2026-10-03).
- 2026-10-03 later: **scaffold hypothesis repair (recorded for Steps 4–5).** Zhou's
  Lemmas 10.6a/10.6/10.7 are proved in the thesis under the partial-exactness
  hypothesis "C_• is exact in degrees ≤ k−1" (the DNA/RNA chain in Sec. 4.2.2 quotes
  it explicitly; 10.7's proof says "recall it is exact from −1 to k−1 by induction"),
  but the manifest statements omit it. The three items
  `lem-kernel-generators-for-the-weak-bgg-complex`,
  `lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential`, and
  `lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term` therefore carry the
  explicit hypothesis "C_•(λ) is exact in degrees 0,…,k−1 (vacuous for k = 0)". The
  main theorem discharges it by induction; no promised claim of the pair's theorems is
  weakened. An unconditional alternative (a maximal-weight argument plus the
  weight-order/Bruhat-order comparison) was considered and is not used.
- Authored so far (all precheck-clean): `def-bgg-differential-from-signed-verma-maps`,
  `thm-weak-bgg-resolution` (route correction: the surviving pair forces u = w, not
  u = w^{-1}; promise unchanged), `lem-kernel-generators-for-the-weak-bgg-complex`,
  `lem-the-bgg-augmentation-has-image-the-simple-module` (proved via the published
  `lem-simple-root-integrability-bounds-the-dominant-cyclic-module` and the
  M_int(λ) = M(λ)/Σ_i M(s_i∘λ) identification),
  `prop-the-bgg-differential-squares-to-zero`,
  `lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution` (acyclic-
  resolution theorem route).
- Pending: the two B counterexamples (L4), `lem-n-minus-coinvariants-map-injectively-…`
  (L5), `lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term` (L6),
  `thm-bgg-resolution-of-a-finite-dimensional-simple-module` (L7), the two L8
  examples and `cor-bgg-euler-character-identity`, the two L9 items; then the two
  pages, proof contracts, the gate battery, and the Step-3 item decisions.

## Authoring completed (2026-10-03)

- All **35/35 items authored** (`items/`), and both pages written:
  `library/lie-theory/the-bgg-resolution.md` (30 items) and
  `library/lie-theory/the-bgg-resolution-examples.md` (5 examples/counterexamples).
- Dependency reconciliation: every manifest row's `deps` now equals the item
  file's frontmatter `deps`, and `dependency_level` was recomputed from the
  in-pair graph. Two scaffold labels moved: `lem-jordan-holder-factors-of-verma-modules-lie-above-the-head`
  0→1 (it consumes the in-pair `lem-positive-root-pairings-of-a-dominant-integral-weight`)
  and `lem-nonzero-highest-weight-images-survive-modulo-n-minus` 1→2. The authoring
  order of the dispatch is unchanged (these two still precede all their consumers).
  No cross-batch dependency exists (`…-batch-8.cross-batch-dependencies.json` stays `[]`);
  all 63 external suppliers are published library items and were re-checked to
  resolve with matching IDs.
- No item ID was added, removed, renamed or re-scoped; every statement's promised
  claim is preserved except for the four recorded repairs below, all of which keep
  the claim and make a missing hypothesis or a defective route explicit.

## Statement / route repairs made during authoring (for Steps 4–5)

1. **Partial-exactness hypothesis added (three items).** Zhou's Lemmas 10.6a, 10.6
   and 10.7 are proved in the source under "C_• is exact in degrees ≤ k−1" (the
   DNA/RNA chain in Zhou Part I Sec. 4.2.2 quotes it; the 10.7 proof says "recall
   it is exact from −1 to k−1 by induction"), but the manifest statements omit it.
   `lem-kernel-generators-for-the-weak-bgg-complex`,
   `lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential` and
   `lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term` now carry
   "C_•(λ) exact in degrees 0,…,k−1 (vacuous for k = 0)". The main theorem discharges
   it by induction, so no theorem of the pair is weakened.
2. **`lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules` (BGG 10.5).**
   The scaffold (and the source) state M, N ∈ O, but 10.7 applies the lemma to the
   free module D = U(n⁻)^n, which is not in O. The statement was repaired to the
   form the proof and the consumer actually use: N ∈ O, M free on weight-vector
   generators, and the generator images are weight vectors. Its conclusion (φ
   surjective iff φ̄ surjective) is unchanged.
3. **`thm-weak-bgg-resolution` route.** In the central-character computation the
   surviving pair w∘0 + ν = u∘λ forces **u = w** (then ν = wλ), not u = w⁻¹; the
   manifest's route sentence was corrected. Resolution and type claims unchanged.
4. **Route/format corrections with unchanged claims.** `lem-bruhat-rank-two-intervals-are-diamonds`
   (defective one-deletion route replaced by a complete induction via the lifting
   property; see Open obligation 1), `lem-the-bgg-augmentation-has-image-the-simple-module`
   (proved via the published finite-dimensionality of M_int(λ) and
   M(λ)/Σ_i M(s_i∘λ) ≅ M_int(λ)),
   `cor-bgg-resolution-has-length-the-number-of-positive-roots` ("last nonzero
   homology degree |Φ⁺|" corrected to "last nonzero degree of the complex"; the
   homology is L(λ) in degree 0), `ex-sign-cancellation-in-an-a2-bruhat-diamond`
   ("d_2d_1" corrected to the (w₀,s₁)-component of d₂∘d₃), and
   `cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight`
   (precise statement that d₁d₂ = 0 holds vacuously while the augmented condition
   and exactness at C₀ fail).
5. **B/examples-page dependencies removed (two items).** `ex-the-a2-bgg-resolution-with-six-verma-summands`
   and `ex-sign-cancellation-in-an-a2-bruhat-diamond` had cited the published
   B-page item `ex-a2-regular-dominant-verma-embedding-poset` for the A2 Bruhat
   cover list and the two intervals. Per the A-page-supplier rule those deps were
   replaced by the in-pair `def-bgg-bruhat-verma-sum-in-degree-k` and
   `lem-bruhat-covers-are-reflection-covers` plus a self-contained finite A2
   subword computation written into each item's facts (lengths 0,1,1,2,2,3; the
   eight length-adjacent pairs are exactly the covers; the two intervals have the
   displayed middles). `depcheck` now reports no finding for either item.

## Checks actually run (2026-10-03, current content)

| Check | Result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts items/<35 ids>.md` | 31 proof-bearing items pass, 4 definitions not-applicable, 0 failing |
| `node tools/rendercheck.mjs items/<35 ids>.md library/lie-theory/the-bgg-resolution{,-examples}.md` | 37 files OK (YAML, KaTeX, no bad delimiters) |
| `node tools/proof-layout.mjs items/<35 ids>.md` (one batched command) | 35 items, 138 steps, 0 defects |
| `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-8.proof-contracts.json --strict` | 35/35 items, 0 errors, 0 warnings (281 citations, 138 derivations, 280 boundary dispositions) |
| `node tools/content-policy.mjs research/frontier-38-owner-30-batch-8.pages.json` | 35 items, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-8.pages.json` | 35 items, 0 errors |
| `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | 816 items across 60 pages, no dependency-level errors |
| `node tools/depcheck.mjs items/*.md` filtered to the 35 ids | 0 findings for this pair (repo-wide failures are pre-existing, other pairs) |
| `node tools/coverage-checklist.mjs …batch-8.coverage.json --require-destination` | 2 pages, 56 rows, 0 errors |
| `node tools/source-fetch-check.mjs --coverage …batch-8.coverage.json` | 7/7 fetch-verified, 7/7 resolved, 0 drops |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (declared order acyclic; informational notes only) |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` | refreshed and deduplicated |
| `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final` | no work item for any of the 35 IDs (all closed); run-wide `closed:false` is other batches' open work |
| `node tools/step3-decisions.mjs record-item …` | 35 rows written: 25 `accept`, 12 `repaired` (the last two re-recorded after the B-page dependency repair), confidence 1, each with examined dependency IDs |

## Published concerns / open obligations for later steps

1. **Compatible signs (settled citation, flagged).** `lem-compatible-signs-exist-on-the-bruhat-graph`
   imports the existence of a ±1-signing with product −1 on every square; the local
   consequence (opposite path products) is proved, but no closed-form signing was
   reconstructed locally. BGG 1975 Lemma 10.4 (OCR pages 28–36), Zhou p. 10 and
   Hemelsoet–Voorhaar Prop. 2.3/Sec. 4.2 assert it; Rocha-Caridi's PDF remained
   unreachable (AMS 403). Owner-visible; no local repair attempted.
2. **Four ap-319-deferred published suppliers on the critical path** (unchanged
   from the Step-1/3a records; no local repair authorized here):
   `thm-verma-embedding-for-an-arbitrary-positive-root` (consumer
   `lem-dominant-integral-dot-translates-embed-in-the-verma-module`),
   `thm-bgg-verma-homomorphism-criterion` and `thm-strong-linkage-principle-for-verma-modules`
   (consumers `lem-jordan-holder-factors-of-verma-modules-lie-above-the-head`,
   `lem-dominant-integral-dot-translates-embed-in-the-verma-module`),
   `thm-central-character-summands-split-into-linkage-blocks` (consumer
   `cor-bgg-euler-character-identity`). All four still carry `status: published`.
3. **`cor-verma-irreducibility-criterion-from-shapovalov-determinants`** is consumed
   by `cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight`
   to cover λ = −ρ, where the strict antidominant supplier does not apply. It sits
   on the same Shapovalov-determinant chain as the ap-319 deferrals; exact-ID
   check for Steps 5–7.
4. **`lem-finite-semisimple-pbw-and-highest-weight-construction` and
   `lem-simple-root-integrability-bounds-the-dominant-cyclic-module`** are now the
   load-bearing suppliers for `lem-the-bgg-augmentation-has-image-the-simple-module`
   (M_int(λ) finite-dimensional). Both are audited published items; no concern.
5. **Proof-route caveat (no action needed now).** `lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution`
   computes Tor through `thm-acyclic-resolution-theorem-for-left-derived-functors`
   (a supplied projective-resolution datum), not through the manifest's listed
   long-exact-sequence induction; the long-exact-sequence item remains in `deps`
   as part of the Tor toolkit. Reconcile in Step 5 if the reader prefers the
   induction form.

## Step-3 item decisions

Recorded via `tools/step3-decisions.mjs record-item` for all 35 IDs (confidence 1,
examined dependency IDs, concrete evidence). `accept` for 25 items; `repaired` for
`thm-weak-bgg-resolution`, `lem-bruhat-rank-two-intervals-are-diamonds`,
`lem-kernel-generators-for-the-weak-bgg-complex`,
`lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential`,
`lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term`,
`lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules`,
`lem-the-bgg-augmentation-has-image-the-simple-module`,
`cor-bgg-resolution-has-length-the-number-of-positive-roots`,
`ex-sign-cancellation-in-an-a2-bruhat-diamond`,
`ex-the-a2-bgg-resolution-with-six-verma-summands` and
`cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight`.
No item was recorded `escalate`; no owner-held decision was overridden and no
`--owner` record, judge stamp or audit stamp was added.

## Handoff status

All 35 owned items and both pages are authored, dependency-reconciled, and clean on
the listed Step-3 gates; the pair's cross-batch input is empty. Open items for
Steps 4–5: the four ap-319 published suppliers, the Shapovalov-chain supplier in
item 3 above, the cited-not-reproved compatible-sign existence, and the two
statement-level repairs (partial-exactness hypothesis; BGG 10.5 statement form)
recorded in section "Statement / route repairs".
