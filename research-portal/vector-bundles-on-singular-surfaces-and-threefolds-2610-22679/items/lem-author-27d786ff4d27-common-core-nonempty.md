---
id: lem-author-27d786ff4d27-common-core-nonempty
kind: lemma
title: A common-core zero curve exists on a nonempty parameter open
status: published
domain: mathematics
deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-regular-section-parameter-family
  - thm-author-27d786ff4d27-relative-jacobian-openness
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-scheme-theoretic-fibre
  - math:def-smooth-morphism-schemes
  - math:def-relative-dimension-smooth-morphism
  - math:thm-differentials-smooth-locally-free
  - math:thm-cotangent-space-maximal-ideal-quotient
  - math:thm-smooth-morphisms-stable-base-change-composition
  - math:lem-differentials-commute-base-change-schemes
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:def-affine-scheme-spectrum
  - math:def-axiom-of-choice
  - math:lem-field-valued-points-of-schemes
  - math:def-fibre-product-schemes-universal-property
formulation_deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-regular-section-parameter-family
  - math:def-scheme-theoretic-fibre
  - math:def-smooth-morphism-schemes
  - math:def-relative-dimension-smooth-morphism
  - math:def-affine-scheme-spectrum
  - math:def-axiom-of-choice
argument_deps:
  - lem-author-27d786ff4d27-dual-global-controls
  - lem-regular-section-parameter-family
  - thm-author-27d786ff4d27-relative-jacobian-openness
  - thm-author-fc2380accb47-finite-type-geometric-input
  - math:def-scheme-theoretic-fibre
  - math:def-smooth-morphism-schemes
  - math:def-relative-dimension-smooth-morphism
  - math:thm-differentials-smooth-locally-free
  - math:thm-cotangent-space-maximal-ideal-quotient
  - math:thm-smooth-morphisms-stable-base-change-composition
  - math:lem-differentials-commute-base-change-schemes
  - math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - math:def-affine-scheme-spectrum
  - math:def-axiom-of-choice
  - math:lem-field-valued-points-of-schemes
  - math:def-fibre-product-schemes-universal-property
dependency_roles:
  lem-author-27d786ff4d27-dual-global-controls: mathematical-premise
  lem-regular-section-parameter-family: mathematical-premise
  thm-author-27d786ff4d27-relative-jacobian-openness: mathematical-premise
  thm-author-fc2380accb47-finite-type-geometric-input: mathematical-premise
  math:def-scheme-theoretic-fibre: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-relative-dimension-smooth-morphism: mathematical-premise
  math:thm-differentials-smooth-locally-free: mathematical-premise
  math:thm-cotangent-space-maximal-ideal-quotient: mathematical-premise
  math:thm-smooth-morphisms-stable-base-change-composition: mathematical-premise
  math:lem-differentials-commute-base-change-schemes: mathematical-premise
  math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-field-valued-points-of-schemes: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
---

## Statement
Assume the Axiom of Choice (AC) and the global controlling-family setup over an algebraically closed field $k$: $X$ is an integral normal affine finite-type $k$-scheme of dimension three, $S$ is the finite smooth zero scheme of the preceding point functional, $U=X\setminus S$, and $Q|_U$ is its rank-two kernel bundle. Put $E=(Q|_U)^\vee$. Let $\sigma_1,\ldots,\sigma_N$ be the constructed global sections generating $E$ and spanning first jets at every smooth closed point, with coefficient space $T=\mathbb A_k^N$. For any nonempty open $O\subset U$ smooth over $k$, there is a nonempty open $T_O\subset T$ such that each $k$-parameter in $T_O$ has a nonempty scheme-theoretic zero locus on $O$. The zero scheme at the generic parameter is nonempty as well. This conclusion uses an actual smooth point of the incidence projection, rather than an inference from its total dimension.

## Facts & Assumptions
**Given:** AC and the controlling-family setup of the Statement. More explicitly, the preceding functional is $s:P\to\mathcal O_X$ on a rank-three bundle, $S$ is its finite smooth zero scheme, and $Q=\ker s$. A vector bundle is a finite locally free module sheaf, a frame is a local sheaf basis, and the dual consists of module-sheaf homomorphisms to the structure sheaf. A section of $E$ is thus a functional on $Q|_U$. Unsubscripted products below are over $k$.

