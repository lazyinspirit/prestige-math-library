---
id: rem-the-axiom-labels-and-where-they-come-from
kind: remark
title: "This page uses Grothendieck's AB1 and AB2 labels, and records the competing conventions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abelian-category]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra, §1.4"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Charles Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/weibelhom.pdf"
    - title: "The Stacks Project, Section 12.5"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

Grothendieck's original Tohoku paper labels the two extra clauses on top of
additivity as **AB1** and **AB2**: every morphism has a kernel and a cokernel,
and the canonical map $\operatorname{Coim}(f)\to\operatorname{Im}(f)$ is an
isomorphism. This page follows that convention.

Two cautions matter because both conventions occur in the modern literature.
First, there is no Grothendieck axiom "AB0": additivity is a standing
hypothesis, not a numbered clause. Second, Weibel's Appendix A uses the label
"AB2" for a different statement, namely that every monomorphism is the kernel
of its cokernel. That statement is proved later on this page as
[[thm-every-monomorphism-is-the-kernel-of-its-cokernel]].

The Stacks Project avoids the AB labels altogether and writes the same content
directly as the definition of an abelian category. That is compatible with this
page's choice; it is a notation split, not a mathematical disagreement.
