# Step 3b helper b-1 checkpoint and handoff

Run `phase-2-next-21`; pair `local-coefficients-twisted-homology-and-duality` / `local-coefficients-twisted-homology-and-duality-examples`.

## Verified starting state

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dedicated helper task, both current rows in `research/phase-2-next-21-batch-5.pages.json`, the Batch-5 notes and coverage row, the empty cross-batch input, AT-23 in `research/plan-algebraic-topology-track.md`, and the exact statements of all 31 external direct prerequisites.
- The shared proof-contract file presently has no contracts for this pair. Proposed item contracts will therefore be recorded here for lead integration; the shared JSON remains read-only.
- All two page files, all 25 assigned item files, and this report were absent at start. No pre-existing owned draft had to be preserved.
- Authoritative passages read completely: Hatcher, *Algebraic Topology*, §3.H, printed pp.327–336, from `/tmp/phase2next21-hatcher.txt` (source PDF SHA prefix recorded by Step 1 as `bebb3032bf9021b9`); Davis–Kirk, *Lecture Notes in Algebraic Topology*, Chapter 5 §§1–4, printed pp.95–109, from `/tmp/phase2-next21-b6-sources/davis-kirk.txt` (source PDF SHA prefix `0441b5c1059cac27`). Hatcher's §3.H erratum recorded in Batch-5 coverage is controlling for Theorem 3H.6. Exact public URLs and printed locators will be retained in item source metadata.
- Exact high-risk prerequisite proofs also read: `thm-cellular-homology-computes-singular-homology`, `thm-poincare-duality-for-oriented-topological-manifolds`, `thm-poincare-lefschetz-duality`, `lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls`, `lem-manifold-exhaustion-passes-local-duality-to-the-colimit`, `thm-five-lemma-for-a-morphism-of-long-exact-sequences`, and `thm-topological-collaring-for-manifold-boundaries`.

## Controlling conventions and scaffold audit

- Paths multiply in first-path-first order: `[alpha][beta]=[alpha*beta]`. In the standard fundamental groupoid, `[beta] circ [alpha]=[alpha*beta]`.
- Consequently the identity on loop classes is an anti-isomorphism from the published fundamental group to the categorical vertex group. The canonical group isomorphism is loop reversal. The scaffold's claim that the operations agree literally is false and will be corrected without changing the promised vertex-group recovery result.
- For a covariant local system `L`, the left action on the base fiber is `g m=L(bar g)m`. This inverse transport is forced by the preceding order convention and makes evaluation land in left `R[pi]`-modules.
- The published deck action is left. Universal-cover chains use the right action `c*g=g^{-1}c`. The balanced tensor relation then gives the intrinsic coefficient transport convention, and cochains satisfy `phi(c*g)=g^{-1}phi(c)`.
- The manifest's early cellular-chain formula `H_n(X^n,X^{n-1};L)` would use local homology before it is defined. The definition item will instead construct the cellular tensor/equivariant-Hom complexes; the later cellular comparison theorem will identify their groups with the skeletal relative local groups.
- The published `def-orientation-local-system-and-orientation-cover` is explicitly boundaryless. Applying it directly on a manifold with boundary would give zero local top homology at boundary points. A new A-page definition is required to extend the interior orientation system over a collar (well defined up to the transport isomorphism supplied by a homotopy of collar push-ins). The Mobius-band and Poincare–Lefschetz items must depend on it.

## Sources and dependency boundary

- Primary local-coefficient controls: Davis–Kirk Chapter 5 §§1–4, especially pp.96–100 for group rings, handedness and cellular complexes; pp.101–103 for the orientation character and twisted duality; pp.103–107 for intrinsic chains and variance; pp.107–109 for exactness, excision and Mayer–Vietoris. Hatcher §3.H pp.327–336 independently controls module/bundle models, ordinary-coefficient recovery, functoriality, compact supports, cap products and corrected twisted duality.
- No current-batch external supplier is required. Later Batch 6 consumes the owned cellular-cochain theorem, but that incoming edge does not license edits outside this pair.
- AC is planned only for the arbitrary point-indexed path family in the local-system/module equivalence and for the countable coordinate-neighborhood plus local comparison choices inherited by twisted duality. All definitions, algebraic chain arguments, examples and the fiber-transport lemma remain choice-free.

