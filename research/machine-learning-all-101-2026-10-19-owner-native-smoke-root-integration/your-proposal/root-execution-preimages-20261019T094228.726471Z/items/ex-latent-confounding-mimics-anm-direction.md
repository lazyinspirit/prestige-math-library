---
id: ex-latent-confounding-mimics-anm-direction
kind: example
title: "Latent confounding can mimic an observed ANM direction"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-recursive-structural-causal-model-and-dag
  - lem-anm-joint-density
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-gaussian-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-linear-change-of-variables-for-lebesgue-measure
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "Assume AC to use the library's standard-normal laws and density normalization; AC supplies the Countable Choice interface required by those suppliers. No choice is used in the density comparisons or intervention calculations."
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, JMLR 15 (2014), latent-variable discussion"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slide 23"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §7.2.3"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
---

## Example

Assume the Axiom of Choice. Let $U,\epsilon_X,\epsilon_Y$ be mutually
independent standard normal random variables. In Model A, set
$U=N_U$, $X=U+\epsilon_X$, and $Y=U+\epsilon_Y$, with $U$ latent and $X,Y$
observed. In Model B, let $Z_1,Z_2$ be independent standard normal variables,
set $X=\sqrt2 Z_1$, $E=\sqrt{3/2}Z_2$, and $Y=X/2+E$, with both vertices
observed. In each model the observed vector $(X,Y)$ has density
$$p(x,y)=\frac1{2\pi\sqrt3}\exp\!\left(-\frac{x^2-xy+y^2}{3}\right).$$
Under $do(X=1)$, Model A gives $Y=U+\epsilon_Y$ with density
$\frac1{2\sqrt\pi}e^{-y^2/4}$, while Model B gives $Y=1/2+E$ with density
$\frac1{\sqrt{3\pi}}e^{-(y-1/2)^2/3}$. The two intervention densities
differ at $y=1/2$, so the same observational law is compatible with different
causal effects when a latent common cause is allowed.

## Example references

[[def-recursive-structural-causal-model-and-dag|Latent vertices and intervention semantics]]

[[def-additive-noise-model|Observed additive-noise model in Model B]]

[[lem-anm-joint-density|Joint density of the observed ANM in Model B]]

[Peters et al., JMLR (2014), latent-variable discussion](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slide 23](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §7.2.3](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

## Remarks

In the diagram, circles denote variables and arrows denote direct structural
inputs. The dashed vertex $U$ is latent in Model A, so only $X$ and $Y$ are
observed there. Model B has the observed edge $X\to Y$. The diagrams show the
two model graphs; the density and intervention calculations below prove the
claimed observational and interventional comparisons.

~~~tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,circle,dashed] (u) at (0,0) {$U$};
  \node[draw,circle] (xa) at (2,1) {$X$};
  \node[draw,circle] (ya) at (2,-1) {$Y$};
  \draw[->] (u) -- (xa);
  \draw[->] (u) -- (ya);
  \node at (1,-2) {Model A};
  \node[draw,circle] (xb) at (4,0) {$X$};
  \node[draw,circle] (yb) at (6,0) {$Y$};
  \draw[->] (xb) -- (yb);
  \node at (5,-1) {Model B};
\end{tikzpicture}
~~~

## Facts & Assumptions

**Given:** Assume AC. Use the standard normal density
$\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ and the independent noises specified in the Example.

[A1] Assume AC for the standard-normal law; AC implies countable choice (AC$_\omega$), which is the additional interface used by normalization and Lebesgue-change suppliers. [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The finite recursive SCM convention defines latent vertices, observed marginals, and $do(X_I=a)$ by replacing only the intervened equations. [[def-recursive-structural-causal-model-and-dag]]

[F2] A standard normal has density $\phi$; its affine images have the corresponding scaled density. [[def-standard-normal-and-normal-laws]], [[lem-normal-density-has-total-mass-one]], [[thm-linear-change-of-variables-for-lebesgue-measure]]

[F3] The Gaussian integral is $\int_{\mathbb R}e^{-t^2}\,dt=\sqrt\pi$. [[thm-gaussian-integral]]

[F4] For a finite ANM on fully observed vertices, the joint density is the product of its shifted noise densities. [[def-additive-noise-model]], [[lem-anm-joint-density]]

[F5] Nonnegative product integrals may be marginalized in either coordinate order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Verification
**Given:** The two SCMs and standard normal densities in the Example.

1.1 Under AC [A1], treat the full Model A vector $(U,X,Y)$ as an ANM with noises $(N_U,\epsilon_X,\epsilon_Y)$. By [F4]–[F5], its density is $\phi(u)\phi(x-u)\phi(y-u)$; marginalizing the latent $U$ gives $p_A(x,y)=\int_{\mathbb R}\phi(u)\phi(x-u)\phi(y-u)\,du.$ Completing the square, $u^2+(x-u)^2+(y-u)^2=3\left(u-\frac{x+y}{3}\right)^2+\frac23(x^2-xy+y^2).$ Thus [F3] and the substitution $t=\sqrt{3/2}\,(u-(x+y)/3)$ give $p_A(x,y)=\frac1{2\pi\sqrt3}\exp\!\left(-\frac{x^2-xy+y^2}{3}\right).$ [given, A1, F3, F4, F5, algebra, construct]

1.2 The scaled standard normal variables in Model B have densities $q_2(x)=\frac1{2\sqrt\pi}e^{-x^2/4}$ and $q_{3/2}(e)=\frac1{\sqrt{3\pi}}e^{-e^2/3}$ by [F2]. The Model B equation is an ANM, so [F4] gives $p_B(x,y)=q_2(x)q_{3/2}(y-x/2)=\frac1{2\pi\sqrt3}\exp\!\left(-\frac{x^2-xy+y^2}{3}\right),$ where the last equality follows by expanding $x^2/4+(y-x/2)^2/3=(x^2-xy+y^2)/3$. Hence $p_A=p_B$ pointwise. [given, A1, F2, F4, algebra]

2.1 Under $do(X=1)$ in Model A, [F1] replaces only the equation for $X$; the unchanged $Y$ equation remains $Y=U+\epsilon_Y$. Its density is the convolution $\int\phi(u)\phi(y-u)\,du=\frac1{2\sqrt\pi}e^{-y^2/4}$, by completing the square and [F3]. In Model B the intervention gives $Y=1/2+E$, whose density is $\frac1{\sqrt{3\pi}}e^{-(y-1/2)^2/3}$ by [F2]. At $y=1/2$ the second density is larger than the first by the factor $\frac2{\sqrt3}e^{1/16}>1$, so the intervention laws differ although the observational densities agree. [given, A1, F1, F2, F3, step 1.1, step 1.2, algebra] ∎
