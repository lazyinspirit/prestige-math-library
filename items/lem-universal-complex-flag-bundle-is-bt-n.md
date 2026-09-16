---
id: lem-universal-complex-flag-bundle-is-bt-n
kind: lemma
title: The universal complex flag bundle is BT-n
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-flag-bundle-and-chern-roots, thm-stable-stiefel-space-is-contractible, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, thm-principal-bundles-are-classified-by-maps-to-bg, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-five-lemma-for-a-morphism-of-long-exact-sequences, thm-whitehead-theorem, thm-milnor-join-model-is-a-contractible-free-g-space, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, lem-cohomology-ring-of-infinite-complex-projective-space, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the classification and product-model constructions."
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
---

## Statement

Assume AC. Let $E\mathbb U(n)$ be the model $V_n(\mathbb C^\infty)$ of the
universal principal $\mathbb U(n)$-bundle, so that
$B\mathbb U(n)=E\mathbb U(n)/\mathbb U(n)=\operatorname{Gr}_n(\mathbb C^\infty)$,
and let $T^n\subseteq\mathbb U(n)$ be the maximal torus of diagonal unitary
matrices. Then the complete flag bundle of the universal rank-$n$ complex
bundle is homotopy equivalent over $B\mathbb U(n)$ to $BT^n$, and $BT^n$ is
homotopy equivalent to $(\mathbb{CP}^\infty)^n$.

Under such an equivalence the Chern roots $t_i=c_1(L_i)$ of
[[def-complex-flag-bundle-and-chern-roots]] are the coordinate generators:
$$H^*(BT^n;\mathbb Z)=\mathbb Z[t_1,\dots,t_n],$$
the $i$-th tautological line being the pullback of the universal line from the
$i$-th factor. The symmetric group $\Sigma_n$ acts by bundle maps over
$B\mathbb U(n)$, permuting the factors and the $t_i$, so the image of the flag
pullback $q^*$ is contained in the symmetric invariants of
$\mathbb Z[t_1,\dots,t_n]$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the classifying-space and Kunneth suppliers ([[def-axiom-of-choice]]).

[F1] The stable Stiefel space $V_n(\mathbb C^\infty)$ is contractible, and $\mathbb U(n)$ acts freely on it with quotient the Grassmannian $\operatorname{Gr}_n(\mathbb C^\infty)$, the chosen model of $B\mathbb U(n)$ carrying the universal rank-$n$ bundle ([[thm-stable-stiefel-space-is-contractible]], [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F2] For $G=S^1$ the Milnor bundle $ES^1\to BS^1$ is a numerable principal bundle with contractible total space, and $BS^1$ is the weak CW colimit $\mathbb{CP}^\infty$ ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F3] Numerable principal bundles over CGWH bases of CW type are classified by maps to the Milnor model: $[X,BG]\cong\operatorname{Bun}^{\mathrm{num}}_G(X)$ ([[thm-principal-bundles-are-classified-by-maps-to-bg]]).

