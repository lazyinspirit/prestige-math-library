---
id: rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses
kind: remark
title: "Exact-sequence additivity of trace and its missing hypotheses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [thm-basic-properties-of-the-categorical-trace]
proved_here: false
external_dependency:
  source_url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
  exact_statement: "If C is a multitensor category, a:V->V** and W subseteq V is preserved by a, then Tr_L(a)=Tr_L(a|_W)+Tr_L(a|_{V/W}); likewise for right traces."
  local_proof_attempt: "I kept only the exact theorem statement and the missing-hypothesis warning. The source proof uses exact-sequence technology inside multitensor categories that this page does not build."
  necessity: "The page needs this boundary item to stop readers from widening Proposition 4.7.5 to arbitrary rigid abelian monoidal categories."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 4.7.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Remark

EGNO Proposition 4.7.5 proves an exact-sequence additivity formula for quantum
trace, but it proves it in a **multitensor category**, not under rigidity
alone. Concretely, if $a:V\to V^{\vee\vee}$ preserves a subobject
$W\subseteq V$, then the source theorem says

$$\operatorname{Tr}_L(a)=\operatorname{Tr}_L(a|_W)+\operatorname{Tr}_L(\bar a),$$

and likewise for right traces, where $\bar a$ is the induced map on $V/W$.

This page records that theorem exactly as source-backed boundary information and
does not widen it to an arbitrary rigid abelian monoidal category.
