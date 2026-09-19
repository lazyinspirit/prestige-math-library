---
id: thm-naturality-normalization-and-whitney-sum-for-chern-classes
kind: theorem
title: Naturality, normalization, and Whitney sum for Chern classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-chern-classes-from-the-projective-bundle-relation, def-complex-projective-bundle-and-tautological-complex-line, thm-integral-complex-projective-bundle-theorem, def-relative-cup-product, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the numerable-bundle and Thom/Euler suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Proof of the Whitney sum formula, printed pp.79-81"
---

## Statement

Assume AC. Let $E\to B$, $F\to B$ be numerable complex bundles of ranks
$m,n\geq0$ over a path-connected CW complex $B$.

1. **Naturality.** For every continuous $f:B'\to B$ with $B'$ a path-connected
   CW complex (or a CW-type base of [[thm-integral-complex-projective-bundle-theorem]]),
   $$c_i(f^*E)=f^*c_i(E)\qquad\text{for all }i\geq0.$$
2. **Normalization.** On a complex line $L$, $c_1(L)=e(L_{\mathbb R})$ and
   $c_i(L)=0$ for $i\geq2$.
3. **Whitney sum.** $c(E\oplus F)=c(E)c(F)$, that is
   $c_k(E\oplus F)=\sum_{i+j=k}c_i(E)c_j(F)$ for every $k\geq0$.
4. **Conventions.** $c_0(E)=1$, $c_i(E)=0$ for $i>\operatorname{rank}E$, and
   $c(0_B)=1$; adjoining a trivial summand does not change the total class,
   $c(E\oplus\varepsilon^r)=c(E)$ for $r\geq0$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the numerable-bundle, relative-cohomology and Euler-class suppliers ([[def-axiom-of-choice]]).

[F1] $c_i(E)$ is the $i$-th coefficient of the unique monic relation $x_E^n-c_1(E)x_E^{n-1}+\cdots+(-1)^nc_n(E)=0$, with $c_0=1$, $c_i=0$ above the rank, $c(0_B)=1$, and $c_1(L)=e(L_{\mathbb R})$ for a line ([[def-chern-classes-from-the-projective-bundle-relation]]).

[F2] The projective-bundle theorem gives the free basis $1,x_R,\dots,x_R^{n-1}$ over $H^*(B;R)$ and asserts that the monic relation generates every polynomial relation ([[thm-integral-complex-projective-bundle-theorem]]).

