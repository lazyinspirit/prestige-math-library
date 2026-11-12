---
id: thm-author-d026a7b99ace-universal-chern-space
kind: theorem
title: External formal universal Chern maps and supported construction
status: published
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-axiom-of-choice
  - thm-author-32887006bdff-p1-spectrum-input
  - thm-author-32887006bdff-em-graded-input
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-cohomology-with-support
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
  - lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
  - thm-repair-72891dd58cd0-universal-chern-derived-limit-input
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - lem-adjudicate-d5306176fce5-coherent-realization
  - math:lem-general-linear-group-scheme-and-its-coordinate-ring
  - math:def-ag-standard-smooth-algebra
  - math:thm-ag-standard-smooth-geometric-regularity
  - math:def-smooth-morphism-schemes
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:lem-spectrum-localization-open-immersion
  - lem-adjudicate-63e8cd82ee4c-projective-stack-adapted-frames
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  lem-adjudicate-10deda40f9da-affine-k-space-sheafification: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
  thm-author-32887006bdff-em-graded-input: mathematical-premise
  lem-adjudicate-a8be8a17c858-negative-model-coefficients: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input: mathematical-premise
  lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension: mathematical-premise
  thm-repair-72891dd58cd0-universal-chern-derived-limit-input: mathematical-premise
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-adjudicate-d5306176fce5-coherent-realization: mathematical-premise
  math:lem-general-linear-group-scheme-and-its-coordinate-ring: mathematical-premise
  math:def-ag-standard-smooth-algebra: mathematical-premise
  math:thm-ag-standard-smooth-geometric-regularity: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:lem-clopen-subset-gives-idempotent-decomposition: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  lem-adjudicate-63e8cd82ee4c-projective-stack-adapted-frames: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory
        without Homotopy Invariance, J. Math. Sci. Univ. Tokyo26(2019)
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      locator: §1.1 p. 250; Definitions 2.1–2.5 pp. 256–259; §4 pp. 265–268;
        Definition 5.1, Steps 1–3, Propositions 5.2–5.3 and (5.3.1), pp.
        268–271; (5.4.1) and §6, Proposition 6.1(1), pp. 272–273
      hypotheses: A category C as in §1.1 of separated, noetherian, universally
        catenary, finite-dimensional schemes, satisfying (*1)–(*2), and an
        admissible graded theory Gamma(*) on its big Zariski site in Definitions
        2.1 and 2.5. Retain weight-zero connectivity and unity, graded products,
        dense-open injectivity, the first-Chern morphism, PBF, and the strict
        simplicial closed-immersion push-forwards with (3a)–(3d). For W in C use
        its small Zariski local homotopy category, Gamma(i)|W and the source's
        own stable class; (5.3.1) has i>=1. These are conditional native
        hypotheses, not hypotheses verified for the actual EM coefficients. No
        native-to-actual comparison is imported.
      statement: For that admissible theory, its simplicial universal bundle classes
        yield the stable pointed map in §5 Steps 1–2. Proposition 5.3 and
        (5.3.1) give the native local Q-space operation by rank projection,
        integral completion of that stable map, and the simplicial abelian
        target's completion equivalence. C0 is separately unpointed constant
        one; (5.4.1) and Proposition 6.1(1) give native restriction and support
        naturality. No identification with the actual EM class or target is
        claimed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: This assignment read the existing cached 86-page journal PDF at
        printed p. 250, pp. 256–259 and pp. 265–273 (including the displayed §5
        construction and §6 definition and proof of Proposition 6.1). The
        primary-URL text extraction was also checked for §1.1, Definition 2.5
        and §5 Steps 1–3. No fresh authentication of cached PDF bytes is
        claimed. Gillet's stability arguments, Bousfield–Kan foundations,
        examples of admissible theories and any comparison or admissibility for
        actual EM coefficients are not reconstructed or imported by inference.
        Current consumer maintenance read the generated bodies and supplier
        interfaces; no fresh primary-source or page-image reading, or
        independent acceptance, is claimed."
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (14April2025
        PDF)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1, printed p. 30 (relation on an S-stack in weight equal
        to bundle rank); Lemma 3.2.3, printed p. 23; Lemma 4.4.3, printed pp.
        30–31
      hypotheses: Homotopy-commutative linearly oriented motivic ring spectrum with
        PBF on the source-native smooth Zariski site over a qcqs base; actual EM
        model, products, orientation and all-degree coefficient convention
        supplied separately. No A1 invariance is assumed.
      statement: Definition 4.4.1 defines higher classes for a rank-r bundle on any
        S-stack by its unique weight-r quotient-projective relation. Lemma 3.2.3
        supplies the bundle class-power equivalence. Lemma 4.4.3 gives Whitney
        on smooth test schemes. These are cohomology classes; the consumer
        locally chooses a path only after obtaining equality in the mapping
        space of the entire universal stack.
      reading_limits: "Historical reading record retained from the incoming generated
        item: This assignment read the existing cached PDF at printed p. 23,
        Lemma 3.2.3 and its proof, and pp. 30–31, Definition 4.4.1 and Lemma
        4.4.3 with its proof. The adjacent displayed Grassmannian statements
        were read as context; their application here remains through the
        declared derived-limit supplier. Earlier broader reading claims are
        historical, not fresh reading credit. Stack stabilization, mapping-space
        extension, lifting and categorical foundations remain imports through
        the declared suppliers. No live-byte authentication or independent
        supplier acceptance is claimed. Current consumer maintenance read the
        generated bodies and supplier interfaces; no fresh primary-source or
        page-image reading, or independent acceptance, is claimed. Fresh in this
        assigned repair: read the primary live April 14, 2025 PDF extraction of
        Definition 4.4.1, Lemma 3.2.3 with its displayed proof, and Lemma 4.4.3
        with its displayed proof. Checked the quotient convention, stack scope,
        weight equal to rank, and smooth Whitney scope. No coherent relation
        homotopy is attributed verbatim to the source; its existence for the
        chosen universal maps is derived locally from equality of their
        components in one mapping space. No fresh reading of Asakura–Sato or
        independent acceptance is claimed."
