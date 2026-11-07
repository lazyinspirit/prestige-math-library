---
dependency_level: 0
id: lem-cyclic-unitary-sl-hilbert-weak-subsequence
kind: lemma
title: "Deterministic cyclic Hilbert weak subsequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-strongly-continuous-unitary-representation
  - lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups
proof_strategy: direct
sources:
  references:
    - title: "Dave Witte Morris, Introduction to Arithmetic Groups"
      url: "https://arxiv.org/pdf/math/0106063"
      locator: "§11.2, matrix-coefficient method; the cyclic weak extraction is explicitly constructed here"
---

## Statement

Let $d\ge2$, let $\pi$ be a strongly continuous unitary representation of $\operatorname{SL}_d(\mathbb R)$ on a Cauchy-complete complex Hilbert space $\mathcal H$, and fix $v\in\mathcal H$. Its cyclic subspace $M=\overline{\operatorname{span}}\{\pi(g)v:g\in\operatorname{SL}_d(\mathbb R)\}$ is separable and invariant. Every bounded sequence in $M$ has a subsequence converging weakly against every vector of the ambient $\mathcal H$ to a vector of $M$. The construction needs no Choice axiom beyond the given Hilbert-space completeness; it does not assert completeness of a separately constructed function space.

## Statement references

[Morris, §11.2](https://arxiv.org/pdf/math/0106063) — representation-theoretic context for the explicitly constructed cyclic extraction.

## Facts & Assumptions

**Given:** $d,\pi,\mathcal H,v$ and a sequence $(x_n)$ in $M$ with $\|x_n\|\le C<\infty$. The Hilbert inner product is linear in its first variable.

[F1] Strong continuity means every fixed-vector orbit map is norm continuous; unitaries preserve inner products and norms. [[def-strongly-continuous-unitary-representation]]

[F2] Every real special linear matrix is a finite product of elementary root matrices $I+t e_{ij}$. [[lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups]]

## Proof

**Proof technique:** explicit countable orbit, orthogonal coordinates and diagonal extraction.

1.1 Enumerate all finite words in elementary root matrices with rational parameters, including the empty word; their products form a countable dense subgroup $D$. Density follows by approximating the finitely many real parameters in each F2 factorization by rationals. F1 shows that the closure of the span of the enumerated vectors $\pi(g_j)v$, $g_j\in D$, equals $M$. Finite rational-complex linear combinations of these vectors give a countable dense set. Moreover each $\pi(g)$ sends these orbit generators into $M$, by approximating $gg_j$ with the first enumerated elements of $D$ within distance $1/n$; continuity and closure extend this to all of $M$. Applying the same argument to $g^{-1}$ gives invariance. [F1, F2, construct]

2.1 Gram–Schmidt on the given orbit list constructs an orthonormal basis of $M$ without an infinite selection: having obtained finitely many orthonormal vectors, take the least-indexed orbit vector with nonzero residual after subtracting its finite orthogonal projection, and normalize it. If none exists, stop; then every orbit generator lies in the finite span. Otherwise the process gives a sequence $(e_j)$ with dense span, because every earlier orbit entry is included in that span or has zero residual before the next chosen index. If $M=\{0\}$ the empty basis gives the result immediately. [step 1.1, construct, algebra]

3.1 Each coordinate $\langle x_n,e_j\rangle$ is bounded by $C$. There is a deterministic convergent-subsequence operation for any such complex sequence: start with a closed square of integer radius larger than $C$, repeatedly choose the first of its four closed dyadic subsquares containing infinitely many of the current indices, and then the least next index in that subsquare. The finite-cover pigeonhole principle ensures a child exists. Nested diameters tend to zero, so completeness of the real coordinates gives convergence. Apply this operation successively to each coordinate, retaining subsequences of previous ones, and take diagonal indices (the $j$-th index of the $j$-th subsequence). They strictly increase and make every coordinate converge to some $c_j$. For a finite basis, only finitely many extractions are needed. All operations are uniquely specified recursions. [step 2.1, construct, algebra]

4.1 Finite orthogonality gives $\sum_{j\le m}|\langle x_n,e_j\rangle|^2\le C^2$, since subtracting the finite projection leaves a nonnegative squared norm. Passing to the coordinate limits gives $\sum_{j\le m}|c_j|^2\le C^2$. Thus the series $\sum_jc_je_j$ is Cauchy: its squared tail norm is the tail of a bounded increasing real sum. Hilbert completeness supplies its limit $w\in M$, with $\|w\|\le C$. Coordinate convergence proves convergence of pairings with every finite-span vector, and density plus the bound $\|x_n-w\|\le2C$ extends it to every vector of $M$. [step 2.1, step 3.1, algebra]

5.1 For any ambient $z\in\mathcal H$, the same finite Bessel calculation makes $z_M=\sum_j\langle z,e_j\rangle e_j$ a convergent Hilbert series. Its residual $z-z_M$ is orthogonal to every basis vector and hence to $M$ by density. Consequently the pairings of $x_{n_k}$ and $w$ against $z$ equal their pairings against $z_M$, whose convergence was proved in step 4.1. This proves ambient weak convergence without Riesz representation, a general orthogonal projection theorem or weak compactness. [step 2.1, step 4.1, algebra] ∎

