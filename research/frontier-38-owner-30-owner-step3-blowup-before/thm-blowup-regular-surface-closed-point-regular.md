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
---

## Statement

Assume the Axiom of Choice. Let $S$ be a regular finite-type $k$-scheme of pure dimension two, let $p$ be a closed point, put $\kappa=\kappa(p)$ and $r=[\kappa:k]$, and let $\pi\colon S'=\operatorname{Bl}_p S\to S$ be the blowup of $S$ at $p$ with exceptional subscheme $E$. Then $S'$ is regular of pure dimension two, $E$ is an effective Cartier divisor canonically isomorphic to $\mathbb P^1_\kappa$, and $\mathcal O_E(E)=\mathcal O_{\mathbb P^1_\kappa}(-1)$. For $A=\mathcal O_{S,p}$ and regular parameters $x,y$, the base change to $\operatorname{Spec}A$ has charts $\operatorname{Spec}A[T]/(xT-y)=\operatorname{Spec}A[y/x]$ and $\operatorname{Spec}A[U]/(yU-x)=\operatorname{Spec}A[x/y]$, glued by inverting $T$ and $U$ with $U=T^{-1}$. Their local rings at the generic point of $E$ have dimension one and at its closed points dimension two. If $S$ is smooth over $k$ and $p$ is $k$-rational, $S'$ is smooth over $k$; literal affine-plane charts occur in the model $S=\mathbb A^2_k$, $p=0$. No smoothness over an imperfect $k$ is asserted for a general inseparable closed point. Regularity is a property of these local rings and does not require a $\kappa$-algebra structure on $S'$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular finite-type $k$-scheme $S$ of pure dimension two, a closed point $p\in S$ with residue field $\kappa=\kappa(p)$, the blowup $S'=\operatorname{Bl}_p S$ with exceptional subscheme $E$, and regular parameters $x,y$ of $A=\mathcal O_{S,p}$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it.

[F1] [[thm-affine-blowup-standard-charts]]: Let $A$ be a ring, $I=(f_0,\dots,f_r)$, $S=R(I)$ and $B_i=A[I/f_i]$. The standard opens $U_i=D_+(f_i t)=\operatorname{Spec}B_i$ cover $\operatorname{Bl}_I\operatorname{Spec}A$, and on overlaps the identifications are $D(u_{ij})$ in $U_i$ with $u_{ij}=(f_j t)/(f_i t)$, sending $u_{ij}$ to $u_{ji}^{-1}$ and preserving the structure maps to $\operatorname{Spec}A$.

[F2] [[lem-affine-blowup-algebra-properties]]: For a ring $A$, an ideal $I$ and $a\in I$, the affine blowup algebra $A[I/a]:=(R(I))_{(a)}$ satisfies: the image of $a$ is a nonzerodivisor, $I\,A[I/a]=a\,A[I/a]$, and $(A[I/a])_a=A_a$. If $I=(a_0,\dots,a_r)$ and $a=a_0$, then $A[x_1,\dots,x_r]/(ax_i-a_i)\to A[I/a]$, $x_i\mapsto a_i/a$, is surjective; if $A$ is a domain and $a\ne0$, then $A[I/a]$ is a domain.

[F3] [[thm-blowup-base-change-flat]]: For a flat base change $X'\to X$, the blowup of $X$ along a quasi-coherent ideal sheaf of finite type base-changes to the blowup of $X'$ along the pulled-back ideal; in particular the base change of $\operatorname{Bl}_{(x,y)}\operatorname{Spec}A$ to $\operatorname{Spec}A$ over $S$ is the blowup of $\operatorname{Spec}A$ at its closed point.

[F4] [[def-blowup-scheme-along-ideal]]: For a scheme $X$ and a quasi-coherent ideal sheaf $\mathcal I$ of finite type, the blowup is $\operatorname{Bl}_{\mathcal I}X:=\operatorname{Proj}_X\mathcal R(\mathcal I)$ with exceptional subscheme $E=V(\mathcal I\mathcal O_{\operatorname{Bl}})$, introduced separately.

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

## Proof

1.1 Choose an affine open subscheme $\operatorname{Spec}B\subseteq S$ with $B$ a finite-type $k$-domain inside the component of $S$ through $p$; since $S$ has pure dimension two, $\dim B=2$, and the maximal ideal $\mathfrak m_p\subseteq B$ of $p$ has $\operatorname{ht}(\mathfrak m_p)=2$ by [F5], so the local ring $A=\mathcal O_{S,p}=B_{\mathfrak m_p}$ has dimension two and, by hypothesis, is regular local; let $x,y\in A$ be regular parameters, so $(x,y)$ is a regular system of parameters generating the maximal ideal $\mathfrak m$ with cotangent classes a $\kappa$-basis. By [F6] the pair $(x,y)$ is $A$-regular, $A/(x)$ is regular local of dimension one and hence a domain, and $y$ is a nonzerodivisor modulo $x$. [A1, F5, F6, F10]

