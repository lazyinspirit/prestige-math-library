# Run `frontier-12` — step 3 decisions

Orchestrator decisions on the seven Beta scaffolds, settled from disk. Owner rule
(2026-07-30): the orchestrator verifies each recommendation and **approves or
declines using best judgment**, never handing routine scaffold adjudication back
to the owner. Priority order: (1) mathematical accuracy and correct dependency
citation; then (2) minimize forward references; then (3) preserve mathematical
richness.

Scaffold totals at step 3: **434 items across 22 pages**, 761 harvested source
headings, 0 coverage errors.

| batch | pair | A + B |
|---|---|---|
| 1 | `the-field-of-fractions-and-localisation` | 22 + 8 |
| 1 | `splitting-fields` | 15 + 8 |
| 2 | `composition-series-and-solvable-groups` | 27 + 10 |
| 2 | `free-modules-and-exact-sequences` | 29 + 10 |
| 3 | `eigenvalues-…-characteristic-polynomial` | 19 + 7 |
| 3 | `dual-spaces-bilinear-forms-and-inertia` | 33 + 12 |
| 4 | `pi-the-equivalent-characterizations` | 12 + 7 |
| 4 | `line-integrals-and-the-gradient-theorem` | 23 + 9 |
| 5 | `finite-probability-and-the-probabilistic-method` | 65 + 14 |
| 6 | `complex-differentiability-and-cauchy-riemann` | 28 + 13 |
| 7 | `limits-and-colimits` | 46 + 17 |

---

## D1 — Split the probabilistic-method page. APPROVED, with a different order plan.

Batch 5 scaffolded **65 A items**, over the 60-item ceiling
(`validate-plan` error `size`), and correctly proposed a split rather than
trimming. The cut it proposed — after `cor-relative-variance-positive-probability-bound`,
giving 37 foundations items and 28 method items, with B split 8/6 — is **approved
as stated**. It is the natural seam: probability spaces, expectation, independence,
variance and the classical inequalities on one page; existence principles,
alteration, random graphs, Chernoff, the Local Lemma and the applications on the
other.

**Its order plan is declined and replaced.** Batch 5 proposed inserting the new
pair at orders 223/224 and *"shifting the present order 223 onward by two"*.
Orders 223/224 are occupied by `linear-algebra-methods-in-combinatorics` and its
companion, so that shift cascades through the entire combinatorics track for no
gain. Orders **220.2 / 220.4** are free and sit exactly where the foundations
page belongs:

| order | page | change |
|---|---|---|
| 219 | `extremal-graph-theory` | unchanged |
| 220 | `extremal-graph-theory-examples` | unchanged |
| **220.2** | **`finite-probability-spaces-and-random-variables`** (A, 37 items) | NEW |
| **220.4** | **`finite-probability-spaces-and-random-variables-examples`** (B, 8) | NEW |
| 221 | `finite-probability-and-the-probabilistic-method` (A, 28 items) | **keeps id and order** |
| 222 | `finite-probability-and-the-probabilistic-method-examples` (B, 6) | unchanged |

Keeping the method page's id at 221 matters: three planned pages already declare
it as a prerequisite — `linear-algebra-methods-in-combinatorics` (223),
`erdos-hajnal-property-and-homogeneous-sets` (395) and
`regular-pairs-and-induced-counting` (399). They continue to point at the same
id and reach the foundations transitively. Zero renumbering, zero downstream
edits, against a cascade under the Beta's plan. Fractional orders follow the
established `5.1`–`5.4` idiom (`LEVELS.md` §"`order` is not stable").

`requires` as the Beta proposed: foundations ← `the-logarithm-and-general-powers`;
method ← foundations, `extremal-graph-theory`,
`congruences-and-the-chinese-remainder-theorem` (the exact published route used
by the finite strict sum-free proof).

**Applied.** Both pages minted in `plan-spec.json` at step 3; `validate-plan`
exit 0 with no new warnings. Batch 5 re-partitions its three artifacts.

## D2 — Green's theorem: BUILD IT. Batch 4's decline is declined.

Batch 4 declined Green's theorem, arguing the page's *"declared prerequisite
closure omits the multivariable-integration/Jordan-domain machinery needed for a
faithful general Green theorem"*, and proposed rewriting the stale prose promise
out of the scaffold. The reasoning was careful and the mechanical claim was
**true**: `the-riemann-integral-in-rn-and-jordan-content` (235) and
`fubini-and-change-of-variables` (237) were both outside the closure of order
241, verified from disk.

But the conclusion does not follow, because the fix is a `requires` edit the Beta
was explicitly forbidden to make and I am not. Both 235 and 237 are **published**
and sit **earlier** than 241, so adding them creates no forward reference and no
cycle.

The decisive fact is downstream. **No page anywhere in `plan-spec.json` homes
Green's theorem** — zero matches for green/stokes/divergence/differential-form/
surface-integral across all 448 pages. Meanwhile
`research/plan-complex-analysis-track.md` plans three future pages that assume
it exists:

