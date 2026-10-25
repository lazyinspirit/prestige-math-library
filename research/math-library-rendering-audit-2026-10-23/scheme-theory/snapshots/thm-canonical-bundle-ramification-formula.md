---
id: thm-canonical-bundle-ramification-formula
kind: theorem
title: "Canonical bundle formula with the different"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-integral-scheme
  - def-coherent-module-scheme
  - def-different-divisor-curve-map
  - def-divisor-smooth-proper-curve
  - def-finite-morphism-schemes
  - def-nonconstant-morphism-curves-degree
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-pullback-cartier-divisor
  - def-quasi-coherent-module-scheme
  - def-sheaf-relative-differentials
  - lem-ag-differentials-transitivity
  - lem-cartier-divisor-addition-tensor
  - lem-curve-different-local-support-and-index-bound
  - lem-differentials-commute-base-change-schemes
  - lem-pullback-cartier-divisor-line-bundle
  - lem-rational-differential-divisor-well-defined-class
  - lem-sheaf-differentials-affine-compatibility
  - lem-torsion-quotient-invertible-sheaves-effective-divisor
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-differentials-smooth-locally-free
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - cor-dvr-is-a-pid
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice where the coherence and differential suppliers
require it. Let $f\colon C\to D$ be a finite surjective morphism of smooth
proper geometrically integral curves over a field $k$ with separable
function-field extension $k(C)/k(D)$. Then the natural map
$f^{*}\omega_D\to\omega_C$ induced by differentiation is injective with
cokernel $\Omega_{C/D}$, and there is a canonical isomorphism
$$\omega_C\cong f^{*}\omega_D\otimes_{\mathcal O_C}\mathcal O_C(R_f),$$
equivalently $K_C$ is linearly equivalent to $f^{*}K_D+R_f$ for canonical
divisors, where $R_f$ is the different divisor of $f$.

## Facts & Assumptions

**Given:** A finite surjective morphism $f\colon C\to D$ of smooth proper geometrically integral curves over a field $k$ with separable function-field extension $k(C)/k(D)$; the Axiom of Choice is assumed for the coherence and differential suppliers.

[F1] A curve over $k$ is geometrically integral, separated, of finite type and of chain dimension one; it is integral and Noetherian. Under Choice, a smooth curve has discrete valuation rings at its closed points, and $f$ finite surjective forces the function-field extension $k(C)/k(D)$ to be finite of degree $\deg(f)=[k(C):k(D)]\ge1$. ([[def-algebraic-curve-over-field]], [[thm-local-ring-smooth-curve-dvr]], [[def-finite-morphism-schemes]], [[def-different-divisor-curve-map]])

[F2] The canonical bundles $\omega_C=\Omega_{C/k}$ and $\omega_D=\Omega_{D/k}$ are invertible $\mathcal O$-modules, being locally free of rank one for smooth curves of relative dimension one; a nonzero rational differential $\omega$ on $C$ defines the canonical divisor $K_C=\operatorname{div}(\omega)=\sum_x\operatorname{ord}_x(\omega)[x]$, any two canonical divisors differ by a principal divisor, and the rational-section dictionary identifies $\mathcal O_C(K_C)\cong\omega_C$; the pullback $f^{*}\omega_D$ of an invertible sheaf along $f$ is invertible. ([[def-canonical-line-bundle-curve]], [[thm-differentials-smooth-locally-free]], [[def-invertible-sheaf]], [[lem-rational-differential-divisor-well-defined-class]])

[F3] For the composition $C\xrightarrow{f}D\to\operatorname{Spec}k$ the sequence of $\mathcal O_C$-modules $$f^{*}\Omega_{D/k}\longrightarrow\Omega_{C/k}\longrightarrow\Omega_{C/D}\longrightarrow0$$ is exact, where the first map is the base change of the universal derivation of $D/k$ along $f$ and the second is induced by the universal derivation of $C$ over $D$; on affine charts it is the transitivity sequence of Kähler differentials, and affineness of $f$ exhibits the charts compatibly with the sheaves of differentials. ([[lem-ag-differentials-transitivity]], [[lem-sheaf-differentials-affine-compatibility]], [[def-sheaf-relative-differentials]], [[lem-differentials-commute-base-change-schemes]])

