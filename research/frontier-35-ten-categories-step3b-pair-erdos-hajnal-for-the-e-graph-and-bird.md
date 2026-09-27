# Step 3b dispatch report — scaffold auditor and item author: `erdos-hajnal-for-the-e-graph-and-bird`

Run `frontier-35-ten-categories`; batch 1 (shared with the sibling pair 222.1/222.2
`finite-abelian-characters-for-combinatorics`, owned by another group — its rows in
every shared batch file are left untouched). Role `alpha-high`, label
`step3b-pair-erdos-hajnal-for-the-e-graph-and-bird-ef65a8eb93d01d21`.
A page `erdos-hajnal-for-the-e-graph-and-bird` (order 441), B page
`erdos-hajnal-for-the-e-graph-and-bird-examples` (order 442).

## Sources read in this dispatch

- Huang, Ju and Zhou, *Erdős–Hajnal beyond the five-vertex path*, v2
  (`https://arxiv.org/pdf/2606.06258v2`, local copy `/tmp/hjz-2606.pdf`, 511426
  bytes, sha256_16 `dcc66383bc33fdfb` — matches the Step-1 fetch record).
  Read in full this session: §1.4 (Theorems 1.10–1.11 and Figures 4–5, PDF
  pp. 4–5), §2 (conventions, comb/blockade definitions, §2.1 leaf-reducibility
  and wonderfulness with Lemma 2.2, PDF pp. 6–8), §5 tail (Lemma 5.1
  completion, PDF p. 25), §6 complete (opening deduction, Lemmas 6.1–6.2,
  §6.1 Lemma 6.3 and Lemma 6.4 with Claims 6.4.1–6.4.3, §6.2 Lemma 6.5 with
  Claims 6.5.1–6.5.3, PDF pp. 25–33). Key locators: the §2.1 sentence "Note
  that E-graph and Bird are leaf-reducible" (PDF pp. 7–8); the §6 opening
  deduction that co-`E`-free and co-Bird-free graphs satisfy the hypothesis of
  Lemma 5.1 (PDF p. 25); Theorem 1.10/1.11 statements (PDF pp. 4–5).
- Tung H. Nguyen, *Notes on Recent Work on the Erdős–Hajnal Conjecture*
  (`https://web.math.princeton.edu/~tunghn/ehnotes.pdf`, fetch-verified in the
  Step-1 coverage record), Section 5 iterative-sparsification context, used
  only as orientation for the restricted-set/blockade exponent mechanism.
- Every cited library item's statement/definition was read at the point of use;
  the exact texts are recorded verbatim in
  `research/frontier-35-ten-categories-batch-1.proof-contracts.json`.
- Owner authoring direction read: `research/frontier-35-ten-categories-owner-authoring-direction.md`
  defers batch 8's smooth-projective Serre-duality/flag-variety pair and batch
  13's `thm-pseudointersection-number-equals-tower-number`. Neither deferral
  touches this pair, and no obligation from that direction is retained here.

## Completed IDs

| # | item | page | status | precheck | item decision |
|---|---|---|---|---|---|
| 1 | `lem-the-e-graph-and-the-bird-are-leaf-reducible` | A | authored | PASS (direct) | repaired (layer numbering) |
| 2 | `cor-the-e-graph-is-generalized-nice` | A | authored | PASS (direct) | accept |
| 3 | `thm-the-e-graph-has-the-erdos-hajnal-property` (landmark) | A | authored | PASS (direct) | accept |
| 4 | `cor-the-singleton-family-containing-bird-has-property-star` | A | authored | PASS (direct) | repaired (clause-reference rewrite) |
| 5 | `cor-the-bird-graph-is-generalized-nice` | A | authored | PASS (direct) | accept |
| 6 | `thm-the-bird-graph-has-the-erdos-hajnal-property` (landmark) | A | authored | PASS (direct) | accept |
| 7 | `ex-the-e-graph-theorem-properly-extends-the-p-five-case` | B | authored | PASS (direct) | accept |
| 8 | `ex-the-bird-theorem-properly-extends-the-bull-case` | B | authored | PASS (direct) | accept |

