---
id: def-elementary-diagram-of-set-structure
kind: definition
title: "Elementary diagrams"
status: draft
origin: pipeline
deps: [def-elementary-set-structure-embedding, def-set-signature-and-finite-syntax-strings, thm-set-structure-satisfaction-recursion, lem-satisfaction-coincidence, def-theories-models-and-semantic-consequence]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Chapter 3 opening and Definition 25, printed p.24."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $\mathcal M$ be a nonempty set structure for a set signature $L$. Form $L_M$ by adjoining one distinct fresh constant $c_a$ for every $a\in M$. Use a tagged disjoint copy for the new symbol set (and the canonical tagged inclusion of the old symbols), so no old symbol is identified with a name. This is a set signature by [[def-set-signature-and-finite-syntax-strings]]. Let $\mathcal M_M$ be the expansion interpreting $c_a$ as $a$ and keeping all old interpretations.

The **elementary diagram** is

$$\operatorname{EDiag}(\mathcal M)=\{\sigma\in\operatorname{Sent}_{L_M}:\mathcal M_M\models\sigma\}.$$

The set of sentences is a subset of the set of finite words, and the satisfaction relation is a set uniformly definable from the structure by [[thm-set-structure-satisfaction-recursion]]. Sentence truth is assignment independent by [[lem-satisfaction-coincidence]]; since $M$ is nonempty, fix one assignment, for example the constant assignment at any one $m_0\in M$. Separation therefore gives the displayed set, independently of that assignment. This is a theory in the sense of [[def-theories-models-and-semantic-consequence]], containing every true expanded-language sentence, including quantified ones.

For each $a\ne b$ in $M$, $\neg(c_a=c_b)$ belongs to the diagram because the two names have distinct interpretations and logical equality is literal equality. For $a=b$, $c_a=c_a$ belongs instead. Naming all elements does not assert that every model of the diagram has only named elements.

Conventions and prerequisites: [[def-elementary-set-structure-embedding]].
