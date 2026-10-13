---
id: texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison
aliases: [nrqm-light-matter-spectral-density-and-detected-photon-comparison]
kind: thought-experiment
domain: physics
title: "Two declared cutoff-dipole models with equal transition-energy density: the rate coefficient does not discriminate them, the formal photon-energy laws differ, with a detected-law reading at nonzero coupling"
status: draft
origin: pipeline
dependency_level: 18
deps: [lem-nrqm-light-matter-first-order-photon-energy-law, pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading, pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients, def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-spectral-transition-and-detection, def-nrqm-photons-framework-ideal-counting-and-detection-model, post-nrqm-framework-preparation-and-apparatus, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-measure-with-density, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice, cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]
dependency_roles:
  lem-nrqm-light-matter-first-order-photon-energy-law: mathematical-premise
  pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading: physical-result
  pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients: physical-result
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-light-matter-framework-spectral-transition-and-detection: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-measure-with-density: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
empirical_premises: []
physical_scope: "A comparison of three declared spectral models of the finite-level cutoff dipole family: two instances with mode densities that agree at the transition energy but are not proportional, and a declared ideal sharp-line model assigning the detected photon energy exactly the transition energy. The comparison shows that the single-vertex rate coefficient cannot discriminate the equal-density models while their formal normalized single-vertex photon-energy laws differ at every positive finite time; these are ideal detected-energy laws in the declared normalized one-photon preparations only at nonzero coupling, and that the sharp line is an idealisation approached in the limit rather than a finite-time property. The item asserts no experiment, no apparatus, no detector response, no counts, no frequency and no statistical inference."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 216-218 (PDF pages 224-226): the wave energy density as the datum of the classical calculation and the rate proportional to the squared dipole matrix element"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.1 printed pages 214-215 (PDF pages 222-223): the density of final states as an explicit input of the golden-rule rate"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 5.3 printed pages 48-50: modes, photon number and energy in the quantised field model"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Adopt the declared finite-level cutoff dipole model
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] and its
spectral-transition reading
[[def-nrqm-light-matter-framework-spectral-transition-and-detection]], the
declared ideal energy-window detection model
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]] clause (c)
and the preparation and apparatus discipline P7
([[post-nrqm-framework-preparation-and-apparatus]]). Assume the Axioms of
Countable Choice and of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Declare **three models**, all with the same matter
data $H_{a}$, $D_j^{\mathrm{ch}}$ and the same cutoff $\Lambda$ and coupling
$\eta_{0}$, and with a declared upward level pair $(a,b)$, $\Delta\in(0,\Lambda)$:

1. model $M_{1}$: cutoff mode data whose single-vertex photon density is
   $\nu^{(1)}_b=J_1\lambda$ with a declared nonnegative Lebesgue-measurable integrable representative $J_1:\mathbb R\to[0,\infty)$ of its $L^1(\lambda)$ class, $J_1=0$
   $\lambda$-almost everywhere off $(0,\Lambda]$ and $J_{1}$ continuous at
   $\Delta$ with $J_{1}(\Delta)>0$;
2. model $M_{2}$: same matter and cutoff data, single-vertex photon density
   $\nu^{(2)}_b=J_2\lambda$, with a declared representative $J_2:\mathbb R\to[0,\infty)$ having the same properties and
   $J_{2}(\Delta)=J_{1}(\Delta)$;
3. model $L$ (the **declared ideal sharp-line model**): a declared spectral
   model in which the energy of an emitted and detected quantum is the value
   $\Delta$ with probability one, so that every energy window
   $B\subseteq\mathbb R$ has probability $\mathbf 1_{B}(\Delta)$.

Assume in addition that $J_{1}$ and $J_{2}$ are **not proportional**: there is
no $\gamma\ge0$ with $J_1=\gamma J_2$ $\lambda$-almost everywhere. The single-vertex laws below are the formal normalized spectral laws of the cited definition for all real $\eta_0$. Their reading as normalized one-photon preparations uses $\eta_0\ne0$; at zero coupling the physical single-vertex vector is zero and no such preparation is formed. No zero-coupling conditioning is asserted. Then:

