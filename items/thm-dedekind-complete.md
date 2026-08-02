---
id: thm-dedekind-complete
kind: theorem
title: "Dedekind completeness: the least-upper-bound property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-dedekind, def-cut-order, def-dedekind-cut, lem-cut-order-total, thm-reals-dedekind-ordered-field]
aliases: []
landmark: true
short: "ℝ complete (lub)"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Construction of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Construction_of_the_real_numbers"
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
    - title: "Dedekind cut (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind_cut"
pipeline_run: null
---

## Statement

**Least-upper-bound property.** Every nonempty set $S$ of Dedekind cuts that is
bounded above (there is a cut $B$ with $A \le B$ for all $A \in S$) has a least
upper bound $\sup S$, and it is given explicitly by the union
$$C := \bigcup_{A \in S} A.$$
Together with [[thm-reals-dedekind-ordered-field]] this shows $\mathbb{R}$ is a
**complete totally ordered field**: the Dedekind construction is order-complete.
This order-completeness is the Dedekind counterpart of the Cauchy-sequence
completeness of $\mathbb{R}$.

## Facts & Assumptions

**Given:** A nonempty set $S$ of Dedekind cuts bounded above by a cut $B$ ($A \le B$ for all $A \in S$), and $C := \bigcup_{A \in S} A$ ([[def-real-dedekind]]).

[L1] Cut axioms: (C1) proper and nonempty, (C2) downward closed, (C3) no greatest element ([[def-dedekind-cut]]).

[L2] Order is inclusion: $A \le D \iff A \subseteq D$ ([[def-cut-order]]).

[L3] Inclusion is a partial (indeed total) order, so upper and least-upper bounds are taken with respect to $\subseteq$ ([[lem-cut-order-total]]).

[L4] $\mathbb{R}$ is a totally ordered field; the least-upper-bound property below is the order-completeness that complements it ([[thm-reals-dedekind-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 (C1) $C$ is nonempty and proper: $S$ has a member $A_0$ with $A_0 \ne \emptyset$ and $A_0 \subseteq C$, so $C \ne \emptyset$; and every $A \in S$ satisfies $A \subseteq B$, so $C = \bigcup_{A \in S} A \subseteq B$ with $B \ne \mathbb{Q}$, hence $C \ne \mathbb{Q}$. [given, L1, L2]

1.2 (C2) $C$ is downward closed: if $p \in C$ then $p \in A$ for some $A \in S$; for $q < p$, downward closure of $A$ gives $q \in A \subseteq C$. [given, L1]

1.3 (C3) $C$ has no greatest element: if $p \in C$ then $p \in A$ for some $A \in S$; as $A$ has no greatest element there is $r \in A$ with $r > p$, and $r \in C$. [given, L1]

1.4 $C$ is an upper bound for $S$: every $A \in S$ satisfies $A \subseteq \bigcup_{A' \in S} A' = C$, i.e. $A \le C$. [given, L2]

1.5 $C$ is below every upper bound: if a cut $D$ satisfies $A \le D$ for all $A \in S$, then $A \subseteq D$ for all $A$, so $C = \bigcup_{A \in S} A \subseteq D$, i.e. $C \le D$. [given, L2, L3]

2.1 $C$ is a Dedekind cut. [step 1.1, step 1.2, step 1.3, L1]

3.1 Therefore $\sup S$ exists and equals $C = \bigcup_{A \in S} A$: $\mathbb{R}$ has the least-upper-bound property. With [[thm-reals-dedekind-ordered-field]], $\mathbb{R}$ is a complete totally ordered field, the order-completeness of the Dedekind construction, the exact counterpart of Cauchy-sequence completeness. [step 2.1, step 1.4, step 1.5, L4] ∎
