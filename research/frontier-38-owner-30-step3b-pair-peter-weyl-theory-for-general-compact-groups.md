# Step 3b authoring record — pair `peter-weyl-theory-for-general-compact-groups`

- Run `frontier-38-owner-30`, stage `3b-author`, dispatch label
  `step3b-pair-peter-weyl-theory-for-general-compact-groups-f12834a84227ceb0`.
- Role: alpha-high (scaffold auditor and item author), batch 11 (group j).
- A page: `peter-weyl-theory-for-general-compact-groups` (order 510.073,
  17 items). B page: `peter-weyl-theory-for-general-compact-groups-examples`
  (order 510.074, 7 items). Scope decision `sufficient`
  (`research/frontier-38-owner-30-step3a-review-peter-weyl-theory-for-general-compact-groups.json`).
- Owned item IDs (dispatch order, dependency level in brackets):

  Level 0: `def-hilbert-direct-sum-of-unitary-representations` [0],
  `def-representative-function-on-a-compact-group` [0],
  `def-unitary-dual-of-a-compact-group` [0],
  `lem-compact-convolution-operators-commute-with-right-translations` [0],
  `lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations` [0],
  `lem-l1-action-of-a-unitary-representation` [0],
  `lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero` [0],
  `lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients` [0].

  Level 1: `def-normalized-irreducible-matrix-coefficient-basis` [1],
  `lem-finite-rank-spectral-pieces-of-compact-convolution` [1],
  `lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra` [1],
  `cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` [1],
  `lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct` [1].

  Level 2: `lem-compact-group-matrix-coefficients-separate-points` [2].

  Level 3: `thm-uniform-peter-weyl-density` [3].

  Level 4: `lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation` [4],
  `thm-l2-peter-weyl-orthonormal-basis` [4].

  Level 5: `cor-parseval-and-fourier-inversion-for-compact-groups` [5],
  `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` [5],
  `thm-regular-representation-peter-weyl-decomposition` [5],
  `ex-peter-weyl-for-a-profinite-group` [5],
  `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` [5].

  Level 6: `cor-each-vector-in-a-compact-representation-has-countable-isotypic-support` [6],
  `ex-peter-weyl-for-an-infinite-product-of-finite-groups` [6].

## Open obligations at entry

1. Author all 24 items (no `items/<id>.md` exists yet) and both `library/`
   pages; keep the scaffold statements' claims and hypotheses.
2. Verify the three batch-10 suppliers when their owner authors them, then
   reconcile the circle example's actual proof uses and clear the escalated
   decision if unresolved:
   - supplier `lem-unit-circle-is-a-compact-metrizable-topological-group`,
     consumer `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality`;
   - supplier `def-pontryagin-dual-and-compact-open-topology`, same consumer;
   - supplier `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`,
     same consumer.
3. Write `research/frontier-38-owner-30-batch-11.proof-contracts.json` and
   register the 24 items in the page files so the run's merged contract and
   coverage gates can pass.
4. Record Step 3 item decisions with examined dependency IDs and evidence;
   record `escalate` where a supplier or proof use cannot yet be verified.
5. Run `node tools/proof-layout.mjs items/<id>.md ...` once on all changed item
   paths at handoff.

## Per-item checkpoints

(Appended in dependency order as each item is audited, authored, checked and
checkpointed.)

### 1. `def-hilbert-direct-sum-of-unitary-representations` [level 0] — authored

- File `items/def-hilbert-direct-sum-of-unitary-representations.md`; Definition
  with verification of the pairing, completeness by the diagonal argument,
  strong continuity of the componentwise action and the subrepresentation form.
