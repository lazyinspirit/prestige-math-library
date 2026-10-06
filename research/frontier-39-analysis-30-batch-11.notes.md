# Batch 11 construction handoff — frontier-39-analysis-30 (Fredholm elliptic problems and the elliptic spectrum)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-17
(`research/plan-pde-track.md` L1702–1765, read together with the PDE-17
additions table at L3666–3681 and the source-audit row at L3394). A page:
`fredholm-elliptic-problems-and-the-elliptic-spectrum` (order 458.031, `pde`);
B page: `fredholm-elliptic-problems-and-the-elliptic-spectrum-examples`
(458.032). Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-11.pages.json`, the coverage record
`research/frontier-39-analysis-30-batch-11.coverage.json`, the cross-batch
input `research/frontier-39-analysis-30-batch-11.cross-batch-dependencies.json`,
the 39 Step-1 readiness records, and this note. No published item, shared plan,
engine state, verdict, or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction), so the binding materials are the run's plan, the
design section and the Alpha drift verdict for this page:
**drift-applied — compact-self-adjoint-hilbert-schmidt-and-trace-class-operators
(288.077); unbounded-self-adjoint-operators-and-stones-theorem (288.087)**
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, PDE-17 section). The
owner resolution recorded there moves
`cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth` to
PDE-18 (after higher-order boundary regularity and embedding); that item is
therefore **not** on this page, and the spectral construction here uses only
weak eigenfunctions. Both applied pages are published and are in the manifest
`requires` list.

The manifest holds **39 items: 29 on A, 10 on B**, far below the 100-item page
cap. The A page keeps every one of the design's nineteen named claims and all
eight PDE-17 A additions, and adds two local prerequisites (below). The B page
is exactly the design's six-row inventory plus the four PDE-17 B additions.

## Design, plan, and source conflicts (recorded as required)

1. **Plan `requires` versus the design's supplier list.** The canonical plan
   (`research/plan-spec.json`, order 458.031) declares the three page
   prerequisites `lax-milgram-and-weak-elliptic-solutions`,
   `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` and
   `unbounded-self-adjoint-operators-and-stones-theorem`; the design prose names
   PDE-15–PDE-16 and FA-7, FA-10, FA-13, FA-15–FA-16, FA-21. The plan controls,
   and the manifest keeps the three declared requirements; every additional
   input is consumed at item level and is either published (FA items, the
   abstract Fredholm and compact-spectral theorems, the zero-gradient and
   Fourier-expansion items) or in-run (batch-4/9/10 drafts, recorded as ten
   cross-batch rows in the batch input). **Splice finding (recorded for Step 4):** a current non-mutating
   `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` reports
   18 item-level edges into unbuilt pages as undeclared immediate prerequisites:
   13 into `lax-milgram-and-weak-elliptic-solutions` (PDE-16), 4 into
   `rellich-kondrachov-and-sobolev-compactness` (PDE-15), and 1 into
   `sobolev-poincare-and-morrey-inequalities` (PDE-14). The 4/1 split reflects
   the owner move of the extension-domain Poincaré–Wirtinger result from PDE-14
   to PDE-15. The current plan has transitive routes for all these inputs, but
   the verifier checks immediate `requires` only. Step 4 should add direct
   `requires` edges from this pair's A page to PDE-15 and PDE-14, and from its B
   page to PDE-16 and PDE-15, in both canonical plan and run manifests. These
   edges point backward and create no cycle. No page, pair, or ordering changes.
2. **Data class of the Fredholm alternative.** The design says “every datum”
   for alternative (1) and “every L² datum” in the companion corollary. The
   reduction `(I−μK_μ)u = K_μ f` produces the abstract compact operator on
   L²(Ω) and does not by itself cover general `F ∈ H^{-1}(Ω)` data (the map
   L² ↪ H^{-1} is not surjective). The manifest therefore states the
   alternative for `f ∈ L²(Ω)` and says so explicitly in
   `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`; the
   `H^{-1}` extension is deliberately not claimed. This is a recorded scope
   qualification, not a weakened design claim about the L² theory.

3. **Gårding constants made explicit.** The design row says only “under
   explicit coefficient assumptions”. The manifest states
   α = θ/2 and β = θ/2 + nM_b²/(2θ) + M_c, matching [H] (4.23) and [T]
   (10.44)–(10.47); the B-page shift example compares the general threshold
   β = 21/2 with the explicit threshold μ > 10 and records that the general
   constant is not asserted to be sharp.

4. **Self-adjointness route over both scalar fields.** The design prescribes
   “complex Lax–Milgram for a_μ ± i(·,·)₂; FA-21's Ran(L+μ±i)=L² criterion”.
   That route is followed for `K = C`. For `K = R` the ±i forms do not exist in
   the real Hilbert space, and the item uses the elementary two-line criterion
   “densely defined symmetric with full range ⇒ self-adjoint” applied to
   L + μ (surjective by symmetric Lax–Milgram). Both branches are stated in the
   item; the published range criterion remains the cited supplier. No library
   complexification construction is assumed.

5. **Multiplicity and eigenvalue order.** The design's item 15 “orders with
   multiplicity”; the manifest follows [H] Theorem 4.25 / [L] Corollary 4.8 /
   [B] Theorem 9.31 with λ₁ ≤ λ₂ ≤ … → ∞ repeated according to finite
   multiplicity, and states that the eigenvalues of K_μ are listed in
   decreasing order so that λ_j = ν_j^{-1} − μ is increasing. Eigenfunctions
   are L² classes; no canonical vector in a multiple eigenspace is chosen
   (`rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis`).

## Local additions beyond the design's inventory

- `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`
  — `C_c^∞(Ω)` is dense in `L²(Ω)` for arbitrary open Ω (and hence `H¹_0` is
  dense in `L²`). This is a genuine prerequisite: well-definedness of the
  operator `L` on `D(L)` and injectivity of `K_μ` both need “vanishing against
  `H¹_0` implies zero”, and the published density theorems on disk are for
  `R^n` or for `W^{k,p}(R^n)` only. The proof is the standard
  exhaustion-plus-mollification argument with the canonical compact exhaustion
  `{|x| ≤ m, dist(x, Ω^c) ≥ 1/m}` and the published bump/approximate-identity
  items.
- `lem-eigenbasis-expansion-in-the-form-norm` — for `u ∈ H¹_0`,
  `a_μ(u,u) = Σ_j (λ_j+μ)|(u,e_j)_{L²}|²` with expansion converging in the
  form norm. This is the prerequisite that turns the L² eigenbasis of the
  compact spectral theorem into the weighted-average identity behind the
  Rayleigh and Courant–Fischer statements (and behind the spectral-series
  solutions); it is modelled on [L] end of the proof of Theorem 4.2 and [B]
  Remark 28. Nothing else was added; no design claim was weakened or replaced.

## Choice and axiom ledger

**Inherited Axiom of Choice.** The page consumes `thm-rellich-compactness-from-
w-one-p-zero-to-lp` and `thm-rellich-compactness-from-w-one-p-to-lp-on-an-
extension-domain` (batch 9), both of which record the Axiom of Choice, and the
abstract `thm-fredholm-alternative-for-identity-minus-compact` (published,
which records AC). Following the library convention that a consumer states the
assumption its named supplier states, the manifest carries “Assume the Axiom of
Choice, inherited through the Rellich/abstract-Fredholm supplier” on items
4–21 and 23–29 of the A page and on every B item that consumes those suppliers
(`thm-discrete-spectrum…`, `lem-eigenbasis-expansion…`, the Rayleigh and
min-max items, the resolvent-series items, the spectral-series solution,
monotonicity, the Neumann theorem and remark, and the B examples that cite
them). The Axiom of Choice is declared in the `deps` of those items through
`def-axiom-of-choice` and the carrier is named in the strategy.

**Countable Choice.** Items 1–3, 6, 11–13, 15–16 and 18(as defined) use
Countable Choice through Lax–Milgram/Riesz representation and the Hilbert-space
interfaces; the two local lemmas use it only for the approximating sequence in
the density proof and the Fourier expansion. The compact self-adjoint spectral
theorem used for the eigenbasis is stated under Countable Choice and selects no
Hilbert basis of `ker K_μ`, because `K_μ` is injective; the full-AC
`cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator` is
deliberately **not** consumed.

**Choice-free items:** the definitions
`def-shifted-elliptic-solution-operator` (uses only Lax–Milgram's CC),
`def-formal-adjoint-and-adjoint-weak-dirichlet-problem` and
`def-symmetric-elliptic-weak-eigenpair` are statement-level definitions with no
new choice; the local density lemma and the Gårding/shift items carry only
Countable Choice. No incompatible-axiom branch is opened (the Axiom of Choice
implies the Countable Choice used here) and no proof or prerequisite path
reaches `deferred-set-theory-beyond-choice`.

**Open reduction option, for Step 3.** If the batch-9/10 drafts lower their
choice accounting to the plan's ZF/DC rows, the AC carry on this page can be
withdrawn item by item; the cross-batch input records each supplier so the
change is visible.

## Sources

Six full texts back the pair, all fetched in full and stamped
(`source-fetch-check --stamp`: 10/10 source entries across the two pages):

- [H] John K. Hunter, *Notes on PDE* (Chapter 4 §§4.4, 4.6–4.10, printed
  pp. 97–110): Gårding (Thm 4.21), shifted solvability (Thm 4.22), compact
  resolvent (Thm 4.23), Fredholm alternative (Thm 4.24), self-adjoint spectrum
  (Thm 4.25), spectral series.
- [L] Richard S. Laugesen, *Linear Analysis and PDE* (Chapter 4 §§4.1–4.4,
  Chapter 5 §5.1, printed pp. 83–104): abstract form spectral theorem
  (Thm 4.2), orthogonality remark, compact self-adjoint spectral theorem,
  Dirichlet/Neumann eigenbasis corollaries, nonsymmetric forms, Exercise 4.3.
- [T] Gerald Teschl, *PDE: From Classical to Modern* (Chapter 10 §§10.1–10.2,
  printed pp. 223–240): discrete spectrum (Thm 10.5), lowest eigenvalue as the
  optimal Poincaré constant (10.17)–(10.23), Gårding estimate (10.47),
  solvability (Thm 10.10).
- [B] Haim Brezis, *Functional Analysis, Sobolev Spaces and PDE* (Chapter 8
  §8.6, Chapter 9 §§9.5 and 9.8, printed pp. 231–233, 291–298, 311–312):
  one-dimensional eigenfunction expansions, the compact-operator proof of
  Theorem 9.31, Remarks 28 and 30.
- [LS] Richard S. Laugesen, *Spectral Theory of PDE* (Chapters 2, 4, 5, 6, 9,
  10, printed pp. 14–21, 27–43, 50–60): computable spectra, discrete spectral
  theorem (Thm 4.1), natural boundary conditions, Rayleigh (9.1) and Poincaré
  minimax (9.2), domain monotonicity (Thm 10.2).
- [Si] Leon Simon, *Lectures on PDE* (Lecture 10, printed pp. 100–107):
  eigenvalues with multiplicity and the eigenbasis, attainment of λ₁, the
  min-max principle, the monotonicity lemma.

The coverage record disposes of 77 harvested headings: 34 `included`,
25 `inline`, 2 `already-published`, 9 `deferred` (to the PDE-14/16/18/20 pairs
and the later PDE pages) and 7 `out-of-scope` with written reasons. The single
`coverage-low-yield` warning on the B page (4/24 “scaffolded”) reflects the
large number of `inline` dispositions, where a named source result is absorbed
into an example's verification rather than restated as its own item; the
declinations are itemised in the coverage file for Alpha.

## Checks actually run (batch scope unless noted)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-11.pages.json`:
  39 item(s), 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`:
  525 scoped item(s), **1 error naming another batch's item**
  (`lem-positive-compactly-supported-transform-bump-on-the-dual`, missing
  supplier `thm-unique-left-haar-measure-up-to-scale`), 0 warnings; zero errors
  naming a batch-11 item. (The single-batch invocation reports cross-batch
  deps as unresolvable, so the whole-run invocation is the meaningful one.)
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  exit 1 run-wide, entirely the other batches' empty scaffold inventories;
  **zero** errors name a batch-11 item or page, no level mismatch and no cycle
  (batch-11 levels run 0–14 on A, 1–14 on B; run-wide maximum 14).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-11.coverage.json --require-destination`:
  2 page(s), 77 harvested result(s), 0 errors, 1 low-yield warning (B page).
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-11.coverage.json --stamp`:
  10/10 newly stamped; check mode 10/10 fetch-verified, 0 drops.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`: all 39
  batch-11 records closed (see below); the whole-run report lists only the
  other batches' open or empty-scaffold items.
