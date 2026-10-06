---
id: prop-lie-algebra-cohomology-is-derived-invariants
kind: proposition
title: "Chevalley–Eilenberg cohomology computes Ext of the trivial module"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-dependent-choice, cor-every-vector-space-has-a-basis, thm-well-ordering-theorem, def-universal-enveloping-algebra, thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra, thm-bimodule-actions-induced-on-tensor-products, def-free-module-on-a-set-and-standard-basis, thm-free-modules-are-projective-with-choice-boundary, thm-poincare-birkhoff-witt, def-pbw-filtration-on-the-universal-enveloping-algebra, def-koszul-complex-of-a-sequence-with-coefficients, def-regular-sequence-on-a-module, thm-regular-sequences-give-acyclic-koszul-complexes, cor-koszul-complex-resolves-a-regular-quotient, lem-filtered-colimits-of-abelian-groups-are-exact, def-filtered-category-and-filtered-colimit, def-balanced-ext-bifunctor, cor-every-module-admits-an-injective-resolution, def-ext-via-a-projective-resolution-of-the-first-variable, def-supplied-projective-resolution-datum, cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable, def-chevalley-eilenberg-cochains, def-chevalley-eilenberg-differential, thm-the-chevalley-eilenberg-differential-squares-to-zero, def-lie-algebra-cohomology, def-representation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, MIT 18.755 lecture notes (Spring 2024), §45.2 pp.246–249 and §48.1 pp.259–261"
      url: "https://live.ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§45.2, printed pp.247–249, the trivial-coefficient Chevalley–Eilenberg complex; §48.1, printed p.260, cochains with coefficients. The standard free resolution is proved locally, not in these passages"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.2 printed pp.64–70"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.2.2, printed p.69, derived invariants and the Ext identification; the arbitrary-field standard resolution is constructed locally"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]); it supplies the Axiom of
Dependent Choice through [[thm-choice-implies-dependent-implies-countable-choice]].
Let $\mathfrak a$ be a Lie algebra over a field $k$ and $V$ an $\mathfrak a$-module,
regarded as a left $U(\mathfrak a)$-module by
[[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]],
and regard $k$ as the trivial module. Then for every $n\ge0$ there is a natural
isomorphism
$$H^n(\mathfrak a,V)\cong\operatorname{Ext}^n_{U(\mathfrak a)}(k,V),$$
where the left-hand side is the Chevalley–Eilenberg cohomology of
[[def-lie-algebra-cohomology]] and the right-hand side is the balanced Ext
bifunctor of [[def-balanced-ext-bifunctor]] computed using supplied projective
and injective resolution data on the objects being compared. Indeed with $P_q=U(\mathfrak a)\otimes_k\Lambda^q\mathfrak a$,
with the module structure induced by the $(U(\mathfrak a),k)$-bimodule structure
of $U(\mathfrak a)$ and with the Koszul differential displayed in step 1.2, the
augmented complex $P_\bullet\to k$ is a resolution of $k$ by free
$U(\mathfrak a)$-modules, evaluation identifies
$\operatorname{Hom}_{U(\mathfrak a)}(P_q,V)$ with $C^q(\mathfrak a,V)$ of
[[def-chevalley-eilenberg-cochains]], and the induced differential is exactly
the zero-based differential of [[def-chevalley-eilenberg-differential]]; hence
the comparison corollary
[[cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]]
computes $\operatorname{Ext}^n$ from this resolution with no new sign
convention.

## Facts & Assumptions

**Given:** The Axiom of Choice and its consequence Dependent Choice; a Lie algebra $\mathfrak a$ over a field $k$; an $\mathfrak a$-module $V$ and its associated left $U(\mathfrak a)$-module; the trivial module $k$.

[F1] The Chevalley–Eilenberg cochains are $C^q(\mathfrak a,V)=\operatorname{Hom}_k(\Lambda^q\mathfrak a,V)$, the differential has the zero-based two-sum formula with the bracket inserted as the first argument, and $d^{q+1}d^q=0$ for every $q$ ([[def-chevalley-eilenberg-cochains]], [[def-chevalley-eilenberg-differential]], [[thm-the-chevalley-eilenberg-differential-squares-to-zero]]).

