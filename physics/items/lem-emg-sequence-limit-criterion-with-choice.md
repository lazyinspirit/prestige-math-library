---
id: lem-emg-sequence-limit-criterion-with-choice
kind: lemma
title: Sequence-limit criterion with explicit choice use
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
physical_scope: null
deps:
- def-countable-choice
- def-function-limit
- def-sequence
- def-real-limit
- def-limit-point-r
- def-neighbourhood-r
- def-real-numbers
- def-ordered-field
- def-real-order
- cor-archimedean-reciprocal
- thm-of-archimedean
- lem-of-inverse-positive
- lem-of-naturals-positive
- lem-rat-embeds-dense
- lem-of-abs-value
dependency_roles:
  def-countable-choice: mathematical-premise
  def-function-limit: mathematical-premise
  def-sequence: mathematical-premise
  def-real-limit: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-neighbourhood-r: mathematical-premise
  def-real-numbers: mathematical-premise
  def-ordered-field: mathematical-premise
  def-real-order: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
  thm-of-archimedean: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
  lem-rat-embeds-dense: mathematical-premise
  lem-of-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
  - title: 'J. Lebl, Basic Analysis I, §3.1: Limits of functions'
    url: https://www.jirka.org/ra/html/sec_limoffunc.html
  - title: Limit of a function (Wikipedia)
    url: https://en.wikipedia.org/wiki/Limit_of_a_function
  - title: W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Def. 4.1)
    url: https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis
  - title: T. Tao, Analysis I, 3rd ed., §9.3
    url: https://terrytao.wordpress.com/books/analysis-i/
  - title: J. Lebl, Basic Analysis I, §3.1
    url: https://www.jirka.org/ra/
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $A\subseteq\mathbb R$, let $c\in\mathbb R$ be a limit point of $A$, let $f:A\to\mathbb R$ and $L\in\mathbb R$. Assume the indexed axiom of countable choice $\mathrm{AC}_\omega$ of [[def-countable-choice]]. Then the epsilon-delta condition $\lim_{x\to c}f(x)=L$ of [[def-function-limit]] is equivalent to the following: for every sequence $(x_n)_{n\in\mathbb N}$ with $x_n\in A\setminus\{c\}$ and $x_n\to c$, one has $f(x_n)\to L$. Sequence and sequence convergence mean [[def-sequence]] and [[def-real-limit]]. The forward direction uses no choice; the reverse direction uses only the stated indexed $\mathrm{AC}_\omega$, not arbitrary-index choice.

## Facts & Assumptions

**Given:** $A,c,f,L$ and $\mathrm{AC}_\omega$ as stated; all inequalities use the real ordered field.

[F1] [[def-function-limit]], [[def-limit-point-r]] and [[def-neighbourhood-r]] specify the punctured real epsilon-delta neighborhoods, with $c$ a limit point, without requiring $c\in A$.

[F2] [[def-sequence]] and [[def-real-limit]] define a real sequence and convergence using positive rational tolerances. By [[lem-rat-embeds-dense]], for every real $\delta>0$ there is a rational $q$ with $0<q<\delta$; hence convergence also gives eventual error below every positive real tolerance.

[F3] [[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]] and [[lem-of-naturals-positive]] give $1/(n+1)\to0$ and eventual domination by any positive real bound. [[def-real-numbers]], [[def-ordered-field]], [[def-real-order]] and [[lem-of-abs-value]] supply the ordered-field and absolute-value arithmetic.

[A1] [[def-countable-choice]]: for every specified sequence of nonempty sets $(X_n)$, there is a function $x$ on $\mathbb N$ with $x(n)\in X_n$. Only this Definition is assumed; its Remarks implication from full choice is not a premise.

## Proof

1.1 Assume the epsilon-delta condition and fix any stated sequence $x_n\to c$. For positive rational $\varepsilon$, [F1] gives a real $\delta>0$ such that $0<|x-c|<\delta$ implies $|f(x)-L|<\varepsilon$. By [F2], eventually $|x_n-c|<\delta$, and $x_n\ne c$ gives strict positivity. Thus eventually $|f(x_n)-L|<\varepsilon$, proving convergence in [F2]. No family of witnesses is selected: the sequence and one tolerance are fixed. [given, F1, F2]

1.2 Conversely suppose the sequential condition holds but the epsilon-delta condition fails. Its negation yields one real $\varepsilon_0>0$ such that for every $\delta>0$ there exists $x\in A$ with $0<|x-c|<\delta$ and $|f(x)-L|\ge\varepsilon_0$. For each $n\in\mathbb N$, define $X_n=\{x\in A:0<|x-c|<1/(n+1),\ |f(x)-L|\ge\varepsilon_0\}$. Positivity of $n+1$ and the negated condition make every $X_n$ nonempty. These sets are a specified indexed family of subsets of the given set $A$. [given, F1, F3, construct]

2.1 Apply [A1] exactly once to obtain $x_n\in X_n$ for every $n$. Then $x_n\in A\setminus\{c\}$ and $|x_n-c|<1/(n+1)$. For every positive rational $q$, [F3] gives a threshold beyond which $1/(n+1)<q$, so $x_n\to c$ by [F2]. The sequential hypothesis therefore implies $f(x_n)\to L$. [A1, F2, F3, step 1.2]

3.1 Choose one rational $q$ with $0<q<\varepsilon_0$ by [F2]. Convergence in step 2.1 makes $|f(x_n)-L|<q<\varepsilon_0$ eventually, contradicting membership in $X_n$. Hence the epsilon-delta condition holds. The only countable selection was step 2.1; the forward implication and the two single rational choices require no choice axiom. The limit-point hypothesis and exclusion of $c$ are retained throughout. [F1, F2, step 1.2, step 2.1] ∎
