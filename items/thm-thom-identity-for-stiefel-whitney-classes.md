---
id: thm-thom-identity-for-stiefel-whitney-classes
kind: theorem
title: Thom identity for Stiefel–Whitney classes
status: published
origin: pipeline
deps: ["def-axiom-of-choice", "thm-steenrod-squares-are-well-defined-and-natural", "prop-steenrod-square-normalization-instability-and-top-square", "thm-cartan-formula-for-steenrod-squares", "def-total-steenrod-square", "thm-thom-isomorphism-for-oriented-vector-bundles", "thm-naturality-and-uniqueness-of-thom-classes", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-thom-class-by-fiberwise-normalization", "thm-naturality-of-stiefel-whitney-classes", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "thm-real-splitting-principle-with-mod-two-injective-pullback", "thm-mod-two-cohomology-of-bo-n", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "def-relative-cup-product", "prop-relative-cup-products-are-natural-and-compatible-with-connectors", "thm-singular-cohomology-is-graded-commutative"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§8 existence of Stiefel–Whitney classes by the Thom identity, printed pp.97–114"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Proposition 39.10, printed pp.151–152"
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§§3.1–3.2 Thom and Euler constructions, printed pp.77–94 (the Steenrod square itself is taken from the published prerequisite page)"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $E\to B$ be a numerable real vector bundle of rank $n\geq0$
over a paracompact Hausdorff CGWH base of CW type (the admissible bases of this page), with its canonical $\mathbb F_2$-orientation and
normalized mod-two Thom class
$u_E\in H^n(D(E),S(E);\mathbb F_2)$. Then
$$Sq(u_E)=w(E)\smile u_E,$$
equivalently
$$Sq^i(u_E)=w_i(E)\smile u_E\quad\text{for every }i\geq0,$$
with both sides vanishing for $i>n$.

## Facts & Assumptions

**Given:** The bundle and base of the statement. Coefficients below are $\mathbb F_2$. For a relative class of degree $d\ge0$, $Sq$ denotes the finite sum $\sum_{i=0}^d Sq^i$.

[A1] AC is assumed for the Thom, classification, splitting and universal-cohomology suppliers. ([[def-axiom-of-choice]]).

[F1] Steenrod squares are natural homomorphisms on cohomology of pairs. They satisfy $Sq^0=\operatorname{id}$, instability and the top-square formula, also relatively. The Cartan formula used here is only the absolute formula on cohomology of a space. The absolute total square is the finite graded sum. ([[thm-steenrod-squares-are-well-defined-and-natural]], [[prop-steenrod-square-normalization-instability-and-top-square]], [[thm-cartan-formula-for-steenrod-squares]], [[def-total-steenrod-square]]).

[F2] For a canonically mod-two oriented numerable bundle in this base class, $\Phi(a)=\pi^*a\smile u$ is the Thom isomorphism in every degree. The fiberwise normalized Thom class is unique and natural under bundle pullback; the Euler class is $e_2=s^*j^*u$. The normalized rank-zero Thom class is 1. ([[thm-thom-isomorphism-for-oriented-vector-bundles]], [[thm-naturality-and-uniqueness-of-thom-classes]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[def-thom-class-by-fiberwise-normalization]]).

[F3] The classes $w_i$ are natural, satisfy the Whitney product formula, $w_0=1$ and $w_i=0$ above the rank. Also $e_2(E)=w_n(E)$ for a rank-$n$ bundle in the stated scope. ([[thm-naturality-of-stiefel-whitney-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F4] The real flag bundle has admissible base, splits the pulled-back bundle into line bundles, and induces an injective map in mod-two cohomology. ([[thm-real-splitting-principle-with-mod-two-injective-pullback]]).

[F5] For $n\ge1$, $H^*(BO(n);\mathbb F_2)=\mathbb F_2[w_1,\ldots,w_n]$, with the generators the classes of the tautological bundle $\gamma_n$. Numerable real rank-$n$ bundles on the given bases are classified by maps into $BO(n)=\operatorname{Gr}_n(\mathbb R^\infty)$. This Grassmannian carries its Schubert CW structure. ([[thm-mod-two-cohomology-of-bo-n]], [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F6] Homotopic maps give the same singular cohomology pullback with any abelian coefficients. Relative cup products are natural for excisive triples, including the absolute-relative module action and forgetting the relative subspace; the pairs of subspaces $\varnothing,S$ are open in their union $S$. Absolute cup products are graded commutative. ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]], [[def-relative-cup-product]], [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]], [[thm-singular-cohomology-is-graded-commutative]]).

[F7] The universal Grassmannian is an admissible base and its tautological bundle is numerable. The finite-dimensional compact Grassmannians give its compact exhaustion; numerability follows from Hatcher, Vector Bundles & K-Theory, Proposition 1.19, printed p.36, https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf . Its CW structure is also in [F5].

## Proof

**Proof technique:** direct, detecting the universal relative identity in absolute cohomology.

