---
id: lem-explicit-unknot-and-figure-eight-oriented-wirtinger-codes
kind: lemma
title: "Explicit unknot and figure-eight oriented Wirtinger codes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-planar-code
  - alg-knot-wirtinger-presentation-from-code
  - lem-wirtinger-local-meridian-conjugacy
  - thm-knot-wirtinger-presentation-correctness
  - def-free-group
  - def-group-presentation
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stefan Friedl, Knot Theory, Lemma 5.8, printed/PDF p. 74"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "The full figure-eight diagram and its Wirtinger example are context. The integer drawing, precise labels and signs used here are certified below."
---

## Statement

There are the following explicit valid finite planar codes, with the standard right/up orientation of the plane and positive based meridians using compatible common upper-collar access paths.

The counterclockwise square with vertices $(0,0),(1,0),(1,1),(0,1)$ is a crossing-free unknot code. It has one under-arc and gives $\pi_1(S^3\setminus U)=\langle x\mid\ \rangle\cong\mathbb Z$, with $x$ the positive meridian.

An oriented figure-eight code has crossings $C_1,C_2,C_3,C_4$. The letters $O,U$ mean over and under, and $i,o$ mean incoming and outgoing. Its integer plane-drawing certificate is

| $r$ | $C_r$ | $rOi$ | $rOo$ | $rUi$ | $rUo$ |
|---|---|---|---|---|---|
| $1$ | $(-423,0)$ | $(-627,102)$ | $(-363,-30)$ | $(-363,30)$ | $(-627,-102)$ |
| $2$ | $(0,-9)$ | $(-33,-6)$ | $(99,-18)$ | $(-99,-18)$ | $(33,-6)$ |
| $3$ | $(0,9)$ | $(33,6)$ | $(-99,18)$ | $(99,18)$ | $(-33,6)$ |
| $4$ | $(423,0)$ | $(627,-102)$ | $(363,30)$ | $(363,-30)$ | $(627,102)$ |

The complete cyclic visit list is $$1O,\ 2U,\ 3O,\ 1U,\ 4O,\ 3U,\ 2O,\ 4U.$$ For every successive pair $rB,sD$ in this list, including the last-to-first pair, use the three straight segments of the route $C_r\to rBo\to sDi\to C_s$. At each crossing pair $rOi$ with $rOo$, and $rUi$ with $rUo$; the first pair is over. Smooth the degree-two bends in disjoint small disks. The cyclic orders at crossings are the counterclockwise lists $(rOo,rUi,rOi,rUo)$ for $r=1,4$ and $(rOo,rUo,rOi,rUi)$ for $r=2,3$.

Label the under-arcs $x_1:U4\to U2$, $x_2:U2\to U1$, $x_3:U1\to U3$, $x_4:U3\to U4$. In each oriented over-branch chart, let $L$ denote its left under-side (target of the positive in-plane normal), and $R$ its right under-side (source). The exact crossing table is

| crossing | over | $L$ (target) | $R$ (source) | under traversal | $\operatorname{sign}\det(\text{over},\text{under})$ |
|---|---|---|---|---|---|
| $R_1$ | $x_1$ | $x_2$ | $x_3$ | target to source | $-1$ |
| $R_2$ | $x_4$ | $x_2$ | $x_1$ | source to target | $+1$ |
| $R_3$ | $x_2$ | $x_4$ | $x_3$ | source to target | $+1$ |
| $R_4$ | $x_3$ | $x_4$ | $x_1$ | target to source | $-1$ |

Thus its actual positive-meridian presentation is $$\pi_1(S^3\setminus 4_1)=\langle x_1,x_2,x_3,x_4\mid x_1x_2=x_3x_1,\ x_1x_4=x_4x_2,\ x_3x_2=x_2x_4,\ x_3x_4=x_1x_3\rangle.$$ The last relation follows from the first three. Starting on $x_1$, the underpasses occur at $R_2,R_1,R_3,R_4$, and the self-writhe is zero. All drawing data, validations and algebra in this statement are finite and use no choice axiom.

