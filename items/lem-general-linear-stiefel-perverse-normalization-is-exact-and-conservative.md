---
id: lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative
kind: lemma
title: "General linear Stiefel perverse normalization is exact and conservative"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, def-canonical-t-structure-on-a-derived-category,
       def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-inverse-image-presheaf-and-sheaf, def-sheaf-on-topological-space,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom,
       lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]
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
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "2.1.1-2.1.3 and 2.1.9-2.1.15 (perverse t-structure, behavior under smooth pullback and refinement)"
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "5.1-5.2 (equivariant perverse sheaves defined by the forgetful restriction; quotient and induction equivalences), 3.1 (complex Stiefel resolutions)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the finite general
linear Stiefel resolution
$P_N=U_N\times X\to X_N=P_N/G$ of
[[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]
for $G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ acting on the separated
finite-type complex variety $X$, with base $B_N$, frame space $U_N$,
$u_N=\dim_{\mathbb C}U_N$, $g=\dim_{\mathbb C}G$ and
$s_N=\dim_{\mathbb C}B_N=u_N-g$. Write $Q_N$ for the finite-resolution functor
and let $\operatorname{pr}_X:P_N\to X$, $q_N:P_N\to X_N$ be the two
projections. Then:

1. the middle-perverse t-structure on $D^b_{G,c}(X;k)$ is detected by
   restriction to $X$: for every sufficiently large $N$ and every $a$,
   $A\in{}^pD_G^{\le a}$ holds if and only if the restriction of $A$ to $X$
   lies in ${}^pD^{\le a}(X;k)$, if and only if $Q_N(A)[s_N]$ lies in
   ${}^pD^{\le a}(X_N;k)$, and independently of the sufficiently large $N$;
2. the functor $A\mapsto Q_N(A)[s_N]$ is exact for these middle-perverse
   t-structures and conservative in the sense that $Q_N(A)=0$ if and only if
   $A=0$;
3. perverse truncations lift: for $A\in D^b_{G,c}(X;k)$ and all sufficiently
   large $N$ there is an equivariant perverse truncation
   ${}^p\tau_G^{\le a}A$ with
   $Q_N({}^p\tau_G^{\le a}A)[s_N]\cong{}^p\tau^{\le a}\bigl(Q_N(A)[s_N]\bigr)$,
   canonical up to unique isomorphism, and the family is independent of $N$;
4. at the degree-zero Hom stabilization bound $r_N\ge a-b$ for objects
   concentrated in ordinary degrees $[b,a]$, the ring comparison
   $\operatorname{End}_G(K)\cong\operatorname{End}_{X_N}(Q_NK)$ lifts finite
   families of orthogonal idempotents, and after the common shift $s_N$ the
   normalized functor preserves and reflects perverse concentration and
   simplicity.

## Facts & Assumptions

**Given:** The group $G$, the variety $X$, the resolution data $U_N,B_N,P_N,X_N$ and the functor $Q_N$ of [[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]; the ordinary middle-perverse t-structure of [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] on the ordinary constructible derived categories; the Axiom of Choice [[def-axiom-of-choice]]; the shift conventions of [[def-derived-category-of-an-abelian-category]] and [[def-derived-hom-in-the-bounded-setting]].

[F1] Smooth pullback and perverse exactness ([[lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure]]): for a smooth algebraic map $a:X\to Y$ of pure relative dimension $d$ the shifted pullback $a^*[d]$ is exact for the ordinary middle-perverse t-structures and commutes with truncation and cohomology; complex orientation gives $a^!=a^*[2d]$; a surjective $a$ has conservative normalized pullback reflecting the perverse support and cosupport inequalities.

[F2] The ordinary perverse core ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]): the middle-perverse structure is a bounded t-structure on $D_c^b(Y;k)$ independent of compatible refinement, its truncations and cohomology functors are defined and unique, and the heart is abelian of finite length with intermediate-extension simple objects.

