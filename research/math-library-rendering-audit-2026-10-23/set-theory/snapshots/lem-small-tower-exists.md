---
id: lem-small-tower-exists
kind: lemma
title: A tower of size at most the continuum exists
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-almost-inclusion-pseudointersection-and-tower, thm-transfinite-recursion, def-axiom-of-choice, thm-well-ordering-theorem, thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero, def-cardinal-arithmetic, thm-recursion, def-natural-numbers, def-countable]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, tower discussion immediately before Proposition 34, printed p.14"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC there is a tower of infinite subsets of $\omega$ whose length is at most
$\mathfrak c=2^{\aleph_0}$ ([[def-almost-inclusion-pseudointersection-and-tower]]
for towers, almost inclusion $\subseteq^{*}$ and pseudointersections).

The construction below enumerates $[\omega]^{\omega}$, keeps a running
pseudointersection of the part of the family built so far, and at stage
$\alpha$ chooses one of the two infinite halves of that pseudointersection on
which the $\alpha$-th set fails to be almost contained. If the running
pseudointersection ever disappears the family built so far is already a tower;
otherwise every one of the at most $\mathfrak c$ infinite sets is defeated by
some member, and the whole family is a tower.

## Facts & Assumptions
**Given:** the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $[\omega]^{\omega}$ is the set of infinite subsets of $\omega$; $A\subseteq^{*}B$ means that $A\setminus B$ is finite; a pseudointersection of a family $\mathcal F\subseteq[\omega]^{\omega}$ is an $X\in[\omega]^{\omega}$ with $X\subseteq^{*}A$ for every $A\in\mathcal F$; a tower is a family $\langle A_{\alpha}:\alpha<\kappa\rangle$, indexed by an ordinal, of infinite sets with $A_{\beta}\supseteq^{*}A_{\alpha}$ for $\beta<\alpha$ and with no pseudointersection. ([[def-almost-inclusion-pseudointersection-and-tower]])

[F2] The Axiom of Choice: every family of nonempty sets has a choice function; equivalently, every set is well-orderable. ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]])

[F3] Transfinite recursion on a well-order produces the unique function satisfying a prescribed rule at each stage, the rule being a formula with set parameters. ([[thm-transfinite-recursion]])

[F4] Under AC, $\lvert\mathcal P(\omega)\rvert=2^{\aleph_0}=\mathfrak c$ as cardinals, and $\lvert A\rvert\le\lvert B\rvert$ whenever $A\subseteq B$. ([[thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero]], [[def-cardinal-arithmetic]])

[F5] Recursion on the natural numbers produces the unique function with a prescribed value at $0$ and prescribed successor step, and every nonempty subset of $\mathbb N$ has a least element. ([[thm-recursion]], [[def-natural-numbers]])

## Proof

1.1 By [F2], $[\omega]^{\omega}$ is well-orderable. Let $\delta$ be its **initial cardinal** $\lvert[\omega]^{\omega}\rvert$ and choose a bijection $\alpha\mapsto X_{\alpha}$ from $\delta$ onto $[\omega]^{\omega}$. This induces a particular well-order of the latter set, so "least" below refers to this enumeration. Since $[\omega]^{\omega}\subseteq\mathcal P(\omega)$, [F4] gives $\delta\le\lvert\mathcal P(\omega)\rvert=2^{\aleph_0}=\mathfrak c$. An arbitrary well-order of $[\omega]^{\omega}$ could have order type larger than $\delta$ and would not justify this bound. [F2, F4]

1.2 For $Y\in[\omega]^{\omega}$ let $y_0<y_1<y_2<\cdots$ be the increasing enumeration of $Y$, which exists by [F5] applied to the well-ordered set $Y$; put $E(Y)=\{y_{2n}:n\in\mathbb N\}$ and $O(Y)=\{y_{2n+1}:n\in\mathbb N\}$. Then $E(Y)$ and $O(Y)$ are infinite, disjoint, $E(Y)\cup O(Y)=Y$, and $E(Y)\subseteq Y$, $O(Y)\subseteq Y$. Consequently for every $X\in[\omega]^{\omega}$ at least one of $X\not\subseteq^{*}E(Y)$, $X\not\subseteq^{*}O(Y)$ holds: if both $X\setminus E(Y)$ and $X\setminus O(Y)$ were finite, then $X\setminus(E(Y)\cap O(Y))=X\setminus\varnothing=X$ would be finite, contradicting $X\in[\omega]^{\omega}$. [F1, F5]

