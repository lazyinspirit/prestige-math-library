---
id: "thm-cohomology-one-point-space"
kind: "theorem"
title: "A point has no higher sheaf cohomology"
status: draft
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, thm-zero-sheaf-cohomology-global-sections, prop-an-exact-functor-has-vanishing-positive-derived-functors, def-axiom-of-choice, thm-abelian-sheaves-have-enough-injectives, def-global-sections-functor-sheaves, def-sheaf-on-topological-space, lem-sheaf-section-over-empty-set-terminal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X=\{\ast\}$ be
the one-point topological space, whose only open subsets are $\varnothing$ and
$X$, and let $\mathcal F$ be a sheaf of abelian groups on $X$. Then
$$H^0(X,\mathcal F)\cong\mathcal F(X)$$
canonically, and $H^q(X,\mathcal F)=0$ for every $q>0$. Equivalently, the
global-sections functor $\Gamma(X,-)$ on $\mathrm{Ab}(X)$ is exact, and every
abelian sheaf on a one-point space is $\Gamma$-acyclic
([[def-sheaf-cohomology-derived-global-sections]],
[[thm-zero-sheaf-cohomology-global-sections]]).

## Facts & Assumptions

[F1] Evaluation on the unique nonempty open set of a one-point space identifies the category of sheaves of abelian groups on $X$ with the category of abelian groups, so that $\Gamma(X,\mathcal F)=\mathcal F(X)$ is the corresponding functor ([[def-global-sections-functor-sheaves]]).

[F2] A sheaf is a presheaf in which compatible local sections glue uniquely, and $\mathcal F(\varnothing)$ is the one-element group ([[def-sheaf-on-topological-space]]).

[F3] For an exact functor $F$ between abelian categories the positive right derived functors vanish: $R_I^nF(B)=0$ for every $n>0$ ([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]).

[F4] $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ canonically and naturally in $\mathcal F$ ([[thm-zero-sheaf-cohomology-global-sections]]).

[F5] $\mathcal F(\varnothing)$ is the one-element group, so the only sheaf on the empty space is the zero sheaf ([[lem-sheaf-section-over-empty-set-terminal]]).

## Proof

**Given:** The one-point space $X=\{\ast\}$ and a sheaf of abelian groups $\mathcal F$ on $X$, with the supplied functorial injective resolution datum on $\mathrm{Ab}(X)$.

1.1 Every open subset of $X$ is $\varnothing$ or $X$, and a sheaf $\mathcal F$ is determined by the group $\mathcal F(X)$ together with the structure maps to and from $\mathcal F(\varnothing)=0$ of [F2]: the sheaf condition over the two possible covers of $X$ is automatic, and over the empty cover of $\varnothing$ it forces $\mathcal F(\varnothing)$ to be the one-element group by [F5]. Evaluating at $X$ is therefore a functor from $\mathrm{Ab}(X)$ to abelian groups which is fully faithful, since morphisms of sheaves are exactly the group homomorphisms of the section groups, and essentially surjective, since a group $A$ with $\mathcal F(\varnothing):=0$ and $\mathcal F(X):=A$ and the only possible restriction maps defines a sheaf on $X$; hence evaluation at $X$ is an equivalence of categories, and under it $\Gamma(X,-)$ becomes the identity functor of abelian groups, which is exact. This also shows that a sequence of sheaves on $X$ is exact precisely when the sequence of groups of sections over $X$ is exact. [F1, F2, F5]

2.1 By [step 1.1] the functor $\Gamma(X,-)$ is exact, so the positive right derived functors relative to the supplied injective resolution datum vanish: $H^q(X,\mathcal F)=R_I^q\Gamma(X,\mathcal F)=0$ for every $q>0$ by [F3], applied to the identity functor of $\mathrm{Ab}(X)$ through the equivalence. In degree zero, [F4] gives the canonical isomorphism $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)=\mathcal F(X)$, which under the equivalence of [step 1.1] is the identity of the group $\mathcal F(X)$. This proves both assertions. ∎ [F3, F4, step 1.1]
