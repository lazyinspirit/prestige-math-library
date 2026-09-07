---
id: thm-dedekind-infinite-iff-countable-subset
kind: theorem
title: "Dedekind infinitude is equivalent to a countable subset"
status: draft
origin: pipeline
deps: ["def-dedekind-infinite-set", "thm-recursion", "thm-hartogs"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (3), §8 first theorem and proof"
      url: https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/
---

## Statement

In ZF the following are equivalent: $X$ is Dedekind-infinite; $\omega\preceq X$; and $X\sqcup\{*\}\approx X$. Equivalently, $X$ is Dedekind-finite iff $h(X)\le\omega$. Here $h$ is the Hartogs number.

## Facts & Assumptions

[F1] [[def-dedekind-infinite-set]]: Dedekind infinitude is witnessed by an injective nonsurjective self-map.

[F2] [[thm-recursion]]: Iterates of a specified self-map form an omega sequence.

[F3] [[thm-hartogs]]: An ordinal below $h(X)$ embeds into $X$, while $h(X)$ does not.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For an injective nonsurjective $f:X\to X$, fix $a\notin f[X]$ and put $a_n=f^n(a)$. If $a_m=a_n$ with $m<n$, cancel $f$ repeatedly to get $a=f^{n-m}(a)\in f[X]$, impossible. Thus $n\mapsto a_n$ injects omega into $X$. [F1, F2]

1.2 Given an injection $n\mapsto a_n$, send $*$ to $a_0$, each $a_n$ to $a_{n+1}$, and every other point of $X$ to itself. This is a bijection $X\sqcup\{*\}\to X$. Conversely, restricting any such bijection to $X$ is injective and misses the image of $*$, proving Dedekind infinitude. [F1]

2.1 By the least-nonembedding definition, omega embeds into $X$ exactly when $\omega<h(X)$. Negating gives the asserted Dedekind-finite characterization. For finite $X$, including the empty set, no injective nonsurjective self-map exists, as finite counting also shows. [F3, step 1.1, step 1.2] ∎