- Suppliers checked: `def-square-summable-family-on-an-arbitrary-index-set`,
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`,
  `lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`,
  `def-strongly-continuous-unitary-representation`,
  `def-orthogonality-and-orthogonal-complement`, `def-hilbert-space`,
  `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-axiom-of-choice`.
- Checks: rendercheck pass; proof-layout 0 defects (0 steps); precheck n/a for a
  definition.
- Open: contract entry owed; manifest statement matches the item.

### 2. `def-representative-function-on-a-compact-group` [level 0] — authored

- Definition of $R(K)$ with the unitarization clause proved by a basis
  expansion; no density claim.
- Checks: rendercheck pass; proof-layout 0 defects.
- Open: contract entry owed.

### 3. `def-unitary-dual-of-a-compact-group` [level 0] — authored

- Definition of $\widehat K$ as a set, using the published finite-dimensionality
  theorem; AC recorded for representatives and bases; no topology on the dual.
- Checks: rendercheck pass; proof-layout 0 defects.
- Open: contract entry owed.

### 4. `lem-compact-convolution-operators-commute-with-right-translations` [level 0] — authored, scaffold repaired

- **Scaffold repair (needs manifest refresh + scope decision refresh):** the
  scaffold statement's clause "every closed $C_\varphi$-invariant subspace is
  $\rho(K)$-invariant when $\varphi=\varphi^*$" is false: on $K=\mathbb T$ with
  $\varphi\equiv1$ the operator is the orthogonal projection onto constants and
  $M=\operatorname{span}\{1,\operatorname{Re}z\}$ is $C_\varphi$-invariant but
  not translation invariant. The item states the true and used claim instead:
  every eigenspace $\ker(C_\varphi-\lambda I)$, and in particular the kernel, is
  $\rho(K)$-invariant when $\varphi=\varphi^*$ (in fact for every $\varphi$,
  since only commutation is used).
- Proof steps 1.1, 1.2, 2.1, 3.1, 4.1 (precheck canonical layering), single-line
  steps with trailing blue tags, QED on the final step.
- Checks: precheck PASS, rendercheck pass, proof-layout 5 steps 0 defects.
- Open: contract entry owed; update the batch-11 manifest statement to match.

## Discharge of entry obligations (final state, 2026-10-03)

All entry obligations 1–5 are discharged for this pair; the checkpoints for
items 1–4 above are as-written at those moments and their "contract entry owed"
notes are closed by the completed batch-11 contract file.

- **Items and pages.** All 24 assigned items are authored at
  `items/<id>.md`, registered in
  `research/frontier-38-owner-30-batch-11.pages.json` (17 on A510.073, 7 on
  B510.074) and on both `library/representation-theory/` pages. No sibling row
  was edited.
- **Contracts.** `research/frontier-38-owner-30-batch-11.proof-contracts.json`
  carries 250 citations, every quote verbatim in its cited source section.
  `proof-contract --strict` → 0 errors, 0 warnings, 24/24 items;
  `citation-fidelity --fail-on-missing-quote` → no missing quote and no
  widening candidate; `boundary-audit --fail-on-contradicted
  --fail-on-template` → 192 rows, 22 n/a, none contradicted or templated;
  `finite-smoke` → 1 live check (`binary-shift-disjoint-cylinder-independence`
  on the finitely-many-coordinates assertion of
  `ex-peter-weyl-for-an-infinite-product-of-finite-groups`);
  `risk-report` → 0 errors, 24 items routed.
- **Contract-generator repair.** The generator used while assembling this file
  sliced a source section with a relative index against an absolute offset, so
  112 of the recorded quotes were silently truncated prefixes (the
  `thm-lebesgue-measure-is-a-complete-measure` quote ended before
  "$\lambda_n(\mathbb R^n)=+\infty$"). The extraction was fixed and all quotes
  regenerated from the full sections; all remain verbatim and the strict and
  fidelity gates are clean.
- **Decisions.** 24/24 items recorded `accept`, confidence 1, with the examined
  dependency IDs (frontmatter deps of each item) and concrete check evidence;
  0 escalated. `step3-decisions check --phase final` no longer lists any of the
  24 IDs in its work set. The circle example's in-run suppliers are reconciled
  (see below), so its earlier planned escalation is discharged, not deferred.
- **Cross-batch input.** All four rows of
  `research/frontier-38-owner-30-batch-11.cross-batch-dependencies.json` now
  record the post-authoring reconciliation of the three batch-10 suppliers.
  `frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` is
  currently blocked by an invalid YAML escape in a **sibling batch's** item
  (see published concerns); the batch-11 input file itself is valid JSON and
  stands for the serial reconciler.

### 5. `lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations` [level 0] — authored, scaffold repaired

- Scaffold repair: the scaffold's `conj(c^pi_{v,w}) = c^pi_{w,v}` is false as
  written; the item instead defines the conjugate representation $\sigma$ and
  proves `conj(c^pi_{v,w}) = c^sigma_{Jv,Jw}`, together with the direct-sum
  and tensor-product structures, their inner products, the dimension count and
  the trivial representation as tensor unit.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors; dependency_level 0 re-verified.

### 6. `lem-l1-action-of-a-unitary-representation` [level 0] — authored, scaffold repaired

- Scaffold repair: the scaffold's right covariance `pi(f)pi(k) = pi(rho(k)f)`
  is untrue; corrected to `pi(rho(k)^{-1}f)`. The item proves the norm bound
  for the L¹ action, its continuity properties and the normalized-cutoff
  nonvanishing on nonzero vectors.
- Suppliers checked: `thm-bounded-linear-maps-commute-with-bochner-integration`,
  `cor-measurable-functions-admit-dominated-simple-approximations`,
  `lem-complex-haar-l1-and-l2-are-complete-and-cc-dense`,
  `def-strongly-measurable-banach-valued-function`,
  `def-compactly-supported-convolution-on-a-group`.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors.

### 7. `lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero` [level 0] — authored, B-page dependency repaired

- Proof route: approximate identity `(e_n)` with `supp e_n ⊆ (−1/n,1/n)`,
  step 1.1 representative formula for `g*h` via Tonelli,
  steps 2.1–3.1 `g*e_n` constant a.e. and an a.e.-convergent subsequence
  forcing `g` to equal a constant a.e., step 4.1 the `|v|²` consequence.
- Repair: the load-bearing B-page supplier
  `ex-lebesgue-measure-as-haar-measure-on-rn` was replaced by A-page suppliers
  `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
  `thm-lebesgue-measure-is-a-complete-measure` (which states
  `λ_n(B)=vol(B)` for half-open boxes and `λ_n(ℝⁿ)=+∞`),
  `def-half-open-box` (the unit cube `(0,1]` convention),
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
  `thm-lebesgue-measure-under-dilations-and-reflections` and
  `thm-lebesgue-measure-is-a-radon-measure-on-rn`; the `b-leaf-content`
  depcheck error is cleared. AC disposition names both the approximate-identity
  net and the ACC-assuming measure suppliers.
