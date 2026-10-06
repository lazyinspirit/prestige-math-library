# Batch 15 construction handoff — frontier-39-analysis-30 (The Direct Method and Euler Lagrange Equations)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-21
(`research/plan-pde-track.md` L1930–L1984, read together with the PDE-21
additions table at L3730–L3744 and the source-audit row at L3398). A page:
`the-direct-method-and-euler-lagrange-equations` (order 458.039, `pde`);
B page: `the-direct-method-and-euler-lagrange-equations-examples` (458.04).
Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-15.pages.json` (36 items: 26 on A,
10 on B), the coverage record
`research/frontier-39-analysis-30-batch-15.coverage.json` (2 pages, 71
harvested headings, 10 fetch-stamped source entries), the cross-batch input
`research/frontier-39-analysis-30-batch-15.cross-batch-dependencies.json`
(13 rows: 1 page + 12 item), the 36 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. No
published item, shared plan, engine state, verdict or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not
exist (checked before construction and again before recording readiness), so
the binding materials are the run plan, the design section and the Alpha
drift verdict for this page: **no-drift**, order 458.039
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, section
`the-direct-method-and-euler-lagrange-equations`). That verdict was followed
point by point: weak closure and integral lower semicontinuity are local
lemmas (A3, A4); properness is supplied by a finite competitor and recorded
in the definition (A1) and used through the coercivity lemma (A5); the
convex-gradient minimisation theorem states its hypotheses explicitly,
including the passage in the $u$-variable (A23, see the qualification
below); the Gâteaux differentiation lemma proves a single integrable
dominator for the difference quotients (A13 strategy); and no new
variational or optimal-control page edge was needed.

Every one of the 36 items is recorded `ready`; there are no escalations. The
A page keeps all fifteen design items and all seven PDE-21 A additions; the
B page keeps all seven design examples/counterexamples and all three B
additions. Three locally necessary prerequisites were added beyond the two
tables (a convexity definition, the interior fundamental lemma and the
boundary fundamental lemma); one more (Carathéodory composition
measurability) was added to make the integral functional well defined before
it is differentiated. No design claim was dropped or weakened; the two scope
qualifications are recorded below.

## Design, plan and published-content reconciliation

1. **Plan requires versus the design prose.** `research/plan-spec.json`
   (order 458.039) declares exactly one page prerequisite:
   `weak-elliptic-maximum-principles-and-holder-regularity` (in-run draft,
   batch 14). The design prose additionally names PDE-14–PDE-16 and PDE-18,
   MT-8/MT-11/MT-14, FA-5, FA-7–FA-10 and FA-12, and the published convexity
   and multivariable Taylor pages. The plan controls; every additional input
   is consumed at item level and is either published (FA items, convexity and
   Taylor items) or an in-run draft of batches 4, 10, 12 and 13, recorded as
   12 item-level cross-batch rows. **Conflict recorded.**

2. **Item 12 scope qualification (joint convexity).** The design asks for a
   “convex-gradient” existence theorem and the drift requires the hypotheses
   that allow passage in the $u$-variable. The manifest states
   `thm-direct-method-for-convex-integral-functionals` for Carathéodory
   integrands that are jointly convex and lower semicontinuous in $(s,\xi)$,
   with the upper growth bound $f\le C(1+|s|^p+|\xi|^p)+G(x)$, $G\in L^1(\Omega)$,
   and the two-case
   coercivity hypothesis $f\ge\nu|\xi|^p-c|s|^q-h(x)$, $q\in[1,p]$, with the
   smallness condition $2^{p-1}c\,C_P^{\,p}\le\nu\,2^{-p}$ imposed when
   $q=p$. In that form the weak lower semicontinuity is the
   convex-plus-Fatou argument sourced by [MA] Theorem 2.44(ii) and [T]
   Examples 13.7–13.8: Fatou is applied to the shifted nonnegative
   integrands $f(x,u_j,Du_j)+c|u_j|^q+h$ (the lower bound makes them
   $\ge\nu|Du_j|^p$), and the added $L^q$ terms converge because
   $u_j\to u$ in $L^p$ with $q\le p$; the exceptional upper term $G$ is what
   makes the $L^2$-forcing Dirichlet integrand an instance. The drift's
   “passage in the $u$-variable” is discharged by joint convexity, and the
   Euler–Lagrange clause is stated conditionally on the hypotheses of
   `lem-differentiation-of-an-integral-functional`, since a merely convex
   non-differentiable integrand yields a variational inequality rather than
   an equation for its minimisers. The two coercivity cases are the standard
   ones: for $q<p$ the Poincaré-controlled $L^q$ term is dominated by the
   $p$-growth, and for $q=p$ the smallness condition makes it absorbable, so
   the Dirichlet functional $\tfrac12|\xi|^2-f(x)s$ is a genuine instance
   with $p=q=2$, $G=\tfrac12|f|^2$, $h=\tfrac1{4\varepsilon}|f|^2$ and
   $c=\varepsilon$ chosen small enough for the smallness condition. Two
   earlier drafts were corrected before the final regeneration and
   re-record (see the post-scaffold section): a $q<p$-only coercivity bound,
   which excluded that instance, and uniform growth of $f_s,f_\xi$, which
   the $L^2$ forcing also fails; the final form carries the exceptional
   terms $G\in L^1(\Omega)$ in the upper bound of this theorem and
   $g\in L^{p'}(\Omega)$ in the derivative bound of
   `lem-differentiation-of-an-integral-functional`. The
   strictly stronger Serrin–Alberti form
   (convexity in $\xi$ only, lower semicontinuity in $(s,\xi)$) is **not**
   claimed: its proof needs Young-measure or measurable-selection machinery
   that this pair does not build. That source result ([MA] Theorems 2.48–2.51
   with the Young-measure route of Sections 5–6) is recorded in the coverage
   with disposition `deferred`, destination `owner-decision`, and a written
   reason. All consumers of this page (the Dirichlet principle, the
   fixed/free-trace example, the PDE-22 quadratic forms) fall inside the
   jointly convex case. **Recorded scope qualification, not a silent
   weakening.**

3. **Design item 2 versus published FA-5/FA-8 theorems.**
   `lem-norm-closed-convex-sets-are-weakly-closed` overlaps the published
   `thm-norm-closed-convex-iff-weakly-closed` and
   `thm-mazur-weak-and-norm-closure-of-convex-sets`. The item is retained
   because the design lists it, the drift classifies weak closure as a local
   lemma, and the page consumes the sequential form
   ($u_j\in K$, $u_j\rightharpoonup u$ $\Rightarrow$ $u\in K$); it is given
   its own separation proof along the design's prescribed FA-5 route
   ([T] Lemma 13.2, [MA] Lemma 2.41), so it is not a mere re-citation.
   The overlap is recorded here for owner reconciliation.

4. **Additions tables implemented in full.** A: coercivity/sublevel bound,
   weak-subsequence extraction, admissible-limit lemma, liminf passage,
   affine trace class, convex-stationarity sufficiency, second-variation
   non-negativity. B: norm-closed nonconvex counterexample, nonconvex
   gradient-energy counterexample, fixed-trace/free-trace comparison. No
   addition is dropped; the weak-subsequence addition is realised as a direct
   citation of the published reflexivity corollary with its choice
   hypotheses, which is exactly what the additions table prescribes.

5. **Unmet prerequisites created locally.** (i)
   `def-convex-and-strictly-convex-functionals-on-a-banach-space`: the
   library had convexity only on Euclidean sets, but the direct-method items
   need convex extended-real functionals on a Banach space. (ii)
   `lem-fundamental-lemma-of-the-calculus-of-variations` and (iii)
   `lem-boundary-fundamental-lemma-of-the-calculus-of-variations`: needed for
   the classical Euler–Lagrange equation and for the natural boundary
   condition; no published equivalent exists under any name
   (`cor-smooth-functions-are-weakly-dense-in-distributions` is a
   distributional statement, not the $L^1_{\rm loc}$ lemma used here). (iv)
   `lem-caratheodory-composition-is-measurable`: needed for well-definedness
   of $I(u)=\int f(x,u,Du)$ before differentiation; only the Euclidean
   closure properties of measurable functions were published.

6. **[E] and [ACM] are not used as accessible full texts.** The design's
   primary-backing row names [E] §§8.1–8.2 and [ACM] Chapter 1 §§1.4–1.5. No
   accessible full text of Evans was obtained from this environment and the
   AMS page is a bibliographic record, so no item claims to have read it; the
   content is independently covered by [T] Chapter 13, [MA] Chapters 1–2 and
   5, [CV] Chapter 4, [G] Chapter 4, [SO] §1.4 and [L] §3.10. [ACM] was not
   fetched: batch 14 recorded both the SNS handle and the Unipd mirror behind
   a Cloudflare bot wall from this environment, and the constrained-variational
   content assigned to ACM is not needed by this pair (PDE-22's business).
   No item rests on [E] or [ACM]. **Recorded.**

7. **Conventions fixed.** Euler–Lagrange is written
   $-\operatorname{div}f_\xi+f_s=0$; the Dirichlet energy is
   $I(u)=\tfrac12\int|Du|^2-\int fu$ and the weak Poisson problem has
   $-\Delta u=f$, so the minimiser is the weak Dirichlet solution in the
   sense of `def-weak-dirichlet-solution-for-a-divergence-form-operator`.
   Domains are bounded $C^1$ throughout (the hypothesis of the published
   trace and right-inverse theorems); the Sobolev exponent is $1<p<\infty$
   and the Dirichlet principle is the $p=2$ case. Weak lower semicontinuity
   is stated sequentially, and the choice principles used (ultrafilter
   lemma, DC, HB for the reflexive subsequence; DC for the minimising
   sequence) are stated in the items that use them.

## Sources and harvest

Ten source entries over the two pages, six independent treatments on A and
four on B, all fetch-verified in full by `source-fetch-check --stamp`
(10/10 newly stamped, 0 failures) and all live in the header sweep (6/6
distinct URLs):

- [CV] Riccardo Cristoferi, *Calculus of Variations: Lecture Notes*, CMU 2016,
  `https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf`
  — Chapter 2 §§2.4–2.5 (printed pp. 14–16); Chapter 3 §3.5 (pp. 37–38);
  Chapter 4 §§4.1–4.5 (pp. 47–56); Chapter 5 §5.1 (pp. 57–58).
- [T] Gerald Teschl, *Partial Differential Equations: From Classical to
  Modern*, 2026 author manuscript (archived full text),
  `https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf`
  — Chapter 13 §§13.1–13.3 (printed pp. 293–305); §5.5 (pp. 130–131);
  §10.3 (pp. 240–246).
- [MA] Francesco Paolo Maiale (course by Giovanni Alberti), *Lecture Notes
  Calculus of Variations A*, Pisa, last update 21 August 2019,
  `https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf` — Chapter 1
  §2 (printed pp. 6–14); Chapter 2 §§1–4 (pp. 31–50); Chapter 5 §§1–2
  (pp. 93–95).
- [G] Viktor Grigoryan, *Math 246B: PDE*, UCSB 2011,
  `https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf` — Chapter 4
  §§4.1–4.3 (printed pp. 26–31).
- [SO] Sung-Jin Oh, *Lecture Notes for Math 222A*, UC Berkeley 2024,
  `https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf` — §1.4
  (printed pp. 7–9).
- [L] Richard S. Laugesen, *Linear Analysis and Partial Differential
  Equations*, Illinois,
  `https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf` —
  §3.10 (printed pp. 79–82).

All 71 harvested headings across the published locators received an explicit
disposition: 47 `included` rows naming 27 distinct items (some items are named
by two independent sources), the remainder `inline`, `already-published` (the divergence theorem, whose
published form is `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`),
`deferred` to `constrained-variational-problems-and-variational-inequalities`
or `owner-decision`, or `out-of-scope` with a written reason (inner
variations, minimal-surface/curvature examples, wave/Schrödinger/Maxwell
actions, Young-measure relaxation, higher-order and $p$-power regularity
refinements). The general Serrin–Alberti theorem and the Young-measure route
are the two `owner-decision` deferrals. No source was dropped, so no
`source_resolution` record is claimed.

## Cross-batch dependencies

`research/frontier-39-analysis-30-batch-15.cross-batch-dependencies.json`
carries 13 rows, all status `open` pending Step-3 review: the declared page
prerequisite `weak-elliptic-maximum-principles-and-holder-regularity`, plus
12 item rows into in-run drafts — `thm-poincare-inequality-for-w-one-p-zero`
(batch 4); `def-weak-dirichlet-solution-for-a-divergence-form-operator`,
`thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
`cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
`lem-classical-solutions-satisfy-the-weak-formulation` and
`thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` (batch 10);
`cor-smooth-weak-dirichlet-solutions-are-classical` (batch 12);
`thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` (batch 13).
Each row names the required claim, its exact use and the supplier page and
publication state. The unified ledger was refreshed mechanically
(`node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`);
the 13 batch-15 edges each carry exactly one review row and there are no
orphaned reviews. No cross-batch change or new pair is proposed, so no
owner escalation is needed.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-15.pages.json`
  -> **36 item(s), 0 errors**.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  -> **701 item(s), 0 errors** (whole-run manifest dependency join).
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  -> **701 scoped item(s), 0 errors, 0 warnings** (whole-run manifest join).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-15.coverage.json --require-destination`
  -> **2 pages, 71 harvested result(s), 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` -> **10/10
  source(s) fetch-verified (10 newly stamped)**; check mode -> **10/10
  resolved, 0 documented drops**, exit 0.
