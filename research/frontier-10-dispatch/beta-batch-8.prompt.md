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
`research/frontier-10-batch-8.coverage.json`. Per A page: at least two
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
node tools/coverage-checklist.mjs research/frontier-10-batch-8.coverage.json
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

- `research/frontier-10-batch-8.pages.json` — the machine scaffold
- `research/frontier-10-batch-8.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-10-batch-8.coverage.json` — the harvest
- `research/frontier-10-batch-8.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-10-batch-8.coverage.json
node tools/gates.mjs --step 2 --run frontier-10
```

## 5. Report

Finish with a concise report: pages and item counts, the harvest yield
(scaffolded vs declined, with the declines you expect to be challenged), any
split proposal, every published dependency you opened and the confidence route
used for each, convention disagreements found, and any blocker. State plainly
anything you could not do.


---

# This dispatch

# frontier-10, batch 8

You are **Beta-frontier-10-8**. Your writable artifacts are the four
`research/frontier-10-batch-8.*` files named in the brief above.

## Your pages

- **A** `group-actions-and-cayleys-theorem` (order 42, abstract-algebra) — "Group Actions, Orbits, Stabilisers and Cayley's Theorem"
  - **B** `group-actions-and-cayleys-theorem-examples` (order 43)
  - requires: `group-homomorphisms-and-the-isomorphism-theorems`

## Prose scaffold sections to read

- `research/plan-algebra-track.md`
- `research/plan-algebra-track-expansion.md`

## Batch note

ENRICHMENT of a PUBLISHED pair — see section 6, which overrides the ordinary batch shape.

## 6. This batch is an ENRICHMENT of a published pair

`group-actions-and-cayleys-theorem` and its companion are **`status: published`**.
The A page holds only six items and the B page holds **none**:

```
def-group-action, thm-group-actions-correspond-to-homomorphisms,
def-orbit-and-stabilizer, lem-stabilizer-is-a-subgroup,
thm-orbits-partition-the-set, thm-cayleys-theorem
```

The owner asked for **the orbit-stabiliser theorem and its important
consequences and examples**. The theorem itself is absent, and so is nearly
everything that normally follows it. At minimum, harvest and dispose: the
orbit-stabiliser theorem; the class equation; Cauchy theorem; the
Cauchy-Frobenius (Burnside) counting lemma; p-group fixed-point results and the
nontriviality of the centre of a p-group; conjugation actions and conjugacy
classes; the action on left cosets and its kernel; and worked orbit counts.
`cosets-and-lagranges-theorem` is published, so the index machinery that
orbit-stabiliser needs is available to cite.

**Rules specific to enriching a published pair** (the `freegroups-1` precedent,
decision D4):

- Every new item is authored **`status: draft`**. `depcheck` raises
  `draft-on-published-page` when a published page lists a non-published item.
- **Do not edit the two page files.** Stage the additions to their
  `items:`/`examples:` lists in `research/frontier-10-published-amendments.md`;
  the orchestrator applies them in the single publishing commit.
- Your manifest lists **only ids you mint**. The seven already-published ids sit
  under `enrichment_of_published` as context; putting them in `items` fails
  `content-policy.mjs` with `batch-item-already-exists`.
- The six published items are dependencies: open each, cite precisely, and do
  not restate or duplicate them.
- The B page is empty. It needs a real examples and counterexamples
  development, not a token one.
- If the enriched A page would exceed 60 items, note that a published A page
  splitting is a **reading-order change, which is owner-only**. Propose it in
  your notes and stop there; never assume it.
