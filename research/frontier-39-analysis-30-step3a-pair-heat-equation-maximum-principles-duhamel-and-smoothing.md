# Step 3a scope review — heat-equation-maximum-principles-duhamel-and-smoothing

- Run: `frontier-39-analysis-30` (batch 1), role alpha, label
  `step3a-pair-heat-equation-maximum-principles-duhamel-and-smoothing-bc217c448eac4d89`.
- A page: `heat-equation-maximum-principles-duhamel-and-smoothing`
  (order 458.013, category `pde`, 25 scaffolded items).
- B page: `heat-equation-maximum-principles-duhamel-and-smoothing-examples`
  (order 458.014, 7 scaffolded items), companion pointer A↔B consistent.
- Page `requires`: A = `the-heat-kernel-and-the-cauchy-problem`,
  `banach-valued-integration-and-the-radon-nikodym-property` (both published);
  B = the A page.
- Decision: **insufficient** — planned results from the plan's authoritative
  §12.4 density-enrichment overlay (PDE-8 additions) are absent from the
  manifest, coverage, published library and every run batch, and one
  base-page consumer clause has no statement-level supplier. Scope only: this
  review decides coverage of the intended subject, not item or proof
  correctness, and it edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-1.pages.json` | Current A inventory (25 items) and B inventory (7 items): every statement, strategy, `deps`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-39-analysis-30-batch-1.coverage.json` | Eight source records with locators, 63 harvested rows, dispositions and item destinations |
| `research/frontier-39-analysis-30-batch-1.notes.md` | Step-1 construction record: design reconciliation, recorded conflicts, nine local prerequisites, dependency audit, correction record, gate results |
| `research/plan-pde-track.md` §PDE-8 (lines 1127–1181) | Controlling base prose design: role, `Requires` line, 16 A rows + 7 B rows in dependency order, hard proof obligations, source architecture |
| `research/plan-pde-track.md` §12 preamble (lines 3270–3293) and §12.4 PDE-8 additions (lines 3511–3522) | The additive, authoritative density-enrichment overlay: "At build time, each row below is inserted on the named A or B page after the stated conceptual anchor" |
| `research/plan-spec.json` rows 458.013/458.014 | Page identity/order/kind/category/companion/`requires`; both carry empty `items` arrays |
| `research/frontier-39-analysis-30-scope-ledger.json`, `…-alpha-groups.json`, `…-batch-1.cross-batch-dependencies.json` (`[]`), `…-batch-2.…` and `…-batch-20.…cross-batch-dependencies.json` | Pair owed by the run; no batch-1 consumer edges except the wave page edge and the batch-20 item edge |
| `research/frontier-39-analysis-30-alpha-step1-drift.md` (heat entry) and `…-step1-owner-resolution.md` | Drift verdict `drift-applied` (Bochner edge added); owner resolution "keeps every planned claim and pair"; neither file dispositions the PDE-8 overlay rows |
| `library/pde/the-heat-kernel-and-the-cauchy-problem.md` (published PDE-7) and the front matter/statement of the consumed suppliers | Prerequisite availability: kernel normalisation/derivative bounds, derivative-passing lemma, Lp Cauchy solution, mild-convolution uniqueness, Lp–Lq estimate, spatial derivative estimates, order-preserving/contractive and mass/positivity corollaries, bounded-UC Cauchy solution, L1 approximate-identity corollary |
| Teschl PDF `/tmp/teschl.pdf` pages 168–170 (Lemma 6.12, Theorem 6.13, Theorem 6.15) | Re-read the heat-ball representation/all-mean-value and strong-maximum arguments underlying the local prerequisites; mechanism matches the scaffold |
| `node tools/manifest-deps.mjs`, `coverage-checklist.mjs --require-destination`, `content-policy.mjs --manifest-only`, `step3-decisions.mjs check --phase scope` | Current gate state of the batch (outputs under Checks below) |

