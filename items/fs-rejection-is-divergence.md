---
id: fs-rejection-is-divergence
kind: false-statement
title: "FALSE: rejection is divergence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-halting-computation-and-divergence, def-initial-accepting-and-rejecting-configurations]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Statement

**False claim:** whenever a deterministic Turing machine rejects an input, it
diverges on that input.

## Facts & Assumptions

**Given:** The machine with states
$q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}$, input alphabet $\{1\}$, tape alphabet
$\{1,\sqcup\}$, and transition rule
$$ \delta(q_0,1)=(q_{\mathrm{rej}},1,R). $$
Take input word $w=1$.

[A1] The statement refuted is: rejection on an input means divergence on that
input.

[L1] A halting computation history may end in a rejecting configuration, and
divergence means that no halting computation history exists, by
[[def-halting-computation-and-divergence]].

[L2] A configuration is rejecting exactly when its state is the designated
reject state $q_{\mathrm{rej}}$, by
[[def-initial-accepting-and-rejecting-configurations]].

## Refutation

**Proof technique:** direct.

1.1 On input $w=1$, the initial configuration scans the symbol `1` in state $q_0$. The displayed transition sends that configuration in one step to a configuration whose state is $q_{\mathrm{rej}}$. [given]

2.1 By [L2], the configuration reached in step 1.1 is rejecting. So the two-term history consisting of the initial configuration and that next configuration is a halting computation history. [L2, step 1.1]

3.1 By [L1], an input with a halting computation history does not diverge. Thus this machine rejects $w$ without diverging, contradicting [A1]. [A1, L1, step 2.1] ∎
