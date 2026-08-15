# Run `frontier-13` — step 0: frontier and batching

**Date:** 2026-08-14 · **Orchestrator:** this session · **Owner instruction:**
*"Start building A/B pairs from abstract algebra, linear algebra, combinatorics,
category theory, number theory."* Amended in-session:

> *"Orchestrate autonomously, don't let any agents (including yourself) ask for
> permissions. YOU should make best judgement calls prioritizing mathematical
> richness and accuracy and citational accuracy, while keeping forward references
> and non-fatal defects to a minimum as a second priority. Do NOT pause at the
> end of a step like you did previously, keep going all the way to the end of
> step 10. Check in and update me every 20 minutes and make sure nothing is
> stuck."*

So: the priority order for every orchestrator decision on this run is
**(1) mathematical accuracy and citational accuracy, and mathematical richness;
(2) minimise forward references and nonfatal defects.** A cleared step is a
dispatch trigger, not a reporting checkpoint — the run continues to the step-10
owner pause without stopping at any intermediate boundary.

Working tree: `main`. Dirty at step-0 start with pre-existing uncommitted work
from earlier sessions (`research/ra-enrich-01-*`, `research/subjects-01-*`,
several `plan-*.md` edits, and the regenerated `research/BUILD-LEVELS.md`).
None of it is in this run's scope; this run adds only `frontier-13-*` artifacts
until step 5 begins writing content.

---

## 1. The frontier, computed from disk

A pair is **buildable** when every page in its `requires` closure is
`status: published` on disk. Computed by walking `library/*/*.md` for status and
`research/plan-spec.json` for the page graph — not read from any prior run
record. Cross-checked against `node tools/rounds.mjs --pairs`, which agrees on
the same 17 ids.

**17 buildable A/B pairs.** Six are outside the owner's named subjects and are
**out of scope for this run**:

| order | category | id |
|---|---|---|
| 277 | topology | `complete-metrizability-and-baire` |
| 285 | topology | `ascoli-arzela` |
| 287 | topology | `stone-weierstrass-general` |
| 293 | topology | `covering-spaces-and-lifting` |
| 305 | complex-analysis | `complex-power-series-and-analytic-functions` |
| 307 | complex-analysis | `contour-integration` |

The remaining **11 pairs are this run's scope**, listed with the transitive
count of unbuilt A pages each one unblocks:

| order | category | A page | B companion | unlocks |
|---|---|---|---|---|
| 57.001 | number-theory | `primitive-roots-and-unit-groups-modulo-n` | `…-examples` (57.002) | 7 |
| 58 | abstract-algebra | `symmetric-polynomials` | `…-examples` (59) | 11 |
| 68 | abstract-algebra | `semidirect-products-and-automorphism-groups` | `…-examples` (69) | 17 |
| 88 | linear-algebra | `diagonalisation-and-the-minimal-polynomial` | `…-examples` (89) | 30 |
| 94 | linear-algebra | `inner-product-spaces-and-orthogonality` | `…-examples` (95) | 9 |
| 96 | abstract-algebra | `algebraic-extensions-degree-and-finite-fields` | `…-examples` (97) | 6 |
| 106 | abstract-algebra | `tensor-products-of-modules` | `…-examples` (107) | 35 |
| 195 | combinatorics | `linear-recurrences-and-rational-generating-functions` | `…-examples` (196) | 4 |
| 365.001 | category-theory | `adjunctions-units-and-counits` | `…-examples` (365.002) | **197** |
| 395 | combinatorics | `erdos-hajnal-property-and-homogeneous-sets` | `…-examples` (396) | 21 |
| 399 | combinatorics | `regular-pairs-and-induced-counting` | `…-examples` (400) | 21 |

`adjunctions-units-and-counits` is the highest-leverage single pair in the whole
plan: the category-theory spine plus the homological-algebra, monoidal and
representation-theory tracks all descend from it. `tensor-products-of-modules`
(35) and `diagonalisation-and-the-minimal-polynomial` (30) are next.

Two pairs open subjects with no `library/` directory yet — `number-theory` has
one already, but `category-theory` gains only its second pair and
`combinatorics` reaches the Erdős–Hajnal block for the first time. All render
with the styles now present in `web/lib/library-categories.ts`; presentation
stays frozen and nothing here changes it.

## 2. Standing scope obligations

`LEVELS.md` §"Step 0" records **none outstanding**. Verified at step-0 start; the
RA-27b obligation was discharged and struck on 2026-08-13 in run `frontier-11`.
This run therefore carries no mandatory pair beyond the owner's subject list.

## 3. Batching — 7 batches, 11 pairs

Owner cap: **at most two A/B pairs per Beta** (2026-08-01), enforced by
`content-policy.mjs --manifest-only`. Beta lane cap is 5 concurrent
(`dispatch.mjs`), so this dispatches as a wave of 5 and a wave of 2.

