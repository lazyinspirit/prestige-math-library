---
id: lem-qsm-models-diagonal-occupation-trace
kind: lemma
title: "Explicit diagonal Fock domains and occupation trace"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - def-absolute-value-and-singular-values-of-a-compact-operator
  - lem-positive-square-root-of-a-compact-positive-operator
  - lem-qsm-fock-occupation-basis-and-car-relations
  - def-tdmath-countable-canonical-model
  - thm-tdmath-summable-canonical-differentiation
  - lem-tdmath-bose-fermi-mode-fluctuations
  - thm-tdmath-grand-response-covariance
  - lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma
  - thm-nrqm-oscillator-hermite-completeness
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  def-absolute-value-and-singular-values-of-a-compact-operator: mathematical-premise
  lem-positive-square-root-of-a-compact-positive-operator: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  def-tdmath-countable-canonical-model: mathematical-premise
  thm-tdmath-summable-canonical-differentiation: mathematical-premise
  lem-tdmath-bose-fermi-mode-fluctuations: mathematical-premise
  thm-tdmath-grand-response-covariance: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-hermite-completeness: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.4–3.6.2"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lectures 22–25"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf"
---

## Statement

Assume [[def-countable-choice]]. Let $I$ be finite or countably infinite with a specified enumeration, let $m\in\Omega_\pm$ be the occupation configurations of [[lem-qsm-fock-occupation-basis-and-car-relations]], and let $\epsilon_j\in\mathbb R$ be finite mode energies. For each finite-support configuration put
$$
E(m):=\sum_j\epsilon_jm_j,\qquad N(m):=|m|=\sum_jm_j.
$$
These are finite sums. On $\ell^2(\Omega_\pm)$, define the real diagonal multipliers
$$
D(H)=\left\{c:\sum_mE(m)^2|c_m|^2<\infty\right\},\quad (Hc)_m=E(m)c_m,
$$
$$
D(N)=\left\{c:\sum_m|m|^2|c_m|^2<\infty\right\},\quad (Nc)_m=|m|c_m,
$$
and, for $\mu\in\mathbb R$,
$$
D(K_\mu)=\left\{c:\sum_m|E(m)-\mu|m||^2|c_m|^2<\infty\right\},\quad (K_\mu c)_m=(E(m)-\mu|m|)c_m.
$$
Each is self-adjoint on its displayed domain. No equality between $D(K_\mu)$ and $D(H)\cap D(N)$ is asserted.

For $\beta>0$, set $q_j=e^{-\beta(\epsilon_j-\mu)}$. In the bosonic case assume
$$
0<q_j<1,\qquad q_*:=\sup_jq_j<1,\qquad \sum_jq_j<\infty;
$$
Here $q_*=0$ by convention when $I$ is empty; for nonempty $I$ the displayed supremum is unchanged. In the fermionic case assume $q_j>0$, $\sum_jq_j<\infty$, and only finitely many gaps $\epsilon_j-\mu$ are negative. Define the positive diagonal multiplier $G_{\beta,\mu}$ by $G_{\beta,\mu}|m\rangle=e^{-\beta(E(m)-\mu|m|)}|m\rangle$. Then $G_{\beta,\mu}$ is trace class, with
$$
\Xi_B=\operatorname{Tr}G_{\beta,\mu}=\prod_j(1-q_j)^{-1}<\infty,\qquad \Xi_F=\operatorname{Tr}G_{\beta,\mu}=\prod_j(1+q_j)<\infty.
$$
Thus $\rho_{\beta,\mu}=\Xi^{-1}G_{\beta,\mu}$ is a positive trace-class operator of trace one. Its finite-mode marginals are independent: bosonic occupation $n_j\in\mathbb N_0$ has law $(1-q_j)q_j^{n_j}$, and fermionic occupation $n_j\in\{0,1\}$ has probabilities $(1+q_j)^{-1}$ and $q_j(1+q_j)^{-1}$. In particular
$$
\mathbb E_BN_j=\frac{q_j}{1-q_j},\quad \operatorname{Var}_B(N_j)=\frac{q_j}{(1-q_j)^2},\qquad \mathbb E_FN_j=\frac{q_j}{1+q_j},\quad \operatorname{Var}_F(N_j)=\frac{q_j}{(1+q_j)^2}.
$$
The total number has finite mean and variance under the stated mode conditions. The trace hypotheses alone do not imply finite energy moments or differentiability in $\beta,\mu$.

