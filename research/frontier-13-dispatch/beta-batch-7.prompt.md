# Beta brief for run `frontier-13` (steps 1 and 2)

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

You are a **Beta on run `frontier-13`**, scaffolding one batch for the public
math library. The checkout is the directory you were started in. Your batch is
named in the "This dispatch" section appended below. After step 4 you return as
the **step-5 author** of everything you scaffold here, so prepare a scaffold you
can author faithfully without rediscovering its reasoning.

Six other Betas are working other batches of this run **in parallel**. Your batch
has **no dependency edge to any other batch**, and that is not a promise — it is
mechanical. `validate-plan.mjs` raises the hard error `undeclared-prereq` for any
item depending on a page outside its own page's declared `requires` closure, and
no in-run pair is inside any other in-run pair's closure. So you can neither wait
on another batch nor cite one. Write only your own files.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow and hard rules. Normative.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation rules.
4. `briefs/beta-scaffold.md` — **your base contract**, in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/frontier-12-batch-1.pages.json` and
   `research/frontier-12-batch-1.notes.md` — the output shape you are producing,
   from the most recent completed run.
7. `research/frontier-13-step0-batching.md` — this run's frontier, batching and
   seam analysis.
8. The prose scaffold sections named in your dispatch.

Then open, **on disk**, every published item you intend to cite. The item, not
the scaffold's description of it, and not your memory of the subject.

## 1. What this run is for

Eleven A/B pairs across seven batches, in abstract algebra, linear algebra,
combinatorics, category theory and number theory. Three batches are deliberately
single-pair because their subject deserves a whole Beta's attention. Yours may be
one of them; if it is, that is not a light load, it is a mandate to read more of
each source.

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
`research/frontier-13-batch-<i>.coverage.json`. Per A page: at least two
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
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
```

There is no minimum result count — padding is forbidden. The bar is set by the
source, not by a target. **The locator must be real.** If you cite a range, that
range must exist in that edition and contain what you say it contains; Alpha
re-opens sources at step 6 and checks the harvest is faithful, not merely
well-formed.

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

## 3. Your writable outputs — and nothing else

- `research/frontier-13-batch-<i>.pages.json` — the machine scaffold
- `research/frontier-13-batch-<i>.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-13-batch-<i>.coverage.json` — the harvest
- `research/frontier-13-batch-<i>.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox (its
`spawnSync` of `node` is refused before any child runs). The individual scripts
are the same checks. The orchestrator runs the wrapper and is the gate of record.

## 5. Context checkpoint

At **60% of your own context** (owner, 2026-08-03), append a concise checkpoint
section to your own `research/frontier-13-batch-<i>.notes.md`: owned artifacts,
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


---

# This dispatch

## Batch 7 of run `frontier-13` — linear recurrences and the transfer-matrix method (SINGLETON)

One A/B pair, singleton because nothing else in this run shares its sources.

> **Orders in the prose scaffold are STALE.** `research/plan-combinatorics-and-categories.md`
> quotes order 177 for this page; the live order is 195.
> `research/plan-spec.json` is the only live source of `order`. Identify
> everything by **page id**.

| | |
|---|---|
| A page | `linear-recurrences-and-rational-generating-functions` · "Linear Recurrences and Rational Generating Functions" · category `combinatorics` · order **195** |
| B page | `linear-recurrences-and-rational-generating-functions-examples` · order **196** |
| requires | `formal-power-series` (193), `eigenvalues-eigenvectors-and-the-characteristic-polynomial` (86), `splitting-fields` (56) — all published |
| prose scaffold | `research/plan-combinatorics-and-categories.md`, block **CB-5 (ENRICHED)** (design body at line ~4617) |

`determinants-of-matrices-over-a-commutative-ring` (order 82, published) is
**already in your closure** transitively, so it is citable without a spec change.
Verify that from `plan-spec.json` yourself before relying on it.

The design also names a prerequisite by its planning label `CB-15`. Labels are
not page ids. Resolve it to an actual page id in `plan-spec.json`, check whether
it is published and in your closure, and **if it is neither, record it as a
recommendation in your notes** — do not cite it and do not edit the spec.

### What the design block asks for

**Kept from the earlier inventory.** The recurrence ⟺ rational generating
function equivalence; partial fractions over a splitting field; the closed form
with polynomial factors at repeated roots; the companion-matrix dictionary;
Fibonacci and Lucas; the Cayley–Hamilton reading; closure of rational series
under sum and product.

**The largest addition — the transfer-matrix theorem** (landmark). For a finite
digraph with edge weights in a commutative ring and adjacency matrix `A`,
`Σ_{n≥0} (A^n)_{uv} x^n` is the rational function
`(−1)^{u+v} det(I − xA : v,u) / det(I − xA)`, and the trace form
`Σ_n tr(A^n) x^n` likewise.

The proof is **formal**: `I − xA` is invertible in `M_p(R[[x]])` because `xA` has
positive order, so **no spectral radius and no convergence hypothesis appears**.
This is the theorem that makes "count the walks / count the words avoiding a
pattern / count the tilings" a theorem rather than a technique. Also added: the
transfer-matrix count of binary words avoiding a fixed factor; the Fibonacci
tiling model as its smallest instance; and the Hadamard product of rational
series is rational.

**The cofactor/adjugate machinery.** The transfer-matrix theorem needs it, and
the design records that the determinant page does not have it. **You mint it
here.** The design says: *decide once, and record the decision in the batch
notes.* Do that — open `determinants-of-matrices-over-a-commutative-ring` on disk
first and say exactly what is and is not there.

**The equivalence is proved by a dimension count, not by partial fractions.** The
design is explicit: "rational ⟺ linear recurrence" comes from a dimension count
of four vector spaces, with the partial-fraction closed form as a **separate**
consequence. They are different statements and only the first is
convention-free. Do not collapse them into one item.

### Traps the design names

1. **Name the splitting field in the Statement.** Do not assume ℝ or ℂ.
2. **Fix the reciprocal-root convention** `Q(x) = ∏(1 − λ_i x)` in a `rem-` item
   and cite it everywhere. Sources disagree; record the disagreement rather than
   silently choosing.
3. **Nothing here is asymptotic.** No growth-rate claims.
4. The eigenvalue form of the transfer-matrix result *does* touch algebraic
   closure. Keep the **cofactor form primary** and state the eigenvalue form with
   its hypothesis attached.

### Size

The earlier inventory sized this A 18 / B 12, but that predates the transfer-matrix
enrichment and the canonical-coverage harvest. If your harvest pushes the A page
past **60 items**, propose a split in your notes at step 2 with the exact cut —
the natural seam is the recurrence/rational-GF equivalence and its closed forms
on one page, the transfer-matrix method on another. Propose it early; after
authoring it is a rewrite.
