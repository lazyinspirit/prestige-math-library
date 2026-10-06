# Prerequisite drift review — Frontier 40

Reviewed all 27 A pages in the scope ledger against batches 1–27, their prose designs, and the transitive prerequisite closure in `research/plan-spec.json`. No plan correction is indicated: every prerequisite established by the page designs is already present in the declared closure and precedes its consumer. The design notes retain several source-readiness gates; these are recorded below as authoring uncertainty, not as missing page prerequisites.

### plane-curves-local-intersection-multiplicity-and-bezout

The AV-8 contract requires local intersection lengths, tangent-cone multiplicity, and the projective graded/global Bézout calculation. Batch 1 declares normal varieties, homogeneous resultants/projective intersection length, and schemes locally of finite type; their closure supplies the AV-3/5/6 and commutative-algebra interfaces named in the design. The plan’s boundary keeps genus and blowup results out of this claim. No prerequisite is missing; the later author must still follow the design’s full proof and hypothesis checks.

VERDICT: no-drift

### principal-series-representations-of-gl-n-over-a-finite-field

RG-13’s construction uses the ordinary symmetric-group/tableau suppliers, finite-field Bruhat flags, induction and Frobenius reciprocity, semisimplicity, and the polynomial/deformation inputs. Batch 2 declares those pages, including RG-8–RG-12 through the listed direct edges and the algebraic inputs needed for idempotent lifting and specialization. The design limits its general-character source claim to the stated evidence and does not rely on Banach-algebra semisimplicity. No prerequisite is missing; source scope remains as recorded in RG-13.

VERDICT: no-drift

### mackeys-imprimitivity-theorem

RG-24 fixes second-countability, a closed subgroup, and separable Hilbert spaces; its converse uses the spectral theorem, measurable Hilbert fields, and the induced-representation model. Batch 3 declares unitary representations, induction, spectral measures, and measurable Hilbert fields/direct integrals. These cover the reconstruction joints; the plan’s open checks on measurable selection and representative-independence remain authoring proof obligations, not absent page prerequisites.

VERDICT: no-drift

### group-c-star-algebras-and-the-fell-unitary-dual

