---
id: cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit
kind: counterexample
title: "The massive free-particle family has no strong zero-mass limit on
  Schwartz states"
status: draft
origin: session
domain: physics
dependency_level: 8
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    def-sobolev-space-wkp-and-its-norm,
    def-schwartz-space-and-its-seminorms,
    thm-algebra-of-derivatives,
    thm-chain-rule-for-total-derivatives,
    thm-exponential-beats-every-polynomial,
    thm-plancherel,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  thm-plancherel: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, in the spin-zero massive free-particle model, of
  the specific limit asserted below: convergence K_m f to K_0 f in L^2 for every
  Schwartz vector to a self-adjoint K_0, together with a finite free-frequency
  limit at each fixed nonzero wave number. One explicit Schwartz vector has
  divergent kinetic-operator norm; for every fixed normalized operator-domain
  state with nonzero momentum second moment the kinetic expectation diverges as
  m tends to zero. For each m>0, this class has finite nonzero model
  root-mean-square speed v_rms,m=m^{-1}(sum_j ||P_j psi||^2)^{1/2}; that speed
  is not held fixed as m varies. The formal free frequency at each fixed nonzero
  wave number also diverges. The item excludes that specified limit, not other
  mathematical notions of convergence or independently specified massless
  quantum models, and asserts no empirical claim. The radiation extension is a
  separate adopted model."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2,
        printed pages 9-14 (PDF pages 12-17): the free Hamiltonian, plane-wave
        solutions and the dispersion of the Schroedinger equation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Chapter 7, Theorem 7.8 and Section 7.3, printed pages 168-171 (PDF pages
        180-183): the free Schroedinger operator is self-adjoint with spectrum
        [0,infinity) and its time evolution is the free propagator"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

**Spin-sector specialization.** Throughout this counterexample, specialize P5 to the spin label $s=0$, so the one-particle Hilbert space is the scalar space $L^2(\mathbb R^3;\mathbb C)$. The argument concerns this explicit sector of the massive model.

## Statement refuted

In the one-particle model of [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] with potential $V=0$, the free kinetic operators
$$K_{m}:=-\frac{\hbar^{2}}{2m}\Delta,\qquad D(K_{m})=W^{2,2}(\mathbb R^{3};\mathbb C),\qquad m>0,$$
have a massless strong-action limit: there exist a self-adjoint operator $K_{0}\ge0$ on $L^{2}(\mathbb R^{3};\mathbb C)$ with $\mathcal S(\mathbb R^3;\mathbb C)\subseteq D(K_0)$ such that $K_{m}f\to K_{0}f$ in $L^{2}$ for every $f$ in the Schwartz class $\mathcal S(\mathbb R^{3};\mathbb C)$ as $m\downarrow0$, and the formal free-plane-wave frequencies of this massive family have a finite pointwise limit at every fixed nonzero wave vector. Precisely, for $k\in\mathbb R^{3}\setminus\{0\}$ with $[k]=\ell^{-1}$, define $\omega_m(k):=\hbar|k|^{2}/(2m)$ by the plane-wave solution $e^{i(k\cdot x-\omega_m(k)t)}$ of the free equation; the additional claim is that $\lim_{m\downarrow0}\omega_m(k)$ is finite, where $[\omega_m]=\tau^{-1}$ under [[def-nrqm-framework-quantities-and-units]].

## Facts & Assumptions

**Given:** $\hbar>0$; the spin-zero one-particle sector of P5, with $V=0$; for $m>0$ the operator $K_{m}=-\frac{\hbar^{2}}{2m}\Delta$ with domain $W^{2,2}(\mathbb R^{3};\mathbb C)$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iv), [[def-sobolev-space-wkp-and-its-norm]]); the free momentum operators $P_{j}$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]; and the explicit normalized state $\psi_{L_0}$ of [L3].

