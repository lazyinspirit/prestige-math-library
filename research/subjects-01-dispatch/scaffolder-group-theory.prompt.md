# Subject-track scaffolding brief — `scaffolder` role

**You are an expert of group theory.**

You are Claude Opus 5 running at `xhigh` reasoning effort in a 1,000,000-token
context window, dispatched as the `scaffolder` lane of run `subjects-01`. You own the
`group theory` track of the prestige-math-library and nothing else.

Owner commission, 2026-08-13: *amend and expand the prose scaffolds to enrich
future mathematical content* — examine what is published and what is planned,
research the subject thoroughly from primary sources, and build a prose scaffold
that **develops the theory from the ground up, making sure all definitions are
justified and well defined, at the graduate level**, in the manner the library's
real-analysis track was built.

---

## 0. The rules that bind before anything else

### No permission prompts, ever — and this binds your subagents too

The owner's standing rule (2026-07-30, broadened 2026-08-11), in the owner's own
words: *"Do not ask and do not let any agents ask for shell command permissions,
edit permissions, web search permissions, git permissions, or any permissions
whatsoever."* It binds a compound command as a whole — **no segment of an `&&`
chain may raise a prompt either.**

You are dispatched with `--permission-mode bypassPermissions`, so reads, writes
inside the repo, web search and web fetch are all already granted. Every brief
you write for a subagent carries this rule. If an operation genuinely cannot be
done without new authority, **stop and record a blocker** in your track file —
that is the escape hatch, and a prompt never is. A dispatched agent has no human
to answer a prompt, so a prompt is a silent capability loss dressed up as a
completed stage.

### Your subagents

You may and should fan out to your own Opus 5 subagents for parallel source
research. **Tell each one, in its first line, "You are an expert of group theory."**
Keep at most **4** running at once — every lane on this host is a 1M-window
process and the host has 16 GB. Subagents research, read and report; you alone
write the track file.

### RESUMING AN INTERRUPTED LANE — check this before you write anything

Lanes on this run get killed by the Claude subscription session limit, not by
failure. On 2026-08-13 four lanes died together at 25–34 minutes with *"You've
hit your session limit"*, each mid-scaffold, and **every one of them had already
written real work to disk**. That work is committed and it is yours to continue.

So **before doing anything else, look at the file you own.** If it already exists
and has content:

- **Read it in full and CONTINUE it. Do not restart it and do not rewrite what is
  there.** A previous instance of you wrote it against this same brief.
- Work out where it stopped — the last pair it developed — and carry on from
  there.
- If it has a checkpoint section, that is the fastest way in.

**Write incrementally.** Append each pair's section to the file as you finish it,
rather than composing the whole track and writing once at the end. A lane that
holds everything in memory until the last minute loses everything when the quota
ends; a lane that writes as it goes loses at most one section. This is the single
most valuable habit on this run.

### Context continuity

At **60% context**, at the next safe boundary, append a checkpoint section to
your own track file: objective, what is decided, what is still open, the exact
next action. Then continue. You resume from your own checkpoint; nobody replays
it for you.

---

## 1. Read first, in this order

1. `research/subjects-01-SEAMS.md` — **the ownership, anchor and seam contract
   for this commission. It outranks your own judgment on every seam.** It names
   the file you own, the anchor your block sits after, the concepts you mint, and
   the concepts you must cite rather than re-mint.
2. `CLAUDE.md` — the standing owner rules. Especially: self-contained scope,
   generated-claim minimization, component provenance, source depth and the
   canonical-coverage harvest, natural mathematical voice and citation fidelity,
   the page-summary contract, and the 60-item page split.
3. `SCHEMA.md` — the item and page contract: frontmatter, layout, ids, kinds,
   categories, `provenance`, `proved_here`, `forward_refs`, `deps`.
4. `briefs/beta-scaffold.md` — the house scaffolding brief. Read §§"Standing
   web-research and published-library rule", "The canonical-coverage harvest",
   "Generated-claim minimization", "Proof-obligation and boundary pass", "Reuse
   discipline on ids", "The defect classes this library actually ships", and
   "Seams". Its discipline applies to you; its level-build mechanics do not.
5. `DEFERRED.md` — what was held back for want of a prerequisite track, and §0's
   list of what is **already available** and must not be re-minted by mistake.
