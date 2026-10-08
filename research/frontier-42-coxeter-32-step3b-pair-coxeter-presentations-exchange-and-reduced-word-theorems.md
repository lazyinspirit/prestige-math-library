# Step 3b — pair authoring: `coxeter-presentations-exchange-and-reduced-word-theorems`

Run: `frontier-42-coxeter-32` · role: alpha-high (pair author) · batch 2 · design label HH-11
A page: `coxeter-presentations-exchange-and-reduced-word-theorems`
B page: `coxeter-presentations-exchange-and-reduced-word-theorems-examples`

Owned IDs (dependency order; level from `item-dependency-levels.mjs` over the batch-2 manifest):

| level | id | kind | page |
|---|---|---|---|
| 0 | `def-hh-coxeter-matrix-word-group-and-length` | definition | A |
| 1 | `def-hh-geometric-coxeter-representation-and-roots` | definition | A |
| 2 | `lem-hh-dihedral-root-recurrence-and-root-sign` | lemma | A |
| 3 | `thm-hh-coxeter-exchange-deletion-and-faithfulness` | theorem | A |
| 4 | `thm-hh-matsumoto-reduced-word-theorem` | theorem | A |
| 4 | `ex-hh-finite-dihedral-reduced-words` | example | B |
| 4 | `ex-hh-rank-one-reduced-words` | example | B |
| 5 | `thm-hh-parabolic-minimal-representatives-and-length-additivity` | theorem | A |
| 5 | `ex-hh-exchange-deletion-on-a-nonreduced-word` | example | B |
| 6 | `ex-hh-type-a-reduced-words-and-inversions` | example | B |
| 7 | `ex-hh-minimal-representatives-for-s2-in-s3` | example | B |

## Open obligations at entry

1. Author all 11 item files (10 with numbered proofs, 2 of them definitions with
   well-definedness conventions and recorded justifiers, 5 examples on the B page).
2. Register the authored items in the two page files and in the batch-2 manifest's
   companion fields; keep every sibling row intact.
3. Write the batch-2 proof contracts for all 11 items and run the strict contract
   gates; derive per-step derivations, exact citation quotes and the eight boundary
   dispositions from the completed arguments.
4. Refresh `research/frontier-42-coxeter-32-batch-2.cross-batch-dependencies.json`
   after authoring: re-inspect the direct in-run prerequisite pair
   `tensor-coherence-and-algebraic-descent` (batch 1) and record whether any
   authored consumer actually uses a batch-1 item.
5. Record an ordinary current item decision (`accept`/`repaired`, confidence 1,
   examined dependency IDs, evidence) for each of the 11 IDs, or `escalate`.
6. Run the Step-3 checks on explicit paths: precheck, rendercheck, content-policy
   (item mode), strict proof contracts, boundary/citation gates, dependency-level
   check, `validate-plan`, `manifest-deps`, coverage, and one batched
   `proof-layout.mjs` pass over every changed item.

## Advisories carried from Step 3a (non-blocking; disposition recorded per item)

- (a) "Coxeter system" was used without a definition anywhere: A1's Definition body
  now names the pair $(W,S)$ as the Coxeter system presented by $(S,m)$; the
  manifest statement (scope hash) is untouched, so no scope re-record is forced.
- (b) $\ell(w)=\ell(w^{-1})$ is used by consumers: A4's proof now establishes it
  explicitly (reversal of a reduced word), and A6 cites it where used.
- (c) The plan locator "Lusztig Theorem 1.9 pp.4-5" is stale; the stamped revised
  text has Theorem 1.9 on printed pp. 13-14. Report only; item sources carry the
  correct locator.
- (d) B1/B2 use published items of the free-group/quotient vocabulary and the order
  vocabulary: the generated item files declare those uses in their own `deps` (or
  inline the one-line computations) instead of citing undeclared suppliers.
- (e) The seven `redundant-prereq` advisories on the A page's declared `requires`
  array are owner-approved plan content; untouched.

## Checkpoints

Recorded one item at a time, in the dispatch order (`dependency_level`, ties by page then ID).
Each entry names the exact claim/conventions, source locators, dependencies, the recorded
decision and the checks actually run on the current bytes. All 11 decisions are recorded in
`research/frontier-42-coxeter-32-step3b-review-<id>.json` with confidence 1.

### 0. `def-hh-coxeter-matrix-word-group-and-length` — decision `accept`

