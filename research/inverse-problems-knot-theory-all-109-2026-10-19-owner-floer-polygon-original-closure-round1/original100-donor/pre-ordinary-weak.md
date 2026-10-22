---
id: lem-os-disk-and-polygon-analytic-foundations
kind: lemma
title: "Analytic foundations for disk and polygon counts"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - def-countable-choice
  - lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector
  - lem-pointed-transverse-multidiagrams-admit-small-triple-free-curve-representatives
  - lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain
  - lem-strong-polygon-admissibility-bounds-indices-and-positive-domains
  - thm-globally-weak-multidiagrams-admit-coherent-all-index-regular-polygon-data
  - thm-globally-weak-zero-marked-polygons-have-finite-counts-and-a-infinity-boundaries
  - thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts
  - thm-fixed-background-zero-marked-continuation-counts-give-chain-homotopy-equivalences
proof_strategy: direct
axiom_use: "Assumes ACω for the explicit separable-Hilbert generic choices and countable compactness arguments in the proved suppliers; no full-AC transversality or Spin-c classification theorem is imported."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, Sections3–4 and8"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Ozsvath and Szabo, Holomorphic triangles and invariants for smooth four-manifolds"
      url: "https://arxiv.org/pdf/math/0110169"
---

## Statement

Assume ACω. Let a finite pointed Heegaard multidiagram have actual complete handlebody disk systems for closed oriented three-manifolds, with a basepoint in every one-system cut component. For the full hat operations impose global weak multidiagram admissibility: every nonzero full-curve multiperiodic domain vanishing at all basepoints has both signs. Alternatively, for operations in a specified total Spin-c family impose strict all-mark normalized strong admissibility on that family and its relevant boundary pairs. For a single diagram the full-module admissibility convention tests all intended Spin-c sectors, including empty sectors, and implies the required global weak domain condition.

In positive symmetric rank choose, among the auxiliary data, an arbitrarily small pointed Hamiltonian representative with no triple product-torus intersection, following its pair generators and transporting its domains, actual Spin-c labels and admissibility. Fix that representative. Compatible generic source-dependent perturbations, coherent over the required conformal faces and auxiliary parameter families, then make the disk and polygon spaces entering the hat differential, continuation, handleslide, stabilization and surgery operations regular with their actual expected dimensions. The common protected tensor and arbitrary constant product-angle end charts can be prescribed, and coherent perturbations can be arbitrarily small about a supplied compatible reference model. This does not assert regularity by almost-complex variations alone on an arbitrary fixed triple, or invariance under the preliminary curve choice.

Dimensions include every allowed conformal and auxiliary family parameter. Quotient only actual source automorphisms: longitudinal translation acts freely on autonomous nonconstant two-ended strips; an anchored source-dependent continuation strip and a three-marked triangle have no translation quotient. Every total zero-dimensional space used in a mod-two count is finite, across all its literal realized classes and with its specified labels. The one-dimensional spaces entering the chain-map, composition and homotopy identities compactify to actual compact one-manifolds. Their boundaries are precisely the matching rigid polygon–polygon conformal splittings and strip–polygon breakings, together with prescribed parameter endpoints. Every such broken end has an exhaustive gluing collar. For the zero-basepoint operations no nonconstant sphere or one-torus boundary disk survives; thus the specified boundary-degeneration terms vanish, and there is no further escape or uncontrolled periodic-domain end. Boundary parity gives the differential square-zero identity and the polygon chain-map, composition and homotopy identities.

At symmetric rank zero retain the original empty systems and use the point target directly: the differential is zero, the matching constant triangle is counted once, higher rigid operations vanish, and the conformal and parameter boundary identities are the actual source-space identities. No triple-torus exclusion or free translation quotient is imposed on that point map.

This is the analytic count theorem. It does not construct a subordinate surgery diagram, prove that a named top generator is a cycle, identify the homology of a surgery total complex with a filling, or prove Heegaard-move invariance. Those remain duties of the respective operation constructions.

## Statement references

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]]

[[lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector]]

[[lem-pointed-transverse-multidiagrams-admit-small-triple-free-curve-representatives]]

[[thm-globally-weak-zero-marked-polygons-have-finite-counts-and-a-infinity-boundaries]]

[[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]]

## Facts & Assumptions

**Given:** The actual finite pointed multidiagram, complete cut systems, the stated operation-specific domain admissibility, any fixed total Spin-c label, finite required arities and auxiliary parameter spaces, and the zero-basepoint hat count convention.

