---
id: def-the-quotient-of-an-object-by-a-subobject
kind: definition
title: "The quotient of an object by a subobject"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subobject-and-quotient-object, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.3"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Definition

Let $[m]$ be a subobject of an object $A$ in an abelian category, represented by
a monomorphism $m:M\to A$. The **quotient of $A$ by $[m]$** is the quotient
object represented by the cokernel of $m$:

$$A/[m]:=\operatorname{coker}(m).$$

Because every monomorphism is the kernel of its cokernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]), this quotient is
the object paired with the given subobject by the kernel-cokernel
correspondence. The next item checks that the definition does not depend on the
chosen representative of the class $[m]$.
