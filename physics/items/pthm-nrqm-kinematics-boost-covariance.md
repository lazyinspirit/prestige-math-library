---
id: pthm-nrqm-kinematics-boost-covariance
aliases: [ nrqm-kinematics-boost-covariance ]
kind: physics-theorem
domain: physics
title: "Galilean boost covariance of the free massive spin-s model and the
  moving-frame reading"
status: draft
origin: session
dependency_level: 11
deps:
  [
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
    cor-mean-value-theorem,
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-schwartz-space-and-its-seminorms,
    def-strongly-continuous-one-parameter-unitary-group,
    def-weak-derivative-of-a-locally-integrable-function,
    lem-mean-value-inequality-for-a-differentiable-banach-valued-curve,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-kinematics-momentum-representation,
    lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    pthm-nrqm-kinematics-translation-covariance,
    thm-complex-exponential-is-entire-with-derivative-itself,
    thm-dominated-convergence,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  ]
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-mean-value-inequality-for-a-differentiable-banach-valued-curve: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  pthm-nrqm-kinematics-translation-covariance: physical-result
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The Galilean boost covariance of the free spin-s
  massive-particle model and the moving-frame reading of its bounded-potential
  dynamics: unitarity and domain preservation of the boost family, the operator
  identities shifting position by ut and momentum by mu together with the
  resulting law transports, the free-propagator covariance identity, the
  conjugated free Hamiltonian identity, and the moving-frame Schroedinger
  equation with the pulled-back potential. The statement is conditional on P2,
  P4, P5 and P6 and the cited mathematics, holds for the free model and for real
  bounded measurable potentials only, and asserts no Lorentz covariance, no
  massless or photon limit, no covariance for singular or unbounded potentials,
  and no apparatus or empirical result."
proof_strategy: direct
sources:
  references:
    - title: "C. Torre, Galilean Relativity and the Path Integral Formalism in Quantum
        Mechanics, arXiv:2306.13487 (2023), Section 4 equation (4.23) and
        Section 6 equations (6.2)-(6.4) and (6.8), pages 12-13 and 17-18: the Galilean boost law of
        the wave function requires the multiplicative phase factor,
        psi_u(r,t)=exp[-(i/hbar) M u.(t u/2 - R)] psi(r-t u,t), the passive
        reading of psi_u as the wave function in a frame moving with velocity -u
        relative to the original frame, ordinary composition of pure boosts
        u1,u2 to u1+u2 in equation (6.4), and the projective boost-translation
        relation in equation (6.8)"
      url: "https://arxiv.org/pdf/2306.13487"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 7.2 printed pages 167-169 (PDF pages 179-181): the free
        Schroedinger operator; Section 7.3 printed pages 169-171 (PDF pages
        181-183): the time evolution in the free case; Section 8.1 printed pages
        173-175 (PDF pages 185-187): position and momentum via their commutation
        relations and unitary equivalence through the Fourier transform"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the observable and probability postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], the
autonomous-dynamics postulate P4 in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]], and the kinematics and
massive-particle model postulate P5 and internal-factor postulate P6 read
through [[def-nrqm-kinematics-framework-massive-spin-s-model]] for a particle
of mass parameter $m>0$ and spin label $s$
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), and
assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H_{s}$ be the model's
state space with componentwise operators $Q_{j},P_{k}$
([[lem-nrqm-kinematics-componentwise-position-and-momentum]]), let
$\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$ be the outcome law of an assigned sharp
observable $A$ in a unit vector $\psi$, let
$H_{0}:=\frac{1}{2m}\sum_{k}P_{k}^{2}$ with domain
$D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ and flow
$U_{0}(t)=\exp(-itH_{0}/\hbar)$, and for real bounded measurable
$V:\mathbb R^{3}\to\mathbb R$ let $H_{V}$ and $U_{V}$ be the operator and flow of
[[pthm-nrqm-kinematics-translation-covariance]], with
$D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ and
$V_{u}(x,t):=V(x-ut)$. For $u\in\mathbb R^{3}$ and $t\in\mathbb R$ define the
**boost operator** $B_{u}(t)$ componentwise by
$$\bigl(B_{u}(t)\psi\bigr)(x):=\exp\Bigl(\frac{i}{\hbar}\Bigl(m\,u\cdot x -\frac{m|u|^{2}}{2}t\Bigr)\Bigr)\psi(x-ut).$$
Then:

