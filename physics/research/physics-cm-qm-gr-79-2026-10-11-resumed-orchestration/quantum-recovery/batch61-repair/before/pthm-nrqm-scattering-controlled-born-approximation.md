---
id: pthm-nrqm-scattering-controlled-born-approximation
aliases: [nrqm-scattering-controlled-born-approximation]
kind: physics-theorem
domain: physics
title: "The controlled Born reading: operator-norm condition, uniform amplitude error and coupling scaling"
status: draft
origin: session
dependency_level: 12
deps: [def-nrqm-scattering-framework-short-range-model, def-nrqm-scattering-stationary-beam-and-cross-section-model, pthm-nrqm-scattering-stationary-wave-amplitude-and-flux, lem-nrqm-scattering-model-scaling-correspondence, thm-nrqm-controlled-dynamics-controlled-born-amplitude-error, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-operator-norm, def-bounded-linear-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-stationary-beam-and-cross-section-model: formulation-prerequisite
  pthm-nrqm-scattering-stationary-wave-amplitude-and-flux: physical-result
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-controlled-born-amplitude-error: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a real bounded compactly supported potential in the pair's stationary elastic beam reading: the controlled weak-coupling condition q<1 in the operator norm of the outgoing comparison operator, the Neumann distance of the exact stationary solution from the incident wave, the uniform error of the Born amplitude, and the quadratic-in-coupling scaling form for a real or complex coupling multiplier eta. Conditional on the declared model and the cited mathematics; the item asserts no generic weak-potential approximation, no measured cross section and no validity of the Born reading outside the stated operator-norm condition."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 15.4 printed pages 213-215: the Born approximation and the condition for its validity"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 12.2.2-12.2.3 printed pages 265-270 (PDF pages 273-278): expanding the S-matrix and the scattering amplitude"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero and a **compact-support-class** potential $V$ supported in $B_{R}$, adopt
the stationary elastic beam model at wave number $k>0$ and direction
$d\in S^{2}$, and let
$$W:=\frac{2m}{\hbar^{2}}V,\qquad G_{k}(z)=\frac{e^{ik|z|}}{4\pi|z|},\qquad (K_{k}f)(x)=\int_{B_{R}}G_{k}(x-y)W(y)f(y)\,dy$$
and $u=(I+K_{k})^{-1}e_{\mathrm{inc}}$, $f_{k}$ be as in
[[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]], with
$e_{\mathrm{inc}}=e^{ikd\cdot x}|_{B_{R}}$. Put $q:=\|K_{k}\|$, the operator
norm of [[def-operator-norm]] and [[def-bounded-linear-operator]], and
$$f_{B}(\Omega):=-\frac{1}{4\pi}\int_{B_{R}}e^{ik(d-\Omega)\cdot y}W(y)\,dy$$
for $\Omega\in S^{2}$, read in metres. Assume the Axiom of Countable Choice
and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]).
Then:

(a) the operator $K_{k}$ is bounded, $q<\infty$, and if $q<1$ the exact
stationary solution satisfies
$$\bigl\|u-e_{\mathrm{inc}}\bigr\|_{L^{2}(B_{R})}\le\frac{q}{1-q}\, \bigl\|e_{\mathrm{inc}}\bigr\|_{L^{2}(B_{R})};$$

(b) under the same condition $q<1$ the **Born amplitude** $f_{B}$ approximates
the exact amplitude uniformly,
$$\bigl|f_{k}(\Omega)-f_{B}(\Omega)\bigr|\le \frac{\|W\|_{\infty}\,|B_{R}|^{1/2}}{4\pi}\,\frac{q}{1-q}\, \bigl\|e_{\mathrm{inc}}\bigr\|_{L^{2}(B_{R})} \qquad(\Omega\in S^{2}),$$
with $|B_{R}|=4\pi R^{3}/3$;

(c) *coupling scaling.* For a real or complex multiplier $\eta$ with
$|\eta|q<1$, let $u_{\eta}:=(I+\eta K_{k})^{-1}e_{\mathrm{inc}}$, let
$f_{k,\eta}$ be the amplitude computed from $u_{\eta}$ by the same integral
formula, and let $f_{B}$ be as above. Then
$$\bigl\|u_{\eta}-e_{\mathrm{inc}}\bigr\|_{2}\le\frac{|\eta|q}{1-|\eta|q} \bigl\|e_{\mathrm{inc}}\bigr\|_{2},\qquad \sup_{\Omega,d\in S^{2}}\bigl|f_{k,\eta}(\Omega;d)-\eta f_{B}(\Omega;d)\bigr| \le\frac{|\eta|^{2}\|W\|_{\infty}|B_{R}|q}{4\pi(1-|\eta|q)};$$
in particular no condition on the base operator norm of $K_{k}$ itself is
needed for (c).

