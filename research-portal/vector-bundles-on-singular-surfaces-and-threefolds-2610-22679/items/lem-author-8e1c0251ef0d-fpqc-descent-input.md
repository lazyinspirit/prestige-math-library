---
id: lem-author-8e1c0251ef0d-fpqc-descent-input
kind: lemma
title: External inputs for flat descent of line bundles
status: published
domain: mathematics
external_input: true
deps:
  - math:def-scheme-over-base
  - math:def-flat-morphism-schemes
  - math:def-quasi-coherent-module-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-etale-morphism-schemes
  - math:def-pullback-module-ringed-spaces
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - def-scheme-sites-and-sheafification
dependency_roles:
  math:def-scheme-over-base: mathematical-premise
  math:def-flat-morphism-schemes: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Fpqc descent of quasi-coherent sheaves
      url: https://stacks.math.columbia.edu/tag/023R
      locator: Proposition 35.5.2
      statement: The canonical functor from quasi-coherent modules on the target to
        module descent data for an fpqc family is fully faithful, and every
        datum is effective.
      hypotheses: A scheme S and an fpqc family of scheme morphisms to S, with
        quasi-coherent modules in the descent data.
      reading_limits: Read Proposition 35.5.2 and its proof through the initial
        faithfulness, fullness and essential-surjectivity discussion. The
        remaining proof and the underlying affine faithfully flat descent
        theorem were not reconstructed.
    - title: The Stacks Project, Descent of finiteness properties of modules
      url: https://stacks.math.columbia.edu/tag/05AY
      locator: Lemma 35.7.6
      statement: Finite local freeness of a quasi-coherent module descends from its
        pullbacks along an fpqc family.
      hypotheses: A quasi-coherent module on a scheme and an fpqc covering family;
        every pullback is finite locally free. Constant rank is not assumed.
      reading_limits: Read Lemma 35.7.6 and its short proof using descent of flatness
        and finite presentation. Those underlying algebraic and sheaf descent
        proofs were not reconstructed.
    - title: The Stacks Project, Meta theorem on quasi-coherent sheaves
      url: https://stacks.math.columbia.edu/tag/03OJ
      locator: Theorem 59.17.4, hypotheses (1)-(4) and first conclusion
      statement: Under the four site hypotheses, the presheaf of global regular
        functions is a sheaf.
      hypotheses: A scheme B; a site whose category is a full subcategory of schemes
        over B; every Zariski cover of an object has a refinement by a site
        cover; B/B is an object; every specified site cover is an fpqc family.
      reading_limits: Read all four hypotheses, the first conclusion, and the proof
        note. The omitted formal arguments and the referenced faithfully flat
        descent theorem were not reconstructed; the second conclusion about
        quasi-coherent modules on the site is not imported.
    - title: The Stacks Project, The fpqc topology
      url: https://stacks.math.columbia.edu/tag/022C
      locator: Lemma 34.9.7, including its etale-cover conclusion
      statement: A jointly surjective family of etale scheme morphisms is an fpqc family.
      hypotheses: Etale scheme morphisms with a common target whose images cover that
        target; no quasi-compactness assumption on each morphism.
      reading_limits: Read the lemma and its short proof, including the reduction from
        etale to fppf covers. The referenced openness theorem was not
        reconstructed. This is the direct replacement for the former indirect
        references to Lemmas 34.7.2 and 34.10.10.
    - title: The Stacks Project, The fpqc topology
      url: https://stacks.math.columbia.edu/tag/022A
      locator: Definition 34.9.1
      statement: An fpqc family consists of flat maps for which each affine target
        open is the union of images of finitely many affine opens in covering
        members.
      hypotheses: A set-indexed family of scheme morphisms with a fixed target; the
        source opens used for a target open map into that open.
      reading_limits: Read Definition 34.9.1 and its immediate surjectivity
        observation. The equivalence criteria and general topology lemmas are
        not imported.
    - title: The Stacks Project, Descent data for quasi-coherent sheaves
      url: https://stacks.math.columbia.edu/tag/023A
      locator: Definitions 35.2.1 and 35.2.3; Lemma 35.2.2 and the paragraph defining
        canonical descent data
      statement: Quasi-coherent descent data are modules on covering members with
        overlap isomorphisms satisfying the triple-product cocycle; compatible
        module maps are their morphisms. Pulling a target module to the members
        gives canonical data functorially. Effectivity means isomorphism to such
        canonical data.
      hypotheses: A set-indexed family of scheme morphisms with common target and
        quasi-coherent modules; pullbacks and canonical comparisons are those
        for module sheaves.
      reading_limits: Read both definitions, Lemma 35.2.2, its omitted-proof hint and
        the canonical-datum paragraph. The lemma supplies the canonical pullback
        construction and its functoriality as an imported input; its proof was
        not reconstructed.
    - title: The Stacks Project, Sites
      url: https://stacks.math.columbia.edu/tag/00VG
      locator: Definitions 7.6.1-7.6.2; Remark 7.6.3(2)
      statement: Covering-family sites have isomorphism, composition and base-change
        axioms; passage to the associated topology preserves sheaves.
      hypotheses: A small category with a set of specified covering families
        satisfying the three axioms; the fibre products in the base-change axiom
        exist in that category.
      reading_limits: Read the two definitions, their clarifications, and Remark
        7.6.3. The separately cited theorem comparing the associated topology
        and its sheaves was not reconstructed.
