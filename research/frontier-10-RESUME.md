# `frontier-10` — run record (CURRENT; read this first after compaction)

Branch `feat/coverage-harvest-and-frontier-10`, ~97 commits ahead of `main`,
baseline `2b6e537`. Started 2026-08-11.

## THE SITUATION RIGHT NOW

**Steps 0–9 are COMPLETE. Step 10 is in progress and the owner has AUTHORISED
PUBLICATION.** The owner will `ssh` to the VPS and `git pull`, expecting
everything published immediately — so **git IS on the serving path for this
deploy**, contradicting CLAUDE.md's "GitHub is backup only". The run must end
with a merge to `main` and a push of `main`.

**RUNNING:** one Alpha dispatch, label `step8e` (task
`research/frontier-10-alpha-step8e.task.md`). It is doing two jobs:
1. Close / repair-once / park two items rejected by **Terra only** (DeepSeek
   cleared both):
   - `cor-planar-simple-graph-edge-bound` — Terra says step 1.1 uses an uncited
     "a tree on n vertices has n-1 edges". **`cor-tree-edge-count` exists** in the
     library; if load-bearing, cite it (fatal, dependency_citation), else close.
   - `rem-riemann-stieltjes-conventions-and-scope` — Terra says the finite-step
     claim omits continuity at each jump.
     **`cex-common-jump-prevents-riemann-stieltjes-integrability` exists**; read
     it, then repair or close.
   No further round: a repair rejected again **parks**.
2. Read and attest `lem-plane-triangulation-is-connected` into
   `research/frontier-10-audit-coverage.new.json`, then write
   `research/frontier-10-audit-coverage.json`.

## EXACT REMAINING SEQUENCE

```sh
# 1. when step8e exits, check its outcome
node tools/step8-guard.mjs --touches research/frontier-10-touches.json \
  --baseline pre-step8e --adjudications research/frontier-10-judge-adjudications.jsonl

# 2. rejudge ONLY items Alpha changed (owner: touched items only)
node tools/merge-proof-contracts.mjs --level frontier-10 \
  research/frontier-10-proof-contracts.json research/frontier-10-batch-*.proof-contracts.json
JUDGE_LINEUP=deepseek+terra node tools/judge-sweep.mjs \
  --ledger research/frontier-10-judge.jsonl --cost research/frontier-10-judge-cost.jsonl \
  --items "<comma,separated>"          # NOTE: --pages/--items are COMMA-separated

# 3. gate (level-coverage takes ~3.5 min; run in background, >2 min foreground limit)
node tools/gates.mjs --step 8 --run frontier-10

# 4. PUBLISH
node research/frontier-10-publish.mjs --apply          # 585 items -> published, audited: 2026-08-11
node research/frontier-10-apply-amendments.mjs --apply # group-actions pages 6->37, 1->17, new summary
node tools/depcheck.mjs && node tools/tsx-run.mjs tools/precheck.mts && node tools/rendercheck.mjs

# 5. commit, merge, push
git add -A && git commit
git checkout main && git merge feat/coverage-harvest-and-frontier-10 && git push origin main
git push origin feat/coverage-harvest-and-frontier-10
```

## OWNER DECISIONS AT THE PAUSE — all four settled

1. **`prop-maximally-planar-edge-characterisation` `[L1]`** — fix now. DONE,
   cleared both lanes.
2. **`lem-plane-face-handshake-by-girth`** — export the identity, lemma only.
   DONE, cleared both lanes. Took three attempts: I introduced a **false title**
   ("girth at least g" vs "every facial boundary walk has length at least g" — a
   one-edge tree has infinite girth but a face of boundary length 2), then the
   rejudge exposed a real latent gap (summing over `F(G)` without finiteness),
   fixed by citing `lem-plane-graph-faces-are-finite-with-one-unbounded-face`.
