# Beta brief for run `frontier-14` (steps 1 and 2)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* This binds a **compound
> command as a whole — no segment of an `&&` chain may raise a prompt either.**
> Use command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job here and you
> never ask before searching. If an indispensable operation has no escalation-free
> form, **record a blocker in your notes** — that is the escape hatch, not a
> prompt. This rule binds every subagent you dispatch; carry it into their briefs.

You are a **Beta on run `frontier-14`**, scaffolding one batch for the public
math library. The checkout is the directory you were started in. Your batch is
named in the "This dispatch" section appended below. After step 4 you return as
the **step-5 author** of everything you scaffold here, so prepare a scaffold you
can author faithfully without rediscovering its reasoning.

Five other Betas are working other batches of this run **in parallel**. Your
batch has **no dependency edge to any other batch**, and that is not a promise —
it is mechanical. `validate-plan.mjs` raises the hard error `undeclared-prereq`
for any item depending on a page outside its own page's declared `requires`
closure, and no in-run pair is inside any other in-run pair's closure. So you
can neither wait on another batch nor cite one. Write only your own files.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow and hard rules. Normative.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation rules.
4. `briefs/beta-scaffold.md` — **your base contract**, in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/frontier-13-batch-1.pages.json` and
   `research/frontier-13-batch-1.notes.md` — the output shape you are producing,
   from the most recent completed run.
7. `research/frontier-14-step0-batching.md` — this run's frontier, batching,
   seam analysis and the one `requires` drift that was found and resolved.
8. `research/frontier-14-PREVENTIONS.md` — **the specific defects earlier runs
   shipped, and what is different this time.** Sections A1, A3 and A6 are about
   mistakes you personally are in a position to prevent.
9. The prose scaffold sections named in your dispatch.

Then open, **on disk**, every published item you intend to cite. The item, not
the scaffold's description of it, and not your memory of the subject.

## 1. What this run is for

Nine A/B pairs across six batches, in complex analysis, topology, number theory,
linear algebra and category theory. This is **wave 1 of a 19-wave campaign** over
76 planned pairs — everything downstream in your subject waits on the page you
are scaffolding, so a thin page here is not a local defect, it is a foundation
that later pages will cite and cannot repair.

Three batches are deliberately single-pair because their subject deserves a whole
Beta's attention. Yours may be one of them; if it is, that is not a light load,
it is a mandate to read more of each source.

The failure this process exists to prevent is a **thin page that passes every
gate**. A previous run shipped `group-actions-and-cayleys-theorem` with orbits,
stabilisers and the orbit partition but **no orbit–stabiliser theorem**, no class
equation, no Cauchy's theorem, and an empty B page — while citing Sharifi,
Brosnan, Judson, Axler and Diestel. The sources were fine. The Beta cited a
source *without harvesting it*: Brosnan's note is literally titled *Orbits and
stabilizers*, and orbit–stabiliser never reached the scaffold.

Do not produce a four-item page.

## 2. The rules that govern this scaffold

**(a) The canonical-coverage harvest — a required, gated artifact.** You write
`research/frontier-14-batch-<i>.coverage.json`. Per A page: at least two
independent treatments, at least one a textbook, monograph or full lecture-note
set (an encyclopedia entry is a convention tiebreaker and can never be a pair's
primary backing — Wikipedia alone fails this gate); per source the exact
chapter/section range you actually read and an enumeration of **that source's
own** section and named-result headings across it; per heading a disposition —
`included` (+ the scaffolded item id), `inline` (+ the item whose proof absorbs
it), `already-published` (+ the published id), `deferred` or `out-of-scope` (+ a
reason of 40+ characters about **that specific result**; one reason pasted across
three declines is rejected). Full shape and rules: `briefs/beta-scaffold.md`
§"The canonical-coverage harvest". Run it before you report done:

```
node tools/coverage-checklist.mjs research/frontier-14-batch-<i>.coverage.json
```

There is no minimum result count — padding is forbidden. The bar is set by the
source, not by a target.

**Two additions this run, both from defects that shipped:**

- **Every `deferred` / `out-of-scope` disposition names the page id that would
  license it.** 52 of 68 declines in `frontier-13` were prose only, which is
  indistinguishable from a silent drop. If no planned page would license it, say
  that explicitly — that is a real answer, an unnamed destination is not.
- **A decline that names a missing dependency must be checked against disk
  before you write it.** Two `frontier-13` declines were overturned at step 9
  because the stated reason was false: one claimed a page was outside the closure
  when `def-quaternions` is published inside it; one claimed no floor definition
  exists when `lem-integer-part` is published and in closure. Four items had to
  be built at step 9. `grep -l` in `items/` costs you ten seconds.

**The locator must be real, and HTTP 200 is not a reading.** If you cite a range,
that range must exist in that edition and contain what you say it contains.
A `frontier-13` re-anchoring onto "Treil Ch. 4" was relayed on a 200 alone;
Chapter 4 contains zero occurrences of the four key terms and 9 items were left
sourceless. **WebFetch cannot read PDFs.** Use a venv:

```
python3 -m venv /tmp/pdfenv && /tmp/pdfenv/bin/pip -q install pypdf
/tmp/pdfenv/bin/python -c "
import sys,urllib.request,io
from pypdf import PdfReader
d=urllib.request.urlopen(sys.argv[1], timeout=60).read()
r=PdfReader(io.BytesIO(d))
print('pages', len(r.pages))
t=''.join((p.extract_text() or '') for p in r.pages[int(sys.argv[2]):int(sys.argv[3])])
print(t[:3000])
" <url> <from> <to>
```

An extraction returning 0 characters is a **library failure, not an absence** —
it means the PDF has no text layer, and you must find another edition rather
than report the result missing. Alpha re-opens sources at step 6 and checks the
harvest is faithful, not merely well-formed.

**Dead link? Recover before re-sourcing.** `url-sweep.mjs --recover` queries the
Wayback index under **host variants**, because a document moved behind a new
subdomain is archived only under its old host — querying the citation's own
hostname reads as "never archived". Re-sourcing costs a re-harvest and rewrites
every backed item's provenance; it is the last resort, not the first move.

**(b) Build the machinery; do not drop (owner, 2026-08-11).** If a theorem needs
a definition or theorem the library has not established, **build it**. Dropping
an important result because a prerequisite is missing is not a permitted
disposition. `deferred`/`out-of-scope` is for material belonging to another
page's topic, or resting on a whole subject area the library has not reached —
**never** for a lemma you could simply have written. Be ready to defend every
decline to Alpha, result by result.

**(c) Split an A page over 60 items (owner, 2026-08-11).** `validate-plan.mjs`
fails with error `size`. The remedy is always two or more A pages, each with its
own B companion, its own two-paragraph summary and its own slot in reading order
— never a shorter page with results dropped to fit. **Propose the split in your
notes at step 2** with proposed page ids and the exact cut; the orchestrator
adjudicates at step 3 and splices ids into `plan-spec.json` at step 4. Splitting
before authoring costs a spec edit; after authoring it is a rewrite. Several
pairs in this run are broad enough that a split is a live possibility — say so
early rather than trimming to fit.

**(d) Notation.** Never write the canonical embedding applied to a natural
number: no `\iota(n)`, `\iota(0)`, `\iota(k!)`. Write the number.
`content-policy.mjs` fails the batch with `notation-iota-applied`. Bare `\iota`
naming a basis inclusion in a universal property — a free group `(F,\iota)` with
`\phi\circ\iota=\iota'` — is standard and unaffected. Legacy items you cite still
use the old applied form; **leave them alone**, they are not your scope.

