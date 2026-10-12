---
id: pthm-nrqm-driven-dynamics-first-order-transition-amplitude
aliases: [nrqm-driven-dynamics-first-order-transition-amplitude]
kind: physics-theorem
domain: physics
title: "First-order transition amplitudes for a bounded control: Dyson remainder, the sinusoidal drive with its co- and counter-rotating parts, and the outcome-probability error"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-driven-dynamics-framework-driven-model, def-nrqm-driven-dynamics-framework-interaction-picture, pthm-nrqm-driven-dynamics-mild-propagator-and-pictures, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, prop-nrqm-controlled-dynamics-first-order-amplitude-tail, thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-inner-product-space, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-countable-choice, def-axiom-of-choice, def-nrqm-state-geometry-pure-mixed-states-and-purity]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  def-nrqm-driven-dynamics-framework-interaction-picture: formulation-prerequisite
  pthm-nrqm-driven-dynamics-mild-propagator-and-pictures: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  prop-nrqm-controlled-dynamics-first-order-amplitude-tail: mathematical-premise
  thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-inner-product-space: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "First-order transition amplitudes and their error in the bounded-control driven model: the exact amplitude in an orthonormal family of H0 eigenvectors, its first-order term with the explicit Dyson remainder bound, the closed evaluation for a sinusoidal control split into co-rotating and counter-rotating parts with their bounds, the linear growth at resonance, and the resulting bound on the outcome probability. The theorem is conditional on a bounded self-adjoint control and an orthonormal eigenfamily of H0; it asserts no long-time limit, no Fermi golden rule, no continuum density of states, no transition rate, no decay and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3 printed pages 213-214 (PDF pages 221-222): the first-order amplitude a_k(t) (9.47) and the transition probability of equation (9.48) for a harmonic perturbation V(t) = V0 exp(i omega t), with the resonant sin^2 growth"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared driven model of [[def-nrqm-driven-dynamics-framework-driven-model]] in the **bounded-control class** of clause (b)(ii): $\mathfrak H$ is the model's state space, $H_{0}$ is self-adjoint on $D(H_{0})$, $V:I\to\mathcal B(\mathfrak H)$ is strongly continuous with self-adjoint values, $v=\sup_{t\in I}\|V(t)\|<\infty$ and $H(t)=H_{0}+V(t)$; let $U(t,s)$ be the mild propagator and put $K:=v/\hbar$. Let $(\varphi_{j})_{j\in J}$ be an orthonormal family in $D(H_{0})$ with $H_{0}\varphi_{j}=E_{j}\varphi_{j}$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]) — a complete family is not required — and fix labels $i,j\in J$ and $s\le t$ in $I$, with $\tau:=t-s$ and $\Delta:=E_{j}-E_{i}$. Let $A_{ji}(t,s)=e^{i\Delta\tau/\hbar}\langle U(t,s)\varphi_{i},\varphi_{j}\rangle$ be the transition amplitude of clause (e) of the model and define its first-order term
$$A^{(1)}_{ji}(t,s):=-\frac{i}{\hbar}\int_{s}^{t}e^{i\Delta(r-s)/\hbar}\bigl\langle V(r)\varphi_{i},\varphi_{j}\bigr\rangle\,dr .$$
Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) *Exact amplitude with Dyson remainder.* There is a remainder $R_{ji}(t,s)$ with
$$A_{ji}(t,s)=\delta_{ij}+A^{(1)}_{ji}(t,s)+R_{ji}(t,s),\qquad |R_{ji}(t,s)|\le e^{K\tau}\frac{(K\tau)^{2}}{2},$$
and if $\|V(r)-V_{0}(r)\|\le\eta(r)$ for a family $V_{0}$ of self-adjoint bounded operators with integrable scalar coefficient $r\mapsto\langle V_{0}(r)\varphi_{i},\varphi_{j}\rangle$, then the corresponding first-order amplitude differs from $A^{(1)}_{ji}$ by at most $\frac{1}{\hbar}\int_{s}^{t}\eta(r)\,dr$.

