---
id: thm-tdmath-summable-canonical-differentiation
kind: theorem
title: "Summable canonical differentiation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["cor-mean-value-theorem","def-natural-logarithm","def-real-exponential-function-and-e","def-series","def-tdmath-countable-canonical-model","thm-chain-rule","thm-derivative-of-exponential","thm-logarithm-derivative-and-integral"]
justified_by: []
dependency_roles: {"cor-mean-value-theorem":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-series":"mathematical-premise","def-tdmath-countable-canonical-model":"mathematical-premise","thm-chain-rule":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; §§1.3–1.4, printed pp.17–30, for canonical and grand-canonical normalizations and responses."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; §§4.2–4.6, printed pp.192–217, for microcanonical, canonical, quantum trace and grand-canonical constructions."
---

## Statement

Let $I,E_i,g_i,J,Z$ be as in [[def-tdmath-countable-canonical-model]]. Suppose that for every compact interval $K\subset J$ there is a summable sequence $a_i\ge0$ such that $g_i(1+|E_i|^2)\exp(-\beta E_i)\le a_i$ for every $i\in I$ and $\beta\in K$. Then $Z$ is positive, finite, and $C^2$ on $J$, with $Z'(\beta)=-\sum_i g_iE_i\exp(-\beta E_i)$ and $Z''(\beta)=\sum_i g_iE_i^2\exp(-\beta E_i)$. The probabilities $p_i$ are normalized. Define $\bar E:=\langle E\rangle_\beta$ and $\operatorname{Var}_\beta(E):=\sum_i p_i(E_i-\bar E)^2$. These quantities are finite and satisfy $-\partial_\beta\log Z=\bar E$ and $\partial_\beta^2\log Z=\operatorname{Var}_\beta(E)$. Moreover $H_g(p)=\log Z+\beta\bar E$, and its defining series is absolutely convergent.

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-countable-canonical-model]]: $Z$, $p_i$, expectation and $H_g$ have the definitions and domains stated there. The centered variance is defined in this item's Statement.

[F2] [[def-real-exponential-function-and-e]] and [[thm-derivative-of-exponential]]: $\exp$ is positive and differentiable with $\exp'=\exp$.

[F3] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log$ is defined on positive reals and $(\log u)'=u'/u$ for differentiable $u>0$.

[F4] [[cor-mean-value-theorem]]: a function continuous on a closed interval and differentiable in its interior has a point where its secant slope equals its derivative.

[A1] For every compact $K\subset J$ there is a nonnegative summable sequence $(a_i)$ such that $g_i(1+|E_i|^2)e^{-\beta E_i}\le a_i$ for all $i$ and $\beta\in K$; the tail $\sum_{i>N}a_i$ tends to zero.

[F5] [[thm-chain-rule]]: differentiating $e^{-\beta E_i}$ with respect to $\beta$ uses the one-variable chain rule.

## Proof

**Given:** The countable canonical model and the local summable envelope in the statement.

1.1 On a compact interval $K\subset J$, let $Z_N$, $D_N$, and $Q_N$ be the first $N$ partial sums of $\sum_i g_i e^{-\beta E_i}$, $-\sum_i g_iE_ie^{-\beta E_i}$, and $\sum_i g_iE_i^2e^{-\beta E_i}$. Since $|E_i|^r\le1+|E_i|^2$ for $r=0,1,2$, each tail is bounded uniformly on $K$ by the corresponding tail of $\sum_i a_i$, which tends to zero [A1]. Thus all three sequences converge uniformly; call their limits $Z,D,Q$. Each finite partial sum has the displayed derivatives by the chain rule [F5] and the exponential derivative [F2]. Each partial sum is continuous, so the uniform limits are continuous by the $\varepsilon/3$ definition of continuity. [F1, A1, F2, F5]

2.1 For an interior $\beta$ and sufficiently small $h\ne0$, apply [F4] to $Z_N$ on the interval with endpoints $\beta$ and $\beta+h$: its difference quotient is $D_N(\xi_{N,h})$ for some intermediate $\xi_{N,h}$. Choose $N=N(h)$ so that $\sup_K|Z_N-Z|<h^2$ and $\sup_K|D_N-D|<|h|$. The difference quotient for $Z$ then differs from $D(\beta)$ by at most $2|h|+|h|+\sup_{|t-\beta|\le|h|}|D(t)-D(\beta)|$, which tends to zero by continuity of $D$. Hence $Z'=D$. Applying the same argument to $D_N$ and $Q_N$ proves $D'=Q$, so the displayed derivatives hold. [F2, F4, F5, step 1.1]

3.1 The summands of $Z$ are positive and at least one is present, hence $0<Z<\infty$ on $K$; summing the definition of $p_i$ gives $\sum_i p_i=1$. The envelope gives finite first and second moments, and $\sum_i p_i(E_i-\bar E)^2\le2\sum_i p_iE_i^2+2\bar E^2<\infty$. Differentiating $\log Z$ using [F3] yields $-Z'/Z=\bar E$ and $Z''/Z-(Z'/Z)^2=\langle E^2\rangle-\bar E^2=\operatorname{Var}_\beta(E)$ after expanding the defining variance. [F1, F2, F3, step 2.1, algebra]

4.1 Since $p_i/g_i=e^{-\beta E_i}/Z$, its logarithm is $-\beta E_i-\log Z$. The finite first moment makes $\sum_i p_i|\log(p_i/g_i)|\le |\beta|\sum_i p_i|E_i|+|\log Z|\sum_i p_i<\infty$; summing the identity gives $H_g=\beta\bar E+\log Z$. [F1, F2, F3, step 3.1] ∎
