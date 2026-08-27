---
id: thm-continuity-under-the-integral-sign
kind: theorem
title: "Continuity under the integral sign"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dominated-convergence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.27"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $I\subseteq\mathbb R$ be an interval and let $f:X\times I\to\mathbb C$ be
such that:

1. for every $t\in I$, the function $x\mapsto f(x,t)$ is integrable;
2. for almost every $x$, the map $t\mapsto f(x,t)$ is continuous on $I$;
3. there is a nonnegative measurable function $g$ with
   $$\int g\,d\mu<+\infty$$
   and $|f(x,t)|\le g(x)$ for every $t\in I$ and almost every $x$.

Then
$$F(t):=\int f(x,t)\,d\mu(x)$$
is continuous on $I$.

## Facts & Assumptions

**Given:** An interval $I$ and a function $f$ satisfying the three displayed hypotheses.

[L1] Dominated convergence applies to integrable complex-valued functions under a single $L^1$ majorant ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $t_0\in I$ and let $(t_n)$ be any sequence in $I$ with $t_n\to t_0$. For almost every $x$, continuity in $t$ gives $f(x,t_n)\to f(x,t_0)$, and the dominating bound gives $|f(x,t_n)|\le g(x)$. [given, L1]

2.1 Apply [L1] to the sequence $x\mapsto f(x,t_n)$. Then $$F(t_n)=\int f(x,t_n)\,d\mu(x)\longrightarrow\int f(x,t_0)\,d\mu(x)=F(t_0).$$ Since every convergent sequence in $I$ has this property, $F$ is continuous at $t_0$, and therefore on all of $I$. [step 1.1, L1] ∎
