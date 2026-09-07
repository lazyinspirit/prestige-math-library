---
id: def-gap-csp
kind: definition
title: "Gap csp"
status: published
origin: pipeline
deps: [def-constraint-graph-and-labeling-value]
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
    - title: "Irit Dinur, The PCP theorem by gap amplification; §1.1 Definition1.1 and Theorem1.2 formulation, pp2–3."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Definition

Fix a finite nonempty alphabet and thresholds $0\le s<c\le1$. Using the explicit binary constraint encoding of [[def-constraint-graph-and-labeling-value]], $\operatorname{GapCSP}(c,s)$ is the disjoint yes/no pair
$$Y=\{G:\operatorname{val}(G)\ge c\},\qquad N=\{G:\operatorname{val}(G)\le s\}.$$
Inputs with $s<\operatorname{val}(G)<c$ are outside the promise. Malformed encodings are also outside it. For $0<\varepsilon\le1$, $\operatorname{GapCSP}(1,1-\varepsilon)$ distinguishes satisfiability from $\operatorname{UNSAT}(G)\ge\varepsilon$. This definition asserts no hardness theorem.
