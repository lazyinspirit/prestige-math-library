---
id: lem-basic-pseudointersection-and-tower-bounds
kind: lemma
title: Basic bounds for p and t
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-pseudointersection-and-tower-numbers, def-almost-inclusion-pseudointersection-and-tower, lem-small-tower-exists, def-axiom-of-choice, lem-cardinality-of-a-well-orderable-set, def-cardinal, def-aleph-and-beth-hierarchies, thm-well-ordering-principle, thm-recursion, def-natural-numbers]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Blass 6.23 and Proposition 34, printed pp.14-15, 19"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "M. Malliaris and S. Shelah, Cofinality Spectrum Theorems, Definition 14.3 and the surrounding discussion, PDF pp.54-55"
      url: "https://math.uchicago.edu/~mem/Malliaris-Shelah-CST-new.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC, with $p$ and $t$ as in [[def-pseudointersection-and-tower-numbers]],

$$\aleph_1\le p\le t\le\mathfrak c=2^{\aleph_0},$$

and moreover every countable family of infinite subsets of $\omega$ with the
strong finite intersection property has a pseudointersection, and every
countable descending family $\langle A_n:n\in\omega\rangle$ of infinite subsets
of $\omega$ has a pseudointersection
([[def-almost-inclusion-pseudointersection-and-tower]] for the notions).

The countable case is the diagonal construction: the running finite
intersections are infinite, and choosing the least new element of each running
intersection produces an infinite set meeting every member cofinitely. That
gives $p\ge\aleph_1$ and $t\ge\aleph_1$; a tower is an SFIP family with no
pseudointersection, which gives $p\le t$; and $t\le\mathfrak c$ is the normal
form of a shortest tower.

## Facts & Assumptions
**Given:** the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] A pseudointersection of $\mathcal F\subseteq[\omega]^{\omega}$ is an $X\in[\omega]^{\omega}$ with $X\subseteq^{*}A$ for all $A\in\mathcal F$; $\mathcal F$ has SFIP when every finite intersection of members is infinite; a tower is a decreasing family $\langle A_{\alpha}:\alpha<\kappa\rangle$ of infinite sets with no pseudointersection. ([[def-almost-inclusion-pseudointersection-and-tower]])

[F2] $p$ is the least cardinality of an SFIP family with no pseudointersection, and the minimum is attained; $t$ is the least length of a tower, the minimum is attained by a strictly decreasing tower $\langle A_{\alpha}:\alpha<t\rangle$, and $t$ is a cardinal with $t\le 2^{\aleph_0}=\mathfrak c$. ([[def-pseudointersection-and-tower-numbers]])

[F3] Every nonempty subset of $\mathbb N$ has a least element, and recursion on $\mathbb N$ defines the unique sequence with prescribed value at $0$ and prescribed successor step. ([[thm-well-ordering-principle]], [[thm-recursion]], [[def-natural-numbers]])

[F4] Under AC every set has a cardinality, cardinals are comparable, and every family of nonempty sets has a choice function. ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]], [[def-axiom-of-choice]])

## Proof

1.1 Let $\langle C_n:n\in\mathbb N\rangle$ be a sequence of infinite subsets of $\omega$ all of whose finite intersections are infinite, and set $B_n=C_0\cap\cdots\cap C_n$; then each $B_n$ is infinite, and $B_0\supseteq B_1\supseteq\cdots$. [F3, F1]

1.2 $p\le t$: by [F2] there is a strictly decreasing tower $\langle A_{\alpha}:\alpha<t\rangle$; its member family $\mathcal F$ has cardinality $t$, since $\alpha\mapsto A_{\alpha}$ is injective. The family has SFIP: for $\beta_0<\cdots<\beta_n<t$ the intersection contains $A_{\beta_n}$ minus the finitely many finite sets $A_{\beta_n}\setminus A_{\beta_i}$. It has no pseudointersection, because it is a tower. Hence some SFIP family without pseudointersection has size $t$, and $p\le t$. [F1, F2]

