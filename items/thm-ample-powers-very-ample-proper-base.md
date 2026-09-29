---
id: thm-ample-powers-very-ample-proper-base
kind: theorem
title: "High powers of an ample line bundle embed a proper scheme"
status: draft
origin: pipeline
deps:
  - thm-serre-criterion-ampleness
  - thm-line-bundle-sections-define-projective-map
  - def-very-ample-invertible-sheaf-relative
  - lem-proper-source-to-separated-target-proper
  - thm-proper-morphism-closed-image
  - lem-immersion-with-closed-image
  - def-locally-finite-type-and-finite-type-morphism
  - def-axiom-of-choice
  - lem-extend-sections-from-nonvanishing-open
  - thm-segre-line-bundle-external-tensor
  - def-ample-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - thm-noetherian-ring-has-noetherian-spectrum
  - def-scheme
  - def-quasi-compact-and-quasi-separated-scheme
  - def-quasi-compact-and-quasi-separated-morphism
  - lem-base-change-quasi-compact-morphisms
  - cor-base-change-finite-type-and-products
  - lem-finite-type-local-on-source-and-target
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-quasi-coherent-module-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - def-invertible-sheaf
  - def-globally-generated-sheaf
  - lem-section-nonvanishing-affine-intersection
  - lem-distinguished-open-refinement-at-a-point
  - thm-sections-basic-open-affine-scheme
  - def-relative-projective-space-standard-charts
  - lem-closed-immersion-local-on-target
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-base-change-open-closed-immersions
  - def-locally-closed-immersion
  - def-closed-immersion-schemes
  - def-separated-morphism-schemes
  - def-diagonal-morphism-scheme
  - lem-graph-as-pullback-diagonal
  - thm-projective-space-proper-over-base
  - def-proper-morphism
  - lem-fibre-product-open-restriction
  - thm-affine-fibre-product-tensor-ring
  - thm-closed-subspace-of-a-compact-space-is-compact
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.38 and 29.40, Lemma 29.40.3 (Tag 01VS)"
      url: https://stacks.math.columbia.edu/tag/01VS
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the projective-space and sheaf
constructions ([[def-axiom-of-choice]]). Let $S$ be a Noetherian scheme
([[def-locally-noetherian-and-noetherian-scheme]]), let $f:X\to S$ be a proper
morphism of finite type ([[def-proper-morphism]]) and let $L$ be an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]) that is ample on $X$
([[def-ample-invertible-sheaf]]). Write
$$A=\Gamma_*(X,L)=\bigoplus_{n\ge0}\Gamma(X,L^{\otimes n}),\qquad A_+=\bigoplus_{n\ge1}\Gamma(X,L^{\otimes n}),$$
and for $a\in\Gamma(X,L^{\otimes n})$ with $n\ge1$ let
$X_a=\{\,x\in X:\text{the image of }a\text{ in }L^{\otimes n}\otimes_{\mathcal O_X}\kappa(x)\text{ is nonzero}\,\}$
be its nonvanishing locus.

Then there is an integer $d_0\ge1$ such that for every $d\ge d_0$ the sheaf
$L^{\otimes d}$ is **closed H-very ample relative to $S$**
([[def-very-ample-invertible-sheaf-relative]]): there are an integer $N_d\ge0$
and a finite family of global sections of $L^{\otimes d}$ whose associated
$S$-morphism $X\to\mathbb P^{N_d}_S$ is a closed immersion with
$\mathcal O(1)$ pulling back to $L^{\otimes d}$.

The ampleness used is ampleness of $L$ on $X$ itself; $f$-ampleness over a
non-affine base is not substituted. Every scheme in sight may be empty: if
$X=\varnothing$, then $L$ is ample vacuously and the empty morphism shows that
every $L^{\otimes d}$ is closed H-very ample relative to $S$, so that in this
case $d_0=1$ works.

## Facts & Assumptions

**Given:** A Noetherian scheme $S$, a proper finite-type morphism $f:X\to S$, an ample invertible sheaf $L$ on $X$, the graded ring $A=\Gamma_*(X,L)$ with its positive part $A_+$, and the Axiom of Choice as inherited.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $L$ is ample exactly when $X$ is quasi-compact and every point $x\in X$ lies in some $X_s$ with $s\in\Gamma(X,L^{\otimes n})$, $n\ge1$, and $X_s$ affine; for $s\in\Gamma(X,L)$ and an affine open $U\subseteq X$ the intersection $U\cap X_s$ is affine, and $X_s\cap X_t=X_{s\otimes t}$. ([[def-ample-invertible-sheaf]], [[lem-section-nonvanishing-affine-intersection]])

