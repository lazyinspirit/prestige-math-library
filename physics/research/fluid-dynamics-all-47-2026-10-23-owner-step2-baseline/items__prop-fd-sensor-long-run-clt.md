---
id: prop-fd-sensor-long-run-clt
kind: proposition
title: Long-run central limit theorem for a dependent velocity sensor
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-random-velocity-sensor-law
  - lem-fd-sensor-pairing-is-well-defined
  - def-axiom-of-choice
  - thm-mcmc-clt-sufficient-regimes
  - def-long-run-variance-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-phi-irreducible-chain
  - def-general-state-aperiodic-markov-chain
  - def-harris-recurrent-markov-chain
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-polynomial-ergodicity-with-integrable-rate-envelope
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-total-variation-distance-for-probability-laws
  - def-ergodic-measure-preserving-system
  - def-measure-preserving-transformation-and-system
  - thm-strong-mixing-clt-with-moment-conditions
  - def-mixing-coefficients-for-stationary-markov-chain
dependency_roles:
  def-mixing-coefficients-for-stationary-markov-chain: mathematical-premise
  thm-strong-mixing-clt-with-moment-conditions: mathematical-premise
  def-fd-random-velocity-sensor-law: mathematical-premise
  lem-fd-sensor-pairing-is-well-defined: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-mcmc-clt-sufficient-regimes: mathematical-premise
  def-long-run-variance-for-stationary-markov-chain: mathematical-premise
  def-measure-kernel-and-probability-kernel: mathematical-premise
  def-time-homogeneous-markov-chain-with-transition-kernel: mathematical-premise
  def-invariant-and-stationary-distribution-for-a-markov-kernel: mathematical-premise
  def-phi-irreducible-chain: mathematical-premise
  def-general-state-aperiodic-markov-chain: mathematical-premise
  def-harris-recurrent-markov-chain: mathematical-premise
  def-geometric-and-uniform-ergodicity-for-mcmc-clt: mathematical-premise
  def-polynomial-ergodicity-with-integrable-rate-envelope: mathematical-premise
  def-general-state-reversibility-by-symmetric-flow-measure: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-total-variation-distance-for-probability-laws: mathematical-premise
  def-ergodic-measure-preserving-system: mathematical-premise
  def-measure-preserving-transformation-and-system: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: AC is explicit in both the general strong-mixing and retained MCMC CLT suppliers; no stronger choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, arXiv:math/0409112v2
      url: https://arxiv.org/pdf/math/0409112
      locator: Section 4.1, Theorem 9 and Corollaries 1–5, PDF pp. 9–12.
    - title: Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes
      url: https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf
      locator: Sections 4.8.1–4.9, printed pp. 132–135.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $H$ and the centered sensor observable $f_\psi:H\to\mathbb R$ be as in the Definition. **General stationary sensor branch.** Let $(V_k)_{k\ge0}$ be $H$-valued random variables with marginal law $\mu$ and put $Y_k=f_\psi(V_k)$. More generally, take any centered Borel scalar observable $g$ and put $Y_k=g(V_k)$, assuming $\mathbb E Y_0^2<\infty$. Assume $(Y_k)$ is strictly stationary: all its finite-dimensional laws are unchanged by common nonnegative integer shifts. Define
$$\alpha_Y(n):=\sup_{j\ge0}\ \sup_{\substack{A\in\sigma(Y_0,\ldots,Y_j)\\B\in\sigma(Y_{j+n},Y_{j+n+1},\ldots)}}|\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|.$$
Any one of the following is sufficient: $Y_0$ is essentially bounded and $\sum_n\alpha_Y(n)<\infty$; for some $\delta>0$, $\mathbb E|Y_0|^{2+\delta}<\infty$ and $\sum_n\alpha_Y(n)^{\delta/(2+\delta)}<\infty$; or $\alpha_Y(n)=O(r^n)$ for some $0<r<1$ and $\mathbb E[Y_0^2\log^+|Y_0|]<\infty$. In each case $\sum_{k\ge1}|\operatorname{Cov}(Y_0,Y_k)|<\infty$ and
$$n^{-1/2}\sum_{k=0}^{n-1}Y_k\Rightarrow N(0,\sigma_Y^2),\qquad \sigma_Y^2=\operatorname{Var}(Y_0)+2\sum_{k\ge1}\operatorname{Cov}(Y_0,Y_k)\ge0.$$
Zero variance is included. No Markov, Harris, reversibility or state-space countable-generation assumption is needed for this branch. For a Reynolds product sensor, apply this clause to the centered product itself; its $(2+\delta)$ moment is an additional hypothesis. For two bounded linear sensors on $H$, a finite $(4+2\delta)$ moment of $\|V_0\|_H$ is a sufficient product-moment condition. No mixing property or rate is inferred from a fluid equation or the sampling interval.

