---
id: lem-author-10a0d5e0c110-psd-kernel-and-half-circle
title: "Critical PSD phases: kernel inequality and half-circle rigidity"
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-10a0d5e0c110-psd-tests-and-mass
  - prop-expander-prereq-ordered-angle-inequalities
  - def-expander-prereq-phasor-calculus
  - math:def-connected-graph-and-connected-component
  - math:thm-sine-and-cosine-addition-formulas
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:thm-sine-cosine-signs-monotonicity-and-ranges
  - math:thm-quarter-turn-values-and-shift-formulas
dependency_roles:
  lem-author-10a0d5e0c110-psd-tests-and-mass: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:thm-sine-and-cosine-addition-formulas: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement

Let $G$ have $n>0$ vertices and symmetric binary adjacency matrix $A$, with possible loops. Let $d>0$, $0\le a<1/32$ and $\|A-(d/n)J\|\le ad$, where $J$ is the all-ones matrix. Let $\theta$ be a critical point of $E=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$ with positive-semidefinite angular Hessian. Choose phase representatives in $(-\pi,\pi]$ after rotation so that $\rho=n^{-1}\sum_xe^{i\theta_x}$ is real and nonnegative. These are the hypotheses of the critical-PSD quadratic-test and mass lemma.

The off-diagonal graph has vertex set $V(G)$ and an edge $\{x,y\}$ precisely when $x\ne y$ and $A_{xy}=1$; connectedness means that every two vertices are joined by a finite path of such edges, with a path of length zero allowed. A configuration is synchronized when all phases are equal modulo $2\pi$. For $u,v\in(-\pi,\pi]$, put $K(u,v)=\sin(|u|-\min(|v|,\pi/2))$. Then $\sum_xA_{xy}K(\theta_x,\theta_y)\ge0$ for every $y$. If the off-diagonal graph is connected and every $|\theta_x|<\pi/2$, all representatives equal zero under the normalization $\rho\ge0$. Thus a normalized nonsynchronized critical PSD state on a connected off-diagonal graph has $|\{x:|\theta_x|\ge\pi/2\}|>0$.

## Statement references

[[lem-author-10a0d5e0c110-psd-tests-and-mass]]

[[def-expander-prereq-phasor-calculus]]

[[math:def-connected-graph-and-connected-component]]

## Facts & Assumptions

[F1] Under the stated graph, energy and phase hypotheses, the critical-PSD quadratic-test and mass lemma gives $r_y=\sum_xA_{xy}\cos(\theta_x-\theta_y)\ge0$ and $\sum_xA_{xy}e^{i\theta_x}=r_ye^{i\theta_y}$ ([[lem-author-10a0d5e0c110-psd-tests-and-mass]]). No local-minimum hypothesis is assumed.

[F2] Phases are angles modulo $2\pi$, and $e^{it}=\cos t+i\sin t$ for real $t$, with $\exp(0)=1$ ([[def-expander-prereq-phasor-calculus]]). In particular $\sin0=0$, $\cos0=1$, and real and imaginary parts commute with finite sums.

[F3] Sine and cosine satisfy their addition formulas and the parity identities $\sin(-t)=-\sin t$, $\cos(-t)=\cos t$ ([[math:thm-sine-and-cosine-addition-formulas]], [[math:cor-trigonometric-parity-and-pythagorean-identity]]).

[F4] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and strictly decreasing on $[\pi/2,3\pi/2]$; cosine is strictly decreasing on $[0,\pi]$ ([[math:thm-sine-cosine-signs-monotonicity-and-ranges]]). The quarter-turn values include $\sin(\pi/2)=1$, $\cos(\pi/2)=0$ and $\sin\pi=0$, and $\sin(t+\pi/2)=\cos t$ ([[math:thm-quarter-turn-values-and-shift-formulas]]). Sine is nonnegative on $[0,\pi]$ ([[prop-expander-prereq-ordered-angle-inequalities]]). Together with [F2] and [F3], these facts imply $\sin t>0$ for $0<t<\pi$, $\sin t<0$ for $-\pi/2<t<0$, and $\cos t\le0$ for $\pi/2\le|t|\le\pi$.