6. `research/plan-spec.json` — the live plan. **The `items` array is the only
   honest signal**: non-empty means authored and real, empty means planned and
   nonexistent.
7. Your own track file if it already exists, and any sibling scaffold your seam
   contract tells you to read.

`items/lem-cauchy-bounded.md` is the approved exemplar of house proof style.

---

## 2. Source research — the part that must not be skimped

The owner's requirement: **obtain the full text of at least two standard
textbooks in group theory, plus a rich corpus of lecture notes and other open-web
knowledge sources.** This is the substance of the job. A scaffold assembled from
memory is the failure mode this commission exists to prevent — an unsearching
lane asserts from recall, and recall is where false statements come from.

Binding requirements, from `CLAUDE.md` §"Source depth and the canonical-coverage
harvest":

- **Every A/B pair is backed by at least two independent treatments**, at least
  one a textbook, monograph or full lecture-note set **with a harvestable table
  of contents**. Wikipedia and encyclopedia entries are convention tiebreakers
  only and can never be a pair's primary backing.
- For every source, record the **exact chapter/section range you read** and
  enumerate **that source's own section and named-result headings** over that
  range.
- **Every harvested heading gets an explicit disposition**: `included` (naming
  the scaffolded item id), `inline` (naming the item whose proof absorbs it),
  `already-published` (naming the published item), `deferred`, or `out-of-scope`
  — and the last two need a written reason about *that specific result*.

The harvest is source-anchored on purpose: a minimum result count would invite
padding, but a disposition for every heading a source itself contains cannot be
satisfied by inventing anything.

**Practical note, learned the hard way:** `WebFetch` cannot read PDFs. To harvest
a PDF's table of contents, create a Python venv and use `pypdf` to extract text
locally. Prefer sources that are legitimately open: author-hosted lecture notes,
open-access monographs, the Stacks Project, university course pages. Record a
working URL for every source.

---

## 3. What you are building

A **prose scaffold**: the design document from which a future level build authors
real items. Not the items themselves.

### THIS IS NOT A BUILD. Read this twice before you write anything.

The owner's words, 2026-08-13: *"this is NOT a build workflow, we are merely
building prose scaffolds for future build cycles."*

You are not running steps 0–10 of `LEVELS.md`. There is no level, no batch, no
Alpha, no judge, no gate to clear, and no publish. **Every artifact of a level
build is out of scope for you**: no `.pages.json`, no `.coverage.json` file, no
`.notes.md`, no proof-contract JSON, no touch snapshot, no judge ledger, no
`precheck`, no `validate-plan`, no `content-policy`, no `impact-audit`. Do not run
the gates. Do not author a single item.

You write **exactly one thing**: the prose scaffold file named as yours. You do
not write `research/plan-spec.json`, anything under `items/` or `library/`,
another track's file, or any `status:` field. Nothing is spliced, authored,
gated or published by this commission — a future build cycle does all of that,
and your file is its input.

`briefs/beta-scaffold.md` is referenced above for its **mathematical discipline
only** — source depth, the coverage harvest as a way of thinking, id reuse,
proof-obligation and boundary passes, the defect classes this library ships. It
is a level-build brief and its build mechanics, artifacts and gates are not
yours. Where it describes producing a build artifact, you produce the
corresponding *section of your prose scaffold* instead.

A mechanical guard is watching the working tree for writes outside the
prose-scaffold scope, so a drift into build behaviour will be caught rather than
discovered later — but it should never fire.

Follow the structure the existing track files use — read
`research/plan-topology-track.md` or `research/plan-complex-analysis-track.md`
for the house form. Your file contains:

- **Why this track exists**, and what the published library already gives it —
  named pages and item ids, verified from disk.
- **What is deliberately not here**, with reasons (scope denials).
- **Per A/B pair**, a section carrying: a relative label (`MT-1`, `MT-2`, …), a
  title, the A page's item list in dependency order with ids, kinds and one-line
  statements, the B/examples companion, the declared `requires`, the sources
  backing it with exact locators, and the proof strategy for anything hard.
- **Well-definedness obligations** — every quotient, every choice of
  representative, every construction that needs one.
- **A choice-strength ledger** — which results need AC, countable choice or
  dependent choice, and which are ZF. The library states this explicitly; see the
  BCT entry in `DEFERRED.md` §0 for the standard of care expected.
