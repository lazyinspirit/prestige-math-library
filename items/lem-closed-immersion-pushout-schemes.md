---
id: lem-closed-immersion-pushout-schemes
kind: lemma
title: "Pushouts of closed immersions exist"
status: published
origin: pipeline
deps:
  - def-closed-immersion-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - def-scheme
  - def-locally-ringed-space
  - def-local-ring
  - def-ringed-space
  - def-sheaf-on-topological-space
  - def-quotient-topology
  - def-direct-image-sheaf
  - def-stalk-of-presheaf
  - def-morphism-locally-ringed-spaces
  - def-principal-distinguished-subset-of-spectrum
  - thm-sections-basic-open-affine-scheme
  - lem-closed-immersion-local-on-target
  - def-fibre-product-schemes-universal-property
  - thm-fibre-products-of-schemes-exist
  - def-axiom-of-choice
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
    - title: "The Stacks Project, More on Morphisms, Situation 37.67.1 (tag 0ECI), Lemma 37.67.2 (tag 0ECJ) and Proposition 37.67.3 (tag 0E25)"
      url: https://stacks.math.columbia.edu/tag/0E25
    - title: "The Stacks Project, More on Morphisms, Lemma 37.14.1 (tag 0ET0), the affine case of the pushout"
      url: https://stacks.math.columbia.edu/tag/0ET0
    - title: "Vakil, The Rising Sea, Sections 17.4.9-17.4.12 (gluing two schemes along isomorphic closed subschemes)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $S$ be a scheme and let $i:Z\to X$ and
$j:Z\to Y$ be closed immersions of $S$-schemes. Then the pushout
$T=X\amalg_Z Y$ of $i$ and $j$ in the category of $S$-schemes exists. Writing
$a:X\to T$ and $b:Y\to T$ for the structure morphisms and
$c=a\,i=b\,j:Z\to T$:

1. $a$ and $b$ are closed immersions with $|T|=|X|\cup|Y|$ and
   $|X|\cap|Y|=|Z|$, and the square
   $Z\to X$, $Z\to Y$, $X\to T$, $Y\to T$ is Cartesian: $Z\cong X\times_T Y$;
2. the structure sheaf is the fibre product
   $\mathcal O_T=a_*\mathcal O_X\times_{c_*\mathcal O_Z}b_*\mathcal O_Y$, so
   that for open $U\subseteq T$,
   $\mathcal O_T(U)=\{(s,t)\in\mathcal O_X(U\cap X)\times\mathcal O_Y(U\cap Y):
   s|_{U\cap Z}=t|_{U\cap Z}\}$, with componentwise restriction maps; in
   particular for $z\in Z$ the stalk is
   $\mathcal O_{T,z}=\mathcal O_{X,z}\times_{\mathcal O_{Z,z}}\mathcal O_{Y,z}$;
3. every point of $Z$ has an open neighbourhood in $T$ of the form
   $\operatorname{Spec}(A\times_C B)$, where $A=\Gamma(U,\mathcal O)$ and
   $B=\Gamma(V,\mathcal O)$ come from affine opens $U\subseteq X$, $V\subseteq Y$
   with $i^{-1}(U)=j^{-1}(V)$ and $C=\Gamma(i^{-1}(U),\mathcal O)$; the points of
   $T$ outside $Z$ lie in the open subschemes $X\setminus Z$ and $Y\setminus Z$;
   consequently $T$ is a scheme over $S$.

## Facts & Assumptions

**Given:** A scheme $S$, closed immersions $i:Z\to X$ and $j:Z\to Y$ of $S$-schemes, and the Axiom of Choice.

[F1] A morphism $i:Z\to X$ is a closed immersion if its underlying map is a homeomorphism onto a closed subset and the morphism $\mathcal O_X\to i_*\mathcal O_Z$ is surjective. ([[def-closed-immersion-schemes]])

[F2] Assume AC. Let $i:Z\to Y$ be a closed immersion. For every affine open $U=\operatorname{Spec}A$ of $Y$ there is a unique ideal $I\subseteq A$ such that over $U$, $i^{-1}(U)\cong\operatorname{Spec}(A/I)$; conversely every quotient map $A\to A/I$ induces a closed immersion; and every base change of a closed immersion is a closed immersion. ([[lem-closed-immersion-affine-quotient-and-base-change]])

[F3] A scheme is a locally ringed space in which every point has an open neighbourhood which, with the restricted structure sheaf, is an affine scheme. ([[def-scheme]])

[F4] A locally ringed space is a ringed space all of whose stalks are local rings. ([[def-locally-ringed-space]])

