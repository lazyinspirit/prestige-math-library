---
id: lem-m2-smooth-family-wess-zumino-transgression
kind: lemma
title: M2 Smooth Family Wess Zumino Transgression
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
proof_strategy: direct Stokes argument on the smooth submersion locus
axiom_strength: ZF + full AC inherited from finite relative smooth triangulation; an actual global character is supplied
deps:
  - def-gts-cheegersimons-differential-character
  - thm-stokes-theorem-for-smooth-singular-chains
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations: mathematical-premise
physical_scope: >-
  Pure mathematical conditional statement on a proper smooth family with
  closed two-dimensional fibres. It asserts no physical M2 realization and
  makes no singular-family claim.
proof_status: locally proved on the smooth submersion locus; no singular claim
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Christian Bär and Christian Becker, Differential Characters and Geometric Chains"
      url: https://arxiv.org/pdf/1303.6457v1
      locator: "§§5 and 7.1, especially Definition 7.1 and its proof, PDF pp. 41–49; differential-character holonomy and the hypotheses needed for fibre integration."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: https://abel.math.harvard.edu/~dafr/CBMS133.pdf
      locator: "Ch. 11 §§11.1–11.2, full lecture-note PDF, for the distinction between a determinant/Pfaffian line, its section, and a spectral-cut construction. The detailed local calculation below is supplied here."
---

## Statement

Let $q:S\to C$ be a proper smooth submersion between finite-dimensional Hausdorff second-countable smooth manifolds without boundary, with oriented base $C$ and compact oriented closed two-dimensional fibres; orient $S$ base-before-fibre. Let $f:S\to Y$ be smooth. On each base chart suppose a real three-form $c$ on $Y$ is specified with $dc=2\pi h$, where $h$ is a closed four-form. Define the real one-form $A=q_!f^*c$ using the declared orientation. Then
$$dA=2\pi q_!f^*h.$$
If two local potentials obey $c_j-c_i=d\lambda_{ij}$, then $A_j-A_i=d(q_!f^*\lambda_{ij})$. If an ordinary degree-four differential character $x$ on $Y$ with curvature $h$ is supplied, it defines holonomies on the actual swept three-cycles $f_*(q^{-1}\gamma)$ for smooth loops $\gamma$ in $C$; its boundary law gives curvature $2\pi q_!f^*h$. A free shifted de Rham period condition alone is not such a character. The identity holds for every fixed normalization $c=T C_3$, $T>0$; identifying that normalization and global descent with physical M2 data is a separate application obligation.

## Facts & Assumptions

**Given:** Full AC, inherited from [F3], and the proper smooth oriented family and the local forms in the Statement. For a differential character $x$, its curvature $R(x)$ is the closed form in its boundary law.

[F1] [[def-gts-cheegersimons-differential-character]]: a degree-four differential character is a homomorphism on smooth integral three-cycles and satisfies $x(\partial z)=\int_z R(x)\pmod{\mathbb Z}$ for every smooth integral four-chain $z$.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]]: integration over a finite smooth singular chain obeys Stokes, including degenerate simplices.

[F3] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]: under full AC a compact smooth manifold with boundary has a finite smooth triangulation; compatible prescribed boundary triangulations extend, after compatible subdivisions.

[A1] The fibre orientation is placed after the base orientation in the total orientation. The inverse-image manifolds below are represented by finite smooth integral chains using [F3]; no general chain-transfer datum is asserted.

## Proof

1.1 For every $r\geq2$, define $q_!: \Omega^r(S)\to\Omega^{r-2}(C)$ by inserting the $r-2$ lifted base vectors before the two vertical arguments and integrating over the oriented fibre; define it to be zero for $r<2$. Changing a lift inserts three vertical arguments, which vanish on a two-dimensional fibre. A finite submersion-chart cover of a compact fibre, with a partition of unity, gives smooth coefficients by differentiation under compactly supported integrals. This constructs the operation on the three-, four-, and two-forms used here, not just on $c$. [given, A1, construct]

