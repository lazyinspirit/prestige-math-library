---
id: "def-forcing-relation-for-formulas"
kind: "definition"
title: "Forcing relation for all formulas"
deps: ["lem-atomic-forcing-relation-is-well-founded-and-definable", "def-set-coded-terms-and-formulas"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
---

## Definition

In ZF fix a nonempty forcing preorder P. Start with the atomic relations in [[lem-atomic-forcing-relation-is-well-founded-and-definable]]. For each fixed finite membership formula, use its syntax from [[def-set-coded-terms-and-formulas]] to extend forcing by

$$p\Vdash(\psi\land\theta)(\vec\tau)\quad\Longleftrightarrow\quad(p\Vdash\psi(\vec\tau)\ \land\ p\Vdash\theta(\vec\tau)),$$
$$p\Vdash\neg\psi(\vec\tau)\quad\Longleftrightarrow\quad\nexists q\le p\ (q\Vdash\psi(\vec\tau)),$$
$$p\Vdash\exists x\,\psi(x,\vec\tau)\quad\Longleftrightarrow\quad\forall q\le p\ \exists r\le q\ \exists\text{ P-name }\sigma\ (r\Vdash\psi(\sigma,\vec\tau)).$$

Boolean and universal abbreviations expand using negation, conjunction and existential quantification. Substitution is capture-avoiding, with bound variables renamed as necessary; pure membership terms are variables.

This is an external induction on a fixed finite formula. If its subformula forcing relations are definable, each displayed clause is a first-order formula: quantification over names is restricted by the definable namehood predicate. Separation on P forms the set of conditions having some name witness, despite the absence of a set of all names. Thus the clauses define one predicate for each formula, rather than a single satisfaction predicate uniformly ranging over all formulas of the universe.

In a transitive ZF ground model M, interpret every clause internally and denote the result by $\Vdash^M$. In particular the existential name ranges over M's names. Only the atomic relation is asserted to agree with the external recursion; the quantified forcing relations need not agree between different ground models. Existential forcing requires dense witnesses and makes no maximal-antichain selection and no assertion of one globally selected witnessing name. No AC is assumed.
