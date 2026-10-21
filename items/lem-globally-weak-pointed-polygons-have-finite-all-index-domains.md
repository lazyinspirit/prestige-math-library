---
id: lem-globally-weak-pointed-polygons-have-finite-all-index-domains
kind: lemma
title: "Globally weak pointed polygons have finitely many domains across all indices"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds, lem-strong-admissibility-lattice-positive-slices-are-finite, lem-degree-is-well-defined-and-independent-of-the-normalized-top-form, thm-regular-value-formula-for-compact-support-degree]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Sections8.3–8.4; this theorem uses global multi-periodic admissibility for unrestricted zero-basepoint counts, not merely fixed-Spin-c admissibility"
---

## Statement

Assume Countable Choice. Let finitely many pairwise transverse attaching systems on a compact surface cut out finitely many regions. Fix a nonempty finite basepoint set $Z$ off the circles and the associated attaching product tori. An integral MULTI-PERIODIC domain means a region two-chain whose boundary is an integral sum of the full labelled attaching circles. Assume the GLOBAL weak condition that every nonzero such domain vanishing at every point of $Z$ has both positive and negative region coefficients.

For any fixed ordered polygon corner tuple, the set of domains of ALL actual zero-$Z$ nearly symmetric holomorphic polygons is finite, across every Fredholm index, every conformal source and every literal realized homotopy class. This remains true when their source-dependent structures range over a family with the common protected integrable geometry; there is no index or Spin-c restriction in this conclusion. Their energies have one uniform bound whenever the uniform taming bounds are fixed. There are finitely many corner tuples for a fixed finite transverse multi-diagram, so one energy bound covers all of them and all its sub-polygons.

If the zero-$Z$ condition is intended only inside a fixed Spin-c class or an allowed orbit, ordinary sector admissibility must instead be combined with its actual geometric domain-difference theorem; the GLOBAL hypothesis above is not inferred from that weaker condition. Neither finiteness of formal homotopy classes nor finiteness of regular counts is asserted here.

## Facts & Assumptions

**Given:** The finite labelled transverse circle arrangement, regions, basepoints, global mixed-sign condition, fixed polygon corners and actual maps. Multiplicities at all basepoints are zero.

[F1] Actual polygons have nonnegative region domains, finite ordered lifts, proper coordinate degrees and the uniform domain-area energy bound. ([[lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds]])

[F2] For a finitely generated rational periodic lattice with no nonzero nonnegative direction, every nonnegative integral affine slice is finite. This is the zero-functional case of the actual strict lattice theorem. ([[lem-strong-admissibility-lattice-positive-slices-are-finite]])

[F3] Actual degree integrates compactly supported target forms by the signed regular-value count. ([[lem-degree-is-well-defined-and-independent-of-the-normalized-top-form]], [[thm-regular-value-formula-for-compact-support-degree]])

## Proof

1.1 First establish the geometric domain-difference claim for actual polygons $u,v$ with the same corners. Along one edge on a product torus its tuple is canonically ordered by the disjoint labelled circles. Its coordinate path on each circle begins and ends at that label's specified corner points. Pair the $u$ path with the reversed $v$ path; this is a closed circle path with an integer winding. Summing these windings over the finitely many edges gives integers $a_j$ for the full labelled circles $\gamma_j$. This conclusion is about actual boundary paths; it does not assume that an arbitrary relative class has a chosen embedded incidence representative. [given, construct, algebra]

1.2 This domain lattice has a finite integer presentation. For every labelled curve require the signed coefficient jump on one region edge to equal its jump on each other segment of that curve, and require zero at every basepoint region. These are finitely many integer linear equations in the finitely many region coefficients. Conversely they say precisely that the boundary is a full-curve combination and that its marked coefficients vanish. Their rational nullspace $V$ has an explicit rational basis by Gaussian elimination. Clear each basis denominator to obtain finitely many integer solutions spanning $V$. If desired an integral basis follows by the finite Euclidean row/column elimination, but its real span is all that is needed. The global hypothesis applies to EVERY integral vector in this nullspace. If $V$ had a nonzero nonnegative real vector, restrict to its strictly positive support and approximate its finitely many rational-basis coordinates within the subspace having the other coordinates exactly zero. This gives a nonzero nonnegative rational vector; clearing its denominator contradicts the global mixed-sign condition. Hence $V\cap\mathbb R_{\ge0}^r=\{0\}$. [given, construct, algebra]

