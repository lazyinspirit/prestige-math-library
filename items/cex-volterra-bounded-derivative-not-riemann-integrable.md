---
id: cex-volterra-bounded-derivative-not-riemann-integrable
kind: counterexample
title: "Volterra's function is differentiable everywhere with bounded derivative, but its derivative is not Riemann integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, thm-riemann-criterion, def-oscillation, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-pi-via-first-positive-cosine-zero, thm-quarter-turn-values-and-shift-formulas, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Chen, The Cantor Set Before Cantor, Sections 3.2--3.3"
      url: "https://mat.uab.es/~rubio/students/Chen-FYP.pdf"
pipeline_run: null
---

## Counterexample

There is a differentiable function $W:[0,1]\to\mathbb R$ whose derivative is bounded but not Riemann integrable.

Let $S$ be the Smith--Volterra--Cantor set. Put $g(0)=0$ and $g(t)=t^2\sin(1/t)$ for $t>0$. Choose a continuously differentiable cutoff $\chi:[0,\infty)\to[0,1]$ with $\chi=1$ on $[0,1/2]$ and $\chi=0$ on $[1,\infty)$. For each removed component $(u,v)$ of $[0,1]\setminus S$, set $r=(v-u)/3$ and define

$$W(x)=g(x-u)\chi((x-u)/r)+g(v-x)\chi((v-x)/r)\quad(u<x<v),$$

and put $W(x)=0$ for $x\in S$. The two summands have disjoint interiors of support. Then $W$ is differentiable everywhere, $W'=0$ on $S$, and $W'$ is bounded. Nevertheless every interval meeting $S$ has oscillation of $W'$ at least $1/2$, so $W'$ fails the Riemann criterion.

## Facts & Assumptions

**Given:** The fat Cantor set $S$ and the displayed construction.

[L1] At every stage the Smith--Volterra--Cantor construction removes a nonempty open middle interval from each retained interval, and the retained interval lengths are at most $2^{-n}$ at stage $n$ ([[def-fat-cantor-set]]).

[L2] The set $S$ is closed, nowhere dense, and every interval cover of $S$ has total length at least $1/2$ ([[thm-fat-cantor-set-has-positive-measure]]).

[L3] The product and chain rules and the derivatives of sine and cosine give $g'(t)=2t\sin(1/t)-\cos(1/t)$ for $t>0$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-sine-and-cosine-derivatives]]).

[L4] Sine and cosine have absolute value at most $1$; $\pi>0$, and their values at integer multiples of $\pi$ alternate by the quarter-turn and shift formulas ([[cor-trigonometric-parity-and-pythagorean-identity]], [[def-pi-via-first-positive-cosine-zero]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L5] Reciprocals of positive natural numbers tend to $0$ ([[cor-archimedean-reciprocal]]).

[L6] Oscillation on a set is the supremum of $|f(x)-f(y)|$, and it is monotone under inclusion ([[def-oscillation]]).

[L7] A bounded function is Riemann integrable if and only if it has partitions with arbitrarily small upper-minus-lower sum ([[thm-riemann-criterion]]).

## Verification

**Proof technique:** construction.

1.1 A concrete cutoff is obtained by taking $\chi(s)=1$ for $s\le1/2$, $\chi(s)=1-3(2s-1)^2+2(2s-1)^3$ for $1/2\le s\le1$, and $\chi(s)=0$ for $s\ge1$; the values and first derivatives agree at both joins. [construct, algebra]

2.1 On a gap $(u,v)$ the two supports lie in $(u,u+r]$ and $[v-r,v)$ and are disjoint because $2r<v-u$. Each summand and its derivative vanish at its cutoff join, so $W$ is differentiable throughout every gap. [step 1.1, algebra]

3.1 By [L4], $|g(t)|\le t^2$. If $x$ lies in a gap, then $|W(x)|\le\operatorname{dist}(x,S)^2$; if $s\in S$, this is at most $|x-s|^2$. Hence $W'(s)=0$ for every $s\in S$, including $0$ and $1$. [given, step 2.1, L4]

4.1 By [L3]--[L4], $|g'(t)|\le2t+1\le3$ on $0<t\le1$. Differentiating inside a support gives a sum of $g'\chi$ and $g\chi'/r$, and $|g(t)|/r\le t^2/r\le r\le1$ on $0\le t\le r$. Since $\chi'$ is bounded on its two polynomial pieces, one constant bounds $W'$ on all gaps and on $S$. [step 1.1, step 3.1, L3, L4]

4.2 Let $I$ be a nondegenerate closed interval meeting $S$. If $S$ meets the interior of $I$, choose such a point and then, using the shrinking bound in [L1], a retained interval around it contained in $I$; its next-stage middle gap lies in $I$. If $S$ does not meet the interior, an endpoint of $I$ lies in $S$ and the interior lies in one removed gap, so gap points approach that endpoint from inside $I$. In either case the endpoint recursion in [L1] keeps the relevant gap endpoint in every later retained stage, hence in $S$. On its adjacent half-support $\chi=1$. By [L3]--[L5], the points at distances $1/(2\pi k)$ and $1/((2k+1)\pi)$ from that endpoint eventually lie in the half-support and give derivative values $-1$ and $1$, whereas step 3.1 gives value $0$ at the endpoint. Thus $\omega_{W'}(I)\ge1/2$. [step 3.1, L1, L2, L3, L4, L5, L6]

5.1 Fix any partition and retain its subintervals that meet $S$. These finitely many closed intervals cover $S$, so their total lengths are at least $1/2$ by [L2]. Step 4.2 therefore gives $U(W',P)-L(W',P)\ge(1/2)(1/2)=1/4$. [step 4.2, L2, L6]

6.1 The derivative is bounded by step 4.1, but the fixed lower bound in step 5.1 contradicts [L7]. Hence $W'$ is not Riemann integrable. [step 4.1, step 5.1, L7] ∎