**Additional Markov-chain sufficient regimes.** Let $\mathcal B(H)$ be countably generated, let $P$ be a probability kernel on $(H,\mathcal B(H))$ with invariant probability $\mu$, and let $(V_k)_{k\ge0}$ be a stationary time-homogeneous $P$-chain whose canonical left shift preserves its path law and whose shift-invariant measurable events have probability zero or one. Assume $P$ is $\phi$-irreducible, aperiodic, and Harris recurrent for a nonzero sigma-finite measure $\phi$. Here $\phi$-irreducibility means each $\phi$-positive measurable set is reached with positive probability after some finite positive number of steps from every state; Harris recurrence means each such set is hit almost surely from every starting state; aperiodicity means there is no integer $q\ge2$ and pairwise disjoint measurable sets $H_1,\ldots,H_q$ with $\mu(H_1)>0$ and $P(v,H_{i+1})=1$ for every $v\in H_i$ and $1\le i<q$, and $P(v,H_1)=1$ for every $v\in H_q$. Invariant means $\mu P=\mu$.

For $k\ge0$, put $\gamma_k:=\operatorname{Cov}_{\mu}(f_\psi(V_0),f_\psi(V_k))$. Suppose at least one of the following six regimes holds:

1. For some $m>1$ there is a measurable $M\ge0$ with $\int_H M\,d\mu<\infty$ and $\|P^n(v,\cdot)-\mu\|_{\mathrm{TV}}\le M(v)n^{-m}$ for every $v$ and $n\ge1; $f_\psi$ is essentially bounded under $\mu$.
2. For some $m>0$ there is a measurable $M\ge0$ with $\int_H M\,d\mu<\infty$ and $\|P^n(v,\cdot)-\mu\|_{\mathrm{TV}}\le M(v)n^{-m}$ for every $v$ and $n\ge1; for some $\delta>0$, $f_\psi\in L^{2+\delta}(\mu)$ and $m\delta>2+\delta$.
3. $P$ is geometrically ergodic, meaning $\|P^n(v,\cdot)-\mu\|_{\mathrm{TV}}\le M(v)r^n$ for a finite measurable $M$ and some $0<r<1$, and $f_\psi\in L^{2+\delta}(\mu)$ for some $\delta>0$.
4. $P$ is geometrically ergodic in the same total-variation sense and $\int_H f_\psi^2\log^+|f_\psi|\,d\mu<\infty$, with $0\log^+0:=0$.
5. $P$ is geometrically ergodic in the same total-variation sense, is reversible in the symmetric-flow sense $\mu(dv)P(v,dw)=\mu(dw)P(w,dv)$, and $f_\psi\in L^2(\mu)$.
6. $P$ is uniformly ergodic, meaning the geometric total-variation bound holds with $M$ bounded on $H$, and $f_\psi\in L^2(\mu)$.

Then $\sum_{k\ge1}|\gamma_k|<\infty$ and
$$\frac1{\sqrt n}\sum_{k=0}^{n-1}f_\psi(V_k)\ \Rightarrow\ N(0,\sigma_{\mathrm{LR}}^2(f_\psi)),$$
where $\sigma_{\mathrm{LR}}^2(f_\psi):=\gamma_0+2\sum_{k=1}^{\infty}\gamma_k$ is the covariance long-run variance. Here $\|\alpha-\beta\|_{\mathrm{TV}}:=\sup_{A\in\mathcal B(H)}|\alpha(A)-\beta(A)|$, and $f\in L^p(\mu)$ for finite $p$ means $\int_H|f|^p\,d\mu<\infty$. Also set $\log^+t:=\max(0,\log t)$ for $t>0$ and $0\log^+0:=0$. The zero-variance case is included. This is an asymptotic model deduction; it does not make finite samples normally distributed or establish a physical sensor's stationarity, Markov property, or mixing assumptions. A central limit theorem alone is not a consistency result for an estimated Monte Carlo standard error.

## Statement references

[[thm-strong-mixing-clt-with-moment-conditions]]

[[def-mixing-coefficients-for-stationary-markov-chain]]

[[def-fd-random-velocity-sensor-law]]

[[lem-fd-sensor-pairing-is-well-defined]]

[[def-axiom-of-choice]]