- `node tools/url-sweep.mjs --coverage ... --out /tmp/b15work/b15-url-liveness.json --recover --fail-on-dead`
  -> exit 0, **6/6 live, 0 failed, 0 recovered, 0 suspect**;
  `node tools/source-backing.mjs --coverage ... --liveness /tmp/b15work/b15-url-liveness.json`
  -> exit 0, **27 authored result(s), every one still backed by an openable
  source** (0 re-harvest work).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  -> exit 1 whole-run, but **no error names a batch-15 item**: labels 0–12 on
  A and 3–9 on B were computed by the tool's own whole-run algorithm and
  match exactly; no cycle; the ten residual errors are `empty scaffold
  inventory` for the sibling pairs of batches 16–20 that have not been
  scaffolded yet.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  -> refreshed and deduplicated; 13 batch-15 edges reviewed, 0 orphans.
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` ->
  **60 page(s) owed, 60 in the manifests; no scope drift**.
- `node tools/validate-plan.mjs research/plan-spec.json` -> exit 0
  (declared order acyclic and consistent; no item-level cycles, forward
  references or unresolved ids among pages with item lists).
- `node tools/extcheck.mjs` -> exit 0 (existing library-wide
  `unproved-on-published` advisories are unrelated to this batch; every
  recorded-not-proved statement is a cited remark).
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` ->
  **701/701 items have closed readiness records**; batch-15 contributes
  36/36 with no open work and no owner-held records. The whole-run command
  exits 1 only on the ten page-level `empty scaffold inventory` entries of
  the un-scaffolded sibling pairs; no item is left open.

