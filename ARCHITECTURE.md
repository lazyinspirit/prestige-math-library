# ARCHITECTURE — every mechanism in this library, and why it exists

**Companion to `LEVELS.md`.** `LEVELS.md` says *what happens in what order*;
this file says *what each mechanism is, how it works, and which failure it was
built to prevent*. `SCHEMA.md` and `CLAUDE.md` win where they differ.

**Keep this current.** Every mechanism added, changed or retired gets an entry
here in the same commit. A mechanism nobody can find is a mechanism that gets
rebuilt worse. See §9.

Verified against the code 2026-07-27.

---

## 1. The shape of the system

Four layers, and **every one of them has caught defects the others missed**.
That is the design claim, and it is measured, not assumed.

```
  PROSE SCAFFOLD          research/plan-*.md         human page designs
        │  Beta-n-i reads
        ▼
  MACHINE SCAFFOLD        research/plan-spec.json    ids, order, deps
        │  validate-plan + depsource gate it BEFORE authoring
        ▼
  CONTENT                 items/*.md, library/*/*.md
        │  6 content gates + 4 reading tiers + 1 judge
        ▼
  RENDERED PAGE           app repo, read-only bind mount
```

The asymmetry worth internalising: **mechanical gates prove absence of a defect
class; reading tiers find defects; the judge is a cheap screen and finds almost
nothing.** Measured judge precision on this corpus is **21–24%**, and it scored
**0/3** on real historical defects. Never model it as the thing that finds
problems.

## 2. The content contract (`SCHEMA.md`)

Frontmatter fields, and what enforces each:

| field | meaning | enforced by |
|---|---|---|
| `id` | must equal filename | `depcheck` (`id-filename`) |
| `kind` | definition/lemma/theorem/corollary/example/counterexample/false-statement/remark | `depcheck` (`kind-prefix`), `validate-plan` (`prefix`) |
| `status` | `draft` → `published` | `depcheck` (`draft-on-published-page`) |
| `deps` | **logical** dependencies | `depcheck` (cycles, resolution), `citecheck` |
| `justified_by` | forward-pointing discharge of a definition's obligation | `depcheck` (target must transitively depend on the citer) |
| `forward_refs` | references to later material | `fwdcheck` |
| `external_refs` | *mentions* of unproved items | `extcheck` |
| `proved_here: false` | this item is a ‡ catalogue entry | `extcheck` |
| `landmark` | appears as a flowchart node | curation only |
| `verification.precheck` | phase-format result | `precheck` |
| `verification.judge` | **passes only, never rejections** | honesty rule |
| `verification.audited` | **the owner's field alone** | `depcheck` (`published-unaudited`) |

**Why `justified_by` is separate from `deps`:** a lemma proving a definition is
well-defined *depends on that definition*, so putting it in `deps` creates a real
cycle. The split is what lets `depcheck` guarantee acyclicity without losing the
justification.

**Why `external_refs` is separate from `deps`:** a `deps` edge to an unproved
remark would inject a false logical edge into acyclicity, the page prerequisite
closure and the flowchart — `def-axiom-of-choice` does not *depend* on Cohen's
theorem.

## 3. The eight gates

Run from the repo root. The orchestrator runs the authoritative pass **after**
every agent in a stage finishes; no stage advances on an agent's report.

### 3.1 `precheck.mts` — phase-proof format
Normative checker is `worker/src/precheck.ts`. Verifies every proof-bearing item
parses as a phase proof and that its declared strategy is discharged.

Strategies: `direct`, `contradiction`, `cases`, `induction`, `contrapositive`,
`constructive`. Tag families, opener → discharge: `contrapositive-reduce` →
`discharge-contrapositive`; `assume-contra` → `discharge-contradiction`;
`base`/`ih` → `discharge-induction`; `assume-case`/`cases-exhaustive` → `cases`.
Errors: `no-given`, `no-steps`, `no-qed`, `qed-not-final`,
`qed-not-final-postrepair`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`.

**It is LINE-BASED**, so a soft-wrapped step fails. Run `reflow.mts` first. On
REPAIR output the repo stores the canonical stratification — a step citing
phase-k steps sits in phase k+1 — adopted with `adopt-repair.mjs`, which also
rewrites stale prose references like "step 3.2" that precheck cannot see.

### 3.2 `depcheck.mjs` — dependency and circularity
Runs over **actual content**, not the plan, so it stays true as things are
authored. Errors: `id-filename`, `yaml-escape`, `kind-prefix`, `dep-unresolved`,
`link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`,
`page-item-dup`, `draft-on-published-page`, `published-unaudited`, `orphan`,
`multi-home`.

**This is the mechanical guarantee behind "no circular reasoning."**
`published-unaudited` is what forces the owner's re-audit when an amendment
changes published text.

### 3.3 `fwdcheck.mjs` — forward references
`forward-on-spine` is the hard one: a *load-bearing* forward reference on a
definition, lemma, proposition or theorem is forbidden, because the spine must
stay strictly ordered. Everything outside `## Remarks` counts as load bearing.
Also `forward-undeclared`, `forward-in-deps`, `forward-not-later`,
`forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`,
`stack-cycle`. Computes a `direct`/`inherited` marking that propagates along
`deps`, so a consequence of a forward reference is marked too. `--ledger` writes
the generated forward-reference ledger.

