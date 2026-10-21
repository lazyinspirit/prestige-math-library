---
id: lem-diagonal-five-grid-represents-reverse-mirror-trefoil
kind: lemma
title: "The diagonal five-grid represents the reverse mirror of the positive trefoil"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - def-coprime-torus-knot
  - def-planar-diagram-gauss-and-dowker-codes
  - thm-valid-code-reconstructs-the-declared-link-diagram
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited only from the smooth same-code uniqueness supplier. Crossing enumeration, stereographic formulas, rotation data and the explicit orientation-reversing-on-the-knot ambient rotation are finite or explicit and use no choice."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Grid-diagram convention; the particular knot admission is proved by explicit coordinates and signed crossing code below"
    - title: "Jeff Erickson, Planar Graphs"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation systems; smooth uniqueness is supplied by the actual local reconstruction theorem"
---

## Statement

Assume Countable Choice. In the oriented projection plane with coordinates $(x,y)$ and viewing normal $+z$, put $O_r=(r+\frac12,r+\frac12)$ and $X_r=((r+2)\bmod5+\frac12,r+\frac12)$ for $0\le r<5$. Join each row by its straight planar segment oriented from $O$ to $X$, each column by its straight planar segment oriented from $X$ to $O$, and put vertical segments over horizontal segments. After rounding the corners, the resulting oriented knot is ambient isotopic in the standard oriented three-sphere to the canonical complex torus knot $T(2,-3)$. It is therefore the mirror, and also the reverse mirror, of $T(2,3)$ with the canonical orientations. This identifies the exact five-grid used in the finite filtered staircase calculation, without inferring knot type from a homology calculation.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[[def-coprime-torus-knot]]

[[def-planar-diagram-gauss-and-dowker-codes]]

[[thm-valid-code-reconstructs-the-declared-link-diagram]]

## Facts & Assumptions

**Given:** The explicit finite planar grid and the ambient and crossing conventions in the Statement.

[A1] [[def-countable-choice]] is assumed for the smooth uniqueness conclusion of [F2].

[F1] [[def-planar-diagram-gauss-and-dowker-codes]] records an over-visit positively and an under-visit negatively in a cyclic Gauss word, separately from the determinant crossing sign. At a negative crossing the clockwise dart order beginning with the outgoing over-dart is $(O_{\rm out},U_{\rm out},O_{\rm in},U_{\rm in})$.

[F2] [[thm-valid-code-reconstructs-the-declared-link-diagram]] proves smooth planar isotopy uniqueness for diagrams with the same full signed rotation, pairing, orientation and outer-face code. Its actual proof constructs matching crossing neighborhoods and edge strips, extends over the face disks with prescribed collars, and joins the resulting plane diffeomorphism to the identity.

[F3] [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] extends a smooth isotopy of a compact embedded source to an ambient isotopy supported near its track.

[F4] [[def-coprime-torus-knot]] fixes $T(p,q)$ as $(r e^{ipu},\sqrt{1-r^2}e^{iqu})$, $u\in\mathbb R/(2\pi\mathbb Z)$, and fixes the mirror by conjugating the second complex coordinate.

## Proof

1.1 Translate the grid by $(-\frac12,-\frac12)$ so its marks have integer coordinates. The component follows the rows in order $0,2,4,1,3,0$, since each horizontal segment goes from row $r$ to column $r+2$ modulo five and the next vertical endpoint is $O_{r+2}$. It is consequently one knot. The horizontal open segments have endpoints $(r,r)$ and $((r+2)\bmod5,r)$. Column $c$ has endpoints $(c,(c-2)\bmod5)$ and $(c,c)$. Testing strict interior containment gives exactly three crossings, $A=(2,1)$, $B=(3,2)$ and $C=(1,3)$. At $A,B$ the over- and under-tangents are respectively $(0,1)$ and $(1,0)$; at $C$ they are $(0,-1)$ and $(-1,0)$. All determinants are $-1$. Traversing from $O_0$, the column at $x=2$ visits $A$ over, row $2$ visits $B$ under, column $1$ visits $C$ over, row $1$ visits $A$ under, column $3$ visits $B$ over, and row $3$ visits $C$ under. Thus the signed visit word is $(+A,-B,+C,-A,+B,-C)$ and the crossing-sign vector is $(-1,-1,-1)$. Corners can be rounded in disjoint disks missing the crossings, so these are the exact smooth diagram data. [given, F1, construct, algebra]