[F3] The equivariant model ([[lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom]]): $D^b_{G,c}(X;k)$ is triangulated and locally small, restriction to $X$ is conservative, and $Q_N$ is fully faithful on ordinary intervals of width at most $r_N$ with a ring comparison at $m=0$ and retract closure; the resolution triples satisfy $\operatorname{pr}_X^*A_X\cong q_N^*Q_N(A)$.

[F4] The actual finite-resolution image and Hom comparisons, including interval $[0,0]$, are [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]]. Equivariant localization and ordinary restriction are [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]], and smooth local product comparison for open-inclusion $Rj_*$ is [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]].

[A1] AC is used through the ordinary perverse suppliers of [F1], [F2] and the resolution model of [F3]; the transport and uniqueness arguments below are canonical ([[def-axiom-of-choice]]).

## Proof

1.1 **The dimension correction.** The projections $\operatorname{pr}_X:P_N\to X$ and $q_N:P_N\to X_N$ are smooth surjective algebraic maps of pure relative complex dimensions $u_N$ and $g$, and $\operatorname{pr}_X^*A_X\cong q_N^*Q_N(A)$ by [F3]. Since $s_N+g=u_N$, this gives $q_N^*(Q_N(A)[s_N])[g]\cong\operatorname{pr}_X^*A_X[u_N]$. The left side is the normalized object under the perverse-exact functor $q_N^*[g]$, and the right side is $A_X$ under the perverse-exact functor $\operatorname{pr}_X^*[u_N]$. Thus the comparison uses the unshifted base object $A_X$, without an extra shift by $u_N$ on $X$. [F1, F3, given]

1.2 **Connected fibres and local systems.** Each $\operatorname{GL}_{n_i}(\mathbb C)$ is path connected: Gaussian elimination expresses an invertible matrix as a product of elementary matrices and nonzero diagonal matrices, each joined to the identity by a path. Each frame space $\operatorname{Inj}(\mathbb C^{n_i},\mathbb C^{N_i})$ is the continuous image of connected $\operatorname{GL}_{N_i}(\mathbb C)$ under its first-$n_i$-columns map, so $U_N$ is connected. A locally trivial bundle with connected fibre induces a surjection on fundamental groups: lift a base loop locally and join its endpoint to its initial point inside the fibre. Thus on a connected smooth invariant stratum $S$ both $q_N:U_N\times S\to S_N$ and $\operatorname{pr}_S:U_N\times S\to S$ induce surjective fundamental-group maps. Local trivializations define parallel transport by subdivision along paths; subdivision of a homotopy square proves homotopy invariance, and a sub-local-system is exactly a subspace of one stalk invariant under this loop transport, extended to all stalks by transport. Thus these pullbacks preserve and reflect irreducibility, since the full monodromy image is unchanged. If $L$ is an equivariant local system and $L_N=Q_NL$, any ordinary sub-local-system $M_N\subset L_N$ pulls back to a sub-local-system of $\operatorname{pr}_S^*L$. On the product the $U_N$ factor acts trivially on this monodromy representation and its subrepresentations, so $q_N^*M_N=\operatorname{pr}_S^*M$ for a local system $M$ on $S$. The actual resolution-image criterion in ordinary interval $[0,0]$ descends $M_N$ to an equivariant local system and the degree-zero Hom comparison lifts its injection. Hence $L$ is simple equivariantly if and only if $L_N$ is irreducible ordinarily, and by the connected-fibre pullbacks if and only if its underlying local system on $S$ is irreducible. [F3, F4, given]

