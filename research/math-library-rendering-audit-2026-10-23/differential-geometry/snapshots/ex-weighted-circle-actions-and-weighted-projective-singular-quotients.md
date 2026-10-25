---
id: ex-weighted-circle-actions-and-weighted-projective-singular-quotients
kind: example
title: Weighted circle actions and weighted projective singular quotients
status: published
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
verification:
  audited: 2026-09-22
---

## Example

Assume $\mathrm{AC}_\omega$. Fix $n\ge1$ and integers $w_1,\dots,w_n\ge1$ and let the circle act on
$\mathbb C^n$ with the standard form $\omega_0$ by

$$e^{i\theta}\mathbin{\cdot}(z_1,\dots,z_n) =\bigl(e^{iw_1\theta}z_1,\dots,e^{iw_n\theta}z_n\bigr).$$

This action is Hamiltonian with
$\mu(z)=-\frac12\sum_jw_j|z_j|^2+c$. Fix $c>0$ and reduce at $0$. If some
weight satisfies $w_j\ge2$, then the circle acts **not freely** on
$\mu^{-1}(0)$: the point with only the $j$-th coordinate nonzero has
stabilizer the group of $w_j$-th roots of unity. The quotient of this level is
the weighted projective space
$\mathbb{CP}(w_1,\dots,w_n)$, a possibly ineffective orbifold locally modeled by finite cyclic quotients
in its natural quotient structure rather than a quotient to which the
free-action reduction theorem applies. (Its coarse underlying space can still
be a manifold in low-dimensional or ineffective cases.) This exhibits why
freeness cannot be erased from the theorem of this page.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, weights $w_1,\dots,w_n\ge1$, the weighted circle action on $\mathbb C^n$ with $\omega_0=\sum_jdx_j\wedge dy_j$, and $c>0$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice]] and is inherited through the fundamental-field and reduction interfaces; the finite coordinate constructions below need no additional choice.

[F1] The scalar case shows how to contract the fundamental field; for the weighted action and $\xi=1$ the fundamental field is $\xi_M=\sum_jw_j(y_j\partial_{x_j}-x_j\partial_{y_j})$. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F2] The component equation is $d\mu^\xi=-\iota_{\xi_M}\omega_0$ and the coadjoint action of the circle is trivial. [[ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map]].

[F3] The reduction theorem applies only when the value is regular and the stabilizer action on the level is free and proper; No conclusion about a singular quotient is imported from the boundary remark; its cyclic charts are constructed below. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]], [[rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds]].



## Proof

**Proof technique:** direct.

1.1 With $z_j=x_j+iy_j$, contraction of the weighted fundamental field against $\omega_0$ gives $$\iota_{\xi_M}\omega_0=\sum_jw_j\bigl(y_jdy_j+x_jdx_j\bigr)=d\Bigl(\tfrac12\sum_jw_j|z_j|^2\Bigr),$$ so $\mu(z)=-\frac12\sum_jw_j|z_j|^2+c$ satisfies the component equation for every constant $c$ by [F2]. [F1, F2, given]

2.1 The function $\mu$ is invariant under the weighted action because each $|z_j|$ is, and the coadjoint action of the circle is trivial; hence $\mu$ is an equivariant moment map. [step 1.1, F2]

3.1 Since $n\ge1$ and $c>0$, the level $\mu^{-1}(0)$ is the nonempty ellipsoid $\sum_jw_j|z_j|^2=2c$. For each $j$, it contains the point with $|z_j|^2=2c/w_j$ and all other coordinates zero. At that point the equation $e^{iw_j\theta}z_j=z_j$ holds exactly when $e^{iw_j\theta}=1$, so the stabilizer is the cyclic group of order $w_j$. If $w_j\ge2$ this is nontrivial, so the action on this level is not free and the hypotheses of [F3] fail. At every point of the level some coordinate is nonzero, so $d\mu=-\sum_jw_j(x_jdx_j+y_jdy_j)$ is nonzero: the value is regular. Stabilizers are finite since they are intersections of the cyclic groups for the nonzero coordinates. The action is proper because the circle is compact. Thus it is precisely freeness that fails when a weight exceeds one. [step 2.1, F3, given, algebra]

4.1 Define weighted projective space as $(\mathbb C^n\setminus\{0\})/\mathbb C^*$ for the action $\lambda\cdot z=(\lambda^{w_j}z_j)_j$. For each nonzero $z$, the function $f_z(r)=\sum_jw_jr^{2w_j}|z_j|^2$ is continuous and strictly increasing from $0$ to infinity on $r>0$, so has a unique solution $r(z)$ to $f_z(r)=2c$. Its derivative is positive; the implicit function theorem shows $r(z)$ is smooth. Radial normalization $z\mapsto r(z)\cdot z$ meets every complex orbit in exactly one circle orbit, since $\lambda=r e^{i\theta}$ uniquely. This normalization and the level inclusion induce mutually inverse continuous quotient maps, identifying the level quotient with weighted projective space. [given, step 3.1, algebra]

5.1 On the open set $z_j\ne0$, choose a complex scalar with $\lambda^{w_j}z_j=1$. The residual ambiguity is precisely $\zeta^{w_j}=1$, acting on the remaining coordinates by $u_k\mapsto\zeta^{w_k}u_k$. Thus the quotient has chart $\mathbb C^{n-1}/\boldsymbol\mu_{w_j}$. Locally on overlaps one chooses a root of the nonzero coordinate; the corresponding coordinate substitutions are holomorphic with holomorphic inverses, and two choices differ by the indicated finite group actions. These charts give the natural, possibly ineffective orbifold structure. At the axis point the whole chart group fixes the origin. At a general point the stabilizer is the subgroup fixing all nonzero coordinates, hence cyclic as in step 3.1. The common ineffective subgroup has order $\gcd(w_1,\ldots,w_n)$: a scalar acts identically exactly when all its $w_j$-th powers equal one. This chart construction is independent of any unproved singular-reduction assertion in [F3]. [step 4.1, step 3.1, algebra]

6.1 For $n=1$ the coarse quotient is a point and its orbifold chart retains the group $\boldsymbol\mu_{w_1}$ acting trivially. If all weights are one, all stabilizers are trivial and the charts are the ordinary projective charts. Nontrivial isotropy need not make the coarse space nonmanifold (already a finite rotation quotient of $\mathbb C$ has underlying space $\mathbb C$). The example therefore exhibits failure of the free-action hypothesis, not a claim that every nonfree quotient fails to be a manifold. The assumption $n\ge1$ excludes the empty level at $n=0$ and $c>0$. [step 5.1, step 3.1, F3, A1] ∎
