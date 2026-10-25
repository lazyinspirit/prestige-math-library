---
id: "lem-acyclic-rows-and-columns-of-cech-double-complex"
kind: "lemma"
title: "Acyclic directions of the Čech–Godement double complex"
status: published
origin: pipeline
deps: [def-cech-cochain-complex-open-cover, def-godement-resolution, thm-godement-resolution-flasque, thm-flasque-sheaves-acyclic, thm-acyclic-resolution-theorem-for-right-derived-functors, thm-long-exact-sequence-in-cohomology, def-axiom-of-choice, def-direct-sum-total-complex-on-finite-diagonals, prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes, def-mapping-cone-of-a-chain-map, cor-the-cone-criterion-from-the-general-long-exact-sequence, def-quasi-isomorphism, def-global-sections-functor-sheaves, thm-choice-implies-dependent-implies-countable-choice, def-acyclic-cover-for-sheaf, thm-zero-sheaf-cohomology-global-sections, thm-abelian-sheaves-have-enough-injectives, def-sheaf-cohomology-derived-global-sections]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal F$ be a sheaf of abelian groups on $X$, let
$\mathcal U=(U_i)_{i\in I}$ be an open cover of $X$ indexed by a linearly
ordered set, and let
$$0\to\mathcal F\xrightarrow{\ \varepsilon\ }G^0\xrightarrow{\ d^0\ }G^1\xrightarrow{\ d^1\ }\cdots$$
be the Godement resolution of $\mathcal F$ ([[def-godement-resolution]]), so that
$G^q=C^q(\mathcal F)$; every $G^q$ is flasque and the coaugmented complex is
exact ([[thm-godement-resolution-flasque]]).

Put
$$D^{p,q}:=\prod_{i_0<\cdots<i_p}G^q\bigl(U_{i_0}\cap\cdots\cap U_{i_p}\bigr)=C^p\bigl(\mathcal U,G^q\bigr)\qquad(p,q\ge0),$$
the ordered Čech cochains of $\mathcal U$ with values in $G^q$
([[def-cech-cochain-complex-open-cover]]). Let
$h^{p,q}:D^{p,q}\to D^{p+1,q}$ be the Čech differential and let
$v^{p,q}:D^{p,q}\to D^{p,q+1}$ be the map induced componentwise by
$d^q:G^q\to G^{q+1}$; both are defined componentwise over the increasing
tuples, so $h v=v h$ and $D=(D^{p,q},h,v)$ is a commuting double cochain
complex. Its **total complex** is the direct-sum total complex
$$(\operatorname{Tot}D)^n=\bigoplus_{p+q=n}D^{p,q},\qquad d\big|_{D^{p,q}}=h^{p,q}+(-1)^p v^{p,q}$$
([[def-direct-sum-total-complex-on-finite-diagonals]]); every diagonal is
finite, so the direct-sum and product totalisations agree
([[prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes]]).
Augment $D$ by the extra column
$$\tilde D^{-1,q}:=\Gamma(X,G^q)$$
with $h^{-1,q}:\Gamma(X,G^q)\to D^{0,q}$ the restriction map
$s\mapsto(s|_{U_i})_{i\in I}$ and
$v^{-1,q}:=\Gamma(X,d^q):\Gamma(X,G^q)\to\Gamma(X,G^{q+1})$; the
$\Gamma$-notation is the global-sections functor
([[def-global-sections-functor-sheaves]]). The same convention makes
$\tilde D$ a commuting double cochain complex and
$$(\operatorname{Tot}\tilde D)^n=\bigoplus_{p\ge-1,\ p+q=n}\tilde D^{p,q}=(\operatorname{Tot}D)^n\oplus\Gamma(X,G^{n+1}).$$
Finally, let
$$u:\Gamma(X,G^\bullet)\longrightarrow\operatorname{Tot}D,\qquad w:C^\bullet(\mathcal U,\mathcal F)\longrightarrow\operatorname{Tot}D$$
be the cochain maps which place a global section $s$ in the component
$D^{0,q}$ as the family $(s|_{U_i})_{i\in I}$, respectively place a Čech cochain
in the components $D^{p,0}$ through the morphism
$\varepsilon:\mathcal F\to G^0$ of sheaves. Then:

