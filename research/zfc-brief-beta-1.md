# Beta-zfc-1 — scaffolding brief for run `zfc`, batch 1 (steps 1 and 2)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on you.** Use
> commands already allowed inside the workspace sandbox; choose non-escalated
> forms and never ask the owner to approve a shell command. Pass
> `dangerouslyDisableSandbox: true` on every Bash call. If an indispensable
> operation has no escalation-free form, report a blocker instead of prompting.

You are **Beta-zfc-1**, scaffolding one batch of two A/B pairs for the public
math library, whose checkout is `/root/Projects/prestige-math-library` — the
directory you were started in. You are the **only** Beta on this run, and after
step 4 you return as the **step-5 author** of everything you scaffold here, so
prepare a scaffold you can author faithfully without rediscovering its reasoning.

**Model note (owner, 2026-08-06, this day only).** The standing rule dispatches
you as GPT 5.6 Sol through the Codex subscription. The owner's Codex weekly limit
is exhausted, so **no GPT model may be used anywhere today**: you run as **Claude
Opus 5** instead. Nothing else about the Beta contract changes.

## 0. Read first, in this order

1. `CLAUDE.md` (repo root) — workflow, hard rules, FROZEN presentation spec.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation-honesty rules.
4. `briefs/beta-scaffold.md` — **your base contract.** Everything in it binds you
   except where §1 below overrides it. In particular §§4a, 5, 6, 7 of that file
   (proof decomposition and corollary passes; the six defect classes this library
   actually ships; the triage rule; the seams rule) apply in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/frontier-9-batch-1.pages.json`,
   `research/frontier-9-batch-1.notes.md`,
   `research/frontier-9-batch-1.proof-contracts.json` — the exact output shapes
   you are producing.
7. `research/zfc-RESUME.md` — this run's record, including the owner decisions.
8. `QUALITY-CONTROLS.md` — the proof-contract schema.

## 1. What is different about this run

**(a) There is no prose scaffold, and you must not write one (owner).** Every
previous level began from a `research/plan-*.md` prose design. These pages have
none, and none is to be created. **You** decide what goes on the pages, by
reading the published corpus and reputable sources.

**(b) Your first task is a gap analysis of the published Foundations corpus
(owner).** Read, in full and from disk:

- every page file in `library/foundations/` (there are A and B pages for
  order/Zorn/AC, filters and ultrafilters, ordinals and transfinite recursion,
  ordinal arithmetic, cardinal arithmetic and cofinality, and the construction of
  the natural numbers), and
- every item those pages list.

Then determine precisely **what formal set theory this library uses constantly
but has never actually built.** Your pages fill that gap. **Do not build anything
that is already published**: search the whole `items/` pool before you mint any
id, and reuse rather than restate.

**(c) The owner's content request, verbatim in substance:**

> Formally and fully introduce the ZFC axioms; state and prove all of the
> important set-theoretic consequences such as the existence of the empty set,
> power set, union, intersection, cartesian products, Russell's paradox, etc. —
> everything most mathematicians take for granted without a second thought. Also
> formally introduce the set-theoretic definitions of relations (as a subset of
> $A \times A$), partial orders, equivalence relations, and functions (as a
> subset of $A \times B$); and prove that every equivalence relation on a set $S$
> partitions $S$ into a set of equivalence classes.

The owner has confirmed that "partial relations" in the original request means
**partial orders**. The intended split across your two pairs is:

| order | page id | kind | what it carries |
|---|---|---|---|
| 5.1 | `the-zfc-axioms-and-basic-set-constructions` | A | the axioms and the basic constructions |
| 5.2 | `the-zfc-axioms-and-basic-set-constructions-examples` | B | its examples, counterexamples and false statements |
| 5.3 | `relations-functions-and-quotients` | A | relations, orders, functions, equivalence, quotients |
| 5.4 | `relations-functions-and-quotients-examples` | B | its examples, counterexamples and false statements |

**These four page ids, their orders, categories and companions are fixed by step
0 and are already in `research/plan-spec.json`. Do not change them.** You may
recommend a different split of *content* between the two pairs, or a different
page *title*, as a numbered finding for the orchestrator to approve or decline.

**(d) You are at the bottom of the reading order.** Your pages sit at orders
5.1–5.4, above only the five `not-proved-here` catalogue pages (orders 1–5) and
below `construction-of-the-natural-numbers` (order 6). The hard plan-order rule
is unchanged — *an item may cite only an item earlier on its own page, or an item
on a page with a strictly smaller order* — so in practice:

- **The only published mathematical content you may cite is the
  `not-proved-here` catalogue** at orders 1–5, whose items are `rem-` items with
  `proved_here: false` (Gödel's constructible universe, Cohen's forcing, the
  independence of CH/GCH, the Fraenkel and Feferman–Lévy models, and so on). They
  are legitimate for recording independence facts about the axioms, exactly as
  `def-axiom-of-choice` already does. Cite them through `deps` only if they are
  genuinely load-bearing; use `external_refs` for a non-load-bearing mention. Read
  `SCHEMA.md`'s `external_refs` block before choosing.
- **Everything else your pages need, you build.** This is correct and intended:
  these are the foundational pages, and a self-contained development from the
  axioms is exactly the deliverable. It is not a licence to restate published
  material under new ids.
- Note the corollary: `def-cardinal`, `def-well-order`, `thm-hartogs`,
  `def-partial-order`, `def-natural-numbers` and the rest of the set-theoretic
  vocabulary the library already has all live at *higher* orders and are **not**
  available to you. Where your page introduces something the library later
  redefines or specialises, apply §7 of `briefs/beta-scaffold.md`: record the
  agreement explicitly rather than redefining silently.

**(e) Three published items are being RE-HOMED onto your pair-2 A page
(owner-approved; see `research/zfc-RESUME.md` D2).**

| id | what it already contains |
|---|---|
| `def-equivalence-relation` | binary relation as $R \subseteq A \times A$; equivalence relation; equivalence class; quotient set; quotient map |
| `lem-equivalence-classes-partition` | the partition theorem, in both directions |
| `def-injection-surjection-bijection` | injective, surjective, bijective |

They are `status: published` and currently homed on pages at orders 24 and 18.
The owner has approved moving them into your `relations-functions-and-quotients`
item list at the right place in the reading order.

- **List these three ids in your pair-2 A-page item list**, in reading order,
  with their existing ids and kinds. Do **not** mint a new id for any statement
  they already make, and do **not** restate them in a new item.
- **Do not edit those three files at steps 1–2.** Read them, and report exactly
  what has to change about them (see (f)).
- Removing them from `monoids-groups-and-subgroups` and
  `countability-and-uncountability` is an orchestrator action taken at publish
  time; do not touch those page files.
- **Known obligation you must verify precisely and report:** re-homing them to
  order 5.3 turns some of their existing wikilinks into *forward* references,
  which `tools/fwdcheck.mjs` will flag as `forward-undeclared`. For example
  `def-equivalence-relation`'s `## Remarks` link `lem-int-add-well-defined`,
  `lem-int-mul-well-defined`, `lem-rat-ops-well-defined`, `lem-int-equivalence`
  and `lem-rat-equivalence`, all of which live at higher orders. Those become
  orientation-only forward references (they occur in `## Remarks`, so they are
  not load-bearing and are permitted on a definition) and must be declared in
  `forward_refs`. That same Remark also says the item exists "so late" in the
  reading order, which re-homing makes false. Check all three items for every
  such link and every such positional claim, and record the exact required edits.

