---
id: lem-real-cholesky-recurrence-computes-factorization
kind: lemma
title: "The real Cholesky recurrence computes the positive-diagonal factor"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-rank-nullity
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §2.9.3"
      url: "https://fncbook.com/structure/"
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $n\ge1$ and let $M\in\mathbb R^{n\times n}$ be symmetric positive definite, meaning $x^TMx>0$ for every nonzero $x\in\mathbb R^n$. Initialize $R$ as the zero $n\times n$ matrix. For $j=1,\ldots,n$ in order, set
$$p_j=M_{jj}-\sum_{k<j}R_{jk}^2,\qquad R_{jj}=\sqrt{p_j},$$
and then, for $i=j+1,\ldots,n$ in order, set
$$R_{ij}=\frac{M_{ij}-\sum_{k<j}R_{ik}R_{jk}}{R_{jj}}.$$
Every pivot $p_j$ is positive, so the recurrence is well-defined and returns a lower-triangular matrix $R$ with positive diagonal satisfying $M=RR^T$.

## Statement references

[[def-cholesky-factorisation-with-positive-diagonal]]: over the real numbers, positive definiteness means $x^TMx>0$ for every nonzero vector, and the Cholesky factor has the form $RR^T$ with $R$ lower triangular and positive diagonal.

[[thm-rank-nullity]]: a linear map with finite-dimensional domain satisfies dimension equals nullity plus rank; in particular, a square map with zero kernel is invertible.

[David Bindel, CS 4220: Numerical Analysis, “Cholesky factorization”](https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html): complete block-recursion discussion; it leaves positivity of the Schur complement as an exercise, which the proof below supplies.

[Tobin A. Driscoll and Richard J. Braun, *Fundamentals of Numerical Computation*, §2.9.3](https://fncbook.com/structure/): symmetric positive-definite matrices, the positive-diagonal Cholesky factor, and the LDLᵀ square-root construction.

## Facts & Assumptions

**Given:** A real symmetric positive-definite matrix $M\in\mathbb R^{n\times n}$ with $n\ge1$. Prove the displayed recurrence is defined at every stage and returns its positive-diagonal Cholesky factor.

[A1] $M$ is real symmetric and $x^TMx>0$ for every nonzero $x\in\mathbb R^n$.

[F1] [[def-cholesky-factorisation-with-positive-diagonal]]: over $\mathbb R$, positive definiteness means symmetry and $x^TMx>0$ for every nonzero vector; a Cholesky factor is lower triangular with positive diagonal and satisfies $M=RR^T$.

[F2] [[thm-rank-nullity]]: for a linear map on a finite-dimensional space, dimension equals kernel dimension plus image dimension; hence zero kernel implies full-dimensional image and invertibility.

## Proof

1.1 Induct on $j$. At $j=1$, testing $e_1$ in [A1] gives $p_1=M_{11}>0$. For $j>1$, suppose columns $1,\ldots,j-1$ have been computed with positive diagonal and let $T=R_{\{1,\ldots,j-1\},\{1,\ldots,j-1\}}$ and $A=M_{\{1,\ldots,j-1\},\{1,\ldots,j-1\}}$; the induction hypothesis gives $A=TT^T$. The block $A$ is positive definite because extending any nonzero $x\in\mathbb R^{j-1}$ by zeros gives a nonzero vector to which [A1] applies. Its kernel is therefore zero; [F2] makes $A$ invertible. The lower-triangular matrix $T$ is invertible as well, since solving $Tx=0$ row by row with its positive diagonal forces every coordinate of $x$ to be zero. Put $m=(M_{1j},\ldots,M_{j-1,j})^T$ and $u=(R_{j1},\ldots,R_{j,j-1})^T$. The already computed recurrence at each column $i<j$ gives $M_{ij}=\sum_{k<i}R_{ik}R_{jk}+R_{ii}R_{ji}$, so $Tu=m$. Since $A=TT^T$, this implies $m^TA^{-1}m=u^Tu$. The leading $j\times j$ block $P$ of $M$ is positive definite by the same zero-extension argument. For the nonzero vector $(-A^{-1}m,1)$, its quadratic form under $P$ is $M_{jj}-m^TA^{-1}m=M_{jj}-u^Tu=p_j>0$. Thus $R_{jj}=\sqrt{p_j}$ is positive and every division defining $R_{ij}$ is by a positive number. The recurrence is well-defined through column $j$, and the same formulas give the factorization identity on the leading $j\times j$ block. [given, A1, F1, F2, induction, algebra]

2.1 For every $j$, the pivot equation gives $M_{jj}=\sum_{k<j}R_{jk}^2+R_{jj}^2=(RR^T)_{jj}$. For every $i>j$, rearranging the recurrence gives $M_{ij}=\sum_{k<j}R_{ik}R_{jk}+R_{ij}R_{jj}=(RR^T)_{ij}$. These identities fill the diagonal and lower triangle; symmetry of $M$ and $RR^T$ fills the upper triangle. The initialized matrix remains lower triangular, and each diagonal entry is positive by step 1.1, so it is the required Cholesky factor. [step 1.1, F1, algebra] ∎
