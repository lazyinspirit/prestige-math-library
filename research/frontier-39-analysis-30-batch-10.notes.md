# Batch 10 construction handoff — frontier-39-analysis-30 (Lax–Milgram and weak elliptic solutions)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-16
(`research/plan-pde-track.md` L1643–1699, read together with the PDE-16
additions table at L3647–3664 and the source audit rows at L3393 and L3407).
A page: `lax-milgram-and-weak-elliptic-solutions` (order 458.029, `pde`);
B page: `lax-milgram-and-weak-elliptic-solutions-examples` (458.03). Only this
batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-10.pages.json`, the coverage record
`research/frontier-39-analysis-30-batch-10.coverage.json`, the cross-batch
input `research/frontier-39-analysis-30-batch-10.cross-batch-dependencies.json`,
the 38 Step-1 readiness records, and this note. No published item, shared plan,
engine state, verdict, or other batch was edited.
`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction), so the binding materials are the run's plan, the
design section and the Alpha drift verdict for this page:
**no-drift** (`research/frontier-39-analysis-30-alpha-step1-drift.md`,
`lax-milgram-and-weak-elliptic-solutions` section, which requires Hilbert Riesz,
adjoints, completeness, contraction mapping, Poincaré and trace lifting to stay
in the Rellich closure, and states the Neumann hypotheses and the disconnected
per-component compatibility requirement). All three instructions are
implemented.

The manifest holds **38 items: 27 on A, 11 on B**, far below the 100-item page
cap. The B page is exactly the design's seven-row inventory plus the four
PDE-16 B additions. The A page keeps every one of the design's seventeen named
claims and all nine PDE-16 A additions, and adds one local prerequisite
(listed below). The page consumes the Rellich closure through the batch-9
Poincaré–Wirtinger theorem and the batch-4 zero-trace Poincaré inequality; no
later spectral theorem is used.

## Design, plan, and source conflicts (recorded as required)

1. **Plan `requires` versus the design's supplier list.** The canonical plan
   (`research/plan-spec.json`, order 458.029) declares the single page
   prerequisite `rellich-kondrachov-and-sobolev-compactness`; the design prose
   names PDE-13–PDE-15, MT-14–MT-16, FA-2, FA-7, FA-10, FA-13 and the published
   Banach fixed-point theorem. The plan controls, and the manifest keeps the
   single declared requirement; every additional input is consumed at item
   level and is either published (PDE-11/12/13 items, FA-2/FA-13 items, the
   Banach fixed-point theorem, measure-theory items) or in-run (the batch-4
   and batch-9 drafts, recorded as eight cross-batch rows in the batch input).
   **Splice finding (recorded, not repaired here):**
   `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` reports
   the six item-level edges into the unbuilt PDE-14 page as undeclared
   prerequisites, because the plan-spec licenses only the transitive chain
   PDE-16 → PDE-15 → PDE-14 while the design names PDE-14 directly. The deps
   are genuine (the zero-trace Poincaré inequality). The verifier checks immediate
   `requires`, so Step 4 should add a direct prerequisite to PDE-14 from both
   pages of this pair, in the plan and run manifests. Both edges are backward and
   add no cycle.
2. **The $H^{-1}$ convention.** The design defines
   $H^{-1}(\Omega)=(H^1_0(\Omega))^*$ and, in the same list, states Lax–Milgram
   for a bounded **antilinear** functional while the page's sesquilinear forms
   are linear in the first argument and conjugate-linear in the second (the
   plan's §12 convention audit: “PDE-16 retains the complex sesquilinear,
   conjugate-linear-in-the-second slot convention”). With the Banach dual
   consisting of linear functionals, those two statements are incompatible as
   written. The manifest resolves the conflict by defining $H^{-1}(\Omega)$ as
   the bounded conjugate-linear functionals, with the isometric conjugate
   identification $F\mapsto\overline{F(\cdot)}$ onto the Banach dual, and states
   that the design's notation $(H^1_0)^*$ is read through this identification.
   In the real case the two classes coincide. This is recorded, not concealed;
   the pairing is distinguished from the $L^2$ inner product in
   `def-h-minus-one-as-the-dual-of-h-one-zero`.
