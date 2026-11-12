---
id: lem-adjudicate-a0c3ec58d5af-classical-smooth-site
kind: lemma
title: Classical-base comparison of the native smooth site and bundle constructions
status: published
domain: mathematics
deps:
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - lem-adjudicate-cc64bae62648-derived-zariski-site-closure
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-projective-bundle-scheme
  - math:thm-projective-bundle-represents-line-quotients
dependency_roles:
  thm-author-4f94f7982b0d-p1-spectrum-input: mathematical-premise
  lem-adjudicate-cc64bae62648-derived-zariski-site-closure: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-projective-bundle-scheme: mathematical-premise
  math:thm-projective-bundle-represents-line-quotients: mathematical-premise
formulation_deps:
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-projective-bundle-scheme
argument_deps:
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - lem-adjudicate-cc64bae62648-derived-zariski-site-closure
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-projective-bundle-scheme
  - math:thm-projective-bundle-represents-line-quotients
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
sources:
  references:
    - title: Can Yaylali, Notes on derived algebraic geometry, arXiv:2208.01506v1
      url: https://arxiv.org/pdf/2208.01506v1
      locator: Definition 2.7, printed p. 12; Definition 2.53, printed p. 23; Remark
        and Definition 3.35, printed pp. 32–33, including properties (2)–(4).
      statement: Animated smoothness means classical smoothness on pi_0 and scalar
        extension of higher homotopy groups. The discrete-scheme inclusion is
        fully faithful, preserves smooth maps and flat pullbacks; flat objects
        over classical bases are classical. Modules over an animated ring are
        modules over its underlying E-infinity ring.
      hypotheses: Animated rings and derived schemes; compatible universes; smooth
        maps are flat. The classical-base consequence here is used only for
        smooth qcqs test schemes.
      reading_limits: Freshly read Definition 2.7, the complete two-condition
        Definition 2.53, and Remark and Definition 3.35 with properties (1)–(4)
        in the web extraction of the versioned primary PDF. The cited
        foundational proofs remain imported; no equivalence of animated and
        spectral rings is used.
    - title: Jacob Lurie, Spectral Algebraic Geometry, February 2018 author manuscript
      url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
      locator: Definition 11.2.3.1; opening of §11.2.4 and Proposition 11.2.4.1;
        Definition 11.2.5.5 and Example 11.2.5.7; §5.4 opening caveat (b),
        Construction 5.4.1.3, Remarks 5.4.1.2 and 5.4.1.6, Proposition 5.4.1.7
        and Example 5.4.1.8; Construction 5.4.2.1 and Remarks 5.4.2.2–5.4.2.3.
      statement: Fiber smoothness includes flatness and agrees with classical
        smoothness for finitely presented ordinary algebras. The flat projective
        space and its twisting line restrict over ordinary bases to the
        classical constructions. Its interpretation as line-quotient moduli is
        used here only on discrete tests, not on arbitrary spectral algebras.
      hypotheses: Connective spectral geometry with fiber smoothness and chart-defined
        flat projective spaces. The classical smoothness criterion assumes
        finitely presented ordinary algebras. The projective and line-quotient
        comparison is restricted to the smooth site over a classical base, whose
        test schemes are proved discrete in step 1.1.
      reading_limits: Freshly read the named smoothness statements, all five
        conditions of Proposition 11.2.4.1, the projective-space caveat,
        construction, chart proposition and ordinary-base example, and the
        twisting-line construction and base-change remarks in the web tool’s
        indexed primary-author PDF extraction. Direct full-PDF opening exceeded
        the tool size limit. Foundational proofs are imported. No moduli
        identification over arbitrary spectral rings is asserted.
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Corollary 4.2.4.7, printed p. 531; Definition 7.1.3.17 and Proposition
        7.1.3.18 with its proof, printed p. 1219; Definition 7.2.2.10, Remark
        7.2.2.12 and Proposition 7.2.2.13, printed p. 1240.
      statement: Discrete commutative algebra objects form the ordinary category of
        commutative algebras. Flat modules over discrete rings are discrete,
        with the usual flatness and tensor homotopy-group formula. Maps from the
        rank-one free module are the underlying mapping space from the tensor
        unit.
      hypotheses: Connective base rings for the discrete-algebra assertion; k=infinity
        for commutative algebras. The full discrete subcategory is intended in
        Proposition 7.1.3.18, as its preceding definition and proof specify. The
        flat-module assertions use the stated spectral flatness; the free-module
        assertion uses a monoidal category and its algebra object.
      reading_limits: Freshly read Corollary 4.2.4.7, Definition 7.1.3.17 and
        Proposition 7.1.3.18 with its proof, and Definition 7.2.2.10, Remark
        7.2.2.12 and Proposition 7.2.2.13 with its short proof in the live
        primary PDF extraction. The discrete-subcategory qualification in
        Proposition 7.1.3.18 follows its definition and proof. Imported module
        foundations are not reconstructed.
    - title: Toni Annala and Ryomei Iwasa, Motivic spectra and universality of
        K-theory, author PDF
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §§2.1.1–2.1.5, printed p. 14; Lemma 3.2.3 and its proof, printed p. 23.
      statement: Vector bundles form the moduli stacks Vect_n, with Pic = Vect_1;
        Grassmannians of a trivial bundle classify locally free quotients. The
        bundle construction on a stack in Lemma 3.2.3 is reduced to
        representables and trivial bundles by a limit argument and Zariski
        descent.
      hypotheses: The source’s smooth qcqs Zariski site over a qcqs derived base. Only
        its bundle and quotient conventions and descent reduction are imported
        here. No projective bundle formula for a particular spectrum is inferred
        from these conventions.
      reading_limits: Freshly read §§2.1.1–2.1.5 and the statement and full
        two-sentence proof of Lemma 3.2.3 in the live author PDF extraction. The
        arbitrary-bundle comparison below is local work on discrete tests; this
        citation does not identify flat spectral projective space with quotient
        moduli on all spectral algebras.
