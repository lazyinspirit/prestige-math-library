---
id: lem-universal-complex-flag-bundle-is-bt-n
kind: lemma
title: The universal complex flag bundle is BT-n
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-complex-flag-bundle-and-chern-roots", "def-axiom-of-choice", "thm-stable-stiefel-space-is-contractible", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "thm-milnor-join-model-is-a-contractible-free-g-space", "thm-principal-bundles-are-classified-by-maps-to-bg", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-fibration-sequence-is-natural", "thm-whitehead-theorem", "lem-cohomology-ring-of-infinite-complex-projective-space", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-subordinate-partitions-of-unity-exist", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "def-chern-classes-from-the-projective-bundle-relation", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes"]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from partitions of unity, bundle classification, Whitehead and Kunneth."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 34-35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Universal flag bundle, maximal torus and splitting principle, printed pp.123-132"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 section 3"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "BT and the flag bundle, printed pp.208-210"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC and let $n\geq1$. Let $E\mathbb U(n)$ be the model $V_n(\mathbb C^\infty)$ of the
universal principal $\mathbb U(n)$-bundle, so that
$B\mathbb U(n)=E\mathbb U(n)/\mathbb U(n)=\operatorname{Gr}_n(\mathbb C^\infty)$,
and let $T^n\subseteq\mathbb U(n)$ be the maximal torus of diagonal unitary
matrices. Then the complete flag bundle of the universal rank-$n$ complex
bundle is homotopy equivalent over $B\mathbb U(n)$ to $BT^n$, and $BT^n$ is
homotopy equivalent to $(\mathbb{CP}^\infty)^n$.

Here one may take the product of the standard circle classifying bundles as
the model of $BT^n$; its map to $B\mathbb U(n)$ is the sum of the coordinate
lines. The flag identification uses the equivalent quotient model
$V_n(\mathbb C^\infty)/T^n$, with its displayed map to $B\mathbb U(n)$.

Under the explicit equivalence constructed below the Chern roots $t_i=c_1(L_i)$ of
[[def-complex-flag-bundle-and-chern-roots]] are the coordinate generators:
$$H^*(BT^n;\mathbb Z)=\mathbb Z[t_1,\dots,t_n],$$
the $i$-th tautological line being the pullback of the universal line from the
$i$-th factor. The symmetric group $\Sigma_n$ acts by bundle maps over
$B\mathbb U(n)$, permuting the factors and the $t_i$, so the image of the flag
pullback $q^*$ is contained in the symmetric invariants of
$\mathbb Z[t_1,\dots,t_n]$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the classifying-space and Kunneth suppliers ([[def-axiom-of-choice]]).

[F1] The stable Stiefel space $V_n(\mathbb C^\infty)$ is contractible, and $\mathbb U(n)$ acts freely on it with quotient the Grassmannian $\operatorname{Gr}_n(\mathbb C^\infty)$, the chosen model of $B\mathbb U(n)$ carrying the universal rank-$n$ bundle ([[thm-stable-stiefel-space-is-contractible]], [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F2] For $G=S^1$ the Milnor bundle $ES^1\to BS^1$ is a numerable principal bundle with contractible total space, and $BS^1$ is the weak CW colimit $\mathbb{CP}^\infty$ ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F3] Numerable principal bundles over CGWH bases of CW type are classified by maps to the Milnor model: $[X,BG]\cong\operatorname{Bun}^{\mathrm{num}}_G(X)$ ([[thm-principal-bundles-are-classified-by-maps-to-bg]]).

[F4] For a fibration $F\to P\to B$ with contractible total space, the long exact sequence gives $\pi_k(B)\cong\pi_{k-1}(F)$ for $k\geq2$. If $F$ is path connected, its exact low-degree segment also gives $\pi_1(B)=0$; and if $P$ is path connected, the quotient base $B$ is path connected as a continuous image ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F5] The homotopy long exact sequence is natural for maps of based fibrations ([[thm-fibration-sequence-is-natural]]).

[F6] A map of CW complexes inducing isomorphisms on all homotopy groups is a homotopy equivalence ([[thm-whitehead-theorem]]).

