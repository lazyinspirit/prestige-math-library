---
id: lem-qa-13-certified-count-output-rounding
kind: lemma
title: "Terminating certified rounding for a counting estimate"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-13-certified-count-output-rounding
  - lem-qa-13-pi-rational-bounds
  - thm-principal-inverse-tangent-calculus
  - def-sine-and-cosine-by-power-series
  - def-qa-classical-bit-cost
  - lem-integer-part
  - thm-ratio-test
  - thm-alternating-series-test
  - thm-sine-and-cosine-addition-formulas
  - thm-double-angle-and-power-reduction-identities
  - lem-qa-13-real-cyclotomic-comparison
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - lem-nth-term-test
  - def-abs-value
  - thm-of-archimedean
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

Given integers $N\ge1$, even $M\ge2$, and $0\le y<M$, let $z=N\sin^2(\pi y/M)$. There is a terminating deterministic rational-interval procedure that produces an integer $q$ with $|q-z|\le2/3$. Its arithmetic work is a classical bit cost; no polynomial bit bound is asserted.

## Facts & Assumptions

**Given:** Integers $N\ge1$, even $M\ge2$, and a phase label $0\le y<M$.

[F1] $3<\pi<22/7$, and $\pi/4=\sum_{n=0}^{\infty}(-1)^n/(2n+1)$. After $n$ terms, the alternating-series error gives $|\pi-4S_n|\le4/(2n+1)$, where $S_n=\sum_{k<n}(-1)^k/(2k+1)$. Increasing $n$ until $8/(2n+1)$ is below a requested rational width yields the rational interval $[4S_n-4/(2n+1),4S_n+4/(2n+1)]$; termination follows from the Archimedean property ([[lem-qa-13-pi-rational-bounds]], [[thm-principal-inverse-tangent-calculus]], [[thm-alternating-series-test]], [[thm-of-archimedean]]).

[F2] Cosine is represented by its everywhere-convergent power series ([[def-sine-and-cosine-by-power-series]]).

[F3] Rational arithmetic, interval comparison, and output writing are charged classical bit operations ([[def-qa-classical-bit-cost]]).

[F4] For $x=2\pi y/M$ and $\zeta_M=e^{2\pi i/M}$, the exponential addition law gives $\zeta_M^{\pm y}=e^{\pm ix}$ ([[thm-complex-exponential-addition-and-real-extension]]). Euler's formula, $|e^{ix}|=1$, and $e^{-ix}=(e^{ix})^{-1}$ give $\zeta_M^y+\zeta_M^{-y}=2\cos x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). Together with [F5], this proves $\sin^2(\pi y/M)=(2-\zeta_M^y-\zeta_M^{-y})/4$ for every integer $M\ge2$, including $M=2$ and non-dyadic $M$.

[F5] The cosine double-angle identity gives $\cos(2u)=1-2\sin^2u$ ([[thm-double-angle-and-power-reduction-identities]]).

[F6] For $x,y\in[0,8]$ and $d\ge1$, factoring $x^d-y^d=(x-y)\sum_{j=0}^{d-1}x^{d-1-j}y^j$ gives $|x^d-y^d|\le d\,8^{d-1}|x-y|$.

[F7] The alternating-series remainder bounds the tail by the first omitted term when magnitudes decrease to zero ([[thm-alternating-series-test]]).

[F8] For $R_r=8^{2r+2}/(2r+2)!$, $R_{r+1}/R_r=64/((2r+4)(2r+3))\to0$. The ratio test gives convergence of $\sum_{r\ge4}R_r$, and the term test then gives $R_r\to0$ ([[thm-ratio-test]], [[lem-nth-term-test]]).

[F9] For every real $x$, there is an integer $m=\lfloor x\rfloor$ with $m\le x<m+1$ ([[lem-integer-part]]).

[F10] The real absolute value is defined by $|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$ ([[def-abs-value]]).

[F11] The exact rational-interval instructions, including the $y=0$ branch, the $r$ and enclosure-index loops, and the output $q=\lceil v-2/3\rceil$ for the final interval $[u,v]$, are defined in [[alg-qa-13-certified-count-output-rounding]].

## Proof

1.1 If $y=0$, [F11] returns $q=0=z$, so assume $0<y<M$. Since $\pi<22/7<4$, the true argument $x=2\pi y/M$ lies in $(0,8)$. For any accepted enclosure index $h$ in [F11], write $x_r=x_h$, $\rho_r=\rho_h$ and $I_r=[u,v]$ for its output interval. For every $r\ge4$, the cosine terms after index $r$ alternate with decreasing magnitudes, so the omitted tail is bounded by $R_r$. For each integer $k\ge1$, [F6] bounds $|x^{2k}-x_r^{2k}|$ by $2k\,8^{2k-1}|x-x_r|$; summing with the factorial coefficients gives $|C_r(x)-C_r(x_r)|\le D_r\rho_r$. Thus $|\cos x-C_r(x_r)|\le D_r\rho_r+R_r=E$, and the endpoints in [F11] enclose $z=N(1-\cos x)/2$ in $I_r$. [given, F1, F2, F6, F7, F11, algebra]

2.1 The ratio of successive $R_r$ bounds tends to zero, so $R_r\to0$ and a finite $r$ satisfies $NR_r<1/24$. For that $r$, the enclosure-index loop in [F11] refines the alternating arctangent enclosure of $\pi$ until its propagated argument interval is contained in $[0,8]$ and $ND_r\rho_r<1/24-NR_r$: this terminates because the true argument is strictly inside $[0,8]$, $D_r$ is finite, and the enclosures become arbitrarily narrow. The cosine interval has width at most $2(D_r\rho_r+R_r)$, so its $z$ interval has width $N(D_r\rho_r+R_r)<1/24<1/6$. Both loops terminate. [given, F1, F8, F11, step 1.1, algebra]

3.1 Apply [F9] to $z+1/2$ and set $n=\lfloor z+1/2\rfloor$. Then $n\le z+1/2<n+1$, so $-1/2\le z-n<1/2$ and [F10] gives $|z-n|\le1/2$. If $I_r=[u,v]$ contains $z$ and has width below $1/6$, every $x\in I_r$ satisfies $-1/6<x-z<1/6$; adding these bounds gives $-2/3<x-n<2/3$. Thus the closed radius-$2/3$ interval about $n$ contains all of $I_r$, so an eligible integer exists. Eligibility is exactly $v-2/3\le q\le u+2/3$, so the least eligible integer is $q=\lceil v-2/3\rceil$, as returned by [F11]. It gives $|q-z|\le2/3$ because $z\in I_r$. All rational operations and output work are charged by [F3]. The identity $z=N\sin^2(\pi y/M)$ follows from the cosine double-angle identity, and its exact encoding is covered by [F4] using [F5]. [given, F3, F4, F5, F9, F10, F11, step 2.1, algebra] ∎

