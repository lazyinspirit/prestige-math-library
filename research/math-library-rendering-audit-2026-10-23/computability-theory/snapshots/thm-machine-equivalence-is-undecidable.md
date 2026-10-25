---
id: thm-machine-equivalence-is-undecidable
kind: theorem
title: "Language equivalence of Turing machines is undecidable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines, thm-halting-is-recognizable-and-undecidable, def-language-recognized-and-decided, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stan Nelson, Computability: Undecidable Problems"
      url: "https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html"
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Statement

Let
$$ EQ_{TM}:=\bigl\{\langle\ulcorner M_1\urcorner,\ulcorner M_2\urcorner\rangle : M_1 \text{ and } M_2 \text{ recognize the same language}\bigr\}. $$
Then $EQ_{TM}$ is undecidable.

## Facts & Assumptions

**Given:** The machine-equivalence language $EQ_{TM}$.

[L1] A deterministic machine recognizes a language exactly when it accepts precisely the words in that language, by [[def-language-recognized-and-decided]].

[L2] The chosen machine encoding is effective, so one can effectively build new coded machines from old codes and fixed finite control schemes, by [[def-effective-encoding-of-turing-machines]].

[L3] The halting language $HALT_{TM}$ is undecidable, by [[thm-halting-is-recognizable-and-undecidable]].

[L4] A language is decidable exactly when some deterministic Turing machine halts on every input and answers membership correctly, by [[def-decidable-and-recognizable-language]].

## Proof

**Proof technique:** direct.

1.1 Fix once and for all a coded deterministic machine $A$ that accepts every input. Given an instance $\langle\ulcorner M\urcorner,\widehat w\rangle$ of $HALT_{TM}$, use [L2] to build a machine $E_{M,w}$ that ignores its own input, simulates $M$ on $w$, accepts every input if that simulation ever halts, and otherwise loops forever on every input. [L2, given, construct]

2.1 If $M$ halts on $w$, then every input to $E_{M,w}$ eventually triggers acceptance, so [L1] gives $L(E_{M,w})=\Sigma^*$. If $M$ does not halt on $w$, then $E_{M,w}$ accepts no input at all, so $L(E_{M,w})=\varnothing$. Therefore $\langle\ulcorner M\urcorner,\widehat w\rangle\in HALT_{TM}\iff \langle\ulcorner E_{M,w}\urcorner,\ulcorner A\urcorner\rangle\in EQ_{TM}$. [L1, step 1.1]

3.1 Suppose for contradiction that $EQ_{TM}$ were decidable. Then step 2.1 would let that decider decide $HALT_{TM}$, contradicting [L3]. Hence $EQ_{TM}$ is undecidable, by [L4]. [assume-contra, L3, L4, step 2.1, contradiction, discharge-contradiction: an equivalence decider would decide halting] ∎
