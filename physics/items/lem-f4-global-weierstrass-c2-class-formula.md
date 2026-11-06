---
id: lem-f4-global-weierstrass-c2-class-formula
kind: lemma
title: "Second Chern class of a smooth Calabi–Yau Weierstrass fourfold"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the Chern-class and compact Calabi–Yau convention suppliers; the weighted Euler and adjunction calculations add no choice."
deps:
  - def-f4-weierstrass-model-on-a-line-bundle
  - def-axiom-of-choice
  - thm-f4-weierstrass-canonical-bundle-formula
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - def-thom-class-by-fiberwise-normalization
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - def-relative-cup-product
  - prop-relative-cup-products-are-natural-and-compatible-with-connectors
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-integral-complex-projective-bundle-theorem
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
  - lem-gts-first-chern-class-of-complex-bundle-equals-determinant
dependency_roles:
  def-f4-weierstrass-model-on-a-line-bundle: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-f4-weierstrass-canonical-bundle-formula: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold: mathematical-premise
  thm-thom-isomorphism-for-oriented-vector-bundles: mathematical-premise
  def-thom-class-by-fiberwise-normalization: mathematical-premise
  def-euler-class-by-zero-section-pullback-of-the-thom-class: mathematical-premise
  def-relative-cup-product: mathematical-premise
  prop-relative-cup-products-are-natural-and-compatible-with-connectors: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-integral-complex-projective-bundle-theorem: mathematical-premise
  thm-naturality-orientation-sign-and-whitney-product-for-euler-classes: mathematical-premise
  thm-homotopic-maps-induce-equal-maps-in-singular-cohomology: mathematical-premise
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
  lem-gts-first-chern-class-of-complex-bundle-equals-determinant: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrés Collinucci and Raffaele Savelli, On Flux Quantization in F-Theory, arXiv:1011.6388v2"
      url: "https://arxiv.org/pdf/1011.6388v2"
      locator: "§3, pp. 5–8, global Weierstrass Chern-class calculation."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§2.2, pp. 7–11, Weierstrass ambient line-bundle twists and section."
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

Let $B$ be a connected smooth compact complex threefold, define its holomorphic canonical line by $K_B:=\det\Omega^1_{B/\mathbb C}$, and set $L=K_B^{-1}$. Let $p:W\to B$ be the analytic weighted projective bundle of type $(2,3,1)$ associated with $L$, with coordinate twists $x\in\mathcal O_W(2)\otimes p^*L^2$, $y\in\mathcal O_W(3)\otimes p^*L^3$, and $z\in\mathcal O_W(1)$ with the weighted quotient and line-bundle gluing convention specified below. Let $Y\subset W$ be the analytic hypersurface $y^2=x^3+f xz^4+gz^6$, where $f\in H^0(B,L^4)$ and $g\in H^0(B,L^6)$ are holomorphic sections, and write $\pi=p|_Y:Y\to B$. Assume $Y$ is smooth, compact, and connected, and admits a smooth real positive closed $(1,1)$-form (the Kähler condition). The canonical-bundle formula then gives $K_Y\cong\mathcal O_Y$. In this item, a compact Calabi–Yau fourfold means a connected compact Kähler complex fourfold with holomorphically trivial canonical bundle, so $Y$ satisfies that convention. Write $a=c_1(B)=c_1(L)\in H^2(B;\mathbb Z)$, and let $\sigma\in H^2(Y;\mathbb Z)$ be the cohomology class Poincare dual to the section divisor at $z=0$. Then
$$c_2(Y)=\pi^*\!\bigl(c_2(B)+11a^2\bigr)+12\,\sigma\smile\pi^*a\quad\text{in }H^4(Y;\mathbb Z).$$

## Statement references

[[def-f4-weierstrass-model-on-a-line-bundle]]

[[thm-f4-weierstrass-canonical-bundle-formula]]

## Facts & Assumptions

**Given:** A connected smooth compact complex threefold $B$, its canonical bundle $K_B$, $L=K_B^{-1}$, and a smooth compact connected Weierstrass hypersurface $Y$ admitting the Kähler form specified in the Statement.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]. It is inherited through the Chern-class, CW-type, Thom, and broad Calabi–Yau suppliers used in [F2]–[F5]; the local weighted-Euler and divisor calculations require no further choice.

[F1] On a holomorphic frame cover of $L$ with $e_j=\gamma_{ij}e_i$, glue $U_i\times((\mathbb C^3\setminus0)/\mathbb C^*)$ using $(x_j,y_j,z_j)=(\gamma_{ij}^{-2}x_i,\gamma_{ij}^{-3}y_i,z_i)$ and the action $\lambda\cdot(x,y,z)=(\lambda^2x,\lambda^3y,\lambda z)$. These transitions commute with the action and satisfy the cocycle identity, so this defines the weighted bundle over the stated complex-manifold base. The Weierstrass equation is $y^2=x^3+fxz^4+gz^6$ with $x\in\mathcal O_W(2)\otimes\pi_W^*L^2$, $y\in\mathcal O_W(3)\otimes\pi_W^*L^3$, $z\in\mathcal O_W(1)$, and its section at infinity is $z=0$ ([[def-f4-weierstrass-model-on-a-line-bundle]]).