[F2] Chevalley–Eilenberg cohomology is $H^q(\mathfrak a,V)=\ker d^q/\operatorname{im}d^{q-1}$, with cochain spaces zero in negative degrees ([[def-lie-algebra-cohomology]]).

[F3] The Axiom of Choice implies Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] Under the Axiom of Choice every vector space has a basis and every set admits a well-ordering ([[cor-every-vector-space-has-a-basis]], [[thm-well-ordering-theorem]]).

[F5] Let $B$ be a basis of a Lie algebra $\mathfrak g$ carrying a total order. Then the ordered monomials form a basis of $U(\mathfrak g)$ and the symbol map $\sigma:S(\mathfrak g)\to\operatorname{gr}U(\mathfrak g)$ is an isomorphism of graded algebras ([[thm-poincare-birkhoff-witt]], [[def-universal-enveloping-algebra]]).

[F6] A Lie algebra action on $V$ and a unital left $U(\mathfrak g)$-module structure on $V$ are equivalent data ([[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]]); if ${}_SM_R$ is an $(S,R)$-bimodule and $N$ a left $R$-module, then $M\otimes_RN$ carries the unique left $S$-module structure with $s(m\otimes n)=(sm)\otimes n$ ([[thm-bimodule-actions-induced-on-tensor-products]]); the free left $R$-module on a set $X$ is $R^{(X)}$ with standard basis $(e_x)_{x\in X}$ ([[def-free-module-on-a-set-and-standard-basis]]); and under the Axiom of Choice every free module is projective ([[thm-free-modules-are-projective-with-choice-boundary]]).

[F7] For a commutative unital ring $R$, a finite ordered sequence $\mathbf x=(x_1,\dots,x_n)$ in $R$ and an $R$-module $M$, the Koszul complex $K(\mathbf x;M)=(\Lambda R^n\otimes_RM,d)$ has $d(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes m)=\sum_{j=1}^p(-1)^{j-1}e_{i_1}\wedge\cdots\widehat{e_{i_j}}\cdots\wedge e_{i_p}\otimes x_{i_j}m$ ([[def-koszul-complex-of-a-sequence-with-coefficients]]); an $M$-regular sequence is $M$-Koszul-regular, that is $H_i(K(\mathbf x;M))=0$ for $i>0$ ([[def-regular-sequence-on-a-module]], [[thm-regular-sequences-give-acyclic-koszul-complexes]]), and if $M$ is finite free and $\mathbf x$ is $M$-regular then $K(\mathbf x;M)$ is a finite free resolution of $M/(\mathbf x)M$ ([[cor-koszul-complex-resolves-a-regular-quotient]]).

[F8] Filtered colimits of abelian groups are exact, hence commute with kernels and images; a filtered colimit of complexes computes the colimit of the homology groups degreewise ([[lem-filtered-colimits-of-abelian-groups-are-exact]], [[def-filtered-category-and-filtered-colimit]]).

[F9] For a supplied projective resolution datum $Q$ on a class of objects of an abelian category, $\operatorname{Ext}^n_Q(M,N)=H^n\operatorname{Hom}(Q_\bullet(M),N)$ ([[def-ext-via-a-projective-resolution-of-the-first-variable]], [[def-supplied-projective-resolution-datum]]); under Dependent Choice any two supplied projective resolution data on the same class give naturally isomorphic Ext groups ([[def-balanced-ext-bifunctor]], [[cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]]). The module category has enough injectives under AC by [[cor-every-module-admits-an-injective-resolution]].



**Proof technique:** construct the standard free resolution, identify its Hom complex with the Chevalley–Eilenberg complex, and compare supplied resolution data.

## Proof

