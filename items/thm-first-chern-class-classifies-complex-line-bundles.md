---
id: thm-first-chern-class-classifies-complex-line-bundles
kind: theorem
title: The first Chern class classifies complex line bundles
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-chern-classes-from-the-projective-bundle-relation, thm-naturality-normalization-and-whitney-sum-for-chern-classes, thm-integral-cohomology-of-bu-n, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, def-stiefel-space-grassmannian-and-tautological-bundle, thm-eilenberg-maclane-spaces-represent-singular-cohomology, lem-circle-and-path-loop-models-for-eilenberg-maclane-induction, thm-milnor-join-model-is-a-contractible-free-g-space, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, lem-cohomology-ring-of-infinite-complex-projective-space, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the classification and representing-space suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "First Chern class as a complete invariant, printed pp.86-88"
---

## Statement

Assume AC. For a path-connected CW complex $X$ with a vertex basepoint, the
first Chern class induces a natural group isomorphism
$$c_1:\operatorname{Pic}_{\mathrm{top}}(X)\xrightarrow{\ \cong\ }H^2(X;\mathbb Z),$$
where $\operatorname{Pic}_{\mathrm{top}}(X)$ is the group of isomorphism
classes of numerable complex line bundles under tensor product. The same
statement holds for a path-connected paracompact Hausdorff CGWH space of CW
homotopy type.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the classification, representing-space and Gysin suppliers ([[def-axiom-of-choice]]).

[F1] Pullback of the universal line induces a natural bijection $[X,\operatorname{Gr}_1(\mathbb C^\infty)]\cong\operatorname{Vect}^{\mathbb C}_1(X)$ between homotopy classes of maps and isomorphism classes of numerable complex line bundles, and $\operatorname{Gr}_1(\mathbb C^\infty)=\mathbb{CP}^\infty$ is the space of complex lines ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] $c_1$ is natural, $c_1(L)=e(L_{\mathbb R})$ for a complex line, and $c_1(L\otimes M)=c_1(L)+c_1(M)$ follows from the classifying description once the universal case is known; the Chern classes satisfy the Whitney formula ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[def-chern-classes-from-the-projective-bundle-relation]]).

[F3] For an abelian group $A$, $n\geq1$ and a based CW model $K(A,n)$, pullback of the fundamental class gives a natural bijection $[X,K(A,n)]_*\cong H^n(X;A)$ for based CW complexes whose basepoint is a vertex ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

[F4] The quotient circle $S^1=\mathbb R/\mathbb Z$ with its one-vertex CW structure is a marked $K(\mathbb Z,1)$ ([[lem-circle-and-path-loop-models-for-eilenberg-maclane-induction]]).

[F5] The Milnor bundle $ES^1\to BS^1$ is a numerable principal $S^1$-bundle with contractible total space, and $BS^1$ is the weak CW colimit $\mathbb{CP}^\infty$ of the finite projective quotients ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F6] A fibration with contractible total space gives $\pi_k(B)\cong\pi_{k-1}(F)$ for $k\geq1$ and trivial $\pi_0(B)$ ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F7] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ with $u=e(\gamma_{\mathbb R})$ the class of the tautological line, so in particular $u$ generates $H^2(\mathbb{CP}^\infty;\mathbb Z)\cong\mathbb Z$ ([[lem-cohomology-ring-of-infinite-complex-projective-space]]).

[F8] The cohomological Kunneth cross product identifies $H^*(\mathbb{CP}^\infty\times\mathbb{CP}^\infty;\mathbb Z)$ with $H^*(\mathbb{CP}^\infty;\mathbb Z)\otimes H^*(\mathbb{CP}^\infty;\mathbb Z)$ as a ring, the hypothesis on finite-free homology being satisfied ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F9] Tensor products and duals of complex line bundles are formed by transition functions, and the construction commutes with pullback ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a path-connected CW complex $X$ with vertex basepoint.

