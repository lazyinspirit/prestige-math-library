---
id: thm-homogeneous-poisson-ripleys-k-is-ball-volume
kind: theorem
title: "Ripley K for a homogeneous Poisson process is Euclidean ball volume"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps: ["def-pair-correlation-and-ripleys-k-function","def-full-palm-distribution","thm-refined-campbell-formula-and-palm-law-existence","def-spatial-recentering-action","lem-joint-measurability-of-spatial-recentering","def-stationary-point-process-and-intensity","thm-stationary-point-process-intensity-measure-is-rho-lebesgue","def-poisson-and-cox-point-process","thm-poisson-mecke-identity","def-axiom-of-choice","def-countable-choice","lem-poisson-count-law-normalization-and-moments"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 9, Theorem 9.4 and its Mecke–Slivnyak proof, PDF pp.96–97; Chapter 4, Theorem 4.1 and Mecke equation, PDF pp.39–41."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 3, Example 3.3 and §§3.2–3.3, PDF pp.45–50: Poisson Palm law and its translation convention."
verification:
  precheck: pending
---

## Statement

Assume AC and Countable Choice as carried by the point-process supplier. Let $\eta$ be a stationary homogeneous Poisson point process on $\mathbb R^d$ with intensity measure $\rho\lambda_d$, where $\rho>0$. For every $r\ge0$,

$$K(r)=|B[0,r]|.$$

The full Palm law is $P^0=\mathcal L(\eta+\delta_0)$; adding and then deleting the distinguished atom means one occurrence, so no simplicity assumption is used.

## Facts & Assumptions

**Given:** AC, Countable Choice, the stationary homogeneous Poisson process $\eta$, its full Palm law, and the closed ball convention.

[A1] AC is carried by the transitive point-process supplier dependencies; this proof adds no choice. ([[def-axiom-of-choice]])

[A2] Countable Choice is carried by the point-process and Lebesgue-measure supplier dependencies. ([[def-countable-choice]])

[F1] The deletion-form Mecke identity holds for every nonnegative product-measurable integrand and removes one counted occurrence. ([[thm-poisson-mecke-identity]])

[F2] The full Palm law satisfies the refined Campbell identity. ([[thm-refined-campbell-formula-and-palm-law-existence]])

[F3] Recentering is $(\theta_x\mu)(B)=\mu(B+x)$, is jointly measurable, and sends $\delta_x$ to $\delta_0$. ([[def-spatial-recentering-action]], [[lem-joint-measurability-of-spatial-recentering]])

[F4] $\mathbb E[\eta(B)]=\rho|B|$ for every Borel $B$. ([[thm-stationary-point-process-intensity-measure-is-rho-lebesgue]])

[F5] $K(r)=\rho^{-1}\mathbb E^0[(\mu-\delta_0)(B[0,r])]$ for the closed ball. ([[def-pair-correlation-and-ripleys-k-function]])

[F6] For every compact $C$, the Poisson count $\eta(C)$ has parameter $\rho|C|<\infty$ and second moment $(\rho|C|)^2+\rho|C|$. ([[def-poisson-and-cox-point-process]], [[lem-poisson-count-law-normalization-and-moments]])

## Proof

**Given:** AC, Countable Choice, a stationary homogeneous Poisson process $\eta$ of intensity $\rho\lambda_d$, and its full Palm law $P^0$.

1.1 For each compact $C\subseteq\mathbb R^d$, [F6] gives $\mathbb E[\eta(C)^2]=(\rho|C|)^2+\rho|C|<\infty$, so $\eta$ is locally square integrable and satisfies the second-order premise of the K definition [F5]. [given, F5, F6, algebra]

1.2 Fix a configuration event $A$. In [F1] use $$h_A(x,\mu)=\mathbf1_Q(x)\mathbf1_A(\theta_x(\mu+\delta_x)),$$ which is product measurable by [F3] and the evaluation formula for adding one atom. At each occurrence $x$ of $\eta$, deletion followed by addition restores $\eta$, so the left side is $\mathbb E\int\mathbf1_Q(x)\mathbf1_A(\theta_x\eta)\eta(dx)$. [F1, F3, construct]

2.1 The right side of that Mecke identity is $$\rho\int_Q\mathbb P(\theta_x(\eta+\delta_x)\in A)\,dx=\rho|Q|\mathbb P(\eta+\delta_0\in A),$$ because $\theta_x\delta_x=\delta_0$ and stationarity gives $\theta_x\eta\stackrel d=\eta$. The refined Palm identity [F2] applied to $\mathbf1_Q(x)\mathbf1_A(\mu)$ says that the left side in step 1.2 is $\rho|Q|P^0(A)$. Since $|Q|=1$ and $\rho>0$, $P^0(A)=\mathbb P(\eta+\delta_0\in A)$ for every $A$, proving the full-Palm law identity. [step 1.2, F1, F2, F3, algebra]

3.1 Under this Palm law, $\mu$ has the distribution of $\eta+\delta_0$. Removing the single distinguished occurrence gives $(\eta+\delta_0)-\delta_0=\eta$ even if $\eta$ has other occurrences at $0$. Therefore $$\mathbb E^0[(\mu-\delta_0)(B[0,r])]=\mathbb E[\eta(B[0,r])]=\rho|B[0,r]|$$ by [F4]. Substituting in the K definition [F5] yields $K(r)=|B[0,r]|$. [step 1.1, step 2.1, F4, F5, algebra]

4.1 The endpoint $r=0$ is included: the closed ball is $\{0\}$ and the same calculation gives $K(0)=\rho^{-1}\mathbb E\eta(\{0\})=0=|\{0\}|$. The proof uses the one-occurrence deletion convention and asserts neither diffuse-intensity simplicity nor any other simplicity property. AC and Countable Choice [A1]–[A2] are inherited supplier assumptions. [A1, A2, step 3.1, F4, F5] ∎

## Sources

Last and Penrose, Chapters 4 and 9, Mecke equation and Theorem 9.4; Baddeley, Lecture 3, Example 3.3. The local proof derives the full Palm law directly from Mecke.
