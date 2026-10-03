# Algebraic geometry and scheme theory: expansion roadmap

**Status and scope.** This audited future roadmap is dated 2026-09-30. Its
24 A/B pairs are now canonical empty page rows in `plan-spec.json` at orders
871--918. Their proposed item inventories and proof/source obligations remain
gated; page registration does not certify them for authoring or publication.
The current live run remains the approved 30-pair run, whose scope was not
changed. Existing AV-1--AV-26 promises and the AG-P2/AG-LIE supplier pages
published during Frontier-36 were accounted for before these additions.

## Existing-category placement

The 24 A/B pairs use the repository's existing categories as follows. The
`AG-` proposal code identifies the prose contract; both canonical page rows
of each pair take the same category.

| Existing category | Pairs | Proposal IDs |
|---|---:|---|
| `scheme-theory` | 7 | AG-GS-1, AG-GS-2, AG-GS-3, AG-ACT-1, AG-MOD-1, AG-DEF-1, AG-SPACE-1 |
| `algebraic-geometry` | 17 | AG-ACT-2, AG-ACT-3, AG-ACT-4, AG-GRP-1, AG-GRP-2, AG-GRP-3, AG-GRP-4, AG-GRP-5, AG-SURF-1, AG-SURF-2, AG-CRES-1, AG-DUAL-1, AG-CHOW-1, AG-ET-1, AG-BIR-1, AG-RES-1, AG-ARITH-1 |

### Canonical future page rows

The B page follows each A page immediately at the next order, uses the A ID
with `-examples`, and has the same category. All 48 item lists are empty.

| Prose contract | A order | A page ID | Category |
|---|---:|---|---|
| AG-GS-1 | 871 | `group-schemes-of-finite-type-over-a-field` | `scheme-theory` |
| AG-GS-2 | 873 | `affine-group-schemes-hopf-algebras-and-rational-representations` | `scheme-theory` |
| AG-GS-3 | 875 | `lie-algebras-and-infinitesimal-group-schemes` | `scheme-theory` |
| AG-ACT-1 | 877 | `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients` | `scheme-theory` |
| AG-ACT-2 | 879 | `classical-complex-algebraic-actions-and-affine-embeddings` | `algebraic-geometry` |
| AG-ACT-3 | 881 | `reductive-affine-invariant-theory-and-geometric-quotients` | `algebraic-geometry` |
| AG-ACT-4 | 883 | `projective-git-from-linearized-line-bundles` | `algebraic-geometry` |
| AG-GRP-1 | 885 | `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` | `algebraic-geometry` |
| AG-GRP-2 | 887 | `groups-of-multiplicative-type-and-arithmetic-tori` | `algebraic-geometry` |
| AG-GRP-3 | 889 | `unipotent-solvable-groups-and-borel-fixed-points` | `algebraic-geometry` |
| AG-GRP-4 | 891 | `split-reductive-root-systems-bruhat-cells-and-parabolics` | `algebraic-geometry` |
| AG-GRP-5 | 893 | `highest-weights-and-rational-representations-of-split-reductive-groups` | `algebraic-geometry` |
| AG-SURF-1 | 895 | `intersection-products-on-smooth-projective-surfaces` | `algebraic-geometry` |
| AG-SURF-2 | 897 | `surface-riemann-roch-and-the-hodge-index-theorem` | `algebraic-geometry` |
| AG-CHOW-1 | 899 | `chow-groups-intersection-products-and-grothendieck-riemann-roch` | `algebraic-geometry` |
| AG-CRES-1 | 901 | `point-blowup-resolution-on-arbitrary-regular-surfaces` | `algebraic-geometry` |
| AG-DUAL-1 | 903 | `coherent-duality-on-projective-cohen-macaulay-schemes` | `algebraic-geometry` |
| AG-MOD-1 | 905 | `hilbert-functors-and-projective-hilbert-schemes` | `scheme-theory` |
| AG-SPACE-1 | 907 | `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations` | `scheme-theory` |
| AG-DEF-1 | 909 | `deformation-theory-of-schemes-and-obstruction-spaces` | `scheme-theory` |
| AG-ET-1 | 911 | `etale-covers-and-the-etale-fundamental-group` | `algebraic-geometry` |
| AG-BIR-1 | 913 | `birational-morphisms-contractions-and-surface-singularities` | `algebraic-geometry` |
| AG-RES-1 | 915 | `higher-dimensional-resolution-of-singularities` | `algebraic-geometry` |
| AG-ARITH-1 | 917 | `abelian-varieties-base-change-and-arithmetic-models` | `algebraic-geometry` |

The four reviewed lanes are:

- **V25:** Ravi Vakil, *The Rising Sea: Foundations of Algebraic Geometry*,
  2025-10-21 author-hosted notes. Stable locators are section/theorem/exercise
  numbers, not the old 2011 PDF pages. The report is
  `research/algebraic-geometry-expansion-2026-09-30/source-vakil.md`.
- **S:** The Stacks Project, using stable tags listed below and in
  `source-stacks.md` in the same directory.
- **M22:** J. S. Milne, *Algebraic Groups*, corrected 2022 edition; report
  `source-milne-groups.md`. Its group-scheme statements are over a field and
  often allow nonreduced schemes.
- **Br:** Michel Brion, “Introduction to actions of algebraic groups” (2010);
  report `source-brion-actions.md`. It is a complex-variety source, not a
  general-base group-scheme source.

## Evidence labels and commissioning rule

Each source result falls into one of three states:

1. **Proof present in checked source.** A local author still has to write and
   close every earlier interface in the proof chain. For a new A/B pair, a
   second independent full treatment is still needed where the repository's
   pair audit requires it. Milne alone is not a two-treatment source matrix.
2. **Exercise, citation, or sketch.** The source gives a precise route but
   leaves a proof step to the author. The proposal below names the step and
   the needed source gate; a reference alone does not close the claim.
3. **Source gap.** The four reports do not establish the result. Keep the
   branch outside a proof-ready contract until the named source work is
   completed. A candidate book title is a retrieval lead, not proof evidence.

The exact IDs and proof obligations below are intended to prevent later
scaffolds from recreating an old theorem with a wider scope than its sources.
All B inventories are examples/counterexamples only and are leaves; no B item
is a supplier for an A theorem.

## Live supplier and non-duplication audit

The live checkout was checked against `plan-spec.json`, page front matter,
item publication states, and Git history on 2026-09-30. The active run remains
Frontier-37's selected 30 pairs; this roadmap changes no run scope or machine
state.

