---
id: lem-modc-bounded-rank-structure-varieties-have-finitely-many-orbits
kind: lemma
title: Bounded-rank module-structure varieties have finitely many open orbits
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-finite-semisimple-module-category-over-fusion-category
  - lem-modc-module-deformation-complex-contracts
  - lem-modc-module-category-rank-bound
  - lem-modc-surjective-orbit-tangents-give-finite-orbits
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Theorems 9.1.4–9.1.6
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: Etingof, Nikshych, and Ostrik, On fusion categories, Sections 2.7 and 7.3
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v162-n2-p01.pdf
---

## Statement

Assume the Axiom of Choice. Fix a fusion category $\mathcal C$ over an algebraically closed field $k$ of characteristic zero. For each fixed possible rank of a finite semisimple right $\mathcal C$-module category, its module structures are represented, after choosing action multiplicities, by a finite union of affine varieties of finite type. The change-of-basis group on each such variety has finitely many orbits, each open, if the degree-two normalized action-deformation cohomology vanishes at every point. This vanishing is supplied by [[lem-modc-module-deformation-complex-contracts]]. Orbits on a fixed labelled action skeleton are equivalence classes of its normalized module structures with that labelling; forgetting labels can only identify further classes. There are consequently finitely many module categories of any fixed rank and finitely many indecomposable finite semisimple module categories up to module equivalence.

The finite union over action multiplicity arrays is essential: rank alone does not specify an action functor. No algebra classification or categorical trace positivity is assumed.

## Facts & Assumptions

**Given:** The field, fusion category and specified rank, and AC for the algebraic geometry suppliers.

[F1] Module categories, their action comparisons, and module equivalence are as in [[def-finite-semisimple-module-category-over-fusion-category]].

[F2] For fixed fusion data, action multiplicities satisfy the uniform bound $n_{ai}^b\le D/d_i$, and an indecomposable module category has rank at most $\lfloor D\rfloor$ ([[lem-modc-module-category-rank-bound]]).

[F3] For $F:\mathcal C^{\mathrm{rev}}\to\operatorname{End}_k(\mathcal M)$ associated to a right action, the normalized tensor-functor complex has $C^n=\operatorname{Nat}(F(X_n)\cdots F(X_1),F(X_n)\cdots F(X_1))$ in right-action order. Its differential consists of the two outside whiskerings and the alternating adjacent tensor mergers, transported by the action comparison, and $H^2=0$ ([[lem-modc-module-deformation-complex-contracts]]). Reversing the displayed variable order gives the standard tensor-functor order used below.

[F4] A finite product of general linear groups acting on a reduced affine finite-type variety with surjective orbit differentials at every point has finitely many open orbits ([[lem-modc-surjective-orbit-tangents-give-finite-orbits]]).

[F5] The Axiom of Choice is used through [F4] and its algebraic geometry suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Write $\mathcal V_r=\operatorname{Vec}_k^r$ with labelled simples $m_1,\ldots,m_r$. Every finite semisimple $k$-linear category of rank $r$ is equivalent to it: the functor $m\mapsto(\operatorname{Hom}(m_a,m))_a$ has inverse $(W_a)\mapsto\bigoplus_aW_a\otimes m_a$. The evaluation map is an isomorphism by semisimplicity and $\operatorname{End}(m_a)=k$; the latter follows since any element of a finite-dimensional division algebra over algebraically closed $k$ has an eigenvalue, so subtracting it gives a noninvertible element and hence zero. A bilinear action functor is, up to natural isomorphism, determined by the finite-dimensional multiplicity spaces $V_{ai}^b=\operatorname{Hom}(m_b,m_a\odot X_i)$: on general objects and morphisms it is the direct sum of their tensor products with these spaces. Thus, after finite basis choices, it has the standard skeleton $V_{ai}^b=k^{n_{ai}^b}$. By [F2] only finitely many arrays can occur at rank $r$. Discard arrays violating $n_{a0}^b=\delta_{ab}$ or the integer module fusion equations; arrays satisfying those equations but having no coherent constraints simply give empty parameter varieties. [F1, F2, given, construct]

