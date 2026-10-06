# Step 3a scope review — birational-morphisms-contractions-and-surface-singularities

- Run: `frontier-40-geometry-braids-rep-27` (batch 25), role alpha, label
  `step3a-pair-birational-morphisms-contractions-and-surface-singularities-0cf93f7384d123f7`.
- A page: `birational-morphisms-contractions-and-surface-singularities` (order 913,
  algebraic-geometry, 86 items).
- B page: `birational-morphisms-contractions-and-surface-singularities-examples`
  (order 914, 2 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item approval,
  no owner record, no scaffold, plan, manifest, coverage or page edit.

## Evidence read

- `research/frontier-40-geometry-braids-rep-27-batch-25.pages.json` (86 A + 2 B
  items with `deps`/`strategy`/`design_row`/`local_addition`), its
  `.coverage.json`, `.notes.md`, and `.cross-batch-dependencies.json` (owned input
  `[]`); 88 readiness records
  `research/frontier-40-geometry-braids-rep-27-step1-<item>.json` (all `ready`).
- Prose design: `research/plan-algebraic-geometry-expansion-track.md` AG-BIR-1 —
  selection row L50 (order 913) and design row L271 (four A ids, two B ids, source
  gap "V25 and Stacks supply blowups and curve/surface resolution ... distinguish
  surface theorems from higher-dimensional ones").
- Plan: `research/plan-spec.json` rows 913/914. A `requires`
  `normal-varieties-normalization-and-zariskis-main-theorem` (366.061),
  `finite-proper-and-projective-morphisms` (366.069),
  `intersection-products-on-smooth-projective-surfaces` (895),
  `point-blowup-resolution-on-arbitrary-regular-surfaces` (901),
  `hilbert-functors-and-projective-hilbert-schemes` (905); B requires A only.
  These are exactly the design's AV-7, AV-15, AG-SURF-1 and AG-CRES-1 dependencies
  plus the Hilbert-scheme supplier the local resolution route consumes.
- Owner decisions: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  ("Preserve each pair's complete promised claim scope; required local helper items
  may be supplied; any new pair or scope change requires owner resolution"); the
  batch-25 owner repair record
  `research/frontier-40-geometry-braids-rep-27-owner-surface-resolution/`
  (`repair-report.md`, `continuation-report.md`, `square-conic-source-read.json`,
  `consumer26-review.json`). No owner scope receipt exists for this page and the
  run's 3a-scope stage is unresolved, so nothing overrides the design.
- Load-bearing source blocks read directly. Stacks *Resolution of Surfaces*
  chapter from the owner's extracted complete text
  (`.../owner-surface-resolution/resolve.txt`, matching the coverage's
  fetch-verified 655,386-byte `resolve.pdf` stamp): §54.16 opening definition of an
  exceptional curve of the first kind, the contraction *question*, and Lemmas
  16.1–16.2 (universal property, uniqueness); Situation 7.1 and Lemmas 7.3 (fibre
  cutter) and 7.4 (positive conormal degree); Lemma 7.6 and Proposition 7.8
  (Grauert–Riemenschneider vanishing); Definition 14.2 and Theorem 14.5(4)⇒(3)
  (Lipman: resolution by normalized blowups); Lemma 17.1 and its proof
  (factorization of a proper birational morphism of regular surfaces). Debarre,
  *Introduction to Mori Theory*, refetched here (1,091,260 bytes, sha256
  `e298bf42…`, identical to the coverage stamp): §3.3 Proposition 3.10 with proof
  (`(ε*C·ε*D)=(C·D)`, `(ε*C·E)=0`, `(E·E)=−1`) and Corollary 3.11; §5.4 Theorem
  5.12 (Castelnuovo, with the target-smoothness proof referred to Hartshorne
  V.5.7); §5.6 Theorem 5.20 with proof and Corollary 5.21. No whole-chapter or
  whole-paper read claim is made beyond these cited blocks; the owner's Lipman
  receipts record the pp. 264–268 / 164–174 reads used by `square-conic-closure.md`.

## Checks run here

- `node tools/manifest-deps.mjs research/…-batch-25.pages.json` — 88 items, 0 errors.
- `node tools/coverage-checklist.mjs research/…-batch-25.coverage.json
  --require-destination` — 2 pages, 140 harvested rows, 0 errors, 1 advisory
  warning (B low yield, confirmed below).
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  — 892 items across 54 pages, max level 39, exit 0 (no mismatch/cycle).
- `node tools/source-fetch-check.mjs --coverage …-batch-25.coverage.json` —
  10/10 fetch-verified; `node tools/source-backing.mjs --coverage …
  --liveness …-url-liveness.json` — 91 authored results, every one backed.
- `node tools/manifest-integrity.mjs --run frontier-40-geometry-braids-rep-27` —
  54 pages owed, 54 in manifests, no scope drift.
- Recursive edge scan of all 805 declared dependencies of the 88 items: 164
  distinct published suppliers (every one `status: published`, homed on a
  published page) and the rest in-pair; 0 missing, 0 planned-only, 0 other-batch.
  All `[[…]]` references resolve (four apparent misses are LaTeX `[[X_1,…]]`
  false positives). No pair item id collides with a published file; no run-wide
  duplicate ids.

## Scope against the prose design

All four promised A ids are present and are the design's named items:
`def-exceptional-curve-and-contraction`; `thm-negativity-for-exceptional-curves-on-smooth-surfaces`;
`thm-factorization-of-birational-morphisms-of-smooth-surfaces`;
`thm-resolution-of-normal-surface-singularities`. Both B ids are present:
`ex-blowup-of-a-smooth-point`; `cex-normalization-is-not-a-blowup`.

- The definition fixes effective Cartier `E ≅ P¹_κ` with normal bundle
  `O(−1)`, defines a contraction as the inverse of a blowup of a regular surface
  point, and proves the Noetherian dictionary `E·E = −[κ:k]` with the constant
  field (no function-field confusion).
- Negativity states `E` Cartier, positive conormal degree and `E·E<0` for an
  integral curve contracted by a proper birational morphism of regular surfaces,
  and explicitly disclaims negative definiteness of a reducible matrix.
- Factorization is stated for proper integral regular finite-type surfaces over a
  field, with the equivalence to a composition of contractions, matching Stacks
  Lemma 54.17.1 (proved there for integral Noetherian regular 2-dimensional
  schemes) at the design's "smooth surfaces" breadth.
- Resolution is stated for normal integral finite-type surfaces over an arbitrary
  field, dimension two, no properness of the surface, finite normalized point
  blowups with regular terminal scheme, smoothness only over perfect fields —
  exactly the Stacks 54.14.5(4)⇒(3) scope the design's source gap points to.
- `rem-surface-contraction-and-resolution-scope-boundaries` discloses the
  boundaries: no Castelnuovo existence criterion, no negative definiteness of the
  full intersection matrix, no arbitrary-Noetherian alteration equivalence, no
  dimension ≥3 resolution. Each is outside the four promised items, and the
  dimension boundary hands higher-dimensional resolution to the sibling AG-RES-1
  pair, as the design instructs.

The 86 A items are the 14 items of the pre-repair scaffold
(`owner-surface-resolution/before.pages.json`) plus 72 local helpers introduced by
the owner's arbitrary-characteristic resolution repair. I sampled the helper
layer: it is a coherent supplier stack for the resolution route (completion
descent, formal fibres, bounded H1/trace duality, Grauert–Riemenschneider
vanishing, rational-singularity reduction, canonical pullback, formal arcs and
the conic/triple-cubic termination branches). Every helper's declared
dependencies resolve, so the additions are covered by the owner direction's
"required local helper items" clause and are subject to the 100-item-cap headroom
noted in the batch notes. Whether every helper is strictly necessary is a
dependency-minimality question for Step 3b/5, not a scope omission.

## Source coverage and the B-page warning

A page: 129 harvested results — 99 `included`, 6 `inline`, 8 `already-published`,
5 `deferred` (four `owner-decision`, one destination page), 11 `out-of-scope`.
B page: 11 harvested — 4 `included`, 1 `inline`, 2 `already-published`,
1 `deferred` (`owner-decision`), 3 `out-of-scope`; this is the 4/11
`coverage-low-yield` advisory, and as Alpha I confirm every decline:

1. Debarre Cor. 3.11 (`Pic(X~) ≅ Pic(X) ⊕ Z[E]`) — not one of the promised
   items; no scaffolded item consumes it (the worked example uses the published
   intersection pairing and `O(−1)` normal bundle instead). Confirmed.
2. Debarre Thm. 5.12 (Castelnuovo criterion, existence of a contraction with
   smooth target; source defers target smoothness to Hartshorne V.5.7) and the
   corresponding Stacks Lemmas 54.16.3–54.16.9 — outside the four promised items;
   the page's definition deliberately covers only blowup contractions, the
   universal property is proved conditionally on a contraction existing, and the
   boundary remark states the exclusion. Deferred to `owner-decision`; confirmed
   as the design's own boundary, not a scaffold omission.
3. Debarre Cor. 5.21 and Stacks 54.17.2 (roof factorization for birational
   *maps*) — the design promises factorization of birational *morphisms* only.
   Confirmed out-of-scope.
4. Clay Example 8.4 (blowup computation of the Whitney umbrella) — the
   counterexample needs only the singular locus, non-normality and the exhibited
   normalization. Confirmed.
5. Remaining A-page declines: Stacks 54.16.10–11 (projectivity of regular
   surfaces) unrelated; 54.4.1–3 (flattening domination route) replaced by the
   scaffold's normalized-point domination plus roof/conormal proof; 54.15.5
   deferred to the published `point-blowup-resolution-on-arbitrary-regular-surfaces`
   (which records the reduced-curve Cartier clause; the unreduced Stacks form has
   no consumer here — the row's wording is loose but its disposition is right);
   Lipman Case III–V intersection/classification diagrams (resolution existence
   does not import ADE classification); Lipman 1978 Thm. 1.25 (pseudo-rational
   statement beyond the Gorenstein reduction actually used); the `curves.tex`
   integral rank-one global-generation example (the general CM-curve twist lemma
   is scaffolded instead). All confirmed.

All three B-page sources (Debarre, Stacks 0AGQ, Clay proceedings) and all A-page
sources carry fetch stamps; I re-downloaded Debarre and matched its byte count and
hash to the stamp, and re-read the cited blocks above directly.

## Role in the library

Orders 913/914; A's five page prerequisites are published and earlier
(366.061, 366.069, 895, 901, 905), and B is a leaf requiring A. The only in-run
consumer is batch 26 `higher-dimensional-resolution-of-singularities` (AG-RES-1),
whose `ex-resolution-of-a-surface-singularity` consumes
`thm-resolution-of-normal-surface-singularities`, matching the owner's
`consumer26-review.json`. No published page or item references any pair id
(grep over `library/` and `items/`), no ledger entry concerns this pair, and the
batch's owned cross-batch input is `[]`. The pair therefore sits exactly in the
AG-BIR-1 slot of the design: full surface contraction/factorization/resolution
package, feeding the higher-dimensional pair that owns the excluded dimensions.

## Unmet prerequisites

None confirmed. All 805 dependency edges resolve to published items (164 distinct,
`status: published`) or to scaffolded items on the same pair; all five page
prerequisites are published with earlier orders; the Hilbert-scheme and
blowup/normalization suppliers the resolution route uses are published. The only
uncertainty is downstream and honest: the completeness of the large local
resolution machinery (including the corrected square-conic branch) is a proof
question owned by Step 3b/5; this review does not certify it, and no scope
addition is warranted by anything found.

## Uncertainty and observations for the owner

1. The Castelnuovo existence direction and intersection-matrix negative
   definiteness are absent by design and disclosed in the boundary remark.
   Recorded as a confirmed boundary, not an omission; if the owner ever wants
   them, that is an owner scope decision, not a Step-3a repair.
2. The B page has no worked instance of the resolution theorem itself; the
   sibling AG-RES-1 example supplies one at library level, and the design's B
   inventory is exactly the two present items. No action recommended.
3. `Lemma 54.15.5` coverage row wording (destination page records only the
   reduced-curve Cartier clause). Non-blocking metadata precision; the substantive
   decline stands.
4. Proof correctness, statement-level fidelity and dependency minimality are not
   judged here (Step 3b/5).

## Scope decision

The planned definitions, results and examples cover the pair's intended subject —
exceptional curves and contractions on regular surfaces, their negativity,
factorization of proper birational morphisms of regular surfaces into point
blowups, and resolution of normal finite-type surface singularities in every
characteristic — at the design's breadth, with every source result disposed and
every design-relevant decline confirmed, with all prerequisites published and
earlier, and with only the design's own excluded material outside. Recorded:
**sufficient**.
