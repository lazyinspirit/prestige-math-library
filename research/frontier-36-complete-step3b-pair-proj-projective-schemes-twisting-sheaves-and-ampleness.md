# Step 3b author checkpoint — Proj, twisting sheaves and ampleness

Run `frontier-36-complete`, batch 8. Owned pages are
`proj-projective-schemes-twisting-sheaves-and-ampleness` (A, 38 items) and
`proj-projective-schemes-twisting-sheaves-and-ampleness-examples` (B, 10
items). Dispatch order is the one recorded in
`research/frontier-36-complete-step3b-pair-proj-projective-schemes-twisting-sheaves-and-ampleness-4253bca7db497887.task.md`
(levels 0 to 11; ties by page order and item ID).

## Inputs read before authoring

- `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/alpha.md`,
  `briefs/tasks/frontier-dependency-ledger.md`, `briefs/step3-scope.md`.
- Batch-8 scaffold manifest, coverage, notes and cross-batch dependency input;
  the Step-3a scope review and `sufficient` receipt; the owner authoring
  direction `research/frontier-36-complete-owner-authoring-direction.md`.
- The AV-19 design at `research/plan-algebraic-geometry-track.md` and the
  current `research/plan-spec.json` rows 366.077/366.078.
- Supplier interfaces: authored batch-5 items (finite/proper/projective
  morphisms) and the batch-7 scaffold statements for the sheaf machinery
  recorded in `research/frontier-36-complete-batch-8.cross-batch-dependencies.json`.

## Binding constraints retained

- Do not change the scaffold inventory, titles, kinds or manifest statements:
  the Step-3a scope hash covers exactly those fields.
- Preserve other pairs in shared batch files (batch 8 contains only this pair).
- Unfinished suppliers are flagged here with exact consumer IDs and proof
  steps; their consumer decisions stay escalated until reconciled.
- AC is inherited through the published/in-run scheme interfaces; each item
  states the inheritance and the exact use.

## Item checkpoints

(one block per item, in dispatch order; appended as each item is authored)

### Level 0-3 (audited, authored by the earlier attempt of this dispatch; precheck clean)
- `def-proj-graded-ring-points`, `def-shifted-graded-module`, `def-standard-open-proj`:
  definitions with remarks; statements/frontmatter match the frozen scaffold.
- `lem-proj-prime-localization-correspondence` and `thm-proj-structure-sheaf-scheme`:
  proofs present, `precheck` PASS (direct). Full re-audit pending at decision time
  (see "Open obligations"): their item files cite exactly the scaffold deps plus
  published prerequisites; no decision receipt exists yet, so both still need a
  recorded Step-3b decision.

### Level 4 (authored this dispatch, precheck/rendercheck clean)
- `def-ample-invertible-sheaf`: definition (quasi-compact + affine nonvanishing
  loci of positive powers; empty scheme allowed); remarks record that only
  positive powers occur and point forward to `thm-serre-criterion-ampleness`.
- `def-associated-sheaf-graded-module-proj`: definition of `tilde M` by gluing
  the affine associated sheaves of `M_(f)`; well-definedness paragraph proves the
  overlap identification `(M_(f))_{tau_{fg}} = M_(fg)`; functoriality for
  degree-zero maps. Deps: `thm-proj-structure-sheaf-scheme` (authored),
  `thm-associated-module-sheaf-exists` (batch 7, UNWRITTEN at authoring time).
- `def-globally-generated-sheaf`: evaluation map `Gamma(X,F) tensor_Z O_X -> F`;
  remark proves that on a quasi-compact scheme global generation of an
  invertible sheaf is witnessed by finitely many sections.
- `def-very-ample-invertible-sheaf-relative`: defines `O(1)` on `P^n_S` by
  gluing chart frames with transitions `e_i = x^{(i)}_j e_j` (cocycle verified),
  then H-very ampleness via a quasi-compact `S`-immersion; remark proves proper
  sources force closedness using `lem-proper-source-to-separated-target-proper`,
  `thm-proper-morphism-closed-image`, `lem-immersion-with-closed-image`.
