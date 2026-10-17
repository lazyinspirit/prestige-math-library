---
id: lem-uniform-interval-poincare-inequality
kind: lemma
title: Sharp Poincare bound for the uniform law on an interval
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-absolutely-continuous-function, thm-integration-by-parts-for-absolutely-continuous-functions, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-fourier-basis-and-parseval-on-the-n-torus, def-moments-variance-and-covariance, def-countable-choice, def-dependent-choice]
proof_strategy: direct
axiom_use: Countable Choice and Dependent Choice are used through integration by parts, and Countable Choice is also used for Fourier Parseval. No full Axiom of Choice is assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matieyendou Lamboni, Bertrand Iooss, Anne-Laure Popelin, and Fabrice Gamboa, Derivative-based global sensitivity measures: general links with Sobol' indices and numerical tests, §3"
      url: https://arxiv.org/pdf/1202.0943
    - title: "I.M. Sobol' and S. Kucherenko, Derivative based global sensitivity measures and their link with global sensitivity indices, §4, Theorem 2"
      url: https://www.andreasaltelli.eu/file/repository/DGSA_MATCOM_2009.pdf
---

## Statement

Assume Countable Choice and Dependent Choice. Let $I=[a,b]$ with $L=b-a>0$,
let $g:I\to\mathbb R$ be absolutely continuous, and suppose $g'\in L^2(I)$.
Let $U$ have the uniform law $\mathbb P(U\in A)=\lambda(A\cap I)/L$. Then
$$\operatorname{Var}(g(U))\le \frac{L^2}{\pi^2}\,\mathbb E|g'(U)|^2.$$

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, $L>0$, an absolutely continuous $g$ with square-integrable derivative, and the probability law of $U$ specified in the Statement.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: for a nonempty set $X$, an entire relation $R$ on $X$, and $a\in X$, there is $x:\mathbb N\to X$ with $x_0=a$ and $x_n R x_{n+1}$ for every $n$.

[F1] [[def-absolutely-continuous-function]]: absolute continuity on a compact interval controls sums of endpoint increments on finite disjoint interval families.

[F2] [[thm-integration-by-parts-for-absolutely-continuous-functions]]: under Countable and Dependent Choice, absolutely continuous functions satisfy integration by parts.

[F3] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]: the circle is integrated over a period interval with normalized Lebesgue measure.

[F4] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, Fourier characters form a complete orthonormal basis on the one-dimensional torus and Parseval holds in $L^2$.

[F5] [[def-moments-variance-and-covariance]]: variance is the centered second moment.

## Proof

**Given:** The hypotheses, axioms [A1]–[A2], and facts [F1]–[F5].

1.1 Let $m=\mathbb E[g(U)]$ and $h(x)=g(a+Lx)-m$ for $0\le x\le1$. Define $H(t)=h(2t)$ for $0\le t\le1/2$ and $H(t)=h(2-2t)$ for $1/2\le t\le1$, then extend $H$ periodically to $\mathbb T$. The two absolutely continuous pieces match at $t=1/2$, and $H(0)=H(1)$. A finite paste of absolutely continuous pieces with matching endpoint values is absolutely continuous: split every interval crossing the junction into its at most two pieces and apply [F1] on each piece with half the error tolerance. Thus $H$ is absolutely continuous on the period interval. Its mean is zero, $\|H\|_{L^2(\mathbb T)}^2=\operatorname{Var}(g(U))$, and affine changes of variables give $\|H'\|_{L^2(\mathbb T)}^2=4L^2\mathbb E|g'(U)|^2$. [F1, F3, F5, given, algebra]

2.1 For each integer $n$, apply integration by parts [F2] to $H(t)e^{-2\pi int}$ on $[0,1]$, taking real and imaginary parts. The boundary term vanishes since $H(0)=H(1)$ and $e^{-2\pi in}=1$, giving $\widehat{H'}(n)=2\pi in\widehat H(n)$. Parseval [F4] and the zero mean in step 1.1 yield $$\|H'\|_2^2=\sum_{n\ne0}4\pi^2n^2|\widehat H(n)|^2\ge4\pi^2\sum_{n\ne0}|\widehat H(n)|^2=4\pi^2\|H\|_2^2.$$ Substituting the two norm identities from step 1.1 and dividing by $4\pi^2$ proves the claimed bound. Equality holds for $g(x)=\cos(\pi(x-a)/L)$: its mean is zero, its variance is $1/2$, and its derivative second moment is $\pi^2/(2L^2)$. Hence the constant $L^2/\pi^2$ is sharp. [A1, A2, F2, F3, F4, step 1.1, algebra] ∎
