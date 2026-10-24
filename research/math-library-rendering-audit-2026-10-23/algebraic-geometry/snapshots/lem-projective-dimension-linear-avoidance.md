---
id: "lem-projective-dimension-linear-avoidance"
kind: "lemma"
title: "Dimension is detected by avoiding linear subspaces"
deps: ["lem-projective-hypersurface-dimension-drop", "thm-dimension-theorem-intersection-projective", "lem-dimension-finite-union-components", "cor-dimension-affine-and-projective-space"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Proposition 6.48 and Lemma 6.49"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Over infinite k choose hyperplanes avoiding the finitely many components and lower dimension successively. The union of finitely many proper dual linear subspaces cannot be the full dual: their defining linear forms have nonzero product. The converse is the intersection theorem."
---

## Statement

For a closed subset $Z\subseteq\mathbf P_k^N$ and integer $0\le r\le N$, $\dim Z<r$ if and only if some projective linear subspace of dimension $N-r$ is disjoint from $Z$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Let $X\subseteq\mathbf P_k^N$ be irreducible of dimension $d\ge1$. If $f$ is homogeneous of positive degree and does not vanish identically on $X$, then $X\cap V_+(f)$ is nonempty and every irreducible component has dimension $d-1$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-projective-hypersurface-dimension-drop]]).

[F2] Let $X,Y\subseteq\mathbf P_k^n$ be irreducible closed subvarieties. Every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$. If $\dim X+\dim Y\ge n$, then $X\cap Y\ne\varnothing$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-theorem-intersection-projective]]).

[F3] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F4] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

## Proof

1.1 For $r=0$, the inequality means $Z=\varnothing$, and the only $N$-plane is the whole $\mathbf P^N$, which is disjoint from $Z$ exactly in that case. For $r>0$ and $Z=\varnothing$, any coordinate $(N-r)$-plane works. [F4]

1.2 Suppose $Z\ne\varnothing$ and $\dim Z<r$. In any current linear ambient space, choose a hyperplane containing none of the finitely many irreducible components of its intersection with $Z$. Such a hyperplane exists: the coefficient vectors of hyperplanes containing a fixed nonempty component form a proper vector subspace of the dual; finitely many such subspaces cannot cover the dual over infinite $k$. Indeed enclose them in hyperplanes with nonzero linear equations; their product is a nonzero polynomial and cannot vanish on all of $k^s$, as follows by induction on $s$ from the one-variable root bound. [F3]

2.1 Each positive-dimensional component drops dimension by one on cutting by the chosen hyperplane, and a zero-dimensional component is a point avoided by it. Repeat inside the successive linear spaces. After at most $\dim Z+1\le r$ cuts the intersection is empty; continue taking arbitrary hyperplanes if necessary until precisely $r$ cuts have been made. Each cut is a hyperplane of the previous linear space, so the final linear space has dimension $N-r$ and avoids $Z$. [F1, F3, step 1.2]

3.1 Conversely suppose an $(N-r)$-plane $L$ avoids $Z$. If $\dim Z\ge r$, some irreducible component $Z_j$ has dimension at least $r$. Then $\dim Z_j+\dim L\ge N$, so the projective intersection theorem forces $Z_j\cap L\ne\varnothing$, a contradiction. Thus $\dim Z<r$. [F2, F3, F4, step 1.1] ∎