[F2] A scheme is locally Noetherian when it has an affine open cover by spectra of Noetherian rings, and Noetherian when it is locally Noetherian and quasi-compact; a morphism is of finite type when it is locally of finite type and quasi-compact, and then the inverse image of every quasi-compact open is quasi-compact; base change preserves finite type; local finite type is affine-local on source and target, so for an affine morphism it is tested by the corresponding ring map being of finite type; affine opens form a basis of every scheme. ([[def-locally-noetherian-and-noetherian-scheme]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[lem-base-change-quasi-compact-morphisms]], [[cor-base-change-finite-type-and-products]], [[lem-finite-type-local-on-source-and-target]], [[def-scheme]])

[F3] Every algebra of finite type over a Noetherian commutative ring is a Noetherian ring. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F4] Let $X$ be a Noetherian scheme and $L$ an invertible $\mathcal O_X$-module. Then $L$ is ample if and only if for every coherent $\mathcal O_X$-module $F$ the twist $F\otimes L^{\otimes n}$ is globally generated for all sufficiently large $n$; on a locally Noetherian scheme the coherent sheaves are exactly the quasi-coherent sheaves of finite type, so the condition may equivalently be tested on quasi-coherent sheaves of finite type. The structure sheaf $\mathcal O_X$ is invertible, hence quasi-coherent, and generated on every affine chart by its unit section, so it is quasi-coherent of finite type. ([[thm-serre-criterion-ampleness]], [[def-quasi-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-invertible-sheaf]])

[F5] Let $X$ be quasi-compact and quasi-separated, $F$ quasi-coherent, $L$ invertible and $s\in\Gamma(X,L^{\otimes d})$ with $d>0$. Then every section of $F$ over $X_s$ extends after multiplying by a power of $s$: there are $r\ge0$ and $a\in\Gamma(X,F\otimes L^{\otimes dr})$ whose image under the canonical map to $\Gamma(X_s,F)$ is the given section. ([[lem-extend-sections-from-nonvanishing-open]])

[F6] Let $R$ be a commutative ring, $U\subseteq\operatorname{Spec}R$ open and $\mathfrak p\in U$. Then there is $f\in R$ with $\mathfrak p\in D(f)\subseteq U$, and $D(f)$ is the affine scheme $\operatorname{Spec}R_f$. ([[lem-distinguished-open-refinement-at-a-point]], [[thm-sections-basic-open-affine-scheme]])

[F7] Generating sections of an invertible sheaf determine a unique morphism to projective space: for $s_0,\dots,s_n\in\Gamma(X,L)$ generating $L$ on an $S$-scheme $X$ there is a unique $S$-morphism $\varphi:X\to\mathbb P^n_S$ with $\varphi^*\mathcal O(1)\cong L$ carrying the coordinate sections to the $s_i$, and $\varphi^{-1}(D_+(x_i))=X_{s_i}$ with $x^{(i)}_j\circ\varphi=s_j/s_i$ on $X_{s_i}$. ([[thm-line-bundle-sections-define-projective-map]])

[F8] Relative projective space $\mathbb P^n_S$ has standard charts $U_i$; over an affine base $S=\operatorname{Spec}R$ the chart $U_i$ is $\operatorname{Spec}R[x^{(i)}_\ell:\ell\ne i]$, and its twisting sheaf $\mathcal O(1)$ is glued from frames $e_i$ with $e_j=x^{(i)}_je_i$ on overlaps, the coordinate section $x_j$ restricting to $x^{(i)}_je_i$ on $U_i$. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]])

[F9] Closed immersions are local on the target; every base change of a closed immersion is a closed immersion; over an affine target a closed immersion is, up to unique isomorphism, a quotient map $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$; an isomorphism of schemes is a closed immersion. ([[lem-closed-immersion-local-on-target]], [[lem-closed-immersion-affine-quotient-and-base-change]], [[def-closed-immersion-schemes]])

[F10] A morphism is an immersion when it factors as a closed immersion into an open subscheme followed by the inclusion of that open subscheme; arbitrary base changes of immersions are immersions. ([[def-locally-closed-immersion]], [[lem-base-change-open-closed-immersions]])

