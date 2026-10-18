---
id: thm-untwisted-hall-algebra-is-associative-and-unital
kind: theorem
title: "The untwisted Hall product is associative and unital"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
  - lem-hall-flags-lift-through-a-quotient
  - thm-every-monomorphism-is-the-kernel-of-its-cokernel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2, §2.1"
      url: "https://arxiv.org/pdf/1810.08238v2"
verification:
  precheck: pass
---

## Statement

For every small finitary abelian category $\mathcal A$ and commutative
coefficient ring $R$, the operation of
[[def-untwisted-hall-algebra]] is a well-defined associative $R$-bilinear
multiplication on $H_{\mathcal A,R}$, with unit $[0]$, the basis symbol of
the zero object.

## Facts & Assumptions

**Given:** A small finitary abelian category $\mathcal A$, a commutative
ring $R$ with unit, and the product convention
$[M]*[N]=\sum_{[L]}g^L_{M,N}[L]$.

[F1] The product coefficient counts subobjects $N$ with quotient $M$, and
the natural-number counts are mapped to $R$
([[def-untwisted-hall-algebra]]).

[F2] Each coefficient is finite and, for fixed $M,N$, only finitely many
middle-object classes occur ([[lem-untwisted-hall-product-finiteness]]).

[F3] For a fixed quotient $L/W$, subobjects of it correspond bijectively
to flags $W\le U\le L$, with $(L/W)/(U/W)\cong L/U$
([[lem-hall-flags-lift-through-a-quotient]]).

[F4] Every monomorphism in an abelian category is the kernel of its cokernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Fix basis objects $M,N,P,L$. The coefficient of $[L]$ in $([M]*[N])*[P]$ is the sum over isomorphism classes $[X]$ of $g^X_{M,N}g^L_{X,P}$. By [F1], this counts a subobject $W\le L$ with $W\cong P$ and $L/W\cong X$, together with a subobject $\overline U\le L/W$ with $\overline U\cong N$ and $(L/W)/\overline U\cong M$. The quotient class $[X]=[L/W]$ is uniquely determined by $W$, so this sum counts exactly these pairs. [F1, F2]

1.2 By [F3], each such pair $(W,\overline U)$ corresponds to exactly one flag $W\le U\le L$ with $W\cong P$, $U/W\cong N$, and $L/U\cong M$. The coefficient of $[L]$ in $[M]*([N]*[P])$ counts the same flags: first choose $U\le L$ with $U\cong Y$, $L/U\cong M$, then choose $W\le U$ with $W\cong P$, $U/W\cong N$, summing over the uniquely determined class $[Y]=[U]$. [F1, F2, F3]

1.3 The only subobject isomorphic to zero is the zero subobject, and the only subobject with zero quotient is the whole object: in the latter case the inclusion has zero cokernel and hence is an isomorphism by [F4]. Thus $g^L_{M,0}=1$ exactly when $L\cong M$, while $g^L_{0,M}=1$ exactly when $L\cong M$. The zero-object symbol is a two-sided unit. [F1, F4]

2.1 The two parenthesizations therefore have the same coefficient at every basis vector $[L]$, so $([M]*[N])*[P]=[M]*([N]*[P])$ for basis elements. [F2, step 1.1, step 1.2]

3.1 Basis products have finite support by [F2]. Every element of $H_{\mathcal A,R}$ is a finite linear combination of basis vectors, so bilinearity extends the basis calculation in step 2.1 to all triples and preserves finite support. Step 1.3 supplies the unit, proving the statement. [F2, step 2.1, step 1.3] ∎