---
id: lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle
kind: lemma
title: An integral Riemann form gives an explicit positive holomorphic line bundle
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- def-complex-vector-space-lattice-and-torus
- def-complex-manifolds-and-holomorphic-vector-bundles
- def-complex-linear-and-compatible-bundle-connections
- def-curvature-of-a-vector-bundle-connection
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, version0.10 (2020)
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: Chapter II section6, printed47, the Hermitian form, semicharacter equation(42) and automorphy cocycle preceding Appell–Humbert/Lefschetz. The semicharacter and all cocycle/metric identities are constructed explicitly below; neither named theorem is imported.
---

## Statement

Assume the Axiom of Choice. Let $V$ be a finite-dimensional complex vector space with complex structure $J$, let $\Lambda\subset V$ be a full lattice, and put $T=V/\Lambda$. Let $\psi$ be a real alternating bilinear form on $V$ such that $\psi(Jx,Jy)=\psi(x,y)$, the symmetric form $g(x,y)=\psi(x,Jy)$ is positive definite, and $\psi(\Lambda,\Lambda)\subseteq\mathbb Z$. Set
$$H(x,y)=\psi(x,Jy)-i\psi(x,y),\qquad b(\lambda,\mu)=\operatorname{Im}H(\lambda,\mu).$$
Then $H$ is a positive definite Hermitian form, complex-linear in its first variable. There is a map $\alpha:\Lambda\to\{1,-1\}$ satisfying
$$\alpha(\lambda+\mu)=\alpha(\lambda)\alpha(\mu)e^{-\pi i b(\lambda,\mu)}.$$
The nowhere-zero entire functions
$$j_\lambda(z)=\alpha(\lambda)\exp\!\left(\pi H(z,\lambda)+\frac\pi2H(\lambda,\lambda)\right)$$
satisfy $j_{\lambda+\mu}(z)=j_\lambda(z+\mu)j_\mu(z)$. The quotient of $V\times\mathbb C$ by $(z,t)\sim(z+\lambda,j_\lambda(z)t)$ is a holomorphic line bundle $L\to T$. Its squared fibre norm
$$|(z,t)|_h^2=e^{-\pi H(z,z)}|t|^2$$
is well defined and smooth. It has a compatible complex connection with local one-form $-\pi\partial H(z,z)$, of type $(1,0)$, and curvature
$$\Theta=\pi\partial\bar\partial H(z,z),\qquad i\Theta=i\pi\sum_{j,k}h_{j\bar k}\,dz_j\wedge d\bar z_k>0.$$
For zero-dimensional $V$ the formulas define the trivial line bundle over the one-point torus, with zero curvature and the usual vacuous positivity convention.

## Facts & Assumptions

**Given:** AC, the complex vector space, full lattice and compatible integral positive alternating form in the Statement.

[A1] AC is explicit ([[def-axiom-of-choice]]).

[F1] A full lattice is a finite-rank free integral subgroup spanning the underlying real vector space, and its quotient has local complex charts obtained from sufficiently small disjoint lattice translates ([[def-complex-vector-space-lattice-and-torus]]).

[F2] A holomorphic line bundle is glued by holomorphic nowhere-zero transition functions. A Hermitian metric is a smooth positive fibre form; complex connection forms transform by the frame-change formula, and curvature is $dA+A\wedge A$ ([[def-complex-manifolds-and-holomorphic-vector-bundles]], [[def-complex-linear-and-compatible-bundle-connections]], [[def-curvature-of-a-vector-bundle-connection]]).

## Proof

1.1 The form $g(x,y)=\psi(x,Jy)$ is symmetric by the compatibility of $\psi$: $\psi(y,Jx)=-\psi(Jy,x)=\psi(x,Jy)$. The same compatibility gives $g(Jx,Jy)=g(x,y)$ and $\psi(Jx,y)=-\psi(x,Jy)$. Substitution therefore gives $H(Jx,y)=iH(x,y)$ and $H(y,x)=\overline{H(x,y)}$, so $H$ is complex-linear in the first variable and conjugate-linear in the second. Its diagonal value is $g(x,x)>0$ for $x\ne0$. Finally $b=-\psi$ on $\Lambda$, so its lattice values are integers. [A1, given, algebra]

