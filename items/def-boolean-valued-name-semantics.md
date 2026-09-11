---
id: "def-boolean-valued-name-semantics"
kind: "definition"
title: "Boolean-valued semantics for names"
justified_by: [lem-boolean-valued-semantics-is-well-defined]
deps: ["def-forcing-names-and-name-rank", "def-complete-boolean-algebra-and-regular-open-sets", "thm-recursion-on-well-founded-setlike-relations"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Definition 6.27 and recursion discussion pp26–27
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

In ZF let B be a complete set Boolean algebra with $0\ne1$, using the abstract completeness clause of [[def-complete-boolean-algebra-and-regular-open-sets]]. Use the name construction of [[def-forcing-names-and-name-rank]] with coefficients in B, including zero. Write E(s,t) and I(s,t) for Boolean equality and membership values, prescribed by

$$I(s,t)=\bigvee_{\langle u,b\rangle\in t}(b\wedge E(s,u)),$$
$$E(s,t)=\left(\bigwedge_{\langle u,b\rangle\in s}(\neg b\vee I(u,t))\right)\wedge\left(\bigwedge_{\langle u,b\rangle\in t}(\neg b\vee I(u,s))\right).$$

Existence and uniqueness of this atomic recursion are proved in the following lemma using [[thm-recursion-on-well-founded-setlike-relations]] on sets of descendant pairs. Put $\|s\in t\|=I(s,t)$ and $\|s=t\|=E(s,t)$. Boolean connectives use the corresponding Boolean operations. For each fixed formula phi, define its existential value by

$$\|\exists x\,\phi(x,t)\|=\bigvee\{b\in B:\exists\text{ B-name }s\ (b=\|\phi(s,t)\|)\}.$$

The join ranges over the set of attained values, not over a set of all names. This is a formula-by-formula definition; it asserts neither a uniform truth predicate for V nor a generic truth theorem. Empty joins are zero and empty meets are one. Completeness inside a ground model refers only to its subsets of B; no external completeness or absoluteness of quantified Boolean values is asserted.
