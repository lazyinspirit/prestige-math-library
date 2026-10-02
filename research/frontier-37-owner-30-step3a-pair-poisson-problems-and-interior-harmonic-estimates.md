# Step 3a scope review — Poisson problems and interior harmonic estimates

- Run: `frontier-37-owner-30`, batch 9.
- A page: `poisson-problems-and-interior-harmonic-estimates` (order 458.009).
- B page: `poisson-problems-and-interior-harmonic-estimates-examples` (order 458.010).
- Decision: **insufficient**.
- Scope only: this is not a proof-correctness judgment and not an item approval.

## Scope evidence

The current batch-9 manifest (`research/frontier-37-owner-30-batch-9.pages.json`)
contains the 14 A-page and 7 B-page items of the base PDE-6 design
(`research/plan-pde-track.md` lines 1016–1067). I compared every ID, kind and
statement against the design's dependency-ordered A list 1–14 and B list 1–7:
the match is 1:1 — Kelvin inversion; ball Green function; ball Poisson kernel;
ball Dirichlet problem by the Poisson integral; reflected half-space Green
kernel; half-space kernel and bounded Dirichlet problem; L¹ interior
derivative estimates; supremum Cauchy corollary; real analyticity; unique
continuation; local Hölder/C^{2,α} ball norms; interior C^{2,α} Poisson
estimate; interior gradient corollary; the n = 2 dimension-split remark.
The dimension split (items 1–6 for n ≥ 3, items 7–13 for n ≥ 2, disc theory
cited to complex analysis) is exactly as designed.

The declared page prerequisite `fundamental-solutions-newtonian-potentials-and-green-functions`
is published (`library/pde/`, status published), as are the further suppliers
named in the design: PDE-3 `harmonic-functions-and-mean-values-in-rn`, PDE-4
`maximum-principles-harnack-and-liouville-in-rn`, the MT-11 polar-measure item
and the published multi-index/Taylor items. I walked all 48 direct dependency
IDs of the pair: every external supplier is a published item; the only
unpublished IDs are the pair's own new items. The design-vs-plan discrepancy
the batch notes record (design prose "Requires: PDE-3–PDE-5; MT-11; the
published multi-index/Taylor pages" versus `research/plan-spec.json`'s single
`fundamental-solutions-…` page edge) is therefore not a supplier gap: every
mathematical supplier is declared at item level and is published.

Coverage is one A-page entry with four sources (Hunter, Schmidt, Schikorra,
Axler), 30 harvested rows (14 included, 5 inline, 4 already-published, 7
deferred to resolvable plan destinations); `node tools/coverage-checklist.mjs
research/frontier-37-owner-30-batch-9.coverage.json` exits 0 with no warnings.
I re-fetched all four treatments and matched the coverage's recorded byte
counts, and verified the load-bearing locators: Hunter §2.2 contains Theorems
2.7/2.9/2.10 and Corollary 2.11; Schmidt §2.8 contains the ball Green
function, the Poisson kernel P_R = (R²−|x|²)/(nω_nR|y−x|ⁿ) and the Poisson
integral formula; Schikorra §2.4 contains the reflected half-space kernel,
(2.13), Exercise 2.10 and Theorem 2.13, and §8.1/Theorem 8.11 the Hölder
vocabulary and Schauder estimate; Axler Ch. 4 contains the inversion/Kelvin
transform, Proposition 4.6 and Theorem 4.7. The B items draw on the same
treatments and the published FA Fourier item. Relative to the base design the
pair is complete.

## The gap: plan §12.4 PDE-6 overlay rows

Plan §12 declares itself an "additive, authoritative overlay" whose rows are
inserted on the named page at build time (lines 3241–3246). Its §12.4
"PDE-6 additions" table (lines 3456–3467) plans **eight further rows** on this
pair. None of the eight is a standalone item in the batch-9 manifest or
coverage, and none of the eight IDs is used or published anywhere on disk.

Three are represented only inside larger rows: `lem-ball-poisson-kernel-is-positive-and-normalised`
is subsumed by `thm-poisson-kernel-for-a-ball-in-rn` (positivity and total
mass one are stated there); `lem-poisson-kernel-boundary-cap-and-complement-estimate`
is only the cap/complement split inside the ball Dirichlet theorem's proof
strategy; `cor-uniform-boundary-convergence-of-ball-poisson-integrals` follows
from that theorem's continuous extension to the compact closed ball. Five
planned results/counterexamples are absent as claims:

