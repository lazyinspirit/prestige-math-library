---
title: External classification of torsors by first cohomology
status: published
research_item: lem-author-8e1c0251ef0d-h1-torsor-input
dependency_level: 9
sources:
  references:
    - title: The Stacks Project, First cohomology and torsors
      url: https://stacks.math.columbia.edu/tag/03AG
      locator: Definition 21.4.1; Lemma 21.4.3, statement and proof
      statement: Abelian-sheaf torsors up to equivariant isomorphism are canonically
        classified by first site cohomology; the inverse uses local lifts in an
        injective embedding.
      hypotheses: A site and an abelian sheaf; here the site is small with a terminal
        object and the stipulated universe bounds.
      reading_limits: Read the definition, lemma and both constructions. The source
        omits their inverse verification; it remains imported. Antecedent
        existence and cohomology proofs were not reconstructed.
    - title: The Stacks Project, Cohomology of sheaves
      url: https://stacks.math.columbia.edu/tag/01FT
      locator: Opening paragraphs and equations 21.2.0.1 through 21.2.0.3
      statement: Object cohomology and site cohomology are right-derived evaluation
        and global sections, computed on injective resolutions.
      hypotheses: An abelian sheaf on a site, with an object for evaluation and the
        usual size bounds.
      reading_limits: Read the opening cohomology definitions through equation
        21.2.0.3. The enough-injectives theorem cited there was not
        reconstructed; the existing general small-site supplier provides the
        resolution interface used here.
external_input: true
---

PDF p. 4: Weight one units and Picard identification

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)
- [` The Stacks Project, First cohomology and torsors · Definition 21.4.1; Lemma 21.4.3, statement and proof `](https://stacks.math.columbia.edu/tag/03AG)
- [` The Stacks Project, Cohomology of sheaves · Opening paragraphs and equations 21.2.0.1 through 21.2.0.3 `](https://stacks.math.columbia.edu/tag/01FT)


## Statement
Assume the Axiom of Choice and fixed universes $\mathcal U\in\mathcal V$, with enlarged bounds for sheaf and derived categories as in the general small-site derived-evaluation interface. Let $\mathcal C$ be a $\mathcal U$-small site, with $\mathcal V$-small sheaf values, and let $1$ be a terminal object: each object has exactly one arrow to $1$. For an abelian sheaf $G$ on $\mathcal C$, there is a canonical bijection from isomorphism classes of $G$-torsors to $H^1(G)$.

Here $H^1(G)=H^1(\mathcal C,G)$ means $H^1(R\Gamma(1,G[0]))$, computed from a nonnegative injective resolution $0\to G\to I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots$ as $\ker(d^1(1))/\operatorname{im}(d^0(1))$. Existence and independence of this resolution, including agreement with K-injective derived evaluation, are supplied by the general small-site interface. Evaluation at $1$ is global sections: a compatible family over the site is uniquely the family of restrictions of its component at $1$.

A $G$-torsor is a sheaf of sets $P$ with restriction-compatible actions $G(U)\times P(U)\to P(U)$ satisfying $0\cdot p=p$ and $(g+h)\cdot p=g\cdot(h\cdot p)$. For any $p,q\in P(U)$ there must be exactly one $g\in G(U)$ with $g\cdot p=q$. Local nonemptiness means that for every $U$ there is a covering sieve $R$ on $U$ with $P(V)\ne\varnothing$ for every arrow $V\to U$ in $R$. Isomorphisms are invertible maps of sheaves commuting with these actions.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)

## External input
Reference 0 imports the torsor definition and canonical classification. Its inverse represents a cohomology class by a global section of the quotient sheaf $I/G$, for an injective embedding $G\hookrightarrow I$, and takes the sheaf of local lifts of that section. Reference 1 specifies the cohomology convention. The general small-site derived-evaluation supplier provides its resolution existence and independence. The classification proof, including the omitted verification that the two constructions are inverse, remains imported; no local reconstruction is claimed.
