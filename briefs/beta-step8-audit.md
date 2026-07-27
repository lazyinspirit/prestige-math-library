<!-- TEMPLATE. Copy into a subagent prompt and substitute <n> (level) and
     <i> (batch). Kept in the repo because these briefs ARE the prompt-side
     half of the workflow: LEVELS.md describes them, this is the text. They
     lived in a session scratchpad until 2026-07-27 and would have been lost. -->

# Level-<n> step-8 audit brief (Beta-9-i audits its own batch)

You scaffolded this batch at step 1. The pages have since been AUTHORED: every
item in your `research/level<n>-batch-<i>.pages.json` now exists as
`items/<id>.md`, and each page has a `library/<category>/<page>.md`. All are
`status: draft`. Your job now is step 8 of the owner's build: **audit your own
batch as authored.**

## The single most important thing about this stage

**The judge passed EVERY item in the level.** So the usual step-8 focus —
"once-rejected proofs and their neighbours" — has no targets, and the temptation
is to treat this as a formality. Do not.

At level 8 the judge also passed everything, and step-8 *reading* then found
**22 item-level defects and about 14 page-summary corrections**, of which
**five were outright mathematical falsehoods**. The judge's measured precision
on this corpus is 21–24% and it scored **0/3** on real historical defects. A
judge pass is a cheap screen, not evidence. **You are the first real reader of
this text.**

## Where the defects actually are, ranked by where they have been found before

1. **REMARK PROSE.** Four separate occasions, three agents, every one in
   Remarks and none in a numbered step. Remarks render to the reader with the
   same authority as a Statement, and both the judge and the author skim them.
   At level 7, two judged rejections became FOURTEEN corrected falsehoods once
   the agents re-read their own Remarks. **Re-read every Remark with a numbered
   step's suspicion.** This is the standing instruction and the highest-yield
   thing you will do today.
2. **PAGE SUMMARIES.** No mechanical tier reviews them: the judge reads items
   and cannot read a page file, precheck ignores prose. Six summary defects
   survived every gate at level 7, and two published page summaries were found
   FALSE at level 8. Read each of your page files against the items as they
   were actually authored, not as they were scaffolded.
3. **COUNTS STATED IN PROSE.** "Seven items on this page depend on it" was
   published when the truth was nineteen. Nobody re-counts a count — it reads
   like a fact rather than a claim. **Grep every number in your pages and
   items.**
4. **INDEX RANGES.** `def-sequence` is a function on ℕ and **ℕ contains 0**.
   Check every sum, product, root and reciprocal at its FIRST index. Past
   casualties: a telescoping sum off by its first term, a geometric series
   summing to 2 instead of 1, a Cantor set that removed everything at stage 0.
5. **CITING AN ITEM FOR A CLAIM IT DOES NOT MAKE.** The dominant defect class
   in this library's history. Open the cited item and read its Statement.
6. **SCOPE-DENIAL CLAIMS.** Never "this library does not develop X" — always
   "not available at this point in the reading order". Six published claims
   were falsified by level 8 alone; one had been false since level 5.

## Triage — what to spend effort on

Owner instruction, binding on you:

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps between steps a human closes within 30 SECONDS; any other non-fatal
  quirk; imperfection at the level of the letter.

Do not open a repair cycle for a citation quirk. Do not re-audit text that is
already correct. Fix fatal; log cosmetic and move on.

## If you change an item

1. **DELETE its `verification.judge` block.** SCHEMA §3 is explicit that a
   material rewrite — INCLUDING a correction in Remarks — invalidates the
   block, because a stale block claims a pass on text the judge never saw.
2. Re-run `tools/reflow.mts` then `tools/precheck.mts` on it.
3. **Re-judge it** with `tools/judge.mts`, model **`z-ai/glm-5.2`**, never a
   Claude model. Pass `--topic` and put the triage rule above into
   `--conventions`. **Capture stdout** — `JUDGE_COSTLOG` records spend, not
   verdicts. The harness drops verdicts intermittently: at level 7 three of six
   returned empty or truncated JSON and all three parsed on a straight re-run.
   **Never record a pass the judge did not give.**

## Boundaries

- Write only inside your own batch's ids and page files. Item ids are IMMUTABLE
  on `main`. If a published item looks wrong, or you need an item that does not
  exist, REPORT it — do not fix it yourself.
- The leaf rule: nothing outside an A/B pair may cite a B-page item.
- Presentation is FROZEN. Do not invent visual devices.
- Do not set `verification.audited` — that field is the owner's alone.

## Report back

1. **Per-item list** of everything you CHANGED, with the defect named and the
   new judge verdict verbatim. Never a summary fraction; I recount from disk.
2. **Anything you read and deliberately left alone** that a later reader might
   flag, so the next stage does not re-litigate it.
3. **Escalations** — published items you believe are wrong, scaffold decisions
   you now think were mistakes, anything needing an owner decision.
4. **An honest confidence statement**, including what you did NOT read.

I run the authoritative gates after you finish (amendment 6); no stage advances
on an agent's report alone.