proof_strategy: direct
local_argument_provenance: ai-generated
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - lem-adjudicate-d5306176fce5-coherent-realization
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-cohomology-with-support
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
  - lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
  - thm-repair-72891dd58cd0-universal-chern-derived-limit-input
argument_deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-axiom-of-choice
  - thm-author-32887006bdff-p1-spectrum-input
  - thm-author-32887006bdff-em-graded-input
  - lem-adjudicate-a8be8a17c858-negative-model-coefficients
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-cohomology-with-support
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
  - lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
  - thm-repair-72891dd58cd0-universal-chern-derived-limit-input
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - lem-adjudicate-d5306176fce5-coherent-realization
  - math:lem-general-linear-group-scheme-and-its-coordinate-ring
  - math:def-ag-standard-smooth-algebra
  - math:thm-ag-standard-smooth-geometric-regularity
  - math:def-smooth-morphism-schemes
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:lem-spectrum-localization-open-immersion
  - lem-adjudicate-63e8cd82ee4c-projective-stack-adapted-frames
dependency_level: 20
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds, including $\omega$ in the scheme-data universe. Let $X$ be any qcqs scheme over a field and let $i\geq1$. Put $D_i(T)=\mathbb Z(i)_{\rm mot}(T)$, $A_i(T)=H(D_i(T)[2i])$ and $Y_i(T)=\Omega^\infty A_i(T)$, using the actual coherent coefficient functor, its fixed Eilenberg–Mac Lane realization and cohomological shift. There are pointed Chern operations on the actual perfect K-spaces, retaining the specified projective-relation universal bundle classes and their stabilization. Their source is $\Omega^\infty K_{\rm Perf}(T)$; a vector bundle is sent to its degree-zero perfect object. The operations vanish on trivial-rank classes. The index-zero convention is separately $C_0=1$ as an unpointed constant, the constant term of the total Chern series, and gives no pointed additive support-fiber operation.