2.1 Base change along the flat localization $\operatorname{Spec}A\to S$: by [F3] the blowup of $S$ at $p$ base-changes to the blowup of $\operatorname{Spec}A$ at its closed point, and by [F1] and [F4] the latter has the standard charts $\operatorname{Spec}A[T]/(xT-y)$ and $\operatorname{Spec}A[U]/(yU-x)$, glued by inverting $T$ and $U$ with $U=T^{-1}$, covering the blowup. Localizing the base at $p$ computes the local rings of $S'$ at the points of $E$, so it suffices to show that every local ring of these two charts is regular, and to compute dimensions there. [F1, F3, F4, step 1.1]

3.1 Let $C=A[T]/(xT-y)$ be the coordinate ring of the first chart and write a bar over a symbol for its reduction modulo $x$. The kernel of $A[T]\to A_x$, $T\mapsto y/x$, is $(xT-y)$: if $xg=(xT-y)h$, then reducing modulo $x$ gives $\bar y\bar h=0$ in $(A/(x))[T]$, and since $A/(x)$ is a domain and $\bar y\ne0$ this forces $\bar h=0$, say $h=xh_1$; cancelling the nonzerodivisor $x$ gives $g=(xT-y)h_1$. Hence $C\cong A[y/x]$ is isomorphic to the affine blowup algebra $A[I/x]$ for $I=(x,y)$ of [F2], and by [F2] it is a domain with $I\,C=xC$ and $C_x=A_x$. Since $A\subseteq C\subseteq A_x$ and $\dim A=\dim A_x=2$, we have $\dim C=2$, and the exceptional divisor of this chart is $V(xC)$ with $C/xC\cong\kappa[T]$. [F2, step 2.1]

4.1 Let $Q\subseteq C$ be a prime with $x\notin Q$. Then $C_Q$ is a prime localization of $C_x=A_x$ by step 3.1, hence a prime localization of the regular local ring $A$, and [F8] makes it regular; these are exactly the local rings of the first chart at points outside $E$, i.e. local rings of $S$ at points other than $p$. [F8, step 3.1]

5.1 Let $Q\subseteq C$ be a prime containing $x$, so that $Q$ is a point of $E$ and $Q\cap A=(x,y)=\mathfrak m$ because $xC\supseteq(x,y)$ and $\mathfrak m$ is maximal; such $Q$ corresponds to a prime of $C/xC=\kappa[T]$. If $Q=\mathfrak m C=xC$, the generic point of $E$ in this chart, then $C_Q=A[T]_{\mathfrak m A[T]}/(xT-y)$: the ring $A[T]_{\mathfrak m A[T]}$ is regular by [F7] and [F8], and has dimension two because $\mathfrak m A[T]$ is generated by the two elements $x,y$, so $\dim\le\operatorname{edim}\le2$ by [F10] and [F11], while the chain $(0)\subsetneq(x)\subsetneq\mathfrak m A[T]$ of primes gives $\dim\ge2$. The image of $xT-y$ in $\mathfrak m A[T]/\mathfrak m^2A[T]$ is the nonzero element $-\bar y$ with $\bar y$ a basis element, so $xT-y\in\mathfrak m A[T]\setminus\mathfrak m^2A[T]$ and [F9] makes $C_Q$ regular of dimension one. [F7, F8, F9, F10, F11, step 4.1]

