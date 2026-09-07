---
id: "cor-maximal-chains-irreducible-variety-dimension"
kind: "corollary"
title: "Maximal chains in an irreducible variety"
deps: ["thm-principal-subvariety-codimension-one", "lem-dimension-nonempty-open-subset", "lem-classical-variety-noetherian-components", "lem-zero-dimensional-classical-variety-finite", "def-codimension-irreducible-subvariety"]
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
    - title: "Milne Corollaries 3.43–3.44, pp.76–77"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "On an affine chart meeting Z choose a nonzero function vanishing on Z. Maximality forces Z to be a component of its zero set after taking closure. Apply the principal theorem. Successive maximal inclusions drop dimension by one, and a minimal member is a closed point."
---

## Statement

In an irreducible classical variety $X$, a maximal proper nonempty irreducible closed subset $Z$ has codimension one. Every maximal chain of nonempty irreducible closed subsets has length $\dim X$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Let $X$ be irreducible affine and $0\ne f\in k[X]$ be a nonunit. Then $V_X(f)$ is nonempty and every irreducible component has dimension $\dim X-1$, hence codimension one. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-principal-subvariety-codimension-one]]).

[F2] If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-dimension-nonempty-open-subset]]).

[F4] A classical variety $X$ has $\dim X\le0$ if and only if its underlying set is finite. The empty set is included. A nonempty irreducible variety of dimension zero is one point. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-zero-dimensional-classical-variety-finite]]).

[F5] For a nonempty irreducible closed subvariety $Z$ of an irreducible classical variety $X$, define $\operatorname{codim}_X Z=\dim X-\dim Z$. These are finite integers. In a reducible ambient variety a difference of global dimensions must not be substituted for the height of a local prime; the containing component matters. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-codimension-irreducible-subvariety]]).

## Proof

1.1 Choose an affine open $U$ meeting $Z$. The proper closed subset $Z\cap U$ is defined by an ideal containing a nonzero function $f$; since it has a point, $f$ is a nonunit. Choose a component $D$ of $V_U(f)$ containing $Z\cap U$. Its closure in $X$ is irreducible, contains $Z$ and is proper because its intersection with $U$ lies in the proper zero set. Maximality forces this closure to equal $Z$. The principal theorem and open invariance give $\dim Z=\dim D=\dim U-1=\dim X-1$. [F1, F2]

2.1 Dimension is finite, and every proper irreducible closed inclusion strictly decreases it. Thus any chain is finite. A maximal chain must end at $X$ and start at a point (otherwise insert a point); successive members are maximal proper irreducible closed subsets of the next member. The first step applied to each inclusion decreases dimension by exactly one. Since the starting point has dimension zero, the number of inclusions is $\dim X$. If $X$ is a point there is only its length-zero maximal chain. [F2, F4, F5, step 1.1] ∎
