---
id: def-henkin-closed-term-model
kind: definition
title: "The closed-term quotient structure"
status: published
origin: pipeline
deps: [lem-henkin-term-equality-congruence, def-set-structures-and-variable-assignments]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemma 1I.5, printed pp41–43; quotient on closed terms instead of constants."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
---

## Definition

Let $H$ be a consistent, deductively closed, complete Henkin sentence theory in a set signature $L'$ with a seed constant $c_*$. Let $C$ be the set of closed $L'$-terms and $s\sim t$ mean $(s=t)\in H$. By [[lem-henkin-term-equality-congruence]], this is an equivalence relation and a congruence. The **closed-term model** $\mathcal M_H$ has carrier $C/{\sim}=\{[t]:t\in C\}$, where $[t]=\{s\in C:s\sim t\}$, and interpretations

$$c^{\mathcal M_H}=[c],\qquad f^{\mathcal M_H}([t_1],\ldots,[t_n])=[f(t_1,\ldots,t_n)],$$
$$R^{\mathcal M_H}([t_1],\ldots,[t_n])\iff R(t_1,\ldots,t_n)\in H.$$

The earlier congruence proves that these values and truth assignments do not depend on representatives. Each finite tuple of classes has a tuple of representatives by finite induction, so the function interpretation is total; its value is unique, and defining its graph does not select representatives for the entire carrier. All graphs and relations are sets by Separation and Replacement. The seed gives $[c_*]$ in the carrier, so it is nonempty. Equality is literal equality of classes, not an additional relation. Thus this is a structure in the sense of [[def-set-structures-and-variable-assignments]]. Its satisfaction of $H$ is a separate truth-lemma conclusion.