| Existing pair | Published A page slug / A count | Published B page slug / B count | Availability and roadmap boundary |
|---|---|---|---|
| AV-9 | `presheaves-sheaves-stalks-and-sheafification` / 29 | `presheaves-sheaves-stalks-and-sheafification-examples` / 9 | Published; reuse presheaf, stalk, sheafification, and étalé-space interfaces. |
| AV-10 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback` / 30 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` / 9 | Published; reuse exactness, ringed-space, and module-pullback interfaces. |
| AV-11 | `affine-schemes-and-the-structure-sheaf` / 30 | `affine-schemes-and-the-structure-sheaf-examples` / 7 | Published; reuse Spec and structure-sheaf constructions. |
| AV-12 | `schemes-subschemes-and-morphisms-locally-of-finite-type` / 31 | `schemes-subschemes-and-morphisms-locally-of-finite-type-examples` / 8 | Published; reuse scheme morphisms, closed subschemes, and finite-type interfaces. |
| AV-13 | `fibre-products-base-change-and-scheme-theoretic-fibres` / 42 | `fibre-products-base-change-and-scheme-theoretic-fibres-examples` / 11 | Published; reuse fibre products, base change, and scheme-theoretic fibres. |
| AV-14 | `diagonals-separated-morphisms-and-valuative-uniqueness` / 29 | `diagonals-separated-morphisms-and-valuative-uniqueness-examples` / 8 | Published; use for diagonals, separatedness, and valuative uniqueness. |
| AV-15 | `finite-proper-and-projective-morphisms` / 49 | `finite-proper-and-projective-morphisms-examples` / 9 | Published; includes fpqc properness descent and finite/proper/projective criteria. |
| AV-16 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` / 33 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples` / 9 | Published; reuse Kähler differentials, conormal, and infinitesimal-lifting interfaces. |
| AV-17 | `flat-smooth-and-etale-morphisms` / 77 | `flat-smooth-and-etale-morphisms-examples` / 9 | Published; includes generic freeness, smoothness criteria, and scheme-level quasi-finite results. |
| AV-18 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles` / 40 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples` / 10 | Published; includes the actual QC-ideal/closed-subscheme supplier. |
| AV-19 | `proj-projective-schemes-twisting-sheaves-and-ampleness` / 38 | `proj-projective-schemes-twisting-sheaves-and-ampleness-examples` / 10 | Published; reuse Proj, twists, projective bundles, and ampleness. |
| AV-20 | `cartier-and-weil-divisors-line-bundles-and-picard-groups` / 0 | `cartier-and-weil-divisors-line-bundles-and-picard-groups-examples` / 0 | Empty planned slots. The locally factorial claim is restricted to the UFD definition; regular-local UFD is not an available supplier. |
| AV-21 | `sheaf-cohomology-cech-cohomology-and-comparison` / 63 | `sheaf-cohomology-cech-cohomology-and-comparison-examples` / 10 | Published; reuse derived sheaf cohomology and Čech comparison. |
| AV-22 | `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` / 56 | `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples` / 12 | Published; reuse affine vanishing, projective cohomology, finiteness, and stated base change. |
| AV-23 | `smooth-proper-curves-divisors-genus-and-ramification` / 0 | `smooth-proper-curves-divisors-genus-and-ramification-examples` / 0 | Empty planned slots; records the RH/high-degree promises and setup, but emits no theorem rows for them. Complete theorem destinations are AV-25 after AV-24. Current A inventory has 33 rows; this is separate from the active batch-6 manifest's 35 A placements. |
| AV-24 | `riemann-roch-for-curves-via-euler-characteristics` / 0 | `riemann-roch-for-curves-via-euler-characteristics-examples` / 0 | Empty planned slots; its Euler-characteristic proof route starts from published AV-21/22. |
| AV-25 | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` / 0 | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples` / 0 | Empty planned slots; arbitrary-field abstract duality/RR uses published AG-LIE plus AV-24; the coefficient-trace residue calculation is locally proved only over perfect fields or at separable closed points. |
| AV-26 | `blowups-exceptional-divisors-and-strict-transforms` / 0 | `blowups-exceptional-divisors-and-strict-transforms-examples` / 0 | Empty planned slots; the former resolution promise now has an explicit local δ-decrease route. |

The 13 published Scheme Theory pairs above contain **547 A items and 121 B
items (668 direct placements)**. AV-9--AV-13 specifically contain 162 A and
44 B items (206 placements); the former 162/47/209 census was stale. The
per-pair values are manifest-derived from `plan-spec.json` and were cross-
checked against page front matter. No transitive-closure count is used as a
substitute for these direct counts.

AV-7 and AV-8 remain unpublished page pairs. AV-7 is selected in
the Frontier-38 owner-30 run; its A-page plan currently registers seven
local prerequisite items for projectivity, full classical Zariski Main, and
proper quasi-finite finiteness. The original claim inventory is preserved,
and the local source/proof record is
`research/frontier-38-owner-30-local-prereq-av7-zmt-projectivity.md`.
Fresh drift review and ordinary engine certification remain due. AV-8 and
AV-20/23--AV-26 remain future prose promises with empty planned A/B slots,
not published suppliers. The original AV source matrix and local proof chains
remain in
`research/algebraic-geometry-expansion-2026-09-30/audit-repair.md`.

| Additional current supplier | Live count/state | Boundary for this roadmap |
|---|---|---|
| AG-P2 `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` | `plan-spec.json`: 49 A IDs and 1 B ID. Of the 49 A IDs, 1 is the shared pre-existing definition and 48 are newly commissioned A IDs. The A-page front matter has 50 placements because it repeats the B example `ex-classical-affine-line-coordinate-local-and-function-field-dictionary`; the B page has 1 placement. Thus the pair has 51 page placements and 50 unique IDs: 48 new A + 1 shared A + 1 new B. All unique IDs are published. | Reuses AV-1/2; full morphism antiequivalence is a published AG-P2 theorem. Do not duplicate. |
| AG-LIE `smooth-projective-serre-duality-and-flag-variety-line-bundles` and examples | Published by `fc59133d593f6883e00f24ef5084b0dd550ff7cf` (2026-09-30); 39 A / 3 B, all published; zero published consumers. | Treat as the complex simply connected semisimple flag and smooth-projective duality specialization. Reuse its `G/B`, big-cell/Bruhat, Borel line-bundle, minimal-parabolic `P¹`, and projective-space pairing items. |
| Differential Geometry `lie-subgroups-actions-and-homogeneous-spaces` | Published | It covers smooth Lie group actions, not algebraic actions, group schemes, or algebraic quotient representability. |
| Finite-group invariant theory `thm-noether-finiteness-theorem-for-invariants` | Published | It does not prove invariant finite generation for reductive algebraic groups. |
| CA-19 / CA-20 / CA-21 | Published normalization, algebraic Zariski Main, and homogeneous resultant pages | Exact IDs and local argument seams are listed in the AV proof matrix; do not inflate their hypotheses. |
| AV-4 `products-segre-and-veronese-embeddings-and-grassmannians` | Published | Grassmannian/Plücker and projective hypersurface-family material already has a home. |

### Cross-category supplier status

The following dependencies were checked as separate published pages, not
inferred from historical prose. They are available interfaces for future
proofs; their existence does not mean the AG theorem has already been proved.

| Current supplier pages | State and intended seam |
|---|---|
| Commutative Algebra: `noetherian-rings-and-hilbert-basis`, `localisation-of-modules-and-support`, `integral-extensions-and-going-up`, `valuation-rings-and-discrete-valuation-rings`, `dedekind-domains-and-ideal-classes`, `krull-dimension-and-height-theorems`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `normalization-finiteness-for-affine-domains`, `algebraic-zariski-main-for-quasi-finite-morphisms`, `homogeneous-resultants-and-projective-intersection-length` | All are `published`. CA-20's exact published theorem ID is `thm-algebraic-zariski-main-localization`; it supplies localization at a pointwise quasi-finite prime under its AC/finite-type hypotheses. These pages supply the named AV-14--AV-26 algebra interfaces. Do not route general Weil-divisor or resolution claims through a narrower CA item. |
| Homological Algebra: `ext-and-balanced-resolutions`, `derived-categories`, `spectral-sequences`, `grothendieck-spectral-sequences-and-computations` | All are `published`. They are explicit prerequisites for sheaf cohomology, higher duality, and the AG-LIE page; derived-category names do not by themselves prove the geometric duality theorem. |
| Differential Geometry: `lie-subgroups-actions-and-homogeneous-spaces`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `highest-weight-theory-for-complex-semisimple-lie-algebras` | All are `published`. They supply complex Lie algebra/group inputs to the published AG-LIE specialization. Smooth Lie actions and Lie algebra modules do not prove algebraic rationality, scheme-theoretic stabilizers, or algebraic quotient representability. |
| Abstract Algebra: `the-galois-correspondence` and `algebraic-closure-embeddings-and-separability` | Both are `published`. They support field/separability inputs for character-module descent; M22 A.64/A.66 still need to be written out locally where the tori classification uses them. |

