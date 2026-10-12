# Step 3a scope report — ordinals-and-transfinite-recursion

- Run: `frontier-44-special-representation-examples-28`
- A/B pair: `ordinals-and-transfinite-recursion` / `ordinals-and-transfinite-recursion-examples`
- Batch: 4
- A-page scope decision: **sufficient**

## Scope assessment

This pair is one of the four commissioned "missing examples pages": a published
legacy set-theory A page plus a newly commissioned B companion. The controlling
design is `research/plan-set-theory-completion-track.md` §7, which records the
pair as the published legacy singleton whose registered B row was an empty
placeholder, together with the binding owner direction
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`,
which commissions the B page ("substantive, source-grounded examples and
counterexamples covering the companion A page's concepts and boundary cases")
and freezes the A page. `plan-spec.json` controls placement: orders 348/349; A
requires `linear-independence-bases-and-dimension`; B requires only A. The three
design locations named in the beta dispatch are stale renumbering, hierarchy and
cross-track mentions (orders 183 → 201 etc.), not construction designs; the
batch-4 notes record that comparison and I confirmed the current plan values
against `plan-spec.json`.

The A inventory is the published 22-item inventory (20 `items` + 2 `examples`):
well-orders, order isomorphisms and initial segments; transfinite induction and
recursion; rigidity and comparability of well-orders; von Neumann ordinals with
closure and trichotomy; Burali–Forti; Mostowski collapse; successor and limit
ordinals with ω as least limit; Hartogs; the well-ordering theorem and its
choice equivalence; `def-cardinal` (initial ordinals and cardinality under AC);
the two false statements and the choice ledger. I verified that the run
manifest reproduces the published page's 22 ids and that all 22 manifest `deps`
arrays equal the published item frontmatter (22/22). The deliberate deferrals
are recorded against named later pages: class-length recursion and ordinal
operations to `ordinal-arithmetic`; cumulative hierarchy and rank to
`well-founded-relations-rank-and-the-cumulative-hierarchy`; alephs, successor
cardinals and cardinal arithmetic to `cardinal-arithmetic-and-cofinality`.

The B inventory is 12 planned items (8 examples, 4 counterexamples): finite von
Neumann ordinals and ω; a set of ordinals that is not transitive; the
lexicographic orders on {0,1}×ℕ and ℕ×ℕ; the one-point extension of ω; the
failure of well-ordering for lex ℤ×ℤ; an explicit well-ordering of ℤ; the shift
as a nonidentity order automorphism of (ℤ,<); the collapse of a finite chain;
the failure of the collapsing recursion on ℤ; the Hartogs numbers of a finite
set and of ω; and transfinite induction with the least element exempted.
Together with the preserved A items this covers the pair's subject and its
standard boundary cases: non-well-founded orders, non-transitive sets of
ordinals, an exempted minimum, rigidity and recursion failure, finite and
infinite Hartogs instances, and explicit order-type computations. I found no
subject-level omission requiring enrichment or a pair merger.

Watch item (not a scope gap): the Moore harvest row for the one-point-extension
item mentions "ω·ω is not a cardinal". Ordinal multiplication is deferred to
`ordinal-arithmetic`, and the planned item and its dependency list contain no
ordinal product; the item must stay with the ω+1 / equinumerosity instance it is
titled for. Similarly, `ex-an-explicit-well-ordering-of-the-integers` lists
`def-abs-value`, which is stated for ordered fields; the applicable published
suppliers for the integer absolute value are `def-int-abs` and
`lem-int-abs-properties` (homed on `divisibility-gcd-and-bezout`, inside the
pair's closure). Both are Step-3b citation checks, not missing prerequisites.

The B page is a leaf: no planned item or page in `plan-spec.json` references any
of the 12 new ids, consistent with the owner's "no load-bearing suppliers on B
pages" rule and the B-leaf scaffolding requirement. Both page inventories are
far below the 100-item ceiling.

## Source coverage

A. Marks, *Set Theory* (Berkeley, revised 2026-01-31), §§3–9, printed pp. 15–42,
and J. T. Moore, *MATH 6870: Set Theory* (Cornell), §§3–8, printed pp. 6–22, are
recorded as read in full for each page. The A page harvest has 65 rows: 39
already-published, 3 included, 2 inline, 19 deferred with concrete destinations,
and 2 explicitly out of scope with reasons. The B page has 12 `included` rows in
each source, one per item, including the source-level justifications for all
four counterexamples. `coverage-checklist` reports 0 errors; the only advisory
is the low-yield warning on the preserved A page, which is expected because its
results are already published. Source fetch stamps are 4/4 (Marks 2 594 888
bytes / sha256_16 `84d316ec6c979f1e`; Moore 608 192 bytes / sha256_16
`17ad5c1bb83c3b8a`). I did not re-fetch the sources in this review; the row-level
coverage record is the run's evidence, and the claims I spot-checked (finite
Hartogs number is the successor ordinal; the Hartogs number of ω is a limit
ordinal; lex and usual orders on ℤ are not well-orders; the explicit ℤ
well-ordering; {0,1,ω} is not transitive) are standard and consistent with the
cited locators.

## Prerequisites

`ordinals-and-transfinite-recursion.requires` is
`linear-independence-bases-and-dimension` (order 103), the owner drift repair of
2026-10-08 replacing the direct Zorn edge. I recomputed the page closure and
confirmed it contains `countability-and-uncountability` and
`order-zorn-and-the-axiom-of-choice`. All 63 item-level dependency ids of the
pair's 34 items resolve to published items with `status: published` and no
recorded-not-proved flag; no dependency of the pair is absent from the published
library, so no unmet prerequisite is confirmed.

The B page's dependencies homed on in-run pages are in the current batch-2
manifest (`lem-pigeonhole` and `lem-nat-order-is-membership` are both listed
there), so the earlier "orphan" observation in the scaffold evidence is stale;
the current derived ledger binds all batch-4 rows and has no orphaned batch-4
reviews. No cross-batch prerequisite gap remains open for Step 5.

## Evidence and library role

A is a core foundations supplier: published `ordinal-arithmetic` (350) and
planned `well-founded-relations-rank-and-the-cumulative-hierarchy` (1412),
`hereditary-and-productive-separation` (372),
`countability-axioms-and-cardinal-functions` (380) and
`categories-functors-and-natural-transformations` (718) require it; the
category-theory track names `thm-transfinite-recursion` and `thm-burali-forti`
as the consumed interface, and both are present. B is the requested set-theory
examples companion and a dependency leaf. I found no prior Step 3a scope receipt
or owner scope decision for this page in this run.

## Evidence read for this report

- `research/frontier-44-special-representation-examples-28-batch-4.pages.json`,
  `…-batch-4.coverage.json`, `…-batch-4.notes.md`,
  `…-batch-4.cross-batch-dependencies.json`
- `research/plan-set-theory-completion-track.md` §7 (esp. §7.2), the
  `plan-spec.json` entries and page closure for the pair,
  `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`,
  `research/frontier-44-special-representation-examples-28-owner-drift-prerequisite-repair.md`,
  and the Step-1 drift record for this pair
- `library/foundations/ordinals-and-transfinite-recursion.md` and
  `items/<id>.md` for the pair's 22 A items and their 63 dependency items

## Decision

**sufficient** — the preserved published definitions and results plus the 12
planned B examples and counterexamples adequately cover the pair's intended
subject and boundary cases, with complete two-source coverage and no confirmed
unmet prerequisite. No owner action is required by this review.
