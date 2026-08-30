---
id: cex-rejection-is-divergence
kind: counterexample
title: "Immediate rejection is a halting computation, not a divergence"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-rejection-is-divergence, def-initial-accepting-and-rejecting-configurations]
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

## Statement refuted

The statement "rejection is divergence" is false.

## Facts & Assumptions

**Given:** The machine and input from [[fs-rejection-is-divergence]]: states
$q_0,q_{\mathrm{acc}},q_{\mathrm{rej}}$, tape rule
$$ \delta(q_0,1)=(q_{\mathrm{rej}},1,R), $$
and input word $w=1$.

[A1] The statement refuted is: rejecting an input means diverging on that
input.

[L1] A configuration is rejecting exactly when its state is
$q_{\mathrm{rej}}$, by [[def-initial-accepting-and-rejecting-configurations]].

## Counterexample

**Proof technique:** direct.

1.1 Starting from the initial configuration on input $1$, one legal step sends the machine to a configuration with state $q_{\mathrm{rej}}$. [given]

2.1 By [L1], that next configuration is rejecting, so the computation halts after one step. Hence the input is rejected and does not diverge. [L1, step 1.1]

3.1 Therefore this machine on input $1$ is a counterexample to [A1]. [A1, step 2.1] ∎
