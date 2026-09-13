---
id: thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions
kind: theorem
title: Dirac comb is fourier invariant
status: draft
origin: pipeline
deps: [def-dirac-comb, def-fourier-transform-of-a-tempered-distribution, thm-poisson-summation-for-schwartz-functions, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Theorem 11.32 and equation (11.54), pp. 133–134; converted to the unit-lattice 2pi normalization"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  Under
$\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}\,dx$, the unit-lattice Dirac
comb satisfies

$$\mathcal F\operatorname{III}_{\mathbb Z^n} =\operatorname{III}_{\mathbb Z^n}$$

in $\mathcal S'(\mathbb R^n)$.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and $n\geq1$.

[F1] The comb pairs with a Schwartz test by its absolutely convergent lattice
sum ([[def-dirac-comb]]).

[F2] Fourier transformation on $\mathcal S'$ is defined by transposition
([[def-fourier-transform-of-a-tempered-distribution]]).

[F3] Poisson summation at $x=0$ says
$\sum_{k\in\mathbb Z^n}\widehat\varphi(k)=
\sum_{k\in\mathbb Z^n}\varphi(k)$, with both sums absolutely convergent
([[thm-poisson-summation-for-schwartz-functions]]).

## Proof

**Proof technique:** test against Poisson summation.

1.1 Let $\varphi\in\mathcal S(\mathbb R^n)$.  Apply the defining transpose and the comb pairing. [F1, F2]

$$\langle\mathcal F\operatorname{III}_{\mathbb Z^n},\varphi\rangle =\langle\operatorname{III}_{\mathbb Z^n},\widehat\varphi\rangle =\sum_{k\in\mathbb Z^n}\widehat\varphi(k).$$

All terms and sums are defined by [F1]–[F2]. [F1, F2]

2.1 Poisson summation changes the last sum to $\sum_k\varphi(k)=\langle\operatorname{III}_{\mathbb Z^n},\varphi\rangle$. Equality on every Schwartz test proves the stated identity.  Countable Choice is used only through the published Fourier and Poisson suppliers. [F1, F3, step 1.1] ∎
