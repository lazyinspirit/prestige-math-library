---
id: thm-cm-traction-is-given-by-a-stress-matrix
kind: theorem
title: "A continuous traction field balanced on every piecewise $C^1$ region is given by a continuous stress matrix, and $t(-n)=-t(n)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-traction-and-stress, def-bounded-piecewise-c-one-euclidean-domain, def-surface-integral-on-a-compact-c-one-hypersurface, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-metric-ball, thm-heine-borel-rn, thm-heine-cantor-metric, thm-extreme-value-metric, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set, def-matrix-space, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-cm-traction-and-stress: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.3 (force, traction and Cauchy's hypothesis) and Section 4.5 (the Cauchy tetrahedron and the existence of the stress tensor)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "MIT OpenCourseWare 12.005, Applications of Continuum Mechanics, Lecture 3: tensors, stress, the Cauchy tetrahedron and Cauchy's formula"
      url: "https://ocw.mit.edu/courses/12-005-applications-of-continuum-mechanics-to-earth-atmospheric-and-planetary-sciences-spring-2006/5005ac6aec16d031bffbd361c792ca70_lec3.pdf"

  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ where the surface and divergence machinery of the cited items assumes it. Let $O\subseteq\mathbb R^3$ be open, let $t:O\times S^2\to\mathbb R^3$ be continuous, where $S^2=\{n\in\mathbb R^3:\|n\|_2=1\}$ is the unit sphere, and let $g:O\to\mathbb R^3$ be continuous and bounded, with $C_g:=\sup_{O}\|g\|_2<+\infty$. Suppose that for every bounded piecewise $C^1$ Euclidean domain $D$ with a specified finite presentation ([[def-bounded-piecewise-c-one-euclidean-domain]]) whose closure lies in $O$ and whose associated pieces lie in $O$,

$$ \int_{\partial D}t\bigl(y,\nu_D(y)\bigr)\,dS(y)+\int_Dg(y)\,dy=0, \tag{B} $$

where $\nu_D$ is the actual outward unit normal off the edge set of the presentation, the boundary term is the sum of the surface integrals over the specified faces ([[def-surface-integral-on-a-compact-c-one-hypersurface]]), and values of the normal on the edge set are irrelevant.

Then there is a unique continuous map

$$\sigma:O\longrightarrow M_3(\mathbb R)$$

with

$$t(y,n)=\sigma(y)n\qquad\text{for every }(y,n)\in O\times S^2,$$

the product being matrix-vector multiplication ([[def-matrix-space]], [[def-matrix-product-and-identity-matrix]]). Explicitly, the columns of $\sigma(y)$ are the vectors $t(y,e_1),t(y,e_2),t(y,e_3)$; and necessarily

$$t(y,-n)=-t(y,n)\qquad\text{for every }(y,n)\in O\times S^2 .$$

## Facts & Assumptions

**Given:** The open set $O$, the continuous traction field $t$, the bounded continuous field $g$, and the balance hypothesis (B).

[F1] A bounded piecewise $C^1$ domain is a nonempty bounded open set with compact faces covering its boundary, a compact edge set of surface measure zero on each face, and, off the edges, a local $C^1$ graph description with the domain on one side; the boundary integral is the sum of the face surface integrals with the actual outward normals ([[def-bounded-piecewise-c-one-euclidean-domain]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]). Boxes and tetrahedra with closures in $O$ and vertices in general position are examples: their faces are compact planar triangles or rectangles, their edges form a compact set meeting each face in a segment of zero surface measure, and off the edges the boundary is locally a plane. The cube and tetrahedron constructions below therefore fall under (B).

[F2] For a continuous $h$ on a compact set $K$ and a compact surface piece $F$ contained in $K$ with finite area $S(F)>0$, the face average satisfies

$$\Bigl|\frac{1}{S(F)}\int_Fh\,dS-h(y_0)\Bigr|\le\sup_{y\in F}\|h(y)-h(y_0)\|_2 .$$

