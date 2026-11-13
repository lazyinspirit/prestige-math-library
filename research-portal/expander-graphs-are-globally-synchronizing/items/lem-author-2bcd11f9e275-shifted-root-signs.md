---
id: lem-author-2bcd11f9e275-shifted-root-signs
kind: lemma
title: Parameter bounds giving the signs of shifted entropy roots
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-2bcd11f9e275-logarithmic-tangent-bound
  - lem-author-2bcd11f9e275-entropy-branch-geometry
  - math:thm-monotonicity-from-the-derivative
  - math:thm-natural-logarithm-laws
  - lem-author-2bcd11f9e275-entropy-inverse-branches
  - math:lem-derivative-algebra-and-chain-rules
dependency_roles:
  lem-author-2bcd11f9e275-logarithmic-tangent-bound: mathematical-premise
  lem-author-2bcd11f9e275-entropy-branch-geometry: mathematical-premise
  math:thm-monotonicity-from-the-derivative: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  lem-author-2bcd11f9e275-entropy-inverse-branches: mathematical-premise
  math:lem-derivative-algebra-and-chain-rules: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement

Let $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, and put $t=(1+\varepsilon)/\gamma$. Then $0<t<1$ and $I(1+\varepsilon)<I(1-\varepsilon)<\varepsilon^2<t$. Consequently $a_-(t)-1+\varepsilon\in(-1+\varepsilon,0)$ and $a_+(t)-1-\varepsilon>0$. Moreover $1+\varepsilon^{-2}<(1+\varepsilon)/I(1-\varepsilon)$.

## Facts & Assumptions

**Given:** The variables and hypotheses of the Statement.

[F1] [[lem-author-2bcd11f9e275-logarithmic-tangent-bound]] gives $0<I(1-\varepsilon)<\varepsilon^2$.

[F2] [[lem-author-2bcd11f9e275-entropy-branch-geometry]] defines $I(a)=a\log a-a+1$ for $a>0$ and gives $I\prime(a)=\log a$, the branch ranges and their strict order.

[F3] [[math:thm-monotonicity-from-the-derivative]] gives strict increase on an interval for a function continuous there and with positive derivative at every interior point.

[F4] [[math:thm-natural-logarithm-laws]] gives logarithm product laws and strict order.

[F5] [[lem-author-2bcd11f9e275-entropy-inverse-branches]] defines the unique inverse values $a_-(t)$ and $a_+(t)$ on the stated ranges.

[F6] [[math:lem-derivative-algebra-and-chain-rules]] gives the sum, product and chain rules for real functions differentiable at the relevant points, and continuity wherever a function is differentiable.

## Proof

**Goal:** Establish the full Statement.

1.1 The parameter bounds give $0<t<1$ and $t>(1+\varepsilon)\varepsilon^2/(1+\varepsilon^2)>\varepsilon^2$, the last inequality using $\varepsilon>\varepsilon^2$. F1 gives $I(1-\varepsilon)<\varepsilon^2$. In particular $(1+\varepsilon)/I(1-\varepsilon)>(1+\varepsilon)/\varepsilon^2>1+\varepsilon^{-2}$. [given, F1, algebra]

1.2 For $-1<u<1$, set $B(u)=I(1-u)-I(1+u)$; both arguments of $I$ are positive throughout this open interval, and $B(0)=0$. The affine functions $1-u$ and $1+u$ have difference quotients $-1$ and $1$, respectively. By F2 and F6, $B$ is differentiable, hence continuous, on $(-1,1)$ and $B\prime(u)=-\log(1-u)-\log(1+u)$. For $0<u<1$, F4 gives $B\prime(u)=-\log(1-u^2)>0$, since $0<1-u^2<1$ and $\log 1=0$. [F2, F4, F6, algebra]

2.1 The restriction of $B$ to $[0,\varepsilon]$ is continuous, and its derivative is positive at every point of $(0,\varepsilon)$ by step 1.2. F3 therefore gives $B(\varepsilon)>B(0)=0$, so $I(1+\varepsilon)<I(1-\varepsilon)<t$ by step 1.1. F5 gives $I(a_-(t))=I(a_+(t))=t$, with $a_-(t)\in(0,1)$ and $a_+(t)>1$. Since $I$ strictly decreases on $(0,1)$ and strictly increases on $(1,\infty)$ by F2, these inequalities imply $a_-(t)<1-\varepsilon$ and $a_+(t)>1+\varepsilon$. Together with $a_-(t)>0$, these prove both shifted signs and the asserted lower bound; step 1.1 gives the remaining parameter comparison. [F2, F3, F5, step 1.1, step 1.2, algebra] ∎
