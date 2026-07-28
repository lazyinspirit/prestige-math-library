---
id: thm-double-counting
kind: theorem
title: "Double counting: $\\sum_{x \\in X}\\lvert R_x\\rvert = \\lvert R\\rvert = \\sum_{y \\in Y}\\lvert R^y\\rvert$ for a relation between finite sets"
status: published
origin: session
deps: [def-a-finite-incidence-relation-and-its-fibres, thm-sum-rule,
       def-sum-over-a-finite-index-set, def-finite-cardinality,
       def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be finite sets and let $R \subseteq X \times Y$, with row fibres
$R_x$ and column fibres $R^{y}$ as in
[[def-a-finite-incidence-relation-and-its-fibres]]. Then, in $\mathbb{N}$,

$$\sum_{x \in X}\lvert R_x\rvert \;=\; \lvert R\rvert \;=\; \sum_{y \in Y}\lvert R^{y}\rvert ,$$

the sums being those of [[def-sum-over-a-finite-index-set]].

Both index sets may be empty. If $X = \varnothing$ then $R = \varnothing$, every
column fibre is empty, and all three quantities are $0$; the same holds with the
roles of $X$ and $Y$ exchanged.

## Facts & Assumptions

**Given:** Finite sets $X$ and $Y$, a relation $R \subseteq X \times Y$, and its fibres.

[L1] $R$, every $R_x$ and every $R^{y}$ are finite, so all the cardinalities written below are defined ([[def-a-finite-incidence-relation-and-its-fibres]], clause (a), [[def-finite-cardinality]]).

[L2] The row slices $\{x\} \times R_x$, $x \in X$, are pairwise disjoint finite sets with union $R$; likewise the column slices $R^{y} \times \{y\}$, $y \in Y$ ([[def-a-finite-incidence-relation-and-its-fibres]], clause (c)).

[L3] $\lvert\{x\} \times R_x\rvert = \lvert R_x\rvert$ and $\lvert R^{y} \times \{y\}\rvert = \lvert R^{y}\rvert$, by the slice bijections of clause (b) of [[def-a-finite-incidence-relation-and-its-fibres]] and the transport clause (c) of [[def-finite-cardinality]] ([[def-injection-surjection-bijection]]).

[L4] The sum rule for a finite partition: if $(C_i)_{i \in I}$ is a family of pairwise disjoint finite sets indexed by a finite set $I$, then $\bigcup_{i \in I} C_i$ is finite with $\big\lvert\bigcup_{i \in I} C_i\big\rvert = \sum_{i \in I}\lvert C_i\rvert$ ([[thm-sum-rule]], clause 2, [[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 The row slices form a family of pairwise disjoint finite sets indexed by the finite set $X$, and their union is $R$, so [L4] gives $\lvert R\rvert = \sum_{x \in X}\lvert \{x\} \times R_x\rvert$. [L1, L2, L4]

1.2 The column slices form a family of pairwise disjoint finite sets indexed by the finite set $Y$, and their union is $R$, so [L4] gives $\lvert R\rvert = \sum_{y \in Y}\lvert R^{y} \times \{y\}\rvert$. [L1, L2, L4]

2.1 Replacing each summand of step 1.1 by $\lvert R_x\rvert$ and each summand of step 1.2 by $\lvert R^{y}\rvert$, which is legitimate by [L3] since the two lists have the same values at every index, gives $\sum_{x \in X}\lvert R_x\rvert = \lvert R\rvert = \sum_{y \in Y}\lvert R^{y}\rvert$. [step 1.1, step 1.2, L3] ∎

## Remarks

- **Where the hypotheses are spent.** Finiteness of $X$ and of $Y$ is what makes the two index sets legitimate index sets for a sum, and finiteness of $R$ is what makes $\lvert R\rvert$ defined. Disjointness of the slices is automatic, since a slice is determined by one coordinate of its points, which is why no hypothesis of that kind appears in the statement.

- **The count stays in $\mathbb{N}$.** Every quantity here is a cardinality, and the sums are the $\mathbb{N}$-valued ones. Nothing is embedded into $\mathbb{R}$ until an identity with a subtraction or a division has to be written.