- `lem-section-nonvanishing-affine-intersection`: full proof of the affine
  algebra statement via `B = T_R(N)/(s-1)` (Stacks 01PV argument, read at the
  live tag page on 2026-09-28); steps 1.1-6.1 canonical; precheck PASS.
- `lem-standard-opens-proj-affine`: short proof read off
  `thm-proj-structure-sheaf-scheme`; empty/nilpotent chart included; PASS.

### Level 5 (authored this dispatch)
- `def-relatively-ample-invertible-sheaf`: definition of `f`-ampleness over
  every affine base open; well-posedness (quasi-compactness of `f^{-1}(U)`)
  recorded; remarks for affine base, nonaffine base, and the link to H-very
  ampleness.
- `def-twisting-sheaf-proj`: `O_X(n) = tilde(S(n))`, sections `S(n)_(f)`,
  multiplication maps `O(m) tensor O(n) -> O(m+n)`, explicit non-claim of
  invertibility without degree-one generation.
- `lem-ample-pullback-finite-morphism`: proof via pulled-back nonvanishing loci;
  PASS.
- `lem-ample-stable-positive-power`: iff proof via `X_{s^m} = X_s`; PASS.

- `lem-extend-sections-from-nonvanishing-open` (L5, authored): proof via finite
  trivialising affine cover, chartwise injectivity by clearing denominators and
  gluing by quasi-separated overlap correction (Stacks 01PW argument, live tag
  read 2026-09-28); precheck PASS after canonical step renumbering; rendercheck
  clean. Suppliers still unwritten at authoring time:
  `thm-affine-quasi-coherent-equivalence` (used in step 2.1/2.2 and [F3]) — decision escalated.
- `lem-proj-associated-sheaf-basic-sections` (L5, authored): chartwise
  identification `Γ(D_+(f), tilde M)=M_(f)`, restriction via localisation at
  τ_{f,g}, functoriality, quasi-coherence by locality; precheck PASS,
  rendercheck clean. Deps all present as items (`lem-associated-sheaf-sections-basic-open`,
  `def-quasi-coherent-module-scheme` now authored by batch 7).
- `thm-projective-space-as-proj` (L5, authored): chart rings `S_(x_i)=A[x^(i)]`,
  overlap `D_+(x_i x_j)` compared with the published `P^n_A` transition
  formulas, base change through `thm-affine-fibre-product-tensor-ring`; n=0
  boundary; precheck PASS, rendercheck clean.
- `lem-relative-proj-affine-local-gluing` (L5, authored): local model
  `Γ(V,A)=B⊗_R C`, chart intersection via fibre product, chartwise isomorphism,
  triple-overlap cocycle. Unwritten suppliers flagged:
  `thm-affine-quasi-coherent-equivalence`, `lem-associated-sheaf-restriction-affine-open`
  (used in steps 1.1 / [F1], [F2]) — decision escalated.

### Level 6 (authored this dispatch)
- `def-relative-proj-quasi-coherent-graded-algebra`, `lem-proj-irrelevant-and-nilpotent-boundaries` (PASS; suppliers `lem-proj-prime-localization-correspondence`, `cor-ac-iff-zorn`, `thm-zorn`, `cor-maximal-ideals-are-prime` all present),
  `lem-proj-veronese-invariance` (PASS), `lem-projective-space-saturation-local-criterion` (PASS),
  `lem-very-ample-implies-ample` (PASS), `thm-twisting-sheaf-invertible-standard-graded` (PASS),
  B: `ex-proj-polynomial-ring-projective-space` (PASS).
- Note: `thm-projective-space-as-proj` and `lem-relative-proj-affine-local-gluing` were authored in
  the level-5 block above (dispatch order places the latter last in level 5).
- `lem-relative-proj-affine-local-gluing` open obligation: suppliers
  `thm-affine-quasi-coherent-equivalence`, `lem-associated-sheaf-restriction-affine-open`
  (used in steps 1.1 and facts [F1],[F2]) remain UNWRITTEN at authoring time — decision escalated.
