# This dispatch — STEP 9, scope-denial sweep and published-claim decay

Run `freegroups-1`. Repo: `/root/Projects/prestige-math-library`. You hold
delegated orchestrator judgment for this step only.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call. Report a blocker rather
> than prompting.

Read first: `LEVELS.md` §"Step 9", `research/freegroups-1-RESUME.md` (decisions
D1–D7), `research/freegroups-1-step3-decisions.md` (my adjudication).

Steps 0–8 are complete. 37 new `status: draft` items enrich the **published**
pair `free-groups-and-presentations` (order 60) and its `-examples` companion
(61). The coverage gate passes. Step 9 is a **sweep, not a repair pass** — it
does not pause the build.

## 9a. Scope-denial re-grep — did anything dropped creep back in?

Three things were dropped with licensing notes. Verify from disk that **no item,
proof step, Fact, Remark or page prose** now relies on any of them:

1. **All computability/decidability material (D2)** — Novikov–Boone, Dehn's
   three decision problems *as decision problems*, "solvable word problem" as a
   predicate, residual finiteness implying solvability, Knuth–Bendix,
   Todd–Coxeter, and any use of *decidable*, *algorithm exists*, or *effectively
   computable* as a mathematical claim. This library has built **no**
   computability machinery, so any such reliance rests on nothing.
   The three `cex-delete-only-relator-rewriting-*` items are claims about a
   **specific syntactic procedure** and are legitimate — do not flag them, but do
   check their wording has not drifted into decidability language.
2. **Nielsen–Schreier** — dropped for want of Schreier/Nielsen or covering-space
   machinery. No item may assert or assume it.
3. **Infinite-rank invariance** — unreachable here, since
   `cardinal-arithmetic-and-cofinality` is at order 247 against this page's 60.
   `def-rank-of-a-finite-rank-free-group` must not have drifted into implying the
   general case.

Grep the 37 items and both page files. Report every hit with id and line, and
say plainly whether it is a real reliance or a false positive.

## 9b. Published-claim decay — the part that needs real judgement

A claim that was TRUE when written can be falsified by later material, and no
gate can see it. This run adds 37 items to a pair that has been published since
2026-08-03, so the risk is concrete and local.

Check at least:

- **The A page's published summary** (`library/abstract-algebra/free-groups-and-presentations.md`).
  It was written when the page held six items. Does any sentence now misdescribe
  the page — for instance claiming the page defines free groups only by the
  universal property, when the pair now also constructs `W(X)/~` and proves that
  construction satisfies it? Alpha already staged a replacement summary in
  `research/freegroups-1-published-amendments.md`; check whether that staged text
  is now accurate and complete, and say so.
- **The six published items on the pair**, especially
  `def-alphabet-words-and-reduction`, whose Definition ends by saying the
  reduction and uniqueness facts "are proved in
  `thm-reduced-words-form-the-free-group`". Still true, or now misleading given
  `thm-normal-form-for-the-word-quotient-model`?
- **Published items elsewhere that mention free groups or presentations** —
  `rem-hawaiian-earring-fundamental-group`, `rem-banach-tarski`, anything under
  `library/topology/the-fundamental-group*`, and any `deferred-*` catalogue entry
  that promises free-group material this run has now delivered. A deferred entry
  that is now built is decay: report it.
- **`DEFERRED.md`** — does it list anything this run supplies?

## Boundaries — this is a SWEEP

Write **only** `research/freegroups-1-step9-scope-denial.md`. Do **not** edit any
item, page, ledger, receipt or contract. Do not flip `status` or write
`verification.audited`. Step 8 is closed and its guard has run; an edit now would
be unlicensed. Where you find decay, record it precisely — id, file, the exact
sentence, why it is now false or misleading, and the smallest correction that
would fix it — and leave it for the owner at step 10.

## Report

Self-contained: what you grepped and what you read, every scope-denial hit with a
verdict, every decayed claim with its exact sentence and proposed correction, and
an explicit statement if you found nothing in a category.
