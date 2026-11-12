---
id: thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
kind: theorem
title: K-stack mapping spaces and extension from smooth affine schemes
domain: mathematics
deps:
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-axiom-of-choice
  - math:def-algebraic-stack-and-inertia
formulation_deps:
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-axiom-of-choice
  - math:def-algebraic-stack-and-inertia
argument_deps:
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-10deda40f9da-affine-k-space-sheafification
  - math:def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated 14 April 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §2.2.1–2.2.6, printed pp. 14–15; §5.1.1–5.1.4, printed pp. 33–34,
        particularly the mapping-space equivalences in the proof of Theorem
        5.1.4; Lemmas 3.3.4–3.3.5, pp. 24–25
      statement: The rank-reduced K-theory stack is the plus construction of the
        stabilized vector-bundle stack. Precomposition induces an equivalence on
        mapping spaces into the infinite-loop targets of the indicated excisive
        oriented modules. PBF implies elementary blowup excision for an oriented
        spectrum.
      hypotheses: Use the source-native qcqs derived base S and its smooth Zariski
        site with compatible universes. In §5.1 coefficients are multiplicative
        and compactly generated, and P1 cotensor preserves filtered colimits. E
        is homotopy commutative and orientable; M is an E-module in the
        elementary-excision localization. For the application M is a shift of E
        satisfying PBF; Lemma 3.3.5 supplies excision. The result used is the
        displayed mapping-space equivalence inside the proof, not the
        additive-morphism conclusion of the theorem.
      reading_limits: This assignment read the live author PDF extraction of
        §§2.1–2.2.6, the full §5.1.1–5.1.4 statement and displayed proof, and
        §§3.3.1–3.3.5 including their displayed proofs. The PDF is dated 14
        April 2025. The plus-construction and higher-category foundations and
        Theorem 2.4.5 are imported through the source and the declared
        framework, not reconstructed. The pointed version is obtained by the
        evaluation-fiber argument recorded below. No finite-rank coherent
        stabilization is inferred from component equalities.
    - title: Elmanto–Hoyois–Khan–Sosnilo–Yakerson, Modules over algebraic cobordism,
        author-hosted PDF
      url: https://hoyois.app.uni-regensburg.de/papers/deloop3.pdf
      locator: Appendix A, Proposition A.0.4 and its proof, Lemma A.0.5 and its proof,
        Example A.0.6(1), printed pp. 33–35
      statement: The affine K-space and every smooth algebraic stack with quasi-affine
        diagonal, regarded as a space-valued functor of algebras, are left Kan
        extended from smooth algebras. This includes fixed-rank vector-bundle
        stacks. The assertions concern spaces before A1 localization.
      hypotheses: Arbitrary commutative base ring R (classical restriction suffices
        here). K denotes the group-completion K-space on affine rings; the
        supplied full affine comparison identifies it with the zeroth space of
        the specified perfect theory. The stack assertion requires smoothness
        and quasi-affine diagonal. All Kan extensions are coherent space-valued
        ones in the fixed universe. No A1 localization is applied.
      reading_limits: This assignment read the live primary PDF extraction of the
        Appendix A opening, Proposition A.0.4 and its complete displayed proof,
        Lemma A.0.5 and its displayed proof, and Example A.0.6(1). The PDF is
        dated 12 November 2020. The application uses only classical rings and
        smooth algebras; it does not compare different derived-geometric models.
        Popescu approximation, algebraization, nilcompleteness and
        group-completion foundations invoked by the source remain imported. No
        transfer or Thom-spectrum result or separate Nisnevich-topos comparison
        is imported from this paper.
    - title: The Stacks Project, the algebraic stack associated to a smooth groupoid
      url: https://stacks.math.columbia.edu/tag/04TJ
      locator: Section 94.17, Lemmas 94.17.1–94.17.2 and Theorem 94.17.3, statements
        and displayed proofs
      statement: A smooth groupoid in algebraic spaces has an algebraic quotient
        stack, and its object-space map to the quotient is smooth and
        surjective.
      hypotheses: A groupoid (U,R,s,t,c) in algebraic spaces over a scheme S, with
        smooth source and target maps. Apply to U=Spec F and R a smooth affine
        group over the prime field F. This gives the trivial-torsor atlas; the
        affine-diagonal condition for the particular matrix stabilizer is
        checked locally in the consumer argument.
      reading_limits: This assignment read the complete live section 94.17, including
        the three displayed proofs. The quotient-stack construction and descent
        inputs cited there are imported, not reconstructed. No assertion about
        affineness of every quotient diagonal is attributed to this section.
