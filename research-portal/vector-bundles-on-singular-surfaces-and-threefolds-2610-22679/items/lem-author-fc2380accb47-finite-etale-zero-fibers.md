---
id: lem-author-fc2380accb47-finite-etale-zero-fibers
kind: lemma
title: The selected zero fibers are finite etale schemes
status: published
domain: mathematics
deps:
  - lem-author-fc2380accb47-simultaneous-good-parameters
  - lem-regular-section-parameter-family
  - thm-author-fc2380accb47-finite-type-geometric-input
  - lem-author-fc2380accb47-normal-smooth-strata
  - lem-author-fc2380accb47-coordinate-first-jets
  - math:def-axiom-of-choice
  - math:thm-conormal-sequence-closed-immersion
  - math:thm-differentials-smooth-locally-free
  - math:lem-sheaf-differentials-affine-compatibility
  - math:def-etale-morphism-schemes
  - math:def-smooth-morphism-schemes
  - math:def-finite-morphism-schemes
  - math:lem-differentials-commute-base-change-schemes
  - math:ex-pullback-free-module
  - math:thm-affine-fibre-product-tensor-ring
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:cor-square-matrix-invertible-iff-determinant-is-a-unit
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:def-integral-affine-scheme
  - math:lem-integral-finite-type-scheme-function-field
dependency_roles:
  lem-author-fc2380accb47-simultaneous-good-parameters: mathematical-premise
  lem-regular-section-parameter-family: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
  lem-author-fc2380accb47-normal-smooth-strata: mathematical-premise
  lem-author-fc2380accb47-coordinate-first-jets: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-conormal-sequence-closed-immersion: mathematical-premise
  math:thm-differentials-smooth-locally-free: mathematical-premise
  math:lem-sheaf-differentials-affine-compatibility: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-finite-morphism-schemes: mathematical-premise
  math:lem-differentials-commute-base-change-schemes: mathematical-premise
  math:ex-pullback-free-module: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  math:def-integral-affine-scheme: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
formulation_deps:
  - lem-author-fc2380accb47-simultaneous-good-parameters
  - lem-regular-section-parameter-family
  - lem-author-fc2380accb47-normal-smooth-strata
  - lem-author-fc2380accb47-coordinate-first-jets
  - math:def-axiom-of-choice
  - math:def-etale-morphism-schemes
  - math:def-smooth-morphism-schemes
  - math:def-finite-morphism-schemes
  - math:def-integral-affine-scheme
  - math:lem-integral-finite-type-scheme-function-field
argument_deps:
  - lem-author-fc2380accb47-simultaneous-good-parameters
  - lem-regular-section-parameter-family
  - thm-author-fc2380accb47-finite-type-geometric-input
  - lem-author-fc2380accb47-normal-smooth-strata
  - lem-author-fc2380accb47-coordinate-first-jets
  - math:def-axiom-of-choice
  - math:thm-conormal-sequence-closed-immersion
  - math:thm-differentials-smooth-locally-free
  - math:lem-sheaf-differentials-affine-compatibility
  - math:def-etale-morphism-schemes
  - math:def-smooth-morphism-schemes
  - math:def-finite-morphism-schemes
  - math:lem-differentials-commute-base-change-schemes
  - math:ex-pullback-free-module
  - math:thm-affine-fibre-product-tensor-ring
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:cor-square-matrix-invertible-iff-determinant-is-a-unit
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:def-integral-affine-scheme
  - math:lem-integral-finite-type-scheme-function-field
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 5
sources:
  references:
    - title: The Stacks Project, Lemma 10.143.3(7)
      url: https://stacks.math.columbia.edu/tag/00U2
      locator: Lemma 10.143.3, assertion (7) and its proof paragraph (7).
      statement: A finite-type algebra B over a field L is etale over L if and only if
        its module of differentials Omega_(B/L) vanishes.
      hypotheses: B is finite type over a field L, in any characteristic; no assertion
        over an arbitrary base ring.
      reading_limits: Read assertion (7) and proof paragraph (7). The cited Lemma
        10.140.3 and underlying smooth-algebra results are imported, not
        reconstructed. Applied only after establishing finite type and vanishing
        differentials for the actual affine zero fiber.
    - title: The Stacks Project, Lemma 10.143.4
      url: https://stacks.math.columbia.edu/tag/00U3
      locator: Lemma 10.143.4, full statement and proof.
      statement: An etale algebra over a field L is a finite product of finite
        separable extensions of L, and conversely.
      hypotheses: The base is a field L and the ring map is etale; the zero algebra is
        the empty-product case.
      reading_limits: Read the full statement and proof. Its cited smooth-algebra,
        Artinian-ring, primitive-element and Nullstellensatz inputs were not
        reconstructed. Used only for the finite-dimensional algebra and
        finite-separable-factor conclusions.
    - title: The Stacks Project, affine and geometric meanings of etale
      url: https://stacks.math.columbia.edu/tag/02GH
      locator: Definition 29.37.1; immediately following equivalence with smoothness
        of relative dimension zero; Lemma 29.37.7(1) and its direct proof.
      statement: The affine ring definition of etaleness agrees with smoothness of
        relative dimension zero; schemes etale over a field are disjoint unions
        of spectra of finite separable extensions.
      hypotheses: Morphisms of schemes; the base is a field for the disjoint-union
        description. Here the scheme is the spectrum of the finite-type algebra
        already obtained.
      reading_limits: Read the indicated definition, following equivalence, and Lemma
        29.37.7 with its direct proof. No reading of the entire section or
        reconstruction of its smoothness foundations is claimed. Used as the
        algebra-to-scheme bridge.
