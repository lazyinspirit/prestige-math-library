---
id: "cex-affine-intersection-bound-singular-ambient"
kind: "counterexample"
title: "The ambient affine-space hypothesis matters"
deps: ["thm-principal-subvariety-codimension-one", "cor-dimension-affine-and-projective-space", "lem-affine-intersection-dimension-bound"]
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
    - title: "Milne Remark 5.37(b)"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Compute the plane intersection and ambient hypersurface dimension; 0<2+2-3."
---

## Statement refuted

False claim: for irreducible closed subsets $P,Q$ of any irreducible classical ambient variety $W$, every nonempty component of $P\cap Q$ has dimension at least $\dim P+\dim Q-\dim W$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted, for the explicit witness below.

[F1] Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-principal-subvariety-codimension-one]]).

[F2] For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[cor-dimension-affine-and-projective-space]]).

[F3] For irreducible closed $X,Y\subseteq\mathbf A_k^n$, every nonempty irreducible component $Z$ of $X\cap Y$ satisfies $\dim Z\ge\dim X+\dim Y-n$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-affine-intersection-dimension-bound]]).

## Counterexample

1.1 Let $W=V(x_1x_4-x_2x_3)\subseteq\mathbf A^4$. The polynomial is irreducible: viewing it as a primitive polynomial in $x_4$ over $k[x_1,x_2,x_3]$, its coefficients $x_1$ and $-x_2x_3$ have no nonunit common factor, and over the fraction field it is linear. Gauss reduction proves irreducibility in the polynomial ring; equivalently a factor independent of $x_4$ would divide both coefficients and be a unit. Thus $W$ is irreducible, and the principal theorem in affine four-space gives $\dim W=3$. [F1, F2]

2.1 The subspaces $P=V(x_2,x_4)$ and $Q=V(x_1,x_3)$ lie in $W$ and are affine planes, each of dimension two. Their intersection is exactly the origin, of dimension zero. The claimed ambient bound would require $0\ge2+2-3=1$, which is false. The valid affine-space bound instead uses ambient $\mathbf A^4$ and gives $0\ge2+2-4=0$. [F2, F3, step 1.1] ∎
