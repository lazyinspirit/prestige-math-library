---
id: lem-opposite-definite-surfaces-have-consistent-minimal-boundary-intersections
kind: lemma
title: "Opposite definite surfaces have consistent minimal boundary intersections"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - lem-opposite-definite-spanning-surfaces-have-the-slope-difference-equation
  - def-one-variable-alexander-module-of-an-oriented-link
  - lem-seifert-pairing-well-defined
  - thm-euclidean-inverse-function-theorem
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from normal-transfer linking and the slope equation. It supplies countable choice for the compact supported isotopy extension. All boundary components and coordinate constructions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, Proof of Theorem 1.1, PDF p.7"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Proposition 1.22 and Proposition 6.8"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_+,F_-$ be compact smooth embedded spanning surfaces without closed components for the same nonempty oriented link $L=K_1\cup\cdots\cup K_m\subset S^3$. They may be disconnected or nonorientable. Suppose their full normal-transfer pairings are respectively positive and negative definite. Write $f_i(F)$ for the self-linking of $K_i$ with its surface-normal push, oriented compatibly, and put $d_i=f_i(F_+)-f_i(F_-)$. Then $f_i(F_+)\ge0\ge f_i(F_-)$, so $d_i\ge0$, and
$$\sum_i d_i=2\bigl(b_1(F_+)+b_1(F_-)\bigr).$$

The surface $F_+$ can be isotoped fixing its boundary $L$ pointwise so that, in mutually disjoint smooth boundary tubes with coordinates $(s,u,v)$, $s\in\mathbb R/\mathbb Z$, the actual collar of the fixed comparison surface $F_-$ is the ray of angle zero and that of the changed $F_+$ is the ray of angle $2\pi d_i s+\delta_i$, for a fixed $0<\delta_i<2\pi$. On every sufficiently small tube torus $T_i$, their collar curves then meet transversely in exactly $d_i$ points, all with the same local intersection sign when $d_i>0$. If $d_i=0$ the curves are disjoint. This is the minimum possible geometric intersection count for their slope classes. Orienting $T_i$ by the coordinate order $(s,\theta)$ and both collar curves by increasing $s$, the ordered intersection of the $F_+$ curve with the $F_-$ curve has sign $-1$ at every intersection.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]]

[[lem-opposite-definite-spanning-surfaces-have-the-slope-difference-equation]]

## Facts & Assumptions

**Given:** Full AC, the two opposite definite spanning surfaces with the full pairing, and the chosen component orientations of their common boundary link.

[F1] The full normal-transfer pairing is defined by linking with both small normal pushes and is symmetric on finite-rank homology, including the disconnected case. ([[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F2] Positive-meridian linking is homological, with meridian value one, and linking is symmetric and bilinear. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[lem-seifert-pairing-well-defined]])

[F3] For the two opposite definite spanning surfaces, their total slopes satisfy $s(F_+)-s(F_-)=2(b_1(F_+)+b_1(F_-))$, and total slope is the sum of the component normal framings. ([[lem-opposite-definite-spanning-surfaces-have-the-slope-difference-equation]])

[F4] The inverse function theorem supplies smooth local coordinate inverses for maps with invertible differential. An isotopy of a compact surface embedding extends to an ambient isotopy; boundary points fixed by the embedding isotopy are fixed by the extension. ([[thm-euclidean-inverse-function-theorem]], [[thm-isotopy-extension]])

## Proof

1.1 Push $K_i$ a little inward on a boundary collar, obtaining a two-sided interior curve $a_i$ on either surface. Transporting the collar and its short transverse normal fields from $K_i$ to $a_i$ is an isotopy of the disjoint curve-and-push pair. The two opposite normal pushes of $a_i$ have the same self-linking: a constant half-turn in the oriented normal disk plane homotopes one push to the other without crossing $a_i$. By [F2] each therefore has linking $f_i(F)$ with $a_i$. Thus [F1] gives $B_F([a_i],[a_i])=2f_i(F)$. A positive definite form has nonnegative value on every class, including zero, and a negative definite form has nonpositive value. This proves $f_i(F_+)\ge0\ge f_i(F_-)$ and $d_i\ge0$. Summing the component framing differences and applying [F3] proves the displayed equation. [given, F1, F2, F3, construct, algebra]