The supplier page names above were verified at their live front matter; in
particular, AG-LIE's declared Lie and Homological Algebra prerequisites are
available. The remaining cross-track work lies in the mathematical interface
proofs in AG, not in missing page files. Existing pages gained no new
`requires` edges; the new empty rows declare their own prerequisites.

## Resolution of the historical `not-supplied` rows

The dated crosswalk at the end of `plan-algebraic-geometry-track.md` is the
authoritative short reconciliation. The map below makes the eventual proof
destination and evidence class explicit.

| Historical promise | Current route | Evidence state |
|---|---|---|
| AV-1 classical affine coordinate duality | Published AG-P2 `thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence` | Complete local supplier published. |
| AV-6 dual-number tangent interpretation | Published `thm-tangent-vectors-dual-numbers`; Stacks *Varieties* 33.16.1, 33.16.3--33.16.5 [0B29, 0B2C--0B2E]. | Complete, relative formulation supplied; the residue-field equality is needed for the rational cotangent quotient form. |
| AV-6 regular but not smooth over an imperfect field | Published `thm-regular-not-smooth-imperfect-field` and `cex-regular-not-smooth-purely-inseparable-point`; Stacks Example 33.12.7 [038S], V25 §13.2.8. | Complete counterexample and theorem published. |
| AV-12 QC ideal/closed-subscheme correspondence | Published `thm-quasi-coherent-ideal-closed-subscheme-correspondence`; Stacks *Morphisms* [01QP, 01QQ]. | Complete supplier published under its stated AC hypothesis. |
| AV-15 fpqc descent of properness | Published `thm-properness-descent-fpqc`; Stacks *Descent* [02L1], using [02KS, 02KU, 02KZ]. | Complete supplier published. If a future AV-15 item is needed, reuse it; do not recreate it. |
| AV-15/17 separated quasi-finite factorization and proper quasi-finite finiteness | Published AV-17 items `lem-scheme-zariski-main-factorization-quasi-finite` and `thm-proper-quasi-finite-is-finite`. Local chain: define quasi-finiteness; prove the finite-fibre characterization under finite-type hypotheses; use the published AV-15/CA-20 finite-algebra localization; apply separated Zariski Main; then use properness plus quasi-finiteness to prove the finite map. Stacks [01TD, 02NG, 01TJ, 00Q9, 03GT, 05K0, 02LS] records the checked route. | The theorem destinations are already published; the older attribution to AV-15 and the claim that local suppliers remain future work are stale. V25 §28.5 supplies only the proper form. |
| AV-16 differential-rank smoothness | Published `def-smooth-relative-dimension-via-differentials` is a definition and has `proof: not-applicable`. Stacks smooth ⇒ finite free differentials [02G1]; converse needs lfp, flatness, and fibre-smoothness/generator count [01V9]. | Theorem proof belongs after AV-17. Rank-$n$ local freeness alone is false as a smoothness criterion; see [00T1]. |
| AV-17 generic freeness | Published AV-17 item `lem-generic-freeness-finite-type-algebra-module`, followed by `thm-generic-flatness-morphisms`. Its exact hypotheses are AC, Noetherian domain A, finite-type A-algebra B, and finite B-module M. Its proof inducts on an algebra-generator list: the zero-generator case uses a prime filtration and splitting after localization; for B=A'[x], the kernels in the filtration by M_k=Σ_{j≤k}x^jM_0 stabilize over Noetherian A', so the tail quotients are one finite A'-module Q. Inductively localize M_0, Q, and the finite initial quotients to free modules; splitting yields M_a as their free direct sum. AC supplies the filtrations and simultaneous basis-preimage choices. Stacks 10.118.1 [051R] checks the exact statement; 10.118.3 [051T] and Generic Flatness [0529] supply a stronger finite-presentation/generic-flatness route. | The existing item is the supplier; V25 §24.5.13 cites generic flatness but does not prove this item. |
| AV-22 proper-flat coherent cohomology and derived base change | Published AV-22 items `lem-proper-flat-cohomology-perfect-complex`, `lem-proper-flat-fp-cohomology-perfect-complex`, and `thm-cohomology-and-base-change`; Stacks *Cohomology of Schemes* Lemma 30.22.1 and Remark 30.22.2 [07VJ]. | Existing items provide the perfect-complex and base-change route under Noetherian base, proper morphism, coherent base-flat sheaf. V25 Theorem 25.2.1 is weaker unless a perfectness/truncation argument is added. |
| AV-23 Riemann--Hurwitz/étale-genus promise → AV-25 proof destination | AV-23 records the curve-map/different setup and the promise, but emits no Riemann--Hurwitz or étale-genus theorem row. Stable complete ID: AV-25 `thm-riemann-hurwitz-complete`, after AV-24's Euler-RR. At AV-25, locally rederive the canonical differential map from published AV-16 (do not use AV-23's unpublished canonical-formula row as supplier); its DVR cokernel length is the different exponent. Finite-flat fibre degree, published AG-LIE duality for `deg ω=2g−2`, and AV-24's explicit local proof give RH after taking degrees; `Ω_{C/D}=0` gives the finite-étale case at `cor-unramified-cover-curves-genus-complete`. AV-24 itself is locally proved from published AV-21/22 and local AV-20/23 divisor/curve definitions. | Complete route at AV-25 from published suppliers plus AV-24's explicit local proof; no unpublished AV-23 row or AV-25-as-supplier assumption. V25/Stacks are comparisons only. |
| AV-23 degree-$2g$ basepoint-free and degree-$(2g+1)$ very-ample promises → AV-25 proof destination | AV-23 records these promises but emits no basepoint-free or very-ample theorem rows. Stable AV-25 IDs are `thm-degree-two-g-line-bundle-basepoint-free` and `thm-degree-two-g-plus-one-line-bundle-very-ample`, after AV-24. Exact sequences at geometric points and length-two subschemes reduce to negative-degree vanishing of `ω⊗L⁻¹(p)` and `ω⊗L⁻¹(Z)`; AG-LIE duality supplies the pairing and AV-22 flat proper base change descends the geometric-point proof. | Complete route at AV-25 from AG-LIE, AV-22 and AV-24's local proof; AV-25 is destination, never an existing AV-23 supplier. V25 §§19.2.5--19.2.11/Ex. 19.2.E are comparison checks only. |
| AV-26 reduced plane-curve embedded resolution | Keep the theorem on AV-26; do not count AG-CRES-1 as a supplier. Let `Q_C=ν_*O_{Ĉ}/O_C` and `δ_k(C)=dim_k H⁰(C,Q_C)`. At a closed centre `p` of multiplicity `m` and degree `r=[κ(p):k]`, the exceptional exact sequences with quotients `O_E(-j)` give `χ(C')−χ(C)=r·m(m−1)/2`; the finite birational map `C'→C` has the same componentwise normalization, so `δ_k(C')=δ_k(C)−r·m(m−1)/2`. The local term is `r·length_{O_{C,p}}(Q_{C,p})`; after blowup it is replaced by `Σ_{q|p}[κ(q):k]·length_{O_{C',q}}(Q_{C',q})`. Once δ is zero, CA-8 makes each normal one-dimensional local ring a DVR and the components are disjoint. For embedded crossings, use the lexicographic invariant `(N,M)`: `N` is maximum pairwise contact order and `M=Σ_p max(s_p−2,0)`. In a chart `y=xt`, an equation with contact `n` restricts on the strict transform to `f(x,0)/x`, so any still-meeting pair has order `n−1`; this includes all pairs among branches sharing a tangent. Thus when `N>1` each blowup of maximal-contact points strictly lowers `N`. Once `N≤1`, every meeting pair is transverse; blowing a point with at least three components separates their distinct tangent directions and strictly lowers `M`, creating only transverse pairwise intersections with the exceptional component. | The Stacks proof [0BI4, 0BI5, 0BI7, 0BI8, 0BIC] was checked in full. Local route uses published CA-19 normalization, CA-8 DVR, AV-15/17 proper-quasi-finite finiteness, AV-21/22 cohomology/Euler additivity, CA-11 Rees interfaces, AV-26 charts, and the published regular-local normal-domain intersection lemma. Blowups of regular surfaces at closed points stay regular even if the residue field extension is inseparable; this does not imply smoothness or relative SNC over imperfect `k`. |