- Claim/conventions: finite Coxeter matrix `(S,m)`; `W=F(S)/N` with `N` the normal closure of
  `{s^2}∪{(st)^{m(s,t)}}`; universal property; `ℓ` as the minimum over words in `S`; reduced
  words; the pair `(W,S)` named the *Coxeter system*; `W_J=<{s:s∈J}>`. No finiteness,
  faithfulness or completeness is asserted; A4/A6 are recorded as justifiers.
- Sources: Lusztig 1.1-1.2 (printed pp. 10-11); Davis Ch. 3 (printed pp. 29-35).
- Deps (17): the free-group, presentation, quotient, subgroup and well-ordering suppliers.
- Decision evidence: `node tools/step3-decisions.mjs record-item --item … --decision accept
  --confidence 1 --dependencies <the 17 declared ids>`.
- Checks: precheck n/a (definition); rendercheck; content-policy; strict contract (8/8 boundary
  dispositions; no citations needed); `item-dependency-levels` level 0 confirmed.

### 1. `def-hh-geometric-coxeter-representation-and-roots` — decision `accept`

- Claim/conventions: one common splitting field `K` of `∏(X^{2m(s,t)}−1)` over `Q`, one
  primitive `2m`-th root per finite edge, `c_{st}=ζ+ζ^{−1}` (and `c_{st}=2` for `m=∞`), the
  involutions `σ_s` on the simple-root basis, the root set as their orbit. No positivity,
  integrality, faithfulness or definiteness; the justifier is A3.
- Sources: Lusztig 1.1 and Prop. 1.3 (printed pp. 10-12); Davis §6.12 and App. D.1 (constants
  convention only).
- Deps (20): splitting-field, root-of-unity, characteristic and linear-algebra suppliers.
- Checks: rendercheck; content-policy; strict contract (8/8; boundary worksheet covers `S=∅`,
  `#S=1`, `char K=0`, the `ζ↦ζ^{-1}` invariance, the two directions of `c=0 ⟺ m=2`, and the
  finite root selection).

### 2. `lem-hh-dihedral-root-recurrence-and-root-sign` — decision `repaired`

- Claim/conventions: rank-two block `B=A|_P` with trace `c^2−2` and determinant `1`; exact order
  of `A=σ_sσ_t` (`m`, with `m=2` as `−id` and `m=∞` as unipotent); the representation
  `σ:W→GL_K(E)`, distinct generators and exact dihedral orders; the signed right action on
  `{±1}×T` with prefix-reflection deletion, expression independence and `#Φ(w)=ℓ(w)`; ambient
  reducedness of alternating words.
- Sources: Lusztig Props. 1.3, 1.5-1.7 (pp. 12-13) and Cor. 1.4; Davis Lemmas 3.2.6, 3.3.5 and
  Thm 3.2.16 (printed pp. 31-32, 47-48, 52).
- Deps (25): A1, A2 and the char-polynomial/eigenvalue/order suppliers.
- Repair made in this pass: step 7.1 now cites `[F1, F2]` where the length definition and the
  exact order of `st` are actually used (the contract warning `shotgun-bracket` is resolved,
  not suppressed).
- Checks: precheck PASS; proof-layout 0 defects; rendercheck; content-policy; strict contract
  12 citations, 9 derivations, 8/8 boundaries, 0 errors 0 warnings.

### 3. `thm-hh-coxeter-exchange-deletion-and-faithfulness` — decision `accept`

- Claim/conventions: unique sign character and parity `ℓ(sw)=ℓ(w)±1`; exchange on both sides;
  Tits two-letter deletion and `reduced ⟺ not shortenable`; faithfulness of the signed action
  (no geometric faithfulness and no root positivity).
- Sources: Lusztig 1.5-1.7 and the orientation used in Thm 1.9; Davis Thm 3.2.16, Lemma 3.3.5.
- Deps (7): A1, A2, A3, `def-group-homomorphism` and order/number suppliers.
- Checks: precheck, proof-layout 0, rendercheck, content-policy, strict contract (3 citations,
  4 derivations, 8/8 boundary cases).

### 4. `thm-hh-matsumoto-reduced-word-theorem` — decision `accept`

- Claim/conventions: braid equivalence of any two reduced expressions (alternating blocks of
  length `m(s,t)<∞`); `reduced ⟺ M-reduced`; the dihedral singleton `S∩<s,t>={s,t}` with the
  quotient action and reduced expressions in `{s,t}`.
- Sources: Lusztig Thm 1.9 with the (A)/(A′_p) induction and Lemma 9.7 (printed pp. 13-14);
  Davis Thm 3.4.2 (printed pp. 59-60).
