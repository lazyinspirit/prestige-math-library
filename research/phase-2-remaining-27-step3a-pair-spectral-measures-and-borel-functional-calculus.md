# Step 3a scope review — spectral measures and Borel functional calculus

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 5)
- A page: `spectral-measures-and-borel-functional-calculus` (plan order 288.085)
- B page: `spectral-measures-and-borel-functional-calculus-examples` (plan order 288.086)
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/phase-2-remaining-27-step3a-review-spectral-measures-and-borel-functional-calculus.json`)
- Scope is judged here, not proof correctness. No scaffold, item contract, plan,
  page or owner record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-5.pages.json` | Current A inventory (21 items, in order) and B inventory (8 items, in order); page `requires`; companion pairing |
| `research/phase-2-remaining-27-batch-5.coverage.json` | The A-page source record: 5 fetch-verified treatments, 23 harvested rows (18 `included`, 4 `inline`, 1 `out-of-scope`) |
| `research/phase-2-remaining-27-batch-5.notes.md` | Scaffolder construction record: design/spec conflicts, ordering repair, choice audit, gates |
| `research/phase-2-remaining-27-batch-5.cross-batch-dependencies.json` and `research/phase-2-remaining-27-cross-batch-dependencies.json` | Dependency records: 8 upstream item edges to batch 1, 2 to batch 4 (B example), 6 downstream edges from batch 6, all `verified` |
| `research/phase-2-remaining-27-batch-6.notes.md` | Consumer-side (FA-21) record, including the Stone-formula sign-convention interface note |
| `research/plan-functional-analysis-track.md` | Prose design §5 FA-20, lines 1527–1581 (item lists 1542–1581); binding inventory amendment §14.4, line 3214; §11.3 harvest row line 2448; §11.7 line 2733; §6 obligations lines 1976–1977; §7 seam line 2037; §11.8 matrix line 2808 |
| `research/plan-spec.json` | Page identity, order, companion and exact `requires` for both pages; the 5 planned pages requiring the A page |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction (FA-20 multiplicity sentence: intertwiners must be proved, multiplicity is fiber dimension) |
| `research/phase-2-remaining-27-alpha-step1-drift.md` lines 137–143 | Drift verdict `no-drift`, declared edge, closure contents, no local amendment |
| Five cited source PDFs, re-fetched | Independent confirmation of hashes and of every load-bearing numbered result (below) |

## Role in the library

FA-20 is the bounded Borel refinement of the continuous calculus proved on
FA-19 and the supplier of the bounded PVM layer that FA-21 extends to
unbounded self-adjoint operators. The A page requires exactly
`continuous-functional-calculus-for-self-adjoint-and-normal-operators`
(plan-spec and drift evidence agree); the B page requires only its A companion.

