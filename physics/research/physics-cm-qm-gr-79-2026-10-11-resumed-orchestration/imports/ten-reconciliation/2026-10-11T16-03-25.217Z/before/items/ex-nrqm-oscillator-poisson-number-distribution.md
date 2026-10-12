---
id: ex-nrqm-oscillator-poisson-number-distribution
aliases: [nrqm-oscillator-example-poisson-number-distribution]
kind: example
domain: mathematics
title: "Poisson number distribution"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-oscillator-coherent-state-convergence, thm-nrqm-oscillator-hermite-orthogonality, lem-nrqm-oscillator-closed-ladder-domains, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
dependency_roles:
  thm-nrqm-oscillator-coherent-state-convergence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §4.4 pp. 33-36 (coherent states in the energy basis and the Poisson distribution)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (number basis of the oscillator)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $(g_n)_{n\in\mathbb N}$ be the Hermite family of $L^2(\mathbb R,dy)$, $N=a^\dagger a$ the number operator of [[lem-nrqm-oscillator-closed-ladder-domains]], and for $z\in\mathbb C$ let $\psi_z=e^{-|z|^2/2}\sum_n\frac{z^n}{\sqrt{n!}}g_n$ be the coherent vector of [[thm-nrqm-oscillator-coherent-state-convergence]]. Define

$$p_n:=|\langle g_n,\psi_z\rangle|^2=e^{-|z|^2}\frac{|z|^{2n}}{n!}\qquad(n\in\mathbb N).$$

Then:

(a) $(p_n)_{n\in\mathbb N}$ is a probability distribution on $\mathbb N$: $p_n\ge0$ and $\sum_np_n=1$;

(b) $\langle N\rangle:=\langle N\psi_z,\psi_z\rangle=\sum_nn\,p_n=|z|^2$;

(c) $\operatorname{Var}(N):=\langle(N-|z|^2I)^2\psi_z,\psi_z\rangle=\sum_n(n-|z|^2)^2p_n=|z|^2$;

(d) the distribution is the Poisson distribution with parameter $\lambda=|z|^2$, and it is nontrivial for every $z\ne0$: $p_n>0$ for all $n$.

## Facts & Assumptions

**Given:** the coherent vector $\psi_z$ with coefficients $c_n=e^{-|z|^2/2}z^n/\sqrt{n!}$ in the orthonormal family $(g_n)$; the numbers $p_n=|c_n|^2$.

[F1] $\langle g_n,g_m\rangle=\delta_{nm}$ and $c_n=\langle g_n,\psi_z\rangle$ with $\psi_z=e^{-|z|^2/2}\sum_n\frac{z^n}{\sqrt{n!}}g_n$; $\langle N\psi_z,\psi_z\rangle=|z|^2$; $\psi_z\in D(N^k)$ for every $k$ ([[thm-nrqm-oscillator-coherent-state-convergence]](a),(b),(e), [[thm-nrqm-oscillator-hermite-orthogonality]](a)).

[F2] For $t=|z|^2\ge0$, $\sum_{n\ge0}\frac{t^n}{n!}=e^t$ and the series converges absolutely ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]).

[F3] For an orthonormal family, $\langle N\psi_z,\psi_z\rangle=\sum_nn|c_n|^2$ and, for $\psi_z\in D(N^2)$, $\langle(N-|z|^2I)^2\psi_z,\psi_z\rangle=\sum_n(n-|z|^2)^2|c_n|^2$; these are the coefficient formulas of the diagonal operator on the orthonormal family ([[thm-nrqm-oscillator-coherent-state-convergence]] and [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Verification

1.1 [(a) probability distribution] $p_n=|c_n|^2=e^{-|z|^2}|z|^{2n}/n!\ge0$, and $\sum_np_n=e^{-|z|^2}\sum_n\frac{(|z|^2)^n}{n!}=e^{-|z|^2}e^{|z|^2}=1$ by [F2]. [F1, F2, algebra]

1.2 [(b) mean] By [F3] and [F1], $\sum_nnp_n=\sum_nn|c_n|^2=\langle N\psi_z,\psi_z\rangle=|z|^2$. [F1, F3]

1.3 [(c) variance] Expanding $(N-|z|^2I)^2=N^2-2|z|^2N+|z|^4I$ and using [F3], $\sum_n(n-|z|^2)^2p_n=e^{-|z|^2}\sum_n(n^2-2|z|^2n+|z|^4)\frac{|z|^{2n}}{n!}$. With $t=|z|^2$, the three series are $\sum_nn^2\frac{t^n}{n!}=(t^2+t)e^t$, $\sum_nn\frac{t^n}{n!}=te^t$ and $\sum_n\frac{t^n}{n!}=e^t$, obtained from the absolutely convergent exponential series by reindexing ($\sum_{n\ge1}\frac{n\,t^n}{n!}=t\sum_{m\ge0}\frac{t^m}{m!}$ and $\sum_{n\ge2}\frac{n(n-1)t^n}{n!}=t^2\sum_{m\ge0}\frac{t^m}{m!}$); multiplying by $e^{-t}$ gives $(t^2+t)-2t^2+t^2=t=|z|^2$. [F2, F3, algebra]

2.1 [(d) Poisson form] By (a)-(c) the distribution has total mass $1$, mean $|z|^2=\lambda$ and variance $|z|^2=\lambda$, and its weights are $e^{-\lambda}\lambda^n/n!$, which is the Poisson distribution with parameter $\lambda$; if $z\ne0$ then $\lambda>0$ and $p_n>0$ for every $n$, so no outcome is excluded. [step 1.1, step 1.2, step 1.3] ∎