1.1 $\mathbb{CP}^\infty$ is a $K(\mathbb Z,2)$ model: by [F5] and [F6] the homotopy groups of $\mathbb{CP}^\infty$ are $\pi_k(\mathbb{CP}^\infty)\cong\pi_{k-1}(S^1)$ for $k\geq2$ and $\pi_1(\mathbb{CP}^\infty)=0$; since $S^1$ is a marked $K(\mathbb Z,1)$ by [F4], this gives $\pi_2(\mathbb{CP}^\infty)\cong\mathbb Z$ and $\pi_k(\mathbb{CP}^\infty)=0$ for $k\neq2$, $k\geq1$. [F4, F5, F6]

1.2 The universal class $c_1(\gamma)\in H^2(\mathbb{CP}^\infty;\mathbb Z)$ of the tautological line $\gamma$ is a generator: by [F2] and [def-chern-classes-from-the-projective-bundle-relation] it equals $e(\gamma_{\mathbb R})$, and by [F7] the Euler class of the universal oriented two-plane is a generator of $H^2\cong\mathbb Z$. [F2, F7]

2.1 By [F3] applied to the $K(\mathbb Z,2)$ model $\mathbb{CP}^\infty$ of step 1.1, pullback of the fundamental class gives a natural bijection $[X,\mathbb{CP}^\infty]_*\cong H^2(X;\mathbb Z)$; by step 1.2 the fundamental class is $\pm c_1(\gamma)$, so $f\mapsto f^*c_1(\gamma)$ is also a natural bijection. [F3, step 1.1, step 1.2]

3.1 Composing with the classification [F1], the map $L\mapsto c_1(L)$ from isomorphism classes of numerable complex lines to $H^2(X;\mathbb Z)$ is a natural bijection; it is well defined because isomorphic bundles have equal $c_1$. [F1, step 2.1]

4.1 Additivity. On $\mathbb{CP}^\infty\times\mathbb{CP}^\infty$ let $q_i$ be the projections and $L=q_1^*\gamma\otimes q_2^*\gamma$. By [F8] one has $H^2(\mathbb{CP}^\infty\times\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z(u\otimes1)\oplus\mathbb Z(1\otimes u)$ with $u=c_1(\gamma)$ a generator; naturality of the bijection of step 3.1 gives $c_1(L)|_{\mathbb{CP}^\infty\times\{*\}}=u=c_1(L)|_{\{*\}\times\mathbb{CP}^\infty}$, so $c_1(L)=u\otimes1+1\otimes u$. For arbitrary numerable lines $L_i=f_i^*\gamma$ classified by maps $f_i$, the identity $L_1\otimes L_2=(f_1\times f_2)^*L$ and naturality give $c_1(L_1\otimes L_2)=(f_1\times f_2)^*(u\otimes1+1\otimes u)=c_1(L_1)+c_1(L_2)$. [F8, F9, step 3.1]

5.1 Hence $c_1$ is a natural bijection compatible with the group structures (tensor product on the left, addition on the right, with inverse the dual), so it is a natural group isomorphism; the extension to paracompact Hausdorff CGWH spaces of CW homotopy type follows by pulling back along a CW model and using homotopy invariance of cohomology and of the classification bijection. [step 3.1, step 4.1]

6.1 Boundary cases. For $X$ a point the statement reads that the only line bundle is trivial and $H^2(*;\mathbb Z)=0$, both true. The trivial line has $c_1=0$ because both are groups and the trivial bundle is the unit; the dual satisfies $c_1(L^*)=-c_1(L)$ by the group law. The coefficient ring $\mathbb Z$ is nonzero, and the empty space is excluded by the path-connected hypothesis. AC is used only through [A1] in the classification, representing-space and Gysin suppliers; no choice of orientations or lifts is made. [A1, F1, F3, step 5.1] ∎

## Source notes

Hatcher, *Vector Bundles & K-Theory* section 3.1 and May's Chapter 23 section 7 give the classification of complex line bundles by $c_1$; the proof above derives the $K(\mathbb Z,2)$ structure of $\mathbb{CP}^\infty$ from the published path-loop fibration and the marked $K(\mathbb Z,1)$ model of the circle, and then obtains additivity from the universal computation on $\mathbb{CP}^\infty\times\mathbb{CP}^\infty$ rather than assuming the tensor formula.
