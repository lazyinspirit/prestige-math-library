# Phase 2 remaining 27 — Step 3b author report: square-integrable kernels and Hilbert–Schmidt compactness

**Status: complete for this pair.** All 9 owned items are fully authored with
strict proof contracts, both pages are written, the manifest, coverage,
cross-batch dependency input and frontier ledger are updated, and all 9 item
decisions are recorded `accept` at confidence 1. No escalation is open for this
pair.

Run: `phase-2-remaining-27`. Dispatch:
`step3b-pair-square-integrable-kernels-and-hilbert-schmidt-compactness-51e0d57de962c402`.
Owned pair: A `square-integrable-kernels-and-hilbert-schmidt-compactness`, B
`square-integrable-kernels-and-hilbert-schmidt-compactness-examples` (shared
batch 2 manifest `research/phase-2-remaining-27-batch-2.pages.json`; the
sibling compact-operator pair in that batch is owned by another writer and was
not touched).

## Completed IDs

A items (5), all authored and accepted: `def-hilbert-schmidt-operator`,
`thm-hilbert-schmidt-norm-is-basis-independent`,
`thm-hilbert-schmidt-operators-are-compact`,
`lem-product-rectangle-kernels-are-dense-in-product-l-two`,
`thm-l-two-kernels-give-hilbert-schmidt-operators`.

B items (4), all authored and accepted:
`ex-square-integrable-separable-product-kernel`,
`ex-square-integrable-kernel-without-continuous-representative`,
`ex-square-integrable-kernel-finite-rank-truncations`,
`ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two`.

No item was added, dropped or re-scoped; the exact owner-directed IDs, kinds
and page order are preserved.

## Checkpoint and progress log (final)

Scope decision: `sufficient` at Step 3a (receipt
`research/phase-2-remaining-27-step3a-review-square-integrable-kernels-and-hilbert-schmidt-compactness.json`),
refreshed by this dispatch after the local repairs with the current scope hash;
no owner-held scope is in play. Owner direction
`research/phase-2-remaining-27-owner-authoring-direction.md` was read first and
treated as binding: the exact A(5)/B(4) inventories, arbitrary-index
finite-subset suprema, the well-definedness, exact-norm and sigma-finite
reduction obligations, and the prohibition on the later SVD are retained.

Sources read for the mathematics (fetch-verified in the batch-2 coverage
record): Teschl, *Topics in Real and Functional Analysis*, §3.6 printed
pp. 93–96 (Schatten classes, basis independence, diagonal Hilbert–Schmidt
operators); Roe, *Lectures on Analysis*, Lecture 13 printed pp. 67–68
(Definition 13.1, the matrix-coefficient calculation, Exercise 13.4,
Proposition 13.5); Axler, *Measure, Integration & Real Analysis*, §§7A and 10C
with 10.70 (product-measure Fubini/Tonelli, rectangle density, simple-function
density). The proofs below are the library-local arguments; the manifest
strategies were treated as work lists.

- A01 `def-hilbert-schmidt-operator`: authored as a choice-free, basis-relative
  definition with the finite-subset-supremum convention, the empty-basis,
  zero-operator, finite-dimensional and H={0} cases, and an explicit refusal of
  basis-existence and operator-norm claims. precheck n/a (definition);
  rendercheck clean.
- A02 `thm-hilbert-schmidt-norm-is-basis-independent`: authored under AC_ω.
  The rectangle supremum over finite subsets of E×F is shown to equal both
  Σ_E‖Te‖² and Σ_F‖T*f‖²; the finite-supremum interchange is proved (finite
  choice only), the matrix identity is the adjoint identity, and the common
  value is taken in [0,+∞]. PASS.
- A03 `thm-hilbert-schmidt-operators-are-compact`: authored under AC_ω. The
  norm estimate ‖T−TP_F‖ ≤ (Σ_{e∈E\F}‖Te‖²)^{1/2} is proved by passing the
  Fourier net through T and bounding each finite tail sum with the triangle
  inequality and scalar Cauchy–Schwarz; each TP_F is compact because the closed
  unit ball of the finitely spanned span{e:e∈F} is compact and T is
  continuous; a countable family of tail-control sets feeds the AC_ω
  norm-closure theorem for the Banach (Hilbert) target. PASS.
- A04 `lem-product-rectangle-kernels-are-dense-in-product-l-two`: authored
  under AC_ω. Finite-measure exhaustions X_n, Y_n; a finite-measure set is
  reduced to its trace on the exhausted rectangle Z_n; on the finite trace
  measure space the algebra of finite rectangle unions inside Z_n is shown to
  generate the trace sigma-algebra, and the published generating-algebra
  approximation applies; completed classes pass through a base-measurable
  representative, and the indicator identity ‖1_E−1_C‖²=ρ(EΔC) closes the
  argument in both L²(ρ) and L²(ρ̄). PASS.