For an additional compact-parameter envelope, the corresponding response identities hold. For fixed $\mu$, let $J\subset(0,\infty)$ be a nonempty open interval. If for every compact $B\subset J$ a summable $(a_m)$ satisfies $(1+|E(m)-\mu|m||^2)e^{-\beta(E(m)-\mu|m|)}\le a_m$ for all $m$ and $\beta\in B$, then throughout $J$, $-\partial_\beta\log\Xi=\mathbb E(K_\mu)$ and $\partial_\beta^2\log\Xi=\operatorname{Var}(K_\mu)$. If $(\beta,\mu)$ varies over an open set and a summable compact-parameter envelope dominates $e^{-\beta(E(m)-\mu|m|)}(1+|E(m)|^2+|m|^2)$, then at fixed $\beta$, $\partial_\mu\mathbb E(N)=\beta\operatorname{Var}(N)$ and $\partial_\mu\mathbb E(E)=\beta\operatorname{Cov}(E,N)$. These stronger moment envelopes are additional hypotheses, not consequences of trace-class normalization.

For a finite mode set $J$, the canonical fixed-number coefficients are defined by
$$
\prod_{j\in J}(1-ze^{-\beta\epsilon_j})^{-1}=\sum_{N\ge0}Z_{B,N}(J)z^N,\qquad \prod_{j\in J}(1+ze^{-\beta\epsilon_j})=\sum_{N=0}^{|J|}Z_{F,N}(J)z^N.
$$
Each coefficient is the sum of the Boltzmann weights over the corresponding number sector; for a countable mode set it is the increasing limit over finite mode sets and is finite under the stated grand-trace hypotheses. A fixed-number law is the grand law conditioned on total number, so its occupations are generally coupled. The oscillator specialization uses the actual one-particle Hermite basis and diagonal domain of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], not a formal differential eigenfunction list.

## Facts & Assumptions

**Given:** Countable mode configurations and the bosonic/fermionic occupation bases.

[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]], Statement: $\Omega_B$ and $\Omega_F$ are countable configuration sets, their occupation vectors are complete orthonormal bases, and the CCR/CAR shifts have the displayed domains and laws.

[F2] [[def-tdmath-countable-canonical-model]], Definition: a countable canonical model has partition sum $Z(\beta)=\sum_i g_i e^{-\beta E_i}$, normalized weights when $0<Z<\infty$, and expectations on their absolute-moment domains.

[F3] [[thm-tdmath-summable-canonical-differentiation]], Statement: on an open parameter interval, the compact local envelope $g_i(1+|E_i|^2)e^{-\beta E_i}\le a_i\in\ell^1$ makes $Z$ positive finite and $C^2$, with $-\partial_\beta\log Z=\mathbb E(E)$ and $\partial_\beta^2\log Z=\operatorname{Var}(E)$.

[F4] [[lem-tdmath-bose-fermi-mode-fluctuations]], Statement: for $q\in(0,1)$, the geometric law $(1-q)q^n$ has mean $q/(1-q)$ and variance $q/(1-q)^2$; the two-state law with weights $(1,q)/(1+q)$ has mean $q/(1+q)$ and variance $q/(1+q)^2$.

[F5] [[thm-tdmath-grand-response-covariance]], Statement: for a measurable exponential family with a compact-parameter integrable envelope dominating the exponential times $1+\sum_a|X_a|^2$, derivatives of $\log Z$ and expectations are means and covariances.

[F6] [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] and [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], Statements: the oscillator eigenbasis is complete and its self-adjoint diagonal operator has domain $\sum_n\hbar^2\omega^2(n+\tfrac12)^2|c_n|^2<\infty$, with eigenvalues $\hbar\omega(n+\tfrac12)$.