(a) (equal rate coefficients) the model rate coefficients of clause (c) of
[[pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading]] coincide,
$$\Gamma_{1}=\frac{2\pi\eta_{0}^{2}}{\hbar}J_{1}(\Delta) =\frac{2\pi\eta_{0}^{2}}{\hbar}J_{2}(\Delta)=\Gamma_{2};$$
in particular a comparison of the leading rate coefficients alone does not
discriminate $M_{1}$ from $M_{2}$;

(b) (different formal laws and conditional detected-energy reading) for every $t>0$ the normalised
single-vertex photon-energy laws $P^{(1)}_{t}$ and $P^{(2)}_{t}$ of clause (e)
of [[def-nrqm-light-matter-framework-spectral-transition-and-detection]]
differ: there is a Borel set $B\subseteq\mathbb R$ with
$P^{(1)}_{t}(B)\ne P^{(2)}_{t}(B)$; when $\eta_0\ne0$, these are distinct predicted ideal energy-window probabilities in the declared normalized single-vertex one-photon preparations. This is a distinction between specified model laws, with no finite-sample discrimination guarantee; at $\eta_0=0$ only the formal laws are compared;

(c) (the sharp line is a limit, not a finite-time property) if $J_{1}>0$
$\lambda$-almost everywhere on a Borel set $B$ of positive Lebesgue measure
with $\Delta\notin B$, then $P^{(1)}_{t}(B)>0$ for every $t>0$ whereas
$L$ assigns probability $0$ to $B$; on the other hand
$P^{(1)}_{t}(B)\to0$ as $t\to\infty$ for every Borel $B$ bounded away from
$\Delta$. Thus the declared sharp-line model is the idealisation that the
single-vertex law approaches in the limit, not a property of the
finite-time law;

(d) (what the comparison is) clauses (a)-(c) are statements about the three
declared models. They construct no laboratory comparison and report no data:
no laboratory apparatus or preparation protocol, calibration, detector response, efficiency,
background, trial count, frequency or uncertainty budget is supplied, and
none is invented. Comparing any of these predictions with reported data would
test the combined model and apparatus assumptions under P7, would require a
declared sampling and measurement model, and would carry finite-sample
fluctuations and systematic uncertainties; it would not prove a model.

## Facts & Assumptions

**Given:** the three declared models $M_{1},M_{2},L$ with their data and densities $J_{1},J_{2}$, the level pair $(a,b)$ and $\Delta\in(0,\Lambda)$, the rate coefficients $\Gamma_{1},\Gamma_{2}$, the laws $P^{(1)}_{t},P^{(2)}_{t}$ and a Borel window $B$; the cited suppliers.

[F1] **Rate coefficients.** Under the stated density hypotheses on $J_{i}$ the rate coefficients exist and equal $\frac{2\pi\eta_{0}^{2}}{\hbar}J_{i}(\Delta)$ ([[pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading]] clauses (a),(c); [[lem-nrqm-light-matter-first-order-photon-energy-law]]).

[F2] **Energy laws and kernel.** For model $i$ and $t>0$, $P^{(i)}_{t}(B)=\int_{B}K_{t}(E-\Delta)J_{i}(E)\,d\lambda(E)\big/\int_{\mathbb R}K_{t}(E-\Delta)J_{i}(E)\,d\lambda(E)$, the denominator is finite and positive, $K_{t}>0$ $\lambda$-almost everywhere, and $P^{(i)}_{t}(B)>0$ for every Borel $B$ of positive measure on which $J_{i}>0$ almost everywhere ([[lem-nrqm-light-matter-first-order-photon-energy-law]] clauses (b),(d); [[def-nrqm-light-matter-framework-spectral-transition-and-detection]] clause (e); [[def-measure-with-density]]).