- Deps (8): A1-A4 and the induction/linear-algebra vocabulary.
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (4 citations, 6 derivations, 8/8).

### 4 (page B). `ex-hh-finite-dihedral-reduced-words` — decision `accept` (newly authored)

- Claim/conventions: the `2m` normal forms `(st)^k,(st)^ks` are distinct and exhaust `W`;
  alternating words of length `q≤m` are reduced with distinct values;
  `ℓ((st)^k)=min(2k,2(m−k))`, `ℓ((st)^ks)=min(2k+1,2(m−k)−1)`; for even `m` the unique
  longest element `(st)^{m/2}` has the two alternating reduced words related by the braid move.
- Sources: Lusztig Cor. 1.4 (printed p. 12); Davis §3.1 (printed pp. 26-29).
- Deps (5): A1, A3, A4, `def-group-power`, `def-order-in-a-group` (the two vocabulary suppliers
  declared after the Step-3a advisory; their use is a one-line instance, not extra input).
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (6 citations, 6 derivations, 8/8; the canonical layered step numbering was adopted from the
  precheck repair — the step lines are single-line steps).

### 4 (page B). `ex-hh-rank-one-reduced-words` — decision `repaired`

- Claim/conventions: `W=F({s})/<⟨s²⟩>={1,s}≅Z/2`; `ℓ(1)=0`, `ℓ(s)=1`; only `()` and `(s)` are
  reduced; `T={s}`, `Φ={α_s,−α_s}` and the faithful signed action on `{±1}×{s}`.
- Sources: Lusztig 1.1-1.3; Davis §3.1 and Example 3.2.4.
- Deps (4): A1-A4.
- Repair made in this pass: the `[F2]` restatement now quotes the source text (`char K = 0`)
  instead of the manifest strategy's paraphrase.
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (4 citations, 3 derivations, 8/8).

### 5. `thm-hh-parabolic-minimal-representatives-and-length-additivity` — decision `repaired`

- Claim/conventions: support `S(w)` is expression-independent and `W_J={w:S(w)⊆J}`; intrinsic
  parabolic presentation with `ℓ_J=ℓ` and `W_J∩S=J`; unique minimal coset representatives with
  the descent characterisation and additivity `ℓ(ud)=ℓ(u)+ℓ(d)`, both sides; the type-A
  identification `ℓ=inv`.
- Sources: Lusztig Lemma 9.7 (printed p. 40); Björner-Brenti Thm 1.5.1 and Props. 1.5.2/1.5.4,
  Prop. 2.4.4/Cor. 2.4.5 (printed pp. 20-22, 28, 30-31, 39-40); Davis Props. 4.1.1 ff.
