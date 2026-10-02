# Step 3b — pair `approximation-algorithms-and-gap-reductions` (final report)

- Run: `frontier-37-owner-30`; batch 17; A page `approximation-algorithms-and-gap-reductions`
  (order 651), B page `approximation-algorithms-and-gap-reductions-examples` (order 652).
  Batch 17 contains only this pair.
- Dispatch: `research/frontier-37-owner-30-step3b-pair-approximation-algorithms-and-gap-reductions-6d6ec0c866d04e51.task.md`.
- Status: **COMPLETE for Step 3b** — all 27 assigned items authored, contracts written, gates
  run, and item decisions recorded (`accept`/`repaired`, confidence 1). Independent mathematical
  audit and systematic defect repair remain Steps 5–8.

## Inputs read before authoring

- `CLAUDE.md`, `SCHEMA.md`; batch-17 manifest, coverage, notes, and the Step 3a scope-repair note
  `research/frontier-37-owner-30-scope-repair-approximation.md`;
  `research/frontier-37-owner-30-pre-splice-plan-findings.json` has no findings for this pair;
  `research/frontier-37-owner-30-owner-authoring-direction.md` does not exist.
- Scope decision `research/frontier-37-owner-30-step3a-owner-approximation-algorithms-and-gap-reductions.json`
  (`proceed`, sha256 `27b48b2e…`) still matches the current scope hash (the scope check reports this
  pair closed; no manifest statement, ID, kind, title, or item list was changed).
- Suppliers read in full: `thm-pcp-theorem-np-equals-pcp-log-n-o-one`,
  `def-pcp-class-with-completeness-and-soundness`, `def-pcp-verifier-randomness-query-and-proof-length`,
  `def-axiom-of-choice`, `def-set-cover`, `def-harmonic-number-for-set-cover-analysis`,
  `def-weighted-graph-and-minimum-spanning-tree`, `def-spanning-tree`,
  `thm-connected-iff-has-spanning-tree`, `thm-kruskals-minimum-spanning-tree-algorithm`,
  `thm-eulers-euler-circuit-characterisation`, `def-euler-trail-and-circuit`,
  `def-multigraph-and-digraph-degrees-and-connectivity`,
  `def-matching-maximum-perfect-and-matching-number`,
  `def-clique-independent-set-and-vertex-cover-problems`,
  `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-clique`,
  `thm-three-sat-is-np-complete`, `thm-linearity-of-expectation`, `def-finite-simple-graph`,
  `def-polynomial-time-many-one-reduction`, `lem-indicator-expectation-and-products`,
  `thm-product-probability-has-independent-coordinate-events`.
- Full sources re-verified against the recorded stamps: Williamson–Shmoys
  `https://designofapproxalgs.com/book.pdf` (500 pages, sha256_16 `f890311c5c9f5e6b`, local
  full text inspected), Arora–Barak `https://theory.cs.princeton.edu/complexity/book.pdf`
  (`da0881782a35bde6`), Ghaffari `S_18_01.pdf` (`622355925629596c`), Cornell `approx_algs.pdf`
  (`7f67c614c8719134`).

## Completed items (27/27; decision in parentheses)

Level 0: `def-harmonic-number-for-set-cover-analysis` (accept),
`def-optimization-problem-and-approximation-ratio` (repaired).

Level 1: `def-gap-problem-and-gap-preserving-reduction` (accept),
`def-greedy-set-cover` (repaired), `def-metric-tsp` (accept), `def-ptas-fptas-and-apx` (accept),
`thm-maximal-matching-is-a-two-approximation-for-vertex-cover` (repaired),
`thm-random-cut-has-expected-half-the-edges` (repaired).

Level 2: `def-l-reduction` (repaired),
`fs-exact-np-hardness-implies-no-constant-approximation` (repaired),
`lem-euler-double-tree-shortcutting-does-not-increase-cost` (accept),
`lem-gap-three-sat-reduces-to-gap-independent-set` (repaired),
`lem-greedy-set-cover-charging-bound` (accept),
`lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp` (accept),
`lem-pcp-verifier-reduces-to-gap-max-three-sat` (repaired),
`thm-conditional-expectation-derandomizes-max-cut-half-approximation` (accept).

