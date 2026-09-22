---
id: rem-choice-strength-ledger-baire-urysohn-stone-tychonoff
kind: remark
title: "Choice ledger for Baire, Urysohn, Stone, and Tychonoff"
status: draft
origin: pipeline
deps: [thm-separable-complete-metric-baire-in-zf, thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf, thm-dmc-implies-compact-hausdorff-baire, thm-compact-hausdorff-baire-iff-dmc, thm-dc-iff-products-compact-hausdorff-are-baire, thm-dmc-implies-urysohn-lemma, rem-dmc-versus-dc-over-zf-is-open, thm-stone-metric-spaces-are-paracompact, thm-products-of-cofinite-spaces-compact-iff-bpi, thm-compact-t1-product-theorem-iff-ac, thm-arbitrary-compact-product-theorem-iff-ac, rem-urysohn-implies-dmc-open-status, rem-stone-exact-choice-strength-open-status, cor-brunner-models-also-refute-tietze-extension, cor-bpi-does-not-imply-dmc, cor-dmc-is-not-provable-in-zf, rem-dmc-mc-ac-zfa-qualification, thm-relative-consistency-countable-choice-without-urysohn, thm-relative-consistency-bpi-without-urysohn, thm-relative-consistency-dc-without-stone, thm-relative-consistency-bpi-without-stone]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "Section 2, pp. 5-8"
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Section 4, question and Proposition 5, printed pp. 8-9"
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "Introduction and Theorem 1"
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§3.4(a)-(b), printed pp. 72-73"
    - title: "Kyriakos Keremedis and Eleftherios Tachtsis, Wallman Compactifications and Tychonoff's Compactness Theorem in ZF"
      url: "https://topology.nipissingu.ca/tp/reprints/v42/tp42021.pdf"
      locator: "Discussion before Proposition 2.13, journal p. 282"
---

## Statement

Ledger: separable complete metric Baire is a theorem of $\mathrm{ZF}$; complete
metric Baire is DC; compact-Hausdorff Baire is exactly DMC; Baireness of
products of compact Hausdorff spaces is DC; DMC implies Urysohn's lemma, while,
relative to the consistency of ZF, countable choice and BPI are each consistent
with the failure of Urysohn's lemma and of bounded Tietze extension; Stone
follows from AC, while relative to the consistency of ZF both DC and BPI are
separately consistent with a metrizable space having an open cover with no
locally finite open refinement; the stronger
per-cover effective refinement assertion for discrete metrizable spaces implies
AC; compact Hausdorff products and cofinite products have the strength of BPI;
compact $T_1$ and arbitrary compact products have the strength of AC. DC
implies DMC; if ZF is consistent, ZF does not prove DMC; and DMC-to-DC over
$\mathrm{ZF}$ remains open.

## Remarks

- **Baire rows.** [[thm-separable-complete-metric-baire-in-zf]] is ZF, whereas
  [[thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf]]
  proves over ZF that the unrestricted complete-metric Baire principle is
  equivalent to DC;
  [[thm-dmc-implies-compact-hausdorff-baire]] gives DMC implies compact-Hausdorff
  Baire, [[thm-compact-hausdorff-baire-implies-dmc]] gives the converse and
  [[thm-compact-hausdorff-baire-iff-dmc]] packages the equivalence;
  [[thm-dc-iff-products-compact-hausdorff-are-baire]] is the product row, which
  is DC and not merely DMC.

- **Urysohn rows.** [[thm-dmc-implies-urysohn-lemma]] is the positive row;
  [[thm-relative-consistency-countable-choice-without-urysohn]] and
  [[thm-relative-consistency-bpi-without-urysohn]] are the two separations, and
  [[cor-brunner-models-also-refute-tietze-extension]] records the bounded-Tietze
  consequence. The status of the converse is
  [[rem-urysohn-implies-dmc-open-status]].

- **Stone rows.** [[thm-stone-metric-spaces-are-paracompact]] is the AC row;
  [[thm-relative-consistency-dc-without-stone]] and
  [[thm-relative-consistency-bpi-without-stone]] are relative-consistency
  separations from DC and BPI, respectively. In the BPI model the sharper
  obstruction is a metrizable space with an open cover having no point-finite
  open refinement, hence no locally finite open refinement;
  [[thm-effective-metacompact-discrete-metrics-implies-ac]] is the effective
  strengthening, and the exact strength of the ordinary theorem is recorded as
  open in [[rem-stone-exact-choice-strength-open-status]].

- **Tychonoff rows.** Cofinite products and compact Hausdorff products have the
  strength of BPI ([[thm-products-of-cofinite-spaces-compact-iff-bpi]], and the
  compact Hausdorff equivalence cited there); compact $T_1$ products and
  arbitrary compact products have the strength of AC
  ([[thm-compact-t1-product-theorem-iff-ac]],
  [[thm-arbitrary-compact-product-theorem-iff-ac]]).

- **Principle rows.** DC implies DMC and, assuming the consistency of ZF, DMC is
  not a ZF theorem ([[cor-dmc-is-not-provable-in-zf]]); BPI does not imply DMC
  ([[cor-bpi-does-not-imply-dmc]]); the qualifications over $\mathrm{ZFA}$ and
  the openness of the reversal are in [[rem-dmc-mc-ac-zfa-qualification]] and
  [[rem-dmc-versus-dc-over-zf-is-open]]. No strict DMC-versus-DC claim over
  $\mathrm{ZF}$ is made anywhere in this ledger.