[F3] **Tail concentration.** Under the density hypotheses of [F1], for every $\delta>0$, $P^{(i)}_t(\{|E-\Delta|\ge\delta\})\to0$ as $t\to\infty$ ([[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (e)).

[F4] **Detection reading.** The formal law is defined independently of $\eta_0$; the single-vertex vector supplies a normalized one-photon preparation only when $\eta_0\ne0$, since the positive densities ensure $M\ne0$ and a positive normalization denominator. For a unit one-photon vector the energy law and the ideal energy-window probability are the readings of [[def-nrqm-photons-framework-ideal-counting-and-detection-model]] clause (c) and [[def-nrqm-light-matter-framework-spectral-transition-and-detection]] clause (e); the sharp-line model $L$ is a declared model whose law assigns $\mathbf 1_{B}(\Delta)$ to a window $B$, and it is not asserted to arise from any density $J\in L^{1}(\lambda)$.

[F5] **Prediction versus comparison.** The outcome law of a declared measurement is a single-trial model prediction; a comparison with data requires a declared sampling and measurement model, and agreement is evidence for the combined assumptions, not a proof ([[post-nrqm-framework-preparation-and-apparatus]], [[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[def-nrqm-observables-framework-observable-and-outcome-law]]).


[F6] **Borel hulls.** Under Countable Choice, every subset of $\mathbb R$ has a Borel hull of equal Lebesgue outer measure ([[cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls]]). In particular a Lebesgue-measurable set $S$ of finite measure has a Borel superset $G$ with $\lambda(G\setminus S)=0$.

## Proof

**Proof technique:** direct; compare the two rate coefficients, show that the two energy laws differ by the positivity of the kernel, and locate the sharp-line model in the limit using tail concentration.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Equal coefficients] By [F1] and the hypothesis $J_{1}(\Delta)=J_{2}(\Delta)$ one has $\Gamma_{1}=\frac{2\pi\eta_{0}^{2}}{\hbar}J_{1}(\Delta)=\frac{2\pi\eta_{0}^{2}}{\hbar}J_{2}(\Delta)=\Gamma_{2}$. This is (a). [F1, algebra]

1.2 [The laws differ] Fix $t>0$, put $Z_i:=\int K_t(E-\Delta)J_i(E)\,d\lambda(E)>0$ and $f_i(E):=K_t(E-\Delta)J_i(E)/Z_i$. Suppose the two laws agree on every Borel set. Then the real integrable difference $h:=f_1-f_2$ has zero integral on every Borel set. For $n\ge1$, the measurable sets $S_n^+:=[0,\Lambda]\cap\{h\ge1/n\}$ and $S_n^-:=[0,\Lambda]\cap\{h\le-1/n\}$ have finite measure. By [F6] each has a Borel hull differing by a null set, so the integral of $h$ over either set is zero. Hence $0=\int_{S_n^+}h\,d\lambda\ge\lambda(S_n^+)/n$ and $0=-\int_{S_n^-}h\,d\lambda\ge\lambda(S_n^-)/n$, and both sets are null. Their countable union contains every point of $[0,\Lambda]$ where $h\ne0$; outside this interval $h=0$ almost everywhere by the cutoff hypotheses. Thus $f_1=f_2$ almost everywhere. Since $K_t>0$ almost everywhere by [F2], cancellation yields $J_1=(Z_1/Z_2)J_2$ almost everywhere, contrary to nonproportionality. Therefore a Borel window separates the laws. By [F4] its ideal detected-energy reading additionally requires $\eta_0\ne0$; at zero coupling the formal distinction remains. This proves (b). [F2, F4, F6, algebra]

1.3 [Sharp line] Let $B$ be Borel of positive measure with $J_{1}>0$ $\lambda$-almost everywhere on $B$ and $\Delta\notin B$; by [F2], $P^{(1)}_{t}(B)>0$ for every $t>0$, while $L$ assigns $\mathbf 1_{B}(\Delta)=0$ by [F4]. If in addition $B$ is bounded away from $\Delta$, say $|E-\Delta|\ge\delta$ for every $E\in B$ with $\delta>0$, then $P^{(1)}_{t}(B)\le P^{(1)}_{t}(\{|E-\Delta|\ge\delta\})\to0$ by [F3]. This is (c). [F2, F3, F4, algebra]

2.1 [Scope] Clauses (a)-(c) compared three declared models by their model quantities; no laboratory apparatus, preparation protocol, calibration, count, frequency or uncertainty entered, and [F5] fixes the status of any later comparison with data as a test of combined assumptions. This is (d). [F5, step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **What the intended discriminator is.** The comparison identifies a concrete difference on which two specified models disagree — the energy-resolved law versus the leading rate coefficient — and not a comparison of "quantum theory" with "all classical physics". Neither outcome would establish or refute the framework; it would test the specified models together with the apparatus assumptions.
- **Model data are not measured densities.** The densities $J_{1},J_{2}$ are declared model data; identifying either with a laboratory mode content or environment requires its own tested identification and uncertainty budget under P7.
