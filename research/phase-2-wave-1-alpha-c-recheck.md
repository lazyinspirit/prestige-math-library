# Phase 2 wave 1 — group c final scaffold adjudication

Dispatch: `scaffold-final-c-3918fb984ba96271`. Batches 10 and 11.
Date: 2026-09-08. This report supersedes the earlier snapshot-specific recheck.
No matching scaffold-owner decision existed when checked; no owner file or
published content was edited.

## Decisions

| A page | Terminal outcome | Ordinary verdict | A/B inventory |
|---|---|---|---|
| analytic-majorants-and-the-cauchy-kovalevskaya-theorem | accept | sufficient | 15/7 |
| euclidean-surface-measure-divergence-and-green-identities | repaired | sufficient | 16/6 |
| measurable-densities-and-radon-volume-on-manifolds | accept | sufficient | 11/7 |

There is no remaining identified unmet or inadequate prerequisite for these
pairs. Acceptance is scaffold adjudication, not publication approval. The
surface repair below was applied and checked before recording success.

## Material reviewed and prior findings

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the frontier-dependency instructions,
current plan, assigned PDE and differential-geometry prose designs, group-c
Step-3 review and recheck, ordinary verdicts, batch notes/fixes, both current
manifests and coverages, scope records, source receipts, and consumer-owned
frontier inputs. Rechecked the prerequisite proof routes in published items
and all run manifests. Historical notes and their counts are not current gates.

The earlier CK structural blocker is resolved in the current plan:
`complex-differentiability-and-cauchy-riemann` now requires
`partitions-of-unity-and-paracompactness`. The actual path is the analytic-germ
supplier through multivariable power series, Cauchy inequalities/higher
formula/circle formula/monomial integrals, complex exponential, and
`lem-algebra-of-continuous-real-maps-on-a-space`; the latter's quotient-domain
clause reaches zero/cozero sets and their G-delta definition. All their A-page
homes are now in the closure in legal order. This dispatch made no shared
plan/prose change. The previously repaired PDE-1 and twenty measure-theory
A-for-B edges remain present.

## Applied surface repair and protected debt

The proposed Borel substitution proof consumed
`items/lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands.md`.
Its Facts L2 and step 2.1 invoke
`thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content` as a
function-integral comparison. The supplier's exact statement only identifies
Jordan content with Lebesgue measure of sets. It does not supply that step.
This is an actual affected prerequisite, not a defect on an unused co-resident
item.

Repaired the strategy and deps of
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
in batch 10. Removed the defective compact-support supplier and proved its
needed continuous compact-support interface locally, as follows.

1. Zero extension of a continuous function compactly supported inside an open
   Euclidean domain is globally continuous and compactly supported. Enclose
   its support in a nondegenerate box.
2. The continuous-on-a-rectangle theorem gives Riemann integrability. On each
   grid disjointify cells on their coordinate faces. Borel lower and upper
   steps have integrals equal to the Darboux sums, because box measure is
   volume and faces are null. After a constant shift, integral monotonicity
   and Darboux equality squeeze the Lebesgue integral to the Riemann integral;
   subtract the shift using linearity.
3. For a C1 diffeomorphism T:U to V and f in C_c(V), both f and
   (f composed with T)|det DT| have continuous compactly supported zero
   extensions. The latter support lies in the compact image of supp(f) under
   the continuous inverse. The existing Riemann compact-support substitution
   corollary and step 2 give the required Lebesgue substitution identity.
4. On B(U), mu(A)=lambda(T(A)) and nu(A)=integral_A |det DT| are measures,
   locally finite by compactness and continuity. Second-countable LCH
   regularity makes them Radon. For each measure prove its integration
   identity first on indicators, then simple functions, then explicit dyadic
   increasing approximations. The continuous compact-support identity makes
   their test integrals equal; RMK uniqueness gives equality on B(U).
   Substituting h composed with T proves the stated formula for every
   nonnegative Borel h, with both sides allowed to be infinite.

Exact earlier replacement ingredients, all now explicit deps, are
`cor-change-of-variables-for-compactly-supported-functions`,
`thm-continuous-on-a-rectangle-is-riemann-integrable`,
`thm-multidimensional-darboux-equals-riemann`,
`def-multidimensional-darboux-sums`,
`thm-lebesgue-measure-of-a-box-of-every-kind`,
`prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`,
`prop-order-and-scalar-rules-for-the-nonnegative-integral`, and
`thm-linearity-of-the-lebesgue-integral-on-l-one`. The existing measure,
regularity, uniqueness, measurability and MCT deps are retained. The argument
uses AC_omega and needs neither completion nor a recorded result.

The matching Hunter Theorem 1.44 coverage support now describes this actual
local proof. No statement, useful result, item inventory or source disposition
was weakened. The deleted edge is justified by steps 1–3, which supply exactly
its former use without consuming it. The published item remains unchanged.
Batch-10 notes record its exact defective path, planned local suppliers and a
Phase-3 transplant strategy using earlier Darboux prerequisites, avoiding a
reverse edge to this later frontier page. Reconciliation into the canonical
published-consumer-supplier ledger belongs to its owner. The separately
recorded published measurable-C1 defect remains Phase-3 debt too; neither
published defective proof is used to prove its replacement.