- Deps (16): A1-A5 and the symmetric-group/coset suppliers.
- Repairs made in this pass: (i) the coset statement now pins the sets `W_J a={ua:u∈W_J}` and
  `aW_J={au:u∈W_J}` explicitly, so the left/right naming used by the plan cannot be misread
  against `[[def-coset]]`'s `gH`/`Hg` convention; (ii) `[F7]` now quotes `[[def-coset]]` exactly
  (the earlier restatement attributed a "cosets partition" sentence to a source that does not
  contain one — the disjoint-and-exhaust claim is instead checked by enumeration in the B5
  example's step 2.1); (iii) part (4) records the order-preserving letter identification
  `{1,…,n} ≅ {0,…,n−1}` under which `(i i+1)` is the library's `(i−1 i)`.
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (9 citations, 4 derivations, 8/8).

### 5 (page B). `ex-hh-exchange-deletion-on-a-nonreduced-word` — decision `accept` (newly authored)

- Claim/conventions: in `I₂(3)`, the exchange step `s·st=t` deletes the first letter; the prefix
  reflections of `(s,t,s,t)` are `s,sts,t,s` with `r₁=r₄`, licensing the deletion of the first
  and last letters (`stst=ts`); `Φ(stst)={sts,t}` and the pair `{1,3}` fails to preserve the
  value.
- Sources: Davis Lemma 3.2.6; Lusztig 1.6 and Prop. 1.7.
- Deps (5): A1, A3, A4, B2, `def-group-power`.
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (6 citations, 5 derivations, 8/8).

### 6 (page B). `ex-hh-type-a-reduced-words-and-inversions` — decision `accept` (newly authored)

- Claim/conventions: `S₃` table with `ℓ=inv` (permutations displayed on `{1,2,3}` under the
  declared order-preserving shift to the library's `{0,1,2}`); reducedness of `(s₁,s₂)`,
  `(s₂,s₁)`, `(s₁,s₂,s₁)`; the braid move `s₁s₂s₁=s₂s₁s₂`; the nonreduced word
  `(s₁,s₂,s₁,s₂)` with its first-last-letter deletion.
- Sources: Björner-Brenti Props. 1.5.2/1.5.4; Davis Example 6.7.1.
- Deps (7): A1, A3, A4, A6, B2, `def-finite-symmetric-group-and-permutation-notation`,
  `def-inversions-inversion-number-and-sign`.
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (5 citations, 5 derivations, 8/8).

### 7 (page B). `ex-hh-minimal-representatives-for-s2-in-s3` — decision `repaired`

- Claim/conventions: the three cosets `W_J a={ua:u∈W_J}` (`J={s₁}`) with minimal representatives
  `1,s₂,s₂s₁` and the descent characterisation; additivity `ℓ(s₁w)=ℓ(s₁)+ℓ(w)`; the dual
  cosets `aW_J={au:u∈W_J}` with representatives `1,s₂,s₁s₂` and `ℓ(ds₁)=ℓ(d)+1`.
- Sources: Lusztig Lemma 9.7; Björner-Brenti Prop. 2.4.4/Cor. 2.4.5.
- Deps (6): A1, A3, A6, `def-coset`, `def-finite-symmetric-group-and-permutation-notation`, B4.
- Repairs made in this pass: the `[F1]` restatement follows the repaired A6 statement (sets
  pinned), the `[F4]` restatement quotes `[[def-coset]]` exactly, and step 1.1 cites `[F2]` for
  `W_J=<J>`.
- Checks: precheck PASS, proof-layout 0, rendercheck, content-policy, strict contract
  (7 citations, 5 derivations, 8/8).

## Advisories carried from Step 3a — disposition

- (a) "Coxeter system" naming: applied in A1's Definition (Terminology clause); no manifest
  edit, so the 3a scope hash is unchanged.
- (b) `ℓ(w)=ℓ(w^{-1})`: proved explicitly in A4's step 1.3 (reversal of a reduced word) and used
  in A4's right-handed exchange; A6 cites the same computation in its coset step.
- (c) stale plan locator "Lusztig Thm 1.9 pp. 4-5": the item sources carry the stamped revised
  edition locator (printed pp. 13-14). Plan text unchanged; owner may amend.
- (d) B-page citations: every linked use is either in the item's own `deps` (B1: A1-A4;
  B2-B5 as listed above) or an inlined one-line computation; no linked citation is undeclared.
- (e) seven `redundant-prereq` advisories on the A page's `requires`: untouched (owner-approved
  plan array; re-confirmed by `validate-plan`).

## Published concerns (report only; not defects of this pair)

1. **Left/right coset naming inconsistency in the published corpus** (confirmed, low severity,
   naming only). `[[def-coset]]` defines the *left* coset as `gH={gh}` and the *right* coset as
   `Hg={hg}`. Several Coxeter-batch items use the opposite convention — the run's
   `def-cg-parabolic-quotient-and-two-sided-minima` (which prints "the left coset `W_Iw`")
   among them, while `def-cg-finite-reflection-arrangement-and-spherical-chambers` and
   `def-cg-spherical-nerve-coset-poset-and-davis-realization` follow `def-coset`. The HH-11 pair
   uses the Coxeter-theory convention (`W_J a` = left coset) but every statement of this pair
   now defines its sets explicitly, so no mathematical claim depends on the adjective. Repair
   strategy: one owner decision on the corpus convention, then an editorial sweep of the
   affected items' wording (no statement content changes). Owner ids to check: `def-coset`,
   `def-cg-parabolic-quotient-and-two-sided-minima`,
   `def-cg-finite-reflection-arrangement-and-spherical-chambers`,
   `def-cg-spherical-nerve-coset-poset-and-davis-realization`.
2. **Pre-existing published debt outside this pair.** Repo-wide `depcheck` reports ~2731
   `published-unaudited` rows, 173 `cited-not-in-deps`, 145 `multi-home`, 50 `link-unresolved`
   and 20 `dep-unresolved` findings; none of the 11 ids, the two pages, or any of their cited
   suppliers appears in any of them (checked mechanically). Recorded so the owner does not read
   a repo-wide failure as a batch-2 finding. No new supplier can repair it.
