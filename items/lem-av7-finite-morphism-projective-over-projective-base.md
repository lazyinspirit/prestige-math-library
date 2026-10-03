---
id: lem-av7-finite-morphism-projective-over-projective-base
kind: lemma
title: Finite morphisms over a projective variety over any field
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
proof_strategy: direct
deps: [def-axiom-of-choice, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-projective-variety-classical, thm-classical-principal-open-coordinate-ring-localization, thm-integrality-and-finite-module-equivalences, thm-lying-over, thm-integrality-commutes-with-localisation, def-scheme, thm-gluing-affine-schemes, def-closed-immersion-schemes, cor-finite-type-algebra-over-noetherian-ring-is-noetherian, thm-localisations-are-flat]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: The Stacks Project, Lemma 29.45.16, finite morphisms are projective
      url: https://stacks.math.columbia.edu/tag/0B3I
    - title: The Stacks Project, Lemma 29.44.16, projective morphisms over a base with an ample invertible sheaf
      url: https://stacks.math.columbia.edu/tag/087S
---

## Statement

Assume the Axiom of Choice. Let $k$ be any field and let $f:X\to Y$ be a finite morphism of finite-type $k$-schemes: on every affine open $U=\operatorname{Spec}A\subseteq Y$, $f^{-1}(U)=\operatorname{Spec}B$ is affine and $B$ is a finite $A$-module. If $Y$ is projective, then $f$ admits a closed immersion $X\hookrightarrow\mathbf P^N_Y$ over $Y$ for some $N$, and $X$ is projective over $k$.

Every such finite morphism is also separated, of finite type and universally closed. More generally these three properties follow for any finite morphism of finite-type $k$-schemes by the same affine algebra calculation; consequently a finite classical morphism to a complete variety has complete source.

No normality, smoothness, flatness, or separability assumption is needed. The finite algebra $f_*\mathcal O_X$ can fail to be locally free; the projectivization used below is that of a coherent module, not a vector bundle.

## Facts & Assumptions

**Given:** AC, the field $k$, the finite morphism, and a closed projective embedding $Y\subseteq\mathbf P^r_k$.

[F1] Affine schemes have principal-open restriction given by ring localization, and affine schemes glue along compatible open isomorphisms; on classical varieties this agrees with regular functions. Finite-type algebras over a field are Noetherian, so finite modules are finitely presented. Localization is flat, so module presentations and symmetric algebras localize ([[def-scheme]], [[thm-gluing-affine-schemes]], [[def-closed-immersion-schemes]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[thm-localisations-are-flat]], [[def-classical-algebraic-prevariety-regular-maps-and-varieties]], [[thm-classical-principal-open-coordinate-ring-localization]]).

[F2] A finite algebra is integral. Integral closure commutes with localization, and lying over identifies the image of a quotient of an integral algebra with the zero locus of the contracted ideal ([[thm-integrality-and-finite-module-equivalences]], [[thm-integrality-commutes-with-localisation]], [[thm-lying-over]]). AC is assumed as in [[def-axiom-of-choice]].

[F3] In the algebraically closed classical case, a projective variety is a closed subvariety of projective space ([[def-projective-variety-classical]]). Here the given scheme embedding uses the same standard affine projective-space charts: $D_+(x_a)$ has coordinates $x_b/x_a$, and homogeneous equations dehomogenize on these charts.

## Proof

1.1 Put $\mathcal F=f_*\mathcal O_X$. On $U=\operatorname{Spec}A\subseteq Y$ it is the sheaf obtained from the finite $A$-module $B=\Gamma(f^{-1}(U),\mathcal O_X)$: on $D(a)$ its sections are $B_a$, since the inverse image is $D(f^*a)$. The sheaf identifications agree on restrictions, so $\mathcal F$ is a coherent algebra. Here coherent means locally a finitely presented module; the rings $A$ are Noetherian, so finite modules are finitely presented. Tensor products and symmetric algebras of these sheaves are defined on the affine modules and glued by localization. [given, F1, construct]

2.1 For a module sheaf $\mathcal E$ described on affine opens by finite modules and their localizations as in step 1.1, define $\mathbf P_Y(\mathcal E)$ by gluing the spaces of one-dimensional quotients on affine charts: a presentation $A^m\twoheadrightarrow M$ realizes this space as the closed locus in $\mathbf P^{m-1}_U$ cut out by the homogeneous linear relations of $M$. On a chart where a quotient generator has nonzero value, its remaining ratios satisfy exactly the dehomogenized relations; these charts glue by changing ratios. The resulting space is independent of the presentation, as the quotient and its ratios give inverse maps for two presentations. For $M=0$, there is no invertible quotient and this space is empty; otherwise the described presentation charts cover it. It is separated over $Y$, because locally it is closed in a projective space and the relative diagonal of projective space is cut out by the cross-product equations. [step 1.1, construct, algebra]

2.2 We prove the needed global generation without a cohomology theorem. Let $U_a=Y\cap D_+(x_a)$, omitting empty charts. Fix a section $s$ of $\mathcal E$ on $U_a$. On $U_b\cap U_a=D(x_a/x_b)\subseteq U_b$, it is an element of the localized module of $\mathcal E|_{U_b}$. Therefore multiplying by $(x_a/x_b)^n$ for large enough $n$ extends it over $U_b$; using the trivialization $x_b^n$ of $\mathcal O_Y(n)$, these are extensions of $x_a^n s$ as sections of $\mathcal E(n)$. Choose one $n$ for the finite cover. On each affine overlap $U_b\cap U_c$, the two extensions agree after inverting $x_a$; their difference is consequently killed by some power of its local equation. There are finitely many overlaps, so multiplying every extension by the same further power $x_a^d$ makes them agree everywhere. They glue to a global section of $\mathcal E(n+d)$ which restricts to $x_a^{n+d}s$ on $U_a$. [F1, step 1.1, algebra, construct]

