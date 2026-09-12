---
id: "def-skolem-hulls-in-constructible-levels"
kind: "definition"
title: "Canonical Skolem hulls in constructible levels"
deps: ["def-constructible-hierarchy-and-constructible-rank", "lem-finite-tuple-satisfaction-is-absolute", "thm-canonical-definable-global-well-order-of-l", "thm-set-structure-satisfaction-recursion"]
justified_by: ["lem-canonical-small-skolem-hulls-in-l"]
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
    - title: "Lietz, Set Theory, section 7.2, Lemma 7.11 and Theorem 7.13 (hulls), Proposition 7.14 (counting), printed pp.57–59; local choice-free coding argument"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
status: published
origin: "pipeline"
---

## Definition

Work in ZF. Fix a nonzero limit ordinal $\alpha$, put $S=L_\alpha$, and let $A\subseteq S$. The levels are those of [[def-constructible-hierarchy-and-constructible-rank]]. Fix an enumeration $(\varphi_i(y,v_0,\ldots,v_{k_i-1}))_{i<\omega}$ of all membership formulas with a distinguished witness variable, allowing unused parameter variables and $k_i=0$. Satisfaction refers to the set structure $(S,\in)$, as constructed in [[thm-set-structure-satisfaction-recursion]]; it is never truth in the class $L$.

Let $<_L$ be the fixed order in [[thm-canonical-definable-global-well-order-of-l]]. For $a\in S^{k_i}$ let $f_i(a)$ be the $<_L$-least $b\in S$ satisfying $\varphi_i(b,a)$ if a witness exists, and the $<_L$-least member of $S$ otherwise. This default is available because $\alpha\ne0$ implies $\varnothing\in S$. Define

$$H_0=A,\qquad H_{n+1}=H_n\cup\{f_i(a):i<\omega,\ a\in H_n^{k_i}\},\qquad \operatorname{Hull}^{L_\alpha}(A)=\bigcup_{n<\omega}H_n.$$

In particular, $H_n^0$ contains the empty tuple even when $H_n$ is empty: parameter-free witnesses enter at stage one. The enumeration, default and least-witness rule are fixed; no family of arbitrary choices is implicit. [[lem-canonical-small-skolem-hulls-in-l]] supplies set existence, elementarity and size. The finite-tuple convention agrees with [[lem-finite-tuple-satisfaction-is-absolute]] when its transitive-ZF-model hypothesis holds; that hypothesis is not being asserted of $S$.
