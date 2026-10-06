---
id: rem-current-faithfulness-status-of-the-reduced-burau-representation
kind: remark
title: "Current faithfulness status of the reduced Burau representation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
deps:
  - def-reduced-burau-representation
  - prop-reduced-and-unreduced-burau-representations-have-the-same-kernel
  - thm-reduced-burau-is-faithful-for-at-most-three-strands
justified_by: []
landmark: false
proved_here: false
external_dependency:
  source_url: "https://arxiv.org/pdf/2607.05283v2"
  exact_statement: "\"Main Theorem. The Burau representation rho_4 of B_4 is faithful.\" (Bharathram-Birman-Brendle, arXiv:2607.05283; the posting consulted is v2 of 14 September 2026, whose v1 is dated 6 July 2026.) Bigelow, \"The Burau representation is not faithful for n = 5\", Geometry & Topology 3 (1999) 397-404, abstract and Theorem 1.2: the Burau representation of the braid group on the free Z[t,t^{-1}]-module of rank n-1 is not faithful for n = 5 and hence for n >= 5."
  local_proof_attempt: "No local proof is supplied. The nonfaithfulness results rest on the Bigelow/Moody/Long-Paton curve criteria, which are not developed on this page; the n = 4 faithfulness claim is an unreviewed arXiv preprint. The page proves only the locally tractable case n <= 3 and records the remaining ranges with exact URLs."
  necessity: "A reader of the Burau page must see the true current status: faithfulness is locally proved here for n <= 3, nonfaithfulness is published for n >= 5, and n = 4 is claimed only in an unreviewed preprint that must not be reported as settled or used as a prerequisite."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283 (v1, 6 July 2026; v2, 14 September 2026), Abstract and Main Theorem (printed pp. 1-2)"
      url: "https://arxiv.org/pdf/2607.05283v2"
      locator: "Abstract and Main Theorem, printed pp. 1-2"
    - title: "Stephen J. Bigelow, The Burau representation is not faithful for n = 5, Geometry & Topology 3 (1999) 397-404, Abstract, Theorems 1.2 and 1.4 (printed pp. 397-399)"
      url: "https://arxiv.org/pdf/math/9904100"
      locator: "Abstract, Theorems 1.2 and 1.4, printed pp. 397-399"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
verification:
  precheck: n/a
---

This remark records, and does not prove, the current status of the
faithfulness question for the reduced Burau representation over
$\Lambda_1=\mathbb Z[t^{\pm1}]$.

**(1) Proved here.** Under AC the reduced Burau representation is faithful for
$1\le n\le3$, by
[[thm-reduced-burau-is-faithful-for-at-most-three-strands]]. Since the reduced
and unreduced representations have the same kernel
([[prop-reduced-and-unreduced-burau-representations-have-the-same-kernel]]),
the statement transfers verbatim between the reduced and unreduced
conventions.

**(2) Published nonfaithfulness, external.** The (reduced, equivalently
unreduced) Burau representation is not faithful for $n\ge5$: Bigelow proved
the case $n=5$ and hence the range $n\ge5$ (Geometry & Topology 3 (1999)
397-404, Theorems 1.2 and 1.4), improving on Moody's bound $n\ge9$ and
Long-Paton's bound $n\ge6$.

**(3) Unreviewed preprint, external.** Bharathram-Birman-Brendle,
arXiv:2607.05283, claim in their Main Theorem that the *unreduced* Burau
representation $\rho_4$ is faithful; by the same-kernel bridge of (1) this
would give faithfulness of the reduced $\rho_4$ as well. The posting consulted
here is v2 (14 September 2026), the revision of v1 (6 July 2026); both are
unreviewed arXiv postings. This claim is recorded as an unreviewed preprint
claim, not as settled peer-reviewed literature, and it is not a load-bearing
prerequisite for any item of this page: no item here depends on it, and the
case $n=4$ is otherwise left open by the peer-reviewed results of (2).

The external assertions in (2) and (3) are recorded, not proved on this page;
the exact primary URLs and locators are listed in the frontmatter.
