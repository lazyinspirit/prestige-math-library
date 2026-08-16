---
id: ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop
kind: example
title: "A loop that traverses the circle once and then pauses is homotopic to the standard loop"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The piecewise lift must paste at one half, end at one, and yield a homotopy relative to both endpoints."
  counterexample_search: "Recomputed the join and endpoint values and checked the projected straight-line formula on the full boundary of the homotopy square."
deps: [def-circle-as-real-line-mod-integers, def-standard-integer-loops-in-the-circle, def-degree-of-a-circle-loop, prop-standard-circle-loops-have-their-integer-degrees, lem-straight-line-homotopies-are-continuous, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Define $u:I\to\mathbb R$ by

$$u(t)=\begin{cases}2t,&0\le t\le1/2,\\1,&1/2\le t\le1,\end{cases}$$

and put $\alpha=p\circ u$. Then $\alpha$ traverses the quotient circle once
during the first half of the parameter interval and remains at $[0]$ during the
second half. It is path-homotopic to $\omega_1$.

## Facts & Assumptions

**Given:** The displayed function $u$ and the loop $\alpha=p\circ u$.

[L1] For every integer $n$, define $\widetilde\omega_n(t)=nt$ and $\omega_n=p\circ\widetilde\omega_n$ ([[def-standard-integer-loops-in-the-circle]]).

[L3] Functions continuous on each member of a finite closed cover, and agreeing where the pieces meet, paste to a continuous function ([[lem-continuity-is-local-and-pastes]]).

[L4] Degree is the endpoint of the unique lift beginning at zero ([[def-degree-of-a-circle-loop]]).

[L5] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L6] Straight-line interpolation between two continuous real-valued maps is a continuous homotopy ([[lem-straight-line-homotopies-are-continuous]]).

[L7] The quotient projection is continuous, $p(0)=[0]$, and $p(1)=[0]$ ([[def-circle-as-real-line-mod-integers]]).

[L8] Constant functions, the identity, finite sums, and scalar multiples are continuous on real intervals ([[thm-algebra-of-continuous-functions]]).

## Verification

**Proof technique:** direct.

1.1 The two formulas for $u$ agree at $t=1/2$, where both equal $1$, and each piece is continuous by [L8], so [L3] makes $u$ continuous. It has $u(0)=0$ and $u(1)=1$, hence [L7] makes $\alpha=p\circ u$ a based loop. Since $u$ starts at zero and projects to $\alpha$, it is the defining lift and [L4] gives $\deg(\alpha)=u(1)=1$. [L3, L4, L7, L8]

2.1 By [L1], the standard loop $\omega_1$ is the projection of $v(t)=t$, and [L5] gives $\deg(\omega_1)=1=\deg(\alpha)$. [step 1.1, L1, L5]

3.1 The formula $K(t,s)=(1-s)u(t)+st$ is a continuous homotopy from $u$ to $v$ by [L6]. Since $u(0)=v(0)=0$ and $u(1)=v(1)=1$, it fixes both endpoints for every $s$. Postcomposing with $p$ gives the explicit path homotopy $H(t,s)=p(K(t,s))$ from $\alpha$ to $\omega_1$, relative to $t=0,1$. [step 1.1, step 2.1, L6, L7] ∎