Level 3: `def-apx-hardness-and-apx-completeness` (accept),
`thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp` (repaired),
`thm-greedy-set-cover-is-an-h-n-approximation` (accept),
`thm-independent-set-has-no-ptas-unless-p-equals-np` (accept),
`thm-max-three-sat-has-no-ptas-unless-p-equals-np` (accept),
`cex-exact-np-hardness-implies-no-constant-approximation` (accept),
`ex-conditional-expectation-for-a-small-max-cut-instance` (accept).

Level 4: `lem-l-reductions-transfer-apx-hardness` (accept),
`ex-double-tree-shortcutting-for-a-metric-tsp-instance` (accept),
`ex-greedy-set-cover-charging-bound` (repaired).

Level 5: `ex-l-reductions-transfer-apx-hardness` (repaired).

Every item was audited, repaired or authored, and checked before the next item in the
dispatch's dependency-level order; no later item was used to justify an earlier one.

## Checks actually run (exact commands and results)

- `node tools/tsx-run.mjs tools/precheck.mts` on all 27 explicit item paths:
  **19 checked, 0 failing** (8 definitions are `n/a` by design). Re-run after the last edits.
- `node tools/rendercheck.mjs` on all 27 items and both pages:
  **OK** (no wikilink in math, no unbalanced/nested delimiters, no multiline display blocks,
  all math parses under KaTeX, all frontmatter parses).
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-17.pages.json`:
  **27 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-17.proof-contracts.json --strict`:
  **27/27 items checked, 0 errors, 0 warnings** (101 exact citation entries, 107 numbered steps
  covered exactly once, 216 boundary dispositions).
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  **808 items across 60 pages, maximum level 31**, no finding for batch 17.
- `node tools/validate-plan.mjs research/plan-spec.json`: **OK** (acyclic and consistent).
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-17.coverage.json`:
  **36 harvested results, 0 errors, 0 warnings**.
- `node tools/prosecheck.mjs` on all 27 items and both pages: **0 errors, 0 warnings**
  (one heuristic `count-of-this-page` warning in `def-greedy-set-cover` was removed by rewording
  an ambiguous phrase; no positional claim contradicts the spec).
- `node tools/fwdcheck.mjs` and `node tools/depcheck.mjs`: repo-wide runs still report the
  pre-existing findings of other in-flight pairs; **zero occurrences of any of the 27 batch-17
  item files** in either report.
- `node tools/extcheck.mjs`: **OK**; no batch-17 item rests on material not proved in the library.
- `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final`: none of the
  27 items appears in the open-work list (all closed with `accept`/`repaired` at confidence 1);
  the remaining open items belong to other in-flight pairs.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`: **blocked by an
  external file** (see Open obligations); batch 17 itself has no cross-batch rows to refresh.

## Local scaffold repairs and additions (with exact evidence)

- `items/thm-random-cut-has-expected-half-the-edges.md`: repaired the misspelled source URL
  (`designofapproapproxalgs.com` → `https://designofapproxalgs.com/book.pdf`), matching the
  manifest and the verified source stamp.
- `items/thm-maximal-matching-is-a-two-approximation-for-vertex-cover.md` + manifest: added the
  published `def-finite-simple-graph` dependency actually cited by fact `[F1]` (no level change).
- `def-greedy-set-cover`: manifest dependency on the local level-0
  `def-harmonic-number-for-set-cover-analysis` added (item and manifest agree; level unchanged),
  and one vague count phrase reworded for prosecheck.
- `items/def-optimization-problem-and-approximation-ratio.md`: added an explicit **max-cut
  convention** paragraph (instances = finite simple graphs, feasible solution = bipartition,
  objective = number of crossing edges, attained optimum `OPT_MaxCut`, value-form 1/2 guarantee).
  This closes a genuine well-definedness gap: three item statements use `OPT_MaxCut` and no item in
  the library defined it. The three consuming facts (`thm-random-cut` F5,
  `thm-conditional-expectation` F2, `ex-conditional-expectation` F3) now cite that paragraph.
