---
id: def-restricted-additive-noise-model
kind: definition
title: "Condition 19 and restricted additive-noise models"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - lem-anm-joint-density
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Definitions 18/27 and Condition 19"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4 and Theorem 4.5"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slides 22–23"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
verification:
  precheck: n/a
---

## Definition

For a smooth bivariate additive-noise model $Y=f(X)+N$, let $f$ be three
times continuously differentiable, and let $X$ and $N$ have strictly positive
three-times continuously differentiable densities $p_X$ and $p_N$. Put
$\xi(x)=\log p_X(x)$ and $\nu(z)=\log p_N(z)$. The triple $(f,p_X,p_N)$
satisfies **Condition 19** when there are $x,y\in\mathbb R$ with
$\nu''(y-f(x))f'(x)\ne0$ at which
$$\xi'''(x)\ne \xi''(x)\left(-\frac{\nu'''(y-f(x))f'(x)}{\nu''(y-f(x))}+\frac{f''(x)}{f'(x)}\right) -2\nu''(y-f(x))f''(x)f'(x) +\nu'(y-f(x))f'''(x) +\frac{\nu'(y-f(x))\nu'''(y-f(x))f''(x)f'(x)}{\nu''(y-f(x))} -\frac{\nu'(y-f(x))(f''(x))^2}{f'(x)}.$$
Here every derivative of $\nu$ is evaluated at $y-f(x)$ and every derivative
of $f$ at $x$. The nonzero-domain condition makes both denominators in this
formula well defined.

A finite additive-noise model is a **restricted additive-noise model** when
every structural function $f_j$ is $C^3$ and every noise has a strictly
positive $C^3$ Lebesgue density, and when for every vertex $j$, every parent
$i\in\operatorname{pa}(j)$, and every set
$S$ satisfying
$$\operatorname{pa}(j)\setminus\{i\}\subseteq S\subseteq\operatorname{nd}(j)\setminus\{i\},$$
there is a value $s$ with $0<p_S(s)<\infty$ such that the
conditional law of $X_i$ given $X_S=s$, together with the structural slice
$u\mapsto f_j(s_{\operatorname{pa}(j)\setminus\{i\}},u)$ and the noise $N_j$,
is a smooth bivariate additive-noise model satisfying Condition 19. The
conditional density is the ratio
$p_{X_i,X_S}(u,s)/p_S(s)$ for the finite positive-density version supplied
by the joint-density formula. The structural slice and conditional input
density have the smoothness and strict positivity required in the preceding
Condition 19 definition. If the model has no edges, the restricted condition
is vacuous.

## Definition references

[[def-additive-noise-model|Finite continuous additive-noise models and causal minimality]]

[[lem-anm-joint-density|Strictly positive joint density and its finite conditional-density versions]]

[Peters et al., JMLR (2014), Definitions 18/27 and Condition 19](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4 and Theorem 4.5](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slides 22–23](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)
