---
id: lem-relative-surface-collars-and-elementary-decomposition
kind: lemma
title: "Face-relative Morse decomposition into the ten sewing generators"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, def-countable-choice, def-oriented-open-closed-surface-category, def-morse-function-and-excellent-morse-function, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold, thm-collar-neighborhood-theorem, thm-morse-lemma, thm-parametric-transversality]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "ACω is used for the smooth collar and parametric-transversality/dense-complement suppliers. All chart, bump, and boundary-label choices after compactness are finite."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "Proposition 3.8–3.9, PDF pp. 18–20; the local proof supplies the special function construction and expands the mixed saddle factorizations."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "Appendix A.2, printed pp. 71–80: open/closed boundary critical points and the Morse decomposition proof."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§1.3, PDF pp. 12–18, for the independent closed Morse-cut convention."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact oriented smooth surface with black incoming/outgoing boundary, colored free boundary, and compatible corner collars as in [[def-oriented-open-closed-surface-category]]. There is a smooth function $f:M\to[0,1]$ such that:

- $f^{-1}(0)$ is exactly the incoming black boundary and $f^{-1}(1)$ is exactly the outgoing black boundary; an absent incoming or outgoing boundary is the empty level;
- near each black face, $f$ is its inward collar coordinate or one minus that coordinate, so it has no relative critical point there;
- on each free boundary face, the restriction is a Morse function with no critical point at a corner, and the normal derivative is nonzero at each of its critical points;
- each interior critical point is nondegenerate, and all interior and free-face critical values are distinct.

Cutting $M$ at regular levels between its finitely many critical values expresses its morphism as a finite composite of identity cylinders and the following ten boundary-relative cobordisms, with each local color retained:
$$
\begin{array}{ll} \mu_C:C\otimes C\to C,& \eta_C:\varnothing\to C,\\ \Delta_C:C\to C\otimes C,& \epsilon_C:C\to\varnothing,\\ \mu_{abc}:I_{ab}\otimes I_{bc}\to I_{ac},& \eta_a:\varnothing\to I_{aa},\\ \Delta_{abc}:I_{ac}\to I_{ab}\otimes I_{bc},& \epsilon_a:I_{aa}\to\varnothing,\\ i_a:C\to I_{aa},&i_a^*:I_{aa}\to C . \end{array}
$$
Here a **regular level** is a level at which the interior differential and every free-face tangential derivative are nonzero. A **critical index** is the number of negative squares in the interior Morse normal form, or $0$ for a free-face minimum and $1$ for a free-face maximum.

## Local-model diagram

This case diagram summarizes which generator family a one-critical-point slab belongs to. The proof below supplies the chart and boundary-label argument; the diagram is only a case index and is not used as a proof.

~~~tikzcd
\text{interior index }0 \arrow[r, "\text{disk birth}"] & \eta_C
\\
\text{interior index }2 \arrow[r, "\text{disk death}"] & \epsilon_C
\\
\text{interior index }1,\ \text{circular feet}
  \arrow[r, "\text{merge/split}"] & \mu_C\text{ or }\Delta_C
\\
\text{mixed interior index }1 \arrow[r, "\text{two incidences; cut at core and free face}"]
  & \text{composites of the ten generators}
\\
\text{free-face critical point}\arrow[r, "\text{index and normal sign}"]
  & \eta_a,\epsilon_a,\mu_{abc},\Delta_{abc},i_a,i_a^*
~~~

## Facts & Assumptions

**Given:** The compact oriented surface and its black/free face labels and collars, $\mathrm{AC}_\omega$, and the ten object types above.

[F1] The category in [[def-oriented-open-closed-surface-category]] fixes black parameterizations, free-face colors, corner charts, and the boundary-relative equivalence used for cutting and gluing.

[F2] Under $\mathrm{AC}_\omega$, smooth collars exist for the faces ([[thm-collar-neighborhood-theorem]]).

[F3] Under $\mathrm{AC}_\omega$, the bad parameter set for a finite-dimensional smooth family transverse to the zero section is a null subset of the parameter manifold ([[thm-parametric-transversality]]).

