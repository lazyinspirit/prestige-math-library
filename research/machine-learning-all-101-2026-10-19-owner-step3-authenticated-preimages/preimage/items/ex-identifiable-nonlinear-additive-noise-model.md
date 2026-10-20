---
id: ex-identifiable-nonlinear-additive-noise-model
kind: example
title: "An identifiable nonlinear ANM with a cubic cause-to-effect function"
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-restricted-additive-noise-model
  - thm-bivariate-additive-noise-identifiability
  - lem-anm-joint-density
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "Assume AC for the library's standard-normal law and normalization interfaces. AC implies the Countable Choice interface used by those suppliers. The Condition 19 calculation and identifiability inference use no additional choice."
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Condition 19 and Theorem 20"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4, Theorem 4.5"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slides 22–23"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
---

## Example

Assume AC. Let $X,N$ be independent standard normal random variables and set
$Y=X^3+N$. The structural function is nonconstant and $C^3$, and both noise
densities are strictly positive and $C^3$. For $f(x)=x^3$ and standard normal
input and noise, the triple satisfies Condition 19: at $(x,y)=(1,0)$ its left
side is $0$ and its right side is $28$.
The bivariate direction-identifiability theorem therefore excludes every
reverse additive-noise representation with an independent residual and a
$C^3$ structural function.

## Example references

[[def-additive-noise-model|The bivariate additive-noise equation and causal minimality]]

[[def-restricted-additive-noise-model|The Condition 19 equation and its nonzero domain]]

[[thm-bivariate-additive-noise-identifiability|The bivariate identifiability conclusion under Condition 19]]

[[lem-anm-joint-density|The positive forward joint density]]

[Peters et al., JMLR (2014), Condition 19 and Theorem 20](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4, Theorem 4.5](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slides 22–23](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)

## Facts & Assumptions

**Given:** Assume AC and take independent $X,N\sim N(0,1)$ with standard normal density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$.

[A1] AC is the Axiom of Choice and implies countable choice (AC$_\omega$), the additional axiom interface used by the standard-normal suppliers. [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The standard normal law has density $\phi$, and this density is positive and normalized. [[def-standard-normal-and-normal-laws]], [[lem-normal-density-has-total-mass-one]]

[F2] For a smooth bivariate ANM, Condition 19 fails when its displayed equation holds at every point of the nonzero domain. [[def-restricted-additive-noise-model]]

[F3] If Condition 19 holds, no reverse ANM in the stated smooth class represents the same observational law. [[thm-bivariate-additive-noise-identifiability]]

[F4] The bivariate forward joint density is the product of the input density and shifted noise density. [[lem-anm-joint-density]]

## Verification
**Given:** The independent standard normal variables $X,N$ and $Y=X^3+N$.

1.1 Under AC [A1], the equation is a bivariate additive-noise model with $f(x)=x^3$, independent noise, strictly positive $C^3$ input and noise densities, and nonconstant $C^3$ function. By [F1] and [F4], its joint density is $p(x,y)=\phi(x)\phi(y-x^3)$. [given, A1, F1, F4, construct]

1.2 Put $z=y-f(x)$. The standard normal log densities give $\xi''(x)=-1$, $\xi'''(x)=0$, $\nu'(z)=-z$, $\nu''(z)=-1$, and $\nu'''(z)=0$. At $(x,y)=(1,0)$, $z=-1$, $f'=3$, $f''=6$, and $f'''=6$, so $\nu''(z)f'=-3\ne0$. [given, F1, algebra]

2.1 Substitution into Condition 19's right side gives $(-1)\left(\frac{6}{3}\right)-2(-1)(6)(3)+(1)(6)+0-(1)\frac{6^2}{3}= -2+36+6-12=28,$ whereas $\xi'''(1)=0$. Hence Condition 19 holds. The theorem [F3] now excludes a reverse ANM in its stated class, proving the Example's identifiability assertion. [F2, F3, step 1.2, algebra]

3.1 The input and noise densities, and the cubic function, satisfy the hypotheses in the Statement; the nonzero-domain witness in step 1.2 satisfies the Condition 19 inequality in step 2.1. [step 1.1, step 1.2, step 2.1] ∎
## References

[[thm-bivariate-additive-noise-identifiability|No reverse representation under Condition 19]]

