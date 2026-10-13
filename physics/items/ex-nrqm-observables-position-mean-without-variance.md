---
id: ex-nrqm-observables-position-mean-without-variance
aliases: [ nrqm-observables-position-mean-without-variance ]
kind: example
domain: physics
title: "A preparation with finite mean position and infinite variance"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    cor-additivity-of-the-nonnegative-lebesgue-integral,
    def-axiom-of-choice,
    def-countable-choice,
    def-nonnegative-lebesgue-integral,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-nrqm-observables-framework-observable-and-outcome-law,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-observables-moments-and-variance,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    pthm-nrqm-observables-position-and-momentum-outcome-laws,
    pthm-nrqm-observables-preparation-moments,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    thm-monotone-convergence-for-the-integral,
    thm-nonnegative-series-bounded-partial-sums,
    thm-p-series-real-exponents,
    thm-tonelli-theorem-for-sigma-finite-product-spaces
  ]
dependency_roles:
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  pthm-nrqm-observables-position-and-momentum-outcome-laws: physical-result
  pthm-nrqm-observables-preparation-moments: physical-result
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  thm-p-series-real-exponents: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite model computation in the spinless massive-particle
  model exhibiting a legitimate preparation whose position law has a finite mean
  but infinite second moment: the state is a product of a symmetric profile with
  a power tail in the first coordinate and an arbitrary normalized transverse
  factor, its first absolute moment is finite while its second moment diverges,
  so the mean position exists and the variance of the position law does not. The
  item asserts no apparatus behaviour, no measured value and no empirical claim;
  it is a demonstration of the domain hypotheses of the moment statements."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.1 and
        Section 3.3.1, printed pages 3-5 and 79-81 (Born position density and
        expectation formulas; the power-tail construction and its moment
        estimates are supplied locally in this example)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1 and Section 3.1, printed pages 55-58 and 88-95 (domains of
        operators and integrability conditions for expectation values)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Example

Work in the spinless massive-particle model of P5 with $H=L^{2}(\mathbb R^{3};\mathbb C)$ and position operator $Q_{1}$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]). Use the numerical SI spatial coordinates of [[pthm-nrqm-observables-position-and-momentum-outcome-laws]]: $x_1,x_2,x_3,t$ are read in metres and the assigned observable is $(Q_1,\mathrm m)$. Thus the cutoff $|t|\le1$ below means a distance of at most one metre; powers of $t$ in the profile apply to its numerical value in that fixed unit. The unnormalized $g_0$ is dimensionless, $Z$ has length units, and $g$, $\varphi$, $\psi$ carry units $\mathrm m^{-1/2}$, $\mathrm m^{-1}$, $\mathrm m^{-3/2}$ respectively, so the mean is read in metres and the second moment and variance in $\mathrm m^2$. Define the symmetric profile
$$g_{0}(t):=\begin{cases}1,&|t|\le1,\\[2pt] |t|^{-3/2},&|t|>1,\end{cases}\qquad Z:=\int_{\mathbb R}|g_{0}(t)|^{2}dt,\qquad g:=Z^{-1/2}g_{0},$$
so that $g\in L^{2}(\mathbb R;\mathbb C)$ has $\|g\|_{2}=1$; fix a unit vector $\varphi\in L^{2}(\mathbb R^{2};\mathbb C)$, choose a finite Borel representative as in the cited outcome-law theorem, and put $\psi(x):=g(x_{1})\varphi(x_{2},x_{3})$. Then $\psi\in H$ is a unit vector, $[\psi]$ is a preparation, and for its position law $\mu^{Q_{1}}_{\psi}$ with density $|g|^{2}$:

(i) The mean exists and equals $0$:
$$\int_{\mathbb R}|t|\,|g(t)|^{2}dt<\infty,\qquad \int_{\mathbb R}t\,|g(t)|^{2}dt=0,$$
and $\psi\in D(|Q_{1}|^{1/2})$ while $\psi\notin D(Q_{1})$.

