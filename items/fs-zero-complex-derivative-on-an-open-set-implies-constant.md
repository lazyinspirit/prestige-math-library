---
id: fs-zero-complex-derivative-on-an-open-set-implies-constant
kind: false-statement
title: "FALSE: a holomorphic function with zero derivative on an arbitrary open set is constant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-differentiability-holomorphic-and-entire, def-complex-domain, def-metric-topology]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, §3.1"
      url: "https://complexanalysis.org/web/sec_diff-analytic.html"
pipeline_run: frontier-12
---

## Statement

**False claim:** if $U\subseteq\mathbb C$ is open, $f:U\to\mathbb C$ is holomorphic, and $f'(z)=0$ for every $z\in U$, then $f$ is constant on $U$.

## Facts & Assumptions
**Given:** $$U:=\{z:\operatorname{Re}z<0\}\cup\{z:\operatorname{Re}z>0\},\qquad f(z):=\begin{cases}0,&\operatorname{Re}z<0,\\1,&\operatorname{Re}z>0.\end{cases}$$

[L1] A set is open in a metric space exactly when every one of its points has a positive-radius ball contained in the set ([[def-metric-topology]]).

[L2] A function is holomorphic on an open set when it is complex differentiable at each point of that set ([[def-complex-differentiability-holomorphic-and-entire]]).

[L3] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

## Refutation

**Proof technique:** direct counterexample.

1.1 Let $z=x+iy\in U$ and choose $r:=|x|/2>0$. If $|w-z|<r$, then $|\operatorname{Re}w-x|\le|w-z|<|x|/2$, so $\operatorname{Re}w$ has the same sign as $x$. Thus $B(z,r)\subseteq U$, and [L1] shows that $U$ is open. [given, L1, algebra]

1.2 But $-1,1\in U$ and $f(-1)=0\ne1=f(1)$, so $f$ is not constant on $U$. [given]

2.1 The same ball $B(z,r)$ lies wholly in one half-plane, so $f$ is constant on it. For every sufficiently small nonzero $h$ with $z+h\in U$, the difference quotient $(f(z+h)-f(z))/h$ is therefore $0$. Hence $f'(z)=0$. [step 1.1, L2]

3.1 Since $z\in U$ was arbitrary, [L2] says $f$ is holomorphic on $U$ and has derivative zero everywhere there. [step 2.1, L2]

4.1 Steps 3.1 and 1.2 refute the claim. The missing hypothesis is connectedness: $U$ is the disjoint union of two nonempty open half-planes, whereas [L3] requires a domain to be connected. [step 1.1, step 3.1, step 1.2, L3] ∎