[F4] A fibration with contractible total space has $F\to P\to B$ giving $\pi_k(B)\cong\pi_{k-1}(F)$ for $k\geq1$ and trivial $\pi_0(B)$ from exactness ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F5] A morphism of long exact sequences that is an isomorphism on the two outer families and on one middle family is an isomorphism on the remaining family ([[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]).

[F6] A map of CW complexes inducing isomorphisms on all homotopy groups is a homotopy equivalence ([[thm-whitehead-theorem]]).

[F7] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ with $|u|=2$, with free finitely generated homology in each degree, and the cohomological Kunneth cross product identifies the cohomology ring of a finite product of such spaces with the tensor product of the factors when the coefficient ring is a PID and the homology of one factor is finite free in each degree ([[lem-cohomology-ring-of-infinite-complex-projective-space]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F8] The flag bundle of a rank-$n$ complex bundle is the quotient of the associated principal bundle by $T^n$, with tautological lines $L_i$ and $q^*E=L_1\oplus\cdots\oplus L_n$ ([[def-complex-flag-bundle-and-chern-roots]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the universal principal $\mathbb U(n)$-bundle $E\mathbb U(n)=V_n(\mathbb C^\infty)$, and its maximal torus $T^n$.

1.1 By [F1] the space $E\mathbb U(n)$ is contractible and $\mathbb U(n)$ acts freely on it with quotient $B\mathbb U(n)$; the associated flag bundle of the universal bundle is $E\mathbb U(n)/T^n$, and by [F8] its tautological lines $L_i$ satisfy $q^*E=L_1\oplus\cdots\oplus L_n$. [F1, F8]

1.2 The product $(S^\infty)^n$ is contractible and carries a free action of $T^n=(S^1)^n$ with quotient $(\mathbb{CP}^\infty)^n$, so both $E\mathbb U(n)/T^n$ and $(\mathbb{CP}^\infty)^n$ are quotients of contractible spaces by free $T^n$-actions. [F2, algebra]

2.1 Both quotients are total spaces of numerable principal $T^n$-bundles with contractible total spaces, so by [F4] applied to each projection, $\pi_k$ of either quotient is $\pi_{k-1}(T^n)$ for $k\geq1$ and $\pi_0$ is trivial. By [F3] the bundle $E\mathbb U(n)\to E\mathbb U(n)/T^n$ and the product bundle are classified by maps between the two quotient spaces over $BT^n$; comparing the two long exact sequences through the induced map of bundles gives an isomorphism on the fiber $\pi_*(T^n)$ and on the contractible total spaces, hence on $\pi_*$ of the bases by the five lemma [F5]. As both bases have CW type, [F6] upgrades this to a homotopy equivalence. [F3, F4, F5, F6, step 1.2]

3.1 The tautological lines on $E\mathbb U(n)/T^n$ are the associated bundles for the coordinate characters of $T^n$, so under the equivalence of step 2.1 the $i$-th line is the pullback of the universal line from the $i$-th factor of $(\mathbb{CP}^\infty)^n$. Hence $t_i=c_1(L_i)$ is the pullback of the generator of the $i$-th factor, and [F7] gives $H^*(BT^n;\mathbb Z)=\mathbb Z[t_1,\dots,t_n]$ by Kunneth. [F7, step 2.1]

4.1 The permutation matrices normalize $T^n$ in $\mathbb U(n)$ and act on $E\mathbb U(n)$ by bundle automorphisms covering the identity of $B\mathbb U(n)$; the induced maps on $E\mathbb U(n)/T^n$ permute the coordinate characters and hence the tautological lines, so they permute $t_1,\dots,t_n$. Therefore a class in the image of $q^*:H^*(B\mathbb U(n);\mathbb Z)\to H^*(BT^n;\mathbb Z)$ is fixed by every permutation, i.e. lies in the symmetric invariants. [F1, F8, step 3.1]

5.1 Boundary cases. For $n=1$ the torus is $T^1=S^1$ and the flag bundle is the universal line bundle's own sphere bundle quotient $BS^1=\mathbb{CP}^\infty$; the single root is the generator and the symmetric group is trivial. The empty and zero cases are excluded by $n\geq1$; the coefficient ring $\mathbb Z$ is nonzero and the products are finite, so no infinite-product convergence question arises. AC enters only through the classification and Milnor-model suppliers recorded in [A1], including the standard identification of the product of the Milnor models with a model of $BT^n$. [A1, F1, F2, step 3.1] ∎

## Source notes

The identification of the complete flag bundle of the universal bundle with $BT^n=E\mathbb U(n)/T^n$ and the coordinate description of the Chern roots are Miller's Lectures 34-35 and May's Chapter 24 section 3. The model comparison between $E\mathbb U(n)/T^n$ and $(\mathbb{CP}^\infty)^n$ is the standard contractible-free-quotient argument; both are models of $BT^n$, and the five lemma and Whitehead's theorem convert the map of fibrations into a homotopy equivalence.
