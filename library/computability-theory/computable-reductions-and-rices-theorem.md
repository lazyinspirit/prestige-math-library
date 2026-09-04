---
page: computable-reductions-and-rices-theorem
title: "Computable Reductions and Rice's Theorem"
status: published
items:
  - def-computable-many-one-reduction
  - lem-many-one-reducibility-is-a-preorder
  - thm-many-one-reductions-transfer-decidability-and-recognizability
  - def-ce-hardness-and-completeness
  - thm-machine-acceptance-is-ce-complete
  - def-turing-reduction
  - lem-many-one-implies-turing-reduction
  - prop-the-converse-fails
  - def-index-set-and-extensional-machine-property
  - lem-rice-witness-machine-construction
  - thm-rices-theorem
  - cor-standard-semantic-machine-properties-are-undecidable
  - thm-rice-shapiro-positive-information-direction
  - prop-syntactic-properties-lie-outside-rices-theorem
examples:
  - fs-reductions-may-reverse-yes-and-no
  - fs-rices-theorem-applies-to-state-count
---

This page introduces computable many-one reducibility as the basic comparison
tool for undecidable problems, proves its first transfer theorems, and places
$A_{TM}$ as the canonical c.e.-complete language. It then contrasts many-one
and oracle reducibility with the standard separation given by
$\overline{A_{TM}}$ versus $A_{TM}$.

The second half recasts machine questions extensionally, proves Rice's theorem
through the witness-machine construction, records the standard semantic
applications, and closes with the exact boundary between semantic properties of
recognized languages and merely syntactic properties of machine descriptions.
