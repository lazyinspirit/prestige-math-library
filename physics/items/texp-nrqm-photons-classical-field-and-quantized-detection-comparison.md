---
id: texp-nrqm-photons-classical-field-and-quantized-detection-comparison
kind: thought-experiment
title: "A two-bin comparison of a declared classical field model and the
  quantised model: identical normalised laws do not discriminate"
status: draft
origin: pipeline
domain: physics
dependency_level: 14
deps:
  [
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-photons-framework-fixed-mode-polarization-model,
    def-nrqm-photons-framework-ideal-counting-and-detection-model,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-photons-analyzer-projections-and-overlaps,
    pthm-nrqm-photons-fixed-mode-polarization-outcome-law,
    pthm-nrqm-photons-fixed-mode-number-and-energy-statistics,
    thm-parseval-equivalences-for-a-complete-orthonormal-family,
    def-countable-choice, def-dependent-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-photons-framework-fixed-mode-polarization-model: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-photons-analyzer-projections-and-overlaps: mathematical-premise
  pthm-nrqm-photons-fixed-mode-polarization-outcome-law: physical-result
  pthm-nrqm-photons-fixed-mode-number-and-energy-statistics: physical-result
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional two-model comparison on a declared
  two-dimensional transverse amplitude space: the normalised two-bin laws
  assigned by a declared classical field model with dimensionless amplitude
  coordinates and relative intensity equal to squared amplitude norm, and by the
  quantised fixed-mode model with the Born law for the same declared bin
  projections. The result is that the normalised laws coincide for every
  declared amplitude, so such a pattern does not discriminate the two declared
  models; the thought experiment records the cross-term (interference) structure
  common to both and asserts no experiment, no counts, no detector response and
  no empirical conclusion."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6 printed pages 14-15 (PDF pages 22-23): agreement of the quantum
        transmitted fraction with the classical description, and the distinct
        quantum and classical readings of complex amplitudes"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear
        algebra: vector spaces and operators', Section 5 'Orthonormal basis and
        orthogonal projectors': finite-dimensional orthogonal projection
        formulas, ranges and eigenspaces"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349\
        e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2 and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-preparation-and-apparatus]]), the radiation extension
postulate clause (i)
([[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]) and
the declared fixed-mode polarisation model
[[def-nrqm-photons-framework-fixed-mode-polarization-model]] with polarisation
space $V$ and orthonormal basis $(e_{1},e_{2})$. Assume the Axioms of Countable
Choice, Dependent Choice and Choice ([[def-countable-choice]], [[def-dependent-choice]],
[[def-axiom-of-choice]]).
Declare the following **two-bin comparison**:

1. an orthonormal pair $(u_{+},u_{-})$ of $V$, read as the pair of orthogonal
   **fringe bin directions** of a declared two-bin detector, with projections
   $Q_{\pm}x:=\langle x,u_{\pm}\rangle u_{\pm}$;
2. a **declared amplitude datum** $a\in V\setminus\{0\}$ whose complex
   coordinates are dimensionless ratios relative to one fixed reference
   amplitude $A_{\mathrm{ref}}$; $a$ need not have unit norm;
3. the **declared classical field model**, whose state datum is the
   amplitude coordinate $a$ relative to $A_{\mathrm{ref}}$, whose dimensionless relative bin intensities are
   $I_{\pm}(a):=\|Q_{\pm}a\|^{2}$, and whose
   normalised two-bin law is $I_{\pm}(a)/(I_{+}(a)+I_{-}(a))$;
4. the **quantised model reading** of the same datum: the pure preparation of
   the ray $[a]$ of the polarisation space, measured by the declared ideal
   sharp measurement with outcome projections $(Q_{+},Q_{-})$ declared directly in the sense of
   [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]
   clause (a), with the Born law of P2. This arbitrary-bin sharp measurement
   need not belong to the real-angle analyser family of the original frame.

Then:

(a) $Q_{+}+Q_{-}=I$ and the normalised stated laws of the two declared models
coincide for every datum $a\ne0$:
$$\frac{I_{\pm}(a)}{I_{+}(a)+I_{-}(a)}=p_{\pm}([a])=\frac{\|Q_{\pm}a\|^{2}}{\|a\|^{2}}=\frac{|\langle u_{\pm},a\rangle|^{2}}{\|a\|^{2}};$$

(b) writing $a=a_{1}+a_{2}$ for any declared decomposition of the datum into
two **path components**, both declared laws contain the interference
cross-term
$$\frac{2\operatorname{Re}\bigl(\langle u_{\pm},a_{1}\rangle\,\overline{\langle u_{\pm},a_{2}\rangle}\bigr)}{\|a\|^{2}},$$
so the presence of a fringe pattern of this two-bin form does not distinguish
the two declared models;

(c) the two declared models are nevertheless different physical models: in the
classical model the datum is a field amplitude with a deterministic intensity,
while in the quantised model it is a state ray with a Born law; a discriminator
requires a prediction on which two fully specified models differ, together
with a declared detector response, preparation and sampling model in the
sense of P7. Count statistics on a declared number-state preparation are a
candidate for a further comparison only after a classical field-and-detector
count law and the corresponding preparations in both models are declared.
The deterministic classical intensities do not supply that count law, so no
count-statistics discriminator follows from the present declarations;

(d) this item constructs no such discriminating comparison and reports no
data; it asserts no measurement, no count, no frequency and no empirical
conclusion, and it does not claim that the classical model agrees with the
quantised model beyond the declared two-bin law.

## Facts & Assumptions

**Given:** The declared polarisation space $V$ with orthonormal basis $(e_{1},e_{2})$, the orthonormal bin pair $(u_{+},u_{-})$, the projections $Q_{\pm}$, the datum $a\in V\setminus\{0\}$, and the two declared models.

[F1] **Projections and resolution.** For every orthonormal pair $(u_{+},u_{-})$ of the two-dimensional space $V$, the maps $Q_{\pm}$ are orthogonal projections with ranges $\mathbb Cu_{\pm}$, $Q_{+}Q_{-}=0$ and $Q_{+}+Q_{-}=I$ ([[lem-nrqm-photons-analyzer-projections-and-overlaps]] clauses (a),(d), applied with $(e_{1},e_{2}):=(u_{+},u_{-})$).

[F2] **Parseval.** For every $x\in V$ one has $\|x\|^{2}=\|Q_{+}x\|^{2}+\|Q_{-}x\|^{2}$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [F1]).

[F3] **Born law.** For the declared ideal sharp measurement with outcome projections $(Q_{+},Q_{-})$ and the pure preparation of a unit vector $\psi$, the outcome probabilities are $\|Q_{\pm}\psi\|^{2}$; for a nonzero datum $a$ the unit vector is $\psi=a/\|a\|$ and the probabilities are $\|Q_{\pm}a\|^{2}/\|a\|^{2}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a),(b), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

