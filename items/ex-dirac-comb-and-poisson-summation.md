---
id: ex-dirac-comb-and-poisson-summation
kind: example
title: Dirac comb and poisson summation
status: draft
origin: pipeline
deps: [thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions, def-dirac-comb, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-countable-choice]
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
      locator: "Theorem 11.32 and equations (11.52)–(11.54), pp. 133–134; unit-lattice form under 2pi normalization"
proof_strategy: direct
---

## Example

Assume Countable Choice.  Fourier invariance of the unit-lattice comb is
equivalent, on Schwartz tests, to

$$\sum_{k\in\mathbb Z^n}\varphi(k) =\sum_{k\in\mathbb Z^n}\widehat\varphi(k).$$

For $g_t(x)=e^{-\pi t|x|^2}$, $t>0$, this gives the theta transformation

$$\sum_{k\in\mathbb Z^n}e^{-\pi t|k|^2} =t^{-n/2}\sum_{k\in\mathbb Z^n}e^{-\pi|k|^2/t}.$$

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], $n\geq1$, and $t>0$.

[F1] The unit-lattice comb is Fourier invariant
([[thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions]]).

[F2] The $2\pi$-normalized Gaussian formula is
$\widehat g_t(\xi)=t^{-n/2}e^{-\pi|\xi|^2/t}$
([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] The defining lattice sum for the comb converges absolutely on every
Schwartz test ([[def-dirac-comb]]), and the Fourier transform sends Schwartz
tests to Schwartz tests
([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

## Verification

**Proof technique:** evaluate one distributional identity on two classes of tests.

1.1 Evaluate comb invariance on an arbitrary $\varphi\in\mathcal S$. [F1, F3]

$$\sum_k\widehat\varphi(k) =\langle\operatorname{III},\widehat\varphi\rangle =\langle\mathcal F\operatorname{III},\varphi\rangle =\langle\operatorname{III},\varphi\rangle =\sum_k\varphi(k).$$

This is Poisson summation at the origin, with no rearrangement of a
conditionally convergent series. [F1, F3]

1.2 Conversely, suppose the displayed lattice-sum identity holds for every $\varphi\in\mathcal S$. [F3, def. equality in tempered distributions]

Then [F3] and the definition of the distributional Fourier transform give

$$\langle\mathcal F\operatorname{III},\varphi\rangle=\langle\operatorname{III},\widehat\varphi\rangle=\langle\operatorname{III},\varphi\rangle.$$

Thus $\mathcal F\operatorname{III}=\operatorname{III}$ in $\mathcal S'$, which
proves the asserted equivalence. [F3, def. equality in tempered distributions]

2.1 Apply step 1.1 to $g_t$ and substitute [F2].  The left and right lattice sums become exactly the two sides of the theta transformation.  At $t=1$ the Gaussian is itself Fourier invariant; as $t$ varies, the formula exchanges $t$ and $1/t$ with the dimension factor $t^{-n/2}$.  Countable Choice is used only through [F1]–[F3]. [F2, step 1.1] ∎
