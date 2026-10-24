---
id: thm-reals-dedekind-ordered-field
kind: theorem
title: "The Dedekind reals form a totally ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-reals-dedekind-field, def-cut-order, lem-cut-order-total, def-cut-addition, def-cut-multiplication]
aliases: []
landmark: true
short: "ℝ ordered field"
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
pipeline_run: null
---

## Statement

The inclusion order $A \le B :\iff A \subseteq B$ ([[def-cut-order]]) makes
$\mathbb{R}$, the field of Dedekind cuts ([[thm-reals-dedekind-field]]), a
**totally ordered field**: the order is total, translation-invariant
($A \le B \Rightarrow A + C \le B + C$), and closed under multiplication of
nonnegatives ($0^{*} \le A$ and $0^{*} \le B \Rightarrow 0^{*} \le A \cdot B$).

## Facts & Assumptions

**Given:** Cuts $A, B, C$ ordered by inclusion ([[def-cut-order]]).

[L1] $\mathbb{R}$ (Dedekind cuts) is a field under $+$ and $\cdot$ ([[thm-reals-dedekind-field]]).

[L2] Inclusion totally orders $\mathbb{R}$: reflexive, antisymmetric, transitive, and total ([[lem-cut-order-total]]).

[L3] Addition is the sumset $A + B = \{\, a + b : a \in A,\ b \in B \,\}$, with identity $0^{*}$ ([[def-cut-addition]]).

[L4] For strictly positive cuts $A, B > 0^{*}$, $A \cdot B = \{\, q \in \mathbb{Q} : q \le 0 \,\} \cup \{\, a b : a \in A,\ b \in B,\ a > 0,\ b > 0 \,\}$; and $A \cdot B = 0^{*}$ whenever $A = 0^{*}$ or $B = 0^{*}$ (the sign rule). Also $0^{*} = \{\, r \in \mathbb{Q} : r < 0 \,\}$ ([[def-cut-multiplication]], [[def-cut-order]]).

## Proof

**Proof technique:** direct.

1.1 By [[lem-cut-order-total]] the relation $\subseteq$ is a reflexive, antisymmetric, transitive, and total order on $\mathbb{R}$. [L2]

1.2 Translation invariance: suppose $A \subseteq B$. Every element of $A + C$ has the form $a + c$ with $a \in A$, $c \in C$; since $a \in A \subseteq B$, also $a + c \in B + C$. Hence $A + C \subseteq B + C$, i.e. $A \le B \Rightarrow A + C \le B + C$. [L3]

1.3 Positivity of products of nonnegatives: suppose $0^{*} \le A$ and $0^{*} \le B$. If $A = 0^{*}$ or $B = 0^{*}$, then $A \cdot B = 0^{*}$ by the sign rule [L4], so $0^{*} \subseteq A \cdot B$. Otherwise $A, B > 0^{*}$, and the positive-case formula [L4] gives $A \cdot B \supseteq \{\, q \in \mathbb{Q} : q \le 0 \,\} \supseteq \{\, r \in \mathbb{Q} : r < 0 \,\} = 0^{*}$, so $0^{*} \subseteq A \cdot B$. In either case $0^{*} \le A \cdot B$. [L4]

2.1 Thus $\mathbb{R}$ is a field whose inclusion order is total, translation-invariant, and closed under multiplication of nonnegative cuts: a totally ordered field. [step 1.1, step 1.2, step 1.3, L1] ∎
