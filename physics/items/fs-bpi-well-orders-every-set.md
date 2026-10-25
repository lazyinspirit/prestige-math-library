---
id: fs-bpi-well-orders-every-set
kind: false-statement
title: BPI well-orders every set
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-basic-cohen-model-satisfies-bpi-and-fails-choice, cor-relative-consistency-of-bpi-without-choice-over-zf]
proof_strategy: countermodel
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, pp.83-134", url: "https://www.ams.org/books/pspum/013.1/0284328"}
---

## False statement

> The Boolean Prime Ideal Theorem implies that every set can be well-ordered.

## Why this is false

Whenever the basic Cohen symmetric construction in F1 is supplied, its model satisfies BPI and contains an infinite Dedekind-finite set of reals, which cannot be well-ordered. Independently, F2 gives the exact syntactic nonimplication conditional on $\operatorname{Con}(\mathrm{ZF})$.

## Facts & Assumptions

**Given:** Assume $\operatorname{Con}(\mathrm{ZF})$ for the conditional nonimplication.

[F1] [[thm-basic-cohen-model-satisfies-bpi-and-fails-choice]] supplies the basic Cohen model and its infinite Dedekind-finite symmetric set $A$.

[F2] [[cor-relative-consistency-of-bpi-without-choice-over-zf]] supplies the exact syntactic consistency implication from ZF to ZF+BPI+$\neg$AC.

[F3] [[def-axiom-of-choice]] defines AC as the assertion that every family of nonempty sets has a choice function.

## Proof

**Proof technique:** conditional countermodel.

1.1 In the F1 model, suppose $A$ had a well-order. Recursively choose the least member not chosen earlier. If the recursion stopped, $A$ would be finite; if it did not, it would inject $\omega$ into $A$. Both alternatives contradict that $A$ is infinite and Dedekind-finite. Hence $A$ is not well-orderable although BPI holds. [F1, assume-contra]

2.1 Universal well-orderability implies F3 directly. Given a family $\mathcal F$ of nonempty sets, well-order $\bigcup\mathcal F$ and assign to every $X\in\mathcal F$ its least member; Replacement produces the resulting choice function. Therefore, if ZF+BPI proved universal well-orderability, it would prove AC. This contradicts the consistency of ZF+BPI+$\neg$AC supplied by F2 and gives the syntactic conditional counterexample. [F2, F3, step 1.1, discharge-contradiction] ∎
