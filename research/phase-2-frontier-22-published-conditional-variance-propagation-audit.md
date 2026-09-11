# Frontier-22 published conditional-variance propagation audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit reads the published expectation/moments definitions and the
conditional-variance definition, its well-definedness/second-moment lemma, the
variance decomposition and two exact `L^2` examples. Complete targets and every
used conditional/integral clause were read. This is not an audit of every
moment or variance consumer.

Before classification, the whole canonical ledger and bounded index were
searched by every exact ID, title, alias, the moment/conditional-variance
mechanisms and their expectation, conditional-class, contraction, taking-out,
`L^2` and event-integral supplier IDs. The expectation definition had exactly
one bounded-clear row and moves rather than duplicates, preserving its earlier
receipt. The other six items were unclassified. No published item or workflow
state was edited.

## Pending repair and exact propagation

The definitions, formulas and finite examples are mathematically sound after
the existing common simple/nonnegative-integral, `L^p` and conditional-
expectation repairs. No new theorem pair is required.

| Item | SHA-256 | Exact affected clause and repair |
|---|---|---|
| `def-expectation-of-a-nonnegative-or-integrable-random-variable` | `6a564c6ba82a58c9886f9dfffd23f5ea8029ecf28e033895cd20654d26108f09` | The nonnegative and finite signed/complex cases are correctly separated, but both directly use the affected nonnegative or integrable Lebesgue integral. Bounded clear to A-P. |
| `def-moments-variance-and-covariance` | `bfd65357a8e762288fd2fd8c257b432aee7153a9972ca6d7a56f9194b9337ef1` | Absolute moments, means, variance and covariance use the affected expectation definition. Square-integrability adequately supplies product integrability. New A-P. |
| `def-conditional-variance` | `03cfb081a78952c6b3d19aac119d7f82955390fcc17146b827cd2739b19cf839` | Its squared-residual class uses the affected conditional class, `L^2` contraction and taking-out chain; the next lemma correctly holds its well-definedness obligation. New A-P. |
| `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` | `b10ee6fc69f48d8e7051b8dab266fe6ae06e6394646d27b0deab4379ee4f9dc3` | Residual-square integrability and representative independence use affected contraction, `L^2` Cauchy--Schwarz, ae event integrals and the conditional class. Expansion uses affected taking-out/algebra/known-variable clauses. The finite-products check is complete. New A-P. |
| `cor-conditional-variance-decomposition` | `5f942e609d96e6139854d9c30a5f59132850a0fb0f83c90b545dbb2b20f467ff` | The expectation calculation uses the affected second-moment formula, expectation preservation and ordinary variance definition. Its algebra is correct after repair. New A-P. |
| `ex-law-of-total-variance` | `1357a88d6dbfbb7db252926ae397230eaab2cb271a6284187d4b011bf58944e8` | The four-atom calculations are correct, but the stated example invokes the affected known/independent conditioning, conditional variance and decomposition interfaces. New A-P. |
| `ex-l2-best-prediction-by-conditional-expectation` | `67a662b6ef53d10a87836dd8ac0e930a19b1ebabac547ced3434b99bfa8b1bd6` | The orthogonal error identity and four-atom calculation are correct, but the example directly invokes the affected `L^2` projection and conditional class. New A-P. |

## Frontier impact and limits

The active predictable-quadratic-variation drafts do not use this published
conditional-variance chain; they condition explicitly checked squared
increments. These findings therefore add no distinct active-frontier blocker.
No external source retrieval was needed because the issue is an exact local
dependency path. This audit does not claim to cover every expectation, moment
or variance consumer.