[F4] **Inner product.** The inner product is linear in the first argument and conjugate-linear in the second; consequently $\|Q_{\pm}a\|^{2}=|\langle u_{\pm},a\rangle|^{2}$, and for $a=a_{1}+a_{2}$,
$$|\langle u_{\pm},a\rangle|^{2}=|\langle u_{\pm},a_{1}\rangle|^{2}+|\langle u_{\pm},a_{2}\rangle|^{2}+2\operatorname{Re}\bigl(\langle u_{\pm},a_{1}\rangle\overline{\langle u_{\pm},a_{2}\rangle}\bigr)$$
([[lem-nrqm-photons-analyzer-projections-and-overlaps]] Fact [F1], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

[F5] **Identification discipline.** The claim that a laboratory source, interferometer or detector realizes one of the declared models is a tested identification with uncertainty in the sense of P7 ([[post-nrqm-framework-preparation-and-apparatus]]).

[F6] **Quantum count law, conditional on the separate radiation counting model.** For a unit mode $\varphi\in\mathfrak h$, the $n$-quanta preparation is the ray of the unit vector $U_\varphi e_n=\varphi^{\otimes n}$ in the $n$-photon sector, with $n\in\mathbb N=\{0,1,\ldots\}$. Under the radiation extension and the declared ideal total-number detector, its count probabilities are $p_m=\delta_{mn}$, where $\delta_{mn}=1$ for $m=n$ and $0$ otherwise ([[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]] clause (a), [[def-nrqm-photons-framework-ideal-counting-and-detection-model]] clause (b)). This is a quantum prediction under those additional declarations, not a count law for the classical amplitude datum $a$.

## Proof

1.1 [Resolution and normalised classical law] By [F1] the bin projections resolve the identity, $Q_{+}+Q_{-}=I$. For $a\ne0$ put $N(a):=I_{+}(a)+I_{-}(a)$; by [F2] applied to $a$ one has $N(a)=\|Q_{+}a\|^{2}+\|Q_{-}a\|^{2}=\|a\|^{2}>0$, so the normalised classical law is well defined and equals $I_{\pm}(a)/\|a\|^{2}=|\langle u_{\pm},a\rangle|^{2}/\|a\|^{2}$ by [F4]. [F1, F2, F4, algebra]

2.1 [Quantised law] The ray $[a]$ is a pure preparation; by [F3] the Born probabilities of the declared measurement with projections $(Q_{+},Q_{-})$ are $p_{\pm}=\|Q_{\pm}a\|^{2}/\|a\|^{2}=|\langle u_{\pm},a\rangle|^{2}/\|a\|^{2}$. Together with step 1.1 this proves (a). [F3, F4, step 1.1, algebra]

3.1 [Common cross-term] Let $a=a_1+a_2$ be any decomposition. Steps 1.1 and 2.1 identify both normalized laws as $|\langle u_{\pm},a\rangle|^2/\|a\|^2$. Dividing the expansion of [F4] by the positive number $\|a\|^2$ gives, in each law, the cross-term $2\operatorname{Re}(\langle u_{\pm},a_1\rangle\overline{\langle u_{\pm},a_2\rangle})/\|a\|^2$. This denominator is the same for both bins and both models at the fixed datum $a$. The unnormalized classical intensity has the unscaled cross-term of [F4]; the displayed normalized term is common to both declared laws, proving (b). [F4, step 1.1, step 2.1, algebra]

4.1 [Limits of the comparison] Steps 1.1 and 2.1 show equality of the declared normalised two-bin laws for every datum, so this prediction does not distinguish the two models. Their declared objects nevertheless differ: a classical field amplitude with deterministic intensities and a quantum state ray with Born probabilities. For counting, the classical declarations impose no condition on a sequence of count probabilities $q_m(a)\ge0$ with $\sum_{m\in\mathbb N}q_m(a)=1$. For example, for any fixed $n\in\mathbb N$ the assignment $q_m(a)=\delta_{mn}$ would leave every declared intensity and normalised bin fraction unchanged and would match the quantum number-state law of [F6]. Thus the quantum count prediction alone does not imply a differing classical prediction. A proposed count comparison must first specify a classical field-and-detector count law, preparations in both models and their detector responses; comparison with repeated data also requires the sampling assumptions of [F5]. No such extension or statistical comparison is adopted here, and no data are reported. This proves (c) and (d). [given, step 1.1, step 2.1, F5, F6] ∎

## Remarks

- **Classical waves interfere.** The cross-term of clause (b) is present in the declared classical intensity as well as in the Born law, so this two-bin interference prediction alone does not distinguish the two declared models or refute the declared classical model; conversely, the declared quantised model predicts the pattern too, so the absence of a visible pattern in finitely many detections would not by itself falsify it. Statistical comparison requires the sampling model of P7 and reported data.
- **What "classical" means here.** The classical model of this item is the elementary declared transverse-amplitude model with intensity equal to squared amplitude norm; it is not Maxwell's theory, and the item imports no Maxwell theorem. A test of classical electromagnetism would require that framework's own postulates and field solutions.