1. every row of $\tilde D$, that is every complex
$\cdots\to0\to\Gamma(X,G^q)\to D^{0,q}\to D^{1,q}\to\cdots$, is exact: its
cohomology $H^p(\tilde D^{\bullet,q})$ vanishes for all $p\ge-1$ and all
$q\ge0$;
2. if $\mathcal U$ is $\mathcal F$-acyclic
([[def-acyclic-cover-for-sheaf]]), then every column $D^{p,\bullet}$ of $D$
satisfies $H^q(D^{p,\bullet})=0$ for $q>0$, while
$H^0(D^{p,\bullet})\cong C^p(\mathcal U,\mathcal F)$ through the map induced by
$\varepsilon$;
3. $u$ is a quasi-isomorphism, and if $\mathcal U$ is $\mathcal F$-acyclic then
$w$ is a quasi-isomorphism as well ([[def-quasi-isomorphism]]).

## Facts & Assumptions

[F1] The ordered Čech cochains are $C^p(\mathcal U,\mathcal G)=\prod_{i_0<\cdots<i_p}\mathcal G(U_{i_0}\cap\cdots\cap U_{i_p})$ with the Čech differential given by the alternating sum of restrictions, componentwise over the increasing tuples ([[def-cech-cochain-complex-open-cover]]).

[F2] For an open $V\subseteq X$, the Godement terms satisfy $G^0(V)=\prod_{x\in V}\mathcal F_x$ and, for $q\ge1$, $G^q(V)=\prod_{x\in V}(Q^{q-1}(\mathcal F))_x$, where $Q^n(\mathcal F)$ is the quotient sheaf in the Godement recursion ([[def-godement-resolution]]).

[F3] Every Godement term $G^q=C^q(\mathcal F)$ is flasque, and the coaugmented complex is exact, so $0\to\mathcal F\to G^\bullet$ is a resolution of $\mathcal F$ by flasque sheaves ([[thm-godement-resolution-flasque]]).

[F4] A flasque abelian sheaf satisfies $H^q(U,\mathcal F|_U)=0$ for every open $U$ and every $q>0$ ([[thm-flasque-sheaves-acyclic]]).

[F5] The acyclic resolution theorem: for a supplied injective resolution datum $I$, an additive left exact functor $F$ and an $F$-acyclic resolution $0\to A\to J^0\to\cdots$, there is a canonical isomorphism $R_I^nF(A)\xrightarrow{\sim}H^n(F(J^\bullet_{\mathrm{del}}))$, assuming the Axiom of Dependent Choice and that $A$ and every cycle $Z^q$ belong to the domain of $I$ ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F6] A short exact sequence of cochain complexes $0\to A^\bullet\to B^\bullet\to C^\bullet\to0$ yields a natural long exact sequence $\cdots\to H^n(A)\to H^n(B)\to H^n(C)\xrightarrow{\partial^n}H^{n+1}(A)\to\cdots$ ([[thm-long-exact-sequence-in-cohomology]]).

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F8] For a first-quadrant cochain bicomplex the direct-sum total complex has $D|_{K^{p,q}}=h^{p,q}+(-1)^p v^{p,q}$ and finite diagonals ([[def-direct-sum-total-complex-on-finite-diagonals]]).

[F9] The mapping cone of a chain map $f$ has graded terms $D_n\oplus C[1]_n$ and differential $d_n^{\operatorname{Cone}(f)}(y,x)=(d_n^D(y)+f_{n-1}(x),-d_{n-1}^C(x))$ ([[def-mapping-cone-of-a-chain-map]]).

[F10] For a map $f$ of complexes the cone $\operatorname{Cone}(f)$ is acyclic if and only if $f$ is a quasi-isomorphism ([[cor-the-cone-criterion-from-the-general-long-exact-sequence]]).

[F11] In ZF the Axiom of Choice implies the Axiom of Dependent Choice, $\mathrm{AC}\Longrightarrow\mathrm{DC}$ ([[thm-choice-implies-dependent-implies-countable-choice]]), so the acyclic resolution theorem is available under the present hypothesis ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F12] The global-sections functor is left exact: if $0\to\mathcal F'\to\mathcal F\to\mathcal F''$ is exact in $\mathrm{Ab}(X)$, then $0\to\Gamma(X,\mathcal F')\to\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal F'')$ is exact ([[def-global-sections-functor-sheaves]]).

[F13] A map of complexes is a quasi-isomorphism when the induced maps on homology are isomorphisms in every degree ([[def-quasi-isomorphism]]).

