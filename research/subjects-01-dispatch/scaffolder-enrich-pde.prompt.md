# subjects-01 — density enrichment pass

**You are an expert of partial differential equations.**

Your track's prose scaffold is complete and correct, but **measurably thinner
than the standard the commission set**. This pass raises its density. You own the
same single file you owned before and nothing else.

## No permission prompts, ever

Owner standing rule (2026-07-30, broadened 2026-08-11). No segment of an `&&`
chain may prompt. Record a blocker; never ask.

## The measurement, and what it means

Across the thirteen finished tracks, dividing proposed items by *included*
source headings gives a **decomposition ratio**:

| track | headings included | items | ratio |
|---|---|---|---|
| differential geometry | 365 | 2,098 | **5.7×** |
| homological algebra | 172 | 828 | 4.8× |
| functional analysis | 159 | 687 | 4.3× |
| probability | 137 | 579 | 4.2× |
| category theory | 238 | 844 | 3.5× |
| PDE | 288 | 583 | **2.0×** |
| commutative algebra | 421 | 443 | **1.05×** |

A ratio near 1 means the scaffold recorded roughly **one library item per source
heading** — it transcribed a table of contents. That is not what a scaffold is.
`CLAUDE.md` requires the opposite: *"decompose long proofs into focused
intermediate lemmas and make a pass for useful, cheaply proved corollaries."*
A single source heading like "The Nullstellensatz" becomes a definition, two or
three intermediate lemmas, the theorem, its weak and strong forms, and the
examples that show the hypotheses are needed.

**These counts are grep-derived and approximate. Verify your own track's real
numbers first** — count your actual proposed item ids and your actual harvest
dispositions — and if the measurement is wrong for your track, **say so in your
report and act on the true figure**, not on mine.

## THE ABSOLUTE CONSTRAINT: this is not a quota

**Never pad.** `CLAUDE.md` is explicit: *"Never pad; never drop valuable results
for ergonomics."* And generated-claim minimization binds unchanged — you may not
invent a theorem, proposition, definition or remark to raise a count. Every added
item must be a result your **sources actually contain**, or a lemma that a proof
you are already scaffolding genuinely needs, or an example/counterexample that is
directly checkable.

A ratio of 3× reached honestly is a better outcome than 5× reached by inventing
corollaries. If your subject genuinely decomposes less — some do — then report
that with evidence rather than manufacturing items. **I will believe a reasoned
"my subject is 2.5× and here is why" over a padded 5×.**

## BOTH MODES: acquire more treatments. This is not optional.

Measured across the finished tracks — distinct source hosts against A/B pairs:

| track | source hosts | pairs |
|---|---|---|
| number theory | 30 | 24 |
| PDE | 28 | 26 |
| differential geometry | 27 | 37 |
| functional analysis | 25 | 25 |
| probability | 13 | 22 |
| homological algebra | 13 | 17 |
| **commutative algebra** | **7** | **18** |

`CLAUDE.md` requires **at least two independent treatments per A/B PAIR**, at
least one a textbook, monograph or full lecture-note set with a harvestable table
of contents. A track with 7 sources and 18 pairs cannot be meeting that except by
reusing the same two books everywhere — which is exactly what the rule forbids,
because two books that agree are not two independent checks on a convention.

So, whichever mode you are in:

1. **Search the open web for additional full-text treatments in partial differential equations** —
   author-hosted monographs, open-access textbooks, complete graduate lecture-note
   sets, the Stacks Project and its analogues, university course pages. Obtain the
   **full text** of every one you use, not a table of contents alone.
2. **Aim for at least two treatments PER PAIR, drawn from a pool wide enough that
   no single book is loaded beyond its actual coverage.** Specialised pairs need
   specialised sources: a general text that mentions a topic in a paragraph is not
   a treatment of it.
3. **Produce an auditable per-pair source table**: one row per A/B pair naming its
   two-or-more backing treatments and the exact range read in each. This table is
   how the requirement stops being a slogan. Where a pair still has only one real
   treatment, **say so in the row** rather than padding it with a passing mention.
