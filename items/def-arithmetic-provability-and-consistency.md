---
id: def-arithmetic-provability-and-consistency
kind: definition
title: "The standard certified provability predicate"
status: draft
origin: pipeline
deps: [thm-primitive-recursive-numeralwise-representability, lem-primitive-recursive-syntax-and-proof-checking]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Definition 4A.8 p144; Definition 4C.6 p152; Proposition 4C.13 p155"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Definition

For a fixed effective theory T, let $\operatorname{Prf}_T(p,a)$ be the chosen numeralwise arithmetic representation of certified proof checking, with proof code first. Use [[lem-primitive-recursive-syntax-and-proof-checking]] and the strengthened representation constructed in [[thm-primitive-recursive-numeralwise-representability]]. Retain also the finite PA proof of equivalence to its syntactic $\Sigma_1$ computation form. Thus “Sigma1” for this chosen predicate may mean PA-Sigma1; it does not assert Q equivalence.

Put $\operatorname{Prov}_T(a):=\exists p\operatorname{Prf}_T(p,a)$ and $\operatorname{Con}(T):=\neg\operatorname{Prov}_T(\ulcorner\bot\urcorner)$, where $\bot=\exists v_0\neg(v_0=v_0)$ is in the appropriate signature and corner brackets denote the numeral of a code. External consistency means that there is no actual finite T-refutation; the displayed Con is an arithmetic formula.

For theories extending Q, $0=1$ may replace the fixed contradiction: Q proves $0\ne S0$, so from $0=S0$ explosion gives $\bot$; conversely reflexivity refutes $\bot$ and explosion gives $0=S0$. Appending these fixed finite proof blocks gives primitive-recursive transformations between refutation certificates, verified in PA. We use the fixed $\bot$ throughout. Correctness only on standard numerals is insufficient to replace this predicate in a derivability or second-incompleteness theorem.
