# Step 1a — prerequisite drift review

Run: `frontier-42-coxeter-32` · role: alpha · covers: drift

Reviewed all 32 A pages in the scope ledger against their assigned batch manifest, native A-page scaffold, relevant track design, canonical `plan-spec.json`, and the rendered drift-evidence bundle. The manifest and plan entry agree on each page's order and direct `Requires` list. Every declared direct prerequisite occurs in that page's computed closure (`missingRequired: []` for all 32 records). I found no additional prerequisite used by the actual proof contracts outside those closures, so no plan edge or ordering amendment is applied.

The nearby-page names in the evidence bundle were treated as source leads, not findings. For the technical routes, I checked the expanded local arguments and source locators in the current run artifacts; I also read Reading–Speyer, *Sortable elements in infinite Coxeter groups*, §§3–7 ([arXiv:0803.2722v3](https://arxiv.org/html/0803.2722v3), especially §§3–7), Brady–Watt, *Lattices in finite real reflection groups*, §§2–7 ([arXiv:math/0501502](https://arxiv.org/pdf/math/0501502), especially §7), and Bridson–Haefliger II.4.16–4.17 ([author-hosted text](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf), printed pp. 203–204). The current geometric source report expands the required Bowditch §§3.3–3.4 route and records its scanned author preprint locator, pp. 20–32 ([Bowditch preprint](https://bhbowditch.com/papers/bhb-catone.pdf)); the current Hecke source report records the relevant Lusztig §1 proof chain, including Theorem 1.9, pp. 4–5 ([arXiv:math/0108172](https://arxiv.org/pdf/math/0108172)). These source routes inform prerequisite checks; they do not certify uncreated item proofs.

### tensor-coherence-and-algebraic-descent

VERDICT: no-drift

**Plan/order:** `order 1688`; `Requires`: `tensor-products-of-modules`, `modules-and-module-homomorphisms`, `ideals-and-quotient-rings`, `dual-spaces-bilinear-forms-and-inertia`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `chain-conditions-and-semisimple-modules`, `relations-functions-and-quotients`.

**Evidence:** The native scaffold and HH-1 track design make finite tensor duality, quotient descent, and the infinite-basis Choice caveat explicit. The full dual isomorphism is restricted to finite dimensions; arbitrary complements are isolated behind Choice. Its direct prerequisites and the transitive basis/Choice suppliers are in the closure. Source contracts: [HH-1 design](research/plan-hopf-hecke-algebras-track.md#hh-1--tensor-coherence-and-algebraic-descent), [HH source audit](research/hopf-hecke-scaffold/independent-audit.md).

**Remaining:** No prerequisite gap. HH-1's local proofs remain draft obligations.

### coxeter-presentations-exchange-and-reduced-word-theorems

VERDICT: no-drift

**Plan/order:** `order 1708`; `Requires`: `tensor-coherence-and-algebraic-descent`, `symmetric-groups-and-the-sign-homomorphism`, `splitting-fields`, `finite-fields-and-cyclotomic-extensions`, `group-homomorphisms-and-the-isomorphism-theorems`.

**Evidence:** HH-11 constructs the full-rank representation only to check relators, then uses the separate signed action for exchange and Matsumoto; it does not assume canonical-root positivity or faithfulness. The free-group/presentation and quotient suppliers are in the declared transitive closure. Source locators: [HH-11 design](research/plan-hopf-hecke-algebras-track.md#hh-11--coxeter-presentations-exchange-and-reduced-word-theorems), [Lusztig §1](https://arxiv.org/pdf/math/0108172), Theorem 1.9, pp. 4–5; see also [Hecke source audit](research/hopf-hecke-scaffold/hecke-source-report.md#lusztig-rigorous-first-principles-coxeter-and-basis-proof).

**Remaining:** No prerequisite gap. Exchange, Matsumoto, and parabolic proofs remain draft obligations.

### generic-coxeter-hecke-algebras-and-the-standard-basis

VERDICT: no-drift

**Plan/order:** `order 1710`; `Requires`: `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `polynomial-rings-and-roots`.

**Evidence:** The scaffold first uses HH-11 for reduced-word independence and HH-1 for the universal coefficient ring/base-change argument; the length-operator representation then proves basis independence. Those exact suppliers and the polynomial/Laurent construction are in the closure. Source locators: [HH-12 design](research/plan-hopf-hecke-algebras-track.md#hh-12--generic-coxeter-hecke-algebras-and-the-standard-basis), [Lusztig §3.3](https://arxiv.org/pdf/math/0108172), pp. 8–9; [Hecke source audit](research/hopf-hecke-scaffold/hecke-source-report.md#lusztig-rigorous-first-principles-coxeter-and-basis-proof).

**Remaining:** No prerequisite gap. The standard-basis and bar proofs remain draft obligations.

### real-forms-and-reflection-geometry

VERDICT: no-drift

**Plan/order:** `order 1724`; `Requires`: `coxeter-presentations-exchange-and-reduced-word-theorems`, `dual-spaces-bilinear-forms-and-inertia`, `sine-cosine-and-the-definition-of-pi`, `group-homomorphisms-and-the-isomorphism-theorems`.

**Evidence:** The page distinguishes positive-definite, indefinite, and degenerate forms and postpones the canonical representation until rank-two relators are checked. Its dual chamber definitions and trigonometric dihedral calculation are supported by the listed prerequisites; no positivity or faithfulness result is consumed before its later supplier. Source locator: [CG-01 design](research/plan-coxeter-groups-track.md#cg-01--real-forms-and-reflection-geometry), [classical source report](research/coxeter-scaffold/classical-source-report.md#foundational-proof-contracts-and-silent-prerequisites).

**Remaining:** No prerequisite gap. The rank-two and dual-chamber proofs remain draft obligations.

### finite-lattice-projections-and-coxeter-chain-labels

VERDICT: no-drift

**Plan/order:** `order 1726`; `Requires`: `order-zorn-and-the-axiom-of-choice`, `simplicial-subdivision-and-simplicial-approximation`, `relations-functions-and-quotients`, `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion`.

**Evidence:** The scaffold explicitly requires finite lattices/graded posets, rooted-chain labels, and the published Möbius recurrence. It keeps the root chain fixed and states the no-tie convention; the order, chain, order-complex, and incidence suppliers are all in closure. Source locator: [CG-02 design](research/plan-coxeter-groups-track.md#cg-02--finite-lattice-projections-and-coxeter-chain-labels), [combinatorial source report](research/coxeter-scaffold/combinatorial-source-report.md#dependency-order-and-foundational-repairs).

**Remaining:** No prerequisite gap. The local quotient and shelling lemmas remain draft obligations.

### coxeter-polyhedral-gluings-and-intrinsic-metrics

VERDICT: no-drift

**Plan/order:** `order 1728`; `Requires`: `metric-spaces`, `compactness-in-metric-spaces`, `simplicial-complexes-and-simplicial-homology`, `simplicial-subdivision-and-simplicial-approximation`, `ascoli-arzela`, `cayley-graphs-word-metrics-and-quasi-isometry`, `relations-functions-and-quotients`.

**Evidence:** The scaffold's nondegeneracy, properness, and geodesic claims use finite shapes/local finiteness, metric length, compact cell unions, and proper-target Ascoli. It carries the Ascoli Choice hypothesis and supplies arbitrary-metric length arguments locally; the named published inputs and AC are in closure. Source locator: [CG-03 design](research/plan-coxeter-groups-track.md#cg-03--coxeter-polyhedral-gluings-and-intrinsic-metrics), [geometric source report, G1](research/coxeter-scaffold/geometric-source-report.md#davis-complex-mandatory-supplier-tower).

**Remaining:** No prerequisite gap. The abstract gluing metric and properness proofs remain draft obligations.

### canonical-roots-signs-and-faithful-reflections

VERDICT: no-drift

**Plan/order:** `order 1730`; `Requires`: `real-forms-and-reflection-geometry`, `coxeter-presentations-exchange-and-reduced-word-theorems`.

**Evidence:** The scaffold separates the HH-11 signed-action proof from geometric faithfulness, then proves the rank-two prefix/chamber induction before root positivity and strong exchange. Both named supplier pages precede it and are present in closure. Source locator: [CG-04 design](research/plan-coxeter-groups-track.md#cg-04--canonical-roots-signs-and-faithful-reflections), [classical source report, roots/chambers](research/coxeter-scaffold/classical-source-report.md#canonical-representation-and-tits-cone).

**Remaining:** No prerequisite gap. The simultaneous half-space induction remains a draft obligation.

### spherical-simplex-metrics-angular-links-and-cones

VERDICT: no-drift

**Plan/order:** `order 1732`; `Requires`: `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `real-forms-and-reflection-geometry`, `direct-matrix-factorisations-lu-cholesky-and-qr`, `simplicial-complexes-and-simplicial-homology`.

**Evidence:** Gram realization, Schur-complement link metrics, finite-shape compactness, and the truncated angular metric each have an explicit supplier route. The cone apex/empty/disconnected conventions prevent using extended infinity as an ordinary metric value; all needed geometry and linear algebra lie in the declared closure. Source locator: [CG-05 design](research/plan-coxeter-groups-track.md#cg-05--spherical-simplex-metrics-angular-links-and-cones), [geometric source report, G3–G4](research/coxeter-scaffold/geometric-source-report.md#davis-complex-mandatory-supplier-tower).

**Remaining:** No prerequisite gap. The cone/join metric proofs remain draft obligations.

### tits-cones-chambers-and-parabolic-stabilizers

VERDICT: no-drift

**Plan/order:** `order 1734`; `Requires`: `canonical-roots-signs-and-faithful-reflections`.

**Evidence:** Finite negativity, chamber collisions, stabilizers, and the interior/local-finiteness criterion all use the preceding root-sign and exchange suppliers. No separate Tits-cone or parabolic theorem is consumed before being proved on this page; the exact earlier root page is in closure. Source locator: [CG-06 design](research/plan-coxeter-groups-track.md#cg-06--tits-cones-chambers-and-parabolic-stabilizers), [geometric source report, canonical representation and Tits cone](research/coxeter-scaffold/geometric-source-report.md#canonical-representation-and-tits-cone).

**Remaining:** No prerequisite gap. The boundary and local-finiteness arguments remain draft obligations.

### parabolic-subgroups-and-double-coset-geometry

VERDICT: no-drift

**Plan/order:** `order 1736`; `Requires`: `coxeter-presentations-exchange-and-reduced-word-theorems`, `canonical-roots-signs-and-faithful-reflections`.

**Evidence:** Length-additive coset factorization comes from HH-11; intersections and double-coset uniqueness additionally use the canonical root-sign/strong-exchange results. Both are explicit direct predecessors, and no general subgroup is treated as parabolic. Source locator: [CG-07 design](research/plan-coxeter-groups-track.md#cg-07--parabolic-subgroups-and-double-coset-geometry), [classical source report, parabolics/cosets](research/coxeter-scaffold/classical-source-report.md#standard-parabolics-cosets-and-longest-elements).

**Remaining:** No prerequisite gap. The minimality and intersection arguments remain draft obligations.

### cat-comparison-link-criteria-and-local-globalization

VERDICT: no-drift

**Plan/order:** `order 1738`; `Requires`: `spherical-simplex-metrics-angular-links-and-cones`, `homotopy-and-homotopy-equivalence`, `covering-spaces-and-lifting`.

**Evidence:** CAT models and polyhedral link charts come from the spherical simplex page; the path-space covering/globalization proof uses the two named topological suppliers and explicitly proves endpoint stability and completeness of the path-space length metric locally. Compact CAT(1) systole hypotheses are available transitively through the polyhedral metric/compactness suppliers. Source locator: [CG-08 design](research/plan-coxeter-groups-track.md#cg-08--cat-comparison-link-criteria-and-local-globalization), [geometric source report, C0.1–C0.5 and systole](research/coxeter-scaffold/geometric-source-report.md#cat0-globalization-use-endpoint-stability-not-unproved-birkhoff-convergence), [Bridson–Haefliger II.4.9–4.17](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf).

**Remaining:** No prerequisite gap. The local-to-global proof remains a draft obligation.

### bruhat-subword-order-and-lifting

VERDICT: no-drift

**Plan/order:** `order 1740`; `Requires`: `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`.

**Evidence:** The chain-to-subword and arbitrary-expression directions require strong exchange/Matsumoto-root inversion formulas and the parabolic projection. Those exact suppliers are direct predecessors and in closure; finite intervals are proved locally without assuming a longest element for infinite parabolics. Source locator: [CG-09 design](research/plan-coxeter-groups-track.md#cg-09--bruhat-subword-order-and-lifting), [combinatorial source report, C1](research/coxeter-scaffold/combinatorial-source-report.md#c1-bruhat-order-the-subword-theorem-and-lifting).

**Remaining:** No prerequisite gap. The subword and lifting proofs remain draft obligations.

### finite-coxeter-diagrams-and-complete-classification

VERDICT: no-drift

**Plan/order:** `order 1742`; `Requires`: `tits-cones-chambers-and-parabolic-stabilizers`.

**Evidence:** The finite criterion consumes root/chamber faithfulness and Tits-cone chamber isolation. Its compactness argument for the positive-definite orthogonal image also has `compactness-in-metric-spaces` in the computed transitive closure; no extra edge is needed. Source locator: [CG-10 design](research/plan-coxeter-groups-track.md#cg-10--finite-coxeter-diagrams-and-complete-classification), [classical source report, finite criterion](research/coxeter-scaffold/classical-source-report.md#finiteness-criterion-and-full-diagram-classification).

**Remaining:** No prerequisite gap. The determinant exclusions and survivor checks remain draft obligations.

### coxeter-artin-and-hecke-interfaces

VERDICT: no-drift

**Plan/order:** `order 1744`; `Requires`: `coxeter-presentations-exchange-and-reduced-word-theorems`, `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`, `group-homomorphisms-and-the-isomorphism-theorems`, `generic-coxeter-hecke-algebras-and-the-standard-basis`.

**Evidence:** Positive Artin lifts use HH-11 Matsumoto; the Hecke seam uses HH-12's coefficient-compatible basis/bar; the Lie and Soergel applications are explicitly interfaces, not theorems consumed without their established homes. All exact proof homes are in closure. Source locator: [CG-11 design](research/plan-coxeter-groups-track.md#cg-11--coxeter-artin-and-hecke-interfaces), [HH-11/12 designs](research/plan-hopf-hecke-algebras-track.md#hh-11--coxeter-presentations-exchange-and-reduced-word-theorems).

**Remaining:** No prerequisite gap. The set-section and convention-compatibility proofs remain draft obligations.

### short-loop-polygons-and-quantitative-energy-decrease

VERDICT: no-drift

**Plan/order:** `order 1746`; `Requires`: `cat-comparison-link-criteria-and-local-globalization`.

**Evidence:** The midpoint energy route uses unique short geodesics, local CAT(1) comparison, compact polygon parameter spaces, and the short-circle criterion; these are in the CAT/link and metric compactness closure. The page states its uniform-plus-length loop topology and fixed-n hypotheses. Source locator: [CG-12 design](research/plan-coxeter-groups-track.md#cg-12--short-loop-polygons-and-quantitative-energy-decrease), [geometric source report, Bowditch §§3.3–3.4 expansion](research/coxeter-scaffold/geometric-source-report.md#quantitative-polygonal-shortening-and-the-short-loop-class), [Bowditch author preprint](https://bhbowditch.com/papers/bhb-catone.pdf), printed §§3.3–3.4, pp. 20–32.

**Remaining:** No prerequisite gap. The intrinsic quadrilateral separation and energy decrement remain draft obligations; the source report explicitly retains the intrinsic-distance caveat.

### bruhat-interval-labels-shellings-and-mobius-functions

VERDICT: no-drift

**Plan/order:** `order 1748`; `Requires`: `bruhat-subword-order-and-lifting`, `finite-lattice-projections-and-coxeter-chain-labels`.

**Evidence:** Deletion labels require strong exchange/subword order, while rooted-chain shelling and Möbius cancellation require the finite lattice/order-complex machinery. Both direct suppliers are earlier and present in closure; the scaffold avoids importing sphere/Cohen–Macaulay claims. Source locator: [CG-13 design](research/plan-coxeter-groups-track.md#cg-13--bruhat-interval-labels-shellings-and-mobius-functions), [combinatorial source report, C6](research/coxeter-scaffold/combinatorial-source-report.md#c6-bruhat-intervals-and-combinatorial-shellability).

**Remaining:** No prerequisite gap. The increasing-chain and shelling arguments remain draft obligations.

### finite-reflection-arrangements-and-spherical-coxeter-complexes

VERDICT: no-drift

**Plan/order:** `order 1750`; `Requires`: `finite-coxeter-diagrams-and-complete-classification`, `finite-lattice-projections-and-coxeter-chain-labels`.

**Evidence:** Positive-definite finite classification and the finite coset-face/order-complex realization are both needed. The required classification and lattice/subdivision suppliers are direct predecessors; compactness of the finite realization is included transitively. Source locator: [CG-14 design](research/plan-coxeter-groups-track.md#cg-14--finite-reflection-arrangements-and-spherical-coxeter-complexes), [classical source report, finite criterion](research/coxeter-scaffold/classical-source-report.md#finiteness-criterion-and-full-diagram-classification).

**Remaining:** No prerequisite gap. The chamber-face triangulation and longest-element proofs remain draft obligations.

### finite-reflection-length-and-orthogonal-moved-spaces

VERDICT: no-drift

**Plan/order:** `order 1752`; `Requires`: `finite-reflection-arrangements-and-spherical-coxeter-complexes`.

**Evidence:** Carter length and absolute order use the finite reflection group, parabolic stabilizers, and chamber geometry supplied by the arrangement page. The independent-normal shortening argument proves its own reflection factorization rather than borrowing an unstated theorem. Source locator: [CG-21 design](research/plan-coxeter-groups-track.md#cg-21--finite-reflection-length-and-orthogonal-moved-spaces), [Brady–Watt §2](https://arxiv.org/pdf/math/0501502), pp. 2–3 for the moved-space/absolute-order context; local suppliers are explicit in the scaffold.

**Remaining:** No prerequisite gap. The Wall-form and shortening proofs remain draft obligations.

### bipartite-coxeter-elements-and-ordered-root-complexes

VERDICT: no-drift

**Plan/order:** `order 1754`; `Requires`: `finite-reflection-length-and-orthogonal-moved-spaces`, `finite-lattice-projections-and-coxeter-chain-labels`.

**Evidence:** The Coxeter-plane enumeration and the Brady–Watt root complex need finite moved-space/absolute-order facts and the finite lattice/face framework. Both direct suppliers are in closure. Source locator: [CG-25 design](research/plan-coxeter-groups-track.md#cg-25--bipartite-coxeter-elements-and-ordered-root-complexes), [Brady–Watt §§2–7](https://arxiv.org/pdf/math/0501502), especially §7, pp. 19–25; the source route uses the moved-space and common-upper-bound hypotheses stated in the local contracts.

**Remaining:** No prerequisite gap. The root ordering, facet induction, and convexity proofs remain draft obligations.

### finite-coxeter-invariants-and-coinvariant-gradings

VERDICT: no-drift

**Plan/order:** `order 1756`; `Requires`: `finite-coxeter-diagrams-and-complete-classification`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `relations-functions-and-quotients`, `bipartite-coxeter-elements-and-ordered-root-complexes`.

**Evidence:** The source route explicitly adapts the published finite complex-reflection invariant theorem to complexified real Coxeter groups, retains its characteristic-zero and AC hypotheses, and uses the earlier root enumeration for regular eigenvectors. Each supplier is direct or transitive in the closure. Source locator: [CG-15 design](research/plan-coxeter-groups-track.md#cg-15--finite-coxeter-invariants-and-coinvariant-gradings), [algebraic source report, invariant interface](research/coxeter-scaffold/algebraic-source-report.md#finite-invariant-and-coinvariant-interface).

**Remaining:** No prerequisite gap. The differential, Molien, and eigenvalue arguments remain draft obligations.

### crystallographic-root-lattices-and-weyl-group-interfaces

VERDICT: no-drift

**Plan/order:** `order 1758`; `Requires`: `finite-coxeter-diagrams-and-complete-classification`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`.

**Evidence:** Integral coroot pairings are proved only after positive-definite finite Coxeter classification and the reduced crystallographic root-system conventions. The scaffold explicitly excludes H and general dihedral labels from the crystallographic claim; both prerequisites are in closure. Source locator: [CG-16 design](research/plan-coxeter-groups-track.md#cg-16--crystallographic-root-lattices-and-weyl-group-interfaces), [algebraic source report, real roots/crystallographic seam](research/coxeter-scaffold/algebraic-source-report.md#real-roots-and-the-crystallographic-seam).

**Remaining:** No prerequisite gap. The integral pairing and lattice-stability proofs remain draft obligations.

### large-spherical-metric-flags-and-the-moussong-girth-theorem

VERDICT: no-drift

**Plan/order:** `order 1760`; `Requires`: `cat-comparison-link-criteria-and-local-globalization`, `finite-coxeter-diagrams-and-complete-classification`, `short-loop-polygons-and-quantitative-energy-decrease`.

**Evidence:** The metric-flag induction consumes CAT(1) link/cone comparisons, the positive-definite simplex test, and Bowditch short-loop class control. The three explicit supplier pages are direct predecessors; their compactness/finite-shape inputs are transitive. The selected Bowditch route avoids the unresolved Moussong suspension implication noted in the source report. Source locator: [CG-17 design](research/plan-coxeter-groups-track.md#cg-17--large-spherical-metric-flags-and-the-moussong-girth-theorem), [geometric source report, metric-flag proof](research/coxeter-scaffold/geometric-source-report.md#metric-flag-proof-by-bounded-radial-insertion), [Bridson–Haefliger II.4.16–4.17](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf), printed pp. 203–204.

**Remaining:** No prerequisite gap. The finite radial-insertion and triangle-Gram proof contracts remain draft obligations.

### weak-order-inversions-and-lattice-operations

VERDICT: no-drift

**Plan/order:** `order 1762`; `Requires`: `parabolic-subgroups-and-double-coset-geometry`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion`.

**Evidence:** The inversion criterion and exchange argument use parabolic/root/chamber suppliers; finite meets and bounded joins are proved with finite lower intervals and the existing finite-poset framework. Each is declared directly or transitively. Source locator: [CG-18 design](research/plan-coxeter-groups-track.md#cg-18--weak-order-inversions-and-lattice-operations), [combinatorial source report, C3](research/coxeter-scaffold/combinatorial-source-report.md#c3-weak-order-reflection-inversion-sets-and-lattice-structure).

**Remaining:** No prerequisite gap. The weak-meet and bounded-join proofs remain draft obligations.

### affine-reflections-coroot-translations-and-alcoves

VERDICT: no-drift

**Plan/order:** `order 1764`; `Requires`: `crystallographic-root-lattices-and-weyl-group-interfaces`, `real-forms-and-reflection-geometry`, `homotopy-and-homotopy-equivalence`, `simplicial-subdivision-and-simplicial-approximation`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`.

**Evidence:** The affine reflections need the finite crystallographic root/coroot lattices and Euclidean form; the gallery-disk presentation uses homotopy and finite relative triangulation. The page proves generic wall avoidance and distinguishes the affine Coxeter group from the extended group; all listed suppliers are in closure. Source locator: [CG-19 design](research/plan-coxeter-groups-track.md#cg-19--affine-reflections-coroot-translations-and-alcoves), [geometric source report, crystallographic affine alcoves](research/coxeter-scaffold/geometric-source-report.md#crystallographic-affine-alcoves).

**Remaining:** No prerequisite gap. The gallery homotopy and simple-transitivity proofs remain draft obligations.

### coxeter-descents-poincare-polynomials-and-growth

VERDICT: no-drift

**Plan/order:** `order 1766`; `Requires`: `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `parabolic-subgroups-and-double-coset-geometry`, `finite-coxeter-invariants-and-coinvariant-gradings`.

**Evidence:** Steinberg inclusion–exclusion uses parabolic length factorization and spherical subsets; the exponent product route uses the independently proved invariant degrees, longest element, and finite chamber geometry. Every one is directly or transitively included. Source locator: [CG-20 design](research/plan-coxeter-groups-track.md#cg-20--coxeter-descents-poincare-polynomials-and-growth), [classical source report, finite criterion](research/coxeter-scaffold/classical-source-report.md#finiteness-criterion-and-full-diagram-classification).

**Remaining:** No prerequisite gap. The rational-growth and finite certificate proofs remain draft obligations.

### spherical-parabolic-cosets-and-the-davis-complex

VERDICT: no-drift

**Plan/order:** `order 1768`; `Requires`: `parabolic-subgroups-and-double-coset-geometry`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `cw-complexes-and-cellular-homology`, `simplicial-subdivision-and-simplicial-approximation`, `simplicial-complexes-and-simplicial-homology`, `hurewicz-whitehead-freudenthal-and-cw-approximation`.

**Evidence:** Cell incidence/face metrics use the finite spherical parabolics and coherent polyhedral metric; simple connectivity uses the Coxeter presentation plus CW cellular approximation. The task-local page adds those explicit topological and metric suppliers, all in closure. Source locator: [CG-22 design](research/plan-coxeter-groups-track.md#cg-22--spherical-parabolic-cosets-and-the-davis-complex), [geometric source report, G1–G2](research/coxeter-scaffold/geometric-source-report.md#davis-complex-mandatory-supplier-tower).

**Remaining:** No prerequisite gap. The coset-poset/cell-complex comparison and simple-connectivity proofs remain draft obligations.

### affine-coxeter-diagrams-and-semidefinite-classification

VERDICT: no-drift

**Plan/order:** `order 1770`; `Requires`: `finite-coxeter-diagrams-and-complete-classification`, `affine-reflections-coroot-translations-and-alcoves`.

**Evidence:** The semidefinite classification uses the earlier positive-definite finite exclusions and the Euclidean affine-alcove realization. The page handles the rank-two infinity edge separately and proves the positive radical without Perron–Frobenius; both suppliers are direct predecessors. Source locator: [CG-23 design](research/plan-coxeter-groups-track.md#cg-23--affine-coxeter-diagrams-and-semidefinite-classification), [geometric source report, affine criterion](research/coxeter-scaffold/geometric-source-report.md#finite-affine-and-hyperbolic-distinctions).

**Remaining:** No prerequisite gap. The determinant enumeration and slice construction remain draft obligations.

### heaps-commutation-classes-and-fully-commutative-elements

VERDICT: no-drift

**Plan/order:** `order 1772`; `Requires`: `weak-order-inversions-and-lattice-operations`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `finite-lattice-projections-and-coxeter-chain-labels`, `chains-antichains-sperner-and-dilworth`.

**Evidence:** The heap criterion explicitly uses Matsumoto/Tits deletion to prove a heap word reduced; order ideals then model weak intervals using the finite-poset order-ideal lattice. All four inputs are earlier and in closure. Source locator: [CG-24 design](research/plan-coxeter-groups-track.md#cg-24--heaps-commutation-classes-and-fully-commutative-elements), [combinatorial source report, C5](research/coxeter-scaffold/combinatorial-source-report.md#c5-heaps-and-fully-commutative-elements).

**Remaining:** No prerequisite gap. The reducedness and ideal-order-isomorphism proofs remain draft obligations.

### coxeter-euler-forms-and-sortable-chamber-cones

VERDICT: no-drift

**Plan/order:** `order 1774`; `Requires`: `weak-order-inversions-and-lattice-operations`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`.

**Evidence:** The page is finite-scope at the projection/lattice stages; it develops the Euler form, rank-two inversion recognition, skips, and cover-join arguments locally. I checked Reading–Speyer §§3–7: those arguments use root signs/inversions, parabolic rank-two restrictions, weak order, and bounded joins, all covered by these direct prerequisites and their closures. Source locator: [CG-26 design](research/plan-coxeter-groups-track.md#cg-26--coxeter-euler-forms-and-sortable-chamber-cones), [Reading–Speyer §§3–7](https://arxiv.org/html/0803.2722v3), [combinatorial source report, targeted Cambrian audit](research/coxeter-scaffold/combinatorial-source-report.md#cg16–cg18-supplemental-full-section-audit).

**Remaining:** No prerequisite gap. The local finite rank-two and cover-join proofs remain draft obligations.

### davis-cat-zero-geometry-and-finite-subgroup-fixed-points

VERDICT: no-drift

**Plan/order:** `order 1776`; `Requires`: `spherical-parabolic-cosets-and-the-davis-complex`, `large-spherical-metric-flags-and-the-moussong-girth-theorem`, `relations-functions-and-quotients`.

**Evidence:** The assembled CAT(0) proof requires the Davis complex, metric-flag vertex links, complete geodesic metric, and simple connectivity; the first two listed pages supply that tower, while finite-orbit circumcenters and fixed sets are proved locally under completeness. The displayed closure contains the entire tower. Source locator: [CG-27 design](research/plan-coxeter-groups-track.md#cg-27--davis-cat0-geometry-and-finite-subgroup-fixed-points), [geometric source report, G5](research/coxeter-scaffold/geometric-source-report.md#davis-complex-mandatory-supplier-tower).

**Remaining:** No prerequisite gap. The global CAT(0) and circumcenter proofs remain draft obligations.

### noncrossing-partition-lattices-and-kreweras-complements

VERDICT: no-drift

**Plan/order:** `order 1778`; `Requires`: `bipartite-coxeter-elements-and-ordered-root-complexes`.

**Evidence:** The lattice proof uses the ordered root complex, convexity/purity, and finite absolute-order moved-space properties, all proved in the required bipartite supplier's closure. The source proof's finite-real-reflection-group scope is preserved; the type-A partition model is separately proved. Source locator: [CG-28 design](research/plan-coxeter-groups-track.md#cg-28--noncrossing-partition-lattices-and-kreweras-complements), [Brady–Watt §§2–7](https://arxiv.org/pdf/math/0501502), especially §§3, 6–7, pp. 3–25.

**Remaining:** No prerequisite gap. Convex intersection/purity and the type-A crossing equivalence remain draft obligations.

### sortable-projections-and-finite-cambrian-lattices

VERDICT: no-drift

**Plan/order:** `order 1780`; `Requires`: `coxeter-euler-forms-and-sortable-chamber-cones`, `finite-lattice-projections-and-coxeter-chain-labels`.

**Evidence:** Meet/join preservation uses the earlier sortable cone/projection results plus the finite lattice congruence endpoint criterion to establish interval fibers; it does not infer a lattice congruence from greatest-below alone. Reading–Speyer §7's finite specialization uses those precise suppliers, all in closure. Source locator: [CG-29 design](research/plan-coxeter-groups-track.md#cg-29--sortable-projections-and-finite-cambrian-lattices), [Reading–Speyer §§6–7](https://arxiv.org/html/0803.2722v3), [finite lattice design](research/plan-coxeter-groups-track.md#cg-02--finite-lattice-projections-and-coxeter-chain-labels).

**Remaining:** No prerequisite gap. The homomorphism and interval-fiber proofs remain draft obligations.

**Stage checks:** `node tools/drift-review-check.mjs --run frontier-42-coxeter-32 --before-apply` exited 0: 32 pages reviewed, decisions valid; engine materialization/buildability remains pending. `node tools/validate-plan.mjs research/plan-spec.json` exited 0 and reported the declared order consistent/acyclic, with no reported item-level cycles, forward references, or unresolved IDs among pages carrying item lists. The full-plan output also included redundant-direct-prerequisite diagnostics, including assigned pages; I left these edges intact because they match the native page contracts and owner-approved design. The 177 page records without item lists remain page-level-only, as the validator notes. No plan edits were needed. Blockers: none for prerequisite drift. Next action: engine-owned materialization.
