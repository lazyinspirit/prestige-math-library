---
id: def-invariant-polynomial-on-a-matrix-lie-algebra
kind: definition
title: Invariant symmetric polynomials on a matrix Lie algebra
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-conjugation-and-the-adjoint-representation-of-a-lie-group
justified_by: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: §5.1, invariant polynomials under matrix conjugation, printed pp. 27–28
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: Appendix C, printed pp. 289–312, Pfaffian invariant polynomial
verification:
  precheck: pass
  audited: 2026-09-30
---

## Definition

Let $G$ be either a real matrix Lie group $G\subseteq\operatorname{GL}_n(\mathbb R)$
with real Lie algebra $\mathfrak g$, or a complex matrix Lie group
$G\subseteq\operatorname{GL}_n(\mathbb C)$ with complex Lie algebra
$\mathfrak g$. In the real case let $K\in\{\mathbb R,\mathbb C\}$
and use polynomials in real linear coordinates with coefficients in $K$.
In the complex case take $K=\mathbb C$ and use polynomials in complex
linear coordinates (with no conjugate-coordinate variables). A homogeneous
degree-$k$ polynomial $P:\mathfrak g\to K$ is **$G$-invariant**
when
$$P(\operatorname{Ad}_g A)=P(A)\quad(g\in G,\ A\in\mathfrak g),$$
where the adjoint action is the one in
[[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]. For
$k\geq1$, its polarization is the unique symmetric multilinear map
$P_k:\mathfrak g^k\to K$ with
$$P(A)=P_k(A,\ldots,A).$$
Here multilinearity is over $\mathbb R$ when $\mathfrak g$ is a real Lie
algebra and over $\mathbb C$ when it is a complex Lie algebra; thus a
$\mathbb C$-valued polynomial on a real Lie algebra still has a real-multilinear
polarization. A complex matrix Lie group may also be regarded as a real Lie
group, in which case the underlying real Lie algebra and real-multilinear
convention apply; this is also the convention for real-valued coordinate
polynomials on a complex matrix Lie algebra, such as $z\mapsto\operatorname{Re}z$
on $\mathfrak{gl}_1(\mathbb C)$.

The polarization can be computed by
$$P_k(A_1,\ldots,A_k)=\frac1{k!}[t_1\cdots t_k]P(t_1A_1+\cdots+t_kA_k),$$
where the bracket extracts the coefficient of $t_1\cdots t_k$. A homogeneous
degree-$k$ coordinate polynomial makes this coefficient symmetric and
multilinear in the $A_j$; setting every $A_j=A$ gives the coefficient
$k!P(A)$, and the same extraction proves uniqueness. Since $K$ has
characteristic zero, division by $k!$ is valid. For $k=0$, the invariant
polynomials are constants, viewed as symmetric $0$-linear forms $P_0\in K$.
Finite sums of these homogeneous invariant polynomials form the invariant
polynomial algebra; sums and products remain invariant because the adjoint
action respects addition and multiplication of scalar values.

Polarization preserves invariance: simultaneous application of $\operatorname{Ad}_g$
to the arguments leaves every term in the coefficient formula unchanged.
Conversely, if a symmetric $P_k$ is invariant under simultaneous adjoint action,
its diagonal $A\mapsto P_k(A,\ldots,A)$ is a $G$-invariant polynomial.
Differentiating that multilinear invariance along $g(t)=\exp(tX)$ gives the
infinitesimal identity
$$\sum_{j=1}^kP_k(A_1,\ldots,[X,A_j],\ldots,A_k)=0\quad(X\in\mathfrak g).$$
Indeed, for matrices,
$\left.\frac{d}{dt}\right|_{0}\operatorname{Ad}_{\exp(tX)}A_j=[X,A_j]$,
so the chain rule gives exactly the displayed sum. For $k=0$ the sum is empty
and equals zero.

For $\mathfrak{gl}_r(\mathbb C)$, every coefficient of
$\det(I-tA)$ is invariant under $\operatorname{GL}_r(\mathbb C)$, since
$I-t(gAg^{-1})=g(I-tA)g^{-1}$ and determinant is unchanged by conjugation.
Its restriction to $\mathfrak u(r)$ is therefore invariant for the adjoint
action of $U(r)$. For the Pfaffian, use only
$\mathfrak{so}(2m)$ with $G=SO(2m)$ and a fixed oriented orthonormal frame.
For $A=(a_{ij})\in\mathfrak{so}(2m)$, define $\alpha_A=\frac12\sum_{i,j}
a_{ij}e^i\wedge e^j$ and set
$$\frac{\alpha_A^m}{m!}=\operatorname{Pf}(A)\,e^1\wedge\cdots\wedge e^{2m}.$$
This is a homogeneous polynomial of degree $m$. If $S\in O(2m)$, the induced
action on the top exterior power multiplies the oriented volume by $\det S$;
hence $\operatorname{Pf}(SAS^{\mathsf T})=(\det S)\operatorname{Pf}(A)$.
It is invariant under $SO(2m)$, and a reversal of orientation changes its
sign. The convention gives $\operatorname{Pf}\!\left(\begin{smallmatrix}0&a\\-a&0\end{smallmatrix}\right)=a$; for $m=0$ it gives the empty-matrix Pfaffian $1$.