[F5] A nonempty simple graph is connected when every pair of vertices can be joined by a path; the one-vertex graph permits the path of length zero ([[math:def-connected-graph-and-connected-component]]). This definition applies to the off-diagonal graph specified in the Statement.

## Proof

**Given:** The graph, critical PSD configuration, representatives and normalization in the Statement.

**Goal:** Prove the kernel inequality and half-circle rigidity, and then its stated contrapositive.

1.1 Taking real and imaginary parts of the phasor identity in [F1], both directly and after multiplication by $e^{-i\theta_y}$, gives $\sum_xA_{xy}\cos\theta_x=r_y\cos\theta_y$ and $\sum_xA_{xy}\sin(\theta_x-\theta_y)=0$. For $|\theta_y|\le\pi/2$, put $b=|\theta_y|$. Parity gives $\cos|\theta_x|=\cos\theta_x$, and nonnegativity of sine on $[0,\pi]$ gives $\sin|\theta_x|\ge|\sin\theta_x|$. If $\theta_y\ge0$, the addition formulas yield $K(\theta_x,\theta_y)-\sin(\theta_x-\theta_y)=(\sin|\theta_x|-\sin\theta_x)\cos b\ge0$. If $\theta_y\le0$, they yield $K(\theta_x,\theta_y)+\sin(\theta_x-\theta_y)=(\sin|\theta_x|+\sin\theta_x)\cos b\ge0$. Here $\cos b\ge0$ by [F4]. Since $A_{xy}\ge0$, summing and using the zero sine sum proves the kernel inequality in this region. [F1, F2, F3, F4, algebra]

2.1 If $|\theta_y|\ge\pi/2$, the quarter-turn and parity identities give $K(\theta_x,\theta_y)=\sin(|\theta_x|-\pi/2)=-\cos\theta_x$. Therefore $\sum_xA_{xy}K(\theta_x,\theta_y)=-r_y\cos\theta_y\ge0$, since $r_y\ge0$ and $\cos\theta_y\le0$. This includes the boundary $|\theta_y|=\pi/2$ and completes the kernel inequality. [F1, F3, F4, step 1.1, algebra]

3.1 Suppose the off-diagonal graph is connected and every absolute phase is below $\pi/2$. The finite nonempty vertex set has a vertex with maximal absolute phase $c<\pi/2$. At any vertex $y$ attaining $c$, the kernel inequality reads $\sum_xA_{xy}\sin(|\theta_x|-c)\ge0$. Each argument lies in $[-c,0]$, so each term is nonpositive, and an off-diagonal neighbor of smaller absolute phase would contribute a strictly negative term. Consequently every neighbor also attains $c$. Along a path from $y$ to any vertex this property propagates one edge at a time; connectedness therefore gives $|\theta_x|=c$ for every vertex. Loops contribute zero and do not affect the argument. [F4, F5, step 1.1, step 2.1, algebra]

4.1 If $c>0$ and both classes $V_- =\{x:\theta_x=-c\}$ and $V_+=\{x:\theta_x=c\}$ are nonempty, a path between them has an edge crossing the classes. Hence $q=\sum_{y\in V_-,x\in V_+}A_{xy}>0$. Sum the zero sine identities of step 1.1 over $y\in V_-$: terms within $V_-$ vanish and every term from $V_+$ equals $A_{xy}\sin(2c)$, giving $0=q\sin(2c)$. This contradicts $q>0$ and $\sin(2c)>0$ for $0<2c<\pi$. Thus all representatives have one common value $t$ with $|t|<\pi/2$, including $t=0$ if $c=0$. Now $\rho=e^{it}$ is real, so $\sin t=0$; strict monotonicity of sine on $[-\pi/2,\pi/2]$ and $\sin0=0$ force $t=0$. This proves the rigidity assertion. A nonsynchronized normalized state on a connected off-diagonal graph therefore cannot have every absolute phase below $\pi/2$, which is exactly the asserted positive cardinality. [F2, F4, F5, step 1.1, step 3.1, algebra] ∎
