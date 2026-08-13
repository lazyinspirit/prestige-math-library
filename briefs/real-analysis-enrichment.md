# Real-analysis enrichment brief — PHASE 1 ONLY

**You are an expert of real analysis.**

Owner commission, 2026-08-13. Find reputable textbooks, examine every published
real-analysis page, identify gaps and thin coverage, and then **enrich existing
pages by adding new items to them**. The owner split the work in two and you are
doing only the first half:

| phase | what | your job |
|---|---|---|
| **(1a) PLAN the enrichment** | decide exactly which items to add to which existing pages | **DO THIS, then STOP** |
| (1b) author those items | write the item files | **NOT YET — owner reviews the plan first** |
| (2) new A/B pairs | whole new pages | **PROPOSE ONLY — do not build.** They go through the standard step 0→10 cycle later, alongside other buildable pairs |

The owner's words: *"Do (1) first then pause. We'll do (2) together with other
buildable A/B pairs later."* And, 2026-08-13, adding the gate that defines your
run: ***"Before you build any new real analysis items, give me a rundown of what
items are to be added, as well as any planned real analysis A/B pairs."***

## ⛔ YOU AUTHOR NOTHING ON THIS RUN

**Do not create a single file under `items/`.** Not a draft, not a stub. Your
entire output is a plan the owner reads and approves before any item exists. A
previous dispatch of this brief was stopped mid-run precisely to enforce this,
and it had authored nothing — keep it that way.

You still do the full research and the full analysis. The gap report, the source
harvest, the exact item-by-item proposal and the phase-2 pair proposals are all
expected in complete detail. The only thing withheld is the writing of the items
themselves, which is a separate dispatch after the owner approves.

## No permission prompts, ever

Owner's standing rule (2026-07-30, broadened 2026-08-11): *"Do not ask and do not
let any agents ask for shell command permissions, edit permissions, web search
permissions, git permissions, or any permissions whatsoever."* No segment of an
`&&` chain may prompt either. You already hold every permission you need. If
something genuinely cannot be done without new authority, **record a blocker** in
your report — that is the escape hatch, never a prompt. Any subagent you dispatch
carries this rule too.

---

## 1. Read first

`CLAUDE.md` (the standing owner rules), `SCHEMA.md` (the item contract),
`briefs/authoring.md` (house authoring discipline), `briefs/beta-scaffold.md`
§§ on source depth and the coverage harvest, and
`items/lem-cauchy-bounded.md` — the approved exemplar of house proof style.

The published real-analysis corpus is **87 page files** in
`library/real-analysis/`. Read the pages you intend to touch, in full, including
their `-examples` companions. `research/plan-spec.json` carries each page's item
list with ids, kinds and deps; a page with a non-empty `items` array is real.

---

## 2. THE RULE THAT SHAPES THIS WHOLE JOB

**A published page may not list a draft item.** `tools/depcheck.mjs` enforces it
as error `draft-on-published-page`, and `SCHEMA.md` §445 states it: *"a draft
item on a published page is a broken page"*.

It shapes the plan you are writing, so understand it now even though you author
nothing on this run. When the items are eventually written they will be
`status: draft`, and a draft may **not** be added to the published page file in
`library/real-analysis/`. Adding it is the publish action and it belongs to the
owner, after audit.

That is why placement is recorded as data rather than applied to the page. Your
plan proposes every new item's intended placement in a manifest:

`research/ra-enrich-01-placement.json`

```json
{
  "new_items": [
    { "id": "thm-...", "page": "sine-cosine-and-the-definition-of-pi",
      "kind": "theorem", "after": "cor-sin-x-over-x-limit",
      "why": "one line: the gap this closes" }
  ]
}
```

`after` names the existing item it should follow in reading order, so the page
keeps a sane dependency order when the owner splices it in. Every new item must
appear in this manifest — **it becomes the judge and audit scope when the items are
built** — and an
item missing from it is an item nobody reviews.

**Do not edit any file under `library/`. Do not edit `research/plan-spec.json`.
Do not change any `status:` field to `published`.**

---

## 3. Only the new items are reviewed

Owner instruction: *"If we are adding new items to an existing page, ONLY judge
and audit newly added items, not the whole page."*

This mirrors the audit workflow's A7 exception, where a targeted repair rejudges
only the exact repair ids rather than sweeping a whole wave. It is the
orchestrator that runs the paired judges and dispatches the independent audit —
**not you.** You author; you do not judge or audit your own work. That separation
is not negotiable in this library: authors never judge, and no author certifies
its own work.

Your obligation is to make the review scopeable: a complete, exact list of new
item ids in the manifest, and every new item genuinely self-contained.

---

## 4. What you may write

| path | may write |
|---|---|
| `items/**` | **NO — nothing at all on this run** |
| `research/plan-realanalysis-pages.md` | **yes** — the real-analysis prose scaffold |
| `research/ra-enrich-01-*` | **yes** — manifest, gap report, harvest |
| existing `items/*.md` | **no**, unless a published dependency is an unambiguous falsehood — see below |
| `library/**` | **no** |
| `research/plan-spec.json` | **no** |
| any other `research/plan-*.md` | **no** — thirteen subject scaffolds are being written concurrently by other agents and you would collide with them |