## Mathematical dependency review

CK: checked ordinary Taylor coefficients and multinomial majorants;
zero-constant substitutions; analytic inverse/implicit restriction from
holomorphic inverse with conjugation uniqueness; the scalar ODE majorant
W-NW^2/(2r)=Mt; formal triangular normal recursion; positive Goursat branch
(aq-bq^2=M/(1-y/r)-M with a>0); its analytic ODE and nonzero positive trace;
coefficient domination and convergent residual; formal jet compatibility in
the higher-order reduction; analytic flattening and selected implicit branch.
The derivative slots obey total order at most m and normal order below m.
Normal tensor contraction includes j!/alpha!, and conversions to iterated
normal derivatives are triangular. Uniqueness is of analytic germs, within
the selected branch for fully nonlinear data. Transport, wave, flat-data,
characteristic-data, heat divergence and elliptic instability examples have
explicit proofs with their stated hypotheses. No recorded CK statement is
consumed. The published several-variable power-series, polydisc Cauchy
estimates, holomorphic inverse and principal-symbol interfaces were read and
checked in the precise directions used.

Surface: Gram determinants transform by the absolute Jacobian, so the repaired
Borel substitution proves chart/partition independence. The surface-integral
definition's justified_by points to that local well-definedness proof; it
only uses the raw chart formula, not assumed choice independence. Finite
ambient bump partitions do not require smooth structure on a C1 boundary.
The graph proof uses Fubini and the ordinary FTC with the actual exterior
normal. For fields merely C1 up to the boundary, shifting h to h-epsilon
and taking limits supplies the endpoint calculation without an exterior
extension. For compact surface-null edges, finite bounded chart refinements
and cubic null covers give balls with sum r_j^(n-1) arbitrarily small. The
product bump cutoff has gradient integral bounded by that sum and volume
bounded by its product with the largest radius. This complete local argument
was also read in `research/phase-2-local-mathematical-repairs-2026-09-08.md`.
It justifies the finite-face limit and opposite internal normals cancel.
The radial-chart Jacobian and earlier cone-defined polar measure identify
sphere area without circular substitution. Green identities follow from
product differentiation, and the explicit cone-tip cap/lateral/bulk bounds
handle that example's singular endpoint.

Densities: the pointwise absolute-Jacobian cocycle has strictly positive
finite transition factors. The overlap lemma applies the batch-10 Borel
formula only to open chart interiors, using the target Borel coefficient
times an indicator. Smooth boundary invariance and Euclidean null faces
handle boundary charts even with infinite coefficients; n=0 is the same
singleton weight. Countable nonnegative double sums prove measure additivity
and choice independence without assuming sigma-finiteness of arbitrary
extended densities. Positive smooth coefficients are locally bounded on
compact coordinate pieces; second countability and the precise LCH regularity
supplier give Radon and sigma-finite volume. The local bounded-Borel Darboux
bridge covers half-space zero extensions in the smooth comparison, avoiding
the interval-only published comparison. Completed-measurable functions are
replaced by Borel representatives modulo a countable null union, not treated
as automatically Borel. The orientation-free smooth integral definition,
partition suppliers, half-space extension lemma, regularity proof and RMK
uniqueness proof were checked. The L1 splitting occurs after absolute
integrability. All seven examples preserve the boundary, zero-dimensional,
nonorientability and infinite-total-mass conventions.

The current graph traversal overlays all frontier manifests on published
items, follows deps, justified_by and body uses of forward_refs outside
orientation Remarks, and checks supplier homes against transitive requires.
Both assigned A and B inventories are roots; co-residence alone adds no item.

| Pair | Prerequisite pages | Items reached | Traversed metadata edges |
|---|---:|---:|---:|
| CK | 127 | 860 | 6023 |
| surface/divergence | 137 | 978 | 6361 |
| densities | 168 | 1172 | 6983 |

There were no missing targets, outside-closure supplier homes, illegal page
order/B suppliers, or recorded-not-proved items in these traversals. The
removed compact-support lemma is absent from every cone. These counts are
structural evidence, not a substitute for the mathematical interface review
above. validate-plan and depcheck also pass their cycle/reference checks.
No assigned or transitive Foundations prerequisite uses the deferred
set-theory catalogue as proof backing. Orientation-only Remarks are not
silently promoted to suppliers.

## Complete relevant source text and scope

All six active URLs were opened as complete documents, and the relevant
arguments were read in full, including continued pages. Existing fetch
receipts were reused; source-fetch-check created no new stamps. No source was
dropped and no unavailable-source confidence claim was needed.

- Gantumur, [Math 580 notes 2](https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf),
  §§1–5, especially pp.4–14, Theorem 18 and Corollary 20: coefficient
  majorants, analytic ODE/PDE, higher-order reduction and examples. The local
  ODE quadratic is derived explicitly, and the permitted higher jets are
  specified exactly rather than relying on an overbroad reading of Cor.20.