Pages: `library/combinatorics/erdos-hajnal-for-the-e-graph-and-bird.md` (A) and
`library/combinatorics/erdos-hajnal-for-the-e-graph-and-bird-examples.md` (B)
are both written; the A body is two paragraphs (109 and 89 words), the B page
follows the sibling pair's examples-page shape (`items: []`, `examples: [...]`).

## Item notes (exact claims, conventions, dependencies, decisions)

1. `lem-the-e-graph-and-the-bird-are-leaf-reducible` (A). Claim: $\{E\}$ and
   $\{\mathrm{Bird}\}$ are leaf-reducible; $E-\{q\}\cong P_5$ (the map
   $\varphi(i)=p_{i+1}$ matches all four edges and all nonadjacencies),
   Bird$-\{w\}$ is the bull, and both reduced singleton families have the
   Erdős-Hajnal property (published $P_5$ and bull corollaries). Deps: 13,
   all published and earlier. No new definition or lemma was needed.
2. `cor-the-e-graph-is-generalized-nice` (A). Route: published
   `cor-the-singleton-family-containing-e-has-property-star` + local
   leaf-reducibility + published Lemma 4.5 implication
   (`thm-property-star-and-leaf-reducibility-imply-generalized-niceness`).
   Step 2.1 records the whole property-$(*)$ supplier chain explicitly: the
   published local criterion (`thm-special-vertex-local-...`) at
   $\mathcal F_1=\mathcal F_2=\{H_5,\mathrm{co}\text{-}E\}$; the published
   Lemma 6.3 item `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property`;
   the co-$E$ comb partition
   (`thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`);
   the constant lowered into $(0,1]$ by
   `lem-erdos-hajnal-constants-are-downward-closed`; and the leaf/co-leaf
   transfer `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`
   applied to the pendant vertex $v_i'$ of $H_i$ and to $q$ — a leaf of $E$
   with degree $4=6-2$ in co-$E$, hence a co-leaf
   (`def-coleaf-of-a-graph`).
3. `thm-the-e-graph-has-the-erdos-hajnal-property` (A, landmark). Theorem 1.10
   with an unspecified positive exponent $\epsilon_E$: the three published
   family hypotheses (local generalized niceness, local leaf-reducibility,
   published wonderfulness `lem-the-e-graph-and-the-bird-graph-are-wonderful`)
   through the published generic theorem, then the definitional unwinding of
   the Erdős-Hajnal constant via $\operatorname{hom}$ and heredity of the
   $E$-free class. No numerical exponent is claimed.
4. `cor-the-singleton-family-containing-bird-has-property-star` (A). Property
   $(*)$ for $\{\mathrm{Bird}\}$ via the published local criterion with
   $\mathcal F_1=\mathcal F_2=\{E\}$: the local $E$ theorem gives the constant,
   $c=\min\{\epsilon_E,1\}\in(0,1]$ by downward closure, and the published
   co-Bird comb partition
   (`thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition`)
   supplies the local clauses in every co-Bird-free graph. Complement
   direction fixed explicitly in step 1.2. Dependency order preserved:
   $E$ before Bird, and the $E$ theorem enters only here, never as a forward
   input.
5. `cor-the-bird-graph-is-generalized-nice` (A). Route: item 4 +
   leaf-reducibility to the bull (item 1) + the published Lemma 4.5
   implication, with the ambient class fixed as the co-Bird-free class.
6. `thm-the-bird-graph-has-the-erdos-hajnal-property` (A, landmark).
   Theorem 1.11 by the same generic reduction; exponent $\epsilon_B$
   unspecified.
7. `ex-the-e-graph-theorem-properly-extends-the-p-five-case` (B). Witnesses:
   $P_5$ is $E$-free (six vertices cannot inject into five) but not $P_5$-free
   (identity embedding); every induced copy of $E$ restricts to an induced
   $P_5$, so $P_5$-free $\subsetneq$ $E$-free; hence the $E$ theorem covers a
   strictly larger forbidden-pattern class than the $P_5$ theorem, with no
   comparison of exponents.
8. `ex-the-bird-theorem-properly-extends-the-bull-case` (B). Bird analogue:
   the bull is Bird-free but not bull-free, every bull-free graph is
   Bird-free, strict containment of hypothesis classes.

