---
id: lem-good-cover-nerve-computes-singular-cohomology
kind: lemma
title: "A geodesically convex cover has the homotopy type of its nerve"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 0
deps:
  - thm-existence-of-geodesically-convex-neighborhoods
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-abstract-simplicial-complex
  - def-geometric-realization-of-an-abstract-simplicial-complex
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-axiom-of-choice
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC, inherited from the convex-cover and partition-of-unity suppliers"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §4G, open-cover nerve construction"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: "Raoul Bott and Loring Tu, Differential Forms in Algebraic Topology, Chapter I, good covers and the nerve"
      url: https://link.springer.com/book/10.1007/978-1-4757-3951-0
---

## Statement

Assume full AC. Let $M$ be a Hausdorff second-countable smooth manifold with a Riemannian metric, and let $\mathcal U=\{U_i\}_{i\in I}$ be an open cover whose members are strongly geodesically convex in the convention of [[thm-existence-of-geodesically-convex-neighborhoods]]. Let $N(\mathcal U)$ be the abstract simplicial complex whose finite nonempty subsets $\sigma\subset I$ are simplices exactly when $U_\sigma:=\bigcap_{i\in\sigma}U_i$ is nonempty. Then the geometric realization $|N(\mathcal U)|$ is homotopy equivalent to $M$. Writing $H^*_{\mathrm{simp}}(N;\mathbb F_2)$ for the cohomology of the simplicial cochain complex, the natural comparison identifies it with $H^*(M;\mathbb F_2)$.

## Facts & Assumptions

**Given:** Full AC, the smooth Riemannian manifold $M$, the cover $\mathcal U$, and its nerve.

[F1] Every nonempty finite intersection of strongly geodesically convex open sets is strongly geodesically convex and hence contracts to any chosen point by its unique minimizing geodesics ([[thm-existence-of-geodesically-convex-neighborhoods]]).

[F2] A smooth partition of unity subordinate to any open cover exists on a Hausdorff second-countable smooth manifold; its supports are locally finite and each support lies in its assigned cover member ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[F3] The nerve is an abstract simplicial complex and its geometric realization has the weak topology with respect to its closed simplices ([[def-abstract-simplicial-complex]], [[def-geometric-realization-of-an-abstract-simplicial-complex]]).

[F4] A smooth manifold and every open submanifold are Hausdorff second-countable and have CW homotopy type under full AC ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F5] Simplicial homology agrees naturally with singular homology of the geometric realization, and the cohomological universal-coefficient short exact sequence is natural for free integral chain complexes ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[A1] Full AC supplies the simultaneous choices of one point and one contraction for the set of nonempty finite intersections ([[def-axiom-of-choice]]).

## Proof

**Given:** The data of the Statement and a subordinate partition of unity $(\phi_i)_{i\in I}$ from [F2].

1.1 Order $I$ by a well-order, using [A1]. Form the thick nerve realization $T=(\coprod_{\sigma\in N(\mathcal U),\,\sigma\text{ finite}}U_\sigma\times\Delta^\sigma)/\sim$, where a face inclusion deletes a barycentric coordinate equal to zero and keeps the same base point $x$; give $T$ the weak topology from these closed simplex pieces. A point is written $[x,t]$, where $t$ has finite support $\sigma$ and $x\in U_\sigma$. Projection $p:T\to M$ sends $[x,t]\mapsto x$. The map $s:M\to T$, $s(x)=[x,(\phi_i(x))_{i\in I}]$, is continuous: near any fixed $x$, only finitely many partition functions are nonzero, so its coordinate expression lands in one finite simplex piece; support containment in [F2] ensures it lies in $T$. For $[x,t]\in T$, the straight segment between $t$ and $(\phi_i(x))_i$ stays in the simplex on the union of their finite supports, all of whose sets contain $x$. On each simplex piece this formula is continuous, and local finiteness of $(\phi_i)$ gives continuity as $x$ varies. It defines a homotopy from $\operatorname{id}_T$ to $s\circ p$. Also $p\circ s=\operatorname{id}_M$. Hence $p$ is a homotopy equivalence. [A1, F2, F3, construct]

2.1 Filter $T$ and $|N(\mathcal U)|$ by simplex dimension. At stage $q$, each $q$-simplex $\sigma$ attaches the piece $U_\sigma\times\Delta^q$ along $U_\sigma\times\partial\Delta^q$; the corresponding nerve stage attaches $\Delta^q$ along $\partial\Delta^q$. By [F1], choose a contraction of $U_\sigma$ to a point. Its product with $\Delta^q$ contracts the first attaching pair to the second pair while fixing the simplex coordinate, so the map of attaching pairs is a homotopy equivalence. [A1, F1, F3, step 1.1]

3.1 The boundary inclusion $U_\sigma\times\partial\Delta^q\subset U_\sigma\times\Delta^q$ is a cofibration, since it is the product of the identity with the closed simplex-boundary cofibration. For a pushout along a cofibration, replacing the attached pair by a homotopy-equivalent pair preserves homotopy type: factor the attachment through its mapping cylinder, which deformation retracts to the pushout, and use the chosen pair homotopy inverse and its homotopies on the two cylinders. Applying this argument to the disjoint union of all $q$-simplices and inducting on $q$ shows that each finite skeleton of $T$ maps by a homotopy equivalence to the corresponding nerve skeleton. [step 2.1, F3, algebra]

4.1 The skeletal filtrations have the weak CW topology. A map from a compact sphere, disk, or cylinder into either realization is contained in a finite subcomplex: otherwise choose one point from each of infinitely many open cells met by its compact image; the weak topology and closure-finiteness make those chosen points a closed discrete subset, contradicting compactness. Thus the finite-skeleton equivalences of step 3.1 imply that $T\to |N(\mathcal U)|$ is a weak homotopy equivalence. The spaces have CW homotopy type: $|N(\mathcal U)|$ is a CW complex by [F3], and $T\simeq M$ by step 1.1 and [F4]. A weak homotopy equivalence between spaces of CW homotopy type is a homotopy equivalence, by replacing both spaces by CW models and applying the cellular Whitehead theorem. Therefore $q:T\to|N(\mathcal U)|$ is a homotopy equivalence. [F3, F4, step 1.1, step 3.1, algebra]

5.1 The two projections from $T$ are homotopy equivalences by steps 1.1 and 4.1, so their composite comparison identifies the homotopy types of $M$ and $|N(\mathcal U)|$. [step 1.1, step 4.1]

6.1 Both simplicial and singular chain complexes are free abelian. By [F5], their natural comparison is an isomorphism on homology. The cohomological universal-coefficient short exact sequences therefore have isomorphisms on both the Ext and Hom terms; exactness gives an isomorphism on cohomology. Hence $H^*_{\mathrm{simp}}(N;\mathbb F_2)\cong H^*_{\mathrm{sing}}(|N|;\mathbb F_2)$. Homotopy invariance and step 5.1 identify the latter with $H^*_{\mathrm{sing}}(M;\mathbb F_2)$. [F5, step 5.1, algebra]

7.1 The proof uses the partition map and simplex filtration, not an assumed nerve conclusion: [F1] contracts every attaching intersection, step 3.1 justifies each pushout comparison, and step 4.1 passes to the weak CW colimit. Empty $M$ has empty cover and nerve, and all nonempty intersections and finite-simplex boundary cases were handled in [F1] and steps 2.1–2.2. Full AC is used only through [A1], [F2], and [F4]. Thus the conclusion applies to the cover chosen for the frame bundle. [A1, F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, step 6.1] ∎

