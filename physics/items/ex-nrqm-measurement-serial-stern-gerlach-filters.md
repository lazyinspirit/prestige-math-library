---
id: ex-nrqm-measurement-serial-stern-gerlach-filters
aliases: [ nrqm-measurement-serial-stern-gerlach-filters ]
kind: example
domain: physics
title: "Serial ideal Stern-Gerlach filters: a two-level model computation"
status: published
origin: pipeline
dependency_level: 11
deps:
  [
    cor-inner-product-induces-a-norm,
    def-bounded-linear-operator,
    def-complex-numbers-and-arithmetic,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-composites-rank-one-operator-calculus,
    post-nrqm-framework-identical-particles-and-spin,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles,
    thm-complex-spectral-theorem-for-normal-endomorphisms
  ]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact finite model computation for a declared two-level
  spin-half system and declared ideal filters: spin-component readouts along
  successive magnetic axes, their outcome probabilities and conditional states,
  and the order dependence of the serial statistics. The computation idealises a
  Stern-Gerlach filter as a declared ideal sharp measurement of a spin
  component; it does not derive the spatial deflection, the field geometry or
  the detector response, reports no measurement and asserts no property of
  silver atoms or of the 1922 experiments."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        7.4.2, printed pages 161-164 (Stern-Gerlach filters in series, the
        amplitude cos((phi-theta)/2) and the quarter-intensity example)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-half, Bras, Kets, and Operators', Section 1, printed pages 1-7
        (Stern-Gerlach boxes in series and the loss of memory of the first
        filter)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P3 for the declared system and assume Countable Choice, as in [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]. Declare a two-level system whose assigned Hilbert space is $H=\mathbb C^{2}$ with the standard inner product and orthonormal basis $(e_{+},e_{-})$ ([[def-nrqm-state-geometry-framework-state-space]], [[def-inner-product-space]], [[def-hilbert-space]]), interpreted as the two eigenstates of the $z$-component of a spin-half degree of freedom. Use SI units: $\hbar>0$ is the adopted reduced Planck constant, with action dimension $M L^2 T^{-1}$ and unit joule second ($\mathrm{J}\,\mathrm{s}$); the matrices $J_i$ and the angles are dimensionless. Thus $S_i$, $S_n$ and their outcome values have angular-momentum dimension $M L^2 T^{-1}$ and are read in $\mathrm{J}\,\mathrm{s}$. No numerical value of $\hbar$ is used. By the spin assignment of P6 with $s=\tfrac12$, the spin operators are $S_{i}=\hbar J_{i}$ with $J_{i}=\tfrac12\sigma_{i}$ for the Pauli matrices in this basis ([[post-nrqm-framework-identical-particles-and-spin]] clause (ii), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)).

For a unit vector $n=(\sin\theta,0,\cos\theta)$, $0\le\theta\le\pi$, put
$$u(\theta):=\cos\frac{\theta}{2}\,e_{+}+\sin\frac{\theta}{2}\,e_{-},\qquad v(\theta):=-\sin\frac{\theta}{2}\,e_{+}+\cos\frac{\theta}{2}\,e_{-}.$$
Then $u(\theta)$ and $v(\theta)$ are orthonormal and
$$S_{n}:=n\cdot \mathbf S=\frac{\hbar}{2}(\sin\theta\,\sigma_{x}+\cos\theta\,\sigma_{z}),\qquad S_{n}u(\theta)=\frac{\hbar}{2}u(\theta),\qquad S_{n}v(\theta)=-\frac{\hbar}{2}v(\theta).$$
Declare the **ideal filter** $F(n)$ to be the ideal sharp measurement with the two outcomes $+$ and $-$, whose outcome projections are $T_{u(\theta),u(\theta)}$ and $T_{v(\theta),v(\theta)}$, the spectral projections of $S_{n}$ at $\pm\hbar/2$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (c), [[lem-nrqm-composites-rank-one-operator-calculus]]).

The example considers three ideal filters in series, $F_{1}=F(e_{z})$ (so $\theta=0$), $F_{2}=F(n)$ with axis $n$ at angle $\theta$, and $F_{3}=F(m)$ with axis $m=(\sin\varphi,0,\cos\varphi)$, and the initial preparation $\rho_{0}=T_{e_{+},e_{+}}$, the state of a spin-half system with $S_{z}=+\hbar/2$. Then:

**(i)** Through $F_{1}$ the outcome $+$ has probability $1$ and the conditional state is again $\rho_{0}$.

