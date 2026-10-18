---
id: ex-one-level-overlapping-schwarz-condition-number-growth
kind: example
title: "One-level point-patch Schwarz loses uniformity on 1D Poisson"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - thm-additive-schwarz-stable-decomposition-condition-number
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1, pp. 585–592: subspace correction, point-Jacobi splitting, and additive condition estimates."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 3 §§3.2–3.4, pp. 41–50: overlapping local spaces and coarse-grid correction."
---

## Example

For the uniform $N$-interval P1 discretization of the Dirichlet Poisson problem
on $(0,1)$, one-level exact point-patch additive Schwarz has
$$ \kappa_A(BA)=\frac{1+\cos(\pi/N)}{1-\cos(\pi/N)}. $$
The patches are the supports of the interior nodal hats; they overlap with
their neighbors and have bounded multiplicity. Nevertheless the condition
number diverges with the number $N-1$ of local spaces.

## Facts & Assumptions

**Given:** An integer $N\ge2$, $h=1/N$, the fine-grid P1 basis
$\phi_1,\ldots,\phi_{N-1}$ with $x_0=x_N=0$, and the explicitly defined Dirichlet matrix
$A_N=h^{-1}\operatorname{tridiag}(-1,2,-1)$, whose diagonal entries are $2/h$
and whose first off-diagonal entries are $-1/h$.

[F1] [[def-overlapping-schwarz-subspace-correction-data]]: for injections
$R_i$ and SPD local matrices $A_i$, the exact one-level additive
preconditioner is $B=\sum_iR_iA_i^{-1}R_i^{\mathsf T}$.

## Verification

1.1 Direct expansion gives $x^{\mathsf T}A_Nx=h^{-1}\sum_{j=1}^N(x_j-x_{j-1})^2$ with $x_0=x_N=0$. It is positive for every nonzero vector because vanishing of all successive differences and $x_0=0$ forces every $x_j=0$. For the point-patch injection $R_i=e_i$, the local matrix is $A_i=e_i^{\mathsf T}A_Ne_i=2/h$. Thus [F1] gives $B_N=\sum_i e_i(h/2)e_i^{\mathsf T}=(h/2)I$. Each corresponding nodal hat is supported on two adjacent mesh intervals, so neighboring local supports overlap and at most three closed supports meet at a point. [F1, given, algebra]

2.1 For $k=1,\ldots,N-1$, set $v_j^{(k)}=\sin(jk\pi/N)$ for $j=0,\ldots,N$. The endpoints vanish. With $\theta=k\pi/N$, the identity $v_{j-1}^{(k)}+v_{j+1}^{(k)}=2\cos(\theta)v_j^{(k)}$ gives $A_Nv^{(k)}=\frac{2}{h}(1-\cos\theta)v^{(k)}.$ These eigenvalues are distinct because cosine is strictly decreasing on $(0,\pi)$. Since $A_N$ is symmetric, eigenvectors for distinct eigenvalues are orthogonal: for $k\ne l$, $(\lambda_k-\lambda_l)(v^{(k)})^{\mathsf T}v^{(l)}=(A_Nv^{(k)})^{\mathsf T}v^{(l)}-(v^{(k)})^{\mathsf T}A_Nv^{(l)}=0$. The vectors are nonzero, so the $N-1$ orthogonal vectors form a basis of $\mathbb R^{N-1}$. Multiplication by $B_N=(h/2)I$ gives eigenvalues $1-\cos(k\pi/N)$ for $B_NA_N$. [given, step 1.1, algebra]

3.1 The smallest and largest values occur at $k=1$ and $k=N-1$, respectively. Therefore $\kappa_A(B_NA_N) =\frac{1-\cos((N-1)\pi/N)}{1-\cos(\pi/N)} =\frac{1+\cos(\pi/N)}{1-\cos(\pi/N)}.$ As $N\to\infty$ the numerator tends to $2$ and the positive denominator tends to $0$, so the condition numbers diverge. [step 2.1, algebra] ∎
