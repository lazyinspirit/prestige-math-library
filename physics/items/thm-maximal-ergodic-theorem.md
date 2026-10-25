---
id: thm-maximal-ergodic-theorem
kind: theorem
title: Maximal ergodic theorem
status: published
origin: pipeline
landmark: true
deps: [def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, prop-ergodic-averages-are-well-defined-and-l-p-contractive, thm-integrals-are-invariant-under-measure-preserving-maps, thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Alessio Del Vigna, The Birkhoff Ergodic Theorem"
      url: "https://poisson.phc.dm.unipi.it/~delvigna/maths/birkhoff.pdf"
      locator: "Theorem 3 and its complete proof, pp. 2–3"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "Theorem 10.5.1 and proof, printed pp. 93–94"
proof_strategy: direct
---

## Statement

Let $(X,\mathcal A,\mu,T)$ be a measure-preserving system for an arbitrary
measure $\mu$, and let $f:X\to\mathbb R$ be a finite-valued measurable
representative in $\mathcal L^1(\mu)$.  With the unnormalised sums $S_nf$, put

$$E:=\left\{x:\sup_{n\geq1}S_nf(x)>0\right\}.$$

Then

$$\int_E f\,d\mu\geq0.$$

Neither finiteness of $\mu$, invertibility of $T$, nor ergodicity is assumed.

## Facts & Assumptions

**Given:** The system and real integrable representative in the Statement.

[F1] Composition by $T$ preserves measurability and the integral of every nonnegative measurable or integrable function ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F2] Integrable functions form a vector space and their integral is linear ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F3] Increasing nonnegative measurable functions satisfy monotone convergence ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct finite-maximum argument.

1.1 For $N\geq1$, set $$F_N:=\max(0,S_1f,\ldots,S_Nf),\qquad E_N:=\{F_N>0\}.$$ Every $S_jf$ is integrable, so $F_N$ is measurable and integrable because a finite maximum of real functions is obtained from addition and absolute value.  Also $F_N\geq0$ and $F_N=0$ on $X\setminus E_N$. [F1, F2]

2.1 Since $F_N\geq S_jf$ for $0\leq j\leq N-1$, composition and addition give $F_N\circ T+f\geq S_{j+1}f$.  Hence $$F_N\circ T+f\geq\max_{1\leq j\leq N}S_jf=F_N\quad\hbox{on }E_N,$$ where strict positivity is what permits insertion of the zeroth sum $S_0f=0$. [step 1.1]

3.1 Integrating the preceding inequality over $E_N$, using $F_N=0$ off $E_N$, nonnegativity of $F_N\circ T$, and invariance of its integral, yields $$\int_{E_N}f\,d\mu\geq\int_XF_N\,d\mu-\int_{E_N}F_N\circ T\,d\mu \geq\int_XF_N\,d\mu-\int_XF_N\circ T\,d\mu=0.$$ All displayed integrals are finite because $F_N$ is integrable. [F1, F2, step 1.1, step 2.1]

4.1 The sets $E_N$ increase and their union is $E$.  Applying monotone convergence separately to $f^+\mathbf1_{E_N}$ and $f^-\mathbf1_{E_N}$ gives $$\int_{E_N}f\,d\mu\longrightarrow\int_Ef\,d\mu.$$ Passing to the limit in the nonnegative inequalities of step 3.1 proves the claim. [F2, F3, step 3.1] ∎
