---
id: pthm-fd-conditional-fluid-filter-law
kind: physics-theorem
title: Exact conditional law for the finite-modal fluid filter
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 3
domain: physics
library: physics
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-random-velocity-sensor-law
  - lem-fd-sensor-pairing-is-well-defined
  - lem-fd-finite-modal-field-has-finite-second-moment
  - def-fd-fluid-coefficient-observation-model
  - prop-fd-linear-fluid-filter-interface
  - def-state-space-filtering-laws
  - post-fd-fluid-observation-and-noise
  - def-axiom-of-choice
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-random-velocity-sensor-law: formulation-prerequisite
  lem-fd-sensor-pairing-is-well-defined: mathematical-premise
  lem-fd-finite-modal-field-has-finite-second-moment: mathematical-premise
  def-fd-fluid-coefficient-observation-model: mathematical-premise
  prop-fd-linear-fluid-filter-interface: mathematical-premise
  def-state-space-filtering-laws: mathematical-premise
  post-fd-fluid-observation-and-noise: physical-assumption
  def-axiom-of-choice: mathematical-premise
physical_scope: >-
  Conditional result for the adopted finite-horizon, finite-modal,
  linear-Gaussian velocity model and specified weighted spatial sensors in a
  fixed nonrelativistic Cartesian inertial chart. It identifies the exact
  conditional law within that model; it does not assert that an actual flow,
  sensor, or noise source follows the adopted model.
empirical_premises: []
axiom_use: >-
  Assume AC as required for the finite Gaussian-law construction and the exact
  filtering supplier. The sensor-to-coefficient identification and
  pushforward of the conditional law use no stronger choice principle.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction"
      url: "https://arxiv.org/pdf/1506.07825v1"
      locator: "Chapter 2 §2.4, printed pp. 37–38, filtering as sequential conditioning; Chapter 4 §4.1, printed pp. 78–80, linear-Gaussian Kalman filtering."
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Cambridge University Press, 2013"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4 §§4.1–4.3, printed pp. 51–61, state-space models, Bayesian filtering equations, and the Kalman filter."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice (AC), meaning every family of nonempty sets has a choice function, and the finite-modal observation model described here. Let $I\subseteq\mathbb R$ be a nonempty open interval, let $E$ be a three-dimensional oriented Euclidean affine space, and use an orientation-preserving Cartesian inertial chart $x:E\to\mathbb R^3$ with absolute time $t$. Let $D\subset\mathbb R^3$ be bounded and Lebesgue measurable with $0<|D|<\infty$, and set $\mathcal H=L^2(D;\mathbb R^3)$, with its norm topology and Borel sigma-algebra. Fix an integer horizon $T\ge0$ and times $t_0<t_1<\cdots<t_T$ in $I$, positive integer dimensions $m_k,p_k$, finite-dimensional modal maps $\Phi_k(a)=\sum_{j=1}^{m_k}a_j\phi_{k,j}$ with $\phi_{k,j}\in\mathcal H$, and weighted sensor maps $L_k$ given by $(L_kv)_i=\int_Dv(x)\cdot\psi_{k,i}(x)\,d^3x$ for weights $\psi_{k,i}\in\mathcal H$. Assign $\phi_{k,j}$ dimensionless units, coefficients and velocity fields units m s$^{-1}$, sensor weights units m$^{-3}$, and observations and sensor noise units m s$^{-1}$; then $F_k$ and $H_k$ are dimensionless. The coefficient observation matrices satisfy $[H_k]_{ij}=(L_k\phi_{k,j})_i$, so $L_k(\Phi_k(a))=H_ka$.