**(e) Provenance, and the dependency-provenance order.** Assign
`provenance.statement` and `provenance.proof` to every mathematical-content item
and record a rationale for each in your notes. Never make an `ai-generated`
Statement or Construction a load-bearing scaffold or proof dependency. A
published item with no component provenance is `legacy-unclassified` — that is
not evidence it is AI-generated; before making one load-bearing, either confirm
from your own knowledge that the exact statement is established, or find
reputable sources for that exact statement and its conventions, and record which
route you used.

**(f) B pages are leaves.** Nothing anywhere may depend on an item homed on an
`-examples` page — `validate-plan` error `b-leaf`, `depcheck` error
`b-leaf-content`. If a result on your B page turns out to be load-bearing, it
belongs on the A page. **This holds even when your A page declares a B page in
its `requires`**: two pages in this run do, and the edge makes the companion *A*
page citable, never the examples items themselves. Your dispatch says whether
this is you.

**(g) The citation you write is the citation that gets checked.** The largest
fatal class in `frontier-13` — ten of twenty-five step-8 rows — was an
`[F#]`/`[L#]` restatement claiming more than the cited item's Statement says,
with a numbered step then leaning on the inflated version.
`thm-carmichael-function-formula` applied `lcm` to an arbitrary finite list while
`def-lcm` says **"Two arguments only"** in as many words. So: **open the cited
item, and quote its clause exactly** when practical, else the smallest faithful
shortening — no changed domain, quantifier, hypothesis, direction or conclusion,
no invented converse. A clause's opening words are not a citation. If a
dependency looks insufficient, that is information: add inline steps, change
strategy, or reconsider whether the claim is true as stated. Never widen the
restatement. A new detector, `tools/citation-fidelity.mjs`, reports candidates
of this shape at steps 5 and 6 — it will find yours.