Indeed the definition of the surface integral and the order rules for the nonnegative Lebesgue integral bound $\int_F\|h-h(y_0)\|_2\,dS$ by the supremum times $S(F)$, and the signed integral obeys the triangle inequality ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]). If moreover all points of $F$ are within distance $\rho$ of $y_0$, then by uniform continuity of $h$ on a compact neighbourhood of $y_0$ the right-hand side tends to $0$ as $\rho\to0$ ([[thm-heine-cantor-metric]], [[thm-heine-borel-rn]]).

[F3] (Geometry of the two test bodies.) Fix an orthonormal basis $(n,p,q)$ of $\mathbb R^3$ and $h>0$.

1. The thin box $D_h:=y_0+\{an+bp+cq:\ |a|<h^2,\ |b|<h,\ |c|<h\}$ has two faces of area $4h^2$ with outward normals $\pm n$ and four lateral faces of area $4h^3$ with outward normals $\pm p,\pm q$; its volume is $8h^4$. These areas are the products of the corresponding side lengths $2h^2,2h,2h$.
2. Let $n\in S^2$ have no zero component, define $s_i:=1$ when $n_i>0$ and $s_i:=-1$ when $n_i<0$, and put $P_i:=y_0+(h/n_i)e_i$, and let $T_h$ be the open tetrahedron with vertices $y_0,P_1,P_2,P_3$. Equivalently, in coordinates $v=y-y_0$ it is given by $s_iv_i>0$ and $n\cdot v<h$. Its coordinate face $F_i$ has outward normal $-s_ie_i$ and area $A|n_i|$, where $A:=h^2/(2|n_1n_2n_3|)$; its oblique face $F_0$ has outward normal $n$ and area $A$. Indeed the coordinate-face normal points out of $s_iv_i>0$, and the oblique-face normal points out of $n\cdot v<h$. The volume is $Ah/3$. The reflection $v_i\mapsto s_iv_i$ is an isometry taking this tetrahedron to the positive-coordinate tetrahedron with intercepts $h/|n_i|$, so its face areas are unchanged. Alternatively the cross-product formula for triangle area gives $\tfrac12\|(P_2-P_1)\times(P_3-P_1)\|_2=h^2/(2|n_1n_2n_3|)$, since $\sum_i n_i^2=1$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]). The face opposite $P_i$ is a right triangle with legs $h/|n_j|,h/|n_k|$, and the volume is one third of the oblique-face area times its distance $h$ from $y_0$.

[F4] The columns of a matrix $\sigma\in M_3(\mathbb R)$ determine it, and $(\sigma n)_k=\sum_i\sigma_{ki}n_i$. A map into $M_3(\mathbb R)$ is continuous if and only if its three columns are continuous.

## Proof

**Proof technique:** direct; shrink a box and a right tetrahedron about an arbitrary point and pass to the limit in the balance (B).

1.1 Fix $y_0\in O$ and choose $r>0$ with $\overline B(y_0,r)\subseteq O$ ([[def-metric-ball]]). The set $\overline B(y_0,r)\times S^2$ is compact ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]), so $t$ is uniformly continuous there, and $\|t\|_2$ is bounded there by some $C_t<+\infty$ ([[thm-heine-cantor-metric]], [[thm-extreme-value-metric]]). [given, F1, choose]

2.1 (Reversed normals.) Fix $n\in S^2$ and extend it to an orthonormal basis $(n,p,q)$. For $0<h<\min\{1,r/3\}$ use the thin box of [F3](1), whose closure lies in $B(y_0,r)$. Its two large-face averages $\overline t_n^\pm$ satisfy $\overline t_n^\pm\to t(y_0,\pm n)$ by [F2], since each face lies within distance $\sqrt{h^4+2h^2}\le\sqrt3h$ of $y_0$. The four lateral-face contributions have total norm at most $16C_t h^3$, and $\|\int_{D_h}g\,dy\|_2\le8C_gh^4$. Thus (B), divided by $4h^2$, gives $\|\overline t_n^++\overline t_n^-\|_2\le4C_t h+2C_gh^2$. Letting $h\downarrow0$ yields $$t(y_0,n)+t(y_0,-n)=0 . \tag{R}$$ [given, F1, F2, F3, step 1.1, algebra]

