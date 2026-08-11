# Beta brief for run `frontier-11` (steps 1 and 2)

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

You are a **Beta on run `frontier-11`**, scaffolding one batch for the public
math library. The checkout is the directory you were started in. Your batch is
named in the "This dispatch" section appended below. After step 4 you return as
the **step-5 author** of everything you scaffold here, so prepare a scaffold you
can author faithfully without rediscovering its reasoning.

Other Betas are working other batches of this run **in parallel**. Your batch has
**no dependency edge to any other batch** — that was computed from disk at step
0, not assumed — so you never need to wait for or coordinate with them. Write
only your own files.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow and hard rules. Normative.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation rules.
4. `briefs/beta-scaffold.md` — **your base contract**, in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/frontier-10-batch-1.pages.json` and
   `research/frontier-10-batch-1.notes.md` — the output shape you are producing,
   from the most recent run built to the depth now expected.
7. `research/frontier-11-step0-batching.md` — this run's frontier and batching.
8. The prose scaffold sections named in your dispatch.

Then open, **on disk**, every published item you intend to cite. The item, not
the scaffold's description of it.

## 1. Why this run exists — read this before you scaffold

Two pairs published thin and the owner noticed. `group-actions-and-cayleys-theorem`
went out with orbits, stabilisers and the orbit partition but **no
orbit–stabiliser theorem**, no class equation, no Cauchy's theorem, and an empty
B page. `free-groups-and-presentations` went out at 6 + 1 items and had to be
rewritten wholesale.

The cause was **not** bad sources. The batch notes of that run cite Sharifi
(UCLA), Brosnan (UMD), Judson, Axler, Diestel — real notes, real textbooks. The
cause was that a Beta cited a source **without harvesting it**: Brosnan's note is
titled *Orbits and stabilizers*, it was logged as covering "orbit structure", and
orbit–stabiliser never reached the scaffold. That run produced 83 items across 20
pages, about four per page.

Do not produce a four-item page.

## 2. The rules that govern this scaffold

**(a) The canonical-coverage harvest — a required, gated artifact.** You write
`research/frontier-11-batch-3.coverage.json`. Per A page: at least two
independent treatments, at least one a textbook, monograph or full lecture-note
set (an encyclopedia entry is a convention tiebreaker and can never be a pair's
primary backing — Wikipedia alone fails this gate); per source the exact
chapter/section range you actually read and an enumeration of **that source's
own** section and named-result headings across it; per heading a disposition —
`included` (+ scaffolded item id), `inline` (+ the item whose proof absorbs it),
`already-published` (+ the published id), `deferred` or `out-of-scope` (+ a
reason of 40+ characters about **that specific result**; one reason pasted across
three declines is rejected). Full shape and rules: `briefs/beta-scaffold.md`
§"The canonical-coverage harvest". Run it before you report done:

```
node tools/coverage-checklist.mjs research/frontier-11-batch-3.coverage.json
```

There is no minimum result count — padding is forbidden. The bar is set by the
source, not by a target.

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
before authoring costs a spec edit; after authoring it is a rewrite.

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

## 3. Your writable outputs — and nothing else

- `research/frontier-11-batch-3.pages.json` — the machine scaffold
- `research/frontier-11-batch-3.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-11-batch-3.coverage.json` — the harvest
- `research/frontier-11-batch-3.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-11-batch-3.coverage.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox (its
`spawnSync` of `node` is refused before any child runs). The individual scripts
are the same checks. The orchestrator runs the wrapper and is the gate of record.

## 5. Report

Finish with a concise report: pages and item counts, the harvest yield
(scaffolded vs declined, with the declines you expect to be challenged), any
split proposal, every published dependency you opened and the confidence route
used for each, convention disagreements found, and any blocker. State plainly
anything you could not do.


---

# This dispatch

# frontier-11, batch 3

You are **Beta-frontier-11-3**. Your writable artifacts are the four
`research/frontier-11-batch-3.*` files named in the brief above.

## Your pages

- **A** `extremal-graph-theory` (order 219, combinatorics) — "Extremal Graph Theory"
  - **B** `extremal-graph-theory-examples` (order 220)
  - requires: `ramsey-theory`, `graph-colouring`
- **A** `formal-power-series` (order 193, combinatorics) — "Formal Power Series"
  - **B** `formal-power-series-examples` (order 194)
  - requires: `polynomial-rings-and-roots`, `euclidean-domains-pids-and-unique-factorisation`, `formal-laurent-series-field`

## Prose scaffold sections to read

- `research/plan-combinatorics-and-categories.md`

## Batch note

**Order 219** blocks `finite-probability-and-the-probabilistic-method` (221) and
thence the whole Erdős–Hajnal chain, so its statements must be citable verbatim.
Owed: Mantel's theorem with a proof that is not just "Turán with r=2", Turán's
theorem (state the extremal number exactly and identify the extremal graph as the
complete multipartite Turán graph — a page that proves the bound but never
characterises equality is half a page), the Kővári–Sós–Turán bound for bipartite
excluded subgraphs, the Erdős–Stone–Simonovits theorem and the chromatic-number
formulation of the asymptotic extremal density, and the connection back to
`ramsey-theory` you already cite. `graph-colouring` (215) is published at only
4+2 items — **open it and check what it actually gives you** before making it
load-bearing; if the chromatic number you need is not there, build the
definition locally rather than citing something that is not on the page.

**Order 193** blocks `linear-recurrences-and-rational-generating-functions` (195),
`lattice-paths-and-catalan-numbers` (197) and `integer-partitions-and-the-twelvefold-way`
(201). `formal-laurent-series-field` (order 124, real-analysis) is already
published — **open it first**; it may already own the field of fractions and the
valuation, in which case cite rather than restate, and say so in your notes. Owed
here: `R[[x]]` as a ring, the units characterisation (invertible iff the constant
term is a unit), formal derivative and its algebra, composition and when it is
defined, the formal inverse-function/Lagrange inversion statement, the
order/valuation and completeness in the formal topology, and the extraction of
coefficients as a linear functional. Convergence is **not** the subject: state
explicitly, once, that `x` is an indeterminate and no analytic convergence is
claimed, and keep the analytic power-series page (173) out of the dependency
backbone. Lagrange inversion is the one result most likely to tempt an
overstated citation — either prove it in scope or decline it with a real reason.