---

## Statement
Assume the Axiom of Choice (AC). Let $k$ be an algebraically closed field of arbitrary characteristic, let $X=\operatorname{Spec}A$ be a normal affine finite-type $k$-scheme of dimension at most three, and let $P$ be a rank-three vector bundle, meaning a finite locally free $\mathcal O_X$-module of rank three. Let $X_3$ be the union of the three-dimensional components and put $W=(X_3)_{\mathrm{sm}/k}$ and $D=X\setminus W$ with reduced structure. The empty stratum $W$ is allowed.

Write $P_Y$ for the pullback of $P$ along a scheme morphism $Y\to X$, and put $E=P^\vee=\mathcal Hom_{\mathcal O_X}(P,\mathcal O_X)$. Choose algebra generators $f_1,\ldots,f_d$ of $A$ over $k$ and global generators $\phi_1,\ldots,\phi_m$ of $E$. Index the family $\phi_i,f_l\phi_i$ as $\psi_1,\ldots,\psi_N$, where $N=m(d+1)$, allowing linear relations. Set $T=\mathbb A_k^N=\operatorname{Spec}k[t_1,\ldots,t_N]$. On $X\times_kT$, the universal functional is $\Phi=\sum_{j=1}^N t_j\psi_j:P_{X\times_kT}\to\mathcal O_{X\times_kT}$. Let $I$ be its zero subscheme, defined by the ideal sheaf generated locally by its three coefficients. Let $T^\circ\subseteq T$ be the nonempty good open supplied by simultaneous avoidance and transversality: over every field-valued parameter factoring through it, all zeros lie in $W$ and their derivative determinant is invertible.

For every point $a\in T^\circ$, set $L=\kappa(a)$, the residue field of its local ring, and $S_a=I\times_T\operatorname{Spec}L\subseteq X_L$, where $X_L=X\times_k\operatorname{Spec}L$. Then $S_a$ is a finite étale $L$-scheme, possibly empty. For every extension $K/L$, the scheme $S_a\times_L\operatorname{Spec}K$ is finite étale over $K$. Here an $L$-scheme $Y$ is geometrically smooth if for every field extension $K/L$ the structure morphism $Y\times_L\operatorname{Spec}K\to\operatorname{Spec}K$ is smooth; the dimension-zero assertion means that every such morphism has relative dimension zero. Thus $S_a$ is geometrically smooth of dimension zero, with the dimension assertion vacuous for empty fibers. In particular, for a chosen $a\in T^\circ(k)$, it is a finite disjoint union of copies of $\operatorname{Spec}k$, all in $X_{\mathrm{sm}/k}$. For the generic point $\eta$ of the integral parameter space $T$, write $k(T)=\kappa(\eta)=\operatorname{Frac}k[t_1,\ldots,t_N]$; the actual generic fiber $I\times_T\operatorname{Spec}k(T)$ is finite étale as well. No dominance is needed or asserted.

