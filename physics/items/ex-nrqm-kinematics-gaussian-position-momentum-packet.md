---
id: ex-nrqm-kinematics-gaussian-position-momentum-packet
aliases: [ nrqm-kinematics-gaussian-position-momentum-packet ]
kind: example
domain: physics
title: "The Gaussian position and momentum packet of the massive model"
status: published
origin: session
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-heat-kernel,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-schwartz-space-and-its-seminorms,
    lem-classical-derivatives-are-weak-derivatives,
    lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization,
    lem-first-and-second-moments-of-the-heat-kernel,
    lem-heat-kernel-normalisation-scaling-and-derivatives,
    lem-nrqm-composites-momentum-fourier-jacobian,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-kinematics-momentum-representation,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    thm-exponential-beats-every-polynomial,
    thm-gaussian-integral,
    thm-plancherel,
    thm-tonelli-theorem-for-sigma-finite-product-spaces
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-heat-kernel: mathematical-premise
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  lem-first-and-second-moments-of-the-heat-kernel: mathematical-premise
  lem-heat-kernel-normalisation-scaling-and-derivatives: mathematical-premise
  lem-nrqm-composites-momentum-fourier-jacobian: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  thm-exponential-beats-every-polynomial: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.1.3,
        printed pages 27-29 (PDF pages 30-32): the Gaussian wavepacket and its
        construction from momentum amplitudes"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        2.3.2-2.3.3 and Box 2.3, printed pages 27-31 (PDF pages 35-39): the
        Gaussian packet's momentum-space amplitude and the Gaussian integral"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
physical_scope: "An exact model computation for the spin-0 massive particle
  model of the framework: a normalized three-dimensional Gaussian wave function,
  its unitary momentum representative with the transposed width
  sigma_p=hbar/sigma, the resulting position and momentum outcome densities,
  their variances and the product hbar/2 in this single family of preparations.
  The item uses the model's own sharp outcome laws; it computes no dynamics,
  models no measurement, asserts no uncertainty theorem for arbitrary
  preparations and records no empirical result."
verification:
  precheck: pass
---
## Example

Adopt the observable and probability postulate P2 and the massive-particle model
postulate P5 read through
[[def-nrqm-kinematics-framework-massive-spin-s-model]] for a spinless particle
($s=0$, $r=1$) of mass parameter $m>0$, and assume the Axiom of Choice and
the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Fix a width
$\sigma>0$ and define
$$\psi_{\sigma}(x):=(\pi\sigma^{2})^{-3/4}e^{-|x|^{2}/(2\sigma^{2})},\qquad x\in\mathbb R^{3}.$$
Then:

(i) $\psi_{\sigma}\in\mathcal S(\mathbb R^{3};\mathbb C)$ with
$\|\psi_{\sigma}\|=1$, so its ray is a pure preparation of the model and
$\psi_{\sigma}\in D(Q_{j})\cap D(P_{k})$ for all $j,k$, with
$D_{j}\psi_{\sigma}=-\sigma^{-2}x_{j}\psi_{\sigma}$;

(ii) with $U$ the momentum transform of
[[lem-nrqm-kinematics-momentum-representation]], $U\psi_{\sigma}=\psi_{\sigma_{p}}$
where $\sigma_{p}:=\hbar/\sigma$, that is
$$(U\psi_{\sigma})(p)=(\pi\sigma_{p}^{2})^{-3/4}e^{-|p|^{2}/(2\sigma_{p}^{2})};$$

(iii) the position law of $Q_{j}$ in the preparation $[\psi_{\sigma}]$ has
density $(\pi\sigma^{2})^{-1/2}e^{-t^{2}/\sigma^{2}}$ in the coordinate
$t=x_{j}$, hence mean $0$ and variance $\sigma^{2}/2$; the momentum law of
$P_{k}$ has density $(\pi\sigma_{p}^{2})^{-1/2}e^{-p^{2}/\sigma_{p}^{2}}$ in
the coordinate $p=p_{k}$, mean $0$ and variance
$\sigma_{p}^{2}/2=\hbar^{2}/(2\sigma^{2})$; the product of the two standard
deviations is $\hbar/2$;

