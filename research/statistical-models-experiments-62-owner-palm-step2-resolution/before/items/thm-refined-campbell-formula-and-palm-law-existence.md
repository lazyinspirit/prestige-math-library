---
id: thm-refined-campbell-formula-and-palm-law-existence
kind: theorem
title: "Existence and uniqueness of the full Palm law and the refined Campbell identity"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-full-palm-distribution
  - def-stationary-point-process-and-intensity
  - thm-stationary-point-process-intensity-measure-is-rho-lebesgue
  - def-spatial-recentering-action
  - lem-joint-measurability-of-spatial-recentering
  - lem-translation-invariant-locally-finite-borel-measure-on-rd
  - lem-mean-measure-and-integrals-of-a-random-point-process
  - def-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-monotone-convergence-for-the-integral
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 9, §9.1, Theorem 9.1 and full proof, PDF pp.94–96 (printed pp.82–84); Lemma 9.2 measurability, PDF p.96."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 3, §3.2, PDF pp.44–47: Campbell measure and Palm interpretation, used as an independent conceptual treatment."
verification:
  precheck: pending
---

## Statement

Assume AC and Countable Choice as carried by the point-process supplier. For every stationary locally finite point process $\eta$ on $\mathbb R^d$ with finite positive intensity $\rho$, there is a unique probability law $P^0$ on the configuration space satisfying

$$\mathbb E\int h(x,\theta_x\eta)\,\eta(dx)=\rho\int_{\mathbb R^d}\int h(x,\mu)\,P^0(d\mu)\,dx$$

for every nonnegative product-measurable $h$. Moreover, $P^0$-almost every configuration has at least one occurrence at the origin.

## Facts & Assumptions

**Given:** AC, Countable Choice, a stationary locally finite point process $\eta$ with finite positive intensity $\rho$, and its configuration space.

[A1] AC is carried by the transitive random-point-process supplier dependencies; the local Palm construction uses no selection. ([[def-axiom-of-choice]])

[A2] Countable Choice is carried by the transitive random-point-process and Lebesgue-measure supplier dependencies. ([[def-countable-choice]])

[F1] A point process is a measurable random locally finite counting measure, and the evaluation maps generate its configuration sigma-algebra. ([[def-random-measure-and-locally-finite-point-process]])

[F2] Stationarity is invariance under the stated recentering action; its intensity mean measure is $\rho\lambda_d$. ([[def-stationary-point-process-and-intensity]], [[thm-stationary-point-process-intensity-measure-is-rho-lebesgue]])

[F3] The recentering action $(x,\mu)\mapsto\theta_x\mu$ is jointly measurable. ([[def-spatial-recentering-action]], [[lem-joint-measurability-of-spatial-recentering]])

[F4] Every locally finite translation-invariant Borel measure on $\mathbb R^d$ is its unit-cube mass times Lebesgue measure. ([[lem-translation-invariant-locally-finite-borel-measure-on-rd]])

[F5] Parameterized nonnegative integration against the evaluation kernel is measurable, and increasing limits pass through expectations. ([[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]], [[thm-monotone-convergence-for-the-integral]])

[F6] Sigma-finite product measures exist and are determined by their values on a generating pi-system with a finite-measure exhaustion. ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

## Proof

**Given:** AC, Countable Choice, a stationary point process $\eta$ with $0<\rho=\mathbb E\eta(Q)<\infty$, $Q=[0,1)^d$, and the recentering action.

1.1 For each configuration event $A$ and Borel set $B\subseteq\mathbb R^d$, define
$$C_A(B):=\mathbb E\int\mathbf1_B(x)\mathbf1_A(\theta_x\eta)\,\eta(dx).$$
The integrand is measurable by [F3], so this is defined. For disjoint $B_j$, the indicators of their finite unions increase to the indicator of their union; monotone convergence [F5] and countable additivity of each $\eta$ give $C_A(\bigcup_jB_j)=\sum_jC_A(B_j)$. Also $0\le C_A(B)\le\mathbb E\eta(B)=\rho\lambda_d(B)$ by [F2], so $C_A$ is locally finite. [F1, F2, F3, F5]