(ii) The second moment diverges, so the variance of the position law does not exist:
$$\int_{\mathbb R}t^{2}\,|g(t)|^{2}dt=+\infty,\qquad \int_{\mathbb R}\bigl(t-0\bigr)^{2}d\mu^{Q_{1}}_{\psi}(t)=+\infty.$$

Thus a preparation of the model can have a finite mean position without a finite second moment: the moment identities of the framework are conditional on the domains, and a finite mean does not require membership in $D(Q_{1})$.

The example is a model computation; it asserts no measured value and no apparatus behaviour.

## Facts & Assumptions

**Given:** The spinless massive model with $H=L^{2}(\mathbb R^{3};\mathbb C)$ ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]); the profile $g_{0}$, the constant $Z$ and the normalized profile $g=Z^{-1/2}g_{0}$; a unit vector $\varphi\in L^{2}(\mathbb R^{2};\mathbb C)$; the product state $\psi=g\otimes\varphi$; the outcome-law reading of [[def-nrqm-observables-framework-observable-and-outcome-law]]; the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] **Power series and harmonic divergence.** $\sum_{k\ge1}k^{-p}$ converges exactly for $p>1$ ([[thm-p-series-real-exponents]]), and a nonnegative series converges if and only if its partial sums are bounded ([[thm-nonnegative-series-bounded-partial-sums]]), so for $p=1$ the partial sums of $\sum_{k\ge1}k^{-1}$ are unbounded and the series diverges to $+\infty$.

