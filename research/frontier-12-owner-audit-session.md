# Run `frontier-12` — owner-audit session record

**Date:** 2026-08-13 · **Session:** owner audit at step 10 · **Status:** BLOCKED
on the Terra judge lane. **Nothing is published; nothing is committed.**

---

## 1. BLOCKER — the Codex/Terra lane is gone from this machine

`gpt-5.6-terra` runs through the Codex CLI. On this VPS:

```
/root/.local/bin/codex -> /root/.codex/packages/standalone/current/bin/codex   (DANGLING)
/root/.codex                                                                    (DOES NOT EXIST)
```

The whole Codex installation is absent — binary **and** `auth.json`. `judge.mts:286`
spawns `process.env.CODEX_BIN ?? "codex"`, so every Terra call fails with
`NO_CONTENT: Error: spawn codex ENOENT`.

**This is not a capacity refusal and not a verdict.** Per CLAUDE.md a null is
never a verdict, so the 8 Terra rows appended to
`research/frontier-12-judge.jsonl` by this session are nulls and satisfy no
coverage requirement.

**Not caused by this repo's tooling.** `dispatch.mjs` copies `auth.json` into a
0700 temporary `CODEX_HOME` and deletes only that temporary directory; it writes
back to the canonical path but never removes it. The previous session's Terra
verdicts are timestamped `2026-08-13T04:57`, so the installation disappeared
between that run and this session.

**Clearing it needs owner authority** — reinstalling the Codex CLI and
re-authenticating a subscription account. Not attempted: it is new software plus
an interactive login, and CLAUDE.md forbids substituting another model or a
smaller window for a pinned lane.

**Blast radius beyond the judge:** every Codex-runner role in `dispatch.mjs` is
equally unavailable. The DeepSeek lane is unaffected (its key resolves
from the app repo `.env` via `paths.mjs`) and returned real verdicts throughout.

## 2. What this session changed — 8 items, all `draft`, all in frontier-12 scope

### 2a. Two LaTeX render defects (owner-reported)

`lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`
and `thm-pullback-and-pushout-pasting` were the only two items in the 4172-item
corpus using `$$\begin{CD}...\end{CD}$$`. Root cause, traced through the app's
own pipeline:

1. `rendercheck.mjs:291` requires display math be a single source line (`multiline-display`).
2. `remark-math` parses single-line `$$…$$` as an **`inlineMath`** node.
3. `rehype-katex` therefore renders it with `displayMode: false`.
4. KaTeX 0.18.1: **`{CD} can be used only in display mode.`**

Converted both to ```` ```tikzcd ```` fences in `## Statement`, matching
`thm-snake-lemma-for-modules`, `lem-four-lemma-for-modules` and
`thm-five-lemma-for-modules` in this same run. Objects, arrows, labels and
directions are unchanged; the trailing `,` / `.` that sat inside the old CD
bodies were dropped.

**Gate gap worth recording:** `rendercheck` validates `$$…$$` spans with
`displayMode: true` (`tools/rendercheck.mjs:137,141`) — not the mode the renderer
uses for them. The house single-line rule makes that divergence universal; it is
harmless for `pmatrix` (48 items), `cases` (64), `array` and `aligned`, and fatal
only for `{CD}`, the one display-mode-only construct KaTeX has.

### 2b. Six short-form Newton-Leibniz citations (owner-authorised)

`thm-newton-leibniz-with-interior-derivative` requires `f` **Riemann integrable**
with `f = G'` on the interior. Six draft items restated it without that
hypothesis; two others in the same batch (`thm-gradient-theorem-for-line-integrals`,
`thm-poincare-lemma-for-star-shaped-domains`) already stated it correctly.

Corrected to the phrasing four published citers already use — *"a continuous
function with an interior derivative admitting an integrable extension"* — in:

`lem-green-type-i-boundary-identity` · `lem-green-type-ii-boundary-identity` ·
`ex-constructing-a-potential-on-an-open-rectangle` ·
`ex-gradient-theorem-for-a-polynomial-potential` ·
`ex-scalar-line-integral-over-a-unit-semicircle` ·
`cex-the-one-form-y-dx-is-path-dependent`

