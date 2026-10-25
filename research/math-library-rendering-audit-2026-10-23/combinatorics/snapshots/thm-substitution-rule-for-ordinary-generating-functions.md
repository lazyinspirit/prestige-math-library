---
id: thm-substitution-rule-for-ordinary-generating-functions
kind: theorem
title: "If $B(0)=0$ then $\\mathcal{A}\\circ\\mathcal{B}$ has generating function $A(B(x))$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-substitution-of-combinatorial-classes, def-formal-series-composition, thm-formal-composition-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ and $\mathcal{B}$ be combinatorial classes with ordinary
generating functions

$$A(x) = \sum_{r \ge 0} a_r x^r, \qquad B(x) = \sum_{n \ge 0} b_n x^n,$$

and suppose $B(0)=0$. Then $\mathcal{A} \circ \mathcal{B}$ is a combinatorial
class and

$$\operatorname{OGF}(\mathcal{A} \circ \mathcal{B}) = A(B(x)).$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[L1] Formal composition is $f \circ g = \sum_{r \ge 0}[x^r]f\,g^r$, and it is admissible when $g(0)=0$ ([[def-formal-series-composition]]).

[L2] Substitution by a zero-constant series is a ring homomorphism ([[thm-formal-composition-laws]]).

## Proof

**Proof technique:** direct.

1.1 Fix $r \ge 0$. An object of size $r$ in $\mathcal{A}$ contributes one ordered list of $r$ slots, and filling those slots with $\mathcal{B}$-objects is counted by $B(x)^r$. Since there are $a_r$ choices for the outer object, the total contribution of all outer objects of size $r$ is $a_r B(x)^r$. [construct]

2.1 Because $B(0)=0$, every $\mathcal{B}$-object has positive size. Therefore an object of total size $n$ in $\mathcal{A} \circ \mathcal{B}$ can only come from outer size $r \le n$, so each size layer is finite and the total generating function is $\sum_{r \ge 0} a_r B(x)^r$. [step 1.1, given]

3.1 The series of step 2.1 is exactly the admissible formal composition $A(B(x))$ by [L1], and [L2] records that substitution by a zero-constant series is the corresponding ring operation on formal series. Hence $\operatorname{OGF}(\mathcal{A} \circ \mathcal{B}) = A(B(x))$. [step 2.1, L1, L2] ∎
