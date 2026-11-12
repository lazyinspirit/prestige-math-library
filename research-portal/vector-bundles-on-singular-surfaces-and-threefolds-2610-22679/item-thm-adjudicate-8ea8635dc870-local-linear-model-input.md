---
title: Local simplicial sheaf and additive chain model interfaces
status: draft
research_item: thm-adjudicate-8ea8635dc870-local-linear-model-input
dependency_level: 1
sources:
  references:
    - title: J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 05
      url: https://math.sci.uwo.ca/~jardine/LocalHom/lecture05.pdf
      locator: Theorem 10.7 and function-complex paragraph, pp. 10–11; Remark 10.8, p.
        12; Lemma 10.10 and Corollary 10.11, pp. 14–15; Theorem 11.1 and proof,
        pp. 17–19 (PDF page labels).
      statement: On any small Grothendieck site, simplicial presheaves and sheaves
        have local injective simplicial model structures; sheafification and
        inclusion give a Quillen equivalence. Fibrations are sectionwise
        fibrations; fibrant models are sectionwise homotopy equivalent.
      hypotheses: Small site and fixed universes; local homotopy-sheaf weak
        equivalences, monomorphism cofibrations. ZFC for model existence. No
        geometric finiteness or enough-points assumption.
      reading_limits: Checked the listed statements and displayed arguments in the
        author-hosted PDF, including the function complex, evaluation and sheaf
        comparison. Boolean localization, small-object foundations and arguments
        left as exercises are imported, not reconstructed; no independent
        acceptance is claimed.
    - title: J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 06
      url: https://math.sci.uwo.ca/~jardine/LocalHom/lecture06.pdf
      locator: "Section 12: free-module and normalization constructions, pp. 2–3;
        Lemmas 12.1 and 12.3, pp. 3–6; definitions, Proposition 12.5 and
        Corollary 12.6, pp. 7–12 (PDF page labels)."
      statement: Simplicial abelian (pre)sheaves have simplicial local models with
        fibrations created by forgetting and weak equivalences detected by
        normalized homology sheaves. Free abelianization preserves local weak
        equivalences and is left Quillen. Dold–Kan transports the models to
        nonnegative chains; sheafification gives Quillen equivalences.
      hypotheses: Constant coefficient ring Z on a small site; homology means
        sheafified homology. These are local models, without A1 localization.
        Reversing chain grading gives nonpositive cochains.
      reading_limits: Checked the listed constructions, statements and displayed
        arguments in the author-hosted PDF. Model-existence foundations and
        Boolean localization remain imported. This item imports the unreduced
        additive models and nonnegative-chain transport only; it contains no
        pointed-reduction or unbounded-truncation application.
    - title: The Stacks Project, Sheaves of algebraic structures
      url: https://stacks.math.columbia.edu/tag/00YR
      locator: Section 7.44, properties (alpha)–(zeta), and Proposition 7.44.3(2),(3),
        especially its final assertion and displayed discussion.
      statement: Group and abelian-group sheafification agree with underlying set
        sheafification; associated algebraic sheaves are left adjoint to
        inclusion and sheafification preserves finite limits.
      hypotheses: A site and group- or abelian-group-valued presheaves in fixed universes.
      reading_limits: Checked properties (alpha)–(zeta), the abelian-group discussion
        and Proposition 7.44.3, including the listed group case. The proofs
        referred to in Sections 6.15 and 7.10 are imported, not reconstructed;
        no general pullback assertion is used.
    - title: The Stacks Project, Abelian sheaves
      url: https://stacks.math.columbia.edu/tag/03CM
      locator: Section 18.3 opening paragraphs and Lemma 18.3.1(1),(2),(4), with
        displayed proof.
      statement: Abelian sheaves on a site form an abelian category. Kernels are
        presheaf kernels, and cokernels are sheafifications of presheaf
        cokernels. Together with left exactness and adjunction, this gives exact
        abelian sheafification.
      hypotheses: Any site; no enough-points, subcanonicity or scheme regularity
        hypothesis.
      reading_limits: Read the stated passage and proof. Its abelian-category
        criterion and underlying algebraic sheafification results are imported.
        Only this abelian and exact-sheafification interface is used.
    - title: J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 04
      url: https://math.sci.uwo.ca/~jardine/LocalHom/lecture04.pdf
      locator: "Section 9, printed pp. 1–4: ordinary simplicial homotopy groups and
        Definition A on p. 4 (PDF pages 1–4)."
      statement: Local weak equivalence means isomorphism of the component sheaf and
        of every positive-degree homotopy sheaf on every slice site, for each
        object and each vertex of the source over it. Ordinary homotopy groups
        are those of the geometric realization; the definition applies to
        arbitrary small sites.
      hypotheses: A small Grothendieck site, a map of simplicial presheaves, and all
        local source vertices as basepoints. Slice sites have the induced
        topology; no enough-points assumption.
      reading_limits: Checked the opening ordinary homotopy-group conventions and
        Definition A, including its all-objects, all-basepoints quantifiers. The
        enough-points example is motivation, not an assumption. The later
        equivalence with Definition B and the Boolean-localization foundations
        are not reconstructed or needed as additional claims here.
