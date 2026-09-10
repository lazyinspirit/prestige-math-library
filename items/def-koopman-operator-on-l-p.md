---
id: def-koopman-operator-on-l-p
kind: definition
title: The Koopman operator
deps: [def-measure-preserving-transformation-and-system, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W §2.4 pp.28–29; Sarig Proposition 1.3
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
justified_by: [thm-koopman-operator-is-a-linear-isometry-on-l-p]
---

## Definition

For a system in [[def-measure-preserving-transformation-and-system]] and $1\le p\le\infty$, the **Koopman operator** is $U_T:L^p(\mu)\to L^p(\mu)$, $U_T[f]=[f\circ T]$. Scalars can be real or complex, using [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-complex-lp-and-euclidean-test-function-conventions]]. Membership and representative independence, and hence well-definedness, are proved in [[thm-koopman-operator-is-a-linear-isometry-on-l-p]].