- A05 `thm-l-two-kernels-give-hilbert-schmidt-operators`: authored under AC.
  Base-measurable representative of equal norm (monotone convergence against
  the supremum definition of the nonnegative integral, completion agreement on
  base-measurable sets); a.e. defined section integral with the
  Cauchy–Schwarz bound; measurability by simple-function approximation and the
  limit-superior representation; representative independence; boundedness
  ‖T_k‖≤‖k‖₂; existence of Hilbert bases by Zorn with the orthogonal
  decomposition; the orthonormal product family ψ_{f,e}=f⊗ē and the pairing
  identity ⟨T_ke,f⟩=⟨k,ψ_{f,e}⟩ by Fubini; rectangle kernels in the closed span
  of that family; kernel density; Bessel plus the finite-Parseval lower bound
  giving Σ|⟨k,ψ⟩|²=‖k‖₂²; Parseval transferring the identity to
  Σ_e‖T_ke‖²=Σ_f‖T_k^*f‖². PASS.
- B01 `ex-square-integrable-separable-product-kernel`: authored under AC.
  Tonelli factorises ‖k‖₂²=‖a‖₂²‖b‖₂²; the integral formula T_kf=a⟨f,b⟩ holds
  everywhere; the range lies in C·a with the ordered basis (a) or the empty
  list; the operator norm is attained at f=b/‖b‖₂ when b≠0; the kernel theorem
  gives the equal Hilbert–Schmidt norm. PASS.
- B02 `ex-square-integrable-kernel-without-continuous-representative`: authored
  under AC. On the square with the completed product of the two factor Lebesgue
  measures, box positivity of the product measure prevents a null set from
  containing a ball, sequential continuity propagates the value 1 on the left
  half and 0 on the right half, and the interface x=1/2 contradicts
  continuity; Countable Choice selects the countably many approximating points
  outside the null set. PASS.
- B03 `ex-square-integrable-kernel-finite-rank-truncations`: authored under AC.
  Counting measure is sigma-finite; the square integral is the coefficient sum;
  T_k is the diagonal map; the truncation ranges carry the explicit ordered
  basis (e_n)_{n∈J}; the exact Hilbert–Schmidt error is the kernel theorem
  applied to the difference kernel; the operator-norm error is
  sup_{n>N}|a_n|, a real number by the least-upper-bound property, with the
  standard vectors giving the lower bound. PASS.
- B04 `ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two`: authored under
  AC. The kernel theorem supplies a Hilbert basis whose square-sum is
  ‖k‖₂²<∞, so T_k is Hilbert–Schmidt relative to it and the Hilbert–Schmidt
  compactness theorem makes it compact; the discontinuous witness of B02 is
  recorded as showing that continuity of the kernel is not needed. PASS.

## Scaffold repairs made by this dispatch

1. **Choice-interface repair (forward-reference defect in the scaffold).** The
   scaffold listed `thm-choice-implies-dependent-implies-countable-choice` as a
   dependency of items 4, 5 and B04. That item is homed on
   `weak-choice-principles-and-sierpinskis-theorem` (plan order 665), later
   than this pair, so a load-bearing reference to it is an undeclared forward
   reference. Repair: the AC-hypothesis items now cite the published earlier
   `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
   (order 288.069), which proves AC ⇒ AC_ω and AC ⇒ DC; the AC_ω items declare
   `def-countable-choice` directly. The new rows were added to
   `research/phase-2-remaining-27-batch-2.cross-batch-dependencies.json`.
2. **Kernel-theorem route.** The scaffold's separable-support strategy is
   replaced by the product-basis computation actually proved (the product
   family of the two Hilbert bases, rectangle kernels in its closed span, and
   Bessel with a finite-Parseval lower bound). The owner direction's
   well-definedness, exact-norm and reduction obligations are met: the
   sigma-finite reduction is item 4, and the completed-to-product
   representative reduction is step 1.2 of item 5. The unused scaffold
   suppliers `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`
   (ledger row marked `removed` with evidence) and
   `lem-finite-rank-operators-are-compact` in item 3 were dropped; the
   suppliers actually used were added (`thm-bessel-inequality-for-an-arbitrary-orthonormal-family`,
   `lem-finite-bessel-inequality`,
   `thm-closed-unit-ball-compact-iff-finite-dimensional`,
   `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`,
   `thm-sections-of-product-measurable-sets-are-measurable`,
   `def-nonnegative-lebesgue-integral`,
   `def-integral-of-a-nonnegative-simple-function`,
   `thm-metric-continuity-characterisations`,
   `thm-completion-measurable-functions-have-base-measurable-representatives`,
   `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
   and the Lebesgue/box items used by B02).
