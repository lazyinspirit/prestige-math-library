---
id: ex-adding-a-harmonic-function-preserves-a-fundamental-solution
kind: example
title: Adding an entire harmonic function preserves a Laplace fundamental solution
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §§2.5–2.7, printed pp. 32–42
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-fundamental-solution-of-a-constant-coefficient-operator", "def-distributional-derivative", "def-regular-distribution-from-a-locally-integrable-function", "def-countable-choice", "def-distribution", "def-laplacian-of-a-c2-function", "thm-locally-integrable-functions-embed-in-distributions", "thm-distributional-differentiation-is-continuous-and-commutes", "lem-euclidean-balls-have-positive-finite-lebesgue-measure", "lem-test-function-cutoffs-and-euclidean-localization"]
---

## Statement

If $-\Delta E=\delta_0$ in distributions on $\mathbb R^n$ and $h$ is an entire classical harmonic function, then $-\Delta(E+h)=\delta_0$. Thus the fundamental solution is not unique without an extra growth or normalization condition.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $n\ge1$, let $E\in\mathcal D'(\mathbb R^n)$ satisfy $-\Delta E=\delta_0$, and let $h\in C^2(\mathbb R^n;\mathbb C)$ satisfy $\Delta h=0$ componentwise. In $E+h$, the function $h$ denotes its regular distribution.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] For locally integrable $f$, the regular functional is $\langle u_f,\varphi\rangle=\int f\varphi$. ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F2] Assuming Countable Choice, each locally integrable function defines a distribution via the regular functional. ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F3] Under Countable Choice, if $f\in C^k(\Omega;\mathbb C)$ then $\partial^\alpha u_f=u_{\partial^\alpha f}$ for $|\alpha|\le k$. ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F4] The Laplacian is $\Delta f=\sum_i\partial_i^2 f$, and a $C^2$ function with $\Delta f=0$ is harmonic. ([[def-laplacian-of-a-c2-function]]).

[F5] Distributional derivatives are signed transposes of test derivatives. ([[def-distributional-derivative]]).

[F6] Distributions are a complex vector space of continuous complex-linear functionals, with a bilinear pairing and no conjugation. ([[def-distribution]]).

[F7] A distribution is a fundamental solution for $L$ when $LE=\delta_0$. ([[def-fundamental-solution-of-a-constant-coefficient-operator]]).

[F8] For a compact $K\subseteq\Omega$ with $\Omega$ open, there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ equal to one near $K$. ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F9] Every Euclidean ball of positive radius has positive finite Lebesgue measure under Countable Choice. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

## Proof

**Proof technique:** direct.

1.1 The continuous function $h$ is bounded on each compact set; under [F9] this makes it locally integrable. Define its regular functional $u_h$ by [F1]. By [F2] and the stated assumption [A1], $u_h\in\mathcal D'(\mathbb R^n)$. [given, A1, F1, F2, F9]

2.1 Apply the classical-to-distributional derivative identity [F3] to every second partial derivative of $h$, separately to its real and imaginary parts if needed. Summing by [F4] gives $\Delta u_h=u_{\Delta h}=0$, since $\Delta h=0$. [step 1.1, A1, F3, F4]

3.1 By linearity in [F5] and [F6], $-\Delta(E+u_h)=(-\Delta E)+(-\Delta u_h)$. The premise in the Statement and step 2.1 make this $\delta_0+0=\delta_0$, so [F7] says $E+u_h$ is again a fundamental solution. [given, step 2.1, F5, F6, F7, algebra]

4.1 To witness actual nonuniqueness, take $h\equiv1$. It is entire and harmonic by [F4]. Apply [F8] to the closed unit ball to obtain $\chi\in C_c^\infty(\mathbb R^n)$, $0\le\chi\le1$, with $\chi=1$ on a neighborhood of that ball. By [F9], $\int\chi\ge\lambda_n(B_1)>0$; compact support and $\chi\le1$ make this integral finite. Thus $\langle u_1,\chi\rangle=\int\chi>0$ by [F1], so $u_1\ne0$ and $E+u_1\ne E$. Step 3.1 shows this distinct distribution still has point source $\delta_0$. [step 3.1, A1, F1, F4, F8, F9]

5.1 The zero correction $h=0$ leaves $E$ unchanged, while the constant correction in step 4.1 proves nonuniqueness. The argument includes dimension one because [F3] applies for every $n\ge1$; dimension zero is outside the Laplacian definition [F4]. Countable Choice enters only through the regular-distribution embedding, the smooth-derivative compatibility, and ball measure [F2, F3, F9]; no full Axiom of Choice is used. [step 1.1, step 2.1, step 3.1, step 4.1, A1, F2, F3, F9, cases] ∎

## Source notes

Hunter §§2.5–2.7, printed pp. 32–42. The addition identity follows from the linearity of distributional differentiation and the classical harmonic equation. The constant correction is an explicit nonzero witness, established by testing its regular distribution against a compactly supported cutoff of positive integral.
