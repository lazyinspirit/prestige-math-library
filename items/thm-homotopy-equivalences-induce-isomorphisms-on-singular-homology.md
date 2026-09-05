---
id: thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
kind: theorem
title: "Homotopy equivalences induce isomorphisms on singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homotopy-equivalence, prop-singular-chains-and-homology-are-covariantly-functorial, cor-homotopic-maps-induce-the-same-map-on-singular-homology]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Statement

If $f:X\to Y$ is a homotopy equivalence, then for every $n\geq 0$ and every
abelian group $G$ the induced map
$$H_n(f_\#):H_n^{\mathrm{sing}}(X;G)\to H_n^{\mathrm{sing}}(Y;G)$$
is an isomorphism.

## Facts & Assumptions

**Given:** A homotopy equivalence $f:X\to Y$, an abelian group $G$, and an
integer $n\geq 0$.

[L1] A homotopy equivalence has a homotopy inverse $g:Y\to X$
([[def-homotopy-equivalence]]).

[L2] Singular homology is functorial for identities and composites
([[prop-singular-chains-and-homology-are-covariantly-functorial]]).

[L3] Homotopic maps induce the same map on singular homology
([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a homotopy inverse $g:Y\to X$ with $g\circ f\simeq \operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$. Applying [L3] gives $$H_n((g\circ f)_\#)=\operatorname{id}_{H_n(X;G)},\qquad H_n((f\circ g)_\#)=\operatorname{id}_{H_n(Y;G)}.$$ [L1, L3, given]

2.1 By [L2], $$H_n((g\circ f)_\#)=H_n(g_\#)\circ H_n(f_\#),\qquad H_n((f\circ g)_\#)=H_n(f_\#)\circ H_n(g_\#).$$ Combining this with step 1.1 shows that $H_n(g_\#)$ and $H_n(f_\#)$ are two-sided inverses. Hence $H_n(f_\#)$ is an isomorphism. [L2, step 1.1] ∎