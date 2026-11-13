---
id: lem-author-4a6b79e2d031-vanishing-numerical-condition
title: Vanishing numerical condition for fixed positive Laplacian margins
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - math:thm-logarithm-slower-than-every-positive-power
  - math:def-natural-logarithm
  - math:thm-exponential-addition-formula
  - math:thm-logarithm-derivative-and-integral
  - math:def-real-power
  - math:thm-monotonicity-from-the-derivative
  - math:cor-differentiable-implies-continuous
  - math:def-limits-at-infinity
dependency_roles:
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-exponential-addition-formula: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:def-real-power: mathematical-premise
  math:thm-monotonicity-from-the-derivative: mathematical-premise
  math:cor-differentiable-implies-continuous: mathematical-premise
  math:def-limits-at-infinity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
formulation_deps:
  - math:def-natural-logarithm
  - math:def-real-power
  - math:def-limits-at-infinity
argument_deps:
  - math:thm-logarithm-slower-than-every-positive-power
  - math:def-natural-logarithm
  - math:thm-exponential-addition-formula
  - math:thm-logarithm-derivative-and-integral
  - math:def-real-power
  - math:thm-monotonicity-from-the-derivative
  - math:cor-differentiable-implies-continuous
  - math:def-limits-at-infinity
dependency_level: 0
---

## Statement

Fix $c^->-1$ with $c^-<0$, and $c^+>0$. For $d\to\infty$ and $\alpha=d^{-1/4}$, eventually $0<\alpha\le1/5$ and
$$\frac{32\alpha(1+4c^+-3c^-)}{(1+c^-)^2}\log\!\left(\frac{1+c^++\alpha}{2\alpha}\right)<1.$$
In particular $\alpha\log(1/\alpha)\to0$.

## Facts & Assumptions

[F1] For every $q>0$, $\log d/d^q\to0$ ([[math:thm-logarithm-slower-than-every-positive-power]]). The exponential maps $\mathbb R$ bijectively onto $(0,\infty)$, with inverse logarithm ([[math:def-natural-logarithm]]); logarithm product identities follow by applying this inverse to [[math:thm-exponential-addition-formula]].

[F2] For $a>0$ and $x\in\mathbb R$, real powers mean $a^x:=\exp(x\log a)$ ([[math:def-real-power]]).

[F3] On $(0,\infty)$ the logarithm is differentiable with $\log\prime(x)=1/x$ ([[math:thm-logarithm-derivative-and-integral]]). Differentiability at a limit point implies continuity there ([[math:cor-differentiable-implies-continuous]]). A continuous function on an interval with strictly positive derivative at every interior point is strictly increasing ([[math:thm-monotonicity-from-the-derivative]]).

[F4] Limits at $+\infty$ have the real-tolerance meaning in [[math:def-limits-at-infinity]]: $f(d)\to0$ means that for every $\eta>0$ there is a threshold beyond which $|f(d)|<\eta$.

## Proof

**Given:** The fixed constants and $d\to\infty$.

**Goal:** Prove the numerical inequality and the stated limit.

1.1 Eventually $d>0$. Positivity of the exponential and its addition formula give $\exp(0)=1$ and $\exp(-t)=1/\exp(t)$. Applying the inverse logarithm to $\exp(\log u+\log v)=uv$ gives $\log(uv)=\log u+\log v$ for $u,v>0$, and $\log1=0$. By [F2], $\alpha=\exp(-\tfrac14\log d)>0$, $1/\alpha=d^{1/4}=\exp(\tfrac14\log d)$, and $\log(1/\alpha)=\tfrac14\log d$. Put $\beta(d)=\log d/d^{1/4}$, so $\beta(d)\to0$ by [F1] with $q=1/4$, and $\alpha\log(1/\alpha)=\beta(d)/4$. [F1, F2, given, algebra]

2.1 Every point of $(0,\infty)$ is a limit point and interior point of this interval. By [F3], the logarithm is continuous there and its derivative $1/x$ is strictly positive, so the monotonicity theorem applies. For $d\ge\exp(1)$, it gives $\log d\ge\log(\exp(1))=1$, and hence $0<\alpha\le\alpha\log d=\beta(d)$. For every $\eta>0$, step 1.1 and [F4] give $\beta(d)<\eta$ eventually; thus $0<\alpha<\eta$ eventually. This proves $\alpha\to0$, and in particular eventually $0<\alpha\le1/5$. [F1, F3, F4, step 1.1]

3.1 Set $K=32(1+4c^+-3c^-)/(1+c^-)^2$ and $C=\log((2+c^+)/2)$. These are finite fixed positive constants: $-1<c^-<0$, $c^+>0$, and monotonicity gives $C>\log1=0$. For $0<\alpha\le1/5$, the ratio $(1+c^++\alpha)/(2\alpha)$ exceeds one, and, since $\alpha\le1$, logarithm monotonicity and the product identity give $0<\log((1+c^++\alpha)/(2\alpha))\le C+\log(1/\alpha)=C+\tfrac14\log d$. Thus for sufficiently large $d$, step 2.1 yields $0<K\alpha\log((1+c^++\alpha)/(2\alpha))\le K(C\alpha+\beta(d)/4)\le K(C+1/4)\beta(d)$. [F1, step 1.1, step 2.1, given, algebra]

4.1 For any $\eta>0$, step 1.1 and [F4] give $\beta(d)<\eta/(K(C+1/4))$ eventually. The bound in step 3.1 therefore makes the numerical expression less than $\eta$ eventually; taking $\eta=1$ proves the strict inequality. Also, for any $\eta>0$, eventually $0\le\beta(d)<4\eta$, so the identity in step 1.1 gives $|\alpha\log(1/\alpha)|<\eta$. By [F4] this proves the stated final limit. [F4, step 1.1, step 2.1, step 3.1] ∎
