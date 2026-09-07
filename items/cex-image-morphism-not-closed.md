---
id: "cex-image-morphism-not-closed"
kind: "counterexample"
title: "A morphism image need not be closed"
deps: ["def-constructible-subset-variety", "def-fibre-dimension-at-point-classical"]
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
    - title: "Milne Example 7.2"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Coordinate solution gives image D(x); a nonzero polynomial cannot vanish on this infinite set without vanishing everywhere."
---

## Statement refuted

False claim: every regular morphism of classical varieties has closed image.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted, for the explicit witness below.

[F1] A subset $S$ of a classical variety $X$ is locally closed if $S=U\cap Z$ for some open $U\subseteq X$ and closed $Z\subseteq X$. A subset is constructible if it is a finite union of locally closed subsets. The empty union is allowed, so $\varnothing$ is constructible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-constructible-subset-variety]]).

[F2] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

## Counterexample

1.1 Take projection $p:H=V(xy-1)\to\mathbf A^1$ onto $x$. Its equations have a solution precisely when $x\ne0$: the solution is $y=x^{-1}$. Thus $p(H)=D(x)$, a constructible open subset. [F1, F2]

2.1 The set $D(x)$ is proper since it omits zero, and is dense: any one-variable polynomial vanishing at all its infinitely many points is the zero polynomial. Therefore its image is not closed, refuting the claim. [step 1.1] ∎
