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
  - lem-interval-exponential-law-and-quotient-homotopies
  - thm-existence-of-geodesically-convex-neighborhoods
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-abstract-simplicial-complex
  - def-geometric-realization-of-an-abstract-simplicial-complex
  - def-cw-complex-with-closure-finiteness-and-weak-topology
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-axiom-of-choice
justified_by: []
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

[F5] Simplicial homology agrees naturally with singular homology of the geometric realization, and the cohomological universal-coefficient short exact sequence is natural for free integral chain complexes ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[A1] Full AC supplies the simultaneous choices of one point and one contraction for the set of nonempty finite intersections ([[def-axiom-of-choice]]).

[F6] Homotopies on an ordinary product with the interval are equivalent to continuous maps into the compact-open interval mapping space; quotient descent commutes with this interval product ([[lem-interval-exponential-law-and-quotient-homotopies]]).

## Proof

**Given:** The stated cover and a subordinate locally finite partition $(\phi_i)_{i\in I}$ from [F2].

1.1 Define $f:M\to|N|$ by $f(x)=\sum_i\phi_i(x)i$. Its finite support consists of cover members containing $x$, so it spans a nerve simplex. The map is continuous for the weak realization topology: near a point only finitely many supports occur, and after shrinking the neighborhood every remaining assigned $U_i$ contains it. Thus the local map lands continuously in one finite simplex. Empty cover members contribute no vertex and may be omitted. [A1, F2, F3, construct]

1.2 Define the barycentric subdivision $N'$ whose vertices are nonempty simplices $\sigma$ of $N$ and whose simplices are strict finite chains $\sigma_0\subset\cdots\subset\sigma_k$. The map $h:|N'|\to|N|$ sends the vertex $\sigma$ to its barycenter. It is a homeomorphism by an explicit simplexwise inverse: if a point has distinct positive coordinate levels $\lambda_1>\cdots>\lambda_r>0$, put $\sigma_j=\{i:t_i\ge\lambda_j\}$ and $\lambda_{r+1}=0$. Its expression is $\sum_j |\sigma_j|(\lambda_j-\lambda_{j+1})b_{\sigma_j}$. These nonnegative weights sum to one and recover each coordinate. When levels coincide the intervening weight becomes zero, and on a face zero coordinates disappear; hence the inverse is continuous on each closed simplex and for the weak topologies in [F3]. [F3, construct, algebra]

2.1 Using [A1], choose $x_\sigma\in U_\sigma$ for every nonempty simplex. Construct $g:|N'|\to M$ on a chain simplex recursively. Its vertex $\sigma$ maps to $x_\sigma$. For $\sigma_0\subset\cdots\subset\sigma_k$, cone the already defined opposite face to $x_{\sigma_0}$ using the unique minimizing geodesics in $U_{\sigma_0}$. The opposite face lies in $U_{\sigma_1}\subset U_{\sigma_0}$ by induction. The cone agrees with the constructions on all other faces because deleting a vertex leaves the same ordered coning formula. It is continuous at the cone point by compactness of each face image and smooth dependence of the convex geodesics in [F1]. The resulting map has image in $U_{\sigma_0}$ on this chain simplex and is globally continuous by the weak topology. [A1, F1, F3, step 1.2, construct]

3.1 For $x\in M$, each simplex in the chain representing $h^{-1}f(x)$ is a face of the support simplex of $f(x)$. Thus both $x$ and $g h^{-1}f(x)$ lie in the same $U_{\sigma_0}$. Join them by its unique minimizing geodesic. This gives a homotopy $g h^{-1}f\simeq\operatorname{id}_M$. It is continuous even when the chain changes: on every convex-pair neighborhood geodesics depend continuously on both endpoints, and the local formulas agree on overlaps by uniqueness of the minimizing geodesic. No CW topology on a thick nerve is assumed. [F1, step 1.1, step 1.2, step 2.1, construct]

4.1 We construct the other inverse homotopy by carriers. For the chain simplex with smallest face $\sigma_0$, let $C_{\sigma_0}$ be the subcomplex of nerve simplices $\tau$ for which $\tau\cup\sigma_0$ is a simplex. It contracts to $b_{\sigma_0}$ by straight barycentric interpolation. The map $h$ lies in this carrier, since its support is contained in the largest chain face; $f g$ lies there because $g$ lands in $U_{\sigma_0}$ and all members in the support of $f(g(-))$ contain that same point. A face of a chain either has the same smallest simplex or a larger one; its carrier is therefore contained in $C_{\sigma_0}$. Induct over chain-simplex dimension to homotope $fg$ to $h$ within these carriers. On a closed $k$-simplex, the two endpoint maps and the already fixed boundary homotopy define a map from the boundary of its prism into the contractible carrier. Extend across the prism by coning that boundary map with the displayed contraction. This extends the homotopy relative to all previously defined faces. For continuity, transpose each characteristic-prism map into the compact-open interval mapping space by [F6]. The maps agree on faces, so the weak topology of [F3] gives a continuous global transpose; untransposing by [F6] gives the required homotopy on the ordinary product with the interval. Consequently $f g h^{-1}\simeq\operatorname{id}_{|N|}$. Together with step 3.1 this proves $M\simeq|N|$ by actual inverse maps. [A1, F3, F6, step 1.1, step 1.2, step 2.1, step 3.1, construct]

5.1 Simplicial and singular integral chains are free. Their natural comparison is a homology isomorphism by [F5]. Applying the natural cohomological universal-coefficient short exact sequences gives isomorphisms on the Ext and Hom terms, hence on cohomology by the elementary exact-sequence diagram argument. Therefore $H^*_{\mathrm{simp}}(N;\mathbb F_2)\cong H^*_{\mathrm{sing}}(|N|;\mathbb F_2)$. The homotopy equivalence of step 4.1 identifies this with $H^*_{\mathrm{sing}}(M;\mathbb F_2)$. Two subordinate partitions give homotopic maps $f$ by convex interpolation: their combined support at $x$ consists entirely of sets containing $x$. For a refinement, the composed nerve map and the original partition map have the same property and are homotopic by the same interpolation. Thus the cohomology comparison is independent of those choices and natural under refinement; the choices of $g$ merely supply its inverse. [F2, F3, F5, step 4.1, algebra]

6.1 If $M$ is empty, the nerve has no nonempty simplex and both realizations/maps are empty. A singleton simplex is handled by its chosen point and the same geodesic contraction. Infinite covers cause no compact-image assumption on a thick realization: continuity follows simplexwise and local finiteness of the partition, and the homotopy is built on actual CW prisms. Full AC supplies the choices in [A1] and [F2]; no extra choice strength is introduced. [A1, F1, F2, F3, step 1.1, step 2.1, step 4.1, step 5.1] ∎