The statement is conditional on the declared model and the cited mathematics;
the condition $q<1$ is an operator-norm condition on the declared potential,
kernel and wave number, not a vague smallness of $V$, and no measured cross
section is asserted.

## Facts & Assumptions

**Given:** the declared model and beam model with $m,\hbar>0$, compact-support-class $V$ supported in $B_{R}$, wave number $k>0$, direction $d$, the reduced potential $W$, kernel $G_{k}$, operator $K_{k}$, exact solution $u$ and amplitude $f_{k}$ of the stationary theorem, Born amplitude $f_{B}$, $q=\|K_{k}\|$, and the choice hypotheses.

[F1] **Controlled Born amplitude error.** Assume Countable Choice. Adopt the hypotheses and notation of the nondimensional stationary outgoing integral theorem for a real bounded potential $V_{0}$ supported in $B_{R}$: $q=\|K_{k}\|$, $u=(I+K_{k})^{-1}e_{\mathrm{inc}}$ and $f_{k}$ the amplitude. If $q<1$, then $\|u-e_{\mathrm{inc}}\|_{2}\le\frac{q}{1-q}\|e_{\mathrm{inc}}\|_{2}$ and $|f_{k}(\Omega)-f_{B}(\Omega)|\le\frac{\|V_{0}\|_{\infty}|B_{R}|^{1/2}}{4\pi}\frac{q}{1-q}\|e_{\mathrm{inc}}\|_{2}$ uniformly in $\Omega$; for $V_{\eta}=\eta V_{0}$ with $|\eta|q<1$ the scaling displays hold with $u_{\eta}=(I+\eta K_{k})^{-1}e_{\mathrm{inc}}$ and the same amplitude integrals, for real and complex $\eta$, with no base condition on $q$ ([[thm-nrqm-controlled-dynamics-controlled-born-amplitude-error]] clauses (a), (b), (c)).

[F2] **The model's stationary solution.** The model's $u$, $\Psi$ and amplitude $f_{k}$ are those of the stationary theorem of the pair, constructed from the reduced potential $W=(2m/\hbar^{2})V$ and the same kernel and operator $K_{k}$ ([[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]] clauses (a), (b), [[lem-nrqm-scattering-model-scaling-correspondence]] clauses (a), (b)).

## Proof

**Proof technique:** direct; instantiate the nondimensional controlled Born theorem with the model's reduced potential, then rewrite its constants in the model's symbols.

**Given:** the data and hypotheses of the statement and [F1]-[F2].

1.1 The reduced potential $W=(2m/\hbar^{2})V$ is real, bounded and supported in $B_{R}$, and by [F2] the model's $K_{k}$, $u$ and $f_{k}$ are exactly the objects of [F1] for $V_{0}=W$; hence [F1] applies with $q=\|K_{k}\|<\infty$. [F1, F2, given]

2.1 If $q<1$, [F1] gives $\|u-e_{\mathrm{inc}}\|_{2}\le\frac{q}{1-q}\|e_{\mathrm{inc}}\|_{2}$, which is (a). [F1, step 1.1, algebra]

2.2 Under the same condition, [F1]'s uniform estimate with $V_{0}=W$ is $|f_{k}(\Omega)-f_{B}(\Omega)|\le\frac{\|W\|_{\infty}|B_{R}|^{1/2}}{4\pi}\frac{q}{1-q}\|e_{\mathrm{inc}}\|_{2}$ for every $\Omega\in S^{2}$, which is the display of (b) since $|B_{R}|=4\pi R^{3}/3$ for the ball. [F1, step 1.1, algebra]

3.1 For real or complex $\eta$ with $|\eta|q<1$, [F1]'s scaling clause gives the two displays of (c) with $u_{\eta}=(I+\eta K_{k})^{-1}e_{\mathrm{inc}}$ and the same amplitude integrals; the constants are exactly $\|W\|_{\infty}$, $|B_{R}|$ and $q$, and no base smallness condition beyond $|\eta|q<1$ is used. This completes the proof. [F1, step 2.2, algebra] ∎

## Remarks

- **Reading the condition.** In the model's variables the condition of (a)-(b)
  is the operator-norm condition $q=\|K_{k}\|<1$ on the declared potential,
  radius and wave number; the examples of this pair verify it for a uniform
  ball potential through an explicit Hilbert-Schmidt bound of the kernel, so
  no vague smallness of the potential is used.
- **Complex coupling.** The scaling form is algebraic in $\eta$ and does not
  use the real-potential flux conclusions; for complex $\eta$ the pair
  asserts no unitarity or cross-section reading of the resulting amplitude
  beyond the displayed estimate.
