---
id: pthm-qft-example-regulated-probability-control
kind: physics-theorem
domain: physics
library: physics
title: Exact regulated transition probabilities and controlled coefficients
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 3
deps:
  - def-qft-example-observable-types
  - def-qft-framework-units
  - def-qft-example-data
  - def-countable-choice
  - def-qft-finite-bounded-kraus-instrument
  - lem-qft-finite-instrument-normalization
  - post-qft-constructed-model-and-measurement
  - thm-qft-example-finite-dyson-unitarity
dependency_roles:
  def-qft-example-observable-types: formulation-prerequisite
  def-qft-framework-units: formulation-prerequisite
  def-qft-example-data: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-finite-bounded-kraus-instrument: operational-prerequisite
  lem-qft-finite-instrument-normalization: mathematical-premise
  post-qft-constructed-model-and-measurement: physical-assumption
  thm-qft-example-finite-dyson-unitarity: mathematical-premise
physical_scope: >-
  Exact deductions in an explicitly constructed finite-dimensional regulated
  model with a supplied finite projective measurement, an adopted pure-state
  update by the constructed unitary, and the constructed-model Born postulate.
  Finite-order squares are not generally probabilities. No continuum QFT,
  regulator removal, asymptotic scattering operator, empirical result, or
  sample-based inference is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3 “Interacting Fields,” §3.1.1 “Dyson’s Formula”
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: J. Watrous, The Theory of Quantum Information, author-hosted prepublication manuscript, §§2.3.1–2.3.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: R. B. Griffiths, Notes on Quantum Information Theory, complete §7
      url: https://www.andrew.cmu.edu/course/33-658/qit7.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), and use the finite regulated model type of
[[def-qft-example-observable-types]]. Let $d\ge1$, let $\tau>0$ be a time
interval endpoint in seconds, let $\hbar>0$ have unit $\mathrm{J\,s}$, and
let $\lambda\in\mathbb R$ be dimensionless. Let
$H_0=H_0^*\in M_d(\mathbb C)$ have unit joule and let
$V:[0,\tau]\to M_d(\mathbb C)$ be norm-continuous, Hermitian-valued, and
joule-valued. Set
$$V_I(t)=e^{itH_0/\hbar}V(t)e^{-itH_0/\hbar},\qquad B=\sup_{0\le t\le\tau}\|V_I(t)\|,\qquad z=\frac{|\lambda|B\tau}{\hbar}.$$
Define $S_0(t)=I$ and
$$S_{n+1}(t)=-\frac{i}{\hbar}\int_0^tV_I(r)S_n(r)\,dr,\qquad S(t)=\sum_{n=0}^\infty\lambda^nS_n(t).$$
For $W\in M_d(\mathbb C)$, **unitary** means $W^*W=WW^*=I$.
Write $U(\tau)=e^{-iH_0\tau/\hbar}S(\tau)$ and, for $N\ge0$,
$$U_N(\tau)=e^{-iH_0\tau/\hbar}\sum_{n=0}^N\lambda^nS_n(\tau),\qquad R_N=e^z\frac{z^{N+1}}{(N+1)!}.$$

Let $\psi\in\mathbb C^d$ be a unit initial vector. A supplied finite
projective measurement is a family $P_1,\ldots,P_m\in M_d(\mathbb C)$,
$m\ge1$, satisfying $P_a=P_a^*=P_a^2$, $P_aP_b=0$ for $a\ne b$, and
$\sum_{a=1}^mP_a=I$. Equivalently, the one-Kraus-per-outcome data
$M_{a,1}=P_a$ form a normalized finite instrument in the sense of
[[def-qft-finite-bounded-kraus-instrument]]. Adopt the constructed-model Born
interpretation of [[post-qft-constructed-model-and-measurement]] only for this
actually constructed finite model and measurement. For its physical reading,
also adopt the explicit preparation/evolution assumption [A3]: the initial
density is $\rho_0:=T_{\psi,\psi}$, and the model density at the measurement
time is $\rho_\tau:=U(\tau)\rho_0U(\tau)^*=T_{U(\tau)\psi,U(\tau)\psi}$.
Here $T_{u,v}$ is the rank-one map $x\mapsto\langle x,v\rangle u$ of
[[lem-qft-finite-instrument-normalization]]. The Dyson result proves that this
matrix $U(\tau)$ is unitary; identifying it with the selected model's state
update is an adopted physical assumption, not a conclusion about nature.
Define the exact model probability and the truncated squared norm by
$$p_a=\|P_aU(\tau)\psi\|^2,\qquad q_{a,N}=\|P_aU_N(\tau)\psi\|^2.$$
Then $p_a\in[0,1]$, $\sum_ap_a=1$, and
$$|p_a-q_{a,N}|\le\bigl(2\sqrt{q_{a,N}}+R_N\bigr)R_N.$$
The nonnegative number $q_{a,N}$ is a truncation-derived square, not generally
a probability.