3. **Two proof routes for Lax–Milgram.** The design's hard-obligation
   paragraph and the plan's §8 choice ledger fix the contraction route
   (“FA-13 creates $A$, item 3 makes $I-\rho A$ a contraction, and the fixed
   point solves the variational equation”; “the PDE proof adds only a canonical
   contraction iterate”), which is Brezis's Stampacchia proof with $K=H$. The
   §12 additions table instead details the classical closed-range/density route
   (Laugesen Theorem 4.12, Simon Lecture 7, Brezis Remark 8). The manifest
   implements the contraction route in `thm-lax-milgram`
   (`lem-coercivity-makes-a-small-form-step-a-contraction` plus the published
   Banach fixed-point theorem) and keeps all five operator-level additions as
   separate items with their own proofs: `lem-coercive-form-operator-is-bounded-below`
   and `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha` are used by
   the theorem and its corollary, `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`
   supplies the adjoint-form coercivity consumed by the next page's adjoint
   weak problem, and `lem-bounded-below-operator-has-closed-range` /
   `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense` record
   the closedness and density halves of the classical route. Step-3
   adjudication may wire the latter two into the theorem as the alternative
   route if it judges the contraction route alone sufficient; no plan claim was
   weakened, and the duplication with the published
   `thm-bounded-below-iff-injective-with-closed-range` (the easy direction) is
   disclosed in the item's strategy.
4. **Neumann hypotheses.** The design row says “a bounded functional
   $F\in(H^1(\Omega))^*$ satisfying $F(1)=0$ determines a unique mean-zero
   $H^1$ solution”. The drift verdict adds the domain hypothesis: a bounded
   connected extension domain, with compatibility on each component when
   $\Omega$ is disconnected. The manifest states the connected case with the
   batch-9 Poincaré–Wirtinger supplier, records the disconnected per-component
   condition as a caveat (no unproved disconnected theorem is asserted), and
   puts the componentwise kernel on the B page
   (`ex-neumann-kernel-dimension-equals-the-number-of-connected-components`).
5. **Smallness condition made exact.** The design says only “an explicit
   sign/smallness condition on lower-order terms”. The manifest states
   $\theta-C_PM_b-C_P^2M_c>0$ (for $b\equiv0$: $M_c<\theta/C_P^2$), with the
   estimate $\|u\|_{H^1_0}\le(1+C_P^2)\alpha_0^{-1}\|F\|_{H^{-1}}$,
   matching Hunter's Gårding shift $\gamma$ and Simon's strict-coercivity
   discussion; the constants are traced to the batch-4 Poincaré supplier.
6. **The unscaffolded PDE-14 dual estimate.** The §12 addition
   `cor-dual-sobolev-estimate-from-ltwo-to-h-minus-one` (PDE-14) was not
   scaffolded by the completed batch-4 manifest (checked in full: the id is
   absent). The cheap estimate $\|F_f\|_{H^{-1}}\le C_P\|f\|_{L^2}$ is instead
   supplied on this page by `lem-ltwo-and-divergence-data-embed-in-h-minus-one`
   and its B-page computation `ex-ltwo-forcing-defines-an-h-minus-one-functional`.
   This is a placement resolution, not a scope change; the PDE-14 page did not
   declare the row and cannot be edited from this batch.
7. **Exact interval threshold added locally.** The owner repair adds
   lem-sharp-dirichlet-poincare-inequality-on-an-interval, proved from a
   ground-state identity, the H^1_0 closure and explicit endpoint cutoffs.
   The helper gives the sharp constant 1/pi and weak sine identity without
   assuming a complete sine basis. The adverse-reaction counterexample now
   proves coercivity for c<pi^2, failure for c>=pi^2, and nonuniqueness at the
   endpoint; its original polynomial witness remains. Spectral completeness
   stays with PDE-17. Brezis §8.6, printed pp. 231--233 (PDF pp. 246--248), is
   recorded as the independent source read.