The operations are maps of coherent functors on qcqs schemes over the prime field, then restricted to the given field. They therefore include actual restriction arrows and all their composition data. For coefficient comparisons, a given coherent diagram of stable universal maps is transported through the mapping-space equivalences used in the construction; equality of isolated component classes is not asserted to select higher coherences. A single homotopy of universal maps gives a homotopy of the whole restriction diagram. No assertion of additivity of an individual higher Chern map is made here.

Use the qcqs presentations of the small Zariski site (quasi-compact opens), the small Nisnevich site (qcqs etale schemes), and the smooth big site (qcqs smooth schemes), the last with either Zariski or Nisnevich topology. The actual coefficient target is the restriction of $Y_i$. The operation factors through ordinary space-valued sheafification of the perfect K-space, identified there with the sheaf Q-space by the full affine comparison. Composing with the canonical source unit gives the stated global operations. In the stalkwise convention, apply further hypercompletion to both sides to obtain the corresponding local-model map. Actual coefficient values and global operations are constructed before that further localization; no equality of ordinary and hypercomplete sections is used.

Separately, the native Gillet formula is conditional. Let $\mathcal C$ satisfy Asakura–Sato §1.1: its schemes are separated, noetherian, universally catenary and finite-dimensional, with the stated closure under smooth morphisms and inclusion of regular closed immersions. Let $\Gamma(*)$ be an admissible graded cohomology theory on $\mathcal C_{\rm Zar}$ in Definitions 2.1 and 2.5, including its products, first Chern map, projective bundle formula and push-forwards for strict closed immersions of simplicial objects with the required compatibilities. For $W\in\mathcal C$, put $\Gamma_i=\Gamma(i)|_{W_{\rm Zar}}$. In its native small Zariski local homotopy category, the sheafified Q-space has $\Omega BQ\mathcal P\simeq\underline{\mathbb Z}\times\mathbb Z_\infty BGL$. Its positive operation is projection away from trivial rank followed by $\mathbb Z_\infty(c^\Gamma_{i,\infty})$ and $\mathbb Z_\infty K(\Gamma_i,2i)\simeq K(\Gamma_i,2i)$, using that theory's own stable class from §5 Steps 1–2. Here $BGL_n$ is the nerve of the automorphism group of the trivial rank-$n$ bundle, $BGL=\operatorname*{colim}_n BGL_n$, $\mathbb Z_\infty$ is integral Bousfield–Kan completion, and $K(\Gamma_i,2i)$ is the derived simplicial abelian target of Definition 5.1(2). No admissibility of the actual $D_i$, or comparison identifying its chosen stable class and target with these native objects, is asserted. The actual four-site construction above is supplied separately by the stack and affine-extension inputs; it requires neither global bundle-difference representatives for perfect $K_0$ nor $\mathbb A^1$ invariance of EM.

For every closed support $Z\subseteq X$, apply the pointed operation to the coherent restriction arrow for $X\setminus Z$ and take homotopy fibers. This gives supported operations and forget-support squares with the actual shifted coefficient fiber. For a non-quasi-compact complement, extend both K-spaces and coefficient targets by the inverse limits over its quasi-compact open subsets, exactly as in the supplied support convention. These are limits of the already constructed natural transformation. For a quasi-compact complement, identification with category-defined supported perfect K-theory still requires the separate localization input; no such category comparison is inferred for an arbitrary open complement.

## Statement references
[[lem-author-32887006bdff-em-p1-model]]

[[lem-author-32887006bdff-actual-orientation]]

[[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input]]

[[lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension]]

[[thm-repair-72891dd58cd0-universal-chern-derived-limit-input]]

[[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]]

[[def-cohomology-with-support]]

