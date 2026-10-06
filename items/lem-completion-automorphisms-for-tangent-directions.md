---
id: lem-completion-automorphisms-for-tangent-directions
kind: lemma
title: An automorphism of the completed local ring matching two tangent directions preserves the homogenization
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps:
- cor-equicharacteristic-complete-local-power-series-quotient
- def-adic-completion-of-a-module
- def-derivation-algebra
- def-embedding-dimension-and-regular-local-ring
- def-field
- def-homogenized-ideal
- def-ideal-of-derivatives
- def-maximal-order-and-tangent-directions
- def-simple-normal-crossings-divisors
- def-strict-transform-closed-subscheme
- lem-coefficient-field-separable-adjunction-step
- lem-coefficient-field-transcendental-adjunction-step
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-completion-of-a-noetherian-local-ring
- thm-completion-preserves-regular-local-rings
- def-axiom-of-choice
- thm-differentials-smooth-locally-free
- cor-derivations-represented-by-differentials
- cor-completion-commutes-with-finite-quotients-and-submodules
- thm-associated-graded-ring-of-a-regular-local-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and $\operatorname{char}K=0$ ([[def-field]]).

Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order on the smooth $K$-scheme $X$ and let $u,v\in T(\mathcal I,\mu)_x=\mathcal D^{\mu-1}(\mathcal I)_x$ be tangent directions at $x\in\operatorname{supp}(\mathcal I,E,\mu)$ that are transversal to $E$ ([[def-maximal-order-and-tangent-directions]]).
Then there is an automorphism $\widehat\varphi_{uv}$ of the completed local scheme $\widehat X_x:=\operatorname{Spec}\widehat{\mathcal O}_{X,x}$ ([[def-adic-completion-of-a-module]], [[thm-completion-of-a-noetherian-local-ring]]) such that:
(1) $\widehat\varphi_{uv}^*(H\widehat{\mathcal I}_x)=(H\widehat{\mathcal I}_x)$;
(2) $\widehat\varphi_{uv}^*(E)=E$;
(3) $\widehat\varphi_{uv}^*(u)=v$;
(4) the formal support, defined here as $\operatorname{supp}(\widehat{\mathcal I},\mu):=V(T(\mathcal I)R)$ is contained in the fixed-point set of $\widehat\varphi_{uv}$.

## Facts & Assumptions

**Given:** Assume $\operatorname{char}K=0$. Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order on the smooth $K$-scheme $X$, let $x\in\operatorname{supp}(\mathcal I,E,\mu)$, let $u,v\in T(\mathcal I,\mu)_x=\mathcal D^{\mu-1}(\mathcal I)_x$ be tangent directions transversal to $E$, and let $R=\widehat{\mathcal O}_{X,x}$ with $\widehat X_x=\operatorname{Spec}R$.

[F1] [[def-maximal-order-and-tangent-directions]], [[def-embedding-dimension-and-regular-local-ring]]: $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$; $u,v\in T(\mathcal I)_x$ have multiplicity one; since $X$ is smooth at $x$ the local ring is regular and $u,v$ are each part of a regular system of parameters; transversality to $E$ means the parameters can be chosen compatible with the local equations of the members of $E$ through $x$.

[F2] [[thm-completion-of-a-noetherian-local-ring]], [[thm-completion-preserves-regular-local-rings]]: $R$ is a Noetherian regular local ring, faithful flat over $\mathcal O_{X,x}$, with maximal ideal $\mathfrak mR$; $\widehat{\mathcal I}=\mathcal I R$, and the completed tangent ideal is $\widehat T=T(\mathcal I)R$.

[F3] [[def-homogenized-ideal]]: $H(\mathcal I)=\sum_{i=0}^{\mu-1}\mathcal D^i(\mathcal I)T(\mathcal I)^i$, so its completion is $\widehat{H(\mathcal I)}=\sum_i\widehat{\mathcal D^i(\mathcal I)}\,\widehat T^{\,i}$.

[F4] [[def-field]], [[def-derivation-algebra]], [[def-ideal-of-derivatives]]: Write $\widehat{\mathcal D^i(\mathcal I)}=\mathcal D^i(\mathcal I)R$; formal parameter derivatives fixing the coefficient field send this completed ideal into $\mathcal D^{i+1}(\mathcal I)R$. To justify this, restrict a formal parameter derivation to $\mathcal O_{X,x}$. It is a $K$-derivation into $R$, and the finite-free differential module identifies it with an $R$-linear combination of the algebraic $K$-derivations ([[thm-differentials-smooth-locally-free]], [[cor-derivations-represented-by-differentials]]). Leibniz also differentiates the multiplying coefficients in $R$, giving terms already in the lower derivative ideal. This supplies the Taylor containment without identifying the full algebraic differential module of a power-series ring with a finite module. In characteristic zero, for a continuous coordinate substitution $u_j\mapsto u_j+\delta_j$ with all $\delta_j$ in an ideal $T$, formal Taylor expansion gives
$$\varphi^*(f)=\sum_{\alpha\in\mathbb N^n}\frac{1}{\alpha!}(\partial^\alpha f)\,\delta^\alpha,$$
convergently in the maximal-adic topology; if $f\in\mathcal D^i(\mathcal I)$, then $\partial^\alpha f\in\mathcal D^{i+|\alpha|}(\mathcal I)$.

