# research/ — source sweeps and the page-stack design

Working material for the Real Analysis + Topology expansion, gathered
2026-07-25. Not library content: the renderer reads only `items/` and
`library/`. Kept in the repo because reproducing it costs hours of fetching.

## Source sweeps (raw agent deliverables, verbatim)

| file | covers |
|---|---|
| `sweep-realanalysis-part1.md` | Topics 1-12 of undergraduate real analysis: definitions, theorems, **counterexamples CE1-CE217**, source notes; 14 definitions of pi; ~100 trig identities in 24 categories; the 8-source x 15-topic coverage matrix; commonly-missed items 1-50 |
| `sweep-realanalysis-part2.md` | Corrections to Part 1; MIT/Harvard/Princeton/Berkeley/Stanford/UChicago/Cambridge/Oxford course data; Munkres, Apostol, Zorich, Hairer-Wanner, Bartle-Sherbert, Spivak TOCs; ~80 further counterexamples; commonly-missed 51-80 |
| `sweep-realanalysis-part3.md` | exp/log/pi/trig/complex in depth: **10 definitions of exp**, 16 characterisations of e, **16 definitions of pi**, six proofs that cos has a positive zero, **27 categories / 187 trig identities**, arc length verbatim from Rudin 6.26-6.27, the C/d scaling proof, 11 definitions of sin and cos |
| `sweep-topology-core.md` | Topological spaces, bases, continuity, products/quotients, connectedness, compactness. Engelking/Munkres/Willard/Kelley/Morris/Bourbaki/Lee TOCs; 52 commonly-missed results |
| `sweep-topology-advanced.md` | Separation axioms, Urysohn/Tietze, countability, metrization, nets and filters, **uniform spaces**, function spaces; 50 commonly-missed results; the convention forks |
| `sweep-metric-spaces-and-set-theory.md` | Part A: a full metric-spaces course inventory (Searcoid/Sutherland/Rudin/Munkres/Pugh/Lebl/Copson/Bryant/Cambridge/Oxford). Part B: ordinals, cardinals, choice principles, and **the exact "topology theorem -> choice principle" table** |
| `sweep-topology-counterexamples.md` | **The deep dive.** Convergence pathologies (why sequences fail) and metric-space / functional-analysis counterexamples, each with its exact hypotheses, failure modes and choice status, cross-referenced to Steen and Seebach numbering. Marks every claim **[F]** fetched / **[D]** derived with proof / **[K]** asserted, so it is self-auditing. **It corrects four premises of the brief it was given** (items A-3, B-3, B-8, B-12) plus an "arrow space" naming ambiguity |
| `sweep-counterexamples-consolidated.md` | **The wide inventory.** 118 numbered counterexamples in eleven sections: the full Steen-Seebach spine (all 143 numbers **verified against a local clone of the pi-Base data repo**, not recalled), separation / compactness / connectedness / countability separators, convergence, metric spaces, product and quotient pathologies, a complete **axiom-of-choice ledger**, a 22-row table of false statements students believe, and **nine corrections to its own brief** plus **five errata in Steen-Seebach itself**. Each entry carries construction, what it refutes, choice cost, attribution — our item schema minus the proof |

## Distilled notes (what each sweep CHANGES about the plan)

`notes-delta-realanalysis.md` · `notes-delta-topology-core.md` ·
`notes-delta-topology-advanced.md` · `notes-delta-counterexamples.md`

Read these before the raw sweeps; they are the actionable residue.

**`notes-delta-counterexamples.md` is the one to read first if you are about to
author anything.** It carries nine corrections to standard teaching folklore that
would otherwise have been published as true (among them: `x^(1/3)` *is*
uniformly continuous on R; the sequential fan *is* Frechet-Urysohn; the long line
*is* path-connected; a separable space cannot have uncountably many disjoint open
sets), the five known errata in Steen-Seebach, two claims explicitly flagged
unverified, and the correction that **the Baire category theorem for locally
compact Hausdorff spaces is not choice-free** — which this repo had recorded
wrongly in `DEFERRED.md` §0.

