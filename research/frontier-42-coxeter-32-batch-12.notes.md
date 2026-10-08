# Batch 12 Step 1 scaffold — Bruhat Subword Order and Lifting

Run: `frontier-42-coxeter-32` · pair `bruhat-subword-order-and-lifting`
(A order 1740, B order 1741, `coxeter-groups`, design label CG-09). Outputs:
`research/frontier-42-coxeter-32-batch-12.pages.json` (6 A + 4 B items), this note,
`research/frontier-42-coxeter-32-batch-12.coverage.json`,
`research/frontier-42-coxeter-32-batch-12.cross-batch-dependencies.json` (26 rows: 2 page
prerequisites and 24 item edges), and ten item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding) plus the design `research/plan-coxeter-groups-track.md` §CG-09
  (lines 261–274, heading through the B companion), the machine inventory `research/coxeter-scaffold/inventory.json` (CG-09),
  `definition-justifications.json`, the native A/B prose
  (`library/coxeter-groups/bruhat-subword-order-and-lifting{,-examples}.md`), the independent
  audit `research/coxeter-scaffold/independent-audit.md`, and the combinatorial source report
  `research/coxeter-scaffold/combinatorial-source-report.md` §C1. The drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, § `bruhat-subword-order-and-lifting`)
  records **VERDICT: no-drift** ("No prerequisite gap. The subword and lifting proofs remain
  draft obligations.") and applies no plan edge, ordering, or category amendment.
- **Preserved.** The four planned local supplier contracts keep their exact ids, kinds and
  order: `def-cg-bruhat-order-by-reflection-chains` (definition, justified by the subword
  theorem), `thm-cg-bruhat-subword-characterization`,
  `thm-cg-bruhat-lifting-and-cover-criterion`, `thm-cg-bruhat-parabolic-projection-and-quotients`.
  The design's warnings are kept: the order is defined by length-**increasing** reflection
  chains and the subword theorem is then proved for every fixed reduced expression (the
  order is not defined by "some reduced expression contains a subword"); the augmentation
  step of Björner–Brenti Lemma 2.2.1 is proved with both contradiction cases; Matsumoto is
  used for nothing here; finiteness of intervals, the chain refinement, grading by length,
  the four lifting cases with all inequalities, the cover criterion and the parabolic
  projection are all scaffolded; no longest element of an infinite parabolic is presumed.
- **Two local additions** fill prerequisites the four contracts name but cannot prove by
  themselves, in prerequisite order: `lem-cg-bruhat-right-exchange-and-augmentation`
  (right-handed strong exchange transferred from batch 7, and Björner–Brenti Lemma 2.2.1)
  and `lem-cg-bruhat-chain-refinement-and-gradedness` (Corollary 2.2.4, Theorem 2.2.6 and
  the graded-poset remark). The design itself presupposes the second one ("using the chain
  refinement lemma" in contract 3), so this is a naming and placement completion, not a
  scope change; see the refinements below.
- **B companion (4 items).** The design's B tasks map to
  `ex-cg-s4-subwords-and-covers` (subwords, reflection deletions and the covers of $w_0$ in
  $S_4$), `ex-cg-s4-lifting-squares` (one instance of each of the four lifting cases),
  `ex-cg-s4-bruhat-versus-weak-comparability` (a Bruhat pair that is in neither weak order,
  plus the general weak-implies-Bruhat observation), and `ex-cg-s4-subword-descriptions-agree`
  (two reduced expressions of $2431$ whose subword descriptions of $[1,2431]$ agree). None of
  the four B items depends on another B item, and every $S_4$ computation was checked by
  exhaustive enumeration before being written (see "Computational cross-checks").
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task and design on the
  pair ids, orders 1740/1741, category, companion and the A page's `requires`
  (`canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`).
  Its item arrays are empty, so no item-level plan text can conflict. **No design-versus-plan
  page conflict exists**; no plan text was changed.

## Recorded refinements (no plan edit, no claim dropped)

1. **Inventory `depends_on` is one page-level list, not per-contract edges.** The machine
   inventory attaches the same two-entry list
   (`thm-cg-root-inversion-formulas-and-strong-exchange`,
   `thm-cg-double-coset-unique-minimum-and-normal-form`) to all four CG-09 contracts. The
   recorded `deps` are each item's actual use set. The definition item uses neither of the
   two: it asserts only the graph, the partial-order property, inversion symmetry and
   reflection parity, and its deps are the presented group, the reflection set, the sign
   character/parity clause of HH-11 (1), the inversion-length clause of HH-11 (3) and
   elementary published items. The double-coset normal form is **not** used anywhere in this
   batch (the minimal coset representatives of the CG-07 page are, in item 6); no inventory
   dependency was invented and none was dropped without recording why.
2. **Placement of the chain-refinement and interval-finiteness claims.** The design's contract
   3 says both "using the chain refinement lemma" and "Show all intervals finite and graded by
   simple length". The scaffold moves the *proof* of the chain refinement, the interval
   finiteness bound and gradedness into the immediately preceding local lemma
   `lem-cg-bruhat-chain-refinement-and-gradedness` and has contract 3 (`thm-cg-bruhat-lifting-…`)
   cite it for the cover criterion. No claim of contract 3 is omitted; the split is the
   minimal one that makes the design's own back-reference ("the chain refinement lemma") an
   actual item.
3. **The definition item does not introduce intervals or rank.** As the design requires,
   interval notation is defined and rank/gradedness are asserted only in
   `lem-cg-bruhat-chain-refinement-and-gradedness`, after the partial-order property
   (definition item) and the saturated-chain result (same lemma) are proved; the definition
   item points at that item instead of assuming them.
4. **The four lifting cases are stated with their exact hypotheses.** The design asks for the
   lifting inequalities and "the two same-descent variants with all inequalities". The
   scaffold states the full four-case table and records explicitly that in the mixed case (a)
   the comparison `us ≤ vs` can fail and in the same-descent case (c) the comparison `u ≤ vs`
   can fail (both verified in $S_4$, see the B companion) — the case hypotheses are not
   interchangeable.

## Items built, in prerequisite order

| # | item | kind | level |
|---|---|---|---|
| A1 | `def-cg-bruhat-order-by-reflection-chains` | definition | 6 |
| A2 | `lem-cg-bruhat-right-exchange-and-augmentation` | lemma | 12 |
| A3 | `thm-cg-bruhat-subword-characterization` | theorem | 13 |
| A4 | `lem-cg-bruhat-chain-refinement-and-gradedness` | lemma | 14 |
| A5 | `thm-cg-bruhat-lifting-and-cover-criterion` | theorem | 15 |
| A6 | `thm-cg-bruhat-parabolic-projection-and-quotients` | theorem | 16 |
| B1 | `ex-cg-s4-subwords-and-covers` | example | 16 |
| B2 | `ex-cg-s4-lifting-squares` | example | 16 |
| B3 | `ex-cg-s4-bruhat-versus-weak-comparability` | example | 14 |
| B4 | `ex-cg-s4-subword-descriptions-agree` | example | 15 |

Levels are the shared `tools/item-dependency-levels.mjs` values (computed, not hand-set).
The in-run suppliers are batch 2 (HH-11: presented group/length, exchange–deletion, parabolic
minimal representatives), batch 4 (`def-cg-canonical-reflection-homomorphism`), batch 7
(root-inversion/strong-exchange) and batch 10 (`def-cg-parabolic-quotient-and-two-sided-minima`,
`thm-cg-parabolic-intersections-and-coset-factorization`). No item depends on a later batch of
this run, and none depends on a B-page item.

## Actual proof-dependency decisions taken while scaffolding

- **Right-handed strong exchange is a transfer, not new mathematics.** Batch 7 proves strong
  exchange for left multiplication on a reduced word. Clause (1) of A2 applies it to
  `u^{-1} = s_q⋯s_1` and inverts the two conclusions; the uniqueness of the deleted index and
  the explicit form `t = (s_q⋯s_{i+1}) s_i (s_{i+1}⋯s_q)` are exactly what the augmentation
  proof then consumes. Every statement of this batch is right-handed, matching the CG-09
  definition `u_{i+1} = u_i t_i`.
- **The augmentation proof needs both cases and the parity clause.** Suppose `ut < u`; the
  exchange input yields a deleted retained position `p`. If `p > i_k`, rewriting `w = w t²`
  produces a word of length `q−2` for `w`; if `p < i_k`, rewriting `u = u t²` produces a
  reduced subword expression for `u` whose last deleted position is `< i_k`. Both
  contradictions are written into A2's strategy. Parity (`ℓ(xt) ≡ ℓ(x)+1 mod 2` for a
  reflection `t`) is what upgrades `ℓ(ut) ≤ ℓ(u)+1` and `ut ≠ u` to `u < ut`; it is proved
  in the definition item from HH-11's sign character, not assumed.
- **The same-descent lifting case collapses to case (a).** Cases (a), (b), (d) are direct
  subword arguments in the style of Björner–Brenti 2.2.7. Case (c) needs no chain analysis at
  all: the edge `us → u` gives `us ≤ u ≤ v`, and `s` is an ascent of `us`, so case (a) applied
  to the pair `us ≤ v` (not to `u ≤ v`) returns `us ≤ vs` directly. The scaffold records this
  shorter proof; an earlier draft proved (c) by a chain refinement and a cover analysis and was
  replaced after that draft was found to require an extra induction invariant. A finite check
  of the whole four-case table in `S_n` for `n ≤ 7` (21 305 514 pairs in `S_7`) was run before
  the replacement and again after it, with no failure.
- **The quotient does not inherit the chain property for free.** A6 proves the extra check
  `x_1 ∈ W^I` (via the cover lemma A6 (2) and the contradiction with `w ∈ W^I`), records that
  this is where the quotient argument differs from the ambient one, and states the
  order-preservation, directedness and maximum statements with their exact finiteness
  hypotheses; no longest element of `W_I` is presumed.
- **Axiom of Choice.** Not needed: every construction is a subset or a predicate on the fixed
  presented group, all minima are minima of nonempty sets of natural numbers, and no quotient,
  ultrafilter or infinite selection occurs. Each strategy states this explicitly. Choice-closure
  audit (2026-10-07): the transitive closure of the ten items contains 719 resolved nodes and
  **no path reaches `deferred-set-theory-beyond-choice`**; it does contain `def-countable-choice`
  (distance 6) and `def-axiom-of-choice` (distance 7) from the batch-12 suppliers, inherited
  exclusively through the published real-analysis/π foundations that the batch-4 supplier
  `def-cg-real-coxeter-form-and-reflection` consumes (via `def-pi-via-first-positive-cosine-zero`,
  distance 2 from that supplier). That is ambient published ℝ infrastructure, not a choice step
  in any batch-12 argument.

## Sources, reading limits and evidence

Sources harvested for this pair (all four fetch-verified with durable stamps):

1. **Björner–Brenti, *Combinatorics of Coxeter Groups*** (textbook), §2.1 printed pp. 27–32,
   §2.2 printed pp. 33–36 and §2.5 printed pp. 42–44, read in the extracted full text:
   Definition 2.1.1 and its observations, Lemma 2.2.1 with its complete proof, Theorem 2.2.2,
   Corollaries 2.2.3–2.2.5, Theorem 2.2.6 (chain property), Proposition 2.2.7 (lifting),
   Proposition 2.2.9 (directedness), Proposition 2.5.1 (order-preserving projection),
   Corollaries 2.5.2–2.5.3, Theorem 2.5.5 (chain property in `W^J`) and Corollary 2.5.6.
2. **Tom Denton, *Lifting property and poset structure of finite Coxeter groups*** (UC Davis
   MAT 280 lecture notes, 3 pages), read in full: Lemma 1 (augmentation), Theorem 2 (subword
   property), Corollary 3 (inversion), Theorem 4 (chain property) and the cover/rank
   paragraph, Proposition 5 (lifting) with its proof, Proposition 7 (directedness) with its
   proof. The document is shorter than the four-page PDF floor, so a full-document reading
   receipt (`short_document_reading`, sha256 `78ea8be…4959a3`, pages 1–3) is attached to the
   coverage entry and was accepted by `source-fetch-check --stamp`.
3. **Carl Marberg, MATH 6150F Lecture 11** (HKUST lecture notes, 4 pages), Sections 1–2 read
   in full: strong exchange with uniqueness, the Bruhat order as a closure, the subword
   theorem, the lifting lemma and covering lemma, the chain proposition with its complete
   induction and gradedness corollary, and the minimal-coset-representative proposition.
4. **Grant T. Barkley, *Bruhat order and applications* Lecture 3** (6 pages), read through
   Section 2: the Bruhat graph, the exchange/deletion inputs, Theorem 1.3, Lemma 1.4 and
   Corollary 1.5, Corollary 1.6, and the weak-versus-Bruhat observation used by B3. Sections
   on Gale order/Bruhat decomposition are declared out of scope in the coverage file.

Independent treatments per A page: one textbook (Björner–Brenti) plus three independent
lecture-note sets (Denton; Marberg; Barkley). Every harvested heading received a disposition
in `frontier-42-coxeter-32-batch-12.coverage.json`: 38 results, 24 scaffolded (`included`),
6 absorbed inline, 1 deferred (the finite-case/interval-structure material of Björner–Brenti
§§2.3, 2.6–2.7 to `bruhat-interval-labels-shellings-and-mobius-functions`), and the remaining
7 declined with individual reasons (`out-of-scope`). The Step 3b pass split the previous
Corollary 2.2.4 row out of the Theorem 2.2.2/Corollary 2.2.3 row so that the interval
finiteness of Björner–Brenti Corollary 2.2.4 is attributed to
`lem-cg-bruhat-chain-refinement-and-gradedness`, which states it (Step 3a review, non-blocking
note).

**Reading limits (honest).** Björner–Brenti §§2.1–2.2 and 2.5 were read in the extracted
full text (the extraction produced by this run's earlier source work). The extracted text
loses the hat accents of Lemma 2.2.1, and this session has **no image input**, so the raw PDF
pages 42–43 were re-extracted with the layout text extractor instead of being visually
inspected; the deleted-letter convention was reconstructed from the surrounding length
bookkeeping and confirmed by re-deriving both contradiction cases (each yields exactly the
contradiction the original claims). Figures 2.3, 2.4 and the exercise sets were not used.
Denton and Marberg were read in full (their PDFs extracted to text). Barkley was read through
Section 2; its Sections 3 and the problems list were not used. The four original source
readings recorded in `research/coxeter-scaffold/combinatorial-source-report.md` §C1 (same
textbook) were reused as orientation only; all item-level citations here were re-checked
against the texts above.

**Computational cross-checks (finite evidence only, within its scope).** Before writing the
scaffold, the following were verified by exhaustive enumeration:

- the four-case lifting statement of A5 (with the extra inequalities of (b), (c) and (d)) for
  **all** pairs `u ≤ v` and all simple `s` in `S_n` for `n = 3,4,5,6,7` (21 305 514 checks in
  `S_7` alone), with zero failures;
- the subword characterization of A3 for every element of `S_4`, every reduced expression of
  it and every subword: the realized sets equal the interval below the element (0 mismatches);
- the $S_4$ data of B1–B4: the three covers of $w_0$ and the three non-reduced deletions, the
  twelve-element interval below `2431` realized identically by `s_1s_2s_3s_2` and
  `s_1s_3s_2s_3`, the position sets for `s_2`, the four lifting instances with their
  comparisons, and the six products excluding `2143 ≤_weak 2341`.

These computations are consistency evidence only; the proofs in the strategies are
mathematical, and the finite checks assert nothing infinite. No source-reading or proof
completion is claimed on their basis.

**Published defects.** None identified in this batch's scope. The consumed published items
(`def-group`, `def-natural-numbers`) were read only for the interfaces used and the uses match
their statements. No published defect is recorded for the canonical ledger from this batch.

## Checks actually run

| check | command | actual result |
|---|---|---|
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1; exactly 28 errors, all `empty scaffold inventory` for the 14 not-yet-scaffolded sibling pairs (the count moves as other batches are scaffolded concurrently); **no label error, no cycle and no dependency error names a batch-12 item**, and all ten batch-12 labels equal the tool's computed values |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; `165 item(s), 0 normalized, 0 error(s)` (batch 12 contributes its 10 items) |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; `165 scoped item(s), 0 error(s), 0 warning(s)` |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; declared page order acyclic and consistent, no item-level cycles/forward refs/B-page deps/unresolved ids among the 1599 pages with item lists |
| plan, run-scoped | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0, but "0 page(s) with item lists": at scaffold stage the scoped front has no item files yet, so this gate is vacuous until Step 3 |
| external references probe | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet` | final re-run: `165 item(s)`, `extcheck: 0 items, 0 recorded-not-proved, 0 resting on them` (no frontier item files exist yet at scaffold stage; the earlier standalone probe returned `focus-item-unknown`, as in batches 10, 11 and 15). Manifests carry no `external_refs`/`proved_here:false` |
| later references probe | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet` | final re-run: `focused item checks for 165 item(s); selected page and prerequisite dependency/forward graph checks cover 0 items and 0 pages`; fwdcheck is not in the Step-1 gate battery, and no batch-12 statement or strategy links a later-run item or page |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-12.coverage.json --require-destination` | exit 0; `1 page(s), 37 harvested result(s), 0 error(s), 0 warning(s)` |
| source full text | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-12.coverage.json --stamp` | exit 0; `4/4 source(s) fetch-verified (4 newly stamped)`, `4/4 resolved (0 documented drops)`; check-mode re-run: `4/4 source(s) fetch-verified` |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; `refreshed and deduplicated`; batch 12 appears in `reviewed_batches`, `orphaned_reviews: []`, and all 26 batch-12 rows matched to declared edges |
| readiness records | `node tools/step1-decisions.mjs record …` (ten records, two of them re-recorded after the final strategy repair) | exit 0 for each; `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` reports `165 items, 165 ready`, exits 1 only because of the 28 `empty scaffold inventory` entries of the 14 not-yet-scaffolded sibling pages, and lists **no** batch-12 item as open or stale |

## Unresolved findings

None for this pair. The two deferred-source destinations and the one recorded refinement of
contract 3's placement are decisions, not open risks; the whole-run `item-dependency-levels`
and `step1-decisions` exits 1 are the expected consequences of sibling batches not yet being
scaffolded. Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical approval.

## Step 3b addendum (2026-10-07, alpha-high pair dispatch)

The Step 3b pass authored all ten batch-12 items and both pages, audited the scaffold
claims, and recorded ten confidence-1 item decisions (`accept` for
`thm-cg-bruhat-subword-characterization`, `lem-cg-bruhat-chain-refinement-and-gradedness`,
`thm-cg-bruhat-lifting-and-cover-criterion`, `ex-cg-s4-subword-descriptions-agree` and
`ex-cg-s4-subwords-and-covers`; `repaired` for the remaining five). Local repairs:
prefix justification in the definition item; one unsupported clause removed from the
augmentation lemma's step 5.1; the false equality `l(wt)<l(w)=l(ws)` corrected in the
parabolic-projection theorem's step 4.1; two subword witnesses added in the lifting-squares
example; and the `def-hh-coxeter-matrix-word-group-and-length` declaration restored in the
weak-comparison example (item and manifest) so that it matches its cross-batch row. The
batch-12 proof-contract file was synchronised (six stale quotes refreshed against the
current batch-2 parabolic supplier statement, three step claims re-mirrored) and now passes
`proof-contract --strict` with 0 errors and 0 warnings. The cross-batch input now holds
27 `verified` rows (25 item + 2 page): one missing row added
(`lem-cg-bruhat-right-exchange-and-augmentation` → `def-cg-canonical-reflection-homomorphism`)
and one stale consumer/mirror mismatch reconciled; `frontier-dependency-ledger refresh`
succeeded with no orphaned reviews.

Current check results (all run from the repository root after the final edits): author check
batch 12 exit 0 (`precheck 9 checked/0 failing`; `rendercheck OK — 12 file(s)`;
`content-policy 10 scoped item(s), 0 error(s), 0 warning(s)`; `proof-contract --strict
0 error(s), 0 warning(s), 10/10`); `proof-layout` on all ten item paths exit 0
(`10 items, 55 steps, 0 defects`); `validate-plan` exit 0; `manifest-deps` exit 0
(`303 item(s), 0 error(s)`); `coverage-checklist` exit 0 (`1 page, 38 harvested results`);
`source-fetch-check` exit 0 (`4/4 fetch-verified, 4/4 resolved`); the batch-12 contract
battery (merge, strict contracts, finite smoke, risk report, boundary audit, citation
fidelity) exit 0 each. `item-dependency-levels check` names no batch-12 item (its three
errors are sibling items), and `depcheck` on the ten explicit paths names no batch-12 item.
The Step 3 scope gate is current for this pair; the Step 3 final gate still waits on
sibling authors, as expected. Full per-item evidence, locators and the one hypothesis-wording
observation (batch-2/batch-10 suppliers say "finite Coxeter matrix" while this pair
quantifies over arbitrary Coxeter matrices with entries in N ∪ {infinity}; the same
suppliers prove the infinity cases explicitly) are in
`research/frontier-42-coxeter-32-step3b-pair-bruhat-subword-order-and-lifting.md`.
This addendum records current state only; it is not an independent mathematical audit and
does not certify supplier proofs.