[F5] A local ring is a nonzero commutative ring with exactly one maximal ideal, and its residue field is the quotient by that ideal. ([[def-local-ring]])

[F6] A ringed space is a topological space together with a sheaf of commutative rings on it. ([[def-ringed-space]])

[F7] A presheaf is a sheaf when for every open cover, local equality of sections forces equality, and compatible local sections glue. ([[def-sheaf-on-topological-space]])

[F8] The quotient topology on a set $Y$ induced by a surjection $q:X\to Y$ consists of the sets $V\subseteq Y$ with $q^{-1}[V]$ open; dually $C\subseteq Y$ is closed exactly when $q^{-1}[C]$ is closed. ([[def-quotient-topology]])

[F9] For a continuous map $f:X\to Y$ and a presheaf $\mathcal F$ on $X$, the direct image presheaf on $Y$ is $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$. ([[def-direct-image-sheaf]])

[F10] The stalk $\mathcal F_x$ of a presheaf at $x$ is the filtered colimit of the $\mathcal F(U)$ over open neighbourhoods $U$ of $x$, described by germs $(U,s)$. ([[def-stalk-of-presheaf]])

[F11] A morphism of locally ringed spaces is a morphism of ringed spaces whose stalk maps are local ring homomorphisms. ([[def-morphism-locally-ringed-spaces]])

[F12] For a commutative ring $R$ and $f\in R$, the principal distinguished subset is $D(f)=\{\mathfrak p\in\operatorname{Spec}(R):f\notin\mathfrak p\}$, the complement of $V((f))$. ([[def-principal-distinguished-subset-of-spectrum]])

[F13] For $f\in A$ one has $\Gamma(D(f),\mathcal O)=A_f$, and for $D(g)\subseteq D(f)$ the restriction is the canonical localization map $A_f\to A_g$. ([[thm-sections-basic-open-affine-scheme]])

[F14] Let $i:Z\to X$ be a morphism of schemes and let $X=\bigcup_j V_j$ be an open cover. Then $i$ is a closed immersion if and only if the restriction $i^{-1}(V_j)\to V_j$ is a closed immersion for every $j$. ([[lem-closed-immersion-local-on-target]])

[F15] A fibre product $P=X\times_S Y$ is characterised by the universal property $\operatorname{Hom}(T,P)\cong\operatorname{Hom}(T,X)\times_{\operatorname{Hom}(T,S)}\operatorname{Hom}(T,Y)$, naturally in the test scheme $T$. ([[def-fibre-product-schemes-universal-property]])

[F16] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F17] Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product $X\times_S Y$. ([[thm-fibre-products-of-schemes-exist]])



## Proof

**Proof technique:** direct: build the pushout first as a ringed space (quotient topology plus glued structure sheaf), verify that its points have affine charts modelled on $\operatorname{Spec}(A\times_C B)$, and then verify the universal property.

1.1 Let $|T|$ be the quotient of the disjoint union $|X|\sqcup|Y|$ by the equivalence relation generated by $i(z)\sim j(z)$ for $z\in|Z|$, equipped with the quotient topology of [F8]. Since $i$ and $j$ are injective homeomorphisms onto closed subsets by [F1], distinct points of $|X|\setminus|Z|$ and $|Y|\setminus|Z|$ are inequivalent and each of $|X|$, $|Y|$ maps homeomorphically onto a closed subset of $|T|$, with $|T|=|X|\cup|Y|$ and $|X|\cap|Y|=|Z|$; moreover a map $|T|\to W$ is continuous if and only if its two restrictions to $|X|$ and $|Y|$ are continuous, because $|T|$ carries the quotient topology. [F1, F8]

1.2 For open $U\subseteq|T|$ set $\mathcal O_T(U)=\{(s,t)\in\mathcal O_X(U\cap X)\times\mathcal O_Y(U\cap Y): s|_{U\cap Z}=t|_{U\cap Z}\}$, with componentwise restriction maps. This presheaf is a sheaf of commutative rings in the sense of [F7]: locality is componentwise, and for compatible local sections $(s_\alpha,t_\alpha)$ the sections $s_\alpha$ and $t_\alpha$ glue to sections $s$ and $t$ of $\mathcal O_X$ and $\mathcal O_Y$ whose restrictions to the open cover of $U\cap Z$ agree, so that $s|_{U\cap Z}=t|_{U\cap Z}$. Hence $(|T|,\mathcal O_T)$ is a ringed space, and by [F9] and [F6] its structure sheaf is the fibre product $a_*\mathcal O_X\times_{c_*\mathcal O_Z}b_*\mathcal O_Y$ of direct images, where $a,b,c$ are induced by the inclusions of $|X|,|Y|,|Z|$ in $|T|$. [F6, F7, F9]