3. **Manifest re-sync.** All 9 manifest dependency arrays were re-synced from
   the authored items; the 9 `statement` rows and `axiom_audit` rows were
   rewritten to the authored claims and to the exact choice uses; the stale
   strategies of items 5, B03 and B04 were replaced by the proved routes.
4. **Statement precision on the discontinuous example.** The example is stated
   on the square equipped with the completed product of the two factor Lebesgue
   measures rather than with the bare phrase "Lebesgue measure": the
   identification of the completed product with the restricted two-dimensional
   Lebesgue measure is not proved anywhere in the closure, so it is not
   asserted. The witness, the rank-one computation and the discontinuity
   contradiction are unchanged.
5. **Fact hygiene for the contract gate.** In item 5 the product-measure fact
   row was merged into its completion fact row, so that every declared fact is
   cited by a proof step (the strict contract gate requires a nonempty use set
   for every fact-source pair); no mathematical content changed.
6. **Self-review repairs in the two long proofs.** (a) In item 4's completed
   case the zero-coefficient configuration is now handled explicitly (the zero
   rectangle combination) so that the constant B is positive before it is
   divided by. (b) In item 5 step 1.2 the equality of the completed and product
   integrals of |k_0|^2 is now proved in both directions: the backward
   direction passes a completed-measurable simple minorant through the
   completion-representative theorem and truncates it at |k_0|^2, so both
   suprema of the nonnegative-integral definition coincide. (c) In item 5
   step 7.1 the lower bound is stated exactly as
   ||k_0||^2(||k_0||-eps)^2/(||k_0||+eps)^2, which is what
   |<k_0,h>| >= ||k_0||^2 - ||k_0||eps and ||h|| <= ||k_0||+eps give; it tends
   to ||k_0||^2 as eps tends to 0, which is all that is used. The six item
   decisions invalidated by these body edits (items 4, 5 and the four examples)
   were re-recorded at confidence 1 after the checks below.

## Checks actually run (all on the final content)

