---
id: thm-euclidean-inverse-function-theorem
kind: theorem
title: "The Euclidean inverse function theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-one-map-and-local-inverse, def-invertible-euclidean-linear-map, lem-newton-contraction-near-an-invertible-derivative, thm-banach-fixed-point, thm-complete-subspace-iff-closed, thm-euclidean-space-complete, def-metric-topology, def-total-derivative-in-euclidean-space, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, thm-metric-continuity-characterisations, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: [inverse-function-theorem-euclidean]
landmark: true
proof_strategy: contraction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $f:U\to\mathbb R^n$ be
$C^1$, and let $a\in U$.  If $Df(a)$ is invertible, then there are open sets
$V,W\subseteq\mathbb R^n$ with $a\in V\subseteq U$ and $f(a)\in W$ such that
$f|_V:V\to W$ is bijective.  Its inverse $g:W\to V$ is $C^1$, and

$$Dg(y)=Df(g(y))^{-1}\qquad(y\in W).$$

Thus $f$ is a local diffeomorphism at $a$.

## Facts & Assumptions

**Given:** The dimensions, $C^1$ map, point, and invertible derivative in the statement.

[L1] The local Newton lemma supplies a closed ball, a uniform contraction constant, a bound for $Df(a)^{-1}$, and invertibility of every nearby derivative with the uniform bound $\lVert Df(x)^{-1}v\rVert_2\le C(1-q)^{-1}\lVert v\rVert_2$ ([[lem-newton-contraction-near-an-invertible-derivative]]).

[L2] A closed subspace of a complete metric space is complete; Euclidean space is complete ([[thm-complete-subspace-iff-closed]], [[thm-euclidean-space-complete]]).

[L3] A self-contraction of a nonempty complete metric space has a unique fixed point ([[thm-banach-fixed-point]]).

[L4] Total differentiability gives continuity, continuous maps pull open sets back to open sets, and total derivatives satisfy the chain rule ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]], [[thm-metric-continuity-characterisations]], [[thm-chain-rule-for-total-derivatives]]).

[L5] Total differentiability means a linear approximation with an $o(\|h\|_2)$ remainder ([[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** contraction.

1.1 Take $R,q,C$ from [L1], and write $A:=Df(a)$, $B:=A^{-1}$.  Shrink $R$ if needed without changing the estimates.  Choose $\varepsilon>0$ so that $C\varepsilon<(1-q)R$, and put $W:=B(f(a),\varepsilon)$.  For $y\in W$ and $x\in\overline B(a,R)$, $$\|T_y(x)-a\|_2\le q\|x-a\|_2+\|B(y-f(a))\|_2<R.$$ Thus $T_y$ maps the closed ball into itself.  [L1, algebra]

2.1 The closed ball is nonempty and complete by [L2].  Hence [L3] gives a unique fixed point $g(y)$ of $T_y$.  The fixed-point equation is exactly $f(g(y))=y$, and the strict inequality in step 1.1 puts $g(y)$ in the open ball.  [step 1.1, L2, L3]

3.1 If $f(x)=f(z)$ for two points of the closed ball, then both are fixed by $T_{f(x)}$; the contraction estimate forces $x=z$.  Define $$V:=B(a,R)\cap f^{-1}[W].$$ It is open by [L4], contains $a$, and steps 2.1 and 3.1 show that $f|_V:V\to W$ is bijective with inverse $g$.  [step 2.1, L1, L4]

3.2 For $y,z\in W$, compare the fixed-point equations to obtain $$\|g(y)-g(z)\|_2\le q\|g(y)-g(z)\|_2+C\|y-z\|_2.$$ Thus $g$ is Lipschitz, hence continuous.  [L1, step 2.1, algebra]

4.1 Fix $y\in W$, put $x:=g(y)$ and $L:=Df(x)$.  For small $h$, write $g(y+h)=x+k$.  Step 3.2 gives $\|k\|_2=O(\|h\|_2)$, while differentiability of $f$ gives $h=Lk+r(k)$ with $\|r(k)\|_2=o(\|k\|_2)$.  Since [L1] makes $L$ invertible with locally uniform inverse bound, $$k=L^{-1}h-L^{-1}r(k)=L^{-1}h+o(\|h\|_2).$$ Therefore $Dg(y)=Df(g(y))^{-1}$.  [step 3.2, L1, L5, algebra]

5.1 The entries of $Df(g(y))$ are continuous.  The identity $P^{-1}-Q^{-1}=P^{-1}(Q-P)Q^{-1}$, together with the uniform inverse bound in [L1], shows that the entries of $Dg$ are continuous.  Hence $g$ is $C^1$. [step 3.2, step 4.1, L1, algebra]

6.1 Steps 3.1--5.1 give the required local $C^1$ inverse and derivative formula, so the final local-diffeomorphism clause is exactly [[def-c-one-map-and-local-inverse]].  [step 3.1, step 3.2, step 4.1, step 5.1] ∎
