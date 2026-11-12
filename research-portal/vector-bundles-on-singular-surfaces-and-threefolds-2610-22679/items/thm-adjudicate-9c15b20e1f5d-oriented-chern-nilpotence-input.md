---
id: thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input
kind: theorem
title: External nilpotence of oriented projective-relation Chern coefficients
status: published
domain: mathematics
deps:
  - math:def-derived-scheme-and-cotangent-complex
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
dependency_roles:
  math:def-derived-scheme-and-cotangent-complex: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
dependency_level: 0
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated 14 April 2025 (third version)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Sections 1.1.1–1.1.6 and 1.2.2–1.2.4, pp. 6–7; Sections 2.1.1–2.1.5, p.
        14; Definition 2.2.3 and Remarks 2.2.4–2.2.6, Notations 2.2.7–2.2.8, p.
        15; Definition 3.1.2 and Remark 3.1.3, p. 21; Remark 3.1.5 and Lemma
        3.1.8(i), p. 22; Definition 3.2.1 and Lemma 3.2.3 with proof, p. 23;
        Definition 4.4.1 and Lemma 4.4.3(i), including the complete lemma proof,
        pp. 30–31
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
      statement: The source defines the smooth qcqs relative Zariski site, its sheaves
        of spaces, the pointed-projective-line inversion category, ring objects
        and diagonal cohomology; it defines linear orientations and the
        class-power projective bundle formula. Lemma 3.2.3 supplies the
        projective-bundle basis, which makes the coefficients in Definition
        4.4.1 unique. Lemma 4.4.3(i) states that each positive Chern coefficient
        is nilpotent for a homotopy-commutative oriented motivic ring spectrum
        satisfying that formula.
      hypotheses: S is a qcqs derived scheme and Y is smooth and qcqs over S. The ring
        spectrum is homotopy-commutative and equipped with a linear orientation
        satisfying Definition 3.2.1, with powers of that actual orientation
        class. V is of constant rank r at least 1 for Definition 4.4.1. No
        A1-invariance, absolute smoothness over a field, or finite dimension is
        required.
      reading_limits: In this repair, inspected the cached PDF title/date, Sections
        1.1 and 1.2 on pp. 6–7, Sections 2.1 and 2.2 on pp. 14–15, the
        orientation passages on pp. 21–22, Definition 3.2.1 and Lemma 3.2.3 on
        p. 23, and Definition 4.4.1 through the end of the complete Lemma 4.4.3
        proof on pp. 30–31. Read the complete proofs of Lemmas 3.1.8 and 3.2.3
        and the p. 26 correction footnote. Recomputed the cached PDF SHA256
        recorded above and checked the online dated source at the conventions,
        orientation and nilpotence passages. Formal inversion, derived bundle
        constructions, categorical foundations and the cited flag/splitting
        trick are imported; their upstream proofs and AI22 are not reconstructed
        or audited here.
    - title: Bertrand Toën, Simplicial presheaves and derived algebraic geometry, May
        2009
      url: https://www.math.univ-toulouse.fr/~btoen/crm-2008.pdf
      locator: Section 4.3, Definition 4.3.1 and the second and third standard-results
        bullets immediately following it, printed pp. 49–50 (PDF pages 49–50)
      statement: For simplicial commutative rings A to B, smoothness is equivalent to
        classical smoothness of pi_0(A) to pi_0(B) together with the natural
        isomorphisms pi_n(A) tensor_{pi_0(A)} pi_0(B) to pi_n(B) for every n
        greater than 0. On discrete rings this agrees with ordinary smoothness.
      hypotheses: A to B is a morphism of simplicial commutative rings. The criterion
        is applied affine-locally to the simplicial derived schemes used here;
        classical smoothness has its usual local finite presentation, flatness
        and geometrically regular fibre meaning.
      reading_limits: Read the online primary PDF text of Section 4.3 at printed pp.
        49–50, including Definition 4.3.1 and the following standard-results
        bullets. Only the stated homotopy-group criterion and discrete
        specialization are imported. The supporting HAG II arguments are not
        reconstructed.
---

## Statement
Let $S$ be a quasi-compact quasi-separated derived scheme, and let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over $S$ satisfying the source projective bundle formula with powers of the actual tautological first Chern class. Let $Y$ be a smooth qcqs derived $S$-scheme and let $V$ be a vector bundle of constant rank $r\geq1$ on $Y$. For every $1\leq i\leq r$, the coefficient $c_i^{\mathcal E}(V)$ defined by the quotient-projective relation of Definition 4.4.1 is nilpotent in $\mathcal E^*(Y)$: some positive integer power is zero. No $\mathbb A^1$-invariance or absolute smoothness over a field is assumed.