[F7] [[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]], [[lem-positive-square-root-of-a-compact-positive-operator]], and [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: for a positive compact diagonal operator, its absolute value is itself, its singular values are its nonnegative diagonal eigenvalues with multiplicity, summability makes it trace class, and its trace is their sum.

[F8] [[def-adjoint-of-a-densely-defined-unbounded-operator]]: the adjoint domain is determined by boundedness of the adjoint pairing on the dense operator domain; [[thm-cauchy-schwarz-in-an-inner-product-space]] bounds the coordinate pairing.

[A1] The mode energies and $\beta,\mu$ are finite real parameters; all q-summability and compact-envelope assumptions in the Statement are imposed exactly where used.

## Proof



1.1 The configuration set $\Omega_\pm$ is countable by [F1]. Every $m$ has finite support, so the sums defining $E(m)$ and $|m|$ are finite real sums. The finite-support vectors form a dense subspace of $\ell^2(\Omega_\pm)$. [given, F1, A1]

1.2 If $I$ is empty, its only occupation configuration is the vacuum: $E=N=K_\mu=0$, $G=I$ on $\mathbb C$, $\Xi=1$ and $\rho=1$. The empty products are one, the total number has mean and variance zero, and every stated parameter derivative is zero; the convention $q_*=0$ makes the bosonic hypotheses valid. For a finite mode set $J$, summing the positive diagonal weights independently over each bosonic coordinate gives $\prod_{j\in J}\sum_{n\ge0}q_j^n=\prod_{j\in J}(1-q_j)^{-1}$. In the fermionic case each coordinate has only two values and contributes $1+q_j$. This proves the finite-mode trace products. [given, A1, algebra]

1.3 For a fixed $\mu$, the countable configuration model has weights $e^{-\beta(E(m)-\mu|m|)}$ and degeneracies one. On the nonempty open interval $J$, the compact $\beta$-envelope in the Statement ensures that [F2]–[F3] apply to this exact countable index set and energy $K_\mu(m)$, giving the displayed beta-derivative identities and finite moments. The envelope is stronger than trace finiteness and is stated separately. [F2, F3, A1]

1.4 For joint $(\beta,\mu)$ response, put $X_1(m)=E(m)$, $X_2(m)=|m|$, and natural parameter $\theta=(-\beta,\beta\mu)$. The map $(\beta,\mu)\mapsto\theta$ is a smooth bijection onto its open image for $\beta>0$, with nonzero Jacobian. The stated joint envelope is exactly the required second-moment envelope for [F5]; differentiating at fixed $\beta$ gives $\partial_\mu\mathbb E(N)=\beta\operatorname{Var}(N)$ and $\partial_\mu\mathbb E(E)=\beta\operatorname{Cov}(E,N)$. [F5, A1, algebra]

2.1 Let $D_\lambda$ multiply the coordinate $c_m$ by a real number $\lambda_m$, on the domain $\sum_m\lambda_m^2|c_m|^2<\infty$. Testing the adjoint identity on each coordinate vector forces the adjoint coordinates to be $\lambda_m c_m$, so $D(D_\lambda^*)$ is exactly this weighted $\ell^2$ domain by [F8]. Conversely, on that domain Cauchy–Schwarz makes the coordinate pairing bounded and identifies the adjoint action with the same multiplier. Apply this argument to $\lambda_m=E(m)$, $|m|$, and $E(m)-\mu|m|$; all three displayed operators are self-adjoint. [step 1.1, A1, F8, algebra]

2.2 Enumerate a countable mode set by increasing finite initial sets $J_M$. Their finite-support configuration sets increase to $\Omega_\pm$, so the full nonnegative trace sum is the increasing limit of the finite-mode sums. For bosons, $-\log(1-q_j)=\int_0^{q_j}(1-u)^{-1}du\le q_j/(1-q_*)$, hence $\sum_j-\log(1-q_j)<\infty$. For fermions, $\log(1+q_j)\le q_j$, hence $\sum_j\log(1+q_j)<\infty$. The products therefore have finite positive limits and equal the full diagonal trace sums; the negative fermionic gaps are finite by hypothesis, and each has finite weight. [step 1.2, A1, algebra]

3.1 If $\Omega_\pm$ is infinite, enumerate it as $m_1,m_2,\ldots$ and let $G_M$ retain the first $M$ diagonal entries of $G_{\beta,\mu}$; in the finite case take the full finite sum. Each $G_M$ has finite rank and hence is compact. Since the omitted entries are nonnegative and summable, their supremum is bounded by their sum, so $\|G_{\beta,\mu}-G_M\|\le\sum_{r>M}e^{-\beta(E(m_r)-\mu|m_r|)}\to0$. The norm-limit theorem therefore makes $G_{\beta,\mu}$ compact. It is positive diagonal and satisfies $G_{\beta,\mu}^*G_{\beta,\mu}=G_{\beta,\mu}^2$; uniqueness of its compact positive square root gives $|G_{\beta,\mu}|=G_{\beta,\mu}$. Its singular values are the nonnegative diagonal entries with multiplicity, whose sum is $\Xi<\infty$. Thus [F7] and the trace-class definition make it trace class and give $\operatorname{Tr}G_{\beta,\mu}=\Xi$. Dividing by $\Xi>0$ gives a positive trace-class operator of trace one. [step 2.2, F1, F7, A1, algebra]

3.2 Fix one mode $j$, and take increasing finite mode sets $J_M$ containing it. For bosons, the trace weight of configurations in $J_M$ with occupation $n$ at $j$ is $q_j^n\prod_{i\in J_M\setminus\{j\}}(1-q_i)^{-1}$; division by the total finite trace gives $(1-q_j)q_j^n$. For fermions the same calculation gives probability $q_j^n/(1+q_j)$, for $n\in\{0,1\}$. Taking increasing limits of the nonnegative configuration sums preserves these factorizations, because every finite-support configuration is eventually included and the finite products converge by step 2.2. Factoring over any fixed finite list of modes gives the product joint law, hence independence of finite collections in this diagonal grand state. [step 1.2, step 2.2, A1, algebra]

3.3 For finite $J$, multiplying the geometric series in each bosonic coordinate gives the coefficient identity for $Z_{B,N}(J)$; multiplying the two-term polynomials in each fermionic coordinate gives the identity for $Z_{F,N}(J)$. Each coefficient sums exactly the finite canonical Boltzmann weights with total occupation $N$. For countable $I$, increasing finite mode sets increase each coefficient to its sum over all finite-support configurations; for any admissible fugacity $z=e^{\beta\mu}>0$, nonnegativity gives $z^N Z_{\pm,N}\le\Xi$, hence $Z_{\pm,N}\le z^{-N}\Xi<\infty$, and a canonical density exists exactly when the coefficient is positive. Conditioning the grand law on $|m|=N$ multiplies by the indicator of that constraint and generally couples the mode occupations. [step 2.2, A1, algebra]

4.1 If $0<q_j<1$, [F4] gives the stated Bose and Fermi means and variances. For a fermionic mode with $q_j\ge1$, direct summation of its two probabilities gives $\mathbb E N_j=q_j/(1+q_j)$ and $\operatorname{Var}(N_j)=q_j/(1+q_j)^2$; no geometric-series claim is used there. The bosonic bounds $\mathbb E N_j\le q_j/(1-q_*)$ and $\operatorname{Var}(N_j)\le q_j/(1-q_*)^2$, and the fermionic bounds $\mathbb E N_j\le q_j$ and $\operatorname{Var}(N_j)\le q_j$, are summable. For finite initial mode sets, independence from step 3.2 gives $\mathbb E N_M=\sum_{j\in J_M}\mathbb E N_j$ and $\mathbb E N_M^2=\sum_{j\in J_M}\operatorname{Var}(N_j)+(\sum_{j\in J_M}\mathbb E N_j)^2$. Each configuration has finite support, so $N_M\uparrow N$; passing to the increasing limits of the defining nonnegative countable sums yields finite $\mathbb E N$ and $\mathbb E N^2$, with $\operatorname{Var}(N)=\sum_j\operatorname{Var}(N_j)<\infty$. [F4, step 3.2, A1, algebra]

5.1 In the one-dimensional oscillator specialization, [F6] supplies the Hermite eigenbasis, energy list and exact diagonal domain; substitution of those eigenvalues into the Fock multiplier gives the stated occupation construction. This uses the actual self-adjoint oscillator carrier rather than a formal differential eigenfunction list. [F6, A1] ∎
## Remarks

The current published mathematical oscillator items match the former research alias `research-NRQM-M12-diagonal-oscillator-contract` on the needed diagonal domain, Hermite completeness and positive-frequency spectrum. The current published `thm-tdmath-summable-canonical-differentiation` and `lem-tdmath-bose-fermi-mode-fluctuations` match the former M16 and single-mode M36 interfaces; the Fermi formula for $q_j\ge1$ is verified directly above because the M36 source statement assumes $q\in(0,1)$. No alias is treated as a current carrier when its exact item is absent.
