---
id: cex-proper-not-necessarily-projective
kind: counterexample
title: "A proper nonprojective scheme from glued projective spaces"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-relative-projective-space-standard-charts
  - thm-gluing-affine-schemes
  - def-closed-immersion-schemes
  - lem-closed-immersion-local-on-target
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-morphism-schemes-local-on-source-target
  - def-sum-and-product-of-ideals
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-closed-immersion-pushout-schemes
  - lem-closed-gluing-of-two-projective-three-spaces-is-proper
  - lem-line-bundles-on-projective-three-space-restrict-by-degree
  - lem-uniqueness-of-twists-on-the-projective-line
  - def-pullback-module-ringed-spaces
  - lem-stalk-inverse-image-sheaf
  - lem-stalk-tensor-product
  - def-projective-morphism-pre-proj
  - def-proper-morphism
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Vakil, The Rising Sea, Sections 17.4.8-17.4.12 (gluing two schemes along isomorphic closed subschemes; the proper nonprojective example)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
    - title: "The Stacks Project, More on Morphisms, Situation 37.67.1 (tag 0ECI) and Lemma 37.67.2 (tag 0ECJ)"
      url: https://stacks.math.columbia.edu/tag/0E25
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let
$X_1,X_2$ be two copies of $\mathbb P^3_k$, with homogeneous coordinates
$x_0,x_1,x_2,x_3$. In each copy $X_m$ let
$$L_m=V(x_2,x_3)\subseteq X_m,\qquad C_m=V\bigl(x_0,\,x_1^2+x_2x_3\bigr)\subseteq X_m$$
be the coordinate line, identified with $\mathbb P^1_k$ through the
coordinates $(x_0:x_1)$, and the plane conic inside the plane $x_0=0$,
identified with $\mathbb P^1_k$ by $(s:t)\mapsto(0:st:t^2:-s^2)$ in the
coordinates $(x_1:x_2:x_3)$. Then $L_m$ and $C_m$ are disjoint closed
subschemes of $X_m$, both isomorphic to $\mathbb P^1_k$, and $C_m$ is a
nonsingular plane conic. Let $Z_m:=L_m\sqcup C_m$ be their disjoint union, a
closed subscheme of $X_m$, and let $\sigma:Z_1\to Z_2$ be the $k$-isomorphism
which is $\varphi_2\circ\psi_1$ on $L_1$ and
$\psi_2^{-1}\circ\varphi_1^{-1}$ on $C_1$, where
$\psi_m:L_m\to\mathbb P^1_k$ and $\varphi_m:\mathbb P^1_k\to C_m$ are the two
identifications above. Then the closed-subscheme pushout
$X:=X_1\amalg_{Z}X_2$ with $Z:=Z_1$ exists as a $k$-scheme, each $X_m$ is a
closed subscheme of $X$, and the structure morphism
$X\to\operatorname{Spec}k$ is proper but not projective: there is no closed
immersion $X\to\mathbb P^N_k$ over $k$ for any $N\ge0$. So properness does not
imply projectivity, even over an algebraically closed field.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, two copies $X_1,X_2$ of $\mathbb P^3_k$ with homogeneous coordinates $x_0,\dots,x_3$, their standard charts, the closed subschemes $L_m=V(x_2,x_3)$ and $C_m=V(x_0,x_1^2+x_2x_3)$ to be constructed below, the identifications $\psi_m:L_m\to\mathbb P^1_k$ and $\varphi_m:\mathbb P^1_k\to C_m$ of the statement, and the gluing isomorphism $\sigma$ built from them.

[F1] For $S=\operatorname{Spec}A$ the standard charts of $\mathbb P^n_S$ are $U^S_i=\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$ with $x^{(i)}_\ell=t_\ell/t_i$; they are affine over $S$ and form an open cover, and on the overlap $x^{(i)}_\ell=x^{(j)}_\ell/x^{(j)}_i$ for $\ell\ne i,j$ while $x^{(i)}_j=1/x^{(j)}_i$. For $n=1$ this presents $\mathbb P^1_S$ as the gluing of the two charts $\operatorname{Spec}A[x^{(0)}_1]$ and $\operatorname{Spec}A[x^{(1)}_0]$ along the identification $x^{(1)}_0=1/x^{(0)}_1$. ([[def-relative-projective-space-standard-charts]])

