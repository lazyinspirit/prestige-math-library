---
id: def-minimal-parabolic-klr-diagram-proof-category
kind: definition
title: "The minimal-parabolic KLR diagram proof category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition]
justified_by: [lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020"
      locator: "Sections 1.1-1.3, PDF pages 5-19: Definition 1.1 minimal parabolic, Definition 1.2 matching diagrams, Theorem 1.4 polynomial model, Figures 1-4 (especially Figure 2 page 9), and the entire Proposition 1.7 proof pages 17-19."
    - title: "Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3"
      url: "https://arxiv.org/pdf/0812.5023"
      locator: "Sections 3.2.1-3.2.3, PDF pages 22-27, downward KLR presentation and PBW; Section 5.2, Lemma 5.13 and Proposition 5.15, PDF pages 54-55, explicit rank-one unit and polynomial model."
---

## Definition

Fix a symmetrizable Cartan datum with real simple roots (so $a_{ii}=2$ for
every color $i$), a field $k$ placed in degree zero, and weighted-homogeneous
KLR polynomials $Q_{jk}$ satisfying (Q1)-(Q4) as in
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]; write
$b_{jk}=d_j a_{jk}=b_{kj}$. Fix a color $i$. The **minimal-parabolic KLR
diagram proof category** $\mathcal P_i$ is the additive graded $k$-linear
category of weighted oriented diagrams described by the generators, objects
and equations below.

**Generators and composition.** The objects are the weights
$\mu\in P$. The generating $1$-morphisms are the downward generators
$G_j:\mu\to\mu-\alpha_j$, one for every color $j$, and the single upward
generator $H_i:\mu\to\mu+\alpha_i$. Horizontal composition reads chronological
negative words from the vacuum outward. Take additive sums of objects and
grading shifts, and use idempotent completion when speaking of word
projectives. The generator $H_i$ denotes **normalized projective
restriction**: in the polynomial flag realization at input weight $h=\langle
h_i,\mu\rangle$ it is basic reversed flag restriction shifted by
$-d_i(1+h)$; it is distinct from unshifted basic restriction.

**Degrees and the native crossing.** Dots have degree $2d_j$ and downward
crossings have degree $-b_{jk}$, matching the grading of
[[def-klr-grading-and-diagrammatic-composition]]. The native crossing is
$\tau$, with native equal-color divided difference
$(f-sf)/(x_1-x_2)$; for expressing the source diagram equations put
$\kappa=-\tau$ for **every** color pair, retaining dots, idempotents and $Q$.
Thus the native cubic braid numerator is globally opposite to the source
numerator, while the quadratic $Q$ is unchanged. Impose the full downward KLR
relations of the cited Definition.

**Adjunctions and the rank-one matrix.** At input $i$-weight $h$, the first
unit $1\to H_iG_i$ and the second counit $H_iG_i\to1$ have degree
$d_i(1-h)$; the first counit $G_iH_i\to1$ and the second unit
$1\to G_iH_i$ have degree $d_i(1+h)$. Impose both adjunction triangles with
their adjacent input-weight shifts and cyclicity of the dot. For $h\ge0$
prescribe the degree-zero rank-one matrix
$$H_iG_i\cong G_iH_i\oplus\bigoplus_{r=0}^{h-1}1\{d_i(1-h+2r)\};$$
for $h<0$ prescribe
$$G_iH_i\cong H_iG_i\oplus\bigoplus_{r=0}^{-h-1}1\{d_i(1+h+2r)\}.$$
The off-diagonal crossing component is the cup--source-crossing--cap
transfer, and the identity columns and rows are the indicated dotted
units/counits. Adjoin its actual inverse blocks, requiring both matrix inverse
equations; the dotted dual rows and columns are the finite triangular
coefficient convolution determined by bubble inversion, and the crossing
block satisfies the local cross-and-cap equations. In particular, at $h<0$,
if $r_h:G_iH_i\to H_iG_i\oplus D_{-h}$ is this matrix, then $r_h^{-1}j_H$ and
$p_Hr_h$ are the specified natural inclusion and projection with product
$1_{H_iG_i}$.

**Bubble series and slides.** The normalized far-left bubble series
$A_\mu(t),\mathsf H_\mu(t)$ have constant coefficient $1$ and satisfy
$A_\mu(t)\mathsf H_\mu(t)=1$. Genuine negative-degree bubbles vanish. The $A$
coefficient with index $m$ is the clockwise bubble with $-h-1+m$ dots when
this count is nonnegative, extended by formal inverse coefficients otherwise;
its degree is $2d_im$. The other family has dot count $h-1+\ell$ and degree
$2d_i\ell$. Impose the finite-coefficient slides verified on the monic flag
model: adjoining an $i$ root $z$ divides $A$ by $(1-zt)^2$ and multiplies
$\mathsf H$ by that factor; adjoining a spectator root $y$ of color $j\ne i$
multiplies $A$ by
$q_{ij}^{\mathrm{rev}}(y,t)=t^{-a_{ij}}Q_{ij}(t^{-1},y)/t_{ij}$, where $t_{ij}$
is the nonzero extremal coefficient, and divides $\mathsf H$ by it. Every
reciprocal coefficient is defined by the finite recursion with constant
coefficient $1$.

**Cross-and-cap equations.** Impose the rank-one cross-and-cap equations: the
two oppositely oriented single-crossing curls are the signed sums of a dotted
uncrossed cap and an opposite bubble over indices $a+b=-1$; the two
opposite-crossing cancellations are the **negative** straight pair plus the
dotted cup--bubble--cap sums over $a+b+c=-1$. The minus sign on the
straight pair is retained under $\kappa=-\tau$, because each cancellation
contains two crossings. A negative dot count on an open strand is zero.
These are the four source $\kappa$ equations, converted globally by
$\kappa=-\tau$. For $j\ne i$, the two sideways crossings, defined as the two
adjunction mates of the downward crossing, cancel in the two orders with the
nonzero scalars $t_{ij}$ and $t_{ji}$; scale the reverse mate by the
corresponding inverse to obtain the mixed isomorphism
$H_iG_j\cong G_jH_i$, commuting with the $j$ dot.

**Status of the relations.** These equations are relations of this proof-tool
category. Their consistency and homogeneous realization are established by
the polynomial flag model
([[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]]),
rather than assumed for the actual cyclotomic induction/restriction action; no
claim about the latter is made here. This definition uses no choice: it is a
presentation by generators and homogeneous equations, and every sl(2) infinite
family appearing in the matrix and bubble clauses is a finite coefficient
recursion from a constant coefficient $1$.