8. **The plan's non-open [ACM] source.** The plan names Ambrosio–Carlotto–
   Massaccesi, *Lectures on Elliptic Partial Differential Equations*, as a
   primary source for this pair. Five retrieval attempts failed to reach a
   full text: `https://ricerca.sns.it/handle/11384/81586` answers a Cloudflare
   challenge page; `https://cvgmt.sns.it/paper/1280` is a landing page with no
   downloadable file; `https://www.research.unipd.it/handle/11577/3317125?mode=complete`
   is a metadata record with no full text; the publisher DOI
   `https://doi.org/10.1007/978-88-7642-651-3` leads to the paywalled ebook;
   and a targeted search found no author-hosted or preprint copy. Every
   PDE-16 claim is backed by the five fetch-verified full texts below
   (in particular Laugesen Theorem 4.12 for the classical proof and Brezis
   §5.3 for the contraction proof), so no result depends on [ACM] and no
   mathematical escalation is needed; the failure is recorded here as source
   history, and Step 5 may still check the claim against the printed book if
   the owner supplies access.

## Local additions beyond the design's inventory

- `lem-w-one-two-is-a-hilbert-space` — $H^1(\Omega)=W^{1,2}(\Omega)$ is a
  Hilbert space for the derivative inner product
  $(u,v)_{L^2}+\sum_i(D_iu,D_iv)_{L^2}$, and $H^1_0$ is a closed subspace. This
  is a genuine prerequisite: Lax–Milgram is applied on $H^1$ in the positive-
  reaction corollary and on the closed mean-zero subspace in the Neumann
  theorem, and the design's inventory names no item constructing that inner
  product. The proof uses the published Sobolev completeness, the parallelogram
  law and Jordan–von Neumann polarization, and the closed-subspace completeness
  lemma. Nothing else was added; no design claim was weakened or replaced.

## Choice and axiom ledger

**The page's own machinery** is Countable Choice, used exactly through the
Riesz representation theorem (FA-13) in
`lem-form-to-bounded-operator-by-hilbert-riesz` and every item that consumes
an operator or a duality statement: items 2–9, 11, 13, 14, 18–24 and the B-page
examples that cite them. The published Banach fixed-point theorem adds no
choice assumption (its contract is recursion/metric completeness only), and the
contraction iterates are canonical, so `thm-lax-milgram` inherits Countable
Choice and nothing more, matching the plan's §8 row (“inherits the choice
strength of FA-13's Riesz representation and the published Banach fixed-point
theorem; the PDE proof adds only a canonical contraction iterate”).

**Inherited Axiom of Choice.** The plan's §8 ledger books the PDE-14 Sobolev/
Poincaré extraction at “ZF relative to measure theory”, but the completed
batch-4 scaffold *records* `def-axiom-of-choice` on
`thm-poincare-inequality-for-w-one-p-zero`, and the library convention is that
a consumer states the assumption its named supplier states. The manifest
therefore carries the Axiom of Choice on the items that consume that supplier
(`lem-ltwo-and-divergence-data-embed-in-h-minus-one`,
`lem-coercivity-of-the-principal-dirichlet-form`,
`thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
`thm-lax-milgram-solvability-for-coercive-divergence-form-equations`,
`ex-ltwo-forcing-defines-an-h-minus-one-functional`,
`cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity`) and on the
items that consume the batch-9 Poincaré–Wirtinger theorem or the published
trace chain (`thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace`,
`cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
`lem-classical-solutions-satisfy-the-weak-formulation`,
`cor-weak-solution-depends-continuously-on-data`,
`ex-weak-dirichlet-poisson-problem-on-an-interval`,
`ex-nonsymmetric-coercive-elliptic-form`, `cex-neumann-poisson-...`,
`cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting`,
`ex-neumann-kernel-dimension-equals-the-number-of-connected-components`).
`def-axiom-of-choice` is declared in each of those items' `deps` and the
carrier is named in the strategy. **Open reduction option, for Step 3:** if
PDE-14 lowers its accounting to the plan's ZF row, the carry can be withdrawn
item by item; the cross-batch input records this so the PDE-14 owner can see
the consumer consequence.

**Choice-free items are preserved:** the definitions
`def-bounded-coercive-and-symmetric-sesquilinear-forms`,
`def-h-minus-one-as-the-dual-of-h-one-zero`,
`def-uniformly-elliptic-divergence-form-operator`,
`def-weak-dirichlet-solution-for-a-divergence-form-operator` and the general
lemma `lem-bounded-below-operator-has-closed-range` uses Countable Choice
exactly for the sequentially-closed-to-closed step, as its proof contract and
dependency list record; `lem-w-one-two-is-a-hilbert-space` states Countable
Choice through the Sobolev completeness interface. No incompatible-axiom branch is opened (the
Axiom of Choice implies the Countable Choice used here) and no proof or
prerequisite path reaches `deferred-set-theory-beyond-choice`.