## Open obligations and next item

1. Author and validate the groupoid/module/chain-model prerequisites in order, beginning with `def-fundamental-groupoid-of-a-space`.
2. Supply complete exact-sequence, cellular comparison, excision and compact-support arguments.
3. Add the boundary orientation-system definition on the A page, then close twisted Poincare and Poincare–Lefschetz duality without treating a proof sketch as a proof.
4. Compute all six B-page examples and boundary cases.
5. Run explicit-path precheck and rendercheck, then record item-by-item contracts and any remaining uncertainty here.

## Item checkpoints 1–5

### `def-fundamental-groupoid-of-a-space`

- Claim/conventions: standard path groupoid, with `[beta] circ [alpha]=[alpha*beta]`; arbitrary and empty spaces included.
- Sources/dependencies: Davis–Kirk Chapter 5 §§3–4, pp.103–109; `def-category`, `def-homotopy-relative-and-path-homotopy`, `thm-fundamental-group-laws`.
- Proof content/checks: definition spells out source/target, representatives, associativity/unit/inverse supplier, and the vertex-product warning. Choice-free. Mechanical checks pending the complete batch.
- Contract boundary cases: empty object set, one-point space, constant paths, reversed paths; no connectedness/basepoint assumed.

### `prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group`

- Corrected claim: reversal, not identity, is the canonical group isomorphism. The identity on loop classes is explicitly proved anti-multiplicative.
- Proof: reversal is involutive; `overline(alpha*beta)=bar beta*bar alpha`; categorical composition reverses the displayed order a second time. No open mathematical obligation.
- Contract cases: constant loop, inverse, arbitrary/non-path-connected ambient space; empty space is inapplicable because a vertex is given.

### `def-local-system-of-r-modules-and-its-pullback`

- Claim/conventions: covariant functor `Pi_1(X)->R-Mod`, natural transformations, strict pullback by composition, componentwise operation, and base-fiber left action `g m=T_(bar g)m`.
- Proof content: every transport is invertible because every groupoid arrow is; pullback respects concatenation by postcomposition. Empty space and zero ring included; no AC.

### `thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring`

- Claim: for a nonempty connected CW complex and chosen basepoint, evaluation with inverse transport is an equivalence with left group-ring modules.
- Proof: AC selects paths `p_y`; the quasi-inverse uses `ell_gamma=p_y*gamma*bar p_z` and acts by `ell_gamma^{-1}`; cancellation proves functoriality; `T_(p_y)` supplies the natural counit; a second path family is naturally isomorphic.
- AC use: exactly the arbitrary point-indexed family of nonempty path sets. One-point case is canonical. Empty case is excluded by the chosen basepoint.

### `def-right-group-ring-action-on-the-chains-of-a-universal-cover`

- Claim: `c*g=g^{-1}c` for the published left deck action; both singular and lifted cellular boundaries are right-linear; lift/orientation choices only select bases.
- Checks: the action law and boundary linearity are calculated explicitly. Zero ring and empty degrees included; no AC.

**Next item:** `def-singular-and-cellular-chain-complexes-with-local-coefficients`.

## Item checkpoints 6–9

### def-singular-and-cellular-chain-complexes-with-local-coefficients

- Claim: intrinsic arbitrary-space chain/cochain formulas, relative quotient/kernel, and connected-CW universal-cover tensor/equivariant-Hom plus cellular models.
- Conventions checked: coefficients sit over the first vertex; the zeroth chain face transports forward and the zeroth cochain face transports backward; the left-chain conversion and equivariant-Hom condition are typed explicitly.
- Scaffold correction: cellular chains are defined on the lifted cellular complex here; the later theorem, not this earlier definition, identifies them with skeletal relative local homology.
- Boundaries: arbitrary/disconnected/empty spaces, relative pairs, constant and zero systems, negative degrees. No AC.

### lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases

