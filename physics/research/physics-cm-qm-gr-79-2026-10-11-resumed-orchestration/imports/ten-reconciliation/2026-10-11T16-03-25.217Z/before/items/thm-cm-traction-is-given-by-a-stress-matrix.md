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

1. The box $D_h:=y_0+\{an+bp+cq:\ |a|<h,\ |b|<h,\ 0<c<h\}$ has faces of area $4h^2$ with outward normals $\pm n$ (the faces $c=h$ and $c=0$) and four lateral faces of area $2h^2$ with outward normals $\pm p,\pm q$; its volume is $4h^3$.
2. Let $n\in S^2$ have $n_i>0$ for $i=1,2,3$, put $P_i:=y_0+(h/n_i)e_i$, and let $T_h$ be the tetrahedron with vertices $y_0,P_1,P_2,P_3$. Its face $F_i$ opposite $P_i$ lies in the plane $x_i=y_{0,i}$, has outward normal $-e_i$ (the tetrahedron lies in $x_i\ge y_{0,i}$), and has area $A\,n_i$ with $A:=h^2/(2n_1n_2n_3)$; the oblique face $F_0$ lies in $\{n\cdot(y-y_0)=h\}$, has outward normal $n$ and area $A$; the volume is $Ah/3$.

The area of the triangle $P_1P_2P_3$ is $\tfrac12\|(P_2-P_1)\times(P_3-P_1)\|_2$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]]), and $(P_2-P_1)\times(P_3-P_1)=h^2\bigl(\tfrac{1}{n_2n_3},\tfrac{1}{n_1n_3},\tfrac{1}{n_1n_2}\bigr)$ has norm $h^2/(n_1n_2n_3)$ because $n_1^2+n_2^2+n_3^2=1$. The face opposite $P_i$ is the right triangle with legs $h/n_j,h/n_k$, of area $\tfrac12h^2/(n_jn_k)=An_i$. The volume formula for a tetrahedron is $\tfrac13\cdot\text{base}\cdot\text{height}$.

[F4] The columns of a matrix $\sigma\in M_3(\mathbb R)$ determine it, and $(\sigma n)_k=\sum_i\sigma_{ki}n_i$. A map into $M_3(\mathbb R)$ is continuous if and only if its three columns are continuous.

## Proof

**Proof technique:** direct; shrink a box and a right tetrahedron about an arbitrary point and pass to the limit in the balance (B).

1.1 Fix $y_0\in O$ and choose $r>0$ with $\overline B(y_0,r)\subseteq O$ ([[def-metric-ball]]). The set $\overline B(y_0,r)\times S^2$ is compact ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]), so $t$ is uniformly continuous there, and $\|t\|_2$ is bounded there by some $C_t<+\infty$ ([[thm-heine-cantor-metric]], [[thm-extreme-value-metric]]). [given, F1, choose]

2.1 (Reversed normals.) Fix $n\in S^2$ and extend it to an orthonormal basis $(n,p,q)$; for $0<h<r/2$, let $D_h$ be the box of [F3](1) centred at $y_0$. By [F1] the balance (B) applies. Its boundary integral is $$\int_{\partial D_h}t\,dS=4h^2\,\overline t_n^++4h^2\,\overline t_n^-+2h^2\sum_{\pm}\bigl(\overline t_{\pm p}+\overline t_{\pm q}\bigr),$$ where each barred symbol is the average of $t(\cdot,m)$ over the corresponding face and $m$ is its outward normal; the two large faces with normals $+n$ and $-n$ contribute the first two terms. Every point of every face lies within distance $3h$ of $y_0$, so by [F2] and step 1.1 each average converges to the corresponding value at $y_0$ as $h\to0$. Moreover $\bigl|\int_{D_h}g\,dy\bigr|\le C_g\cdot4h^3$. Dividing (B) by $4h^2$ and letting $h\downarrow0$ gives $$t(y_0,n)+t(y_0,-n)=0 . \tag{R}$$ [given, F1, F2, F3, step 1.1, algebra]