---

## Statement
Assume the Axiom of Choice and fixed compatible Grothendieck universes $U\in V\in W$, with $\omega\in U$, and the supplied site bounds. Let $S$ be a classical qcqs scheme. Regard $S$ as a discrete scheme in the native derived geometry of the supplied motivic framework. The inclusion of the ordinary category of smooth qcqs $S$-schemes, with all $S$-morphisms, into its native derived smooth qcqs site is an equivalence of Zariski sites. This holds in animated geometry and, separately, in connective spectral geometry with fiber smoothness and the usual flat projective spaces. No comparison between the two geometries away from these classical-base smooth sites is asserted.

Restriction therefore identifies their categories of ordinary Zariski sheaves of spaces, with cartesian products, pointed smash products, disjoint basepoints and cotensors, and their ordinary-coefficient and projective-line spectrum constructions. The identification preserves the Picard and finite-rank vector-bundle stacks, coordinate-pointed projective spaces, quotient projective bundles, their tautological quotient lines and the trivialization at infinity. Consequently a spectrum specified on the classical site by coefficient functors, products and pointed bonding classes transports with those same data; class-power maps and their pullbacks are preserved.

## Statement references
[[thm-author-4f94f7982b0d-p1-spectrum-input]]

[[lem-adjudicate-cc64bae62648-derived-zariski-site-closure]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-scheme-over-base]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-projective-bundle-scheme]]

[[math:thm-projective-bundle-represents-line-quotients]]

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] with the stated nested universes and site bounds. Choice is retained in the imported homotopical foundations and small presentations; universe existence is separately assumed.

[F1] Reference 0 supplies the animated smoothness criterion and the fully faithful discrete-scheme inclusion, including preservation of smooth morphisms and pullbacks along flat morphisms. In an affine smooth map $A\to B$, it gives $\pi_iB\cong\pi_iA\otimes_{\pi_0A}\pi_0B$. Reference 0 also defines animated modules through the underlying E-infinity ring, so the free-module adjunction of reference 2 applies in this instance as well. These are primitive imported inputs, not a comparison of the ring categories.

[F2] References 1 and 2 supply the spectral alternative: fiber smooth maps are flat, flat algebras over a discrete base are discrete, and on ordinary finitely presented algebras fiber smoothness is classical smoothness. Reference 2 also identifies discrete commutative algebra objects with ordinary commutative algebras, with discrete mapping spaces, and supplies the free-module mapping adjunction. Only these interfaces are used.

[F3] [[lem-adjudicate-cc64bae62648-derived-zariski-site-closure]] identifies native opens and qcqs bounds with classical truncation and supplies the native projective-line charts and products. The native site, vector-bundle stacks, quotient convention, coefficient categories, pointed tensors and spectrum constructions are those of [[thm-author-4f94f7982b0d-p1-spectrum-input]]. Ordinary schemes over a base, qcqs and smoothness use [[math:def-scheme-over-base]], [[math:def-quasi-compact-and-quasi-separated-scheme]] and [[math:def-smooth-morphism-schemes]]. Ordinary bundles and quotient projective bundles use [[math:def-locally-free-sheaf-finite-rank]] and [[math:def-projective-bundle-scheme]].

[F4] Spell out the line-quotient convention of [[thm-author-4f94f7982b0d-p1-spectrum-input]] on the stated smooth site, using the bundle and quotient moduli of reference 3. A bundle $B$ on an $S$-stack $X$ is a map from $X$ to the stack of finite-rank bundles. Over $x:T\to X$, the fiber of $\mathbb P_X(B)\to X$ is the groupoid of pairs $(L,q)$, where $L$ is a line bundle on $T$ and $q:x^*B\to L$ is a bundle map surjective on $\pi_0$; arrows are line isomorphisms commuting with $q$. Pullback acts on these data, and paths in $X(T)$ transport them. The tautological quotient is the universal pair; its line map to $\mathrm{Pic}$ forgets $q$. The local proof below verifies this construction is a sheaf and compares it with the classical projective bundle using [[math:thm-projective-bundle-represents-line-quotients]], including its universal quotient and base-change compatibility. For the separately specified flat spectral projective spaces, reference 1 supplies the ordinary-base chart and twisting-line comparison. Its §5.4 caveat (b) precludes extending the quotient-moduli identification to all spectral algebras; only the present smooth-site restriction is used.

