---
id: cex-a-degree-one-derivation-need-not-square-to-zero
kind: counterexample
title: "A degree-one derivation need not square to zero"
status: published
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-differential-graded-algebra
  - def-algebra-over-a-commutative-ring
  - thm-rat-field
  - lem-field-is-a-commutative-ring
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

For every graded associative unital $\mathbb Q$-algebra $B$, every degree-$+1$
$\mathbb Q$-linear map $\delta:B\to B$ satisfying
$\delta(ab)=\delta(a)b+(-1)^{|a|}a\delta(b)$ for homogeneous $a,b$ is
square-zero.

## Facts & Assumptions

**Given:** The usual rational field and the free associative graded $\mathbb Q$-algebra
$B=\mathbb Q\langle x,u,v\rangle$ with $|x|=0$, $|u|=1$, and $|v|=2$,
whose multiplication is concatenation of words. Its $\mathbb Q$-basis consists
of finite words in $x,u,v$, including the empty word $1$.
Define $\delta(x)=u$, $\delta(u)=v$, and $\delta(v)=0$; for a word
$w=a_1\cdots a_n$, define
$$\delta(w)=\sum_{i=1}^n(-1)^{|a_1|+\cdots+|a_{i-1}|}a_1\cdots a_{i-1}\delta(a_i)a_{i+1}\cdots a_n,$$
with $\delta(1)=0$, and extend $\mathbb Q$-linearly. Refute the statement.

[F1] [[thm-rat-field]]: $\mathbb Q$ with its usual operations is a field.

[F2] [[lem-field-is-a-commutative-ring]]: Every field is a commutative ring with unit, so $\mathbb Q$ is an admissible base ring for the DGA definition.

[F3] [[def-algebra-over-a-commutative-ring]]: A $\mathbb Q$-algebra has a unital structure map from the commutative base ring $\mathbb Q$.

[F4] [[def-differential-graded-algebra]]: The defining cochain differential satisfies $d^{n+1}d^n=0$.

## Counterexample

1.1 By [F1] and [F2], $\mathbb Q$ is a commutative ring with unit, and [F3] is the unital base-algebra convention used in the construction of $B$. The words form a $\mathbb Q$-basis, so the displayed formula defines a unique linear map. Every nonzero generator image has degree one higher than its input. For homogeneous words $s,t$, the summands replacing letters of $s$ give $\delta(s)t$, while those replacing letters of $t$ acquire the extra sign $(-1)^{|s|}$; hence $\delta(st)=\delta(s)t+(-1)^{|s|}s\delta(t)$. Bilinearity extends the identity to all homogeneous elements. [given, F1, F2, F3, construct, algebra]

2.1 Applying the generator rules twice gives $\delta^2(x)=\delta(u)=v$. The word $v$ is a nonzero basis element of the free algebra, so $\delta^2(x)\ne0$. [step 1.1, algebra]

3.1 By [F4], square-zero is required for a cohomological DGA differential. Thus $\delta$ is a degree-one graded derivation that is not square-zero, refuting the statement. [F4, step 2.1] ∎
