---
id: ex-hopf-rinow-on-a-flat-cylinder
kind: example
title: Hopf–Rinow on a flat cylinder
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-countable-choice, def-circle-as-real-line-mod-integers, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, prop-coordinate-criterion-for-a-riemannian-metric, prop-real-line-mod-integers-is-compact-and-path-connected, thm-path-connected-implies-connected, cor-connected-subsets-of-the-line, thm-product-of-connected-spaces, prop-christoffel-formula-for-the-levi-civita-connection, prop-coordinate-geodesic-equation, thm-existence-uniqueness-and-smooth-dependence-of-geodesics, def-geodesically-complete-riemannian-manifold, def-domain-and-exponential-map-of-a-connection, thm-hopf-rinow, lem-integer-part, def-riemannian-speed-and-length, def-riemannian-distance-on-a-connected-manifold]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1 and proof, printed pp. 106--108
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: quotient calculation and Hopf--Rinow
---

## Example

Assume $\mathrm{AC}_\omega$. Give
$$ C=(\mathbb R/\mathbb Z)\times\mathbb R $$
the product of the circumference-one flat metric $d\theta^2$ on
$\mathbb R/\mathbb Z$ and the Euclidean metric $dy^2$ on $\mathbb R$. Then
$C$ is metrically complete and proper (every closed bounded subset is
compact), and every two points are joined by a minimizing geodesic. In fact,
if
$$ P=([x],y),\qquad Q=([x'],y'),\qquad k=\left\lfloor x-x'+\frac12\right\rfloor, $$
then, with $\delta=x'-x+k$ and $\Delta y=y'-y$, one minimizing geodesic is
$$ \sigma(t)=([x+t\delta],y+t\Delta y),\qquad 0\leq t\leq1, $$
and
$$ d_C(P,Q)=\sqrt{\delta^2+(\Delta y)^2}. $$
At every $P$, under the lifted-coordinate identification
$T_PC\cong\mathbb R^2$,
$$ \exp_P(a,b)=([x+a],y+b), $$
so the exponential map is not injective: $(0,0)$ and $(1,0)$ are distinct
tangent vectors with the same image.

## Facts & Assumptions

**Given:** The quotient-circle convention, product metric, points, and lifts in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$. It is used through the current maximal-geodesic, exponential-map, geodesic-completeness, and Hopf--Rinow interfaces below. The quotient, nearest-translate, length, and noninjectivity calculations themselves are choice-free.

[F1] [[def-circle-as-real-line-mod-integers]] gives $[r]=[s]$ exactly when $r-s\in\mathbb Z$ and gives the quotient topology. The projection is open because the saturation of an open interval $I$ is $\bigcup_{m\in\mathbb Z}(I+m)$. On an interval of length less than one it is injective and therefore a chart homeomorphism onto its open image. Distinct orbits have disjoint sufficiently small chart intervals, and images of rational intervals form a countable basis. Overlap coordinates differ by integer translations with derivative one, giving a smooth boundaryless circle and a well-defined local tensor $d\theta^2$.

[F2] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]] gives $C$ its product smooth structure. The stipulated metric $d\theta^2+dy^2$ has zero cross term and unit diagonal coefficients in every lifted product chart. The translation overlaps in [F1] leave this matrix $I_2$ unchanged, and [[prop-coordinate-criterion-for-a-riemannian-metric]] makes it a smooth positive-definite Riemannian metric.

[F3] [[prop-real-line-mod-integers-is-compact-and-path-connected]] and [[thm-path-connected-implies-connected]] make $\mathbb R/\mathbb Z$ connected. The real line is an interval and hence connected by [[cor-connected-subsets-of-the-line]]. Therefore [[thm-product-of-connected-spaces]] makes $C$ connected.

[F4] [[prop-christoffel-formula-for-the-levi-civita-connection]] makes all Christoffel symbols vanish in the lifted coordinates where the metric matrix is $I_2$, and [[prop-coordinate-geodesic-equation]] then makes affine coordinate lines geodesics. Under [A1], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] identifies the unique maximal geodesic for each initial vector; [[def-geodesically-complete-riemannian-manifold]] and [[def-domain-and-exponential-map-of-a-connection]] give the current meanings of geodesic completeness and the time-one exponential map.

[F5] Under [A1], [[thm-hopf-rinow]] makes geodesic completeness equivalent to metric completeness and to compactness of every closed bounded subset, and it supplies a minimizing geodesic between every two points.

[F6] [[lem-integer-part]] gives the unique integer $\lfloor r\rfloor$ with $\lfloor r\rfloor\leq r<\lfloor r\rfloor+1$. The nearest-integer comparison needed below is proved directly in step 1.3 from this inequality, including the tied half-integer case.

[F7] [[def-riemannian-speed-and-length]] computes lengths from speeds, and [[def-riemannian-distance-on-a-connected-manifold]] defines distance as the infimum of competitor lengths.

## Verification

**Proof technique:** quotient calculation and Hopf--Rinow.

1.1 By [F1] the circle has lifted charts onto open intervals in $\mathbb R$, and [F2] makes their products with real intervals smooth charts for $C$ whose metric matrix is $I_2$. These charts have no half-space boundary, so $C$ is a boundaryless two-dimensional Riemannian manifold. It is nonempty, containing $([0],0)$. Replacing a lift $x$ by $x+m$, $m\in\mathbb Z$, changes a lifted coordinate by a translation with identity derivative, so the tangent coordinates $(a,b)$ used in the statement are well-defined. [F1, F2]

