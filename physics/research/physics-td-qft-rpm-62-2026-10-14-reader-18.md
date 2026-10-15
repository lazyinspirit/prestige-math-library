# Step 3a reader report — batch 18

Run: `physics-td-qft-rpm-62-2026-10-14`
Role: reader
Assigned batch: `18`

## Scope and opened inventory

The current batch manifest assigns two draft mathematics pages in
`thermodynamics-mathematics`:

- A page `td-math-interacting-ensemble-geometry`
  ([page](../library/thermodynamics-mathematics/td-math-interacting-ensemble-geometry.md)),
  with 21 listed items.
- B page `td-math-interacting-ensemble-geometry-examples`
  ([page](../library/thermodynamics-mathematics/td-math-interacting-ensemble-geometry-examples.md)),
  with 4 listed examples/counterexamples.

The batch notes say 20 A-page items, while the current manifest and page carrier
list 21; the inventory below follows the current page and manifest.

The 21 A-page items opened, in the authored supplier order, were:

`def-tdmath-van-hove-sequence`, `def-tdmath-superstable-regular-interaction`,
`def-tdmath-periodized-empirical-field`, `lem-tdmath-integrable-tail-diagonal-gap`,
`lem-tdmath-superstable-cell-energy-bound`,
`lem-tdmath-periodized-empirical-field-stationary-density`,
`lem-tdmath-superquadratic-positive-core`,
`thm-tdmath-decreasing-integrable-tail-free-cube-pressure`,
`thm-tdmath-canonical-interior-density-limit`,
`thm-tdmath-canonical-grand-duality`,
`thm-tdmath-superstable-van-hove-pressure`,
`thm-tdmath-uniform-tempered-exterior-pressure`,
`thm-tdmath-continuum-variational-pressure`,
`thm-tdmath-van-hove-fixed-n-limit`,
`lem-tdmath-canonical-empirical-field-conditioning`,
`thm-tdmath-fixed-n-local-ensemble-equivalence`,
`lem-tdmath-periodic-law-local-tame-transfer`,
`thm-tdmath-retained-hard-zero-beta-limit`,
`thm-tdmath-interval-event-ensemble-limit`,
`thm-tdmath-periodic-fixed-n-limit`, and
`thm-tdmath-controlled-shell-three-ensemble-equivalence`.

The four B-page items opened were `ex-tdmath-hard-core-zero-beta`,
`cex-tdmath-bulk-field-pressure`,
`ex-tdmath-close-packing-endpoint`, and
`ex-tdmath-nonunique-variational-minimizers`.

I also opened the four page-level prerequisite summaries listed by the manifest:
`td-math-continuum-pressure`,
`td-math-convex-contact-and-mixing`,
`td-math-mixture-dynamics-and-shells`, and
`td-math-spatial-measure-and-information`.

Direct current-run draft suppliers opened in full were the batch-17 configuration,
entropy, Poisson-count, local-tame compactness, conditional log-density, and
spatial-information items, plus batch-4
`thm-tdmath-finite-dimensional-biconjugation` and
`lem-tdmath-closed-convex-separation`. The direct published
mathematics supplier statements used by the assigned proofs were also opened,
including the choice-principle definitions, Euclidean and Lebesgue definitions,
product/integration results, logarithm/factorial/exponential results, and
Lebesgue box/translation results. The additional Borel-measurability and
bounded-set measure results used in the definition repair were opened as well.
The definition repair also uses the published countable-choice statement.

## Source checks

- H.-O. Georgii, “Large deviations and the equivalence of ensembles for Gibbsian
  particle systems with superstable interaction,”
  [source PDF](https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf):
  read the exact interaction/topology definitions, Theorem 1, Theorem 2 and the
  complete relevant proofs in Sections 3–5. I also read Theorem 4 and its
  Section 7 argument, including equations (2.32)–(2.33); the source explicitly
  allows a nonnegative multiplier.
- D. Ruelle, “Superstable Interactions in Classical Statistical Mechanics,”
  [source PDF](https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf):
  visually checked Eq. (2.26) and Proposition 2.6, printed pp. 140–141
  (PDF pp. 14–15). Eq. (2.26) defines the factorial correlation densities;
  Proposition 2.6 bounds each by `ξ^m`.
