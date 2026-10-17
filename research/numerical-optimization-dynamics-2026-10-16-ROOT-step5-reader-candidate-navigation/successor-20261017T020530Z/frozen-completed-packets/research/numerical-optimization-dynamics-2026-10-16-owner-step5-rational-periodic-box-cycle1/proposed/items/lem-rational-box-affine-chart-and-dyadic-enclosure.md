---
id: lem-rational-box-affine-chart-and-dyadic-enclosure
kind: lemma
title: "Rational boxes admit dyadic enclosure boundaries and exact affine root charts"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - thm-rat-ordered-field
  - def-dyadic-floating-point-format-and-directed-rounding
  - lem-directed-dyadic-rounding-enclosure-and-error
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Sections 4–5.3 for exact rational intermediates and directed enclosure, and section 13 for interval root certification; the combined affine bookkeeping statement and its proof are composed locally from the explicit suppliers, not claimed to be an identical theorem in the source."
---

## Statement

For nonempty closed intervals with finite rational endpoints, the exact endpoint formulas
$$[a,b]+[c,d]=[a+c,b+d],\qquad [a,b]-[c,d]=[a-d,b-c],$$
and the four-corner minimum and maximum for multiplication enclose every corresponding exact scalar value. Division uses the reciprocal interval $[1/d,1/c]$ only when $0\notin[c,d]$. Every endpoint obtained in a finite such expression is rational. Replacing an exact rational interval $[l,u]$ by $[\operatorname{rd}(l),\operatorname{ru}(u)]$ in a selected dyadic format preserves inclusion whenever both returned endpoints are finite; a failed operation, unavailable exact computation, or overflow gives no finite-enclosure claim. This applies entrywise to vectors and matrices. For a point vector enclosure with midpoint $\widehat v$ and coordinate radii $r_i$, $\sum_i r_i$ bounds the Euclidean error of $\widehat v$. For a point matrix enclosure with midpoint $\widehat A$ and entry radii $s_{ij}$, $\sum_{i,j}s_{ij}$ bounds its Euclidean operator error. If a rational matrix $V$ is checked to satisfy $V\widehat A=\widehat A V=I$, then $\sum_{i,j}|V_{ij}|$ bounds $\|\widehat A^{-1}\|_{\rm op}$.

Let $N\ge1$, let $Z=\prod_{j=1}^N[a_j,b_j]$ have finite rational endpoints with $a_j<b_j$, put $D=\operatorname{diag}(b_j-a_j)$, and set $T(u)=a+Du$. Then $T$ maps the dyadic box $B=[0,1]^N$ bijectively onto $Z$, maps closed subboxes and their midpoints to their exact rational images and midpoints, and maps every finite covering partition of $B$ to a covering partition of $Z$. If $F:V\to\mathbb R^N$ is $C^1$ on an open convex neighborhood $V$ of $Z$, then $\widehat F=F\circ T$ is $C^1$ on the open convex neighborhood $T^{-1}(V)$ of $B$, with
$$D\widehat F(u)=DF(T(u))D.$$
A residual enclosure for $F(T(m))$ encloses $\widehat F(m)$, and a physical Jacobian enclosure $J(T(A))$ on a subbox $T(A)$ gives a normalized Jacobian enclosure $J(T(A))D$ on $A$, evaluated by the preceding rational endpoint rules and converted outward to finite dyadic intervals. Zeros and root-free, existence, and uniqueness conclusions transfer bijectively between each subbox $A$ and $T(A)$; no assumption about an ordering of roots is needed. If $C$ and $C\,DF(T(u))D$ are nonsingular, then $DF(T(u))$ is nonsingular as well.

## Facts & Assumptions

**Given:** The finite rational interval data, the selected dyadic format, and, for the chart assertions, the positive side lengths, $F,V,T,B,D$ in the Statement.

[F1] The rationals form an ordered field, so finite sums, products and division by nonzero rationals remain rational ([[thm-rat-ordered-field]]).

[F2] An exact rational intermediate can be converted by exact numerator/denominator comparison to the selected format's greatest lower and least upper representable values; overflow is explicit ([[def-dyadic-floating-point-format-and-directed-rounding]]).

[F3] Directed roundings enclose each finite exact value; overflow does not give finite endpoints ([[lem-directed-dyadic-rounding-enclosure-and-error]]).

