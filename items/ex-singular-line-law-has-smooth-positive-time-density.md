---
id: ex-singular-line-law-has-smooth-positive-time-density
kind: example
title: A singular line law has a smooth positive-time density
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
  - thm-gaussian-smoothing-density-and-forward-equation
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-law-or-distribution-of-a-random-element
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §§5.1.1–5.1.2, Theorems 5.4–5.5, printed pp. 127–132, Gaussian convolution regularity."
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
      locator: "Chapter 5, §§5.1–5.2, transition-density and Fokker–Planck context, PDF pp. 67–69."
---

## Example

Let $\lambda_1$ be one-dimensional Lebesgue measure and define $\mu(A)=\lambda_1(\{u\in[0,1]:(u,0)\in A\})$ for every Borel $A\subseteq\mathbb R^2$. The box measure formula gives $\lambda_1([0,1])=1$, so $\mu$ is a Borel probability supported on $L=[0,1]\times\{0\}$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable with $0<g_{\min}\le g(t)\le g_{\max}<\infty$ and set $v(t)=\int_0^t g(r)^2\,dr$. For every $t>0$, the Gaussian convolution of $\mu$ has the density

$$p_t(x_1,x_2)=\frac1{2\pi v(t)}\int_0^1\exp\!\left(-\frac{(x_1-u)^2+x_2^2}{2v(t)}\right)du.$$

The initial law $\mu$ is singular with respect to two-dimensional Lebesgue measure, meaning it assigns mass one to a Borel set of planar Lebesgue measure zero, while $p_t$ is strictly positive and infinitely differentiable in $(x_1,x_2)$ for each $t>0$.

## Example references

[Hunter, *Notes on Partial Differential Equations*, Chapter 5, §§5.1.1–5.1.2](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

[Särkkä and Solin, *Applied Stochastic Differential Equations*, Chapter 5, §§5.1–5.2](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

## Facts & Assumptions

**Given:** A uniform random variable on $[0,1]$, the embedded line-supported law, and the compactly supported scalar-noise Gaussian smoothing setup.

[A1] The full Axiom of Choice is inherited from the Gaussian smoothing and probability interfaces. [[def-axiom-of-choice]]

[A2] Countable Choice is assumed by the box-measure theorem used below; the item's SDE and smoothing interfaces also carry the stronger Full AC assumption. [[def-countable-choice]]

[F1] For any compactly supported probability law in $\mathbb R^2$, the positive-time law has the explicit Gaussian-convolution density and is strictly positive. [[def-gaussian-smoothed-data-law-and-transition-density]]

[F2] The convolution density is infinitely differentiable in space for each positive time. [[thm-gaussian-smoothing-density-and-forward-equation]]

[F3] The Lebesgue measure of an axis-aligned rectangle in $\mathbb R^2$ is the product of its side lengths. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F4] The law of a measurable map is its pushforward probability measure. [[def-law-or-distribution-of-a-random-element]]

## Proof

**Given:** The example's random vector and the Gaussian smoothing setup.

1.1 The map $u\mapsto(u,0)$ is continuous and hence Borel measurable; [F4] makes the formula in the statement its pushforward measure, and [A2, F3] give its total mass $\lambda_1([0,1])=1$. It assigns mass one to the Borel segment $L$. For each integer $n\ge1$, the segment lies in the rectangle $[0,1]\times[-1/n,1/n]$, whose Lebesgue area is $2/n$ by [F3]. Therefore its outer measure is at most $2/n$ for every $n$, hence its Lebesgue measure is zero. Since $\mu(L)=1$ and Lebesgue measure of $L$ is zero, $\mu$ is singular with respect to two-dimensional Lebesgue measure. [A2, F3, F4, given, algebra]

2.1 Applying the convolution formula [F1] to $\mu$ gives $p_t(x)=\int_0^1\phi_{v(t)}(x-(u,0))\,du$. In dimension two, $\phi_{v(t)}(x-(u,0))=(2\pi v(t))^{-1}\exp(-((x_1-u)^2+x_2^2)/(2v(t)))$, which is the displayed expression. The integrand is strictly positive for every $u$, so its integral over a unit interval is strictly positive; [F2] gives infinite spatial differentiability for every $t>0$. Thus the initial singularity does not prevent positive-time smoothing. [A1, F1, F2, step 1.1, given] ∎