1.2 For any $y\in\mathbb R^d$, recentering has the flow property $\theta_{x+y}=\theta_x\theta_y$. Changing the location variable in the integral gives
$$C_A(B+y)=\mathbb E\int\mathbf1_B(u)\mathbf1_A(\theta_u(\theta_y\eta))\, (\theta_y\eta)(du)=C_A(B),$$
where the last equality uses stationarity of $\eta$. Thus $C_A$ is translation invariant. [given, F2, F3, step 1.1]

2.1 By [F4] there is a constant $c_A=C_A(Q)$ such that $C_A(B)=c_A\lambda_d(B)$ for every Borel $B$. For disjoint configuration events $A_j$, monotone convergence in the indicator sum gives $c_{\cup_jA_j}=\sum_jc_{A_j}$. Also $c_{\mathcal N}=\mathbb E\eta(Q)=\rho$ and $c_\varnothing=0$. Hence $P^0(A):=c_A/\rho$ is a probability measure on the configuration sigma-algebra. [A2, step 1.1, step 1.2, F4, F5]

2.2 For Borel $B$ and configuration event $A$, the definition gives
$$\mathbb E\int\mathbf1_B(x)\mathbf1_A(\theta_x\eta)\,\eta(dx)=C_A(B)=\rho\lambda_d(B)P^0(A).$$
Define the Campbell measure $\Pi(E)=\mathbb E\int\mathbf1_E(x,\theta_x\eta)\eta(dx)$ on the product space. Joint measurability [F3] and monotone convergence [F5] make $\Pi$ a measure. It is sigma-finite since $\Pi(Q_n\times\mathcal N)=\mathbb E\eta(Q_n)=\rho|Q_n|<\infty$ for the increasing bounded cubes $Q_n=[-n,n)^d$. The product measure $\rho(\lambda_d\otimes P^0)$ is sigma-finite by [F6] and agrees with $\Pi$ on rectangles by the displayed identity; uniqueness on the generating rectangle pi-system therefore gives equality of these measures. Integrating any nonnegative product-measurable $h$ against them proves the refined Campbell identity. [step 2.1, F3, F5, F6]

3.1 If $P_1^0$ is another probability law satisfying the refined identity, use $h(x,\mu)=\mathbf1_Q(x)\mathbf1_A(\mu)$ to obtain $\rho P_1^0(A)=C_A(Q)=\rho P^0(A)$ for every configuration event $A$; since $\rho>0$, $P_1^0=P^0$. [step 2.1, step 2.2, algebra]

3.2 Let $A_0=\{\mu:\mu(\{0\})=0\}$. For every counted occurrence $x$ of $\eta$, the recentered configuration $\theta_x\eta$ has an occurrence at $0$, so the left side of the refined identity with $h(x,\mu)=\mathbf1_Q(x)\mathbf1_{A_0}(\mu)$ is zero. Its right side is $\rho P^0(A_0)$ because $|Q|=1$. Hence $P^0(A_0)=0$: the full Palm law retains at least the distinguished occurrence at the origin, even when other occurrences coincide there. [step 2.2, F3, algebra]

4.1 The constructed law satisfies the defining identity by step 2.2, is unique by step 3.1, and has the origin-atom property by step 3.2. AC and Countable Choice [A1]–[A2] are inherited supplier assumptions; the construction itself uses no choice beyond the Lebesgue-measure supplier. [A1, A2, step 2.2, step 3.1, step 3.2] ∎

## Sources

Last and Penrose, Chapter 9, Theorem 9.1 and Lemma 9.2; Baddeley, Lecture 3, §3.2. The construction is given locally rather than by conditioning on a null event.