Both B-page items have `provenance.statement: ai-generated` with
`generation.role: example`, the only permitted leaf class; no item cites them.

## Local scaffold repairs and additions

- No new pairs, items, definitions or lemmas were added: every prerequisite of
  the pair was already published earlier in the library, so all "local supplier"
  work was registration of the existing published suppliers in the item deps,
  the batch manifest rows, the coverage rows and the proof contracts.
- Item 1: adopted precheck's canonical layer numbering
  (1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1) by hand. `tools/adopt-repair.mjs`
  is unusable in this environment (its `npx` cache write lands on a read-only
  home); the numbering was applied from the precheck REPAIR block with no
  change to the mathematical content.
- Item 4: the scaffold's step 1.3 referred to the criterion's clause labels
  "(2.1) and (2.2) … (2.3)", which the proof-contract token grammar reads as
  references to non-existent proof steps 2.2 and 2.3 (unfixable by inputs, since
  such an input is itself rejected). Rewritten to cite the numbered clauses of
  `def-structural-comb-partition-hypothesis` (clause 1; clause 2 with its three
  requirements; clause 3). Content is identical; precheck and the strict
  contract check both pass on the rewritten item.
- Manifest deps: for the two owned pages only, each manifest item's `deps` was
  unioned with the item file's frontmatter `deps` (scaffold ∪ authored), so the
  manifest carries the full dependency list. Sibling rows were preserved
  verbatim.
- Batch files touched: `research/frontier-35-ten-categories-batch-1.pages.json`
  (owned rows only), `...-batch-1.proof-contracts.json` (sibling entries and
  scope preserved byte-identically; 8 entries appended),
  `...-batch-1.cross-batch-dependencies.json` (left `[]`),
  `...-batch-1.coverage.json` (unchanged; already points at our items), and the
  8 item files + 2 page files.

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts items/<each of the 8 items>.md` —
  8/8 PASS (direct). Item 4 re-run after the clause rewrite: PASS.
- `node tools/rendercheck.mjs` over the 8 items and 2 pages — OK, 10 files: no
  wikilink inside math, no unbalanced delimiters, no multiline display block,
  every span parses under KaTeX, every frontmatter parses.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-1.proof-contracts.json --strict`
  — 0 errors, 0 warnings, 11/11 items; the same command restricted with
  `--items` to the 8 owned ids — 0 errors, 0 warnings, 8/8.
- `node tools/citation-fidelity.mjs ...` — 117 citations over 11 items; no
  quote-not-found, no widening candidates.
- `node tools/boundary-audit.mjs ...` — 88 rows, 32 not-applicable; after
  making the $(*)$-item `iff` rationales item-specific there is no template
  cluster at the threshold. Three `empty` rows of this pair remain on the
  tool's heuristic read-list only because the item text contains the word
  "family"; each gives an item-specific reason and none is an error.
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-1.pages.json`
  — 12 items, 0 errors.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-1.pages.json`
  — 0 errors, 0 warnings over 12 scoped items.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK: declared order
  acyclic and consistent across the 1188 pages carrying item lists (the 431
  planned pages without item lists include our 441/442, see open obligations).
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-1.coverage.json --require-destination`
  — 0 errors, 2 low-yield warnings (one per page of the batch); every decline
  row carries an in-row reason.
- `node tools/audit-manifest.mjs research/frontier-35-ten-categories-batch-1.pages.json`
  — 125 relationships over 12 items, 0 defects; every relationship of this pair
  is published-backward or same-batch.
- `node tools/manifest-integrity.mjs --run frontier-35-ten-categories` —
  52 pages owed, 52 in the manifests, no scope drift.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`
  — refreshed and deduplicated; batch 1 appears under `reviewed_batches` with no
  cross-batch edge.
- `node tools/depcheck.mjs --quiet` — repo-wide pre-existing findings only
  (633 rows, e.g. `published-unaudited` stamps and B-leaf content elsewhere);
  no row names any of this pair's 8 items or 2 pages.