[F1] The full single-diagram definition quantifies weak admissibility in every intended Spin-c sector, even empty ones. Complete Heegaard data admit an actual zero-Chern Spin-c sector under ACω, so that full-module condition is equivalent to global mixed signs of normalized periodic domains. A single specified-sector weak condition is not asserted to imply this. ([[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]], [[lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector]])

[F2] Positive-rank small triple-free representatives exist, with pair generators followed and actual source-dependent transports of polygon map spaces. The finite Morse Spin-c construction carries the actual lift, including torsion, and the capped-domain lattice under attaching-curve isotopies. Strict admissibility gives a lower strip index and finite nonnegative domains in every bounded upper-index family. ([[lem-pointed-transverse-multidiagrams-admit-small-triple-free-curve-representatives]], [[lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain]], [[lem-strong-polygon-admissibility-bounds-indices-and-positive-domains]])

[F3] On a globally weak multidiagram, coherent source-dependent choices exist with all-index regular zero-marked end strips and polygons, genuine endpoint collars, actual arbitrary product-angle charts, prescribed compatible protected geometry and arbitrarily small perturbations about a compatible reference. The proved finite-count theorem gives stable-source compactness, actual index budgets, exhaustive nonlinear gluing, compact Hausdorff one-manifolds and all zero-marked A-infinity boundaries, including the direct rank-zero model and relative parameter construction. ([[thm-globally-weak-multidiagrams-admit-coherent-all-index-regular-polygon-data]], [[thm-globally-weak-zero-marked-polygons-have-finite-counts-and-a-infinity-boundaries]])

[F4] For strictly strongly admissible specified Spin-c families on general balanced intermediate three-manifolds, the full-marked theorem supplies good end paths with no nonconstant nonpositive-index strips, index-one regularity, coherent all-index polygon regularity, finite low-dimensional total counts and actual exhaustive boundaries. Its proof first obtains the finite lower-index band before taking limits, and retains all actual Spin-c extension and marked-degree data. ([[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]])

[F5] Actual fixed-background source-dependent continuation solutions have anchored compactness, all-index regular perturbations, finite counts, exhaustive collars and compact one-manifold parameter boundaries. The central component is not divided by translation; its autonomous escaping end levels are. ([[thm-fixed-background-zero-marked-continuation-counts-give-chain-homotopy-equivalences]])

## Proof

1.1 The admissibility inputs are actual domain bounds, not a formal assumption that the desired moduli are compact. For a full single-diagram hat module, [F1] supplies a zero-Chern sector independently of whether it has generators; the required all-sector test therefore tests EVERY normalized periodic domain and gives the global weak pair condition. For several systems the multiperiodic condition in the Statement is imposed on the actual chosen auxiliary multidiagram; pairwise conditions alone are not substituted for it. Its nonnegative zero-mark domains are finite before any index or regularity choice, as proved in [F3]. In the specified strict branch [F2] instead gives finite upper-index domains and a genuine lower strip index. These are the respective energy prerequisites for the two branches, on arbitrary closed intermediate three-manifolds. [F1, F2, F3, given, construct, algebra]

1.2 Treat rank zero by [F3]'s direct model. Its map operator is the zero operator between zero spaces and is onto of index zero. A triangle has one matching constant map, no conformal parameter and no continuous automorphism. A higher stable polygon has its actual positive source dimension and no rigid contribution. The four-marked source is an interval whose two ends are the two constant triangle products, and its parity is zero over the coefficient field. A matching one-parameter triangle family is its parameter interval; other assigned labels or nonzero marked vectors give empty sets. There are no nonconstant strips or bubbles. This proves the point-target count identities without excluding an allowed genus-zero input. [F3, given, construct, algebra]

1.3 For positive rank apply [F2], protecting the basepoints and a witness in each old region. Pair generators persist without births, and the swept-annulus integral lattice transport preserves old sign witnesses. The actual collar extensions carry the compression disks, capped classes and Spin-c lifts. Consequently the prescribed admissibility and labels hold on the chosen representative. No constant stable polygon can occur: its at least three distinct boundary labels would give a common point of three product tori. This curve choice is explicit and necessary; the coefficient variation at a constant map is zero because its derivative is zero, so a J-only genericity assertion on the original arbitrary fixed triple would be false. Nothing in this step asserts count invariance under the curve change. [F2, F3, construct, algebra]

