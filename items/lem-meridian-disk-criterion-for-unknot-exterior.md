---
id: lem-meridian-disk-criterion-for-unknot-exterior
kind: lemma
title: Meridian-disk criterion for unknot recognition
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - lem-essential-disk-boundary-is-longitude
  - def-countable-choice
  - lem-smooth-to-pl-knot-exterior-ambient-isotopy
  - lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings
  - lem-smooth-proper-disks-have-compatible-pl-approximations
  - lem-degree-one-peripheral-curves-cobound-annuli-with-tube-core
  - lem-knot-genus-zero-iff-unknot
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §4, Lemmas 4.1–4.2, printed pp.8–9/web lines 357–383; Lemma 4.1’s
        disk-to-unknot proof is only one sentence.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §14.2, printed pp.3–4; the disk criterion is stated but the reverse
        implication is not proved.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume countable choice. Let $K:S^1\to S^3$ be a smooth oriented knot with a supplied product tubular neighborhood, and let $E_K$ be its compact exterior with peripheral torus $T_K$, fibre meridian $\mu$, and the unique degree-one generator $[\lambda]$ of the kernel of $H_1(T_K;\mathbb Z)\to H_1(E_K;\mathbb Z)$ supplied by the product-tube Mayer–Vietoris calculation. Then $K$ is ambient isotopic in the smooth category to the standard unknot if and only if $E_K$ contains a properly embedded piecewise-linear disk $D$ whose boundary is not null-homotopic in $T_K$. Every such disk has $[\partial D]=[\lambda]$ or $-[\lambda]$ and has odd mod-two intersection with the original marked meridian $\mu$.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy]] — the smooth ambient-isotopy convention.

[[def-knot-exterior]] — compact exterior and boundary torus of the supplied tube.

[[def-knot-meridian-and-preferred-longitude]] — the original meridian and preferred-longitude conventions.

[[lem-essential-disk-boundary-is-longitude]] — boundary-slope and odd-intersection conclusions for every essential disk.

