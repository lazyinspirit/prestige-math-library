---
id: lem-local-gaussian-characteristic-function-is-global
kind: lemma
title: "A characteristic function that is Gaussian near zero is globally Gaussian"
status: draft
dependency_level: 0
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-characteristic-function-of-a-real-random-variable, thm-fatou-lemma, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, lem-moments-give-derivatives-of-the-characteristic-function, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-gaussian-integral, lem-finite-measure-uniqueness-on-a-pi-system, thm-integration-by-parts, thm-substitution, thm-continuous-implies-integrable, cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§3.3, Example 3.3.5; Theorems 3.3.18, 3.3.21 and 3.3.25, pp. 125–130, 134–136, 142; the statement specializes the moment argument, with the higher even-difference and smoothing details proved here"
---

## Statement

Let $Y$ be a real random variable. If there is $r>0$ such that $\mathbb E e^{itY}=e^{-t^2/2}$ for every $|t|<r$, then $Y$ has the standard Gaussian law, with density $g(x)=(2\pi)^{-1/2}e^{-x^2/2}$. No moment or density assumption on $Y$ is required.

## Statement references

[Durrett, §3.3](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf)

## Facts & Assumptions

**Given:** A real random variable $Y$ with characteristic function $\varphi$ equal to $e^{-t^2/2}$ on $(-r,r)$, where $r>0$.

[F1] [[def-characteristic-function-of-a-real-random-variable]] defines $\varphi(t)=\mathbb E e^{itY}$.

[F2] [[thm-fatou-lemma]] bounds the integral of a nonnegative pointwise limit by the lower limit of its integrals.

[F3] [[thm-dominated-convergence]] passes dominated limits through integrals; [[thm-monotone-convergence-for-the-integral]] does the same for increasing nonnegative limits.

[F4] [[lem-moments-give-derivatives-of-the-characteristic-function]] gives $\varphi^{(k)}(0)=i^k\mathbb E Y^k$ whenever the $k$th absolute moment is finite.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] allow iterated integration of absolutely integrable and nonnegative product-measurable functions, respectively.

[F6] [[thm-gaussian-integral]] gives $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$.

[F7] [[lem-finite-measure-uniqueness-on-a-pi-system]] identifies finite measures that agree on a generating pi-system and on the whole space.

[F8] [[thm-integration-by-parts]] applies to differentiable real functions on compact intervals whose derivatives are integrable.

[F9] [[thm-substitution]] gives compact substitution for continuous integrands and a differentiable change of variable with integrable derivative. For the absolutely integrable whole-line expressions below, apply it on finite intervals and pass to the limit using the integrable tails.

[F10] [[thm-continuous-implies-integrable]] gives compact Riemann integrability, with uniform partitions whose upper and lower sums approach one another.

[F11] [[cor-zero-derivative-implies-constant]] makes a continuous real function with zero derivative on an interval constant; apply it to real and imaginary parts for complex functions.

## Proof

1.1 By [F9], substitution $x=\sqrt2 u$ in [F6] gives $\int g(x)\,dx=1$, so $g$ defines a probability law $\gamma$. These integrals can be read as Lebesgue integrals: on each $[-m,m]$, the uniform dyadic lower and upper sums of the continuous integrand converge to the same Riemann integral and bound its Lebesgue integral; increasing truncations then give the whole-line equality by [F3]. For each integer $k\ge0$, $|x|^k g(x)$ is integrable: its tail is bounded by a constant times $e^{-x^2/4}$, since $|x|^k e^{-x^2/4}$ is bounded (differentiate it on $x>0$). If $G$ has law $\gamma$, integration by parts [F8] on $[-m,m]$, followed by [F3], using $g'(x)=-xg(x)$ and vanishing polynomial times Gaussian boundary terms, gives $\mathbb E G^{2n}=(2n-1)\mathbb E G^{2n-2}$ and odd moments zero. Hence $m_{2n}:=\mathbb E G^{2n}=(2n)!/(2^n n!)$. Also $\varphi_G'(t)=\int ix e^{itx}g(x)\,dx=-t\varphi_G(t)$ by the same integration by parts, justified by $\int |x|g(x)\,dx<\infty$. By [F11], differentiation of $e^{t^2/2}\varphi_G(t)$ gives zero and its value at zero is one: $\varphi_G(t)=e^{-t^2/2}$ for every real $t$. All integrations by parts first concern smooth functions on compact intervals, whose derivatives are continuous and therefore integrable by [F10]; the same dyadic comparison identifies their Riemann and Lebesgue integrals. [F3, F4, F6, F8, F9, F10, F11, algebra]

