---
id: thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators
kind: theorem
title: The method of continuity for a uniformly estimated affine family of bounded operators
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 0
deps: [def-banach-space, def-bounded-linear-operator, def-operator-norm, def-space-of-bounded-linear-operators, lem-neumann-series-and-small-perturbations-of-bounded-inverses, lem-composition-operator-norm-inequality, def-metric-convergence, def-countable-choice]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.9, the openness/closedness argument in the proof of Theorem 8.31 (Neumann series and the uniform Schauder bound), printed pp. 153-155 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the continuity step in the proof of Theorem 4, printed pp. 136-137 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§2.6, the continuity method proof of Theorem 2.19, printed pp. 65-68 (read in full)"
---

## Statement

Assume Countable Choice. Let $X,Y$ be Banach spaces over the same field, let $L_0,L_1\in\mathcal B(X,Y)$ and put $L_t:=(1-t)L_0+tL_1$ for $t\in[0,1]$. Assume (i) $L_0$ is bijective; (ii) there is $0\le C<\infty$ with the uniform a priori estimate $\|x\|_X\le C\|L_tx\|_Y$ for every $t\in[0,1]$ and every $x\in X$. Then $L_t$ is bijective for every $t\in[0,1]$, and $\|L_t^{-1}\|_{Y\to X}\le C$ for every $t$. No compactness or reflexivity hypothesis is used: the uniform estimate alone makes the bijectivity set closed, and the Neumann series makes it open.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, Banach spaces $X,Y$ over the same field, operators $L_0,L_1\in\mathcal B(X,Y)$, the affine family $L_t=(1-t)L_0+tL_1$, and the hypotheses (i) $L_0$ bijective, (ii) $0\le C<\infty$ and $\|x\|\le C\|L_tx\|$ for all $t\in[0,1]$, all $x\in X$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$, used through the sequential completeness conventions of the Banach spaces. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] A Banach space is a normed space whose norm metric is complete, so every Cauchy sequence converges; limits in a metric space are unique. ([[def-banach-space]], [[def-metric-convergence]])

[F2] $\mathcal B(X,Y)$ consists of the bounded linear maps $X\to Y$, with pointwise operations, and $\|Tx\|\le\|T\|\,\|x\|$; the operator norm is subadditive and homogeneous, so $\|(1-t)L_0+tL_1\|\le(1-t)\|L_0\|+t\|L_1\|$ for $t\in[0,1]$, and for $T\in\mathcal B(X,Y)$, $S\in\mathcal B(Y,Z)$ one has $\|ST\|\le\|S\|\,\|T\|$. ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]], [[def-bounded-linear-operator]], [[lem-composition-operator-norm-inequality]])

[F3] If $X$ is a Banach space and $R\in\mathcal B(X)$ with $\|R\|<1$, then $I+R$ is invertible with inverse $\sum_{n\ge0}(-R)^n$ and $\|(I+R)^{-1}\|\le(1-\|R\|)^{-1}$; if $A\in\mathcal B(X,Y)$ is invertible and $E\in\mathcal B(X,Y)$ satisfies $\|A^{-1}E\|<1$, then $A+E$ is invertible. ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]])

## Proof

**Proof technique:** direct.

1.1 Injectivity and uniform lower bound. Fix $t\in[0,1]$. If $L_tx=0$ then [ii] gives $\|x\|\le C\|L_tx\|=0$, so $x=0$: every $L_t$ is injective. Moreover [ii] says exactly that $\|L_t^{-1}y\|\le C\|y\|$ for every $y$ in the range $L_t(X)$, so whenever $L_t$ is surjective its inverse is bounded with norm at most $C$. [given, F2, algebra]

