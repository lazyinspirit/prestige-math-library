---
id: ex-weighted-circle-actions-and-weighted-projective-singular-quotients
kind: example
title: Weighted circle actions and weighted projective singular quotients
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map, thm-marsden-weinstein-meyer-symplectic-reduction, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds, def-fundamental-vector-field-of-a-left-action, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.5 Orbifolds, printed pages 150--151
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Example 8.7, printed page 102
proof_strategy: direct
---

## Example

Fix integers $w_1,\dots,w_n\ge1$ and let the circle act on
$\mathbb C^n$ with the standard form $\omega_0$ by

$$e^{i\theta}\mathbin{\cdot}(z_1,\dots,z_n) =\bigl(e^{iw_1\theta}z_1,\dots,e^{iw_n\theta}z_n\bigr).$$

This action is Hamiltonian with
$\mu(z)=-\frac12\sum_jw_j|z_j|^2+c$. Fix $c>0$ and reduce at $0$. If some
weight satisfies $w_j\ge2$, then the circle acts **not freely** on
$\mu^{-1}(0)$: the point with only the $j$-th coordinate nonzero has
stabilizer the group of $w_j$-th roots of unity. The quotient of this level is
the weighted projective space
$\mathbb{CP}(w_1,\dots,w_n)$, an orbifold with cyclic quotient singularities
in its natural orbifold structure rather than a quotient to which the
free-action reduction theorem applies. (Its coarse underlying space can still
be a manifold in low-dimensional or ineffective cases.) This exhibits why
freeness cannot be erased from the theorem of this page.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, weights $w_1,\dots,w_n\ge1$, the weighted circle action on $\mathbb C^n$ with $\omega_0=\sum_jdx_j\wedge dy_j$, and $c>0$.

[F1] The scalar case shows how to contract the fundamental field; for the weighted action and $\xi=1$ the fundamental field is $\xi_M=\sum_jw_j(y_j\partial_{x_j}-x_j\partial_{y_j})$. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F2] The component equation is $d\mu^\xi=-\iota_{\xi_M}\omega_0$ and the coadjoint action of the circle is trivial. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]].

[F3] The reduction theorem applies only when the value is regular and the stabilizer action on the level is free and proper; otherwise the quotient need not be a smooth manifold. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]], [[rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds]].



## Verification

**Proof technique:** direct.

1.1 With $z_j=x_j+iy_j$, contraction of the weighted fundamental field against $\omega_0$ gives $$\iota_{\xi_M}\omega_0=\sum_jw_j\bigl(y_jdy_j+x_jdx_j\bigr)=d\Bigl(\tfrac12\sum_jw_j|z_j|^2\Bigr),$$ so $\mu(z)=-\frac12\sum_jw_j|z_j|^2+c$ satisfies the component equation for every constant $c$ by [F2]. [F1, F2, given]

2.1 The function $\mu$ is invariant under the weighted action because each $|z_j|$ is, and the coadjoint action of the circle is trivial; hence $\mu$ is an equivariant moment map. [step 1.1, F2]

3.1 The level $\mu^{-1}(0)$ is the nonempty ellipsoid $\sum_jw_j|z_j|^2=2c$. For each $j$, it contains the point with $|z_j|^2=2c/w_j$ and all other coordinates zero. At that point the equation $e^{iw_j\theta}z_j=z_j$ holds exactly when $e^{iw_j\theta}=1$, so the stabilizer is the cyclic group of order $w_j$. If $w_j\ge2$ this is nontrivial, so the action on this level is not free and the hypotheses of [F3] fail. [step 2.1, F3, given, algebra]

4.1 Quotienting the ellipsoid $\mu^{-1}(0)$ by the weighted circle action identifies weighted scalar multiples and yields $\mathbb{CP}(w_1,\dots,w_n)$. The coordinate-axis points have cyclic isotropy of order $w_j$ (possibly including an ineffective subgroup common to all points), so the natural quotient is an orbifold with nontrivial isotropy whenever some $w_j\ge2$; the free-action reduction theorem does not supply its smooth symplectic-manifold structure. [step 3.1, F3] ∎
