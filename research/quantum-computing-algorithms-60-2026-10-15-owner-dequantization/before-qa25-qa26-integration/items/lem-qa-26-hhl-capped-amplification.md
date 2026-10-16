---
id: lem-qa-26-hhl-capped-amplification
kind: lemma
title: "Finite capped amplification succeeds with a supplied lower bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-12-amplitude-amplification
  - thm-qa-12-amplification-rotation-correctness
  - lem-qa-12-amplification-plane-invariant
  - def-qc-inverse-unitary-access
  - lem-qa-phase-estimation-sine-chord-bounds
  - thm-sine-and-cosine-addition-formulas
  - thm-double-angle-and-power-reduction-identities
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; each random draw and schedule is finite, and fresh rounds are independent by the supplied preparation model."
provenance:
  statement: literature-derived
  proof: ai-generated
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

Let a unitary flagged preparation $V$ have well probability $p\ge p_0:=1/(16\kappa^2)$, $\kappa\ge1$, and exact inverse access. Set $K=\lceil4\kappa\rceil$, $R=\lceil16\ln(1/\rho)\rceil+16$ for $0<\rho<1$. In each of $R$ fresh rounds, draw $b=\lceil\log_2K\rceil$ uniform bits; reject the round without queries if the resulting integer $j\ge K$, and otherwise run $j$ amplitude-amplification iterations from $V|0\rangle$, then verify the well flag. The probability that all rounds fail is at most $\rho$. The conditional well state in every successful round is the normalized well component of $V|0\rangle$. The total number of $V,V^\dagger$ calls is at most $2RK$.

## Facts & Assumptions

**Given:** A fixed unitary state preparation, its inverse, and an orthogonal well-flag projection.

[F1] [[lem-qa-12-amplification-plane-invariant]]: the initial good and bad components span an invariant plane for the amplification iterate.

[F2] [[thm-qa-12-amplification-rotation-correctness]]: if $p=\sin^2\theta$, after $j$ rounds the success probability is $\sin^2((2j+1)\theta)$.

[F3] [[alg-qa-12-amplitude-amplification]]: one iterate consists of the supplied preparation, its inverse, and the two declared reflections.

[F4] [[def-qc-inverse-unitary-access]]: every inverse call is an explicitly supplied access with a separately chargeable cost.

[F5] [[lem-qa-phase-estimation-sine-chord-bounds]]: $\sin v\ge2v/\pi$ for $0\le v\le\pi/2$.

[F6] [[thm-sine-and-cosine-addition-formulas]] and [[thm-double-angle-and-power-reduction-identities]]: sine addition gives $\sin(a+b)-\sin(a-b)=2\cos(a)\sin(b)$, and the double-angle formulas give $\sin^2x=(1-\cos(2x))/2$ and $\cos^2x=(1+\cos(2x))/2$.

[F7] [[thm-logarithm-derivative-and-integral]]: $\ln x=\int_1^x dt/t$ for $x>0$.

## Proof

1.1 For $0<\sin(2\phi)$, the addition identity in [F6] gives $\sin((4j+4)\phi)-\sin(4j\phi)=2\cos((4j+2)\phi)\sin(2\phi)$. Summing over $j=0,\ldots,K-1$ telescopes, so $\sum_j\cos((4j+2)\phi)=\sin(4K\phi)/(2\sin(2\phi))$. The double-angle identities in [F6] therefore give $\sum_{j=0}^{K-1}\sin^2((2j+1)\phi)=K/2-\sin(4K\phi)/(4\sin(2\phi))$, and the corresponding cosine-square sum has a plus sign. Here the denominators are positive except at the separately treated endpoint $p=1$. Put $\theta=\arcsin\sqrt p$. For $p\le1/2$, $\sin(2\theta)=2\sqrt{p(1-p)}\ge\sqrt{2p}\ge1/(2\sqrt2\kappa)$. The finite sine-square identity from [F6] gives average success
$$\frac1K\sum_{j=0}^{K-1}\sin^2((2j+1)\theta)=\frac12-\frac{\sin(4K\theta)}{4K\sin(2\theta)}\ge\frac12-\frac1{4K\sin(2\theta)}\ge\frac12-\frac1{4\sqrt2}>\frac14.$$
For $1/2<p<1$, put $\theta'=\pi/2-\theta\in[0,\pi/4)$. The cosine-square version of [F6] gives average success $\frac12+\frac{\sin(4K\theta')}{4K\sin(2\theta')}$. If its sine numerator is nonnegative this is at least $1/2$. If it is negative, then $4K\theta'>\pi$, and [F5] gives $\sin(2\theta')\ge4\theta'/\pi$, so the magnitude of the fraction is at most $\pi/(16K\theta')<1/4$. The average is again greater than $1/4$. At $p=1$, every iteration succeeds. Thus uniform accepted $j$ has average success at least $1/4$ for every $p\ge p_0$. [given, F2, F5, F6, algebra]

1.2 Since $K\le2^b<2K$, the random-bit draw is accepted with probability $K/2^b>1/2$ and, conditioned on acceptance, is uniform on $\{0,\ldots,K-1\}$. Each fresh round therefore succeeds with probability at least $1/8$. Independence of fresh preparation, bits and verification gives total failure at most $(7/8)^R\le e^{-R/8}$, since [F7] gives $\ln(8/7)=\int_1^{8/7}dt/t\ge(1/7)(7/8)=1/8$ and $R\ge16\ln(1/\rho)$. Therefore the failure is at most $e^{-2\ln(1/\rho)}=\rho^2\le\rho$. [given, F7, step 1.1, algebra]

1.3 At most $K-1$ iterations occur in one round, each using one $V$ and one $V^\dagger$ besides the initial $V$; hence each call count is at most $RK$, and their sum is at most $2RK$. The good component remains collinear by [F1, F3], so conditioning on the well flag preserves its normalized state. [F1, F2, F3, F4, step 1.2, algebra] ∎
