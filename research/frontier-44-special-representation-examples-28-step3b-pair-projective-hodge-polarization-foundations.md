# Step 3b pair report — `projective-hodge-polarization-foundations`

- Run: `frontier-44-special-representation-examples-28`; role `alpha-high`; label
  `step3b-pair-projective-hodge-polarization-foundations-11bb0d0fceb7a3a7`.
- A page: `projective-hodge-polarization-foundations` (order 1811, category
  `complex-analysis`); B page: `projective-hodge-polarization-foundations-examples`
  (order 1815). Batch: 39 (this pair alone; no sibling rows inside the batch files).
- Owned IDs (7), in the dispatch's audit/author order (dependency level, page order,
  item ID): `def-morphisms-and-polarizability-of-rational-hodge-structures` (3);
  `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures` (4);
  `ex-primitive-one-forms-on-a-hermitian-two-plane` (4, B page);
  `lem-smooth-projective-analytification-has-rational-kahler-polarization` (9);
  `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` (11);
  `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` (12);
  `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties` (13).
- All seven item files and both page files are absent at entry; the scaffold lives in
  `research/frontier-44-special-representation-examples-28-batch-39.pages.json` plus
  the five carrier drafts under `research/…-klr-foundation-hodge-drafts/`.

## Open obligations at entry

1. **In-run suppliers unfinished at entry** (direct prerequisite pair
   `compact-kahler-hodge-foundations`, batch 35, in flight). Missing on disk at entry:
   - `lem-kahler-commutators-and-laplacian-type-preservation` — consumers:
     `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` Step 1,
     `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` Step 1;
   - `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` — consumers:
     `thm-kahler-identities-…` Step 1, `thm-hodge-riemann-…` Step 1,
     `thm-polarized-hodge-riemann-…` Step 1;
   - `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds` —
     consumers: `lem-smooth-projective-analytification-…` Step 3,
     `thm-kahler-identities-…` Step 2, `thm-hodge-riemann-…` Step 1,
     `thm-polarized-hodge-riemann-…` Step 1.
   Per dispatch the consumers are authored anyway and their decisions stay escalated
   until each supplier file exists and its actual proof use is reconciled.
   (`def-compact-kahler-manifold-and-hodge-polarization-conventions`,
   `lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity` and
   `lem-de-rham-top-integral-is-fundamental-class-evaluation` are already on disk;
   read at entry.)
2. **Scaffold audit findings to resolve while authoring**: (a) the B example's
   hypothesis `Je=f` is inconsistent with the library convention
   `f=-Je` in [[def-compact-kahler-manifold-and-hodge-polarization-conventions]]
   under which `u=e+if` is type `(1,0)`; the sign must be repaired or the type clause
   restated, keeping the designed star/norm claims. (b) The analytification lemma
   needs the empty and dimension-zero cases stated honestly; its manifold clause must
   match the nonempty `m≥1` convention of
   `def-complex-manifolds-and-holomorphic-vector-bundles`. (c) The Hodge–Riemann
   statement's primitive-star sign `i^{p-q}` must be matched to the pointwise lemma's
   `*u=ε(k)i^{q-p}L^{n-k}u/(n-k)!` applied to the conjugate form.
3. **Batch checks to run after authoring**: explicit-path precheck, rendercheck,
   `proof-layout` (one batched command), content policy, strict proof contracts
   (batch-39 contracts file to be created), item-dependency-levels, `validate-plan`
   against `research/plan-spec.json`, `manifest-deps`, coverage checklist,
   cross-batch dependency refresh, and `step3-decisions record-item` per item.
4. **Step-4 splice bookkeeping**: `def-morphisms-and-polarizability-of-rational-hodge-structures`
   is manifest-only (absent from the plan-spec inventory); the two pages' `requires`
   were extended by the owner. Reported for Step 4, shared plan not edited.

## Item checkpoints

### `def-morphisms-and-polarizability-of-rational-hodge-structures` (level 3) — accept

- Claim: pure weight-$k$ morphism/direct-sum/short-exact-sequence/splitting/
  polarizable/simple vocabulary; kernel and image closure verified componentwise in
  the Definition. Deps: the conventions item only (read on disk). Choice-free;
  `proof: not-applicable`, precheck `n/a`.
- Checks: precheck `0 checked, 0 failing` (no phase); rendercheck OK. Decision
  recorded below.

### `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures` (level 4) — accept

