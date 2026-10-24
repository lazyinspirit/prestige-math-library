---
id: "ex-cech-cohomology-two-arc-cover-circle"
kind: "example"
title: "Čech cohomology of the two-arc cover of the circle"
status: published
origin: pipeline
deps: [lem-two-open-cover-cech-complex, def-cech-cohomology-open-cover, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, lem-cech-h0-global-sections, def-circle-as-real-line-mod-integers, def-quotient-topology, cor-connected-subsets-of-the-line, def-interval, thm-continuous-image-of-a-connected-space, def-connected-space, thm-first-isomorphism-theorem-groups, def-sheaf-on-topological-space, def-continuous-map-top, def-subspace-topology-top]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Example

Let $S^1=\mathbb R/\mathbb Z$ be the circle with quotient map $p$
([[def-circle-as-real-line-mod-integers]]), let $\underline{\mathbb Z}$ be the
constant sheaf with value $\mathbb Z$ on $S^1$, identified with the sheaf of
locally constant $\mathbb Z$-valued functions
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]), and let
$$\mathcal U=(U_0,U_1),\qquad U_0:=p\bigl((-1/2,1/2)\bigr),\quad U_1:=p\bigl((0,1)\bigr),$$
so that $\mathcal U$ is an open cover of $S^1$ by two proper arcs. Then the
fixed-cover Čech cohomology of $\mathcal U$
([[def-cech-cohomology-open-cover]]) is
$$\check H^0(\mathcal U,\underline{\mathbb Z})\cong\mathbb Z,\qquad \check H^1(\mathcal U,\underline{\mathbb Z})\cong\mathbb Z,\qquad \check H^p(\mathcal U,\underline{\mathbb Z})=0\quad(p\ge2),$$
with the following explicit computation. The arcs $U_0$ and $U_1$ are connected,
the intersection $U_0\cap U_1$ is the disjoint union of the two nonempty open
connected sets $C_1:=p\bigl((0,1/2)\bigr)$ and $C_2:=p\bigl((1/2,1)\bigr)$,
and under the identifications $\underline{\mathbb Z}(U_0)\cong\mathbb Z$,
$\underline{\mathbb Z}(U_1)\cong\mathbb Z$ by constant values and
$\underline{\mathbb Z}(U_0\cap U_1)\cong\mathbb Z\oplus\mathbb Z$ by the pair of
constant values on $C_1$ and $C_2$
([[lem-two-open-cover-cech-complex]]), the Čech differential is
$$\delta^0:\mathbb Z\oplus\mathbb Z\longrightarrow\mathbb Z\oplus\mathbb Z,\qquad \delta^0(a,b)=(b-a,b-a).$$
Its kernel is the diagonal $\Delta:=\{(n,n):n\in\mathbb Z\}$, its image is
$\Delta$ as well, so $\check H^0(\mathcal U,\underline{\mathbb Z})=\Delta\cong
\mathbb Z$, and $\check H^1(\mathcal U,\underline{\mathbb Z})=(\mathbb Z\oplus
\mathbb Z)/\Delta\cong\mathbb Z$ under the isomorphism induced by
$(x,y)\mapsto x-y$, a generator being the class of the $1$-cochain that equals
$1$ on $C_1$ and $0$ on $C_2$. Moreover the comparison map
$\Gamma(S^1,\underline{\mathbb Z})\to\check H^0(\mathcal
U,\underline{\mathbb Z})$ is an isomorphism
([[lem-cech-h0-global-sections]]) and
$\Gamma(S^1,\underline{\mathbb Z})\cong\mathbb Z$.

## Facts & Assumptions

[F1] For a two-member open cover of $X$ by $U,V$ one has $C^0(\mathcal U,\mathcal F)=\mathcal F(U)\oplus\mathcal F(V)$, $C^1(\mathcal U,\mathcal F)=\mathcal F(U\cap V)$ and $C^p(\mathcal U,\mathcal F)=0$ for $p\ge2$, the group over an empty set of tuples being the zero group ([[lem-two-open-cover-cech-complex]]).

[F2] For a two-member cover the only possibly nonzero component of the Čech differential is $\delta^0(s_U,s_V)=s_V|_{U\cap V}-s_U|_{U\cap V}$, and $\delta^1=0$ ([[lem-two-open-cover-cech-complex]]).

[F3] The constant sheaf with value the group $A$ has as its sections over an open $U$ the locally constant functions $U\to A$, with pointwise group structure ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F4] The fixed-cover cohomology in degree $p$ is the kernel of $\delta^p$ modulo the image of $\delta^{p-1}$, so in a complex with $C^p=C^{p+1}=0$ both groups vanish in degree $p$ ([[def-cech-cohomology-open-cover]]).

[F5] Restriction of global sections $\Gamma(X,\mathcal F)\to\check H^0(\mathcal U,\mathcal F)$, $s\mapsto(s|_{U_i})_i$, is an isomorphism ([[lem-cech-h0-global-sections]]).

