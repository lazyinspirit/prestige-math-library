# frontier-19 Alpha group d — Step 6b adjudication

## Checkpoint — 2026-08-26

Completed checks:
- Loaded the canonical Step 6 protocol from `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md`, then verified the active `frontier-19` run state from `tools/autopilot/bin/autopilot.mts status`.
- Parsed the exact routed queue from `research/frontier-19-step6-scope-{5,6,10}.json`, including the previously missed `pages_touched` obligation for `block-designs-and-finite-projective-planes`.
- Verified the reader and refuter evidence for all routed findings against current disk text and the cited dependency items, including the published Erdős–Hajnal dependency URLs.
- Confirmed and repaired the live mathematical defects on disk:
  - `thm-worpitzky-identity`: boundary-safe case split in step `3.1`, with the binomial-facts line narrowed to the exact hypotheses actually used.
  - `thm-bose-construction-produces-a-steiner-triple-system`: small-order exclusion aligned with the library’s `2`-design convention.
  - `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six`: title, Statement, proof, and dependency set narrowed to the library’s `v>3` convention.
  - `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`: step `7.2` now separates the zero-probability `h>2t` case before using the binomial survival formula.
- Repaired the published dependency citation metadata on:
  - `def-erdos-hajnal-property-and-constant`
  - `lem-erdos-hajnal-constants-are-downward-closed`
  and removed the stale published verification stamps that can no longer honestly attest the edited bytes.
- Claimed both published repairs through `node tools/published-repairs.mjs claim --run frontier-19 --group d ...`.
- Synced the stale batch manifests `research/frontier-19-batch-{5,6,10}.pages.json` to the current frontmatter/title state of the changed carriers, including the refuter-repaired `thm-worpitzky-identity` row.
- Ran `reflow` and `precheck` on the materially changed item files:
  - `items/thm-worpitzky-identity.md`
  - `items/thm-bose-construction-produces-a-steiner-triple-system.md`
  - `items/thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six.md`
  - `items/thm-a-finite-family-with-the-erdos-hajnal-property-is-viral.md`
  - `items/def-erdos-hajnal-property-and-constant.md`
  - `items/lem-erdos-hajnal-constants-are-downward-closed.md`

Changed artifacts so far:
- Item files:
  - `items/thm-worpitzky-identity.md`
  - `items/thm-bose-construction-produces-a-steiner-triple-system.md`
  - `items/thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six.md`
  - `items/thm-a-finite-family-with-the-erdos-hajnal-property-is-viral.md`
  - `items/def-erdos-hajnal-property-and-constant.md`
  - `items/lem-erdos-hajnal-constants-are-downward-closed.md`
- Page file:
  - `library/combinatorics/block-designs-and-finite-projective-planes.md`
- Batch manifests:
  - `research/frontier-19-batch-5.pages.json`
  - `research/frontier-19-batch-6.pages.json`
  - `research/frontier-19-batch-10.pages.json`
- Batch contracts already refreshed once and due one final regeneration pass after reflow:
  - `research/frontier-19-batch-5.proof-contracts.json`
  - `research/frontier-19-batch-6.proof-contracts.json`
  - `research/frontier-19-batch-10.proof-contracts.json`

Open constraints:
- The Step 6 report, decisions JSON, defect-ledger append file, and published-repair append file are not written yet.
- The reflowed theorem text requires one final `regen-contract-entries` pass before the batch contract/citation/boundary gates are trustworthy.
- I have not yet run the final 6b routing/stamp check or the focused contract/risk gates on the amended state.

Exact next action:
- Regenerate the affected contract entries from the reflowed item text, then write and append the Step 6 defect-ledger rows, published-repair rows, and `frontier-19-alpha-d-6b-decisions.json`, stamp the current carrier hashes with `step6-scope.mjs stamp`, and run the 6b routing plus focused contract/citation/boundary/risk gates on the final state.

## Final dispositions

### Batch 5

- `touched:5:def-combinatorial-specification-and-order-raising-recursion` — `accepted_repair`.
  The definition now introduces the coefficient ring before typing `F_\Phi : R[[x]] -> R[[x]]`; no further Alpha edit was needed.

- `touched:5:thm-order-raising-recursive-specifications-have-unique-solutions` — `accepted_repair`.
  The Statement and Given line now type the fixed-point theorem over an explicitly named commutative ring.

