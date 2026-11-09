---
id: lem-author-8e1c0251ef0d-fpqc-descent-input
kind: lemma
title: External inputs for flat descent of line bundles
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, Fpqc descent of quasi-coherent sheaves
      url: https://stacks.math.columbia.edu/tag/023R
      locator: Proposition 35.5.2
      statement: For an fpqc covering of a scheme, descent data for quasi-coherent
        modules are effective and the pullback functor to descent data is fully
        faithful.
      hypotheses: The family is an fpqc covering and the modules in the descent datum
        are quasi-coherent.
      reading_limits: The proposition statement and the beginning of its proof were
        read; the underlying affine faithfully flat descent proof was not
        reconstructed.
    - title: The Stacks Project, Descent of finiteness properties of modules
      url: https://stacks.math.columbia.edu/tag/05AY
      locator: Lemma 35.7.6
      statement: A quasi-coherent module whose pullbacks to an fpqc covering are
        finite locally free is finite locally free.
      hypotheses: The module is quasi-coherent and the family is an fpqc covering.
      reading_limits: The lemma statement and its short proof were consulted; the
        cited algebraic descent results were not reconstructed.
    - title: The Stacks Project, Meta theorem on quasi-coherent sheaves
      url: https://stacks.math.columbia.edu/tag/03OJ
      locator: Theorem 59.17.4, first conclusion
      statement: The structure presheaf is a sheaf on a site satisfying the listed
        full-subcategory, Zariski-refinement, terminal-object and fpqc-cover
        hypotheses.
      hypotheses: The site is a full subcategory of schemes over the base, contains
        the base, has refinements of Zariski covers, and has fpqc covering
        families.
      reading_limits: The theorem statement and proof note were read; its omitted
        formal arguments were not reconstructed.
    - title: The Stacks Project, The fppf topology
      url: https://stacks.math.columbia.edu/tag/021L
      locator: Lemma 34.7.2
      statement: Every étale covering is an fppf covering.
      hypotheses: A jointly surjective family of étale scheme morphisms.
      reading_limits: The statement and short proof were read; the cited morphism
        lemmas were not reconstructed.
    - title: The Stacks Project, The V topology
      url: https://stacks.math.columbia.edu/tag/0ETK
      locator: Lemma 34.10.10, proof
      statement: Every fppf covering is an fpqc covering.
      hypotheses: An fppf covering of schemes.
      reading_limits: The lemma statement and proof were read; the cited fpqc-topology
        lemma was not reconstructed.
dependency_level: 0
---

## Statement
For a scheme, an fpqc covering admits effective and fully faithful descent of quasi-coherent modules. If the descended module pulls back to a finite locally free module on every member, it is finite locally free. A jointly surjective étale family is fpqc. On a site satisfying the four hypotheses of Stacks Theorem 59.17.4 quoted in the source record, the structure presheaf is a sheaf.

## External input
These are imported established descent and sheaf results with the hypotheses and reading limits in the source records. Their proofs are not locally reconstructed.
