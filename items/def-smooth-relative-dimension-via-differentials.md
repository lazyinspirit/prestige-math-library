---
id: "def-smooth-relative-dimension-via-differentials"
kind: "definition"
title: "Relative differential-rank condition"
status: published
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["def-sheaf-relative-differentials", "def-ag-standard-smooth-algebra", "cor-jacobian-presentation-differentials", "lem-differentials-localization"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stacks Morphisms 29.35.12-13 and the 29.35.14 warning"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
verification:
  audited: 2026-09-27
---

## Definition

Let $f\colon X\to S$ be a morphism of schemes with sheaf of relative
differentials $\Omega_{X/S}$ ([[def-sheaf-relative-differentials]]), and let
$n\ge0$ be an integer.

**Locally free of constant rank $n$.** An $\mathcal O_X$-module $\mathcal F$ is
**locally free of constant rank $n$ on an open subscheme $U\subseteq X$** when
every point $x\in U$ has an open neighbourhood $W\subseteq U$ together with an
isomorphism of $\mathcal O_W$-modules
$$\mathcal F|_W\;\cong\;\mathcal O_W^{\oplus n}.$$
Equivalently, $\mathcal F|_U$ is a locally free $\mathcal O_U$-module whose
rank function $x\mapsto\operatorname{rk}_{\mathcal O_{X,x}}\mathcal F_x$ is
constant equal to $n$ on $U$; the locally free rank is locally constant, so if
$U$ is nonempty and $\mathcal F|_U$ is locally free of constant rank $n$, then
$n$ is determined by $U$ and $\mathcal F$. On $U=\varnothing$ the condition
holds for every $n$ and determines no rank. No quasi-coherence, finiteness or flatness hypothesis on
$f$ is built into this definition; the hypothesis is placed on the module
$\mathcal F=\Omega_{X/S}$ alone.

**Differential rank.** The morphism $f$ has **differential rank $n$ on the open
subscheme $U\subseteq X$** when the restriction $\Omega_{X/S}|_U$ is locally
free of constant rank $n$ on $U$ in the sense above. Thus differential rank
$0$ on $U$ means that $\Omega_{X/S}$ vanishes locally on $U$, and differential
rank $n$ for $n>0$ means that the module of relative differentials is locally
standard of rank $n$ over $U$.

**This condition alone does not define smoothness.** Differential rank $n$ is a
statement about the first-order infinitesimal structure of $f$; it is not a
smoothness criterion. In the source treatment the relative-dimension notion
*smooth of relative dimension $n$* is defined as smoothness together with
finiteness and local freeness of constant rank $n$ of $\Omega_{X/S}$, and it is
equivalently described by the four hypotheses: locally of finite presentation,
flat, all nonempty fibres equidimensional of dimension $n$, and $\Omega_{X/S}$
finite locally free of rank $n$. None of these four hypotheses beyond the last
is built into the definition above, and the comparison of the rank condition
with flatness and fibre conditions belongs to the smooth-morphism development
of the library rather than to this definition. In particular, no item on this
page may conclude smoothness from differential rank alone.

**Consistency with standard smooth presentations.** The condition is not empty:
if $A$ is a commutative ring and $B$ is an $A$-algebra admitting a standard
smooth presentation of relative dimension $n$
([[def-ag-standard-smooth-algebra]]), that is
$$B\cong\Bigl(A[x_1,\dots,x_N]\big/(f_1,\dots,f_c)\Bigr)_g$$
with $N-c=n$ and with a $c\times c$ minor of the Jacobian matrix
$\bigl(\partial f_j/\partial x_i\bigr)$ invertible in $B$, then $\Omega_{B/A}$
is a free $B$-module of rank $n$, as follows. By
[[cor-jacobian-presentation-differentials]] applied to the presentation before
inverting $g$, the module $\Omega_{(P/I)/A}$ for $P=A[x_1,\dots,x_N]$ and
$I=(f_1,\dots,f_c)$ is the cokernel of the $B'$-linear map $B'^c\to B'^N$
(with $B'=P/I$) given by the transpose of the row-oriented $c\times N$
Jacobian matrix; localising at $g$, which commutes with
$\Omega$ and with forming the cokernel
([[lem-differentials-localization]]), presents $\Omega_{B/A}$ as the cokernel
of this transposed Jacobian over $B$. Reordering the variables so that the
invertible minor occupies the first $c$ columns of the row-oriented Jacobian,
write its transpose in vertical blocks $\begin{pmatrix}C\\ D\end{pmatrix}$,
with $C\in\mathrm{GL}_c(B)$ and $D\in\operatorname{Mat}_{N-c,c}(B)$. Then the map
$B^{c}\to B^{N}$, $u\mapsto(Cu,Du)$ has image
$\{(u',v'):u'\in B^{c},\ v'=DC^{-1}u'\}$, and the $B$-linear map
$$B^{N}\longrightarrow B^{N-c},\qquad (u',v')\longmapsto v'-DC^{-1}u',$$
vanishes on this image and restricts to the identity on the complementary
coordinates; hence it induces an isomorphism from the cokernel to $B^{N-c}$.
So $\Omega_{B/A}$ is free of rank $N-c=n$, and the morphism
$\operatorname{Spec}B\to\operatorname{Spec}A$ has differential rank $n$ on its
whole chart, with no smoothness hypothesis needed for this computation.