2.1 **Detection via restriction to $X$.** By [F1] the shifted pullbacks $\operatorname{pr}_X^*[u_N]$ and $q_N^*[g]$ are exact for the ordinary middle-perverse t-structures and commute with truncation; hence, for every $a$, $q_N^*\bigl(Q_N(A)[s_N]\bigr)[g]=\operatorname{pr}_X^*(A_X[u_N])$ lies in the perverse aisle ${}^pD^{\le a}$ of $P_N$ if and only if $A_X$ lies in ${}^pD^{\le a}$ of $X$, and by exactness of $q_N^*[g]$ this is equivalent to $Q_N(A)[s_N]\in{}^pD^{\le a}(X_N)$. The same computation for the dual aisle identifies the two inequalities, so the structure is detected by restriction to $X$ and by the normalized resolution simultaneously. Independence of the sufficiently large $N$ follows because the conditions are those of the fixed ordinary object $A_X$. This proves claim 1. [F1, F3, step 1.1]

3.1 **Lift the truncation triangle.** Fix an arbitrary perverse cutoff $c$, and write $A_X$ for restriction of $A$. Let $T_N={}^p\tau^{\le c}(Q_N(A)[s_N])$ and $V_N={}^p\tau^{\ge c+1}(Q_N(A)[s_N])$. The ordinary perverse-exact smooth pullbacks [F1] give $q_N^*T_N\cong\operatorname{pr}_X^*({}^p\tau^{\le c}A_X)[s_N]$ and $q_N^*V_N\cong\operatorname{pr}_X^*({}^p\tau^{\ge c+1}A_X)[s_N]$. Since the two unshifted pullbacks are exact and conservative, the ordinary amplitudes of $T_N[-s_N]$ and $V_N[-s_N]$ equal those of the two ordinary truncations on $X$, independently of $N$. Choose one interval containing these amplitudes and that of $A$, enlarge it to include cones of the triangle arrows, and choose $r_N$ larger than its width. The image criterion [F3] lifts the two unshifted truncations, and degree-zero full faithfulness lifts their arrows to and from $A$. Complete the lifted first arrow to a distinguished triangle; exactness of $Q_N$ and full faithfulness identify its cone and connecting map with $V_N[-s_N]$ and its connecting map. Thus the whole truncation triangle lifts. On $X$ its outer objects lie in the desired two perverse aisles, by step 2.1. No arbitrary ordinary perverse object is assumed to descend. [F1, F2, F3, step 1.1, step 2.1]

4.1 **The perverse structure, uniqueness and conservativity.** Define the two equivariant aisles by ordinary restriction. Their shift closures are inherited from [F2]. For objects in opposite aisles, choose a single sufficiently large resolution for their ordinary amplitudes; step 2.1 places their normalized images in opposite ordinary perverse aisles, and the faithful degree-zero Hom comparison [F3] gives orthogonality. Step 3.1 supplies truncation triangles, so these aisles form a bounded t-structure. The usual truncation uniqueness follows from orthogonality: a map from an object in the lower aisle to $A$ factors uniquely through the lower truncation, as the Hom groups to the upper term and its $[-1]$ shift vanish. Consequently the lifts are canonical up to unique isomorphism and agree for different sufficiently large $N$. Step 2.1 makes $Q_N(-)[s_N]$ perverse exact. Finally, $Q_N(A)=0$ implies $\operatorname{pr}_X^*A_X=q_N^*Q_N(A)=0$; surjective exact $\operatorname{pr}_X^*$ gives $A_X=0$, and conservative restriction [F3] gives $A=0$. This proves claims 1–3, without applying a Hom bound to an arbitrary fixed small $N$. [F1, F2, F3, step 2.1, step 3.1]

4.2 **Projectors, concentration and simplicity.** Let $K\in D^b_{G,c}(X;k)$ have ordinary cohomology in $[b,a]$ with $a-b\le r_N$, so that the degree-zero ring comparison $\operatorname{End}_G(K)\cong\operatorname{End}_{X_N}(Q_NK)$ of [F3] is an isomorphism. A finite family of mutually orthogonal idempotents in $\operatorname{End}_{X_N}(Q_NK)$ summing to the identity pulls back to a finite family in $\operatorname{End}_G(K)$ with the same relations, and the idempotent splitting of [F3] splits each of them; the summands remain in $[b,a]$ because ordinary cohomology of a direct summand is a direct summand. By claims 1 and 2 the normalized functor is exact and conservative, so a nonzero proper equivariant subobject of a lift would give a nonzero proper ordinary subobject of the corresponding normalized object; this proves reflection of simplicity, which is the direction consumed by the semisimplicity application, as well as detection of perverse concentration. The preservation direction is proved below using the actual connected general linear group hypothesis and local-system descent. This proves claim 4. [F1, F2, F3, step 2.1, step 3.1]