(iv) the joint position law of the three position observables has density
$|\psi_{\sigma}(x)|^{2}=(\pi\sigma^{2})^{-3/2}e^{-|x|^{2}/\sigma^{2}}$, and
the momentum representative has density
$|(U\psi_{\sigma})(p)|^{2}=(\pi\sigma_{p}^{2})^{-3/2}e^{-|p|^{2}/\sigma_{p}^{2}}$
against $dp$.

The example is an exact model computation in one family of preparations; no
dynamics, detection model or empirical value is involved, and the variance
statements are properties of this family only.

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Countable Choice; a width $\sigma>0$; the action constant $\hbar>0$; the model of [[def-nrqm-kinematics-framework-massive-spin-s-model]] with $r=1$; the vector $\psi_{\sigma}$; the momentum transform $U$; a coordinate $j$ or $k$.

[F1] **Heat kernel.** $\Gamma(x,t):=(4\pi t)^{-n/2}e^{-|x|^{2}/(4t)}$ on $\mathbb R^{n}$, $t>0$ ([[def-heat-kernel]]), with $\int_{\mathbb R^{n}}\Gamma(x,t)\,dx=1$, $\Gamma$ of class $C^{\infty}$, and for every multi-index $\alpha$ a constant $C_{n,\alpha}<\infty$ with $|D^{\alpha}_{x}\Gamma(x,t)|\le C_{n,\alpha}t^{-(|\alpha|+n)/2}e^{-|x|^{2}/(8t)}$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]] clauses (i),(iii),(iv)); all first and second moments are absolutely integrable and $\int_{\mathbb R^{n}}x_{i}\Gamma(x,t)dx=0$, $\int_{\mathbb R^{n}}x_{i}x_{j}\Gamma(x,t)dx=2t\delta_{ij}$ ([[lem-first-and-second-moments-of-the-heat-kernel]]).

[F2] **Gaussian Fourier transform.** With the $2\pi$-normalized transform of [[thm-plancherel]] one has $\mathcal F_{2}(e^{-\pi t|x|^{2}})(\xi)=t^{-n/2}e^{-\pi|\xi|^{2}/t}$ for $t>0$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]); the momentum transform satisfies $U=D_{\hbar}\mathcal F_{2}$ with $D_{\hbar}g(p)=(2\pi\hbar)^{-3/2}g(p/(2\pi\hbar))$ and $(U\varphi)(p)=(2\pi\hbar)^{-3/2}\int e^{-ip\cdot x/\hbar}\varphi(x)dx$ for $\varphi\in\mathcal S(\mathbb R^{3};\mathbb C)$ and every $p\in\mathbb R^{3}$, $\mathcal F_{2}$ being the unitary extension of the Schwartz transform ([[lem-nrqm-composites-momentum-fourier-jacobian]] clauses (a),(c), [[lem-nrqm-kinematics-momentum-representation]] clause (a), [[thm-plancherel]]).

[F3] **Product integrals and domination.** Integrals of nonnegative measurable functions on products may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); $\int_{\mathbb R}e^{-u^{2}}du=\sqrt\pi$ ([[thm-gaussian-integral]]); and $\frac{x^{m}}{e^{ax}}\to0$ as $x\to+\infty$ for every $m\in\mathbb N$ and $a>0$ ([[thm-exponential-beats-every-polynomial]]).

[F4] **Schwartz classes and weak derivatives.** A class lies in $\mathcal S(\mathbb R^{3};\mathbb C)$ exactly when all seminorms $\sup_{x}|x^{\alpha}\partial^{\beta}f(x)|$ are finite ([[def-schwartz-space-and-its-seminorms]]); a $C^{1}$ function whose classical partial derivatives lie in $L^{2}$ has those derivatives as weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F5] **Outcome laws.** Under the stated Choice hypotheses, the position law of $Q_{j}$ in a preparation of the unit class $\psi$ is $\mu^{Q_{j}}_{\psi}(B)=\int_{x_{j}^{-1}(B)}|\psi(x)|^{2}dx$ and the momentum law of $P_{k}$ is $\mu^{P_{k}}_{\psi}(B)=\int_{\{p_{k}\in B\}}|(U\psi)(p)|^{2}dp$; the joint position law has density $|\psi|^{2}$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clauses (a)-(c), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

