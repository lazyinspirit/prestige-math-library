---
id: thm-blowup-regular-surface-closed-point-regular
kind: theorem
title: "Point blowups of regular surfaces stay regular, with rational exceptional fibre over the residue field"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - def-embedding-dimension-and-regular-local-ring
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - cor-localisations-of-regular-local-rings-are-regular
  - def-smooth-morphism-schemes
  - def-axiom-of-choice
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - lem-regular-local-quotient-by-parameter-is-regular
  - thm-associated-graded-ring-of-a-regular-local-ring
  - thm-exceptional-divisor-normal-cone-proj
  - thm-pullback-center-ideal-invertible
  - thm-blowup-base-change-flat
  - thm-smooth-morphisms-stable-base-change-composition
  - thm-dimension-at-most-embedding-dimension
  - cor-every-vector-space-has-a-basis
  - cor-free-modules-are-projective-and-flat
  - thm-affine-domain-dimension-transcendence-degree
  - def-projective-bundle-scheme
  - cor-affine-domain-maximal-ideal-height-equals-dimension
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.12 blowups of local complete intersections in smooth varieties, pp. 393-394; Exercise 19.4.I, p. 392"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, blowup charts, PDF pp. 23-24"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.33.1, Lemma 31.33.2, Lemma 31.33.4 and Lemma 31.33.11"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice. Let $S$ be a regular finite-type $k$-scheme of pure dimension two, let $p$ be a closed point, put $\kappa=\kappa(p)$ and $r=[\kappa:k]$, and let $\pi\colon S'=\operatorname{Bl}_p S\to S$ be the blowup of $S$ at $p$ with exceptional subscheme $E$. Then $S'$ is regular of pure dimension two, $E$ is an effective Cartier divisor canonically isomorphic to $\mathbb P_\kappa(\mathfrak m_p/\mathfrak m_p^2)$, hence isomorphic to $\mathbb P^1_\kappa$ after choosing regular parameters, and $\mathcal O_E(E)=\mathcal O_{\mathbb P^1_\kappa}(-1)$. For $A=\mathcal O_{S,p}$ and regular parameters $x,y$, the base change to $\operatorname{Spec}A$ has charts $\operatorname{Spec}A[T]/(xT-y)=\operatorname{Spec}A[y/x]$ and $\operatorname{Spec}A[U]/(yU-x)=\operatorname{Spec}A[x/y]$, glued by inverting $T$ and $U$ with $U=T^{-1}$. Their local rings at the generic point of $E$ have dimension one and at its closed points dimension two. If $S$ is smooth over $k$ and $p$ is $k$-rational, $S'$ is smooth over $k$; literal affine-plane charts occur in the model $S=\mathbb A^2_k$, $p=0$. No smoothness over an imperfect $k$ is asserted for a general inseparable closed point. Regularity is a property of these local rings and does not require a $\kappa$-algebra structure on $S'$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular finite-type $k$-scheme $S$ of pure dimension two, a closed point $p\in S$ with residue field $\kappa=\kappa(p)$, the blowup $S'=\operatorname{Bl}_p S$ with exceptional subscheme $E$, and regular parameters $x,y$ of $A=\mathcal O_{S,p}$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it.

[F1] [[thm-affine-blowup-standard-charts]]: Let $A$ be a ring, $I=(f_0,\dots,f_r)$, $S=R(I)$ and $B_i=A[I/f_i]$. The standard opens $U_i=D_+(f_i t)=\operatorname{Spec}B_i$ cover $\operatorname{Bl}_I\operatorname{Spec}A$, and on overlaps the identifications are $D(u_{ij})$ in $U_i$ with $u_{ij}=(f_j t)/(f_i t)$, sending $u_{ij}$ to $u_{ji}^{-1}$ and preserving the structure maps to $\operatorname{Spec}A$.

[F2] [[lem-affine-blowup-algebra-properties]]: For a ring $A$, an ideal $I$ and $a\in I$, the affine blowup algebra $A[I/a]:=(R(I))_{(a)}$ satisfies: the image of $a$ is a nonzerodivisor, $I\,A[I/a]=a\,A[I/a]$, and $(A[I/a])_a=A_a$. If $I=(a_0,\dots,a_r)$ and $a=a_0$, then $A[x_1,\dots,x_r]/(ax_i-a_i)\to A[I/a]$, $x_i\mapsto a_i/a$, is surjective; if $A$ is a domain and $a\ne0$, then $A[I/a]$ is a domain.

