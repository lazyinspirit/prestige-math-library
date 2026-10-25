---
id: "def-cohomological-dimension-space"
kind: "definition"
title: "Cohomological dimension relative to a sheaf class"
status: published
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, def-axiom-of-choice, thm-zero-sheaf-cohomology-global-sections, lem-sheaf-section-over-empty-set-terminal, prop-an-exact-functor-has-vanishing-positive-derived-functors]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a
topological space, let $\mathcal C$ be a class of sheaves of abelian groups on
$X$ (that is, a subclass of the objects of $\mathrm{Ab}(X)$, for example the
class of all abelian sheaves, or a class of sheaves of modules over a fixed sheaf
of rings), and let $H^q(X,-)$ be sheaf cohomology relative to the supplied
functorial injective resolution datum
([[def-sheaf-cohomology-derived-global-sections]]). The **cohomological
dimension of $X$ relative to $\mathcal C$** is
$$\operatorname{cd}_{\mathcal C}(X):=\inf\bigl\{d\in\mathbb Z:\ H^q(X,\mathcal F)=0\text{ for every }\mathcal F\in\mathcal C\text{ and every }q>d\bigr\},$$
the infimum of the empty set of integers being $+\infty$. Thus:

1. $\operatorname{cd}_{\mathcal C}(X)\le d$ if and only if $H^q(X,\mathcal F)=0$
   for every $\mathcal F\in\mathcal C$ and every $q>d$; the value
   $+\infty$ means that for every integer $d$ the class $\mathcal C$ contains a
   sheaf with $H^q(X,\mathcal F)\ne0$ for some $q>d$;
2. if $H^0(X,\mathcal F)\ne0$ for some $\mathcal F\in\mathcal C$, then
   $\operatorname{cd}_{\mathcal C}(X)\in\mathbb Z_{\ge0}\cup\{+\infty\}$. If
   this value is finite, the infimum is attained and
   $\operatorname{cd}_{\mathcal C}(X)=\min\{d\ge0:\ H^q(X,\mathcal F)=0
   \text{ for all }\mathcal F\in\mathcal C,\ q>d\}$, the least nonnegative
   integer with the vanishing property. If there is no finite uniform bound,
   then $\operatorname{cd}_{\mathcal C}(X)=+\infty$ and the infimum is not
   attained;
3. $\operatorname{cd}_{\mathcal C}(X)=-\infty$ exactly when
   $H^q(X,\mathcal F)=0$ for every $\mathcal F\in\mathcal C$ and every $q\ge0$;
   in particular $\operatorname{cd}_{\mathcal C}(\varnothing)=-\infty$ for every
   class $\mathcal C$ on the empty space, since $\mathcal F(\varnothing)$ is the
   one-element group and $\Gamma(\varnothing,-)$ is exact
   ([[lem-sheaf-section-over-empty-set-terminal]],
   [[prop-an-exact-functor-has-vanishing-positive-derived-functors]]);
4. $\operatorname{cd}_{\mathcal C}(X)\le\operatorname{cd}_{\mathcal C'}(X)$
   whenever $\mathcal C\subseteq\mathcal C'$; when $\mathcal C$ is the class of
   all abelian sheaves on $X$ one writes $\operatorname{cd}(X)$ for
   $\operatorname{cd}_{\mathcal C}(X)$ and calls it the cohomological dimension
   of $X$;
5. the definition is independent of the supplied resolution datum up to the
   canonical isomorphisms of
   [[def-sheaf-cohomology-derived-global-sections]], so
   $\operatorname{cd}_{\mathcal C}(X)$ depends on $X$ and $\mathcal C$ only.

In degree zero the vanishing hypothesis in item 2 is satisfied by any class
containing a sheaf with a nonzero global section, by
[[thm-zero-sheaf-cohomology-global-sections]].
