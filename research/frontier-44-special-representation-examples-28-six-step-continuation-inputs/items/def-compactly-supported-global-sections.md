---
id: def-compactly-supported-global-sections
kind: definition
title: "Compactly supported global sections and their right derived functors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-sheaf-on-topological-space, def-support-of-a-sheaf-section,
       def-germ-of-section, def-stalk-of-presheaf, def-morphism-of-presheaves,
       def-global-sections-functor-sheaves,
       def-section-restriction-and-global-section, def-additive-functor,
       def-left-exact-and-right-exact-functor,
       def-sheaf-cohomology-derived-global-sections,
       def-right-derived-object-relative-to-injective-resolution-data,
       thm-abelian-sheaves-have-enough-injectives,
       thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic,
       thm-right-derived-functors-form-a-cohomological-delta-functor,
       thm-choice-implies-dependent-implies-countable-choice,
       lem-global-sections-left-exact, thm-exactness-of-sheaves-stalkwise,
       def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact,
       lem-compactness-of-a-subspace-is-ambient,
       def-axiom-of-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.1: for the terminal map a_X : X -> pt the functor f_! is the compactly supported global-sections functor, left exact with values in the coefficient category; §1.4 uses its right derived functors to state the finite-dimensionality criterion'
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.1-§11.2, printed pp. 201-210: the functor Gamma_c of compactly supported sections and its role in the c-soft calculus; §10.2 equation (10.2.4) for supports of sections'
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20); §21 Cohomology with support in a closed subset (tag 0A39)"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
      locator: '§21, tag 0A39: sections with support in a closed subset as a left exact functor and the pattern of its right derived functors'
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a locally
compact Hausdorff space, let $\mathrm{Ab}(X)$ be the category of sheaves of
abelian groups on $X$ ([[def-sheaf-on-topological-space]]) and let
$$\Gamma(X,-):\mathrm{Ab}(X)\longrightarrow\mathbf{Ab}$$
be the additive left exact global-sections functor
([[def-global-sections-functor-sheaves]],
[[def-section-restriction-and-global-section]]). For a sheaf $\mathcal F$ on
$X$ define the **compactly supported global sections** of $\mathcal F$ to be the
subgroup
$$\Gamma_c(X,\mathcal F):=\{\,s\in\Gamma(X,\mathcal F):\operatorname{Supp}(s)\ \text{is a compact subset of }X\,\}\subseteq\Gamma(X,\mathcal F),$$
where the support of a section is the set of points at which its germ is
nonzero ([[def-support-of-a-sheaf-section]], [[def-germ-of-section]],
[[def-compact-space]]). A morphism $\varphi:\mathcal F\to\mathcal G$ of abelian
sheaves induces a map $\Gamma_c(X,\varphi)$ by restriction of
$\Gamma(X,\varphi)$, and this makes $\Gamma_c(X,-)$ an additive functor
$\mathrm{Ab}(X)\to\mathbf{Ab}$ ([[def-additive-functor]],
[[def-morphism-of-presheaves]]). Six consistency facts hold; all are immediate
from the definitions, and they record the interface used by the compact-support
calculus.

1. **Well-definedness of $\Gamma_c(X,\varphi)$.** If $x\notin
   \operatorname{Supp}(s)$ then $s_x=0$ in the stalk $\mathcal F_x$
   ([[def-stalk-of-presheaf]]), and since the stalk maps of a morphism commute
   with the germ maps, $\varphi(s)_x=\varphi_x(s_x)=0$, so
   $\operatorname{Supp}(\varphi(s))\subseteq\operatorname{Supp}(s)$. A support
   $\operatorname{Supp}(t)$ is closed in $X$: if $x\notin
   \operatorname{Supp}(t)$ then $t$ agrees with the zero section on some open
   neighbourhood of $x$, by the description of equality of germs
   ([[def-support-of-a-sheaf-section]]). Hence
   $\operatorname{Supp}(\varphi(s))$ is a closed subset of $X$ contained in the
   compact set $\operatorname{Supp}(s)$; being closed in $X$ it is closed in the
   subspace $\operatorname{Supp}(s)$, so it is a compact subset of that compact
   space ([[thm-closed-subspace-of-a-compact-space-is-compact]]) and therefore
   a compact subset of $X$ ([[lem-compactness-of-a-subspace-is-ambient]]), and
   $\Gamma_c(X,\varphi)$ maps $\Gamma_c(X,\mathcal F)$ into
   $\Gamma_c(X,\mathcal G)$. Composites and identities are computed
   componentwise, so $\Gamma_c(X,-)$ is a functor; it is additive because
   $\Gamma(X,-)$ is.
2. **Sheaves of $k$-vector spaces.** If $\mathcal F$ is a sheaf of
   $k$-vector spaces, then $\Gamma_c(X,\mathcal F)$ is a $k$-vector subspace of
   $\Gamma(X,\mathcal F)$: the support of $c\cdot s$ is
   $\operatorname{Supp}(s)$ for $c\ne0$ and $\varnothing$ for $c=0$, and the
   zero section has empty support. For a morphism $\varphi$ of sheaves of
   $k$-vector spaces the map $\Gamma_c(X,\varphi)$ is $k$-linear, since
   $\Gamma(X,\varphi)$ is. The higher derived functors below are computed from
   an injective resolution datum on abelian sheaves, so they are abelian
   groups; the degree-zero part is the $k$-vector space
   $\Gamma_c(X,\mathcal F)$.