[F4] In a positive-dimensional manifold, a null subset has dense complement; under $\mathrm{AC}_\omega$ this holds for manifold-null sets ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F5] Near an interior nondegenerate critical point, there are coordinates in which $f=f(p)-|u|^2+|v|^2$ ([[thm-morse-lemma]]).

[F6] A smooth function is Morse when all its critical points are nondegenerate, and excellent when those critical values are pairwise distinct ([[def-morse-function-and-excellent-morse-function]]).

[F7] A smooth Euclidean map with invertible derivative is a local diffeomorphism without a choice assumption ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

## Proof

1.1 There are finitely many corners: the depth-two stratum of a compact surface with faces is a closed discrete zero-manifold, so its singleton neighborhoods have a finite subcover. Choose disjoint quadrant charts at these corners. The two coordinate directions in each quadrant give product collars of the two incident faces. Delete smaller quadrant neighborhoods, round their new junctions inside those neighborhoods, and apply [F2] to the remaining ambient smooth surface with boundary. Restrict its collars to the remaining original face arcs. Interpolate the associated inward transverse fields with the coordinate normal fields on the finite overlaps, keeping the latter fields fixed in smaller quadrant charts. Positivity of the inward component is preserved by the partition-of-unity interpolation. The two fields commute and are tangent to the opposite face in those smaller charts, so their flows give exactly the product corner collars; elsewhere the faces are disjoint. Thus the black and free faces have compatible collars. On a black collar prescribe $f=t$ at an incoming face and $f=1-t$ at an outgoing face. [given, F1, F2, construct]

2.1 Each free boundary component is either a circle or an interval between corners. On a circle use $g(s)=\tfrac12+\delta\cos(2\pi s)$ with $0<\delta<1/4$. For an interval, its endpoint values are $0$ or $1$. If they differ, use the monotone profile $g(s)=s$ or $1-s$. If both are $0$, choose a smooth function with derivative $+1$ near the first endpoint, derivative $-1$ near the second, and one simple zero of the derivative in the interior; for example integrate a smooth strictly decreasing function $\theta$ with $\theta(1-s)=-\theta(s)$ and $\theta=\pm1$ near the endpoints. If both endpoints are $1$, use one minus that profile. The endpoint germs match the black-corner collar coordinates. A smooth inward extension $g(s)+t h(s,t)$ is chosen with $h=0$ near the endpoints, so it agrees with the black-corner collars, and $h>0$ at each free-face critical point, so the full differential is nonzero there. Every critical value lies strictly between $0$ and $1$. Since there are finitely many components, choose their positive scales successively so the finitely many circle extrema and interval extrema avoid all previously chosen critical values; each scale ranges over an open interval and has only finitely many forbidden values. [F1, step 1.1, construct]

3.1 Extend these prescribed functions from a smaller collar neighborhood to $M$ by a finite chart cover and smooth bump functions. On the resulting boundary neighborhood the full differential is nonzero: on black faces the collar derivative is nonzero; on free faces either the tangential derivative or the chosen normal derivative is nonzero; at corners the tangential germ is the nonzero linear endpoint germ. Compactness therefore leaves a compact set $K$ in the interior outside which no perturbation is needed. Cover $K$ by finitely many coordinate charts $U_i$ and smaller sets $V_i$ whose union contains $K$. Choose bumps $\chi_i$ supported in $U_i$ and equal to one near $V_i$. The differentials of the finitely many functions $\chi_i x_i^j$ span every cotangent fiber on a neighborhood of $K$. [F1, step 1.1, step 2.1, construct]

4.1 For parameters $a_{ij}$ in a sufficiently small open ball, set $f_a=f_0+\sum_{i,j}a_{ij}\chi_i x_i^j$. The boundary collars and all their restrictions stay fixed. The evaluation map $(p,a)\mapsto d(f_a)_p$ is transverse to the zero section because its parameter derivatives span the cotangent fiber on $K$; outside $K$ the differential was already nonzero. Apply [F3] to this finite-dimensional family: its bad parameter set is null. The parameter ball has positive dimension, so [F4] makes the good parameters dense; in particular it contains a good parameter. The resulting interior critical points are nondegenerate, so by [F6] the restriction is a Morse function there. A nondegenerate zero of the differential is isolated; the critical set is closed and contained in compact $K$, hence finite. [F3, F4, F6, step 3.1, construct]