6.1 If instead $Q$ is a maximal ideal of $C$ containing $x$, then $Q=(\mathfrak m,h)C$ for some $h\in A[T]$ whose image $\bar h\in\kappa[T]$ is a monic irreducible polynomial, and $\mathfrak m A[T]\subsetneq(\mathfrak m,h)A[T]=:Q'$ is a maximal ideal of $A[T]$ of height three: the classes of $x,y,h$ generate $Q'$ and span $Q'/(Q')^2$, so $\dim A[T]_{Q'}\le\operatorname{edim}\le3$ by [F10] and [F11], while the chain $(0)\subsetneq(x)\subsetneq\mathfrak m A[T]\subsetneq Q'$ gives $\dim\ge3$, and $A[T]_{Q'}$ is regular by [F7] and [F8]. The image of $xT-y$ in $Q'/(Q')^2$ is $\bar T\bar x-\bar y$ with $\bar T\ne0$ the class of $T$ in the residue field, a nonzero element since $\bar x,\bar y$ are basis elements; thus $xT-y\in Q'\setminus(Q')^2$ and [F9] makes $C_Q=A[T]_{Q'}/(xT-y)$ regular of dimension two. Since the primes of $C/xC=\kappa[T]$ are the zero ideal and the maximal ideals, steps 5.1 and 6.1 describe all local rings of the first chart at points of $E$: dimension one at the generic point, dimension two at the closed points. [F9, F10, F11, F7, F8, step 5.1]

7.1 The second chart $C'=A[U]/(yU-x)$ is treated by the same argument with $x$ and $y$ interchanged, since $(y,x)$ is again a regular system of parameters and $A/(y)$ is again a domain: all its local rings are regular, it is a domain of dimension two, and its local rings at the points of $E$ have dimension one at the generic point and two at the closed points. The two charts cover the blowup (step 2.1), so together with steps 4.1-6.1 every local ring of $S'$ at a point of $E$ is regular of dimension two when the point is closed in $E$, and the local rings at the generic point of $E$ have dimension one; points of $S'$ not over $p$ correspond to points of $S\smallsetminus\{p\}$ with regular local rings. Moreover each chart is a domain of dimension two, so every component of $S'$ has dimension two and $S'$ is regular of pure dimension two. [F1, step 6.1, step 3.1]

8.1 By [F14], $\mathcal I\mathcal O_{S'}$ is invertible and $E=V(\mathcal I\mathcal O_{S'})$ is an effective Cartier divisor on $S'$; by [F13] there is a canonical isomorphism $E\to\operatorname{Proj}_Z(\operatorname{gr}_{\mathcal I}\mathcal O_S)$, which over the local ring $A$ becomes $E\to\operatorname{Proj}_\kappa(\operatorname{gr}_{(x,y)}A)$. Since $A$ is regular local of dimension two with regular parameters $x,y$, [F12] gives a graded isomorphism $\kappa[X,Y]\to\operatorname{gr}_{(x,y)}A$, so $E\cong\operatorname{Proj}_\kappa\kappa[X,Y]=\mathbb P^1_\kappa$ canonically. Finally [F14] gives $\mathcal I\mathcal O_{S'}=\mathcal O(1)=\mathcal O(-E)$, so $\mathcal O_{S'}(E)=\mathcal O(-1)$, and under the identification $E=\operatorname{Proj}_\kappa\operatorname{gr}_{(x,y)}A$ the restriction of this relative twist is the standard $\mathcal O_{\mathbb P^1_\kappa}(-1)$. [F12, F13, F14, step 7.1]

8.2 The dimension clauses for the local rings at the generic and closed points of $E$ are those recorded at the end of step 6.1 and carried to $S'$ in step 7.1; the charts of step 2.1 are the charts asserted in the statement, with the gluing $U=T^{-1}$. [step 7.1, step 2.1]

9.1 Suppose now that $S$ is smooth over $k$ and that $p$ is $k$-rational, so $\kappa=k$. For every field extension $K/k$ the base change $S_K$ is smooth over $K$ by [F16], hence regular; it has pure dimension two and $p_K=\operatorname{Spec}K$ is a closed $K$-rational point, so the argument of steps 1.1-8.1 applies over $K$ and exhibits $\operatorname{Bl}_{p_K}(S_K)$ as regular. By the flat-base-change identification of [F3], $(S')_K\cong\operatorname{Bl}_{p_K}(S_K)$, so for every field extension $K/k$ the scheme $(S')_K$ is regular, i.e. the geometric fibres of $S'\to\operatorname{Spec}k$ are regular. The affine charts of $S'$ over an affine open of $S$ are finitely generated $k$-algebras, so $S'\to\operatorname{Spec}k$ is locally of finite presentation; it is flat because the structure sheaves of its affine charts are $k$-vector spaces, free by [F17] and therefore flat by [F18]. By the definition of smoothness [F15], $S'$ is smooth over $k$. In the model $S=\mathbb A^2_k$ and $p=0$ the two charts are $\operatorname{Spec}k[x,T]$ and $\operatorname{Spec}k[y,U]$, literal affine planes. [F3, F15, F16, F17, F18, step 8.1]

10.1 No smoothness over an imperfect $k$ is claimed for a general inseparable closed point: the geometric-regularity argument of step 9.1 used smoothness of $S$ over $k$ and $k$-rationality of $p$. For arbitrary closed $p$ the conclusion is the regularity proved in steps 1.1-8.1, which is a property of the local rings computed in the charts of step 2.1 and uses no $\kappa$-algebra structure on $S'$. This proves every clause of the statement. [step 9.1] ∎
