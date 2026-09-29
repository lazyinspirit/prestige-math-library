# Step 3b author checkpoint — finite/proper/projective morphisms

Run `frontier-36-complete`, batch 5. Owned pages are
`finite-proper-and-projective-morphisms` (A) and
`finite-proper-and-projective-morphisms-examples` (B). The exact dispatch order
is preserved in `research/frontier-36-complete-step3b-pair-finite-proper-and-projective-morphisms-1e75ee053630c56e.task.md`.

## Inputs and binding direction

- Read `CLAUDE.md`, `README.md`, and `SCHEMA.md` in full.
- Read the complete AV-15 design section, current batch-5 page manifest and
  coverage, batch notes, the Step-3a sufficient scope receipt and report, the
  explicit owner-authoring direction, the Step-1 readiness record for the first
  item, and the corresponding published prerequisites.
- Owner direction retained: prove the relative-Spec characterization locally;
  retain the moved scheme-level Zariski Main results on the following étale
  page; fully prove the two local support lemmas for the proper nonprojective
  example; preserve the published affine-quotient proof-locality concern for
  serial owner reconciliation.
- No in-run supplier pair is used by this batch. The cross-batch dependency
  input remains `[]`; no shared row has been removed.

## Item checkpoints

### `def-affine-local-quasi-coherent-algebra` — complete

- **Scaffold audit:** The definition is a valid affine-local presentation of a
  sheaf algebra. Its chartwise existence does not select a simultaneous family
  of presentations. Principal-open restrictions are exactly the module
  localization condition needed by the later relative-Spec gluing lemma.
- **Claim/conventions:** For every affine chart $U=\operatorname{Spec}R$ of a
  scheme $S$, require an $R$-algebra $B_U$ and an algebra isomorphism
  $\mathcal A|_U\cong\widetilde{B_U}$ whose restriction on $D(r)$ is
  $B_U[r^{-1}]$. Zero rings and empty schemes are allowed.
- **Sources read:** Stacks Project, Morphisms of Schemes, §29.11 Lemma 29.11.3
  (tag `01S8`, full proof); Stacks Project, Constructions of Schemes, §27.3
  Situation 27.3.1 and Lemmas 27.3.2–27.3.4 (tag `01LL`, complete local
  gluing argument); published dependencies
  `def-scheme-over-base` and `thm-affine-scheme-ring-anti-equivalence`.
- **Dependencies examined:** `def-scheme-over-base`,
  `thm-affine-scheme-ring-anti-equivalence`.
- **AC:** Not used. The condition is quantified chartwise; no global selection
  of chart algebras occurs.
- **Decision:** `accept`, confidence 1. Evidence: authored definition retains
  the scaffold claim and states the precise principal-open localization
  condition; empty/zero cases are explicit.
- **Checks:** Explicit-path precheck completed (the definition has no proof
  block, so the tool reports `0 checked, 0 failing`); strict contract check
  passed for this item with `--items` selection.
- **Open gaps:** None for this item. No local supplier was added.
- **Decision receipt:** `research/frontier-36-complete-step3b-review-def-affine-local-quasi-coherent-algebra.json`, accepted at confidence 1 with both direct dependencies recorded.
- **Next action:** Audit and author the next level-0 item,
  `def-finite-morphism-schemes`.

## Published concern retained for handoff