5.1 Around each of the finitely many interior critical points choose pairwise disjoint bumps equal to one near the point and supported in a small interior chart. On the compact complement of those smaller neighborhoods, $|df|$ has a positive minimum. Choose the bump supports and then the constants small enough that the perturbation gradient is smaller than that minimum on the annuli; no new critical point is created there. Near each critical point the bump is constant, so its differential and Hessian are unchanged while its critical value shifts by that constant. Choose the constants successively to avoid the finite set of free-face and already fixed interior values. The boundary collars stay fixed, and the constants can be small enough that the range remains in $[0,1]$. Thus all critical values are distinct. On a component with no incoming or outgoing black face, first place the free/interior function in a compact subinterval of $(0,1)$; its absent endpoint level is then empty. [step 4.1, step 2.1, construct]

5.2 An interior critical point of index zero or two has a disk birth or death neighborhood by the Morse lemma, giving $\eta_C$ or $\epsilon_C$. An interior saddle is a rectangular band attached to two disjoint subintervals of the preceding regular level. This level is a compact one-manifold, so each affected component is a circle or an interval. The band is untwisted, because its orientation extends that of the surface. If both affected level components are circular, or both feet lie on one circular component, the usual two circle configurations give $\mu_C$ or $\Delta_C$. If an interval occurs, the only possibilities are two distinct intervals, two feet on one interval, or one interval and one circle. Indeed these exhaust whether the two feet belong to the same or different level components and whether those components have endpoints. Two feet on a single interval split it into an interval and a circle; reversing the slab gives the interval/circle merge. Two different intervals are reconnected into two intervals. A twisted reconnection would give a nonorientable band and is excluded. [F1, F5, step 4.1, construct]

6.1 The six mixed representatives and their types are the following. A permutation of the listed input or output slots is implemented by the symmetry cylinders; it never changes an interval's own endpoint labels. In rows 1–2 the canonical type is $I_{ab}\otimes I_{cd}\to I_{ad}\otimes I_{cb}$. These are the two choices of which incoming interval is split in a two-interval reconnection. Rows 3–6 have the types shown. The letter at a newly exposed free edge is determined by the free edge already meeting that end of the slab, so no arbitrary color is introduced. [F1, step 5.2, construct]

6.2 At a free critical point the tangential restriction has a nondegenerate extremum and the inward normal derivative is nonzero by construction. In coordinates $t\ge0$ inward and $s$ tangential its chart can be taken as $f=f(p)\pm s^2\pm t$: apply [F7] to the map $(s,t)\mapsto(s,f(s,t)-f(s,0))$, whose Jacobian determinant is the nonzero inward normal derivative, followed by the one-dimensional Morse coordinate on the boundary. A free minimum with positive inward normal derivative births an interval and gives $\eta_a$; a free maximum with negative inward derivative kills one and gives $\epsilon_a$. A free maximum with positive inward derivative joins the two local level ends: if they close the one interval into a circle the slab is $i_a^*$ (two corners), and otherwise they join two intervals into one, giving $\mu_{abc}$ (six corners). A free minimum with negative inward derivative is the reverse: $i_a$ has two corners and $\Delta_{abc}$ has six. The label at the extremum is the label of the single free face through that point; all other endpoint labels are carried by product collars. There is no zero-normal-derivative case in the function constructed in the preceding boundary-relative construction, and no assertion about a full boundary Hessian is needed. [F1, step 2.1, step 5.1, F7, construct]

