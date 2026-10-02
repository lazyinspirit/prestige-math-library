# frontier-37-owner-30 — batch 15 scaffold notes

## Scope and authority

- Owned pair: `complete-reducibility-for-compact-groups` (order 510.071, 14 A items) and `complete-reducibility-for-compact-groups-examples` (order 510.072, four B items). All 18 manifest items have explicit `deps`, dependency levels 0–5, proof strategies or definition strategies, and current Step-1 `ready` records. These are construction records; Step 3 supplies independent mathematical review.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task and brief, the complete RG-21 design section and representation conventions in `research/plan-representation-theory-groups-track.md`, `research/plan-spec.json`, and the current batch evidence. `research/frontier-37-owner-30-owner-authoring-direction.md` does not exist.
- **Plan/design conflict:** RG-21's `Requires` paragraph lists RG-18–RG-20 and the two compact-operator A pages. The current plan also requires `banach-valued-integration-and-the-radon-nikodym-property`. The manifest uses all six plan prerequisites. Its Bochner integral suppliers are mathematically needed for the operator-valued and vector-valued averages. The plan's inventories for this pair remain empty until splice; the assigned manifest carries the 18 designs. The design's broad source locator for Kowalski starts in §5.3, but the relevant finite unitarization argument is Theorem 5.2.11, printed pp.221–222. The design cites Bekka–de la Harpe–Valette Appendix A §A.5 as pp.306–307, while the fetched edition prints it at pp.323–324. Coverage uses the inspected locators.
- No selected pair, shared plan, published page, engine state, or verdict was edited. The B page requires only its A page. There is no cross-batch consumer dependency in this pair: `research/frontier-37-owner-30-batch-15.cross-batch-dependencies.json` is `[]`. Refreshed the unified ledger with `frontier-dependency-ledger.mjs` after the dependency edits.

## Proof and dependency audit

- The finite-dimensional route averages a positive Hermitian form using normalized, bi-invariant Haar probability, obtains invariant orthogonal complements, and inducts on dimension. The A-page definition explicitly fixes an inner product linear in the first variable. The published normalized Haar result supplies inversion and right invariance, and its full-support lemma proves strict positivity. AC is explicit where Haar existence is consumed.
- The bounded-operator average is defined as a **weak operator** integral through scalar integration and Hilbert Riesz representation. Strong continuity does not imply operator-norm continuity for a general bounded operator; no such claim appears. The average is a contractive projection onto `Hom_K(H,J)`. Its norm is one exactly when that intertwiner space is nonzero, otherwise zero.
- The Hilbert–Schmidt convolution claim is restricted to convolution on regular `L²(K)`. The kernel `f(xy⁻¹)` has product `L²` norm `||f||₂`; the published kernel theorem and Hilbert–Schmidt compactness theorem apply. This is not used to assert compactness of integrated convolution on an arbitrary irreducible representation. Instead, finite-rank conjugation is operator-norm continuous; the positive rank-one orbit has a compact norm image and a Bochner integral that is the norm limit of finite sums of compact operators. Full-support Haar makes this compact intertwiner nonzero. Published unitary Schur then makes it a nonzero scalar identity, and the compact-unit-ball criterion makes the irreducible space finite dimensional. The finite-rank step declares AC because the published Hilbert Riesz supplier consumes Countable Choice for the coordinate functionals.
- Schur orthogonality averages a rank-one map and takes its trace, giving the `1/d` coefficient normalization with the first-variable-linear convention. The isotypic operator uses `dσ ∫ overline{χσ(k)} π(k) dμ(k)`. Intertwiners constructed directly from its integral show every image vector lies in a finite sum of σ-copies; the operator fixes their closed span and is self-adjoint. Therefore it projects onto that isotypic subspace and distinct ranges are orthogonal. No completeness, Peter–Weyl density, or global sum-to-identity claim occurs before RG-22.
- The circle example computes the average of an explicit noninvariant positive form. Its numerical matrix was constructed locally, so its statement is honestly marked `ai-generated` with `generation.role: example`, a provenance difference from the design's `literature-derived` example row; the general method is supported by the cited sources. The finite-group example derives mass `1/|F|` from normalized Haar invariance and finite additivity without depending on a published B-page example. For `∏ C₂`, the B-page proof gives a direct choice-free binary-tree compactness argument and proves that a sufficiently small tail subgroup lies in the kernel of every continuous finite-dimensional representation. This avoids an out-of-closure published lemma and does not invoke Tychonoff or weaken the no-faithful-representation claim. The real-line example uses disjoint translates of a positive-mass interval to prove that no nonzero Haar measure has finite total mass.
- Examined the actual published statements and relevant proofs for normalized Haar/full support, strongly continuous unitary representations and unitary Schur, Hilbert Riesz and orthogonal complements, Bochner integrability and commuting bounded maps, Hilbert–Schmidt kernels and compactness, compact-operator norm limits, and finite-dimensional norm equivalence. Their hypotheses, directions, choice strengths and conventions support the listed uses. All direct suppliers are published or earlier in this pair. No actual published prerequisite defect was found. No Recorded result is used as a replacement proof, and the pair has no Foundations or deferred-set-theory dependency path.

