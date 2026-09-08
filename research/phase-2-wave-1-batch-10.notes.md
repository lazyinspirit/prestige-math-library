# Phase 2 wave 1 — batch 10 current scaffold record

Date: 2026-09-08. Current disposition: the source-reading and local
mathematical blockers for both PDE pairs are resolved. The manifest now has 44
items: CK 15 A + 7 B, Euclidean surface/divergence 16 A + 6 B. The single-item
increase is the shared Borel substitution lemma described below.

## Cauchy–Kovalevskaya audit

The coefficientwise majorant operations, analytic ODE system, formal normal
recursion, positive majorant domination, Goursat implicit equation,
higher-order first-order reduction and noncharacteristic flattening were
checked. In particular the scalar equation
`(1-cM)q-cq^2=M/(1-y/r)-M` is the correct algebraic reduction of the chosen
Goursat majorant, and its implicit-function derivative is nonzero at the
origin. The characteristic, heat-series and Hadamard-instability examples do
not overstate smooth well-posedness.

## Surface/divergence audit and repairs

The cutoff proof in `phase-2-local-mathematical-repairs-2026-09-08.md` is
rigorous under the manifest's finite compact regular patch presentation. Chart
preimages of the edge set are null because the positive continuous surface
density has a compact lower bound. Finite cube covers yield ambient balls with
small sum of `(n-1)`st powers; product bumps give both small gradient integral
and support volume. Applying the local graph identity to `(1-eta)F`, then using
bulk estimates, dominated convergence on finitely many faces and opposite
normal cancellation, proves the stated finite-face extension. No Hausdorff
measure or finite-perimeter theorem is claimed.

One new proposed supplier,
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`,
replaces the defective published measurable-C1 theorem in the two Borel
consumers. For a C1 diffeomorphism it defines the pullback of Lebesgue measure
and the Jacobian-weighted measure on the source, proves both compact-finite and
Radon, identifies their `C_c` integrals by the already-sound compact-support
formula, applies Radon uniqueness, and passes from indicators to simple
functions and monotone limits. It intentionally claims only Borel functions.
The surface definition also now defines its product integral directly rather
than importing the unrelated published density-integration proof.

## Source receipt

- Gantumur, *Math 580 Lecture Notes 2*, complete §§1–5, printed pp.1–14,
  including the analytic ODE/PDE majorant and characteristic-surface proofs.
- Ageno, *Analysis of Partial Differential Equations*, Remarks 2.11–2.12,
  complete §2.3 pp.20–27 and §2.4.1 pp.28–29, including Theorem 2.22.
- Hunter, *Notes on Partial Differential Equations*, complete §§1.9–1.12,
  printed pp.11–18, including boundary charts, surface density, COV statement
  and divergence theorem; Theorem 2.23 p.32 was read for the later cutoff use.
- Oh, *Math 222A Notes*, complete §3.9 pp.46–48, including Proposition 3.23,
  the graph computation and finite partition proof.

All four current fetch stamps are in coverage, and the run-wide audit passes
59/59 fetched and 59/59 live.

## Protected Phase 3 debt and limit

The published scaled-bump strict-support proof and the published measurable-C1
change-of-variables proof are unchanged. The latter still starts its monotone
class from open rectangles (not an algebra) and lacks a finite localization for
decreasing infinite measures. Both exact debts remain Phase 3 reservations;
the local alternative proof is not a claim that they were repaired. The audit
does not certify arbitrary rough boundaries or every inherited PDE proof.

## Step-3 fix pass

### `alpha-c-step3-verdicts.json` — CK `missing[0]` and surface/divergence `missing[0]`: absent batch-10 frontier input

**Disposition:** resolved. Added
`research/phase-2-wave-1-batch-10.cross-batch-dependencies.json` containing
`[]`. The current batch is a consumer of no same-frontier page or item: neither
of its four manifest pages has a `requires` edge to another phase-2-wave-1
page, and none of its 44 item `deps`, `justified_by`, or load-bearing
`forward_refs` names a same-frontier item. Batch 11's use of the new Borel
substitution lemma is a batch-11 consumer edge and therefore belongs only in
batch 11's input. The derived run ledger was refreshed after adding this
consumer-owned input.

**Evidence and changed record:**
`research/phase-2-wave-1-batch-10.pages.json` (the 15/7 CK and 16/6
surface/divergence inventories), its explicit relation arrays, and the
Alpha-c finding at `research/phase-2-wave-1-alpha-c-step3-scaffold-review.md`
§“Same-frontier dependency bookkeeping”. No new A/B prerequisite pair is
needed.

### `scope-decline:5491bad8d0a23ffac3cca52bcbec08bd7286130eccefbb2ad47e64a1f68e36df`: Gantumur Exercise 24 destination

**Disposition:** resolved in batch coverage as `out-of-scope`. The complete
source text, Gantumur *Math 580 Lecture Notes 2*, §5, printed p. 14, asks for
the real characteristic cones and surfaces for Tricomi, wave,
ultrahyperbolic, and transport equations, including the number of components
of the complement of the ultrahyperbolic cone in $\mathbb R^4$. The CK proof
uses only the local noncharacteristic analytic criterion; its retained
transport example and characteristic-data counterexample have their own exact
uses. No CK item, B example, or proof dependency uses the omitted four-model
classification or its cone-complement topology. The formerly named,
already-published destination does not contain the full result, and no current
planned page does, so this is not a deferral.

**Evidence and changed record:**
`research/phase-2-wave-1-batch-10.coverage.json`, Gantumur source record
`https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf`, §5,
printed p. 14; the source-fetch receipt remains current. This preserves every
CK result used in the 15 A and 7 B items and adds no dependency.

### Design and plan reconciliation

The current `research/plan-spec.json` controls both pairs and agrees with the
binding PDE design on page IDs, order, companions, and backward requirements:
PDE-1CK's PDE-1 supplier is
`partial-differential-equations-and-characteristics`, and PDE-2D's measure,
Fubini/change-of-variables, FTC, inner-product, and partition machinery is
declared. Its additional direct Radon-measure requirement is load-bearing for
the local Borel substitution lemma. The current plan's `items` arrays are
intentionally empty for these unmaterialized pages, so the complete 44-item
proof-order inventory remains in the owned manifest; no plan/design conflict
changes a mathematical statement, convention, direction, axiom strength, or
dependency. No Foundations page or item is involved, and the reviewed closure
does not reach `deferred-set-theory-beyond-choice`.

### Checks and remaining blocker

Ran after the repair:

- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-10.coverage.json --require-destination` — 2 pages, 97 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json --stamp` — 4/4 active sources fetch-verified and resolved; 0 newly stamped and 0 drops.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` — refreshed and deduplicated the derived ledger.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json` — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-*.pages.json` — 434 scoped items, 0 errors, 0 warnings.
- `node tools/extcheck.mjs` — exit 0; it reports the pre-existing 63
  recorded-not-proved consequences, including the unchanged published
  `rem-cauchy-kovalevskaya-proof-boundary`.

`node tools/validate-plan.mjs research/plan-spec.json` currently exits 1 on
four unrelated shared-plan errors: two undeclared prerequisites on
`relative-homology-excision-and-mayer-vietoris`, and one each on
`homology-axioms-degree-and-classical-applications` and its examples page.
Those pages and the shared plan are outside batch-10 authority. Likewise,
`node tools/scope-decisions.mjs check --run phase-2-wave-1 --group c` cannot
reach the repaired group-C row because the separately owned
`research/phase-2-wave-1-batch-14.coverage.json` is currently malformed JSON.
The Alpha-c scope-decision record for this coverage row is therefore still
hash-stale and must be refreshed and re-adjudicated by its owner after batch
14 is repaired. No batch-10 mathematical, source, or cross-batch dependency
blocker remains.

## Scaffold-fix round

The two batch-10 entries in
`research/phase-2-wave-1-scaffold-closure.json` describe the shared-plan bytes
reviewed by Alpha c, whose recorded SHA-256 is
`174897ed5ce07c06ce4be9741c132929395b5544216c0f5bc571289e48c04e31`.
They are stale against the current shared plan. This round did not edit that
plan; it verified the already-applied central repair on current
`research/plan-spec.json` bytes with SHA-256
`72737f62e1f9981b8a13d6785da885647d0482dc8a556a495e2a4fd2ce904b8c`.

### Finding `analytic-majorants-and-the-cauchy-kovalevskaya-theorem/missing[0]`

**Disposition:** resolved on the current plan; the old finding is rebutted as
a byte-stale description, not as a mathematical false positive.