1.2 Make coordinates on a boundary tube adapted to the actual collar of $F_-$. Extend that collar parametrization $c(s,u)$ a little across $u=0$ and take its short surface-normal push by $v$. The map $(s,u,v)\mapsto c(s,u)+v n(s,u)$, interpreted in a smooth ambient chart or its normal exponential map, has independent derivatives at $u=v=0$. By [F4] and compactness it is a smooth tube chart at sufficiently small uniform radius. Local extensions across the boundary may be patched outside the given collar using finite chart cutoffs before shrinking; on the positive $u$-ray the prescribed collar is retained. Choose the $v$ direction so the normal plane orientation agrees with that induced from the oriented $K_i$. Its angle-zero longitude has self-linking $f_i(F_-)$, because the inward collar push and the normal push differ by a fixed quarter-turn. On a short collar of $F_+$ the base projection is a coordinate and the normal radius is a strictly increasing inward parameter, as its derivative there is positive at the boundary; compactness and [F4] give these assertions on a uniform strip. Its collar therefore has coordinates $(s,r,\theta_i(s,r))$. [given, F2, F4, construct]

2.1 A transverse vector field along $K_i$ in this tube determines an angle map to the circle. On a cut parameter interval its real lift changes by $2\pi k$ for an integer $k$. Its pushed curve is homologous on the torus to the angle-zero longitude plus $k$ positive meridians: subtract its linear angle of degree $k$, leaving a periodic angle function which contracts to a constant by interpolation. Thus [F2] evaluates its self-linking as $f_i(F_-)+k$. Apply this to the inward tangent of $F_+$, whose framing equals its normal framing by a quarter-turn. Its relative winding is consequently $d_i$. The angle of its short collar has this same degree at every small $r$. First interpolate it on a smaller radius strip to its limiting angle at $r=0$, cutting off before the outer collar edge. Then interpolate that limit to $2\pi d_i s+\delta_i$ using a periodic lift of their difference. This difference is periodic precisely because their degrees agree. Keep $s,r$ fixed throughout. The maps remain embedded because distinct $(s,r)$ remain distinct, and they extend smoothly across $r=0$ as rotations by smooth periodic angles of the inward vector. They agree with the old embedding outside the tube collar and fix every point of $L$. By [F4] the finitely many collar isotopies extend to ambient isotopies fixing $L$. In the innermost tubes the resulting actual collar has exactly the asserted angle. The comparison surface is retained at its original position when making this comparison. [step 1.2, F2, F4, construct, algebra]

3.1 On a small $T_i$ the curves now are $(s,\theta)=(s,2\pi d_i s+\delta_i)$ and $(s,0)$. If $d_i=0$ they are disjoint. If $d_i>0$, the equation $2\pi d_i s+\delta_i=0\pmod{2\pi}$ has exactly $d_i$ solutions on $\mathbb R/\mathbb Z$. Their tangent determinants in the positively ordered coordinates $(s,\theta)$ are $\det((1,2\pi d_i),(1,0))=-2\pi d_i$, proving transversality and the stated common sign. For any transverse representatives of these two slope classes, their algebraic intersection is still $-d_i$: the torus longitude and positive meridian form its oriented homology basis, their intersection is one, and bilinearity gives the same determinant of the two integral classes. This can also be read by lifting their angle difference to the cut interval; its signed zero count is its winding. Geometric intersection number is at least the absolute algebraic intersection, so $d_i$ is minimal. All the constructions preserved the full surface and component scope in the Statement. [step 1.1, step 2.1, F2, construct, algebra] ∎
