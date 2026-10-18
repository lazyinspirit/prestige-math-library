---
id: lem-relative-surface-collars-and-elementary-decomposition
kind: lemma
title: "Face-relative Morse decomposition into the ten sewing generators"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-countable-choice, def-oriented-open-closed-surface-category, def-morse-function-and-excellent-morse-function, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold, thm-collar-neighborhood-theorem, thm-morse-lemma, thm-parametric-transversality]
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
\begin{array}{ll}
\mu_C:C\otimes C\to C,& \eta_C:\varnothing\to C,\\
\Delta_C:C\to C\otimes C,& \epsilon_C:C\to\varnothing,\\
\mu_{abc}:I_{ab}\otimes I_{bc}\to I_{ac},&
\eta_a:\varnothing\to I_{aa},\\
\Delta_{abc}:I_{ac}\to I_{ab}\otimes I_{bc},&
\epsilon_a:I_{aa}\to\varnothing,\\
i_a:C\to I_{aa},&i_a^*:I_{aa}\to C .
\end{array}
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

## Proof

1.1 There are finitely many corners: the depth-two stratum of a compact surface with faces is a closed discrete zero-manifold, so its singleton neighborhoods have a finite subcover. Choose disjoint quadrant charts at these corners. The two coordinate directions in each quadrant give product collars of the two incident faces. Away from these charts, use [F2] on each compact one-face segment; shrink the resulting collars and reparameterize their positive normal coordinates to agree with the quadrant collars on overlaps. Thus the black and free faces have compatible collars. On a black collar prescribe $f=t$ at an incoming face and $f=1-t$ at an outgoing face. [given, F1, F2, construct]

1.2 Each free boundary component is either a circle or an interval between corners. On a circle use $g(s)=\tfrac12+\delta\cos(2\pi s)$ with $0<\delta<1/4$. For an interval, its endpoint values are $0$ or $1$. If they differ, use the monotone profile $g(s)=s$ or $1-s$. If both are $0$, choose a smooth function with derivative $+1$ near the first endpoint, derivative $-1$ near the second, and one simple zero of the derivative in the interior; for example integrate a smooth strictly decreasing function $\theta$ with $\theta(1-s)=-\theta(s)$ and $\theta=\pm1$ near the endpoints. If both endpoints are $1$, use one minus that profile. The endpoint germs match the black-corner collar coordinates. A smooth inward extension $g(s)+t h(s,t)$ is chosen with $h=0$ near the endpoints, so it agrees with the black-corner collars, and $h>0$ at each free-face critical point, so the full differential is nonzero there. Every critical value lies strictly between $0$ and $1$. Since there are finitely many components, choose their positive scales successively so the finitely many circle extrema and interval extrema avoid all previously chosen critical values; each scale ranges over an open interval and has only finitely many forbidden values. [F1, step 1.1, construct]

2.1 Extend these prescribed functions from a smaller collar neighborhood to $M$ by a finite chart cover and smooth bump functions. On the resulting boundary neighborhood the full differential is nonzero: on black faces the collar derivative is nonzero; on free faces either the tangential derivative or the chosen normal derivative is nonzero; at corners the tangential germ is the nonzero linear endpoint germ. Compactness therefore leaves a compact set $K$ in the interior outside which no perturbation is needed. Cover $K$ by finitely many coordinate charts $U_i$ and smaller sets $V_i$ whose union contains $K$. Choose bumps $\chi_i$ supported in $U_i$ and equal to one near $V_i$. The differentials of the finitely many functions $\chi_i x_i^j$ span every cotangent fiber on a neighborhood of $K$. [F1, step 1.1, step 1.2, construct]

2.2 For parameters $a_{ij}$ in a sufficiently small open ball, set $f_a=f_0+\sum_{i,j}a_{ij}\chi_i x_i^j$. The boundary collars and all their restrictions stay fixed. The evaluation map $(p,a)\mapsto d(f_a)_p$ is transverse to the zero section because its parameter derivatives span the cotangent fiber on $K$; outside $K$ the differential was already nonzero. Apply [F3] to this finite-dimensional family: its bad parameter set is null. The parameter ball has positive dimension, so [F4] makes the good parameters dense; in particular it contains a good parameter. The resulting interior critical points are nondegenerate, so by [F6] the restriction is a Morse function there. A nondegenerate zero of the differential is isolated; the critical set is closed and contained in compact $K$, hence finite. [F3, F4, F6, step 2.1, construct]

