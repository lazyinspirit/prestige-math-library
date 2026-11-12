---
title: Actual raw simplicial cycles satisfy descent without separatedness
status: published
research_item: lem-adjudicate-f6007757a8ac-raw-simplicial-descent
dependency_level: 11
sources:
  references:
    - title: Marc Levine, Techniques of localization in the theory of algebraic cycles
      url: https://citeseerx.ist.psu.edu/document?doi=9622ccdf2df87d21c760a444b7b04cd40b1662b0&repid=rep1&type=pdf
      locator: §2.2 p.6; Theorems1.9 and6.12; §6.11 pp.37–38; §7 pp.43–44, proving
        Theorem1.7
      statement: For a finite-type scheme X over a field k and open V, the raw
        simplicial restriction cokernel z_q(V,*)/im(z_q(X,*)) is acyclic. The
        general finite-type proof uses one simultaneous simplex-factor moving
        map/homotopy for a finite affine cover.
      hypotheses: Schemes essentially finite type in §2.2, without a separatedness
        convention. The actual application is finite type over a field. Section7
        explicitly takes a regular noetherian base of dimension at most one; a
        field is its zero-dimensional semilocal PID case. Infinite residue
        fields are used for the first moving statement; Theorem6.12 plus
        Lemma7.1 and finite-flat pull/push of coprime degrees handle finite
        fields. Smoothness and pure dimension are needed here only to rewrite
        the homological index q componentwise as dim(X_component)-r.
      reading_limits: "Historical reading record retained from the incoming item: This
        assignment read the hash-matched primary 53-page preprint, SHA256
        0b4192a0fc037cdd5f8c93f74472ce0924db43fb65d86668239e7d414b2f0504,
        pp.1–4,6,37–38,43–44 in text extraction: exact scope, finite-affine
        reduction, moving theorem statement and complete localization argument.
        The remote URL returned 403. Deep moving/blow-up constructions and
        journal bytes were not read or reconstructed. The current localization
        supplier carries this exact broader external input; the new local
        argument uses its stated theorem. Current repair read the declared
        supplier, not this primary document; no fresh reading of this source is
        claimed."
    - title: Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology (xprova
        author PDF)
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Definition19.10, Theorem19.11, Proposition19.12 and proof,
        printedpp168–169/PDF179–180
      statement: Raw cycle localization implies the Zariski Mayer–Vietoris square by
        comparison of the two localization rows with the identical
        closed-complement kernel; raw cycles agree with their Zariski
        hypercohomology on separated schemes in the source convention.
      hypotheses: The source standing scheme convention is separated. Here only its
        quasi-projective/open-affine comparison and the explicit formal two-row
        argument are used from the source; broad nonseparated localization is
        independently supplied by Levine.
      reading_limits: "Historical reading record retained from the incoming item: This
        assignment read primary xprova printed p.5 and pp.168–169: the
        convention, complete Definition19.10, Theorem19.11 statement,
        Proposition19.12 with proof and proof of19.1. Only the separated
        affine/quasi-affine cases are imported. The finite-cover extension below
        is supplied locally. Current repair read the declared supplier, not this
        primary document; no fresh reading of this source is claimed."
    - title: The Stacks Project, Unbounded Mayer–Vietoris
      url: https://stacks.math.columbia.edu/tag/08BX
      locator: Lemma 20.33.4 (tag 08BX), triangle and complete displayed proof
      statement: Unbounded derived sections have a functorial binary-open
        Mayer–Vietoris triangle, represented by the short exact sequence of
        sections of a termwise injective K-injective complex.
      hypotheses: A ringed space and a cover by two opens; apply to the Zariski space
        with the constant integer ring sheaf, whose modules are abelian sheaves.
        No separatedness or boundedness is required.
      reading_limits: Read the live statement and full displayed proof in this repair.
        Import its triangle and section-sequence construction. Linked
        injective-sheaf exactness and triangle foundations were not
        reconstructed; no revision was pinned.
    - title: The Stacks Project, K-injectives in Grothendieck categories
      url: https://stacks.math.columbia.edu/tag/079P
      locator: Theorem 19.12.6 (tag 079P), complete statement and displayed proof
      statement: Every complex in a Grothendieck abelian category admits a functorial
        quasi-isomorphism to a K-injective complex with injective terms.
      hypotheses: A Grothendieck abelian category; apply to abelian sheaves as modules
        over the constant integer sheaf. Retain AC and fixed universe bounds.
      reading_limits: Read the statement and displayed transfinite construction. Its
        cardinal, generator and transfinite-existence prerequisites are
        imported, not independently reconstructed.
    - title: The Stacks Project, Cohomology of unbounded complexes
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Section 21.19 (tag 07A5), opening paragraphs, clause (2) and
        object-sections example (2)
      statement: Modules on a ringed site form a Grothendieck abelian category, and
        additive evaluation has an unbounded right derived functor computed on a
        K-injective resolution.
      hypotheses: A size-bounded ringed site; use the open-set site with constant
        integer coefficients and evaluation into abelian groups.
      reading_limits: Read the indicated opening and clauses. Their linked generator
        and exact-colimit foundations were not reconstructed. No later results
        of the section are used.
    - title: The Stacks Project, Quasi-affine finite-type morphisms
      url: https://stacks.math.columbia.edu/tag/0B3H
      locator: Lemma 29.41.7 (tag 0B3H), complete statement and one-line proof
      statement: A quasi-affine morphism of finite type is quasi-projective in the
        relatively ample convention.
      hypotheses: Apply to an open subscheme O of a finite-type affine k-scheme. Step
        1.1 proves that O is smooth finite type and Noetherian, using references
        7–8 and the declared local-finite-type and smoothness interfaces. Its
        open embedding into the affine scheme makes it quasi-affine over k;
        quasi-compactness follows from Noetherianity.
      reading_limits: Read the live statement and its reference to the
        relative-ampleness lemma. That substantial lemma is imported, not
        reconstructed; the conversion to an immersion over the field is
        reference 6.
    - title: The Stacks Project, Locally quasi-projective and H-quasi-projective
      url: https://stacks.math.columbia.edu/tag/01VZ
      locator: Lemma 29.41.6 (tag 01VZ), equivalence and complete displayed proof
      statement: A locally quasi-projective morphism admits a target-open cover on
        which it is H-quasi-projective; over an affine target the proof gives an
        immersion into finite-dimensional projective space.
      hypotheses: Apply over Spec k, which has one nonempty open, to the finite-type
        quasi-projective morphism supplied by reference 5. The
        H-quasi-projective conclusion uses the quasi-compact immersion
        convention of the declared library definition.
      reading_limits: Read the equivalence and affine-target proof. Its
        ample-line-bundle and immersion theorems remain imported. Only the
        field-base conversion to the declared immersion convention is used.
    - title: The Stacks Project, Noetherian sources of finite-type morphisms
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6 (tag 01T6), statement and displayed proof
      statement: A finite-type morphism to a Noetherian scheme has Noetherian source.
      hypotheses: A morphism X to S, S Noetherian and the morphism of finite type.
        Apply with S = Spec k and the given finite-type X/k; separatedness is
        not required.
      reading_limits: Read the live statement and displayed proof in this assignment.
        Import the stated implication. The linked Noetherian-algebra theorem is
        not reconstructed; no revision is pinned.
    - title: The Stacks Project, Noetherian locally closed subschemes
      url: https://stacks.math.columbia.edu/tag/02IK
      locator: Lemma 28.5.6 (tag 02IK), statement and displayed proof hint
      statement: A locally closed subscheme of a Noetherian scheme is Noetherian; in
        particular this applies to every open subscheme.
      hypotheses: A Noetherian ambient scheme and a locally closed subscheme. Apply
        only to open subschemes W of X after reference 7 establishes
        Noetherianity of X.
      reading_limits: Read the live statement and displayed hint in this assignment;
        the source omits a full proof. Import the conclusion, without claiming
        reconstruction of the quotient, localization or Noetherian-space
        foundations; no revision is pinned.
