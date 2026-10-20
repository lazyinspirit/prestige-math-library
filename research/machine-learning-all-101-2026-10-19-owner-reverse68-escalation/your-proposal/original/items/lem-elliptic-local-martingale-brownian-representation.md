---
id: lem-elliptic-local-martingale-brownian-representation
kind: lemma
title: An elliptic local martingale has a Brownian driver
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 1
deps:
  - cor-vector-levy-characterization
  - def-axiom-of-choice
  - def-continuous-time-adapted-process-and-martingale
  - def-progressively-measurable-and-predictable-process
  - lem-adapted-continuous-processes-are-progressively-measurable
  - thm-doob-lp-maximal-inequality
  - thm-riesz-fischer-completeness-of-l-p
  - def-conditional-expectation-as-an-ae-class
  - lem-continuous-local-martingale-quadratic-variation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "A. W. van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 6.1 and Exercise 6.5; Theorem 7.15"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
      locator: "Printed pp. 119 and 122: scalar Levy proof and vector exercise; pp. 147–148: inverse-diffusion Brownian reconstruction. The local proof supplies the matrix-valued integral construction and vector argument."
---

## Statement

Assume the Axiom of Choice. Let $(M_t)_{0\le t\le T}$ be a continuous adapted $d$-dimensional local martingale with $M_0=0$. Let $(\sigma_t)_{0\le t\le T}$ be a continuous adapted process of invertible $d\times d$ matrices such that $\|\sigma_t^{-1}\|\le C$ for a deterministic finite constant $C$, and suppose every entry of $\sigma$ is locally square-integrable in time almost surely. Write $[M^i,M^j]$ for the continuous bracket characterized by the local-martingale property of $M^iM^j-[M^i,M^j]$, and assume
$$[M^i,M^j]_t=\int_0^t(\sigma_s\sigma_s^{\mathsf T})_{ij}\,ds\qquad(1\le i,j\le d).$$
Then the stochastic integral $B_t=\int_0^t\sigma_s^{-1}\,dM_s$, constructed as the localized $L^2$ limit of left-step sums, has a continuous version with $[B^i,B^j]_t=\delta_{ij}t$. Consequently $B$ is a standard $d$-dimensional Brownian motion relative to the given filtration.

## Statement references

[Vector Lévy characterization](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf): identifies a continuous local martingale with identity bracket as Brownian motion; the local proof below supplies the inverse-matrix integral construction.

## Facts & Assumptions

**Given:** the filtered probability space and processes in the statement, the Axiom of Choice, the elementary definition of stochastic integration by predictable step sums, the $L^2$ martingale maximal inequality, and completeness of $L^2$.

[A1] The vector Lévy characterization requires AC; a continuous adapted local martingale starting at zero with covariations $[B^i,B^j]_t=\delta_{ij}t$ is standard vector Brownian motion, including independence of each increment from the earlier sigma-algebra. [[def-axiom-of-choice]] [[cor-vector-levy-characterization]]

[F1] An adapted continuous process is predictable, so the continuous matrix process $H_t=\sigma_t^{-1}$ and its bounded left-step approximations are admissible predictable integrands. [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-progressively-measurable-and-predictable-process]]

[F2] For a square-integrable martingale, Doob's $L^2$ inequality bounds the expected squared path supremum by four times the terminal second moment; $L^2$ is complete and the continuous-time supremum follows by applying the discrete inequality on finite rational grids and taking their increasing union. [[thm-doob-lp-maximal-inequality]] [[thm-riesz-fischer-completeness-of-l-p]]

[F3] Conditional expectation is an $L^1$ contraction, so martingale identities pass to $L^1$ limits. [[def-conditional-expectation-as-an-ae-class]]

[F4] A continuous local martingale has continuous covariations, and each product minus its covariation is a local martingale. For bounded continuous adapted integrands, left-step sums define the stochastic integral and its bracket is the corresponding integral against the martingale bracket. [[lem-continuous-local-martingale-quadratic-variation]]

## Proof
**Given:** AC, $M$, and $\sigma$ as in the statement. Put $H=\sigma^{-1}$ and localize at stopping times $\tau_n$ for which $M^{\tau_n}$ is square-integrable and $E\operatorname{tr}[M]_{T\wedge\tau_n}<\infty$; such a sequence exists by the local-martingale and local-square-integrability hypotheses. On $[0,T\wedge\tau_n]$, use deterministic partitions with mesh tending to zero and the left-step processes $H^{(m)}_s=H_{t_k}$ on $(t_k,t_{k+1}]$, stopped at $\tau_n$.

1.1 Each $H^{(m)}$ is bounded and predictable by [F1]. For a bounded predictable step matrix $G$, define $I^G_t=\sum_kG_{t_k}(M_{t\wedge t_{k+1}}-M_{t\wedge t_k})$, with the final interval stopped at $\tau_n$. Expanding the finite sum, using the martingale increment identities and product-compensator identity [F4], gives $\displaystyle E|I^G_T|^2=E\int_0^{T\wedge\tau_n}\operatorname{tr}(G_s\,d[M]_s\,G_s^{\mathsf T}).$ For two such integrands the same identity applies to their difference; Doob's inequality [F2] therefore bounds $E\sup_{t\le T}|I^{H^{(m)}}_t-I^{H^{(k)}}_t|^2$ by four times the displayed energy of $H^{(m)}-H^{(k)}$. The latter tends to zero: continuity gives uniform pathwise convergence of the left-step matrices to $H$, while $\|H^{(m)}-H^{(k)}\|\le2C$ and the stopped bracket has integrable trace, so dominated convergence applies. The Cauchy bound for the path suprema gives a uniform-in-probability limit. Choose a subsequence whose successive expected squared sup errors are at most $2^{-4k}$; Markov's inequality and the union bound show that it converges uniformly almost surely, giving a continuous adapted version $B^{(n)}$ on the stopped interval. [F1, F4, F2, F3]

2.1 For a bounded step integrand, quadratic sums on each step interval are the corresponding fixed linear combinations of the sums for $M$; the covariation limit [F4] therefore gives $[I^G]=\int G\,d[M]\,G^{\mathsf T}$. The product-compensator identity [F4] says each pair of coordinates of $I^G$ has product minus this bracket a martingale. The $L^2$ convergence in step 1.1 gives $L^1$ convergence of products by Cauchy–Schwarz, and the integrals of brackets converge in $L^1$ by dominated convergence. Hence the limit has bracket $\displaystyle [B^{(n)}]_t=\int_0^{t\wedge\tau_n}H_s\,d[M]_s\,H_s^{\mathsf T}.$ The stopped constructions agree on overlapping stopped intervals because their defining sums agree there; letting $n\to\infty$ defines the continuous local martingale $B=\int H\,dM$ on $[0,T]$ with this bracket. [F4, step 1.1, F2, F3]

3.1 Substituting $H=\sigma^{-1}$ and the bracket from the statement gives $\displaystyle [B]_t=\int_0^t\sigma_s^{-1}\sigma_s\sigma_s^{\mathsf T}(\sigma_s^{-1})^{\mathsf T}\,ds=tI_d.$ Thus $B_0=0$, $B$ is continuous and adapted, and its coordinate brackets are $[B^i,B^j]_t=\delta_{ij}t$. Apply [A1] to conclude that $B$ is standard $d$-dimensional Brownian motion. [A1, step 2.1] ∎
