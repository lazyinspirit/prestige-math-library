---
id: "cex-dimension-empty-set-minus-infinity-needed"
kind: "counterexample"
title: "Dimension zero for the empty set loses the empty-fibre distinction"
deps: ["def-dimension-noetherian-topological-space", "def-fibre-dimension-at-point-classical"]
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Definition 2.48, p.54, chain dimension background; empty-convention compatibility checked here"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
generation:
  role: "counterexample"
status: "draft"
origin: "pipeline"
proof_strategy: "Compare the absent chain in the empty set with the length-zero chain at a point."
---

## Statement refuted

Incompatibility to refute: adopt $\dim\varnothing=0$ while retaining the assertion $\dim T\ge0$ if and only if $T\ne\varnothing$. The convention $\dim\varnothing=-\infty$ makes that assertion, and the empty maximum, literal; no uniqueness among all possible dimension conventions is claimed.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted, for the explicit witness below.

[F1] For a Noetherian topological space $T$, define $\dim T$ as the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$. Thus a one-member chain has length zero. Set $\dim\varnothing=-\infty$, and allow $\dim T=+\infty$. The supremum of an empty family of dimensions is $-\infty$. ([[def-dimension-noetherian-topological-space]]).

[F2] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

## Counterexample

1.1 The fibre at zero of $V(xy-1)\to\mathbf A^1$, $(x,y)\mapsto x$, is empty since $0\cdot y=1$ has no solution. Giving it dimension zero makes $\dim T\ge0$ true while $T\ne\varnothing$ is false. Thus the two proposed rules are incompatible. [F2]

2.1 With the chain convention, the empty space has no chain and dimension $-\infty$. If a Noetherian space $T$ is nonempty, choose a point; its closure is a nonempty irreducible closed subset and provides a length-zero chain, so $\dim T\ge0$. Conversely $\dim T\ge0$ excludes the empty space. Defining the supremum and maximum over the empty family as $-\infty$ also makes the finite-closed-union formula consistent for an empty cover. [F1, step 1.1] ∎