- `lem-extend-sections-from-nonvanishing-open` open obligation: `thm-affine-quasi-coherent-equivalence`
  (used in steps 2.1, 2.2 and fact [F3]) UNWRITTEN — decision escalated.

### Level 7 (authored this dispatch)
- `def-section-zero-scheme-invertible-sheaf` (definition; open obligation: `lem-invertible-sheaf-dual-tensor-inverse`,
  `thm-kernels-cokernels-qc-modules` UNWRITTEN, used in the definition body — decision escalated);
- `rem-proj-does-not-recover-graded-ring-literally`; `thm-closed-subschemes-projective-space-homogeneous-ideals` (PASS);
  `thm-line-bundle-sections-define-projective-map` (PASS); `thm-relative-proj-base-change` (PASS; open obligation:
  `lem-pullback-qc-module-quasi-coherent` UNWRITTEN, used in step 3.2 and [F3] — decision escalated);
- B: `ex-twisting-sheaf-projective-line-transitions`, `cex-o-minus-one-no-global-generators`,
  `ex-proj-empty-irrelevant-nilpotent` (all PASS).
- Toolchain warning recorded: `/tmp/b8-singleline.py` and the first `b8-canon.py` version dropped/mangled
  continuation lines on split display math; all items must be written with single-line steps. `b8-canon.py`
  now preserves blocks and relabels/reorders canonically; always re-read the final proof text.

### Repair: O(1) transition direction (before L8 authoring)
Confirmed defect in the draft `def-very-ample-invertible-sheaf-relative`: the
chart gluing was written `e_i -> x^{(i)}_j e_j`, the reciprocal of the standard
convention `e_j = x^{(i)}_j e_i` used by the published
`lem-line-bundles-on-projective-three-space-restrict-by-degree` (line 41:
`e_j=(x_j/x_i)^n e_i`) and `lem-uniqueness-of-twists-on-the-projective-line`
[F2], and required by the Proj computation `O(1)=tilde(S(1))` with frame `x_i`.
With the old direction the "coordinate sections" of
`thm-projective-map-line-bundle-data-equivalence` [F1] failed to glue
(`x^{(i)}_je_i = (x^{(i)}_j)^2 e_j != e_j`) and `lem-very-ample-implies-ample`
step 1.1 (forms glue) failed by the same factor. Repaired all four files:
`def-very-ample-invertible-sheaf-relative` (map now `e_i -> x^{(j)}_i e_j`,
triple-overlap identity now `x^{(j)}_i x^{(k)}_j = x^{(k)}_i`),
`lem-very-ample-implies-ample` ([F1], step 1.1),
`thm-line-bundle-sections-define-projective-map` ([F3], step 4.1),
`thm-projective-map-line-bundle-data-equivalence` ([F1]).
`precheck` PASS on the three proof items; def has no proof; `rendercheck`
clean on all four. Published outliers agree with the repaired direction; no
published repair needed. No decision receipts recorded yet for these four
(refresh at decision time).

### Repair: truncated proof steps from the earlier toolchain (levels 5–8)
Three authored items had a proof step whose tail was dropped by the earlier
canonicaliser (`... and` / `... define a morphism` / `... we compare`):
`thm-twisting-sheaf-invertible-standard-graded` 1.2 (frame `x^n` on `D_+(x)`
now proved to generate and be injective), `thm-line-bundle-sections-define-projective-map`
1.2 (now defines `phi_i: X_{s_i} -> U_i` with `x^{(i)}_j o phi_i = s_j/s_i`),
`lem-proj-veronese-invariance` 1.2 (now proves `S_(f) = S^{(d)}_{(f^d)}` inside
`S[f^-1]`, renumbered by `b8-canon.py` to 2.1 with later steps shifted;
duplicate `\qed` removed). `precheck` PASS and `rendercheck` clean on all three.
Two other flagged steps (`lem-ample-pullback-finite-morphism` 1.2,
`thm-segre-line-bundle-external-tensor` 1.2) were checked and are intact —
their displays survived as continuation lines.

