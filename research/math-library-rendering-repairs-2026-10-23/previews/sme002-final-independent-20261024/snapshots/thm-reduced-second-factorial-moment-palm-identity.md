---
id: thm-reduced-second-factorial-moment-palm-identity
kind: theorem
title: "The reduced second factorial moment measure is the Palm expectation after one-occurrence deletion"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-stationary-point-process-and-intensity
  - thm-stationary-point-process-intensity-measure-is-rho-lebesgue
  - def-spatial-recentering-action
  - lem-joint-measurability-of-spatial-recentering
  - def-full-palm-distribution
  - thm-refined-campbell-formula-and-palm-law-existence
  - def-second-factorial-and-reduced-moment-measures
  - thm-second-factorial-and-reduced-measures-are-locally-finite
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 9, Exercise 9.9 and formula (9.6), PDF pp.96–103 (printed pp.84–91); Chapter 8, Definition 8.6 and Proposition 8.7, PDF pp.83–84."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.4, PDF pp.35–37: the stationary reduced second moment measure in point-centered coordinates."
---

## Statement

Assume AC and Countable Choice as carried by the point-process and Palm suppliers. Let $\eta$ be a stationary locally square-integrable point process on $\mathbb R^d$ with intensity $0<\rho<\infty$, let $P^0$ be its full Palm distribution, and let $\alpha^{(2)}_{\rm red}$ use $Q=[0,1)^d$. For every Borel $D\subseteq\mathbb R^d$,

$$\alpha^{(2)}_{\rm red}(D)=\rho\int (\mu-\delta_0)(D)\,P^0(d\mu).$$

The subtraction removes one distinguished occurrence at the origin; any other co-located occurrences remain.

## Facts & Assumptions

**Given:** AC, Countable Choice, the stationary locally square-integrable point process $\eta$, intensity $\rho$, and its full Palm law $P^0$.

[A1] AC is carried by the transitive point-process supplier dependencies; the occurrence-indexed identity uses no choice. ([[def-axiom-of-choice]])

[A2] Countable Choice is carried by the point-process and Lebesgue-measure supplier dependencies. ([[def-countable-choice]])

[F1] $\alpha^{(2)}_{\rm red}(D)=\mathbb E\sum_{i\ne j}\mathbf1_Q(X_i)\mathbf1_D(X_j-X_i)$, where distinct indices count occurrences, including multiplicities. ([[def-second-factorial-and-reduced-moment-measures]])

[F2] $\theta_x\mu(B)=\mu(B+x)$, so the selected occurrence at $x$ is moved to $0$ and all other occurrences are translated by $-x$. ([[def-spatial-recentering-action]])

[F3] The full Palm law satisfies the refined Campbell identity for every nonnegative jointly measurable integrand and is supported on configurations with an origin occurrence. ([[thm-refined-campbell-formula-and-palm-law-existence]])

[F4] The factorial and reduced moment measures are measurable locally finite Borel measures under local square integrability. ([[thm-second-factorial-and-reduced-measures-are-locally-finite]])

## Proof

**Given:** The stated process, $Q=[0,1)^d$, AC, Countable Choice, and its full Palm law.

1.1 Write each realization with occurrence indices, $\eta=\sum_i\delta_{X_i}$. For each selected occurrence $i$, recentering and subtracting one unit atom gives $$(\theta_{X_i}\eta-\delta_0)(D)=\sum_{j\ne i}\mathbf1_D(X_j-X_i).$$ Indeed, $X_i$ moves to $0$, and only the selected index is removed; if $X_j=X_i$ for another index $j$, that remaining occurrence is still counted at $0$. [F1, F2, algebra]

1.2 Define on the product of location and configuration spaces
$h(x,\mu)=\begin{cases}\mathbf1_Q(x)\bigl(\mu(D)-\mathbf1_D(0)\bigr),&\mu(\{0\})\ge1,\\0,&\mu(\{0\})=0.\end{cases}$
This is nonnegative and product measurable: the two cases are measurable by the configuration evaluation sigma-algebra, and on the first case $\mu-\delta_0$ is a counting measure. For every counted occurrence $x=X_i$, [F2] puts $\theta_x\eta$ in the first case, and $h(x,\theta_x\eta)=\mathbf1_Q(x)(\theta_x\eta-\delta_0)(D)$. [F2, F3, F4, construct]

2.1 Summing the identity in step 1.1 over the selected indices with $X_i\in Q$ and taking expectations, [F1] gives $$\alpha^{(2)}_{\rm red}(D)=\mathbb E\int\mathbf1_Q(x)(\theta_x\eta-\delta_0)(D)\,\eta(dx).$$ This remains valid for extended nonnegative values by monotone summation. [step 1.1, F1, F4]

3.1 Apply [F3] to the integrand $h$ from step 1.2. The result is $$\alpha^{(2)}_{\rm red}(D)=\rho\int\int h(x,\mu)\,P^0(d\mu)\,dx=\rho|Q|\int(\mu-\delta_0)(D)\,P^0(d\mu).$$ Since $|Q|=1$, this is the asserted identity. AC and Countable Choice [A1]–[A2] are inherited supplier assumptions, not additional steps in the occurrence calculation. [A1, A2, step 1.2, step 2.1, F3, F4, algebra] ∎

## Sources

Last and Penrose, Chapter 9, refined Campbell identity and Exercise 9.9; Chapter 8, Definition 8.6 and Proposition 8.7; Baddeley, Lecture 2, §2.4. The index-based argument fixes the multiplicity convention explicitly.