Only the Newton-Leibniz clause changed in each; each item's own surrounding
clause is verbatim. No proof step was touched: the hypothesis is discharged
trivially in all six (polynomial/trigonometric integrands in the four examples;
`∂P` continuous from the Statement's own C¹ hypothesis in the two Green lemmas).

Published citers write `Newton--Leibniz`; the renderer is `react-markdown` +
`remark-gfm` with no smartypants, so `--` reaches the page literally. The drafts'
single hyphen was kept. The `--` in five published items is a pre-existing
cosmetic defect, out of scope here.

## 3. Gate state

Clean on the 8 edited files: `precheck` 8/8 PASS, `rendercheck` OK,
`citecheck` OK, `depcheck` exit 0 with **154 warnings, unchanged**.

`level-coverage --verify-current-context` fails: the 8 edited items have a
DeepSeek verdict and a Terra **null**, so no complete pair. Before this session
it read `454/454 required judge pair(s)`, exit 0, with 322
`judge-verdict-adjudicated-nonfatal` warnings.

## 4. Three DeepSeek rejections needing adjudication (Alpha's role, not filled)

The rejudge produced 5 passes and 3 rejections. All three are **pre-existing**
defects surfaced by the fresh read — none is in text this session altered beyond
the `[L]` restatement, and none concerns the `{CD}` conversion.

| item | DeepSeek finding |
|---|---|
| `lem-green-type-i-boundary-identity` | Step 1.2 uses the Type I region definition load-bearingly (`α<β` on the open interval, `α≤β` at endpoints), but `def-type-i-type-ii-and-elementary-green-regions` is **not in its `deps`** and no `[L]` fact states it; `[L1]` supplies only the orientation. **Its Type II sibling does declare that dependency** — a one-sided omission. |
| `lem-green-type-ii-boundary-identity` | Step 2.2 asserts each section interval is Jordan measurable from its finite boundary, with no cited fact establishing that compact intervals are Jordan; `[L8]` cannot then give section integrability. |
| `ex-constructing-a-potential-on-an-open-rectangle` | `[L4]` drops the cited theorem's `a<b` hypothesis, and step 1.2 applies it to integrals whose variable upper limits `x,y` may lie **below** the basepoint `a,b`, where the cited theorem does not license endpoint evaluation. |

The first two are `dependency_citation`-class. The third is a genuine question
about whether the library fixes an orientation convention for `∫_a^b` with `b<a`;
it was not introduced by this session's rewording, which left `a<b` unstated as
the original did.

**No further edits were made.** Repairing these would move their hashes again and
require another rejudge that cannot complete while the Terra lane is down, which
is the unbounded loop CLAUDE.md's R1 exists to prevent.

## 5. Exact state on disk

- 8 modified files, all `items/*.md`, all `status: draft`. Nothing else in the tree.
- `research/frontier-12-judge.jsonl`: +16 rows (8 DeepSeek verdicts, 8 Terra nulls).
- `research/frontier-12-judge-cost.jsonl`: appended by the sweep.
- **No commit. No push. No `status` flip. No `verification.audited` written.**

## 5b. SECOND BLOCKER — the build `alpha` lane cannot start as root

After the owner restored Codex, the Terra lane returned 8/8 real verdicts and
`level-coverage` went back to `454/454 required judge pair(s)`, leaving five
`judge-adjudication-missing` errors. Dispatching Alpha to rule them failed in
1.15 s:

```
--dangerously-skip-permissions cannot be used with root/sudo privileges
```

`dispatch.mjs:297` hardcodes `--permission-mode bypassPermissions` for the
`claude` runner, and this checkout runs as uid 0.

**It is not a CLI regression.** `claude` was upgraded 2.1.228 → 2.1.229 at 10:45
today, which looked like the cause; it is not. Tested directly: **2.1.228, the
version the previous session's eight successful Alpha dispatches used, refuses
the same flag under root.** How those eight runs started is therefore not
explained by the binary, and is not recorded anywhere in the run artifacts.

**`IS_SANDBOX=1` clears it** — verified with a real call returning its expected
token. Not applied: it disables a root safety guard for every future `claude`
dispatch on this host, which is an owner decision about the machine, not a
repair to this run.

**`acceptEdits` is a documented dead end.** Commit `98cebfdf` replaced it with
`bypassPermissions` precisely because it "auto-accepts edits but still prompts
for web access", measured on frontier-11 step 3 where Alpha could not open a
single source. Its message states the principle: *"a prompt is a silent
capability loss dressed as a completed stage."*

Alpha wrote nothing. `research/frontier-12-judge-adjudications.jsonl` is
unmodified and the eight edited items are untouched since the
`owner-audit-adjudication-baseline` snapshot.

## 6. Owner decisions now open

1. Restore the Codex CLI and subscription auth, or accept a DeepSeek-only receipt
   for these 8 items, or revert the 8 edits to restore the previous
   `454/454` receipt.
2. Adjudicate the three DeepSeek findings in §4.
3. The five decisions already carried in `frontier-12-step10-rundown.md` §5.

## 7. Also observed, unrelated to the above

- `lem-pasted-squares-commute` is a stale `draft` orphan from an earlier run
  (judge `openai/gpt-5.4`, July): on no page, in no `deps`, absent from
  `plan-spec.json`. Inert, but a publish sweep keyed on `status: draft` would
  catch it.
- `depcheck` reports **no** `published-unaudited` error. The step-10 rundown's
  open item 1 says it reports one on `ex-rational-function-field-order`; that was
  true before commit `8cc1b0ea` applied the `verified` stamp and is now stale.
- None of the 454 items carries a `verification.judge` frontmatter block.
  `frontier-11` published with none either, so this is standing practice, not a
  regression — but `LEVELS.md` §Step 10 counts coverage "from the ledger **and
  frontmatter on disk**", and the reader-facing caption's "K also independently
  AI-judged" will read 0 for all 24 pages. `tools/apply-judge-stamps.mjs` exists
  for this.
- `SCHEMA.md` §3 states that a forward reference may **never** appear in Facts &
  Assumptions, with no mention of the consequence-kind carve-out
  `fwdcheck.mjs:83` actually implements (`CONSEQUENCE_KINDS`). The code is the
  truth; the doc is the bug. This is what makes
  `cex-ordered-field-not-archimedean` legal.
