---
id: lem-john-domain-admits-bounded-overlap-ball-chains
kind: lemma
title: "Bounded-overlap ball chains in a bounded John domain"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-axiom-of-choice, def-john-domain-and-john-constant, def-measure, prop-measure-monotonicity, lem-sphere-and-ball-measures-scale, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-intermediate-value, def-continuity-real]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.4, Definition 5.31 and the proof of Theorem 5.33, printed pp. 141-142."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be a bounded John domain with distinguished point $x_0$ and admissible constant $c_J\ge1$; set $r_0=\frac14\operatorname{dist}(x_0,\partial\Omega)$ and $B_0=B(x_0,r_0)$. There is a constant $M=M(n,c_J)\ge1$ such that for every $x\in\Omega$ there are balls $B_i=B(x_i,r_i)\subseteq\Omega$, $i\ge0$, with:

1. $|B_i\cup B_{i+1}|\le M\,|B_i\cap B_{i+1}|$ for all $i\ge0$;
2. $\operatorname{dist}(x,B_i)\le Mr_i$ for all $i\ge0$, and $r_i\to0$, $x_i\to x$ as $i\to\infty$;
3. no point of $\Omega$ belongs to more than $M$ of the balls $B_i$.

For $x\notin B(x_0,2r_0)$ the chain starts with $B_0=B(x_0,r_0)$ and follows a John curve from $x_0$ to $x$; for $x\in B(x_0,2r_0)$ it is the explicit geometric chain constructed below. The choice assumption supplies Countable Choice for the John-domain and Lebesgue-measure interfaces; selecting a curve for one fixed $x$ needs no choice axiom.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a bounded John domain $\Omega$ with distinguished point $x_0$ and admissible constant $c_J\ge1$; $r_0=\frac14\operatorname{dist}(x_0,\partial\Omega)>0$; and a point $x\in\Omega$.

[F1] There is a path $\gamma:[0,1]\to\Omega$ with $\gamma(0)=x$, $\gamma(1)=x_0$ and $\operatorname{dist}(\gamma(t),\partial\Omega)\ge c_J^{-1}|x-\gamma(t)|$ for every $t\in[0,1]$ ([[def-john-domain-and-john-constant]]). Evaluating at $t=1$ gives $|x-x_0|\le c_J\operatorname{dist}(x_0,\partial\Omega)=4c_Jr_0$.

