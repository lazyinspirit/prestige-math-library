# Batch 2 Step 1 scaffold — Wave Equation Representation Formulas

Run: `frontier-39-analysis-30` · pair `wave-equation-representation-formulas`
(A 458.015 / B 458.016, `pde`). Outputs: `research/frontier-39-analysis-30-batch-2.pages.json`
(28 A + 9 B items), this note, `research/frontier-39-analysis-30-batch-2.coverage.json`,
`research/frontier-39-analysis-30-batch-2.cross-batch-dependencies.json`, and 37
item-readiness records `research/frontier-39-analysis-30-step1-<id>.json`.

## Scope and design/plan reconciliation

- **Controlling design.** `research/plan-pde-track.md` §PDE-9 (lines 1185–1237, located via
  the summary-table id mention at L44) plus the "PDE-9 additions" rows of the
  density-enrichment overlay §12.4 (lines 3500–3512). The design's 14 A rows and 7 B rows
  are preserved exactly (ids, kinds, proof routes); all six overlay A rows and both
  overlay B rows are inserted. The drift review's verdict for this page is **no-drift**
  and explicitly directs to "lines 1185–1234 and 3500–3512", confirming the overlay rows
  are in scope; no additional supplier or ordering change was requested.
- **Plan-spec comparison.** `research/plan-spec.json` agrees on the page ids, orders
  458.015/.016, category, companion and the page-level `requires`
  (`heat-equation-maximum-principles-duhamel-and-smoothing`); its item arrays are empty.
  No design-versus-plan contradiction exists and the shared plan was not edited.
- **Recorded conflict 1 (design wording split).** Design item 5 is a *definition*
  (`def-spherical-mean-of-space-dependent-data`) whose description also asks to "prove
  smoothness for smooth $f$". The scaffold keeps the definition and adds the local lemma
  `lem-spherical-means-of-smooth-data-are-smooth` for the smoothness, the $r\downarrow0$
  limits and the parity; the definition's strategy states that the zero-radius convention
  is a convention whose limit form is proved by that lemma.