**Goal:** Ensure nonemptiness on a common open core before asserting irreducibility by charts.

[F1] [[lem-author-27d786ff4d27-dual-global-controls]] supplies precisely this setup, rank-two bundle, finite indexed family and $T=\operatorname{Spec}k[t_1,\ldots,t_N]$. At a smooth closed point $x$, write $R=\mathcal O_{O,x}$, $\mathfrak m=\mathfrak m_x$, $E(x)=E_x/\mathfrak mE_x$, and $J_x^1E=E_x/\mathfrak m^2E_x$. First-jet spanning means that the coefficient map $k^N\to J_x^1E$ is surjective. In a frame this allows any prescribed value and, at value zero, any two classes in $\mathfrak m/\mathfrak m^2$, hence any first derivative. This last assertion follows directly from $E_x\cong R^2$ and does not require independent variation of a redundant indexed coefficient list.

[F2] Apply [[lem-regular-section-parameter-family]] to the bundle $Q|_O$, whose dual is $E|_O$, and the restrictions of the $\sigma_i$. It constructs $I_O\subset O\times T$ from the two coefficients of the universal functional $\sum_i t_i\sigma_i$. Its pullback at every valued parameter is the actual zero scheme of that functional. The scheme-theoretic fibre at any point $b\in T$, including a nonclosed point, is $(I_O)_b=I_O\times_T\operatorname{Spec}\kappa(b)$ as in [[math:def-scheme-theoretic-fibre]].

[F3] Smoothness and its preservation by open restriction have the meaning in [[math:def-smooth-morphism-schemes]]. The relative-dimension convention is [[math:def-relative-dimension-smooth-morphism]]. The nonempty smooth open $O$ has pure dimension three, by the dimension convention for the controlling setup in [F1]. Under AC, [[math:thm-differentials-smooth-locally-free]] makes $\Omega_{O/k}$ locally free of rank three. At a $k$-rational point, [[math:thm-cotangent-space-maximal-ideal-quotient]] identifies $\mathfrak m/\mathfrak m^2$ with $\Omega_{O/k}(x)$ by $[f]\mapsto\mathrm df(x)$. Here $\Omega_{O/k}(x)$ denotes the residue-field fibre of the relative differential sheaf. We write $T_xO=\operatorname{Hom}_k(\mathfrak m/\mathfrak m^2,k)$; the derivative of a zero-valued section with coefficient germs $f_1,f_2\in\mathfrak m$ sends $v$ to $(v([f_1]),v([f_2]))$ in the chosen frame of $E(x)$. Changing that frame multiplies this derivative by its invertible value matrix, because the section has value zero.

[F4] Under AC, [[math:thm-smooth-morphisms-stable-base-change-composition]] makes $O\times T\to T$ smooth. [[math:lem-differentials-commute-base-change-schemes]] identifies its relative differential sheaf with the pullback of $\Omega_{O/k}$, compatibly with differentials of local functions. Thus [F3] identifies its differential fibre at a rational pair $(x,a)$ with $\mathfrak m/\mathfrak m^2$; its pure relative dimension is three. [[thm-author-27d786ff4d27-relative-jacobian-openness]] then applies to two local coefficient functions with independent relative differentials at their common zero. It gives a smooth neighbourhood in their zero scheme of pure relative dimension $3-2=1$, with open image in $T$, in every characteristic.

[F5] [[thm-author-fc2380accb47-finite-type-geometric-input]] supplies a closed $k$-rational point in the nonempty locally finite-type open $O$; algebraic closure of $k$ is essential to this application. It also supplies the stated finite-type dimension conventions. The same rational-point conclusion applies to any nonempty parameter open when a rational parameter is needed.

[F6] [[math:cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]] makes $B=k[t_1,\ldots,t_N]$ a domain. [[math:def-affine-scheme-spectrum]] gives the prime-ideal points of $T=\operatorname{Spec}B$ and its basic opens $D(h)=\{\mathfrak p:h\notin\mathfrak p\}$. We call $\eta=(0)$ its generic point: every nonempty open contains some nonempty $D(h)$, whence $h\ne0$ and $\eta\in D(h)$. Thus every nonempty open contains $\eta$, and any two nonempty opens meet, which is the irreducibility property used below.

