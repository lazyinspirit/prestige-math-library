---
id: def-central-character-of-a-lie-algebra-module
kind: definition
title: "Central character of a Lie algebra module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient, prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Definition

Let $\mathfrak g$ be a complex Lie algebra and let $M$ be a complex vector
space carrying a $\mathfrak g$-module structure. Let
$\widetilde\rho_M\colon U(\mathfrak g)\to \operatorname{End}_{\mathbb C}(M)$
be the induced action from
[[prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra]].
A **central character** of $M$ is a unital complex-algebra homomorphism

$$\chi\colon Z(U(\mathfrak g))\to \mathbb C$$

such that every central element $z\in Z(U(\mathfrak g))$ acts by

$$\widetilde\rho_M(z)=\chi(z)\operatorname{id}_M.$$

When such a map exists, one says that $M$ has central character $\chi$.