On a common probability space $(\Omega,\mathcal F,\mathbb P)$, let $a_0\sim N_{m_0}(\mu_0,P_0)$, $q_k\sim N_{m_k}(0,Q_k)$, and $r_k\sim N_{p_k}(0,R_k)$ be mutually independent, with symmetric positive-semidefinite covariance matrices, where $C\succeq0$ means $z^TCz\ge0$ for every vector $z$ of matching dimension and $N_d(\mu,C)$ denotes the $d$-dimensional Gaussian law with mean $\mu$ and covariance $C$, including singular $C$. Assume
$$a_k=F_ka_{k-1}+q_k,\qquad y_k=H_ka_k+r_k\quad(1\le k\le T).$$
Initialize $m_{0|0}=\mu_0$ and $P_{0|0}=P_0$. For $1\le k\le T$, define
$$m_{k|k-1}=F_km_{k-1|k-1},\qquad P_{k|k-1}=F_kP_{k-1|k-1}F_k^T+Q_k,$$
$$v_k=y_k-H_km_{k|k-1},\qquad S_k=H_kP_{k|k-1}H_k^T+R_k.$$
Here $\mu_0\in\mathbb R^{m_0}$, $F_k\in\mathbb R^{m_k\times m_{k-1}}$, $H_k\in\mathbb R^{p_k\times m_k}$, $P_0\in\mathbb R^{m_0\times m_0}$, $Q_k\in\mathbb R^{m_k\times m_k}$, and $R_k\in\mathbb R^{p_k\times p_k}$. Assume every $S_k$ to be inverted is positive definite, meaning $z^TS_kz>0$ for every nonzero $z\in\mathbb R^{p_k}$. Set
$$K_k=P_{k|k-1}H_k^TS_k^{-1},\qquad m_{k|k}=m_{k|k-1}+K_kv_k,\qquad P_{k|k}=P_{k|k-1}-K_kS_kK_k^T.$$
Write $y_{1:k}=(y_1,\ldots,y_k)$, let $y_{1:0}$ be the singleton empty history, and let $\nu_k$ be the probability law of $y_{1:k}$. For every $0\le k\le T$, the Gaussian kernel $\pi_k(y_{1:k},\cdot)=N_{m_k}(m_{k|k},P_{k|k})$ is a probability kernel from histories to coefficient-state laws and satisfies the regular-conditional-law identities: for every Borel state set $A\subseteq\mathbb R^{m_k}$ and Borel history set $B\subseteq\prod_{j=1}^k\mathbb R^{p_j}$, $\mathbb P(a_k\in A,\ y_{1:k}\in B)=\int_B\pi_k(y,A)\,\nu_k(dy)$. For $k=0$, the history space is a singleton and $\pi_0=N_{m_0}(\mu_0,P_0)$. If $U_k=\Phi_k(a_k)$ is the represented velocity field, its regular conditional law is the pushforward kernel
$$\rho_k(y_{1:k},C)=\pi_k(y_{1:k},\Phi_k^{-1}(C))\qquad(C\in\mathcal B(\mathcal H)).$$
Both kernels are defined at every observation history, including histories with probability zero; this selects a version and asserts no pointwise uniqueness there. The result is exact for the declared finite model and does not assert that an untruncated or nonlinear fluid flow, an actual sensor, or actual noise follows that model.

## Statement references

[[def-fd-quantity-and-frame-conventions]]

[[def-fd-random-velocity-sensor-law]]

[[lem-fd-sensor-pairing-is-well-defined]]

[[lem-fd-finite-modal-field-has-finite-second-moment]]

[[def-fd-fluid-coefficient-observation-model]]

[[prop-fd-linear-fluid-filter-interface]]

[[def-state-space-filtering-laws]]

[[post-fd-fluid-observation-and-noise]]

[[def-axiom-of-choice]]

