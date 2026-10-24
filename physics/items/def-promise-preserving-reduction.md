---
id: def-promise-preserving-reduction
kind: definition
title: "Promise preserving reduction"
status: published
origin: pipeline
deps: [def-promise-problem]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, On Promise Problems; §1.2 Definition1.3 and oracle reduction paragraph, pp4–5."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf"
---

## Definition

For promise problems $(Y,N)$ and $(Y',N')$ in [[def-promise-problem]], a polynomial-time many-one promise reduction is a total polynomial-time function $f$ satisfying $f(Y)\subseteq Y'$ and $f(N)\subseteq N'$. There is no condition on $f$ outside $Y\cup N$.

A polynomial-time oracle promise reduction is a polynomially clocked deterministic oracle machine $M$ which solves $(Y,N)$ for **every** total language $B$ satisfying $Y'\subseteq B$ and $B\cap N'=\varnothing$. This uses binary, consistent membership completions: an off-promise word may have either bit, but repeated queries to that word receive the same bit. The clock is uniform over all completions.