### 3.4 `extcheck.mjs` — the ‡ "not proved here" tier
`proved_here: false` items must be `rem-`, have `precheck: n/a`, carry no proof
section, carry a real citation, and have **no judge block** (there is no proof to
judge): `unproved-kind`, `unproved-has-proof`, `unproved-judged`,
`unproved-precheck`, `unproved-on-published`, `unproved-uncited`. For references:
`external-dangling`, `external-in-deps`, `external-not-unproved`,
`external-unused`.

**A DEPENDENCE propagates; a MENTION does not.** Owner decision on a
measurement: propagating mentions marked 26 items instead of 13, including
`thm-zorn` and `thm-well-ordering-theorem`, which are proved in full here and
rest on Cohen for nothing — the chip would have asserted something false.
Mentions are added *after* the propagation fixed point so they can never act as
seeds.

### 3.5 `citecheck.mjs` — mis-attribution
Heuristic lint for the **dominant historical defect class**: 14 of 50 defects in
a 150-item certification pass were a fact citing an item that does not state it.
Pattern-matches elementary ordered-field and order-theoretic moves against the
item actually cited. Also flags **nonstrict attribution**: a source giving only
the strict form cited for a nonstrict claim. Warnings, not hard errors —
`[cited-not-in-deps]` has documented legitimate cases, notably naming an axiom
without using it.

### 3.6 `rendercheck.mjs` — defects visible only when rendered
Exists because two defects reached the owner's eye at level 8 in text that was
valid markdown, valid frontmatter, valid phase format and mathematically
correct. `wikilink-in-math` (the renderer rewrites `[[id]]` before KaTeX, so a
wikilink inside `$…$` silently kills the block while every other gate stays
green), `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`,
`unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, and
**`katex-parse-error` from a real KaTeX parse** using the app's own KaTeX.

### 3.7 `validate-plan.mjs` — the scaffold, before authoring
`resolve`, `item-cycle`, `page-cycle`, `forward-ref`, `intra-order`, **`b-leaf`**
(nothing may depend on an item on a B/examples page — B pages are leaves),
`orphan`, `dup-id`, `prefix`, `size` (WARN above 30 items), `companion`.

### 3.8 `depsource.mjs` — where each dep actually lives
Per dep: `published` / `planned-earlier` / `draft-page` / `homeless` /
`planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is
the forward-reference report.

**Known blind spot: it reads `deps` only and cannot see `forward_refs`.** A level
can declare dozens of forward references while `depsource` reports
`planned-later 0`. This caused a false "zero forward references" claim at
level 9.

### Helpers
`reflow.mts` (join soft-wrapped steps; purely syntactic, never changes
mathematics) · `adopt-repair.mjs` · `consumers.mjs --changed` (who cites what I
touched — one agent per page otherwise leaves consumers unowned, which has failed
three times) · `rounds.mjs` (static levels; **ignores publication state**) ·
`gen-spec.mjs`.

## 4. The ledgers — state that must outlive its own repair

| ledger | written by | answers |
|---|---|---|
| `research/level<n>-judge.jsonl` | `judge.mts` via `JUDGE_VERDICTLOG` | how many times was this proof refuted? |
| `research/level<n>-touches.json` | `touchlog.mjs` | how many times was this proof repaired? |

Both exist for the **twice-touched escalation rule**, and both were built because
the data was being destroyed:

- `verification.judge` records **passes only** — correctly, since an absent block
  honestly says "not yet judged" while a stale one claims a pass on text the
  judge never saw. So a rejection vanished the moment it was repaired.
  `JUDGE_COSTLOG` stores spend, not verdicts.
- Repairs had **no record at all**: they lived in subagent prose, and item files
  are untracked while a level is draft, so `git log` cannot supply them either.

`touchlog.mjs` hashes item files per stage. **The hash excludes the
`verification` block**, because stamping a judge verdict rewrites the file
without touching a character of mathematics — hashing raw bytes charged 53
stamped items with a phantom repair in one pass. It keeps `title`, `deps`,
`forward_refs`, `external_refs` and `proved_here`, since changing those *is* a
mathematical edit despite living in frontmatter. First appearance = creation,
not repair.

## 5. The judge

`tools/judge.mts`, `z-ai/glm-5.2` over ofox. **Never a Claude model for a session
item** — the tool refuses `anthropic/claude*` without `--allow-claude`.

**Its prompt is a file, not a habit:** `briefs/judge-conventions.txt`, invoked as
`--conventions "$(cat briefs/judge-conventions.txt)"`. The judge is the only
actor whose prompt is a bare CLI argument, which made it the weakest link — a run
that forgot the string gets a judge flagging 30-second gaps, driving repair
cycles against a 21–24%-precision screen.