- Checks: precheck PASS; rendercheck OK; proof-layout 4 steps 0 defects;
  proof-contract 0 errors; every quote verbatim.

### 8. `lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients` [level 0] — authored

- Factorization through a finite quotient `K/N`, `N` open normal, from the
  open normal kernel neighbourhood basis of a profinite group.
- Suppliers checked: `def-profinite-group-by-inverse-limit`,
  `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis`,
  `def-matrix-coefficient-of-a-unitary-representation`.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors.

### 9. `def-normalized-irreducible-matrix-coefficient-basis` [level 1] — authored

- Definition of the normalized family `(u^pi_ij)` with AC-recorded choices of
  representatives and orthonormal bases, the Schur-orthogonality normalization
  computation and invariance under a change of basis.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors.

### 10. `lem-finite-rank-spectral-pieces-of-compact-convolution` [level 1] — authored

- Finite-rank spectral pieces `E_λ` of a self-adjoint compact convolution
  operator, with the eigenvalue decomposition and continuity of the pieces.
- Suppliers checked: `lem-compact-convolution-operators-commute-with-right-translations`,
  `lem-compact-convolution-operators-are-hilbert-schmidt`, spectral-theorem and
  Hilbert-space suppliers.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors.

### 11. `lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra` [level 1] — authored

