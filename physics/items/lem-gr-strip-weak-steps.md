---
id: lem-gr-strip-weak-steps
kind: lemma
title: "Strip functions: every inner strip carries a smooth function with past timelike gradient, constant below and above the outer levels"
status: draft
origin: session
domain: mathematics
dependency_level: 28
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [def-dependent-choice, lem-gr-locally-finite-shell-sum, thm-gr-volume-time-function, def-gr-causal-conditions-and-global-hyperbolicity, thm-weierstrass-m-test-for-function-series, thm-uniform-derivative-limit-on-a-closed-interval, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains, def-compact-space, thm-compactness-agrees-with-metric-compactness, thm-extreme-value-metric, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-chain-rule-for-total-derivatives, def-continuity-real, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-gr-inverse-metric-and-musical-isomorphisms, def-countable-choice]
dependency_roles:
  def-dependent-choice: mathematical-premise
  lem-gr-locally-finite-shell-sum: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  thm-weierstrass-m-test-for-function-series: mathematical-premise
  thm-uniform-derivative-limit-on-a-closed-interval: mathematical-premise
  thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function: mathematical-premise
  prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains: mathematical-premise
  def-compact-space: mathematical-premise
  thm-compactness-agrees-with-metric-compactness: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-continuity-real: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "A. N. Bernal and M. Sanchez, Smoothness of time functions and the metric splitting of globally hyperbolic spacetimes (arXiv:gr-qc/0401112), Corollary 3.9, Lemma 3.10 and Theorem 3.11, printed pp. 6-7: finite averaging and derivative-controlled series."
      url: "https://arxiv.org/pdf/gr-qc/0401112"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]) for the actual volume-time and causal suppliers. Let $(M,g,N)$ be a globally hyperbolic
time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)), let $t$
be the volume time function of [[thm-gr-volume-time-function]], and let
$a<a'<c'<c$ be real numbers. Then there is a smooth function
$v:M\to[-1,1]$ such that

**(a)** $v=-1$ on $\{t\le a\}$ and $v=+1$ on $\{t\ge c\}$;

**(b)** $\nabla v$ is past causal or zero at every point of $M$;

**(c)** $\nabla v$ is past timelike at every point of the inner strip
$\{a'\le t\le c'\}$.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; A globally hyperbolic $(M,g,N)$ with volume time $t$ and real numbers $a<a'<c'<c$.

[L1] Weak steps: for all reals $a<b<c$ there is a smooth $\tau:M\to[-1,1]$ with $\tau=-1$ on $\{t\le a\}$, $\tau=+1$ on $\{t\ge c\}$, $\nabla\tau$ past causal or zero everywhere, and $\nabla\tau$ past timelike at every point of $S_b$, hence on an open neighborhood $U$ of $S_b$ ([[lem-gr-locally-finite-shell-sum]]).

[L2] Cone algebra: the past causal vectors together with $0$ form a closed convex cone; a sum of past-causal vectors is past causal, and the sum of one past-timelike vector with any past-causal vector is past timelike. The cone is the closure of the open past timelike cone, so a limit of past-causal vectors is only guaranteed to be past causal or zero ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] Exhaustions and boxes: there is a smooth proper $f:M\to[0,\infty)$ ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]); the sets $L_j:=f^{-1}([0,j])$ are compact with $L_j\subseteq\operatorname{Int}L_{j+1}$ and $\bigcup_jL_j=M$. There is a countable family $(B_i,x_i)_{i\ge1}$ of relatively compact coordinate balls whose interiors cover $M$ ([[prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]]). Compactness of a subset agrees for the manifold topology and any metric inducing it, and a continuous real function on a nonempty compact metric space attains its maximum ([[thm-compactness-agrees-with-metric-compactness]], [[thm-extreme-value-metric]], [[def-compact-space]]).

[L4] Series calculus: if a series of functions converges uniformly on a set and its termwise derivatives converge uniformly, then on each coordinate line segment the partial sums satisfy the hypotheses of the uniform-derivative limit theorem, so the limit is differentiable with the derivative of the limit given by the differentiated series; iterating this coordinate-line argument through all orders gives a smooth limit whose coordinate derivatives are the termwise differentiated series ([[thm-weierstrass-m-test-for-function-series]], [[thm-uniform-derivative-limit-on-a-closed-interval]], [[thm-chain-rule-for-total-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L5] A smooth function is bounded with all its coordinate derivatives through any finite order on the compact closure of a coordinate ball, by continuity and [L3] ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]]).

## Proof

**Proof technique:** constructive.

