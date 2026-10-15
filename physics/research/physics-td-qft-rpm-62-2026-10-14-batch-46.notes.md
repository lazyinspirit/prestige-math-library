# Batch 46 authoring notes — Clifford traces and normalized spin completeness

Run physics-td-qft-rpm-62-2026-10-14, role beta, assigned pair
qft-mx02 / qft-mx02-examples. The run owner direction, physics schema,
workflow, content model, complete QFT-MX02 design section, plan-spec entry,
batch task, and current batch evidence were read before authoring.

## Plan and inventory reconciliation

The QFT-MX02 design prose at order 531 and plan-spec both require
euclidean-surface-measure-divergence-and-green-identities, qft-mg03, and
qft-mx01. The older original reservation in the same design, the initial
proposed inventory, and the 2026-10-12 revised supplier map instead list
QFT-MF03 in place of the Euclidean surface-measure page. The approved plan
controls the page requires list, so the manifest keeps the current three-page
requirement. The source inventory's item-level def-qft-dirac-projections
dependency is retained; it creates a separate QFT-MF03 item edge recorded below.

The approved A inventory has five planned items and the B inventory has three.
I added the A-page definition def-qft-example-two-body-phase-space-data before
its consumer lem-qft-example-two-body-phase-space: it provides the explicit
two-body shell, phase-space, flux, symmetry-factor, and formal coefficient-map
interface. The proof item then verifies its equivalence to the standard
iterated shell integral and derives its normalization. All nine items are on
their assigned pages, and both pages remain below the 100-item limit.

The supplied dependency-level file lists batch 46 at level 6 with batches 41,
42, and 45 as suppliers. This matches the item edges: QFT-MX01 is batch 41,
QFT-MF03 is batch 42 through def-qft-dirac-projections, and QFT-MG03 is batch
45 through lem-qft-qed-formal-matrix-ward. The recorded level is consistent
with the highest supplier level, 5. No dependency-graph correction is needed.
Item levels are computed from actual in-run suppliers: the local phase-space
definition is level 1; the spin and phase-space lemmas are level 2; the
annihilation theorem is level 5 through the level-4 matrix-Ward lemma; its
massless angular example is level 6. The shared dependency file was left
unchanged.

## Supplier inspection and conditional uses

- def-qft-example-data is present in QFT-MX01/batch 41. Its statement and
  finite proof were read; it supplies h=-eta, joule-valued energy vectors,
  rest-energy units, g=sqrt(4 pi alpha), and the natural-coordinate
  conversion. Its ready record hash matches the current carrier, and its
  ready-record reason correctly places it in batch 41.
- def-qft-dirac-projections is present in QFT-MF03/batch 42. Its exact
  Pauli blocks, gamma matrices, adjoint, shell units, and h=-eta algebra
  match the finite uses after conversion by hbar c. Its current readiness
  record is escalated because its Fock/test and scalar-shell supplier chain is
  still open: the active run marks the batch-38 scalar-shell artifact missing
  and the QFT-MF01 page review remains open. QFT-MF03 itself requires QFT-MF02,
  tempered-distributions-and-the-fourier-transform, and sr-spacetime-primitives.
  The finite proof therefore remains conditional. The argument rederives all
  trace and spin-plane claims and invokes no infinite-dimensional Fock or
  shell-measure conclusion.
- def-countable-choice is the published definition of countable choice.
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  is published and its complete local proof was inspected. It applies only to
  nonnegative Borel integrands under a C1 diffeomorphism and Countable Choice;
  no completed-measurable extension is used. The published
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure proof was
  also read in full; it identifies chart and polar sphere measure under the
  same Countable Choice assumption.