1.1 An absolute identity. For a rank-$n$ bundle $E$, $n\ge1$, take its flag map $q$ from [F4], and write $q^*E=\bigoplus_{j=1}^n L_j$, $t_j=w_1(L_j)$. The rank convention and Whitney formula give $q^*w_n(E)=\prod_jt_j$ and $q^*w(E)=\prod_j(1+t_j)$. Since $t_j$ has degree one, [F1] gives $Sq(t_j)=t_j+t_j^2$. Absolute Cartan and commutativity over $\mathbb F_2$ therefore give $$Sq\bigl(q^*w_n(E)\bigr)=\prod_j(t_j+t_j^2)=\Bigl(\prod_j(1+t_j)\Bigr)\Bigl(\prod_jt_j\Bigr)=q^*\bigl(w(E)w_n(E)\bigr).$$ Naturality of each square and injectivity of $q^*$ give $Sq(w_n(E))=w(E)w_n(E)$. All sums and products here are finite and all classes are absolute. [F1, F3, F4, F6, algebra]

1.2 Forgetting the relative subspace. For any bundle in [F2], put $D=D(E)$, $S=S(E)$, let $\pi:D\to B$ be projection, let $s$ be its zero section, and write $j^*:H^*(D,S)\to H^*(D)$ for the forgetful map induced by $(D,\varnothing)\to(D,S)$. Radial contraction gives $s\pi\simeq\operatorname{id}_D$ and $\pi s=\operatorname{id}_B$. Thus [F6] and the Euler definition imply $j^*u=\pi^*e_2(E)$. Naturality of the relative module product, with triples $(D;\varnothing,\varnothing)\to(D;\varnothing,S)$, gives $$j^*\Phi(a)=\pi^*a\smile j^*u=\pi^*(a e_2(E)).$$ The relevant cup comparisons exist because $\varnothing$ and $S$ are open in $S$; no Cartan assertion for a relative product is involved. [F2, F6, algebra]

2.1 Universal injectivity. Let $E=\gamma_n$, $n\ge1$. The hypotheses of [F2] hold by [F5] and [F7]. In the polynomial ring of [F5], multiplication by the variable $w_n$ is injective: it shifts the exponent of that variable in each distinct monomial. By [F3] it is multiplication by $e_2(\gamma_n)$. The identity in step 1.2, the isomorphism $\Phi$ and the isomorphism $\pi^*$ show that $j^*:H^k(D(\gamma_n),S(\gamma_n))\to H^k(D(\gamma_n))$ is injective in every degree. Explicitly, write any relative class as $\Phi(a)$; if its image is zero then $a w_n=0$, hence $a=0$. This also covers zero groups in degrees below $n$. [F2, F3, F5, F6, F7, step 1.2, algebra]

3.1 Universal Thom identity. Write $u=u_{\gamma_n}$. Naturality of the squares for the pair map defining $j^*$ and for the space map $\pi$ gives $$j^*Sq(u)=Sq(j^*u)=Sq(\pi^*w_n)=\pi^*Sq(w_n)=\pi^*(w(\gamma_n)w_n)=j^*\bigl(\pi^*w(\gamma_n)\smile u\bigr).$$ The third equality uses step 1.2 and [F3], the fourth uses step 1.1, and the last uses step 1.2. Injectivity in step 2.1, degree by degree, proves the identity for $\gamma_n$. [F1, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 Pull back to the given bundle. For $n\ge1$, choose a classifying map $c:B\to BO(n)$ and an isomorphism $E\cong c^*\gamma_n$ by [F5]. Use the pulled-back metric through this isomorphism to obtain a map $\widetilde c:(D(E),S(E))\to(D(\gamma_n),S(\gamma_n))$ over $c$. Changing a supplied metric does not change the identity: the fiberwise radial map sending a nonzero vector $v$ to $\|v\|_{\mathrm{old}}v/\|v\|_{\mathrm{new}}$ is a homeomorphism of the old and new disk-sphere pairs over $B$, extends continuously by zero, and preserves the mod-two fiber generator; its inverse interchanges the two norms. By normalized Thom naturality, $\widetilde c^*u_{\gamma_n}=u_E$. Pull back step 3.1, using pair naturality of $Sq$, naturality of $w$, and relative cup naturality. This gives $Sq(u_E)=\pi^*w(E)\smile u_E$, with the base pullback suppressed in the statement's usual module notation. [F1, F2, F3, F5, F6, step 3.1, algebra]

5.1 Degrees and boundaries. For $n=0$ the disk-sphere pair is $(B,\varnothing)$, $u=1$ and $w(0_B)=1$. Normalization and instability give $Sq^0(1)=1$ and $Sq^i(1)=0$ for $i>0$, proving the identity separately, without multiplying by a nonexistent polynomial variable $w_0$. Over the empty base all groups and classes are zero. For $n\ge1$ step 4.1 and for $n=0$ the preceding calculation give the total identity; comparison of degree $n+i$ components gives the stated formula for every $i\ge0$. Both sides are zero for $i>n$ by instability and the rank convention. The sums are finite even for infinite-dimensional bases. AC enters exactly through the Thom, splitting, classification and universal-cohomology suppliers and the numerability assertion; the subsequent polynomial and cohomology calculations require no further choices. [A1, F1, F2, F3, F5, F7, step 4.1, algebra] ∎