2.1 Fix one such array and fixed bases of $H_{ij}^k=\operatorname{Hom}(X_k,X_i\otimes X_j)$ in $\mathcal C$. Use its given associator and unitors as fixed matrices. The action is equivalently a strong tensor functor $F:\mathcal D\to\operatorname{End}_k(\mathcal V_r)$, where $\mathcal D=\mathcal C^{\mathrm{rev}}$ has $X\star Y=Y\otimes X$ and the target has tensor product composition. Its underlying linear functor sends $X$ to $F_X:m\mapsto m\odot X$. Its constraints are $J_{X,Y}:F_XF_Y\to F_{X\star Y}$, the original right action comparisons with inputs reversed. At simple inputs $X_i,X_j$ and $m_a$, its block at $m_b$ is an invertible matrix between the fixed spaces $\bigoplus_c V_{aj}^c\otimes V_{ci}^b$ and $\bigoplus_k H_{ji}^k\otimes V_{ak}^b$. Their dimensions agree by the module fusion equations. Naturality determines $J$ on all objects from these blocks: on direct sums it is blockwise this map, with the identity on external multiplicity spaces. This also proves that there are no additional unconstrained naturality variables. [F1, step 1.1, construct]

3.1 Normalize $F_{\mathbf1}=\operatorname{id}$ and its unit comparison to the identity; then $J_{\mathbf1,X}$ and $J_{X,\mathbf1}$ are the fixed maps induced by the source unitors. This loses no structures: identify $F_{\mathbf1}$ with the identity by the given action unitor, transport all $J$ through that identification, and the module triangle forces the two stated values. This changes no associator of $\mathcal C$ and invokes no strictification theorem. Introduce the entries of every remaining simple-pair block $J$ and an additional scalar $t_J$ with equation $t_J\det J=1$. Impose the functor-associativity equations $F(a^{\mathcal D}_{X,Y,Z})J_{X\star Y,Z}(J_{X,Y}*1)=J_{X,Y\star Z}(1*J_{Y,Z})$ for simple triples, and the fixed unit equations; here $*$ means whiskering/horizontal composition of natural transformations. Each side is a matrix with entries polynomial in the finitely many variables, because direct-sum extensions and the matrices of $a^{\mathcal D}$ are fixed. A zero-dimensional block is omitted with its unique invertible map. These equations define an affine finite-type scheme $S_n$; its reduced variety $X_n$ has exactly the coherent normalized module structures as $k$-points. Checking triples of simples suffices by the direct-sum naturality of step 2.1. This constructs the asserted parameter variety, including the inverse determinants rather than treating invertibility as a closed equation without localization. [F1, step 2.1, construct]

4.1 The normalized natural automorphism group of the underlying $F$ is $G_n=\prod_{i\ne0,a,b}\operatorname{GL}(V_{ai}^b)$; omit zero spaces. Its elements $g_X$ extend to arbitrary objects by naturality, with $g_{\mathbf1}=1$, and act by $J^g_{X,Y}=g_{X\star Y}J_{X,Y}(g_X^{-1}*g_Y^{-1})$. This is algebraic, since inverse matrices are regular on general linear groups. It preserves the equations: inserting the formula in either side of the associativity equation cancels intermediate $g^{-1}g$, leaving the old equation precomposed by $g_X^{-1}*g_Y^{-1}*g_Z^{-1}$ and postcomposed by $g_{X\star(Y\star Z)}$; naturality moves $g$ through $F(a^{\mathcal D})$. It preserves the normalized unit maps because $g_{\mathbf1}=1$. Two points in the same orbit are isomorphic tensor structures, equivalently module structures through the identity functor of $\mathcal V_r$. Conversely a module equivalence preserving the labels is naturally isomorphic as an underlying linear functor to the identity: its map on each simple is isomorphic to that simple, and the direct-sum presentation of step 1.1 extends those isomorphisms naturally. Transport its module constraint through this isomorphism; the resulting natural isomorphisms $g_X:F_X\to F_X$ give exactly the displayed gauge equation. Thus these are precisely the labelled equivalences. Arbitrary equivalences additionally permute the finite set of labels, so cannot increase the number of classes. [F1, step 1.1, step 3.1, construct, algebra]

