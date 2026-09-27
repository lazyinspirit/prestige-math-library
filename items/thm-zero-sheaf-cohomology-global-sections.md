---
id: "thm-zero-sheaf-cohomology-global-sections"
kind: "theorem"
title: "Degree-zero sheaf cohomology is global sections"
status: draft
origin: pipeline
deps: [def-sheaf-cohomology-derived-global-sections, def-global-sections-functor-sheaves, thm-abelian-sheaves-have-enough-injectives, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
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
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement

Assume the Axiom of Choice, let $X$ be a topological space, and let
$H^q(X,-)$ be sheaf cohomology computed from the supplied functorial injective
resolution datum $I$ on $\mathrm{Ab}(X)$
([[def-sheaf-cohomology-derived-global-sections]]). Then for every abelian sheaf
$\mathcal F$ on $X$ there is a canonical isomorphism
$$H^0(X,\mathcal F)\xrightarrow{\ \sim\ }\Gamma(X,\mathcal F),$$
natural in $\mathcal F$; it identifies $H^0(X,\mathcal F)$ with the kernel of
$\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))$.

## Facts & Assumptions

[F1] $H^0(X,\mathcal F)=R_I^0\Gamma(X,\mathcal F)$ is the zeroth right derived object of $\Gamma(X,-)$ relative to the supplied datum $I$, and $H^0(X,-):=R_I^0\Gamma(X,-)$ is functorial in $\mathcal F$ ([[def-sheaf-cohomology-derived-global-sections]]).

[F2] For an additive left exact functor $F$ and a supplied injective resolution datum $I$ on a class $\mathcal D$, every $A\in\mathcal D$ carries a canonical isomorphism $R_I^0F(A)\to F(A)$, natural in $A$ ([[thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]]).

[F3] $\Gamma(X,-)$ is additive and left exact ([[def-global-sections-functor-sheaves]]).

[F4] AC implies DC in ZF ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F5] $I$ assigns to every abelian sheaf on $X$ a specific injective resolution, and $\mathrm{Ab}(X)$ has enough injectives ([[thm-abelian-sheaves-have-enough-injectives]]).

## Proof

**Given:** The Axiom of Choice, a topological space $X$ and an abelian sheaf $\mathcal F$ on $X$.

1.1 By [F4] the Axiom of Choice gives the Axiom of Dependent Choice in ZF, which is the hypothesis under which [F2] and the comparison theorems for right derived functors are stated. [F4, given]

1.2 By [F3] the functor $\Gamma(X,-)$ is additive and left exact, and by [F5] the supplied datum $I$ assigns a specific injective resolution to every abelian sheaf on $X$, so $\mathcal F$ lies in the domain of $I$. Hence the hypotheses of [F2] are met by $F=\Gamma(X,-)$, the datum $I$ and the object $\mathcal F$. [F3, F5]

2.1 Applying [F2] gives a canonical isomorphism $H^0(X,\mathcal F)=R_I^0\Gamma(X,\mathcal F)\xrightarrow{\sim}\Gamma(X,\mathcal F)$, using the identification $H^0=R_I^0\Gamma$ of [F1]; the isomorphism is natural in $\mathcal F$ because [F2] provides a natural isomorphism of functors. [F1, F2, step 1.2] [F1, F2]

3.1 Spelling out the derived object, $H^0(X,\mathcal F)$ is the zeroth cohomology of the complex $\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))\to\cdots$ [F1], that is the kernel of $\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))$; the isomorphism of step 2.1 is the composite of the canonical map $\Gamma(X,\mathcal F)\to\ker\bigl(\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))\bigr)$ coming from the exactness of $0\to\Gamma(X,\mathcal F)\to\Gamma(X,I^0(\mathcal F))\to\Gamma(X,I^1(\mathcal F))$ with its inverse, so the identification with the kernel is the canonical one. [F1, F3, step 2.1] ∎ [F1, F3] ∎