1.2 The cylinder is connected by [F3]. [F3]

1.3 Put $a=x-x'$, let $m=\lfloor a\rfloor$ and $t=a-m\in[0,1)$, and put $k=\lfloor a+1/2\rfloor$. If $t<1/2$, uniqueness in [F6] gives $k=m$ and $\delta=k-a=-t$; if $t\geq1/2$, it gives $k=m+1$ and $\delta=1-t$. For any integer $j\leq m$, one has $|a-j|=a-j\geq t$; for any $j\geq m+1$, one has $|a-j|=j-a\geq1-t$. Both bounds are attained at $m$ or $m+1$, respectively. Thus $$ |\delta|=\min\{t,1-t\}\leq|a-j|=|x'-x+j|\qquad(j\in\mathbb Z), $$ including the tied case $t=1/2$. If the lifts are changed to $x+r,x'+s$, with $r,s\in\mathbb Z$, applying the uniqueness in [F6] to $a+1/2+r-s$ changes $k$ to $k+r-s$, leaving $\delta$ unchanged. Thus both the nearest displacement and the formula in the statement are independent of the chosen lifts. [F6, algebra]

2.1 For $P=([x],y)$ and $(a,b)\in T_PC\cong\mathbb R^2$, define $$ \gamma_{P,(a,b)}(t)=([x+ta],y+tb),\qquad t\in\mathbb R. $$ Near each parameter value, a lifted product chart represents this curve by an affine line. The matrix $I_2$ from step 1.1 has zero derivatives, so [F4] gives zero Christoffel symbols and verifies the coordinate geodesic equation. Thus the curve is a geodesic. Its initial data are $P,(a,b)$, and the formula is independent of the representative $x$ by [F1]. Maximal-geodesic uniqueness in [F4] identifies it with the maximal geodesic for those data, whose domain is therefore all of $\mathbb R$. Since the initial data were arbitrary, $C$ is geodesically complete, and the time-one definition in [F4] gives $$ \exp_P(a,b)=([x+a],y+b). $$ [A1, F1, F4, step 1.1]

3.1 Steps 1.1--2.1 verify the nonempty, connected, boundaryless, and geodesically complete hypotheses of [F5]. Hopf--Rinow therefore makes $(C,d_C)$ a complete metric space, makes every closed bounded subset of it compact, and supplies a minimizing geodesic between any two points. This is the asserted completeness, properness, and existence claim. [A1, F5, step 1.1, step 1.2, step 2.1]

3.2 The curve $\sigma$ in the statement is the restriction of the all-real geodesic in step 2.1 with initial velocity $(\delta,\Delta y)$. Its endpoint is $([x+\delta],y+\Delta y)=([x'+k],y')=Q$ by [F1]. Its speed is the constant $\sqrt{\delta^2+(\Delta y)^2}$, so [F7] gives the same number for its length. [F1, F2, F7, step 1.3, step 2.1]

3.3 The exponential formula in step 2.1 gives $$ \exp_P(0,0)=P=\exp_P(1,0). $$ The two tangent vectors are distinct, so every fibre exponential map is noninjective. [F1, step 2.1]

4.1 Under [A1], let $\eta:[0,1]\to C$ be the minimizing geodesic from $P$ to $Q$ supplied in step 3.1. By step 2.1 it has the form $$ \eta(t)=([x+tA],y+tB) $$ for its initial velocity $(A,B)$. The endpoint condition and [F1] give $B=\Delta y$ and $A=x'-x+j$ for some $j\in\mathbb Z$. Therefore [F2], [F7], and step 1.3 give $$ L(\eta)=\sqrt{(x'-x+j)^2+(\Delta y)^2} \geq\sqrt{\delta^2+(\Delta y)^2}=L(\sigma). $$ But $L(\eta)=d_C(P,Q)$, while the infimum definition [F7] gives $d_C(P,Q)\leq L(\sigma)$. Equality holds throughout. Thus $\sigma$ is minimizing and the displayed distance formula is proved. [A1, F1, F2, F7, step 1.3, step 2.1, step 3.1, step 3.2]

5.1 If $P=Q$, the fibre criterion in [F1] says $x-x'$ is an integer, so the uniqueness in [F6] gives $k=x-x'$, $\delta=0$, and $\Delta y=0$; thus $\sigma$ is the constant zero-length geodesic. When $|\delta|=1/2$, the adjacent integer translate gives a second minimizer of the same length; uniqueness is not claimed. The closed parameter endpoints $0,1$ were evaluated in step 3.2. The cylinder is explicitly nonempty and two-dimensional, while the one-dimensional periodic factor and the period-one tangent vector are exactly what produce step 3.3; no empty or zero-dimensional case is being asserted. There is no iff claim in this example. Assumption [A1] is used only through [F4]--[F5] in steps 2.1, 3.1, and 4.1; the explicit formulas make no choices. [A1, F1, F4, F5, F6, step 1.3, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Source locator

Andrews, Theorem 11.5.1 and its complete proof, printed pp. 106--108 (PDF pp. 6--8), proves the equivalence of metric completeness and global geodesic extension and the existence of minimizing geodesics. The quotient atlas, nearest-integer minimizer, distance formula, properness specialization, and noninjective exponential witnesses for this flat cylinder are verified locally above; Andrews is not claimed as a source for those calculations.
