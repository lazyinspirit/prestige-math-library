---
id: thm-mahler-compactness-and-split-orbit-escape
kind: theorem
title: "Mahler compactness and split-eigenvector escape in the corrected entropy argument"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-unimodular-lattice-in-r2, thm-bezout-identity, thm-heine-borel-rn, thm-compactness-under-continuous-maps]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf"
      locator: "§2, printed pp. 2–3: corrected split-algebra escape, integer eigenvectors and the Mahler compactness use."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Chapter 4, Lattices, pp. 73–75."
---

## Statement

Let $X_2=\mathrm{SL}_2(\mathbb R)/\mathrm{SL}_2(\mathbb Z)$, identified with unimodular lattices in $\mathbb R^2$. A subset of $X_2$ has compact closure exactly when all its nonzero lattice vectors have a uniform positive lower bound in Euclidean length. If $A\in M_2(\mathbb Z)$ has two distinct integer eigenvalues, it has nonzero integer row eigenvectors $z_1,z_2$ satisfying $\|z_1\|_\infty\|z_2\|_\infty<2\|A\|_\infty$, where the matrix norm is the operator norm induced by the vector supremum norm (maximum absolute row sum). For every subgroup $\Gamma\le\mathrm{SL}_2(\mathbb Z)$ and compact $\Omega\subset\Gamma\backslash\mathrm{SL}_2(\mathbb R)$, there is $c_\Omega>0$ such that $\|zg\|_\infty\ge c_\Omega$ for every $\Gamma g\in\Omega$ and nonzero integer row $z$. In particular any sequence admitting such row vectors of length tending to zero leaves every compact set. When the two eigenvalues of an integer matrix are distinct rational numbers, its rational algebra is $\mathbb Q\oplus\mathbb Q$, rather than a real quadratic field.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits, §2, printed pp. 2–3: corrected split-algebra escape, integer eigenvectors and the Mahler compactness use.](https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf)

[J. S. Milne, Algebraic Number Theory v3.08, Chapter 4, Lattices, pp. 73–75.](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)
## Facts & Assumptions

**Given:** The objects, norms and hypotheses in the Statement. The integer subgroup hypothesis makes the row-lattice expression independent of the representative $g$.

[F1] [[def-unimodular-lattice-in-r2]]: a unimodular lattice has a basis of determinant of absolute value one.

[F2] [[thm-bezout-identity]]: a primitive integer pair extends to an integer basis of determinant one.

[F3] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F4] [[thm-compactness-under-continuous-maps]]: a continuous image of a compact set is compact; a continuous real function on a compact set attains its extrema.

## Proof

**Proof technique:** direct.

1.1 A bounded subset of a full lattice $B\mathbb Z^2$ is finite: its inverse image under the fixed invertible matrix $B$ is bounded and contains finitely many integer pairs. Thus the least nonzero Euclidean length is positive and attained. Choose a shortest vector $v_1$. Its integer coordinates in a lattice basis are primitive, since division by their common divisor otherwise gives a shorter lattice vector. By [F2], complete it to an oriented lattice basis $(v_1,v_2)$ of determinant one, and replace $v_2$ by $v_2-mv_1$ for an integer $m$ so its component parallel to $v_1$ has magnitude at most $|v_1|/2$. Its perpendicular component has magnitude $1/|v_1|$, since the determinant is one. Therefore
\[
|v_1|^2\le |v_2|^2\le |v_1|^2/4+|v_1|^{-2},\qquad |v_1|^4\le4/3.
\]
[F1, F2, construct, algebra]

1.2 If all shortest lengths are at least $\epsilon>0$, the preceding bases have both columns bounded by a constant depending only on $\epsilon$: use $\epsilon\le|v_1|<2$ in step 1.1. The matrices of determinant one with these column bounds form a closed bounded, hence compact set by [F3]. Their continuous image in $X_2$ is compact and contains the proposed set. The quotient $X_2$ is Hausdorff: $\mathrm{SL}_2(\mathbb Z)$ is closed, the quotient map is open, and two inequivalent matrices have product outside this closed subgroup, so sufficiently small open neighborhoods have disjoint quotient images. Its compact subsets are consequently closed, proving compactness of the closure. [step 1.1, F3, F4, algebra]

1.3 Conversely the shortest-length function is continuous and positive. To check continuity at a matrix $B_0$, restrict to a sufficiently small matrix neighborhood where the inverse norms are uniformly bounded. A fixed column gives a uniform upper bound on the shortest length; only finitely many integer coordinate vectors can realize a length below that upper bound anywhere in this neighborhood. The minimum is therefore the minimum of finitely many continuous positive functions there. It descends to $X_2$. On a compact closure its minimum is positive by [F4]. This proves both directions of the criterion. [step 1.1, F4, algebra]

1.4 The map $\Gamma g\mapsto g^{\mathsf t}\mathbb Z^2\in X_2$ is continuous and well defined when $\Gamma\le\mathrm{SL}_2(\mathbb Z)$, because $(\gamma g)^{\mathsf t}\mathbb Z^2=g^{\mathsf t}\mathbb Z^2$. Its image of $\Omega$ is compact. Step 1.3 supplies a positive Euclidean lower bound for all its nonzero vectors, hence a positive supremum-norm lower bound by $|v|\le\sqrt2\|v\|_\infty$. This proves the row-vector assertion and its escape consequence. [step 1.3, F4, algebra]

1.5 Let the integer eigenvalues be $\lambda_1\ne\lambda_2$ and put $B=A-\lambda_1I$. This is a nonzero rank-one integer matrix. Write $B=uv^{\mathsf t}$ with $u$ a primitive nonzero integer column and $v$ an integer column. Such a factorization follows by dividing a nonzero integer column by its coordinate gcd: every other column is a rational multiple of $u$, and applying an integer Bezout linear combination of the coordinates of $u$ shows that its multiplier is an integer. The row $z_1=(u_2,-u_1)$ annihilates $B$, whereas $v^{\mathsf t}B=(\operatorname{tr}B)v^{\mathsf t}=(\lambda_2-\lambda_1)v^{\mathsf t}$. Divide $v$ by its coordinate gcd to obtain the integer row eigenvector $z_2$. Thus
\[
\|z_1\|_\infty\|z_2\|_\infty\le\|u\|_\infty\|v\|_\infty=\max_{i,j}|B_{ij}|\le\|A\|_\infty+|\lambda_1|\le2\|A\|_\infty.
\]
The last bound follows by applying the operator norm to a real eigenvector. [given, F2, algebra]

1.6 The inequality is strict unless an entry of $B$ has magnitude $2M$, where $M=\|A\|_\infty$. In that exceptional case it is diagonal, $|\lambda_1|=M$, and the corresponding entry of $A$ is $-\lambda_1$. The other entry in that row is zero by the row-sum bound. Triangularity and the fact that $\lambda_1$ is an eigenvalue force the other diagonal entry to be $\lambda_1$; its other row entry is also zero by the row-sum bound. Thus $A$ is diagonal with entries $\lambda_1,-\lambda_1$, up to order, and coordinate unit rows give product $1<2M$ since $M$ is a positive integer. Finally distinct rational eigenvalues diagonalize the matrix over $\mathbb Q$; evaluation at the two eigenvalues identifies its rational polynomial algebra with $\mathbb Q\times\mathbb Q$ (linear interpolation proves surjectivity). [step 1.5, algebra] ∎