[F14] If $\mathcal U$ is $\mathcal F$-acyclic then $H^q(W,\mathcal F|_W)=0$ for every $q>0$ and every nonempty finite intersection $W$ of members of $\mathcal U$ ([[def-acyclic-cover-for-sheaf]]), and $H^0(W,\mathcal F|_W)\cong\Gamma(W,\mathcal F|_W)=\mathcal F(W)$ for every abelian sheaf ([[thm-zero-sheaf-cohomology-global-sections]]).

## Proof

**Given:** A topological space $X$, an abelian sheaf $\mathcal F$ on $X$, an open cover $\mathcal U=(U_i)_{i\in I}$ indexed by a linearly ordered set, its Godement resolution $0\to\mathcal F\to G^\bullet$, and the associated double cochain complexes $D$ and $\tilde D$ with their total complexes.

1.1 For each $q\ge0$ define $A_x^0:=\mathcal F_x$ and $A_x^q:=(Q^{q-1}(\mathcal F))_x$ for $q\ge1$. By [F2], $G^q(V)=\prod_{x\in V}A_x^q$. Consequently $D^{p,q}$ is the product over $x\in X$ of the coefficientwise Čech groups $C_x^p:=\prod_{i_0<\cdots<i_p,\ x\in U_{i_0}\cap\cdots\cap U_{i_p}}A_x^q$: each intersection is precisely the set of points belonging to all the listed opens, and the restriction maps act by projection onto the relevant coordinates. The Čech differential therefore acts pointwise in $x$. Also $\Gamma(X,G^q)=\prod_{x\in X}A_x^q$ by the same Godement formula. Writing $S_x:=\{i\in I:x\in U_i\}$, which is nonempty because $\mathcal U$ covers $X$, the $x$-component of the augmented row $q$ has $A_x^q$ in degree $-1$, $C_x^p$ in degree $p$, augmentation the constant family $a\mapsto(a)_{i\in S_x}$, and differential the alternating sum $\delta$. Hence each row of $\tilde D$ is the product over $x\in X$ of these augmented coefficient complexes. [F1, F2]

1.2 Here is the first use of [F7]: the family $\bigl(S_x\bigr)_{x\in X}$ consists of nonempty sets, so the Axiom of Choice provides a function $x\mapsto i_x$ with $i_x\in S_x$ for every $x\in X$. Fix such a choice for the rest of the proof. [F7]

1.3 Here is the bookkeeping lemma that turns exactness of the graded pieces of a filtration into acyclicity of the whole complex. Let $T^\bullet$ be a cochain complex with subcomplexes $F^sT^\bullet\subseteq T^\bullet$ for $s\in\mathbb Z$ such that $F^{s+1}\subseteq F^s$, that $F^sT^n=T^n$ for all $s\le0$, and that for every fixed $n$ one has $F^sT^n=0$ for all $s$ large enough. If every quotient complex $F^sT^\bullet/F^{s+1}T^\bullet$ is acyclic, then $T^\bullet$ is acyclic. Indeed, for each $s$ the short exact sequence $0\to F^{s+1}T^\bullet\to F^sT^\bullet\to F^sT^\bullet/F^{s+1}T^\bullet\to0$ of complexes gives by [F6] the exact sequence $\cdots\to H^n(F^{s+1})\to H^n(F^s)\to H^n(F^s/F^{s+1})\to H^{n+1}(F^{s+1})\to\cdots$; the third term vanishes, so $H^n(F^{s+1})\to H^n(F^s)$ is an isomorphism for all $n$ and $s$. Fix $n$. Choose $M$ large enough that $F^MT^r=0$ for each of the three degrees $r=n-1,n,n+1$, which is possible by the pointwise eventual-vanishing hypothesis and a maximum of three bounds. Then $H^n(F^MT^\bullet)=0$, and iterating the isomorphism over $s=0,1,\dots,M-1$ gives $H^n(T)=H^n(F^0T^\bullet)\cong H^n(F^MT^\bullet)=0$. [F6]