dependency_level: 6
---

## Statement
For the site assertions fix Grothendieck universes $U\in V$, a $U$-small category and $V$-small sets of sections, with the scheme-site and sheaf conventions stated in the scheme-site interface. A covering-family presentation specifies a set of covering families: isomorphisms cover, composites of covering families cover, and pullbacks of covering families along category arrows exist in the category and cover. Use the associated Grothendieck topology. These specified families, rather than all families generating covering sieves, are the site coverings in the hypotheses below.

Let $S$ be a scheme and let $\mathcal U=\{f_i:S_i\to S\}_{i\in I}$ be a set-indexed family of scheme morphisms. It is an fpqc covering family if every $f_i$ is flat and, for each affine open $W\subset S$, there are finitely many affine opens $V_a\subset S_{i_a}$ mapping into $W$ such that $W=\bigcup_a f_{i_a}(V_a)$. The same member may occur more than once. This condition implies joint surjectivity and does not require the individual $f_i$ to be quasi-compact.

Write $S_{ij}=S_i\times_S S_j$ and $S_{ijk}=S_i\times_S S_j\times_S S_k$, with the indicated projections $p_i,p_j$ and $p_{ij},p_{ik},p_{jk}$. A quasi-coherent module descent datum for $\mathcal U$ consists of quasi-coherent $\mathcal O_{S_i}$-modules $M_i$ and isomorphisms $\varphi_{ij}:p_i^*M_i\to p_j^*M_j$ on $S_{ij}$, with $p_{ik}^*\varphi_{ik}=p_{jk}^*\varphi_{jk}\circ p_{ij}^*\varphi_{ij}$ on every $S_{ijk}$. All iterated pullbacks are compared by their canonical identifications. A morphism to $(N_i,\psi_{ij})$ is a family of module maps $a_i:M_i\to N_i$ such that $\psi_{ij}\circ p_i^*a_i=p_j^*a_j\circ\varphi_{ij}$. Composition and identities are componentwise.

The canonical pullback functor sends a quasi-coherent $\mathcal O_S$-module $M$ to $(f_i^*M,\mathrm{can}_{ij})$ and a module map to its pullbacks. A datum is effective if it is isomorphic to the image of some $M$. For an fpqc family every such datum is effective, and this functor is fully faithful: it induces a bijection between each pair of corresponding morphism sets. If a quasi-coherent module $M$ has every $f_i^*M$ finite locally free, then $M$ is finite locally free, with no global constant-rank requirement. Every jointly surjective family of étale scheme morphisms is an fpqc covering family.

For a base scheme $B$, let $\mathcal C$ be a site with the covering-family presentation above. Assume (1) its category is a full subcategory of $\mathit{Sch}/B$, meaning it contains all $B$-morphisms between its chosen objects; (2) for every Zariski open covering $\{W_a\to T\}$ of an object $T$, some site covering $\{T_b\to T\}$ refines it, meaning there are a function $b\mapsto a(b)$ and maps $T_b\to W_{a(b)}$ whose composites with $W_{a(b)}\to T$ are the given maps $T_b\to T$; (3) $B/B$ is an object; and (4) every specified site covering is an fpqc covering family of schemes. Then the structure presheaf $\mathcal O:T\mapsto\Gamma(T,\mathcal O_T)$ is a sheaf of rings. For a $B$-morphism $h:T'\to T$, its restriction map is the homomorphism $\Gamma(T,\mathcal O_T)\to\Gamma(T',\mathcal O_{T'})$ induced by $h^\sharp$.

## Statement references
[[math:def-scheme-over-base]]

[[math:def-flat-morphism-schemes]]

[[math:def-quasi-coherent-module-scheme]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-etale-morphism-schemes]]

[[math:def-pullback-module-ringed-spaces]]

[[math:def-fibre-product-schemes-universal-property]]

[[math:thm-fibre-products-of-schemes-exist]]

[[def-scheme-sites-and-sheafification]]

## External input
The assertions are imported established results; no local proof is claimed. The formulation interfaces for schemes over a base, flatness, quasi-coherent modules, finite local freeness, étale morphisms, module pullbacks and scheme fibre products are the suppliers in Statement references. Existence of the displayed scheme fibre products is supplied there as well.

The [fpqc family definition](https://stacks.math.columbia.edu/tag/022A) specifies the affine-open covering condition. The [module descent definitions and canonical pullback construction](https://stacks.math.columbia.edu/tag/023A) supply the datum, its morphisms, the functor and effectivity. The [covering-family site convention](https://stacks.math.columbia.edu/tag/00VG) supplies the three covering axioms and the passage to the associated topology.

The imported [fpqc descent proposition](https://stacks.math.columbia.edu/tag/023R) supplies effectivity and full faithfulness; the [finiteness descent lemma](https://stacks.math.columbia.edu/tag/05AY) supplies finite local freeness. The [direct fpqc-cover lemma](https://stacks.math.columbia.edu/tag/022C) supplies the assertion about jointly surjective étale families. The [site theorem](https://stacks.math.columbia.edu/tag/03OJ) supplies the structure-presheaf conclusion under exactly hypotheses (1)-(4). The source records delimit the statements read and the proofs not reconstructed.