7.1 Here is a boundary-relative verification of the cuts in that table. Write $X^-$ for an incoming black interval read in induced surface-boundary orientation, $U^+$ for an outgoing interval, and $F_s$ for an intervening free arc of color $s$. In rows 1–2, call the inputs $X=I_{ab},Y=I_{cd}$ and outputs $U=I_{ad},V=I_{cb}$. Cutting the one-saddle slab along the band core and extending the cut through its product-level collars produces a disk whose boundary word is $U^+F_dY^-F_cV^+F_bX^-F_a.$ For row 1 cut the $\Delta_{acb}$/$\mu_{acd}$ seam $I_{ac}$; for row 2 cut the $\Delta_{cbd}$/$\mu_{abd}$ seam $I_{bd}$. Each composite consists of two disks joined along that seam. Reading the remaining edges gives precisely the displayed word. The apparent crossing in each formula is a permutation of black slots; it does not identify any free edges. In rows 3–4 the slab and composite are annuli. Their boundary words are $(U^+F_bX^-F_a)$ and the incoming closed circle $Z^-$. Cut an arc from $Z$ to $F_a$ for row 3 or to $F_b$ for row 4, and denote its sides by $s,s^{-1}$. The resulting disk word is $(U^+F_bX^-F_a)sZ^-s^{-1}$, with its basepoint cyclically shifted to the indicated free arc. The cut passes through the zipper and product pieces; cutting the composite along its interval seam gives the same disk and the same pairing of the $s$ sides. Rows 5–6 are the height reversals of these annular cut models, with the original interval parameterizations retained. Matching these disk words gives diffeomorphisms relative to black collars: after rounding their nonblack corners, an orientation-preserving circle map extends across the disk by interpolating its lifted angular map to the identity near the disk center; on a prescribed boundary collar use its product extension. Regluing each pair $s,s^{-1}$ recovers the annular diffeomorphism. Thus these are actual local factorizations, including the two interval reconnections and all four interval/circle orientations. [F1, step 5.2, step 6.1, construct]

8.1 The critical set is finite and its values are distinct. Choose regular levels immediately before and after each critical value. On a compact slab containing no critical point, choose local fields tangent to every free face: there set $X_i=(\partial_s f)^{-1}\partial_s$ in its boundary coordinate and extend tangentially through a smaller collar; in interior charts choose $df(X_i)=1$. Use a finite smooth partition of unity. Their weighted sum $X$ satisfies $df(X)=1$ and remains tangent to every incident free face, since both properties are preserved by that weighted sum. Its flow identifies that slab with a product, preserving the face collars and colors. Each critical slab is one of the interior and free-boundary local models above, or a mixed saddle factored as in step 6.1. Concatenating the finitely many slabs gives the required word of generators and identity cylinders. For disconnected $M$, perform this finite construction on each connected component and take their ordered tensor product. [F1, step 5.1, step 5.2, step 6.1, step 7.1, step 6.2, construct] ∎

## Proof tables

| Row | Composite | Type |
|---|---|---|
| 1 | $(\mu_{acd}\otimes1_{I_{cb}})(1_{I_{ac}}\otimes\tau_{I_{cb},I_{cd}})(\Delta_{acb}\otimes1_{I_{cd}})$ | $I_{ab}\otimes I_{cd}\to I_{ad}\otimes I_{cb}$ |
| 2 | $(\mu_{abd}\otimes1_{I_{cb}})(1_{I_{ab}}\otimes\tau_{I_{cb},I_{bd}})(1_{I_{ab}}\otimes\Delta_{cbd})$ | $I_{ab}\otimes I_{cd}\to I_{ad}\otimes I_{cb}$ |
| 3 | $\mu_{aab}(i_a\otimes1_{I_{ab}})$ | $C\otimes I_{ab}\to I_{ab}$ |
| 4 | $\mu_{abb}(1_{I_{ab}}\otimes i_b)$ | $I_{ab}\otimes C\to I_{ab}$ |
| 5 | $(i_a^*\otimes1_{I_{ab}})\Delta_{aab}$ | $I_{ab}\to C\otimes I_{ab}$ |
| 6 | $(1_{I_{ab}}\otimes i_b^*)\Delta_{abb}$ | $I_{ab}\to I_{ab}\otimes C$ |


