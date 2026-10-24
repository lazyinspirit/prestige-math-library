---
id: ex-condensation-of-singularities
kind: example
title: "Condensation of singularities"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-banach-steinhaus-dichotomy]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Teschl, Topics in Real and Functional Analysis, Theorem 4.3", url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"}]}
---
## Example
Assume DC. Let $X$ be Banach, let $Y$ be normed, and let $\mathcal F\subseteq\mathcal B(X,Y)$ be not uniformly bounded. Then singular vectors, those $x$ with $\sup_{T\in\mathcal F}\|Tx\|=\infty$, form a dense $G_\delta$ set.
## Facts & Assumptions
**Given:** DC, $X,Y,\mathcal F$ as displayed, and failure of uniform boundedness.
## Verification
**Proof technique:** direct.

1.1 The second alternative of [[thm-banach-steinhaus-dichotomy]] applies directly. [given]

2.1 Therefore every nonempty open ball contains a singular vector, which is the condensation assertion. [step 1.1] ∎
