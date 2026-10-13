---
id: ex-nrqm-composites-nonunique-mixed-ensemble
aliases: [nrqm-composites-example-nonunique-mixed-ensemble]
kind: example
domain: mathematics
title: "Nonunique mixed ensemble"
status: published
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus]
dependency_roles:
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.3 pp. 121-128 (density operators and their nonunique decompositions)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 10 'Interpreting Quantum Mechanics', pp. 1-12"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap10.pdf"
---

## Example

On $H=\mathbb C^2$ with the standard inner product and orthonormal basis $e_1=\binom10$, $e_2=\binom01$, put $e_\pm:=\frac{1}{\sqrt2}(e_1\pm e_2)$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]]). Then the maximally mixed density operator $\frac12 I$ admits the two orthonormal convex decompositions

$$\frac12 I=\frac12T_{e_1,e_1}+\frac12T_{e_2,e_2}=\frac12T_{e_+,e_+}+\frac12T_{e_-,e_-},$$

where $(e_1,e_2)$ and $(e_+,e_-)$ are distinct orthonormal bases of $H$. Thus the same density operator has two distinct orthonormal convex decompositions into rank-one density operators.
## Facts & Assumptions

**Given:** $H=\mathbb C^2$ with the standard inner product; the orthonormal basis $(e_1,e_2)$; the unit vectors $e_\pm$; the operators $T_{u,v}x=\langle x,v\rangle u$.

[A1] A density operator is a self-adjoint positive trace-class operator with trace $1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]](a), definition only). For a finite family of unit vectors $u_jinmathbb C^2$ and weights $w_jge0$ with $sum_jw_j=1$, set $
ho:=sum_jw_ju_ju_j^*$. This is a finite matrix and hence trace class; it is self-adjoint, $x^*
ho x=sum_jw_j|u_j^*x|^2ge0$, and its finite trace is $sum_jw_jsum_{k=1}^2|(u_j)_k|^2=sum_jw_j=1$. Thus it is a density operator even without orthogonality. This is a local finite-matrix calculation, not an invocation of the supplier's Countable Choice expansion.

[A2] $T_{u,v}$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$ and $\|T_{u,v}\|_1=\|u\|\,\|v\|$; the trace is linear on trace-class operators ([[lem-nrqm-composites-rank-one-operator-calculus]]). In the present $H=\mathbb C^2$ these facts follow directly from $T_{u,v}=uv^*$: the diagonal sum is $\sum_ku_k\overline{v_k}=\langle u,v\rangle$, and $(uv^*)^*(uv^*)=\|u\|^2vv^*$ has at most one nonzero eigenvalue, $\|u\|^2\|v\|^2$, so its singular-value sum is $\|u\|\|v\|$. Finite diagonal sums are linear. No choice principle is used in these finite computations.

[A3] In an orthonormal basis of $\mathbb C^2$ the matrix of $T_{u,v}$ is the column-times-row matrix $uv^*$; $T_{e_1,e_1}$ and $T_{e_2,e_2}$ therefore have matrices $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $\begin{pmatrix}0&0\\0&1\end{pmatrix}$.

## Verification

1.1 [Computational basis decomposition] By [A3], $\frac12T_{e_1,e_1}+\frac12T_{e_2,e_2}$ has matrix $\frac12\begin{pmatrix}1&0\\0&0\end{pmatrix}+\frac12\begin{pmatrix}0&0\\0&1\end{pmatrix}=\frac12 I$, and by [A2] it is a trace-class operator of trace $\frac12+\frac12=1$; by [A1] it is a density operator coming from the orthonormal family $(e_1,e_2)$ with weights $\frac12,\frac12$. [A1, A2, A3, algebra]

2.1 [Fixed $\pm$ basis decomposition] The vectors $e_\pm=\frac{1}{\sqrt2}(e_1\pm e_2)$ are unit and orthogonal since $\langle e_+,e_-\rangle=\frac12(\langle e_1,e_1\rangle-\langle e_1,e_2\rangle+\langle e_2,e_1\rangle-\langle e_2,e_2\rangle)=0$; their matrices are $T_{e_+,e_+}=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $T_{e_-,e_-}=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, so $\frac12T_{e_+,e_+}+\frac12T_{e_-,e_-}=\frac12 I$ again, with weights $\frac12,\frac12$ on an orthonormal family; thus the same operator $\frac12 I$ has a second decomposition. [step 1.1, A1, A3, algebra]

3.1 [The decompositions are different] The two orthonormal families are distinct: $|\langle e_1,e_+\rangle|=\frac{1}{\sqrt2}\notin\{0,1\}$, so $e_1$ is not a scalar multiple of $e_\pm$ and $T_{e_1,e_1}$ is not one of $T_{e_\pm,e_\pm}$ (their matrices of step 2.1 differ from $\begin{pmatrix}1&0\\0&0\end{pmatrix}$); hence the two lists of rank-one density operators are not the same up to reordering, while both convex combinations equal the single operator $\frac12 I$ by steps 1.1 and 2.1. Therefore this density operator has a nonunique orthonormal convex decomposition into rank-one density operators, consistent with the expansion in [A1]. [step 1.1, step 2.1, A1, algebra] ∎

## Remarks

- **The operator identity is basis-independent.** Both decompositions define the same matrix $\rho=\frac12I$, so $\operatorname{tr}(\rho A)=\frac12\operatorname{tr}A$ for every endomorphism $A$ of $H$.
- **Nonuniqueness needs no optimization.** The two decompositions here are already orthonormal and vary only in the choice of basis; no operational preparation procedure is specified.
