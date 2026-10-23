---
id: cex-fd-shock-point-values
kind: counterexample
title: Point assignments do not alter weak jump
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-piecewise-traces
  - def-fd-conservation-system
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - def-countable-choice
dependency_roles:
  def-fd-piecewise-traces: mathematical-premise
  def-fd-conservation-system: mathematical-premise
  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter III §3.1 and Chapter IV §4.3"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
---

## Statement refuted

Assume the Axiom of Countable Choice. The assertion that a pointwise value assigned on a shock plane determines its one-sided trace or weak jump is false. Let $d,m\geq1$, let $I\subseteq\mathbb R$ and $\Omega\subseteq\mathbb R^d$ be open, let $\mathcal O\subseteq\mathbb R^m$ be open and convex, and let $F_j\in C^1(\mathcal O;\mathbb R^m)$ for $1\leq j\leq d$. Let $n\in\mathbb R^d$ be a unit vector, let $s\in\mathbb R$, put $Q=I\times\Omega$, and set $\Sigma=\{(t,x)\in Q:n\cdot x=st\}$. Suppose $U:Q\to\mathcal O$ is measurable, has piecewise $C^1$ side fields with $C^1$ extensions to the interface, and $U,F_1(U),\ldots,F_d(U)\in L^1_{\mathrm{loc}}(Q)$. Let $\widetilde U:Q\to\mathcal O$ be any measurable field that agrees with $U$ off $\Sigma$. Then $\widetilde U$ and $F_j(\widetilde U)$ are locally integrable and define the same regular distributions as $U$ and $F_j(U)$; their distributional conservation residuals are equal. For every convex $\eta\in C^2(\mathcal O)$ and compatible $q_j\in C^1(\mathcal O)$ with $Dq_j=D\eta\,DF_j$ whose compositions $\eta(U),q_j(U)$ are locally integrable, the corresponding compositions for $\widetilde U$ are locally integrable and have the same regular distributions and entropy residual. The two fields have the same one-sided traces and jump. In particular, assigning a third state on the shock plane does not change its weak jump condition.

## Statement references

[[def-fd-piecewise-traces|piecewise smooth traces and jump convention]]

[[def-fd-conservation-system|regular distributions and weak formulations]]

[[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null|Lebesgue nullity of an affine hyperplane]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice; the spacetime interface, state domain, locally integrable field, side regularity, and measurable reassignment in the Statement.

[F1] [[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]: under Countable Choice, every affine hyperplane in Euclidean space is Lebesgue null, including every subset of it.

[F2] [[def-fd-piecewise-traces]]: the side traces are limits of the restrictions from the open sides; assigned values on the interface are not part of either trace.

[F3] [[def-fd-conservation-system]]: locally integrable fields and their locally integrable entropy compositions define regular distributions through integration against test functions.

[F4] [[def-countable-choice]]: Countable Choice is the explicit hypothesis in [F1].

[A1] The reassignment is measurable and takes finite values in $\mathcal O$ on $\Sigma$.

## Proof

1.1 In spacetime $\mathbb R^{d+1}$, the equation $n\cdot x-st=0$ defines an affine hyperplane because its normal $(-s,n)$ is nonzero, as $|n|=1$. Therefore [F1] gives $\lambda_{d+1}(\Sigma)=0$. [given, F1, F4, A1]

2.1 The original and modified fields agree off $\Sigma$, so their difference is supported on a Lebesgue-null set. They are measurable and locally integrable; for every compactly supported test, the integral of their difference times the test is zero. The same reasoning applies to each flux composition and, whenever defined, each entropy and entropy-flux composition, since the compositions also differ only on $\Sigma$. By [F3] all corresponding regular distributions and their distributional derivatives therefore agree. [given, F3, step 1.1, A1]

3.1 The two fields coincide on each open side, so their one-sided limits at every interface point coincide. By [F2], the assigned values on $\Sigma$ do not enter the traces; hence the jump and any Rankine–Hugoniot or entropy jump coefficient computed from those traces are unchanged. [given, F2, step 2.1] ∎