- `R(K)` proved unital, closed under pointwise addition, multiplication,
  complex conjugation and left/right translation, and to contain all matrix
  coefficients (steps 1.1–1.4, 2.1).
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors.

### 12. `cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` [level 1] — authored, B-page dependency repaired

- Counterexample: a nonzero irreducible subrepresentation of the regular
  representation of `R` would be one-dimensional (Schur), spanned by a unit
  vector with `|v(x−t)|=|v(x)|` a.e., hence zero by item 7 — contradiction; so
  no Hilbert direct-sum decomposition exists.
- Repair: same replacement of the load-bearing B-page
  `ex-lebesgue-measure-as-haar-measure-on-rn` by the A-page Lebesgue/box
  suppliers as in item 7 (`def-lebesgue-…`, `thm-…-complete-measure`,
  `def-half-open-box`, `thm-…-translation-invariant`, `thm-…-radon`), with
  `λ₁((0,1])=1` supporting `L²(ℝ,λ₁)≠{0}`; depcheck `b-leaf-content` cleared.
- Checks: precheck PASS; rendercheck OK; proof-layout 2 steps 0 defects;
  proof-contract 0 errors; risk-report routes it with 0 errors.

### 13. `lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct` [level 1] — authored

- Products of finite discrete groups are profinite inverse limits over finite
  `F ⊆ I`, and every continuous finite-dimensional unitary representation
  factors through some `p_F`.
- Checks: precheck PASS; rendercheck OK; proof-layout 0 defects;
  proof-contract 0 errors.

### 14. `lem-compact-group-matrix-coefficients-separate-points` [level 2] — authored

- Distinct points are separated by a matrix coefficient of a finite-dimensional
  continuous unitary representation, via the convolution Hilbert–Schmidt
  spectral argument and the positive-definite-function construction.
