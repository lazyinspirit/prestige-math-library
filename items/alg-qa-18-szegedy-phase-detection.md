---
id: alg-qa-18-szegedy-phase-detection
kind: algorithm
title: "Szegedy-walk marked-set detection"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-18-marked-set-and-stationary-mass
  - def-qa-17-finite-stochastic-kernel
  - def-qa-17-szegedy-walk
  - def-qa-17-walk-access-model
  - lem-qa-18-absorbing-walk-discriminant-decomposition
  - lem-qa-18-symmetric-compressed-walk-bound
  - alg-qa-quantum-phase-estimation
  - thm-qa-phase-estimation-success-and-tail
  - thm-qa-phase-estimation-superposition-law
  - thm-qa-phase-estimation-exact-grid
  - def-qc-dirac-notation-conversion
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-coherent-function-oracle
  - def-qc-projective-measurement
  - def-qc-elementary-circuit-resources
  - thm-qc-projective-measurement-outcome-law
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - def-non-negative-and-positive-operator
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-projective-conditional-state
  - def-principal-inverse-sine-and-cosine
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - thm-qa-phase-estimation-access-cost
  - thm-qa-17-walk-access-cost
justified_by: []
axiom_use: "None; the procedure uses finite registers and supplied unitary access."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §§8.1–8.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, §§2–3"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
---
## Definition

**Input.** A finite symmetric lazy row-stochastic matrix $P$ on nonempty $X$, with uniform stationary law and, when $|X|\ge2$, real promised lower gap $\delta_0\in(0,1]$ satisfying $\delta(P)=1-\lambda_2(P)\ge\delta_0$; a marked predicate with promise $\mathcal M=\varnothing$ or $|\mathcal M|/|X|\ge\varepsilon_0$ for real $\varepsilon_0\in(0,1]$; and a real failure target $\beta\in(0,1)$. Supply an exact two-outcome projective test on the first register with its Lüders instrument and declared cost $C_{\rm mark}$; this cost includes the marked-branch label readout and verification. The finite classical input supplies, for each $z\in\{\delta_0,\varepsilon_0,\beta\}$, a certified dyadic bracket $[z_-,z_+]$ encoded by finite binary numerators and exponents, with
$$0<z_-\le z\le z_+\le\min(1,2z_-).$$
The bracket containments are input promises; every endpoint bit and all subsequent comparison, precision, and bit-time costs are charged. Such a finite bracket exists for every real parameter in the stated interval. The numerical input model also supplies terminating exact comparisons for rational values and the algebraic real parts of roots of unity used below; it declares and charges their bit-time and description costs. Write $\underline\delta=(\delta_0)_-$, $\underline\varepsilon=(\varepsilon_0)_-$, and $\underline\beta=\beta_-$. Also supply a circuit $A_{\rm unif}$ preparing $|s\rangle=|X|^{-1/2}\sum_{x\in X}|x\rangle$ with its cost and a row-preparation access model for the absorbing chain $P'$ of [[lem-qa-18-absorbing-walk-discriminant-decomposition]]. The model supplies $V_{P'}$, its inverse and controlled forms, the clean-state reflection and its controlled form, and the swap and controlled swap needed for the one-reflection walk; each constituent is separately charged. If $|X|=1$, the procedure measures its sole label with the marked predicate and terminates exactly, without using the gap parameter or walk. Marked-check, preparation, controlled-walk, inverse, gate, precision, comparison, and description-bit costs are separate declared inputs. A matrix alone supplies none of these circuits.

**Output.** `NONEMPTY` if a marked label is found or the phase test accepts; otherwise `EMPTY`. A found label is returned and checked against the supplied predicate.

**Instructions.**