(b) *Sinusoidal control.* Let $W\in\mathcal B(\mathfrak H)$ be self-adjoint, $\omega,\vartheta\in\mathbb R$, and suppose $V(r)=W\cos(\omega r+\vartheta)$ for $r\in I$. Put $\vartheta_{0}:=\omega s+\vartheta$ and decompose
$$A^{(1)}_{ji}=a_{+}+a_{-},\qquad a_{\pm}:=-\frac{i}{2\hbar}\bigl\langle W\varphi_{i},\varphi_{j}\bigr\rangle e^{\mp i\vartheta_{0}}\,\frac{e^{i(\Delta\mp\hbar\omega)\tau/\hbar}-1}{i(\Delta\mp\hbar\omega)/\hbar},$$
with the convention that the quotient is the limit $\tau$ when $\Delta\mp\hbar\omega=0$. Then the *co-rotating* term $a_{+}$ (the one whose denominator vanishes at $\Delta=\hbar\omega$) satisfies
$$|a_{+}|=\bigl|\bigl\langle W\varphi_{i},\varphi_{j}\bigr\rangle\bigr|\,\frac{\bigl|\sin\bigl((\Delta-\hbar\omega)\tau/(2\hbar)\bigr)\bigr|}{|\Delta-\hbar\omega|},\qquad\text{and at }\Delta=\hbar\omega:\quad |a_{+}|=\bigl|\bigl\langle W\varphi_{i},\varphi_{j}\bigr\rangle\bigr|\frac{\tau}{2\hbar},$$
and the *counter-rotating* term satisfies $|a_{-}|\le|\langle W\varphi_{i},\varphi_{j}\rangle|/|\Delta+\hbar\omega|$ whenever $\Delta+\hbar\omega\ne0$.

(c) *Outcome probability.* The model's transition probability is $p_{ji}(t,s)=|A_{ji}(t,s)|^{2}$; with $\varepsilon:=e^{K\tau}(K\tau)^{2}/2$ and $A^{(1)}:=A^{(1)}_{ji}$, for distinct labels $i\ne j$
$$\bigl|p_{ji}(t,s)-|A^{(1)}|^{2}\bigr|\le 2|A^{(1)}|\,\varepsilon+\varepsilon^{2},$$
and for $i=j$ the survival probability obeys the analogous bound $\bigl|p_{ii}(t,s)-|1+A^{(1)}|^{2}\bigr|\le(2+2|A^{(1)}|)\varepsilon+\varepsilon^{2}$; in both cases the exact outcome probability is controlled by the first-order term and the explicit Dyson error of clause (a).

(d) *Scope.* The statements are finite-time and conditional on the bounded control and on the orthonormal eigenfamily; the remainder bound grows like $\tau^{2}e^{K\tau}$ and no long-time limit, transition rate, exponential decay, continuum density of states or Fermi golden rule is asserted, and no measured frequency, count or rate is claimed.

## Facts & Assumptions


