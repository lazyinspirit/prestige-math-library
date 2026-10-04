---
page: level-one-modular-forms-and-the-j-invariant-examples
title: Level-One Modular Forms and the j-Invariant — Examples
status: published
requires: [level-one-modular-forms-and-the-j-invariant]
items: []
examples: [ex-standard-fundamental-domain-tessellation, ex-elliptic-points-of-the-modular-group, ex-first-fourier-coefficients-of-e4-e6-delta-and-j, ex-no-nonzero-odd-weight-level-one-modular-forms, ex-square-and-hexagonal-tori-and-their-j-invariants, def-principal-congruence-subgroup-gamma-2, lem-gamma-2-is-torsion-free-and-has-no-elliptic-points, def-modular-lambda-function, lem-lambda-transformation-laws, lem-lambda-fibres-are-gamma-2-orbits, lem-weierstrass-j-invariant-of-the-legendre-normal-form, ex-modular-lambda-biholomorphism-onto-the-slit-plane, fs-level-one-e2-is-a-weight-two-modular-form]
---

The examples make the constructions of the companion page explicit. The
standard fundamental domain is shown to tessellate the upper half-plane: the
tiles $\gamma\overline D$ cover $\mathfrak H$ with disjoint interiors and
meet in a common edge, half-edge or vertex, the edge identifications being
$\tau\sim\tau+1$ on the vertical sides and $\tau\sim-1/\tau$ on the
circular arc. The modular group has exactly two elliptic classes, those of
$i$ and of $\omega=e^{2\pi i/3}$, with stabilisers of orders two and three;
the quotient map has local degrees two and three there, and the values
$j(i)=1728$ and $j(\omega)=0$ are computed from the zeros of $E_6$ and $E_4$.
On the torus side the square and hexagonal lattices $\mathbb Z[i]$ and
$\mathbb Z[\omega]$ have these same $j$-invariants, the level sets of $1728$
and $0$ are exactly their homothety classes, and multiplication by $i$ and by
$\omega$ realises automorphisms of the corresponding tori of orders four and
three.

The arithmetic examples read coefficients off the $q$-expansions:
$E_4=1+240q+2160q^2+\cdots$, $E_6=1-504q-16632q^2+\cdots$,
$\Delta=q-24q^2+252q^3-\cdots$ and
$j=q^{-1}+744+196884q+\cdots$, the last from the division of $E_4^3$ by
$\Delta$. For odd weight the transformation law applied to $-I$ reads
$f=(-1)^kf=-f$, so the only odd-weight form is the zero form.
The final entry records a false statement, that the weight-two Eisenstein
series is a modular form; its transformation law carries a correction term,
and the false statement is kept as a flagged non-result rather than a theorem.

The remaining figures develop the level-two theory of the modular lambda
function as a worked counterpart of the level-one picture. The principal
congruence subgroup $\Gamma(2)\le SL_2(\mathbb Z)$ has projective image
$\bar\Gamma(2)=\Gamma(2)/\{\pm I\}$ of index six in the modular group.
$PSL_2(\mathbb Z)$ acts on $\lambda$ through six fractional-linear
substitutions, whose values may coincide; $\bar\Gamma(2)$ is torsion-free
and acts freely, the fibres of $\lambda$ are exactly its orbits, and the
Legendre normal form identifies the values of
$j$ with $J(\lambda)=256(\lambda^2-\lambda+1)^3/\lambda^2(\lambda-1)^2$. The
lambda function is then shown to induce a biholomorphism from
$Y(2)=\mathfrak H/\Gamma(2)$ onto the twice-punctured plane and a
biholomorphism from the interior of the standard ideal quadrilateral onto the plane slit
along the two closed real rays, so the abstract quotient of the companion
page acquires an explicit coordinate.
