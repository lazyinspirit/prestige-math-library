---
id: fs-universality-decides-halting
kind: false-statement
title: "FALSE: universality decides halting"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-universal-turing-machine, def-halting-computation-and-divergence, thm-existence-of-a-universal-turing-machine]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
---

## Statement

**False claim:** every universal Turing machine decides, for each coded
machine $M$ and each input word $w$ for $M$, whether $M$ halts on input $w$.

## Facts & Assumptions

**Given:** The false claim above.

[A1] Every universal Turing machine decides, for each coded machine $M$ and each input word $w$ for $M$, whether $M$ halts on input $w$.

[L1] A universal machine must reproduce both the halting outputs and the divergence of every coded machine on every coded input, by [[def-universal-turing-machine]].

[L2] A machine diverges on an input exactly when there is no halting computation history on that input, by [[def-halting-computation-and-divergence]].

[L3] Universal Turing machines for the chosen coding exist, by [[thm-existence-of-a-universal-turing-machine]].

## Refutation

**Proof technique:** direct.

1.1 Let $M_{\mathrm{loop}}=(3,0,1,\tau_{\mathrm{loop}})$, where the unique transition is $\tau_{\mathrm{loop}}(0,0)=(0,0,1)$. Its input alphabet is empty, so its unique input word is $\varepsilon$. On that input the machine keeps state $0$ forever, moves right at every step, and never reaches a halting state. Hence it has no halting computation history on $\varepsilon$, so by [L2] it diverges on $\varepsilon$. [L2, given]

2.1 By [L3], there exists at least one universal machine $U$. By [L1], the run of $U$ on the coded input $\langle\ulcorner M_{\mathrm{loop}}\urcorner,\widehat\varepsilon\rangle$ must reproduce the divergence from step 1.1. Hence $U$ does not halt on that instance. [L1, L3, step 1.1]

3.1 A machine that fails to halt on some instance does not decide a yes-or-no halting problem on all instances. Step 2.1 therefore contradicts the false claim [A1]. [A1, step 2.1] ∎
