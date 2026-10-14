# Batch 9 authoring notes — MSF-09 UMP Tests

## Design control and plan comparison

The binding design is the MSF-09 row in
`research/plan-mathematical-statistics-track.md` (line 90), as directed by
`research/mathematical-statistics-foundations-37-owner-authoring-direction.md`.
`research/plan-spec.json` agrees on the A/B page IDs, titles, category, orders
1860–1861, companions, and page requirements. Its empty item arrays are
pre-authoring placeholders; the track row supplies the content inventory.
The A page follows the planned order—MLR definition, Karlin–Rubin theorem,
then the two-sided nonexistence witness—with the two local lemmas placed before
their consumers. The B page follows the planned binomial then normal example
order.

The current plan states MLR directly for the likelihood ratio of the full
data and does not require sufficiency. An older foundations-02 dossier
phrases the condition through a sufficient statistic. The current plan
controls: the authored MLR definition and theorem do not add a sufficiency
hypothesis. The required batch-5 page remains an explicit page prerequisite,
not an assumption used in the theorem. The plan's Oxford source anchor says
PDF pp. 79–80; the source coverage locator records printed pp. 77–78 for the
same Chapter 13 theorems and proof (the PDF page index and printed pagination
differ).

The dispatch named scheduling input hash
`dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c` and
immediate prerequisite batches 5 and 8. While this pair was authoring, the
shared `research/mathematical-statistics-foundations-37-batch-dependency-levels.json`
changed on disk twice: an intermediate input hash was
`9213d653b4663443e08330876d3a054ddde42ea33d5be2cb17b3bbb2066d23bf`, and the
current hash is
`6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80`. The
current batch-9 row still gives level 4 but lists prerequisite batches 1, 2,
4, 5, and 8. The dispatch named only immediate page prerequisites 5 and 8; the
extra 1, 2, and 4 entries are present in the current shared input and were not
edited by this pair. The assigned A page's direct `requires` remain batches 5
and 8, matching the controlling plan.

## Item inventory and dependency levels

Levels below are recomputed from the current-run item manifests and actual
supplier item levels on disk. Direct suppliers outside this run do not affect
an item's level. The current batch-8 `def-test-size-and-power` carrier is
level 5 (it was level 4 in the earlier scaffold); downstream levels use the
current value.

| Item | Kind | In-run direct suppliers | Level |
|---|---|---|---:|
| `lem-randomized-threshold-has-exact-level` | lemma | none | 0 |
| `def-monotone-likelihood-ratio-family` | definition | `def-statistical-experiment` (0), `def-statistic-and-estimator` (3), `def-dominated-statistical-experiment` (1), `def-likelihood-density` (2) | 4 |
| `lem-mlr-orders-randomized-thresholds` | lemma | `def-monotone-likelihood-ratio-family` (4) | 5 |
| `thm-karlin-rubin-one-sided-ump-test` | theorem | MLR definition (4), threshold lemma (0), MLR-power lemma (5), `def-randomized-test` (3), `def-test-size-and-power` (5), `def-likelihood-density` (2) | 6 |
| `thm-ump-nonexistence-witness` | theorem | threshold lemma (0), `def-randomized-test` (3), `def-test-size-and-power` (5) | 6 |
| `ex-binomial-one-sided-ump-test` | example | MLR definition (4), Karlin–Rubin theorem (6), threshold lemma (0), `def-randomized-test` (3), `def-test-size-and-power` (5) | 7 |
| `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests` | example | no-UMP theorem (6), `def-randomized-test` (3), `def-test-size-and-power` (5) | 7 |

The A page has five items and the B page two, each below the 100-item cap.
The page manifests are synchronized from the item carriers and their order
matches the physical A/B page frontmatter.

## Supplier inspection and cross-batch evidence

The actual batch-8 A page and populated manifest are present. I read the current
`def-test-size-and-power` body: power is $E_\theta\psi$, composite-null size
is the supremum of null rejection probabilities, and level $\alpha$ means
size at most $\alpha$. Its exact current definition is cited directly by the
Karlin–Rubin theorem, the normal nonexistence theorem, and both examples. I
also read the current `thm-neyman-pearson-lemma` statement and complete proof,
including common sigma-finite domination, AC-selected finite density versions,
singular alternative mass, boundary randomization, and its separate $\alpha=0$
case. The batch-9 proof establishes the needed likelihood-ratio sign
comparison locally; it does not claim or depend on the NP theorem as a direct
supplier. No unproved source excerpt or acceptance is inferred.

