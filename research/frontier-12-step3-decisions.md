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
