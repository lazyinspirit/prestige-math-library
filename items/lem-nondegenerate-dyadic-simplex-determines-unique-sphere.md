---
id: lem-nondegenerate-dyadic-simplex-determines-unique-sphere
kind: lemma
title: A nondegenerate dyadic simplex determines a unique sphere
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 2
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-certified-geometric-predicate-determinants, def-complete-ordered-real-field, lem-two-and-three-by-three-nonsingular-dyadic-system-solvable, lem-nonnegative-square-root-exists-and-unique]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4.2"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Statement

Let $d\in\{2,3\}$ and let $p_0,\ldots,p_d\in\mathbb D^d$ have
$O_d\ne0$ under [[def-certified-geometric-predicate-determinants]]. There is a
unique $c\in\mathbb R^d$ and $r\ge0$ such that
$$\sum_{j=1}^d(p_{i,j}-c_j)^2=r^2\qquad (i=0,\ldots,d).$$

## Facts & Assumptions

**Given:** $d\in\{2,3\}$, dyadic points $p_0,\ldots,p_d$, and their homogeneous orientation determinant $O_d\ne0$.

[F1] [[def-certified-geometric-predicate-determinants]]: $O_d$ is the determinant of the rows $(p_i,1)$, and $\mathbb D$ is embedded in the real field.

[F2] [[def-complete-ordered-real-field]]: the coordinates lie in an ordered field, so squares are nonnegative; $1>0$ and the order is compatible with addition.

[F3] [[lem-two-and-three-by-three-nonsingular-dyadic-system-solvable]]: a 2-by-2 or 3-by-3 dyadic matrix with nonzero determinant gives a unique real solution for every real right-hand side.

[F4] [[lem-nonnegative-square-root-exists-and-unique]]: every nonnegative real has a unique nonnegative square root.

## Proof

1.1 Let $A$ have row $i$ equal to $p_i-p_0$ for $i=1,\ldots,d$. Subtracting the first row from every later row of the matrix defining $O_d$ preserves its determinant: multilinearity in each row follows from the finite Leibniz sum, and every added determinant has two equal rows, whose permutation terms cancel in pairs. Expanding along the final column gives $O_d=(-1)^d\det A$, so $\det A\ne0$. [given, F1, algebra]

2.1 Put $b_i=(\sum_jp_{i,j}^2-\sum_jp_{0,j}^2)/2$ for $i=1,\ldots,d$. Since $1>0$ and the order is compatible with addition, $2=1+1>0$ and is nonzero. By [F3] and [step 1.1], there is a unique $c\in\mathbb R^d$ with $Ac=b$. [given, F2, F3, step 1.1, algebra]

3.1 Expanding $Ac=b$ gives $2\sum_jc_j(p_{i,j}-p_{0,j})=\sum_jp_{i,j}^2-\sum_jp_{0,j}^2$. Rearranging shows $\sum_j(p_{i,j}-c_j)^2=\sum_j(p_{0,j}-c_j)^2$ for every $i=1,\ldots,d$. Let $s=\sum_j(p_{0,j}-c_j)^2\ge0$; by [F4], the unique $r\ge0$ with $r^2=s$ exists. Hence $S(c,r)$ passes through all base points. [given, F2, F4, step 2.1, algebra]

4.1 If $(c',r')$ is any other center and nonnegative radius through the base points, equal squared distances give $Ac'=b$. Uniqueness in [F3] forces $c'=c$. Then $r'^2=s=r^2$, and uniqueness of the nonnegative square root [F4] gives $r'=r$. All objects are obtained from finite data and unique solutions; no choice axiom is used. [given, F3, F4, step 2.1, step 3.1, algebra] ∎