[F7] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ with $|u|=2$, with free finitely generated homology in each degree, and the cohomological Kunneth cross product identifies the cohomology ring of a finite product of such spaces with the tensor product of the factors when the coefficient ring is a PID and the homology of one factor is finite free in each degree ([[lem-cohomology-ring-of-infinite-complex-projective-space]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F8] The iterated flag construction gives ordered orthogonal lines splitting the pulled-back bundle, and its total space is paracompact Hausdorff CGWH of CW type ([[def-complex-flag-bundle-and-chern-roots]]).

[F9] Stable Grassmannians have their Schubert CW structures ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]). Under AC (hence DC), paracompact Hausdorff chart covers admit subordinate partitions of unity ([[thm-subordinate-partitions-of-unity-exist]]); numerable fiber bundles are Hurewicz, hence Serre, fibrations ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F10] For a complex line, $c_1(L)=e(L_{\mathbb R})$ with the complex orientation ([[def-chern-classes-from-the-projective-bundle-relation]]), and this Euler class is natural for oriented pullbacks ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the universal principal $\mathbb U(n)$-bundle $E\mathbb U(n)=V_n(\mathbb C^\infty)$, and its maximal torus $T^n$.

1.1 Write $V=V_n(\mathbb C^\infty)$ and $Q=\operatorname{Fl}(\gamma_n)$. A frame $(v_1,\ldots,v_n)$ determines the flag spanned by its first $i$ vectors. Two frames give the same flag precisely when their individual vectors differ by unit scalars, so this identifies $Q$ with $V/T^n$ over the Grassmannian. This is a topological identification: in a Grassmannian graph chart, Gram–Schmidt identifies the frame projection with $U\times U(n)\to U$; the flag construction in [F8] identifies the corresponding flag chart with $U\times U(n)/T^n$. These identifications agree on overlaps. The stable graph formulas are continuous on each finite stage, and their inverses remain continuous after multiplying by the compact group $U(n)$, so give the ordinary stable bundle charts. Equivalently, over a flag chart choose a nonzero local section of each orthogonal line and normalize it; the resulting unit vectors give local sections of $V\to Q$. Thus this is a principal $T^n$-bundle, and $L_i$ is its $i$-th coordinate line. The Grassmannian is a paracompact Hausdorff CW complex by [F9], its tautological charts are numerable by [F9], and [F8] supplies that $Q$ is paracompact Hausdorff CGWH of CW type. Applying [F9] to the flag chart cover makes $V\to Q$ numerable. [F1, F8, F9]

1.2 Let $P=(\mathbb{CP}^\infty)^n$ with ordinary product topology and let $A=(S^\infty)^n\to P$ be the product of the standard circle bundles. These are the circle models of [F2]. A product of their finitely many local charts is an ordinary principal $T^n$-chart; multiplying the finitely many partition functions gives a support-subordinate locally finite numeration. Their total product is contractible, by taking the product of their contractions. Moreover this product is a classifying bundle, without assuming that assertion from contractibility: a numerable principal $T^n$-bundle $D\to X$ gives the $n$ circle bundles $D/K_i$, where $K_i$ is the kernel of the $i$-th coordinate homomorphism. Its charts and numeration descend to each quotient. The map $D\to\prod_X(D/K_i)$ is a bundle isomorphism, as is seen in every principal chart, where it is the identity of $(S^1)^n$. Conversely a finite collection of numerable circle bundles has a numerable fiber product by multiplying partitions. These two constructions are inverse on isomorphism classes. By [F3] for $S^1$, such classes are therefore naturally $\prod_i[X,\mathbb{CP}^\infty]=[X,P]$; the equality holds since maps and homotopies into finite products are coordinatewise. Thus $P$ is a model of $BT^n$. [F2, F3]

1.3 The ordinary space $P$ is a CW complex. Here the countability qualification matters: each factor has countably many cells by [F9], so the finite product CW structure has the ordinary product topology. One can check the latter directly by exhausting each of two countable CW complexes by finite subcomplexes $X_j,Y_j$. If $W$ is open in the product cell topology and $(a,b)\in W$, start with a compact product neighborhood $K_1\times M_1\subset W$ in $X_1\times Y_1$. Inductively choose compact neighborhoods $K_{j+1}$ of $K_j$ and $M_{j+1}$ of $M_j$ in the next finite stages with $K_{j+1}\times M_{j+1}\subset W$: compactness first gives product neighborhoods at each point of $K_j$, then a finite subcover gives the union in the first coordinate and intersection in the second. The unions of their interiors are open by the weak topologies and their product lies in $W$. This proves equality of the product and cell topologies; iterate finitely. Closure finiteness and the cell characteristic maps follow from products of the finite-stage cells. [F9]

