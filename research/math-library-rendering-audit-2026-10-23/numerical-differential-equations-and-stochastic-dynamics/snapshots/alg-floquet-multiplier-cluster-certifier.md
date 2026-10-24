---
id: alg-floquet-multiplier-cluster-certifier
kind: algorithm
title: "Finite complex-contour validation of Floquet multiplier clusters"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-validated-periodic-shooting-jet-enclosure
  - alg-complex-resolvent-cover-validator
  - thm-complex-resolvent-cover-validator-soundness
  - lem-separated-simple-floquet-multiplier-perturbation-bound
  - lem-positive-convex-polygon-winding-index
  - thm-argument-principle-null-homologous-cycle
  - thm-determinant-differential-and-jacobis-formula
  - thm-principal-inverse-tangent-calculus
  - thm-alternating-series-test
  - def-complex-infinity-matrix-norm
  - lem-complex-infinity-matrix-norm-submultiplicative
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
justified_by:
  - thm-floquet-multiplier-cluster-certificate-soundness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
      locator: "Complete 304-page text retrieved; inspected Chapter 4 §4.1, printed pp. 93–96, and Chapter 5 §5.4, printed pp. 128–132."
---

## Definition

Input a positive integer $n$, a nonempty complex matrix family $\mathcal M$ enclosed entrywise by finite dyadic real/imaginary rectangles, a dyadic center matrix $M_0$, a certified dyadic bound $\delta_A\ge\sup_{M\in\mathcal M}\|M-M_0\|_{\infty,\mathbb C}$, and a simple positively oriented strictly convex polygon $\Gamma$ with dyadic vertices and filled interior $P$. Supply the dyadic disk cover and point preconditioners required by [[alg-complex-resolvent-cover-validator]], a positive integer $N$ for midpoint subdivisions of each edge, a positive integer $K_\pi$ for the arctangent series, and a finite arithmetic budget. The family may be the monodromy block of a validated shooting jet; no correlation between matrix entries is required. A complex rectangle here is the product of one closed dyadic real interval and one closed dyadic imaginary interval for each matrix entry.

1. Write the ordered dyadic vertices as $v_0,\ldots,v_{r-1}$, with indices modulo $r$. Require $r\ge3$, pairwise distinct vertices, and, for every $i$ and every $k\notin\{i,i+1\}$, the exact rational determinant $\operatorname{Im}(\overline{(v_{i+1}-v_i)}(v_k-v_i))>0$. Each directed edge is then an exposed edge of the convex hull; since there are $r$ such edges and $r$ distinct vertices, they form its simple counterclockwise boundary. If any test fails, output `inconclusive`. Then run the resolvent-cover validator on every edge for the entire family. If any segment is uncovered, an outward inequality is not strict, or no finite upper bound $M_R$ on $\|(zI-M)^{-1}\|_{\infty,\mathbb C}$ is returned, output `inconclusive`.
2. Subdivide each oriented edge $e_j=b_j-a_j$ into $N$ equal parts, with rational midpoints $z_{jk}=a_j+(k+1/2)e_j/N$. By exact rational complex elimination, compute $R^0_{jk}=(z_{jk}I-M_0)^{-1}$; a singular center matrix or an incomplete operation returns `inconclusive`. For each rational complex entry $a+ib$ of $R^0_{jk}$, use rational square-root bisection to find an upper bound for $\sqrt{a^2+b^2}$, then sum row bounds to obtain $b_{jk}\ge\|R^0_{jk}\|_{\infty,\mathbb C}$. Use the same bisection to obtain $s_j\ge|e_j|$. If the finite budget does not produce these rational bounds, return `inconclusive`.
3. Form the exact center midpoint sum
$$S_0=\sum_j\frac{e_j}{N}\sum_{k=0}^{N-1}\operatorname{tr}R^0_{jk},$$
and the outward error allowance
$$E=\frac{n M_R^2}{2N}\sum_j|e_j|^2+\frac{n M_R\delta_A}{N}\sum_{j,k}s_jb_{jk}.$$
The first term uses the exact rational squared modulus of each rational edge; the second uses the rational upper edge length $s_j$. The first term bounds midpoint quadrature error; the second bounds replacing each family resolvent by the center resolvent. All sums and products are exact rationals; if a required rational square-root upper bound is unavailable, return `inconclusive`.
4. Enclose $\pi$ using $\pi=4\arctan(1)$ and the alternating partial sum $4\sum_{k=0}^{K_\pi-1}(-1)^k/(2k+1)$ with tail radius $4/(2K_\pi+1)$. Require a positive lower endpoint. Using exact rational endpoint arithmetic, enclose $S_0/(2\pi i)$ and inflate its real and imaginary intervals by $E/(2\pi_{\rm low})$; call the resulting rectangle $I$.
5. Choose an integer $c$ and return `certified-count(c)` only if $0\le c\le n$, $\operatorname{Re}I\subset(c-1/2,c+1/2)$, $\operatorname{Im}I\subset(-1/2,1/2)$, and $0\in\operatorname{Im}I$. Otherwise return `inconclusive`. This operation counts roots with algebraic multiplicity in $\operatorname{int}P$ for every matrix in the supplied family; it does not classify a cluster touching the unit circle as stable or unstable.

For a simple separated multiplier, an optional left/right-conditioned finite enclosure may also be reported using [[lem-separated-simple-floquet-multiplier-perturbation-bound]]. The contour count remains the required path for clusters or unresolved individual eigenvectors.

The matrix family may be taken from the monodromy block of [[def-validated-periodic-shooting-jet-enclosure]]. Resolvent bounds use the complex infinity norm [[def-complex-infinity-matrix-norm]] and its product inequality [[lem-complex-infinity-matrix-norm-submultiplicative]]; the boundary cover is interpreted by [[thm-complex-resolvent-cover-validator-soundness]]. Root counting uses [[thm-argument-principle-null-homologous-cycle]], the inside/outside polygon index [[lem-positive-convex-polygon-winding-index]], and the determinant derivative [[thm-determinant-differential-and-jacobis-formula]]. The root multiplicities are those of the characteristic polynomial by [[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]. The rational $\pi$ enclosure uses [[thm-principal-inverse-tangent-calculus]] and [[thm-alternating-series-test]].
