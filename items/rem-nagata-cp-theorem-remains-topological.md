---
id: rem-nagata-cp-theorem-remains-topological
kind: remark
title: Nagata Cp theorem remains topological
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: []
justified_by: []
external_refs: [rem-nagata-theorem-cp]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "V. V. Tkachuk, A Cp-Theory Problem Book: Topological and Function Spaces (Springer, 2011) — bibliographic orientation only; the exact Nagata statement was not full-text verified in this run"
      url: "https://doi.org/10.1007/978-1-4419-7442-6"
external_dependency:
  source_url: "https://doi.org/10.1007/978-1-4419-7442-6"
  exact_statement: "For Tychonoff spaces X and Y, an isomorphism of topological rings C_p(X,R) ≅ C_p(Y,R), where C_p carries the topology of pointwise convergence inherited from R^X and R^Y, implies X ≅ Y."
  local_proof_attempt: "No local proof is attempted in this run. The exact formulation, hypotheses and the pointwise topology convention were not verified against a complete authoritative proof here; the source listed is bibliographic orientation only, and the draft target [[rem-nagata-theorem-cp]] remains a Recorded result, not a proved supplier."
  necessity: "None for this pair: the statement is orientation only, it is never a dependency, well-definedness justification or load-bearing forward reference of any item on this page, and no proof below uses it. It is recorded so that the topological result is not silently presented as following from the ring-only beta-X reconstruction of [[thm-gelfand-kolmogorov-for-rings-of-continuous-functions]]."
---

## Statement

For Tychonoff spaces $X$ and $Y$, an isomorphism of **topological rings**
$C_p(X,\mathbb R) \cong C_p(Y,\mathbb R)$, where $C_p$ carries the topology of
pointwise convergence inherited from $\mathbb R^X$ and $\mathbb R^Y$, implies
$X \cong Y$.

This result is **recorded, not proved here**, and it is distinct from the
ring-only reconstruction of the Stone–Čech compactification: the algebraic
isomorphism class of $C(X,\mathbb R)$ alone reconstructs $\beta X$
([[thm-gelfand-kolmogorov-for-rings-of-continuous-functions]]), whereas Nagata's
theorem adds the pointwise topology as part of the data and recovers $X$ itself.
The draft target is [[rem-nagata-theorem-cp]], and it stays a Recorded result.

## Remarks

- **Orientation only.** No item on this page depends on this statement; it is not a supplier, and it is excluded from every proof path.
- **Open obligation for the catalogue.** Full-text verification of the exact statement, hypotheses and the pointwise-topology convention is an open repair obligation on the draft target, not a fact established here.