- lem-qft-qed-formal-matrix-ward is present in the current QFT-MG03 batch-45
  manifest at dependency level 4. Its actual statement and proof were read.
  The item proves a two-sided inverse and coefficientwise covariance for the
  finite formal matrices, infinitesimal variation identities, and a finite
  resolvent identity. It does not contain the broader free-Dirac-propagator
  or tree-current clauses in the historical Q7 research module; the
  conditional theorem quotes and uses only the current carrier interface and
  proves its two on-shell current cancellations locally. The carrier has no
  Step-1 readiness record. Its three direct prerequisites—
  def-qft-qed-formal-ring, def-qft-qed-finite-graph-gauge-data, and
  def-qft-qed-gauge-data—are draft items without current readiness records.
  The gauge-data draft is in QFT-MG01/batch 44 and depends on the escalated
  batch-42 def-qft-dirac-projections; that Dirac item itself has unresolved
  QFT-MF01/QFT-MF02 prerequisites. QFT-MG03 also requires QFT-MG01; the
  batch-44 manifest lists that page's inputs as
  fundamental-solutions-newtonian-potentials-and-green-functions,
  orthonormal-bases-parseval-and-fourier-series, QFT-MF04,
  em-primitives-and-postulates, and em-potentials-and-gauge. Therefore the
  matrix-Ward interface is available for conditional authoring, but its
  current proof/readiness chain is unresolved; the theorem and dependent
  example remain escalated until that chain is recertified.

## Sources

The A-page source set uses Tong's complete author-hosted QFT lecture-note
chapters 3, 4, and 6, and Srednicki's complete 616-page author-posted textbook
draft. Relevant sections were read directly: Tong §§3.5.3, 3.6.2–3.6.3,
4.3, 4.7.1–4.7.3, and 6.6; Srednicki §§11, 46–48, 59, and 64. Tong's chiral
gamma basis and mostly-minus convention are not silently substituted for the
library's Dirac basis and algebraic h; the local traces are derived in the
declared convention. Srednicki's delta-four-square volume heuristic and
one-loop magnetic term are not adopted. Tong's lifetime wording is not used;
the items state no lifetime or exponential-survival conclusion.

The coverage ledger records each included and out-of-scope harvested result,
exact locators, source dispositions, and fetch stamps. Existing Tong S3/S4 and
Srednicki stamps were reused from prior batch coverage for the same exact URLs.
The scoped source-fetch check stamped Tong S6 after inspecting the full-text
chapter: 351,487 bytes, SHA-256 prefix c8bdddedb1fed612, at
2026-10-14T05:27:35.539Z.

## Readiness

Final `step1-decisions.mjs record` entries were written with `owner: false` and
the examined direct dependency IDs. Ready: def-qft-example-two-body-phase-space-data,
lem-qft-example-two-body-phase-space,
cor-qft-example-scalar-tree-coefficients, and ex-qftmath-x05. Escalated:
lem-qft-example-spin-trace-completeness,
thm-qft-example-massive-tree-annihilation,
lem-qft-example-dirac-pauli-square, ex-qftmath-x04, and ex-qftmath-x09. The
escalations preserve the completed conditional proofs and identify the exact
unresolved batch-42 Dirac or batch-45/QFT-MG01 matrix-Ward chain. The run-wide
Step-1 check remains open at 294/683 ready with 389 blockers; all nine
batch-46 records are present and have the decisions above.

## Final scoped checks

- `content-policy.mjs`: 9 assigned items, 0 errors, 0 warnings.
- `depcheck.mjs`: the 9 assigned items passed; selected page and prerequisite
  cycle checks covered 1,323 items and 388 pages. The induced page graph places
  qft-mx02 at depth 59 and qft-mx02-examples at depth 60.
- `rendercheck.mjs`: all 9 items and both pages passed; math parsed with the
  app KaTeX and frontmatter parsed with the renderer YAML parser.
- `precheck.mts`: 8 proof-bearing items checked, 0 failing.
- `proof-layout.mjs`: 9 items, 29 steps, 0 defects. The local TypeScript
  fallback did not resolve the app's `@/` alias, so the check was rerun with a
  temporary resolver in `/private/tmp`; no app or shared tool files were
  changed.
