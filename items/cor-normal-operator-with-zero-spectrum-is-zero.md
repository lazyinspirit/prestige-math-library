---
id: cor-normal-operator-with-zero-spectrum-is-zero
kind: corollary
title: Normal operator with zero spectrum is zero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-normal-operator-norm-equals-spectral-radius, def-axiom-of-choice, def-operator-norm, def-spectrum-and-resolvent-of-a-bounded-operator, def-self-adjoint-positive-unitary-and-normal-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.4, printed pp.245–255"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–13"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. A bounded normal operator whose spectrum is $\{0\}$ is the zero operator.

## Facts & Assumptions

[A1] For a bounded normal operator $T$ on a nonzero complex Hilbert space, $\|T\|=r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}$ ([[cor-normal-operator-norm-equals-spectral-radius]]).

[A2] The operator norm is the least bound of $T$, so $\|T\|=0$ forces $Tx=0$ for every $x$ ([[def-operator-norm]]).

[A3] The spectrum is a subset of $\mathbb C$; a normal operator is one with $T^*T=TT^*$, and the zero operator is normal ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A4] AC is the hypothesis of the norm-and-spectral-radius supplier ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal $T\in\mathcal B(H)$ with $\sigma(T)=\{0\}$.

1.1 The spectral radius is $r(T)=\max\{|\lambda|:\lambda\in\sigma(T)\}=|0|=0$. [A3]

2.1 Hence $\|T\|=r(T)=0$ by the spectral-radius identity for normal operators. [step 1.1, A1, A4]

3.1 Since $\|T\|=0$ is a bound for $T$, $\|Tx\|\le0\|x\|=0$ for every $x$, so $Tx=0$ for every $x$ and $T=0$. [step 2.1, A2] ∎