## External input
Import the primitive animated interfaces in reference 0 and the spectral and module interfaces in references 1 and 2, with their individual hypotheses. In reference 2, Proposition 7.1.3.18 is used for the full subcategory of discrete algebras, as specified in its preceding Definition 7.1.3.17 and its proof; the displayed statement omits the discrete superscript. Reference 3 supplies the native bundle-moduli and quotient convention used in [F4]; reference 1 supplies the flat spectral projective-space and twisting-line comparison over ordinary bases. The site equivalence, the sheaf property of the explicit quotient construction, and its compatibility with the particular constructions are proved below. The imports do not identify arbitrary animated rings with arbitrary connective spectral rings.

## Proof
**Given:** The classical qcqs base $S$, one of the stated native geometries, and [A1]–[F4].

**Goal:** Compare the smooth sites and the actual objects and operations used by the orientation argument.

1.1 On an affine chart $\operatorname{Spec}A$ of the classical base, a smooth native affine chart $\operatorname{Spec}B$ over it has discrete $B$: in animated geometry [F1] gives $\pi_iB=0$ for $i>0$ because $\pi_iA=0$; in spectral geometry use flatness and the discrete-base assertion of [F2]. Its map on ordinary rings is smooth, by [F1] or the classical criterion in [F2]. Conversely an ordinary smooth map gives a native smooth map, using [F1] in the animated instance and the same classical criterion of [F2] affine-locally in the spectral instance. These assertions glue on affine opens, so every smooth native object over $S$ is classical and conversely. The discrete inclusion is fully faithful on affine charts by [F1] or [F2]; morphisms of schemes glue from these chartwise morphisms, so it is fully faithful globally, including for all $S$-morphisms between smooth objects. By [F3], qcqs is the same property and open restrictions have the same underlying opens. A family covers precisely when these opens cover the underlying space. Thus the inclusion is an equivalence of the specified sites, with their covering sieves. [A1, F1, F2, F3, given]

2.1 Precomposition with the site equivalence of step 1.1 identifies sheaves and has inverse precomposition with a quasi-inverse. Their products, limits, colimits and adjunctions correspond, hence so do pointing, smash, disjoint basepoints, cotensors and the ordinary and symmetric projective-line spectrum constructions of [F3]. On a discrete affine chart $\operatorname{Spec}A$, the free-module adjunction of [F2], also applicable to animated modules by [F1], identifies the space of maps $A^r\to A^s$ with the discrete set of $s$-by-$r$ matrices over $A$. Composition and pullback are the usual matrix operations. Thus all bundle maps, as well as isomorphisms, agree locally. Gluing free modules and their maps identifies the bundle groupoids and their morphism sets on every test scheme, naturally under pullback; rank one identifies the pointed Picard stack. Now apply the explicit quotient construction of [F4]. By step 1.1 every test $T$ is classical, so surjectivity on $\pi_0$ is ordinary sheaf surjectivity. It is locally a split surjection: trivialize $L$ and lift its frame locally along $q$ to obtain a right inverse. Thus the quotient condition is local and preserved by pullback. Bundles, bundle maps and isomorphisms glue, and surjectivity is local, so these pairs and arrows satisfy Zariski descent. The bundle-map comparison therefore identifies the entire quotient groupoids, not just their isomorphism classes. For a bundle on a test scheme, the representing bijection of [[math:thm-projective-bundle-represents-line-quotients]] identifies their classes with maps to the classical projective bundle. An automorphism $a$ of a pair satisfies $a q=q$, hence $a=1$ by local surjectivity; the groupoid is therefore equivalent to this discrete represented sheaf. The theorem identifies the universal pair with the actual tautological quotient and is natural in test schemes and base change. For a trivial bundle of positive rank $r$ this gives $\mathbb P^{r-1}$ with its coordinate sections and standard quotient; rank zero gives the empty quotient sheaf, and varying rank is handled on the trivializing opens. In the animated instance this is the rank-one quotient convention of reference 3. In the flat spectral instance, reference 1 identifies the flat projective space over each discrete affine base with the classical projective space and its twisting line. In its monoid charts the degree-one coordinate sections give that same quotient, so it realizes the same quotient sheaf on these tests; no such claim is used over non-discrete spectral rings. In both instances changes of bundle frame act by the same matrices on the actual quotients, so the local identifications glue with their tautological lines. For arbitrary $X$, the construction of [F4] applies over each $x:T\to X$; its compatibility with pullback and paths in $X(T)$ gives an equivalence over $X$, carrying the line map to $\mathrm{Pic}$ to the classical one. This also proves compatibility with the test-scheme descent construction of reference 3. The coordinate quotient at infinity sends the selected basis vector to $1$ and the other vector to $0$, so its trivialized line and basepoint are preserved. Finally the transported coefficient functors, products and pointed bonding classes have the same values and maps on the identified tests. Their class-power maps and pullbacks consequently correspond as actual maps under this equivalence, not merely on component groups. [A1, F1, F2, F3, F4, step 1.1] ∎