[Hass–Lagarias–Pippenger, Lemmas 4.1–4.2](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — the claimed disk criterion and mod-two form.

## Facts & Assumptions

**Given:** Countable choice, the smooth oriented knot, its supplied product tube, and the exterior and marked peripheral data in the Statement.

[A1] Countable choice is the standing hypothesis; the local finite rounding, surface normal forms and smooth isotopy interfaces below use this hypothesis. ([[def-countable-choice]])

[F1] Every essential exterior disk has longitude class up to sign and odd intersection with the original fibre meridian. ([[lem-essential-disk-boundary-is-longitude]])

[F2] A peripheral curve of core degree $1$ or $-1$ cobounds a finite piecewise smooth annulus with the core, smooth on a collar of the core boundary. ([[lem-degree-one-peripheral-curves-cobound-annuli-with-tube-core]])

[F3] A finite compatible whole-star surface with an already smooth boundary collar has a smooth embedded replacement with the same topology and exactly the same boundary, fixed on a smaller collar. Smooth transverse proper disks conversely have PL proper approximations preserving the boundary's isotopy class. ([[lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings]], [[lem-smooth-proper-disks-have-compatible-pl-approximations]])

[F4] A smooth knot bounds a smooth embedded disk exactly when it has genus zero, and genus zero is equivalent under countable choice to smooth ambient isotopy to the oriented unknot. ([[lem-knot-genus-zero-iff-unknot]])

[F5] The PL convention here is the compatible PL structure of the supplied smooth exterior, represented by a whole-star smooth triangulation with boundary subcomplex and tangent-half-space fans. A PL disk can therefore be made a subcomplex by finite common subdivision, and its simplex restrictions have injective derivative fans. This is the ordinary meaning of PL in this smooth exterior, rather than a separate arbitrary topological marking. A representing finite whole-star triangulation is obtained by the finite coordinate-box and fitting construction of [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]; that supplier explicitly declares its ambient full-AC hypothesis dispensable and its actual finite construction uses no additional choice. The rounding and approximation clauses of [F3] use this same chosen compatible structure throughout.

## Proof

1.1 Suppose first that $K$ is smoothly ambient isotopic to the unknot. Carry the standard smooth spanning disk back along that isotopy, obtaining a smooth embedded spanning disk $B$ for $K$. In the product coordinates of the supplied tube, a sufficiently small collar of $\partial B=K$ has positive radial distance away from its boundary, with nonzero inward derivative there: the disk's inward tangent is linearly independent of the knot tangent, hence its normal projection is nonzero. Compactness of $K$ makes this estimate uniform. A compact portion of $B$ outside this collar is disjoint from $K$, so it misses all sufficiently small radius tubes. Thus for a sufficiently small $\delta>0$, $B$ meets the radius-$\delta$ tube in precisely that disk collar, and the radial level $\delta$ cuts a simple boundary circle transversely. The remaining disk $B_\delta$ is a smooth transverse proper disk in the radius-$\delta$ exterior. Its boundary has degree one along the core, because the original disk collar projects to $K$ with degree one; it is therefore non-null-homotopic on the radius-$\delta$ torus. [given, F4, construct]

1.2 Conversely, let $D$ be a proper PL exterior disk with essential boundary $C$. By [F1], $[C]=\pm[\lambda]$, so its degree under the product projection to the core is $1$ or $-1$. Apply [F2] to obtain an annulus $A$ on the tube side of the torus with boundaries $C$ and $K$, with smooth collar at $K$. Its interior misses $D$, because the interiors lie on opposite sides of the torus. The union $B=D\cup_C A$ is consequently an embedded disk with boundary exactly $K$. [F1, F2, construct]

2.1 The closed radius-$\epsilon$ disk bundle is compact and is contained in the open tubular domain $\Omega$. In the supplied product trivialization, compactness gives a number $R>\epsilon$ for which the closed radius-$R$ disk bundle is still contained in $\Omega$. Choose $\delta<\epsilon$ as in step 1.1. Choose a smooth strictly increasing radial function $\rho:[0,R]\to[0,R]$ with $\rho(0)=0$, $\rho(\delta)=\epsilon$, linear near zero and equal to the identity near $R$. Interpolation of positive derivatives with the prescribed interval integrals constructs such a function. The fibrewise map $z\mapsto\rho(|z|)z/|z|$, extended at zero by its positive linear derivative, and the identity outside the larger tube give a smooth ambient diffeomorphism carrying the radius-$\delta$ exterior to the supplied exterior. It takes $B_\delta$ to a smooth transverse proper disk and preserves core degree on the boundary. Apply the PL-approximation clause of [F3] in the compatible structure [F5]. Its PL proper disk has boundary isotopic to the original degree-one circle and therefore essential. This proves the unknot-to-PL-disk direction for the actual supplied tube. [F3, F5, step 1.1, construct]

2.2 The disk $B$ satisfies the finite-rounding hypothesis in [F3]. On $D$ the required simplex extensions and injective fans come from [F5]. Along $C$, use the product collar of the torus: an exterior disk collar and the first annulus strip lie on its opposite sides. Their half-fans meet precisely in the tangent fan of $C$, so the combined fan is injective. Subdivide along the finitely many corner and isotopy seams of the annulus; its graph strips, radial-level annuli and product core collar have the piecewise smooth regular charts constructed in [F2]. Any join can be given matching collar parametrizations, and the graph-coordinate corner rounding is performed away from the protected core collar. Thus the union has a finite whole-star piecewise smooth surface triangulation with an already smooth collar of $K$. The relative smoothing clause of [F3] gives a smooth embedded disk with the very same boundary $K$. [F2, F3, F5, step 1.2, construct]

3.1 By [F4], this smooth spanning disk makes the Seifert genus zero, and the given countable choice extends the disk-boundary isotopy to a smooth ambient isotopy to the standard oriented unknot. Together with step 2.1 this proves the asserted equivalence. For every essential disk, independently of its choice or of the smoothing construction, [F1] already gives $[\partial D]=\pm[\lambda]$ and odd mod-two intersection with the original marked meridian $\mu$. All clauses of the Statement follow under the original countable-choice hypothesis. [A1, F1, F4, step 2.1, step 2.2, construct] ∎
