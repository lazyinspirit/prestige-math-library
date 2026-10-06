# Batch 17 construction handoff — frontier-39-analysis-30 (Strongly Continuous Semigroups and Hille–Yosida)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-23
(`research/plan-pde-track.md` L2045–L2109) together with its additions table
`#### PDE-23 additions` at L3761–L3774. A page:
`strongly-continuous-semigroups-and-hille-yosida` (order 458.043, `pde`); B
page: `strongly-continuous-semigroups-and-hille-yosida-examples` (458.044).
Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-17.pages.json` (42 items: 33 on A,
9 on B; the 100-item page cap is respected), the coverage record
`research/frontier-39-analysis-30-batch-17.coverage.json` (2 pages, 100
harvested headings, 5 source entries / 9 page-source rows, all
fetch-stamped), the cross-batch input
`research/frontier-39-analysis-30-batch-17.cross-batch-dependencies.json`
(6 rows: 1 page + 5 item), the 42 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. No
published item, shared plan, engine state, verdict or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not
exist (checked before construction and again before recording), so the
binding materials are the run plan, the design section and the Alpha drift
verdict for this page: **no-drift**, order 458.043
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, section
`strongly-continuous-semigroups-and-hille-yosida`, L232–L243). The drift's
constraints were followed: the general generation theorem retains every
resolvent power and the contraction shortcut is isolated; Bochner
integrability is supplied by the published FA-12 items; the implementation of
the sufficiency direction is the design's own construction
$A_\lambda=\lambda AR(\lambda,A)$, $e^{tA_\lambda}$, a uniform estimate, a
Cauchy limit and closedness; the Laplace-transform uniqueness theorem is a
local theorem, not an assumed transform theorem; and the weak-derivative
translation example is stated for finite $p$ with its generator domain and
boundary/domain condition.

The scaffold initially recorded all 42 items ready; the independent owner audit corrected nine statement/proof issues and refreshed the affected readiness records. Levels now run 0–13 (distribution 0:7, 1:4, 2:8, 3:4, 4:3, 5:5, 6:3, 7:1, 8:1, 9:1, 10:1, 11:2, 12:1, 13:1); no cycle exists.
All 21 A-page design items and all seven A additions are present, and all six
B-page design items and all three B additions are present.

## Design, plan and published-content reconciliation

1. **Plan requires versus the design prose.** `research/plan-spec.json`
   (orders 458.043/458.044) declares exactly one A-page prerequisite,
   `constrained-variational-problems-and-variational-inequalities` (in-run
   draft, batch 16), and the B page requires its A companion. The design
   prose additionally names FA-1–FA-2, FA-5–FA-7, FA-10, FA-12 and FA-21,
   MT-8, `stone-weierstrass-general`, and the published Banach fixed-point
   and exponential-series results. The plan controls; every additional input
   is consumed at item level. The current manifest has 268 item-dependency edges: 142 to published items on disk, 121 within batch17 and 5 to other in-run batches (4 suppliers in batch11 PDE-17 and 1 Poincare supplier in batch4). **Conflict recorded.***

2. **A local prerequisite layer was minted (5 items), each at its consumer's
   use point.**
   - `lem-linearity-of-the-bochner-integral` — the published FA-12 page
     defines the Bochner integral, its integrability criterion, the norm
     inequality, dominated convergence and commutation with bounded maps, but
     states no linearity item; every integral manipulation below needs it.
   - `lem-average-convergence-of-a-continuous-banach-valued-function` — the
     $(1/h)\int_t^{t+h}$ convergence used by the integrated-orbits lemma, the
     FTC item and the variation-of-constants theorem.
   - `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve` and
     `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`
     — the two calculus facts of Teschl §11.1 in their evolution-specific
     form. The design's Teschl harvest row (L2764) explicitly plans this:
     "§11.1 … already-planned FA-12; evolution-specific consequences inline
     PDE-23". FA-12 is published and closed, so editing it was not permitted;
     the consequences are minted here.
   - `lem-exponential-series-of-a-bounded-operator` — the design's Requires
     line assumes "published … exponential-series results", but no published
     item defines $e^{tA}$ for a bounded operator (the published exponential
     series items concern the complex scalar exponential and the functional
     calculus). The Yosida construction and the bounded-generator example
     both need it, so it is supplied locally from Teschl Theorem 11.4 and
     Engel–Nagel Theorem I.3.7. **Design conflict recorded.**

3. **Named design input not consumed: the Banach fixed-point theorem.** The
   design's Requires line names it, but no proof in the C₀/Hille–Yosida
   spine is a fixed-point argument; the sufficiency proof uses the Cauchy
   estimate and closedness. No item consumes it and no padding edge was
   added.

4. **`stone-weierstrass-general` replaced by a sharper published supplier.**
   The Laplace-uniqueness item needs polynomial density in $C([0,1])$; the
   published `cor-weierstrass-approximation-on-the-unit-interval` (Bernstein
   polynomials) supplies exactly that and is used instead of the general
   Stone–Weierstrass theorem. No claim was weakened; the general theorem is
   simply not on the dependency path.

5. **Deliberate overlap, recorded for Step 3.** The B-page counterexample
   `cex-translation-semigroup-is-not-strongly-continuous-on-linfinity`
   restates, at the semigroup level, the computation of the published false
   statement `fs-translation-is-continuous-in-l-infinity`. The published item
   refutes continuity of the translation map; the B item records the
   $C_0$-semigroup endpoint warning and the exclusion of $p=\infty$ from the
   finite-$p$ example. It is not cited as a dep and no Recorded result is
   consumed to prove a replacement.

6. **Conventions kept.** Every statement is for a real or complex Banach
   space; the generator limit is one-sided; Hille–Yosida is stated on the
   real half-line $(\omega,\infty)$ with all powers, the complex half-plane
   version being noted for complex scalars; the contraction shortcut is a
   separate corollary; the sign dictionary ($u'=Au$, heat $A=\Delta_D$, and
   the translations $u'+Bu=0\Rightarrow B=-A$) is a dedicated remark.

7. **Choice audit.** The primary, choice-free forms are used by the main
   theorems: the dissipativity inequality (not its dual form), the Hahn–Banach-free
   Lumer–Phillips route, and the real half-line operator theory. HB is
   declared and its use identified in exactly two places:
   `def-dissipative-operator` (norm-duality form) and
   `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`
   (point separation). A dedicated hygiene pass removed every appeal to the
   AC$_\omega$-flagged Bochner dominated-convergence theorem from the C₀ /
   Hille–Yosida spine: the differentiation of the resolvent integral, the
   Yosida integral limit and the variation-of-constants continuity/differentiation
   arguments now use direct tail-splitting and compactness-of-orbits estimates
   (`lem-average-convergence…`, `lem-variation-of-constants-integral…`,
   `cor-resolvent-power-estimates…`, `thm-bounded-yosida…`,
   `thm-variation-of-constants-formula`), so those items and all their
   consumers are choice-free apart from the axioms their published suppliers
   carry (uniform boundedness/Baire). Explicit choice declarations remain only
   where genuinely required: the multiplication example declares Countable
   Choice (its converse generator identification uses the distribution-embedding
   injectivity); the Dirichlet-heat example declares AC and AC$_\omega$
   (Propagated from the batch-11 spectral and compactness suppliers). The
   translation example needs no choice (the weak derivative is verified
   directly from its definition). The 23 readiness records invalidated by
   this pass were re-recorded against the current bytes.

## Sources and harvest

Five source entries back the pair; **all nine coverage rows are
fetch-stamped** (`source-fetch-check --stamp`: 9/9 fetch-verified):

- **[EN]** Klaus-Jochen Engel and Rainer Nagel, *One-Parameter Semigroups
  for Linear Evolution Equations*, GTM 194 — complete author-hosted
  monograph, 5,013,926 bytes, 603 PDF pages. Read: Chapter I §5
  (pp. 36–46), Chapter II §§1–3 (pp. 48–96) and §6 (pp. 145–154).
- **[T]** Gerald Teschl, *Partial Differential Equations: From Classical to
  Modern* — 2026 author manuscript, complete archived text, 2,912,992 bytes,
  392 pages. Read: Chapter 11 §§11.1–11.4 (pp. 247–274); §§11.5–11.6
  harvested for the scope boundary only.
- **[J]** Mathew A. Johnson, *Math 951 Lecture Notes, Chapter 6:
  Introduction to Semigroup Methods* — 581,433 bytes, 37 pages. Read:
  §§1–3 and §5 Appendix (pp. 4–37).
- **[B]** Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial
  Differential Equations* — complete 614-page text, 2,607,877 bytes. Read:
  Chapter 7 and Comments (pp. 181–199).
- **[SN]** Roland Schnaubelt, *Evolution Equations* — 948,351 bytes,
  118 pages. Read: Chapter 1 §§1.1–1.4 (pp. 1–45).

The harvest has 100 named-result rows: 55 `included`, 21 `inline`,
20 `out-of-scope` (each with a written reason) and 4 `deferred` to the
plan-spec page `analytic-semigroups-and-linear-evolution-equations`
(EN II.4.a, T §11.5, B Theorem 7.7, SN Chapter 2). The finite-$p$ translation
theorem and the distribution-embedding items used by the examples are
published library suppliers, not from these five sources. `url-sweep`
reports 5/5 live, 0 failed, 0 recoverable, 0 suspect.

## Cross-batch dependencies

`research/frontier-39-analysis-30-batch-17.cross-batch-dependencies.json`
supplies 6 rows (1 page + 5 item), all open. The four batch-11 item suppliers for the heat example are the form operator, density/symmetry/lower bound, self-adjoint compact-resolvent operator and discrete spectrum; batch4 supplies Poincare. The page row records the plan prerequisite and design-prose extras. Reviewing the open edges is a Step-3/Step-8 duty; nothing here treats a planned supplier as published.

## Step-1 decisions

All 42 readiness records were written with `step1-decisions.mjs record` in
dependency-level order, each carrying the examined dependency IDs and the
read source locators. No item is escalated. `step1-decisions.mjs check`
reports 776/776 run items ready; the only work entries are the six empty
scaffold inventories of batches 18–20, outside this batch.

## Scaffold checks before owner audit (actual results; see the owner addendum for current results)

- `manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  → "776 item(s), 0 normalized, 0 error(s)".
- `content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  → "776 scoped item(s), 0 error(s), 0 warning(s)". (The batch-17-only
  invocation reports `batch-dependency-missing` for the six in-run draft
  suppliers by design; the whole-run form is the meaningful one.)
- `item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → 6 errors, all "empty scaffold inventory" for the six pages of batches
  18–20; no batch-17 label error and no cycle anywhere.
