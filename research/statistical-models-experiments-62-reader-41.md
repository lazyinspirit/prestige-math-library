# Step 3a reader report — batch 41

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `41`

## Opened inventory

The batch manifest assigns two pages and six items. I read both pages and all
six item files. I reviewed items in dependency order:

1. `thm-discrete-integers-have-circle-dual`
2. `def-time-series-spectral-measure-and-periodogram`
3. `lem-angular-fourier-orthogonality`
4. `thm-herglotz-spectrum-and-spectral-density`
5. `thm-periodogram-fejer-expectation-and-smoothing-bias`
6. `ex-atomic-spectrum-versus-continuous-spectral-density`

Assigned page files:

- A page `spectral-measures-and-periodogram-bias` at
  `library/statistical-models-and-experiments/spectral-measures-and-periodogram-bias.md`.
- B page `spectral-measures-and-periodogram-bias-examples` at
  `library/statistical-models-and-experiments/spectral-measures-and-periodogram-bias-examples.md`.

I also opened the two page prerequisites listed for the A page:
`stationary-time-series-moments-and-autocovariance` and the published
`bochner-inversion-and-plancherel-on-lca-groups`. For the proof checks I read
the relevant definition or statement sections of the cited duality suppliers,
the weak-stationarity and autocovariance definitions, `thm-bochner-theorem-for-lca-groups`,
`cor-second-countable-lch-locally-finite-borel-measures-are-regular`, and
`thm-choice-implies-dependent-implies-countable-choice`. I checked the batch
proof-contract source entries against the item proof facts; those entries were
treated as evidence, not as verdicts.

## Review and edits

- `thm-discrete-integers-have-circle-dual`: the value-at-1 classification,
  group law, continuity into the pointwise product topology, and continuity of
  the inverse evaluation map are justified by the stated definitions and
  preceding steps. Its source `Loomis, §35E, printed p. 140` states that each
  character of the integers is `n ↦ e^{2πiyn}` and identifies the dual
  topologically with `R/Z`. In the accessible later Dikranjan PDF, Example
  12.1.1(2) gives compact-open = product topology for a discrete group, and
  Example 12.2.4 identifies the dual of `Z` by evaluation at 1.
- `def-time-series-spectral-measure-and-periodogram`: the circle measure is a
  well-defined finite Borel pushforward under the stated Countable Choice
  premise. The periodogram, Fejér kernel, periodized kernel, and normalized
  weights have the stated domains and normalizations; the denominator
  condition is explicit. No defect found.
- `lem-angular-fourier-orthogonality`: the step-function comparison establishes
  the Lebesgue/Riemann integral equality, and the endpoint antiderivatives give
  the claimed zero integrals for nonzero integer frequencies. The zero case
  uses the stated unnormalized mass `2π`. No defect found.
- `thm-herglotz-spectrum-and-spectral-density`: the covariance quadratic form
  gives positive definiteness; the Bochner application has its AC/DC
  hypotheses; the pushforward preserves the Radon property under the stated
  homeomorphism; and the absolutely convergent Fourier series gives the
  nonnegative continuous density with the stated normalization. I repaired a
  wrong fact tag in `Facts & Assumptions`, F10 (item line 95): `[F1]` refers to
  weak stationarity and does not establish finiteness of the angular measure.
  The sentence now cites
  `def-time-series-spectral-measure-and-periodogram`, which defines `dλ` as a
  finite Borel measure under Countable Choice. I added that source to the
  contract's F10 citations.
- `thm-periodogram-fejer-expectation-and-smoothing-bias`: expanding the finite
  square gives the exact covariance sum; a supplied spectral measure gives
  the finite Fejér convolution; and the off-origin Fejér bound plus the
  shrinking support of the normalized grid weights proves the stated local
  bias limit. The source notes state the spectral-bias formula and the
  smoothed-bias result in compatible conventions; the item also supplies its
  own proof for the circle and grid formulation. No defect found.
- `ex-atomic-spectrum-versus-continuous-spectral-density`: the finite sinusoid
  has the stated two-atom spectral measure and no density; the causal AR(1)
  series converges in `L²` and almost surely to its past-innovation version,
  has the stated covariance and density, and the expected-periodogram formulas
  follow from the assigned theorem. I repaired the wrong fact tag in proof step
  3.1 (item line 172): `[F9]` is the moments/variance definition, while `[F10]`
  supplies weak stationarity and the autocovariance convention. I updated the
  contract derivation for step 3.1 to cite F10.

No `verification.judge` record was present on either edited item. No page prose
or other item was edited.

## Citation checks

- Loomis, *Introduction to Abstract Harmonic Analysis*, §35E, printed p. 140
  (Harvard PDF pp. 147–148): the theorem classifies characters of the integer
  group by their value at 1 and proves the corresponding `R/Z` topology.
  URL: <https://people.math.harvard.edu/~shlomo/212a/loomis.pdf>.
- Meinshausen, *Time Series Analysis: Notes for the course HS 2022*, §§3.1–3.3
  (PDF pp. 39–41): the periodogram expectation is a Fejér-kernel average of
  the spectral density and the following section discusses smoothing.
  URL: <https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf>.
- Spodarev, *Spatial Statistics: Lecture Notes* (2024), §2.3, Lemmas 2.10 and
  2.14 (PDF pp. 19–23): the notes give expected-periodogram and smoothed-bias
  results for regular-grid random fields. Those assumptions are not substituted
  for the circle/grid proof in this batch.
  URL: <https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf>.
- Wang, *STAT 720 Time Series Analysis*, §4.2, Theorem 4.2, Corollary 4.2,
  Example 4.2 (printed pp. 59–63): Herglotz representation, the
  absolutely-summable covariance density, and the AR(1) density are stated in
  the cited section. URL:
  <https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf>.

The old Dikranjan URL in the duality item returned HTTP 502 during review. The
later accessible `ITG.pdf` edition corroborates the discrete-domain topology
claim in §12.1.1(2) and the evaluation-at-1 identification in §12.2.4, but I
could not independently authenticate the old edition's exact section/example
numbering. The item's own proof is complete, and the Loomis citation supports
the dual identification and topology; I did not find a confirmed citation
defect.

## Page verdicts

- A page `spectral-measures-and-periodogram-bias`: **pass**. The summary
  correctly separates AC/DC spectral-measure existence from the Countable
  Choice angular-measure/smoothing branch, gives the density and periodogram
  conclusions at the proved strength, and explicitly disclaims CLT, variance,
  and coverage conclusions.
- B page `spectral-measures-and-periodogram-bias-examples`: **pass**. Its
  summary matches the constructed atomic sinusoid and causal AR(1) example and
  does not claim a raw-periodogram limit theorem.

## Unedited defects and blocker

No confirmed or suspected defect remained outside the authorized edit scope.
There was no blocker.

## Validation

- Reflowed both edited items with `tools/reflow.mts`.
- Precheck passed for both edited items.
- Final batched proof-layout check: 2 items, 13 proof steps, 0 defects.