1.1 By [F4] fix a $k$-basis $B$ of $\mathfrak a$, well ordered by a total order $\le$. For $q\ge0$ let $T_q$ be the set of strictly increasing $q$-tuples $i_1<\cdots<i_q$ in $B$, and for $i\in B$ write $e_i$ for the corresponding basis vector. The wedges $e_I=e_{i_1}\wedge\cdots\wedge e_{i_q}$, $I\in T_q$, form a $k$-basis of $\Lambda^q\mathfrak a$: they span because $\Lambda^q\mathfrak a$ is spanned by decomposables $x_1\wedge\cdots\wedge x_q$ and expanding each $x_j$ in $B$ multilinearly writes every such wedge as a finite sum of wedges of basis vectors, each of which is $\pm$ a wedge $e_I$ or zero; and they are independent because for each fixed $J\in T_q$ the alternating $q$-linear form $\varphi_J(x_1,\dots,x_q)=\det(\lambda_{j_r}(x_s))_{r,s}$, built from the coordinate functionals $\lambda_j(e_{i})=\delta_{ij}$, factors through $\Lambda^q\mathfrak a$ and satisfies $\varphi_J(e_I)=\delta_{IJ}$, so a linear relation $\sum_Ic_Ie_I=0$ gives $c_J=\varphi_J(\sum_Ic_Ie_I)=0$ for every $J$. [F4, algebra]

1.2 Put $P_q=U(\mathfrak a)\otimes_k\Lambda^q\mathfrak a$. Since $U(\mathfrak a)$ is a $(U(\mathfrak a),k)$-bimodule, [F6] makes $P_q$ a left $U(\mathfrak a)$-module with $s(u\otimes\omega)=(su)\otimes\omega$, and since the wedges $e_I$ form a $k$-basis of $\Lambda^q\mathfrak a$, the map $U(\mathfrak a)^{(T_q)}\to P_q$ sending the standard basis vector at $I$ to $1\otimes e_I$ is an isomorphism of left $U(\mathfrak a)$-modules: it is $U(\mathfrak a)$-linear and surjective, and the balanced map $(u,\omega)\mapsto(c_Iu)_{I\in T_q}\in U(\mathfrak a)^{(T_q)}$, where $\omega=\sum_Ic_Ie_I$, induces an inverse by the universal property of the tensor product. Hence every $P_q$ is a free $U(\mathfrak a)$-module. Define $\partial_q:P_q\to P_{q-1}$ for $q\ge1$ on decomposable arguments by $$\partial_q(u\otimes x_1\wedge\cdots\wedge x_q)=\sum_{r=1}^q(-1)^{r-1}ux_r\otimes x_1\wedge\cdots\widehat{x_r}\cdots\wedge x_q+\sum_{1\le r<s\le q}(-1)^{r+s}u\otimes[x_r,x_s]\wedge x_1\wedge\cdots\widehat{x_r}\cdots\widehat{x_s}\cdots\wedge x_q,$$ and set $\partial_0=\varepsilon:U(\mathfrak a)\to k$ for the algebra augmentation supplied by the universal property of $U(\mathfrak a)$ from the zero map on $\mathfrak a$ ([F6], [[def-universal-enveloping-algebra]]); the formula is $k$-multilinear and alternating in $x_1,\dots,x_q$ and balanced in $u$, so it defines a $U(\mathfrak a)$-linear map $P_q\to P_{q-1}$ on the tensor product of the free module with the exterior power. [F4, F6, construct]

