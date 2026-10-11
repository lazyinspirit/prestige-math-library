---
id: ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega
kind: example
title: "The finite von Neumann ordinals, and $\\omega$ as the least limit ordinal"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-ordinal, lem-ordinal-basics, def-limit-ordinal,
       lem-omega-least-limit-ordinal, def-natural-numbers,
       lem-nat-transitive-irreflexive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 4, Definition 4.17, Lemmas 4.18-4.23 and Exercise 4.24 (least nonzero limit; this item excludes 0 from limits)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 3, Theorems 3.1-3.3 and the successor/limit discussion"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

With $0=\varnothing$ and $\sigma(n)=n\cup\{n\}$ ([[def-natural-numbers]]) and the
ordinals of [[def-ordinal]]:

**(i)** $0,1,2,3$ are ordinals, $1=\{0\}$, $2=\{0,1\}$,
$3=\{0,1,2\}=2\cup\{2\}=2^{+}$, and for each $k\le3$ the set $k$ is exactly the
set of ordinals below $k$, so $k=\{\xi:\xi<k\}$;

**(ii)** $\omega=\mathbb{N}$ is an ordinal, $\omega$ is a limit ordinal, the union
of the members of $\omega$ is $\omega$ itself, and every element of $\omega$ is
either $0$ or a successor, so no element of $\omega$ is a limit ordinal
([[def-limit-ordinal]], [[lem-omega-least-limit-ordinal]]);

**(iii)** $\omega$ is the least limit ordinal: $\omega\le\gamma$ for every limit
ordinal $\gamma$.

No choice principle is used.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}=\omega$ with $0=\varnothing$ and $\sigma(n)=n\cup\{n\}$, and the ordinal notation of [[def-ordinal]]: a set $\alpha$ is an ordinal when it is transitive and $\in$ strictly well-orders it, with $\alpha<\beta$ meaning $\alpha\in\beta$ and $\alpha^{+}=\alpha\cup\{\alpha\}$.

[F1] An ordinal is a transitive set on which $\in$ is a strict well-order, $0:=\varnothing$ is an ordinal, $\alpha^{+}=\alpha\cup\{\alpha\}$, and for ordinals $\alpha<\beta$ means $\alpha\in\beta$ while $\alpha\le\beta$ means $\alpha\in\beta$ or $\alpha=\beta$ ([[def-ordinal]]).

[F2] For every ordinal $\alpha$: every element of $\alpha$ is an ordinal, and $\alpha^{+}$ is an ordinal ([[lem-ordinal-basics]]).

[F3] $\mathbb{N}=\omega$ is the smallest inductive set, with $0=\varnothing$, $\sigma(n)=n\cup\{n\}$, $1=\{0\}$, $2=\{0,1\}$, $3=\{0,1,2\}$ and in general $n=\{0,1,\dots,n-1\}$; $\omega$ is inductive, so $0\in\omega$ and $n\in\omega$ implies $\sigma(n)\in\omega$ ([[def-natural-numbers]]).

[F4] Every natural number is an ordinal, and $\omega$ is an ordinal; $\omega$ is a limit ordinal; every ordinal $\alpha\in\omega$ is $0$ or a successor ordinal; and $\omega\subseteq\gamma$ for every limit ordinal $\gamma$ ([[lem-omega-least-limit-ordinal]]).

[F5] An ordinal $\alpha$ is a successor ordinal when $\alpha=\beta^{+}$ for some ordinal $\beta$, and a limit ordinal when $\alpha\ne0$ and $\alpha$ is not a successor ([[def-limit-ordinal]]).

[F6] Every natural number is a transitive set and satisfies $n\notin n$ ([[lem-nat-transitive-irreflexive]]).

## Verification

**Proof technique:** direct.

1.1 Claim (i): $0=\varnothing$ is an ordinal by [F1]; $1=0^{+}=\{0\}$, $2=1^{+}=\{0,1\}$ and $3=2^{+}=\{0,1,2\}$ by [F3], and each is an ordinal by the successor clause of [F2], so $3=2\cup\{2\}=2^{+}$ as displayed. For $k\le3$: every element $\xi$ of $k$ is a natural number, hence an ordinal by [F4], and conversely every ordinal $\xi$ with $\xi<k$ satisfies $\xi\in k$ by [F1]; the two sides of $k=\{\xi:\xi<k\}$ therefore have the same members, since the elements of $k$ are among the ordinals below $k$ and every ordinal below $k$ is an element of $k$. [F1, F2, F3, F4]

1.2 Claim (ii): $\omega$ is an ordinal by [F4] and is a limit ordinal by [F4], and since $\omega\ne0$ by [F3] we may compute the union of its members. First $\bigcup\omega\subseteq\omega$: a member of $\bigcup\omega$ is a member of some $n\in\omega$, and $n\subseteq\omega$ because $\omega$ is transitive as an ordinal while $n\in\omega$, so that member lies in $\omega$ as well. Conversely $\omega\subseteq\bigcup\omega$: for $n\in\omega$ the successor $\sigma(n)=n\cup\{n\}$ again lies in $\omega$ by inductivity, and $n\in\sigma(n)$, so every member of $\omega$ lies in a member of $\omega$. Hence $\bigcup\omega=\omega$ by extensionality. Finally every element of $\omega$ is $0$ or a successor by [F4], and a limit ordinal is nonzero and not a successor by [F5], so no element of $\omega$ is a limit ordinal. [F1, F3, F4, F5, F6]

1.3 Claim (iii): [F4] states that $\omega\subseteq\gamma$, that is $\omega\le\gamma$ in the ordinal order of [F1], for every limit ordinal $\gamma$; with $\omega$ itself a limit ordinal by [F4], this says $\omega$ is the least limit ordinal. [F1, F4]

2.1 Claims (i) to (iii) are established: the finite levels $0,1,2,3$ are ordinals with $k=\{\xi:\xi<k\}$ by step 1.1, the ordinal $\omega$ is a limit ordinal, equals the union of its members, and has no limit ordinal among its elements by step 1.2, and it is least among limit ordinals by step 1.3. Every ingredient is a theorem of ZF applied to the given sets, and nothing is selected from a family of sets, so no choice principle is used. [step 1.1, step 1.2, step 1.3] ∎
