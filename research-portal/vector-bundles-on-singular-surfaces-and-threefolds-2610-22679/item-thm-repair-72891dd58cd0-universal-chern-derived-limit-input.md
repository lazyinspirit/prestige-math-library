---
title: Universal Chern cohomology and countable derived limits
status: published
research_item: thm-repair-72891dd58cd0-universal-chern-derived-limit-input
dependency_level: 4
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §§2.1–2.2, pp. 14–15; Remark 2.4.6 and Corollary 2.4.8, p. 20;
        §§3.1.2–3.1.7, pp. 21–22; Lemma 3.2.3, p. 23; Definition 4.4.1 and
        Lemmas 4.4.3–4.4.4, pp. 30–31; Corollaries 4.4.5 and 4.4.7 and Theorem
        4.4.6, pp. 31–32
      hypotheses: The source-native qcqs derived base S, compatible universes, and
        multiplicative coefficient category V defined over S, compactly
        generated with the P1 cotensor preserving filtered colimits. E is a
        homotopy-commutative linearly oriented motivic E1-ring satisfying PBF;
        the general cohomology formula also assumes a homotopy-cocommutative
        motivic coring R. Lemmas 4.4.3 and 4.4.4 use an oriented ring spectrum
        over S; the local stabilization argument takes V=St_S. No separatedness,
        A1-invariance, or transfers are added. Application to classical integral
        HZ requires its orientation and PBF to be supplied by the consumer.
      statement: Corollary 4.4.7 computes E^{*,*}(Vect_{n,+} tensor R) as
        E^{*,*}(R)[[c_1,...,c_n]]; Corollary 4.4.5 gives the corresponding
        Grassmannian computation, with the canonical comparison identifying the
        actual Chern generators. Lemma 4.4.4 gives the finite Grassmannian
        class-power equivalence with monomials indexed by sum(alpha_i)<=N-n.
        Definition 4.4.1 defines Chern classes on stacks by the unique
        projective-bundle relation, using Lemma 3.2.3. Lemma 4.4.3 gives
        nilpotence, the line-filtration formula and Whitney for vector bundles
        on X in Sm_S. Remark 3.1.3 gives c_1(O)=0. Lemma 3.1.7 and Remark 2.4.6
        provide spectrum-valued cohomology in all bidegrees for oriented
        spectra. The stack stabilization identity is proved locally below, not
        attributed to Lemma 4.4.3.
      reading_limits: For this adjudication, read the live April 14, 2025 primary PDF
        text at section 2 opening and section 2.1.5; Remark 2.4.6 and Corollary
        2.4.8; sections 3.1.2–3.1.7; Definition 3.2.1 and Lemma 3.2.3;
        Definition 4.4.1 and Lemmas 4.4.3–4.4.4; Corollaries 4.4.5 and 4.4.7 and
        the universal-generator comparison in the proof of Theorem 4.4.6,
        printed pp. 14, 20–23 and 30–32. Checked the quotient convention, finite
        monomial bound, scope of smooth Whitney and actual Chern-generator
        comparison. The declared framework supplies the native site and
        higher-categorical constructions; its foundational references and the
        deeper proofs of the imported computations are not reconstructed or
        independently audited. No cached-file reading or scheme-wise detection
        principle is claimed in this adjudication.
      version: April 14, 2025; primary PDF SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
    - title: Stacks Project, derived limits and the Milnor exact sequence
      url: https://stacks.math.columbia.edu/tag/0919
      locator: Lemma 15.88.5 (tag 0919), complete statement and its one-paragraph proof
      hypotheses: A countable inverse system K_n in a triangulated category D with
        product product_n K_n, and a derived limit K fitting the
        product-difference distinguished triangle. L is any object of D. No
        derived-Hom complex or enhancement is required for this Hom-group
        statement.
      statement: There is a short exact sequence 0 -> R^1 lim Hom_D(L,K_n[-1]) ->
        Hom_D(L,K) -> lim Hom_D(L,K_n) -> 0. Thus the obstruction vanishes if
        the shifted Hom-group system is Mittag–Leffler; surjectivity of that
        system is sufficient.
      reading_limits: Read the complete statement and proof at the primary live tag
        0919 for this repair. The proof invokes the product-difference
        definition, representable Hom exactness and tag 07KW. Only the displayed
        Hom-group sequence is imported, not a derived-Hom object for an
        arbitrary triangulated category.
      version: Primary live tag 0919 inspected in this repair; no repository-history
        inspection claimed.
    - title: "Stacks Project, derived limits: product-difference triangle"
      url: https://stacks.math.columbia.edu/tag/08TB
      locator: Section 13.34, Definition 13.34.1 and the two following explanatory
        paragraphs
      statement: A derived limit K fits the distinguished triangle K -> product_n K_n
        -> product_n K_n -> K[1], with middle map 1-s for the transition shift.
        Such an object exists when the product exists and is unique only up to
        nonunique isomorphism. D(Ab) is an example in which all such derived
        limits exist.
      hypotheses: A countable inverse system in a triangulated category D whose
        countable product exists. For its use with spectra, a genuine coherent
        mapping-spectrum tower is supplied before passage to the homotopy
        category.
      reading_limits: Read Definition 13.34.1 and its following explanation on the
        primary live tag 08TB in this repair. Only this construction, existence
        and noncanonical uniqueness are imported; no canonical coherent object
        is inferred from a bare triangulated diagram.
      version: Primary live tag 08TB inspected in this repair; no repository-history
        inspection claimed.
    - title: Stacks Project, Rlim of abelian groups
      url: https://stacks.math.columbia.edu/tag/07KW
      locator: Lemma 15.88.1(2)–(3), statement and proof
      statement: For a countable inverse system of abelian groups, the derived limit
        is represented by the product-difference complex in degrees zero and
        one. Its first derived-limit group vanishes for a Mittag–Leffler system,
        in particular for a system with surjective transition maps.
      hypotheses: A countable inverse system of abelian groups; the vanishing
        assertion assumes the Mittag–Leffler condition.
      reading_limits: Read the full statement and proof on the primary live tag 07KW
        in this repair, focusing on parts (2)–(3). The product-difference
        complex and Mittag–Leffler vanishing are imported; the deeper
        derived-functor arguments cited in that proof are not reconstructed.
      version: Primary live tag 07KW inspected in this repair; no repository-history
        inspection claimed.
    - title: Jacob Lurie, Higher Algebra (18 September 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Theorem 1.1.2.14 and Remark 1.1.2.15, p. 27; opening observation in
        proof of Proposition 1.2.1.19, p. 46
      statement: A stable infinity-category has a triangulated homotopy category. A
        coherent countable tower has its limit computed as a fiber between
        products.
      hypotheses: Applied to spectra, a stable category with countable products. Only
        the opening tower observation is used, not the completeness criterion.
      reading_limits: For this adjudication, read Theorem 1.1.2.14 and Remark 1.1.2.15
        at printed p. 27 and the opening proof observation of Proposition
        1.2.1.19 at printed p. 46 in the live primary PDF text. Only the tower
        observation is applied; no t-structure completeness criterion is
        imported. The product map is not written explicitly there; its
        identification with 1-s is explained locally. No foundational proof is
        reconstructed or independently audited.
---

PDF p. 17: Corollary 6.9; stable universal Chern and support comparison prerequisite

## Prerequisites

- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-mittag-leffler-inverse-system](https://alphabetamath.cc/item/def-mittag-leffler-inverse-system)
- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF dated April 14, 2025 · §§2.1–2.2, pp. 14–15; Remark 2.4.6 and Corollary 2.4.8, p. 20; §§3.1.2–3.1.7, pp. 21–22; Lemma 3.2.3, p. 23; Definition 4.4.1 and Lemmas 4.4.3–4.4.4, pp. 30–31; Corollaries 4.4.5 and 4.4.7 and Theorem 4.4.6, pp. 31–32 `](https://ryomei.com/papers/MotSp.pdf)
- [` Stacks Project, derived limits and the Milnor exact sequence · Lemma 15.88.5 (tag 0919), complete statement and its one-paragraph proof `](https://stacks.math.columbia.edu/tag/0919)
- [` Stacks Project, derived limits: product-difference triangle · Section 13.34, Definition 13.34.1 and the two following explanatory paragraphs `](https://stacks.math.columbia.edu/tag/08TB)
- [` Stacks Project, Rlim of abelian groups · Lemma 15.88.1(2)–(3), statement and proof `](https://stacks.math.columbia.edu/tag/07KW)
- [` Jacob Lurie, Higher Algebra (18 September 2017) · Theorem 1.1.2.14 and Remark 1.1.2.15, p. 27; opening observation in proof of Proposition 1.2.1.19, p. 46 `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement

Assume the Axiom of Choice and compatible size universes. Use the source-native non-$\mathbb A^1$ motivic framework: $S$ is a qcqs derived scheme, $\mathrm{St}_S$ consists of space-valued Zariski sheaves on qcqs smooth derived $S$-schemes, and $\mathcal V$ is a multiplicative coefficient category defined over $S$. Retain compact generation of $\mathcal V$ and preservation of filtered colimits by its $\mathbb P^1$ cotensor. Let $E$ be a homotopy-commutative, linearly oriented motivic $E_1$-ring spectrum in $\mathcal V$ satisfying the projective bundle formula (PBF). Write $\mathrm{Vect}_{n,S}$ for the stack of rank-$n$ vector bundles, $n\geq1$, and $U_n$ for its universal bundle: a test map classifying $V$ pulls $U_n$ back to $V$. A homotopy-cocommutative motivic coring $R$ means a counital homotopy-coassociative coalgebra object with cocommutative comultiplication in the homotopy category. With $E^{p,q}(R)=\pi_{2q-p}\operatorname{Map}(R,\Sigma_{\mathbb P^1}^q E)$, interpreted as mapping-spectrum cohomology for oriented coefficients, the imported computation is
$$E^{*,*}(\mathrm{Vect}_{n,S,+}\otimes R)\cong E^{*,*}(R)\lbrack\!\lbrack c_1,\ldots,c_n\rbrack\!\rbrack.$$
Here $c_j=c_j(U_n)$ has bidegree $(2j,j)$; the right side is the ring of formal series in those actual Chern generators, completed in their ideal and interpreted degree by degree. For $\mathcal V=\mathrm{St}_S$ and $R=\mathbf1$, its coefficient ring is $E^{*,*}(S)$. In this case stabilization $s_n:\mathrm{Vect}_{n,S}\to\mathrm{Vect}_{n+1,S}$, $V\mapsto V\oplus\mathcal O$, satisfies $s_n^*c_j(U_{n+1})=c_j(U_n)$ for $1\leq j\leq n$ and $s_n^*c_{n+1}(U_{n+1})=0$. Thus its pullback on the completed cohomology rings is evaluation at $c_{n+1}=0$. On a smooth test scheme, the imported Whitney identity is $c(V)=c(V')c(V'')$ for a fiber sequence of vector bundles $V'\to V\to V''$, where $c(V)=\sum_{j=0}^{\operatorname{rk}V}c_j(V)t^j$ and $c_0=1$.

For a countable inverse system of abelian groups $A_{n+1}\xrightarrow{f_{n+1}}A_n$, let $d:\prod_n A_n\to\prod_n A_n$ send $(a_n)$ to $(a_n-f_{n+1}(a_{n+1}))$. The derived limit in $D(\mathrm{Ab})$ is represented by this cochain complex in degrees zero and one, so $R^1\varprojlim A_n=\operatorname{coker}d$. If the images in each fixed $A_m$ eventually stabilize (the Mittag–Leffler condition, treating abelian groups as $\mathbb Z$-modules by integer multiples), then $R^1\varprojlim A_n=0$; surjective transition maps suffice. Here $D(\mathrm{Ab})$ is the derived category of cochain complexes of abelian groups, with $H^a(K[b])=H^{a+b}(K)$, in the fixed universes.

Let $\mathcal D$ be a locally small triangulated category, let $(K_n,f_{n+1})$ be a countable inverse system with product $P=\prod_n K_n$, and let $K$ be a derived limit: it fits into a distinguished triangle $K\to P\xrightarrow{1-s}P\to K[1]$, where the $n$th component of $s$ is $f_{n+1}$ after projection to $K_{n+1}$. Such a $K$ exists whenever $P$ does, and is unique only up to nonunique isomorphism. For every $L\in\mathcal D$ the imported Milnor sequence is
$$0\longrightarrow R^1\varprojlim_n\operatorname{Hom}_{\mathcal D}(L,K_n[-1])\longrightarrow\operatorname{Hom}_{\mathcal D}(L,K)\longrightarrow\varprojlim_n\operatorname{Hom}_{\mathcal D}(L,K_n)\longrightarrow0.$$
This asserts a sequence of Hom groups; no derived-Hom complex is part of the structure of an arbitrary triangulated category.

## Statement references

[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)

[math:def-mittag-leffler-inverse-system](https://alphabetamath.cc/item/def-mittag-leffler-inverse-system)

[math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[Annala–Iwasa, §§2–4, especially Corollary 4.4.7](https://ryomei.com/papers/MotSp.pdf)

[Stacks Project, Lemma 15.88.5](https://stacks.math.columbia.edu/tag/0919)

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the size conventions of [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework). Choice is used in the imported Mittag–Leffler vanishing, applied in step 2.1 to the surjective finite Grassmannian cohomology towers; it permits the countably many compatible preimage choices underlying the product-difference argument.

[F1] The declared framework fixes the site, coefficient types, orientation, PBF and cohomology convention. For a line bundle on a stack, its first class is the pullback of the pointed universal class, so $c_1(\mathcal O)=0$. Oriented spectra have mapping-spectrum cohomology in all integer bidegrees by Annala–Iwasa Lemma 3.1.7 and Remark 2.4.6. Definition 4.4.1 defines higher classes on any $S$-stack by the unique relation $\sum_{a=0}^r(-1)^a\xi^a p^*c_{r-a}(V)=0$ on the quotient projective bundle $p:\mathbb P(V)\to X$, with $\xi=c_1(\mathcal O(1))$; uniqueness is furnished by Lemma 3.2.3. Lemma 4.4.3 states Whitney on $X\in\mathrm{Sm}_S$. [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework) [Annala–Iwasa, §§3.1–3.2 and 4.4](https://ryomei.com/papers/MotSp.pdf)

[F2] Put $G_{n,N}=\operatorname{Gr}_n(\mathcal O_S^N)$, the smooth qcqs $S$-scheme of rank-$n$ quotient bundles of $\mathcal O_S^N$, with universal quotient $Q_N$, and $G_n=\operatorname*{colim}_{N\geq n}G_{n,N}$ as a stack. Its transition maps come from discarding the last coordinate of $\mathcal O^{N+1}\to\mathcal O^N$. For a homotopy-commutative oriented ring spectrum over $S$ satisfying PBF, Lemma 4.4.4 gives $E^{*,*}(G_{n,N})$ a basis over $E^{*,*}(S)$ consisting of $c(Q_N)^\alpha=\prod_{j=1}^n c_j(Q_N)^{\alpha_j}$ with $\sum_j\alpha_j\leq N-n$, with the corresponding bidegree shifts. Corollaries 4.4.5 and 4.4.7 identify $G_n$ and $\mathrm{Vect}_{n,S}$ cohomology with formal series in these Chern classes; pullback along the quotient-classifying map $q_n:G_n\to\mathrm{Vect}_{n,S}$ is the isomorphism identifying their generators. The general coefficient-$\mathcal V$, coring-$R$ formula in the Statement is precisely Corollary 4.4.7. [Annala–Iwasa, §2.1.5 and §§4.4.4–4.4.7](https://ryomei.com/papers/MotSp.pdf)

[F3] The group-system and triangulated-category formulations use [math:def-mittag-leffler-inverse-system](https://alphabetamath.cc/item/def-mittag-leffler-inverse-system), [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category) and [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). Stacks tag 07KW supplies the product-difference complex and Mittag–Leffler vanishing; tag 08TB supplies the distinguished triangle and its existence and uniqueness limits; tag 0919 supplies the Hom-group short exact sequence. The coherent spectra, products, suspension and homotopy groups used to apply it to a mapping-spectrum tower are those of [def-stable-spectra-interface](item-def-stable-spectra-interface). [07KW](https://stacks.math.columbia.edu/tag/07KW) [08TB](https://stacks.math.columbia.edu/tag/08TB) [0919](https://stacks.math.columbia.edu/tag/0919)

[F4] For coherent spectra the homotopy category is triangulated, and tower limits are fibers between products. This is the imported stable-category result in source record 4. [Higher Algebra, Theorem 1.1.2.14 and proof of Proposition 1.2.1.19](https://www.math.ias.edu/~lurie/papers/HA.pdf)

## External input

The ambient motivic framework is supplied by the declared framework definition. The cohomology computations, stack projective-bundle relation, finite Grassmannian equivalence, smooth-scheme Whitney identity and trivial-line normalization in [F1]–[F2] are imported from the exact Annala–Iwasa passages in source record 0. The three derived-limit statements in [F3] are imported from Stacks source records 1–3. The stable-category statements in [F4] are imported from source record 4. Their proofs remain literature-derived inputs. The argument below supplies the passage from those smooth-scheme facts to universal stack stabilization; it is a local composition and does not reconstruct the imported computations or claim that Lemma 4.4.3 directly states stack-level Whitney.

## Proof

**Given:** The source-native $S$, $\mathcal V$, $E$, $R$, universes and Choice assumptions of the Statement, and the indicated countable systems.

**Goal:** Retain the imported cohomology and derived-limit results and justify the stated universal stabilization formula.

1.1 Corollary 4.4.7 in [F2] gives the cohomology computation with exactly the multiplicativity, orientation, PBF and coring hypotheses stated here. For the abelian-group tower, tag 07KW in [F3] identifies its derived limit with the stated two-term cochain complex and gives the Mittag–Leffler vanishing; a surjective system satisfies that condition because every transition image is the whole target. For the triangulated tower, tags 08TB and 0919 in [F3] give its product-difference triangle and the displayed short exact sequence of Hom groups, with the negative shift exactly as written. These are imported premises, rather than local reconstructions. In particular, applying this sequence in the homotopy category of spectra to a coherent tower $T_N$ and the sphere spectrum gives kernel $R^1\varprojlim_N\pi_1T_N$ for $\pi_0\varprojlim_N T_N\to\varprojlim_N\pi_0T_N$. By [F4] the coherent limit supplies a product fiber. Its map is $1-s$: its nullhomotopies specify adjacent compatibilities $x_N\simeq f_{N+1}x_{N+1}$; their composites give the cone on the freely generated tower. This identifies the required triangle before passage to the homotopy category. [A1, F2, F3, F4]

2.1 We prove stabilization for $\mathcal V=\mathrm{St}_S$, $R=\mathbf1$. First Chern classes commute with pullback because their defining class is universal; the projective-bundle relation in [F1] is preserved by base change, so its uniqueness implies naturality of every higher Chern class. Consequently the transition $G_{n,N}\to G_{n,N+1}$ pulls the quotient bundle back to $Q_N$ and pulls its Chern monomials back to the identical monomials. Every basis monomial at stage $N$ in [F2] is a basis monomial at stage $N+1$, so restriction is surjective in every bidegree. For fixed $(p,q)$ take the coherent spectrum $T_N=\operatorname{Map}(\Sigma^\infty_{\mathbb P^1}G_{n,N,+},\Sigma^q_{\mathbb P^1}E)[p-2q]$, whose $\pi_0$ is $E^{p,q}(G_{n,N})$ and whose $\pi_1$ is $E^{p-1,q}(G_{n,N})$. Suspension and the stack action preserve the colimit defining $G_n$; mapping out of it therefore gives $\varprojlim_N T_N$. The surjective $\pi_1$ system and step 1.1 make $E^{p,q}(G_n)\to\varprojlim_N E^{p,q}(G_{n,N})$ injective. Since $q_n^*$ in [F2] is an isomorphism, equality of classes on $\mathrm{Vect}_{n,S}$ is thus detected on all these finite Grassmannians. The composite $G_{n,N}\to\mathrm{Vect}_{n,S}\xrightarrow{s_n}\mathrm{Vect}_{n+1,S}$ classifies $Q_N\oplus\mathcal O$. Smooth-scheme Whitney and $c_1(\mathcal O)=0$ in [F1] give $c(Q_N\oplus\mathcal O)=c(Q_N)$, so naturality and that detection give all the stated universal stabilization identities, including the vanishing of $c_{n+1}$. Finally these pullbacks act continuously on the completed cohomology rings: the finite Grassmannian evaluations defining the series send each positive generator to a nilpotent class by Lemma 4.4.3, and the preceding injectivity detects equality after all such evaluations. Hence evaluation on any formal series agrees with substituting $c_{n+1}=0$, as asserted. This uses finite Grassmannian detection, rather than inferring equality of stack classes from arbitrary scheme-wise equalities alone. [A1, F1, F2, F3, step 1.1] ∎
