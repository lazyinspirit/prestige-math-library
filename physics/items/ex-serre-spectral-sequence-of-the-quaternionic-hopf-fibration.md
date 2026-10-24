---
id: ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration
kind: example
title: Serre spectral sequence of the quaternionic Hopf fibration
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-locally-trivial-fiber-bundle, thm-numerable-fiber-bundles-are-hurewicz-fibrations, thm-cellular-homology-computes-singular-homology, cor-homology-of-spheres, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, def-serre-edge-homomorphisms-and-transgression, def-axiom-of-choice]
proof_strategy: spectral-sequence
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: Hatcher, Algebraic Topology, Hopf bundles and the multiplicative Serre calculation
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Example 4.46, printed p. 378; multiplicative two-row method, Example 5.16, printed pp. 546–547
---

## Statement

Assume the Axiom of Choice and let $n\geq1$. For the standard quaternionic
Hopf bundle, using right quaternionic lines and right scalar multiplication,
$$S^3\longrightarrow S^{4n+3}\xrightarrow{p}\mathbb {HP}^{n},$$
choose $u\in H^3(S^3;\mathbb Z)$ compatibly with the orientation of the unit
quaternions. Its integral cohomological Serre spectral sequence has
$$d_4(u)=x,\qquad H^*(\mathbb {HP}^{n};\mathbb Z)\cong\mathbb Z[x]/(x^{n+1}),\qquad |x|=4.$$
The sign of $x$ is fixed by that of $u$.

## Facts & Assumptions

**Given:** AC, $n\geq1$, the unit sphere in $\mathbb H^{n+1}$, and quaternionic projective space as the quotient by right multiplication by unit quaternions.

[A1] [[def-axiom-of-choice]] is assumed for the fibration, UCT, and cohomological Serre suppliers.

[F1] [[def-locally-trivial-fiber-bundle]] gives the chart and numeration interface. [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]] turns the finite numerable bundle constructed below into a Serre fibration.

[F2] [[thm-cellular-homology-computes-singular-homology]] computes the homology of the displayed finite CW structure.

[F3] [[cor-homology-of-spheres]] and [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] compute the integral cohomology of the fiber and total sphere and convert the free cellular base calculation to cohomology.

[F4] [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] supplies the multiplicative sequence, derivation rule, and algebra convergence. [[def-serre-edge-homomorphisms-and-transgression]] fixes the cohomological transgression convention.

## Verification

**Proof technique:** repeat the forced two-row Hopf calculation after checking that quaternionic noncommutativity does not invalidate the local charts.

1.1 For $U_j=\{[z]:z_j\neq0\}$ and unit $z$, right multiplication by $z_j^{-1}|z_j|$ gives the unique unit representative $s_j([z])$ whose $j$th coordinate is positive real. The formulas $$z\longmapsto([z],z_j/|z_j|),\qquad ([z],\lambda)\longmapsto s_j([z])\lambda$$ are inverse bundle charts $p^{-1}(U_j)\cong U_j\times S^3$. Their order is essential: all scalar multiplication is on the right. With $a=1/(2(n+1))$, the normalized functions $$\rho_j([z])= \frac{\max\{|z_j|^2-a,0\}} {\sum_i\max\{|z_i|^2-a,0\}}$$ are defined because some norm square is at least $1/(n+1)$, and their supports lie in $U_j$. Thus the finite bundle is numerable and [F1] makes it a Serre fibration. [A1, F1]

1.2 Put $P^r=\mathbb {HP}^r$. The map $$D^{4r}\longrightarrow P^r,\qquad w\longmapsto[w_0:\cdots:w_{r-1}:\sqrt{1-\|w\|^2}]$$ attaches one $4r$-cell to $P^{r-1}$: the boundary lands in $P^{r-1}$, and right normalization of the last nonzero coordinate gives a unique positive-real representative on the complement. Compact-to-Hausdorff quotient descent proves the attachment map is a homeomorphism. Starting at a point gives one cell in dimensions $0,4,\ldots,4n$. Every cellular differential is zero, since adjacent cellular dimensions are never both occupied. Hence [F2, F3] give $$H^k(P^n;\mathbb Z)=\begin{cases}\mathbb Z,&k=0,4,\ldots,4n,\\0,&\text{otherwise}. \end{cases}$$ [A1, F2, F3]

2.1 The CW structure has one vertex and no one-cells, so the base is simply connected and the fiber system is constant. Its groups and the base groups are free, so the multiplicative sequence has $$E_2^{p,q}=H^p(P^n;\mathbb Z)\otimes H^q(S^3;\mathbb Z),$$ with rows only at $q=0,3$ and columns only at $p=0,4,\ldots,4n$. Thus the only possible differential is $d_4:E_4^{p,3}\to E_4^{p+4,0}$. The total sphere has cohomology only in degrees $0$ and $4n+3$ by [F3], so every $d_4$ with $0\leq p<4n$ is an isomorphism of infinite cyclic groups; the upper-right class at $(4n,3)$ survives. [A1, F3, F4, step 1.2]

3.1 Put $x=d_4(u)$. The first isomorphism makes $x$ a primitive generator of $H^4(P^n;\mathbb Z)$. Since $d_4$ is zero on the bottom row and $|x|$ is even, the derivation rule gives $$d_4(u x^k)=x^{k+1}\qquad(0\leq k<n).$$ It follows inductively that $x^k$ generates $H^{4k}(P^n;\mathbb Z)$ for $0\leq k\leq n$. Dimension gives $x^{n+1}=0$, so evaluation defines a surjection $\mathbb Z[X]/(X^{n+1})\to H^*(P^n;\mathbb Z)$. It is injective degree by degree because every $x^k$ in the allowed range has infinite order. [F4, step 1.2, step 2.1]

4.1 The survivor $ux^n$ has no target because column $4n+4$ is absent and is the unique class accounting for $H^{4n+3}(S^{4n+3})$. This also eliminates any hidden extension: the actual base cup powers were computed and each relevant degree has one cyclic group. For $n=1$, $d_4(u)=x$ is the sole differential and $ux$ is the top survivor. The unit, zero groups, first and last columns, both rows, both differential endpoints, both ring-map directions, and reversal of the orientation generator are explicit. AC occurs only through [F1], [F3], and [F4]; the finite quaternionic charts and cell argument make no choices. There is no converse or splitting claim. [A1, F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Source notes

Hatcher's Example 4.46, printed p. 378, gives the quaternionic Hopf bundle. The multiplicative two-row mechanism is written in [Example 5.16](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed pp. 546–547. The ordered right-scalar charts and the top survivor are supplied explicitly here.