[L1] The free-plus-bounded-potential theorem with $V=0$ and $c=2\pi^{2}\hbar^{2}/m$ gives: $-\frac{\hbar^{2}}{2m}\Delta$ is self-adjoint on $W^{2,2}(\mathbb R^{3};\mathbb C)$, and for every Schwartz function $g$ one has $-\frac{\hbar^{2}}{2m}\Delta g=-\frac{\hbar^{2}}{2m}(\Delta g)$ evaluating the Laplacian classically ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b) and (c), [[def-schwartz-space-and-its-seminorms]]).

[L2] Momentum operators: $P_{j}=-i\hbar D_{j}$ is self-adjoint with domain $D(P_{j})=\{u:\,D_{j}u\in L^{2}\}$, and $-\frac{\hbar^{2}}{2m}\Delta=\frac{1}{2m}\sum_{j}P_{j}^{2}$ as operators on the classes $\mathcal S\subseteq W^{2,2}$; for $u\in D(P_{j})$ one has $\langle P_{j}u,u\rangle=\langle u,P_{j}u\rangle$ and $\|P_{j}u\|^{2}=\langle P_{j}u,P_{j}u\rangle$ ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clause (b), [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]).

[L3] An explicit length-scaled test state is obtained by putting $\eta_{L_0}(x)=\exp\!\bigl(-1/(1-|x|^{2}/L_0^{2})\bigr)$ for $|x|<L_0$ and $\eta_{L_0}(x)=0$ for $|x|\ge L_0$, where $L_0>0$ has dimension $\ell$. Every interior derivative is a finite sum of a polynomial in $(1-|x|^2/L_0^2)^{-1}$ and the bounded coordinates times this exponential; the exponential beats every polynomial at the boundary, so all derivatives extend by zero and $\eta_{L_0}\in C_c^\infty$. For $g(s)=e^{-1/(1-s)}$, $g'(s)=-e^{-1/(1-s)}(1-s)^{-2}\ne0$ for $0\le s<1$, so $\nabla\eta_{L_0}(x)=2xL_0^{-2}g'(|x|^2/L_0^2)$ is nonzero for $0<|x|<L_0$. With $J:=\int_{|y|<1}\exp\!\bigl(-2/(1-|y|^2)\bigr)\,d^3y\in(0,\infty)$, set $N:=J^{-1/2}$ and $\psi_{L_0}(x):=N L_0^{-3/2}\eta_{L_0}(x)$. Change of variables $x=L_0y$ gives $\|\psi_{L_0}\|_2=1$ and $[\psi_{L_0}]=\ell^{-3/2}$; direct differentiation at $x=0$ gives $\Delta\psi_{L_0}(0)=-6N e^{-1}L_0^{-7/2}\ne0$.

[L4] Frequencies of the free model: for $k\in\mathbb R^{3}$, $\omega\in\mathbb R$, and $[k]=\ell^{-1}$, the smooth formal plane-wave mode $\psi_{k,\omega}(x,t)=e^{i(k\cdot x-\omega t)}$ satisfies $i\hbar\partial_{t}\psi_{k,\omega}=-\frac{\hbar^{2}}{2m}\Delta\psi_{k,\omega}$ at every point exactly when $\hbar\omega=\frac{\hbar^{2}|k|^{2}}{2m}$, that is $\omega=\frac{\hbar|k|^{2}}{2m}$, because $\partial_{t}\psi_{k,\omega}=-i\omega\psi_{k,\omega}$ and $\Delta\psi_{k,\omega}=-|k|^{2}\psi_{k,\omega}$ and the exponential does not vanish ([[thm-algebra-of-derivatives]], [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iv)); the frequency has dimension $\tau^{-1}$ in the conventions of [[def-nrqm-framework-quantities-and-units]]. For $k\ne0$ this plane wave is not in $L^2(\mathbb R^3)$, so it is a formal mode rather than a normalized state.

