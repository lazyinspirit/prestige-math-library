---
id: thm-first-chern-class-classifies-complex-line-bundles
kind: theorem
title: The first Chern class classifies complex line bundles
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-axiom-of-choice", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "def-stiefel-space-grassmannian-and-tautological-bundle", "def-chern-classes-from-the-projective-bundle-relation", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "thm-eilenberg-maclane-spaces-represent-singular-cohomology", "lem-circle-and-path-loop-models-for-eilenberg-maclane-induction", "thm-milnor-join-model-is-a-contractible-free-g-space", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "lem-cohomology-ring-of-infinite-complex-projective-space", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "prop-relative-cw-inclusions-are-cofibrations", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology"]
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
verification:
  audited: 2026-09-22
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

[A1] The Axiom of Choice is assumed, as inherited from the classification, representing-space, numerable-fibration, Euler, integral cohomology-ring and Kunneth suppliers ([[def-axiom-of-choice]]).

[F1] Pullback of the universal line induces a natural bijection $[X,\operatorname{Gr}_1(\mathbb C^\infty)]\cong\operatorname{Vect}^{\mathbb C}_1(X)$ between homotopy classes of maps and isomorphism classes of numerable complex line bundles, and $\operatorname{Gr}_1(\mathbb C^\infty)=\mathbb{CP}^\infty$ is the space of complex lines ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] On the allowed CW or paracompact Hausdorff CGWH CW-type bases, $c_1(L)=e(L_{\mathbb R})$ for a complex line ([[def-chern-classes-from-the-projective-bundle-relation]]), and these Euler classes are natural for oriented pullbacks ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F3] For an abelian group $A$, $n\geq1$ and a based CW model $K(A,n)$, pullback of the fundamental class gives a natural bijection $[X,K(A,n)]_*\cong\widetilde H^n(X;A)$; in positive degree the supplied theorem identifies this relative group with absolute $H^n(X;A)$ when $X$ is connected ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

[F4] The quotient circle $S^1=\mathbb R/\mathbb Z$ with its one-vertex CW structure is a marked $K(\mathbb Z,1)$ ([[lem-circle-and-path-loop-models-for-eilenberg-maclane-induction]]).

[F5] The Milnor bundle $ES^1\to BS^1$ is a numerable principal $S^1$-bundle with contractible total space, and $BS^1$ is the weak CW colimit $\mathbb{CP}^\infty$ of the finite projective quotients ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F6] A based Serre fibration has the homotopy long exact sequence, with its exact pointed-set tail ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]). Numerable bundles are Hurewicz, hence Serre, fibrations under AC ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F7] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ with $u=e(\gamma_{\mathbb R})$ the class of the tautological line, so in particular $u$ generates $H^2(\mathbb{CP}^\infty;\mathbb Z)\cong\mathbb Z$ ([[lem-cohomology-ring-of-infinite-complex-projective-space]]).

[F8] The cohomological Kunneth cross product identifies $H^*(\mathbb{CP}^\infty\times\mathbb{CP}^\infty;\mathbb Z)$ with $H^*(\mathbb{CP}^\infty;\mathbb Z)\otimes H^*(\mathbb{CP}^\infty;\mathbb Z)$ as a ring, the hypothesis on finite-free homology being satisfied ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F9] Tensor products and duals of complex line bundles are formed by transition functions, and the construction commutes with pullback ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F10] A vertex inclusion in a CW complex has the homotopy extension property ([[prop-relative-cw-inclusions-are-cofibrations]]). Homotopic maps induce equal cohomology maps, so a homotopy equivalence induces a cohomology isomorphism ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a path-connected CW complex $X$ with vertex basepoint.

1.1 The numerable circle bundle [F5] is a Serre fibration by [F6]. Its total space is contractible, so exactness between the two zero total-space groups gives $\pi_k(\mathbb{CP}^\infty)\cong\pi_{k-1}(S^1)$ for $k\geq2$. In degree one the segment $0\to\pi_1(BS^1)\to\pi_0(S^1)$ and connectedness of $S^1$ give zero fundamental group. The base is path connected as the image of the nonempty contractible total space under its surjective bundle projection. By [F4], the circle has only $\pi_1=\mathbb Z$ nonzero, hence $\mathbb{CP}^\infty$ is a CW model of $K(\mathbb Z,2)$, marked by the connecting isomorphism. [F4, F5, F6]

1.2 The universal class $c_1(\gamma)$ equals $e(\gamma_{\mathbb R})$ by [F2], using the complex orientation of the tautological line. By [F7] this is a generator of $H^2(\mathbb{CP}^\infty;\mathbb Z)\cong\mathbb Z$. [F2, F7]