## Dependency-ordered group and group-action proposals

### Field group schemes, Hopf algebras, and infinitesimal structure

M22 supplies the general field-level group-scheme sequence. Stacks Chapter 39
provides an independent, directly checked route for the basic group-object
and subgroup definitions and standard examples in AG-GS-1. Stacks does not
provide the Hopf/comodule equivalence or the Lie-bracket proof, and its
`alpha_p` coverage was not verified. The separate AG-GS-1 counterexample
source gap is closed for this build by Milne, *Algebraic Groups* (corrected
2022), §2.5, printed p. 40, together with the complete local coefficient proof
in `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`. The historical
Snowden full-text receipt below is retained; its URL is currently unreachable. The
Hopf/comodule and Lie-bracket source gates remain open for their own pairs.

| Pair/order and dependencies | Exact A inventory and proof obligation | B inventory and hypothesis checks | Source route and gate |
|---|---|---|---|
| **AG-GS-1 — Group schemes of finite type over a field.** First future pair after AV-11--AV-13; no reliance on the AG-LIE complex variety page. | `def-group-scheme-over-a-field` (group object in schemes; include possibly nonreduced finite-type schemes); `def-morphism-and-closed-subgroup-scheme` (morphisms and subgroup schemes); `lem-closed-subgroup-scheme-valued-point-criterion` (prove the identity, multiplication, and inverse factorization criterion). | `ex-additive-multiplicative-and-general-linear-group-schemes` (group-object computations); `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme` ($\operatorname{char}k=p>0$, distinguish $\alpha_p$, $\mu_p$ from their $k$-points). | M22 Def. 1.1, Ch. 1 §§1(a)--(c), pp. 6--14; Ch. 2 §§2(a)--(j), pp. 39--61; §2.14, p. 44. Independently, Stacks *Groupoid Schemes* 39.4.1 [022S] defines group schemes and morphisms by their functor of points; Definition 39.4.3 [047D] defines closed subgroup schemes; Lemma 39.4.4 [0G8L] proves the valued-point factorization criterion; Examples 39.5.1--39.5.4 [022U, 040M, 022V, 022W] give $\mathbf G_m$, roots of unity, $\mathbf G_a$, and $\mathrm{GL}_n$. Thus the definition/subgroup/basic-example route has two checked treatments. For the remaining $\alpha_p$ counterexample, Snowden, *Lecture 5: Group schemes 1*, “Roots of unity,” “The group scheme $\alpha_p$,” and Remark 2, independently constructs $\mu_p$ and $\alpha_p$ and proves they are isomorphic as schemes but not as group schemes; The verified current comparison is Milne §2.5, printed p. 40; the full nonisomorphism proof is supplied locally in the commissioned counterexample. The old §2.14, p. 44 locator is superseded. Source receipt: <https://public.websites.umich.edu/~asnowden/teaching/2013/679/L05.html>, 20,610 bytes, SHA-256 `140d24b64ec7f8e30091314f9a750f3fff1cfe9c8ea51c8405dc6ec230ac109d` (full text retrieved and read in the root audit; the orchestrator's refresh attempt returned HTTP 403). The AG-GS-1 source gate is closed; this does not close the separate AG-GS-2/3 gates. |
| **AG-GS-2 — Affine groups, Hopf algebras, and rational representations.** Requires AG-GS-1 and published affine anti-equivalence. | `def-coordinate-hopf-algebra-of-affine-group-scheme`; `thm-affine-group-schemes-hopf-algebra-antiequivalence`; `thm-closed-subgroup-schemes-correspond-to-hopf-ideals`; `thm-affine-group-scheme-faithful-finite-dimensional-representation`. Prove diagram reversal, the subgroup/Hopf-ideal correspondence, and the finite-dimensional subcomodule argument that produces a closed immersion into $\mathrm{GL}(V)$. | `ex-hopf-algebra-of-a-split-torus`; `ex-rational-representation-from-a-comodule`. | M22 Prop. 3.1, 3.6--3.15, pp. 64--68; Thm. 4.9/Cor. 4.10, pp. 86--88. Use arbitrary field and characteristic exactly as stated. Existing AG-LIE faithful-representation item is over $\mathbf C$ and is not this general supplier. No exact Stacks Hopf/comodule equivalence proof was verified; second-source gate remains. |
| **AG-GS-3 — Lie algebras and infinitesimal groups.** Requires AG-GS-1/2. | `def-lie-algebra-of-a-group-scheme`; `thm-lie-bracket-and-adjoint-action-from-infinitesimals`; `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero`. Prove the tangent-at-identity construction and bracket by the commutator over dual numbers; isolate Cartier smoothness as characteristic zero only. | `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n`; `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme`. | M22 Def. 10.6, Thm. 10.23, pp. 188--194; distributions Ch. 10; Cartier Thm. 3.23, pp. 70--71. Stacks Lemma 39.6.3 [047I] identifies invariant differentials with the pullback of the identity conormal, and Lemma 39.6.4 [0BF5] identifies tangent multiplication with addition. These support the underlying tangent module, not the Lie bracket or adjoint commutator proof. Do not assert smoothness in positive characteristic; M22's char-zero theorem is the exact scope. Second-source gate remains for the bracket. |

### Actions, quotients, and reductive structure

