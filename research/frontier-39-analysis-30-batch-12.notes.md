# Batch 12 construction handoff — frontier-39-analysis-30 (Interior and boundary Sobolev elliptic regularity)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-18
(`research/plan-pde-track.md` L1761–L1800, read together with the PDE-18
additions table at L3677–L3690 and the source-audit row at L3395). A page:
`interior-and-boundary-sobolev-elliptic-regularity` (order 458.033, `pde`);
B page: `interior-and-boundary-sobolev-elliptic-regularity-examples`
(458.034). Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-12.pages.json`, the coverage record
`research/frontier-39-analysis-30-batch-12.coverage.json`, the cross-batch
input `research/frontier-39-analysis-30-batch-12.cross-batch-dependencies.json`,
the 39 Step-1 readiness records, and this note. No published item, shared plan,
engine state, verdict, or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction), so the binding materials are the run's plan
(`research/plan-spec.json`, order 458.033), the design section, and the Alpha
drift verdict for this page. The drift verdict is **no-drift** for
`interior-and-boundary-sobolev-elliptic-regularity`
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, PDE-18 section). The
owner resolution in `research/frontier-39-analysis-30-step1-owner-resolution.md`
(L10–L16) moved `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth`
from the PDE-17 pair to PDE-18 after the higher-order boundary regularity and
embedding items, keeping its ID, statement, source and proof route; that item is
therefore on this page as A28 and is not a PDE-17 claim.

The manifest holds **39 items: 29 on A, 10 on B**, far below the 100-item page
cap. The A page keeps every one of the design's seventeen named claims, the
nine new PDE-18 A additions of the plan's table (the tenth row of that table is
the relocated corollary) and two local prerequisites (below). The B page is the
design's six-row inventory plus the four PDE-18 B additions.

## Design, plan, and source conflicts (recorded as required)

1. **Plan `requires` versus the design's supplier list.** The canonical plan
   (`research/plan-spec.json`, order 458.033) declares the single page
   prerequisite `fredholm-elliptic-problems-and-the-elliptic-spectrum`; the
   design prose names "PDE-2D and PDE-11–PDE-17; MT-14–MT-15; FA-10". The plan
   controls, and the manifest keeps the declared requirement; every additional
   input is consumed at item level and is either published or in-run (batch-4,
   batch-9, batch-10 and batch-11 drafts), recorded as 50 cross-batch rows in
   the batch input. **Splice finding (recorded, not repaired here):**
   `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` reports
   **32 item-level edges** of this batch into unbuilt pages as undeclared
   prerequisites — 25 into `lax-milgram-and-weak-elliptic-solutions` (PDE-16)
   and 7 into `sobolev-poincare-and-morrey-inequalities` (PDE-14) — because the
   plan-spec licenses them only transitively (458.033 → 458.031 → 458.029 →
   458.025). The edges are genuine (the divergence-form operator and form, the
   weak Dirichlet formulation and its existence/uniqueness suppliers, the
   conjugate exponent and the embedding theorems). Step 4's reconciliation must
   either add the direct `requires` edges or accept the transitive license. No
   page, pair, or ordering was changed. The manifest-vs-plan inventory line the
   tool prints is expected at Step 1, since `plan-spec.json` carries no items
   until the Step-4 splice.

2. **Relocated PDE-17 corollary.** Design PDE-18 already says "The relocated
   `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth`
   follows item 16"; the drift file calls the move a proposal "subject to owner
   authorization" and the owner resolution grants it. The item is included as
   A28 with its preserved ID and claim, consuming only the weak-eigenpair
   definition of PDE-17 (batch 11) plus this page's regularity items. No
   conflict remains between design and plan after the owner resolution.

3. **The design's [E] and [ACM] backing could not be used in full.**
   `[ACM]` (Ambrosio–Carlotto–Massaccesi, *Lectures on Elliptic Partial
   Differential Equations*) is listed as primary backing for PDE-18, but its
   full text was not retrievable: `ricerca.sns.it/handle/11384/81586` is behind
   a Cloudflare interstitial (bot wall, no body); `cvgmt.sns.it/paper/1280` is a
   dead page ("Page Not Found"); `cvgmt.sns.it/media/doc/paper/1280/main.pdf`
   and `.../paper/1280/download` are 404; the Springer book page is a paywalled
   preview. Five retrieval attempts were made and recorded; no item depends on
   it. `[E]` (Evans) is similarly paywalled and was used by no item. All
   PDE-18 claims it was to back — Caccioppoli–Leray, the a priori estimates,
   the Nirenberg method and boundary regularity — are read in full instead in
   [H] §§4.11–4.12 and Appendix 4.C, [L] Chapter 5 §5.2, [T] Chapter 10 §10.3
   and [Si] Lectures 5, 6, 8–9, which are four independent full treatments
   (three of them book-scale) and exceed the two-treatment requirement.

4. **Overlapping design rows and additions on the B page.** The design's B2
   (`ex-piecewise-smooth-coefficient-produces-limited-regularity`, a derivative
   jump at a coefficient interface) and the addition
   `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity`
   (the same phenomenon as an H^2 failure) were differentiated rather than
   duplicated: the example uses a continuous *Lipschitz* coefficient and shows
   an H^2 solution whose second derivative is discontinuous (so weak H^2 is
   weaker than C^2), while the counterexample uses a *discontinuous* bounded
   coefficient and shows an H^1 weak solution outside H^2 (so the Lipschitz
   hypothesis of the interior theorem is sharp). Likewise the design's B4
   (reentrant-sector H^2 failure) and the addition
   `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold`
   were differentiated: the counterexample states the H^2 failure, the example
   computes the full threshold s < 1 + π/ω. Both pairs are non-redundant.

5. **Proof route of A25.** The design prescribes "a contradiction/compactness
   argument" to remove the `‖u‖_{L^2}` term. The manifest proves the same claim
   by combining A24 with the PDE-17 supplier
   `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`
   (bounded invertibility of the solution map), which is the formalised form of
   the same compact-operators argument; the Rellich contradiction is stated in
   the strategy as the equivalent alternative. No claim was weakened and no new
   compactness input was introduced.

6. **Weak-limit route is choice-light (recorded because it differs from the
   sources).** [H] Theorem 4.53(2) and [L] Proposition 5.7(ii) extract the weak
   derivative by Banach–Alaoglu/weak compactness. The manifest's
   `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative`
   instead forms the limit functional `ℓ(φ) = -∫u∂_iφ` for every test function
   at once (the scalar limit exists by dominated convergence because the smooth
   difference quotients converge uniformly) and represents it by the σ-finite
   L^p–L^{p'} duality theorem, which the run's library proves without choice.
   This removes the need for weak sequential compactness and keeps the whole
   difference-quotient chain and the H^2 theory free of AC; the plan's
   "weak-limit extraction inherits FA/MT strength" line is therefore satisfied
   at the weaker Countable-Choice level.

## Local additions beyond the design's inventory

- `def-local-weak-solution-for-a-divergence-form-operator` — the interior
  formulation `u ∈ H^1(Ω)`, `f ∈ L^2_loc(Ω)`, `a(u,v) = ∫f v̄` for
  `v ∈ H^1_0(Ω)`. The PDE-16/17 weak-solution definitions are Dirichlet
  (`u ∈ H^1_0`); interior regularity, localisation and the boundary charts all
  need the local notion, so it is defined here before its consumers.
- `lem-localisation-identity-for-a-divergence-form-weak-solution` — the exact
  identity `a(ζu,v) = ∫ζf v̄ + ∫a^{ij}(D_jζ)u\overline{D_iv} + ∫b^i u(D_iζ)\bar v`
  for `ζ ∈ C_c^∞`. It is used by the interior theorem (replacing
  `‖u‖_{H^1}` by `‖u‖_{L^2}`) and by the boundary gluing lemma.
- `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative`,
  `lem-cutoff-difference-quotient-commutator-estimate`,
  `cor-scaled-caccioppoli-inequality-on-concentric-balls`,
  `thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations`,
  `lem-nested-domain-induction-for-interior-elliptic-derivatives`,
  `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates`,
  `lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts`,
  `lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates` and
  `lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators`
  are the plan's nine PDE-18 A additions, kept with their stable IDs. Nothing
  else was added, and no design claim was weakened or replaced.

## Choice and axiom ledger

- **Axiom of Choice (full) is carried by four A items and one B item**, each
  through a named supplier:
  `cor-smooth-data-give-smooth-interior-solutions` (A18) and
  `ex-bootstrapping-a-smooth-poisson-problem` (B6) consume
  `thm-higher-order-sobolev-embedding` and `thm-morrey-inequality-for-p-greater-than-n`
  (batch-4 drafts recording AC);
  `cor-smooth-weak-dirichlet-solutions-are-classical` (A27) consumes those
  embeddings and the AC-carrying trace characterisation
  `thm-kernel-of-the-trace-is-w-one-p-zero`;
  `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth`
  (A28) consumes A27; and
  `cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness` (A25)
  consumes the AC-carrying Fredholm supplier
  `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`.
  Each of these items states its assumption and lists `def-axiom-of-choice`.
- **Countable Choice** is carried by the remaining items through the Sobolev
  interfaces (L^p/L^2 classes, Riesz representation, L^p duality, mollification,
  partitions), matching the conventions of batches 4/9/10/11.
- **No item consumes `thm-rellich-compactness-*`**, no item opens an
  incompatible-axiom branch, and no proof or prerequisite path reaches
  `deferred-set-theory-beyond-choice`. The one AC-adjacent step that the design
  route would have carried (weak sequential compactness in the
  difference-quotient converse) is proved here by duality representation, so the
  H^2 and boundary-regularity chain itself is AC-free.
- **Foundations rule.** This is a `pde` pair; it consumes no Recorded
  (proved-here-false) result, has no `forward_refs` into
  `deferred-set-theory-beyond-choice`, and the only forward references are the
  compatibility remark's two pointers to later items on this pair's B page.

## Sources

Four full texts back the pair, all fetched in full and stamped
(`node tools/source-fetch-check.mjs --coverage ... --stamp`: **8/8 source
entries fetch-verified, 0 drops**):

- [H] John K. Hunter, *Notes on PDE* (Chapter 4 §§4.10–4.13 and Appendix 4.C,
  printed pp. 108–126): interior H^2 (Thm 4.27), higher interior (Thm 4.28,
  Cor 4.29), weak-form flattening, boundary H^2 (Thm 4.30), higher boundary
  (Thm 4.31, Cor 4.32) and difference quotients (Def 4.51, Prop 4.52,
  Thm 4.53).
- [L] Richard S. Laugesen, *Linear Analysis and PDE* (Chapter 5 §§5.1–5.3,
  printed pp. 104–114): interior H^2 (Thm 5.6), difference quotients
  (Prop 5.7), higher interior (Thm 5.8, 5.9), boundary H^2 (Thm 5.10, 5.11)
  and the zero-eigenvalue note.
- [T] Gerald Teschl, *PDE: From Classical to Modern* (Chapter 10 §§10.2–10.3,
  printed pp. 233–243): interior and boundary regularity with W^{1,∞}
  coefficients (Lemma 10.16, Cor 10.17, Lemma 10.18, Cor 10.19), the reentrant
  sector example (Example 10.1) and the operator-domain identification (10.63).
- [Si] Leon Simon, *Lectures on PDE* (Lectures 5, 6, 8, 9): the interpolation
  inequality (Lecture 5 Lemma 6), the difference-quotient convergence lemma,
  Caccioppoli (Lecture 6 Lemma 1), local regularity (Lecture 6 Theorem 1), the
  half-ball tangential estimate (Lecture 8) and boundary regularity
  (Lecture 9 Theorem 1).

The coverage record disposes of 53 harvested headings: 36 `included`,
7 `inline`, 4 `deferred` (to `fredholm-elliptic-problems-and-the-elliptic-spectrum`,
`lax-milgram-and-weak-elliptic-solutions`, `strongly-continuous-semigroups-and-hille-yosida`
and `analytic-semigroups-and-linear-evolution-equations`) and 6 `out-of-scope`
with written reasons. There are no low-yield or destination warnings.

## Checks actually run (batch scope unless noted)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-12.pages.json`:
  39 item(s), 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`:
  604 scoped item(s), **1 error naming another batch's item**
  (`lem-positive-compactly-supported-transform-bump-on-the-dual`, missing
  supplier `thm-unique-left-haar-measure-up-to-scale`), 0 warnings; **zero
  errors or warnings naming a batch-12 item**.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  exit 1 run-wide, entirely the other batches' empty scaffold inventories
  (batches 7, 13–20); **zero** errors name a batch-12 item or page, no level
  mismatch and no cycle (batch-12 levels 0–14; run-wide maximum unchanged).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-12.coverage.json --require-destination`:
  2 page(s), 53 harvested result(s), 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-12.coverage.json --stamp`:
  8/8 newly stamped; check mode 8/8 resolved, 0 drops.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`:
  604/604 items ready; the whole-run report lists only the other batches'
  16 empty-scaffold pages. All 39 batch-12 records are current (`ready`).