- Proof: paired codimension-two faces cancel; the only nonliteral coefficient comparison is the two-edge path from vertex zero to vertex two versus the direct edge, equal by path homotopy inside the simplex. Tensor and Hom square-zero identities follow from the cover. Explicit diagonal formulas handle cell lifts and orientations; a basepoint path handles conjugation.
- Choice accounting: comparison is conditional on two supplied choices; it does not choose lifts of an arbitrary cell family, so no AC is spent.
- Contract cases: degree zero, absent cells, degenerate simplices, zero ring/system, disconnected components.

### def-homology-and-cohomology-with-local-coefficients

- Claim: homology/cohomology of the relative intrinsic complexes; constant systems literally recover ordinary coefficients. Chains/homology use sums over components; cochains/cohomology use products.
- No open obligation beyond the later cellular comparison.

### prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism

- Variance: L to f-pullback K for homology, f-pullback K to L for cohomology; both covariant in coefficient maps at fixed space.
- Proof: first-vertex chain/cochain formulas commute with the exceptional face by naturality. A transported prism proves homotopy invariance under the displayed pullback comparisons.
- Contract cases: identities, composites, maps of pairs, constant homotopy, empty/zero/degree-zero and degenerate-simplex cases. No AC.

**Next item:** `thm-cellular-chains-compute-homology-with-local-coefficients`.

## Item checkpoints 10–13 — comparison and exactness

### `thm-cellular-chains-compute-homology-with-local-coefficients`

- Claim/conventions: the lifted cellular tensor complex computes relative singular local homology; consecutive skeletal groups give the intrinsic model, and supplied lifts give group-ring incidence matrices.
- Sources/dependencies: Davis–Kirk Chapter 5 §2.1, pp.98–100; local homology definition and basis lemma; published cellular comparison and singular excision.
- Proof steps: 1.1 constructs local subdivision and its prism; 2.1 computes one skeletal layer; 3.1 performs the exact-sequence chase; 4.1 passes through arbitrary skeleta; 5.1 proves naturality; 6.1 identifies the incidence matrix.
- Boundaries/choice/check: empty pairs, absent cells, degree zero, zero systems, disconnected complexes, and infinite CW complexes are explicit. Lift families are input data, not selected. No AC. Explicit precheck and rendercheck pass.

### `thm-pair-long-exact-sequences-with-local-coefficients`

- Claim/conventions: natural long exact homology and cohomology sequences for one ambient system, with homology and cohomology coefficient morphisms directed as in item 9.
- Sources/dependencies: Davis–Kirk Chapter 5 §4, pp.107–109; owned local complexes/functoriality and the two published ordinary pair-sequence constructions.
- Proof steps: constructs the degreewise short exact chain and cochain sequences; gives both connector representatives; checks exactness and naturality; closes empty/zero/degree-end cases.
- Boundaries/choice/check: arbitrary subspace pairs, including empty and equal pairs, are covered. No AC. Explicit precheck and rendercheck pass.

### `thm-cellular-cochains-compute-cohomology-with-local-coefficients`

- Claim/conventions: cellular equivariant Hom computes relative local cohomology, using `g·c=c·g^{-1}` and `phi(c·g)=g^{-1}phi(c)`.
- Sources/dependencies: Davis–Kirk Chapter 5 §§2.1,4, pp.98–100,107–109; Hatcher §3.H telescope instruction, pp.333–334. Added direct dependencies on owned functoriality/pair exactness and the published skeletal-telescope equivalence.
- Proof steps: 1.1 computes skeletal relative cohomology; 1.2 types equivariant Hom; 2.1 chases the skeletal triple; 3.1 splits the telescope, identifies the product map `Delta=1-shift`, and kills the inverse-limit remainder because the degree `n` and `n-1` systems are eventually constant; 4.1 proves naturality.
- Boundaries/choice/check: infinite CW complexes, products over infinitely many cells/components, negative degrees, and no-cell cases are explicit. No AC. Explicit precheck and rendercheck pass after canonical phase ordering.

### `thm-excision-and-mayer-vietoris-with-local-coefficients`

