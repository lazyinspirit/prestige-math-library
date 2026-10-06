# Proposed heat B1 scope repair

This isolated sidecar proposes replacements for batch 1 pages and coverage. It does not edit the canonical manifests, plan, library, items, ledger, engine state or decisions. It is scaffold evidence, not authored proof certification. The owner must integrate it and refresh affected readiness evidence after authoring.

## Controlling evidence

- Exact receipt: `research/frontier-39-analysis-30-step3a-review-heat-equation-maximum-principles-duhamel-and-smoothing.json`; exact report: `research/frontier-39-analysis-30-step3a-pair-heat-equation-maximum-principles-duhamel-and-smoothing.md`.
- Base manifest/coverage: `research/frontier-39-analysis-30-batch-1.pages.json` and `.coverage.json`; base plan: `research/plan-pde-track.md:1127`, through line 1181. The base plan promises classical Duhamel first for **smooth compact support**, then the mild class. It does not promise that every continuous forcing yields all classical second derivatives.
- Authoritative overlay: `research/plan-pde-track.md:3270`, and the PDE-8 table at line 3511. The preamble says “additive, authoritative” and “At build time, each row below is inserted on the named A or B page after the stated conceptual anchor”. All six A and two B rows are added, with their stable IDs and L/A component provenance. The spelling `lone` in the forcing estimate ID remains stable; its title spells out L1 in time.
- Published suppliers read: `items/thm-positive-time-spatial-analyticity-of-heat-kernel-solutions.md`, `items/thm-identity-theorem-for-real-analytic-functions-on-an-interval.md`, `items/thm-spatial-derivative-estimates-for-heat-flow.md`, `items/thm-holomorphic-parameter-riemann-integral.md`, `items/cor-holomorphic-functions-are-closed-for-local-uniform-convergence.md`, `items/lem-bochner-integral-norm-inequality.md`, and the first Green identity and heat-contractivity interfaces.
- Full texts read locally are hashed in `repair.json`; passages and external URLs are recorded below. No new fetch verification stamp is invented. New SO/PJ source records need the normal source-fetch stamp when the owner integrates them. Existing source stamps are left intact.

## Mathematical decisions

**Classical forcing.** The Step 3a review misreads Teschl 6.11. Printed p.153 actually requires bounded jointly continuous forcing with spatial Hölder control, uniformly on compact time intervals. Bounded uniform continuity alone does not provide the integrable bound needed for second spatial derivatives. In particular the original continuous compact support clause is unsupported. A second derivative of the heat kernel has norm proportional to `(t-s)^-1`; continuity alone supplies no integrable cancellation modulus.

The proposed Duhamel theorem uses the actual Hölder assumption. Its cancellation integral is
`integral D_ij Gamma_(t-s)(y) [f(x-y,s)-f(x,s)]dy`;
the integral of `D_ij Gamma` is zero. Gaussian scaling bounds this by a constant times `(t-s)^(-1+gamma/2)`, which is integrable for gamma>0. Truncating the diagonal, differentiating, then passing to the limit proves the asserted classical regularity. The moving endpoint contributes f(t,x). Smooth compactly supported data remain included exactly as the base design promises.

The consuming Cauchy formula keeps the finite-p mild claim and adds an explicit bounded uniformly continuous mild clause for the previously advertised forcing class. Its classical upgrade now requires the same spatial Hölder assumption. The time-independent-source example makes that assumption explicit as well; its argument no longer applies an undefined Laplacian to arbitrary continuous source data. These changes correct authored scaffold claims while preserving the base design and every overlay mandate.

**L-infinity endpoints.** Positive-time Gaussian kernels vary continuously in L1, so each orbit `s -> H_(t-s)g` is norm continuous for s<t in every Lp, including infinity. Countable interval exhaustion, simple-function approximation and the harmless endpoint singleton establish strong measurability. The forcing estimate therefore works for strongly measurable integrable forcing for all 1<=p<=infinity. It does not claim that heat evolution is strongly continuous at zero on the whole L-infinity space. The definition's previous claim of endpoint continuity is repaired, and its bounded jointly continuous scalar forcing formula is distinguished from Bochner forcing when the latter is unavailable.

**Complex Gaussian.** No new lemma is necessary. For one dimension truncate at [-R,R]. The published finite-interval holomorphic parameter-integral theorem makes `F_R(a)=integral_-R^R exp(-a x^2)dx` holomorphic in Re a>0. On every compact parameter set the tails are bounded uniformly by an integrable real Gaussian. The published local uniform limit corollary therefore makes F holomorphic. The real Gaussian identity and complex identity theorem give `F(a)=sqrt(pi) exp(-Log(a)/2)`. Absolute-integrability Fubini gives the n-dimensional product; setting a=1/(4z) yields integral Gamma_z=1. Three explicit published dependencies close that route. The definition's interface is unchanged.

**Overlay boundary cases.** Strict positivity starts after a specified positive earlier interior point, or at every positive time if the initial trace is nontrivial. It does not propagate positivity into a past preceding delayed boundary input. Forced energy uses exactly the first Green supplier domain and Countable Choice hypotheses. Smoothing requires the forcing vanish almost everywhere during the last epsilon time interval and gives only the stated spatial regularity. The range obstruction is restricted to Lp input, including bounded data, covered by the actual published analyticity theorem; restricting its Taylor series to a line justifies the real analytic identity theorem. The B rows use contradictory corner limits and finite sine sums only, with no infinite-series or spectral-theorem prerequisite.

## Consumers and ledger

The scan read all 30 run manifests for actual dependency uses, and searched current `items/` and `library/` for the changed Duhamel supplier IDs. No canonical published consumer was found. The direct consumers of the Duhamel theorem are the same-page Cauchy formula and time-independent source example; both replacements are included. The scalar definition change also affects that supplier and those consumers, all repaired in supplier order. There is no further in-run item consumer of the changed interfaces.

The wave pair in batch 2 declares a page edge, and batch 20 consumes `def-parabolic-cylinder-and-parabolic-boundary`; neither interface changes. Batch 18's abstract-semigroup deferral is unaffected. The complex kernel definition changes proof dependencies only, so its statement is unchanged; its kernel differentiability, complex semigroup and orientation remark require fresh dependency evidence after integration, but no mathematical consumer statement correction.

`ledger.proposed.md` supplies a durable mathematical ledger entry for owner integration. It records no nonexistent published repair or independent audit.

## Validation

The final JSON files parse. `manifest-deps` reports **40 items, 0 errors**; `content-policy --manifest-only` reports **40 items, 0 errors, 0 warnings**; `coverage-checklist --require-destination` reports **1 page, 74 harvested rows, 0 errors, 0 warnings**. The sidecar deliberately uses sibling `.pages.json`/`.coverage.json` names so coverage resolves the proposed manifest.

An independent recursive scan resolves every dependency, detects cycles, computes the exact batch-local level (0 for published-only dependencies, otherwise 1 plus the maximum local supplier level), and checks suppliers precede consumers in page display order. New levels are: stability 4; strict positivity 4; forced energy 0; forcing estimate 1; separated forcing smoothing 2; terminal support obstruction 0; corner compatibility 1; finite backward sums 1. Existing base claims retain their levels. Conceptual anchors remain in display order rather than sorting all rows numerically by level. No tests were run.

This is a completed proposed scope repair, with authored item proofs, fetch stamps, readiness certificates and owner gate closure still belonging to normal integration/authoring.
