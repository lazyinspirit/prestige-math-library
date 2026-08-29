---
id: fs-schwarz-lemma-holds-without-a-fixed-point-at-zero
kind: false-statement
title: "FALSE: Schwarz's lemma remains true without the hypothesis $f(0)=0$"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-blaschke-factor-is-a-disc-automorphism, thm-unit-disc-schwarz-lemma-with-rigidity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Every holomorphic self-map of the unit disc satisfies the conclusions of
Schwarz's lemma even without the hypothesis $f(0)=0$.

## Facts & Assumptions

**Given:** The Blaschke factor $f(z)=\varphi_{1/2}(z)$.

[F1] Every Blaschke factor is an automorphism of the unit disc, hence a
holomorphic self-map of $\mathbb D$
([[thm-blaschke-factor-is-a-disc-automorphism]]).

## Refutation

1.1 By [F1], $f(z)=\varphi_{1/2}(z)$ is a holomorphic self-map of $\mathbb D$. [F1, given]

2.1 But $f(0)=1/2$, so $|f(0)|=1/2>0=|0|$; this already violates the usual Schwarz-lemma bound $|f(z)|\le|z|$ at $z=0$. Hence the fixed-point hypothesis at $0$ cannot be removed. [step 1.1, algebra] ∎