- Claim: $Q|_U$ is a polarization, $V=U\oplus U^{\perp_Q}$ orthogonally, splitting
  of short exact sequences of polarizable structures, semisimplicity, persistence of
  rational splitting identities under characteristic-zero scalar extension.
- Proof re-derived independently: the identity $Q(Cx,y)=Q(x,C^{-1}y)$ verified by
  bidegree expansion (both sides $=\sum i^{p-q}Q(x^{p,q},y^{q,p})$); radical argument,
  type-orthogonal complement computed componentwise, bijective morphism inverse
  bidegree-preserving, induction on dimension for semisimplicity. Choice-free.
- Deps: conventions item (on disk), new definition item (authored above). Both
  suppliers inside the pair. Checks: precheck PASS, rendercheck OK, proof-layout
  4 steps 0 defects.

### `ex-primitive-one-forms-on-a-hermitian-two-plane` (level 4) — repaired (statement)

- Repair: the scaffold's auxiliary hypothesis `Je=f` is inconsistent with the library
  convention `f=-Je` under which the designed claim "the type-$(1,0)$ form $u=e+if$" holds;
  the authored statement uses `Je=-f` (equivalently `Jf=e`). The promised claims
  ($u$ primitive, `*u=-iu`, `u∧*ū=2e∧f`) are unchanged and re-derived from the star
  characterization, not copied from the source's typographically defective table.
- Suppliers read on disk: conventions, pointwise Lefschetz/Weil lemma, star-existence theorem.
- Checks: precheck PASS, rendercheck OK, proof-layout 3 steps 0 defects, strict contract entry
  (3 citations). Decision receipt `47b03c86…` (repaired, defects ["statement"]).

### `lem-smooth-projective-analytification-has-rational-kahler-polarization` (level 9) — repaired (statement)

