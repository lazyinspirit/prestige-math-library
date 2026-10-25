---
id: cor-relative-consistency-of-halpern-lauchli-bpi-without-choice
kind: corollary
title: Relative consistency of BPI without Choice together with Halpern–Läuchli
status: published
origin: pipeline
deps: [thm-halpern-lauchli-dense-matrix-dichotomy, cor-relative-consistency-of-bpi-without-choice-over-zf, def-arithmetic-provability-and-consistency]
proof_strategy: formal-consistency-transfer
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
    - {title: "J. D. Halpern and H. Läuchli, A partition theorem, Theorem 1, pp.360-367", url: "https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf"}
    - {title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, pp.83-134", url: "https://www.ams.org/books/pspum/013.1/0284328"}
---

## Statement

Let HL be the finite-product dense-matrix scheme stated by [[thm-halpern-lauchli-dense-matrix-dichotomy]]. Then

$$\operatorname{Con}(\mathrm{ZF})\Longrightarrow\operatorname{Con}(\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}+\mathrm{HL}).$$

Thus, conditional on $\operatorname{Con}(\mathrm{ZF})$, BPI together with the choice-free Halpern--Läuchli scheme still does not imply AC.

## Facts & Assumptions

**Given:** Assume $\operatorname{Con}(\mathrm{ZF})$.

[F1] [[cor-relative-consistency-of-bpi-without-choice-over-zf]] gives $\operatorname{Con}(\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC})$ by a finite proof reduction.

[F2] [[thm-halpern-lauchli-dense-matrix-dichotomy]] is a ZF theorem uniform in every positive finite dimension and every finite tree family.

[F3] [[def-arithmetic-provability-and-consistency]] fixes the reading of consistency as absence of a standard finite refutation.

## Proof

**Proof technique:** external conservative extension by a theorem of the base theory.

1.1 Suppose the displayed target were inconsistent and fix a standard finite refutation. It uses only finitely many displayed HL instances, or one use of the uniformly quantified F2 theorem after its standard coding. Replace each such occurrence by the corresponding fixed finite ZF derivation from F2. This is an external transformation of the alleged finite refutation; no arithmetized uniform proof transformer is needed. [F2, F3, assume-contra]

2.1 The result is a refutation of $\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{AC}$, contradicting F1 under the given consistency hypothesis. Hence the target is consistent whenever ZF is. [F1, step 1.1, discharge-contradiction]

3.1 If BPI+HL implied AC over ZF, the target theory would prove both AC and its negation, contrary to step 2.1. This gives the stated conditional nonimplication without asserting any theory's consistency outright. [step 2.1, assume-contra] ∎
