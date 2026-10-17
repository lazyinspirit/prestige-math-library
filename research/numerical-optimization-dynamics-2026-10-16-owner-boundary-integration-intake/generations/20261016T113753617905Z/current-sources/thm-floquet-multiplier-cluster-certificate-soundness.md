---
id: thm-floquet-multiplier-cluster-certificate-soundness
kind: theorem
title: "A verified contour count encloses every Floquet multiplier in a cluster"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-floquet-multiplier-cluster-certifier
  - thm-complex-resolvent-cover-validator-soundness
  - thm-argument-principle-null-homologous-cycle
  - lem-positive-convex-polygon-winding-index
  - thm-determinant-differential-and-jacobis-formula
  - thm-principal-inverse-tangent-calculus
  - thm-alternating-series-test
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - lem-complex-infinity-matrix-norm-submultiplicative
  - thm-mean-value-inequality
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
      locator: "Complete 304-page text retrieved; inspected Chapter 4 §4.1, printed pp. 93–96, and Chapter 5 §5.4, printed pp. 128–132."
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
---

## Statement

If [[alg-floquet-multiplier-cluster-certifier]] returns `certified-count(c)` for a nonempty matrix family $\mathcal M$ and a simple positively oriented convex polygon $\Gamma$, then every $M\in\mathcal M$ has exactly $c$ eigenvalues in $\operatorname{int}P$, counted with algebraic multiplicity, and no eigenvalue on $\Gamma$. In particular, this holds for every exact monodromy matrix enclosed by a validated shooting jet whose interval block is contained in $\mathcal M$.

## Facts & Assumptions

**Given:** A successful count record, its outward interval arithmetic, its resolvent-cover result, the matrix family, and the positive polygon.

[F1] A successful resolvent-cover validation bounds $\|(zI-M)^{-1}\|_{\infty,\mathbb C}$ uniformly on each covered edge and for all $M\in\mathcal M$ ([[thm-complex-resolvent-cover-validator-soundness]]).

[F2] For an invertible matrix $A$, the determinant derivative in direction $H$ is $D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$ ([[thm-determinant-differential-and-jacobis-formula]]).

[F3] The argument principle counts zeros of a holomorphic function by the logarithmic-derivative contour integral with winding-number weights ([[thm-argument-principle-null-homologous-cycle]]); for the positive convex polygon the index is one inside and zero outside ([[lem-positive-convex-polygon-winding-index]]).

[F4] Eigenvalues are roots of the characteristic polynomial, counted with algebraic multiplicity ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F5] The identity $\pi=4\arctan(1)$ and the alternating-series remainder bound justify the rational interval for $\pi$ ([[thm-principal-inverse-tangent-calculus]], [[thm-alternating-series-test]]); all later endpoint operations are exact rational arithmetic.

[F6] The finite procedure verifies the resolvent cover, midpoint subdivisions, sample inverses, error terms and strict integer-neighborhood test before returning a count ([[alg-floquet-multiplier-cluster-certifier]]).

[F7] The complex infinity matrix norm is submultiplicative ([[lem-complex-infinity-matrix-norm-submultiplicative]]).
[F8] Under $\mathbb C\cong\mathbb R^2$, a continuously differentiable complex-valued curve whose modulus of the derivative is bounded by $L$ changes by at most $L$ times the interval length ([[thm-mean-value-inequality]]).

## Proof
1.1 Fix $M\in\mathcal M$. Along an edge $z(t)=a+te$, put $R_M(t)=(z(t)I-M)^{-1}$. By [F1] this inverse exists and has norm at most $m$. For $h$ with $t,t+h\in[0,1]$, the resolvent identity gives $R_M(t+h)-R_M(t)=-heR_M(t+h)R_M(t)$. Thus [F1] and [F7] imply $\|R_M(t+h)-R_M(t)\|_{\infty,\mathbb C}\le |h||e|m^2$, so $R_M$ is continuous; dividing the identity by $h$ and taking the limit gives $R_M\prime(t)=-eR_M(t)^2$ for interior $t$. Therefore $g(t)=e\operatorname{tr}R_M(t)$ has $g\prime(t)=-e^2\operatorname{tr}(R_M(t)^2)$. Since each diagonal entry is bounded by its row sum, $|\operatorname{tr}A|\le n\|A\|_{\infty,\mathbb C}$, so [F1] and [F7] give $|g\prime(t)|\le n|e|^2m^2$. By [F8], on each subinterval of length $1/N$, $|g(t)-g(t_{\rm mid})|\le n|e|^2m^2/(2N)$; hence the integral error on that cell is at most $n|e|^2m^2/(2N^2)$. Summing all $N$ cells and edges gives the first term of $E$. [F1, F7, F8, given, algebra]

2.1 At a sample point, the resolvent identity gives $R_M-R^0=R_M(M-M_0)R^0$. Therefore $|\operatorname{tr}(R_M-R^0)|\le nmb_{jk}\delta_A$. Multiplying by the edge weight and using $s_j\ge|e_j|$ yields the second term of $E$ after summing samples. Thus the exact contour integral $\int_\Gamma\operatorname{tr}(zI-M)^{-1}dz$ lies in the complex disk centered at $S_0$ with radius $E$, simultaneously for every $M\in\mathcal M$. Exact rational interval endpoint arithmetic and the valid $\pi$ interval [F5] make $I$ contain the normalized integral. [F1, F5, F6, F7, step 1.1, algebra]

3.1 For each fixed $M$, put $p_M(z)=\det(zI-M)$. The boundary is in the resolvent by [F1], so $p_M$ is nonzero on $\Gamma$. By [F2] with $A=zI-M$ and direction $I$, $p_M'(z)/p_M(z)=\operatorname{tr}(zI-M)^{-1}$. Facts [F3]–[F4] therefore identify $(2\pi i)^{-1}\int_\Gamma\operatorname{tr}(zI-M)^{-1}dz$ with the number of eigenvalues inside $P$, counted with algebraic multiplicity; it is an integer from $0$ to $n$. [F1, F2, F3, F4, step 2.1]

4.1 The successful output places the real part of every such integer strictly inside the half-unit interval around $c$. There is only one integer in that interval, namely $c$. Its imaginary part is zero and is contained by the checked imaginary interval. Hence every $M$ has exactly $c$ interior eigenvalues and none on the resolvent-certified boundary. If a monodromy matrix lies in $\mathcal M$, the same universal statement applies to it. [F5, F6, step 3.1] ∎
