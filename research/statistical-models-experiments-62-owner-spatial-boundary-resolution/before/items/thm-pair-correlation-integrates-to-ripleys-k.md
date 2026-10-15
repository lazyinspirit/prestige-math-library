---
id: thm-pair-correlation-integrates-to-ripleys-k
kind: theorem
title: "A pair-correlation density integrates to Ripley K"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-pair-correlation-and-ripleys-k-function
  - def-random-measure-and-locally-finite-point-process
  - thm-reduced-second-factorial-moment-palm-identity
  - def-second-factorial-and-reduced-moment-measures
  - thm-refined-campbell-formula-and-palm-law-existence
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
      locator: "Chapter 8, Proposition 8.8 and Definition 8.9, PDF pp.84–85; Chapter 9, Theorem 9.1, PDF pp.94–96."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, Examples 2.14 and 2.17, PDF pp.37–38: reduced-moment density and K normalization."
verification:
  precheck: pending
---

## Statement

Assume AC and Countable Choice as carried by the point-process and Palm suppliers. Let $\eta$ be a stationary locally square-integrable point process on $\mathbb R^d$ with intensity $\rho>0$, and suppose its pair-correlation density $g$ exists in the sense of [[def-pair-correlation-and-ripleys-k-function]]. Then, for every $r\ge0$,

$$K(r)=\int_{B[0,r]}g(u)\,du.$$

For a simple process, the same K-function also satisfies $K(r)=\rho^{-1}\mathbb E^0[\mu(B[0,r]\setminus\{0\})]$.

## Facts & Assumptions

**Given:** AC, Countable Choice, the stationary locally square-integrable point process, its full Palm law, and the assumed density $g$.

[A1] AC is inherited through the transitive point-process dependencies; no additional selection is made. ([[def-axiom-of-choice]])

[A2] Countable Choice is inherited through the point-process and Palm dependencies. ([[def-countable-choice]])

[F1] $K(r)=\rho^{-1}\int(\mu-\delta_0)(B[0,r])P^0(d\mu)$, and a pair-correlation density satisfies $\alpha^{(2)}_{\rm red}(D)=\rho^2\int_Dg(u)du$. ([[def-pair-correlation-and-ripleys-k-function]])

[F2] $\alpha^{(2)}_{\rm red}(D)=\rho\int(\mu-\delta_0)(D)P^0(d\mu)$, deleting one distinguished occurrence. ([[thm-reduced-second-factorial-moment-palm-identity]])

[F3] The full Palm law satisfies the refined Campbell identity for every nonnegative product-measurable integrand and is supported on configurations with at least one occurrence at zero. ([[thm-refined-campbell-formula-and-palm-law-existence]])

[F4] A configuration is simple when every location has multiplicity at most one. Here a **simple process** means a process whose configurations are simple on a probability-one measurable event. ([[def-random-measure-and-locally-finite-point-process]])

## Proof

**Given:** AC, Countable Choice, the definitions in [F1], the reduced Palm identity, and the density hypothesis.

1.1 Apply [F2] with $D=B[0,r]$ and divide by $\rho^2>0$. By the K definition [F1], $$K(r)=\rho^{-2}\alpha^{(2)}_{\rm red}(B[0,r]).$$ [F1, F2, algebra]

1.2 Suppose $\eta$ is simple. The event $A_2=\{\mu:\mu(\{0\})\ge2\}$ is measurable by the evaluation sigma-algebra. In the refined Campbell identity [F3], take $h(x,\mu)=\mathbf1_Q(x)\mathbf1_{A_2}(\mu)$ with $Q=[0,1)^d$. On the probability-one event of simple realizations, every counted occurrence $x$ has $(\theta_x\eta)(\{0\})=\eta(\{x\})=1$, so the left side is zero. The right side is $\rho|Q|P^0(A_2)=\rho P^0(A_2)$, hence $P^0(A_2)=0$. Combining this with the at-least-one origin property in [F3] gives $\mu(\{0\})=1$ $P^0$-almost surely. Therefore $(\mu-\delta_0)(B[0,r])=\mu(B[0,r]\setminus\{0\})$ $P^0$-almost surely, and the definition [F1] gives the stated simple-process formula. [F1, F3, F4, algebra]

2.1 The density clause in [F1] applied to the same closed ball gives $\alpha^{(2)}_{\rm red}(B[0,r])=\rho^2\int_{B[0,r]}g(u)du$. Substitution in step 1.1 proves the asserted integral formula. [step 1.1, F1, algebra]

3.1 At the endpoint $r=0$, the closed-ball convention gives $B[0,0]=\{0\}$, so $K(0)=\rho^{-1}\mathbb E^0[\mu(\{0\})-1]$; this is $0$ for a simple process, while any other co-located occurrences contribute in the multiplicity-bearing case. The proof uses no density-existence claim beyond the stated hypothesis. AC and Countable Choice [A1]–[A2] are inherited supplier assumptions, not additional derivation steps. [A1, A2, step 1.1, step 1.2, F1] ∎

## Sources

Last and Penrose, Proposition 8.8, Definition 8.9, and Theorem 9.1; Baddeley, Examples 2.14 and 2.17. The absolute-continuity hypothesis is retained explicitly.