## Post-scaffold correction and re-record

Final review found three linked defects in the first scaffolded draft, all
of them in conventions used by the page's own consumers:

1. **Coercivity too restrictive.** The $q<p$-only bound
   $\nu|\xi|^p-c(1+|s|^q)$ excluded the Dirichlet forcing term
   $\tfrac12|\xi|^2-f(x)s$, which
   `thm-dirichlet-principle-for-poisson-equation` instantiates, because that
   integrand has a linear $s$-term with $q=p=2$. The hypothesis now states
   both standard cases, the $q=p$ case by absorption under the explicit
   smallness condition.
2. **Fatou applied to a possibly negative integrand.** The strategy applied
   Fatou directly to $f(x,u_j,Du_j)$, which the lower growth bound does not
   make nonnegative. It now shifts by $c|u_j|^q+h$, applies Fatou to the
   nonnegative $\varphi_j\ge\nu|Du_j|^p$ (published `thm-fatou-lemma`
   replaces the former `thm-dominated-convergence` dependency), and cancels
   the added terms using $L^q$ convergence from $u_j\to u$ in $L^p$,
   $q\le p$.
3. **Growth bounds did not cover $L^2$ forcing.** The pointwise upper bound
   without an exceptional term and the uniform growth of $f_s,f_\xi$ both
   fail for $\tfrac12|\xi|^2-f(x)s$ with unbounded $f\in L^2(\Omega)$. The
   direct-method theorem now allows $f\le C(1+|s|^p+|\xi|^p)+G(x)$ with
   $G\in L^1(\Omega)$, the differentiation lemma allows
   $|f|\le C(1+|s|^p+|\xi|^p)+G(x)$ and
   $|f_s|+|f_\xi|\le C(1+|s|^{p-1}+|\xi|^{p-1})+g(x)$ with
   $g\in L^{p'}(\Omega)$ (the difference-quotient dominator gains
   $g(x)(|v|+|Dv|)$, integrable by Hölder), and the Euler–Lagrange clause of
   the direct-method theorem is stated conditionally on those
   differentiability hypotheses, since without them minimisers satisfy only
   the variational inequality. These relaxations weaken no hypothesis used
   before and make the Dirichlet principle with $f\in L^2$ a genuine
   instance; no design claim was dropped.

