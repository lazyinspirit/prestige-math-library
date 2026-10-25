---
id: thm-elementary-initial-segments-form-a-club
kind: theorem
title: "Elementary initial segments form a club"
status: published
origin: pipeline
deps: ["lem-skolem-witness-closure-on-a-cardinal", "lem-closure-points-on-regular-cardinals", "thm-cofinality-basics"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Kamensky, Theorem 1.4.7 with complete proof, p.7"
      url: https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf
---

## Statement

In ZFC, if $\kappa$ is regular uncountable and $M$ has universe $\kappa$ in a finitary language of size less than $\kappa$, then

$$E_M=\{0<\alpha<\kappa:M\restriction\alpha\text{ is an elementary substructure of }M\}$$

is club in $\kappa$.

## Facts & Assumptions

[F1] [[lem-skolem-witness-closure-on-a-cardinal]]: Fewer than kappa finite-arity functions suffice for elementary restrictions; the existential witness criterion is proved there.

[F2] [[lem-closure-points-on-regular-cardinals]]: Every self-map of kappa has club many closure points.

[F3] [[thm-cofinality-basics]]: Regularity bounds every fewer-than-kappa collection of ordinals below kappa.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Use the witness family $\mathcal H$. For $\beta<\kappa$, let $g(\beta)=\sup(\{h(\vec a)+1:h\in\mathcal H,\ \vec a\in(\beta+1)^{\operatorname{arity}(h)}\}\cup\{\beta+1\})$. There are fewer than kappa values: the finite-string cardinal count in the witness lemma bounds all tuples, and multiplying by $|\mathcal H|<\kappa$ still gives fewer than kappa. Regularity therefore gives $g(\beta)<\kappa$. [F1, F3]

2.1 The nonzero closure points alpha of g form an unbounded set. Since $g(\beta)>\beta$, such alpha are limits. Every finite tuple below alpha is contained in some $\beta+1<\alpha$; hence every h value on it is below alpha. This includes the empty tuple for constants. The witness lemma gives $\alpha\in E_M$. Thus $E_M$ is unbounded. [F1, F2, step 1.1]

3.1 If delta is a nonzero limit point of $E_M$, every finite tuple below delta lies below some $\alpha\in E_M\cap\delta$. Language-function closure at alpha makes the restriction to delta a substructure. Any existential formula true in M with such a tuple has a witness below alpha by elementarity there, hence below delta. The witness criterion proves elementarity at delta. Thus $E_M$ itself is closed, completing the club claim. [F1, step 2.1] ∎
