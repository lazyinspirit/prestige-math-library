---
id: def-set-theoretic-levy-hierarchy-and-absoluteness
kind: definition
title: "The Lévy hierarchy and absoluteness"
status: published
origin: pipeline
deps: [def-set-coded-terms-and-formulas, def-relativization-to-a-definable-class]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Andrew Marks, Set Theory lecture notes — Definition 18.8, Levy hierarchy, p76"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---


## Definition

In the pure membership language, $\Delta_0$ consists of atomic formulas and their Boolean combinations and bounded quantifications $\exists x\in a$ and $\forall x\in a$ (the bound does not contain $x$). Put $\Sigma_0=\Pi_0=\Delta_0$. Simultaneously, $\Sigma_{n+1}$ is the closure of $\Pi_n$ under unbounded existential quantification, finite conjunction/disjunction, and bounded quantification; $\Pi_{n+1}$ is the dual closure of $\Sigma_n$ under unbounded universal quantification, the positive Boolean operations, and bounded quantification. Empty conjunction and disjunction mean truth and falsity. Negation exchanges the two classes after De Morgan expansion.

A formula is $T$-$\Sigma_n$ if $T$ proves it equivalent to such a formula, and similarly for $\Pi_n$; $T$-$\Delta_n$ means both. Unless specified otherwise the equivalence theory here is ZF. This is a hierarchy of set quantifiers, distinct from the arithmetic hierarchy.

For nonempty membership domains $M\subseteq N$, absoluteness of $\phi$ means $\phi^M(\bar a)\leftrightarrow\phi^N(\bar a)$ for every tuple $\bar a\in M$ of its parameters. For definable classes this is a scheme, using relativization separately for each external formula.

The formula constructors and fresh-variable convention are those of [[def-set-coded-terms-and-formulas]]. Expand bounded quantifiers before applying [[def-relativization-to-a-definable-class]]. No satisfaction predicate for the universe is being defined. Compare Marks, Definition 18.8 and Exercise 18.9, printed p.76: bounded closure is built into our syntax; its existential normal form needs a separate ZF argument.