2.1 Use [F1]'s finite ordered covers for $u$ and $v$. Stokes for their coordinate maps, divided by the common ordered degree $m!$, gives for every smooth target one-form $\xi$ the identity $\int_\Sigma(D(u)-D(v))\,d\xi=\sum_j a_j\int_{\gamma_j}\xi$. To justify it on the noncompact sources, truncate their finitely many ends. The uniform corner limit, the exact product equation in its chart and its decaying strip modes make the extra boundary integrals tend to zero. The coordinate integrals equal the domain integrals by [F3], first on each region and then by finite summation; inverse images of curve arcs have zero area contribution. For a concrete local boundary-jump test, take an oriented coordinate strip about a segment of $\gamma_j$ disjoint from every other curve and put $\xi=\rho(x)\chi(y)dx$, with $\chi$ compactly supported and equal to one near the curve. Its two side integrals give exactly the coefficient jump of $D(u)-D(v)$ times $\int\rho$, while the right side is $a_j\int\rho$. Varying the segment proves that the boundary is the full-curve chain $\sum_j a_j\gamma_j$. Thus $D(u)-D(v)$ is an actual multi-periodic domain. All its marked coefficients are zero by the hypothesis on the two maps. [F1, F3, step 1.1, construct, algebra]

3.1 If the set of actual domains is nonempty, fix any one of them, $D_0$. By step2.1 every other lies in $(D_0+V)\cap\mathbb Z_{\ge0}^r$. This set is finite by [F2]. Explicitly, if unbounded, enumerate the nonnegative integer vectors and take the first member outside each integer ball. Normalizing an unbounded sequence and taking a finite-dimensional convergent subsequence gives a nonzero unit vector in $V\cap\mathbb R_{\ge0}^r$, contradicting step1.2. A bounded integral set is finite. If no domain occurs the conclusion is immediate. The argument applies to the UNION of domains across every allowed coefficient and conformal family, since the geometric boundary paths and the lattice of step2.1 are independent of those analytic choices. It places no condition on the Fredholm index and needs no domain-to-homotopy-class injectivity. [F1, F2, given, step 2.1, step 1.2, construct, algebra]

4.1 [F1] bounds every such map's energy by a fixed constant times the largest of the finitely many domain areas. The target surface and region areas are fixed; a coefficient family with uniform taming bounds has the same constant. For finitely many corner tuples take the maximum of their bounds. For a sub-polygon its region chain can be viewed in the common refinement by all the curves, and the same boundary-path argument gives the same full multi-periodic lattice; the global mixed-sign condition therefore still bounds its actual domains. There are finitely many ordered sub-polygons of the fixed finite label list. One maximum consequently bounds ALL their actual indices and classes before any transversality choice. This is the all-index bound used to prevent an unproved negative-index limiting-level assumption in later compactness arguments. [F1, given, step 3.1, construct, algebra]

5.1 The only admissibility invoked was the stated global condition on the actual full-curve multi-periodic lattice. A fixed Spin-c hypothesis can yield a smaller difference lattice, but identifying it requires the genuine geometric Spin-c theorem and was not done here. Similarly finite domains give bounded energy, not finite formal classes or isolated solutions. Actual regularity, compactification and zero-dimensional count finiteness must be proved with the analytic map spaces and gluing. No such assertion has been substituted for the geometric boundary-jump and lattice proof above. [F1, F2, F3, given, step 2.1, step 1.2, step 3.1, step 4.1, algebra] ∎