[F4] The total derivative of a composite is the composite of its total derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F5] Cauchy–Schwarz and the Euclidean norm imply $|x_j|\le\|x\|_2$ and $\|x\|_2\le\sum_j|x_j|$ for finite real vectors ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 For addition and subtraction, the scalar order inequalities give the displayed endpoint bounds. For multiplication with one argument fixed, the product is affine in the other argument and lies between its two endpoint values; repeating this for the first argument bounds every product by the minimum and maximum of the four corners. On an interval not containing zero, the reciprocal function reverses order, so its values lie in $[1/d,1/c]$; multiplication then gives division bounds. Each endpoint is rational by [F1]. Induction over a finite expression applies these bounds to every actual predecessor value, so every exact expression value lies in the computed rational enclosure. A domain failure or unavailable operation ends this assertion. [given, F1, algebra, induction]

2.1 If the rational result is $[l,u]$ and both directed endpoints are finite, [F2] and [F3] give $\operatorname{rd}(l)\le l\le u\le\operatorname{ru}(u)$. Thus its dyadic replacement contains the full rational enclosure and every exact value established in step 1.1. Apply this separately to each coordinate or matrix entry. An overflow sentinel is not a finite interval and cannot supply the finite-return assertion. [given, F2, F3, step 1.1, algebra]

2.2 An enclosed vector differs from its midpoint by coordinate errors of magnitude at most $r_i$, so [F5] bounds its Euclidean error by $\sum_i r_i$. If a matrix error $E$ has $|E_{ij}|\le s_{ij}$ and $\|x\|_2=1$, then $|x_j|\le1$ and $\|Ex\|_2\le\sum_i|(Ex)_i|\le\sum_{i,j}s_{ij}$. Taking the supremum over unit vectors proves the matrix-error bound. The same calculation for the exact inverse matrix $V$ gives $\|V\|_{\rm op}\le\sum_{i,j}|V_{ij}|$; its two checked inverse identities identify it with $\widehat A^{-1}$. These estimates are conservative and finite, not relative-error assertions. [given, F5, algebra]

3.1 Each $d_j=b_j-a_j$ is positive. The inverse $T^{-1}(z)_j=(z_j-a_j)/d_j$ is well-defined and sends $[a_j,b_j]$ bijectively onto $[0,1]$. Hence $T(B)=Z$ bijectively. For a subbox $A=\prod_j[l_j,u_j]$, positivity gives $T(A)=\prod_j[a_j+d_jl_j,a_j+d_ju_j]$; its endpoints are rational when those of $A$ are dyadic or rational. Affineness gives $T((l+u)/2)=(T(l)+T(u))/2$. Images commute with unions and preserve intersections under a bijection, so finite coverage and disjoint interiors of partitions transfer, including shared bisection faces. [given, F1, algebra]

4.1 The affine maps $T$ and its displayed inverse are continuously differentiable with constant derivatives $D$ and $D^{-1}$. Thus $T^{-1}(V)$ is open, is convex because affine maps preserve segments, and contains $B$. By [F4], $D\widehat F(u)=DF(T(u))D$. A point residual enclosure therefore applies unchanged to $\widehat F(m)$. On $A$, every physical derivative lies entrywise in $J(T(A))$ and right multiplication by $D$ multiplies column $j$ by the positive scalar $d_j$; steps 1.1 and 2.1 give the stated finite dyadic enclosure. No transformed point is queried outside the original physical box. [given, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 The identity $\widehat F(u)=F(T(u))$ and the bijection in step 3.1 identify each zero in $A$ with exactly one zero in $T(A)$. Empty-root, at-least-one-root and at-most-one-root statements therefore transfer in both directions, and finite partition coverage transfers as well. Finally write $J=DF(T(u))$ and $A=CJD$. If $A$ and $C$ are nonsingular, then $D A^{-1}C$ is a two-sided inverse for $J$: $JDA^{-1}C=C^{-1}AA^{-1}C=I$ and $DA^{-1}CJ=DA^{-1}AD^{-1}=I$. This proves the last assertion using the explicit invertibility of $D$, without a norm comparison between physical and normalized coordinates. [given, step 3.1, step 4.1, algebra] ∎
