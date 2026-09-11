---
id: "lem-basic-properties-of-characteristic-functions"
kind: "lemma"
title: "Basic properties of characteristic functions"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-dominated-convergence", "thm-integral-triangle-inequality", "thm-linearity-of-the-lebesgue-integral-on-l-one", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-addition-and-real-extension", "cor-mean-value-theorem", "thm-sine-and-cosine-derivatives"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every characteristic function $\varphi$ on $\mathbb R$ satisfies $\varphi(0)=1$, $|\varphi(t)|\le1$, $\varphi(-t)=\overline{\varphi(t)}$, and is uniformly continuous on $\mathbb R$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Characteristic functions integrate the unit-modulus exponential. [[def-characteristic-function-of-a-real-random-variable]].

[F2] The integral triangle inequality applies to integrable complex functions. [[thm-integral-triangle-inequality]].

[F3] Complex integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] Euler form gives conjugation and unit modulus. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F5] Exponential addition factors frequency increments. [[thm-complex-exponential-addition-and-real-extension]].

[F6] Dominated pointwise convergence permits passage through the integral. [[thm-dominated-convergence]].

[F7] The mean value theorem bounds increments by a bound for the derivative times the interval length. [[cor-mean-value-theorem]].

[F8] The derivatives of sine and cosine are cosine and minus sine. [[thm-sine-and-cosine-derivatives]].

## Proof

**Proof technique:** direct.

1.1 Write $\varphi(t)=\int e^{itx}\,\mu(dx)$ with $\mu(\mathbb R)=1$. At zero the integrand is one, so $\varphi(0)=1$. The triangle inequality gives $|\varphi(t)|\le\int |e^{itx}|\,d\mu=1$. [F1, F2, F4]

1.2 Writing the integral componentwise, $\varphi(-t)=\int\cos(tx)\,d\mu-i\int\sin(tx)\,d\mu=\overline{\varphi(t)}$. Linearity and exponential addition further give $$|\varphi(t+h)-\varphi(t)|\le\int|e^{itx}(e^{ihx}-1)|\,d\mu=\int|e^{ihx}-1|\,d\mu.$$ [F1, F2, F3, F4, F5]

2.1 For real $u$, apply the mean value theorem separately to sine and cosine between $0$ and $u$. Their derivatives have absolute value at most one by Euler's formula, so $|\sin u|\le|u|$ and $|\cos u-1|\le|u|$. Thus $|e^{iu}-1|\le\min(2,2|u|)$. For each positive integer $n$, define $g_n(x)=\min(2,2|x|/n)$. This measurable sequence tends pointwise to zero and is dominated by the integrable constant $2$, so DCT gives $\int g_n\,d\mu\to0$. Whenever $|h|\le1/n$, step 1.2 bounds $|\varphi(t+h)-\varphi(t)|$ by $\int g_n\,d\mu$, for every $t$. Given $\varepsilon>0$, take the least positive integer $n$ with this integral less than $\varepsilon$. Then $\delta=1/n$ proves uniform continuity. This uses a prescribed sequence and no choice of a sequence of counterexamples. [step 1.2, F4, F6, F7, F8] ∎