2.1 Recursively choose $x_n$ to be the least element of $B_n\setminus\{x_0,\dots,x_{n-1}\}$; this is legitimate because $B_n$ is infinite and only finitely many elements have been removed, so the set is nonempty, and it has a least element by [F3]. Then $x_n\in B_n$ and the $x_n$ are pairwise distinct, since $x_n\notin\{x_0,\dots,x_{n-1}\}$. [F1, F3, step 1.1]

3.1 $X=\{x_n:n\in\mathbb N\}$ is infinite by step 2.1, and $X\subseteq^{*}C_k$ for every $k$: indeed $x_n\in B_n\subseteq C_k$ whenever $n\ge k$, so $X\setminus C_k\subseteq\{x_0,\dots,x_{k-1}\}$ is finite. Hence $X$ is a pseudointersection of $\{C_n:n\in\mathbb N\}$. [F1, step 2.1]

4.1 Now let $\mathcal F\subseteq[\omega]^{\omega}$ be countable and have the strong finite intersection property. If $\mathcal F=\varnothing$, then $\omega$ is a pseudointersection and the claim follows. Otherwise list $\mathcal F$ as a sequence $\langle A_n:n\in\mathbb N\rangle$, repeating one member if $\mathcal F$ is finite; that is possible by [F3] and [F4], and the finite intersections of the $A_n$ are still infinite. Put $B_n=A_0\cap\cdots\cap A_n$; each $B_n$ is infinite by SFIP, and the sequence $\langle B_n\rangle$ has all finite intersections infinite, since $B_0\cap\cdots\cap B_m=B_m$. By steps 1.1, 2.1 and 3.1 applied to $C_n:=B_n$ there is $X\in[\omega]^{\omega}$ with $X\subseteq^{*}B_n$ for every $n$. [F1, F3, F4, step 3.1]

4.2 Every countable descending family $\langle A_n:n\in\mathbb N\rangle$ of infinite sets has a pseudointersection: reaching $A_n$ from earlier members removes only finitely many points, so $B_n=A_0\cap\cdots\cap A_n$ satisfies $A_n\setminus B_n\subseteq\bigcup_{i<n}(A_n\setminus A_i)$, a finite set, and $B_n$ is infinite because $A_n$ is; the family $\{B_n:n\in\mathbb N\}$ therefore consists of infinite sets with all finite intersections infinite, and steps 1.1, 2.1 and 3.1 applied to it give $X\in[\omega]^{\omega}$ with $X\subseteq^{*}B_n\subseteq A_n$ for every $n$. [F1, step 3.1]

5.1 For each $n$ the pseudointersection $X$ of step 4.1 is almost contained in $B_n\subseteq A_n$, hence $\mathcal F$ has a pseudointersection. [F1, step 4.1]

5.2 $t\ge\aleph_1$: a tower of length $\aleph_0$ would be a countable descending family of infinite sets, so by step 4.2 it would have a pseudointersection, which a tower cannot have. Since $t$ is a cardinal, $t\ne\aleph_0$ is excluded, so $t\ge\aleph_1$. [F1, F2, step 4.2]

6.1 $\aleph_1\le p$: if $\mathcal F$ has size below $\aleph_1$, then $\mathcal F$ is finite or countably infinite and, when nonempty, can be listed as a sequence with repetitions if finite; if $\mathcal F$ has SFIP then step 5.1 supplies a pseudointersection. Hence no family of size below $\aleph_1$ has SFIP and lacks a pseudointersection, and since $p$ is a cardinal with an attained minimum, $p\ge\aleph_1$. [F2, F4, step 5.1]

7.1 $t\le\mathfrak c$ is clause [F2]. Combining steps 6.1, 1.2, 5.2 and 7.1 gives $\aleph_1\le p\le t\le\mathfrak c=2^{\aleph_0}$, and steps 5.1 and 4.2 are the two countable pseudointersection assertions. This is the statement. ∎ [F2, step 5.1, step 4.2, step 6.1, step 1.2, step 5.2]
