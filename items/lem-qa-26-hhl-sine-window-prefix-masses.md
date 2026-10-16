---
id: lem-qa-26-hhl-sine-window-prefix-masses
kind: lemma
title: "Sine-window normalization and positive prefix weights"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-26-hhl-sine-window
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-phase-estimation-sine-chord-bounds
  - thm-double-angle-and-power-reduction-identities
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-sine-and-cosine-addition-formulas
  - thm-cofunction-supplementary-and-reflection-identities
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only a finite geometric sum and elementary sine inequalities are used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

For a power of two $T\ge2$ and integers $0\le a\le b\le T$,
$$W_T(a,b)=\frac{b-a}{2}-\frac{\sin(2\pi b/T)-\sin(2\pi a/T)}{4\sin(\pi/T)}.$$
In particular, $W_T(0,T)=T/2$, so $|\Psi_T\rangle$ is normalized, and every nonempty interval has $W_T(a,b)\ge T^{-2}$.

## Facts & Assumptions

**Given:** The sine window and interval mass in [[def-qa-26-hhl-sine-window]].

[F1] [[lem-qa-phase-estimation-geometric-sum]]: finite geometric sums satisfy $\sum_{j=0}^{n-1}z^j=(1-z^n)/(1-z)$ when $z\ne1$.

[F2] [[def-qa-26-hhl-sine-window]]: $W_T(a,b)$ is the sum of the indicated nonnegative sine squares.

[F3] [[thm-double-angle-and-power-reduction-identities]]: $\sin^2x=(1-\cos(2x))/2$.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]], and [[thm-sine-and-cosine-addition-formulas]]: $e^{ix}=\cos x+i\sin x$, $e^{i\pi}=-1$, the exponential is multiplicative, and sine/cosine satisfy their addition formulas.

[F5] [[lem-qa-phase-estimation-sine-chord-bounds]]: $\sin(\pi u)\ge2u$ for $0\le u\le1/2$.

[F6] [[thm-cofunction-supplementary-and-reflection-identities]]: $\sin(\pi-x)=\sin x$.

## Proof


1.1 Put $z=e^{2\pi i/T}$. By [F4], $z^T=e^{2\pi i}=1$. Also [F5] gives $\sin(\pi/T)\ge2/T>0$, so $1-z\ne0$. Reindexing [F1] gives $$\sum_{\tau=a}^{b-1}e^{2\pi i(\tau+1/2)/T}=e^{2\pi i(a+1/2)/T}\frac{1-z^{b-a}}{1-z}=e^{i\pi(a+b)/T}\frac{\sin(\pi(b-a)/T)}{\sin(\pi/T)}.$$ The real part of the last expression is $[\sin(2\pi b/T)-\sin(2\pi a/T)]/[2\sin(\pi/T)]$ by the sine addition formula [F4]. Applying [F3] to the defining sum [F2] proves the displayed formula for $W_T(a,b)$. [F1, F2, F3, F4, F5, algebra]

2.1 Setting $a=0,b=T$ in the formula of step 1.1 makes its sine difference zero, so $W_T(0,T)=T/2$. The squared norm of $|\Psi_T\rangle$ is $(2/T)W_T(0,T)=1$. [step 1.1, algebra]

3.1 If $a<b$, choose an integer $\tau$ in $[a,b)$. Then $\tau+1/2$ lies between $1/2$ and $T-1/2$, so its angle lies in $[\pi/(2T),\pi-\pi/(2T)]$. The chord bound [F5] gives $\sin(\pi/(2T))\ge1/T$, and [F6] reflects this lower bound to the upper half of the interval. That summand is at least $T^{-2}$ and all other summands are nonnegative by [F2]. [F2, F5, F6, algebra] ∎

