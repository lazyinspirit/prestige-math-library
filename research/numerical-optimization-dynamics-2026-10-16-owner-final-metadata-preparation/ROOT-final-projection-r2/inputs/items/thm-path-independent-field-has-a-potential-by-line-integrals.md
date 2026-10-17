---
id: thm-path-independent-field-has-a-potential-by-line-integrals
kind: theorem
title: "A continuous path-independent field has a potential constructed by line integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-piecewise-c1-path-connected-conservative-and-path-independent, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-reversal-and-concatenation, thm-continuous-partial-derivatives-imply-total-differentiability, thm-line-integrals-under-oriented-reparametrization]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 9.3.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be nonempty, open, and piecewise-$C^1$ path-connected. If the continuous field $F:U\to\mathbb R^n$ is path-independent, then it is conservative. More precisely, for any basepoint $a\in U$,

$$\phi(x):=\int_a^x F\cdot d\mathbf r$$

is well-defined, is $C^1$, satisfies $\phi(a)=0$, and has $\nabla\phi=F$.

## Facts & Assumptions
**Given:** The domain, field, path independence, and basepoint in the Statement.

[L1] Piecewise-$C^1$ path-connectedness supplies a path in $U$ from $a$ to each $x$, and path independence makes the integral depend only on its endpoints ([[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L2] Vector line integrals add under concatenation, and a constant path has integral zero ([[thm-line-integrals-under-reversal-and-concatenation]], [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L3] If all partial derivatives exist near a point and are continuous there, then the function is totally differentiable there, with derivative matrix equal to its Jacobian ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L4] An orientation-preserving oriented piecewise-$C^1$ reparametrization leaves a vector line integral unchanged ([[thm-line-integrals-under-oriented-reparametrization]]).



## Proof

**Proof technique:** direct.

1.1 By [L1], the displayed formula defines one real number $\phi(x)$ for every $x\in U$. Choosing the constant path at $a$ and using [L2] gives $\phi(a)=0$. [given, L1, L2]

1.2 Fix $x\in U$ and a coordinate $j$. Since $U$ is open, there is $r>0$ such that $x+q e_j\in U$ whenever $|q|<r$. Take any path from $a$ to $x$ and reparametrize it by the increasing affine bijection of $[0,1]$ onto its domain; this is an orientation-preserving oriented reparametrization, so [L4] leaves its integral unchanged. Both it and the coordinate segment $\sigma_q(t)=x+tq e_j$, $0\leq t\leq1$, now have domain $[0,1]$, so the concatenation in [L2] is defined; append $\sigma_q$. [given, L1, L2, L4]

2.1 Path independence and [L2] give, for $0<|q|<r$, $$\phi(x+qe_j)-\phi(x)=\int_{\sigma_q}F\cdot d\mathbf r =q\int_0^1F_j(x+tqe_j)\,dt.$$ [step 1.2, L2, algebra]

3.1 Divide step 2.1 by $q$. For every $\varepsilon>0$, continuity of $F_j$ at $x$ makes $|F_j(x+tqe_j)-F_j(x)|<\varepsilon$ uniformly for $0\leq t\leq1$ when $q$ is sufficiently small. Therefore the quotient tends to $F_j(x)$, so $\partial_j\phi(x)=F_j(x)$. [given, step 2.1, algebra]

4.1 Since $x$ and $j$ were arbitrary, all partial derivatives of $\phi$ are the continuous components of $F$. By [L3], $\phi$ is totally differentiable everywhere with $\nabla\phi=F$, and these derivatives vary continuously; hence $\phi$ is $C^1$. [step 3.1, L3]

5.1 Thus $\phi$ is the normalized potential asserted in the Statement, and $F$ is conservative. [step 1.1, step 4.1, L1] ∎
