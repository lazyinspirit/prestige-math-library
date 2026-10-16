---
id: thm-qa-18-detection-correctness-cost
kind: theorem
title: "Walk detection correctness and cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-18-szegedy-phase-detection
  - thm-qa-17-szegedy-spectral-mapping
  - lem-qa-18-symmetric-compressed-walk-bound
  - lem-qa-18-absorbing-walk-discriminant-decomposition
  - thm-qa-phase-estimation-success-and-tail
  - thm-qa-phase-estimation-superposition-law
  - thm-qa-phase-estimation-exact-grid
  - thm-qa-phase-estimation-access-cost
  - thm-qa-17-walk-access-cost
  - def-qc-dirac-notation-conversion
  - def-qa-circular-phase-distance
  - thm-qa-17-discriminant-self-adjoint
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite-dimensional spectral decomposition, the supplied unitary interfaces, and finite probability bounds."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §§8.1–8.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, §§2–3"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
---
## Statement

Let $P=(I+Q)/2$ be a finite symmetric lazy transition matrix on a nonempty finite set $X$, with uniform stationary law, and suppose its second eigenvalue satisfies $\lambda_2(P)\le1-\delta_0$ for $\delta_0\in(0,1]$. Let the marked-set promise be $\mathcal M=\varnothing$ or $|\mathcal M|/|X|\ge\varepsilon_0$, where $\varepsilon_0\in(0,1]$. Give the algorithm the stated uniform-state circuit, a row-preparation access model for the absorbing chain $P'$, its controlled and inverse calls needed for the one-reflection walk, the marked check, and all their separate costs. Put

$$\gamma_0=\arccos(1-\delta_0\varepsilon_0),\quad m=\left\lceil\log_2\frac{32\pi}{\gamma_0}\right\rceil,\quad Q=2^m,\quad k=\left\lceil\frac{\ln(1/\beta)}{\ln6}\right\rceil,$$

for $\beta\in(0,1)$. Then [[alg-qa-18-szegedy-phase-detection]] has no false positive on an empty marked set and outputs `NONEMPTY` with probability at least $1-\beta$ on every promised nonempty instance. For $|X|\ge2$, let $C_{\rm init}=C_{\rm unif}+C_{\rm row}$, where the terms are the supplied uniform-state and one row-preparation costs, $C_{\rm mark}$ the initial marked check, $C_{\rm walk}$ the cost of one controlled one-reflection walk call, and $G_{\rm QPE}(m)$ the phase-register preparation and inverse-QFT gate cost. Its worst-case charged cost is at most

$$k\bigl(C_{\rm init}+C_{\rm mark}+(Q-1)C_{\rm walk}+G_{\rm QPE}(m)\bigr),$$

when only one-step controlled-walk access is supplied. The factorwise implementation of $C_{\rm walk}$ charges one controlled row-preparation inverse, one controlled row preparation, the controlled clean-state reflection, and the controlled swap. With separately supplied controlled powers, replace $(Q-1)C_{\rm walk}$ by the sum of their $m$ declared costs. This is a detection result; a `NONEMPTY` phase-test outcome does not supply a marked label. Synthesis, comparison arithmetic, description bits and precision remain separate coordinates.

## Facts & Assumptions

**Given:** The symmetric lazy chain and promise, the absorbing-row access and marked predicate in [[alg-qa-18-szegedy-phase-detection]], and the QPE cutoff and repetition parameters above.

[F1] [[lem-qa-18-symmetric-compressed-walk-bound]]: $P_{UU}$ is positive semidefinite and $\|P_{UU}\|\le1-\delta\varepsilon$ when the uniform chain has second eigenvalue at most $1-\delta$ and $\varepsilon=|\mathcal M|/|X|$.

[F2] [[lem-qa-18-absorbing-walk-discriminant-decomposition]]: $P'$ is row-stochastic and its Szegedy discriminant is $D(P')=P_{UU}\oplus I_{\mathcal M}$.

[F3] [[thm-qa-17-szegedy-spectral-mapping]]: for the one-reflection walk $U'=S(2T'T'^*-I)$, a discriminant eigenvalue $\lambda\in(-1,1)$ gives walk eigenvalues $e^{\pm i\arccos\lambda}$; at $\lambda=1$ the corresponding row-space line has eigenvalue $+1$.

[F4] [[thm-qa-phase-estimation-success-and-tail]]: for $Q=2^m$ and $K=\lfloor Q\eta\rfloor\ge2$, QPE has probability at most $1/(2(K-1))$ of circular phase-estimation error at least $\eta$.

[F5] [[thm-qa-phase-estimation-superposition-law]]: QPE outcome probabilities on an orthogonal eigenspace superposition are the mixture of the eigenphase outcome laws with the squared eigenspace norms as weights.

[F6] [[thm-qa-phase-estimation-exact-grid]]: a zero phase is returned as outcome $0$ with certainty.

[F7] [[thm-qa-phase-estimation-access-cost]]: an $m$-bit QPE from one controlled-step oracle makes exactly $2^m-1=Q-1$ controlled-step calls; phase-register gates are charged separately.