- `items/lem-pcp-verifier-reduces-to-gap-max-three-sat.md`: facts `[F4]` and `[F5]` were declared
  but unused; `[F4]` is now cited at step 3.1 (the clause conversion produces a 3-CNF of the
  stated format) and `[F5]` at steps 5.1 and 8.1 (scale `M` and the gap value inequalities).
  Step 1.1's citation bracket was narrowed to the facts actually used there.
- `items/thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp.md`: fact `[F2]`
  (MST definition and weight) was declared but unused; it is now cited at step 2.1 where the
  minimum total weight is used.
- `items/lem-gap-three-sat-reduces-to-gap-independent-set.md`: fact `[F1]` was trimmed to exactly
  what its two published suppliers state in citable sections (the 3-SAT language and the
  published 3-SAT→CLIQUE reduction); the unsupported literal/clause glossary sentence was dropped.
- `items/fs-exact-np-hardness-implies-no-constant-approximation.md`: fact `[F4]` trimmed to the
  finite-simple-graph definition it cites (the P4 example is step 3.1's own explicit object).
- `items/def-l-reduction.md`: the two-line display was joined to one source line after rendercheck
  flagged a multiline display block (mathematical content unchanged).
- `items/ex-greedy-set-cover-charging-bound.md`: the closing sentence now states both bound forms
  correctly (per-round `OPT/r` with that round's remaining count; per-element `OPT/(n-j+1)`).
- `items/ex-l-reductions-transfer-apx-hardness.md`: `proof_strategy: direct` added and step labels
  canonicalised so precheck passes.
- Manifest `deps` now equal file frontmatter `deps` for all 27 items (checked by set difference;
  every file dep appears in the manifest and conversely). Published suppliers used by the items:
  28 distinct external IDs, all `status: published`.

No new item, pair, or page was added; no promised result was dropped; no published content,
Recorded result, or other pair's file was edited. The A page has 22 items and the B page 5, as
in the repaired scope.

## Proof contracts

`research/frontier-37-owner-30-batch-17.proof-contracts.json` covers all 27 items: 101
`(fact, source)` citation entries (each an exact excerpt of the named source section, with the
complete list of steps that name the fact), 107 numbered proof steps each mapped exactly once to a
derivation entry with its actual claim and inputs, and 8 boundary dispositions per item (216 total)
covering empty, zero, one, degenerate, endpoints, nonempty-choice and both iff directions, with
step-anchored evidence or an item-specific not-applicable reason. Definition items carry empty
citation/derivation lists and the same boundary worksheet. The strict gate passes with no errors
and no warnings.

## Axiom of Choice statement and exact use

`def-axiom-of-choice` is a declared dependency of exactly three items:
`lem-pcp-verifier-reduces-to-gap-max-three-sat`, `thm-max-three-sat-has-no-ptas-unless-p-equals-np`
and `thm-independent-set-has-no-ptas-unless-p-equals-np`. Each of the three states the assumption
in its Statement ("every family of nonempty sets has a choice function") and propagates it to its
conclusion. The exact use is the **currently published PCP supplier proof route**
(`thm-pcp-theorem-np-equals-pcp-log-n-o-one`), which reaches a published algebraic
embedding-extension result whose proof invokes Zorn's lemma. The finite verifier-to-formula
unfolding, the clause-literal graph reduction and the threshold decision procedures use only
explicit finite choices; no other batch-17 item assumes AC, and no item assumes `P≠NP`.

## Supplier reconciliation and flags

- All suppliers are either published (28 distinct external IDs, verified `status: published`) or
  earlier items of this batch that are authored and closed before their consumers. **No supplier
  is a provisional in-run draft**, so the dispatch's unfinished-supplier flag does not apply to any
  consumer; no decision is escalated on that ground.
- Direct in-run prerequisite pairs to inspect: none (per the dispatch).
- `research/frontier-37-owner-30-batch-17.cross-batch-dependencies.json` remains `[]`, which the
  ledger protocol accepts only for a batch with no cross-batch dependencies: every supplier is a
  published library item outside this run's batches or an in-batch item, and the page `requires`
  pages are published pages not carried as batch manifests of this run. No row was invented.

## Published concerns

- **No confirmed defect** in any published supplier was found while authoring. The items rest on
  published suppliers with their stated hypotheses verified at the point of use.
- Published concern to route (recorded by Step 3a; propagated conservatively here, not
  independently re-audited in this dispatch): the published PCP supplier chain
  (`thm-pcp-theorem-np-equals-pcp-log-n-o-one` through
  `thm-margulis-family-has-uniform-spectral-gap`, the real and complex spectral theorems,
  `thm-the-complex-numbers-are-algebraically-closed`, the finite Galois/Artin steps) reaches the
  published `thm-algebraic-embedding-extension`, whose Statement assumes the Axiom of Choice and
  whose proof step 3.1 invokes Zorn's lemma. Evidence: the Step 3a scope report's confirmed
  declared-dependency path and that theorem's Statement/step 3.1 (the report also records that it
  did not re-audit every published step for proof use). Confidence: high that the AC assumption is
  present on the published route; whether every link in the declared chain is a genuine proof use,
  and whether the route can be repaired to avoid AC, is a Steps 5–8 question. Required suppliers:
  the published chain items; repair strategy: independent audit of the chain, then either repair it
  or keep the AC declaration in the three consumers. The serial reconciler should record this in
  `published-consumer-supplier-ledger.md`; this pair did not edit that file.
- Unverified suspicion carried from Step 3a's report (not confirmed here): the same report
  mentions an over-broad IVT-to-countable-choice dependency edge on the published chain that is
  not a proof use. I could not locate the exact edge from this batch's records and did not verify
  it; it is reported as a suspicion for the owner and Steps 5–8, with no invented IDs.
- The serial reconciler for `published-consumer-supplier-ledger.md` should be aware of the
  Max-Cut item-level gap recorded above: every published consumer using `OPT_MaxCut` outside this
  pair should cite the new convention paragraph in
  `def-optimization-problem-and-approximation-ratio`; inside this pair the three consumers do.

## Open obligations / escalations (owner)

1. **Ledger refresh blocked by other pairs.** `node tools/frontier-dependency-ledger.mjs refresh
   --run frontier-37-owner-30` fails while the tool parses sibling frontmatter: as of handoff it
   reports an invalid YAML escape `\i` at line 18 of
   `items/thm-hardy-littlewood-sobolev-fractional-integration.md` (batch 12) and an invalid
   YAML escape `\c` at line 26 of `items/def-modular-specht-form-and-radical-quotient.md`
   (batch 23); other in-flight edits may add or clear instances. This pair did not and must not
   edit those files. The unified ledger's last complete refresh shows all 30 batch inputs reviewed
   with no edge or orphan finding for batch 17; the refresh must be re-run after the owning pairs
   repair their frontmatter. Route to those owners / root. (A re-scan of all run item frontmatter
   with the repo's YAML parser found exactly these two files.)
2. **Plan-spec prerequisites (carried from Step 3a).** `research/plan-spec.json`'s A-page entry for
   this pair still lists only four of the six §49 `requires` pages; root was asked to add
   `trees-forests-and-spanning-trees` and `eulerian-and-hamiltonian-graphs`. The batch manifest and
   the page file already carry all six, and `validate-plan` passes; this is a shared-plan
   bookkeeping item owned by root.
3. No item-level escalation: all 27 items closed with `accept`/`repaired` at confidence 1 after
   complete authoring and the checks above. Steps 5–8 own independent auditing of these items.

## Handoff

- A page: `library/computability-theory/approximation-algorithms-and-gap-reductions.md`
  (22 items, `requires` = 6 pages, status `draft`).
- B page: `library/computability-theory/approximation-algorithms-and-gap-reductions-examples.md`
  (5 examples, status `draft`).
- Contracts: `research/frontier-37-owner-30-batch-17.proof-contracts.json`.
- Decisions: `research/frontier-37-owner-30-step3b-review-<item>.json` for all 27 items.
- Batch records: manifest, coverage, notes, and `cross-batch-dependencies.json` (`[]`).