- the Cauchy–Pompeiu / Hartogs extension argument — *"Green's theorem is at 181"*;
- the area theorem, `|a₂| ≤ 2`, Koebe ¼ and the distortion estimates — *"all
  elementary given Green's theorem (181)"*;
- the area-theorem inequality `∑ n|bₙ|² ≤ 1` — *"(Green's theorem, order 181)"*.

Declining here would therefore manufacture **exactly the D10 pattern this run
exists to fix**: published or planned material resting on a construction the
library never builds. Creating a second such gap while closing the first is not
an acceptable trade for a scaffold edit.

**Decision.** `line-integrals-and-the-gradient-theorem` gets
`requires: [the-fundamental-theorems-of-calculus, arc-length-and-rectifiable-curves,
fubini-and-change-of-variables]` — minimal, since fubini's closure already
carries 235 and `the-total-derivative`, and declaring them directly would be
`redundant-prereq`. Applied; `validate-plan` exit 0, and the run's pages
contribute **no** new warnings (the repo total fell 309 → 308, because trimming
removed a pre-existing redundancy).

**Scope of what gets built, stated exactly.** Green's theorem for **elementary
regions** — regions between continuous graphs, Type I and Type II — and finite
unions of them glued along shared boundary arcs. **Not** for arbitrary Jordan
domains: that needs the Jordan curve theorem, which this library carries only as
`rem-jordan-curve-theorem`, and a proof resting on it would be resting on
material not proved here. The elementary-region form is the standard
rigorous statement and is what every downstream use listed above actually needs
(the area theorem on a disc, Cauchy–Pompeiu on a nice domain). Batch 4 must state
the hypothesis exactly and record the Jordan-domain boundary as a named
limitation rather than leaving the stronger claim implied.

Batch 4's proposed prose amendment to `research/plan-complex-analysis-track.md`
is otherwise adopted, minus the removal of the Green promise.

## D3–D9 — routed to Alpha's stage-0 review, not settled here

These are breadth-and-depth judgments, which is precisely Alpha's step-3 job.
They are recorded so Alpha rules on each **explicitly** rather than at its
discretion.

**D3 — `splitting-fields` is the thinnest A page in the run at 15 items**, on a
page titled "…and the Existence of Roots". Batch 1's other pair got 22. Is 15 the
standard development of Kronecker's construction, existence, uniqueness up to
isomorphism, degree bounds and normality, or did the localisation pair absorb the
batch's attention?

**D4 — `pi-the-equivalent-characterizations` at 12 A items.** It unlocks nothing
downstream, which I told the Beta was not a licence to build it thin. Its whole
job is proving the standard characterisations agree. Are 12 items the full set of
equivalences reachable from `sine-cosine-and-the-definition-of-pi` and
`arc-length-and-rectifiable-curves`, or a subset?

**D5 — batch 3's internal asymmetry**: 19 A items for eigenvalues and the
characteristic polynomial against 33 for dual spaces and bilinear forms. The
second is plausibly the richer subject; confirm that rather than assume it, and
check Cayley–Hamilton in particular — the Beta flagged the adjugate route, and
the "substitute the matrix into its own characteristic polynomial" pseudo-proof
is a classic false argument.

**D6 — batch 1 declined 22 of 87 harvested results (25%)**, far above every other
batch (batch 7 declined 5 of 135). Named challenges: existence of algebraic
closure, module-localisation exactness, arbitrary infinite polynomial families,
removing algebraicity from the normality theorem, Milne's cubic degree dichotomy.
Some are surely right — algebraic closure needs Zorn plus real machinery. Test
whether all 22 are.

**D7 — two pairs are backed by no textbook or monograph.**
`composition-series-and-solvable-groups` rests on Milne's *Group Theory* plus two
short Conrad/Igusa notes; `finite-probability-…` on Matoušek–Vondrák, Zhao and
Bucić. This is **legal** — the rule accepts "a full lecture-note set with a
harvestable table of contents", and Milne and Matoušek–Vondrák both qualify. But
it is the exact pattern behind last run's thin `arc-length-and-rectifiable-curves`.
Both scaffolds are large (37 and 79 items), which is evidence against a problem;
confirm from the sources, not from the size.

**D8 — batch 4 lists Lebl twice** as two of its three sources for
`line-integrals-and-the-gradient-theorem`. Two entries, one treatment. Its real
independent-treatment count is 2 (Lebl + Campesato), which still passes rule (a),
but the harvest presents the backing as broader than it is.

**D9 — the Stacks Project is classified inconsistently**: `monograph` in batches
1 and 2, `reference-work` in batches 1 and 3. The distinction is load-bearing —
a `reference-work` can never be a pair's primary backing. No pair in this run
turns on it (`splitting-fields` has Judson as its textbook), but it should not
become precedent. Rule on the correct classification.

## D10 — recorded: two step-2 gates pass vacuously for this run

`gates.mjs --step 2` reports `validate-plan` and `depsource` green, but both read
`research/plan-spec.json`, where this run's pages still have empty `items[]`
until the step-4 splice. **Neither gate saw any of the 434 scaffolded items.**
`depsource` takes the spec and cannot be pointed at a batch manifest at all.