The manifest and coverage were regenerated, the ten source entries were
re-stamped in full (`source-fetch-check --stamp` -> 10/10 fetch-verified),
and the full gate battery was re-run; all results in the preceding section
are from that final run. Fourteen readiness records had become stale because
`itemHash` covers the transitive dependency closure:
`lem-differentiation-of-an-integral-functional`,
`thm-weak-euler-lagrange-equation-for-integral-functionals`,
`cor-classical-euler-lagrange-equation-under-regularity`,
`thm-natural-boundary-condition-for-free-boundary-variations`,
`thm-direct-method-for-convex-integral-functionals`,
`thm-dirichlet-principle-for-poisson-equation`,
`cor-minimisers-are-classical-when-elliptic-regularity-applies`,
`rem-euler-lagrange-is-necessary-not-sufficient-without-convexity`,
`ex-dirichlet-energy-with-affine-boundary-data`,
`ex-one-dimensional-euler-lagrange-equation`,
`cex-euler-lagrange-stationarity-does-not-imply-a-minimum`,
`ex-natural-neumann-condition-from-a-free-endpoint`,
`cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity` and
`ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations`.
All fourteen were re-recorded `ready` with reasons naming the corrections;
the remaining twenty-two records were untouched. No cross-batch row,
dependency edge or source disposition changed, and no new item was needed.