### Level 8 checkpoint (authored)
- `thm-veronese-pullback-twist`: monomial sections generate `O(d)` (frame
  `x_i^d` on `U_i`), universal property gives `nu_d` and
  `nu_d^*O(1) = O(d)`; chartwise over affine `T`: ring map
  `A[y_m/y_{i^d}] -> A[x^(i)]` hits `x^(i)_l` via `u_{i^{d-1}l}`, so
  `U_i -> V_{i^d}` is a closed immersion (local on target over affine base
  cover); `nu_d` is then an immersion into `W = union V_{i^d}` and proper by
  proper-source/separated-target, hence a closed immersion. Cases d=1, n=0,
  S empty checked in step 7.1. precheck PASS, rendercheck clean. Local
  suppliers: none new. Deps include the published properness package
  (`thm-projective-space-proper-over-base`, `lem-proper-source-to-separated-target-proper`,
  `thm-proper-morphism-closed-image`) and the L5-L7 in-pair universal property.

### Level 8 checkpoint (B page, authored)
- `cex-proj-graded-ring-not-faithful`: S=k[x,y] (deg 1) vs T=S^(2)=
  k[x^2,xy,y^2]; Veronese invariance d=2 gives Proj S = Proj T with
  O_T(1) <-> O_S(2); graded isomorphism would match degree-1 parts, but
  dim S_1 = 2, dim T_1 = 3. PASS, rendercheck clean.
- `ex-proj-quotient-projective-hypersurface`: from
  `thm-closed-subschemes-projective-space-homogeneous-ideals`, Proj(k[x]/(F))
  = V_+(F) with chart ring k[x_a/x_i]/(F/x_i^e); degenerate cases (n=0, F a
  coordinate power) in step 3.1. PASS, rendercheck clean.
- `ex-zero-section-empty-effective-divisor`: ai-generated statement (leaf
  example, generation.role example, no consumers); c_1 = id, I_1 = O_X,
  Z(1) = Spec(A/(1)) = empty; empty divisor via the definition's criterion.
  PASS, rendercheck clean.
- All three B items preserve the B-leaf rules (no A item depends on them).

### Level 9 (authored this session)
- `def-projective-bundle-scheme` was authored in the previous session block
  (definition; open obligation: `def-symmetric-algebra-qc-module`,
  `lem-symmetric-algebra-qc-and-base-change` unwritten — decision escalated).