- `touched:5:cor-plane-trees-satisfy-t-equals-z-over-one-minus-t` — `amended_repair`.
  The reader’s proof repair is correct, and Alpha synced the added unit-criterion and formal-order dependencies into the batch manifest.

- `touched:5:cor-major-index-generating-function-is-q-factorial` — `amended_repair`.
  The proof now cites Foata bijectivity where the reindexing actually uses it, and Alpha synced that dependency into the manifest.

- `touched:5:cor-eulerian-polynomial-exponential-generating-function` — `amended_repair`.
  The repaired text correctly works in `\mathbb Q(t)[[x]]`, and Alpha synced the derivative dependency into the manifest row.

- `touched:5:ex-foata-transformation-on-three-one-four-two` — `amended_repair`.
  The example now uses the valid zero-based witness `[2,0,3,1] -> [2,3,0,1]`, and Alpha synced the repaired title into the examples manifest.

- `touched:5:cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared` — `amended_repair`.
  The proof was already sound after the reader pass; Alpha closed the remaining frontmatter/manifest drift by naming `lem-formal-order-laws` in the final carrier.

- `refuter:5:1` / `thm-worpitzky-identity` — `confirmed_fatal`.
  The refuter correctly found that the old facts block widened `thm-binomial-closed-formula` beyond its stated range. The current step `3.1` now separates the `n>M+1`, `n=M+1`, and `n<=M` cases and uses the closed formula only in-range.

### Batch 6

- `touched:6:cex-a-symmetric-design-need-not-be-a-projective-plane` — `amended_repair`.
  The current proof routes directly through `cor-finite-projective-planes-are-symmetric-two-designs`, and Alpha removed the stale `thm-block-intersections-in-a-symmetric-design` dependency from the manifest row.

- `touched:6:cex-two-latin-squares-need-not-be-orthogonal` — `accepted_repair`.
  The repaired witness now uses the missing ordered pair `(0,1)` rather than the false diagonal computation.

- `touched:6:cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six` — `accepted_repair`.
  This carrier change is contract-only: the current contract row is resynced to the narrowed Steiner definition and the corollary text is unchanged.

- `touched:6:def-steiner-systems-and-steiner-triple-systems` — `accepted_repair`.
  The formal definition is now exactly the triple-system case `STS(v)=2-(v,3,1)`, with the broader `S(2,3,v)` notation demoted to a remark.

- `touched:6:ex-skolems-construction-gives-the-fano-plane` — `accepted_repair`.
  This carrier change is contract-only: the current contract quote now matches the repaired Steiner definition that the example cites.

- `touched:6:thm-bose-construction-produces-a-steiner-triple-system` — `amended_repair`.
  I kept the reader’s unordered-pair block repair and further narrowed the theorem to `m>=1`, updated the title, and made the `3<3n` boundary explicit in step `4.1`.

- `touched:6:thm-fishers-inequality-for-two-designs` — `accepted_repair`.
  This carrier change is contract-only: the theorem bytes are unchanged and the current contract row now matches the on-disk proof.

- `touched:6:thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` — `amended_repair`.
  I narrowed the title and Statement to the exact library range `v>3`, added the definitional `v>3` fact, repaired both converse branches, and synced the new title/dependencies into the manifest.

- `page:6:block-designs-and-finite-projective-planes` — `amended_repair`.
  The A-page summary now says Bose constructs the `3 mod 6` Steiner triple systems of order greater than `3`, matching the repaired theorem rather than overclaiming the excluded `v=3` case.

- `refuter:6:1` / `thm-bose-construction-produces-a-steiner-triple-system` — `confirmed_fatal`.
  The refuter correctly found the missing small-order exclusion. The current theorem now requires `m>=1`.

- `refuter:6:2` / `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six` — `confirmed_fatal`.
  The refuter correctly found that the unrepaired theorem still claimed the excluded small orders `v=1` and `v=3`. The current theorem now states and proves the exact range `v>3`.

### Batch 10

- `touched:10:cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` — `amended_repair`.
  The proof now derives the polynomial Rödl property of `{P_3}` through the published three-vertex Erdős–Hajnal corollary, and Alpha synced that new dependency into the manifest.

- `touched:10:lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` — `amended_repair`.
  The repaired proof now separates the `u>=n` branch before choosing the high-degree vertex, and Alpha synced the Pascal dependency into the manifest and refreshed the stale contract step references.