3.1 (Tetrahedron identity.) Fix $n\in S^2$ with $n_i>0$ for all $i$ and let $T_h$ be the tetrahedron of [F3](2), with faces $F_0,\dots,F_3$ and area $A=h^2/(2n_1n_2n_3)$; for $0<h<r\,\min_i n_i/2$ its closure lies in $O$, so (B) applies. Writing $\overline t_{F_i}$ for the average of $t$ over $F_i$ against the corresponding outward normal, $$\int_{\partial T_h}t\,dS=A\Bigl(\overline t_{F_0}+n_1\,\overline t_{F_1}+n_2\,\overline t_{F_2}+n_3\,\overline t_{F_3}\Bigr),$$ with outward normals $n$ on $F_0$ and $-e_i$ on $F_i$; this is exactly the face areas computed in [F3]. Every point of every face lies within distance $2h/\min_i n_i$ of $y_0$, so by [F2] and step 1.1 the averages converge to $t(y_0,n)$ and $t(y_0,-e_i)$ respectively; and $\bigl|\int_{T_h}g\,dy\bigr|\le C_g\,Ah/3$. Dividing (B) by $A$ and letting $h\downarrow0$, $$t(y_0,n)+n_1t(y_0,-e_1)+n_2t(y_0,-e_2)+n_3t(y_0,-e_3)=0 .$$ By (R) from step 2.1 this is $$t(y_0,n)=n_1t(y_0,e_1)+n_2t(y_0,e_2)+n_3t(y_0,e_3). \tag{T}$$ [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 (All directions.) Let $n\in S^2$ be arbitrary and put $a:=(2,2,2)$. For all small $\varepsilon>0$ the vector $n+\varepsilon a$ has all components positive and is nonzero, and $n_\varepsilon:=(n+\varepsilon a)/\|n+\varepsilon a\|_2\in S^2$ still has all components positive; moreover $n_\varepsilon\to n$ as $\varepsilon\to0$. Both sides of (T) are continuous in $n$: the left side because $t(y_0,\cdot)$ is continuous on $S^2$ (step 1.1), the right side because it is a finite linear combination of the fixed vectors $t(y_0,e_i)$. Passing to the limit in (T) along $n_\varepsilon$ gives (T) for $n$. [step 2.1, step 3.1, given, algebra]

5.1 (Matrix representation and uniqueness.) Define $\sigma(y_0)\in M_3(\mathbb R)$ by $\sigma(y_0)e_i:=t(y_0,e_i)$. Then for every $n\in S^2$, (T) reads $t(y_0,n)=\sum_in_i\,t(y_0,e_i)=\sigma(y_0)n$. Since $y_0\in O$ was arbitrary, this defines $\sigma:O\to M_3(\mathbb R)$. If $\sigma_1,\sigma_2$ both represent $t$, then $(\sigma_1-\sigma_2)e_i=0$ for $i=1,2,3$ and the columns determine the matrix, so $\sigma_1=\sigma_2$: the representation is unique. [F4, step 4.1, construct, algebra]

6.1 (Continuity.) Each column map $y\mapsto\sigma(y)e_i=t(y,e_i)$ is continuous on $O$ because $t$ is; hence each entry $y\mapsto\sigma_{ki}(y)$ is continuous, and $\sigma$ is continuous as a map into $M_3(\mathbb R)$ (finite-dimensional, entrywise continuity). This proves the existence, uniqueness and continuity clauses. [step 5.1, F4, given] ∎

## Remarks

- The mathematical content is conditional: the conclusion is that the *assumed* balance (B) for all piecewise $C^1$ test regions forces the contact interaction to be linear in the normal and to satisfy the reversed-normal rule. It is not a derivation of (B) itself, which is an adopted contact-balance hypothesis in any continuum model.

- The hypothesis that (B) holds for boxes and tetrahedra is used only through the two test families; simultaneously the surface integral over the four lateral faces is controlled by the boundedness of $t$ on the compact neighbourhood. No symmetry of $\sigma$ is asserted here: linearity in $n$ alone does not make $\sigma$ symmetric, and the separate angular-momentum balance is needed for that.

- If a body couple density or a surface couple field is present, the balance (B) must be modified and the reversed-normal conclusion can fail for the full traction; this item treats the couple-free pure-force balance only.
