---
id: lem-gr-compact-variation-coefficient-vanishing
kind: lemma
title: "A continuous symmetric coefficient orthogonal to every compactly supported variation vanishes"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-covariant-two-tensor-transformation-law, cor-inverse-matrix-by-adjugate, def-gr-smooth-covariant-two-tensor-field, def-smooth-manifold, lem-smooth-bump-between-concentric-euclidean-balls, thm-continuous-on-a-rectangle-is-riemann-integrable, def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, def-continuity-real]
dependency_roles:
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-manifold: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "S. M. Chong and W. Kendall, 'the fundamental lemma of the calculus of variations' argument: a continuous function orthogonal to every compactly supported smooth test function vanishes; see also the bump construction used by S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the variation of the Einstein-Hilbert action (4.66)-(4.68): arbitrary variations force the coefficient to vanish, printed p. 117 (PDF p. 124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.2-9.3 (9.23)-(9.29): a compactly supported metric variation localized about any point and the resulting field equation, printed pp. 113-116 (PDF pp. 114-117)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $M$ be a smooth four-manifold, let $g$ be a smooth symmetric nondegenerate
covariant $2$-tensor field on $M$
([[def-gr-smooth-covariant-two-tensor-field]]), and let $(U,x)$ be any smooth
chart, with indices $a,b,c,d=0,1,2,3$. Write $g_{ab}=g(\partial_a,\partial_b)$,
let $(g^{ab})$ be the inverse matrix of $(g_{ab})$, and define the strictly
positive chart weight $w:=\sqrt{|\det(g_{ab})|}$ on $U$. These are local
matrix constructions; no signature, time orientation or orientation is assumed.
A continuous covariant tensor field means a family of bilinear forms whose
chart components are continuous; smooth means that they are $C^\infty$.
For a covector or vector field the same regularity convention applies to its
components in the coordinate dual basis or coordinate basis, respectively.
Let $F$ be a
continuous symmetric covariant $2$-tensor field on $U$. Suppose that for every
smooth symmetric covariant $2$-tensor field $q$ on $M$ whose support is a
compact subset of $U$,

$$\int_U F_{ab}(x)\,q^{ab}(x)\,w(x)\,d^4x=0,$$

where $q^{ab}=g^{ac}g^{bd}q_{cd}$ are the components of $q$ raised with the
inverse metric and the integral is the ordinary Riemann integral of the
continuous compactly supported function
$F_{ab}q^{ab}w$ in the chart coordinates
([[def-multidimensional-darboux-integral]]). Then
$F=0$ on $U$. Moreover, if $W$ is a continuous covector field on $U$ with
$\int_UW_a(x)\,q^a(x)\,w(x)\,d^4x=0$ for every smooth vector field $q$ on $M$
whose support is a compact subset of $U$, then $W=0$ on $U$.

## Facts & Assumptions

**Given:** A smooth four-manifold $M$, a smooth symmetric nondegenerate covariant $2$-tensor field $g$, a chart $(U,x)$ with metric density $w>0$, and a continuous symmetric field $F$ on $U$ with the stated orthogonality property.

[L1] In each chart $g^{ab}$ is smooth: the adjugate formula writes each entry as a polynomial in the smooth $g_{cd}$ divided by the nowhere-zero determinant ([[cor-inverse-matrix-by-adjugate]]). Matrix multiplication gives $g^{ac}g_{cb}=\delta^a{}_b$. Thus raising $q^{ab}=g^{ac}g^{bd}q_{cd}$ and lowering $q_{ab}=g_{ac}g_{bd}q^{cd}$ are inverse operations preserving symmetry, smoothness and support. Also $w$ is smooth and positive, since the determinant is smooth, nowhere zero and has constant sign near each point.

[L2] Components prescribed smoothly with compact support inside one chart extend by zero to a smooth field on $M$. For a covariant $2$-tensor this follows from the smooth Jacobian transformation law of [[lem-gr-covariant-two-tensor-transformation-law]] on overlaps; outside its closed support it is zero on a neighborhood. For vectors and covectors the same assertion follows from the coordinate-basis change $\partial/\partial y^a=(\partial x^c/\partial y^a)\partial/\partial x^c$ and its dual: all transition coefficients are smooth ([[def-smooth-manifold]]). Compact support in the chart ensures smoothness at points outside the chart as well.

