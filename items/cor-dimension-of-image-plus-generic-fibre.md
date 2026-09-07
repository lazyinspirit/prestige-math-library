---
id: "cor-dimension-of-image-plus-generic-fibre"
kind: "corollary"
title: "Image dimension and the generic fibre formula"
deps: ["thm-generic-fibre-dimension", "lem-dimension-finite-union-components", "lem-classical-variety-noetherian-components"]
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
    - title: "Milne §9b opening and Theorem 9.9"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Apply the dominant theorem to X to Z; for reducible source apply it component by component. Do not use a single generic fibre over the full image for a reducible source."
---

## Statement

For an irreducible classical variety $X$ and morphism $f:X\to Y$, the reduced closure $Z=\overline{f(X)}$ is irreducible and $\dim X=\dim Z+r$, where $r$ is the common dimension of the nonempty fibres on a nonempty open of $Z$. For arbitrary nonempty $X$ with components $X_i$, $\dim X=\max_i(\dim\overline{f(X_i)}+r_i)$, with a separately chosen generic open and relative dimension $r_i$ for each $X_i$. For empty $X$ use the empty maximum $-\infty$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a dominant morphism $f:X\to Y$ between irreducible classical varieties, there is a nonempty open $U\subseteq Y$, contained in $f(X)$, such that every $X_y$ with $y\in U$ is nonempty and has pure dimension $r=\dim X-\dim Y$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-generic-fibre-dimension]]).

[F2] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F3] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

## Proof

1.1 A continuous image of an irreducible space is irreducible: a finite closed cover of its image pulls back to a closed cover of the source. Its closure $Z$ is irreducible as well. The morphism factors through the reduced closed subvariety $Z$, since all its defining functions vanish on the image. The induced $X\to Z$ is dominant, so the generic fibre theorem gives $r=\dim X-\dim Z$ on a nonempty image open. Fibres over points of $Z$ are unchanged. [F1]

2.1 In the reducible case apply that assertion to each of the finitely many nonempty irreducible components $X_i$. The finite-closed-union dimension formula then gives the displayed maximum. This does not identify different $r_i$ or require a common generic open in different image closures. If $X$ is empty both its dimension and the empty maximum are $-\infty$. [F2, F3, step 1.1] ∎