[F4] If the function-field extension $k(C)/k(D)$ is separable, the sheaf $\Omega_{C/D}$ of relative differentials is coherent and torsion: it vanishes at the generic point of $C$, and at every closed point $p$ its stalk is a module of finite length $l_p=\operatorname{length}_{\mathcal O_{C,p}}(\Omega_{C/D,p})$ over the discrete valuation ring $\mathcal O_{C,p}$, zero for all but finitely many $p$; moreover $l_p=0$ if and only if $e_p=1$ and the residue extension $\kappa(p)/\kappa(f(p))$ is separable, and the support of $\Omega_{C/D}$ is the differential-ramification locus of $f$. ([[lem-curve-different-local-support-and-index-bound]], [[def-coherent-module-scheme]], [[def-quasi-coherent-module-scheme]])

[F5] The different divisor of $f$ is the effective divisor $R_f=\sum_p l_p[p]$ on $C$ determined by the lengths $l_p$ of the relative differentials. ([[def-different-divisor-curve-map]], [[def-divisor-smooth-proper-curve]])

[F6] Let $0\to\mathcal L\to\mathcal M\to\mathcal Q\to0$ be an exact sequence of $\mathcal O_C$-modules with $\mathcal L,\mathcal M$ invertible and $\mathcal Q$ a torsion sheaf of finite length $l_p$ at the closed points $p$ and zero generic stalk; then $\mathcal M\cong\mathcal L\otimes_{\mathcal O_C}\mathcal O_C\bigl(\sum_p l_p[p]\bigr)$. ([[lem-torsion-quotient-invertible-sheaves-effective-divisor]])

[F7] The current Cartier interfaces give $\omega_C\cong\mathcal O_C(K_C)$ for canonical divisors, identify tensor products with divisor addition, define the pullback Cartier divisor and identify its associated sheaf with the pulled-back line bundle, and identify the kernel of the divisor-to-Picard map with principal Cartier divisors. ([[def-invertible-sheaf-of-cartier-divisor]], [[def-linear-equivalence-cartier-divisors]], [[thm-line-bundle-rational-section-cartier-divisor]], [[lem-cartier-divisor-addition-tensor]], [[def-pullback-cartier-divisor]], [[lem-pullback-cartier-divisor-line-bundle]], [[thm-cartier-divisors-mod-principal-to-picard]])

[F8] The Axiom of Choice is assumed, here inherited from the coherence, differential and divisor suppliers; no further selection is made. ([[def-axiom-of-choice]])

[F9] Under Choice, for a finite dominant morphism between smooth integral curves, over a closed point $q$ the finite local algebra of the source is a torsion-free module over the target DVR $\mathcal O_{D,q}$, hence free. The local calculation is given in [[def-nonconstant-morphism-curves-degree]]. At the generic point the local map is a field extension, so the morphism is flat. ([[def-finite-morphism-schemes]], [[def-integral-scheme]], [[thm-local-ring-smooth-curve-dvr]], [[cor-dvr-is-a-pid]], [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]])



## Proof

**Proof technique:** direct; identify $\omega_C$ and $f^{*}\omega_D$ as the outer terms of the cotangent sequence, show the left map is injective using that its cokernel is a torsion sheaf, and apply the torsion-quotient lemma to obtain the twist by the different.

1.1 The cotangent sequence. Since $C$ and $D$ are curves over the field $k$, the composition $C\xrightarrow{f}D\to\operatorname{Spec}k$ has the exact sequence $f^{*}\Omega_{D/k}\to\Omega_{C/k}\to\Omega_{C/D}\to0$ of [F3], and $f$ is finite, hence affine, so the sequence is obtained by gluing its affine chart descriptions and the charts cover $C$. [F1, F3]

2.1 The two outer sheaves. By [F2] the sheaves $\omega_C=\Omega_{C/k}$ and $\omega_D=\Omega_{D/k}$ are invertible, and the pullback $f^{*}\omega_D=f^{*}\Omega_{D/k}$ along the morphism $f$ is again invertible; the middle term of the sequence of step 1.1 is $\omega_C$ and the left term is $f^{*}\omega_D$. [F2, step 1.1]