[F2] Here $L=K_B^{-1}$ and $a=c_1(L)=c_1(TB)$. The canonical-line calculation will be made directly from the Euler and normal sequences in step 2.1, so it applies to the complex-manifold base allowed here. The algebraic-base specialization is [[thm-f4-weierstrass-canonical-bundle-formula]]; its algebraicity hypothesis is not assumed for this local calculation.

[F3] On a path-connected CW base, the total Chern class is natural and multiplicative for Whitney sums; for a line bundle $Q$, $c(Q)=1+c_1(Q)$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]). The smooth manifolds $B$ and $Y$ are paracompact Hausdorff CGWH of CW homotopy type, and their smooth finite-rank bundles are numerable ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]). Step 1.2 supplies the transfer and exact-sequence splitting needed here.

[F4] A closed embedded complex submanifold's integral Poincare dual is represented by its normal Thom class, and the Thom isomorphism, normalized Thom class, and zero-section pullback define the Euler class ([[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]], [[thm-thom-isomorphism-for-oriented-vector-bundles]], [[def-thom-class-by-fiberwise-normalization]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]). For a complex line its integral Euler class is its first Chern class, using the complex orientation and the Chern normalization of [F3].

[F5] For a smooth divisor inclusion $i:Z\hookrightarrow X$, define the cohomological Thom-Gysin map $i_!:H^k(Z;\mathbb Z)\to H^{k+2}(X;\mathbb Z)$ by the Thom isomorphism of its oriented real rank-two normal bundle, followed by relative-to-absolute and tubular-neighborhood maps. Its value $i_!(1)$ is the Poincare-dual class of $Z$. If $p:D(\nu_Z)\to Z$ is a tubular disk bundle with zero section $s$, then $s$ is a homotopy inverse to $p$. Thus for $\alpha\in H^*(X;\mathbb Z)$, restriction to the disk bundle is $p^*i^*\alpha$. The Thom isomorphism sends $i^*\alpha$ to $p^*i^*\alpha\smile u_{\nu_Z}$; the relative cup product and its map to absolute cohomology therefore give $i_!(i^*\alpha)=\alpha\smile i_!(1)$. This is the divisor self-intersection identity used below, with the orientation sign fixed by the tangent-first Thom convention ([[thm-thom-isomorphism-for-oriented-vector-bundles]], [[def-thom-class-by-fiberwise-normalization]], [[def-relative-cup-product]], [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]], [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]).

[F6] Chern classes on paracompact Hausdorff CGWH bases of CW type are the unique coefficients of the monic projective-bundle relation; their line normalization is the complex-oriented Euler class ([[def-chern-classes-from-the-projective-bundle-relation]], [[thm-integral-complex-projective-bundle-theorem]]). Euler classes are natural for oriented pullbacks in this scope, and a homotopy equivalence induces cohomology isomorphisms ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F7] On these same CW-type bases, $c_1(Q\otimes R)=c_1(Q)+c_1(R)$ and $c_1(Q^*)=-c_1(Q)$ for complex line bundles; $c_1(E)=c_1(\det E)$ for a positive-rank complex bundle ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]], [[lem-gts-first-chern-class-of-complex-bundle-equals-determinant]]). In particular $L=\det TB$ gives $a=c_1(L)=c_1(TB)$.



## Proof

**Proof technique:** compute the total Chern class by the weighted Euler and hypersurface sequences, then use the section's normal bundle to reduce its square.

1.1 The singular locus of the weighted projective fiber lies among points with at least one vanishing coordinate and nontrivial stabilizer. On $Y$, if $z\ne0$ the weight-one coordinate makes the stabilizer trivial. If $z=0$, the equation is $y^2=x^3$, so both $x$ and $y$ are nonzero; a stabilizer must satisfy $\lambda^2=\lambda^3=1$, hence $\lambda=1$. Thus $Y$ lies in the smooth quotient locus, where the three coordinate twists restrict to line bundles and the vertical Euler sequence is $$0\longrightarrow\mathcal O_Y\longrightarrow Q_2\oplus Q_3\oplus Q_1\longrightarrow T_{W/B}|_Y\longrightarrow0,$$ with $Q_2=\mathcal O_Y(2)\otimes\pi^*L^2$, $Q_3=\mathcal O_Y(3)\otimes\pi^*L^3$, and $Q_1=\mathcal O_Y(1)$. The first map is the infinitesimal weighted scaling $(2x,3y,z)$; its quotient is the tangent space to each weighted-projective fiber. Let $h=c_1(\mathcal O_Y(1))$ and identify $a$ with its pullback when it occurs on $Y$. [F1, given, algebra]