## Facts & Assumptions
[A1] Choice and the compatible universe bounds are inherited by the actual coefficients, enhanced perfect theory, coherent limits and imported stack results. Universe existence is a separate premise. Choice permits the countable choices implicit in the surjective-tower derived-limit argument. [[math:def-axiom-of-choice]]

[F1] The actual graded algebra, model and linear Picard orientation supply the coefficient products, actual first class and PBF over every qcqs base. The level/evaluation and shift rule identifies the positive target with $Y_i$. The negative-coefficient result supplies vanishing for the represented model in every negative weight and every cohomological degree, retaining the low-level PBF boundary. The framework fixes the source-native stack and coefficient types. [[lem-author-32887006bdff-em-p1-model]] [[lem-author-32887006bdff-actual-orientation]] [[thm-author-32887006bdff-em-graded-input]] [[thm-author-32887006bdff-p1-spectrum-input]] [[lem-adjudicate-a8be8a17c858-negative-model-coefficients]] [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]]

[F2] The universal cohomology/derived-limit supplier proves natural stack-level stabilization from finite Grassmannian detection and supplies the all-bidegree Chern power-series computation, the countable Milnor sequence and its Mittag–Leffler vanishing. The new stack input gives the pointed mapping-space equivalence from reduced K to the stable bundle stack, the excision qualification from PBF and the smooth quotient-atlas input used below. These are not inferred from smooth-scheme Whitney alone. [[thm-repair-72891dd58cd0-universal-chern-derived-limit-input]] [[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input]]

[F3] The affine-extension lemma extends one smooth operation, with its given homotopies and coefficient diagrams, to all qcqs schemes and the four stated sites. It uses the actual Nisnevich coefficient functor and ordinary sheafification before any optional hypercompletion. [[lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension]] [[lem-author-b747b28c359f-elmanto-morrow-complexes]]

[F4] The full affine comparison supplies the canonical Q/perfect arrow, includes components and bundle object maps, and is an equivalence after either ordinary site sheafification or further hypercompletion. The site helper fixes the four presentations and affine-basis comparison. The nonconnective interface fixes the actual source and coherent pullbacks. [[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]] [[lem-adjudicate-bd5616aab033-qcqs-sites-affine-detection]] [[def-nonconnective-k-spectrum-interface]]

[F5] The support definition supplies coherent inverse-limit extensions, restriction arrows, shifted coefficient fibers and forget-support projections. The stable interface supplies coherent limits and fibers; the fixed realization supplies preservation of limits, fibers and shifts, and the zeroth-space functor preserves limits. [[def-cohomology-with-support]] [[def-stable-spectra-interface]] [[lem-adjudicate-d5306176fce5-coherent-realization]]

[F6] Source reference 0 imports the native geometric category and admissible-theory framework of Asakura–Sato §1.1 and Definitions 2.1 and 2.5, its own simplicial bundle classes in §4, and the completion construction in Definition 5.1, §5 Steps 1–3, Proposition 5.3 and (5.3.1), with the support naturality of §6. The native formula is used only under those hypotheses and with that theory's own stable classes and target; it is not an identification with the actual EM operation. Source reference 1 imports Annala–Iwasa Definition 4.4.1's relation on every $S$-stack: for a rank-$n$ bundle $V$, $\sum_{a=0}^n(-1)^a\xi^a p^*c_{n-a}(V)=0$ in weight $n$ on $\mathbb P(V)$, with $\xi=c_1(\mathcal O(1))$ and $c_0=1$. Lemma 3.2.3 supplies uniqueness, and Lemma 4.4.3 supplies smooth-scheme Whitney. For the actual model, weight-$n$ classes on a smooth stack $P$ are $\pi_0\operatorname{Map}(P,Y_n)$ by [F1]'s evaluation adjunction. Thus equality here is equality of components of one stack mapping space, not merely equality after evaluating at test schemes. The declared stack and derived-limit suppliers provide the additional inputs for the separate actual construction.