## Inventory against the prose design

All 16 designed A rows and all 7 designed B rows are present, in design order,
with the designed kinds and proof routes:

1. `def-parabolic-cylinder-and-parabolic-boundary`; 2. `lem-strict-subsolution-perturbation-for-the-heat-operator`;
3. `thm-weak-parabolic-maximum-principle`; 4. `thm-strong-parabolic-maximum-principle`;
5. `cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem`; 6. `thm-energy-uniqueness-for-the-homogeneous-heat-equation`;
7. `def-duhamel-heat-potential`; 8. `thm-duhamel-principle-for-the-whole-space-heat-equation`;
9. `thm-inhomogeneous-heat-cauchy-formula`; 10. `thm-instantaneous-smoothing-of-lp-heat-flow`;
11. `def-complex-time-heat-kernel-on-a-proper-sector`; 12. `thm-complex-time-heat-operators-form-a-bounded-holomorphic-semigroup`;
13. `rem-the-heat-operator-family-is-an-analytic-semigroup-in-the-later-abstract-language`; 14. `thm-whole-space-heat-uniqueness-under-gaussian-growth`;
15. `thm-backward-heat-solution-map-is-unbounded`; 16. `rem-backward-ill-posed-does-not-mean-universal-nonexistence`.
B rows: `ex-duhamel-solution-for-a-time-independent-source`, `ex-heat-comparison-preserves-an-interval-of-values`,
`ex-sine-modes-decay-under-dirichlet-heat-flow`, `cex-final-time-face-is-not-part-of-the-parabolic-boundary`,
`rem-whole-space-zero-data-heat-solutions-without-growth-control` (design row 5 was a `proved_here:false`
counterexample; SCHEMA.md requires a remark, and the recorded conflict preserves content, `L/NS` provenance,
citation and leaf status — the external-dependency block is present and exact), `cex-backward-heat-amplifies-small-high-frequency-errors`,
`cex-a-mild-heat-solution-need-not-be-classical-at-initial-time`.

The nine further A ids are local prerequisites of designed claims, not scope
expansion, and each has an identifiable consumer: Hessian-at-maximum lemma
(item 2); heat-ball slices, representation formula, submean inequality, chains
(items 3/clause (ii), 4, 4); whole-space Gaussian-growth maximum principle
(item 14); complex-kernel L1-parameter differentiability (item 12); sine-mode
L2 normalisation (item 15, B3, B6); backward-uniqueness lemma (item 15, added
in review to replace an unsound time-reversal argument). The recorded ordering
deviation (item 9's classical uniqueness clause uses item 14's growth class)
is explicit and coherent.

## Omitted planned results (decision basis)

The plan's §12 overlay is not optional: it is "an additive, authoritative
overlay on §§6--10 … At build time, each row below is inserted on the named A
or B page after the stated conceptual anchor" (lines 3270–3293). The PDE-8
additions table (lines 3511–3522; header 3511) plans 6 A rows and 2 B rows,
and **none** is in the batch-1 manifest, the batch-1 coverage, the published
library, or any of the 30 batch manifests of this run (id scan):

