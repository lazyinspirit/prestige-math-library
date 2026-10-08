# Step 1a — prerequisite drift review

Run: `frontier-43-complex-representation-15`  
Scope reviewed: all 15 A pages in `research/frontier-43-complex-representation-15-scope-ledger.json`.  
Edits authorized here: `research/plan-spec.json` and this report only.

Validation: `node tools/validate-plan.mjs research/plan-spec.json` passed after each plan edit and on the final plan. `node tools/drift-review-check.mjs --run frontier-43-complex-representation-15 --before-apply` returned the single owner-held blocker recorded under `beltrami-equation-and-measurable-riemann-mapping`; the checker states that no automatic re-review will occur. The run remains held for owner resolution of that prerequisite and placement.

### amenability-reiter-nets-and-folner-conditions

Batch 2 declares order 1234 and the Haar, modular/L1, GNS, group-C*, Hahn–Banach, and Banach–Alaoglu suppliers. The RG-27 A design also explicitly requires `amenable-groups-and-folner-criteria` for its discrete-group specialization. That published page is order 650 and supplies invariant means, the discrete Følner criterion, permanence results, and the free-group nonamenability example. The proof of its discrete Følner criterion is complete in `items/thm-folner-criterion-for-amenability.md`; Druţu–Kapovich, *Lectures on Geometric Group Theory*, §§16.5–16.6, pp. 402–427, gives the amenability/Følner equivalence and handedness conversion ([source](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf)). The later dependency summary in `research/plan-representation-theory-groups-track.md` §15.6 omits this page, although the RG-27 design names it; I followed the page-specific design. The locally compact Reiter/Følner argument remains self-contained in the proposed inventory and uses nets without countability assumptions; sequences are restricted to the stated countable-exhaustion case. Daws–Runde, §1, pp. 1–3, confirms the P1 net definition, the invariant-mean cluster-point direction, and the compact-uniform qualification ([source](https://eprints.whiterose.ac.uk/id/eprint/77178/7/0705.3432v5_with_coversheet.pdf)).

VERDICT: drift-applied — add amenable-groups-and-folner-criteria (order 650).

### beltrami-equation-and-measurable-riemann-mapping

Batch 13 declares order 1620 with weak/weak-star compactness, Sobolev, approximation, and extremal-length suppliers. The assigned design also promises `thm-holder-regularity-beltrami-solutions`: for μ in `C^{k,α}_{loc}`, the normalized weak solution is a local `C^{k+1,α}` diffeomorphism. That claim needs a linear Beltrami Schauder argument for k=0, its higher-order bootstrap, and a nonvanishing-Jacobian or inverse-regularity argument. These are not in the declared closure. The existing `schauder-and-lp-elliptic-estimates` page (order 1064) is outside the closure and, as its published page states, covers scalar second-order nondivergence Schauder and Sobolev estimates; it does not itself state the first-order Beltrami regularity result.

The authoritative source check found Astala–Clop–Faraco–Jääskeläinen–Koski, “Nonlinear Beltrami operators, Schauder estimates and bounds for the Jacobian,” §1, Theorems 1.1–1.2 and §2.3 ([source](https://ems.press/content/serial-article-files/16835)). It gives a complete Morrey–Campanato proof for the more general nonlinear equation, with exponent limited by ellipticity, and explicitly distinguishes the stronger linear Beltrami regularity claim as a Schauder/inverse-regularity result. The same source proves Jacobian positivity from regularity of both the solution and inverse. The CA-QC-2 design does not identify or place that linear supplier. Exact unresolved prerequisite: a proved local W^{1,2} to C^{1,α} theorem for linear Beltrami equations with C^α coefficients, the C^{k,α} induction, and the Jacobian-positivity step; place it immediately before `thm-holder-regularity-beltrami-solutions` in this order-1620 page, or supply an authorized earlier A-page source. This is substantial, so I made no partial edge or scope change. The measurable Riemann mapping existence route itself has no additional drift: the design explicitly uses normalized quasiconformal compactness and requires no Beurling-transform inverse.

VERDICT: drift-blocked — the linear Beltrami Schauder/Jacobian prerequisite and its placement require owner resolution before this theorem can be treated as supplied.

### bergman-and-szego-kernels

Batch 15 declares order 1626 and includes the design’s SC-5, SC-6, harmonic/analytic Hardy, L^2, Riesz, and Parseval prerequisites. The proposed proof route bounds point evaluation, constructs the Riesz representer, proves basis independence and biholomorphic covariance, and restricts Szegő assertions to smooth boundary. Błocki, *The Bergman Kernel and Metric*, §1, Theorem 1.1 and the model-domain formulas, supplies the cited kernel and metric argument ([source](https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf)). The polydisc is expressly excluded from the smooth-boundary Szegő claim. No further page prerequisite is missing from the declared closure; this is a prerequisite review, not an independent proof audit of the new kernel theorems.

VERDICT: no-drift

### direct-integral-decomposition-and-type-i-groups

Batch 1 declares order 1232 with GNS, the Fell/unitary-dual group C*-page, and measurable Hilbert fields/direct-integral operators. The design’s standard-Borel, separability, countable-fundamental-family, and second-countability hypotheses are stated. Its S-5 note explicitly records that no adequate measure-class disintegration supplier is commissioned and requires the decomposition and uniqueness rows to remain `proved_here: false`, non-load-bearing, and unavailable to later RG proofs. The current closure therefore supports the load-bearing measurable-field construction while the unsupplied central/type-I disintegration theorems remain explicitly quarantined. No edge can make those leaves load-bearing; no plan correction is needed.

VERDICT: no-drift

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

Batch 4 declares order 1238 with GNS, group C*/Fell topology, amenability, and the SL₂(ℝ) principal/complementary-series page. These match the RG-29 proof plan’s coefficient/Fell translations, Hulanicki weak-containment use, and concrete SL₂(ℝ) failure example. The higher-rank SL_n(ℝ) claim is explicitly marked statement-only and `not-supplied`, not a load-bearing proof dependency. The amenability page correction recorded above is an earlier supplier edge; it does not change this page’s order or scope. No further prerequisite is missing.

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
