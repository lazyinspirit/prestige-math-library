---
id: pthm-nrqmx-finite-reduction-channel
kind: physics-theorem
title: Product-state reduced evolution is a channel
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - post-nrqmx-finite-open-model
  - def-nrqmx-finite-channel-families
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - def-qsm-dt-channel-definition
  - thm-qsm-dt-choi-kraus
  - lem-qsm-matrix-state-calculus
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
dependency_roles:
  post-nrqmx-finite-open-model: physical-assumption
  def-nrqmx-finite-channel-families: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
proof_strategy: direct
physical_scope: "Exact reduced maps of finite-dimensional system and environment models with a fixed product initial assignment and unitary joint evolution. The theorem permits neither an initial-correlation extension nor a continuum bath or Markov limit; its finite example is a conditional model calculation, not an experiment."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.3 and 2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
      locator: "Printed pp. 67–69, finite partial trace; Theorem 2.22, printed pp. 82–84, finite Kraus and Stinespring forms."
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Printed pp. 307–311, equations (21.1)–(21.5), Example 21.1, and the complete proof of Theorem 21.2."
---

## Statement

In the finite product-state model, fix any $t\geq0$ and define the complex-linear map $\Phi_t:M_d(\mathbb C)\to M_d(\mathbb C)$ by $\Phi_t(X)=\operatorname{Tr}_E\!\left(U_t(X\otimes\eta)U_t^*\right)$. Then $\Phi_t$ is a finite quantum channel. The family $t\mapsto\Phi_t$ need not obey the semigroup law and need not be CP-divisible. The terms “semigroup law” and “CP-divisible” have the definitions of [[def-nrqmx-finite-channel-families]].

## Statement references

[[post-nrqmx-finite-open-model]]

[[def-nrqmx-finite-channel-families]]

[[def-qc-partial-trace]]

[[thm-qc-partial-trace-characterization-and-basis-independence]]

[[def-qsm-dt-channel-definition]]

[[thm-qsm-dt-choi-kraus]]

## Facts & Assumptions

**Given:** Integers $d,m\geq1$, time $t\geq0$, system and environment density matrices $\rho\in M_d(\mathbb C)$ and $\eta\in M_m(\mathbb C)$, and a unitary $U_t$ on $\mathbb C^d\otimes\mathbb C^m$ with the system factor first.

[A1] [[post-nrqmx-finite-open-model]]: $\eta$ is fixed independently of every allowed input $\rho$, the joint initial state is $\rho\otimes\eta$, and the reduced map is $\Phi_t(X)=\operatorname{Tr}_E(U_t(X\otimes\eta)U_t^*)$; the parameter $t$ indexing $U_t$ is elapsed physical time measured in seconds.

[F1] [[def-qc-partial-trace]]: in the ordered product basis, $(\operatorname{Tr}_E R)_{\alpha\beta}=\sum_jR_{(\alpha,j),(\beta,j)}$.

[F2] [[thm-qc-partial-trace-characterization-and-basis-independence]]: the finite partial trace is characterized by the trace pairing and its coordinate map is independent of the chosen environment orthonormal basis.

[F3] [[lem-qsm-matrix-state-calculus]]: every finite positive matrix has an orthonormal eigenbasis with nonnegative eigenvalues, and its trace is the sum of its diagonal entries in any orthonormal basis.

[F4] [[def-qsm-dt-channel-definition]]: a finite channel is a complex-linear map that is completely positive on every finite ancilla extension and trace-preserving on every matrix input.

[F5] [[thm-qsm-dt-choi-kraus]]: a finite map of Kraus form $\Psi(X)=\sum_aK_aXK_a^*$ is completely positive, and it is trace-preserving exactly when $\sum_aK_a^*K_a=I$.

[F6] [[def-nrqmx-finite-channel-families]]: CP-divisibility requires a finite channel $V_{t,s}$ for every $s\leq t$ with $\Phi_t=V_{t,s}\circ\Phi_s$; the semigroup law requires $\Phi_{t+s}=\Phi_t\circ\Phi_s$ and $\Phi_0=\operatorname{id}$.

[F7] [[def-complex-exponential]]: $\exp z=\sum_{n=0}^\infty z^n/n!$ and $\exp 0=1$.

[F8] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\,\exp w$ for complex $z,w$.

[F9] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $\theta$, $\exp(i\theta)=\cos\theta+i\sin\theta$ and $|\exp(i\theta)|=1$.

[F10] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: there exists $\theta\in[0,2\pi)$ with $(\cos\theta,\sin\theta)=(0,1)$.

## Proof

**Proof technique:** finite Kraus construction followed by an explicit two-qubit counterexample.