For the exact finite interaction matrix write $S(\tau;\lambda)=I+i\mathsf T(\lambda)$
and $\mathsf T(\lambda)=\lambda\mathsf T_1+\lambda^2\mathsf T_2+\cdots$.
Use the standard basis $e_1,\ldots,e_d$ for matrix entries, so
$\mathsf T_{fi}:=e_f^*\mathsf T e_i$ for $1\le f,i\le d$. For a matrix
$A$, define its Hermitian imaginary part by
$\operatorname{Im}_{\mathrm H}A:=(A-A^*)/(2i)$. Exact unitarity gives
$$2\operatorname{Im}\mathsf T_{ii}(\lambda)=\sum_{f=1}^d|\mathsf T_{fi}(\lambda)|^2,\qquad \mathsf T_1=\mathsf T_1^*,\qquad 2\operatorname{Im}_{\mathrm H}\mathsf T_2=\mathsf T_1^*\mathsf T_1.$$
These are finite-regulator coefficient identities, not continuum optical or
scattering theorems.

In the two-level case $H_0=0$, $\lambda=1$, and
$V(t)=g_E\sigma_x$ with $g_E>0$ in joules and
$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, the exact transition
probability from $e_1=(1,0)$ to the projector $P=|e_2\rangle\langle e_2|$
is $\sin^2z$, where the previously defined $z$ equals $g_E\tau/\hbar$
because $V_I=V$ and $\|\sigma_x\|=1$; the first-order squared transition
coefficient is $z^2$ and may exceed $1$. For all real $z$,
$$|\sin^2z-z^2|\le\frac{|z|^4}{3}.$$
The exact survival factor is $\cos^2z$, which is not $e^{-\Gamma\tau}$ for
any $\Gamma>0$ on all $\tau\ge0$.

For the occupation truncation with orthonormal basis
$e_0,\ldots,e_N$, define $a_Ne_n=\sqrt n\,e_{n-1}$ (zero for $n=0$),
$a_N^*e_n=\sqrt{n+1}\,e_{n+1}$ for $n<N$, and $a_N^*e_N=0$. Then
$$[a_N,a_N^*]=I-(N+1)|e_N\rangle\langle e_N|.$$
More generally, no finite-dimensional matrices $A,B$ satisfy $[A,B]=I$.
These exact regulator facts assert neither an infinite-dimensional CCR
construction nor a continuum limit.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the finite model and SI conventions of [[def-qft-example-observable-types]], [[def-qft-framework-units]], and [[def-qft-example-data]]; finite projectors $P_a$ and unit vector $\psi$; the finite-instrument definition and normalization result; and the adopted constructed-model measurement postulate.

[F1] [[def-qft-example-observable-types]]: the exact regulated model uses $\mathbb C^d$, declared Hamiltonian data, a dimensionless coupling, a unit initial vector, and a separately specified measurement.

[F2] [[def-qft-framework-units]]: the selected QFT model declares its regulator, coupling, state, and constructed measurement as model inputs; derived probabilities require the construction and an adopted rule.

[F3] [[def-qft-example-data]]: finite matrices use the operator norm, energy matrices are joule-valued, and $\hbar$ has unit $\mathrm{J\,s}$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; only this $\mathrm{AC}_\omega$ principle is assumed here.

[F4] [[def-qft-finite-bounded-kraus-instrument]]: a finite instrument is normalized when $\sum_{a,r}M_{a,r}^*M_{a,r}=I$; finite orthogonal projectors with $M_{a,1}=P_a$ satisfy this condition.

[F5] [[lem-qft-finite-instrument-normalization]]: under $\mathrm{AC}_\omega$, a unit vector $\phi$ and normalized finite instrument have outcome probability $p_a=\sum_r\|M_{a,r}\phi\|^2$ and the probabilities sum to $1$.

[A2] [[post-qft-constructed-model-and-measurement]]: the Born rule is adopted as a model probability only for an actually supplied state and normalized finite measurement instrument; it is not an apparatus-realization theorem.

[A3] For this selected finite model, adopt the pure-state preparation $\rho_0=T_{\psi,\psi}$ and the measurement-time state update $\rho_\tau=U(\tau)\rho_0U(\tau)^*=T_{U(\tau)\psi,U(\tau)\psi}$. This is an explicit physical model assumption. Tong, *Quantum Field Theory*, §3.1.1, Eqs. (3.215)–(3.225), presents the interaction-picture evolution convention used here; its adoption does not establish empirical applicability or apparatus realization. The Dyson theorem proves mathematical unitarity of $U(\tau)$ but does not establish that nature realizes this model.

[F6] [[thm-qft-example-finite-dyson-unitarity]]: for the stated finite Hermitian $H_0,V$, dimensionless $\lambda$, and Countable Choice, the interaction series converges in operator norm, is unitary, and has tail bound $e^zz^{N+1}/(N+1)!$.

[F7] [[thm-qft-example-finite-dyson-unitarity]]: the same finite theorem gives the exact matrix and coefficient unitarity identities; the standard-basis entries and Hermitian imaginary-part convention used here are defined in the Statement.