- Claim/conventions: excision and homology/cohomology Mayer–Vietoris hold only when every restriction comes from one ambient local system; the cohomology difference is `u|−v|`.
- Sources/dependencies: Hatcher §3.H pp.332–334 and Davis–Kirk §4 pp.107–109; owned local complexes/pair sequence and the published ordinary small-chain patterns.
- Proof steps: 1.1 gives transported subdivision/prism; 2.1 proves excision; 2.2 derives homology MV from the small-chain short exact sequence; 2.3 defines the small local-cochain product explicitly and derives cohomology MV; 3.1 proves naturality and boundary cases.
- Boundaries/choice/check: empty intersections, `U=X`, disconnected/zero cases, and degenerate simplices are covered. The theorem rejects an unextended system on a subspace. No AC. Explicit precheck and rendercheck pass.

## Item checkpoints 14–21 — compact supports, orientation, and duality

### `def-compactly-supported-cohomology-with-local-coefficients`

- Claim/conventions: `H_c^k(X;L)` is the compact-support filtered colimit of `H^k(X,X\K;L)` for locally compact Hausdorff `X`; proper pullback requires `f^*K -> L`.
- Sources/dependencies: Hatcher §3.H pp.334–335 and the exact published compact-support definition; owned functoriality.
- Construction/boundaries: gives transition directions, common-larger-support equality, proper pullback, compact/empty/zero/negative cases, and cofinal relatively compact supports. Choice-free. Rendercheck passes; proof precheck is inapplicable.

### `prop-the-manifold-orientation-system-is-a-local-system`

- Claim/conventions: for a boundaryless manifold, published orientation transport is a fundamental-groupoid functor; stalkwise scalar extension is rank one and loop transport is the orientation character.
- Sources/dependencies: Davis–Kirk Chapter 5 §2.2 pp.100–103; published orientation system, owned local-system definition, and tensor product.
- Proof steps: 1.1 verifies the functor laws; 2.1 tensors transports and proves rank one; 3.1 extracts the sign character; 4.1 handles orientable, empty, zero-dimensional, and disconnected cases.
- Choice/check: no global generator is selected and no AC is used. Explicit precheck and rendercheck pass.

### `def-orientation-local-system-on-a-manifold-with-boundary` (new local supplier)

- Claim/conventions: for compact `M` with boundary, define `O_M^R=r^*O_int(M)^R` using a collar push-in. This avoids the false boundary-stalk formula `H_n(M,M\{x})`, which is zero at boundary points. The boundary identification is outward-normal-first.
- Sources/dependencies: Hatcher Proposition 3.42/Theorem 3.43 pp.253–254; Davis–Kirk §2.2 pp.100–103; collar theorem plus the preceding orientation proposition.
- Construction/boundaries: homotopic push-ins yield a stated natural isomorphism via homotopy-track transport; no stronger homotopy-independent canonicity is claimed. Empty boundary recovers the original system, and compact dimension zero has empty boundary. No AC. Rendercheck passes.

### `lem-canonical-twisted-fundamental-classes-over-compact-subsets` (new local supplier)

- Claim/conventions: the sign-cancelling local element `o_x tensor o_x` glues uniquely to `[M]^tw_K`; for compact boundary pairs it gives `[M,A]^tw` with outward-normal-first boundary `[A]^tw`.
- Sources/dependencies: Hatcher Lemma 3.27 and Theorem 3.43 pp.236–238,253–254; Davis–Kirk §2.2; owned local excision/MV and pair sequences; collar and five lemma.
- Proof steps: 1.1 constructs the generator-independent local section; 2.1 handles convex supports; 3.1 glues two supports; 4.1 performs finite chart gluing; 5.1 defines the relative class via collar cores; 6.1 computes its boundary using the outward-oriented interval; 7.1 handles empty/disconnected/zero cases.
- Choice/check: only finite subcovers for each supplied compact set; no global orientations and no AC. Explicit precheck and rendercheck pass.

### `def-cup-and-cap-products-with-local-coefficient-pairings`

- Claim/conventions: objectwise tensor uses diagonal transport; a natural stalkwise pairing defines AW cup and cohomology-first cap. The back cup value is transported from `v_p` to `v_0`, while the cap output is transported forward from `v_0` to the retained back face at `v_p`.
- Sources/dependencies: Hatcher §3.H pp.335–336; published AW, relative cap, Leibniz, and cap-boundary items; owned local complexes.
- Construction/boundaries: states local Leibniz and cap-boundary formulas, relative quotient patterns, and compact-support forms. Constant systems recover published operations; `p=0,n`, `p>n`, empty and zero cases are explicit. No AC. Rendercheck passes.

