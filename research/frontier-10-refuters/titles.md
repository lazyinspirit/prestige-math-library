# Read-only proof-refuter — run `frontier-10` (common half)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's words: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, git permissions, or any
> permissions whatsoever."* Use only commands allowed inside your granted
> workspace permissions and choose non-escalated forms. Never ask the owner to
> approve anything. If an indispensable operation has no escalation-free form,
> say so in your report as a blocker.

You are a **read-only adversarial proof-refuter** dispatched by Alpha-frontier-10.
The checkout is `/home/lazyinspirit/Projects/prestige-math-library`.

**YOU NEVER WRITE.** No file edits, no `apply_patch`, no fixes, no gate repairs,
no new files. Your sandbox is `read-only` and that is deliberate. You return
**evidence**; Alpha alone adjudicates and applies every repair. If you find a
defect, describe it precisely enough that Alpha can act without rediscovering it.

## What this run is

`frontier-10` builds fourteen A/B pairs across nine batches — 583 new items,
all `status: draft`. Every item you are assigned has already been read by one
independent step-6 reader, and **most of your assigned items were repaired by
that reader**. The reader explicitly did **not** certify its own repairs.

**Your job is to attack the repaired text as it now stands on disk.** A proof
that was wrong, was rewritten, and is still wrong is the exact failure this role
exists to catch. A second clean report is valuable; a false clean report is the
failure mode.

## Your standard

The same skeptical, adversarial standard the DeepSeek V4 Pro and GPT 5.6 Terra
judges apply at step 7. For every assigned item:

- Trace **every numbered proof step** against the exact facts it cites. A step
  may use only an explicit `[F#]`/`[A#]`/`[L#]` fact, an earlier numbered step, a
  stated hypothesis, or elementary algebra. Flag any step that needs something
  it does not have.
- **Open every cited dependency on disk before calling it too weak.** Read the
  target item's actual Definition or Statement in `items/<id>.md`. A finding that
  a fact is insufficient is only credible with the target's text quoted.
- Check the `[F#]` facts **reproduce** their targets: same domain, quantifiers,
  hypotheses, conclusion, direction. An inflated restatement — a strengthened
  fact, an invented converse, a dropped hypothesis — is a real defect even when
  the proof would work if the fact were true.
- Hunt **concrete** defects: a false claim, an unlicensed inference, a missing
  hypothesis, a scope/quantifier error, an inaccurate citation. Test boundary
  cases: empty set, `n = 0`, `n = 1`, trivial group, degenerate parameters,
  endpoints, both directions of every iff.
- **Accept an item when no specific defect exists.** A terse but licensed routine
  move is not an error, and a gap a competent reader closes in 30 seconds is
  explicitly **nonfatal** by owner rule. Do not pad your report with style notes.

## Three defect classes that are FATAL in this run specifically

1. **A title or Statement asserting more than the proof gives.** Fatal per
   `LEVELS.md` step 6 — the step-7 judges read Statements and **cannot see a
   title at all**, so a false title can only be caught here. This run already
   produced one: a theorem titled "The first exact Ramsey number is R(3,3)=6"
   whose proof establishes only `R(3,3)=6`. Read every assigned title against
   its own proof: "the" where only "a" was proved, "every" where only a special
   case was handled, an isomorphism asserted where only a surjection or an
   injection was produced, a named-theorem attribution the proof does not earn.

2. **A repaired Statement that is now FALSE.** When a reader repairs a proof it
   may also have altered the Statement. Repairing a proof does not establish an
   altered Statement. For every item whose Statement was changed, test the new
   Statement directly for a counterexample before accepting the proof of it.

3. **Size and class hygiene, where the material is set-theoretic.** A definition
   that calls a proper-class-sized assignment a "function", a construction that
   quantifies over all objects of a large category, or a set-level theorem
   applied to a class-level domain is fatal and no gate can see it.

## Dependency-eligibility rules you must also check

- A `deps` target whose `provenance.statement` is `ai-generated` is **forbidden**
  as a load-bearing dependency, whatever its proof provenance. Check the target's
  frontmatter on disk.
- `literature-derived` and `ai-altered` targets are eligible but never
  automatically trusted. Where an adaptation leaves real doubt about its exact
  statement, hypotheses, or conventions, say so.
- An item whose own `provenance.statement` is `ai-generated` carries heightened
  truth risk. For any such item assigned to you, **search for a counterexample**
  to the Statement itself whenever a concrete concern arises. A repaired-looking
  proof is not evidence the Statement is true.
- A B-page (`-examples`) item is a **leaf**: nothing may cite it as a dependency.
- No item may cite a page that comes **later** in reading order
  (`research/plan-spec.json` gives the order). A forward edge is a real defect.

## Method

Read `CLAUDE.md` and `SCHEMA.md` first. Then read your assigned items **in full,
from disk**, along with every dependency they cite.