**(ii)** Through $F_{2}$, conditioned on having passed $F_{1}$,
$$\mathbb P(+)=\cos^{2}\frac{\theta}{2},\qquad \mathbb P(-)=\sin^{2}\frac{\theta}{2},$$
and, if $\cos^2(\theta/2)>0$, after the outcome $+$ the conditional state is the pure state of $u(\theta)$.

**(iii)** If $\cos^2(\theta/2)>0$, through $F_{3}$, conditioned on having passed $F_{2}$ with the outcome $+$, the outcome $+$ has probability
$$\mathbb P(+)=\Bigl|\langle u(\varphi),u(\theta)\rangle\Bigr|^{2}=\cos^{2}\frac{\varphi-\theta}{2}.$$
For all $0\le\theta\le\pi$, including the zero-probability first branch, the joint probability of the outcomes $+,+,+$ is $\cos^{2}(\theta/2)\cos^{2}((\varphi-\theta)/2)$.

**(iv)** In particular, for $\theta=\pi/2$ and $\varphi=\pi$, the model probability of outcome $+$ at $F_{2}$ is $\tfrac12$, and conditioned on that outcome the model probability of outcome $+$ at $F_{3}$ is also $\tfrac12$, giving joint probability $\tfrac12\cdot\tfrac12=\tfrac14$ for passing all three declared filters. If $F_{2}$ is omitted, $F_{3}$ has model probability $\cos^{2}(\pi/2)=0$ of outcome $+$ on the state emerging from $F_{1}$. Thus the intervening declared measurement changes the later model probabilities; these are not measured transmission fractions.

The computation is a model computation for declared ideal filters and the declared spin assignment: it does not derive the spatial Stern-Gerlach deflection or the inhomogeneous-field geometry, records no detector counts, resolution, background or uncertainty, and asserts nothing about the historical silver-atom experiments or about any particular apparatus.

## Facts & Assumptions

**Given:** The two-level Hilbert space $H=\mathbb C^{2}$ with orthonormal basis $(e_{+},e_{-})$; the spin-half operators $S_{i}=\hbar J_{i}$; unit vectors $n=(\sin\theta,0,\cos\theta)$, $m=(\sin\varphi,0,\cos\varphi)$; the vectors $u(\theta),v(\theta),u(\varphi),v(\varphi)$; the declared filters $F_{1},F_{2},F_{3}$; the preparation $\rho_{0}=T_{e_{+},e_{+}}$.

[F1] **Spin-half representation.** For $s=\tfrac12$ the matrices of $J_{x},J_{y},J_{z}$ in the basis $(e_{+},e_{-})$ are $\tfrac12\sigma_{x},\tfrac12\sigma_{y},\tfrac12\sigma_{z}$ with $\sigma_{x}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_{z}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, and $S_{i}=\hbar J_{i}$ are self-adjoint ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), [[post-nrqm-framework-identical-particles-and-spin]] clause (ii)).

[F2] **Spectral projections.** The vectors $u(\theta),v(\theta)$ are orthonormal, span $H$, and satisfy $S_{n}u(\theta)=\tfrac{\hbar}{2}u(\theta)$, $S_{n}v(\theta)=-\tfrac{\hbar}{2}v(\theta)$; hence $T_{u(\theta),u(\theta)}$ and $T_{v(\theta),v(\theta)}$ are the spectral projections of the bounded self-adjoint operator $S_{n}$ at the eigenvalues $\pm\hbar/2$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[lem-nrqm-composites-rank-one-operator-calculus]] clause (c)).

[F3] **Outcome law and update.** For a declared ideal sharp measurement with projections $P_{a}$ the probability of the outcome $a$ in a state $\rho$ is $\operatorname{tr}(\rho P_{a})=\|P_{a}\psi\|^{2}$ for a pure preparation $[\psi]$, and the conditional state after a positive-probability outcome is $\rho_{a}=P_{a}\rho P_{a}/p_{a}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a)-(b), [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clauses (a)-(b)).

[F4] **Rank-one pairing.** $T_{u,u}x=\langle x,u\rangle u$, so $\operatorname{tr}(T_{x,x}T_{u,u})=|\langle x,u\rangle|^{2}$ for unit $x,u$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b)-(c)).