## Verification

**Proof technique:** direct; identify $\psi_{\sigma}$ and its square with heat kernel slices, so that normalisation, smoothness, decay and all moments come from the heat-kernel items; transform the Gaussian with the published Gaussian Fourier lemma; and read the model's outcome densities and their variances from the heat-kernel moment identities.

**Given:** The data of the example and [F1]-[F5].

1.1 [Heat-kernel slices] Comparing exponents and normalization with [F1], $\Gamma\Bigl(x,\frac{\sigma^{2}}{2}\Bigr)=(2\pi\sigma^{2})^{-3/2}e^{-|x|^{2}/(2\sigma^{2})}=2^{-3/2}(\pi\sigma^{2})^{-3/4}\psi_{\sigma}(x),$ since $4\cdot\frac{\sigma^{2}}{2}=2\sigma^{2}$; and $\Gamma\Bigl(x,\frac{\sigma^{2}}{4}\Bigr)=(\pi\sigma^{2})^{-3/2}e^{-|x|^{2}/\sigma^{2}} =|\psi_{\sigma}(x)|^{2}.$ [F1, algebra]

2.1 [Schwartz class, norm and domain] By step 1.1 and [F1] the function $\psi_{\sigma}$ is a constant multiple of the $C^{\infty}$ kernel slice $\Gamma(\cdot,\sigma^{2}/2)$, hence $C^{\infty}$, and every derivative obeys $|D^{\beta}\psi_{\sigma}(x)|\le C'_{\beta}e^{-|x|^{2}/(4\sigma^{2})}$ [F1]. For every multi-index $\alpha$, the seminorm $\sup_{x}|x^{\alpha}D^{\beta}\psi_{\sigma}(x)| \le C'_{\beta}\sup_{x}(1+|x|)^{|\alpha|}e^{-|x|^{2}/(4\sigma^{2})}$ is finite: the function is continuous on $\mathbb R^{3}$ and tends to $0$ at infinity, because $(1+r)^{m}e^{-r^{2}/(4\sigma^{2})}\to0$ as $r\to+\infty$, which follows from the substitution $x=r^{2}/(4\sigma^{2})$ in [F3]. Hence $\psi_{\sigma}\in\mathcal S(\mathbb R^{3};\mathbb C)$ [F4]. Its norm is $\|\psi_{\sigma}\|^{2}=\int|\psi_{\sigma}|^{2} =\int\Gamma(x,\sigma^{2}/4)\,dx=1$ by step 1.1 and the normalisation of [F1]. The components $x_{j}\psi_{\sigma}$ lie in $L^{2}$ because $\int x_{j}^{2}|\psi_{\sigma}|^{2}dx=\int x_{j}^{2}\Gamma(x,\sigma^{2}/4)dx =\sigma^{2}/2$ by [F1]; and $D_{j}\psi_{\sigma}=-\sigma^{-2}x_{j}\psi_{\sigma}$, which lies in $L^{2}$ by the same computation, is the weak derivative by [F4]. This proves (i). [step 1.1, F1, F3, F4, algebra]

2.2 [Position density and variance] By [F5] and step 1.1, $\mu^{Q_{j}}_{\psi_{\sigma}}(B)=\int_{x_{j}^{-1}(B)}\Gamma(x,\sigma^{2}/4)dx$; writing $x=(x_{\perp},t)$ and iterating by [F3] gives the density $f(t)=e^{-t^{2}/\sigma^{2}}(\pi\sigma^{2})^{-3/2}\int_{\mathbb R^{2}}e^{-|x_{\perp}|^{2}/\sigma^{2}}dx_{\perp} =(\pi\sigma^{2})^{-1/2}e^{-t^{2}/\sigma^{2}}$, the marginal of $\Gamma(\cdot,\sigma^{2}/4)$. Its mean vanishes and its second moment is $\int t^{2}f(t)dt=\int t^{2}\Gamma(t,\sigma^{2}/4)dt=\sigma^{2}/2$ by [F1]; hence the variance is $\sigma^{2}/2$. [step 1.1, F1, F3, F5, algebra]