### `thm-poincare-duality-with-the-orientation-local-system`

- Claim/conventions: under AC, cap with `[M]^tw_K` gives `H_c^k(M;L) ~= H_{n-k}(M;O_M^R tensor L)` on every boundaryless Hausdorff second-countable manifold. No unsupported naturality for arbitrary manifold maps is claimed.
- Sources/dependencies: Davis–Kirk Theorem 5.7 and stronger form, pp.101–103; corrected Hatcher Theorem 3H.6, pp.335–336 and errata. Added the canonical-class lemma, cellular cochains, local functoriality/MV, five lemma, rational-box suppliers, and the published exhaustion.
- Proof steps: 1.1 defines the supportwise cap map; 1.2 computes it on a coordinate ball by the disk-boundary cellular complex; 2.1 derives compact-support MV by a relative-cochain filtered-colimit chase and proves arbitrary coordinate-open duality by rational boxes; 3.1 glues finitely many coordinate balls; 4.1 passes through the manifold exhaustion; 5.1 recovers compact/oriented and boundary cases.
- Choice/check: AC is spent exactly in the published countable coordinate-neighborhood exhaustion. The local calculation avoids UCT choice. Empty/zero/dimension-zero/out-of-range/disconnected cases are explicit. Explicit precheck and rendercheck pass.

### `thm-poincare-lefschetz-duality-with-local-coefficients`

- Claim/conventions: for `A=boundary(M)`, and not an arbitrary subspace, cap with `[M,A]^tw` gives both absolute-to-relative and relative-to-absolute twisted isomorphisms.
- Sources/dependencies: Davis–Kirk §2.2 pp.101–103; Hatcher Theorem 3.43 pp.253–254; twisted PD, the two new suppliers, local compact supports/functoriality/excision/pair sequences, collar and five lemma, plus the published oriented comparison.
- Proof steps: 1.1 separates empty boundary and chooses cofinal collar cores; 2.1 identifies relative cohomology with compact-support cohomology of the interior; 3.1 proves cap compatibility and the relative-to-absolute isomorphism; 4.1 builds the pair exact ladder; 5.1 checks all cap/connector signs and applies five lemma; 6.1 closes choices and boundary cases.
- Choice/check: AC is inherited only from boundaryless twisted PD. Empty/disconnected boundary, zero ring/system, dimension zero, and endpoint degrees are explicit. Explicit precheck and rendercheck pass.

### `lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems`

- Claim/conventions: homology uses `H_q(T_gamma)`; covariant cohomology transport along `gamma` is `H^q(T_bar-gamma)`. A map of fibrations is covariant on the homology systems and contravariant on cohomology systems.
- Sources/dependencies: Davis–Kirk Chapter 5 §3 pp.103–107; published fiber transport, singular prism, and cochain definition; owned local-system definition.
- Proof steps: 1.1 dualizes the prism identity; 2.1 verifies homology functor laws; 2.2 verifies reversed-path cohomology laws; 3.1 proves the two naturality squares; 4.1 handles empty/point fibers and zero coefficients.
- Choice/check: the lifting function is supplied by the published definition and no family choice is made. Explicit precheck and rendercheck pass.

## B-page checkpoints — six computations

