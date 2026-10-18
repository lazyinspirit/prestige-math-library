---
id: lem-lifted-determinant-sign-matches-sphere-side
kind: lemma
title: The orientation-normalized lifted determinant records the side of a sphere
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 3
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-certified-geometric-predicate-determinants, def-complete-ordered-real-field, lem-nondegenerate-dyadic-simplex-determines-unique-sphere]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4.2"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Statement

Let $p_0,\ldots,p_d$ be points in $\mathbb D^d$, $d\in\{2,3\}$, with
$O_d\ne0$ under the determinant convention in
[[def-certified-geometric-predicate-determinants]]. By
[[lem-nondegenerate-dyadic-simplex-determines-unique-sphere]], there is a unique
sphere $S(c,r)=\{x:\sum_j(x_j-c_j)^2=r^2\}$ through $p_0,\ldots,p_d$. For
$q=p_{d+1}$ and its lifted determinant $L_d$,
$$
L_d=-O_d\left(\sum_j(q_j-c_j)^2-r^2\right).
$$
Consequently $O_dL_d$ is positive for $q$ inside the sphere, zero on it, and
negative outside it.

## Facts & Assumptions

**Given:** The point and lifted determinant row conventions in [[def-certified-geometric-predicate-determinants]], $O_d\ne0$, and a sphere $S(c,r)$ through $p_0,\ldots,p_d$.

[F1] [[def-certified-geometric-predicate-determinants]]: $O_d$ is the determinant of rows $(p_i,1)$ and $L_d$ is the determinant of rows $(p_i,\sum_jp_{i,j}^2,1)$.

[F2] [[def-complete-ordered-real-field]]: the coordinates, sphere center, and radius are in an ordered real field, so positive squares and their order comparisons have their usual meanings.

[F3] [[lem-nondegenerate-dyadic-simplex-determines-unique-sphere]]: every base tuple with $O_d\ne0$ determines a unique center $c$ and nonnegative radius $r$ whose sphere contains all base points.

[A1] The sphere equation is $\sum_j(p_{i,j}-c_j)^2=r^2$ for $i=0,\ldots,d$, and $q=p_{d+1}$.

## Proof

1.1 Let $A$ be the $d\times d$ matrix with rows $p_i-p_0$ for $i=1,\ldots,d$. Subtracting row $p_0$ from the other rows of the matrix defining $O_d$ leaves its determinant unchanged: the Leibniz formula is linear in each row, and the added determinant has two equal rows, whose terms cancel in pairs under the transposition of those rows. Expansion along the final column then gives $\det A=(-1)^dO_d$. [given, F1, algebra]

1.2 Expanding the equal sphere radii in [A1], which exist uniquely by [F3], gives $\sum_jp_{i,j}^2-\sum_jp_{0,j}^2=2\sum_jc_j(p_{i,j}-p_{0,j})$ for $i=1,\ldots,d$. For $q$, put $R=\sum_j(q_j-c_j)^2-r^2$; the same expansion gives $\sum_jq_j^2-\sum_jp_{0,j}^2=2\sum_jc_j(q_j-p_{0,j})+R$. [given, F2, F3, A1, algebra]

2.1 Subtract row $p_0$ from the other rows of the matrix defining $L_d$, then expand along its final column. The cofactor sign is $(-1)^{d+3}$, and the remaining determinant has rows $(p_i-p_0,\sum_jp_{i,j}^2-\sum_jp_{0,j}^2)$, including the row for $q$. Subtracting $2c_j$ times coordinate column $j$ from the last column makes its first $d$ entries zero by [step 1.2] and its final entry $R$. The resulting determinant is $\det A\,R$. These row and column operations preserve the Leibniz determinant: multilinearity in columns follows from the same permutation formula, and the added determinant has equal columns whose terms cancel in pairs under their transposition. Thus $L_d=(-1)^{d+3}\det A\,R=-O_dR$. [given, F1, step 1.1, step 1.2, algebra]

3.1 Multiplication by $O_d$ gives $O_dL_d=-O_d^2R$. Since $O_d\ne0$, $O_d^2>0$ in the ordered field [F2]; therefore the product is positive exactly when $R<0$, zero exactly when $R=0$, and negative exactly when $R>0$. [given, F2, step 2.1, algebra] ∎

