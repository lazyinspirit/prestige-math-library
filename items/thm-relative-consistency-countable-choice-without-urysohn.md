---
id: thm-relative-consistency-countable-choice-without-urysohn
kind: theorem
title: "Relative consistency of Countable Choice without Urysohn's lemma"
status: draft
origin: pipeline
deps: [def-countable-choice, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Eleftherios Tachtsis, The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14590"
      locator: "Main relative-consistency theorem, Proc. Amer. Math. Soc. 147 (2019), 4029-4038"
    - title: "Eleftherios Tachtsis, Erratum to The Urysohn Lemma is independent of ZF + Countable Choice"
      url: "https://doi.org/10.1090/proc/14848"
      locator: "Published erratum to the cited theorem"
---

## Statement

If $\mathrm{ZF}$ is consistent, then $\mathrm{ZF} + \mathrm{AC}_{\omega} +
\text{failure of Urysohn's lemma}$ is consistent: there is a model of
$\mathrm{ZF}$ with countable choice ([[def-countable-choice]]) in which some
normal space has two disjoint closed sets admitting no continuous separation
([[def-normal-and-t4-spaces]]).

## Facts & Assumptions

**Given:** The assumed consistency of $\mathrm{ZF}$.

[F1] Tachtsis's cited theorem, read together with its published erratum, proves the exact external implication
$$\operatorname{Con}(\mathrm{ZF})\Longrightarrow\operatorname{Con}(\mathrm{ZF}+\mathrm{AC}_{\omega}+\neg\mathrm{URY}).$$
Here $\mathrm{URY}$ is the usual Urysohn separation assertion for disjoint closed subsets of a normal space. This item records that published relative-consistency theorem; it does not reconstruct the permutation-model and transfer argument.

[F2] By definition, $\neg\mathrm{URY}$ supplies a normal space $X$ and disjoint closed subsets $A,B\subseteq X$ for which there is no continuous $f:X\to[0,1]$ satisfying
$$A\subseteq f^{-1}(\{0\})\qquad\text{and}\qquad B\subseteq f^{-1}(\{1\}).$$
Equivalently, such an $f$ would have $f(a)=0$ for every $a\in A$ and $f(b)=1$ for every $b\in B$ ([[def-normal-and-t4-spaces]]). Equality of the images with the endpoint singletons is not the definition: it is too strong when either closed set is empty.

**Proof technique:** direct.

## Proof

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$. The published relative-consistency theorem [F1], with its erratum included in the cited interface, yields a model of $\mathrm{ZF}+\mathrm{AC}_{\omega}+\neg\mathrm{URY}$. [given, F1]

2.1 In that model $\mathrm{AC}_{\omega}$ is precisely countable choice ([[def-countable-choice]]), while [F2] expands $\neg\mathrm{URY}$ as a normal space with two disjoint closed sets admitting no continuous Urysohn separator. Thus the model has exactly the two properties asserted in the Statement. [step 1.1, F2]

3.1 Therefore $\operatorname{Con}(\mathrm{ZF})\Longrightarrow\operatorname{Con}(\mathrm{ZF}+\mathrm{AC}_{\omega}+\text{failure of Urysohn's lemma})$, as claimed. This proof depends on the corrected published theorem itself and makes no unsupported Pincus transfer of countable choice alone. [step 2.1, F1] ∎