[F5] **Elementary overlaps.** For real angles, $\langle u(\varphi),u(\theta)\rangle=\cos\frac{\varphi}{2}\cos\frac{\theta}{2}+\sin\frac{\varphi}{2}\sin\frac{\theta}{2}=\cos\frac{\varphi-\theta}{2}$, and $\langle u(0),u(\theta)\rangle=\cos\frac{\theta}{2}$ ([[lem-complex-conjugation-and-modulus-laws]], [[cor-inner-product-induces-a-norm]]).

## Verification

**Proof technique:** direct; compute the spectral projections, probabilities and conditional states on the explicit two-dimensional data.

1.1 [The filter $F_{1}$ and clause (i)] For $\theta=0$ the vectors are $u(0)=e_{+}$, $v(0)=e_{-}$, and $P_{+}=T_{e_{+},e_{+}}$; by [F3] and [F4], $\operatorname{tr}(\rho_{0}P_{+})=|\langle e_{+},e_{+}\rangle|^{2}=1$, and the conditional state after the outcome $+$ is $P_{+}\rho_{0}P_{+}/1=T_{e_{+},e_{+}}=\rho_{0}$. This is (i). [given, F1, F2, F3, F4, algebra]

2.1 [Clause (ii)] By [F2] the projections of $F_{2}$ are $T_{u(\theta),u(\theta)}$ and $T_{v(\theta),v(\theta)}$; [F3] and [F4] give $\mathbb P(+)=\operatorname{tr}(T_{e_{+},e_{+}}T_{u(\theta),u(\theta)})=|\langle e_{+},u(\theta)\rangle|^{2}=\cos^{2}(\theta/2)$ and $\mathbb P(-)=|\langle e_{+},v(\theta)\rangle|^{2}=\sin^{2}(\theta/2)$, the total being $1$. When $\cos^2(\theta/2)>0$, after the outcome $+$ the conditional state is $T_{u(\theta),u(\theta)}$ by [F3] and the rank-one rules, because $T_{u,u}T_{e_{+},e_{+}}T_{u,u}=|\langle e_{+},u\rangle|^{2}T_{u,u}$. This is (ii). [step 1.1, given, F2, F3, F4, F5, algebra]

3.1 [Clause (iii)] If $\cos^2(\theta/2)>0$, the preparation after the outcome $+$ at $F_{2}$ is the pure state of $u(\theta)$, so [F3] and [F4] give $\mathbb P(+)=\operatorname{tr}(T_{u(\theta),u(\theta)}T_{u(\varphi),u(\varphi)})=|\langle u(\theta),u(\varphi)\rangle|^{2}=\cos^{2}((\varphi-\theta)/2)$ by [F5]; multiplying this conditional probability by the passing probability from step 2.1 gives the joint probability $\cos^{2}(\theta/2)\cos^{2}((\varphi-\theta)/2)$ of the outcome sequence $+,+,+$ by the definition of conditional update. If $\cos^2(\theta/2)=0$, the event $+,+,+$ is contained in the zero-probability event of passing $F_2$, so its probability is zero; the displayed joint formula still holds, while no conditional state on that branch is defined. This is (iii). [step 2.1, given, F3, F4, F5, algebra]

4.1 [Clause (iv) and scope] Substituting $\theta=\pi/2$ and $\varphi=\pi$ gives $\cos^{2}(\pi/4)=\tfrac12$ for each of the two intermediate steps, hence joint probability $\tfrac14$; without $F_{2}$ the preparation reaching $F_{3}$ would still be $T_{e_{+},e_{+}}$ and the probability of the outcome $+$ at $F_{3}$ would be $|\langle e_{+},u(\pi)\rangle|^{2}=\cos^{2}(\pi/2)=0$, so the presence of the intervening declared measurement changes the later statistics. All quantities computed are model probabilities for the declared filters; no spatial deflection, detector response or measured count was used. This is (iv). [step 3.1, given, F2, F3, F5, algebra] ∎

## Remarks

- **Idealization.** The declared filters model only the spin-component outcomes and conditional updates. This example supplies no spatial field, beam-deflection or detector-response model; those are separate material and are not claimed here ([[rem-nrqm-measurement-scope-and-empirical-status]]).
- **Order dependence is model-internal.** The statement that inserting $F_{2}$ changes the later statistics is a consequence of the Lueders update for the declared filters; it is not a claim that every physical filter disturbs every subsequent measurement in this way, and it is not a claim about atoms in the absence of a declared preparation and detection model.
- **No empirical content.** The number $\tfrac14$ is an exact model probability for the declared ideal filters, not a measured fraction; no calibration, efficiency, background, alignment or sampling model is supplied.
