---
id: lem-cohomology-ring-of-infinite-complex-projective-space
kind: lemma
title: Cohomology ring of infinite complex projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, thm-cellular-cochains-compute-cohomology-with-local-coefficients, thm-cellular-homology-computes-singular-homology, thm-schubert-cells-give-the-stable-grassmannian-cw-structure, def-schubert-cells-in-real-and-complex-grassmannians, def-stiefel-space-grassmannian-and-tautological-bundle, lem-complex-orientation-of-underlying-real-bundles, def-euler-class-by-zero-section-pullback-of-the-thom-class, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, def-cellular-homology, def-singular-cohomology-with-coefficients, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the cellular comparison."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, section 3.2 and Example 4.42"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Cohomology of CP^n and CP^infinity, printed pp.221-222"
---

## Statement

Assume AC. Identify $\mathbb{CP}^\infty=\operatorname{Gr}_1(\mathbb C^\infty)$,
the space of complex lines in $\mathbb C^\infty$, and let
$u=e(\gamma_{\mathbb R})\in H^2(\mathbb{CP}^\infty;\mathbb Z)$ be the class of
the tautological complex line. Then
$$H^{2k}(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z\cdot u^k,\qquad H^{2k+1}(\mathbb{CP}^\infty;\mathbb Z)=0\qquad(k\geq0),$$
so $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ is a polynomial ring; and
$H_k(\mathbb{CP}^\infty;\mathbb Z)$ is free of rank one for even $k$ and zero
for odd $k$, in particular finitely generated in every degree.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the cellular comparison ([[def-axiom-of-choice]]).

[F1] The Schubert cells of $\operatorname{Gr}_n(\mathbb F^N)$ are the open cells $e(a)\cong\mathbb F^{d(a)}$ of complex dimension $d(a)=\sum_i(a_i-i)$ and real dimension $2d(a)$; for $n=1$ and $N\geq1$ the symbols are the integers $a_1=1,\dots,N$, giving one cell in each real dimension $2k$, $0\leq k\leq N-1$ ([[def-schubert-cells-in-real-and-complex-grassmannians]]).

[F2] The Schubert strata form finite CW structures on the $\operatorname{Gr}_n(\mathbb F^N)$, their inclusions are cellular subcomplex inclusions, and their union is a CW structure on $\operatorname{Gr}_n(\mathbb F^\infty)$ in which every finite subcomplex lies in a finite stage ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F3] Cellular cochains compute singular cohomology with local coefficients; with the trivial local system and coefficients in a commutative ring this is ordinary singular cohomology, and the cellular cochain group in degree $k$ is the dual of the free cellular chain group on the $k$-cells ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]], [[def-cellular-homology]], [[def-singular-cohomology-with-coefficients]]).

[F4] Cellular chains compute singular homology ([[thm-cellular-homology-computes-singular-homology]]).

[F5] For each $N$ one has $H^*(\mathbb{CP}^N;\mathbb Z)=\mathbb Z[x]/(x^{N+1})$ with $x=e(\gamma_{\mathbb R})$ and the standard inclusions pulling $x$ back to $x$ ([[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]).

[F6] The tautological complex line on $\operatorname{Gr}_1(\mathbb C^\infty)$ restricts along every finite-stage inclusion to the finite tautological line. Its underlying real rank-two bundle has the complex orientation, and its Euler class is natural under these orientation-preserving pullbacks ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[lem-complex-orientation-of-underlying-real-bundles]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

## Proof

**Proof technique:** direct.

**Given:** AC and the identification $\mathbb{CP}^\infty=\operatorname{Gr}_1(\mathbb C^\infty)$.

1.1 Cell structure: by [F1] with $n=1$ the finite Grassmannians $\mathbb{CP}^N=\operatorname{Gr}_1(\mathbb C^{N+1})$ have exactly one cell in each real dimension $0,2,\dots,2N$, and by [F2] their union $\mathbb{CP}^\infty$ is a CW complex with exactly one cell in each even dimension and none in odd dimensions. [F1, F2]

2.1 The cellular complex: by [F3] the cellular cochain complex of $\mathbb{CP}^\infty$ with $\mathbb Z$ coefficients has $C^{2k}=\mathbb Z$ and $C^{2k+1}=0$ for all $k\geq0$; in particular every differential of the complex is zero, so $H^{2k}(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z$ and $H^{2k+1}(\mathbb{CP}^\infty;\mathbb Z)=0$. By [F4] the cellular chain complex likewise gives $H_{2k}(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z$, $H_{2k+1}=0$, hence freeness and finite generation in each degree. [F3, F4, step 1.1]

3.1 Generators: by [F6], naturality of the Euler class identifies the restriction of $u=e(\gamma_{\mathbb R})$ along $\mathbb{CP}^k\hookrightarrow\mathbb{CP}^\infty$ with the finite-stage class $x$. By [F5], $H^*(\mathbb{CP}^k;\mathbb Z)=\mathbb Z[x]/(x^{k+1})$ and $x^k$ generates $H^{2k}$. Hence the restriction of $u^k$ is $x^k\neq0$, so $u^k\neq0$ in the infinite cyclic group $H^{2k}(\mathbb{CP}^\infty;\mathbb Z)$ of step 2.1. Moreover the cellular restriction to the $2k$-skeleton sends the degree-$2k$ cellular coordinate isomorphically to the sole degree-$2k$ cell, so this nonzero restriction has coefficient $\pm1$; thus $u^k$ is a generator. [F3, F5, F6, step 1.1, step 2.1]

4.1 Ring structure: the multiplication is generated by $u$ in degree two, and by step 3.1 each power $u^k$ is a generator of the infinite cyclic group $H^{2k}$; therefore $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ as a graded ring, which with step 2.1 gives the full assertion. [step 2.1, step 3.1]

5.1 Boundary cases. For $k=0$ the statement reads $H^0=\mathbb Z$, the class $u^0=1$ being a generator; the empty space does not occur, and the coefficient ring $\mathbb Z$ is nonzero. The degrees are unbounded above, but each degree is a single cyclic group, so no finiteness in dimension is asserted. The trivial line $u=0$ occurs only over the empty base, which is excluded. AC enters only through [A1]. [A1, F3, step 4.1] ∎

## Source notes

Hatcher, *Algebraic Topology*, section 3.2 and Example 4.42 (printed pp. 221-222), computes the integral cohomology of $\mathbb{CP}^n$ and its stabilization: one cell in each even dimension, so the cohomology is $\mathbb Z[u]$ with $u$ of degree two. The proof above uses the cellular comparison and the finite-stage ring identification, avoiding any infinite Kunneth or limit argument.
