---
id: ex-nrqm-measurement-three-polarizer-chain
aliases: [ nrqm-measurement-three-polarizer-chain ]
kind: example
domain: physics
title: "Three ideal analysers in series: the quarter-intensity model computation"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    cor-inner-product-induces-a-norm,
    def-complex-numbers-and-arithmetic,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-complex-conjugation-and-modulus-laws,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-measurement-selective-luders-update,
    thm-complex-spectral-theorem-for-normal-endomorphisms
  ]
dependency_roles:
  cor-inner-product-induces-a-norm: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact finite model computation for a declared two-level
  system and declared ideal analysers: transmission probabilities and
  conditional states of a serial analyser chain, including the standard
  quarter-transmission case. The two-level system is an idealization of a
  fixed-mode polarization degree of freedom under the separately adopted
  finite polarization assignment and probability/update rules explicitly
  adopted in this example, with Countable Choice assumed; the computation asserts no
  radiation quantization, no detector model, no measured counts and no empirical
  result, and it explicitly compares only with a declared classical amplitude
  model with the same ideal analyser convention."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6, printed pages 14-15 (photon polarization: amplitudes cos(theta)
        and sin(theta), transmission probability cos^2(theta), and the classical
        intensity ratio)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-half, Bras, Kets, and Operators', Section 1, printed pages 1-7
        (sequential measurement boxes and their probabilities)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
verification:
  precheck: pass
---

## Example

Adopt the following finite polarization assignment and measurement rules as additional model assumptions for this example, using the declared-instrument vocabulary of [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]. These are stipulated for the finite polarization space, beyond the massive-matter sector of P1; they are not consequences of its massive-particle assignment. Assume Countable Choice ([[def-countable-choice]]), as required by the mathematical suppliers. Fix a propagation label $k_0\in\mathbb R^3\setminus\{0\}$ in $\mathrm m^{-1}$ relative to fixed Euclidean spatial coordinates, and a real orthonormal transverse pair $v_x,v_y\in\mathbb R^3$ with $k_0\cdot v_x=k_0\cdot v_y=0$. Identify $H=\mathbb C^2$, with its standard inner product and orthonormal basis $(e_x,e_y)$, unitarily with $\mathbb Cv_x\oplus\mathbb Cv_y$ by $e_x\mapsto v_x$, $e_y\mapsto v_y$. Its state space is $D(H)$ and a unit ray $[\psi]$ represents $T_{\psi,\psi}$ for $\|\psi\|=1$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[def-inner-product-space]], [[def-hilbert-space]]). The identification of these unit rays as polarization preparations is the adopted finite assignment, motivated by the source account in Binney and Skinner, Section 1.3.6, printed pages 14-15. It supplies no photon number or radiation dynamics. Angles are dimensionless, read in radians. For a real angle $\alpha$ put
$$e_{\alpha}:=\cos\alpha\,e_{x}+\sin\alpha\,e_{y},\qquad e_{\alpha}^{\perp}:=-\sin\alpha\,e_{x}+\cos\alpha\,e_{y}.$$
The **ideal analyser** $A(\alpha)$ is the declared ideal sharp measurement with the two outcomes transmit and block, whose projections are $T_{e_{\alpha},e_{\alpha}}$ and $T_{e_{\alpha}^{\perp},e_{\alpha}^{\perp}}$ respectively, with outcome and update rules stipulated in [F2] below ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (c), [[lem-nrqm-composites-rank-one-operator-calculus]]).

The example takes the preparation $[e_{x}]$, the chain of analysers $A(0)$ with $\alpha=0^\circ$, $A(\pi/4)$ with $\alpha=45^\circ$ and $A(\pi/2)$ with $\alpha=90^\circ$, and computes:

**(i)** The analyser $A(\alpha)$ transmits the preparation $[e_{\beta}]$ with probability
$$\mathbb P(\text{transmit})=\bigl|\langle e_{\alpha},e_{\beta}\rangle\bigr|^{2}=\cos^{2}(\alpha-\beta),$$
and, when $\cos^2(\alpha-\beta)>0$, after transmission the conditional state is the pure state of $e_{\alpha}$.

**(ii)** Consequently the chain $0^\circ,45^\circ,90^\circ$ transmits with joint probability
$$\cos^{2}(0-0)\cdot\cos^{2}(\tfrac{\pi}{4}-0)\cdot\cos^{2}(\tfrac{\pi}{2}-\tfrac{\pi}{4})=1\cdot\tfrac12\cdot\tfrac12=\tfrac14 ,$$
whereas the chain $0^\circ,90^\circ$ alone transmits with probability $\cos^{2}(\pi/2)=0$.

**(iii)** Removing the middle analyser therefore changes the transmission of the chain from $\tfrac14$ to $0$ within the declared model: the intervening declared measurement changes the state, and the later analyser sees the state selected by the earlier one, not the original preparation.

**(iv)** *Model comparison only.* A declared classical amplitude model for a transverse field in the same plane, in which the analyser transmits the component along $e_{\alpha}$ and the transmitted intensity is stipulated to be proportional to the squared modulus of that component, gives the same ratio $\cos^{2}(\alpha-\beta)$ for a preparation along $e_{\beta}$. The agreement of these two model computations does not establish that either describes nature, and it does not by itself establish field quantization ([[rem-nrqm-measurement-examples-scope-limits]]); no classical Maxwell theorem is invoked, and the field model is a stipulated finite-dimensional comparison. No transmission counts, detector efficiencies, backgrounds or sampling statistics are reported.

## Facts & Assumptions

