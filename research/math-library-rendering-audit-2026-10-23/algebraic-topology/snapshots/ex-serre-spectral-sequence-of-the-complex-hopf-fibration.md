---
id: ex-serre-spectral-sequence-of-the-complex-hopf-fibration
kind: example
title: Serre spectral sequence of the complex Hopf fibration
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
sources:
  references:
    - title: Hatcher, Algebraic Topology, the Hopf bundle and Example 5.16
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Examples 4.44–4.45 and Proposition 4.48, printed pp. 377–380; multiplicative two-row calculation, Example 5.16, printed pp. 546–547
---

## Statement

Assume the Axiom of Choice and let $n\geq1$. For the standard complex Hopf
bundle
$$S^1\longrightarrow S^{2n+1}\xrightarrow{p}\mathbb {CP}^{n},$$
choose $u\in H^1(S^1;\mathbb Z)$ compatibly with scalar multiplication. Its
integral cohomological Serre spectral sequence has
$$d_2(u)=x,\qquad H^*(\mathbb {CP}^{n};\mathbb Z)\cong\mathbb Z[x]/(x^{n+1}),\qquad |x|=2.$$
The sign of $x$ is fixed by the choice of $u$.

## Facts & Assumptions

**Given:** AC, $n\geq1$, the unit sphere in $\mathbb C^{n+1}$, and complex projective space as its quotient by scalar phases.

[A1] [[def-axiom-of-choice]] is assumed for the fibration, UCT, and cohomological Serre suppliers.

[F1] [[def-locally-trivial-fiber-bundle]] gives the chart and numeration interface. [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]] turns the explicit finite numerable bundle below into a Hurewicz, hence Serre, fibration.

[F2] [[thm-cellular-homology-computes-singular-homology]] computes homology from a finite CW structure.

[F3] [[cor-homology-of-spheres]] and [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] compute the integral cohomology of the circle and total sphere; the same UCT turns the free cellular homology of the base into its additive cohomology.

[F4] [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] supplies the multiplicative integral sequence, derivation rule, and algebra convergence. [[def-serre-edge-homomorphisms-and-transgression]] names its cohomological transgression.

## Verification

**Proof technique:** construct the numerable Hopf bundle, compute the base additively from its even cells, and let the total sphere force the two-row differential and all powers.

1.1 Let $U_j=\{[z]:z_j\neq0\}$. Every line in $U_j$ has the unique unit representative $s_j([z])$ whose $j$th coordinate is positive real. Explicitly, if $z$ is already unit, then $s_j([z])=z|z_j|/z_j$. Hence $$p^{-1}(U_j)\longrightarrow U_j\times S^1, \qquad z\longmapsto([z],z_j/|z_j|)$$ is a bundle chart, with inverse $([z],\lambda)\mapsto\lambda s_j([z])$. For $a=1/(2(n+1))$, set $$r_j([z])=\max\{|z_j|^2-a,0\},\qquad \rho_j=r_j/\sum_i r_i.$$ Some $|z_j|^2\geq1/(n+1)>a$, so the denominator is positive; moreover $\operatorname {supp}(\rho_j)\subseteq\{|z_j|^2\geq a\}\subset U_j$. Thus these finitely many charts are support-subordinate numerating data, and [F1] makes $p$ a Serre fibration. [A1, F1]

1.2 Put $P^r=\mathbb {CP}^r$. The characteristic map $$D^{2r}\longrightarrow P^r,\qquad w\longmapsto[w_0:\cdots:w_{r-1}:\sqrt{1-\|w\|^2}]$$ sends the boundary into $P^{r-1}$ and its interior homeomorphically onto $P^r\setminus P^{r-1}$: there the last homogeneous coordinate has a unique positive-real unit representative. Compact-to-Hausdorff quotient descent gives the attachment homeomorphism. Induction produces one cell in dimensions $0,2,\ldots,2n$ and none elsewhere. Adjacent cellular chain groups never both occur, so every cellular differential is zero. By [F2, F3], $$H^k(P^n;\mathbb Z)=\begin{cases}\mathbb Z,&k=0,2,\ldots,2n,\\0,&\text{otherwise}. \end{cases}$$ [A1, F2, F3]

2.1 The base is simply connected: its CW structure has one vertex and no one-cells. Thus the fiber system is constant. Since all base and fiber groups are free, [F4] has $$E_2^{p,q}=H^p(P^n;\mathbb Z)\otimes H^q(S^1;\mathbb Z),$$ with only rows $q=0,1$ and columns $p=0,2,\ldots,2n$. The only possible differential is $d_2:E_2^{p,1}\to E_2^{p+2,0}$. The total sphere has cohomology only in total degrees $0$ and $2n+1$ by [F3]. Therefore every displayed $d_2$ for $0\leq p<2n$ is an isomorphism between infinite cyclic groups, while the class in $(2n,1)$ survives as the total sphere's top class. [A1, F3, F4, step 1.2]

3.1 Choose $u$ as in the statement and put $x=d_2(u)$. The $p=0$ isomorphism in step 2.1 makes $x$ a primitive generator of $H^2(P^n;\mathbb Z)$. Since $d_2$ vanishes on the bottom row, the derivation rule gives $$d_2(u x^k)=x^{k+1}\qquad(0\leq k<n).$$ Inductively the isomorphisms in step 2.1 make $x^k$ a generator of $H^{2k}(P^n;\mathbb Z)$ for every $0\leq k\leq n$. The CW dimension gives $x^{n+1}=0$. Hence evaluation induces a surjection $\mathbb Z[X]/(X^{n+1})\to H^*(P^n;\mathbb Z)$; it is injective because in each allowed degree the image $x^k$ has infinite order. This proves both directions of the ring identification. [F4, step 1.2, step 2.1]

4.1 There is no extension ambiguity: every total degree on the base ring has one group, and the actual cup powers were identified before passage to the stable page. The top element $ux^n$ survives because its target column is $2n+2$, outside the base, exactly accounting for $H^{2n+1}(S^{2n+1})$. For $n=1$ the sole differential is $d_2(u)=x$ and the survivor is $ux$; the zero groups, unit, first and last columns, both rows, and both differential endpoints are therefore included. Reversing $u$ reverses $x$. AC is used only through [F1], [F3], and [F4]; all charts, the finite partition, and the cellular calculation are choice-free. No converse or splitting is asserted. [A1, F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Source notes

Hatcher constructs the complex Hopf bundle in Examples 4.44–4.45 and proves the relevant CW-pair lifting property in Proposition 4.48, printed pp. 377–380. The multiplicative two-row mechanism is the complete calculation in [Example 5.16](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed pp. 546–547. Here the finite affine numeration, the base CW calculation, and the terminal top survivor are written out for every $n\geq1$.