[F3] [[thm-blowup-base-change-flat]]: For a flat base change $X'\to X$, the blowup of $X$ along a quasi-coherent ideal sheaf of finite type base-changes to the blowup of $X'$ along the pulled-back ideal; in particular the base change of $\operatorname{Bl}_{(x,y)}\operatorname{Spec}A$ to $\operatorname{Spec}A$ over $S$ is the blowup of $\operatorname{Spec}A$ at its closed point.



[F5] [[cor-affine-domain-maximal-ideal-height-equals-dimension]]: Let $k$ be a field, $B$ a finite-type $k$-domain and $\mathfrak m\subseteq B$ maximal. Then $\operatorname{ht}(\mathfrak m)=\dim B$.

[F6] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen-Macaulay. For every regular system $(x_1,\dots,x_d)$, the tuple is $R$-regular and $R/(x_1,\dots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

[F7] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular.

[F8] [[cor-localisations-of-regular-local-rings-are-regular]]: Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$.

[F9] [[lem-regular-local-quotient-by-parameter-is-regular]]: Let $(R,\mathfrak m,k)$ be regular local of dimension $d$ and $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local of dimension and embedding dimension $d-1$.

[F10] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$; $R$ is regular local when $\operatorname{edim}R=\dim R$.

[F11] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

[F12] [[thm-associated-graded-ring-of-a-regular-local-ring]]: If $(R,\mathfrak m,k)$ is regular local of dimension $d$, any cotangent basis induces a graded isomorphism $k[X_1,\dots,X_d]\cong\operatorname{gr}_{\mathfrak m}R$.

[F13] [[thm-exceptional-divisor-normal-cone-proj]]: For $Z=V(\mathcal I)$ cut out by a quasi-coherent ideal sheaf $\mathcal I$ of finite type, there is a canonical isomorphism of $Z$-schemes $E\to\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_X)$ from the exceptional subscheme of the blowup.

[F14] [[thm-pullback-center-ideal-invertible]]: For the blowup of $\mathcal I$ with exceptional subscheme $E=V(\mathcal I\mathcal O_{\operatorname{Bl}})$: $\mathcal O(1)$ is invertible, the natural map $\pi^*\mathcal I\to\mathcal O(1)$ is surjective with image $\mathcal I\mathcal O_{\operatorname{Bl}}$, so $\mathcal I\mathcal O_{\operatorname{Bl}}$ is invertible and $E$ is an effective Cartier divisor with $\mathcal O_{\operatorname{Bl}}(-E)=\mathcal I\mathcal O_{\operatorname{Bl}}=\mathcal O(1)$ and $\mathcal O_{\operatorname{Bl}}(E)=\mathcal O(-1)$.

[F15] [[def-smooth-morphism-schemes]]: A morphism $f\colon X\to S$ is smooth at $x$ when it is locally of finite presentation at $x$, flat at $x$, and the scheme-theoretic fibre $X_{f(x)}$ is geometrically regular at $x$ (regular after every field extension of $\kappa(f(x))$); $f$ is smooth when this holds everywhere.

[F16] [[thm-smooth-morphisms-stable-base-change-composition]]: Smooth morphisms are stable under arbitrary base change.

[F17] [[cor-every-vector-space-has-a-basis]]: Assuming the Axiom of Choice, every vector space over a field has a basis.

[F18] [[cor-free-modules-are-projective-and-flat]]: Every free module over a commutative ring is flat.

[F19] [[thm-affine-domain-dimension-transcendence-degree]]: For any field $k$ and any finite-type $k$-domain $B$, $\dim B=\operatorname{trdeg}_k\operatorname{Frac}(B)$.

[F20] [[def-projective-bundle-scheme]]: For a finite locally free sheaf $V$, $\mathbb P(V)=\operatorname{Proj}(\operatorname{Sym}V)$, with its standard positive twist.

## Proof

1.1 The component through $p$ is open: regular local rings are domains, so distinct irreducible components of the Noetherian regular scheme cannot meet. Choose a domain affine neighborhood of $p$ in that component. Its dimension is two, and the maximal-ideal height theorem gives $\dim A=2$ for $A=\mathcal O_{S,p}$. Choose regular parameters $x,y$. They form a regular sequence; $A/(x)$ and $A/(y)$ are one-dimensional regular local domains. [A1, F5, F6, F10]

