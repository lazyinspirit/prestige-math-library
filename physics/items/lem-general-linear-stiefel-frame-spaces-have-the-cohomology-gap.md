---
id: lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap
kind: lemma
title: "General linear frame spaces have the Stiefel cohomology gap"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [thm-choice-implies-dependent-implies-countable-choice, lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology, cor-compact-hausdorff-partitions-of-unity, cor-euclidean-compactness-equivalence-chart,
       cor-euclidean-spheres-are-path-connected, cor-homology-of-spheres,
       cor-regular-level-set-local-graph-theorem, def-axiom-of-choice,
       def-connected-space, def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-geometric-realization-of-an-abstract-simplicial-complex,
       def-immersion-submersion-and-constant-rank-map, def-locally-trivial-fiber-bundle,
       def-path-connected, def-smooth-manifold,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       prop-compact-spaces-are-paracompact,
       thm-cohomological-serre-spectral-sequence,
       thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations,
       thm-gram-schmidt-orthonormalisation,
       thm-numerable-fiber-bundles-are-hurewicz-fibrations,
       thm-universal-coefficient-theorem-for-cohomology-over-a-pid]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology (Cambridge University Press, 2002); author-hosted complete PDF, cited sections read in the extracted text"
      url: "https://www.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.2 pp. 375-378 (fiber bundles over paracompact bases are fibrations, Theorem 4.41); the cohomology of the complex Stiefel manifolds in the standard sphere-bundle induction; Example 0.6 and Section 3.2 (cells and cohomology of the spheres)"
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "3.1 (the Stiefel manifold of frames is an n-acyclic free manifold for a linear group)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Fix integers $s\ge1$,
$n_i\ge1$ and $N_i\ge n_i+1$ for $1\le i\le s$, let $k$ be a field, and put
$$U_N=\prod_{i=1}^{s}\operatorname{Inj}(\mathbb C^{n_i},\mathbb C^{N_i}),\qquad r_N=2\min_{i}(N_i-n_i),$$
where $\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$ is the open set of
injective, equivalently full-rank, complex $N\times n$ matrices. Then:

1. each $\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$ is homotopy equivalent to
   the Stiefel space $V_n(\mathbb C^N)=\{A\in\mathbb C^{N\times n}:A^*A=I_n\}$
   of orthonormal frames
   ([[def-stiefel-space-grassmannian-and-tautological-bundle]]);
2. each $V_n(\mathbb C^N)$ is a compact path-connected smooth manifold and is
   homeomorphic to a finite CW complex, and the map
   $V_n(\mathbb C^N)\to V_{n-1}(\mathbb C^N)$ forgetting the last column is a
   numerable locally trivial fiber bundle with fiber $S^{2(N-n)+1}$, hence a
   Hurewicz and a Serre fibration;
3. $H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$.

No claim is made about the cohomology of $U_N$ above degree $r_N$, and no
GL-equivariance of the retractions or trivializations below is asserted.

## Facts & Assumptions

**Given:** Integers $s,n_i,N_i$ with $n_i\ge1$, $N_i\ge n_i+1$; the field $k$; the spaces $U_N$, $\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$ and $V_n(\mathbb C^N)$ with the subspace and product topologies; the Axiom of Choice [[def-axiom-of-choice]].

[F1] Stiefel spaces and Gram-Schmidt ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-gram-schmidt-orthonormalisation]]): $V_n(\mathbb C^N)$ is the space of ordered orthonormal $n$-frames in $\mathbb C^N$ with the subspace topology of $(\mathbb C^N)^n$; Gram-Schmidt sends a linearly independent list $(v_0,\dots,v_{n-1})$ to the orthonormal list $(e_0,\dots,e_{n-1})$ spanning the same flags, by the displayed recursion.

[F2] Submersions and regular level sets ([[def-immersion-submersion-and-constant-rank-map]], [[cor-regular-level-set-local-graph-theorem]], [[def-smooth-manifold]]): a regular level set of a $C^\infty$ map between open subsets of Euclidean spaces is locally a $C^\infty$ graph over the kernel of the differential, hence a smooth submanifold of the ambient Euclidean space of the corresponding dimension.