- `node tools/step3-decisions.mjs record-item --run frontier-35-ten-categories ...`
  — 8 receipts written (`repaired` for items 1 and 4, `accept` for the other
  six), each confidence 1 with the examined dependency ids and a concrete
  evidence reason; `check --phase scope` shows this pair closed, and
  `check --phase final` lists none of the 8 items as open work (the run-level
  exit code is red only for other pairs still authoring).

## The Axiom of Choice

No AC and no choice principle is used anywhere in this pair. Every quantified
object is a finite graph or finite family and every proof step is a finite
adjacency/edge-list check or a citation of a published finite reduction
(including the published Erdős-Hajnal constants and the recursive reductions
inside those published items). No selection from a family of merely nonempty
sets occurs; each item's Remarks record this and the dependency declarations
name no choice item. The assumption is therefore neither declared nor
propagated.

## Published concerns (owner-visible)

1. **Dependency hygiene, not a confirmed defect.** The published
   `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` states the
   leaf/co-leaf transfer as a source-quoted fact `[F4]` (HJZ Corollary 1.8) and
   uses it in its induction step, while the published library item
   `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`
   implements exactly that transfer and is absent from its `deps`. SCHEMA
   permits source-cited facts, so this is a hygiene gap rather than a
   mathematical error; the local supply is now recorded on
   `cor-the-e-graph-is-generalized-nice`, which declares the library corollary
   as a dependency. Recommendation: the owner/serial reconciler notes the
   missing supplier in `research/published-consumer-supplier-ledger.md`
   (that file is not edited by this dispatch). Confidence: high that the two
   statements are the same transfer; no claim of a defect in the published
   proof is made.
2. **Source wording.** HJZ §6.2's heading says "Bird-free" while Lemma 6.5 and
   its use are co-Bird-free; the plan already records this correction (§16.5).
   Our items keep co-Bird-free throughout. No action required.
3. No other potentially defective published item was found at point of use:
   the $E$/Bird/bull/$P_5$ definitions, generalized niceness, property $(*)$,
   the two comb-partition theorems, the local criterion, the leaf/co-leaf
   transfer, the generic Lemma 3.5 item, constant downward-closure, complement
   invariance and heredity were each checked against the hypotheses used.

## Cross-batch dependency ledger

`research/frontier-35-ten-categories-batch-1.cross-batch-dependencies.json`
stays `[]`: every in-run dependency of the two owned pages lives inside batch 1
(this pair's own items, in prerequisite order 1 → 2 → 3 → 4 → 5 → 6 and then
7, 8), and every other dependency is a published item outside the run. The
sibling pair's rows in that file and in `research/frontier-35-ten-categories-batch-1.pages.json`
are preserved. After the edits, the refresh was re-run; the unified ledger
shows batch 1 reviewed with 0 edges.

## Open obligations

- **Step 4 pre-splice plan mismatch (report, do not hide).**
  `research/plan-spec.json` entries `erdos-hajnal-for-the-e-graph-and-bird` and
  `erdos-hajnal-for-the-e-graph-and-bird-examples` carry empty `items` arrays,
  while the batch manifest lists 6 + 2 items. The plan must be spliced
  (`tools/splice-plan.mjs`) before its item lists can be used to validate this
  pair; `validate-plan` currently reports the two pages among the 431 planned
  pages without item lists.
- The Step-3a scope decision is the review receipt
  `research/frontier-35-ten-categories-step3a-review-erdos-hajnal-for-the-e-graph-and-bird.json`,
  decision `sufficient`, sha `3df6df0c1116d804…`; it binds only
  id/kind/title/statement, all unchanged by this dispatch (item 4's only text
  change was inside its proof), and `check --phase scope` confirms the pair is
  closed. No owner ruling was invented.
- The published-item concern in §"Published concerns" item 1 is handed to the
  owner/serial reconciler; it does not block the sound new suppliers here.
- No escalations, no owner-held items and no unresolved source uncertainty
  remain for this pair.

## Next action

Step 4 serial reconciliation: splice the two plan entries from the batch
manifest, record the published-supplier hygiene note, and leave the pair's
authored items to the engine's post-author inventory certification. No further
authoring is required for `erdos-hajnal-for-the-e-graph-and-bird`.
