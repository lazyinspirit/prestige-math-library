---
id: thm-halpern-lauchli-and-the-basic-cohen-bpi-model
kind: theorem
title: The Halpern–Läuchli theorem and the basic Cohen BPI model
status: draft
origin: pipeline
deps: [thm-halpern-lauchli-dense-matrix-dichotomy, thm-basic-cohen-model-satisfies-bpi-and-fails-choice]
proof_strategy: composition
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "J. D. Halpern and H. Läuchli, A partition theorem, Theorem 1, pp.360-367", url: "https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf"}
    - {title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, pp.83-134", url: "https://www.ams.org/books/pspum/013.1/0284328"}
---

## Statement

ZF proves the finite-product Halpern--Läuchli dense-matrix dichotomy. Separately, from a transitive ZFC ground and a supplied Cohen generic, the basic Cohen finite-support symmetric model is a transitive model of

$$\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}.$$

The model conclusion uses the Halpern--Lévy search-and-shift construction in the hereditarily symmetric presentation. It does not rely on the defective parameter-definable-maximal-ideal shortcut, and the choice-free combinatorial theorem does not by itself perform the symmetric-name analysis.

## Facts & Assumptions

**Given:** For the model clause, a transitive ZFC ground and a supplied generic for the basic Cohen forcing. The combinatorial clause has no construction hypothesis.

[F1] [[thm-halpern-lauchli-dense-matrix-dichotomy]] proves in ZF that for every positive finite family of finitistic trees and every subset of the full product, either the subset has matrices of every depth or its complement has matrices of every depth above one common level.

[F2] [[thm-basic-cohen-model-satisfies-bpi-and-fails-choice]] proves the exact semantic model assertion in the hereditarily symmetric presentation.

## Proof

**Proof technique:** composition of two separately verified modules.

1.1 F1 is already a theorem of ZF: its word calculus, finite thinning, and common-height cone repair use only finite coded selections. This proves the Halpern--Läuchli clause without AC. [F1]

1.2 Under the separate construction hypotheses, F2 supplies a transitive symmetric model satisfying ZF, BPI, and failure of AC. Its BPI proof works with finite supports and forcing-name orbits, so no identification with a parameter-HOD presentation is needed. [F2]

2.1 Steps 1.1 and 1.2 prove the two assertions and keep their axiom bases distinct. The empty family of trees is excluded by F1's positive-dimension hypothesis, while the model clause treats every nontrivial Boolean algebra through BPI. [step 1.1, step 1.2] ∎