- D. Dereudre, “Introduction to the theory of Gibbs point processes,”
  [source PDF](https://arxiv.org/pdf/1701.08105):
  checked Sections 1.2–1.3, PDF pp. 7–12, for finite-volume energy and
  Poisson-Gibbs normalization. The source’s finite-range limitation on later
  variational results is stated in the local item and is not used as a
  supplier for the infinite-volume claims.

## Repairs and evidence

1. `def-tdmath-van-hove-sequence`: supplied the dimension,
   Euclidean norm, distance to a set, topological boundary, and Lebesgue-measure
   notation explicitly. Added the exact mathematical suppliers and the
   countable-choice hypothesis needed to use Borel measurability and finite
   Lebesgue measure of bounded boundary neighborhoods. Evidence: the current
   statements of `def-euclidean-inner-product`,
   `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
   `thm-borel-sets-are-lebesgue-measurable`, and
   `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`.

2. `def-tdmath-superstable-regular-interaction`: connected
   `D(P\Vert Q)` to the exact finite-region relative-entropy
   definition, stated the stationary finite-intensity domain for the displayed
   densities, and defined `Φ(P)` as the positional energy
   density `𝓔(P)` already introduced there. Evidence:
   `def-tdmath-finite-region-relative-entropy` and the current
   Poisson configuration definition.

3. `thm-tdmath-continuum-variational-pressure`: tied the
   variational functional’s `Φ(P)` to the exact energy-density
   definition before using it in the Statement and made the source-backed
   existence argument refer to `𝓔(P)`. Evidence: the preceding
   definition and Georgii Theorem 1, whose exact limit is
   `lim L^{-d} E_P H_{L,free}`.

4. `thm-tdmath-superstable-van-hove-pressure`: made the
   correlation-density link to the cell second-moment estimate explicit.
   Ruelle’s Eq. (2.26) and Proposition 2.6 give the first and second factorial
   moment integrals; Tonelli then gives
   `E N_A^2 ≤ ξ|A|+ξ²|A|²`. Updated the matching proof-contract
   derivation and source locator.

The affected proof-contract excerpts and raw carrier fingerprints were updated.
The two assigned consumers of the van Hove definition were checked after the
clarification; their fixed-width boundary-layer hypotheses and conclusions are
unchanged. Other assigned consumers of the interaction convention were checked:
the pair-potential, stability, regularity, partition, and boundary conventions
they use remain unchanged. No stale `verification.judge` records
were present on the changed items.

No B-page prose, other-batch carrier, published item, or `research/plan-spec.json`
was edited.

## Checks

For each changed item, `reflow.mts` reported unchanged and
`precheck.mts` passed (the two definitions had no proof steps
to check). The required final batched
`proof-layout.mjs` command was attempted once after final edits,
but the renderer failed before checking the items:

`ERR_MODULE_NOT_FOUND: Cannot find package '@/components' imported from /Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`

## Page verdicts and remaining issues

- `td-math-interacting-ensemble-geometry` (A): **pass after
  repairs**. The shape, pressure, ensemble, and variational claims are stated
  with their hypotheses; the statistical-mechanics source results are used only
  as conditional mathematical inputs.
- `td-math-interacting-ensemble-geometry-examples` (B):
  **pass**. The finite hard-rod and ideal-gas computations are correct, and the
  nonunique-minimizer example explicitly remains conditional rather than claiming
  a phase transition for a particular potential.

No confirmed uneditable mathematical defect was identified in the reviewed
assigned carriers or opened direct suppliers.

Blocker: the proof-layout renderer could not resolve its `@/components`
import, so final rendered proof-chip verification is unavailable. The scoped
reflow and precheck results passed.

The reader repair added explicit prerequisites to two item frontmatters:
def-tdmath-van-hove-sequence now names Euclidean, Lebesgue, Borel, countable
choice, and bounded-set measure suppliers; def-tdmath-superstable-regular-interaction
now names def-tdmath-finite-region-relative-entropy. The pre-reader batch
manifest and cross-batch dependency snapshot were left unchanged; they do not
yet list those newly explicit edges. The owner/mechanical route will need to
reconcile that metadata before a later gate.

Coverage limit: I read the assigned items, pages, direct proof suppliers, and
the relevant published-source arguments. I did not independently re-audit the
full transitive proof closure of every published mathematics supplier.