## Sources

Five full texts back the pair, all fetched in full and stamped
(`source-fetch-check --stamp`: 8/8 source entries across the two pages):

- [H] John K. Hunter, *Notes on PDE* (Chapter 4 §§4.1–4.7, printed pp. 91–105):
  weak formulation, $H^{-1}$ (Theorem 4.7), Poincaré (Theorem 4.9), weak
  Dirichlet solvability (Theorem 4.11), general divergence form, and the real
  Lax–Milgram statement (Theorem 4.20) with the Gårding-type estimate (4.23).
- [L] Richard S. Laugesen, *Linear Analysis and PDE* (Chapter 3 §3.10 and
  Chapter 4 §§4.1–4.4, Chapter 5 §5.1, printed pp. 79–107): Theorem 4.12
  (complex sesquilinear Lax–Milgram with the closed-range/density proof),
  Corollary 4.13, the generalized Poisson equation and the Neumann Exercise
  5.1.
- [B] Haim Brezis, *Functional Analysis, Sobolev Spaces and PDE* (Chapter 5
  §§5.2–5.3, Chapter 8 §§8.3–8.4, Chapter 9 §§9.4–9.5, printed pp. 136–140,
  224–233, 287–298): Stampacchia/Lax–Milgram with the strict-contraction proof
  and the estimate, $H^{-1}(I)$, the trace range, Theorem 9.21 and the
  Neumann Example 4.
- [T] Gerald Teschl, *PDE: From Classical to Modern* (Chapter 10 §§10.1–10.2,
  printed pp. 223–240): the weak Poisson problem and Theorem 10.9 with the
  bounded-inverse remark.
- [Si] Leon Simon, *Lectures on PDE* (Lecture 7, printed pp. 68–75):
  ellipticity/boundedness conditions, the Lax–Milgram Lemma with the
  closed-range and orthogonality proof, the bounded-below estimate and the
  coercivity/Gårding discussion.

[ACM] could not be fetch-verified (five attempts, conflict 8 above); every
result it would have backed is independently covered by [H]/[L]/[B]/[T]/[Si].
The coverage record disposes of 71 harvested headings: 18 `included`,
36 `inline`, 1 `already-published`, 8 `deferred` to the two later in-run PDE
pages, and 8 `out-of-scope` with written reasons. The two `coverage-low-yield`
warnings (17/51 and 1/20 “scaffolded”) reflect the large number of `inline`
dispositions, where a named result is absorbed into an item's proof rather than
restated as its own item; the declinations are itemised in
`research/frontier-39-analysis-30-batch-10.coverage.json` for Alpha.

## Checks actually run (batch scope unless noted)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-10.pages.json`:
  38 item(s), 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`:
  390 scoped item(s), **1 error naming another batch's item**
  (`lem-positive-compactly-supported-transform-bump-on-the-dual`, batch 25/26,
  missing supplier `thm-unique-left-haar-measure-up-to-scale`), 0 warnings;
  zero errors naming a batch-10 item.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  the whole-run exit 1 is entirely the other batches' empty scaffold
  inventories; **zero** errors name a batch-10 item and no level mismatch or
  cycle is reported (batch-10 levels run 0–8 on A and 0–7 on B; run-wide 0–9).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-10.coverage.json --require-destination`:
  2 page(s), 71 harvested result(s), 0 errors, 2 low-yield warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-10.coverage.json`:
  8/8 source(s) fetch-verified (check mode, no drops).
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`: all 38
  batch-10 records closed (see below); the whole-run report lists the other
  batches' open and empty-scaffold items.
- `node tools/fwdcheck.mjs`: exit 0 (whole run); no undeclared forward
  reference is introduced by this batch.
- `node tools/extcheck.mjs`: exit 0 (whole run); the only printed line is the
  pre-existing recorded-not-proved note for `thm-urysohn-lemma`.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (whole run).
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30`: 30 pages
  reviewed, no blocked edges.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  batch-10 input present with 8 rows (1 page-level and 7 item-level, all
  `open` against the batch-4 and batch-9 drafts); refresh deduplicates and
  reports no orphaned reviews. `--require-reviewed` is red run-wide because
  most other batches have not yet supplied inputs — a run-level dependency,
  not a batch-10 blocker.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`: exit 1
  (expected at Step 1: every batch's manifest carries more items than the
  not-yet-spliced plan) and, additionally, the six undeclared-prerequisite
  findings recorded as conflict 1 above; no other batch-10 finding.
