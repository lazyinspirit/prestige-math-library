---
id: thm-dependent-choice-and-finite-multiple-selections
kind: theorem
title: "DC and finite multiple selections"
status: published
origin: pipeline
deps: ["def-multiple-and-dependent-multiple-choice", "def-choice-for-pairs-and-countable-finite-choice", "lem-starting-point-free-dependent-choice", "thm-choice-implies-dependent-implies-countable-choice", "thm-recursion"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Morillon, Synthèse, §2.1 Question 1 and §2.2.1, p.6"
      url: https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf
    - title: "alg-d, On dependent choice, DMC definition and Proposition 6, PDF p.4"
      url: https://alg-d.com/math/ac/dc.pdf
    - title: "Jech, The Axiom of Choice, §9.1, p.133"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF,

$$\mathrm{DC}\ \Longleftrightarrow\ (\mathrm{DMC}\ \text{and}\ \mathrm{AC}_{\omega,\mathrm{fin}}).$$

Also $\mathrm{MC}\Rightarrow\mathrm{DMC}$ and $\mathrm{AC}_\omega\Rightarrow\mathrm{CMC}$.

## Facts & Assumptions

[F1] [[def-multiple-and-dependent-multiple-choice]]: DMC supplies finite nonempty levels with a successor for every point.

[F2] [[thm-choice-implies-dependent-implies-countable-choice]]: DC implies countable choice and hence countable finite choice.

[F3] [[def-choice-for-pairs-and-countable-finite-choice]]: Countable finite choice selects from a sequence of nonempty finite sets.

[F4] [[lem-starting-point-free-dependent-choice]]: An omega path without a prescribed start suffices to obtain full DC.

[F5] [[thm-recursion]]: Recursion applies to one self-map on a set with a supplied initial point.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Under DC take an $R$-path and put $F_n=\{x_n\}$. These are DMC levels. Countable finite choice follows from DC as well. [F1, F2]

1.2 Conversely, take DMC levels for a serial relation. For each $n$ the set of linear orders on the nonempty finite $F_n$ is nonempty and finite (enumerate that single finite set to see this). Countable finite choice supplies an order $<_n$ for every $n$. [F1, F3]

1.3 Under MC select, once for all $x\in X$, a finite nonempty $H(x)\subseteq R[x]$. Fix $a\in X$ and set $F_0=\{a\}$, $F_{n+1}=\bigcup_{x\in F_n}H(x)$. A finite union of finite sets is finite by finite induction, and each member has a successor in the next nonempty level. This recursion proves DMC. [F1, F5]

2.1 Start at the $<_0$-least point and take the $<_{n+1}$-least $R$-successor in $F_{n+1}$. Such a successor exists by the universal successor clause of DMC. The rule is a self-map on tagged states $(n,x)$, so recursion supplies a path. Starting-point-free DC now implies full DC. [F4, F5, step 1.2]

3.1 Under countable choice select $x_n\in X_n$ and use $\{x_n\}$ for the CMC selection. [F1] ∎