**Evidence:** the current
`partial-differential-equations-and-characteristics` row has exactly the two
retained genuine suppliers
`picard-lindelof-and-first-order-odes` and
`the-spectral-theorem-and-singular-value-decomposition`, plus the five direct
A-page suppliers required by the binding PDE-1 design:
`the-total-derivative`, `mixed-partials-taylor-and-extrema`,
`rn-as-a-normed-space`, `dual-spaces-bilinear-forms-and-inertia`, and
`inverse-and-implicit-function-theorems`. It no longer requires
`itos-formula-and-brownian-martingales-examples`. The resulting CK root closure
has 121 pages and 281 distinct `requires` edges, with zero missing targets,
cycles, forward-or-same-order edges, A-to-B edges, or reachability to
`deferred-set-theory-beyond-choice`. Its 69 batch-manifest item dependency
edges all resolve and every supplier is earlier on the same page or homed in
that page closure. This is the exact dependency correction prescribed at
`research/plan-pde-track.md` lines 547--556 and used by the CK design at lines
622--683.

**Change:** no batch manifest or coverage change was mathematically needed.
The owned CK manifest already agrees with the repaired current plan and keeps
the reviewed 15-item A / 7-item B inventory in proof order. This section is
the required current-byte disposition.

**Remaining blocker:** none for this finding. No new prerequisite A/B pair is
needed.

### Finding `euclidean-surface-measure-divergence-and-green-identities/missing[0]`

**Disposition:** resolved on the current plan; the old finding is likewise a
byte-stale description of a previously real defect.

**Evidence:** every one of the twenty edges enumerated in Alpha c Regression 2
now targets the same proof-supplying A page rather than its `-examples` B
companion, from
`radon-measures-and-the-riesz-markov-kakutani-theorem` ->
`absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` through
`sigma-algebras-and-borel-sets` -> `stone-weierstrass-general`. An explicit
twenty-edge comparison found all twenty A targets present and all twenty old B
targets absent. The resulting surface/divergence root closure has 137 pages
and 315 distinct `requires` edges, with zero missing targets, cycles,
forward-or-same-order edges, A-to-B edges, or reachability to
`deferred-set-theory-beyond-choice`. Its 79 batch-manifest item dependency
edges all resolve and every supplier is earlier on the same page or homed in
that page closure. The local statements, hypotheses, direction, Borel
extended-value convention, orientation, finite-face regularity, and proof use
remain those already adjudicated in the Step-3 fix pass and Alpha c recheck;
retargeting only replaces examples-only page carriers by the A pages that own
those same mathematical suppliers.

**Change:** no batch manifest or coverage change was mathematically needed.
The owned surface/divergence manifest already agrees with the repaired current
plan and keeps the reviewed 16-item A / 6-item B inventory in proof order. This
section is the required current-byte disposition.

**Remaining blocker:** none for this finding. No new prerequisite A/B pair is
needed.

### Checks on the current bytes

- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-10.coverage.json --require-destination`
  — 2 pages, 97 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`
  — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-*.pages.json`
  — 434 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; 1,616 pages,
  15,116 planned items, acyclic declared page order, and no item-level cycles,
  forward references, B-page dependencies, or unresolved IDs among the 892
  pages with item lists. The remaining 719 pages are explicitly page-level
  plans.
- `node tools/extcheck.mjs` — exit 0; all recorded-not-proved statements satisfy
  the structural contract and all consequences are marked. It reports the 63
  existing published warnings, including the unchanged Phase-3 CK remark.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json --stamp`
  — 4/4 active sources fetch-verified, 0 newly stamped, 0 drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified`
  — all 40 authored source-backed results remain backed.
- Independent current-plan and batch-manifest closure traversal — CK
  `121 pages / 281 page edges / 69 manifest item-dependency edges`; surface /
  divergence `137 / 315 / 79`; both have zero missing, circular, forward,
  A-to-B, out-of-page-closure direct item, or forbidden Set Theory suppliers.

An additional exploratory `audit-manifest` invocation exited 1 because that
post-materialization tool reads proposed IDs from `items/`; at this scaffold
stage all 434 run items are intentionally still unmaterialized. Its 434
`missing-source` diagnostics therefore do not contradict the passing
manifest-only scaffold checks above and were not treated as a gate result.

## Scaffold-fix round

This round supersedes the preceding round's current-byte conclusion. At the
start of the repair, the shared plan had SHA-256
`8802e3e14634553bb740252015e9aa0916b533c20714e0ceb7734e118dea1060`,
the exact hash reviewed by Alpha c when it found the CK page-interface defect.
While the batch-local blocker was being recorded, an authorized concurrent
writer applied the required shared-plan edge. The shared file continued to
receive unrelated authorized repairs during this round, so no later whole-file
hash is represented as stable; the exact page row was reread after the final
checks and contains the edge recorded below.

### Finding `analytic-majorants-and-the-cauchy-kovalevskaya-theorem/missing[0]`

**Disposition:** resolved by the authorized shared-plan writer during this
round. The finding was mathematically correct on the initial bytes; it is not a
false positive. No batch-manifest workaround was made.

**Evidence:** on the initial plan, the CK A-page `requires` closure had 121
pages and 281 distinct edges and contained neither
`partitions-of-unity-and-paracompactness` nor `separation-axioms`. The shortest
load-bearing item path from the owned A page remains

`def-real-analytic-germ-in-several-variables` ->
`thm-power-series-define-holomorphic-functions-in-several-variables` ->
`cor-cauchy-inequalities` ->
`thm-cauchy-integral-formula-higher-derivatives` ->
`thm-cauchy-integral-formula-circle` ->
`thm-circle-integrals-of-integer-monomials` ->
`thm-complex-exponential-is-entire-with-derivative-itself` ->
`lem-algebra-of-continuous-real-maps-on-a-space` ->
`def-zero-sets-and-cozero-sets` ->
`def-g-delta-and-f-sigma-in-a-topological-space`.

The exact statements and uses match in direction and hypotheses.
`thm-complex-exponential-is-entire-with-derivative-itself` uses the algebra
lemma in Fact L4 and proof step 3.1 to show its four displayed real partial
derivatives are continuous. The algebra lemma states continuity of finite sums
and products of continuous real maps (and quotients on a cozero set), exactly
covering that use; its quotient clause explicitly uses the zero/cozero
definition. That definition explicitly declares the topological
$G_\delta/F_\sigma$ definition while proving its corresponding clause. No
choice-strength change or direction reversal occurs along this segment.

The adequate supplier already exists: `partitions-of-unity-and-paracompactness`
is an A page at order 269, owns the algebra lemma, and its declared closure
reaches `separation-axioms`, which owns both definitions. The current plan now
contains the exact edge

`complex-differentiability-and-cauchy-riemann` ->
`partitions-of-unity-and-paracompactness`

at order 288.07801. The resulting 127-page / 303-edge CK closure contains both
supplier homes and has no missing target, cycle, forward-or-same-order edge,
B-page supplier, or reachability to
`deferred-set-theory-beyond-choice`. `research/plan-complex-analysis-track.md`
specifies the same final direct requirement in its Phase-3 page patch and lists
the complex-exponential/algebra-lemma witness.

**Change:** the shared-plan writer added the required page edge; this dispatch
did not edit that file. The owned coverage record remains unblocked. The 15/7
CK and 16/6 surface/divergence inventories, their proof-order item dependencies,
all coverage dispositions and source records, and the empty batch-10
same-frontier input remain unchanged. No new A/B pair is required.

**Remaining blocker:** none for this finding.

### Checks on the repaired batch-local records

- Batch-10 JSON parse and `git diff --check` — pass.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-10.coverage.json --require-destination`
  — 2 pages, 97 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`
  — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-*.pages.json`
  — 434 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; 1,616
  pages and 15,116 planned items, with the declared page order acyclic and no
  item-level cycle, forward reference, B-page dependency, or unresolved ID
  among the 892 pages with item lists. This structural pass does not detect the
  published-item/page-interface defect recorded above.
- `node tools/extcheck.mjs` — exit 0; 161 recorded-not-proved items satisfy
  the structural contract. It reports 63 existing published warnings,
  including the unchanged `rem-cauchy-kovalevskaya-proof-boundary` warning.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json --stamp`
  — 4/4 active sources fetch-verified, 0 newly stamped, 0 drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified`
  — all 40 authored source-backed results remain backed.
- Independent current-plan closure traversal — CK closure 127 pages / 303
  edges, with zero missing, forward-or-same-order, B-supplier, and
  forbidden-catalogue edges; it contains both required supplier homes. An
  actual-item BFS reproduced the ten-item shortest dependency path recorded
  above.


## Final adjudication — scaffold-final-c-3918fb984ba96271

CK is accepted: the previously requested shared-plan edge from
`complex-differentiability-and-cauchy-riemann` to
`partitions-of-unity-and-paracompactness` is present. No shared edit was made
in this dispatch. The current closure has 127 pages and no illegal supplier.

