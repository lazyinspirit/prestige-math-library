---
id: "fs-writing-e-two-double-arrow-h-is-a-complete-convergence-proof"
kind: "false-statement"
title: "Writing E2 implies H proves convergence"
deps: ["def-spectral-sequence-computation-record", "prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 5.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Writing $E_2^{p,q}\Longrightarrow H^{p+q}$ proves strong convergence and completely reconstructs the groups $H^n$.

## Facts & Assumptions

**Given:** A double arrow without verified filtration hypotheses.

[F1] A computation record distinguishes pages, stabilization, convergence and extension reconstruction ([[def-spectral-sequence-computation-record]]).

[F2] Filtered pages are cycle/boundary subquotients, starting with the associated graded ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F3] Even a finite collapsed filtration may retain an extension problem ([[prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem]]).

## Refutation

1.1 Put $C^0=\mathbb F_2$, $C^n=0$ otherwise and $d=0$. Set $F^pC=C$ for every integer $p$. This decreasing filtration is exhaustive but not separated. All its adjacent quotients are zero, and all page cycle/boundary quotients in F2 are zero: the denominator already contains the entire preceding filtration level. Thus $E_2=E_\infty=0$, while $H^0(C)=\mathbb F_2$. The induced filtration on $H^0$ is constantly $\mathbb F_2$ and is not separated; its quotient completion is zero. A double arrow cannot make this strongly convergent to the nonzero target with a finite normalized filtration. Indeed zero graded pieces and finite zero/full endpoints would force that target to be zero. [F1, F2, construct]

2.1 There is a separate reconstruction omission even when strong convergence is proved. The finite filtration $0\subset2\mathbb Z/4\subset\mathbb Z/4$ has two $\mathbb Z/2$ quotients, as does $0\subset(\mathbb Z/2)\oplus0\subset(\mathbb Z/2)^2$. Their targets differ because the first has an element of order four and the second has none. F3 realizes this phenomenon in a collapsed sequence. Accordingly the record in F1 requires actual stabilization and graded identifications, verified filtration conditions, and resolution or explicit retention of extensions. The first witness uses no choice; the two finite-group calculations do not use the optional AC splitting branch of F3. [F1, F3, step 1.1] ∎