- `coverage-checklist.mjs research/frontier-39-analysis-30-batch-17.coverage.json --require-destination`
  → "2 page(s), 100 harvested result(s), 0 error(s), 1 warning(s)". The
  warning is `coverage-low-yield` on the B page (5/17 harvested results
  scaffolded); the declines are the documented out-of-scope/deferred rows
  above.
- `source-fetch-check.mjs --coverage …batch-17.coverage.json --stamp`
  → "9/9 source(s) fetch-verified"; check mode repeats 9/9.
- `url-sweep.mjs --coverage … --recover --fail-on-dead`
  → "5/5 live; 0 failed".
- `source-backing.mjs --coverage … --liveness … --require-verified`
  → "33 authored result(s) across 1 file(s), every one still backed by an
  openable source or documented alternative argument".
- `frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → "refreshed and deduplicated" (exit 0).
- `validate-plan.mjs research/plan-spec.json` → OK — declared page order is
  acyclic and consistent (with the tool's own note that 257 planned pages
  still carry no item list).
- `extcheck.mjs` → "OK — every recorded-not-proved statement is a cited
  remark with no proof, and every consequence is marked", with the run-wide
  legacy `[unproved-on-published]` listings; none involves this batch.

## Published defects

No published defect was found in any item this batch consumes. The published
suppliers exercised here — the FA-1/FA-2/FA-3/FA-4/FA-5/FA-6/FA-12/FA-21
pages, the MT-8/MT-14/MT-15 items on Lebesgue integration, $L^p$, translation
continuity and Weierstrass density, the PDE-11 weak-derivative and Sobolev
items, the PDE-16/17 items on the Dirichlet form (in-run drafts of batches
10/11, consumed by the heat example only), and `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`
— were checked against the claims consumed here and are usable as stated.
The one convention seam (Brezis writes $u'+Au=0$; the FA-21 resolvent is
stated on Hilbert spaces) is handled by `rem-semigroup-sign-and-generator-conventions`
and by the local Banach-space resolvent definition, not by editing published
content.

## Unresolved findings for owner/operator reconciliation

1. **Stage residual outside this batch.** Batch18 has a 36-item manifest visible, but its dispatcher has not yet recorded completion; its Step1 records remain pending. Batches19–20 retain four planned empty pages. The run cannot close until these scaffold outputs, audits and Step1 records complete. The live engine reports batch18 in flight; the historical owner blocker remains until the scaffold gate passes.
2. **Coverage warning.** The B page's harvest is 5/17 scaffolded; the
   declines are individually reasoned (analytic/hyperbolic applications,
   nonlinear problems, boundary examples). Alpha should confirm them at
   Step 5 as the checklist requests.
3. **Minted local prerequisites.** The five local items in §2 sit on the A
   page because editing the published FA-12 page is not permitted. If the
   owner prefers them homed on a functional-analysis page, that is a
   cross-batch placement decision, not a mathematical defect; no consumer
   would change.
4. **Cross-batch edges.** The owner-audited file has 6 rows (one page and five item edges); all remain open. The heat example consumes in-run suppliers from batches4 and11, and Step3 must verify their exact claims.
5. **Design conflicts recorded.** (a) plan-spec's single `requires` edge vs
   the design-prose supplier list; (b) the design's assumed published
   exponential-series results do not exist in the corpus; (c) the design's
   `stone-weierstrass-general` input is replaced by the sharper Weierstrass
   polynomial-density supplier; (d) the named Banach fixed-point input is
   not needed by the constructed proof route.


## Owner audit addendum (after batch 17 dispatch-ok)

The construction and check figures above are the scaffold writer’s initial snapshot. This addendum records the owner audit and supersedes its “no escalation”, 7-row cross-batch and readiness statements. Independent Codex auditors found and helped repair nine statement/proof issues in batch17; details and proof routes are recorded as entry 19 in the run owner-resolution log.

The 42-item batch17 manifest remains in the planned 33-item A / 9-item B scope. All nine corrected items and every previously ready dependent item now have current Step1 hashes; prior owner flags on dependent records were preserved. The direct corrections cover orbit differentiability, pointwise Yosida convergence, the Hilbert dissipativity proof, the resolvent parameter identity, local Bochner integrability for averages, the variation-of-constants continuity proof, Laplace moments and test functions, the mean-value endpoint, and the heat-semigroup spectral proof. The heat example now uses Duhamel rigidity on eigenvectors and contraction on finite sums; its unused inverse-series edge was removed and its dependency level is 13.

The current batch17 cross-batch file has 6 rows: the single required page edge and 5 item edges (4 suppliers in batch11 and Poincare in batch4). Comparing it against the batch1–17 manifests found 6 expected and 6 actual edges, with no stale or missing row. The previously refreshed unified ledger still has the former batch17 row count; its refresh is deferred until scaffold writers for batches18–20 finish.

Post-audit checks: manifest-deps on batches1–17 reports 559 items, 0 normalized, 0 errors; content-policy manifest-only over batches1–17 reports 559 scoped items, 0 errors, 0 warnings; item-dependency-levels reports no cycle or dependency-level mismatch, with only the four planned empty page shells in batches19–20; git diff --check passes for the edited manifests. A current Step1 snapshot reads 812 items, 776 ready, with work only for the 36 batch18 items awaiting their completed writer receipt and the four empty pages in batches19–20. A batch17-only content-policy invocation flags the six draft suppliers as missing because it omits their supplier manifests; the all-suppliers invocation above passes. No tests were run.