- `touched:10:lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` — `amended_repair`.
  The Statement now excludes zero-vertex forbidden graphs, the proof deletes vertices from actual counted images, and Alpha synced the probability-space dependencies into the manifest.

- `touched:10:thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` — `amended_repair`.
  I kept the reader’s integer-threshold repair and further repaired step `7.2` by splitting off the zero-probability `h>2t` case before the binomial ratio argument. The manifest and contract rows are synced to that final proof.

- `reader:10:1` / `def-erdos-hajnal-property-and-constant` — `confirmed_nonfatal`.
  The reader correctly found wrong citation-title metadata on `https://arxiv.org/html/2606.06258v2`. I claimed and repaired the published item, removed the stale published audit stamp, and appended the required Step-6 published-repair receipt.

- `reader:10:2` / `lem-erdos-hajnal-constants-are-downward-closed` — `confirmed_nonfatal`.
  The same title-metadata defect was real here too. I repaired the published item, removed the stale judge/audit stamps, and appended the required Step-6 published-repair receipt.

- `refuter:10:1` / `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` — `confirmed_fatal`.
  The refuter correctly found that the old step `7.2` formed binomial coefficients with non-natural parameters when `h>2t`. The current proof now treats that case as zero probability and only uses the ratio formula for `h<=2t<n`.

## Risk review

- Completed `risk_review` blocks for every high/critical carrier I actually adjudicated:
  - Batch 5: `thm-order-raising-recursive-specifications-have-unique-solutions`, `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t`, `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared`, `thm-worpitzky-identity`, `cor-eulerian-polynomial-exponential-generating-function`.
  - Batch 6: `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six`, `thm-bose-construction-produces-a-steiner-triple-system`, `thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six`, `ex-skolems-construction-gives-the-fano-plane`.
  - Batch 10: `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets`, `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets`, `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`, `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted`.
- Item-scoped `risk-report --require-reviewed` is now green on exactly those 13 high/critical carriers (the 12 touched high/critical items plus flagged `thm-worpitzky-identity`) and nowhere required a fabricated review.

## Exact artifacts written

- `research/frontier-19-alpha-d-6b-decisions.json`
  - 26 obligations, all stamped with current `subject_sha256`.
- `research/frontier-19-alpha-d-6b-ledger-rows.json`
  - 26 closed defect-ledger rows, all appended to `research/defect-ledger.jsonl`.
- `research/frontier-19-alpha-d-6b-published-repairs.json`
  - 2 Step-6 published-repair handoff rows, both appended to `research/frontier-19-step8-published-repairs.jsonl`.
- `research/frontier-19-step6-published-claims.jsonl`
  - Claimed `def-erdos-hajnal-property-and-constant` and `lem-erdos-hajnal-constants-are-downward-closed` for group `d`.

## Gate state

Clean, current on the final group-`d` text:
- `reflow` + `precheck`
  - `items/thm-worpitzky-identity.md`
  - `items/thm-bose-construction-produces-a-steiner-triple-system.md`
  - `items/thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six.md`
  - `items/thm-a-finite-family-with-the-erdos-hajnal-property-is-viral.md`
  - `items/def-erdos-hajnal-property-and-constant.md`
  - `items/lem-erdos-hajnal-constants-are-downward-closed.md`
- `node tools/proof-contract.mjs research/frontier-19-batch-5.proof-contracts.json --strict`
  - pass
- `node tools/proof-contract.mjs research/frontier-19-batch-6.proof-contracts.json --strict`
  - pass
- `node tools/proof-contract.mjs research/frontier-19-batch-10.proof-contracts.json --strict`
  - pass
- `node tools/proof-contract.mjs research/frontier-19-batch-10.proof-contracts.json --strict --items lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets,cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted`
  - pass after refreshing those two touched contract rows.
- `node tools/citation-fidelity.mjs research/frontier-19-batch-{5,6,10}.proof-contracts.json --fail-on-missing-quote`
  - pass on all three batches.
- `node tools/risk-report.mjs ... --require-reviewed --items ...`
  - pass on the exact high/critical carriers listed in the Risk review section.
- `node tools/defect-ledger.mjs validate --run frontier-19`
  - pass (`99` `frontier-19` rows checked, `0` errors).

