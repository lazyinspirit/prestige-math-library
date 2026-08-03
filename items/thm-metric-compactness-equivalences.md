---
id: thm-metric-compactness-equivalences
kind: theorem
title: "For a metric space, compact, countably compact, limit point compact, sequentially compact, and complete together with totally bounded are all equivalent, given countable choice and dependent choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-compact-implies-complete-and-totally-bounded, thm-compact-implies-the-other-compactness-forms, lem-sequentially-compact-implies-complete, thm-sequentially-compact-implies-totally-bounded, thm-complete-and-totally-bounded-implies-compact, def-metric-compactness, def-metric-compactness-variants, def-totally-bounded, def-complete-metric-space, def-countable-choice, def-dependent-choice, def-metric-space]
justified_by: []
aliases: [thm-compactness-trichotomy-metric]
landmark: true
short: "the compactness equivalences"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2-3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom
of Dependent Choice ([[def-dependent-choice]]).** Let $(X,d)$ be a metric space
([[def-metric-space]]). Then the following five conditions are equivalent.

- **(a)** $(X,d)$ is compact ([[def-metric-compactness]]).
- **(b)** $(X,d)$ is countably compact ([[def-metric-compactness-variants]]).
- **(c)** $(X,d)$ is limit point compact.
- **(d)** $(X,d)$ is sequentially compact.
- **(e)** $(X,d)$ is complete ([[def-complete-metric-space]]) and totally bounded
  ([[def-totally-bounded]]).

**The two hypotheses are not needed everywhere, and the statement should not be
read as if they were.** Of the implications assembled below, all but two are
theorems of ZF. Dependent choice is used only for "sequentially compact implies
totally bounded" ([[thm-sequentially-compact-implies-totally-bounded]]), and
countable choice only for "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]). Each is an upper bound on
the cost of the proof given in this library and not a claim of necessity; the
implication-by-implication account is
[[rem-compactness-choice-ledger-metric]].

## Facts & Assumptions

**Given:** A metric space $(X,d)$, the Axiom of Countable Choice, and the Axiom of Dependent Choice.

[L1] In ZF: a compact metric space is countably compact and limit point compact, and each of countable compactness and limit point compactness implies sequential compactness ([[thm-compact-implies-the-other-compactness-forms]]).

[L2] In ZF: a sequentially compact metric space is complete ([[lem-sequentially-compact-implies-complete]]).

[L3] Assuming dependent choice: a sequentially compact metric space is totally bounded ([[thm-sequentially-compact-implies-totally-bounded]]).

[L4] Assuming countable choice: a complete, totally bounded metric space is compact ([[thm-complete-and-totally-bounded-implies-compact]]).

[L5] In ZF: a compact metric space is complete and totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b), and (a) implies (c). [L1]

1.2 (b) implies (d), and (c) implies (d). [L1]

2.1 (d) implies (e): completeness of a sequentially compact space is a theorem of ZF, and total boundedness follows from dependent choice. [L2, L3, step 1.2]

3.1 (e) implies (a), by countable choice. [L4, step 2.1]

4.1 The cycle (a) $\Rightarrow$ (b) $\Rightarrow$ (d) $\Rightarrow$ (e) $\Rightarrow$ (a) is closed by steps 1.1, 1.2, 2.1 and 3.1, so the four conditions (a), (b), (d) and (e) are equivalent to one another. [step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Condition (c) joins them: (a) implies (c) by step 1.1 and (c) implies (d) by step 1.2, while (d) implies (a) through the cycle of step 4.1. [step 1.1, step 1.2, step 4.1]

6.1 Hence all five conditions are equivalent; and the implication (a) $\Rightarrow$ (e), which the cycle obtains only by going round through (b) and (d), also holds directly and choice-freely. [L5, step 4.1, step 5.1] ∎

## Remarks

**Read the equivalence with the ledger beside it.** The theorem as stated carries two choice hypotheses, and a reader working in ZF alone still keeps a great deal: by [[thm-compact-implies-the-other-compactness-forms]] and [[thm-compact-implies-complete-and-totally-bounded]], compactness implies all four of the other conditions with no choice at all, and by [[lem-sequentially-compact-implies-complete]] sequential compactness implies completeness. What fails without choice is the return journey, from the weaker conditions back to compactness.

**The direct route from (a) to (e) is worth keeping.** Step 6.1 records that [[thm-compact-implies-complete-and-totally-bounded]] proves (a) $\Rightarrow$ (e) in ZF, whereas reading it off the cycle would route it through (b) and (d) and, at the last leg, through dependent choice. A cycle of implications transmits the weakest hypothesis around it; the individual arrows do not, and it is the individual arrows that the ledger records.

**Nothing here is claimed for topological spaces.** All five conditions make sense more generally, and the equivalences above are proved for metric spaces only, every argument using the metric.
