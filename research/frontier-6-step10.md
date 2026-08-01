# Frontier 6 — Step 10 rundown and owner pause

Date: 2026-08-01

## Status

The six requested A/B pairs are complete as drafts: Cosets and Lagrange,
Trees/Forests/Spanning Trees, Induced Subgraphs/Hereditary Classes,
Darboux–L'Hôpital–Taylor, the Exponential Function, and the Riemann integral
in `R^m`/Jordan content.  They contain 188 items on 12 pages.  No item or page
was deleted or deferred, and there are no forward or external mathematical
dependencies.  The frontier is deliberately still **draft**: this is the sole
owner-audit pause, before any audit stamp, publication, commit, or push.

## Coverage and final gates

- The two independent Step-6 readers covered 97 and 91 items respectively;
  Alpha reread all 188 items, all changed consumers, and all 621
  published-backward dependency uses.  The completed graph has 1,033 edges:
  621 published-backward and 412 same-frontier, with zero forward, unresolved,
  cross-batch, or external source edges.
- Alpha adjudicated all 401 unique paired-judge rejection contexts.  Every
  material repair was then rejudged against a frozen current context; the 56
  resulting new rejection contexts contained no fatal defect.
- `precheck`, `depcheck`, `fwdcheck`, `extcheck`, `citecheck`, `rendercheck`,
  `validate-plan`, `depsource`, and `git diff --check` pass.  The scoped strict
  prose check passes on all 200 frontier files with zero warnings.  Repository
  citation/prose tools retain only their documented historical advisory
  warnings.

## Judge comparison

Both judges saw the same hash-attested context.  DeepSeek V4 Pro used maximum
thinking (`xhigh`) and its independent lane had a cap of 12, as did GPT-5.6
Terra.  The adjudicated comparison is precision among rejection candidates,
not recall.

| judge | candidates | fatal logic | fatal dependency | fatal other | nonfatal | false positive | fatal precision |
|---|---:|---:|---:|---:|---:|---:|---:|
| DeepSeek V4 Pro | 158 | 19 | 37 | 4 | 90 | 8 | 37.97% |
| GPT-5.6 Terra | 243 | 15 | 48 | 6 | 171 | 3 | 28.40% |

There are zero unadjudicated contexts and no mismatched or unattested current
contexts.  Terra produced more confirmed fatal detections in absolute number;
DeepSeek had the higher confirmed-fatal rate.  The ledger retains 34 historic
Terra null transport rows.  A usable verdict already exists for every affected
current context; three late null rows merely follow such a verdict and are not
mathematical verdicts.

## Fatal-error report — all fixed in draft

The 129 model/context fatal detections reduce to 47 distinct item ids.  An id
may occur in more than one class because it had both a proof and a dependency
defect.  All dispositions below are `proof repaired/replaced`, `statement or
domain restated`, and/or `exact dependency rebound`; no fatal item was kept
unrepaired.

### Invalid proof inference or invalid witness — proof/refutation

- **Trees:** `lem-prufer-decoding-produces-a-tree` and
  `thm-prufer-code-bijection` had a false component invariant and a label-domain
  mismatch.  The proof now uses the one-unused-label-per-component invariant
  and finite natural label sets.
- **Darboux/Taylor:** `cex-lhopital-converse`,
  `ex-differentiable-function-with-discontinuous-derivative`,
  `ex-positive-derivative-at-zero-with-no-local-monotonicity`,
  `lem-higher-order-rolle`, and `thm-taylor-peano-remainder` had incorrect
  oscillator/sign or regularity arguments.  They now give the derivative and
  both witness sequences, use the standard neighbourhood hypotheses, and split
  the order-zero/endpoint cases.
- **Exponential:** `lem-exponential-series-has-infinite-radius` incorrectly
  divided at zero.  Its ratio argument now isolates that case.
- **Riemann/Jordan:** `lem-finite-cube-covers-admit-grid-control`,
  `lem-compact-null-iff-content-zero-in-rn`,
  `lem-jordan-set-integral-well-defined`,
  `thm-graphs-of-continuous-functions-have-content-zero`,
  `thm-jordan-content-and-indicator-integrability`,
  `thm-lebesgue-criterion-in-rn`,
  `thm-multidimensional-darboux-equals-riemann`, and
  `cor-jordan-content-finite-additivity` had invalid compact-cover,
  rectangle-to-cube, bounding-box, grid, or content-zero inferences.  The
  proofs now construct padded finite covers, derive bounding boxes, restrict
  cuts/domains, and prove the requisite content and mesh estimates.