[F7] Under [A1], [[math:lem-general-linear-group-scheme-and-its-coordinate-ring]] represents $GL_m$ by $\operatorname{Spec}F[b_{ab},\det(b)^{-1}]$, including $GL_0=\operatorname{Spec}F$ and $GL_1=\mathbb G_m$. Thus invertible block-triangular matrices preserving a line quotient have the indicated affine coordinate presentation. [[math:def-ag-standard-smooth-algebra]] includes localizations of polynomial algebras as standard smooth presentations with no equations. [[math:thm-ag-standard-smooth-geometric-regularity]] identifies these presentations with flatness and geometrically regular fibers, hence smoothness in [[math:def-smooth-morphism-schemes]]. These verify the smooth-group hypothesis of [F2]'s atlas clause in step 1.1. For the discrete trivial-rank stack's diagonal, [[math:lem-clopen-subset-gives-idempotent-decomposition]] gives each clopen subset of an affine test spectrum as a distinguished open defined by an idempotent, and [[math:lem-spectrum-localization-open-immersion]] gives its affine restricted scheme. An affine diagonal means that its pullback over every affine test scheme is affine. Choice in these inputs is inherited from [A1].

[F8] [[lem-adjudicate-63e8cd82ee4c-projective-stack-adapted-frames]] supplies the equivalence $P_n=\mathbb P(U_n)\simeq BH_n$ by the torsor of adapted frames, its inverse descended associated quotient, and its affine diagonal. Its projection and tautological line are the standard representation and the quotient character. Together with the coordinate smoothness check in step 1.1 and [F2], these verify the precise smooth-stack hypothesis needed in [F3].

## Proof
**Given:** The actual model and coefficient functor, $X$, $i\geq1$, Choice and the compatible size bounds.

**Goal:** Construct a coherent natural operation retaining the universal classes, then apply it to the actual restriction and support diagrams.