1.4 Adjoin to $D$ the extra row $E^{p,-1}:=C^p(\mathcal U,\mathcal F)$ of [F1], with horizontal differential the Čech differential $\delta$ and vertical differential $w^p:C^p(\mathcal U,\mathcal F)\to D^{p,0}$ induced componentwise by $\varepsilon:\mathcal F\to G^0$, and keep $D^{p,q}$ for $q\ge0$ with its two differentials. Then $h v=v h$ on the new row too, because both the Čech differential and $\varepsilon$ are natural with respect to the restriction maps, and $h^2=0$, $v^2=0$ hold there because $\delta^2=0$ on Čech cochains and $d^0\varepsilon=0$ by exactness of the resolution [F3]; the total complex is $(\operatorname{Tot}E)^n=(\operatorname{Tot}D)^n\oplus E^{n+1,-1}=(\operatorname{Tot}D)^n\oplus C^{n+1}(\mathcal U,\mathcal F)$ in the convention of [F8]. The map $w:C^\bullet(\mathcal U,\mathcal F)\to\operatorname{Tot}D$ of the statement is the inclusion of this extra row: it is a cochain map, since for a Čech cochain $\alpha$ the vertical component of $d(w\alpha)$ is $d^0\varepsilon(\alpha)=0$ and the horizontal component is $\delta(w\alpha)=w(\delta\alpha)$ by naturality of $\varepsilon$. [F1, F3, F8]

2.1 For each $x\in X$ write $\sigma:=i_x$ and define, for every $q\ge0$, a homomorphism $k_x:C^{q+1}_x\to C^q_x$ by $(k_xc)(\tau):=0$ if $\sigma\in\tau$ and $(k_xc)(\tau):=(-1)^r c\bigl(\operatorname{sort}(\sigma\cup\tau)\bigr)$ if $\sigma\notin\tau$, where $\tau$ runs over increasing $(q+1)$-tuples in $S_x$ and $r$ is the position of $\sigma$ in the increasing $(q+2)$-tuple $\operatorname{sort}(\sigma\cup\tau)$; this is the data fixed in [step 1.1] and [step 1.2]. Let $c\in C^{q+1}_x$ and let $\tau$ be an increasing $(q+2)$-tuple. If $\sigma\notin\tau$ put $u:=\operatorname{sort}(\sigma\cup\tau)=(u_0<\cdots<u_{q+2})$ with $u_r=\sigma$; then $(\delta k_xc)(\tau)=\sum_j(-1)^j(k_xc)(\tau\setminus j)$ and $(k_x\delta c)(\tau)=(-1)^r(\delta c)(u)=(-1)^r\sum_i(-1)^ic(u\setminus i)$. For an entry $u_i$ of $u$ that is an element $\tau_j$ of $\tau$ with $\tau_j<\sigma$ one has $i=j$ and the insertion position of $\sigma$ in $\operatorname{sort}(\sigma\cup(\tau\setminus j))$ is $r-1$, so the two occurrences of $c(u\setminus\tau_j)$ carry the signs $(-1)^{j+r-1}$ and $(-1)^{r+j}$ and cancel; for $\tau_j>\sigma$ one has $i=j+1$ and insertion position $r$, so the signs $(-1)^{j+r}$ and $(-1)^{r+j+1}$ cancel; the remaining term is $i=r$, contributing $(-1)^{2r}c(u\setminus\sigma)=c(\tau)$. If $\sigma\in\tau$, say $\tau_r=\sigma$, then $(k_x\delta c)(\tau)=0$ by the definition of $k_x$, while in the sum for $(\delta k_xc)(\tau)$ every $j\ne r$ contributes $0$ because $\sigma\in\tau\setminus j$, and the term $j=r$ contributes $(-1)^r(k_xc)(\tau\setminus r)=(-1)^r(-1)^{r}c(\tau)=c(\tau)$, the insertion position of $\sigma$ in $\operatorname{sort}(\sigma\cup(\tau\setminus r))=\tau$ being $r$. In both cases $\bigl(\delta k_x+k_x\delta\bigr)(c)(\tau)=c(\tau)$, that is $\delta k_x+k_x\delta=\operatorname{id}$ on $C^{q+1}_x$ for every $q\ge0$. [step 1.1, step 1.2]

