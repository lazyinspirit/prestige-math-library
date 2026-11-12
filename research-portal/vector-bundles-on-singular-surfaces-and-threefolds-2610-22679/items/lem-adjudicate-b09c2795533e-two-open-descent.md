---
id: lem-adjudicate-b09c2795533e-two-open-descent
kind: lemma
title: Covering-sieve descent for the actual two-open square
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-149a02132c3b-geometry
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-scheme-sites-and-sheafification
  - math:def-open-immersion-schemes
  - lem-adjudicate-d5306176fce5-coherent-realization
  - def-article-conventions
  - math:def-smooth-locus-morphism
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-cohomology
  - def-stable-spectra-interface
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-149a02132c3b-geometry: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  lem-adjudicate-d5306176fce5-coherent-realization: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-smooth-locus-morphism: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory (Princeton University Press, 2009)
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Corollaries 5.1.2.3–5.1.2.4, printed p. 319 (PDF index 336); Section
        5.1.5 opening and Lemmas 5.1.5.2–5.1.5.3, printed pp. 324–326 (PDF
        indices 341–343)
      statement: Space-valued presheaves on a small category C form the
        infinity-category Fun(N(C)^op, S). This category has small colimits
        computed at each object. Evaluation at an object is represented by its
        Yoneda presheaf. The identity on the presheaf category is the pointwise
        left Kan extension of the Yoneda embedding along itself, expressing a
        presheaf as the colimit of the representables mapping to it.
      hypotheses: The source is the nerve of a category small in the fixed site
        universe. Presheaves take values in spaces in a compatible larger
        universe; all diagrams and categories of elements used here are small
        there. Apply the density assertion to a set-valued sieve regarded as a
        presheaf of discrete spaces.
      reading_limits: During adjudicate-b09c2795533e, read the primary PDF web
        extraction of both corollaries, both lemma statements and their
        displayed proofs, including the complete proof of Lemma 5.1.5.3. The
        model-category, left-fibration and Kan-extension antecedents are
        imported, not reconstructed. The generated-sieve union and the two-open
        derived application below are local arguments. No hyperdescent or
        excision theorem for arbitrary distinguished squares is imported.
dependency_level: 16
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the enhanced motivic-complex interface. Let $k$ be algebraically closed, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and let $T\subset X$ be closed and contained in $U=X_{\mathrm{smooth}}$. Give $T$ its reduced induced structure and put $W=X\setminus T$ and $V=U\setminus T$. With $C(Y)=\mathbb Z(3)_{\mathrm{mot}}(Y)$, restriction induces an equivalence in $\mathcal D_\infty(\mathbb Z)$
$$C(X)\simeq C(U)\times_{C(V)}C(W).$$
Ordinary realization $\mathsf E$ sends this to a homotopy pullback square of spectra, with its actual restriction maps.

## External input
Reference 0 supplies pointwise presheaf colimits, Yoneda evaluation and the expression of a presheaf as a colimit over its category of elements. Here the presheaf category is $\mathcal P=\operatorname{Fun}(N(\mathcal C_k)^{\mathrm{op}},\mathcal S)$, where $\mathcal C_k$ is the size-bounded scheme category in [F2], $N$ is its nerve, and $\mathcal S$ is the infinity-category of spaces in a compatible larger universe. Maps in $\mathcal P$ are coherent natural transformations. Representable presheaves and the sieve below take discrete-space values. The deduction for the two-open cover is proved below.

## Facts & Assumptions
**Given:** The stated geometry, Choice, and the compatible site and universe bounds.

**Goal:** Deduce the two-open pullback directly from covering-sieve descent.

[A1] [[math:def-axiom-of-choice]] and the size conventions in [[lem-author-b747b28c359f-elmanto-morrow-complexes]] are assumed throughout. The nested universes have the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence is an additional assumption.

[F1] [[lem-author-149a02132c3b-geometry]] supplies these actual qcqs opens, their scheme-theoretic intersection $V=U\times_X W$, and the Nisnevich covering family $\{U\to X,W\to X\}$. By [[math:def-open-immersion-schemes]], an open immersion identifies its source isomorphically with an open subscheme, so a factorization through it is unique.

[F2] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies $C$, its enhanced limits and its covering-sieve descent. [[def-scheme-sites-and-sheafification]] supplies sieves and the bounded site. For a scheme $Y$ write $h_Y(S)=\operatorname{Hom}_k(S,Y)$; regard these sets as discrete spaces. For any test complex $K$, put $Q_K(Y)=\operatorname{Map}(K,C(Y))$, a space-valued presheaf. Mapping out of $K$ preserves limits by their defining universal property.

[F3] Reference 0 supplies pointwise colimits and the canonical identification $\operatorname{Map}(R,Q)=\lim_{(S\to X)\in R^{\mathrm{op}}}Q(S)$ for a sieve $R\subset h_X$, obtained by expressing $R$ as its colimit of representables and applying Yoneda evaluation.

[F4] [[lem-adjudicate-d5306176fce5-coherent-realization]] supplies the fixed ordinary realization functor and its preservation of limits. Take $\mathsf E=\mathcal H$ from that interface throughout. [[def-stable-spectra-interface]] supplies the target spectra and their homotopy pullbacks.

[F5] [[def-article-conventions]] defines the algebraically closed base, affine finite-type and chain-dimension conventions. [[math:def-smooth-locus-morphism]] defines the smooth locus; [F1] verifies its local-finite-presentation hypothesis and open structure here. [[def-motivic-cohomology]] names the weight-three complex supplied in [F2].

## Proof
1.1 Let $R\subset h_X$ be the sieve generated by the two maps in [F1]. For every test scheme $S$, $R(S)$ is the union of the subsets $h_U(S)$ and $h_W(S)$ of $h_X(S)$: membership means factorization through one of the two opens. Open immersions give unique such factorizations, and their intersection is $h_V(S)$ by [F1]. Thus $R=h_U\sqcup_{h_V}h_W$ in space-valued presheaves by [F3]. To check the objectwise homotopy pushout, map it into any space: an element present on both sides contributes two chosen points and a path between them. This is equivalent to one chosen point, with contractible extra data; an element present on only one side contributes one point. Thus the canonical map to the discrete union is an equivalence. [A1, F1, F2, F3, F5, given, construct]

2.1 Apply [F2] to the covering sieve $R$ and then map out of any $K$. By [F3], descent identifies $Q_K(X)$ with $\operatorname{Map}(R,Q_K)$. The pushout in step 1.1 identifies this mapping space with $Q_K(U)\times_{Q_K(V)}Q_K(W)$, using Yoneda evaluation. This holds naturally for every $K$, so the defining universal property of limits in [F2] gives the asserted equivalence in $\mathcal D_\infty(\mathbb Z)$, with its restriction cone. Apply [F4] to that cone to obtain the spectral pullback square. [F1, F2, F3, F4, step 1.1] ∎