[F2] Affine schemes equipped with open subschemes and isomorphisms on overlaps satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism; the given affine schemes become an open affine cover. ([[thm-gluing-affine-schemes]])

[F3] A morphism $i:Z\to X$ is a closed immersion when its underlying map is a homeomorphism onto a closed subset and $\mathcal O_X\to i_*\mathcal O_Z$ is surjective, and it is a closed immersion if and only if its restrictions over the members of an open cover of $X$ are closed immersions. Assume AC: for a closed immersion $i:Z\to Y$ and an affine open $U=\operatorname{Spec}A$ of $Y$ there is an ideal $I\subseteq A$ with $i^{-1}(U)\cong\operatorname{Spec}(A/I)$, and every base change of a closed immersion is a closed immersion. ([[def-closed-immersion-schemes]], [[lem-closed-immersion-local-on-target]], [[lem-closed-immersion-affine-quotient-and-base-change]])

[F4] Compatible morphisms of schemes on an open cover of a scheme glue uniquely to a morphism from that cover. ([[lem-morphism-schemes-local-on-source-target]])

[F5] For ideals $I,J$ of a commutative ring the sum $I+J$ and the product $IJ$ are ideals, and if $I_1,\dots,I_r$ are pairwise comaximal then the canonical map $R\to\prod_iR/I_i$ is surjective with kernel $\bigcap_iI_i$, so $R/\prod_iI_i\cong\prod_iR/I_i$: the product and the intersection agree. ([[def-sum-and-product-of-ideals]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]])

[F6] Assume AC. For closed immersions $i:Z\to X$ and $j:Z\to Y$ of $S$-schemes the pushout $T=X\amalg_ZY$ in $S$-schemes exists; with $a:X\to T$, $b:Y\to T$ the structure morphisms: $a$ and $b$ are closed immersions, $|T|=|X|\cup|Y|$, $|X|\cap|Y|=|Z|$ and $Z\cong X\times_TY$, while $\mathcal O_T=a_*\mathcal O_X\times_{c_*\mathcal O_Z}b_*\mathcal O_Y$; every point of $Z$ has an open neighbourhood $\operatorname{Spec}(A\times_CB)$ inside $T$. ([[lem-closed-immersion-pushout-schemes]])

[F7] Assume AC. Let $k$ be an algebraically closed field and $X_1,X_2$ two copies of $\mathbb P^3_k$. If $L_i$ (a line) and $C_i$ (a smooth plane conic) are closed subschemes of $X_i$ with $|L_i|\cap|C_i|=\varnothing$ whose disjoint union $Z_i=L_i\sqcup C_i$ is a closed subscheme of $X_i$, and $\sigma:Z_1\to Z_2$ is an isomorphism with $\sigma(L_1)=C_2$ and $\sigma(C_1)=L_2$, then the closed-subscheme pushout $X_1\amalg_ZX_2$ along $Z:=Z_1$ exists as a $k$-scheme, each $X_i$ is a closed subscheme of it, and it is proper over $k$. ([[lem-closed-gluing-of-two-projective-three-spaces-is-proper]])

[F8] Define $\mathcal O_{\mathbb P^3_k}(n)$ by gluing free rank-one sheaves with transitions $e_j=(x_j/x_i)^ne_i$, the same construction being used on every $\mathbb P^N_k$. For every field $k$ every invertible sheaf on $\mathbb P^3_k$ is isomorphic to $\mathcal O(n)$ for a unique $n\in\mathbb Z$; its restriction to any line $L\cong\mathbb P^1_k$ is $\mathcal O_{\mathbb P^1}(n)$; for a nonsingular plane conic $C\subset\mathbb P^2_k\subset\mathbb P^3_k$ with a $k$-isomorphism $\phi:\mathbb P^1_k\xrightarrow{\sim}C$ the pullback to $\mathbb P^1_k$ is $\mathcal O_{\mathbb P^1}(2n)$; and $n>0$ whenever the sheaf is the pullback of $\mathcal O_{\mathbb P^N}(1)$ along a closed immersion $\mathbb P^3_k\hookrightarrow\mathbb P^N_k$. ([[lem-line-bundles-on-projective-three-space-restrict-by-degree]])