[L5] For $\psi\in W^{2,2}(\mathbb R^3;\mathbb C)$, with $\mathcal F_2$ the unitary Plancherel transform, the free kinetic operator has Fourier multiplier $2\pi^2\hbar^2|\xi|^2/m$ and $P_j$ has multiplier $2\pi\hbar\xi_j$; hence $\langle K_m\psi,\psi\rangle=\frac{2\pi^2\hbar^2}{m}\int|\xi|^2|\mathcal F_2\psi(\xi)|^2d\xi=\frac1{2m}\sum_j\|P_j\psi\|_2^2$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b)-(c), [[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]], [[thm-plancherel]]).

## Counterexample

**Proof technique:** direct; compute the operator values and frequencies on explicit smooth data under the stated assumptions.

1.1 [No strong limit on a smooth class] Take the normalized $\psi_{L_0}\in C_c^{\infty}(\mathbb R^3;\mathbb C)$ of [L3], for which $\Delta\psi_{L_0}\ne0$. By [L1], $K_m\psi_{L_0}=-\frac{\hbar^2}{2m}\Delta\psi_{L_0}$, so $\|K_m\psi_{L_0}\|_2=\frac{\hbar^2}{2m}\|\Delta\psi_{L_0}\|_2\to+\infty$ as $m\downarrow0$. Therefore this family is not Cauchy in $L^2$ on this Schwartz vector and cannot converge there to $K_0\psi_{L_0}$ for any operator $K_0$; in particular it cannot converge on every Schwartz state. [given, L1, L3, algebra]

1.2 [Every fixed state with nonzero momentum second moment has divergent kinetic expectation] Let $\psi\in W^{2,2}(\mathbb R^3;\mathbb C)$ be fixed and normalized, and suppose $p_2(\psi):=\sum_j\|P_j\psi\|_2^2>0$. Each first weak derivative of $\psi$ lies in $L^2$ by its $W^{2,2}$ membership, so [L2] places $\psi$ in every $D(P_j)$ and makes each $\|P_j\psi\|_2^2$ finite. For each mass $m>0$, its model root-mean-square speed is $v_{\mathrm{rms},m}(\psi):=m^{-1}p_2(\psi)^{1/2}$, which is finite and nonzero; this speed is not held fixed when $m$ varies. By [L5], its kinetic expectation is $\langle K_m\psi,\psi\rangle=p_2(\psi)/(2m)\to+\infty$ as $m\downarrow0$. Thus the claimed divergence holds for exactly the stated fixed-state class, with no claim for vectors outside this operator domain. [given, L2, L5, algebra]

1.3 [Frequency divergence] By [L4], $[\hbar|k|^{2}/m]=\tau^{-1}$, and for each fixed wave number $k\ne0$ the formal free frequency $\omega_m(k)=\frac{\hbar|k|^2}{2m}$ satisfies $\omega_m(k)\to+\infty$ as $m\downarrow0$. Thus no finite frequency law arises at a fixed nonzero wave number in this limit, and in particular it does not produce a law linear in $|k|$. [given, L4, algebra]

2.1 Step 1.1 refutes the asserted strong convergence for every Schwartz state, step 1.2 establishes divergence for the stated nonzero-velocity class, and step 1.3 refutes a finite limiting frequency at each fixed nonzero wave number. Hence the mass-zero limiting inference fails for the displayed massive family; this does not rule out a separately specified massless model. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- What is refuted is the specific limiting assertion in the Statement: strong action convergence on every Schwartz vector to a self-adjoint $K_{0}$ together with a finite free-frequency limit at each fixed nonzero wave number. The calculation does not decide other operator topologies or separately defined families of massless models. The radiation extension is adopted with its own assumptions and dispersion and detection models.
- The computations are carried out on the smooth classes where the operator action is the classical one; no spectral convergence theorem and no limiting evolution is asserted, because steps 1.1 and 2.1 show that the relevant limits do not exist on those classes.
