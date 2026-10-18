---
id: cex-a-degree-one-derivation-need-not-square-to-zero
kind: counterexample
title: "A degree-one derivation need not square to zero"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-differential-graded-algebra]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

For every graded associative unital $\mathbb Q$-algebra $B$, every degree-$+1$
$\mathbb Q$-linear map $\delta:B\to B$ satisfying
$\delta(ab)=\delta(a)b+(-1)^{|a|}a\delta(b)$ for homogeneous $a,b$ is
square-zero.

## Facts & Assumptions

**Given:** The free associative graded $\mathbb Q$-algebra
$B=\mathbb Q\langle x,u,v\rangle$ with $|x|=0$, $|u|=1$, and $|v|=2$. Its
basis consists of finite words in $x,u,v$, including the empty word $1$.
Define $\delta(x)=u$, $\delta(u)=v$, and $\delta(v)=0$; for a word
$w=a_1\cdots a_n$, define
$$\delta(w)=\sum_{i=1}^n(-1)^{|a_1|+\cdots+|a_{i-1}|}a_1\cdots a_{i-1}\delta(a_i)a_{i+1}\cdots a_n,$$
with $\delta(1)=0$, and extend $\mathbb Q$-linearly. Refute the statement.

[F1] [[def-differential-graded-algebra]]: The defining cochain differential satisfies $d^{n+1}d^n=0$.

## Counterexample

1.1 The words form a $\mathbb Q$-basis, so the displayed formula defines a unique linear map. Every nonzero generator image has degree one higher than its input. For homogeneous words $s,t$, the summands replacing letters of $s$ give $\delta(s)t$, while those replacing letters of $t$ acquire the extra sign $(-1)^{|s|}$; hence $\delta(st)=\delta(s)t+(-1)^{|s|}s\delta(t)$. Bilinearity extends the identity to all homogeneous elements. [given, construct, algebra]

2.1 Applying the generator rules twice gives $\delta^2(x)=\delta(u)=v$. The word $v$ is a nonzero basis element of the free algebra, so $\delta^2(x)\ne0$. [step 1.1, algebra]

3.1 By [F1], square-zero is required for a cohomological DGA differential. Thus $\delta$ is a degree-one graded derivation that is not square-zero, refuting the statement. [F1, step 2.1] ∎