3.1 Each augmented complex $\tilde A_x^q$ is exact. If $c\in C^{q+1}_x$ is a cocycle, $\delta c=0$, then $c=\delta(k_xc)+k_x(\delta c)=\delta(k_xc)$ lies in the image of $\delta$, so every cohomology group $H^p(\tilde A_x^q)$ vanishes for $p\ge1$ by [step 2.1]. For $p=0$ suppose $\delta c=0$ with $c\in C^0_x$; for $i\in S_x$ the value at the two-element set $\{\sigma,i\}$ gives $0=\pm\bigl(c(i)-c(\sigma)\bigr)$, so $c$ is the constant family with value $k(c):=c(\sigma)\in A_x^q$, that is $c$ is the image of the coefficient $k(c)$ under the augmentation; hence $H^0(\tilde A_x^q)=0$. In degree $-1$ the augmentation $a\mapsto(a)_{i\in S_x}$ is injective because $S_x\ne\emptyset$: if the constant family is zero then $a=0$. Therefore $H^p(\tilde A_x^q)=0$ for all $p\ge-1$, using [step 1.2] for the nonemptiness of $S_x$ and [step 2.1] for the positive degrees. [step 2.1, step 1.2]

4.1 Let $(P_x,d_x)_{x\in X}$ be any family of cochain complexes of abelian groups with every $P_x$ exact. Then the product complex $\prod_xP_x$ with differential $\prod_xd_x$ is exact: $\ker(\prod_xd_x)=\prod_x\ker d_x$ holds componentwise without any choice, while $\operatorname{im}(\prod_xd_x)=\prod_x\operatorname{im}d_x$ uses [F7], because a family $(b_x)$ with $b_x=d_x(a_x)$ for some $a_x$ is hit by the family of selected preimages; hence $H^p(\prod_xP_x)=\prod_xH^p(P_x)=0$. Applying this to the factor complexes $\tilde A_x^q$ of [step 3.1], and using the product description of the rows in [step 1.1], the row $q$ of $\tilde D$ is exact for every $q\ge0$. [F7, step 1.1, step 3.1]

5.1 Apply [step 1.3] to $T^\bullet:=\operatorname{Tot}\tilde D$ with $F^sT^n:=\bigoplus_{p\ge-1,\ q\ge s,\ p+q=n}\tilde D^{p,q}$. These are subcomplexes: the horizontal differential $h$ raises $p$ and preserves $q$, and the vertical differential $(-1)^pv$ raises $q$ to $q+1\ge s$; the filtration is decreasing and $F^sT^n=T^n$ for $s\le0$, while in total degree $n$ the second coordinate satisfies $q\le n+1$, so $F^sT^n=0$ for $s>n+1$. The quotient $F^sT^\bullet/F^{s+1}T^\bullet$ is the row $s$ of $\tilde D$ with the induced differential $h$ (the vertical part lands in the next quotient), which is exact by [step 4.1]. Hence $\operatorname{Tot}\tilde D$ is acyclic. [step 1.3, step 4.1]

5.2 Fix $p\ge0$ and an increasing $(p+1)$-tuple $\alpha=(i_0<\cdots<i_p)$, and put $W_\alpha:=U_{i_0}\cap\cdots\cap U_{i_p}$. By the definition of $D^{p,q}$, the column $D^{p,\bullet}$ is the product over all such tuples $\alpha$ of the complexes $\Gamma(W_\alpha,G^\bullet|_{W_\alpha})$, with differentials induced by the Godement differentials. Each restriction $G^q|_{W_\alpha}$ is flasque on the open subspace $W_\alpha$, since every restriction map between opens of $W_\alpha$ is a restriction map of $G^q$, and the resolution restricts to an exact complex $0\to\mathcal F|_{W_\alpha}\to G^\bullet|_{W_\alpha}$. By [F4] each term is $\Gamma$-acyclic on $W_\alpha$. The supplied datum of [[thm-abelian-sheaves-have-enough-injectives]] covers all of $\mathrm{Ab}(W_\alpha)$, including $\mathcal F|_{W_\alpha}$ and every cycle of the restricted Godement resolution, so the acyclic resolution theorem [F5] applies (its hypothesis DC is available by [F11]) and identifies $H^q(\Gamma(W_\alpha,G^\bullet|_{W_\alpha}))$ with $H^q(W_\alpha,\mathcal F|_{W_\alpha})$. Taking the product over $\alpha$ and using [step 4.1] gives $H^q(D^{p,\bullet})=\prod_\alpha H^q(W_\alpha,\mathcal F|_{W_\alpha})$. In degree zero the identification is explicit: exactness at $G^0$ and left exactness of $\Gamma$ [F12] give $\ker(G^0(W_\alpha)\to G^1(W_\alpha))=\varepsilon(\mathcal F(W_\alpha))$, and $\varepsilon$ is injective on sections; hence the map $w$ of the statement induces an isomorphism $C^p(\mathcal U,\mathcal F)\to H^0(D^{p,\bullet})=\prod_\alpha\ker(G^0(W_\alpha)\to G^1(W_\alpha))$. If $\mathcal U$ is $\mathcal F$-acyclic then by [F14] each factor $H^q(W_\alpha,\mathcal F|_{W_\alpha})$ vanishes for $q>0$, so $H^q(D^{p,\bullet})=0$ for $q>0$. This is assertion 2. [F4, F5, F11, F12, F14, step 4.1]

