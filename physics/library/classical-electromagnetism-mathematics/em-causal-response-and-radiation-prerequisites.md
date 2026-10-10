---
page: em-causal-response-and-radiation-prerequisites
title: Em Causal Response And Radiation Prerequisites
status: draft
items: [thm-em-causal-dispersive-response, thm-em-radiation-asymptotic-flux]
examples: []
---

The mathematical layer beneath causal response theory and compact-source
radiation. The first item, [[thm-em-causal-dispersive-response]], develops the
convolution response $P(t)=\int_0^\infty K(s)E(t-s)ds$ of a real matrix kernel
on bounded continuous histories, proves that it is bounded, continuous, linear
and causal, and analyzes its transfer function $\chi(z)=\int_0^\infty
K(s)e^{izs}ds$ in the compactly supported and integrable branches: the
principal-value dispersion relations hold entrywise under exact decay
hypotheses, and the monochromatic period-averaged work is identified with the
quadratic form of the Hermitian dissipative part $(\chi-\chi^*)/(2i)$, whose
positivity is a passivity condition on the model rather than a consequence of
causality. The second item, [[thm-em-radiation-asymptotic-flux]], treats smooth
sources of compact spatial support with compact time support satisfying the
continuity equation; it proves the retarded field integrals on the exterior of
the source, identifies the retarded potentials with the zero-data wave Cauchy
solution, establishes the uniform far-zone expansion with explicit error
control by finitely many source suprema, and derives the outward flux limit at
fixed retarded time for the sphere at infinity.

Both items are mathematics: they carry `domain: mathematics`, depend only on
mathematical suppliers, and assert no physical conclusion. Empirical
qualifications of any physical use of these estimates belong to the consuming
physical item. The companion examples page records the two hypothesis
boundaries that these proofs depend on, namely that causality alone does not
force a nonnegative work form and that the far-zone flux limit is taken at
fixed retarded time rather than fixed observation time.