2.1 In the global branch use [F3]'s all-index end choices and coherent polygon data. Its finite face induction preserves any supplied compatible protected tensor and every supplied product angle, and its source-local Hilbert variations are positive at every finite neck length and flat at the conformal faces. Thus genericity is genuine even at large finite necks. In the strict branch use [F4]. Its finite lower-index band and unconditional bubble index budget first exclude every nonconstant strip of index at most zero; its index-one regularity then suffices for every limiting strip which can occur in a low-dimensional polygon. Source-local variations make all nonconstant polygon vertices regular. This does not infer regularity of an unexamined negative-index limiting level. Both constructions fix actual time-constant endpoint collars and include the allowed source and auxiliary parameters in the universal operator. [F2, F3, F4, step 1.1, step 1.3, construct, algebra]

3.1 Use the actual compactness and index budget in [F3] or [F4]. Degrees add at every actual region divisor. A zero-basepoint sphere has its constant surface coefficient zero; a one-torus disk has constant coefficient on each one-system cut component, each of which contains a basepoint. Their domain-area inequalities force zero energy, so no nonconstant such bubble remains, including when it is entirely contained in a protected divisor or the diagonal. Constant compact ghosts are deleted only when unstable; no stable polygon vertex is deleted by that convention. The latter cannot be constant here by step2.1. The total count dimension is the sum of the regular vertex count dimensions plus the number of nodes, with one longitudinal phase removed only for an actual nonconstant strip. Consequently dimension zero has one rigid component; a non-interior dimension-one limit has exactly one node and two rigid components. This rules out every extra multi-level, multi-conformal or bubble escape in the dimensions used by the asserted identities. [F3, F4, step 1.3, step 2.1, construct, algebra]

4.1 Finiteness and collars are topological conclusions of the proved analytic construction, not consequences of a merely formal dimension count. An unbroken convergent sequence converges in the global map chart by the exact end cutoff inverse. A rigid total set is discrete and sequentially compact across all its literal classes, hence finite under ACω by selecting ordered finite distinct tuples and flattening them. Each matching pair has its actual nonlinear product chart and a unique exhaustive half-interval collar. Distinct positive-energy cores and strip phases separate distinct collar endpoints. The resulting Hausdorff second-countable sequentially compact one-manifold is compact; its finite interval boundary has even parity. The actual class, total Spin-c label and degrees are locally constant in map charts and carried by explicit neck sewing, so imposing any such label selects the corresponding open-and-closed part and does not assume a class/domain bijection. [F3, F4, step 2.1, step 3.1, construct, algebra]

5.1 For a polygon with $d$ inputs the count dimension is the actual fixed-map index plus $d-2$ conformal parameters; a triangle has no such parameter and no translation quotient. The rigid operations are therefore the index-one strip differential and the polygon counts of index $2-d$. Enumerating the actual one-node ends in step4.1 gives precisely the finite A-infinity sum, including the output differential and every input differential. This proves differential square-zero, the triangle chain-map equation and the quadrilateral composition homotopy. Relative compact auxiliary parameter families are handled by the same face induction with their boundary coefficients fixed: the universal derivative includes each parameter once, source-local bumps are supported in the parameter interior, and the product gluing retains the common parameter rather than introducing a copy at each vertex. In particular universal index-minus-one triangles are rigid and universal index-zero triangles have their endpoint and strip-breaking boundaries. Counts of those boundaries give the asserted homotopy identities. Zero-basepoint boundary-degeneration terms are zero by step3.1, hence no omitted contribution remains to cancel. The analytic theorem supplies these identities for the actual admissible diagrams and inputs; computing named top cycles, constructing surgery multi-diagrams, identifying filling homology and proving move inverses require their own proofs and have not been assumed here. [F3, F4, step 1.2, step 2.1, step 3.1, step 4.1, algebra]

6.1 For continuation retain the compact-transition source profile as part of the equation, and apply [F5]. The actual central operator has index zero for a rigid continuation map; it has no translation symmetry even when its underlying domain has two ends. A count-one anchored compactification has a rigid central solution and one autonomous rigid end strip. A relative one-parameter family has rigid fixed-map-index-minus-one central solutions and the two parameter-end strata. The actual product collar and endpoint parity give its chain-map and homotopy equations, while separated-transition gluing gives composition. Constant generators for the constant profile have the exact invertible transverse operator and count the identity. These are the continuation instances of the Statement, with source-dependent central and autonomous end automorphisms distinguished. Together with steps1.2–5.1 this proves the claimed analytic package, without turning a stabilization or surgery-map construction into a consequence of regularity alone. [F5, step 1.2, step 5.1, construct, algebra] ∎
