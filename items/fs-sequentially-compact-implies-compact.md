---
id: fs-sequentially-compact-implies-compact
kind: false-statement
title: "FALSE: every sequentially compact space is compact"
status: draft
origin: session
deps: [thm-ordinal-spaces-and-compactness, def-compact-space, def-compactness-variants, lem-the-order-topology-on-an-ordinal, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, def-countable-choice, def-limit-ordinal]
justified_by: []
aliases: []
landmark: false
short: "FALSE: sequentially compact implies compact"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Statement

**False claim:** every sequentially compact topological space
([[def-compactness-variants]]) is compact ([[def-compact-space]]).

**Where the claim comes from, and what is actually true.** For a metric space the
two conditions are equivalent, and that equivalence is proved elsewhere in this
library at a stated choice cost; the claim above is that equivalence transplanted
to an arbitrary topological space, where it fails. What does hold in general is
only that sequential compactness implies countable compactness, and that at the
cost of countable choice.

**The refutation assumes the Axiom of Countable Choice**
([[def-countable-choice]]), because that is what makes the witness sequentially
compact; without it the witness is not known to have the property the claim would
have to preserve. The witness is $\omega_1$ with its order topology
([[def-first-uncountable-ordinal]], [[lem-the-order-topology-on-an-ordinal]]).

## Facts & Assumptions

**Given:** The first uncountable ordinal $\omega_1$ with its order topology, and the Axiom of Countable Choice.

[A1] The false claim: every sequentially compact topological space is compact.

[A2] The Axiom of Countable Choice ([[def-countable-choice]]).

[L1] Assuming countable choice, $\omega_1$ with its order topology is sequentially compact, and it is not compact ([[thm-ordinal-spaces-and-compactness]], claim 3; [[def-compactness-variants]], [[def-compact-space]]).

[L2] $\omega_1$ is a limit ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]], claim (e); [[def-limit-ordinal]]), and no limit ordinal is compact in its order topology ([[thm-ordinal-spaces-and-compactness]], claim 2).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim [A1] holds, so that every sequentially compact space is compact. [A1, assume-contra]

1.2 Assuming [A2], the space $\omega_1$ with its order topology is sequentially compact. [A2, L1]

2.1 By [A1] and step 1.2 the space $\omega_1$ would be compact. [A1, step 1.2]

2.2 But $\omega_1$ is a limit ordinal, so it is not compact by [L2]; equivalently, the cover of $\omega_1$ by the initial segments $[0,\beta]$ with $\beta \in \omega_1$ has no finite subcover, the union of finitely many of them being a single $[0,\beta]$ and $\beta^{+}$ lying in $\omega_1$ outside it. [L1, L2, step 1.2]

3.1 Steps 2.1 and 2.2 contradict each other, so the claim [A1] is false. [A1, step 2.1, step 2.2, discharge-contradiction] ∎

## Remarks

**Why the two conditions can diverge at all.** Sequential compactness tests countably many points at a time and compactness tests covers of any size. In $\omega_1$ a sequence is a countable object and is therefore bounded below $\omega_1$, while the cover by initial segments is uncountable and climbs the whole ordinal; the two conditions are simply looking at different cardinalities. For a metric space the topology is determined by countably many balls at each point and the divergence disappears.

**The implication that does survive** is sequential compactness to countable compactness, assuming countable choice ([[thm-compactness-variants-hierarchy]], claim 2).

**The converse claim also fails**, and its witness is a different space entirely: a compact space that is not sequentially compact is exhibited in [[fs-compact-implies-sequentially-compact]]. Neither of the two implications holds in general, so sequential compactness and compactness are incomparable conditions on topological spaces.