| Pair/order and dependencies | Exact A inventory and proof obligation | B inventory and hypothesis checks | Source route and gate |
|---|---|---|---|
| **AG-ACT-1 — Actions, orbits, stabilizers, controlled quotients.** Requires AG-GS-1/2, AV-5 dimension/constructibility, and AV-13/17 morphism interfaces. | `def-algebraic-group-action-and-scheme-theoretic-stabilizer`; `lem-orbit-map-fibres-and-stabilizer-dimension`; `thm-homogeneous-space-for-smooth-affine-group`; `thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation`; `rem-quotient-sheaf-versus-representing-scheme`. Prove the orbit-map facts used by the quotient construction. State M22 Thm. 7.18 only for smooth affine $G$ over a field and any subgroup scheme $H$: $G/H$ is a separated algebraic scheme. Separately prove Stacks [03BM] only for affine finite-locally-free equivalence relations. | `ex-gl2-quotient-by-diagonal-torus`; `cex-orbit-set-need-not-represent-quotient-sheaf`. Distinguish quotient set, fppf quotient sheaf, and scheme. | M22 Orbit Lemma 1.66, Prop. 7.17/Thm. 7.18, pp. 33--34, 142--143; Stacks *Morphisms* [02VG, 03BD, 03C5], Proposition 39.23.9 [03BM]. M22 proves its smooth-affine route using Thm. 4.27 and Prop. 7.17. Stacks [07S6] proves that for a groupoid scheme with $s,t$ finite locally free and $(t,s)$ an equivalence relation, there exists a scheme $M$ such that $U\to M$ is finite locally free, $R=U\times_MU$, and $M$ represents the fppf quotient sheaf if, for every nonempty closed subset $Z\subseteq U$, there is a point $u\in Z$ whose $R$-equivalence class is contained in an affine open of $U$. The Stacks Project strengthened this condition on 2025-07-22 in response to an earlier comment; that concern is resolved in the current statement. This still does not represent arbitrary $G/H$. General arbitrary-group quotient representability remains gated pending a close-read/local reproduction of M22 Appendix B and a second independent proof source. |
| **AG-ACT-2 — Classical complex actions and affine embeddings.** Requires the published AG-P2 classical affine interface and AV-5. The local packet defines and proves the needed classical complex affine-group action/coaction interfaces itself; it does not require AG-GS-2/873 and does not replace the group-scheme pairs. | `def-rational-action-on-affine-variety`; `thm-coordinate-ring-of-affine-action-is-locally-finite`; `lem-torus-rational-modules-and-gradings`; `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`. Prove the equivariant embedding separately from group linearity. | `ex-torus-weights-and-affine-action`; `cex-abstract-group-action-is-not-algebraic-action`. | Brion, *Introduction to actions of algebraic groups*, Definition 1.4, Lemma 1.5, Definitions 1.6/1.8 and full Proposition 1.9 proof, printed pp. 3--4; Gille, *Introduction to reductive group schemes over rings*, full Proposition 6.0.5, Proposition 6.2.1 and Theorem 6.3.1 proofs, pp. 25--32; Milne, *Algebraic Groups* (2022), §4(a), Proposition 4.7/Corollary 4.8 and §12.12/Rmk. 12.13. Frontier-38 local proofs cover product-coordinate-ring, action/coaction, finite-dimensional comodule, local-finiteness, torus grading and equivariant embedding. The AG-ACT-2 source/proof route is now complete for audit; ordinary mathematical review and certification remain. No AG-GS-2 or AG-GRP-1 item is imported as a prerequisite. |
| **AG-ACT-3 — Reductive affine invariant theory and geometric quotients.** Requires AG-ACT-1/2, complete reducibility/Reynolds operator, and AV-18/19/22. | `def-reductive-and-linearly-reductive-over-c`; `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`; `thm-invariant-ring-finite-generation-and-affine-categorical-quotient`; `thm-stable-locus-geometric-quotient`. Prove finite generation, categorical universality, the unique closed orbit in each quotient fibre, and the stable-locus geometric quotient. | `ex-gm-quotient-of-affine-plane`; `cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer`. The counterexample should use the trivial $\mathbf G_m$ action on a point: its orbit is closed but its stabilizer is positive-dimensional, so the point is not stable under Brion's definition. Also record that the published finite-group Noether theorem does not supply this result. | Br Thm. 1.24 and Prop. 1.26, §§1.23--1.26, pp. 7--10. Br leaves the reductivity/complete-reducibility bridge to Schwarz--Brion Ch. 5. That proof was not read: this pair is **source-gated**, with full proof source and second-treatment gates open. Never extend “reductive implies linearly reductive” to positive characteristic. |
| **AG-ACT-4 — Projective GIT from linearized line bundles.** Requires AG-ACT-3, AV-18/19/22, and the invariant graded-ring construction. | `def-g-linearization-of-an-invertible-sheaf`; `def-semistable-and-stable-points-for-a-linearization`; `thm-projective-git-quotient-from-invariant-section-ring`; `thm-good-and-geometric-quotient-on-stable-locus`. Prove the quotient construction and state every linearization hypothesis. If claiming that a power of every ample bundle linearizes, prove the required normality/connectedness conditions separately. | `ex-gm-on-projective-line-with-two-linearizations`; `cex-semistable-locus-depends-on-linearization`. | Br Props. 1.29, 1.31, and sketch Prop. 1.35, pp. 10--13; the proof of 1.35 is incomplete and Hilbert--Mumford is explicitly omitted. **Source gate open:** read and close the omitted proof using MFK or Dolgachev; neither was reviewed. Do not call the pair proof-ready before then. |
| **AG-GRP-1 — Nonaffine groups, Barsotti–Chevalley, and abelian varieties.** Requires selected AG-GS-1 and the published proper/complete-scheme and projective interfaces. The exact general group-variety quotient chain is now proved locally on A885; unselected AG-ACT-1/877 is not a page prerequisite. | `def-abelian-variety-over-a-field`; `thm-barsotti-chevalley-perfect-field-group-variety`; `thm-barsotti-chevalley-existence-over-arbitrary-field`; `thm-abelian-variety-is-projective`. Keep unique smooth affine-normal subgroup for perfect-field group varieties separate from existence-only arbitrary-field connected group schemes, allowing a nonsmooth kernel. Prove exact 8.6/8.26 reductions locally. | `ex-elliptic-curve-as-nonaffine-algebraic-group`; `ex-affine-extension-of-an-abelian-variety`. | The complete 69 A / 2 B Frontier-38 packet records M22 §8(a–h), including 8.6/8.26/8.27/8.28; SGA3 Exposé V §8 and VIA §3.2 quotient proofs; full projectivity proof from Stacks; plus Brion, Brion–Samuel–Uma, Conrad, and Milne AV comparison routes. The general quotient is locally reconstructed from full SGA3; Milne/Brion import that quotient route, so a second independent quotient proof is unavailable. Under the current owner source rule, that alone is not a blocker when the local proof and recursive dependency chain are complete. Source/math review and normal engine gates remain open. Full locators and hashes: `research/frontier-38-owner-30-local-prereq-885.md`. |
| **AG-GRP-2 — Groups of multiplicative type and arithmetic tori.** Requires selected AG-GS-1 and the published Abstract Algebra pages `the-galois-correspondence` and `algebraic-closure-embeddings-and-separability`; the local packet supplies the affine Hopf dictionary, so AG-GS-2/873 is not a page prerequisite. Write out M22's A.64/A.66 descent steps locally. | `def-group-of-multiplicative-type-and-torus`; `thm-multiplicative-type-groups-and-galois-character-modules`; `cor-tori-correspond-to-torsion-free-character-lattices`. Prove the anti-equivalence for finitely generated abelian character modules with continuous Galois action; distinguish torsion from tori. | `ex-split-torus-character-lattice`; `ex-nonsplit-torus-galois-action`; `cex-mu-p-is-not-a-smooth-torus`. | Milne, *Algebraic Groups* (2022), §§12.3--12.9 and 12.14--12.27, plus full SGA 3 Exposés VIII, IX, X, §§1 and relevant descent/rigidity results, were retrieved and read at the exact locators recorded in the Frontier-38 A887/B888 source note. The 12-item A/3-item B local packet supplies the affine Hopf dictionary, fpqc affineness, finite-subcoalgebra and separable-splitting arguments, effective finite-Galois Hopf descent, classification and torsion-free torus criterion. The source route is complete for audit; remaining reviews/certification are not waived. Its only planned group-scheme item dependency is the selected A871 definition; no AG-GS-2/873 dependency remains. |
| **AG-GRP-3 — Unipotent/solvable groups and Borel fixed points.** Requires AG-GS-1/2, AG-ACT-1, and AG-GRP-2; projectivity/complete schemes as appropriate. | `thm-unipotent-group-triangular-criterion`; `thm-lie-kolchin-for-smooth-connected-solvable-groups`; `thm-borel-fixed-point-for-complete-schemes`; `thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field`. State smoothness, connectedness, algebraic closedness, and completeness. Keep the char-zero Lie/unipotent equivalence separate. | `ex-upper-triangular-unipotent-groups`; `ex-borel-fixed-point-on-projective-space`; `cex-borel-fixed-point-needs-completeness`. | M22 Thm. 14.5, 16.30, Cor. 17.3, Thms. 17.9--17.10, pp. 281--282, 335--336, 352--355. Thm. 14.37 uses Ado and Engel; those proofs are imported, so no local char-zero equivalence is claimed without them. The existing complex AG-LIE Borel-fixed-point page is a specialization, not a general replacement. Second-source gate open. |
| **AG-GRP-4 — Split reductive root systems, Bruhat cells, and parabolics.** Requires AG-GS-1--3, AG-GRP-2/3, and AG-ACT-1 controlled quotient theory. | `def-root-datum-of-split-reductive-group`; `thm-root-subgroups-of-split-reductive-group`; `thm-bruhat-decomposition-for-split-reductive-group`; `thm-parabolics-and-levi-decomposition`. Prove only split reductive groups over a field; state rank-one inputs, positive-root order, and the root datum lattices. | `ex-root-groups-and-bruhat-cells-for-sl2`; `ex-standard-parabolics-in-gl-n`; `cex-lie-root-system-does-not-record-full-root-datum`. | M22 Thm. 21.11/Cor. 21.12, 21.68, 21.80, 21.91, pp. 428--455; rank-one Thm. 20.22, p. 415. The field-level root datum construction Thm. 23.55 is developed in §§23(h)--24. The integral group-scheme theorem 23.74 cites SGA 3/Demazure and is not a proof source here. AG-LIE's complex flag items are not duplicated. Second-source gate open. |
| **AG-GRP-5 — Highest weights and rational representations.** Requires AG-GS-2 and AG-GRP-2/4; do not confuse group representations with Lie algebra representations. | `thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups`; `thm-complete-reducibility-of-rational-modules-in-characteristic-zero`; `rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic`. Prove the arbitrary-characteristic simple-module classification, but isolate the external proof of M22 Lemma 22.24; prove complete reducibility only in the stated characteristic-zero scope. | `ex-fundamental-sl2-modules-in-characteristic-p`; `cex-rational-modules-need-not-be-semisimple-in-characteristic-p`. | M22 Thm. 22.2 and §§22(a)--(b), pp. 464--471; Lemma 22.24 imports Steinberg 1967, Ch. 12, not read. M22 Thm. 22.41 is characteristic zero. This pair is **source-gated** on Steinberg's exact lemma and an independent treatment; do not silently cite the complex AG-LIE highest-weight page as an arbitrary-field theorem. |