(a) for every $u,t$ the operator $B_{u}(t)$ is unitary,
$B_{u}(t)^{-1}=B_{u}(t)^{*}$, and it maps $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$
and $\mathcal S(\mathbb R^{3};\mathbb C^{r})$ onto themselves;

(b) $B_{u}(t)D(Q_{j})=D(Q_{j})$ and $B_{u}(t)D(P_{k})=D(P_{k})$; for
$f\in D(Q_{j})$ and $g\in D(P_{k})$, respectively,
$$Q_{j}B_{u}(t)f=B_{u}(t)(Q_{j}+u_{j}tI)f,\qquad P_{k}B_{u}(t)g=B_{u}(t)(P_{k}+mu_{k}I)g.$$
For a Borel $B\subseteq\mathbb R$ and
$a\in\mathbb R$, write $B-a:=\{b-a:b\in B\}$. Consequently, for every
unit $\psi$ and Borel $B\subseteq\mathbb R$
$$\mu^{Q_{j}}_{B_{u}(t)\psi}(B)=\mu^{Q_{j}}_{\psi}(B-u_{j}t),\qquad \mu^{P_{k}}_{B_{u}(t)\psi}(B)=\mu^{P_{k}}_{\psi}(B-mu_{k});$$

(c) **free covariance.** $B_{u}(t)U_{0}(t-s)=U_{0}(t-s)B_{u}(s)$ for all
$s,t\in\mathbb R$; in particular the freely evolved boosted preparation equals
the boost at time $t$ of the initial boosted preparation,
$$B_{u}(t)U_{0}(t)\psi=U_{0}(t)B_{u}(0)\psi\qquad(\psi\in H_{s});$$
and the conjugated free Hamiltonian identity
$$B_{u}(t)^{-1}H_{0}B_{u}(t)=H_{0}+u\cdot P+\frac{m|u|^{2}}{2}I$$
holds on $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ (in the chart velocity
$v=-u$ of clause (e) it reads $H_{0}-v\cdot P+\frac{m|v|^{2}}{2}I$), the
operator form of the frame change on the free generator;

(d) **moving-frame bounded-potential model.** For every real bounded
measurable $V$ and every $u$, the two-parameter family
$$W_{u}(t,s):=B_{u}(t)\,U_{V}(t-s)\,B_{u}(s)^{-1}$$
consists of unitaries preserving $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$, and
for every $s\in\mathbb R$ and $\psi_{0}\in W^{2,2}(\mathbb R^{3};\mathbb C^{r})$
the curve $t\mapsto W_{u}(t,s)\psi_{0}$ takes values in $W^{2,2}$, is
differentiable as an $L^{2}$-valued curve and satisfies
$$i\hbar\frac{d}{dt}\psi(t)=\Bigl(\frac{1}{2m}\sum_{k}P_{k}^{2}+M_{V_{u}(\cdot,t)}\Bigr)\psi(t),\qquad \psi(s)=\psi_{0};$$
it is unique among maps $w:\mathbb R\to W^{2,2}$ that are differentiable
into $L^{2}$ and satisfy this equation in $L^{2}$ for every $t$ with
$w(s)=\psi_{0}$;

