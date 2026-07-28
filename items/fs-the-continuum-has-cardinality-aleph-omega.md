---
id: fs-the-continuum-has-cardinality-aleph-omega
kind: false-statement
title: "FALSE: $2^{\\aleph_0} = \\aleph_\\omega$"
status: draft
origin: session
deps: [cor-cofinality-of-a-cardinal-power, thm-regularity-of-the-alephs, def-cofinality, def-aleph-and-beth-hierarchies, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor, def-axiom-of-choice, def-cardinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: false
short: "$\\operatorname{cf}(2^{\\aleph_0}) > \\aleph_0 = \\operatorname{cf}(\\aleph_\\omega)$"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
    - title: "Easton's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Easton%27s_theorem"
pipeline_run: null
---

## Statement

**FALSE.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). The continuum
has cardinality $\aleph_\omega$:

$$2^{\aleph_0} = \aleph_\omega$$

([[def-cardinal-arithmetic]], [[def-aleph-and-beth-hierarchies]]).

The claim is plausible because ZFC really does leave the value of $2^{\aleph_0}$
open over a wide range of alephs, and $\aleph_\omega$ is a natural-looking
candidate: it is above $\aleph_0$, as [[thm-cardinal-power-set-and-cantor]]
requires, and it is not a successor, so no obvious counting argument seems to
touch it. Nevertheless ZFC refutes it outright, and the refutation is short.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] $\operatorname{cf}(2^{\kappa}) > \kappa$ for every infinite cardinal $\kappa$; in particular $\operatorname{cf}(2^{\aleph_0}) > \aleph_0$ ([[cor-cofinality-of-a-cardinal-power]], [[def-cofinality]]).

[L2] $\operatorname{cf}(\aleph_\omega) = \aleph_0$, a theorem of ZF (clause (c) of [[thm-regularity-of-the-alephs]]).

[L3] $2^{\aleph_0}$ is a cardinal strictly above $\aleph_0$ ([[thm-cardinal-power-set-and-cantor]], [[def-cardinal]]).

[L4] Ordinals satisfy trichotomy and $\alpha \notin \alpha$, so $\alpha < \beta$ and $\alpha = \beta$ cannot both hold ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $2^{\aleph_0} = \aleph_\omega$. [assume-contra]

1.2 By [L1] and [L3], $\operatorname{cf}(2^{\aleph_0}) > \aleph_0$. [L1, L3]

1.3 By [L2], $\operatorname{cf}(\aleph_\omega) = \aleph_0$. [L2]

2.1 Equal ordinals have equal cofinalities, so the assumption turns step 1.3 into $\operatorname{cf}(2^{\aleph_0}) = \aleph_0$, contradicting step 1.2 by [L4]; therefore $2^{\aleph_0} \ne \aleph_\omega$. [step 1.1, step 1.2, step 1.3, L4, discharge-contradiction] ∎

## Remarks

**What is being used, and what is not.** The refutation uses only [[cor-cofinality-of-a-cardinal-power]], itself a consequence of [[thm-konig]], together with the ZF computation of $\operatorname{cf}(\aleph_\omega)$. **No independence result is used anywhere**: this is a theorem of ZFC, not a statement about what ZFC fails to decide, and it would be equally true in any model of ZFC.

**Which values remain possible is a different question, and is not settled here.** The cofinality constraint excludes candidate values whose cofinality is $\aleph_0$; it does not identify the value of $2^{\aleph_0}$, and the choice ledger at the end of the main page records what is and is not decided.

**The parallel false claim about $\aleph_1$ is of a different kind.** "$2^{\aleph_0} = \aleph_1$" is not refutable here at all: it is the continuum hypothesis, and neither it nor its negation follows from anything on this page or on the pages this one rests on, as [[rem-cardinal-arithmetic-choice-ledger]] records. That difference is exactly why the present statement is on the page and the other is not: a false statement in this library carries a refutation, and a refutation must be a proof.