### Quotient boundary that remains explicit

Two quotient routes are already sufficiently precise to use as local targets:

- For a smooth affine algebraic group $G$ over a field and any subgroup
  scheme $H$, M22 Thm. 7.18 proves that $G/H$ is a separated algebraic
  scheme. Its proof uses M22 Thm. 4.27 and Prop. 7.17. It does not assert
  projectivity.
- For an affine scheme with a finite locally free equivalence relation,
  Stacks Proposition 39.23.9 [03BM] constructs the fppf quotient as an
  affine scheme.

These do not license an unqualified theorem for every finite-type group and
every subgroup over every base. M22 Appendix B, especially B.37, is a likely
field-level general route, but the proof must be close-read and reconstructed
with its DG imports before claiming it. Stacks [07S6] gives an additional
scheme-quotient route for groupoid schemes with finite-locally-free source and
target and an equivalence relation, provided that for every nonempty closed
subset $Z\subseteq U$ there is a point $u\in Z$ whose equivalence class lies
in an affine open of $U$. The Stacks Project strengthened that condition on 2025-07-22
to ensure enough such points; its earlier comment is resolved by the amended
statement. This theorem still does not establish representability of
arbitrary $G/H$. Quotient presheaf, fppf quotient sheaf, represented scheme,
algebraic space, and projective homogeneous space remain different targets.

## Geometry and scheme-theory extensions

The contracts below start after existing AV prerequisites. They do not
recommission scheme foundations or current projective-space flag duality.