1. If $|X|=1$, measure its only label, evaluate the supplied predicate and return the exact answer. Otherwise set $\gamma_0=\arccos(1-\underline\delta\,\underline\varepsilon)$. Start at $m=6$ and increment until the exact comparison
$$1-\underline\delta\,\underline\varepsilon\le\cos(\pi 2^{5-m}),$$
and set $Q=2^m$. Since the compared cosine is the real part of a root of unity, this is a finite exact algebraic comparison; it is equivalent to $m=\lceil\log_2(32\pi/\gamma_0)\rceil$. Start at $k=1$ and increment until the exact rational comparison $6^k\underline\beta\ge1$ holds, equivalently $k=\lceil\ln(1/\underline\beta)/\ln6\rceil$. Both loops terminate because $\underline\delta\,\underline\varepsilon>0$ and $\underline\beta>0$. All comparisons and their bit costs are part of the declared input cost model.
2. Repeat the following fresh-state run $k$ times, stopping early if `NONEMPTY` is returned.
3. Prepare $|s\rangle$ with $A_{\rm unif}$ and apply the supplied row preparation $V_{P'}$ to obtain the two-register row state. On the first register, use the supplied two-outcome projective measurement with $\Pi_1=\sum_{x\in\mathcal M}|x\rangle\langle x|\otimes I_{\rm rest}$ and $\Pi_0=I-\Pi_1$, with Lüders branch maps $Z\mapsto\Pi_aZ\Pi_a$. These maps form a valid instrument: the projections are non-negative, sum to identity, and equal their own non-negative square roots, so [[thm-qc-luders-instrument-of-a-povm-is-valid]] applies. If outcome $1$ occurs, measure the first register in its computational basis, verify the resulting label $x\in\mathcal M$, and output `NONEMPTY` and $x$ immediately. If outcome $0$ occurs with positive probability, continue with its normalized projected state; this preserves coherence among all unmarked labels. Outcome $0$ is impossible when $\mathcal M=X$, so no conditional state is needed there.
4. On the unmarked branch, apply the coherent QPE circuit prefix from [[alg-qa-quantum-phase-estimation]] to the conditioned two-register state for the one-reflection walk $U'=S(2T'T'^*-I)$, where $T'$ is the row-preparation map for $P'$. The QPE prefix is a finite unitary circuit and acts on this arbitrary conditioned superposition; its eigenvector input in the outcome analysis does not restrict the circuit's input domain. Measure the phase register only after the controlled-power and inverse-QFT circuit has run. Use supplied controlled powers if available; otherwise implement each controlled $U'^{2^j}$ by $2^j$ sequential controlled one-step $U'$ calls. The factorwise controlled call charges controlled $V_{P'}^\dagger$, controlled $V_{P'}$, the controlled clean-state reflection, and controlled swap. No controlled inverse of $U'$ is used.
5. For the measured integer $y\in\{0,\ldots,Q-1\}$, compute $d(y)=\min(y/Q,1-y/Q)$ using exact rational arithmetic. Since $0<\underline\delta\,\underline\varepsilon\le1$, the principal inverse-cosine convention and cosine monotonicity give $0<\gamma_0\le\pi/2$. Return `NONEMPTY` exactly when $d(y)>\gamma_0/(4\pi)$; equality takes the `EMPTY` branch. This strict comparison is finite: if $d(y)>1/8$ accept, and if $d(y)\le1/8$ compare the algebraic numbers $\cos(4\pi d(y))$ and $1-\underline\delta\,\underline\varepsilon$, accepting exactly when the former is strictly smaller. Here $4\pi d(y)$ is a rational multiple of $\pi$, so its cosine is the real part of a root of unity; monotonicity of cosine on $[0,\pi]$ gives the stated comparison. Charge the exact comparison and all phase-register/inverse-QFT gates.
6. If all $k$ fresh runs fail to return `NONEMPTY`, output `EMPTY`. A run uses one marked check, the supplied uniform-state and one row-preparation costs, one $m$-bit QPE, and its explicitly charged controlled-walk calls. With only one-step controlled access, QPE uses exactly $Q-1$ controlled $U'$ calls. Gate synthesis, bracket-description bits, exact comparison arithmetic, and classical threshold bits are additional charged costs.
