---
id: ex-gaussian-two-point-mixture-smoothing-density
kind: example
title: Smoothing a two-point data law
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
      locator: "Chapter 5, §§5.1–5.2, transition densities and Gaussian smoothing context, PDF pp. 67–69."
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.1, Gaussian convolution formula, printed pp. 127–131."
---

## Example

For $z\in\mathbb R^d$, $\delta_z$ denotes the probability concentrated at $z$. Let $d\ge1$, $T>0$, $a,b\in\mathbb R^d$, $\alpha\in[0,1]$, and $\mu=\alpha\delta_a+(1-\alpha)\delta_b$. Let $g:[0,T]\to(0,\infty)$ be continuously differentiable with $0<g_{\min}\le g(t)\le g_{\max}<\infty$, set $v(t)=\int_0^t g(r)^2\,dr$, and define $\phi_c(z)=(2\pi c)^{-d/2}\exp(-|z|^2/(2c))$ for $c>0$. For every $t>0$, the smoothed law has density

$$p_t(x)=\alpha\phi_{v(t)}(x-a)+(1-\alpha)\phi_{v(t)}(x-b).$$

At time zero its law remains $\mu$. If $a=b$, or if $\alpha$ is $0$ or $1$, the displayed density reduces to the single Gaussian centered at the atom carrying all mass.

## Example references

[Särkkä and Solin, *Applied Stochastic Differential Equations*, Chapter 5, §§5.1–5.2](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Hunter, *Notes on Partial Differential Equations*, Chapter 5, §5.1.1](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

## Facts & Assumptions

**Given:** $d,T,a,b,\alpha$, the finite probability measure $\mu$, and the scalar-noise smoothing convention.

[A1] The full Axiom of Choice is inherited from the Gaussian smoothing interfaces. [[def-axiom-of-choice]]

[F1] For a compactly supported initial law, positive-time smoothing has density $p_t(x)=\int\phi_{v(t)}(x-z)\,\mu(dz)$ and initial law $\mu$. [[def-gaussian-smoothed-data-law-and-transition-density]]

## Proof

**Given:** The example's parameters and the Gaussian smoothing density in [F1].

1.1 Substitute $\mu=\alpha\delta_a+(1-\alpha)\delta_b$ in the defining integral. By the defining property of point masses, integration of any nonnegative Borel function $h$ gives $\int h(z)\,\mu(dz)=\alpha h(a)+(1-\alpha)h(b)$. Taking $h(z)=\phi_{v(t)}(x-z)$ yields the displayed formula, using $\phi_c(z)=\phi_c(-z)$. The initial law is $\mu$ by [F1]. [A1, F1, given, algebra]

2.1 If $a=b$, the two weights sum to one and both Gaussian terms have the same center. If $\alpha=1$, only the first term remains; if $\alpha=0$, only the second remains. In each case the stated single Gaussian is normalized and positive by [F1]. [F1, step 1.1, algebra] ∎