The meaningful check is therefore an in-memory splice:
`research/frontier-12-splice.mjs --dry` merges all seven manifests into a scratch
spec and `validate-plan` runs against **that**. Result: one hard error across
434 items — the `size` ceiling of D1 — and no `undeclared-prereq`, `b-leaf`,
`forward-ref`, `dup-id` or item cycle. That is the number of record for step 2.

This is the same failure shape as run `frontier-11`'s vacuous `finite-smoke`,
`proof-contract --strict` and `rendercheck` passes: a green gate is not evidence
a gate ran. `rendercheck` was verified working before this run started.

---

# Decisions arising from Alpha's stage-0 review

Alpha returned **7 sufficient, 4 insufficient** in 17 minutes, with WebFetch
working — every faithfulness finding is backed by source text it actually opened
(HTML live, PDFs via a local `pypdf`). That is the criterion the previous run
could not perform at all, and it immediately earned its keep: all three of the
substantive `insufficient` verdicts came from opening a source and finding the
harvest had stopped short of it.

Alpha's `sufficient` pairs are not re-opened. Its `insufficient` findings and the
§5 corrections were routed to batches 1, 2, 3, 4, 5 and 7 as fix round 2. Two
items were not a Beta's to fix.

## D11 — module localisation is homed nowhere. Recorded as a tracked gap.

Alpha's C1: three of batch 1's module-localisation deferral reasons name
`free-modules-and-exact-sequences` as the destination. That page is **batch 2 of
this very run**, and it ships without module localisation — so the deferral
points at a page that will exist and will not contain the material.

Checked from disk: `S⁻¹M`, exactness of localisation and flatness are on **no**
page in `plan-spec.json`. The natural homes are `chain-conditions-and-semisimple-modules`
(108) or `modules-over-a-pid-and-canonical-forms` (110), both unscaffolded and
belonging to future runs.

**Decision: do not home it in this run, and do not pretend it is homed.** Module
localisation cannot go on the order-53.2 localisation page at all — modules are
not introduced until order 102, so the material is genuinely later than its own
prerequisite. Adding it to batch 2's order-104 page would be legal (53.2 < 104)
but is scope creep: batch 2 is `sufficient` at 29 A items, nothing downstream
requires module localisation, and expanding an accepted pair mid-run for material
with no consumer is not richness.

This is deliberately the **same mechanism that surfaced D10**: a real gap,
recorded where a future run will find it, with the coverage rows making it
recoverable. Batch 1's only job is to stop naming a destination that will not
contain it. It does **not** belong in `DEFERRED.md`, which is for material
awaiting a whole missing track (measure theory, functional analysis, set theory
beyond choice, algebraic topology); modules exist here, the page simply does not.

## D12 — order 88's title promised Cayley–Hamilton. Retitled. APPLIED.

Alpha's C12: `plan-spec.json` gave order 88 the title *"Diagonalisation, the
Minimal Polynomial and Cayley-Hamilton"*, but batch 3 scaffolded Cayley–Hamilton
onto order **86**, and Alpha confirmed the adjugate route there is correct.

The page **id** is `diagonalisation-and-the-minimal-polynomial` — it never
claimed Cayley–Hamilton. The title had drifted from the id, not the plan from the
mathematics. Cayley–Hamilton is a statement *about the characteristic
polynomial*, so order 86 is its right home, and order 88 is a natural consumer.

Retitled to **"Diagonalisation and the Minimal Polynomial"**, matching its id.
`validate-plan` exit 0. This is a title-only edit to an unscaffolded, unpublished
page: no id changes, no reading-order change, no published text touched.

## Where Alpha's three source catches landed

Recorded because they are the evidence that the harvest rule works, and the
argument for keeping it expensive:

1. **`splitting-fields`** — the Stacks 09HL locator read *"Definition 9.15.1
   only, stopping before Lemma 9.15.2"*: it stopped immediately before every
   result in a section titled *Normal extensions*. This is the exact shape of the
   `group-actions-and-cayleys-theorem` failure — a source cited by title and not
   harvested — caught this time at scaffold stage.
2. **`eigenvalues-…`** — the Pinkham locator ran §12.1 → §12.2 → §12.4. Chapter
   12 has a **§12.3**, with four numbered results given no row and no disposition
   anywhere: trace as the sum of eigenvalues, determinant as their product, the
   Spectral Mapping Theorem and its corollary. The page computed both
   characteristic-polynomial coefficients and never connected them to the
   eigenvalues.
3. **`finite-probability-spaces-and-random-variables`** — 14 of 37 A items appear
   in no source's contents at all, because Matoušek–Vondrák §1.1 opens *"In no
   way is it intended to serve as a substitute for a course in probability
   theory."* All three sources treat elementary probability as a preface. **This
   one is partly a consequence of D1**: splitting the page minted a page whose
   subject none of its inherited sources develops. Remedy is Grinstead & Snell
   with verified ranges, not a weaker reading of the rule.