[F3] Compactness and triangulation ([[cor-euclidean-compactness-equivalence-chart]], [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], [[def-geometric-realization-of-an-abstract-simplicial-complex]], [[def-cw-complex-with-closure-finiteness-and-weak-topology]]): a closed and bounded subset of a Euclidean space is compact; a compact smooth manifold, viewed as a manifold with corners with no corners, has a finite smooth triangulation, i.e. is homeomorphic to the realization of a finite abstract simplicial complex, and a finite simplicial complex is a finite CW complex whose cells are its open simplices.

[F4] Bundles, paracompactness and fibrations ([[def-locally-trivial-fiber-bundle]], [[prop-compact-spaces-are-paracompact]], [[cor-compact-hausdorff-partitions-of-unity]], [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]): a compact Hausdorff space is paracompact, every open cover of a compact Hausdorff space admits a finite subordinate partition of unity, so a locally trivial bundle over a compact Hausdorff base is numerable, and every numerable fiber bundle with its ordinary product charts is a Hurewicz fibration, hence a Serre fibration; the pullback of a locally trivial bundle along a continuous map is a locally trivial bundle with the same fiber.

[F5] The cohomological Serre spectral sequence ([[thm-cohomological-serre-spectral-sequence]]): for a Serre fibration $p:E\to B$ over a path-connected CW complex and a commutative unital ring $R$, there is a natural first-quadrant spectral sequence $E_2^{a,b}\cong H^a(B;\mathcal H^b(p;R))$, with differentials $d_r:E_r^{a,b}\to E_r^{a+r,b-r+1}$, strongly converging to $H^{a+b}(E;R)$; $\mathcal H^0(p;R)$ is the constant system $R$ when the fibers are nonempty and connected.

[F6] Cohomology of spheres ([[cor-homology-of-spheres]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]): reduced homology of $S^d$ is $R$ in degree $d$ and zero otherwise; over a field $k$ the universal coefficient sequence gives $H^0(S^d;k)\cong k$, $H^d(S^d;k)\cong k$ and $H^j(S^d;k)=0$ for $1\le j\le d-1$. Spheres of dimension at least one are path-connected ([[cor-euclidean-spheres-are-path-connected]], [[def-path-connected]]).