[F9] Over any field $k$, $\mathcal O_{\mathbb P^1_k}(a)\cong \mathcal O_{\mathbb P^1_k}(b)$ if and only if $a=b$; the twist index of an invertible sheaf on the projective line is well defined. ([[lem-uniqueness-of-twists-on-the-projective-line]])

[F10] For a morphism of ringed spaces $(f,f^\sharp):(X,\mathcal O_X)\to (Y,\mathcal O_Y)$ the pullback of an $\mathcal O_Y$-module $\mathcal G$ is $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$ ([[def-pullback-module-ringed-spaces]]); the stalk of the inverse image is canonically $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]) and the stalk of a tensor product is the tensor product of the stalks ([[lem-stalk-tensor-product]]).

[F11] A morphism $f:X\to S$ is **projective** if for some $n\ge0$ it factors over $S$ as $X\xrightarrow{i}\mathbb P^n_S\to S$ with $i$ a closed immersion and the second arrow the projection; it is **proper** if it is separated, of finite type and universally closed. ([[def-projective-morphism-pre-proj]], [[def-proper-morphism]])

[F12] AC states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

**AC use:** The assumption is inherited exactly by [F3] (the affine quotient form of closed immersions), [F6] and [F7] (closed-subscheme pushouts); every other construction below makes only finitely many explicit choices of charts, coordinates and ring generators.

## Proof

**Proof technique:** direct: the line and the conic are built chart by chart and glued, their disjoint union is the closed subscheme on which the two charts' product ideals agree, and the gluing lemma produces a proper $k$-scheme. A hypothetical closed immersion into projective space would pull $\mathcal O(1)$ back to a twisted sheaf on each component; comparing the degrees on the exchanged line and conic forces the twist indices to satisfy $n_1=2n_2$ and $2n_1=n_2$, which contradicts their positivity.

1.1 Write $U^{(m)}_i$ for the standard charts of $X_m$, with coordinates $u_{ij}=x_j/x_i$ ($j\ne i$), so that $A_i=k[u_{ij}:j\ne i]$; the charts cover $X_m$ and on $U^{(m)}_i\cap U^{(m)}_j$ one has $u_{i\ell}=u_{j\ell}/u_{ji}$ for $\ell\ne i,j$ and $u_{ij}=1/u_{ji}$ by [F1]. Consequently, for a homogeneous form $F$ of degree $d$ with dehomogenizations $F_i$ and $F_j$ at $i$ and $j$, one has $F_j=u_{ji}^dF_i=u_{ij}^{-d}F_i$ on the overlap, a unit multiple of $F_i$; thus the chart ideals generated by the dehomogenizations of a fixed finite list of homogeneous forms have localizations that correspond under the transition isomorphisms, and gluing data built from them are compatible. [F1]

1.2 Define $\varphi_m:\mathbb P^1_k\to X_m$ on the two standard charts of the line as follows: with $w$ the coordinate on $\operatorname{Spec}k[w]=U^{(\mathbb P^1)}_0$ use the ring map $k[u_{30},u_{31},u_{32}]\to k[w]$, $u_{30}\mapsto0$, $u_{31}\mapsto-w$, $u_{32}\mapsto-w^2$, whose target ideal $(u_{30},u_{31}^2+u_{32})$ is generated by the equations of $C_m\cap U^{(m)}_3$; with $w'$ the coordinate on the other chart use $k[u_{20},u_{21},u_{23}]\to k[w']$, $u_{20}\mapsto0$, $u_{21}\mapsto w'$, $u_{23}\mapsto-w'^2$, with target ideal $(u_{20},u_{21}^2+u_{23})$. On the overlap $ww'=1$ the two composites agree, because the point is $(x_0:x_1:x_2:x_3)=(0:w:w^2:-1)$ in the first chart and $(0:w':1:-w'^2)$ in the second, and these are the same projective point when $ww'=1$; by [F4] they glue to a $k$-morphism $\varphi_m:\mathbb P^1_k\to X_m$ with image in $C_m$. This morphism is an isomorphism onto $C_m$: it maps the two source charts isomorphically onto $C_m\cap U^{(m)}_3$ and $C_m\cap U^{(m)}_2$ with inverses $w=-u_{31}$ and $w'=u_{21}$, and those two pieces cover $C_m$, since a point of $C_m\cap U^{(m)}_1$ with $u_{12}=u_{13}=0$ would satisfy $1+u_{12}u_{13}=1\ne0$. [F1, F2, F3, F4]