- **The canonical-coverage harvest**, per §2.
- **Amendments owed to other scaffolds** — the only legal way to affect another
  track's file.
- **Unresolved seams**, per the seam contract §5.

### Depth and richness

Develop the **complete theory at the graduate level**. Decompose long proofs into
focused intermediate lemmas; make a pass for useful, cheaply proved corollaries.
Never pad, and never drop a valuable result for ergonomics. An A page over **60
items** is SPLIT into two or more A pages, each with its own B companion — the
ceiling is what makes building the machinery affordable, and splitting is never
dropping.

### Self-contained scope — build the machinery

No item may rest on a result the library has not established. Search reputable
sources for the exact statement of any well-known result you need, then prove it
from available dependencies. **If that fails, build the missing prerequisite
definitions and theorems.** Dropping an important result for want of a definition
or lemma you could have written is not a permitted disposition. `deferred` /
`out-of-scope` is reserved for material genuinely belonging to another page's
topic or resting on a whole subject area the library has not reached.

The narrow last resort is a source-cited `rem-` item with `proved_here: false`,
the exact source, the failed in-library route and the necessity recorded. *"It
would have taken three more lemmas"* is not a licence to use it.

### Statements must be true, and sourced by default

- **Generated-claim minimization.** Do not invent a theorem, proposition,
  definition or mathematical remark to enrich a page or bridge an inconvenient
  proof. You may introduce an easily and directly verifiable `ai-generated`
  corollary or a checkable example/counterexample, and **neither may be
  load-bearing**: every AI-generated statement or construction is forbidden as a
  dependency target.
- **Component provenance.** Plan `provenance.statement` and `provenance.proof`
  for every mathematical-content item, each `literature-derived`, `ai-altered` or
  `ai-generated` (proof may be `not-supplied`; definitions and remarks use
  `not-applicable`), with a recorded rationale. An AI-generated **statement** is
  the truth-risk flag — search for a counterexample before scaffolding one.
- **Citation fidelity.** In every cited fact, state the cited
  definition/theorem itself — quote it exactly when practical, otherwise the
  smallest faithful shortening, with no changed domain, quantifier, hypothesis,
  direction or conclusion and no invented converse. Never replace a proposition
  with a synthetic summary of what it is "for". If a dependency looks
  insufficient, do not inflate its restatement: add inline steps, reconsider the
  strategy, or reconsider whether the claim is true as stated.
- **Natural mathematical voice.** No AI-sounding labels or interpretive filler —
  no "Null definition:", no "the key bridge says".

### Ids

Item ids are IMMUTABLE on `main` and the library has been minting names
per-category since the topology track, so the unqualified name is often already
gone — `thm-quotient-universal-property` is taken, and it is topological. **Check
before coining**, mechanically:

```
ls items/ | grep -i '<the-name-you-want>'
```

Namespace by category when the bare name is taken
(`thm-quotient-group-universal-property`). Never propose renaming or removing an
existing id.

### Notation

Do not write the canonical embedding applied to a natural number — `\iota(n)`,
`\iota(0)`, `\iota(k!)`. Write the number. Bare `\iota` as the name of a basis
inclusion in a universal property is correct and untouched.

---

## 4. What to report back

End your run by writing, at the top of your track file, a **summary for the
orchestrator**: the pairs you scaffolded with their relative labels, the sources
you obtained in full, the seams you consumed and the seams you owe, every
unresolved forward reference, every scope denial with its reason, and any blocker
you recorded. The orchestrator reconciles thirteen tracks from these summaries,
so a claim that is not in yours does not exist.


---

# This dispatch

# subjects-01 — `group-theory`

**You are an expert of group theory.**

