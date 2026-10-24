---
id: thm-brownian-paths-are-nowhere-differentiable
kind: theorem
title: "Brownian paths are nowhere differentiable"
status: published
origin: pipeline
deps: [def-brownian-motion, def-derivative, def-one-sided-derivatives-of-real-functions, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, cor-first-borel-cantelli-lemma-for-events, lem-rat-embeds-dense, def-axiom-of-choice, lem-probability-measure-basic-identities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Theorem 6.41"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely,
the path $t\mapsto B_t(\omega)$ has no finite two-sided derivative at any
$t>0$, and no finite right derivative $B'_+(0)$ at $t=0$. The assertion is uniform over
the possible times: it is not the statement that the path fails to be
differentiable at any single prescribed time.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and an integer $C\ge1$ together with rationals $0\le a<b$.

[F1] The increments of $B$ over disjoint time intervals are independent with laws $N(0,h)$ for interval length $h$, and one probability-one event carries all continuous paths. [[def-brownian-motion]]

[F2] If a real function $f$ has a finite two-sided derivative $f'(s)$ at an interior point $s$, or a finite right derivative $f'_+(s)$ at a left endpoint, or a finite left derivative $f'_-(s)$ at a right endpoint, then with $\varepsilon=1$ in [[def-derivative]] and [[def-one-sided-derivatives-of-real-functions]] there is $\delta>0$ such that $|f(t)-f(s)-L(t-s)|\le|t-s|$ for the relevant $t$ with $0<|t-s|<\delta$, where $L$ is the corresponding derivative; in particular $|f(t)-f(s)|\le(|L|+1)|t-s|$ there.

[F3] $Z\sim N(0,1)$ has the strictly positive density $\varphi(x)=e^{-x^2/2}/\sqrt{2\pi}$; consequently $P(|Z|\le y)\le y$ for every $0<y\le1$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F4] If events $G_n$ satisfy $\sum_nP(G_n)<\infty$, then almost surely only finitely many $G_n$ occur, that is, $P(\limsup_nG_n)=0$. [[cor-first-borel-cantelli-lemma-for-events]]

[F5] The rationals are dense in $\mathbb R$: every point of $[0,\infty)$ lies in a nondegenerate interval with rational endpoints. [[lem-rat-embeds-dense]]

[F6] AC is the ambient assumption of the Brownian and normal-law interfaces. [[def-axiom-of-choice]]

[F7] Countable unions of measurable null events are null. [[lem-probability-measure-basic-identities]]

## Proof

**Proof technique:** direct.

1.1 Suppose the continuous path $f:=B(\omega)$ has a finite two-sided derivative at some $s\in(a,b)$, or a finite right derivative at $s=a$, or a finite left derivative at $s=b$, with absolute value at most $C$; use both sides for an interior point, the right side at a and the left side at b, applying [F2] to obtain $\delta>0$ such that $|f(t)-f(s)|\le(C+1)|t-s|$ for every $t\in[a,b]$ on the permitted side or sides of $s$ with $0<|t-s|<\delta$. [given, F2]

2.1 Fix $n\ge6$ with $(b-a)/n<\delta/6$, write $h:=(b-a)/n$ and $t_k:=a+kh$, and put $k_0:=\max\{k\in\{0,\dots,n-1\}:t_k\le s\}$. Then $t_{k_0}\le s\le t_{k_0+1}$, including $k_0=n-1$ when $s=b$. If $k_0+5\le n$ take the block of five increments beginning at $t_{k_0}$, and otherwise take the block of five increments ending at $t_n$. In either case all endpoints lie in $[a,b]$, on the side of $s$ allowed in step 1.1 for the endpoint cases, and within distance $6h<\delta$ of $s$, so each increment has absolute value at most $2(C+1)\cdot6h=12(C+1)h=:D/n$ with $D:=12(C+1)(b-a)$. [step 1.1, given]

3.1 For n=0,1,2,3,4,5 set G_n to be the empty event, without defining h or a mesh for those indices. For integers n>=6 define $G_n$ to be the event that some block of five consecutive increments $B_{t_{k+i}}-B_{t_{k+i-1}}$ ($k=0,\dots,n-5$, $i=1,\dots,5$) has all five absolute values at most $D/n$, where $h=(b-a)/n$. Every G_n is a finite union of finite intersections of measurable coordinate events. Insert 0 before a if a>0 and use the subfamily of grid increments in [a,b]; the increments of one block are independent with laws $N(0,h)$ by [F1], so by [F3] and independence the probability for a fixed block is at most $y_n^5$, where $y_n:=D/\sqrt{(b-a)n}=12(C+1)\sqrt{(b-a)/n}\le1$ for large $n$. Hence $P(G_n)\le n\,y_n^5=12^5(C+1)^5(b-a)^{5/2}n^{-3/2}$, and $\sum_nP(G_n)<\infty$: the finitely many remaining initial terms are at most one each, and $\sum_{n=2^j}^{2^{j+1}-1}n^{-3/2}\le2^{-j/2}$ bounds the tail by a geometric series. [given, F1, F3, step 2.1]

4.1 By [F4] and step 3.1, almost surely $G_n$ fails for all sufficiently large $n$; by step 2.1 this means that almost surely the path has no finite derivative with absolute value at most $C$ at any point of $[a,b]$ (two-sided on $(a,b)$, right at $a$, left at $b$). [step 2.1, step 3.1, F4]

5.1 Intersect the common continuity event from [F1] with the complements of all the measurable limsup events of [F4]. Taking the union of those null events over the countably many rational pairs $0\le a<b$ and over integers $C\ge1$, and using [F5] to place every $s>0$ in the interior of such an interval (while $s=0$ is the left endpoint of one), we obtain: almost surely no time $s\ge0$ has a finite two-sided derivative (for $s>0$) or finite right derivative (for $s=0$). [step 4.1, F1, F4, F5, F7]

6.1 The boundary cases are covered by the block choices of step 2.1: $s=0$ uses the right-handed block beginning at $a$, $s=b$ the left-handed block ending at $b$, and interior times either the forward or the backward block, all of which stay inside $[a,b]$; the cases n<6 are defined to be empty events in step 3.1, so the sequence is indexed by all natural numbers and no division by zero is performed; rounding the derivative bound up to an integer $C$ loses nothing, and the finite-difference ratio of [F2] is the definition-level form of [[def-derivative]]; AC is inherited through [F6] from the Brownian and normal-law interfaces. [step 2.1, step 4.1, F2, F6, given] ∎

## Source notes

This is the Dvoretsky-Erdős-Kakutani mesh argument as in Durrett, Theorem 7.1.6 and its proof: differentiability at a single time forces five consecutive increments of every sufficiently fine uniform mesh to be small. The calculation above bounds the union over the $O(n)$ possible blocks by the summable quantity $12^5(C+1)^5(b-a)^{5/2}n^{-3/2}$. A fixed-time argument would only produce an uncountable intersection of null events; the mesh argument converts this into one countable Borel-Cantelli statement.