3.1 Take $\mathcal E=\mathcal O_Y\oplus\mathcal F$. The evaluation surjection $f^*\mathcal E\to\mathcal O_X$, $(a,b)\mapsto a+f^*b$, defines a morphism $i:X\to\mathbf P_Y(\mathcal E)$. Its image lies in the open chart where the distinguished generator of $\mathcal O_Y$ is nonzero. Over $U=\operatorname{Spec}A$ this chart is the affine space with coordinate algebra $\operatorname{Sym}_A B$, and $i$ corresponds to the surjective algebra map $\operatorname{Sym}_A B\to B$ induced by the identity on $B$. Thus $i$ is a closed immersion into that open chart, hence an immersion into $\mathbf P_Y(\mathcal E)$. These maps glue because evaluation does. [step 1.1, step 2.1, construct, algebra]

4.1 The immersion in step 3.1 is closed, as follows directly from integral equations. On an affine $U$, choose finite module generators $b_1,\ldots,b_t$ of $B$; with the distinguished generator $1$ of $\mathcal O_Y$, they present $\mathcal E$. Write the corresponding homogeneous coordinates as $z_0,z_1,\ldots,z_t$. Define a graded algebra $T$ with $T_0=A$ and $T_n=B$ for $n\ge1$, with multiplication induced by that of $B$. The evaluation map is the graded surjection $\operatorname{Sym}_A(A\oplus B)\to T$ sending $z_0$ to $1\in T_1$ and $z_i$ to $b_i\in T_1$; write $K$ for its homogeneous kernel. For each $b_i$, integrality gives $b_i^{d_i}+\sum_{j<d_i}a_{ij}b_i^j=0$. The homogeneous equation $z_i^{d_i}+\sum_{j<d_i}a_{ij}z_i^jz_0^{d_i-j}=0$ vanishes under evaluation and belongs to the kernel $K$. Any homogeneous prime containing $K$ and $z_0$ therefore contains every $z_i$, so it is irrelevant and gives no projective point. Consequently the closed homogeneous-kernel locus has no points outside $D_+(z_0)$. On that chart its coordinate algebra is precisely the quotient $\operatorname{Sym}_A B\twoheadrightarrow B$ of step 3.1; hence the locus equals $X_U$ as a scheme. These closed embeddings glue, since evaluation and its kernel commute with localization. Thus $X\hookrightarrow\mathbf P_Y(\mathcal E)$ is a closed immersion. Also, finite algebras remain finite after arbitrary base change: the elements $1\otimes b_i$ generate $A'\otimes_A B$; quotients remain finite. By [F2] such maps are integral and closed by lying over, so this also proves universal closedness of $f$. Its affine diagonal is closed because multiplication $B\otimes_A B\twoheadrightarrow B$ is surjective, and its finite algebra is of finite type. [F1, F2, step 2.1, step 3.1, algebra, construct]

5.1 The finite-algebra calculations at the end of step 4.1 use no projective embedding of the target: they prove separatedness, finite type and universal closedness for any finite morphism. In the classical register a complete variety has universally closed structure morphism; composing it with a universally closed finite morphism remains universally closed after every base change, since the image of a closed subset is closed under each factor. The source is separated over $k$: its absolute diagonal factors through the relative diagonal and the inverse image of the closed absolute diagonal of the complete target. Finite type composes as well. Thus the source is complete. In particular the finite normalization over a projective curve has this property. [F1, F2, step 4.1, algebra]

5.2 Apply step 2.2 to finite module generators on every $U_a$. There are finitely many such generators. Raise all resulting twists to one common $m$ by multiplying the section coming from $U_a$ by the required further power of $x_a$. On $U_a$ the factor $x_a^m$ is a trivializing unit, so the resulting global sections generate $\mathcal E(m)$ there. Thus there is a surjection $\mathcal O_Y^{N+1}\twoheadrightarrow\mathcal E(m)$. Tensoring a one-dimensional quotient with an invertible sheaf identifies $\mathbf P_Y(\mathcal E)$ with $\mathbf P_Y(\mathcal E(m))$: locally the identification cancels the same unit in every homogeneous coordinate. The surjection gives a closed immersion of this projectivization into $\mathbf P^N_Y$, by the homogeneous linear relations described in step 2.1. Combining with step 4.1 gives a closed immersion $X\hookrightarrow\mathbf P^N_Y$. [step 2.1, step 4.1, step 2.2, construct]

6.1 Since $Y\subseteq\mathbf P^r_k$ is closed, $\mathbf P^N_Y=\mathbf P^N_k\times Y$ is closed in $\mathbf P^N_k\times\mathbf P^r_k$. The Segre map sends $([u_i],[v_j])$ to $[u_iv_j]$ and is a closed immersion: its image is the nonzero rank-one matrices, cut out by all two-by-two minors, and on a chart with a nonzero entry the row and column ratios recover both factors regularly. Composition gives a closed immersion of $X$ into $\mathbf P^{(N+1)(r+1)-1}_k$. This proves both assertions. All chart equations and their inverse coordinate maps are over $k$; neither algebraic closure nor perfectness is used. [F3, step 5.2, algebra, construct] ∎
