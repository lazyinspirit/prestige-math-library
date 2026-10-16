---
id: thm-qa-18-detection-correctness-cost
kind: theorem
title: "Walk detection correctness and cost"
status: published
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
  - def-principal-inverse-sine-and-cosine
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - thm-double-angle-and-power-reduction-identities
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-qa-17-discriminant-self-adjoint
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - def-non-negative-and-positive-operator
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-projective-conditional-state
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite-dimensional spectral decomposition, the supplied unitary interfaces, and finite probability bounds."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

Let $P=(I+Q)/2$ be a finite symmetric lazy transition matrix on a nonempty finite set $X$, with uniform stationary law. Fix real promise parameters $\delta_0,\varepsilon_0\in(0,1]$ and $\beta\in(0,1)$. When $|X|\ge2$, suppose $\lambda_2(P)\le1-\delta_0$; the marked-set promise is $\mathcal M=\varnothing$ or $|\mathcal M|/|X|\ge\varepsilon_0$. The finite algorithm input includes certified dyadic brackets $[z_-,z_+]$ for $z\in\{\delta_0,\varepsilon_0,\beta\}$ with $0<z_-\le z\le z_+\le\min(1,2z_-)$; the containment is an input promise and every endpoint bit and comparison cost is charged separately. Such brackets exist for every allowed real parameter. For $|X|=1$, the promise parameters are unused. Write $\underline\delta=(\delta_0)_-$, $\underline\varepsilon=(\varepsilon_0)_-$, and $\underline\beta=\beta_-$. Give the algorithm the stated uniform-state circuit, a row-preparation access model for the absorbing chain $P'$, its controlled and inverse calls needed for the one-reflection walk, the marked check, and all their separate costs. Put

$$\gamma_0=\arccos(1-\underline\delta\,\underline\varepsilon),\quad m=\min\{j\ge6:1-\underline\delta\,\underline\varepsilon\le\cos(\pi2^{5-j})\},\quad Q=2^m,\quad k=\min\{j\ge1:6^j\underline\beta\ge1\},$$

where the least-integer formulas are exactly the finite comparisons used by the algorithm. Then [[alg-qa-18-szegedy-phase-detection]] has no false positive on an empty marked set and outputs `NONEMPTY` with probability at least $1-\beta$ on every promised nonempty instance. For $|X|\ge2$, let $C_{\rm init}=C_{\rm unif}+C_{\rm row}$, where the terms are the supplied uniform-state and one row-preparation costs, $C_{\rm mark}$ an upper bound for the initial marked/unmarked Lüders test and its marked-branch label readout and verification, $C_{\rm walk}$ the cost of one controlled one-reflection walk call, and $G_{\rm QPE}(m)$ the phase-register preparation and inverse-QFT gate cost. Its worst-case charged quantum cost is at most

$$k\bigl(C_{\rm init}+C_{\rm mark}+(Q-1)C_{\rm walk}+G_{\rm QPE}(m)\bigr),$$

when only one-step controlled-walk access is supplied. The factorwise implementation of $C_{\rm walk}$ charges one controlled row-preparation inverse, one controlled row preparation, the controlled clean-state reflection, and the controlled swap. With separately supplied controlled powers, replace $(Q-1)C_{\rm walk}$ by the sum of their $m$ declared costs. The bracket ratios imply $Q=O((\delta_0\varepsilon_0)^{-1/2})$ and $k=O(1+\ln(1/\beta))$, so the approved all-real parameter scope retains the same asymptotic resource bound. This is a detection result; a `NONEMPTY` phase-test outcome does not supply a marked label. Synthesis, endpoint bits, exact algebraic/rational comparisons, description bits and precision remain separate coordinates.

## Facts & Assumptions

**Given:** The symmetric lazy chain and promise, the absorbing-row access and marked predicate in [[alg-qa-18-szegedy-phase-detection]], and the QPE cutoff and repetition parameters above.

[F1] [[lem-qa-18-symmetric-compressed-walk-bound]]: $P_{UU}$ is positive semidefinite and $\|P_{UU}\|\le1-\delta\varepsilon$ when the uniform chain has second eigenvalue at most $1-\delta$ and $\varepsilon=|\mathcal M|/|X|$. The actual gap $\delta=1-\lambda_2(P)$ satisfies $\delta\ge\delta_0\ge\underline\delta$; on a promised nonempty instance $\varepsilon\ge\varepsilon_0\ge\underline\varepsilon$.

[F2] [[lem-qa-18-absorbing-walk-discriminant-decomposition]]: $P'$ is row-stochastic and its Szegedy discriminant is $D(P')=P_{UU}\oplus I_{\mathcal M}$.