[F8] [[thm-qa-17-walk-access-cost]]: the factorwise controlled implementation of one $U'$ charges one controlled inverse row preparation, one controlled forward row preparation, one controlled clean-state reflection, and one controlled swap.

[F9] [[def-qc-dirac-notation-conversion]]: orthogonal computational-basis labels define the finite register measurement and its projected outcome branches.

[F10] [[thm-qa-17-discriminant-self-adjoint]]: the transition-state map $T'$ is an isometry, so distinct basis row states are orthogonal and each has norm one.

[F11] [[def-qa-circular-phase-distance]]: circular distance on $\mathbb R/\mathbb Z$ satisfies the triangle inequality and distance to zero is $d_{\mathbb T}(x,0)=\min_{n\in\mathbb Z}|x-n|$.

[F12] [[def-qc-projective-measurement]] and [[thm-qc-projective-measurement-outcome-law]]: a computational-basis projective measurement has outcome probability equal to the squared norm of the corresponding projected state; a positive-probability conditional branch is its normalized projection.

## Proof
1.1 If $|X|=1$, the supplied predicate is evaluated on the sole label and the procedure returns the exact answer. Assume henceforth $|X|\ge2$. In the empty case $U=X$, $P'=P$, and the prepared row state is $T'|s\rangle$, where $|s\rangle=|X|^{-1/2}\sum_{x\in X}|x\rangle$. Symmetry of $P$ gives $T'|s\rangle=ST'|s\rangle$, so [F3] places it on the $+1$ eigenline and its phase is exactly zero. The first marked check cannot accept, and [F6] makes QPE output $y=0$, for which the strict cutoff fails. Thus neither branch falsely accepts. [F3, F6, given, algebra]

1.2 In a nonempty instance write $\varepsilon=|\mathcal M|/|X|$. The first-register check measures a uniformly distributed label; if it is marked, the algorithm accepts immediately, including the endpoint $\mathcal M=X$. Otherwise $U=X\setminus\mathcal M$ is nonempty and the conditional row state is $T'|s_U\rangle$, with $|s_U\rangle=|U|^{-1/2}\sum_{x\in U}|x\rangle$. By [F10], each first-register outcome has squared norm $1/|X|$ under $T'$, and [F12] projects onto the sum of exactly the $|U|$ unmarked row vectors and normalizes it. [F2, F9, F10, F12, given, algebra]

2.1 On $U$, [F1] and the promises give $0\le\lambda(P_{UU})\le1-\delta_0\varepsilon_0$. Hence its eigenvalues are at most $1-\delta_0\varepsilon_0<1$ and their one-reflection phases have circular distance from zero at least $\gamma_0/(2\pi)$. The state $T'|s_U\rangle$ lies in $\operatorname{ran}T'$ and is orthogonal to every marked row vector $T'|x\rangle$, $x\in\mathcal M$, because those vectors have a distinct first-register label; the orthogonality also follows from the isometry [F10]. It therefore has no marked $\lambda=1$ component and no component in $(\operatorname{ran}T'+\operatorname{ran}(ST'))^\perp$. The decomposition [F2] and spectral mapping [F3] show that all its spectral components are the nonzero-phase signal components just bounded. [F1, F2, F3, F10, step 1.2, algebra]

2.2 Set $\eta=\gamma_0/(8\pi)$. Since $Q\ge32\pi/\gamma_0$, $K=\lfloor Q\eta\rfloor\ge4$, so [F4] bounds the probability of a circular QPE error at least $\eta$ by $1/6$. On every other outcome, the triangle inequality [F11] for circular distance gives $d(y):=d_{\mathbb T}(y/Q,0)>\frac{\gamma_0}{2\pi}-\frac{\gamma_0}{8\pi}=\frac{3\gamma_0}{8\pi}>\frac{\gamma_0}{4\pi}.$ Thus the algorithm accepts on that outcome. By [F5] the same failure bound holds for the whole conditional state, so a phase-test run accepts with probability at least $5/6$. Including the initial marked-label branch can only raise its success probability. [F4, F5, F11, step 2.1, step 1.2, algebra]

3.1 Each fresh run therefore misses a promised nonempty set with probability at most $1/6$. Independent fresh preparations make the probability that all $k$ runs miss at most $(1/6)^k\le\beta$ by the definition of $k$. The empty case remains exact by step 1.1. The output relation only asserts the decision bit, since the phase-test branch measured no marked label. [F6, given, step 1.1, step 2.2, algebra]

4.1 For $|X|\ge2$, a run makes one supplied uniform-state preparation, one row preparation, one initial marked check, one $m$-bit QPE, and then at most $Q-1$ controlled $U'$ calls by [F7]. If each controlled walk is expanded factorwise, [F8] supplies its four separately charged calls. Multiplying this worst-case per-run sum by $k$ proves the cost upper bound; early stopping only reduces it. For $|X|=1$, the exact branch uses only the sole-label predicate check. The named gate, query, synthesis, precision and bit coordinates are not combined, by the stated input accounting. [F7, F8, given, step 3.1, algebra] ∎