3.1 [Momentum representative] By [F2] and the computation $\psi_{\sigma}=(\pi\sigma^{2})^{-3/4}e^{-|x|^{2}/(2\sigma^{2})}$, $U\psi_{\sigma}(p)=(\pi\sigma^{2})^{-3/4}(2\pi\hbar)^{-3/2} \mathcal F_{2}\bigl(e^{-|x|^{2}/(2\sigma^{2})}\bigr)\Bigl(\frac{p}{2\pi\hbar}\Bigr);$ the Gaussian Fourier lemma with $t=(2\pi\sigma^{2})^{-1}$ gives $\mathcal F_{2}\bigl(e^{-|x|^{2}/(2\sigma^{2})}\bigr)(\xi) =(2\pi\sigma^{2})^{3/2}e^{-2\pi^{2}\sigma^{2}|\xi|^{2}}$, and substituting $\xi=p/(2\pi\hbar)$ yields $U\psi_{\sigma}(p)=(\pi\sigma^{2})^{-3/4}(2\pi\hbar)^{-3/2}(2\pi\sigma^{2})^{3/2} e^{-\sigma^{2}|p|^{2}/(2\hbar^{2})} =\bigl(\pi(\hbar/\sigma)^{2}\bigr)^{-3/4}e^{-|p|^{2}/(2(\hbar/\sigma)^{2})},$ which is (ii) with $\sigma_{p}=\hbar/\sigma$. [step 2.1, F2, algebra]

4.1 [Momentum slice] Comparing step 3.1 with [F1], $|U\psi_{\sigma}(p)|^{2}=(\pi\sigma_{p}^{2})^{-3/2}e^{-|p|^{2}/\sigma_{p}^{2}} =\Gamma\Bigl(p,\frac{\sigma_{p}^{2}}{4}\Bigr).$ [step 3.1, F1, algebra]

5.1 [Momentum density and variance] By [F5] and step 4.1, $\mu^{P_{k}}_{\psi_{\sigma}}(B)=\int_{\{p_{k}\in B\}}\Gamma(p,\sigma_{p}^{2}/4)dp$; the same marginal computation with width $\sigma_{p}$ gives density $(\pi\sigma_{p}^{2})^{-1/2}e^{-p^{2}/\sigma_{p}^{2}}$, mean $0$ and variance $\sigma_{p}^{2}/2=\hbar^{2}/(2\sigma^{2})$ by [F1]. The product of standard deviations is $\bigl(\sigma/\sqrt2\bigr)\bigl(\hbar/(\sqrt2\sigma)\bigr)=\hbar/2$. [step 4.1, step 2.2, F1, algebra]

6.1 [Joint densities and scope] The joint position density is $|\psi_{\sigma}|^{2}=\Gamma(\cdot,\sigma^{2}/4)$ and the momentum density is $|U\psi_{\sigma}|^{2}=\Gamma(\cdot,\sigma_{p}^{2}/4)$ by steps 1.1 and 4.1, which is (iv). All computations used only the heat-kernel and Fourier suppliers and the sharp outcome laws of [F5]; no dynamics, detector, sampling or empirical input entered. [step 1.1, step 3.1, step 4.1, step 2.2, step 5.1, F5] ∎

## Remarks

- **One family only.** The variances computed here are those of the Gaussian
  family; no inequality for general preparations is asserted by this example,
  and the numerical product $\hbar/2$ is a property of this family, not a
  universal law.
- **Internal factor.** For $s>0$ the vector $\psi_{\sigma}\otimes e_{m_{0}}$
  (one component equal to $\psi_{\sigma}$, all others zero) has the same
  position and momentum laws by the internal-factor invariance of
  [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (d).