| batch | pairs | why these two |
|---|---|---|
| 1 | 58 `symmetric-polynomials` · 96 `algebraic-extensions-degree-and-finite-fields` | both sit directly on `splitting-fields`; one Beta reads the field-theory chapter once |
| 2 | 57.001 `primitive-roots-and-unit-groups-modulo-n` · 68 `semidirect-products-and-automorphism-groups` | `Aut(ℤ/n) ≅ (ℤ/n)^×` is the shared spine — the unit-group structure is exactly what the automorphism-group page needs |
| 3 | 88 `diagonalisation-and-the-minimal-polynomial` · 94 `inner-product-spaces-and-orthogonality` | linear algebra, shared sources, and the spectral theorem downstream needs both |
| 4 | 395 `erdos-hajnal-property-and-homogeneous-sets` · 399 `regular-pairs-and-induced-counting` | identical `requires`; the two opening pairs of the Erdős–Hajnal block |
| 5 | 106 `tensor-products-of-modules` | **singleton** — 35 downstream, and the universal property has to be exactly right |
| 6 | 365.001 `adjunctions-units-and-counits` | **singleton** — 197 downstream, the largest fan-out in the plan |
| 7 | 195 `linear-recurrences-and-rational-generating-functions` | **singleton** — its own subject; nothing else in the run shares its sources |

Batches 5–7 are deliberately single-pair. The cap is a maximum, not a quota: a
dedicated Beta reads more of each source set, and batches 5 and 6 in particular
carry fan-outs where a thin page would be expensive to discover later.

## 4. Seam analysis — zero, mechanically

**No pair in this run declares a `requires` edge on any other pair in this run.**
Checked pairwise across all 11 closures: 0 seams.

Because no in-run pair sits in another in-run pair's closure,
`validate-plan.mjs` raises `undeclared-prereq` on *any* item-level citation
between two of this run's pages — including between the two pairs inside a
single batch. So the batching above buys source affinity and reading economy, not
citation freedom. Each task file states the constraint for its own batch
explicitly.

A Beta that concludes its second pair genuinely needs its first records the
recommendation in its notes for step-3 adjudication; it never edits
`plan-spec.json` and never works around the gate.

## 5. Two B-page `requires` edges — a trap worth naming

Two A pages in this run declare a **B page** as a page-level prerequisite:

| page | declares | reachable A page |
|---|---|---|
| `primitive-roots-and-unit-groups-modulo-n` | `splitting-fields-examples` | `splitting-fields` |
| `adjunctions-units-and-counits` | `limits-and-colimits-examples` | `limits-and-colimits` |

That is legal at page level and puts the companion A page in the closure too, so
its items are citable. But **nothing may depend on an item homed on a B page** —
`validate-plan` error `b-leaf`, `depcheck` error `b-leaf-content`. The declared
edge does not license citing the examples items themselves. Both task files say
so.

## 5a. Decision D1 — three `requires` edges added to `adjunctions-units-and-counits`

Found at step 0 by reading the MA-1 design block against the spec.

`research/plan-category-theory-track.md` §MA-1 designs the page with **seven**
page-level prerequisites. `plan-spec.json` carried exactly one,
`limits-and-colimits-examples`. Three of the other six were already reachable
transitively (`limits-and-colimits`, `universal-properties-and-the-yoneda-lemma`,
`free-groups-and-presentations`, `subspaces-products-and-quotients`); **three
were not**:

| added edge | order | status |
|---|---|---|
| `conjugacy-and-simplicity-in-the-symmetric-groups` | 64 | published |
| `free-modules-and-exact-sequences` | 104 | published |
| `tychonoff-embedding-and-stone-cech` | 271 | published |

Without them, MA-1 items 34 (free-module adjoint), 36 (abelianisation) and 38
(Stone–Čech) are all `undeclared-prereq` failures — three of the page's landmark
worked adjunctions, on the pair with the largest fan-out in the plan. All three
targets are published and all sit at strictly lower order, so the edges are
legal and cost no renumbering.

**`tensor-products-of-modules` (106) was deliberately NOT added.** MA-1 item 40
(restriction of scalars has both adjoints) is marked CONTINGENT on it, but that
page is in flight in this same run as batch 5. The edge would serialise batch 6
behind batch 5 and destroy the zero-seam property in §4. MA-1 already specifies
the fallback — drop to the `Hom`-side adjoint and record the drop — and batch 6's
task file instructs exactly that.

Priority applied: mathematical richness and citational accuracy first. Recorded
in the `plan-spec.json` `note` field in the same edit.

`linear-recurrences-and-rational-generating-functions` was checked the same way
and needed **no** change: its design names
`determinants-of-matrices-over-a-commutative-ring`, which is already in its
closure.

## 6. Gates at step 0

```
node tools/preflight.mjs                              -> READY (1 warning: dirty tree)
node tools/validate-plan.mjs research/plan-spec.json  -> exit 0
```

1176 pages; 244 with item lists validated at item level; 927 planned pages carry
no item list yet, as expected before scaffolding. The `redundant-prereq`
warnings are all pre-existing on other pages — this run adds no page and so
contributes none.

No splice is needed at step 0: all 11 pairs already exist in `plan-spec.json`
with orders, titles, companions and `requires` set. This run writes item lists
into them, it does not renumber anything.

## 7. Next

Steps 1–2: dispatch 7 Betas against `research/frontier-13-brief-beta.md`, each
producing `.pages.json`, `.notes.md`, `.coverage.json` and an opening
`.proof-contracts.json` for its batch.