## Unresolved findings and published defects

- The two recorded scope qualifications are the only unresolved
  mathematical items: the joint-convexity restriction of
  `thm-direct-method-for-convex-integral-functionals` with the deferred
  Serrin–Alberti form (destination `owner-decision`), and the [E]/[ACM]
  non-use recorded above. Neither blocks any item, consumer or gate; the
  owner may re-scope them at reconciliation.
- No defect was found in any published item consumed by this pair (the FA
  weak-topology/reflexivity items, the published trace and measure theory
  items, and the published convexity and Taylor items were read at their
  statements and, where they are load-bearing, at their proofs). Nothing is
  submitted to the canonical published-defect ledger from this batch.
- The batch left no dependency, source, coverage, policy or scope blocker.
  Owner/operator reconciliation and the full engine gate follow
  construction; the readiness records are not independent mathematical
  approval, and Step 3 provides that review.

## Step 3b checkpoint (author `alpha-high`, dispatch `step3b-pair-the-direct-method-and-euler-lagrange-equations-fc8c37001b0937c9`)

All 36 scaffolded items of the pair are authored under `items/`, the two pages
are written (`library/pde/the-direct-method-and-euler-lagrange-equations.md`
and its `-examples` companion, both `status: draft`, 27 + 10 items), the
manifest rows carry the item-file statements, `deps` and `dependency_level`,
and the cross-batch input, coverage, strict proof contract and Step-3
decisions are current. One auditor-created local addition was inserted on the
A page: **`lem-w-one-p-is-reflexive`** (level 0; 11 published dependencies),
supplying the reflexivity of $W^{1,p}(\Omega)$ needed by
`thm-direct-method-for-convex-integral-functionals`. Per the additions rule it
was not put through a self-review; the engine certifies it after dispatch, and
it is registered in the manifest, page, coverage and proof contract.

**Repairs made in this pass (all recorded in the item decisions).**

1. Statement strengthening: `cor-classical-euler-lagrange-equation-under-regularity`
   now assumes $f\in C^2$ (scaffold: $C^1$); $C^1$ cannot give
   $w=f_\xi(x,u,Du)\in C^1$ or continuous $\operatorname{div}w$.
2. Statement repair: `cor-strict-convexity-gives-uniqueness-of-a-minimiser`
   now assumes the functional proper. Without properness the literal claim is
   false ($K=\{0,1\}$, $I\equiv+\infty$); the Remarks record the necessity and
   every consumer supplies properness.
3. Dimension repairs: `thm-direct-method-for-convex-integral-functionals` and
   `thm-dirichlet-principle-for-poisson-equation` now state $n\ge2$ (scaffold:
   $n\ge1$), matching the cited trace and fractional-boundary theory
   (`def-bounded-c-k-domain-and-boundary-charts` requires $n\ge2$).
