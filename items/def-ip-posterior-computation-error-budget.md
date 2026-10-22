---
id: def-ip-posterior-computation-error-budget
kind: definition
title: Posterior computation error budget
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-statistical-and-computational-error-ledger
  - def-time-homogeneous-markov-chain-with-transition-kernel
justified_by: []
forward_refs: []
axiom_use: >-
  The reference-chain bookkeeping is choice-free. AC is assumed only through
  the library's time-homogeneous Markov-chain interface, which supplies
  conditional-probability classes; the definition makes no chain-existence
  assertion and selects no sample paths.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems, full lecture notes, arXiv:1302.6989v4"
      url: https://arxiv.org/pdf/1302.6989
      locator: "§4.2, Assumptions 4.7 and Theorems 4.8–4.9 (PDF pp. 40–43): posterior changes caused by a potential approximation and the hypotheses needed for a Hellinger rate."
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster"
      url: https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf
      locator: "§4.2, pCN proposal (4.7)–(4.11), and §6.1, Theorem 6.2: exact invariant-kernel context for function-space posterior computation."
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes"
      url: https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf
      locator: "§1.6.2, equation (1.9) and the following caution (printed pp. 8–11; PDF pp. 12–15): stationary-chain variance of a sample mean and limits on CLT conclusions."
---

## Definition

Fix a measurable space $(E,\mathcal E)$ and a bounded measurable functional
$f:E\to\mathbb R$, with $\|f\|_\infty:=\sup_{x\in E}|f(x)|<\infty$. All
target laws below are probability measures on this same space. If a model or
discretization originally uses another state space, specify its measurable
embedding into $E$ and compare its pushforward law; no identification of
different state spaces is implicit. A **posterior law** here is the probability
law for the unknown at the specified computation stage, conditional on the same
fixed observed data. For a probability law $\mu$, write
$\mu(f):=\int_E f\,d\mu$.

Name the successive posterior laws as follows: $\mu_\star$ is the intended
target; $\mu_{\rm model}$ is the posterior under the selected statistical or
physical model; $\mu_{\rm solver}$ is the posterior after replacing the exact
forward or PDE solution by the declared numerical solver output; and
$\mu_{\rm disc}$ is the posterior after the declared finite-dimensional
discretization. These labels refer to the exact adjacent laws recorded for the
computation, even when two stages happen to agree.

Let $K$ be the implemented probability kernel on $(E,\mathcal E)$. An
**invariant law** $\pi_K$ for $K$ is a probability measure satisfying
$$\int_E K(x,A)\,\pi_K(dx)=\pi_K(A)\qquad(A\in\mathcal E).$$
Choose and report which invariant law is used if $K$ has more than one. If no
invariant law has been established, the invariant-kernel and burn-in terms
below are unavailable; they are not set to zero. Let $(X_n)_{n\ge0}$ be a
time-homogeneous Markov chain with transition kernel $K$ relative to its
natural filtration, with initial probability law $\lambda$. For burn-in length
$b\in\{0,1,2,\ldots\}$ and retained sample size $N\in\{1,2,3,\ldots\}$, set
$$\bar f_{b,N}:=\frac1N\sum_{j=1}^N f(X_{b+j}),$$
and let $\mathbb E_\lambda$ denote expectation under this initial law and the
chain's transition randomness.

When all stages are present, define the component errors
$$\begin{aligned}\delta_{\rm model}&:=|\mu_\star(f)-\mu_{\rm model}(f)|,\\ \delta_{\rm solver}&:=|\mu_{\rm model}(f)-\mu_{\rm solver}(f)|,\\ \delta_{\rm disc}&:=|\mu_{\rm solver}(f)-\mu_{\rm disc}(f)|,\\ \delta_K&:=|\mu_{\rm disc}(f)-\pi_K(f)|,\\ \delta_{\rm burn}&:=|\pi_K(f)-\mathbb E_\lambda\bar f_{b,N}|,\\ \delta_{\rm MC}&:=|\mathbb E_\lambda\bar f_{b,N}-\bar f_{b,N}|.\end{aligned}$$
The last component is random and the earlier components are fixed for the
declared data and computation. The **posterior computation error budget** is
$$\mathcal B_f:=\delta_{\rm model}+\delta_{\rm solver}+\delta_{\rm disc}+\delta_K+\delta_{\rm burn}+\delta_{\rm MC}.$$
If a computation stops before one of these stages, report the shorter reference
chain and its component terms. The term $\delta_K$ measures the invariant-law
discrepancy induced by the implemented transition rule; it is not a one-step
distance between kernels. A one-step kernel error cannot replace it without a
separate perturbation theorem with its own hypotheses.

The successive scalar references are arranged as this directed error chain;
each arrow is labelled by the absolute difference of its endpoints.

```tikzcd
\mu_\star(f) \arrow[r, "\delta_{\rm model}"] &
\mu_{\rm model}(f) \arrow[r, "\delta_{\rm solver}"] &
\mu_{\rm solver}(f) \arrow[r, "\delta_{\rm disc}"] &
\mu_{\rm disc}(f) \arrow[r, "\delta_K"] &
\pi_K(f) \arrow[r, "\delta_{\rm burn}"] &
\mathbb E_\lambda\bar f_{b,N} \arrow[r, "\delta_{\rm MC}"] &
\bar f_{b,N}
```

The budget is a bookkeeping bound only when its components are supplied with
estimators or verified bounds; an unavailable component is reported as
unquantified rather than silently set to zero. In particular, invariance alone
does not provide a burn-in estimate, a mixing rate, or a Monte Carlo error
estimate.

## Definition references

[[def-probability-measure|A probability measure is a measure of total mass one.]]

[[def-expectation-of-a-nonnegative-or-integrable-random-variable|A bounded functional has a finite expectation under a probability law.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has probability-measure rows and measurable event evaluations.]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel|An invariant law satisfies $\pi K=\pi$ on every measurable event.]]

[[def-time-homogeneous-markov-chain-with-transition-kernel|A Markov chain has the stated kernel as its conditional one-step law relative to its filtration.]]

[[def-statistical-and-computational-error-ledger|A scalar error ledger names successive reference targets and signed adjacent-stage errors.]]

[Dashti and Stuart, full lecture notes, §4.2](https://arxiv.org/pdf/1302.6989)

[Geyer, full MCMC lecture notes, §1.6.2](https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf)
