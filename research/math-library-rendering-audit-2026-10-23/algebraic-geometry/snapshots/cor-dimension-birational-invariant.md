---
id: "cor-dimension-birational-invariant"
kind: "corollary"
title: "Dimension is birationally invariant"
deps: ["lem-dimension-nonempty-open-subset", "def-classical-birational-equivalence", "def-axiom-of-choice"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Milne §5l, Proposition 5.39, p.117"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Apply open invariance to the isomorphic nonempty opens in the published birational-equivalence definition."
---

## Statement

Birational irreducible classical varieties have equal dimension. In particular,
if $X$ and $Y$ are irreducible classical varieties, $U\subseteq X$ and
$V\subseteq Y$ are nonempty open subvarieties, and $U\cong V$, then
$\dim X=\dim Y$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

[F2] Under AC, birational equivalence of integral classical varieties means the existence of isomorphic nonempty open subsets ([[def-classical-birational-equivalence]]).

## Proof

1.1 An isomorphism $U\cong V$ carries irreducible closed chains to chains of the same length. Open invariance gives $\dim X=\dim U=\dim V=\dim Y$. [F1]

2.1 For birational irreducible classical varieties, [F2] supplies isomorphic nonempty opens. Step 1.1 applies to them and proves equality of dimensions. [F2, step 1.1] ∎