RG-25’s integrated forms, universal/reduced completions, weak containment, and Fell topology are supported by the declared (L^1(G)), unitary-representation/GNS, Peter–Weyl, Banach-algebra, and Gelfand prerequisites. Its prose design also names spectral measures; that page is already in the transitive closure via `unitary-representations-positive-type-and-gns` (order 510.069), so no direct edge is needed. The author source for the integrated correspondence and weak-containment/kernel argument is [Bekka–de la Harpe, Chapters 1.C and 8.B](https://arxiv.org/abs/1912.07262); its stated locally compact and second-countability qualifications match the design. No prerequisite is missing.

VERDICT: no-drift

### the-burau-representations

BG-9 constructs the cyclic cover and its homology action, computes the matrices, and limits its proved faithfulness claim to at most three strands while treating the (B_4) preprint as unreviewed. Batch 5 declares the Artin action, covering spaces, singular homology, PID modules, and Garside structure, exactly the external interfaces used by that design. The internal lifted-cell calculations are assigned to BG-9 itself. No prerequisite is missing; the design’s qualification on external faithfulness results remains essential.

VERDICT: no-drift

### hecke-markov-traces-and-polynomial-link-invariants

BG-12 uses the oriented Markov moves, Burau representation, finite-(GL_n) Hecke input, and PID module calculations for the HOMFLYPT/Jones and Burau–Alexander claims. Batch 6 declares all four suppliers, with the selected Burau and principal-series pages earlier in the order. The design explicitly supplies the trace-ring localization and the positive/negative stabilization checks. No prerequisite is missing; those normalization and unit conditions remain required in authoring.

VERDICT: no-drift

### yang-baxter-operators-and-quantum-braid-representations

BG-13’s operator actions use braided monoidal coherence, rigidity, tensor/fusion structure, module maps, and the link/tangle conventions. Batch 7 declares these foundations; the Artin presentation used by the local Yang–Baxter theorem is already in the oriented-braid closure. The plan distinguishes framed ribbon evaluation from an unframed Markov invariant and supplies the scalar-twist condition for stabilization. No prerequisite is missing; the stated framing and twist caveats must be preserved.

VERDICT: no-drift

### categorical-braid-actions-and-decategorification

BG-15’s weak derived action, faithfulness detector, and decategorification use the quiver algebra, geometric braids/mapping classes, Burau calculation, Grothendieck groups, perfect complexes, and homological cancellation. Batch 8 declares each supplier; the Burau page at order 745 precedes this page at order 757. The design proves faithfulness using its two-iterate arc detector and does not infer it from Burau faithfulness. No prerequisite is missing.

VERDICT: no-drift

### rouquier-complexes-and-categorical-braid-relations

BG-17 builds from type-A Soergel bimodules, graded quiver/derived tensor functors, the categorical braid action, derived categories, and bounded bimodule complexes. Batch 9 declares those inputs, including the selected categorical-action supplier at order 757 before this page at order 761. The normalized comparison and coherence arguments are assigned inside BG-17; downstream Hochschild theory is not used as an input. No prerequisite is missing.

VERDICT: no-drift

### matrix-factorizations-and-khovanov-rozansky-link-homology

BG-18’s matrix-factorization complexes, braid moves, Markov comparison, and HOMFLYPT categorification use link/closure conventions, graded bimodule tensoring, and the Hecke Markov trace. Batch 10 declares all three, with the selected Hecke page at order 751 before this page at order 763. The prose keeps the matrix-factorization differential distinct from an ordinary differential and records the source’s negative-crossing correction. No prerequisite is missing; these distinctions are necessary claim qualifications.

VERDICT: no-drift

### hochschild-homology-and-triply-graded-link-homology

BG-19 uses the KR comparison, Rouquier complexes, diagonal Koszul computation, cyclic tensor invariance, and bounded derived tensor. Batch 11 declares all of these; the selected KR and Rouquier suppliers are earlier at orders 763 and 761. The design expressly defines termwise Hochschild homology and distinguishes it from total Hochschild hyperhomology, so the apparent neighboring constructions are not an omitted prerequisite. No prerequisite is missing.

VERDICT: no-drift

### plancherel-measure-and-asymptotic-young-diagrams

The SYMR-16 inventory uses the ordinary character/tableau dictionary, branching, hook-length/RSK, finite probability, convergence modes, weak convergence/tightness, and central-limit inputs. Batch 12 declares all these supplier pages. I checked the complete relevant arguments in [Ivanov–Olshanski, §§4–6](https://arxiv.org/abs/math/0304010): the limit-shape proof passes through shifted-character expectations and moment convergence, while the character CLT uses the filtered multiplication formula, Hermite recurrence, and a determinate multivariate moment argument. The design’s local RSK bound replaces the source’s Hammersley citation for profile tightness. No prerequisite is missing; the replacement bound and its RG-11 dependencies must be proved as specified.

VERDICT: no-drift

### affine-group-schemes-hopf-algebras-and-rational-representations

AG-GS-2 requires the group-scheme definitions, affine-scheme/Hopf dictionary, and classical coordinate-ring interfaces. Batch 13 declares the finite-type group-scheme page, affine schemes, and the classical affine-variety interface; the requisite finite-subcomodule argument is in this page’s own design. The expansion track still marks the independent Hopf/comodule source gate open. That is a known authoring-source obligation, not an absent prerequisite edge.

VERDICT: no-drift

### lie-algebras-and-infinitesimal-group-schemes

AG-GS-3 obtains the tangent-at-identity construction and Lie bracket from group-scheme and Hopf-algebra data, with Kähler differentials supporting the infinitesimal calculation. Batch 14 declares the group-scheme, affine-group, and Kähler/conormal suppliers; affine-group schemes at order 873 precedes this page at 875. The design restricts Cartier smoothness to characteristic zero and leaves the bracket source gate open. No prerequisite is missing; those source and characteristic limits remain.

VERDICT: no-drift

### algebraic-group-actions-orbits-stabilizers-and-controlled-quotients

AG-ACT-1’s orbit-map, stabilizer, homogeneous-space, and controlled quotient claims use group schemes/Hopf actions, dimension and constructible images, fibre products, and flat/smooth/étale morphisms. Batch 15 declares each supplier, including affine group schemes at order 873 before this page at 877. The design explicitly limits represented quotient results to the stated smooth-affine or finite-locally-free hypotheses and does not claim arbitrary quotient representability. No prerequisite is missing; the quotient boundary remains load-bearing.

VERDICT: no-drift

### reductive-affine-invariant-theory-and-geometric-quotients

AG-ACT-3 uses algebraic actions, complex affine equivariant embeddings, coherent sheaves, Proj, and projective/affine cohomology. Batch 16 declares all those suppliers, with the actions page at order 877 before this page at 881. The complex reductivity/Reynolds-operator theorem is an item in this page’s own design, not an omitted external page. The expansion track retains proof-source gates for finite generation and quotient claims; these remain authoring obligations, not prerequisite drift.

VERDICT: no-drift

### projective-git-from-linearized-line-bundles

AG-ACT-4 builds on reductive affine invariant theory, coherent sheaves, projective schemes/ample twisting, and cohomology. Batch 17 declares these suppliers, including the invariant-theory page at order 881 before this page at 883. The graded invariant-section construction belongs to the specified proof route; the design excludes an unproved Hilbert–Mumford criterion and flags the general linearization claim’s hypotheses. No prerequisite is missing; the documented source gate remains open for authoring.

VERDICT: no-drift

### unipotent-solvable-groups-and-borel-fixed-points

AG-GRP-3’s Lie–Kolchin and Borel fixed-point results use group schemes, rational actions, multiplicative-type groups, and proper/projective completeness. Batch 18 declares the group-scheme and action pages, tori, and finite/proper/projective morphisms; its selected group-action supplier at order 877 precedes this page at 889. The design states smoothness, connectedness, algebraic-closedness, and completeness conditions and separates characteristic-zero assertions. No prerequisite is missing; the cited source gate is an authoring proof obligation.

VERDICT: no-drift

### split-reductive-root-systems-bruhat-cells-and-parabolics

AG-GRP-4 uses affine group-scheme structure, Lie algebras, character lattices/tori, unipotent/Borel structure, and controlled actions/quotients. Batch 19 declares all six direct suppliers; the in-run predecessors occur in order at 873, 875, 877, and 889 before this page at 891. The contract is restricted to split reductive groups over a field and explicitly keeps integral root-datum theory out of scope. No prerequisite is missing; the separate integral-theory source gap remains outside this page’s claim.

VERDICT: no-drift

### highest-weights-and-rational-representations-of-split-reductive-groups

AG-GRP-5 uses rational representations of affine group schemes, torus character weights, and the split root-system/Borel structure. Batch 20 declares all three, including the selected root-system supplier at order 891 before this page at 893. The design distinguishes arbitrary-characteristic simple-module classification from characteristic-zero complete reducibility. Its Steinberg-lemma source gate remains an authoring obligation, not a missing page dependency.

VERDICT: no-drift

### surface-riemann-roch-and-the-hodge-index-theorem

AG-SURF-2 uses the surface intersection pairing, Cartier divisors/Picard groups, coherent cohomology, and smooth-projective duality. Batch 21 declares each supplier; the intersection-product page at order 895 precedes this page at 897. The prose states the smoothness, projectivity, and numerical-equivalence hypotheses and identifies the remaining second-source gate. No prerequisite is missing; the full surface proof/source gate remains.

VERDICT: no-drift

### chow-groups-intersection-products-and-grothendieck-riemann-roch

AG-CHOW-1 uses plane-curve intersection, scheme morphisms, coherent sheaves, Proj, cohomology, and the separately gated surface intersection route for surface applications. Batch 22 declares all six, including plane curves at order 366.063 and surface intersections at 895 before this page at 899. Its GRR claim has precise projective/proper hypotheses; it does not assume arbitrary pullbacks define Chow operations. No prerequisite is missing; the independent full-source gate remains.

VERDICT: no-drift

### algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations

AG-SPACE-1 uses fibre products, finite/proper morphisms, Kähler differentials, smooth/étale descent, controlled quotients, and derived categories. Batch 23 declares those interfaces; its selected quotient supplier at order 877 is earlier than this page at 907. The cotangent-complex foundation is part of this page’s own contract and is explicitly ordered before the deformation consumer. No prerequisite is missing; the design’s source-readiness caveat remains.

VERDICT: no-drift

### deformation-theory-of-schemes-and-obstruction-spaces

AG-DEF-1 uses the cotangent-complex/deformation-category foundation, Kähler differentials, coherent sheaves, sheaf cohomology, and Ext. Batch 24 declares the algebraic-spaces foundation, Kähler, coherent-sheaf, Čech/cohomology, and Ext suppliers; the spaces page at order 907 precedes this page at 909. The design fixes square-zero extensions, flatness, and automorphism conventions. Its source gap is already recorded in the design; no prerequisite edge is missing.

VERDICT: no-drift

### birational-morphisms-contractions-and-surface-singularities

AG-BIR-1 uses normal varieties/Zariski’s Main, finite and proper morphisms, surface intersection, and point blowups on regular surfaces. Batch 25 declares exactly those suppliers, all earlier than order 913. The design distinguishes surface factorization/contraction claims from higher-dimensional resolution, so no forward or circular dependency is required. No prerequisite is missing; its separate proof-source gap remains.

VERDICT: no-drift

### higher-dimensional-resolution-of-singularities

AG-RES-1 is explicitly a characteristic-zero resolution claim with AG-BIR-1 as its prerequisite. Batch 26 declares `birational-morphisms-contractions-and-surface-singularities` (order 913), before this page at 915. The design keeps positive-characteristic resolution out of the claim. No prerequisite is missing; the cited full-proof source gap remains an authoring gate.

VERDICT: no-drift

### abelian-varieties-base-change-and-arithmetic-models

AG-ARITH-1 uses Barsotti–Chevalley/abelian varieties, multiplicative-type groups and arithmetic tori, coherent duality, and proper cohomology. Batch 27 declares all four suppliers, at orders 885, 887, 903, and 366.083, before this page at 917. Good-reduction and Néron-model claims carry item-specific base, smoothness, and residue-characteristic restrictions; the design records their open source gate. No prerequisite is missing.

VERDICT: no-drift

## Validation and handoff

`node tools/drift-review-check.mjs --run frontier-40-geometry-braids-rep-27 --before-apply` passed: 27 pages reviewed and decisions valid; engine materialization/buildability remain pending. `node tools/validate-plan.mjs research/plan-spec.json` exited successfully and confirmed acyclic page order with no unresolved IDs or item cycles; its output includes existing redundant-prerequisite notices. The plan hash still matches the run’s selection hash (`57111e0154788219a0bccba8960ec5715bdc5049b4888ce154e7f626972637cf`); I made no plan edit. No prerequisite-drift blocker remains. Source gates noted above remain authoring obligations. Next action: the engine performs mechanical materialization.