2.1 For a left $U(\mathfrak a)$-module $W$, evaluation on $1\otimes\omega$ is a natural bijection $\operatorname{Hom}_{U(\mathfrak a)}(P_q,W)\to C^q(\mathfrak a,W)$, $\varphi\mapsto\bigl(x_1\wedge\cdots\wedge x_q\mapsto\varphi(1\otimes x_1\wedge\cdots\wedge x_q)\bigr)$, with inverse $f\mapsto(u\otimes\omega\mapsto u\cdot f(\omega))$; it is the Hom-tensor adjunction for the free module on the basis $\{e_I\}$. Under this identification the precomposition $\varphi\mapsto\varphi\circ\partial_{q+1}$ corresponds to the Chevalley–Eilenberg differential: for $f\in C^q(\mathfrak a,W)$ and $x_0,\dots,x_q\in\mathfrak a$, $\varphi(\partial_{q+1}(1\otimes x_0\wedge\cdots\wedge x_q))$ equals $\sum_{i=0}^q(-1)^ix_i\cdot f(x_0,\dots,\widehat{x_i},\dots,x_q)+\sum_{0\le i<j\le q}(-1)^{i+j}f([x_i,x_j],x_0,\dots,\widehat{x_i},\dots,\widehat{x_j},\dots,x_q)$, which is exactly $(df)(x_0,\dots,x_q)$ for the zero-based formula of [F1]. Hence $\operatorname{Hom}_{U(\mathfrak a)}(P_\bullet,W)$ is the Chevalley–Eilenberg complex $C^\bullet(\mathfrak a,W)$. [F1, F6, step 1.2, algebra]

2.2 Use the fixed ordered basis $B$ of the arbitrary Lie algebra $\mathfrak a$, and identify $S(\mathfrak a)$ with the polynomial ring $k[x_i:i\in B]$ by [F5]. Put $F_NP_q=F_{N-q}U(\mathfrak a)\otimes_k\Lambda^q\mathfrak a$, with $F_pU=0$ for $p<0$. This filtration is increasing, exhaustive and bounded below in each degree. The action term of $\partial$ raises PBW degree by one and lowers exterior degree by one, preserving total degree $N$; the bracket term lowers total degree by one. Therefore the associated graded differential is the Koszul differential on $S(\mathfrak a)\otimes_k\Lambda^\bullet\mathfrak a$: on each basis wedge it is the finite sum $\delta(f\otimes e_{i_1}\wedge\cdots\wedge e_{i_q})=\sum_{r=1}^q(-1)^{r-1}fx_{i_r}\otimes e_{i_1}\wedge\cdots\widehat{e_{i_r}}\cdots\wedge e_{i_q}$. Its augmentation evaluates all variables at zero, giving $k$. [F5, F7, step 1.2, algebra]

3.1 The chain identity is $\partial_q\partial_{q+1}=0$ for $q\ge1$. In step 2.1 take $W=P_{q-1}$: the composite of the precomposition maps from $\operatorname{Hom}(P_{q-1},W)$ to $\operatorname{Hom}(P_{q+1},W)$ is the square of the Chevalley–Eilenberg differential, hence zero by [F1]. Applying it to $\operatorname{id}_{P_{q-1}}$ gives $\partial_q\partial_{q+1}=0$. Also $\varepsilon\partial_1=0$ because $\varepsilon(ux)=0$ for $x\in\mathfrak a$. Thus the augmented $P_\bullet$ is a chain complex of free modules. [F1, F6, step 2.1, algebra]

3.2 For every finite $S\subseteq B$, let $R_S=k[x_i:i\in S]$ and use the induced order on $S$. The ordered variables form an $R_S$-regular sequence: multiplication by each variable is injective on the polynomial ring in the variables not yet removed, as it shifts the corresponding monomial exponent by one; the successive quotients remove that variable. By [F7], the augmented Koszul complex $R_S\otimes_k\Lambda^\bullet(\operatorname{span}_k\{e_i:i\in S\})\to k$ is exact. Inclusions $S\subseteq T$ give inclusions of these complexes compatible with their augmentations. Every polynomial and exterior tensor has finite support in $B$, so their filtered colimit is exactly the augmented graded complex of step 2.2. Exactness of filtered colimits [F8] proves this graded complex exact, including its degree-zero augmentation. This argument uses finite polynomial-variable subcomplexes, not finite-dimensional Lie subalgebras. The differential preserves total polynomial-plus-exterior degree, so each homogeneous total-degree component is also exact. [F7, F8, step 2.2, algebra]