[F2] **Block comparison for nonnegative integrals.** On $[k,k+1]$ with $k\ge1$ one has $t^{-2}\le k^{-2}$ and $t^{-1}\ge(k+1)^{-1}$; monotonicity and additivity of the nonnegative Lebesgue integral ([[def-nonnegative-lebesgue-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]) therefore give $\int_{k}^{k+1}t^{-2}dt\le k^{-2}$ and $\int_{k}^{k+1}t^{-1}dt\ge(k+1)^{-1}$ for every $k$, and monotone convergence ([[thm-monotone-convergence-for-the-integral]]) passes the resulting bounds to the improper integrals: $\int_{1}^{\infty}t^{-2}dt\le\sum_{k\ge1}k^{-2}<\infty$ and $\int_{1}^{\infty}t^{-1}dt\ge\sum_{k\ge2}k^{-1}=\infty$.

[F3] **Product states and their position law.** For the unit product state $\psi=g\otimes\varphi$, the law of $Q_{1}$ has density $f_{1}(t)=\int_{\mathbb R^{2}}|\psi(x_{\perp},t)|^{2}dx_{\perp}=|g(t)|^{2}\int|\varphi|^{2}=|g(t)|^{2}$, and $\mu^{Q_{1}}_{\psi}(\{\lambda\})=0$ for every $\lambda$ ([[pthm-nrqm-observables-position-and-momentum-outcome-laws]] clauses (a) and (d), [[thm-tonelli-theorem-for-sigma-finite-product-spaces]],).

[F4] **Moment criterion.** The mean of the position law is finite exactly when the state lies in $D(|Q_{1}|^{1/2})$, the second moment is finite exactly when it lies in $D(Q_{1})=\{h:x_{1}h\in L^{2}\}$, and for a unit vector in $D(Q_{1})$ the mean is $\langle Q_{1}\psi,\psi\rangle$ and the variance is the second moment minus the square of the mean ([[pthm-nrqm-observables-preparation-moments]] clauses (a)-(c), [[lem-nrqm-observables-moments-and-variance]] clauses (a)-(c)).

[F5] **Evenness.** The substitution $t\mapsto-t$ is a $C^{1}$ change of variables with unit Jacobian, so for the even profile $g$ the function $t\mapsto t|g(t)|^{2}$ is odd and its integral over $\mathbb R$ vanishes whenever it is absolutely integrable ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct; normalize the profile and evaluate the first and second absolute moments by comparison with the $p$-series.

1.1 [The profile is a normalizable $L^{2}$ function] The profile $g_{0}$ is measurable (it is continuous on $|t|>1$ and on $|t|<1$ and bounded near the junction) and nonnegative, and $Z=\int_{-1}^{1}1\,dt+2\int_{1}^{\infty}t^{-3}dt=2+2\int_{1}^{\infty}t^{-3}dt$, where by the block comparison of [F2] with $h(t)=t^{-3}$ the tail satisfies $0<\int_{1}^{\infty}t^{-3}dt\le\sum_{k\ge1}k^{-3}<\infty$; hence $0<Z<\infty$ and $g=Z^{-1/2}g_{0}$ is a well-defined element of $L^{2}(\mathbb R;\mathbb C)$ with $\|g\|_{2}^{2}=Z^{-1}Z=1$. [given, F1, F2, algebra]

2.1 [The first moment is finite and the second is infinite] Using evenness and the explicit form of $g$, $\int_{\mathbb R}|t|\,|g(t)|^{2}dt=Z^{-1}\bigl(\int_{-1}^{1}|t|dt+2\int_{1}^{\infty}t\cdot t^{-3}dt\bigr)=Z^{-1}\bigl(1+2\int_{1}^{\infty}t^{-2}dt\bigr)$, which is finite and at least $Z^{-1}>0$ by the bound $\int_{1}^{\infty}t^{-2}dt\le\sum_{k\ge1}k^{-2}<\infty$ of [F2]; and $\int_{\mathbb R}t^{2}|g(t)|^{2}dt=Z^{-1}\bigl(\int_{-1}^{1}t^{2}dt+2\int_{1}^{\infty}t^{2}\cdot t^{-3}dt\bigr)=Z^{-1}\bigl(\tfrac23+2\int_{1}^{\infty}t^{-1}dt\bigr)=+\infty$ because $\int_{1}^{\infty}t^{-1}dt\ge\sum_{k\ge2}k^{-1}=\infty$ by [F2] and [F1]. [given, step 1.1, F1, F2, algebra]

3.1 [The state and its position law] The product $\psi=g\otimes\varphi$ is an element of $H$ with $\|\psi\|^{2}=\|g\|_{2}^{2}\|\varphi\|^{2}=1$ by Tonelli and the normalizations of step 1.1; hence $[\psi]$ is a pure preparation. By [F3] the law of $Q_{1}$ in this preparation has density $|g|^{2}$ on $\mathbb R$ (independent of $\varphi$), so its first and second absolute moments are exactly the integrals computed in step 2.1, and every exact value has probability zero. [given, step 1.1, F3, algebra]

4.1 [Mean finite, variance infinite] By step 3.1 the position law of the preparation has density $|g|^{2}$, so [F5] applies: the mean $\int t\,d\mu^{Q_{1}}_{\psi}=Z^{-1}\int t|g_{0}(t)|^{2}dt$ vanishes because $t|g_{0}(t)|^{2}$ is odd and integrable by step 2.1, and the mean is finite; the second moment is $+\infty$ by steps 2.1-3.1, so the variance, which is the second moment minus the square of the (zero) mean, does not exist as a finite number. By the criterion [F4] this is exactly the statement $\psi\in D(|Q_{1}|^{1/2})$ but $\psi\notin D(Q_{1})$; the divergence of $\int t^{2}|g|^{2}dt$ is the same as the failure of $x_{1}\psi\in L^{2}$. [step 2.1, step 3.1, F4, F5, algebra] ∎

## Remarks

- The profile is symmetric, so the finite mean is zero; a non-symmetric variant shifts the mean while keeping the second moment infinite, since the tail exponent $3$ is what decides finiteness: $|g|^{2}$ decays like $t^{-3}$, whose first moment $t\cdot t^{-3}=t^{-2}$ is integrable while the second is not.
- The example shows that the domain hypotheses of [[pthm-nrqm-observables-preparation-moments]] are not automatic: the state here is a perfectly legitimate preparation of the model, yet the variance of the position law is infinite and the statement "the spread $\Delta Q_{1}$" has no finite value in this preparation.