In-run consumers are verified on the current manifests: the B page consumes 4
A items; `unbounded-self-adjoint-operators-and-stones-theorem` (batch 6)
consumes `def-projection-valued-measure`,
`thm-pvm-integral-is-a-star-homomorphism`,
`thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
`thm-support-and-uniqueness-of-the-spectral-measure` and
`thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`, plus
the page edge. Planned later consumers in `plan-spec.json` are
`measurable-hilbert-fields-and-direct-integral-operators`,
`unitary-representations-positive-type-and-gns` (unitary Schur projection
argument) and `mackeys-imprimitivity-theorem`; each needs only PVM integration,
spectral projections and the separable multiplicity model, all of which the
scaffold supplies. General measurable Hilbert fields and nonseparable
multiplicity stay on the future FA page and are kept orientation-only by the
B-page remark.

## Inventory against the prose design and the binding amendment

All 18 design items of §5 FA-20 (lines 1542–1581) are present in the A
manifest, and the B manifest is the 8-item design list verbatim. The only A
items beyond the design are the three helpers that §14.4 (line 3214) orders:
`lem-weak-and-strong-additivity-of-orthogonal-projections`,
`lem-continuous-functional-calculus-produces-a-regular-pvm` and
`lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension` (the last
is also the owner-directed intertwiner/multiplicity item). No design item was
dropped, no pair member was moved, and no extra pair is proposed.

Ordering obligations hold on disk: the Borel-calculus definition and theorem
sit after the constructed regular PVM and the PVM spectral theorem (the
design's listing order was corrected to avoid a forward dependency, as the
batch notes state); the weak/strong additivity lemma precedes every use of
either additivity convention. The design's item blocks survive in manifest
order: PVM integration and Borel calculus first (design items 1–10, manifest
items 1–12), then the support, cyclic and multiplicity block (design items
11–17, manifest items 13–20, with the mandated intertwiner helper inserted at
19) — the order §6 (lines 1976–1977) requires. I checked all 29 items'
dependency arrays: 0 unresolved IDs, 0 B-page suppliers, 0 same-page ordering
violations; all 30 in-run IDs resolve to current manifest items and all 13
published IDs to `items/*.md`.

## Source coverage

The A page is backed by five independently fetched treatments: Bühler–Salamon
ch. 5 §§5.6–5.7; Williams §5; Conway ch. IX §10; Kriegl §§8.61–8.66; Teschl
(MMI 2nd ed.) §4.1. Every harvested row has a destination (item or explicit
inline strategy); the single `out-of-scope` row is Conway's nonseparable
multiplicity reference, which the B-page remark keeps orientation-only.

I re-fetched all five PDFs and reproduced the recorded byte counts and
`sha256_16` values exactly (`8ffd5f868b480006`, `12aa6e2ceb0a4f8c`,
`c224068060b13865`, `15cd59d338f30278`, `8dc8de0b58aa0a3f`), then read the
load-bearing numbered results in each:

- Bühler–Salamon Definition 5.72 (PVM, strong countable additivity), Theorem
  5.73 (bounded Borel integral as `C*`-homomorphism), Theorem 5.74 (spectral
  measure), Theorem 5.75 (measurable functional calculus), Theorems 5.81–5.84
  (spectral projections and eigenspaces; spectral theorem; cyclic vectors and
  multiplication operators) — all support
  `def-projection-valued-measure`,
  `thm-pvm-integral-is-a-star-homomorphism`,
  `lem-continuous-functional-calculus-produces-a-regular-pvm`,
  `thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
  `cor-spectral-projections-and-resolution-of-the-identity`,
  `thm-cyclic-spectral-representation` and the maximal cyclic decomposition.
- Williams Definition 5.4 (regular PVM; equivalence with regularity of the
  scalar measures is Remark 5.5), Theorem 5.6
  (unique regular PVM for a unital commutative `C*`-subalgebra, with the
  commutant clause) and Corollary 5.7 (bounded normal spectral theorem,
  `L^\infty(P)` representation, commuting iff commuting with all spectral
  projections) — the commutant clause is used only in the `T`-and-`T*` form,
  matching the scaffold statement.
- Conway Theorem 10.1 (ordered cyclic-measure decomposition), Theorem 10.20
  (mutually singular multiplicity model plus the Borel multiplicity function
  `m_N`), Theorem 10.21 (unitary equivalence iff same scalar-valued spectral
  measure and multiplicity function a.e.) — backs the multiplication form and
  the classification item.
- Kriegl 8.61 (Hellinger decomposition, uniqueness of the measure classes),
  8.62–8.63 (Radon–Nikodym set and decreasing Borel sets), 8.64 (separable
  multiplicity model and unitary equivalence), 8.66 (cancellation) — the
  second independent treatment of multiplicity and uniqueness.
- Teschl MMI Theorem 4.3 (Stone's formula): the strong limit of
  `(2πi)^{-1}∫[R_A(λ+iε)−R_A(λ−iε)]dλ` is
  `(1/2)(P_A([λ1,λ2]) + P_A((λ1,λ2)))`, i.e.
  `E((λ1,λ2)) + (E({λ1})+E({λ2}))/2` — identical to the scaffold's
  `thm-stone-resolvent-formula-for-spectral-projections` in the same
  `(T−(t±iε))^{-1}` sign convention. Batch 6 recorded the same agreement from
  its `R_T(z)=(z−T)^{-1}` convention and confirmed the FA-20 statement is
  correct as stated; the two sides differ only by the resolvent sign
  convention each page uses, not in content.

## Observations for the Step 3b author and owner (not item approvals)

1. **Near-duplicate counterexample across adjacent B pages.** FA-19 B
   `cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections`
   and FA-20 B `cex-continuous-functional-calculus-cannot-produce-every-spectral-projection`
   both state that no continuous `f` on `[0,1]` equals `M_{1_{[0,1/2]}}` for
   `T = M_t` on `L^2[0,1]`. Both are design-mandated (lines 1524 and 1571), so
   this is redundancy, not an omission; the author may differentiate the two
   statements or keep both if the owner prefers.
2. **Teschl locator.** The design's source list names "Teschl §6.3, pp.
   173–177 (Spectral measures)", which the design's own harvest table (§11.3,
   line 2448) attributes to Teschl's full functional-analysis manuscript (its
   §3.1 is compact operators). The batch coverage's Teschl row is instead MMI
   2nd ed. §4.1 (Stone's formula); in that copy §6.3 is "Hilbert–Schmidt and
   trace class operators". The manuscript section is not a coverage row in
   this batch, but its subject matter (PVM integration) is backed by
   Bühler–Salamon §5.6.1 and Williams §5, so no item is left without a
   verified treatment. I could not resolve whether the coverage intended the
   same Teschl work.
3. The design's `Requires` paragraph still names the older FA-9/FA-12–14/FA-18–19
   and MT-8/11/12/20 reservations; the current plan requires only FA-19 and
   every actually used measure/integration/Hilbert supplier is declared at
   item level (published `thm-dominated-convergence`,
   `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
   `thm-riesz-fischer-completeness-of-l-p`, `thm-c-c-is-dense-in-l-p-for-radon-measures`,
   `def-l-p-space-as-a-quotient-by-null-functions`,
   `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`,
   `thm-bounded-linear-maps-commute-with-bochner-integration`,
   `thm-integration-against-a-radon-nikodym-derivative`, plus in-run batch-1
   Hilbert suppliers). This matches the batch notes and the drift verdict; no
   unresolved prerequisite remains.

## Limits of this review

I verified target statements and the numbered sources' claims, not the
scaffold's proofs; item-level proof correctness, choice accounting and
dependency adequacy are Step 3b/5 duties. My source reading covered each
load-bearing numbered result and its immediate proof context (for Stone's
formula, the complete proof on the cited pages), not every page of every
cited range; the coverage file's locators and my hash check agree. No owner
scope receipt for this pair existed before this review: the stopped
`phase-2-remaining-26` run produced only a task file, the duplicate run-27
task with hash `537f729046de92ac` was never dispatched, and no
`*-step3a-review-spectral-measures-*` receipt or report was present.

## Decision

`sufficient`: the planned definitions, results, examples and counterexamples
cover the intended subject (PVM integration and the bounded Borel calculus,
spectral projections and resolution of the identity, support and uniqueness,
cyclic and multiplication representations, separable multiplicity
classification, and Stone's resolvent formula), match the binding FA-20
inventory plus every §14.4 helper, are backed by five hash-verified full
treatments with every harvested result disposed, and serve the pair's in-run consumers
at the exact declared IDs. No enrichment, merger or pair change is requested.