external_input: true
---

## Prerequisites

- [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)
- [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)
- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)
- [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)
- [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)
- [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 05 · Theorem 10.7 and function-complex paragraph, pp. 10–11; Remark 10.8, p. 12; Lemma 10.10 and Corollary 10.11, pp. 14–15; Theorem 11.1 and proof, pp. 17–19 (PDF page labels). `](https://math.sci.uwo.ca/~jardine/LocalHom/lecture05.pdf)
- [` J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 06 · Section 12: free-module and normalization constructions, pp. 2–3; Lemmas 12.1 and 12.3, pp. 3–6; definitions, Proposition 12.5 and Corollary 12.6, pp. 7–12 (PDF page labels). `](https://math.sci.uwo.ca/~jardine/LocalHom/lecture06.pdf)
- [` The Stacks Project, Sheaves of algebraic structures · Section 7.44, properties (alpha)–(zeta), and Proposition 7.44.3(2),(3), especially its final assertion and displayed discussion. `](https://stacks.math.columbia.edu/tag/00YR)
- [` The Stacks Project, Abelian sheaves · Section 18.3 opening paragraphs and Lemma 18.3.1(1),(2),(4), with displayed proof. `](https://stacks.math.columbia.edu/tag/03CM)
- [` J. F. Jardine, Lectures on Local Homotopy Theory, Lecture 04 · Section 9, printed pp. 1–4: ordinary simplicial homotopy groups and Definition A on p. 4 (PDF pages 1–4). `](https://math.sci.uwo.ca/~jardine/LocalHom/lecture04.pdf)


## Statement
Assume the Axiom of Choice and fixed compatible Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$. Let $\mathcal C$ be any $\mathcal U$-small category with a Grothendieck topology, in the general small-site convention. Presheaves take values in $\mathcal V$-small sets. A simplicial presheaf is a contravariant functor from $\mathcal C$ to simplicial sets; a simplicial sheaf has a sheaf in every degree. An abelian presheaf is a contravariant functor to abelian groups, and it is an abelian sheaf when its underlying presheaf of sets is a sheaf. Write $a$ for associated abelian sheafification and $\operatorname{Ab}(\mathcal C)$ for abelian sheaves. This category is abelian, and $a$ is exact and left adjoint to inclusion. For a presheaf of sets $S$, write $\mathbb Z_{\rm sh}[S]=a(U\mapsto\mathbb Z[S(U)])$.

Here is the precise local weak-equivalence convention. For a simplicial set $T$, use its component set $\pi_0(T)$ and the ordinary groups $\pi_i(T,t)=\pi_i(|T|,t)$ of its geometric realization for a vertex $t$ and $i\geq1$. Let $\widetilde\pi_0 S$ be the associated sheaf of $V\mapsto\pi_0(S(V))$. For $U\in\mathcal C$, the slice $\mathcal C/U$ has objects $v:V\to U$ and morphisms the commuting triangles; a sieve on $v$ covers precisely when its underlying sieve on $V$ covers in $\mathcal C$. Given $x\in S_0(U)$, let $\widetilde\pi_i(S|_U,x)$ be the associated group sheaf on this slice of $v\mapsto\pi_i(S(V),v^*x)$. A map $f:S\to T$ is a local weak equivalence exactly when $\widetilde\pi_0 S\to\widetilde\pi_0 T$ is an isomorphism and, for every $U$, $x\in S_0(U)$ and $i\geq1$, the map $\widetilde\pi_i(S|_U,x)\to\widetilde\pi_i(T|_U,f(x))$ is an isomorphism. This definition requires no enough-points hypothesis.

Simplicial presheaves and simplicial sheaves have the local injective simplicial model structures: weak equivalences are the local weak equivalences just defined, cofibrations are monomorphisms, and fibrations have the right lifting property against trivial cofibrations. Sheafification and inclusion give a Quillen equivalence. The simplicial function complex $\operatorname{Map}(X,Y)$ has $q$-simplices the maps from $X\otimes\Delta[q]$ to $Y$; for presheaves the tensor is the sectionwise product, and for sheaves it is its degreewise associated sheaf. Fibrations are sectionwise Kan fibrations, and any two fibrant models of one object are sectionwise simplicially homotopy equivalent.

Simplicial abelian presheaves and sheaves have simplicial model structures whose fibrations and trivial fibrations are created by the forgetful functor $u$ to the corresponding simplicial presheaves or sheaves. Their weak equivalences are precisely the normalized-chain homology-sheaf isomorphisms. Free abelianization, with sheafification when appropriate, is simplicial left Quillen; additive sheafification and inclusion give a Quillen equivalence. The additive function complex has $q$-simplices the additive maps $A\otimes\mathbb Z[\Delta[q]]\to B$. Here the tensor in simplicial degree $r$ is the ordinary abelian-group tensor product $A_r(V)\otimes_{\mathbb Z}\mathbb Z[\Delta[q]_r]$ on each section $V$, followed by abelian sheafification for sheaves; simplex operators act on both factors.

Normalization $N$ and its inverse $\Gamma$ transport this additive model to nonnegative chain complexes. In degree $r$, $N(A)_r=\bigcap_{j<r}\ker d_j$ with differential $(-1)^rd_r$; the inverse is the ordinary Dold–Kan inverse applied sectionwise, with the sheaf-local assertion supplied by the imported additive model. We also use its reindexing to cochain degrees at most zero, by $E_r=E^{-r}$ with the same differential. Cohomology is $H^j(E)=\ker(d^j)/\operatorname{im}(d^{j-1})$ in the abelian category of sheaves; quasi-isomorphism means isomorphism on every such cohomology sheaf.

The mapping-corner axiom in these simplicial models says that a cofibration $i:A\to B$ and fibration $p:X\to Y$ induce a Kan fibration $\operatorname{Map}(B,X)\to\operatorname{Map}(A,X)\times_{\operatorname{Map}(A,Y)}\operatorname{Map}(B,Y)$, trivial if either $i$ or $p$ is a weak equivalence. A derived function complex is $\operatorname{Map}(QX,RY)$, using a cofibrant replacement $QX\to X$ and a fibrant replacement $Y\to RY$; the simplicial model axioms give its invariance under replacements and weak equivalences.

## Statement references
[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## External input
Reference 0 imports the local simplicial models, their function complexes and mapping-corner axiom, sheaf comparison and fibrant evaluation. Reference 1 imports their additive counterparts and normalization transport. Reference 4 supplies the ordinary homotopy-group conventions and the local weak-equivalence definition with its component sheaf and all based slice-site homotopy sheaves. These are unlocalized models; no $\mathbb A^1$ localization is asserted.

The general site and presheaf conventions are supplied by [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data), which allows arbitrary small categories. The slice and based homotopy-sheaf constructions are specified in the Statement and reference 4. Model and Quillen terminology is supplied by [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction), simplices and simplicial homotopies by [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration), and Kan fibrations by [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration). The mapping-corner axiom is stated explicitly because the model-category definition alone does not state it.

References 2 and 3 supply algebraic sheafification and the abelian category in the sense of [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category). Exactness combines left exactness with preservation of cokernels by the left adjoint. Hence sheafifying a presheaf chain complex commutes with its homology. Free groups have the meaning of [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group); the ordinary tensor product is [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) with $R=\mathbb Z$. Cochains and cohomology have the meanings of [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex), applied to this abelian category, without any restriction to scheme sites. The explicit ordinary normalization and inverse are supplied by [math:thm-dold-kan-equivalence-for-simplicial-modules](https://alphabetamath.cc/item/thm-dold-kan-equivalence-for-simplicial-modules); reference 1, rather than that fixed-ring theorem alone, supplies their sheaf-local model application. Choice, as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), is allowed in the imported model factorizations and selections of lifts. This is an external interface; no local proof of these existence theorems is claimed.
