---
id: lem-fd-isotropic-linear-classification
kind: lemma
title: "Linear isotropic symmetric stress classification"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03
dependency_level: 0
proof_strategy: direct
deps:
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
dependency_roles:
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kelly, Solid Mechanics Part III, Appendix 4.A, pp. 406–411"
      url: "https://pkel015.connect.amazon.auckland.ac.nz/SolidMechanicsBooks/Part_IV/Chapter_1_Hyperelasticity/PDF/Elasticity_08_Appendix_Isotropic_Functions.pdf"
    - title: "Krzysztof Wilmanski, Continuum Thermodynamics, §4.2, pp. 46–50"
      url: "https://www.mech-wilmanski.de/graz2007.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $\operatorname{Sym}(3)=\{D\in\mathbb R^{3\times3}:D^T=D\}$, let $I$ be the $3\times3$ identity matrix, and define
$$\operatorname{SO}(3)=\{Q\in\mathbb R^{3\times3}:Q^TQ=I,\ \det Q=1\}.$$
An orthogonal matrix is one with $Q^TQ=I$; define $O(3)$ by this condition without the determinant restriction. For $D\in\operatorname{Sym}(3)$ set $\operatorname{tr}D=\sum_{i=1}^3D_{ii}$. Suppose $L:\operatorname{Sym}(3)\to\operatorname{Sym}(3)$ is real-linear, meaning $L(aD+bE)=aL(D)+bL(E)$ for all $a,b\in\mathbb R$ and $D,E\in\operatorname{Sym}(3)$, and satisfies
$$L(QDQ^T)=QL(D)Q^T\qquad(Q\in\operatorname{SO}(3),\ D\in\operatorname{Sym}(3)).$$
Then there are unique $\lambda,\mu\in\mathbb R$ such that
$$L(D)=2\mu D+\lambda(\operatorname{tr}D)I\qquad(D\in\operatorname{Sym}(3)).$$
Conversely, each map of this form is real-linear and satisfies the displayed equivariance. Linearity and rotational equivariance are hypotheses of this mathematical classification; it does not assert that a material response is linear or isotropic.

## Statement references