1.2 We justify the Chern identities on the actual manifold bases. Let $E,F\to X$ be numerable finite-rank complex bundles and $b:X'\to X$ a continuous map between path-connected paracompact Hausdorff CGWH bases of CW type. The projective charts identify $P(b^*E)=X'\times_XP(E)$ and pull the tautological line back. Euler naturality in [F6] pulls its class back; pulling back the monic relation and using uniqueness on $X'$ gives $c_i(b^*E)=b^*c_i(E)$. The rank-zero conventions give the same identity. Choose a path-connected CW model $q:K\to X$; CW complexes are paracompact Hausdorff and CGWH, and a pulled-back numeration numerates $q^*E$ and $q^*F$. Applying [F3] on $K$ and the naturality just proved yields $q^*(c(E\oplus F)-c(E)c(F))=0$. Since $q^*$ is an integral cohomology isomorphism, Whitney multiplicativity holds on $X$. For any exact sequence $0\to E'\to E\to E''\to0$ here, sum the local standard Hermitian metrics using a subordinate partition from a numeration of $E$. This defines a positive continuous Hermitian metric; the orthogonal complement of $E'$ is a subbundle mapped isomorphically to $E''$, so $E\cong E'\oplus E''$ as topological complex bundles. Thus $c(E)=c(E')c(E'')$ on these bases. Line normalization follows directly from [F6], and [F7] supplies the tensor powers used below. [A1, F3, F6, F7, choose, construct, algebra]

2.1 The tangent sequence of the smooth bundle projection and step 1.1 give $$c(TW|_Y)=\pi^*c(TB)(1+2h+2a)(1+3h+3a)(1+h).$$ The hypersurface equation is a section of $\mathcal O_Y(6)\otimes\pi^*L^6$, so its smooth zero locus has normal line with first Chern class $6h+6a$ and exact tangent-normal sequence. Taking determinants of these same sequences gives $K_Y\cong\pi^*(K_B\otimes L)\cong\mathcal O_Y$: the Euler determinant is $\mathcal O_Y(6)\otimes\pi^*L^5$, and the normal line is $\mathcal O_Y(6)\otimes\pi^*L^6$, so their tautological factors cancel in adjunction. This is a holomorphic line-bundle identity for the stated analytic base. Since $a=c_1(TB)$, the degree-one part of $c(TW|_Y)$ is $a+(6h+5a)=6h+6a$. The degree-two part is $$c_2(B)+a(6h+5a)+\bigl((2h+2a)(3h+3a)+(2h+2a)h+(3h+3a)h\bigr)=\pi^*c_2(B)+11h^2+23ha+11a^2.$$ The normal first Chern class equals the ambient first Chern class, so dividing the total Chern class by $1+(6h+6a)$ leaves its degree-two part unchanged. Consequently $$c_1(TY)=0,\qquad c_2(TY)=\pi^*c_2(B)+11h^2+23h\pi^*a+11\pi^*a^2.$$ [A1, F1, F2, F3, F7, step 1.1, step 1.2, algebra]

3.1 The divisor $\sigma$ is the smooth section cut out by $z=0$, and $h$ is its Poincare-dual divisor class. The normal sequence $0\to T\sigma\to TY|_\sigma\to N_{\sigma/Y}\to0$ and determinants give $K_\sigma\cong K_Y|_\sigma\otimes N_{\sigma/Y}$. Because $\sigma\cong B$, $K_Y$ is trivial by step 2.1, and $K_\sigma\cong K_B$, this identifies $N_{\sigma/Y}\cong K_B=L^{-1}$. The divisor normal line is $\mathcal O_Y(\sigma)|_\sigma$, so $i^*h=c_1(N_{\sigma/Y})=-a$. With the tangent-first convention in [F4], the Thom sign is $(-1)^{2\cdot6}=1$, so $i_!(1)=h$; [F5] gives $i_!(i^*h)=h\smile h$. Since $i^*h=-a=i^*(-\pi^*a)$ and $\pi\circ i=\operatorname{id}_B$, the Thom-Gysin identity in [F5] gives $$h^2=i_!(i^*h)=i_!(-a)=-\pi^*a\smile i_!(1)=-h\smile\pi^*a.$$ Here $i:\sigma\hookrightarrow Y$ is the divisor inclusion. [A1, F2, F3, F4, F5, F7, step 1.2, step 2.1, algebra]

4.1 Substitute $h^2=-h\pi^*a$ from step 3.1 into step 2.1: $$c_2(Y)=\pi^*c_2(B)+11(-h\pi^*a)+23h\pi^*a+11\pi^*a^2=\pi^*(c_2(B)+11a^2)+12h\pi^*a.$$ Since $h=\sigma$ by definition, this is the claimed integral class identity. This is a cohomology calculation for the smooth global Weierstrass specialization only; no formula for singular or resolved fourfolds follows. [step 2.1, step 3.1, algebra] ∎



The line bundle twist $L=K_B^{-1}$ and smoothness of the total hypersurface are essential inputs. The identity is in integral cohomology and does not assume torsion-free cohomology.
## Remarks

The line bundle twist $L=K_B^{-1}$ and smoothness of the total hypersurface are essential inputs. The identity is in integral cohomology and does not assume torsion-free cohomology.
