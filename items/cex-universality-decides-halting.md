---
id: cex-universality-decides-halting
kind: counterexample
title: "A universal machine diverges on a looping machine/input pair"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-universality-decides-halting, thm-existence-of-a-universal-turing-machine]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
---

## Statement refuted

The false statement [[fs-universality-decides-halting]] claims that every
universal Turing machine decides whether the simulated machine halts.

Let $M_{\mathrm{loop}}=(3,0,1,\tau_{\mathrm{loop}})$ be the coded machine with
its unique transition given by $\tau_{\mathrm{loop}}(0,0)=(0,0,1)$. Since its
input alphabet is empty, its unique input word is $\varepsilon$. Fix any
universal machine $U$ for the chosen coding, whose existence is guaranteed by
[[thm-existence-of-a-universal-turing-machine]], and take the coded input
$\langle\ulcorner M_{\mathrm{loop}}\urcorner,\widehat\varepsilon\rangle$.

## Facts & Assumptions

**Given:** The looping machine $M_{\mathrm{loop}}$, a universal machine $U$, and the coded input $\langle\ulcorner M_{\mathrm{loop}}\urcorner,\widehat\varepsilon\rangle$.

[L1] The false statement being refuted says that universality itself yields a halting decider, by [[fs-universality-decides-halting]].

[L2] There exists a universal Turing machine for the chosen coding, by [[thm-existence-of-a-universal-turing-machine]].

## Counterexample

**Proof technique:** direct.

1.1 The machine $M_{\mathrm{loop}}$ has an infinite run on its unique input $\varepsilon$, because its only action is to move right forever and it never enters a halting state. [given]

2.1 By the universality clause recalled in the counterexample statement, the universal machine $U$ must reproduce that same infinite run on the coded input $\langle\ulcorner M_{\mathrm{loop}}\urcorner,\widehat\varepsilon\rangle$. So $U$ diverges on this input rather than halting with a yes-or-no answer. [given, step 1.1]

3.1 Therefore the coded input $\langle\ulcorner M_{\mathrm{loop}}\urcorner,\widehat\varepsilon\rangle$ is a counterexample to the claim in [L1]. The existence assertion [L2] shows that this is a genuine instance in the chosen coding scheme. [L1, L2, step 2.1] ∎
