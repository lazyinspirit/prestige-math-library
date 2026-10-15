---
id: ex-tdmath-no-sinks-sandwich-on-r
kind: example
title: A no-sinks sandwich on the real line
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-complete-ordered-field, thm-tdmath-infinite-no-sinks-sandwich]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  thm-tdmath-infinite-no-sinks-sandwich: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "MIT 18.102, Introduction to Functional Analysis, complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf?download=1"
---

## Example

On $V=\mathbb R$, let $p(x):=\max\{x,0\}$ and $L(x):=x/2$. Then $p$ is an everywhere-finite no-sinks sublinear function and $L$ satisfies $-p(-x)\le L(x)\le p(x)$ for every real $x$.

## Facts & Assumptions

[A1] The example's definitions: $p(x)=\max\{x,0\}$ and $L(x)=x/2$ on the real vector space $\mathbb R$.

[F1] [[thm-tdmath-infinite-no-sinks-sandwich]]: the sandwich theorem assumes $p(0)=0$, positive homogeneity, subadditivity, and symmetric finiteness of $p(x),p(-x)$.

## Verification

**Given:** [A1] and [F1].

1.1 For $x=0$, $p(x)=0$. For $t>0$, $p(tx)=\max\{tx,0\}=t\max\{x,0\}=tp(x)$. Also $p(x+y)\le p(x)+p(y)$ because the right side is nonnegative and at least $x+y$. Every value is finite, so $p(x)<+\infty$ iff $p(-x)<+\infty$. Thus all assumptions in [F1] hold. [A1, F1, algebra]

2.1 The map $L(x)=x/2$ is real-linear. If $x\ge0$, then $p(x)=x$, $p(-x)=0$, and $0\le x/2\le x$. If $x\le0$, then $p(x)=0$, $p(-x)=-x$, and $x\le x/2\le0$. These two cases include $x=0$ and give $-p(-x)\le L(x)\le p(x)$ for all $x$. [A1, F1, step 1.1, algebra] ∎