[F11] A morphism is separated exactly when its diagonal is a closed immersion; for an $S$-morphism $u:X\to Y$ the graph $\Gamma_u=(id_X,u)$ is the base change of the diagonal $\Delta_{Y/S}$ along the morphism $H=(u\,pr_X,pr_Y)$, so a graph into a separated $S$-scheme is a closed immersion; a proper morphism is separated and of finite type. ([[def-separated-morphism-schemes]], [[def-diagonal-morphism-scheme]], [[lem-graph-as-pullback-diagonal]], [[def-proper-morphism]])

[F12] Assume AC. For every scheme $S$ and $n\ge0$ the projection $\mathbb P^n_S\to S$ is proper, hence separated; for an $S$-morphism $h:X\to Y$ with $X\to S$ proper and $Y\to S$ separated the morphism $h$ is proper; a proper morphism is a closed map; an immersion with closed image is a closed immersion. ([[thm-projective-space-proper-over-base]], [[lem-proper-source-to-separated-target-proper]], [[thm-proper-morphism-closed-image]], [[lem-immersion-with-closed-image]])

[F13] Let $P=\mathbb P^m_S\times_S\mathbb P^n_S$ with $N=(m+1)(n+1)-1$ and $L=pr_1^*\mathcal O(1)\otimes pr_2^*\mathcal O(1)$. The product coordinate sections generate $L$ and determine a closed immersion $\sigma:P\to\mathbb P^N_S$, the Segre embedding, with $\sigma^*\mathcal O(1)\cong L$, carrying the coordinate section $z_{ab}$ to $pr_1^*x_a\otimes pr_2^*y_b$. ([[thm-segre-line-bundle-external-tensor]])

[F14] An invertible sheaf on a scheme $X$ is globally generated exactly when every point admits a global section whose value there is nonzero, and on a quasi-compact scheme this is witnessed by finitely many global sections; an invertible sheaf is locally free of rank one, and tensor products of globally generated invertible sheaves are globally generated. ([[def-globally-generated-sheaf]], [[def-invertible-sheaf]])

[F15] A scheme is quasi-compact when its underlying space is quasi-compact; it is quasi-separated when the intersection of any two affine open subschemes is quasi-compact. ([[def-quasi-compact-and-quasi-separated-scheme]])

[F16] Assume AC [A1]. The spectrum of a Noetherian ring is a Noetherian topological space. ([[thm-noetherian-ring-has-noetherian-spectrum]])

[F17] Assume AC [A1]. Every open subset $U$ of a Noetherian topological space $X$ is compact. If an open cover $(P_a)_{a\in A}$ of $U$ had no finite subcover, recursively choose $x_n\in U\setminus(P_{a_1}\cup\cdots\cup P_{a_n})$ and a member $P_{a_{n+1}}$ containing $x_n$. Since $U$ is open in $X$, every $P_a$ is open in $X$, and the finite unions $P_{a_1}\cup\cdots\cup P_{a_n}$ form a strictly ascending chain of open subsets, contradicting Noetherianity.

## Proof

**Proof technique:**direct: the source is shown to be Noetherian, the affine positive-power section opens are shown to form a basis by clearing denominators, Serre's criterion supplies global generation of all large twists, finitely many affine section charts mapping into affine base charts are used to build an immersion $j$ with $j^*\mathcal O(1)=L^{\otimes N}$ by surjective chart ring maps, products with generating sections of $L^{\otimes(d-N)}$ and the Segre embedding produce an immersion with $L^{\otimes d}$, and properness makes it closed.

