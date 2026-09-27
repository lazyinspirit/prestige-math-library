---
id: "def-global-sections-functor-sheaves"
kind: "definition"
title: "Global sections of an abelian sheaf"
status: draft
origin: pipeline
deps: [def-section-restriction-and-global-section, lem-global-sections-left-exact, thm-abelian-sheaves-form-abelian-category, def-morphism-of-presheaves]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Fix a topological space $X$ and write $\mathrm{Ab}(X)$ for the category of
sheaves of abelian groups on $X$ ([[thm-abelian-sheaves-form-abelian-category]]).
For a sheaf $\mathcal F$ on $X$ put
$$\Gamma(X,\mathcal F):=\mathcal F(X),$$
the abelian group of global sections of $\mathcal F$
([[def-section-restriction-and-global-section]]), and for a morphism
$\varphi:\mathcal F\to\mathcal G$ of abelian sheaves put
$$\Gamma(X,\varphi):=\varphi_X:\mathcal F(X)\longrightarrow\mathcal G(X).$$
Since a morphism of sheaves is a morphism of the underlying presheaves, it is a
family of group homomorphisms commuting with restriction
([[def-morphism-of-presheaves]]), and composites and identities are computed
componentwise; hence $\mathcal F\mapsto\Gamma(X,\mathcal F)$ and
$\varphi\mapsto\Gamma(X,\varphi)$ define the **global-sections functor**
$\Gamma(X,-):\mathrm{Ab}(X)\to\mathbf{Ab}$.

Addition of morphisms $\mathcal F\to\mathcal G$ is componentwise
([[thm-abelian-sheaves-form-abelian-category]]), so
$\Gamma(X,\varphi+\psi)=\Gamma(X,\varphi)+\Gamma(X,\psi)$ and $\Gamma(X,-)$ is
additive. It is left exact: if $0\to\mathcal F'\to\mathcal F\to\mathcal F''$ is
exact in $\mathrm{Ab}(X)$, then
$0\to\Gamma(X,\mathcal F')\to\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal F'')$ is
exact ([[lem-global-sections-left-exact]]). It is not exact in general, since it
need not preserve epimorphisms ([[lem-global-sections-left-exact]]).