[F3] [[thm-qa-17-szegedy-spectral-mapping]]: for the one-reflection walk $U'=S(2T'T'^*-I)$, a discriminant eigenvalue $\lambda\in(-1,1)$ gives walk eigenvalues $e^{\pm i\arccos\lambda}$; at $\lambda=1$ the corresponding row-space line has eigenvalue $+1$.

[F4] [[thm-qa-phase-estimation-success-and-tail]]: for $Q=2^m$ and $K=\lfloor Q\eta\rfloor\ge2$, QPE has probability at most $1/(2(K-1))$ of circular phase-estimation error at least $\eta$.

[F5] [[thm-qa-phase-estimation-superposition-law]]: QPE outcome probabilities on an orthogonal eigenspace superposition are the mixture of the eigenphase outcome laws with the squared eigenspace norms as weights.

[F6] [[thm-qa-phase-estimation-exact-grid]]: a zero phase is returned as outcome $0$ with certainty.

[F7] [[thm-qa-phase-estimation-access-cost]]: an $m$-bit QPE from one controlled-step oracle makes exactly $2^m-1=Q-1$ controlled-step calls; phase-register gates are charged separately.

[F8] [[thm-qa-17-walk-access-cost]]: the factorwise controlled implementation of one $U'$ charges one controlled inverse row preparation, one controlled forward row preparation, one controlled clean-state reflection, and one controlled swap.

[F9] [[def-qc-dirac-notation-conversion]]: orthogonal computational-basis labels define the finite register measurement and its projected outcome branches.

[F10] [[thm-qa-17-discriminant-self-adjoint]]: the transition-state map $T'$ is an isometry, so distinct basis row states are orthogonal and each has norm one.

[F11] [[def-qa-circular-phase-distance]]: for $x\in[-1,1]$, distance to zero is $d_{\mathbb T}(x)=\min\{|x|,1-|x|\}$, equivalently the distance from $x$ to its nearest integer.

[F12] [[def-qc-projective-measurement]] and [[thm-qc-projective-measurement-outcome-law]] give the projectors and their outcome probabilities. The algorithm explicitly supplies the Lüders instrument for the binary marked/unmarked projectors; [[thm-qc-luders-instrument-of-a-povm-is-valid]] validates its branch maps, and [[thm-qc-projective-conditional-state]] identifies each positive-probability conditional state as the normalized projected state.

[F13] [[def-principal-inverse-sine-and-cosine]]: $\arccos:[-1,1]\to[0,\pi]$ and $\cos(\arccos x)=x$.

[F14] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: cosine is strictly decreasing on $[0,\pi]$.

[F15] [[thm-double-angle-and-power-reduction-identities]]: $1-\cos t=2\sin^2(t/2)$.

[F16] [[cor-sine-and-cosine-are-one-lipschitz]]: for $u\ge0$, $\sin u\le u$.

[F17] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos(\pi/2)=0$.

## Proof


1.1 If $|X|=1$, the supplied predicate is evaluated on the sole label and the procedure returns the exact answer. Assume henceforth $|X|\ge2$. In the empty case $U=X$, $P'=P$, and the prepared row state is $T'|s\rangle$, where $|s\rangle=|X|^{-1/2}\sum_{x\in X}|x\rangle$. Symmetry of $P$ gives $T'|s\rangle=ST'|s\rangle$, so [F3] places it on the $+1$ eigenline and its phase is exactly zero. The first marked check cannot accept, and [F6] makes QPE output $y=0$, for which the strict cutoff fails. Thus neither branch falsely accepts. [F3, F6, given, algebra]

1.2 In a nonempty instance write $\varepsilon=|\mathcal M|/|X|$. The first-register check measures a uniformly distributed label; if it is marked, the algorithm accepts immediately, including the endpoint $\mathcal M=X$. Otherwise $U=X\setminus\mathcal M$ is nonempty and the conditional row state is $T'|s_U\rangle$, with $|s_U\rangle=|U|^{-1/2}\sum_{x\in U}|x\rangle$. By [F10], each first-register outcome has squared norm $1/|X|$ under $T'$, and [F12] projects onto the sum of exactly the $|U|$ unmarked row vectors and normalizes it. [F2, F9, F10, F12, given, algebra]