2.1 Fix an integer $n\ge1$ and define $H_{n,t}(x)=(2\sin(tx/2)/t)^{2n}$ for $t\ne0$. It is nonnegative and bounded for fixed $t$. The binomial theorem and $2i\sin(v/2)=e^{iv/2}-e^{-iv/2}$ give $$H_{n,t}(x)=(-1)^n t^{-2n}\sum_{k=0}^{2n}(-1)^k\binom{2n}{k}e^{i(n-k)tx}.$$ For $0<|t|<r/n$, its expectation under $Y$ therefore equals its expectation under $G$, since every frequency $(n-k)t$ lies in $(-r,r)$. On the prescribed sequence $t_\ell=r/(2n\ell)$, $H_{n,t_\ell}(x)\to x^{2n}$; moreover $H_{n,t}(x)\le |x|^{2n}$ because $|\sin v|\le |v|$. By [F3] applied to $G$, $\mathbb E H_{n,t_\ell}(G)\to m_{2n}$. Fatou's lemma [F2] applied to $Y$ now gives $\mathbb E|Y|^{2n}\le m_{2n}<\infty$. Applying [F3] again, now with the integrable majorant $|Y|^{2n}$, shows equality $\mathbb E Y^{2n}=m_{2n}$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Every absolute moment of $Y$ is finite, since $|y|^k\le1+|y|^{2k}$. By [F4], equality of $\varphi$ and $\varphi_G$ on a neighborhood of zero implies equality of their derivatives there, hence $\mathbb E Y^k=\mathbb E G^k$ for every $k\ge0$. For every $a\ge0$, the nonnegative partial sums of $\cosh(aY)$ increase to it; [F3] and step 2.1 give $$\mathbb E\cosh(aY)=\sum_{n=0}^\infty\frac{a^{2n}m_{2n}}{(2n)!}=e^{a^2/2}.$$ Since $e^{a|y|}\le2\cosh(ay)$, $\mathbb E e^{a|Y|}<\infty$. The identical calculation applies to $G$. For every real $t$, the partial sums of the exponential series for $e^{itY}$ have modulus at most $e^{|t||Y|}$, so [F3] and moment equality yield $$\varphi(t)=\sum_{k=0}^\infty\frac{(it)^k\mathbb E Y^k}{k!}=\sum_{k=0}^\infty\frac{(it)^k\mathbb E G^k}{k!}=e^{-t^2/2}.$$ This proves global equality without presupposing analyticity of $\varphi$. [F3, F4, step 1.1, step 2.1, algebra]

4.1 For completeness identify the law directly, without importing a general Fourier uniqueness theorem. For $\varepsilon>0$ set $g_\varepsilon(y)=\varepsilon^{-1}g(y/\varepsilon)$. The Gaussian transform computed in step 1.1, with the substitution $s=\varepsilon t$, gives $$g_\varepsilon(y)=\frac1{2\pi}\int_{\mathbb R}e^{-ity}e^{-\varepsilon^2t^2/2}\,dt.$$ If $\mu$ is the law of $Y$, then $h_{\mu,\varepsilon}(z)=\int g_\varepsilon(z-x)\,\mu(dx)$ is a probability density by Tonelli. Substituting the displayed identity and applying Fubini gives $$h_{\mu,\varepsilon}(z)=\frac1{2\pi}\int e^{-itz}e^{-\varepsilon^2t^2/2}\varphi(t)\,dt.$$ Absolute integrability for this interchange follows from $\mu(\mathbb R)=1$ and $\int e^{-\varepsilon^2t^2/2}\,dt<\infty$. By step 3.1 this density equals $h_{\gamma,\varepsilon}$ for every $z$. [F5, F9, step 1.1, step 3.1, algebra]

5.1 For a bounded continuous real $f$, Fubini and substitution give $$\int f(z)h_{\mu,\varepsilon}(z)\,dz=\int\!\int f(x+\varepsilon u)g(u)\,du\,\mu(dx).$$ The product-integrand is bounded in absolute integral by $\lVert f\rVert_\infty$. Along $\varepsilon=1/\ell$, dominated convergence gives limit $\int f\,d\mu$; the same holds for $\gamma$. Step 4.1 therefore implies $\int f\,d\mu=\int f\,d\gamma$ for every such $f$. For $a\in\mathbb R$ take the continuous functions $f_{a,n}(x)$ equal to $1$ on $x\le a$, equal to $1-n(x-a)$ on $a<x<a+1/n$, and zero on $x\ge a+1/n$. They are bounded by one and converge pointwise to $\mathbf1_{(-\infty,a]}$, so [F3] gives equality of both measures on every such half-line. These half-lines are a pi-system generating the Borel sets: open intervals are countable unions and differences of half-lines with rational endpoints, and every open subset of $\mathbb R$ is the union of the rational-endpoint intervals contained in it. Both measures have total mass one; [F7] proves $\mu=\gamma$. This proves the assertion. [F3, F5, F7, F9, step 4.1, algebra] ∎

## Remarks

The finite-difference step is essential. Agreement near zero alone does not identify arbitrary characteristic functions. Here it first forces all Gaussian moment bounds and exponential integrability. The argument uses only the displayed deterministic sequences, finite sums, and ordinary integration; it imports no choice-bearing general Fourier uniqueness theorem.
