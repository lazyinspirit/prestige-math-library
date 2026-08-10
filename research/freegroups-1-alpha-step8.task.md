# This dispatch — Alpha, STEP 8 (adjudicate judge rejections)

Run `freegroups-1`. You are the same Alpha who audited at step 6. Repo:
`/root/Projects/prestige-math-library`.

## The sweep result

Both lanes judged all 37 items on true A/B-pair context (via
`tools/judge-overlay.mjs`; the served pages deliberately do not list the drafts).
74 rows, **zero nulls**. Ledger: `research/freegroups-1-judge-paired.jsonl`.

- `deepseek-v4-pro`: 33 keep, **4 reject**
- `gpt-5.6-terra`: 28 keep, **9 reject**
- 11 distinct items rejected; **2 rejected by BOTH lanes**.

## STEP 8 IS FATAL-ONLY (R1) — this is the binding constraint

Only a `confirmed_fatal` adjudication licenses an edit. A `confirmed_nonfatal`
or `false_positive` closes the rejection on its exact-hash ledger row with **NO
content, page, frontmatter, contract, impact, or judge mutation**. Cosmetic
polish and 30-second-gap tidying belonged at step 6 and are now withdrawn: an
edit here is a material rewrite under SCHEMA §3, voids `verification.judge`,
forces a rejudge, and resamples a refuter that will surface a fresh nitpick —
an unbounded loop costing two judge calls per turn.

Fatal repairs are deliberately **uncapped**.

I took the `touchlog` baseline `pre-step8` immediately before dispatching you,
and I will run `tools/step8-guard.mjs` against it afterwards. Every item you
change must be licensed by a `confirmed_fatal` row recorded against the
**pre-edit** text state.

## Ledger format — every row needs the hash

Write `research/freegroups-1-judge-adjudications.jsonl`, one row per rejection:

```json
{"id":"...","model":"...","context_sha256":"...","item_sha256":"...",
 "outcome":"confirmed_fatal|confirmed_nonfatal|false_positive",
 "defect_type":"logic|dependency_citation|other"}
```

`item_sha256` is the sha256 of normalized item text with the verification block
excluded, **at adjudication time, before any edit**. `judge-adjudication-unhashed`
is an error code; a row without it fails the guard.

## The two BOTH-lane rejections — read these first

Cross-family agreement is the strongest signal in the run: DeepSeek and Terra
share no family, and they independently identified the same defect class.

- **`ex-free-group-on-one-generator`** — Terra: step 3.1 claims L2 constructs a
  generator-compatible isomorphism, but L2 asserts only an unspecified
  isomorphism with Z. DeepSeek: step 1.1 cites [L1] to classify reduced words on
  one generator, but [L1] gives only uniqueness of reduced representatives, not
  their form; the definition of reduced word is not cited.
- **`ex-free-group-on-two-generators-is-not-abelian`** — Terra: step 2.1 infers
  `[x][y] ≠ [y][x]` from distinct classes of `xy` and `yx`, but no cited fact
  states `[u][v] = [uv]`. DeepSeek: same missing product definition, plus
  "reduced" used without its definition among the facts.

**Note carefully:** you classified `ex-free-group-on-one-generator` NONFATAL at
step 6 and repaired it anyway. Both judges still reject it. Adjudicate the
CURRENT text from disk on its merits — do not defend the earlier call, and do
not assume the earlier repair closed the gap.

A proof step that uses a fact its declared `[F#]`/`[L#]` set does not state is
an unlicensed inference, which is `dependency_citation`, not cosmetics. But
decide from the text, not from my framing.

## The nine single-lane rejections

`thm-finite-free-bases-have-the-same-cardinality`,
`prop-equality-of-words-in-a-presentation` (DeepSeek);
`prop-tietze-transformations-preserve-presented-groups`,
`lem-cyclic-reduction-normal-form`, `thm-conjugacy-of-cyclically-reduced-words`,
`ex-presentation-of-z-squared`, `ex-presentation-of-the-klein-four-group`,
`ex-presentation-of-a-finite-cyclic-group`,
`ex-presentation-of-a-dihedral-group` (Terra).

Terra rejected every concrete presentation example. Ask whether that is one
systematic defect or nine separate ones — the answer changes the repair.

**`ex-presentation-of-a-dihedral-group` is already twice-touched.** A third
repair escalates; the escalation is advisory but must be recorded and reported.

## Boundaries

Draft items only. Do **not**: touch a published item, edit either page file, add
an id to any page list, change an id or reading order, flip `status`, or write
`verification.audited`. Delete a stale `verification.judge` on any item you
materially rewrite, and tell me the exact ids needing rejudge — I run the
targeted sweep, not you.

## Report

Self-contained. Every rejection with its outcome and defect type, what you
repaired and why it was fatal, what you refuted and on what evidence, the exact
rejudge id list, and any escalation.