2.2 The cokernel and the different. The cokernel $\Omega_{C/D}$ of the sequence of step 1.1 is, by [F4], a torsion sheaf vanishing at the generic point of the integral curve $C$, with finite length $l_p$ at each closed point $p$ and zero for all but finitely many $p$, the extension $k(C)/k(D)$ being separable by hypothesis; by [F5] the different divisor is $R_f=\sum_p l_p[p]$, an effective divisor on $C$. [F4, F5, step 1.1]

3.1 Injectivity of the left map. Let $\varphi\colon f^{*}\omega_D\to\omega_C$ be the left map of step 1.1, a morphism between invertible sheaves on the integral curve $C$ by step 2.1. Its cokernel is $\Omega_{C/D}$, which has zero stalk at the generic point $\eta$ of $C$ by step 2.2, so the stalk $\varphi_\eta\colon(f^{*}\omega_D)_\eta\to(\omega_C)_\eta$ is surjective; both stalks are one-dimensional over $k(C)$ by [F2], so $\varphi_\eta$ is an isomorphism and in particular nonzero. For each closed point $p$ the localised map $\varphi_p$ between the free rank-one modules $(f^{*}\omega_D)_p$ and $(\omega_C)_p$ over the discrete valuation ring $\mathcal O_{C,p}$ is multiplication by a nonzero element of $\mathcal O_{C,p}$ in chosen local frames: it is nonzero because the generic map $\varphi_\eta$ is an isomorphism, and multiplication by a nonzero element of the domain $\mathcal O_{C,p}$ is injective; hence $\varphi_p$ is injective for every closed point $p$ and $\varphi$ is injective as a morphism of sheaves. Therefore $0\to f^{*}\omega_D\to\omega_C\to\Omega_{C/D}\to0$ is exact, the first assertion of the Statement. [F1, F2, step 2.1, step 2.2]

4.1 The twist. By steps 2.1, 2.2 and 3.1 the exact sequence $0\to f^{*}\omega_D\to\omega_C\to\Omega_{C/D}\to0$ has invertible outer terms and torsion cokernel of finite lengths $l_p$ with zero generic stalk, so the torsion-quotient lemma [F6] applies with $\mathcal L=f^{*}\omega_D$, $\mathcal M=\omega_C$ and $\mathcal Q=\Omega_{C/D}$ and gives the canonical isomorphism $\omega_C\cong f^{*}\omega_D\otimes_{\mathcal O_C}\mathcal O_C\bigl(\sum_p l_p[p]\bigr)=f^{*}\omega_D\otimes_{\mathcal O_C}\mathcal O_C(R_f)$, since $\sum_p l_p[p]=R_f$ by step 2.2. This is the sheaf form of the canonical bundle formula. [F5, F6, step 2.1, step 2.2, step 3.1]

5.1 The divisor form. By [F9], $f$ is flat, so the pullback $f^*K_D$ is defined by [[def-pullback-cartier-divisor]]. Let $K_C$ and $K_D$ be canonical divisors. The current interfaces [F7] give $\mathcal O_C(K_C)\cong\omega_C$, $f^*\mathcal O_D(K_D)\cong\mathcal O_C(f^*K_D)$, and $\mathcal O_C(X+Y)\cong\mathcal O_C(X)\otimes\mathcal O_C(Y)$. Applying these to step 4.1 gives $\mathcal O_C(K_C)\cong\mathcal O_C(f^*K_D+R_f)$. Since the kernel of $D\mapsto[\mathcal O_C(D)]$ consists of principal Cartier divisors by [F7], $K_C$ and $f^*K_D+R_f$ are linearly equivalent. [F7, F9, step 4.1]

6.1 Conclusion. The differential map is injective with cokernel $\Omega_{C/D}$ by step 3.1, and step 4.1 gives the canonical-bundle isomorphism; step 5.1 gives its divisor form. Separability is used in step 2.2 through [F4], and the Cartier and pullback interfaces are the current suppliers listed in [F7]. [F4, F7, F8, F9, step 2.2, step 3.1, step 4.1, step 5.1] ∎