## Statement references

[[def-knot-planar-code|Finite rational drawing, branch pairing and positive meridians]]

[[alg-knot-wirtinger-presentation-from-code|Exact finite constructor]]

[[thm-knot-wirtinger-presentation-correctness|Identification with the actual knot group]]

## Facts & Assumptions

**Given:** The integer coordinates, routes, orientation, branch pairings, over/under choices and square specified in the statement.

[F1] [[def-knot-planar-code]] specifies the exact rational drawing tests, one-component tracing, smoothing and under-arc convention.

[F2] [[alg-knot-wirtinger-presentation-from-code]] checks this finite input and emits one positive-meridian generator per under-arc, with crossing relation $x_o^{-1}x_Rx_ox_L^{-1}=1$.

[F3] [[lem-wirtinger-local-meridian-conjugacy]] proves that the over-tangent's positive in-plane normal points from source $R$ to target $L$, and gives exactly the based positive-meridian rule in [F2].

[F4] [[thm-knot-wirtinger-presentation-correctness]] identifies that presentation with the fundamental group of the actual smooth knot complement, with these positive meridians.

[F5] [[def-free-group]] and [[def-group-presentation]] give the universal properties of the free group and of imposing the listed relators.

[F6] [[thm-simple-polygon-admits-a-triangulation]] constructs a finite face-to-face triangulation of a simple filled polygon by vertical slabs and convex cells. Its finite polygon construction is used only to extend the paired face boundaries in the figure-eight admission.

## Proof

1.1 The eight stated routes give 24 segments, 16 degree-two ports and four crossing vertices. Here is an exact reproducible intersection test for the displayed integers. For segments $a+tu,b+sv$, with $u=a'-a,v=b'-b$ and $\Delta=\det(u,v)\ne0$, their intersection parameters are $$t=\det(b-a,v)/\Delta,\qquad s=\det(b-a,u)/\Delta.$$ Retain the intersection just when $0\le t,s\le1$. If $\Delta=0$, the test $\det(b-a,u)=0$ detects collinearity, and comparison of the two closed endpoint intervals in either nonconstant coordinate detects overlap. Applying these formulas to the table gives 276 unordered segment pairs: precisely 40 meet, each solely at its common declared endpoint, and the other 236 are disjoint. The 40 consist of one pair at each of the 16 ports and six pairs at each of the four crossing centers. No pair overlaps in positive length. At each center the $Oi,C,Oo$ and $Ui,C,Uo$ triples are collinear with the center strictly between the ports. The determinants of the full oriented over/under vectors are respectively $-69696,3168,3168,-69696$, so those are transverse opposite pairs with exactly the stated cyclic orders. The cyclic visit list uses every branch once, and following the paired branches gives that single list, not several circles. Hence every validity condition in [F1] holds. Finitely many nonincident compact segments have positive distance, so sufficiently small disjoint bend disks introduce no new crossing; over/under height separation in the crossing disks realizes the smooth knot. [F1, given, construct, algebra]

