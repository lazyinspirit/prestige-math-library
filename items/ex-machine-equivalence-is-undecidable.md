---
id: ex-machine-equivalence-is-undecidable
kind: example
title: "Reducing halting to language equivalence by a machine that either accepts everything or loops forever"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-machine-equivalence-is-undecidable, thm-halting-is-recognizable-and-undecidable]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stan Nelson, Computability: Undecidable Problems"
      url: "https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html"
---

## Example

Fix a coded pair $\langle\ulcorner M\urcorner,\widehat w\rangle$. The standard
reduction to machine equivalence builds a machine $E_{M,w}$ that ignores its
own input, waits to see whether $M$ halts on $w$, and then either accepts every
input or accepts none.

## Facts & Assumptions

**Given:** A fixed halting instance candidate $\langle\ulcorner M\urcorner,\widehat w\rangle$.

[L1] In the reduction proving [[thm-machine-equivalence-is-undecidable]], the machine $E_{M,w}$ recognizes $\Sigma^*$ when $M$ halts on $w$ and recognizes $\varnothing$ when $M$ does not halt on $w$.

[L2] The halting language $HALT_{TM}$ is undecidable, by [[thm-halting-is-recognizable-and-undecidable]].

## Verification

**Proof technique:** direct.

1.1 If $M$ halts on $w$, then the simulation inside $E_{M,w}$ eventually terminates on every input, after which $E_{M,w}$ accepts that input. So [L1] gives $L(E_{M,w})=\Sigma^*$, the same language recognized by an always-accept machine. [L1, given]

2.1 If $M$ does not halt on $w$, then the simulation inside $E_{M,w}$ never terminates, so $E_{M,w}$ accepts no input at all. Again by [L1], $L(E_{M,w})=\varnothing$, which is not the language of the always-accept machine. This sharp dichotomy is why deciding equivalence would decide halting, contradicting [L2]. [L1, L2, step 1.1] ∎