1.3 We compute the stalks in the sense of [F10]. If $t\in|T|$ is not in $|Z|$, then $t$ lies in exactly one of the open subsets $|X|\setminus|Z|$, $|Y|\setminus|Z|$, on which $\mathcal O_T$ restricts to $\mathcal O_X$ resp. $\mathcal O_Y$, so $\mathcal O_{T,t}=\mathcal O_{X,t}$ or $\mathcal O_{T,t}=\mathcal O_{Y,t}$. If $t\in|Z|$, a germ of $\mathcal O_T$ at $t$ is a pair of germs in $\mathcal O_{X,t}\times\mathcal O_{Y,t}$ whose images in $\mathcal O_{Z,t}$ coincide, and the filtered colimit of the fibre products of the $\mathcal O_X(U\cap X)$ and $\mathcal O_Y(U\cap Y)$ over $\mathcal O_Z(U\cap Z)$ is the fibre product of the colimits, so $\mathcal O_{T,t}=\mathcal O_{X,t}\times_{\mathcal O_{Z,t}}\mathcal O_{Y,t}$. The maps $\mathcal O_{X,t}\to\mathcal O_{Z,t}$ and $\mathcal O_{Y,t}\to\mathcal O_{Z,t}$ are surjective because $i,j$ are closed immersions by [F1]; their kernels are proper ideals since the target stalk is a nonzero local ring, hence lie in the respective maximal ideals by [F5]. [F1, F5, F10]