### Incorrect or missing dependency citation — Facts/dependencies and proof

- **Trees/MST:** `def-weighted-graph-and-minimum-spanning-tree`,
  `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`,
  `thm-kruskals-minimum-spanning-tree-algorithm`, and
  `thm-prims-minimum-spanning-tree-algorithm` now cite the spanning-tree,
  fundamental-cycle, and exchange facts that their existence/optimality moves
  use.
- **Induced subgraphs:** `def-clique-stable-set-and-numbers` and
  `def-minimal-forbidden-induced-subgraph` now cite the finite-power-set and
  family-free facts needed for their maxima and bases.
- **Darboux/L'Hôpital/Taylor:** `thm-darboux-theorem-for-derivatives`,
  `thm-general-leibniz-rule`, `lem-taylor-polynomial-derivatives`,
  `cor-taylor-lagrange-and-cauchy-remainders`,
  `ex-geometric-function-taylor-remainder`, `thm-lhopital-zero-over-zero`,
  `thm-lhopital-infinity-over-infinity`, and `thm-taylor-peano-remainder` now
  cite the compactness, continuity, chain/power, canonical-natural,
  positivity, and derivative facts actually used.
- **Exponential:** `lem-scaled-binomial-coefficients-converge`,
  `lem-exponential-factorial-tail-bound`, `thm-exponential-addition-formula`,
  `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`,
  `thm-exponential-limits-and-range`, `thm-exponential-ivp-uniqueness`,
  `thm-normalized-exponential-functional-equation`, and
  `thm-exponential-definition-equivalence` now cite the exact binomial,
  majorant, limit, continuity, initial-value, and series-existence bridges.
- **Riemann/Jordan:** `cor-one-dimensional-and-multidimensional-riemann-agree`,
  `thm-continuous-on-a-rectangle-is-riemann-integrable`,
  `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`,
  `thm-multidimensional-integral-properties`, and
  `thm-multidimensional-darboux-equals-riemann` now cite the exact
  one-dimensional, criterion, nonnegative-series, equivalence, refinement,
  and norm-comparison results used.

### False or ill-formed statement/domain — title, Statement, Definition

- `def-complement-of-a-graph-class` no longer asserts an unconditional
  isomorphism-class equivalence; it states the necessary closure condition.
- `def-multidimensional-rectangle-and-volume`,
  `def-multidimensional-darboux-integral`, and `def-oscillation-in-rn` now
  quantify dimensions/coordinates correctly, exclude incompatible degenerate
  domains, and handle the empty-set comparison correctly.
- `def-jordan-inner-and-outer-content` now uses metric rather than
  one-dimensional ordered boundedness and derives a nondegenerate coordinate
  box.  `thm-jordan-content-and-indicator-integrability` uses that well-formed
  interface and proves independence of the bounding rectangle.

The detailed per-context decisions and quotations are in
`frontier-6-judge-adjudications.jsonl` and `frontier-6-alpha-step8.md`; the
Step-6 proof and dependency repairs are in `frontier-6-alpha-audit.md` and the
two reader reports.

## Escalation and publication prerequisites

`touchlog audit` mechanically reports 118 ids because it counts every historic
raw judge rejection as a refutation.  That is not a defect count: Alpha
adjudicated every one, and its Step-8 disk review covered the 25 repeatedly
changed items; the 15 twice-touched Step-6 items have recorded fault and
downstream-ramification analyses in `frontier-6-alpha-audit.md`.  The remaining
raw entries are repeated nonfatal findings or false positives, not new repairs.

The published-corpus sweep found three statements that will become stale only
when this frontier is published.  Do not edit them before owner audit: amend
them in the same future publication commit and clear their audit stamps:

- `library/real-analysis/roots-and-rational-powers.md`: it says the library has
  no exponential function.
- `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`:
  it says the Darboux/L'Hôpital/Taylor page is not built.
- `items/cex-an-integrable-function-with-no-primitive.md`: it says Darboux's
  theorem is unavailable because that page is not built.

No F6 content is published, committed, or pushed.  Owner audit is the next
authorized action.
