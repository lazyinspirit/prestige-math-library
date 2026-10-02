# Step 3a scope review — Riesz Potentials and the Hardy–Littlewood–Sobolev Inequality

- Run: `frontier-37-owner-30` (role: alpha; group `c`, batch 12; this pair only)
- A page: `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` (plan order 458.02615)
- B page: `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples` (plan order 458.02616)
- Inventory: 5 A items (1 definition, 2 lemmas, 1 theorem, 1 remark) at levels 0–4 and
  3 B items (1 example, 2 counterexamples) at level 1; A `requires` three published pages
  (`fourier-multipliers-and-sobolev-characterisations`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`,
  `the-maximal-function-and-lebesgue-differentiation`), B requires the A page only; companion
  pointers pair the two pages.
- Scope decision: **sufficient**, recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-37-owner-30-step3a-review-riesz-potentials-and-the-hardy-littlewood-sobolev-inequality.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item contract, plan,
  page, coverage record, engine state or owner record was edited; nothing below is an item
  approval. No owner scope record and no authoring-direction file exist for this pair, so
  nothing was assumed.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-12.pages.json` | Current scope carrier: the 5 A + 3 B items with full statements, `deps` and levels; `requires`, orders and companion pointers. Batch 12 contains no other pair |
| `research/frontier-37-owner-30-batch-12.coverage.json` | 3 full-text sources, 29 harvested rows: 11 `included`, 7 `inline`, 2 `already-published`, 8 `out-of-scope`, 1 `deferred`; with per-row locators, mappings and reasons |
| `research/frontier-37-owner-30-batch-12.notes.md` | Scaffolder record: design/plan reconciliation, the unit normalization $c_{n,\alpha}=1$, the dependency-clause audit, check results |
| `research/plan-fourier-analysis-track.md` L43, L74, L323 (per-pair source matrix), L930–953 (binding FR-13 design), L1350 (canonical-coverage row 64), L963–983 (FR-14 design consuming this theorem) | Binding prose design, plan source assignment and consumer mapping |
| `research/plan-spec.json` orders 458.02615/458.02616 (item lists empty pre-splice); consumer 458.02617 `fourier-restriction-and-the-stein-tomas-theorem` | Plan reconciliation; the only plan page whose `requires` names this A page |
| `research/frontier-37-owner-30-alpha-step1-drift.md` (`### riesz-potentials-and-the-hardy-littlewood-sobolev-inequality`, VERDICT: no-drift) | Step-1 verdict; density extension and endpoint counterexamples left as authoring checks |
| `research/frontier-37-owner-30-scope-ledger.json`; `research/frontier-37-owner-30-batch-12.cross-batch-dependencies.json` (`[]`); `research/published-consumer-supplier-ledger.md` | Both pages in the owner's 60-page run scope; no cross-batch supplier or consumer edge; no Phase-2 ledger entry for this pair |
| Independent re-fetch of the three cited PDFs in `/tmp/s3a-riesz` | Byte counts and sha256-16 match the coverage `fetch_verified` records exactly: Williams `05c37240004db213` (736,373 B, 85 pp.), Guth `547e68e49cfcd334` (123,506 B, 4 pp.), Harboure `b4e12183a71b3993` (281,246 B, 19 pp.) |
| `items/*.md` resolution over all 22 distinct direct dependencies | Every out-of-run dependency exists on disk with `status: published`; the only missing ids are this pair's own not-yet-authored A items |

## Inventory against the prose design

The manifest reproduces the binding FR-13 design 1:1, in design order, and equals the plan's
canonical-coverage row 64 exactly:

| Design item (plan L941–953 and L955–962) | Manifest item |
|---|---|
| A1 Riesz potential, defined first where absolutely meaningful | `def-riesz-potential-of-order-alpha` |
| A2 near/far kernel split, $R^\alpha Mf(x)$ and $R^{\alpha-n/p}\|f\|_p$ | `lem-riesz-potential-near-far-splitting` |
| A3 Hedberg pointwise inequality | `lem-hedberg-pointwise-inequality` |
| A4 strict-range HLS theorem, $1/q=1/p-\alpha/n$ | `thm-hardy-littlewood-sobolev-fractional-integration` |
| A5 endpoint boundaries recorded, not substituted | `rem-fractional-integration-endpoints` (`proved_here: false`, with external dependency) |
| B1 scaling forces the target exponent | `ex-riesz-potential-scaling-determines-the-target-exponent` |
| B2 $p=1$ strong endpoint fails | `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint` |
| B3 critical $p=n/\alpha$ potential can diverge | `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint` |

No designed claim is dropped and no item outside the designed subject is added. Conventions
recorded in the scaffold: unit kernel $c_{n,\alpha}=1$ (the normalization used by both Williams
and Harboure), kernel $|z|^{\alpha-n}$ with the value at zero immaterial, strict range
$1<p<n/\alpha$, and the explicit statement that the definition alone makes no all-$L^p$
existence claim. Guth's kernel $|x|^{-\gamma}$ is converted as $\gamma=n-\alpha$.

## Source coverage

`node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-12.coverage.json
--require-destination` exits 0 with one advisory (`coverage-low-yield`: 11/29 scaffolded).
The disposition balance is 11+7+2+8+1 = 29. Each of the 8 declines carries a result-specific
reason (footnote 88's Fourier-symbol identity; Guth's maximal and doubling machinery already
published; Harboure's alternate weak-type/interpolation route; etc.), and the single deferral
(Williams §11.3, equations (11.13)–(11.17)) is homed on `fourier-restriction-and-the-stein-tomas-theorem`,
the planned FR-14 page that harvests it (plan row 38). The plan-level harvest row 64 assigns
exactly these eight items to "W §11.2 and Gu §§1–3, fractional integration", so the declines
remove no plan-promised content.

I re-downloaded all three complete PDFs (stamps above match) and located each cited result:

- Williams §11.2 Proposition 11.4 (printed p. 73): the statement with $1<p<q<\infty$,
  $1/p-1/q=\alpha/n$, kernel $|x-y|^{\alpha-n}$, and the complete proof — near part
  $R^\alpha Mf(x)$, far part by Hölder with $(n-\alpha)p'=n+p'n/q>n$, radius optimisation
  $R=\|f\|_p^{p/n}(Mf(x))^{-p/n}$. §11.3 (printed pp. 73–74) applies one-dimensional
  fractional integration in $t$ with $\alpha=(n-1)/(n+1)$, pinning the FR-14 use to the
  $n=1$ case of this theorem.
- Guth, complete §§1–3 (printed pp. 1–3): Proposition 0.1 (ball-indicator exponent and
  far-tail test), Theorem 0.2, the maximal material (already published as MT-17 items), and
  §3 Steps 1–3 (radial-average representation, ball-average bounds, maximal conclusion)
  underlying the Hedberg step.
- Harboure §1 (printed pp. 1–7): Theorem 1 and its homogeneity remark (printed p. 2) giving
  the dilation necessity; Theorem 3 with the $f_k\to\delta$ argument and the critical radial
  example $f=|x|^{-\alpha}(\log 1/|x|)^{-r\alpha/n}\chi$, $1<r\le n/\alpha$ (printed p. 5);
  Theorem 4 (compact support, BMO) and the renormalisation remark
  $\tilde I_\alpha f=I_\alpha f-C$ modulo constants (printed pp. 5–7). These back the
  endpoint remark and the two B counterexamples.

One recorded deviation from the design's suggested supplementary source: the design's
component rationales name "Stein V.1" for items 1 and 5, while the scaffold sources the
endpoint material from the complete Harboure §1 arguments. I read the Harboure statements and
their immediate arguments and they supply the claimed content exactly; this narrows no scope
and is non-blocking.

## Role in the library

FR-13 is the fractional-integration pair that supplies the load-bearing Stein–Tomas input.
The FR-14 design item `lem-stein-tomas-tt-star-bound-from-fractional-integration` applies
this A page's theorem with $\alpha=(n-1)/(n+1)$ in the time variable: the needed case is
$n=1$ with order $1-\alpha=2/(n+1)$, and for $n\ge2$ the FR-14 exponent $p=2(n+1)/(n+3)$
satisfies $1<p<1/(1-\alpha)=(n+1)/2$, so the A theorem's general $n\ge1$ statement covers
the consumer without change. No other plan page requires the A page; no item of this pair is
referenced by any other batch in this run; the pair has no published consumer and no ledger
entry, so it carries no Phase-2 debt.

## Dependency and readiness checks

- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-12.pages.json`:
  8 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`: 778 items
  across 60 pages, no mislabeled level or cycle; this pair's levels are 0–4 (A) and 1 (B).
- `node tools/step1-decisions.mjs check --run frontier-37-owner-30`: 778/778 `ready`,
  closed.
- `node tools/fwdcheck.mjs research/frontier-37-owner-30-batch-12.pages.json`: OK — no open
  forward reference.
- `node tools/content-policy.mjs --manifest-only research/frontier-37-owner-30-batch-12.pages.json`:
  8 items, 0 errors, 0 warnings.
- `node tools/extcheck.mjs`: 40 pre-existing published-item warnings, none involving this
  batch (the pair's items are pre-authoring, so this is a manifest-level check).
- All three A-page prerequisites and every external direct dependency resolve to published
  pages/items on disk.

## Judgment

**Sufficient.** The planned definitions, results and examples cover the intended subject —
the classical strict-range Hardy–Littlewood–Sobolev theorem for the unit Riesz potential,
proved along the maximal-function route the design fixes, with the exact strict range and an
honest separation of both endpoints, and an example companion that establishes the sharpness
of the exponent pair and the failure of both endpoint substitutions. The inventory is
design- and harvest-identical, the coverage is source-anchored with every decline justified
and the one deferral homed on a planned page, dependencies are published and level-clean, and
the pair's stated role as the FR-14 Stein–Tomas supplier is met by the theorem exactly as
scoped.

Residual uncertainty, recorded honestly (Step 3b matters, not scope blockers):

- I verified the cited statements and their immediate arguments, not every proof in the
  three PDFs; proof-level verification remains with Step 3b and the later review stages.
- The theorem's clauses that $I_\alpha f$ exists absolutely almost everywhere for every
  $L^p$ input, and that the dense-core extension is identified with the a.e. integral,
  extend what Williams states for Schwartz inputs and Guth for ball indicators; the batch
  notes and the item strategy acknowledge this (a.e. finiteness of $Mf$, Tonelli
  measurability, absolute convergence), but Step 3b must require the full argument.
- The endpoint remark is `proved_here: false` orientation; its BMO and $L^{q,\infty}$
  vocabulary has no published definition in the library today (weak type is available via
  `def-sublinear-operator-weak-and-strong-type-p-q`). Step 3b should keep the remark to the
  sourced Harboure statements and neither prove nor consume it.
- The B page carries no positive worked computation beyond the scaling necessity (no explicit
  potential of a named function). This is design-conformant, but noted for the owner.
- The unit normalization $c_{n,\alpha}=1$ differs from the classical normalized constant; it
  matches both adopted sources and no estimate carries the constant, so the choice is
  consistent, and any future page needing the standardized constant must name its own
  interface rather than amend this definition.
