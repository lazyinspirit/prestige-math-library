---
id: thm-gradient-theorem-for-line-integrals
kind: theorem
title: "The gradient theorem: the line integral of a gradient is the endpoint increment"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-jacobian-matrix-and-gradient, thm-chain-rule-for-total-derivatives, thm-newton-leibniz-with-interior-derivative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 9.3.1"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open, let $\phi:U\to\mathbb R$ be $C^1$, and let $\gamma:[a,b]\to U$ be piecewise-$C^1$. Then

$$\int_\gamma\nabla\phi\cdot d\mathbf r=\phi(\gamma(b))-\phi(\gamma(a)).$$

## Facts & Assumptions
**Given:** The open set, potential, and path in the Statement, with an admissible partition $a=t_0<\cdots<t_m=b$ when $a<b$.

[L1] The vector line integral is the sum of the integrals of $\langle\nabla\phi(\gamma(t)),v_i(t)\rangle$ over the smooth pieces ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] For a scalar function, the gradient lists its partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[L3] The total-derivative chain rule is $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L4] If a continuous function on $[u,v]$ has an integrable interior derivative $q$, then $\int_u^v q$ is its endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).



## Proof

**Proof technique:** direct.

1.1 If $a=b$, [L1] makes the line integral zero and the two endpoint values agree. Assume henceforth that $a<b$. On the interior of the $i$th smooth piece, [L2] and [L3] give $$\frac d{dt}\phi(\gamma(t))=\langle\nabla\phi(\gamma(t)),\gamma'(t)\rangle.$$ [given, L1, L2, L3, algebra]

2.1 The continuous derivative extension on that piece is the integrand in [L1]. Applying [L4] gives $$\int_{t_i}^{t_{i+1}}\langle\nabla\phi(\gamma(t)),v_i(t)\rangle\,dt =\phi(\gamma(t_{i+1}))-\phi(\gamma(t_i)).$$ [step 1.1, L1, L4]

3.1 Sum step 2.1 over the finite partition. All interior endpoint values cancel, leaving $\phi(\gamma(b))-\phi(\gamma(a))$, and [L1] identifies the left side with the line integral. [step 2.1, L1, algebra]

4.1 For a constant path the integrand is zero and the endpoints coincide, so both sides are zero. The same conclusion holds whenever merely $\gamma(a)=\gamma(b)$. [L1, step 3.1, algebra] ∎