[[thm-mcmc-clt-sufficient-regimes]]

[[def-long-run-variance-for-stationary-markov-chain]]

[[def-measure-kernel-and-probability-kernel]]

[[def-time-homogeneous-markov-chain-with-transition-kernel]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[[def-phi-irreducible-chain]]

[[def-general-state-aperiodic-markov-chain]]

[[def-harris-recurrent-markov-chain]]

[[def-geometric-and-uniform-ergodicity-for-mcmc-clt]]

[[def-polynomial-ergodicity-with-integrable-rate-envelope]]

[[def-general-state-reversibility-by-symmetric-flow-measure]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[def-total-variation-distance-for-probability-laws]]

[[def-ergodic-measure-preserving-system]]

[[def-measure-preserving-transformation-and-system]]

[Jones, On the Markov Chain Central Limit Theorem, Section 4.1](https://arxiv.org/pdf/math/0409112)

[Geyer, Markov Chain Monte Carlo Lecture Notes, Sections 4.8.1–4.9](https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf)

## Facts & Assumptions

**Given:** The sensor law, centered observable, choice assumption, stationary Harris-ergodic Markov chain, invariant probability, and any one of the six sufficient regimes in the Statement.

[A1] The Axiom of Choice is assumed explicitly; the MCMC supplier uses it through its probability, conditional-expectation, and sequence-CLT interfaces ([[def-axiom-of-choice]]).

[F1] The sensor pairing is a Borel, centered, square-integrable observable for every finite-second-moment law and weight ([[lem-fd-sensor-pairing-is-well-defined]]).

[F2] Under the stated base hypotheses and any one of the six listed regimes, the MCMC theorem proves absolute covariance summability and the normal limit with variance equal to the covariance sum ([[thm-mcmc-clt-sufficient-regimes]]).

[F3] Once the CLT and absolute covariance summability hold, the covariance long-run variance is $\gamma_0+2\sum_{k\ge1}\gamma_k$ ([[def-long-run-variance-for-stationary-markov-chain]]).

[F4] Under AC, a centered strictly stationary square-integrable real sequence satisfies the covariance-sum CLT under each of the three strong-mixing/moment conditions stated in the general branch ([[thm-strong-mixing-clt-with-moment-conditions]]). The event-supremum coefficient is that of [[def-mixing-coefficients-for-stationary-markov-chain]].

## Proof

**Given:** The hypotheses and notation of the selected general stationary or Markov branch of the Statement.

1.1 In the Markov branch, [F1] makes $f_\psi$ Borel, centered under $\mu$, and square-integrable. The state-space, kernel, invariance, stationarity, path-shift, and recurrence assumptions are exactly those required by [F2]; the Statement spells out the rate, reversibility, and moment hypotheses for each of its six cases. [A1, F1, F2, given]

1.2 In the general branch, the sensor lemma [F1] supplies centering and square-integrability for $g=f_\psi$; for the other $g$ these are explicit hypotheses. Strict stationarity and the selected mixing/moment condition are also hypotheses, so [A1] and [F4] give absolute covariance summability, nonnegativity of its sum, and the normal limit for $n^{-1/2}\sum_{k=1}^nY_k$. Strict stationarity makes this sum have the same law as $n^{-1/2}\sum_{k=0}^{n-1}Y_k$, giving the stated convention. [A1, F1, F4, given]

2.1 In that Markov branch, apply [F2] to the chain $(V_k)$ and observable $f_\psi$. It gives $\sum_{k\ge1}|\gamma_k|<\infty$ and the stated centered normal limit with variance equal to the covariance sum; [F3] identifies that sum with $\sigma_{\mathrm{LR}}^2(f_\psi)$. The supplier includes the zero-variance limit and assumes AC explicitly. [A1, F2, F3, step 1.1, given]

3.1 For sensor weights $\psi,\chi$, [F1] bounds $|S_\psi(v)S_\chi(v)|\le\|\psi\|_H\|\chi\|_H\|v\|_H^2$. Raising this inequality to $2+\delta$ proves the sufficient $(4+2\delta)$ state moment. Its finite expectation makes the product integrable; subtracting its finite mean preserves its $(2+\delta)$ moment by $|a-b|^{2+\delta}\le2^{1+\delta}(|a|^{2+\delta}+|b|^{2+\delta})$. The actual mixing condition must still be supplied for this centered product process. Thus both the original Markov regimes and the general stationary/product branches follow without a finite-sample or physical mixing claim. [F1, step 2.1, step 1.2, given, algebra] ∎

