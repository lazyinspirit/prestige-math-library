# Step 3b — pair report and checkpoint log

Pair: `smooth-projective-serre-duality-and-flag-variety-line-bundles`
(A) + `-examples` (B); run `frontier-36-complete`, batch 16.

This file is the working checkpoint log and the eventual dispatch report.
Each entry records: item ID, status, exact checks run, open obligations.
Summaries here are navigation aids, not mathematical evidence.

## Checkpoint log

### Level 0

- `def-complex-semisimple-algebraic-group-borel-and-flag-variety` — authored
  (definition, no proof). Deps unchanged from scaffold (published Lie-theory
  conventions + AC). Checks: `rendercheck` pass.
- `lem-affine-algebraic-group-faithful-rational-representation` — authored
  (choice-free; stated for a finitely generated commutative Hopf algebra =
  finite-type affine group scheme over C). Local scaffold repair: added the
  published deps `thm-affine-scheme-ring-anti-equivalence`,
  `thm-affine-closed-immersions-quotient-rings`,
  `thm-first-isomorphism-theorem-rings` (the scaffold declared `deps: []` but
  its strategy invokes the closed-immersion conclusion). Checks: `precheck`
  PASS, `rendercheck` pass, strict `proof-contract` clean.

### Level 1

- `def-sheaf-ext-for-coherent-modules` — already authored (definition); contract
  boundary evidence repaired (the `zero`/`one` rows now name the Definition).
- `lem-semisimple-root-exponential-algebraic-subgroups` — authored. Local
  scaffold repair: added published deps `def-root-and-root-space-relative-to-a-cartan-subalgebra`
  and `thm-chevalley-constructible-image-varieties` (both cited by facts).
  Proof: faithful closed immersion, nilpotency of `e_α` on `V` via the
  published `sl₂` classification, polynomial exponential curve, naturality of
  `exp`, constructible-subgroup closure, injectivity of the curve, root-space
  identification, `T`-equivariance. Checks: precheck PASS, rendercheck OK,
  proof-contract 0/0.

### Level 2

- `lem-global-sheaf-ext-long-exact-in-first-variable` — authored. Local
  scaffold repair: added published deps `def-injective-object`,
  `def-ext-via-an-injective-resolution-of-the-second-variable`,
  `thm-injective-comparison-map-exists`,
  `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` and the
  in-run supplier `lem-ringed-space-module-sheaves-enough-injectives` (used for
  the resolution; supplier unauthored at this point — escalation candidate).
- `lem-semisimple-borel-root-factorization` — authored. Added in-run supplier
  `lem-semisimple-root-exponential-algebraic-subgroups` (own item) and the
  published `thm-baker-campbell-hausdorff`, `def-baker-campbell-hausdorff-series`,
  `thm-chevalley-constructible-image-varieties`. Uses triangular BCH
  coordinates on `n⁺`, the constructible-subgroup closure lemma, the `sl₂`
  maximality argument for `b`, and the character computation `X*(B) ≅ X*(T)`.
- `lem-semisimple-rank-one-sl2-root-homomorphism` — authored. Adds the
  coroot/diagonal conventions: `α∨(u) = φ_α(diag(u,u^{-1}))`, the pairing
  `λ(α∨(u)) = u^{⟨λ,α∨⟩}`, and the Weyl representative computation
  `Ad(n_α)(H) = s_α(H)` (explicit three-exponential calculation) giving
  `n_α ∈ N_G(T)`. Uses `thm-lie-second-fundamental-theorem`,
  `thm-polar-decomposition`, `thm-higher-dimensional-spheres-are-simply-connected`.
- `thm-leray-spectral-sequence-for-sheaf-cohomology` — authored. Uses the
  published abelian-sheaf injective supply, the stalkwise exactness of inverse
  image, the adjunction `f^{-1} ⊣ f_*`, and the Grothendieck spectral sequence.
  In-run supplier `def-higher-direct-image-sheaf` (unauthored; escalation
  candidate).

Each item: precheck PASS with canonical phase numbering, `rendercheck` OK,
`proof-contract --strict` 0 errors / 0 warnings.

### Level 4 (completed)

- `lem-smooth-closed-immersion-regular-conormal-sequence` — authored earlier;
  contract fragment generated in this session (citations [F1] `thm-conormal-sequence-closed-immersion`,
  [F2] `lem-regular-local-regular-quotient-ideal-is-parameter-generated`; 8 boundary rows).
  Decision: **escalate** — the proof consumes the unauthored in-run suppliers
  `thm-jacobian-criterion-smooth-morphism` (step 1.1/2.1, smoothness of `X→Spec k`),
  `thm-differentials-smooth-locally-free` (steps 3.2 and 4.1, free differential
  modules of ranks `N` and `n`); exact consuming steps recorded in the decision.

### Level 6

- `lem-semisimple-opposite-borel-big-cell` — authored. Local scaffold repair:
  deps rebuilt from the actual proof (added published `thm-transitivity-sequence-schemes`,
  `thm-formally-unramified-differentials-zero`, `lem-ag-local-flatness-regular-parameters`,
  `lem-regular-system-of-parameters-equivalent-basis`,
  `def-flat-and-faithfully-flat-modules-and-ring-maps`,
  `thm-faithfully-flat-ring-map-characterisations`, `lem-regular-local-domain-induction`);
  removed `lem-semisimple-rank-one-sl2-root-homomorphism`, which the proof does not use.
  Proof: differential of `U⁻×T×U→G` invertible everywhere by equivariance; flatness
  from the regular-local parameter criterion; `Ω_{X/G}=0` from the transitivity sequence;
  étale; open image; injectivity on all test-algebra points via `B∩B⁻=T`; isomorphism
  onto `Ω` by faithfully flat descent (descent exactness proved inline with a local
  retraction argument); density via irreducibility of `G`; quotient chart `Ω/B≅U⁻≅A^{|Φ⁺|}`.
  Checks: precheck PASS (canonical numbering adopted), rendercheck OK, strict
  proof-contract 0 errors/0 warnings.
  Decision: **escalate** — consumes unauthored in-run suppliers
  `thm-etale-morphisms-open-and-quasi-finite` (step 4.1: étale ⟹ universally open) and
  `thm-etale-equivalent-flat-unramified-fp` (step 4.1: flat + unramified ⟹ étale).

### Decisions recorded in this session (levels 0–4)

- accept: `def-complex-semisimple-algebraic-group-borel-and-flag-variety`,
  `lem-affine-algebraic-group-faithful-rational-representation`,
  `def-sheaf-ext-for-coherent-modules`,
  `lem-semisimple-root-exponential-algebraic-subgroups`,
  `lem-global-sheaf-ext-long-exact-in-first-variable`,
  `lem-semisimple-borel-root-factorization`,
  `lem-semisimple-rank-one-sl2-root-homomorphism`,
  `thm-leray-spectral-sequence-for-sheaf-cohomology` (every supplier file exists and
  passes precheck; fact quotes verified against the source sections).
- escalate: `def-smooth-projective-dualizing-line-bundle-and-trace` (unauthored
  `thm-differentials-smooth-locally-free`), `lem-smooth-closed-immersion-regular-conormal-sequence`.

### Level 8