1.1 First work on the smooth Zariski site over the prime field $F$. By [F1] and [F6] the projective-relation classes are those of the actual oriented coefficient spectrum. Use [F2]'s stack stabilization, including $c_1(\mathcal O)=0$, to get compatible reduced classes on $B_n=\mathrm{Vect}_{n,F}$. Let $T_n$ be the spectrum of reduced maps from $B_n$ to $A_i$, using the ordinary suspension/zeroth-space adjunction. The actual coherent colimit $B_\infty$ gives $\operatorname{Map}_*(B_\infty,Y_i)\simeq\Omega^\infty\lim_nT_n$. In every bidegree [F2]'s restriction is substitution $c_{n+1}=0$, so it is surjective, also on reduced groups after splitting the basepoint value. In particular $\pi_1T_{n+1}\to\pi_1T_n$ is surjective. The supplied Milnor sequence therefore identifies $\pi_0\lim_nT_n$ with $\lim_n\pi_0T_n$. Perform this construction in each positive weight and choose representatives using [A1]; for weight $j$ the finite-rank class is $c_j$ for rank at least $j$ and zero in smaller ranks. In the rest of this step the variable $n$ denotes bundle rank, independently of the positive weight $i$. Its restriction is the prescribed class at every finite rank; this construction uses an actual mapping space and does not presume higher coherences from a list of equalities. Since [F1]'s oriented spectrum satisfies PBF, [F2]'s excision clause permits its shifts as module targets. The pointed mapping-space equivalence in [F2] extends the stable map to reduced K; compose with rank reduction to obtain a pointed map on the K-stack. Restrict it to smooth affines and apply [F3] to extend to all qcqs $F$-schemes, then precompose with the forgetful functor on schemes over the given field. The same extension applied to $B_n=\mathrm{Vect}_{n,F}$ retains the universal bundle map. Put $P_n=\mathbb P(U_n)$, with projection $p$ and tautological quotient line $L$. By [F8] this is $BH_n$, including the actual projection and line, for the stabilizer $H_n$ of the last-coordinate quotient. In an adapted basis it consists of invertible block-triangular matrices. Put $m=n-1$. By [F7], its underlying scheme has coordinate algebra $F[b_{ab},\lambda,v_1,\ldots,v_m,(\lambda\det(b))^{-1}]$, with $1\leq a,b\leq m$; for $m=0$ omit the matrix and vector variables and put $\det(b)=1$. The block inverse exists precisely when the square block and $\lambda$ are invertible, so these coordinates identify the actual stabilizer functor, including over nonreduced algebras. This is a localization of a finite polynomial algebra, hence has a standard smooth presentation with no equations by [F7]. A finite presentation is obtained by adjoining one inverse variable $z$ and imposing $z\lambda\det(b)-1=0$. Its finite presentation, flatness and geometrically regular fibers therefore make this actual affine group smooth over $F$ by [F7]. The quotient-atlas input in [F2] makes its classifying stack smooth and algebraic. Its diagonal is affine by [F8], so [F2]'s left Kan extension applies to this actual stack. We now supply the required homotopy in the correct weight. Let $b_{j,n}:B_n\to Y_j$ be the restriction of the chosen smooth K-operation, and put $b_{0,n}=1$ using the actual coefficient unit, with no pointed weight-zero operation. Let $\ell:P_n\to Y_1$ be the actual first class of $L$. On the smooth stack form the map $R_n:P_n\to Y_n$ given by $R_n=\sum_{a=0}^n(-1)^a\ell^a\cdot p^*b_{n-a,n}$. Each product here is formed by the diagonal of $P_n$ and the specified natural multiplication $Y_a\times Y_b\to Y_{a+b}$ obtained from [F1]'s graded algebra; signs and the finite sum use the additive infinite-loop structure. Use any fixed parenthesization of these products with its supplied coherences. The finite-rank classes of the chosen maps are precisely the universal projective-relation classes. The case $n=1$ and [F6]'s uniqueness also identify $b_{1,1}$ with the oriented Picard class in $\pi_0\operatorname{Map}(B_1,Y_1)$; choose that path, so it restricts and extends as a whole natural homotopy. By [F6], the component of $R_n$ in $\pi_0\operatorname{Map}(P_n,Y_n)$ is zero. Choose a path $h_n:R_n\simeq0$ in this single mapping space, and restrict this path to smooth affines. This is the supplied coherent homotopy to which [F3] is applied; it is not a family of pointwise zero classes. On all affines the already extended $b_{j,n}$, the actual Picard map of $L$, and the same actual coefficient products define a map $\widetilde R_n:P_n\to Y_n$. Its restriction is $R_n$ with the indicated comparison paths, since restriction of natural transformations preserves finite products, postcomposition, units and sums. By the mapping-space equivalence $\rho_n:\operatorname{Map}_{\rm aff}(P_n,Y_n)\simeq\operatorname{Map}_{\rm sm\,aff}(P_n,Y_n)$ in [F3], the induced equivalence on path spaces lifts $h_n$ to a path from this particular $\widetilde R_n$ to zero. Thus the extension is the product expression of the extended classes: no product-preservation property of left Kan extension has been assumed. The right Kan extension and sheafification adjunction of [F3] retain this path on qcqs schemes. More explicitly the target is the limit of its affine-open descent diagram; naturality of its actual multiplications identifies the descended finite product expression with the expression at the scheme itself. Mapping into that target limit descends the entire path and its endpoints. PBF uniqueness in [F1] then identifies the coefficients on every scheme with its projective-relation Chern classes. The trivial-rank stack $\underline{\mathbb Z}=\coprod_{m\in\mathbb Z}\operatorname{Spec}F$ is also a smooth algebraic space: each component has the empty standard smooth presentation in [F7]. Its diagonal over an affine test scheme is the equality locus of two locally constant integer functions. This locus is open and closed, since both functions are constant near each point. By [F7] it is an affine distinguished open with its restricted scheme structure, so the diagonal is affine. Apply the same extension to the zero homotopy on that section; the extended operation therefore vanishes on every trivial-rank class, including negative ranks. Mapping-space equivalences are natural in the coefficient module and the affine extension is a mapping-space adjunction, so they transport given coherent coefficient diagrams and homotopies. This proves the asserted actual operations without global bundle representatives. [A1, F1, F2, F3, F6, F7, F8, construct]