[F5] [[def-simple-normal-crossings-divisors]], [[def-maximal-order-and-tangent-directions]]: the local equations of the components of $E$ through $x$ span a subspace $W\subseteq\mathfrak m/\mathfrak m^2$. Transversality says that each of $u$ and $v$ is independent of $W$, so the boundary equations together with either direction can be completed separately to a regular system of parameters; no common complementary parameters are asserted.

[F6] [[lem-coefficient-field-transcendental-adjunction-step]], [[lem-coefficient-field-separable-adjunction-step]], [[cor-equicharacteristic-complete-local-power-series-quotient]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: $R$ is a complete equicharacteristic regular local ring, and smoothness in characteristic zero makes $\kappa(x)/K$ a finitely generated separably generated extension. Starting from the image of $K$ in $R$, lift a separating transcendence basis and then the finite separable algebraic generators by these field-adjunction lemmas; this gives a coefficient field $k\subset R$ containing $K$. The continuous parameter map $k\llbracket U_1,\dots,U_n\rrbracket\to R$ is surjective by the Cohen presentation. Its kernel is zero: the regular-local associated-graded theorem identifies the graded map on the parameter classes with an isomorphism, and a nonzero series in the kernel would have a least nonzero homogeneous term mapping to zero, a contradiction. Thus any regular parameter system identifies $R$ with a formal power-series ring, where substitution by another parameter system with invertible cotangent matrix is a continuous $K$-algebra automorphism.

## Proof

1.1 Construction of the automorphism. Put $V=\mathfrak m/\mathfrak m^2$, let $U$ be the image of $T$ in $V$, and let $W\subseteq V$ be spanned by the local equations of the components of $E$ through $x$. The classes $\bar u,\bar v$ lie in $U\setminus W$. Choose a decomposition $V=U\oplus C$ with $W=(W\cap U)\oplus W_C$, and choose $A_U\in\operatorname{GL}(U)$ fixing $W\cap U$ pointwise and sending $\bar u$ to $\bar v$; this is possible because both classes are nonzero modulo $W\cap U$. Then $A=A_U\oplus\mathrm{id}_C$ fixes $W$ pointwise and $(A-\mathrm{id})(V)\subseteq U$. Choose a regular system of parameters $u=u_1,u_2,\dots,u_n$ with the boundary equations among $u_2,\dots,u_n$. Set $v_1=v$; keep each boundary parameter unchanged; for every other $j$ choose $\delta_j\in T$ lifting $A(\bar u_j)-\bar u_j$ and put $v_j=u_j+\delta_j$. Then $v_1,\dots,v_n$ is a regular system of parameters, each $\delta_j\in T$, and all boundary equations are fixed. By [F6], substitution $u_j\mapsto v_j$ defines a continuous $K$-algebra automorphism $\widehat\varphi_{uv}$ of $R$. It sends $u$ to $v$, preserves $E$, and induces the identity on $R/T$. This proves (2), (3), and the congruence used below. [F1, F5, F6]

1.2 The homogenization is preserved. The substitution induces the identity modulo $\widehat T$, so it sends $\widehat T$ into itself. This inclusion is an equality: the ascending chain $\widehat T\subseteq\widehat\varphi^{-1}(\widehat T)\subseteq\widehat\varphi^{-2}(\widehat T)\subseteq\cdots$ stabilizes in the Noetherian ring $R$, and applying a suitable power of $\widehat\varphi$ gives $\widehat\varphi(\widehat T)=\widehat T$. For $f\in\mathcal D^i(\mathcal I)R$ and $t\in\widehat T^{\,i}$, the degree-$s$ Taylor terms of $\widehat\varphi(f)$ lie in $\mathcal D^{i+s}(\mathcal I)R\,\widehat T^{\,s}$ by [F4]. Multiplication by $\widehat\varphi(t)\in\widehat T^{\,i}$ puts them in $\mathcal D^{i+s}(\mathcal I)R\,\widehat T^{\,i+s}$. If $i+s<\mu$, this is a summand of $H(\mathcal I)R$; otherwise it lies in $\widehat T^{\,\mu}$, the last retained summand. The ideal $H(\mathcal I)R$ is closed in the maximal-adic topology, since completion of a finite quotient is the quotient of the completion ([[cor-completion-commutes-with-finite-quotients-and-submodules]]). Thus the convergent Taylor sum stays in $H(\mathcal I)R$, proving $\widehat\varphi(H)\subseteq H$. Its inverse also induces the identity modulo $\widehat T$ and has every coordinate increment in $\widehat T$; the same argument gives $\widehat\varphi^{-1}(H)\subseteq H$. Applying $\widehat\varphi$ to this inclusion proves the reverse containment, hence (1). [F3, F4]

2.1 Fixed points on the support. Every coordinate increment $\delta_j$ lies in $\widehat T$, and the automorphism fixes the coefficient field. Thus for every prime $\mathfrak p\supseteq\widehat T$, it induces the identity on $R/\mathfrak p$; every point of $V(\widehat T)=\operatorname{supp}(\widehat{\mathcal I},\mu)$ is fixed. This is assertion (4). [F1, F2, F6] ∎