| Pair/order and dependencies | Exact A inventory and proof obligation | B inventory and examples | Sources and evidence gate |
|---|---|---|---|
| **AG-SURF-1 — Intersection products on smooth projective surfaces.** After AV-18--AV-22 and AV-26 blowup interfaces. | `def-divisor-intersection-number-on-smooth-projective-surface`; `thm-surface-intersection-product-bilinear-and-symmetric`; `thm-intersection-with-curve-as-degree-of-restriction`; `lem-blowup-intersection-matrix-at-smooth-point`. Define numerical intersection with Cartier divisors, prove bilinearity/symmetry and restriction degree, and derive the point-blowup exceptional square and orthogonality formulas with regularity hypotheses. Do not repeat AV-8 plane Bézout. | `ex-intersection-pairing-on-p2`; `ex-intersection-pairing-on-blowup-of-p2`; `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses`. | V25 §§20.1.1--20.1.6 and Thm. 20.1.2; Exercise 20.1.E leaves a proof route to complete. One full treatment is checked. **Second independent surface-intersection treatment remains a source gate** before pair commission. |
| **AG-SURF-2 — Surface Riemann--Roch and Hodge index.** Requires AG-SURF-1 and coherent cohomology, with surface smoothness/projectivity. | `thm-riemann-roch-for-smooth-projective-surfaces`; `thm-hodge-index-theorem-for-smooth-projective-surfaces`; `cor-negative-definiteness-of-primitive-numerical-divisors`. Fill V25 Exercise 20.2.B for $\chi(\mathcal O_X(D))=\chi(\mathcal O_X)+\tfrac12D\cdot(D-K_X)$; prove the Hodge index theorem from the exact hypotheses in V25, and state numerical equivalence/base field assumptions. | `ex-hodge-index-on-p1-times-p1`; `ex-hodge-index-on-a-blowup`; `cex-intersection-form-not-negative-definite-on-all-divisors`. | V25 Theorem 20.2.13 and proof §§20.2.14--20.2.19; Exercise 20.2.B. The internal proof route is strong, but a second independent full treatment and the exercise details are open gates. Do not cite the theorem alone as the full proof. |
| **AG-CHOW-1 — Chow groups, intersection products, and Grothendieck--Riemann--Roch.** Requires AV-8/12/18/19/22 and the separately gated surface-intersection route when surface applications are included. | `def-chow-group-of-cycles-mod-rational-equivalence`; `lem-proper-pushforward-of-cycles-well-defined`; `lem-flat-pullback-chow-groups`; `def-chern-character-and-todd-class`; `thm-grothendieck-riemann-roch-for-projective-morphisms`. Define rational equivalence and prove pushforward/pullback compatibility; state exact smoothness, properness, and projectivity hypotheses for GRR. | `ex-chow-ring-of-projective-space`; `cex-arbitrary-pullback-does-not-define-a-chow-operation`. | AV-8/20 do not supply Chow theory or GRR. **Gate:** read Fulton and an independent complete proof, then locally establish cycle operations, Chern character/Todd class, and the exact proper-morphism theorem. No complete GRR route was checked here. |
| **AG-CRES-1 — Point-blowup resolution on arbitrary regular surfaces (strictly broader than AV-26).** Requires AV-26's blowup charts and CA-19's finite normalization only in its finite-type-over-a-field scope; for a general Noetherian regular surface, assume each curve component has finite normalization. This is a later, separately gated extension, not a supplier for AV-26. | `lem-normalization-factors-through-blowup-of-curve-point`; `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center`; `thm-regularization-of-finite-normalization-curve-by-point-blowups`; `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`. Prove proper quasi-finite factorization through the finite normalization, strict growth of the coherent intermediate algebras at every singular center, Noetherian stabilization, regularity from normal one-dimensional local rings, and the local contact-order descent. State separately the regular strict-transform conclusion and the embedded normal-crossing conclusion; do not name the plane-curve theorem again. | `ex-node-resolved-by-one-blowup`; `ex-cusp-resolution-and-delta-drop`; `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups`. | Stacks *Resolution of Surfaces* §54.15 [0BI4, 0BI5, 0BI7, 0BI8, 0BIC] gives one full route for Noetherian regular surfaces. V25 §28.4.4/Ex. 28.4.E is only the projective curve route and cannot close this broader claim. **Gate:** write and audit the full local factorization/stabilization proof for arbitrary Noetherian regular surfaces with finite normalization, then retrieve and read a second independent full treatment of that exact scope. No higher-dimensional resolution is claimed. |
| **AG-DUAL-1 — Duality for coherent sheaves on projective Cohen--Macaulay schemes.** Requires AV-18/19/21/22 and dualizing-complex foundations; it extends the published smooth-projective and curve cases. | `def-dualizing-complex-on-projective-cm-scheme`; `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`; `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case`; `rem-curve-residue-duality-is-the-dimension-one-case`. State pure dimension, projectivity over a field, Cohen--Macaulay/dualizing hypotheses, coherent sheaf, and the Ext/dualizing-complex form. Reuse the existing AG-LIE smooth-projective locally-free theorem as a special case; do not duplicate it. | `ex-serre-duality-on-a-singular-projective-cm-curve`; `ex-serre-duality-on-a-smooth-projective-surface`; `cex-serre-duality-without-properness`. | V25 Ch. 29, especially Cor. 29.3.10 and 29.3.14, pp. 793--812; Stacks *Duality for Schemes* §48.27 [0FVV--0FW0]. Two full source routes are checked. The distinct target is coherent duality on projective CM schemes. |
| **AG-MOD-1 — Hilbert functors and projective Hilbert schemes.** Requires AV-18/19/22, flattening, and graded-module/Hilbert-polynomial foundations. | `def-hilbert-functor-of-flat-projective-subschemes`; `thm-hilbert-scheme-represents-projective-flat-families`; `lem-universal-family-and-hilbert-polynomial-strata`. Define the functor and prove representability, universal family, and base-change compatibility with all finite-presentation/flatness assumptions. | `ex-hilbert-polynomial-of-finite-points-on-p1`; `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`. Do not repeat AV-4 Grassmannians or projective hypersurface parameter spaces. | Nitsure, *Construction of Hilbert and Quot Schemes*, full §§1--5, was retrieved and read; Grothendieck, Bourbaki 221, §§2--3 was independently read, with the boundedness sketch limitation recorded. The 22-item A/4-item B Frontier-38 packet writes the full boundedness, flattening, descent, coherent-source Grassmannian, properness and arbitrary-base construction locally; no exercise or source-only claim is used. The eventual Hilbert-function definition is cross-linked to the proved arbitrary-ample Euler-polynomial item and is equivalent to the all-integer Euler-characteristic characterization. One full independent treatment shortage is recorded but is not a blocker under the current owner source rule when the local proof and prerequisite chain are complete. All original family, test-scheme, universal-family and base-change claims remain unchanged. |
| **AG-DEF-1 — Deformation theory of schemes and obstruction spaces.** Requires AV-16/18/21, Ext, cotangent complexes, and a fixed deformation category. | `def-infinitesimal-deformation-functor-over-square-zero-extension`; `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex`; `thm-obstructions-lie-in-ext-two-cotangent-complex`; `lem-tangent-and-obstruction-spaces-for-hypersurface-deformations`. Fix small extensions, flatness, automorphisms, and the cotangent-complex convention; prove classification and obstruction vanishing criteria. | `ex-first-order-deformations-of-a-hypersurface`; `cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms`. | No proof source for this package was audited in the four reports. **Source gap:** retrieve and read Illusie or a complete modern treatment plus an independent text. Vakil's Hilbert/moduli chapter is not a substitute. |

## Breadth roadmap with explicit proof/source gaps

This roadmap began as future proof/source planning. Several pairs have since
been commissioned under Frontier-38 and their item inventories are no longer
empty; the current run integration record gives their exact status. Each row
continues to record its claim and source context, while live item readiness
and gate state belong to the run plan and evidence.

| Proposed pair | Exact future A proof obligations | B boundary examples | Source gap to close |
|---|---|---|---|
| **AG-ET-1 — Étale covers and the étale fundamental group.** The selected pages supply finite étale descent, classification, and smooth-proper specialization prerequisites locally; external page requirements are limited to the published affine, fibre-product, and smooth/étale interfaces. | `def-etale-fundamental-group-and-fibre-functor`; `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets`; `thm-specialization-of-etale-pi1-under-geometric-hypotheses`. Preserve geometric basepoints, connectedness, locally Noetherian/finite-type hypotheses, and the generalizing-to-special direction. | `ex-etale-covers-of-gm`; `cex-fundamental-group-depends-on-base-field`. | The A911 packet records complete proof routes from SGA 1 Exposés V/X, SGA 2 Exposé X, EGA III, and the relevant Stacks proofs, plus local support proofs and source locators. Independent mathematical review, source-readiness, and engine certification remain open; this plan update is not a gate result. |
| **AG-BIR-1 — Birational morphisms, contractions, and surface singularities.** Depends on AV-7 normalization, AV-15 Zariski Main, AG-SURF-1, and AG-CRES-1. | `def-exceptional-curve-and-contraction`; `thm-negativity-for-exceptional-curves-on-smooth-surfaces`; `thm-factorization-of-birational-morphisms-of-smooth-surfaces`; `thm-resolution-of-normal-surface-singularities`. State characteristic, properness, and surface hypotheses. | `ex-blowup-of-a-smooth-point`; `cex-normalization-is-not-a-blowup`. | V25 and Stacks supply blowups and curve/surface resolution, but no checked full contraction/factorization package. Retrieve a proof source and distinguish surface theorems from higher-dimensional ones. |
| **AG-RES-1 — Higher-dimensional resolution of singularities.** Depends on AG-BIR-1, with characteristic fixed. | `thm-resolution-of-singularities-in-characteristic-zero`; `lem-resolution-is-functorial-under-smooth-maps`; `rem-positive-characteristic-resolution-status`. Prove only the exact characteristic-zero theorem supported by a chosen source; state the positive-characteristic boundary. | `ex-resolution-of-a-surface-singularity`; `cex-no-claim-of-resolution-in-positive-characteristic`. | V25 §28.5 cites Nagata/Hironaka rather than proving general resolution; Stacks §54.15 concerns curves on regular surfaces. **Source gap:** read Hironaka's proof or a full modern proof and an independent treatment. No all-characteristic theorem is proposed. |
| **AG-ARITH-1 — Abelian varieties, base change, and arithmetic models.** Depends on AG-GRP-1, AG-GRP-2, AG-DUAL-1, and AV-22 proper cohomology/base change. | `thm-abelian-variety-dual-and-polarization`; `thm-good-reduction-and-smooth-proper-base-change`; `def-neron-model-and-mapping-property`; `thm-neron-model-existence-in-stated-class`. State base, finite type, smoothness, and residue-characteristic restrictions item by item. | `ex-elliptic-curve-good-and-bad-reduction`; `cex-abelian-variety-does-not-have-good-model-over-every-base`. | Stacks proves field projectivity and proper-flat coherent base change; M22 supplies field-level abelian/tori material. Neither supplies Néron models or étale-cohomological good-reduction theorems. Retrieve SGA 7/Milne arithmetic sources and a second treatment. |
| **AG-SPACE-1 — Algebraic spaces, stacks, and derived AG foundations.** Depends on AV-13/15/17 descent and quotient interfaces, and cotangent-complex foundations. Commission its cotangent-complex portion before AG-DEF-1. | `def-algebraic-space-as-fppf-sheaf`; `thm-algebraic-space-from-etale-equivalence-relation`; `def-algebraic-stack-and-inertia`; `def-derived-scheme-and-cotangent-complex`. Select one precise level before writing proofs; do not conflate sheaf quotients with representable spaces/stacks. | `ex-scheme-as-algebraic-space`; `ex-classifying-stack-of-a-finite-group`; `cex-quotient-stack-need-not-be-a-scheme`. | Stacks groupoid/quotient-sheaf sources cover selected foundations only. No complete algebraic-space/stacks/derived-AG sequence was read. Retrieve Stacks chapters plus an independent text and commission separate pairs. |