- `node tools/fwdcheck.mjs`: exit 0 (whole run); the two `forward_refs` of the
  compatibility remark point strictly forward to this pair's B page.
- `node tools/extcheck.mjs`: exit 0 (whole run); no new recorded-not-proved use.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (whole run).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  the unified ledger `research/frontier-39-analysis-30-cross-batch-dependencies.json`
  now carries batch 12 in `reviewed_batches` with all 50 declared cross-batch
  edges as `open` reviews; unreviewed batches are 13–20 only.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`: exit 1
  with the run-wide Step-1 undeclared-prerequisite findings; the batch-12
  portion is the 32 genuine item-level edges recorded as conflict 1 above.

## Dependency and supplier notes

- **In-run edges (50 rows in
  `research/frontier-39-analysis-30-batch-12.cross-batch-dependencies.json`):**
  the page-level requirement `fredholm-elliptic-problems-and-the-elliptic-spectrum`;
  9 item edges into the batch-4 drafts (3 into `def-sobolev-conjugate-exponent`,
  3 into `thm-higher-order-sobolev-embedding` and 3 into
  `thm-morrey-inequality-for-p-greater-than-n`); 36 item edges into the batch-10
  drafts (18 into `def-uniformly-elliptic-divergence-form-operator`, 10 into
  `def-weak-dirichlet-solution-for-a-divergence-form-operator`, 4 into
  `lem-elliptic-form-is-well-defined-and-bounded`, 2 into
  `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` and 2 into
  `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`); and 4
  item edges into the batch-11 drafts
  `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`,
  `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`,
  `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem` and
  `def-symmetric-elliptic-weak-eigenpair`. Neither supplier batch is treated as
  published; each row states the required claim, its use and the choice carry.
- **Downstream:** the PDE-19 pair `schauder-and-lp-elliptic-estimates`
  (order 458.035) names PDE-18 among its prerequisites and consumes the
  H^2/smoothness results as its base case. The PDE-24 analytic-semigroup pair
  consumes `D(L) = H^2 ∩ H^1_0` under its bounded C^2 boundary hypotheses and
  higher boundary regularity for parabolic smoothing; its current corollary uses
  the PDE-18 H^2 and higher-order suppliers for those conditional
  identifications. The PDE-23 heat example covers arbitrary bounded open domains
  and expressly does not identify `D(A)` with a spatial H^2 space. The [T]
  (10.63)/(10.64) rows are therefore both deferred to PDE-24 in the coverage
  record. No downstream item was edited during this audit.
- **Known limits to hand to Step 3:** (i) the boundary proof deliberately avoids
  the trace operator: after localisation and flattening the test functions are
  shown to lie in `H^1_0` through the closure definition (stability of
  tangential difference quotients and of smooth compactly supported multipliers
  on `H^1_0`, with ordinary compact support used only for the interior pieces),
  so no AC-carrying trace characterisation is imported; the trace-based route
  of [H] is an equivalent alternative; (ii) the
  higher-order boundary theorem is stated with `C^{k+2}` boundary and
  `W^{k+1,∞}` coefficients (Hunter's boundary regularity, Teschl's coefficient
  regularity); Teschl's `C^{k+1,1}` variant is a strictly weaker boundary
  hypothesis that the item does not claim; (iii) the gluing lemma is stated
  with explicit local-bound hypotheses rather than re-proving the local
  estimates; (iv) the interpolation lemma's constants are not sharp; (v) the
  p=1 remark was strengthened from the design's "no proof" to a two-line
  witness argument (step function plus the published no-weak-derivative
  counterexample), which is recorded here as a deliberate refinement.


## Post-check correction

The whole-run content-policy check above correctly caught a typo in batch 27's bump-lemma dependency ID. The batch 27 manifest and owner readiness record now use the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`. The original result above is preserved as the state observed by batch 12. The corrected whole-run policy gate will be run after the remaining scaffold batches finish and the manifests are stable.

