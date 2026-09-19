---
id: ex-complex-projective-space-as-a-circle-symplectic-reduction
kind: example
title: Complex projective space as a circle symplectic reduction
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map, cor-zero-level-symplectic-reduction-and-dimension-formula, thm-marsden-weinstein-meyer-symplectic-reduction, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.3, printed page 136; Homework 20, printed page 168
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Example 8.7, printed page 102
proof_strategy: direct
---

## Example

Let $n\ge1$. Let the circle act by scalar multiplication on $\mathbb C^n$ with
$\omega_0=\sum_jdx_j\wedge dy_j$ and moment map
$\mu(z)=-\frac12|z|^2+c$ of the previous example. For $c>0$ the value $0$ is
regular, the circle acts freely on the level $\mu^{-1}(0)=S^{2n-1}_r$, the
sphere of radius $r=\sqrt{2c}$, and the reduction is the Hopf quotient

$$M_0=S^{2n-1}_r/S^1=\mathbb{CP}^{n-1}$$

with the reduced form $\omega_0^{\mathrm{red}}$ characterised by
$\pi^*\omega_0^{\mathrm{red}}=\iota^*\omega_0$. This characterisation is the
Hopf-model definition of the Fubini--Study form at the radius $r$; rescaling
$c$, hence $r$, rescales the reduced form by the corresponding factor. For
$n=1$ the quotient is a point and the reduced form is zero.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an integer $n\ge1$, the scalar circle action on $\mathbb C^n$ with its moment map $\mu(z)=-\frac12|z|^2+c$, and $c>0$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and reduction suppliers.

[F1] $\mu$ is an equivariant moment map for the scalar circle action and $d\mu=-\iota_{\xi_M}\omega_0$ for the generator $\xi=1$. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]].

[F2] The reduction theorem gives, for a regular value with free proper stabilizer action on the level, a unique symplectic form on the quotient with $\pi^*\omega^{\mathrm{red}}=\iota^*\omega_0$; the zero-level corollary gives the dimension. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[cor-zero-level-symplectic-reduction-and-dimension-formula]].

[F3] A value is regular exactly when the stabilizers of its level are discrete. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].



## Verification

**Proof technique:** direct.

1.1 The zero level of $\mu$ is $\mu^{-1}(0)=\{z:|z|^2=2c\}$, the sphere of radius $r=\sqrt{2c}>0$. [F1, given]

2.1 The circle acts freely on this sphere: if $e^{i\theta}z=z$ with $z\ne0$ then $e^{i\theta}=1$. The value $0$ is therefore regular by [F3], and the circle is compact, so the action is proper. [step 1.1, F3]

3.1 By [F2] the reduction $M_0=\mu^{-1}(0)/S^1$ is a symplectic manifold of dimension $2n-1-1=2n-2$, and its form is the unique form pulled back from $\iota^*\omega_0$. The quotient of the sphere by the scalar circle action is the Hopf quotient $S^{2n-1}_r/S^1$, the standard model of $\mathbb{CP}^{n-1}$: scalar multiplication and $z\mapsto\lambda z$ identify the same line, and the quotient is free away from the origin. [step 2.1, F2]

4.1 In that model the Fubini--Study form is defined exactly by the basic-form property $\pi^*\omega_{\mathrm{FS}}=\iota^*\omega_0$ on the sphere, so the reduced form is the Fubini--Study form in the normalization fixed by the sphere of radius $r$; replacing $c$ by $\lambda^2c$ replaces the sphere of radius $r$ by the sphere of radius $\lambda r$ and rescales the reduced form by $\lambda^2$. For $n=1$ the sphere is $S^1$, the circle acts transitively, and the quotient is a single point with the zero form. [step 3.1, F2, A1] ∎
