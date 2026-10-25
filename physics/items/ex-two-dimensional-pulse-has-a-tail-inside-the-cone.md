---
id: ex-two-dimensional-pulse-has-a-tail-inside-the-cone
kind: example
title: "A two-dimensional pulse has a tail inside the cone"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-countable-choice, thm-wave-tails-in-one-and-even-spatial-dimensions, thm-poisson-formula-for-the-two-dimensional-wave-equation, thm-linearity-of-the-lebesgue-integral-on-l-one, def-support-and-compactly-supported-riemann-integral-in-rn, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-sphere-and-ball-measures-scale]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 171-172: the two-dimensional formula integrates over the disk, producing a tail"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1, printed pp. 281-289: descent from three to two dimensions"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice. Let $c>0$, $x_0\in\mathbb R^2$, $r>0$,
and let $u_1\in C_c^2(\mathbb R^2)$ be nonnegative and not identically zero
with support in $B_r(x_0)$; let $u$ be the Poisson solution with data
$(0,u_1)$ ([[thm-poisson-formula-for-the-two-dimensional-wave-equation]]).
Then for every $t>r/c$

$$u(x_0,t)=\frac1{2\pi c}\int_{B_{ct}(x_0)}\frac{u_1(y)}{\sqrt{c^2t^2-|y-x_0|^2}}\,dy>0 .$$

The centre of the forward cone keeps seeing the pulse after the front has
passed: the two-dimensional pulse has a tail inside the cone, in contrast with
the quiet three-dimensional interior of
[[ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail]].

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $c>0$, $x_0\in\mathbb R^2$, $r>0$, and a nonnegative $u_1\in C_c^2(\mathbb R^2)$, $u_1\not\equiv0$, supported in $B_r(x_0)$; the Poisson solution $u$ with data $(0,u_1)$.

[F1] Poisson's formula for data $(0,u_1)$: $u(x,t)=\frac1{2\pi c}\int_{B_{ct}(x)}\bigl(c^2t^2-|y-x|^2\bigr)^{-1/2}u_1(y)\,dy$ for $t>0$. ([[thm-poisson-formula-for-the-two-dimensional-wave-equation]])

[F2] In dimension two, strong Huygens fails: admissible data supported strictly inside the base disk $B_{ct}(x)$ can affect the value $u(x,t)$ at its vertex. ([[thm-wave-tails-in-one-and-even-spatial-dimensions]])

[F3] The nonnegative integral is monotone and positively homogeneous, and has value zero exactly for a function vanishing almost everywhere. A continuous function positive at a point is bounded below by a positive constant on a smaller ball, whose measure is positive. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[lem-sphere-and-ball-measures-scale]])

## Verification

1.1 The value at the centre: setting $x=x_0$ in [F1] gives the displayed formula $u(x_0,t)=\frac1{2\pi c}\int_{B_{ct}(x_0)}(c^2t^2-|y-x_0|^2)^{-1/2}u_1(y)\,dy$, the integrand being defined and continuous on the open disk because $|y-x_0|<ct$ there. [given, F1, algebra]

2.1 Positivity: if $t>r/c$ then $\overline B_r(x_0)\subseteq B_{ct}(x_0)$, and on that closed support ball $|y-x_0|\le r<ct$ gives $\sqrt{c^2t^2-|y-x_0|^2}\le ct$, hence the weight $(c^2t^2-|y-x_0|^2)^{-1/2}\ge1/(ct)>0$. Since $u_1\ge0$ is continuous and nonzero, it is positive on a nonempty open subset of $B_r(x_0)$, so [F3] gives $\int_{B_{ct}(x_0)}u_1(y)\,dy>0$ and the displayed integral is at least $(2\pi c)^{-1}(ct)^{-1}\int_{B_{ct}(x_0)}u_1(y)\,dy>0$; this shows that the centre still sees a positive displacement at every time after the front $|x-x_0|=ct$ has passed beyond the support, that is, for $t>r/c$. [given, step 1.1, F3, algebra]

3.1 The tail is carried by the interior: for $t>r/c$ the data are supported strictly inside $B_{ct}(x_0)$ and vanish near its boundary, yet step 2.1 gives $u(x_0,t)>0$. This is the interior tail and illustrates the failure of sphere-only dependence in [F2]. [given, step 2.1, F2] ∎ 
