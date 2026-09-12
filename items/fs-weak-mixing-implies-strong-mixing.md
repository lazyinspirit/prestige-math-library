---
id: "fs-weak-mixing-implies-strong-mixing"
kind: "false-statement"
title: "Weak mixing implies strong mixing"
deps: ["def-chacon-three-cut-one-spacer-towers", "lem-chacon-tower-height-correlations-obstruct-mixing", "thm-chacon-transformation-is-weakly-mixing-but-not-mixing", "def-strong-and-weak-mixing", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Katok–Thouvenot Theorem 5.12 p.697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

**False claim:** Every weakly mixing probability-preserving transformation is strongly mixing.

## Facts & Assumptions

[F1] Under AC, normalized Chacon is an invertible completed Lebesgue probability system that is weakly mixing but not strongly mixing [[thm-chacon-transformation-is-weakly-mixing-but-not-mixing]].

[F2] Weak mixing uses absolute-Cesaro correlations, whereas strong mixing requires pointwise convergence in time for each fixed measurable pair [[def-strong-and-weak-mixing]].

[F3] Assume AC [[def-axiom-of-choice]].

[F4] The fixed Chacon set $A=[0,2/9)$ satisfies $d_{h_r}(A,A)\ge2/81$ for every $r\ge1$ [[lem-chacon-tower-height-correlations-obstruct-mixing]], and $h_r=(3^{r+1}-1)/2\to\infty$ [[def-chacon-three-cut-one-spacer-towers]].

## Refutation

**Given:** AC.

1.1 Use the single probability system of F1. Its weak-mixing conclusion is precisely the premise in F2. [F1, F2, F3]

2.1 In the system of step 1.1 the fixed pair $A=B=[0,2/9)$ satisfies $d_{h_r}(A,A)\ge2/81>0$ for all $r\ge1$ by F4. Since $h_r\to\infty$, these correlations do not converge to zero. Thus the conclusion of the false claim fails while its hypothesis holds. The example assumes AC exactly as F1 does; it does not infer pointwise convergence from an average. [F1, F2, F3, F4, step 1.1] ∎
