---
id: lem-author-ee25311adb41-analytic-ball-trapping
kind: lemma
title: Trapping a gradient tail near a critical cluster point
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-ee25311adb41-analytic-metric-transfer
  - lem-author-ee25311adb41-compact-critical-cluster
  - lem-author-ee25311adb41-gradient-tail-length
  - math:def-riemannian-distance-on-a-connected-manifold
  - math:thm-the-riemannian-distance-topology-is-the-manifold-topology
  - math:def-riemannian-speed-and-length
  - math:def-metric-ball
  - math:thm-riemannian-distance-is-a-metric
  - math:def-real-power
  - math:def-natural-logarithm
  - math:thm-real-power-laws
  - math:cor-exponential-reciprocal-and-positivity
  - math:thm-real-power-continuity-and-derivatives
  - math:lem-mean-value-theorem-on-closed-interval
  - math:thm-infimum-property
dependency_roles:
  lem-author-ee25311adb41-analytic-metric-transfer: mathematical-premise
  lem-author-ee25311adb41-compact-critical-cluster: mathematical-premise
  lem-author-ee25311adb41-gradient-tail-length: mathematical-premise
  math:def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  math:thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  math:def-riemannian-speed-and-length: mathematical-premise
  math:def-metric-ball: mathematical-premise
  math:thm-riemannian-distance-is-a-metric: mathematical-premise
  math:def-real-power: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-real-power-laws: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:thm-real-power-continuity-and-derivatives: mathematical-premise
  math:lem-mean-value-theorem-on-closed-interval: mathematical-premise
  math:thm-infimum-property: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement

Assume the manifold, trajectory, limit $L$ and critical cluster point $p$ of [[lem-author-ee25311adb41-compact-critical-cluster]]. Let $W$ be the neighborhood supplied by [[lem-author-ee25311adb41-analytic-metric-transfer]] at $p$, with constants $c>0$, $0<\rho<1$, and write $e(t)=U(q(t))-L$. Then some $a\ge0$ and $r>0$ satisfy $q([a,\infty))\subset B_{d_g}(p,r)\subset W$ and $\int_a^b\|q'\|_gdt\le e(a)^{1-\rho}/[c(1-\rho)]$ for every $b\ge a$.

## Facts & Assumptions

[F1] The critical cluster point has $U(p)=L$ and is approached along times tending to infinity while $e\to0$. The local analytic inequality applies on a neighborhood $W$. The distance topology is the manifold topology, and $d_g(x,y)$ is bounded by the length of every curve from $x$ to $y$. The local length estimate applies on any interval remaining in $W$.

[F2] The distance $d_g$ is a finite metric on the connected manifold by [[math:thm-riemannian-distance-is-a-metric]]. In the metric space $(M,d_g)$, for $r>0$ write $B_{d_g}(p,r)=\{x\in M:d_g(p,x)<r\}$ and $\overline B(p,r)=\{x\in M:d_g(p,x)\le r\}$ for the open and closed metric balls, respectively, as in [[math:def-metric-ball]].

[F3] For $x>0$, $x^\alpha=\exp(\alpha\log x)$, and $0^\alpha=0$ for $\alpha>0$ ([[math:def-real-power]]). For $x>0$, $\exp(\log x)=x$ by [[math:def-natural-logarithm]]. Positive-base powers satisfy $(x^u)^v=x^{uv}$ ([[math:thm-real-power-laws]]) and are positive by [[math:cor-exponential-reciprocal-and-positivity]]. The power function is continuous and differentiable on $(0,\infty)$, with derivative $\alpha x^{\alpha-1}$ ([[math:thm-real-power-continuity-and-derivatives]]). The mean value theorem applies on each closed interval $[u,v]\subset(0,\infty)$ ([[math:lem-mean-value-theorem-on-closed-interval]]).

[F4] Every nonempty subset of $\mathbb R$ bounded below has a greatest lower bound ([[math:thm-infimum-property]]).

[F9] Exact suppliers: [[lem-author-ee25311adb41-analytic-metric-transfer]], [[lem-author-ee25311adb41-compact-critical-cluster]], [[lem-author-ee25311adb41-gradient-tail-length]], [[math:def-riemannian-distance-on-a-connected-manifold]], [[math:thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[math:def-riemannian-speed-and-length]], [[math:def-metric-ball]].

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusion.

1.1 Put $\alpha=1-\rho>0$. For $x>0$ the derivative $\alpha x^{\alpha-1}$ is positive, so the mean value theorem makes $x\mapsto x^\alpha$ strictly increasing on $(0,\infty)$. Given $\varepsilon>0$, put $\delta=\varepsilon^{1/\alpha}>0$. The iterated-power law, the power definition and the logarithm inverse identity give $\delta^\alpha=\varepsilon^{(1/\alpha)\alpha}=\varepsilon^1=\exp(\log\varepsilon)=\varepsilon$. Hence $0\le x<\delta$ implies $0\le x^\alpha<\varepsilon$, including $x=0$ by the zero-base convention. Thus $x^\alpha\to0$ as $x\downarrow0$. [given, F3, algebra]

2.1 Choose a metric ball about $p$ inside $W$ and halve its radius to obtain $r>0$ with $\overline B(p,r)\subset W$. Along the cluster times $t_j\to\infty$, the distance-topology theorem gives $d_g(q(t_j),p)\to0$, and $e(t_j)\to0$ with $e(t_j)\ge0$. Step 1.1 gives $e(t_j)^\alpha\to0$. Since $c\alpha>0$, choose $a=t_j$ so late that $d_g(q(a),p)<r/2$ and $e(a)^\alpha<c\alpha r/2$. Then $d_g(q(a),p)+e(a)^\alpha/(c\alpha)<r$. [given, F1, F2, F9, step 1.1, choose, algebra]

3.1 Set $f(t)=d_g(q(t),p)$. The metric triangle inequality gives $|f(t)-f(s)|\le d_g(q(t),q(s))$; continuity of the trajectory and the distance-topology theorem therefore make $f$ continuous. Suppose there is $T>a$ with $f(T)\ge r$, and put $S=\{t\in[a,T]:f(t)\ge r\}$. This is nonempty and bounded below, so let $b=\inf S$. Continuity and $f(a)<r$ give an initial interval after $a$ disjoint from $S$, so $a<b\le T$. For every $\eta>0$ some $s\in S$ satisfies $b\le s<b+\eta$, since otherwise $b+\eta$ would be a larger lower bound. If $f(b)<r$, continuity excludes $S$ in a neighborhood of $b$, contradicting this property. Thus $f(b)\ge r$. If $f(b)>r$, continuity gives an $s\in[a,b)$ with $f(s)>r$, contradicting that $b$ is a lower bound of $S$. Consequently $f(b)=r$, while $f(t)<r$ for $a\le t<b$. In particular $q([a,b])\subset\overline B(p,r)\subset W$. [F1, F2, F4, F9, step 2.1, algebra]

4.1 Apply the local length estimate on $[a,b]$. Since $e(b)^\alpha\ge0$, the distance definition and triangle inequality give $r=d_g(q(b),p)\le d_g(q(a),p)+\int_a^b\|q'\|_gdt\le d_g(q(a),p)+e(a)^\alpha/(c\alpha)<r$, a contradiction. There is therefore no such $T$, and $q([a,\infty))\subset B_{d_g}(p,r)\subset W$. For every $b>a$ apply the same local length estimate on $[a,b]$ and discard the nonnegative $e(b)^\alpha$ term; for $b=a$ the integral is zero. This proves the stated bound for every $b\ge a$. [F1, F2, F3, F9, step 2.1, step 3.1, algebra] ∎
