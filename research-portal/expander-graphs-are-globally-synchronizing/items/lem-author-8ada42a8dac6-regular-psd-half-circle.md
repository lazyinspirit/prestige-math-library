---
id: lem-author-8ada42a8dac6-regular-psd-half-circle
title: "Regular critical PSD phases: kernel and half-circle"
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-8ada42a8dac6-regular-psd-mass
  - prop-expander-prereq-ordered-angle-inequalities
  - def-expander-prereq-loop-compatible-networks
  - math:def-connected-graph-and-connected-component
  - def-expander-prereq-phasor-calculus
  - math:thm-sine-and-cosine-addition-formulas
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:thm-quarter-turn-values-and-shift-formulas
  - math:thm-sine-cosine-zero-sets-and-fundamental-period
dependency_roles:
  lem-author-8ada42a8dac6-regular-psd-mass: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:thm-sine-and-cosine-addition-formulas: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  math:thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement

For a regular critical PSD phase configuration as in the preceding lemma, put $K(u,v)=\sin(|u|-\min(|v|,\pi/2))$. Then $\sum_xA_{xy}K(\theta_x,\theta_y)\ge0$ for every $y$. If the off-diagonal graph is connected and every $|\theta_x|<\pi/2$, all phases equal zero under the normalization $\rho\ge0$. Thus a normalized nonsynchronized critical PSD state on a connected graph has $|\{x:|\theta_x|\ge\pi/2\}|>0$.

## Facts & Assumptions

[F1] Use the graph, phase, algebraic and analytic interfaces of [[lem-author-8ada42a8dac6-regular-psd-mass]], [[prop-expander-prereq-ordered-angle-inequalities]]. Every configuration assumed here is a critical point with positive-semidefinite Hessian; local minimality is never inferred from that condition.

[F2] The off-diagonal graph is the support graph with vertex set $V$ and edges $\{x,y\}$ where $x\ne y$ and $A_{xy}>0$ ([[def-expander-prereq-loop-compatible-networks]]). It is connected when every two vertices can be joined by a vertex path ([[math:def-connected-graph-and-connected-component]]).

[F3] A synchronized state means that all its phases are equal modulo $2\pi$; nonsynchronized means that this condition fails. The phase quotient, $e^{iu}=\cos u+i\sin u$, the phasor difference identities, and real and imaginary parts of finite sums are supplied by [[def-expander-prereq-phasor-calculus]].

[F4] Use the real sine and cosine addition formulas ([[math:thm-sine-and-cosine-addition-formulas]]), oddness of sine and evenness of cosine ([[math:cor-trigonometric-parity-and-pythagorean-identity]]), quarter-turn values and shift formulas ([[math:thm-quarter-turn-values-and-shift-formulas]]), and the sine and cosine zero sets ([[math:thm-sine-cosine-zero-sets-and-fundamental-period]]). Together with the nonnegativity of sine and monotonicity of cosine in [F1], these give $\sin t>0$ for $0<t<\pi$, $\sin t<0$ for $-\pi<t<0$, and the signs of cosine on either side of $\pi/2$ for principal absolute phases.

## Proof

**Given:** The hypotheses of the Statement.

**Goal:** Establish its conclusions directly for critical PSD phases.

1.1 The phasor identity $(Ae^{i\theta})_y=r_ye^{i\theta_y}$ with $r_y\ge0$ implies $\sum_xA_{xy}\sin(\theta_x-\theta_y)=0$ and $\sum_xA_{xy}\cos\theta_x=r_y\cos\theta_y$ by symmetry of $A$ and taking imaginary and real parts. If $0\le\theta_y\le\pi/2$, expansion of $\sin(|\theta_x|-\theta_y)$ and $\sin|\theta_x|\ge\sin\theta_x$ gives $K(\theta_x,\theta_y)\ge\sin(\theta_x-\theta_y)$, because $\cos\theta_y\ge0$. For $-\pi/2\le\theta_y\le0$, the corresponding inequality is $K(\theta_x,\theta_y)\ge-\sin(\theta_x-\theta_y)$, using $\sin|\theta_x|\ge-\sin\theta_x$. Summing against $A_{xy}\ge0$ gives a nonnegative sum. For $|\theta_y|\ge\pi/2$, the quarter-turn formula and cosine parity give $K(\theta_x,\theta_y)=-\cos\theta_x$, so the sum is $-r_y\cos\theta_y\ge0$. [F1, F3, F4, algebra]

2.1 If every absolute phase is below $\pi/2$, choose a vertex with maximal absolute phase $c$. At any vertex attaining $c$, step 1.1 gives $\sum_xA_{xy}\sin(|\theta_x|-c)\ge0$. Every term is nonpositive and is negative for an adjacent smaller absolute phase. Thus every neighbor also attains $c$, and propagation along paths gives $|\theta_x|=c$ at every vertex. If both signs $c,-c$ occur with $c>0$, put $S_\pm=\{x:\theta_x=\pm c\}$. A path between the two nonempty classes has an edge across them, so $\sum_{x\in S_+,y\in S_-}A_{xy}>0$. Summing the sine identities from step 1.1 over $y\in S_-$ gives $0=\sin(2c)\sum_{x\in S_+,y\in S_-}A_{xy}$, impossible since $0<2c<\pi$. If only one sign occurs, all phases have a common value $t$ with $|t|<\pi/2$; real nonnegative $\rho=e^{it}$ gives $\sin t=0$, and the sine zero set forces $t=0$. This also covers $c=0$. Thus all phases are equal, in the phase quotient of [F3], and the stated contrapositive follows. [F1, F2, F3, F4, step 1.1, algebra] ∎
