---
id: "fs-collapse-of-the-uct-spectral-sequence-gives-a-natural-splitting"
kind: "false-statement"
title: "UCT collapse gives a natural splitting"
deps: ["prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "def-axiom-of-choice"]
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
    - title: "Weibel, Sections 5.6-5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Collapse of the integer UCT spectral sequence supplies a splitting of its short exact sequence natural in the chain complex.

## Facts & Assumptions

**Given:** Work in the free integer UCT setting under AC.

[F1] Two-column collapse gives the recorded extension; under AC the cited PID arguments can supply splittings, but they need not be natural ([[prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem]]).

[F2] The UCT quotient is evaluation on homology ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

## Refutation

1.1 Take $C_1=\mathbb Za\oplus\mathbb Zb$, $C_0=\mathbb Zc$, $da=2c,db=0$, and $M=\mathbb Z/2$. Then $H_0C=\mathbb Z/2$, $H_1C=\mathbb Zb$, and the Hom cochain differential is $m\mapsto(2m,0)=0$. Hence $H^1\operatorname{Hom}(C,M)=M^2$. F2 makes its quotient onto $\operatorname{Hom}(H_1C,M)=M$ the map $(x,y)\mapsto y$. Its kernel is $M\oplus0$, the Ext term of F1. The map $y\mapsto(0,y)$ is a section, so existence is not the issue. [F1, F2, construct]

2.1 The chain automorphism $a\mapsto a+b$, $b\mapsto b$, $c\mapsto c$ fixes $H_0C,H_1C$ and therefore both end terms. On Hom cohomology it acts by $(x,y)\mapsto(x+y,y)$. Every section must lift $1\in M$ to $(x,1)$, which this automorphism moves. Naturality would require that lift to be fixed, a contradiction. Thus even an existing splitting of a collapsed two-column UCT need not be natural. The general UCT invocation inherits AC for PID free-submodule arguments; this particular finite cochain and shear calculation uses no choice. [F1, F2, step 1.1] ∎
