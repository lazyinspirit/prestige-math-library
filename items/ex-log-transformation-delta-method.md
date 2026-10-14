---
id: ex-log-transformation-delta-method
kind: example
title: "A logarithmic transformation"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [thm-first-and-second-order-delta-method-for-random-vectors]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $\Omega=\{-1,1\}$ with each point having probability $1/2$, let $Z(\omega)=\omega$, and set $T_n=\max\{1/2,\,1+Z/\sqrt n\}$ for $n\ge1$. Define the Borel map $g(t)=\log t$ for $t>0$ and $g(t)=0$ for $t\le0$. Then
$$\sqrt n\{\log T_n-\log1\}\Rightarrow Z.$$
Thus the log transformation has first-order scale $\sqrt n$ and derivative $g'(1)=1$ in this example.

## Facts & Assumptions

**Given:** The finite two-point law and sequence in the example.

[A1] $\Omega=\{-1,1\}$ has full sigma-field and assigns mass $1/2$ to each point; $Z(\omega)=\omega$.

[F1] [[thm-first-and-second-order-delta-method-for-random-vectors]]: if $r_n>0$ is deterministic with $r_n\to\infty$, $r_n(T_n-\theta)\Rightarrow Z$, and the Borel map $g$ has derivative $A$ at $\theta$ with first-order remainder $o(\|h\|)$, then $r_n(g(T_n)-g(\theta))\Rightarrow AZ$.

## Verification

**Given:** The finite two-point law, $r_n=\sqrt n$, $\theta=1$, and the function $g$ in the example.

1.1 By [A1], $Z\in\{-1,1\}$. For $n\ge4$, $1+Z/\sqrt n\ge1-1/2=1/2$, so $T_n=1+Z/\sqrt n$ and $\sqrt n(T_n-1)=Z$ exactly. Hence $\sqrt n(T_n-1)\Rightarrow Z$. [A1, given, algebra]

2.1 The map $g$ is differentiable at $1$ with derivative $1$. Apply [F1] to obtain $\sqrt n\{\log T_n-\log1\}\Rightarrow Z$. [F1, given, step 1.1] ∎