3. **33 published scope-denial edits** — all 33. DONE. 33 files changed,
   `library-scope-denial` warnings 215 -> 206. P15's title pair was applied
   separately by me because my dispatch over-broadly banned frontmatter edits.
4. **`cor-planar-simple-graph-edge-bound` redundant hypothesis** — build the
   lemma. DONE: `lem-plane-triangulation-is-connected` built and cleared both
   lanes; "connected" dropped from the corollary; `[L1]` realigned. The corollary
   itself is what `step8e` is still finishing.

## SCRIPTS WRITTEN, DRY-RUN VERIFIED, READY

- `research/frontier-10-publish.mjs` — 585 items from the **batch manifests**
  (never "every draft": 51 pre-existing `rem-*` deferred-catalogue drafts must
  stay draft). Adds `audited: 2026-08-11` inside `verification:`.
- `research/frontier-10-apply-amendments.mjs` — lifts the staged YAML blocks
  from `research/frontier-10-published-amendments.md`. Verified: items 6->37,
  examples 1->17, summary exactly 2 paragraphs (63 + 78 words).
- `research/frontier-10-splice.mjs` — step-4 splice, already applied.

## RECEIPTS

- **spine** — REFRESHED and valid. It lapsed only because `transitive_consumers`
  counts shifted when the new lemma was added; **all 60 `content_sha256` values
  were unchanged**, so all 60 attestations were carried forward with a guard that
  would have refused had any attested proof changed. Reviewer line records this.
- **audit-coverage** — `research/frontier-10-audit-coverage.new.json` is the
  regenerated template. Delta from the issued receipt is exactly **one item**
  added to `item_scope` and `proof_scope`: `lem-plane-triangulation-is-connected`.
  Alpha `step8e` is filling and writing the real receipt.

## RESULTS SUMMARY (for the rundown, already written)

`research/frontier-10-step10-rundown.md` is complete and committed. Headlines:
584 items authored across 14 A/B pairs (585 with the post-pause lemma), 887
harvested source headings, 1,182 judge verdicts over 591 items with zero nulls,
14.8M prompt / 6.68M completion tokens over 1,237 calls. **48 fatal defects found
and repaired** — 15 by step-6 readers, 33 by Alpha from judge rejections.
`group-actions-and-cayleys-theorem` went from 6+1 items to 37+17.
Judge lanes: Terra rejected 295 (50%), DeepSeek 143 (24%); 322 items rejected by
at least one lane, 116 by both; both-lane agreement was the reliable signal.
R1 held: every step-8 edit licensed, verified at each round.

## GOTCHAS LEARNED THIS RUN — do not rediscover

- `judge-sweep --pages/--items` are **COMMA-separated**. Space-separated silently
  judges only the first, and there is **no skip logic**, so a naive re-run rebills
  everything already judged.
- A dispatch brief may not contain a literal `<n>` or `<k>`; `dispatch.mjs`
  refuses and exits 2 writing only a one-line `.out`. **Proof a dispatch started
  is its `<role>-<label>.prompt.md` file**, not the process being alive.
- Agents cannot run `tools/gates.mjs` (EPERM in the Codex sandbox). Brief them on
  the individual scripts; the orchestrator runs the wrapper.
- **Splice AFTER scaffold repairs.** The splice must treat the manifest as
  authoritative for every id it declares, or a re-run carries pre-repair `deps`
  forward.
- Take the `step8-guard` baseline **after** all non-step-8 edits, or your own
  approved edits land inside step 8's window and trip `nonfatal-edit`.
- `level-coverage --verify-current-context` takes ~3.5 min: background it.

## OPEN / NOT DONE

- `lem-plane-triangulation-is-connected` is the **only item never reader-audited
  or refuted** — built post-pause. Alpha `step8e` is reading it. Flag at audit.
- A 15-minute health monitor (`b5x20u06m`) is armed; TaskStop it when done.
- `main` has NOT been merged or pushed yet.
