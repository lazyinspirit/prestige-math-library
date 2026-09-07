---
id: "cor-dimension-birational-invariant"
kind: "corollary"
title: "Dimension is birationally invariant"
deps: ["lem-dimension-nonempty-open-subset", "thm-birational-equivalence-function-fields", "lem-general-variety-function-field-charts"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Milne §5l, Proposition 5.39, p.117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Apply open invariance to common isomorphic opens. The affine birational theorem applies after restricting both sides to affine charts."
---

## Statement

Birational irreducible classical varieties have equal dimension. In particular, if $U\subseteq X$ and $V\subseteq Y$ are nonempty open subvarieties and $U\cong V$, then $\dim X=\dim Y$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

[F2] Let $X$ and $Y$ be classical affine varieties. Then $X$ and $Y$ are birationally equivalent if and only if their function fields are isomorphic as extensions of $k$. ([[thm-birational-equivalence-function-fields]]).

[F3] For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-general-variety-function-field-charts]]).

## Proof

1.1 An isomorphism $U\cong V$ carries irreducible closed chains to chains of the same length. Open invariance gives $\dim X=\dim U=\dim V=\dim Y$. [F1]

2.1 For general birational varieties, restrict the inverse rational maps to affine charts on their domains. Their field maps, identified using chart independence, are inverse. The affine birational theorem applies to these charts, and rational inverse maps restrict to inverse regular maps on nonempty opens: intersect their domains with the inverse images of each other and the opens where the two compositions equal the identities. The first step then applies. [F2, F3, step 1.1] ∎