**The narrow repair exception.** If a published item you depend on states an
unambiguous falsehood, `CLAUDE.md` §"Obvious published-dependency repair" lets you
repair it — the exact statement checked against a reputable source with its URL,
or a directly checkable elementary correction, recorded in your report with the
error, replacement and validation route. It is *not* a licence to choose between
conventions, improve exposition, or close a nonfatal gap. If it needs a debatable
restatement, a new theorem, a deletion or a reading-order change, it is not
obvious: report it and leave it alone.

---

## 5. Source research

Obtain the **full text of at least two reputable real-analysis textbooks**, plus
lecture notes and other open sources. Rudin *Principles of Mathematical
Analysis*, Tao *Analysis I/II* (author-hosted), Abbott *Understanding Analysis*,
Pugh *Real Mathematical Analysis*, Bartle–Sherbert, Zorich *Mathematical
Analysis*, and Stein–Shakarchi are the standard candidates; Tao's is already the
library's most-cited source, so matching its conventions is usually right.

For every source record the exact chapter/section range you read, enumerate that
source's own section and named-result headings over that range, and give **every
heading a disposition**: `included` (naming the new item id), `inline`,
`already-published` (naming the published item), `deferred` or `out-of-scope`,
the last two with a reason about that specific result. Write it to
`research/ra-enrich-01-harvest.md`.

`WebFetch` cannot read PDFs — use a Python venv with `pypdf` to extract a PDF's
text locally.

---

## 6. Authoring standard

You are not writing items on this run, but every proposal in your plan must be
authorable to this standard by the next dispatch — so apply it while deciding
WHAT to propose. Everything in `CLAUDE.md` binds, in particular:

- **Self-contained scope.** No item may rest on a result the library has not
  established. Search for the exact statement, then prove it from available
  dependencies; if that fails, build the missing prerequisite. Dropping a result
  for want of a lemma you could have written is not permitted.
- **Generated-claim minimization.** Do not invent a theorem, proposition or
  definition to enrich a page. Source-backed statements are the default. An
  AI-generated statement or construction may never be a dependency target.
- **Component provenance.** Set `provenance.statement` and `provenance.proof` on
  every item, with a recorded rationale.
- **Citation fidelity.** State the cited result itself, quoted exactly where
  practical or in the smallest faithful shortening — no changed hypothesis,
  quantifier, domain, direction or conclusion, and no invented converse.
- **Natural mathematical voice.** No AI-sounding labels or interpretive filler.
- **Ids are immutable and often already taken.** Check before coining:
  `ls items/ | grep -i <fragment>`.
- **Boundary pass.** Empty, zero, one, degenerate, endpoint, nonempty-choice, and
  both directions of every iff.
- **No applied `\iota(n)`** around a natural number; write the number.

Do not run `precheck` — there are no files to check. It runs in the authoring
dispatch, after the owner approves this plan.

---

## 7. Deliverables — a PLAN, and then stop

1. `research/ra-enrich-01-gaps.md` — every published real-analysis page you
   examined, what it covers, and every gap or thin spot you found, each marked
   **phase 1** (an item on an existing page) or **phase 2** (needs a new pair).
   Where the library already covers something, **say so and say where** — a
   report that only lists holes is not a survey.
2. `research/ra-enrich-01-harvest.md` — the source harvest of §5.
3. **`research/ra-enrich-01-PLAN.md` — the owner-facing rundown. This is the
   deliverable the run exists for.** Two tables.

   **Table A — items proposed for existing pages.** One row per item:
   proposed id · kind · the exact statement in one sentence · target page · the
   item it should follow · the dependencies it needs and whether each is already
   published · the source backing it · one line on the gap it closes. Group the
   rows by target page, and give each page a one-line note on how many items it
   has now and how many it would have after.

   **Table B — proposed new A/B pairs (phase 2).** One row per pair: working
   title · why it cannot be an item on an existing page · its place in reading
   order (which published page it must follow and why) · the results it would
   carry · its sources. These are proposals for a later build cycle, not work.

   Open the file with a short summary an owner can read in a minute: how many
   items across how many pages, how many new pairs, and the three most valuable
   things in the plan.
4. `research/ra-enrich-01-placement.json` — the machine-readable form of Table A,
   per §2. It becomes the judge/audit scope when the items are eventually built.
5. Updates to `research/plan-realanalysis-pages.md` recording the phase-2 pairs.
6. `research/ra-enrich-01-report.md` — anything that did not fit the tables: a
   published item you believe is wrong (report it, do not repair it on this run),
   amendments owed to another track, and any blocker.

**Then stop.** Author nothing, judge nothing, audit nothing, publish nothing,
build no pair, run no level-build gate. Hand the plan back and end your run.