3. **Sibling typo, not ours:** `items/ex-cg-infinite-dihedral-growth.md` links
   `[[thm-hh-coexeter-exchange-deletion-and-faithfulness]]` (misspelt `coxeter`), which does not
   resolve. That batch's owner should repair the link; the correct id is
   `thm-hh-coxeter-exchange-deletion-and-faithfulness`.

## Checks actually run (2026-10-07, on the final bytes)

- `node tools/tsx-run.mjs tools/author-check.mts frontier-42-coxeter-32 2` — ok; all four
  sub-gates pass (precheck, rendercheck, content-policy items, proof-contract `--strict`);
  artifact `research/frontier-42-coxeter-32-author-check-2.json`.
- `node tools/tsx-run.mjs tools/precheck.mts <11 explicit item paths>` — 9 proof-bearing items
  PASS (2 definitions n/a).
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-2.proof-contracts.json --strict`
  — 11/11 items, 56 citations, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs <11 explicit item paths>` — 11 items, 47 steps, 0 defects.
- `node tools/rendercheck.mjs <11 items + 2 pages>` — OK (13 files: all math parses, YAML valid).
- `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — 11 scoped
  items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` — the only error is
  another batch's `ex-cg-reducible-semidefinite-forms-are-factorwise` (level 15 vs 16); every
  batch-2 level matches the computed value (0,1,2,3,4,4,4,5,5,6,7).
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <pair selection>` — OK;
  acyclic, no item-level cycles, forward references or B-page dependencies among the pair; the
  seven documented `redundant-prereq` advisories remain.
- `node tools/depcheck.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — exits 1 on the
  repo-wide pre-existing debt of concern 2; zero findings name the 11 items or the two pages.
- `node tools/extcheck.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — OK.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-2.coverage.json
  --require-destination` — 1 page, 36 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-2.pages.json` — 11 items,
  0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` — exit 0; the
  batch-2 input carries one refreshed `page` row for `tensor-coherence-and-algebraic-descent`
  (status `open`, reading-order only; no batch-1 item is used by any authored proof).
- `node tools/step3-decisions.mjs record-item …` for all 11 ids — each closes with confidence 1
  (7 `accept`; 4 `repaired`: `lem-hh-dihedral-root-recurrence-and-root-sign`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`,
  `ex-hh-rank-one-reduced-words`, `ex-hh-minimal-representatives-for-s2-in-s3`); the
  `check --phase final` work list contains no batch-2 item and no batch-2 page.

## Handoff

- **Completed IDs (11).** A page: `def-hh-coxeter-matrix-word-group-and-length`,
  `def-hh-geometric-coxeter-representation-and-roots`,
  `lem-hh-dihedral-root-recurrence-and-root-sign`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `thm-hh-matsumoto-reduced-word-theorem`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`. B page:
  `ex-hh-rank-one-reduced-words`, `ex-hh-finite-dihedral-reduced-words`,
  `ex-hh-exchange-deletion-on-a-nonreduced-word`, `ex-hh-type-a-reduced-words-and-inversions`,
  `ex-hh-minimal-representatives-for-s2-in-s3`. Pages registered:
  `library/coxeter-groups/coxeter-presentations-exchange-and-reduced-word-theorems{,-examples}.md`
  (items/examples lists populated; prose refreshed to describe the authored content and the
  declared letter convention).
- **Added suppliers / registrations.** No item was created beyond the five scaffolded B examples;
  manifest rows are preserved. Batch-2 proof contracts registered as
  `research/frontier-42-coxeter-32-batch-2.proof-contracts.json` (11 items). Cross-batch input
  refreshed (one page-level `open` row; no item-level use).
- **Open obligations.** (i) the page-level reading-order prerequisite
  `tensor-coherence-and-algebraic-descent` (batch 1) remains `open`: no batch-2 proof uses any of
  its items, and no consuming step is flagged; (ii) the published-concern items above are
  owner-held (naming convention; repo-wide debt; a sibling typo); (iii) thorough independent
  mathematical audit and defect repair follow in Steps 5-8 — nothing here is claimed as an
  independent review.
- **Honest uncertainty.** The Matsumoto induction (A5) is the pair's high-risk proof; its
  one-step reduction, iteration and final dihedral stage were checked in detail against the
  structure of Lusztig's Theorem 1.9, but no independent reader has audited it yet. The coset
  naming convention (concern 1) is the only terminology uncertainty; every statement that uses
  it defines its sets explicitly.