- `thm-ample-powers-very-ample-proper-base` (A, authored this session): proof
  establishes that X is quasi-compact (finite type over Noetherian S), that X
  is quasi-separated (diagonal base-change argument, `lem-diagonal-quasi-compact-iff-quasi-separated`
  criterion via the scheme definition), that X is locally Noetherian and hence
  Noetherian (base change to Noetherian affine charts of S;
  `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`), the affine
  basis property for positive-degree section opens (extension lemma
  `lem-extend-sections-from-nonvanishing-open` + `lem-distinguished-open-refinement-at-a-point`),
  Serre's bound `thm-serre-criterion-ampleness` for global generation of all
  large twists, the Veronese-style chart cover with denominators cleared to a
  common degree N giving j: X → P^m_S with j^*O(1)=L^N and chartwise closed
  immersions, the Segre/product construction giving i: X → P^{k-1}_S with
  i^*O(1)=L^d and i=σ∘(j,j'), the immersion property of (j,j') via
  graph/base-change, the derivations "composite of closed immersions is closed"
  and "immersion ∘ closed immersion is an immersion", and closedness of i by
  properness. precheck PASS (direct), rendercheck clean.
  **Open obligation:** step 3.1 (Serre's bound) consumes
  `thm-serre-criterion-ampleness`, whose own decision is escalated pending the
  unwritten batch-7 supplier `thm-coherent-sheaves-abelian-noetherian-scheme`
  (used there in the "coherent = finite type quasi-coherent on a locally
  Noetherian scheme" identification); this item's decision is therefore escalated
  with consuming step 3.1 and fact [F4]. Recheck when batch 7 lands.
  Stacks source: Lemma 29.40.3 (tag 01VS, live page read 2026-09-29); the
  closedness strengthening uses the library's proper/immersion package.

### Level 9 checkpoint (B page, authored this session)
- `cex-globally-generated-not-very-ample`: proof computes
  `Gamma(P^1_k, O)=k` by gluing the two standard charts (`k[t] cap k[t^{-1}] = k`
  in `k[t,t^{-1}]`), hence every global section of `O` is constant; the data
  equivalence turns any hypothetical immersion `i` with `i^*O(1) = O` into
  constant data `(O; c_j . 1)`, some `c_j != 0`, so `i^{-1}(D_+(x_j)) = X`;
  the chart coordinates `x^{(j)}_l o i = c_l/c_j` are constants, so by
  `thm-morphisms-into-affine-scheme-global-sections` the map
  `X -> U_j = Spec k[x^{(j)}]` is the composite of the structure morphism with
  the k-point, hence constant, contradicting injectivity of the immersion
  (`X` has two points in `U_0 = Spec k[t]`). Also records the `n=0` reading:
  `(O;1)` corresponds to the constant structure morphism `X -> P^0_k`.
  Canonical steps 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1 (the
  canonicaliser groups by citation layers; prose references refreshed).
  precheck PASS (direct); rendercheck clean. Deps all present on disk,
  including published `thm-morphisms-into-affine-scheme-global-sections`.
  Decision pending at decision time.

### Level 9 checkpoint (B page, second item, authored this session)
- `ex-line-bundle-map-conic-veronese`: Veronese `nu_2` for `n=1, d=2`
  (source `P^1_k`, target `P^2_k` with coordinates `Z_0=y_(2,0)`,
  `Z_1=y_(1,1)`, `Z_2=y_(0,2)`); chart ratios `Z_1/Z_0 = x_1/x_0`,
  `Z_2/Z_0 = (x_1/x_0)^2` etc.; chart rings of `V_+(Z_0Z_2-Z_1^2)` computed
  as `k[u,v]/(v-u^2)`, `k[u,v]/(uv-1)`, `k[a,b]/(a-b^2)` and matched with the
  kernels of the chart ring maps; conclusion: image = scheme-theoretic image
  = the conic, uniformly in all characteristics. Canonical steps 1.1, 1.2,
  1.3, 2.1, 3.1, 4.1 (layer packing; prose refs refreshed). precheck PASS
  (direct); rendercheck clean. Deps all present; added
  `thm-closed-subschemes-projective-space-homogeneous-ideals` as a local extra
  supplier (authored in this pair, L7).

### Level 10 checkpoint (A page, authored this session)
- `thm-projective-bundle-represents-line-quotients`: proof defines
  `Phi_T(h) = [h^*(pi^*E -> O(1))]` (well defined: `h^*pi^*E = g^*E`,
  `h^*O(1)` invertible, pullback of the quotient surjective by the local
  frame computation), reduces to trivialising affine charts `U_i` of `S`
  (`E|_{U_i} = O^{r_i}`) where the local model `P_i = P^{r-1}_{U_i}` and the
  absolute data equivalence give a bijection with surjections (rank-zero
  chart: `P_U(0) = empty`, both sides singletons on the empty piece), then
  glues: injectivity of `Phi_T` from local injectivity + morphism gluing;
  surjectivity via local inverses `h_i`, agreement on overlaps by local
  injectivity, gluing of the `h_i`, and gluing of the conjugating
  isomorphisms `alpha_i` (uniqueness because the surjection generates).
  Universal element: `Phi(id) = q`. Naturality in `T` by pullback
  functoriality; base-change compatibility from the relative Proj/Sym base
  change. Steps 1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1, 5.1, 6.1 (canonical).
  precheck PASS (direct); rendercheck clean. Deps: all present on disk,
  including the now-authored `lem-pullback-qc-module-quasi-coherent` (batch 7)
  and `def-symmetric-algebra-qc-module`. `lem-symmetric-algebra-qc-and-base-change`
  remains missing (needed only by `def-projective-bundle-scheme`'s base-change
  remark; this theorem's proof cites the remark only in the closing paragraph,
  for base-change naturality — flag at decision time if the supplier is still
  unwritten).

### Level 11 checkpoint (B page, authored this session)
- `ex-projective-bundle-trivial-rank-r`: `Sym(O_S^r) = O_S[T_1..T_r]`;
  `P_S(O_S^r) ≅ P^{r-1}_S` by the frame description on all of `S`
  (tautological quotient = standard coordinate quotient); `r=1`:
  `P_S(O_S) = P^0_S = S`, `O(1)` free of rank one with frame the coordinate
  section, universal quotient the identity; `r=0`: `P_S(0) = ∅`, consistent
  with the representing property. Canonical steps 1.1, 1.2, 2.1, 3.1, 4.1.
  precheck PASS (direct); rendercheck clean.

## Decision recording and final verification (2026-09-29)

### Recorded item decisions (48/48, `tools/step3-decisions.mjs record-item`)

- **repaired (21):** `lem-proj-prime-localization-correspondence`,
  `def-very-ample-invertible-sheaf-relative`,
  `lem-section-nonvanishing-affine-intersection`,
  `lem-proj-associated-sheaf-basic-sections`,
  `lem-proj-irrelevant-and-nilpotent-boundaries`,
  `thm-twisting-sheaf-invertible-standard-graded`, `lem-proj-veronese-invariance`,
  `lem-projective-space-saturation-local-criterion`,
  `def-section-zero-scheme-invertible-sheaf`, `lem-very-ample-implies-ample`,
  `thm-closed-subschemes-projective-space-homogeneous-ideals`,
  `thm-relative-proj-base-change`, `thm-line-bundle-sections-define-projective-map`,
  `thm-projective-map-line-bundle-data-equivalence`,
  `lem-projective-morphism-relative-proj-presentation`,
  `thm-veronese-pullback-twist`, `def-projective-bundle-scheme`,
  `ex-proj-empty-irrelevant-nilpotent`, `ex-twisting-sheaf-projective-line-transitions`,
  `ex-zero-section-empty-effective-divisor`, `cex-o-minus-one-no-global-generators`.
- **accept (27):** `def-proj-graded-ring-points`, `def-shifted-graded-module`,
  `def-standard-open-proj`, `thm-proj-structure-sheaf-scheme`,
  `lem-standard-opens-proj-affine`, `def-associated-sheaf-graded-module-proj`,
  `def-ample-invertible-sheaf`, `def-globally-generated-sheaf`,
  `def-twisting-sheaf-proj`, `thm-projective-space-as-proj`,
  `lem-relative-proj-affine-local-gluing`, `def-relatively-ample-invertible-sheaf`,
  `lem-extend-sections-from-nonvanishing-open`, `lem-ample-stable-positive-power`,
  `lem-ample-pullback-finite-morphism`, `def-relative-proj-quasi-coherent-graded-algebra`,
  `rem-proj-does-not-recover-graded-ring-literally`, `thm-serre-criterion-ampleness`,
  `thm-segre-line-bundle-external-tensor`, `thm-ample-powers-very-ample-proper-base`,
  `thm-projective-bundle-represents-line-quotients`, `ex-proj-polynomial-ring-projective-space`,
  `ex-proj-quotient-projective-hypersurface`, `cex-proj-graded-ring-not-faithful`,
  `ex-line-bundle-map-conic-veronese`, `cex-globally-generated-not-very-ample`,
  `ex-projective-bundle-trivial-rank-r`.
- **escalate: none.** Every in-run supplier that was unwritten at authoring time
  is now authored and registered in its batch (5 or 7) with a proof body, and the
  supplier claim was compared with the actual consumer use before closing.
  In particular the last missing supplier, `lem-symmetric-algebra-qc-and-base-change`
  (batch 7), landed before decisions: `def-projective-bundle-scheme` now cites it
  in the dependency list and in the rewritten "Base-change supplier" remark
  (the earlier flag is removed), and `thm-projective-bundle-represents-line-quotients`
  uses it in the closing base-change-naturality paragraph
  (`f^*Sym(F)=Sym(f^*F)`). Both were recorded as `repaired`/`accept` only after
  that reconciliation.
- Two decisions cover repairs made at decision time: `def-projective-bundle-scheme`
  (the stale "not yet authored" remark) and `lem-section-nonvanishing-affine-intersection`
  (removal of the unused, nowhere-existing frontmatter dep
  `def-tensor-algebra-and-symmetric-algebra-of-a-module`; the tensor-algebra
  base-change algebra facts are proved inline in [F3]).
- Post-decision `check --phase final`: 0 of the 48 batch-8 items remain open
  (the run as a whole is still open because other batches are in flight).

### Cross-batch dependency input

- `research/frontier-36-complete-batch-8.cross-batch-dependencies.json` now
  reviews all 63 declared cross-batch edges whose consumer is in batch 8
  (61 item edges + 2 page edges): **61 item rows `verified`**, each naming the
  supplier's batch/kind/claim and the consumer's citation site (fact, step,
  definition or availability-only declaration); **2 page rows `open`** because
  the supplier pages are still in-run drafts but every load-bearing item edge
  from them into batch 8 is individually authored and verified.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete`
  run after the input rewrite; the derived ledger collects 63/63 reviewed
  batch-8 edges with no orphaned rows.

### Verification battery actually run (after the last content edit)

- explicit-path precheck on all 48 items: 35 proof-bearing items checked,
  0 failing.
- rendercheck on 48 items + both page files: OK for 50 files.
- `content-policy` on `frontier-36-complete-batch-8.pages.json`: 48 scoped
  items, 0 errors, 0 warnings.
- `proof-contract --strict` on `frontier-36-complete-batch-8.proof-contracts.json`:
  0 errors, 0 warnings, 48/48 items.
- `item-dependency-levels check --run frontier-36-complete`: 947 items,
  60 pages, maximum level 18, clean. (A transient error for the sibling batch-9
  item `cex-fixed-affine-cover-nonseparated-intersections` was observed while
  that pair was mid-edit and cleared on the final run; it was never ours.)
- `validate-plan research/plan-spec.json`: declared page order acyclic and
  consistent; 378 planned pages still carry no item list, including pre-splice
  rows 366.077/366.078 — Step 4 must splice the 38 A + 10 B item ids from the
  batch-8 manifest. The A-page `requires` list (4 entries) matches the plan;
  `fibre-products-base-change-and-scheme-theoretic-fibres` and
  `rees-modules-artin-rees-and-hilbert-samuel-theory` are published, the other
  two are the in-run pages noted above.
- `coverage-checklist` on `frontier-36-complete-batch-8.coverage.json`:
  1 page, 32 harvested rows, 0 errors, 0 warnings (coverage not otherwise
  changed; the A/B inventory matches the frozen scaffold manifest exactly).

### Published concerns carried forward (for the canonical ledger; not raced here)

1. `thm-affine-closed-immersions-quotient-rings` (published). Proof step 1.1
   delegates its whole content to Stacks Tag 01IN, whose proof invokes later
   machinery (the affine quasi-coherent equivalence); the concern is
   ordering-independence of the published proof, **not** a confirmed false
   statement. Confidence: recorded by the Step-1 scaffold audit and re-read
   here. **This item is in the transitive closure** of four accepted batch-8
   items (`thm-ample-powers-very-ample-proper-base` [F9] directly, and
   `lem-very-ample-implies-ample`, `thm-veronese-pullback-twist`,
   `ex-line-bundle-map-conic-veronese` transitively) — in every case the same
   affine-quotient dictionary is also supplied by the authored in-run
   `lem-closed-immersion-affine-quotient-and-base-change`, so the accepted proofs
   do not rest on the flagged proof alone. Repair strategy: verify the batch-5
   lemma at its own review, then relink/repair the published proof and audit its
   consumers; the serial reconciler updates
   `published-consumer-supplier-ledger.md`.
2. `def-quasi-coherent-ideal-sheaf` (published). Well-definedness gap: it
   invokes an associated module sheaf that it does not declare. The batch-7
   suppliers `def-associated-sheaf-module-affine-scheme` and
   `thm-associated-module-sheaf-exists` are now authored and can supply the
   missing dependency after review. Not on this pair's proof path (absent from
   all 48 closures). Confidence: scaffold-recorded, re-verified as absent here.
3. `thm-quasi-coherent-ideal-closed-subscheme-correspondence` (published).
   Proof inherits the same earlier-order affine-quotient gap; the batch-7
   `thm-qc-ideal-closed-subscheme-correspondence-complete` (level 5) is now
   authored as the repair supplier. Not on this pair's proof path.

### Open obligations at handoff

- The two page-level prerequisite rows stay `open` until batches 5 and 7 land
  their pages; recheck at Step 4/8. All item-level edges are closed.
- Pre-splice plan rows 366.077/366.078 carry no item ids; Step 4 must splice
  them from the batch-8 manifest (38 A + 10 B).
- No escalations, no owner-held items and no unresolved suppliers remain for
  this pair. Local suppliers added during this dispatch: **none** (the 48 items
  are the frozen scaffold inventory; no pairs added, no promised claim dropped).
- Both library page files for this pair were written during this dispatch
  (they did not exist before) and are rendercheck clean.

### Concurrent in-run repair reconciliation

A second live session of this same dispatch (the pair is listed as in flight in
`.autopilot/status.md`) continued repairing items while decisions were being
recorded. Three edits landed after the first decision pass and were re-audited
and re-recorded against the current bytes:

1. `thm-ample-powers-very-ample-proper-base`: the batch-8 manifest deps were
   extended with the two published items `thm-noetherian-ring-has-noetherian-spectrum`
   and `lem-noetherian-subspaces-and-compact-opens`, and the proof was rewritten
   to steps 1.1-16.1 with facts up to [F16] (quasi-compactness 1.1, local
   Noetherianity 1.2, quasi-separatedness and Noetherianity via [F16] in 2.1/2.2,
   basis of section opens 3.1, Serre bound 3.2, adapted cover 4.1, uniform
   generation 4.2, chart rings 5.1/5.2, denominators 6.1, common degree 7.1,
   j and i 8.1/8.2, chartwise closed immersions and Segre 9.1/9.2, immersion
   and properness 10.1-15.1, conclusion 16.1). The batch-8 proof-contract entry
   was regenerated (citations/derivations) and its boundary evidence re-anchored
   to steps 3.2/4.2/7.1/8.1/16.1. Strict contract 0 errors, precheck PASS,
   rendercheck clean, content-policy clean; decision re-recorded as `repaired`.
2. `lem-extend-sections-from-nonvanishing-open`: the statement was extended
   with the equivalent graded-localisation isomorphism and the proof rewritten
   (steps 1.1-7.1: trivialising cover, chartwise identification, local
   extensions, injectivity via the localisation criterion, quasi-compact-open
   consequence, overlap correction, gluing; empty cases and inherited AC at
   7.1). Precheck PASS, rendercheck clean, strict contract 0 errors; decision
   re-recorded as `repaired`.
3. `thm-serre-criterion-ampleness`: content unchanged; re-audited because the
   revised extension lemma sits in its closure and its [F4] uses exactly part
   (1) of that lemma. Precheck PASS, rendercheck clean, strict contract
   0 errors; decision re-recorded as `accept`.

No other pair item or page changed in that window. Residual risk: if the
concurrent session edits an input again, the affected receipt is invalidated by
design and needs a fresh audit at the engine gate; the final
`check --phase final` pass after this reconciliation shows 0 of the 48 batch-8
items open.

Final decision tally after reconciliation: **repaired 23, accept 25, escalate 0**
(the first-pass list above is superseded: `thm-ample-powers-very-ample-proper-base`
and `lem-extend-sections-from-nonvanishing-open` joined the repaired set;
`thm-serre-criterion-ampleness` stays accepted).