## Attempt-3 completion audit (2026-10-04)

This dispatch is the third attempt for batch 12. Attempts 1 and 2 wrote the
manifest, coverage record, cross-batch input and readiness records, but both
ended without a dispatch result, so the engine kept the unit uncovered. This
attempt re-read the design, the manifest and every record against the current
tree, found and repaired one class of scaffold defect, re-recorded every
affected readiness receipt, and re-ran the batch checks. No claim, source,
pair, page membership, order or cross-batch edge was changed.

### Dependency audit and manifest repair

The strategy text of five items named specific library results that were
missing from their `deps` arrays. All additions are published, out-of-run
suppliers, so no `dependency_level` changed and no new cross-batch row was
needed (nothing in-run is involved). Added suppliers:

- `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative`
  + `thm-holder-inequality-for-integrals` — the recorded strategy bounds
  `|ell(phi)| <= C ||phi||_{L^{p'}}` by "the uniform bound and Hölder".
- `thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one`
  + `thm-jensens-integral-inequality`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
  `thm-meyers-serrin-density-on-an-arbitrary-open-set`,
  `thm-ftc-second-part` — part (1)'s recorded route is the integral
  mean-value formula for smooth functions "followed by Jensen, Fubini and
  translation invariance, then density of smooth functions"; every one of
  those five inputs is now declared.
