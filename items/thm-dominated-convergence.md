---
id: thm-dominated-convergence
kind: theorem
title: "Dominated convergence"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-reverse-fatou-lemma-under-an-integrable-majorant, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, cor-additivity-of-the-nonnegative-lebesgue-integral, cor-integral-over-a-null-set-vanishes, cor-finite-nonnegative-integral-implies-finite-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Theorem 4.24"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.24"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

## Facts & Assumptions

**Given:** Measurable complex-valued functions $f,f_n$ with $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for one nonnegative measurable function $g$ of finite integral.

[L1] Reverse Fatou's lemma holds under an integrable majorant ([[cor-reverse-fatou-lemma-under-an-integrable-majorant]]).

[L2] The integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L3] The integral triangle inequality holds on $L^1(\mu)$ ([[thm-integral-triangle-inequality]]).

[L4] Real and complex integrability are defined in [[def-integrable-real-and-complex-functions-and-their-integrals]].

[L5] The nonnegative integral is additive, and a nonnegative integral over a null set vanishes ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[cor-integral-over-a-null-set-vanishes]]).

[L6] A nonnegative measurable function with finite integral is finite almost everywhere ([[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]).

[L7] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

1.1 Let $N_0$ be a measurable null set outside which $f_n(x)\to f(x)$ and $|f_n(x)|\le g(x)$, and let $N_\infty:=\{g=\infty\}$. By [L6], the set $N_\infty$ is null. Put $N:=N_0\cup N_\infty$, $E:=X\setminus N$, $$\widetilde g:=g\chi_E,\qquad h_n:=|f_n-f|\chi_E.$$ Then $h_n\to0$ pointwise, $0\le h_n\le2\widetilde g$, and $\widetilde g$ is nonnegative, measurable, and finite everywhere. Also $$|f|\le|f|\chi_N+\widetilde g.$$ By [L5] and [L7], $$\int|f|\,d\mu\le\int|f|\chi_N\,d\mu+\int\widetilde g\,d\mu =0+\int\widetilde g\,d\mu\le\int g\,d\mu<+\infty,$$ so $f\in L^1(\mu)$ by [L4]. [L4, L5, L6, L7, given]

2.1 The functions $h_n$ are nonnegative, converge pointwise to $0$, and are dominated by the finite everywhere majorant $2\widetilde g$. Applying [L1] therefore gives $$\limsup_n\int h_n\,d\mu\le\int0\,d\mu=0.$$ Hence $\int h_n\,d\mu\to0$. [step 1.1, L1]

3.1 Because $|f_n-f|\chi_N$ is supported on the null set $N$, [L5] gives $$\int|f_n-f|\,d\mu=\int h_n\,d\mu+\int|f_n-f|\chi_N\,d\mu=\int h_n\,d\mu\longrightarrow0.$$ Therefore, by [L2] and [L3], $$\left|\int f_n\,d\mu-\int f\,d\mu\right| =\left|\int(f_n-f)\,d\mu\right| \le\int|f_n-f|\,d\mu,$$ and the right-hand side tends to $0$. [step 1.1, step 2.1, L2, L3, L5] ∎
