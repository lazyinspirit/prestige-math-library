---
id: "def-sheaf-cohomology-derived-global-sections"
kind: "definition"
title: "Sheaf cohomology as right derived global sections"
status: published
origin: pipeline
deps: [def-global-sections-functor-sheaves, thm-abelian-sheaves-have-enough-injectives, def-right-derived-object-relative-to-injective-resolution-data, def-deleted-resolution, def-cohomology-object-of-a-cochain-complex, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  audited: 2026-09-27
---

## Definition

Assume the Axiom of Choice. Fix a topological space $X$, let
$$\Gamma(X,-):\mathrm{Ab}(X)\to\mathbf{Ab}$$
be the additive left exact global-sections functor
([[def-global-sections-functor-sheaves]]), and let $I$ be the supplied
functorial injective resolution datum on $\mathrm{Ab}(X)$ of
[[thm-abelian-sheaves-have-enough-injectives]]: it assigns to every abelian
sheaf $\mathcal F$ one specific injective resolution
$0\to\mathcal F\to I^\bullet(\mathcal F)$
([[def-right-derived-object-relative-to-injective-resolution-data]]).

For every $q\ge0$ and every abelian sheaf $\mathcal F$ on $X$ define the
**$q$-th sheaf cohomology group of $\mathcal F$** to be the right derived
object of $\Gamma(X,-)$ relative to $I$:
$$H^q(X,\mathcal F):=R_I^q\Gamma(X,\mathcal F)=H^q\bigl(\Gamma(X,I^\bullet(\mathcal F)_{\mathrm{del}})\bigr),$$
the cohomology object of the complex
$\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))\to\cdots$ of abelian
groups obtained from the deleted resolution
([[def-deleted-resolution]], [[def-cohomology-object-of-a-cochain-complex]]).
We also set $H^q(X,\mathcal F):=0$ for $q<0$.

Because $I$ is a fixed supplied datum, the group $H^q(X,\mathcal F)$ is a
specific group for each pair $(X,\mathcal F)$, and for a morphism
$\varphi:\mathcal F\to\mathcal G$ of abelian sheaves we write
$H^q(X,\varphi):=R_I^q\Gamma(X,\varphi)$ for the induced map; it is the map on
cohomology induced by $\Gamma(X,-)$ applied to the cochain maps supplied with
the datum, and it is additive in $\varphi$.

If $J$ is another supplied injective resolution datum on $\mathrm{Ab}(X)$ then
$R_I^q\Gamma(X,-)$ and $R_J^q\Gamma(X,-)$ are naturally isomorphic, so the
$H^q(X,\mathcal F)$ computed from $J$ agree with the ones above up to a
canonical natural isomorphism; the Axiom of Dependent Choice needed for that
comparison follows from AC
([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]],
[[thm-choice-implies-dependent-implies-countable-choice]]). The notation
$H^q(X,\mathcal F)$ therefore does not depend on the datum used, up to this
canonical isomorphism, and we call $q$ the **cohomological degree**.
