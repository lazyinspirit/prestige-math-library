---
id: thm-words-avoiding-finitely-many-factors-have-rational-generating-functions
kind: theorem
title: "Words over a finite alphabet avoiding finitely many nonempty factors have a rational length generating function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-formal-power-series-and-reduced-denominator, def-prefix-automaton-for-a-finite-forbidden-factor-set, thm-weighted-walks-are-entries-of-transfer-matrix-powers, thm-transfer-matrix-cofactor-formula, prop-rational-series-are-closed-under-sums-and-products]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $\Sigma$ be a finite alphabet and let $B$ be a finite set of nonempty words over $\Sigma$. If $a_n$ is the number of length-$n$ words over $\Sigma$ that avoid every factor in $B$, then

$$A(x):=\sum_{n\ge0}a_nx^n$$

is a rational formal power series over $\mathbb Z$.

## Facts & Assumptions

**Given:** A finite alphabet $\Sigma$ and a finite set $B$ of nonempty words.

[L1] A rational formal series has a polynomial numerator and a polynomial denominator with unit constant coefficient ([[def-rational-formal-power-series-and-reduced-denominator]]).

[L2] For nonempty $B$, the prefix automaton retains the longest suffix that is a proper prefix of a forbidden word and rejects a transition that creates a forbidden factor ([[def-prefix-automaton-for-a-finite-forbidden-factor-set]]).

[L3] For a finite weighted digraph with transfer matrix $M$, the total weight of length-$n$ walks from $u$ to $v$ is $(M^n)_{uv}$ ([[thm-weighted-walks-are-entries-of-transfer-matrix-powers]]).

[L4] Every fixed-entry walk generating series of a nonempty finite weighted digraph is a cofactor of $I-xM$ divided by $\det(I-xM)$, hence rational ([[thm-transfer-matrix-cofactor-formula]]).

[L5] Finite sums of rational formal power series are rational ([[prop-rational-series-are-closed-under-sums-and-products]]).

## Proof

**Proof technique:** automaton invariant and transfer matrix.

1.1 If $B=\varnothing$ and $q=|\Sigma|$, then $a_n=q^n$ and $(1-qx)\sum_{n\ge0}q^nx^n=1$ coefficientwise, so [L1] makes $A(x)=1/(1-qx)$ rational. [given, L1, algebra]

1.2 Suppose now that $B$ is nonempty. After a word $w$ avoiding $B$ has been read, the automaton state is the longest suffix of $w$ belonging to $S_B$: this holds initially at $\varepsilon$, and repeated application of [L2] preserves it as each accepted letter is appended. [given, L2]

2.1 Let $w$ avoid $B$, let $s$ be its state from step 1.2, and let $a\in\Sigma$. If $wa$ contains a forbidden factor $b$, that factor ends at the appended letter, so $b=b'a$ with $b'$ a suffix of $w$; and $b'$ avoids $B$ and is a proper prefix of $b\in B$, so $b'\in S_B$. Since $s$ is the longest suffix of $w$ in $S_B$, the word $b'$ is a suffix of $s$, so $b$ is a factor of $sa$ and [L2] rejects $a$. Conversely, $s$ is a suffix of $w$, so any factor of $sa$ in $B$ is a factor of $wa$. Thus [L2] rejects exactly the extensions that cease to avoid $B$. [step 1.2, L2]

3.1 Steps 1.2 and 2.1 give a weight-preserving bijection between length-$n$ words avoiding $B$ and length-$n$ walks in the prefix automaton from $\varepsilon$ to any state in $S_B$. [step 1.2, step 2.1]

4.1 By [L3], $a_n=\sum_{v\in S_B}(M^n)_{\varepsilon v}$. Each series $\sum_{n\ge0}(M^n)_{\varepsilon v}x^n$ is rational by [L4], and their finite sum is rational by [L5]. Together with the empty-$B$ case in step 1.1, this proves the result. [step 1.1, step 3.1, L3, L4, L5] ∎
