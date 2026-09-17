# Step 4 adjudication — forward page edges

Run: `phase-2-remaining-27`. Dispatch: `alpha` / `step4-forward-edges` (covers all).
Baseline: `node tools/validate-plan.mjs research/plan-spec.json` reported 13
`undeclared-prereq` findings, each an earlier page's item depending on an item
homed on a later page (the reading order is fixed; a forward edge cannot be
spliced). Outcome: **12 of the 13 pairs repaired in place (item deps + batch
manifest rows + re-splice), 1 pair escalated** — the escalated pair is the only
remaining `undeclared-prereq` finding, and it is escalated because the supplier
is load-bearing and no earlier (or non-examples-page) item states the fact.
No other validate-plan finding class changed (51 `b-leaf`, 4 `prefix`, 1
`dup-id` and 3961 `redundant-prereq` warnings are pre-existing and outside this
dispatch's scope).

## Summary

| # | Consumer page (order) | Forward supplier page (order) | Offending item(s) | Fix |
|---|---|---|---|---|
| 1 | hilbert-space-geometry-and-riesz-representation (288.071) | weak-choice-principles-and-sierpinskis-theorem (665) | `rem-l2-projection-agreement` | replace |
| 2 | orthonormal-bases-parseval-and-fourier-series (288.073) | weak-choice-principles-and-sierpinskis-theorem (665) | `thm-existence-of-a-maximal-orthonormal-family` | replace |
| 3 | gelfand-theory-and-commutative-c-star-algebras (288.081) | weak-choice-principles-and-sierpinskis-theorem (665) | 7 items (below) | replace |
| 4 | gelfand-theory-and-commutative-c-star-algebras (288.081) | conformal-mapping-branches-and-the-schwarz-lemma (325) | `lem-zero-free-entire-function-of-exponential-type-is-an-exponential` | drop |
| 5 | gelfand-theory-and-commutative-c-star-algebras-examples (288.082) | the-fundamental-group-of-the-circle (295) | `ex-gelfand-transform-of-ell-one-of-z` | replace |
| 6 | the-ito-integral-with-respect-to-brownian-motion (288.137) | weak-choice-principles-and-sierpinskis-theorem (665) | 17 items (below) | replace |
| 7 | the-ito-integral-with-respect-to-brownian-motion-examples (288.138) | weak-choice-principles-and-sierpinskis-theorem (665) | 8 items | replace |
| 8 | itos-formula-and-brownian-martingales (288.139) | weak-choice-principles-and-sierpinskis-theorem (665) | 20 items | replace |
| 9 | itos-formula-and-brownian-martingales-examples (288.140) | weak-choice-principles-and-sierpinskis-theorem (665) | 8 items | replace |
| 10 | stiefel-whitney-and-euler-classes-by-universal-constructions-examples (366.038) | lie-subgroups-actions-and-homogeneous-spaces-examples (494) | `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` | **escalate** |
| 11 | chern-and-pontryagin-classes-by-splitting-and-complexification (366.039) | projective-algebraic-sets-projective-morphisms-and-cones (366.045) | 4 items (below) | drop |
| 12 | chern-and-pontryagin-classes-by-splitting-and-complexification (366.039) | singular-cochains-mayer-vietoris-and-smooth-singular-comparison (473) | `thm-integral-complex-projective-bundle-theorem` | replace |
| 13 | compact-lie-groups-maximal-tori-and-peter-weyl-theory (507) | morse-critical-points-hessians-and-indices (517) | `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics` | replace |

New suppliers used (all earlier than their consumers, all homed on non-examples
A pages, all inside the consumer page's declared `requires` closure):

| Supplier | Home page (order) | States |
|---|---|---|
| `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` | banach-valued-integration-and-the-radon-nikodym-property (288.069) | In ZF, AC ⇒ AC_ω; AC ⇒ prescribed-initial-point DC |
| `lem-ac-supplies-sequential-choices-for-probability-constructions` | central-limit-theorems (288.113) | For ZF: AC ⇒ countable choice; AC ⇒ prescribed serial paths (DC) |
| `def-the-one-dimensional-torus-and-normalized-haar-integral` | orthonormal-bases-parseval-and-fourier-series (288.073) | T := R/Z is compact Hausdorff and homeomorphic to the Euclidean unit circle |
| `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology` | singular-cohomology-and-coefficient-theorems (366.011) | Homotopic maps induce equal maps on H^n(−;G), all n and all coefficient groups G |
| `def-riemannian-metric-and-riemannian-manifold` | riemannian-metrics-length-distance-and-volume (477) | Riemannian metric = smooth symmetric covariant 2-tensor with g_p(v,v)>0, a smooth bundle metric on TM |

Closure checks were run with the plan's own `requires` graph (`reqClosure`); each
new supplier's home page is in the consumer page's transitive closure, so no
`requires` edge was added, none was needed, and `splice-plan` recorded zero
refusals.

## Pair detail

### 1. hilbert-space-geometry-and-riesz-representation → weak-choice-principles-and-sierpinskis-theorem

- Item: `rem-l2-projection-agreement`. Examined: the remark's only choice
  sentence, "it assumes AC, and AC implies the Axiom of Countable Choice, under
  which the abstract projection exists ([[def-axiom-of-choice]])" (line 24),
  together with the concrete-`L^2` comparison it records.
- Fix: replaced dep `thm-choice-implies-dependent-implies-countable-choice` with
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
  (288.069 is in this page's closure). The body never named the removed item, so
  no bracket tag changed; `def-axiom-of-choice` remains.

### 2. orthonormal-bases-parseval-and-fourier-series → weak-choice-principles-and-sierpinskis-theorem

- Item: `thm-existence-of-a-maximal-orthonormal-family`. Examined: [A1]–[A3]
  (Zorn instance; the AC_ω cost of the Parseval-equivalence supplier), the
  bookkeeping "the hypothesis is full AC, and it is used exactly once" and "AC_ω,
  which AC supplies" (lines 18–20), and steps 1.1–3.1 which do the work.
- Fix: same replacement as pair 1 (the banach-integration page is also in this
  page's closure). The AC_ω bridge is exactly what the item's bookkeeping
  declares; nothing was weakened.

### 3. gelfand-theory-and-commutative-c-star-algebras → weak-choice-principles-and-sierpinskis-theorem

- Items (each declares AC and inherits AC_ω/DC obligations from the surrounding
  functional-analytic interfaces):
  - `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` (Zorn
    instance; [L4] "Under Countable Choice …");
  - `thm-commutative-gelfand-duality` ([L2] "under Dependent Choice, which
    follows from the Axiom of Choice");
  - `lem-extreme-points-of-the-dual-ball-of-c-of-k` ([L3] "AC ⇒ AC_ω");
  - `thm-banach-stone` ([L5] "Under Dependent Choice — which follows from the
    Axiom of Choice");
  - `lem-zero-set-ultrafilters-and-stone-cech-points` (ultrafilter lemma and DC
    are declared available);
  - `thm-every-commutative-c-star-algebra-has-an-approximate-unit` ([L3] "Assuming
    Dependent Choice — which follows from the Axiom of Choice");
  - `thm-locally-compact-gelfand-duality` ([L3]/[L4] DC via the cutoff lemma).
- Fix: for each, replaced
  `thm-choice-implies-dependent-implies-countable-choice` with
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`, which
  states both AC ⇒ AC_ω and AC ⇒ prescribed-initial-point DC. No body text named
  the removed item.

### 4. gelfand-theory-and-commutative-c-star-algebras → conformal-mapping-branches-and-the-schwarz-lemma

- Item: `lem-zero-free-entire-function-of-exponential-type-is-an-exponential`.
  Examined: [L7] (line 53), "The Schwarz lemma on the unit disc … the underlying
  engine is the maximum modulus principle ([[thm-local-maximum-modulus-principle]])",
  and step 1.1 (line 61), which uses only the inequality |G(ζ)| ≤ |ζ| for that
  G.
- Fix: **dropped** dep `thm-unit-disc-schwarz-lemma-with-rigidity`. Evidence:
  the removed id appears only in the frontmatter `deps`; the proof cites the
  local maximum modulus principle, which is a published item on
  the-identity-theorem-and-the-open-mapping-theorem (order 288.07811, inside
  this page's closure) and remains a declared dep. The Schwarz inequality
  follows from that principle by the standard ζ ↦ G(ζ)/ζ argument (apply the
  principle to G(ζ)/ζ on discs of radius r and let r ↑ 1, using the power-series
  extension of G(ζ)/ζ from [L6]); [L7] itself names that principle as the
  engine, and nothing in the statement or proof was weakened. (The
  later item is not needed, and its home page 325 is later than 288.081, so it
  could not be declared as a prerequisite at all.)

### 5. gelfand-theory-and-commutative-c-star-algebras-examples → the-fundamental-group-of-the-circle

- Item: `ex-gelfand-transform-of-ell-one-of-z`. Examined: [L5] (line 54),
  "T is homeomorphic to R/Z and is compact Hausdorff", and steps 1.5 and 4.1
  (continuity and the compact-to-Hausdorff homeomorphism argument), which is
  where the compactness of T is used.
- Fix: replaced `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`
  (homed on the later page 295) with
  `def-the-one-dimensional-torus-and-normalized-haar-integral` (orthonormal page
  288.073, inside this page's closure), whose statement defines T := R/Z and
  states that it is compact Hausdorff and homeomorphic to the Euclidean unit
  circle. This is the same fact, from an earlier page.

### 6–9. the-ito-integral-with-respect-to-brownian-motion (+ examples), itos-formula-and-brownian-martingales (+ examples) → weak-choice-principles-and-sierpinskis-theorem

All 53 offending items sit on these four pages, all declare AC, and all inherit
the countable/dependent-choice obligations of the ambient probability
(conditional-expectation, L²-completion, density) interfaces. Representative
evidence read in full:

- `def-continuous-time-adapted-process-and-martingale`: "the countable-choice
  obligations inherited from that interface are declared" (lines 27 and 93);
- `def-elementary-predictable-brownian-integrand` (line 80) and
  `def-ito-integral-of-an-elementary-predictable-process` (same sentence);
- `thm-density-of-elementary-predictable-processes-in-predictable-l2`: [F8]
  "the implication bridge records the inherited obligations" (line 54);
- `def-ito-integral-for-square-integrable-predictable-processes`: "the
  construction selects an approximating sequence … the inherited obligations
  are declared as dependencies of this item" (lines 84–88);
- `def-continuous-brownian-ito-process`: lines 109–114; `def-brownian-generator`:
  lines 66–70;
- `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two`: [F4]
  "Countable choice for a minimizing sequence";
- `thm-brownian-filtration-martingale-representation`: [F8] AC bookkeeping
  (line 62).

The remaining items are the AC-bookkeeping declarations of the same
construction (step-level "AC is declared for the ambient interfaces"), so the
same bridge is what discharges the AC_ω hypotheses of their suppliers.

- Fix (all 53): replaced
  `thm-choice-implies-dependent-implies-countable-choice` with
  `lem-ac-supplies-sequential-choices-for-probability-constructions` (home page
  central-limit-theorems, 288.113, inside the closure of all four pages), which
  states AC ⇒ countable choice and AC ⇒ prescribed serial paths for this
  probability track. No body text named the removed item.
- Complete item list: `def-continuous-time-adapted-process-and-martingale`,
  `def-elementary-predictable-brownian-integrand`,
  `def-ito-integral-of-an-elementary-predictable-process`,
  `lem-elementary-ito-integral-is-independent-of-the-step-representation`,
  `thm-ito-isometry-for-elementary-integrands`, `lem-cross-ito-isometry`,
  `thm-density-of-elementary-predictable-processes-in-predictable-l2`,
  `def-ito-integral-for-square-integrable-predictable-processes`,
  `lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative`,
  `thm-ito-isometry-and-linearity-in-predictable-l2`,
  `thm-ito-integral-process-has-a-continuous-martingale-version`,
  `thm-doob-maximal-bound-for-the-ito-integral`,
  `def-locally-square-integrable-predictable-brownian-integrand`,
  `thm-localized-ito-integral`, `thm-stopping-an-ito-integral`,
  `thm-quadratic-variation-of-an-ito-integral`,
  `cor-deterministic-ito-integrals-are-gaussian`,
  `ex-integral-of-a-deterministic-step-function-against-brownian-motion`,
  `ex-integral-of-the-indicator-of-a-stopping-interval`,
  `ex-covariance-of-two-deterministic-ito-integrals`,
  `ex-integral-of-brownian-motion-against-itself-preview`,
  `ex-time-changed-quadratic-variation-of-an-ito-integral`,
  `cex-a-nonadapted-step-integrand-breaks-the-ito-isometry`,
  `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral`,
  `cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands`,
  `def-continuous-brownian-ito-process`,
  `thm-quadratic-covariation-of-brownian-ito-processes`,
  `thm-integration-by-parts-for-brownian-ito-processes`,
  `thm-ito-formula-one-dimensional`,
  `thm-multidimensional-ito-formula-for-brownian-driven-processes`,
  `cor-brownian-square-martingale`, `cor-exponential-brownian-martingale`,
  `thm-space-time-harmonic-functions-yield-brownian-local-martingales`,
  `cor-heat-semigroup-martingale`,
  `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`,
  `thm-levy-characterization-of-brownian-motion`,
  `cor-vector-levy-characterization`, `def-brownian-generator`,
  `thm-dynkin-formula-for-bounded-brownian-stopping`,
  `rem-ito-versus-stratonovich-boundary`,
  `rem-general-semimartingale-calculus-is-outside-this-block`,
  `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two`,
  `thm-brownian-filtration-martingale-representation`,
  `cor-square-integrable-brownian-terminal-variables-have-ito-representations`,
  `cor-brownian-filtration-local-martingales-have-continuous-versions`,
  `ex-ito-formula-for-brownian-powers`,
  `ex-logarithm-of-geometric-brownian-motion`,
  `ex-exponential-martingale-and-a-brownian-tail-bound`,
  `ex-harmonic-functions-of-planar-brownian-motion`,
  `ex-expected-exit-time-from-an-interval-via-ito-formula`,
  `ex-brownian-hitting-probability-from-an-exponential-martingale`,
  `cex-the-ordinary-chain-rule-fails-for-brownian-motion`,
  `cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability`.

### 10. stiefel-whitney-and-euler-classes-by-universal-constructions-examples → lie-subgroups-actions-and-homogeneous-spaces-examples — ESCALATED

- Item: `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`
  (stiefel-whitney examples, order 366.038).
- Load-bearing use, exact locators: the **Given** ("the covering homomorphism
  ρ: SU(2)→SO(3)"), [F2] (line 35: "Conjugation identifies SU(2) with the unit
  quaternions and defines a surjective two-sheeted covering homomorphism
  ρ: SU(2)→SO(3) with kernel {±1}; identifying SU(2) with S³ presents ρ as a
  covering map S³→SO(3) ≅ RP³", with no bracket tag), step 1.1 (line 52: the
  witness bundle is clutched by ρ) and step 1.2 (line 54: nontriviality needs
  the lifting property of that specific covering plus deg(id)=1).
- The declared supplier `ex-su-two-to-so-three-as-a-covering-homomorphism` is
  homed on the later examples page 494. The only other item stating the fact is
  `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`,
  also on an examples page (order 500). Both routes are forbidden twice over:
  B pages are leaves (published `b-leaf` finding for this same item), and the
  pages are later than 366.038.
- Search performed for an earlier, non-examples carrier of the fact (items/ by
  id and body: "SU(2)", "unit quaternions", "SO(3)", "twofold"/"two-sheeted"/
  "double cover", "π₃"/"pi_3", "rotation group"): every hit is either an
  examples-page item (494, 500, 508, 516) or a later A-page item that merely
  *mentions* SU(2)/SO(3) as a companion example without stating the covering
  (`cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups`,
  order 499; `fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism`,
  order 507). The A-page counterpart `lie-subgroups-actions-and-homogeneous-spaces`
  (493) has no SU(2)→SO(3) result in its 42-item inventory, so the examples-page
  dep cannot be rerouted through an A-page result either.
- Disposition: report, do not edit the proof. Owner decision required: build an
  earlier/non-examples A-page supplier for the SU(2)→SO(3) covering (or
  re-scope the counterexample). This is the single remaining
  `undeclared-prereq` finding for the 13 pairs.

### 11. chern-and-pontryagin-classes-by-splitting-and-complexification → projective-algebraic-sets-projective-morphisms-and-cones

- Items: `def-complex-projective-bundle-and-tautological-complex-line`,
  `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`,
  `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`,
  `thm-first-chern-class-classifies-complex-line-bundles`.
- Examined: none of the four bodies names `def-projective-space-points`; the
  identification actually used is CP^{n-1} = Gr₁(Cⁿ), already supplied by the
  declared dep `def-stiefel-space-grassmannian-and-tautological-bundle`
  (topological-vector-bundles page, 366.029, inside this page's closure) — see
  `def-complex-projective-bundle-and-tautological-complex-line` ("Under the
  identification … supplied by [[def-stiefel-space-grassmannian-and-tautological-bundle]]"),
  `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` [F1]/[F2]
  and step 1.1, `lem-complex-tautological-euler-class-...` [F3]/[F5], and
  `thm-first-chern-class-classifies-complex-line-bundles` [F1].
- Fix: **dropped** `def-projective-space-points` from all four deps. Note: the
  general algebraically-closed-field clause in [F1] of
  `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` is an
  unused restatement; its operative C-case content (complex lines with the
  standard topology) is [F2] + the Grassmannian definition, both already
  declared. No statement was weakened.

### 12. chern-and-pontryagin-classes-by-splitting-and-complexification → singular-cochains-mayer-vietoris-and-smooth-singular-comparison

- Item: `thm-integral-complex-projective-bundle-theorem`. Examined: [F6]
  "Singular cohomology is homotopy invariant" (line 59) and step 5.1 (line 77),
  which pulls the bundle back along a homotopy equivalence w : W → B′ and needs
  that pullback to be an isomorphism compatible with the class x.
- Fix: replaced `cor-singular-cohomology-is-homotopy-invariant` (homed on the
  later page 473, and stated for real coefficients only) with
  `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology` (home page
  singular-cohomology-and-coefficient-theorems, 366.011, inside this page's
  closure), which gives equality of induced maps for homotopic maps for every
  coefficient group; the homotopy-equivalence isomorphism and its compatibility
  with w* are the one-line consequence the step uses. No body citation named the
  removed item.

### 13. compact-lie-groups-maximal-tori-and-peter-weyl-theory → morse-critical-points-hessians-and-indices

- Item: `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics`.
  Examined: [L1] (line 36, "A Riemannian metric is a smooth bundle metric on
  TM; the Levi-Civita connection …"), step 3.1 (line 56, "it is a smooth
  positive-definite bundle metric") and step 5.1 (line 60).
- Fix: replaced `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`
  (morse page, 517) with `def-riemannian-metric-and-riemannian-manifold`
  (riemannian-metrics-length-distance-and-volume, 477, inside this page's
  closure), which states exactly the definition used (smooth symmetric
  covariant 2-tensor with g_p(v,v)>0; a smooth bundle metric on TM). The
  Levi-Civita half of [L1] was already supplied by the declared
  `thm-fundamental-theorem-of-riemannian-geometry` (479). No body citation named
  the removed item.

## Validation and bookkeeping

- `node tools/splice-plan.mjs --run phase-2-remaining-27 --batch {1,4,8,9,12} --update`
  → each touched page reported `REFRESHING … same ids, N item object(s) changed`;
  receipts written to `research/phase-2-remaining-27-splice-{1,4,8,9,12}.json`.
  `research/phase-2-remaining-27-splice-refusals.json` is `{"run": …,
  "refusals": []}` — no `requires` edge needed adjudication.
- `node tools/splice-plan.mjs --run phase-2-remaining-27 --all` → every batch
  `already correct` (mechanical splice complete, nothing withheld).
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 1, `FAIL`:
  `3961 [redundant-prereq]`, `51 [b-leaf]`, `4 [prefix]`, `1 [dup-id]`,
  `1 [undeclared-prereq]`. The last is the escalated pair 10; all other classes
  are byte-identical to the pre-dispatch counts (baseline:
  `13 [undeclared-prereq]` plus the same 51/4/1/3961). **`undeclared-prereq` for
  the 13 pairs: 13 → 1 (12 repaired, 1 escalated).**
- `node tools/tsx-run.mjs tools/precheck.mts <the 70 edited items>` → `59
  checked, 0 failing — all clean` (11 of the 70 are definitions/remarks without a
  phase-format body and are skipped by precheck).
- `node tools/proof-contract.mjs research/phase-2-remaining-27-proof-contracts.json --strict --items <the 70 edited items>`
  → `0 error(s), 0 warning(s), 70/70 item(s) checked`. No contract entry cited a
  removed supplier, so no contract row needed editing.
- Mirror check: for all 70 edited items the frontmatter `deps`, the
  `research/phase-2-remaining-27-batch-<b>.pages.json` manifest row, and the
  spliced `research/plan-spec.json` item object agree exactly (70/70, 0
  mismatches).
- `node tools/depcheck.mjs --quiet` → exit 0, no finding names an edited item.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  → `refreshed and deduplicated`. One row was added to
  `research/phase-2-remaining-27-batch-4.cross-batch-dependencies.json` for the
  single in-run cross-batch edge created by this dispatch
  (`ex-gelfand-transform-of-ell-one-of-z` (batch 4) →
  `def-the-one-dimensional-torus-and-normalized-haar-integral` (batch 1),
  `status: verified` with the [L5]/steps 1.5 and 4.1 evidence and the note that
  it replaces the removed forward dep), because the brief requires a review row
  for every declared cross-batch edge; after the refresh that edge carries a
  `verified` review and no in-scope batch edge is left unreviewed. No existing
  row referenced any other edge changed here (none of the removed suppliers had
  a row), and no orphaned review was created.
- Files changed by this dispatch: the 70 item files above; batch manifests 1, 4,
  8, 9, 12; the batch-4 cross-batch dependency input (one row, as above);
  `research/plan-spec.json` and the splice receipts/refusals artifact as written
  by `tools/splice-plan.mjs`. No page cover, `requires` edge, coverage file,
  scope decision or proof-contract row was edited.

## Out-of-scope observations (routed, not repaired)

1. **Item-file/manifest dep drift (batches 1 and 10).** For
   `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` the
   authored item carries `def-euler-class-by-zero-section-pullback-of-the-thom-class`
   (a page-366.037 item, intra-pair and admissible) that is missing from its
   manifest/plan row; similarly `def-fourier-coefficients-and-trigonometric-polynomials`
   (batch 1) carries `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
   in `items/` but not in its manifest row, and four further stiefel-whitney
   examples items (`ex-stiefel-whitney-class-of-the-universal-real-line`,
   `ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines`,
   `ex-euler-class-of-zero-and-trivial-positive-rank-bundles`,
   `cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients`)
   show the same drift. These are outside the 13 findings; the owning batch's
   writer/owner should reconcile them (they do not affect the
   `undeclared-prereq` count, whose page edges are computed from the plan-spec
   item lists, not from the item files).
2. **Batch-4 ledger row recommends a forward edge.**
   `research/phase-2-remaining-27-batch-4.cross-batch-dependencies.json` contains
   an open row for `cor-atkinson-in-calkin-algebra-language` whose suggested
   repair is to cite `thm-choice-implies-dependent-implies-countable-choice`
   (page 665) for "AC ⇒ AC_ω". Under this adjudication that bridge must instead
   be `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
   (288.069, already in that page's closure); the row's owner should take that
   substitution before repairing, or the repair will introduce a new forward
   edge.

## Uncertainty and honesty notes

- The two `lem-ac-supplies-*` statements were read in full: each is a ZF proof
  that AC yields countable choice and the prescribed-initial-point form of
  dependent choice, so the replacements state the removed theorem's content for
  the uses found (AC_ω for selections; DC for Urysohn/cutoff and Zorn-adjacent
  constructions).
- For pair 4, the dropped Schwarz item is replaced by the standard elementary
  derivation from the already-declared local maximum modulus principle (which
  the item's own [L7] names as the engine); this is the only place where a
  repair relies on a step a competent reader closes immediately rather than on a
  verbatim supplier statement. If the Step-5/7 reader disagrees, the fallback is
  to declare `thm-maximum-modulus-principle-with-boundary-and-infinity-control`
  (published on 288.07811, inside the closure) and cite it in [L7].
- For pair 12, the replacement gives equality of induced maps for homotopic
  maps (all coefficient groups); the homotopy-equivalence isomorphism used in
  step 5.1 is the immediate consequence. This is a shortening of the removed
  corollary's packaging, not a change of content.
- No other uncertainty remains; every other replacement is a verbatim match to
  the required fact, and no statement, hypothesis or conclusion was weakened
  anywhere in this dispatch.
