---
id: "cor-relative-consistency-from-a-forced-sentence"
kind: "corollary"
title: "Relative consistency from a forced sentence"
deps: ["thm-formal-consistency-transfer-by-forcing"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $\varphi$ be a fixed membership sentence. Suppose a uniform formal finite-fragment forcing verification over ZFC forces $\varphi$ and verifies each required finite target fragment, with the total proof-constructor verification in an arithmetic base B specified by [[thm-formal-consistency-transfer-by-forcing]]. Then

$$B\vdash\operatorname{Con}(\mathrm{ZFC})\longrightarrow\operatorname{Con}(\mathrm{ZFC}+\varphi).$$

A single externally supplied CTM and its semantic extension do not provide the stipulated formal verification data.

## Facts & Assumptions

**Given:** A fixed sentence phi, the effective presentation obtained by adding that sentence to ZFC, and the B-verified finite-fragment forcing data of the statement.

[F1] [[thm-formal-consistency-transfer-by-forcing]] gives formal Con transfer for a certified effective target with B-verified source-model, conversion and soundness constructors.

## Proof

1.1 Take $T=\mathrm{ZFC}+\varphi$ in F1. Its certified axioms are either certified ZFC axioms or the single extra sentence phi, distinguished by a fixed tag and exact sentence-code equality. For a certified T-refutation its finite support is therefore a finite list of ZFC axioms, possibly together with phi. The assumed uniform verification supplies the constructors for that exact list; if phi is absent, restrict the same target verification to the smaller list. Thus T meets every hypothesis of F1. [F1, given]

2.1 F1 now yields the claimed implication in B. No existence assertion for a full ZFC CTM occurred in step 1.1: the hypothesis supplied verified proof constructors for the finite supports. Consequently a semantic extension of a single CTM does not suffice to instantiate this corollary unless those additional data are also provided. [F1, step 1.1] ∎
