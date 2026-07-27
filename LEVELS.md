# The per-level build, step 0 to 10 — canonical

The owner builds this library **one A-page dependency level at a time**. This
file is the single description of that process. `SCHEMA.md` and `CLAUDE.md` win
where they differ; `WORKFLOW.md` is the older per-page runbook and remains true
of a single page's journey.

Everything below is verified against the code as of 2026-07-27.

---

## Actors

| actor | model | does |
|---|---|---|
| **owner** | human | approves step-3 findings one at a time; audits; sets `verification.audited`; the only one who may delete a result |
| **orchestrator** | this session | batching, splicing, briefs, the **gate of record**, personal audits, reporting |
| **Alpha-n** | Fable 5 | spawned at **step 4**, resumed at **step 9**; propagates approved changes into higher-level prose; audits cross-batch seams |
| **Beta-n-i** | Opus 5 | one per batch; step 1–2 scaffolding; step 8 audit of its own batch |
| **authoring agent** | Opus 5 | one per A/B pair; step 5 proof generation; step 7 fixes |
| **judge** | `z-ai/glm-5.2` via ofox | cheap adversarial screen. **Never a Claude model** for session items |

## Artifacts

| path | what |
|---|---|
| `research/plan-*.md`, `research/design-*.md` | **prose scaffolds** — human-readable page designs (RA-nn blocks, F1/T1–T10 topology track) |
| `research/sweep-*.md` | RAG sweeps: raw source material, *not* scaffolds |
| `research/plan-spec.json` | **machine scaffold**. `pages[]` of `{order, id, kind, category, title, companion, requires[], items[]}`; each item `{id, kind, title, strategy?, deps[]}` |
| `research/level<n>-batch-<i>.pages.json` / `.notes.md` | Beta-n-i's **only** writable outputs |
| `research/level<n>-judge.jsonl` | **refutation ledger** (`JUDGE_VERDICTLOG`) |
| `research/level<n>-touches.json` | **repair ledger** (`touchlog.mjs`) |
| `items/<id>.md`, `library/<category>/<page>.md` | the content itself |

---

## Step 0 — Batch (orchestrator)

1. Compute the **frontier from disk**, never from a remembered page count: an
   unpublished page all of whose `requires` are published. Do not trust
   `rounds.mjs` levels for this — they ignore publication state.
2. Divide the level's **A-pages into groups of at most 3**. A batch = one group
   **plus its example siblings**, so at most 6 pages. A batch always contains at
   least one A-page; a batch of orphan B-pages is not a defined shape.
3. **Pack to the cap of 3** by prerequisite affinity, so seams fall *inside* a
   batch. Merging batches can only remove cross-batch edges.
4. Report the **cross-batch seam count before spawning**. If the pages have no
   item lists yet the count cannot be computed — say so rather than reporting 0.

## Step 1 — Scaffold (Beta-n-i, all batches in parallel)

Each Beta reads the prose scaffold sections for its pages, plus every published
item it intends to cite — **the item on disk, not the scaffold's description of
it** — and emits machine-readable per-item scaffolds.

**Hard constraint — plan order.** An item may cite only an item earlier on its
own page, or an item on a page with a strictly smaller `order`. No exceptions.
Fractional orders exist (`formal-laurent-series-field` is 31.5), so a page can be
inserted without renumbering.

**Namespaced write protocol.** Beta may read anything and run any gate, but
writes **only** its two `research/level<n>-batch-<i>.*` files. Parallel batches
writing shared prose would overwrite each other silently — prose is not gated.

## Step 2 — Resolve dependencies (Beta-n-i)

Every external dependency must resolve to one of: a **published item on disk**;
an item **earlier on the same page**; an item on a **page earlier in plan order**
inside this level; or a **declared forward reference**.

Priority order, owner's words: **mathematical accuracy > robust dependencies and
citations > minimal forward references.**

**Self-contained scope (hard rule).** A theorem or example needing machinery
beyond current scope — measure theory, functional analysis, anything unbuilt —
is **DROPPED from the scaffold with a note recording why and what would license
it**, never authored with a `proved_here: false` dependency. A **mention** via
`external_refs` counts as an instance to eliminate, not only a load-bearing
`dep`. The sole exception is a **foundational axiom already adopted** (AC,
countable choice, dependent choice) and the independence facts *about* those
axioms, which are cited as external facts and never used as a proof step. The ‡
tier and the `deferred-*` catalogue pages stay; what ends is depending on them.
**A dropped item is deferred, not deleted — the note is what makes it
recoverable.**

