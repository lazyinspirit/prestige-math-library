---
id: lem-root-free-polynomial-circle-loops-are-nullhomotopic
kind: lemma
title: "A root-free complex polynomial gives nullhomotopic normalized circle loops"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-polynomial-degree-and-monic, def-complex-metric-convergence-and-continuity, lem-complex-conjugation-and-modulus-laws, thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, thm-componentwise-limits-and-continuity, lem-algebra-of-continuous-real-maps-on-a-space, thm-product-universal-property, cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.8"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a complex polynomial with no zero in $\mathbb C$. For each real $R\ge0$, evaluate $p$ on the circle of radius $R$, divide by its value at the basepoint $R$, and radially normalize to the unit circle. Transported through the homeomorphism $h:\mathbb R/\mathbb Z\to S^1$, this is a based circle loop $\alpha_R$, and every $\alpha_R$ is nullhomotopic. In particular, every such loop has degree zero.

## Facts & Assumptions

**Given:** A complex polynomial $p$ such that $p(z)\ne0$ for every $z\in\mathbb C$, a real $R\ge0$, and the unit-circle homeomorphism $h:\mathbb R/\mathbb Z\to S^1$.

[F1] A complex polynomial is a finite coefficient list, and its evaluation at $z\in\mathbb C$ is the corresponding finite sum of powers of $z$ ([[def-complex-polynomial-degree-and-monic]]).

[F2] Under $\mathbb C=\mathbb R^2$, complex continuity is continuity for the Euclidean metric ([[def-complex-metric-convergence-and-continuity]]).

[L1] Complex modulus satisfies $|zw|=|z||w|$, $|z|=0$ exactly when $z=0$, and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L2] The map $h:\mathbb R/\mathbb Z\to S^1$, $h([t])=(\cos2\pi t,\sin2\pi t)$, is a homeomorphism and sends $[0]$ to $1\in S^1$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L3] A map into a finite product is continuous exactly when each component is continuous, and continuity of maps into $\mathbb R^2$ is componentwise ([[thm-product-universal-property]], [[thm-componentwise-limits-and-continuity]]).

[L4] Finite sums and products of continuous real-valued maps are continuous, as are quotients on cozero sets ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L5] A based circle loop is nullhomotopic exactly when its degree is zero ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]).

## Proof

**Proof technique:** constructive.

1.1 For $\tau\in[0,1]$ and $u\in\mathbb R/\mathbb Z$, put $q(\tau,u)=p(\tau R h(u))/p(\tau R)$. Root-freeness makes numerator and denominator nonzero, so $$A(\tau,u):=h^{-1}\left(\frac{q(\tau,u)}{|q(\tau,u)|}\right)$$ is defined; moreover $q(\tau,[0])=1$, hence $A(\tau,[0])=[0]$. Define $\alpha_R(u)=A(1,u)$. [given, F1, L1, L2, construct]

2.1 Writing complex addition and multiplication in real and imaginary coordinates shows from [F1], [L3], and [L4] that $(\tau,u)\mapsto p(\tau Rh(u))$ and $\tau\mapsto p(\tau R)$ are continuous. Root-freeness and [L1] make division and radial normalization continuous, and [L2] makes $A$ continuous. At $\tau=0$ one has $q(0,u)=p(0)/p(0)=1$, so $A(0,u)=[0]$ for every $u$, while step 1.1 keeps the basepoint fixed for all $\tau$. Thus $A$ is a based homotopy on the unit interval from the constant loop to $\alpha_R$, including the case $R=0$ without division by $R$. [step 1.1, F1, F2, L1, L2, L3, L4]

3.1 Hence $\alpha_R$ is nullhomotopic for every $R\ge0$, and [L5] gives $\deg(\alpha_R)=0$. [step 2.1, L5, discharge-construct] ∎