2.1 The bijectivity set is closed in $[0,1]$. Let $t_j\to t$ in $[0,1]$ with every $L_{t_j}$ bijective, let $f\in Y$ and put $u_j:=L_{t_j}^{-1}f$. Then $\|u_j\|\le C\|f\|$ by step 1.1, and for all $j,k$ the identity $L_{t_k}(u_j-u_k)=L_{t_k}u_j-f=(L_{t_k}-L_{t_j})u_j=(t_k-t_j)(L_1-L_0)u_j$ together with [ii] and [F2] gives $\|u_j-u_k\|\le C\|L_{t_k}(u_j-u_k)\|\le C^2|t_k-t_j|\,\|L_1-L_0\|\,\|f\|$, so $(u_j)$ is Cauchy in $X$; by [F1] it converges to some $u\in X$. Since $\|L_t-L_{t_j}\|\le|t-t_j|\,\|L_1-L_0\|$ by [F2] and the sequence $(\|u_j\|)$ is bounded by $C\|f\|$, $\|L_tu-f\|\le\|(L_t-L_{t_j})u\|+\|L_{t_j}(u-u_j)\|+\|L_{t_j}u_j-f\|\le|t-t_j|\,\|L_1-L_0\|\,\|u\|+\bigl((1-t_j)\|L_0\|+t_j\|L_1\|\bigr)\|u-u_j\|$, and both terms tend to $0$; hence $L_tu=f$. So $L_t$ is surjective, injective by step 1.1, and therefore bijective with $\|L_t^{-1}\|\le C$ by step 1.1. This shows that a limit of bijective parameters is bijective, that is, the bijectivity set $I:=\{t\in[0,1]:L_t\text{ bijective}\}$ is closed in $[0,1]$. [step 1.1, F1, F2, algebra]

2.2 The bijectivity set is open in $[0,1]$. Let $t\in I$. If $C=0$, the estimate implies $X=\{0\}$, and bijectivity of $L_0$ implies $Y=\{0\}$, so every $L_s$ is the unique bijection and $I=[0,1]$. Assume $C>0$. If $L_1=L_0$ then $L_s=L_t$ for every $s$ and the claim is trivial, so assume $\|L_1-L_0\|>0$ and let $s\in[0,1]$ satisfy $|s-t|<1/(C\|L_1-L_0\|)$. Write $L_s=L_t+(s-t)(L_1-L_0)=L_t\bigl(I+L_t^{-1}(s-t)(L_1-L_0)\bigr)$, where $L_t^{-1}\in\mathcal B(Y,X)$ has norm at most $C$ by step 1.1. Since $\|L_t^{-1}(s-t)(L_1-L_0)\|\le C|s-t|\,\|L_1-L_0\|<1$, the Neumann series [F3] makes $I+L_t^{-1}(s-t)(L_1-L_0)$ invertible on $X$ with inverse in $\mathcal B(X)$; composing with the bijection $L_t$ shows that $L_s$ is bijective, with inverse $\bigl(I+L_t^{-1}(s-t)(L_1-L_0)\bigr)^{-1}L_t^{-1}\in\mathcal B(Y,X)$ and norm at most $C\bigl(1-C|s-t|\|L_1-L_0\|\bigr)^{-1}$. Hence $I$ is open in $[0,1]$. [step 1.1, F2, F3, cases, algebra]

3.1 Conclusion. $I$ is nonempty because $0\in I$ by (i), and it is open and closed in $[0,1]$ by steps 2.1 and 2.2. Suppose $I\ne[0,1]$, and let $t:=\sup\{y\in[0,1]:[0,y]\subseteq I\}$, a set that contains $0$ and is nonempty. For $y<t$ one has $[0,y]\subseteq I$, and closedness of $I$ gives $t\in I$ (if $t=0$, use $0\in I$). If $t=1$ this already gives $I=[0,1]$, a contradiction; so $t<1$; openness of $I$ then gives $0<\delta\le1-t$ with $(t-\delta,t+\delta)\cap[0,1]\subseteq I$, so $[0,t+\delta/2]\subseteq I$, contradicting the definition of $t$. Hence $I=[0,1]$: every $L_t$ is bijective, and $\|L_t^{-1}\|\le C$ for every $t$ by step 1.1. No compactness, reflexivity or separability of $X$ or $Y$ was used anywhere; the only completeness used is that of $X$ in step 2.1 and the only choice principle is the sequential convention of [A1]. [step 1.1, step 2.1, step 2.2, A1, given] ∎

## Remarks

- If the uniform estimate [ii] holds only for $t$ in a subset $A\subseteq[0,1]$, the argument shows that the bijectivity set is relatively open and relatively closed in $A$; the interval $[0,1]$ is used only to run the endpoint propagation in step 3.1.
- The uniform lower bound controls the inverses and the Cauchy sequence in the closedness proof; both openness and closedness also use that $t\mapsto L_t$ is affine and hence Lipschitz with constant $\|L_1-L_0\|$.