(e) **Frame reading and scope.** The model reads the inertial-frame change
$t'=t$, $x'=x+ut$ of P5 (the new chart moves with velocity $-u$ relative to the
old one) on state representatives by $\psi'(x',t)=(B_{u}(t)\psi(\cdot,t))(x')$;
clauses (b)-(d) are the covariance consequences of that reading for the laws
of the free model and for the bounded-potential dynamics in the moving frame.
The statement is conditional on P2, P4, P5 and P6 and the cited mathematics,
concerns the componentwise massive model with real bounded measurable
potentials only, and asserts no Lorentz covariance, no photon limit, no
covariance for singular or unbounded potentials and no worldline of an
unmeasured particle; no apparatus or empirical result is recorded.

## Facts & Assumptions

**Given:** The postulates P2, P4, P5 and P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]]; the Axiom of Countable Choice and the Axiom of Choice; the state space $H_{s}$, $r=2s+1$; the componentwise operators $Q_{j},P_{k}$ and their scalar counterparts; the boost operators $B_{u}(t)$; the free energy $H_{0}$; a bounded real measurable $V$ and the operators $H_{V}$, $U_{V}$, $W_{u}(t,s)$; a unit vector $\psi$; a Borel set $B\subseteq\mathbb R$; vectors $u\in\mathbb R^{3}$, $x\in\mathbb R^{3}$; times $s,t$.

