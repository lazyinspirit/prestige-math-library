---
id: thm-excision-for-singular-homology
kind: theorem
title: "Excision for singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, def-relative-singular-homology, prop-relative-homology-is-functorial-for-maps-of-pairs]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 2.20"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

If $Z\subseteq X$ and $\overline Z\subseteq\operatorname{int}_X(A)$, then
inclusion $(X-Z,A-Z)\to(X,A)$ induces isomorphisms
$H_n(X-Z,A-Z;G)\cong H_n(X,A;G)$ for every $n$.

## Facts & Assumptions

**Given:** $\overline Z\subseteq\operatorname{int}_X(A)$.

## Proof

**Proof technique:** direct.

1.1 Use the cover $\{X\setminus\overline Z,\operatorname{int}A\}$: its cover-small quotient complex for $(X,A)$ consists, modulo small chains in $A$, of precisely the small chains avoiding $Z$. [given, construct]

2.1 The two inclusions from their small complexes to the corresponding full relative complexes are chain homotopy equivalences. The quotient identification in step 1.1 therefore induces the stated isomorphism. [step 1.1, algebra] ∎