4. `b-leaf-content` repairs (depcheck): the three B counterexamples
   `cex-a-coercive-...`, `cex-a-minimising-sequence-...` and
   `cex-a-norm-closed-nonconvex-...` no longer depend on published
   B/examples-page items (`ex-standard-basis-of-ell-two`,
   `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p`); the published
   `cor-ell-p-duality-by-counting-measure` plus a complete local
   coordinate-vector argument now proves $\|e_k\|=1$ and $e_k\rightharpoonup0$.
5. `cited-not-in-deps` repairs: `thm-direct-method-for-convex-integral-functionals`
   gained `cor-strict-convexity-gives-uniqueness-of-a-minimiser` (used in
   [F9]/step 6.1); `thm-dirichlet-principle-for-poisson-equation` gained
   `thm-sharp-trace-theorem-for-w-one-p` and `def-hk-and-hk-zero-notation`
   (used in [F1]/[F5]); `cex-nonstrict-convexity-allows-many-minimisers`
   dropped its inapplicable aside citing the direct-method theorem.
6. Content-policy repair: `lem-w-one-p-is-reflexive` renamed its embedding
   map from $\iota$ to $\Phi$ (the `notation-iota-applied` rule).
7. Dependency lists corrected for the items listed in the Step-3b dispatch
   report; levels recomputed and verified (`item-dependency-levels` reports no
   batch-15 error).

**Supplier reconciliation.** Of the 15 cross-batch consumer rows, 12 are
`verified` against the authored supplier drafts (batch-4 Poincaré, batch-10
Dirichlet/Neumann items, batch-13 Schauder item) with the exact consuming steps
named; `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`
appeared during this pass and was reconciled (consumer step 2.2). Two rows stay
`open`: the page prerequisite
`weak-elliptic-maximum-principles-and-holder-regularity` (batch-14 pair still
under construction, no item-level use) and
`cor-smooth-weak-dirichlet-solutions-are-classical` (batch-12 draft not yet
authored; consumer `cor-minimisers-are-classical-when-elliptic-regularity-applies`,
Fact [F2] and step 2.1). That consumer's decision is `escalate`; all other
items are `accept`/`repaired` with confidence 1.

**Checks (final pass, explicit paths).** `precheck` 33/33 proof-bearing items
PASS (4 items are a definition/remark with no numbered proof);
`proof-layout` 37 items/152 steps/0 defects (single batched command);
`rendercheck` 39 files OK; `content-policy` 37 scoped items, 0/0;
`manifest-deps` 37 items, 0 errors; `item-dependency-levels` no batch-15
error (34 whole-run errors belong to pairs still being written by sibling
agents); `validate-plan` exit 0; `coverage-checklist` 2 pages/73 results/0/0;
`source-backing` 28/28 backed; strict `proof-contract` 0 errors for the 36
items with reconciled suppliers and exactly 1 error — the missing batch-12
supplier citation — for the escalated consumer; `boundary-audit` on the batch
contract: 296 boundary rows, 127 `not_applicable`, no template cluster and no
contradicted disposition; `depcheck` 3 findings, all naming
`cor-smooth-weak-dirichlet-solutions-are-classical`;
`frontier-dependency-ledger.mjs refresh` clean; `manifest-integrity` no scope
drift; scope decision for the pair re-reviewed `sufficient` against the
current hash (local-repair refresh, recorded for Step-5 scrutiny) and all 36
scaffold item decisions recorded (35 closed, 1 escalated).

**Open obligations at handoff.** (i) Author batch-12
`cor-smooth-weak-dirichlet-solutions-are-classical` and reconcile the
consumer's [F2]/step 2.1, then re-record the escalated decision — owner-held.
(ii) The batch-14 page prerequisite is still under construction; no batch-15
item cites it, so the row stays open for the sibling pair. (iii)
`lem-w-one-p-is-reflexive` awaits the engine's auditor-item certification after
dispatch. (iv) Choice propagation note: the frozen statements of
`lem-convex-norm-lower-semicontinuous-functionals...`,
`thm-weak-euler-lagrange-equation-...`, `thm-dirichlet-principle-...`
(and consumers) do not name a choice principle although their proofs use one
through cited suppliers; exact uses are recorded in Facts and deps and
reported for owner reconciliation. No published defect was found.

## Step-3b page-edge audit (2026-10-05)