2.1 The geometric figure-eight admission can be checked without inferring knot type from a group presentation. Draw the downward three-strand braid with successive crossings $\sigma_1,\sigma_2^{-1},\sigma_1,\sigma_2^{-1}$, where a positive generator has its left strand over, and close corresponding endpoints outside the braid rectangle without additional crossings. Number its successive crossings $1,2,4,3$. Following its first top strand through the closure gives exactly $1O,2U,3O,1U,4O,3U,2O,4U$. In right/up plane coordinates its positive-generator over and under tangents point respectively down-right and down-left, giving negative determinant; the negative generator reverses that sign. Thus the four labeled determinants are $-,+,+,-$. Together with the visit list these determine precisely the cyclic orders in the statement. For an additional check, the six face boundary cycles, listing each departure port and then taking the next counterclockwise port after traversing its edge, are $$(1Oo,2Oo,4Oi),\ (1Ui,3Uo,2Ui),\ (1Oi,4Oo,3Oo),\ (1Uo,4Uo),\ (2Uo,3Ui,4Ui),\ (2Oi,3Oi).$$ These are the same two bigons and four triangular faces of that closed braid drawing; the table merely subdivides its eight edges at their ports. To see that this comparison concerns embeddings, take small crossing disks and narrow edge rectangles in each drawing. The identical cyclic orders identify these neighborhoods respecting over/under pairs. The six face boundaries are simple polygonal circles. Their disk coordinates can be obtained by the elementary finite polygon construction: use the vertical-slab convex-cell triangulation of [F6] and peel boundary triangles to identify the filled polygon with a disk. At each peeling step a triangle with one boundary edge and interior opposite vertex leaves a disk; if all vertices of the remaining triangulation are on its boundary, the dual is a finite tree and a leaf triangle has two boundary edges. Reversing these elementary triangle attachments gives disk coordinates with the prescribed boundary parametrization. Matching the resulting boundary circle coordinates extends over the disk by $(r,z)\mapsto(r,h(z))$. Applying this to each paired face extends the neighborhood identification over every face; the exterior is treated as a disk on the sphere. After rounding, this is the same regular spherical diagram, and choosing the same outer face gives the planar diagram. The closed braid just described is the standard two-clasp four-crossing figure-eight diagram (equivalently its usual alternating closed-three-braid description). This verifies admission by the full embedded diagram, not solely its under-arc relators. [F6, given, step 1.1, construct, algebra]

3.1 Cutting the oriented visit circle at its four $U$ visits gives the four claimed under-arcs. The intervening $O$ visits put $O1$ on $x_1$, $O3$ on $x_2$, $O4$ on $x_3$, and $O2$ on $x_4$. For a direct side check, let $o_r=rOo-rOi$. The values of $\det(o_r,rUi-C_r)$ are $15840,-2376,-2376,15840$; those of $\det(o_r,rUo-C_r)$ are $-53856,792,792,-53856$. Positive values are the left side. This proves every entry of the crossing table, including which underpass follows the positive normal. By [F2] and [F3], $x_o^{-1}x_Rx_ox_L^{-1}=1$ is equivalently $x_ox_L=x_Rx_o$. Substitution of the four rows gives exactly $R_1,R_2,R_3,R_4$ as displayed. By [F4] these are the actual complement group and positive meridians. Starting at $x_1$ the underpasses are $R_2,R_1,R_3,R_4$ and the corresponding crossing signs sum to $1-1+1-1=0$. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 In the group with the first three relators, left-multiply $R_3$ by $x_1$ and then use $R_1$ and $R_2$ to obtain $$x_1x_3x_2=x_1x_2x_4=x_3x_1x_4=x_3x_4x_2.$$ Right cancellation gives $x_1x_3=x_3x_4$, which is precisely $R_4$. Conversely imposing all four imposes the first three, so [F5] gives inverse identity-on-generator quotient maps. Thus deletion of the fourth relator changes neither the group nor the meridian assignment. [F5, step 3.1, construct, algebra]

5.1 The square is a simple crossing-free polygon with coherent counterclockwise orientation and one component, so it is a valid code with a single under-arc and no crossing scan. Rounding it gives the ordinary planar unknot. By [F2] and [F4] its complement group is $\langle x\mid\ \rangle$. Define the homomorphism from this free group to $\mathbb Z$ by $x\mapsto1$, using [F5], and the homomorphism back by $n\mapsto x^n$. Their composites fix the generator and all integers, respectively, and are identities; the first claim also follows from uniqueness in [F5]. This proves the asserted infinite cyclic group on the positive meridian without imposing any nonexistent crossing relator. [F1, F2, F4, F5, given, construct, algebra] ∎