The actual batch-5 A page and populated manifest are present. I read the
current exponential-family definition and full-rank exponential-family
sufficiency result with their stated reference-measure, countability,
standard-Borel, domination, and open-natural-parameter hypotheses. Those
claims are not used to establish MLR or either example; the batch-5 page is
retained as the planned page-sequencing prerequisite. Exact inspection notes
for both page requirements and the four direct batch-8 item edges are in
`research/mathematical-statistics-foundations-37-batch-9.cross-batch-dependencies.json`.
The upstream carriers are drafts; this record documents inspected content,
not independent approval.

The core current-run suppliers `def-statistical-experiment`,
`def-statistic-and-estimator`, `def-dominated-statistical-experiment`,
`def-likelihood-density`, and `def-randomized-test` were inspected for the
experiment, statistic, common sigma-finite dominator, finite density versions,
and test-function conventions. Their direct edges and exact content notes are
recorded in the cross-batch evidence. The MLR definition is for the full-data
likelihood ratio, carries AC through density selection, and makes no common
exceptional-set assertion across uncountably many parameter pairs.

I also read the complete supplier proofs for density integration, integral
linearity and order, the zero-integral criterion used in the normal uniqueness
argument, and measurability of arithmetic operations. The normal example's
strict power gap explicitly uses the nonnegative integral of an indicator to
identify interval measure and the Borel measurability of its threshold tests.
These exact suppliers are declared in the item fronts and contracted against
their current statement sections. The proof uses signed density integrals
only after applying the nonnegative density identity to positive and negative
parts and then linearity.

## Sources and source resolution

I read the relevant complete passages in three independent full-text
university-hosted treatments; exact locators, supported items, dispositions,
and fetch stamps are in
`research/mathematical-statistics-foundations-37-batch-9.coverage.json`.

- Oxford, *Foundations of Statistical Inference*, Chapter 13,
  §§13.1.2–13.1.3, Theorems 13.2–13.5 and proof, printed pp. 77–78:
  <https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf>. Its
  Karlin–Rubin statement assumes a continuous statistic and invokes an
  external monotone-power argument; the local proofs handle atoms and supply
  the missing argument.
- Jun Shao, Stat 610 Lecture 11, Definition 8.3.16, Lemma B, Theorem 8.3.17
  and proof, PDF pp. 6–10:
  <https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf>. It gives the
  extended zero-denominator convention and both tail directions. Lemma B is
  stated without proof, so the local three-block argument supplies the
  threshold-power step.
- Karl B. Gregory, USC STAT 713 Lecture 11 annotated slides, UMP definition,
  Neyman–Pearson statement/proof annotations, and Karlin–Rubin directions,
  annotated PDF pp. 3, 6–9, and 13–22:
  <https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf>.
  This treatment assumes sufficiency and omits arbitrary boundary
  randomization; it was used to cross-check the uniqueness and tail directions.

The MIT 14.381 Lecture 9 lower-tail sign error flagged by the earlier audit
was not used. `node tools/source-fetch-check.mjs --coverage research/mathematical-statistics-foundations-37-batch-9.coverage.json --stamp --timeout-sec 45`
verified all 6/6 coverage sources, with 0 newly stamped and 0 documented drops.
No retrieval failure, recovery retry, or `source_resolution` entry was needed.
Fetch verification is not mathematical acceptance.

## Scoped checks

The final scoped checks passed:

- `node tools/tsx-run.mjs tools/author-check.mts mathematical-statistics-foundations-37 9` — exit 0; precheck 6/6, renderer 9/9 files, content-policy 7/7 items, and strict proof contract 7/7.
- `node tools/proof-layout.mjs items/lem-randomized-threshold-has-exact-level.md items/def-monotone-likelihood-ratio-family.md items/lem-mlr-orders-randomized-thresholds.md items/thm-karlin-rubin-one-sided-ump-test.md items/thm-ump-nonexistence-witness.md items/ex-binomial-one-sided-ump-test.md items/ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests.md` — 7 items, 24 steps, 0 defects.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-9.proof-contracts.json --strict` — 0 errors, 0 warnings, 7/7.
- `node tools/coverage-checklist.mjs --require-destination research/mathematical-statistics-foundations-37-batch-9.coverage.json` — 2 pages, 16 harvested results, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/msf37-batch9-item-ids.json` — selected item checks and prerequisite cycle checks passed (922 items and 144 pages in the selected dependency context).
- The scoped dependency-level recomputation matched all seven item labels: 0, 4, 5, 6, 6, 7, 7. Batch 9's page level remains 4 in the current shared schedule input.
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file /tmp/msf37-b9-plan-pages.json` — selected page-level ordering/prerequisite check passed. The plan-spec item arrays are preauthoring placeholders, so this run validates page metadata only; item order and dependency cycles were checked from the populated batch-9 manifest and item carriers.

`step1-decisions record` marked all seven final items `ready`, with examined
direct dependency IDs and hash-bound records. These records report authoring
readiness and do not represent independent approval.
