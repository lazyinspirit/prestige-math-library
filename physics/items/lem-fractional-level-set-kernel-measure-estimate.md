---
id: lem-fractional-level-set-kernel-measure-estimate
kind: lemma
title: "The level-set kernel measure estimate for the Slobodeckij kernel"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-linear-change-of-variables-for-lebesgue-measure, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, prop-measure-of-a-set-difference, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Lemma 6.1 and its proof, printed pp. 39-40"
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, $0<\theta<1$,
$1\le p<\infty$ with $p\theta<d$, let $x\in\mathbb R^d$ and let
$E\subseteq\mathbb R^d$ be Lebesgue measurable with $0<|E|<\infty$. Then
$$\int_{\mathbb R^d\setminus E}|x-y|^{-d-p\theta}\,dy\ \ge\ c(d,p,\theta)\, |E|^{-p\theta/d}.$$
One admissible constant is $c=\frac{d}{p\theta}\,\omega^{1+p\theta/d}$, where
$\omega:=|B(0,1)|$ denotes the Lebesgue measure of the unit ball.

## Facts & Assumptions

**Given:** the Axiom of Countable Choice, $d\ge1$, $0<\theta<1$, $1\le p<\infty$ with $p\theta<d$, a point $x\in\mathbb R^d$, and a Lebesgue measurable set $E\subseteq\mathbb R^d$ with $0<|E|<\infty$. Write $\omega:=|B(0,1)|$ for the unit-ball measure and $\rho:=(|E|/\omega)^{1/d}>0$.

[F1] *The unit ball has positive finite measure.* $0<\omega<\infty$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]])

[F2] *$C^1$ change of variables for nonnegative Borel functions.* If $U,V\subseteq\mathbb R^m$ are open and $T:U\to V$ is a $C^1$ diffeomorphism, then every nonnegative Borel $h:V\to[0,\infty]$ satisfies $\int_Vh(y)\,dy=\int_Uh(T(w))|\det DT(w)|\,dw$, with $0\cdot\infty=0$ allowed. ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]])

[F3] *Polar coordinates.* For every nonnegative Borel $f:\mathbb R^d\to[0,\infty]$, $\int_{\mathbb R^d}f(z)\,dz=\int_0^\infty\int_{S^{d-1}}f(r\zeta)r^{d-1} \,d\sigma(\zeta)\,dr$, where $\sigma$ is the finite Borel surface measure on the unit sphere. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]])

[F4] *Measures of set differences.* If $A\subseteq B$ are measurable with $|A|<\infty$, then $|B|=|A|+|B\setminus A|$. ([[prop-measure-of-a-set-difference]])

[F5] *Additivity and monotonicity of the nonnegative integral.* For measurable $g,h:X\to[0,\infty]$: $\int(g+h)=\int g+\int h$, and $g\le h$ implies $\int g\le\int h$; moreover $\int cg=c\int g$ for real $c>0$; for $c=0$ the zero function has integral $0$. ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

## Proof

**Proof technique:** Choose the radius $\rho$ carrying the mass of $E$, split the complement of $E$ into its part inside and outside $B(x,\rho)$, use the lower bound $|x-y|\ge\rho$ on the outer part and on $E\setminus B(x,\rho)$ to reach all of $B(x,\rho)^c$, and evaluate the resulting radial integral in polar coordinates.

1.1 The map $T(w)=x+\rho w$ is a $C^1$ diffeomorphism of $\mathbb R^d$ with $\det DT=\rho^d$, so [F2] applied to the indicator of $B(x,\rho)$ gives $|B(x,\rho)|=\int\mathbf 1_{B(x,\rho)}(y)\,dy=\rho^d\int\mathbf 1_{B(0,1)}(w)\,dw=\rho^d\omega=|E|$. Since $E\cap B(x,\rho)\subseteq B(x,\rho)$ and $E\cap B(x,\rho)\subseteq E$ are measurable with $|E\cap B(x,\rho)|\le|E|<\infty$, [F4] gives $|(\mathbb R^d\setminus E)\cap B(x,\rho)|=|B(x,\rho)|-|E\cap B(x,\rho)|=|E|-|E\cap B(x,\rho)|=|E\setminus B(x,\rho)|$. [F1, F2, F4, given]

2.1 Write $C_1:=(\mathbb R^d\setminus E)\cap B(x,\rho)$ and $C_2:=(\mathbb R^d\setminus E)\cap B(x,\rho)^c$; these are disjoint measurable sets with union $\mathbb R^d\setminus E$. On $C_1$ one has $|x-y|^{-d-p\theta}\ge\rho^{-d-p\theta}$, on $C_2$ and on $E\setminus B(x,\rho)$ one has $|x-y|\ge\rho$; hence [F5] gives $\int_{\mathbb R^d\setminus E}|x-y|^{-d-p\theta}dy=\int_{C_1}+\int_{C_2}\ge\rho^{-d-p\theta}|C_1|+\int_{C_2}|x-y|^{-d-p\theta}dy=\rho^{-d-p\theta}|E\setminus B(x,\rho)|+\int_{C_2}|x-y|^{-d-p\theta}dy\ge\int_{E\setminus B(x,\rho)}|x-y|^{-d-p\theta}dy+\int_{C_2}|x-y|^{-d-p\theta}dy=\int_{B(x,\rho)^c}|x-y|^{-d-p\theta}dy$, where the last equality uses that $E\setminus B(x,\rho)$ and $C_2$ partition $B(x,\rho)^c$. [F5, step 1.1]

3.1 Substituting $y=x+w$ by [F2] and evaluating the radial integrand by [F3], $\int_{B(x,\rho)^c}|x-y|^{-d-p\theta}dy=\int_{|w|>\rho}|w|^{-d-p\theta}dw=\sigma(S^{d-1})\int_\rho^\infty r^{-1-p\theta}dr=\frac{\sigma(S^{d-1})}{p\theta}\rho^{-p\theta}$. Applying [F3] to the indicator of $B(0,1)$ gives $\omega=\int_{S^{d-1}}\!\!\int_0^1 r^{d-1}dr\,d\sigma=\sigma(S^{d-1})/d$, so $\sigma(S^{d-1})=d\omega$ and the lower bound is $\frac{d\omega}{p\theta}\bigl(|E|/\omega\bigr)^{-p\theta/d}=c\,|E|^{-p\theta/d}$ with $c=\frac{d}{p\theta}\omega^{1+p\theta/d}>0$ by [F1]; combined with step 2.1 this is the assertion. [F1, F2, F3, step 2.1] ∎ 