4.2 We compute the full scheme tangent at a point $J$ of $S_n$, to avoid assuming that the displayed ideal is radical. Over $k[\epsilon]/(\epsilon^2)$ every variation is uniquely $J'=J(1+\epsilon z_{X,Y})$, where $z_{X,Y}$ is an endomorphism of $F_XF_Y$ natural in both inputs, and zero when one input is the unit. Variations of $t_J$ are uniquely determined by the inverse-determinant equation, so introduce no extra tangents. Differentiating the associativity equation and identifying both unchanged composites gives $z_{X,Y}*1+\widetilde z_{X\star Y,Z}=1*z_{Y,Z}+\widetilde z_{X,Y\star Z},$ where $\widetilde z_{X\star Y,Z}=(J_{X,Y}*1)^{-1}z_{X\star Y,Z}(J_{X,Y}*1)$ and $\widetilde z_{X,Y\star Z}=(1*J_{Y,Z})^{-1}z_{X,Y\star Z}(1*J_{Y,Z})$. The fixed factor $F(a^{\mathcal D})$ has no variation and cancels with the base equation. Thus $T_JS_n=\ker\delta_2=Z^2_F$, with $\delta_2z=1*z_{Y,Z}-\widetilde z_{X\star Y,Z}+\widetilde z_{X,Y\star Z}-z_{X,Y}*1$. This is precisely the four-term adjacent/outer differential of [F3] in tensor-functor order; reversing the input list returns its right-action order. [F3, step 3.1, algebra]

5.1 A tangent vector to $G_n$ is $g_X=1+\epsilon b_X$, with $b_{\mathbf1}=0$. Substituting in step 4.1 yields $J^g=J(1-\epsilon\delta_1b)$, where $ (\delta_1b)_{X,Y}=1*b_Y-J_{X,Y}^{-1}b_{X\star Y}J_{X,Y}+b_X*1.$ Consequently the image of the orbit differential is $\operatorname{im}\delta_1=B^2_F$, the minus sign leaving the image unchanged. By [F3], $H^2_F=Z^2_F/B^2_F=0$. Therefore the orbit differential is surjective onto $T_JS_n$. The closed inclusion $X_n=(S_n)_{\mathrm{red}}\hookrightarrow S_n$ injects $T_JX_n$ into $T_JS_n$; the orbit map factors through $X_n$ because its source $G_n$ is reduced. Hence its image is contained in $T_JX_n$ and surjectivity onto the larger space forces $T_JX_n=T_JS_n$ and surjectivity onto $T_JX_n$. This reasoning applies at every point, since [F3] holds for every coherent module structure in the variety. [F3, step 4.1, step 4.2, algebra]

6.1 Apply [F4] to $G_n$ acting on $X_n$: step 3.1 supplies affine finite type, step 4.1 supplies an algebraic product-of-general-linear-groups action, and step 5.1 supplies the tangent hypothesis everywhere. Each $X_n$ has finitely many open orbits. Step 1.1 gives finitely many $n$ at each rank, and step 4.1 identifies their points with all module structures up to the stated equivalences. Thus there are finitely many equivalence classes of rank $r$ module categories. Finally [F2] bounds the ranks of all nonzero indecomposable module categories by $\lfloor D\rfloor$, so the finite union over these ranks proves the unrestricted indecomposable finiteness. Rank zero contributes just the empty category if it is admitted. AC is inherited by [F4]; all category skeleton, matrix, and cochain choices made here are finite. [F2, F4, F5, step 1.1, step 3.1, step 4.1, step 5.1] ∎
