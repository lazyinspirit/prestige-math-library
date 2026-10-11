---
id: lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap
kind: lemma
title: "General linear frame spaces have the Stiefel cohomology gap"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [cor-compact-hausdorff-partitions-of-unity, cor-euclidean-compactness-equivalence-chart,
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

**Given:** Integers $s,n_i,N_i$ with $n_i\ge1$, $N_i\ge n_i+1$; the field $k$;
the spaces $U_N$, $\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$ and
$V_n(\mathbb C^N)$ with the subspace and product topologies; the Axiom of
Choice [[def-axiom-of-choice]].

[F1] Stiefel spaces and Gram-Schmidt
([[def-stiefel-space-grassmannian-and-tautological-bundle]],
[[thm-gram-schmidt-orthonormalisation]]): $V_n(\mathbb C^N)$ is the space of
ordered orthonormal $n$-frames in $\mathbb C^N$ with the subspace topology of
$(\mathbb C^N)^n$; Gram-Schmidt sends a linearly independent list
$(v_0,\dots,v_{n-1})$ to the orthonormal list $(e_0,\dots,e_{n-1})$ spanning
the same flags, by the displayed recursion.

[F2] Submersions and regular level sets
([[def-immersion-submersion-and-constant-rank-map]],
[[cor-regular-level-set-local-graph-theorem]],
[[def-smooth-manifold]]): a regular level set of a $C^\infty$ map between open
subsets of Euclidean spaces is locally a $C^\infty$ graph over the kernel of
the differential, hence a smooth submanifold of the ambient Euclidean space of
the corresponding dimension.

[F3] Compactness and triangulation
([[cor-euclidean-compactness-equivalence-chart]],
[[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]],
[[def-geometric-realization-of-an-abstract-simplicial-complex]],
[[def-cw-complex-with-closure-finiteness-and-weak-topology]]): a closed and
bounded subset of a Euclidean space is compact; a compact smooth manifold,
viewed as a manifold with corners with no corners, has a finite smooth
triangulation, i.e. is homeomorphic to the realization of a finite abstract
simplicial complex, and a finite simplicial complex is a finite CW complex
whose cells are its open simplices.

[F4] Bundles, paracompactness and fibrations
([[def-locally-trivial-fiber-bundle]], [[prop-compact-spaces-are-paracompact]],
[[cor-compact-hausdorff-partitions-of-unity]],
[[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]): a compact Hausdorff
space is paracompact, every open cover of a compact Hausdorff space admits a
finite subordinate partition of unity, so a locally trivial bundle over a
compact Hausdorff base is numerable, and every numerable fiber bundle with its
ordinary product charts is a Hurewicz fibration, hence a Serre fibration; the
pullback of a locally trivial bundle along a continuous map is a locally
trivial bundle with the same fiber.

[F5] The cohomological Serre spectral sequence
([[thm-cohomological-serre-spectral-sequence]]): for a Serre fibration
$p:E\to B$ over a path-connected CW complex and a commutative unital ring $R$,
there is a natural first-quadrant spectral sequence
$E_2^{a,b}\cong H^a(B;\mathcal H^b(p;R))$, with differentials
$d_r:E_r^{a,b}\to E_r^{a+r,b-r+1}$, strongly converging to $H^{a+b}(E;R)$;
$\mathcal H^0(p;R)$ is the constant system $R$ when the fibers are nonempty and
connected.

[F6] Cohomology of spheres
([[cor-homology-of-spheres]],
[[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]): reduced
homology of $S^d$ is $R$ in degree $d$ and zero otherwise; over a field $k$
the universal coefficient sequence gives $H^0(S^d;k)\cong k$, $H^d(S^d;k)\cong
k$ and $H^j(S^d;k)=0$ for $1\le j\le d-1$. Nonempty spheres are path-connected
([[cor-euclidean-spheres-are-path-connected]],
[[def-path-connected]]).

[F8] Local connectedness arguments
([[def-connected-space]], [[def-locally-trivial-fiber-bundle]]): if $E\to B$
is a locally trivial bundle with nonempty path-connected fiber over a connected
base, then $E$ is path-connected: the set of base points whose entire fiber is
path-connected to a fixed point of $E$ is open by local triviality and closed
by applying local triviality near a limit point, hence is all of $B$ by
connectedness.

[A1] AC is used through the partition-of-unity, triangulation and
Serre-spectral-sequence suppliers of [F3]-[F5]; the Gram-Schmidt, level-set and
degree bookkeeping arguments are choice-free
([[def-axiom-of-choice]]).

## Proof

1.1 **The frame retraction.** Fix $n\le N$ and let $A\in\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$ have columns $v_0,\dots,v_{n-1}$, a linearly independent list. Applying the Gram-Schmidt recursion of [F1] to $(v_0,\dots,v_{n-1})$ gives an orthonormal list $(e_0,\dots,e_{n-1})$ with $\operatorname{span}(e_0,\dots,e_{k-1})=\operatorname{span}(v_0,\dots,v_{k-1})$ for every $k$, so the upper triangular matrix $R$ with $R_{jk}=\langle v_k,e_j\rangle$ for $j<k$, $R_{kk}=\lVert u_k\rVert>0$ and $R_{jk}=0$ for $j>k$ satisfies $A=QR$ with $Q=(e_0,\dots,e_{n-1})\in V_n(\mathbb C^N)$. The Gram-Schmidt formulas are continuous rational expressions with positive denominators on the full-rank locus, so $A\mapsto(Q(A),R(A))$ is continuous. Writing $R=DU$ with $D$ the diagonal part and $U$ unit upper triangular, the family $t\mapsto Q(A)\bigl((1-t)D+tI\bigr)\bigl((1-t)U+tI\bigr)$ is continuous, has invertible upper triangular second factor with positive diagonal for every $t\in[0,1]$, and connects $A$ to $Q(A)$ inside $\operatorname{Inj}(\mathbb C^n,\mathbb C^N)$; at $t=1$ it is $Q(A)$, so $A\mapsto Q(A)$ is a deformation retraction onto $V_n(\mathbb C^N)$. This proves claim 1 and shows that $U_N$ is homotopy equivalent to $\prod_iV_{n_i}(\mathbb C^{N_i})$. [given, F1]

1.2 **$V_n(\mathbb C^N)$ is a compact smooth manifold.** Identify $\mathbb C^{N\times n}$ with $\mathbb R^{2Nn}$ and let $\operatorname{Herm}(n)$ be the real vector space of Hermitian $n\times n$ matrices, of dimension $n^2$. The map $f(A)=A^*A-I_n$ is smooth, and at a full-rank $A$ its differential $dA\mapsto A^*dA+dA^*A$ is surjective onto $\operatorname{Herm}(n)$: for Hermitian $B$ the matrix $dA=\tfrac12A(A^*A)^{-1}B$ satisfies $A^*dA+dA^*A=B+B^*=2B$. Hence $I_n$ is a regular value of $f$ on the full-rank locus, which contains $V_n=f^{-1}(I_n)$, and the regular-level-set theorem of [F2] makes $V_n$ a smooth submanifold of $\mathbb C^{N\times n}$. It is closed in $\mathbb C^{N\times n}$ as the preimage of a point under the continuous map $A\mapsto A^*A$, and bounded because every entry of an orthonormal frame has modulus at most $1$; by the closed-and-bounded compactness criterion of [F3], $V_n$ is compact. [given, F2, F3]

2.1 **The forgetting map is a numerable Serre fibration.** Fix a frame $w\in V_{n-1}(\mathbb C^N)$ and let $U$ be the open neighbourhood of $w$ consisting of frames for which the orthogonal projection onto the orthogonal complement of $\operatorname{span}(w)$ restricts to an isomorphism; Gram-Schmidt on the projected last vector identifies the part of $V_n(\mathbb C^N)$ over $U$ with $U\times S^{2(N-n)+1}$ over $U$, continuously and with continuous inverse. Hence forgetting the last column is a locally trivial fiber bundle with fiber the unit sphere $S^{2(N-n)+1}$, which is nonempty. The base $V_{n-1}(\mathbb C^N)$ is compact Hausdorff by step 1.2, hence paracompact and admitting finite subordinate partitions of unity for its open covers by [F4]; therefore the bundle is numerable, and by [F4] it is a Hurewicz fibration and in particular a Serre fibration. [F1, F4, step 1.2]

3.1 **Finite CW model and path-connectedness.** By the triangulation theorem of [F3] applied to the compact smooth manifold $V_n(\mathbb C^N)$, there is a finite simplicial complex $K_n$ and a homeomorphism $|K_n|\to V_n(\mathbb C^N)$. A finite simplicial complex is a finite CW complex: its cells are the open simplices, the characteristic maps are the inclusions of the closed simplices, closure finiteness holds because there are finitely many simplices, and the weak topology agrees with the topology of the realization because the realization is the finite union of its closed simplices. Hence $V_n(\mathbb C^N)$ is homeomorphic to a finite CW complex, as claimed in claim 2. For path-connectedness, induct on $n$. The space $V_0(\mathbb C^N)$ is a point. For $n\ge1$ the map $V_n(\mathbb C^N)\to V_{n-1}(\mathbb C^N)$ is the locally trivial bundle of step 2.1 with fiber the nonempty path-connected sphere $S^{2(N-n)+1}$ by [F6], and the base is connected by the induction hypothesis; the local connectedness argument of [F8] then makes $V_n(\mathbb C^N)$ path-connected. This completes claim 2. [F3, F6, F8, step 2.1]

4.1 **The cohomology gap for one factor.** Fix $n\le N$ and set $d=2(N-n)+1$. We prove by induction on $n$ that $H^0(V_n(\mathbb C^N);k)\cong k$ and $H^j(V_n(\mathbb C^N);k)=0$ for $1\le j\le d-1=2(N-n)$. The case $n=0$ is the point. For $n\ge1$, transfer the bundle of step 2.1 along the homeomorphism $|K_{n-1}|\to V_{n-1}(\mathbb C^N)$ of step 3.1: the pullback is a numerable fiber bundle over the finite CW complex $|K_{n-1}|$ with fiber $S^d$, hence a Serre fibration by [F4], and its total space is homeomorphic to $V_n(\mathbb C^N)$. The base is path-connected by step 3.1 and the fiber is connected, so [F5] applies with the constant local system $\mathcal H^0=k$ and $E_2^{a,b}\cong H^a(|K_{n-1}|;\mathcal H^b)$; by [F6], $\mathcal H^0=k$, $\mathcal H^d=k$ and $\mathcal H^b=0$ for $1\le b\le d-1$. In total degree $m\le d-1$, a nonzero $E_2^{a,b}$ with $a+b=m$ must have $b=0$: for $b\ge1$ either $b\le d-1$ gives $\mathcal H^b=0$ or $b\ge d>m$ is impossible in total degree $m$. Hence $E_2^{m,0}=H^m(|K_{n-1}|;k)$, which by the induction hypothesis is $k$ for $m=0$ and vanishes for $1\le m\le\min(d-3,2(N-n+1))$; here $d-3=2(N-n)-2\le2(N-n+1)-1$ for $n\le N$, so $H^1,\dots,H^{d-1}$ of the base all vanish except possibly at the single degree $d-2$, which is irrelevant because we only need $E_2^{m,0}$ for $m\le d-1$: for $m=d-1=d-2+1$ we need $H^{d-1}(|K_{n-1}|;k)$; since $d-1=2(N-n)\le2(N-n+1)=d'+1$ with $d'=2(N-(n-1))+1$, and the induction hypothesis gives vanishing of $H^j(V_{n-1})$ for $1\le j\le2(N-n+1)\ge d-1$, we get $H^{d-1}(|K_{n-1}|;k)=0$ for $d-1\ge1$. Thus $E_2^{m,0}=k$ for $m=0$ and $0$ for $1\le m\le d-1$. No differential changes $E_\infty^{m,0}$ for $m\le d-1$: for $r\ge2$ a differential into bidegree $(m,0)$ has source bidegree $(m-r,r-1)$ with $r-1\ge1$ and total degree $m-1\le d-2$, whose $E_2$ group vanishes because either its fiber degree lies in $[1,d-1]$ or its base degree is negative; a differential out of $(m,0)$ has target fiber degree $1-r<0$, impossible in the first quadrant; and the $r=1$ differentials are absorbed in the $E_2$ page. The abutment filtration therefore gives $H^m(V_n(\mathbb C^N);k)\cong E_\infty^{m,0}\cong E_2^{m,0}$, which is $k$ for $m=0$ and $0$ for $1\le m\le d-1$, completing the induction. [F4, F5, F6, step 2.1, step 3.1]

5.1 **The product.** By step 1.1 it suffices to compute the cohomology of $\prod_{i=1}^sV_{n_i}(\mathbb C^{N_i})$, and we induct on $s$. For $s=0$ the product is a point. For $s\ge1$ let $P=\prod_{i<s}V_{n_i}(\mathbb C^{N_i})$ and consider the projection $P\times V_{n_s}(\mathbb C^{N_s})\to P$, a trivial bundle with fiber $V_{n_s}(\mathbb C^{N_s})$, hence numerable and a Serre fibration by [F4]. By step 3.1 each factor and, inductively, $P$ is homeomorphic to a finite CW complex, and a finite product of finite CW complexes is again a finite CW complex: the cells $e\times e'$ with the product characteristic maps $D^a\times D^b\to D^{a+b}$ give a finite cell decomposition, closure finiteness holds because there are finitely many cells, and the weak topology of the product cell structure agrees with the product topology for finite compact Hausdorff complexes, where the compactly generated product topology coincides with the ordinary one. So [F5] applies to the projection with constant coefficient system in fiber degree $0$. If $H^0(P;k)\cong k$ and $H^j(P;k)=0$ for $1\le j\le r_{s-1}=\min_{i<s}2(N_i-n_i)$ by induction, and if $H^0(V_{n_s};k)\cong k$, $H^j(V_{n_s};k)=0$ for $1\le j\le2(N_{s}-n_s)$ by step 4.1, then in total degree $m\le r_s=\min(r_{s-1},2(N_s-n_s))$ every nonzero $E_2^{a,b}$ with $a+b=m$ has $b=0$, for $b\ge1$ would need fiber cohomology in degree $b\le r_s\le2(N_s-n_s)$, which vanishes; the differential bookkeeping of step 4.1 then gives $H^m(P\times V_{n_s};k)\cong H^m(P;k)$, which is $k$ for $m=0$ and $0$ for $1\le m\le r_s$. This proves claim 3, $H^0(U_N;k)\cong k$ and $H^j(U_N;k)=0$ for $1\le j\le r_N$, by the homotopy equivalence of step 1.1. [F4, F5, step 1.1, step 3.1, step 4.1]

6.1 **Conclusion.** Steps 1.1 and 5.1 give claims 1 and 3; steps 1.2, 2.1 and 3.1 give claim 2. AC is consumed only through the named compactness, triangulation, partition-of-unity and spectral-sequence suppliers [F3]-[F5], as recorded in [A1]. [given, A1, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- The statement is the cohomological input consumed by the equivariant
  Stiefel approximation lemma of this page; it asserts the gap
  $H^j(U_N;k)=0$ for $1\le j\le r_N$ and nothing above $r_N$, where the
  characteristic classes of the bundle live.

- The argument is a local finite-cell computation: the sphere bundle is a
  numerable bundle over a finite CW model, so the Serre spectral sequence has
  finite pages and the low-degree bookkeeping uses only the base degree with
  fiber degree zero.