## The design

| file | what it is |
|---|---|
| `plan-realanalysis-pages.md` | **The current real-analysis design.** 40 A/B pairs in strict reading order, 12-25 items per A page, with the circularity discipline and the open decisions |
| `plan-topology-track.md` | The topology track: metric spaces first, then general topology, then uniform spaces. Superseded in granularity by the split proposed in `notes-delta-topology-advanced.md` §1 |
| `plan-r-specific-pages.md` | The R-specific topology / continuity / R^n pages, which stand alongside the general ones by owner decision |
| `plan-choice-and-ultrafilters-page.md` | **Ready to author.** The minimal set theory for Tychonoff and the ultrafilter lemma; ordinal-free via Bourbaki-Witt |
| `plan-first-draft-superseded.md` | The original 13-pair draft, kept for provenance only |
| **`plan-spec.json`** | **The machine-checked stack.** All 132 pages (64 A + 64 B + the 4 already published) in strict reading order, each with its declared page-level prerequisites. `node tools/validate-plan.mjs research/plan-spec.json` proves the whole design acyclic. Regenerate with `node research/gen-spec.mjs` |
| `gen-spec.mjs` | Generator for the above, so 132 pages stay free of copy-paste drift. Edit this, not the JSON |

### How the spec stays honest while it is incomplete

Item deps alone cannot validate a stack whose item lists are unwritten: a page
with no items induces no edges, so a spec of empty pages would pass **vacuously**.
So each page also declares `requires: [pageId, ...]` — the reading order asserted
as a claim in its own right. The validator then checks that the declared graph is
acyclic and order-consistent, and — this is the part with teeth — that **every
page edge induced by an item dep lies inside the transitive closure of that
page's declared `requires`**. An item therefore cannot quietly reach into a page
the design never admitted needing. Pages without item lists are marked `*` in the
output and counted separately, so a green run never overclaims.

Two further conventions the validator enforces: `requires` must be a **transitive
reduction** (matching the birds-eye flowchart rule in CLAUDE.md), and a B page's
forward citations — the D-TRIG exception, legitimate because B pages are leaves —
must be **whitelisted** per page in `forwardRefs` and are then reported rather
than hidden.

## Tooling built for this (in `tools/`)

- **`depcheck.mjs`** — the repo-wide gate. Resolves every `deps` and every
  wikilink, detects cycles in the item graph and in the induced page graph,
  verifies `justified_by` edges really point forward, flags draft items on
  published pages, unaudited published items, and orphans. Run
  `node tools/depcheck.mjs` from the repo root. **This is the mechanical
  guarantee of no circular reasoning.** It found and fixed three real cycles in
  the previously published content on 2026-07-25.
- **`validate-plan.mjs`** — the same checks against a *plan* (a JSON page/item
  spec) before any item is authored, plus page-size warnings and the A/B
  companion rule. `node tools/validate-plan.mjs <spec.json>`.

## Conventions fixed for this expansion

Resolved by the owner's rule: most widely adopted, Wikipedia as tiebreaker.
Full list in the `math-convention-rule` memory. The load-bearing ones:
compact does **not** include Hausdorff; neighbourhood need **not** be open;
regular/normal/completely regular are the bare **T1-free** conditions with
T3 = regular + T0 and T4 = normal + T1; Urysohn space = closed neighbourhoods
while completely Hausdorff = a continuous function; `pi` := twice the smallest
positive zero of cos; a curve is a **mapping**, not a point set.

One documented exception: Wikipedia's *Filter (set theory)* page renders filter
convergence incorrectly. The correct form is that the filter refines the
neighbourhood filter. Say so in the item.

## What is deliberately out of scope

See `../DEFERRED.md`. Measure theory, functional analysis, forcing/large
cardinals, and algebraic topology are deferred to future sessions, with every
affected result logged there rather than dropped.
