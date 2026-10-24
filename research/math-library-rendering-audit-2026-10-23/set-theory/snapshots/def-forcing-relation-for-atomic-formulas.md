---
id: "def-forcing-relation-for-atomic-formulas"
kind: "definition"
title: "Atomic forcing relation"
deps: ["def-forcing-names-and-name-rank", "def-forcing-name-valuation-and-generic-extension", "def-dense-open-sets-and-model-generic-filters"]
justified_by: ["lem-atomic-forcing-relation-is-well-founded-and-definable"]
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

Work in ZF with a nonempty forcing preorder $P$, with $q\le p$ meaning that q is stronger. Names have the coordinates $(\text{name},\text{condition})$ and rank convention of [[def-forcing-names-and-name-rank]]. Write $q\perp s$ for incompatibility. Density, nonempty filters and ground-model genericity have the conventions of [[def-dense-open-sets-and-model-generic-filters]].

For names $\sigma,\tau$, the following clauses specify atomic forcing:

$$p\Vdash\sigma\subseteq\tau\quad\Longleftrightarrow\quad\forall\langle u,s\rangle\in\sigma\ \forall q\le p,s\ \exists r\le q\ \exists\langle v,t\rangle\in\tau\ (r\le t\ \land\ r\Vdash u=v).$$

Here $q\le p,s$ abbreviates $q\le p$ and $q\le s$; if there is no such q the corresponding requirement is vacuous. Define

$$p\Vdash\sigma=\tau\quad\Longleftrightarrow\quad(p\Vdash\sigma\subseteq\tau\ \land\ p\Vdash\tau\subseteq\sigma),$$
$$p\Vdash\sigma\in\tau\quad\Longleftrightarrow\quad\forall q\le p\ \exists r\le q\ \exists\langle v,t\rangle\in\tau\ (r\le t\ \land\ r\Vdash\sigma=v).$$

Subset is an auxiliary clause, not an additional symbol in the membership language. In the equality clause, substituting the displayed subset clauses leaves only equality calls on two proper subnames. First solve that rank recursion, then define auxiliary subset and membership by the displays. [[lem-atomic-forcing-relation-is-well-founded-and-definable]] proves that this prescription exists, is unique and is definable. No largest condition is required.

For a transitive ZF ground model M containing P, $\Vdash^M$ denotes the internally defined relation. The clauses do not quantify over generic filters or assume their existence. Their semantic relation to the valuation in [[def-forcing-name-valuation-and-generic-extension]] is proved later. Empty names are allowed: an empty left subset clause is vacuous, whereas no condition forces membership in the empty name.
