---
id: prop-the-converse-fails
kind: proposition
title: "Turing reducibility is strictly weaker than computable many-one reducibility"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-computable-many-one-reduction, def-turing-reduction, def-turing-machine-acceptance-problem, thm-machine-acceptance-is-recognizable, thm-machine-acceptance-is-undecidable, thm-decidable-iff-language-and-complement-are-recognizable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Statement

There exist languages $A$ and $B$ such that $A\le_T B$ but $A\not\le_m B$.
In particular,
$$ \overline{A_{TM}}\le_T A_{TM}\quad\text{but}\quad \overline{A_{TM}}\not\le_m A_{TM}. $$

## Facts & Assumptions

**Given:** The acceptance language $A_{TM}$ and its complement $\overline{A_{TM}}$.

[L1] The language $A_{TM}$ is recognizable, by [[thm-machine-acceptance-is-recognizable]].

[L2] A language is decidable exactly when both it and its complement are recognizable, by [[thm-decidable-iff-language-and-complement-are-recognizable]].

[L3] The language $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Proof

**Proof technique:** direct.

1.1 With oracle access to $A_{TM}$, an input $x$ belongs to $\overline{A_{TM}}$ exactly when the oracle answers "no" to the single query $x$. So the machine that asks that one query and flips the answer halts on every input and decides $\overline{A_{TM}}$. Hence $\overline{A_{TM}}\le_T A_{TM}$. [given, construct]

1.2 Suppose instead that $\overline{A_{TM}}\le_m A_{TM}$. Then $\overline{A_{TM}}$ would be recognizable because $A_{TM}$ is recognizable by [L1] and recognizability transfers backward along many-one reductions. Since [L1] also makes $A_{TM}$ recognizable, [L2] would imply that $A_{TM}$ is decidable, contradicting [L3]. Therefore $\overline{A_{TM}}\not\le_m A_{TM}$. [L1, L2, L3, assume-contra, contradiction]

2.1 Steps 1.1 and 1.2 exhibit a Turing reduction that is not a many-one reduction, so Turing reducibility is strictly weaker than computable many-one reducibility. [step 1.1, step 1.2, discharge-contradiction: the assumed many-one reduction would decide A_TM] ∎