## Formulation conventions
A derived scheme $T$ and its ordinary truncation $t_0T$ use the object convention of [[math:def-derived-scheme-and-cotangent-complex]]. The abbreviation **qcqs** means that $t_0T$ is quasi-compact and quasi-separated as in [[math:def-quasi-compact-and-quasi-separated-scheme]]. Smoothness on derived affine charts $A\to B$ means that $\pi_0(A)\to\pi_0(B)$ is smooth and that $\pi_n(A)\otimes_{\pi_0(A)}\pi_0(B)\to\pi_n(B)$ is an isomorphism for every $n>0$. Classical smoothness is [[math:def-smooth-morphism-schemes]]; the derived chart criterion is the imported Toën Section 4.3 interface.

Use the Annala–Iwasa conventions in the cited passages. In the rest of these conventions $T$ lies in $\mathrm{Sm}_S$. The relative category $\mathrm{Sm}_S$ consists of smooth qcqs derived $S$-schemes, with Zariski coverings. Write $\mathrm{St}_S$ for its sheaves of spaces and $(\mathrm{St}_S)_*$ for pointed such sheaves. The category of motivic spectra over $S$ is $\mathrm{Sp}_{\mathbb P^1}(S)\simeq(\mathrm{St}_S)_*[(\mathbb P^1)^{-1}]$: this is the universal presentable symmetric monoidal category receiving pointed sheaves by a colimit-preserving symmetric monoidal functor and making the projective line, pointed at infinity, tensor-invertible. Write $\Sigma_{\mathbb P^1}$ for tensoring with that pointed line, and $\Sigma^\infty_{\mathbb P^1}$ for the suspension into this category. These are the source's imported constructions. A motivic ring spectrum is a unital homotopy-associative algebra object there, with homotopy-commutativity additionally assumed here. Its diagonal cohomology is $\mathcal E^n(T)=\pi_0\operatorname{Map}(\Sigma^\infty_{\mathbb P^1}T_+,\Sigma_{\mathbb P^1}^{n}\mathcal E)$; here $T_+$ adjoins a disjoint basepoint, and the product on $\mathcal E^*(T)=\bigoplus_{n\in\mathbb Z}\mathcal E^n(T)$ uses the diagonal of $T$ and multiplication of $\mathcal E$.

A rank-$r$ vector bundle means a derived quasi-coherent module Zariski-locally equivalent to $\mathcal O_T^{\oplus r}$; a line bundle has rank one. The pointed Picard stack $\mathrm{Pic}_S$ classifies line bundles and is pointed by the trivial line. A **linear orientation** is a right-$\mathcal E$-linear retraction $c_1:\mathrm{Pic}_S\otimes\mathcal E\to\mathbb P^1\otimes\mathcal E$ of $[\mathcal O(1)]\otimes\mathrm{id}_{\mathcal E}$. Pullback along the classifying map of a line bundle $L$ gives $c_1(L)\in\mathcal E^1(T)$.

For a pointed sheaf $A$, write $\mathcal E^A$ for its internal function object in motivic spectra. The source's **projective bundle formula** is the requirement that, for every $n\geq1$, the map $\bigoplus_{j=1}^{n}\Sigma_{\mathbb P^1}^{-j}\mathcal E\to\mathcal E^{\mathbb P^n}$ whose components are the powers $c_1(\mathcal O(1))^j$ is an equivalence; here $\mathbb P^n$ is pointed and the right side is reduced. In the unpointed bundle version supplied by Lemma 3.2.3, if $p:\mathbb P_T(V)\to T$ is the quotient-projective bundle and $\xi=c_1(\mathcal O(1))$, then $1,\xi,\ldots,\xi^{r-1}$ give the corresponding shifted cohomology basis over $\mathcal E^*(T)$. The source uses the quotient convention: $\mathbb P_T(V)$ represents line quotients of the pullback of $V$, and $\mathcal O(1)$ is its universal quotient line. Both this construction and the bundle-basis assertion are imported in precisely this derived setting.

With $c_0^{\mathcal E}(V)=1$, Definition 4.4.1 specifies the unique coefficients $c_i^{\mathcal E}(V)\in\mathcal E^i(T)$, $1\leq i\leq r$, by $\sum_{j=0}^{r}(-1)^j\xi^j p^*c_{r-j}^{\mathcal E}(V)=0$ in $\mathcal E^r(\mathbb P_T(V))$. The imported bundle basis supplies existence and uniqueness of these coefficients. Nilpotent means that some positive integer power of the coefficient is zero. These conventions specify the formulation of the imported result, without a locally claimed proof of it.

## External input
Import precisely Annala–Iwasa Lemma 4.4.3(i), using Definition 4.4.1 and the formulation conventions above, from the author PDF dated 14 April 2025, printed pp. 30–31. Section 2.1.1 fixes the smooth qcqs relative site; the base itself may be singular. The positive-rank statement and its nilpotence are established source input, not a locally reconstructed splitting argument. The source supplies existence of an exponent for each coefficient, rather than a dimension bound. The rank-zero, above-rank and finite-clopen extensions used by the consumer are separate explicit conventions and local deductions. Application to the actual EM model, including verification of orientation, PBF, products and coefficient comparison with base $S=X$, is made in that consumer.