Blocked or red for reasons outside the exact writable queue of this dispatch:
- `node tools/step6-scope.mjs check --run frontier-19 --phase adjudicate --batch 5`
  - blocked globally, not mathematically, by two pre-existing cross-group conditions:
    - `reader-findings-invalid: batch 5: report names batch frontier-19-batch-5`
      - the existing `research/frontier-19-reader-findings-5.json` artifact is malformed relative to the frozen scope receipt.
    - many `ledger-unowned` rows from groups `a` and `b`
      - their Step-6 rows are already in `research/defect-ledger.jsonl`, but the corresponding `research/frontier-19-alpha-{a,b}-6b-decisions.json` files are not yet present, so the global adjudication check cannot close.
  - I did not rewrite another group's missing decision file or mutate the frozen reader artifact to force this gate green.
- `node tools/boundary-audit.mjs research/frontier-19-batch-5.proof-contracts.json --fail-on-contradicted`
  - still red on untouched batch-5 contract rows outside my routed set (for example `thm-symbolic-sum-and-product-rules`, `thm-sequence-construction-generating-function`, `thm-multiset-product-formula`, `thm-worpitzky-identity` no longer among the failures after my repair, but many untouched template rows remain).
- `node tools/boundary-audit.mjs research/frontier-19-batch-6.proof-contracts.json --fail-on-contradicted`
  - still red on untouched `cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares`, which is not in this dispatch's exact queue.
- `node tools/boundary-audit.mjs research/frontier-19-batch-10.proof-contracts.json --fail-on-contradicted`
  - still red on untouched `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family`, which is not in this dispatch's exact queue.
- Whole-batch `risk-report --require-reviewed` remains red on untouched high/critical items outside the exact queue in batches `5`, `6`, and `10`. I completed the in-scope reviews only; I did not fabricate reviews for untouched unflagged items that this Step-6b dispatch is not licensed to re-audit.

## Changed artifacts

- Items:
  - `items/def-erdos-hajnal-property-and-constant.md`
  - `items/lem-erdos-hajnal-constants-are-downward-closed.md`
  - `items/thm-worpitzky-identity.md`
  - `items/thm-bose-construction-produces-a-steiner-triple-system.md`
  - `items/thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six.md`
  - `items/thm-a-finite-family-with-the-erdos-hajnal-property-is-viral.md`
- Page prose:
  - `library/combinatorics/block-designs-and-finite-projective-planes.md`
- Batch manifests:
  - `research/frontier-19-batch-5.pages.json`
  - `research/frontier-19-batch-6.pages.json`
  - `research/frontier-19-batch-10.pages.json`
- Batch contracts:
  - `research/frontier-19-batch-5.proof-contracts.json`
  - `research/frontier-19-batch-6.proof-contracts.json`
  - `research/frontier-19-batch-10.proof-contracts.json`

## Gate adjudication — `depcheck` (2026-08-26)

- `gate:depcheck:def-erdos-hajnal-property-and-constant` — `repaired`. Reproduced `node tools/depcheck.mjs`; the hard failure was real on current bytes because Step-6 had correctly removed the stale `audited` stamp after repairing the arXiv title, but no current delegated certification remained. I re-opened the repaired item, re-verified the source title against `https://arxiv.org/html/2606.06258v2`, and installed `verification.verified` with `scope: published-dependency-repair` and `delegated_by: owner`.
- `gate:depcheck:lem-erdos-hajnal-constants-are-downward-closed` — `repaired`. Same defect class and same disposition: the title repair was real, the old judge/audit stamps were stale, and the current published bytes needed an honest delegated certification. I re-opened the repaired item and installed the current `verification.verified` block on the final text.
- `gate:depcheck:cited-not-in-deps` — `false-positive`. Reproduced the full gate and intersected every `cited-not-in-deps` line with the union of `frontier-19` batch item ids; the intersection count is `0`, so none of those warnings is a live `frontier-19` defect or a group-`d` obligation from this dispatch.

## Gate adjudication — `rendercheck` (2026-08-26)