[L3] For $0<r<R$ there is a smooth function $\rho:\mathbb R^4\to[0,1]$ with $\rho=1$ on the closed ball of radius $r$ about $0$ and support in the open ball of radius $R$; after translating and rescaling the chart coordinates this gives, about every point $p\in U$, nonnegative smooth bumps supported in any prescribed coordinate ball contained in $U$ and equal to $1$ near $p$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[L4] A continuous compactly supported function on a chart image is extended by zero to $\mathbb R^4$ and integrated on a nondegenerate closed rectangle containing its support in its interior. The extension is continuous, hence integrable by [[thm-continuous-on-a-rectangle-is-riemann-integrable]]. The integral does not depend on this rectangle: extending a grid to a larger rectangle adds only zero cells, and a common containing rectangle compares any two choices. If this function is nonnegative and positive at a point, continuity gives a smaller closed rectangle $Q_0$ and $m>0$ on which it is at least $m$. A grid containing the endpoints of $Q_0$ has lower sum at least $m\operatorname{vol}(Q_0)>0$; the integral is at least this sum by [[def-multidimensional-darboux-integral]], [[def-multidimensional-darboux-sums]], and [[def-multidimensional-grid-partition]]. A negative value is treated by changing sign.

## Proof

**Proof technique:** direct; suppose the coefficient is nonzero at a point, contract it with a fixed symmetric matrix, multiply by a bump and contradict the hypothesis.

1.1 (Nonvanishing coefficient at a point.) Suppose for contradiction that $F_{ab}(p_0)\neq0$ for some $p_0\in U$. Since the symmetric bilinear form $F(p_0)$ is nonzero, there are $v,w\in T_{p_0}M$ with $F(p_0)(v,w)\neq0$. Write $v=\sum_av^a\partial_a$, $w=\sum_bw^b\partial_b$ at $p_0$ and put $s^{ab}:=\tfrac12(v^aw^b+w^av^b)$, a symmetric matrix with $F_{ab}(p_0)s^{ab}=F(p_0)(v,w)\neq0$. Replacing $s$ by $-s$ if necessary, the continuous function $f:=F_{ab}s^{ab}$ on $U$ satisfies $f(p_0)>0$; fix such an $s$. [L1, algebra]

2.1 (A bump test field.) By continuity, $f>0$ on a coordinate ball $B(p_0,r_0)\subseteq U$. Choose $0<r<R<r_0$ with the closed coordinate ball of radius $R$ about $x(p_0)$ contained in the positive region $B(p_0,r_0)$ and let $\rho$ be the bump of [L3], equal to $1$ on the closed ball of radius $r$ and supported in the open ball of radius $R$. Define the chart components $q^{ab}:=\rho\,s^{ab}$ and lower them, $q_{ab}:=g_{ac}g_{bd}q^{cd}$; these are smooth, symmetric and supported in the compact coordinate ball of radius $R$, so by [L2] they define a smooth symmetric tensor field $q$ on $M$ with support compact in $U$. [step 1.1, L1, L2, L3, construct]

3.1 (Contradiction.) For this $q$, $F_{ab}q^{ab}w=\rho\,f\,w$ is continuous and nonnegative with a strictly positive value at $p_0$ (there $\rho=1$, $w>0$ and $f>0$), so its integral over $U$ is strictly positive by [L4], contradicting the hypothesis that the integral vanishes for every such $q$. Hence no point with $F(p_0)\neq0$ exists and $F=0$ on $U$, as claimed. [step 2.1, L4, algebra]

4.1 (Covector version.) Let $W$ be a continuous covector field with the stated property and suppose $W_a(p_0)\neq0$. Choose $s\in T_{p_0}M$ with $W_a(p_0)s^a>0$ (replacing $s$ by $-s$ if necessary); by continuity $f:=W_as^a$ (with $s$ read in the chart components) is strictly positive on a coordinate ball about $p_0$. Taking the bump $\rho$ of [L3] equal to $1$ near $p_0$ and supported in a smaller ball, the chart components $q^a:=\rho\,s^a$, extended by zero, define a smooth compactly supported vector field by [L2] applied slotwise, and $\int_UW_aq^aw=\int_U\rho\,f\,w>0$ by [L4], contradicting the hypothesis. Hence $W=0$ on $U$; together with step 3.1 this proves both assertions. [step 1.1, step 3.1, L2, L3, L4, algebra] ∎

## Remarks

- **Local form.** The lemma is stated in one chart because that is the form in which the compact variation argument is applied; a global version follows by applying it on each chart of a cover, and no choice beyond finitely many charts per point is used.

- **Why compact support is needed.** The bump localizes the test variation about the point where the coefficient is nonzero; without compact support inside $U$ the boundary of the chart would contribute and the conclusion could fail.