---

PDF p. 4: Smooth raw cycle comparison; PDF p. 16: Supported generic localization

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-adjudicate-f6007757a8ac-separated-cycle-descent-input](item-thm-adjudicate-f6007757a8ac-separated-cycle-descent-input)
- [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)
- [lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)
- [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)
- [def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit)
- [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)
- [math:lem-closed-immersion-local-on-target](https://alphabetamath.cc/item/lem-closed-immersion-local-on-target)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)
- [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:thm-long-exact-sequence-in-homology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-homology)
- [math:thm-five-lemma-for-a-morphism-of-long-exact-sequences](https://alphabetamath.cc/item/thm-five-lemma-for-a-morphism-of-long-exact-sequences)
- [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [` Marc Levine, Techniques of localization in the theory of algebraic cycles · §2.2 p.6; Theorems1.9 and6.12; §6.11 pp.37–38; §7 pp.43–44, proving Theorem1.7 `](https://citeseerx.ist.psu.edu/document?doi=9622ccdf2df87d21c760a444b7b04cd40b1662b0&repid=rep1&type=pdf)
- [` Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology (xprova author PDF) · Definition19.10, Theorem19.11, Proposition19.12 and proof, printedpp168–169/PDF179–180 `](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf)
- [` The Stacks Project, Unbounded Mayer–Vietoris · Lemma 20.33.4 (tag 08BX), triangle and complete displayed proof `](https://stacks.math.columbia.edu/tag/08BX)
- [` The Stacks Project, K-injectives in Grothendieck categories · Theorem 19.12.6 (tag 079P), complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/079P)
- [` The Stacks Project, Cohomology of unbounded complexes · Section 21.19 (tag 07A5), opening paragraphs, clause (2) and object-sections example (2) `](https://stacks.math.columbia.edu/tag/07A5)
- [` The Stacks Project, Quasi-affine finite-type morphisms · Lemma 29.41.7 (tag 0B3H), complete statement and one-line proof `](https://stacks.math.columbia.edu/tag/0B3H)
- [` The Stacks Project, Locally quasi-projective and H-quasi-projective · Lemma 29.41.6 (tag 01VZ), equivalence and complete displayed proof `](https://stacks.math.columbia.edu/tag/01VZ)
- [` The Stacks Project, Noetherian sources of finite-type morphisms · Lemma 29.15.6 (tag 01T6), statement and displayed proof `](https://stacks.math.columbia.edu/tag/01T6)
- [` The Stacks Project, Noetherian locally closed subschemes · Lemma 28.5.6 (tag 02IK), statement and displayed proof hint `](https://stacks.math.columbia.edu/tag/02IK)


## Statement
Assume the Axiom of Choice and fixed Grothendieck universe bounds for the following sheaf and derived constructions; universe existence is a hypothesis. Let $k$ be any field, $X$ a smooth finite-type $k$-scheme, without a separatedness assumption, and $r\geq0$ an integer. For each open subscheme $W\subseteq X$, put $C(W)=z^r(W,\bullet)$, the unnormalized simplicial Bloch complex, with open-restriction maps on its generators. Reindex homological degree $n$ as cohomological degree $-n$, keeping the same differential. The small Zariski site has these opens as objects, inclusions as arrows and families whose union is the target as covers. Let $aC$ be degreewise abelian sheafification. The canonical unit, represented for a K-injective resolution $aC\to I$ by
$$\eta_{C,X}:C(X)\longrightarrow(aC)(X)\longrightarrow I(X)=R\Gamma(X_{\mathrm{Zar}},aC),$$
is a quasi-isomorphism, naturally for open restriction. Equality here means a representative of the derived value. The raw presheaf $C$ also takes every binary open cover $W=U\cup V$ to a homotopy-cartesian square: the canonical map from $C(W)$ to the homotopy fiber of the difference map $C(U)\oplus C(V)\to C(U\cap V)$ is a quasi-isomorphism. For a homological chain map $f:A\to B$, use the fiber model $F_n=A_n\oplus B_{n+1}$ with $d_F(a,b)=(d_Aa,f(a)-d_Bb)$. A quasi-isomorphism induces isomorphisms on all homology groups, equivalently all cohomology groups after reindexing. These conclusions establish the canonical comparison for the original raw definition, without replacing it by hypercohomology.

## Statement references
[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

[def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit)

[lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

## Facts & Assumptions
**Given:** $k,X,r,C$, Choice and the compatible universe bounds in the Statement; all products and opens carry their $k$-scheme structures.

**Goal:** Establish raw binary Mayer–Vietoris and then the actual sheafification-unit equivalence on $X$ and all its opens.

[A1] Choice is retained to invoke the Bloch and derived-resolution suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The field, structure-map, smoothness, finite-type and separatedness conventions are [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) and [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base). No separatedness of the structure morphism is assumed.

[F1] Nonseparated raw simplicial localization makes every open-restriction cokernel acyclic. [thm-author-75596422a482-bloch-localization-input](item-thm-author-75596422a482-bloch-localization-input)

[F2] Bloch complexes are free on their admissible integral generators with the specified ordered faces and local-length boundary. For opens in the smooth finite-type domain, open restriction is a chain map with the generator rule in the Statement. Iterated restrictions are nested intersections, so identities and composition agree, including empty restrictions. Supported admissible generators form exactly the restriction kernel. An acyclic restriction cokernel identifies that kernel with the indicated actual homotopy fiber. [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction) [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel) [lem-author-75596422a482-kernel-homotopy-fiber](item-lem-author-75596422a482-kernel-homotopy-fiber)

[F3] The separated-cycle input supplies the canonical unit equivalence on smooth quasi-projective finite-type schemes over any field, using this unnormalized complex. Quasi-projective here means an immersion into finite-dimensional projective space that is quasi-compact. [thm-adjudicate-f6007757a8ac-separated-cycle-descent-input](item-thm-adjudicate-f6007757a8ac-separated-cycle-descent-input) [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)

[F4] The Zariski-derived-unit definition supplies the abelian presheaf and sheaf constructions, additive degreewise sheafification, its chain-map unit, K-injective derived evaluation and its independence and naturality. In particular $(aC)|_U=a(C|_U)$, with the same unit, and the restricted complex $I|_U$ computes derived sections on $U_{\mathrm{Zar}}$. Its declared general site-derived supplier provides the unbounded construction. [def-adjudicate-17ec23c10d5e-zariski-derived-unit](item-def-adjudicate-17ec23c10d5e-zariski-derived-unit)

[F5] References 2–4 in External input allow one termwise injective K-injective resolution $aC\to I$. For every two-open cover $W=U\cup V$, its section complexes have the exact sequence $0\to I(W)\to I(U)\oplus I(V)\to I(U\cap V)\to0$, with difference of restrictions as last map. Together with [F4], this computes binary derived Mayer–Vietoris using the same representative on all opens. For homological fiber calculations, reindex its evaluated complex as $I_n(W)=I^{-n}(W)$ with the same differential.

[F6] A scheme has an affine open cover, and finite type includes quasi-compactness. Thus $X$ has a finite affine open cover. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) Reference 5 and the field-base conversion in reference 6 show that every finite-type open subscheme of a finite-type affine $k$-scheme is quasi-projective in [F3]'s convention; this includes the whole affine scheme. Here quasi-affine over $k$ means a quasi-compact open subscheme of an affine $k$-scheme; finite type over the field supplies the required quasi-compactness.

[F7] Closed immersions are local on an open cover of the target. For these finite-type simplex products, cycle open locality identifies surviving generic local rings, componentwise ambient codimensions and face lengths, and tests the admissibility condition on open covers. [math:lem-closed-immersion-local-on-target](https://alphabetamath.cc/item/lem-closed-immersion-local-on-target) [lem-author-89250b1d710c-cycle-open-locality](item-lem-author-89250b1d710c-cycle-open-locality)

[F8] Abelian groups form an abelian category. Short exact sequences of complexes give long exact homology sequences, and the five lemma applies to five-term windows of their morphisms. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category) [math:thm-long-exact-sequence-in-homology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-homology) [math:thm-five-lemma-for-a-morphism-of-long-exact-sequences](https://alphabetamath.cc/item/thm-five-lemma-for-a-morphism-of-long-exact-sequences)

[F9] Reference 7 in External input supplies Noetherianity of a finite-type scheme over a Noetherian base, and reference 8 supplies Noetherianity of its open subschemes. A locally Noetherian scheme has an affine open cover by spectra of Noetherian rings, and a Noetherian scheme is locally Noetherian and quasi-compact. Here a Noetherian ring means a commutative ring in which every ascending chain of ideals stabilizes. A morphism is quasi-compact when inverse images of quasi-compact target opens are quasi-compact. Locally finite type restricts to source opens by its affine-local interface; finite type means locally finite type and quasi-compact. Smoothness is germwise and restricts to opens. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

## External input
References 2–4 import the unbounded gluing, termwise injective resolution and ringed-site construction from [Stacks, tag 08BX](https://stacks.math.columbia.edu/tag/08BX), [tag 079P](https://stacks.math.columbia.edu/tag/079P) and [tag 07A5](https://stacks.math.columbia.edu/tag/07A5). Apply them to the constant integer ring sheaf on the Zariski space; its modules identify with abelian sheaves by integer multiplication and sheaf gluing, as in [F4]. No boundedness or separatedness is imposed.

References 5–6 import the quasi-affine finite-type implication and its affine-target conversion from [Stacks, tag 0B3H](https://stacks.math.columbia.edu/tag/0B3H) and [tag 01VZ](https://stacks.math.columbia.edu/tag/01VZ). The hypotheses and reading limits in the source records are binding. The following composition and finite-cover argument are local proofs, not claimed reconstructions of these imported results.

References 7–8 import [Noetherianity of finite-type sources](https://stacks.math.columbia.edu/tag/01T6) and [Noetherianity of locally closed subschemes](https://stacks.math.columbia.edu/tag/02IK). Step 1.1 applies these to the field base and arbitrary source opens, then uses the declared local-finite-type and germwise smoothness interfaces to establish the geometric domain of every cycle complex used below. The hypotheses and reading limits in those source records are binding.

## Proof
1.1 A field $k$ has only the ideals $0$ and $k$: any ideal containing $a\ne0$ contains $a^{-1}a=1$. Thus every ascending chain of ideals stabilizes, so $k$ is Noetherian in [F9]'s convention. Its spectrum has one point and is quasi-compact, so $\operatorname{Spec}k$ is Noetherian. Reference 7 in [F9] now makes $X$ Noetherian, and reference 8 makes every open subscheme $T\subseteq X$ Noetherian, hence quasi-compact. Its structure morphism to $\operatorname{Spec}k$ is quasi-compact: the only target opens are the point and the empty set, whose inverse images are respectively $T$ and the empty set. This morphism is locally of finite type by the source-locality interface in [F9], hence of finite type. It is smooth by the germwise smoothness interface in [F9]. For $T=\varnothing$, quasi-compactness uses the empty subcover and smoothness and locally finite type hold vacuously. Consequently every open of $X$, including all opens and intersections used below, is smooth finite type, so its Bloch complex in [F2] is defined. [given, F2, F9, construct]

2.1 By step 1.1 all the following opens are smooth finite type. Let $W=U\cup V$ and $S=|W|\setminus|U|$, a closed subset contained in $V$. Put $D=\ker(C(W)\to C(U))$. Its degree-$n$ generators are supported in $p_n^{-1}(S)$ by [F2], where $p_n:W\times_k\Delta^n\to W$ is projection; no scheme structure on $S$ is used. Conversely an admissible integral closed subscheme of $V\times_k\Delta^n$ supported there is closed in $W\times_k\Delta^n$: on the target cover by $U\times_k\Delta^n$ and $V\times_k\Delta^n$, its inclusion is respectively empty and a closed immersion, so [F7] applies. Restriction back to $V$ recovers that identical scheme, and the same is true starting with a supported generator in $W$. On every face its intersections are empty above $U$; above $V$ they have the same generic local rings and codimensions. The open-local test in [F7], applied inside ambient irreducible components as in [F2], gives admissibility in $W$ exactly when it holds in $V$. All face multiplicities agree by [F7], so this is an identification of complexes, not just groups. We therefore have compatible exact rows $0\to D\to C(W)\to C(U)\to Q_1\to0$ and $0\to D\to C(V)\to C(U\cap V)\to Q_2\to0$ whose first vertical map is the identity. Both $Q_i$ are acyclic by [F1]. No cycle complex on a singular complement or dimension-index conversion is needed. [given, F1, F2, F7, step 1.1]

3.1 By [F2], the common kernel maps quasi-isomorphically to both restriction fibers, compatibly with step 2.1. Thus the map between these fibers is a quasi-isomorphism. For completeness, write the restriction square as $A\xrightarrow{f}B$, $A\xrightarrow{j}C'$, $B\xrightarrow{k'}E$, $C'\xrightarrow{h}E$, with $hj=k'f$, and write its fiber map as $\phi=(j,k')$. Let $P=\operatorname{fib}(g)$ for $g:B\oplus C'\to E$, $g(b,c)=k'b-hc$, and let $l:A\to P$ be $l(a)=(fa,ja,0)$. Both $\operatorname{fib}(\phi)_n$ and $\operatorname{fib}(l)_n$ have coordinates $(a,b,c,e)\in A_n\oplus B_{n+1}\oplus C'_{n+1}\oplus E_{n+2}$. Their differentials have the same first three coordinates $(da,fa-db,ja-dc)$ and respective last coordinates $k'b-hc+de$ and $-k'b+hc+de$. Negating $e$ gives a chain isomorphism between them. For any chain map $t:M\to N$, its fiber has the degreewise split exact sequence $0\to N[-1]\to\operatorname{fib}(t)\to M\to0$, where $N[-1]_n=N_{n+1}$ with differential $-d_N$. The connecting map on homology is induced by $t$, directly from the displayed fiber differential; [F8] therefore implies that $t$ is a quasi-isomorphism exactly when its fiber is acyclic. Apply this to $\phi$ and then to $l$. Hence $l$ is a quasi-isomorphism, proving the stated raw binary Mayer–Vietoris convention. This argument is unchanged on components of different dimensions. [F2, F8, step 2.1, algebra]

4.1 Use [F4]–[F5] to represent the actual unit by a presheaf chain map $\eta:C\to aC\to I$. The target has binary Mayer–Vietoris by [F5]: its exact section sequence and [F2]'s kernel-to-fiber lemma identify $I(W)$ with the difference-map fiber. The source has the same property by step 3.1, and naturality gives a commuting comparison of these fiber maps on complexes. If $\eta$ is a quasi-isomorphism on $U,V,U\cap V$, it is so on the difference-map fibers: compare their degreewise split exact sequences with shifted intersection subcomplex and quotient the direct sum on $U,V$, and apply [F8] in every degree. It follows that $\eta$ is a quasi-isomorphism on their union. By [F4], the restricted resolution and sheafification identify each of these maps with precisely the canonical unit of [F3]. [F2, F3, F4, F5, F8, step 3.1]

5.1 Choose a finite affine cover $X=A_1\cup\cdots\cup A_m$ using [F6]. Each $A_i$ is smooth finite type by step 1.1 and quasi-projective by [F6], so [F3] supplies its comparison. Induct on $m$. For $W=A_1\cup\cdots\cup A_{m-1}$, the intersection $O=W\cap A_m$ is an open of the finite-type affine scheme $A_m$. It is smooth finite type by step 1.1; by [F6] it is quasi-projective in the required immersion convention. Hence [F3] supplies the comparison on $O$, while the induction hypothesis supplies it on $W$. Step 4.1 gives it on $X=W\cup A_m$. For $X=\varnothing$, the cycle complex is zero and a sheaf on the empty space has zero group of sections, so the comparison is also an equivalence. The entire argument applies to every open of $X$, since each is smooth finite type by step 1.1. All maps are the same canonical unit by [F4], so no choice of affine cover affects the resulting comparison or its naturality. No separatedness, pure dimension or restriction on the field has been added. [A1, F2, F3, F4, F6, step 1.1, step 4.1, choose] ∎

## Source notes
Reference 0 is the historical Levine citation for the nonseparated localization premise now supplied by the declared localization item. Reference 1 is the historical MVW citation for the separated comparison supplied by the declared separated-cycle item and the two-localization-row proof pattern. Their retained reading records describe earlier work; this repair read those supplier bodies and does not claim a fresh reading of either primary PDF. The proof above supplies the nonseparated finite-cover extension locally, conditional on those precise suppliers and the newly explicit imported premises. These repairs concern generated content, not a new finding against the original article.
