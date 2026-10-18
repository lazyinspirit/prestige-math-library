---
id: lem-finite-node-equation-reconstruction-equivalence
kind: lemma
title: Finite-node Nyström equations are equivalent to their reconstructed equations
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-continuous-real-functions-on-a-compact-metric-space
  - thm-rank-nullity
  - def-linear-map
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and equations (3.21)–(3.23), printed pp. 60–61."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.4.1"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Theorem 1.10, printed p. 15."
---

## Statement

Let $X:=C([0,1],\mathbb R)$ ([[def-continuous-real-functions-on-a-compact-metric-space]]),
let $m\ge1$, let $y_1,\ldots,y_m\in[0,1]$, and let
$\psi_1,\ldots,\psi_m\in X$. Define the finite-rank linear map
$$ (Fu)(x):=\sum_{j=1}^m\psi_j(x)u(y_j) $$
and, for $f\in X$, define the square matrix and vector
$$ M_{ij}:=\delta_{ij}-\psi_j(y_i),\qquad b_i:=f(y_i),\qquad 1\le i,j\le m. $$
Then the solutions of $(I-F)u=f$ are in bijection with the solutions $c\in\mathbb R^m$
of $Mc=b$, via
$$u(x)=f(x)+\sum_{j=1}^m\psi_j(x)c_j,\qquad c_i=u(y_i).$$
The nullspaces of $I-F$ and $M$ are linearly isomorphic by
$c\mapsto\sum_j\psi_jc_j$. In particular, $I-F$ is bijective if and only if
$M$ is nonsingular.

## Facts & Assumptions

**Given:** The space $X$, nodes $y_i$, continuous coefficient functions $\psi_i$, and $f\in X$ as in the Statement.

[F1] [[def-continuous-real-functions-on-a-compact-metric-space]]: members of $X$ are continuous real-valued functions on $[0,1]$, so finite linear combinations of the $\psi_j$ and $f$ lie in $X.

[F2] [[thm-rank-nullity]]: a linear map on the finite-dimensional space $\mathbb R^m$ is injective if and only if it is surjective, hence a square matrix is nonsingular exactly when its kernel is zero.

## Proof

**Given:** The data in the Statement, the operator $F$, the matrix $M$, and the vector $b$.

1.1 If $u$ solves $(I-F)u=f$, put $c_i:=u(y_i)$. Evaluating $u(x)-\sum_j\psi_j(x)u(y_j)=f(x)$ at $x=y_i$ gives $c_i-\sum_j\psi_j(y_i)c_j=f(y_i)$ for every $i$, which is exactly $Mc=b$. [given, F1, algebra]

2.1 Conversely, if $Mc=b$, define $u(x):=f(x)+\sum_j\psi_j(x)c_j$. By [F1] this lies in $X$. The matrix equation gives $u(y_i)=f(y_i)+\sum_j\psi_j(y_i)c_j=c_i$ for each $i$, so $u=f+Fu$ and it solves $(I-F)u=f$. These constructions are inverse because each reconstructed function has the prescribed grid values. [given, F1, step 1.1, algebra, construct]

3.1 If $Mc=0$ and $c\ne0$, set $v(x):=\sum_j\psi_j(x)c_j$. The homogeneous matrix equations imply $v(y_i)=c_i$; hence $v\ne0$ and $Fv=v$. Thus a nonzero matrix kernel gives a nonzero kernel of $I-F$. Conversely, if $(I-F)v=0$ and $v\ne0$, then $c_i:=v(y_i)$ satisfies $Mc=0$; if $c=0$, the formula $v=Fv=\sum_j\psi_jv(y_j)$ would give $v=0$, a contradiction. Therefore the two kernels are simultaneously trivial. By [F2] this is equivalent to $M$ being nonsingular; [step 2.1] then gives bijective solvability of the reconstructed equation exactly when the matrix is nonsingular. [given, F2, step 2.1, algebra] ∎