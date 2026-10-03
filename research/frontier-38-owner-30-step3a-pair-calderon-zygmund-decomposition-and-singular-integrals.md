# Step 3a scope review — calderon-zygmund-decomposition-and-singular-integrals

- Run: `frontier-38-owner-30` (batch 5), role alpha, label
  `step3a-pair-calderon-zygmund-decomposition-and-singular-integrals-a78dd3cf619bf689`.
- A page: `calderon-zygmund-decomposition-and-singular-integrals`
  (order 458.02605, category `fourier-analysis`, 25 planned items).
- B page: `calderon-zygmund-decomposition-and-singular-integrals-examples`
  (order 458.02606, 6 planned items), companion pointer A↔B consistent.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair scope hash. Receipt:
  `research/frontier-38-owner-30-step3a-review-calderon-zygmund-decomposition-and-singular-integrals.json`;
  re-verify with `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.
- No owner scope decision for this page existed when this review was written
  (`research/frontier-38-owner-30-step3a-owner-<page>.json` absent).

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-38-owner-30-batch-5.pages.json` (sha256 `fab4db3cbbd4f178c9ac0026b1646cdb2664e5a73fe0c2a4bb42e5c22917023a`) | Current A inventory (25 items) and B inventory (6 items) with every statement, strategy, `deps`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-38-owner-30-batch-5.coverage.json` (sha256 `4803b199c36a44154bc7c3856b24d86fa99b14aa8fa799688e0d4062019ff0ae`) | 12 source entries (7 A page, 5 B page) with locators, 78 harvested rows, row dispositions and destinations, fetch stamps (`sha256_16`, bytes, pages) |
| `research/frontier-38-owner-30-batch-5.notes.md` (sha256 `8487931d13143d2a76a1793ae2d3de89c6aa1ccfa43aa70324a2bf35af5a2617`) | Step-1 construction record: design/plan conflict analysis, the five local additions, the published dyadic-convention finding, dependency audit, checks |
| `research/frontier-38-owner-30-batch-5.cross-batch-dependencies.json` (`[]`, sha256 `37517e5f…`) and `research/frontier-38-owner-30-cross-batch-dependencies.json` (sha256 `688e1538…`, 79 edges) | Batch 5 file is empty by design; the unified ledger has **0** edges with batch-5 as consumer or supplier and 0 edges naming any of the 31 pair ids |
| `research/plan-fourier-analysis-track.md` §FR-8 (lines 703–755), line 38, line 69, lines 183–184, line 252, line 318, lines 1299–1345, line 1444 | Controlling prose design: role ("CZ decomposition, weak type, maximal truncations, and the Mihlin application"), A inventory (20 rows), B leaves (6 rows), `requires` (FR-6 A, FR-7 A, MT-17), source set, integral-Hörmander convention, hard proof/boundary obligations; PDE S-2 transfer of the eight generic items |
| `research/plan-pde-track.md` PDE-19 (heading line 1804; `Requires` naming FR-8 at lines 1808–1811; item 10) | Consumer contract: FR-8 must supply "the generic Calderón–Zygmund kernel, decomposition, weak endpoint, interpolation/duality, strict-$L^p$ theorem, and endpoint boundaries"; PDE-19 owns the Newtonian-Hessian verification and $L^2$ multiplier seed |
| `research/plan-spec.json` rows 458.02605/.02606 | Page identity/order/kind/category/companion/`requires`; empty `items` arrays, so the manifest controls the item list; no plan conflict |
| `research/frontier-38-owner-30-owner-authoring-direction.md` (lines 7–49, 51–66) | Binding owner direction: exact 30-pair scope; local prerequisite construction on the consuming A/B page when no published supplier exists; page size ceiling |
| `research/frontier-38-owner-30-alpha-step1-drift.md` §calderon-zygmund-decomposition-and-singular-integrals and `…-drift-evidence.json` | Step-1 verdict `no-drift`; declared `requires` and 245-page closure; guidance to keep $L^2$ boundedness separate and require dense-class convergence |
| Published library | The three `requires` pages plus the 58 distinct published supplier items used by the 31 items; each supplier's statement/conventions checked against its use (see below) |
| Fetched full texts `/tmp/b5src` (7 files) | sha256 prefixes recomputed by this review and equal to the coverage stamps: Grafakos `38c219d3c9013a85`, Kinnunen `3e77f01971ffab23`, Tao notes 3 `265e56a519141feb`, Tao notes 4 `0c200b34c1c6c625`, Williams `05c37240004db213`, Hunter `0dbade1806f7a1ea`, Laugesen `b1ef00490b91e492` |

Independent reading (this review, not reused from the notes): Grafakos
*Classical Fourier Analysis* §5.3.1 (dyadic cubes with $k,m_i\in\mathbb Z$),
Theorem 5.3.1 and its parts (2)–(6) ($2^n\alpha$, $2^{n+1}\alpha|Q_j|$,
$\sum|Q_j|\le\alpha^{-1}\|f\|_1$), §5.3.2 conditions (5.3.4), (5.3.11),
(5.3.12) and the comparison sentence, Theorem 5.3.3 (weak $(1,1)$) and §5.3.4
definitions (5.3.15)–(5.3.18), Theorem 5.3.5 ($T^{(**)}:L^1\to L^{1,\infty}$,
norm $\le C_n(A_1+A_2+B)$), Theorem 6.2.7 with its dyadic partition
$\sum_{j\in\mathbb Z}\zeta(2^{-j}\xi)=1$ and estimate (6.2.13); Kinnunen
Theorem 1.12 (global decomposition, $t<\text{average}\le 2^nt$) and Theorem 2.4
(Marcinkiewicz; the splitting $f=f\chi_{\{|f|>t\}}+f\chi_{\{|f|\le t\}}$ and
the $(2c/t)$ constants that produce the pair's displayed bound); Laugesen
Ch. 20 ($\|R_j\|\le1$, $\sum R_j^2=-I$, $R_j^*=-R_j$, Propositions 20.2–20.3)
and Ch. 21 (the $2\sqrt d$ enlargement with $|x-c|\ge2|y-c|$).

## Inventory against the prose design

All 20 designed A ids and all 6 designed B leaves are present, in design order,
with the design kinds and no renamed, dropped or re-kinded row. The five
non-design items are local prerequisites of designed claims, each placed before
its consumers and each matching the owner direction's local-construction rule:

1. `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two`
   (manifest position 1) — the published MT-17 item
   `thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity`
   (verified in `items/`) interpolates weak $(1,1)$ against strong
   $(\infty,\infty)$ and cannot supply the strong-$(2,2)$ form the CZ $L^p$
   proof needs; the added form and its explicit constant match Kinnunen
   Theorem 2.4 and Grafakos Theorem 1.3.2.
2. `def-dyadic-cube-in-rn-all-generations` and
   `lem-dyadic-cubes-all-generations-partition-and-nesting` (positions 5, 6) —
   the published `def-dyadic-cube-in-rn` and
   `lem-dyadic-cubes-of-one-generation-partition-rn` are $k\in\mathbb N$ only
   (verified in `items/`), while the stopping-time selection at an arbitrary
   height $\lambda>0$ needs generations $k\in\mathbb Z$, which is the
   convention of Grafakos §5.3.1 and Kinnunen §1.2 (verified). This is the
   only published-convention conflict found, and the pair closes it locally
   without touching the published page.
3. `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`
   (position 8) — no published item supplies the decreasing-kernel domination
   used by Cotlar's inequality and its mollifier term (checked over `items/`).
4. `lem-holder-cz-kernels-satisfy-hormander-cancellation` (position 4) — no
   published item bridges the pointwise $\delta$-Hölder hypothesis to the
   integral Hörmander condition of the adopted base definition (checked over
   `items/`).

Design boundary obligations are preserved: the decomposition is stated for
$f\in L^1$, $\lambda>0$; the bad pieces have actual $\int b_j=0$; $L^2$
boundedness of $T$ is a separate hypothesis of the operator definition and is
never inferred from kernel bounds; item 13/18 separate weak $(1,1)$ from strong
$L^1$ and require convergence on a dense class before a.e. convergence is
asserted; the pointwise $\delta$-Hölder condition is presented as a sufficient
strengthening (with explicit non-converse), not a silent substitution for the
Hörmander definition; the Mihlin theorem is strict-range only and
`rem-mihlin-does-not-assert-strong-endpoint-bounds` blocks endpoint overreach.
The page's `requires` equals the design (FR-6 A, FR-7 A, MT-17) and plan-spec
rows 458.02605/.02606 agree on identity, order, kind, category, companion and
`requires`; the plan carries no competing item order. 31 items is far below the
owner's 100-item page ceiling, and every B-page `deps` entry is an A-page item
or a published item (no B→B edge, no A→B edge).

## Source coverage assessment

- `coverage-checklist --require-destination` on the owned coverage file:
  2 pages, 78 harvested rows, 0 errors, 0 warnings; every `included` row names
  a scaffolded id, and the `deferred`/`out-of-scope` rows carry reasons that
  match the design boundary (Whitney decompositions deferred to FR-9, the
  $L^\infty\to\mathrm{BMO}$ endpoint deferred to FR-10, homogeneous-space and
  rising-sun material excluded, the uniform Fourier-multiplier bound of
  Grafakos Theorem 5.4.1 replaced by the inline Cotlar route).
- `source-fetch-check`: 12/12 fetch-verified and resolved. This review
  recomputed the sha256 of the 7 underlying full texts and all equal the
  coverage stamps; `source-backing` reports 32 authored results, every one
  backed by an openable source or documented alternative argument.
- The load-bearing results used by the scaffold were re-read at the recorded
  locators (list above) and match the scaffold's statements, including the
  constants ($2^n\lambda$, $2^{n+1}$, $A_1+A_2+B$, $2\sqrt n$) and the
  hypotheses (annular size (5.3.4), Hörmander (5.3.12), $L^2$ boundedness,
  $1<p<\infty$ strict range).

## Role in the library

- Prerequisites: `fourier-multipliers-and-sobolev-characterisations`,
  `hilbert-and-riesz-transforms`, `the-maximal-function-and-lebesgue-differentiation`
  are published pages, and all 58 distinct published supplier items reachable
  from the 31 items carry `status: published`.
- In-run consumers: none. The unified ledger has no edge touching batch 5, and
  a `grep` over `library/` and `items/` finds no published page or item
  referencing this pair's A-page id.
- Planned consumers checked against the design: FR-9, FR-10, FR-11, FR-12 and
  PDE-19 all cite this A page; each named use (generic kernel definition,
  decomposition, weak endpoint, interpolation/duality, strict-$L^p$ theorem,
  endpoint remark, Mihlin) is scaffolded here. PDE-19's contract is explicit
  that PDE-19 itself verifies the cancelled Newtonian-Hessian kernel and the
  $L^2$ multiplier seed before invoking the strict-$L^p$ theorem; the B-page
  example `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` and
  the PDE-19 design agree on the Newtonian normalisation and on the removal of
  the local delta term, so the consumer interface has no missing item.

## Unmet prerequisites

**Confirmed gaps: none.** The dependency audit of the current manifest:
54 in-manifest dependency edge instances on 21 distinct in-run ids (all inside
batch 5) and 114 instances on 58 distinct published ids; 0 dependencies point
at plan-only, unbuilt or missing ids (`manifest-deps`: 31 items, 0 errors).
The only two cases where the published library could not serve a planned claim
are the dyadic-generation convention and the Marcinkiewicz $(2,2)$ form; both
are supplied by added items on this page (above). Two published supplier
identities that the scaffold uses are sourced `inline` rather than as
published statements — the Riesz adjoint identity $R_j^*=-R_j$ (Laugesen
Ch. 20; re-read by this review) and the corresponding Hilbert skew-adjointness
(published as `lem-hilbert-transform-is-skew-adjoint-on-ltwo`) — and are
derivable from the published multiplier definitions plus Plancherel, so this is
an authoring obligation, not a missing prerequisite.

Residual uncertainties, recorded honestly (none blocks scope):

1. `items/cex-hilbert-transform-is-not-strong-type-one-one` and
   `items/cex-hilbert-transform-does-not-map-linfinity-to-linfinity` are
   published and prove the same endpoint failures as the designed B leaves
   `cex-calderon-zygmund-strong-lone-bound-fails` and
   `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`. The
   design commissions these exact ids (FR-8 B leaves 3–4, transferred from
   PDE-19), and the scaffold has the new leaves reuse the published
   `ex-hilbert-transform-of-an-interval-indicator` computation instead of
   re-deriving it. This is duplication, not omission; whether the B page should
   instead cross-reference the published leaves is a Step-3/5 scope call for
   the owner, as the batch notes already record.
2. The published dyadic-cube items are $k\ge0$-only. The pair's local
   all-generations items make the pair self-contained, but the canonical
   ledger may still want to generalise `def-dyadic-cube-in-rn` and its two
   companion lemmas (or add an all-generations companion on the measure-theory
   page). That repair is outside this pair's write scope and remains an
   owner/operator item.
3. This review verified the locators of the three most load-bearing sources
   (Grafakos, Kinnunen, Laugesen) directly; the Williams, Tao and Hunter rows
   were checked only through the fetch-verified coverage record and the
   scaffold's strategies. No discrepancy surfaced, but the deeper locator
   re-read for those three is left to the ordinary item/source gates.

## Checks run (2026-10-03, current content)

| Check | Command | Result |
|---|---|---|
| Coverage | `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-5.coverage.json --require-destination` | 2 page(s), 78 harvested result(s), 0 errors, 0 warnings |
| Manifest deps | `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-5.pages.json` | 31 items, 0 errors |
| Content policy | `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-5.pages.json` | 31 scoped items, 0 errors, 0 warnings |
| Source fetch | `node tools/source-fetch-check.mjs --coverage …batch-5.coverage.json` | 12/12 fetch-verified, 12/12 resolved |
| Source backing | `node tools/source-backing.mjs --coverage … --liveness /tmp/b5-url-liveness.json` | 32 authored result(s), all backed |
| Source hash recheck | `sha256sum` of the 7 `/tmp/b5src` full texts | all 7 prefixes equal the coverage stamps |
| Scope integrity | `node tools/manifest-integrity.mjs --run frontier-38-owner-30` | 60/60 pages, no scope drift |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | 804 items, 60 pages, exit 0 |
| Step-1 readiness | `node tools/step1-decisions.mjs check --run frontier-38-owner-30` | 804/804 ready, closed |
| Cross-batch ledger | unified `…-cross-batch-dependencies.json` parse | 79 edges, 0 touching batch 5 or any pair id |

## Decision

**sufficient.** The pair covers the subject the design assigns it — the
Calderón–Zygmund decomposition, the weak $(1,1)$ endpoint, the strict-range
$L^p$ theorem with its interpolation/duality split, maximal truncations with
Cotlar and a.e. convergence, the Hilbert/Riesz corollaries, and the Mihlin
application with explicit endpoint boundaries — plus a B page of the six
designed examples and counterexamples. Source coverage is complete and
fetch-verified, all dependencies resolve to published or in-run items, and no
unmet prerequisite was found. No owner action is required for this pair; the
three observations above are recorded for the ordinary Step-3/5 scope call and
for the canonical ledger.