[Kelly, Solid Mechanics Part III, §4.A “Isotropic Functions,” pp. 406–411](https://pkel015.connect.amazon.auckland.ac.nz/SolidMechanicsBooks/Part_IV/Chapter_1_Hyperelasticity/PDF/Elasticity_08_Appendix_Isotropic_Functions.pdf)

[Krzysztof Wilmanski, Continuum Thermodynamics, §4.2 “Isotropy,” pp. 46–50](https://www.mech-wilmanski.de/graz2007.pdf)

## Facts & Assumptions

**Given:** The real-linear map $L$, its domain and codomain, and the stated $\operatorname{SO}(3)$ equivariance.

[A1] All products and transposes are ordinary real matrix operations. For $x,y\in\mathbb R^3$, $x^Ty=\sum_{i=1}^3x_i y_i$.

[F1] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a nonempty closed bounded subset of $\mathbb R^n$ is compact, and every continuous real-valued function on a nonempty compact subset of $\mathbb R^n$ attains its maximum and minimum. The supplier states this theorem in ZF.

## Proof


1.1 Fix $D\in\operatorname{Sym}(3)$ and define $q_D(x)=x^TDx$ on $S^2=\{x\in\mathbb R^3:x^Tx=1\}$. The sphere is nonempty, closed because $x\mapsto x^Tx$ is continuous, and bounded because each $|x_i|\le1$ there. The function $q_D$ is continuous because it is a finite sum of coordinate products. By [F1], $q_D$ has a maximum at some $e\in S^2$. [A1, F1, given, construct]

1.2 Let $X=\operatorname{diag}(d_1,d_2,d_3)$. The proper half-turns $Q_1=\operatorname{diag}(1,-1,-1)$, $Q_2=\operatorname{diag}(-1,1,-1)$, and $Q_3=\operatorname{diag}(-1,-1,1)$ each leave $X$ fixed. Equivariance gives $L(X)=Q_iL(X)Q_i^T$ for each $i$; because $L(X)$ is symmetric, these three equalities force every off-diagonal entry to vanish. [A1, given, algebra]

2.1 Let $y\in S^2$ satisfy $e^Ty=0$ and put $c(t)=(e+ty)/\sqrt{1+t^2}$. Then $c(t)^Tc(t)=1$ and differentiating at $0$ gives $c'(0)=y$. The differentiable function $t\mapsto q_D(c(t))$ has a maximum at $0$, so its derivative there is $0$: its right difference quotients are nonpositive and its left difference quotients are nonnegative. Differentiating gives $0=y^TDe+e^TDy=2y^TDe$, since $D^T=D$. By scaling, this holds for every $y\perp e$, so $De$ is a scalar multiple of $e$. [A1, step 1.1, algebra]

2.2 Let $E_{jj}$ be the diagonal matrix with a $1$ in position $(j,j)$ and $0$ elsewhere, and let the $j$th column of a matrix $M$ be the diagonal vector $(L(E_{jj})_{11},L(E_{jj})_{22},L(E_{jj})_{33})^T$. Linearity and step 1.2 give $\operatorname{diag}L(X)=M(d_1,d_2,d_3)^T$, where $\operatorname{diag}A=(A_{11},A_{22},A_{33})^T$. A permutation matrix $P$ permutes the coordinate basis; if $\det P=-1$, then $-P\in\operatorname{SO}(3)$ and $(-P)X(-P)^T=PXP^T$. Equivariance says $\operatorname{diag}L(PXP^T)=\operatorname{diag}(PL(X)P^T)$, hence $MPd=PMd$ for every vector $d$ and $MP=PM$. Equivalently $M_{ij}=M_{\pi(i)\pi(j)}$ for every permutation $\pi$, so its diagonal entries have a common value $c$ and its off-diagonal entries have a common value $d_0$. Thus $L(X)=(c-d_0)X+d_0(\operatorname{tr}X)I$. [A1, step 1.2, given, algebra]

3.1 If $z\perp e$, then $e^TDz=(De)^Tz=0$, so $e^\perp$ is invariant under $D$, and the restriction of $D$ to this two-dimensional plane is symmetric. Its unit circle is a nonempty closed bounded subset of $\mathbb R^3$; repeating the argument of steps 1.1 and 2.1 on this invariant plane gives a unit eigenvector in $e^\perp$. The remaining one-dimensional orthogonal complement is invariant and consists of eigenvectors. Hence $D$ has an orthonormal eigenbasis. Only finitely many vectors are chosen in this construction; no arbitrary choice principle is used. [A1, F1, step 1.1, step 2.1, construct]

4.1 By step 3.1 write an arbitrary $D\in\operatorname{Sym}(3)$ as $D=OXO^T$ with $O$ orthogonal and $X$ diagonal. If $\det O=-1$, change the sign of one eigenvector; this changes $\det O$ to $1$ and leaves $OXO^T$ unchanged. We may therefore take $O\in\operatorname{SO}(3)$. Equivariance and step 2.2 yield $L(D)=(c-d_0)D+d_0(\operatorname{tr}D)I$. [A1, step 3.1, step 2.2, given, algebra]

5.1 Set $2\mu=c-d_0$ and $\lambda=d_0$. Conversely, for any real $\lambda,\mu$, the map $D\mapsto2\mu D+\lambda(\operatorname{tr}D)I$ is linear and equivariant: $QIQ^T=I$, and $\operatorname{tr}(QDQ^T)=\sum_{j,k=1}^3D_{jk}\sum_{i=1}^3Q_{ij}Q_{ik}=\sum_{j=1}^3D_{jj}=\operatorname{tr}D$ because the columns of $Q$ are orthonormal. If two coefficient pairs give the same map, evaluation at $\operatorname{diag}(1,-1,0)$ makes their $2\mu$ coefficients equal, and evaluation at $I$ then makes their $\lambda$ coefficients equal. This proves existence, converse, and uniqueness. [A1, step 4.1, algebra] ∎

## Remarks

The proof uses only proper rotations; the replacement $P\mapsto -P$ handles improper coordinate permutations specifically because the dimension is three. This classification supplies the linear isotropic form when those assumptions are imposed. It does not derive linearity, isotropy, objectivity, a fluid constitutive law, or empirical coefficient values.
