---
id: def-effective-theory-and-certified-godel-numbering
kind: definition
title: "Effective theories and certified numerical proof codes"
status: draft
origin: pipeline
deps: [def-bounded-arithmetic-formula, def-set-coded-formal-derivation]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
justified_by: [lem-certified-syntax-coding-operations-are-primitive-recursive]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — §4A.2–4A.9 pp140–144; c.e. certificate variant is local"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Definition

Fix an effectively presented countable finite-arity signature whose symbol-kind and arity tests are primitive recursive in the sense of [[def-bounded-arithmetic-formula]]. Fix a primitive-recursive certificate predicate $E(a,w)$; the nonlogical axioms are the sentences $a$ for which $\exists w\,E(a,w)$. A certified proof is a derivation of [[def-set-coded-formal-derivation]] together with an $E$-certificate at each nonlogical axiom line. A c.e. enumeration can be presented this way by including a finite computation history; no decision procedure for axiom membership is assumed.

For a binary word $w$, put $c(w)=1^{|w|}0w$. Let $\operatorname{bin}(0)=0$, and otherwise use the canonical binary numeral. The code of $(a_0,\ldots,a_{k-1})$ is the natural number whose binary word is

$$1\,1^k0\,c(\operatorname{bin}(a_0))\cdots c(\operatorname{bin}(a_{k-1})).$$

The empty-list code is $2$. Tokens, annotations and lists of lines are encoded by iterating this list convention. Invalid codes have validity false, length zero and all coordinates zero. An out-of-range coordinate is zero. Append and concatenation return the empty code $2$ if an input list is invalid.

The initial sentinel prevents leading-zero ambiguity. The following well-definedness lemma proves unique decoding and primitive-recursive operations; these are not consequences of the bare phrase “effective coding.”