4. Where two sources disagree on a convention, record the disagreement and say
   which the library adopts and why. That is the whole reason for demanding two.

Wikipedia and encyclopedia entries remain convention tiebreakers only and can
never be a pair's primary backing.

## Your mode

The dispatch task file names one of two modes. **The source-acquisition
requirement above applies in BOTH** — a DECOMPOSE track that decomposes 718
headings from 7 books has fixed one defect and left the other.

### Mode DECOMPOSE — your sourcing is already excellent

You harvested broadly and then under-decomposed. **Do not re-harvest; the reading
is done.** Walk your existing `included` headings and, for each, ask what the
library actually needs to state and prove it from published dependencies:

- the definitions the statement rests on, each as its own item where the library
  does not already have it;
- the intermediate lemmas a full proof needs — a proof with three distinct
  conceptual moves is three lemmas plus a theorem, not one item;
- the cheap corollaries that follow immediately and are worth having;
- the examples and counterexamples that show each hypothesis is necessary;
- the boundary cases: empty, zero, one, degenerate, endpoint, both directions of
  every iff.

### Mode WIDEN — your decomposition is fine, your source sweep was narrow

You decomposed well but read too little. **Widen the harvest first**: add
independent treatments beyond the two-source minimum, extend the chapter ranges
you read, and enumerate and dispose of every heading in the added range exactly
as the original harvest did. Then decompose the new material at the ratio you
already achieve.

## What must not change

- **Seam ownership.** `research/subjects-01-SEAMS.md` §4 and the §7 rulings bind.
  If enrichment would mint something another track owns, cite it instead. Adding
  items is not a licence to annex a neighbour's material.
- **Ids already proposed.** Keep them stable; add, do not renumber.
- **The 60-item A-page ceiling.** If a page now exceeds it, SPLIT it into two A
  pages each with its own B companion, and say so — splitting is never dropping.
- **Provenance discipline.** Every added item gets `provenance.statement` and
  `provenance.proof` with a rationale; no AI-generated statement may be
  load-bearing.
- **Your file only.** Nothing under `items/`, `library/`, `plan-spec.json`, or any
  sibling track.

## Report

Append a clearly marked enrichment section to your track file recording: your
verified before/after item count and ratio, what you added and from which source,
any page you split, any heading you deliberately did **not** decompose and why,
and any place you judged the measurement wrong. Then stop.


---

# This dispatch

# subjects-01 — density enrichment: `pde`

**You are an expert of partial differential equations.**

| | |
|---|---|
| file you own | `research/plan-pde-track.md` |
| mode | **DECOMPOSE** |
| headings included (measured) | 288 |
| items proposed (measured) | 583 |
| decomposition ratio | **2.0×** |
| benchmark | differential geometry, 5.7× |

## Why you were selected

You harvested 451 headings and included 288, then produced 583 items. The reading is done and broad. What is missing is the intermediate structure: Sobolev embedding, trace, Rellich-Kondrachov, Lax-Milgram, elliptic regularity and the maximum principles each decompose into several lemmas, and each hypothesis deserves the counterexample that shows it is necessary.

## What to do

Follow the **DECOMPOSE** section of the brief. Verify the measurement above
against your own file first — the figures are grep-derived and I do not trust
them absolutely.

**Do not pad.** A defensible 3× beats a manufactured 5×. If your subject
genuinely decomposes less than differential geometry, demonstrate that with
evidence and stop there.

Seam ownership from `research/subjects-01-SEAMS.md` §4 and the §7 rulings is
unchanged: enrichment never annexes a neighbour's material. Where you need
something another track owns, cite it.


## Source acquisition — obtain more full texts

The brief's source requirement binds you. Candidate treatments to search for and
obtain in full, beyond what you already used:

Evans, Gilbarg-Trudinger, John, Salsa, Folland *Introduction to PDE*, Taylor *PDE I-III*, Brezis, Hormander, Friedman, Renardy-Rogers, Hunter's notes, Craig's notes.

These are starting points, not a list to accept on trust. Verify what is actually
reachable, obtain full text, harvest each source's own headings over the exact
range you read, and give every heading a disposition. Produce the per-pair source
table the brief requires.