4.1 The augmented complex $P_\bullet\to k$ is exact, including at $P_0$. The zero element is already a boundary. Let $z\ne0$ in $P_q$ be a cycle with $q\ge1$, or let $z\in\ker\varepsilon\subseteq P_0$; let $N$ be minimal with $z\in F_NP_q$ and let $\bar z\in\operatorname{gr}_NP_q$ be its symbol. Since $\partial z=0$ and the induced graded differential sends the symbol of an element to the symbol of its image, $\delta\bar z=0$; by exactness of the augmented associated graded complex from step 3.2, $\bar z=\delta\bar w$ for some $\bar w\in\operatorname{gr}_NP_{q+1}$ in the cycle case, or for $q=0$, $N\ge1$ and $\bar z\in\ker\bigl(\operatorname{gr}_NP_0\to k\bigr)=\operatorname{im}\delta$ (and if $q=0$ and $N=0$ then $z\in F_0P_0=k\cdot1$ with $\varepsilon(z)=0$, so $z=0$). Choose a lift $w\in F_NP_{q+1}$ of $\bar w$; then $z-\partial w\in F_{N-1}P_q$ is again a cycle and $\varepsilon(z-\partial w)=0$ in degree zero. Iterating this reduction finitely many times (each iteration lowers $N$ by at least one, and only finitely many choices of lifts are made) arrives at an element of $F_{q-1}P_q$, which is zero for $q\ge1$, or at an element of $F_0P_0\cap\ker\varepsilon=0$ for $q=0$. Hence $z\in\operatorname{im}\partial_{q+1}$, and since $\operatorname{im}\partial_{q+1}\subseteq\ker\partial_q$ by step 3.1, this proves exactness at every degree. [F8, step 3.1, step 3.2, algebra]

5.1 Steps 2.2 and 3.2 apply to arbitrary $\mathfrak a$ without a finite-dimensionality hypothesis. The filtration reduction of step 4.1 terminates because each individual tensor has finite PBW degree. Consequently the augmented $P_\bullet\to k$ is exact for every Lie algebra: $\ker\partial_q=\operatorname{im}\partial_{q+1}$ for $q\ge1$, $\ker\varepsilon=\operatorname{im}\partial_1$, and $\varepsilon$ is surjective since $\varepsilon(1)=1$. [step 2.2, step 3.2, step 4.1, algebra]

6.1 By steps 1.2, 2.1 and 5.1, $P_\bullet\to k$ is a resolution of $k$ by free $U(\mathfrak a)$-modules, hence by [F6] and the Axiom of Choice a projective resolution. Taking $W=V$ in step 2.1, the complex $\operatorname{Hom}_{U(\mathfrak a)}(P_\bullet,V)$ is the Chevalley–Eilenberg complex $C^\bullet(\mathfrak a,V)$, so $$H^n\operatorname{Hom}_{U(\mathfrak a)}(P_\bullet,V)\cong H^n(\mathfrak a,V)$$ for every $n\ge0$. Iterating the free module on the underlying set of each kernel gives a projective resolution of every module, since these free modules are projective by [F6]. Injective resolutions exist by [[cor-every-module-admits-an-injective-resolution]] under the assumed Axiom of Choice. Thus the module category has enough projectives and injectives, as required by the balanced Ext convention [F9]. Fix supplied resolution data on the objects being compared, with $Q_\bullet(k)=P_\bullet$; by [F9] and Dependent Choice, available by [F3], every supplied projective resolution datum on the same class computes Ext groups naturally isomorphic to those of $Q$, so $\operatorname{Ext}^n(k,V)\cong H^n\operatorname{Hom}(P_\bullet,V)\cong H^n(\mathfrak a,V)$ for every $n$. The isomorphisms are natural in $V$ because the identification of step 2.1 is natural in the coefficient module and the comparison maps of [F9] are natural. This proves the statement; no finite-dimensionality, field characteristic or coefficient hypothesis was used beyond the displayed ones. [F2, F3, F6, F9, step 1.2, step 2.1, step 5.1] ∎
