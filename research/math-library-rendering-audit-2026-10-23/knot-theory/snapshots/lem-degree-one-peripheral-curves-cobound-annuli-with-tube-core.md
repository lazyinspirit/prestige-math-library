---
id: lem-degree-one-peripheral-curves-cobound-annuli-with-tube-core
kind: lemma
title: Degree-one peripheral curves cobound annuli with the tube core
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-essential-simple-curve-on-torus-is-primitive
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §4, peripheral coordinates and the disk criterion; the
        curve-straightening and capping annulus are constructed locally.
dependency_level: 1
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume countable choice. In a supplied smooth product solid torus $S^1\times D^2$, let $C\subset S^1\times\partial D^2$ be a finite PL, or finite piecewise smooth regular, embedded simple closed curve. Interpret PL in the compatible structure of the smooth product. If the projection $C\to S^1$ has degree $1$ or $-1$, then $C$ and the core $S^1\times\{0\}$ cobound an embedded annulus in the solid torus. The annulus is finite piecewise smooth, smooth on a neighborhood of its core boundary, has its other boundary exactly $C$, and otherwise lies in the interior of the solid torus. Consequently it may be glued to any properly embedded exterior disk with boundary $C$ to give an embedded disk with boundary the smooth core and a smooth collar there.

## Statement references

[[lem-essential-simple-curve-on-torus-is-primitive]] — product coordinates and the determinant intersection pairing on a torus.

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]] — finite surface disk and annulus reductions.

## Facts & Assumptions

**Given:** Countable choice, the product solid torus and $C$ as in the Statement.

[F1] In product coordinates an oriented torus curve has a class $(p,q)\in\mathbb Z^2$, where $p$ is its degree along the core; signed intersection is the determinant of the two classes. ([[lem-essential-simple-curve-on-torus-is-primitive]])

[F2] The finite surface normal forms identify a connected oriented compact surface with two boundary circles and Euler characteristic zero as an annulus. Smooth disk and annulus regions admit parametrizations with prescribed boundary collars. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]])

[A1] The background choice hypothesis is countable choice through [F2]; all curve moves below are finite. ([[def-countable-choice]])

## Proof

1.1 Reverse the parametrization of $C$ if necessary so its class is $(1,q)$. Round its finitely many corners in disjoint torus coordinate disks, using a coordinate in which the two incident arcs are graphs and replacing the graph corner by a smooth arc fixed near its endpoints. Each change is an isotopy of simple curves supported in that disk: interpolate graph values, which preserves the graph projection. Thus $C$ has an isotopy through finite piecewise smooth embedded curves to a smooth curve $C_0$ in the same class. Write $L_q(s)=(s,\exp(2\pi iqs))$. This is a simple smooth curve in that class. [given, F1, construct]

2.1 Put $C_0$ transverse to $L_q$ by an arbitrarily small finite graph perturbation. The shear $(s,z)\mapsto(s,z\exp(-2\pi iqs))$ is a torus diffeomorphism carrying $L_q$ to a product section, so cutting the torus along $L_q$ gives an explicit annulus. The cut pieces of $C_0$ are finitely many properly embedded arcs. A returning arc, whose endpoints are on the same boundary circle, cuts off a disk with a subarc of that boundary. One elementary way to verify this familiar annulus fact is to cut the annulus to a rectangle along a spanning arc, lift the returning arc to its strip of translated rectangles, and choose an outermost lifted arc: its union with the interval between its endpoints on the same strip boundary bounds a polygonal disk. If a translate or another arc enters this disk, choose an innermost such arc instead. Finiteness of the intersections gives a disk with embedded interior in the annulus. Equivalently the finite disk-and-band reductions in [F2] give the same disk. Choose an innermost returning arc among the cut pieces; its disk interior misses the other cut pieces. Sliding it across that disk and a little beyond is an isotopy supported in the disk's collar and removes two intersections of $C_0$ with $L_q$. For smooth curves use smooth graph slides, stationary near the endpoints of the time interval. [F2, step 1.1, construct]

3.1 Repeat the preceding removal while a returning arc remains. There are strictly fewer intersection points at each removal. If intersections remain when no returning arc is left, all cut arcs span the annulus. Traversing the connected oriented curve then meets $L_q$ always with the same crossing sign: after a spanning arc one arrives at the opposite copy of the cut circle, and gluing crosses it in the same direction as at the preceding crossing. Hence its algebraic intersection with $L_q$ is nonzero. This contradicts [F1], because both classes are $(1,q)$ and their determinant is zero. Thus the finite sequence ends with a smooth curve disjoint from $L_q$. The two curves bound an annulus: cutting along $L_q$ places the other essential circle in the interior of an annulus; cutting along it gives two annuli, as is seen by the same finite surface normal form [F2], or by lifting to a strip and taking the region between adjacent lifts. Sliding through that annulus supplies an isotopy to $L_q$. Concatenate with step 1.1 to obtain a finite piecewise smooth isotopy of simple curves from $C$ to $L_q$, smooth after the initial corner rounding. [F1, F2, step 2.1, construct]

4.1 Put the isotopy of step 3.1 into a radial collar of the tube. More precisely choose a strictly decreasing smooth radius $r(t)$ from $1$ to $1/2$ and map $(s,t)$ to $(u_t(s),r(t)z_t(s))$, where $(u_t(s),z_t(s))$ parametrizes the curve isotopy on the boundary torus. Distinct $t$ give distinct radii, so this is an embedded annulus irrespective of overlaps between different curve images on the torus. On each smooth piece its circle derivative is nonzero and tangent to the radius torus, whereas its time derivative has nonzero radial component, so it is regular. Make the isotopy constant near its final time; its inner collar is then the product collar of the radius-$1/2$ copy of $L_q$. [step 3.1, construct]

5.1 Continue inward by $(s,r)\mapsto(s,r\exp(2\pi iqs))$ for $0\le r\le1/2$. This is an embedded smooth annulus including its core boundary $r=0$: the first coordinate separates distinct $s$, and the $r$ derivative is a nonzero normal vector even at zero. Its outer collar agrees with the preceding annulus after the chosen radial reparametrization. The joined annulus meets the boundary torus only in $C$ and has the smooth core as its other boundary. Its interior lies on the tube side of that torus, while a proper exterior disk lies on the exterior side, so their union is an embedded disk, with a smooth product collar at the core. This proves the statement. [A1, step 4.1, construct] ∎