3. **Left exactness.** For every short exact sequence
   $0\to\mathcal F'\xrightarrow{\varphi'}\mathcal F\xrightarrow{\varphi}\mathcal F''\to0$
   of abelian sheaves the sequence
   $$0\to\Gamma_c(X,\mathcal F')\xrightarrow{\Gamma_c(\varphi')}\Gamma_c(X,\mathcal F)\xrightarrow{\Gamma_c(\varphi)}\Gamma_c(X,\mathcal F'')$$
   is exact. Injectivity: a monomorphism of sheaves has injective stalk maps
   ([[thm-exactness-of-sheaves-stalkwise]]), so
   $\operatorname{Supp}(\varphi'(s'))=\operatorname{Supp}(s')$ and a section
   killed by $\varphi'$ has all germs zero, hence is zero. Exactness at the
   middle: the kernel of $\Gamma(X,\varphi)$ is the image of
   $\Gamma(X,\varphi')$ by left exactness of global sections
   ([[lem-global-sections-left-exact]]); if $s=\varphi'(s')$ has compact
   support, then $s'$ has the same support,
   $\operatorname{Supp}(s')=\operatorname{Supp}(\varphi'(s'))=
   \operatorname{Supp}(s)$, because $\varphi'$ is stalk-injective, so $s'$ lies
   in $\Gamma_c(X,\mathcal F')$, and the reverse inclusion is immediate from
   $\varphi\circ\varphi'=0$. Thus $\Gamma_c(X,-)$ is an additive left exact
   functor on $\mathrm{Ab}(X)$ ([[def-left-exact-and-right-exact-functor]]).
4. **The derived functors.** Abelian sheaves on $X$ have enough injectives, and
   the embeddings of [[thm-abelian-sheaves-have-enough-injectives]] supply one
   functorial injective resolution datum $\mathcal F\mapsto I^\bullet(\mathcal F)$
   on the whole category $\mathrm{Ab}(X)$, under the Axiom of Choice
   ([[def-right-derived-object-relative-to-injective-resolution-data]]). The
   **compactly supported cohomology** of $\mathcal F$ is
   $$H^q_c(X,\mathcal F):=R^q\Gamma_c(X,\mathcal F):=H^q\bigl(\Gamma_c(X,I^\bullet(\mathcal F)_{\mathrm{del}})\bigr)\qquad(q\ge0),\qquad H^q_c(X,\mathcal F):=0\quad(q<0),$$
   the cohomology of the deleted resolution, as in the pattern of
   [[def-sheaf-cohomology-derived-global-sections]]; for a morphism $\varphi$ we
   write $H^q_c(X,\varphi):=R^q\Gamma_c(X,\varphi)$ for the induced map.
5. **Independence of the datum.** If $J$ is another supplied injective
   resolution datum on $\mathrm{Ab}(X)$, then $R^q\Gamma_c(X,-)$ computed from
   $J$ is naturally isomorphic to $R^q\Gamma_c(X,-)$ computed from $I$
   ([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]);
   the Axiom of Dependent Choice needed for that comparison follows from AC
   ([[thm-choice-implies-dependent-implies-countable-choice]]). The notation
   $H^q_c(X,\mathcal F)$ therefore does not depend on the datum up to this
   canonical natural isomorphism.
6. **Delta functor and the compact case.** Since $\Gamma_c(X,-)$ is additive
   and left exact and the datum is defined on all of $\mathrm{Ab}(X)$, the
   functors $R^q\Gamma_c(X,-)$, $q\ge0$, carry connecting maps that make them a
   cohomological delta functor with $R^0\Gamma_c(X,-)\cong\Gamma_c(X,-)$, and
   every short exact sequence of abelian sheaves has a long exact
   compact-support cohomology sequence, natural in the sequence
   ([[thm-right-derived-functors-form-a-cohomological-delta-functor]]). If $X$
   is compact, then for every global section $s$ its support is closed in $X$ by
   fact 1, hence a closed subset of the compact space $X$ and therefore
   compact, so every global section is compactly supported; hence
   $\Gamma_c(X,-)=\Gamma(X,-)$ and
   $H^q_c(X,\mathcal F)=H^q(X,\mathcal F)$ for every $q$, where $H^q(X,-)$ is
   the sheaf cohomology of [[def-sheaf-cohomology-derived-global-sections]]
   computed from the same datum.

## Remarks

- **Terminology and provenance.** For the terminal map $a_X:X\to\mathrm{pt}$
  the functor $a_{X!}$ is the compactly supported global-sections functor, left
  exact, and its right derived functors are $H^q_c(X,-)$; this is Verdier's
  starting point for the duality theory of locally compact spaces, and
  Schapira writes the same functor $\Gamma_c(X;-)$. The construction above is
  the special case of that pattern with $Y$ a point.

- **Choice accounting.** The Axiom of Choice is used exactly once in the
  definition, through the injective resolution datum for abelian sheaves
  ([[thm-abelian-sheaves-have-enough-injectives]]); the independence of the
  datum and the delta-functor statement use the Axiom of Dependent Choice,
  which follows from AC ([[thm-choice-implies-dependent-implies-countable-choice]]).
  Nothing else in the definition selects from infinitely many sets.
