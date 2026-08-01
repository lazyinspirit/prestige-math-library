# Frontier 6 Alpha audit — steps 6b and 6c

Date: 2026-08-01

## Role-separation disclosure

Because the thread limit prevented a fresh Alpha continuation, the orchestrator
explicitly reassigned the Batch 2 independent-reader context as the fallback
Frontier 6 Alpha. This is therefore not fresh-context separation from the Batch 2
reader. Before acting as Alpha, I completed and handed off
`research/frontier-6-reader-batch2.md`, then reread `CLAUDE.md`, the step 6b/6c
rules in `LEVELS.md`, the Batch 1 reader report, the refuter evidence, both live
batch artifacts, and the current item and page files. I independently checked
each reported repair from disk instead of adopting the reader report as proof.
The Batch 1 work remained independent of this context until the Alpha pass. No
model verdict was supplied or used, no judge was run, and no judge field was
written.

## Coverage and result

The audit covered all 188 unique Frontier 6 items on all 12 pages. Every
independent-reader repair was reread at its changed proof steps, Statement,
Facts & Assumptions, dependency list, and affected consumers. The Batch 1
reader's 13 item repairs and three page repairs were upheld, with one further
repair to the Prüfer decoding invariant. The Batch 2 reader's 28 item repairs
and one page repair were upheld, with the extensions recorded below. No result
or page was added, deleted, or moved.

The six A pages retain exactly two summary paragraphs, each below 150 words:
`66/60`, `45/56`, `42/49`, `42/55`, `37/62`, and `41/58` words respectively.
The six B pages have no authored body. All 188 item ids and all 12 page ids match
the frozen manifests. There are no stale `verification.judge` blocks.

## Read-only refuter adjudication

All 19 implicated items were opened and checked independently. Every reported
mathematical or citation issue was real; several were overlapping manifestations
of the same domain-contract gap. Items marked “reader repair upheld” needed no
further item edit in the Alpha pass.

| Item | Alpha disposition |
|---|---|
| `thm-taylor-peano-remainder` | Confirmed: differentiability at only the base point did not license mean-value arguments on an interval, and the old `n=0` wording did not state continuity. Required an open neighbourhood, separated the quantified continuity analogue, and added the exact derivative, neighbourhood, canonical-natural, and positivity citations. |
| `thm-first-nonzero-derivative-test` | Confirmed: the Peano input needed an open neighbourhood. Restored the planned stationary-point scope `n>=2`, made the neighbourhood explicit, and licensed the factorial sign. |
| `rem-darboux-lhopital-taylor-scope` | Confirmed: its Peano scope inherited the same point-versus-neighbourhood defect. Reworded it to the explicit open neighbourhood. |
| `thm-exponential-addition-formula` | Confirmed: the finite binomial identity was attributed to the product-limit machinery rather than the theorem that states the closed formula. Added and cited `thm-binomial-closed-formula`. |
| `lem-scaled-binomial-coefficients-converge` | Confirmed: convergence alone did not supply the uniform summable majorant used downstream. Added the exact product formula and proved `0 <= C(n,k)/n^k <= 1/k!`. |
| `thm-exponential-product-limit` | Confirmed: its domination step asserted the missing majorant. It now cites the strengthened scaled-binomial lemma for both convergence and the bound. |
| `def-multidimensional-darboux-integral` | Confirmed: degenerate rectangles were admitted although the grid definition requires strict coordinate partitions. The integral is now defined only on nondegenerate rectangles. |
| `thm-multidimensional-riemann-criterion` | Confirmed: inherited the same degenerate-domain mismatch. Statement and Given now use nondegenerate rectangles. |
| `thm-multidimensional-darboux-equals-riemann` | Confirmed: inherited the same mismatch. Statement and Given now use nondegenerate rectangles. |
| `cor-one-dimensional-and-multidimensional-riemann-agree` | Confirmed: the dictionary silently included `a=b`. It now states the equivalence for `a<b`. |
| `thm-multidimensional-integral-properties` | Confirmed: its integral and cutting interface silently allowed degenerate pieces. It now assumes a nondegenerate rectangle and a strictly interior cut; the reader's tagged/Darboux equivalence dependency remains necessary. |
| `thm-continuous-on-a-rectangle-is-riemann-integrable` | Confirmed; reader repair upheld. Its title, Statement, and criterion citation correctly restrict it to closed nondegenerate rectangles. |
| `thm-lebesgue-criterion-in-rn` | Confirmed twice over: its domain had to be nondegenerate, and its converse converted small rectangle volume into cube nullity without proof. Rebuilt the conversion using a common cube side, integer parts, and polynomial continuity, and tightened compactness and derivative-independent citations. |
| `thm-jordan-content-and-indicator-integrability` | Confirmed: it used a one-dimensional bounded-set definition for subsets of `R^m`, and independence from the bounding rectangle needed nondegenerate integration/additivity. It now uses metric boundedness and compares bounds inside a strictly larger box. |
| `def-riemann-integral-over-a-jordan-set` | Confirmed: metric boundedness of the set and real boundedness of the function were conflated, and the chosen bounding rectangle could be degenerate. It now chooses a nondegenerate bounding rectangle supplied by the Jordan definition. |
| `lem-jordan-set-integral-well-defined` | Confirmed: its common-box decomposition could invoke undefined degenerate integrals. Both input boxes and the larger comparison box are nondegenerate, with only strict coordinate cuts used. |
| `def-jordan-inner-and-outer-content` | Confirmed: a metric-bounded subset of `R^m` was treated as already lying in a coordinate rectangle. The definition now derives a nondegenerate coordinate box from a Euclidean ball, including the empty case. |
| `thm-jordan-boundary-criterion` | Confirmed: it relied on the same unlicensed coordinate-bound inference. It now uses metric closure facts, obtains a closed bounding rectangle from the Jordan definition, and applies Heine–Borel before compact-null equivalence. |
| `ex-triangle-has-jordan-content-one-half` | Confirmed; reader repair upheld. The corrected staircase count gives the exact inner and outer sums and closes the squeeze rather than merely asserting the limit. |