- `gate:rendercheck:multiline-display:cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule` — `repaired`. Reproduced `node tools/rendercheck.mjs`; the displayed OGF comparison in the Counterexample had two source lines between `$$`. I collapsed it to one source line without changing the witness or conclusion.
- `gate:rendercheck:multiline-display:cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule` — `repaired`. The displayed OGF comparison for the product counterexample had the same real formatting defect on current bytes. I collapsed it to one renderer-safe source line.
- `gate:rendercheck:multiline-display:def-bruhat-order-on-the-symmetric-group:1` — `repaired`. The rank-number formula in the Definition was split across two source lines between `$$`; I rewrote it as one source line, preserving the definition verbatim.
- `gate:rendercheck:multiline-display:def-bruhat-order-on-the-symmetric-group:2` — `repaired`. The Bruhat-order characterisation display had the same multiline-display defect; I collapsed the displayed equivalence to one source line with no mathematical change.
- `gate:rendercheck:multiline-display:def-combinatorial-specification-and-order-raising-recursion` — `repaired`. The order-raising inequality display had two source lines between `$$`; I collapsed it to one line, preserving the inequality exactly.
- `gate:rendercheck:multiline-display:def-cycle-construction-of-a-combinatorial-class` — `repaired`. The cyclic-rotation action formula was split across two source lines in one display block; I rewrote it as one source line with identical notation.
- `gate:rendercheck:multiline-display:def-lehmer-code` — `repaired`. The displayed definition of `\ell_i(\sigma)` had the same one-display/two-line defect. I collapsed it to one source line without changing the combinatorial content.
- `gate:rendercheck:multiline-display:def-q-integer-q-factorial-and-q-multinomial` — `repaired`. The displayed definition of the `q`-multinomial coefficient was split across two source lines; I rewrote it as one renderer-safe line.
- `gate:rendercheck:multiline-display:def-viral-property-for-a-finite-family` — `repaired`. The displayed induced-copy bound in the Definition used a multiline `$$` block on current disk. I collapsed the bound to one source line and left the statement itself unchanged.
- `gate:rendercheck:multiline-display:def-weak-order-on-the-symmetric-group` — `repaired`. The displayed equivalence defining weak order was split across several source lines between `$$`; I collapsed it to one source line with identical notation.
- `gate:rendercheck:multiline-display:thm-cycle-construction-formula` — `repaired`. The statement’s displayed generating-function identity was a real multiline-display defect on current bytes. I collapsed the formula to one source line, preserving the theorem statement.
- `gate:rendercheck:multiline-display:thm-multiset-exponential-formula` — `repaired`. The displayed OGF identity in the Statement had two source lines between `$$`; I collapsed it to one line without changing the theorem.
- `gate:rendercheck:multiline-display:thm-multiset-product-formula` — `repaired`. The displayed product formula had the same renderer-visible defect and is now a one-line display on current bytes.
- `gate:rendercheck:multiline-display:thm-powerset-exponential-formula` — `repaired`. The displayed OGF identity for `\operatorname{PSET}` was split across two source lines; I collapsed it to one line.
- `gate:rendercheck:multiline-display:thm-powerset-product-formula` — `repaired`. The displayed product formula had the same current-byte defect and is now a one-line display.
- `gate:rendercheck:multiline-display:thm-sequence-construction-generating-function` — `repaired`. The displayed OGF identity for `\operatorname{SEQ}_{\ge 1}` was split across two source lines between `$$`; I rewrote it as one source line.

Group-`d` gate findings are cleared on current disk. The final rerun was:
`OK — 7812 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`

## Gate adjudication — `proof-contract` (2026-08-26)

- `gate:proof-contract:thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` — `repaired`. Reproduced the merged `node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --strict` failure on current disk. The theorem's batch-10 contract still quoted an older form of `def-viral-property-for-a-finite-family`; after the rendercheck repair that quote no longer occurred verbatim. I regenerated the theorem contract entry from current item text, restoring the exact citation quote and step-use map without changing the proof.

## Gate adjudication — `step6-routing-adjudicate` (2026-08-26)

- Batch `5`: `def-combinatorial-specification-and-order-raising-recursion` and `thm-order-raising-recursive-specifications-have-unique-solutions` no longer match the post-reader carrier exactly. The repaired mathematics stands; the final carrier now also includes the later rendercheck/item-byte normalization on the definition and the later contract/manifest synchronization on the theorem, so both Step-6 decisions are retagged from `accepted_repair` to `amended_repair`.
- Batch `6`: `cex-two-latin-squares-need-not-be-orthogonal`, `cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six`, `ex-skolems-construction-gives-the-fano-plane`, and `thm-fishers-inequality-for-two-designs` likewise have final carriers that differ from the post-reader carrier only because Alpha later synchronized the batch-6 contract and manifest rows after the Steiner-definition narrowing. Their Step-6 decisions are therefore retagged from `accepted_repair` to `amended_repair`; no new mathematical defect was found in the current bytes.