[F6] The circle is $S^1=\mathbb R/\mathbb Z$ with quotient map $p(x)=[x]$, and $p(x+n)=p(x)$ for all real $x$ and integers $n$ ([[def-circle-as-real-line-mod-integers]]).

[F7] A subset $V$ of $S^1$ is open exactly when $p^{-1}[V]$ is open in $\mathbb R$, and $p$ is a continuous surjection ([[def-quotient-topology]]).

[F8] Each of the nine interval forms of [[def-interval]] is a connected subset of the real line, and so are $\varnothing$ and every singleton; in particular $\mathbb R=(-\infty,\infty)$ is connected ([[cor-connected-subsets-of-the-line]], [[def-interval]]).

[F9] The continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]).

[F10] A separation of a space $X$ is an ordered pair of open, nonempty, disjoint subsets with union $X$; $X$ is connected when no separation exists ([[def-connected-space]]).

[F11] First isomorphism theorem for groups: for every homomorphism $f:G\to H$ the rule $g\ker f\mapsto f(g)$ is an isomorphism $G/\ker f\cong\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

## Verification

**Given:** The circle $S^1=\mathbb R/\mathbb Z$ with quotient map $p$, the constant sheaf $\underline{\mathbb Z}$ with value $\mathbb Z$, the two arcs $U_0=p((-1/2,1/2))$ and $U_1=p((0,1))$, and the two open subsets $C_1=p((0,1/2))$ and $C_2=p((1/2,1))$ of their intersection.

**Proof technique:** direct.

1.1 $p^{-1}(U_0)=(-1/2,1/2)+\mathbb Z$ and $p^{-1}(U_1)=(0,1)+\mathbb Z$ are unions of open intervals, hence open in $\mathbb R$, so $U_0$ and $U_1$ are open in $S^1$ [F7]. Both are nonempty and connected, being the images under the continuous map $p$ of the connected intervals $(-1/2,1/2)$ and $(0,1)$ [F8, F9]. Their union is all of $S^1$, because every real number differs by an integer from a point of $(-1/2,1/2)\cup(0,1)=(-1/2,1)$. For the intersection, $p^{-1}(U_0\cap U_1)=\bigl((-1/2,1/2)+\mathbb Z\bigr)\cap\bigl((0,1)+\mathbb Z\bigr)=\bigl((-1/2,0)\cup(0,1/2)\bigr)+\mathbb Z$, so $U_0\cap U_1=p\bigl((-1/2,0)\cup(0,1/2)\bigr)=p\bigl((1/2,1)\bigr)\cup p\bigl((0,1/2)\bigr)=C_2\cup C_1$, where $p(x+1)=p(x)$ was used [F6]. Each of $C_1,C_2$ is open, since $p^{-1}(C_1)=(0,1/2)+\mathbb Z$ and $p^{-1}(C_2)=(1/2,1)+\mathbb Z$ are open; each is nonempty and connected as the image of an interval [F8, F9]; and $C_1\cap C_2=\varnothing$ because $(0,1/2)+\mathbb Z$ and $(1/2,1)+\mathbb Z$ are disjoint. So $(C_1,C_2)$ is a separation of $U_0\cap U_1$ in the sense of [F10], and every connected subset $T\subseteq U_0\cap U_1$ lies in $C_1$ or in $C_2$: if $T$ met both, then $T\cap C_1$ and $T\cap C_2$ would be nonempty disjoint relatively open subsets covering $T$, a separation of $T$ [F10]. Hence $C_1$ and $C_2$ are exactly the connected components of $U_0\cap U_1$. [F6, F7, F8, F9, F10]

2.1 By [F3] the sections of $\underline{\mathbb Z}$ over an open set are its locally constant $\mathbb Z$-valued functions. On each of the connected sets $U_0$, $U_1$, $C_1$, $C_2$ of [step 1.1] such a function is constant: its fibres are open, pairwise disjoint and cover the set, so if two distinct fibres were nonempty, one nonempty fibre and the union of all the other fibres would form a separation [F10]. Consequently the constant value of a section over $U_0$, over $U_1$, over $C_1$ and over $C_2$ is well defined, and the maps $$f\longmapsto f|_{C_1}\text{'s value},\qquad f\longmapsto f|_{C_2}\text{'s value}$$ give a bijection $\underline{\mathbb Z}(U_0\cap U_1)\to\mathbb Z\oplus\mathbb Z$: it is injective because a locally constant function on $U_0\cap U_1=C_1\cup C_2$ [step 1.1] is determined by its two constant values, and it is surjective because for $(m,n)\in\mathbb Z\oplus\mathbb Z$ the function equal to $m$ on $C_1$ and to $n$ on $C_2$ is locally constant, the two sets being open and disjoint [step 1.1]. The same argument with one connected set gives bijections $\underline{\mathbb Z}(U_0)\to\mathbb Z$ and $\underline{\mathbb Z}(U_1)\to\mathbb Z$ by constant value. All these bijections are group isomorphisms for the pointwise group structure of [F3], addition of locally constant functions being computed valuewise. [F3, F10, step 1.1]