1.1 (Finite lists of weak steps for each compact slice.) For $j\ge1$ put $K_j:=L_j\cap\{a'\le t\le c'\}$, compact by [L3]. Consider all tuples $(b,\tau,U)$ with $b\in[a',c']$, $\tau$ a weak step supplied by [L1] with outer bounds $a,c$, and $U$ its open past-timelike-gradient locus containing $S_b$. Their open sets cover $K_j$, since at $x\in K_j$ a tuple exists with $b=t(x)$. Compactness supplies a finite tuple list covering $K_j$. For empty $K_j$, a single tuple at $b=(a'+c')/2$ is available, so every list may be taken nonempty. Countable Choice selects one nonempty finite list for each $j$. Write its entries $(b_{j,i},\tau_{j,i},U_{j,i})$, $1\le i\le m_j$. No weak-step family indexed by all real levels is selected. [L1, L3, given, choose]

2.1 (The averaged slice functions.) Define $v_j:=\frac1{m_j}\sum_{i=1}^{m_j}\tau_{j,i}$. Then $v_j$ is smooth, $v_j=-1$ on $\{t\le a\}$ and $v_j=+1$ on $\{t\ge c\}$ because every summand has these properties, $|v_j|\le1$, and $\nabla v_j$ is past causal or zero everywhere as a finite average of past causal or zero vectors [L2]. On $K_j$ the gradient is past timelike: at $x\in K_j$ some $i$ satisfies $x\in U_{j,i}$, so $\nabla\tau_{j,i}(x)$ is past timelike and all other summands are past causal or zero, whence the finite sum $\nabla v_j(x)$ is past timelike by [L2]. [step 1.1, L1, L2, given]

3.1 (Derivative bounds.) For each $j\ge1$ the set $\overline{B_1}\cup\cdots\cup\overline{B_j}$ is compact and the finitely many functions $\partial^\alpha v_j$, $|\alpha|\le j$, are continuous, so by [L5] each of them has a finite maximum there; let $A_j\ge1$ be an integer bounding all these maxima. Since $|v_j|\le1\le A_j$ as well, every coordinate derivative of $v_j$ of order at most $j$ is bounded by $A_j$ on the closures of the first $j$ boxes. [step 2.1, L3, L5, choose]

4.1 (The series.) Put $c_j:=2^{-j}A_j^{-1}$ and $C:=\sum_{j\ge1}c_j$, a positive real number with $C\le1$, and define $v:=\frac1C\sum_{j\ge1}c_jv_j$. On the box $B_i$, for every multiindex $\alpha$ and every $j\ge\max(i,|\alpha|)$ the bound of step 3.1 gives $\sup_{B_i}|\partial^\alpha(c_jv_j)|\le2^{-j}$, so by the Weierstrass M-test the series $\sum_jc_jv_j$ and each of its termwise coordinate derivative series $\sum_jc_j\partial^\alpha v_j$ converge uniformly on $B_i$; since the boxes cover $M$, this holds on every compact set after finitely many boxes. Applying the coordinate-line argument of [L4] inductively in the order of differentiation, $v$ is smooth on $M$ and every coordinate derivative of $v$ is the corresponding termwise derivative of the series. [step 3.1, L3, L4, construct]

5.1 (Properties of the series.) On $\{t\le a\}$ all summands equal $-1$, so $v=-1$; on $\{t\ge c\}$ they equal $+1$, so $v=+1$; and $|v|\le1$ because $C=\sum_jc_j$ and $|v_j|\le1$. Termwise differentiation gives $\nabla v=\frac1C\sum_{j\ge1}c_j\nabla v_j$. Its partial sums lie in the closed past-causal cone by [L2], hence their limit is past causal or zero; this proves (b). Now fix $x$ in the inner strip and choose $j_0$ with $x\in L_{j_0}$. Then $x\in K_{j_0}$, so $c_{j_0}\nabla v_{j_0}(x)$ is past timelike by step 2.1. The series of all remaining terms converges by step 4.1; its partial sums are past causal or zero by [L2], so its limit is past causal or zero by closedness of that cone. The sum of the fixed past-timelike vector and this limiting past-causal vector is past timelike by [L2]. Thus $\nabla v(x)$ is past timelike, proving (c) without treating a limit of timelike vectors as timelike. [step 2.1, step 4.1, L2, given, discharge-construct] ∎

## Remarks

- **Why the average is needed.** A single weak step has a timelike gradient only near its own level, so a compact slice is covered by finitely many such neighborhoods and the average turns this cover into one function that is strictly timelike on the whole slice; the exhaustion then lets countably many slice functions be summed with rapidly decaying coefficients.
- **Why the gradient bounds are enough.** The coefficients $2^{-j}A_j^{-1}$ only have to absorb the bounds on the first $j$ boxes through order $j$, so each derivative series is dominated there by $\sum_j2^{-j}$; no uniformity in the point is needed beyond compactness of the boxes.
- **Use.** The strip functions are the building blocks of [[thm-gr-smooth-cauchy-temporal-splitting]]: applied to the strips $[j-2,j+2]$ with inner strip $[j-1,j+1]$, their paired sum is a global temporal function.