Surface/divergence is repaired. In
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`,
the dependency on the published compact-support Lebesgue formula was removed
and replaced with a complete local Darboux comparison before the Riemann
substitution corollary is used. The statement and all downstream mathematics
are unchanged. The new explicit prerequisite IDs, argument, matching
Hunter coverage support, source evidence and checks are in the current
manifest and group-c recheck report.

### Published-consumer-supplier debt for canonical reconciliation

Published consumer: `items/lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands.md`,
Facts L2 and proof step 2.1. Its supplier
`items/thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content.md`
proves equality of set content and measure, not equality of integrals of
continuous functions on boxes. Thus the asserted function-comparison step is
not supplied by that theorem. This was an actual prerequisite of the owned
Borel substitution lemma before this dispatch, so it could not be dismissed
as unrelated debt. It is now removed from the owned proof cone.

Exact planned supplier for Phase 3: the local compact-support Darboux
comparison in
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
on `euclidean-surface-measure-divergence-and-green-identities`.
Repair strategy: transplant that elementary comparison argument into the
published compact-support proof, with its exact earlier dependencies,
then retain the published Riemann substitution corollary. Do not create a
reverse edge from the earlier published page to this later frontier page.
Alternatively supply the bounded Borel box comparison from
`lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`
by the same earlier Darboux argument. This records a proof supplier and
transplant route, not permission to introduce a forward dependency.
The published consumer and canonical ledger remain untouched; their owner
must reconcile this note into the published-consumer-supplier ledger.
The existing measurable-C1 published defect remains separate Phase-3 debt.

No unresolved blocker remains for these two owned pairs. See
`research/phase-2-wave-1-alpha-c-recheck.md` for current checks and decisions.

## Step-5 authoring

Status: authoring complete for all 44 items and all four draft pages. The final
reconciliation below supersedes the per-item checkpoint fields that say checks
were pending; prior scaffold acceptance is not used as proof evidence.
All 44 promised IDs are retained. The proof-contract scope contains the entire
inventory, so missing authoring cannot be concealed by selecting a smaller scope.
Source recovery: browser PDF text is accessible; shell curl fails DNS and local
pdftotext is unavailable. Only passages actually read in this dispatch count as
new authoring evidence. No judge, publication, plan, or workflow state is edited.

### Authored checkpoint: `def-real-analytic-germ-in-several-variables`

Claim/conventions: Fix $n\ge1$ and $a\in\mathbb R^n$. A real analytic germ at $a$ is an equivalence class of real functions agreeing on a neighborhood of $a$, represented on some polydisc $|x_i-a_i|<r_i$, $r_i>0$, by an absolutely convergent series $f(x)=\sum_{\alpha\in\mathbb N^n}c_\alpha(x-a)^\alpha$ with real coefficients. Here $0\in\mathbb N$, $\alpha!=\prod_i\alpha_i!$, and $c_\alpha=D^\alpha f(a)/\alpha!$. A vector germ has a finite positive number of such components, with a common polydisc obtained by taking coordinatewise minima of their radii.

The multi-index convention and absolute convergence are those of [[def-multivariable-power-series]]; for $n=1$ this agrees with [[def-real-analytic-function]]. The same coefficients define the complexification. Indeed choose a positive real polyradius $s<r$; absolute convergence at $a+s$ bounds $|c_\alpha|s^\alpha$ uniformly. [[thm-power-series-define-holomorphic-functions-in-several-variables]] therefore gives a holomorphic sum on the complex $s$-polydisc and the displayed derivative formula. Restriction to the real slice recovers $f$.

Sources: Gantumur, §3, Definition 12 and equation (25), printed p. 7. Real restriction and finite-vector convention are spelled out locally.

Dependencies: `def-multivariable-power-series`, `def-real-analytic-function`, `thm-power-series-define-holomorphic-functions-in-several-variables`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `def-coefficientwise-majorisation-of-multivariable-power-series`

Claim/conventions: Fix a centre, $n\ge1$ coordinates, and ordinary coefficients as in [[def-multivariable-power-series]]. For formal series $f(z)=\sum_\alpha a_\alpha z^\alpha$ and $G(z)=\sum_\alpha b_\alpha z^\alpha$, write $f\ll G$ if for every $\alpha\in\mathbb N^n$ we have $|a_\alpha|\le b_\alpha$. In particular every $b_\alpha$ is real and nonnegative. For analytic series $a_\alpha=D^\alpha f(0)/\alpha!$; these are not the unnormalized derivatives. Vectors are compared component by component and must have the same number of components. No convergence is required for this relation.

Sources: Gantumur, §2 equation (12), printed p. 5; §3 equation (28), printed p. 7.

Dependencies: `def-multivariable-power-series`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`

Claim/conventions: For scalar formal series in finitely many variables, $f\ll F$ and $g\ll G$ imply $f+g\ll F+G$, $fg\ll FG$, and $\partial_jf\ll\partial_jF$. If $h_i\ll H_i$ and every $h_i,H_i$ has zero constant coefficient, then $f(h_1,\ldots,h_k)\ll F(H_1,\ldots,H_k)$. The same statements hold componentwise for finite vectors wherever the operations are defined. For convergent series these formal operations represent the corresponding analytic operations on sufficiently small polydiscs. If a convergent series $f$ has $f(0)\ne0$, its reciprocal is also analytic near zero.

Sources: Gantumur, §1 Exercise 3, printed p. 2; §3 equations (25), (28)–(30), pp. 7–8. The convolution and substitution arguments below provide the formal details.

Dependencies: `def-coefficientwise-majorisation-of-multivariable-power-series`, `thm-power-series-define-holomorphic-functions-in-several-variables`, `thm-geometric-series`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-an-analytic-germ-has-a-rational-geometric-majorant`

Claim/conventions: For any finite family of analytic germs $f_j$ in $n\ge1$ variables at zero there are $M,r>0$ such that $|[z^\alpha]f_j|\le Mr^{-|\alpha|}$ for every $j,\alpha$. Consequently $f_j\ll M/(1-(z_1+\cdots+z_n)/r)$, and $f_j-f_j(0)\ll M/(1-(z_1+\cdots+z_n)/r)-M$.

Sources: Gantumur, §3 equations (29)–(30), printed pp. 7–8; local proof uses polydisc Cauchy estimates.

Dependencies: `def-real-analytic-germ-in-several-variables`, `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`, `thm-cauchy-estimates-on-a-polydisc`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `thm-real-analytic-inverse-and-implicit-function-theorems`

Claim/conventions: Let $f$ be a real analytic map between open subsets of $\mathbb R^n$, $n\ge1$. If $Df(a)$ is invertible, $f$ has a real analytic local inverse near $f(a)$. Let $P(x,y)$ be real analytic near $(a,b)\in\mathbb R^d\times\mathbb R^k$, $k\ge1$, with $P(a,b)=0$ and $D_yP(a,b)$ invertible. On sufficiently small neighborhoods its zero set is exactly the graph of a unique real analytic $y=g(x)$ with $g(a)=b$.

Sources: Real inverse/implicit reduction used in Gantumur §5, printed p. 12. The local proof below derives the analytic assertion from the earlier holomorphic inverse theorem and power-series expansion.

Dependencies: `def-real-analytic-germ-in-several-variables`, `thm-power-series-define-holomorphic-functions-in-several-variables`, `thm-holomorphic-inverse-function-theorem-several-variables`, `cor-uniqueness-of-multivariable-power-series-coefficients`, `thm-power-series-expansion-in-several-complex-variables`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-analytic-ordinary-differential-systems-by-coefficient-majorants`

Claim/conventions: For an analytic map $H(t,v)$ near $(0,v_0)\in\mathbb R\times\mathbb R^N$, $N\ge1$, the problem $v^{\prime}=H(t,v)$, $v(0)=v_0$, has a unique analytic solution germ. If $v_0=0$ and all Taylor coefficients of $H$ at $(0,0)$ are nonnegative, then the solution has nonnegative Taylor coefficients.

Sources: Gantumur, §3 equations (26)–(34), printed pp. 7–8, Theorem 15. The autonomous augmentation and quadratic majorant below avoid the misnormalized scalar formula (18).

Dependencies: `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`, `lem-an-analytic-germ-has-a-rational-geometric-majorant`, `thm-real-analytic-inverse-and-implicit-function-theorems`, `thm-power-series-define-holomorphic-functions-in-several-variables`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form`

Claim/conventions: Let $m\ge1$. Suppose $\partial_t^m u=F(t,x,(\partial_x^\alpha\partial_t^j u)_{|\alpha|+j\le m,\ j<m})$ is analytic near the initial jet supplied by analytic functions $g_j(x)$, $0\le j<m$. The substitution $u=v+P$, $P(t,x)=\sum_{j=0}^{m-1}t^jg_j(x)/j!$, bijectively transforms solutions with $\partial_t^ju(0,x)=g_j(x)$ into solutions of a solved analytic equation with exactly the same allowed jet orders and zero Cauchy data.

Sources: Gantumur, §4 Corollary 20 proof, printed p. 11; the finite Taylor subtraction is computed locally.

Dependencies: `def-real-analytic-germ-in-several-variables`, `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`, `thm-symmetry-of-higher-mixed-partials`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-normal-form-pde-determines-a-unique-formal-taylor-series`