- Suppliers checked: `def-hilbert-space-adjoint`,
  `lem-compact-convolution-operators-are-hilbert-schmidt`,
  `lem-the-l1-involution-is-isometric-and-reverses-convolution`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-integrals-are-invariant-under-measure-preserving-maps`,
  `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`.
- Checks: precheck PASS; rendercheck OK; proof-layout 3 steps 0 defects;
  proof-contract 0 errors.

### 15. `thm-uniform-peter-weyl-density` [level 3] — authored

- `R(K)` uniformly dense in `C(K,ℂ)`, from the separation lemma, the
  self-adjoint unital algebra structure and complex Stone–Weierstrass.
- Checks: precheck PASS; rendercheck OK; proof-layout 2 steps 0 defects;
  proof-contract 0 errors; dependency_level 3 verified on the manifest graph.

### 16. `lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation` [level 4] — authored

- A nonzero strongly continuous unitary representation of a compact Hausdorff
  group contains a nonzero finite-dimensional closed invariant subspace; proof
  via the L¹ action, compactness of the convolution operator and its spectral
  pieces.
- Checks: precheck PASS; rendercheck OK; proof-layout 2 steps 0 defects;
  proof-contract 0 errors.

### 17. `thm-l2-peter-weyl-orthonormal-basis` [level 4] — authored

- The normalized matrix-coefficient family is an orthonormal basis of
  `L²(K,μ;ℂ)`: orthonormality by Schur orthogonality, completeness via uniform
  density and the invariant-complement lemma.
- Checks: precheck PASS; rendercheck OK; proof-layout 3 steps 0 defects;
  proof-contract 0 errors; dependency_level 4 verified.

### 18. `cor-parseval-and-fourier-inversion-for-compact-groups` [level 5] — authored

- Parseval identity and Fourier inversion in `L²`, with the operator-valued
  Fourier coefficients `π(f)` of the L¹ action and the normalized basis.
- Checks: precheck PASS; rendercheck OK; proof-layout 3 steps 0 defects;
  proof-contract 0 errors.

### 19. `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` [level 5] — authored

- Isotypic decomposition `H = ⊕̂_σ H_(σ)` with the projection formula, via
  invariant complements and Schur's lemma; AC declared and propagated.
- Checks: precheck PASS; rendercheck OK; proof-layout 3 steps 0 defects;
  proof-contract 0 errors.

### 20. `thm-regular-representation-peter-weyl-decomposition` [level 5] — authored

- `L²(K)` decomposes into the isotypic blocks `M_π` of the regular
  representation, identified with the coefficient spaces.
- Checks: precheck PASS; rendercheck OK; proof-layout 3 steps 0 defects;
  proof-contract 0 errors.

### 21. `ex-peter-weyl-for-a-profinite-group` [level 5] — authored

- Continuous finite-dimensional representations factor through finite
  quotients; the Peter–Weyl basis is the union of the finite-level coefficient
  families; the non-Lie nature of infinite profinite groups is stressed.
- Checks: precheck PASS; rendercheck OK; proof-layout 3 steps 0 defects;
  proof-contract 0 errors.

### 22. `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` [level 5] — authored, suppliers reconciled

- The circle model: every irreducible is one-dimensional, the normalized
  coefficients are the integer characters `z^n`, so `B = {z^n : n ∈ ℤ}` and the
  decomposition is the classical Fourier series; Pontryagin duality is
  invoked, not reproved.
- In-run supplier reconciliation (previously planned as an escalation):
  - `lem-unit-circle-is-a-compact-metrizable-topological-group` — authored,
    decision closed; its statement gives exactly "compact metrizable topological
    abelian group" used in step 1.1.
  - `def-pontryagin-dual-and-compact-open-topology` — authored, decision
    closed; characters and the compact-open dual, used in steps 1.1 and 2.1.
  - `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`
    — authored, decision closed; clause (1) (compact abelian ⇒ discrete dual)
    used in step 2.1.
  - No text mismatch with the recorded uses; decision recorded `accept`, not
    `escalate`.
- Checks: precheck PASS; rendercheck OK; proof-layout 2 steps 0 defects;
  proof-contract 0 errors.

### 23. `cor-each-vector-in-a-compact-representation-has-countable-isotypic-support` [level 6] — authored

- Each vector has nonzero isotypic component in at most countably many classes,
  from the discrete decomposition and finite-dimensionality of the isotypic
  pieces.
- Checks: precheck PASS; rendercheck OK; proof-layout 2 steps 0 defects;
  proof-contract 0 errors.

### 24. `ex-peter-weyl-for-an-infinite-product-of-finite-groups` [level 6] — authored

- `R(K)` is exactly the algebra of continuous functions depending on finitely
  many coordinates, dense by Stone–Weierstrass; the normalized coefficient
  family is an orthonormal basis and the regular representation decomposes
  accordingly; no countability of `I` or of the dual is assumed.
- Checks: precheck PASS; rendercheck OK; proof-layout 2 steps 0 defects;
  proof-contract 0 errors; the finite-smoke cylinder check is live on the
  finitely-many-coordinates assertion.

## Published concerns and plan observations (for Step 4 / the reconciler)

1. **Planned B-leaf consumption (repaired locally, confidence high).**
   `ex-lebesgue-measure-as-haar-measure-on-rn` lives only on a B/examples page
   (`lebesgue-measure-on-euclidean-space`), yet the scaffold made it a
   load-bearing dependency of two batch-11 B-page items (items 7 and 12). Both
   were re-authored on A-page suppliers (list in "Added suppliers" below) and
   all `depcheck` `b-leaf-content` errors for this pair are cleared. The plan
   row should record the replaced dependency at splice time.
2. **Sibling supplier flagged by `depcheck` (outside this pair, confidence
   confirmed finding; impact none on this pair).**
   `items/thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals.md`
   has a `b-leaf-content` error: it depends on `ex-discrete-and-indiscrete-topologies`,
   which lives only on `topological-spaces-and-continuity-examples`. The circle
   example consumes only clause (1) of the theorem (compact abelian ⇒ discrete
   dual), so this pair's use is unaffected; the repair belongs to the batch-10
   pair owner / serial reconciler.
3. **Sibling malformed frontmatter blocks the shared ledger refresh (outside
   this pair, confidence confirmed, reproduced).**
   `items/lem-cz-bad-part-is-integrable-away-from-expanded-cubes.md` (batch 5,
   page `calderon-zygmund-decomposition-and-singular-integrals`) has a
   double-quoted YAML `locator` containing `\sqrt`; the repository YAML parser
   rejects the escape, so `node tools/frontier-dependency-ledger.mjs refresh
   --run frontier-38-owner-30` exits 1 before writing.
   Remedy: single-quote the locator (or escape the backslashes). The batch-11
   input file is valid and contains the reconciliation rows; a refresh is owed
   once the batch-5 text is repaired.
4. **A-page low-yield advisory is expected (confidence high).**
   `coverage-checklist` warns `11/28` harvested rows scaffolded on A510.073;
   every decline has a named destination recorded in
   `research/frontier-38-owner-30-batch-11.notes.md` (the coefficient algebra,
   density, L² basis and decomposition are commissioned here; the
   character/duality developments are deferred). Not a defect.
5. **Scaffold statement repairs (already applied to item and manifest,
   confidence high).**
   `lem-compact-convolution-operators-commute-with-right-translations` (false
   subspace-invariance clause → eigenspace/kernel invariance),
   `lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations`
   (false `conj(c^π_{v,w}) = c^π_{w,v}` → conjugate representation `σ`) and
   `lem-l1-action-of-a-unitary-representation` (false right covariance →
   `π(ρ(k)^{-1}f)`). All three are recorded in the batch-11 manifest and the
   scope decision was refreshed after them.

## Added suppliers and dependency changes

- Replacing the B-page example in items 7 and 12 (all published A-page items):
  `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
  `thm-lebesgue-measure-is-a-complete-measure`, `def-half-open-box`,
  `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
  `thm-lebesgue-measure-under-dilations-and-reflections`,
  `thm-lebesgue-measure-is-a-radon-measure-on-rn`.
- The `deps` rows of those two items in
  `research/frontier-38-owner-30-batch-11.pages.json` were synchronised with
  the authored frontmatter (removing the B-page supplier, adding the A-page
  ones); `dependency_level` stays 0 and 1 respectively and
  `item-dependency-levels check --run frontier-38-owner-30` reports 816 items
  across 60 pages with no error (maximum level 16).
- `research/frontier-38-owner-30-batch-11.cross-batch-dependencies.json`:
  all four rows were updated with the post-authoring reconciliation — the page
  edge row plus the three item rows for the batch-10 suppliers (no new rows
  needed).
- No published item, sibling row, plan or engine state was edited.

## Checks actually run (exact commands and observed results)

- `node tools/tsx-run.mjs tools/precheck.mts items/<all 24 owned items>.md` —
  `24 checked, 0 failing — all clean` (run in two explicit-path batches).
- `node tools/rendercheck.mjs items/<all 24 owned items>.md` —
  `OK — 24 file(s): no wikilink inside math, no nested or unbalanced
  delimiters, no multiline display block, every math span parses under the real
  KaTeX, and every frontmatter block parses under the renderer's YAML parser.`