2.1 Let $L_m\subseteq X_m$ be the closed subscheme with chart pieces $L_m\cap U^{(m)}_0=V(u_{02},u_{03})$, $L_m\cap U^{(m)}_1=V(u_{12},u_{13})$ and $L_m\cap U^{(m)}_2=L_m\cap U^{(m)}_3=\varnothing$. By step 1.1 the localized ideals $(u_{02},u_{03})$ and $(u_{12},u_{13})$ correspond on $U^{(m)}_0\cap U^{(m)}_1$, so the two affine pieces glue along their overlap to a scheme $L_m$ mapping to $X_m$ by a morphism whose restrictions to the chart pieces are closed immersions; [F2] supplies the gluing and [F3] makes the morphism $L_m\to X_m$ a closed immersion. Moreover $L_m\cap U^{(m)}_0=\operatorname{Spec}k[u_{01}]$ and $L_m\cap U^{(m)}_1=\operatorname{Spec}k[u_{10}]$ are glued by $u_{01}=1/u_{10}$, which by [F1] is exactly the standard two-chart presentation of $\mathbb P^1_k$, so [F2] gives a canonical isomorphism $\psi_m:L_m\to\mathbb P^1_k$ with $\psi_m(u_{01})$ the standard coordinate; $|L_m|$ is the set of points with $x_2=x_3=0$. [F1, F2, F3]

2.2 Let $C_m\subseteq X_m$ be the closed subscheme with chart pieces $C_m\cap U^{(m)}_0=\varnothing$, $C_m\cap U^{(m)}_1=V(u_{10},1+u_{12}u_{13})$, $C_m\cap U^{(m)}_2=V(u_{20},u_{21}^2+u_{23})$ and $C_m\cap U^{(m)}_3=V(u_{30},u_{31}^2+u_{32})$; by step 1.1 these are the dehomogenizations of $x_0$ and $x_1^2+x_2x_3$, their localizations correspond on every overlap, and [F2] with [F3] makes $C_m$ a closed subscheme of $X_m$ lying in the plane $x_0=0$. On the three charts of that plane the conic has equations $1+bc$, $a^2+c$ and $a^2+b$ for the two remaining ratio coordinates $a,b,c$; the first partials are $(c,b)$, $(2a,1)$ and $(2a,1)$, and a singular point would have to make the equation and both partials vanish: on the first chart $b=c=0$ would force $1=0$, and on the other two charts the second partial is $1$. So $C_m$ is a nonsingular plane conic in the sense of [F8]. [F1, F2, F3, F8]

3.1 The closed subschemes $L_m$ and $C_m$ are disjoint: on $U^{(m)}_0$ the line is $V(u_{02},u_{03})$ while $C_m\cap U^{(m)}_0=\varnothing$; on $U^{(m)}_1$ a common point of $V(u_{12},u_{13})$ and $V(u_{10},1+u_{12}u_{13})$ would have $u_{12}=u_{13}=0$ and hence $1+u_{12}u_{13}=1\ne0$, which is impossible; on $U^{(m)}_2$ and $U^{(m)}_3$ the line is empty. Hence $|L_m|\cap|C_m|=\varnothing$ for $m=1,2$. [step 2.1, step 2.2]

3.2 Let $I^L_i,I^C_i\subseteq A_i$ be the ideals generated by the dehomogenizations of $(x_2,x_3)$ and of $(x_0,x_1^2+x_2x_3)$ at the chart $i$ as displayed in steps 2.1 and 2.2; by step 1.1 their localizations correspond on overlaps, and the product ideals $I^L_iI^C_i$ have corresponding localizations as well, so the closed subschemes $\operatorname{Spec}(A_i/I^L_iI^C_i)$ glue by [F2] to a closed subscheme $Z_m\subseteq X_m$ whose chart piece over $U^{(m)}_i$ is $\operatorname{Spec}(A_i/I^L_iI^C_i)$, the closedness following from [F3]. On each chart the two ideals are comaximal: $I^C_0=I^L_2=I^L_3=A_i$, and on $U^{(m)}_1$ one has $(1+u_{12}u_{13})-u_{12}u_{13}=1$ in $I^L_1+I^C_1$. Hence [F5] gives, compatibly with the transitions of step 1.1, canonical isomorphisms $$Z_m\cap U^{(m)}_i\cong(L_m\cap U^{(m)}_i)\sqcup(C_m\cap U^{(m)}_i),$$ which glue to a $k$-isomorphism $Z_m\cong L_m\sqcup C_m$; in particular $Z_m$ is a closed subscheme of $X_m$ whose closed subsets $L_m,C_m$ are disjoint and cover it. [F2, F3, F5, step 1.1, step 2.1, step 2.2]