**Reuse discipline.** Ids are IMMUTABLE on `main`. Grep `items/` and
`plan-spec.json` before minting; reuse or alias an existing id for an existing
statement.

## Step 3 — Report to the owner (orchestrator)

I verify every load-bearing claim from disk first (amendment 6: no stage advances
on an agent's report alone), then present findings **one recommendation at a
time**, each with **approve / defer / follow-up** and an explicit statement of
what breaks if deferred. Decisions are logged.

## Step 4 — Apply and propagate (orchestrator + Alpha-n)

Splice the Beta outputs into `plan-spec.json`. The splice keeps `plan-spec`'s
page metadata but takes the **union of `requires`** (Beta computes the closure
`validate-plan` demands), logs every disagreement, and hard-fails on an id clash.
**Alpha-n is spawned here**, not at step 9, and applies the `.notes.md`
amendments into higher-level prose scaffolds — one writer, so no silent
overwrite.

## Step 5 — Author (one agent per A/B pair, in parallel)

Each writes `items/<id>.md` and its `library/<category>/<page>.md`, `status:
draft`, `origin: session`. **Never** sets `verification.audited`. Adding a dep to
silence a checker when the proof does not use it is the dominant historical
defect class and is forbidden.

## Step 6 — Judge (parallel with step 5, per pair)

`tools/judge.mts`, model `z-ai/glm-5.2`. Pass `--topic` and `--conventions`;
put the triage rule in `--conventions` so 30-second gaps are not flagged.

**Always set `JUDGE_VERDICTLOG=research/level<n>-judge.jsonl`** and capture
stdout — `JUDGE_COSTLOG` records spend, not verdicts.

Known harness behaviour, all measured: **retry envelope is 7 minutes per attempt
× 3 attempts ≈ 21 minutes worst case per item** (`AbortSignal.timeout(420_000)`)
— a slow call is usually not a hang; verdicts are **dropped intermittently**, so
always re-run before concluding; a reason string containing LaTeX backslashes can
make the JSON unparseable, so ask for plain prose in `--conventions`. **Never
record a pass the judge did not give**; `keep: null` is not a pass.

## Step 7 — Adjudicate rejections (authoring agent)

**Adjudicate, do not comply.** Measured judge precision on this corpus is
**21–24%**, and it scored **0/3** on real historical defects. Each rejection gets
either a **fix**, with the defect named, or a **refutation**, with a verbatim
quote from the cited item. Then **delete the `verification.judge` block of
anything materially rewritten** (SCHEMA §3: a correction in Remarks counts) and
re-judge only what changed.

Standing instruction: **re-read your own Remarks with a numbered step's
suspicion.** Remark prose is where falsehoods hide.

## Step 8 — Batch audit (Beta-n-i audits its own batch)

Focus on once-rejected proofs and their neighbours; where the judge passed
everything, this stage is the **first real reading**, not a formality — at
level 8 it found 22 item defects and ~14 summary corrections after a clean judge
sweep. Ranked hunting grounds: **Remark prose · page summaries · counts stated in
prose · index ranges at the first index (ℕ contains 0) · citing an item for a
claim it does not make · scope-denial phrasing that decays.**

## Step 9 — Seam audit (Alpha-n, resumed)

Bounded to **cross-batch dependency edges and their immediate neighbours**,
computed mechanically and handed over, so the job scales with seams rather than
level size. Alpha keeps a standing licence to pull any item and reports what it
read.

**Zero declared edges between two pages is a finding, not a clean bill.** Ask
what *should* connect.

## Step 10 — Rundown, then pause

Full report: forward references present, judge coverage counted from frontmatter
on disk, gate results, escalation set, readiness to publish. **Then stop for the
owner.**

**Every level ends with a scope-denial sweep of the published corpus, over ITEMS
AND PAGE SUMMARIES BOTH.** Grep `does not develop`, `not defined in this
library`, `anywhere in it`, `not yet written`, `has no item`, `not introduced in
this library`. Amendments to published pages land **in the same commit that
publishes the level**, never before, with `verification.audited` cleared so
`depcheck` forces the owner's re-audit. After any such repair, **re-grep the file
you repaired** — a level-8 fix corrected one sentence and left the same
falsehood sixteen lines away.

---

## The escalation rule (fires at any step)

A proof **refuted OR repaired more than once** is structurally suspect. Two
independent triggers; count **refutations + repairs combined, per item**:

1. **Judge refutations > 1 before step 9** → name it in Alpha-n's step-9 brief;
   Alpha reviews **the proof and all neighbouring dependencies**, since a proof
   that keeps failing is often correct and resting on a bad neighbour.
2. **Refuted or fixed > 1 by any subagent, Alpha-n included** → the orchestrator
   audits it **personally**, and this does not wait for step 9.

The personal audit must state the **nature** of the fault (mathematical
inaccuracy / mis-cited dependency / unjustified step / judge false positive) and
the **ramification of dropping** the result: what cites it, what breaks, whether
a weaker true statement serves. Then report and iterate with the owner.
**NEVER remove a theorem or example without explicit owner approval** — at 21–24%
precision a repeated rejection can be a repeated false positive.

```
node tools/touchlog.mjs snap  research/level<n>-touches.json "<stage>"   # after EVERY item-modifying stage
node tools/touchlog.mjs audit research/level<n>-touches.json research/level<n>-judge.jsonl
```

Repairs are **measured from disk**, never counted from an agent's report.

## Triage — the standing rule, binding on every actor including me

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

State it in every brief and in `--conventions`. The bar is a *rich,
self-contained, accurate* library, not a perfect one. Prefer one reusable lemma
over a repeated inline argument (`cor-archimedean-reciprocal` retired a gap in 24
items). **Do not trim landmarks.**

## The eight gates — the orchestrator runs the authoritative pass

| gate | catches |
|---|---|
| `precheck.mts` | phase-proof format. `no-given`, `no-steps`, `no-qed`, `qed-not-final[-postrepair]`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`. Strategies: direct, contradiction, cases, induction, contrapositive, constructive. Tag families open→discharge: `contrapositive-reduce`→`discharge-contrapositive`, `assume-contra`→`discharge-contradiction`, `base`/`ih`→`discharge-induction`, `assume-case`/`cases-exhaustive`→`cases`. **Line-based** — run `reflow.mts` first; adopt REPAIR output with `adopt-repair.mjs` |
| `depcheck.mjs` | `id-filename`, `yaml-escape`, `kind-prefix`, `dep-unresolved`, `link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`, `page-item-dup`, `draft-on-published-page`, `published-unaudited`, `orphan`, `multi-home` |
| `fwdcheck.mjs` | `forward-on-spine` (load-bearing forward ref on a def/lemma/prop/theorem), `forward-undeclared`, `forward-in-deps`, `forward-not-later`, `forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`, `stack-cycle`; marks `direct`/`inherited` |
| `extcheck.mjs` | `unproved-kind`, `unproved-has-proof`, `unproved-judged`, `unproved-precheck`, `unproved-on-published`, `unproved-uncited`, `external-dangling`, `external-in-deps`, `external-not-unproved`, `external-unused` |
| `citecheck.mjs` | mis-attribution heuristic — the largest historical defect class (14 of 50) |
| `rendercheck.mjs` | `wikilink-in-math`, `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`, `unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, `katex-parse-error` (**real KaTeX**) |
| `validate-plan.mjs` | scaffold: `resolve`, `item-cycle`, `page-cycle`, `forward-ref`, `intra-order`, **`b-leaf`** (nothing may depend on a B page), `orphan`, `dup-id`, `prefix`, `size` (WARN >30), `companion` |
| `depsource.mjs` | per dep: `published` / `planned-earlier` / `draft-page` / `homeless` / `planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is the forward-reference report — but it reads `deps` only and is **blind to `forward_refs`** |

Helpers: `rounds.mjs` (static levels), `consumers.mjs --changed` (who cites what
I touched), `gen-spec.mjs` (regenerate the spec).

## Publish (after owner audit)

Flip `status: published` — **that is the publish action**, the live site reads
this directory. A published page listing a draft item is a hard error. Commit
with conventional-commit style, **no `Co-Authored-By` trailers, ever**. GitHub is
backup only, never on the serving path.