6.1 The map $u:\Gamma(X,G^\bullet)\to\operatorname{Tot}D$ is a cochain map: its component in $D^{0,q}$ is the restriction map of [F1], the Čech differential of the family $(s|_{U_i})_{i\in I}$ vanishes because the family is the restriction of the single section $s$ to a cover, and the vertical differential of the family is $(d^qs)|_{U_i}$ by naturality of the morphism $d^q:G^q\to G^{q+1}$ with respect to restrictions, which is $u$ of the Godement differential. With the total-complex convention of [F8] the differential of $\operatorname{Tot}\tilde D$ sends $(x,c)\in(\operatorname{Tot}D)^n\oplus\Gamma(X,G^{n+1})$ to $\bigl(dx+u(c),-d_Gc\bigr)$: the horizontal coefficient in degree $p=-1$ is $1$, and the vertical coefficient is $(-1)^{-1}=-1$. This is exactly the cone differential $(d^D(y)+f_{n-1}(x),-d^C_{n-1}(x))$ of [F9] for $f=u$, after the standard reindexing of cochain complexes as chain complexes and the identification $\Gamma(X,G^{n+1})$ with $C[1]^n$; hence $\operatorname{Tot}\tilde D=\operatorname{Cone}(u)$ is acyclic by [step 5.1], and the cone criterion [F10] shows that $u$ is a quasi-isomorphism in the sense of [F13]. This is the first half of assertion 3. [F1, F8, F9, F10, F13, step 5.1]

6.2 Assume now that $\mathcal U$ is $\mathcal F$-acyclic, and filter $\operatorname{Tot}E$ by $F^sT^n:=\bigoplus_{p\ge s,\ p+q=n}E^{p,q}$. These are subcomplexes because $h$ raises $p$ and the vertical differential keeps $p$ fixed, the filtration is decreasing and finite in each total degree, and the quotient $F^sT^\bullet/F^{s+1}T^\bullet$ is the column $s$ of $E$ with differential $(-1)^sv$ (the horizontal part leaves the quotient). By [step 5.2] that quotient has vanishing cohomology: its degree $-1$ cohomology is the kernel of the injective map $C^s(\mathcal U,\mathcal F)\to D^{s,0}$ and hence zero, while its degree $0$ cohomology is $\ker(D^{s,0}\to D^{s,1})/\operatorname{im}(C^s(\mathcal U,\mathcal F)\to D^{s,0})=0$ by the explicit $H^0$ identification of [step 5.2], and its $q>0$ cohomology is $H^q(D^{s,\bullet})=0$. Hence $\operatorname{Tot}E$ is acyclic by [step 1.3]. [step 5.2, step 1.3, step 1.4]

7.1 With the total differential of [F8], an element $(x,\alpha)\in(\operatorname{Tot}D)^n\oplus C^{n+1}(\mathcal U,\mathcal F)$ of $\operatorname{Tot}E$ has differential $\bigl(dx+(-1)^{n+1}w(\alpha),\ \delta\alpha\bigr)$: the extra row sits in bidegree $(p,q)=(n+1,-1)$, so its horizontal differential enters with coefficient $1$ and its vertical differential with the coefficient $(-1)^{p}=(-1)^{n+1}$. Conjugating the second summand by the sign $(-1)^{n+1}$ turns this into the cone differential $\bigl(dx+w(\alpha),-\delta\alpha\bigr)$ of [F9] for $f=w$, so $\operatorname{Tot}E$ is isomorphic to the mapping cone of $w$; since $\operatorname{Tot}E$ is acyclic by [step 6.2], the cone criterion [F10] makes $w$ a quasi-isomorphism. This is the second half of assertion 3, and together with [step 6.1] and [step 5.2] it proves assertions 1, 2 and 3. ∎ [F8, F9, F10, step 1.4, step 6.2]
