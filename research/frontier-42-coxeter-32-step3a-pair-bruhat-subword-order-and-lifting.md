# Step 3a scope review — pair `bruhat-subword-order-and-lifting`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-bruhat-subword-order-and-lifting-f7f7e3d1f8d05f2c` · design label CG-09.

- A page: `bruhat-subword-order-and-lifting` (order 1740, batch 12, kind A).
- B page: `bruhat-subword-order-and-lifting-examples` (order 1741, batch 12, kind B).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-bruhat-subword-order-and-lifting.json`.

## Inputs read

`research/frontier-42-coxeter-32-batch-12.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`; `library/coxeter-groups/bruhat-subword-order-and-lifting{,-examples}.md`;
`research/plan-coxeter-groups-track.md` §CG-09 (lines 261–274); `research/plan-spec.json`
(orders 1740/1741, requires); `research/frontier-42-coxeter-32-owner-authoring-direction.md`;
`research/frontier-42-coxeter-32-scope-ledger.json`; `research/frontier-42-coxeter-32-owner-scope.json`;
`research/frontier-42-coxeter-32-alpha-step1-drift.md` § `bruhat-subword-order-and-lifting`;
the current statements of every cross-batch supplier item used by the pair; and the batch-16
manifest/coverage for the recorded deferral destination.

## 1. Prose design versus scaffold (A page)

The library prose page names four ordered supplier contracts; the scaffold keeps all four ids,
kinds and order, and adds two local items that the design already presupposes by name.

| Design contract (plan §CG-09 and native prose) | Scaffolded item(s) | Coverage |
|---|---|---|
| `def-cg-bruhat-order-by-reflection-chains` — order by a finite chain `u_{i+1}=u_i t_i`, `t_i∈T`, strictly increasing length; empty chain allowed; intervals and rank only after partial order and saturated chains | `def-cg-bruhat-order-by-reflection-chains` (graph, order, partial order (2), inversion symmetry (3), reflection parity (4), `1≤w`); intervals/rank deliberately deferred to A4 | complete |
| `thm-cg-bruhat-subword-characterization` — `u≤v` iff a subword of any fixed reduced expression of `v`, subword reducible; both directions; Matsumoto not used as a substitute | `thm-cg-bruhat-subword-characterization` (both directions, independence (a)⇔(b)⇔(c), empty subword) | complete |
| `thm-cg-bruhat-lifting-and-cover-criterion` — descent/ascent lifting `us≤v`, `u≤vs`, the same-direction variants "with all inequalities", covers iff lengths differ by one and reflection deletion gives the lower element, using the chain refinement lemma; all intervals finite and graded by length | `thm-cg-bruhat-lifting-and-cover-criterion` (1) all four cases (a)–(d), (2) cover criterion, (3) reflection deletion, (4) directedness; plus `lem-cg-bruhat-chain-refinement-and-gradedness` (1) finiteness `|[u,v]|≤2^{ℓ(v)}`, (2) refinement with length steps one, (3) gradedness/rank `ℓ` | complete |
| `thm-cg-bruhat-parabolic-projection-and-quotients` — minimal-coset projection `P^I` order-preserving; quotient inherits subword criterion and length rank; exact finite/infinite hypotheses, no longest element presumed | `thm-cg-bruhat-parabolic-projection-and-quotients` (1) order-preservation and `P^I(w)≤w` with equality iff `w∈W^I`, (2) covers over `W^I`, (3) chain in `W^I` with length steps one plus grading and finiteness of `[u,w]^I`, (4) directedness, unique maximum only if `W^I` is finite, explicit no-longest-element caveat | complete |

Local additions, in prerequisite order, are prerequisite completion rather than scope change:

- `lem-cg-bruhat-right-exchange-and-augmentation` supplies the right-handed strong exchange
  (with uniqueness of the deleted index and the explicit `t=(s_q⋯s_{i+1})s_i(s_{i+1}⋯s_q)`)
  that contract 2's proof route names, and the augmentation step of Björner–Brenti Lemma 2.2.1.
- `lem-cg-bruhat-chain-refinement-and-gradedness` is the "chain refinement lemma" that
  contract 3 explicitly back-references and the item in which "all intervals finite and
  graded by simple length" is stated.

The lifting claim keeps the richest designed form: the full four-case descent/ascent table with
all valid inequalities (the trivially valid companions `u≤vs` in the same-ascent case and
`us≤v` in the same-descent case are stated, not dropped). The two `S_4` witnesses of B2
exhibit cases (a) and (c) as sharp — the dropped-hypothesis content the B prose promises.

## 2. B companion versus design

Design B task: "Compute subwords, reflection covers and lifting squares in S4. Contrast weak
and Bruhat comparability, and give two expressions of the same element whose subword
descriptions must agree."

| Design B component | B item | Coverage |
|---|---|---|
| subwords, reflection deletions, covers of `w_0` in `S_4` | `ex-cg-s4-subwords-and-covers` | complete |
| lifting squares (one instance of each of the four cases) | `ex-cg-s4-lifting-squares` | complete |
| weak versus Bruhat comparability | `ex-cg-s4-bruhat-versus-weak-comparability` | complete |
| two expressions with agreeing subword descriptions | `ex-cg-s4-subword-descriptions-agree` | complete |

The B page is a consumption leaf as its prose requires: plan-wide scans show no page's
`requires` list and no item outside the pair depends on any of its four items; its items depend
only on the A page's items and on published/scaffolded earlier suppliers.

## 3. Source coverage

`batch-12.coverage.json` records one page (the A page) with four fetch-verified independent
sources: Björner–Brenti (textbook, §2.1 pp. 27–32, §2.2 pp. 33–36, §2.5 pp. 42–44, with the
raw pages carrying Lemma 2.2.1 re-read for the deleted-letter convention), Denton (3-page
lecture note, read in full, short-document receipt attached), Marberg (Lecture 11, §§1–2 read),
and Barkley (Lecture 3 read through §2). 37 harvested results are dispositioned: 23 `included`,
6 `inline`, 7 `out-of-scope` (each with a stated reason tied to this pair's contracts), and
1 `deferred`: Björner–Brenti §§2.3, 2.6–2.7 to `bruhat-interval-labels-shellings-and-mobius-functions`.

The deferral destination is present in the run and wired both ways: batch 16 (order 1748)
requires this A page, and its own coverage defers Lemma 2.2.1 / Proposition 2.2.7 / Theorem
2.2.2 / Corollary 2.2.4 / Theorem 2.2.6 back to this pair, so the deferred interval-structure
material has a live home and no harvested result is orphaned. The two further source items
declared out of scope (type-A rank criterion/Gale order; the finite-case longest-element
theory) belong to other planned pairs and are not consumed by any claim of this pair.

The B page has no coverage-file entry (22 of the 32 batch coverage files are A-page-only); its
items are `ai-generated` finite `S_4` computations whose general theorems are the A page's,
carry per-item source references (Björner–Brenti §2.1–2.2, Denton), and the batch note records
exhaustive-enumeration cross-checks for exactly these claims. This is the run's established
convention for B pages and not a scope gap.

## 4. Prerequisite availability

- Dependency resolution scan over the current manifests: all **68** item dependency edges of
  the ten items resolve — **19** to published items (`def-group`, `def-natural-numbers`,
  `def-finite-symmetric-group-and-permutation-notation`, `def-inversions-inversion-number-and-sign`)
  and **49** to scaffolded items of this run (batches 2, 4, 7, 10 and within batch 12). No edge
  targets an id absent from both the published library and the current scaffold, and no edge
  points to a later batch.
- Page-requires closure: `coxeter-presentations-exchange-and-reduced-word-theorems` (1708) →
  `real-forms-and-reflection-geometry` (1724) → `canonical-roots-signs-and-faithful-reflections`
  (1730) → `parabolic-subgroups-and-double-coset-geometry` (1736) → this A page (1740); the
  batch-2 and batch-4 items used directly by A1 are inside this closure.
- The exact supplier clauses consumed were read in the current supplier statements:
  `def-hh-coxeter-matrix-word-group-and-length` (presented group, length, reduced expressions);
  `thm-hh-coxeter-exchange-deletion-and-faithfulness` (1) sign character with
  `ℓ(ws)=ℓ(w)±1` and parity, (2) exchange, (3) two-letter deletion;
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (3) unique minimal coset
  representatives, length additivity, `ℓ(x)=ℓ(x^{-1})` by inversion;
  `def-cg-canonical-reflection-homomorphism` (2) `T={wsw^{-1}}` closed under conjugation;
  `thm-cg-root-inversion-formulas-and-strong-exchange` (3) left-handed strong exchange with
  unique deleted index, the input to A2 (1);
  `def-cg-parabolic-quotient-and-two-sided-minima` (1),(2) `W_I`, `W^I`, `{}^IW` and the
  unique length-additive factorization; `thm-cg-parabolic-intersections-and-coset-factorization`
  (3) coset minima are global minima. Every used clause is stated by its supplier as required.
- **Confirmed unmet prerequisites: none.** Residual uncertainty (recorded honestly): this
  verification is at the current manifest/statement level. The supplier proofs and this pair's
  own proofs are Step 3b authoring work — no item files exist yet — so the prerequisites are
  "scaffolded, proofs pending", not certified. Nothing outside the published library and the
  current scaffold is required.

## 5. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-12.pages.json` | exit 0; 10 item(s), 0 normalized, 0 error(s) |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-12.coverage.json --require-destination` | exit 0; 1 page, 37 results, 0 error(s), 0 warning(s) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; declared order acyclic/consistent, no item cycles, forward refs, B-page deps or unresolved ids among the 1599 item-listed pages; for this pair only the informational `[redundant-prereq]` note (canonical-roots page is also reachable through the parabolic page) |
| dependency scan | ad-hoc script over all `batch-*.pages.json` + `items/` | 68/68 edges resolved; no external user of any B item; no page `requires` the B page |
| drift review | `research/frontier-42-coxeter-32-alpha-step1-drift.md` | `VERDICT: no-drift` for this pair; `step1-blockers.json` contains no batch-12 entry |

## 6. Non-blocking notes (documentation, no scope action)

1. The coverage line that bundles Björner–Brenti Theorem 2.2.2, Corollary 2.2.3 and Corollary
   2.2.4 under item `thm-cg-bruhat-subword-characterization` attributes Corollary 2.2.4
   (interval finiteness) to A3, while the scaffold actually states it in
   `lem-cg-bruhat-chain-refinement-and-gradedness` (1). The content is present in the pair;
   this is a coverage-bookkeeping slip only.
2. The batch note's tally "12 scaffolded (included), 8 absorbed inline" does not match the
   coverage file's disposition counts (23 included, 6 inline, 7 out-of-scope, 1 deferred;
   37 total). The coverage file itself passes the checklist; the note's arithmetic is stale.
3. Coexistence: published items `def-bruhat-order-on-a-finite-weyl-group`,
   `def-bruhat-order-on-the-symmetric-group`, `lem-bruhat-covers-are-reflection-covers`,
   `ex-weak-and-bruhat-orders-in-s-three`, `ex-s3-bruhat-order-and-inversion-sets` and
   `lem-bruhat-rank-two-intervals-are-diamonds` treat Bruhat material in other homes (finite
   Weyl groups, type A, applications). The general-Coxeter treatment here is the planned home
   (pathway part "finite-geometry-and-curvature-tools", and the consumer batch 16); no
   conflict or scope reduction is recorded.
4. This review assessed scope only; proof correctness is out of role and not asserted.

## 7. Decision

**`bruhat-subword-order-and-lifting`: sufficient.** The planned definitions (Bruhat graph and
order by length-increasing reflection chains, with inversion symmetry and reflection parity),
results (right-handed strong exchange, augmentation, subword characterization with expression
independence, chain refinement/finiteness/gradedness, four-case lifting, cover criterion,
reflection deletion, directedness, parabolic projection and quotient structure) and examples
(four `S_4` companions covering every design B task) adequately cover the intended subject of
CG-09. No omitted topic within the design or its sources was found, no enrichment or merger is
recommended, no unmet prerequisite was confirmed, and the recorded deferral destination is
live. Owner action: none required for scope; proceed.
