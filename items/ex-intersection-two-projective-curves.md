---
id: "ex-intersection-two-projective-curves"
kind: "example"
title: "Plane curves meet; common components change the dimension"
deps: ["thm-dimension-theorem-intersection-projective", "lem-dimension-finite-union-components", "cor-dimension-affine-and-projective-space", "lem-dimension-nonempty-open-subset"]
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
    - title: "Milne Corollary 6.47, p.156; explicit line and reducible-curve computations supplied here"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
generation:
  role: "example"
status: "draft"
origin: "pipeline"
proof_strategy: "Compute the two displayed equations; for irreducible distinct curves any positive-dimensional component would equal both curves."
---

## Example

Two distinct lines in $\mathbf P_k^2$ intersect in one point. The reducible curves $V_+(XY)$ and $V_+(XZ)$ intersect in the line $X=0$ together with the point $[1:0:0]$. In contrast, two distinct irreducible projective plane curves have a nonempty finite intersection.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Let $X,Y\subseteq\mathbf P_k^n$ be irreducible closed subvarieties. Every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$. If $\dim X+\dim Y\ge n$, then $X\cap Y\ne\varnothing$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-theorem-intersection-projective]]).

[F2] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F3] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

[F4] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

## Verification

1.1 Two distinct lines are defined by independent linear forms on $k^3$. Their common kernel has vector dimension one, so its projectivization is a single point. For the displayed reducible curves, the equations $XY=XZ=0$ imply either $X=0$, giving the whole line, or $X\ne0$ and $Y=Z=0$, giving $[1:0:0]$. This point is outside the line. The intersection has dimension one, as a finite closed union of a line and a point. [F2, F3]

2.1 For distinct irreducible plane curves $C,D$ of dimension one, the projective intersection theorem ensures nonemptiness because $1+1=2$. Their intersection is a proper closed subset of $C$: otherwise $C\subseteq D$, and a proper closed subset of irreducible $D$ could not have dimension one. Thus all components of $C\cap D$ have dimension zero by proper-closed dimension drop. There are finitely many components, each a point (a larger irreducible closed set would contain a singleton chain of length one). Consequently the intersection is finite. [F1, F4, step 1.1] ∎