The earlier plan-spec edge from the direct-method page to PDE-20 was a surplus ordering edge. The authoritative `research/plan-pde-track.md` §PDE-21 requires PDE-14–PDE-16 and PDE-18 together with the named measure-theory, functional-analysis and published convexity/Taylor inputs; the design graph gives FA weak compactness + PDE-14/15 → PDE-21. The consumer page and its 37 item dependency lists contain no PDE-20 item use. Its elliptic-regularity corollary names the distinct suppliers it actually uses. The PDE-20 page requirement was removed from the plan-spec and batch-15 manifest, and the cross-batch review row now records `removed` with verified evidence. All item statements, proofs, dependencies and levels are unchanged. PDE-22 still requires the direct-method page, so downstream scope is unchanged; only the separate unresolved item-level batch-12 supplier obligation remains open.

## Scope-decision audit: minimal-surface/mean-curvature source examples (2026-10-05)

The gate's missing-decision row `000a0ff071eff304607de2b3cb9666fe3914eb80cdaa59dd4157fa406c0562ea` is the existing `out-of-scope` coverage row for [CV] §4.1.0.1 examples (iii)–(iv), not an item or example currently present in this pair. The approved PDE-21 B-page list in `research/plan-pde-track.md` contains seven examples and names only [CV] §4.1.0.1 (i)–(ii), the Dirichlet/Poisson examples; the current batch-15 manifest and examples page contain ten listed examples and none for minimal surfaces or prescribed mean curvature. The PDE source harvest also marks Simon Lectures 14–16 and 19 (nonlinear existence and minimal-surface/mean-curvature equations) out of scope, and §12.8 confirms that nonlinear elliptic/minimal-surface theory is not minted in this run. The coverage decline is therefore consistent with approved scope and needs an explicit owner decision `stands`; it is not a reconciliation gap or an accidental loss of an authored example. The current coverage rationale correctly says these results are not needed by the approved examples; the generic Euler–Lagrange theorem could support a separately scoped derivation under smoothness assumptions, but adding such examples would be a design/manifest scope addition. No page content, coverage row, or manifest was changed. The separate open batch-12 supplier obligation remains untouched.

## Step-3b dependency-ordered audit refresh (2026-10-05 04:05 UTC)

The current B15 scope is frozen at
`0554ebe3e770178d55d35c90a6855de9ec7f54a2af1f8bc9b6c53498c80e35b3` with
the owner `proceed` receipt. An independent dependency-ordered audit has
current confidence-1 receipts for 35 of the 37 items (13 `accept`, 22
`repaired`). Two items remain open:

- `cor-minimisers-are-classical-when-elliptic-regularity-applies` is
  owner-held at current itemHash
  `77f444402e503688f92928a31124dbbbbdbd47c57ee7e97b7ebd4f33cd97384e`.
  Its repaired smooth-lift proof is complete, but the B12 supplier
  `cor-smooth-weak-dirichlet-solutions-are-classical` still awaits independent
  cross-batch review and a stable receipt. The B13 Schauder supplier is frozen.
- `ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations`
  remains open at current itemHash
  `2eb9b9fb0c4e67226f3709daf11c613078893cba0b97900e34d371210b4aa613` while
  B10 refreshes the Neumann supplier after its transitive B9 Poincare–Wirtinger
  input changed. Its proof-contract quote now matches the added nonempty-domain
  clause. The B15 local and global edge rows remain `open`.

The three repairs made in this audit are proof-only: `lem-coercivity-makes-every-finite-level-minimising-sequence-bounded` now bounds the tail of a minimizing sequence and treats its finite prefix separately; `lem-differentiation-of-an-integral-functional` applies dominated convergence only to a tail where the `|epsilon| <= 1` dominator holds; and `cor-classical-euler-lagrange-equation-under-regularity` correctly identifies `phi w` as C1. The owner-authorized `thm-dirichlet-principle-for-poisson-equation` assumption repair adds AC for its trace and weak-Poisson suppliers, retaining UF+DC+HB and all three conclusions. Its current consumer proof-contract quotes were synchronized. The separate convex-integral theorem remains under UF+DC+HB on `u_b+W^{1,p}_0`.

Focused results after these edits: proof-layout **37 items, 153 steps, 0 defects**; strict proof-contract **37/37, 0 errors, 0 warnings**; manifest-deps **37 items, 0 errors**. No gate retry or tests were run. Cross-batch item rows are 10 `verified`, 2 `open`; the PDE-20 page edge is `removed`.