| | |
|---|---|
| track | `group-theory` |
| wave | 2 |
| file you own | `research/plan-group-theory-track.md` (**NEW**) |
| placement anchor | the structure block after `sylow-theorems-and-nilpotent-groups-examples`; the geometric and topological block after `applications-of-the-fundamental-group-examples` |
| sibling tracks to read first | `research/plan-algebra-track-expansion.md` (the finished `abstract-algebra` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- p-groups and nilpotency beyond Sylow: the class equation refined, upper and lower central series, Frattini and Fitting subgroups, the Burnside basis theorem, extraspecial groups
- permutation group theory: primitivity, multiple transitivity, the O'Nan–Scott landscape as a survey, Iwasawa's simplicity criterion
- presentations and combinatorial group theory beyond the published free-group pages: Tietze transformations, Nielsen–Schreier, the word and conjugacy problems as decision problems (state the undecidability honestly and cite it rather than proving it), small cancellation if sourced
- group extensions: split and non-split, the extension problem, **H¹ as complements up to conjugacy and H² as extensions**, the Schur multiplier — citing `homological-algebra` for the derived-functor construction
- **geometric group theory**: Cayley graphs, word metrics, growth functions, quasi-isometry and the Švarc–Milnor lemma, hyperbolic groups if sourced, amenability, Bass–Serre theory and groups acting on trees
- profinite and topological groups: inverse limits, profinite completion, the p-adic integers as a group
- modular representation theory or Brauer characters IF you can source them properly and they do not collide with `abstract-algebra`'s ordinary representation theory
- the finite simple group classification as a carefully hedged survey — statement, history, and what the library does and does not prove

## What you must NOT mint — cite it instead

- `abstract-algebra` owns AG-1…AG-4 in `plan-algebra-track-expansion.md`: A_n simplicity, Jordan–Hölder and solvable groups, semidirect products and automorphism groups, **Sylow's theorems, p-groups and nilpotent groups**. Read its finished file and start above it. Your p-group material must extend, not repeat.
- `abstract-algebra` owns the representation theory of finite groups (RT-1…RT-4: group algebra, Maschke, characters, induced representations).
- **Lie groups and Lie algebras belong entirely to `differential-geometry`** — including the abstract structure theory. Do not open that block.
- the published group band is large and authored: monoids/groups/subgroups (24), cosets and Lagrange (32), normal subgroups and quotients (34), homomorphisms and isomorphism theorems (36), cyclic groups (38), finite abelian structure (40), group actions and Cayley (42), symmetric groups and sign (44), free groups and presentations (60), free products and amalgamation (62), conjugacy and simplicity in S_n (64), composition series and solvable groups (66). Read them.
- the fundamental group (291) and its applications (301) are the topological anchor for your geometric block — 289 and 291 are authored, 293–302 are planned

## Verified from disk by the orchestrator, 2026-08-13

- You get a NEW file rather than editing the algebra expansion because `plan-algebra-track-expansion.md` is owned by `abstract-algebra` for this commission and two agents cannot write one file. Everything you want changed there goes in your Amendments-owed section.
- `free-groups-and-presentations` at order 60 is authored with only **6 items**, and `cyclic-groups-and-direct-products` at 38 with **6** — both thin for their subjects. Investigate before building on them; if genuinely thin, record enrichment amendments.
- `free-products-and-amalgamation` (62) is authored with 27 items and is the natural published anchor for Bass–Serre theory. Open it.
- Bass–Serre theory needs group actions on trees, and trees are published in the combinatorics band (`trees-forests-and-spanning-trees`, 209, 27 items). Check whether the published notion of tree is the one you need — a graph-theoretic tree and a simplicial tree acted on by a group are not automatically the same object — and if it is not, build the bridge explicitly rather than assuming it.

## Source research

Milne's *Group Theory* notes (free) and Clara Löh's *Geometric Group Theory* (author-hosted) are open. Rotman *An Introduction to the Theory of Groups*, Robinson *A Course in the Theory of Groups*, Isaacs *Finite Group Theory*, Serre *Trees*, Dixon–Mortimer *Permutation Groups* and Ribes–Zalesskii *Profinite Groups* are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
group theory, gather a rich corpus of lecture notes and other open-web sources,
and run the canonical-coverage harvest over the exact chapter ranges you read.
Where two sources disagree on a convention, record the disagreement and say which
the library adopts and why.

---

## Reminders that cost previous runs real time

- **`items[]` in `research/plan-spec.json` is the only honest signal** of what
  exists. A page with an empty `items` array is a plan, not a library page.
- **Absolute orders in the existing scaffold files are stale.** Use relative
  labels and page ids; the orchestrator computes orders at splice.
- **Check an id before coining it** — `ls items/ | grep -i '<name>'`. Ids are
  immutable on `main` and the unqualified name is often already taken by another
  category.
- **Never ask for a permission, and never let a subagent ask.** Record a blocker
  instead. You already hold every permission you need.
- **Write only the file you own.** Everything else goes in "Amendments owed".