[F3] For a pullback $f^*E$ the projective bundle is the pullback of $P(E)$ and the tautological class pulls back: $x_{f^*E}=f^*x_E$, by naturality of the Euler class in the complex orientation; on the subbundle $P(E)\subset P(E\oplus F)$ the class $x_{E\oplus F}$ restricts to $x_E$ ([[def-complex-projective-bundle-and-tautological-complex-line]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F5] For open $A,B\subseteq X$ with $X=A\cup B$ there is a relative cup product $H^p(X,A;R)\otimes H^q(X,B;R)\to H^{p+q}(X,A\cup B;R)$ ([[def-relative-cup-product]]).

[F6] If $i:A\hookrightarrow U$ is a deformation-retract inclusion, then
$i^*:H^*(U;\mathbb Z)\to H^*(A;\mathbb Z)$ is an isomorphism; and the long
exact sequence of $(X,U)$ identifies the image of
$H^*(X,U)\to H^*(X)$ with the kernel of restriction to $U$
([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]],
[[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F7] A rank-$k$ bundle with a nowhere-zero section has vanishing Euler class: $e=0$ ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F8] Direct sums of complex bundles are formed fiberwise with the induced complex structure, and the construction is compatible with pullback ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Proof

**Proof technique:** direct.

**Given:** AC, numerable complex bundles $E\to B$, $F\to B$ of ranks $m,n\geq0$ over a path-connected CW complex $B$, and a continuous map $f:B'\to B$ from a path-connected CW complex.

1.1 Naturality of the class $x$: the projective bundle of $f^*E$ is canonically $f^*P(E)$ and the tautological line of $f^*E$ is the pullback of $\gamma_E$, so $x_{f^*E}=f^*x_E$ by naturality of the Euler class in the complex orientation. [F3, given]

1.2 Rank conventions: by [F1] one has $c_0=1$, $c_i=0$ above the rank, $c(0_B)=1$, and on a line $c_1(L)=e(L_{\mathbb R})$ with $c_i(L)=0$ for $i\geq2$; this is assertion 2 and the first part of assertion 4. [F1]

1.3 If $m=0$ or $n=0$, the Whitney formula follows immediately from
$c(0_B)=1$; hence assume $m,n\geq1$. Let $X=P(E\oplus F)$ and put
$U_1=X\setminus P(E)$, $U_2=X\setminus P(F)$; the subsets
$P(E),P(F)\subseteq X$ are disjoint and $U_1\cup U_2=X$. The map that sends a
point of $U_2$, a line not contained in $F$, to the line spanned by its
$E$-component is a deformation retraction of $U_2$ onto $P(E)$, and
symmetrically $U_1$ deformation retracts onto $P(F)$. [F1, F8, given]

2.1 Applying $f^*$ to the defining relation of $E$ and using step 1.1 expresses $x_{f^*E}^m$ as a monic relation with coefficients $f^*c_i(E)$; by uniqueness in [F2] these are the coefficients of $f^*E$, so $c_i(f^*E)=f^*c_i(E)$ for all $i$, which is assertion 1. [F2, step 1.1]

2.2 The classes $\omega_1:=\sum_{j=0}^m(-1)^jc_j(E)\,x^{m-j}$ and $\omega_2:=\sum_{j=0}^n(-1)^jc_j(F)x^{n-j}$, where $x=x_{E\oplus F}$ and $c_j$ of a summand means the pullback of $c_j$ to $X$, satisfy: on $P(E)\subseteq X$ the class $x$ restricts to $x_E$ and $\omega_1$ restricts to the defining relation of $E$, hence to $0$. Since $P(E)\hookrightarrow U_2$ is a deformation retract, [F6] shows that the restriction of $\omega_1$ to $U_2$ is also zero. The long exact sequence of $(X,U_2)$ therefore gives a relative lift of $\omega_1$ in $H^*(X,U_2)$. Symmetrically $\omega_2$ has a lift in $H^*(X,U_1)$. [F2, F3, F6, step 1.3]

3.1 Changing coefficients in step 2.1 gives the same identity over $R=\mathbb Z$ and over every $\mathbb F_p$, and the rank cutoff is preserved because $f^*E$ has the same rank. [step 1.2, step 2.1]

3.2 The relative cup product [F5] with $A=U_2$, $B=U_1$ maps $\omega_1\otimes\omega_2$ into $H^*(X,U_1\cup U_2)=H^*(X,X)=0$ because $U_1\cup U_2=X$. Hence the product of the two classes is zero in $H^*(X)$: $\sum_{j=0}^{m+n}(-1)^j\Bigl(\sum_{r+s=j}c_r(E)c_s(F)\Bigr)x^{m+n-j}=0$. [F5, step 2.2]

4.1 Comparison with the defining relation of $E\oplus F$: by [F2] the unique monic relation of $E\oplus F$ is $x^{m+n}+\sum_{j=1}^{m+n}(-1)^jc_j(E\oplus F)x^{m+n-j}=0$. Subtracting the relation of step 3.2 from it gives a polynomial relation of degree less than $m+n$ in $x$, so by the basis property of [F2] all its coefficients vanish. Hence $c_j(E\oplus F)=\sum_{r+s=j}c_r(E)c_s(F)$ for all $j$, which is assertion 3. [F2, step 3.2]

5.1 Stabilization. For the trivial complex line $\varepsilon^1$ the identity section is nowhere zero, so $e(\varepsilon^1_{\mathbb R})=0$ by [F7] and $c(\varepsilon^1)=1$ by assertion 2; the trivial bundle $\varepsilon^r$ is a sum of trivial lines, so assertion 3 gives $c(\varepsilon^r)=1$ and hence $c(E\oplus\varepsilon^r)=c(E)$ for all $r\geq0$. [F1, F7, step 4.1]

6.1 Boundary cases. The cases $m=0$ and $n=0$ were discharged in step 1.3. In the rank-one case $m=1$ the class $\omega_1=x-c_1(E)$ and assertion 2 is [F1]. The empty base is excluded by the path-connected hypothesis, and a disconnected base is treated componentwise. AC is used only through [A1] in the bundle, relative-cohomology and Euler suppliers. [A1, F1, F2, step 1.3, step 3.2, step 5.1] ∎

## Source notes

Assertions 1 and 3 are Hatcher, *Vector Bundles & K-Theory* section 3.1, in the proof of Theorem 3.2: naturality is the pullback comparison of the defining relations, and the Whitney formula is the relative-class argument with the two open sets $U_1,U_2$ that deformation retract onto the two projective subbundles. The signs $(-1)^j$ are carried because the page defines $c_i$ by the relation $x^n-c_1x^{n-1}+\cdots+(-1)^nc_n=0$; with this convention assertion 3 is exactly the Whitney product formula.
