---
id: lem-qsm-energy-density-concentration
kind: lemma
title: Quantum spectral energy concentration at a differentiable pressure point
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 7
deps:
  - def-qsm-translation-invariant-spin-interaction
  - thm-qsm-quantum-lattice-pressure
  - lem-qsm-matrix-exponential-response
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_roles:
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  thm-qsm-quantum-lattice-pressure: mathematical-premise
  lem-qsm-matrix-exponential-response: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.4.12–3.4.15, pp. 78–81
      url: https://arxiv.org/pdf/1311.2717
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, Theorem 3.1, pp. 332–334
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
---

## Statement

Use the translation-invariant finite-range spin model and pressure $p_\Phi$ of [[thm-qsm-quantum-lattice-pressure]]. Let $\beta>0$ and suppose $p_\Phi$ is differentiable at $\beta$. Put $e_\Phi(\beta):=-p_\Phi'(\beta)$, which has units joules per site when $\beta$ is measured in inverse joules. For each nonempty finite region $\Lambda$, let $\rho_{\Lambda,\beta}=e^{-\beta H_\Lambda}/Z_\Lambda(\beta)$ and define its energy spectral probability measure by $\mu_{\Lambda,\beta}(C)=\operatorname{Tr}_{\Lambda}(\rho_{\Lambda,\beta}E_{H_\Lambda}(C))$, where $E_{H_\Lambda}(C)$ is the sum of the orthogonal eigenspace projections of $H_\Lambda$ with eigenvalues in the Borel set $C\subseteq\mathbb R$. Its finite-volume mean energy density is $m_{\Lambda,\beta}:=|\Lambda|^{-1}\operatorname{Tr}_{\Lambda}(\rho_{\Lambda,\beta}H_\Lambda)$.

For every van Hove sequence $(\Lambda_n)$ and every $\epsilon>0$, $m_{\Lambda_n,\beta}\to e_\Phi(\beta)$ and there are constants $c_\epsilon>0$ and $n_0$ such that
$$
\mu_{\Lambda_n,\beta}\!\left(\left\{E:\left|E/|\Lambda_n|-e_\Phi(\beta)\right|\ge\epsilon\right\}\right)\le e^{-c_\epsilon|\Lambda_n|}\qquad(n\ge n_0).
$$
This is a statement about the finite-volume Gibbs spectral distribution under the declared mathematical model; it supplies no empirical observation.

## Facts & Assumptions

**Given:** $\beta>0$, the model of [[def-qsm-translation-invariant-spin-interaction]], and differentiability of its limiting pressure at $\beta$.

[F1] [[thm-qsm-quantum-lattice-pressure]]: for each $\gamma>0$, $p_{\Lambda_n}(\gamma)=|\Lambda_n|^{-1}\log Z_{\Lambda_n}(\gamma)$ converges to the finite $p_\Phi(\gamma)$ along every van Hove sequence.