| Anchor | Missing planned row (kind) | Planned statement, in brief | Source range |
|---|---|---|---|
| A / parabolic maximum | `thm-linfinity-stability-for-the-inhomogeneous-heat-equation` (theorem) | Sup-norm difference bounded by initial/boundary differences plus the time integral of the forcing difference | [E] §2.3.3; [T] Ch. 6 §3 |
| A / positivity | `cor-strict-positivity-for-nontrivial-nonnegative-heat-solutions` (corollary) | In a connected cylinder a nontrivial nonnegative classical solution is positive at all later interior points | [E] §2.3.3; [SO] §5.3 |
| A / energy method | `lem-forced-heat-energy-identity` (lemma) | For homogeneous Dirichlet data, $\frac12\frac{d}{dt}\|u\|_2^2+\|Du\|_2^2=(f,u)$ | [T] Ch. 6 §4; [MITPDE] Lecture 5 |
| A / Duhamel | `thm-duhamel-lone-in-time-lp-forcing-estimate` (theorem; the id's "lone" is the overlay's typo for L1-in-time) | Bound $\|\int_0^tH_{t-s}f(s)\,ds\|_p\le\int_0^t\|f(s)\|_p\,ds$ | [E] §2.3.1; [T] Ch. 6 §2 |
| A / Duhamel smoothing | `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal` (corollary) | Forcing supported before $t-\varepsilon$ gives spatially smooth Duhamel contribution with derivative bounds | [SO] §5.3; [T] Ch. 6 §2 |
| A / backward heat | `cor-a-nonzero-compactly-supported-final-profile-is-not-reached-by-whole-space-heat-flow` (corollary) | A positive-time heat profile that is compactly supported must vanish, by spatial analyticity | [E] §2.3.2; [SO] §5.3 |
| B / corner compatibility | `cex-classical-parabolic-corner-regularity-needs-compatible-initial-and-boundary-data` (counterexample) | Constant nonzero initial data with zero Dirichlet boundary data on an interval cannot be continuous at the space-time corner | [T] Ch. 6 §3; [PJ] Ch. 4 |
| B / backward solutions | `ex-backward-heat-exists-for-finite-dirichlet-eigenfunction-sums` (example) | A finite sine series at final time extends backward by multiplying each mode by its finite exponential factor | [PJ] §§9.1, 10.3; [T] Ch. 6 §5 |

Evidence of absence (all checked this session): (i) no item file matching any
of the eight ids under `items/`; (ii) the eight ids occur in none of
`research/frontier-39-analysis-30-batch-*.pages.json` (30 files); (iii) no
coverage row in `frontier-39-analysis-30-batch-1.coverage.json` describes the
underlying results (stability, strict positivity, forced energy identity,
L1-in-time Duhamel bound, away-from-diagonal smoothing, compactly supported
final-profile obstruction, corner compatibility, finite eigenfunction-sum
backward example) — so the coverage gate cannot see the omission;
(iv) `frontier-39-analysis-30-batch-1.notes.md` cites only §PDE-8 lines
1127–1181 as the "controlling design" and never disposes the overlay rows.
Precedent in this repository is uniform: frontier-36-complete, frontier-37-owner-30
and frontier-38-owner-30 recorded the same §12.4 omissions for the PDE-5/6/7
tables as `insufficient`, and the owner then applied those rows (the published
PDE-7 page carries all eight of its overlay rows, including
`thm-positive-time-spatial-analyticity-of-heat-kernel-solutions`). That PDE-7
item is also the named supplier of the missing PDE-8 row
`cor-a-nonzero-compactly-supported-final-profile-is-not-reached-by-whole-space-heat-flow`
(the frontier-38 PDE-7 review already called this corollary a planned PDE-8
claim), so the missing row is now buildable in-run.

**Proposed owner action.** Enrich the batch-1 pair with the eight PDE-8
overlay rows (A and B, at the "A/B after" anchors, with coverage rows and
source stamps for [E]/[T]/[SO]/[PJ]/[MITPDE] as reused) and record `proceed`
for the resulting scope, as done for the published PDE-5/6/7 pages;
alternatively record `proceed` for the base scope with an explicit named
disposition of each of the eight rows. No pair merger applies: every missing
row belongs on these two pages.

## Prerequisite findings

