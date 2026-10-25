---
id: lem-local-gch-absorbs-sums-and-squares
kind: lemma
title: "Local GCH absorbs sums and squares"
status: published
origin: pipeline
deps: ["def-local-gch-for-arbitrary-sets", "thm-halbeisen-shelah-no-powerset-sequence-injection", "thm-dedekind-infinite-iff-countable-subset", "thm-schroder-bernstein"]
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
    - title: "Caicedo, Some choiceless results (5), Lemma 1 and proof"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Statement

In ZF, if $\omega\preceq X$ and $\mathrm{CH}(X)$, then

$$X\sqcup X\approx X\times X\approx X,\qquad \mathcal P(X)\times\mathcal P(X)\approx\mathcal P(X).$$

## Facts & Assumptions

[F1] [[thm-dedekind-infinite-iff-countable-subset]]: An injected omega gives a bijection $X\sqcup1\approx X$.

[F2] [[def-local-gch-for-arbitrary-sets]]: An intermediate size between $X$ and its power set equals one endpoint under local GCH.

[F3] [[thm-halbeisen-shelah-no-powerset-sequence-injection]]: For $\omega\preceq X$, its power set does not inject into finite sequences.

[F4] [[thm-schroder-bernstein]]: Opposite injections yield a bijection in ZF.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix $a\in X$. The two copies of $X$ inject into $\mathcal P(X\sqcup\{*\})$ by $x\mapsto\{x\}$ and $x\mapsto\{x,*\}$. A bijection $X\sqcup1\approx X$ transports this to $X\sqcup X\preceq\mathcal P(X)$. Also $X\preceq X\sqcup X$. [F1]

2.1 Local GCH makes $X\sqcup X$ equinumerous either with $X$ or with $\mathcal P(X)$. The latter would inject the power set into finite sequences: use $(x)$ for the first copy and $(a,x)$ for the second. This is impossible. Thus $X\sqcup X\approx X$. [F2, F3, step 1.1]

3.1 The map taking a subset of a tagged disjoint union to its two component subsets is a bijection $\mathcal P(X\sqcup X)\to\mathcal P(X)^2$. Transport along the previous bijection gives $\mathcal P(X)^2\approx\mathcal P(X)$. Singleton coordinates inject $X^2$ into this product, while $x\mapsto(x,a)$ injects $X$ into $X^2$. [step 2.1]

4.1 Apply local GCH to $X\preceq X^2\preceq\mathcal P(X)$. The power-set endpoint would inject $\mathcal P(X)$ into length-two sequences, again impossible; the remaining endpoint is $X^2\approx X$. Together with the product-of-powersets bijection this proves all assertions. [F2, F3, F4, step 3.1] ∎
