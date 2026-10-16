---
id: lem-qa-13-real-cyclotomic-comparison
kind: lemma
title: "Finite exact comparison of real cyclotomic values"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - thm-principal-inverse-tangent-calculus
  - lem-qa-13-pi-rational-bounds
  - def-sine-and-cosine-by-power-series
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-qa-classical-bit-cost
  - thm-alternating-series-test
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

For an integer $s\ge2$, let $\zeta_s=e^{2\pi i/s}$ and let $P,R\in\mathbb Q[X]$ be given coefficient lists such that $P(\zeta_s)$ and $R(\zeta_s)$ are real. There is a terminating deterministic exact procedure to decide which of these two real numbers is larger, or whether they are equal. Its bit-operation cost is charged to the classical cost model; no polynomial bound is asserted.

## Facts & Assumptions

**Given:** The integer $s\ge2$, rational polynomials $P,R$, and the promise that their values at $\zeta_s=e^{2\pi i/s}$ are real.

[F1] The cyclotomic polynomial $\Phi_s$ is irreducible over $\mathbb Q$ and is the minimal polynomial of a primitive $s$th root ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]).

[F2] Write $S_n=\sum_{j=0}^{n-1}(-1)^j/(2j+1)$. The arctangent theorem gives $\pi/4=\lim_n S_n$, and the alternating-series test gives $|\pi/4-S_n|\le1/(2n+1)$. For any rational width $\eta>0$, increasing $n$ until $8/(2n+1)<\eta$ gives the rational interval $[4S_n-4/(2n+1),4S_n+4/(2n+1)]$ of width below $\eta$ containing $\pi$; exact rational comparisons suffice, and the loop terminates because the natural numbers are unbounded ([[thm-principal-inverse-tangent-calculus]], [[thm-alternating-series-test]], [[thm-of-archimedean]]).

[F3] Sine and cosine are given by their convergent power series ([[def-sine-and-cosine-by-power-series]]).

[F4] Rational arithmetic and exact comparisons are part of the separately charged classical bit-operation model ([[def-qa-classical-bit-cost]]).

[F5] $e^{ix}=\cos x+i\sin x$ for real $x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F6] For an alternating series whose nonnegative terms decrease to zero, the remainder after $r$ terms is at most the first omitted term ([[thm-alternating-series-test]]).

## Proof

1.1 Form $D=P-R$ and divide it by $\Phi_s$ over $\mathbb Q$. By irreducibility in [F1], $D(\zeta_s)=0$ exactly when the remainder is the zero polynomial; that finite rational coefficient test decides equality. [given, F1, algebra]

2.1 If the remainder is nonzero, then $d=D(\zeta_s)$ is a nonzero real algebraic number. Put $\alpha=2\pi/s\in(0,4)$, using $s\ge2$ and $\pi<22/7<4$. For any rational tolerance $\eta>0$, refine the pi enclosure from [F2] until the scaled interval $J$ for $\alpha$ lies in $[0,4]$ and has width below $\eta$; this terminates because $\alpha\in(0,4)$. For $k\ge4$ and $x\in[0,4]$, successive cosine-term magnitudes have ratio at most $16/((2k+2)(2k+1))<1$, and successive sine-term magnitudes have ratio at most $16/((2k+3)(2k+2))<1$. Thus [F3] and [F6] bound the cosine and sine tails after truncation through index $r\ge4$ by $4^{2r+2}/(2r+2)!$ and $4^{2r+3}/(2r+3)!$. The ratios of these bounds at successive $r$ are $16/((2r+4)(2r+3))$ and $16/((2r+5)(2r+4))$, both below $1/2$ for $r\ge4$, so exact rational comparisons find an $r$ with both bounds below $\eta$. For this fixed $r$, refine $J$ until the rational interval evaluations of both truncation polynomials have widths below $\eta$; this exact test terminates because they are fixed polynomials and interval addition and multiplication preserve shrinking widths. Use those intervals with the alternating remainders to enclose $\cos\alpha$ and $\sin\alpha$, then evaluate $D$ using rational complex interval arithmetic and Euler's formula [F5]. The resulting real intervals contain $d$ and have widths tending to zero as $\eta\to0$, since each sine/cosine interval width and tail bound tends to zero and $D$ is a finite polynomial. [given, F2, F3, F5, F6, step 1.1, algebra]

3.1 Because $d\ne0$, its distance from zero is positive. Repeatedly refine the rational interval from step 2.1 until it lies strictly above or below zero; convergence of the interval widths guarantees finite termination, and its sign decides the strict order. Equality was already decided in step 1.1, so this procedure terminates on every promised input. Its finitely many rational operations are charged under [F4]. [given, F4, step 1.1, step 2.1, algebra] ∎