| command | result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts <9 items>` | PASS — 8 proof-bearing items checked, 0 failing (the definition has no proof body by design) |
| `node tools/rendercheck.mjs <9 items + 2 pages>` | PASS — 11 files, no math, delimiter or frontmatter finding |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-2.proof-contracts.json --strict` | PASS — 42/42 items, 0 errors, 0 warnings (exact quotes, per-step inputs, all eight boundary dispositions for the 9 new items) |
| `node tools/content-policy.mjs research/phase-2-remaining-27-batch-2.pages.json` | PASS — 42 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-2.pages.json` | PASS — 42 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs --require-destination research/phase-2-remaining-27-batch-2.coverage.json` | PASS — 2 pages, 47 harvested results, 0 errors, 0 warnings |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` | OK — acyclic; no item-level cycle, forward dependency, B-page dependency or unresolved ID among pages carrying item lists |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --all --dry-run` | No mismatch for batch 2; the two reported refusals are other pairs' in-flight manifests (see below) |
| `node tools/depcheck.mjs` | No finding for any of the 9 items (checked by filtering the report; the global failures belong to other pairs) |
| `node tools/fwdcheck.mjs` | No finding for any of the 9 items (`--quiet` reports 48 forward-undeclared or dangling errors run-wide, all in other pairs' files) |
| `node tools/extcheck.mjs` | PASS — every recorded-not-proved statement is a cited remark; the listed published warnings are inherited and unrelated |
| `node tools/source-fetch-check.mjs --coverage …` | PASS — 4/4 fetch-verified |
| `node tools/url-sweep.mjs --coverage … --out /tmp/phase-2-remaining-27-batch-2-url-liveness.json --recover --fail-on-dead` | PASS — 3/3 distinct URLs live |
| `node tools/source-backing.mjs --coverage … --liveness … --require-verified` | PASS — every authored harvested result still backed |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | PASS — refreshed and deduplicated (43 rows in the batch-2 input after the repairs) |
| `node tools/step3-decisions.mjs record-scope … --decision sufficient` | recorded with the refreshed evidence (this dispatch) |
| `node tools/step3-decisions.mjs record-item …` (9×) | all 9 recorded `accept`, confidence 1, with the item's dependency IDs; `check --phase final` lists no open work for this pair |
| `node tools/step3-auditor-items.mjs certify --run phase-2-remaining-27` | 15 auditor-created items certified (none from this pair: these 9 items were already in the Step-1 manifest, so they pass through the ordinary Step 3 receipt gate) |

## AC and its exact use

- **Choice-free content:** the definition A01; the finite-supremum bookkeeping
  of A02 (finite choice only, `lem-finite-choice`); the product-kernel
  factorisation and norm computations of B01; the diagonal computations of
  B03; the ball and continuity contradiction of B02 apart from its countable
  selection.
- **AC_ω items:** A02 and A03 (Parseval, Fourier expansion, norm closure of
  compact operators, and the countable choice of tail-control sets), A04
  (completion-representative theorem only, AC_ω is not used elsewhere), and the
  countable selection of points outside the null set in B02. Each item declares
  `def-countable-choice` and names the step where the principle is spent.
- **AC items:** A05 uses AC exactly for the Zorn construction of Hilbert bases
  (with the orthogonal decomposition for maximality) and obtains AC_ω from the
  published bridge lemma for the completion-representative, Parseval and L²
  structural inputs; Riesz representation supplies T_k^*. B01–B04 declare AC
  and propagate it through the kernel theorem and the Hilbert–Schmidt
  compactness theorem, as their `axiom_audit` rows state. No item assumes a
  choice principle that its suppliers do not provide, and no choice-free
  argument was weakened.

## Published concerns and routed findings

- **Routed to the owner (in-run drafts of other pairs, not edited here).**
  `fwdcheck --quiet` reports 48 forward-undeclared or dangling errors run-wide,
  all in other pairs' files: twelve Ito-integral and Brownian items cite
  `thm-choice-implies-dependent-implies-countable-choice` (home page order
  665), several Lie-theory items cite later Harish-Chandra and
  enveloping-algebra items, and four forward references of
  `cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group`
  are planned nowhere. These belong to their authors; this pair avoids the
  forward-referenced choice item entirely (repair 1).
- **Re-verified but not consumed:** `thm-existence-of-a-maximal-orthonormal-family`
  on the batch-1 page `orthonormal-bases-parseval-and-fourier-series` declares
  `thm-choice-implies-dependent-implies-countable-choice` directly, so it
  carries the same forward-reference defect; the kernel theorem therefore
  constructs its Hilbert bases by Zorn locally instead of consuming that item.
  Confidence high for the structural finding; the mathematics of the batch-1
  item is not in question.
- **Published overlap, not a defect:**
  `lem-square-integrable-kernels-define-bounded-compact-integral-operators` and
  `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` (both
  published on `weak-mixing-and-the-chacon-transformation`) prove related
  probability-space statements with their own conventions. They are not
  consumed here and nothing in this pair contradicts them.
- **Published defects among the suppliers used: none found.** Every published
  statement cited was read at statement level and used with its stated
  hypotheses: the product-measure existence/uniqueness/rectangle formula, the
  uncompleted Tonelli/Fubini pair, the completion-representative theorem, the
  generating-algebra approximation lemma, the simple-function density theorem,
  the box-measure theorem, the metric continuity characterisations and the
  counting-measure dictionary.
- **Plan/closure note for Step 4 (not a pair defect).** Item 4 consumes the
  published `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`
  from `measure-preserving-systems-and-mixing-criteria` (order 288.0421), which
  is earlier than this page but is **not** one of the page's four declared
  `requires`; the plan-spec `requires` array was left untouched (splice-plan
  owns it). Step 4 or 5 should either accept the item-level dependency on an
  earlier published page or add the page edge.
- **Pre-splice plan mismatches belonging to other writers** (unchanged from the
  sibling report): `choice-strength-in-baire-urysohn-stone-and-tychonoff`
  (manifest 41 items vs 39 on the page) and
  `normal-moore-spaces-pmea-and-consistency-strength` (manifest 30 vs 26).

## Local suppliers added

None. All 9 items are scaffold-registered; no new item, page or pair was
created, and the batch-2 coverage record needed no new canonical row (the three
existing canonical rows — rectangle density, the kernel theorem's inline
separable and sigma-finite reduction, and the discontinuous example — describe
the authored content; the two derived examples B01 and B04 rest on the
harvested Teschl and Roe treatments already recorded for items 1 to 3).

## Open obligations

None for this pair. The only items carried forward are the routed findings
above, which belong to the owner or to other pairs' authors: the run-wide
forward-reference sweep, the two other pairs' pre-splice mismatches, and the
Step 4 decision on the earlier published generating-algebra page used by
item 4.