[Law, Stuart, and Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 2 §2.4 and Chapter 4 §4.1](https://arxiv.org/pdf/1506.07825v1)

[Särkkä, Bayesian Filtering and Smoothing, Chapter 4 §§4.1–4.3](https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf)

## Facts & Assumptions

**Given:** AC; the finite-horizon coefficient and observation equations; mutually independent Gaussian initial, process, and observation vectors with positive-semidefinite covariances; positive-definite innovation covariances; finite modal maps; and weighted spatial sensors as in the Statement.

[A1] AC is the axiom that every family of nonempty sets has a choice function; it is assumed for the Gaussian-law construction. [[def-axiom-of-choice]]

[F1] The physical framework uses absolute time and an adapted Cartesian inertial chart on Newtonian spacetime; its Eulerian velocity has units m s$^{-1}$. [[def-fd-quantity-and-frame-conventions]]

[F2] The sensor is the weighted spatial integral $S_\psi(v)=\int_Dv\cdot\psi\,d^3x$ on almost-everywhere classes in $\mathcal H=L^2(D;\mathbb R^3)$; it is not a point evaluation. [[def-fd-random-velocity-sensor-law]]

[F3] Each sensor pairing is finite, representative-independent, linear, and bounded on $\mathcal H$. [[lem-fd-sensor-pairing-is-well-defined]]

[F4] Under AC, if a measurable coefficient vector has finite second moment, the finite modal lemma gives a strongly measurable field and a finite-second-moment pushforward law; its Statement does not claim modal-map continuity. [[lem-fd-finite-modal-field-has-finite-second-moment]]

[F5] The physical postulate adopts the finite-dimensional coefficient state equation, weighted sensor observation equation, and independent Gaussian noise assumptions; it does not assert empirical adequacy. [[post-fd-fluid-observation-and-noise]]

[F6] The finite linear-Gaussian state-space convention has $a_k=F_ka_{k-1}+q_k$ and $y_k=H_ka_k+r_k$, with mutually independent Gaussian vectors and positive-semidefinite covariances, including singular ones. [[def-fd-fluid-coefficient-observation-model]]

[F7] Under AC and positive-definite solved innovations, the declared finite coefficient model has the stated exact Gaussian conditional law at every observation history, including singular state and noise covariances. [[prop-fd-linear-fluid-filter-interface]]

[F8] A filtering kernel is an everywhere-defined probability kernel whose composition with the observation history is a regular conditional distribution of the state; it satisfies the conditional event identities on every Borel history set. [[def-state-space-filtering-laws]]

[F9] The finite coefficient observation matrix is defined by $[H_k]_{ij}=[L_k(\phi_{k,j})]_i$, so the field observation equals $H_ka_k$. [[def-fd-fluid-coefficient-observation-model]]

[F10] The space $\mathcal H=L^2(D;\mathbb R^3)$ has its stated norm, which satisfies the norm triangle inequality. [[def-fd-random-velocity-sensor-law]]

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 In the fixed Cartesian inertial chart of [F1], for each $k$ and coefficient vector $a$, the weighted sensor maps in [F2] and postulate [F5] use finite linearity of the pairings [F3] to give
$$(L_k(\Phi_k(a)))_i=S_{\psi_{k,i}}\!\left(\sum_{j=1}^{m_k}a_j\phi_{k,j}\right)=\sum_{j=1}^{m_k}a_jS_{\psi_{k,i}}(\phi_{k,j})=\sum_{j=1}^{m_k}[H_k]_{ij}a_j.$$
All terms are defined because $\phi_{k,j},\psi_{k,i}\in\mathcal H$ and [F3] makes each pairing finite. By the matrix definition in [F9], this is exactly the finite coefficient observation equation. [F1, F2, F3, F5, F9, given, algebra]

2.1 By [F5] and [F6], the coefficient equations, dimensions, mutual independence, and covariance conventions match the finite linear-Gaussian interface. Step 1.1 identifies its matrix observation map with the specified physical sensor. The explicit AC assumption [A1] and positive-definite $S_k$ hypotheses are exactly the remaining assumptions of [F7]. Thus every hypothesis of the exact coefficient filtering result [F7] holds. [A1, F5, F6, F7, given, step 1.1]

3.1 For each $k$, put $C_k=\sum_{j=1}^{m_k}\|\phi_{k,j}\|_{\mathcal H}$. For $a,b\in\mathbb R^{m_k}$, the norm triangle inequality [F10] gives
$$\|\Phi_k(a)-\Phi_k(b)\|_{\mathcal H}\le\sum_{j=1}^{m_k}|a_j-b_j|\|\phi_{k,j}\|_{\mathcal H}\le C_k|a-b|,$$
because each coordinate satisfies $|a_j-b_j|\le|a-b|$. Thus $\Phi_k$ is continuous. This estimate is derived here; the finite-second-moment lemma [F4] does not assert continuity. [F10, given, algebra]

4.1 Apply [F7] to obtain the coefficient regular conditional kernel $\pi_k$ at every history. By step 3.1, $\Phi_k^{-1}(C)$ is Borel for every $C\in\mathcal B(\mathcal H)$. For each history $y$, $C\mapsto\pi_k(y,\Phi_k^{-1}(C))$ is a probability measure, and for each Borel $C$ its value is measurable in $y$ by the kernel property; hence $\rho_k$ is a probability kernel. For any Borel observation-history set $B$, the defining conditional-law identity in [F8] therefore gives
$$\mathbb P(U_k\in C,\ y_{1:k}\in B)=\mathbb P(a_k\in\Phi_k^{-1}(C),\ y_{1:k}\in B)=\int_B\pi_k(y,\Phi_k^{-1}(C))\,\nu_k(dy).$$
The last integrand is $\rho_k(y,C)$, so the conditional event identity holds for $U_k$ and $\rho_k$ is its regular conditional law by [F8]. Because $\pi_k$ is defined at every history, so is its pushforward $\rho_k$, including on null histories. [F4, F7, F8, step 2.1, step 3.1, given, algebra] ∎