## Complete source reading and harvest

Four full source bodies were fetched and inspected at the exact locators in `research/frontier-37-owner-30-batch-15.coverage.json`; `source-fetch-check --stamp` verified all four bodies. The 38 harvested rows are 17 included, five inline, 12 deferred to valid planned destinations, and four out of scope with specific reasons. The coverage file records each disposition, exact supported item and verified fetch stamp.

| Treatment and inspected argument | Use and qualification |
|---|---|
| [Kowalski, *An Introduction to the Representation Theory of Groups*](https://people.math.ethz.ch/~kowalski/representation-theory.pdf), complete 338-page PDF: Theorem 5.2.11 pp.221–222; §5.4 pp.230–235; §5.5 pp.237–239; product examples pp.246–250 | Unitarization, regular-representation convolution, orthogonality, character projection and infinite-product example. His finite-dimensionality corollary uses Peter–Weyl; the local rank-one proof avoids that forward step. |
| [Serganova, *Representation Theory*](https://math.berkeley.edu/~serganov/math252/Bookrep.pdf), complete 159-page lecture notes: Chapter III §1.6 pp.55–57 and §2.1 pp.57–60 | Independent rank-one, orthogonal-complement and Schur-orthogonality treatment. Proposition 1.23's heading is broader than its irreducible-case proof; only that case supports the local finite-dimensionality route. Exercise 2.10 prints a `1/d` isotypic factor under normalized Haar; that normalization is wrong, so it is not used to support the local `d` projection formula. |
| [Vogan, *Review of Harmonic Analysis on Compact Groups*](https://math.mit.edu/~dav/compactrev.ps), complete 12-page author-hosted PostScript: Theorem 2.13(4), Corollary 2.16 and surrounding formulas | Independent coefficient and isotypic-projection normalization. Its inverse/coefficient convention is translated to the manifest's explicit convention. The source was fetched and converted locally for full-text inspection. The fetch stamp records a binary PostScript body; the stricter source-backing checker accepts PDF/HTML/text stamps, so the independently fetched Kowalski theorem also backs the projection-definition row. |
| [Bekka–de la Harpe–Valette, *Kazhdan's Property (T)*](https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf), complete 523-page monograph: Appendix A §A.5, printed pp.323–324 | Proposition A.5.1 proves finite Haar measure iff compact. Theorem A.5.2 states Peter–Weyl without an argument, so it is deferred and is not used as proof of RG-21. |

No retrieval failure, retry, source drop, or source-resolution escalation occurred. The initially strict source-backing check rejected the projection definition because its sole included coverage row was Vogan's binary PostScript stamp; a separately read Kowalski Theorem 5.5.1(2) row now independently backs that same formula. The original Vogan source and its disposition remain in the harvest.

## Checks and remaining run-level findings

| Check | Actual result |
|---|---|
| Batch-15 `coverage-checklist --require-destination` | Exit 0; one A page, 38 harvested rows, zero errors or warnings. |
| `source-fetch-check --stamp`, then unstamped check | Exit 0; four of four full source bodies fetch-verified and resolved. |
| Batch-15 URL sweep and strict source backing | Exit 0; four of four source URLs live, zero suspect or dead; 12 included item results backed after the independent Kowalski row. |
| Whole-run `manifest-deps.mjs` and `content-policy.mjs --manifest-only` | Exit 0 at the check snapshot: 551 items, zero dependency errors; 551 scoped items, zero policy errors or warnings. |
| Batch-15 level recomputation and Step-1 records | All 18 labels equal the recursively computed levels; maximum five. Final Step-1 check found zero unresolved or stale batch-15 records. |
| Required whole-run `item-dependency-levels.mjs check --run frontier-37-owner-30` | Exit 1 at the check snapshot. Fourteen other pages still had empty scaffold inventories; three examples in the separate curve-divisor batch had mismatched levels (`ex-divisor-rational-function-projective-line`, `ex-principal-divisor-degree-zero-p1`, `ex-effective-divisor-thickened-points-curve`). No batch-15 label error or cycle was reported. |
| `validate-plan.mjs research/plan-spec.json` | Exit 0; the canonical plan's declared page order and existing item lists are consistent. A temporary whole-run overlay of current manifests reported 18 errors, all outside batch 15, and no error for this pair. The temporary overlay was kept only under `/tmp`. |
| `extcheck.mjs` and `fwdcheck.mjs` | Both exit 0 for the current published/planned corpus. `extcheck` lists existing unrelated published Recorded dependencies but reports the recorded/not-proved policy satisfied; `fwdcheck` reports the existing declared forward references valid. |
| `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | Exit 0 after the final batch dependency edits. |

The other batches' empty inventories, level labels, and temporary-overlay plan errors are outside this worker's edit scope. The batch-15 items are ready for Step-3 independent proof review; the whole-run gates require the other owners' work and owner/operator reconciliation.

## Step 3b — authoring checkpoints (alpha-high)

Order fixed by scaffold `dependency_level`, page order and item ID; each item was
audited for hypotheses, suppliers and proof route, then authored and checked with
`precheck` + `rendercheck` before advancing. Sources below are the batch-15
coverage rows already verified in the Step-3a review (Kowalski full text,
Serganova full text, Vogan note, BHV Appendix A).

- **Level 0 (8 items) — authored.**
  - `def-averaged-hermitian-form-for-a-compact-group` (A): normalized Haar
    probability, sesquilinear averaging; AC only through Haar; positivity and
    invariance deferred to the unitarization lemma. precheck n/a, rendercheck OK.
  - `def-haar-averaging-operator-on-hom-spaces` (A): weak operator integral
    `⟨A(T)v,w⟩=∫⟨σ(k)Tπ(k)^{-1}v,w⟩dμ`; Riesz representation (Countable Choice
    from AC); explicitly no norm continuity of arbitrary orbits;
    `justified_by` the projection lemma. precheck n/a, rendercheck OK.
  - `lem-a-compact-scalar-identity-forces-finite-dimension` (A): choice free;
    `cI` compact implies `I=(cI)(c^{-1}I)` compact, then compact unit ball.
    precheck PASS.
  - `lem-compact-convolution-operators-are-hilbert-schmidt` (A): convolution on
    `L²(K)` only, kernel `f(xy^{-1})`, `‖C_f‖_HS=‖f‖₂`; no integrated
    convolution on an arbitrary irrep. precheck PASS.
  - `lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous` (A):
    norm continuity of `g↦π(g)Tπ(g)^{-1}` for finite-rank `T` via coordinate
    functionals (AC→Countable Choice via Riesz). precheck PASS.
  - `lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements`
    (A): `M⊥` closed and invariant; choice free. precheck PASS.
  - `cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group`
    (B): on ℝ every nonzero left Haar measure has infinite total mass; no
    invariant probability. **Local repair**: the drafted "Statement refuted"
    paragraph had the conclusion inverted (it announced finite total mass and an
    available averaging); rewritten to the manifest claim. BHV Prop. A.5.1
    inspected for the compact-case converse. precheck PASS after repair.
  - `ex-compact-group-with-no-faithful-finite-dimensional-representation` (B):
    `K=∏_{n∈ℕ}C₂`, product topology; compactness proved by a definable bad-
    cylinder recursion on `2^{<ℕ}` (`thm-recursion`; finite subsets of ℕ are
    bounded, `lem-subset-of-countable`), avoiding Tychonoff and choice;
    Hausdorff and topological-group axioms checked coordinatewise; a continuous
    f.d. representation is trivial on some initial-segment cylinder `U_{k,0}`
    (an element of order two off the identity would give an eigenvalue −1
    vector, hence `‖ρ(g)−I‖≥2>1`), so its kernel contains a nonidentity element.
    precheck PASS, rendercheck OK, depcheck clean for this item.
  - Open gaps at this level: none. No in-run supplier is pending for any level-0
    item; all suppliers are published.

- **Level 1 — `lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner` (A) — authored.**
  Route: rank-one `R_ξ` bounded/finite-rank/positive/self-adjoint; `φ(k)=π(k)R_ξπ(k)^{-1}`
  norm-continuous by the finite-rank conjugation lemma, image compact hence totally
  bounded; nets + Borel partition give simple functions `t_n → φ` uniformly in norm;
  Bochner integrable; `Q_ξ=∫φ` self-adjoint positive, compact as norm limit of finite
  sums of compact operators `Σ_j μ(A_j) φ(k_j)`; nonzero via `⟨Q_ξξ,ξ⟩=∫|⟨π(k)^{-1}ξ,ξ⟩|²`
  and full-support Haar on a neighbourhood of `e`; commutes with `π(K)` by right
  translation invariance. AC entry points listed in the final step: Haar, countable
  selections (nets), Countable Choice in the norm-limit compactness theorem.
  **Layer renumbering applied to canonical form** (1.1; 2.1; 3.1; 4.1–4.2; 5.1–5.3; 6.1);
  precheck PASS, rendercheck OK, depcheck clean. No open gaps; all suppliers published.

- **Level 1 — `lem-averaging-makes-a-finite-dimensional-representation-unitary` (A) — authored.**
  Route: continuity/positivity of the integrand at `e`; invariance by right-translation
  measure preservation (`T_g(k)=kg`, `T_g^{-1}E=Eg^{-1}`, right invariance) + integral
  invariance theorem; positive definiteness from `f_{v,v}(e)=h0(v,v)>0`, open set
  `U=f^{-1}((ε,∞))` with `ε=h0(v,v)/2`, monotonicity of the nonnegative integral and
  `μ(U)>0`; conclusion: `ρ(g)` invertible linear isometry of `(V,h)` hence unitary.
  Canonical layering 1.1; 2.1; 2.2; 3.1 (relabeled to canonical form). precheck PASS,
  rendercheck OK, depcheck clean. Suppliers: definition item, normalized Haar +
  full-support lemma, invariance theorem, nonnegative-integral rules, unitary-operator
  definition, continuity characterisation. No open gaps.

- **Level 1 — `lem-haar-averaging-projects-onto-the-intertwiner-space` (A) — authored.**
  Route: `σ(h)A(T)=A(T)π(h)` by substituting `k=h^{-1}k'` in the weak integral
  (left invariance); `A(T)=T` for constant integrand when `T` intertwines; hence
  `A²=A` and `range(A)=Hom_K(H,J)`; contraction `‖A‖≤1` from the definition;
  `‖A‖=1` iff `Hom_K≠0` (via `‖S‖=‖A(S)‖≤‖A‖‖S‖`), `‖A‖=0` otherwise.
  Layering 1.1–1.3; 2.1; 3.1. precheck PASS (first run), rendercheck OK, depcheck
  clean. All suppliers published or earlier in pair; no gaps.

- **Level 2 — `thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional` (A) — authored.**
  Route: choose `ξ≠0`; rank-one lemma gives `Q_ξ` nonzero compact self-adjoint intertwiner;
  unitary Schur (published, AC) gives `Q_ξ=cI`, `c≠0`; compact-scalar lemma ⇒ finite
  dimensional. Layering 1.1; 2.1; 3.1. precheck PASS (after adopting canonical relabel),
  rendercheck OK, depcheck clean. No gaps.
- **Level 2 — `thm-finite-dimensional-compact-group-representations-are-completely-reducible` (A) — authored.**
  Route: strong induction on `n=dim V`; base `n=0` empty sum; setup step carries the IH;
  unitarize (explicit coordinate `h0` via a finite basis), prove `(V,h)` is a Hilbert space
  (finite-dim ⇒ Banach) and strong continuity (operator norm inequality + norm equivalence
  on `End V`); split irreducible / not; non-irreducible case: `M` closed (finite-dim subspace),
  complement lemma gives closed invariant `M^⊥`, orthogonal decomposition `V=M⊕M^⊥`,
  `dim M, dim M^⊥ < n`; apply IH to the restrictions, concatenate. Strategy `induction`
  with tags base/ih/discharge-induction; canonical layering 1.1–1.3; 2.1–2.3; 3.1; 4.1; 5.1.
  precheck PASS, rendercheck OK, depcheck clean. Verified suppliers: `thm-strong-induction`,
  `thm-dimension-of-a-linear-subspace`, `cor-dimension-of-a-direct-sum`,
  `cor-finite-dimensional-subspaces-are-closed`, `thm-finite-dimensional-orthogonal-decomposition`,
  `cor-finite-dimensional-normed-spaces-are-banach`,
  `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent`.
- **Level 2 — `ex-averaging-a-form-for-a-circle-representation` (B) — authored.**
  Probe of scaffold: `h0` matrix `[[2,1],[1,3]]`; weights 0 and 1, so only odd characters
  `z,\bar z` appear off-diagonal; `∫z=∫\bar z=0` by the involution `z↦−z` (left translation
  by `−1`, measure preserving) + integral linearity; average is `diag(2,3)`. Verified
  `h0` positive definite by `2Re(v1\bar v2) ≥ −(|v1|²+|v2|²)`; `h0` not invariant at `z=−1`;
  weight lines orthogonal for `h` but not `h0`. S¹ built as compact Hausdorff topological group
  (closed/bounded in ℝ², Heine–Borel, polynomial coordinate formulas). Statement provenance
  `ai-generated`, `generation.role: example`. Canonical layering 1.1; 2.1–2.2; 3.1; 4.1; 5.1.
  precheck PASS, rendercheck OK, depcheck clean.

- **Level 3 — `thm-schur-orthogonality-for-compact-groups` (A) — authored.**
  Route: rank-one intertwiner `T=⟨·,v'⟩v` averaged by the projection lemma; Schur
  (published) makes the average a scalar `cI`; trace of the average gives
  `c = d^{-1}⟨v,v'⟩\overline{⟨w,w'⟩}` in the first-variable-linear convention
  (both (i)/(ii) cases); equivalent-model statement by pre/post-composing with a
  unitary intertwiner. Layering 1.1–1.4; 2.1–2.2; 3.1; 4.1. precheck PASS,
  rendercheck OK after joining two multiline `$$…$$` blocks to single lines.
- **Level 3 — `def-compact-group-isotypic-projection` (A) — authored.**
  Definition of `P_σ = d_σ∫conj(χ_σ(k))π(k)·dμ` via the Bochner toolkit
  (continuity, compact image, simple-function nets, integrability criterion,
  norm inequality), σ-copy and isotypic subspace, and the explicit statement
  that no dual sum/Peter–Weyl claim is made; `justified_by` the level-4 theorem.
  precheck n/a, rendercheck OK; depcheck errors at the time were the two
  unresolved links to the not-yet-existing level-4 theorem, now created.
- **Level 4 — `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections` (A) — authored.**
  **Repair during authoring (math bug found and fixed):** the drafted step 4.1
  built the auxiliary intertwiners by Riesz from
  `ψ_{i,w}(y)=∫conj(⟨w,σ(k)e_i⟩)⟨y,π(k)v⟩dμ`, which is conjugate-linear in `w`
  so the constructed `A_i` was conjugate-linear and equivariance failed. Replaced
  with the Bochner-integral maps `A_i(w)=∫⟨w,σ(k)e_i⟩π(k)v dμ` (linear in `w`;
  intertwiners via `k↦h^{-1}k`; image a σ-copy by Schur [F7]); sum identity
  `⟨d_σΣ_iA_i(e_i),y⟩=d_σ∫conj(χ_σ(k))⟨π(k)v,y⟩dμ=⟨P_σv,y⟩` from
  `Σ_i⟨e_i,σ(k)e_i⟩=conj(χ_σ(k))`. Fact [F8] changed from Riesz to the Bochner
  framework (criterion, norm inequality, bounded maps commuting with the
  integral, Countable Choice from AC); deps updated accordingly (dropped
  `thm-riesz-representation-for-hilbert-space`, `def-dimensional-linear-subspace`;
  added the five Bochner items + `def-countable-choice`).
  Canonical layering 1.1–1.7; 2.1; 3.1; 4.1 adopted from the precheck dump.
  precheck PASS, rendercheck OK, depcheck clean for this item.

- **Level 5 — `ex-isotypic-projections-for-a-finite-group-as-a-compact-group` (B) — authored.**
  Route: a finite group with the discrete topology is a compact Hausdorff topological
  group; `μ({g})=1/|F|` is derived locally from left invariance plus finite additivity
  (no dependence on any published B-page example); every function on `F` is a
  measurable simple function, so the Bochner integral of
  `f_v(k)=conj(χ_σ(k))π(k)v` is `|F|^{-1}Σ_{g∈F}conj(χ_σ(g))π(g)v` and
  `P_σ=(d_σ/|F|)Σ_{g∈F}conj(χ_σ(g))π(g)`; bounded/self-adjoint/idempotent/range
  properties and the two-types orthogonality are cited from the A-page theorem
  ([[thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections]]);
  trivial and degree-one special cases; explicit `Z/2` computation
  `P_{σ0}=diag(1,0)`, `P_{σ1}=diag(0,1)`. Repairs adopted while authoring: step 6.1
  irreducibility of the one-element case now argues through
  [[cor-finite-dimensional-subspaces-are-closed]] (a line is a proper closed
  invariant subspace when `d_σ≥2`), and `σ0,σ1` are certified inequivalent because
  their characters differ at `t`. Canonical layering 1.1; 2.1; 3.1; 4.1; 5.1;
  6.1; 7.1. precheck PASS, rendercheck OK, depcheck clean. All B-page deps are A-page
  items of this pair or published library items; no B-on-B dependency.

- **Library pages created (draft).**
  `library/representation-theory/complete-reducibility-for-compact-groups.md`
  (items list = the 14 A items, `examples: []`) and
  `library/representation-theory/complete-reducibility-for-compact-groups-examples.md`
  (items `[]`, examples list = the 4 B items). Rendercheck OK on both; body prose
  describes the pair and states explicitly that no Peter–Weyl/density/dual-sum
  assertion is made.

- **Second authoring pass — two concrete proof defects found by re-reading and repaired.**
  - `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections`,
    step 1.4 (equivariance): the drafted line claimed that the single substitution
    `k↦kg` turns `∫conj(χ(k))⟨π(kg)v,y⟩dμ(k)` into
    `∫conj(χ(k))⟨π(gk)v,y⟩dμ(k)`, which is false for a non-abelian character
    weight. The claim (equivariance) is true; the written justification was not.
    Rewritten as the two-substitution chain: `k=ug^{-1}` (right translation,
    measure preserving), the class-function identity `χ(ug^{-1})=χ(g^{-1}u)` from
    [F3], then `u=gk` (left translation), giving
    `∫conj(χ(k))⟨π(gk)v,y⟩dμ(k)`; tags now [F2, F3, F4].
  - `thm-schur-orthogonality-for-compact-groups`, step 1.4 (rank-one trace): the
    drafted chain had a false intermediate equality
    `Σ_i⟨e_i,v'⟩⟨v,e_i⟩=⟨v,Σ_i⟨e_i,v'⟩e_i⟩` (the right side is the conjugate
    pairing `⟨v',v⟩`, e.g. `d=1`, `v=v'=i`); the endpoint
    `tr(T)=⟨v,v'⟩` is correct. Rewritten as
    `Σ_i⟨e_i,v'⟩⟨v,e_i⟩=Σ_i⟨v,e_i⟩⟨e_i,v'⟩=⟨Σ_i⟨v,e_i⟩e_i,v'⟩=⟨v,v'⟩`, with [F5]
    extended to record linearity of the pairing in the first variable for finite
    sums (target [[def-real-and-complex-inner-product-space]], already a dep).
  - Contracts for both ids regenerated with `tools/regen-contract-entries.mjs`;
    `proof-contract --strict` back to 0 errors, 18/18.

- **Gate battery actually run on batch 15 (this session).**
  - explicit-path `precheck.mts` over the 18 items: PASS, 15 proof-bearing checked,
    0 failing (the 3 definitions have no phase body).
  - `rendercheck.mjs` over 18 items + both library pages: OK, 20 files.
  - `content-policy.mjs research/frontier-37-owner-30-batch-15.pages.json`:
    18 scoped items, 0 errors, 0 warnings.
  - `proof-contract.mjs ... --strict`: 0 errors, 0 warnings, 18/18.
  - `boundary-audit.mjs ... --fail-on-template --fail-on-contradicted`: exit 0;
    no template clusters, no contradicted rows; 2 rows upheld by review
    (`def-haar-averaging-operator-on-hom-spaces` iff rows).
  - `citation-fidelity.mjs ... --fail-on-missing-quote`: 0 missing quotes.
  - `item-dependency-levels.mjs check --run frontier-37-owner-30`: 812 items,
    60 pages, no errors (batch-15 levels clean; the two earlier out-of-batch
    errors are gone from the current run state).
  - `validate-plan.mjs research/plan-spec.json`: OK (unrelated warnings only).
  - `frontier-dependency-ledger.mjs refresh --require-reviewed`: BLOCKED by a
    sibling pair's item, not by this batch: `items/def-modular-specht-form-and-
    radical-quotient.md` (batch 23, pair integral-specht-modules-and-modular-
    simple-modules) has a double-quoted YAML scalar containing the invalid escape
    `\cap` (`…Gram-rank identity for S^lambda/(S^\lambda\cap…), printed pp. 13-14`),
    so the run-wide `collect()` dies in `yaml().parse` before batch 15 is reached.
    Not edited (another pair's file); escalated to the owner with the exact file
    and the one-character remedy (double the backslash or single-quote the scalar).

- **Open obligations at handoff.**
  1. Run-level `frontier-dependency-ledger refresh --require-reviewed` must be
     rerun after the sibling batch-23 YAML escape is fixed; batch-15's own
     cross-batch input is `[]` and was independently recomputed as empty.
  2. `content-policy --manifest-only` is the pre-authoring mint check and reports
     `batch-item-already-exists` for every authored batch (verified also on
     batch 25); the plain (post-authoring) invocation is the applicable one.
  3. `plan-spec.json` still carries empty item arrays for this pair (pages 510.071/
     510.072) until Step 4 splices the manifest; `validate-plan` consequently only
     guarantees reading order for the pair. Expected pre-splice mismatch; reported
     for Step 4.
  4. Recorded source discrepancy (not a pair defect): Serganova Exercise 2.10's
     printed `1/dim ρ` prefactor is rejected under the house normalization; the
     pair uses `P_σ=d_σ∫conj(χ_σ)π dμ` (Kowalski Thm 5.5.1(2), Vogan Cor 2.16).
  5. No unresolved supplier: every direct dep of the 18 items resolves to a
     published item or to an earlier item of this pair; no consumer cites an
     in-run unfinished item, so no item decision below is escalated for suppliers.
