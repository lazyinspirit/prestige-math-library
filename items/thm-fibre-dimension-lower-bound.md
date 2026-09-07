---
id: "thm-fibre-dimension-lower-bound"
kind: "theorem"
title: "Every fibre component has the expected lower bound"
deps: ["def-fibre-dimension-at-point-classical", "lem-classical-point-cut-out-by-dimension-many-functions", "lem-variety-equations-dimension-bound", "lem-dimension-nonempty-open-subset", "lem-general-variety-function-field-charts"]
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
    - title: "Arapura Theorem 4.2.1, p.31"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
    - title: "Milne Theorem 9.9(b), lower-bound proof, p.203"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Cut y out locally by dim Y functions, pull back and apply the equation bound on affine source charts meeting the chosen fibre component."
---

## Statement

For a dominant morphism $f:X\to Y$ between irreducible classical varieties and every closed point $y\in Y$, each nonempty irreducible component $Z$ of $X_y$ satisfies $\dim Z\ge\dim X-\dim Y$. No bound is asserted for an empty fibre.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

[F2] If $X$ is irreducible of dimension $n$ and $x\in X$ is a closed point, there are an affine neighborhood $U$ of $x$ and $n$ regular functions on $U$ whose common zero set is exactly $\{x\}$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-point-cut-out-by-dimension-many-functions]]).

[F3] Let $X$ be an irreducible classical variety of dimension $n$, and let $f_1,\ldots,f_r$ be global regular functions, with $r\ge0$. Every nonempty irreducible component $Z$ of their common zero set has $\dim Z\ge n-r$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-variety-equations-dimension-bound]]).

[F4] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

## Proof

1.1 Put $m=\dim Y$. Choose an affine neighborhood $V$ of $y$ and $m$ regular functions on $V$ cutting out exactly $y$. Their pullbacks on the nonempty open $f^{-1}(V)$ cut out $X_y$ as a reduced zero set. [F1, F2]

2.1 The open $f^{-1}(V)$ is irreducible and has dimension $\dim X$. The equations bound applies to its $m$ pullback functions and gives $\dim Z\ge\dim X-m$ for every nonempty component. For $m=0$ it is the zero-equation case, and empty fibres supply no component. [F3, F4, step 1.1] ∎