Claim/conventions: For $m\ge1$ and analytic $F$ near zero, the scalar zero-data equation $\partial_t^mu=F(t,x,(\partial_x^\alpha\partial_t^ju)_{|\alpha|+j\le m,\ j<m})$ has a unique formal series $u\in\mathbb R[[x,t]]$ with $\partial_t^ju(0,x)=0$ for $j<m$. For $m=1$ this also holds for finite systems $u_t=F(t,x,u,D_xu)$. No convergence is asserted. Analytic data reduce to this statement by subtraction of their normal Taylor polynomial.

Sources: Gantumur, §4 Theorem 18 proof, equations (41)–(43), printed p. 9; higher-order recursion is expanded locally.

Dependencies: `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`, `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion`

Claim/conventions: Let $d,N\ge1$ and $u_t=F(t,x,u,D_xu)$ have zero data, with $F(0)=0$ and every ordinary coefficient bounded in modulus by $Mr^{-q}$ at total degree q, where $M,r>0$. For $0<\rho\le1$ set $G(t,x,U,p)=M/((1-(\sum_i x_i+t/\rho+\sum_jU_j)/r)(1-\sum_{i,j}p_{ij}/r))-M$. Each component of F is majorised by G. If an analytic vector U solves $\partial_tU_j=G(t,x,U,D_xU)$, has $U(0,0)=D_xU(0,0)=0$, and has nonnegative Taylor coefficients in its trace $U(0,x)$, then the zero-data formal solution u is majorised componentwise by U at the origin.

Sources: Gantumur, §4 equations (42)–(46), printed pp. 9–10. Origin values and the possibly nonzero initial trace are distinguished here.

Dependencies: `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`, `lem-an-analytic-germ-has-a-rational-geometric-majorant`, `lem-normal-form-pde-determines-a-unique-formal-taylor-series`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution`

Claim/conventions: For integers $d,N\ge1$ and $M,r>0$, choose $0<\rho\le1$ with $a=1-dNM\rho/r>0$ and put $b=dN\rho/r$. The equation $a q-bq^2=M/(1-y/r)-M$ has a unique analytic branch $q=g(y)$ through $(0,0)$ with nonnegative coefficients. The solution of $v^{\prime}(\sigma)=g(\sigma/\rho+Nv(\sigma))$, $v(0)=0$, is analytic with nonnegative coefficients. Setting $U_j(t,x)=v(t+\rho\sum_i x_i)$ gives a convergent majorant system solution of the preceding lemma, with $U(0,0)=D_xU(0,0)=0$. Its initial trace $U(0,x)$ is nonnegative coefficientwise but need not vanish identically.

Sources: Gantumur, §4 equations (47)–(52) and Remark 19, printed p. 10.

Dependencies: `thm-real-analytic-inverse-and-implicit-function-theorems`, `lem-analytic-ordinary-differential-systems-by-coefficient-majorants`, `lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`

Claim/conventions: Let $d,N\ge1$, let $g:\mathbb R^d\to\mathbb R^N$ be analytic near zero, and let F be analytic near $(0,0,g(0),Dg(0))$. Then $u_t=F(t,x,u,D_xu)$, $u(0,x)=g(x)$ has a unique real analytic solution germ at $(0,0)$. Existence holds on a nonempty neighborhood; uniqueness is among analytic germs.

Sources: Gantumur, §4 Theorem 18, printed pp. 9–10; Corollary 20 proof, p. 11, for nonzero analytic data.

Dependencies: `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form`, `lem-normal-form-pde-determines-a-unique-formal-taylor-series`, `lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion`, `lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution`, `thm-power-series-define-holomorphic-functions-in-several-variables`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane`

Claim/conventions: Let $\phi$ be real analytic near $a\in\mathbb R^{d+1}$ with $\phi(a)=0$ and $d\phi(a)\ne0$. There are analytic coordinates $(x,t)$ with $t=\phi$ near a. For an analytic scalar equation $P(z,(D^\alpha u)_{|\alpha|\le m})=0$, $m\ge1$, the derivative of its transformed equation with respect to the pure normal m-jet equals the principal symbol of its linearization evaluated at $d\phi$. At a compatible m-jet where that scalar is nonzero the equation has a unique local analytic solved branch for the pure normal m-jet. Euclidean normal data mean $D^ju(X(x))[\nu(x),\ldots,\nu(x)]$, and can instead be flattened using analytic normal-line coordinates.

Sources: Gantumur, §5 equations (61)–(68), printed pp. 12–13. The linearization and analytic normal-line extensions are derived locally.

Dependencies: `thm-real-analytic-inverse-and-implicit-function-theorems`, `lem-principal-symbol-under-a-c-one-coordinate-change`, `def-characteristic-covector-hypersurface-and-noncharacteristic-data`, `thm-symmetry-of-higher-mixed-partials`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system`

Claim/conventions: For the scalar solved normal equation of order $m\ge1$ with allowed jets $|\alpha|+j\le m$, $j<m$, introduce $U_\beta$ for all $(d+1)$-multi-indices $|\beta|\le m-1$. With data $U_{(\alpha,j)}(0,x)=\partial_x^\alpha g_j(x)$ there is an analytic first-order system involving only these U and their first spatial derivatives whose analytic solution satisfies $U_\beta=D^\beta U_0$. Thus this system and the original scalar equation with its m data are equivalent.

Sources: Gantumur, §4 Corollary 20 and proof, equations (53)–(57), printed p. 11. The compatibility recovery is proved by formal uniqueness below.

Dependencies: `lem-normal-form-pde-determines-a-unique-formal-taylor-series`, `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`, `thm-symmetry-of-higher-mixed-partials`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem`

Claim/conventions: An analytic scalar PDE of total order $m\ge1$, locally solved for the highest normal derivative on an analytic noncharacteristic hypersurface, has a unique local real analytic solution germ for prescribed analytic normal jets through order m-1. In solved coordinates the allowed right-hand jets satisfy $|\alpha|+j\le m$ and $j<m$. For an implicit fully nonlinear equation fix a compatible m-jet and require a nonzero derivative in the highest normal jet there; existence and uniqueness hold in its selected local implicit branch. The data are required to induce the lower and mixed components of that compatible jet. Normal jets are the symmetric Euclidean derivatives along the unit normal at the surface, or jets in a specified analytic transverse coordinate.

Sources: Gantumur, §4 Corollary 20, printed p. 11, and §5 equations (61)–(68), pp. 12–13; the nonlinear selected-jet and normal-data conventions are explicit local extensions.

Dependencies: `lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane`, `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form`, `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`, `lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem`

Claim/conventions: [[thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem]] gives existence and uniqueness of analytic germs under its specified total-order and normal-order conditions. It does not assert an analytic solution for smooth nonanalytic initial data, or continuous dependence in any smooth topology. In particular an equation solved for a time derivative is not automatically in the required normal form: a right-hand derivative of higher total order violates that formulation. The proof above uses no recorded-not-proved CK result.

Sources: Gantumur, §4 Example 21 and §5 characteristic discussion, printed pp. 11–14; the analytic-germ theorem above fixes the local scope.

Dependencies: `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-majorising-a-two-variable-analytic-germ-by-a-geometric-series`

Claim/conventions: For $f(x,y)=x^2+1/(1-x-y)$ at the origin, $r=1/2$ and $M=2$ give $f\ll2/(1-2x-2y)$.

Sources: Gantumur, §3 Exercise 14, printed p. 8, supplies the geometric-majorant construction; this concrete polynomial perturbation and calculation are adapted locally.

Dependencies: `def-coefficientwise-majorisation-of-multivariable-power-series`, `lem-an-analytic-germ-has-a-rational-geometric-majorant`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-cauchy-kovalevskaya-for-an-analytic-transport-equation`

Claim/conventions: For a fixed $a\in\mathbb R^d$ and analytic g near zero, the problem $u_t+a\cdot D_xu=0$, $u(0,x)=g(x)$ has the analytic solution $u(t,x)=g(x-at)$ near zero.

Sources: Gantumur, §5 transport discussion following Exercise 24, printed p. 14; the constant-vector solution is computed locally.

Dependencies: `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`, `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`, `thm-chain-rule-for-total-derivatives`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-cauchy-kovalevskaya-for-a-second-order-normal-form`

Claim/conventions: For analytic g,h, the equation $u_{tt}=u_{xx}$ with data $u(0,x)=g(x)$, $u_t(0,x)=h(x)$ is equivalent to $u_t=v$, $v_t=w_x$, $w_t=v_x$, with data $(u,v,w)(0,x)=(g,h,g^{\prime})$.