1.4 For every $z\in|Z|$ there exist affine opens $U=\operatorname{Spec}A\subseteq X$ and $V=\operatorname{Spec}B\subseteq Y$ with $i(z)\in U$, $j(z)\in V$ and $i^{-1}(U)=j^{-1}(V)$. Choose affine opens $U_0=\operatorname{Spec}A_0$ of $X$ containing $i(z)$ and $V_0=\operatorname{Spec}B_0$ of $Y$ containing $j(z)$, which exist by [F3]. By [F2] the preimages $i^{-1}(U_0)=\operatorname{Spec}(A_0/J_0)$ and $j^{-1}(V_0)=\operatorname{Spec}(B_0/J_0')$ are affine open subschemes of $Z$ containing $z$, and $z$ lies in the open subset $i^{-1}(U_0)\cap j^{-1}(V_0)$ of $Z$. Since distinguished subsets form a basis of the topology of an affine spectrum by [F12], choose $h\in A_0/J_0$ with $z\in D(h)\subseteq i^{-1}(U_0)\cap j^{-1}(V_0)$, and lift $h$ to some $u\in A_0$, possible because $A_0\to A_0/J_0$ is surjective by [F2]. Then $U=D(u)\subseteq X$ is an affine open with $i(z)\in U$ and $i^{-1}(U)=D(h)$, because inside the closed subscheme $\operatorname{Spec}(A_0/J_0)$ of the affine scheme $U_0$ the trace of $D(u)$ is $D(u\bmod J_0)=D(h)$; in particular $i^{-1}(U)\subseteq j^{-1}(V_0)$. Again by [F12], applied to the affine scheme $j^{-1}(V_0)=\operatorname{Spec}(B_0/J_0')$, choose $g\in B_0/J_0'$ with $z\in D(g)\subseteq i^{-1}(U)$, and lift $g$ to some $v\in B_0$ by [F2]; then $V=D(v)\subseteq Y$ is affine with $j(z)\in V$ and $j^{-1}(V)=D(g)\subseteq i^{-1}(U)$, the trace of $D(v)$ on $\operatorname{Spec}(B_0/J_0')$ being $D(g)$. Finally $i^{-1}(U)$ is an open subscheme of $j^{-1}(V_0)$ and of $U$, so $i^{-1}(U)\hookrightarrow j^{-1}(V_0)\to V_0$ is a morphism of affines; by [F2] applied to the closed immersion $i:Z\to X$ and the affine open $U$ we have $i^{-1}(U)=\operatorname{Spec}(A/I)$ with $A=\Gamma(U,\mathcal O)=A_u$ and $I=\ker(A\to C)$, $C=\Gamma(i^{-1}(U),\mathcal O)$, the restriction $A\to C$ being surjective. The section $g$ restricts to an element $\bar g\in C=A/I$, and $\bar g$ lifts to some $f\in A$ by surjectivity. The trace of $D(f)$ on the closed subscheme $i^{-1}(U)=\operatorname{Spec}(A/I)$ of $U$ is $D(f\bmod I)=D(\bar g)$, and $D(\bar g)=D(g)$ as open subsets of $i^{-1}(U)$, since $\bar g$ is the restriction of the function $g$ and principal opens restrict to traces of principal opens. Hence $U'=D(f)\subseteq X$ and $V=D(v)\subseteq Y$ are affine opens with $i(z)\in U'$, $j(z)\in V$ and $i^{-1}(U')=D(\bar g)=D(g)=j^{-1}(V)$, as required. [F2, F3, F12]

2.1 The ring $R_t=\mathcal O_{X,t}\times_{\mathcal O_{Z,t}}\mathcal O_{Y,t}$ of step 1.3 is local with maximal ideal $\mathfrak m_{X,t}\times_{\mathcal O_{Z,t}}\mathfrak m_{Y,t}=: \mathfrak m$ and residue field the common residue field $k(t)$: an element $(s,u)$ with $s\notin\mathfrak m_{X,t}$ is a unit, because then the image of $s$ in $\mathcal O_{Z,t}$ is a unit and $u$ has the same image as $s$ modulo the kernel of $\mathcal O_{Y,t}\to\mathcal O_{Z,t}$, which lies in $\mathfrak m_{Y,t}$, so that $u$ is a unit as well; the ideal $\mathfrak m$ is proper because $(1,1)\notin\mathfrak m$, the ring $R_t$ is nonzero because $1=(1,1)\ne0$, and every element outside $\mathfrak m$ has a component outside $\mathfrak m_{X,t}$ or $\mathfrak m_{Y,t}$ and is therefore invertible, so that $\mathfrak m$ is the unique maximal ideal of the local ring $R_t$ by [F5]. Hence every stalk of $\mathcal O_T$ is a local ring, $T$ is a locally ringed space by [F4], and $a:X\to T$, $b:Y\to T$, $c:Z\to T$ are morphisms of locally ringed spaces by [F11]. [F1, F4, F5, F11, step 1.3]

2.2 In the situation of step 1.4 write $C$ for the ring of the common closed subscheme $U\cap Z=V\cap Z$, so that there are surjections $A\to C$ and $B\to C$ by [F2], and put $R=A\times_C B$, the fibre product of rings with coordinatewise operations. Let $W\subseteq T$ be the image of $|U|\sqcup|V|$. Every prime of $R$ contains $\ker(R\to A)=0\times\ker(B\to C)$ or $\ker(R\to B)=\ker(A\to C)\times0$, since the product of an element of the first kernel with an element of the second kernel is zero; hence every prime of $R$ is the preimage of a prime of $A$ or of $B$; the two closed images intersect exactly in $\operatorname{Spec}C$. Since these closed images cover $\operatorname{Spec}R$, they give the quotient topology, so $|\operatorname{Spec}R|=|U|\sqcup_{|U\cap Z|}|V|$ as a topological space, which is the topology of $W$ from step 1.1. Moreover $R_{(a,b)}\cong A_a\times_{C_{\bar a}}B_b$ for $(a,b)\in R$, with the restrictions of $a$ and $b$ agreeing in $C$; under this identification the sections of $\mathcal O_T$ over the basic open $D((a,b))$ of $W$ are exactly $\Gamma(D(a),\mathcal O_U)\times_{\Gamma(D(\bar a),\mathcal O_Z)}\Gamma(D(b),\mathcal O_V)$, which by [F13] equals $A_a\times_{C_{\bar a}}B_b$. As the distinguished opens form a basis, the identity on $|\operatorname{Spec}R|=|W|$ extends to an isomorphism of ringed spaces $W\cong\operatorname{Spec}R$, so each point of $|Z|$ has an affine open neighbourhood in $T$. [F2, F12, F13, step 1.2, step 1.4]

3.1 Points of $T$ outside $|Z|$ lie in the open subschemes $X\setminus Z$ and $Y\setminus Z$, which are covered by affine opens of $X$ and of $Y$ disjoint from $Z$; together with step 2.2 this shows that every point of $T$ has an affine open neighbourhood, so $T$ is a scheme by [F3]; moreover $T$ is a scheme over $S$: writing $f:X\to S$ and $g:Y\to S$ for the given structure morphisms, $fi=gj$, so step 1.1 gives a continuous map $h:|T|\to|S|$ with $ha=f$ and $hb=g$, the sheaf maps $\mathcal O_S\to(ha)_*\mathcal O_X$ and $\mathcal O_S\to(hb)_*\mathcal O_Y$ induced by $f$ and $g$ agree on $(hc)_*\mathcal O_Z$ because $fi=gj$ and hence define a map $\mathcal O_S\to h_*\mathcal O_T$ by the fibre product description of step 1.2, which is local at every point by step 2.1; thus $h$ is a morphism of locally ringed spaces over which $a$ and $b$ are morphisms. [F3, step 1.1, step 1.2, step 1.4, step 2.1, step 2.2]

3.2 The map $a:X\to T$ is a closed immersion. On an affine chart $W=\operatorname{Spec}(A\times_C B)$ of step 2.2 the preimage of $W$ in $X$ is $U=\operatorname{Spec}A$, and the induced ring map $A\times_C B\to A$ is the first projection, which is surjective: for $a\in A$ choose $b\in B$ lifting $\bar a\in C$, which is possible since $B\to C$ is surjective, and then $(a,b)\in A\times_C B$ maps to $a$. A surjective ring map induces a closed immersion of affine schemes by [F2]; the charts of step 2.2 together with the open subschemes $X\setminus Z$ and $Y\setminus Z$ cover $T$, so [F14] gives that $a$ is a closed immersion; the same argument applies to $b$. Since $|X|\cap|Y|=|Z|$ by step 1.1 and $A\otimes_{R}B\cong C$ for $R=A\times_CB$ with both maps to $C$ surjective, the square is Cartesian in each chart; fibre products of schemes exist by [F17], the Cartesian property is local on $T$, and the charts of step 2.2 together with the open subschemes $X\setminus Z$ and $Y\setminus Z$ cover $T$ by step 1.1, so the universal property of [F15] gives $Z\cong X\times_T Y$ over $T$. [F1, F2, F14, F15, F17, step 1.1, step 2.2]

4.1 $T$ is the pushout of $X$ and $Y$ over $Z$ in locally ringed spaces, hence in schemes and in $S$-schemes. Indeed, let $f:X\to W$ and $g:Y\to W$ be $S$-morphisms with $f i=g j$. Their underlying maps agree on $|Z|$ and hence induce a unique continuous map $h:|T|\to|W|$ by the quotient property of step 1.1; the maps $f^\sharp:\mathcal O_W\to (ha)_*\mathcal O_X$ and $g^\sharp:\mathcal O_W\to(hb)_*\mathcal O_Y$ agree on the direct image of $\mathcal O_Z$ because $fi=gj$, hence define a map of sheaves $\mathcal O_W\to h_*\mathcal O_T=h_*a_*\mathcal O_X\times_{h_*c_*\mathcal O_Z}h_*b_*\mathcal O_Y$ by step 1.2, and this map is local at every point by step 2.1, using that the stalk maps of $f$ and $g$ are local. Thus $(h,h^\sharp)$ is a morphism of locally ringed spaces, and it is the unique one compatible with $f$ and $g$ because $|T|$ carries the quotient topology and $\mathcal O_T$ injects into the product of the two direct images by step 1.2; if $W$ and the morphisms $f,g$ are over $S$, then the composite $T\to W\to S$ agrees with the structure morphism $T\to S$ of step 3.1, because both agree after composing with $a$ and with $b$ and $|T|=|X|\cup|Y|$, so the morphism is one of $S$-schemes. [F1, F11, F15, step 1.1, step 1.2, step 2.1, step 3.1]

5.1 The Axiom of Choice [F16] is assumed in the statement and enters exactly through [F2], which assumes AC: it is used in step 1.4 for the affine form of a closed immersion and in steps 2.2 and 3.2 for the chart computations. All other arguments are choice-free: the charts and germs are exhibited from the given data point by point, without selecting from any family, and no other cited item uses a choice principle. The degenerate cases are included: if $Z=\varnothing$ then $T$ is the disjoint union $X\sqcup Y$, which is the empty gluing case of the construction; if one of the closed immersions is an isomorphism, the pushout is the other scheme, which the chart computations reproduce; and the constructions are empty-ready, since the empty affine scheme corresponds to the zero ring by [F2]. ∎ [F2, F16, step 1.4, step 2.2, step 3.2]

## Remark

The pushout need not be preserved by a nonflat base change. Let $D=k[\varepsilon]/(\varepsilon^2)$ and take $S=X=Y=\operatorname{Spec}D$, $Z=\operatorname{Spec}k$, with both maps $Z\to X,Y$ induced by $D\to k$. The pushout is $T=\operatorname{Spec}(D\times_k D)$. After base change along $\operatorname{Spec}k\to S$, its coordinate ring is $(D\times_k D)\otimes_D k\cong k[\delta]/(\delta^2)$, whereas the pushout of the three base-changed schemes is $\operatorname{Spec}k$.
