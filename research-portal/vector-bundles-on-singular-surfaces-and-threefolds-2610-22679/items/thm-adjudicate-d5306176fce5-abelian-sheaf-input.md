---
id: thm-adjudicate-d5306176fce5-abelian-sheaf-input
kind: theorem
title: Abelian sheafification and quotient sheaves on a site
domain: mathematics
external_input: true
deps:
  - def-scheme-sites-and-sheafification
  - math:def-free-abelian-group
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-abelian-category
  - math:def-grothendieck-universe-closure-convention
  - math:def-category
  - math:def-functor-and-contravariant-functor
  - math:def-natural-transformation
  - math:def-adjunction-by-unit-counit-and-triangle-identities
  - math:def-kernel-and-image-of-group-homomorphism
  - math:def-quotient-group
provenance:
  statement: ai-altered
  proof: literature-derived
dependency_level: 6
sources:
  references:
    - title: The Stacks Project, abelian sheaves on a site
      url: https://stacks.math.columbia.edu/tag/03CM
      locator: Section 18.3, opening paragraphs and Lemma 18.3.1(1),(4), including its
        displayed proof
      statement: On a site, abelian presheaves have an associated abelian sheaf, left
        adjoint to inclusion. Abelian sheaves form an abelian category; their
        cokernels are the sheafifications of objectwise cokernel presheaves.
      hypotheses: A small site in fixed universes, abelian-group-valued presheaves and
        morphisms of abelian sheaves; no points, subcanonicity or geometric
        finiteness assumption.
      reading_limits: Read Section 18.3 opening paragraphs, Lemma 18.3.1 and its
        displayed proof for this adjudication. The proof invokes Section 7.44
        and an abelian-category criterion; their proofs were not reconstructed.
        Checked the stated adjunction, abelian-category assertion and cokernel
        formula, with no geometric restrictions. No local proof of algebraic
        sheafification is claimed.
    - title: The Stacks Project, free abelian sheaves
      url: https://stacks.math.columbia.edu/tag/03CQ
      locator: Section 18.5, Definition 18.5.1 and the immediately following
        functoriality paragraph
      statement: The free abelian sheaf on a presheaf of sets is the associated
        abelian sheaf of its objectwise free abelian presheaf; this construction
        is functorial.
      hypotheses: Any presheaf of sets on the chosen site; it need not be
        representable or already a sheaf.
      reading_limits: Read Definition 18.5.1 and the immediately following
        functoriality paragraph for this adjudication. Checked that the input is
        an arbitrary presheaf of sets. Lemmas 18.5.2 and 18.5.3, whose proofs
        are omitted on the page, are not used or claimed reconstructed.
status: published
dependency_roles:
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-category: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-natural-transformation: mathematical-premise
  math:def-adjunction-by-unit-counit-and-triangle-identities: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:def-quotient-group: mathematical-premise
---

## Statement
Fix Grothendieck universes $\mathscr U\in\mathscr V$ with $\omega\in\mathscr V$. A **small site** $\mathcal C$ here is a category whose object and morphism sets belong to $\mathscr U$, equipped with a Grothendieck topology $J$. A sieve on $T$ is a set of arrows into $T$ closed under precomposition. For $u:V\to T$, the pullback sieve $u^*R$ consists of arrows $v:W\to V$ with $uv\in R$. A Grothendieck topology specifies covering sieves on each object: the maximal sieve covers; pullback preserves covering sieves; and if $R$ covers $T$ and $u^*S$ covers the domain of every arrow $u$ in $R$, then the sieve $S$ covers $T$. No scheme condition is imposed on the objects or arrows. Presheaves take values in $\mathscr V$-small sets or abelian groups. A presheaf of sets is a sheaf when every compatible family of sections on a covering sieve has a unique amalgamation on its target.

An abelian presheaf is a contravariant functor from $\mathcal C$ to abelian groups; an abelian sheaf is one whose underlying presheaf of sets is a sheaf. Morphisms are natural transformations with homomorphisms as components. There is a functor $a_{\mathrm{Ab}}$ from abelian presheaves to abelian sheaves, left adjoint to inclusion. The category of abelian sheaves is abelian. For a morphism $f:A\to B$ of abelian sheaves, its cokernel is
$$\operatorname{coker}_{\mathrm{ShAb}}(f)=a_{\mathrm{Ab}}\bigl(T\mapsto B(T)/\operatorname{im}(f_T)\bigr).$$
In particular, the quotient is sheafified; its sections are not asserted to be the objectwise quotient.

For a presheaf of sets $P$, form the abelian presheaf $\mathbb Z[P]_{\mathrm{pre}}$ by taking the free abelian group on $P(T)$ at every object $T$ and extending each restriction map to a homomorphism. Its associated abelian sheaf $a_{\mathrm{Ab}}\mathbb Z[P]_{\mathrm{pre}}$ is functorial in $P$.

## Statement references
[[def-scheme-sites-and-sheafification]]

[[math:def-free-abelian-group]]

[[math:thm-abelian-groups-form-an-abelian-category]]

[[math:def-abelian-category]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-category]]

[[math:def-functor-and-contravariant-functor]]

[[math:def-natural-transformation]]

[[math:def-adjunction-by-unit-counit-and-triangle-identities]]

[[math:def-kernel-and-image-of-group-homomorphism]]

[[math:def-quotient-group]]

## External input
Reference 0 supplies associated abelian sheaves, the abelian-category assertion and the sheaf cokernel formula. Reference 1 supplies the free abelian sheaf construction and its functoriality. These are imported interfaces with the hypotheses and reading limits of the two references. No local proof of algebraic sheafification is supplied.

The general small site is defined inline above. Its sieve, topology and underlying set-sheaf conventions agree with those in [[def-scheme-sites-and-sheafification]], without that definition's additional restriction to schemes. The universe convention is [[math:def-grothendieck-universe-closure-convention]]; smallness here means that both the object set and the morphism set belong to the indicated universe. Categories, functors, natural transformations and left adjoints have the meanings of [[math:def-category]], [[math:def-functor-and-contravariant-functor]], [[math:def-natural-transformation]] and [[math:def-adjunction-by-unit-counit-and-triangle-identities]], respectively.

The values and free groups have the meanings supplied by [[math:thm-abelian-groups-form-an-abelian-category]] and [[math:def-free-abelian-group]]. The image subgroup notation is that of [[math:def-kernel-and-image-of-group-homomorphism]], and the objectwise quotient uses [[math:def-quotient-group]]. The category assertion has the AB1 and AB2 meaning of [[math:def-abelian-category]].
