---
id: thm-bivariate-additive-noise-identifiability
kind: theorem
title: "Bivariate additive-noise direction identifiability under Condition 19"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - lem-anm-joint-density
  - def-restricted-additive-noise-model
  - lem-probability-measure-has-no-nonzero-period
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Theorem 20 and Appendix A.5"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4, Theorem 4.5"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, ENS Lyon course notes (2023), slides 22–23"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
---

## Statement

Let $X,N$ be independent real random variables, let $Y=f(X)+N$, and suppose
$f\in C^3(\mathbb R)$ is nonconstant while $X$ and $N$ have strictly positive
$C^3$ Lebesgue densities. If the triple of $f$ and these two densities
satisfies Condition 19, then there is no reverse additive-noise representation
$X=g(Y)+M$ with $M$ independent of $Y$ and $g\in C^3(\mathbb R)$. No density
regularity for $M$ is assumed; the proof derives a strictly positive $C^3$
density version from the forward joint density and reverse independence. Hence
the direction $X\to Y$ is identified from the observational law among these
smooth bivariate additive-noise models.

## Statement references

[[def-additive-noise-model|Bivariate additive-noise equations and causal minimality]]

[[def-restricted-additive-noise-model|Condition 19 and its nonzero domain]]

[[lem-anm-joint-density|Positive bivariate joint density]]

## Facts & Assumptions

**Given:** $Y=f(X)+N$, independent $X,N$, strictly positive $C^3$ densities, nonconstant $f\in C^3$, and Condition 19.

[F1] A bivariate additive-noise model has $Y=f(X)+N$ with $N$ independent of $X$; causal minimality here is $f$ nonconstant. [[def-additive-noise-model]]

[F2] The forward joint density is $p(x,y)=p_X(x)p_N(y-f(x))$, and is strictly positive. [[lem-anm-joint-density]]

[F3] Condition 19 is failure of the displayed third-order differential equation at some $(x,y)$ where $\nu''(y-f(x))f'(x)\ne0$. [[def-restricted-additive-noise-model]]

[F4] Nonnegative product-measurable functions can be integrated by iterated sections, and the marginal density is finite almost everywhere when its integral is finite. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] Translation preserves Lebesgue measure and measurability, so sectionwise translation sends a density $h(x)$ to the translated density $h(x+a)$. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F6] A probability measure invariant under a nonzero translation cannot exist. [[lem-probability-measure-has-no-nonzero-period]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 Put $\xi=\log p_X$, $\nu=\log p_N$, and $\pi(x,y)=\log p(x,y)$. By [F2], $\pi(x,y)=\xi(x)+\nu(y-f(x))$ is a $C^3$ function. The chain rule gives $\pi_{xy}=-\nu''(y-f(x))f'(x),\qquad \pi_{xx}=\nu''(y-f(x))(f'(x))^2-\nu'(y-f(x))f''(x)+\xi''(x).$ Thus both derivatives are defined, and $\pi_{xy}\ne0$ exactly on the Condition 19 domain. [given, F2, construct]

2.1 Suppose a reverse representation as in the Statement exists. By [F4] and [F2], $p_Y(y)=\int_{\mathbb R}p(x,y)\,dx$ is positive and finite for almost every $y$. The sectionwise translation $m=x-g(y)$ gives the joint density $p_{M,Y}(m,y)=p(m+g(y),y)$ by [F5]; independence makes it equal to $p_M(m)p_Y(y)$ almost everywhere. Choose $y_0$ for which $0<p_Y(y_0)<\infty$ and this factorization holds for almost every $m$. Then $p_M(m)=\frac{p(m+g(y_0),y_0)}{p_Y(y_0)}\quad\text{for almost every }m.$ The right side is a strictly positive $C^3$ function of $m$, so choose it as the density version of $M$ and put $\widetilde\nu=\log p_M$. Consequently the forward and reverse density formulas agree almost everywhere: $p(x,y)=p_Y(y)p_M(x-g(y)).$ For almost every $y$ with $0<p_Y(y)<\infty$, the two sides as functions of $x$ are continuous and agree almost everywhere, hence agree for every $x$. Taking logarithmic $x$-derivatives gives $\pi_x(x,y)=\widetilde\nu'(x-g(y))$ for almost every $(x,y)$. Both sides are continuous on $\mathbb R^2$, so this identity holds everywhere. Differentiating in $x$ and $y$ gives $\pi_{xx}=\widetilde\nu''(x-g(y))$ and $\pi_{xy}=-\widetilde\nu''(x-g(y))g'(y)$. Wherever $\pi_{xy}\ne0$, it follows that $\frac{\pi_{xx}}{\pi_{xy}}=-\frac1{g'(y)},$ which is independent of $x$; hence $\partial_x(\pi_{xx}/\pi_{xy})=0$. [given, F1, F2, F4, F5, step 1.1, construct]

3.1 From the forward expressions in step 1.1, on the same nonzero domain, $\frac{\pi_{xx}}{\pi_{xy}} =-f'(x)+\frac{\nu'(y-f(x))}{\nu''(y-f(x))}\frac{f''(x)}{f'(x)} -\frac{\xi''(x)}{\nu''(y-f(x))f'(x)}.$ Differentiating this expression in $x$, using $\partial_x\nu'=-f'\nu''$ and $\partial_x\nu''=-f'\nu'''$, and setting the derivative to zero gives $\xi'''(x)= \xi''(x)\left(-\frac{\nu'''(y-f(x))f'(x)}{\nu''(y-f(x))}+\frac{f''(x)}{f'(x)}\right) -2\nu''(y-f(x))f''(x)f'(x) +\nu'(y-f(x))f'''(x) +\frac{\nu'(y-f(x))\nu'''(y-f(x))f''(x)f'(x)}{\nu''(y-f(x))} -\frac{\nu'(y-f(x))(f''(x))^2}{f'(x)}.$ The quotient rule is legitimate because both denominator factors are nonzero on this domain. [given, F2, step 1.1, step 2.1, algebra]

4.1 Step 3.1 forces Condition 19's differential equation at every point where $\nu''(y-f(x))f'(x)\ne0$, contrary to [F3]. Therefore no reverse representation in the stated class exists. [F3, step 3.1]

5.1 The law cannot be independent: if $X$ and $Y$ were independent, positivity of $p_X$ and the forward density formula [F2] would make $p_N(y-f(x))$ equal $p_Y(y)$ for almost every $(x,y)$. By Fubini, for almost every pair $x,x'$, the translates $p_N(y-f(x))$ and $p_N(y-f(x'))$ agree for almost every $y$. Their probability laws are translates of the law of $N$; [F6] forces $f(x)=f(x')$ for almost every pair. Continuity of $f$ makes it constant everywhere, contradicting the hypothesis. Thus the empty graph is excluded as well, and the only smooth bivariate ANM direction in the class is $X\to Y$. [given, F1, F2, F6, step 4.1, algebra] ∎
## References

[Peters et al., JMLR (2014), Theorem 20 and Appendix A.5](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4, Theorem 4.5](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slides 22–23](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)
