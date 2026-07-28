---
id: fs-countably-compact-implies-compact
kind: false-statement
title: "FALSE: every countably compact space is compact"
status: draft
origin: session
deps: [thm-ordinal-spaces-and-compactness, thm-the-long-line-is-countably-compact-and-not-compact, def-compact-space, def-compactness-variants, def-countable-choice, lem-the-order-topology-on-an-ordinal, def-first-uncountable-ordinal, def-the-long-line]
justified_by: []
aliases: []
landmark: false
short: "FALSE: countably compact implies compact"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
    - title: "Long line (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Long_line_(topology)"
pipeline_run: null
---

## Statement

**False claim:** every countably compact topological space
([[def-compactness-variants]]) is compact ([[def-compact-space]]).

**Where the claim comes from, and what is actually true.** Countable compactness
tests only the at most countable open covers, and the claim above asserts that
testing those is enough. It is enough when the space is also Lindel&ouml;f, and
the claim above drops that hypothesis.

**The refutation assumes the Axiom of Countable Choice**
([[def-countable-choice]]), which is what makes each witness countably compact.
Two witnesses are available and both are refutations on their own: the first
uncountable ordinal $\omega_1$ with its order topology
([[def-first-uncountable-ordinal]], [[lem-the-order-topology-on-an-ordinal]]), and
the closed long ray ([[def-the-long-line]]).

## Facts & Assumptions

**Given:** The first uncountable ordinal $\omega_1$ with its order topology, the closed long ray $R$ with its order topology, and the Axiom of Countable Choice.

[A1] The false claim: every countably compact topological space is compact.

[A2] The Axiom of Countable Choice ([[def-countable-choice]]).

[L1] Assuming countable choice, $\omega_1$ with its order topology is countably compact and is not compact ([[thm-ordinal-spaces-and-compactness]], claim 3).

[L2] Assuming countable choice, the closed long ray $R$ is countably compact, and it is not compact and not Lindel&ouml;f ([[thm-the-long-line-is-countably-compact-and-not-compact]], claims 2, 3 and 4; [[def-the-long-line]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim [A1] holds, so that every countably compact space is compact. [A1, assume-contra]

1.2 Assuming [A2], the space $\omega_1$ with its order topology is countably compact by [L1], and the closed long ray $R$ is countably compact by [L2]. [A2, L1, L2]

2.1 By [A1] and step 1.2 both $\omega_1$ and $R$ would be compact. [A1, step 1.2]

2.2 Neither is: $\omega_1$ is not compact by [L1], and $R$ is not compact by [L2]. [L1, L2, step 1.2]

3.1 Steps 2.1 and 2.2 contradict each other, so the claim [A1] is false, and each of the two spaces refutes it on its own. [A1, step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

**Why the missing hypothesis is Lindel&ouml;fness and not something weaker.** Countable compactness plus Lindel&ouml;fness does give compactness ([[thm-compactness-variants-hierarchy]], claim 1(b)), so a countably compact non-compact space must fail to be Lindel&ouml;f. The long ray is checked to fail it directly ([[thm-the-long-line-is-countably-compact-and-not-compact]], claim 4), and $\omega_1$ fails it for the same reason: the cover by initial segments has no at most countable subcover, an at most countable set of countable ordinals being bounded.

**The two witnesses are not the same space and neither is redundant.** The ordinal $\omega_1$ is also sequentially compact, so it separates compactness from sequential compactness as well ([[fs-sequentially-compact-implies-compact]]); the long ray is a linear continuum and is connected, so it also shows that connectedness contributes nothing to compactness.