## Alpha repairs and amendments

The Alpha pass changed these item files:

- `lem-prufer-decoding-produces-a-tree`: replaced the false assertion that the
  component containing the final unused label was a singleton. The sufficient
  invariant is that every component contains exactly one unused label, so the
  selected code label and final label lie in different components.
- `thm-taylor-peano-remainder`, `thm-first-nonzero-derivative-test`, and
  `rem-darboux-lhopital-taylor-scope`: repaired the open-neighbourhood contract,
  separated the order-zero continuity case, restored the stationary-point
  scope, and supplied exact derivative/factorial/natural citations.
- `thm-exponential-addition-formula`,
  `lem-scaled-binomial-coefficients-converge`, and
  `thm-exponential-product-limit`: supplied the exact binomial identity and the
  load-bearing uniform majorant.
- `def-multidimensional-darboux-integral`,
  `thm-multidimensional-riemann-criterion`,
  `thm-multidimensional-darboux-equals-riemann`,
  `cor-one-dimensional-and-multidimensional-riemann-agree`, and
  `thm-multidimensional-integral-properties`: made the nondegenerate-rectangle
  interface consistent from definition through equivalence and additivity.
- `def-jordan-inner-and-outer-content`,
  `thm-jordan-content-and-indicator-integrability`,
  `thm-jordan-boundary-criterion`,
  `def-riemann-integral-over-a-jordan-set`,
  `lem-jordan-set-integral-well-defined`, and
  `rem-multidimensional-riemann-conventions-and-scope`: derived coordinate
  bounds from metric boundedness and kept the integration convention
  nondegenerate throughout.
- `thm-lebesgue-criterion-in-rn`: supplied the missing finite
  rectangle-to-cube theorem inside the proof, handled degenerate hyperplane
  pieces, and cited the exact closed-subset compactness theorem.

No new mathematical result was introduced. The finite rectangle-to-cube fact is
an internal proof step rather than a new library item.

## Twice-touched escalation set

The repair ledger records 15 items with more than one post-authoring hash
change. The orchestrator must personally audit these before owner handoff.