[F2] [[lem-qsm-matrix-exponential-response]]: along a finite-dimensional Hermitian matrix path $M(s)$, $\frac{d}{ds}\log\operatorname{Tr}(e^{M(s)})=\operatorname{Tr}(\rho_sM'(s))$ with $\rho_s=e^{M(s)}/\operatorname{Tr}(e^{M(s)})$. Only this first-derivative identity is used here.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every finite-dimensional self-adjoint matrix has an orthonormal eigenbasis with real eigenvalues.

## Proof

**Proof technique:** convex secants and exponential Markov bounds for the finite spectral law.

**Given:** [F1]–[F3], $\beta>0$, differentiability of $p_\Phi$ at $\beta$, and $\epsilon>0$.

1.1 For nonempty finite $\Lambda$, diagonalize $H_\Lambda$ using [F3], with eigenvalues $E_j$ and Gibbs weights $w_j=e^{-\beta E_j}/Z_\Lambda(\beta)$. Then $p_\Lambda(\beta)=|\Lambda|^{-1}\log\sum_j e^{-\beta E_j}$ is convex because $p_\Lambda''(\beta)=|\Lambda|^{-1}\bigl(\sum_jw_jE_j^2-(\sum_jw_jE_j)^2\bigr)=|\Lambda|^{-1}\sum_jw_j(E_j-\sum_kw_kE_k)^2\ge0$. Applying [F2] to $M(\beta)=-\beta H_\Lambda$ also gives $p_\Lambda'(\beta)=-\operatorname{Tr}(\rho_{\Lambda,\beta}H_\Lambda)/|\Lambda|$. [F2, F3, algebra]

1.2 For nonempty finite $\Lambda$, the measure $\mu_{\Lambda,\beta}$ assigns weight $w_j$ to each eigenvalue, combining weights when eigenvalues coincide, and is a probability measure because $\sum_jw_j=1$. For $t\in(0,\beta)$ and $e=e_\Phi(\beta)$, each eigenvalue $E\ge|\Lambda|(e+\epsilon)$ satisfies $e^{tE}\ge e^{t|\Lambda|(e+\epsilon)}$. Summing the corresponding weights gives $$ \mu_{\Lambda,\beta}\{E/|\Lambda|\ge e+\epsilon\}\le\exp\!\left(|\Lambda|\,[p_\Lambda(\beta-t)-p_\Lambda(\beta)-t(e+\epsilon)]\right). $$ The identity $\sum_jw_je^{tE_j}=Z_\Lambda(\beta-t)/Z_\Lambda(\beta)$ gives the displayed exponent. [given, F3, algebra]

2.1 Fix $h\in(0,\beta)$. Convexity in step 1.1 gives $(p_\Lambda(\beta)-p_\Lambda(\beta-h))/h\le p_\Lambda'(\beta)\le(p_\Lambda(\beta+h)-p_\Lambda(\beta))/h$. Along $\Lambda_n$, [F1] makes the two secants converge for fixed $h$ to the corresponding secants of $p_\Phi$. Letting $h\downarrow0$ and using differentiability at $\beta$ squeezes $p_{\Lambda_n}'(\beta)\to p_\Phi'(\beta)$; step 1.1 therefore proves $\operatorname{Tr}(\rho_{\Lambda_n,\beta}H_{\Lambda_n})/|\Lambda_n|\to e_\Phi(\beta)$. [F1, step 1.1, algebra]

2.2 Differentiability and $e=-p_\Phi'(\beta)$ give $p_\Phi(\beta-t)-p_\Phi(\beta)=te+o(t)$ as $t\downarrow0$. Choose $t\in(0,\beta)$ so the remainder has magnitude at most $t\epsilon/2$. For all sufficiently large $n$, convergence in [F1] at $\beta-t$ and $\beta$ makes the exponent bracket in step 1.2 at most $-t\epsilon/4$. Thus the upper-tail probability is at most $e^{-t\epsilon|\Lambda_n|/4}$. [F1, step 1.2, algebra]

3.1 For the lower tail, if $E\le|\Lambda|(e-\epsilon)$ then $e^{-tE}\ge e^{-t|\Lambda|(e-\epsilon)}$. The same finite spectral sum gives $$ \mu_{\Lambda,\beta}\{E/|\Lambda|\le e-\epsilon\}\le\exp\!\left(|\Lambda|\,[p_\Lambda(\beta+t)-p_\Lambda(\beta)+t(e-\epsilon)]\right). $$ Since $p_\Phi(\beta+t)-p_\Phi(\beta)=-te+o(t)$, choose a possibly smaller fixed $t>0$ so the limiting bracket is at most $-t\epsilon/2$; for large $n$ the bracket is at most $-t\epsilon/4$. Let $t_+$ be the choice in step 2.2, let $t_-$ be this lower-tail choice, and set $c_0=\min(t_+,t_-)\epsilon/4>0$. Once $|\Lambda_n|\ge4\log2/c_0$, the sum of the two tail bounds $2e^{-c_0|\Lambda_n|}$ is at most $e^{-c_0|\Lambda_n|/2}$; hence $c_\epsilon=c_0/2$ works after increasing $n_0$. [F1, F3, step 2.2, algebra] ∎
