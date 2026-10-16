---
id: thm-qa-13-amplitude-estimation-guarantee
kind: theorem
title: "Amplitude-estimation additive error and success probability"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-13-phase-estimation-amplitude-estimation
  - lem-qa-13-grover-eigenphase-relation
  - lem-qa-13-two-nearest-phase-mass
  - thm-qa-phase-estimation-success-and-tail
  - thm-qa-phase-estimation-superposition-law
  - lem-qa-phase-estimation-sine-chord-bounds
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - def-qa-circular-phase-distance
  - lem-integer-part
  - thm-qa-phase-estimation-exact-grid
  - thm-sine-and-cosine-derivatives
  - thm-sine-and-cosine-addition-formulas
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-ftc-first-part
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - lem-complex-conjugation-and-modulus-laws
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-quarter-turn-values-and-shift-formulas
  - thm-cofunction-supplementary-and-reflection-identities
  - def-qa-13-amplitude-estimation-task
  - def-qa-eigenphase-estimation-model
  - alg-qa-quantum-phase-estimation
  - thm-qa-phase-estimation-access-cost
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
  - thm-qc-reflection-unitary-involution
  - def-qa-classical-bit-cost
  - lem-qa-13-real-cyclotomic-comparison
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For the QFT-based estimator with $M=2^m\ge4$ and integer $k\ge1$, its output satisfies
$$|\widetilde a-a|\le\frac{2\pi k\sqrt{a(1-a)}}M+\frac{\pi^2k^2}{M^2}$$
with probability at least $8/\pi^2$ when $k=1$, and with probability strictly greater than $1-1/[2(k-1)]$ when $k\ge2$. In particular the $k=1$ error is at most $\pi/M+\pi^2/M^2$. At $a=0$ the output is exactly zero; at $a=1$ it is exactly one.

For every allowed access instance and $M=2^m\ge4$, the prescribed signed controlled circuit and its exact real cyclotomic output are well-defined, retaining the controlled relative phase and separately charged classical output processing.

## Facts & Assumptions

**Given:** The amplitude task, QFT estimator with $M=2^m\ge4$, and integer $k\ge1$.

[F1] The estimator returns $\sin^2(\pi y/M)$ after QPE on the Grover iterate ([[alg-qa-13-phase-estimation-amplitude-estimation]]).

[F2] The Grover eigenphases are $\pm\theta/\pi$ modulo one with equal weights, where $a=\sin^2\theta$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F3] The floor and ceiling phase labels have combined probability at least $8/\pi^2$ ([[lem-qa-13-two-nearest-phase-mass]]).

[F4] The QPE tail for $K=\lfloor M\eta\rfloor\ge2$ is at most $1/[2(K-1)]$, and exact-grid phases are returned with certainty ([[thm-qa-phase-estimation-success-and-tail]]).

[F5] For $f(x)=\sin^2x$, $f'(x)=\sin(2x)$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]]).

[F6] Sine is $1$-Lipschitz, so $|\sin u-\sin v|\le|u-v|$ ([[cor-sine-and-cosine-are-one-lipschitz]]).

[F7] The fundamental theorem of calculus evaluates increments of a continuously differentiable function by integrating its derivative ([[thm-ftc-first-part]]).

[F8] The finite QPE outcome probability is $P_\phi(y)=M^{-2}|\sum_{j=0}^{M-1}e^{2\pi i j(\phi-y/M)}|^2$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F9] The geometric sum equals $(1-z^M)/(1-z)$ when $z\ne1$ ([[lem-qa-phase-estimation-geometric-sum]]).

[F10] Circular phase distance takes values in $[0,1/2]$ and identifies the two arcs from a phase to a label ([[def-qa-circular-phase-distance]]).

[F11] For $0\le u\le1/2$, $\sin(\pi u)\ge2u$ ([[lem-qa-phase-estimation-sine-chord-bounds]]).

[F12] Euler's identity gives $e^{it}=\cos t+i\sin t$ and $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F13] The complex modulus is multiplicative and satisfies $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F14] Sine is odd, cosine is even, and $\sin^2x+\cos^2x=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F15] The integer part $j=\lfloor Md\rfloor$ satisfies $j\le Md<j+1$ ([[lem-integer-part]]).

[F16] On a superposition of eigenspaces, QPE outcome probabilities are the eigenphase-weighted mixture, with no cross terms ([[thm-qa-phase-estimation-superposition-law]]).

[F17] The complex exponential is $2\pi i$-periodic and additive in its exponent ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F18] Sine changes sign under a shift by $\pi$, and the supplementary identity is $\sin(\pi-x)=\sin x$; iterating the shift gives $\sin(u-q\pi)=(-1)^q\sin u$ for every integer $q$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-cofunction-supplementary-and-reflection-identities]]).

[F21] The two Grover eigenphases are $\theta/\pi$ and $1-\theta/\pi$, with equal weights in the prepared state for $0<a<1$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F22] QPE uses controlled positive powers and a projective readout of its $M$-label register ([[alg-qa-quantum-phase-estimation]]).

[F23] Controlled and inverse access are explicit capabilities. In repeated-unitary mode the task expands $C(Q)$ into its controlled factors; in power-query mode each supplied $C(Q^{2^j})$ is a declared query with its own cost vector, including any constituent implementations used ([[def-qc-controlled-unitary-access]], [[def-qc-inverse-unitary-access]], [[def-qa-13-amplitude-estimation-task]]).

[F24] A standalone global phase leaves outcome probabilities invariant, but a controlled global phase is a relative phase on the control ([[thm-qc-standalone-global-phase-invariance]], [[thm-qc-controlled-global-phase-is-relative-phase]]).

[F25] The signed reflections in $Q$ are unitary involutions ([[thm-qc-reflection-unitary-involution]]).