| Item | Nature of fault | Ramification if dropped; available weaker repair |
|---|---|---|
| `lem-prufer-decoding-produces-a-tree` | Unjustified and factually false component description. | Dropping it breaks `thm-prufer-code-bijection` and `ex-prufer-code-and-decoding`, hence the route to Cayley. The weaker unique-unused-label invariant is sufficient and is now proved. |
| `thm-taylor-peano-remainder` | Mathematical hypothesis gap plus mis-cited base-case definition. | Dropping it breaks `thm-first-nonzero-derivative-test` and its scope remark. The weaker true statement is the current open-neighbourhood theorem, with order zero stated separately. |
| `thm-first-nonzero-derivative-test` | Mathematical hypothesis and scope mismatch. | Dropping it removes the classification used by `ex-zero-second-derivative-extremum-trichotomy` and the associated false statement. The current `n>=2` stationary-point form is the weaker planned theorem. |
| `rem-darboux-lhopital-taylor-scope` | Inaccurate scope prose and incomplete exact citations. | It has no theorem consumers, so deletion breaks no proof, but would remove the page's endpoint, Peano, and deferral conventions. The repaired remark is the weaker accurate account. |
| `thm-exponential-addition-formula` | Mis-cited binomial identity. | Dropping it breaks four direct consumers: reciprocal/positivity, the normalized functional equation, and two counterexamples. The theorem remains valid with the exact closed-binomial dependency. |
| `thm-exponential-limits-and-range` | A sequence divergence definition was misapplied to a function limit and monotonicity was unlicensed. | Dropping it breaks the exponential-bijection corollary. The direct inequality/reciprocal proof is now self-contained and weaker in prerequisites. |
| `thm-picard-iterates-for-exponential` | The planned limiting integral equation was omitted and several load-bearing integration facts were uncited. | Dropping it breaks `thm-exponential-definition-equivalence`. The repaired theorem proves both finite iterates and the limiting normalized IVP. |
| `def-multidimensional-darboux-integral` | Ill-formed domain on degenerate rectangles, plus an earlier extrema-existence citation gap. | Dropping it breaks eight direct integral consumers. The current nondegenerate definition is the weaker well-formed interface. |
| `thm-multidimensional-integral-properties` | Missing tagged/Darboux equivalence and ill-formed degenerate cuts. | Dropping it breaks Jordan finite additivity, indicator integrability, and well-defined set integration. The current strictly interior-cut theorem is sufficient. |
| `thm-continuous-on-a-rectangle-is-riemann-integrable` | Degenerate-domain mismatch and an imprecise criterion citation. | It has no present direct consumers, but dropping it removes a central landmark. The current nondegenerate version is the correct weaker theorem. |
| `rem-multidimensional-riemann-conventions-and-scope` | Missing convention dependencies and a contradictory degenerate-integral implication. | It has no theorem consumers; deletion breaks no proof but loses the page's null/Jordan/integration interface. The repaired remark states only the supported conventions. |
| `def-jordan-inner-and-outer-content` | One-dimensional boundedness was used in `R^m`, then coordinate boundedness was assumed. | Dropping it breaks eleven direct Jordan consumers. Requiring an externally supplied box would be weaker; the current proof instead derives the box from metric boundedness. |
| `thm-jordan-content-and-indicator-integrability` | Wrong boundedness dependency and unproved bounding-box independence. | Dropping it breaks five consumers, including Jordan integration, boundary criterion, finite additivity, and examples. The repaired nondegenerate-box equivalence is sufficient. |
| `def-riemann-integral-over-a-jordan-set` | Metric and real boundedness were conflated and a degenerate bounding box could be selected. | Dropping it breaks the well-definedness lemma, compact-Jordan integration, and the conventions remark. The current definition selects a nondegenerate box. |
| `thm-lebesgue-criterion-in-rn` | Missing compact-uniform-mesh argument and invalid rectangle-to-cube inference. | Dropping it breaks the Jordan boundary criterion, compact-Jordan integration, and the conventions remark. The current nondegenerate theorem with an explicit finite rectangle-to-cube construction is the weaker licensed route. |

## Plan and manifest reconciliation

