# Step 1a — prerequisite drift review

Run: `frontier-43-complex-representation-15`  
Scope reviewed: all 15 A pages in `research/frontier-43-complex-representation-15-scope-ledger.json`.  
Edits authorized here: `research/plan-spec.json` and this report only.

Native validation and original findings are preserved in `research/frontier-43-complex-representation-15-alpha-step1-drift-native.md`. Owner integration on 2026-10-07 resolves the Beltrami placement finding and corrects obsolete representation-theory fallback instructions, using the two run-local resolution files. These decisions authorize supplier authoring; they do not certify unbuilt mathematical proofs. Current gate results are recorded in the run notes.

### amenability-reiter-nets-and-folner-conditions

Batch 2 declares order 1234 and the Haar, modular/L1, GNS, group-C*, Hahn–Banach, and Banach–Alaoglu suppliers. The RG-27 A design also explicitly requires `amenable-groups-and-folner-criteria` for its discrete-group specialization. That published page is order 650 and supplies invariant means, the discrete Følner criterion, permanence results, and the free-group nonamenability example. The proof of its discrete Følner criterion is complete in `items/thm-folner-criterion-for-amenability.md`; Druţu–Kapovich, *Lectures on Geometric Group Theory*, §§16.5–16.6, pp. 402–427, gives the amenability/Følner equivalence and handedness conversion ([source](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf)). The later dependency summary in `research/plan-representation-theory-groups-track.md` §15.6 omits this page, although the RG-27 design names it; I followed the page-specific design. The locally compact Reiter/Følner argument remains self-contained in the proposed inventory and uses nets without countability assumptions; sequences are restricted to the stated countable-exhaustion case. Daws–Runde, §1, pp. 1–3, confirms the P1 net definition, the invariant-mean cluster-point direction, and the compact-uniform qualification ([source](https://eprints.whiterose.ac.uk/id/eprint/77178/7/0705.3432v5_with_coversheet.pdf)).

VERDICT: drift-applied — add amenable-groups-and-folner-criteria (order 650). Owner scaffold repair additionally adds induced-unitary-representations-of-locally-compact-groups (order 1226), with the complete arbitrary-LCH coefficient/Weil proof recorded in the amenability-subgroup resolution and integration receipt. Batch2 has 30/30 current ready scaffold decisions; this is no authored-proof acceptance.

### beltrami-equation-and-measurable-riemann-mapping

Batch 13 declares order 1620 with weak/weak-star compactness, Sobolev, approximation, and extremal-length suppliers. The assigned design also promises `thm-holder-regularity-beltrami-solutions`: for μ in `C^{k,α}_{loc}`, the normalized weak solution is a local `C^{k+1,α}` diffeomorphism. That claim needs a linear Beltrami Schauder argument for k=0, its higher-order bootstrap, and a nonvanishing-Jacobian or inverse-regularity argument. The native review found these local suppliers unplaced and the published Schauder page absent from the original closure. The owner repair adds that page and commissions the local first-order arguments below; its scalar second-order theorem is not a substitute for them.

Owner resolution: retain the complete promised claim and place `lem-local-holder-cauchy-transform-estimate`, `lem-nondegenerate-local-holder-beltrami-coordinates`, and `lem-weak-beltrami-factorization-in-holder-coordinates` immediately before its consumer on this A page. The backward Schauder page edge provides Hölder completeness and the Newtonian potential estimate; it does not supply the first-order theorem by citation. The complete local proof plan freezes the coefficient, makes its fixed-support Hölder norm small by rescaling, constructs a nondegenerate coordinate by contraction, and factors weak solutions holomorphically. For the homeomorphic normalized solution injectivity supplies the nonzero derivative. Exact dependencies, full proof route and actual full-text passages read are in `research/frontier-43-complex-representation-15-beltrami-step1-resolution.md`. All three lemmas and the consumer still require actual proof authoring and review.

VERDICT: drift-applied — add schauder-and-lp-elliptic-estimates (order 1064).

### bergman-and-szego-kernels

Batch 15 declares order 1626 and includes the design’s SC-5, SC-6, harmonic/analytic Hardy, L^2, Riesz, and Parseval prerequisites. The proposed proof route bounds point evaluation, constructs the Riesz representer, proves basis independence and biholomorphic covariance, and restricts Szegő assertions to smooth boundary. Błocki, *The Bergman Kernel and Metric*, §1, Theorem 1.1 and the model-domain formulas, supplies the cited kernel and metric argument ([source](https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf)). The polydisc is expressly excluded from the smooth-boundary Szegő claim. No further page prerequisite is missing from the declared closure; this is a prerequisite review, not an independent proof audit of the new kernel theorems.

VERDICT: no-drift

### direct-integral-decomposition-and-type-i-groups

Batch 1 declares order 1232 with GNS, the Fell/unitary-dual group C*-page, and measurable Hilbert fields/direct-integral operators. The standard-Borel, separability, countable-fundamental-family and second-countability hypotheses remain binding. The original S-5 unproved fallback was withdrawn by group-track §15.5 and is forbidden by current SCHEMA. The published measurable-field/operator/spectral FA page satisfies the generic prerequisite in §15.6. It does not prove the representation-specific central decomposition, measurable center selection, type-I splitting or Glimm criteria. Commission the local supplier interfaces in `research/frontier-43-complex-representation-15-representation-drift-resolution.md` before their consumers. Complete source proofs and all required measurable/Borel interfaces are Step-3 scope/authoring obligations; in particular the full Glimm equivalence source gap remains explicitly held until proved. No row can be treated as supplied merely from this planning decision. The existing page closure is adequate for scaffolding those local obligations without adding a new pair.
VERDICT: drift-applied — add conditional-distributions-and-regular-conditional-probability (order 582), mackeys-imprimitivity-theorem (order 1228), and pontryagin-duality-for-locally-compact-abelian-groups (order 1210). Owner stable scaffold repair retains all promised criteria and witness claims; these exact earlier A prerequisites supply regrouping, transported-base/induction, and existing abelian Fourier uses. See the alternative-H2 and current integration records; readiness is not authored-proof acceptance.

### divisors-riemann-roch-and-duality

Batch 10 declares order 1612 with the Riemann-surface, Hodge, ∂-bar, Mittag–Leffler, and sheaf/cohomology suppliers. The transitive closure supplies the design’s cited partition-of-unity, smooth-bundle, form/Stokes, and finite-dimensional/functional-analytic interfaces. The current design reconciliation moves `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` into the preceding Hodge page; the manifest already requires `hodge-theory-on-compact-riemann-surfaces` at order 1610, so that move introduces no gap or cycle. Deopurkar, *Riemann–Roch*, §2.3, pp. 3–5, gives the residue pairing, its well-definedness, injectivity, and surjectivity argument for Serre duality ([source](https://ananddeopurkar.org/teaching/8320/RR.pdf)). The assigned design’s point-divisor Euler-characteristic route and explicit residue proof do not call on the later period/bilinear-relations page. No additional prerequisite is missing.

VERDICT: no-drift

### extremal-length-and-planar-quasiconformality

Batch 12 declares order 1618 and supplies the conformal-mapping/normal-family, capacity, complex L^p, weak-derivative, Sobolev-approximation, and harmonic-function pages named in the CA-QC-1 design. The design fixes the modulus/extremal-length convention, distinguishes its geometric and ACL/Beltrami definitions, and explicitly cites the weak-derivative and Weyl interfaces for the equivalence and 1-quasiconformal claims. These dependencies are in the current transitive closure; the page’s compactness result is normalized and the orientation-reversing case is excluded. No additional prerequisite is indicated by the assigned claims.

VERDICT: no-drift

### hodge-theory-on-compact-riemann-surfaces

Batch 9 declares order 1610 with differential forms, exterior derivative/Stokes, Riemannian metric, complex L^2, Hilbert/Riesz, reflexivity, Rellich compactness, Fredholm elliptic theory, Sobolev elliptic regularity, the Riemann-surface page, and the ∂-bar page. This is the exact analytic and geometric spine in the CA-RS-H inventory for the maximal ∂-bar operator, elliptic Laplacian, finite-dimensional kernel, Hodge decomposition, and harmonic-star duality. The required line-bundle definition is moved into this page by the later reconciliation before its first analytic use. The dependency order precedes the Riemann–Roch consumer at 1612. No missing prerequisite edge remains.

VERDICT: no-drift

### kazhdan-lusztig-bases-polynomials-and-cells

Batch 7 declares order 1540 with the finite-field principal-series/Hecke supplier, Bruhat decomposition, permutation statistics, and hook-length/RSK page. The detailed KL-1 design consumes the generic type-A Hecke basis from RG-13, the rank-inequality Bruhat order from permutation statistics, and the full RSK correspondence from the hook-length/RSK page. I checked the cross-page item dependencies in `research/kazhdan-lusztig-planning/proposed-items.json`; every external supplier page is in the declared transitive closure. The design proves the type-A cell/tableau identification by its stated star-operation and RSK lemmas, rather than relying on an undeclared later category-ℴ theorem. No additional prerequisite is missing.

VERDICT: no-drift

### kazhdans-property-t-and-spectral-gap

Batch 4 declares order 1238 with GNS, group C*/Fell topology, amenability, and the SL₂(ℝ) principal/complementary-series page. These match the RG-29 proof plan’s coefficient/Fell translations, Hulanicki weak-containment use, and concrete SL₂(ℝ) failure example. The higher-rank SL_n(ℝ) claim is retained and must have a full proof. The zero-consumer statement-only exception is withdrawn: commission the projective-line, relative-(T), quantitative displacement and bounded real elementary-generation lemmas in the representation resolution. Its existing transitive closure reaches the required PVM, compact probability and convex-projection suppliers. No unsupported higher-rank row may be emitted. The amenability page correction recorded above is an earlier supplier edge; it does not change this page’s order or scope. No further prerequisite is missing.

VERDICT: no-drift

### outer-products-skew-specht-modules-and-littlewood-richardson

Batch 8 declares order 1562 with the Frobenius-characteristic dictionary, ordinary branching, Littlewood–Richardson multiplicities, and tensor products. The item inventory in `research/symmetric-group-planning/proposed-items.json` also calls on induction transitivity/Mackey, Frobenius reciprocity, Maschke semisimplicity, and skew-Schur adjunction; each supplier is reachable in this page’s current closure. The design reuses the stable LR tableau/coefficient convention and does not require a separate skew-Specht or outer-induction pair. No additional page prerequisite is missing.

VERDICT: no-drift

### periods-jacobians-and-abel-jacobi-theory

Batch 11 declares order 1614 with cellular homology, cup/cap products, Poincaré duality/orientations, de Rham theory, Hilbert/Riesz, Riemann–Roch, and compact-surface classification. These supply the design’s symplectic homology basis, period pairing, discreteness of the period lattice, and divisor/Jacobian constructions. The design proves the lattice property through the bilinear relations and makes path ambiguity exactly the period lattice; it does not rely on an unstated period theorem. No edge or ordering correction is needed.

VERDICT: no-drift

### quantized-enveloping-algebras-and-quantum-serre-relations

Batch 6 declares order 1524 with Kac–Moody, tensor-product, permutation-statistics, and Harish–Chandra suppliers. The QG-1 item inventory’s external dependencies are otherwise in that closure, but `def-symmetrizable-cartan-datum-for-a-quantum-group` explicitly depends on the published item `def-free-abelian-group`, owned by `free-groups-and-presentations`, order 71. That page was not in the declared closure. Its published page includes the free-abelian-group definition, so I added the existing backward edge; this does not mint a page or alter scope. The remaining PBW, q-integer, tensor-algebra, and Kac–Moody inputs are reached through the current requirements. The relevant design and item-level evidence are `research/plan-quantum-groups-track.md` and `research/quantum-groups-planning/proposed-items.json`.

VERDICT: drift-applied — add free-groups-and-presentations (order 71).

### quasisymmetry-welding-and-conformal-removability

Batch 14 declares order 1622 with the Riemann mapping theorem, Hausdorff measure/dimension, Beltrami mapping, and logarithmic-potential/capacity pages. This reaches the CA-QC-3 design’s CA-QC-2, CA-16, and CA-PT-1 inputs; extremal length and quasiconformal machinery are included transitively through the Beltrami page. Welding existence is stated up to the design’s normalization qualification, and uniqueness is only asserted under conformal removability. The Hausdorff claim is limited to zero H^1 sets and quasicircles, with no dimension-threshold converse. No prerequisite is missing.

VERDICT: no-drift

### sl2-r-discrete-series-and-unitary-dual

Batch 5 declares order 1240 with group C*/Fell, direct-integral/type-I, principal/complementary-series, Harish–Chandra, and Verma suppliers. Its exact design inputs—K-finite smooth vectors, highest/lowest-weight submodules, infinitesimal characters, and tempered/Plancherel comparison—are reached in the transitive closure. The scaffold’s placeholder `RL-n` is not a current page ID; the current Lie-track terminal page is the Weyl–Kac character page, but the named sl₂ weight/raising-lowering content is already present through `highest-weight-theory-for-complex-semisimple-lie-algebras` (order 1128), while Casimir/central-character content is supplied by `harish-chandra-isomorphism-casimir-and-central-characters` (order 1138). Etingof, *Representations of Lie Groups*, §9, pp. 48–52, gives the SL₂(ℝ) (K)-type formulas and discrete/complementary/principal classification ([source](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf)). The placeholder’s literal identity remains unclear, but no additional mathematical supplier is missing from the actual closure.

VERDICT: no-drift

### sl2-r-principal-and-complementary-series

Batch 3 declares order 1236 with normalized locally compact induction, Mackey, group C*/Fell, Harish–Chandra, and Verma suppliers. The design’s (K)-type/raising-lowering and infinitesimal-character inputs are already reachable through highest-weight/Verma and Harish–Chandra pages; the group model, normalized induction, and Fell topology are also present. As for the discrete-series page, `RL-n` is an undefined design placeholder, not an absent mathematical supplier: the current Lie-track terminal Weyl–Kac page is not needed for these rank-one formulas. The source check in Etingof, §9, pp. 48–52, gives the SL₂(ℝ) principal/complementary unitarity ranges, while the design’s full intertwiner proof route remains assigned to authoring. No additional edge or ordering correction is needed.

VERDICT: no-drift