2.1 Flat localization of the base identifies the part over $\operatorname{Spec}A$ with the blowup of $(x,y)$. On the $x$-chart, put $C=A[T]/(xT-y)$. If $xg=(xT-y)h$, reduction modulo $x$ gives $\bar y\bar h=0$ in the domain $(A/(x))[T]$, so $h=xh_1$; cancellation of $x$ gives $g=(xT-y)h_1$. Hence $C$ has no $x$-power torsion, and the chart algebra theorem identifies $C=A[y/x]$. It has $C_x=A_x$, exceptional ideal $xC$ and quotient $C/xC=\kappa[T]$. The second chart is $A[U]/(yU-x)$ by the same argument, with overlap $U=T^{-1}$. Localization of the base does not change local rings at points over $p$. [F1, F2, F3, step 1.1]

3.1 Outside $V(x)$ the local rings of $C$ are prime localizations of $A$, hence regular. A prime of $A[T]$ lying over a point of $V(x)$ in $C$ is either $Q=\mathfrak m A[T]$ or $Q=(\mathfrak m,h)$, where $\bar h$ is a monic irreducible polynomial over $\kappa$. The ambient local ring $A[T]_Q$ is regular. Its maximal ideal is generated respectively by $x,y$ or by $x,y,h$. The prime chains $(0)\subsetneq(x)\subsetneq\mathfrak m A[T]$ and, in the second case, their extension by $Q$, together with the embedding-dimension bound, give dimensions two and three. These generators therefore form a cotangent basis. The class of $xT-y$ is $\bar T\bar x-\bar y$, which is nonzero because the coefficient of $\bar y$ is $-1$, even when $\bar T=0$. Quotienting by this parameter gives regular local rings of dimension one at the generic exceptional point and two at its closed points. The same proof works in the $y$-chart. These computations also show the local chart rings have dimension two, without asserting $\dim A_x=2$. [F7, F8, F9, F10, F11, step 2.1]

4.1 Away from $p$ the structural morphism is an isomorphism: on the complement of the exceptional ideal in each standard chart its denominator is inverted and the chart becomes the corresponding base principal open, compatibly with the ratio transitions. Thus all local rings of $S'$ are regular. Its charts over finite-type affine bases are finitely generated algebras, so $S'$ is finite type over $k$. Its irreducible components are disjoint and open, as for $S$. No component has generic point in $E$, since the local rings computed there have positive dimension, while a component's generic local ring has dimension zero. Every component consequently meets the unchanged open $S\setminus\{p\}$ and shares the function field of a two-dimensional component of $S$. By the affine-domain dimension formula every nonempty affine open in it has dimension two. This gives dimension two for the component itself: any finite strict chain of irreducible closed subsets remains strict after intersecting an affine open meeting its smallest member, since such an open contains every member's generic point. Therefore $S'$ is pure of dimension two. [F1, F2, F6, F19, step 3.1]

4.2 The exceptional subscheme is canonically $\operatorname{Proj}_\kappa\operatorname{gr}_{\mathfrak m}A$. The multiplication map $\operatorname{Sym}_\kappa(\mathfrak m/\mathfrak m^2)\to\operatorname{gr}_{\mathfrak m}A$ is an isomorphism: choose any cotangent basis and apply the associated-graded theorem. Thus $E$ is canonically $\mathbb P_\kappa(\mathfrak m/\mathfrak m^2)$; the chosen basis $x,y$ identifies it with $\mathbb P^1_\kappa$. The center ideal is $\mathcal O(-E)\cong\mathcal O(1)$, so $E$ is effective Cartier and its normal line bundle is the restricted negative twist, $\mathcal O_{\mathbb P^1_\kappa}(-1)$. The projective-line coordinate identification depends on the chosen basis. [F12, F13, F14, F20, step 3.1]

5.1 If $S$ is smooth over $k$ and $p$ is rational, then for every field extension $K/k$, $S_K$ is smooth, regular and pure of dimension two, and $p_K$ is a rational closed point. Steps 1.1–4.2 apply over $K$. Flat base change identifies $(S')_K$ with this point blowup, so it is regular for every $K$. The finite-type $k$-algebras of the charts are finitely presented, and they are flat over $k$ because vector spaces are free. Hence the geometric-regularity definition proves smoothness. In the affine-plane model the quotients eliminate $y$ or $x$, giving literal affine planes. For general $p$ only regularity is asserted; only $E$, not the whole blowup, carries the indicated residue-field structure. [F3, F15, F16, F17, F18, step 4.1, step 4.2] ∎
