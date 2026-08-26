---
id: rem-bass-guivarch-growth-degree-formula
kind: remark
title: "Bass-Guivarch growth-degree formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-growth-function-of-a-finitely-generated-group, def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group, def-nilpotent-group-and-nilpotency-class]
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
  exact_statement: "For a finitely generated nilpotent group G, each lower-central quotient gamma_i(G)/gamma_{i+1}(G) is a finitely generated abelian group; if D(G) is the weighted sum of their free ranks, then the growth function of G is equivalent to n^{D(G)}."
  local_proof_attempt: "A local proof route would need Hall-Mal'cev or polynomial coordinate normal forms, control of lower-central weights, and the corresponding counting estimates. Those prerequisites are not published earlier in this library and would substantially enlarge the page."
  necessity: "The page needs the formula to identify the growth degree of the Heisenberg example and to derive the polynomial-growth corollary for finitely generated nilpotent groups."
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "H. Bass, The degree of polynomial growth of finitely generated nilpotent groups"
      url: "https://londmathsoc.onlinelibrary.wiley.com/doi/pdf/10.1112/plms/s3-25.4.603"
pipeline_run: null
---

For a finitely generated nilpotent group $G$, let $D(G)$ be the homogeneous
dimension from [[def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group]].
The **Bass-Guivarch growth-degree formula** says that, for every finite
generating set $S$,
$$\beta_{G,S}(n) \simeq n^{D(G)}.$$

This page does not prove that formula or the accompanying structural fact used
to state it. The source-backed result records that the lower-central quotients
are finitely generated abelian, so their displayed free ranks and the sum
defining $D(G)$ are well defined.
