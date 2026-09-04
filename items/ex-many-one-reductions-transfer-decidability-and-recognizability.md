---
id: ex-many-one-reductions-transfer-decidability-and-recognizability
kind: example
title: "Using A_TM <=m nonemptiness to transfer undecidability and recognizability information"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-many-one-reductions-transfer-decidability-and-recognizability, thm-machine-acceptance-is-undecidable]
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

## Example

Let
$$ \mathrm{NONEMPTY}_{TM}:=\{\ulcorner N\urcorner : L(N)\neq\varnothing\}. $$
The standard map from acceptance to nonemptiness shows how undecidability
transfers along a many-one reduction.

## Facts & Assumptions

**Given:** A coded pair $\langle\ulcorner M\urcorner,\widehat w\rangle$.

[L1] If $A\le_m B$, then decidability and recognizability of $B$ transfer backward to $A$, by [[thm-many-one-reductions-transfer-decidability-and-recognizability]].

[L2] The language $A_{TM}$ is undecidable, by [[thm-machine-acceptance-is-undecidable]].

## Verification

**Proof technique:** direct.

1.1 From $\langle\ulcorner M\urcorner,\widehat w\rangle$, build a machine $N_{M,w}$ that ignores its own input, simulates $M$ on $w$, and accepts exactly when that simulation accepts. Then $L(N_{M,w})\neq\varnothing$ exactly when $M$ accepts $w$. So this construction gives a many-one reduction from $A_{TM}$ to $\mathrm{NONEMPTY}_{TM}$. [given, construct]

2.1 If $\mathrm{NONEMPTY}_{TM}$ were decidable, [L1] would make $A_{TM}$ decidable, contradicting [L2]. Thus the nonemptiness problem is undecidable. More generally, recognizability of a target pulls backward along a many-one reduction, while the contrapositive pushes nonrecognizability of the source forward to the target. [L1, L2, step 1.1] ∎
