---
id: rem-arbitrary-compact-parameter-immersion-classification-needs-a-mapping-space-comparison
kind: remark
title: "Arbitrary compact-parameter immersion classification needs a mapping-space comparison"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-countable-choice, def-weak-homotopy-equivalence, def-homotopy-relative-and-path-homotopy, def-space-of-immersions-and-space-of-formal-immersions]
justified_by: []
aliases: []
proved_here: false
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "Morris W. Hirsch, Immersions of Manifolds, Transactions AMS 93 (1959), pp. 242–276; ordinary regular-homotopy and full-column core comparison context, not a proof for arbitrary compact parameter pairs"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/hirsch.pdf
external_dependency:
  source_url: https://www.maths.ed.ac.uk/~v1ranick/papers/hirsch.pdf
  exact_statement: >-
    and more generally for every compact pair $(P,Q)$ and every basepoint the relative homotopy sets of $\operatorname{Imm}(M,N)$ and $\operatorname{FImm}(M,N)$ agree. This is the parametrised classification statement: for compact $M$ and $P$ a compact parameter space, regular homotopy classes of $P$-families of immersions are the homotopy classes of $P$-families of formal immersions.
  local_proof_attempt: >-
    The main derivative weak equivalence gives ordinary components and finite-CW
    relative lifting. Its compact smooth parameter form needs the original family
    holonomic on an open parameter neighbourhood of the closed relative set.
    Extending these conclusions to arbitrary compact pairs was attempted by
    applying the source theorem to P times M, which changes source dimension,
    and by inferring arbitrary mapping-space comparison from weak equivalence.
    Neither argument proves the quoted claims. A globally continuous Hurewicz
    lifting/comparison construction, or a proved CW/ANR-type plus holonomic
    cofibration/relative mapping-space theorem, remains missing.
  necessity: >-
    This source-backed orientation records the previously promised generality
    without using it as a logical prerequisite. The original corollary and all
    its actual consumers need only ordinary components, finite-CW comparison or
    the permitted neighbourhood-holonomic compact smooth parameter form.
---

## Recorded claims — not proved

For compact smooth $M$ with positive codimension, the two original broader clauses are retained verbatim:

> and more generally for every compact pair $(P,Q)$ and every basepoint the relative homotopy sets of $\operatorname{Imm}(M,N)$ and $\operatorname{FImm}(M,N)$ agree.

> This is the parametrised classification statement: for compact $M$ and $P$ a compact parameter space, regular homotopy classes of $P$-families of immersions are the homotopy classes of $P$-families of formal immersions.

No proof of these arbitrary-compact assertions is supplied here. The cited Hirsch paper provides the ordinary immersion-theory context; it is not asserted to prove either recorded general compact-pair clause. This remark is a source-context orientation, not a theorem or a dependency supplier.

## Exact boundary

Assume $\mathrm{AC}_\omega$ for the canonical tangent bundles and their total-space mapping topologies ([[def-countable-choice]]). The local weak-equivalence definition gives only component and based homotopy-group comparisons ([[def-weak-homotopy-equivalence]]). Relative homotopy fixes the prescribed subset throughout ([[def-homotopy-relative-and-path-homotopy]]), and all families use the stated weak smooth mapping spaces ([[def-space-of-immersions-and-space-of-formal-immersions]]). Finite CW pairs and the stated compact smooth parameter pairs are handled in the proved corollary. Arbitrary compact spaces need an additional mapping-space comparison; arbitrary closed relative sets additionally need exact relative control. Strengthening the absolute disk evaluation alone does not prove this fibrewise/global lifting comparison. No source-dimension increase is used to disguise that missing supplier.