[F2] For every ball $\lambda_n(B(z,\rho))=\omega_{n-1}\rho^n/n$ with $0<\omega_{n-1}=\sigma(S^{n-1})<\infty$; hence $\lambda_n(B(z,\rho))/\lambda_n(B(z',\rho'))=(\rho/\rho')^n$ and every ball has positive finite measure ([[lem-sphere-and-ball-measures-scale]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F3] A measure is countably additive on pairwise disjoint measurable sets and monotone under inclusion ([[def-measure]], [[prop-measure-monotonicity]]).

[F4] The curve $\gamma$ is uniformly continuous on $[0,1]$. Indeed, for each $t$ continuity gives a radius $a_t>0$ such that $|s-t|<2a_t$ implies $|\gamma(s)-\gamma(t)|<\varepsilon/2$. Compactness gives a finite subcover of the intervals $|s-t|<a_t$; the minimum of its $a_t$ is positive. If two parameters are closer than this minimum, place the first in a covering interval and apply the two continuity bounds to obtain image distance $<\varepsilon$.

## Proof

**Proof technique:** direct.

1.1 Setup. By [F1] fix a John curve $\gamma$ from $x$ to $x_0$; the John inequality at $t=1$ gives $|x-x_0|\le4c_Jr_0$. If $x\in B(x_0,2r_0)$ we use the explicit geometric chain below; if $x\notin B(x_0,2r_0)$ we use the recursive construction below along the John curve. In both cases all constants below depend only on $n$ and $c_J$, and we collect them at the end into a single $M$. Also $x\notin B(x_0,2r_0)$ implies $|x-x_0|\ge2r_0>r_0$, so $x\notin B_0$ in that case. [F1, given, algebra]

1.2 The near case $x\in B(x_0,2r_0)$. Put $d:=|x-x_0|\le2r_0$. If $d>0$ put $x_i:=x+2^{-i}(x_0-x)$ and $r_i:=2^{-i-1}d$ for $i\ge0$; if $d=0$ fix the first standard basis vector $e_1$ and put $x_i:=x_0+2^{-i}(r_0/2)e_1$, $r_i:=2^{-i-2}r_0$. In both cases $r_{i+1}=r_i/2$, $|x_i-x|=2r_i$, $|x_i-x_{i+1}|=r_i$, $r_i\le r_0$ and $|x_i-x_0|\le2r_0$, so $\operatorname{dist}(x_i,\partial\Omega)\ge4r_0-|x_i-x_0|\ge2r_0>r_i$ and $B_i=B(x_i,r_i)\subseteq\Omega$. Consecutive balls: $B_i\cup B_{i+1}\subseteq B(x_i,\tfrac32r_i)$, because a point of $B_{i+1}$ is within $|x_i-x_{i+1}|+r_{i+1}=r_i+r_i/2$ of $x_i$, while the ball of radius $r_i/4$ centred at the point of the segment from $x_i$ to $x_{i+1}$ at distance $3r_i/4$ from $x_i$ lies in $B_i\cap B_{i+1}$ (its centre is at distance $3r_i/4<r_i$ from $x_i$ and at distance $r_i/4<r_{i+1}=r_i/2$ from $x_{i+1}$); hence $|B_i\cup B_{i+1}|\le6^n|B_i\cap B_{i+1}|$ by [F2] and [F3]. Also $\operatorname{dist}(x,B_i)\le|x-x_i|=2r_i$, and $r_i\to0$, $x_i\to x$. Finally, if $y\in B_i$ then $r_i\le|x-y|\le3r_i$; the radii halve at each step, so the interval $[|x-y|/3,|x-y|]$ of ratio $3$ contains at most two of the numbers $r_i$, and $y$ therefore belongs to at most two of the balls $B_i$. Hence (1), (2) and (3) hold in the near case, with ratio $6^n$ and multiplicity $2$. [F2, F3, given, algebra]

1.3 The far case: the recursive construction and comparability. Assume now $x\notin B(x_0,2r_0)$, so $x\notin B_0$ and $|x-x_0|\ge2r_0$. We construct $B_i=B(x_i,r_i)$ recursively, starting with $x_0$, $B_0=B(x_0,r_0)$. Suppose $B_i$ with centre $x_i=\gamma(t_i)$ has been constructed, $B_i\subseteq\Omega$, and $x\notin B_i$. Put $T_i:=\{t\in[0,t_i]:\gamma(t)\in B_i\}$, a nonempty set containing a relative neighbourhood of $t_i$ in $[0,t_i]$, and define $t_{i+1}:=\inf T_i$, $x_{i+1}:=\gamma(t_{i+1})$, $r_{i+1}:=\frac1{4c_J}|x-x_{i+1}|$ and $B_{i+1}:=B(x_{i+1},r_{i+1})$. Then $t_{i+1}<t_i$. For every $t<t_{i+1}$ one has $\gamma(t)\notin B_i$, while points of $T_i$ arbitrarily close to $t_{i+1}$ lie in $B_i$; by continuity $x_{i+1}\in\partial B_i$, so $|x_i-x_{i+1}|=r_i$, and $x_{i+1}\ne x$. The John inequality [F1] at $x_{i+1}$ gives $\operatorname{dist}(x_{i+1},\partial\Omega)\ge c_J^{-1}|x-x_{i+1}|=4r_{i+1}>r_{i+1}$, so $B_{i+1}\subseteq\Omega$; and $x\notin B_{i+1}$ because $|x-x_{i+1}|=4c_Jr_{i+1}>r_{i+1}$ as $c_J\ge1$. For the first transition, $|x_0-x_1|=r_0$ and $|x-x_0|\ge2r_0$, so $|x-x_1|\ge|x-x_0|-r_0\ge r_0$; also [F1] gives $|x-x_0|\le4c_Jr_0$, hence $|x-x_1|\le(4c_J+1)r_0$. Since $r_1=|x-x_1|/(4c_J)$, this yields $r_0/(4c_J)\le r_1\le(1+1/(4c_J))r_0$. For every $i\ge1$, the defining identity $|x-x_i|=4c_Jr_i$ and $|x_i-x_{i+1}|=r_i$ give $(1-1/(4c_J))r_i\le r_{i+1}\le(1+1/(4c_J))r_i$. Thus consecutive radii are comparable with ratio at most $5/4$ from the second transition onward, and $|x_i-x_{i+1}|=r_i$ is comparable to both radii for $i\ge1$. [F1, given, algebra]

2.1 The far case: limit properties. The times $t_i$ are strictly decreasing in $[0,1]$, so the intervals $[t_{i+1},t_i]$ are pairwise disjoint and $\sum_i(t_i-t_{i+1})\le1$. If $r_i\ge\varepsilon>0$ for an index $i$, then $|x_i-x_{i+1}|=r_i\ge\varepsilon$, and uniform continuity [F4] of $\gamma$ on $[0,1]$ gives $t_i-t_{i+1}\ge\delta(\varepsilon)>0$; since the intervals are disjoint, only finitely many indices satisfy $r_i\ge\varepsilon$. Hence $r_i\to0$; and since $|x-x_i|=4c_Jr_i$ for every $i\ge1$, also $x_i\to x$. Consequently $\operatorname{dist}(x,B_i)\le|x-x_i|=4c_Jr_i$ for $i\ge1$, while for $i=0$ we have $\operatorname{dist}(x,B_0)\le|x-x_0|-r_0\le4c_Jr_0$. This gives (2) in the far case. [F1, F4, step 1.3, given, algebra]

3.1 The far case: multiplicity. Suppose $y$ belongs to $B_{i_1}\cap\dots\cap B_{i_k}$ with $i_1<\dots<i_k$. Since $y\in B_{i_j}$ and $|x-x_{i_j}|=4c_Jr_{i_j}$ for $i_j\ge1$ (while for $i_j=0$ one has $|x-x_0|\le4c_Jr_0$ and $|x-y|\ge|x-x_0|-r_0\ge r_0$), the triangle inequality gives $c_1r_{i_j}\le|x-y|\le c_2r_{i_j}$ for constants $c_1,c_2$ depending only on $c_J$: the upper bound is $|x-y|\le(4c_J+1)r_{i_j}$, and the lower bound is $|x-y|\ge(4c_J-1)r_{i_j}$ for $i_j\ge1$, while for $i_j=0$ one has $r_0\le|x-y|\le(4c_J+1)r_0$, so $r_0\ge|x-y|/(4c_J+1)$ and $|x-y|\ge r_0/(4c_J+1)\cdot 1$, which is the same shape with adjusted constants. Hence all the radii $r_{i_j}$ are comparable to $|x-y|$. For $j<m$ one has $x_{i_m}\notin B_{i_j}$, because $t_{i_m}\le t_{i_j+1}$ and $\gamma(t)\notin B_{i_j}$ for every $t<t_{i_j+1}$ by step 1.3; hence $|x_{i_j}-x_{i_m}|\ge r_{i_j}$, while $|x_{i_j}-x_{i_m}|\le|x_{i_j}-x|+|x-x_{i_m}|\le4c_J(r_{i_j}+r_{i_m})$. So the $k$ centres have pairwise distances between $c_1'|x-y|$ and $c_2'|x-y|$ with constants depending only on $c_J$. If $y=x$ this is impossible, because $|x-x_i|=4c_Jr_i>r_i$ for $i\ge1$ and $|x-x_0|\ge2r_0>r_0$ for $i=0$, so $x$ lies in no $B_i$. The balls $B(x_{i_j},c_1'|x-y|/3)$ are pairwise disjoint and all lie in $B(x_{i_1},(c_2'+c_1'/3)|x-y|)$, so by [F2] and [F3], $k(c_1'/3)^n\le(c_2'+c_1'/3)^n$, an explicit bound $N(n,c_J)$. [F2, F3, step 1.3, step 2.1, algebra]

4.1 Assembly. In the near case step 1.2 gives (1), (2) and (3) with constants depending only on $n$: ratio at most $6^n$, $\operatorname{dist}(x,B_i)\le2r_i$, $r_i\to0$, $x_i\to x$, and multiplicity $2$. In the far case, the first pair has a separate overlap bound: the ball from step 1.3 of radius $r_1/2\ge r_0/(8c_J)$, centred halfway from $x_1$ toward $x_0$ by $r_1/2$, lies in $B_0\cap B_1$, while $B_0\cup B_1\subseteq B(x_0,r_0+r_1)$ and $r_1\le(1+1/(4c_J))r_0$, so $|B_0\cup B_1|\le(16c_J+2)^n|B_0\cap B_1|$. For $i\ge1$, step 1.3 gives $r_{i+1}\ge(3/4)r_i$ and centre separation $r_i$; the midpoint ball of radius $r_i/4$ lies in $B_i\cap B_{i+1}$, while the union is contained in $B(x_i,3r_i)$, giving ratio at most $12^n$. Step 2.1 gives $\operatorname{dist}(x,B_i)\le4c_Jr_i$, $r_i\to0$ and $x_i\to x$; and step 3.1 gives multiplicity at most $N(n,c_J)$. Taking $M\ge\max(6^n,(16c_J+2)^n,12^n,4c_J,N(n,c_J),2,1)$ completes the proof. A John curve was selected once, for the given $x$, in step 1.1. [step 1.2, step 1.3, step 2.1, step 3.1, given, algebra] ∎

## Source notes

The construction and properties are Kinnunen's, printed pp. 141-142: the radius $r_{i+1}=|x-x_{i+1}|/(4c_J)$ at the last exit point of the ball, the comparability of consecutive radii and centre distances, the packing bound on centres with pairwise comparable distances, and the terminal convergence $r_i\to0$, $x_i\to x$. Kinnunen leaves the case $x\in B(x_0,2r_0)$ as an exercise; the explicit overlapping geometric chain of step 1.2 supplies it. The roles of the constants are kept separate: the John inequality is used only to put every ball inside $\Omega$ and to bound $|x-x_0|$, the packing bound uses only the comparability of the radii to $|x-y|$, and no monotonicity of the radii is claimed.