- Repeated after the final edits (choice-carry accounting, the arithmetic
  repairs in items 14, 17, 20, 24, 26 and the B-page sharpness example, and the
  final LaTeX/typo normalisation): `manifest-deps` 390/0 run-wide and 38/0 on
  this batch; `item-dependency-levels` 0 batch-10 errors and no level mismatch
  or cycle; `coverage-checklist` 71/0/2; `source-fetch-check` 8/8; ledger
  refreshed; `fwdcheck`/`extcheck`/`validate-plan`/`drift-review-check` all
  exit 0; `step1-decisions check` reports 390/390 items ready with **zero**
  batch-10 items in the work list (the whole-run `closed: false` is only the
  other batches' empty scaffold inventories). After the text normalisation the
  16 readiness records whose item hash had changed were refreshed and the
  unchanged 22 records were left intact.

## Dependency and supplier notes

- **In-run edges (8 rows in
  `research/frontier-39-analysis-30-batch-10.cross-batch-dependencies.json`):**
  six item-level edges consume the batch-4 (PDE-14) draft
  `thm-poincare-inequality-for-w-one-p-zero` — the zero-trace Poincaré
  inequality used for the $H^{-1}$ embedding bound, the coercivity constant of
  the principal Dirichlet form, the weak Poisson estimate, the smallness
  condition and the B-page scaling witness — and one item-level edge consumes
  the batch-9 (PDE-15) draft
  `thm-poincare-wirtinger-on-bounded-connected-extension-domains` for the
  mean-zero Neumann coercivity. The page-level row is the plan's declared
  `requires`. Neither supplier is treated as published; each row states the
  required claim, its use and the choice carry, and the page-level row records
  the splice finding about the missing direct `requires` edge.
- **Downstream:** the batch-11 page `fredholm-elliptic-problems-and-the-elliptic-
  spectrum` declares `lax-milgram-and-weak-elliptic-solutions` as its
  prerequisite (plan-spec order 458.031) and consumes
  `thm-lax-milgram`, `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha`,
  `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive`,
  `def-uniformly-elliptic-divergence-form-operator` and the weak Dirichlet
  definition; the batch-12+ regularity pages consume
  `lem-classical-solutions-satisfy-the-weak-formulation` and the weak-solution
  vocabulary. Those edges belong to the consumers' inputs; this batch records
  only the supplier side and no statement was tailored to them.
- **Published defects:** none found among the suppliers examined. The two
  published items whose statements were checked most closely —
  `thm-bounded-below-iff-injective-with-closed-range` (the plan's
  `lem-bounded-below-operator-has-closed-range` is its easy direction) and
  `thm-banach-fixed-point` (no choice assumption, quantitative error bound) —
  are adequate for their uses; no repair is requested.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.


## Step 4 splice-preflight update

A fresh non-mutating `splice-plan --verify` confirms 6 undeclared immediate page prerequisites, all from this pair's A/B pages to the PDE-14 A page `sobolev-poincare-and-morrey-inequalities` (order 458.025). The item-level edges are semantically reachable through the existing PDE-16 → PDE-15 → PDE-14 chain, but the verifier checks immediate `requires` only. Step 4 should add direct `requires` edges from this pair's A and B pages to PDE-14 in both the canonical plan and run manifests; both edges point backward and do not create a cycle.


## Owner scope repair integration

The interval helper is an A-page local prerequisite (39 current items total). The obsolete B10-to-B4 review edge for the adverse-reaction example is marked removed; the exact numerical threshold is now supported locally. Current readiness and owner scope receipts are maintained by the run workflow.


## Owner scope repair integration

The current manifest has 39 items. The sharp interval helper is an A-page local prerequisite, and the adverse zero-order counterexample now proves the threshold c=pi^2, including endpoint nonuniqueness. The old direct B10-to-B4 edge for the numerical constant is marked removed. The Rayleigh example in B16 is being recertified against this helper through an open B16-to-B10 review edge.