2.1 Choose an integral basis $\lambda_1,\ldots,\lambda_{2\dim V}$ of $\Lambda$ by [F1] and define $$\alpha\!\left(\sum_i n_i\lambda_i\right)=\exp\!\left(-\pi i\sum_{i<j}n_i n_j b(\lambda_i,\lambda_j)\right).$$ The integer exponent makes its value $1$ or $-1$. For lattice vectors with coordinates $n_i,m_i$, the exponent difference at their sum is $-\pi i\sum_{i<j}(n_i m_j+m_i n_j)b_{ij}$. Replacing the plus by a minus in the second term changes this exponent by $-2\pi i$ times an integer, so its exponential is $e^{-\pi i b(\lambda,\mu)}$. This proves the semicharacter identity, including zero and negative integer coordinates. [F1, step 1.1, choose, construct, algebra]

3.1 The functions $j_\lambda$ in the Statement are nonzero and entire because $H(z,\lambda)$ is complex-linear in $z$. The quotient $j_\lambda(z+\mu)j_\mu(z)/j_{\lambda+\mu}(z)$ is the product of $\alpha(\lambda)\alpha(\mu)/\alpha(\lambda+\mu)=e^{\pi i b(\lambda,\mu)}$ and the exponential of $\frac\pi2(H(\mu,\lambda)-H(\lambda,\mu))=-\pi i b(\lambda,\mu)$. It is therefore one. In particular $j_0=1$, and this identity supplies an actual lattice action on $V\times\mathbb C$. [step 1.1, step 2.1, construct, algebra]

4.1 Choose a small open ball $D\subset V$ whose difference set meets $\Lambda$ only at zero. Over its image in $T$, every orbit has a unique representative in each fixed translate of $D$; the fibre coordinate provides a trivial line-bundle chart. On overlapping such charts the representative changes by a locally constant lattice vector, and the fibre transition is exactly the corresponding $j_\lambda$ or its inverse. Step 3.1 gives the cocycle identities, so these charts glue to a holomorphic line bundle by [F2]. The metric descends because $$e^{-\pi H(z+\lambda,z+\lambda)}|j_\lambda(z)|^2=e^{-\pi H(z,z)},$$ using $|\alpha|=1$, $|j_\lambda(z)|^2=e^{2\pi\operatorname{Re}H(z,\lambda)+\pi H(\lambda,\lambda)}$, and the Hermitian expansion of $H(z+\lambda,z+\lambda)$. It is positive and smooth in these charts. [F1, F2, step 1.1, step 3.1, choose, construct, algebra]

5.1 In the cover frame set $A_z=-\pi\partial H(z,z)=\partial\log h_z$. Under the change of representative $z\mapsto z+\lambda$, the quotient frames differ by $j_\lambda(z)^{-1}$. One has $A_{z+\lambda}=A_z-d\log j_\lambda(z)$, precisely the connection transformation in [F2]. Thus $d+A$ defines a global complex connection. It is compatible with the metric since $A+\bar A=d\log h$, and its $(0,1)$ part is the usual holomorphic-bundle $\bar\partial$, because $A$ has type $(1,0)$. Its line-bundle curvature is $dA=\pi\partial\bar\partial H(z,z)$; the wedge-square vanishes for a scalar one-form. In complex coordinates this is the displayed constant matrix form, whose $i$-multiple is positive because $H$ is positive definite. It is invariant under lattice translations and thus descends to $T$. For $V=0$ the basis and sums are empty, $j_0=1$, and the connection and curvature are zero. This proves all assertions without an Appell–Humbert classification or projective-embedding assertion. [F2, step 1.1, step 3.1, step 4.1, algebra] ∎

## Source-reading boundary

The cached Milne CM notes were actually read at Chapter II section6, printed46–47, including the Hermitian form, equation(42), the automorphy cocycle and the subsequent named Appell–Humbert/Lefschetz statements. The source calls the surrounding proof a sketch. The construction above supplies the finite-basis semicharacter and all identities locally, and imports neither classification of line bundles nor Lefschetz's embedding theorem.