**Given:** the declared driven model in the bounded-control class; the orthonormal eigenfamily $(\varphi_{j})$ with $H_{0}\varphi_{j}=E_{j}\varphi_{j}$; labels $i,j$, times $s\le t$, $\tau=t-s$, $\Delta=E_{j}-E_{i}$, $K=v/\hbar$; where clause (b) applies, $W,\omega,\vartheta$ with $V(r)=W\cos(\omega r+\vartheta)$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Amplitude supplier.** Under the hypotheses of the Statement, with $(\varphi_{n})$ a complete orthonormal family of $H_{0}$-eigenvectors and $A_{b_{0}a_{0}}(t,s)$ as defined in clause (e) of [[def-nrqm-driven-dynamics-framework-driven-model]], one has $A_{b_{0}a_{0}}=\delta_{a_{0}b_{0}}-\frac{i}{\hbar}\int_{s}^{t}e^{i(E_{b_{0}}-E_{a_{0}})(r-s)/\hbar}\langle V(r)\varphi_{a_{0}},\varphi_{b_{0}}\rangle dr+R_{b_{0}a_{0}}$ with $|R_{b_{0}a_{0}}|\le e^{K\tau}(K\tau)^{2}/2$; and if $\|V(r)-V_{0}(r)\|\le\eta(r)$ with measurable integrable coefficient, the amplitude computed with $V_{0}$ differs from the exact one by at most $\frac{1}{\hbar}\int_{s}^{t}\eta(r)dr+e^{K\tau}(K\tau)^{2}/2$ ([[prop-nrqm-controlled-dynamics-first-order-amplitude-tail]]). The proof of that item uses only the two fixed basis vectors, so the completeness of the eigenfamily is not needed for the displayed conclusion on the pair $(i,j)$.

[F2] **Model and picture readings.** The model defines the amplitude $A_{ji}=e^{i\Delta\tau/\hbar}\langle U(t,s)\varphi_{i},\varphi_{j}\rangle$ and the probability $p_{ji}=|A_{ji}|^{2}$, with the reading of the outcome law of the energy observable in clause (e) ([[def-nrqm-driven-dynamics-framework-driven-model]] clauses (c)(ii), (e)); the physical propagator is the mild propagator of the bounded-control class ([[pthm-nrqm-driven-dynamics-mild-propagator-and-pictures]] clauses (a), (b); [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]; [[def-nrqm-driven-dynamics-framework-interaction-picture]] clause (e)).

[F3] **Framework and inner-product readings.** $\varphi_{i},\varphi_{j}$ are unit vectors and the pairing is linear in the first argument and conjugate-linear in the second, with $|\langle u,v\rangle|\le\|u\|\|v\|$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]; [[def-inner-product-space]]; [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]); $W$ self-adjoint bounded means $\langle W\varphi_{i},\varphi_{j}\rangle=\overline{\langle W\varphi_{j},\varphi_{i}\rangle}$ and $|\langle W\varphi_{i},\varphi_{j}\rangle|\le\|W\|$ ([[def-bounded-linear-operator]], [[def-operator-norm]]); the outcome-law reading is that of P2 ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b); [[post-nrqm-framework-observable-and-probability]]; [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]); times and energies are read in seconds and joules as in [[def-nrqm-framework-quantities-and-units]] ([[post-nrqm-framework-state-and-composition]]).

## Proof

**Proof technique:** direct; instantiate the supplier's amplitude expansion, evaluate the sinusoidal integral by the exponential form of the cosine, and estimate the probability difference by the difference of the amplitudes.

**Given:** the data of the Statement and [F1]-[F3].

1.1 [Amplitude and remainder] The pair $(i,j)$ is fixed and the supplier [F1] applies with the two eigenvectors $\varphi_{i},\varphi_{j}$; the completeness of the eigenfamily is used nowhere in its amplitude argument, so its conclusion holds for the pair: $A_{ji}=\delta_{ij}+A^{(1)}_{ji}+R_{ji}$ with $|R_{ji}|\le e^{K\tau}(K\tau)^{2}/2$; the perturbation-robustness assertion gives the stated $\frac{1}{\hbar}\int_{s}^{t}\eta$ difference for a dominated family $V_{0}$ whose selected coefficient is integrable. This is clause (a). [F1, F2, given]