2.3 Around each of the finitely many interior critical points choose pairwise disjoint bumps equal to one near the point and supported in a small interior chart. On the compact complement of those smaller neighborhoods, $|df|$ has a positive minimum. Choose the bump supports and then the constants small enough that the perturbation gradient is smaller than that minimum on the annuli; no new critical point is created there. Near each critical point the bump is constant, so its differential and Hessian are unchanged while its critical value shifts by that constant. Choose the constants successively to avoid the finite set of free-face and already fixed interior values. The boundary collars stay fixed, and the constants can be small enough that the range remains in $[0,1]$. Thus all critical values are distinct. On a component with no incoming or outgoing black face, first place the free/interior function in a compact subinterval of $(0,1)$; its absent endpoint level is then empty. [step 2.2, step 1.2, construct]

3.1 At an interior index-zero point, a disk is born and the local cobordism is $\eta_C$; at index two, a disk is removed and it is $\epsilon_C$. If an index-one band has only circular black feet, its two attaching intervals merge two circles or split one circle, giving $\mu_C$ or $\Delta_C$. These are the disk and pair-of-pants models given by [F5]; product collars identify their regular-level circles with the prescribed objects. [F1, F5, step 2.2]

3.2 An interior index-one band that meets a free face is not a new generator. In the Morse coordinates $f=f(p)-u^2+v^2$, the local regular level changes by attaching a band to the two feet cut out by the axes. The free boundary has two possible incidences with those feet. In the first incidence, its free segment joins the two affected feet; cut the band along its core and that free segment. Gluing the resulting seam intervals gives the local open-pants/zipper composites of (3.28); the two orders of the black interval feet give the two listed composites. In the second incidence, the free segment meets one foot on each side of the reconnection; the same cuts give the open-pants/zipper composites of (3.29). Reversing height and reversing the left-to-right interval order independently produce its four listed cases. In every case the cut edges pair with opposite induced orientations; the black edge parameterizations match, and the free edges preserve the cyclic color word. The matching extends over each disk patch by radial extension from its boundary, and smoothing it in the fixed seam collars gives an orientation-preserving diffeomorphism relative to the black boundary. This verifies the mixed-saddle factorization cases and shows that neither incidence is an additional generator. [F1, step 1.1, step 2.2, construct]

3.3 Let $p$ be a free-face critical point away from a corner. Its boundary restriction has index $i'(p)=0$ (minimum) or $1$ (maximum), and its normal derivative has sign $+$ or $-$. If $i'=1$ and the normal sign is $-$, the local patch is $\epsilon_a$. If $i'=1$ and the sign is $+$, the patch is $i_a^*$ when the boundary component has two corners and $\mu_{abc}$ when it has six, with the endpoint colors read in their cyclic order. If $i'=0$ and the sign is $+$, the patch is $\eta_a$. If $i'=0$ and the sign is $-$, it is $\Delta_{abc}$ with two corners and $i_a$ with six. These are all cases: the local boundary chart has one free extremum; the two black/free corner incidences are either joined into one interval or leave the two incoming/outgoing interval feet separate. The source and target orientations determine the stated generators. [F1, step 1.2, construct]

3.4 If a boundary critical point has zero normal derivative, its full Hessian is nondegenerate by the boundary Morse condition in [F6]. For a boundary maximum, the tangential Hessian has one negative direction, so the full index is $1$ or $2$; these are the positive- and negative-normal maximum cases in step 3.3. For a boundary minimum, the tangential Hessian is positive, so the full index is $0$ or $1$; these are the positive- and negative-normal minimum cases in step 3.3. In the constructed function $h>0$ at every free-face critical point, so zero-normal cases do not occur. In the one-critical-point slab, the two corner-count alternatives are exhaustive: its boundary component has either exactly two corners, giving the zipper/cozipper chart, or six corners, giving the open-pants chart. Each of the four half-branches of the local Morse chart ends either on the same free interval or on one of the two black level arcs, yielding respectively two or six corners; there is no intermediate configuration. Every patch retains its label because its cut lies in a single colored component. [step 1.2, step 3.3, F5, F6, algebra]

4.1 The critical set is finite and its values are distinct. Choose regular levels immediately before and after each critical value. On a compact slab containing no critical point, choose finitely many local vector fields $X_i$ with $df(X_i)=1$ and a finite smooth partition of unity; their weighted sum $X$ also satisfies $df(X)=1$. Its flow identifies that slab with a product, preserving the face collars and colors. Each critical slab is one of the local models in steps 3.1–3.4, or a mixed saddle factored as in step 3.2. Concatenating the finitely many slabs gives the required word of generators and identity cylinders. For disconnected $M$, perform this finite construction on each connected component and take their ordered tensor product. [F1, step 2.3, step 3.1, step 3.2, step 3.3, step 3.4, construct] ∎