- Batched handoff formatting check (one command, all changed paths):
  `PRESTIGE_APP_DIR=/tmp/app node tools/proof-layout.mjs items/def-hilbert-direct-sum-of-unitary-representations.md
  items/def-representative-function-on-a-compact-group.md
  items/def-unitary-dual-of-a-compact-group.md
  items/lem-compact-convolution-operators-commute-with-right-translations.md
  items/lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations.md
  items/lem-l1-action-of-a-unitary-representation.md
  items/lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero.md
  items/lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients.md
  items/def-normalized-irreducible-matrix-coefficient-basis.md
  items/lem-finite-rank-spectral-pieces-of-compact-convolution.md
  items/lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra.md
  items/cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations.md
  items/lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct.md
  items/lem-compact-group-matrix-coefficients-separate-points.md
  items/thm-uniform-peter-weyl-density.md
  items/lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation.md
  items/thm-l2-peter-weyl-orthonormal-basis.md
  items/cor-parseval-and-fourier-inversion-for-compact-groups.md
  items/thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely.md
  items/thm-regular-representation-peter-weyl-decomposition.md
  items/ex-peter-weyl-for-a-profinite-group.md
  items/ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality.md
  items/cor-each-vector-in-a-compact-representation-has-countable-isotypic-support.md
  items/ex-peter-weyl-for-an-infinite-product-of-finite-groups.md`
  → `proof-layout: 24 items, 61 steps, 0 defects`.
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-11.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 24/24 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-38-owner-30-batch-11.proof-contracts.json --fail-on-missing-quote`
  → `QUOTE NOT FOUND — none`; no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-38-owner-30-batch-11.proof-contracts.json --fail-on-contradicted --fail-on-template`
  → `192 rows ... 22 marked not_applicable`; no template reuse, no contradicted
  disposition.