[F7] Constant-sheaf comparison ([[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]): on a metric space with a contractible-open neighbourhood basis, the cohomology of the constant $k$-sheaf agrees naturally with singular cohomology. Euclidean open subsets and smooth submanifolds have this property by their ball charts.

[F8] A locally trivial bundle with nonempty path-connected fibre over a path-connected base has path-connected total space. Indeed, subdivide a base path into finitely many intervals lying in bundle charts, lift each interval using its product chart, and join the final lifted point to the desired point within the fibre. This follows directly from the product charts and path concatenation ([[def-path-connected]], [[def-locally-trivial-fiber-bundle]]).

[A1] AC supplies DC and countable choice by [[thm-choice-implies-dependent-implies-countable-choice]], meeting the explicit choice hypotheses in [F3] and [F4]. AC is used through the partition-of-unity, triangulation and Serre-spectral-sequence and constant-sheaf comparison suppliers of [F3]-[F7]; the Gram-Schmidt, level-set and degree bookkeeping arguments are choice-free ([[def-axiom-of-choice]]).

## Proof

1.1 **The frame retraction.** Fix $n\le N$ and let $A\in\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$ have columns $v_0,\dots,v_{n-1}$, a linearly independent list. Applying the Gram-Schmidt recursion of [F1] to $(v_0,\dots,v_{n-1})$ gives an orthonormal list $(e_0,\dots,e_{n-1})$ with $\operatorname{span}(e_0,\dots,e_{k-1})=\operatorname{span}(v_0,\dots,v_{k-1})$ for every $k$, so the upper triangular matrix $R$ with $R_{jk}=\langle v_k,e_j\rangle$ for $j<k$, $R_{kk}=\lVert u_k\rVert>0$ and $R_{jk}=0$ for $j>k$ satisfies $A=QR$ with $Q=(e_0,\dots,e_{n-1})\in V_n(\mathbb C^N)$. The Gram-Schmidt formulas are continuous rational expressions with positive denominators on the full-rank locus, so $A\mapsto(Q(A),R(A))$ is continuous. Writing $R=DU$ with $D$ the diagonal part and $U$ unit upper triangular, the family $t\mapsto Q(A)\bigl((1-t)D+tI\bigr)\bigl((1-t)U+tI\bigr)$ is continuous, has invertible upper triangular second factor with positive diagonal for every $t\in[0,1]$, and connects $A$ to $Q(A)$ inside $\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$; at $t=1$ it is $Q(A)$, so $A\mapsto Q(A)$ is a deformation retraction onto $V_n(\mathbb C^N)$. This proves claim 1 and shows that $U_N$ is homotopy equivalent to $\prod_iV_{n_i}(\mathbb C^{N_i})$. [given, F1]

1.2 **Compact smooth frame manifolds.** Let $f(A)=A^*A$ from the open full-rank locus of $\mathbb C^{N\times n}$ to the real vector space $\operatorname{Herm}(n)$. Its differential is $H\mapsto A^*H+H^*A$; for Hermitian $B$, taking $H=\tfrac12A(A^*A)^{-1}B$ gives $A^*H=H^*A=B/2$, hence differential $B$. Thus $I_n$ is a regular value and $V_n=f^{-1}(I_n)$ is a smooth submanifold by [F2]. It is closed in the ambient Euclidean space and bounded, since each frame column has norm one, so it is compact by [F3]. The subspace is Hausdorff and second countable, as required by the triangulation supplier. For $n=0$ it is a point. [given, F2, F3]

2.1 **The forgetting bundle.** Fix $w\in V_{n-1}(\mathbb C^N)$ and an orthonormal basis $c_1,\ldots,c_{N-n+1}$ of its orthogonal complement. For a nearby frame $w'$, put $P_{w'}=I-w'w'^*$. The vectors $P_{w'}c_j$ remain linearly independent near $w$, since their Gram determinant is continuous and equals one at $w$. Gram-Schmidt gives a continuously varying orthonormal basis $c_j(w')$ of the complement of $w'$. The map $(w',z)\mapsto(w',\sum_jz_jc_j(w'))$ for $z\in S^{2(N-n)+1}\subset\mathbb C^{N-n+1}$ trivializes the forgetting map; its continuous inverse takes the inner products with $c_j(w')$. This also covers $n=1$ over the point $V_0$. By step 1.2 the base is compact Hausdorff, so [F4] supplies a finite subordinate partition of unity and makes the bundle numerable, hence Hurewicz and Serre. [F1, F4, step 1.2]

3.1 **Finite CW model and path-connectedness.** By the triangulation theorem of [F3] applied to the compact smooth manifold $V_n(\mathbb C^N)$, there is a finite simplicial complex $K_n$ and a homeomorphism $|K_n|\to V_n(\mathbb C^N)$. A finite simplicial complex is a finite CW complex: its cells are the open simplices, the characteristic maps are the inclusions of the closed simplices, closure finiteness holds because there are finitely many simplices, and the weak topology agrees with the topology of the realization because the realization is the finite union of its closed simplices. Hence $V_n(\mathbb C^N)$ is homeomorphic to a finite CW complex, as claimed in claim 2. For path-connectedness, induct on $n$. The space $V_0(\mathbb C^N)$ is a point. For $n\ge1$ the map $V_n(\mathbb C^N)\to V_{n-1}(\mathbb C^N)$ is the locally trivial bundle of step 2.1 with fiber the nonempty path-connected sphere $S^{2(N-n)+1}$ by [F6], and the base is path-connected by the induction hypothesis; the local connectedness argument of [F8] then makes $V_n(\mathbb C^N)$ path-connected. This completes claim 2. [F3, F6, F8, step 2.1]

4.1 **The gap for one factor.** Induct on $n$, starting with $V_0$ a point. For $n\ge1$ put $d=2(N-n)+1$. The forgetting bundle of step 2.1 has fibre $S^d$ and base homeomorphic to a path-connected finite CW complex by step 3.1. The induction hypothesis gives vanishing of the base cohomology in degrees $1$ through $2(N-n+1)=d+1$. In the Serre spectral sequence [F5], [F6] makes all fibre rows in degrees $1,\ldots,d-1$ zero; the degree-zero coefficient system is constant $k$, since the fibre is connected. Consequently all $E_2$ terms of total degree $1,\ldots,d-1$ are zero, while $E_2^{0,0}=k$. No differential can enter $(0,0)$ or leave it in this first-quadrant sequence. Strong convergence therefore gives $H^0(V_n;k)=k$ and $H^j(V_n;k)=0$ for $1\le j\le d-1=2(N-n)$, completing the induction. No constancy of the top-degree fibre coefficient system is needed. [F4, F5, F6, step 2.1, step 3.1]

5.1 **The product.** By step 1.1 it suffices to compute the cohomology of $\prod_{i=1}^sV_{n_i}(\mathbb C^{N_i})$, and we induct on $s$. For $s=1$ this is step 4.1. For $s\ge2$ let $P=\prod_{i<s}V_{n_i}(\mathbb C^{N_i})$ and consider the projection $P\times V_{n_s}(\mathbb C^{N_s})\to P$, a trivial bundle with fiber $V_{n_s}(\mathbb C^{N_s})$, hence numerable and a Serre fibration by [F4]. By step 3.1 each factor and, inductively, $P$ is homeomorphic to a finite CW complex, and a finite product of finite CW complexes is again a finite CW complex: identify $D^a\times D^b$ with $D^{a+b}$ by radial rescaling between their unit balls; the product characteristic maps into the product space then give cells $e\times e'$ and a finite cell decomposition, closure finiteness holds because there are finitely many cells, and the weak topology of the product cell structure agrees with the product topology for finite compact Hausdorff complexes, where the compactly generated product topology coincides with the ordinary one. So [F5] applies to the projection with constant coefficient system in fiber degree $0$. If $H^0(P;k)\cong k$ and $H^j(P;k)=0$ for $1\le j\le r_{s-1}=\min_{i<s}2(N_i-n_i)$ by induction, and if $H^0(V_{n_s};k)\cong k$, $H^j(V_{n_s};k)=0$ for $1\le j\le2(N_{s}-n_s)$ by step 4.1, then in total degree $m\le r_s=\min(r_{s-1},2(N_s-n_s))$ every nonzero $E_2^{a,b}$ with $a+b=m$ has $b=0$, for $b\ge1$ would need fiber cohomology in degree $b\le r_s\le2(N_s-n_s)$, which vanishes; the differential bookkeeping of step 4.1 then gives $H^m(P\times V_{n_s};k)\cong H^m(P;k)$, which is $k$ for $m=0$ and $0$ for $1\le m\le r_s$. This proves claim 3, $H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$, by the homotopy equivalence of step 1.1. [F4, F5, step 1.1, step 3.1, step 4.1]

6.1 **The cohomology convention.** The full-rank spaces are Euclidean open subsets and the Stiefel spaces and their products are smooth metric manifolds with contractible-open chart bases. Thus [F7] identifies their constant-sheaf cohomology with the singular cohomology computed in steps 4.1 and 5.1; naturality carries the frame deformation retraction of step 1.1 to these comparisons. In particular the same gap holds for the constant-sheaf fibre cohomology used by the later derived pullback lemmas. [F7, step 1.1, step 1.2, step 4.1, step 5.1]

7.1 **Conclusion.** Steps 1.1 and 5.1 give claims 1 and 3; steps 1.2, 2.1 and 3.1 give claim 2. AC is consumed only through the named compactness, triangulation, partition-of-unity, spectral-sequence and constant-sheaf comparison suppliers [F3]-[F7], as recorded in [A1]. [given, A1, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎

## Remarks

- The statement is the cohomological input consumed by the equivariant Stiefel approximation lemma of this page; it asserts the gap $H^j(U_N;k)=0$ for $1\le j\le r_N$ and nothing above $r_N$, where the characteristic classes of the bundle live.

- The argument is a local finite-cell computation: the sphere bundle is a numerable bundle over a finite CW model, so the Serre spectral sequence has finite pages and the low-degree bookkeeping uses only the base degree with fiber degree zero.
