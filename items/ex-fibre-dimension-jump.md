---
id: "ex-fibre-dimension-jump"
kind: "example"
title: "The map (x,y) to (x,xy) has a jumping fibre"
deps: ["def-fibre-dimension-at-point-classical", "def-constructible-subset-variety", "cor-dimension-affine-and-projective-space"]
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
    - title: "Milne Chapter 9 introduction, p.198"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "Arapura Example 4.2.4, p.32"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Solve u=x and v=xy; the image is dense but contains no neighborhood of the origin, so is not locally closed."
---

## Example

The morphism $f:\mathbf A_k^2\to\mathbf A_k^2$, $(x,y)\mapsto(u,v)=(x,xy)$, has image $D(u)\cup\{(0,0)\}$. Its fibres are one point when $u\ne0$, an affine line over $(0,0)$, and empty over $(0,v)$ with $v\ne0$. The image is constructible and is not locally closed.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

[F2] A subset $S$ of a classical variety $X$ is locally closed if $S=U\cap Z$ for some open $U\subseteq X$ and closed $Z\subseteq X$. A subset is constructible if it is a finite union of locally closed subsets. The empty union is allowed, so $\varnothing$ is constructible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-constructible-subset-variety]]).

[F3] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

## Verification

1.1 The fibre equations are $x=u$ and $uy=v$. For $u\ne0$ there is exactly one solution $(u,v/u)$, of dimension zero. If $u=v=0$, $y$ is free, so the fibre is an affine line of dimension one. If $u=0$ and $v\ne0$ there is no solution. This proves the image description and the empty-fibre dimension $-\infty$. [F1, F3]

2.1 The image is a union of an open subset and a closed point, hence constructible. It is dense since $D(u)$ is dense in the irreducible affine plane. If this image were locally closed, writing it as open intersect closed and taking closure would show it open in the plane. But any open neighborhood of the origin meets the line $u=0$ in a nonempty open subset of that line. A proper closed subset of an affine line is finite by the polynomial root bound, so this neighborhood contains a point $(0,v)$ with $v\ne0$, outside the image. Therefore the image is not open and not locally closed. [F2, step 1.1] ∎