- `node tools/fwdcheck.mjs`: exit 0 (whole run); no undeclared forward
  reference is introduced by this batch.
- `node tools/extcheck.mjs`: exit 0 (whole run); the only printed line is the
  pre-existing recorded-not-proved note for `thm-urysohn-lemma`.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (whole run).
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30`: 30 pages
  reviewed, 6 spec edits applied, no blocked edges.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  batch-11 input present with 10 rows (1 page-level and 9 item-level, all
  `open` against the batch-4, batch-9 and batch-10 drafts); refresh
  deduplicates and reports no orphaned reviews.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`: exit 0
  but with the 18 batch-11 undeclared-prerequisite findings recorded as
  conflict 1; expected at Step 1 because every manifest carries more items than
  the not-yet-spliced plan.

## Dependency and supplier notes

- **In-run edges (10 rows in
  `research/frontier-39-analysis-30-batch-11.cross-batch-dependencies.json`):**
  the page-level requirement `lax-milgram-and-weak-elliptic-solutions`; item
  edges into the batch-10 drafts `thm-lax-milgram`,
  `def-uniformly-elliptic-divergence-form-operator`,
  `lem-elliptic-form-is-well-defined-and-bounded`,
  `def-weak-dirichlet-solution-for-a-divergence-form-operator` and
  `thm-lax-milgram-solvability-for-coercive-divergence-form-equations`; into
  the batch-9 drafts `thm-rellich-compactness-from-w-one-p-zero-to-lp`,
  `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain` and
  `thm-poincare-wirtinger-on-bounded-connected-extension-domains`; and into
  the batch-4 draft `thm-poincare-inequality-for-w-one-p-zero`. Neither
  supplier is treated as published; each row states the required claim, its
  use and the choice carry.
