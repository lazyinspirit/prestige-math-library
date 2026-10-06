# Batch 26 — Higher-Dimensional Resolution of Singularities

Run `frontier-40-geometry-braids-rep-27`, role beta, batch 26 (pair 26, orders
915/916, `algebraic-geometry`). Owned pair only:
`higher-dimensional-resolution-of-singularities` (A) and
`higher-dimensional-resolution-of-singularities-examples` (B).

Artifacts written by this dispatch:

- `research/frontier-40-geometry-braids-rep-27-batch-26.pages.json`
  (59 items: **56 A, 3 B**)
- `research/frontier-40-geometry-braids-rep-27-batch-26.coverage.json`
  (2 pages, 6 source entries, 80 harvested results)
- `research/frontier-40-geometry-braids-rep-27-step1-<item>.json`
  (59 readiness records)
- `research/frontier-40-geometry-braids-rep-27-batch-26.cross-batch-dependencies.json`
  (2 rows: one declared page edge, one item edge)
- this note

## Owner direction, design and plan reconciliation

`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was
read before construction. It fixes the 27 selected pairs, permits lower-order
in-run dependencies on other selected pairs, and leaves publication to the
owner. This pair is one of the 11 algebraic-geometry pairs; its scope is
unchanged, and no new pair or scope deletion was made.

Design section: `research/plan-algebraic-geometry-expansion-track.md`, the
AG-RES-1 row (the batch task's “L51” is the id mention in the canonical page
table; the contract row is in the breadth-roadmap table of the same file). The
design promises:

- A items `thm-resolution-of-singularities-in-characteristic-zero`,
  `lem-resolution-is-functorial-under-smooth-maps`,
  `rem-positive-characteristic-resolution-status`;
- B items `ex-resolution-of-a-surface-singularity`,
  `cex-no-claim-of-resolution-in-positive-characteristic`;
- “Depends on AG-BIR-1, with characteristic fixed”; “Prove only the exact
  characteristic-zero theorem supported by a chosen source; state the
  positive-characteristic boundary”; “No all-characteristic theorem is
  proposed”;
- the design's own gate: “read Hironaka's proof or a full modern proof and an
  independent treatment”, with the warning that V25 §28.5 and Stacks §54.15 do
  not prove general higher-dimensional resolution.

`research/plan-spec.json` orders 915/916 were compared with the design: page
ids, order, category, companion and `requires` agree, and the plan's item lists
are empty (the design inventory is the scope contract, not plan entries). No
design/plan conflict was found. All five promised items are present with their
design ids and kinds.

Two conflicts/observations were recorded rather than silently resolved:

1. **Item-level use of the declared AG-BIR-1 prerequisite.** The design says
   the pair “Depends on AG-BIR-1”, but the chosen source's proof of the
   characteristic-zero theorem is a self-contained marked-ideal induction that
   does not consume surface contraction or surface resolution. The declared
   page-level `requires` edge is kept (it is the plan's edge), and the only
   item-level use of the supplier page is the B-page example's comparison with
   the surface theorem. Both are declared in this batch's cross-batch input
   with status `open` for Step-3b verification.
2. **Source numbering.** The full text read is the author's arXiv version
   (math/0401401, 28 pp., dated 2018). The published JAMS numbering differs:
   the Glueing Lemma read as “Lemma 2.9.5” is cited by the independent
   treatment as “[Wło05, Lemma 3.5.5]”. Item strategies name the arXiv
   locators and record this correspondence, so Step-3 authors and Step-5
   reviewers can map them to either version.

## The design's source gap, and how it is closed

The design's gate was: read a full modern proof **and** an independent
treatment, and prove only the exact characteristic-zero theorem supported by
the chosen source. This dispatch read:

1. **J. Włodarczyk, “Simple Hironaka resolution in characteristic zero”**
   (JAMS 18 (2005) 779–822; author's arXiv version math/0401401, 28 pp.),
   read in full: Theorems 1.0.1–1.0.3, §2.1–§2.10 (marked ideals, controlled
   transforms, equivalence, derivative ideals, maximal contact, homogenized
   ideals, coefficient ideals), §3 (the resolution algorithm incl. the full
   proof of Proposition 3.0.8 and Lemmas 3.0.9–3.0.11), §4.1–§4.9
   (functoriality, field descent, principalization, embedded
   desingularization, the Bravo–Villamayor strengthening, embedding
   independence, and smooth-morphism functoriality). This is the page's proof
   route.
2. **H. Hauser, “The Hironaka theorem on resolution of singularities (or: A
   proof we always wanted to understand)”** (Bull. AMS 40 (2003) 323–403,
   81 pp.), second independent treatment; §§11–14 read in full (Cartesian
   induction and completion of the proof in §13; the positive-characteristic
   examples in §14), table of contents recorded for the mobile-based route.
   This supplies the second full treatment, including the Narasimhan example
   used by the B-page counterexample.
3. **D. Abramovich, M. Temkin, J. Włodarczyk, “Functorial embedded resolution
   via weighted blowings up”** (Algebra & Number Theory 18 (2024) 1557–1587;
   arXiv:1906.07106), an independent treatment with a different method
   (stack-theoretic weighted blowings up). Read: §§1.1–1.4, 4.1, 4.3–4.4,
   8.1–8.3. It corroborates the functoriality statement and the theorem
   statement; it is not the local proof route, because its principalization
   proof depends on the authors' separate 90-page log-geometry machinery.
4. **H. Hauser, “On the problem of resolution of singularities in positive
   characteristic”** (Bull. AMS 47 (2010) 1–30), introduction and §§A–D read;
   the status and obstruction record for the positive-characteristic boundary.
5. **The Stacks Project, Divisors §§31.33–31.34** (definition of the blowup,
   affine blowup charts, flat base change, strict transforms) and the Stacks
   étale-morphism section §29.37 (standard étale local model and smooth local
   factorization) for the B-page computations and for the local-structure
   input. Read for the locators listed in the coverage file.

All six coverage source entries are **fetch-verified with actual full-text
bodies** (`source-fetch-check --stamp`: 8/8 source entries fetch-verified —
Hauser's survey and the positive-characteristic survey appear on both pages —
8/8 resolved, 0 documented drops). Nothing was dropped, so no
`source_resolution` record is present.

**Honesty limits of this closure.** The scaffold is a faithful itemization of
the chosen source's named results plus the definitions and local lemmas they
need. The strategies state the source's route with exact locators; they are
not independent verifications of the source, and the two core items
(`prop-canonical-resolution-of-marked-ideals`, `lem-glueing-homogenized-ideals`)
plus the coefficient-ideal and Bravo–Villamayor items are research-level
arguments. Step 3 must author them against the source, and Step 5 must review
them. Nothing in this note claims authored-proof or audit acceptance.

## Inventory, dependency levels and closure

The A page is a single locally closed inventory: every A prerequisite is on the
same A page, and the only B-page helper
(`lem-blowup-charts-of-the-quadric-cone`) is used only by later items of the
same B page, as SCHEMA.md permits. The page holds 56 of the hard cap of 100
items; nothing was omitted for space, and no page split is required.

The A page proves exactly the design's characteristic-zero theorem chain:
principalization of ideals ([[thm-principalization-of-ideals]]), weak embedded
desingularization ([[thm-weak-embedded-desingularization]]) with the
Bravo–Villamayor full-transform strengthening
([[thm-bravo-villamayor-full-transform]]), and resolution of singularities
over any characteristic-zero field ([[thm-resolution-of-singularities-in-characteristic-zero]])
with smooth-morphism functoriality ([[lem-resolution-is-functorial-under-smooth-maps]]).
The positive-characteristic boundary is recorded, not proved
([[rem-positive-characteristic-resolution-status]], `proved_here: false`, with
its `external_dependency` record; no item consumes it). The B page carries the
design's worked example and counterexample.

Levels (in-run levels only; published suppliers do not raise a level; the two
cross-batch edges are the batch-25 page and one batch-25 item, see below):
level 0: the conventions remark, the order, SNC, étale-formal and étale-extension
helpers and one blowup-chart helper; the definitions climb through level 6
(`def-companion-ideal-and-monomial-part`), the marked-ideal lemmas through
level 10, the algorithm at level 11, the §4 conclusion lemmas through level 20,
`thm-resolution-of-singularities-in-characteristic-zero` at level 21, and the
functoriality lemma and the boundary remark at level 22. The B-page example is
level 22 through its batch-25 supplier and the counterexample level 23. The
run-level check for this batch reports no mismatch and no cycle.

## Dependency verification performed

- Every item's statement and strategy was written against the read source
  locators; each item's `deps` array lists every item its claim or argument
  needs (published, in-run or the two declared cross-batch edges).
- A scripted comparison confirmed that **every `[[wikilink]]` in every
  statement and strategy is either the item's own id or is listed in its
  `deps`** (0 links outside `deps`; the same convention batch 21 used).
- All non-batch `deps` resolve to **published items on disk**: blowups
  (`def-blowup-scheme-along-ideal`, `def-exceptional-divisor-blowup`,
  `def-strict-transform-closed-subscheme`, `thm-blowup-base-change-flat`,
  `thm-blowup-universal-property`), smooth/étale/flat morphisms, Kähler
  differentials and derivations, completions, order/Krull-intersection,
  divisors, dimension and Noetherian schemes (checked programmatically; 0
  missing).
- No item consumes a `proved_here: false` item; the only such item of the pair
  is the boundary remark itself, which has no consumers and no proof section.
  No item reaches any `deferred-set-theory-beyond-choice` page; no foundations
  item is involved.
- **Axiom of Choice:** every item whose chain uses blowups/relative Proj or the
  étale formal inputs declares `def-axiom-of-choice` and inherits it from those
  published suppliers; the conventions remark states this. No new choice
  principle, and no dependent choice, is introduced by this page's arguments
  beyond what the published suppliers already assume.
- Well-definedness: the transform calculus is guarded by
  `lem-controlled-transform-is-well-defined`; the order function by
  `thm-krull-intersection-theorem`; the centres of the algorithm by
  `lem-order-semicontinuity-and-snc-strata` plus the algorithm item; the
  independence of the invariant from the tangent direction by
  `lem-glueing-homogenized-ideals`.
- The declared page requirement `birational-morphisms-contractions-and-surface-singularities`
  and the item use `thm-resolution-of-normal-surface-singularities` are
  recorded as batch-26 cross-batch rows with status `open` (Step-3b verifies);
  both suppliers are lower-order in this run.

## Sources and harvest

The coverage file disposes **80 harvested results** with no result left
undisposed: `included` items (the source's named results mapped to the
scaffolded ids), `inline` items (results absorbed into a proof or comparison),
one `deferred` row (Hauser's §12 examples, destination the B page) and
`out-of-scope` rows with per-result reasons (the mobile/setup machinery of the
second treatment, its weight of the alternative route, Bergh destackification,
admissible blowups/flattening, the plane-curve walkthrough, and the
oblique-polynomial obstruction theory).

## Checks actually run (2026-10-04, after the last edit)

| check | command | result |
|---|---|---|
| manifest deps (batch) | `node tools/manifest-deps.mjs research/…-batch-26.pages.json` | 59 items, 0 errors |
| manifest deps (whole run) | `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 862 items, 0 errors (861 on the first pass; batch 20 was in flight and its manifest moved between the passes) |
| policy (batch) | `node tools/content-policy.mjs --manifest-only research/…-batch-26.pages.json` | 1 error: `batch-dependency-missing` for the in-run batch-25 supplier `thm-resolution-of-normal-surface-singularities` |
| policy (whole run) | `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 862 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/coverage-checklist.mjs research/…-batch-26.coverage.json --require-destination` | 2 pages, 80 harvested, 0 errors, 0 warnings |
| source full text | `node tools/source-fetch-check.mjs --coverage research/…-batch-26.coverage.json --stamp` | 8/8 fetch-verified, 8/8 resolved, 0 drops |
| readiness | `node tools/step1-decisions.mjs record …` ×59 in dependency order, then `check --run …` | 59/59 batch-26 records `ready` and current; the run-level check reports only the pre-existing batch-23 escalation `def-derived-scheme-and-cotangent-complex` and batch-24's two empty scaffold pages |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | exits 1 only for batch-24's empty scaffold inventory; all 59 batch-26 levels correct, 0 cycles |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run …` | refreshed; batch 26 reviewed, batch 24 still unreviewed (not this batch's file) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK (247 planned pages still item-less, standing mid-run note) |
| external references | `node tools/extcheck.mjs` | OK (one pre-existing advisory row on an unrelated published item) |
| forward references | `node tools/fwdcheck.mjs --quiet` | OK |
| sanity | kind/prefix, balanced `$$`, no `\(`/`\[` delimiters, no unresolved wikilinks | 0 issues |

The scoped policy row is the documented join behaviour: a cross-batch item
edge resolves only when the whole-run manifest set is supplied, which is
exactly how the stage-1 `content-policy-scaffold` gate invokes it. The scoped
invocation is reported here honestly rather than suppressed.

## Escalations, defects and uncertainty

- **No item is escalated.** Every one of the 59 items has a complete strategy
  taken from a full-text source and all its prerequisites are published or
  lower-order in-run. The readiness records are Step-1 readiness only; Step 3
  authors and Step 5 reviews the proofs.
- **Residual risk (recorded, not hidden):** the five core items
  (`prop-canonical-resolution-of-marked-ideals`,
  `lem-glueing-homogenized-ideals`, `lem-coefficient-ideal-restriction-support`,
  `lem-completion-automorphisms-for-tangent-directions`,
  `thm-bravo-villamayor-full-transform`) are multi-page research arguments in
  the source. If a Step-3 author cannot close one of them from the cited
  locators, it must be escalated rather than settled by citation; if the owner
  judges the single page's authoring burden too large, a page split or a
  successor pair is an owner decision, not a scaffold edit.
- **Published defects:** none found in the published prerequisites consulted.
  This is not an audit of those items; only the interfaces actually used were
  read (`def-blowup-scheme-along-ideal`, `thm-blowup-base-change-flat`,
  `cor-exceptional-divisor-smooth-center-normal-bundle`,
  `thm-completion-of-a-noetherian-local-ring`,
  `lem-completion-preserves-embedding-dimension`,
  `thm-krull-intersection-theorem`, the Kähler/derivation items and the
  smooth/étale items).
- **Unrelated published consumer debt** does not block this supplier pair and
  was not touched.

## Next action

Step 3 authors should write the 59 items in dependency-level order, starting
with the definitions and the level-0 helpers; the core algorithm item should be
written last within the A page. Any later manifest edit invalidates the
affected readiness records and requires re-recording plus a fresh
`node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`.
Step-3b reconciliation owns the two `open` cross-batch rows.
