---
title: Local integral chains detect global natural maps into Chern targets
status: published
research_item: lem-author-3cde9692a7e9-derived-chain-detection
dependency_level: 23
---

PDF p. 11: Lemma5.3, second Chern additivity

## Prerequisites

- [lem-author-3cde9692a7e9-local-free-test](item-lem-author-3cde9692a7e9-local-free-test)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-8ea8635dc870-reduced-chain-adjunction](item-lem-adjudicate-8ea8635dc870-reduced-chain-adjunction)


## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions. Fix a small Grothendieck site $\mathcal C$, with local weak equivalences defined by isomorphisms of all homotopy sheaves. All spaces and coefficients below are on this same site, using the local injective simplicial-sheaf model.

Let $f:P\to Q$ be a map of pointed simplicial sheaves whose unreduced normalized integral chain map $C(f)$ is a quasi-isomorphism of complexes of sheaves. Here $C(S)$ is the normalization of degreewise free abelian sheafification, reindexed into nonpositive cochain degrees; equivalently, the hypothesis is isomorphism on all sheafified integral homology groups. For every unbounded cochain complex $D$ of abelian sheaves and every integer $n$, set $K(D,n)$ to be the derived Eilenberg target obtained by applying inverse Dold–Kan and local fibrant replacement to $\tau^{\leq0}(D[n])$, pointed by zero. The shift has $D[n]^r=D^{r+n}$ with differential $(-1)^nd_D$, and the canonical truncation uses the kernel of the degree-zero differential at its cut. Precomposition gives an equivalence
$$\operatorname{RMap}_*(Q,K(D,n))\longrightarrow\operatorname{RMap}_*(P,K(D,n)).$$
In particular it is injective on pointed homotopy classes.

This applies to $j:\underline{\mathbb Z}\times BGL\to\mathcal K$ and $j\times j$ on the small Nisnevich site of a noetherian finite-dimensional scheme over a field, with their supplied actual perfect K-space and derived Chern coefficient targets. Thus identities of the natural Chern maps on $\mathcal K$ or $\mathcal K\times\mathcal K$ are detected after the local free-class comparison, including their induced maps on derived sections and global cohomology classes. The general first assertion applies on any fixed small site with these local models; no noetherian or dimension hypothesis is imposed on that assertion.

## Statement references
[lem-adjudicate-8ea8635dc870-reduced-chain-adjunction](item-lem-adjudicate-8ea8635dc870-reduced-chain-adjunction)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[lem-author-3cde9692a7e9-local-free-test](item-lem-author-3cde9692a7e9-local-free-test)

[thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible universes and site-size bounds. These are inherited by the local model/replacement constructions in [F2] and the actual free-class and Chern models in [F1]. Their uses occur at steps 1.1–2.1.

[F1] [lem-author-3cde9692a7e9-local-free-test](item-lem-author-3cde9692a7e9-local-free-test) supplies local integral homology equivalences for the pointed maps $j$ and $j\times j$ on the stated noetherian small Nisnevich site. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) supplies the actual pointed perfect K-space operations and derived simplicial-abelian targets for positive Chern indices, with coefficient shifts $D_i[2i]$ and natural restrictions. Their derived Eilenberg convention is the shift, canonical nonpositive truncation and local replacement fixed in [F2]. The constant $C_0=1$ enters only as the constant term of a Cartan expression, not as a pointed map into an additive target.

[F2] [lem-adjudicate-8ea8635dc870-reduced-chain-adjunction](item-lem-adjudicate-8ea8635dc870-reduced-chain-adjunction) supplies the reduced free abelian sheaf, its normalized complex $\widetilde C(S)$, the natural splitting $C(S)\cong\mathbb Z_{\rm sh}[*][0]\oplus\widetilde C(S)$, and the natural pointed derived mapping-space adjunction into $K(D,n)$. Its precise local model and good truncation include arbitrary unbounded coefficient complexes. These assertions are supplied by that lemma and its explicit model input, rather than inferred from set-valued sheafification alone.

[F3] [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) fixes the small-site and scheme-site conventions; [def-derived-sections-on-sites](item-def-derived-sections-on-sites) fixes abelian sheaves, quasi-isomorphisms and derived coefficient sections. Derived sections of a simplicial-sheaf object mean evaluation after local fibrant replacement, as in [F2]'s supplied model. Equality of local homotopy classes therefore induces equality after derived evaluation. This assertion concerns derived sections, not ordinary evaluation of an arbitrary unfibrant presheaf.

## Proof
**Given:** The fixed site and bounds, pointed $f$ with the stated unreduced local chain equivalence, coefficient complex $D$, integer $n$, and Choice.

**Goal:** Prove detection of natural map classes into the derived target, including the actual Chern applications.

1.1 By [F2], the unreduced chains split naturally into their basepoint and reduced summands. Since $f$ preserves the basepoint, $C(f)$ is the identity on the first summand and $\widetilde C(f)$ on the second. Taking cohomology sheaves in this finite direct-sum decomposition shows that $\widetilde C(f)$ is a quasi-isomorphism. Apply the pointed derived adjunction of [F2] with target $\tau^{\leq0}(D[n])$. Under that natural equivalence, the precomposition map in the Statement is the precomposition map of derived additive function complexes induced by $\widetilde C(f)$. The latter is an equivalence because derived function complexes invert quasi-isomorphisms of their source. Hence the former is an equivalence and is injective on $\pi_0$. This does not require $f$ itself to be a local weak equivalence. [A1, F2, F3]

2.1 For the particular maps $j$ and $j\times j$, [F1] verifies the unreduced homology hypothesis on their common site. Step 1.1 therefore detects identities between the actual maps into each positive Chern coefficient target; in particular, a pointed Cartan difference that vanishes after $j\times j$ vanishes as a local natural map. In a local fibrant target, equality of pointed map classes is represented by a pointed simplicial homotopy, since all pointed sources are cofibrant in this model by [F2]. Applying derived evaluation to the equality gives equality of the induced maps of derived sections, naturally in the site object, and hence of the resulting global cohomology classes by [F3]. This retains the descent morphisms of those derived objects. It uses neither global generation of perfect $K_0$ by vector bundles nor ordinary evaluation of a local equivalence on an unfibrant source. [A1, F1, F2, F3, step 1.1] ∎