**(f) Published-page rewiring is delegated to you and Alpha, but is STAGED, NOT
APPLIED (owner).** The owner asked that published pages be updated so their items
are correctly and adequately referenced with respect to your new pairs — for
instance `def-inductive-set` and `construction-of-the-natural-numbers` use the
Axiom of Infinity, Separation, Union and Replacement informally, and
`def-partial-order` and its neighbours on `order-zorn-and-the-axiom-of-choice`
should cite your generic relation-property definitions.

**THE REPOSITORY IS THE SERVING PATH.** The live site reads this working
directory, so an edit to a published item or page is live the moment it is
written, before any commit — and a published item must never link to a draft one.
Therefore:

- **Write nothing to any `items/*.md` or `library/*/*.md` file at any point in
  steps 1–2**, and no published one at any later step either.
- Record every intended edit to published content in
  `research/zfc-published-rewiring.md` as an **exact applyable edit**: file,
  section, exact old text, exact new text, and a one-line justification saying
  which new item it references and why the published item genuinely depends on or
  should point at it. That file is yours to create and append to; Alpha extends it
  at step 6 and the orchestrator applies it in the single commit that publishes
  these pages.
- Distinguish two classes in that file, because they have different costs:
  **(i) non-material** — adding a `deps` entry or a wikilink that changes no
  claim; the item keeps its `verification.audited`. **(ii) material** — any
  change to a Definition, Statement, proof, or Remark prose; the stale
  `verification.judge` block goes, the obsolete `audited` stamp goes, and the item
  needs an independent current reading. Keep class (ii) as small as it honestly
  can be.

## 2. What you produce — the ONLY files you may write

- `research/zfc-batch-1.pages.json` — your four page objects as a JSON array, in
  the exact shape of `research/frontier-9-batch-1.pages.json`: `order`, `id`,
  `kind`, `category`, `title`, `companion`, `requires`, `items`, each item
  `{id, kind, title, strategy?, deps}`.
- `research/zfc-batch-1.notes.md` — your notes for your own step-5 self and for
  Alpha: the gap analysis, the source ledger, the per-item expected
  `provenance.statement` / `provenance.proof` with a reason for each, every
  AI-generated-Statement truth-risk obligation, and every authoring-time decision
  that has no other home. There is no prose scaffold to amend, so this file
  carries all of it.
