---
id: ex-shifting-trick-for-a-nonzero-coadjoint-orbit
kind: example
title: The shifting trick for a nonzero coadjoint orbit
status: published
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
verification:
  audited: 2026-09-22
---

## Example

Assume $\mathrm{AC}_\omega$. Let $SO(3)$ act on $M=T^*\mathbb R^3$ by the cotangent lifts of rotations, with
moment map $\mu(q,p)=q\times p$, and let $\alpha\ne0$ with $|\alpha|=r$. The
coadjoint orbit $\mathcal O_\alpha$ is the sphere $S^2_r$ with the KKS form $r^{-1}$
times the outward Euclidean area form on $S^2_r$, and the shifting trick realises the reduction at the
nonzero value $\alpha$ as the **zero** reduction of

$$M\times\mathcal O_\alpha^-\quad\text{with moment map}\quad \Psi(q,p,\beta)=q\times p-\beta .$$

The zero level is $\{\beta=q\times p\}$ with $|\beta|=r$, and the quotient by
the diagonal action is canonically the same two-dimensional symplectic manifold
as $M_\alpha$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the rotation action on $T^*\mathbb R^3$, a nonzero $\alpha$ of length $r$, and its coadjoint orbit.

[F1] The coadjoint orbit of $\alpha$ is the sphere $S^2_r$, with inclusion moment map and KKS form $\omega_r$ satisfying $D_r^*\omega_r=r\omega_{S^2}$ for $D_r(x)=rx$. [[ex-two-sphere-as-a-coadjoint-orbit-of-so-three]].

[F2] On the product with the diagonal action and the opposite form on the orbit, the moment map is the difference $\Psi(q,p,\beta)=\mu(q,p)-\beta$, and the zero reduction of the product is canonically symplectomorphic to the reduction of $M$ at $\alpha$. [[prop-shifting-trick-identifies-reduction-at-alpha-with-zero-reduction]].

[F3] The rotation action on $T^*\mathbb R^3$ has moment map $\mu(q,p)=q\times p$. [[ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle]].

[F4] At a regular value where the coadjoint stabilizer acts freely and properly, the reduced dimension is $\dim M-\dim G-\dim G_\alpha$. [[prop-dimension-of-a-regular-nonzero-reduced-space]].



[A1] Countable choice is [[def-countable-choice]] and covers the reduction, orbit and shifting suppliers.

[F5] A nonempty regular zero level with free proper action has reduced dimension equal to the ambient dimension minus twice the group dimension ([[cor-zero-level-symplectic-reduction-and-dimension-formula]]).

## Verification

**Proof technique:** direct.

1.1 Let $a_r$ denote the outward Euclidean area form on $S^2_r$: $a_{r,\beta}(u,v)=(\beta/r)\cdot(u\times v)$ for tangent vectors $u,v$. Since $dD_r$ multiplies both tangent vectors by $r$, $D_r^*a_r=r^2\omega_{S^2}$. Comparing with [F1] gives $\omega_r=r^{-1}a_r$. Thus the product uses the negative of this KKS form, not negative $r a_r$. [F1, algebra]

1.2 The stabilizer of $\alpha$ is the rotation group of its perpendicular plane, hence isomorphic to $SO(2)$, compact and of dimension one. The level is nonempty: choose a unit $q\perp\alpha$ and put $p=\alpha\times q$, giving $q\times p=\alpha$ by the vector triple-product identity. At every point of the level, $q,p$ are independent. The differential is $d\mu_{(q,p)}(u,v)=u\times p+q\times v$. If $\xi$ annihilates its image, the scalar triple-product identity gives $p\times\xi=0$ and $\xi\times q=0$, so $\xi=0$; finite-dimensional duality proves surjectivity. A rotation fixing $q,p$ also fixes $q\times p$, so fixes a basis and is identity. Thus the stabilizer action is free. For any compact group $C$ acting on a Hausdorff manifold $L$, the inverse image of a compact set $D\subseteq L\times L$ under $(g,x)\mapsto(gx,x)$ is closed in $C\times\operatorname{pr}_2D$, hence compact. This proves properness here. All hypotheses of [F4] hold, giving $\dim M_\alpha=6-3-1=2$. [F1, F3, F4, given, algebra]

2.1 By [F2] the product moment map is $\Psi=\mu-\beta$; its zero level consists of the pairs $(q,p,\beta)$ with $q\times p=\beta\in S^2_r$, and the diagonal action makes this zero level the equivariant image of the saturated level $\mu^{-1}(S^2_r)$. [step 1.1, step 1.2, F2]

3.1 At any shifted zero-level point, $q\times p=\beta\ne0$, so the same derivative calculation as step 1.2 shows that $d\Psi(u,v,0)=d\mu(u,v)$ is surjective. Thus zero is regular. A diagonal stabilizer fixes $q,p$ and is identity by the same basis argument. The action is proper by the compact-group argument in step 1.2, since $SO(3)$ is compact (it is closed and bounded in matrix space). The shifted level is nonempty by the point constructed in step 1.2 together with $\beta=\alpha$. Since the product dimension is $6+2=8$ and the group dimension is three, [F5] gives reduced dimension $8-2\cdot3=2$. [F5, step 1.2, step 2.1, algebra]

4.1 Consequently the two-dimensional reduced manifold $M_\alpha$ is exhibited as the zero reduction of $M\times S^2_r{}^-$. On the level $\mu^{-1}(\alpha)$ the slice map is $(q,p)\mapsto(q,p,\alpha)=(q,p,q\times p)$, and [F2] identifies its quotient by $G_\alpha$ with the shifted zero quotient by $SO(3)$; all hypotheses for the symplectomorphism in [F2] have been verified in steps 1.2 and 3.1. The two reduced forms agree because their pullbacks to this slice are both the restriction of the canonical form on $T^*\mathbb R^3$: the orbit coordinate is constant on the slice, so its form pulls back to zero. The excluded value $\alpha=0$ has a point orbit and does not meet the regular/free argument used here. [A1, step 1.2, step 3.1, F2] ∎
