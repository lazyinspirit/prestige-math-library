---
id: rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data
kind: remark
title: "Additivity can be derived rather than postulated, depending on the axiomatisation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-freyd-axioms-imply-the-additive-axioms, cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Appendix"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "Barry Mitchell, Theory of Categories, Proposition 18.4"
      url: "https://archive.org/details/theoryofcategori0000mitc"
pipeline_run: frontier-21
---

The working definition on this page starts from additivity because it is the
cleanest form for later citations. Freyd's axiomatisation goes the other way:
the additive structure is a theorem recovered from normality, conormality,
products, coproducts, kernels, and cokernels.

That is why items [[def-abelian-category]],
[[def-the-freyd-axioms-for-an-abelian-category]], and
[[thm-the-freyd-axioms-imply-the-additive-axioms]] coexist rather than compete.
The first is the library's working interface; the second and third explain why
that interface could have been packaged differently without changing the
mathematics.

The uniqueness part of the recovered enrichment is already abstracted in
[[cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument]]:
once the finite biproduct law exists, there is no second compatible addition to
choose.