- Ageno, [Analysis of PDE lecture notes](https://giacomoageno.github.io/LectureNotesAPDE.pdf),
  Remarks 2.11–2.12, §2.3 pp.20–27, Theorem 2.22 and its complete proof,
  §2.4.1 pp.28–29: independent flattening/normal-data and instability
  treatment. Definition 2.15's displayed multi-index expression lacks the
  multinomial factor; the scaffold uses the correct tensor contraction.
  The smooth-analyticity aside is not imported as a theorem.
- Hunter, [Notes on PDE](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf),
  §§1.9–1.12 printed pp.11–18, Theorem 1.44, graph surface formula,
  divergence and boundary conventions; Theorem 2.23 and proof printed p.32:
  Green identities. The edge cutoff and Darboux argument are identified as
  local proofs, not assertions of an omitted source proof.
- Oh, [Math 222A notes](https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf),
  complete §3.9 pp.46–48, Proposition 3.23 and graph/partition proof:
  independent divergence localization and globalization.
- Lee, [Introduction to Smooth Manifolds](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf),
  Chapter 16, “Densities,” printed pp.428–433, Propositions 16.35–16.45
  and intervening construction: absolute determinant, density bundle,
  integration and Riemannian density. General rank-changing smooth pullback
  is not used; absolute determinant smoothness is safe for diffeomorphisms.
- Folland, [Real Analysis](https://djvu.online/file/NPF4BEtSuqdFA),
  §2.2/Proposition 2.13 pp.49–50, Theorems 2.14–2.15 pp.50–51,
  Theorem 2.47 and complete proof pp.74–76, Theorem 7.8 and proof p.217,
  and complete §11.4 pp.361–363: simple and monotone integration,
  substitution, regularity and manifold densities. The local Radon route
  independently supplies the precise Borel substitution interface.

Thus each A page has two independent full treatments, including a textbook
or complete lecture-note set. The coverages contain 97 batch-10 and 35
batch-11 harvested results, each linked to an included/inline item, a valid
later destination, or a specific out-of-scope reason. No harvested result
was silently dropped in this dispatch.

Refreshed all 21 group-c scope rows and resolved them to stands with evidence.
In particular ultrahyperbolic component classification (Gantumur Exercise 24)
is outside the local CK interface; heat/elliptic behavior is retained or
routed to the appropriate later analytic/PDE topic; rough/Sobolev boundary
extensions need different hypotheses and are not used in the elementary
flux proof; general Stokes is later; Folland's Haar/Hausdorff/fractional-density
material and Lee's unrestricted pullback variants supply no hidden step here.
These exclusions do not weaken a retained claim. The scope checker reports
21 current declines and zero errors.

## Frontier bookkeeping and exact edits

Batch 10 input remains the correct empty array. Batch 11 has exactly the page
edge from densities to surface/divergence and the item edge from overlap
integrals to Borel substitution. Both are verified against the current
mathematical statement and repaired proof; their evidence was updated and the
derived ledger refreshed with --require-reviewed. No other batch input was
edited. Batch-owned notes record the new debt and current dispositions.
Ordinary group-c verdicts are all sufficient with empty missing lists.

The mathematical changes are limited to batch-10 Borel substitution strategy,
deps and matching source support. Bookkeeping edits are this report, ordinary
verdicts, group scope evidence, batch notes, the batch-11 dependency input,
tool-generated terminal decisions and derived frontier refresh. No new pair,
plan modification or published-content edit was necessary.

## Checks actually run after the mathematical repair

- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`:
  435 items, zero normalized, zero errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-*.pages.json`:
  435 items, zero errors/warnings.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-10.coverage.json --require-destination`
  and the corresponding batch-11 command: 97 and 35 harvested results,
  zero errors/warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json,research/phase-2-wave-1-batch-11.coverage.json --stamp`:
  6/6 fetch-verified, zero newly stamped, 6/6 resolved, zero drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json,research/phase-2-wave-1-batch-11.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified`:
  all 58 authored results backed.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; 1616 pages,
  892/1611 planned pages with item lists; remaining pages validated at page
  level only. This is the tool's actual validation limit.
- `node tools/extcheck.mjs`: exit 0; 15416 items, 161 recorded-not-proved,
  63 already-marked consequence warnings. Their existence does not certify
  any proof; the owned cones independently contain no recorded supplier.
- `node tools/depcheck.mjs --quiet`: exit 0, no cycles, unresolved references
  or draft items on published pages; existing library warnings remain.
- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group c`:
  21 rows, nine pending after refresh; subsequent `check` after evidence
  updates: 21 current declines, zero errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1 --require-reviewed`:
  refreshed and deduplicated after the dependency input update.

The run-wide URL advisory concerning a JHU functional-analysis source is
outside these six source records; it was not changed or reported as repaired.

Final bookkeeping checks: group-c scope check again returned zero errors;
scaffold-verdicts reported 20/20 reviewed, seven insufficient elsewhere and
zero unreviewed (exit 0). Scoped `git diff --check` returned exit 0; the owned
scaffold/report files include untracked files, so this Git check alone is not
a schema or whitespace certification of those files. JSON/schema checks above
cover the owned manifests and coverage. Rechecked for matching owner decisions
immediately before terminal recording; none existed.
