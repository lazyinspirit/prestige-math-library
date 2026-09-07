---
id: "thm-affine-variety-dimension-coordinate-ring"
kind: "theorem"
title: "Affine geometric dimension equals ring dimension"
deps: ["def-dimension-classical-variety", "thm-affine-nullstellensatz-correspondence", "def-krull-dimension-of-a-ring"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Definition 3.39 and chain/prime dictionary §3l"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "The Nullstellensatz reverses chains between irreducible closed subsets and prime ideals of k[X]. Handle the zero ring separately."
---

## Statement

For a nonempty affine algebraic set $X$, $\dim X=\dim k[X]$, where the right side is Krull dimension. For this comparison only, extend ring dimension to the zero ring by $\dim(0)=-\infty$; then the equality also holds for $X=\varnothing$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a classical variety $X$, let $\dim X$ be its chain dimension. If $X_1,\ldots,X_m$ are its irreducible components and $x\in X$ is a closed point, define $\dim_xX=\max_{x\in X_i}\dim X_i$. The indexing family is nonempty. Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$; the condition on components is vacuous for the empty variety, whose dimension is nevertheless $-\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-dimension-classical-variety]]).

[F2] Assume the Axiom of Choice. Let $k$ be an algebraically closed field. 1. The assignments $$ X\longmapsto I(X),\qquad J\longmapsto V(J) $$ induce mutually inverse inclusion-reversing correspondences between affine algebraic sets $X\subseteq \mathbf A_k^n$ and radical ideals $J\subseteq k[x_1,\ldots,x_n]$. 2. Under this correspondence, nonempty irreducible affine algebraic sets correspond exactly to prime ideals. ([[thm-affine-nullstellensatz-correspondence]]).

[F3] Let $R$ be a nonzero commutative ring. A **strict chain of prime ideals of length $n$** is a sequence $$ \mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_n $$ of prime ideals of $R$. The **Krull dimension** of $R$ is the supremum of all integers $n\ge 0$ for which such a chain exists. This supremum is allowed to be infinite. On this page the zero ring is left outside the definition so that later chain statements do not hide that degenerate boundary. ([[def-krull-dimension-of-a-ring]]).

## Proof

1.1 For $X\ne\varnothing$, lift ideals of $k[X]$ to the ambient polynomial ring. The Nullstellensatz identifies its prime ideals with the nonempty irreducible closed subsets of $X$, reversing inclusion. Strictness is preserved because the correspondences are inverse. Reversing a finite chain therefore gives a chain of the same length in either direction. [F2]

2.1 Taking suprema yields equality of geometric and ring dimensions. When $X=\varnothing$, its coordinate ring is zero and both values are $-\infty$ under the expressly extended convention. The supplier defines ring dimension only for nonzero rings, so this does not change that supplier. [F1, F3, step 1.1] ∎
