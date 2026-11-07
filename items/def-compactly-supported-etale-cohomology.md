---
id: def-compactly-supported-etale-cohomology
kind: definition
title: "Compactly supported étale cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-derived-direct-image-with-proper-supports
  - thm-compact-support-direct-image-independent-of-compactification
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, §18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
    - title: "Grothendieck et al., SGA 5, Exposé XV §3"
      url: "https://grothendiecksga.com/read/sga5/en/XV-3.html"
---

## Definition

Let $X$ be a separated finite-type scheme over a field $k$, and let $f:X\to\operatorname{Spec}(k)$ be its structure morphism. For a constructible torsion étale sheaf $\mathcal F$, or for a bounded constructible $\mathbb Q_\ell$-complex $K$ with $\ell\ne\operatorname{char}(k)$, define $R\Gamma_c(X,-):=Rf_!(-)$ and $H_c^i(X,-):=H^i(R\Gamma_c(X,-))$. For a proper compactification $X\xhookrightarrow{j}\overline X\xrightarrow{\overline f}\operatorname{Spec}(k)$, these groups are computed as $H^i(\overline X,j_!\mathcal F)$ in the torsion case and as $H^i(\overline X,Rj_!K)$ in the $\ell$-adic case. Compactification independence is the preceding theorem. In degree zero, compact support means that the support of the global section is a closed subset of $\overline X$ contained in $X$.

## Definition references

[Milne, *Lectures on Étale Cohomology*, Chapter I, §18, pp. 119–122](https://jmilne.org/math/CourseNotes/LEC.pdf)

[SGA 5, Exposé XV §3](https://grothendiecksga.com/read/sga5/en/XV-3.html)