Sources: Gantumur, §4 Corollary 20 and equations (55)–(57), printed p. 11; scalar wave specialization computed locally.

Dependencies: `lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet`

Claim/conventions: Analytic Cauchy data on a characteristic analytic surface need not determine a unique analytic solution or even admit a solution. For $u_x=0$ in $(x,t)$ on the surface t=0, zero trace data have infinitely many analytic solutions, while trace $u(x,0)=x$ admits no differentiable solution near zero.

Sources: Gantumur, §5 transport discussion after Exercise 24, printed p. 14.

Dependencies: `def-characteristic-covector-hypersurface-and-noncharacteristic-data`, `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cex-smooth-nonanalytic-data-need-not-have-an-analytic-solution`

Claim/conventions: Smooth initial data do not suffice for an analytic solution germ even for $u_t=0$. Define $g(0)=0$ and $g(x)=\exp(-1/x^2)$ for $x\ne0$. This g is smooth and nonanalytic at zero. The problem $u_t=0$, $u(0,x)=g(x)$ has the smooth solution u=g(x), but has no analytic solution germ at $(0,0)$.

Sources: Ageno, §2.4.1, PDF p. 28, nonanalytic Cauchy-data limitation; the flat-function witness and its derivatives are proved locally.

Dependencies: `def-real-analytic-germ-in-several-variables`, `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`, `thm-exponential-beats-every-polynomial`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `cor-exponential-reciprocal-and-positivity`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cex-analytic-heat-data-can-have-divergent-time-taylor-series`

Claim/conventions: Analytic initial data alone do not guarantee time-analytic solvability of $u_t=u_{xx}$. For $u(0,x)=1/(1+x^2)$, any analytic solution at zero would have $\partial_t^ku(0,0)=(-1)^k(2k)!$ for every k, and its time Taylor series would have radius zero.

Sources: Gantumur, §4 Example 21, printed p. 11; Ageno §2.4.1, PDF p. 28, specifies the data 1/(1+x²).

Dependencies: `lem-normal-form-pde-determines-a-unique-formal-taylor-series`, `rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem`, `thm-symmetry-of-higher-mixed-partials`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence`

Claim/conventions: For positive integers k the harmonic analytic functions $u_k(x,t)=e^{-\sqrt{k}}\sinh(kt)\cos(kx)/k$ have zero value data and normal data $e^{-\sqrt{k}}\cos(kx)$ tending to zero in every $C^j$ seminorm on compact x-intervals, but $u_k(0,t)\to+\infty$ for every fixed t>0. Thus analytic solvability gives no continuous solution map from that smooth-data topology to pointwise evaluation at any positive time.

Sources: Ageno, §2.4.1 Hadamard example, PDF pp. 28–29. The factor exp(-sqrt(k)) is a local strengthening making all fixed derivative seminorms tend to zero.

Dependencies: `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem`, `thm-exponential-beats-every-polynomial`, `thm-sine-and-cosine-derivatives`, `thm-derivative-of-exponential`, `cor-trigonometric-parity-and-pythagorean-identity`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `def-bounded-c-one-domain-boundary-charts-and-outward-normal`

Claim/conventions: Throughout this surface-integration page assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the earlier Lebesgue and polar measure machinery. Let $n\ge2$. A bounded $C^1$ domain is a nonempty bounded open set $\Omega\subset\mathbb R^n$ whose boundary is locally, after a rigid change of coordinates, the graph $z=h(y)$ of a $C^1$ function, with $\Omega$ locally exactly the subgraph $z<h(y)$. Connectedness is not required. The outward normal in these coordinates is $\nu=(-Dh,1)/\sqrt{1+|Dh|^2}$, transported by the orthogonal coordinate map. Its overlap agreement is justified with surface charts below.

The convention $F\in C^1(\overline\Omega)$ means F is continuously differentiable in $\Omega$, and F and its first derivatives extend continuously to its closure. For $C^2$ require the same for derivatives through order two. No ambient extension across the boundary is required. Derivatives use [[def-total-derivative-in-euclidean-space]]; products are the real Euclidean inner products of [[def-inner-product-space]]. Write $\operatorname{div}F=\sum_i\partial_iF_i$, $Du=(\partial_iu)_i$ and $\Delta u=\sum_i\partial_i^2u$.

Sources: Hunter, §1.10 Definitions 1.34–1.35 and §1.10.3, printed pp. 13–16 (PDF pp. 19–22). Interior-up-to-boundary regularity is the local convention.

Dependencies: `def-total-derivative-in-euclidean-space`, `def-inner-product-space`, `def-countable-choice`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`

Claim/conventions: Assume $\mathrm{AC}_\omega$. For $n\ge1$ there is a fixed smooth $b:\mathbb R^n\to[0,1]$, equal to one on $\overline B_1(0)$ and with support contained in $B_2(0)$. For $a\in\mathbb R^n,r>0$, $b_{a,r}(x)=b((x-a)/r)$ satisfies $\int|Db_{a,r}|=C_nr^{n-1}$, where $C_n=\int|Db|<\infty$. For every $0<r<R$ one can instead obtain a smooth bump equal to one on $\overline B_r(a)$ and supported strictly inside $B_R(a)$.

Sources: Hunter, §1.9.1 Theorem 1.29 and Example 1.30, printed p. 12. The strict support margin and exact gradient scaling are computed locally.

Dependencies: `def-the-standard-smooth-step-function`, `thm-chain-rule-for-total-derivatives`, `thm-algebra-of-derivatives`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-monotone-convergence-for-the-integral`, `def-countable-choice`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-finite-ambient-partitions-for-euclidean-boundary-integration`

Claim/conventions: Under the page measure convention, if a finite family of open sets $U_j\subset\mathbb R^n$ covers compact K, there are smooth nonnegative $\chi_j$ with compact support in $U_j$ such that $\sum_j\chi_j=1$ on a neighborhood of K. These are ambient smooth functions, also when K is only a $C^1$ hypersurface.

Sources: Hunter, §1.9.2 Theorem 1.31, printed pp. 12–13. A finite normalized-bump construction is supplied here.

Dependencies: `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`, `thm-heine-borel-rn`, `thm-algebra-of-derivatives`, `def-the-standard-smooth-step-function`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `def-surface-integral-on-a-compact-c-one-hypersurface`

Claim/conventions: Assume the $\mathrm{AC}_\omega$ convention of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]. Let S be a compact embedded $C^1$ hypersurface in $\mathbb R^n$, $n\ge2$. Choose finitely many regular injective $C^1$ parametrizations $X_j:V_j\to S\cap O_j$ with $C^1$ coordinate transitions, and an ambient partition $\chi_j$ from [[lem-finite-ambient-partitions-for-euclidean-boundary-integration]], with supports compactly contained in the corresponding chart neighborhoods. Put $J_{X_j}=\sqrt{\det(DX_j^TDX_j)}$, using [[def-gram-matrix-and-gram-determinant]].

For a nonnegative Borel f on S define $\int_S f\,dS=\sum_j\int_{V_j}(\chi_j f)(X_j(y))J_{X_j}(y)\,dy$, where the integrals on the right are those of [[def-nonnegative-lebesgue-integral]] and $0\cdot\infty=0$. Set $S(A)=\int_S\mathbf1_A\,dS$ for Borel A. For signed f with $\int_S|f|\,dS<\infty$ use the difference of the positive and negative integrals. The same chart formula restricts to a compact Borel face contained in a regular patch. The empty surface has zero integral. Independence and finiteness are established by the following chart-independence lemma.

Sources: Hunter, §1.10.2, printed p. 15 (PDF p. 21), Gram surface density and partition patching.

Dependencies: `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `lem-finite-ambient-partitions-for-euclidean-boundary-integration`, `def-gram-matrix-and-gram-determinant`, `def-nonnegative-lebesgue-integral`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $m\ge1$, let U,V be open subsets of $\mathbb R^m$, and let $T:U\to V$ be a $C^1$ diffeomorphism. For every nonnegative Borel $h:V\to[0,\infty]$, $\int_V h(y)\,dy=\int_U h(T(x))|\det DT(x)|\,dx$, with equality in $[0,\infty]$ and $0\cdot\infty=0$. This statement concerns Borel h; no completed-measurable substitution is asserted.

Sources: Hunter, §1.11 Theorem 1.44, printed p. 17 (PDF p. 23), for the substitution statement. The Darboux bridge and Radon-uniqueness proof below are local, and do not consume the defective published compact-support Lebesgue or measurable-C1 proofs.

