---
id: fs-kolmogorov-complexity-is-an-absolute-integer
kind: false-statement
title: "False: Kolmogorov complexity is an absolute integer"
status: published
origin: session
deps: [thm-invariance-theorem-for-plain-complexity]
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
## Statement
The Kolmogorov complexity of a finite string is an absolute integer independent of the optimal machine.
## Refutation
**Given:** an optimal machine $U$.

1.1 Choose a finite word $z$ with $C_U(z)>1$; such a word exists because there are infinitely many finite words but only three programs of length at most $1$. Define $V(0p)=U(p)$ and $V(1)=z$, undefined otherwise. Then $V$ is optimal because it simulates $U$ with one extra bit. [given]

2.1 But $C_V(z)=1<C_U(z)$. The invariance theorem [[thm-invariance-theorem-for-plain-complexity]] asserts only additive-constant agreement, so the absolute claim is false. [step 1.1, given] ∎
