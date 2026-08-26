---
id: thm-sequence-construction-generating-function
kind: theorem
title: "If $\\mathcal{A}$ has no size-zero objects then $\\operatorname{SEQ}(\\mathcal{A})$ has generating function $1/(1-A(x))$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sequence-construction-of-a-combinatorial-class, thm-symbolic-sum-and-product-rules, thm-formal-power-series-unit-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
    - title: "Robert Sedgewick and Kevin Wayne, Analysis of Algorithms, Section 3.9"
      url: "https://aofa.cs.princeton.edu/30gf/"
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ be a combinatorial class with ordinary generating function

$$A(x) = \sum_{n \ge 0} a_n x^n,$$

and suppose $\mathcal{A}$ has no size-zero objects, so $a_0 = 0$. Then
$\operatorname{SEQ}(\mathcal{A})$ is a combinatorial class and

$$\operatorname{OGF}(\operatorname{SEQ}(\mathcal{A})) = \frac{1}{1-A(x)}.$$

Consequently,

$$\operatorname{OGF}(\operatorname{SEQ}_{\ge 1}(\mathcal{A})) = \frac{A(x)}{1-A(x)}.$$

## Facts & Assumptions

**Given:** A combinatorial class $\mathcal{A}$ with ordinary generating function $A(x)$ and no size-zero objects.

[L1] Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions ([[thm-symbolic-sum-and-product-rules]]).

[L2] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Every sequence in $\operatorname{SEQ}(\mathcal{A})$ is either empty or has the form $(a,\sigma)$ with $a \in \mathcal{A}$ and $\sigma \in \operatorname{SEQ}(\mathcal{A})$, so $\operatorname{SEQ}(\mathcal{A}) = \mathcal{E} + \mathcal{A} \times \operatorname{SEQ}(\mathcal{A})$ as combinatorial classes. Also, because every object of $\mathcal{A}$ has positive size, a sequence of total size $n$ has length at most $n$, so the size-$n$ layer of $\operatorname{SEQ}(\mathcal{A})$ is finite. [construct]

2.1 Let $F(x)$ be the ordinary generating function of $\operatorname{SEQ}(\mathcal{A})$. Step 1.1 and [L1] give $F(x) = 1 + A(x)F(x)$. [step 1.1, L1]

3.1 Since $\mathcal{A}$ has no size-zero objects, the constant coefficient of $A(x)$ is $0$, so the constant coefficient of $1-A(x)$ is $1$, which is a unit. By [L2], $1-A(x)$ is invertible, and solving the equation of step 2.1 gives $F(x) = 1/(1-A(x))$. [step 2.1, L2]

4.1 The class $\operatorname{SEQ}_{\ge 1}(\mathcal{A})$ is $\operatorname{SEQ}(\mathcal{A}) - \mathcal{E}$, so [L1] and step 3.1 give $\operatorname{OGF}(\operatorname{SEQ}_{\ge 1}(\mathcal{A})) = F(x) - 1 = A(x)/(1-A(x))$. [step 3.1, L1] ∎