1.2 For a smooth map $g:M\to C$ from a compact oriented manifold of dimension $m$ (a path, loop, disk, or cylinder suffices), the pullback $S_M=M\times_C S$ is a smooth compact oriented manifold of dimension $m+2$: local submersion coordinates prove smoothness and properness proves compactness. Its boundary is $S_{\partial M}$ with base-before-fibre orientation. Triangulate it using [F3], orient its top simplices, and sum their smooth characteristic maps with integral coefficients. Interior faces cancel in pairs, leaving the induced triangulated boundary. Composing with $S_M\to S\to Y$ gives a finite smooth integral chain on $Y$, with precisely this boundary. Integrals of forms on the chain equal their manifold integrals, since the simplex interiors partition the manifold and their faces have measure zero. Thus the inverse images used below really do provide chains in the domain of [F1]. [given, F3, A1, construct]

2.1 For a form $\eta$ of degree $m+2$, the definition in step 1.1 and integration in submersion coordinates give
$$\int_M g^*q_!\eta=\int_{S_M}\eta.$$
Apply [F2] to the chains of step 1.2 over an oriented coordinate disk $D$ of dimension $r-1$, for $\eta\in\Omega^r(S)$. It gives
$$\int_{\partial D}q_!\eta=\int_{S_D}d\eta=\int_Dq_!d\eta.$$
Ordinary Stokes on $D$ and shrinking coordinate disks show $d q_!\eta=q_!d\eta$: a nonzero coefficient of the difference would have nonzero integral on a sufficiently small oriented coordinate disk. The even fibre dimension and base-before-fibre convention give the displayed positive sign. For $\eta=f^*c$ this proves $dA=2\pi q_!f^*h$. For $\eta=f^*\lambda_{ij}$ it proves $q_!f^*d\lambda_{ij}=d(q_!f^*\lambda_{ij})$, and hence the transition formula. In the latter case $D$ is a path and $q_!\lambda_{ij}$ is a function. [given, F2, A1, step 1.1, step 1.2, algebra]

3.1 For a smooth loop $\gamma:S^1\to C$, step 1.2 produces a smooth integral three-cycle $z_\gamma$ on $Y$. Its value under $x$ is independent of the chosen triangulation: triangulate $S_{S^1}\times[0,1]$ relative to the two end triangulations using [F3]. Its projection to $S_{S^1}$ has rank at most three, so the pullback of the four-form $f^*h$ is zero. The boundary law [F1] on this four-chain gives equality of the two character values. Compatible subdivisions cause the same zero-curvature comparison, so the assertion also covers boundary subdivisions required by [F3]. For a smooth disk in $C$, its pullback four-chain has boundary the swept loop chain, and [F1] gives
$$\exp(2\pi i x(z_{\partial D}))=\exp\!\left(2\pi i\int_Dq_!f^*h\right)=\exp\!\left(i\int_{\partial D}A\right).$$
The last equality uses step 2.1 on a local potential chart. This establishes the stated curvature law for the supplied character on actual swept cycles; it constructs neither a shifted character nor a universal chain-transfer operation. [given, F1, F2, F3, step 1.2, step 2.1, construct]

4.1 Replacing $c$ by $T C_3$ for fixed $T>0$ changes none of steps 1.1–3.1, provided $d(TC_3)=2\pi h$ with the stated normalization. This is an algebraic conditional substitution, not a derivation of a physical normalization or quantum phase. [step 1.1, step 2.1, step 3.1, algebra] ∎

## Sources

- [Bär–Becker, *Differential Characters and Geometric Chains*, §§5 and 7.1](https://arxiv.org/pdf/1303.6457v1): ordinary character holonomy and the conditions their source imposes on fibre integration. The proof above does not claim a universal chain-transfer theorem.
- [Freed, *Lectures on Field Theory and Topology*, Ch. 11](https://abel.math.harvard.edu/~dafr/CBMS133.pdf): determinant/Pfaffian lines and spectral cuts as context; not a substitute for the local Stokes proof.