[F8] [[thm-qft-example-finite-dyson-unitarity]]: in the two-level model with $H=g_E\sigma_x$, the exact transition square is $\sin^2(g_Et/\hbar)$, its first-order squared coefficient is $(g_Et/\hbar)^2$, and the exact survival square is not a positive-rate exponential.

[F9] [[thm-qft-example-finite-dyson-unitarity]]: on the occupation truncation, $[a_N,a_N^*]=I-(N+1)|e_N\rangle\langle e_N|$; no finite-dimensional matrices satisfy $[A,B]=I$.

## Proof

1.1 Since $H_0$ is Hermitian and $\hbar>0$, the matrix exponential $e^{itH_0/\hbar}$ is a norm-continuous unitary family. Conjugation therefore makes $V_I(t)$ norm-continuous and Hermitian; compactness of $[0,\tau]$ gives $B<\infty$. The declared units give $[B]=\mathrm J$, so $z$ is dimensionless [F3]. The hypotheses of [F6] now hold for the stated $H_0,V,\lambda,\tau$ and $\mathrm{AC}_\omega$ [A1]. Thus $S(\tau)$ is unitary and its order-$N$ truncation has operator-norm error at most $R_N$. The free factor $e^{-iH_0\tau/\hbar}$ is unitary because $H_0$ is Hermitian; left multiplication by it preserves norm, so $U(\tau)$ is unitary and $\|U(\tau)-U_N(\tau)\|\le R_N$. [given, A1, F1, F2, F3, F6, algebra]

1.2 Applying the exact unitary coefficient identities in [F7] to $S=I+i\mathsf T(\lambda)$ gives the displayed diagonal and first-two-order relations, with the standard-basis entries and $\operatorname{Im}_{\mathrm H}$ convention specified in the Statement. Their supplier proves them by expanding $S^*S=I$ and comparing coefficients of its norm-convergent series; they are identities for this finite interaction matrix. [F7, algebra]

1.3 In the stated two-level specialization, [F8] gives $e^{-iz\sigma_x}=\cos z\,I-i\sin z\,\sigma_x$, so the exact transition probability is $\sin^2z$ and the first-order squared coefficient is $z^2$. Also $\sin z-z=\int_0^z(\cos u-1)\,du$ and $|1-\cos u|=2\sin^2(u/2)\le u^2/2$, so $|\sin z-z|\le|z|^3/6$; together with $|\sin z|\le|z|$ this yields $|\sin^2z-z^2|\le(|z|^3/6)(2|z|)=|z|^4/3$. Finally the derivative of $\cos^2(g_E\tau/\hbar)$ at $\tau=0$ is $0$, while that of $e^{-\Gamma\tau}$ is $-\Gamma<0$ for $\Gamma>0$; the two functions cannot agree on all $\tau\ge0$. [given, F3, F8, algebra]

2.1 Each $P_a$ is a bounded matrix, and the projection identities give $\sum_aM_{a,1}^*M_{a,1}=\sum_aP_a=I$ [F4]. By step 1.1, $\phi:=U(\tau)\psi$ is a unit vector. Assumption [A3] identifies the model's measurement-time density with $T_{\phi,\phi}$, so [F5] gives $\operatorname{tr}(\mathcal J_a(\rho_\tau))=\sum_r\|M_{a,r}\phi\|^2$ and $\sum_a\operatorname{tr}(\mathcal J_a(\rho_\tau))=1$ under [A1]. Since $M_{a,1}=P_a$, this trace is $\|P_aU(\tau)\psi\|^2$. The Born postulate [A2] assigns it the model-probability interpretation; this is a conditional model deduction, not an empirical observation. [given, A1, A2, A3, F4, F5, step 1.1, algebra]

3.1 Put $b=\|P_aU_N(\tau)\psi\|=\sqrt{q_{a,N}}$ and $c=\|P_aU(\tau)\psi\|=\sqrt{p_a}$. For every vector $x$, $x=P_ax+(I-P_a)x$ is an orthogonal decomposition because $P_a=P_a^*=P_a^2$; hence $\|P_ax\|\le\|x\|$ and $\|P_a\|\le1$. By step 1.1, $|c-b|\le\|P_a(U-U_N)\psi\|\le R_N$. Therefore $c\le b+R_N$ and $|p_a-q_{a,N}|=|c-b|(c+b)\le R_N(2b+R_N)$, as claimed. [step 1.1, step 2.1, algebra]

4.1 The definition of $a_N^*$ gives $a_Na_N^*e_n=(n+1)e_n$ and $a_N^*a_Ne_n=ne_n$ for $n<N$, while at $n=N$ these are $0$ and $Ne_N$. Thus the commutator acts as $e_n$ for $n<N$ and $-Ne_N$ for $n=N$, exactly the action of $I-(N+1)|e_N\rangle\langle e_N|$ [F9]. For finite matrices, $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{tr}(BA)$ by interchanging the finite indices; hence $\operatorname{tr}[A,B]=0$, whereas $\operatorname{tr}I=d>0$. Therefore $[A,B]=I$ is impossible in finite dimension. [F9, algebra] ∎