1.2 [Sinusoidal evaluation] With $V(r)=W\cos(\omega r+\vartheta)$ and $u:=r-s$, $\omega r+\vartheta=\omega u+\vartheta_{0}$, so $\cos(\omega r+\vartheta)=\frac{1}{2}(e^{i(\omega u+\vartheta_{0})}+e^{-i(\omega u+\vartheta_{0})})$ and $$A^{(1)}_{ji}=-\frac{i}{2\hbar}\bigl\langle W\varphi_{i},\varphi_{j}\bigr\rangle\Bigl[e^{i\vartheta_{0}}\int_{0}^{\tau}e^{i(\Delta+\hbar\omega)u/\hbar}du+e^{-i\vartheta_{0}}\int_{0}^{\tau}e^{i(\Delta-\hbar\omega)u/\hbar}du\Bigr],$$ the two integrals being $\tau$ when their frequency vanishes and $(e^{i\theta\tau/\hbar}-1)/(i\theta/\hbar)$ otherwise; this is the displayed decomposition with $a_{\pm}$ and the stated convention. For $a_{+}$, $|e^{i\theta\tau/\hbar}-1|=2|\sin(\theta\tau/(2\hbar))|$ and the modulus of the quotient by $i\theta/\hbar$ is $2\hbar|\sin(\theta\tau/(2\hbar))|/|\theta|$ for $\theta=\Delta-\hbar\omega\ne0$, giving $|a_{+}|=|\langle W\varphi_{i},\varphi_{j}\rangle||\sin((\Delta-\hbar\omega)\tau/(2\hbar))|/|\Delta-\hbar\omega|$; at $\Delta=\hbar\omega$ the quotient is $\tau$ and the same modulus formula gives the limit $|\langle W\varphi_{i},\varphi_{j}\rangle|\tau/(2\hbar)$. For $a_{-}$ the same computation gives $|a_{-}|=|\langle W\varphi_{i},\varphi_{j}\rangle||\sin((\Delta+\hbar\omega)\tau/(2\hbar))|/|\Delta+\hbar\omega|\le|\langle W\varphi_{i},\varphi_{j}\rangle|/|\Delta+\hbar\omega|$. This is clause (b). [F1, F3, algebra]

2.1 [Probability error] By [F2] the model's transition probability is $p_{ji}=|A_{ji}|^{2}$; from clause (a), $A_{ji}=\delta_{ij}+A^{(1)}+R$ with $|R|\le\varepsilon$, so $|A_{ji}|\le1+|A^{(1)}|+\varepsilon$ and $$|p_{ji}-|A^{(1)}|^{2}|=\bigl||\delta_{ij}+A^{(1)}+R|^{2}-|A^{(1)}|^{2}\bigr|\le 2\bigl(\delta_{ij}+|A^{(1)}|\bigr)\varepsilon+\varepsilon^{2}$$ because the remaining cross terms are bounded by $2|A^{(1)}+\delta_{ij}|\varepsilon$ and $|R|^{2}\le\varepsilon^{2}$; for distinct labels this is the displayed bound $2|A^{(1)}|\varepsilon+\varepsilon^{2}$, and for $i=j$ it is $(2+2|A^{(1)}|)\varepsilon+\varepsilon^{2}$. This is clause (c). [step 1.1, step 1.2, F1, F2, algebra]

3.1 [Scope] Only the bounded control, the fixed eigenpair, finite times and the choice hypotheses entered; the remainder grows like $e^{K\tau}\tau^{2}$ and no infinite-time limit, density of states, rate or decay was formed, which is clause (d). [step 1.1, step 1.2, step 2.1, given] ∎

## Remarks

- **Resonance versus Rabi oscillation.** Clause (b) shows that the first-order co-rotating amplitude grows linearly in $\tau$ at exact resonance. That linear growth is the small-coupling, short-time first-order behaviour of the general bounded-control model; the exact bounded oscillation of the two-level circular drive is proved separately on this page for the declared finite model, and the two statements have different hypotheses: the first applies to any bounded control with an orthonormal eigenpair, the second is exact for the declared two-level family.
- **What "first order" controls.** The bound of clause (a) is uniform in the labels and in the family; it is a bound on the amplitude, not a rate, and the counter-rotating bound of clause (b) shows explicitly how far the physical first-order term is from its co-rotating part.
