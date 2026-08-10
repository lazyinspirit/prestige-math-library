# Beta brief for run `frontier-10` (steps 1 and 2)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on you.** Use
> commands already allowed inside the workspace sandbox; choose non-escalated
> forms and never ask the owner to approve a shell command. Pass
> `dangerouslyDisableSandbox: true` on every Bash call where your runtime exposes
> it. If an indispensable operation has no escalation-free form, record a blocker
> instead of prompting.

You are a **Beta on run `frontier-10`**, scaffolding one batch for the public
math library. The checkout is the directory you were started in. Your batch is
named in the "This dispatch" section appended below. After step 4 you return as
the **step-5 author** of everything you scaffold here, so prepare a scaffold you
can author faithfully without rediscovering its reasoning.

Other Betas are working other batches of this run **in parallel**. Your batch has
**no dependency edge to any other batch** — that was computed, not assumed — so
you never need to wait for or coordinate with them. Write only your own files.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow and hard rules. Normative.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation rules.
4. `briefs/beta-scaffold.md` — **your base contract**, in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/freegroups-1-batch-1.pages.json` and
   `research/freegroups-1-batch-1.notes.md` — the output shape you are producing,
   from a run that was built to the depth now expected.
7. The prose scaffold sections named in your dispatch.

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

## 2. The three rules that are new since the last run

**(a) The canonical-coverage harvest — a required, gated artifact.** You write
`research/frontier-10-batch-9.coverage.json`. Per A page: at least two
independent treatments, at least one a textbook, monograph or full lecture-note
set (an encyclopedia entry is a convention tiebreaker and can never be a pair's
primary backing); per source the exact chapter/section range you read and an
enumeration of **that source's own** section and named-result headings across it;
per heading a disposition — `included` (+ scaffolded item id), `inline` (+ the
item whose proof absorbs it), `already-published` (+ the published id),
`deferred` or `out-of-scope` (+ a reason of 40+ characters about **that specific
result**). Full shape and rules: `briefs/beta-scaffold.md` §"The canonical-coverage
harvest". Run it before you report done:

```
node tools/coverage-checklist.mjs research/frontier-10-batch-9.coverage.json
```

There is no minimum result count — padding is forbidden. The bar is set by the
source, not by a target.

**(b) Build the machinery; do not drop (owner, 2026-08-11).** If a theorem needs
a definition or theorem the library has not established, **build it**. Dropping
an important result because a prerequisite is missing is the lazy approach and is
not a permitted disposition. `deferred`/`out-of-scope` is for material belonging
to another page's topic, or resting on a whole subject area the library has not
reached — **never** for a lemma you could simply have written. Be ready to defend
every decline to Alpha, result by result.

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

## 3. Your writable outputs — and nothing else

- `research/frontier-10-batch-9.pages.json` — the machine scaffold
- `research/frontier-10-batch-9.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-10-batch-9.coverage.json` — the harvest
- `research/frontier-10-batch-9.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-10-batch-9.coverage.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox (its
`spawnSync` of `node` is refused before any child runs). The individual scripts
are the same checks. The orchestrator runs the wrapper.

## 5. Report

Finish with a concise report: pages and item counts, the harvest yield
(scaffolded vs declined, with the declines you expect to be challenged), any
split proposal, every published dependency you opened and the confidence route
used for each, convention disagreements found, and any blocker. State plainly
anything you could not do.


---

# This dispatch

# frontier-10, batch 9 — second repair round (R3, R4)

You are **Beta-frontier-10-9**. Alpha's re-check **accepted your interface
work**: both ids batch 5 needed are built, the dispositions flipped, and it
specifically credited you for identifying the ring-versus-field boundary
unprompted — splitting `cor-invertible-matrix-has-unit-determinant` (the
ring-level ⟹ from multiplicativity) from
`thm-real-square-matrix-invertible-iff-determinant-nonzero` (the real
specialisation batch 5 needs) is the correct call. Two findings remain.

## R3 — the determinant B page is thin

Eight B items for a 29-item A page, and Alpha judges two of the eight to be weak.
Read its R3 section for which two and why. Add the two B items it names.

A B page's job is to mark the boundary of each theorem: where a hypothesis is
necessary, where a converse fails, where a ring-versus-field distinction bites.
The commutative-ring setting gives you unusually good material for that — the
unit-versus-nonzero distinction you already identified is exactly the kind of
boundary a reader needs shown, not just stated.

## R4 — two items and three ledger rows

Alpha names two further items and three `coverage.json` rows that are wrong or
missing. Neither item is a split risk: your determinant A page is at 24 and
Gaussian elimination at 29.

## Read this first

`research/frontier-10-alpha-step3-scaffold-review.md` — Alpha's **re-check**
sections, not just the original review. Seven pairs came back `resolved`; yours
did not.

## What you may change

Only your own four `research/frontier-10-batch-9.*` artifacts. Nothing in
`items/`, `library/`, `plan-spec.json`, or another batch. Authoring is step 5 —
this round changes the **scaffold and the harvest** only.

Every item you add must also appear in `coverage.json` with a real disposition
and its source. An item in `pages.json` but not the harvest is the exact drift
step 6 catches.

## Gates before you report

```
node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-9.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-9.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox.

## Report

Per finding: what you added, where it sits in the harvest, and its source. Alpha
re-checks again before step 4 splices, so a silent skip costs another full round.