1. **Confirmed statement-level gap (consuming result lacks a supplier).**
   `thm-inhomogeneous-heat-cauchy-formula`'s classical clause assumes
   $u_0$ and $f$ bounded and uniformly continuous, but its **only** supplier
   for the forced part, `thm-duhamel-principle-for-the-whole-space-heat-equation`,
   is stated for $f\in C_c(\mathbb R^n\times[0,T])$ (clause (i)) and for
   $f\in C([0,T];L^p)$, $1\le p<\infty$ (clause (ii)). The claim "the heat
   potential of a bounded uniformly continuous forcing is a classical solution
   with zero initial data" is stated in neither the scaffold nor the published
   library (PDE-7's `thm-heat-cauchy-solution-for-bounded-continuous-data`
   covers only the homogeneous flow). The strategy of the consuming item
   nonetheless cites clause (i) for exactly that case. Recommended scaffold
   addition: broaden item 8(i) to "$f$ bounded and uniformly continuous"
   (Teschl Theorem 6.11, the design's own [T] Ch. 6 §2 backing; the recorded
   proof route already only needs local-uniform approximate-identity
   convergence), or mint a local helper; either way the consumer gets a
   matching statement. (The overlay row `thm-linfinity-stability-…` is a
   different claim and does not discharge this.)
2. **Potential supplier-chain gap, not confirmed blocking.**
   `def-complex-time-heat-kernel-on-a-proper-sector` asserts
   $\int_{\mathbb R^n}\Gamma_z=1$ for complex $z$, i.e. the complex Gaussian
   integral $\int e^{-a|x|^2}dx=(\pi/a)^{n/2}$ for $\operatorname{Re}a>0$.
   No published item states that complex-parameter identity, and the def's
   declared deps name only the real Gaussian integral, dominated convergence
   and the identity theorem, none of which alone yields holomorphy of the
   parameter integral. The route exists in the published library
   (`thm-holomorphic-parameter-riemann-integral`,
   `cor-holomorphic-functions-are-closed-for-local-uniform-convergence`,
   `thm-identity-theorem-holomorphic-functions`, plus the real-parameter
   `thm-differentiation-under-the-integral-sign` for complex-valued
   integrands), so I record this as an unnamed-supplier observation for the
   item author rather than a confirmed absence: either declare those deps or
   add a one-lemma helper `lem-complex-gaussian-parameter-integral`
   (statement: for $\operatorname{Re}a>0$, $a\mapsto\int e^{-a|x|^2}dx$ is
   holomorphic with the stated value and derivative). Uncertainty: I did not
   construct the completed proof; a difference-quotient argument with the
   def's own Gaussian bounds may also close it without new items.
3. **Resolved deviations, no action.** The design's `Requires` line names
   PDE-2D, MT-8/MT-11 and FA-23; PDE-2D/MT-8/MT-11 interfaces are consumed at
   item level and published, and the Fourier content appears as the already
   published PDE-7 item `ex-fourier-transform-of-the-heat-kernel`, so no
   scaffold item consumes FA-23. No unmet prerequisite arises from that line.
4. **Choice accounting.** All 86 distinct external dependencies of the pair
   resolve to published items (0 missing); the energy-uniqueness item declares
   $\mathrm{AC}_\omega$ exactly where the published Green identity carries it,
   all other items declare Countable Choice only through their suppliers, and
   no recorded (`proved_here:false`) result is a dependency target.

## Intended role in the library

This is PDE-8 of the PDE track, the classical heat-theory successor of the
published PDE-7 page `the-heat-kernel-and-the-cauchy-problem` (maximum
principles and comparison, energy uniqueness, Duhamel and the inhomogeneous
formula, positive-time smoothing, complex-time holomorphic family, Gaussian
growth uniqueness, backward ill-posedness). In-run consumers: the wave page
(batch 2) declares the page edge with no item-level claim, and batch 20's
`thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution`
consumes `def-parabolic-cylinder-and-parabolic-boundary`; batch 20's ledger
records the deliberate removals of the heat maximum-principle and
Gaussian-growth deps. Six harvested rows (sectorial operators, contour
formula, generation theorem, analytic-semigroup definition/bounds/characterisation)
are deferred to the later PDE-24 page `analytic-semigroups-and-linear-evolution-equations`
(batch 18), which remark 13 orients to without a wikilink. The B page is a
leaf. The missing overlay rows are exactly the continuous-dependence,
strict-positivity, forced-energy, forcing-integrability, off-diagonal
smoothing, range-obstruction and corner/backward illustrations that complete
this role.