4.1 Let $\sigma:Z_1\to Z_2$ be the isomorphism which on the component $L_1$ of $Z_1\cong L_1\sqcup C_1$ is $\varphi_2\circ\psi_1:L_1\to C_2$ and on the component $C_1$ is $\psi_2^{-1}\circ\varphi_1^{-1}:C_1\to L_2$; this is a $k$-isomorphism onto $Z_2\cong C_2\sqcup L_2$ with $\sigma(L_1)=C_2$ and $\sigma(C_1)=L_2$, and the source components are as in step 3.2. [step 2.1, step 2.2, step 3.2]

5.1 The closed subschemes $L_m,C_m\subseteq X_m$ of steps 2.1 and 2.2 are disjoint by step 3.1, their disjoint union is the closed subscheme $Z_m$ by step 3.2, and $\sigma$ of step 4.1 exchanges them as required; the field $k$ is algebraically closed and $C_m$ is a nonsingular plane conic by step 2.2. So [F7] applies to the data $(X_1,X_2,L_m,C_m,\sigma)$: the closed-subscheme pushout $X=X_1\amalg_ZX_2$, $Z:=Z_1$, exists as a $k$-scheme, the structure morphisms $a:X_1\to X$, $b:X_2\to X$ are closed immersions exhibiting each $X_m$ as a closed subscheme of $X$, and $X\to\operatorname{Spec}k$ is proper in the sense of [F11]. This proves the existence, closedness and properness clauses of the statement. [F7, F11, step 2.2, step 3.1, step 3.2, step 4.1]

6.1 Suppose now that $h:X\to\mathbb P^N_k$ is a closed immersion over $\operatorname{Spec}k$ for some $N\ge0$, so that $X\to\operatorname{Spec}k$ is projective in the sense of [F11]. Then $\mathcal L:=h^*\mathcal O_{\mathbb P^N}(1)$ is an invertible sheaf on $X$: $\mathcal O(1)$ is invertible by its gluing definition in [F8], and pullback preserves invertibility, since by the definition [F10] the pullback of a free rank-one module is free of rank one on the preimage of a trivializing open set. Hence $M_1:=a^*\mathcal L$ and $M_2:=b^*\mathcal L$ are invertible sheaves on $X_1,X_2\cong\mathbb P^3_k$. The composite $h\circ a:\mathbb P^3_k\to\mathbb P^N_k$ is again a closed immersion: over an affine open $V$ of $\mathbb P^N_k$ the preimage $h^{-1}(V)=\operatorname{Spec}(A/I)$ is affine by [F3], the preimage $(ha)^{-1}(V)$ is a closed subscheme of it because $a$ is a closed immersion and closedness is local on the target by [F3], and a composite of closed subscheme inclusions is a closed immersion; [F3] then gives the composite closedness over the chosen affine cover of $\mathbb P^N_k$. Since $M_1\cong(ha)^*\mathcal O(1)$ is the pullback of $\mathcal O(1)$ along a closed immersion, the classification and positivity clauses of [F8] give a unique $n_1\in\mathbb Z$ with $M_1\cong\mathcal O_{\mathbb P^3}(n_1)$ and $n_1>0$; the same argument gives $M_2\cong\mathcal O_{\mathbb P^3}(n_2)$ with $n_2>0$. [F3, F8, F10, F11, step 5.1]

