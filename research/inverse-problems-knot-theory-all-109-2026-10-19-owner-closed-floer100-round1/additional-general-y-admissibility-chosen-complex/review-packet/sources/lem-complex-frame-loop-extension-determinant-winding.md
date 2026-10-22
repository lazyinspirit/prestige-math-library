---
id: lem-complex-frame-loop-extension-determinant-winding
kind: lemma
title: "A complex frame loop extends exactly when its determinant winding vanishes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-invertible-matrix-and-general-linear-group
  - def-winding-number-closed-complex-contour
proof_strategy: direct
axiom_use: "Choice-free finite-dimensional constructions; matrix ODEs are solved by an explicit uniformly convergent iterated-integral series, not by a stronger-choice global ODE theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles and K-Theory, §1.2, printed pp.23–26, clutching functions and Gram–Schmidt deformation"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
    - title: "Robert Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §4.1, printed pp.972–974, boundary trivializations in the index calculation"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Let $m\ge1$ and let $G:\mathbb R/\mathbb Z\to\operatorname{GL}_m(\mathbb C)$ be smooth. Its determinant winding is the integer
$$w(G)=\frac1{2\pi i}\int_0^1\frac{(\det G)'(s)}{\det G(s)}\,ds.$$
There is a smooth map $\widehat G:\overline{\mathbb D}\to\operatorname{GL}_m(\mathbb C)$ restricting to $G$ on the positively oriented boundary if and only if $w(G)=0$. When it exists the extension can be chosen independent of radius on a boundary collar. More generally a prescribed smooth invertible matrix map on a collar of the disk boundary extends smoothly to the disk, agreeing on a smaller boundary collar, exactly when its boundary determinant winding is zero. The construction is finite dimensional and choice-free.

## Statement references

[[def-invertible-matrix-and-general-linear-group]]

[[def-winding-number-closed-complex-contour]]

## Facts & Assumptions

**Given:** A positive integer $m$ and the specified smooth loop of invertible complex matrices.

[F1] The general linear group consists of invertible matrices ([[def-invertible-matrix-and-general-linear-group]]), and the winding of a smooth closed nonzero complex contour $z$ is $(2\pi i)^{-1}\int z'/z$ ([[def-winding-number-closed-complex-contour]]). All matrix adjoints below use the standard Hermitian inner product; $U(m)=\{Q:Q^*Q=I\}$ and $SU(m)=\{Q\in U(m):\det Q=1\}$.

## Proof

1.1 **Scalar winding and the necessary obstruction.** For a smooth nonzero complex loop $z$, choose one real argument $\psi(0)$ of $z(0)/|z(0)|$ and set $\psi(s)=\psi(0)+\operatorname{Im}\int_0^s z'(a)/z(a)\,da$. Differentiating shows $z(s)/|z(s)|=e^{i\psi(s)}$: both sides have logarithmic derivative $i\operatorname{Im}(z'/z)$ and the same initial value. Also $\operatorname{Re}(z'/z)=(\log|z|)'$, so its real integral over a loop is zero. Closedness gives $\psi(1)-\psi(0)=2\pi k$ for one integer $k$, and the displayed winding is exactly $k$. For a smooth family of nonzero loops, the integral is a continuous integer-valued function, hence constant. If an invertible matrix map fills the disk, take its determinant on concentric circles. Their windings are constant for positive radius and tend to zero as radius tends to zero, since the map is smooth and its determinant stays nonzero near the center. Thus the boundary winding must vanish. This also proves additivity of winding under products of nonzero scalar loops by the product logarithmic derivative. [F1, given, construct, algebra]

2.1 **Reduce to a special unitary loop.** Apply the finite Gram–Schmidt formulas to the columns of $G$, obtaining a smooth factorization $G=QR$ with $Q\in U(m)$ and $R$ upper triangular with positive real diagonal. Every denominator is the nonzero norm of the next orthogonalized column; independence of the original columns ensures it is positive. The matrices $R_r=(1-r)R+rI$ are invertible upper triangular with positive diagonal, so $Q R_r$ is a smooth homotopy from $G$ to $Q$. Their determinants have the same winding since $\det R_r$ is positive real. If $w(G)=0$, step 1.1 gives a periodic smooth real lift $\psi(s)$ with $\det Q(s)=e^{i\psi(s)}$. The loops $Q(s)\operatorname{diag}(e^{-ir\psi(s)},1,\ldots,1)$ give a smooth homotopy from $Q$ to a loop in $SU(m)$. For $m=1$ this final loop is the constant identity. [F1, step 1.1, construct, algebra]

3.1 **Contract a loop of unit first columns.** Suppose $m\ge2$ and $A(s)$ is a smooth loop in $SU(m)$, with first column $v(s)\in S^{2m-1}$. Choose a point $q$ of that sphere outside both $v(S^1)$ and the point $e_1$. Such a point exists without a selection principle: a smooth loop has a bounded speed $L$ and is covered by $N$ balls of radius $L/N$; in a fixed bounded sphere coordinate cube, whose dimension $d=2m-1>1$, their coordinate box volumes have sum at most $C N(L/N)^d$, tending to zero. Finite subadditivity of box volume shows these boxes cannot cover that cube for large $N$. Removing the one additional point $e_1$ does not change this argument. Stereographic projection from $q$ identifies its complement with $\mathbb R^{2m-1}$. Straight-line contraction there from the loop to the image of $e_1$, followed by inverse stereographic projection, gives a smooth map $v(s,r)$ of unit vectors with $v(s,0)=v(s)$ and $v(s,1)=e_1$. [step 2.1, construct, algebra]

4.1 **Lift that contraction with a trace-free matrix ODE.** Write $a=v^*v_r$, which is purely imaginary because $v^*v=1$, and define $K=v_rv^*-v v_r^*-a vv^*-\frac{a}{m-1}(I-vv^*).$ Direct multiplication gives $K^*=-K$, $\operatorname{tr}K=0$, and $Kv=v_r$. For each $s$ solve $F_r=K F$, $F(s,0)=A(s)$, using the series $F=(I+\int_0^r K(r_1)dr_1+\int_{0<r_2<r_1<r}K(r_1)K(r_2)dr_2dr_1+\cdots)A(s)$. If $\|K\|\le M$, the $n$th term has norm at most $M^n/n!$. Derivatives in the compact parameter $s$ are bounded by the same factorial denominator times a polynomial in $n$ and bounds for finitely many derivatives of $K$; the series and all these derivatives converge uniformly. Differentiation in $r$ follows from its integral equation, giving a smooth periodic family. Uniqueness follows by iterating the integral inequality for the difference of two solutions: its supremum is bounded by $M^n/n!$ times that supremum for every $n$, hence is zero. The derivative of $F^*F$ is zero, so $F$ is unitary. The determinant derivative is $\det F\operatorname{tr}(F^{-1}KF)=0$, hence $\det F=1$. The first column and $v(s,r)$ satisfy the same ODE with the same initial value, so they agree. At $r=1$ the loop therefore has the block form $\operatorname{diag}(1,A_1(s))$ with $A_1(s)\in SU(m-1)$. [step 3.1, construct, algebra]

5.1 **Finish the contraction and fill the disk.** Repeat the first-column contraction and matrix-ODE lift on the smaller special unitary block. Finite induction on $m$, ending with $SU(1)=\{1\}$, contracts the original special unitary loop to the identity. Combine this with step 2.1. Smoothly reparametrize each homotopy to be stationary near its two time endpoints before concatenation; the result is a smooth homotopy $H(s,r)$ from $G$ at $r=0$ to the constant identity at $r=1$. In polar coordinates put $\widehat G(\rho e^{2\pi i s})=H(s,\sigma(\rho))$, where $\sigma=0$ near $\rho=1$ and $\sigma=1$ near $\rho=0$. It is smooth at the center because it is constant there, and it is independent of radius near the boundary. It stays invertible throughout the homotopy. Together with step 1.1 this proves the equivalence for a prescribed boundary loop. [step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 **Preserve prescribed collar data.** Let $C(\rho,s)$ be the given smooth invertible matrix map for $c<\rho\le1$. Choose $c<c_1<c_2<1$ and a smooth radial function $f$ on $[c_1,1]$ equal to the identity near $1$ and to $c_2$ near $c_1$, with values in $(c,1]$. Then $C(f(\rho),s)$ retains the original map on a smaller outer collar and is independent of radius on an inner collar. Its inner loop has the same determinant winding as the original boundary loop by step 1.1. If that winding is zero, step 5.1 fills the inner loop with the same radius-independent collar; rescale its disk and paste along the constant collar. The maps and all derivatives agree there. Necessity still follows from step 1.1. This proves the stronger relative statement, with only finite-dimensional formulas, ordinary one-variable integrals and finite induction. [step 1.1, step 5.1, construct, algebra] ∎