## Source coverage assessment

Eight authoritative treatments back the pair (Teschl; Hunter; Brezis; Ivrii;
Speck MIT 18.152; Schnaubelt; Hairer; Vogt), 8/8 fetch-verified at scaffold
time by `source-fetch-check --stamp` and live at `url-sweep`; I re-read the
Teschl Lemma 6.12/Theorem 6.13/Theorem 6.15 passage (PDF pp. 168–170) and
confirmed the heat-ball representation, submean and strong-maximum mechanism
the local prerequisites use. The harvest has 63 rows (25 `included`, 10
`inline`, 10 `already-published`, 6 `deferred` to batch 18, 12 `out-of-scope`
with result-specific reasons); the single `coverage-low-yield` advisory
(25/63) is explained by the deferred abstract sectorial theory and unused
refinements, and no scaffolded item consumes them. The §12.4 omissions are
plan-row omissions, not source-harvest omissions: none of the eight
underlying results has a coverage row at all, so no existing gate catches
this. Sources for the missing rows ([E] §2.3.1–2.3.3, [T] Ch. 6 §§2–5,
[SO] §5.3, [PJ] Ch. 4/§§9.1,10.3, [MITPDE] Lecture 5) are the same treatments
the scaffold already stamps, except [SO] and [PJ], which the overlay already
declares as acquired full texts.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-1.pages.json`
  → **32 item(s), 0 missing, 0 errors**.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-1.coverage.json --require-destination`
  → **1 page, 63 harvested, 0 errors, 1 advisory** (`coverage-low-yield`, explained above).
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-1.pages.json`
  → **32 scoped item(s), 0 errors, 0 warnings**.
- Dependency resolution scan over all 32 items → **86 distinct external deps, 0 unresolved; 0 scaffolded-dep ids missing**.
- Overlay id scan → **8/8 PDE-8 addition ids absent** from `items/` and from all 30 batch manifests; no coverage row for their content.
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope`
  → the pair reports "current scope review required" (pre-review state).
- Not run: `source-fetch-check --stamp`, `url-sweep`, fetch-stamp re-verification
  (I relied on the stamped scaffold record and re-read one source passage in
  the locally cached Teschl PDF); no proof or item audit was attempted.

## Uncertainty statement

This is a scope review, not proof approval. I verified the base inventory,
the overlay omission and dependency resolution mechanically; I read every
base-item statement and strategy, the coverage records, the published
statements of the load-bearing PDE-7/PDE-2D/MT-11/Bochner suppliers used, and
the Teschl heat-ball passage. Findings 1 and 2 are statement/interface
findings, not judgments that the planned proofs are wrong; finding 2 is
explicitly potential rather than confirmed, and the overlay-row claims
themselves were assessed only from the plan's own statements and sources.
Unresolved uncertainty: whether the owner intends the §12.4 overlay to be
applied in this run (the plan says it is authoritative; the scaffold and
coverage ignore it); and whether the authoring step can discharge finding 2
inside the existing dep set.

## Decision

**insufficient** — base PDE-8 design fully scaffolded and dependency-closed,
but the plan's authoritative PDE-8 additions table (8 rows, plan lines
3511–3522) is omitted entirely, matching the frontier-36/37/38 precedent for
the same overlay; two prerequisite findings are recorded above (one confirmed
statement-level gap, one potential supplier chain). Owner action: enrich the
pair with the eight rows (or record `proceed` with an explicit per-row
disposition beyond the base scope) and address finding 1 by broadening
item 8(i)'s statement or adding a local helper; record `proceed` for the
resulting scope. No scaffold, item, plan or owner record was edited by this
review; no pair merger is warranted.