3.1 By [F1] applied to the two-member cover $\mathcal U=(U_0,U_1)$ the groups are $C^0(\mathcal U,\underline{\mathbb Z})=\underline{\mathbb Z}(U_0)\oplus\underline{\mathbb Z}(U_1)$ and $C^1(\mathcal U,\underline{\mathbb Z})=\underline{\mathbb Z}(U_0\cap U_1)$, and $C^p(\mathcal U,\underline{\mathbb Z})=0$ for $p\ge2$. Under the identifications of [step 2.1] the pair $(a,b)\in\mathbb Z\oplus\mathbb Z$ corresponds to the $0$-cochain whose components are the functions constantly equal to $a$ on $U_0$ and to $b$ on $U_1$; the difference $s_1|_{U_0\cap U_1}-s_0|_{U_0\cap U_1}$ of [F2] is then the function constantly equal to $b-a$ on $U_0\cap U_1$, hence restricts to the constant value $b-a$ on each of $C_1$ and $C_2$ and corresponds to $(b-a,b-a)\in\mathbb Z\oplus\mathbb Z$. Therefore $\delta^0(a,b)=(b-a,b-a)$ under the identifications, and $\delta^1=0$ since $C^2(\mathcal U,\underline{\mathbb Z})=0$. [F1, F2, step 2.1]

4.1 By [step 3.1] an element $(a,b)$ is a Čech $0$-cocycle exactly when $b-a=0$, that is exactly when $a=b$; hence the group of $0$-cocycles is the diagonal $\Delta=\{(n,n):n\in\mathbb Z\}\cong\mathbb Z$ under $n\mapsto(n,n)$. The image of $\delta^0$ is $\{(b-a,b-a):a,b\in\mathbb Z\}=\Delta$ as well. By [F4] applied to the complex of [step 3.1], whose terms $C^0,C^1$ are displayed there and whose terms in degrees $p\ge2$ vanish, $$\check H^0(\mathcal U,\underline{\mathbb Z})=\ker\delta^0=\Delta\cong\mathbb Z,\qquad \check H^1(\mathcal U,\underline{\mathbb Z})=(\mathbb Z\oplus\mathbb Z)/\Delta,\qquad \check H^p(\mathcal U,\underline{\mathbb Z})=0\ (p\ge2).$$ The homomorphism $\varphi:\mathbb Z\oplus\mathbb Z\to\mathbb Z$, $\varphi(x,y)=x-y$, is surjective because $\varphi(x,0)=x$, and $\ker\varphi=\Delta$; by the first isomorphism theorem [F11] it induces an isomorphism $(\mathbb Z\oplus\mathbb Z)/\Delta\to\mathbb Z$, so $\check H^1(\mathcal U,\underline{\mathbb Z})\cong\mathbb Z$. [F4, F11, step 3.1]

5.1 Let $\kappa\in\underline{\mathbb Z}(U_0\cap U_1)$ be the locally constant function equal to $1$ on $C_1$ and to $0$ on $C_2$; it is a well-defined section by [step 2.1], and it corresponds to $(1,0)\in\mathbb Z\oplus\mathbb Z$ there. Every $1$-cochain is a cocycle because $\delta^1=0$ [step 3.1], so $\kappa$ has a class in $\check H^1(\mathcal U,\underline{\mathbb Z})=(\mathbb Z\oplus\mathbb Z)/\Delta$ of [step 4.1], namely the class of $(1,0)$; under the isomorphism induced by $\varphi(x,y)=x-y$ this class corresponds to $\varphi(1,0)=1$. Since $1$ generates $\mathbb Z$, the class $[\kappa]$ generates $\check H^1(\mathcal U,\underline{\mathbb Z})\cong\mathbb Z$. [step 3.1, step 4.1, step 2.1]

6.1 By [F5] the restriction map $\Gamma(S^1,\underline{\mathbb Z})\to\check H^0(\mathcal U,\underline{\mathbb Z})$ is an isomorphism. The circle is connected: $S^1=p(\mathbb R)$ is the image of the connected interval $\mathbb R=(-\infty,\infty)$ [F8] under the continuous map $p$ [F9]. A locally constant $\mathbb Z$-valued function on the connected space $S^1$ is constant, by the argument of [step 2.1] applied to the whole circle: its fibres are open and partition $S^1$, so two distinct nonempty fibres would be a separation [F10]. Hence $\Gamma(S^1,\underline{\mathbb Z})\cong\mathbb Z$ and $\check H^0(\mathcal U,\underline{\mathbb Z})\cong\mathbb Z$, in agreement with the computation of [step 4.1]. This is the promised calculation for the two-arc cover: $\check H^0$ and $\check H^1$ are both isomorphic to $\mathbb Z$, with $\check H^1$ generated by the class of the overlap cocycle $\kappa$ of [step 5.1], and all higher Čech groups of the cover vanish. ∎ [F5, F8, F9, F10, step 5.1, step 4.1, step 2.1]