Dependencies: `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `cor-second-countable-lch-locally-finite-borel-measures-are-regular`, `thm-rmk-uniqueness-among-radon-measures`, `thm-monotone-convergence-for-the-integral`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `def-countable-choice`, `cor-change-of-variables-for-compactly-supported-functions`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-multidimensional-darboux-equals-riemann`, `def-multidimensional-darboux-sums`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-surface-integral-is-independent-of-c-one-boundary-charts`

Claim/conventions: Assume $\mathrm{AC}_\omega$. The chart integral on a compact embedded $C^1$ hypersurface defines a finite Borel measure independent of the finite charts and subordinate partitions. In graph coordinates $X(y)=(y,h(y))$ its density is $\sqrt{1+|Dh|^2}$. On a one-sided domain boundary the outward unit normal agrees on chart overlaps and is continuous.

Sources: Hunter, §1.10.2–1.10.3, printed pp. 15–16, Gram density and graph normal. Overlap independence is proved by the full determinant and Borel substitution calculation.

Dependencies: `def-surface-integral-on-a-compact-c-one-hypersurface`, `thm-gram-determinant-detects-linear-independence`, `thm-determinant-multiplicative`, `thm-determinant-of-transpose`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `thm-chain-rule-for-total-derivatives`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-local-graph-flux-from-fubini-and-the-fundamental-theorem`

Claim/conventions: Assume $\mathrm{AC}_\omega$. In a graph cylinder $Q\times(a,b)$ with $h\in C^1(Q)$ and $a<h<b$, suppose $\Omega$ locally is $z<h(y)$ and $F\in C^1(\overline\Omega;\mathbb R^n)$ is localized with support compactly contained in the cylinder. Then $\int_\Omega\operatorname{div}F=\int_Q(F_n(y,h(y))-\sum_{i<n}F_i(y,h(y))\partial_i h(y))\,dy$. An interior compactly supported C1 vector field has integral divergence zero.

Sources: Hunter §1.12, printed pp. 17–18; Oh §3.9, Proposition 3.23 graph calculation, printed/PDF pp. 47–48. The endpoint calculation below uses only classical FTC and Fubini.

Dependencies: `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-newton-leibniz-with-interior-derivative`, `thm-differentiation-under-the-integral-sign`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-algebra-of-derivatives`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`

Claim/conventions: Assume $\mathrm{AC}_\omega$. For $n\ge2$, a bounded $C^1$ domain Omega and $F\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$. Both integrals are finite, with the continuous interior derivative convention and the outward normal on every boundary component.

Sources: Hunter §1.12 Theorem 1.46, printed pp. 17–18; Oh §3.9 Proposition 3.23, printed/PDF pp. 47–48, for the local-to-global proof.

Dependencies: `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `lem-finite-ambient-partitions-for-euclidean-boundary-integration`, `lem-local-graph-flux-from-fubini-and-the-fundamental-theorem`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-algebra-of-derivatives`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `def-bounded-piecewise-c-one-euclidean-domain`

Claim/conventions: Under the $\mathrm{AC}_\omega$ convention of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], a finite piecewise $C^1$ presentation of a nonempty bounded open $\Omega\subset\mathbb R^n$, $n\ge2$, consists of compact faces $S_1,\ldots,S_q$ covering its boundary, each a compact Borel subset of a regular $C^1$ hypersurface patch, and a compact edge set $E\subset\partial\Omega$. Require $S_j\cap E$ to have surface measure zero in each face, using [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]. E contains the boundaries of the faces relative to their patches and every overlap $S_i\cap S_j$, i different from j. At every point outside E the domain boundary is locally a single $C^1$ graph with Omega on one side. Each face carries this actual outward unit normal off E. Values assigned to the normal on E do not affect its integral.

For a specified finite gluing also list the open pieces with disjoint interiors, the shared faces, and their opposite outward normals. Require the pieces to cover the final domain up to their boundary faces, and the exposed faces to give its specified presentation. Internal faces are counted twice before cancellation, once from each side. The phrase piecewise smooth by itself supplies none of this data.

Sources: Hunter §1.12, printed p. 18, mentions the piecewise extension. The exact finite-face/null-edge class is the explicit local presentation retained in the batch design.

Dependencies: `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `lem-surface-integral-is-independent-of-c-one-boundary-charts`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-surface-null-edges-admit-small-gradient-cutoffs`

Claim/conventions: Assume $\mathrm{AC}_\omega$ and $n\ge2$. Let E be a compact subset of finitely many compact regular $C^1$ hypersurface patches, with its intersection with each patch surface-null. For every $\varepsilon>0$ there is smooth $0\le\eta\le1$, equal to one near E, supported within distance epsilon of E, such that $\int_{\mathbb R^n}|D\eta|<\varepsilon$. These cutoffs can be chosen with support volume tending to zero as epsilon tends to zero.

Sources: Hunter §1.10.2 and §1.12, printed pp. 15–18, for the surface convention and motivation only. The complete cube-cover and scaled-bump argument is local, as retained in research/phase-2-local-mathematical-repairs-2026-09-08.md, §PDE-2D.

Dependencies: `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure`, `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`, `thm-linear-change-of-variables-for-lebesgue-measure`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`

Claim/conventions: Assume $\mathrm{AC}_\omega$. If Omega has the specified finite piecewise $C^1$ presentation and $F\in C^1(\overline\Omega;\mathbb R^n)$, then $\int_\Omega\operatorname{div}F=\sum_j\int_{S_j}F\cdot\nu_j\,dS$, with faces counted once off E. All integrals are finite. In a specified finite gluing, the two fluxes on every shared face cancel.

Sources: Hunter §1.12, printed p. 18, for the stated piecewise extension; the edge-error limit is proved locally under the exact finite presentation.

Dependencies: `def-bounded-piecewise-c-one-euclidean-domain`, `lem-surface-null-edges-admit-small-gradient-cutoffs`, `lem-finite-ambient-partitions-for-euclidean-boundary-integration`, `lem-local-graph-flux-from-fubini-and-the-fundamental-theorem`, `thm-dominated-convergence`, `thm-algebra-of-derivatives`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`

Claim/conventions: Assume $\mathrm{AC}_\omega$ and $n\ge2$. The chart surface measure on $S^{n-1}$ equals the polar measure $\sigma$. Orthogonal transformations preserve it. The map $\omega\mapsto a+R\omega$, $R>0$, multiplies surface measure by $R^{n-1}$, and $|S^{n-1}|=n|B_1|$.

Sources: Hunter §1.11, Proposition 1.45 and its preceding sphere parametrization, printed pp. 16–17 (PDF pp. 22–23). The identification with the existing cone-defined measure is proved here.

Dependencies: `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `def-classical-normal-derivative`

Claim/conventions: For a bounded $C^1$ domain $\Omega$ and $u\in C^1(\overline\Omega)$, the classical normal derivative is $\partial_\nu u(x)=Du(x)\cdot\nu(x)$ on $\partial\Omega$. Here Du is the continuous extension of the interior gradient and $\nu$ is the outward unit normal. For a specified finite piecewise $C^1$ presentation define the same expression on each face off its edge set E; arbitrary values on E do not change a surface integral. This definition uses a classical continuous trace, and asserts neither a Sobolev trace nor a conormal derivative.

Sources: Hunter §2.5, immediately before Theorem 2.23, printed p. 32 (PDF p. 38).

Dependencies: `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `def-bounded-piecewise-c-one-euclidean-domain`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cor-first-green-identity-on-a-bounded-c-one-domain`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain or have the specified finite piecewise $C^1$ presentation. For real $u\in C^2(\overline\Omega)$ and $v\in C^1(\overline\Omega)$, $$\int_\Omega(v\Delta u+Du\cdot Dv)\,dx=\int_{\partial\Omega}v\partial_\nu u\,dS.$$ In the piecewise case the right side is the sum over faces, counted once off E. All integrals are finite.

Sources: Hunter §2.5, Theorem 2.23, equation (2.11) and its proof, printed p. 32 (PDF p. 38); the weaker C1 assumption on v follows from the displayed product computation.

Dependencies: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `def-classical-normal-derivative`, `thm-algebra-of-derivatives`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cor-second-green-identity-on-a-bounded-c-one-domain`

Claim/conventions: Assume $\mathrm{AC}_\omega$. For a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$, or the specified finite piecewise $C^1$ class, and real $u,v\in C^2(\overline\Omega)$, $$\int_\Omega(v\Delta u-u\Delta v)\,dx=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)\,dS.$$ The face convention and finiteness are those of the first Green identity; every normal is outward from Omega, including normals on holes.

Sources: Hunter §2.5, Theorem 2.23, equation (2.12) and proof, printed p. 32 (PDF p. 38).

Dependencies: `cor-first-green-identity-on-a-bounded-c-one-domain`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `rem-euclidean-divergence-versus-classical-and-manifold-stokes`

