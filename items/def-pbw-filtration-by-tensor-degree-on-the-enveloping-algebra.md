---
id: def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra
kind: definition
title: "The PBW filtration by tensor degree on the enveloping algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Definition

Let $\mathfrak g$ be a complex Lie algebra and let $U(\mathfrak g)$ be its universal enveloping algebra from [[def-universal-enveloping-algebra-as-a-tensor-quotient]]. For $n\ge 0$, let $F_nU(\mathfrak g)$ be the image in $U(\mathfrak g)$ of the truncated tensor algebra

$$\bigoplus_{k=0}^n \mathfrak g^{\otimes k}\subseteq T(\mathfrak g).$$

The increasing sequence

$$F_0U(\mathfrak g)\subseteq F_1U(\mathfrak g)\subseteq F_2U(\mathfrak g)\subseteq \cdots$$

is the **PBW filtration by tensor degree**. Its associated graded algebra is

$$\operatorname{gr}U(\mathfrak g):=\bigoplus_{n\ge 0} F_nU(\mathfrak g)/F_{n-1}U(\mathfrak g),$$

with the convention $F_{-1}U(\mathfrak g)=0$.
