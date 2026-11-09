---
id: lem-author-16f30f6b95cb-curve-supported-bloch-bottom
kind: lemma
title: Bottom supported Bloch groups on a codimension two curve
status: draft
domain: mathematics
deps:
  - def-supported-higher-cycle-complex
  - math:thm-dimension-formula-for-affine-domains
  - math:def-axiom-of-choice
dependency_roles:
  def-supported-higher-cycle-complex: mathematical-premise
  math:thm-dimension-formula-for-affine-domains: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 8
---

## Statement
Assume AC. Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $C\subset U$ be an integral closed curve of codimension two. In the supported Bloch complexes, $z_C^j(U,n)=0$ for $j=0,1$ and every $n\geq0$. Moreover
$$H_0z_C^2(U,\bullet)=\mathbb Z[C],$$
with $[C]$ the positive generator represented by the integral reduced curve. Restriction to any open $V\subset U$ containing its generic point $\eta$ sends this generator to $[C\cap V]$ and is an isomorphism of these degree-zero groups. No smoothness or normality of $C$ is assumed.

## Facts & Assumptions

**Given:** AC, $U,C,k$, and $\eta$ as above. $\mathbb Z[C]$ is the free abelian group on the single cycle $[C]$, not its image in an ambient Chow group.

**Goal:** Compute the two lower supported complexes and the bottom weight-two supported group, with its sign.

[F1] Supported Bloch groups are free on admissible integral codimension-$j$ subschemes contained in $C\times\Delta^n$; boundaries are alternating face restrictions with quotient-length coefficients. [[def-supported-higher-cycle-complex]]

[F2] The finite-type dimension formula computes dimensions and codimensions on each smooth ambient component. Its use retains AC. [[math:thm-dimension-formula-for-affine-domains]], [[math:def-axiom-of-choice]]

## Proof

1.1 The ambient $U\times\Delta^n$ has pure dimension $3+n$ and $C\times\Delta^n$ has dimension $1+n$. Every integral closed subscheme contained in the latter therefore has codimension at least two in its ambient component. Thus none is a generator of $z_C^j(U,n)$ for $j=0,1$, proving the first assertion in every degree. [F1, F2, given]

1.2 In degree zero, an integral codimension-two subscheme contained in $C$ must have dimension one, hence equals $C$ with its reduced structure. Thus $z_C^2(U,0)=\mathbb Z[C]$. In degree one the generators have dimension two in $U\times\mathbb A^1$ and are contained in the integral two-dimensional scheme $C\times\mathbb A^1$. The only such integral closed subscheme is the whole product, which is admissible. At each endpoint its generic local quotient length is one, so its boundary is $[C]-[C]=0$, with either overall orientation. [F1, F2, given]

2.1 The complex is concentrated in nonnegative homological degrees, so its zeroth homology is its degree-zero group modulo the image of the degree-one boundary. Step 1.2 makes that image zero. On an open containing $\eta$ the same calculation applies to the integral curve $C\cap V$ and restriction takes $[C]$ to $[C\cap V]$ without changing its coefficient. Hence it is the asserted isomorphism. [F1, step 1.1, step 1.2] ∎