2.1 By [F3] applied to the $K(\mathbb Z,2)$ model $\mathbb{CP}^\infty$ of step 1.1, pullback of the fundamental class gives a natural bijection $[X,\mathbb{CP}^\infty]_*\cong H^2(X;\mathbb Z)$; by step 1.2 the fundamental class is $\pm c_1(\gamma)$, so $f\mapsto f^*c_1(\gamma)$ is also a natural bijection. [F3, step 1.1, step 1.2]

3.1 To pass from based to unbased classes, any map $f:X\to\mathbb{CP}^\infty$ can be made based by a homotopy: choose a path from $f(x_0)$ to the target vertex and extend this homotopy of the vertex over $X$ using [F10]. If two based maps are freely homotopic, their pullbacks of $c_1(\gamma)$ agree by [F10], so step 2.1 says their based homotopy classes already agree. Hence forgetting the basepoint is a bijection, and the unbased map $[f]\mapsto f^*c_1(\gamma)$ is bijective as well. Composing with [F1] and using line naturality [F2] proves that $L\mapsto c_1(L)$ is a natural bijection. [F1, F2, F10, step 2.1]

4.1 Additivity. On $\mathbb{CP}^\infty\times\mathbb{CP}^\infty$ let $q_i$ be the projections and $L=q_1^*\gamma\otimes q_2^*\gamma$. By [F8] one has $H^2(\mathbb{CP}^\infty\times\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z(u\otimes1)\oplus\mathbb Z(1\otimes u)$ with $u=c_1(\gamma)$ a generator; line naturality [F2] gives $c_1(L)|_{\mathbb{CP}^\infty\times\{*\}}=u=c_1(L)|_{\{*\}\times\mathbb{CP}^\infty}$, so $c_1(L)=u\otimes1+1\otimes u$. For arbitrary numerable lines $L_i=f_i^*\gamma$ classified by maps $f_i$, the identity $L_1\otimes L_2=(f_1,f_2)^*L$ and naturality give $c_1(L_1\otimes L_2)=(f_1,f_2)^*(u\otimes1+1\otimes u)=c_1(L_1)+c_1(L_2)$. [F2, F8, F9, step 3.1]

5.1 The tensor unit is the trivial line, and evaluation gives $L\otimes L^*\cong\varepsilon^1$, so these bundle classes form a group by [F9]. The bijection in step 3.1 preserves multiplication by step 4.1 and is therefore a group isomorphism. For a path-connected paracompact Hausdorff CGWH space $Y$ of CW type, choose a homotopy equivalence $h:X\to Y$ from a CW complex with vertex basepoint. Precomposition with $h$ is bijective on unbased homotopy classes of maps into $\mathbb{CP}^\infty$, so [F1] makes $h^*$ bijective on line-bundle classes; it respects tensor products by [F9]. It is an isomorphism on cohomology by [F10]. Naturality [F2] makes the square of these two pullbacks with $c_1$ commute. The already proved isomorphism for $X$ therefore proves the asserted isomorphism for $Y$. This also proves naturality for maps between the allowed CW-type bases. [F1, F2, F9, F10, step 3.1, step 4.1]

6.1 Boundary cases. For $X$ a point the statement reads that the only line bundle is trivial and $H^2(*;\mathbb Z)=0$, both true. The trivial line has $c_1=0$ because both are groups and the trivial bundle is the unit; the dual satisfies $c_1(L^*)=-c_1(L)$ by the group law. The coefficient ring $\mathbb Z$ is nonzero, and the empty space is excluded by the path-connected hypothesis. AC is used through [A1]: besides classification, representability, the numerable-fibration theorem and the Euler-class supplier, step 1.2 uses the AC-qualified computation [F7] and step 4.1 uses the AC-qualified Kunneth isomorphism [F8]. No additional choice of orientations or lifts is made in this proof. [A1, F1, F3, F7, F8, step 1.2, step 4.1, step 5.1] ∎

## Source notes

Hatcher, *Vector Bundles & K-Theory* section 3.1 and May's Chapter 23 section 7 give the classification of complex line bundles by $c_1$; the proof above derives the $K(\mathbb Z,2)$ structure of $\mathbb{CP}^\infty$ from the numerable universal circle fibration and the marked $K(\mathbb Z,1)$ model of the circle, and then obtains additivity from the universal computation on $\mathbb{CP}^\infty\times\mathbb{CP}^\infty$ rather than assuming the tensor formula.