- `node tools/finite-smoke.mjs research/frontier-38-owner-30-batch-11.proof-contracts.json`
  → `PASS [ex-peter-weyl-for-an-infinite-product-of-finite-groups] ...;
  0 error(s), 1 check(s) over 1/24 item(s) carrying obligations`.
- `node tools/gate-liveness.mjs --run frontier-38-owner-30 --contracts research/frontier-38-owner-30-batch-11.proof-contracts.json --checklists research/frontier-38-owner-30-batch-11.coverage.json --min-checks 1`
  → finite-smoke 1 live check, proof-contract 24 items, coverage-checklist 37
  harvested results, precheck 18726 items.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-11.pages.json`
  → `24 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  → `816 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → `816 item(s) checked across 60 page(s); maximum level 16`.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-11.coverage.json --require-destination`
  → `2 page(s), 37 harvested result(s), 0 error(s), 1 warning(s)` (the
  documented low-yield advisory).
- `node tools/validate-plan.mjs research/plan-spec.json` → OK (declared page
  order acyclic and consistent; the 289 item-list-less planned pages include
  the pre-splice shells of this pair, as expected before Step 4).
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-11.coverage.json`
  → `6/6 source(s) fetch-verified`, `6/6 source(s) resolved`.
- `node tools/depcheck.mjs` → run-wide FAIL from pre-existing findings; **no
  finding names any of the 24 owned items or either owned page** (checked by
  grepping the error lines for all 24 IDs and for `peter-weyl`).
- `node tools/merge-proof-contracts.mjs --level frontier-38-owner-30 research/frontier-38-owner-30-proof-contracts.json research/frontier-38-owner-30-batch-*.proof-contracts.json`
  and the run-level contract suites → batch 11 entries contribute no error;
  the run-level file also carries other batches' in-progress entries.

## Open obligations at handoff

- None for this pair: all 24 items authored, contracted, checked and recorded
  `accept` (confidence 1); both pages written; manifest, coverage and
  cross-batch-input rows updated without touching siblings.
- Kept flagged for Step 4 / serial reconciler (outside this pair's authority):
  the batch-10 supplier's `b-leaf-content` finding, and the batch-5 malformed
  YAML escape that blocks `frontier-dependency-ledger.mjs refresh`.
- Pre-splice plan note: `research/plan-spec.json` still has empty item shells
  for A510.073/B510.074; the authored 17+7 inventory and the actual dependency
  lists above are the splice inputs.