[F26] The phase-estimation access theorem counts $m$ supplied controlled-power queries or $M-1$ repeated controlled-$Q$ calls ([[thm-qa-phase-estimation-access-cost]]).

[F27] Classical algebraic encoding and any decimal refinement are charged separately ([[def-qa-classical-bit-cost]]).

[F28] A real value $P(\zeta_M)$ with $\zeta_M=e^{2\pi i/M}$ has the exact real cyclotomic representation and comparison interface of [[lem-qa-13-real-cyclotomic-comparison]].

## Proof


1.1 By [F21], the input state lies in the span of eigenvectors of $Q$ with phases $\theta/\pi$ and $1-\theta/\pi$; the endpoint cases are single eigenphases. QPE is therefore applied to its finite eigenphase decomposition, and the projective measurement returns a label in the finite set $\{0,\ldots,M-1\}$ by [F22]. [given, F21, F22]

1.2 In repeated-unitary mode, the task contract expands each controlled $Q$ as $C(-I)C(A)C(S_0)C(A^*)C(S_{\rm good})$, with every factor supplied or implemented and charged. In power-query mode the estimator instead uses the supplied controlled powers as declared queries, each with its own cost vector; it does not require separately supplied controlled $A$ or $A^*$. The scalar minus is invisible only in an uncontrolled call by [F24], while under control it is retained as a relative phase. The reflection factors are unitary by [F25]. Thus the circuit instructions are well-defined under either declared access mode. [given, F23, F24, F25]

1.3 For $\zeta_M=e^{2\pi i/M}$, Euler's formula gives $\sin^2(\pi y/M)=(1-\cos(2\pi y/M))/2=(2-\zeta_M^y-\zeta_M^{-y})/4$. This is a real algebraic element of the cyclotomic field, so the stated output is exactly encoded; query counts are those in [F26] and decimal/bit processing is charged under [F27]. [given, F26, F27, F28, algebra]

1.4 Let $f(x)=\sin^2x$ and first suppose $0<a<1$. Fix one Grover eigenphase $\phi\in\{\theta/\pi,1-\theta/\pi\}$, put $x=\pi\phi$, and let $d=d_{\mathbb T}(\phi-y/M)$. The difference belongs to $(-1,1)$, so there are an integer $q$ and $\sigma\in\{-1,1\}$ with $\phi-y/M=q+\sigma d$. Hence $\pi y/M=x-q\pi-\sigma\pi d$. By the integer $\pi$-shift identity [F18], the estimator output is $\sin^2(\pi y/M)=f(x+h)$ for $h=-\sigma\pi d$. On either eigenphase, $f(x)=a$: the first has $x=\theta$, and the second has $x=\pi-\theta$ and uses the supplementary identity [F18]. Also $f'(x)=\sin(2x)$ by [F5], and $|f'(x)|=2\sqrt{a(1-a)}$ on both branches: the second branch has $\sin(2\pi-2\theta)=-\sin(2\theta)$ by [F14] and [F18], while $\sin^2\theta=a$ and $\cos^2\theta=1-a$ by [F14]. For any real $x,h$, [F5] and [F7] give $f(x+h)-f(x)-hf'(x)=\int_0^h(\sin(2x+2u)-\sin(2x))\,du$. By [F6], the integrand has absolute value at most $2|u|$, so either orientation gives absolute remainder at most $h^2$. On the phase-success event $d\le k/M$, hence $|h|\le\pi k/M$, and the displayed error bound follows. [given, F1, F2, F5, F6, F7, F14, F18, algebra]

1.5 Let $k\ge2$ and fix one Grover eigenphase $\phi$. For a tail outcome at distance $d>0$, write $x=\phi-y/M=\ell\pm d$ by [F10]. Integer periodicity [F17] and sine parity [F14] reduce the denominator to $|1-e^{2\pi id}|=2\sin(\pi d)$ by Euler [F12] and the sine addition formula. Thus [F8]–[F9] and [F12]–[F14] give $P_\phi(y)=M^{-2}|1-e^{2\pi iM(\phi-y/M)}|^2/|1-e^{2\pi i(\phi-y/M)}|^2\le1/(4M^2d^2)$, since the numerator modulus is at most $2$ and the denominator is $2\sin(\pi d)\ge4d$ by [F10]–[F11]. In the tail $d\ge k/M$, put $j=\lfloor Md\rfloor$; [F15] gives $k\le j\le\lfloor M/2\rfloor$. Each annulus $j\le Md<j+1$ has at most two arcs of length $1/M$, each containing at most one label on the $1/M$ grid. Thus the tail probability is at most $\frac12\sum_{j=k}^{\lfloor M/2\rfloor}j^{-2}<\frac12\sum_{j=k}^{\lfloor M/2\rfloor}[j(j-1)]^{-1}\le1/[2(k-1)]$. An empty tail has probability zero, also strictly below this positive bound. This strengthens [F4], so success is strictly greater than $1-1/[2(k-1)]$ for each phase and hence for their mixture. [given, F2, F4, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, algebra]

2.1 For $k=1$, both labels from [F3] have circular distance at most $1/M$ from the relevant Grover phase. Off-grid, floor and ceiling labels have distances strictly below $1/M$; on-grid the distance is zero. Thus the event used in step 1.4 has probability at least $8/\pi^2$. [given, F2, F3, F16, step 1.4]

3.1 At $a=0$ the Grover phase is the exact grid phase $0$; at $a=1$ it is $1/2$, whose label $M/2$ is integral because $M$ is even. Exact-grid recovery [F4] gives outputs $0$ and $1$. Finally $2\sqrt{a(1-a)}\le1$ gives the stated $k=1$ simplification. [given, F1, F2, F4, step 1.4, algebra] ∎