**Given:** The two-level Hilbert space $H=\mathbb C^{2}$ with orthonormal basis $(e_{x},e_{y})$; real angles $\alpha,\beta$; the unit vectors $e_{\alpha},e_{\alpha}^{\perp},e_{\beta}$; the declared analysers $A(\alpha)$; the pure preparation $[e_{\beta}]$.

[F1] **The analyser is a declared ideal sharp measurement.** $T_{e_{\alpha},e_{\alpha}}$ and $T_{e_{\alpha}^{\perp},e_{\alpha}^{\perp}}$ are orthogonal projections with sum $I$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clause (c), [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (a)).

[F2] **Adopted outcome law and update.** On the finite polarization space independently assigned above, stipulate the projective probability and conditional-update rules in the form of P3: for mutually orthogonal projections $(P_a)$ summing to $I$, outcome $a$ has probability $p_a=\operatorname{tr}(\rho P_a)$ and its conditional state is $P_a\rho P_a/p_a$ only when $p_a>0$. These are adopted apparatus assumptions, using the formulas and vocabulary of [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a)-(b), rather than a deduction extending the massive-matter scope of P1. For a pure preparation $\rho=T_{\psi,\psi}$, the probability is $\|P_a\psi\|^2$ by [F3]; for $p_a>0$ the conditional state is the pure state of $P_a\psi$ normalized, by [[lem-nrqm-measurement-selective-luders-update]] clause (d).

[F3] **Rank-one pairing.** $\operatorname{tr}(T_{x,x}T_{u,u})=|\langle x,u\rangle|^{2}$ for unit vectors $x,u$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b)-(c)).

[F4] **Overlaps.** $\langle e_{\alpha},e_{\beta}\rangle=\cos\alpha\cos\beta+\sin\alpha\sin\beta=\cos(\alpha-\beta)$ and $\|e_{\alpha}\|=1$ ([[lem-complex-conjugation-and-modulus-laws]], [[cor-inner-product-induces-a-norm]]).

## Verification

**Proof technique:** direct; compute the transition probabilities and conditional states of the declared analyser chain.

1.1 [Clause (i)] The projections of $A(\alpha)$ are the rank-one projections onto the orthonormal pair $(e_{\alpha},e_{\alpha}^{\perp})$ [F1]. By [F2] and [F3], the transmit probability in the preparation $[e_{\beta}]$ is $\|T_{e_{\alpha},e_{\alpha}}e_{\beta}\|^{2}=|\langle e_{\beta},e_{\alpha}\rangle|^{2}=\cos^{2}(\alpha-\beta)$ by [F4], and, when this probability is positive, the conditional state after transmission is the pure state of $T_{e_{\alpha},e_{\alpha}}e_{\beta}=\langle e_{\beta},e_{\alpha}\rangle e_{\alpha}$, which is the pure state of $e_{\alpha}$. This is (i). [given, F1, F2, F3, F4, algebra]

2.1 [Clause (ii)] Applying step 1.1 successively: the first analyser transmits with probability $\cos^{2}0=1$ and prepares $[e_{x}]$; the second transmits $[e_{x}]$ with probability $\cos^{2}(\pi/4-0)=\tfrac12$ and prepares $[e_{\pi/4}]$; the third transmits $[e_{\pi/4}]$ with probability $\cos^{2}(\pi/2-\pi/4)=\tfrac12$ and prepares $[e_{\pi/2}]$. Multiplying the conditional probabilities by the definition of the sequential update gives the joint transmission probability $\tfrac14$ for the chain. Without the middle analyser the preparation at the third analyser is still $[e_{x}]$, and the transmission probability is $\cos^{2}(\pi/2-0)=0$. This is (ii). [step 1.1, given, F2, F4, algebra]

3.1 [Clauses (iii) and (iv)] Step 2.1 exhibits two declared chains whose transmission probabilities differ even though the first and last analysers are the same, so within the declared model the intervening measurement changes later statistics; this is (iii). For (iv), define the stipulated classical model by the assignment $\text{intensity ratio}(\beta\to\alpha)=|\langle e_{\alpha},e_{\beta}\rangle_{\mathbb R^{2}}|^{2}$ for a unit transverse field along $e_{\beta}$; the same overlap computation [F4] gives $\cos^{2}(\alpha-\beta)$, so the two models agree in this ratio. Since both computations use the same stipulated analyser convention and the same two-dimensional overlap, the agreement is a property of that convention and establishes neither model's applicability to nature nor field quantization; no data are compared. This is (iv). [step 2.1, given, F4, algebra] ∎

## Remarks

- **Idealisation.** Each analyser is represented by the declared ideal sharp measurement of clause (c) of [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]: the blocked component is not available for later experiments and the transmitted component leaves the analyser in the corresponding pure state. A physical Polaroid or polarizing beam splitter has its own absorption, reflection, efficiency and background behaviour, which this example does not model.
- **No radiation model.** The two-level space rather than a quantized radiation mode is the declared model; no photon number, mode function, field quantization or Maxwell dynamics is asserted, and no position or arrival-time information is described.
- **Sampling.** The numbers $1,\tfrac12,\tfrac14$ are single-trial model probabilities. To describe a run of $N\ge1$ trials one must additionally specify a joint sampling law. For example, independent Bernoulli variables $X_1,\ldots,X_N\in\{0,1\}$ with $\mathbb P(X_j=1)=q$ encode identical transmit trials at a stated probability $q$; their frequency is $f_N=N^{-1}\sum_jX_j$. Even for this sampling model a particular finite frequency need not be close to $q$: at $q=1/4$ the all-blocked and all-transmitted runs have probabilities $(3/4)^N>0$ and $(1/4)^N>0$. Identical single-trial probabilities alone specify no joint sampling law. No trial data or inference is reported here.