1. A `lem-interior-oscillation-controls-harmonic-gradient` — |Du(x)| ≤ C r^{-1} osc_{B_r(x)} u.
2. A `cor-entire-harmonic-function-of-sublinear-growth-is-constant` — sup_{B_R}|u| = o(R) forces u constant.
3. A `thm-locally-uniform-harmonic-convergence-is-c-infinity-local` — local uniform harmonic convergence gives convergence of every derivative on compacta.
4. B `cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump` — step data converge at a jump to an averaged value.
5. B `cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control` — a nonzero harmonic exterior solution vanishes on a sphere.

I searched the published library for equivalents: the first four are new
(PDE-3 publishes only `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic`,
harmonicity of the limit without derivative convergence; PDE-4 publishes
bounded Liouville and bounded-gradient affine corollaries, not the
sublinear-growth case), and the exterior counterexample is new (PDE-4 has only
the boundedness-at-infinity maximum-principle pair). The jump counterexample
is new relative to the published disc Poisson page.

Precedent makes the overlay binding in this project. In `frontier-36-complete`
the PDE-5 review recorded `insufficient` for exactly this omission of the
§12.4 PDE-5 rows; the owner then applied all eight rows to the same pair
(owner `proceed` record: "all 22 base items, eight section 12.4 additions").
The published PDE-4 page likewise carries all of its §12.4 rows. The plan's
own §7 well-definedness ledger already assumes overlay rows supply live
contracts (line 2351 names "the §12 finite-chain lemma"). No frontier-37
owner record suspends §12, and no frontier-37 batch has been enriched with
any overlay row (0 of 184 §12.4/§12.5 rows present across all 30 manifests).

Source caution for the enrichment (verified, not assumed). The rows cite
[T] Ch. 5 §§4–6, [SO] §§4.2–4.3, [H] §§2.5–2.7, [PJ] §11.1.4. Teschl's direct
author PDF is currently withdrawn (the plan's URL 404s; the 2025 archived copy
is the available full text), and in Hunter's 2014 notes §2.5 is "Green's
identities", §2.6 "Fundamental solution" and §2.7 "The Newtonian potential" —
Hunter does not contain the ball Poisson kernel or its boundary convergence,
so the [H] locators on rows 2, 3 and 8 must be re-sourced. Already-fetched
candidates: Schmidt §2.8 and Schikorra §2.4/§2.4.1 for the kernel rows, and
Sung-Jin Oh §4.4 (unit-ball Poisson kernel after the cited §4.2) and Oh §4.2
(derivative estimate and Liouville) for the estimate rows; Simon Lecture 13
and Jakobsen §11.1.4 are the remaining cited treatments.

## Other observations (non-blocking for scope)

1. The design's hard-proof sentence at line 1061 calls for subtracting the
   first-order Taylor polynomial of the Hölder source. A C^{0,α} source has no
   first derivative, so that route is not available; the batch notes already
   record the corrected route through the published
   `thm-newtonian-potential-for-holder-data-is-classical` cancellation. The
   claimed C^{2,α} bound is unchanged. The design text should be reconciled by
   the owner; this review does not touch proofs.
2. The design's well-definedness sentence on "measure-theoretic variants" of
   the Poisson integral corresponds to no item on this pair. That theory is
   published in complex analysis for the disc and planned on batch 25
   `harmonic-hardy-classes-and-fatou-boundary-limits`; recorded as cross-pair
   placement, not an omission.
3. `cex-smooth-does-not-imply-real-analytic-for-general-pde` carries no source
   and an `ai-generated` statement provenance; that is permitted by the
   provenance policy, and the design declares the item non-load-bearing.
4. I did not verify step-3b proofs; uncertainty about proofs is out of this
   review's scope. I read the base design, coverage, manifests, plan-spec and
   owner records, and re-read the cited source sections listed above.

## Library role

This is the PDE-6 link between the published PDE-3–PDE-5 pages and the later
heat/wave and elliptic-regularity pages. `research/plan-spec.json` names
`the-heat-kernel-and-the-cauchy-problem` (order 458.011) as its only downstream
page consumer; the §7 ledger's "Poisson representation" contract (line 2355)
is met by A items 2–9, and the pair has no other in-run item-level consumers.
No duplication: all 21 manifest IDs are unused, and the printed n = 2 remark
correctly cites the published disc theorem
`thm-poisson-integral-solves-the-disc-dirichlet-problem`.

## Recommended owner action

Enrich the existing batch-9 A/B pair with the eight §12.4 PDE-6 rows at their
stated anchors, extending the coverage file with verified source locators
(re-sourcing the Hunter/Oh citations as above; Teschl via the archived full
text), then record `proceed` for the resulting scope. No pair merger is
warranted. If the owner instead rules that §12 is intentionally suspended for
this run, the owner must record `proceed` on the current base scope, as was
offered on the identical frontier-36 PDE-5 finding. I did not edit the
scaffold, coverage, plan, items or any owner record.
