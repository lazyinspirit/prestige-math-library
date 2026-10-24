---
id: def-l-of-the-reals-in-the-solovay-collapse-extension
kind: definition
title: L(R) in the Solovay collapse extension
status: published
origin: pipeline
deps:
  - def-solovay-hereditarily-ordinal-sequence-definable-model
  - def-constructible-hierarchy-and-constructible-rank
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Unger, A Brief Account of Solovay's Model, pp. 1–2"
      url: https://www.math.toronto.edu/sunger/solovay-model.pdf
---

## Definition

Let $R=\mathbb R^{V[G]}$. Define the relativized hierarchy

$$L_0(R)=\operatorname{tc}(\{R\}),\qquad L_{\alpha+1}(R)=\operatorname{Def}(L_\alpha(R),\in,R\cap L_\alpha(R)),$$

with unions at limits, and put $L(R)=\bigcup_{\alpha\in\mathrm{Ord}}L_\alpha(R)$.
Equivalently it is the least transitive inner model containing every ordinal
and every ambient real. It therefore has exactly the ordinals and reals of
$V[G]$.

The hierarchy is definable from the class $R$, and each real parameter belongs
to $S$. Induction on $\alpha$ shows that every hierarchy element and every
member of its transitive closure is definable from finitely many ordinals and
members of $S$. Hence $L(R)\subseteq HOD(S)=M$. The reverse inclusion and the
equalities with $HOD(R)$ are not asserted.
