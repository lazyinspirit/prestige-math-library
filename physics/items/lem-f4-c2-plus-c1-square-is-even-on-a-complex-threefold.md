---
id: lem-f4-c2-plus-c1-square-is-even-on-a-complex-threefold
kind: lemma
title: "The degree-four Chern parity of a compact complex threefold"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC, inherited exactly from the Wu, Poincare-duality, and characteristic-class suppliers used below."
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-wu-classes-of-a-closed-manifold
  - lem-f4-wu-formula-for-closed-manifolds
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - thm-mod-two-reduction-of-chern-classes
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - prop-first-steenrod-square-is-the-mod-two-bockstein
  - def-bockstein-connecting-operation
  - thm-long-exact-sequence-in-cohomology
  - def-singular-cochain-complex-with-coefficients
  - prop-steenrod-square-normalization-instability-and-top-square
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-integral-complex-projective-bundle-theorem
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-naturality-of-stiefel-whitney-classes
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - prop-singular-cohomology-is-contravariantly-functorial
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-wu-classes-of-a-closed-manifold: mathematical-premise
  lem-f4-wu-formula-for-closed-manifolds: mathematical-premise
  cor-poincare-duality-gives-a-nonsingular-cup-pairing: mathematical-premise
  thm-mod-two-reduction-of-chern-classes: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  prop-first-steenrod-square-is-the-mod-two-bockstein: mathematical-premise
  def-bockstein-connecting-operation: mathematical-premise
  thm-long-exact-sequence-in-cohomology: mathematical-premise
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  prop-steenrod-square-normalization-instability-and-top-square: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-integral-complex-projective-bundle-theorem: mathematical-premise
  thm-naturality-orientation-sign-and-whitney-product-for-euler-classes: mathematical-premise
  thm-naturality-of-stiefel-whitney-classes: mathematical-premise
  thm-homotopic-maps-induce-equal-maps-in-singular-cohomology: mathematical-premise
  prop-singular-cohomology-is-contravariantly-functorial: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrés Collinucci and Raffaele Savelli, On Flux Quantization in F-Theory, arXiv:1011.6388v2"
      url: "https://arxiv.org/pdf/1011.6388v2"
      locator: "§3, pp. 5–8, especially the Wu-class parity argument; the local proof below expands the Wu formula and exact coefficient sequences."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§11.6, Theorem 11.14, printed pp. 131–133 (Wu formula); §14 (mod-two Chern/Stiefel–Whitney comparison)."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $B$ be a connected compact smooth complex threefold. For the underlying real tangent bundle, write $w_i(B)$ for its Stiefel–Whitney classes with coefficients in $\mathbb F_2$, and write $c_i(B)$ for the integral Chern classes of its holomorphic tangent bundle. Then
$$c_2(B)+c_1(B)\smile c_1(B)\in 2H^4(B;\mathbb Z).$$

## Statement references

[[thm-mod-two-reduction-of-chern-classes]]

[[lem-f4-wu-formula-for-closed-manifolds]]

## Facts & Assumptions

**Given:** Full AC and a connected compact smooth complex threefold $B$, with its complex orientation and mod-two fundamental class $[B]_2$.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]. It is inherited from the Wu-class, Poincare-duality, and characteristic-class suppliers.

[F1] The complex tangent bundle has rank three. The underlying smooth manifold is paracompact Hausdorff CGWH of CW homotopy type, and its tangent bundles are numerable ([[def-complex-manifolds-and-holomorphic-vector-bundles]], [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). For a numerable complex bundle on a path-connected paracompact Hausdorff CW complex, the comparison theorem gives $w_{2i+1}=0$ and $w_{2i}=\rho_2c_i$ ([[thm-mod-two-reduction-of-chern-classes]]); step 1.2 transfers this assertion to $B$. Stiefel–Whitney classes on $B$ use [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]].

[F2] The Wu classes satisfy $\langle v_k x,[B]_2\rangle=\langle Sq^k(x),[B]_2\rangle$, and the mod-two cup pairing is nonsingular ([[def-wu-classes-of-a-closed-manifold]], [[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]).

[F3] The Wu formula is $w_i(B)=\sum_{j=0}^i Sq^j(v_{i-j}(B))$ in each degree ([[lem-f4-wu-formula-for-closed-manifolds]]).

[F4] Steenrod squares are unstable, satisfy $Sq^d(x)=x^2$ for degree-$d$ classes, and $Sq^1$ is the connecting operation for $0\to\mathbb F_2\xrightarrow{2}\mathbb Z/4\to\mathbb F_2\to0$ ([[prop-steenrod-square-normalization-instability-and-top-square]], [[prop-first-steenrod-square-is-the-mod-two-bockstein|$Sq^{1}$ is the mod-two Bockstein]], [[def-bockstein-connecting-operation]]).

[F5] For a short exact coefficient sequence, singular cohomology has its long exact sequence, whose exactness identifies the kernel of coefficient reduction with the image of the preceding coefficient map ([[thm-long-exact-sequence-in-cohomology]], [[def-singular-cochain-complex-with-coefficients]]).

[F6] On paracompact Hausdorff CGWH bases of CW type, Chern classes are the unique coefficients of the monic relation for the Euler class of the tautological complex line; the projective-bundle theorem applies to these bases ([[def-chern-classes-from-the-projective-bundle-relation]], [[thm-integral-complex-projective-bundle-theorem]]). The complex-oriented Euler class is natural for pullbacks in this Thom scope ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F7] Stiefel–Whitney classes are natural on paracompact Hausdorff CGWH bases of CW type ([[thm-naturality-of-stiefel-whitney-classes]]). A homotopy equivalence induces cohomology isomorphisms, and coefficient reduction commutes with pullback ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]], [[prop-singular-cohomology-is-contravariantly-functorial]]).



