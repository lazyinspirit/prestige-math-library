---
id: lem-author-635c380339fd-inverse-sine-budget
kind: lemma
title: An elementary sufficient budget for the synchronization criterion
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-principal-inverse-sine-and-cosine
  - math:def-natural-logarithm
  - math:thm-principal-inverse-sine-and-cosine-derivatives
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:cor-mean-value-theorem
  - math:thm-natural-logarithm-laws
dependency_roles:
  math:def-principal-inverse-sine-and-cosine: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-principal-inverse-sine-and-cosine-derivatives: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:cor-mean-value-theorem: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $n>6$, $0<a\le1/24$ and $0<b<1/4$. Set $q=1/(2b)-1>1$. If $\pi/(96a)>\log n/\log q+1$, then $a<1/12$ and $\frac{\pi/4}{\arcsin(12a)}>\frac{\log(n/6)}{\log(1/(2b)-1)}+1$. The inverse sine is its principal branch in radians.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The principal inverse sine is continuous on $[-1,1]$ and is the inverse of sine restricted to $[-\pi/2,\pi/2]$; logarithms have domain $(0,\infty)$: [[math:def-principal-inverse-sine-and-cosine]] and [[math:def-natural-logarithm]].

[F2] For $-1<t<1$, $(\arcsin t)\prime=1/\sqrt{1-t^2}$: [[math:thm-principal-inverse-sine-and-cosine-derivatives]].

[F3] Sine is odd, so $\sin0=-\sin0$ and hence $\sin0=0$: [[math:cor-trigonometric-parity-and-pythagorean-identity]].

[F4] If $f$ is continuous on $[u,v]$ with $u<v$ and differentiable on $(u,v)$, then $f(v)-f(u)=f\prime(c)(v-u)$ for some $c\in(u,v)$: [[math:cor-mean-value-theorem]].

[F5] The natural logarithm is strictly increasing and $\log1=0$: [[math:thm-natural-logarithm-laws]].

## Proof

1.1 By the principal inverse convention and $\sin0=0$, $\arcsin0=0$. For $0<x\le1/2$, the principal inverse sine is continuous on $[0,x]$ and differentiable on $(0,x)$, since $[0,x]\subset(-1,1)$. The mean value theorem therefore gives $\arcsin x=x/\sqrt{1-c^2}$ for some $0<c<x$. Since $1-c^2\ge3/4>1/4$, this yields $0<\arcsin x\le2x$. In particular, $0<12a\le1/2$ gives $0<\arcsin(12a)\le24a$. [given, F1, F2, F3, F4, algebra]

2.1 The positivity in step 1.1 permits taking reciprocals and gives $(\pi/4)/\arcsin(12a)\ge\pi/(96a)$. The hypothesis $0<b<1/4$ gives $q=1/(2b)-1>1$, so $\log q>\log1=0$. Also $0<n/6<n$, hence $\log(n/6)<\log n$. Thus $(\pi/4)/\arcsin(12a)\ge\pi/(96a)>\log n/\log q+1>\log(n/6)/\log q+1$, as required; and $a\le1/24<1/12$. [given, F1, F5, step 1.1, algebra] ∎