1.1 By [F3], choose an orthonormal environment eigenbasis $(|k\rangle)_{k=1}^m$ with $\eta=\sum_{k=1}^mp_k|k\rangle\langle k|$, $p_k\geq0$, and $\sum_kp_k=1$. Choose any system orthonormal basis $(|\alpha\rangle)_{\alpha=1}^d$ and use their ordered product basis. By [F2], this basis change leaves the finite partial trace in [F1] unchanged. For environment indices $j,k$ define the system matrix $K_{jk}$ by $(K_{jk})_{\alpha\beta}:=\sqrt{p_k}(U_t)_{(\alpha,j),(\beta,k)}$. Expanding $X\otimes\eta$, conjugating by $U_t$, and applying the coordinate formula [F1] gives, entry by entry, $\Phi_t(X)=\sum_{j,k=1}^mK_{jk}XK_{jk}^*$ for every $X\in M_d(\mathbb C)$. [given, A1, F1, F2, F3, construct, algebra]

1.2 For a two-qubit instance take $Z=\operatorname{diag}(1,-1)$, $g>0$ in $\mathrm{s}^{-1}$, $H_{\mathrm{tot}}=\hbar g\,Z\otimes Z$ with $\hbar$ in joule-seconds, and $\eta=|+\rangle\langle+|$ where $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ in the chosen environment $Z$ eigenbasis. By [F3], the finite spectral exponential gives $U_t=e^{-igtZ\otimes Z}=\sum_{b=\pm1}V_b(t)\otimes|b\rangle\langle b|$, with $V_b(t)=\operatorname{diag}(e^{-ibgt},e^{ibgt})$. The partial trace in [F1] therefore gives $\Phi_t(X)=\frac12(V_{+1}(t)XV_{+1}(t)^*+V_{-1}(t)XV_{-1}(t)^*)$, so for $X=\begin{pmatrix}a&z\\w&c\end{pmatrix}$ the diagonal entries are unchanged and the off-diagonal entries are multiplied by $\kappa(t)=\frac12(e^{-2igt}+e^{2igt})=\cos(2gt)$, using [F7], [F8], and [F9]. [given, A1, F1, F3, F7, F8, F9, algebra]

1.3 By [F10], choose $\theta\in[0,2\pi)$ with $\cos\theta=0$ and $\sin\theta=1$; hence $\theta>0$. Set $s=\theta/(2g)>0$. Euler's identity [F9] gives $e^{i\theta}=i$, and [F7]–[F8] give $e^{-i\theta}=(e^{i\theta})^{-1}=-i$. Applying [F8] again yields $\kappa(s)=0$ and $\kappa(2s)=\frac12(e^{-2i\theta}+e^{2i\theta})=-1$. [F7, F8, F9, F10, algebra]

2.1 For system basis indices $\beta,\delta$, unitarity of $U_t$ gives $(\sum_{j,k}K_{jk}^*K_{jk})_{\beta\delta}=\sum_{k=1}^mp_k\sum_{j=1}^m\sum_{\alpha=1}^d\overline{(U_t)_{(\alpha,j),(\beta,k)}}(U_t)_{(\alpha,j),(\delta,k)}=\sum_kp_k\delta_{\beta\delta}=\delta_{\beta\delta}$. Thus $\sum_{j,k}K_{jk}^*K_{jk}=I_d$, so [F5] makes the Kraus map in step 1.1 completely positive and trace-preserving; by [F4], $\Phi_t$ is a finite channel. [given, F4, F5, step 1.1, algebra]

3.1 Let $X_{\!P}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\rho_\pm=(I\pm X_{\!P})/2$. Since $X_{\!P}=X_{\!P}^*$ and $X_{\!P}^2=I$, each $\rho_\pm$ is a projection; since $\operatorname{Tr}X_{\!P}=0$, each has trace one. Steps 1.2 and 1.3 give $\Phi_s(\rho_+)=\Phi_s(\rho_-)=I/2$, while $\Phi_{2s}(\rho_+)=\rho_-$ and $\Phi_{2s}(\rho_-)=\rho_+$. Consequently $\Phi_{2s}(\rho_+)\ne\Phi_s(\Phi_s(\rho_+))=I/2$, so the semigroup law in [F6] fails. If a channel $V_{2s,s}$ satisfied $\Phi_{2s}=V_{2s,s}\circ\Phi_s$, it would send the equal matrices $\Phi_s(\rho_+)$ and $\Phi_s(\rho_-)$ to equal outputs, contradicting the two distinct outputs at $2s$. By step 2.1, the family consists of channels, so this contradiction proves it is not CP-divisible by [F6]. [F3, F6, step 1.2, step 1.3, step 2.1, algebra] ∎

## Remarks

The two-qubit recurrence is a conditional prediction of a finite unitary model. It is not a reported observation and does not establish a physical Markov limit.