5.1 **Underlying ordinary simplicity.** The equivariant truncations of step 3.1 and the localization adjunctions of [F4] define intermediate extension by the image of ${}^pH^0j_!\to{}^pH^0Rj_*$. A simple equivariant heart object $A$ has irreducible invariant support $Z$: the finite support components are permuted by connected $G$, hence individually invariant, and localization on a dense component would otherwise yield a nonzero proper subobject. Choose the invariant dense smooth open where its ordinary cohomology is locally constant; equivariance preserves this locus and algebraic constructibility gives a dense algebraic such open. The perverse inequalities force restriction there to be a local system $L[\dim Z]$. A proper equivariant sub-local-system yields a proper subobject by localization adjunction and perverse image, so $L$ is simple equivariantly. Absence of boundary subobjects and quotients identifies $A$ with $j_{!*}L[\dim Z]$ by the image and adjunction characterization of [F2]. Restriction is perverse exact by step 2.1 and commutes with localization in [F4], hence with that image. Step 1.2 makes $L$ irreducible ordinarily, so $A_X$ is the ordinary simple intersection complex of [F2]. [F2, F3, F4, step 2.1, step 3.1, step 4.1, step 1.2]

6.1 **Preservation after normalization.** Smooth dimension-shifted pullback along a locally trivial map with connected smooth fibres preserves ordinary simple intersection complexes: the fundamental-group surjection preserves irreducibility on the dense smooth open, smooth local product comparison commutes with $j_!$ and $Rj_*$ on boundary charts, and perverse exactness carries their intermediate-extension image to the same image upstairs. Here the fibres are irreducible frame spaces, so the inverse image of an irreducible support is irreducible. Apply this to $\operatorname{pr}_X$, with fibre $U_N$. For simple equivariant $A$, step 5.1 makes $A_X$ simple, so $\operatorname{pr}_X^*A_X[u_N]$ is simple. By step 1.1 this is $q_N^*(Q_N(A)[s_N])[g]$. Any nonzero proper subobject of $Q_N(A)[s_N]$ would give one upstairs through exact conservative $q_N^*[g]$, a contradiction. Thus normalization preserves simplicity; reflection is step 4.2 and concentration is step 2.1. Both directions use the same $s_N=u_N-g$ and stated ring-comparison threshold, with the actual product of connected general linear groups. [F1, F2, F3, F4, step 1.1, step 2.1, step 4.2, step 5.1]

7.1 **Conclusion.** Steps 1.1, 2.1, 3.1 and 4.1 prove claims 1–3, and steps 4.2, 5.1 and 6.1 claim 4. The dimension shift is $s_N=u_N-g=\dim_{\mathbb C}B_N$, not $u_N$ and not $g$; no arbitrary perverse object on $X_N$ is asserted to descend, and no derived full faithfulness of restriction to $X$ is used. AC enters as recorded in [A1]. [given, A1, step 1.2, step 2.1, step 3.1, step 4.1, step 4.2, step 5.1, step 6.1] ∎

## Remarks

- The binding identity is $s_N=u_N-g$: the frame space has complex dimension $u_N$, the group has complex dimension $g$, and the quotient base has dimension $s_N$, so the common shift of the normalized finite-resolution comparison is exactly the base dimension.

- The lifting argument is finite: one sufficiently large resolution handles the finitely many truncations and perverse cohomology objects of a fixed bounded object, and uniqueness of truncation makes the lift independent of the choice.
