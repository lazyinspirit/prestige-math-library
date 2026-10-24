---
id: ex-nonstandard-element-above-every-numeral
kind: example
title: "Compactness produces a genuinely nonstandard element"
status: published
origin: pipeline
deps: [thm-nonstandard-natural-number-model-exists]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Theorem 3 p15; explicit finite-fragment calculation in the local (0,S,<) language."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
proof_strategy: direct
---

## Example

In the constructed countable model of $\operatorname{Th}(\mathcal N)$, the new constant exceeds every numeral. Each finite list of these inequalities is realized in the standard structure, but their entire list has no standard realization.

## Facts & Assumptions

**Given:** The language $(0,S,<)$, its standard numerals and the model supplied below.

[F1] There is an at most countable model of the complete natural-number theory with an element greater than every numeral, obtained from finitely satisfiable inequalities. ([[thm-nonstandard-natural-number-model-exists]])

## Verification

1.1 For the fragment $\overline0<c,\overline1<c,\ldots,\overline m<c$ use the standard expansion with $c=m+1$. Its inequalities evaluate to $0<m+1,1<m+1,\ldots,m<m+1$, all true. For example the first three are $0<3$, $1<3$, $2<3$ with $c=3$. With no inequalities use $c=0$. Any accompanying finitely many sentences of $\operatorname{Th}(\mathcal N)$ remain true because the old structure has not changed. [F1]

2.1 A putative standard interpretation $c=k$ fails the inequality $\overline k<c$, since its evaluation is $k<k$, which is false. Yet F1 supplies a new countable model and an element $b$ satisfying every inequality. Its numeral $\overline k$ still denotes the $k$-fold successor of zero; $b$ equals none of these values, because equality would turn the corresponding true inequality into $b<b$, forbidden by the theory's irreflexivity sentence. [F1, step 1.1] ∎