- `research/zfc-batch-1.proof-contracts.json` — the version-1 machine-readable
  proof contract for every planned proof-bearing item, in the exact schema of
  `QUALITY-CONTROLS.md`.
- `research/zfc-published-rewiring.md` — the staged published-content edits of
  §1(f).

Do not touch `research/plan-spec.json`, any `items/*.md`, any `library/*/*.md`,
or any other run's files. The orchestrator splices, gates and commits.

## 3. Mathematical scope guidance

This is guidance, not a checklist to pad to. Build what the mathematics needs,
decompose long proofs into focused lemmas, run a corollary pass, and drop what
you cannot prove honestly at this point in the reading order.

**Pair 1 — the axioms and the basic constructions.** The axioms of ZFC stated
formally and individually (Extensionality, Foundation/Regularity, the Separation
schema, Pairing, Union, the Replacement schema, Infinity, Power Set, Choice),
with the first-order language of set theory fixed first. Then the constructions
every mathematician assumes: existence and uniqueness of $\varnothing$;
subsets and the subset relation; unordered pairs and singletons; binary and
arbitrary unions; binary and arbitrary intersections, with the empty-family case
handled honestly; set difference and complements relative to a set; the power
set, with $\mathcal{P}(\varnothing)$ and monotonicity; the algebra of these
operations (commutativity, associativity, distributivity, De Morgan);
Russell's paradox as a theorem that there is no set of all sets, and the fact
that unrestricted comprehension is inconsistent; Kuratowski ordered pairs with
the characterising property $(a,b)=(c,d) \iff a=c \wedge b=d$; the Cartesian
product $A \times B$ as a set, with the Power Set + Separation construction that
proves it *is* one; ordered $n$-tuples and finite products; indexed families and
the general union/intersection/product; what Foundation rules out
($x \notin x$, no finite $\in$-cycles). Say explicitly which axioms each result
uses — that ledger is a large part of the value of the page, and
`rem-choice-ledger` on `ordinals-and-transfinite-recursion` is the house
precedent for how to write one.

**Pair 2 — relations, orders, functions, quotients.** Binary relations as subsets
of $A \times A$ and of $A \times B$; domain, range, field; the inverse relation
and composition, with associativity; restriction and image/preimage of a set
under a relation; the relation properties (reflexive, irreflexive, symmetric,
antisymmetric, transitive, connex/total) defined generically, since the published
`def-partial-order`, `def-chain` and `def-well-order` will be rewired to cite
them; partial orders, strict orders and the correspondence between them; total
orders; functions as functional, total relations $f \subseteq A \times B$, with
equality of functions, composition, identity, restriction, image and preimage and
their behaviour under unions and intersections; injections, surjections,
bijections (the re-homed `def-injection-surjection-bijection`) and inverse
functions; equivalence relations, classes and the quotient set (the re-homed
`def-equivalence-relation`); the partition theorem (the re-homed
`lem-equivalence-classes-partition`) and the correspondence between partitions
and equivalence relations; the universal property that makes a function on a
quotient well defined; the canonical decomposition of a function through the
equivalence relation it induces. Sets of functions $B^A$ and their existence as
sets. Whether the Axiom of Choice is needed anywhere here, and where it is not.

**Watch the boundary cases** — the empty set, the empty family, the empty
relation, functions out of and into $\varnothing$, $\mathcal{P}(\varnothing)$,
$A \times \varnothing$, and the intersection of the empty family — these are
where this material is most often stated falsely, and they are exactly what the
boundary pass in `briefs/beta-scaffold.md` §"Proof-obligation and boundary pass"
is for.

## 4. Gates

You may run any gate. Against the spliced spec you cannot validate your own file
directly, so report what you believe `validate-plan.mjs` and `depsource.mjs` will
say and let the orchestrator run the authoritative pass. Run
`node tools/prosecheck.mjs <your files> --warnings` on anything you write.

## 5. What to report back

The report format of `briefs/beta-scaffold.md` §9 applies in full — per-page item
list, per-pair richness report, findings ordered by severity as individual
approve/decline recommendations, forward references kept, new ids with the grep
that confirms they do not exist, cross-batch dependencies, an honest confidence
statement including what you did not verify, and the web-research ledger and
dependency-closure statement. Add to it:

1. **The gap analysis** — what the published Foundations corpus already contains,
   what it uses without building, and therefore what your pages carry. Name ids.
2. **The re-homing report** — for each of the three re-homed items, every
   wikilink that becomes a forward reference, every positional or "why this
   exists here" claim that re-homing falsifies, and the exact edits required,
   classified material or non-material per §1(f).
3. **The published-rewiring report** — a summary of what you staged in
   `research/zfc-published-rewiring.md`, with the material/non-material split.

Do not claim a gate passed that you did not run. An accurate partial report is
worth more than a tidy false one.