dependency_level: 14
status: published
dependency_roles:
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  lem-adjudicate-10deda40f9da-affine-k-space-sheafification: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-algebraic-stack-and-inertia: mathematical-premise
---

## Statement
Assume the Axiom of Choice and compatible size universes. Use the source-native smooth Zariski stack category over a qcqs base $S$. Write $\mathrm{Vect}_{n,S}$ for the stack of rank-$n$ vector bundles, pointed by $\mathcal O^n$, and $B_\infty=\operatorname*{colim}_n\mathrm{Vect}_{n,S}$ under addition of a trivial line. Let $\mathcal K$ be the K-theory stack and let $\widetilde{\mathcal K}=\operatorname{fib}(\mathrm{rk}:\mathcal K\to\underline{\mathbb Z})$. The rank map has its trivial-bundle section; subtraction of this section gives rank reduction. Let $E$ be a homotopy-commutative oriented motivic ring satisfying PBF, with the coefficient compactness and multiplicativity hypotheses of the framework; source §2.2.6 includes the smooth stack category itself among these coefficients. For an $E$-module $M$ in the elementary-blowup-excision localization, put $Y=\Omega^\infty_{\mathbb P^1}M$. Then the canonical reduced object map $u:B_\infty\to\widetilde{\mathcal K}$ induces
$$u^*:\operatorname{Map}_*(\widetilde{\mathcal K},Y)\simeq\operatorname{Map}_*(B_\infty,Y).$$
This is an equivalence of mapping spaces, natural in $M$; it can transport coherent diagrams already given in these mapping spaces. It asserts no higher coherent stabilization from a list of component classes alone. Elementary blowup excision means sending the blowup square of $\mathbb A^n_T$ at its zero section to a pullback square; for oriented spectra it is equivalent to PBF. Thus shifts of the actual oriented PBF coefficient spectrum are permitted here.

For a fixed commutative base ring $R$, let $j$ include smooth $R$-algebras into all $R$-algebras. On classical affine rings, the K-space $\mathcal K_{\rm aff}$ and the fixed-rank stack $\mathrm{Vect}_n$ are left Kan extended along $j$. Precisely, if $L\dashv j^*$ is the space-valued left Kan extension/restriction adjunction, its counits $Lj^*\mathcal K_{\rm aff}\to\mathcal K_{\rm aff}$ and $Lj^*\mathrm{Vect}_n\to\mathrm{Vect}_n$ are equivalences. The analogous assertion holds for every smooth algebraic stack with quasi-affine diagonal. All functors and adjunctions here retain higher coherences. The affine K-space is identified with the specified perfect K-space using the canonical full affine comparison, including components and bundle object maps.

For the classical-stack clause, an algebraic stack has the smooth-presentation and representable-diagonal meaning of the declared algebraic-stack definition. Smooth over $R$ means that a smooth atlas is smooth over $R$; quasi-affine diagonal means that every base change of the diagonal to a scheme is represented by a quasi-affine scheme over that scheme. If $(U,R_1,s,t,c)$ is a smooth groupoid in algebraic spaces, its quotient stack is algebraic and $U$ maps smoothly and surjectively to it. In particular a smooth affine group $G$ over a field $F$ has the smooth trivial-torsor atlas $\operatorname{Spec}F\to BG$, where $BG=[\operatorname{Spec}F/G]$ is the stack of torsors and their isomorphisms. A $G$-torsor is locally isomorphic to $G$ with its translation action in the faithfully flat topology of locally finitely presented covers. The quasi-affine-diagonal hypothesis in the preceding Kan-extension clause must still be checked in each application.

## Statement references
[[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]]

[[def-nonconnective-k-spectrum-interface]]

[[lem-adjudicate-10deda40f9da-affine-k-space-sheafification]]

[[math:def-axiom-of-choice]]

[[math:def-algebraic-stack-and-inertia]]

## External input
The mapping-space equivalence, rank splitting and reduced plus description are imported from source record 0, at the displayed equivalences in the proof of Theorem 5.1.4. Taking fibers of evaluation at the trivial bundle gives the pointed version written here. Lemmas 3.3.4–3.3.5 give the excision qualification. These statements do not require the desired Chern map to be additive. Source record 1 supplies the affine left Kan extension assertions. Source record 2 supplies the smooth quotient atlas, with the classical algebraic-stack type fixed by the declared definition. Their hypotheses and reading limits are recorded separately; the specified perfect model is matched by the declared full affine supplier. No proof of these substantial imported results is claimed here. The assumed Choice and size bounds are those of the framework and the supplied affine comparison.
