---
id: ex-nrqm-composites-nonunique-mixed-ensemble
aliases: [nrqm-composites-example-nonunique-mixed-ensemble]
kind: example
domain: mathematics
title: "Nonunique mixed ensemble"
status: draft
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

where $(e_1,e_2)$ and $(e_+,e_-)$ are distinct orthonormal bases of $H$; hence a density operator does not determine its preparation ensemble: the same statistical operator arises from two different mixtures of pure states.
## Facts & Assumptions

**Given:** $H=\mathbb C^2$ with the standard inner product; the orthonormal basis $(e_1,e_2)$; the unit vectors $e_\pm$; the operators $T_{u,v}x=\langle x,v\rangle u$.

[A1] A density operator is a self-adjoint positive trace-class operator with trace $1$; if $(u_n)$ is an orthonormal family and $w_n\ge0$ with $\sum_nw_n=1$, then $\rho=\sum_nw_nT_{u_n,u_n}$ converges in trace norm to a density operator with $\operatorname{tr}\rho=\sum_nw_n=1$; in particular a finite family of unit vectors with weights $\frac12,\frac12$ gives a density operator ([[lem-nrqm-composites-density-and-scalar-spectral-probability]](a)).

[A2] $T_{u,v}$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$ and $\|T_{u,v}\|_1=\|u\|\,\|v\|$; the trace is linear on trace-class operators ([[lem-nrqm-composites-rank-one-operator-calculus]]).

[A3] In an orthonormal basis of $\mathbb C^2$ the matrix of $T_{u,v}$ is the column-times-row matrix $uv^*$; $T_{e_1,e_1}$ and $T_{e_2,e_2}$ therefore have matrices $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $\begin{pmatrix}0&0\\0&1\end{pmatrix}$.

## Verification

1.1 [Computational basis decomposition] By [A3], $\frac12T_{e_1,e_1}+\frac12T_{e_2,e_2}$ has matrix $\frac12\begin{pmatrix}1&0\\0&0\end{pmatrix}+\frac12\begin{pmatrix}0&0\\0&1\end{pmatrix}=\frac12 I$, and by [A2] it is a trace-class operator of trace $\frac12+\frac12=1$; by [A1] it is a density operator coming from the orthonormal family $(e_1,e_2)$ with weights $\frac12,\frac12$. [A1, A2, A3, algebra]

2.1 [Fixed $\pm$ basis decomposition] The vectors $e_\pm=\frac{1}{\sqrt2}(e_1\pm e_2)$ are unit and orthogonal since $\langle e_+,e_-\rangle=\frac12(\langle e_1,e_1\rangle-\langle e_1,e_2\rangle+\langle e_2,e_1\rangle-\langle e_2,e_2\rangle)=0$; their matrices are $T_{e_+,e_+}=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $T_{e_-,e_-}=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, so $\frac12T_{e_+,e_+}+\frac12T_{e_-,e_-}=\frac12 I$ again, with weights $\frac12,\frac12$ on an orthonormal family; thus the same operator $\frac12 I$ has a second decomposition. [step 1.1, A1, A3, algebra]

3.1 [The decompositions are different] The two orthonormal families are distinct: $|\langle e_1,e_+\rangle|=\frac{1}{\sqrt2}\notin\{0,1\}$, so $e_1$ is not a scalar multiple of $e_\pm$ and $T_{e_1,e_1}$ is not one of $T_{e_\pm,e_\pm}$ (their matrices of step 2.1 differ from $\begin{pmatrix}1&0\\0&0\end{pmatrix}$); hence the two lists of pure states are not the same up to reordering, while both convex combinations equal the single operator $\frac12 I$ by steps 1.1 and 2.1. Therefore a density operator (here $\frac12 I$, which is not pure) does not determine the ensemble of pure states from which it was prepared, and the expansion of [A1] is not unique. [step 1.1, step 2.1, A1, algebra] ∎

## Remarks

- **The density operator records the statistics, not the preparation.** Both decompositions yield the same expectation $\operatorname{tr}(\rho A)=\frac12\operatorname{tr}A$ for every operator $A$, so no measurement of an operator on $H$ alone distinguishes them; the difference is a feature of the preparation, not of $\rho$.
- **Nonuniqueness needs no optimization.** The two decompositions here are already orthonormal and vary only in the choice of basis, in contrast with decompositions into non-orthogonal pure states (which exist as well but are not needed for this example).