1.1 $X$ is quasi-compact: $S$ is Noetherian, hence quasi-compact, and $f$ is of finite type, hence quasi-compact, so $X=f^{-1}(S)$ is quasi-compact by the definition of a quasi-compact morphism. [F2]
1.2 $X$ is locally Noetherian: choose a finite affine open cover $\operatorname{Spec}A_\gamma$ of the Noetherian scheme $S$, with every $A_\gamma$ Noetherian [F2]. Each inverse image $X_\gamma=f^{-1}(\operatorname{Spec}A_\gamma)$ is of finite type over $\operatorname{Spec}A_\gamma$ and hence quasi-compact [F2], so choose a finite affine open cover $X_\gamma=\bigcup_i\operatorname{Spec}B_{\gamma i}$. For each chart the ring map $A_\gamma\to B_{\gamma i}$ is of finite type by the affine-local criterion [F2], and $B_{\gamma i}$ is Noetherian by [F3]. These finitely many Noetherian affine opens cover $X$, so $X$ is locally Noetherian. [F2, F3]
1.3 Derived closure facts. (a) A composite of closed immersions is a closed immersion: closed immersions are local on the target, and over an affine target a closed immersion is up to unique isomorphism a quotient map $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ [F9]; composing the quotients $A\to A/I\to(A/I)/J\cong A/J'$ exhibits the composite again as a quotient map, and locality on the target gives the general case. (b) If $\iota$ is an immersion and $c$ is a closed immersion with source the source of $\iota$, then $\iota\circ c$ is an immersion: writing $\iota=u\circ d$ with $d$ a closed immersion and $u$ an open immersion [F10], one has $\iota\circ c=u\circ(d\circ c)$ with $d\circ c$ a closed immersion by (a). [F9, F10]
2.1 $X$ is quasi-separated: let $U,V\subseteq X$ be affine open. By step 1.2, $X$ has a finite open cover by spectra of Noetherian rings, each a Noetherian topological space by [F16]. A finite union of Noetherian open subspaces is Noetherian: an ascending chain of opens stabilizes on each member of the finite cover and therefore stabilizes on their union. Thus the underlying space of $X$ is Noetherian, and by [F17] its open subset $U\cap V$ is quasi-compact. As this holds for every pair of affine opens, [F15] makes $X$ quasi-separated. [A1, F15, F16, F17, step 1.2]
2.2 $X$ is Noetherian: it is locally Noetherian by step 1.2 and quasi-compact by step 1.1. [F2, step 1.1, step 1.2]
3.1 The affine positive-degree nonvanishing loci form a basis. Let $U\subseteq X$ be open and $x\in U$. By [F1] there are $n_0\ge1$ and $s_0\in\Gamma(X,L^{\otimes n_0})$ with $x\in X_{s_0}$ and $X_{s_0}$ affine, say $X_{s_0}=\operatorname{Spec}C$. Since $U\cap X_{s_0}$ is an open neighbourhood of $x$ in that affine scheme, [F6] gives $h\in C$ with $x\in D(h)\subseteq U\cap X_{s_0}$, and $D(h)$ is affine. By step 1.1 $X$ is quasi-compact and by step 2.1 quasi-separated, so [F5] applied to the quasi-coherent sheaf $\mathcal O_X$ ([F4]), the invertible sheaf $L$, the integer $n_0>0$, the section $s_0$ and the section $h\in\Gamma(X_{s_0},\mathcal O_X)$ yields $r\ge0$ and $a\in\Gamma(X,L^{\otimes n_0r})$ with $a\otimes s_0^{-r}=h$ on $X_{s_0}$; replacing $r$ by $r+1$ and $a$ by $a\otimes s_0$ if necessary we may assume $r\ge1$. Then on $X_{s_0}$ the section $a$ restricts to $h\,s_0^{r}$, so $X_a\cap X_{s_0}=D(h)$, and the product $a\otimes s_0\in\Gamma(X,L^{\otimes n_0(r+1)})$ satisfies $X_{a\otimes s_0}=X_a\cap X_{s_0}=D(h)$ [F1]. This locus contains $x$, lies in $U$, and is affine, so the sets $X_a$ with $a\in A_+$ form a basis for the topology of $X$. [F1, F4, F5, F6, step 1.1, step 2.1]
3.2 Serre's bound. The structure sheaf $\mathcal O_X$ is invertible, hence quasi-coherent [F4], and it is of finite type because on every affine chart it is generated by its unit section; since $X$ is Noetherian by step 2.2 and $L$ is ample, the criterion [F4] provides an integer $d_1\ge1$ such that $\mathcal O_X\otimes L^{\otimes d}\cong L^{\otimes d}$ is globally generated for every $d\ge d_1$. [F4, step 2.2]
4.1 The affine section-open cover adapted to the base. Assume $X\ne\varnothing$; the empty case is handled separately in the conclusion. Consider the family of all pairs $(V,a)$ where $V\subseteq S$ is affine open and $a\in\Gamma(X,L^{\otimes n})$ is homogeneous of some degree $n\ge1$, with $X_a$ affine and $X_a\subseteq f^{-1}(V)$. This family covers $X$: for each point $x$ there exists an affine open $V\subseteq S$ containing $f(x)$ by [F2], and step 3.1 applied to $f^{-1}(V)$ gives such an $a$ with $x\in X_a$. Quasi-compactness of $X$ from step 1.1 supplies finitely many pairs $(V_i,a_i)$, indexed by $i=0,\dots,n$, whose nonvanishing loci cover $X$. Put $d_i=\deg(a_i)\ge1$. This selects only finitely many witnesses; it does not choose a pair simultaneously for every point of $X$. [F1, F2, step 1.1, step 3.1]
4.2 Global generation in the remaining degrees, uniformly in the future choice of $N$. For every integer $N\ge1$ and every $d\ge d_1+N$, one has $d-N\ge d_1$, so $L^{\otimes(d-N)}$ is globally generated by step 3.2; since $X$ is quasi-compact by step 1.1 and the sheaf is invertible, finitely many sections $s''_1,\dots,s''_t\in\Gamma(X,L^{\otimes(d-N)})$ witness this global generation [F14]. [F14, step 1.1, step 3.2]
5.1 The chart rings are finitely generated. For each $i$ the morphism $X_{a_i}\to V_i$ is locally of finite type, and both schemes are affine, so the ring map $\mathcal O_S(V_i)\to\mathcal O_X(X_{a_i})$ is of finite type [F2]; choose finitely many elements $f_{ij}\in\mathcal O_X(X_{a_i})$, $j=1,\dots,n_i$, generating $\mathcal O_X(X_{a_i})$ as an $\mathcal O_S(V_i)$-algebra. [F2, step 4.1]
5.2 The second morphism for any pair $(N,d)$ from step 4.2. By [F7] the generating sections $s''_1,\dots,s''_t$ determine an $S$-morphism $j':X\to\mathbb P^{t-1}_S$ with $j'^*\mathcal O(1)\cong L^{\otimes(d-N)}$. [F7, step 4.2]
6.1 Clearing denominators. For each $i,j$ the section $f_{ij}\in\Gamma(X_{a_i},\mathcal O_X)$ lies over the nonvanishing locus of $a_i$, so [F5] applied to $X$ (quasi-compact and quasi-separated by steps 1.1 and 2.1), the quasi-coherent sheaf $\mathcal O_X$, the invertible sheaf $L$, $d_i>0$ and the section $a_i$ gives $r_{ij}\ge0$ and $a_{ij}\in\Gamma(X,L^{\otimes d_ir_{ij}})$ with $f_{ij}=a_{ij}/a_i^{r_{ij}}$ on $X_{a_i}$; replacing $r_{ij}$ by $r_{ij}+1$ and $a_{ij}$ by $a_{ij}\otimes a_i$ if necessary we may assume $r_{ij}\ge1$, so that $a_{ij}\in A_+$ is homogeneous of degree $d_{ij}=d_ir_{ij}$. [F5, step 1.1, step 2.1, step 5.1]
7.1 The common degree and the generating family. Choose $N\ge1$ a common multiple of all degrees $d_i$ and $d_{ij}$ so large that $N/d_i\ge r_{ij}$ for all $i,j$, and put $b_i=a_i^{N/d_i}\in A_N$ and $b_{ij}=a_{ij}\,a_i^{N/d_i-r_{ij}}\in A_N$. On $X_{a_i}$ one has $b_i=a_i^{N/d_i}$ and $b_{ij}=f_{ij}b_i$ by step 6.1, so the section $b_i$ is nonvanishing exactly on $X_{a_i}$; since the $X_{a_i}$ cover $X$ by step 4.1, at every point of $X$ some member of the finite family $\{b_i,b_{ij}\}$ has nonzero value. Hence this family generates the invertible sheaf $L^{\otimes N}$ [F14]. [F14, step 4.1, step 6.1]
8.1 The morphism $j$. By [F7] the generating family $\{b_i,b_{ij}\}$ of $L^{\otimes N}$ determines a unique $S$-morphism $j:X\to\mathbb P^m_S$, where $m=n+\sum_in_i$, with $j^*\mathcal O(1)\cong L^{\otimes N}$; naming the coordinates $T_0,\dots,T_n,T_{ij}$ one has $j^{-1}(D_+(T_i))=X_{b_i}=X_{a_i}$ and $(T_\alpha/T_i)\circ j=b_\alpha/b_i$ on $X_{a_i}$ for every coordinate index $\alpha\ne i$. [F7, step 7.1]
8.2 The product morphism. Let $\{s'_\alpha\}$ denote the family $\{b_i,b_{ij}\}$ of step 7.1; the products $s'_\alpha s''_\beta\in\Gamma(X,L^{\otimes d})$ generate $L^{\otimes d}$, because at every point some $s'_\alpha$ and some $s''_\beta$ are nonvanishing there and the tensor product of sections is nonvanishing at that point [F14]. Hence by [F7] they determine an $S$-morphism $i:X\to\mathbb P^{k-1}_S$, where $k-1=(m+1)t-1$, with $i^*\mathcal O(1)\cong L^{\otimes d}$. [F7, F14, step 7.1, step 4.2]
9.1 Chartwise closed immersions. Fix $i$ and write $V_i=\operatorname{Spec}R_i$ and $X_{a_i}=\operatorname{Spec}B_i$. The chart $D_+(T_i)\cap\mathbb P^m_{V_i}$ is the affine scheme $\operatorname{Spec}R_i[T_\alpha/T_i:\alpha\ne i]$ [F8], and by step 8.1 the restriction of $j$ to $X_{a_i}$ corresponds to the $R_i$-algebra map sending $T_{ij}/T_i$ to $f_{ij}$ and $T_{i'}/T_i$ to $b_{i'}/b_i$. This map is surjective because the $f_{ij}$ generate $B_i$ over $R_i$ by step 5.1; hence the restriction $X_{a_i}\to D_+(T_i)\cap\mathbb P^m_{V_i}$ is a closed immersion [F9]. [F8, F9, step 5.1, step 8.1]
9.2 The composite with the Segre embedding. By [F13] the Segre embedding $\sigma:\mathbb P^m_S\times_S\mathbb P^{t-1}_S\to\mathbb P^{k-1}_S$ is a closed immersion with $\sigma^*\mathcal O(1)\cong pr_1^*\mathcal O(1)\otimes pr_2^*\mathcal O(1)$, and it carries the coordinate section $z_{\alpha\beta}$ to $pr_1^*x_\alpha\otimes pr_2^*y_\beta$. Therefore the composite $\sigma\circ(j,j')$ is an $S$-morphism with pullback $j^*\mathcal O(1)\otimes j'^*\mathcal O(1)\cong L^{\otimes N}\otimes L^{\otimes(d-N)}\cong L^{\otimes d}$ of $\mathcal O(1)$, and it pulls the coordinate section $z_{\alpha\beta}$ back to $s'_\alpha s''_\beta$; since by [F7] a morphism to projective space with pullback $L^{\otimes d}$ and prescribed coordinate pullbacks is unique, $i=\sigma\circ(j,j')$. [F7, F13, step 8.1, step 5.2, step 8.2]
10.1 The morphism $j$ is an immersion. Let $W=\bigcup_i\bigl(D_+(T_i)\cap\mathbb P^m_{V_i}\bigr)$, an open subscheme of $\mathbb P^m_S$ containing $j(X)$ by step 8.1. The opens $j^{-1}(D_+(T_i)\cap\mathbb P^m_{V_i})=X_{a_i}$ cover $X$ and each restriction $X_{a_i}\to D_+(T_i)\cap\mathbb P^m_{V_i}$ is a closed immersion by step 9.1, so locality of closed immersions on the target [F9] makes $j:X\to W$ a closed immersion; composing with the open immersion $W\hookrightarrow\mathbb P^m_S$ exhibits $j:X\to\mathbb P^m_S$ as an immersion [F10]. [F9, F10, step 8.1, step 9.1]
11.1 $(j,j')$ is an immersion. The graph $\Gamma_{j'}=(\operatorname{id}_X,j'):X\to X\times_S\mathbb P^{t-1}_S$ is the base change of the diagonal $\Delta_{\mathbb P^{t-1}_S/S}$ [F11]; the projection $\mathbb P^{t-1}_S\to S$ is proper, hence separated [F12], so that diagonal is a closed immersion and the graph is a closed immersion as a base change of one [F9]. The morphism $j\times\operatorname{id}:X\times_S\mathbb P^{t-1}_S\to\mathbb P^m_S\times_S\mathbb P^{t-1}_S$ is the base change of the immersion $j$ of step 10.1, hence an immersion [F10]. Since $(j,j')=(j\times\operatorname{id})\circ\Gamma_{j'}$, step 1.3(b) shows that $(j,j')$ is an immersion. [F9, F10, F11, F12, step 10.1, step 1.3]
12.1 The morphism $\sigma\circ u$ is an immersion. By step 11.1 and [F10] write $(j,j')=u\circ c$ with $c:X\to X'$ a closed immersion into an open subscheme $u:X'\hookrightarrow\mathbb P^m_S\times_S\mathbb P^{t-1}_S$. Put $\Omega=\mathbb P^{k-1}_S\setminus\bigl(\sigma(\mathbb P^m_S\times_S\mathbb P^{t-1}_S)\setminus\sigma(X')\bigr)$, an open subscheme of $\mathbb P^{k-1}_S$: its complement is closed because $\sigma$ has closed image [F12] and $\sigma(X')$ is open in that image, and by construction $\Omega\cap\sigma(\mathbb P^m_S\times_S\mathbb P^{t-1}_S)=\sigma(X')$. The restriction $\sigma^{-1}(\Omega)\to\Omega$ of $\sigma$ is the base change of the closed immersion $\sigma$ along the open immersion $\Omega\hookrightarrow\mathbb P^{k-1}_S$, hence a closed immersion [F9], and $\sigma^{-1}(\Omega)=X'$ by step 11.1; therefore $X'\to\Omega$ is a closed immersion and composing with the open immersion $\Omega\hookrightarrow\mathbb P^{k-1}_S$ presents $\sigma\circ u$ as an immersion [F10]. [F9, F10, F12, step 11.1]
13.1 $i$ is an immersion. By steps 9.2, 11.1 and 12.1 the morphism $i=\sigma\circ(j,j')=(\sigma\circ u)\circ c$ is the composite of the immersion $\sigma\circ u$ with the closed immersion $c$, hence an immersion by step 1.3(b). [step 9.2, step 1.3, step 11.1, step 12.1]
14.1 $i$ is proper. The hypothesis makes $X\to S$ proper, and $\mathbb P^{k-1}_S\to S$ is proper [F12], hence separated, so the $S$-morphism $i$, being a morphism from a proper $S$-scheme to a separated $S$-scheme, is proper by the AC-qualified [F12]. [A1, F12, step 13.1]
15.1 $i$ is a closed immersion. A proper morphism is closed [F12], so the image $i(X)$ is closed in $\mathbb P^{k-1}_S$; an immersion with closed image is a closed immersion [F12]. [F12, step 13.1, step 14.1]
16.1 Conclusion. The morphism $i$ is a quasi-compact $S$-immersion with $i^*\mathcal O(1)\cong L^{\otimes d}$: it is a closed immersion by step 15.1, and a closed immersion is of finite type, hence quasi-compact [F11]. Therefore $L^{\otimes d}$ is closed H-very ample relative to $S$ as defined in [[def-very-ample-invertible-sheaf-relative]], and since, after choosing $N$ in step 7.1, the integer $d\ge d_0=d_1+N$ was arbitrary, this bound proves the theorem. The endpoint $d=d_0$ is included: it uses $L^{\otimes N}$ from step 8.1 and $L^{\otimes d_1}$ from step 4.2; the exponent $N/d_i-r_{ij}$ in step 7.1 is $\ge0$ by the choice of $N$ and may be zero, in which case $b_{ij}=a_{ij}$; the single-chart case $n=0$ and the case $m=0$ are allowed, the target being $\mathbb P^0_S\cong S$. If $X=\varnothing$ then $L$ is ample vacuously and every $L^{\otimes d}$ is closed H-very ample via the empty morphism $\varnothing\to\mathbb P^0_S\cong S$, which is a closed immersion with pullback of $\mathcal O(1)$ equal to the unique invertible sheaf of the empty scheme; the construction above is vacuous in this case and $d_0=1$ works. The recursive open-cover selection in [F17] uses [A1]; the other uses of choice are inherited through the suppliers of [F12] and the projective-space constructions. Besides these, only finitely many section opens, algebra generators and witnessing sections are selected. [A1, F11, F12, F17, step 7.1, step 8.1, step 4.2, step 15.1, cases: X empty and d endpoint]
\qed
