---
id: lem-hartogs-iterated-powerset-bounds
kind: lemma
title: "Hartogs bounds in iterated power sets"
status: published
origin: pipeline
deps: ["thm-hartogs", "def-well-order", "thm-schroder-bernstein", "thm-dedekind-infinite-iff-countable-subset", "lem-finite-choice"]
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
    - title: "Caicedo, Some choiceless results (3), §7 Hartogs bounds, lemma and corollaries; §8 final corollary"
      url: https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/
---

## Statement

In ZF, for every set $X$,

$$h(X)\preceq\mathcal P^3(X).$$

If $X^2\approx X$, or if $X$ is Dedekind-finite, then $h(X)\preceq\mathcal P^2(X)$. Also $h(X)\prec\mathcal P^4(X)$ and $h(X)<h(\mathcal P^3(X))$. Superscripts on $\mathcal P$ denote iteration.

## Facts & Assumptions

[F1] [[thm-hartogs]]: The ordinals below $h(X)$ are exactly the order types of well-ordered subsets of $X$.

[F2] [[def-well-order]]: Every nonempty subset of a well-ordered set has a least element.

[F3] [[thm-dedekind-infinite-iff-countable-subset]]: Dedekind-finiteness is equivalent to $h(X)\le\omega$.

[F4] [[thm-schroder-bernstein]]: Two injections give a bijection.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For each injection $f:\alpha\to X$, let $T_f=\{f[\gamma]:\gamma\le\alpha\}\subseteq\mathcal P(X)$. Inclusion well-orders this chain in type $\alpha+1$, because the initial images strictly increase. For each $\alpha<h(X)$, let $B_\alpha$ be the set of all such chains of type $\alpha+1$ arising from these injections. It is a nonempty element of $\mathcal P^3(X)$, and distinct indices give disjoint such sets because a chain has unique order type. Thus $\alpha\mapsto B_\alpha$ is injective. For $\alpha=0$ the chain is $\{\varnothing\}$. [F1, F2]

1.2 Let $R_\alpha$ be the set of all reflexive well-order relations on subsets of $X$ of type $\alpha$. Reflexivity makes the underlying set recoverable from the diagonal, including singleton orders; the empty order has the empty relation. These are nonempty pairwise disjoint subsets of $\mathcal P(X^2)$. Thus $h(X)\preceq\mathcal P^2(X^2)$, and a supplied bijection $X^2\approx X$ gives the double-power bound. [F1, F2]

1.3 If $X$ is infinite and Dedekind-finite, then $h(X)=\omega$: every finite ordinal embeds by finite induction, while omega does not. Each $[X]^n$ is nonempty, and these sets of subsets are disjoint for distinct $n$. Hence $n\mapsto[X]^n$ injects omega into $\mathcal P^2(X)$. If $X$ has finite size $n$, $h(X)=n+1$ and $n+1\le2^{2^n}$ by elementary finite induction; choose an enumeration of this single finite set to realize the injection. This includes $n=0$. [F1, F3]

2.1 The first bound implies $h(X)<h(\mathcal P^3(X))$ by the definition of Hartogs. For the other strict bound, singleton inclusion gives $h(X)\preceq\mathcal P^4(X)$. Equality would give an injection $\mathcal P(A)\to A$ with $A=\mathcal P^3(X)$. Its inverse on its range, extended elsewhere by $\varnothing$, would be a surjection $s:A\to\mathcal P(A)$, impossible since $\{a\in A:a\notin s(a)\}$ is missed. Thus the comparison is strict. [F1, F4, step 1.1] ∎