## Proof

**Proof technique:** expand the Wu formula in degrees one through four, then use exactness of integral coefficient reduction.

1.1 Since $B$ has real dimension six, $v_k(B)=0$ for $k>3$: for such $k$, every class $x\in H^{6-k}(B;\mathbb F_2)$ has degree $6-k<k$, so instability gives $Sq^k x=0$; the defining pairing in [F2] and its nonsingularity force $v_k=0$. Also $v_0=1$ by the Wu-class definition. The full AC hypothesis is inherited from these suppliers. [A1, F2, F4, algebra]

1.2 Choose a homotopy equivalence $q:K\to B$ from a path-connected CW complex; CW complexes are paracompact Hausdorff and CGWH. The numeration of $TB$ pulls back along $q$, so [F1] applies to $q^*TB$ on the actual CW base $K$. To compare its Chern classes with those on $B$, the bundle charts give $P(q^*TB)=K\times_B P(TB)$, and the induced map of projective bundles pulls back the tautological line. Euler naturality in [F6] therefore pulls its tautological class back. Pulling back the monic relation for $TB$ and using coefficient uniqueness on $K$ gives $c_i(q^*TB)=q^*c_i(TB)$. By [F7], realification commutes with pullback and $w_j(q^*T B_{\mathbb R})=q^*w_j(T B_{\mathbb R})$, while $q^*\rho_2=\rho_2q^*$. The comparison on $K$ thus says $q^*(w_{2i}-\rho_2c_i)=0$ and $q^*w_{2i+1}=0$. Since $q^*$ is an isomorphism over $\mathbb F_2$, the same identities hold on $B$. In particular $w_1=0$, $w_2=\rho_2c_1$, $w_3=0$, and $w_4=\rho_2c_2$. The class $w_2$ has an integral lift, so its Bockstein for $0\to\mathbb F_2\to\mathbb Z/4\to\mathbb F_2\to0$ vanishes: reduce $c_1$ modulo four to obtain a lift in $H^2(B;\mathbb Z/4)$, then apply exactness. By [F4], $Sq^1w_2=0$. [F1, F4, F5, F6, F7, given, choose, algebra]

2.1 In degree one the Wu formula [F3] gives $w_1=v_1+Sq^1(v_0)=v_1$, since $Sq^1(1)=0$. Hence $v_1=0$. In degree two it gives $w_2=v_2+Sq^1(v_1)+Sq^2(v_0)=v_2$, since $v_1=0$ and positive squares of the unit vanish. Thus $v_2=w_2$. [F3, F4, step 1.2, algebra]

3.1 In degree three, [F3] gives $w_3=v_3+Sq^1(v_2)+Sq^2(v_1)+Sq^3(v_0)$. By steps 1.1, 1.2, and 2.1, $v_3=0$ because $w_3=0$, $Sq^1(v_2)=Sq^1(w_2)=0$, $v_1=0$, and $Sq^3(1)=0$. [F3, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 In degree four, [F3] gives $$w_4=v_4+Sq^1(v_3)+Sq^2(v_2)+Sq^3(v_1)+Sq^4(v_0)=Sq^2(w_2)=w_2^2.$$ Here $v_4=0$ by step 1.1, $v_3=0$ by step 3.1 and $v_1=0$ by step 2.1, $Sq^4(1)=0$, and the top-square identity applies to the degree-two class $w_2$. [F3, F4, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 Substituting the comparison proved in step 1.2 into step 4.1 yields $\rho_2(c_2+c_1^2)=w_4+w_2^2=0$ (addition and subtraction agree over $\mathbb F_2$). For the coefficient sequence $0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\rho_2}\mathbb F_2\to0$, exactness in [F5] says $\ker(\rho_2:H^4(B;\mathbb Z)\to H^4(B;\mathbb F_2))=\operatorname{im}(2:H^4(B;\mathbb Z)\to H^4(B;\mathbb Z))$. Hence there is an integral class $\eta$ with $c_2+c_1^2=2\eta$. This makes no torsion-free assumption. [F5, step 1.2, step 4.1, algebra] ∎
