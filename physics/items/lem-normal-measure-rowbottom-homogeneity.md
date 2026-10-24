---
id: lem-normal-measure-rowbottom-homogeneity
kind: lemma
title: Finite-set homogeneity for a normal measure
status: published
origin: pipeline
deps:
  - thm-lc-measurability-normal-measures-and-embeddings
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, Lemma 9.12"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Let $U$ be a normal measure on $kappa$. For each $n<\omega$, let

$$c_n:[\kappa]^n\longrightarrow X_n$$

have range of cardinality less than $\kappa$. There is one $A\in U$ such that
every $c_n$ is constant on $[A]^n$.

## Facts & Assumptions

**Given:** ZFC, a normal measure $U$ on the uncountable cardinal $\kappa$, and the displayed family of colourings. We replace each codomain by the actual range and identify it with some ordinal $\lambda_n<\kappa$.

[F1] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: A normal measure is a nonprincipal $\kappa$-complete ultrafilter; in particular it is closed under intersections of fewer than $\kappa$ measure-one sets.

[F2] [[thm-lc-measurability-normal-measures-and-embeddings]]: A normal measure is closed under diagonal intersections of $\kappa$-sequences of measure-one sets.

[F3] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function; this is used for the simultaneous choices of homogeneous sets in the induction and for the sequence indexed by $n<\omega$.

## Proof

1.1 First fix a colouring $c:[\kappa]^m\to\lambda$, where $\lambda<\kappa$. If $m=0$, its singleton domain makes it constant. If $m=1$ and no colour class belongs to $U$, the complement of every colour class belongs to $U$. Their intersection belongs to $U$ by $\kappa$-completeness, but it is empty, a contradiction. Thus some measure-one set is homogeneous in the unary case. Notice also that every tail $\kappa\setminus(\alpha+1)$ is in $U$: intersect the complements of its fewer than $\kappa$ singleton points. [base, F1]

2.1 Induct on $m$. Assume the result for $m$ and consider $c:[\kappa]^{m+1}\to\lambda$. For every $\alpha<\kappa$, extend the tail colouring $t\mapsto c(\{\alpha\}\cup t)$ from $[\kappa\setminus(\alpha+1)]^m$ to all of $[\kappa]^m$ by assigning one fixed value of $\lambda$ off the tail. Apply the induction hypothesis to this total extension, obtaining a homogeneous $H_\alpha\in U$, and put $B_\alpha=H_\alpha\cap(\kappa\setminus(\alpha+1))\in U$. Its restriction to the tail is the original colouring, so $B_\alpha$ is homogeneous for that colouring; call its constant value $i_\alpha<\lambda$. Using Choice, make these selections simultaneously. The diagonal intersection $D=\{\beta<\kappa:(\forall\alpha<\beta)\ \beta\in B_\alpha\}$ belongs to $U$. [ih, F1, F2, F3, step 1.1]

3.1 Apply the unary case to $\alpha\mapsto i_\alpha$ and take $X\in U$ on which it has constant value $i$. Put $A=D\cap X$. If $\alpha_0<\cdots<\alpha_m$ lie in $A$, then $\alpha_j\in B_{\alpha_0}$ for every $0<j\le m$, by the definition of $D$. Consequently $c(\{\alpha_0,\ldots,\alpha_m\})=i_{\alpha_0}=i$. This proves the fixed-arity claim for every finite $m$. [F1, step 1.1, step 2.1]

4.1 For every $n<\omega$, use the fixed-arity claim to choose $A_n\in U$ on which $c_n$ is constant. Since $\omega<\kappa$, countable completeness gives $A=\bigcap_{n<\omega}A_n\in U$. Restricting a constant colouring remains constant, so this $A$ works for every $n$, including $n=0$. Choice selects the family $\langle B_\alpha:\alpha<\kappa\rangle$ at each induction stage and the countable family $\langle A_n:n<\omega\rangle$; the filter calculations after those selections are choice-free. [F1, F3, step 3.1, discharge-induction] $\square$