## Facts & Assumptions
**Given:** AC and exactly the field, strata, bundle, indexed family, universal zero subscheme and nonempty parameter open in the statement. Normality and the dimension bound concern $X$; the rank-three cotangent calculation is only on $W$, not on the lower-dimensional components.

**Goal:** Prove finiteness and geometric smoothness with the actual zero-scheme structure, including arbitrary extensions and the generic parameter.

[A1] AC is the axiom that every family of nonempty sets has a choice function. It is inherited from affine global generation in the first-jet construction and from the smooth-differential and affine-quotient suppliers used below; this deduction makes no additional arbitrary simultaneous selection. [[math:def-axiom-of-choice]]

[F1] [[lem-author-fc2380accb47-normal-smooth-strata]] supplies the specified $X_3,W,D$, with $W$ smooth of pure dimension three and $W\subseteq X_{\mathrm{sm}/k}$. [[lem-author-fc2380accb47-coordinate-first-jets]] supplies the specified indexed family and parameter space, retaining AC. [[lem-regular-section-parameter-family]] constructs $I$ and identifies every parameter pullback as the zero subscheme of the corresponding functional; its local ideal is generated by the three coefficients.

[F2] [[lem-author-fc2380accb47-simultaneous-good-parameters]] supplies the nonempty $T^\circ$ and a $k$-rational parameter. Every field-valued parameter through this open has its zero subscheme in the open $W$ and has invertible derivative determinant at every zero, including after field extension.

[F3] Under AC, [[math:thm-differentials-smooth-locally-free]] makes $\Omega^1_{W/k}$ locally free of rank three. For $p:W_L\to W$, [[math:lem-differentials-commute-base-change-schemes]] identifies $\Omega^1_{W_L/L}$ with $p^*\Omega^1_{W/k}$. Pulling back a free frame gives a free frame of the same rank by [[math:ex-pullback-free-module]]. These assertions apply with any extension field in place of $L$.

[F4] For the closed immersion $i:S_a\hookrightarrow W_L$ with ideal sheaf $\mathcal J$, [[math:thm-conormal-sequence-closed-immersion]] gives the right-exact sequence $\mathcal J/\mathcal J^2\to i^*\Omega^1_{W_L/L}\to\Omega^1_{S_a/L}\to0$, sending the class of $g$ to $dg$ restricted to $S_a$. No injectivity of the first arrow or regular-sequence hypothesis is required. A square matrix over a commutative ring with unit determinant is invertible by [[math:cor-square-matrix-invertible-iff-determinant-is-a-unit]].

[F5] The field-algebra part of [[thm-author-fc2380accb47-finite-type-geometric-input]] says that a finite-type $L$-algebra with zero differential module is étale and is a finite product of finite separable field extensions; over algebraically closed $L$ these factors are $L$. Its algebra-to-scheme bridge identifies this with scheme étaleness. A scheme over a field is finite when its affine coordinate algebra is finite dimensional, using [[math:def-finite-morphism-schemes]]; étale means smooth of relative dimension zero, using [[math:def-etale-morphism-schemes]], with smoothness as in [[math:def-smooth-morphism-schemes]]. The precise imported statements and reading limits are recorded below.

[F6] [[math:thm-affine-fibre-product-tensor-ring]] gives $X_L=\operatorname{Spec}(A\otimes_kL)$. Under AC, [[math:lem-closed-immersion-affine-quotient-and-base-change]] writes its closed subscheme $S_a$ as $\operatorname{Spec}B_a$ for a quotient $B_a$ of $A\otimes_kL$. The images of the fixed $f_l$ generate this quotient over $L$. For this affine scheme, [[math:lem-sheaf-differentials-affine-compatibility]] identifies $\Gamma(S_a,\Omega^1_{S_a/L})$ with $\Omega_{B_a/L}$.

