---
id: lem-measurable-null-code-orders-bound-constructible-null-unions
kind: lemma
title: A measurable null-code order bounds the constructible null union
status: draft
origin: pipeline
deps: [def-boldface-sigma-one-three-measurability, thm-canonical-definable-global-well-order-of-l, thm-tonelli-and-fubini-for-completed-product-measures, def-countable-choice, def-rapid-and-raisonnier-filters]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Definition 3.4 and Lemma 3.10, pp. 47-48"}
    - {title: "Thomas Jech, Set Theory, Chapter 25", url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/25-descriptive_set_theory.pdf", locator: "Theorem 25.26 and Lemma 25.27, pp. 494-495"}
---

## Statement

For a real $x$ define $A(x)$ on pairs $(u,v)$ by comparing the least canonical
$L[x]$ null $G_\delta$ codes containing $u$ and $v$. Then $A(x)$ is
$\Sigma^1_2(x)$. Under Countable Choice, if $A(x)$ is measurable, the union $G$
of all null Borel sets coded in $L[x]$ is null in the ambient universe.

## Facts & Assumptions

**Given:** A real $x$, the completed coin measure $\nu$ on $2^\omega$, and the family of null $G_\delta$ subsets of $2^\omega$ coded in $L[x]$.

[F1] [[def-rapid-and-raisonnier-filters]] supplies the predicate construction of the hierarchy $L[x]$. The coherent definition-code recursion of [[thm-canonical-definable-global-well-order-of-l]] applies verbatim with the additional predicate $x$, producing the canonical setlike order $<_{L[x]}$; the countable-level and predecessor certificates needed below are proved in steps 1.1--2.1 rather than inferred from the unrelativized theorem.

[F2] [[def-boldface-sigma-one-three-measurability]] supplies the projective pointclass convention and, under Countable Choice, the completed Borel coin probability used by the measurability hypothesis.

[F3] [[def-countable-choice]]: countable unions of null sets are null. It is also the hypothesis of the completed-product Fubini theorem used below.

[F4] [[thm-tonelli-and-fubini-for-completed-product-measures]]: Fubini for the completed product measure: a measurable subset of $2^\omega\times2^\omega$ whose horizontal sections are almost all null has null vertical-section set, and almost every vertical section of a null measurable set is null.

## Proof

1.1 Relativize the definition-code recursion of [F1] to the structures $(L_\alpha[x],\in,x\cap L_\alpha[x])$. It gives a coherent setlike well-order $<_{L[x]}$ whose levels are initial segments. Every real $d\in L[x]$ belongs to a countable level: inside $L[x]$, close $\omega\cup\{x,d\}$ under the canonically least Skolem witnesses of a sufficiently large level. Formula codes and finite tuples canonically enumerate this hull, so no ambient choice is used; collapsing it and inducting through the relativized definition operation gives some countable $L_\beta[x]$ containing $d$. Consequently the real predecessors of $d$ are countable and all occur in one such level. [F1, construct]

2.1 A real $e$ can therefore certify that it enumerates exactly $\{c\in\omega^\omega:c<_{L[x]}d\}$: it codes a well-founded extensional relation on $\omega$, its collapse as a correct countable $L_\beta[x]$ containing $d$, the canonical order computed there, and the enumerated predecessor segment. Well-foundedness is $\Pi^1_1$; extensionality, the staged definition recursion, countable satisfaction and the displayed enumeration check are arithmetic in the code. Thus the certificate predicate $\operatorname{Pred}_x(d,e)$ is $\Pi^1_1(x)$, and $c\in L[x]$ has the analogous form $\exists q\,\operatorname{Lev}_x(c,q)$ with $\operatorname{Lev}_x$ $\Pi^1_1(x)$. Correctness follows by collapse and induction on the coded hierarchy; completeness of the predecessor list follows from the initial-segment property in step 1.1. This is the choice-free relativized certificate behind the standard $\Sigma^1_2(x)$ facts in the cited sources. [F1, step 1.1]

2.2 Put $G$ equal to the union of the null $G_\delta$ sets having codes in $L[x]$. For $u\in G$, let $d(u)$ be the $<_{L[x]}$-least such code containing $u$, and let $\xi(u)$ be its position among the null codes. Disjointifying by least code gives null layers $\widetilde G_\xi$ with $G=\bigcup_\xi\widetilde G_\xi$. [F1, step 1.1]

3.1 Define $A(x)=\{(u,v)\in G\times G:\xi(u)<\xi(v)\}$. Equivalently, $(u,v)\in A(x)$ iff there are reals $c,d,e,q$ such that $\operatorname{Lev}_x(c,q)$ and $\operatorname{Pred}_x(d,e)$ hold, $c$ codes a null $G_\delta$ containing $v$, $d$ codes one containing $u$ but not $v$, and no code enumerated by $e$ codes a null $G_\delta$ containing $v$. Indeed these conditions say $d<_{L[x]}d(v)$ while $d$ contains $u$; conversely take $d=d(u)$ and $c=d(v)$. In particular the formula is false off $G\times G$ and on the diagonal. [step 2.1, step 2.2]

4.1 In the formula of step 3.1, the four real witnesses may be folded into one. The two certificate predicates are $\Pi^1_1(x)$ by step 2.1, while recognition and interpretation of the explicit null-$G_\delta$ codes and the bounded checks through $e$ are arithmetic. A leading existential real followed by this $\Pi^1_1$ matrix is $\Sigma^1_2(x)$ in the convention of [F2]. [F2, step 2.1, step 3.1]

4.2 For $v\in G$, the horizontal section $A(x)^v=\{u:\xi(u)<\xi(v)\}$ is the union of the null sets coded by the predecessor list for $d(v)$ from step 2.1, hence is null by Countable Choice. For $v\notin G$ the section is empty. Thus every horizontal section is completed-measurable and null. [F3, step 2.1, step 3.1]

5.1 Assume $A(x)$ is measurable for the completed product coin measure. Tonelli applied to its indicator and step 4.2 makes $A(x)$ product-null. The completed Fubini theorem then supplies a completed-measurable null set $Z$ such that for every $u\notin Z$ the vertical section $A(x)_u$ is measurable and null. No measure is assigned to exceptional vertical sections. [F4, step 4.2]

6.1 If $G\subseteq Z$, then $G$ is null. Otherwise choose $u\in G\setminus Z$. The lower section $A(x)^u$ is null by step 4.2, the middle layer $\widetilde G_{\xi(u)}$ lies in one null $G_\delta$, and the upper section $A(x)_u$ is null by step 5.1. Since $G=A(x)^u\cup\widetilde G_{\xi(u)}\cup A(x)_u$, the finite union is null. This dichotomy never presupposes measurability of $G$. [F3, step 4.2, step 5.1]

7.1 The steps above prove the complexity and the nullity conclusion, which is the Statement. [step 4.1, step 6.1] ∎