Claim/conventions: The Euclidean results here prove the divergence identity in every dimension $n\ge2$ from graph integration, a finite partition, and explicit edge cutoffs. The earlier three-dimensional finite-gluing vector-calculus result is a narrower comparison. In the later smooth differential-form setting, the flux form $\iota_F(dx_1\wedge\cdots\wedge dx_n)$ has exterior derivative $(\operatorname{div}F)dx_1\wedge\cdots\wedge dx_n$, so manifold Stokes specializes to the smooth-boundary formula. That comparison supplies no dependency for this proof. Neither rough-boundary divergence nor Sobolev traces are asserted here.

Sources: Hunter §1.12, Theorem 1.46 and ensuing discussion, printed pp. 17–18 (PDF pp. 23–24). The manifold comparison is a forward explanatory comment, not a theorem used in this batch.

Dependencies: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`.

Decision: proof written independently of scaffold strategy; definition/remark, no proof claimed. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-surface-density-and-outward-normal-on-a-graph`

Claim/conventions: For a subgraph $z<h(y)$ in $\mathbb R^n$, the boundary chart $X(y)=(y,h(y))$ has $dS=\sqrt{1+|Dh|^2}\,dy$ and $\nu\,dS=(-Dh,1)\,dy$. If $h(y)=a\cdot y+b$, both factors are constant. In $\mathbb R^3$, the patch $h(y_1,y_2)=2y_1-y_2+3$, $0<y_1,y_2<1$, has area $\sqrt6$ and upward flux 1 for $F=e_3$. Assume the surface-measure convention $\mathrm{AC}_\omega$.

Sources: Hunter §1.11, graph surface element and Example 1.43, printed p. 16 (PDF p. 22). The affine numerical instance is computed here.

Dependencies: `lem-surface-integral-is-independent-of-c-one-boundary-charts`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-divergence-theorem-on-a-ball-in-rn`

Claim/conventions: Assume $\mathrm{AC}_\omega$, $n\ge2$, and $R>0$. On $B_R(a)$, $F(x)=x-a$ gives $|\partial B_R(a)|=n|B_R(a)|/R=R^{n-1}|S^{n-1}|$. Constant vector fields have zero total flux. If $f\in C^1((0,R])$ and $F(x)=f(|x-a|)(x-a)$ admits a C1 extension to the closed ball, its flux is $f(R)R|\partial B_R(a)|$.

Sources: Hunter §1.11, sphere element and Proposition 1.45, printed pp. 16–17, and §1.12 Theorem 1.46, printed p. 17 (PDF pp. 22–23). These radial-field instances are evaluated directly.

Dependencies: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-internal-face-cancellation-for-two-glued-regions`

Claim/conventions: Assume $\mathrm{AC}_\omega$ and $n\ge2$. The boxes $Q_-=(-1,0)\times(0,1)^{n-1}$ and $Q_+=(0,1)\times(0,1)^{n-1}$ glue to $Q=(-1,1)\times(0,1)^{n-1}$ up to their common face. For $F\in C^1(\overline Q;\mathbb R^n)$ their divergence identities sum to the identity on Q because the common fluxes cancel. The same calculation applies after replacing the coordinate intervals by arbitrary positive-length adjacent intervals.

Sources: Hunter §1.12, discussion following Theorem 1.46, printed p. 18 (PDF p. 24). The faces and field calculation below make the finite-gluing instance explicit.

Dependencies: `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cex-reversing-boundary-orientation-reverses-flux`

Claim/conventions: The claim that the divergence formula remains valid with the inward unit normal is false. A witness is $F(x)=x$ on $B_R(0)\subset\mathbb R^n$, $n\ge2$, $R>0$: the inward flux is $-n|B_R|$ but the divergence integral is $n|B_R|>0$. Use $\mathrm{AC}_\omega$ for the integration convention.

Sources: Hunter §1.12 Theorem 1.46, printed p. 17 (PDF p. 23), explicitly requires the outward normal. This sign counterexample is its ball specialization.

Dependencies: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `ex-divergence-theorem-on-a-ball-in-rn`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `cex-a-corner-is-not-covered-by-the-single-c-one-chart-theorem`

Claim/conventions: The claim that every finite piecewise $C^1$ domain is a $C^1$-boundary domain is false. For $n\ge2$, the box $Q=(0,1)^n$ has a finite piecewise $C^1$ presentation, but at any edge or vertex its boundary has no single regular one-sided $C^1$ graph chart.

Sources: Hunter Definition 1.35, printed p. 14, and the piecewise-boundary comparison after Theorem 1.46, printed p. 18 (PDF pp. 20 and 24). The normal-limit contradiction is supplied here.

Dependencies: `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `def-bounded-piecewise-c-one-euclidean-domain`, `ex-internal-face-cancellation-for-two-glued-regions`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.

### Authored checkpoint: `ex-punctured-domains-and-truncated-cones-with-explicit-faces`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Removing $\overline B_r(a)\subset\Omega$ from a bounded $C^1$ domain, with positive distance from $\partial\Omega$ and r>0, adds the boundary normal $-(x-a)/r$ on the hole. In spatial dimension $d\ge1$, let $a_0<b_0$ and $R(t)=R_0+c(t-a_0)>0$ on $[a_0,b_0]$. The space-time region $K=\{(x,t):a_0<t<b_0,\ |x|<R(t)\}$ has a specified finite piecewise $C^1$ presentation with bottom, top, and lateral faces. The lateral outward normal is $(x/|x|,-c)/\sqrt{1+c^2}$. Its divergence formula passes to a conical tip by truncation for fields whose values and first interior derivatives extend continuously and boundedly to the tip.

Sources: Hunter §1.12, Theorem 1.46 and piecewise-boundary discussion, printed pp. 17–18 (PDF pp. 23–24). The hole orientation, cone presentation, and all three tip estimates are explicitly derived here, rather than attributed to an unstated rough-boundary theorem.

Dependencies: `def-bounded-piecewise-c-one-euclidean-domain`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

Decision: proof written independently of scaffold strategy; numbered derivations and boundary cases recorded in the owned contract. Checks: not yet run. Open gaps: none identified in this item; batch remains in progress. Next: next manifest item, then required checks.


### Final authoring reconciliation — batch 10

All assigned inputs were present and read: the batch manifest, notes, coverage,
task/design sections, group-c Step-3 verdicts and scaffold review, SCHEMA, and
current dependency statements. The original 44 IDs, their page assignment, and
all four promised pages are retained. No scope removal or plan restructuring is
proposed. The eight definitions/remarks retain `proof: not-applicable`; the 36
proof-bearing items contain actual numbered arguments. Each contract derivation
records its completed paragraph and actual inputs, with source excerpts including
the source hypotheses. Boundary evidence refers to the final canonical step IDs.

Completed page and item IDs:

- Page `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`, at `library/pde/analytic-majorants-and-the-cauchy-kovalevskaya-theorem.md` (15 items):
  - `def-real-analytic-germ-in-several-variables`
  - `def-coefficientwise-majorisation-of-multivariable-power-series`
  - `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation`
  - `lem-an-analytic-germ-has-a-rational-geometric-majorant`
  - `thm-real-analytic-inverse-and-implicit-function-theorems`
  - `lem-analytic-ordinary-differential-systems-by-coefficient-majorants`
  - `lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane`
  - `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form`
  - `lem-normal-form-pde-determines-a-unique-formal-taylor-series`
  - `lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion`
  - `lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution`
  - `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`
  - `lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system`
  - `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem`
  - `rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem`

- Page `analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples`, at `library/pde/analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples.md` (7 items):
  - `ex-majorising-a-two-variable-analytic-germ-by-a-geometric-series`
  - `ex-cauchy-kovalevskaya-for-an-analytic-transport-equation`
  - `ex-cauchy-kovalevskaya-for-a-second-order-normal-form`
  - `cex-smooth-nonanalytic-data-need-not-have-an-analytic-solution`
  - `cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet`
  - `cex-analytic-heat-data-can-have-divergent-time-taylor-series`
  - `cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence`

- Page `euclidean-surface-measure-divergence-and-green-identities`, at `library/pde/euclidean-surface-measure-divergence-and-green-identities.md` (16 items):
  - `def-bounded-c-one-domain-boundary-charts-and-outward-normal`
  - `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound`
  - `lem-finite-ambient-partitions-for-euclidean-boundary-integration`
  - `def-surface-integral-on-a-compact-c-one-hypersurface`
  - `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
  - `lem-surface-integral-is-independent-of-c-one-boundary-charts`
  - `lem-local-graph-flux-from-fubini-and-the-fundamental-theorem`
  - `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`
  - `def-bounded-piecewise-c-one-euclidean-domain`
  - `lem-surface-null-edges-admit-small-gradient-cutoffs`
  - `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`
  - `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`
  - `def-classical-normal-derivative`
  - `cor-first-green-identity-on-a-bounded-c-one-domain`
  - `cor-second-green-identity-on-a-bounded-c-one-domain`
  - `rem-euclidean-divergence-versus-classical-and-manifold-stokes`