- `thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations`
  + `thm-young-inequality-real-exponents` — the absorption step is recorded
  as "Cauchy-Schwarz with Young's inequality".
- `lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts`
  + `thm-meyers-serrin-density-on-an-arbitrary-open-set`,
  `cor-c-one-change-of-variables-for-l-one-functions`,
  `thm-chain-rule-for-total-derivatives` — the recorded route approximates
  the class by interior mollifications ("density of $C_c^\infty$ in $H^1$ of
  an open set"), pulls the smooth approximations back with the chain rule,
  and performs the change of variables in the weak formulation.
- `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary`
  + `thm-holder-inequality-for-integrals` — the forcing term is recorded as
  bounded by Cauchy-Schwarz.

Every added supplier was inspected on disk: all are `status: published` and
their statements match the use above. Their own statement-level choice
assumptions are at most Countable Choice (Meyers–Serrin: CC; the C^1 change
of variables: CC; the Lebesgue translation-invariance theorem: no choice;
Jensen, Fubini, FTC, total-derivative chain rule, Hölder, Young: no stated
choice assumption). It must be recorded that some published closures of
these suppliers contain deeper AC-stating results (for example
`thm-riesz-fischer-completeness-of-l-p` inside the Meyers–Serrin closure and
`lem-finite-choice` in several); the run's existing convention labels the
Sobolev interfaces at Countable-Choice level, and reconciling that deep
labelling with the statement-level assumptions is a review question for
Step 3, not something this scaffold silently resolves. The choice ledger of
this note is otherwise unchanged.

### Readiness receipts re-recorded

The prepared edits changed the hash closure of 30 items in the first pass and
13 in the second; each stale record was re-recorded as `ready` with the same
examined-dependency list plus the new suppliers for the five edited items and
an addendum naming the changed closure. Final state: all 39 batch-12 records
current (`ready`, owner `false`); `step1-decisions.mjs check` reports
604/604 run items ready with only the 16 empty-scaffold pages of batches
13–20 outstanding.

### Checks actually run in attempt 3 (fresh results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-12.pages.json`:
  39 item(s), 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  exit 1 run-wide from the batches 7 and 13–20 empty scaffold inventories;
  **zero** findings name a batch-12 item or page, no cycle, and the batch-12
  labels (levels 0–14) still match the computed levels after the edits.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`:
  604 items, 604 ready; work list = the 16 other-batch pages only.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-12.coverage.json --require-destination`:
  2 page(s), 53 harvested result(s), 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-12.coverage.json`
  (gate mode): 8/8 source(s) fetch-verified, 0 documented drops.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`:
  604 scoped item(s), 0 error(s), 0 warning(s); nothing names a batch-12
  item (the batch-27 typo recorded above is fixed in batch 27).
- `node tools/fwdcheck.mjs`: exit 0; the two `forward_refs` of the
  compatibility remark still point strictly forward to this pair's B page.
- `node tools/extcheck.mjs`: exit 0 (whole run).
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`: exit 1
  run-wide, as expected at Step 1 (the plan carries no items until the Step-4
  splice, so every populated manifest reports "manifest N vs plan 0"). The
  batch-12 portion of the undeclared-prerequisite report is now **45 unique
  (consumer, supplier) item edges** — 36 into
  `lax-milgram-and-weak-elliptic-solutions` (batch 10) and 9 into
  `sobolev-poincare-and-morrey-inequalities` (batch 4); the earlier 32/25/7
  figure recorded under conflict 1 above was an undercount from an earlier
  tree. **None** of the 45 edges involves the suppliers added in this audit
  (all additions target published items), so the attempt-3 repair created
  zero new splice findings. The same class of findings appears across
  batches 10, 11 and others; Step 4 should either add the direct `requires`
  edges or accept the transitive licence. No page, pair or ordering was
  changed here.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  exit 0, "refreshed and deduplicated"; the unified ledger carries batch 12
  in `reviewed_batches` with all 50 declared edges present and `open`.
  `--require-reviewed` still exits 1 run-wide because batches 13–20 have no
  input file yet; that is not a batch-12 finding.
- Scaffold completeness emulation of the engine's artifact predicate for
  batch 12 (manifest parse, per-item readiness receipts, `dependency_level`
  equality, cycle scan): complete; no `scaffold-incomplete` condition.
- Transitive closure check: every one of the 39 items' declared dependencies
  resolves to a published item file or an in-run draft (12 in-run suppliers,
  each with a cross-batch row); no path from any batch-12 item reaches
  `deferred-set-theory-beyond-choice`; no `proved_here: false` item and no
  incompatible-axiom branch appears in the closure.

### Residual uncertainty handed to Step 3 (flagged, not silently fixed)

1. Routine inequalities: Hölder/Young/Cauchy–Schwarz are declared where the
   recorded strategy names them as the load-bearing estimate. Where such an
   inequality is only generic technique inside an absorption step (for
   example the E-absorption in the interior theorem), the Step-3 author
   should add the used inequality to `deps` when the written proof cites it
   as a fact; this matches the declaration density of batches 9–11 and was
   not tightened further here.
2. A29 and B10 cite the AC-carrying supplier
   `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` for context
   (the remark's scope statement and the example's "no H^2 trace" clause)
   while declaring no choice assumption. No checker enforces choice
   propagation, and neither item proves a theorem from that supplier, so the
   call is left to Step 3: either restate the assumption or keep the
   reference purely contextual.
3. Deep choice labelling: as noted above, several freshly declared published
   suppliers have AC-stating items deeper in their transitive closures. The
   batch-12 statements declare Countable Choice except where the run's own
   supplier statements carry AC (A18, A25, A27, A28, B6). Step 3 should
   verify that the statement-level labels this page carries are the labels
   the run expects, given that the published closures are not uniformly
   choice-pure.
4. The original "Known limits to hand to Step 3" above (trace-free boundary
   route, `C^{k+2}`/`W^{k+1,infinity}` hypotheses, gluing with local-bound
   hypotheses, non-sharp interpolation constants, strengthened p=1 remark)
   remain open for Step-3 review.