- **Recorded conflict 2 (overlay shorthand realized classically).** Two overlay A rows use
  distributional language: `lem-odd-dimensional-wave-kernels-obey-the-radial-recursion`
  ("relate the fundamental solution in dimension $n+2$ to a radial derivative of that in
  dimension $n$") and `thm-support-dichotomy-for-free-wave-fundamental-solutions`
  ("the kernel is supported on the cone in odd dimensions and fills its interior in even
  dimensions"). The page's binding design route is the elementary Poisson/spherical-mean
  one (Teschl's Theorem 7.7/7.8 route; the design's "Hard proof obligations" require the
  $r=0$ treatment rather than division by $r$), and the distributional route of Oh Ch. 7
  would require Riesz-distribution pullback machinery that is not on this page. The two
  rows are therefore scaffolded in their classical equivalent: the operator intertwining
  $L_{n+2}[w_r/r]=r^{-1}\partial_r[L_nw]$ (Ivrii Problem 14(a), Teschl Lemma 7.6), and the
  support dichotomy stated for the *solution kernels* of the explicit formulas (sphere-
  supported in odd dimensions, interior-supported with the nonzero kernel
  $c^{1-n}D_t^{k-1}[(n!!V_n)^{-1}(c^2t^2-\rho^2)^{-1/2}]$ in even dimensions). No claim is
  dropped; the identification of the classical statement with the overlay's content is
  in each item's strategy and is recorded here for the owner.
- **Recorded conflict 3 (ordering deviation).** The design numbers the Duhamel principle
  (item 11) before the data-attainment lemma (item 12), but the Duhamel differentiation
  uses exactly the velocity-attainment clause $\partial_\tau W[g](\cdot,0)=g$. The
  manifest array is in dependency order and places
  `lem-wave-formulas-attain-the-cauchy-data` (design 12) before
  `thm-wave-duhamel-principle` (design 11). For the same reason the forced one-dimensional
  formula (design 4) is placed after d'Alembert and the one-dimensional overlay items,
  whose moving-endpoint machinery it uses. No other display order changes.
- **Recorded deviation 4 (Requires prose).** The design's "Requires" line additionally
  names PDE-3, MT-11 and "the published one-variable wave/ODE, trigonometric and
  differentiation-under-integral items". PDE-3/MT-11/PDE-2D and
  differentiation-under-the-integral items are item-level dependencies (all published).
  No published one-variable wave item exists on disk (searched; only
  `ex-classification-of-laplace-heat-and-wave-equations` classifies the operator), so the
  one-dimensional development is built locally (factorisation, general solution,
  d'Alembert, forcing). No scaffolded item consumes a trigonometric identity: the design's
  mention is not load-bearing for this page's route, and no dependency was invented to
  match the prose.
- **Recorded deviation 5 (uniqueness placement).** Uniqueness for $n\ge2$ classical
  solutions is deliberately *not* claimed on this page; the sources prove existence and
  data attainment here (Teschl Theorem 7.2/7.7/7.8) and defer uniqueness to their energy
  section, which is this run's next PDE pair (PDE-10 item 4,
  `cor-energy-uniqueness-for-the-wave-cauchy-problem`). One-dimensional uniqueness is
  proved locally from the general solution. This keeps every dependency backward.

## Item inventory and dependency audit

**A page (28 items; levels 0–9).** Design rows (ids, levels): wave data 0; factorisation 1;
d'Alembert 3; forced 1d 4; spherical mean 0; Euler–Poisson–Darboux 2; Kirchhoff 3;
Poisson 4; odd formula 4; even formula 5; Duhamel 7; attain data 6; local determination 9;
naming remark 5. Overlay rows: d'Alembert attains data 4; 1d domain of dependence 5;
forced 3d retarded potential 8; radial recursion 1; support dichotomy 6; time reversal 1.
Local prerequisites added for sound closure (all on the same A page): iterated radial
identity 0; EPD-transform expansion 0; vanishing first sphere moment 0; moving-endpoint
integral rule 0; ball–sphere mean identity 1; sphere-to-ball projection 1; general
one-dimensional solution 2; smoothness/parity/limits of spherical means 1. Total 28 < the
100-item cap.

**B page (9 items; levels 3–8), a leaf.** Travelling waves, compactly supported velocity,
radial reduction, constant-velocity Kirchhoff check, 2d interior tail, sphere/ball
normalisation counterexample, characteristic-line counterexample, point-source front,
displacement-versus-velocity supports. Every B dependency is this batch's A items or an
earlier B item; nothing outside the B page consumes it.

**Verified supplier interfaces (read, not inferred from page membership).** Published
PDE-2D `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`,
`def-surface-integral-on-a-compact-c-one-hypersurface` (+ its chart-independence lemma);
published PDE-3 `def-spherical-averages-and-local-ball-means-in-rn`,
`lem-sphere-and-ball-measures-scale`, `lem-radial-derivative-of-a-spherical-average`;
MT-11 `def-polar-surface-measure-on-the-unit-sphere`,
`thm-polar-coordinates-formula-for-lebesgue-measure`,
`lem-euclidean-chart-measure-agrees-with-polar-surface-measure`; the real-analysis items
`thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`,
`thm-differentiation-under-the-integral-sign`, `cor-primitives-of-a-continuous-function`,
`thm-newton-leibniz-with-interior-derivative`, `cor-zero-derivative-implies-constant`,
`thm-clairaut-schwarz-mixed-partials`, `thm-chain-rule-for-total-derivatives`,
`thm-linear-change-of-variables-for-lebesgue-measure`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-heine-cantor-metric`, `thm-continuous-implies-integrable`; and PDE-6
`thm-poisson-kernel-for-a-ball-in-rn` (naming remark only). Hypotheses, norm
conventions (normalised spherical mean $\omega_{n-1}=nV_n$), direction and regularity
class were checked for each use. Formula constants were re-derived independently:
Kirchhoff $\partial_t[tM_{u_0}(x,ct)]+tM_{u_1}(x,ct)$ verified by direct substitution and
constant/quadratic data; the odd-dimensional formula
$(n-2)!!^{-1}[\partial_tD_t^{k-1}(t^{n-2}M_{u_0}) + D_t^{k-1}(t^{n-2}M_{u_1})]$ checked at
$n=3,5$ including full $c$-cancellation; the even-dimensional formula
$c^{1-n}[\partial_tD_t^{k-1}W_{u_0}+D_t^{k-1}W_{u_1}]$ obtained twice (scaling of the
unit-speed formula and descent from $n+1$) and checked at $n=2,4$; the constant identity
$2\,n!!V_n/\omega_n=(n-1)!!$ verified from the $\Gamma$-function forms. The attainment
expansion was checked by hand for $n=2,3,4$, including
$\int_{B_1}(1-|z|^2)^{-1/2}dz=n!!V_n/(n-1)!!$ and $G_f(0)=f(x)/(n-1)!!$.

**Axiom of Choice / countable choice.** Every item whose statement contains a sphere or
weighted-ball integral states the Axiom of Countable Choice explicitly and lists
`def-countable-choice`; the 1d items (factorisation, general solution, d'Alembert, forcing,
domain of dependence, travelling waves, radial reduction, characteristic-line
counterexample) are choice-free. No item uses full AC, no Recorded (`proved_here: false`)
result is a dependency target, and no foundations or
`deferred-set-theory-beyond-choice` path is opened.

**No published defects found in the actual prerequisites.** Every consumed published
interface was read and matched its stated hypotheses. Two carried caveats, not defects:
(i) the plan's binding UC34 reconciliation says the radial-average/sphere-scaling/
mean-value suppliers carry Countable Choice that consumers must propagate — this page
propagates it explicitly in every consuming statement; (ii) the PDE-3 suppliers
`def-spherical-averages-and-local-ball-means-in-rn` and
`lem-radial-derivative-of-a-spherical-average` are `ai-altered` statements with local
repair reviews (2026-09-24/26), i.e. recorded local repairs rather than whole-item fresh
audits; no mathematical mismatch with our uses was found on the current bytes.

## Sources

Seven authoritative treatments were fetched in full and inspected; all seven are stamped
(`source-fetch-check --stamp`, 7/7 fetch-verified) and live (`url-sweep`, 7/7), with no
source drops and no retry allowances started:

- **Teschl**, *Partial Differential Equations* (archived author manuscript) — §7.1
  Kirchhoff (7.10)/Theorem 7.2, Poisson (7.14)/Theorem 7.4, Corollaries 7.3/7.5; §7.2
  spherical means (7.16), Euler–Poisson–Darboux (7.17), Lemma 7.6 (7.18), the odd formula
  (7.19)–(7.23)/Theorem 7.7, even descent (7.24)/Theorem 7.8, Corollary 7.9 (Duhamel),
  Problems 7.10–7.12; §3.3 and §4.4 for the string/line material. Primary treatment.
- **Ivrii**, *Partial Differential Equations* (author-hosted textbook) — §2.3.2–2.3.3
  general solution and d'Alembert; §2.3 Problems 6 and 14 (radial reduction and the
  $n\mapsto n+2$ recursion); §2.4.1 Proposition 2.4.1 (characteristic coordinates);
  §2.5.1–2.5.2 forced d'Alembert and the Duhamel integral with the moving-endpoint rule
  (2.5.10); §9.1.1–9.1.6 three-dimensional Kirchhoff, retarded potential (9.1.13),
  spherical means, and the two-dimensional method of descent (9.1.15)–(9.1.16).
- **Oh**, *Math 222A lecture notes* — Chapter 7 (printed pp. 103–112): d'Alembert, the
  forward fundamental solution and the explicit $d=1,2,3$ kernels (distributional route;
  used only for the support contrast and dispositions).
- **Hunter**, *Notes on PDE* — Chapter 7 §7.1 (wave equation, general solution,
  reversibility, finite-propagation list) and §7.1.1 (energy; deferred).
- **Speck**, MIT 18.152 — Class Meeting #10 (d'Alembert with speed $c$, Remark 4.0.4) and
  Class Meeting #12 (Kirchhoff's formula, unit speed).
- **Jakobsen**, *An Introduction to PDE* (arXiv:1901.03022) — §6.2 (characteristic
  derivation), §10.3.1 (inhomogeneous wave equation and domain of dependence), §11.1.3
  (Fourier route).

**Harvest dispositions.** 63 harvested headings/results: 31 `included`, 12 `inline`,
10 `deferred` (destinations: `wave-energy-finite-propagation-and-huygens`,
`wave-energy-finite-propagation-and-huygens-examples`,
`fredholm-elliptic-problems-and-the-elliptic-spectrum`), 10 `out-of-scope` with
result-specific reasons (distributional fundamental solutions and Lorentz geometry,
Fourier-transform routes owned by the Fourier track, Hunter's weak-solution Galerkin
theory, Ivrii's limiting-amplitude principle). No advisory warning: 31/63 included, above
the low-yield threshold. Evans is the plan's publisher-hosted cross-check and cannot be
fetch-verified, so it backs no coverage row; its §2.4.1–2.4.2 route is represented by the
open Ivrii/Teschl/Speck treatments.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-2.pages.json` → **37 item(s), 0 missing, 0 errors**.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-2.pages.json` → **37 scoped item(s), 0 errors, 0 warnings**.
- Whole-run manifests: `manifest-deps` over all 30 batch files → **390 item(s), 0 errors**; whole-run `content-policy --manifest-only` → **390 scoped item(s), 1 error**, in **batch 27** (`lem-positive-compactly-supported-transform-bump-on-the-dual` depends on `thm-unique-left-haar-measure-up-to-scale`, absent) — a sibling batch's finding, not this pair's; recorded here for the owner and not repaired from this batch.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-2.coverage.json --require-destination` → **1 page, 63 harvested, 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage … --stamp` → **7/7 newly fetch-verified; 7/7 resolved**; check mode (no network) still resolves all 7. `node tools/url-sweep.mjs --coverage … --recover --fail-on-dead` → **7/7 live, 0 failed**; `node tools/source-backing.mjs --coverage … --liveness … --require-verified` → **18 authored result(s) backed, exit 0**.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → whole-run form reports only `empty scaffold inventory` for sibling pages still being scaffolded; **no error line names a batch-2 item or page**. Run against the two batch-2 pages (temp state copy): **37 items, 0 label mismatches, no cycle, maximum level 9**.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → **390/390 items hash-current `ready`; 0 batch-2 work rows** (the remaining 32 rows are empty-inventory page rows of sibling batches).
- Link-subset audit over all 37 items (every `[[id]]` in a statement or strategy is listed in that item's `deps`) → **0 violations**; no forward same-page dependency.
- `node tools/fwdcheck.mjs --quiet` → **exit 0** (no undeclared/dangling/cyclic forward references; this batch declares none). `node tools/extcheck.mjs` → **exit 0** (standing `unproved-on-published` advisories are on unrelated published items; none on this pair). `node tools/validate-plan.mjs research/plan-spec.json` → **exit 0**.
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → **60 page(s) owed, 60 in the manifests, no scope drift**; `node tools/drift-review-check.mjs --run frontier-39-analysis-30` → **30 page(s) reviewed, 6 spec edit(s) applied (plan-owned), no blocked edges, 50 requires edges checked, every owed page above 95% published-or-earlier-in-run**.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` → **exit 0**; batch 2 is now a reviewed input. `--require-reviewed` still exits nonzero until every sibling batch supplies its input — a whole-run condition, not a batch-2 finding. This batch's input records one page edge: consumer `wave-equation-representation-formulas`, supplier `heat-equation-maximum-principles-duhamel-and-smoothing` (the plan's page-order prerequisite; **no wave item depends on a heat item**, so no interface can change under it). The unified ledger also carries the downstream edge batch 3 owes on this page (`wave-energy-finite-propagation-and-huygens` requires this page); that review input belongs to batch 3.

## Handoff

This batch is mathematically scaffolded and READY for owner/operator reconciliation and the
Step-3 authoring review; neither the readiness records nor this note are independent
mathematical approval. Thirty-seven new ids have no item files yet. Unresolved items
requiring owner attention: none specific to this batch. The recorded deviations are the
design-split of item 5, the classical rendering of the two overlay "kernel" rows, the
dependency-order placement of the attainment and forced-1d items, the deferred
$n\ge2$ uniqueness, and the attribution of the single whole-run policy error to batch 27.
No published content, shared plan, engine state, verdict or `.autopilot` file was edited.


## Owner correction after scaffold

The initial clause (i) said pointwise agreement on the sphere determines the solution value; batch 3's Kirchhoff counterexample shows that is false because the normal derivative contributes. The manifest now states the shell-support result correctly: the data-to-value distribution kernels are supported on the sphere, so agreement on an open neighbourhood of it suffices. Strategy uses the odd-dimensional spherical-mean formula and the same counterexample. Item ID, dependencies, and planned odd/even dichotomy remain unchanged; the owner readiness record was refreshed.

The direct example consumer `ex-two-dimensional-wave-has-an-interior-tail` was also re-read after this correction. Its Poisson-formula proof of a positive interior contribution is unchanged; its contrast now refers to the odd-dimensional evaluation kernels being supported on the sphere, not to pointwise-trace dependence. Its readiness record was refreshed.

## Step-3b page-edge audit (2026-10-05)

The earlier plan-spec edge from this wave page to the heat-equation page was a surplus ordering edge, not part of PDE-9's design prerequisites. The authoritative `research/plan-pde-track.md` §PDE-9 requires PDE-3 and MT-11 plus published one-variable wave/ODE, trigonometric and differentiation-under-the-integral items; the design graph records PDE-3 + PDE-2D → PDE-9. No wave item or page-level proof step uses a heat-page item. The edge was removed from the plan-spec and batch-2 manifest, and its cross-batch review row is retained with status `removed` and this exact evidence. All 28 A and 9 B item statements, proofs, dependency lists and levels are unchanged. The wave-energy page PDE-10 still requires this page, so downstream scope is unchanged.
