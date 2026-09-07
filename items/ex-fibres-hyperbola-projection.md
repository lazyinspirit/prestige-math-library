---
id: "ex-fibres-hyperbola-projection"
kind: "example"
title: "Elementary fibres: empty, points, and affine lines"
deps: ["def-fibre-dimension-at-point-classical", "cor-dimension-affine-and-projective-space"]
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
    - title: "Milne Example 8.30, p.185; full-plane comparison computed here"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
generation:
  role: "example"
status: "draft"
origin: "pipeline"
proof_strategy: "Solve the equations and exhibit explicit affine-coordinate inverses."
---

## Example

For $H=V(xy-1)\subseteq\mathbf A_k^2$, projection $H\to\mathbf A_k^1$ onto $x$ has fibre $\{(a,a^{-1})\}$ when $a\ne0$ and empty fibre at $a=0$. Their dimensions are zero and $-\infty$ respectively. By contrast, every fibre of $\mathbf A^2\to\mathbf A^1$, $(x,y)\mapsto x$, is an affine line of dimension one.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

[F2] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

## Verification

1.1 Fixing $x=a$ in $xy=1$ gives $ay=1$. If $a\ne0$ the unique solution is $y=a^{-1}$; if $a=0$ it has no solution. These reduced fibres are respectively a point and the empty variety, of dimensions zero and $-\infty$. [F1, F2]

2.1 For the full-plane projection fixing $x=a$ leaves $y$ arbitrary. The regular maps $y\mapsto(a,y)$ and $(a,y)\mapsto y$ are inverse isomorphisms of the fibre with $\mathbf A^1$. Thus its dimension is one for every $a$, including zero. [F2, step 1.1] ∎