- **Downstream:** the batch-12 page
  `interior-and-boundary-sobolev-elliptic-regularity` (order 458.033) declares
  this page as its prerequisite, and the PDE-23 heat-semigroup pair consumes
  the self-adjoint nonpositive L² realisation established by
  `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`.
  No downstream batch was edited; both consumer classes were checked only for
  edge declaration, not certified.
- **Known limit to hand to Step 3:** the Fredholm alternative is stated for
  `L²` data only (conflict 2). If a later item needs the `H^{-1}` form, it must
  add the reduction through the compact operator on `H^1_0` (or the
  `H^{-1} = L²` + divergence representation of PDE-16) as a new dependency; the
  current scaffold does not assert it.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.


## Step 4 splice-preflight update

The current verifier split is 13 item edges into PDE-16 A `lax-milgram-and-weak-elliptic-solutions`, 4 into PDE-15 A `rellich-kondrachov-and-sobolev-compactness`, and 1 into PDE-14 A `sobolev-poincare-and-morrey-inequalities`. The 4/1 split reflects the owner move of the extension-domain Poincare–Wirtinger result from PDE-14 to PDE-15. All edges are semantically reachable through existing `requires` chains, but `splice-plan --verify` checks immediate page requirements and still reports them undeclared. Step 4 should add direct prerequisites from this pair's A page to PDE-15 and PDE-14, and from its B page to PDE-16 and PDE-15, in both the plan and run manifests. These four edges point strictly backward; with the two batch-10 edges they give six direct additions and no cycle.


## B9 owner scope consumer update

The shifted elliptic solution operator's compactness proof now cites B9's bounded L^2-to-H^1_0 map followed by Rellich into L^2. Its domain remains bounded open with no boundary regularity assumption. The B11 cross-batch review input records this new B11-to-B9 edge as open until the supplier's authored proof is reviewed.
