---
id: fs-yonedas-original-notation-agrees-with-the-modern-one
kind: false-statement
title: "FALSE: the integral notation of Yoneda's original paper means the same as the modern one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-end-and-coend, rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remarks 1.1.14 and 1.1.16"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Remark 4.6.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

**False claim:** the integral signs used in Yoneda's 1960 paper carry the same
meaning as the modern ones, so a formula copied from that paper may be read
directly with the conventions in force on this page
([[def-end-and-coend]],
[[rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows]]).

## Facts & Assumptions

**Given:** The notation fixed on this page, and the historical record of Yoneda's 1960 paper as reported by the sources listed in this item's references.

[F1] The vertex of an end is written $\int_cT(c,c)$ and the vertex of a coend $\int^cT(c,c)$, so the subscripted integral denotes the end and the superscripted one the coend ([[def-end-and-coend]]).

[L1] The conventions in force on this page fix, among others, that the subscripted integral denotes the end and the superscripted integral the coend ([[rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows]]).

[A1] Reported by Loregian, Remark 1.1.14, and by Richter, Remark 4.6.2: Yoneda's 1960 paper calls **integration** the operation now called the coend and writes it with the subscripted integral sign, and calls **cointegration** the operation now called the end, writing it with a starred superscript. Loregian, Remark 1.1.16, records further that the opposite of the modern convention adopted here is also in current use.

## Refutation

**Proof technique:** direct.

1.1 On this page the subscripted integral names the terminal wedge and the superscripted integral the initial cowedge, by [F1] and [L1]. These are the two conventions the claim proposes to read a historical formula against. [F1, L1, given]

2.1 By [A1] the historical notation attaches the subscripted sign to what is here the superscripted one. So the same symbol names the end on this page and the coend in that paper, and the two readings of one formula differ whenever the end and the coend of the integrand differ. [A1, step 1.1]

3.1 They do differ in general: the page's own witness on the walking arrow with the hom-bifunctor as integrand has a one-element end and a two-element coend. Hence the claim is false, and a formula transcribed from the 1960 paper must have its integral signs exchanged before it is read with the conventions of [L1]. The mathematics is unaffected by the transcription; only the symbols move. [A1, L1, step 2.1] ∎

## Remarks

The refutation is documentary, and deliberately so. It makes no claim about what the historical paper proves, only about which symbol it attaches to which construction, and that is reported by the two references listed above rather than asserted here.

A reader converting between conventions needs one rule and no mathematics: exchange subscript and superscript, and check the source's own statement of its convention rather than assuming the modern one. That the opposite convention is also in current use, and not only historical, is what makes the check worth performing every time.
