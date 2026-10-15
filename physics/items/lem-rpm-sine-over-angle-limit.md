---
id: lem-rpm-sine-over-angle-limit
kind: lemma
title: "The sine-to-angle limit at the origin"
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - thm-sine-and-cosine-derivatives
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
dependency_roles:
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
physical_scope: "Pure real-analysis limit used to identify the impact parameter from the asymptotic angular gap; it is not a physical assumption."
sources:
  references:
    - title: "OpenStax, Calculus Volume 1, §2.3 The Limit Laws, unit-circle squeeze proof of the fundamental sine limit"
      url: "https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws"
verification: {}
---

## Statement

The limit over nonzero real $x$ is

$$\lim_{x\to0}\frac{\sin x}{x}=1.$$

## Facts & Assumptions

**Given:** The real sine and cosine functions.

[F1] Sine and cosine are differentiable on $\mathbb R$, $\sin 0=0$, $\cos 0=1$, and $\sin'=\cos$, $\cos'=-\sin$ ([[thm-sine-and-cosine-derivatives]]).

[F2] Differentiability at every point of an interval implies continuity there ([[cor-differentiable-implies-continuous]]).

[F3] The mean value theorem applies to a function continuous on a closed interval and differentiable on its interior ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** apply the mean value theorem on the interval between $0$ and $x$, then use continuity of cosine at $0$.

1.1 Fix $x\ne0$. By [F1] and [F2], sine is continuous on the closed interval with endpoints $0,x$ and differentiable in its interior. By [F3] there is $\xi_x$ strictly between $0$ and $x$ such that $\sin x/x=(\sin x-\sin0)/(x-0)=\cos\xi_x$. [given, F1, F2, F3, algebra]

2.1 Given $\varepsilon>0$, [F1] and [F2] make cosine continuous at $0$, so choose $\delta>0$ such that $|t|<\delta$ implies $|\cos t-1|<\varepsilon$. If $0<|x|<\delta$, then $|\xi_x|<|x|<\delta$ and step 1.1 yields $|\sin x/x-1|=|\cos\xi_x-1|<\varepsilon$. This is the stated limit. [step 1.1, F1, F2, given, algebra] ∎
