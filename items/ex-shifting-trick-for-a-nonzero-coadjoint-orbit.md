---
id: ex-shifting-trick-for-a-nonzero-coadjoint-orbit
kind: example
title: The shifting trick for a nonzero coadjoint orbit
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction, ex-two-sphere-as-a-coadjoint-orbit-of-so-three, ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle, prop-dimension-of-a-regular-nonzero-reduced-space, cor-zero-level-symplectic-reduction-and-dimension-formula, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Proposition 8.6 (Shifting-trick), printed pages 102--103
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed page 150
proof_strategy: direct
---

## Example

Let $SO(3)$ act on $M=T^*\mathbb R^3$ by the cotangent lifts of rotations, with
moment map $\mu(q,p)=q\times p$, and let $\alpha\ne0$ with $|\alpha|=r$. The
coadjoint orbit $\mathcal O_\alpha$ is the sphere $S^2_r$ with the KKS form $r$
times the area form, and the shifting trick realises the reduction at the
nonzero value $\alpha$ as the **zero** reduction of

$$M\times\mathcal O_\alpha^-\quad\text{with moment map}\quad \Psi(q,p,\beta)=q\times p-\beta .$$

The zero level is $\{\beta=q\times p\}$ with $|\beta|=r$, and the quotient by
the diagonal action is canonically the same two-dimensional symplectic manifold
as $M_\alpha$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the rotation action on $T^*\mathbb R^3$, a nonzero $\alpha$ of length $r$, and its coadjoint orbit.

[F1] The coadjoint orbit of $\alpha$ is the sphere $S^2_r$, with the KKS form equal to $r$ times the area form and inclusion moment map. [[ex-two-sphere-as-a-coadjoint-orbit-of-so-three]].

[F2] On the product with the diagonal action and the opposite form on the orbit, the moment map is the difference $\Psi(q,p,\beta)=\mu(q,p)-\beta$, and the zero reduction of the product is canonically symplectomorphic to the reduction of $M$ at $\alpha$. [[prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction]].

[F3] The rotation action on $T^*\mathbb R^3$ has moment map $\mu(q,p)=q\times p$. [[ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle]].

[F4] At a regular value where the coadjoint stabilizer acts freely and properly, the reduced dimension is $\dim M-\dim G-\dim G_\alpha$. [[prop-dimension-of-a-regular-nonzero-reduced-space]].



## Verification

**Proof technique:** direct.

1.1 By [F1] the orbit of a nonzero $\alpha$ is a sphere, and its stabilizer $G_\alpha$ is the one-dimensional rotation group about the axis $\mathbb R\alpha$. If $q\times p=\alpha\ne0$, then $q,p$ are linearly independent. The differential
$$d\mu_{(q,p)}(u,v)=u\times p+q\times v$$
is surjective: if $\xi$ annihilates its image, then the scalar triple-product identity for all $u,v$ gives $p\times\xi=0$ and $\xi\times q=0$, so $\xi$ is parallel to both independent vectors $p,q$ and hence is zero. Thus $\alpha$ is regular. Moreover a rotation about $\alpha$ fixing $(q,p)$ fixes the nonzero vector $q\perp\alpha$, so it is the identity; the $G_\alpha$-action on the level is free, and it is proper because $G_\alpha$ is compact. Therefore [F4] gives $\dim M_\alpha=6-3-1=2$. [F1, F3, F4, given, algebra]

2.1 By [F2] the product moment map is $\Psi=\mu-\beta$; its zero level consists of the pairs $(q,p,\beta)$ with $q\times p=\beta\in S^2_r$, and the diagonal action makes this zero level the equivariant image of the saturated level $\mu^{-1}(S^2_r)$. [step 1.1, F2]

3.1 Dimension check for the shifted picture: $\dim(M\times\mathcal O_\alpha^-)=6+2=8$ and the zero value is regular there exactly because $\alpha$ is a regular value of $\mu$ by [F2] and step 1.1. The shifted action is free by [F2] and proper because $SO(3)$ is compact. Thus the zero level has dimension $8-3=5$, and quotienting by the three-dimensional group gives dimension $2$, in agreement with step 1.1. [step 1.1, step 2.1, F2]

4.1 Consequently the two-dimensional reduced manifold $M_\alpha$ is exhibited as the zero reduction of $M\times S^2_r{}^-$. On the level $\mu^{-1}(\alpha)$ the slice map is $(q,p)\mapsto(q,p,\alpha)=(q,p,q\times p)$, and [F2] identifies its quotient by $G_\alpha$ with the shifted zero quotient by $SO(3)$; the two reduced forms agree because their pullbacks to this slice are both the restriction of the canonical form on $T^*\mathbb R^3$. [step 3.1, F2] ∎