6.2 Let $j_1:Z\to X_1$ and $j_2:Z\to X_2$ be the closed immersions used to glue (so $j_2=z_2\sigma$ in the notation of [F7], and $aj_1=bj_2$ because the pushout square commutes). Pulling $\mathcal L$ back along these two morphisms gives the same sheaf: $j_1^*M_1\cong(aj_1)^*\mathcal L=(bj_2)^* \mathcal L\cong j_2^*M_2$, the outer isomorphisms being the composition compatibility of pullback, which by [F10] is the canonical identification of stalks $(\mathcal O_{Z,z}\otimes_{\mathcal O_{X_1,j_1(z)}}M_{1,j_1(z)})\cong \mathcal O_{Z,z}\otimes_{\mathcal O_{X,x}}\mathcal L_x$ for $x=aj_1(z)$. This identification is compatible with the decompositions $Z\cong L_1\sqcup C_1$ and $Z_2\cong C_2\sqcup L_2$ of step 3.2 and with $\sigma$: passing to the component $L_1$ of $Z$ it reads $M_1|_{L_1}\cong(\sigma|_{L_1})^*(M_2|_{C_2})$, and passing to the component $C_1$ it reads $M_1|_{C_1}\cong(\sigma|_{C_1})^*(M_2|_{L_2})$, where $\sigma|_{L_1}=(\varphi_2\circ\psi_1)|_{L_1}$ and $\sigma|_{C_1}=(\psi_2^{-1}\circ\varphi_1^{-1})|_{C_1}$ by step 4.1. [F6, F10, step 3.2, step 4.1, step 5.1]

7.1 Restrict to the component $L_1$. By the line clause of [F8] the pullback of $M_1|_{L_1}$ along $\psi_1^{-1}:\mathbb P^1_k\to L_1$ is $\mathcal O_{\mathbb P^1}(n_1)$. On the other hand step 6.2 identifies $M_1|_{L_1}$ with $(\sigma|_{L_1})^*(M_2|_{C_2})$, so pulling back along $\psi_1^{-1}$ gives $(\sigma|_{L_1}\circ\psi_1^{-1})^*(M_2|_{C_2}) =\varphi_2^*(M_2|_{C_2})$, which is $\mathcal O_{\mathbb P^1}(2n_2)$ by the conic clause of [F8] applied to the nonsingular plane conic $C_2$ of step 2.2 with the isomorphism $\varphi_2$. Hence $\mathcal O_{\mathbb P^1}(n_1)\cong\mathcal O_{\mathbb P^1}(2n_2)$, and $n_1=2n_2$ by [F9]. [F8, F9, step 2.2, step 4.1, step 6.1, step 6.2]

7.2 Restrict to the component $C_1$. By the conic clause of [F8] the pullback of $M_1|_{C_1}$ along $\varphi_1:\mathbb P^1_k\to C_1$ is $\mathcal O_{\mathbb P^1}(2n_1)$. By step 6.2 the sheaf $M_1|_{C_1}$ is $(\sigma|_{C_1})^*(M_2|_{L_2})$, so pulling back along $\varphi_1$ gives $(\sigma|_{C_1}\circ\varphi_1)^*(M_2|_{L_2})=\psi_2^{-1*}(M_2|_{L_2})$, the pullback of $M_2|_{L_2}$ along $\psi_2^{-1}:\mathbb P^1_k\to L_2$, which is $\mathcal O_{\mathbb P^1}(n_2)$ by the line clause of [F8]. Hence $\mathcal O_{\mathbb P^1}(2n_1)\cong\mathcal O_{\mathbb P^1}(n_2)$ and $2n_1=n_2$ by [F9]. [F8, F9, step 2.1, step 4.1, step 6.1, step 6.2]

8.1 Combining $n_1=2n_2$ of step 7.1 with $2n_1=n_2$ of step 7.2 gives $n_1=4n_1$, hence $3n_1=0$ and $n_1=0$ in $\mathbb Z$, contradicting $n_1>0$ from step 6.1. Therefore no closed immersion $X\to\mathbb P^N_k$ over $k$ exists for any $N\ge0$, and by [F11] the structure morphism $X\to\operatorname{Spec}k$ is not projective, while it is proper by step 5.1: properness does not imply projectivity over an algebraically closed field. The Axiom of Choice [F12] is used exactly through the AC-declared suppliers [F3], [F6] and [F7] cited in steps 3.2 and 5.1 and in the closedness computation of step 6.1; all other steps make finitely many explicit choices of charts, coordinates and generators. [F11, F12, step 5.1, step 6.1, step 7.1, step 7.2] ∎