- Repair: the scaffold's single sentence "compact ... manifold of complex dimension n" is
  false as written for $X=\varnothing$ and undefined for $n=0$ against the nonempty $m\ge1$
  convention of the complex-manifold definition; the authored statement separates the
  nonempty $n\ge1$, $n=0$ (discrete finite set, conventions item's $n=0$ clause) and
  $X=\varnothing$ (zero form, vacuous positivity) cases. The promised ample-form class
  identity is unchanged.
- Proof: charts from the Jacobian criterion + implicit/inverse function theorems; gluing and
  morphisms; topology identification with the closed image in $\mathbb P^N(\mathbb C)$ via
  injective differential and constant-rank/IFT; Fubini–Study form glued and positivity by
  Cauchy–Schwarz; frame-gluing Chern connection with curvature $-\partial\bar\partial\log\psi$;
  pullback to $A^{\otimes d}$, tensor-power additivity, division by $d$, edge cases.
- Suppliers: 13 declared deps, all present on disk at decision time; the batch-35
  `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds` appeared during
  authoring and its Statement was read and matched to the use.
- Checks: precheck PASS, rendercheck OK, proof-layout 6 steps 0 defects, strict contract entry
  (13 citations; 0 errors/0 warnings). Decision receipt `13595a23…` (repaired, defects ["statement"]).

### `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` (level 11) — repaired (statement)

- Authored in full: harmonic transport of $(L,\Lambda,H)$, $\mathfrak{sl}_2$ relations,
  hard Lefschetz, primitive kernel in degrees $\le n$, Lefschetz decomposition and type shift,
  rationality and characteristic-zero extension.
- Repair: primitive cohomology is defined explicitly and the identification
  $P^k=\ker L^{n-k+1}$ is restricted to $0\le k\le n$ (the expression is undefined for $k>n$).
- Suppliers read on disk: conventions, pointwise Lefschetz/Weil lemma, commutators,
  rational comparison and the completed batch-35 Hodge theorem; the consuming step of the
  Hodge theorem is 1.1. Decision receipt `3bc5123f…` (repaired, defects ["statement"]).

### `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` (level 12) — repaired (statement)

- Authored in full: representative independence by Stokes ($\mathrm{AC}_\omega$ from AC via the
  choice chain), $(-1)^k$-symmetry, type pairing, primitive positivity from the pointwise
  star identity applied to the conjugate form, rationality at rational classes via the
  top-integral lemma, the sign-adjusted full-cohomology form $S_k$ (with
  $S_k(L^ru,L^rv)=Q_{k-2r}(u,v)$), transport to degrees $>n$ with the Tate shift, the
  projective instances, and continuity of primitive kernels by constant rank and pivots.
- Repair: the unqualified "full $H^k$ is polarized" claim was made precise; a polarization is
  rational by definition, so rationality is stated at rational classes while real Kähler
  classes keep positivity and nondegeneracy without rationality.
- Suppliers read on disk: conventions, pointwise lemma, Lefschetz theorem, Hodge theorem,
  top-integral, choice-chain, Stokes, first-Chern and analytification, rational comparison.
  Decision receipt `0e3eef26…` (repaired, defects ["statement"]).

### `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties` (level 13) — accept

- Authored in full by assembling the pair's items: analytification and type of $\ell$,
  hard Lefschetz and rationality, Hodge–Riemann positivity and the sign-adjusted polarization,
  orthogonal splitting, continuous variation, scalar-extension persistence and the explicit
  exclusions (weak hyperplane Lefschetz, relative hard Lefschetz, singular IC purity,
  local-system semisimplicity).
- Suppliers read on disk: all seven declared deps, including the completed batch-35 Hodge
  theorem (consuming step 1.1). Decision receipt `8f1ed274…` (accept, defects []).

### Supplier reconciliation (closeout of the entry obligations)

The batch-35 pair finished authoring during this dispatch; the three entry-missing suppliers
were written, read and reconciled against the consuming steps, and no escalation remains:

- `lem-kahler-commutators-and-laplacian-type-preservation` — Statement gives
  $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$, commutation with
  $L,\Lambda,\partial,\bar\partial,*$ and bidegree preservation; consumed at step 1.1 of the
  Lefschetz theorem. Match.
- `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds` — Statement gives
  $H^k(X;\mathbb Q)\otimes F\cong H^k(X;F)$ finite-dimensional, compatible with cup products
  and pullback; consumed at step 4.1 of the analytification lemma, step 2.1 of the Lefschetz
  theorem, steps 2.1/4.1 of the Hodge–Riemann theorem and step 1.1 of the package. Match.
- `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` — Statement gives unique
  smooth harmonic representatives, the Hodge decomposition by types, pullback/cup Hodge type
  and the functorial rational pure Hodge structure; consumed at step 1.1 of the Lefschetz
  theorem, the Hodge–Riemann theorem and the package theorem. Match.

The three affected receipts were re-recorded against the latest supplier bytes observed at
handoff; the sibling pair was still polishing its supplier files during this dispatch, so a
further supplier edit mechanically invalidates these three receipts and the engine's
writer-drain will require re-recording (normal concurrent-authoring behaviour, not an open
mathematical obligation).

## Checks actually run (results at this writing)

- `node tools/tsx-run.mjs tools/author-check.mts frontier-44-special-representation-examples-28 39`
  — `ok: true`, fingerprint `80a5a4bdddd0410274da7304588fcdcf3e35dfc1ebe07c84c164da456a62d0b3`;
  sub-gates `precheck`, `rendercheck`, `content-policy-items`, `proof-contract` all true
  (`research/…-author-check-39.json`).
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven explicit item paths — 6 proof phases
  checked, 0 failing (the definition reports `n/a`).
- `node tools/rendercheck.mjs` on the seven items and two page files — OK for all 9 files.
- `node tools/proof-layout.mjs` on all seven items in one command — 7 items, 23 steps, 0 defects.
- `node tools/content-policy.mjs …-batch-39.pages.json` — 7 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs …-batch-39.proof-contracts.json --strict` — 6/6 scoped
  proof-bearing items, 0 errors, 0 warnings (created this dispatch; exact quotes from the
  supplier sections, every step mapped with its inputs, all eight boundary dispositions).
- `node tools/manifest-deps.mjs …-batch-39.pages.json` — 7 items, 0 normalized, 0 errors.
- `node tools/item-dependency-levels.mjs check --run …` — no error names any batch-39 item; the
  run-wide errors concern other in-flight pairs (`thm-projective-pushforward-…`,
  `ex-projective-perverse-…`, `cor-quiver-full-flag-…`).
- `node tools/validate-plan.mjs research/plan-spec.json --run …` — 4 `undeclared-prereq` errors,
  none naming either batch-39 page or any of its items: `character-polynomials-fi-modules-…`,
  `projective-functors-and-the-soergel-functor-in-category-o`,
  `compact-kahler-hodge-foundations` (the sibling pair's own edge to
  `morita-bicategories-and-projective-generators`) and `complex-algebraic-stratified-topology`;
  reported as unrelated run-wide findings for their owners.
- `node tools/coverage-checklist.mjs …-batch-39.coverage.json --require-destination` — 2 pages,
  35 harvested results, 0 errors, 0 warnings.
- `node tools/frontier-item-gate.mjs --run … --tool depcheck` — no diagnostic names any of the
  seven items; the remaining run-wide findings belong to other in-flight pairs.
- `node tools/frontier-item-gate.mjs --run … --tool fwdcheck` — the seven items appear only in the
  inherited-context list; no finding names them.
- `node tools/frontier-item-gate.mjs --run … --tool extcheck` — no finding names any of the seven.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` — refreshed and deduplicated; the
  unified ledger carries all 22 batch-39 input edges (2 page + 20 item) and `unreviewed_batches`
  is now empty.
- `node tools/pathcheck.mjs` — only the `draft-unplaced` warnings on the two new draft pages,
  which the tool records as `pathway-sync places it` (no error).
- `node tools/step3-decisions.mjs check --phase final` — no open row for any of the seven items;
  the run-wide counter still reflects other pairs' in-flight work.

## Added suppliers, scope notes and Step-4 obligations

- No new item IDs were created by this dispatch. The one local definition
  (`def-morphisms-and-polarizability-of-rational-hodge-structures`) was already part of the
  immutable pre-author scaffold inventory (`research/…-step3-auditor-baseline.json`), so it
  received an ordinary decision (accept); it remains absent from the `plan-spec.json` page
  inventory and is a Step-4 splice obligation, as the Step-3a review recorded.
- The batch manifest statements, dependencies and levels were left exactly as reviewed at
  Step 3a: every authored item's frontmatter `deps` and `dependency_level` equal its manifest
  row (`manifest-deps` 0 normalized; `item-dependency-levels` no error for the pair), so the
  Step-3a scope review hash stays current and needs no refresh.
- Scaffold-level repairs carried into the items only (recorded in the decisions and reported
  here for Step 4): the B example's auxiliary hypothesis `Je=f` was corrected to `Je=-f`; the
  analytification statement was restated with its empty and $n=0$ cases; the Lefschetz
  theorem's $P^k=\ker L^{n-k+1}$ was restricted to $0\le k\le n$; the Hodge–Riemann
  polarization claim was qualified to rational Kähler classes. No promised claim was narrowed
  or dropped.
- Plan/prose amendments for Step 4: splice the manifest-only definition item into the
  `plan-spec.json` page 1811 inventory; nothing else.

## Published concerns

None confirmed. Every published supplier consumed by the pair
(`def-complex-manifolds-and-holomorphic-vector-bundles`,
`def-complex-projective-space-and-holomorphic-charts`,
`def-complex-linear-and-compatible-bundle-connections`,
`def-curvature-of-a-vector-bundle-connection`,
`lem-first-chern-form-agrees-with-the-topological-line-class`,
`prop-first-chern-class-of-tensor-dual-and-conjugate-lines`,
`thm-ample-powers-very-ample-proper-base`, `thm-jacobian-criterion-smooth-morphism`,
`thm-holomorphic-implicit-function-theorem`,
`thm-holomorphic-inverse-function-theorem-several-variables`,
`thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula`,
`thm-general-stokes-theorem`, `thm-choice-implies-dependent-implies-countable-choice`,
`def-axiom-of-choice`) was read at its Statement/Definition and matched its use; no mismatch,
missing hypothesis or wrong-direction use was found. No published-repair machinery was needed
and no defect row is proposed for the serial reconciler.

## Handoff

- Completed IDs (all seven decided; no open rows at handoff):
  `def-morphisms-and-polarizability-of-rational-hodge-structures` (accept),
  `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures` (accept),
  `ex-primitive-one-forms-on-a-hermitian-two-plane` (repaired, statement),
  `lem-smooth-projective-analytification-has-rational-kahler-polarization` (repaired, statement),
  `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` (repaired, statement),
  `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` (repaired, statement),
  `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties` (accept).
- Deliverables on disk: seven item files, both library pages, the batch-39 proof contracts
  (strict, 6 entries), the batch-39 cross-batch input (22 reviewed edges), the author-check
  receipt (`research/…-author-check-39.json`), and this report.
- Open obligations: (1) Step-4 splice reconciliation of the one manifest-only definition item;
  (2) thorough independent audit and mathematical review of these items follows in Steps 5–7 —
  this report claims no independent verification; (3) the unrelated run-wide `validate-plan`
  and in-flight pair findings listed above are left to their owners.
- No blocker and no owner escalation remains for this pair at handoff.
