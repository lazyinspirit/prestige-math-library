---
id: def-reduced-type-a-polynomial-ring-for-hhh
kind: definition
title: "The reduced type-A polynomial ring and Soergel bimodules for the HHH construction"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-type-a-reflection-realization-and-polynomial-ring, def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); published as Internat. J. Math. 18 (2007) 869-885; 'Soergel bimodules' section, printed pp. 3-4"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Wolfgang Soergel, The combinatorics of Harish-Chandra bimodules, J. reine angew. Math. 429 (1992) 49-74"
      url: "https://doi.org/10.1515/crll.1992.429.49"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Fix $m\ge1$ and let $R'=\mathbb Q[x_1,\dots,x_m]$ be the polynomial ring of
[[def-polynomial-ring-over-a-commutative-ring]] in $m$ commuting
indeterminates, with the place-permutation action of the symmetric group
$S_m$, the grading $\deg x_i=2$, the adjacent transpositions
$s_i=(i\ i+1)$ and the invariant rings $(R')^{s_i}$ of
[[def-type-a-reflection-realization-and-polynomial-ring]]. Write $x_i$ for the
$i$-th coordinate function and let $S_m$ act by $w\cdot x_i=x_{w(i)}$.

**The reduced ring.** Put $y_i:=x_i-x_{i+1}$ for $1\le i\le m-1$ and
$$R:=\mathbb Q[y_1,\dots,y_{m-1}]=\mathbb Q[x_1-x_2,\,x_2-x_3,\dots,x_{m-1}-x_m]\subset R',$$
the **reduced polynomial ring of the HHH construction**, with the restricted
$S_m$-action and the induced grading $\deg y_i=2$. On the displayed generators
the restricted action is
$$s_i(y_i)=-y_i,\qquad s_i(y_{i+1})=y_i+y_{i+1},\qquad s_i(y_{i-1})=y_{i-1}+y_i,\qquad s_i(y_j)=y_j\ (|i-j|\ge2),$$
and it extends uniquely to a $\mathbb Q$-algebra automorphism of $R$, because
the displayed polynomials lie in $R$. Write $R^{s_i}\subset R$ for the
invariant subring of the involution $s_i$; put $z_j=y_j+\tfrac12y_i$ when $|j-i|=1$ and $z_j=y_j$ when
$|j-i|\ge2$. Then $s_i$ fixes each $z_j$ and sends $y_i$ to $-y_i$; the
linear change of variables is invertible, and explicitly
$R^{s_i}=\mathbb Q[z_j\ (j\ne i),\,y_i^2]$.

**The invariant coordinate.** For $1\le i\le m-1$ put $t_i:=x_i+x_{i+1}\in R'$.
Then $s_i$ fixes $t_i$, and the substitution
$$x_i=\tfrac12(t_i+y_i),\qquad x_{i+1}=\tfrac12(t_i-y_i),\qquad x_{i+2}=x_{i+1}-y_{i+1},\qquad x_{i-1}=x_i+y_{i-1},\ \dots$$
expresses every coordinate as a polynomial in $t_i$ and the $y_j$ with
coefficients in $\mathbb Q$ ($2$ is invertible). The substitution
$\varphi\colon\mathbb Q[y_1,\dots,y_{m-1},T]\to R'$ with
$y_j\mapsto y_j$ and $T\mapsto t_i$ is the linear change of variables
$(x_1,\dots,x_m)\leftrightarrow(y_1,\dots,y_{m-1},t_i)$, which is invertible
over $\mathbb Q$ by the preceding display, hence an isomorphism of graded
rings onto $R'$; consequently
$$R'=R[t_i]=R\otimes_{\mathbb Q}\mathbb Q[t_i]$$
as graded rings. This polynomial extension is a free graded $R$-module
on the infinite basis $1,t_i,t_i^2,\ldots$. The extension of the invariant
subring instead has rank two: $R'$ is free over $(R')^{s_i}$ on $1,y_i$ (or
on $1,x_i$), since $R=R^{s_i}\oplus y_iR^{s_i}$.
Since $s_i$ fixes $t_i$ and acts on the
coefficients through $R$,
$$(R')^{s_i}=R^{s_i}[t_i]=R^{s_i}\otimes_{\mathbb Q}\mathbb Q[t_i].$$
Concretely $(R')^{s_i}=\mathbb Q[x_1,\dots,x_{i-1},\,t_i,\,x_ix_{i+1},\,x_{i+2},\dots,x_m]$
and $x_ix_{i+1}=\tfrac14(t_i^2-y_i^2)$; both displays generate the same
subring because $y_i^2=t_i^2-4x_ix_{i+1}$.

**The reduced simple-reflection bimodule.** Since $2$ is invertible in
$\mathbb Q$, the averaging idempotent $\tfrac12(1+s_i)$ splits
$$R=R^{s_i}\oplus y_iR^{s_i}$$
as graded $R^{s_i}$-modules: for $f\in R$ the element
$\tfrac12(f-s_i(f))$ equals $y_ig$ with $g=\tfrac12(f-s_i(f))/y_i\in R^{s_i}$.
Hence the balanced tensor product of the graded $(R,R^{s_i})$-bimodule $R$
with the graded $(R^{s_i},R)$-bimodule $R$
$$B_i:=R\otimes_{R^{s_i}}R$$
is free of rank two as a left $R$-module and as a right $R$-module, with left basis
$1\otimes1,1\otimes y_i$ and right basis $1\otimes1,y_i\otimes1$,
of degrees $0,2$ on either side; we use the library's internal shift convention $(M\{r\})_d=M_{d-r}$ for
graded modules, in which $B_i$ carries
**no internal shift**.

**Comparison with the published type-A bimodule.** The published
type-A Soergel bimodule of a simple reflection works with the ambient ring
$R'=\mathbb Q[x_1,\dots,x_m]$ in place of the reduced ring and with the
shifted bimodule
$$B_i^{\mathrm{lib}}:=R'\otimes_{(R')^{s_i}}R'(1)=B'_i\{-1\},$$
where $B'_i:=R'\otimes_{(R')^{s_i}}R'$ is the corresponding unshifted
balanced tensor; the dictionary is extended on the next item of this page. In
particular the element $1\otimes1$ of the published bimodule has degree $-1$,
while the element $1\otimes1$ of $B_i$ has degree $0$.

**Source convention.** Khovanov writes $R'=R\otimes_{\mathbb Q}\mathbb Q[x_j]$
for the coordinate $x_j$ and chooses $j=1$. Read with $x_1$ this is exact as
a statement about graded rings, but the identification of invariant subrings
$(R')^{s_i}=R^{s_i}[x_1]$ is a literal equality of subrings of $R'$ only when
$s_i$ fixes $x_1$, that is for $i\ge2$; for $i=1$ the $s_1$-invariant
coordinate is $t_1=x_1+x_2$, and all statements of this page are therefore
stated with the invariant coordinate $t_i$, the two forms being related by
the substitution above. This is a convention correction, not a change of the
source's construction.

**Small cases.** For $m=1$ there are no differences and $R=\mathbb Q$; there
are no simple reflections, and the empty-word bimodule is $R$ itself. For $m=2$ one
has $R=\mathbb Q[y_1]$, $R^{s_1}=\mathbb Q[y_1^2]$ and
$B_1=\mathbb Q[y_1]\otimes_{\mathbb Q[y_1^2]}\mathbb Q[y_1]$.

No choice principle is used in this definition.