- Strict proof contracts: 9/9 items, 0 errors, 0 warnings.
- Coverage checklist: 1 page, 12 harvested results, 0 errors, 0 warnings.
  `source-fetch-check --stamp` and the final read-only check found 4/4 sources
  fetch-verified, with 0 documented drops. Tong S6 was newly stamped after
  full-text inspection.
- `manifest-deps.mjs`: 9 items, 0 missing dependency arrays, 0 errors.
- No tests were run.

## Owner escalation: run-wide dependency records

The assigned levels are consistent with inspected in-run suppliers:
def-qft-example-two-body-phase-space-data 1;
lem-qft-example-spin-trace-completeness 2;
lem-qft-example-two-body-phase-space 2;
thm-qft-example-massive-tree-annihilation 5;
cor-qft-example-scalar-tree-coefficients 3;
lem-qft-example-dirac-pauli-square 3; ex-qftmath-x04 6; ex-qftmath-x05 4;
ex-qftmath-x09 4. The checked run graph already records batch 46 at level 6
with suppliers 41, 42, and 45, matching the actual QFT-MX01, QFT-MF03, and
QFT-MG03 edges. However `batch-dependency-levels.mjs check` reports that the
shared run dependency file's `input_sha256` is stale. It is owner-maintained
and was not rewritten.

The latest run-wide `item-dependency-levels.mjs check` reports no batch-46
item errors, but it fails on owner-owned records elsewhere:

- Batch 24 page rpm-external-charge-examples has an empty scaffold inventory;
  provide or reassign its planned items before certifying its level.
- Batch 7 page td-accessibility-foundation has five stale item levels:
  def-td-cross-type-reaction-network 14 vs computed 15;
  pthm-td-contact-product-comparison 12 vs 13;
  pthm-td-entropy-under-product-comparison 13 vs 14;
  pthm-td-universal-mixing-entropy 18 vs 19; and
  rem-td-entropy-construction-hypotheses 19 vs 20. Recompute these from their
  existing declared prerequisites and update only the owning batch-7 items
  and manifest.
- Batch 53 qft-g02 has post-qft-formal-qed-coefficients at 7 vs computed 6
  and pthm-qft-qed-formal-ward at 8 vs 7. Recompute from their existing
  formal-QED and Ward suppliers, then update the batch-53 items and manifest.

Earlier checks in this turn also found stale levels in batches 47 and 54;
those items no longer appear in the latest checker output and are omitted from
the current escalation list. The latest run-wide check still reports the
shared batch dependency input hash as stale; its owner should refresh the
graph after all owning manifests settle. No files in batches 7, 24, 47, 53,
54, or 55 were changed. These run-wide failures do not change the checked
batch-46 item levels or its recorded level-6 supplier set.

## Owner escalation: clarified coefficient-map consumers

The local phase-space definition now makes the amplitude domain well-typed:
finite nonempty initial and final label sets, normalized initial weights,
dimensionless Borel amplitude functions, and a cross-section map only when
the incoming flux is positive. Its single-channel decay map is explicitly
extended-valued and is a finite rate coefficient only for an integrable
amplitude. The phase-space lemma carries the same finite-label, Borel, and
positive-flux conditions. The assigned scalar corollary uses singleton
labels; the annihilation theorem has four finite initial spin pairs, finite
final spin labels, a continuous spin average, and strict positive incoming
flux.

Batch 54 directly consumes the phase-space lemma in
post-qft-example-formal-observable-map and
pthm-qft-example-formal-scattering-decay; its examples ex-qft-x04 and
ex-qft-x05 also depend on the phase-space item. These owning files were not
changed. The QFT-X02 adoption postulate already names declared probabilities,
final labels, thresholds, and the coefficient map; its owner should make the
finite Borel amplitude and positive-flux domain explicit in the generic
adoption before recording that interface ready, then recheck the affected
batch-54 Step-1 hashes. The batch-54 physics theorem's strict thresholds and
finite spin sums meet the clarified domain for its named channels. The latest
Step-1 check still shows those four batch-54 consumers escalated on the QFT-G02
postulate and the Dirac/MF01 supplier chain; no escalated record was changed.
