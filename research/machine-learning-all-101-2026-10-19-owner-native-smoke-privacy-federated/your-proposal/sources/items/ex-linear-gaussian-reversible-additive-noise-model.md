---
id: ex-linear-gaussian-reversible-additive-noise-model
kind: example
title: "A reversible linear-Gaussian additive-noise model"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-restricted-additive-noise-model
  - lem-anm-joint-density
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-linear-change-of-variables-for-lebesgue-measure
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "Assume AC for the library's standard-normal law and normalization interfaces. AC implies the Countable Choice interface used by those suppliers and by the linear change-of-variables theorem. The density factorization itself uses no additional choice."
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Example 24"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slides 22–23"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
---

## Example

Assume AC. Let $X,N$ be independent standard normal random variables and set
$Y=X+N$. The forward model $Y=X+N$ is an additive-noise model, and the same
joint law also has the reverse representation
$$X=\frac12Y+M,\qquad M:=\frac{X-N}{2},$$
where $M$ is independent of $Y$. Indeed, the joint density of $(Y,M)$ is
$$p_{Y,M}(y,m)=\frac1{2\pi}\exp\!\left(-\frac{y^2}{4}-m^2\right)=\left(\frac1{2\sqrt\pi}e^{-y^2/4}\right)\left(\frac1{\sqrt\pi}e^{-m^2}\right).$$
The forward structural function $f(x)=x$ and the two Gaussian log densities
satisfy the differential equation in Condition 19 at every point of its
nonzero domain, so Condition 19 fails. Thus this reversible case lies outside
the bivariate identifiability theorem's hypothesis.

## Example references

[[def-additive-noise-model|The additive-noise equations and their independent noise convention]]

[[def-restricted-additive-noise-model|Condition 19 and its nonzero domain]]

[[thm-bivariate-additive-noise-identifiability|The bivariate direction-identifiability conclusion]]

[Peters et al., JMLR (2014), Example 24](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slides 22–23](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)

## Facts & Assumptions

**Given:** Assume AC and take independent $X,N\sim N(0,1)$ with standard normal density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$.

[A1] AC is the Axiom of Choice and implies countable choice (AC$_\omega$), the additional axiom interface used by the normal-density and linear-change-of-variables suppliers. [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The standard normal law has density $\phi$, and its affine images are the corresponding normal laws. [[def-standard-normal-and-normal-laws]]

[F2] $\phi$ is a positive normalized Lebesgue density. [[lem-normal-density-has-total-mass-one]]

[F3] An invertible linear transformation changes Lebesgue density by the absolute determinant of its inverse matrix. [[thm-linear-change-of-variables-for-lebesgue-measure]]

[F4] A bivariate additive-noise equation has the form $Y=f(X)+N$ with independent $X,N$. [[def-additive-noise-model]]

[F5] Condition 19 is inequality with its displayed differential equation at at least one point where $\nu''(y-f(x))f'(x)\ne0$. [[def-restricted-additive-noise-model]]

## Verification
**Given:** The independent standard normal variables $X,N$ and the definitions in the Example.

1.1 Under AC [A1], [F1]–[F2] and independence give the density $\phi(x)\phi(n)=(2\pi)^{-1}e^{-(x^2+n^2)/2}$ for $(X,N)$. The forward equation $Y=X+N$ is an additive-noise equation by [F4]. [given, A1, F1, F2, F4]

2.1 The linear map $(x,n)\mapsto(y,m)=(x+n,(x-n)/2)$ has determinant $-1$ and inverse $(y,m)\mapsto(x,n)=(y/2+m,y/2-m)$, whose determinant also has absolute value $1$. By [F3], substituting the inverse into the density from step 1.1 gives $p_{Y,M}(y,m)=\frac1{2\pi}\exp\!\left(-\frac{(y/2+m)^2+(y/2-m)^2}{2}\right)=\frac1{2\pi}e^{-y^2/4-m^2}.$ [step 1.1, F3, algebra]

3.1 The last density factors as $p_Y(y)p_M(m)$ with $p_Y(y)=(2\sqrt\pi)^{-1}e^{-y^2/4}$ and $p_M(m)=\pi^{-1/2}e^{-m^2}$. Each factor integrates to one by the affine normal-law description [F1] and normalization [F2], so the joint law is the product of its marginals and $M\perp Y$. Since $M=X-Y/2$, rearranging gives $X=Y/2+M$. [step 2.1, F1, F2, algebra]

4.1 For $f(x)=x$ and standard normal input and noise, $\xi(x)=\nu(x)=-x^2/2-\tfrac12\log(2\pi)$, $f'=1$, $f''=f'''=0$, $\xi'''=\nu'''=0$, and $\nu''=-1$. The Condition 19 domain is all $(x,y)$ because $\nu''(y-f(x))f'(x)=-1\ne0$; both sides of its equation equal zero there. Thus its required inequality never holds, so Condition 19 fails. [given, F5, algebra] ∎
## References

[[lem-anm-joint-density|The joint-density formula for the forward additive-noise model]]