- Page `euclidean-surface-measure-divergence-and-green-identities-examples`, at `library/pde/euclidean-surface-measure-divergence-and-green-identities-examples.md` (6 items):
  - `ex-surface-density-and-outward-normal-on-a-graph`
  - `ex-divergence-theorem-on-a-ball-in-rn`
  - `ex-internal-face-cancellation-for-two-glued-regions`
  - `cex-reversing-boundary-orientation-reverses-flux`
  - `cex-a-corner-is-not-covered-by-the-single-c-one-chart-theorem`
  - `ex-punctured-domains-and-truncated-cones-with-explicit-faces`

### Checks actually run and outcomes

- `node tools/tsx-run.mjs tools/precheck.mts` with all 44 manifest item paths
  explicitly expanded as command arguments: final result **36 checked, 0
  failing**. Eight definitions/remarks have no proof-like section and are
  intentionally skipped. The initial run requested phase repairs. Canonical
  numbering and the independent-step ordering in the Borel proof were adopted;
  source uses, derivations, and boundary references were reconciled to that order.
- The requested bare `node tools/validate-plan.mjs` was run and returned usage
  (exit 2): this version requires a plan path. The concrete invocation
  `node tools/validate-plan.mjs research/plan-spec.json` was then run and passed
  (exit 0): no item cycles, forward dependencies, B-page dependency violations,
  or unresolved IDs in the plan's listed inventory. It reports existing
  redundant-prerequisite warnings and 683 planned pages without item lists.
  Those plan diagnostics were not repaired by editing plans.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-10.pages.json`:
  **44 scoped items, 0 errors, 0 warnings**. An earlier run exposed the checker's
  nested-list indentation requirement; all owned source-reference lists were
  serialized in canonical indented YAML and the check rerun.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-10.proof-contracts.json --strict`:
  **44/44 items, 0 errors, 0 warnings** after exact excerpt, boundary-anchor,
  and canonical source-use repairs. A separate paragraph-to-contract comparison
  checks that each derivation claim is the actual corresponding proof paragraph;
  it is an evidence-consistency check, not mathematical proof.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` was
  run after dependency edits. The owned consumer input is `[]`: the added
  suppliers are earlier published items or items within this batch, not another
  consumer batch's frontier. The input was atomically preserved and the unified
  ledger refreshed with the tool, never edited by hand.

- Final owned-file integrity check: **44 draft items, four draft pages, and 112
  exact proof-paragraph/contract claim mappings**; manifest dependency and
  provenance fields agree with item frontmatter, page lists agree with the
  manifest, and no judge stamps occur. Scoped `git diff --check` returned exit
  0; a separate check including untracked owned files found no trailing whitespace.

### Provenance and source decisions

Current browser text was read in bounded, overlapping passages from Gantumur
§§1–5 (printed/PDF pp. 1–14), Ageno Remarks 2.11–2.12 and complete §§2.3–2.4.1
(PDF pp. 19–29), Hunter's relevant cutoff, boundary, surface, and divergence
passages in §§1.9–1.12 (printed pp. 11–18; PDF pp. 17–24), Hunter Theorem 2.23
and its complete proof (printed p. 32; PDF p. 38), and Oh §3.9 Proposition 3.23
with its graph/partition proof (printed/PDF pp. 47–48). Per-item reference
locators identify the actual document and passage. Earlier fetch receipts and
independent reviews are preserved; no new shell download is claimed.

The analytic theorem statements remain literature-derived where they retain the
source claim. Locally adapted examples, the precise finite-face definition, and
the edge-cutoff statement are tagged `ai-altered` rather than described as literal
source constructions. The Borel substitution and cutoff proofs retain
`proof: ai-generated` for their locally supplied arguments. Other source-adapted
proofs use `ai-altered`. No item has an AI-generated statement, so there are no
generated statement dependency targets or missing generation roles. The domain
normal and surface-integral definitions use `justified_by` for chart independence.
No forward or unproved external theorem is consumed.

Specific mathematical decisions and evidence:

- The ODE majorant is explicitly $W-LW^2/(2r)=Mt$, with
  $W=(r/L)(1-\sqrt{1-2LMt/r})$. Its derivative, coefficient positivity,
  positive convergence neighborhood, and finite singular endpoint are recorded.
  Gantumur equation (18)'s missing factor two and Theorem 9's misplaced initial
  analyticity point are not copied.
- The Goursat construction works for every stated admissible rho and also gives
  an explicit permissible choice. Its value and spatial gradient vanish at the
  origin; its whole initial trace need not vanish. The positive comparison proof
  uses precisely this weaker trace hypothesis.
- Higher-order jet compatibility is recovered through the scalar and vector
  formal recursions. The spatial-dimension-zero specialization uses the already
  proved analytic ODE supplier. The final CK result fixes compatible lower and
  mixed data and the implicit highest-jet branch. Normal derivatives use the
  symmetric tensor with multinomial coefficients; Ageno Definition 2.15's
  unweighted multi-index display is not adopted.
- Analytic heat failure is a forced-coefficient contradiction. Hadamard's
  explicit harmonic sequence is rescaled by exp(-sqrt(k)), and all fixed
  smooth-data seminorms and the positive-time blowup are calculated. No harmonic
  regularity or misquoted Holmgren conclusion is used.
- Borel substitution constructs both Radon measures, proves the two
  measure-integration identities, and applies test-function uniqueness only
  afterward. The Darboux squeeze includes the Riemann/Lebesgue bridge locally.
  The known defective published completed-measurable substitution and
  compact-support bridge are not suppliers.
- Bumps have a strict intermediate support radius. Edge covers produce both
  the small L1 gradient and vanishing support volume. The piecewise proof uses
  these bounds and facewise dominated convergence. Its direct Fubini and rigid
  substitution suppliers are now declared.
- Sphere comparison uses annular Borel cones and the existing polar formula,
  followed by the Gram scaling calculation. The graph examples include affine
  and hemisphere densities, and the ball example includes spherical-coordinate
  density and a second moment. Green identities expand and subtract their
  actual vector fields.
- Hole orientation is inward toward the removed ball. The cone has explicit
  finite sphere-cell faces, cap/rim data, and the two-ray d=1 case. The cap,
  omitted volume, and lateral errors are respectively O(delta^d),
  O(delta^(d+1)), and O(delta^d); all three are bounded in the final proof.
  This completes the local argument behind the older coverage note that left
  the piecewise-route source obligation open. Hunter's brief extension remark
  is not presented as a complete proof of those estimates.

### Unresolved obligations and handoff

No missing input, unfinished mathematical argument, or proposed scope narrowing
remains identified in this batch. The exact finite-face class, Borel-only local
substitution, and analytic-germ uniqueness are the retained Step-3 scope, not
new removals. Existing published Phase-3 defects and the plan's redundant-edge
warnings remain outside this edit scope; none is treated as a repaired theorem
or used to certify the new arguments. Checks establish structural and evidence
consistency only. These are completed author drafts for the owning Alpha's next
review, without a judge verdict, publication stamp, or workflow transition.

### Author-check repair — d24fbf91342d (2026-09-08)

Item: `lem-normal-form-pde-determines-a-unique-formal-taylor-series`.
Both findings in `research/phase-2-wave-1-author-check-10.json` concern literal
adjacent square brackets in the statement and step 1.1. Replaced them with
`\lbrack\lbrack` and `\rbrack\rbrack` in the draft, synchronized the manifest
statement and the contract's exact step-1.1 claim. These denote the same real
formal power-series rings in x,t and x. The scalar m>=1 and finite first-order
system claims, zero data, nonconvergence convention, and steps 1.1–3.1 are
unchanged. Source locator remains Gantumur, §4 Theorem 18 proof, equations
(41)–(43), printed p. 9; no new mathematical inference or source claim was added.
Dependencies remain the coefficient-majorisation lemma and zero-data-reduction
lemma recorded above. No dependency edit occurred, so the empty consumer input
requires no update. No judge stamp was present.

Detector disposition: these were valid renderer-compatibility findings, not
mathematical errors or a demonstrated detector defect. The detector recognizes
literal `[[` inside math as reserved wikilink syntax; explicit LaTeX bracket
commands avoid that collision without changing the notation's meaning. Tools
and independent review records were preserved.

Focused checks after the edit (all exit 0): rendercheck on the manifest's 44
items and four pages, 48/48 clean with real KaTeX parsing; precheck with all 44
explicit item paths, 36 proof-bearing items passing; content-policy on this
batch manifest, 44 items with zero errors/warnings; strict proof-contract,
44/44 with zero errors/warnings. These are structural checks, not a new
independent mathematical review. All reported author-check findings are
addressed. Open repair gaps: none. Next action: build driver reruns the author
check and creates its pre-Step-6 hash artifact; this author dispatch does not
change workflow state.
