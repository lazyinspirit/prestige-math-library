---
id: ex-uniformly-translated-lattice-palm-and-multiplicities
kind: example
title: "A translated lattice exposes recentering, atomic pair measures, and one-occurrence deletion"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-stationary-point-process-and-intensity
  - thm-stationary-point-process-intensity-measure-is-rho-lebesgue
  - def-spatial-recentering-action
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-full-palm-distribution
  - thm-refined-campbell-formula-and-palm-law-existence
  - def-second-factorial-and-reduced-moment-measures
  - thm-second-factorial-and-reduced-measures-are-locally-finite
  - thm-reduced-second-factorial-moment-palm-identity
  - def-pair-correlation-and-ripleys-k-function
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process (2017 author-hosted version)"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, Exercises 8.3 and 8.10–8.11, PDF pp.92–93; Chapter 9, Theorem 9.1, PDF pp.94–96: translated lattices, multiplicities, and full Palm law."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, Example 2.15, PDF p.37: a uniformly translated grid has an atomic reduced second moment measure and no density; Lecture 3, §3.3, PDF pp.49–50: recentered Palm configurations."
---

## Example

Let $U$ be uniform on $[0,1)$ and define $\eta_U=\sum_{k\in\mathbb Z}\delta_{k+U}$. This is a stationary simple point process on $\mathbb R$ with intensity $1$. Its full Palm law is the deterministic unit lattice. The reduced second factorial moment measure is atomic on $\mathbb Z\setminus\{0\}$, so no pair-correlation density exists. Replacing $\eta_U$ by $2\eta_U$ shows why Palm deletion removes one occurrence at $0$ rather than all origin occurrences.

## Verification

**Given:** $U\sim\mathrm{Unif}[0,1)$, $Q=[0,1)$, and the definitions and theorems of [[def-stationary-point-process-and-intensity]], [[def-full-palm-distribution]], [[def-second-factorial-and-reduced-moment-measures]], and [[def-pair-correlation-and-ripleys-k-function]].

[F1] Configuration measurability is tested by Borel evaluations; $\theta_x\mu(B)=\mu(B+x)$; stationarity is invariance under every $\theta_x$; and intensity is $\mathbb E\eta(Q)$. ([[def-random-measure-and-locally-finite-point-process]], [[def-stationary-point-process-and-intensity]], [[def-spatial-recentering-action]])

[F2] Borel Lebesgue measure is translation invariant and assigns each interval its length. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F3] The full Palm law is characterized by $\mathbb E\int h(x,\theta_x\eta)\eta(dx)=\rho\int\int h(x,\mu)P^0(d\mu)dx$. ([[thm-refined-campbell-formula-and-palm-law-existence]])

[F4] $\alpha^{(2)}_{\rm red}(D)=\mathbb E\sum_{i\ne j}\mathbf1_Q(X_i)\mathbf1_D(X_j-X_i)$, with distinct occurrence indices. ([[def-second-factorial-and-reduced-moment-measures]])

[F5] A pair-correlation density exists only if $\alpha^{(2)}_{\rm red}(du)=\rho^2g(u)du$, and $K(0)=\rho^{-1}\mathbb E^0[(\mu-\delta_0)(\{0\})]$. ([[def-pair-correlation-and-ripleys-k-function]])

[F6] The reduced-measure Palm identity is $\alpha^{(2)}_{\rm red}(D)=\rho\mathbb E^0[(\mu-\delta_0)(D)]$. ([[thm-reduced-second-factorial-moment-palm-identity]])

[A1] AC and Countable Choice are inherited through the point-process and Palm supplier dependency closure; the explicit lattice calculations use no choices. ([[def-axiom-of-choice]], [[def-countable-choice]])

1.1 For every Borel $B$, $u\mapsto\eta_u(B)=\sum_{k\in\mathbb Z}\mathbf1_B(k+u)$ is measurable as a countable sum of Borel functions; every compact set meets only finitely many points of each $\eta_u$, so this is a locally finite random counting measure. For fixed $x$, put $t=x-\lfloor x\rfloor\in[0,1)$. The map $u\mapsto\{u-x\}$ is a translation on each of $[0,t)$ and $[t,1)$, with the two image intervals partitioning $[0,1)$; by [F2] it preserves uniform probability. Reindexing $k\in\mathbb Z$ gives $\theta_x\eta_u=\eta_{\{u-x\}}$, so the process is stationary. Since exactly one $k+u$ lies in $Q=[0,1)$ for every $u\in[0,1)$, $\eta_U(Q)=1$ and $\rho=1$. [given, F1, F2, construct, algebra]

2.1 For every compact $C\subseteq\mathbb R$, choose an integer $m\ge1$ with $C\subseteq[-m,m]$. If $u\in[0,1)$ and $k+u\in C$, then $-m-1\le k\le m$, so $\eta_u(C)\le2m+2$ uniformly in $u$. Consequently $\mathbb E[\eta_U(C)^2]\le(2m+2)^2<\infty$ and $\mathbb E[(2\eta_U)(C)^2]\le4(2m+2)^2<\infty$. Both lattice processes satisfy the local square-integrability premise in the second-order and K definitions. [step 1.1, given, F4, F5, algebra]

2.2 For every configuration event $A$, the unit-cube Palm construction in [F3] gives $$P^0(A)=\mathbb E\int_Q\mathbf1_A(\theta_x\eta_U)\eta_U(dx).$$ There is exactly one occurrence $x=U$ in $Q$, and $\theta_U\eta_U=\sum_{k\in\mathbb Z}\delta_k=:\Lambda$. Therefore $P^0=\delta_\Lambda$. In particular, using the uncentered configuration in the indicator $\mathbf1_{\{\mu(\{0\})>0\}}$ would give $0$ on the left Campbell sum almost surely, whereas the Palm-side value is $1$; this is why recentering cannot be dropped. [F1, F3, step 1.1]

3.1 For each selected lattice occurrence $X_i=k+U\in Q$, the displacements to all other occurrences are $\mathbb Z\setminus\{0\}$. Hence [F4] gives $\alpha^{(2)}_{\rm red}(D)=\#(D\cap(\mathbb Z\setminus\{0\}))$ for bounded Borel $D$. In particular $\alpha^{(2)}_{\rm red}(\{1\})=1$ while $|\{1\}|=0$, so no measurable density $g$ can satisfy [F5]. [F4, F5, step 1.1, step 2.1]

3.2 Now put $\widetilde\eta_U=2\eta_U$, so every lattice site has two occurrence indices and $\widetilde\rho=2$. A selected occurrence has one other occurrence at the same site, so $\alpha^{(2)}_{\rm red}(\{0\})=2$. Equivalently, $P^0$ is concentrated on $2\Lambda$, and $\mu(\{0\})=2$, so [F6] gives $2=\widetilde\rho\mathbb E^0[(\mu-\delta_0)(\{0\})]=2\cdot1$. Thus $K(0)=1/2$; deleting both origin occurrences would incorrectly give zero. [F4, F5, F6, step 2.1, step 2.2, algebra]

4.1 The simple lattice has an atomic reduced measure and no pair-correlation density, while the doubled lattice verifies that factorial pairs distinguish occurrence indices and Palm deletion removes exactly one occurrence. The origin-centered convention and the closed-ball endpoint $r=0$ are both used explicitly. AC and Countable Choice [A1] are inherited assumptions only. [A1, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Sources

Last and Penrose, Exercises 8.3, 8.10–8.11 and Theorem 9.1; Baddeley, Example 2.15 and Lecture 3, §3.3. Every lattice and multiplicity calculation is verified above.
