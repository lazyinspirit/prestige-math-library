---
id: prop-essential-supremum-is-attained-as-the-least-essential-bound
kind: proposition
title: "The essential supremum is attained as the least essential bound"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-essential-supremum-with-respect-to-a-measure, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: "Take the countable family of bad sets {|f| > ||f||_infinity + 1/n}; each is null by minimality of the infimum. Their union is null, giving |f| <= ||f||_infinity almost everywhere, and leastness is built into the definition."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Definition 7.3 and discussion"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Let $f:X\to\mathbb R$ be measurable on a measure space $(X,\mathcal A,\mu)$,
and suppose $\|f\|_\infty<\infty$. Then

$$|f|\le\|f\|_\infty\qquad\mu\text{-almost everywhere}.$$

Moreover, if $M\ge0$ and $|f|\le M$ almost everywhere, then

$$\|f\|_\infty\le M.$$

So $\|f\|_\infty$ is the least essential bound of $|f|$.

## Facts & Assumptions

**Given:** A measurable real-valued function $f$ with finite essential supremum
$s:=\|f\|_\infty$.

[L1] The essential supremum is the infimum of the essential bounds
([[def-essential-supremum-with-respect-to-a-measure]]).

[L2] Absolute values and threshold sets of measurable functions are measurable
([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L3] Countable subadditivity bounds the measure of a countable union
([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** Take the countable family of bad sets
$\{|f|>\|f\|_\infty+1/n\}$; each is null by minimality of the infimum. Their
union is null, giving $|f|\le\|f\|_\infty$ almost everywhere, and leastness is
built into the definition.

1.1 For each $n\ge1$, the number $s+1/n$ is strictly larger than the infimum in [L1], so it is an essential bound. Therefore the measurable set [L1, L2, given]
$$E_n:=\{|f|>s+1/n\}$$
has measure $0$.

1.2 If $M\ge0$ and $|f|\le M$ almost everywhere, then $M$ is one of the essential bounds in [L1], so the infimum $s$ satisfies $s\le M$. [L1]

2.1 Put $E:=\bigcup_{n=1}^\infty E_n$. Then $E$ is measurable and [step 1.1, L3, algebra]
$$\mu(E)\le\sum_{n=1}^\infty \mu(E_n)=0.$$
If $x\notin E$, then $|f(x)|\le s+1/n$ for every $n$, hence $|f(x)|\le s$.
Therefore $|f|\le s$ almost everywhere.

3.1 Step 2.1 proves that $s$ itself is an essential bound, and step 1.2 proves that no smaller essential bound exists. Thus $s=\|f\|_\infty$ is the least essential bound. [step 2.1, step 1.2] ∎