2.1 On $U$, [F1] and the promises give $0\le\lambda(P_{UU})\le1-\underline\delta\,\underline\varepsilon$. Hence its eigenvalues are at most $1-\underline\delta\,\underline\varepsilon<1$ and their one-reflection phases have circular distance from zero at least $\gamma_0/(2\pi)$. The state $T'|s_U\rangle$ lies in $\operatorname{ran}T'$ and is orthogonal to every marked row vector $T'|x\rangle$, $x\in\mathcal M$, because those vectors have a distinct first-register label; the orthogonality also follows from the isometry [F10]. It therefore has no marked $\lambda=1$ component and no component in $(\operatorname{ran}T'+\operatorname{ran}(ST'))^\perp$. The decomposition [F2] and spectral mapping [F3] show that all its spectral components are the nonzero-phase signal components just bounded. [F1, F2, F3, F10, step 1.2, algebra]

3.1 The choice of $m$ gives $1-\underline\delta\,\underline\varepsilon\le\cos(\pi2^{5-m})$. By [F13], $\cos\gamma_0=1-\underline\delta\,\underline\varepsilon$, and [F14] with $\gamma_0\in[0,\pi]$ and $\pi2^{5-m}\in[0,\pi]$ therefore gives $\gamma_0\ge\pi2^{5-m}$, or $Q\ge32\pi/\gamma_0$. Also $0<\underline\delta\,\underline\varepsilon\le1$, so $\cos\gamma_0\ge0=\cos(\pi/2)$ by [F13] and [F17]; [F14] gives $0<\gamma_0\le\pi/2$. Thus the branch comparison in algorithm step 5 is exact: $d(y)>1/8$ implies $d(y)>\gamma_0/(4\pi)$, while for $d(y)\le1/8$ both angles lie in $[0,\pi/2]$ and strict decrease of cosine makes $d(y)>\gamma_0/(4\pi)$ equivalent to $\cos(4\pi d(y))<1-\underline\delta\,\underline\varepsilon$; equality takes the rejected branch. Set $\eta=\gamma_0/(8\pi)$. Then $K=\lfloor Q\eta\rfloor\ge4$, so [F4] bounds the probability of a circular QPE error at least $\eta$ by $1/6$. To justify the needed distance comparison from the definition [F11], take $u=\theta-y/Q\in(-1,1)$ and $v=y/Q\in[0,1)$. Choose nearest integers $a,b$ to $u,v$, respectively, so $|u-a|=d_{\mathbb T}(u)$ and $|v-b|=d_{\mathbb T}(v)$. Since $\theta=u+v\in[0,1)$, its distance to the nearest integer is at most its distance to the particular integer $a+b$; hence $$d_{\mathbb T}(\theta)\le|\theta-(a+b)|=|(u-a)+(v-b)|\le d_{\mathbb T}(u)+d_{\mathbb T}(v).$$ Thus $d(y):=d_{\mathbb T}(y/Q)\ge d_{\mathbb T}(\theta)-d_{\mathbb T}(\theta-y/Q)$. On every outcome with estimation error $d_{\mathbb T}(\theta-y/Q)<\eta$, step 2.1 gives $$d(y)>\frac{\gamma_0}{2\pi}-\frac{\gamma_0}{8\pi}=\frac{3\gamma_0}{8\pi}>\frac{\gamma_0}{4\pi}.$$ Thus the algorithm accepts on that outcome. By [F5] the same failure bound holds for the whole conditional state, so a phase-test run accepts with probability at least $5/6$. Including the initial marked-label branch can only raise its success probability. [F4, F5, F11, step 2.1, step 1.2, algebra]

4.1 Each fresh run therefore misses a promised nonempty set with probability at most $1/6$. Independent fresh preparations make the probability that all $k$ runs miss at most $(1/6)^k\le\underline\beta\le\beta$ by the definition of $k$ and the certified bracket. The empty case remains exact by step 1.1. The output relation only asserts the decision bit, since the phase-test branch measured no marked label. [F6, given, step 1.1, step 3.1, algebra]

5.1 For $|X|\ge2$, a run makes one supplied uniform-state preparation, one row preparation, one initial marked check, one $m$-bit QPE, and then at most $Q-1$ controlled $U'$ calls by [F7]. If each controlled walk is expanded factorwise, [F8] supplies its four separately charged calls. Multiplying this worst-case per-run sum by $k$ proves the cost upper bound; early stopping only reduces it. For $|X|=1$, the exact branch uses only the sole-label predicate check. The named gate, query, synthesis, precision and bit coordinates are not combined, by the stated input accounting. To relate the finite parameters to the real promises, put $x=\underline\delta\,\underline\varepsilon$. Then $x=1-\cos\gamma_0=2\sin^2(\gamma_0/2)\le\gamma_0^2/2$ by [F15]–[F16], so $\gamma_0\ge\sqrt{2x}$. The least-power-of-two choice gives $Q<64\pi/\gamma_0=O(x^{-1/2})$; since $x\ge\delta_0\varepsilon_0/4$, $Q=O((\delta_0\varepsilon_0)^{-1/2})$. Also $\underline\beta\ge\beta/2$, so $k=O(1+\ln(1/\beta))$. [F7, F8, F13, F15, F16, given, step 4.1, algebra] ∎