Confirmed proof-locality concern (not a confirmed statement defect): published
item `thm-affine-closed-immersions-quotient-rings` on
`schemes-subschemes-and-morphisms-locally-of-finite-type` cites Stacks tag
[`01IN`](https://stacks.math.columbia.edu/tag/01IN) for the affine quotient
classification. The complete `01IN` proof invokes `01IH`; the complete
[`01IH`](https://stacks.math.columbia.edu/tag/01IH) proof uses Lemma 26.4.5,
the quasi-coherent-sheaf results of §26.7, and Lemma 26.7.8. Those are not in
the published item's direct prerequisites, which are only
`def-closed-immersion-schemes`, `def-affine-scheme`, and
`thm-affine-scheme-ring-anti-equivalence`. Confidence is high that this is a
missing-prerequisite/proof-locality issue; the quotient classification itself
is not challenged.

Two published consumers have exact downstream paths to report for serial
reconciliation: `lem-diagonal-is-immersion` on
`diagonals-separated-morphisms-and-valuative-uniqueness` uses the theorem in
step 2.2, and `lem-separated-stable-under-base-change` on that page uses
`lem-base-change-open-closed-immersions` (on
`fibre-products-base-change-and-scheme-theoretic-fibres`), whose step 1.2 uses
the theorem. The current batch's `lem-fpqc-descent-properness-components`
previously reached both paths through its dependencies; its completed proof
now constructs the diagonal immersion locally using the assigned
`lem-closed-immersion-affine-quotient-and-base-change` supplier and has no
transitive path to the published theorem. Proposed repair: reconcile the
published theorem's complete source prerequisites or replace its imported
affine quotient step by a proof-local argument using the local supplier, then
re-audit the two consumers. These are downstream impact candidates, not
confirmed false claims. The canonical published-consumer ledger remains under
serial reconciliation; this checkpoint records the evidence for the dispatch
report.

### `def-finite-morphism-schemes` — scaffold repair and complete

- **Scaffold audit:** The level-0 statement previously asserted that checking
  one affine cover is equivalent to checking every affine open, while its
  assigned proof is the level-1 `lem-finite-morphism-affine`, which depends on
  this definition. That was a forward proof use. The definition now states only
  the all-affine-open condition; the promised cover criterion remains in the
  later lemma, which proves it from affine target-locality and finite-module
  localization/gluing.
- **Claim/conventions:** A morphism is finite precisely when every affine
  target open has affine inverse image with a module-finite coordinate algebra.
  The zero ring and empty scheme remain allowed.
- **Sources read:** Stacks Project, Morphisms of Schemes, §29.45 Definition
  29.45.1 and Lemma 29.45.3 (tag `01WG`, complete displayed statements and
  relevant proof references); dependencies `def-affine-morphism-schemes` and
  `def-finite-type-and-module-finite-algebras`.
- **Dependencies examined:** `def-affine-morphism-schemes`,
  `def-finite-type-and-module-finite-algebras`.
- **AC:** Not used; the all-chart definition involves no global selection.
- **Decision:** `repaired`, confidence 1. The circular sequencing claim was
  removed from the definition and preserved as the next item's proved claim.
- **Scope refresh:** The pair remains `sufficient`; no item or promised result
  was dropped, and the cover criterion stays in the existing A inventory. A
  current sufficient scope receipt is recorded after this manifest change.
- **Checks:** Explicit-path precheck returned `0 checked, 0 failing` (definition
  has no proof); strict proof-contract check passed for this item. Full-run
  `item-dependency-levels check --run frontier-36-complete` passed for 921
  items across 60 pages, maximum level 18; this statement-only repair did not
  change the dependency graph.
- **Open gaps:** None for this definition.
- **Decision receipt:**
  `research/frontier-36-complete-step3b-review-def-finite-morphism-schemes.json`,
  repaired at confidence 1 with both direct dependencies recorded.
- **Next action:** Audit and author the next level-0 item,
  `def-fpqc-morphism-schemes`.

### `def-fpqc-morphism-schemes` — scaffold repair and complete

- **Scaffold audit:** The original level-0 definition also asserted affine-chart
  flatness and stability of flatness, surjectivity and quasi-compactness under
  arbitrary base change. Those are theorems, not definitional clauses; in
  particular, the declared prerequisites did not include a flat-base-change
  supplier. The definition is now limited to stalk-flatness and the page's
  single-morphism convention: flat, surjective and quasi-compact. The existing
  `lem-fpqc-cover-submersive` scaffold now explicitly retains the affine-chart
  criterion, arbitrary base-change stability and the universal closed-subset
  criterion; its proof remains to be authored at its assigned level-1 turn.
- **Claim/conventions:** Flat means every local ring map
  $\mathcal O_{S,p(x)}\to\mathcal O_{S',x}$ is flat. An fpqc covering
  morphism on this page is flat, surjective and quasi-compact. The singleton
  family is an fpqc cover in the Stacks family convention; general covers may
  be families and are not identified with a single quasi-compact morphism.
- **Sources read:** Stacks Project, Morphisms of Schemes §29.26 Definition
  29.26.1, Lemmas 29.26.2–.3, .8 and .12 (tag `01U2`); Étale Cohomology
  §59.15 Definition 59.15.1 and Example 59.15.3(3) (tag `03NV`); Topologies
  on Schemes §34.9 Definition 34.9.1 (tag `022A`); complete relevant
  statements and arguments were reread. The latter sources delimit the
  singleton-morphism claim from the general family definition.
- **Dependencies examined:** `def-flat-and-faithfully-flat-modules-and-ring-maps`,
  `def-quasi-compact-and-quasi-separated-morphism`.
- **AC:** Not used by this definition. The local ideal-support argument,
  faithful-flat spectral criteria and going-down needed later are explicitly
  AC-dependent on the existing submersiveness lemma.
- **Decision:** `repaired`, confidence 1. The definition was narrowed to its
  actual definitional claim, and its theorem-level statements were retained on
  the existing later A item rather than dropped.
- **Scope refresh:** `sufficient` recorded for the current pair hash after
  changing both the definition and the existing lemma scaffold. The updated
  scaffold keeps all 50 items and moves the three derived claims to
  `lem-fpqc-cover-submersive`.
- **Checks:** Explicit-path precheck returned `0 checked, 0 failing` (the
  definition has no proof block); explicit rendering passed for the item and A
  page; strict selected proof-contract passed; coverage checklist passed with
  57 harvested results and 0 errors/warnings; full-run item-dependency-levels
  passed for 923 items across 60 pages, max level 18. Recomputed order is
  unchanged from the dispatch: next is
  `def-projective-morphism-pre-proj`. `validate-plan research/plan-spec.json`
  exited 0 with no plan errors.
- **Open owner obligation:** The dependency changes make the owner-held Step-1
  readiness receipts stale for `def-fpqc-morphism-schemes` and
  `lem-fpqc-cover-submersive`. They were not rewritten or given owner stamps;
  the owner must refresh those two readiness decisions against the repaired
  definition and expanded lemma dependency list.
- **Decision receipt:**
  `research/frontier-36-complete-step3b-review-def-fpqc-morphism-schemes.json`,
  repaired at confidence 1 with both direct dependencies recorded.
- **Next action:** Audit and author `def-projective-morphism-pre-proj` (level 0).

### `def-projective-morphism-pre-proj` — complete

- **Scaffold audit:** The statement correctly fixes the finite-dimensional
  closed-immersion convention and explicitly distinguishes it from the
  projective-bundle convention. It introduces no theorem or forward dependency.
- **Claim/conventions:** For an arbitrary base $S$, projective means factoring
  through one closed immersion $X\hookrightarrow\mathbb P^n_S$ followed by
  projection, for some finite $n\ge0$. It adopts Stacks H-projective clause
  29.44.1(2); $n=0$ is included, and clause (1)'s projective-bundle definition
  is not merged into this page's convention.
- **Sources read:** Stacks Project, Morphisms of Schemes §29.44 Definition
  29.44.1, all three clauses (tag `01W8`); clause (2) supplies the stated
  embedding criterion, while clause (1) supplies the explicitly excluded
  projective-bundle convention. The exact complete display was checked.
- **Dependencies examined:** `def-relative-projective-space-standard-charts`
  (including arbitrary bases and $\mathbb P^0_S\cong S$) and
  `def-closed-immersion-schemes` (closed image and surjective structure-sheaf
  map).
- **AC:** Not used. The existential witness $n$ and a closed immersion is the
  definition itself; there is no selection from an arbitrary family.
- **Decision:** `accept`, confidence 1. The definition preserves the scaffold
  statement and precisely names the adopted convention.
- **Checks:** Explicit-path precheck returned `0 checked, 0 failing`; rendering
  passed for the item and A page; strict selected proof-contract passed;
  coverage checklist passed with 57 harvested results and no warnings; full-run
  item-dependency-levels passed for 923 items across 60 pages, max level 18.
- **Open gaps:** None for this item. No local supplier was added.
- **Decision receipt:**
  `research/frontier-36-complete-step3b-review-def-projective-morphism-pre-proj.json`,
  accepted at confidence 1 with both direct dependencies recorded.
- **Next action:** Audit and author `def-quasi-finite-morphism-schemes` (level 0).

### `def-quasi-finite-morphism-schemes` — scaffold repair and complete

- **Scaffold audit:** The scaffold combined the scheme definition with a
  finite-fibre/isolated-point/residue-field equivalence but did not derive that
  equivalence. The definition now follows the owner direction and uses the
  published affine-algebra condition at each point, under finite type. The
  equivalence is preserved as the new existing-page supplier
  `lem-quasi-finite-morphism-fibre-characterization` at level 1; its strategy
  records the local-fibre identification, affine criterion and zero-dimensional
  finite-type fibre argument. The definition no longer suggests separatedness
  is part of quasi-finiteness.
- **Claim/conventions:** `f:X→S` is quasi-finite iff it is finite type and at
  each `x` some affine pair `U=Spec B`, `V=Spec A` around `x,f(x)` with
  `f(U)⊂V` has `A→B` quasi-finite at the prime `q` for `x`. Its local algebra
  is `B_q/pB_q`, the local ring of `X_{f(x)}` at `x`. Empty sources satisfy
  the pointwise clause vacuously. Separatedness remains an extra hypothesis
  where needed.
- **Sources read completely:** Stacks Project, Morphisms of Schemes §29.21,
  Definition 29.21.1 and Lemmas 29.21.3, .5–.7 and .10 (tag `01TC`); Stacks
  Project, Commutative Algebra §10.122, Lemmas 10.122.1–.2 and Definition
  10.122.3 (tags `00PJ`, `00PK`, `00PL`); Stacks Project, Varieties §33.20,
  Lemma 33.20.2 (tag `06LH`). Complete displayed arguments were read, including
  the reduction of Algebra Lemma 10.122.2 to 10.122.1 and the zero-dimensional
  scheme decomposition into finite-dimensional local Artinian pieces.
- **Dependencies examined:** `def-locally-finite-type-and-finite-type-morphism`,
  `def-scheme-theoretic-fibre`,
  `def-quasi-finite-at-a-prime-for-finite-type-algebras`.
- **AC:** Not used by the definition. The characterization strategy also uses
  no simultaneous selection; its finite-cover argument remains choice-free.
- **Decision:** `repaired`, confidence 1. The completed definition is the
  owner-directed affine-algebra definition, with its exact local-fibre algebra
  identified and the removed equivalent claim preserved in a separately
  registered local lemma.
- **Scope refresh:** `sufficient` recorded for the changed A page inventory and
  the new level-1 supplier. No assigned item or promised claim was dropped.
- **Checks:** Explicit-path precheck: 0 checked, 0 failing; renderer passed for
  the item and A page; strict selected proof-contract passed after anchoring its
  empty/zero/one evidence to the statement; coverage checklist passed with 63
  harvested results and 0 errors/warnings; full dependency-level check passed
  for 924 items across 60 pages, maximum level 18; `validate-plan
  research/plan-spec.json` exited 0. Recomputed order is unchanged through the
  remaining level-0 items. The newly added characterization lemma is level 1,
  ordered after `lem-line-bundles-on-projective-three-space-restrict-by-degree`
  and before `lem-relative-spec-glues-affine-algebras`; the next assigned item
  is `def-universally-closed-morphism`.
- **Open owner obligations:** The owner-held Step-1 readiness record
  `research/frontier-36-complete-step1-def-quasi-finite-morphism-schemes.json`
  has a stale item hash after the definition repair. It was not edited or
  replaced by an owner ruling; the owner must refresh it. Separately, its
  published dependency `def-quasi-finite-at-a-prime-for-finite-type-algebras`
  cites Stacks tag `00PI`, which currently resolves to §10.123 rather than
  §10.122. Its statement matches the current definition at correct tags
  `00PK`/`00PL`; report the source-link defect to the owner, who should update
  those two URLs and re-audit consumers.
- **Decision receipt:**
  `research/frontier-36-complete-step3b-review-def-quasi-finite-morphism-schemes.json`,
  repaired at confidence 1 with the three examined dependencies recorded.
- **Next action:** Audit and author `def-universally-closed-morphism` (level 0).

### `def-universally-closed-morphism` — complete

- **Scaffold audit:** The scaffold states the standard universal closedness
  condition without adding unsupported hypotheses. I made the base-changed
  projection and the closed-subset condition explicit and retained the
  quantifier over every scheme over the base.
- **Claim/conventions:** For every morphism `T→S`, the projection
  `X×_S T→T` sends every closed subset of its source topological space to a
  closed subset of `T`. This includes `T=S`; “closed” is topological
  closedness. The definition imposes no finite-type, quasi-compactness or
  separatedness hypothesis.
- **Source read:** Stacks Project, Schemes §26.20 Definition 26.20.1 (tag
  `01KA`), complete section opened and read; the definition is exactly
  closedness after every scheme base change. The base-change construction is
  supplied by the published `def-base-change-morphism-schemes`.
- **Dependencies examined:** `def-base-change-morphism-schemes`.
- **AC:** Not used. Universal quantification over base changes selects no
  point or representative.
- **Decision:** `accept`, confidence 1. The definition matches the cited
  statement and makes its base-change and closed-subset quantifiers explicit.
- **Checks:** Explicit-path precheck: 0 checked, 0 failing; renderer passed for
  the item and A page; strict selected proof-contract passed; coverage
  checklist passed with 64 harvested results and no errors or warnings.
- **Open gaps:** None for this item. No manifest dependency change or local
  supplier was needed.
- **Decision receipt:**
  `research/frontier-36-complete-step3b-review-def-universally-closed-morphism.json`,
  accepted at confidence 1 with its direct dependency recorded.
- **Next action:** Audit and author
  `lem-closed-immersion-affine-quotient-and-base-change` (level 0).

### `lem-closed-immersion-affine-quotient-and-base-change` — scaffold repair and complete

- **Scaffold audit and repair:** The scaffold's principal-open covering argument
  incorrectly stated that each selected $f_i$ separately satisfied
  $J+(f_i)=A$. A finite cover of $V(J)$ yields instead the aggregate equality
  $J+(f_1,\ldots,f_n)=A$. The authored proof uses that equality to obtain the
  finite relation with correction terms in $J$, then proves those terms
  nilpotent on the closed subscheme. No item or promised conclusion was removed.
- **Claim/conventions:** Under AC, a closed immersion in the published
  sheaf-surjection convention is affine over every affine target open and is
  represented by the quotient by the unique kernel ideal. Conversely every
  quotient map induces a closed immersion, and this remains true after every
  base change. The zero ring and empty scheme are permitted; no reducedness or
  finite-generation hypothesis is added.
- **Proof order and argument:** Reordered the independent quotient-topology
  direction into dependency layer 1 and relabelled the completed proof in
  dependency order (13 steps, ending at 5.1). For an affine target, a finite
  affine cover of the source and a finite family of labelled principal opens
  make the selected inverse images affine. The aggregate ideal equality gives
  a finite correction relation. On the finite affine cover every correction
  term lies in every prime, hence is nilpotent under AC; the correction sum is
  nilpotent, so the selected sections generate the unit ideal and the source is
  affine. The direct-image stalk at $\mathfrak p$ is explicitly computed as
  $S_{\mathfrak p}^{-1}B$, with $S_{\mathfrak p}=\varphi(A\setminus\mathfrak p)$.
  Stalkwise surjectivity, exact localization and the maximal ideal containing
  the annihilator of a hypothetical nonzero cokernel element force
  $A\to B$ surjective. The converse uses the quotient-spectrum homeomorphism
  and stalk surjectivity. For an arbitrary base change, the affine pullback is
  $\operatorname{Spec}((A/I)\otimes_A A')\cong\operatorname{Spec}(A'/IA')$;
  the proof verifies the displayed identification is a ring isomorphism before
  applying target locality.
- **AC:** Declared in the item statement and contract; direct dependency
  `def-axiom-of-choice` is present. Exact uses: (i) `cor-nilradical-as-intersection-of-primes`
  makes elements lying in every prime nilpotent; (ii)
  `thm-proper-ideal-contained-in-maximal-ideal` detects that the aggregate
  ideal is the unit ideal; and (iii) the same maximal-ideal result places the
  annihilator of a nonzero cokernel element in a maximal ideal. Finite affine
  subcovers, finite label lists and all other steps are choice-free.
- **Sources and dependencies read:** Stacks Project, Schemes §26.8 Lemma
  26.8.2 (tag `01IH`) and §26.10 Lemma 26.10.1 (tag `01IN`), with both
  complete displayed proofs reread on 2026-09-28. The authored argument does
  not rely on either result. Also reread the complete local proof of
  `lem-affineness-from-unit-generating-global-sections`, the statement and
  proof of `lem-closed-immersion-local-on-target`, and the definition of
  `def-base-change-morphism-schemes`. All 29 direct dependencies are registered
  consistently in the item and batch manifest; they are recorded in the item
  decision receipt.
- **Source-audit evidence:** Stacks `01IN`, proof lines 32–33, invokes `01IH`.
  Stacks `01IH`, proof lines 25–26, invokes Lemma 26.4.5, Definitions/Examples
  26.4.3–26.4.4, Section 26.7 and Lemma 26.7.8. This confirms the previously
  noted proof-locality concern in published
  `thm-affine-closed-immersions-quotient-rings`: its claim is correct, but its
  cited path relies on closed-subspace/sheaf-of-ideals and quasi-coherent-sheaf
  results not listed as that item's declared suppliers. Keep this concern for
  serial owner reconciliation; do not edit the published item or shared ledger.
- **Decision:** `repaired`, confidence 1. Evidence is the full affine quotient,
  converse, and arbitrary-base-change argument, including empty, zero, one,
  endpoint and nonreduced cases and the exact AC uses. Receipt:
  `research/frontier-36-complete-step3b-review-lem-closed-immersion-affine-quotient-and-base-change.json`.
- **Scope refresh:** Current pair scope remains `sufficient`; receipt hash is
  `c205e22cf5fd1fd03a79d5916738faf7de988c5b6cc9aad173d06de9aea96ae1`.
- **Checks:** Explicit-path precheck passed (1 checked, 0 failing); explicit
  rendercheck passed for the item and A page; strict proof-contract check passed
  (0 errors, 0 warnings); coverage checklist passed (64 harvested results,
  0 errors, 0 warnings); item-dependency-levels passed for 924 items across
  60 pages, maximum level 18. `validate-plan research/plan-spec.json` exited 0
  with no plan errors and reported 20,500/20,501 planned item files present;
  the remaining pre-splice inventory mismatch must be identified and reported
  to Step 4 after the pair is complete. Batch content-policy remains a final
  batch check because the other assigned items are still being authored.
- **Open owner obligation:** The owner-held readiness receipt
  `research/frontier-36-complete-step1-lem-closed-immersion-affine-quotient-and-base-change.json`
  still has the pre-repair dependency list and stale SHA. It was not edited or
  replaced with an owner ruling; the owner must refresh it against the repaired
  proof and 29-dependency list.
- **Next action:** Backfill checkpoints for the already completed function-field
  item and the completed quasi-compact image item before advancing.

### `lem-integral-finite-type-scheme-function-field` — scaffold repair and complete

- **Claim/conventions:** For an integral finite-type $k$-scheme $X$ with generic
  point $\eta$, each nonempty affine open $U=\operatorname{Spec}A$ contains
  $\eta$, its generic stalk $K=\mathcal O_{X,\eta}$ is canonically
  $\operatorname{Frac}\Gamma(U,\mathcal O_X)$, $K/k$ is finitely generated,
  and restriction embeds $\Gamma(X,\mathcal O_X)$ into $K$. For the final
  clause, under AC, integrality of the chosen algebraic-closure fibre implies
  $K\otimes_k\bar k$ is a domain. The library's chosen-closure convention is
  retained; Stacks Definition 33.9.1 uses integrality after every field
  extension, so those formulations are not asserted equivalent here.
- **Scaffold audit and proof:** Added the missing dependencies and a complete
  argument. Genericity forces the generic point into every nonempty open; on an
  affine chart its prime is $(0)$, and the stalk is the localization at that
  prime, hence the fraction field. Finite generation uses one finite-type
  affine neighbourhood only. Injectivity of global restriction is checked on
  every nonempty affine chart and then by sheaf uniqueness. For geometric
  integrality, flatness over $k$ injects $A$ into $A\otimes_k\bar k$; AC gives
  a maximal ideal of this nonzero ring, so the affine geometric-fibre chart is
  nonempty and integral. Explicit mutually inverse localization maps identify
  $K\otimes_k\bar k$ with a localization of that domain. Empty lists of
  generators and $\bar k=k$ are covered explicitly.
- **Sources read:** Stacks Project Varieties §33.9 Definition 33.9.1 (tag
  `020H`) and Lemma 33.9.3 (tag `0BUG`), complete displayed arguments. Lemma
  33.9.3 concerns proper global functions and invokes Cohomology of Schemes
  Lemma 30.19.2; it is not used to prove this item. The tag `020H` defines
  geometric integrality using every field extension, unlike this item's
  selected-algebraic-closure convention.
- **Direct dependencies examined (17):**
  `def-integral-scheme`,
  `def-locally-finite-type-and-finite-type-morphism`,
  `thm-affine-scheme-ring-anti-equivalence`,
  `def-geometrically-reduced-integral-connected-fibre`,
  `thm-stalk-structure-sheaf-prime-localization`,
  `def-localisation-at-a-prime-ideal`, `def-field-of-fractions`,
  `thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
  `lem-base-extension-field-coordinate-ring`,
  `thm-flatness-criteria-by-injections-and-ideals`,
  `def-finitely-generated-field-extension`,
  `def-prime-spectrum-and-vanishing-sets`,
  `def-principal-distinguished-subset-of-spectrum`,
  `def-generic-point-irreducible-closed-subset`, `def-axiom-of-choice`,
  `thm-proper-ideal-contained-in-maximal-ideal`,
  `thm-universal-property-of-localisation`.
- **AC:** Used only for existence of a maximal ideal of
  $A\otimes_k\bar k$ in the geometric-integrality clause. All other clauses
  and the localization argument are choice-free.
- **Decision and evidence:** `repaired`, confidence 1, after authoring and
  checking the full argument. Receipt:
  `research/frontier-36-complete-step3b-review-lem-integral-finite-type-scheme-function-field.json`
  (hash `833af13451329eff14035014161f2036c72a6fcc21295b026179d0954ec737ff`).
  The current Step 3a scope receipt is sufficient, hash
  `e60e29fc8b746f50e63618b56e96fbeec06ce4313fe3c87230484f3413845a7b`.
- **Checks:** After compaction, explicit-path precheck passed; rendercheck for
  the item and A page passed; strict selected proof-contract passed with zero
  errors and warnings; coverage checklist passed (one page, 65 harvested
  results, zero errors and warnings). Earlier in this dispatch the complete
  item-dependency-levels and validate-plan checks passed; batch content-policy
  and final validation remain pending.
- **Open owner obligation:** The owner-held Step 1 readiness record
  `research/frontier-36-complete-step1-lem-integral-finite-type-scheme-function-field.json`
  has the pre-repair four-dependency list and stale item hash; the owner must
  refresh it. It was not edited here. No local supplier was added.
- **Next action:** Advance to the next level-0 item,
  `lem-relative-algebraic-constants-fg-field-finite`.

### `lem-quasi-compact-scheme-image-specialization-closed` — scaffold repair and complete

- **Claim/conventions:** Assuming AC, if $g:Z\to Y$ is quasi-compact, then
  $g(Z)$ is closed exactly when it is stable under specialization. Closure and
  specialization use the ambient scheme topology. The empty source has empty
  closed image; no separation or finite-type hypothesis is added.
- **Scaffold audit and repair:** The original scaffold named only the
  quasi-compact morphism and AC, although the proposed proof needed affine
  covers, localization, prime contraction, and maximal-ideal existence. Added
  those exact direct dependencies. The authored proof first takes a finite
  affine cover of the inverse image of an affine neighbourhood. A finite-union
  closure argument selects one chart whose image still accumulates at the
  target point. It proves the corresponding localization is nonzero, then AC
  supplies a maximal ideal; contraction gives an image point specializing to
  the target point. This avoids a product-ring construction and requires no
  choice for the finite cover or its finite chart selection. The closed-to-
  specialization direction follows from point closures.
- **Sources read:** Stacks Project Schemes §26.19 Lemma 26.19.7 (tag `05JL`),
  complete displayed proof; it reduces to an affine base, finite affine source
  cover, and the algebra result. Stacks Project Commutative Algebra Lemma
  10.41.5 (tag `00HY`), both complete proofs; the authored affine argument is
  independently written and checks the nonzero localization and prime
  contraction steps. The other proof of `00HY` invokes Lemma 10.30.5 and is
  not used by the item.
- **Direct dependencies examined (19):**
  `def-axiom-of-choice`, `def-morphism-of-schemes`,
  `def-morphism-ringed-spaces`,
  `def-quasi-compact-and-quasi-separated-morphism`,
  `def-quasi-compact-and-quasi-separated-scheme`, `def-scheme`,
  `def-affine-open-subscheme`, `cor-affine-scheme-quasi-compact`,
  `def-affine-scheme-spectrum`, `def-principal-distinguished-subset-of-spectrum`,
  `def-specialisation-and-generic-point`,
  `thm-affine-scheme-ring-anti-equivalence`,
  `def-morphism-affine-schemes-from-ring-map`,
  `def-localisation-at-a-prime-ideal`,
  `def-multiplicative-subset-and-localisation`,
  `thm-localisation-equivalence-and-ring-laws`,
  `prop-localisation-zero-equality-and-kernel-criteria`,
  `thm-proper-ideal-contained-in-maximal-ideal`,
  `cor-maximal-ideals-are-prime`.
- **AC:** Used only to obtain a maximal, hence prime, ideal of the nonzero
  localized ring in proof step 5.1. Finite affine-cover extraction and selection
  from the finite list are choice-free.
- **Decision and evidence:** `repaired`, confidence 1, after completing the
  proof and contract. Receipt:
  `research/frontier-36-complete-step3b-review-lem-quasi-compact-scheme-image-specialization-closed.json`
  (hash `132418ce51f5fa3fd591608826b4d24e82ae62dc9f23fafd5fa1fb7d9a14a7fb`).
  Pair scope was refreshed to `sufficient`, hash
  `e60e29fc8b746f50e63618b56e96fbeec06ce4313fe3c87230484f3413845a7b`;
  scope-decline refresh found zero declines and zero pending decisions.
- **Checks:** Explicit-path precheck passed (one checked, zero failing);
  rendercheck passed for the item and A page; strict selected proof-contract
  passed with zero errors and warnings; coverage checklist passed (one page,
  65 harvested results, zero errors and warnings); full item-dependency-levels
  check passed for 924 items across 60 pages, maximum level 18. Final
  batch-level content-policy and validate-plan checks remain pending.
- **Open owner obligations:** The owner-held Step 1 readiness record
  `research/frontier-36-complete-step1-lem-quasi-compact-scheme-image-specialization-closed.json`
  has only the former two dependencies and a stale item hash after expansion
  to 19; the owner must refresh it. The published definition
  `def-quasi-compact-and-quasi-separated-morphism` cites Stacks tag `01KV`,
  which currently resolves to §26.21 Lemma 26.21.13 on cancellation for
  separated and quasi-separated morphisms. The definition statement remains
  correct; report the confirmed stale locator and propose updating it to
  §26.19 Definition 26.19.1 (tag `01K3`) and Lemma 26.19.2 (tag `01K4`), then
  re-auditing consumers. Do not edit the published item.
- **Next action:** Audit and author
  `lem-relative-algebraic-constants-fg-field-finite` (level 0).

### `lem-relative-algebraic-constants-fg-field-finite` — scaffold audit checkpoint

- **Claim and owner direction:** The assigned claim is that the elements of a
  finitely generated extension $K/k$ algebraic over $k$ form a finite
  extension. Step 3a identifies this item as local support for
  `thm-global-functions-proper-integral-variety`. The generated scaffold only
  listed `def-axiom-of-choice`; that is insufficient for finite generation,
  degree bounds, and the tower argument. Its recorded strategy invokes AC for
  a finite list and a bounded maximum, although the proof can use finite scans
  and finite induction only. I am removing that unnecessary assumption.
- **Source audit:** Re-read the complete official Stacks Fields §9.26
  Definition 9.26.1 and Lemmas 9.26.10–11 (tags `030D`, `0G1M`, `037J`), and
  §9.8 Lemma 9.8.6 (tag `09GH`), including the full displayed proofs. Lemma
  9.26.11 bounds degrees of finite intermediate extensions using Lemma
  9.26.10, then leaves the final implication compressed. The local proof will
  exhibit a finite intermediate field of maximal attained degree and use the
  tower law to show it contains every algebraic constant. The original
  manifest source was mislocated at Varieties §33.9; the correct sources are
  Fields §9.26 and §9.8.
- **New prerequisite found:** The library uses “algebraically independent” but
  has no dedicated definition item. In particular,
  `lem-ag-finite-field-extension-separable-factorization` Fact F2 attributes
  the polynomial-relation definition to
  `def-algebraic-and-transcendental-elements`, whose complete Definition
  section defines algebraic/transcendental *elements* and algebraic
  *extensions* only. `def-ag-separating-transcendence-basis` likewise uses the
  term through that item. I am adding a local finite-tuple polynomial
  evaluation definition to this A page and will make the target lemma depend on
  it. This changes the target to dependency level 1; recompute the owned order
  before deciding the target. No earlier completed proof depends on this new
  supplier.
- **Published concern for owner reconciliation:** This is a confirmed missing
  declared supplier/definition issue, not a claim that the individual
  algebraic-element definition is false. Report the exact affected item IDs,
  uses, and a proposal for a shared field-theory definition with corrected
  dependencies in the final dispatch report. Do not edit those published
  items.
- **Decision status:** The target proof draft is being revised against the new
  definition and expanded field-theory prerequisites. No item decision or
  completion receipt has been recorded yet.
- **Recomputed schedule:** After adding the definition, the full run
  dependency-level check passed (925 items across 60 pages, maximum level 18).
  The pair's updated order places the definition at level 0 and moves the
  relative-constants lemma to level 1. Existing local level-1 supplier
  `lem-quasi-finite-morphism-fibre-characterization` remains before it; the
  recomputed next unfinished assigned item is now `def-proper-morphism`.

### `def-algebraically-independent-finite-tuples-over-a-field` — local supplier complete

- **Claim/convention:** For a field extension $K/k$, a subset $S\subseteq K$ is
  algebraically independent when the evaluation map from the polynomial ring
  with variables indexed by $S$ is injective. The definition identifies the
  empty set as independent, any set containing $0$ as dependent, and a
  singleton criterion; finite sets use the same polynomial relation without
  choosing an ordering.
- **Source read:** Stacks Project Fields §9.26 Definition 9.26.1 (tag `030D`),
  complete definition and its evaluation-map statement; the surrounding
  section was opened to check the finite-variable specialization. This is the
  source registered in the item and coverage ledger.
- **Direct dependencies examined (5):**
  `def-field-extension-generated-subfields-and-simple-extension`,
  `def-polynomial-ring-on-a-family-of-indeterminates`,
  `thm-polynomial-ring-on-a-family-is-a-commutative-ring`,
  `thm-universal-property-of-a-polynomial-ring-on-a-family`, and
  `def-algebraic-and-transcendental-elements`.
- **AC:** Not used. The definition is universal over the given set and the
  boundary examples use only individual polynomial evaluations.
- **Decision and checks:** `accept`, confidence 1, receipt hash
  `9e60c54a2c5041710536f0267076279001241de4417f16f3ff26b4bdda0ae06c`.
  Explicit-path precheck returned zero checked and zero failing; rendercheck
  passed for the item and A page; strict proof-contract passed with zero errors
  and warnings. The current pair scope receipt is `sufficient`, hash
  `7cf5646b6c373efa40779a7652b3d8e51dfd487dfc88dc30ce94a6315c3f2801`.
- **Local supplier added:** This definition is registered on the existing A
  page and in the batch-5 manifest, coverage and proof contracts. It is the
  sole new supplier added for the relative-constants argument; it does not
  modify other pairs or the shared published-consumer ledger.
- **Next action:** Audit and author `def-proper-morphism` (level 1) under the
  recomputed item-ID order. Return to the drafted
  `lem-relative-algebraic-constants-fg-field-finite` after the preceding
  level-1 items, including the existing quasi-finite characterization
  supplier.

### `lem-relative-algebraic-constants-fg-field-finite` — paused proof draft

- **Claim:** For a finitely generated field extension $K/k$, the relative
  algebraic closure $k_{\mathrm{alg}}=\{a\in K:a\text{ is algebraic over }k\}$
  is finite over $k$. The statement remains unconditional.
- **Draft argument:** Select a finite algebraically independent subset $T$
  from a finite field-generating list by a finite scan; then $K/k(T)$ is finite
  of degree $n$. Prove algebraic independence of $T$ persists over every
  algebraic intermediate field using a minimal finite dependent subset and
  transitivity. A basis of any finite intermediate $L/k$ then remains
  independent over $k(T)$, giving $[L:k]\le n$. Among the nonempty finite
  subextensions choose one of maximal attained degree; the tower law forces
  $L(a)=L$ for every $a$ algebraic over $k$. All algebraic steps are written
  in the current item file, but the item has not yet been proof-contract
  checked or decision-recorded.
- **Direct dependencies now declared (13):**
  `def-algebraic-and-transcendental-elements`,
  `def-algebraically-independent-finite-tuples-over-a-field`,
  `def-extension-degree-and-finite-extension`,
  `def-finitely-generated-field-extension`,
  `def-field-extension-generated-subfields-and-simple-extension`,
  `def-relative-algebraic-closure`,
  `cor-element-algebraic-iff-simple-extension-finite`,
  `cor-independent-set-is-no-larger-than-a-finite-spanning-set`,
  `thm-algebraic-elements-form-a-subfield`,
  `thm-finite-field-extensions-are-algebraic`,
  `thm-finitely-generated-algebraic-extensions-are-finite`,
  `thm-tower-law-for-finite-field-extensions`,
  `thm-transitivity-of-algebraicity`.
- **Sources re-read:** Stacks Fields §9.26 Definition 9.26.1 (tag `030D`),
  Definition 9.26.9 (tag `037I`), Lemmas 9.26.10–11 (tags `0G1M`, `037J`),
  and §9.8 Lemma 9.8.6 (tag `09GH`), with complete relevant statements and
  arguments. The original scaffold's Varieties §33.9 PDF link was corrected to
  these current exact locators.
- **AC:** No use. The finite generator scan, bounded maximum, basis of one
  finite-dimensional extension, and one witness attaining the maximum require
  only finite choices. The old scaffold's claim that AC was needed for these
  steps was removed.
- **Open owner obligation:** Its Step 1 readiness receipt names only the old
  AC dependency and is stale against the current 13-dependency list and the new
  local definition. Do not edit the owner receipt; owner refresh is required.
- **Next action:** Continue with `def-proper-morphism`; return to this item at
  its recomputed level-1 position before `lem-relative-spec-glues-affine-algebras`.

### `def-proper-morphism` — complete

- **Claim and scaffold audit:** A morphism of arbitrary schemes is proper iff
  it is separated, of finite type, and universally closed. The scaffold matches
  the exact definition and correctly warns that neither Noetherianity nor
  finite presentation is implicit. The three terms are the existing direct
  dependency interfaces; no extra condition is introduced.
- **Source read:** Stacks Project, Morphisms of Schemes §29.42 Definition
  29.42.1 (tag `01W0`), opened at the official HTML page; the complete section
  text was read and the definition states these three clauses verbatim. The
  definition is for a morphism of schemes without a Noetherian restriction.
  Finite type uses the existing definition as locally finite type plus
  quasi-compact, not finite presentation.
- **Dependencies examined:** `def-separated-morphism-schemes`,
  `def-locally-finite-type-and-finite-type-morphism`,
  `def-universally-closed-morphism`.
- **AC:** Not used; properness is defined by checking three properties of the
  given morphism, with no selection principle.
- **Decision and evidence:** `accept`, confidence 1. The authored item directly
  references the three existing definitions and retains the arbitrary-scheme
  scope. Receipt:
  `research/frontier-36-complete-step3b-review-def-proper-morphism.json`.
- **Proof contract:** Records the empty and zero-source cases, the identity
  morphism, the absence of extra Noetherian/reduced/finite-presentation
  assumptions, choice non-use, and both directions of the defining criterion.
- **Checks:** Explicit-path precheck returned `0 checked, 0 failing` because a
  definition has no proof block. Explicit rendercheck passed for the item and A
  page; strict selected proof-contract passed with zero errors and warnings;
  full item-dependency-levels passed for 925 items across 60 pages, maximum
  level 18. The batch content-policy and final plan/coverage checks remain
  pending.
- **Next action:** Continue at recomputed level 1 with
  `def-quasi-projective-morphism`; the relative-constants lemma remains
  scheduled after `lem-quasi-finite-morphism-fibre-characterization` and
  before `lem-relative-spec-glues-affine-algebras`.

### `def-quasi-projective-morphism` — scaffold terminology repaired and complete

- **Scaffold audit and repair:** The plan selects the quasi-compact immersion
  criterion into finite-dimensional projective space. Stacks Definition
  29.41.1(2) calls this H-quasi-projective and separately defines
  quasi-projective in clause (1) by finite type plus a relatively ample
  invertible sheaf. The authored item keeps the assigned immersion claim and
  explicitly names the adopted page convention; it does not claim clauses (1)
  and (2) are equivalent. The promised open-subscheme condition remains as a
  direct application of the adopted definition when the composite immersion
  is quasi-compact.
- **Claim/conventions:** There must be an $n\ge0$ and a factorization through a
  quasi-compact immersion $X\hookrightarrow\mathbb P^n_S$ over $S$. Projective
  space uses the existing finite-dimensional convention. The open-subscheme
  clause is conditional on quasi-compactness of the resulting composite
  immersion; it does not assert every open in every projective scheme is
  quasi-compact.
- **Source read:** Stacks Project, Morphisms of Schemes §29.41 Definition
  29.41.1 clauses (1)–(3) and footnote (1) (tag `01VW`), complete official
  HTML definition. Clause (2) is exactly the quasi-compact immersion
  criterion; clause (1) is the distinct EGA ample-sheaf convention.
- **Dependencies examined:** `def-projective-morphism-pre-proj`,
  `def-locally-closed-immersion`,
  `def-quasi-compact-and-quasi-separated-morphism`.
- **Coverage repair:** Added §29.41 Definition 29.41.1(2) and the item to the
  Stacks coverage source record, with exact read scope and terminology
  limitation. Updated the batch manifest's Stacks source range to include
  §29.41.
- **AC:** Not used; the existential projective-space factorization defines
  the property and invokes no selection from an arbitrary family.
- **Decision and evidence:** `repaired`, confidence 1. The source distinction
  is explicit, the plan's criterion and open-subscheme claim are preserved, and
  no equivalence with Stacks clause (1) is asserted. Receipt:
  `research/frontier-36-complete-step3b-review-def-quasi-projective-morphism.json`.
- **Scope refresh:** Re-recorded pair scope `sufficient` for the changed local
  statement; no assigned item was removed. Receipt hash
  `2aa9ab8ca566748588d237da9c6f2764bbb8659b8d2c4f0b390bceb7c08bd418`.
- **Checks:** Explicit-path precheck returned `0 checked, 0 failing` (no proof
  block); explicit rendering passed for the item and A page; strict selected
  proof-contract passed with zero errors and warnings; coverage checklist
  passed for the A page (71 harvested results, zero errors and warnings); full
  item-dependency-levels passed for 925 items across 60 pages, maximum level
  18. Batch content-policy and final plan validation remain pending.
- **Open published locator concern:** This item depends on
  `def-quasi-compact-and-quasi-separated-morphism`, whose current Stacks URL
  `01KV` resolves to a different §26.21 lemma. The definition's mathematical
  content matches §26.19 Definition 26.19.1 and Lemma 26.19.2 (tags `01K3`,
  `01K4`); this is a stale citation, not a defect in the quasi-compactness
  interface.
- **Next action:** Audit and author `lem-affine-morphism-structure-sheaf-pushforward-localizes`
  at recomputed level 1.

### `def-affine-local-quasi-coherent-algebra` — local notation repaired and rechecked

- **Reason for return:** While auditing its level-1 consumer, I found that the
  local definition used $\widetilde{B_U}$ and principal localization without
  stating how the standard associated module sheaf is read on the principal
  basis. Clarified this earlier level-0 interface before using it.
- **Clarified convention:** For an $R$-algebra $B_U$ with structure map
  $\varphi:R\to B_U$, the associated module sheaf on $\operatorname{Spec}R$
  has sections $B_U[\varphi(r)^{-1}]$ on $D(r)$ and the canonical localization
  maps on inclusions. The existing affine-local property and all promised
  downstream claims remain unchanged.
- **Source read:** Stacks Project, Schemes §26.5, complete relevant construction
  and proof in the official page (tag `01HR`): Lemma 26.5.1, Definition
  26.5.3(3), and Lemma 26.5.4(2),(4)–(5). In particular the source explicitly
  constructs the module localization data on the principal-open basis and
  identifies its sections and restrictions.
- **Dependencies now examined (4):** `def-scheme-over-base`,
  `thm-affine-scheme-ring-anti-equivalence`, `def-affine-scheme-spectrum`,
  and `def-multiplicative-subset-and-localisation`.
- **AC:** Not used by the clarified definition or the target pushforward
  calculation; it does not invoke the published AC-dependent affine-locality
  lemma.
- **Decision and evidence:** `repaired`, confidence 1, after rechecking the
  exact module-localization convention and dependencies. Receipt:
  `research/frontier-36-complete-step3b-review-def-affine-local-quasi-coherent-algebra.json`
  (hash `6283f5706d86a86009b0de416ac4c52ba8eeae7c629a78698cb7791cd433d0ec`).
- **Scope refresh:** Pair scope is again `sufficient`, hash
  `84041c5996e0a11ea971f8d7e81bc8aee0529d78de414a69753d61b4e2bf0151`.
- **Checks:** Explicit-path precheck returned `0 checked, 0 failing`; explicit
  rendering passed for the definition and A page; strict selected
  proof-contract passed with zero errors and warnings; coverage checklist
  passed (74 harvested results, zero errors and warnings); full
  item-dependency-level check passed for 925 items across 60 pages, maximum
  level 18.
- **Open owner obligation:** Owner-held Step 1 readiness
  `research/frontier-36-complete-step1-def-affine-local-quasi-coherent-algebra.json`
  still records the former two dependencies and has the pre-repair hash. The
  owner must refresh it; I did not edit the readiness receipt.
- **Recomputed order:** The change adds no in-run dependency, so levels are
  unchanged. The next unfinished item remains
  `lem-affine-morphism-structure-sheaf-pushforward-localizes` at level 1.

### `lem-affine-morphism-structure-sheaf-pushforward-localizes` — repaired and authored

- **Claim/convention:** For affine $f:X\to S$, every affine chart
  $U=\operatorname{Spec}R$ has an affine inverse image
  $f^{-1}U=\operatorname{Spec}B$ with induced map $\varphi:R\to B$; on each
  principal $D(r)$ the direct-image algebra has sections $B_{\varphi(r)}$ and
  canonical localization restrictions. This identifies $(f_*\mathcal O_X)|_U$
  with the standard module-associated sheaf and proves the pair's
  affine-local module-associated condition.
- **Scaffold repair:** Removed the unnecessary dependencies on
  `lem-affine-morphism-local-on-target` and `def-axiom-of-choice`. The item
  assumes $f$ affine, so its inverse-image chart follows directly from
  `def-affine-morphism-schemes`; the proof now computes each chart and uses
  unique sheaf gluing. Declared all local ring-map, open-localization,
  direct-image, restriction, and sheaf interfaces actually used. Item and
  manifest both list 12 direct dependencies; no in-run dependency was added.
- **Proof outline:** Step 1.1 fixes a chart and obtains its ring map. Step 1.2
  computes $f^{-1}D(r)=D(\varphi(r))$. Step 2.1 identifies local sections and
  the $\mathcal O_U$-algebra map. Step 2.2 treats empty, zero, unit, and
  degenerate cases. Step 3.1 proves restriction compatibility. Step 4.1
  extends the basis isomorphism by sheaf gluing. Step 5.1 applies the local
  definition. Step 6.1 records that no simultaneous choices or AC are used.
- **Sources read:** Stacks Project, Morphisms of Schemes §29.11, Lemma 29.11.3
  (tag `01S8`), full statement and proof (lines 25–37 in the official HTML).
  Its stronger result is not used as a proof shortcut. Stacks Project, Schemes
  §26.5 (tag `01HR`), complete relevant construction and argument: Lemma
  26.5.1; the module-associated basis construction and sheaf extension;
  Definition 26.5.3(3); and Lemma 26.5.4(2),(4)–(5), which give sections and
  localization restrictions. Also rechecked the authored local source
  interfaces for the affine morphism, direct image, open restriction, affine
  spectrum, affine ring map, localization, and sheaf axioms.
- **Proof contract:** Exact excerpts are recorded for all 12 dependencies;
  every numbered step has its actual inputs. The empty, zero, one, degenerate,
  and nonempty-choice boundaries are checked; endpoints and iff directions
  are inapplicable because the claim has no endpoint parameter or biconditional.
- **Decision:** `repaired`, confidence 1, recorded after authoring and checks
  with all 12 direct dependency IDs. Receipt hash
  `18d67766497324a2d39763d15c73e800481fce623c33fe581bd65443f5d6c343`.
- **Checks:** Explicit-path precheck passed; explicit item and A-page rendering
  passed; selected strict proof-contract passed with zero errors/warnings;
  batch-5 coverage checklist passed with 74 harvested results and zero
  errors/warnings; full dependency levels passed for 925 items across 60 pages,
  maximum level 18. Batch content-policy and plan validation remain for the
  stable batch close.
- **Open owner obligation:** Step 1 readiness receipt
  `research/frontier-36-complete-step1-lem-affine-morphism-structure-sheaf-pushforward-localizes.json`
  still lists the former AC and target-locality dependencies and omits the
  repaired interface dependencies. It must be refreshed by the owner; I did
  not edit the owner-held receipt.
- **Next:** Recompute assigned order and continue at level 1 with
  `lem-finite-morphism-affine`.

### `lem-finite-morphism-affine` — repaired and authored

- **Claim and AC boundary:** Every finite morphism is affine. Assuming AC,
  finiteness is equivalent to having an affine target cover whose inverse
  images are affine and whose chart algebras are module-finite. The
  finite-to-affine/local-condition direction uses only the finite-morphism
  definition. In the converse, AC is used exactly in step 1.2 through the
  published affine-locality lemma and in step 8.1 through the published
  distinguished-open cover/unit-ideal lemma. Finite subcovers and the finitely
  many generator/witness selections use finite induction only.
- **Scaffold repair:** Replaced the compressed localization strategy with the
  complete chartwise descent: refine an arbitrary affine chart by a finite
  labelled principal-open subcover; base-change finite charts; identify the
  chart algebras with localizations of one affine coordinate module; lift
  finitely many local generators to numerators; clear denominators; and use
  the AC unit-ideal relation. Added tensor symmetry for the required
  $B\otimes_RR_h\cong R_h\otimes_RB$ identification, and removed the
  unnecessary affine-ring-map supplier. The item and manifest have the same
  20 direct dependencies and dependency level remains 1.
- **Source audit:** Stacks Project, Morphisms §29.45, Lemma 29.45.3 (tag
  `01WI`), official HTML read in full. Its clauses (1) and (2) give exactly
  the finite/local affine-cover equivalence and explicitly defer the proof to
  Algebra Lemma 10.36.14, with some details omitted. Stacks Project, Algebra
  §10.36, Lemma 10.36.14(2) (tag `02JL`), official HTML read in full; it states
  finite-module descent on a finite distinguished-open cover and explicitly
  omits the proof of part (2). The assigned item gives that full direct
  module-generator/denominator-clearing argument. Also inspected the complete
  source interfaces for affine locality, affine chart/ring correspondence,
  principal opens, affine fibre products, module localization, and the
  unit-ideal lemma.
- **Dependencies examined (20):** `def-finite-morphism-schemes`,
  `def-finite-type-and-module-finite-algebras`,
  `def-affine-morphism-schemes`, `lem-affine-morphism-local-on-target`,
  `def-axiom-of-choice`, `cor-affine-scheme-quasi-compact`,
  `def-affine-scheme-spectrum`, `thm-affine-scheme-ring-anti-equivalence`,
  `lem-spectrum-localization-open-immersion`,
  `thm-sections-basic-open-affine-scheme`,
  `thm-affine-fibre-product-tensor-ring`,
  `lem-fibre-product-open-restriction`,
  `lem-spectrum-compactness-open-cover-to-unit-ideal`,
  `def-generated-cyclic-finitely-generated-and-free-modules`,
  `def-localisation-of-a-module`, `def-principal-localisation`,
  `lem-zero-in-a-localised-module`,
  `thm-localisation-of-modules-is-tensor-product`,
  `thm-symmetry-and-associativity-over-a-commutative-ring`, and
  `thm-generated-ideal-description-in-a-commutative-ring`.
- **Boundary/proof audit:** Empty affine target charts and empty inverse-image
  charts use the zero ring/module; $h=0$ and $h=1$ are handled explicitly;
  localization permits zero divisors and nilpotents; no extra finite-type,
  injectivity, flatness, reducedness, Noetherian, separability, or endpoint
  assumptions enter. Both directions of the iff are proved, and the reverse
  carries AC at its statement and every use.
- **Decision:** `repaired`, confidence 1, after completing the proof and
  checks. Scope receipt hash
  `f356bbf3a0f14ea47eedde6a841f8cbec8a44bc052d91deef63a87fa899a23bc`; item
  receipt hash
  `fb1d85e58112802f59798d11e142a7246f9161dccd905da4d28be7a728d5c008`.
- **Checks:** Explicit-path precheck passed; item plus A-page rendercheck
  passed; selected strict proof-contract passed with zero errors and warnings;
  batch-5 coverage checklist passed (75 harvested results, zero errors and
  warnings); full dependency levels passed (925 items across 60 pages, maximum
  level 18). Batch content-policy and plan validation remain for stable batch
  close.
- **Open owner obligation:** The owner-held Step 1 readiness receipt
  `research/frontier-36-complete-step1-lem-finite-morphism-affine.json` still
  lists only the old four dependencies and the old item hash. It must be
  refreshed by the owner; I did not edit that receipt. Its current statement
  and 20-dependency proof inputs are covered by the item decision recorded
  here.
- **Next:** The recomputed order keeps this item at level 1 and places
  `lem-fpqc-cover-submersive` next.

### `lem-fpqc-cover-submersive` — missing scaffold supplied, proof authored

- **Claim:** Under AC, flatness of a scheme morphism is equivalent to
  flatness on every compatible affine chart. For a page-local fpqc cover
  `p:S'→S`, every base change is flat, surjective, and quasi-compact, and a
  subset of the base-changed target is closed exactly when its inverse image
  is closed.
- **Scaffold repair:** The assigned manifest row and strategy existed, but the
  item carrier did not. I authored the complete proof and added the item to
  the existing A page. The strategy now records the actual chart-flatness
  criterion, arbitrary-base-change argument, and closed-set descent using a
  finite affine cover, quotient spectra, flat going-down, and the
  quasi-compact specialization-image criterion; it no longer relies on an
  unproved faithful-flat shortcut. The item and manifest agree on 32 direct
  suppliers and retain level 1. I also created the missing owned B page with
  its nine assigned IDs; sibling pairs' batch rows were preserved.
- **Proof audit:** The chart criterion is proved in both directions. In the
  nontrivial direction, localize the kernel of `I⊗_A B→B` at every prime of
  `B`, use flatness on local rings and exact localization, then use AC to
  place the proper annihilator of a nonzero kernel element in a maximal ideal.
  For closed-set descent, replace the inverse image over each affine target
  chart by a finite disjoint union of affine charts, represented by a finite
  product ring. Its map is flat and surjective. Write the pulled-back closed
  set as `V(J)`, identify the target subset with the image of `Spec(B/J)`,
  lift generalizations by flat going-down, and apply the local image
  criterion. The reverse closedness implication follows from continuity.
- **AC:** Explicitly assumed. It is used in the kernel-localization argument
  to find a maximal ideal containing a proper annihilator, and is inherited
  by the suppliers for base-change surjectivity, flat going-down, and the
  quasi-compact specialization-image criterion. Finite affine subcovers use
  finite extraction only. Empty, zero-ring, zero-ideal, unit-ideal, empty
  source, and degenerate chart cases are addressed in proof step 5.1.
- **Sources read:** Stacks Project, Morphisms §29.26 (tag `01U2`), including
  the complete relevant proof of Lemma 29.26.12 (standalone tag `02JY`),
  which reduces to a local affine target, finite affine source cover,
  quotient spectrum, generalization lifting, and the local image lemma.
  Stacks Project, Algebra Lemma 10.41.5 (tag `00HY`), including both complete
  proofs of the local criterion for closed images. Bibliography and coverage
  map these arguments to the item; the authored proof is direct rather than
  treating the source result as proof text.
- **Dependencies:** The 32 exact direct IDs are recorded in the item and the
  item receipt `research/frontier-36-complete-step3b-review-lem-fpqc-cover-submersive.json`.
  This includes the affine/chart, localization, flatness, quotient-spectrum,
  finite-product, base-change, going-down, and closed-image interfaces.
- **Decision:** `repaired`, confidence 1, after the complete proof and checks;
  receipt hash `5974600a4271a035885561641d321ff471acd72721d6b6e44205125f954a0a24`.
- **Checks:** Explicit-path item precheck and rendering passed; rendering
  covered the item and both owned A/B pages. Selected strict proof-contract
  passed with zero errors or warnings. Coverage checklist passed with 76
  harvested results and no errors or warnings. Full dependency levels passed
  for 925 items across 60 pages, maximum level 18. `validate-plan.mjs` passed
  with no plan errors; batch-wide content-policy and final all-item checks
  remain for stable close.
- **Open owner obligation:** The owner-held Step 1 readiness receipt
  `research/frontier-36-complete-step1-lem-fpqc-cover-submersive.json` still
  has the stale pre-authoring hash and smaller dependency set. I did not edit
  that receipt; owner refresh is required.
- **Next (at that checkpoint):** The dispatch snapshot placed
  `lem-line-bundles-on-projective-three-space-restrict-by-degree` next at level 1;
  its audited continuation below removes an irrelevant dependency and recomputes it to level 0.


### lem-line-bundles-on-projective-three-space-restrict-by-degree — scaffold repaired, proof authored

- **Claim and conventions:** Every invertible sheaf on $\mathbb P^3_k$ is a unique $\mathcal O(n)$, with degree $n$ on each $k$-line; on a smooth plane conic the claimed pullback is $\mathcal O(2n)$ once a $k$-isomorphism $\phi:\mathbb P^1_k\simeq C$ is part of the data; a closed immersion pullback of ambient $\mathcal O(1)$ has $n>0$. The explicit $\phi$ is needed because a smooth conic over an arbitrary field need not have a $k$-point. The line bundle itself is defined as an $\mathcal O$-module locally isomorphic to $\mathcal O$; twists use the chart transitions $e_j=(x_j/x_i)^n e_i$.
- **Scaffold audit and repair:** Replaced the conic parametrization-by-Veronese strategy, which is not valid in characteristic two, with a hyperplane-section divisor argument valid in every characteristic. The statement explicitly includes the required split condition via $\phi$ and retains the assigned conic conclusion. The local proof now derives affine-chart triviality using a finite principal trivializing cover and prime valuations in the polynomial UFD. The direct dependency list is exactly the nine IDs in the item carrier and batch manifest. The irrelevant in-run dependency def-projective-morphism-pre-proj was removed; no in-run item supplies a fact used by this proof.
- **Proof outline:** Step 1.1 builds the three-variable polynomial UFD by iterated Gauss and divides a rational section by its finite prime-valuation product to obtain a nowhere-zero frame on each chart. Step 2.1 computes overlap units and triple cocycles, then explicitly removes scalar constants. Step 3.1 proves twist uniqueness by the two-chart $\mathbb P^1$ transition. Step 3.2 restricts to an arbitrary $k$-line by a linear coordinate change. Step 3.3 intersects a split smooth conic with a plane line; the binary quadratic gives a degree-two divisor, and each closed point $Q$ of $\mathbb A^1_k$ satisfies $\operatorname{div}(p_Q)=Q-\deg(Q)\infty$, so the divisor is linearly equivalent to $2\infty$. Step 4.1 computes sections on two charts: none for $n<0$, constants for $n=0$, and $\langle 1,t\rangle$ for $n=1$; this proves positivity and records sharpness using the identity immersion.
- **Sources read:** Stacks Project, Divisors Lemma 31.29.5, tag 0BXJ, complete proof (Picard group and transition cocycles); Divisors Lemma 31.29.4, tag 0BDA, complete proof (affine-space Picard triviality over a UFD); More on Algebra Lemma 15.119.3, tag 0BCH, complete proof (Picard group of a UFD); Vakil, The Rising Sea §§17.4.8–12, complete relevant passage. The authored proof records the actual valuation/cocycle and degree-two-divisor calculations rather than using a strategy as proof text.
- **Dependencies examined (9):** def-relative-projective-space-standard-charts, def-multivariate-polynomial-ring-by-iteration, lem-gauss-lemma-over-a-ufd, thm-polynomial-ring-over-a-field-is-a-ufd, def-closed-immersion-schemes, def-pullback-module-ringed-spaces, def-module-on-ringed-space, thm-gluing-sheaves, cor-affine-scheme-quasi-compact. All are published library inputs; no AC is used. Finite chart/frame/basis selections only are involved.
- **Decision:** repaired, confidence 1; receipt research/frontier-36-complete-step3b-review-lem-line-bundles-on-projective-three-space-restrict-by-degree.json, hash 8d35db11e6ac739a51b5b5e4fb62ed4eda8f349c74d4f3538e15d61bea62437e. The current pair scope was refreshed as sufficient, receipt hash 3ef59e0f73239123cd65f6f672919a9592f200226022888a9999205acbbdc51d.
- **Recomputed order:** The manifest had label 1, but after removal of the irrelevant def-projective-morphism-pre-proj edge the current run graph computes label 0. The required run-wide dependency-level check now passes (925 items, 60 pages, max level 18). The original dispatch label had led this item to be started after some level-1 items; this is an order deviation from the initial snapshot. Its proof has only published direct suppliers and does not use any later assigned item. All level-0 items that sort before this ID in the recomputed order are complete, and the next uncompleted assigned item remains lem-quasi-finite-morphism-fibre-characterization at level 1. Do not restore an artificial dependency to preserve the stale label.
- **Checks completed:** Explicit-path precheck passed after canonical reflow; explicit rendercheck passed for the carrier and A page (real KaTeX and YAML parsing); selected strict proof-contract passed with zero errors/warnings; batch coverage checklist passed (76 harvested results, zero errors/warnings); full-run item-dependency-levels passed. Batch content-policy, full scoped strict-contract check, explicit rendering of the B page and final validate-plan research/plan-spec.json remain for batch close.
- **Open gaps:** None in this item. The conic clause's split hypothesis is explicit; repeated/tangent and non-rational degree-two intersection points are covered by the divisor calculation. The batch-5 cross-batch dependency input is still []; no cross-batch item use was found, and sibling rows were not changed.
- **Next:** Resume with lem-quasi-finite-morphism-fibre-characterization; reread its carrier/strategy, its dependency statements, and complete Stacks §29.21 / Varieties §33.20 arguments before authoring.


### lem-quasi-finite-morphism-fibre-characterization — scaffold repaired, proof authored

- **Claim:** For a finite-type scheme morphism, quasi-finiteness is equivalent to the pointwise condition that each point is isolated in its scheme-theoretic fibre with finite residue extension, and equivalent to finiteness of every scheme-theoretic fibre.
- **Scaffold audit and repair:** The original strategy correctly required the local fibre algebra and zero-dimensional finite-scheme argument, but omitted a declared supplier for finite-type stability under arbitrary base change. Added the existing published cor-base-change-finite-type-and-products to both the item and batch manifest. Its statement supplies preservation of both locally finite type and quasi-compactness. The item remains dependency level 1. No assigned claim or item was dropped.
- **Proof outline:** Step 1.1 identifies the fibre local ring with B_q/pB_q and applies the finite-type algebra criterion to prove the pointwise iff, including finite residue fields. Step 1.2 proves a finite fibre has isolated points and finite residue fields, retaining nilpotents and the empty fibre. Step 2.1 starts with a quasi-finite morphism, so every point in a fixed fibre is isolated; base-change stability keeps that fibre finite type and quasi-compact. It then follows the complete affine, Artinian decomposition in Stacks tag 06LH to obtain a finite disjoint union of finite local Artinian spectra. Step 3.1 closes the three implications into both directions among all conditions.
- **Sources read completely:** Stacks Project, Morphisms §29.21, tag 01TC: Definition 29.21.1 and full arguments for Lemmas 29.21.3, .5–.7 and .10. Stacks Project, Commutative Algebra, Lemmas 10.122.1–.2 and Definition 10.122.3, tags 00PJ, 00PK, 00PL; the full proof of 00PK reduces to 00PJ and was read. Stacks Project, Varieties, Lemma 33.20.2, tag 06LH, including its affine Noether-normalization argument, Artinian decomposition, discreteness and quasi-compact finite-union conclusion. The batch coverage already maps these source results to this item.
- **Dependencies examined (6):** def-quasi-finite-morphism-schemes, def-quasi-finite-at-a-prime-for-finite-type-algebras, def-locally-finite-type-and-finite-type-morphism, def-scheme-theoretic-fibre, def-finite-morphism-schemes, cor-base-change-finite-type-and-products. The last is an existing published supplier added locally to the scaffold dependency list. No AC or separatedness is used.
- **Decision:** repaired, confidence 1. Item receipt research/frontier-36-complete-step3b-review-lem-quasi-finite-morphism-fibre-characterization.json, hash 0a4f49fd2855e952ad1cd63838d3b7be1d330657c453c06de572c2c7838335f2. Pair scope was refreshed as sufficient; its current hash is 3ef59e0f73239123cd65f6f672919a9592f200226022888a9999205acbbdc51d.
- **Checks completed:** Explicit-path precheck passed; explicit rendercheck passed for this item and the A page; selected strict proof-contract passed with zero errors or warnings; coverage checklist passed with 76 harvested results and zero errors or warnings; full-run dependency-level check passed for 925 items across 60 pages, maximum level 18.
- **Published source-link defect confirmed:** Published item def-quasi-finite-at-a-prime-for-finite-type-algebras cites Stacks URL tag 00PI for Lemma 10.122.2 and Definition 10.122.3. The live official URL 00PI resolves to §10.123, Zariski's Main Theorem. The mathematical definition agrees with the current §10.122 content, but the correct locators are Lemma 10.122.2 tag 00PK and Definition 10.122.3 tag 00PL. Owner repair: split/correct the external references to those exact tags and re-audit consumers. No published item was edited.
- **Open gaps:** None in this item. Empty fibres, zero coordinate rings, a one-point fibre, and nonreduced finite fibres are covered. The published source-link issue is reported for owner reconciliation.
- **Next:** Continue with `lem-relative-algebraic-constants-fg-field-finite` at level 1. Its carrier contains a paused draft; reread it, the local algebraically-independent supplier and every direct dependency, then finish the proof before advancing.


### `lem-relative-algebraic-constants-fg-field-finite` — scaffold repaired, proof authored

- **Claim:** If $K/k$ is a finitely generated field extension, then the elements of $K$ algebraic over $k$ form a finite extension of $k$.
- **Scaffold repair:** The inherited scaffold listed only `def-axiom-of-choice` and proposed AC to scan a finite list and maximize a bounded degree. Replaced that strategy with finite scans and a local maximum-degree proof, with no AC assumption. Audited and declared all 13 actual direct inputs, including the local definition `def-algebraically-independent-finite-tuples-over-a-field`; synchronized the item and batch-5 manifest. No other pair was edited.
- **Proof outline:** A finite scan through field generators selects an algebraically independent subset $T$ and makes the omitted generators algebraic over $k(T)$, hence $K/k(T)$ is finite of degree $n$. Minimal finite dependence and transitivity show that $T$ remains independent over every algebraic intermediate field. For each finite intermediate $L/k$, the polynomial-fraction description of $k(T)$ and injective evaluation show that a $k$-basis of $L$ remains linearly independent over $k(T)$, so $[L:k]\le n$. A scan of the finitely many positive attained degrees gives a maximal degree and one intermediate field $L$ attaining it. For every $a$ algebraic over $k$, the tower $L(a)/L/k$ and maximality force $L(a)=L$; conversely the finite extension $L/k$ is algebraic. This proves $k_{\mathrm{alg}}=L$.
- **Boundary and choice audit:** The empty generating list gives $K=k$, $T=\varnothing$, and $n=1$. The argument also covers $T=\varnothing$, $n=1$, and $0\in k_{\mathrm{alg}}$. No characteristic, separability, or perfectness condition is used. AC is not used: the generating list and every basis are fixed one at a time, the degree scan is finite, and one field witness is fixed at the attained maximum.
- **Sources read completely:** Stacks Project, Fields §9.26 Definition 9.26.1 (tag `030D`), Definition 9.26.9 (tag `037I`), Lemma 9.26.10 (tag `0G1M`), and Lemma 9.26.11 (tag `037J`); Fields §9.8 Lemma 9.8.6 (tag `09GH`). The proof reconstructs the argument rather than relying on Lemma 9.26.11's compressed final implication from bounded degrees to finiteness.
- **Direct dependencies examined (13):** `def-algebraic-and-transcendental-elements`, `def-algebraically-independent-finite-tuples-over-a-field`, `def-extension-degree-and-finite-extension`, `def-finitely-generated-field-extension`, `def-field-extension-generated-subfields-and-simple-extension`, `def-relative-algebraic-closure`, `cor-element-algebraic-iff-simple-extension-finite`, `cor-independent-set-is-no-larger-than-a-finite-spanning-set`, `thm-algebraic-elements-form-a-subfield`, `thm-finite-field-extensions-are-algebraic`, `thm-finitely-generated-algebraic-extensions-are-finite`, `thm-tower-law-for-finite-field-extensions`, `thm-transitivity-of-algebraicity`.
- **Decision:** `repaired`, confidence 1, receipt hash `43b36b827e9f2ea7b87505d900846b5bbcf60379d11cf5e0b0ac35ab8ac8ec20`. The pair's current scope receipt remains sufficient with hash `3ef59e0f73239123cd65f6f672919a9592f200226022888a9999205acbbdc51d`.
- **Checks completed:** Explicit-path precheck passed for the item; explicit rendering passed for the item and A page with real KaTeX and YAML parsing; selected strict proof-contract passed with zero errors/warnings; batch-5 coverage checklist passed (76 harvested results, zero errors/warnings); `validate-plan research/plan-spec.json` exited 0 with no plan errors. The plan spec has the page at order 366.069 with the same two page prerequisites but `items: []`, so that validation covers this page only at page level; Step 4 must reconcile the written batch inventory.
- **Batch check still open:** Batch content-policy reported 34 missing item files from the not-yet-authored batch-5 inventory; it reported no provenance or source-policy defect for this completed target. Re-run after finishing the assigned pair. Full-run item-dependency-levels reported one unrelated sibling mismatch: `cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class` on `chern-weil-theory-and-characteristic-forms-examples` (batch 19) is labeled level 6 but computes to level 5 from its declared dependencies. Do not edit that pair; route the exact item and correction to its owner.
- **Open owner obligation:** `research/frontier-36-complete-step1-lem-relative-algebraic-constants-fg-field-finite.json` remains stale. It lists only `def-axiom-of-choice` and says the item-level suppliers and strategy were unchanged, while this completed item now has 13 direct dependencies and a finite-scan strategy. Do not edit the owner receipt; owner refresh is required.
- **Published concerns carried to the dispatch report:** The local independence definition addresses a missing declared definition in published `lem-ag-finite-field-extension-separable-factorization` (Fact F2) and `def-ag-separating-transcendence-basis`; their use of algebraic independence is attributed to `def-algebraic-and-transcendental-elements`, whose full definition does not define that term. The previously confirmed stale Stacks locators remain: `def-quasi-finite-at-a-prime-for-finite-type-algebras` uses tag `00PI` where Lemma 10.122.2 and Definition 10.122.3 are tags `00PK` and `00PL`; `def-quasi-compact-and-quasi-separated-morphism` uses tag `01KV`, which resolves to an unrelated §26.21 cancellation lemma rather than Definition 26.19.1 tag `01K3` and Lemma 26.19.2 tag `01K4`. Also recheck and report the proof-locality concern in `thm-affine-closed-immersions-quotient-rings`; the assigned local quotient-and-base-change lemma is the proposed complete supplier.
- **Next:** Recomputed assigned order puts `lem-relative-spec-glues-affine-algebras` next at level 1. Reread that item, its direct suppliers and source arguments before auditing and authoring it.

### `lem-relative-spec-glues-affine-algebras` — scaffold repaired, proof authored

- **Claim and conventions:** For an affine-locally module-associated sheaf of
  commutative unital `O_S`-algebras, set `B_U = Γ(U,A)` for every affine open
  `U`. The spectra glue canonically to `π: Spec_S A → S`, with
  `π^{-1}(U) ≅ Spec Γ(U,A)` for every affine `U`; principal restrictions are
  the spectra of `B_U[φ_U(r)^{-1}]`; and for every open `T⊂S`, the construction
  for `A|T` is canonically `Spec_S A ×_S T`. Zero algebras and empty charts
  are allowed.
- **Scaffold audit and repair:** The original overlap/localization strategy
  was mathematically viable but did not prove the required nested-chart open
  restriction, the structure morphism to `S`, or the exact open-base-change
  interface. I replaced the strategy with the all-affine atlas and its
  principal-open verification. I added the actual direct suppliers for the
  affine ring correspondence, gluing locally ringed spaces, and open
  fibre-product restriction; removed the unused general fibre-product
  existence dependency. Manifest and item now agree on six direct dependencies.
  The target remains dependency level 1 because its only in-run prerequisite
  is `def-affine-local-quasi-coherent-algebra`. No local supplier or pair was
  added, and the later affine-morphism characterization was not used.
- **Proof outline:** For each affine inclusion `U⊂V`, restriction gives
  `Spec Γ(U,A)→Spec Γ(V,A)`. Cover `U` by distinguished opens `D_V(f)⊂U`;
  the two local chart rings both identify with `Γ(D_V(f),A)`, so the map is an
  open immersion onto the full inverse image of `U`. For arbitrary affine
  overlaps, use all affine opens contained in the intersection; the inclusion
  maps glue because every common refinement is induced by the same sheaf
  restriction. On triple overlaps, affine charts in the triple intersection
  make the cocycle identity literal. Glue the local base maps and structure
  sheaf maps to obtain `π`; the same affine atlas over any open `T` is the
  open inverse image `π^{-1}(T)`, which represents the base change along
  `T→S`.
- **Sources read completely:** Stacks Project, Constructions of Schemes §27.2,
  Lemma 27.2.1 (tag `01LH`), complete statement and proof; §27.3, Situation
  27.3.1 and Lemmas 27.3.2–27.3.4 (tag `01LL`), all complete displayed
  arguments; Schemes §26.5, Definition 26.5.3 and Lemma 26.5.4 (tag `01HR`),
  including the module-associated sheaf construction and all seven listed
  conclusions. Exact coverage records were added for these locators. Stacks
  Lemma 27.3.2 uses general quasi-coherence and an affine tensor-product
  identity; the authored argument rederives its needed chart restriction from
  the declared principal-open localization condition, so no later general
  sheaf theory is imported.
- **Dependencies examined (6):** `def-affine-local-quasi-coherent-algebra`,
  `thm-affine-scheme-ring-anti-equivalence`, `thm-gluing-affine-schemes`,
  `thm-gluing-ringed-and-locally-ringed-spaces`,
  `lem-spectrum-localization-open-immersion`, and
  `lem-fibre-product-open-restriction`. Their complete live item statements
  and proofs were reread. No AC is used: the construction takes the full set
  of affine opens as its atlas and uses only pointwise affine refinements.
- **Boundary audit:** Empty base/open charts have `Γ(∅,A)=0` and `Spec(0)=∅`;
  a zero chart algebra has empty spectrum and zero localizations; `r=0` gives
  the empty principal open and zero localization; `r=1` gives the identity
  localization. The empty intersection gives the unique empty overlap map.
  No interval endpoints or iff cases occur. No simultaneous chart or point
  selection is made.
- **Decision and receipts:** `repaired`, confidence 1, item receipt hash
  `10b640ccc550c9be3b0a0482a4eb5da5440c86c899df1b1a9edcd6f01e0db325`.
  Scope was refreshed as `sufficient` after making the implied affine-preimage
  and restriction claims explicit; current pair hash
  `6d0674ec62900bec398231a9f1083dcca595554bc3060df1cf904c649e403fbf`.
- **Checks completed:** Explicit-path precheck passed (1/1); explicit rendering
  passed for the item and A page; selected strict proof-contract passed (0
  errors/warnings); batch-5 coverage checklist passed (81 harvested results,
  0 errors/warnings); full run item-dependency-level check passed (925 items,
  60 pages, maximum level 18); `validate-plan research/plan-spec.json` passed.
  The plan spec still lists no item inventory for this A page, so validation
  covers the page only at page level and Step 4 must reconcile item edges.
  Batch content-policy currently reports 33 missing files among the other
  assigned items (52 scoped total), 0 warnings, and no finding for this item;
  rerun for final batch close.
- **Open owner obligation:** Owner-held readiness file
  `research/frontier-36-complete-step1-lem-relative-spec-glues-affine-algebras.json`
  still lists the old four dependencies and says suppliers are unchanged. The
  current six-dependency proof invalidates that owner receipt; owner refresh is
  required. I did not edit or replace it.
- **Next at that checkpoint:** Recomputed assigned order kept this item at
  level 1 and put `lem-universally-closed-valuative-existence-quasicompact`
  next. After the full dependency graph was recomputed again, its current
  order and the dispatch-label discrepancy are recorded below.

### `lem-universally-closed-valuative-existence-quasicompact` — scaffold repaired and authored

- **Scaffold audit and repair:** The claim is retained: under AC, quasi-compact
  universal closedness is equivalent to existence of lifts for every
  valuation-ring diagram, and the DVR restriction fails. The scaffold strategy
  did not supply the reduced closed-subscheme construction needed to turn a
  closed subset into a valuative argument, and its DVR example needed an
  explicit non-discrete valuation and a classification of possible generic
  kernels. Added the existing suppliers
  `thm-radical-as-intersection-of-primes` and
  `thm-sections-basic-open-affine-scheme` to the direct dependencies, then
  synchronized item and manifest at 37 dependencies. No pair item or claim
  was added or dropped.
- **Claim and conventions:** For quasi-compact $f:X\to S$, assuming AC,
  universal closedness is equivalent to every diagram over a valuation ring
  $R\subset K$ with fraction field $K$ admitting a lift. The same item proves
  that testing only DVRs fails, using the principal open $D(t)\subset
  \operatorname{Spec}R$ for a rank-two lexicographic valuation ring.
- **Proof outline:** The forward direction base-changes to $\operatorname{Spec}R$,
  takes a point specializing the generic image over the closed point, and
  obtains a local overring of $R$ inside $K$. A valuation ring has no proper
  local dominating overring inside its fraction field, so the overring is
  $R$ and yields the lift. For the converse, a closed subset $Z\subset X_T$
  is given its reduced structure. Radical quotient charts agree on common
  principal neighborhoods: localization preserves radicals, and AC's
  radical-as-intersection-of-primes theorem identifies radical ideals with
  the same vanishing set. These charts glue. For any specialization in its
  image, the local image of $\mathcal O_{T,t}$ in the residue field of a
  chosen point of $Z$ is dominated by a valuation ring; a lift for $f$ then
  forces the specialization into the image. Quasi-compactness and the AC
  specialization-closed image criterion make that image closed.
- **DVR witness:** With $F=\operatorname{Frac}(k[\mathbb Q])$, the least-exponent
  valuation $w$ on $F$, $K=F((u))$, and
  $v(h)=(\operatorname{ord}_u h,w(\operatorname{lc}_u h))$ in
  $\mathbb Z\times\mathbb Q$ lexicographically, the nonnegative part $R$ is a
  valuation ring with fraction field $K$. The constant-coefficient map has
  prime kernel $P$ and residue image the rank-one valuation ring $W$. The
  maximal ideal is $\mathfrak m=\{v>0\}$, $\sqrt{tR}=\mathfrak m$, and
  $P\subsetneq\mathfrak m$, so $D(t)$ is quasi-compact and not closed. Any
  prime kernel avoiding $t$ is $0$ or $P$: a first-coordinate-zero element
  of a nonzero such prime would force $t$ into it; an element with positive
  first coordinate forces $u$ into it, after which the value comparisons put
  all of $P$ in it. If a DVR map made $t$ a nonunit, its contraction would be
  $\mathfrak m$. For kernel $0$, the inequalities from $u/t^n\in R$ force
  the positive integer value of $t$ to be unbounded. For kernel $P$, the
  injective map $W\to A$ and elements $t^{1/(2n)}$ force the same
  contradiction. Thus $t$ is always a unit and each DVR diagram lifts.
- **AC:** Explicit statement assumption and direct dependency
  `def-axiom-of-choice` are present. The only AC uses are (i) radical-ideal
  uniqueness when gluing reduced quotient charts, via
  `thm-radical-as-intersection-of-primes`; (ii) domination of the local image
  by a valuation ring, via
  `lem-local-domain-dominated-by-valuation-overring`; and (iii) the
  quasi-compact specialization-closed image criterion, via
  `lem-quasi-compact-scheme-image-specialization-closed`. The forward
  implication and DVR counterexample use no AC. Preserve this assumption in
  the dependent `thm-valuative-criterion-properness` when it is authored.
- **Sources read completely:** Stacks Project, Schemes Lemma 26.19.8
  (tag `01K9`, closed maps and specialization lifting);
  Lemma 26.20.2 (tag `01KC`, universal closedness and specialization lifting
  after arbitrary base change); Lemma 26.20.4 (tag `01J8`, valuation rings
  witnessing specializations with a prescribed residue-field extension);
  Lemma 26.20.5 (tag `01KE`, equivalence of specialization lifting and the
  existence part); Proposition 26.20.6 (tag `01KF`, the quasi-compact
  universal-closedness criterion). The displayed arguments were read in full.
  The local proof supplies the gluing and the DVR counterexample beyond the
  formal Stacks reduction. Direct dependency items/statements and source
  passages were examined as recorded in the item contract and the preceding
  dependency audit; after resume, the key stalk, radical, basic-open and
  valuative sources were rechecked.
- **Direct dependencies (37):** `cor-affine-scheme-quasi-compact`,
  `cor-specialisation-order-is-prime-inclusion`, `def-affine-open-subscheme`,
  `def-affine-scheme-spectrum`, `def-axiom-of-choice`,
  `def-base-change-morphism-schemes`, `def-closed-immersion-schemes`,
  `def-discrete-valuation`, `def-discrete-valuation-ring`,
  `def-fibre-product-schemes-universal-property`, `def-field-of-fractions`,
  `def-local-ring`, `def-localisation-at-a-prime-ideal`,
  `def-morphism-of-schemes`, `def-open-immersion-schemes`,
  `def-prime-spectrum-and-vanishing-sets`,
  `def-principal-distinguished-subset-of-spectrum`,
  `def-quasi-compact-and-quasi-separated-morphism`,
  `def-residue-field-scheme-point`, `def-scheme`,
  `def-specialisation-and-generic-point`,
  `def-universally-closed-morphism`, `def-valuation-on-a-field`,
  `def-valuation-ring`, `def-valuative-diagram-separatedness`,
  `lem-base-change-quasi-compact-morphisms`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `lem-field-valued-points-of-schemes`,
  `lem-local-domain-dominated-by-valuation-overring`,
  `lem-quasi-compact-scheme-image-specialization-closed`,
  `lem-spectrum-localization-open-immersion`, `lem-valuation-ring-is-local`,
  `thm-affine-scheme-ring-anti-equivalence`, `thm-gluing-affine-schemes`,
  `thm-radical-as-intersection-of-primes`,
  `thm-sections-basic-open-affine-scheme`,
  `thm-stalk-structure-sheaf-prime-localization`.
- **Boundary audit:** Empty $X$ or $Z$ gives empty image; zero affine charts
  contribute no points; the field valuation-ring case is the identity
  generic map; identity specializations use the same prime-inclusion proof;
  no interval or endpoint parameters occur. The forward and reverse iff
  implications and both possible DVR kernels are treated. No choice-free
  claim is made for the three AC-dependent steps.
- **Decision and receipts:** `repaired`, confidence 1, receipt hash
  `61aa6798b9c902754f0b1d8e974d3c3880020e8eba2a16e272c5b1b6ff19fad8`.
  The pair's refreshed current scope decision is `sufficient`, confidence 1,
  hash `7998d5c26f581d69a213e1824d3a5703d646e64ec115877590a0b791a3e5e9bc`.
- **Checks:** Explicit-path precheck passed (1/1); explicit rendering passed
  for the item and A page; selected strict proof-contract passed (0 errors,
  0 warnings); run-wide item-dependency-levels passed (925 items across 60
  pages, maximum level 18). Batch coverage, content-policy, full batch
  contracts and plan validation remain pair-close checks.
- **Order recomputation:** Current levels put all 11 completed A items at
  level 0, including `lem-line-bundles-on-projective-three-space-restrict-by-degree`;
  the generated dispatch called that item level 1. Its live manifest has no
  in-run prerequisite, and the run-wide checker confirms label 0. It is
  already authored and decision-closed, so no re-authoring is needed. The
  current next open item is level 1,
  `ex-finite-power-map-affine-line` (B page). Keep this dispatch-label
  mismatch visible for Step 4 reconciliation.
- **Open obligations:** The owner-held Step-1 readiness record for this item
  still has status `ready` and names only five dependencies
  (`def-axiom-of-choice`, `def-universally-closed-morphism`,
  `lem-field-valued-points-of-schemes`,
  `lem-local-domain-dominated-by-valuation-overring`, and
  `lem-quasi-compact-scheme-image-specialization-closed`), while the authored
  item/manifest now declare 37 direct dependencies and the expanded proof
  inputs. Its receipt hash `e8f8cf049a2675a5d18036bd38f8c8f0d437e2eb5deda7bfdbf458cd18f779ce`
  must be refreshed by the owner; it was not edited. AC must remain explicit
  in dependent results.
  No new local supplier item was added. Existing published concerns remain in
  the handoff list above; this item introduces no additional published-item
  concern.
- **Next:** Audit and author `ex-finite-power-map-affine-line` (level 1, B).
  The run-wide dependency-level check is now clean; the earlier batch-19 label
  mismatch no longer appears in the current graph.

### `ex-finite-power-map-affine-line` — scaffold repaired and authored

- **Scaffold audit and repair:** The manifest strategy correctly suggested the
  exponent-residue basis, but did not prove the finite condition on every
  affine target open, and its derivative shortcut did not establish
  inseparability. The all-open proof now uses the Zariski closed-set theorem
  and the PID property to write each open as $D(g)$, identifies its preimage
  with the corresponding localization, and proves the localized basis is
  independent. The characteristic case uses the explicit element
  $t^{n/p}$ and its repeated-root minimal polynomial. Added three direct
  published dependencies needed by those arguments:
  `lem-zariski-closed-set-axioms`, `def-principal-localisation`, and
  `lem-zero-in-a-localised-module`. Item and manifest now agree on all 19
  direct dependency IDs; no pair item or promised case was added or dropped.
- **Claim/conventions:** For a field $k$ and $n\ge1$, the map
  $\operatorname{Spec}k[t]\to\operatorname{Spec}k[s]$ induced by
  $s\mapsto t^n$ is finite, and $k[t]$ is free of rank $n$ with basis
  $1,t,\ldots,t^{n-1}$. If $\operatorname{char}(k)=p>0$ divides $n$, the
  function-field extension $k(t)/k(s)$ is inseparable. The $n=0$ map
  $s\mapsto1$ is not finite. No AC is used.
- **Proof outline:** Write each exponent uniquely as $qn+i$ to obtain the
  basis and injectivity. For arbitrary affine $U\subseteq\operatorname{Spec}k[s]$,
  its complement is $V(I)$; since $k[s]$ is a PID, $I=(g)$ and $U=D(g)$.
  The pullback is $\operatorname{Spec}k[t]_{g(t^n)}$ over
  $\operatorname{Spec}k[s]_g$. Numerator decomposition proves spanning, and
  the zero-in-localization criterion plus the domain property proves
  independence. The $g=0$ chart is the empty scheme with zero ring. For
  $p\mid n$, $r=n/p$ satisfies $0<r<n$; $t^r\notin k(s)$ because the
  exponents in a proposed equality $t^rQ(t^n)=P(t^n)$ lie in disjoint residue
  classes modulo $n$. Its minimal polynomial divides $X^p-s=(X-t^r)^p$ and
  has degree at least two, hence a repeated root. For $n=0$, the module action
  factors through $k[s]/(s-1)\cong k$, while $k[t]$ has infinite dimension
  over $k$.
- **Sources read completely:** Stacks Project, Morphisms of Schemes,
  Definition 29.45.1 (tag `01WH`), whose finite condition quantifies over
  every affine target open; Lemma 29.45.3 (tag `01WI`), whose equivalence
  includes an affine-cover criterion but whose displayed proof delegates to
  Algebra Lemma 10.36.14 and omits details for finite-module descent; and
  Stacks Algebra Lemma 10.36.14 (tag `02JL`), whose part (2) proof is marked
  omitted. The proof does not rely on either omitted descent argument. Vakil,
  *Foundations of Algebraic Geometry*, 2011 public draft, §8.3.6, “Example 1:
  Branched covers,” printed p.184 (PDF p.183), states finiteness and the
  generating set for a degree-$n$ polynomial map. The authored computation
  specializes it to $p(t)=t^n$ and proves freeness and all affine-open cases.
  The exact Vakil locator was added to batch-5 coverage; the existing Stacks
  finite-definition coverage maps to the assigned definition item.
- **Dependencies examined (19):**
  `cor-polynomial-ring-over-a-field-is-a-pid`,
  `cor-rational-function-field-as-a-fraction-field`,
  `def-affine-scheme-spectrum`, `def-algebraic-and-transcendental-elements`,
  `def-finite-morphism-schemes`,
  `def-finite-type-and-module-finite-algebras`, `def-principal-localisation`,
  `def-prime-spectrum-and-vanishing-sets`,
  `def-principal-distinguished-subset-of-spectrum`,
  `def-repeated-root-and-separable-polynomial`, `def-ring-characteristic`,
  `def-separable-elements-and-separable-extensions`,
  `ex-affine-n-space-over-arbitrary-base`, `lem-zariski-closed-set-axioms`,
  `lem-spectrum-localization-open-immersion`,
  `lem-zero-in-a-localised-module`,
  `thm-affine-scheme-ring-anti-equivalence`,
  `thm-characteristic-of-a-field-is-zero-or-prime`,
  `thm-evaluation-kernel-and-minimal-polynomial`. The definition of finite
  morphism, module-finite, the localization fraction and zero criteria, the
  vanishing-set topology, the rational function fields, and the minimal
  polynomial/separability clauses were reread in their live items.
- **Boundary audit:** $U=\varnothing$ is $D(0)$ and has zero coordinate rings;
  $U=\operatorname{Spec}k[s]$ is $D(1)$; $n=0$ and $n=1$ are computed
  explicitly; the fixed source is nonempty; no interval endpoints or
  iff-cases occur; and no simultaneous choice is made.
- **Decision and receipt:** `repaired`, confidence 1, with all 19 examined
  dependency IDs; receipt hash
  `2c0bf4de0ee76def8cc91c52d4232ef503929bc417046f7d853f87bd7ebb0556`.
  The current pair scope remains `sufficient`, confidence 1, hash
  `7998d5c26f581d69a213e1824d3a5703d646e64ec115877590a0b791a3e5e9bc`;
  this item was already in the scoped inventory, so its direct-dependency and
  proof-strategy repairs do not change the scope hash.
- **Checks:** Explicit-path precheck passed (1/1); explicit rendering passed
  for the item and B page; selected strict proof-contract passed (1/1, zero
  errors/warnings); manifest and item dependencies match at 19 IDs; run-wide
  item-dependency-levels passed (925 items, 60 pages, maximum level 18). The
  final batch coverage, content-policy, full strict-contract, and plan checks
  remain pair-close checks.
- **Open owner obligation:** The owner-held Step-1 readiness record
  `research/frontier-36-complete-step1-ex-finite-power-map-affine-line.json`
  remains `ready` with only `def-finite-morphism-schemes` declared, receipt
  hash `61a4009bb719f6ad4b0c3d125013f173988a69d4371467fa1a8de1cea8b5dd56`.
  It must be refreshed against the completed proof and 19 dependencies by the
  owner; I did not edit it. No local supplier item was added. No new published
  item defect was identified.
- **Recomputed order and next:** The live dependency graph still places this
  item at level 1. Among the remaining owned items, the next is level 2
  `def-complete-variety` on A, followed by the other level-2 items in page
  order. The dispatch's earlier label mismatch for
  `lem-line-bundles-on-projective-three-space-restrict-by-degree` remains
  recorded above for Step 4 reconciliation.

### `def-complete-variety` — authored

- **Scaffold audit:** The assigned statement is a terminology definition, not a
  theorem. It correctly makes completeness relative to the structure morphism
  over the given field. The authored wording retains the `k`-variety domain,
  identifies completeness with properness of $X\to\operatorname{Spec}k$, and
  keeps the separate warning that no topology on $X(k)$ is part of the claim.
  The existing local convention defines a variety using integrality,
  finite type, and the affine-overlap separation condition. No item or claim
  changed, and the two manifest prerequisites match the item file.
- **Source read completely:** Vakil, *Foundations of Algebraic Geometry*,
  2011 public draft, §11.3, including Definition 11.3.1 and its immediate
  example (printed p.249; PDF p.248). The text defines proper morphisms and
  says a $k$-scheme is often called complete when it is proper, while adding
  that the book itself will not use this terminology. This is a terminology
  qualification, not a proof of the properness criterion. The page adopts the
  assigned convention explicitly; no mathematical uncertainty remains.
- **Dependencies examined (2):** `def-proper-morphism` and
  `def-variety-scheme-theoretic`. The latter's referenced integral-scheme
  convention states that integral schemes are nonempty, which excludes the
  empty/zero scheme here.
- **AC and boundaries:** No choice is used. Empty and zero schemes are outside
  the stipulated integral-variety domain; there is no numerical one case or
  interval endpoint. The degenerate-case note records that this definition
  concerns the proper structure morphism and imposes no topology on rational
  points. The defining forward and reverse readings are both recorded in the
  proof contract by unpacking the existing proper-morphism definition.
- **Decision and receipt:** `accept`, confidence 1, with both direct
  dependencies examined; receipt hash
  `f8f846fc018223ecab796706ca91e4dfe336c5cd5bc560f6f91946556a1c2ed2`.
  The owner-held Step-1 readiness receipt remains `ready` and lists those same
  two dependencies; no refresh obligation is introduced.
- **Checks:** Explicit-path precheck reported `0 checked, 0 failing` because
  this definition has no proof block; rendering passed for the item and A page;
  selected strict definition-contract check passed (1/1, zero
  errors/warnings); item/manifest dependencies match; run-wide
  item-dependency-levels passed (925 items across 60 pages, maximum level 18).
  The A page frontmatter and overview now include this item, and coverage maps
  Vakil's terminology note to it. Pair-close batch checks remain open.
- **Next:** Recomputed live order keeps this item at level 2. The next open
  owned item is `lem-finite-stable-base-change-composition` on A (level 2).

### `lem-finite-stable-base-change-composition` — scaffold repaired and authored

- **Scaffold audit and repair:** The scaffold promised base-change stability
  without stating the assumption required by its assigned affine-cover
  criterion. The completed claim now assumes AC for arbitrary base change and
  separately says composition is choice-free. Removed the unused direct edge
  to `lem-affine-morphism-local-on-target`; added direct inputs
  `def-scheme` (for affine neighborhoods in the new target) and
  `def-finite-type-and-module-finite-algebras` (for explicit finite module
  generators). Item and manifest agree on these eight dependencies.
- **Claim and argument:** For `f:X→S` finite and any `T→S`, index a cover of
  `T` by all pairs of affine opens `W⊂T`, `U⊂S` with `g(W)⊂U`. If
  `f⁻¹(U)=Spec B` and `W=Spec A′`, open restriction and the tensor-product
  formula identify the pullback over `W` with `Spec(B⊗_A A′)`; tensoring a
  finite set of `A`-module generators gives finite `A′`-module generators.
  AC is used exactly to apply the converse affine-cover criterion
  `lem-finite-morphism-affine`. For composition, over each affine target
  `Spec A`, the successive coordinate rings are `A→B→C`; products of finite
  generating lists for `B/A` and `C/B` generate `C/A`, with no AC.
- **Sources read completely:** Stacks Project, Morphisms of Schemes §29.45,
  Lemmas 29.45.5–29.45.6 (tag `01WG`); the composition statement delegates to
  Algebra Lemma 10.7.3 (tag `00GL`), whose product-generator proof was read in
  full. The base-change statement delegates to Algebra Lemma 10.36.13 (tag
  `02JK`); its finite case proof is omitted. The local proof supplies the
  tensor-generator argument instead of relying on that omitted proof.
- **Dependencies examined (8):** `def-finite-morphism-schemes`,
  `lem-finite-morphism-affine`, `thm-fibre-products-of-schemes-exist`,
  `def-axiom-of-choice`, `thm-affine-fibre-product-tensor-ring`,
  `lem-fibre-product-open-restriction`, `def-scheme`, and
  `def-finite-type-and-module-finite-algebras`.
- **Boundaries and AC:** Empty targets and inverse-image charts use the zero
  ring and the empty module generating set; identity maps have generator `1`.
  Zero tensor rings remain zero. There are no endpoint or iff cases. The
  cover uses all eligible affine pairs, so there is no pointwise simultaneous
  choice. Composition fixes only two finite generating lists.
- **Decision and scope:** `repaired`, confidence 1, receipt hash
  `5b5979b92cca6d174ec3ff6c708b6ff671aad683638e632cf277eaf4212c9627`.
  The refreshed A/B scope decision is `sufficient`, confidence 1, current
  hash `3558a51ed212655e16eebe7ec3ace8e3b56516dbc4fc8776d15bb2f2d81c3648`.
  Coverage now maps both Stacks Lemmas 29.45.5 and 29.45.6 as included.
- **Checks run:** Explicit-path precheck passed (1/1); explicit rendering
  passed for the item and A page; selected strict proof-contract passed (1/1,
  zero errors and warnings); item/manifest direct dependencies match at 8;
  run-wide `item-dependency-levels` passed (926 items across 60 pages, maximum
  level 18). Batch content-policy, complete batch contracts, coverage
  checklist, and `validate-plan` remain pair-close checks.
- **Open owner obligation:** The owner-held Step-1 readiness receipt
  `research/frontier-36-complete-step1-lem-finite-stable-base-change-composition.json`
  is stale: it records seven old dependencies, retaining the removed
  `lem-affine-morphism-local-on-target` edge and omitting the two new direct
  inputs. Its prior owner decision was not edited; the owner must refresh it.
- **Assumption propagation for the next theorem:** The level-3 scaffold
  `thm-finite-morphism-integral-closed` directly consumes this lemma and says
  to apply universal closedness after arbitrary base change. Its statement
  must carry AC when audited and authored. Its existing direct dependency on
  `def-axiom-of-choice` is already present. Propagate that qualification to
  later consumers only where their actual arguments use this theorem.
- **Next item after live order recomputation:**
  `lem-fpqc-descent-properness-components` (A, level 2). There are 23 of 52
  owned items closed and 29 remaining.

### `lem-fpqc-descent-properness-components` — scaffold repaired and authored

- **Claim and conventions:** Under AC, if `p:S′→S` is fpqc in this page's
  flat/surjective/quasi-compact convention and `f′:X×_S S′→S′` is its
  pullback, then quasi-compactness, finite type, separatedness, and universal
  closedness each hold for `f` iff they hold for `f′`.
- **Scaffold audit and repair:** The scaffold tried to descend finite type
  through a result about finite generation of modules. That result does not
  descend finite-type algebra generators. Replaced the appeal with an affine
  proof: for nonempty affine `U=Spec A` and `V=Spec C` over it, cover
  `p⁻¹(U)` by a finite nonempty affine family `U_i=Spec B_i`; finite type of
  `f′` gives finite-type chart algebras `C⊗_A B_i`; the finite product
  `B=∏B_i` is faithfully flat over `A`; collect coefficients of finite chart
  algebra generators into `C₀=A[c_1,…,c_r]`; right exactness gives
  `B⊗_A(C/C₀)=0`, and faithful-flat module detection gives `C=C₀`.
  Empty target charts are excluded before forming this product. Quasi-compact
  descent uses the continuous surjective image of the quasi-compact pullback.
  Universal closedness uses the exact image identity after arbitrary base
  change; separatedness descends by applying that result to the diagonal,
  then using immersion plus closed image. All four ascents use base-change
  stability or the defining property. A second audit found that importing
  `lem-diagonal-is-immersion` or
  `lem-separated-stable-under-base-change` would transitively consume the
  published quotient theorem described above. Removed both edges and supplied
  the needed local proof in step 1.4: take the full family of affine pairs
  `U_i=Spec B_i`, `V_i=Spec A_i` with `f(U_i)⊂V_i`; on the open
  `Q_i=pr_1⁻¹(U_i)∩pr_2⁻¹(U_i)=Spec(B_i⊗_{A_i}B_i)`, the diagonal is induced
  by the surjective multiplication map. Its kernel quotient is explicitly
  isomorphic to `B_i`, so the assigned quotient/base-change supplier and
  affine anti-equivalence give a closed immersion on each `Q_i`; target
  locality glues these to a closed immersion into the open union `Q`, hence an
  immersion into `X×_S X`. The item and manifest now agree on 38 direct
  dependencies.
- **AC and case audit:** AC is declared in the statement and `A1`. Its exact
  uses are the affine-chart flatness and fpqc submersiveness suppliers; the
  flat-plus-surjective-spectrum faithfully-flat criterion and nonzero-module
  detection; extending `{1}` to a basis of `κ(x)/κ(t)` to construct a linear
  functional, followed by maximal-ideal existence in the nonzero tensor of
  residue fields; and arbitrary base change of the closed-immersion supplier.
  Finite affine subcovers and the finitely many generator lists require only
  finite choice. The proof records empty source/target, zero-ring charts, the
  identity cover, no endpoint parameters, and the descent and ascent direction
  for each of the four iff claims.
- **Sources reread completely:** Stacks Project, *Descent* §35.23, tags
  [02KQ](https://stacks.math.columbia.edu/tag/02KQ) (quasi-compactness),
  [02KS](https://stacks.math.columbia.edu/tag/02KS) (universal closedness),
  [02KU](https://stacks.math.columbia.edu/tag/02KU) (separatedness),
  [02KX](https://stacks.math.columbia.edu/tag/02KX) (locally finite type),
  [02KZ](https://stacks.math.columbia.edu/tag/02KZ) (finite type), and
  [02L1](https://stacks.math.columbia.edu/tag/02L1) (properness); complete
  displayed arguments and delegated dependencies were reread. In particular,
  02KS descends universal closedness by image comparison and submersiveness;
  02KU descends separatedness by applying that result to the diagonal and
  using that it is an immersion. Also reread the complete
  coefficient-collection proof in Commutative Algebra
  [Lemma 10.126.1, tag 00QP](https://stacks.math.columbia.edu/tag/00QP), the
  diagonal argument in Morphisms of Schemes [Lemma 29.26.12, tag
  02JY](https://stacks.math.columbia.edu/tag/02JY), and the published
  quotient-classification arguments [01IN](https://stacks.math.columbia.edu/tag/01IN)
  and [01IH](https://stacks.math.columbia.edu/tag/01IH). The local proof
  supplies the finite-type algebra-generator descent argument rather than
  relying on an omitted source proof.
- **Direct dependencies examined (38):** `def-axiom-of-choice`,
  `def-affine-open-subscheme`, `def-affine-scheme-spectrum`,
  `def-base-change-morphism-schemes`, `def-closed-immersion-schemes`,
  `def-diagonal-morphism-scheme`,
  `def-finite-type-and-module-finite-algebras`, `def-fpqc-morphism-schemes`,
  `def-locally-closed-immersion`,
  `def-locally-finite-type-and-finite-type-morphism`,
  `def-morphism-of-schemes`,
  `def-quasi-compact-and-quasi-separated-morphism`,
  `def-quasi-compact-and-quasi-separated-scheme`, `def-scheme`,
  `def-separated-morphism-schemes`, `def-universally-closed-morphism`,
  `cor-base-change-finite-type-and-products`, `cor-affine-scheme-quasi-compact`,
  `lem-base-change-composition`, `lem-base-change-quasi-compact-morphisms`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `lem-closed-immersion-local-on-target`,
  `lem-diagonal-base-change-identification`,
  `lem-fibre-product-open-restriction`,
  `lem-finite-type-local-on-source-and-target`, `lem-fpqc-cover-submersive`,
  `lem-immersion-with-closed-image`,
  `lem-points-of-scheme-fibre-product-residue-tensors`,
  `thm-affine-fibre-product-tensor-ring`,
  `thm-affine-scheme-ring-anti-equivalence`,
  `thm-direct-sums-and-direct-summands-preserve-flatness`,
  `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres`,
  `thm-faithfully-flat-ring-map-characterisations`,
  `thm-fibre-products-of-schemes-exist`,
  `thm-proper-ideal-contained-in-maximal-ideal`,
  `thm-right-exactness-of-tensor-products`,
  `lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union`, and
  `thm-tensor-products-commute-with-arbitrary-direct-sums`.
- **Page and cross-batch record:** The A page lists the item and its overview
  describes the AC-qualified fpqc descent; the B page remains unchanged.
  Batch-5's cross-batch input remains `[]`: this item has no supplier in a
  different batch, and batch 5 contains only this A/B pair.
- **Decision and scope:** Item decision `repaired`, confidence 1, with all 38
  direct dependency IDs examined; refreshed receipt hash
  `5ef86a10cb1d6a3440f2c4cbd4819afd43a5cd794b6bed85a75022091c6f3d1c`.
  The refreshed pair scope decision is `sufficient`, confidence 1, hash
  `3558a51ed212655e16eebe7ec3ace8e3b56516dbc4fc8776d15bb2f2d81c3648`;
  all 52 assigned claims remain in scope and none was dropped.
- **Checks run:** Explicit-path precheck passed (1/1, direct); explicit
  rendering passed for the item and both A/B page paths; selected strict
  proof-contract passed (1/1, zero errors/warnings; 43 exact source excerpts,
  12 proof-step maps, and all eight boundary dispositions); item and manifest
  dependencies match at 38; the current item's full dependency closure has no
  path to `thm-affine-closed-immersions-quotient-rings`. The latest run-wide
  `item-dependency-levels check --run frontier-36-complete` reports one
  unrelated mismatch: batch 6 item
  `cor-smooth-variety-classical-scheme-conventions-agree` on
  `flat-smooth-and-etale-morphisms`, declared level 5 and computed level 4.
  Batch content-policy, complete strict contracts, coverage checklist, and
  `validate-plan` with `research/plan-spec.json` remain pair-close checks.
- **Open owner obligations:** The owner-held Step-1 readiness receipt
  `research/frontier-36-complete-step1-lem-fpqc-descent-properness-components.json`
  is stale: it still records the prior five-dependency scaffold and must be
  refreshed by the owner. The separate published concern is on
  `thm-affine-closed-immersions-quotient-rings`, with downstream impact
  candidates `lem-diagonal-is-immersion` and
  `lem-separated-stable-under-base-change`; this batch does not edit them or
  the serially owned ledger. The pre-splice plan mismatch for
  `thm-properness-descent-fpqc` remains open for Step 4 reconciliation.
- **Next:** Recomputed live levels retain this item at level 2. Continue with
  `lem-proper-local-on-base` on A (level 2) in the dispatch order. There are
  now 24 of 52 owned items closed and 28 remaining.

### lem-proper-local-on-base — scaffold repaired and authored

- **Claim and conventions:** For any morphism \(f:X\to S\) and any open cover
  \(S=\bigcup_i S_i\), the restriction \(f_i:f^{-1}(S_i)\to S_i\) is proper
  for every \(i\) iff \(f\) is proper. The proof uses the definition
  proper = separated + finite type + universally closed, with no
  Noetherian, quasi-separatedness or choice hypothesis.
- **Scaffold audit and repair:** The strategy correctly identified the
  diagonal restriction, finite-type locality and universal-closedness
  arguments, but omitted direct proof inputs for quasi-compactness on an
  arbitrary affine refinement and iterated base changes. Added the published
  inputs lem-base-change-quasi-compact-morphisms,
  lem-base-change-composition, def-locally-finite-type-and-finite-type-morphism,
  def-scheme, def-affine-scheme-spectrum, and
  lem-spectrum-localization-open-immersion. Together with the six original
  dependencies, the item now declares all 12 directly used results. The
  computed dependency level remains 2.
- **Argument:** In the forward direction, the global diagonal is a closed
  immersion and its restrictions identify with the local diagonals; finite
  type and quasi-compactness restrict; every test scheme over a cover member
  is also a test scheme over \(S\), so universal closedness restricts. In the
  reverse direction, local finite-type charts cover \(X\); the set of all
  affine opens subordinate to the cover is an affine cover of \(S\), and
  quasi-compactness descends on it using the published criterion and
  base-change stability. The diagonal is a closed immersion because that
  condition is local on the target. After arbitrary \(T\to S\), the image of
  each closed subset is closed on the induced open cover \(T_i\), hence is
  closed in \(T\). This proves all three defining conditions.
- **Sources read:** Stacks Project, Morphisms of Schemes, §29.42,
  Lemma 29.42.2 and its complete one-sentence proof, and Lemma 29.42.3
  (tag 01W2); the latter's statement was read in full, and its proof is
  explicitly omitted. The full proof above is derived from the declared local
  inputs. Also read the complete local arguments in the published
  lem-base-change-quasi-compact-morphisms and
  lem-base-change-composition items. No unresolved source qualification
  remains.
- **Dependencies examined (12):** def-proper-morphism,
  def-locally-finite-type-and-finite-type-morphism,
  lem-finite-type-local-on-source-and-target,
  lem-base-change-quasi-compact-morphisms, lem-base-change-composition,
  def-universally-closed-morphism, lem-closed-immersion-local-on-target,
  lem-diagonal-base-change-identification,
  def-separated-morphism-schemes, def-scheme,
  def-affine-scheme-spectrum, and
  lem-spectrum-localization-open-immersion.
- **Boundary and AC audit:** Empty source and target, zero-ring affine charts,
  empty cover members, and a one-member cover are handled in the proof.
  There are no ordered endpoints. The iff-forward direction is steps 1.1–1.3;
  the reverse direction is steps 1.4–2.1. AC is not used: step 1.4 uses the
  family of all affine opens subordinate to the given cover, so no
  simultaneous selection is made.
- **Decision and receipt:** repaired, confidence 1, with all 12 direct
  dependencies examined. Receipt:
  research/frontier-36-complete-step3b-review-lem-proper-local-on-base.json.
  The pair's sufficient scope decision was refreshed after the dependency
  repair; its content hash is unchanged because the item inventory and claims
  did not change.
- **Checks:** Explicit-path precheck passed after adopting the canonical
  phase numbering; selected strict proof-contract passed (1/1, no
  errors/warnings); explicit rendering passed for this item and both A/B
  pages; run-wide item-dependency-levels passed (926 items, 60 pages,
  maximum level 18). The global scope scan still reports six other pages
  awaiting current scope receipts; this pair is current and closed.
- **Open pair-close checks:** Batch content-policy, complete proof-contract
  scope, coverage checklist, and validate-plan remain for pair close. No
  local supplier item was added.
- **Next:** Continue with lem-proper-stable-base-change (A, level 2), the
  next unfinished item in the current dispatch order.

### lem-proper-stable-base-change — scaffold repaired and authored

- **Claim and conventions:** Under AC, every arbitrary base change of a proper
  morphism is proper. The definition of properness is separated + finite type
  + universally closed over arbitrary schemes.
- **Scaffold audit and repair:** The original strategy was valid but omitted
  both the AC assumption required by the local closed-immersion
  base-change supplier and the iterated-base-change input for universal
  closedness. Added `def-axiom-of-choice` and `lem-base-change-composition`
  to the six original direct dependencies. The statement now explicitly says
  AC. The A page lists this item and states that only the separatedness proof
  uses the AC-qualified local supplier. Recomputed dependency levels: the item
  remains at level 2; the next exact-order item remains
  `lem-proper-stable-composition` (A, level 2).
- **Argument:** Properness supplies the three defining properties. Finite
  type ascends by arbitrary base change. The new diagonal is the pullback of
  the old closed diagonal, so it is closed by the local closed-immersion
  base-change theorem; this is the exact AC use. For any further test base
  `T→S′`, iterated base-change compatibility identifies the pulled-back map
  with the corresponding base change of the original universally closed map,
  hence it is closed. The three conditions give properness.
- **Source read completely:** Stacks Project, Morphisms of Schemes, §29.42,
  Lemma 29.42.5 (tag 01W4), including its full statement and proof at
  https://stacks.math.columbia.edu/tag/01W4. The source states proper
  base-change stability and reduces it to the defining universal-closedness
  property and stability of separatedness and finite type. It does not state
  the local AC restriction; this authored proof transparently inherits AC
  solely from the repository's currently declared closed-immersion supplier.
- **Dependencies examined (8):** `def-proper-morphism`,
  `cor-base-change-finite-type-and-products`,
  `def-universally-closed-morphism`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `lem-diagonal-base-change-identification`,
  `def-separated-morphism-schemes`, `def-axiom-of-choice`, and
  `lem-base-change-composition`. The item's direct dependency list matches
  the batch manifest.
- **Boundary and AC audit:** Empty source/base and zero-ring charts remain
  covered by the same definitions and quotient-base-change supplier; the
  identity base change returns the input map; nonreduced schemes and
  arbitrary bases are included. There are no endpoints or iff directions.
  AC is stated and used exactly at the closed-immersion base-change step;
  finite-type and universally-closedness arguments are choice-free.
- **Decision and receipts:** `repaired`, confidence 1, with all eight direct
  dependencies examined; item receipt hash
  `2521bbe2c62450227790852642e97b4ce96a94a66c91b48852e42aaf046d93a3`.
  Refreshed the A/B `sufficient` scope decision after the statement and
  dependency repair; hash
  `902c4c10cbb4f3706c4aed7f690d4dc37c43af529107527e2a0a98eeb54d464f`.
- **Checks run:** Explicit-path precheck passed (1/1); explicit rendercheck
  passed for the item and both A/B pages; selected strict proof-contract
  passed (1/1, zero errors and warnings); run-wide dependency-level check
  passed (926 items, 60 pages, maximum level 18). Recomputed owned order
  places this item at level 2 and leaves the next item at level 2.
- **Open owner and propagation obligations:** The owner-held Step-1 readiness
  receipt `research/frontier-36-complete-step1-lem-proper-stable-base-change.json`
  still records the old six dependencies and unqualified statement. It was
  not edited; the owner must refresh it. Three later same-pair consumers need
  actual proof-use review for AC propagation: `lem-proper-fibres-proper`,
  `lem-proper-source-to-separated-target-proper`, and
  `ex-proper-image-projective-variety`. The same-pair
  `thm-properness-descent-fpqc` already states AC and declares it directly.
  Batch 9's draft `lem-noetherian-approximation-proper-fp-flat-sheaf` is a
  cross-owner propagation candidate: its current scaffold directly depends
  on this lemma and its strategy explicitly says AC is used, but its
  statement does not say Assume AC. Its proof is not yet authored, so record
  this as a provisional interface concern for owner routing, not a confirmed
  published defect; the batch-9 owner should either remove the dependency if
  unused or qualify the statement if the completed proof uses this supplier.
- **Open pair-close checks and standing concerns:** Batch content-policy,
  complete proof-contract scope, coverage checklist, and `validate-plan` with
  `research/plan-spec.json` remain for pair close. Preserve the pre-splice
  plan mismatch for `thm-properness-descent-fpqc` for Step 4. Preserve the
  earlier published proof-locality concern for
  `thm-affine-closed-immersions-quotient-rings` for serial reconciliation; no
  published item or shared ledger was edited.
- **Next:** Audit and author `lem-proper-stable-composition` (A, level 2).

### lem-proper-stable-composition — scaffold repaired and authored

- **Claim and conventions:** Under AC, the composite of proper morphisms
  (X\xrightarrow{f}Y\xrightarrow{g}S) is proper. The claim retains the
  arbitrary-scheme convention and uses the definition separated + finite
  type + universally closed.
- **Scaffold audit and repair:** The strategy was sound but its six direct
  dependencies omitted the local definition and witnesses for finite type,
  quasi-compactness composition, the sheaf/stalk argument composing closed
  immersions, base-change construction and fibre-product reassociation. Added
  13 direct dependencies, for 19 total. Qualified the claim with AC because
  the diagonal argument pulls back a closed immersion using the local supplier
  whose statement assumes AC. The finite-type, closed-immersion-composition,
  and universal-closedness arguments are derived locally and use no choice.
  Added the item to the A-page header and expanded the overview to state the
  AC qualification for base change and composition. Recomputed labels: the
  item remains level 2; the next exact-order item is
  `thm-affine-morphism-relative-spec-characterization` (A, level 2).
- **Argument:** Finite type composes because local finite-type chart ring maps
  compose by joining their finite generating lists, while quasi-compactness
  follows by covering the inverse image of a quasi-compact target open with a
  finite affine subcover. Closed immersions compose: the image remains closed,
  the composite structure-sheaf map is surjective on stalks, and direct image
  along a closed embedding identifies its stalks with those on the closed
  subspace. For separatedness, the map (X\times_YX\to X\times_SX) is the
  pullback of the closed diagonal of (Y/S), so is closed under AC; composing
  it with the diagonal of (X/Y) gives the diagonal of (X/S). After any
  base change (T\to S), the composite factors as the two base changes of
  (f,g), both closed by universal closedness, and fibre-product
  reassociation identifies its source with (X\times_ST). Thus all three
  properness conditions hold.
- **Sources read completely:** Stacks Project, Morphisms of Schemes, Lemma
  29.42.4 (tag 01W3), full statement and proof. Read its delegated arguments:
  Schemes Lemma 26.21.12 (01KU) and Lemma 26.21.9 (01KR); Morphisms Lemmas
  29.15.3 (01T3), 29.15.2 (01T2), 29.14.5 (01SV), and Schemes Lemma 26.19.4
  (01K6). Also read the displayed Algebra arguments for Lemmas 10.6.2 (00F4)
  and 10.23.3 (00EP). Their exact tags and the scope limitation are recorded
  in the batch coverage file. Stacks states the result without AC; this local
  proof uses the repository's explicitly AC-qualified closed-immersion
  base-change supplier, and no unconditional local claim is made.
- **Dependencies examined (19):** `def-proper-morphism`,
  `lem-finite-type-local-on-source-and-target`,
  `def-universally-closed-morphism`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `def-diagonal-morphism-scheme`, `def-separated-morphism-schemes`,
  `def-axiom-of-choice`,
  `def-locally-finite-type-and-finite-type-morphism`,
  `def-finite-type-and-module-finite-algebras`,
  `def-quasi-compact-and-quasi-separated-morphism`,
  `cor-affine-scheme-quasi-compact`, `def-scheme`,
  `def-closed-immersion-schemes`, `def-direct-image-sheaf`,
  `def-stalk-of-presheaf`, `thm-exactness-of-sheaves-stalkwise`,
  `def-base-change-morphism-schemes`,
  `thm-fibre-products-of-schemes-exist`, and
  `lem-fibre-product-associativity-and-symmetry`. Manifest and item dependency
  lists match.
- **Boundary and AC audit:** Empty source and intermediate schemes, empty
  affine covers, zero-ring charts, identity morphisms, and empty generator
  lists are handled in steps 1.1–1.2 and 3.1. The stalk proof for closed
  immersions does not assume reducedness. There are no endpoints or iff cases.
  AC is stated and used exactly in step 2.1 for the pullback of the diagonal
  closed immersion; all other steps use only pointwise chart existence or
  finite subcovers/generator lists.
- **Decision and receipts:** `repaired`, confidence 1, with all 19 direct
  dependencies examined; item receipt hash
  `59e78f6c8117cf5be6166f6ca2dd2f16476a31c404a0ac7990d6c130e954f03c`.
  Refreshed the A/B `sufficient` scope decision after the statement and
  dependency repair; hash
  `7eda30e812395e9027d0d08f3fd79830bbd54ca49a809084e2c1baac1a72d238`.
- **Checks run:** Explicit-path precheck passed (1/1); explicit rendering
  passed for the item and both A/B pages; strict proof-contract passed (1/1,
  zero errors and warnings); item/manifest dependency lists match (19); the
  run-wide item-dependency-level check passed (926 items across 60 pages,
  maximum level 18). Recomputed owned order keeps this item at level 2 and
  the next item at level 2.
- **Open owner and propagation obligations:** The owner-held Step-1 readiness
  receipt `research/frontier-36-complete-step1-lem-proper-stable-composition.json`
  still records the original six dependencies and unqualified claim. It was
  not edited; the owner must refresh it. Same-pair consumers requiring exact
  proof-use and AC propagation review remain `lem-proper-fibres-proper`,
  `lem-proper-source-to-separated-target-proper`, and
  `ex-proper-image-projective-variety`; `thm-properness-descent-fpqc` already
  states AC and declares it directly. Batch 9's draft
  `lem-noetherian-approximation-proper-fp-flat-sheaf` directly depends on both
  proper base change and proper composition; its current strategy says AC is
  used but its statement does not say Assume AC. This remains a provisional
  cross-owner interface concern until its completed proof is checked. Route
  to its owner to remove unused dependencies or qualify the statement if it
  uses these AC-qualified suppliers. No published defect is confirmed here.
- **Open pair-close checks and standing concerns:** Batch content-policy,
  complete proof-contract scope, coverage checklist, and `validate-plan` with
  `research/plan-spec.json` remain for pair close. Preserve the pre-splice
  plan mismatch for `thm-properness-descent-fpqc` for Step 4. Preserve the
  earlier published proof-locality concern for
  `thm-affine-closed-immersions-quotient-rings` for serial reconciliation; no
  published item or shared ledger was edited. No local supplier item was
  added.
- **Next:** Audit and author `thm-affine-morphism-relative-spec-characterization`
  (A, level 2).

### `thm-affine-morphism-relative-spec-characterization` — verified, contract recorded, complete

- **Claim and conventions:** $f:X\to S$ is affine iff $X\cong\operatorname{Spec}_S\mathcal A$
  for an affine-locally module-associated $\mathcal O_S$-algebra $\mathcal A$;
  for affine $f$ one may take $\mathcal A=f_*\mathcal O_X$, and conversely any
  such $S$-isomorphism identifies $f_*\mathcal O_X\cong\mathcal A$. No choice
  axiom is assumed. Zero ring and empty schemes are included.
- **Scaffold audit:** The scaffold statement and the 11 declared dependencies
  are the ones used; no dependency change was needed. The draft file already
  contained the complete two-direction argument, but its proof steps were
  hard-wrapped, which precheck reads as untagged. Repaired by reflow plus the
  canonical step labels 1.1–1.5 (the proof cites no earlier step, so all five
  steps are layer 1); no mathematical text was changed.
- **Argument:** forward: on each affine $U=\operatorname{Spec}R$, the authored
  pushforward-localization lemma makes $f_*\mathcal O_X$ module-associated with
  localization restrictions; relative-spectrum charts $\pi^{-1}(U)$ have
  global sections $\Gamma(f^{-1}(U),\mathcal O_X)$, giving compatible
  $S$-isomorphisms of affine charts that glue. Converse: affineness transports
  across the $S$-isomorphism, and on the principal-open basis
  $\pi_*\mathcal O_Y$ has sections $B_U[\varphi(r)^{-1}]$ with the same
  restrictions as $\mathcal A$, so sheaf gluing identifies
  $f_*\mathcal O_X\cong\mathcal A$.
- **Sources read completely:** Stacks Project Morphisms of Schemes Lemma
  29.11.3 (tag `01S8`), with the full displayed proof; local suppliers
  `lem-affine-morphism-structure-sheaf-pushforward-localizes` and
  `lem-relative-spec-glues-affine-algebras` (both authored on this page).
- **AC:** not used; the statement says so and step 1.3 explains that all charts
  and global-sections rings are canonical, with no simultaneous choice.
- **Checks run:** persistent precheck `PASS` for the item; strict
  proof-contract `1/1` with zero errors and warnings (11 citations, 5
  derivations, all nine boundary rows dispositioned).
- **Decision receipt:** `accept`, confidence 1, dependencies = the 11 direct
  deps; sha `9717ef1f07ccd7af1c94d8733a6dc1b3a33f40f9424dfa62767566ae29dc95eb`.
  Pair scope decision refreshed as `sufficient`
  (sha `e73403d3f6f6f7f64050b84b5b74f1fb1f914f0e3b3fd44af80745b33a85a66d`);
  it will be refreshed again if a later statement repair changes the pair hash.
- **Open gaps:** none for this item. No local supplier was added.
- **Next:** audit and author `thm-proper-morphism-closed-image` (A, level 2).

### `thm-proper-morphism-closed-image` — scaffold repaired, authored

- **Claim:** Proper $f:X\to S$ is a closed map, $f(X)$ is closed, and every base
  change $f_T:X\times_S T\to T$ is closed.
- **Scaffold audit and repair:** The two declared dependencies did not cover the
  identity base-change step: universal closedness is about $X\times_S T\to T$,
  and one needs the canonical isomorphism $X\cong X\times_S S$. Added
  `def-base-change-morphism-schemes` and
  `def-fibre-product-schemes-universal-property`; both are published, so the
  level stays 2. Registered the item on the A page and in the manifest.
- **Argument:** step 1.2 applies the fibre-product universal property to
  $(a,b)=(\operatorname{id}_X,f)$ to get $u:X\to X\times_S S$ with
  $q\circ u=f$ and proves $u$ invertible by the uniqueness clause, so $f=q\circ
  u$ is closed; step 1.3 re-reads universal closedness for arbitrary $T\to S$.
- **Sources read completely:** published `def-universally-closed-morphism`,
  `def-base-change-morphism-schemes`, and
  `def-fibre-product-schemes-universal-property`; Stacks tag `01W0`/§29.41 and
  Vakil §11.3 as orienting locators for the standard proper-is-closed fact.
- **AC:** not used.
- **Checks:** precheck `PASS`; rendercheck OK (item plus A page); strict
  proof-contract `1/1` (4 citations, 3 derivations, all nine boundary rows).
- **Decision receipt:** `repaired`, confidence 1, sha
  `25a4702447b4b157f1df46b93830a972107117e0eed2add30ac0de8bac1fd14a`.
- **Open gaps:** none. No local supplier added.
- **Next:** `thm-valuative-criterion-properness` (A, level 2).

### Level-2 A/B items completed after the affine-relative-spec theorem

- `thm-valuative-criterion-properness` — authored; verified against Stacks
  Lemma 29.43.1 (tag `0BX5`, fetched 2026-09-28) and the published
  `thm-valuative-criterion-separatedness` (tags `01KZ`, `01L0`). Repaired the
  scaffold deps (added the valuative-diagram definition and the finite-type
  input; removed the unused local affine-quotient lemma), fixed a wrong source
  tag, and recorded `repaired`, sha
  `69e4ddc7f2196650f63ac6ad8bd33a10ac52e5029c78800771829b23e3ec92a3`.
- `cex-affine-line-not-proper` — authored as a choice-free counterexample:
  base change to $\operatorname{Spec}k[t]_{(t)}$ has source
  $\operatorname{Spec}R[x]$, the closed hyperbola $V(tx-1)$ maps exactly onto
  $D(t)$, and $D(t)$ is not closed because $(0)\in V(I)$ forces $I=0$. Repaired
  the dependency list with the eight localisation/spectrum inputs. `repaired`,
  sha `0071339d5bbe285e4d27ec4fa05adda9fb6b9b266ffdcbce0e02ca313b626d64`.
- `ex-empty-morphism-proper-projective` — authored (statement
  `ai-generated`/`example`, as the scaffold declared). All three properness
  clauses checked on empty data and projective realised through the closed
  immersion $\varnothing\to\mathbb P^0_S\cong S$. `repaired`, sha
  `77cacedb037a0bff0a5d3f4e840a7b9232bd21b0763faa077605dde026c2d032`.
- **Next:** level-3 items, starting with
  `cor-proper-birational-normal-curve-isomorphism-off-finite-set` (A, level 3).

### Level-3: `thm-finite-morphism-integral-closed` (A)

- **Claim:** A finite morphism of schemes is closed (integral ring maps have
  closed image on affine charts); equivalently finite morphisms are universally
  closed after base change.
- **Scaffold audit and repair:** the scaffold deps listed `thm-going-up`, which
  the completed argument does not use; integrality alone (finite module
  algebras) plus lying-over suffices. Dropped it; added `def-affine-scheme-spectrum`
  and `lem-zariski-closed-set-axioms` for the identification of the image of a
  closed chart subset with $V(\ker(A\to B/J))$, and
  `def-integral-element-and-algebraic-integer` for integrality of quotients.
- **Argument:** on an affine chart $B$ is a faithful $A[b]$-module finitely
  generated over $A$, so the finite-module criterion makes every $b$ integral;
  quotients stay integral; lying over identifies $\operatorname{im}(V(J))$ with
  the closed set $V(\ker(A\to B/J))$; closedness glues over an affine cover and
  is stable under the finite base change. AC enters exactly through lying over
  and finite base-change stability.
- **Sources read completely:** `def-finite-morphism-schemes`,
  `thm-integrality-and-finite-module-equivalences`,
  `def-integral-element-and-algebraic-integer`, `thm-lying-over`,
  `lem-finite-stable-base-change-composition`, `def-affine-scheme-spectrum`,
  `lem-zariski-closed-set-axioms`, `def-axiom-of-choice`; Stacks tag `01W0`,
  §29.41 and Vakil §11.3 as orienting locators.
- **AC:** used through lying over ([F4]) and finite base-change stability
  ([F5]); the statement and item record the assumption.
- **Checks:** precheck `PASS`; rendercheck OK; strict proof contract `1/1`
  (8 citations, 5 derivations, all eight boundary rows).
- **Decision receipt:** `repaired`, confidence 1, sha
  `1b5a24cf699c85c8a6a7d8b45a38828f666325b62452b45f3a5a729c0e9b37a8`.
- **Open gaps:** none. No local supplier added.
- **Next:** `cor-proper-birational-normal-curve-isomorphism-off-finite-set`
  (A, level 3).

### Level-3 corollary cluster (A): birational normal curves agree off a finite set

- **Claim:** for $f:X\to Y$ proper birational between integral finite-type
  $k$-schemes of chain dimension $1$ with $Y$ normal, there is a finite set $F$
  of closed points of $Y$ with $f^{-1}(Y\setminus F)\to Y\setminus F$ an
  isomorphism.
- **Scaffold audit and repair (local suppliers added, both pages' shared files
  preserved):** the scaffold's declared deps (`def-proper-morphism`,
  `thm-proper-morphism-closed-image`,
  `lem-integral-finite-type-scheme-function-field`, `def-integral-scheme`,
  `def-axiom-of-choice`,
  `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`) could not
  supply the principal-open isomorphism or the finiteness of the exceptional
  set. Three new local supplier items were authored on the A page:
  1. `def-birational-morphism-schemes` (level 1) — two-condition definition for
     integral finite-type $k$-schemes; Stacks Definition 29.51.1 (tag `01RO`).
  2. `lem-curve-closed-subsets-finite` (level 1) — an integral finite-type
     $k$-scheme of chain dimension $1$ is Noetherian, every proper closed subset
     is a finite set of closed points, every nongeneric point is closed; AC
     **declared in the statement** and used exactly through
     `thm-noetherian-ring-has-noetherian-spectrum`,
     `cor-specialisation-order-is-prime-inclusion`,
     `lem-noetherian-subspaces-and-compact-opens` and
     `lem-noetherian-space-has-finitely-many-irreducible-components` (steps
     1.1, 1.2, 2.2; recorded in step 7.1). Orient: Stacks tag `0A22`, Milne §2m.
  3. `lem-birational-morphism-principal-open-isomorphism` (level 2) — charts
     $U=\operatorname{Spec}A\subseteq X$, $V=\operatorname{Spec}B\subseteq Y$,
     finite-type $\varphi:B\to A$, $\sigma\in B\setminus\{0\}$ with
     $B_\sigma\cong A_\sigma$ and $f$ an isomorphism
     $D(\varphi(\sigma))\to D(\sigma)$; Stacks Lemma 29.51.5 (tag `0BAC`).
     Choice-free (only finitely many generators and denominators are chosen).
  Structural repair: the scaffold's numbered steps sat inside
  `## Facts & Assumptions`, where `numberedProofSteps` does not see them; a
  `## Proof` heading was inserted so the steps are parsed (and hence
  contract-checkable) in all three items.
- **Argument (corollary):** $f$ is of finite type, so the principal-open lemma
  gives $U_0=D(\varphi(\sigma))\subseteq U$, $V_0=D(\sigma)\subseteq V$ with
  $f|_{U_0}$ an isomorphism; $A,B$ domains make $\sigma,\varphi(\sigma)\neq0$,
  so both opens contain generic points and $X\setminus U_0$, $Y\setminus V_0$
  are proper closed subsets, finite sets of closed points by the curve lemma.
  With $F=f(X\setminus U_0)\cup(Y\setminus V_0)$ (finite, all points closed:
  $f$ is closed by `thm-proper-morphism-closed-image`), every $y\in Y\setminus F$
  has all fibres inside $U_0$, so $f^{-1}(Y\setminus F)\subseteq U_0$ and the
  isomorphism $f|_{U_0}$ restricts to $f^{-1}(Y\setminus F)\to Y\setminus F$.
  Normality is stronger than needed (recorded in step 4.1); AC enters exactly
  through the curve lemma.
- **Sources read completely:** `def-proper-morphism`,
  `def-locally-finite-type-and-finite-type-morphism`,
  `thm-proper-morphism-closed-image`, `def-birational-morphism-schemes`,
  `lem-birational-morphism-principal-open-isomorphism`,
  `lem-curve-closed-subsets-finite`, `def-dimension-noetherian-topological-space`,
  `def-integral-scheme`, `def-generic-point-irreducible-closed-subset`,
  `def-principal-distinguished-subset-of-spectrum`, `def-open-immersion-schemes`,
  `def-normal-noetherian-ring`, `def-integral-closure-and-integrally-closed-domain`,
  `def-axiom-of-choice`; Stacks tag `0BAC`/`01RO`, tag `0A22` and Vakil §17.4.
- **Registration:** all four IDs added to the batch-5 manifest with statements,
  deps, sources and levels (1, 1, 2, 3) and to the A page `items:` list;
  scope receipt refreshed (sha `434459b6151351e8cf3de97324dac77eb3bb835c739397dfdcd6c7c4e76ae9f9`).
- **Checks:** `item-dependency-levels check --run frontier-36-complete` clean;
  precheck `PASS` (all four); rendercheck OK (four items + A page);
  strict proof contract `4/4`, 0 errors, 0 warnings (39 citations total, all
  boundary rows present).
- **Decision receipts:** `def-birational-morphism-schemes` `repaired` sha
  `c6a39abf0b54b0a443a1f942ae7716eccdb61d50b30187a07fd3ebf8d7cc6e26`;
  `lem-curve-closed-subsets-finite` `repaired` sha
  `59cc43234910a357a7befc4559cebb72bcd45cbfa2cbf3edb6ab8ce79ce3b502`;
  `lem-birational-morphism-principal-open-isomorphism` `repaired` sha
  `23c16570f835ed927667bf5bac1c394dac465ff1a6a8e9e511a2bf2d7cc218ab`;
  `cor-proper-birational-normal-curve-isomorphism-off-finite-set` `repaired`
  sha `b0c29baab302c4c91c807ec80af6ed8be1034bf0ba6f18eedaed3173bf4f142e`.
- **Open gaps:** none for this cluster. Standing obligations unchanged
  (published `thm-affine-closed-immersions-quotient-rings` concern; owner-held
  stale Step-1 receipt for `lem-proper-stable-composition`; batch-9 cross-owner
  AC-statement concern; pre-splice plan mismatch for `thm-properness-descent-fpqc`).
- **Next:** `thm-projective-space-proper-over-base` (A, level 3), then
  `cex-open-immersion-not-proper` (B, level 3).

### Level 2/3: projective space over an arbitrary base is proper

- **Claim:** Assume AC; for every scheme $S$ and $n\ge0$ the projection
  $\pi:\mathbb P^n_S\to S$ is proper (no Noetherian or field hypothesis; empty
  base included).
- **Scaffold audit and repair:** the scaffold's route ("local affine quotient
  lemma + affine-fibre-product + valuation-ring-characterisations") duplicated
  the separation and finite-type machinery. Added one local supplier,
  `lem-projective-space-finite-type-over-base` (level 0; all deps published),
  and used the published `lem-projective-space-diagonal-closed` for
  separatedness. Dropped as unused: `thm-valuation-ring-characterisations`
  (the dichotomy comes straight from `def-valuation-ring`),
  `lem-closed-immersion-local-on-target`,
  `thm-affine-fibre-product-tensor-ring`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `def-separated-morphism-schemes`; `thm-valuative-criterion-properness` is no
  longer used here (its quasi-separatedness hypothesis would need an extra
  supplier) and remains in use by `lem-closed-gluing-...`. **Label recomputed
  to 2**; the two dependents `lem-closed-gluing-of-two-projective-three-spaces-is-proper`
  and `ex-projective-space-valuative-extension` were relabelled 4 → 3 by
  `item-dependency-levels` recomputation.
- **Argument:** $\pi$ is finite type (charts $U^A_i=\operatorname{Spec}A[x^{(i)}_\ell]$
  are finitely many affines with finite-type ring maps; finite union of affines
  is quasi-compact, so the affine-open criterion gives quasi-compactness), and
  separated (closed diagonal). For a valuative diagram $(\operatorname{Spec}K\to
  \mathbb P^n_S,\ \operatorname{Spec}R\to S)$ reduce to an affine base $V=\operatorname{Spec}A$
  and a chart $U^A_i$; write the $K$-point as coordinates $a_\ell=\psi(x^{(i)}_\ell)$
  with $a_i=1$. The valuation-ring dichotomy applied successively to $a_j/a_m$
  finds $m$ with $a_m\ne0$ and $a_j/a_m\in R$ for all $j$; then the image lies in
  $U^A_i\cap U^A_m$, and the transition formula makes the chart-$m$ coordinates
  $c_\ell=a_\ell/a_m$ lie in $R$. The $A$-algebra map
  $A[x^{(m)}]\to R$, $x^{(m)}_\ell\mapsto c_\ell$ (iterated polynomial universal
  property) gives the lift, which agrees with $a$ on $\operatorname{Spec}K$.
- **AC:** declared; used exactly through
  `lem-universally-closed-valuative-existence-quasicompact`. The chart
  computation itself is choice-free (finite selections only).
- **Checks:** precheck PASS; rendercheck OK (both items + A page);
  `item-dependency-levels check --run frontier-36-complete` clean after
  relabelling; strict proof contracts 1/1 for the supplier (8 citations,
  5 derivations) and 1/1 for the theorem (13 citations, 9 derivations, all
  boundary rows).
- **Decision receipts:** supplier `repaired` sha
  `180cbc3418a80faaaf4d405e9a039de5b247e1ecf3aee668733fb1415b846ec5`;
  theorem `repaired` sha
  `7aa9a0eb040b571ab5bc6e4e1add495b3f3e90e2925942f08048bce5ba9df6cf`;
  scope receipt refreshed sha
  `7c9eb34d624725bbd525108b9e5be8ad005b49ba8568fd17b7d8003185abbfc7`.
- **Next:** `thm-properness-descent-fpqc` (A, level 3).

### Local supplier: pushouts of closed immersions exist and commute with base change

- **Claim:** Assume AC; for a scheme $S$ and closed immersions $i:Z\to X$,
  $j:Z\to Y$ of $S$-schemes the pushout $T=X\amalg_ZY$ exists in $S$-schemes,
  $a,b$ are closed immersions with $|T|=|X|\cup|Y|$, $|X|\cap|Y|=|Z|$ and
  $Z\cong X\times_TY$, $\mathcal O_T=a_*\mathcal O_X\times_{c_*\mathcal O_Z}b_*\mathcal O_Y$
  with the displayed section/stalk formulas, $Z$-points have affine charts
  $\operatorname{Spec}(A\times_CB)$ (other points in $X\setminus Z$, $Y\setminus Z$),
  and $T\times_SS'$ is the pushout of the base changes.
- **Scaffold audit and repair:** the previous session's draft asserted the
  chart step with lifts of $g_0\in(A_0/J_0)_f$ "to some $u\in A_0$"; that only
  gives $D(u\bmod J_0)\cap D(f)=D(g)$, not $D(u\bmod J_0)=D(g)$, so the traces
  $U\cap Z$, $V\cap Z$ need not agree. Replaced by the correct three-stage
  construction (following Stacks 0ECJ, read in full): shrink the $X$-chart into
  the $Y$-chart via $h\in A_0/J_0$, lift $h$ **itself** to $u\in A_0$ so the
  trace is exactly $D(h)$; shrink the $Y$-chart inside $i^{-1}(U)$ via
  $g\in B_0/J_0'$, lift $g$ to $v$; then lift the restricted section $\bar g$
  to $f\in A=\Gamma(U,\mathcal O)$ so the traces are both $D(\bar g)=D(g)$.
  Added `thm-fibre-products-of-schemes-exist` as [F17] (published, choice-free)
  because `def-fibre-product-schemes-universal-property` asserts no existence;
  cited it in the Cartesian step 3.2 and in the base-change step 5.1. Tightened
  the $S$-scheme structure claim in step 3.1 (explicitly induced map $T\to S$),
  the $S$-morphism clause of step 4.1, the properness of the kernels in step 1.3
  ("nonzero local rings" from [F5]), and the nonzeroness of the stalk ring in
  step 2.1. Adopted the canonical numbering (1.1–1.4, 2.1–2.2, 3.1–3.2, 4.1,
  5.1, 6.1) and re-inserted the `## Proof` heading.
- **Sources (read in full this session, quote-ready):** Stacks tag 0E25
  (Proposition 37.67.3, complete proof, incl. $C_i\cong B_i\otimes_{B_i\times_{C_i}A_i}A_i$),
  0ECI (Situation 37.67.1: $i$ closed immersion, $j$ integral, fibre-affineness
  condition — vacuous here since closed immersions are injective on points),
  0ECJ (Lemma 37.67.2 refinement, complete proof), 0ET0 (Lemma 37.14.1 affine
  pushout), 0BMP (Lemma 37.14.2). Vakil §17.4.9–17.4.12 as secondary.
- **AC:** declared; used exactly through
  `lem-closed-immersion-affine-quotient-and-base-change` ([F2]), as recorded in
  step 6.1; [F17] and all other steps are choice-free.
- **Registration:** manifest entry (level recomputed 0 → **1**, its only in-run
  dependency is the level-0 `lem-closed-immersion-affine-quotient-and-base-change`),
  A-page `items:` list, coverage source for Stacks §37.67/§37.14 with read
  evidence and two contents rows, contract merged (`scope` 57), `record-scope`
  refreshed (sha `725bcbef…`), `record-item` `repaired` (sha `2a00d3a5…`).
- **Checks:** precheck PASS; rendercheck OK; strict proof contract 1/1 with 17
  exact citation quotes, 11 derivations and all 8 boundary rows;
  `item-dependency-levels check --run frontier-36-complete` clean (933 items).
- **Next:** `lem-closed-gluing-of-two-projective-three-spaces-is-proper`
  (A, level 3), which now consumes the new supplier.

### Level 3: closed gluing of two projective three-spaces is proper

- **Claim:** Assume AC; k algebraically closed; X_1, X_2 two copies of P^3_k;
  in each X_i closed subschemes L_i (a line) and C_i (a smooth plane conic)
  with empty intersection whose disjoint union Z_i = L_i ⊔ C_i is a closed
  subscheme; an isomorphism σ: Z_1 → Z_2 with σ(L_1) = C_2 and σ(C_1) = L_2.
  Then T = X_1 ⊔_Z X_2 (Z := Z_1, j_1 = z_1, j_2 = z_2σ) exists as a
  k-scheme, each X_i is a closed subscheme of T, and T is proper over k.
  Statement preserved verbatim from the scaffold.
- **Scaffold audit and repair:** the scaffold's route through
  `thm-gluing-ringed-and-locally-ringed-spaces` (glues opens only — cannot
  produce a closed-subscheme pushout) and its undeveloped separatedness route
  were replaced by: existence and all structural clauses from the in-run
  supplier `lem-closed-immersion-pushout-schemes`; properness via the
  valuative criterion `thm-valuative-criterion-properness` (finite type +
  quasi-separated + unique lifts). Dropped from the scaffold deps:
  `thm-gluing-ringed-and-locally-ringed-spaces`; kept
  `thm-affine-scheme-ring-anti-equivalence` (used through the contraction
  map), `def-axiom-of-choice`, `thm-projective-space-proper-over-base`,
  `lem-closed-immersion-affine-quotient-and-base-change`.
- **Argument (16 steps, canonical 1.1–1.5, 2.1–2.4, 3.1–3.4, 4.1, 5.1, 6.1):**
  j_2 = z_2σ is a closed immersion; the supplier gives T, a, b closed
  immersions, |T| = |X_1| ∪ |X_2|, |X_1| ∩ |X_2| = |Z|, the charts
  Spec(A ×_C B) at Z-points, X_i∖Z open, and base change. X_i proper over k
  (so separated, finite type, universally closed, quasi-compact, locally
  finite type). T quasi-compact (union of two quasi-compact closed subspaces).
  Chart rings are f.g. k-algebras: A, B by affine-locality of locally finite
  type, C = A/I = B/J a quotient, I and J finitely generated by Hilbert basis
  (k[x] Noetherian), and A ×_C B generated as k-algebra by
  (α_ℓ, β_ℓ), (i_μ, 0), (0, j_ν) with α_ℓ, β_ℓ lifts of generators of C.
  So T → Spec k locally of finite type, hence finite type. Affine opens of T
  meet X_i in affine opens (quotient charts of a closed immersion), and
  intersections of affine opens in the separated X_i are affine by
  `thm-separatedness-gluing-overlap-criterion`, so T → Spec k is
  quasi-separated. Factorisation lemma (steps 1.5, 2.4): for a valuation ring
  R ⊆ K and h: Spec R → T with h(η) ∈ |X|, X ⊆ T closed subscheme, h factors
  through X — h^{-1}(|X|) is closed and contains η, hence is all of Spec R;
  then the affine chart W around the closed point's image is a full preimage,
  ψ: A → R has h(η) = ker ψ ∈ V(J), so J ⊆ ker ψ and ψ factors through A/J.
  Unique lifts: the generic K-point lands in |X_1| or |X_2| (say X_1) and
  factors through a: X_1 → T, so the K-point plus Spec R → Spec k is a
  valuative diagram for the proper X_1 → Spec k — existence by
  `thm-valuative-criterion-properness`; uniqueness: both lifts factor through
  a, the two factored maps agree on Spec K since a is a monomorphism
  (`lem-immersions-and-localizations-monomorphisms`), and uniqueness inside
  the proper X_1 finishes. Conclusion: T proper over k.
- **AC:** declared; used exactly through `lem-closed-immersion-pushout-schemes`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `thm-valuative-criterion-properness` (all assume AC); all other selections
  finite.
- **Checks:** precheck PASS (after `tools/reflow.mts` + canonical adoption;
  tag vocabulary needs "step 2.2, step 2.3", not "steps 2.2, 2.3");
  rendercheck OK; strict proof contract 1/1 with 35 exact citation quotes,
  16 derivations, all 8 boundary rows; `item-dependency-levels check --run
  frontier-36-complete` clean (933 items); manifest deps synced, A-page
  `items:` list updated, coverage row for §17.4.J–M already present.
- **Decisions:** `record-scope` sufficient sha
  `3a5502ad39769e28921dc5c55d0f42d66b4efea293e6caf1930c56b3e1351d83`;
  `record-item` repaired sha
  `ac0f94dbb55a2277afaccca3281143001d5a5fc33b895ff8d7bf5c24118fd5a8`.
- **Next:** `thm-properness-descent-fpqc` (A, level 3); carry the pre-splice
  plan mismatch for Step 4.

### Level 3: properness descends through fpqc base change

- **Claim (theorem, A):** Assume AC; for an fpqc covering morphism $p:S'\to S$ in
  the page-local convention (flat, surjective, quasi-compact), $f:X\to S$ is
  proper iff its base change $f':X\times_S S'\to S'$ is proper. The manifest
  statement is preserved; the page-local convention of
  `def-fpqc-morphism-schemes` is made explicit in the Statement.
- **Scaffold audit and repair:** the strategy (ascend by proper base change,
  descend the components, then apply the definition) is sound but its five-item
  dep list omitted the base-change definition used in the setup step. Added
  `def-base-change-morphism-schemes` as a sixth direct dependency; all six
  suppliers are published or earlier same-pair items. Cross-checked against
  Stacks Descent §35.23 (tag 02YJ) and Lemma 35.23.16 (tag 02L1, "proper is
  fpqc local on the base", proved from 35.23.3 + 35.23.6 + 35.23.14), read in
  full this session. Statement provenance `literature-derived`, proof
  `ai-altered` as in the manifest.
- **Argument (canonical numbering 1.1, 2.1, 2.2, 3.1, 4.1):** step 1.1 sets
  $X'=X\times_S S'$ with $f'$ the second projection and records that $p$ is an
  fpqc covering morphism, so both suppliers apply. Step 2.1 (forward): $f$
  proper $\Rightarrow$ $f'$ proper by `lem-proper-stable-base-change`
  (AC-qualified), then unfolds the three defining properties. Step 2.2
  (reverse): $f'$ proper gives $f'$ separated, of finite type and universally
  closed; `lem-fpqc-descent-properness-components` (AC-qualified, all four
  component iff's) descends each of the three to $f$. Step 3.1 reassembles
  properness of $f$ from the definition. Step 4.1 disposes of the empty base
  ($S=\varnothing$ forces $S'=X=\varnothing$, both morphisms empty and
  vacuously proper), the empty source, the identity cover ($f'=f$), and records
  that no Noetherian/reducedness/flatness hypothesis is needed.
- **AC:** declared; used exactly through the two AC-qualified suppliers
  `lem-fpqc-descent-properness-components` and `lem-proper-stable-base-change`;
  no selection is made in this proof (recorded in step 4.1 and the Exact AC
  use paragraph).
- **Checks:** reflow + canonical adoption (phases renumbered from
  1.1/1.2/1.3/2.1/2.2 to 1.1/2.1/2.2/3.1/4.1 by the canonicaliser; cross
  references rewritten consistently; `## Proof` heading re-inserted); precheck
  PASS; rendercheck OK (item + A page); strict proof contract 1/1 with 6 exact
  citation quotes, 5 derivations, all 8 boundary rows; manifest deps synced and
  A-page `items:` list updated via `/tmp/regall.mjs`;
  `item-dependency-levels check --run frontier-36-complete` clean (933 items).
- **Decision:** `record-item repaired`, confidence 1, six examined dependency
  IDs; receipt sha `dcfe4ece1c9e706a58b68a02f3160734566d7b2bd7e624072bd11c5668916bf9`.
- **Pre-splice plan mismatch (carry to Step 4):**
  `research/plan-algebraic-geometry-track.md` AV-15 instructs deletion of this
  zero-impact item; the dispatch and manifest retain it, so it was authored
  rather than dropped. Report, do not hide.
- **Open pair-close checks:** batch content-policy, full strict contract over
  the whole 57-item batch-5 scope, coverage refresh, `validate-plan` with
  `research/plan-spec.json`, final phase check.
- **Next:** `cex-open-immersion-not-proper` (B, level 3). Also newly observed by
  the run-wide `depcheck` on owned items, to repair before pair close:
  `ex-finite-power-map-affine-line` depends on B-only
  `ex-affine-n-space-over-arbitrary-base`, and
  `ex-empty-morphism-proper-projective` depends on B-only
  `ex-spectrum-zero-ring-empty` (both `b-leaf-content` violations).

### Local repair batch: two B-item b-leaf dependencies removed

- **Trigger:** the run-wide `depcheck` (schema §4, depcheck `b-leaf-content`)
  reported that two already-authored B items depended on items homed only on
  B/examples pages of earlier frontier runs.
- **`ex-finite-power-map-affine-line`:** replaced the dep
  `ex-affine-n-space-over-arbitrary-base` (B-only) by the A-homed published
  `def-scheme-over-base`, whose Definition gives $\mathbf A^1_{\operatorname{Spec}A}
  =\operatorname{Spec}A[t]$; fact [F1] rewritten to cite it and to state the
  identification $\mathbb A^1_k=\operatorname{Spec}k[t]$ explicitly. Contract
  F1 citation regenerated (exact quote from the `Definition` section, uses
  `[1.1]`). Deps now 19.
- **`ex-empty-morphism-proper-projective`:** removed the dep
  `ex-spectrum-zero-ring-empty` (B-only) and rebuilt fact [F1] on the A-homed
  published items `def-affine-scheme-spectrum` (no proper prime ideals for the
  zero ring), `def-affine-scheme` (Spec A is affine) and `def-scheme` (the
  empty locally ringed space is a scheme). Contract F1 citations regenerated
  with the unchanged uses `[1.1, 1.3, 3.1]`. Deps now 13.
- **Checks:** reflow; precheck PASS for both; rendercheck OK for both; strict
  proof contract `--items ex-finite-power-map-affine-line,ex-empty-morphism-proper-projective
  --strict` → 0 errors, 2/2; run-wide depcheck no longer reports either item;
  manifest deps synced (no page-list change needed); `item-dependency-levels`
  clean.
- **Decisions refreshed:** `ex-finite-power-map-affine-line` `repaired` sha
  `8a170bbbc2998d28…`; `ex-empty-morphism-proper-projective` `repaired` sha
  `c621360a089aab95…` (both CLOSED per `itemDecision`).
- **Next:** `cex-open-immersion-not-proper` (B, level 3).

### Level 3: a nonclosed open immersion is not proper

- **Counterexample (B):** for every field $k$, the principal open
  $D(t)=\{\mathfrak p:t\notin\mathfrak p\}\subseteq\mathbf A^1_k$ is an open
  subscheme whose inclusion $j:D(t)\to\mathbf A^1_k$ has nonclosed image;
  hence $j$ is not universally closed and not proper — the refuted claim is
  "every open immersion is proper". Manifest statement preserved.
- **Scaffold audit and repair:** the scaffold's three dependencies
  (`def-universally-closed-morphism`, `def-proper-morphism`,
  `thm-proper-morphism-closed-image`) supported only the final step; the
  explicit witness needs the Zariski topology, the PID property of $k[t]$,
  evaluation at $0$, and the identity-base-change reading of universal
  closedness. Added 15 suppliers, all published or earlier (18 direct deps
  total). Statement provenance `literature-derived`, proof `ai-altered`.
- **Argument (canonical 1.1, 1.2, 2.1, 3.1, 4.1, 5.1, 6.1):** $k[t]$ is a
  domain, so $(0)$ is a prime point of $X=\mathbf A^1_k$ and $t\neq0$ puts it
  in $D(t)$ (1.1); the evaluation homomorphism $\operatorname{ev}:k[t]\to k$
  has $(t)=\{f:f(0)=0\}$ (if $f=tg$ then $f(0)=0$; if $f(0)=0$ the constant
  coefficient vanishes and $f=t\cdot\sum_{i\ge1}a_it^{i-1}$), so $(t)$ is
  prime (proper, as $\operatorname{ev}(1)=1$, and the product condition uses
  that $k$ is a domain), and $(t)\notin D(t)$ (1.2); $j$ is an open immersion
  with image $D(t)$, nonempty and proper (2.1). $D(t)$ is not closed: a closed
  set is $V(I)$, $I=(g)$ by the PID property, and $(0)\in V(g)$ forces
  $g=0$, hence $V(g)=V((0))=X$, contradicting properness of the image (3.1).
  So $j$ is not a closed map (4.1); if it were universally closed the identity
  test morphism $X\to X$ would make the projection-compatible base change
  $D(t)\times_XX\cong D(t)$ closed, i.e. $j$ closed — contradiction (5.1).
  Hence $j$ is not universally closed and, by the definition of properness
  (equivalently because proper images are closed), not proper (6.1).
- **AC:** none used; witnesses and computations are explicit, and step 6.1
  records that $k$ may be any field (finite fields, characteristic two).
- **Checks:** reflow + canonical adoption (the canonicaliser split my five
  steps into seven phases and rewrote cross-references; the `## Counterexample`
  heading was re-inserted after adoption); precheck PASS; rendercheck OK;
  strict proof contract 1/1 with 18 exact citation quotes, 7 derivations and
  all 8 boundary rows; manifest deps synced (page list already contained the
  item); run-wide `depcheck` no longer flags it; `item-dependency-levels`
  clean (933 items).
- **Decision:** `record-item repaired`, confidence 1, 18 examined dependency
  IDs; receipt sha `eb802bd500fc71ac93ba49071e848aa2e7c124a715011c0b892a5ead780d9f6d`.
- **Next:** `ex-projective-space-valuative-extension` (B, level 3); its scaffold
  dep `thm-valuation-ring-characterisations` is likely no longer needed since
  the chart computation uses the valuation-ring dichotomy directly.

### Level 3: the projective-space valuative extension is the ratio construction

- **Example (B):** for every valuation ring $R\subseteq K$ with fraction field
  $K$, every $n\ge0$ and every $K$-point $[a_0:\dots:a_n]$ of
  $\mathbb P^n_R:=\mathbb P^n_{\operatorname{Spec}R}$ there is an index $i$ with
  $a_i\ne0$ and $a_j/a_i\in R$ for all $j$, and the ratios $a_j/a_i$ define the
  unique extension $\operatorname{Spec}R\to\mathbb P^n_R$. Manifest statement
  preserved.
- **Scaffold audit and repair:** the scaffold's deps
  (`thm-projective-space-proper-over-base`,
  `thm-valuation-ring-characterisations`) do not support the claim's actual
  content: the index and the ratio formula are a computation in the standard
  charts, and uniqueness is separatedness, not properness or a valuation-ring
  characterisation. Replaced by the eight suppliers actually used
  (`def-relative-projective-space-standard-charts`, `def-valuation-ring`,
  `thm-affine-scheme-ring-anti-equivalence`, `def-open-immersion-schemes`,
  `lem-projective-space-diagonal-closed`, `def-valuative-diagram-separatedness`,
  `lem-separated-implies-valuative-uniqueness`,
  `def-finite-type-and-module-finite-algebras`); all are published and homed on
  A pages, so `dependency_level` dropped from the scaffold's 3 to the computed
  0 (no in-run prerequisite remains). Statement provenance
  `literature-derived`, proof `ai-altered`, as in the manifest.
- **Argument (canonical 1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 4.2, 5.1, 6.1):** the
  nonempty tuple fixes $i$ with $a_i\ne0$ and the iterated polynomial universal
  property gives the $R$-algebra map $\psi$ from the $i$-th chart ring with
  $x^{(i)}_\ell\mapsto a_\ell/a_i$, which is the $K$-point over
  $\operatorname{Spec}R$ and is unchanged by rescaling the tuple (1.1);
  conversely every $K$-point over $\operatorname{Spec}R$ factors through a
  chart and yields such a tuple with $a_i=1$ (2.1); the finite induction
  starting at $m=i$ uses the valuation-ring dichotomy to replace $m$ by a
  coordinate with larger value, preserving the invariant, and ends with
  $a_m\ne0$ and $a_j/a_m\in R$ for all $j$ (1.2); since
  $\psi(x^{(i)}_m)=a_m/a_i\ne0$ the image point lies in the overlap
  $D(x^{(i)}_m)=U^R_i\cap U^R_m$, so $p$ factors through $U^R_m$ and the
  transition formula presents the factorisation as the map
  $x^{(m)}_\ell\mapsto c_\ell=a_\ell/a_m$, with every $c_\ell\in R$ (2.2);
  those $c_\ell$ give $\varphi:R[x^{(m)}_\ell]\to R$ and hence
  $q:\operatorname{Spec}R\to U^R_m$ (3.1); $\pi q$ corresponds to
  $R\to R[x^{(m)}]\to R$, the identity (4.1), and $q j$ corresponds to the
  same map to $K$ as the factorisation of $p$, so $q j=p$ (4.2); two over-base
  extensions are two lifts of one valuative diagram for the separated morphism
  $\pi$ and are equal by `lem-separated-implies-valuative-uniqueness`, and any
  $q'$ with $q'j=p$ is automatically over the base since
  $\operatorname{End}(\operatorname{Spec}R)$ is a singleton (5.1); the
  conclusion records the zero-coordinate, $n=0$ and $R=K$ cases and that no
  choice principle is used (6.1).
- **AC:** none used; the only selections are among finitely many coordinates
  and the uniqueness supplier is choice-free.
- **Checks:** reflow + canonical adoption (`## Verification` heading
  re-inserted after adoption); precheck PASS; rendercheck OK; strict proof
  contract 1/1 with 8 exact citation quotes, 9 derivations and all 8 boundary
  rows; `regall` synced the manifest deps (the B-page `items:` list already
  contained the item); `dependency_level` corrected to 0 in the manifest;
  run-wide `depcheck` no longer lists this item (the only remaining
  `page-item-missing` errors are the four unauthored B items);
  `item-dependency-levels` clean (933 items).
- **Decision:** `record-item repaired`, confidence 1, eight examined dependency
  IDs; receipt sha
  `1a9ba552ad261f17962bae53c6f5068396fb1fee64c37828e6d13f7bae06c9f2`.
- **Next:** `cor-finite-morphism-proper` (A, level 4).

### Level 4: finite morphisms are proper

- **Corollary (A):** assuming AC, every finite morphism of schemes is proper;
  no Noetherian, reducedness or nonemptiness hypothesis, empty morphism and
  zero ring included. Manifest statement preserved; the AC hypothesis is
  stated explicitly because the supplier `thm-finite-morphism-integral-closed`
  assumes it (the pair already uses that convention).
- **Scaffold audit and repair:** the scaffold proved separatedness by the
  diagonal computation and asserted finite typeness without suppliers. Replaced
  the four diagonal suppliers by `lem-affine-morphism-separated` (published,
  A-homed: affine ⇒ separated) together with `lem-finite-morphism-affine`
  (finite ⇒ affine, choice-free half) and supplied finite typeness directly:
  `def-finite-type-and-module-finite-algebras` (module-finite ⇒ finite type),
  `def-locally-finite-type-and-finite-type-morphism` (definition),
  `cor-affine-scheme-quasi-compact`, `lem-base-change-quasi-compact-morphisms`
  (quasi-compactness criterion: preimages of affine opens),
  `def-scheme` (affine neighbourhoods), `def-axiom-of-choice`. Eleven direct
  deps, all published or in-run A-homed items.
- **Argument (canonical 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1):** $f$ is affine
  (1.1), hence separated (2.1); for $x\in X$ pick an affine open
  $V=\operatorname{Spec}A\ni f(x)$, so $U=f^{-1}(V)=\operatorname{Spec}B$ is an
  affine neighbourhood of $x$ with $B$ module-finite, hence of finite type over
  $A$ (1.2); the preimage of every affine open is affine, hence quasi-compact,
  and the affine-open criterion gives quasi-compactness (1.3); so $f$ is of
  finite type (2.2); $f$ is universally closed by the finite-integral theorem
  (2.3, the only AC use); separated + finite type + universally closed is
  proper (3.1), where the empty morphism, the zero ring and the absence of
  Noetherian/reducedness/nonemptiness hypotheses are recorded.
- **AC:** assumed and declared; used exactly through
  `thm-finite-morphism-integral-closed` in step 2.3, as its own statement
  requires; the finite-to-affine half of `lem-finite-morphism-affine` used in
  step 1.1 is choice-free, and no other selection occurs. Downstream consumers
  (`lem-closed-immersion-proper`, `ex-closed-immersion-finite-proper`) must
  propagate the hypothesis.
- **Checks:** reflow + canonical adoption (`## Proof` heading re-inserted;
  canonical numbering 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1); precheck PASS;
  rendercheck OK; strict proof contract 1/1 with 11 exact citation quotes,
  7 derivations and all 8 boundary rows; `regall` listed the item on the A page
  and synced deps; `item-dependency-levels` clean (933 items; computed level 4
  matches the manifest); run-wide `depcheck` reports no error mentioning the
  item.
- **Decision:** `record-item repaired`, confidence 1, eleven examined
  dependency IDs; receipt sha
  `9a7d7e27031b87e4b3c2a0800c9d79fc35f4314ab6c619f6b3d8fcfeaef5c5aa`.
- **Next:** `lem-closed-immersion-proper` (A, level 5).

### Level 5: closed immersions are finite and proper

- **Lemma (A):** assuming AC, every closed immersion is finite, hence proper,
  empty closed immersion included; no Noetherian, reducedness or nonemptiness
  hypothesis. Manifest statement preserved; AC stated explicitly because both
  suppliers are AC-qualified.
- **Scaffold audit and repair:** the scaffold's route (affine quotient
  structure, cyclic coordinate ring, finite by target-locality, then
  `cor-finite-morphism-proper`) is correct but lacked the two module-theoretic
  suppliers and did not record the propagated AC assumption. Deps repaired to
  the seven actually used: `def-closed-immersion-schemes`,
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `def-finite-morphism-schemes`,
  `def-generated-cyclic-finitely-generated-and-free-modules`,
  `def-finite-type-and-module-finite-algebras`, `cor-finite-morphism-proper`,
  `def-axiom-of-choice`.
- **Argument (canonical 1.1, 1.2, 2.1, 3.1):** over each affine target
  $U=\operatorname{Spec}A$ the immersion has $i^{-1}(U)\cong
  \operatorname{Spec}(A/I)$ for a unique ideal $I$ (1.1); $A/I$ is cyclic as an
  $A$-module, generated by $1+I$, hence module-finite, the zero module being
  generated by the empty family when $I=A$ (1.2); the defining condition of
  finiteness holds on every affine open of $Y$, so $i$ is finite (2.1); finite
  morphisms are proper by `cor-finite-morphism-proper`, and the empty closed
  immersion corresponds to $I=A$ with chart $\operatorname{Spec}0$ (3.1).
- **AC:** assumed; used exactly through the two AC-qualified suppliers
  `lem-closed-immersion-affine-quotient-and-base-change` and
  `cor-finite-morphism-proper`; the cyclic-module computation is choice-free.
  Consumers (`ex-closed-immersion-finite-proper`, and any further user of
  properness of closed immersions) must propagate the hypothesis.
- **Checks:** reflow; precheck PASS (first attempt); rendercheck OK; strict
  proof contract 1/1 with 7 exact citation quotes, 4 derivations and all 8
  boundary rows; `regall` listed the item on the A page and synced deps;
  `item-dependency-levels` clean (933 items; computed level 5 matches the
  manifest); no depcheck error mentions the item.
- **Decision:** `record-item repaired`, confidence 1, seven examined dependency
  IDs; receipt sha
  `b92d84ab8da42394e60762e8c63df532626964b97d23daf90a775e4c200ae3a8`.
- **Next:** `lem-proper-source-to-separated-target-proper` (A, level 6).

### Level 6: maps from a proper scheme to a separated one are proper

- **Lemma (A):** assuming AC, if $X\to S$ is proper, $Y\to S$ separated and
  $h:X\to Y$ an $S$-morphism, then $h$ is proper; no Noetherian, reducedness or
  nonemptiness hypothesis, empty source included. Manifest statement preserved
  with AC stated explicitly (all four structural suppliers are AC-qualified).
- **Scaffold audit and repair:** the scaffold's route is exactly the one
  verified; it omitted `def-graph-morphism-over-base` (the graph and its second
  projection), `def-base-change-morphism-schemes` (the second projection as the
  base change of $f$ along $g$) and `def-axiom-of-choice`. Deps repaired to the
  ten actually used.
- **Argument (canonical 1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1):**
  $\Delta_{Y/S}$ is a closed immersion (1.1); the second projection
  $p:X\times_SY\to Y$ is the base change of $f$ along $g$, hence proper (1.2);
  the graph square is Cartesian so $\Gamma_h$ is the base change of
  $\Delta_{Y/S}$ along $H=(h\operatorname{pr}_X,\operatorname{pr}_Y)$, hence a
  closed immersion (2.1); $p\circ\Gamma_h=h$ (2.2); $\Gamma_h$ is finite, hence
  proper (3.1); $h$ is a composite of proper morphisms, hence proper (4.1); the
  conclusion (5.1) records the four AC uses, the empty source/target and
  identity cases, and the absence of extra hypotheses.
- **AC:** assumed; used exactly through
  `lem-closed-immersion-affine-quotient-and-base-change`,
  `lem-closed-immersion-proper`, `lem-proper-stable-base-change` and
  `lem-proper-stable-composition`; the diagonal/graph/pullback identifications
  are choice-free.
- **Checks:** reflow + canonical adoption (`## Proof` heading re-inserted);
  precheck PASS; rendercheck OK; strict proof contract 1/1 with 10 exact
  citation quotes, 7 derivations and all 8 boundary rows; `regall` listed the
  item on the A page and synced deps; `item-dependency-levels` clean (level 6 as
  computed); no depcheck error mentions the item.
- **Decision:** `record-item repaired`, confidence 1, ten examined dependency
  IDs; receipt sha
  `9fac5cf44d019d5c1aaea4ebe939833396cd7bec456303a9fe225209ce1052bb`.
- **Next:** `thm-projective-morphism-proper` (A, level 6).

### Level 6: projective morphisms are proper

- **Theorem (A):** assuming AC, every projective morphism (finite-dimensional
  H-projective convention of the page: a factorization
  $X\xrightarrow{i}\mathbb P^n_S\to S$ with $n\ge0$, $i$ a closed immersion) is
  proper; no Noetherian/field/reducedness hypotheses; empty source, empty base
  and $n=0$ included. Statement kept the H-projective convention and does not
  claim the projective-bundle convention.
- **Scaffold audit:** the scaffold's route (factor, nonempty closed immersion
  proper, projective space proper, compose) is exactly the verified argument;
  its dep list was already the four real suppliers, and `def-axiom-of-choice`
  is included because all three structural suppliers are AC-qualified.
- **Argument (canonical 1.1, 2.1, 2.2, 3.1, 4.1):** projective factorization
  $f=\pi\circ i$ (1.1); $i$ finite hence proper by the AC-qualified
  `lem-closed-immersion-proper` (2.1); $\pi$ proper by the AC-qualified
  `thm-projective-space-proper-over-base` (2.2); composite of proper morphisms
  is proper by `lem-proper-stable-composition` (3.1); conclusion records the
  convention, the three AC uses and the degenerate cases $n=0$, $S=\varnothing$,
  $i=\mathrm{id}$, $X=\varnothing$ (4.1).
- **AC:** assumed; used only through
  `thm-projective-space-proper-over-base`, `lem-closed-immersion-proper`,
  `lem-proper-stable-composition`.
- **Checks:** reflow + canonical adoption; precheck PASS; rendercheck OK;
  strict proof contract 1/1 (5 exact citation quotes, 5 derivations, 8 boundary
  rows with item-specific not-applicable reasons for endpoints and both iff
  directions); `regall` synced deps and the A page listing;
  `item-dependency-levels` clean (933 items, level 6).
- **Decision:** `record-item repaired`, confidence 1, five examined dependency
  IDs; receipt sha
  `7ce845fee9153cf5708dd8815a3a4a34e8a783871b57bca02e28e5204a06b7f0`.
- **Next:** `ex-closed-immersion-finite-proper` (B, level 6).

### Level 6 (B page): closed immersions from quotient rings are finite and proper

- **Example (B):** for any commutative ring $A$ and ideal $I$, the morphism
  $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ induced by the quotient map
  is finite and proper; $I=A$ gives the empty source, $I=0$ the identity and
  $A=0$ empty source and target. AC stated (both structural suppliers are
  AC-qualified).
- **Scaffold audit and repair:** the recorded strategy is correct. Deps repaired
  from the scaffold's two (`lem-closed-immersion-proper`,
  `def-finite-morphism-schemes`) to the six actually used, adding
  `lem-closed-immersion-affine-quotient-and-base-change` (closed immersion and
  the affine charts), `def-generated-cyclic-finitely-generated-and-free-modules`,
  `def-finite-type-and-module-finite-algebras` (cyclic implies module-finite)
  and `def-axiom-of-choice`.
- **Argument (canonical 1.1, 1.2, 2.1, 3.1, 4.1):** the quotient map induces
  the closed immersion $i$ and on each affine open $U=\operatorname{Spec}A'$
  the quotient lemma gives $i^{-1}(U)=\operatorname{Spec}(A'/I')$ over $U$
  (1.1); $A'/I'$ is cyclic on $1+I'$ (zero module generated by the empty family
  when $I'=A'$), hence module-finite over $A'$ (1.2); the finiteness condition
  holds on every affine open of the target, so $i$ is finite (2.1); $i$ is a
  closed immersion, hence proper (3.1); extreme cases and the two exact AC uses
  recorded (4.1).
- **Checks:** reflow (unchanged); precheck PASS first attempt; rendercheck OK;
  strict proof contract 1/1 (6 exact quotes, 5 derivations, 8 boundary rows);
  `regall` synced deps and the page listing; `item-dependency-levels` clean
  (933 items, level 6).
- **Decision:** `record-item repaired`, confidence 1, six examined dependency
  IDs; receipt sha
  `e7bbbaa62001c35f04242dd61464450438263b250f6085b4311b8a00f2a81a70`.
- **Next:** `ex-proper-image-projective-variety` (B, level 6).

### Level 6 (B page): incidence projection onto the determinantal quadric

- **Example (B):** over a field $k$, the closed subscheme
  $Z\subseteq\mathbb P^1_k\times_k\mathbf A^4_k$ cut out by $as+bt=0$ and
  $cs+dt=0$ has proper projection $\pi:Z\to\mathbf A^4_k$ with image exactly
  $V(ad-bc)$; the fibre over the origin is all of $\mathbb P^1_k$, and the
  argument is uniform in every characteristic. AC stated (properness suppliers).
- **Scaffold audit and repair:** the recorded strategy is correct but its dep
  list named only the five properness/closedness suppliers. Repaired to the
  eighteen actually used, adding the chart suppliers
  (`def-relative-projective-space-standard-charts`, `def-scheme-over-base`,
  `thm-affine-fibre-product-tensor-ring`), the closed-immersion machinery
  (`def-closed-immersion-schemes`, `lem-closed-immersion-local-on-target`,
  `def-base-change-morphism-schemes`), the affine/residue-field tools for the
  converse inclusion (`thm-affine-scheme-ring-anti-equivalence`,
  `def-morphism-affine-schemes-from-ring-map`,
  `def-prime-spectrum-and-vanishing-sets`, `lem-zariski-closed-set-axioms`,
  `def-residue-field-scheme-point`, `lem-field-valued-points-of-schemes`) and
  `def-axiom-of-choice`.
- **Argument (canonical 1.1, 1.2, 1.3, 2.1, 3.1, 4.1):** the chart ideals
  $(a+bu,c+du)$, $(av+b,cv+d)$ agree on the overlap $u=1/v$, so the chart
  closed subschemes glue and $Z\to\mathbb P^1_k\times_k\mathbf A^4_k$ is a
  closed immersion (1.1); the class of $ad-bc$ vanishes in both chart rings, so
  $\pi(Z)\subseteq V(ad-bc)$ (1.2); for each point $\mathfrak p$ of
  $V(ad-bc)$ the residue field satisfies $a'd'=b'c'$ and one of
  $(-b',a')$, $(d',-c')$, $(1,0)$ is a nonzero common solution, giving a
  point of $Z$ over $\mathfrak p$ (1.3); the second projection is the base
  change of the proper $\mathbb P^1_k\to\operatorname{Spec}k$, so $\pi$ is
  proper (2.1); proper morphisms are closed, so the image is closed and equals
  $V(ad-bc)$ (3.1); conclusion, AC accounting and degenerate cases (4.1).
- **Checks:** reflow (unchanged); precheck PASS; rendercheck OK; strict proof
  contract 1/1 (18 exact quotes, 6 derivations, 8 boundary rows with the two
  iff directions carried by the two inclusions); `regall` synced deps and the
  page listing; `item-dependency-levels` clean (933 items, level 6).
- **Decision:** `record-item repaired`, confidence 1, eighteen examined
  dependency IDs; receipt sha
  `c2e879a68a0ab96fd0cf7509ee153861f00c6d6c3d8ce41fd86e48ad5eef7aea`.
- **Next:** `rem-projective-versus-proper` (A, level 7).

### Scope refresh before the level-7 items (local addition)

- **What changed.** Compared with the last scope receipt (sha `3a5502ad…`,
  recorded 2026-09-28 after the `lem-closed-gluing-…` repair), the A page
  manifest gained exactly one item:
  `lem-uniqueness-of-twists-on-the-projective-line` (level 1). Verified by
  recomputing the scope hash with that entry removed: it reproduces
  `3a5502ad…` exactly, so no statement, title or other item changed.
- **Why it is in scope.** The twist-index invariant on $\mathbb P^1_k$ is the
  arithmetic input of the degree obstruction used by
  `cex-proper-not-necessarily-projective` and quoted by
  `rem-projective-versus-proper`; it is proved from published and
  already-completed in-run suppliers and drops no promised result.
- **Scope receipt:** `record-scope sufficient`, confidence 1, current sha
  `0362388a05148827d0eb9ab1f82893d05cd5ce69f7df90d9d65e57c184d064df`;
  `check --phase scope` now reports `closed: true` for the pair.
- **Next:** `lem-uniqueness-of-twists-on-the-projective-line` (A, level 1),
  then `rem-projective-versus-proper` (A, level 7).

### Level 1 (added supplier): twist uniqueness on the projective line

- **Claim/conventions:** over any field $k$, with the twists of
  $\mathbb P^1_k$ defined by the chart transition $e_1=u^ne_0$ (the convention
  of `lem-line-bundles-on-projective-three-space-restrict-by-degree` for
  $\mathbb P^N_k$), $\mathcal O(n)\cong\mathcal O(m)$ if and only if $n=m$;
  consequently the twist index attached to an invertible sheaf by a
  restriction statement is well defined.
- **Scaffold audit:** the item was added during this dispatch when the degree
  obstruction for the proper-nonprojective example needed a unique twist
  index; it lists nine suppliers, all published or completed earlier in this
  run, and its Facts section links exactly those. Checked that the two-chart
  convention is the one the item's [F1]/[F2] quote (the $\mathbb P^N_k$
  statement of `lem-line-bundles-…` says "Use the same construction on every
  $\mathbb P^N_k$").
- **Argument (canonical 1.1, 2.1, 3.1, 4.1):** the two charts and their overlap
  $k[u,u^{-1}]$ carry the frames $e_i$ and transitions $u^n$, $u^m$ (1.1); a
  morphism is a pair $(a_0,a_1)\in k[u]\times k[v]$ with
  $a_1u^m=u^na_0$, invertible exactly when both are units (2.1); for an
  isomorphism both are nonzero constants by the unit classification, and
  clearing the localisation and comparing degrees forces $m-n=0$ (3.1); the
  converse $n=m\Rightarrow\mathcal O(n)=\mathcal O(m)$ and the composition
  argument for well-definedness close the equivalence (4.1). No choice
  principle is used, and the item declares none.
- **Checks:** reflow unchanged; precheck PASS; strict proof contract 1/1 with
  9 exact citation quotes (including both sources of [F4]), 4 derivations and
  all 8 boundary rows; `regall` confirmed the A-page listing and synced deps;
  `depcheck` reports no finding for the item; rendercheck re-run at the end of
  the batch.
- **Decision:** `record-item accept`, confidence 1, nine examined dependency
  IDs; receipt sha
  `3856541970c7fa79cfeea4c37c81968fc84f598b881730b06d77395b83dded65`.
- **Open gaps:** none; the item is the local supplier for the level-7
  obstruction. No further supplier was added.
- **Next:** `rem-projective-versus-proper` (A, level 7).

### Level 7 (A): projective versus proper

- **Claim/conventions:** Under the page's H-projective convention, every
  projective morphism is proper (no extra hypotheses); the converse fails over
  an algebraically closed field, witnessed by the closed gluing of two
  $\mathbb P^3_k$ along exchanged line/conic. The empty scheme is both
  projective and proper and is explicitly not the witness.
- **Scaffold audit:** the recorded route is the verified argument; the item's
  declared deps were repaired to the six suppliers actually used, adding
  `def-proper-morphism` (the weaker notion), the gluing lemma and the two
  line-bundle support items; each cited claim in the remark is one of these.
- **Argument:** the implication is
  `thm-projective-morphism-proper`; for the failure, the glued scheme is
  proper by `lem-closed-gluing-…` (AC-declared) and a closed immersion into
  $\mathbb P^N_k$ would pull $\mathcal O(1)$ back to twists with degrees
  $n_1,n_2>0$ on the two components (line restriction lemma), while the
  exchanged identifications give $n_1=2n_2$ and $2n_1=n_2$ on the glued
  $\mathbb P^1$'s, forcing $n_1=n_2=0$ by twist uniqueness, a contradiction.
- **Checks:** precheck clean (remark, no proof block); strict proof contract
  1/1 with empty citation/derivation sets (no Facts section) and all eight
  boundary rows disposed of with item-specific evidence; `regall` added the
  item to the A-page listing and synced the six manifest deps.
- **Decision:** `record-item accept`, confidence 1, six examined dependency
  IDs; receipt sha
  `fbd0da8154cc34909832d5c409ab36e35dc9be1dff6aa279bfc69f9aaf376a7d`.
- **Open gaps:** none for this item; the full computation lives on the B item
  `cex-proper-not-necessarily-projective`, still to be authored.
- **Next:** `thm-global-functions-proper-integral-variety` (A, level 7).

### Level 7 (A): global functions on a proper integral variety

- **Claim/conventions:** Assume AC. For a nonempty proper integral finite-type
  $k$-scheme $X$ with function field $K=k(X)$, $\Gamma(X,\mathcal O_X)$ is a
  finite field extension of $k$ inside $K$; if $X$ is geometrically integral
  over $k$ for the chosen algebraic closure then
  $\Gamma(X,\mathcal O_X)=k$, so every nonempty proper integral finite-type
  $k$-scheme has $\Gamma=k$ when $k$ is algebraically closed. No Noetherian or
  reducedness hypothesis, and $X$ need not be projective.
- **Scaffold audit and repair:** the recorded strategy ($g$ gives a morphism to
  $\mathbb P^1$, properness makes the image closed, the image misses a point, so
  the kernel of $k[u]\to\Gamma$ is nonzero) is correct but the dep list named
  only the properness/closedness/affine-line suppliers. Repaired to the
  twenty-five suppliers actually used: the function-field and
  algebraic-constants lemmas, the tensor-basis and tensor-algebra items, the
  finite-dimensional linear-algebra items, the linear-complement and
  embedding-extension suppliers (the two AC carriers beyond [F1] and [F8]), and
  the chart/Zariski items. Statement, kind and title unchanged.
- **Argument (canonical 1.1–9.1):** the steps as displayed: (1.1) $X$ integral,
  proper, $\Gamma\hookrightarrow K$; (1.2) each $g$ gives $\varphi_g:X\to U_0$
  and $\overline\varphi_g:X\to\mathbb P^1_k$; (2.1) proper + closed, image closed
  in $U_0$; (2.2) closure of the image is $V(\ker\theta_g)$; (3.1) the image is
  not all of $U_0$ because $\infty$ lies in the closure of $U_0$ (the zero prime
  of $k[v]$ lies in every basic neighbourhood of $\infty$); (4.1)
  $\ker\theta_g\ne0$, so $g$ is algebraic; (5.1) $\Gamma$ is a finite-dimensional
  $k$-domain inside $k_{\mathrm{alg}}$, hence a finite field extension; (6.1) if
  $\Gamma=:L\ne k$ then $L\otimes_kL$ is a nonzero $k$-algebra with an
  $n^2$-element basis and a surjective multiplication map $\mu$; (7.1) a domain
  $L\otimes_kL$ would be a field, making $\mu$ injective, so $n^2\le n$,
  impossible for $n\ge2$; (8.1) but $L\subseteq K$ is $k$-linearly retracted and
  $k\hookrightarrow\bar k$ extends to $L$, so $L\otimes_kL$ embeds into the
  domain $K\otimes_k\bar k$, a contradiction; (9.1) hence $n=1$, and the
  algebraically closed case follows because then $\bar k=k$. AC is stated and
  its exact use ([F1] geometric clause, [F8], [F17], [F18]) is recorded.
- **Checks:** precheck initially demanded the canonical stratification; adopted
  the canonical numbering via `tools/adopt-repair.mjs` (run with
  `npm_config_cache=/tmp/npmcache`, the npx cache being read-only by default),
  after which precheck PASS and reflow is a no-op. Strict proof contract 1/1
  with 24 exact citation quotes, 11 derivations covering every numbered step,
  and all eight boundary rows; `item-dependency-levels` clean;
  `regall` added the item to the A-page listing and synced the 25 manifest deps.
- **Decision:** `record-item repaired`, confidence 1, twenty-five examined
  dependency IDs; receipt sha
  `29cd3989d1c613e5f0a0aa07e583639733fad7526bf9db7bb19296c853fec400`.
- **Open gaps:** none. The two linear-algebra/`AC` suppliers are already
  published; the item is the A-side supplier for
  `cor-no-nonconstant-map-proper-variety-to-affine-line` (level 8).
- **Next:** `cex-proper-not-necessarily-projective` (B, level 7).

### Level 7 (B): a proper scheme that is not projective

- **Claim/conventions:** Assuming AC, over an algebraically closed field $k$ glue
  two copies $X_1,X_2$ of $\mathbb P^3_k$ along the disjoint union
  $Z_m=L_m\sqcup C_m$ of the coordinate line $L_m=V(x_2,x_3)$ and the smooth
  plane conic $C_m=V(x_0,x_1^2+x_2x_3)$ in the plane $x_0=0$, exchanging line
  and conic under the identifications $\psi_m:L_m\to\mathbb P^1_k$,
  $\varphi_m:\mathbb P^1_k\to C_m$; the pushout $X=X_1\amalg_Z X_2$ is a
  $k$-scheme, each $X_m$ is a closed subscheme, the structure morphism
  $X\to\operatorname{Spec}k$ is proper, and there is no closed immersion
  $X\to\mathbb P^N_k$ over $k$ for any $N\ge0$. Manifest statement preserved.
- **Scaffold audit and repair:** the recorded strategy (build line and conic,
  glue with the closed-gluing lemma, then obstruct projectivity by the degree of
  the pulled-back $\mathcal O(1)$) is correct; the dep list was confirmed
  against the argument and the manifest deps were re-synced from the item. The
  construction details are new: the two chart presentations of $\varphi_m$ and
  the isomorphism onto $C_m$ (1.2), the chartwise Jacobian check of
  nonsingularity (2.2), the comaximality of the line and conic ideals with the
  Bezout witness $(1+u_{12}u_{13})-u_{12}u_{13}=1$ (3.2) giving
  $Z_m\cong L_m\sqcup C_m$ as a closed subscheme, and the two pulled-back twist
  comparisons $n_1=2n_2$, $2n_1=n_2$ (7.1, 7.2).
- **Argument (canonical 1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 4.1, 5.1, 6.1, 6.2, 7.1,
  7.2, 8.1):** the standard charts and the dehomogenization rule
  $F_j=u_{ij}^{-d}F_i$ make every chart ideal gluing compatible (1.1); the two
  chart maps for the conic agree on the overlap and glue to an isomorphism
  $\varphi_m$ onto $C_m$ (1.2); the line is the closed subscheme
  $V(u_{02},u_{03})\sqcup V(u_{12},u_{13})$ with $\psi_m:L_m\cong\mathbb P^1_k$
  (2.1); the conic is $V(x_0,x_1^2+x_2x_3)$ with chartwise nonsingularity (2.2);
  $L_m$ and $C_m$ are disjoint on every chart (3.1); the product ideals glue to
  $Z_m$ and the Chinese-remainder splitting identifies it with
  $L_m\sqcup C_m$ (3.2); $\sigma$ exchanges the components (4.1); the
  AC-declared supplier `lem-closed-gluing-of-two-projective-three-spaces-is-proper`
  gives the proper pushout $X$ (5.1); a hypothetical closed immersion
  $h:X\to\mathbb P^N_k$ pulls $\mathcal O(1)$ back to invertible sheaves
  $M_i\cong\mathcal O_{\mathbb P^3}(n_i)$ with $n_i>0$ (6.1); the two pullbacks
  agree on $Z$ and, after $\sigma$, give
  $M_1|_{L_1}\cong(\sigma|_{L_1})^*(M_2|_{C_2})$ and
  $M_1|_{C_1}\cong(\sigma|_{C_1})^*(M_2|_{L_2})$ (6.2); restricting to the
  components gives $n_1=2n_2$ (7.1) and $2n_1=n_2$ (7.2); hence $n_1=0$,
  contradicting $n_1>0$ (8.1). AC is used exactly through the AC-carrying
  suppliers [F3], [F6], [F7] cited in steps 3.2, 5.1 and 6.1.
- **Checks:** precheck initially REPAIR (canonical stratification); the
  canonical block was spliced in (adopt-repair SKIPs here because precheck
  rewrites step numbers inside the bracket tags and the script matches steps by
  text), after which precheck PASS (`direct`) and reflow is a no-op; strict
  proof contract 1/1 with 20 exact citation quotes, 13 derivations covering
  every numbered step and all eight boundary rows (the two iff rows
  `not_applicable`, no biconditional in the statement); `regall` confirmed the
  B-page listing and synced the 18 manifest deps;
  `dependency_level` corrected from the scaffold's 7 to the computed 4 (its
  highest in-run prerequisite is
  `lem-closed-gluing-of-two-projective-three-spaces-is-proper` at level 3);
  `item-dependency-levels` clean (941 items, 60 pages).
- **Decision:** `record-item repaired`, confidence 1, eighteen examined
  dependency IDs; receipt sha
  `e27f5526b533db24862f6d067f0f8cbbd26a96274fc6e476524f695f6a328810`.
- **Open gaps:** none. `rem-projective-versus-proper` (A) already quotes this
  construction as its external witness; the two remaining level-8 items close
  the pair.
- **Next:** `cor-no-nonconstant-map-proper-variety-to-affine-line` (A, level 8).

### Level 8 (A): no nonconstant map from a proper integral variety to the affine line

- **Claim/conventions:** Assuming AC, for a nonempty proper integral finite-type
  $k$-scheme $X$, every $k$-morphism $f:X\to\mathbf A^1_k$ has as image a single
  closed point $\mathfrak m$ of $\mathbf A^1_k$ whose residue field
  $\kappa(\mathfrak m)$ is finite over $k$; if $X$ is geometrically integral
  over $k$ for the chosen algebraic closure then there is $a\in k$ with
  $f=a\circ s$ through the $k$-rational point $a:\operatorname{Spec}k\to
  \mathbf A^1_k$. Manifest statement preserved (the scaffold's phrase
  "factors through a $k$-rational point" is spelled out concretely).
- **Scaffold audit and repair:** the recorded strategy (morphisms to the affine
  line are global functions; use the finite-field statement; geometric
  integrality reduces the constants to $k$) is correct; the dep list named only
  `thm-global-functions-proper-integral-variety`, so it was repaired to the
  eighteen suppliers actually used: the affine-line and global-sections items,
  the natural bijection and anti-equivalence, the spectrum/vanishing-set/closed
  point/residue-field items, the finite-dimensional linear algebra items, the
  polynomial universal property and the factor theorem, plus
  `def-axiom-of-choice`.
- **Argument (canonical 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1, 6.1, 6.2, 7.1,
  8.1):** $\mathbf A^1_k=\operatorname{Spec}k[x]$ and the natural bijection turn
  $f$ into $\theta=f^\sharp:k[x]\to\Gamma=\Gamma(X,\mathcal O_X)$ with
  $f=\operatorname{Spec}(\theta)\circ c$ (1.1); $\Gamma$ is a finite field
  extension of $k$, equal to $k$ in the geometric case (1.2); the structure
  triangle $\pi\circ f=s$ makes $\theta$ a $k$-algebra map (2.1); $k[x]/\ker\theta$
  is a finite-dimensional $k$-subspace of the field $\Gamma$, hence a domain
  (3.1); in the geometric case $a=\theta(x)\in k$ and $\theta$ is evaluation at
  $a$ (3.2); the nonzero multiplication maps on the quotient are injective
  $k$-linear endomorphisms of a finite-dimensional space, hence surjective, so
  the quotient is a field (4.1) and in the geometric case the kernel is
  $(x-a)$, exhibiting the $k$-rational point (4.2); the kernel is therefore
  maximal (5.1) with $V(\ker\theta)=\{\ker\theta\}$ (6.1), a closed point of
  finite residue field (6.2); the image of $\operatorname{Spec}\theta$ lies in
  that vanishing set and $X\ne\varnothing$, so $f(X)$ is that single closed
  point (7.1); naturality gives $f=a\circ s$ in the geometric case, and the AC
  accounting closes the proof (8.1).
- **Checks:** precheck initially REPAIR (canonical stratification: the
  geometric-case step was hoisted to phase 3 and the maximality chain renumbered
  to 4.1-8.1); the canonical block was spliced in, after which precheck PASS
  (`direct`) and reflow is a no-op; strict proof contract 1/1 with 18 exact
  citation quotes (one per source), 12 derivations covering every numbered step
  and all eight boundary rows (the two iff rows `not_applicable`, no
  biconditional in the statement); `regall` added the item to the A-page listing
  and synced the eighteen manifest deps; `item-dependency-levels` clean (941
  items, 60 pages).
- **Decision:** `record-item repaired`, confidence 1, eighteen examined
  dependency IDs; receipt sha
  `13dc564e99f25dd77358f8392a38b338d73279c89615165f68d4068b7a1e4d3e`.
- **Open gaps:** none. The corollary is the promised A-side consequence of
  `thm-global-functions-proper-integral-variety`.
- **Next:** `cex-proper-not-affine-positive-dimensional` (B, level 8).

### Level 8 (B): `cex-proper-not-affine-positive-dimensional` — authored and complete

- **Claim/conventions (manifest statement, proved in full):** assuming AC, a
  nonempty proper integral finite-type $k$-scheme with more than one point
  cannot be affine over $k$, and positive Noetherian dimension implies
  nonaffineness; for every field $k$, $\mathbb P^1_k$ is nonempty, proper,
  integral, finite type and Noetherian, of dimension $\ge1$, and not affine
  over $k$. "Affine" here means affine over the base $\operatorname{Spec}k$
  via the structure morphism, not merely an affine scheme.
- **Scaffold audit and repair:** the recorded route (if $X\to\operatorname{Spec}k$
  were affine then $X\cong\operatorname{Spec}\Gamma(X,\mathcal O_X)$, and
  `thm-global-functions-proper-integral-variety` makes $\Gamma$ a finite field
  extension of $k$, whose spectrum is a single point) is correct; its declared
  suppliers did not cover irreducibility/reducedness of $\mathbb P^1_k$, the
  maximality of $(t)\subseteq k[t]$, or the dimension of an open cover. Seven
  suppliers were added to the item and to the batch-5 manifest, with facts
  [F30]–[F36]: `def-irreducible-topological-space-and-subset`,
  `thm-quotient-is-field-iff-ideal-maximal`, `def-reduction-of-scheme`,
  `def-nilradical-and-reduced-ring`, `def-reduced-affine-scheme`,
  `def-generic-point-irreducible-closed-subset`,
  `def-interior-closure-boundary-top`.
- **Argument (canonical 1.1–1.3, 2.1–2.4, 3.1–3.2, 4.1–4.2, 5.1, 6.1):**
  an affine structure morphism makes $X=f^{-1}(\operatorname{Spec}k)$ affine
  (1.1), so $X\cong\operatorname{Spec}\Gamma$ by the quasi-inverse property
  (2.1); the sheaf axioms identify $\Gamma(\mathbb P^1_k,\mathcal O)$ with the
  matching pairs on the two charts (2.2); $\mathbb P^1_k$ is nonempty, proper
  and finite type (2.3) with the strict chain $V((t))=\{(t)\}\subsetneq
  V((0))=U_0$ of nonempty closed subsets of the chart $U_0=\operatorname{Spec}k[t]$
  (1.3, 2.4), where $(t)$ is maximal because $k[t]/(t)\cong k$ (1.3) — so its
  Noetherian dimension is positive; $\Gamma$ is a field (3.1) and every
  matching pair is constant, by clearing the localisation $k[u,u^{-1}]$ and
  comparing polynomial degrees (3.2); hence $X$ has exactly one point (4.1),
  contradicting the hypothesis, and $\mathbb P^1_k$ would have one point if it
  were affine (4.2); a strict chain of nonempty irreducible closed subsets
  gives two points in the positive-dimension clause (5.1); integrality of
  $\mathbb P^1_k$ is reducedness plus nonemptiness plus irreducibility, with
  the nilpotent-germ ideal sheaf vanishing on the two domain charts and the
  dense chart $U_0$ irreducible (6.1). AC is used exactly through the
  AC-declared suppliers cited in steps 2.1–2.3 and recorded in 6.1.
- **Checks:** precheck PASS (`direct`) on the current file (re-verified in the
  batch sweep: 45 proof-bearing items, 0 failing, 0 error); reflow a no-op;
  strict proof contract 1/1 with 36 exact citation quotes, 13 derivations
  covering every numbered step and all 8 boundary rows (the two iff rows
  `not_applicable`, no biconditional in the statement); rendercheck OK for the
  item and the B page; `regall` synced the 36 manifest deps and confirmed the
  B-page listing; `item-dependency-levels` clean (942 items, 60 pages); `depcheck`
  has no finding for this item.
- **Decision:** `record-item repaired`, confidence 1, 36 examined dependency
  IDs; receipt sha
  `5769628461948bfda784758fa7ff1253f75af2a67ec2944bb81a522931d9f900`. The pair
  scope receipt was refreshed in the same session (sha
  `993d4531f95eaa3ad5003874490045b579043f346691fe0308a4e4cbc92490c6`) and
  `check --phase scope` reports `closed: true`.
- **Honest qualification:** the manifest statement of this item was strengthened
  earlier in the dispatch from a loose "such as $\mathbb P^1_k$" phrasing to
  the full two-part statement; the authored item proves the strengthened form
  and no promised claim was dropped. The scope refresh documents that
  inventory/statement change; it is not a new claim added after the fact.
- **Concurrent-write note:** the item file had been expanded by an in-flight
  writer at ~22:58–22:59 AEST before the closing session took it over; the last
  write (23:07:17 AEST) was the closing session's own and no later write was
  observed.
- **Open gaps:** none.
- **Next:** dispatch report.

## Dispatch report — step3b pair `finite-proper-and-projective-morphisms` (run frontier-36-complete, batch 5)

### Status and completed IDs

- Lane `step3b-pair-finite-proper-and-projective-morphisms-812c256abfb96c20`,
  role `alpha-high`. A page `finite-proper-and-projective-morphisms` (49 items),
  B page `finite-proper-and-projective-morphisms-examples` (9 items); 58 items total.
  Output manifest: `research/frontier-36-complete-batch-5.pages.json`.
- All 58 items are authored, contract-recorded, precheck-clean and rendered; every
  decision is current. `step3-decisions check --phase final` lists **zero** pending
  rows among these 58 IDs; the pair's `--phase scope` check is `closed: true`.
  (The run-wide `--phase final` check is still open only because of 392 pending
  items in other, in-flight pairs.)
- **A page (49)**: def-affine-local-quasi-coherent-algebra; lem-affine-morphism-structure-sheaf-pushforward-localizes; lem-relative-spec-glues-affine-algebras; thm-affine-morphism-relative-spec-characterization; def-finite-morphism-schemes; lem-finite-morphism-affine; lem-finite-stable-base-change-composition; thm-finite-morphism-integral-closed; def-universally-closed-morphism; def-proper-morphism; lem-closed-immersion-affine-quotient-and-base-change; cor-finite-morphism-proper; lem-proper-stable-base-change; lem-proper-stable-composition; lem-proper-local-on-base; thm-proper-morphism-closed-image; lem-closed-immersion-proper; lem-proper-source-to-separated-target-proper; lem-quasi-compact-scheme-image-specialization-closed; lem-universally-closed-valuative-existence-quasicompact; thm-valuative-criterion-properness; def-complete-variety; lem-integral-finite-type-scheme-function-field; def-algebraically-independent-finite-tuples-over-a-field; lem-relative-algebraic-constants-fg-field-finite; thm-global-functions-proper-integral-variety; cor-no-nonconstant-map-proper-variety-to-affine-line; def-projective-morphism-pre-proj; def-quasi-projective-morphism; thm-projective-space-proper-over-base; thm-projective-morphism-proper; def-quasi-finite-morphism-schemes; lem-quasi-finite-morphism-fibre-characterization; cor-proper-birational-normal-curve-isomorphism-off-finite-set; def-fpqc-morphism-schemes; lem-fpqc-cover-submersive; lem-fpqc-descent-properness-components; thm-properness-descent-fpqc; lem-proper-fibres-proper; lem-closed-gluing-of-two-projective-three-spaces-is-proper; lem-line-bundles-on-projective-three-space-restrict-by-degree; lem-uniqueness-of-twists-on-the-projective-line; rem-projective-versus-proper; rem-proper-not-topologically-compact-over-arbitrary-field; def-birational-morphism-schemes; lem-birational-morphism-principal-open-isomorphism; lem-curve-closed-subsets-finite; lem-projective-space-finite-type-over-base; lem-closed-immersion-pushout-schemes.
- **B page (9)**: ex-finite-power-map-affine-line; ex-closed-immersion-finite-proper; ex-projective-space-valuative-extension; cex-affine-line-not-proper; cex-open-immersion-not-proper; ex-proper-image-projective-variety; cex-proper-not-affine-positive-dimensional; cex-proper-not-necessarily-projective; ex-empty-morphism-proper-projective.

### Checks actually run at batch close (2026-09-28, AEST)

- `node tools/tsx-run.mjs tools/precheck.mts` on all 58 items: 45 checked, 0 failing.
- `node tools/reflow.mts` on the three refreshed items: unchanged (no-op); the
  batch was reflow-clean at each item checkpoint.
- `node tools/proof-contract.mjs research/frontier-36-complete-batch-5.proof-contracts.json --strict`:
  58/58 items, 0 errors, 0 warnings (673 citation quotes and 329 derivations in the pair).
- `node tools/rendercheck.mjs` on the 58 items and the two library pages: OK
  (no wikilink-in-math, balanced delimiters, all math spans parse under real KaTeX,
  both frontmatter blocks parse under the renderer's YAML parser).
- `node tools/content-policy.mjs research/frontier-36-complete-batch-5.pages.json`:
  58 scoped items, 0 errors, 0 warnings. (The planning-mode form
  `--manifest-only` reports the expected pre-authoring `batch-item-already-exists`
  rows for an authored batch; it is not a post-authoring gate.)
- `node tools/item-dependency-levels.mjs check --run frontier-36-complete`:
  942 items over 60 pages, maximum level 18, no label mismatch for this pair.
- `node tools/depcheck.mjs`: no finding mentions any of the 58 items (run-wide output
  has one unrelated unresolved-wikilink error, see cross-pair observations).
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the plan spec
  still carries `items: []` for this page (order 366.069) — the known pre-splice
  plan mismatch, reported for Step 4, not repaired here.
- `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-5.coverage.json`:
  21 sources, 87 harvested results, 0 errors, 0 warnings.
- `step3-decisions check --phase scope` (closed: true) and `--phase final`
  (no pending rows for this pair).

### Local suppliers added during this dispatch (8)

`def-birational-morphism-schemes`, `lem-birational-morphism-principal-open-isomorphism`,
`lem-curve-closed-subsets-finite`, `lem-projective-space-finite-type-over-base`,
`lem-closed-immersion-pushout-schemes`, `def-algebraically-independent-finite-tuples-over-a-field`,
`lem-uniqueness-of-twists-on-the-projective-line`, `thm-global-functions-proper-integral-variety`.
Each is registered in the batch-5 manifest, on its A/B page item list, in the
batch proof contracts and in the item file; coverage rows were added where a
source harvest applies (Stacks Fields §9.26, More on Morphisms §37.67, Varieties
§33.9, Divisors Lemma 31.29.4 tag 0BDA).

### Coverage-file repair

`research/frontier-36-complete-batch-5.coverage.json` now reports 21 sources /
87 harvested results / 0 errors: the invalid `kind: "lemma"` on the Stacks
Commutative Algebra Lemma 10.126.1 row was corrected to `monograph`, and a
source row for the Stacks Divisors Lemma 31.29.4 (tag 0BDA) was added behind
`lem-uniqueness-of-twists-on-the-projective-line`, with the read evidence and
limitation recorded on the row itself.

### Published concerns for the owner (no published item was edited here)

1. **`thm-affine-closed-immersions-quotient-rings` (published) — proof-locality
   issue, confirmed earlier in this dispatch.** The item's reference points at
   Stacks tag `01IN`, but its displayed proof invokes tag `01IH` and the §26.7
   quasi-coherent-sheaf machinery rather than the local affine-quotient input.
   Confidence: confirmed by reading the official tags. Proposed repair: re-prove
   with `lem-closed-immersion-affine-quotient-and-base-change` (completed here)
   as the supplied local quotient-and-base-change lemma, and re-audit consumers.
2. **`def-quasi-finite-at-a-prime-for-finite-type-algebras` (published) — stale
   Stacks tags, confirmed.** It cites tag `00PI` for Lemma 10.122.2 and
   Definition 10.122.3; the live `00PI` URL resolves to §10.123 (Zariski's Main
   Theorem). The current correct tags are `00PK` (Lemma 10.122.2) and `00PL`
   (Definition 10.122.3). Proposed repair: split/correct the external
   references and re-audit the consumers.
3. **`def-quasi-compact-and-quasi-separated-morphism` (published) — stale
   locator, confirmed.** The cited tag `01KV` now resolves to a §26.21
   cancellation lemma, not the quasi-compact/quasi-separated definition;
   proposed locators are §26.19 Definition 26.19.1 (tag `01K3`) and Lemma
   26.19.2 (tag `01K4`).
4. **Missing shared definition of algebraic independence, confirmed for two
   published consumers.** `lem-ag-finite-field-extension-separable-factorization`
   (its Fact F2) and `def-ag-separating-transcendence-basis` use "algebraically
   independent" but attribute it to `def-algebraic-and-transcendental-elements`,
   whose text does not define the term. Locally supplied here by
   `def-algebraically-independent-finite-tuples-over-a-field` (Stacks Fields
   §9.26, tag `030D`). Proposed repair: point the two consumers at the local
   definition or add the missing definition to the shared vocabulary item.

### Owner-held obligations carried into the handoff

- Stale Step-1 receipts for `lem-proper-stable-composition` and for
  `lem-relative-algebraic-constants-fg-field-finite` (the latter now has 13
  direct dependencies and a finite-scan strategy, versus the single
  `def-axiom-of-choice` recorded in its Step-1 receipt). Owner refresh only.
- Batch-9 cross-owner AC-statement concern (as recorded in the earlier
  checkpoint; not re-opened here).
- Pre-splice plan mismatch: `research/plan-spec.json` carries empty `items`
  lists for this pair (page order 366.069, two page prerequisites). Step 4 must
  reconcile the written batch inventory with the plan before splice; no
  in-run dependency was hidden to make `validate-plan` pass.
- The manifest and every item frontmatter agree on dependency **sets**; one
  order-only difference exists for
  `lem-universally-closed-valuative-existence-quasicompact` (manifest order vs
  frontmatter order, identical sets). No gate compares the order, and syncing
  it would invalidate three current receipts for no mathematical change, so it
  was deliberately left untouched.

### Cross-pair observations (not this pair, not fixed here)

- `depcheck` closes with exactly one run-wide error:
  `items/def-standard-open-proj.md: wikilink [[lem-proj-irrelevant-and-nilpotent-boundaries]]
  resolves to nothing` — a draft item of the in-flight `proj-projective-schemes-twisting-sheaves-and-ampleness`
  lane. Routed here for that lane's owner; it is not a published item.
- Concurrent-write observation: between this session's coverage check at ~23:08
  (which reported `unknown source kind "lemma"`) and the repair script at
  ~23:13, the same single field had already been corrected to `monograph` by an
  external writer; the repair script found nothing left to fix and appended the
  0BDA row on top. The cex item had likewise been touched by an in-flight writer
  at ~22:58 before this session took it over. The final state was verified as a
  whole after both events; if a duplicate writer for this pair is still active,
  the owner should reconcile before Step 4.

### Correction (append-only amendment to the level-8 (B) note above)

- The AC sentence in the level-8 (B) entry should read: AC is used exactly
  through the AC-carrying suppliers [F1] (`thm-global-functions-proper-integral-variety`,
  cited in step 3.1), [F22] (`thm-projective-space-proper-over-base`, cited in
  step 2.3) and [F24] (`thm-noetherian-ring-has-noetherian-spectrum`, cited in
  step 2.3), as recorded in step 6.1; all other selections in the proof are
  finite. The phrase "cited in steps 2.1–2.3" in that entry is a typo for
  "cited in steps 2.3 and 3.1".