**(h) Boundary rows are dispositions, not boilerplate.** Your proof contract
carries eight anchored boundary axes per proof-bearing item. In `frontier-13`,
**2,169 of 3,144** rows were `not_applicable` with the most-repeated rationale
recurring **124 times**, id substituted — and **two of those false rows each hid
a fatal defect**: an `h = 0` division by zero, and an `n = 0` counterexample.
`proof-contract --strict` checks the eight are *present*. It cannot check one is
*true*. `tools/boundary-audit.mjs` now clusters reused rationales and flags a row
marked `not_applicable` on an axis the item's own text exhibits. Write the
disposition you actually determined, in words specific to that item; if an axis
genuinely does not arise, say **why it does not arise here**.

## 3. Your writable outputs — and nothing else

- `research/frontier-14-batch-<i>.pages.json` — the machine scaffold
- `research/frontier-14-batch-<i>.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-14-batch-<i>.coverage.json` — the harvest
- `research/frontier-14-batch-<i>.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-14-batch-<i>.coverage.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox (its
`spawnSync` of `node` is refused before any child runs). The individual scripts
are the same checks. The orchestrator runs the wrapper and is the gate of record.

## 5. Context checkpoint

At **60% of your own context** (owner, 2026-08-03), append a concise checkpoint
section to your own `research/frontier-14-batch-<i>.notes.md`: owned artifacts,
current substage, checks completed, the open mathematical question, and the exact
next action. Then continue. On resumption read it back and verify disk state
before acting. A checkpoint is not a pause and you do not wait for the
orchestrator.

## 6. Report

Finish with a concise report: pages and item counts, the harvest yield
(scaffolded vs declined, with the declines you expect to be challenged), any
split proposal, every published dependency you opened and the confidence route
used for each, convention disagreements found, and any blocker. State plainly
anything you could not do.

**Write the report to `research/frontier-14-batch-<i>.notes.md` as well as
returning it.** A finding that exists only in your closing message gets dropped:
eleven Alpha findings were lost in `frontier-13` exactly that way, two of them
real mathematics. The file on disk is what the orchestrator routes from.


---

# This dispatch

## Batch 2 of run `frontier-14` — step-3 fix pass

Group Alpha **a** reviewed batches 1–3. Your findings are the ones numbered
`B2-*` in its report:

`research/frontier-14-alpha-a-step3-scaffold-review.md`

Read them **in that file**. Do not work from a summary and **do not renumber**.
Finding ids are stable by construction. On an earlier run, fix briefs were
written from an agent's closing message instead of its report, eleven findings
were silently dropped, and renumbering made the losses look like completions —
two were real mathematics.

If the report contains no `B2-*` findings, say so in your notes and exit; a
clean batch is a valid outcome and costs nothing.

### What to do

1. Locate each of your findings by id.
2. Apply the fix, or push back **with the reason**, per finding.
3. The report's severity table says what each costs if left.
   `blocks \`sufficient\`` means the pair cannot proceed to step 4 unresolved.
4. Re-run your gates:

```
node tools/coverage-checklist.mjs research/frontier-14-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-14-batch-2.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

5. Append `## Step-3 fix pass` to `research/frontier-14-batch-2.notes.md`,
   one entry per finding id: `applied` / `pushed back` (+ reason) /
   `already correct` (+ evidence).

Alpha re-checks every finding from disk before the splice, so an `applied`
entry that changed nothing will be caught.

### Scope

Scaffold files for **your batch only**. Not `plan-spec.json`, not another
batch, not `items/`, not `library/`. Nothing is authored yet.

**No permission prompts of any kind**, including inside an `&&` chain.