1.2 Put $r=s=1/\sqrt2$ and consider the explicit complex torus curve $\kappa(u)=(r e^{2iu},s e^{-3iu})$. Use stereographic coordinates $\Psi(z_1,z_2)=(\operatorname{Re}z_1,\operatorname{Im}z_1,\operatorname{Re}z_2)/(1-\operatorname{Im}z_2)$. The removed point is not on this torus. This chart preserves the standard boundary orientation of $S^3\subset\mathbb C^2$: at $(0,0,0,-1)$ its positive tangent basis is $(\partial_{x_1},\partial_{y_1},\partial_{x_2})$, and the chart derivative is a positive scalar on this basis. The planar projection of $\Psi\kappa$ has polar angle $2u$, radius $\rho(u)=r/(1+s\sin3u)$, and height $Z(u)=s\cos3u/(1+s\sin3u)$. Two distinct parameters project to the same point only if they differ by $\pi$, because $\rho>0$. Equality of their radii then says $\sin3u=0$. Hence there are precisely three double points, with paired parameters $u=k\pi/3$ and $u+\pi$. They have distinct polar angles and no triple points. At an even $k$, the first parameter has height $+s$ and is over; its partner has height $-s$. In the positive radial/angular frame their tangents are $(-3rs,2r)$ and $(3rs,2r)$, of determinant $-12r^2s<0$. In particular every double point is transverse and negative. Starting at $u=0$, label the first three visits $A,B,C$. The six visits give exactly $(+A,-B,+C,-A,+B,-C)$, with sign vector $(-1,-1,-1)$. This proves the code equality directly from the canonical torus embedding, not from a knot table. [F1, F4, given, construct, algebra]

2.1 The pairing joins each outgoing visit to the incoming dart of the next visit in that word. Together with the negative clockwise order of [F1], its face cycles are $(A O_{\rm out},B O_{\rm in})$, $(A U_{\rm out},C U_{\rm out},B U_{\rm out})$, $(A O_{\rm in},C O_{\rm out})$, $(A U_{\rm in},B U_{\rm in},C U_{\rm in})$ and $(B O_{\rm out},C O_{\rm in})$. Thus the connected graph has three vertices, six edges, and five faces, with three bigons and two triangles. Both actual diagrams realize this same oriented spherical rotation code, including every over/under pair and strand arrow. Choose matching faces as outer faces. If their original outer-face choices differ, regard each diagram on the sphere obtained by compactifying its projection plane, rotate a point of the required complementary face to infinity, and project again. This does not change the oriented link: put its diagram lift in a small collar of this standard equatorial sphere in $S^3$; rotations of the sphere extend to rotations of its ambient four-dimensional Euclidean space fixing the normal coordinate, and hence give explicit ambient isotopies of $S^3$. The normal collar coordinate retains the over/under inequalities. The resulting plane diagrams have the same full code with the same chosen outer face. [F1, step 1.1, step 1.2, given, construct, algebra]

3.1 Apply [F2] to these two diagrams. It gives an orientation-preserving smooth planar isotopy carrying every oriented edge and crossing decoration to its matching edge and decoration. Lift this family by retaining the third coordinate. On a compact neighborhood of the lifted diagram its track is compact; [F3] applied to a closed rounded three-dimensional neighborhood extends this family to an ambient isotopy of $S^3$. Finally two lifts of the same decorated projection are isotopic by linearly interpolating their height functions after matching their oriented parameters. Distinct projection points remain distinct; at a crossing the over-height minus the under-height stays strictly positive under this interpolation. The projected tangent never vanishes, so every interpolated curve is a smooth embedding. Make the time parameter stationary near its endpoints and apply [F3] to its compact circle source. This identifies the actual grid lift with $\Psi\kappa$, preserving orientation. By [F4] this is the claimed $T(2,-3)$. [A1, F2, F3, step 2.1, construct]

4.1 Conjugation of the second complex coordinate sends the parametrized $T(2,3)$ to $\kappa$ with its image orientation, so the knot just identified is the prescribed mirror. It is also equivalent to the reverse of that mirror. Indeed simultaneous complex conjugation sends $\kappa(u)$ to $\kappa(-u)$. In real coordinates it fixes the two real axes and negates the two imaginary axes. This is the endpoint of the explicit rotations from angle zero to $\pi$ in the plane spanned by those imaginary axes, fixing the real axes. Every such rotation lies in $SO(4)$ and preserves $S^3$ and its orientation. The resulting ambient isotopy reverses the orientation along this specific knot at its terminal map. Therefore mirror and reverse mirror are oriented-isotopic in this case. Every assertion is geometric; no analytic comparison, Floer rank, tau value, or staircase identification is used. [F4, step 3.1, construct, algebra] ∎
