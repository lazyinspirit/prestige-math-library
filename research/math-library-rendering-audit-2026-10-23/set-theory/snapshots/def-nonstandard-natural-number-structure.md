---
id: def-nonstandard-natural-number-structure
kind: definition
title: "Nonstandard models of the complete natural-number theory"
status: published
origin: pipeline
deps: [def-theories-models-and-semantic-consequence, thm-recursion, def-natural-numbers, thm-set-structure-satisfaction-recursion, lem-satisfaction-coincidence, def-term-denotation-in-a-set-structure]
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
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Example 6 and Theorem 3, printed p.15; definition adapted to the assigned language (0,S,<)."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $L_{\mathrm N}$ have a constant symbol $0$, a unary function symbol $S$ and a binary relation symbol $<$. The **standard natural-number structure** is $\mathcal N=(\omega,0,S,<)$, with $0=\varnothing$, $S(n)=n\cup\{n\}$ and $m<n$ meaning $m\in n$, as in [[def-natural-numbers]]. Its complete semantic theory is

$$\operatorname{Th}(\mathcal N)=\{\sigma\in\operatorname{Sent}_{L_{\mathrm N}}:\mathcal N\models\sigma\}.$$

This is a set by Separation on sentence codes using [[thm-set-structure-satisfaction-recursion]]; sentences are assignment independent by [[lem-satisfaction-coincidence]]. It is called complete because for every sentence $\sigma$ exactly one of $\sigma,\neg\sigma$ belongs, by the negation clause and ordinary classical reasoning. It is a theory in the sense of [[def-theories-models-and-semantic-consequence]]. No internally definable truth predicate in the arithmetic structure is asserted.

The **numeral** $\overline n$ is the closed term given by $\overline0=0$ and $\overline{n+1}=S(\overline n)$. This recursion takes place on the set of term codes and is justified by [[thm-recursion]]. In particular $\overline1=S(0)$ and $\overline2=S(S(0))$; the numerals denote $0,1,2$ respectively, and term evaluation by [[def-term-denotation-in-a-set-structure]] inductively gives $\overline n^{\mathcal N}=n$ for every $n$.

A **nonstandard model of this complete natural-number theory** is a nonempty set $L_{\mathrm N}$-structure $\mathcal M\models\operatorname{Th}(\mathcal N)$ that is not isomorphic to $\mathcal N$. This definition does not assert existence. The language is deliberately $(0,S,<)$ rather than the larger arithmetic language used in the cited source; the complete theory and the meaning of nonstandard are relative to this declared language.
