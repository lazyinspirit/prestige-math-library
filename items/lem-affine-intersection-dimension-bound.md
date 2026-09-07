---
id: "lem-affine-intersection-dimension-bound"
kind: "lemma"
title: "Affine intersection bound via the diagonal"
deps: ["thm-dimension-product-varieties", "lem-variety-equations-dimension-bound", "lem-diagonal-affine-variety-cut-out-by-coordinate-differences"]
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
    - title: "Milne Proposition 5.36"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Identify intersection with the locus of n coordinate differences on irreducible X times Y; apply the equation bound."
---

## Statement

For irreducible closed $X,Y\subseteq\mathbf A_k^n$, every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Products of nonempty classical varieties exist in the category of classical varieties, and $\dim(X\times_kY)=\dim X+\dim Y$. If both factors are irreducible, their product is irreducible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-product-varieties]]).

[F2] Let $X$ be an irreducible classical variety of dimension $n$, and let $f_1,\ldots,f_r$ be global regular functions, with $r\ge0$. Every nonempty irreducible component $Z$ of their common zero set has $\dim Z\ge n-r$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-variety-equations-dimension-bound]]).

[F3] If $X\subseteq\mathbf A^n$ is an affine variety, then the diagonal in $X\times X$ is cut out by $x_i\otimes1-1\otimes x_i$ for $1\le i\le n$. ([[lem-diagonal-affine-variety-cut-out-by-coordinate-differences]]).

## Proof

1.1 The product $X\times Y$ is irreducible of dimension $\dim X+\dim Y$. The equations $x_i-y_i=0$, for $1\le i\le n$, cut out its intersection with the diagonal of $\mathbf A^n\times\mathbf A^n$. The diagonal supplier is used for the ambient affine space, and then restricted to $X\times Y$. [F1, F3]

2.1 This zero set is isomorphic to $X\cap Y$ by $z\mapsto(z,z)$, with either projection as inverse. Apply the $n$-equation bound to each nonempty component. If $n=0$ both nonempty factors are the point and the zero-equation bound is equality. If the intersection is empty there is no component assertion. [F2, step 1.1] ∎
