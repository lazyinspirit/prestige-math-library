---
id: lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace
kind: lemma
title: "The Cauchy transform of a cycle is holomorphic off its trace, with the expected derivatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-differentiating-cauchy-integrals, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, thm-algebra-of-complex-derivatives, thm-compact-subset-is-closed-and-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-closed-subspace-of-a-compact-space-is-compact, thm-heine-borel-rn, def-complex-integer-powers, def-metric-topology, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Gamma=\sum_{k<r}m_k\gamma_k$ be a complex chain with trace $\Gamma^\ast$
and let $\varphi$ be continuous on $\Gamma^\ast$. Put
$V=\mathbb C\setminus\Gamma^\ast$, which is open, and for every natural $n\ge1$
define the **Cauchy transform**

$$F_n(z)=\frac1{2\pi i}\int_\Gamma\frac{\varphi(\zeta)}{(\zeta-z)^n}\,d\zeta\qquad(z\in V).$$

Then each $F_n$ is holomorphic on $V$ and

$$F_n'(z)=n\,F_{n+1}(z)\qquad(z\in V).$$

## Facts & Assumptions

**Given:** A complex chain $\Gamma=\sum_{k<r}m_k\gamma_k$ and a continuous $\varphi$ on its trace.

[L1] Let $\gamma:[\alpha,\beta]\to\mathbb C$ be a rectifiable contour, let $\varphi$ be continuous on its trace and let $W\subseteq\mathbb C$ be open and disjoint from that trace. For every natural $n\ge1$ the function $z\mapsto(2\pi i)^{-1}\int_\gamma\varphi(\zeta)(\zeta-z)^{-n}\,d\zeta$ is holomorphic on $W$ and its derivative is $n$ times the corresponding function with exponent $n+1$ ([[lem-differentiating-cauchy-integrals]]).

[L2] $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$ ([[def-integration-and-index-of-complex-chain]]).

[L3] A complex chain is a finite list of pairs $(m_k,\gamma_k)$ of integers and complex contours, and its trace is the union of the $\gamma_k^\ast$ with $m_k\ne0$ ([[def-complex-chain-and-cycle]]).

[L4] Finite linear combinations and products of complex-differentiable functions are complex differentiable, as are reciprocals and quotients wherever their denominators do not vanish; constants and the identity are complex differentiable ([[thm-algebra-of-complex-derivatives]]).

[L5] A compact subset is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); the continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a finite union of compact subsets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]); a closed bounded interval is compact ([[thm-heine-borel-rn]]).

[L6] Negative integer powers are defined exactly for nonzero complex bases ([[def-complex-integer-powers]]).

[L7] A set is closed exactly when its complement is open ([[def-metric-topology]]).

[L8] A sum over a finite index set in the additive commutative monoid of $\mathbb C$ is well posed and additive, with empty sum $0$; complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L9] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Each $\gamma_k^\ast$ is the continuous image of a compact interval, hence compact by [L5], so the trace $\Gamma^\ast$ of [L3] is a finite union of compact sets, compact by [L5] and closed by [L5]; therefore $V=\mathbb C\setminus\Gamma^\ast$ is open by [L7]. [given, L3, L5, L7]

1.2 For $z\in V$ and $\zeta\in\Gamma^\ast$ one has $\zeta-z\ne0$, so the powers $(\zeta-z)^{-n}$ are defined by [L6]. For fixed $z$, the map $\zeta\mapsto(\zeta-z)^{-n}$ is holomorphic on $\mathbb C\setminus\{z\}$ by repeated products and nonvanishing quotients, using [L4], hence continuous by [L9]; multiplying by the continuous function $\varphi$ makes the integrand of each $F_n$ continuous on $\Gamma^\ast$, so [L2] defines $F_n(z)$. [given, L2, L4, L6, L9]

2.1 Fix $k<r$ with $m_k\ne0$. Then $\gamma_k^\ast\subseteq\Gamma^\ast$ by [L3], so the open set $V$ of step 1.1 is disjoint from $\gamma_k^\ast$, and $\varphi$ is continuous on $\gamma_k^\ast$; hence [L1] makes $F^{(k)}_n(z)=(2\pi i)^{-1}\int_{\gamma_k}\varphi(\zeta)(\zeta-z)^{-n}\,d\zeta$ holomorphic on $V$ with $(F^{(k)}_n)'=nF^{(k)}_{n+1}$. [step 1.1, step 1.2, L1, L3]

3.1 By [L2] and [L8], $F_n=\sum_{k<r,\,m_k\ne0}m_kF^{(k)}_n$ on $V$, a finite linear combination with constant coefficients of the functions of step 2.1; so [L4] makes $F_n$ holomorphic on $V$ with $F_n'=\sum_{k}m_k(F^{(k)}_n)'=n\sum_km_kF^{(k)}_{n+1}=nF_{n+1}$. The empty chain, and a chain with all coefficients zero, give $F_n\equiv0$ and the identity holds trivially. [step 2.1, L2, L4, L8] ∎
