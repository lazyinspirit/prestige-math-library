---
id: lem-newton-contraction-near-an-invertible-derivative
kind: lemma
title: "Newton maps are uniform contractions near a point with invertible derivative"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, lem-euclidean-linear-maps-have-matrices-and-are-bounded, thm-cauchy-schwarz-and-the-euclidean-norm, def-metric-topology, def-metric-ball, thm-algebra-of-total-derivatives, thm-chain-rule-for-total-derivatives, thm-mean-value-inequality-for-total-derivatives, thm-banach-fixed-point, thm-euclidean-space-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: contraction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §8.5 Inverse and implicit function theorems"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $f:U\to\mathbb R^n$ be
$C^1$, and let $a\in U$.  Suppose $A:=Df(a)$ is invertible and put
$B:=A^{-1}$.  Then there are $R>0$, $0\le q<1$, and $C>0$ such that
$\overline B(a,R)\subseteq U$, $\|Bv\|_2\le C\|v\|_2$, and, for every
$y\in\mathbb R^n$, the Newton map

$$T_y(x):=x+B(y-f(x))$$

satisfies

$$\|T_y(x)-T_y(z)\|_2\le q\|x-z\|_2\qquad(x,z\in\overline B(a,R)).$$

Moreover $Df(x)$ is invertible for every $x\in\overline B(a,R)$ and

$$\|Df(x)^{-1}v\|_2\le\frac C{1-q}\|v\|_2.$$

## Facts & Assumptions

**Given:** The dimensions, open set, $C^1$ map, point, and invertible derivative in the statement.

[L1] Euclidean linear maps have finite matrices and a global norm bound ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[L2] The entries of $Df$ are continuous by the definition of $C^1$ ([[def-c-one-map-and-local-inverse]]).

[L3] Total derivatives obey the linear algebra and chain rules, and a uniform
derivative bound on a convex open set gives the corresponding Lipschitz bound
([[thm-algebra-of-total-derivatives]], [[thm-chain-rule-for-total-derivatives]],
[[thm-mean-value-inequality-for-total-derivatives]]).

[L4] Every $\mathbb R^n$, $n\ge1$, is complete, so its contractions have unique fixed points ([[thm-euclidean-space-complete]], [[thm-banach-fixed-point]]).

[L5] Metric balls have their open and closed forms, and openness supplies a closed ball about $a$ contained in $U$ ([[def-metric-ball]], [[def-metric-topology]]).

[L6] The Euclidean norm satisfies the finite-dimensional Cauchy--Schwarz estimate ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L7] Invertibility means having a two-sided linear inverse ([[def-invertible-euclidean-linear-map]]).

## Proof

**Proof technique:** contraction.

1.1 By [L1], choose $C>0$ with $\|Bv\|_2\le C\|v\|_2$. Matrix-entry continuity [L2], [L6], and [L5] give $R>0$ such that $\overline B(a,R)\subset B(a,2R)\subseteq U$ and $\|B(Df(w)-A)v\|_2\le\tfrac12\|v\|_2$ for $w\in B(a,2R)$ and $v\in\mathbb R^n$. Fix $q:=1/2$. [L1, L2, L5, L6, algebra]

2.1 The chain rule gives $DT_y(w)=I-BDf(w)=B(A-Df(w))$, independently of $y$. The convex open ball $B(a,2R)$ contains the closed ball, so [L3] and step 1.1 yield $\|T_y(x)-T_y(z)\|_2\le q\|x-z\|_2$ for $x,z\in\overline B(a,R)$. [step 1.1, L3]

3.1 Fix $w$ in the ball, put $L:=Df(w)$, and fix $v\in\mathbb R^n$.  The map $S_v(u):=u+B(v-Lu)$ is a contraction of the complete space $\mathbb R^n$ with constant $q$, by the same estimate as step 2.1.  By [L4] it has a unique fixed point $u$, and the fixed-point equation is equivalent to $Lu=v$.  Thus $L$ is surjective.  If $Lu=0$, both $u$ and $0$ are fixed by $S_0$, so uniqueness gives $u=0$; hence $L$ is injective.  The solution map is linear by uniqueness, so it is $L^{-1}$.  [step 1.1, L4, L7]

4.1 From $Lu=v$ and step 1.1, $\|u\|_2\le\|u-BLu\|_2+\|Bv\|_2 \le q\|u\|_2+C\|v\|_2$. Therefore $\|L^{-1}v\|_2\le C(1-q)^{-1}\|v\|_2$.  [step 1.1, step 3.1, algebra]

5.1 Steps 1.1--4.1 give every asserted constant, contraction estimate, invertibility claim, and inverse bound.  [step 1.1, step 2.1, step 3.1, step 4.1] ∎