Additional source-gated branches are: moduli of curves and stable maps; deformation/obstruction theory beyond the exact proposed AG-DEF-1 contract; Hilbert/Quot schemes; Chow rings and GRR; Picard and Albanese schemes; torsors and descent over general bases; and the integral reductive-group/root-datum theory in SGA 3. Make the two group-theoretic gaps actionable before commissioning:

- **AG-GS-BASE-1 — Group schemes and actions over a general base.** After
  AG-GS-1/2 and AV-13/15/17, define group schemes/actions, stabilizers,
  torsors, quotient sheaves, and the exact effectivity or representability
  theorem selected. B should compute a finite-flat example and compare the
  orbit presheaf with its fppf sheafification. Retrieve SGA 3 and the Stacks
  groupoid/descent chapters, then obtain an independent full treatment.
  Stacks [03BM] covers only affine finite-locally-free equivalence relations;
  do not widen it to arbitrary group actions or bases.
- **AG-RED-SG-1 — Integral split reductive groups from root data.** After
  AG-GRP-4, state and prove only the chosen integral existence/base-change
  theorem for split reductive group schemes, with its root-datum hypotheses.
  M22 Thm. 23.74 explicitly imports Demazure and SGA 3, XXV. Retrieve those
  sources and an independent treatment before commissioning; M22's field-level
  Theorem 23.55 is a different, narrower result.
- **AG-GIT-HM-1 — Hilbert--Mumford criterion.** If the projective GIT branch
  includes a numerical criterion, make it a separate successor to AG-ACT-4:
  define the one-parameter-subgroup weight and prove the semistability
  criterion under a fixed complex reductive group and ample linearization.
  Read MFK or Dolgachev and an independent treatment; Brion explicitly omits
  this criterion.

These candidates have source gates, not proof-ready claims. No “comprehensive AG” claim is made until those gates close.

## Source gaps and anti-overclaim checklist

1. **Arbitrary quotients:** M22 Thm. 7.18 is smooth-affine over a field;
   Stacks [03BM] is affine finite-locally-free equivalence relations. Stacks
   [07S6] adds a scheme-quotient theorem for finite-locally-free groupoids
   under its strengthened condition: for every nonempty closed subset
   $Z\subseteq U$, there is a point $u\in Z$ whose equivalence class lies in
   an affine open of $U$. The Stacks
   Project amended that hypothesis on 2025-07-22 in response to an earlier
   comment; the comment is resolved by the current statement. Neither Stacks
   result proves arbitrary $G/H$ representability. M22 Appendix B needs a
   dedicated proof audit. General quotient sheaf representability is not
   automatic.
2. **Actions/GIT:** Brion's affine quotient proof depends on a theorem whose
   reductivity proof is imported; projective Prop. 1.35 is a sketch and
   Hilbert--Mumford is omitted. Read MFK/Dolgachev and Schwarz--Brion before
   asserting a complete proof chain. Fix Brion's printed invariant-ring typo
   in Def. 1.18(iii), and do not copy the self-reference in Thm. 2.22. Do not
   use the source report's proposed $(1,-1)$-weight action on
   $\mathbf A^2-\{0\}$ as a counterexample to geometric-quotient existence:
   its quotient is the nonseparated doubled-origin line, obtained by gluing
   the two affine quotients along $\mathbf G_m$. Failure of invariant rational
   functions to separate those orbits does not rule out a geometric quotient.
3. **Group schemes:** M22 supplies field-level routes, not arbitrary-base
   reductive group schemes. Its integral root-datum theorem 23.74 imports SGA
   3/Demazure. The four-source dossier has not read those sources.
4. **Highest weights:** M22 Thm. 22.2 is in all characteristics for split
   reductive groups, but its Lemma 22.24 imports Steinberg. Complete
   reducibility is characteristic zero, not a positive-characteristic
   consequence.
5. **Abelian varieties:** M22 Thm. 8.45 states projectivity without proof;
   Stacks §39.9 [0BFA] supplies the full projectivity argument. This does not
   supply arithmetic models, polarizations in every desired generality, or
   Néron theory.
6. **Surfaces:** V25 leaves Exercise 20.1.E and Exercise 20.2.B to complete;
   Hodge's theorem has a distributed proof in §§20.2.14--20.2.19. Read a
   second surface source before the proposed surface items are commissioned.
7. **Hilbert/moduli:** V25 Theorem 25.3.1 cites Mumford/FGIKNV for Hilbert
   scheme representability. Do not turn this citation into a locally proved
   theorem without reading the construction.
8. **Resolution:** V25 §28.4.4 and Stacks §54.15 cover curves on surfaces.
   V25 §28.5 and Stacks do not prove arbitrary higher-dimensional resolution
   here. Characteristic zero and positive characteristic must remain separate.
9. **Duality:** The published AG-LIE pair supplies abstract locally-free
   smooth-projective duality over a field, and with AV-24 it closes arbitrary-
   field curve duality/RR. AV-25's coefficient-trace residue proof is limited
   to perfect fields or separable closed points. The distinct extension is
   coherent duality for projective Cohen--Macaulay schemes via V25 Ch. 29 and
   Stacks [0FVV--0FW0]. Verify live items before assigning IDs.
10. **Intersection and arithmetic:** Surface intersection is not the same as
    Chow theory/GRR; proper-flat cohomology base change is not étale
    cohomological base change or good reduction.

## Coverage statement

This roadmap supplies exact proposed proof obligations and dependency order
for the reviewed, sourceable core: group schemes over fields, Hopf algebras,
infinitesimal/Lie structure, controlled actions and quotients, abelian groups,
arithmetic tori, solvable/Borel theory, split reductive groups, highest
weights, surface intersection/Hodge theory, curve resolution, and higher
dimensional duality. Some of those routes still need an independent source
or an imported proof repaired before they satisfy the repository's full
pair gate. GIT, Hilbert schemes, deformation/moduli, Chow/GRR, higher
dimensional resolution, étale fundamental groups, arithmetic models, and
algebraic spaces/stacks/derived geometry retain explicit source obligations.
The four reports do not prove every advanced branch, so this file makes no
claim of universal coverage.
