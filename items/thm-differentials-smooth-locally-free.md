---
id: thm-differentials-smooth-locally-free
kind: theorem
title: "Differentials of a smooth morphism"
status: published
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-sheaf-relative-differentials
  - def-locally-finite-presentation-morphism
  - def-ag-standard-smooth-algebra
  - thm-ag-standard-smooth-geometric-regularity
  - cor-jacobian-presentation-differentials
  - lem-sheaf-differentials-affine-compatibility
  - lem-ag-standard-smooth-regular-geometric-fibres
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.32 (differentials, tags 01UN-02H4)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.34-29.36 (smooth morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a morphism of schemes that
is smooth at a point $x\in X$ ([[def-smooth-morphism-schemes]]), and consider
the sheaf of relative differentials $\Omega_{X/S}$
([[def-sheaf-relative-differentials]]). Then $\Omega_{X/S}$ is locally free of
finite rank near $x$ (meaning that it restricts to $\mathcal O_U^r$ on some
open neighbourhood $U$ of $x$), and its rank at
$x$ equals the relative dimension of $f$ at $x$
([[def-relative-dimension-smooth-morphism]]). Consequently, if $f$ is smooth
with pure relative dimension $n$, then $\Omega_{X/S}$ is locally free of rank
$n$ on all of $X$.

On the smooth locus the rank is locally constant because the sheaf is locally
free there, and it equals the relative dimension. If $f$ is smooth everywhere,
this gives a locally constant rank function on all of $X$, which may take
different values on different open components. No
hypothesis is placed on $S$ beyond the smoothness of $f$ at the points
considered.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is smooth at $x$ when $f$ is locally of finite presentation at $x$, flat at $x$, and the scheme-theoretic fibre $X_{f(x)}$ is geometrically regular at $x$; $f$ is smooth when this holds at every point ([[def-smooth-morphism-schemes]]).

[F2] A morphism is locally of finite presentation at a point when a suitable affine neighbourhood of the point in the source maps into an affine open of the target under a finitely presented ring map ([[def-locally-finite-presentation-morphism]]).

[F3] A standard smooth presentation of an $R$-algebra $S$ is an isomorphism $S\cong(R[x_1,\dots,x_m]/(f_1,\dots,f_c))_g$ under which some $c\times c$ minor of the Jacobian $(\partial f_j/\partial x_i)$ becomes a unit; the integer $m-c$ is the relative dimension of the presentation, and by the conventions of the definition the invertible minor may be assumed to be the leading one ([[def-ag-standard-smooth-algebra]]).

[F4] Assume AC. Let $R\to S$ be a ring map of finite presentation and let $\mathfrak q\in\operatorname{Spec}S$ over $\mathfrak p$, with $\kappa=\kappa(\mathfrak p)$. Then $R\to S$ is standard smooth at $\mathfrak q$ if and only if $R_{\mathfrak p}\to S_{\mathfrak q}$ is flat and the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$ ([[thm-ag-standard-smooth-geometric-regularity]]).

[F5] Let $R$ be a commutative ring and $S$ a standard smooth $R$-algebra with presentation of relative dimension $m-c$; let $\mathfrak p\in\operatorname{Spec}R$ and $K/\kappa(\mathfrak p)$ a field extension, and write $F_K=S\otimes_RK$. Then every irreducible component of $\operatorname{Spec}F_K$ has dimension $m-c$ ([[lem-ag-standard-smooth-regular-geometric-fibres]]).

[F6] For a smooth $f:X\to S$ at $x$ the relative dimension at $x$ is the common value of the local dimensions $\dim_yX_{f(x),K}$ over all field extensions $K/\kappa(f(x))$ and all $y$ over $x$; for a scheme locally of finite type over a field, the local dimension at a point is the largest dimension of an irreducible component through it in a finite-type affine neighbourhood, and pure relative dimension $n$ means that this value is $n$ at every point ([[def-relative-dimension-smooth-morphism]]).

[F7] For a commutative ring $A$, a polynomial ring $P=A[x_1,\dots,x_m]$ and $I=(f_1,\dots,f_r)\subseteq P$, the module $\Omega_{(P/I)/A}$ is the cokernel of the $B$-linear map $B^r\to B^m$, $B=P/I$, whose $j$-th column is the vector of partial derivatives $(\partial f_j/\partial x_i)_{i=1}^m$ ([[cor-jacobian-presentation-differentials]]).

[F8] For a ring map $A\to B$ with induced morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ one has $\Omega_{X/S}(D(g))\cong\Omega_{B_g/A}$ for every $g\in B$, compatibly with the localisation maps ([[lem-sheaf-differentials-affine-compatibility]]).

[F9] A sheaf $\mathcal E$ of $\mathcal O_X$-modules is locally free of rank $r$ near $x$ when $\mathcal E|_U\cong\mathcal O_U^r$ on some open neighbourhood $U$ of $x$; the rank is well defined and locally constant (at each point it is the dimension of the free stalk modulo its maximal ideal), and the sheaf is locally free of finite rank when every point has such a neighbourhood.

[F10] The sheaf of relative differentials $\Omega_{X/S}$ is the sheaf of $\mathcal O_X$-modules representing $S$-derivations ([[def-sheaf-relative-differentials]]).

[F11] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix a smooth point $x\in X$ and write $s=f(x)$. By [F1] and [F2] there are affine opens $U=\operatorname{Spec}B\ni x$ and $V=\operatorname{Spec}A\ni s$ with $f(U)\subseteq V$ and $A\to B$ of finite presentation, and the local ring map $A_{\mathfrak p}\to B_{\mathfrak q}$, $\mathfrak p=\mathfrak q\cap A$ for the prime $\mathfrak q$ corresponding to $x$, is flat while the fibre $B\otimes_A\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$, these being the chart-level forms of flatness at $x$ and geometric regularity of the fibre at $x$. [F1, F2]

2.1 By [F4] the finitely presented map $A\to B$ is standard smooth at $\mathfrak q$, so by [F3] there are $h\in B\setminus\mathfrak q$, integers $m\ge c\ge0$, elements $f_1,\dots,f_c\in A[x_1,\dots,x_m]$ and $g\in A[x_1,\dots,x_m]$ with $B_h\cong(A[x_1,\dots,x_m]/(f_1,\dots,f_c))_g$, the leading $c\times c$ Jacobian block $J_0=(\partial f_j/\partial x_i)_{1\le i,j\le c}$ having unit determinant in $B_h$. [F3, F4, step 1.1]

3.1 Put $P=A[x_1,\dots,x_m]$ and $B_0=P/(f_1,\dots,f_c)$, so that $B_h=(B_0)_g$; by [F8] applied over the chart, $\Omega_{X/S}(D(h))\cong\Omega_{B_h/A}$, and by [F7] (and localisation of the presentation $B_h=(B_0)_g$) the module $\Omega_{B_h/A}$ is the cokernel of the $B_h$-linear map $B_h^{c}\to B_h^{m}$ whose columns are the gradients $\nabla f_j$ with coordinates in $B_h$. [F7, F8, step 2.1]

4.1 This cokernel is free of rank $m-c$: writing the matrix of the map as the block matrix $J=\binom{J_0}{J_2}$ with $J_0$ invertible over $B_h$, the product $UJ=\binom{I_c}{0}$ with the invertible matrix $U=\begin{pmatrix}J_0^{-1}&0\\-J_2J_0^{-1}&I_{m-c}\end{pmatrix}$ (inverse $\begin{pmatrix}J_0&0\\J_2&I_{m-c}\end{pmatrix}$) shows that after the change of basis $U$ of $B_h^{m}$ the image of the map is exactly $B_h^{c}\oplus 0$, so the cokernel is $B_h^{m}/(B_h^{c}\oplus0)\cong B_h^{m-c}$, free of rank $m-c$. [step 2.1, step 3.1]

5.1 Hence $\Omega_{X/S}$ is free of rank $m-c$ on the open neighbourhood $D(h)$ of $x$, which is one half of the theorem; it remains to identify the number with the relative dimension. Let $K/\kappa(s)$ be a field extension and let $y\in X_{s,K}$ lie over $x$; then $y$ lies in the open part $D(h)$ of the fibre (the point $x$ itself lies in $D(h)$), so $\dim_yX_{s,K}$ equals the local dimension of $\operatorname{Spec}(B_h\otimes_AK)$ at the corresponding point, and $B_h$ is standard smooth over $A$ of relative dimension $m-c$ by [F3], so by [F5] every irreducible component of that spectrum has dimension $m-c$, whence the local dimension is $m-c$ by the component description in [F6]. [F3, F5, F6, step 2.1, step 4.1]

6.1 The value in step 5.1 is independent of $K$ and of $y$ over $x$, so $f$ has relative dimension $m-c$ at $x$ by the definition recorded in [F6]; combined with step 4.1 this says $\Omega_{X/S}$ is free of rank equal to the relative dimension of $f$ at $x$ on a neighbourhood of $x$. [F6, step 4.1, step 5.1]

7.1 Since the smooth point $x\in X$ was arbitrary, every smooth point of $X$ has an open neighbourhood on which $\Omega_{X/S}$ is free of finite rank, namely a rank that is the relative dimension at the point, so on the smooth locus $\Omega_{X/S}$ is locally free of finite rank with rank function the relative dimension by [F9] and [F10]. If $f$ is smooth of pure relative dimension $n$, the rank is $n$ at every point, so $\Omega_{X/S}$ is locally free of rank $n$. The Axiom of Choice [F11] is used exactly through the cited criterion [F4] and the cited standard-smooth fibre computation [F5], both of which declare it; no further choice is made. [F9, F10, F11, step 6.1] $\square$
