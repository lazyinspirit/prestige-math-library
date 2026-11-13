---
id: prop-expander-prereq-rounding-exponent-budget
kind: proposition
title: Floor and ceiling thresholds in logarithmic degree estimates
domain: mathematics
status: published
origin: pipeline
deps:
  - math:lem-integer-part
  - math:def-factorial-and-falling-factorial
  - math:thm-natural-logarithm-laws
dependency_roles:
  math:lem-integer-part: mathematical-premise
  math:def-factorial-and-falling-factorial: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $a_n,c_n$ be real, $b_n>0$, and for integers $k\ge 0$ put $F_n(k)=a_n+k\log b_n-\log(k!)+c_nk$, where $\log$ is the natural logarithm and $0!=1$. Then $F_n(k+1)-F_n(k)=\log b_n-\log(k+1)+c_n$.

For $t\ge0$, let $m=\lfloor t\rfloor$ be the unique integer satisfying $m\le t<m+1$, and let $\lceil t\rceil$ be $m$ if $t=m$ and $m+1$ otherwise. Define the piecewise linear interpolation $\widetilde F_n(t)=(1-(t-m))F_n(m)+(t-m)F_n(m+1)$. For either $r=\lfloor t\rfloor$ or $r=\lceil t\rceil$, $|F_n(r)-\widetilde F_n(t)|\le |\log b_n|+\log(m+1)+|c_n|$.

In particular, fix $\gamma>0$ and $C\ge0$. If $b_n=\gamma\log n$, $|c_n|\le C$ and $0\le m\le C\log n$ for integers $n$ sufficiently large, then the last difference is at most $4\log\log n$ for all sufficiently large $n$, with the threshold depending only on $\gamma$ and $C$. Thus it is $O(\log\log n)$: its absolute value is bounded by a constant multiple of $\log\log n$ eventually. The interpolation uses factorials only at integers; a factorial at a noninteger would require a separately specified extension.

## Statement references

[[math:lem-integer-part]]

[[math:def-factorial-and-falling-factorial]]

[[math:thm-natural-logarithm-laws]]

## Facts & Assumptions

[F1] The factorial recursion gives $(k+1)!=(k+1)k!$, with $k!>0$, for every integer $k\ge0$ ([[math:def-factorial-and-falling-factorial]]).

[F2] The natural logarithm is increasing on positive reals and satisfies $\log(xy)=\log x+\log y$ there ([[math:thm-natural-logarithm-laws]]).

[F3] Every real number has a unique integer part $m$ with $m\le t<m+1$ ([[math:lem-integer-part]]).

## Proof

**Given:** The quantities and hypotheses in the statement.

**Goal:** Prove the increment, interpolation bound, and stated eventual budget.

1.1 By factorial recursion and the logarithm product law, $\log((k+1)!)=\log(k+1)+\log(k!)$. Subtracting the two definitions of $F_n$ therefore gives $F_n(k+1)-F_n(k)=\log b_n-\log(k+1)+c_n$. [F1, F2, algebra]

2.1 Put $u=t-m$, so $0\le u<1$. The interpolation lies on the line segment between $F_n(m)$ and $F_n(m+1)$. Each permitted endpoint is one of these values, so its distance from the interpolation is at most $|F_n(m+1)-F_n(m)|$. Since $m+1\ge1$, logarithm monotonicity gives $\log(m+1)\ge0$; the triangle inequality and step 1.1 yield the stated bound. [F2, F3, step 1.1, algebra]

3.1 For sufficiently large $n$, $\log\log n\ge0$, and $m+1\le(C+1)\log n$. Hence $|\log b_n|\le |\log\gamma|+\log\log n$ and $\log(m+1)\le\log(C+1)+\log\log n$. The bound in step 2.1 is therefore at most $2\log\log n+|\log\gamma|+\log(C+1)+C$. As $\log\log n$ tends to infinity, the fixed latter terms are at most $2\log\log n$ eventually. This proves the $4\log\log n$ and big-O assertions. The construction only evaluates factorials at $m$ and $m+1$. [F2, step 2.1, algebra] ∎
