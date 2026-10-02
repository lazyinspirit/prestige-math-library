---
id: def-number-field-regulator
kind: definition
title: Regulator of a number field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-determinant-of-a-square-matrix
  - def-fundamental-units
  - def-logarithmic-unit-embedding
  - def-number-field
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - lem-deleted-row-minors-of-a-matrix-with-zero-column-sums
  - lem-unit-logarithms-lie-in-the-product-formula-hyperplane
  - thm-logarithmic-unit-image-is-a-full-lattice
justified_by:
  - thm-number-field-regulator-is-well-defined
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Regulators p.94."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Def. 15.16 p.9 and Example 15.17 pp.9-10."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number field
of signature $(r_1,r_2)$ ([[def-number-field]],
[[def-archimedean-embeddings-and-number-field-signature]]) and unit rank
$r=r_1+r_2-1$, and let $(\varepsilon_1,\dots,\varepsilon_r)$ be a system of
fundamental units of $K$ ([[def-fundamental-units]]). Let $A$ be the
$(r_1+r_2)\times r$ real matrix

$$A=\bigl(\lambda(\varepsilon_1)\ \cdots\ \lambda(\varepsilon_r)\bigr)$$

whose columns are the logarithmic vectors $\lambda(\varepsilon_i)$ in the
doubled convention of the logarithmic embedding ([[def-logarithmic-unit-embedding]]).
For $k=1,\dots,r_1+r_2$ let $A_k$ be the $r\times r$ matrix obtained from $A$
by deleting row $k$, and let $\det A_k$ be its determinant
([[def-determinant-of-a-square-matrix]]). The **regulator** of $K$ is

$$R_K:=|\det A_k| .$$

For $r=0$ the matrices $A$ and $A_k$ are empty, and the empty determinant is
defined to be $1$; thus $R_{\mathbb Q}=1$ and $R_K=1$ for imaginary quadratic
$K$.

**Why a deleted row gives a well-defined number.** The columns of $A$ are
linearly independent over $\mathbb R$: the full-lattice theorem says that
$\lambda(\mathcal O_K^\times)$ is a full lattice in $H$ of rank
$r=r_1+r_2-1=\dim_{\mathbb R}H$. Thus a $\mathbb Z$-basis has $r$ vectors
spanning $H$, hence is also an $\mathbb R$-basis of $H$. The vectors
$\lambda(\varepsilon_1),\dots,\lambda(\varepsilon_r)$ are another
$\mathbb Z$-basis of the same group, and their change-of-basis matrix lies in
$\operatorname{GL}_r(\mathbb Z)$, hence is invertible over $\mathbb R$.
Therefore these columns are $\mathbb R$-linearly independent and $A$ has rank
$r$, so $r_1+r_2=r+1\ge1$
([[def-row-space-column-space-nullspace-and-matrix-ranks]],
[[thm-logarithmic-unit-image-is-a-full-lattice]]). Each column lies in the
hyperplane $H$, so its coordinates sum to zero
([[lem-unit-logarithms-lie-in-the-product-formula-hyperplane]]). The deleted-row
minors of a rank-$r$ real matrix with $r+1$ rows and zero column sums therefore
satisfy $\det A_k=(-1)^{k-1}\det A_1$ and are all nonzero
([[lem-deleted-row-minors-of-a-matrix-with-zero-column-sums]]); in particular
$|\det A_k|$ does not depend on the deleted row $k$.

**Independence of the fundamental system.** The number $R_K$ above is defined
from one chosen system of fundamental units; that the absolute deleted-row
determinant does not depend on this auxiliary choice, so that $R_K$ depends on
$K$ alone, is the content of [[thm-number-field-regulator-is-well-defined]],
which also shows $R_K>0$ in the rank-$r$ case. A change of fundamental system
multiplies $A$ on the right by a matrix in $\operatorname{GL}_r(\mathbb Z)$,
which is why the absolute determinant, and not the signed one, is the
invariant.

**Normalization.** The factor $2$ on the complex coordinates of $\lambda$ is
part of the doubled convention fixed in the definition of the logarithmic
embedding; with it, the regulator of a real quadratic field is $\log\varepsilon$
for its fundamental unit $\varepsilon>1$, and mixing conventions changes the
value. Ordering the coordinates differently permutes rows of $A$, which leaves
every $|\det A_k|$ unchanged, so the definition is insensitive to the ordering
of the embeddings.