**Measured behaviour, all in the tool header:** retry envelope
`AbortSignal.timeout(420_000)` × 3 ≈ **21 minutes worst case per item**, so a
slow call is usually not a hang; verdicts drop intermittently and must be re-run;
LaTeX backslashes in the reason break JSON parsing. **`keep: null` is not a
pass.**

**The injection test is the only thing that separates a judge from a rubber
stamp.** DeepSeek v4-flash was adopted for 14× lower latency, then reverted: it
passed a *blatantly* false injected claim while writing a confident summary of
the proof it had failed to check. **Never adopt a judge model without running the
injection test recorded in the tool header.**

## 6. The prompt-side mechanisms (`briefs/`)

Half the workflow. These are templates; substitute `<n>` and `<i>`.

| file | actor | carries |
|---|---|---|
| `beta-scaffold.md` | Beta-n-i, steps 1–2 | plan order, namespaced writes, dep resolution, id reuse, seams |
| `beta-step8-audit.md` | Beta-n-i, step 8 | "you are the first real reader", ranked hunting grounds |
| `authoring.md` | authoring agent, steps 5/7 | precheck traps, shipped-defect checklist, judge protocol |
| `alpha.md` | Alpha-n, steps 4/9/10a | propagation, seam audit, final audit, twice-touched interaction |
| `judge-conventions.txt` | the judge | the triage rule and library conventions |

**Every one states the triage rule verbatim.** Non-negotiable: mathematical
accuracy, logical validity, correct citation. Explicitly acceptable, zero effort:
citational quirks, gaps a competent reader closes **within 30 seconds**,
non-fatal quirks, letter-level imperfection. It is repeated rather than
referenced because an agent that does not receive it damages correct text roughly
three times per real repair.

## 7. Presentation (FROZEN — owner-approved 2026-07-24)

Implemented in the **app repo**, `/root/Projects/prestige-intelligence`. Do not
restyle without an explicit in-session owner instruction.

| file | owns |
|---|---|
| `web/lib/library-kinds.ts` | per-kind palette; colour always paired with the kind label |
| `web/components/library/ItemBody.tsx` | sectioned proof rendering, per-citation tag chips |
| `web/components/library/badges.tsx` | kind chips, DRAFT banner, provenance + verification chips |
| `web/components/library/Mermaid.tsx` | flowchart v2, birds-eye, `landmark: true` nodes only |
| `web/lib/library-forward.ts` | the sky / dashed / ↗ forward-reference accent |
| `web/lib/library-external.ts` | the fuchsia / dotted / ‡ accent + `unprovedDependence` closure |
| `web/lib/library-categories.ts` | index grouping (itself frozen since 2026-07-26) |
| `web/lib/math-library.ts` | `plainTitle`, the one de-TeX for every plain-text context |

**Three ranked citation tiers, none relying on colour alone:**

| tier | colour | underline | glyph |
|---|---|---|---|
| ordinary citation | indigo | solid | none |
| forward reference | sky | dashed | ↗ |
| not proved here | fuchsia | dotted | ‡ |

The bottom tier **outranks** the middle: "never proved here" is a far stronger
caveat than "developed later". Since 2026-07-27 the ‡ tier is a **catalogue
only** — new content may not depend on it (`LEVELS.md`, self-contained scope).

## 8. What no mechanism covers

State this honestly rather than implying coverage.

- **No gate reads a page summary.** The judge reads items and cannot see a page
  file; precheck ignores prose. Six summary defects survived every gate at
  level 7; two published summaries were false at level 8.
- **`depsource` cannot see `forward_refs`** (§3.8).
- **Scope-denial decay has no detector.** A claim true when written that a later
  level falsifies changes no file, so every gate passes forever. Only the step-10b
  sweep finds it — and a repair confirmed by reading the diff can leave the same
  falsehood elsewhere in the same file, which happened at level 8.
- **`citecheck` is a heuristic**, not a proof of correct attribution.
- **No page has ever been visually rendered.** `rendercheck` closes part of this.
- **The Fable audit** required by `CLAUDE.md` before publishing mathematical
  content has not been satisfied at level 8 or 9; step 10a is the nearest
  equivalent but is Alpha, not a separate tier.

## 9. Maintaining this file, `LEVELS.md`, `WORKFLOW.md` and `CLAUDE.md`

Owner instruction, 2026-07-27. These four are normative and **must be updated in
the same commit as the change they describe**:

| doc | scope |
|---|---|
| `CLAUDE.md` | session entry point, hard rules, publish path |
| `WORKFLOW.md` | per-page runbook and the hard rules in full |
| `LEVELS.md` | the per-level build, step 0 → 10 |
| `ARCHITECTURE.md` | this file — every mechanism, how it works, why |

**Triggers:** a new or retired tool; a new gate error code; a change to the agent
hierarchy or a brief; a new owner rule; a change to the frontmatter contract; a
measured fact about a mechanism (a precision number, a timeout, a failure mode).

**Verify against the code, not from memory.** Reading the source for this file
turned up a stale cross-reference and two undocumented mechanisms on the day it
was written. When a doc and the code disagree, **the code is the truth and the
doc is the bug** — fix the doc in that commit.