2.1 Define, by transfinite recursion on $\delta$ ([F3]), values $A_{\alpha},Y_{\alpha}\subseteq\omega$ for $\alpha<\delta$, using the sentinel value $\varnothing$ for $Y$. Say that $\alpha<\delta$ is *free* when $Y_{\beta}\ne\varnothing$ for every $\beta<\alpha$. For a free $\alpha$ let $\mathcal P_{\alpha}=\{Y\in[\omega]^{\omega}:Y\subseteq^{*}A_{\beta}$ for every $\beta<\alpha\}$. If $\mathcal P_{\alpha}=\varnothing$, set $A_{\alpha}=\omega$ and $Y_{\alpha}=\varnothing$; if $Y_{\alpha}=\varnothing$ we set $A_{\gamma}=\omega$ and $Y_{\gamma}=\varnothing$ at every later $\gamma$, so that the recursion is total on $\delta$. If $\mathcal P_{\alpha}\ne\varnothing$, let $Y_{\alpha}$ be the well-order-least member of $\mathcal P_{\alpha}$ and split it as in step 1.2, setting $A_{\alpha}=E(Y_{\alpha})$ if $X_{\alpha}\not\subseteq^{*}E(Y_{\alpha})$, and $A_{\alpha}=O(Y_{\alpha})$ otherwise; by step 1.2 one of the two cases applies, so $A_{\alpha}$ is a well-defined infinite subset of $Y_{\alpha}$ with $X_{\alpha}\not\subseteq^{*}A_{\alpha}$. [F1, F2, F3, step 1.2]

3.1 Let $\lambda$ be the least $\alpha\le\delta$ such that either $\alpha=\delta$, or $\alpha<\delta$ and $Y_{\alpha}=\varnothing$. Such a $\lambda$ exists because $\delta$ is an ordinal and the second alternative is decided for each $\alpha<\delta$; and $\lambda>0$, since $\mathcal P_0=[\omega]^{\omega}\ne\varnothing$ and hence $Y_0\ne\varnothing$ by step 2.1 and the definition of $\mathcal P_0$. [F1, F3, step 2.1]

4.1 For every $\alpha<\lambda$ the stage $\alpha$ was free and $\mathcal P_{\alpha}\ne\varnothing$, so $A_{\alpha}\in[\omega]^{\omega}$, $Y_{\alpha}\in[\omega]^{\omega}$, $A_{\alpha}\subseteq Y_{\alpha}$, and $Y_{\alpha}\subseteq^{*}A_{\beta}$ for every $\beta<\alpha$; hence $A_{\alpha}\subseteq^{*}A_{\beta}$ for every $\beta<\alpha$, and the family $\langle A_{\beta}:\beta<\lambda\rangle$ is decreasing in the sense of [F1]. Moreover $X_{\alpha}\not\subseteq^{*}A_{\alpha}$ for every $\alpha<\lambda$, and the family is a set, being the image of the ordinal $\lambda$ under a definable function. [F1, step 2.1, step 3.1]

5.1 If $\lambda<\delta$, then $Y_{\lambda}=\varnothing$, which by step 2.1 and the minimality of $\lambda$ happened because $\mathcal P_{\lambda}=\varnothing$: no $Y\in[\omega]^{\omega}$ satisfies $Y\subseteq^{*}A_{\beta}$ for all $\beta<\lambda$. By step 4.1 the family $\langle A_{\beta}:\beta<\lambda\rangle$ is a decreasing family of infinite sets with no pseudointersection, that is a tower, of length $\lambda<\delta\le\mathfrak c$. [F1, step 3.1, step 4.1]

5.2 If $\lambda=\delta$ and some $X\in[\omega]^{\omega}$ were a pseudointersection of $\langle A_{\alpha}:\alpha<\delta\rangle$, then $X=X_{\alpha}$ for some $\alpha<\delta$ by step 1.1, so $X_{\alpha}\subseteq^{*}A_{\alpha}$; but step 4.1 gives $X_{\alpha}\not\subseteq^{*}A_{\alpha}$, a contradiction. Hence $\langle A_{\alpha}:\alpha<\delta\rangle$ is a tower of length $\delta\le\mathfrak c$, again by step 4.1. [F1, step 1.1, step 4.1]

6.1 In the case $\lambda<\delta$ step 5.1 exhibits a tower of length $\lambda<\delta\le\mathfrak c$, and in the case $\lambda=\delta$ step 5.2 exhibits a tower of length $\delta\le\mathfrak c$; in both cases the length is at most $\mathfrak c=2^{\aleph_0}$. This is the statement. ∎ [step 1.1, step 5.1, step 5.2]
