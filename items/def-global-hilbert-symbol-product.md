---
id: def-global-hilbert-symbol-product
kind: definition
title: "Global Hilbert-symbol product over a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-number-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-roots-of-unity-in-a-field
  - def-local-artin-reciprocity-map
  - def-local-hilbert-symbol-over-field-containing-roots-of-unity
  - lem-local-hilbert-symbol-is-well-defined-and-bilinear
  - thm-archimedean-local-reciprocity
  - lem-global-hilbert-symbol-product-finite-support
justified_by:
  - lem-global-hilbert-symbol-product-finite-support
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: >-
  AC and Countable Choice are inherited from place classification and
  completions. AC and DC are retained for the local Artin interface and the
  finite-support supplier.
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter VIII §5"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "§5.7–5.10, Hilbert-symbol convention and product formula, printed pp.246–248."
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV §5.1"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "The local norm-residue symbol convention, printed pp.143–144."
verification:
  precheck: n/a
---

## Definition

Assume AC, Countable Choice and DC. Let $K$ be a number field, let $n\ge1$,
and suppose $\mu_n(K)=\{\zeta\in K^\times:\zeta^n=1\}$ has exactly $n$
elements.
For $a,b\in K^\times$ and a finite place $v$, put $K_v$ for the completion and choose
$\alpha_v\in\overline{K_v}$ with $\alpha_v^n=a$. Define
$$H_{v,n}(a,b):=\frac{\operatorname{rec}_{K_v}(b)(\alpha_v)}{\alpha_v}
=(b,a)_{K_v,n}\in\mu_n(K_v),$$
where the local Hilbert symbol uses the arithmetic Artin convention
$ (x,y)_{K_v,n}=\operatorname{rec}_{K_v}(x)(\beta)/\beta$ for $\beta^n=y$.
At a complex place set $H_{v,n}(a,b)=1$. At a real place the real embedding
has at most two $n$-th roots of unity, so $|\mu_n(K)|=n$ forces $n=1$ or
$2$; set $H_{v,1}(a,b)=1$ and, when
$n=2$, set $H_{v,2}(a,b)=-1$ exactly when $a<0$ and $b<0$, and $1$
otherwise. Define the **global Hilbert-symbol product** by
$$H_{K,n}(a,b):=\prod_v H_{v,n}(a,b)\in\mu_n(K).$$
The local root choice is immaterial, and only finitely many factors differ
from $1$.

## Definition references

[[def-number-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-roots-of-unity-in-a-field]]

[[def-local-artin-reciprocity-map]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[lem-local-hilbert-symbol-is-well-defined-and-bilinear]]

[[thm-archimedean-local-reciprocity]]

[[lem-global-hilbert-symbol-product-finite-support]]