[F7] For any scheme morphism $f:Y\to T$, a point $y\in Y$ with $b=f(y)$ induces a residue-field embedding $\kappa(b)\to\kappa(y)$. By [[math:lem-field-valued-points-of-schemes]], its spectrum map $\rho:\operatorname{Spec}\kappa(y)\to\operatorname{Spec}\kappa(b)$ and the canonical residue-field points $c_y:\operatorname{Spec}\kappa(y)\to Y$ and $c_b:\operatorname{Spec}\kappa(b)\to T$ satisfy $f\circ c_y=c_b\circ\rho$. By [[math:def-fibre-product-schemes-universal-property]], this compatible pair determines a unique morphism $\operatorname{Spec}\kappa(y)\to Y\times_T\operatorname{Spec}\kappa(b)$ whenever the indicated fibre product is formed, in particular for the scheme-theoretic fibre in [F2]. Its source has one point, so that fibre is nonempty. The compatibility assertion uses the choice-free canonical-point part of the field-valued-points supplier, not its common-field-extension assertion.

[A1] [[math:def-axiom-of-choice]] is assumed at the controlling-family invocation in [F1] and at the smooth-differential and smooth-base-change invocations in [F3] and [F4]. Choosing a single closed point, two independent cotangent vectors and one coefficient preimage makes no further arbitrary-index choice.

## Proof
**Given:** The setup, nonempty smooth $O$, and facts above, with $\pi:I_O\to T$ the incidence projection.

1.1 By [F5], choose a closed $x\in O$ with $\kappa(x)=k$. By [F3], $\mathfrak m/\mathfrak m^2$ is three-dimensional, so choose two linearly independent classes $u_1,u_2$ and a frame of $E$ near $x$. By [F1], prescribe the zero-valued first jet with coefficient classes $u_1,u_2$ and lift it to $a\in k^N=T(k)$. The resulting section has zero value at $x$ and derivative $T_xO\to E(x)$ of rank two. Indeed, extend $u_1,u_2$ to a basis of the three-dimensional cotangent space; its dual coordinate functionals map to the two coordinate vectors of $E(x)$. In the pulled-back frame, let $c_1,c_2$ be the two coefficients of the universal functional. They vanish at $(x,a)$, and [F2] identifies their zero scheme with $I_O$ locally. By [F4], $\mathrm d_{(O\times T)/T}c_1(x,a)$ and $\mathrm d_{(O\times T)/T}c_2(x,a)$ correspond to $u_1,u_2$: the parameter coordinates have relative differential zero and specialize to $a_i$, so these are exactly the differentials of the two specialized coefficient functions. Restrict to an affine neighbourhood inside this frame chart. The relative Jacobian criterion in [F4] now applies to the smooth ambient projection of pure relative dimension three and these two independent differential classes. It gives an open neighbourhood $N$ of $(x,a)$ in $I_O$ such that $N\to T$ is smooth of pure relative dimension one. Equivalently, the two coefficient rows augment a local smooth presentation to an invertible maximal Jacobian minor. All these inputs hold in every characteristic. [F1, F2, F3, F4, F5, A1, given, choose, construct, algebra]

2.1 Set $T_O=\pi(N)$. By [F4] this is open and contains $a$, hence is nonempty. Every $b\in T_O$ has a preimage $y\in N$. By [F7], the canonical map $c_y:\operatorname{Spec}\kappa(y)\to N$, composed with $N\hookrightarrow I_O$, and the residue-field map $\rho:\operatorname{Spec}\kappa(y)\to\operatorname{Spec}\kappa(b)$ have equal composites to $T$. The fibre-product universal property in [F7] therefore gives a morphism $\operatorname{Spec}\kappa(y)\to (I_O)_b$ to the fibre in [F2]. Since its source has one point, $(I_O)_b$ is nonempty. Consequently the actual zero scheme on $O_{\kappa(b)}$ is nonempty for every such $b$. In particular this holds for each $k$-parameter in $T_O$. By [F6], the generic point $\eta$ belongs to $T_O$, so the generic zero scheme is nonempty as well. The image of this actual smooth incidence neighbourhood contains the generic point and is dense in $T$; this is the claimed dominance and supplies the nonempty common-core fibres without inferring dominance from the dimension of the total incidence. [F2, F4, F6, F7, step 1.1, construct] ∎
