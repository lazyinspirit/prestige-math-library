---
id: thm-totality-is-not-recognizable
kind: theorem
title: "Halting on every input is not recognizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-halting-problem, cor-nonhalting-is-not-recognizable, def-effective-encoding-of-turing-machines, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stan Nelson, Computability: Undecidable Problems"
      url: "https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html"
---

## Statement

Let
$$ TOT_{TM}:=\bigl\{\ulcorner M\urcorner : M \text{ is a coded deterministic one-tape Turing machine and } M \text{ halts on every input word over its own input alphabet}\bigr\}. $$
Then $TOT_{TM}$ is not recognizable.

## Facts & Assumptions

**Given:** The totality language $TOT_{TM}$.

[L1] The complement of $HALT_{TM}$ is not recognizable, by [[cor-nonhalting-is-not-recognizable]].

[L2] The chosen machine encoding is effective, so from a code $\langle\ulcorner M\urcorner,\widehat w\rangle$ one can effectively build a new coded machine whose finite control contains $\ulcorner M\urcorner$ and $\widehat w$, by [[def-effective-encoding-of-turing-machines]].

[L3] Recognizability means acceptance by some deterministic Turing machine on exactly the language members, by [[def-decidable-and-recognizable-language]].

[L4] $HALT_{TM}$ is the language of coded pairs on which the decoded machine halts on the decoded input, by [[def-halting-problem]].

## Proof

**Proof technique:** direct.

1.1 Given an input $z=\langle\ulcorner M\urcorner,\widehat w\rangle$ for the complement of $HALT_{TM}$ from [L4], effectively build a machine $T_{M,w}$ with input alphabet $\Sigma_1=\{1\}$ as follows. On input $x$, the machine simulates $M$ on $w$ for exactly $|x|$ steps. If the simulation has not halted by then, $T_{M,w}$ halts and accepts. If the simulation has halted within those $|x|$ steps, then $T_{M,w}$ enters an infinite loop. This construction is effective by [L2]. [L2, L4, given, construct]

2.1 If $M$ never halts on $w$, then every finite step-bounded simulation in step 1.1 remains nonhalting, so $T_{M,w}$ halts on every input $x$. Conversely, if $M$ halts on $w$ after exactly $t$ steps, then for every input $x$ with $|x|\ge t$ the machine $T_{M,w}$ detects that halting event during its first $|x|$ simulated steps and therefore loops forever. Hence $\langle\ulcorner M\urcorner,\widehat w\rangle\notin HALT_{TM}\iff \ulcorner T_{M,w}\urcorner\in TOT_{TM}$. [L4, step 1.1]

3.1 Suppose for contradiction that $TOT_{TM}$ were recognizable. Then, on input $z=\langle\ulcorner M\urcorner,\widehat w\rangle$, one could compute $\ulcorner T_{M,w}\urcorner$ and run the assumed recognizer for $TOT_{TM}$ on that code. By step 2.1, this would recognize the complement of $HALT_{TM}$, contradicting [L1]. Therefore $TOT_{TM}$ is not recognizable, by [L3]. [assume-contra, L1, L3, step 2.1, contradiction, discharge-contradiction: a recognizer for totality would recognize nonhalting] ∎