2.1 Send a frame to its ordered unit vectors, obtaining a continuous $T^n$-equivariant map $V\to A$. It descends to $f:Q\to P$, sending a flag to its ordered orthogonal lines viewed as lines in $\mathbb C^\infty$. The principal fiber map is the identity of $T^n$ after choosing corresponding basepoints. Both bundle projections are Serre fibrations by [F9]. Their total spaces are contractible by [F1] and step 1.2. For every $k\geq2$, the connecting maps identify each base's $\pi_k$ with $\pi_{k-1}(T^n)$ by [F4], and naturality [F5] identifies $f_*$ with the identity through these isomorphisms. The low-degree exact sequence gives $\pi_1=0$ since $T^n$ is path connected. Both bases are path connected as images of their contractible total spaces, so $f$ is a weak homotopy equivalence in every degree. To apply [F6] correctly to the CW-type space $Q$, choose a homotopy equivalence $h:C\to Q$ with $C$ CW. The composite $fh:C\to P$ is a weak equivalence of CW complexes, hence a homotopy equivalence. Since $h$ is also a homotopy equivalence, so is $f$. The bundle over $Q$ is the pullback of the classifying product bundle along $f$, hence is itself classifying: precomposition with a homotopy equivalence gives bijections $[X,Q]\cong[X,P]$ for every $X$. This licenses the quotient model $Q=BT^n$ over $BU(n)$. [F1, F4, F5, F6, F9, step 1.1, step 1.2, step 1.3]

3.1 Explicitly, the $i$-th coordinate of $f$ is the line $L_i$ itself, so $L_i$ is the pullback of the standard tautological line on the $i$-th factor. By [F10], $t_i=f^*\operatorname{pr}_i^*u$ with the tautological Euler generator $u$ of [F7]; no sign change to the dual-line convention is made. Iterating [F7] is valid because a projective-space factor has finite free integral homology in each degree. It gives $H^*(P;\mathbb Z)=\mathbb Z[u_1,\ldots,u_n]$, and the homotopy equivalence $f$ gives the asserted ring on $Q$. [F7, F10, step 2.1]

4.1 Permutation matrices normalize $T^n$. Right multiplication therefore descends from $V$ to homeomorphisms of $Q$ covering the identity on $BU(n)$; it need not be an equivariant automorphism of the original principal $U(n)$-bundle. On the ordered orthogonal lines it is the corresponding permutation, and $f$ intertwines this action with permutation of the coordinates of $P$. Thus it permutes the $t_i$. For any $a\in H^*(BU(n);\mathbb Z)$ and any such homeomorphism $\sigma$, the equality $q\sigma=q$ gives $\sigma^*q^*a=q^*a$. The image is therefore contained in the symmetric invariants, as claimed. [F1, F8, step 3.1]

5.1 For $n=1$, there are no flag-construction steps: $Q=BU(1)=\mathbb{CP}^\infty$, $f$ is the identity, the sole line is the universal line and the permutation group is trivial. The hypothesis $n\geq1$ excludes rank zero; these universal bases are nonempty. All products are finite and $\mathbb Z$ is nonzero. AC is inherited from classification, partitions, Whitehead and Kunneth, not from any finite choice of coordinates. [A1, F3, F6, F7, F8, F9, step 3.1] ∎

## Source notes

The explicit ordered-line map compares the quotient flag model with the product circle model. The classifying property of the latter is proved by the coordinate quotient/fiber-product argument, not inferred merely from a free action. For the ordinary topology of the countable CW product, Hatcher, Algebraic Topology, Appendix Theorem A.6, printed p.524, proves the finite-exhaustion neighborhood argument used in step 1.3: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf . Miller's Lectures 34–35 and May's Chapter 24 section 3 provide the flag/splitting context.