`research/plan-spec.json` and `research/frontier-6-batch-2.pages.json` were
updated to match every live Frontier 6 title and dependency list. A direct
parity check reports zero title mismatches and zero dependency mismatches across
all 188 items. Material strategy text was also reconciled where the implemented
proof had legitimately diverged, including:

- the direct Cauchy-mean-value proof of the Schlömilch–Roche remainder (the old
  Rolle/Leibniz strategy did not match the sound authored proof and its
  strict-between wording was incompatible with `x=a`);
- the scaled-binomial majorant and exact finite rectangle-to-cube construction;
- the nondegenerate multidimensional integral interface;
- metric-bounded Jordan sets and their derived coordinate boxes;
- the direct exponential-tail, exponential-growth, compact-Jordan, and Cantor
  slab arguments already verified by the reader.

The final audit manifest contains 1,033 dependency edges:

| Classification | Batch 1 | Batch 2 | Total |
|---|---:|---:|---:|
| Published backward | 220 | 401 | 621 |
| Same batch | 185 | 227 | 412 |
| Cross-batch | 0 | 0 | 0 |
| Forward | 0 | 0 | 0 |
| Unresolved or missing source | 0 | 0 | 0 |

For step 6c, every one of the 621 published-backward source uses was checked
against the exact Statement or Definition of its target. They reach 183
distinct published targets: 63 from Batch 1's 220 uses and 123 from Batch 2's
401 uses, with three targets shared between batches. All targets are published,
backward-pointing, present on disk, and semantically license the claims for
which they are cited. No dependency was reclassified as a forward reference,
external result, or cross-batch edge.

## Gates

After reflowing all Alpha-touched proof items and snapshotting
`research/frontier-6-touches.json` as `step-6-alpha-audit`, the full repository
gate suite gave:

| Gate | Result |
|---|---|
| `precheck.mts` | exit 0 |
| `depcheck.mjs` | exit 0 |
| `fwdcheck.mjs` | exit 0 |
| `extcheck.mjs` | exit 0 |
| `citecheck.mjs` | exit 0; its repository-wide findings remain heuristic warnings |
| `rendercheck.mjs` | exit 0; 2,400 files clean |
| `validate-plan.mjs research/plan-spec.json` | exit 0 |
| `depsource.mjs` | exit 0; zero unresolved dependencies |
| `prosecheck.mjs` | exit 0; zero errors and 677 repository-wide heuristic warnings |

A stricter scoped run, `prosecheck.mjs --strict` on the 188 Frontier items and
12 Frontier pages, checked 200 files with zero errors and zero warnings. Both
JSON artifacts parse. The final manifest command exits zero.

## Files changed by this Alpha pass

- `items/lem-prufer-decoding-produces-a-tree.md`
- `items/thm-taylor-peano-remainder.md`
- `items/thm-first-nonzero-derivative-test.md`
- `items/rem-darboux-lhopital-taylor-scope.md`
- `items/thm-exponential-addition-formula.md`
- `items/lem-scaled-binomial-coefficients-converge.md`
- `items/thm-exponential-product-limit.md`
- `items/def-multidimensional-darboux-integral.md`
- `items/thm-multidimensional-riemann-criterion.md`
- `items/thm-multidimensional-darboux-equals-riemann.md`
- `items/cor-one-dimensional-and-multidimensional-riemann-agree.md`
- `items/thm-multidimensional-integral-properties.md`
- `items/thm-lebesgue-criterion-in-rn.md`
- `items/def-jordan-inner-and-outer-content.md`
- `items/thm-jordan-content-and-indicator-integrability.md`
- `items/thm-jordan-boundary-criterion.md`
- `items/def-riemann-integral-over-a-jordan-set.md`
- `items/lem-jordan-set-integral-well-defined.md`
- `items/rem-multidimensional-riemann-conventions-and-scope.md`
- `research/plan-spec.json`
- `research/frontier-6-batch-2.pages.json`
- `research/frontier-6-touches.json`
- `research/frontier-6-alpha-audit.md`

## Handoff

Steps 6b and 6c are complete. No unresolved mathematical, citation, manifest,
or page-contract concern remains from the reader or refuter reports. The only
required escalation is the orchestrator's personal review of the 15
twice-touched items listed above, as mandated by the touch ledger.