- `ex-circle-homology-with-a-module-automorphism`: a lift has boundary `v·(g^{-1}-1)` and the left action of `g^{-1}` is the stated monodromy `T`; hence `d=T-1`, with kernel/cokernel and reversed-loop invariance. Davis–Kirk §2.1 Exercise 76, pp.99–100. No AC; precheck/rendercheck pass.
- `ex-sign-local-system-on-real-projective-space`: evaluates `1+(-1)^k g` at `g=-1`, gives the full homology table, and distinguishes the sign system from the orientation system when `n` is odd. Davis–Kirk §2.1 Exercise 77, pp.99–100. The `n=0` nonexistence of nontrivial sign monodromy is explicit. No AC; checks pass.
- `ex-the-orientation-system-of-the-mobius-band`: rectangle gluing reverses one local coordinate, the twofold unwrap is an annulus, and the boundary loop has core degree two. Davis–Kirk §2.2 pp.100–102. It depends on the new boundary extension, not directly on the boundaryless definition alone. No AC; checks pass.
- `ex-twisted-poincare-duality-for-a-closed-nonorientable-surface`: the polygon word gives twisted `d_2=0`, `d_1=-2(sum)`, and `H_2=Z`; `O tensor O` is canonically constant, yielding both duality families. Davis–Kirk Theorem 5.7 pp.101–103. `g=1` and out-of-range degrees are explicit. It inherits only the theorem's AC; checks pass.
- `cex-constant-coefficients-do-not-compute-a-nontrivial-monodromy-system`: substitutes `T=-1` and `T=1` in the circle complex, producing `(H_1,H_0)=(0,Z/2)` versus `(Z,Z)`. Hatcher §3.H Exercise 1, p.336. No AC; checks pass.
- `cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus`: identifies mapping-torus loop transport with `h_*`; a circle reflection changes the `q=1` row in `(p=0,p=1)` order from `(Z,Z)` to `(Z/2,0)`, while `q=0` is unchanged. Davis–Kirk §§2.1,3 pp.98–107. It explicitly does not invoke the later spectral sequence. No AC; checks pass.

## Proposed shared manifest and proof-contract changes

The lead should integrate, without changing the selected pair or promised results:

1. Replace the vertex-group row's literal-operation claim by the canonical reversal isomorphism; record that identity on loop classes is anti-multiplicative under the published first-loop-first convention.
2. Retain the early cellular item as a tensor/Hom definition and move the skeletal relative-group identification exclusively to the cellular comparison theorem.
3. Add the direct telescope/functoriality/pair-sequence dependencies authored in the cellular cochain theorem.
4. Insert new A-page items `def-orientation-local-system-on-a-manifold-with-boundary` and `lem-canonical-twisted-fundamental-classes-over-compact-subsets` immediately after the boundaryless orientation proposition. Add them to Poincare–Lefschetz, and add the class lemma to boundaryless twisted duality.
5. Restrict the Poincare–Lefschetz statement to `A=partial M`. Update the Mobius dependency to the new boundary extension.
6. Add the authored direct PD dependencies for cellular local calculation, coefficient homotopy invariance, local MV/five lemma, rational boxes, and exhaustion. Record that its only AC use is the countable coordinate-neighborhood selection; the authored local computation does not invoke UCT.
7. Replace the nonorientable-surface example's unrelated projective-space dependency by cellular local homology plus the orientation-system proposition.
8. Remove the duplicated `strategy` key in the shared constant-coefficient counterexample row.

For proof-contract JSON, the proposed `citations` are exactly the `[F#]` supplier statements on each proof-bearing item's `## Facts & Assumptions` section, with `uses` equal to the step tags on that item. The proposed `derivations` are the numbered proof steps listed in the checkpoints above, with `inputs` exactly their same-line tags. Definition contracts have empty derivations and use the explicit construction/boundary paragraphs above. All contracts should mark `empty`, `zero`, `one/degree-zero`, `degenerate`, `endpoints`, and `nonempty-choice` with the evidence recorded in the corresponding final step or definition paragraph; biconditional forward/reverse cases are not applicable because none of these items asserts an iff theorem. This avoids inventing contract citations beyond the actual item facts.

## Validation and open obligations

- Explicit-path precheck: all 19 proof-bearing owned items pass; definitions are correctly skipped.
- Explicit-path rendercheck: both pages and all 27 owned item files pass, 29 files total, using real KaTeX and renderer YAML.
- Repo-wide `depcheck --quiet` currently exits nonzero on 40 errors from other in-flight pairs (principally missing items on the Lie-subgroups pages, plus pre-existing B-leaf errors). Filtering the complete diagnostic stream by every distinctive owned page/item ID produced no owned warning or error. This helper did not edit the foreign failures.
- No owned mathematical obligation remains. The lead must integrate the eight shared changes above and generate/validate the shared proof-contract rows; those files remain read-only to this helper.
- No published defect was found. The published orientation-system definition correctly limits itself to boundaryless manifolds; the defect was only the draft scaffold's attempted boundary use, so no canonical published-defect entry is proposed.

**Next action:** group lead inspection, shared integration, dependency closure, and certification of the completed pair.