- `lem-semisimple-minimal-parabolic-root-subgroup` — authored (rewritten).
  Local scaffold repair: deps rebuilt from the actual proof — dropped
  `lem-semisimple-bruhat-double-cosets` (unresolved in-run escalation, and the
  repaired argument does not need it) and the published `thm-root-string-property`
  (not used); added published `def-root-and-root-space-relative-to-a-cartan-subalgebra`,
  `def-weyl-group-of-a-root-system`, `thm-root-reflections-preserve-the-root-set`,
  `thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional`,
  `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
  `def-conjugation-and-the-adjoint-representation-of-a-lie-group`,
  `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`,
  `prop-adjoint-exponential-identity`,
  `prop-exponential-map-is-natural-for-lie-group-homomorphisms`,
  `thm-chevalley-constructible-image-varieties`,
  `cor-dimension-of-image-plus-generic-fibre`; manifest deps re-synced.
  Defect repaired: the previous draft's step "Q is closed under products" assumed
  `Bn_alphaB · Bn_alphaB ⊆ Q`, i.e. `n_alpha B n_alpha ⊆ Q`. The rewrite proves
  `Ad(n_alpha)(g_beta) = g_{s_alpha beta}` (step 1.2, eigenvalue argument from
  `Ad(n_alpha)|_h = s_alpha` and the published reflection facts), then
  `n_alpha U n_alpha ⊆ U_{-alpha}B` (step 2.1) and `n_alpha B n_alpha ⊆ B ∪ Bn_alphaB`
  (step 3.1), after which Q·Q ⊆ Q is unconditional (step 4.1). Disjointness is
  proved by the unipotent-eigenvalue argument (step 1.4), `B ∩ V_alpha = B_alpha`
  by the two-Borel argument in SL_2 (step 2.2), `dim P_alpha = dim B + 1` by the
  fibre-dimension formula (step 3.2), closedness by the constructible-subgroup
  lemma and `Lie P_alpha = b ⊕ g_{-alpha}` by smoothness (steps 6.1, 7.1).
  Statement (iii) chart description repaired to the correct charts
  `z ↦ u_{-alpha}(z)B` and `t ↦ u_alpha(t)n_alphaB` glued by `t = z^{-1}`
  (the scaffold's `U_alpha B/B` was a point, not an affine line).
  Checks: precheck PASS (canonical layering), rendercheck OK, strict
  proof-contract 0 errors/0 warnings for this item.
  Decision: **escalate** — statement (iii) consumes the missing algebraic-quotient
  existence theorem for `G/H`, `H` closed (with `SL_2/B_2 ≅ P^1`); exact consuming
  step is 6.2, which proves the set-level two-chart structure and states the
  obligation. Proposed remedy: authored lower-level supplier or owner narrowing of
  (iii).

### Level 4 (recomputed by the levels tool; dispatch level 9 was stale)

- `lem-semisimple-rational-pluecker-highest-weight-modules` — authored in full
  (`items/lem-semisimple-rational-pluecker-highest-weight-modules.md`). Local
  scaffold repair: deps rebuilt from the actual proof (32 deps); manifest deps
  re-synced and `dependency_level` recomputed by
  `item-dependency-levels` to 4. Proof: algebraic adjoint action through a
  faithful closed-subgroup-scheme embedding of `G` in `GL(V)`, exterior powers
  as rational representations with differentiated action `∧^d ad`; `v_B`,
  `v_α` span the `2ρ`- resp. `2ρ−α`-weight spaces (wedge-basis counting);
  `2ρ`, `2ρ−α` dominant integral; `U` acts unipotently and trivially on the
  lines; `U(g)v_B` is `G`-stable by the exponential/local-diffeomorphism
  argument and connectedness of `G`; irreducibility by Weyl complete
  reducibility plus multiplicity-one of the top weight; uniqueness of the
  `B`-stable line by the weight order. Checks: reflow, precheck PASS
  (canonical renumbering), rendercheck OK, strict proof-contract clean;
  contract fragment with 32 citations, 14 steps and 8 boundary rows.
  Decision: **accept** (confidence 1), with the documented confinement that
  the use of `lem-semisimple-minimal-parabolic-root-subgroup` is limited to
  its proved clauses (i)/(ii) (`Lie P_α = b ⊕ g_{−α}`,
  `dim P_α = dim B + 1`) and not its escalated clause (iii).

### Level 8 (second item)

- `lem-semisimple-projective-orbit-flag-quotients` — authored in full.
  Local scaffold repair: deps rebuilt from the actual proof (18 deps); the
  scaffold's `thm-chevalley-constructible-image-varieties`,
  `thm-regular-equals-smooth-over-perfect-field`-plus-`thm-smooth-locus-open`
  route and `lem-semisimple-opposite-borel-big-cell` are not needed and the
  missing `thm-smooth-locus-open` is therefore avoided; added the published
  `cor-minimum-tangent-dimension-and-homogeneous-regularity` (homogeneous
  regularity), `cor-dimension-of-image-plus-generic-fibre` (orbit dimensions),
  `thm-baker-campbell-hausdorff` and
  `prop-exponential-map-is-natural-for-lie-group-homomorphisms` (the unipotent
  cell factor does not change the top weight component).
  Proof: weight of `n_w v_B` is `w(2ρ)` by `B`-stability of the line; writing
  `g = u n_w b` with `u ∈ U_w ⊆ U` (Bruhat union and cell bijection) and
  expanding `u = exp_G(X)`, `X ∈ n⁺`, the `w(2ρ)`-component of `gv_B` is
  `χ(b)n_w v_B ≠ 0`, so `Stab_G([v_B]) = B` because `Stab_W(2ρ) = 1` for the
  strictly dominant `2ρ`; likewise `Stab_G([v_α]) = P_α` using
  `Stab_W(2ρ−α) = {1, s_α}` and `P_α = B ⊔ Bn_αB`. Orbits are closed by the
  Borel fixed point lemma plus uniqueness of the `B`-stable line; dimensions
  `|Φ⁺|` and `|Φ⁺|−1` by the fibre-dimension formula; smoothness by the
  homogeneous-regularity corollary and regular = smooth over the perfect
  field `ℂ`; connectedness by irreducibility.
  Checks: reflow, precheck PASS (canonical renumbering), rendercheck OK, strict
  proof-contract clean (10 steps, 19 citations, 8 boundary rows); manifest deps
  re-synced (level stays 8).
  Decision: **escalate** — the proof consumes the unfinished in-run suppliers
  `lem-semisimple-bruhat-double-cosets` (consuming steps 1.1, 2.1, 3.1, 4.1
  here; that item is escalated because the disjointness half of its statement
  (i) is unproved) and `lem-semisimple-minimal-parabolic-root-subgroup`
  (consuming steps 3.1, 4.1; only clauses (i)/(ii), its escalation is clause
  (iii)). The used clauses themselves are proved inside the supplier files;
  the escalation is held pending owner resolution or narrowing of those two
  statements.

**Checks run this session (batch 16 pair files):**
`reflow` and `precheck` PASS per item; `rendercheck` OK per item;
`proof-contract.mjs --strict research/frontier-36-complete-batch-16.proof-contracts.json`
now reports only `item-missing` errors for the items not yet authored
(16/41 contracts present); `manifest-deps.mjs
research/frontier-36-complete-batch-16.pages.json` exit 0;
`item-dependency-levels.mjs check --run frontier-36-complete` reports exactly
one run-wide error, `lem-schematic-closure-and-dense-agreement` (batch 9,
another pair's manifest: `dependency_level 8` vs computed `6`) — outside this
pair, reported, not edited.

**Open obligation carried forward:** authoring order continues at level 9
`lem-semisimple-flag-torsor-zariski-charts`, then level 10 items; the flag
items will inherit the same two unfinished in-run suppliers (`lem-semisimple-bruhat-double-cosets`,
`lem-semisimple-minimal-parabolic-root-subgroup`) and the unauthored
cross-batch suppliers already recorded at levels 0–4.

### Level 9 (recomputed 10 after the new supplier edge)

- `lem-semisimple-flag-torsor-zariski-charts` — authored (5 steps).
  Scaffold repair: replaced the scaffold's unconditional claim by a proved
  conditional statement plus two explicitly flagged obligations; added the
  in-run supplier `lem-scheme-zariski-main-factorization-quasi-finite`
  (batch 6, unauthored at this point) to deps and to the manifest, which
  shifted this item to level 10 and eleven dependent flag items by one level
  (labels recomputed with `item-dependency-levels`; run now clean).
  Proof: the B-chart is the trivial B-torsor by the big-cell isomorphism and
  the fibrewise computation (step 1.1); the P_alpha-chart is built from
  `U^- = U^-_alpha U_{-alpha}` with `pi_alpha^{-1}(sigma_alpha(U^-_alpha)) =
  U^-_alpha P_alpha` (step 2.1); the finite Bruhat translates cover and their
  preimages are computed (step 3.1); local triviality follows once the charts
  are open (step 4.1).
  Two flagged obligations, both recorded as escalations: (1) triviality of
  `U^-_alpha ∩ P_alpha` — its tangent space is 0 by
  `lem-semisimple-minimal-parabolic-root-subgroup` and
  `lem-semisimple-borel-root-factorization`, but no supplier turns vanishing
  tangent space into finiteness in characteristic zero (step 2.1);
  (2) Zariski openness of the two charts — needs the not-yet-authored in-run
  supplier `lem-scheme-zariski-main-factorization-quasi-finite` plus the
  corollaries "finite birational onto normal is an isomorphism" and
  "smooth implies normal" (step 5.1), consumed at steps 3.1 and 4.1.
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  for this item (5 steps, 9 citations, 8 boundary rows).
  Decision: **escalate** (reason recorded on disk).

**Next action:** level 10 `lem-projective-space-top-cohomology-residue-pairing`,
then the level-11 flag items.

### Level 10

- `lem-projective-space-top-cohomology-residue-pairing` — authored (6 steps).
  Proof: the cup product of `def-cup-product-sheaf-cohomology` for
  `O(d) ⊗ O(-n-1-d) → O(-n-1)`, followed by the coefficient isomorphism
  `H^n(P^n, O(-n-1)) ≅ k` sending the unique all-negative monomial
  `(x_0...x_n)^{-1}` to 1; the two monomial bases are in bijection
  `a ↦ e = -1-a`, giving the identity pairing matrix (perfectness, steps
  2.1 and 3.1), compatibility with multiplication by homogeneous polynomials
  (step 3.2, both sides the coefficient of the same monomial), and the
  separate case `n=0` (step 4.1).
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  (6 steps, 2 citations, 8 boundary rows).
  Decision: **escalate** — the whole argument is provisional on the
  not-yet-authored in-run supplier
  `thm-cohomology-projective-space-twisting-sheaves` (batch 9), consumed at
  step 1.1; its own suppliers
  `lem-projective-space-cech-monomial-complex` and
  `thm-qc-sheaf-affine-higher-cohomology-vanishes` are unauthored as well.

**Next action:** level 11 `def-borel-character-equivariant-line-bundle`,
`thm-minimal-parabolic-flag-projection-is-p1-bundle`,
`thm-semisimple-flag-variety-smooth-projective`,
`thm-serre-duality-projective-space-twisting-sheaves`.

### Level 11

- `def-borel-character-equivariant-line-bundle` — authored (definition).
  `X*(B) = X*(T)` from `lem-semisimple-borel-root-factorization` (iv);
  `L_λ = G×^B ℂ_{−λ}`, left `G`-action, fibre weight `−λ`, tensor and dual
  identities, and the rank-one sign convention; degree on `P_α/B` deferred to
  `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre`.
  Checks: reflow, rendercheck OK (definitions are skipped by precheck),
  strict proof-contract clean (0 citations, 8 boundary rows).
  Decision: **escalate** — the quotient construction inherits the two
  obligations of `lem-semisimple-flag-torsor-zariski-charts`.
- `thm-semisimple-flag-variety-smooth-projective` — authored (5 steps).
  Clause (i) proved from `lem-semisimple-projective-orbit-flag-quotients`
  plus the homogeneous-regularity and regular=smooth suppliers; clause (ii)
  (the algebraic-quotient structure of `G/B`) proved modulo the two
  inherited flag-torsor obligations. Checks: precheck PASS, rendercheck OK,
  strict proof-contract clean. Decision: **escalate**.
- `thm-minimal-parabolic-flag-projection-is-p1-bundle` — authored (5 steps).
  `f: X_B → X_α` well defined and surjective with fibre `P_α/B` (two-chart
  `ℙ¹` of the minimal-parabolic item), local `ℙ¹`-bundle triviality over the
  flag-torsor charts, rank-one case `G = P_α`. Checks: precheck PASS,
  rendercheck OK, strict proof-contract clean. Decision: **escalate** —
  morphism property and trivializations inherit the flag-torsor obligations,
  and the fibre identification inherits the quotient-existence obligation of
  `lem-semisimple-minimal-parabolic-root-subgroup`.
- `thm-serre-duality-projective-space-twisting-sheaves` — authored (6 steps).
  Bilinearity, middle-degree vanishing, both extreme degrees via the residue
  pairing (including the vacuous ranges `d<0`, `d>−n−1`), and `n=0`.
  Checks: precheck PASS, rendercheck OK, strict proof-contract clean.
  Decision: **escalate** — step 1.2 consumes the unauthored
  `thm-cohomology-projective-space-twisting-sheaves`; `ω=O(−n−1)` and the
  residue trace come from the escalated dualizing-bundle definition.

**Next action:** level 12 items (B examples and the resolution/adjunction
lemmas).

### Level 12 (in progress)

- `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`
  — authored (11 steps). Proof: F ≅ associated sheaf of the graded module
  M_F = ⊕_d Γ(F(d)) via the section-extension lemma on the standard charts
  D_+(x_i) (steps 1.1–2.1), truncation to a finitely generated graded module M
  with M~ ≅ F (steps 1.4, 3.2), graded free covers with finitely generated
  kernels (step 1.5), termination at n+1 from gldim k[x_0..x_n] = n+1, the
  syzygy criterion, and graded Nakayama (step 2.2), and exactness of
  sheafification checked chartwise/stalkwise (step 4.1).
  Local scaffold repair: deps rebuilt to match the proof — added
  `thm-projective-space-as-proj`, `def-twisting-sheaf-proj`,
  `thm-twisting-sheaf-invertible-standard-graded`,
  `lem-proj-associated-sheaf-basic-sections`, `lem-standard-opens-proj-affine`,
  `thm-affine-quasi-coherent-equivalence`,
  `lem-associated-sheaf-stalk-localization`,
  `thm-localisation-and-polynomial-extension-of-regular-rings`,
  `cor-finite-variable-polynomial-ring-noetherian`,
  `lem-finite-modules-over-noetherian-rings-are-noetherian`,
  `thm-noetherian-ring-quotients-and-localisations`, `thm-nakayama-lemma`,
  `thm-localisation-of-modules-is-exact`,
  `thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective`,
  `def-projective-dimension-of-an-object`,
  `def-global-dimension-of-an-abelian-category`,
  `def-graded-ring-and-graded-module`, `def-coherent-module-scheme`,
  `def-quasi-coherent-module-scheme`,
  `def-locally-noetherian-and-noetherian-scheme`,
  `thm-exactness-of-sheaves-stalkwise`, `def-sheaf-tensor-product`,
  `def-exact-sequence-sheaves`. Manifest deps synced; 9 new cross-batch rows
  added to `research/frontier-36-complete-batch-16.cross-batch-dependencies.json`
  (batches 7–8) and the unified ledger refreshed.
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  (11 steps, 27 citations, 8 boundary rows).
  Decision: **escalate** — step 1.4 consumes the unauthored in-run supplier
  `lem-graded-section-module-finite-projective` (batch 9), the only open
  supplier of the item.

- `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction` — authored
  (7 steps). Proof: the conormal sequence with its locally free ranks
  (step 1.1); ω = top exterior power and pullback compatibility (step 1.2);
  determinant of the conormal sequence built from local splittings, with the
  change-of-splitting computation showing the map is well defined and glues
  canonically (steps 2.1, 3.1, 4.1); det N = det(I/I²)^∨ via determinant of
  the dual (step 1.3); conclusion with the linear-subspace consistency check
  O(−N−1)⊗O(c) = O(−n−1) (step 5.1).
  Local scaffold repair: deps extended by `def-locally-free-sheaf-finite-rank`,
  `def-sheaf-hom`, `def-invertible-sheaf`, `def-sheaf-tensor-product`,
  `def-sheaf-relative-differentials`; the scaffold dep
  `thm-serre-duality-projective-space-twisting-sheaves` is retained and used in
  the closing trace-normalisation check. Manifest deps synced; 2 new
  cross-batch rows (batch 7) added and the unified ledger refreshed.
  Checks: reflow, precheck PASS, rendercheck OK (multiline display blocks
  joined), strict proof-contract clean (7 steps, 8 citations, 8 boundary rows).
  Decision: **escalate** — both in-run suppliers consumed
  (`lem-smooth-closed-immersion-regular-conormal-sequence` at steps 1.1/1.3 and
  `def-smooth-projective-dualizing-line-bundle-and-trace` at step 1.2) are
  themselves escalated on the unauthored `thm-differentials-smooth-locally-free`.

- `thm-flag-variety-bruhat-cell-decomposition` — authored (8 steps).
  Proof: cells as left-$B$-orbits $BwB/B=\pi_B(Bn_wB)$ with exact preimages
  (steps 1.1, 2.1); disjoint covering by pushing the group Bruhat decomposition
  through the quotient (step 2.1); constructible/locally closed irreducible
  cells and the finite scheme-level stratification (step 3.1); cell isomorphism
  $BwB/B\cong U_w\cong\mathbb A^{\ell(w)}$ by descending the right-$B$-equivariant
  isomorphism $U_w\times B\cong Bn_wB$ (step 4.1); longest cell =
  $n_{w_0}\Omega$ open dense, $\Omega/B\cong U^-\cong\mathbb A^{|\Phi^+|}$
  (steps 3.2, 5.1).
  Local scaffold repair: deps extended by `lem-semisimple-flag-torsor-zariski-charts`,
  `lem-semisimple-rank-one-sl2-root-homomorphism`,
  `def-complex-semisimple-algebraic-group-borel-and-flag-variety`,
  `def-weyl-group-of-a-root-system`,
  `prop-weyl-length-equals-positive-root-inversion-number`,
  `thm-chevalley-constructible-image-varieties`. Manifest deps synced (no new
  cross-batch rows: all new deps are in-pair or published).
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  (8 steps, 12 citations, 8 boundary rows).
  Decision: **escalate** — the three in-run suppliers consumed are themselves
  escalated; the quotient structure inherits the two flag-torsor obligations,
  and `lem-semisimple-bruhat-double-cosets` carries its own disjointness
  obligation.

- `thm-borel-characters-classify-equivariant-line-bundles-simply-connected`
  — authored (5 steps). Proof: the fibre functor at $eB$ with its $B$-action
  (step 1.1), full faithfulness via transitivity of the $G$-action and the
  extension formula for $B$-equivariant fibre maps (step 2.1), essential
  surjectivity by the evaluation isomorphism $G\times^B\mathcal L_{eB}\cong
  \mathcal L$ (step 2.2), and the classification of isomorphism classes by
  $X^*(B)\cong X^*(T)$ with the sign convention $[\mathcal L_\lambda]\mapsto
  -\lambda$ (step 3.1). No new cross-batch rows (all deps in-pair or
  published). Checks: reflow, precheck PASS, rendercheck OK, strict
  proof-contract clean (5 steps, 7 citations, 8 boundary rows).
  Decision: **escalate** — the in-run suppliers consumed
  (`lem-semisimple-flag-torsor-zariski-charts` at steps 1.1/2.2 and
  `def-borel-character-equivariant-line-bundle` at steps 1.1/2.2) are both
  escalated on the two flag-torsor obligations.
  *(Logged late: authored in the previous session, checkpoint appended here.)*

### Level 12 (continued)

- `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre` — authored
  (8 steps). Exact claim: for $F=P_\alpha[v_B]$ with the fixed identification
  of $P_\alpha/B$ with the two-affine $\mathbb P^1$ (chart $z\leftrightarrow
  U_0$, $t=z$; chart $s\leftrightarrow U_\infty$, $u=s$), the restriction
  $\mathcal L_\lambda|_F$ is isomorphic to $\mathcal O(\langle\lambda,\alpha^\vee\rangle)$,
  so its degree is $\langle\lambda,\alpha^\vee\rangle$; in particular
  $\mathcal L_\alpha|_F$ has degree $2$ and $\mathcal L_{-\alpha}|_F$ degree
  $-2$. Proof: frames $e_0=[u_{-\alpha}(z),1]$, $e_\infty=[u_\alpha(s)n_\alpha,1]$
  on the two charts (step 1.1); the $SL_2$ identity $u_+(s)w=u_-(z)
  \operatorname{diag}(z^{-1},z)u_+(-z)$ at $s=z^{-1}$ transported along
  $\varphi_\alpha$ gives $u_\alpha(s)n_\alpha=u_{-\alpha}(z)b_z$ with
  $b_z=\alpha^\vee(z^{-1})u_\alpha(-z)\in B$ (step 1.2); $(-\lambda)(b_z)=
  z^{\langle\lambda,\alpha^\vee\rangle}$ from characters trivial on $U$ and
  $\lambda(\alpha^\vee(u))=u^{\langle\lambda,\alpha^\vee\rangle}$ (step 1.3);
  transition $e_\infty=z^m e_0$ (step 2.1); match with the gluing definition
  of $\mathcal O(m)$ of `def-projective-line-two-affine-cover-and-twisting-sheaf`
  and uniqueness of gluing (step 3.1); degree well defined by
  `lem-uniqueness-of-twists-on-the-projective-line` (step 4.1); root cases
  $\langle\alpha,\alpha^\vee\rangle=\alpha(h_\alpha)=2$ and
  $\langle-\alpha,\alpha^\vee\rangle=-2$ (step 5.1).
  Local scaffold repair: deps rebuilt to match the proof — added
  `def-complex-semisimple-algebraic-group-borel-and-flag-variety`,
  `lem-semisimple-flag-torsor-zariski-charts`,
  `lem-semisimple-minimal-parabolic-root-subgroup`,
  `lem-semisimple-borel-root-factorization`,
  `thm-root-sl-two-triple`,
  `def-root-and-root-space-relative-to-a-cartan-subalgebra`,
  `def-projective-line-two-affine-cover-and-twisting-sheaf`,
  `lem-uniqueness-of-twists-on-the-projective-line`,
  `thm-gluing-sheaves`. Manifest deps synced; one new cross-batch row (batch 5,
  `lem-uniqueness-of-twists-on-the-projective-line`) added and the unified
  ledger refreshed. The supplier's own statement and proof were re-read before
  the use; it is an accepted in-run item.
  Checks: reflow, precheck PASS, rendercheck OK (one multiline display joined),
  strict proof-contract clean (8 steps, 15 citations, 8 boundary rows).
  Decision: **escalate** — the in-run suppliers consumed are themselves
  escalated: `thm-minimal-parabolic-flag-projection-is-p1-bundle` (step 1.1),
  `lem-semisimple-minimal-parabolic-root-subgroup` (steps 1.1/3.1),
  `def-borel-character-equivariant-line-bundle` (steps 1.1/2.1) and
  `lem-semisimple-flag-torsor-zariski-charts` (steps 1.1/2.1); the item is
  conditional on the quotient-existence obligation for $G/H$ and on the two
  flag-torsor obligations (triviality of $U^-_\alpha\cap P_\alpha$, Zariski
  openness of the charts).

**Next action:** level 12 continues with
`lem-flag-variety-canonical-bundle-weight-minus-two-rho` (A) and the B example
`ex-sl2-flag-variety-line-bundles`.

- `lem-flag-variety-canonical-bundle-weight-minus-two-rho` — authored
  (6 steps, 13 citations, 8 boundary rows). Exact claim: with $L_\lambda =
  G\times^B\mathbb C_{-\lambda}$ and $\omega_X=\bigwedge^{|\Phi^+|}\Omega^1_{X/\mathbb C}$,
  one has $\omega_X\cong L_{-2\rho}$, and the fibre at $eB$ of both sides is the
  $B$-module $\mathbb C_{2\rho}$ (character $-2\rho$). Proof (dependency-free
  computation on the fixed big cell): step 1.1 picks the chart
  $\sigma_B:U^-\to V$, notes $V$ is $T$-stable ($\ell_t\sigma_B(u)=\sigma_B(tut^{-1})$
  since $t^{-1}$ fixes $eB$) and that $z_\beta\mapsto\beta(t)^{-1}z_\beta$;
  step 2.1 identifies the cotangent fibre $(\Omega^1_{X/\mathbb C})_{eB} =
  \bigoplus_\beta\mathbb C\,\mathrm dz_\beta$ via the chart differential module
  with its affine-compatibility naturality; step 3.1 takes the top exterior
  power, whose $T$-weight $\prod_\beta\beta(t) = 2\rho(t)$ determines the
  one-dimensional $B$-module as $\mathbb C_{2\rho}$ (characters of $B$
  are trivial on $U$); step 4.1 constructs the $G$-equivariant structure on
  $\omega_X$ from chain-rule-compatible pullbacks $\ell_g^*\omega_X\cong\omega_X$;
  step 5.1 applies the fibre-at-$eB$ fibre functor (equivalence, reflects
  isomorphisms) to conclude $\omega_X\cong L_{-2\rho}$; step 6.1 AC bookkeeping.
  Local scaffold repair: deps extended by
  `def-smooth-projective-dualizing-line-bundle-and-trace`,
  `lem-sheaf-differentials-affine-compatibility`,
  `lem-differential-of-morphism-via-cotangent-map`, `def-weyl-vector-rho`,
  `def-axiom-of-choice`; manifest deps synced (no new cross-batch rows: all
  suppliers in-pair or published/in-run sibling pairs already rowed).
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  (0 errors, 0 warnings).
  Decision: **escalate** — consumed in-run suppliers are themselves escalated:
  `lem-semisimple-flag-torsor-zariski-charts` (step 1.1; big-cell openness
  obligation), `lem-semisimple-projective-orbit-flag-quotients` /
  `thm-semisimple-flag-variety-smooth-projective` (step 1.1; quotient existence
  for $G/B$), `def-smooth-projective-dualizing-line-bundle-and-trace`
  (steps 3.1/4.1; escalated on unauthored `thm-differentials-smooth-locally-free`)
  and `thm-borel-characters-classify-equivariant-line-bundles-simply-connected`
  (steps 4.1/5.1). Unresolved qualifications: the big-cell chart openness and
  the quotient-existence obligation for $G/H$ propagate into this item.

**Next action:** B-page example `ex-sl2-flag-variety-line-bundles` (level 12),
then level 13 items.

- **Bookkeeping repair (previous session gap).**
  `thm-minimal-parabolic-flag-projection-is-p1-bundle` had no Step 3b
  decision record on disk although it was authored in an earlier session and
  its checkpoint entry claims an escalate decision. Re-verified the item
  before recording: precheck PASS, rendercheck OK, strict proof-contract clean
  (5 steps, 5 citations, 8 boundary rows); decision **escalate** now recorded
  (two flag-torsor obligations behind the morphism property and local
  trivializations; quotient-existence obligation behind the fibre
  identification).

- `lem-minimal-parabolic-relative-canonical-line-bundle-root-weight` —
  authored (8 steps, 21 citations, 8 boundary rows). Exact claim: with
  $\Omega^1_f=\Omega^1_{X_B/X_\alpha}$ for the minimal-parabolic projection
  $f:X_B\to X_\alpha=G/P_\alpha$ and
  $\omega_{(G/B)/(G/P_\alpha)}=\det\Omega^1_f$, the relative cotangent sheaf is
  invertible of rank one and
  $\omega_{(G/B)/(G/P_\alpha)}\cong\mathcal L_{-\alpha}$ $G$-equivariantly,
  with fibre at $eB$ equal to $\mathbb C_\alpha$; the restriction to every
  fibre is $\mathcal O_{\mathbb P^1}(-2)$ of degree
  $\langle-\alpha,\alpha^\vee\rangle=-2$. Proof: in the product coordinates
  $U^-\cong U^-_\alpha\times U_{-\alpha}$ the projection is the first
  projection (step 1.1) and the fibre is the two-chart $\mathbb P^1$ with
  gluing $s=z^{-1}$, $n_\alpha^{-1}u_\alpha(s)n_\alpha=u_{-\alpha}(-s)$ and
  $u_\alpha(s)n_\alpha\in u_{-\alpha}(z)B$ (step 2.1); relative differentials
  over the big cell are free on $\mathrm dz$, and the fibre cotangent is
  recovered by base change (step 2.2); the chain rule gives the canonical
  $G$-equivariant structure and rank-one invertibility over the covering
  translates $\ell_g(U)$ (step 3.1); the frame weight at $eB$ is
  $t\cdot\mathrm dz=\alpha(t)\mathrm dz$ from the conjugation formula
  (step 3.2); the fibre functor gives $\Omega^1_f\cong\mathcal L_{-\alpha}$
  (step 4.1); the two-chart frame transition $\mathrm dz'=z^{-2}\mathrm dz$
  matching $\mathcal O(-2)$, degree $-2$ both directly and via
  $\langle-\alpha,\alpha^\vee\rangle$ (step 5.1); conclusion with the
  rank-one degenerate case $G=P_\alpha$ and AC bookkeeping (step 6.1).
  Local scaffold repair: deps rebuilt to match the proof — added
  `lem-semisimple-minimal-parabolic-root-subgroup`,
  `lem-semisimple-flag-torsor-zariski-charts`,
  `lem-semisimple-projective-orbit-flag-quotients`,
  `lem-semisimple-borel-root-factorization`,
  `lem-semisimple-root-exponential-algebraic-subgroups`,
  `lem-semisimple-rank-one-sl2-root-homomorphism`,
  `thm-borel-characters-classify-equivariant-line-bundles-simply-connected`,
  `def-sheaf-relative-differentials`,
  `lem-sheaf-differentials-affine-compatibility`,
  `lem-differentials-polynomial-algebra-free`,
  `lem-differentials-commute-base-change-schemes`,
  `lem-differential-of-morphism-via-cotangent-map`,
  `cor-affine-closed-points-detect-radicals`,
  `def-projective-line-two-affine-cover-and-twisting-sheaf`,
  `lem-uniqueness-of-twists-on-the-projective-line`, `thm-gluing-sheaves`.
  Manifest deps synced; one new cross-batch row (batch 5,
  `lem-uniqueness-of-twists-on-the-projective-line`, status open; supplier
  re-read) added — cross-batch file now 53 rows — and the unified ledger
  refreshed.
  Checks: reflow, precheck PASS, rendercheck OK (one multiline display
  joined), strict proof-contract clean (0 errors, 0 warnings).
  Decision: **escalate** — consumed in-run suppliers are themselves escalated:
  `thm-minimal-parabolic-flag-projection-is-p1-bundle` (steps 1.1/2.1),
  `lem-semisimple-flag-torsor-zariski-charts`,
  `lem-semisimple-projective-orbit-flag-quotients`,
  `def-borel-character-equivariant-line-bundle`,
  `thm-borel-characters-classify-equivariant-line-bundles-simply-connected`,
  `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre` and
  `lem-semisimple-minimal-parabolic-root-subgroup`; the item is conditional on
  the two flag-torsor obligations (openness of the charts, triviality of
  $U^-_\alpha\cap P_\alpha$), the quotient-existence obligation for $G/B$ and
  $G/P_\alpha$, and (not consumed here) the unauthored
  `thm-differentials-smooth-locally-free` behind the dualizing-bundle
  definition.

**Next action:** level 13 continues with `lem-regular-immersion-koszul-ext-sheaf`
(A) and the B example `ex-sl3-two-minimal-parabolic-projections`.

- `lem-regular-immersion-koszul-ext-sheaf` — authored (8 steps, 22 citations,
  8 boundary rows). Exact claim: for $i:X\hookrightarrow\mathbb P^N$ smooth of
  pure codimension $c$ and $E$ finite locally free,
  $\mathcal Ext^q_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})=0$ for
  $q\ne c$ and $\cong i_*(E^\vee\otimes\omega_X)$ for $q=c$, naturally in $E$;
  and on each chart of a finite affine cover of $X$ with
  $\mathcal I|_U=(f_1,\dots,f_c)$ $A$-regular and $E|_U\cong\mathcal O_U^{\oplus r}$,
  the Koszul complex $K(\mathbf f;A)^{\oplus r}$ is a finite free resolution
  and computes the sheaf Ext (the local computation deferred by
  `def-sheaf-ext-for-coherent-modules`). Proof: step 1.1 chart cover from
  conormal local-freeness plus Nakayama minimal-generator comparison; step 1.2
  Hodge-star duality
  $\operatorname{Hom}_A(\Lambda^pF,N)\cong\Lambda^{c-p}F\otimes\Lambda^cF^\vee\otimes N$
  intertwining the dual differential with the Koszul differential; step 2.1
  the chosen generators are $A$-regular and $K(\mathbf f;A)^{\oplus r}$
  resolves $i_*E|_U$; step 3.1 the local computation by the double complex
  $\mathcal Hom(K_p,I^q)$ with exact rows (injective resolution) and columns
  (finite free) plus the two assembly lemmas; step 4.1 concentration in degree
  $c$ with $H^c\cong\Lambda^cF^\vee\otimes N/(\mathbf f)N$ via Koszul $H_0$ and
  acyclicity; step 5.1 the canonical identification
  $\Lambda^cF^\vee\otimes\mathcal O_{X\cap U}\cong\det(\mathcal I/\mathcal I^2)^\vee$
  and adjunction giving $\omega_X$; step 6.1 gluing over the cover and
  vanishing in the remaining degrees; step 7.1 naturality in $E$, the $c=0$
  case and the exact AC use.
  Local scaffold repair: deps extended by
  `def-koszul-complex-of-a-sequence-with-coefficients`,
  `lem-koszul-differential-coordinate-formula`,
  `lem-exterior-algebra-basis-monomials`,
  `lem-koszul-complex-concatenation-tensor-isomorphism`,
  `cor-koszul-complex-resolves-a-regular-quotient`,
  `thm-basic-koszul-homology`,
  `thm-regular-sequences-give-acyclic-koszul-complexes`,
  `cor-local-koszul-acyclicity-iff-regular-sequence`,
  `lem-koszul-generator-matrix-chain-map`,
  `cor-koszul-complex-invariant-under-invertible-generator-change`,
  `cor-koszul-homology-flat-base-change`,
  `lem-ringed-space-module-sheaves-enough-injectives`,
  `lem-acyclic-assembly-by-exact-columns`,
  `lem-acyclic-assembly-by-exact-rows`,
  `def-locally-free-sheaf-finite-rank`, `def-sheaf-hom`,
  `def-invertible-sheaf`, `def-sheaf-tensor-product`,
  `def-smooth-projective-dualizing-line-bundle-and-trace`; manifest deps
  synced (23); three new cross-batch rows for the consumers of the in-run
  suppliers `def-locally-free-sheaf-finite-rank`, `def-invertible-sheaf` and
  `lem-ringed-space-module-sheaves-enough-injectives` added (batch-16 file now
  56 rows) and the unified ledger refreshed.
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  (0 errors, 0 warnings), item-dependency-levels clean (948 items, max level
  18).
  Decision: **escalate** — the consumed in-run suppliers
  `lem-smooth-closed-immersion-regular-conormal-sequence` (steps 1.1/2.1/5.1)
  and `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`
  (steps 4.1/5.1) and `def-smooth-projective-dualizing-line-bundle-and-trace`
  (steps 4.1/5.1) are themselves escalated on the unauthored
  `thm-differentials-smooth-locally-free`, and the injective-resolution
  supplier `lem-ringed-space-module-sheaves-enough-injectives` (step 3.1) is an
  unauthored sibling-pair item. The published Koszul and assembly suppliers of
  frontier-31a were re-read before use.

**Next action:** level 13 continues with the B-page example
`ex-sl3-two-minimal-parabolic-projections`, then level 14
`lem-regular-immersion-local-to-global-ext-collapse` and
`ex-sl2-flag-variety-line-bundles`.

- `ex-sl3-two-minimal-parabolic-projections` — authored (6 steps, 16 citation
  contracts, 8 boundary rows). Exact claim: for $G=SL_3(\mathbb C)$ the flag
  variety is the variety of complete flags $0\subsetneq L\subsetneq H$, the
  projection $f_{\alpha_1}$ (target the plane Grassmannian $G/P_{\alpha_1}$)
  forgets the line and $f_{\alpha_2}$ (target the line Grassmannian) forgets
  the plane, both with fibre $\mathbb P^1$; the fundamental bundles have
  fibre-degree pairs $(1,0)$ and $(0,1)$, $\mathcal L_{\omega_1}\otimes
  \mathcal L_{\omega_2}\cong\mathcal L_\rho$ has pair $(1,1)$ and
  $\omega_{G/B}\cong\mathcal L_{-2\rho}$ has fibre degree $-2$. Proof: step
  1.1 the four coroot pairings $\langle\omega_i,\alpha_j^\vee\rangle=\delta_{ij}$
  and $\langle2\rho,\alpha_j^\vee\rangle=2$ computed from
  $h_{\alpha_1}=\operatorname{diag}(1,-1,0)$,
  $h_{\alpha_2}=\operatorname{diag}(0,1,-1)$; step 1.2 $G/B$ = complete flags
  via the transitivity/determinant-normalization argument; step 1.3 the
  parabolic–stabilizer dimension count ($\dim P_{\alpha_j}=6=\dim B+1$ against
  the explicit block stabilizers); step 1.4 the two $\mathbb P^1$ fibres (lines
  in $H$ resp. planes through $L$); step 2.1 fibre degrees via [F2]; step 3.1
  wrap-up and AC bookkeeping.
  Local scaffold repair: the Statement ("forgetting the plane and forgetting
  the line") and step 1.4 had the two projections interchanged relative to
  step 1.3 and to the recorded strategy — both corrected so that
  $f_{\alpha_1}$ consistently forgets the line and $f_{\alpha_2}$ forgets the
  plane. The manifest `deps` of seven batch-16 items were resynced to their
  item frontmatter (order/extra entries only, no level change) except that
  `ex-sl3-two-minimal-parabolic-projections` genuinely gains
  `lem-flag-variety-canonical-bundle-weight-minus-two-rho` and therefore its
  recomputed `dependency_level` moved **13 -> 14**; no in-run item depends on
  it, and the run-wide levels check stays clean (948 items, max level 18).
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract clean
  (0 errors/0 warnings for this item), run-wide item-dependency-levels clean.
  Decision: **escalate** — the consumed suppliers
  `thm-minimal-parabolic-flag-projection-is-p1-bundle` (steps 1.3/1.4),
  `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre` (step 2.1),
  `lem-semisimple-minimal-parabolic-root-subgroup` (step 1.3),
  `lem-semisimple-projective-orbit-flag-quotients` (steps 1.2/1.3),
  `def-borel-character-equivariant-line-bundle` (step 2.1) and
  `lem-flag-variety-canonical-bundle-weight-minus-two-rho` (step 2.1) are
  themselves escalated.

**Next action:** level 14 — `lem-regular-immersion-local-to-global-ext-collapse`
(A) and `ex-sl2-flag-variety-line-bundles` (B).

- `lem-regular-immersion-local-to-global-ext-collapse` — authored (9 steps,
  16 citation contracts, 8 boundary rows). Exact claim: for $X$ smooth
  finite-type of pure dimension $n$, $i:X\hookrightarrow\mathbb P^N$ of pure
  codimension $c=N-n$, $E$ finite locally free,
  $\operatorname{Ext}^{c+j}_{\mathcal O_{\mathbb P^N}}(i_*E,\omega_{\mathbb P^N})\cong H^j(X,E^\vee\otimes\omega_X)$
  canonically and naturally in $E$, with $\operatorname{Ext}^q=0$ for $q<c$.
  Proof: $F=\mathcal Hom(i_*E,-)$, $G=\Gamma$, $R^qF=\mathcal Ext^q$,
  $R^q(GF)=\operatorname{Ext}^q$ (step 1.1); module-level extension by zero,
  its $\mathcal O$-linear adjunction, exactness and the canonical monomorphism
  $u:o_!(\mathcal H|_W)\to\mathcal H$ (step 1.2); restrictions of injective
  $\mathcal O$-modules are injective and $\mathcal Hom(\mathcal F,I)$ is flasque
  for injective $I$ (step 2.1); $R^q\Gamma(\mathcal M)\cong H^q(\mathbb P^N,\mathcal M)$
  via flasque injective resolutions and the acyclic-resolution theorem under DC
  (step 3.1); the acyclicity hypothesis of the Grothendieck spectral sequence
  (step 4.1); $E_2^{p,q}=H^p(\mathbb P^N,\mathcal Ext^q)\Rightarrow\operatorname{Ext}^{p+q}$
  (step 5.1); degeneration forced by the Koszul concentration in $q=c$, giving
  $\operatorname{Ext}^{c+j}\cong H^j(\mathbb P^N,i_*(E^\vee\otimes\omega_X))$
  (step 6.1); the pushforward identification $H^j(\mathbb P^N,i_*M)\cong H^j(X,M)$
  (step 7.1); naturality, boundary cases, AC accounting (step 8.1).
  Local scaffold repair: deps extended from 9 to 17 by the published flasque/
  acyclicity suppliers actually used (`def-extension-by-zero-abelian-sheaf`,
  `thm-extension-by-zero-adjunction-exactness`, `def-flasque-sheaf`,
  `thm-flasque-sheaves-acyclic`,
  `thm-acyclic-resolution-theorem-for-right-derived-functors`), by
  `thm-abelian-sheaves-have-enough-injectives`,
  `thm-choice-implies-dependent-implies-countable-choice`,
  `def-sheaf-cohomology-derived-global-sections`, `def-sheaf-hom`,
  `thm-hom-is-left-exact-in-each-variable` and
  `def-smooth-projective-dualizing-line-bundle-and-trace`; a new cross-batch
  row for the consumer use of `lem-closed-immersion-cohomology-pushforward` was
  already recorded (batch-16 cross-batch file, row 75/77); manifest deps
  synced (17), level stays 14, run-wide levels clean (949 items, max 18).
  Checks: reflow, precheck PASS (canonical renumbering adopted), rendercheck
  OK, strict proof-contract clean (0 errors/0 warnings).
  Decision: **escalate** — `lem-regular-immersion-koszul-ext-sheaf`
  (steps 6.1/8.1) and `lem-closed-immersion-cohomology-pushforward`
  (step 7.1) are themselves escalated in this run; the sibling supplier
  `lem-ringed-space-module-sheaves-enough-injectives` (steps 1.1, 3.1) has an
  accept record whose statement and proof I re-read directly and which matches
  its use here.

**Next action:** level 14 continues with the B-page example
`ex-sl2-flag-variety-line-bundles`.

- `ex-sl2-flag-variety-line-bundles` — authored (8 steps, 17 citation
  contracts, 8 boundary rows). Exact claim: for $G=SL_2(\mathbb C)$, $B$ upper
  triangular, $T=\operatorname{diag}(t,t^{-1})$, the identification
  $G/B\cong\mathbb P^1$, $gB\mapsto\mathbb C ge_1$, matches the two-chart
  description $z\mapsto u_{-\alpha}(z)B$, $s\mapsto u_\alpha(s)n_\alpha B$ with
  $U_0$ ($t=z$) and $U_\infty$ ($u=s$); then
  $\mathcal L_{m\omega_1}\cong\mathcal O(m)$ of degree
  $m=\langle m\omega_1,\alpha^\vee\rangle$ for every $m\in\mathbb Z$, and
  $\omega_{G/B}\cong\mathcal L_{-2\rho}\cong\mathcal O(-2)$ with fibre
  $\mathbb C_{2\rho}=\mathbb C_\alpha$. Proof: step 1.1 stabilizer/transitivity
  and charts for $SL_2$ plus the Bruhat factorization $G=B\sqcup BwB$;
  step 1.2 rank-one weights $\rho=\omega_1$, $2\rho=\alpha=2\omega_1$,
  $\langle m\omega_1,\alpha^\vee\rangle=m$; step 2.1 $P_\alpha=G$ (Bruhat and
  the dimension count), so the rank-one clause of the flag-projection theorem
  applies with single fibre $F=X_B$ and the degree-lemma chart identification;
  step 2.2 the tautological line subbundle (frames $(1,z)$, $(s,1)$) has
  $f_\infty=t^{-1}f_0$, i.e. $\mathcal O(-1)$, and fibre character $\omega_1$ —
  the sign check; step 2.3 the change of frame $e_\infty=t^me_0$ from the
  explicit matrix identity
  $u_+(s)w=u_-(z)\operatorname{diag}(z^{-1},z)u_+(-z)$ and
  $\lambda(b_z)^{-1}=z^{m}$; step 3.1 gluing comparison gives
  $\mathcal L_{m\omega_1}\cong\mathcal O(m)$ and the degree, with
  $\mathcal O(\pm1)\cong\mathcal L_{\pm\omega_1}$; step 4.1 canonical bundle
  $\omega_{G/B}\cong\mathcal L_{-2\rho}\cong\mathcal O(-2)$ with fibre character
  $t^2=\alpha$; step 5.1 wrap-up and AC.
  Checks: reflow, precheck PASS (canonical numbering 1.1, 1.2, 2.1, 2.2, 2.3,
  3.1, 4.1, 5.1 adopted), rendercheck OK, strict proof-contract clean
  (0 errors/0 warnings for this item). Manifest deps synced 5 -> 17; level
  stays 14; run-wide levels clean (949 items, max 18).
  Decision: **escalate** — the consumed suppliers
  `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre` (steps 2.1/3.1),
  `thm-minimal-parabolic-flag-projection-is-p1-bundle` (steps 1.1/2.1),
  `def-borel-character-equivariant-line-bundle` (steps 2.2/2.3/3.1),
  `lem-flag-variety-canonical-bundle-weight-minus-two-rho` (step 4.1),
  `lem-semisimple-minimal-parabolic-root-subgroup` (step 2.1) and
  `lem-semisimple-projective-orbit-flag-quotients` (step 2.1) are themselves
  escalated in this run. Open qualification recorded: the instance
  "$SL_2(\mathbb C)$ is the connected simply connected complex semisimple
  algebraic group of type $A_1$" is the same standard identification used in
  the sibling $SL_3$ example; the library has no dedicated algebraic-group
  simple-connectivity item for $SL_2$, so this is flagged rather than proved.

**Next action:** level 15 — `thm-serre-duality-projective-space-coherent-sheaves`.

- NEW LOCAL SUPPLIER on the assigned A page (authorized by the dispatch rule
  that necessary definitions and lemmas may be added to assigned existing A
  pages before their consumers):
  `lem-injective-modules-flasque-and-ext-of-structure-sheaf` — authored.
  Exact claim: assume AC; for a ringed space $(Y,\mathcal O_Y)$, (1) every
  injective $\mathcal O_Y$-module is flasque as an abelian sheaf, and (2) there
  is a canonical isomorphism
  $\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal O_Y,\mathcal G)\cong H^q(Y,\mathcal G)$
  natural in $\mathcal G$, whose degree-zero case is evaluation at the unit
  section. Proof: extension by zero for $\mathcal O$-modules with its
  adjunction and the monomorphism comparison $o_!^{\mathrm{mod}}\mathcal O_U
  \rightarrowtail o_!^{\mathrm{mod}}\mathcal O_V$ (steps 1.1, 2.1, 2.2);
  $\operatorname{Hom}_{\mathcal O_Y}(\mathcal O_Y,-)\cong\Gamma(Y,-)$ on the
  level of complexes (step 1.2); injectivity extends sections, so injective
  $\mathcal O_Y$-modules are flasque (step 3.1); flasque injectives are
  $\Gamma$-acyclic and the acyclic-resolution theorem (DC, from AC) computes
  $R^q\Gamma$ from the $\mathcal O_Y$-injective resolution (step 4.1);
  conclusion and naturality in $\mathcal G$ (step 5.1). Needed because the
  library had these two facts only for $\mathrm{Ab}(Y)$, not for
  $\mathcal O_Y$-modules, and the level-15 theorem uses both.
  Checks: reflow, precheck PASS (canonical numbering 1.1, 1.2, 2.1, 2.2, 3.1,
  4.1, 5.1 adopted), rendercheck OK, strict proof-contract clean
  (0 errors/0 warnings; 16 citation entries, 8 boundary rows).
  Registration: manifest A page now 39 items (batch total 42), deps synced (16)
  and `dependency_level: 2`; coverage canonical row added; batch-16
  cross-batch file carries the batch-9 supplier row (an earlier duplicate row
  about this lemma, written under the old step numbering, was merged into it
  with the supported-section-gluing doubt recorded and reconciled).
  Decision: **none recorded by design** — this is an auditor-created item, so
  per the dispatch it is not sent through the Step 3 self-review loop; the
  engine certifies it after the dispatch. The pair scope decision was refreshed
  to *sufficient* with evidence, because the addition changed the pair's scope
  hash (record-scope, non-owner, hash
  `42152a6a379b5116fab776e357dfc7103f39968150c284a3ed7b2c6e477bfa0e`).

**Next action:** level 15 — `thm-serre-duality-projective-space-coherent-sheaves`.

- `thm-serre-duality-projective-space-coherent-sheaves` — authored (15 steps:
  1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1, 4.2, 5.1, 5.2, 6.1, 6.2, 7.1, 8.1,
  9.1; 32 citation entries, 15 step entries, 8 boundary rows). Exact claim:
  assume AC; for $X=\mathbb P^n_k$, $\omega_X=\mathcal O(-n-1)$, residue trace
  $t_X$ and every coherent $F$, the pairing
  $\operatorname{Ext}^{n-q}_{\mathcal O_X}(F,\omega_X)\times H^q(X,F)\to k$,
  $\langle\alpha,\eta\rangle_F=t_X(\chi^n_{\omega_X}(\alpha\cdot\chi^q_F{}^{-1}(\eta)))$
  (Yoneda product, $\chi^q$ of the new local lemma) is $k$-bilinear, natural in
  $F$, and perfect for every $0\le q\le n$; the classical $q=n$ form and the
  $F=\mathcal O_X$ specialization are recorded.
  Local scaffold repairs (audit findings, all fixed before the decision):
  (a) the scaffold fact [F8] asserted that $\mathcal O(-m)$ is a quotient of
  $\mathcal O(-d)$ for $d\ge m\ge0$; this is **false** — a nonzero morphism of
  invertible sheaves on $\mathbb P^n$ is injective, never surjective off an
  isomorphism. Replaced by the correct route: [F8] now derives ampleness of
  $\mathcal O(1)$ from the identity as a closed H-very ample witness relative
  to $\operatorname{Spec}k$ ([[def-very-ample-invertible-sheaf-relative]],
  [[lem-very-ample-implies-ample]], quasi-compactness via the standard charts
  and [[cor-affine-scheme-quasi-compact]]), then applies
  [[lem-eventual-global-generation-coherent-twists]]; step 5.2 builds the
  effacing presentation $P=\mathcal O_X(-m)^{\oplus N}\to F$, $m\ge1$, from a
  $k$-basis of the finite-dimensional $\Gamma(X,F(m))$ (finite choice, ZF).
  (b) the planned supplier `cor-projective-cohomology-finite-dimensional-field`
  (batch 9) is still unauthored; the finiteness obligation [F14] is instead
  sourced to the authored [[lem-projective-coherent-cohomology-finite-and-vanishing]]
  ($H^q(\mathbb P^n_A,\mathcal G)$ a finite $A$-module), consumed in steps 5.2
  and 8.1. (c) step 3.2 carried a degree slip: the pairing identity with the
  cohomology connecting map must read
  $\langle\partial^j\alpha,\eta\rangle_F=\langle\alpha,\delta^{n-j-1}\eta\rangle_K$
  for $\eta\in H^{n-j-1}(X,F)$ (vacuous at $j=n$), and the derived projection is
  $\tilde\alpha[1]\circ\gamma$; the shift-consistent chain
  $\tilde\alpha[n-j]\circ\gamma[n-j-1]\circ\tilde\eta$ is now displayed. The
  compatibility of the two connecting maps with the derived triangle morphism
  remains a **local obligation with no library statement** and is flagged in
  step 9.1 and in the decision.
  Checks: reflow, precheck PASS, rendercheck OK, strict proof-contract
  (0 errors / 0 warnings for this item).
  Decision: **escalate** (receipt
  `research/frontier-36-complete-step3b-review-thm-serre-duality-projective-space-coherent-sheaves.json`,
  sha256 56fa02523d1386d6160db9c29c3496206e1eb35f71c71bec1749accb5ee895f8):
  the consumed suppliers [[lem-projective-coherent-cohomology-finite-and-vanishing]],
  [[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]],
  [[thm-cohomology-projective-space-twisting-sheaves]],
  [[thm-serre-duality-projective-space-twisting-sheaves]] and
  [[lem-projective-space-top-cohomology-residue-pairing]] all carry escalate
  decisions pending owner reconciliation, and the step-3.2 linking
  compatibility is unresolved.
  Manifest effect: deps 32; dependency level recomputed 15 -> 13 (cascade:
  rational-point-koszul-residue-normalization 16 -> 14, embedding-gysin-trace
  17 -> 16, serre-duality-locally-free 18 -> 17).

**Next action:** level 14 — `lem-smooth-projective-rational-point-koszul-residue-normalization`.

# Dispatch handoff (batch 16, pair `smooth-projective-serre-duality-and-flag-variety-line-bundles`)

## Completed in this dispatch
Authored and pipeline-checked (reflow, precheck PASS, rendercheck OK,
manifest deps synced, dependency levels recomputed, per-item strict
proof-contract 0 errors / 0 warnings):

- `lem-injective-modules-flasque-and-ext-of-structure-sheaf` — new local
  supplier on the assigned A page (authorized addition before its consumers);
  5.1-step proof, 16 citation entries, 8 boundary rows. No decision recorded:
  auditor-created item, exempt from the Step 3 self-review loop; the engine
  certifies it after the dispatch. Pair scope decision refreshed to
  *sufficient* (non-owner) with evidence.
- `thm-serre-duality-projective-space-coherent-sheaves` — authored with three
  local scaffold repairs: the false quotient claim in the old [F8] removed and
  replaced by ampleness of `O(1)` via the identity H-very ample witness plus
  eventual global generation and a finite-basis effacing presentation; the
  unauthored planned supplier `cor-projective-cohomology-finite-dimensional-field`
  no longer consumed — finiteness re-sourced to the authored
  `lem-projective-coherent-cohomology-finite-and-vanishing` (steps 5.2, 8.1);
  the step-3.2 degree slip corrected to
  `⟨∂^jα,η⟩_F = ⟨α,δ^{n-j-1}η⟩_K` with `α̃[1]∘γ`. 32 citation entries,
  15 step entries, 8 boundary rows. Decision: **escalate** (receipt
  `frontier-36-complete-step3b-review-thm-serre-duality-projective-space-coherent-sheaves.json`).
  Level recomputed 15 → 13 with cascade to three dependent items.

Items authored in the earlier part of this dispatch (already recorded above, all
escalated because they consume escalated in-run suppliers): the whole
flag-variety line-bundle block (`def-complex-semisimple-algebraic-group-…`
through `lem-minimal-parabolic-relative-canonical-line-bundle-root-weight`), the
projective-space Serre duality block
(`lem-projective-space-top-cohomology-residue-pairing`,
`thm-serre-duality-projective-space-twisting-sheaves`,
`lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`,
`lem-smooth-closed-immersion-regular-conormal-sequence`,
`lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`,
`lem-regular-immersion-koszul-ext-sheaf`,
`lem-regular-immersion-local-to-global-ext-collapse`), and the three B-page
examples. Pair status: **36 of 42 items authored; 6 unauthored** (below).

## Not authored (open, in recomputed level order)
- level 14 `lem-smooth-projective-rational-point-koszul-residue-normalization`
- level 16 `lem-relative-projective-line-degree-normal-form`
- level 16 `lem-smooth-projective-embedding-gysin-trace-compatibility`
- level 17 `lem-relative-projective-line-cohomology-and-apolarity`
- level 17 `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`
- level 18 `thm-relative-p1-line-bundle-cohomology-shift`

No item file, proof contract entry, coverage row or decision exists for these;
their promised statements remain exactly as in
`frontier-36-complete-batch-16.pages.json`. They were not started because the
remaining session budget was insufficient to derive and check their proofs to
the standard of the authored block; nothing about them is claimed complete.
The next author should begin at level 14, read the scaffolds and the statements
of `lem-smooth-closed-immersion-regular-conormal-sequence`,
`lem-regular-immersion-koszul-ext-sheaf`,
`lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`,
`lem-projective-space-top-cohomology-residue-pairing` and the newly authored
`thm-serre-duality-projective-space-coherent-sheaves`, and note that the last
four carry escalate decisions.

## Exact supplier-not-yet-authored flags (supplier ID → consumer ID, consuming step)
- `cor-projective-cohomology-finite-dimensional-field` (batch 9; its own
  supplier `thm-serre-finiteness-projective-cohomology` also unauthored) —
  **no longer consumed** by `thm-serre-duality-projective-space-coherent-sheaves`;
  the planned step-5.1/8.1 consumption was replaced by the local repair
  re-sourcing finiteness to `lem-projective-coherent-cohomology-finite-and-vanishing`.
  The missing corollary remains unsupplied for its other consumers outside this
  pair; the serial reconciler should drop this pair from its consumer list.
- `thm-cohomology-and-base-change` → `lem-relative-projective-line-degree-normal-form`
  and `lem-relative-projective-line-cohomology-and-apolarity`; consuming steps
  not yet written (item unauthored). Author the consumers with the obligation
  stated in plain text and record **escalate**.
- `lem-proper-flat-fp-cohomology-perfect-complex` → `lem-relative-projective-line-degree-normal-form`;
  same treatment.
- `lem-proper-cohomology-field-extension` → `lem-smooth-projective-embedding-gysin-trace-compatibility`;
  same treatment.

## Published concerns
None confirmed. The two defects found in this dispatch were in **unpublished
in-run drafts** and are fixed: the false quotient-of-line-bundles claim in the
old scaffold fact [F8] of `thm-serre-duality-projective-space-coherent-sheaves`
(confidence: certain — no nonzero morphism of invertible sheaves on `P^n` is
surjective unless it is an isomorphism) and the degree slip in its step 3.2
(confidence: high — the pairing degree forced by the Yoneda convention). The
step-3.2 identification of the two connecting maps with composition by the
derived triangle morphism is a genuine local obligation with no library
statement; it is flagged in the item and in its decision. No published item was
edited.

## Checks actually run
- `tools/reflow.mts`, `tools/precheck.mts`, `tools/rendercheck.mjs` — per
  authored item; all PASS/OK.
- `tools/proof-contract.mjs … --strict --items <id>` — 0 errors / 0 warnings
  for each authored item.
- `tools/item-dependency-levels.mjs check --run frontier-36-complete` — the
  batch-16 rows are consistent (levels recomputed by the shared
  `fixlevels` path); the run-wide check currently fails only on the unrelated
  Gauss–Bonnet pair (stale levels there, another group's file — not touched).
- `tools/step3-decisions.mjs check --run frontier-36-complete --phase scope` —
  this pair is not in the outstanding scope work list, so its scope decision is
  current.

## Batch-close obligations still open
- Create `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`
  (39 items) and `…-examples.md` (3 items) with bodies; the pair's page files do
  not exist yet and must not be created until the 6 items above are authored.
- Refresh the pair's coverage rows for the 6 new items and add their cross-batch
  dependency rows; keep sibling rows intact.
- Re-run explicit-path precheck/rendercheck on both page files,
  `content-policy --manifest-only`, the strict proof-contract over the full
  batch scope, `item-dependency-levels check`, and
  `validate-plan research/plan-spec.json` — report the pre-splice plan mismatch
  (the plan's item lists for this pair are empty) for Step 4.

## Scaffold audit notes for the six unauthored items (statements only; no proof claimed)
Reviewed against the cited suppliers on disk and standard references; these are
review notes, not acceptance, and each item still needs its proof derived and
contract written.

- `lem-smooth-projective-rational-point-koszul-residue-normalization` (14):
  statement is the local form of clause 1 of
  `def-smooth-projective-dualizing-line-bundle-and-trace`. All seven deps exist
  on disk, but four of them (`lem-regular-immersion-koszul-ext-sheaf`,
  `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`,
  `lem-projective-space-top-cohomology-residue-pairing`,
  `thm-serre-duality-projective-space-coherent-sheaves`) carry escalate
  decisions, so its decision will be escalate regardless. The proof must fix
  the meaning of "local Koszul class normalized by dt_1∧…∧dt_n" with an
  explicit local duality convention and must check the ordered Koszul sign and
  the shuffle sign in the (f,t) splitting; the scaffold strategy states the
  right plan but leaves both conventions open. Confidence that the statement is
  true: high (it is the standard residue normalization); confidence in a
  sign-free formalization without a careful Stacks 15.4-15.5 reading: moderate.
- `lem-relative-projective-line-degree-normal-form` (16): missing suppliers
  `lem-proper-flat-fp-cohomology-perfect-complex` and
  `thm-cohomology-and-base-change`; author as a provisional consumer with both
  flagged in the proof text and an escalated decision. Statement is the
  standard normal form on a trivializing chart and is true; note the base is
  allowed to be arbitrary (the scaffold rightly avoids Pic(A[t]) = Pic(A)).
- `lem-smooth-projective-embedding-gysin-trace-compatibility` (16): missing
  suppliers `lem-proper-cohomology-field-extension` and the level-14 lemma
  above. The statement is the embedding-independence clause of the normalized
  trace (clause 1 of the definition); the strategy's automorphism-of-ω_X
  argument needs the top-degree pairing to be nondegenerate first, i.e. the
  level-17 theorem's perfectness for E = ω_X, which is not available before it
  — the author will need either to reorder the argument or to add the
  nondegeneracy statement locally. Flagged as a real authoring hazard.
- `lem-relative-projective-line-cohomology-and-apolarity` (17): missing
  suppliers `thm-cohomology-and-base-change` and the level-16 normal form.
  Statement checks out fiberwise for n ≥ −1: R^q(O(n)) for q > 0 vanishes iff
  n ≥ −1, and O(−n−2) has exactly R^1 nonzero; for n = −1 both sides of the
  apolarity isomorphism vanish. The apolarity normalization (SL₂-invariant)
  is a genuine construction that must be pinned to a specific nonzero element,
  not merely to "invariance".
- `thm-serre-duality-smooth-projective-variety-locally-free-sheaves` (17):
  missing supplier `lem-smooth-projective-embedding-gysin-trace-compatibility`.
  Statement matches the standard theorem for E finite locally free; the trace
  must be shown to exist with both clauses of the definition, and disconnected
  X (componentwise normalization) and n = 0 need explicit boundary rows.
- `thm-relative-p1-line-bundle-cohomology-shift` (18): missing supplier the
  level-17 apolarity lemma. Statement is the Leray consequence of the two
  vanishing rows plus the apolarity isomorphism; true as stated, including
  n = −1 where all four groups vanish.

## Addendum: run-level checks at handoff
- `step3-decisions check --phase final`: 951 items, 413 run-wide work
  entries, **none for this pair** — every authored item of the pair carries a
  current, hash-valid decision receipt (25 escalate, 10 accept, 1
  auditor-created with no receipt by policy). The 6 unauthored items are not
  listed because they have no item file yet.
- `validate-plan research/plan-spec.json`: OK overall; the two pages of this
  pair are reported with **0 items** (lines 510.0161 and 510.0162 of the plan
  output) — this is the expected pre-splice state and is reported here for
  Step 4, not hidden.
- `item-dependency-levels check --run frontier-36-complete`: batch-16 rows
  consistent; the only failing rows belong to the unrelated
  `gauss-bonnet-*` pair (stale levels there), which this group must not edit.
