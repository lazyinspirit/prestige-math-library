---
id: ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval
kind: example
title: "Egorov for x^k on the unit interval"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-egorovs-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
---

## Example

On $[0,1]$ with Lebesgue measure, the functions $f_k(x):=x^k$ converge
pointwise to the function
$$f(x)=\begin{cases} 0, & 0 \le x < 1,\\ 1, & x=1. \end{cases}$$

For every $\varepsilon \in (0,1)$, the exceptional set $(1-\varepsilon,1]$ has
measure $\varepsilon$, and on the closed core $[0,1-\varepsilon]$ the
convergence is uniform with estimate
$|x^k-f(x)|\le(1-\varepsilon)^k$.

## Facts & Assumptions

**Given:** Lebesgue measure on $[0,1]$, the sequence $f_k(x):=x^k$, and $\varepsilon \in (0,1)$.

[L1] Egorov's theorem says that on a finite measure space, almost-everywhere convergence implies almost-uniform convergence. ([[thm-egorovs-theorem]])

## Verification

**Proof technique:** direct.

1.1 If $0 \le x < 1$, then $x^k \to 0$, while $1^k=1$ for every $k$. Thus $f_k \to f$ pointwise on $[0,1]$. [given]

2.1 Put $E:=(1-\varepsilon,1]$. Then $\lambda(E)=\varepsilon$, and for $x \in [0,1-\varepsilon]$ one has $f(x)=0$ and $|f_k(x)-f(x)|=x^k\le(1-\varepsilon)^k$. Since $(1-\varepsilon)^k \to 0$, the convergence is uniform on $[0,1-\varepsilon]$. [step 1.1, algebra]

3.1 This is the almost-uniform conclusion predicted abstractly by [L1], and here the exceptional set and the uniform estimate are explicit. [step 2.1, L1] ∎