3.1 (Signed tetrahedron identity.) Fix $n\in S^2$ with $n_i\ne0$ for all $i$ and put $s_i=1$ if $n_i>0$ and $s_i=-1$ if $n_i<0$. For $0<h<r\min_i|n_i|/2$ the signed tetrahedron of [F3](2) has closure in $O$. Divide its balance (B) by the oblique-face area $A$. The coordinate-face area ratios are $|n_i|$, their actual outward normals are $-s_ie_i$, and the volume ratio is $h/3$. All face points tend to $y_0$ as $h\downarrow0$, so [F2] and the bound $\|\int_{T_h}g\|_2/A\le C_gh/3$ give $$t(y_0,n)+\sum_{i=1}^3|n_i|t(y_0,-s_ie_i)=0.$$ By (R), $t(y_0,-s_ie_i)=-s_it(y_0,e_i)$ for either sign of $s_i$. Since $|n_i|s_i=n_i$, this is $$t(y_0,n)=\sum_{i=1}^3n_i t(y_0,e_i). \tag{T}$$ [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 (Zero components.) Let $n\in S^2$ be arbitrary. For $\varepsilon>0$ put $v_{\varepsilon,i}:=n_i$ when $n_i\ne0$ and $v_{\varepsilon,i}:=\varepsilon$ when $n_i=0$, and set $n_\varepsilon=v_\varepsilon/\|v_\varepsilon\|_2$. Every component of $n_\varepsilon$ is nonzero, its nonzero original components retain their signs, and $n_\varepsilon\to n$. Apply (T) from step 3.1 to $n_\varepsilon$. Continuity of $t(y_0,\cdot)$ and of the finite linear combination $\sum_i n_i t(y_0,e_i)$ then gives (T) for $n$, including all normals with zero components. [step 3.1, given, algebra]

5.1 (Matrix representation and uniqueness.) Define $\sigma(y_0)\in M_3(\mathbb R)$ by $\sigma(y_0)e_i:=t(y_0,e_i)$. Then for every $n\in S^2$, (T) reads $t(y_0,n)=\sum_in_i\,t(y_0,e_i)=\sigma(y_0)n$. Since $y_0\in O$ was arbitrary, this defines $\sigma:O\to M_3(\mathbb R)$. If $\sigma_1,\sigma_2$ both represent $t$, then $(\sigma_1-\sigma_2)e_i=0$ for $i=1,2,3$ and the columns determine the matrix, so $\sigma_1=\sigma_2$: the representation is unique. [F4, step 4.1, construct, algebra]

6.1 (Continuity.) Each column map $y\mapsto\sigma(y)e_i=t(y,e_i)$ is continuous on $O$ because $t$ is; hence each entry $y\mapsto\sigma_{ki}(y)$ is continuous, and $\sigma$ is continuous as a map into $M_3(\mathbb R)$ (finite-dimensional, entrywise continuity). This proves the existence, uniqueness and continuity clauses. [step 5.1, F4, given] ∎

## Remarks

- The mathematical content is conditional: the conclusion is that the *assumed* balance (B) for all piecewise $C^1$ test regions forces the contact interaction to be linear in the normal and to satisfy the reversed-normal rule. It is not a derivation of (B) itself, which is an adopted contact-balance hypothesis in any continuum model.

- The hypothesis that (B) holds for boxes and tetrahedra is used only through the two test families; simultaneously the surface integral over the four lateral faces is controlled by the boundedness of $t$ on the compact neighbourhood. No symmetry of $\sigma$ is asserted here: linearity in $n$ alone does not make $\sigma$ symmetric, and the separate angular-momentum balance is needed for that.

- A body couple density or surface couple field contributes to angular-momentum balance; its presence alone does not invalidate the pure-force balance (B). Whenever (B) retains the stated test-region hypotheses, the thin-box argument still forces the reversed-normal traction rule. This theorem makes no claim about additional couple tractions or their representation.
