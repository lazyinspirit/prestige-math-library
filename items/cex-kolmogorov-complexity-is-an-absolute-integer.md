---
id: cex-kolmogorov-complexity-is-an-absolute-integer
kind: counterexample
title: "Changing an optimal machine changes finite-string complexity"
status: published
origin: session
deps: [fs-kolmogorov-complexity-is-an-absolute-integer]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §3"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement refuted
Optimal machines give identical numerical complexities.
## Counterexample
**Given:** an optimal machine $U$ and a finite word $z$ with $C_U(z)>1$.

1.1 Define $V(0p)=U(p)$ and $V(1)=z$. The simulation shows $V$ remains optimal. [given]

2.1 Then $C_V(z)=1<C_U(z)$, contradicting identical values and instantiating [[fs-kolmogorov-complexity-is-an-absolute-integer]]. [step 1.1, given] ∎
