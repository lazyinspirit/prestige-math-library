---
id: cex-transfinite-induction-fails-when-the-minimum-is-exempted
kind: counterexample
title: "Transfinite induction fails if the least element is exempted from the hypothesis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [thm-transfinite-induction, def-initial-segment, def-well-order,
       def-natural-numbers, lem-nat-order-is-membership, def-nat-order,
       thm-nat-linear-order, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 5, Theorem 5.1 (three-case transfinite induction) and Exercise 5.2 (single-hypothesis form)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 3, Theorem 3.5 (transfinite induction via least elements)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement refuted

**Refuted claim:** the hypothesis of [[thm-transfinite-induction]] may be checked
only at elements other than the least element of the well-order: for a well-order
$W$ with least element $m$, if $W_{<a}\subseteq S$ implies $a\in S$ for every
$a\ne m$, then $S=W$.

The witness is $W=\omega$ with its usual order and $S=\omega\setminus\{0\}$
([[def-natural-numbers]], [[def-initial-segment]]). The implication holds at
every $a\ne0$ vacuously, because then $0<a$ while $0\notin S$, so $W_{<a}$ is
never contained in $S$; yet at $a=0$ the initial segment $W_{<0}=\varnothing$ is
contained in $S$ while $0\notin S$. So the hypothesis of the theorem holds at
every element except the least and fails at the least, and the conclusion
$S=W$ is false. Hence the restriction to $a\ne m$ is not a valid form of the
theorem: the least element needs no separate base case because the hypothesis
applied there **is** the base case. No choice principle is used.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}=\omega$ with $0=\varnothing$, the additive order of [[def-nat-order]], the subset $S=\omega\setminus\{0\}$, and a well-order $(W,<)$ with least element $m$ as in the refuted claim, specialised below to $W=\omega$ with its usual order.

[F1] Transfinite induction: if $(W,<)$ is a well-order and $W_{<a}\subseteq S$ implies $a\in S$ for every $a\in W$, then $S=W$ ([[thm-transfinite-induction]]).

[F2] For a well-order $(W,<)$, $W_{<a}=\{x\in W:x<a\}$ ([[def-initial-segment]]).

[F3] For all naturals $m,n$: $m<n$ if and only if $m\in n$; $n=\{m\in\mathbb{N}:m<n\}$; $0\le n$ for every $n$ and $0\in n$ whenever $n\ne0$ ([[lem-nat-order-is-membership]]).

[F4] $0=\varnothing$ and $\sigma(n)=n\cup\{n\}$ in $\omega=\mathbb{N}$, and $0\ne1$ ([[def-natural-numbers]]).

[F5] The order of $\mathbb{N}$ is defined by $m\le n$ if and only if $m+k=n$ for some natural $k$, with $m<n$ meaning $m\le n$ and $m\ne n$, and it is a linear order ([[def-nat-order]], [[thm-nat-linear-order]]).

[F6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F7] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $W=\omega$ with its usual order is a well-order, and $0$ is its least element: the order of [F5] is linear, and every nonempty subset of $\mathbb{N}$ has a least element by [F6], so $(\omega,<)$ is a well-order in the sense of [F7]; and $0\le n$ for every $n$ by [F3], so $0$ is the least element. [F3, F5, F6, F7]

1.2 Under the identification of membership with the order, $W_{<a}=a$ for every $a\in\omega$: $W_{<a}=\{m\in\omega:m<a\}$ by [F2], and $\{m\in\mathbb{N}:m<a\}=a$ by [F3]. In particular $W_{<0}=\varnothing$, since $0=\varnothing$ by [F4]. [F2, F3, F4]

1.3 $S=\omega\setminus\{0\}$ is a subset of $W$ with $0\notin S$ and $S\ne W$, because $0\in W$ by [F4]. [F4]

2.1 For every $a\in\omega$ with $a\ne0$ the implication $W_{<a}\subseteq S\Rightarrow a\in S$ holds vacuously: $0<a$ by [F3], so $0\in W_{<a}$ while $0\notin S$ by step 1.3, and therefore $W_{<a}$ is not contained in $S$. [step 1.3, F3]

2.2 At the least element $a=0$ the hypothesis fails: $W_{<0}=\varnothing\subseteq S$ by step 1.2, while $0\notin S$ by step 1.3, so $W_{<0}\subseteq S$ holds and $0\in S$ does not. [step 1.2, step 1.3]

3.1 The refuted claim is therefore false: the well-order $W=\omega$ has least element $0$ by step 1.1, the implication $W_{<a}\subseteq S\Rightarrow a\in S$ holds for every $a\ne0$ by step 2.1, yet $S\ne W$ by step 1.3, so the conclusion $S=W$ fails. The hypothesis of [F1] is exactly the statement at every $a\in W$, including $a=0$, and step 2.2 shows that the instance at the least element is what supplies the base case; exempting it removes precisely the step that forces $0\in S$. No choice principle is used. [step 1.1, step 1.3, step 2.1, step 2.2, F1] ∎