[F1] **Phase derivatives.** For $\varphi(x,t):=mu\cdot x/\hbar-m|u|^{2}t/(2\hbar)$, one has $\nabla\varphi=mu/\hbar$ and $\partial_t\varphi=-m|u|^2/(2\hbar)$. The function $e^{i\varphi}$ is smooth and unimodular, with $\partial_k e^{i\varphi}=i(mu_k/\hbar)e^{i\varphi}$ and $\partial_t e^{i\varphi}=-i(m|u|^2/(2\hbar))e^{i\varphi}$, by the complex-exponential derivative and modulus formulas ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F2] **Componentwise kinematics, momentum representation and laws.** $Q_j,P_k$ are the componentwise operators with their maximal domains and $P_kf=-i\hbar D_kf$ on its domain ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)). The unitary momentum transform $U^{(s)}$ sends $P_k$ to multiplication by $p_k$ with the corresponding domain equality, and sends $T_a$ to multiplication by $e^{-ia\cdot p/\hbar}$ ([[lem-nrqm-kinematics-momentum-representation]] clauses (b),(d)). The spectral measures and outcome laws are those of [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clauses (a),(c).

[F3] **Translation identities.** $T_{a}D(Q_{j})=D(Q_{j})$, $T_{a}Q_{j}T_{a}^{-1}=Q_{j}-a_{j}I$, $T_{a}D(P_{k})=D(P_{k})$, $T_{a}P_{k}T_{a}^{-1}=P_{k}$, and $T_{a}$ preserves $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ and the Schwartz class ([[pthm-nrqm-kinematics-translation-covariance]] clause (a), [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c)).

[F4] **Weak-derivative test identity.** For $f\in D(P_k)$, $D_kf\in L^2$ and $\int f\,\partial_k\eta=-\int (D_kf)\eta$ for every $\eta\in C_c^\infty(\mathbb R^3)$, by the definition of weak derivative ([[def-weak-derivative-of-a-locally-integrable-function]], [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)).

[F5] **Flows and uniqueness.** $H_{0}$ and $H_{V}$ are self-adjoint on $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ with strongly continuous unitary flows preserving the domain and satisfying the Schroedinger equation exactly on it ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (c), [[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a)-(c), [[def-strongly-continuous-one-parameter-unitary-group]]).

[F6] A real function continuous on a closed interval and differentiable in its interior with zero derivative is constant, by [[cor-mean-value-theorem]]; restrictions of a differentiable curve to compact intervals satisfy these continuity hypotheses.

[F7] If $g_h\to g$ pointwise as $h\to0$ and $|g_h|\le G$ for a fixed integrable $G$, then the corresponding integrals converge ([[thm-dominated-convergence]]).

[F8] For a differentiable Banach-valued curve with derivative norm bounded by $C$ on an interval, the endpoint difference has norm at most $C$ times the interval length ([[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]).

## Proof

**Proof technique:** direct; derive the boost's domain and time-derivative identities from its phase and translation formula, compute free covariance in the momentum representation, and conjugate the bounded-potential evolution.

**Given:** The data of the statement and [F1]-[F8].

1.1 [Unitarity and domain preservation] Write $B_{u}(t)=M_{e^{i\varphi(\cdot,t)}}T_{ut}$ componentwise, where $T_{ut}$ is the componentwise translation and $\varphi(\cdot,t)$ the smooth real phase of [F1]. By [F3] the translation is unitary and preserves $W^{2,2}$ and the Schwartz class; multiplication by the unimodular smooth function $e^{i\varphi}$ is unitary and preserves both classes because the phase is affine with bounded derivatives. Hence $B_{u}(t)$ is unitary with the stated inverse and preserves both classes, componentwise as in the scalar case of [F1]. This proves (a). [F1, F3, algebra]

1.2 [Position identity] By [F3], $Q_{j}T_{ut}=T_{ut}(Q_{j}+u_{j}tI)$ on $D(Q_{j})$; multiplication by $e^{i\varphi}$ commutes with $Q_{j}$ (both are componentwise multipliers). Hence, on $D(Q_{j})$, $Q_{j}B_{u}(t)=M_{e^{i\varphi}}Q_{j}T_{ut} =M_{e^{i\varphi}}T_{ut}(Q_{j}+u_{j}tI)=B_{u}(t)(Q_{j}+u_{j}tI)$. Since $T_{ut}$ and multiplication by the unimodular $e^{i\varphi}$ both preserve $D(Q_{j})$ in both directions, $B_{u}(t)D(Q_{j})=D(Q_{j})$. [F1, F3, algebra]

1.3 [Momentum identity] Put $\chi=e^{i\varphi(\cdot,t)}$ and $c=mu_k/\hbar$. For each component $f_\ell$ of $f\in D(P_k)$ and each scalar test function $\eta\in C_c^\infty(\mathbb R^3)$, $\chi\eta$ is again a test function, so [F4] and the classical product rule give [F1, F3, F4, algebra]
$$\int \chi f_\ell\,\partial_k\eta=\int f_\ell\,\partial_k(\chi\eta)-\int f_\ell(\partial_k\chi)\eta=-\int(\chi D_kf_\ell+ic\chi f_\ell)\eta.$$
The proposed weak derivative is in $L^2$ since $|\chi|=1$ and $c$ is constant; therefore $\chi f\in D(P_k)$ and $P_k(\chi f)=\chi(P_k+\hbar cI)f=\chi(P_k+mu_kI)f$. The same calculation with $\chi^{-1}$ shows that multiplication by $\chi$ maps $D(P_k)$ onto itself. By [F3], $T_{ut}$ also preserves $D(P_k)$ in both directions and $P_kT_{ut}=T_{ut}P_k$; hence $B_u(t)D(P_k)=D(P_k)$ and $P_kB_u(t)=M_{e^{i\varphi}}(P_k+mu_kI)T_{ut}=B_u(t)(P_k+mu_kI)$ with the stated domains. [F1, F3, F4, algebra]

1.4 [Time derivative of the boost] Put $\lambda:=m|u|^{2}/(2\hbar)$ and $q(p):=u\cdot p/\hbar$. For $f\in W^{1,2}$ and $h\ne0$, the momentum representation gives [F1, F2, F7, algebra]
$$U^{(s)}\left(\frac{T_{uh}f-f}{h}+u\cdot Df\right)=\left(\frac{e^{-ihq}-1}{h}+iq\right)U^{(s)}f.$$
The multiplier tends pointwise to $0$ by the derivative of the complex exponential. Applying [F8] to $r\mapsto e^{-irhq(p)}$ for $r\in[0,1]$ gives $|e^{-ihq(p)}-1|\le|hq(p)|$, so the squared integrand is bounded by $4|q|^{2}|U^{(s)}f|^{2}$, which is integrable because $u\cdot Df\in H_s$; [F7] proves convergence to $0$ in $L^2$. From the definition, $B_u(t+h)=e^{-i\lambda h}B_u(t)T_{uh}$; the resulting difference quotient yields
$$\frac{d}{dt}B_u(t)f=-B_u(t)(u\cdot Df)-i\lambda B_u(t)f=-\frac{i}{\hbar}B_u(t)\left(u\cdot P+\frac{m|u|^2}{2}I\right)f.$$
For every $f\in H_s$, the multiplier formula for $T_{uh}$ and $|e^{-ihq}-1|\le2$ from [F1] give $T_{uh}f\to f$ by [F7]; the scalar phase $e^{-i\lambda h}$ is continuous, so $B_u(t+h)f\to B_u(t)f$. Thus $B_u(t)$ is strongly continuous on $H_s$. [F1, F2, F7, algebra]

2.1 [Law transports] For a componentwise representative $f$, $(E_{Q_j}(B)B_u(t)f)(x)=\mathbf 1_B(x_j)e^{i\varphi(x,t)}f(x-ut)$, whereas $(B_u(t)E_{Q_j}(B-u_jt)f)(x)=e^{i\varphi(x,t)}\mathbf 1_{B-u_jt}(x_j-u_jt)f(x-ut)$. Since the two indicators agree, $E_{Q_j}(B)B_u(t)=B_u(t)E_{Q_j}(B-u_jt)$; taking norms gives $\mu^{Q_j}_{B_u(t)\psi}(B)=\mu^{Q_j}_{\psi}(B-u_jt)$. For momentum, changing variables $y=x-ut$ in the Fourier transform first on smooth compactly supported representatives yields $(U^{(s)}B_u(t)f)(p)=e^{-it u\cdot p/\hbar+i m|u|^2t/(2\hbar)}(U^{(s)}f)(p-mu)$. The equality extends to all $L^2$ by density and unitarity. Therefore the indicator $\mathbf 1_B(p_k)$ on the left equals the transported indicator $\mathbf 1_{B-mu_k}(p_k-mu_k)$ on the right, so $E_{P_k}(B)B_u(t)=B_u(t)E_{P_k}(B-mu_k)$ and $\mu^{P_k}_{B_u(t)\psi}(B)=\mu^{P_k}_{\psi}(B-mu_k)$. These are the two law transports in (b); neither depends on the phase in the position density. [step 1.2, step 1.3, F2, F3, algebra]

2.2 [Free Hamiltonian conjugation] By step 1.3, $P_kB_u(t)=B_u(t)(P_k+mu_kI)$ for every $k$. Applying this identity twice on $W^{2,2}$ and using preservation of that domain (step 1.1) gives $P_k^2B_u(t)=B_u(t)(P_k+mu_kI)^2$. Therefore [step 1.1, step 1.3, F2, algebra]
$$B_u(t)^{-1}H_0B_u(t)=\frac1{2m}\sum_k(P_k+mu_kI)^2=H_0+u\cdot P+\frac{m|u|^2}{2}I$$
on $W^{2,2}$, with the domain equality inherited from $B_u(t)W^{2,2}=W^{2,2}$. This is the Hamiltonian identity of (c). [step 1.1, step 1.3, F2, algebra]

3.1 [Free covariance] Put $\tau:=t-s$. Under $U^{(s)}$, each $P_k$ is multiplication by $p_k$ ([[lem-nrqm-kinematics-momentum-representation]] clause (b)); hence $H_0=(2m)^{-1}\sum_kP_k^2$ is multiplication by $|p|^2/(2m)$ on the transformed $W^{2,2}$ domain, and its spectral-calculus flow $U_0(\tau)$ is multiplication by $e^{-i\tau|p|^2/(2m\hbar)}$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (b), [[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)). By the momentum-transform formula of step 2.1, both sides of the free-covariance identity have the same momentum representative because [step 2.1, F2, F5, algebra]
$$e^{-it u\cdot p/\hbar+i m|u|^2t/(2\hbar)}e^{-i\tau|p-mu|^2/(2m\hbar)}=e^{-i\tau|p|^2/(2m\hbar)}e^{-is u\cdot p/\hbar+i m|u|^2s/(2\hbar)},$$
as follows by expanding $|p-mu|^2$ and using $\tau=t-s$. The equality holds on all of $H_s$ because $U^{(s)}$ is unitary and all displayed multipliers are unimodular. [step 2.1, F2, F5, algebra]

3.2 [Moving-frame equation and uniqueness] Fix $s\in\mathbb R$ and $\psi_0\in W^{2,2}$, put $y_0:=B_u(s)^{-1}\psi_0$, $y(t):=U_V(t-s)y_0$, and $\psi(t):=B_u(t)y(t)$. By [F5], $y(t)\in W^{2,2}$ and $y'(t)=-iH_Vy(t)/\hbar$ in $L^2$; step 1.1 gives $\psi(t)\in W^{2,2}$. The difference-quotient decomposition [step 1.1, step 1.3, step 1.4, step 2.2, F5, F6, algebra]
$$\frac{\psi(t+h)-\psi(t)}h=B_u(t+h)\frac{y(t+h)-y(t)}h+\frac{B_u(t+h)-B_u(t)}h y(t)$$
and strong continuity of $B_u(t)$ (step 1.4) yield $\psi'=B_u(t)y'-\frac{i}{\hbar}B_u(t)(u\cdot P+m|u|^2I/2)y$. Using $H_V=H_0+M_V$, step 2.2 gives $B_u(t)(H_0+u\cdot P+m|u|^2I/2)y=H_0\psi$, while $B_u(t)M_V=M_{V_u(\cdot,t)}B_u(t)$ follows from $B_u(t)=M_{e^{i\varphi}}T_{ut}$, the commutation of multiplication operators, and $T_{ut}M_V=M_{V_u(\cdot,t)}T_{ut}$. Therefore $i\hbar\psi'=(H_0+M_{V_u(\cdot,t)})\psi$ and $\psi(s)=\psi_0$, proving existence. For uniqueness, let $w_1,w_2:\mathbb R\to W^{2,2}$ be $L^2$-differentiable solutions and put $z=w_1-w_2$. For each $t$, $A(t):=H_0+M_{V_u(\cdot,t)}$ is symmetric on $W^{2,2}$, so $\frac d{dt}\|z(t)\|^2=2\operatorname{Re}\langle-iA(t)z(t)/\hbar,z(t)\rangle=0$. By the real mean-value theorem, $\|z(t)\|^2$ is constant; if $z(s)=0$, then $z(t)=0$ for all $t$. This proves uniqueness in the class stated in (d). [step 1.1, step 1.3, step 1.4, step 2.2, F5, F6, algebra]

4.1 [Frame reading and scope] Clause (e) records the model's convention for the passive boost of P5: the chart change $x'=x+ut$ is read by $B_u(t)$, so steps 1.2, 1.3, 2.1, 3.1, 2.2 and 3.2 are the covariance statements under that change. The hypotheses actually used are P2, P4, P5 and P6, the componentwise model and real bounded measurable potentials; no Lorentz structure, massless limit, singular potential, boundary realization, apparatus or empirical datum is used. [given, step 1.2, step 1.3, step 1.4, step 2.1, step 3.1, step 2.2, step 3.2] ∎

## Remarks

- **Momentum shift from the phase.** The phase $\varphi(x,t)=mu\cdot x/\hbar-m|u|^{2}t/(2\hbar)$ depends on $x$ and shifts the model momentum law by $mu$, as clause (b) records. The boost is a kinematic frame change of the model, and its free-propagator identity (clause (c)) gives the covariance of the free dynamics.
- **What is not claimed.** No boost covariance is asserted for potentials outside the real bounded measurable class, for confined or boundary realizations, or for the internal factor beyond its passive transport by the componentwise definition; no relativistic boost or Lorentz transformation law is either assumed or derived. The boost family is defined by the phase and translation formula in the Statement; the covariance identities are derived here from that formula and the componentwise model operators.