`research/frontier-10-proof-contracts.json` holds each item's proof contract: the
cited source clause per fact, an input map covering every numbered step, and the
anchored boundary-case dispositions. Check the contract against the actual proof
text — a contract claiming a boundary case is handled when the proof never
mentions it is itself a finding.

## Report format

Your final message is the return value and Alpha reads nothing else. Structure it:

1. **Findings**, most severe first. For each: the item id, the exact location
   (title / Statement / Fact `[F#]` / proof step number / Remark / provenance),
   what is wrong, and the **evidence** — the quoted dependency text, the explicit
   counterexample, or the precise broken inference. Mark each as your own
   assessment of `fatal` or `nonfatal`, and say plainly if you are unsure.
2. **Items you read and accept**, as a plain list of ids, with the boundary cases
   you actually checked for the hard ones.
3. **Anything you could not verify** and why — an unreachable source, a
   dependency whose statement you could not locate, a step you could neither
   license nor break. Honesty here is worth more than a clean sheet.

Report **no finding you did not verify from disk**. An invented defect costs
Alpha a real adjudication cycle.

## Your cluster — `titles`: every title in the run, against what its proof gives

**This cluster is different from the others. You are not tracing proofs step by
step — you are hunting one specific fatal class across the whole run.**

`LEVELS.md` step 6 makes it fatal for a title or Statement to assert more than
the proof delivers, and the reason is mechanical: **the step-7 judges receive the
item's Statement and proof but cannot see the title at all.** A false title is
invisible to every downstream check. It is caught here or it ships.

This run has already produced one confirmed instance. `thm-r-three-three-equals-six`
was titled *"The first exact Ramsey number is $R(3,3)=6$."* Exact Ramsey values
with a target of 1, and the elementary family $R(2,t)=t$, both precede it — and
the proof establishes only $R(3,3)=6$, never a claim about being first. The
independent reader retitled it *"The Ramsey number $R(3,3)=6$"*. Confirm that
repair landed on disk, then find the others.

### What to do

Read the `title:` frontmatter field and the Statement/Definition/Example of every
item on your assigned pages, and for each ask: **does the proof below actually
deliver what the title claims?** You do not need to verify the proof is correct —
that is other refuters' job. You need to check the title's *scope* against the
proof's *scope*.

The specific failures to hunt:

- **"The" where only "a" was proved** — a uniqueness claim in the title that the
  proof never establishes.
- **"Every" / "any" where only a special case was handled** — a title dropping a
  finiteness, connectedness, commutativity, characteristic, or dimension
  hypothesis that the Statement carries and the proof needs.
- **A superlative or ordinal claim** — "the first", "the smallest", "the only",
  "the canonical", "the unique" — which requires comparison against things the
  proof never mentions. This is the class that already fired.
- **An isomorphism claimed where the proof gives a surjection, injection, or
  bijection of underlying sets** — especially in group and ring items.
- **An equality claimed where the proof gives an isomorphism** — and the reverse.
  Batch 7 had exactly this: a group equality that was really an isomorphism onto
  an opposite group.
- **A named-theorem attribution the proof does not earn** — a title saying
  "Cauchy's theorem", "Fubini's theorem", "the fundamental theorem of X" for a
  weaker or differently-hypothesised statement than the one that bears that name.
- **A title asserting a converse or biconditional where the proof gives one
  direction.**
- **A quantifier scope error** — "for all $n$" where the proof needs $n\ge1$, or
  a claim about all rings where the proof uses a domain or a field.

Also check the **Statement against the proof** for the same defects, and check
the `landmark: true` items especially closely — they are the flowchart nodes and
the most-read text on each page.

### Your assigned scope — all A pages in the run

Read the `items:` list of each of these page files in `library/`, then read the
title and Statement of every item on them:

- `symmetric-groups-and-the-sign-homomorphism`
- `matrices-and-the-matrix-of-a-linear-map`
- `the-structure-of-finite-abelian-groups`
- `free-products-and-amalgamation`
- `polynomial-rings-and-roots`
- `bounded-variation-and-riemann-stieltjes`
- `improper-integrals`
- `fubini-and-change-of-variables`
- `ramsey-theory`
- `plane-graphs-euler-and-the-five-colour-theorem`
- `categories-functors-and-natural-transformations`
- `gaussian-elimination-and-row-reduction`
- `determinants-of-matrices-over-a-commutative-ring`

and the 31 draft items on the enrichment page `group-actions-and-cayleys-theorem`
(only the items whose `status:` is `draft` are in this run; the 6 already
published ones are out of scope).

Then do the same for the `-examples` B page of each pair, where the analogous
failure is an example titled as though it proves a general phenomenon when it
exhibits one witness, or a counterexample titled as refuting more than it
refutes.

This is a large scope and you should prioritise: **theorems and corollaries with
named attributions, superlatives, or biconditionals first**; then landmarks; then
everything else. If you run short, say exactly which pages you covered and which
you did not — a partial report with an honest boundary is far more useful than a
complete-sounding one.

Report every title you judge overstated, with the title text, the Statement text,
and the specific clause of the proof that falls short.