[F7] [[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]] makes $k[t_1,\ldots,t_N]$ a domain, including $N=0$; its spectrum is integral in the sense of [[math:def-integral-affine-scheme]]. [[math:lem-integral-finite-type-scheme-function-field]] identifies the local ring at its generic point with that fraction field, hence also with its residue field. Every nonempty open contains the generic point: otherwise its closed complement would contain the closure of that point, namely all of $T$.

## Proof
1.1 Fix $a\in T^\circ$ and $L=\kappa(a)$. By [F1] and [F2], $S_a$ is closed in $X_L$ and factors as a closed subscheme of its open $W_L$. Work locally there on a frame of $P_L^\vee$ and write the coefficients of the functional as $g_1,g_2,g_3$. Since these generate $\mathcal J$, their classes generate $\mathcal J/\mathcal J^2$: reducing a local expression $\sum h_jg_j$ modulo $\mathcal J^2$ reduces its coefficients modulo $\mathcal J$. Thus $\mathcal O_{S_a}^3\twoheadrightarrow\mathcal J/\mathcal J^2$. Composing with the conormal map in [F4] gives the right-exact sequence $\mathcal O_{S_a}^{3}\xrightarrow{(dg_1,dg_2,dg_3)}i^*\Omega^1_{W_L/L}\longrightarrow\Omega^1_{S_a/L}\longrightarrow0$. By [F3], the middle sheaf has rank three. In local frames the first map has unit determinant at each zero by [F2], so [F4] makes it invertible locally. Its cokernel therefore vanishes on every chart, giving $\Omega^1_{S_a/L}=0$. No frame choice affects this conclusion: the zero ideal is intrinsic by [F1], and the cokernel is the intrinsic differential sheaf in [F4]. The empty case has the zero sheaf as well. [A1, F1, F2, F3, F4, given]

2.1 By [F6], $S_a=\operatorname{Spec}B_a$ with $B_a$ a finite-type $L$-algebra, and step 1.1 gives $\Omega_{B_a/L}=0$. Hence [F5] makes it a finite product of finite separable extensions. Each factor is finite dimensional and there are finitely many factors, so the product is finite dimensional; [F5] gives the claimed finite étale scheme structure. The empty product is the zero algebra and its spectrum is empty. For any extension $K/L$, [F1] identifies $S_a\times_L\operatorname{Spec}K$ with the zero scheme of the parameter $\operatorname{Spec}K\to T^\circ$. Repeating step 1.1 and the finite-type quotient and affine-differential calculation of [F6] over $K$ gives a finite étale $K$-scheme by [F5]. Thus every such base change is smooth of relative dimension zero. By the definition in the statement, this proves geometric smoothness and the asserted dimension, with the dimension assertion vacuous for empty fibers. For a chosen $a\in T^\circ(k)$, [F5] gives a finite disjoint union of copies of $\operatorname{Spec}k$, and [F1] and [F2] place them all in $W\subseteq X_{\mathrm{sm}/k}$. Finally [F7] puts $\eta$ in $T^\circ$ and identifies its residue field with $k(T)$, so the same argument proves the actual generic-fiber assertion. The proof uses no dominance assumption. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1] ∎

## External input
The locally authored proof uses only the field-algebra and scheme-interpretation parts of the declared finite-type geometric supplier. For a finite-type algebra over any field, vanishing Kähler differentials implies étaleness ([Stacks, Lemma 10.143.3(7)](https://stacks.math.columbia.edu/tag/00U2)). An étale algebra over a field is a finite product of finite separable extensions ([Stacks, Lemma 10.143.4](https://stacks.math.columbia.edu/tag/00U3)). The affine ring meaning of étale agrees with smoothness of relative dimension zero for schemes ([Stacks, Definition 29.37.1 and Lemma 29.37.7(1)](https://stacks.math.columbia.edu/tag/02GH)). These established premises are imported with the hypotheses and reading limits in the three source records; the conormal application, finiteness application and parameter deductions are the local argument above. No proof of those literature foundations is claimed here.