2.1 The single transformation from step 1.1 restricts to the four sites in [F4], and [F3] factors it through their ordinary sheafified K-models with the actual coefficient targets. Write $e:a_\tau\mathcal Q\xrightarrow{\sim}a_\tau\mathcal K$ for [F4]'s canonical sheafified bundle-to-perfect arrow. If $\widehat C_i:a_\tau\mathcal K\to Y_i$ is the operation just obtained, its Q-model operation is $\widehat C_i\circ e:a_\tau\mathcal Q\to Y_i$. Precomposing $\widehat C_i$ with $\mathcal K\to a_\tau\mathcal K$ gives the actual global perfect-K operation; precomposing $\widehat C_i\circ e$ with $\mathcal Q\to a_\tau\mathcal Q$ gives its compatible Q-model operation. Naturality of the sheafification units identifies these through the original arrow $\mathcal Q\to\mathcal K$. Further stalkwise localization of both sides gives the optional local-model map. Separately, under the native $\mathcal C,\Gamma(*)$ hypotheses in the Statement, apply [F6] to $W\in\mathcal C$. Its §4 classes supply its own pointed stable map $c^\Gamma_{i,\infty}$ in §5 Steps 1–2. Proposition 5.3 and Step 3 give exactly the stated projection, completion and abelian-target equivalence (5.3.1). This proves the conditional native clause with $\Gamma_i$ as target; it supplies no comparison to the actual $D_i$ or to the stable map chosen in step 1.1. The actual coherent operations use the separate mapping-space extension. No identification of hypercompleted sections with actual coefficient values is used. All restrictions and a homotopy of operations are obtained by applying functors to the whole transformation. For a non-quasi-compact complement take [F5]'s limits of this transformation on quasi-compact opens; these opens are qcqs by quasi-separatedness, as proved in the support definition. Then take the pointed restriction fibers. Limits and fibers are functorial, and $\Omega^\infty$ preserves both, so the target is the actual shifted motivic support fiber, with its forget-support projection and all the restriction squares. This uses precisely the declared arbitrary-open extension and makes no category-localization assertion beyond its separate hypotheses. Finally [F6]'s $C_0=1$ is unpointed and cannot be inserted into this additive fiber argument. [F2, F3, F4, F5, F6, step 1.1] ∎

## External input
Source reference 0 supplies the conditional native framework, its stable classes and completion formula, and its positive-index and support conventions in [F6]. Its admissibility hypotheses are assumed only for the separately stated theory $\Gamma(*)$; they are not supplied for the actual EM coefficients. Source reference 1 supplies the projective-relation and smooth Whitney facts used in the actual construction. The adapted-frame and affine-diagonal argument is supplied by [[lem-adjudicate-63e8cd82ee4c-projective-stack-adapted-frames]], which records its precise descent imports. The substantial stack, affine Kan extension and derived-limit results are supplied by their separately declared items; their proofs are not reconstructed here. The present two-step construction is a locally authored composition of those premises, so this item is not marked external_input. It makes no native-to-actual comparison and assumes no resolution-dependent motivic admissibility theorem, general determinant coherence theorem or equality of ordinary and hypercomplete coefficient values.

## Reading limits
The incoming source records retain explicitly historical reading descriptions. This assigned repair read the full current theorem, the stack mapping-and-extension input, the coherent-affine-extension lemma, the universal-cohomology/derived-limit supplier and the formulation interfaces of the other declared suppliers. Fresh primary reading for the relation is recorded in source reference 1; fresh descent reading is recorded in the adapted-frame helper. No fresh Asakura–Sato reading or prior acceptance is inherited. The theorem Statement is unchanged, so no direct-consumer interface change is proposed and no downstream whole-body review is claimed. This is a repair proposal, with no independent acceptance, publication or original-author defect attribution.
