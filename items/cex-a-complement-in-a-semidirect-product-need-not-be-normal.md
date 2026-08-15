---
id: cex-a-complement-in-a-semidirect-product-need-not-be-normal
kind: counterexample
title: ' The reflection complement in $C_3\rtimes C_2\cong S_3$ is not normal'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-dihedral-groups-as-semidirect-products, prop-semidirect-product-is-direct-iff-action-is-trivial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement refuted

A complement to the normal factor in a semidirect product must itself be normal.

## Facts & Assumptions

**Given:** $D_3=C_3\rtimes C_2=\langle r,s:r^3=s^2=1,\ srs^{-1}=r^{-1}\rangle$.

[L1] For $n\ge1$ the dihedral group $D_n$ is $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ of order $2n$, and every element has a unique form $r^i$ or $r^is$ with $0\le i<n$; at $n=3$ this is the dihedral group of order six ([[cor-dihedral-groups-as-semidirect-products]]).

[L2] The canonical complement is normal exactly when the defining action is trivial ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

## Counterexample

**Proof technique:** direct.

1.1 The subgroup $H=\langle s\rangle$ is the canonical complement to $\langle r\rangle$. The inversion action on $C_3$ is nontrivial because $r^{-1}=r^2\ne r$. [L1, algebra]

2.1 Therefore $H$ is not normal by [L2]. Explicitly, $rsr^{-1}=r^2s$, which is not in $\{1,s\}$ by the uniqueness in [L1]. [step 1.1, L1, L2, algebra] ∎
